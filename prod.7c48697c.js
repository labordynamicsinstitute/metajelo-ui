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
$jscomp.ENABLE_UNHANDLED_REJECTION_POLYFILL = !0;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, f) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[d] = f.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var d = 0; d < a.length; ++d) {
    var f = a[d];
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

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(a, d) {
  var f = $jscomp.propertyToPolyfillSymbol[d];
  if (null == f) return a[d];
  f = a[f];
  return void 0 !== f ? f : a[d];
};

$jscomp.polyfill = function (a, d, f, k) {
  d && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, d, f, k) : $jscomp.polyfillUnisolated(a, d, f, k));
};

$jscomp.polyfillUnisolated = function (a, d, f, k) {
  f = $jscomp.global;
  a = a.split(".");

  for (k = 0; k < a.length - 1; k++) {
    var g = a[k];
    if (!(g in f)) return;
    f = f[g];
  }

  a = a[a.length - 1];
  k = f[a];
  d = d(k);
  d != k && null != d && $jscomp.defineProperty(f, a, {
    configurable: !0,
    writable: !0,
    value: d
  });
};

$jscomp.polyfillIsolated = function (a, d, f, k) {
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
  d = d(f);
  null != d && (a ? $jscomp.defineProperty($jscomp.polyfills, g, {
    configurable: !0,
    writable: !0,
    value: d
  }) : d !== f && ($jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(g) : $jscomp.POLYFILL_PREFIX + g, g = $jscomp.propertyToPolyfillSymbol[g], $jscomp.defineProperty(k, g, {
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

  var f = 0,
      k = function k(g) {
    if (this instanceof k) throw new TypeError("Symbol is not a constructor");
    return new d("jscomp_symbol_" + (g || "") + "_" + f++, g);
  };

  return k;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var d = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), f = 0; f < d.length; f++) {
    var k = $jscomp.global[d[f]];
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

$jscomp.checkStringArgs = function (a, d, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (d) {
    var f = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = f.length;
    d = Number(d) || 0;

    if (0 <= d && d < k) {
      d |= 0;
      var g = f.charCodeAt(d);
      if (55296 > g || 56319 < g || d + 1 === k) return g;
      d = f.charCodeAt(d + 1);
      return 56320 > d || 57343 < d ? g : 1024 * (g - 55296) + d + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (d) {
    for (var f = "", k = 0; k < arguments.length; k++) {
      var g = Number(arguments[k]);
      if (0 > g || 1114111 < g || g !== Math.floor(g)) throw new RangeError("invalid_code_point " + g);
      65535 >= g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(g >>> 10 & 1023 | 55296), f += String.fromCharCode(g & 1023 | 56320));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (d, f, k) {
    f = null != f ? f : function (c) {
      return c;
    };
    var g = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];

    if ("function" == typeof b) {
      d = b.call(d);

      for (var e = 0; !(b = d.next()).done;) {
        g.push(f.call(k, b.value, e++));
      }
    } else for (b = d.length, e = 0; e < b; e++) {
      g.push(f.call(k, d[e], e));
    }

    return g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (d, f) {
    var k = $jscomp.checkStringArgs(this, d, "endsWith");
    d += "";
    void 0 === f && (f = k.length);
    f = Math.max(0, Math.min(f | 0, k.length));

    for (var g = d.length; 0 < g && 0 < f;) {
      if (k[--f] != d[--g]) return !1;
    }

    return 0 >= g;
  };
}, "es6", "es3");

$jscomp.iteratorFromArray = function (a, d) {
  a instanceof String && (a += "");
  var f = 0,
      k = !1,
      g = {
    next: function next() {
      if (!k && f < a.length) {
        var b = f++;
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

$jscomp.findInternal = function (a, d, f) {
  a instanceof String && (a = String(a));

  for (var k = a.length, g = 0; g < k; g++) {
    var b = a[g];
    if (d.call(f, b, g, a)) return {
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
  return a ? a : function (d, f) {
    return $jscomp.findInternal(this, d, f).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  a = a["Control.Alt"];

  a.Alt = function (d, f) {
    this.Functor0 = d;
    this.alt = f;
  };

  a.alt = function (d) {
    return d.alt;
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (d, f) {
    this.Applicative0 = d;
    this.Plus1 = f;
  };
})(PS);

(function (a) {
  a.arrayApply = function (d) {
    return function (f) {
      for (var k = d.length, g = f.length, b = Array(k * g), e = 0, c = 0; c < k; c++) {
        for (var m = d[c], h = 0; h < g; h++) {
          b[e++] = m(f[h]);
        }
      }

      return b;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var d = new function (f) {
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

  a.semigroupoidFn = d;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var d = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (k, g) {
    this.Semigroupoid0 = k;
    this.identity = g;
  }(function () {
    return f.semigroupoidFn;
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
    return function (f) {
      return function (k) {
        return d(k)(f);
      };
    };
  };

  a["const"] = function (d) {
    return function (f) {
      return d;
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (d) {
    return function (f) {
      for (var k = f.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = d(f[b]);
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
      f = a["Data.Functor"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(e) {
    this.map = e;
  };

  k = new a(k.compose(k.semigroupoidFn));
  f = new a(f.arrayMap);
  d.Functor = a;

  d.map = function (e) {
    return e.map;
  };

  d.mapFlipped = function (e) {
    return function (c) {
      return function (m) {
        return (0, e.map)(m)(c);
      };
    };
  };

  d["void"] = function (e) {
    return (0, e.map)(g["const"](b.unit));
  };

  d.voidRight = function (e) {
    return function (c) {
      return (0, e.map)(g["const"](c));
    };
  };

  d.voidLeft = function (e) {
    return function (c) {
      return function (m) {
        return (0, e.map)(g["const"](m))(c);
      };
    };
  };

  d.flap = function (e) {
    return function (c) {
      return function (m) {
        return (0, e.map)(function (h) {
          return h(m);
        })(c);
      };
    };
  };

  d.functorFn = k;
  d.functorArray = f;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var d = a["Control.Apply"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(c, m) {
    this.Functor0 = c;
    this.apply = m;
  };

  var e = new a(function () {
    return b.functorFn;
  }, function (c) {
    return function (m) {
      return function (h) {
        return c(h)(m(h));
      };
    };
  });
  f = new a(function () {
    return b.functorArray;
  }, f.arrayApply);
  d.Apply = a;

  d.apply = function (c) {
    return c.apply;
  };

  d.applyFirst = function (c) {
    return function (m) {
      return function (h) {
        return (0, c.apply)(b.map(c.Functor0())(g["const"])(m))(h);
      };
    };
  };

  d.applySecond = function (c) {
    return function (m) {
      return function (h) {
        return (0, c.apply)(b.map(c.Functor0())(g["const"](k.identity(k.categoryFn)))(m))(h);
      };
    };
  };

  d.applyFn = e;
  d.applyArray = f;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var d = a["Control.Applicative"],
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
  d.Applicative = a;

  d.pure = function (b) {
    return b.pure;
  };

  d.liftA1 = function (b) {
    return function (e) {
      return function (c) {
        return f.apply(b.Apply0())((0, b.pure)(e))(c);
      };
    };
  };

  d.unless = function (b) {
    return function (e) {
      return function (c) {
        if (!e) return c;
        if (e) return (0, b.pure)(k.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [e.constructor.name, c.constructor.name]);
      };
    };
  };

  d.applicativeArray = g;
})(PS);

(function (a) {
  a.arrayBind = function (d) {
    return function (f) {
      for (var k = [], g = 0, b = d.length; g < b; g++) {
        Array.prototype.push.apply(k, f(d[g]));
      }

      return k;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var d = a["Control.Bind"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = function b(c, m) {
    this.Apply0 = c;
    this.bind = m;
  };

  a = new b(function () {
    return f.applyArray;
  }, a["Control.Bind"].arrayBind);
  var e = new function (c) {
    this.discard = c;
  }(function (c) {
    return c.bind;
  });
  d.Bind = b;

  d.bind = function (c) {
    return c.bind;
  };

  d.bindFlipped = function (c) {
    return g.flip(c.bind);
  };

  d.discard = function (c) {
    return c.discard;
  };

  d.join = function (c) {
    return function (m) {
      return (0, c.bind)(m)(k.identity(k.categoryFn));
    };
  };

  d.bindArray = a;
  d.discardUnit = e;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var d = a["Control.Monad"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"];

  d.Monad = function (g, b) {
    this.Applicative0 = g;
    this.Bind1 = b;
  };

  d.ap = function (g) {
    return function (b) {
      return function (e) {
        return k.bind(g.Bind1())(b)(function (c) {
          return k.bind(g.Bind1())(e)(function (m) {
            return f.pure(g.Applicative0())(c(m));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Lazy"] = a["Control.Lazy"] || {};
  a = a["Control.Lazy"];

  a.defer = function (d) {
    return d.defer;
  };

  a.Lazy = function (d) {
    this.defer = d;
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var d = a["Data.Bifunctor"],
      f = a["Control.Category"];

  d.bimap = function (k) {
    return k.bimap;
  };

  d.Bifunctor = function (k) {
    this.bimap = k;
  };

  d.lmap = function (k) {
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
  var d = function d(f) {
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

  a.ordBooleanImpl = d;
  a.ordIntImpl = d;
  a.ordCharImpl = d;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});

(function (a) {
  var d = function d(f) {
    return function (k) {
      return f === k;
    };
  };

  a.eqBooleanImpl = d;
  a.eqIntImpl = d;
  a.eqCharImpl = d;
  a.eqStringImpl = d;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var d = function () {
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

  a.SProxy = d;
})(PS);

(function (a) {
  a.unsafeGet = function (d) {
    return function (f) {
      return f[d];
    };
  };

  a.unsafeSet = function (d) {
    return function (f) {
      return function (k) {
        var g = {},
            b;

        for (b in k) {
          ({}).hasOwnProperty.call(k, b) && (g[b] = k[b]);
        }

        g[d] = f;
        return g;
      };
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});

(function (a) {
  a["Record.Unsafe"] = a["Record.Unsafe"] || {};
  var d = a["Record.Unsafe"];
  a = a["Record.Unsafe"];
  d.unsafeGet = a.unsafeGet;
  d.unsafeSet = a.unsafeSet;
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var d = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.RLProxy = d;
})(PS);

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};

  var d = a["Data.Eq"],
      f = a["Data.Eq"],
      k = a["Data.Symbol"],
      g = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(w) {
    this.eqRecord = w;
  },
      c = function c(w) {
    this.eq = w;
  };

  a = new c(f.eqStringImpl);
  var m = new e(function (w) {
    return function (r) {
      return function (p) {
        return !0;
      };
    };
  }),
      h = new c(f.eqIntImpl),
      n = new c(f.eqCharImpl);
  f = new c(f.eqBooleanImpl);
  d.Eq = c;

  d.eq = function (w) {
    return w.eq;
  };

  d.eqBoolean = f;
  d.eqInt = h;
  d.eqChar = n;
  d.eqString = a;

  d.eqRec = function (w) {
    return function (r) {
      return new c((0, r.eqRecord)(b.RLProxy.value));
    };
  };

  d.eqRowNil = m;

  d.eqRowCons = function (w) {
    return function (r) {
      return function (p) {
        return function (z) {
          return new e(function (x) {
            return function (t) {
              return function (C) {
                var A = (0, w.eqRecord)(b.RLProxy.value)(t)(C),
                    q = k.reflectSymbol(p)(k.SProxy.value);
                q = g.unsafeGet(q);
                return (0, z.eq)(q(t))(q(C)) && A;
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

  var d = function () {
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

  a.LT = d;
  a.GT = f;
  a.EQ = k;
})(PS);

(function (a) {
  a.intSub = function (d) {
    return function (f) {
      return d - f | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (d) {
    return function (f) {
      return d + f | 0;
    };
  };

  a.intMul = function (d) {
    return function (f) {
      return d * f | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var d = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (f, k, g, b) {
    this.add = f;
    this.mul = k;
    this.one = g;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);

  d.zero = function (f) {
    return f.zero;
  };

  d.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var d = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (k, g) {
    this.Semiring0 = k;
    this.sub = g;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);

  d.negate = function (k) {
    return function (g) {
      return (0, k.sub)(f.zero(k.Semiring0()))(g);
    };
  };

  d.ringInt = a;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var d = a["Data.Ord"],
      f = a["Data.Ord"],
      k = a["Data.Eq"],
      g = a["Data.Ordering"],
      b = a["Data.Ring"],
      e = a["Data.Semiring"];

  a = function a(n, w) {
    this.Eq0 = n;
    this.compare = w;
  };

  var c = new a(function () {
    return k.eqInt;
  }, f.ordIntImpl(g.LT.value)(g.EQ.value)(g.GT.value)),
      m = new a(function () {
    return k.eqChar;
  }, f.ordCharImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  f = new a(function () {
    return k.eqBoolean;
  }, f.ordBooleanImpl(g.LT.value)(g.EQ.value)(g.GT.value));

  var h = function h(n) {
    return function (w) {
      return function (r) {
        return (0, n.compare)(w)(r) instanceof g.LT ? !1 : !0;
      };
    };
  };

  d.Ord = a;

  d.compare = function (n) {
    return n.compare;
  };

  d.max = function (n) {
    return function (w) {
      return function (r) {
        var p = (0, n.compare)(w)(r);
        if (p instanceof g.LT) return r;
        if (p instanceof g.EQ || p instanceof g.GT) return w;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [p.constructor.name]);
      };
    };
  };

  d.abs = function (n) {
    return function (w) {
      return function (r) {
        return h(n)(r)(e.zero(w.Semiring0())) ? r : b.negate(w)(r);
      };
    };
  };

  d.ordBoolean = f;
  d.ordInt = c;
  d.ordChar = m;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var d = a["Data.Bounded"],
      f = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(e, c, m) {
    this.Ord0 = e;
    this.bottom = c;
    this.top = m;
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
  d.Bounded = a;

  d.bottom = function (e) {
    return e.bottom;
  };

  d.top = function (e) {
    return e.top;
  };

  d.boundedBoolean = b;
  d.boundedInt = g;
  d.boundedChar = f;
})(PS);

(function (a) {
  a.showIntImpl = function (d) {
    return d.toString();
  };

  a.showCharImpl = function (d) {
    var f = d.charCodeAt(0);

    if (32 > f || 127 === f) {
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

      return "'\\" + f.toString(10) + "'";
    }

    return "'" === d || "\\" === d ? "'\\" + d + "'" : "'" + d + "'";
  };

  a.showStringImpl = function (d) {
    var f = d.length;
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
      g = g < f && "0" <= d[g] && "9" >= d[g] ? "\\&" : "";
      return "\\" + k.charCodeAt(0).toString(10) + g;
    }) + '"';
  };

  a.showArrayImpl = function (d) {
    return function (f) {
      for (var k = [], g = 0, b = f.length; g < b; g++) {
        k[g] = d(f[g]);
      }

      return "[" + k.join(",") + "]";
    };
  };

  a.cons = function (d) {
    return function (f) {
      return [d].concat(f);
    };
  };

  a.join = function (d) {
    return function (f) {
      return f.join(d);
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};

  var d = a["Data.Show"],
      f = a["Data.Show"],
      k = a["Data.Symbol"],
      g = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(r) {
    this.showRecordFields = r;
  },
      c = function c(r) {
    this.show = r;
  };

  a = new c(f.showStringImpl);
  var m = new e(function (r) {
    return function (p) {
      return [];
    };
  }),
      h = new c(f.showIntImpl),
      n = new c(f.showCharImpl),
      w = new c(function (r) {
    if (r) return "true";
    if (!r) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [r.constructor.name]);
  });
  d.Show = c;

  d.show = function (r) {
    return r.show;
  };

  d.showBoolean = w;
  d.showInt = h;
  d.showChar = n;
  d.showString = a;

  d.showArray = function (r) {
    return new c(f.showArrayImpl(r.show));
  };

  d.showRecord = function (r) {
    return function (p) {
      return new c(function (z) {
        z = (0, p.showRecordFields)(b.RLProxy.value)(z);
        return 0 === z.length ? "{}" : f.join(" ")(["{", f.join(", ")(z), "}"]);
      });
    };
  };

  d.showRecordFieldsNil = m;

  d.showRecordFieldsCons = function (r) {
    return function (p) {
      return function (z) {
        return new e(function (x) {
          return function (t) {
            var C = (0, p.showRecordFields)(b.RLProxy.value)(t),
                A = k.reflectSymbol(r)(k.SProxy.value);
            t = g.unsafeGet(A)(t);
            return f.cons(f.join(": ")([A, (0, z.show)(t)]))(C);
          };
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var d = a["Data.Maybe"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Data.Bounded"],
      c = a["Data.Eq"],
      m = a["Data.Function"],
      h = a["Data.Functor"],
      n = a["Data.Ord"],
      w = a["Data.Ordering"],
      r = a["Data.Show"],
      p = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      z = function () {
    function v(E) {
      this.value0 = E;
    }

    v.create = function (E) {
      return new v(E);
    };

    return v;
  }(),
      x = function x(v) {
    return function (E) {
      return function (y) {
        if (y instanceof p) return v;
        if (y instanceof z) return E(y.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [v.constructor.name, E.constructor.name, y.constructor.name]);
      };
    };
  };

  a = x(!0)(m["const"](!1));
  m = x(!1)(m["const"](!0));

  var t = new h.Functor(function (v) {
    return function (E) {
      return E instanceof z ? new z(v(E.value0)) : p.value;
    };
  }),
      C = function C(v) {
    return new c.Eq(function (E) {
      return function (y) {
        return E instanceof p && y instanceof p ? !0 : E instanceof z && y instanceof z ? c.eq(v)(E.value0)(y.value0) : !1;
      };
    });
  },
      A = function A(v) {
    return new n.Ord(function () {
      return C(v.Eq0());
    }, function (E) {
      return function (y) {
        if (E instanceof p && y instanceof p) return w.EQ.value;
        if (E instanceof p) return w.LT.value;
        if (y instanceof p) return w.GT.value;
        if (E instanceof z && y instanceof z) return n.compare(v)(E.value0)(y.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [E.constructor.name, y.constructor.name]);
      };
    });
  },
      q = new k.Apply(function () {
    return t;
  }, function (v) {
    return function (E) {
      if (v instanceof z) return h.map(t)(v.value0)(E);
      if (v instanceof p) return p.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, E.constructor.name]);
    };
  });

  k = new g.Bind(function () {
    return q;
  }, function (v) {
    return function (E) {
      if (v instanceof z) return E(v.value0);
      if (v instanceof p) return p.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, E.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return q;
  }, z.create);
  d.Nothing = p;
  d.Just = z;
  d.maybe = x;

  d.fromMaybe = function (v) {
    return x(v)(b.identity(b.categoryFn));
  };

  d.isJust = m;
  d.isNothing = a;

  d.fromJust = function (v) {
    return function (E) {
      if (E instanceof z) return E.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [E.constructor.name]);
    };
  };

  d.functorMaybe = t;
  d.applyMaybe = q;
  d.applicativeMaybe = f;
  d.bindMaybe = k;
  d.eqMaybe = C;
  d.ordMaybe = A;

  d.boundedMaybe = function (v) {
    return new e.Bounded(function () {
      return A(v.Ord0());
    }, p.value, new z(e.top(v)));
  };

  d.showMaybe = function (v) {
    return new r.Show(function (E) {
      if (E instanceof z) return "(Just " + (r.show(v)(E.value0) + ")");
      if (E instanceof p) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [E.constructor.name]);
    });
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var d = a["Data.Either"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Bifunctor"],
      c = a["Data.Function"],
      m = a["Data.Functor"],
      h = a["Data.Maybe"],
      n = function () {
    function t(C) {
      this.value0 = C;
    }

    t.create = function (C) {
      return new t(C);
    };

    return t;
  }(),
      w = function () {
    function t(C) {
      this.value0 = C;
    }

    t.create = function (C) {
      return new t(C);
    };

    return t;
  }(),
      r = new m.Functor(function (t) {
    return function (C) {
      if (C instanceof n) return new n(C.value0);
      if (C instanceof w) return new w(t(C.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [C.constructor.name]);
    };
  });

  a = function a(t) {
    return function (C) {
      return function (A) {
        if (A instanceof n) return t(A.value0);
        if (A instanceof w) return C(A.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [t.constructor.name, C.constructor.name, A.constructor.name]);
      };
    };
  };

  c = a(c["const"](h.Nothing.value))(h.Just.create);
  e = new e.Bifunctor(function (t) {
    return function (C) {
      return function (A) {
        if (A instanceof n) return new n(t(A.value0));
        if (A instanceof w) return new w(C(A.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [t.constructor.name, C.constructor.name, A.constructor.name]);
      };
    };
  });
  var p = new k.Apply(function () {
    return r;
  }, function (t) {
    return function (C) {
      if (t instanceof n) return new n(t.value0);
      if (t instanceof w) return m.map(r)(t.value0)(C);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [t.constructor.name, C.constructor.name]);
    };
  }),
      z = new g.Bind(function () {
    return p;
  }, a(function (t) {
    return function (C) {
      return new n(t);
    };
  })(function (t) {
    return function (C) {
      return C(t);
    };
  })),
      x = new f.Applicative(function () {
    return p;
  }, w.create);
  f = new b.Monad(function () {
    return x;
  }, function () {
    return z;
  });
  d.Left = n;
  d.Right = w;
  d.either = a;
  d.hush = c;
  d.functorEither = r;
  d.bifunctorEither = e;
  d.applicativeEither = x;
  d.bindEither = z;
  d.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var d = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = function () {
    function m(h) {
      this.value0 = h;
    }

    m.create = function (h) {
      return new m(h);
    };

    return m;
  }(),
      b = function () {
    function m(h) {
      this.value0 = h;
    }

    m.create = function (h) {
      return new m(h);
    };

    return m;
  }();

  a = function a(m, h) {
    this.Monad0 = m;
    this.tailRecM = h;
  };

  var e = function e(m) {
    return function (h) {
      h = m(h);

      for (var n = !1, w; !n;) {
        if (w = h, w instanceof g) h = m(w.value0), w = void 0;else if (w instanceof b) n = !0, w = w.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [w.constructor.name]);
      }

      return w;
    };
  },
      c = new a(function () {
    return k.monadEither;
  }, function (m) {
    return function (h) {
      return e(function (n) {
        if (n instanceof k.Left) return new b(new k.Left(n.value0));
        if (n instanceof k.Right && n.value0 instanceof g) return new g(m(n.value0.value0));
        if (n instanceof k.Right && n.value0 instanceof b) return new b(new k.Right(n.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [n.constructor.name]);
      })(m(h));
    };
  });

  f = new f.Bifunctor(function (m) {
    return function (h) {
      return function (n) {
        if (n instanceof g) return new g(m(n.value0));
        if (n instanceof b) return new b(h(n.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [m.constructor.name, h.constructor.name, n.constructor.name]);
      };
    };
  });
  d.Loop = g;
  d.Done = b;
  d.MonadRec = a;

  d.tailRecM = function (m) {
    return m.tailRecM;
  };

  d.bifunctorStep = f;
  d.monadRecEither = c;
})(PS);

(function (a) {
  a.foldrArray = function (d) {
    return function (f) {
      return function (k) {
        for (var g = f, b = k.length - 1; 0 <= b; b--) {
          g = d(k[b])(g);
        }

        return g;
      };
    };
  };

  a.foldlArray = function (d) {
    return function (f) {
      return function (k) {
        for (var g = f, b = k.length, e = 0; e < b; e++) {
          g = d(g)(k[e]);
        }

        return g;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a.boolConj = function (d) {
    return function (f) {
      return d && f;
    };
  };

  a.boolDisj = function (d) {
    return function (f) {
      return d || f;
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
  var f = new function (k, g, b, e, c, m) {
    this.conj = k;
    this.disj = g;
    this.ff = b;
    this.implies = e;
    this.not = c;
    this.tt = m;
  }(a.boolConj, a.boolDisj, !1, function (k) {
    return function (g) {
      return (0, f.disj)((0, f.not)(k))(g);
    };
  }, a.boolNot, !0);

  d.ff = function (k) {
    return k.ff;
  };

  d.disj = function (k) {
    return k.disj;
  };

  d.not = function (k) {
    return k.not;
  };

  d.heytingAlgebraBoolean = f;
})(PS);

(function (a) {
  a.concatString = function (d) {
    return function (f) {
      return d + f;
    };
  };

  a.concatArray = function (d) {
    return function (f) {
      return 0 === d.length ? f : 0 === f.length ? d : d.concat(f);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};

  var d = a["Data.Semigroup"],
      f = a["Data.Semigroup"],
      k = function k(g) {
    this.append = g;
  };

  a = new k(f.concatString);
  f = new k(f.concatArray);
  d.Semigroup = k;

  d.append = function (g) {
    return g.append;
  };

  d.semigroupString = a;

  d.semigroupFn = function (g) {
    return new k(function (b) {
      return function (e) {
        return function (c) {
          return (0, g.append)(b(c))(e(c));
        };
      };
    });
  };

  d.semigroupArray = f;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var d = a["Data.Monoid"],
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
  d.Monoid = k;

  d.mempty = function (b) {
    return b.mempty;
  };

  d.monoidFn = function (b) {
    return new k(function () {
      return f.semigroupFn(b.Semigroup0());
    }, function (e) {
      return b.mempty;
    });
  };

  d.monoidString = a;
  d.monoidArray = g;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var d = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      g = a["Data.Semigroup"],
      b = function b(e) {
    return new g.Semigroup(function (c) {
      return function (m) {
        return f.disj(e)(c)(m);
      };
    });
  };

  d.Disj = function (e) {
    return e;
  };

  d.monoidDisj = function (e) {
    return new k.Monoid(function () {
      return b(e);
    }, f.ff(e));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var d = a["Data.Newtype"],
      f = a["Data.Functor"],
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

  d.wrap = function (g) {
    return g.wrap;
  };

  d.Newtype = k;

  d.alaF = function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (m) {
            return function (h) {
              var n = f.map(b)(c.unwrap),
                  w = f.map(g)(e.wrap);
              return function (r) {
                return n(h(w(r)));
              };
            };
          };
        };
      };
    };
  };

  d.over = function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          var m = b.wrap,
              h = g.unwrap;
          return function (n) {
            return m(c(h(n)));
          };
        };
      };
    };
  };

  d.under = function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          var m = b.unwrap,
              h = g.wrap;
          return function (n) {
            return m(c(h(n)));
          };
        };
      };
    };
  };

  d.newtypeDisj = a;
})(PS);

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var d = a["Data.Foldable"],
      f = a["Data.Foldable"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Eq"],
      c = a["Data.Function"],
      m = a["Data.Functor"],
      h = a["Data.HeytingAlgebra"],
      n = a["Data.Maybe"],
      w = a["Data.Monoid"],
      r = a["Data.Monoid.Disj"],
      p = a["Data.Newtype"],
      z = a["Data.Semigroup"],
      x = a["Data.Unit"];

  a = function a(y, F, D) {
    this.foldMap = y;
    this.foldl = F;
    this.foldr = D;
  };

  var t = function t(y) {
    return function (F) {
      return function (D) {
        return (0, F.foldr)(function () {
          var I = g.applySecond(y.Apply0());
          return function (u) {
            return I(D(u));
          };
        }())(k.pure(y)(x.unit));
      };
    };
  },
      C = new a(function (y) {
    return function (F) {
      return function (D) {
        if (D instanceof n.Nothing) return w.mempty(y);
        if (D instanceof n.Just) return F(D.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [F.constructor.name, D.constructor.name]);
      };
    };
  }, function (y) {
    return function (F) {
      return function (D) {
        if (D instanceof n.Nothing) return F;
        if (D instanceof n.Just) return y(F)(D.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, F.constructor.name, D.constructor.name]);
      };
    };
  }, function (y) {
    return function (F) {
      return function (D) {
        if (D instanceof n.Nothing) return F;
        if (D instanceof n.Just) return y(D.value0)(F);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, F.constructor.name, D.constructor.name]);
      };
    };
  }),
      A = function A(y) {
    return function (F) {
      return function (D) {
        return (0, y.foldr)(function (I) {
          return function (u) {
            return z.append(F.Semigroup0())(D(I))(u);
          };
        })(w.mempty(F));
      };
    };
  },
      q = new a(function (y) {
    return A(q)(y);
  }, f.foldlArray, f.foldrArray),
      v = function v(y) {
    return function (F) {
      return p.alaF(m.functorFn)(m.functorFn)(p.newtypeDisj)(p.newtypeDisj)(r.Disj)((0, y.foldMap)(r.monoidDisj(F)));
    };
  },
      E = function E(y) {
    return function (F) {
      var D = v(y)(h.heytingAlgebraBoolean),
          I = e.eq(F);
      return function (u) {
        return D(I(u));
      };
    };
  };

  d.Foldable = a;

  d.foldr = function (y) {
    return y.foldr;
  };

  d.foldl = function (y) {
    return y.foldl;
  };

  d.foldMap = function (y) {
    return y.foldMap;
  };

  d.fold = function (y) {
    return function (F) {
      return (0, y.foldMap)(F)(b.identity(b.categoryFn));
    };
  };

  d.traverse_ = t;

  d.for_ = function (y) {
    return function (F) {
      return c.flip(t(y)(F));
    };
  };

  d.intercalate = function (y) {
    return function (F) {
      return function (D) {
        return function (I) {
          return (0, y.foldl)(function (u) {
            return function (M) {
              return u.init ? {
                init: !1,
                acc: M
              } : {
                init: !1,
                acc: z.append(F.Semigroup0())(u.acc)(z.append(F.Semigroup0())(D)(M))
              };
            };
          })({
            init: !0,
            acc: w.mempty(F)
          })(I).acc;
        };
      };
    };
  };

  d.any = v;

  d.notElem = function (y) {
    return function (F) {
      return function (D) {
        var I = h.not(h.heytingAlgebraBoolean),
            u = E(y)(F)(D);
        return function (M) {
          return I(u(M));
        };
      };
    };
  };

  d.find = function (y) {
    return function (F) {
      return (0, y.foldl)(function (D) {
        return function (I) {
          return D instanceof n.Nothing && F(I) ? new n.Just(I) : D;
        };
      })(n.Nothing.value);
    };
  };

  d.foldableArray = q;
  d.foldableMaybe = C;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var d = a["Data.NonEmpty"],
      f = a["Data.Foldable"],
      k = a["Data.Functor"],
      g = a["Data.Semigroup"],
      b = function () {
    function e(c, m) {
      this.value0 = c;
      this.value1 = m;
    }

    e.create = function (c) {
      return function (m) {
        return new e(c, m);
      };
    };

    return e;
  }();

  d.NonEmpty = b;

  d.functorNonEmpty = function (e) {
    return new k.Functor(function (c) {
      return function (m) {
        return new b(c(m.value0), k.map(e)(c)(m.value1));
      };
    });
  };

  d.foldableNonEmpty = function (e) {
    return new f.Foldable(function (c) {
      return function (m) {
        return function (h) {
          return g.append(c.Semigroup0())(m(h.value0))(f.foldMap(e)(c)(m)(h.value1));
        };
      };
    }, function (c) {
      return function (m) {
        return function (h) {
          return f.foldl(e)(c)(c(m)(h.value0))(h.value1);
        };
      };
    }, function (c) {
      return function (m) {
        return function (h) {
          return c(h.value0)(f.foldr(e)(c)(m)(h.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var d = a["Data.List.Types"],
      f = a["Data.Foldable"],
      k = a["Data.Function"],
      g = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.NonEmpty"],
      c = a["Data.Semigroup"],
      m = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      h = function () {
    function r(p, z) {
      this.value0 = p;
      this.value1 = z;
    }

    r.create = function (p) {
      return function (z) {
        return new r(p, z);
      };
    };

    return r;
  }();

  a = new g.Functor(function (r) {
    return function (p) {
      return function (z) {
        function x(q, v) {
          if (v instanceof h && v.value1 instanceof h && v.value1.value1 instanceof h) t = new h(v, q), z = v.value1.value1.value1;else return C = !0, function (E) {
            return function (y) {
              for (var F = E, D = !1, I; !D;) {
                I = F;
                var u = y;
                I instanceof h && I.value0 instanceof h && I.value0.value1 instanceof h && I.value0.value1.value1 instanceof h ? (F = I.value1, y = new h(r(I.value0.value0), new h(r(I.value0.value1.value0), new h(r(I.value0.value1.value1.value0), u))), I = void 0) : (D = !0, I = u);
              }

              return I;
            };
          }(q)(function (E) {
            return E instanceof h && E.value1 instanceof h && E.value1.value1 instanceof m ? new h(r(E.value0), new h(r(E.value1.value0), m.value)) : E instanceof h && E.value1 instanceof m ? new h(r(E.value0), m.value) : m.value;
          }(v));
        }

        for (var t = p, C = !1, A; !C;) {
          A = x(t, z);
        }

        return A;
      };
    }(m.value);
  });
  a = e.functorNonEmpty(a);
  var n = new f.Foldable(function (r) {
    return function (p) {
      return f.foldl(n)(function (z) {
        var x = c.append(r.Semigroup0())(z);
        return function (t) {
          return x(p(t));
        };
      })(b.mempty(r));
    };
  }, function (r) {
    return function (p) {
      return function (z) {
        for (var x = p, t = !1, C; !t;) {
          C = x;
          var A = z;
          if (A instanceof m) t = !0;else {
            if (A instanceof h) x = r(C)(A.value0), z = A.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [A.constructor.name]);
            C = void 0;
          }
        }

        return C;
      };
    };
  }, function (r) {
    return function (p) {
      var z = f.foldl(n)(k.flip(h.create))(m.value),
          x = f.foldl(n)(k.flip(r))(p);
      return function (t) {
        return x(z(t));
      };
    };
  });
  e = e.foldableNonEmpty(n);
  var w = new c.Semigroup(function (r) {
    return function (p) {
      return f.foldr(n)(h.create)(p)(r);
    };
  });
  g = new b.Monoid(function () {
    return w;
  }, m.value);
  d.Nil = m;
  d.Cons = h;
  d.monoidList = g;
  d.foldableList = n;
  d.functorNonEmptyList = a;
  d.foldableNonEmptyList = e;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var d = a["Data.List"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Rec.Class"],
      m = a["Data.Bifunctor"],
      h = a["Data.Functor"],
      n = a["Data.List.Types"],
      w = a["Data.Unit"],
      r = function () {
    return function (x) {
      return function (t) {
        for (var C = x, A = !1, q; !A;) {
          q = C;
          var v = t;
          if (v instanceof n.Nil) A = !0;else {
            if (v instanceof n.Cons) C = new n.Cons(v.value0, q), t = v.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [q.constructor.name, v.constructor.name]);
            q = void 0;
          }
        }

        return q;
      };
    }(n.Nil.value);
  }(),
      p = function p(x) {
    return function (t) {
      return function (C) {
        return g.apply(x.Applicative0().Apply0())(h.map(x.Plus1().Alt0().Functor0())(n.Cons.create)(C))(e.defer(t)(function (A) {
          return z(x)(t)(C);
        }));
      };
    };
  },
      z = function z(x) {
    return function (t) {
      return function (C) {
        return f.alt(x.Plus1().Alt0())(p(x)(t)(C))(k.pure(x.Applicative0())(n.Nil.value));
      };
    };
  };

  d.some = p;

  d.manyRec = function (x) {
    return function (t) {
      return function (C) {
        return c.tailRecM(x)(function (A) {
          return b.bind(x.Monad0().Bind1())(f.alt(t.Plus1().Alt0())(h.map(t.Plus1().Alt0().Functor0())(c.Loop.create)(C))(k.pure(t.Applicative0())(new c.Done(w.unit))))(function (q) {
            return k.pure(t.Applicative0())(m.bimap(c.bifunctorStep)(function (v) {
              return new n.Cons(v, A);
            })(function (v) {
              return r(A);
            })(q));
          });
        })(n.Nil.value);
      };
    };
  };

  d.reverse = r;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var d = a["Data.Tuple"];
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
  d.Tuple = f;

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
      f = a["Data.List"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = function () {
    function c(m, h) {
      this.value0 = m;
      this.value1 = h;
    }

    c.create = function (m) {
      return function (h) {
        return new c(m, h);
      };
    };

    return c;
  }();

  a = new e(k.Nil.value, k.Nil.value);
  d.empty = a;

  d["null"] = function (c) {
    return c.value0 instanceof k.Nil && c.value1 instanceof k.Nil ? !0 : !1;
  };

  d.snoc = function (c) {
    return function (m) {
      return new e(c.value0, new k.Cons(m, c.value1));
    };
  };

  d.uncons = function (c) {
    for (var m = !1, h; !m;) {
      if (h = c, h.value0 instanceof k.Nil && h.value1 instanceof k.Nil) m = !0, h = g.Nothing.value;else if (h.value0 instanceof k.Nil) c = new e(f.reverse(h.value1), k.Nil.value), h = void 0;else if (h.value0 instanceof k.Cons) m = !0, h = new g.Just(new b.Tuple(h.value0.value0, new e(h.value0.value1, h.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [h.constructor.name]);
    }

    return h;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var d = a["Data.CatList"],
      f = a["Data.CatQueue"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      e = a["Data.Tuple"],
      c = function () {
    function w() {}

    w.value = new w();
    return w;
  }(),
      m = function () {
    function w(r, p) {
      this.value0 = r;
      this.value1 = p;
    }

    w.create = function (r) {
      return function (p) {
        return new w(r, p);
      };
    };

    return w;
  }(),
      h = function h(w) {
    return function (r) {
      if (w instanceof c) return r;
      if (r instanceof c) return w;
      if (w instanceof m) return new m(w.value0, f.snoc(w.value1)(r));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [w.constructor.name, r.constructor.name]);
    };
  },
      n = function n(w) {
    return function (r) {
      return function (p) {
        var z = function z(x) {
          return function (t) {
            return function (C) {
              for (var A = x, q = t, v = !1, E; !v;) {
                E = A;
                var y = q,
                    F = C;
                if (F instanceof k.Nil) v = !0, E = y;else {
                  if (F instanceof k.Cons) A = E, q = E(y)(F.value0), C = F.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [E.constructor.name, y.constructor.name, F.constructor.name]);
                  E = void 0;
                }
              }

              return E;
            };
          };
        };

        return function (x) {
          return function (t) {
            function C(E, y) {
              E = f.uncons(E);
              if (E instanceof g.Nothing) return q = !0, z(function (F) {
                return function (D) {
                  return D(F);
                };
              })(r)(y);
              if (E instanceof g.Just) A = E.value0.value1, t = new k.Cons(w(E.value0.value0), y);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [E.constructor.name]);
            }

            for (var A = x, q = !1, v; !q;) {
              v = C(A, t);
            }

            return v;
          };
        }(p)(k.Nil.value);
      };
    };
  };

  a = c.value;
  b = new b.Semigroup(h);
  d.empty = a;

  d.snoc = function (w) {
    return function (r) {
      return h(w)(new m(r, f.empty));
    };
  };

  d.uncons = function (w) {
    if (w instanceof c) return g.Nothing.value;

    if (w instanceof m) {
      var r = g.Just,
          p = e.Tuple,
          z = w.value0;
      w = f["null"](w.value1) ? c.value : n(h)(c.value)(w.value1);
      return new r(new p(z, w));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [w.constructor.name]);
  };

  d.semigroupCatList = b;
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
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var d = a["Control.Monad.Free"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.CatList"],
      c = a["Data.Either"],
      m = a["Data.Functor"],
      h = a["Data.Maybe"],
      n = a["Data.Semigroup"],
      w = a["Unsafe.Coerce"],
      r = function () {
    function E(y, F) {
      this.value0 = y;
      this.value1 = F;
    }

    E.create = function (y) {
      return function (F) {
        return new E(y, F);
      };
    };

    return E;
  }(),
      p = function () {
    function E(y) {
      this.value0 = y;
    }

    E.create = function (y) {
      return new E(y);
    };

    return E;
  }(),
      z = function () {
    function E(y, F) {
      this.value0 = y;
      this.value1 = F;
    }

    E.create = function (y) {
      return function (F) {
        return new E(y, F);
      };
    };

    return E;
  }(),
      x = function x(E) {
    function y(I) {
      var u = function u(G) {
        return function (S) {
          return new r(G.value0, n.append(e.semigroupCatList)(G.value1)(S));
        };
      };

      if (I.value0 instanceof p) {
        var M = e.uncons(I.value1);
        if (M instanceof h.Nothing) return F = !0, new p(I.value0.value0);

        if (M instanceof h.Just) {
          E = u((0, M.value0.value0)(I.value0.value0))(M.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [M.constructor.name]);
      }

      if (I.value0 instanceof z) return F = !0, new z(I.value0.value0, function (G) {
        return u(I.value0.value1(G))(I.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [I.value0.constructor.name]);
    }

    for (var F = !1, D; !F;) {
      D = y(E);
    }

    return D;
  },
      t = function t(E) {
    return function (y) {
      return function (F) {
        F = x(F);
        if (F instanceof p) return y(F.value0);
        if (F instanceof z) return E(F.value0)(F.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [F.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return v;
  }, function () {
    return A;
  });
  var C = new m.Functor(function (E) {
    return function (y) {
      return g.bindFlipped(A)(function () {
        var F = f.pure(v);
        return function (D) {
          return F(E(D));
        };
      }())(y);
    };
  }),
      A = new g.Bind(function () {
    return q;
  }, function (E) {
    return function (y) {
      return new r(E.value0, e.snoc(E.value1)(y));
    };
  }),
      q = new k.Apply(function () {
    return C;
  }, b.ap(a)),
      v = new f.Applicative(function () {
    return q;
  }, function (E) {
    return new r(p.create(E), e.empty);
  });

  d.wrap = function (E) {
    return new r(new z(E, w.unsafeCoerce), e.empty);
  };

  d.liftF = function (E) {
    return new r(new z(E, function () {
      var y = f.pure(v);
      return function (F) {
        return y(F);
      };
    }()), e.empty);
  };

  d.resume = function (E) {
    return t(function (y) {
      return function (F) {
        return new c.Left(m.map(E)(F)(y));
      };
    })(c.Right.create);
  };

  d["resume'"] = t;
  d.freeFunctor = C;
  d.freeBind = A;
  d.freeApplicative = v;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (d) {
    return d.orr;
  };

  a.MultiAlternative = function (d, f) {
    this.Plus0 = d;
    this.orr = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (d) {
    return d.parallel;
  };

  a.sequential = function (d) {
    return d.sequential;
  };

  a.Parallel = function (d, f, k, g) {
    this.Applicative1 = d;
    this.Monad0 = f;
    this.parallel = k;
    this.sequential = g;
  };
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  a = a["Control.Plus"];

  a.Plus = function (d, f) {
    this.Alt0 = d;
    this.empty = f;
  };

  a.empty = function (d) {
    return d.empty;
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
  a.range = function (d) {
    return function (f) {
      for (var k = d > f ? -1 : 1, g = Array(k * (f - d) + 1), b = d, e = 0; b !== f;) {
        g[e++] = b, b += k;
      }

      g[e] = b;
      return g;
    };
  };

  a.fromFoldableImpl = function () {
    function d(g, b) {
      this.head = g;
      this.tail = b;
    }

    function f(g) {
      return function (b) {
        return new d(g, b);
      };
    }

    var k = {};
    return function (g) {
      return function (b) {
        var e = [],
            c = 0;

        for (b = g(f)(k)(b); b !== k;) {
          e[c++] = b.head, b = b.tail;
        }

        return e;
      };
    };
  }();

  a.length = function (d) {
    return d.length;
  };

  a.cons = function (d) {
    return function (f) {
      return [d].concat(f);
    };
  };

  a.snoc = function (d) {
    return function (f) {
      var k = d.slice();
      k.push(f);
      return k;
    };
  };

  a["uncons'"] = function (d) {
    return function (f) {
      return function (k) {
        return 0 === k.length ? d({}) : f(k[0])(k.slice(1));
      };
    };
  };

  a.indexImpl = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          return 0 > g || g >= k.length ? f : d(k[g]);
        };
      };
    };
  };

  a._updateAt = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            if (0 > k || k >= b.length) return f;
            b = b.slice();
            b[k] = g;
            return d(b);
          };
        };
      };
    };
  };

  a.filter = function (d) {
    return function (f) {
      return f.filter(d);
    };
  };

  a.slice = function (d) {
    return function (f) {
      return function (k) {
        return k.slice(d, f);
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
      f = a["Data.Array"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Category"],
      m = a["Control.Lazy"],
      h = a["Data.Boolean"],
      n = a["Data.Foldable"],
      w = a["Data.Function"],
      r = a["Data.Functor"],
      p = a["Data.Maybe"];
  a = f._updateAt(p.Just.create)(p.Nothing.value);

  var z = f["uncons'"](w["const"](p.Nothing.value))(function (v) {
    return function (E) {
      return new p.Just({
        head: v,
        tail: E
      });
    };
  }),
      x = function x(v) {
    return [v];
  },
      t = function t(v) {
    return function (E) {
      return function (y) {
        return b.apply(v.Applicative0().Apply0())(r.map(v.Plus1().Alt0().Functor0())(f.cons)(y))(m.defer(E)(function (F) {
          return C(v)(E)(y);
        }));
      };
    };
  },
      C = function C(v) {
    return function (E) {
      return function (y) {
        return k.alt(v.Plus1().Alt0())(t(v)(E)(y))(g.pure(v.Applicative0())([]));
      };
    };
  },
      A = f.indexImpl(p.Just.create)(p.Nothing.value),
      q = w.flip(e.bind(e.bindArray));

  e = function (v) {
    return q(function () {
      var E = p.maybe([])(x);
      return function (y) {
        return E(v(y));
      };
    }());
  }(c.identity(c.categoryFn));

  d.fromFoldable = function (v) {
    return f.fromFoldableImpl(n.foldr(v));
  };

  d.singleton = x;
  d.some = t;

  d.head = function (v) {
    return A(v)(0);
  };

  d.init = function (v) {
    if (0 === f.length(v)) return p.Nothing.value;
    if (h.otherwise) return new p.Just(f.slice(0)(f.length(v) - 1 | 0)(v));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [v.constructor.name]);
  };

  d.uncons = z;
  d.updateAt = a;
  d.concatMap = q;
  d.catMaybes = e;
  d.range = f.range;
  d.length = f.length;
  d.cons = f.cons;
  d.snoc = f.snoc;
  d.filter = f.filter;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var d = a["Data.Array.NonEmpty"],
      f = a["Data.Array"],
      k = a["Data.Boolean"],
      g = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      e = a.unsafeCoerce,
      c = a.unsafeCoerce;

  a = function (m) {
    var h = g.fromJust();
    return function (n) {
      return h(m(c(n)));
    };
  }(f.uncons);

  (function (m) {
    return function (h) {
      return m(c(h));
    };
  })(f.length);

  d.fromArray = function (m) {
    if (0 < f.length(m)) return new g.Just(e(m));
    if (k.otherwise) return g.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [m.constructor.name]);
  };

  d.toArray = c;

  d.singleton = function (m) {
    return e(f.singleton(m));
  };

  d["cons'"] = function (m) {
    return function (h) {
      return e(f.cons(m)(h));
    };
  };

  d.snoc = function (m) {
    return function (h) {
      return e(f.snoc(c(m))(h));
    };
  };

  d.uncons = a;

  d.updateAt = function (m) {
    return function (h) {
      var n = f.updateAt(m)(h);
      return function (w) {
        return b(n(c(w)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (d) {
    return function (f) {
      for (var k = f[0], g = f.length, b = 1; b < g; b++) {
        k = d(k)(f[b]);
      }

      return k;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (d) {
    return function (f) {
      for (var k = f.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = d(b)(f[b]);
      }

      return g;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var d = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (k, g) {
    this.Functor0 = k;
    this.mapWithIndex = g;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  d.mapWithIndex = function (k) {
    return k.mapWithIndex;
  };

  d.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var d = a["Data.FoldableWithIndex"],
      f = a["Data.Foldable"],
      k = a["Data.FunctorWithIndex"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = function () {
    function h(n, w) {
      this.value0 = n;
      this.value1 = w;
    }

    h.create = function (n) {
      return function (w) {
        return new h(n, w);
      };
    };

    return h;
  }(),
      c = function c(h) {
    return function (n) {
      return function (w) {
        return (0, h.foldrWithIndex)(function (r) {
          return function (p) {
            return function (z) {
              return b.append(n.Semigroup0())(w(r)(p))(z);
            };
          };
        })(g.mempty(n));
      };
    };
  },
      m = new function (h, n, w, r) {
    this.Foldable0 = h;
    this.foldMapWithIndex = n;
    this.foldlWithIndex = w;
    this.foldrWithIndex = r;
  }(function () {
    return f.foldableArray;
  }, function (h) {
    return c(m)(h);
  }, function (h) {
    return function (n) {
      var w = f.foldl(f.foldableArray)(function (p) {
        return function (z) {
          return h(z.value0)(p)(z.value1);
        };
      })(n),
          r = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (p) {
        return w(r(p));
      };
    };
  }, function (h) {
    return function (n) {
      var w = f.foldr(f.foldableArray)(function (p) {
        return function (z) {
          return h(p.value0)(p.value1)(z);
        };
      })(n),
          r = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (p) {
        return w(r(p));
      };
    };
  });

  d.foldlWithIndex = function (h) {
    return h.foldlWithIndex;
  };

  d.foldableWithIndexArray = m;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var d = a["Data.Semigroup.Foldable"],
      f = a["Data.Functor"];

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
        return function (e) {
          var c = (0, k.fold1)(b),
              m = f.map(g)(e);
          return function (h) {
            return c(m(h));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function d(b) {
      return [b];
    }

    function f(b) {
      return function (e) {
        return [b, e];
      };
    }

    function k(b) {
      return function (e) {
        return function (c) {
          return [b, e, c];
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
        return function (c) {
          return function (m) {
            return function (h) {
              function n(w, r) {
                switch (r - w) {
                  case 0:
                    return c([]);

                  case 1:
                    return e(d)(m(h[w]));

                  case 2:
                    return b(e(f)(m(h[w])))(m(h[w + 1]));

                  case 3:
                    return b(b(e(k)(m(h[w])))(m(h[w + 1])))(m(h[w + 2]));

                  default:
                    var p = w + 2 * Math.floor((r - w) / 4);
                    return b(e(g)(n(w, p)))(n(p, r));
                }
              }

              return n(0, h.length);
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
      f = a["Data.Traversable"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Foldable"],
      c = a["Data.Functor"],
      m = a["Data.Maybe"];

  a = function a(r, p, z, x) {
    this.Foldable1 = r;
    this.Functor0 = p;
    this.sequence = z;
    this.traverse = x;
  };

  var h = new a(function () {
    return e.foldableMaybe;
  }, function () {
    return m.functorMaybe;
  }, function (r) {
    return function (p) {
      if (p instanceof m.Nothing) return k.pure(r)(m.Nothing.value);
      if (p instanceof m.Just) return c.map(r.Apply0().Functor0())(m.Just.create)(p.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [p.constructor.name]);
    };
  }, function (r) {
    return function (p) {
      return function (z) {
        if (z instanceof m.Nothing) return k.pure(r)(m.Nothing.value);
        if (z instanceof m.Just) return c.map(r.Apply0().Functor0())(m.Just.create)(p(z.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [p.constructor.name, z.constructor.name]);
      };
    };
  }),
      n = function n(r) {
    return function (p) {
      return (0, r.traverse)(p)(b.identity(b.categoryFn));
    };
  },
      w = new a(function () {
    return e.foldableArray;
  }, function () {
    return c.functorArray;
  }, function (r) {
    return n(w)(r);
  }, function (r) {
    return f.traverseArrayImpl(g.apply(r.Apply0()))(c.map(r.Apply0().Functor0()))(k.pure(r));
  });

  d.traverse = function (r) {
    return r.traverse;
  };

  d.sequence = function (r) {
    return r.sequence;
  };

  d.traversableArray = w;
  d.traversableMaybe = h;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                c.push(k(e));
                e = g(e);
                if (d(e)) return c;
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
  var d = a["Data.Unfoldable1"],
      f = a["Data.Boolean"],
      k = a["Data.Maybe"],
      g = a["Data.Tuple"];
  a = new function (e) {
    this.unfoldr1 = e;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(g.fst)(g.snd));

  var b = function b(e) {
    return function (c) {
      return function (m) {
        return (0, e.unfoldr1)(function (h) {
          if (0 >= h) return new g.Tuple(m, k.Nothing.value);
          if (f.otherwise) return new g.Tuple(m, new k.Just(h - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [h.constructor.name]);
        })(c - 1 | 0);
      };
    };
  };

  d.unfoldr1 = function (e) {
    return e.unfoldr1;
  };

  d.singleton = function (e) {
    return b(e)(1);
  };

  d.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var d = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Semigroup"],
      g = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      e = a["Data.Traversable"].traversableArray,
      c = k.semigroupArray,
      m = a["Data.Functor"].functorArray,
      h = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      n = a["Data.Foldable"].foldableArray,
      w = new g.Foldable1(function () {
    return n;
  }, function (r) {
    return f.fold1Impl(k.append(r));
  }, function (r) {
    return g.foldMap1Default(w)(m)(r);
  });
  d.semigroupNonEmptyArray = c;
  d.functorNonEmptyArray = m;
  d.foldableNonEmptyArray = n;
  d.foldableWithIndexNonEmptyArray = h;
  d.foldable1NonEmptyArray = w;
  d.unfoldable1NonEmptyArray = b;
  d.traversableNonEmptyArray = e;
})(PS);

(function (a) {
  a.pureE = function (d) {
    return function () {
      return d;
    };
  };

  a.bindE = function (d) {
    return function (f) {
      return function () {
        return f(d())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var d = a.Effect,
      f = a.Effect,
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"];
  a = a["Data.Functor"];
  var c = new e.Monad(function () {
    return n;
  }, function () {
    return m;
  }),
      m = new b.Bind(function () {
    return h;
  }, f.bindE),
      h = new g.Apply(function () {
    return w;
  }, e.ap(c)),
      n = new k.Applicative(function () {
    return h;
  }, f.pureE),
      w = new a.Functor(k.liftA1(n));
  d.functorEffect = w;
  d.applicativeEffect = n;
  d.bindEffect = m;
  d.monadEffect = c;
})(PS);

(function (a) {
  var d = function () {
    function f() {
      this.last = this.head = null;
      this.size = 0;
    }

    function k(h, n) {
      this.queue = h;
      this.value = n;
      this.prev = this.next = null;
    }

    function g(h) {
      this.draining = !1;
      this.error = null;
      this.value = h;
      this.takes = new f();
      this.reads = new f();
      this.puts = new f();
    }

    function b(h) {
      try {
        h();
      } catch (n) {
        setTimeout(function () {
          throw n;
        }, 0);
      }
    }

    function e(h) {
      switch (h.size) {
        case 0:
          return null;

        case 1:
          var n = h.head;
          h.head = null;
          break;

        case 2:
          n = h.last;
          h.head.next = null;
          h.last = null;
          break;

        default:
          n = h.last, h.last = n.prev, h.last.next = null;
      }

      n.prev = null;
      n.queue = null;
      h.size--;
      return n.value;
    }

    function c(h) {
      switch (h.size) {
        case 0:
          return null;

        case 1:
          var n = h.head;
          h.head = null;
          break;

        case 2:
          n = h.head;
          h.last.prev = null;
          h.head = h.last;
          h.last = null;
          break;

        default:
          n = h.head, h.head = n.next, h.head.prev = null;
      }

      n.next = null;
      n.queue = null;
      h.size--;
      return n.value;
    }

    var m = {};
    g.EMPTY = m;

    g.putLast = function (h, n) {
      n = new k(h, n);

      switch (h.size) {
        case 0:
          h.head = n;
          break;

        case 1:
          n.prev = h.head;
          h.head.next = n;
          h.last = n;
          break;

        default:
          n.prev = h.last, h.last.next = n, h.last = n;
      }

      h.size++;
      return n;
    };

    g.takeLast = e;
    g.takeHead = c;

    g.deleteCell = function (h) {
      null !== h.queue && (h.queue.last === h ? e(h.queue) : h.queue.head === h ? c(h.queue) : (h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), h.queue.size--, h.queue = null, h.value = null, h.next = null, h.prev = null));
    };

    g.drainVar = function (h, n) {
      if (!n.draining) {
        var w = n.puts,
            r = n.takes,
            p = n.reads,
            z,
            x;

        for (n.draining = !0;;) {
          var t = z = null;
          var C = n.value;
          var A = p.size;

          if (null !== n.error) {
            for (C = h.left(n.error); z = c(w);) {
              b(z.cb(C));
            }

            for (; t = c(p);) {
              b(t(C));
            }

            for (; x = c(r);) {
              b(x(C));
            }

            break;
          }

          C === m && (z = c(w)) && (n.value = C = z.value);

          if (C !== m) {
            for (x = c(r); A-- && (t = c(p));) {
              b(t(h.right(C)));
            }

            null !== x && (n.value = m, b(x(h.right(C))));
          }

          null !== z && b(z.cb(h.right(void 0)));
          if (n.value === m && 0 === w.size || n.value !== m && 0 === r.size) break;
        }

        n.draining = !1;
      }
    };

    return g;
  }();

  a.empty = function () {
    return new d(d.EMPTY);
  };

  a._takeVar = function (f, k, g) {
    return function () {
      var b = d.putLast(k.takes, g);
      d.drainVar(f, k);
      return function () {
        d.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (f, k, g) {
    return function () {
      return g.value === d.EMPTY && null === g.error ? (g.value = k, d.drainVar(f, g), !0) : !1;
    };
  };

  a._tryTakeVar = function (f, k) {
    return function () {
      var g = k.value;
      if (g === d.EMPTY) return f.nothing;
      k.value = d.EMPTY;
      d.drainVar(f, k);
      return f.just(g);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.AVar"],
      k = a["Data.Either"];
  a = a["Data.Maybe"];

  var g = function () {
    function m(h) {
      this.value0 = h;
    }

    m.create = function (h) {
      return new m(h);
    };

    return m;
  }(),
      b = function () {
    function m(h) {
      this.value0 = h;
    }

    m.create = function (h) {
      return new m(h);
    };

    return m;
  }(),
      e = function () {
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
    empty: e.value
  };

  d.take = function (m) {
    return function (h) {
      return f._takeVar(c, m, h);
    };
  };

  d.tryTake = function (m) {
    return f._tryTakeVar(c, m);
  };

  d.tryPut = function (m) {
    return function (h) {
      return f._tryPutVar(c, m, h);
    };
  };

  d.empty = f.empty;
})(PS);

(function (a) {
  var d = function () {
    function f(p, z, x, t) {
      this.tag = p;
      this._1 = z;
      this._2 = x;
      this._3 = t;
    }

    function k(p) {
      var z = function z(x, t, C) {
        return new f(p, x, t, C);
      };

      z.tag = p;
      return z;
    }

    function g(p) {
      return new f("Pure", void 0);
    }

    function b(p) {
      try {
        p();
      } catch (z) {
        setTimeout(function () {
          throw z;
        }, 0);
      }
    }

    function e(p, z, x) {
      try {
        return z(x());
      } catch (t) {
        return p(t);
      }
    }

    function c(p, z, x) {
      try {
        return z(x)();
      } catch (t) {
        return x(p(t))(), g;
      }
    }

    function m(p, z, x) {
      function t(P) {
        for (var J, W, K;;) {
          switch (K = W = J = null, q) {
            case 2:
              q = 1;

              try {
                v = F(v), null === D ? F = null : (F = D._1, D = D._2);
              } catch (da) {
                q = 5, E = p.left(da), v = null;
              }

              break;

            case 3:
              p.isLeft(v) ? (q = 5, E = v, v = null) : null === F ? q = 5 : (q = 2, v = p.fromRight(v));
              break;

            case 1:
              switch (v.tag) {
                case "Bind":
                  F && (D = new f("Cons", F, D));
                  F = v._2;
                  q = 1;
                  v = v._1;
                  break;

                case "Pure":
                  null === F ? (q = 5, v = p.right(v._1)) : (q = 2, v = v._1);
                  break;

                case "Sync":
                  q = 3;
                  v = e(p.left, p.right, v._1);
                  break;

                case "Async":
                  q = 4;
                  v = c(p.left, v._1, function (da) {
                    return function () {
                      A === P && (A++, r.enqueue(function () {
                        A === P + 1 && (q = 3, v = da, t(A));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  q = 5;
                  E = p.left(v._1);
                  v = null;
                  break;

                case "Catch":
                  I = null === F ? new f("Cons", v, I, y) : new f("Cons", v, new f("Cons", new f("Resume", F, D), I, y), y);
                  D = F = null;
                  q = 1;
                  v = v._1;
                  break;

                case "Bracket":
                  u++;
                  I = null === F ? new f("Cons", v, I, y) : new f("Cons", v, new f("Cons", new f("Resume", F, D), I, y), y);
                  D = F = null;
                  q = 1;
                  v = v._1;
                  break;

                case "Fork":
                  q = 3;
                  J = m(p, z, v._2);
                  z && z.register(J);
                  v._1 && J.run();
                  v = p.right(J);
                  break;

                case "Sequential":
                  q = 1, v = n(p, z, v._1);
              }

              break;

            case 5:
              D = F = null;
              if (null === I) q = 6, v = y || E || v;else switch (J = I._3, K = I._1, I = I._2, K.tag) {
                case "Catch":
                  y && y !== J && 0 === u ? q = 5 : E && (q = 1, v = K._2(p.fromLeft(E)), E = null);
                  break;

                case "Resume":
                  y && y !== J && 0 === u || E ? q = 5 : (F = K._1, D = K._2, q = 2, v = p.fromRight(v));
                  break;

                case "Bracket":
                  u--;
                  null === E && (W = p.fromRight(v), I = new f("Cons", new f("Release", K._2, W), I, J), y === J || 0 < u) && (q = 1, v = K._3(W));
                  break;

                case "Release":
                  I = new f("Cons", new f("Finalized", v, E), I, y);
                  q = 1;
                  v = y && y !== J && 0 === u ? K._1.killed(p.fromLeft(y))(K._2) : E ? K._1.failed(p.fromLeft(E))(K._2) : K._1.completed(p.fromRight(v))(K._2);
                  E = null;
                  u++;
                  break;

                case "Finalizer":
                  u++;
                  I = new f("Cons", new f("Finalized", v, E), I, y);
                  q = 1;
                  v = K._1;
                  break;

                case "Finalized":
                  u--, q = 5, v = K._1, E = K._2;
              }
              break;

            case 6:
              for (var O in G) {
                G.hasOwnProperty(O) && (S = S && G[O].rethrow, b(G[O].handler(v)));
              }

              G = null;
              y && E ? setTimeout(function () {
                throw p.fromLeft(E);
              }, 0) : p.isLeft(v) && S && setTimeout(function () {
                if (S) throw p.fromLeft(v);
              }, 0);
              return;

            case 0:
              q = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function C(P) {
        return function () {
          if (6 === q) return S = S && P.rethrow, P.handler(v)(), function () {};
          var J = M++;
          G = G || {};
          G[J] = P;
          return function () {
            null !== G && delete G[J];
          };
        };
      }

      var A = 0,
          q = 0,
          v = x,
          E = null,
          y = null,
          F = null,
          D = null,
          I = null,
          u = 0,
          M = 0,
          G = null,
          S = !0;
      return {
        kill: function kill(P, J) {
          return function () {
            if (6 === q) return J(p.right(void 0))(), function () {};
            var W = C({
              rethrow: !1,
              handler: function handler() {
                return J(p.right(void 0));
              }
            })();

            switch (q) {
              case 0:
                y = p.left(P);
                q = 6;
                v = y;
                t(A);
                break;

              case 4:
                null === y && (y = p.left(P));
                0 === u && (4 === q && (I = new f("Cons", new f("Finalizer", v(P)), I, y)), q = 5, E = v = null, t(++A));
                break;

              default:
                null === y && (y = p.left(P)), 0 === u && (q = 5, E = v = null);
            }

            return W;
          };
        },
        join: function join(P) {
          return function () {
            var J = C({
              rethrow: !1,
              handler: P
            })();
            0 === q && t(A);
            return J;
          };
        },
        onComplete: C,
        isSuspended: function isSuspended() {
          return 0 === q;
        },
        run: function run() {
          0 === q && (r.isDraining() ? t(A) : r.enqueue(function () {
            t(A);
          }));
        }
      };
    }

    function h(p, z, x, t) {
      function C(G, S, P) {
        var J = S,
            W = null,
            K = null,
            O = 0;
        S = {};

        a: for (;;) {
          var da = null;

          switch (J.tag) {
            case "Forked":
              J._3 === w && (da = y[J._1], S[O++] = da.kill(G, function (R) {
                return function () {
                  O--;
                  0 === O && P(R)();
                };
              }));
              if (null === W) break a;
              J = W._2;
              null === K ? W = null : (W = K._1, K = K._2);
              break;

            case "Map":
              J = J._2;
              break;

            case "Apply":
            case "Alt":
              W && (K = new f("Cons", W, K)), W = J, J = J._1;
          }
        }

        if (0 === O) P(p.right(void 0))();else for (G = 0, da = O; G < da; G++) {
          S[G] = S[G]();
        }
        return S;
      }

      function A(G, S, P) {
        var J, W;

        if (p.isLeft(G)) {
          var K = G;
          var O = null;
        } else O = G, K = null;

        for (;;) {
          var da = W = J = G = null;
          if (null !== u) break;

          if (null === S) {
            t(K || O)();
            break;
          }

          if (S._3 !== w) break;

          switch (S.tag) {
            case "Map":
              null === K ? (S._3 = p.right(S._1(p.fromRight(O))), O = S._3) : S._3 = K;
              break;

            case "Apply":
              G = S._1._3;
              J = S._2._3;

              if (K) {
                if (S._3 = K, W = !0, da = F++, D[da] = C(I, K === G ? S._2 : S._1, function () {
                  return function () {
                    delete D[da];
                    W ? W = !1 : null === P ? A(K, null, null) : A(K, P._1, P._2);
                  };
                }), W) {
                  W = !1;
                  return;
                }
              } else {
                if (G === w || J === w) return;
                O = p.right(p.fromRight(G)(p.fromRight(J)));
                S._3 = O;
              }

              break;

            case "Alt":
              G = S._1._3;
              J = S._2._3;
              if (G === w && p.isLeft(J) || J === w && p.isLeft(G)) return;
              if (G !== w && p.isLeft(G) && J !== w && p.isLeft(J)) K = O === G ? J : G, O = null, S._3 = K;else if (S._3 = O, W = !0, da = F++, D[da] = C(I, O === G ? S._2 : S._1, function () {
                return function () {
                  delete D[da];
                  W ? W = !1 : null === P ? A(O, null, null) : A(O, P._1, P._2);
                };
              }), W) {
                W = !1;
                return;
              }
          }

          null === P ? S = null : (S = P._1, P = P._2);
        }
      }

      function q(G) {
        return function (S) {
          return function () {
            delete y[G._1];
            G._3 = S;
            A(S, G._2._1, G._2._2);
          };
        };
      }

      function v(G, S) {
        u = p.left(G);
        var P;

        for (P in D) {
          if (D.hasOwnProperty(P)) {
            var J = D[P];

            for (P in J) {
              if (J.hasOwnProperty(P)) J[P]();
            }
          }
        }

        D = null;
        var W = C(G, M, S);
        return function (K) {
          return new f("Async", function (O) {
            return function () {
              for (var da in W) {
                if (W.hasOwnProperty(da)) W[da]();
              }

              return g;
            };
          });
        };
      }

      var E = 0,
          y = {},
          F = 0,
          D = {},
          I = Error("[ParAff] Early exit"),
          u = null,
          M = w;

      (function () {
        var G = 1,
            S = x,
            P = null,
            J = null;

        a: for (;;) {
          switch (G) {
            case 1:
              switch (S.tag) {
                case "Map":
                  P && (J = new f("Cons", P, J));
                  P = new f("Map", S._1, w, w);
                  S = S._2;
                  break;

                case "Apply":
                  P && (J = new f("Cons", P, J));
                  P = new f("Apply", w, S._2, w);
                  S = S._1;
                  break;

                case "Alt":
                  P && (J = new f("Cons", P, J));
                  P = new f("Alt", w, S._2, w);
                  S = S._1;
                  break;

                default:
                  var W = E++;
                  G = 5;
                  var K = S;
                  S = new f("Forked", W, new f("Cons", P, J), w);
                  K = m(p, z, K);
                  K.onComplete({
                    rethrow: !1,
                    handler: q(S)
                  })();
                  y[W] = K;
                  z && z.register(K);
              }

              break;

            case 5:
              if (null === P) break a;
              P._1 === w ? (P._1 = S, G = 1, S = P._2, P._2 = w) : (P._2 = S, S = P, null === J ? P = null : (P = J._1, J = J._2));
          }
        }

        M = S;

        for (W = 0; W < E; W++) {
          y[W].run();
        }
      })();

      return function (G) {
        return new f("Async", function (S) {
          return function () {
            return v(G, S);
          };
        });
      };
    }

    function n(p, z, x) {
      return new f("Async", function (t) {
        return function () {
          return h(p, z, x, t);
        };
      });
    }

    var w = {},
        r = function () {
      function p() {
        for (C = !0; 0 !== z;) {
          z--;
          var A = t[x];
          t[x] = void 0;
          x = (x + 1) % 1024;
          A();
        }

        C = !1;
      }

      var z = 0,
          x = 0,
          t = Array(1024),
          C = !1;
      return {
        isDraining: function isDraining() {
          return C;
        },
        enqueue: function enqueue(A) {
          if (1024 === z) {
            var q = C;
            p();
            C = q;
          }

          t[(x + z) % 1024] = A;
          z++;
          C || p();
        }
      };
    }();

    f.EMPTY = w;
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
    f.Fiber = m;

    f.Supervisor = function (p) {
      var z = {},
          x = 0,
          t = 0;
      return {
        register: function register(C) {
          var A = x++;
          C.onComplete({
            rethrow: !0,
            handler: function handler(q) {
              return function () {
                t--;
                delete z[A];
              };
            }
          })();
          z[A] = C;
          t++;
        },
        isEmpty: function isEmpty() {
          return 0 === t;
        },
        killAll: function killAll(C, A) {
          return function () {
            function q(F) {
              E[F] = z[F].kill(C, function (D) {
                return function () {
                  delete E[F];
                  v--;
                  p.isLeft(D) && p.fromLeft(D) && setTimeout(function () {
                    throw p.fromLeft(D);
                  }, 0);
                  0 === v && A();
                };
              })();
            }

            if (0 === t) return A();
            var v = 0,
                E = {},
                y;

            for (y in z) {
              z.hasOwnProperty(y) && (v++, q(y));
            }

            z = {};
            t = x = 0;
            return function (F) {
              return new f("Sync", function () {
                for (var D in E) {
                  if (E.hasOwnProperty(D)) E[D]();
                }
              });
            };
          };
        }
      };
    };

    f.Scheduler = r;
    f.nonCanceler = g;
    return f;
  }();

  a._pure = d.Pure;
  a._throwError = d.Throw;

  a._catchError = function (f) {
    return function (k) {
      return d.Catch(f, k);
    };
  };

  a._map = function (f) {
    return function (k) {
      return k.tag === d.Pure.tag ? d.Pure(f(k._1)) : d.Bind(k, function (g) {
        return d.Pure(f(g));
      });
    };
  };

  a._bind = function (f) {
    return function (k) {
      return d.Bind(f, k);
    };
  };

  a._liftEffect = d.Sync;

  a._parAffMap = function (f) {
    return function (k) {
      return d.ParMap(f, k);
    };
  };

  a._parAffApply = function (f) {
    return function (k) {
      return d.ParApply(f, k);
    };
  };

  a._parAffAlt = function (f) {
    return function (k) {
      return d.ParAlt(f, k);
    };
  };

  a.makeAff = d.Async;

  a._makeFiber = function (f, k) {
    return function () {
      return d.Fiber(f, null, k);
    };
  };

  a._delay = function () {
    function f(k, g) {
      return 0 === k && "undefined" !== typeof setImmediate ? setImmediate(g) : setTimeout(g, k);
    }

    return function (k, g) {
      return d.Async(function (b) {
        return function () {
          var e = f(g, b(k()));
          return function () {
            return d.Sync(function () {
              var c = 0 === g && "undefined" !== typeof clearImmediate ? clearImmediate(e) : clearTimeout(e);
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
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var d = a["Control.Monad.Error.Class"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Functor"];

  d.catchError = function (b) {
    return b.catchError;
  };

  d.throwError = function (b) {
    return b.throwError;
  };

  d.MonadThrow = function (b, e) {
    this.Monad0 = b;
    this.throwError = e;
  };

  d.MonadError = function (b, e) {
    this.MonadThrow0 = b;
    this.catchError = e;
  };

  d["try"] = function (b) {
    return function (e) {
      return (0, b.catchError)(g.map(b.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(e))(function () {
        var c = f.pure(b.MonadThrow0().Monad0().Applicative0());
        return function (m) {
          return c(k.Left.create(m));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var d = a["Control.Category"],
      f = a["Control.Parallel.Class"],
      k = a["Data.Foldable"],
      g = function g(b) {
    return function (e) {
      return function (c) {
        var m = f.sequential(b),
            h = k.traverse_(b.Applicative1())(e)(function () {
          var n = f.parallel(b);
          return function (w) {
            return n(c(w));
          };
        }());
        return function (n) {
          return m(h(n));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (b) {
    return function (e) {
      return g(b)(e)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var d = a["Effect.Class"],
      f = a["Control.Category"],
      k = a.Effect;

  a = function a(g, b) {
    this.Monad0 = g;
    this.liftEffect = b;
  };

  f = new a(function () {
    return k.monadEffect;
  }, f.identity(f.categoryFn));

  d.liftEffect = function (g) {
    return g.liftEffect;
  };

  d.MonadEffect = a;
  d.monadEffectEffect = f;
})(PS);

(function (a) {
  a.showErrorImpl = function (d) {
    return d.stack || d.toString();
  };

  a.error = function (d) {
    return Error(d);
  };

  a.throwException = function (d) {
    return function () {
      throw d;
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var d = a["Effect.Exception"],
      f = a["Effect.Exception"];
  a = new a["Data.Show"].Show(f.showErrorImpl);

  d["throw"] = function (k) {
    return f.throwException(f.error(k));
  };

  d.showError = a;
  d.error = f.error;
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
      f = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (k) {
    return d.unsafePartial(function (g) {
      return f.crashWith()(k);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var d = a["Effect.Aff"],
      f = a["Effect.Aff"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      m = a["Control.Monad.Error.Class"],
      h = a["Control.Parallel"],
      n = a["Control.Parallel.Class"],
      w = a["Control.Plus"],
      r = a["Data.Either"],
      p = a["Data.Foldable"],
      z = a["Data.Function"],
      x = a["Data.Functor"],
      t = a["Data.Monoid"],
      C = a["Data.Semigroup"],
      A = a["Data.Unit"],
      q = a.Effect,
      v = a["Effect.Class"],
      E = a["Effect.Exception"],
      y = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var F = new x.Functor(f._parAffMap),
      D = new x.Functor(f._map),
      I = function () {
    return {
      isLeft: function isLeft(Y) {
        if (Y instanceof r.Left) return !0;
        if (Y instanceof r.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [Y.constructor.name]);
      },
      fromLeft: function fromLeft(Y) {
        if (Y instanceof r.Left) return Y.value0;
        if (Y instanceof r.Right) return y.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [Y.constructor.name]);
      },
      fromRight: function fromRight(Y) {
        if (Y instanceof r.Right) return Y.value0;
        if (Y instanceof r.Left) return y.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [Y.constructor.name]);
      },
      left: r.Left.create,
      right: r.Right.create
    };
  }(),
      u = function u(Y) {
    return function () {
      var ha = f._makeFiber(I, Y)();

      ha.run();
      return ha;
    };
  },
      M = new b.Apply(function () {
    return F;
  }, f._parAffApply),
      G = new c.Monad(function () {
    return J;
  }, function () {
    return S;
  }),
      S = new e.Bind(function () {
    return P;
  }, f._bind),
      P = new b.Apply(function () {
    return D;
  }, c.ap(G)),
      J = new g.Applicative(function () {
    return P;
  }, f._pure),
      W = new v.MonadEffect(function () {
    return G;
  }, f._liftEffect);

  b = function () {
    var Y = v.liftEffect(W);
    return function (ha) {
      return z["const"](Y(ha));
    };
  }();

  var K = new m.MonadThrow(function () {
    return G;
  }, f._throwError),
      O = new m.MonadError(function () {
    return K;
  }, f._catchError),
      da = function da(Y) {
    return function (ha) {
      return u(e.bindFlipped(S)(function () {
        var L = v.liftEffect(W);
        return function (H) {
          return L(Y(H));
        };
      }())(m["try"](O)(ha)));
    };
  },
      R = new n.Parallel(function () {
    return V;
  }, function () {
    return G;
  }, a.unsafeCoerce, f._sequential),
      V = new g.Applicative(function () {
    return M;
  }, function () {
    var Y = n.parallel(R),
        ha = g.pure(J);
    return function (L) {
      return Y(ha(L));
    };
  }()),
      aa = new C.Semigroup(function (Y) {
    return function (ha) {
      return function (L) {
        return h.parSequence_(R)(p.foldableArray)([Y(L), ha(L)]);
      };
    };
  });

  C = z["const"](g.pure(J)(A.unit));
  var ba = new t.Monoid(function () {
    return aa;
  }, C);
  C = f.makeAff(function (Y) {
    return g.pure(q.applicativeEffect)(t.mempty(ba));
  });
  var Z = new k.Alt(function () {
    return F;
  }, f._parAffAlt),
      ea = new k.Alt(function () {
    return D;
  }, function (Y) {
    return function (ha) {
      return m.catchError(O)(Y)(z["const"](ha));
    };
  });
  k = new w.Plus(function () {
    return ea;
  }, m.throwError(K)(E.error("Always fails")));
  w = new w.Plus(function () {
    return Z;
  }, n.parallel(R)(w.empty(k)));

  d.runAff_ = function (Y) {
    return function (ha) {
      return x["void"](q.functorEffect)(da(Y)(ha));
    };
  };

  d.delay = function (Y) {
    return f._delay(r.Right.create, Y);
  };

  d.never = C;
  d.effectCanceler = b;
  d.functorAff = D;
  d.applicativeAff = J;
  d.bindAff = S;
  d.monadEffectAff = W;
  d.altParAff = Z;
  d.plusParAff = w;
  d.parallelAff = R;
  d.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (k) {
    return f.makeAff(function (g) {
      return function () {
        var b = d.take(k)(g)();
        return f.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var d = a["Effect.Aff.Class"],
      f = a["Control.Category"],
      k = a["Effect.Aff"];

  a = function a(g, b) {
    this.MonadEffect0 = g;
    this.liftAff = b;
  };

  f = new a(function () {
    return k.monadEffectAff;
  }, f.identity(f.categoryFn));

  d.liftAff = function (g) {
    return g.liftAff;
  };

  d.MonadAff = a;
  d.monadAffAff = f;
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
  var d = a["Effect.Console"],
      f = a["Effect.Console"],
      k = a["Data.Show"];

  d.logShow = function (g) {
    return function (b) {
      return f.log(k.show(g)(b));
    };
  };

  d.log = f.log;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var d = a["Concur.Core.Types"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Category"],
      c = a["Control.Monad"],
      m = a["Control.Monad.Free"],
      h = a["Control.MultiAlternative"],
      n = a["Control.Parallel.Class"],
      w = a["Control.Plus"],
      r = a["Data.Array.NonEmpty"],
      p = a["Data.Array.NonEmpty.Internal"],
      z = a["Data.Either"],
      x = a["Data.FoldableWithIndex"],
      t = a["Data.Functor"],
      C = a["Data.Maybe"],
      A = a["Data.Monoid"],
      q = a["Data.Semigroup"],
      v = a["Data.Semigroup.Foldable"],
      E = a["Data.Show"],
      y = a["Data.Tuple"],
      F = a.Effect,
      D = a["Effect.AVar"],
      I = a["Effect.Aff"],
      u = a["Effect.Aff.AVar"],
      M = a["Effect.Aff.Class"],
      G = a["Effect.Class"],
      S = a["Effect.Console"],
      P = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (U) {
    return U(e.identity(e.categoryFn));
  });

  var J = m.freeFunctor,
      W = m.freeBind,
      K = m.freeApplicative,
      O = new c.Monad(function () {
    return K;
  }, function () {
    return W;
  }),
      da = function da(U) {
    return U;
  },
      R = function R(U) {
    return m["resume'"](function (B) {
      return function (Q) {
        return new z.Right(t.map(U)(Q)(B));
      };
    })(z.Left.create);
  },
      V = new t.Functor(function (U) {
    return function (B) {
      if (B instanceof z.Right) B = new z.Right({
        cont: t.map(I.functorAff)(U)(B.value0.cont),
        view: B.value0.view
      });else if (B instanceof z.Left) B = new z.Left(t.map(F.functorEffect)(U)(B.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [B.constructor.name]);
      return B;
    };
  }),
      aa = function aa(U) {
    return m.liftF(z.Left.create(U));
  },
      ba = function ba(U) {
    return new G.MonadEffect(function () {
      return O;
    }, aa);
  },
      Z = function Z(U) {
    return m.liftF(new z.Right({
      view: U,
      cont: I.never
    }));
  },
      ea = function ea(U) {
    return new q.Semigroup(function (B) {
      return function (Q) {
        return h.orr(ha(U))([B, Q]);
      };
    });
  },
      Y = function Y(U) {
    return new w.Plus(function () {
      return L(U);
    }, Z(A.mempty(U)));
  },
      ha = function ha(U) {
    return new h.MultiAlternative(function () {
      return Y(U);
    }, function (B) {
      var Q = function Q(ja) {
        return function (la) {
          return function (oa) {
            var pa = t.map(p.functorNonEmptyArray)(function (ua) {
              return m.wrap(z.Right.create(ua));
            })(la);
            return b.bind(I.bindAff)(n.sequential(I.parallelAff)(x.foldlWithIndex(p.foldableWithIndexNonEmptyArray)(function (ua) {
              return function (Ha) {
                return function (Na) {
                  return f.alt(I.altParAff)(n.parallel(I.parallelAff)(t.map(I.functorAff)(y.Tuple.create(ua))(Na)))(Ha);
                };
              };
            })(w.empty(I.plusParAff))(oa)))(function (ua) {
              return g.pure(I.applicativeAff)(ta(ja)(C.fromMaybe(pa)(r.updateAt(ua.value0)(ua.value1)(pa))));
            });
          };
        };
      },
          N = function N(ja) {
        return function (la) {
          return m.wrap(new z.Right({
            view: v.foldMap1(p.foldable1NonEmptyArray)(ja.Semigroup0())(function (oa) {
              return oa.view;
            })(la),
            cont: Q(ja)(la)(t.map(p.functorNonEmptyArray)(function (oa) {
              return oa.cont;
            })(la))
          }));
        };
      },
          ca = function ca(ja) {
        return function (la) {
          return function (oa) {
            var pa = r.uncons(oa),
                ua = R(V)(pa.head);
            if (ua instanceof z.Left) return g.pure(m.freeApplicative)(ua.value0);

            if (ua instanceof z.Right) {
              if (ua.value0 instanceof z.Left) return m.wrap(new z.Left(function () {
                var Ha = ua.value0.value0();
                return ca(ja)(la)(r["cons'"](Ha)(pa.tail));
              }));
              if (ua.value0 instanceof z.Right) return qa(ja)(r.snoc(la)(ua.value0.value0))(pa.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [ua.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [ua.constructor.name]);
          };
        };
      },
          qa = function qa(ja) {
        return function (la) {
          return function (oa) {
            oa = r.fromArray(oa);
            if (oa instanceof C.Nothing) return N(ja)(la);
            if (oa instanceof C.Just) return ca(ja)(la)(oa.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [oa.constructor.name]);
          };
        };
      },
          ta = function ta(ja) {
        return function (la) {
          var oa = r.uncons(la),
              pa = R(V)(oa.head);
          if (pa instanceof z.Left) return g.pure(m.freeApplicative)(pa.value0);

          if (pa instanceof z.Right) {
            if (pa.value0 instanceof z.Left) return m.wrap(new z.Left(function () {
              var ua = pa.value0.value0();
              return ta(ja)(r["cons'"](ua)(oa.tail));
            }));
            if (pa.value0 instanceof z.Right) return qa(ja)(r.singleton(pa.value0.value0))(oa.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [pa.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [pa.constructor.name]);
        };
      };

      B = r.fromArray(B);
      if (B instanceof C.Just) return ta(U)(t.map(p.functorNonEmptyArray)(da)(B.value0));
      if (B instanceof C.Nothing) return w.empty(Y(U));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [B.constructor.name]);
    });
  },
      L = function L(U) {
    return new f.Alt(function () {
      return J;
    }, q.append(ea(U)));
  },
      H = function H(U) {
    return function (B) {
      var Q = function Q(N) {
        return function (ca) {
          if (ca instanceof z.Left) return S.log("Aff failed - " + E.show(P.showError)(ca.value0));
          if (ca instanceof z.Right) return t["void"](F.functorEffect)(D.tryPut(ca.value0)(N));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [N.constructor.name, ca.constructor.name]);
        };
      };

      return m.wrap(new z.Left(function () {
        var N = D.empty();
        I.runAff_(Q(N))(B)();
        var ca = D.tryTake(N)();
        if (ca instanceof C.Just) return g.pure(m.freeApplicative)(ca.value0);
        if (ca instanceof C.Nothing) return m.liftF(new z.Right({
          view: U,
          cont: u.take(N)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [ca.constructor.name]);
      }));
    };
  };

  d.WidgetStep = function (U) {
    return U;
  };

  d.Widget = function (U) {
    return U;
  };

  d.unWidget = da;
  d.resume = R;
  d.display = Z;
  d.functorWidgetStep = V;
  d.widgetFunctor = J;
  d.widgetBind = W;
  d.widgetApplicative = K;
  d.widgetMonad = O;
  d.widgetShiftMap = a;
  d.widgetMultiAlternative = ha;

  d.widgetMonoid = function (U) {
    return new A.Monoid(function () {
      return ea(U);
    }, w.empty(Y(U)));
  };

  d.widgetAlt = L;
  d.widgetPlus = Y;

  d.widgetAlternative = function (U) {
    return new k.Alternative(function () {
      return K;
    }, function () {
      return Y(U);
    });
  };

  d.widgetMonadEff = ba;

  d.widgetMonadAff = function (U) {
    return new M.MonadAff(function () {
      return ba(U);
    }, H(A.mempty(U)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var d = a["Concur.Core"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      e = a["Control.Parallel.Class"],
      c = a["Data.Either"],
      m = a["Data.Functor"],
      h = a.Effect,
      n = a["Effect.AVar"],
      w = a["Effect.Aff"],
      r = a["Effect.Aff.AVar"],
      p = a["Effect.Aff.Class"],
      z = function z(x) {
    return function (t) {
      var C = f.resume(f.functorWidgetStep)(t);
      if (C instanceof c.Left) return g.pure(b.freeApplicative)(C.value0);

      if (C instanceof c.Right) {
        if (C.value0 instanceof c.Left) return b.wrap(f.WidgetStep(new c.Left(function () {
          var A = C.value0.value0();
          return z(x)(A);
        })));
        if (C.value0 instanceof c.Right) return b.wrap(f.WidgetStep(new c.Left(function () {
          var A = n.empty(),
              q = e.sequential(w.parallelAff)(k.alt(w.altParAff)(e.parallel(w.parallelAff)(p.liftAff(p.monadAffAff)(r.take(A))))(e.parallel(w.parallelAff)(m.map(w.functorAff)(z(x))(C.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new c.Right({
            view: x(function (v) {
              return m["void"](h.functorEffect)(n.tryPut(g.pure(b.freeApplicative)(v))(A));
            })(C.value0.value0.view),
            cont: q
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [C.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [C.constructor.name]);
    };
  };

  d.mkLeafWidget = function (x) {
    return f.Widget(b.wrap(f.WidgetStep(new c.Left(function () {
      var t = n.empty();
      return b.wrap(f.WidgetStep(new c.Right({
        view: x(function (C) {
          return m["void"](h.functorEffect)(n.tryPut(g.pure(b.freeApplicative)(C))(t));
        }),
        cont: p.liftAff(p.monadAffAff)(r.take(t))
      })));
    }))));
  };

  d.mkNodeWidget = function (x) {
    return function (t) {
      return z(x)(t);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var d = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (f) {
    this.liftWidget = f;
  }(a.identity(a.categoryFn));

  d.liftWidget = function (f) {
    return f.liftWidget;
  };

  d.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var d = a["Concur.Core.Props"];
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
        return b.value0(function (c) {
          return e(g(c));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [g.constructor.name, b.constructor.name]);
    };
  });
  d.PrimProp = f;
  d.Handler = k;

  d.mkProp = function (g) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof k) return b.value0(g);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [g.constructor.name, b.constructor.name]);
    };
  };

  d.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var d = a["Concur.Core.DOM"],
      f = a["Concur.Core"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      e = a["Control.ShiftMap"],
      c = a["Data.Functor"],
      m = function m(h) {
    return function (n) {
      return function (w) {
        return function (r) {
          return e.shiftMap(h)(function (p) {
            return function (z) {
              return f.mkNodeWidget(function (x) {
                return function (t) {
                  return w(c.map(n)(function () {
                    var C = g.mkProp(x),
                        A = c.map(g.functorProps)(p);
                    return function (q) {
                      return C(A(q));
                    };
                  }())(r))(t);
                };
              })(z);
            };
          });
        };
      };
    };
  };

  d.el = m;

  d.elLeaf = function (h) {
    return function (n) {
      return function (w) {
        return function (r) {
          return k.liftWidget(h)(f.mkLeafWidget(function (p) {
            return w(c.map(n)(g.mkProp(p))(r));
          }));
        };
      };
    };
  };

  d["el'"] = function (h) {
    return function (n) {
      return function (w) {
        return function (r) {
          return function (p) {
            var z = m(h)(w)(r)(p),
                x = b.orr(n);
            return function (t) {
              return z(x(t));
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
      f = a["Concur.Core.Types"],
      k = a["Control.Applicative"],
      g = a["Control.Monad.Free"],
      b = a["Data.Either"],
      e = a["Data.Functor"],
      c = a["Data.Monoid"],
      m = a["Data.Tuple"],
      h = a.Effect,
      n = a["Effect.Aff"],
      w = function w(p) {
    return function (z) {
      var x = g.resume(f.functorWidgetStep)(f.unWidget(z));
      if (x instanceof b.Right) return k.pure(h.applicativeEffect)(new m.Tuple(z, c.mempty(p)));

      if (x instanceof b.Left) {
        if (x.value0 instanceof b.Left) return function () {
          var t = x.value0.value0();
          return w(p)(t)();
        };
        if (x.value0 instanceof b.Right) return k.pure(h.applicativeEffect)(new m.Tuple(g.wrap(new b.Right(x.value0.value0)), x.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [x.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [x.constructor.name]);
    };
  },
      r = function r(p) {
    return function (z) {
      return function (x) {
        var t = g.resume(f.functorWidgetStep)(x);
        if (t instanceof b.Right) return k.pure(h.applicativeEffect)(c.mempty(p));

        if (t instanceof b.Left) {
          if (t.value0 instanceof b.Left) return function () {
            var C = t.value0.value0();
            return r(p)(z)(C)();
          };
          if (t.value0 instanceof b.Right) return function () {
            n.runAff_(function () {
              var C = e.map(b.functorEither)(f.Widget);
              return function (A) {
                return z(C(A));
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

  d.discharge = r;
  d.dischargePartialEffect = w;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (d, f) {
    this.Extend0 = d;
    this.extract = f;
  };

  a.extract = function (d) {
    return d.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (d, f) {
    this.Functor0 = d;
    this.extend = f;
  };
})(PS);

(function (a) {
  a.defer = function (d) {
    var f = null;
    return function () {
      if (void 0 === d) return f;
      f = d();
      d = void 0;
      return f;
    };
  };

  a.force = function (d) {
    return d();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var d = a["Data.Lazy"],
      f = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (k) {
    return function (g) {
      return f.defer(function (b) {
        return k(f.force(g));
      });
    };
  });
  d.functorLazy = a;
  d.defer = f.defer;
  d.force = f.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var d = a["Control.Cofree"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Comonad"],
      m = a["Control.Extend"],
      h = a["Control.Monad"],
      n = a["Control.Plus"],
      w = a["Control.ShiftMap"],
      r = a["Data.Functor"],
      p = a["Data.Lazy"],
      z = a["Data.Tuple"],
      x = function x(D) {
    return z.snd(p.force(D));
  },
      t = function t(D) {
    return function (I) {
      return p.defer(function (u) {
        return new z.Tuple(D, I);
      });
    };
  },
      C = function C(D) {
    return z.fst(p.force(D));
  },
      A = function A(D) {
    return new r.Functor(function (I) {
      var u = function u(M) {
        return r.map(p.functorLazy)(function (G) {
          return new z.Tuple(I(G.value0), r.map(D)(u)(G.value1));
        })(M);
      };

      return u;
    });
  },
      q = function q(D) {
    return new m.Extend(function () {
      return A(D);
    }, function (I) {
      var u = function u(M) {
        return r.map(p.functorLazy)(function (G) {
          return new z.Tuple(I(M), r.map(D)(u)(G.value1));
        })(M);
      };

      return u;
    });
  },
      v = function v(D) {
    return new h.Monad(function () {
      return F(D);
    }, function () {
      return E(D);
    });
  },
      E = function E(D) {
    return new e.Bind(function () {
      return y(D);
    }, function (I) {
      return function (u) {
        var M = function M(S) {
          return function (P) {
            var J = r.map(D.Plus1().Alt0().Functor0())(M(S))(x(P)),
                W = r.map(D.Plus1().Alt0().Functor0())(G)(x(S));
            return t(C(P))(k.alt(D.Plus1().Alt0())(W)(J));
          };
        },
            G = function G(S) {
          return M(S)(u(C(S)));
        };

        return G(I);
      };
    });
  },
      y = function y(D) {
    return new b.Apply(function () {
      return A(D.Plus1().Alt0().Functor0());
    }, h.ap(v(D)));
  },
      F = function F(D) {
    return new g.Applicative(function () {
      return y(D);
    }, function (I) {
      return t(I)(n.empty(D.Plus1()));
    });
  };

  d.mkCofree = t;
  d.tail = x;

  d.comonadCofree = function (D) {
    return new c.Comonad(function () {
      return q(D);
    }, C);
  };

  d.applicativeCofree = F;
  d.bindCofree = E;

  d.shiftMapCofree = function (D) {
    return new w.ShiftMap(function (I) {
      return function (u) {
        return p.defer(function (M) {
          M = p.force(u);
          return new z.Tuple(M.value0, I(g.pure(F(f.widgetAlternative(D))))(M.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var d = a["Concur.Core.FRP"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Cofree"],
      c = a["Control.Comonad"],
      m = a["Data.Functor"],
      h = a["Data.Maybe"],
      n = a["Data.Unit"],
      w = a["Effect.Aff"],
      r = a["Effect.Aff.Class"],
      p = e.tail,
      z = e.mkCofree,
      x = function x(C) {
    return function (A) {
      return function (q) {
        var v = q(A);
        return z(c.extract(e.comonadCofree(f.widgetFunctor))(v))(b.bind(f.widgetBind)(p(v))(function (E) {
          return g.pure(f.widgetApplicative)(x(C)(c.extract(e.comonadCofree(f.widgetFunctor))(E))(q));
        }));
      };
    };
  },
      t = function t(C) {
    return b.bind(f.widgetBind)(p(C))(t);
  };

  d.step = z;

  d.display = function (C) {
    return z(n.unit)(C);
  };

  d.loopS = x;
  d.dyn = t;

  d.debounce = function (C) {
    return function (A) {
      return function (q) {
        return function (v) {
          var E = function E(F) {
            return function (D) {
              return b.bind(f.widgetBind)(k.alt(f.widgetAlt(C))(m.map(f.widgetFunctor)(h.Just.create)(D(F)))(m.voidRight(f.widgetFunctor)(h.Nothing.value)(r.liftAff(f.widgetMonadAff(C))(w.delay(A)))))(function (I) {
                if (I instanceof h.Nothing) return g.pure(f.widgetApplicative)(y(F)(D));
                if (I instanceof h.Just) return E(I.value0)(D);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [I.constructor.name]);
              });
            };
          },
              y = function y(F) {
            return function (D) {
              return z(F)(b.bind(f.widgetBind)(D(F))(function (I) {
                return E(I)(D);
              }));
            };
          };

          return y(q)(v);
        };
      };
    };
  };
})(PS);

(function (a) {
  function d(g) {
    return function (b) {
      return function (e) {
        return f.createElement.apply(f, [g, b].concat(e));
      };
    };
  }

  var f = require("react"),
      k = function (g) {
    function b(e, c, m) {
      switch (c) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          e[c] = m;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          e[c] = function (h, n) {
            return m(h)(n)();
          };

          break;

        case "componentDidUpdate":
          e[c] = function (h, n, w) {
            return m(h)(n)(w)();
          };

          break;

        case "unsafeComponentWillMount":
          e.UNSAFE_componentWillMount = m;
          break;

        case "unsafeComponentWillReceiveProps":
          e.UNSAFE_componentWillReceiveProps = function (h) {
            return m(h)();
          };

          break;

        case "unsafeComponentWillUpdate":
          e.UNSAFE_componentWillUpdate = function (h, n) {
            return m(h)(n)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + c);
      }
    }

    return function (e) {
      return function (c) {
        var m = function m(h) {
          g.call(this, h);
          h = c(this)();

          for (var n in h) {
            b(this, n, h[n]);
          }
        };

        m.displayName = e;
        m.prototype = Object.create(g.prototype);
        return m.prototype.constructor = m;
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

  a.createElementImpl = d;
  a.createElementTagName = d;

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
  var d = a.React,
      f = a.React;
  a = f.setStateImpl;
  var k = new function (g) {
    this.toElement = g;
  }((0, f.createElementImpl)(f.fragment)({}));

  d.component = function (g) {
    return f.componentImpl;
  };

  d.writeState = a;

  d.createLeafElement = function (g) {
    return f.createLeafElementImpl;
  };

  d.toElement = function (g) {
    return g.toElement;
  };

  d.isReactElementArray = k;
  d.getState = f.getState;
  d.createElementTagName = f.createElementTagName;
  d.createElementTagNameDynamic = f.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var d = a["Concur.Core.Discharge"],
      f = a["Data.Either"],
      k = a["Data.Functor"],
      g = a["Data.Monoid"],
      b = a["Data.Show"],
      e = a["Data.Unit"],
      c = a.Effect,
      m = a["Effect.Console"],
      h = a["Effect.Exception"],
      n = a.React,
      w = function w(r) {
    var p = function p(x) {
      return n.toElement(n.isReactElementArray)(x.view);
    },
        z = function z(x) {
      return function (t) {
        if (t instanceof f.Right) return function () {
          var C = d.discharge(g.monoidArray)(z(x))(t.value0)();
          return k["void"](c.functorEffect)(n.writeState(x)({
            view: C
          }))();
        };
        if (t instanceof f.Left) return function () {
          m.log("FAILED! " + b.show(h.showError)(t.value0))();
          return e.unit;
        };
        throw Error("Failed pattern match at Concur.React (line 31, column 3 - line 33, column 50): " + [x.constructor.name, t.constructor.name]);
      };
    };

    return n.component()("Concur")(function (x) {
      return function () {
        var t = d.dischargePartialEffect(g.monoidArray)(r)();
        return {
          state: {
            view: t.value1
          },
          render: k.map(c.functorEffect)(p)(n.getState(x)),
          componentDidMount: z(x)(new f.Right(t.value0))
        };
      };
    });
  };

  a["Concur.React"].renderComponent = function (r) {
    return n.createLeafElement()(w(r))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (d) {
    return function (f) {
      var k = {};
      k[d] = f;
      return k;
    };
  };

  a.unsafeUnfoldProps = function (d) {
    return function (f) {
      var k = {},
          g = {};
      g[d] = k;

      for (var b in f) {
        f.hasOwnProperty(b) && (k[b] = f[b]);
      }

      return g;
    };
  };

  a.unsafeFromPropsArray = function (d) {
    for (var f = {}, k = 0, g = d.length; k < g; k++) {
      var b = d[k],
          e;

      for (e in b) {
        b.hasOwnProperty(e) && (f[e] = b[e]);
      }
    }

    return f;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (d) {
    return function (f) {
      return d(f)();
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
      f = a["React.DOM.Props"],
      k = a["Effect.Uncurried"];
  a = f.unsafeMkProps("value");
  var g = f.unsafeMkProps("target"),
      b = f.unsafeUnfoldProps("style"),
      e = f.unsafeMkProps("href"),
      c = f.unsafeMkProps("disabled"),
      m = f.unsafeMkProps("defaultValue"),
      h = f.unsafeMkProps("className"),
      n = f.unsafeMkProps("checked"),
      w = f.unsafeMkProps("type");
  d.style = b;
  d.checked = n;
  d.className = h;
  d.defaultValue = m;
  d.disabled = c;
  d.href = e;
  d.target = g;
  d._type = w;
  d.value = a;

  d.onChange = function (r) {
    return f.unsafeMkProps("onChange")(k.mkEffectFn1(r));
  };

  d.onClick = function (r) {
    return f.unsafeMkProps("onClick")(k.mkEffectFn1(r));
  };

  d.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var d = a["React.DOM"],
      f = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var g = function g(z) {
    return function (x) {
      return function (t) {
        if (z) {
          if (z) var C = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [z.constructor.name]);
        } else C = f.createElementTagName;
        return C(x)(k.unsafeFromPropsArray(t));
      };
    };
  },
      b = g(!1)("option"),
      e = g(!1)("select"),
      c = g(!1)("span"),
      m = g(!1)("ul"),
      h = g(!1)("li"),
      n = g(!1)("div"),
      w = g(!1)("cite"),
      r = g(!1)("button"),
      p = g(!1)("a");

  d.text = a;
  d.a = p;

  d.br = function (z) {
    return g(!1)("br")(z)([]);
  };

  d.button = r;
  d.cite = w;
  d.div = n;

  d.input = function (z) {
    return g(!1)("input")(z)([]);
  };

  d.li = h;
  d.option = b;
  d.select = e;
  d.span = c;
  d.ul = m;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var d = a["Concur.React.DOM"],
      f = a["Concur.Core.DOM"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      c = function c(x) {
    return function (t) {
      return function (C) {
        return [x(t)(C)];
      };
    };
  },
      m = function m(x) {
    return function (t) {
      return f.elLeaf(x)(b.functorArray)(function (C) {
        return [t(C)];
      });
    };
  },
      h = function h(x) {
    return function (t) {
      return function (C) {
        return f["el'"](x)(t)(b.functorArray)(c(C));
      };
    };
  },
      n = function n(x) {
    return function (t) {
      return h(t)(x)(e.li);
    };
  },
      w = function w(x) {
    return function (t) {
      return h(t)(x)(e.span);
    };
  },
      r = function r(x) {
    return function (t) {
      return f.el(x)(b.functorArray)(c(t));
    };
  },
      p = function p(x) {
    return function (t) {
      return h(t)(x)(e.div);
    };
  },
      z = function z(x) {
    return function (t) {
      return h(t)(x)(e.cite);
    };
  };

  d.text = function (x) {
    return function (t) {
      return k.liftWidget(x)(g.display([e.text(t)]));
    };
  };

  d.a = function (x) {
    return function (t) {
      return h(t)(x)(e.a);
    };
  };

  d["br'"] = function (x) {
    return m(x)(e.br)([]);
  };

  d.button_ = function (x) {
    return r(x)(e.button);
  };

  d.button = function (x) {
    return function (t) {
      return h(t)(x)(e.button);
    };
  };

  d["cite'"] = function (x) {
    return function (t) {
      return z(x)(t)([]);
    };
  };

  d.div_ = function (x) {
    return r(x)(e.div);
  };

  d.div = p;

  d["div'"] = function (x) {
    return function (t) {
      return p(x)(t)([]);
    };
  };

  d.input = function (x) {
    return m(x)(e.input);
  };

  d.li_ = function (x) {
    return r(x)(e.li);
  };

  d.li = n;

  d["li'"] = function (x) {
    return function (t) {
      return n(x)(t)([]);
    };
  };

  d.option = function (x) {
    return function (t) {
      return h(t)(x)(e.option);
    };
  };

  d.select = function (x) {
    return function (t) {
      return h(t)(x)(e.select);
    };
  };

  d.span_ = function (x) {
    return r(x)(e.span);
  };

  d.span = w;

  d["span'"] = function (x) {
    return function (t) {
      return w(x)(t)([]);
    };
  };

  d.ul_ = function (x) {
    return r(x)(e.ul);
  };

  d.ul = function (x) {
    return function (t) {
      return h(t)(x)(e.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var d = a["Concur.React.Props"],
      f = a["Concur.Core.Props"],
      k = a["Data.Array"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Data.Monoid"],
      c = a["React.DOM.Props"];
  a = new f.Handler(c.onClick);

  var m = new f.Handler(c.onChange),
      h = function h(w) {
    return f.PrimProp.create(c.className(w));
  },
      n = function () {
    var w = g.intercalate(g.foldableArray)(e.monoidString)(" "),
        r = k.concatMap(b.maybe([])(function (p) {
      return [p];
    }));
    return function (p) {
      return h(w(r(p)));
    };
  }();

  d.classList = n;

  d.unsafeTargetValue = function (w) {
    return w.target.value;
  };

  d.style = function (w) {
    return f.PrimProp.create(c.style(w));
  };

  d.checked = function (w) {
    return f.PrimProp.create(c.checked(w));
  };

  d.className = h;

  d.defaultValue = function (w) {
    return f.PrimProp.create(c.defaultValue(w));
  };

  d.disabled = function (w) {
    return f.PrimProp.create(c.disabled(w));
  };

  d.href = function (w) {
    return f.PrimProp.create(c.href(w));
  };

  d._type = function (w) {
    return f.PrimProp.create(c._type(w));
  };

  d.value = function (w) {
    return f.PrimProp.create(c.value(w));
  };

  d.onChange = m;
  d.onClick = a;
})(PS);

(function (a) {
  var d = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (f, k) {
    return d.render(f, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a["null"] = null;

  a.nullable = function (d, f, k) {
    return null == d ? f : k(d);
  };

  a.notNull = function (d) {
    return d;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var d = a["Data.Nullable"],
      f = a["Data.Nullable"],
      k = a["Data.Maybe"];
  a = k.maybe(f["null"])(f.notNull);

  d.toMaybe = function (g) {
    return f.nullable(g, k.Nothing.value, k.Just.create);
  };

  d.toNullable = a;
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var d = a.ReactDOM,
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a.ReactDOM.render = function (b) {
    return function (e) {
      return f.map(g.functorEffect)(k.toMaybe)(function () {
        return d.renderImpl(b, e);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (d) {
    return function (f) {
      return function () {
        return f.getElementById(d);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var d = a["Web.DOM.NonElementParentNode"],
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (b) {
    var e = f.map(g.functorEffect)(k.toMaybe),
        c = d._getElementById(b);

    return function (m) {
      return e(c(m));
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
  var f = a.unsafeCoerce;
  d.toDocument = a.unsafeCoerce;
  d.toNonElementParentNode = f;
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
      f = a["Data.Functor"],
      k = a["Data.Maybe"],
      g = a["Data.Unit"],
      b = a.Effect,
      e = a.ReactDOM,
      c = a["Web.DOM.NonElementParentNode"],
      m = a["Web.HTML"],
      h = a["Web.HTML.HTMLDocument"],
      n = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (w) {
    return function (r) {
      return function () {
        var p = m.window();
        p = n.document(p)();
        p = h.toNonElementParentNode(p);
        p = c.getElementById(w)(p)();
        if (p instanceof k.Nothing) return g.unit;
        if (p instanceof k.Just) return f["void"](b.functorEffect)(e.render(d.renderComponent(r))(p.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [p.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var d = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      k = a["Data.Unit"];

  d.state = function (g) {
    return g.state;
  };

  d.MonadState = function (g, b) {
    this.Monad0 = g;
    this.state = b;
  };

  d.get = function (g) {
    return (0, g.state)(function (b) {
      return new f.Tuple(b, b);
    });
  };

  d.gets = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(b(e), e);
      });
    };
  };

  d.put = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(k.unit, b);
      });
    };
  };

  d.modify_ = function (g) {
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

  a.lift = function (d) {
    return d.lift;
  };

  a.MonadTrans = function (d) {
    this.lift = d;
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var d = a["Control.Monad.Except.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.Error.Class"],
      c = a["Control.Monad.State.Class"],
      m = a["Control.Monad.Trans.Class"],
      h = a["Data.Either"],
      n = a["Data.Functor"],
      w = new m.MonadTrans(function (A) {
    return function (q) {
      return g.bind(A.Bind1())(q)(function (v) {
        return f.pure(A.Applicative0())(new h.Right(v));
      });
    };
  }),
      r = function r(A) {
    return function (q) {
      return A(q);
    };
  },
      p = function p(A) {
    return new n.Functor(function (q) {
      return r(n.map(A)(n.map(h.functorEither)(q)));
    });
  },
      z = function z(A) {
    return new b.Monad(function () {
      return C(A);
    }, function () {
      return x(A);
    });
  },
      x = function x(A) {
    return new g.Bind(function () {
      return t(A);
    }, function (q) {
      return function (v) {
        return g.bind(A.Bind1())(q)(h.either(function () {
          var E = f.pure(A.Applicative0());
          return function (y) {
            return E(h.Left.create(y));
          };
        }())(function (E) {
          return v(E);
        }));
      };
    });
  },
      t = function t(A) {
    return new k.Apply(function () {
      return p(A.Bind1().Apply0().Functor0());
    }, b.ap(z(A)));
  },
      C = function C(A) {
    return new f.Applicative(function () {
      return t(A);
    }, function () {
      var q = f.pure(A.Applicative0());
      return function (v) {
        return q(h.Right.create(v));
      };
    }());
  };

  d.ExceptT = function (A) {
    return A;
  };

  d.runExceptT = function (A) {
    return A;
  };

  d.functorExceptT = p;
  d.applyExceptT = t;
  d.applicativeExceptT = C;
  d.bindExceptT = x;

  d.monadThrowExceptT = function (A) {
    return new e.MonadThrow(function () {
      return z(A);
    }, function () {
      var q = f.pure(A.Applicative0());
      return function (v) {
        return q(h.Left.create(v));
      };
    }());
  };

  d.monadStateExceptT = function (A) {
    return new c.MonadState(function () {
      return z(A.Monad0());
    }, function (q) {
      return m.lift(w)(A.Monad0())(c.state(A)(q));
    });
  };
})(PS);

(function (a) {
  a.map_ = function (d) {
    return function (f) {
      return function () {
        return d(f());
      };
    };
  };

  a.pure_ = function (d) {
    return function () {
      return d;
    };
  };

  a.bind_ = function (d) {
    return function (f) {
      return function () {
        return f(d())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var d = a["Control.Monad.ST.Internal"],
      f = a["Control.Monad.ST.Internal"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      c = new a["Data.Functor"].Functor(f.map_);
  a = new e.Monad(function () {
    return n;
  }, function () {
    return m;
  });
  var m = new b.Bind(function () {
    return h;
  }, f.bind_),
      h = new g.Apply(function () {
    return c;
  }, e.ap(a)),
      n = new k.Applicative(function () {
    return h;
  }, f.pure_);
  d.applicativeST = n;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (d) {
    return function (f) {
      return d(f).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};
  var d = a["Control.Monad.State.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.State.Class"],
      c = a["Data.Functor"],
      m = a["Data.Tuple"],
      h = a["Data.Unit"];
  a = new a["Control.Lazy"].Lazy(function (x) {
    return function (t) {
      return x(h.unit)(t);
    };
  });

  var n = function n(x) {
    return new c.Functor(function (t) {
      return function (C) {
        return function (A) {
          return c.map(x)(function (q) {
            return new m.Tuple(t(q.value0), q.value1);
          })(C(A));
        };
      };
    });
  },
      w = function w(x) {
    return new b.Monad(function () {
      return z(x);
    }, function () {
      return r(x);
    });
  },
      r = function r(x) {
    return new g.Bind(function () {
      return p(x);
    }, function (t) {
      return function (C) {
        return function (A) {
          return g.bind(x.Bind1())(t(A))(function (q) {
            return C(q.value0)(q.value1);
          });
        };
      };
    });
  },
      p = function p(x) {
    return new k.Apply(function () {
      return n(x.Bind1().Apply0().Functor0());
    }, b.ap(w(x)));
  },
      z = function z(x) {
    return new f.Applicative(function () {
      return p(x);
    }, function (t) {
      return function (C) {
        return f.pure(x.Applicative0())(new m.Tuple(t, C));
      };
    });
  };

  d.StateT = function (x) {
    return x;
  };

  d.runStateT = function (x) {
    return x;
  };

  d.evalStateT = function (x) {
    return function (t) {
      return function (C) {
        return c.map(x)(m.fst)(t(C));
      };
    };
  };

  d.functorStateT = n;
  d.bindStateT = r;
  d.monadStateT = w;
  d.lazyStateT = a;

  d.monadStateStateT = function (x) {
    return new e.MonadState(function () {
      return w(x);
    }, function (t) {
      return function () {
        var C = f.pure(x.Applicative0());
        return function (A) {
          return C(t(A));
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
      f = a["Data.Enum"],
      k = a["Control.Apply"],
      g = a["Data.Bounded"],
      b = a["Data.Functor"],
      e = a["Data.Maybe"],
      c = a["Data.Newtype"],
      m = a["Data.Ord"],
      h = a["Data.Tuple"],
      n = a["Data.Unfoldable1"];

  a = function a(F) {
    return F;
  };

  var w = function w(F) {
    this.Bounded0 = F;
  },
      r = function r(F, D, I) {
    this.Ord0 = F;
    this.pred = D;
    this.succ = I;
  },
      p = function p(F, D, I, u, M) {
    this.Bounded0 = F;
    this.Enum1 = D;
    this.cardinality = I;
    this.fromEnum = u;
    this.toEnum = M;
  },
      z = new w(function () {
    return g.boundedBoolean;
  }),
      x = new c.Newtype(function (F) {
    return F;
  }, a),
      t = function t(F) {
    return new r(function () {
      return e.ordMaybe(F.Enum1().Ord0());
    }, function (D) {
      if (D instanceof e.Nothing) return e.Nothing.value;
      if (D instanceof e.Just) return new e.Just((0, F.Enum1().pred)(D.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [D.constructor.name]);
    }, function (D) {
      if (D instanceof e.Nothing) return new e.Just(new e.Just(g.bottom(F.Bounded0())));
      if (D instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, F.Enum1().succ)(D.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [D.constructor.name]);
    });
  },
      C = new r(function () {
    return m.ordBoolean;
  }, function (F) {
    return F ? new e.Just(!1) : e.Nothing.value;
  }, function (F) {
    return F ? e.Nothing.value : new e.Just(!0);
  }),
      A = function A(F) {
    return function (D) {
      return function (I) {
        return F(D(I) + 1 | 0);
      };
    };
  },
      q = function q(F) {
    return function (D) {
      return function (I) {
        return F(D(I) - 1 | 0);
      };
    };
  },
      v = function v(F) {
    return F >= g.bottom(g.boundedInt) && F <= g.top(g.boundedInt) ? new e.Just(f.fromCharCode(F)) : e.Nothing.value;
  },
      E = new r(function () {
    return m.ordChar;
  }, q(v)(f.toCharCode), A(v)(f.toCharCode));

  v = new p(function () {
    return g.boundedChar;
  }, function () {
    return E;
  }, f.toCharCode(g.top(g.boundedChar)) - f.toCharCode(g.bottom(g.boundedChar)) | 0, f.toCharCode, v);
  var y = new p(function () {
    return g.boundedBoolean;
  }, function () {
    return C;
  }, 2, function (F) {
    if (!F) return 0;
    if (F) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [F.constructor.name]);
  }, function (F) {
    return 0 === F ? new e.Just(!1) : 1 === F ? new e.Just(!0) : e.Nothing.value;
  });
  d.Enum = r;
  d.BoundedEnum = p;

  d.toEnum = function (F) {
    return F.toEnum;
  };

  d.fromEnum = function (F) {
    return F.fromEnum;
  };

  d.toEnumWithDefaults = function (F) {
    return function (D) {
      return function (I) {
        return function (u) {
          var M = (0, F.toEnum)(u);
          if (M instanceof e.Just) return M.value0;
          if (M instanceof e.Nothing) return u < (0, F.fromEnum)(g.bottom(F.Bounded0())) ? D : I;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [M.constructor.name]);
        };
      };
    };
  };

  d.Cardinality = a;

  d.upFromIncluding = function (F) {
    return function (D) {
      return n.unfoldr1(D)(k.apply(k.applyFn)(h.Tuple.create)(F.succ));
    };
  };

  d.defaultSucc = A;
  d.defaultPred = q;
  d.SmallBounded = w;
  d.boundedEnumBoolean = y;
  d.boundedEnumChar = v;
  d.newtypeCardinality = x;

  d.boundedEnumMaybe = function (F) {
    return function (D) {
      return new p(function () {
        return e.boundedMaybe(D.Bounded0());
      }, function () {
        return t(D);
      }, c.unwrap(x)(D.cardinality) + 1 | 0, function (I) {
        if (I instanceof e.Nothing) return 0;
        if (I instanceof e.Just) return (0, D.fromEnum)(I.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [I.constructor.name]);
      }, function (I) {
        return 0 === I ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, D.toEnum)(I - 1 | 0));
      });
    };
  };

  d.smallBoundedBoolean = z;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var d = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  d.fromCharCode = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var d = a["Data.CommutativeRing"],
      f = a["Data.Ring"];
  a = new function (k) {
    this.Ring0 = k;
  }(function () {
    return f.ringInt;
  });
  d.commutativeRingInt = a;
})(PS);

(function (a) {
  a["Data.Const"] = a["Data.Const"] || {};

  var d = a["Data.Const"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      c = function c(n) {
    return n;
  };

  a = new a["Data.Newtype"].Newtype(function (n) {
    return n;
  }, c);

  var m = new g.Functor(function (n) {
    return function (w) {
      return w;
    };
  }),
      h = function h(n) {
    return new k.Apply(function () {
      return m;
    }, function (w) {
      return function (r) {
        return e.append(n)(w)(r);
      };
    });
  };

  d.Const = c;
  d.newtypeConst = a;

  d.applicativeConst = function (n) {
    return new f.Applicative(function () {
      return h(n.Semigroup0());
    }, function (w) {
      return b.mempty(n);
    });
  };
})(PS);

(function (a) {
  var d = function d(f, k, g) {
    k = new Date(Date.UTC(f, k, g));
    0 <= f && 100 > f && k.setUTCFullYear(f);
    return k;
  };

  a.canonicalDateImpl = function (f, k, g, b) {
    k = d(k, g - 1, b);
    return f(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };

  a.calcWeekday = function (f, k, g) {
    return d(f, k - 1, g).getUTCDay();
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var d = a["Data.Date.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      c = a["Data.Ord"],
      m = a["Data.Ordering"],
      h = a["Data.Show"],
      n = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      w = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      r = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      p = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      z = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      x = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      t = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      C = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      A = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      q = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      v = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      E = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      y = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      F = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      D = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      I = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      u = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      M = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      G = function () {
    function B() {}

    B.value = new B();
    return B;
  }();

  a = new h.Show(function (B) {
    if (B instanceof n) return "Monday";
    if (B instanceof w) return "Tuesday";
    if (B instanceof r) return "Wednesday";
    if (B instanceof p) return "Thursday";
    if (B instanceof z) return "Friday";
    if (B instanceof x) return "Saturday";
    if (B instanceof t) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [B.constructor.name]);
  });
  h = new h.Show(function (B) {
    if (B instanceof C) return "January";
    if (B instanceof A) return "February";
    if (B instanceof q) return "March";
    if (B instanceof v) return "April";
    if (B instanceof E) return "May";
    if (B instanceof y) return "June";
    if (B instanceof F) return "July";
    if (B instanceof D) return "August";
    if (B instanceof I) return "September";
    if (B instanceof u) return "October";
    if (B instanceof M) return "November";
    if (B instanceof G) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [B.constructor.name]);
  });
  var S = c.ordInt,
      P = c.ordInt,
      J = new b.Eq(function (B) {
    return function (Q) {
      return B instanceof n && Q instanceof n || B instanceof w && Q instanceof w || B instanceof r && Q instanceof r || B instanceof p && Q instanceof p || B instanceof z && Q instanceof z || B instanceof x && Q instanceof x || B instanceof t && Q instanceof t ? !0 : !1;
    };
  }),
      W = new c.Ord(function () {
    return J;
  }, function (B) {
    return function (Q) {
      if (B instanceof n && Q instanceof n) return m.EQ.value;
      if (B instanceof n) return m.LT.value;
      if (Q instanceof n) return m.GT.value;
      if (B instanceof w && Q instanceof w) return m.EQ.value;
      if (B instanceof w) return m.LT.value;
      if (Q instanceof w) return m.GT.value;
      if (B instanceof r && Q instanceof r) return m.EQ.value;
      if (B instanceof r) return m.LT.value;
      if (Q instanceof r) return m.GT.value;
      if (B instanceof p && Q instanceof p) return m.EQ.value;
      if (B instanceof p) return m.LT.value;
      if (Q instanceof p) return m.GT.value;
      if (B instanceof z && Q instanceof z) return m.EQ.value;
      if (B instanceof z) return m.LT.value;
      if (Q instanceof z) return m.GT.value;
      if (B instanceof x && Q instanceof x) return m.EQ.value;
      if (B instanceof x) return m.LT.value;
      if (Q instanceof x) return m.GT.value;
      if (B instanceof t && Q instanceof t) return m.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [B.constructor.name, Q.constructor.name]);
    };
  }),
      K = new b.Eq(function (B) {
    return function (Q) {
      return B instanceof C && Q instanceof C || B instanceof A && Q instanceof A || B instanceof q && Q instanceof q || B instanceof v && Q instanceof v || B instanceof E && Q instanceof E || B instanceof y && Q instanceof y || B instanceof F && Q instanceof F || B instanceof D && Q instanceof D || B instanceof I && Q instanceof I || B instanceof u && Q instanceof u || B instanceof M && Q instanceof M || B instanceof G && Q instanceof G ? !0 : !1;
    };
  }),
      O = new c.Ord(function () {
    return K;
  }, function (B) {
    return function (Q) {
      if (B instanceof C && Q instanceof C) return m.EQ.value;
      if (B instanceof C) return m.LT.value;
      if (Q instanceof C) return m.GT.value;
      if (B instanceof A && Q instanceof A) return m.EQ.value;
      if (B instanceof A) return m.LT.value;
      if (Q instanceof A) return m.GT.value;
      if (B instanceof q && Q instanceof q) return m.EQ.value;
      if (B instanceof q) return m.LT.value;
      if (Q instanceof q) return m.GT.value;
      if (B instanceof v && Q instanceof v) return m.EQ.value;
      if (B instanceof v) return m.LT.value;
      if (Q instanceof v) return m.GT.value;
      if (B instanceof E && Q instanceof E) return m.EQ.value;
      if (B instanceof E) return m.LT.value;
      if (Q instanceof E) return m.GT.value;
      if (B instanceof y && Q instanceof y) return m.EQ.value;
      if (B instanceof y) return m.LT.value;
      if (Q instanceof y) return m.GT.value;
      if (B instanceof F && Q instanceof F) return m.EQ.value;
      if (B instanceof F) return m.LT.value;
      if (Q instanceof F) return m.GT.value;
      if (B instanceof D && Q instanceof D) return m.EQ.value;
      if (B instanceof D) return m.LT.value;
      if (Q instanceof D) return m.GT.value;
      if (B instanceof I && Q instanceof I) return m.EQ.value;
      if (B instanceof I) return m.LT.value;
      if (Q instanceof I) return m.GT.value;
      if (B instanceof u && Q instanceof u) return m.EQ.value;
      if (B instanceof u) return m.LT.value;
      if (Q instanceof u) return m.GT.value;
      if (B instanceof M && Q instanceof M) return m.EQ.value;
      if (B instanceof M) return m.LT.value;
      if (Q instanceof M) return m.GT.value;
      if (B instanceof G && Q instanceof G) return m.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [B.constructor.name, Q.constructor.name]);
    };
  }),
      da = new k.Bounded(function () {
    return S;
  }, -271820, 275759),
      R = new k.Bounded(function () {
    return W;
  }, n.value, t.value),
      V = new k.Bounded(function () {
    return O;
  }, C.value, G.value),
      aa = new g.BoundedEnum(function () {
    return da;
  }, function () {
    return ba;
  }, 547580, function (B) {
    return B;
  }, function (B) {
    if (-271820 <= B && 275759 >= B) return new e.Just(B);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [B.constructor.name]);
  }),
      ba = new g.Enum(function () {
    return S;
  }, function () {
    var B = g.toEnum(aa),
        Q = g.fromEnum(aa);
    return function (N) {
      return B(Q(N) - 1 | 0);
    };
  }(), function () {
    var B = g.toEnum(aa),
        Q = g.fromEnum(aa);
    return function (N) {
      return B(Q(N) + 1 | 0);
    };
  }()),
      Z = new g.BoundedEnum(function () {
    return R;
  }, function () {
    return ea;
  }, 7, function (B) {
    if (B instanceof n) return 1;
    if (B instanceof w) return 2;
    if (B instanceof r) return 3;
    if (B instanceof p) return 4;
    if (B instanceof z) return 5;
    if (B instanceof x) return 6;
    if (B instanceof t) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [B.constructor.name]);
  }, function (B) {
    return 1 === B ? new e.Just(n.value) : 2 === B ? new e.Just(w.value) : 3 === B ? new e.Just(r.value) : 4 === B ? new e.Just(p.value) : 5 === B ? new e.Just(z.value) : 6 === B ? new e.Just(x.value) : 7 === B ? new e.Just(t.value) : e.Nothing.value;
  }),
      ea = new g.Enum(function () {
    return W;
  }, function () {
    var B = g.toEnum(Z),
        Q = g.fromEnum(Z);
    return function (N) {
      return B(Q(N) - 1 | 0);
    };
  }(), function () {
    var B = g.toEnum(Z),
        Q = g.fromEnum(Z);
    return function (N) {
      return B(Q(N) + 1 | 0);
    };
  }()),
      Y = new g.BoundedEnum(function () {
    return V;
  }, function () {
    return ha;
  }, 12, function (B) {
    if (B instanceof C) return 1;
    if (B instanceof A) return 2;
    if (B instanceof q) return 3;
    if (B instanceof v) return 4;
    if (B instanceof E) return 5;
    if (B instanceof y) return 6;
    if (B instanceof F) return 7;
    if (B instanceof D) return 8;
    if (B instanceof I) return 9;
    if (B instanceof u) return 10;
    if (B instanceof M) return 11;
    if (B instanceof G) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [B.constructor.name]);
  }, function (B) {
    return 1 === B ? new e.Just(C.value) : 2 === B ? new e.Just(A.value) : 3 === B ? new e.Just(q.value) : 4 === B ? new e.Just(v.value) : 5 === B ? new e.Just(E.value) : 6 === B ? new e.Just(y.value) : 7 === B ? new e.Just(F.value) : 8 === B ? new e.Just(D.value) : 9 === B ? new e.Just(I.value) : 10 === B ? new e.Just(u.value) : 11 === B ? new e.Just(M.value) : 12 === B ? new e.Just(G.value) : e.Nothing.value;
  }),
      ha = new g.Enum(function () {
    return O;
  }, function () {
    var B = g.toEnum(Y),
        Q = g.fromEnum(Y);
    return function (N) {
      return B(Q(N) - 1 | 0);
    };
  }(), function () {
    var B = g.toEnum(Y),
        Q = g.fromEnum(Y);
    return function (N) {
      return B(Q(N) + 1 | 0);
    };
  }()),
      L = new k.Bounded(function () {
    return P;
  }, 1, 31),
      H = new g.BoundedEnum(function () {
    return L;
  }, function () {
    return U;
  }, 31, function (B) {
    return B;
  }, function (B) {
    if (1 <= B && 31 >= B) return new e.Just(B);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [B.constructor.name]);
  }),
      U = new g.Enum(function () {
    return P;
  }, function () {
    var B = g.toEnum(H),
        Q = g.fromEnum(H);
    return function (N) {
      return B(Q(N) - 1 | 0);
    };
  }(), function () {
    var B = g.toEnum(H),
        Q = g.fromEnum(H);
    return function (N) {
      return B(Q(N) + 1 | 0);
    };
  }());
  d.January = C;
  d.February = A;
  d.March = q;
  d.April = v;
  d.May = E;
  d.June = y;
  d.July = F;
  d.August = D;
  d.September = I;
  d.October = u;
  d.November = M;
  d.December = G;
  d.boundedYear = da;
  d.boundedEnumYear = aa;
  d.boundedMonth = V;
  d.boundedEnumMonth = Y;
  d.showMonth = h;
  d.boundedDay = L;
  d.boundedEnumDay = H;
  d.boundedEnumWeekday = Z;
  d.showWeekday = a;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var d = a["Data.Date"],
      f = a["Data.Date"],
      k = a["Data.Date.Component"],
      g = a["Data.Enum"],
      b = a["Data.Maybe"],
      e = function () {
    function c(m, h, n) {
      this.value0 = m;
      this.value1 = h;
      this.value2 = n;
    }

    c.create = function (m) {
      return function (h) {
        return function (n) {
          return new c(m, h, n);
        };
      };
    };

    return c;
  }();

  d.canonicalDate = function (c) {
    return function (m) {
      return function (h) {
        return f.canonicalDateImpl(function (n) {
          return function (w) {
            return function (r) {
              return new e(n, b.fromJust()(g.toEnum(k.boundedEnumMonth)(w)), r);
            };
          };
        }, c, g.fromEnum(k.boundedEnumMonth)(m), h);
      };
    };
  };

  d.year = function (c) {
    return c.value0;
  };

  d.month = function (c) {
    return c.value1;
  };

  d.day = function (c) {
    return c.value2;
  };

  d.weekday = function (c) {
    c = f.calcWeekday(c.value0, g.fromEnum(k.boundedEnumMonth)(c.value1), c.value2);
    return 0 === c ? b.fromJust()(g.toEnum(k.boundedEnumWeekday)(7)) : b.fromJust()(g.toEnum(k.boundedEnumWeekday)(c));
  };
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  a = a["Data.DateTime"];

  var d = function () {
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

  a.DateTime = d;
})(PS);

(function (a) {
  a.fromDateTimeImpl = function (d, f, k, g, b, e, c) {
    f = new Date(Date.UTC(d, f - 1, k, g, b, e, c));
    0 <= d && 100 > d && f.setUTCFullYear(d);
    return f.getTime();
  };

  a.toDateTimeImpl = function (d) {
    return function (f) {
      f = new Date(f);
      return d(f.getUTCFullYear())(f.getUTCMonth() + 1)(f.getUTCDate())(f.getUTCHours())(f.getUTCMinutes())(f.getUTCSeconds())(f.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  a = a["Data.Time"];

  var d = function () {
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

  a.Time = d;

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
  var d = a["Data.DateTime.Instant"],
      f = a["Data.DateTime.Instant"],
      k = a["Data.Date"],
      g = a["Data.Date.Component"],
      b = a["Data.DateTime"],
      e = a["Data.Enum"],
      c = a["Data.Maybe"],
      m = a["Data.Time"];

  a = function () {
    return f.toDateTimeImpl(function (h) {
      return function (n) {
        return function (w) {
          return function (r) {
            return function (p) {
              return function (z) {
                return function (x) {
                  return new b.DateTime(k.canonicalDate(h)(c.fromJust()(e.toEnum(g.boundedEnumMonth)(n)))(w), new m.Time(r, p, z, x));
                };
              };
            };
          };
        };
      };
    });
  }();

  d.unInstant = function (h) {
    return h;
  };

  d.fromDateTime = function (h) {
    return f.fromDateTimeImpl(k.year(h.value0), e.fromEnum(g.boundedEnumMonth)(k.month(h.value0)), k.day(h.value0), m.hour(h.value1), m.minute(h.value1), m.second(h.value1), m.millisecond(h.value1));
  };

  d.toDateTime = a;
})(PS);

(function (a) {
  a.intDegree = function (d) {
    return Math.min(Math.abs(d), 2147483647);
  };

  a.intDiv = function (d) {
    return function (f) {
      return 0 === f ? 0 : 0 < f ? Math.floor(d / f) : -Math.floor(d / -f);
    };
  };

  a.intMod = function (d) {
    return function (f) {
      if (0 === f) return 0;
      f = Math.abs(f);
      return (d % f + f) % f;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var d = a["Data.EuclideanRing"],
      f = a["Data.EuclideanRing"],
      k = a["Data.CommutativeRing"];
  a = new function (g, b, e, c) {
    this.CommutativeRing0 = g;
    this.degree = b;
    this.div = e;
    this.mod = c;
  }(function () {
    return k.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  d.div = function (g) {
    return g.div;
  };

  d.mod = function (g) {
    return g.mod;
  };

  d.euclideanRingInt = a;
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var d = a["Data.Identity"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      c = function c(r) {
    return r;
  };

  a = new a["Data.Newtype"].Newtype(function (r) {
    return r;
  }, c);
  var m = new e.Functor(function (r) {
    return function (p) {
      return r(p);
    };
  }),
      h = new k.Apply(function () {
    return m;
  }, function (r) {
    return function (p) {
      return r(p);
    };
  }),
      n = new g.Bind(function () {
    return h;
  }, function (r) {
    return function (p) {
      return p(r);
    };
  }),
      w = new f.Applicative(function () {
    return h;
  }, c);
  f = new b.Monad(function () {
    return w;
  }, function () {
    return n;
  });
  d.newtypeIdentity = a;
  d.functorIdentity = m;
  d.monadIdentity = f;
})(PS);

(function (a) {
  a.split = function (d) {
    return function (f) {
      return f.split(d);
    };
  };

  a.toUpper = function (d) {
    return d.toUpperCase();
  };

  a.trim = function (d) {
    return d.trim();
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var d = a["Data.String.Common"];
  a = a["Data.String.Common"];

  d["null"] = function (f) {
    return "" === f;
  };

  d.split = a.split;
  d.toUpper = a.toUpper;
  d.trim = a.trim;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  var d = a["Data.String.Pattern"],
      f = function f(k) {
    return k;
  };

  a = new a["Data.Newtype"].Newtype(function (k) {
    return k;
  }, f);
  d.Pattern = f;
  d.newtypePattern = a;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Pos"] = a["Text.Parsing.Parser.Pos"] || {};
  var d = a["Text.Parsing.Parser.Pos"],
      f = a["Data.EuclideanRing"],
      k = a["Data.Foldable"],
      g = a["Data.Newtype"],
      b = a["Data.String.Common"],
      e = a["Data.String.Pattern"];
  d.initialPos = {
    line: 1,
    column: 1
  };

  d.updatePosString = function (c) {
    return function (m) {
      return k.foldl(k.foldableArray)(function (h) {
        return function (n) {
          return "\n" === n || "\r" === n ? {
            line: h.line + 1 | 0,
            column: 1
          } : "\t" === n ? {
            line: h.line,
            column: (h.column + 8 | 0) - f.mod(f.euclideanRingInt)(h.column - 1 | 0)(8) | 0
          } : {
            line: h.line,
            column: h.column + 1 | 0
          };
        };
      })(c)(b.split(g.wrap(e.newtypePattern)(""))(m));
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser"] = a["Text.Parsing.Parser"] || {};

  var d = a["Text.Parsing.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Error.Class"],
      m = a["Control.Monad.Except.Trans"],
      h = a["Control.Monad.State.Class"],
      n = a["Control.Monad.State.Trans"],
      w = a["Control.Plus"],
      r = a["Data.Either"],
      p = a["Data.Identity"],
      z = a["Data.Newtype"],
      x = a["Data.Tuple"],
      t = a["Text.Parsing.Parser.Pos"],
      C = function () {
    function J(W, K, O) {
      this.value0 = W;
      this.value1 = K;
      this.value2 = O;
    }

    J.create = function (W) {
      return function (K) {
        return function (O) {
          return new J(W, K, O);
        };
      };
    };

    return J;
  }(),
      A = function () {
    function J(W, K) {
      this.value0 = W;
      this.value1 = K;
    }

    J.create = function (W) {
      return function (K) {
        return new J(W, K);
      };
    };

    return J;
  }();

  a = function a(J) {
    return J;
  };

  var q = new z.Newtype(function (J) {
    return J;
  }, a),
      v = function v(J) {
    return function (W) {
      return function (K) {
        var O = new C(W, t.initialPos, !1);
        return n.evalStateT(J.Bind1().Apply0().Functor0())(m.runExceptT(z.unwrap(q)(K)))(O);
      };
    };
  },
      E = function E(J) {
    return m.monadStateExceptT(n.monadStateStateT(J));
  },
      y = function y(J) {
    return h.gets(E(J))(function (W) {
      return W.value1;
    });
  },
      F = new e.Lazy(function (J) {
    return e.defer(n.lazyStateT)(function () {
      var W = z.unwrap(q);
      return function (K) {
        return m.runExceptT(W(J(K)));
      };
    }());
  }),
      D = function D(J) {
    return m.functorExceptT(n.functorStateT(J));
  },
      I = function I(J) {
    return function (W) {
      return function (K) {
        return c.throwError(m.monadThrowExceptT(n.monadStateT(J)))(new A(W, K));
      };
    };
  },
      u = function u(J) {
    return m.bindExceptT(n.monadStateT(J));
  },
      M = function M(J) {
    return function (W) {
      return b.bindFlipped(u(J))(I(J)(W))(y(J));
    };
  },
      G = function G(J) {
    return m.applicativeExceptT(n.monadStateT(J));
  },
      S = function S(J) {
    return new f.Alt(function () {
      return D(J.Bind1().Apply0().Functor0());
    }, function (W) {
      return function (K) {
        return m.ExceptT(n.StateT(function (O) {
          return b.bind(J.Bind1())(n.runStateT(m.runExceptT(z.unwrap(q)(W)))(new C(O.value0, O.value1, !1)))(function (da) {
            return da.value0 instanceof r.Left && !da.value1.value2 ? n.runStateT(m.runExceptT(z.unwrap(q)(K)))(O) : g.pure(J.Applicative0())(new x.Tuple(da.value0, da.value1));
          });
        }));
      };
    });
  },
      P = function P(J) {
    return new w.Plus(function () {
      return S(J);
    }, M(J)("No alternative"));
  };

  d.ParseError = A;

  d.parseErrorMessage = function (J) {
    return J.value0;
  };

  d.parseErrorPosition = function (J) {
    return J.value1;
  };

  d.ParseState = C;
  d.ParserT = a;

  d.runParser = function (J) {
    var W = z.unwrap(p.newtypeIdentity),
        K = v(p.monadIdentity)(J);
    return function (O) {
      return W(K(O));
    };
  };

  d.fail = M;
  d.newtypeParserT = q;
  d.lazyParserT = F;
  d.functorParserT = D;

  d.applyParserT = function (J) {
    return m.applyExceptT(n.monadStateT(J));
  };

  d.applicativeParserT = G;
  d.bindParserT = u;
  d.monadStateParserT = E;
  d.altParserT = S;
  d.plusParserT = P;

  d.alternativeParserT = function (J) {
    return new k.Alternative(function () {
      return G(J);
    }, function () {
      return P(J);
    });
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Combinators"] = a["Text.Parsing.Parser.Combinators"] || {};
  var d = a["Text.Parsing.Parser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Control.Monad.State.Trans"],
      c = a["Control.Plus"],
      m = a["Data.Either"],
      h = a["Data.Foldable"],
      n = a["Data.Newtype"],
      w = a["Data.Tuple"],
      r = a["Text.Parsing.Parser"];

  d.withErrorMessage = function (p) {
    return function (z) {
      return function (x) {
        return f.alt(r.altParserT(p))(z)(r.fail(p)("Expected " + x));
      };
    };
  };

  d["try"] = function (p) {
    return function (z) {
      return r.ParserT(b.ExceptT(e.StateT(function (x) {
        return g.bind(p.Bind1())(e.runStateT(b.runExceptT(n.unwrap(r.newtypeParserT)(z)))(x))(function (t) {
          return t.value0 instanceof m.Left ? k.pure(p.Applicative0())(new w.Tuple(t.value0, new r.ParseState(t.value1.value0, t.value1.value1, x.value2))) : k.pure(p.Applicative0())(new w.Tuple(t.value0, t.value1));
        });
      })));
    };
  };

  d.tryRethrow = function (p) {
    return function (z) {
      return r.ParserT(b.ExceptT(e.StateT(function (x) {
        return g.bind(p.Bind1())(e.runStateT(b.runExceptT(n.unwrap(r.newtypeParserT)(z)))(x))(function (t) {
          return t.value0 instanceof m.Left ? k.pure(p.Applicative0())(new w.Tuple(new m.Left(new r.ParseError(t.value0.value0.value0, x.value1)), new r.ParseState(t.value1.value0, t.value1.value1, x.value2))) : k.pure(p.Applicative0())(new w.Tuple(t.value0, t.value1));
        });
      })));
    };
  };

  d.choice = function (p) {
    return function (z) {
      return h.foldl(p)(f.alt(r.altParserT(z)))(c.empty(r.plusParserT(z)));
    };
  };
})(PS);

(function (a) {
  var d = "function" === typeof Array.from,
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
      return function (c) {
        return function (m) {
          return function (h) {
            return function (n) {
              var w = n.length;
              if (0 > h || h >= w) return c;
              if (f) for (n = n[Symbol.iterator](), w = h;; --w) {
                var r = n.next();
                if (r.done) return c;
                if (0 === w) return e(m(r.value));
              }
              return b(h)(n);
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
      return f ? function (c) {
        var m = "";
        c = c[Symbol.iterator]();

        for (var h = 0; h < e; ++h) {
          var n = c.next();
          if (n.done) break;
          m += n.value;
        }

        return m;
      } : b(e);
    };
  };

  a._toCodePointArray = function (b) {
    return function (e) {
      return d ? function (c) {
        return Array.from(c, e);
      } : b;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.fromNumberImpl = function (d) {
    return function (f) {
      return function (k) {
        return (k | 0) === k ? d(k) : f;
      };
    };
  };

  a.toNumber = function (d) {
    return d;
  };

  a.toStringAs = function (d) {
    return function (f) {
      return f.toString(d);
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});

(function (a) {
  a.infinity = Infinity;

  a._encodeURIComponent = function (d) {
    return function (f, k, g) {
      try {
        return k(d(g));
      } catch (b) {
        return f(b.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var d = a.Global,
      f = a.Global,
      k = a["Data.Function"],
      g = a["Data.Maybe"];

  d.encodeURIComponent = function (b) {
    return f._encodeURIComponent(k["const"](g.Nothing.value), g.Just.create, b);
  };

  d.infinity = f.infinity;
})(PS);

(function (a) {
  a.floor = Math.floor;
})(PS.Math = PS.Math || {});

(function (a) {
  a.Math = a.Math || {};
  a.Math.floor = a.Math.floor;
})(PS);

(function (a) {
  a["Data.Int"] = a["Data.Int"] || {};

  var d = a["Data.Int"],
      f = a["Data.Int"],
      k = a["Data.Boolean"],
      g = a["Data.Bounded"],
      b = a["Data.Maybe"],
      e = a.Global,
      c = a.Math,
      m = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      h = function h(n) {
    if (n === e.infinity || n === -e.infinity) return 0;
    if (n >= f.toNumber(g.top(g.boundedInt))) return g.top(g.boundedInt);
    if (n <= f.toNumber(g.bottom(g.boundedInt))) return g.bottom(g.boundedInt);
    if (k.otherwise) return b.fromMaybe(0)(m(n));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [n.constructor.name]);
  };

  d.floor = function (n) {
    return h(c.floor(n));
  };

  d.hexadecimal = 16;
  d.toStringAs = f.toStringAs;
})(PS);

(function (a) {
  a.fromCharArray = function (d) {
    return d.join("");
  };

  a.toCharArray = function (d) {
    return d.split("");
  };

  a.singleton = function (d) {
    return d;
  };

  a._charAt = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          return 0 <= k && k < g.length ? d(g.charAt(k)) : f;
        };
      };
    };
  };

  a.length = function (d) {
    return d.length;
  };

  a._indexOf = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          g = g.indexOf(k);
          return -1 === g ? f : d(g);
        };
      };
    };
  };

  a.take = function (d) {
    return function (f) {
      return f.substr(0, d);
    };
  };

  a.drop = function (d) {
    return function (f) {
      return f.substring(d);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a.charAt = function (d) {
    return function (f) {
      if (0 <= d && d < f.length) return f.charAt(d);
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

  var d = a["Data.String.CodeUnits"],
      f = a["Data.String.CodeUnits"],
      k = a["Data.Maybe"],
      g = a["Data.String.Unsafe"],
      b = f._indexOf(k.Just.create)(k.Nothing.value);

  f._charAt(k.Just.create)(k.Nothing.value);

  d.contains = function (e) {
    var c = b(e);
    return function (m) {
      return k.isJust(c(m));
    };
  };

  d.uncons = function (e) {
    return "" === e ? k.Nothing.value : new k.Just({
      head: g.charAt(0)(e),
      tail: f.drop(1)(e)
    });
  };

  d.indexOf = b;
  d.singleton = f.singleton;
  d.fromCharArray = f.fromCharArray;
  d.toCharArray = f.toCharArray;
  d.length = f.length;
  d.take = f.take;
  d.drop = f.drop;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                if (d(e)) return c;
                e = f(e);
                c.push(k(e));
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
  var d = a["Data.Unfoldable"],
      f = a["Data.Function"],
      k = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = a["Data.Unfoldable1"];
  a = new function (c, m) {
    this.Unfoldable10 = c;
    this.unfoldr = m;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(g.isNothing)(g.fromJust())(b.fst)(b.snd));

  d.unfoldr = function (c) {
    return c.unfoldr;
  };

  d.fromMaybe = function (c) {
    return (0, c.unfoldr)(function (m) {
      return k.map(g.functorMaybe)(f.flip(b.Tuple.create)(g.Nothing.value))(m);
    });
  };

  d.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var d = a["Data.String.CodePoints"],
      f = a["Data.String.CodePoints"],
      k = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Bounded"],
      e = a["Data.Enum"],
      c = a["Data.Eq"],
      m = a["Data.EuclideanRing"],
      h = a["Data.Functor"],
      n = a["Data.Int"],
      w = a["Data.Maybe"],
      r = a["Data.Ord"],
      p = a["Data.String.CodeUnits"],
      z = a["Data.String.Common"],
      x = a["Data.String.Unsafe"],
      t = a["Data.Tuple"],
      C = a["Data.Unfoldable"],
      A = function A(K) {
    return function (O) {
      return ((1024 * (K - 55296 | 0) | 0) + (O - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (K) {
    return "(CodePoint 0x" + (z.toUpper(n.toStringAs(n.hexadecimal)(K)) + ")");
  });

  var q = function q(K) {
    var O = p.length(K);
    if (0 === O) return w.Nothing.value;
    if (1 === O) return new w.Just({
      head: e.fromEnum(e.boundedEnumChar)(x.charAt(0)(K)),
      tail: ""
    });
    O = e.fromEnum(e.boundedEnumChar)(x.charAt(1)(K));
    var da = e.fromEnum(e.boundedEnumChar)(x.charAt(0)(K));
    return 55296 <= da && 56319 >= da && 56320 <= O && 57343 >= O ? new w.Just({
      head: A(da)(O),
      tail: p.drop(2)(K)
    }) : new w.Just({
      head: da,
      tail: p.drop(1)(K)
    });
  },
      v = function v(K) {
    return h.map(w.functorMaybe)(function (O) {
      return new t.Tuple(O.head, O.tail);
    })(q(K));
  },
      E = f._unsafeCodePointAt0(function (K) {
    var O = e.fromEnum(e.boundedEnumChar)(x.charAt(0)(K));
    return 55296 <= O && 56319 >= O && 1 < p.length(K) && (K = e.fromEnum(e.boundedEnumChar)(x.charAt(1)(K)), 56320 <= K && 57343 >= K) ? A(O)(K) : O;
  }),
      y = f._toCodePointArray(function (K) {
    return C.unfoldr(C.unfoldableArray)(v)(K);
  })(E),
      F = function F(K) {
    return k.length(y(K));
  },
      D = function () {
    var K = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (O) {
      return p.singleton(K(O));
    };
  }(),
      I = f._singleton(function (K) {
    if (65535 >= K) return D(K);
    var O = m.div(m.euclideanRingInt)(K - 65536 | 0)(1024) + 55296 | 0;
    K = m.mod(m.euclideanRingInt)(K - 65536 | 0)(1024) + 56320 | 0;
    return D(O) + D(K);
  }),
      u = function u(K) {
    return function (O) {
      if (1 > K) return "";
      var da = q(O);
      return da instanceof w.Just ? I(da.value0.head) + u(K - 1 | 0)(da.value0.tail) : O;
    };
  },
      M = f._take(u),
      G = new c.Eq(function (K) {
    return function (O) {
      return K === O;
    };
  }),
      S = new r.Ord(function () {
    return G;
  }, function (K) {
    return function (O) {
      return r.compare(r.ordInt)(K)(O);
    };
  }),
      P = function P(K) {
    return function (O) {
      for (var da = K, R = !1, V; !R;) {
        V = da;
        var aa = q(O);
        aa instanceof w.Just ? 0 === V ? (R = !0, V = new w.Just(aa.value0.head)) : (da = V - 1 | 0, O = aa.value0.tail, V = void 0) : (R = !0, V = w.Nothing.value);
      }

      return V;
    };
  },
      J = new b.Bounded(function () {
    return S;
  }, 0, 1114111);

  c = new e.BoundedEnum(function () {
    return J;
  }, function () {
    return W;
  }, 1114112, function (K) {
    return K;
  }, function (K) {
    if (0 <= K && 1114111 >= K) return new w.Just(K);
    if (g.otherwise) return w.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [K.constructor.name]);
  });
  var W = new e.Enum(function () {
    return S;
  }, e.defaultPred(e.toEnum(c))(e.fromEnum(c)), e.defaultSucc(e.toEnum(c))(e.fromEnum(c)));
  d.singleton = I;
  d.toCodePointArray = y;

  d.codePointAt = function (K) {
    return function (O) {
      return 0 > K || 0 === K && "" === O ? w.Nothing.value : 0 === K ? new w.Just(E(O)) : f._codePointAt(P)(w.Just.create)(w.Nothing.value)(E)(K)(O);
    };
  };

  d.length = F;

  d.indexOf = function (K) {
    return function (O) {
      return h.map(w.functorMaybe)(function (da) {
        return F(p.take(da)(O));
      })(p.indexOf(K)(O));
    };
  };

  d.take = M;

  d.drop = function (K) {
    return function (O) {
      return p.drop(p.length(M(K)(O)))(O);
    };
  };

  d.showCodePoint = a;
  d.boundedEnumCodePoint = c;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.String"] = a["Text.Parsing.Parser.String"] || {};
  var d = a["Text.Parsing.Parser.String"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Control.Monad.State.Class"],
      b = a["Data.Eq"],
      e = a["Data.Foldable"],
      c = a["Data.Function"],
      m = a["Data.Maybe"],
      h = a["Data.Newtype"],
      n = a["Data.Show"],
      w = a["Data.String.CodePoints"],
      r = a["Data.String.CodeUnits"],
      p = a["Data.String.Pattern"],
      z = a["Text.Parsing.Parser"],
      x = a["Text.Parsing.Parser.Combinators"],
      t = a["Text.Parsing.Parser.Pos"];
  a = new function (q, v, E, y) {
    this.drop = q;
    this.indexOf = v;
    this["null"] = E;
    this.uncons = y;
  }(w.drop, w.indexOf, a["Data.String.Common"]["null"], r.uncons);

  var C = function C(q) {
    return function (v) {
      return k.bind(z.bindParserT(v))(g.gets(z.monadStateParserT(v))(function (E) {
        return E.value0;
      }))(function (E) {
        var y = (0, q.uncons)(E);
        if (y instanceof m.Nothing) return z.fail(v)("Unexpected EOF");
        if (y instanceof m.Just) return k.discard(k.discardUnit)(z.bindParserT(v))(g.modify_(z.monadStateParserT(v))(function (F) {
          return new z.ParseState(y.value0.tail, t.updatePosString(F.value1)(r.singleton(y.value0.head)), !0);
        }))(function () {
          return f.pure(z.applicativeParserT(v))(y.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [y.constructor.name]);
      });
    };
  },
      A = function A(q) {
    return function (v) {
      return function (E) {
        return x.tryRethrow(v)(k.bind(z.bindParserT(v))(C(q)(v))(function (y) {
          return E(y) ? f.pure(z.applicativeParserT(v))(y) : z.fail(v)("Character '" + (r.singleton(y) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  d.eof = function (q) {
    return function (v) {
      return k.bind(z.bindParserT(v))(g.gets(z.monadStateParserT(v))(function (E) {
        return E.value0;
      }))(function (E) {
        return f.unless(z.applicativeParserT(v))((0, q["null"])(E))(z.fail(v)("Expected EOF"));
      });
    };
  };

  d.string = function (q) {
    return function (v) {
      return function (E) {
        return k.bind(z.bindParserT(v))(g.gets(z.monadStateParserT(v))(function (y) {
          return y.value0;
        }))(function (y) {
          var F = (0, q.indexOf)(h.wrap(p.newtypePattern)(E))(y);
          return F instanceof m.Just && 0 === F.value0 ? k.discard(k.discardUnit)(z.bindParserT(v))(g.modify_(z.monadStateParserT(v))(function (D) {
            return new z.ParseState((0, q.drop)(w.length(E))(y), t.updatePosString(D.value1)(E), !0);
          }))(function () {
            return f.pure(z.applicativeParserT(v))(E);
          }) : z.fail(v)("Expected " + n.show(n.showString)(E));
        });
      };
    };
  };

  d.noneOf = function (q) {
    return function (v) {
      return function (E) {
        return x.withErrorMessage(v)(A(q)(v)(c.flip(e.notElem(e.foldableArray)(b.eqChar))(E)))("none of " + n.show(n.showArray(n.showChar))(E));
      };
    };
  };

  d.stringLikeString = a;
})(PS);

(function (a) {
  a["Data.Formatter.Parser.Utils"] = a["Data.Formatter.Parser.Utils"] || {};

  var d = a["Data.Formatter.Parser.Utils"],
      f = a["Control.Apply"],
      k = a["Data.Bifunctor"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Identity"],
      c = a["Data.Show"],
      m = a["Text.Parsing.Parser"],
      h = a["Text.Parsing.Parser.Combinators"],
      n = a["Text.Parsing.Parser.String"],
      w = function w(r) {
    var p = m.parseErrorMessage(r);
    r = m.parseErrorPosition(r);
    r = "(line " + (c.show(c.showInt)(r.line) + (", col " + (c.show(c.showInt)(r.column) + ")")));
    return p + (" " + r);
  };

  d.oneOfAs = function (r) {
    return function (p) {
      return function (z) {
        return function (x) {
          return function (t) {
            return h.choice(p)(z)(b.map(r)(function (C) {
              return b.voidLeft(m.functorParserT(z.Bind1().Apply0().Functor0()))(x(C.value0))(C.value1);
            })(t));
          };
        };
      };
    };
  };

  d.runP = function (r) {
    return function (p) {
      return function (z) {
        return k.lmap(g.bifunctorEither)(w)(m.runParser(z)(f.applyFirst(m.applyParserT(e.monadIdentity))(p)(n.eof(r)(e.monadIdentity))));
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var d = a["Data.Time.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Maybe"];
  a = a["Data.Ord"];
  var e = a.ordInt,
      c = a.ordInt,
      m = a.ordInt,
      h = a.ordInt,
      n = new k.Bounded(function () {
    return e;
  }, 0, 59),
      w = new k.Bounded(function () {
    return c;
  }, 0, 59),
      r = new k.Bounded(function () {
    return m;
  }, 0, 999),
      p = new k.Bounded(function () {
    return h;
  }, 0, 23),
      z = new g.BoundedEnum(function () {
    return n;
  }, function () {
    return x;
  }, 60, function (y) {
    return y;
  }, function (y) {
    if (0 <= y && 59 >= y) return new b.Just(y);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [y.constructor.name]);
  }),
      x = new g.Enum(function () {
    return e;
  }, function () {
    var y = g.toEnum(z),
        F = g.fromEnum(z);
    return function (D) {
      return y(F(D) - 1 | 0);
    };
  }(), function () {
    var y = g.toEnum(z),
        F = g.fromEnum(z);
    return function (D) {
      return y(F(D) + 1 | 0);
    };
  }()),
      t = new g.BoundedEnum(function () {
    return w;
  }, function () {
    return C;
  }, 60, function (y) {
    return y;
  }, function (y) {
    if (0 <= y && 59 >= y) return new b.Just(y);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [y.constructor.name]);
  }),
      C = new g.Enum(function () {
    return c;
  }, function () {
    var y = g.toEnum(t),
        F = g.fromEnum(t);
    return function (D) {
      return y(F(D) - 1 | 0);
    };
  }(), function () {
    var y = g.toEnum(t),
        F = g.fromEnum(t);
    return function (D) {
      return y(F(D) + 1 | 0);
    };
  }()),
      A = new g.BoundedEnum(function () {
    return r;
  }, function () {
    return q;
  }, 1E3, function (y) {
    return y;
  }, function (y) {
    if (0 <= y && 999 >= y) return new b.Just(y);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [y.constructor.name]);
  }),
      q = new g.Enum(function () {
    return m;
  }, function () {
    var y = g.toEnum(A),
        F = g.fromEnum(A);
    return function (D) {
      return y(F(D) - 1 | 0);
    };
  }(), function () {
    var y = g.toEnum(A),
        F = g.fromEnum(A);
    return function (D) {
      return y(F(D) + 1 | 0);
    };
  }()),
      v = new g.BoundedEnum(function () {
    return p;
  }, function () {
    return E;
  }, 24, function (y) {
    return y;
  }, function (y) {
    if (0 <= y && 23 >= y) return new b.Just(y);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [y.constructor.name]);
  }),
      E = new g.Enum(function () {
    return h;
  }, function () {
    var y = g.toEnum(v),
        F = g.fromEnum(v);
    return function (D) {
      return y(F(D) - 1 | 0);
    };
  }(), function () {
    var y = g.toEnum(v),
        F = g.fromEnum(v);
    return function (D) {
      return y(F(D) + 1 | 0);
    };
  }());
  d.boundedHour = p;
  d.boundedEnumHour = v;
  d.boundedMinute = w;
  d.boundedEnumMinute = t;
  d.boundedSecond = n;
  d.boundedEnumSecond = z;
  d.boundedMillisecond = r;
  d.boundedEnumMillisecond = A;
})(PS);

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};
  var d = a["Data.Time.Duration"];
  a = new a["Data.Newtype"].Newtype(function (f) {
    return f;
  }, function (f) {
    return f;
  });
  d.newtypeMilliseconds = a;
})(PS);

(function (a) {
  a["Data.Formatter.DateTime"] = a["Data.Formatter.DateTime"] || {};

  var d = a["Data.Formatter.DateTime"],
      f = a["Control.Alt"],
      k = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Date"],
      e = a["Data.Date.Component"],
      c = a["Data.DateTime.Instant"],
      m = a["Data.Either"],
      h = a["Data.Enum"],
      n = a["Data.EuclideanRing"],
      w = a["Data.Foldable"],
      r = a["Data.Formatter.Parser.Utils"],
      p = a["Data.Functor"],
      z = a["Data.Identity"],
      x = a["Data.Int"],
      t = a["Data.List"],
      C = a["Data.List.Types"],
      A = a["Data.Monoid"],
      q = a["Data.Newtype"],
      v = a["Data.Ord"],
      E = a["Data.Ring"],
      y = a["Data.Show"],
      F = a["Data.String.CodePoints"],
      D = a["Data.String.CodeUnits"],
      I = a["Data.Time"],
      u = a["Data.Time.Component"],
      M = a["Data.Time.Duration"],
      G = a["Data.Tuple"],
      S = a["Text.Parsing.Parser"],
      P = a["Text.Parsing.Parser.Combinators"],
      J = a["Text.Parsing.Parser.String"],
      W = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      K = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      O = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      da = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      R = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      V = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      aa = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ba = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Z = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ea = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Y = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ha = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      L = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      H = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      U = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      B = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Q = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      N = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ca = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      qa = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ta = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      ja = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      la = function () {
    function T(na) {
      this.value0 = na;
    }

    T.create = function (na) {
      return new T(na);
    };

    return T;
  }(),
      oa = function oa(T) {
    if (T instanceof e.January) return "Jan";
    if (T instanceof e.February) return "Feb";
    if (T instanceof e.March) return "Mar";
    if (T instanceof e.April) return "Apr";
    if (T instanceof e.May) return "May";
    if (T instanceof e.June) return "Jun";
    if (T instanceof e.July) return "Jul";
    if (T instanceof e.August) return "Aug";
    if (T instanceof e.September) return "Sep";
    if (T instanceof e.October) return "Oct";
    if (T instanceof e.November) return "Nov";
    if (T instanceof e.December) return "Dec";
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 482, column 19 - line 494, column 21): " + [T.constructor.name]);
  };

  a = p.mapFlipped(S.functorParserT(z.functorIdentity))(k.some(S.alternativeParserT(z.monadIdentity))(S.lazyParserT)(J.noneOf(J.stringLikeString)(z.monadIdentity)(D.toCharArray("YMDEHhamsS"))))(D.fromCharArray);

  var pa = function pa(T) {
    if (0 > T) return "-" + pa(-T | 0);
    if (10 > T) return "0" + y.show(y.showInt)(T);
    if (g.otherwise) return y.show(y.showInt)(T);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [T.constructor.name]);
  },
      ua = function ua(T) {
    if (0 > T) return "-" + ua(-T | 0);
    if (10 > T) return "000" + y.show(y.showInt)(T);
    if (100 > T) return "00" + y.show(y.showInt)(T);
    if (1E3 > T) return "0" + y.show(y.showInt)(T);
    if (g.otherwise) return y.show(y.showInt)(T);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [T.constructor.name]);
  },
      Ha = function Ha(T) {
    if (0 > T) return "-" + Ha(-T | 0);
    if (10 > T) return "00" + y.show(y.showInt)(T);
    if (100 > T) return "0" + y.show(y.showInt)(T);
    if (g.otherwise) return y.show(y.showInt)(T);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [T.constructor.name]);
  };

  f = f.alt(S.altParserT(z.monadIdentity))(r.oneOfAs(p.functorArray)(w.foldableArray)(z.monadIdentity)(function () {
    var T = P["try"](z.monadIdentity),
        na = J.string(J.stringLikeString)(z.monadIdentity);
    return function (Ea) {
      return T(na(Ea));
    };
  }())([new G.Tuple("YYYY", W.value), new G.Tuple("YY", K.value), new G.Tuple("Y", O.value), new G.Tuple("MMMM", da.value), new G.Tuple("MMM", R.value), new G.Tuple("MM", V.value), new G.Tuple("DD", aa.value), new G.Tuple("D", ba.value), new G.Tuple("E", ea.value), new G.Tuple("X", Z.value), new G.Tuple("dddd", Y.value), new G.Tuple("ddd", ha.value), new G.Tuple("HH", L.value), new G.Tuple("hh", H.value), new G.Tuple("a", U.value), new G.Tuple("mm", Q.value), new G.Tuple("m", B.value), new G.Tuple("ss", ca.value), new G.Tuple("s", N.value), new G.Tuple("SSS", qa.value), new G.Tuple("SS", ja.value), new G.Tuple("S", ta.value)]))(p.map(S.functorParserT(z.functorIdentity))(la.create)(a));

  var Na = function Na(T) {
    T = y.show(y.showInt)(v.abs(v.ordInt)(E.ringInt)(T));
    var na = F.length(T);
    return 1 === na ? "0" + T : 2 === na ? T : F.drop(na - 2 | 0)(T);
  };

  t = t.some(S.alternativeParserT(z.monadIdentity))(S.lazyParserT)(f);

  var Pa = r.runP(J.stringLikeString)(t),
      Ta = function Ta(T) {
    return 0 === T ? 12 : T;
  },
      Ja = function Ja(T) {
    return function (na) {
      if (na instanceof W) return ua(h.fromEnum(e.boundedEnumYear)(b.year(T.value0)));
      if (na instanceof K) return Na(h.fromEnum(e.boundedEnumYear)(b.year(T.value0)));
      if (na instanceof O) return y.show(y.showInt)(h.fromEnum(e.boundedEnumYear)(b.year(T.value0)));
      if (na instanceof da) return y.show(e.showMonth)(b.month(T.value0));
      if (na instanceof R) return oa(b.month(T.value0));
      if (na instanceof V) return pa(h.fromEnum(e.boundedEnumMonth)(b.month(T.value0)));
      if (na instanceof aa) return pa(h.fromEnum(e.boundedEnumDay)(b.day(T.value0)));
      if (na instanceof ba) return y.show(y.showInt)(h.fromEnum(e.boundedEnumDay)(b.day(T.value0)));
      if (na instanceof Z) return y.show(y.showInt)(x.floor(q.unwrap(M.newtypeMilliseconds)(c.unInstant(c.fromDateTime(T))) / 1E3));
      if (na instanceof ea) return y.show(y.showInt)(h.fromEnum(e.boundedEnumWeekday)(b.weekday(T.value0)));
      if (na instanceof Y) return y.show(e.showWeekday)(b.weekday(T.value0));
      if (na instanceof ha) return F.take(3)(y.show(e.showWeekday)(b.weekday(T.value0)));
      if (na instanceof L) return pa(h.fromEnum(u.boundedEnumHour)(I.hour(T.value1)));
      if (na instanceof H) return pa(Ta(n.mod(n.euclideanRingInt)(h.fromEnum(u.boundedEnumHour)(I.hour(T.value1)))(12)));
      if (na instanceof U) return 12 <= h.fromEnum(u.boundedEnumHour)(I.hour(T.value1)) ? "PM" : "AM";
      if (na instanceof B) return y.show(y.showInt)(h.fromEnum(u.boundedEnumMinute)(I.minute(T.value1)));
      if (na instanceof Q) return pa(h.fromEnum(u.boundedEnumMinute)(I.minute(T.value1)));
      if (na instanceof N) return y.show(y.showInt)(h.fromEnum(u.boundedEnumSecond)(I.second(T.value1)));
      if (na instanceof ca) return pa(h.fromEnum(u.boundedEnumSecond)(I.second(T.value1)));
      if (na instanceof qa) return Ha(h.fromEnum(u.boundedEnumMillisecond)(I.millisecond(T.value1)));
      if (na instanceof ta) return y.show(y.showInt)(function (Ea) {
        return n.div(n.euclideanRingInt)(Ea)(100);
      }(h.fromEnum(u.boundedEnumMillisecond)(I.millisecond(T.value1))));
      if (na instanceof ja) return pa(function (Ea) {
        return n.div(n.euclideanRingInt)(Ea)(10);
      }(h.fromEnum(u.boundedEnumMillisecond)(I.millisecond(T.value1))));
      if (na instanceof la) return na.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [na.constructor.name]);
    };
  },
      Ua = function Ua(T) {
    return function (na) {
      return w.foldMap(C.foldableList)(A.monoidString)(Ja(na))(T);
    };
  };

  d.formatDateTime = function (T) {
    return function (na) {
      return p.mapFlipped(m.functorEither)(Pa(T))(function (Ea) {
        return Ua(Ea)(na);
      });
    };
  };
})(PS);

(function (a) {
  a.runFn2 = function (d) {
    return function (f) {
      return function (k) {
        return d(f, k);
      };
    };
  };

  a.runFn4 = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return d(f, k, g, b);
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
  a.Inl = d;
  a.Inr = f;

  a.Constructor = function (g) {
    return g;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var d = a["Data.Generic.Rep.Bounded"],
      f = a["Data.Generic.Rep"],
      k = function k(m) {
    this["genericTop'"] = m;
  },
      g = function g(m) {
    this["genericBottom'"] = m;
  };

  a = new k(f.NoArguments.value);

  var b = function b(m) {
    return m["genericTop'"];
  },
      e = new g(f.NoArguments.value),
      c = function c(m) {
    return m["genericBottom'"];
  };

  d["genericBottom'"] = c;

  d.genericBottom = function (m) {
    return function (h) {
      return f.to(m)(c(h));
    };
  };

  d["genericTop'"] = b;

  d.genericTop = function (m) {
    return function (h) {
      return f.to(m)(b(h));
    };
  };

  d.genericBottomNoArguments = e;

  d.genericBottomSum = function (m) {
    return new g(new f.Inl(c(m)));
  };

  d.genericBottomConstructor = function (m) {
    return new g(c(m));
  };

  d.genericTopNoArguments = a;

  d.genericTopSum = function (m) {
    return new k(new f.Inr(b(m)));
  };

  d.genericTopConstructor = function (m) {
    return new k(b(m));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var d = a["Data.Generic.Rep.Enum"],
      f = a["Data.Boolean"],
      k = a["Data.Enum"],
      g = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Maybe"],
      m = a["Data.Newtype"],
      h = function h(C, A) {
    this["genericPred'"] = C;
    this["genericSucc'"] = A;
  },
      n = function n(C, A, q) {
    this["genericCardinality'"] = C;
    this["genericFromEnum'"] = A;
    this["genericToEnum'"] = q;
  },
      w = function w(C) {
    return C["genericToEnum'"];
  },
      r = function r(C) {
    return C["genericSucc'"];
  },
      p = function p(C) {
    return C["genericPred'"];
  },
      z = function z(C) {
    return C["genericFromEnum'"];
  };

  a = new h(function (C) {
    return c.Nothing.value;
  }, function (C) {
    return c.Nothing.value;
  });

  var x = function x(C) {
    return C["genericCardinality'"];
  },
      t = new n(1, function (C) {
    return 0;
  }, function (C) {
    return 0 === C ? new c.Just(b.NoArguments.value) : c.Nothing.value;
  });

  d.genericPred = function (C) {
    return function (A) {
      var q = g.map(c.functorMaybe)(b.to(C)),
          v = p(A),
          E = b.from(C);
      return function (y) {
        return q(v(E(y)));
      };
    };
  };

  d.genericSucc = function (C) {
    return function (A) {
      var q = g.map(c.functorMaybe)(b.to(C)),
          v = r(A),
          E = b.from(C);
      return function (y) {
        return q(v(E(y)));
      };
    };
  };

  d.genericCardinality = function (C) {
    return function (A) {
      return m.unwrap(k.newtypeCardinality)(x(A));
    };
  };

  d.genericToEnum = function (C) {
    return function (A) {
      var q = g.map(c.functorMaybe)(b.to(C)),
          v = w(A);
      return function (E) {
        return q(v(E));
      };
    };
  };

  d.genericFromEnum = function (C) {
    return function (A) {
      var q = z(A),
          v = b.from(C);
      return function (E) {
        return q(v(E));
      };
    };
  };

  d.genericEnumNoArguments = a;

  d.genericEnumConstructor = function (C) {
    return new h(function (A) {
      return g.map(c.functorMaybe)(b.Constructor)(p(C)(A));
    }, function (A) {
      return g.map(c.functorMaybe)(b.Constructor)(r(C)(A));
    });
  };

  d.genericEnumSum = function (C) {
    return function (A) {
      return function (q) {
        return function (v) {
          return new h(function (E) {
            if (E instanceof b.Inl) return g.map(c.functorMaybe)(b.Inl.create)(p(C)(E.value0));

            if (E instanceof b.Inr) {
              E = p(q)(E.value0);
              if (E instanceof c.Nothing) return new c.Just(new b.Inl(e["genericTop'"](A)));
              if (E instanceof c.Just) return new c.Just(new b.Inr(E.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [E.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [E.constructor.name]);
          }, function (E) {
            if (E instanceof b.Inl) {
              E = r(C)(E.value0);
              if (E instanceof c.Nothing) return new c.Just(new b.Inr(e["genericBottom'"](v)));
              if (E instanceof c.Just) return new c.Just(new b.Inl(E.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [E.constructor.name]);
            }

            if (E instanceof b.Inr) return g.map(c.functorMaybe)(b.Inr.create)(r(q)(E.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [E.constructor.name]);
          });
        };
      };
    };
  };

  d.genericBoundedEnumNoArguments = t;

  d.genericBoundedEnumConstructor = function (C) {
    return new n(m.unwrap(k.newtypeCardinality)(x(C)), function (A) {
      return z(C)(A);
    }, function (A) {
      return g.map(c.functorMaybe)(b.Constructor)(w(C)(A));
    });
  };

  d.genericBoundedEnumSum = function (C) {
    return function (A) {
      return new n(k.Cardinality(m.unwrap(k.newtypeCardinality)(x(C)) + m.unwrap(k.newtypeCardinality)(x(A)) | 0), function (q) {
        if (q instanceof b.Inl) return z(C)(q.value0);
        if (q instanceof b.Inr) return z(A)(q.value0) + m.unwrap(k.newtypeCardinality)(x(C)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [q.constructor.name]);
      }, function (q) {
        var v = x(C);
        if (0 <= q && q < v) q = g.map(c.functorMaybe)(b.Inl.create)(w(C)(q));else if (f.otherwise) q = g.map(c.functorMaybe)(b.Inr.create)(w(A)(q - v | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [v.constructor.name]);
        return q;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var d = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
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
      return function (e) {
        return function (c) {
          return (0, b["genericEq'"])(f.from(g)(e))(f.from(g)(c));
        };
      };
    };
  };

  d.genericEqNoArguments = a;

  d.genericEqSum = function (g) {
    return function (b) {
      return new k(function (e) {
        return function (c) {
          return e instanceof f.Inl && c instanceof f.Inl ? (0, g["genericEq'"])(e.value0)(c.value0) : e instanceof f.Inr && c instanceof f.Inr ? (0, b["genericEq'"])(e.value0)(c.value0) : !1;
        };
      });
    };
  };

  d.genericEqConstructor = function (g) {
    return new k(function (b) {
      return function (e) {
        return (0, g["genericEq'"])(b)(e);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var d = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      g = function g(e) {
    this["genericCompare'"] = e;
  };

  a = new g(function (e) {
    return function (c) {
      return k.EQ.value;
    };
  });

  var b = function b(e) {
    return e["genericCompare'"];
  };

  d.genericCompare = function (e) {
    return function (c) {
      return function (m) {
        return function (h) {
          return b(c)(f.from(e)(m))(f.from(e)(h));
        };
      };
    };
  };

  d.genericOrdNoArguments = a;

  d.genericOrdSum = function (e) {
    return function (c) {
      return new g(function (m) {
        return function (h) {
          if (m instanceof f.Inl && h instanceof f.Inl) return b(e)(m.value0)(h.value0);
          if (m instanceof f.Inr && h instanceof f.Inr) return b(c)(m.value0)(h.value0);
          if (m instanceof f.Inl && h instanceof f.Inr) return k.LT.value;
          if (m instanceof f.Inr && h instanceof f.Inl) return k.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [m.constructor.name, h.constructor.name]);
        };
      });
    };
  };

  d.genericOrdConstructor = function (e) {
    return new g(function (c) {
      return function (m) {
        return b(e)(c)(m);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var d = a["Data.Generic.Rep.Show"],
      f = a["Data.Foldable"],
      k = a["Data.Generic.Rep"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      c = a["Data.Symbol"],
      m = function m(n) {
    this.genericShowArgs = n;
  },
      h = function h(n) {
    this["genericShow'"] = n;
  };

  a = new m(function (n) {
    return [];
  });

  d.genericShow = function (n) {
    return function (w) {
      return function (r) {
        return (0, w["genericShow'"])(k.from(n)(r));
      };
    };
  };

  d.genericShowArgsNoArguments = a;

  d.genericShowSum = function (n) {
    return function (w) {
      return new h(function (r) {
        if (r instanceof k.Inl) return (0, n["genericShow'"])(r.value0);
        if (r instanceof k.Inr) return (0, w["genericShow'"])(r.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [r.constructor.name]);
      });
    };
  };

  d.genericShowConstructor = function (n) {
    return function (w) {
      return new h(function (r) {
        var p = c.reflectSymbol(w)(c.SProxy.value);
        r = (0, n.genericShowArgs)(r);
        return 0 === r.length ? p : "(" + (f.intercalate(f.foldableArray)(g.monoidString)(" ")(b.append(b.semigroupArray)([p])(r)) + ")");
      });
    };
  };

  d.genericShowArgsArgument = function (n) {
    return new m(function (w) {
      return [e.show(n)(w)];
    });
  };
})(PS);

(function (a) {
  a["Data.Lens.Internal.Wander"] = a["Data.Lens.Internal.Wander"] || {};

  a["Data.Lens.Internal.Wander"].Wander = function (d, f, k) {
    this.Choice1 = d;
    this.Strong0 = f;
    this.wander = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  var d = a["Data.Profunctor"],
      f = a["Control.Category"];

  a = function a(g) {
    this.dimap = g;
  };

  var k = new a(function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          return b(e(g(c)));
        };
      };
    };
  });

  d.dimap = function (g) {
    return g.dimap;
  };

  d.Profunctor = a;

  d.rmap = function (g) {
    return function (b) {
      return (0, g.dimap)(f.identity(f.categoryFn))(b);
    };
  };

  d.profunctorFn = k;
})(PS);

(function (a) {
  a["Data.Profunctor.Choice"] = a["Data.Profunctor.Choice"] || {};
  a = a["Data.Profunctor.Choice"];

  a.right = function (d) {
    return d.right;
  };

  a.Choice = function (d, f, k) {
    this.Profunctor0 = d;
    this.left = f;
    this.right = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};

  var d = a["Data.Profunctor.Strong"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Profunctor"],
      b = a["Data.Tuple"],
      e = function e(m, h, n) {
    this.Profunctor0 = m;
    this.first = h;
    this.second = n;
  };

  a = new e(function () {
    return g.profunctorFn;
  }, function (m) {
    return function (h) {
      return new b.Tuple(m(h.value0), h.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var c = function c(m) {
    return function (h) {
      return function (n) {
        return function (w) {
          return k.composeFlipped(m.Semigroupoid0())((0, h.first)(n))((0, h.second)(w));
        };
      };
    };
  };

  d.first = function (m) {
    return m.first;
  };

  d.second = function (m) {
    return m.second;
  };

  d.Strong = e;

  d.fanout = function (m) {
    return function (h) {
      return function (n) {
        return function (w) {
          var r = g.dimap(h.Profunctor0())(f.identity(f.categoryFn))(function (p) {
            return new b.Tuple(p, p);
          })(f.identity(m));
          return k.composeFlipped(m.Semigroupoid0())(r)(c(m)(h)(n)(w));
        };
      };
    };
  };

  d.strongFn = a;
})(PS);

(function (a) {
  a["Data.Lens.Internal.Forget"] = a["Data.Lens.Internal.Forget"] || {};

  var d = a["Data.Lens.Internal.Forget"],
      f = a["Data.Const"],
      k = a["Data.Either"],
      g = a["Data.Functor"],
      b = a["Data.Lens.Internal.Wander"],
      e = a["Data.Monoid"],
      c = a["Data.Newtype"],
      m = a["Data.Profunctor.Choice"],
      h = a["Data.Profunctor.Strong"],
      n = a["Data.Tuple"],
      w = function w(x) {
    return x;
  },
      r = new a["Data.Profunctor"].Profunctor(function (x) {
    return function (t) {
      return function (C) {
        return function (A) {
          return C(x(A));
        };
      };
    };
  }),
      p = new h.Strong(function () {
    return r;
  }, function (x) {
    return function (t) {
      return x(n.fst(t));
    };
  }, function (x) {
    return function (t) {
      return x(n.snd(t));
    };
  });

  a = new c.Newtype(function (x) {
    return x;
  }, w);

  var z = function z(x) {
    return new m.Choice(function () {
      return r;
    }, function (t) {
      return k.either(t)(e.mempty(e.monoidFn(x)));
    }, function (t) {
      return k.either(e.mempty(e.monoidFn(x)))(t);
    });
  };

  d.Forget = w;
  d.newtypeForget = a;
  d.strongForget = p;

  d.wanderForget = function (x) {
    return new b.Wander(function () {
      return z(x);
    }, function () {
      return p;
    }, function (t) {
      return function (C) {
        return c.alaF(g.functorFn)(g.functorFn)(f.newtypeConst)(f.newtypeConst)(f.Const)(t(f.applicativeConst(x)))(C);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};

  var d = a["Data.Maybe.First"],
      f = a["Data.Maybe"],
      k = a["Data.Monoid"],
      g = a["Data.Newtype"],
      b = function b(c) {
    return c;
  },
      e = new a["Data.Semigroup"].Semigroup(function (c) {
    return function (m) {
      return c instanceof f.Just ? c : m;
    };
  });

  a = new g.Newtype(function (c) {
    return c;
  }, b);
  k = new k.Monoid(function () {
    return e;
  }, f.Nothing.value);
  d.First = b;
  d.newtypeFirst = a;
  d.semigroupFirst = e;
  d.monoidFirst = k;
})(PS);

(function (a) {
  a["Data.Lens.Fold"] = a["Data.Lens.Fold"] || {};
  var d = a["Data.Lens.Fold"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Maybe"],
      g = a["Data.Maybe.First"],
      b = a["Data.Newtype"],
      e = b.under(f.newtypeForget)(f.newtypeForget)(f.Forget);

  d.preview = function (c) {
    var m = b.unwrap(g.newtypeFirst),
        h = e(c)(function (n) {
      return g.First(k.Just.create(n));
    });
    return function (n) {
      return m(h(n));
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Getter"] = a["Data.Lens.Getter"] || {};
  var d = a["Control.Category"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Newtype"];

  a["Data.Lens.Getter"].view = function (g) {
    return k.unwrap(f.newtypeForget)(g(d.identity(d.categoryFn)));
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso"] = a["Data.Lens.Iso"] || {};
  var d = a["Data.Profunctor"];

  a["Data.Lens.Iso"].iso = function (f) {
    return function (k) {
      return function (g) {
        return function (b) {
          return d.dimap(g)(f)(k)(b);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso.Newtype"] = a["Data.Lens.Iso.Newtype"] || {};
  var d = a["Data.Lens.Iso"],
      f = a["Data.Newtype"];

  a["Data.Lens.Iso.Newtype"]._Newtype = function (k) {
    return function (g) {
      return function (b) {
        return d.iso(f.unwrap(k))(f.wrap(g))(b);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Lens"] = a["Data.Lens.Lens"] || {};

  var d = a["Data.Profunctor"],
      f = a["Data.Profunctor.Strong"],
      k = a["Data.Tuple"],
      g = function g(b) {
    return function (e) {
      return function (c) {
        return d.dimap(e.Profunctor0())(b)(function (m) {
          return m.value1(m.value0);
        })(f.first(e)(c));
      };
    };
  };

  a["Data.Lens.Lens"].lens = function (b) {
    return function (e) {
      return function (c) {
        return g(function (m) {
          return new k.Tuple(b(m), function (h) {
            return e(m)(h);
          });
        })(c);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Prism"] = a["Data.Lens.Prism"] || {};

  var d = a["Control.Category"],
      f = a["Data.Either"],
      k = a["Data.Maybe"],
      g = a["Data.Profunctor"],
      b = a["Data.Profunctor.Choice"],
      e = function e(c) {
    return function (m) {
      return function (h) {
        return function (n) {
          return g.dimap(h.Profunctor0())(m)(f.either(d.identity(d.categoryFn))(d.identity(d.categoryFn)))(b.right(h)(g.rmap(h.Profunctor0())(c)(n)));
        };
      };
    };
  };

  a["Data.Lens.Prism"]["prism'"] = function (c) {
    return function (m) {
      return function (h) {
        return e(c)(function (n) {
          return k.maybe(new f.Left(n))(f.Right.create)(m(n));
        })(h);
      };
    };
  };
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var d = a.Record,
      f = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  d.get = function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          return k.unsafeGet(f.reflectSymbol(g)(e))(c);
        };
      };
    };
  };

  d.set = function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (m) {
            return function (h) {
              return k.unsafeSet(f.reflectSymbol(g)(c))(m)(h);
            };
          };
        };
      };
    };
  };

  d.insert = function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (m) {
            return function (h) {
              return k.unsafeSet(f.reflectSymbol(g)(c))(m)(h);
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Record"] = a["Data.Lens.Record"] || {};
  var d = a["Data.Function"],
      f = a["Data.Lens.Lens"],
      k = a.Record;

  a["Data.Lens.Record"].prop = function (g) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (m) {
            return f.lens(k.get(g)()(c))(d.flip(k.set(g)()()(c)))(m);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var d = a["Data.String.NonEmpty.Internal"],
      f = a["Data.Maybe"],
      k = a["Data.Show"];
  a = new k.Show(function (g) {
    return "(NonEmptyString.unsafeFromString " + (k.show(k.showString)(g) + ")");
  });

  d.fromString = function (g) {
    return "" === g ? f.Nothing.value : new f.Just(g);
  };

  d.toString = function (g) {
    return g;
  };

  d.showNonEmptyString = a;
})(PS);

(function (a) {
  a.endsWith = function (d) {
    return function (f) {
      return f.endsWith(d);
    };
  };

  a.fromCharArray = function (d) {
    return d.join("");
  };
})(PS["Data.String.Utils"] = PS["Data.String.Utils"] || {});

(function (a) {
  a["Data.String.Utils"] = a["Data.String.Utils"] || {};
  var d = a["Data.String.Utils"];
  a = a["Data.String.Utils"];
  d.endsWith = a.endsWith;
  d.fromCharArray = a.fromCharArray;
})(PS);

(function (a) {
  a["Data.Variant"] = a["Data.Variant"] || {};
  var d = a["Data.Symbol"];

  a["Data.Variant"].inj = function (f) {
    return function (k) {
      return function (g) {
        return function (b) {
          return {
            type: d.reflectSymbol(k)(g),
            value: b
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var d = a["Data.XPath"],
      f = a["Data.Semigroup"],
      k = new function (g, b, e, c, m, h) {
    this.Semigroup0 = g;
    this.at = b;
    this.pathAppend = e;
    this.pathAppendNSx = c;
    this.root = m;
    this.xx = h;
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

  d.pathAppendNSx = function (g) {
    return g.pathAppendNSx;
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
  var d = a["Effect.Class.Console"],
      f = a["Effect.Class"],
      k = a["Effect.Console"];

  d.log = function (g) {
    var b = f.liftEffect(g);
    return function (e) {
      return b(k.log(e));
    };
  };

  d.logShow = function (g) {
    return function (b) {
      var e = f.liftEffect(g),
          c = k.logShow(b);
      return function (m) {
        return e(c(m));
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
  var d = a["Effect.Now"],
      f = a["Effect.Now"],
      k = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(k.toDateTime)(f.now);
  d.nowDateTime = a;
})(PS);

(function (a) {
  function d(f) {
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

  a.keys = Object.keys || d(function (f) {
    return function () {
      return f;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a["new"] = function () {
    return {};
  };

  a.poke = function (d) {
    return function (f) {
      return function (k) {
        return function () {
          k[d] = f;
          return k;
        };
      };
    };
  };

  a["delete"] = function (d) {
    return function (f) {
      return function () {
        delete f[d];
        return f;
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
  a["Foreign.Object"] = a["Foreign.Object"] || {};

  var d = a["Foreign.Object"],
      f = a["Foreign.Object"],
      k = a["Control.Monad.ST.Internal"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Foreign.Object.ST"],
      c = f._copyST,
      m = function m(w) {
    return function (r) {
      return f.runST(function () {
        var p = c(r)();
        w(p)();
        return p;
      });
    };
  },
      h = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      n = function n(w) {
    return function (r) {
      return m(e.poke(w)(r));
    };
  };

  d.lookup = h;

  d.fromFoldableWith = function (w) {
    return function (r) {
      return function (p) {
        return f.runST(function () {
          var z = e["new"]();
          g.for_(k.applicativeST)(w)(p)(function (x) {
            return function () {
              var t = f._lookupST(x.value1, r(x.value1), x.value0, z)();

              return e.poke(x.value0)(t)(z)();
            };
          })();
          return z;
        });
      };
    };
  };

  d.alter = function (w) {
    return function (r) {
      return function (p) {
        var z = w(h(r)(p));
        if (z instanceof b.Nothing) return m(e["delete"](r))(p);
        if (z instanceof b.Just) return n(r)(z.value0)(p);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [z.constructor.name]);
      };
    };
  };

  d.empty = f.empty;
  d.keys = f.keys;
})(PS);

(function (a) {
  a["Formless.Data.FormFieldResult"] = a["Formless.Data.FormFieldResult"] || {};
  var d = a["Formless.Data.FormFieldResult"],
      f = a["Data.Either"],
      k = a["Data.Lens.Prism"],
      g = a["Data.Maybe"];

  a = function () {
    function c() {}

    c.value = new c();
    return c;
  }();

  var b = function () {
    function c(m) {
      this.value0 = m;
    }

    c.create = function (m) {
      return new c(m);
    };

    return c;
  }(),
      e = function () {
    function c(m) {
      this.value0 = m;
    }

    c.create = function (m) {
      return new c(m);
    };

    return c;
  }();

  d.NotValidated = a;
  d.Error = b;

  d.fromEither = function (c) {
    if (c instanceof f.Left) return new b(c.value0);
    if (c instanceof f.Right) return new e(c.value0);
    throw Error("Failed pattern match at Formless.Data.FormFieldResult (line 44, column 14 - line 46, column 23): " + [c.constructor.name]);
  };

  d.toMaybe = function (c) {
    return c instanceof e ? new g.Just(c.value0) : g.Nothing.value;
  };

  d._Error = function (c) {
    return k["prism'"](b.create)(function (m) {
      return m instanceof b ? new g.Just(m.value0) : g.Nothing.value;
    })(c);
  };
})(PS);

(function (a) {
  a["Formless.Types.Form"] = a["Formless.Types.Form"] || {};
  var d = a["Formless.Types.Form"],
      f = a["Data.Newtype"];

  a = function a(m) {
    return m;
  };

  var k = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      g = function g(m) {
    return m;
  },
      b = new f.Newtype(function (m) {
    return m;
  }, a),
      e = new f.Newtype(function (m) {
    return m;
  }, function (m) {
    return m;
  }),
      c = new f.Newtype(function (m) {
    return m;
  }, function (m) {
    return m;
  });

  f = new f.Newtype(function (m) {
    return m;
  }, g);
  d.FormProxy = k;
  d.OutputField = a;
  d.FormField = g;
  d.newtypeInputField = c;

  d.eqInputField = function (m) {
    return m;
  };

  d.newtypeOutputField = b;
  d.newtypeInputFunction = e;
  d.newtypeFormField = f;
})(PS);

(function (a) {
  a["Formless.Validation"] = a["Formless.Validation"] || {};
  var d = a["Formless.Validation"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Function"],
      b = a["Data.Newtype"],
      e = new b.Newtype(function (c) {
    return c;
  }, function (c) {
    return c;
  });

  d.runValidation = function (c) {
    return b.unwrap(e);
  };

  d.hoistFn_ = function (c) {
    return function (m) {
      return g["const"](function () {
        var h = f.pure(c.Applicative0()),
            n = f.pure(k.applicativeEither);
        return function (w) {
          return h(n(m(w)));
        };
      }());
    };
  };

  d.hoistFnE = function (c) {
    return function (m) {
      return function (h) {
        var n = f.pure(c.Applicative0()),
            w = m(h);
        return function (r) {
          return n(w(r));
        };
      };
    };
  };

  d.hoistFnE_ = function (c) {
    return function (m) {
      return g["const"](function () {
        var h = f.pure(c.Applicative0());
        return function (n) {
          return h(m(n));
        };
      }());
    };
  };

  d.newtypeValidation = e;
})(PS);

(function (a) {
  a.copyRecord = function (d) {
    var f = {},
        k;

    for (k in d) {
      ({}).hasOwnProperty.call(d, k) && (f[k] = d[k]);
    }

    return f;
  };

  a.unsafeInsert = function (d) {
    return function (f) {
      return function (k) {
        k[d] = f;
        return k;
      };
    };
  };

  a.unsafeModify = function (d) {
    return function (f) {
      return function (k) {
        k[d] = f(k[d]);
        return k;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var d = a["Record.Builder"],
      f = a["Record.Builder"],
      k = a["Data.Symbol"],
      g = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  d.build = function (b) {
    return function (e) {
      return b(f.copyRecord(e));
    };
  };

  d.insert = function (b) {
    return function (e) {
      return function (c) {
        return function (m) {
          return function (h) {
            return function (n) {
              return f.unsafeInsert(k.reflectSymbol(c)(m))(h)(n);
            };
          };
        };
      };
    };
  };

  d.modify = function (b) {
    return function (e) {
      return function (c) {
        return function (m) {
          return function (h) {
            return function (n) {
              return f.unsafeModify(k.reflectSymbol(c)(m))(h)(n);
            };
          };
        };
      };
    };
  };

  d.semigroupoidBuilder = g;
  d.categoryBuilder = a;
})(PS);

(function (a) {
  a["Formless.Internal.Transform"] = a["Formless.Internal.Transform"] || {};

  var d = a["Formless.Internal.Transform"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Control.Semigroupoid"],
      c = a["Data.Functor"],
      m = a["Data.Maybe"],
      h = a["Data.Newtype"],
      n = a["Data.Symbol"],
      w = a["Data.Tuple"],
      r = a["Formless.Data.FormFieldResult"],
      p = a["Formless.Types.Form"],
      z = a["Formless.Validation"],
      x = a.Record,
      t = a["Record.Builder"],
      C = a["Record.Unsafe"],
      A = a["Type.Data.RowList"],
      q = function q(R) {
    this.validateAllBuilder = R;
  },
      v = function v(R) {
    this.setFormFieldsTouchedBuilder = R;
  },
      E = function E(R) {
    this.replaceFormFieldInputsBuilder = R;
  },
      y = function y(R) {
    this.modifyAllBuilder = R;
  },
      F = function F(R) {
    this.inputFieldsToFormFieldsBuilder = R;
  },
      D = function D(R) {
    this.formFieldsToInputFieldsBuilder = R;
  },
      I = function I(R) {
    this.formFieldsToMaybeOutputBuilder = R;
  },
      u = function u(R) {
    this.countErrorsImpl = R;
  },
      M = function M(R) {
    this.allTouchedImpl = R;
  };

  a = new v(function (R) {
    return function (V) {
      return b.identity(t.categoryBuilder);
    };
  });
  var G = new E(function (R) {
    return function (V) {
      return function (aa) {
        return b.identity(t.categoryBuilder);
      };
    };
  }),
      S = new u(function (R) {
    return function (V) {
      return 0;
    };
  }),
      P = new M(function (R) {
    return function (V) {
      return !0;
    };
  }),
      J = new y(function (R) {
    return function (V) {
      return function (aa) {
        return b.identity(t.categoryBuilder);
      };
    };
  }),
      W = new D(function (R) {
    return function (V) {
      return b.identity(t.categoryBuilder);
    };
  }),
      K = new F(function (R) {
    return function (V) {
      return b.identity(t.categoryBuilder);
    };
  }),
      O = c.flap(c.functorFn)(t.build)({}),
      da = new I(function (R) {
    return function (V) {
      return new m.Just(b.identity(t.categoryBuilder));
    };
  });
  d.fromScratch = O;

  d.allTouched = function (R) {
    return function (V) {
      return function (aa) {
        var ba = (0, V.allTouchedImpl)(A.RLProxy.value),
            Z = h.unwrap(aa);
        return function (ea) {
          return ba(Z(ea));
        };
      };
    };
  };

  d.countErrors = function (R) {
    return function (V) {
      return function (aa) {
        var ba = (0, V.countErrorsImpl)(A.RLProxy.value),
            Z = h.unwrap(aa);
        return function (ea) {
          return ba(Z(ea));
        };
      };
    };
  };

  d.setFormFieldsTouched = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          ba = (0, V.setFormFieldsTouchedBuilder)(A.RLProxy.value)(h.unwrap(aa)(ba));
          return h.wrap(aa)(O(ba));
        };
      };
    };
  };

  d.formFieldsToInputFields = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            Z = (0, V.formFieldsToInputFieldsBuilder)(A.RLProxy.value)(h.unwrap(ba)(Z));
            return h.wrap(aa)(O(Z));
          };
        };
      };
    };
  };

  d.inputFieldsToFormFields = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            Z = (0, V.inputFieldsToFormFieldsBuilder)(A.RLProxy.value)(h.unwrap(aa)(Z));
            return h.wrap(ba)(O(Z));
          };
        };
      };
    };
  };

  d.formFieldsToMaybeOutputFields = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            Z = (0, ba.formFieldsToMaybeOutputBuilder)(A.RLProxy.value)(h.unwrap(V)(Z));
            return c.map(m.functorMaybe)(h.wrap(aa))(c.map(m.functorMaybe)(O)(Z));
          };
        };
      };
    };
  };

  d.replaceFormFieldInputs = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            return function (ea) {
              ea = (0, V.replaceFormFieldInputsBuilder)(h.unwrap(aa)(Z))(A.RLProxy.value)(h.unwrap(ba)(ea));
              return h.wrap(ba)(O(ea));
            };
          };
        };
      };
    };
  };

  d.modifyAll = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            return function (ea) {
              ea = (0, V.modifyAllBuilder)(h.unwrap(aa)(Z))(A.RLProxy.value)(h.unwrap(ba)(ea));
              return h.wrap(ba)(O(ea));
            };
          };
        };
      };
    };
  };

  d.validateAll = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            return function (ea) {
              return function (Y) {
                Y = (0, aa.validateAllBuilder)(h.unwrap(ba)(ea))(A.RLProxy.value)(h.unwrap(Z)(Y));
                return c.map(V.Bind1().Apply0().Functor0())(h.wrap(Z))(c.map(V.Bind1().Apply0().Functor0())(O)(Y));
              };
            };
          };
        };
      };
    };
  };

  d.unsafeModifyInputVariant = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            var ea = function () {
              var ha = h.unwrap(R)(ba);
              return new w.Tuple(ha.type, ha.value);
            }(),
                Y = function () {
              var ha = C.unsafeGet(w.fst(ea))(h.unwrap(V)(Z));
              return p.FormField({
                input: h.unwrap(p.newtypeInputFunction)(w.snd(ea))(ha.input),
                touched: ha.touched,
                result: aa(ha.result)
              });
            }();

            return h.wrap(V)(C.unsafeSet(w.fst(ea))(Y)(h.unwrap(V)(Z)));
          };
        };
      };
    };
  };

  d.unsafeRunValidationVariant = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            return function (ea) {
              return function (Y) {
                var ha = h.unwrap(V)(Z).type;
                return function () {
                  var L = C.unsafeGet(ha)(h.unwrap(aa)(Y));
                  return g.bind(R.Bind1())(z.runValidation(R)(C.unsafeGet(ha)(h.unwrap(ba)(ea)))(Y)(L.input))(function (H) {
                    H = C.unsafeSet(ha)(p.FormField({
                      input: L.input,
                      touched: L.touched,
                      result: r.fromEither(H)
                    }))(h.unwrap(aa)(Y));
                    return f.pure(R.Applicative0())(h.wrap(aa)(H));
                  });
                }();
              };
            };
          };
        };
      };
    };
  };

  d.setFormFieldsTouchedNil = a;

  d.setFormFieldsTouchedCons = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return new v(function (Z) {
            return function (ea) {
              var Y = (0, aa.setFormFieldsTouchedBuilder)(A.RLProxy.value)(ea);
              ea = h.over(p.newtypeFormField)(p.newtypeFormField)(p.FormField)(function (ha) {
                return {
                  touched: !0,
                  input: ha.input,
                  result: ha.result
                };
              })(x.get(R)()(n.SProxy.value)(ea));
              ea = t.insert()()(R)(n.SProxy.value)(ea);
              return e.compose(t.semigroupoidBuilder)(ea)(Y);
            };
          });
        };
      };
    };
  };

  d.inputFieldsToInputNil = W;

  d.inputFieldsToInputCons = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return new D(function (Z) {
            return function (ea) {
              var Y = (0, aa.formFieldsToInputFieldsBuilder)(A.RLProxy.value)(ea);
              ea = x.get(R)()(n.SProxy.value)(ea).input;
              ea = t.insert()()(R)(n.SProxy.value)(ea);
              return e.compose(t.semigroupoidBuilder)(ea)(Y);
            };
          });
        };
      };
    };
  };

  d.inputFieldsToFormFieldsNil = K;

  d.inputFieldsToFormFieldsCons = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return new F(function (Z) {
            return function (ea) {
              var Y = (0, aa.inputFieldsToFormFieldsBuilder)(A.RLProxy.value)(ea);
              ea = {
                input: x.get(R)()(n.SProxy.value)(ea),
                touched: !1,
                result: r.NotValidated.value
              };
              ea = t.insert()()(R)(n.SProxy.value)(ea);
              return e.compose(t.semigroupoidBuilder)(ea)(Y);
            };
          });
        };
      };
    };
  };

  d.formFieldsToMaybeOutputNil = da;

  d.formFieldsToMaybeOutputCons = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return new I(function (Z) {
            return function (ea) {
              var Y = (0, aa.formFieldsToMaybeOutputBuilder)(A.RLProxy.value)(ea);
              ea = c.map(m.functorMaybe)(p.OutputField)(r.toMaybe(h.unwrap(p.newtypeFormField)(x.get(R)()(n.SProxy.value)(ea)).result));
              return k.apply(m.applyMaybe)(c.map(m.functorMaybe)(function (ha) {
                return function (L) {
                  return e.compose(t.semigroupoidBuilder)(t.insert()()(R)(n.SProxy.value)(ha))(L);
                };
              })(ea))(Y);
            };
          });
        };
      };
    };
  };

  d.nilCountErrors = S;

  d.consCountErrors = function (R) {
    return function (V) {
      return function (aa) {
        return new u(function (ba) {
          return function (Z) {
            var ea = h.unwrap(p.newtypeFormField)(x.get(R)()(n.SProxy.value)(Z)).result instanceof r.Error ? 1 : 0;
            return ea + (0, aa.countErrorsImpl)(A.RLProxy.value)(Z) | 0;
          };
        });
      };
    };
  };

  d.nilAllTouched = P;

  d.consAllTouched = function (R) {
    return function (V) {
      return function (aa) {
        return new M(function (ba) {
          return function (Z) {
            return h.unwrap(p.newtypeFormField)(x.get(R)()(n.SProxy.value)(Z)).touched ? (0, aa.allTouchedImpl)(A.RLProxy.value)(Z) : !1;
          };
        });
      };
    };
  };

  d.applyToValidationNil = function (R) {
    return new q(function (V) {
      return function (aa) {
        return function (ba) {
          return f.pure(R.Applicative0())(b.identity(t.categoryBuilder));
        };
      };
    });
  };

  d.applyToValidationCons = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            return function (ea) {
              return function (Y) {
                return new q(function (ha) {
                  return function (L) {
                    return function (H) {
                      var U = (0, Y.validateAllBuilder)(ha)(A.RLProxy.value)(H),
                          B = function () {
                        var Q = h.unwrap(z.newtypeValidation)(x.get(R)()(n.SProxy.value)(ha)),
                            N = h.unwrap(p.newtypeFormField)(x.get(R)()(n.SProxy.value)(H));
                        return g.bind(V.Bind1())(Q(h.wrap(ba)(H))(N.input))(function (ca) {
                          var qa = f.pure(V.Applicative0()),
                              ta = h.wrap(p.newtypeFormField),
                              ja = {},
                              la;

                          for (la in N) {
                            ({}).hasOwnProperty.call(N, la) && (ja[la] = N[la]);
                          }

                          ja.result = r.fromEither(ca);
                          return qa(ta(ja));
                        });
                      }();

                      return k.apply(V.Bind1().Apply0())(c.map(V.Bind1().Apply0().Functor0())(function (Q) {
                        return function (N) {
                          return e.compose(t.semigroupoidBuilder)(t.insert()()(R)(n.SProxy.value)(Q))(N);
                        };
                      })(B))(U);
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

  d.modifyAllNil = J;

  d.modifyAllCons = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            return function (ea) {
              return function (Y) {
                return new y(function (ha) {
                  return function (L) {
                    return function (H) {
                      var U = (0, Y.modifyAllBuilder)(ha)(A.RLProxy.value)(H),
                          B = h.unwrap(V)(x.get(R)()(n.SProxy.value)(ha));
                      H = x.get(R)()(n.SProxy.value)(H);
                      H = t.insert()()(R)(n.SProxy.value)(h.over(aa)(aa)(p.FormField)(function (Q) {
                        return {
                          input: B(Q.input),
                          result: Q.result,
                          touched: Q.touched
                        };
                      })(H));
                      return e.compose(t.semigroupoidBuilder)(H)(U);
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

  d.replaceFormFieldInputsTouchedNil = G;

  d.replaceFormFieldInputsTouchedCons = function (R) {
    return function (V) {
      return function (aa) {
        return function (ba) {
          return function (Z) {
            return function (ea) {
              return function (Y) {
                return new E(function (ha) {
                  return function (L) {
                    return function (H) {
                      var U = (0, Y.replaceFormFieldInputsBuilder)(ha)(A.RLProxy.value)(H);
                      h.unwrap(aa)(x.get(R)()(n.SProxy.value)(H));
                      H = x.get(R)()(n.SProxy.value)(ha);
                      H = t.insert()()(R)(n.SProxy.value)(p.FormField({
                        input: h.unwrap(V)(H),
                        touched: !1,
                        result: r.NotValidated.value
                      }));
                      return e.compose(t.semigroupoidBuilder)(H)(U);
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

  var d = a["Formless.Types.Query"],
      f = a["Data.Eq"],
      k = a["Data.Newtype"],
      g = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      b = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      e = function () {
    function A() {}

    A.value = new A();
    return A;
  }();

  a = function () {
    function A(q) {
      this.value0 = q;
    }

    A.create = function (q) {
      return new A(q);
    };

    return A;
  }();

  var c = function () {
    function A(q) {
      this.value0 = q;
    }

    A.create = function (q) {
      return new A(q);
    };

    return A;
  }(),
      m = function () {
    function A(q, v) {
      this.value0 = q;
      this.value1 = v;
    }

    A.create = function (q) {
      return function (v) {
        return new A(q, v);
      };
    };

    return A;
  }(),
      h = function () {
    function A(q) {
      this.value0 = q;
    }

    A.create = function (q) {
      return new A(q);
    };

    return A;
  }(),
      n = function () {
    function A(q) {
      this.value0 = q;
    }

    A.create = function (q) {
      return new A(q);
    };

    return A;
  }(),
      w = function () {
    function A(q) {
      this.value0 = q;
    }

    A.create = function (q) {
      return new A(q);
    };

    return A;
  }(),
      r = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      p = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      z = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      x = function () {
    function A(q) {
      this.value0 = q;
    }

    A.create = function (q) {
      return new A(q);
    };

    return A;
  }(),
      t = function () {
    function A(q, v) {
      this.value0 = q;
      this.value1 = v;
    }

    A.create = function (q) {
      return function (v) {
        return new A(q, v);
      };
    };

    return A;
  }(),
      C = function C(A) {
    return A;
  };

  k = new k.Newtype(function (A) {
    return A;
  }, C);
  f = new f.Eq(function (A) {
    return function (q) {
      return A instanceof g && q instanceof g || A instanceof b && q instanceof b || A instanceof e && q instanceof e ? !0 : !1;
    };
  });
  d.Modify = a;
  d.Validate = c;
  d.ModifyValidate = m;
  d.Reset = h;
  d.SetAll = n;
  d.ModifyAll = w;
  d.ResetAll = r;
  d.ValidateAll = p;
  d.Submit = z;
  d.LoadForm = x;
  d.AndThen = t;
  d.InternalState = C;
  d.Invalid = g;
  d.Incomplete = b;
  d.Valid = e;
  d.newtypeInternalState = k;
  d.eqValidStatus = f;
})(PS);

(function (a) {
  a["Formless.Component"] = a["Formless.Component"] || {};

  var d = a["Control.Applicative"],
      f = a["Control.Bind"],
      k = a["Control.Category"],
      g = a["Data.Either"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      c = a["Data.Newtype"],
      m = a["Formless.Internal.Transform"],
      h = a["Formless.Types.Query"],
      n = function n(w) {
    return function (r) {
      return function (p) {
        return function (z) {
          return function (x) {
            return function (t) {
              return function (C) {
                return function (A) {
                  return function (q) {
                    return function (v) {
                      return function (E) {
                        return function (y) {
                          return function (F) {
                            return function (D) {
                              return function (I) {
                                return function (u) {
                                  return function (M) {
                                    return function (G) {
                                      return function (S) {
                                        return function (P) {
                                          return function (J) {
                                            return function (W) {
                                              return function (K) {
                                                var O = function O(V) {
                                                  var aa = m.countErrors()(t)(I)(V.form),
                                                      ba = !b.eq(b.eqRec()(p))(c.unwrap(F)(m.formFieldsToInputFields()(x)(F)(I)(V.form)))(c.unwrap(F)(c.unwrap(h.newtypeInternalState)(V.internal).initialInputs));
                                                  return d.pure(J.Applicative0())(g.Left.create(function () {
                                                    return c.unwrap(h.newtypeInternalState)(V.internal).allTouched ? {
                                                      validity: 0 !== V.errors ? h.Invalid.value : h.Valid.value,
                                                      errors: aa,
                                                      dirty: ba,
                                                      form: V.form,
                                                      internal: V.internal,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    } : m.allTouched()(C)(I)(V.form) ? {
                                                      validity: 0 !== V.errors ? h.Invalid.value : h.Valid.value,
                                                      internal: c.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (Z) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: Z.initialInputs,
                                                          validators: Z.validators
                                                        };
                                                      })(V.internal),
                                                      errors: aa,
                                                      dirty: ba,
                                                      form: V.form,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    } : {
                                                      validity: h.Incomplete.value,
                                                      errors: aa,
                                                      dirty: ba,
                                                      form: V.form,
                                                      internal: V.internal,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    };
                                                  }()));
                                                },
                                                    da = function da(V) {
                                                  var aa = {
                                                    submitAttempts: V.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: V.internal,
                                                    form: V.form,
                                                    dirty: V.dirty,
                                                    errors: V.errors,
                                                    validity: V.validity
                                                  },
                                                      ba = c.unwrap(h.newtypeInternalState)(aa.internal);

                                                  V = function () {
                                                    return ba.allTouched ? aa : {
                                                      form: m.setFormFieldsTouched()(A)(I)(aa.form),
                                                      internal: c.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (Z) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: Z.initialInputs,
                                                          validators: Z.validators
                                                        };
                                                      })(aa.internal),
                                                      submitAttempts: aa.submitAttempts,
                                                      submitting: aa.submitting,
                                                      dirty: aa.dirty,
                                                      errors: aa.errors,
                                                      validity: aa.validity
                                                    };
                                                  }();

                                                  return f.bind(J.Bind1())(n()()(p)(z)(x)(t)(C)(A)(q)(v)(E)(y)(F)(D)(I)(u)(M)(G)(S)(P)(J)(h.ValidateAll.value)(V))(function (Z) {
                                                    if (Z instanceof g.Right) return d.pure(J.Applicative0())(new g.Right(Z.value0));

                                                    if (Z instanceof g.Left) {
                                                      var ea = {
                                                        submitting: !1,
                                                        dirty: Z.value0.dirty,
                                                        errors: Z.value0.errors,
                                                        form: Z.value0.form,
                                                        internal: Z.value0.internal,
                                                        submitAttempts: Z.value0.submitAttempts,
                                                        validity: Z.value0.validity
                                                      };
                                                      return d.pure(J.Applicative0())(function () {
                                                        if (b.eq(h.eqValidStatus)(ea.validity)(h.Valid.value)) {
                                                          var Y = m.formFieldsToMaybeOutputFields()(I)(u)(y)(Z.value0.form);
                                                          if (Y instanceof e.Nothing) return new g.Left(ea);
                                                          if (Y instanceof e.Just) return new g.Right(Y.value0);
                                                          throw Error("Failed pattern match at Formless.Component (line 201, column 16 - line 203, column 36): " + [Y.constructor.name]);
                                                        }

                                                        return new g.Left(ea);
                                                      }());
                                                    }

                                                    throw Error("Failed pattern match at Formless.Component (line 192, column 5 - line 204, column 31): " + [Z.constructor.name]);
                                                  });
                                                };

                                                if (W instanceof h.Modify) return O({
                                                  form: m.unsafeModifyInputVariant(S)(I)(k.identity(k.categoryFn))(W.value0)(K.form),
                                                  internal: K.internal,
                                                  errors: K.errors,
                                                  dirty: K.dirty,
                                                  validity: K.validity,
                                                  submitAttempts: K.submitAttempts,
                                                  submitting: K.submitting
                                                });
                                                if (W instanceof h.Validate) return f.bind(J.Bind1())(m.unsafeRunValidationVariant(J)(P)(I)(M)(W.value0)(c.unwrap(h.newtypeInternalState)(K.internal).validators)(K.form))(function (V) {
                                                  return O({
                                                    form: V,
                                                    internal: K.internal,
                                                    errors: K.errors,
                                                    dirty: K.dirty,
                                                    validity: K.validity,
                                                    submitAttempts: K.submitAttempts,
                                                    submitting: K.submitting
                                                  });
                                                });

                                                if (W instanceof h.ModifyValidate) {
                                                  da = function da(V) {
                                                    var aa = c.unwrap(h.newtypeInternalState)(V.internal).validators;
                                                    return f.bind(J.Bind1())(m.unsafeRunValidationVariant(J)(P)(I)(M)(W.value1)(aa)(V.form))(function (ba) {
                                                      return d.pure(J.Applicative0())({
                                                        form: ba,
                                                        internal: V.internal,
                                                        dirty: V.dirty,
                                                        errors: V.errors,
                                                        submitAttempts: V.submitAttempts,
                                                        submitting: V.submitting,
                                                        validity: V.validity
                                                      });
                                                    });
                                                  };

                                                  var R = function R(V) {
                                                    return function (aa) {
                                                      return {
                                                        validity: aa.validity,
                                                        dirty: aa.dirty,
                                                        submitting: aa.submitting,
                                                        errors: aa.errors,
                                                        submitAttempts: aa.submitAttempts,
                                                        form: m.unsafeModifyInputVariant(S)(I)(V)(W.value1)(aa.form),
                                                        internal: aa.internal
                                                      };
                                                    };
                                                  };

                                                  if (W.value0 instanceof e.Nothing || W.value0 instanceof e.Just) return R = R(k.identity(k.categoryFn))(K), f.bind(J.Bind1())(da(R))(function (V) {
                                                    return O(V);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [W.value0.constructor.name]);
                                                }

                                                if (W instanceof h.Reset) return O({
                                                  form: m.unsafeModifyInputVariant(S)(I)(k.identity(k.categoryFn))(W.value0)(K.form),
                                                  internal: c.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: V.initialInputs,
                                                      validators: V.validators
                                                    };
                                                  })(K.internal),
                                                  errors: K.errors,
                                                  dirty: K.dirty,
                                                  validity: K.validity,
                                                  submitAttempts: K.submitAttempts,
                                                  submitting: K.submitting
                                                });
                                                if (W instanceof h.SetAll) return O({
                                                  form: m.replaceFormFieldInputs()(q)(F)(I)(W.value0)(K.form),
                                                  internal: K.internal,
                                                  errors: K.errors,
                                                  dirty: K.dirty,
                                                  validity: K.validity,
                                                  submitAttempts: K.submitAttempts,
                                                  submitting: K.submitting
                                                });
                                                if (W instanceof h.ModifyAll) return O({
                                                  form: m.modifyAll()(v)(D)(I)(W.value0)(K.form),
                                                  internal: K.internal,
                                                  errors: K.errors,
                                                  dirty: K.dirty,
                                                  validity: K.validity,
                                                  submitAttempts: K.submitAttempts,
                                                  submitting: K.submitting
                                                });
                                                if (W instanceof h.ValidateAll) return f.bind(J.Bind1())(m.validateAll()(J)(E)(M)(I)(c.unwrap(h.newtypeInternalState)(K.internal).validators)(K.form))(function (V) {
                                                  return O({
                                                    form: V,
                                                    internal: K.internal,
                                                    errors: K.errors,
                                                    dirty: K.dirty,
                                                    validity: K.validity,
                                                    submitAttempts: K.submitAttempts,
                                                    submitting: K.submitting
                                                  });
                                                });
                                                if (W instanceof h.Submit) return da(K);
                                                if (W instanceof h.ResetAll) return d.pure(J.Applicative0())(g.Left.create({
                                                  validity: h.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: m.replaceFormFieldInputs()(q)(F)(I)(c.unwrap(h.newtypeInternalState)(K.internal).initialInputs)(K.form),
                                                  internal: c.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: V.initialInputs,
                                                      validators: V.validators
                                                    };
                                                  })(K.internal)
                                                }));
                                                if (W instanceof h.LoadForm) return d.pure(J.Applicative0())(g.Left.create({
                                                  validity: h.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: m.replaceFormFieldInputs()(q)(F)(I)(W.value0)(K.form),
                                                  internal: c.over(h.newtypeInternalState)(h.newtypeInternalState)(h.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: W.value0,
                                                      validators: V.validators
                                                    };
                                                  })(K.internal)
                                                }));
                                                if (W instanceof h.AndThen) return f.bind(J.Bind1())(n()()(p)(z)(x)(t)(C)(A)(q)(v)(E)(y)(F)(D)(I)(u)(M)(G)(S)(P)(J)(W.value0)(K))(function (V) {
                                                  if (V instanceof g.Left) return n()()(p)(z)(x)(t)(C)(A)(q)(v)(E)(y)(F)(D)(I)(u)(M)(G)(S)(P)(J)(W.value1)(V.value0);
                                                  if (V instanceof g.Right) return d.pure(J.Applicative0())(new g.Right(V.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [V.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [W.constructor.name]);
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

  a["Formless.Component"].eval = n;
})(PS);

(function (a) {
  a["Formless.Query"] = a["Formless.Query"] || {};
  var d = a["Formless.Query"],
      f = a["Data.Function"],
      k = a["Data.Maybe"],
      g = a["Data.Newtype"],
      b = a["Data.Variant"],
      e = a["Formless.Types.Form"],
      c = a["Formless.Types.Query"];
  d.submit = c.Submit.value;

  d.set = function (m) {
    return function (h) {
      return function (n) {
        return function (w) {
          return function (r) {
            return new c.Modify(g.wrap(h)(b.inj()(m)(w)(g.wrap(e.newtypeInputFunction)(f["const"](r)))));
          };
        };
      };
    };
  };

  d.setValidate = function (m) {
    return function (h) {
      return function (n) {
        return function (w) {
          return function (r) {
            return new c.ModifyValidate(k.Nothing.value, g.wrap(h)(b.inj()(m)(w)(g.wrap(e.newtypeInputFunction)(f["const"](r)))));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Formless.Retrieve"] = a["Formless.Retrieve"] || {};

  var d = a["Formless.Retrieve"],
      f = a["Data.Lens.Fold"],
      k = a["Data.Lens.Getter"],
      g = a["Data.Lens.Internal.Forget"],
      b = a["Data.Lens.Iso.Newtype"],
      e = a["Data.Lens.Record"],
      c = a["Data.Maybe.First"],
      m = a["Data.Symbol"],
      h = a["Formless.Data.FormFieldResult"],
      n = a["Formless.Types.Form"],
      w = function w(x) {
    return function (t) {
      return function (C) {
        return function (A) {
          return function (q) {
            var v = b._Newtype(t)(t)(q.Profunctor0()),
                E = e.prop(x)()()(A)(q),
                y = b._Newtype(n.newtypeFormField)(n.newtypeFormField)(q.Profunctor0());

            return function (F) {
              return v(E(y(F)));
            };
          };
        };
      };
    };
  },
      r = function r(x) {
    return function (t) {
      return function (C) {
        return function (A) {
          return function (q) {
            var v = w(x)(t)()(A)(q),
                E = e.prop(new m.IsSymbol(function () {
              return "input";
            }))()()(m.SProxy.value)(q);
            return function (y) {
              return v(E(y));
            };
          };
        };
      };
    };
  },
      p = function p(x) {
    return function (t) {
      return function (C) {
        return function (A) {
          return function (q) {
            var v = w(x)(t)()(A)(q),
                E = e.prop(new m.IsSymbol(function () {
              return "result";
            }))()()(m.SProxy.value)(q);
            return function (y) {
              return v(E(y));
            };
          };
        };
      };
    };
  },
      z = function z(x) {
    return function (t) {
      return function (C) {
        return function (A) {
          return function (q) {
            var v = p(x)(t)()(A)(q.Strong0()),
                E = h._Error(q.Choice1());

            return function (y) {
              return v(E(y));
            };
          };
        };
      };
    };
  };

  d.getInput = function (x) {
    return function (t) {
      return function (C) {
        return function (A) {
          return k.view(r(x)(t)()(A)(g.strongForget));
        };
      };
    };
  };

  d.getError = function (x) {
    return function (t) {
      return function (C) {
        return function (A) {
          return f.preview(z(x)(t)()(A)(g.wanderForget(c.monoidFirst)));
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Heterogeneous.Mapping"] = a["Heterogeneous.Mapping"] || {};

  var d = a["Heterogeneous.Mapping"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Symbol"],
      b = a["Record.Builder"],
      e = a["Type.Data.RowList"],
      c = function c(n) {
    this.mappingWithIndex = n;
  },
      m = function m(n) {
    this.mapRecordWithIndexBuilder = n;
  },
      h = function h(n) {
    this.hmap = n;
  };

  a = new m(function (n) {
    return function (w) {
      return f.identity(b.categoryBuilder);
    };
  });

  d.hmap = function (n) {
    return n.hmap;
  };

  d.Mapping = function (n) {
    this.mapping = n;
  };

  d.constMapping = function (n) {
    return new c(function (w) {
      return function (r) {
        return (0, n.mapping)(w);
      };
    });
  };

  d.hmapRecord = function (n) {
    return function (w) {
      return new h(function () {
        var r = (0, w.mapRecordWithIndexBuilder)(e.RLProxy.value);
        return function (p) {
          return b.build(r(p));
        };
      }());
    };
  };

  d.mapRecordWithIndexCons = function (n) {
    return function (w) {
      return function (r) {
        return function (p) {
          return function (z) {
            return new m(function (x) {
              return function (t) {
                return k.compose(b.semigroupoidBuilder)(b.modify()()(n)(g.SProxy.value)((0, w.mappingWithIndex)(t)(g.SProxy.value)))((0, r.mapRecordWithIndexBuilder)(e.RLProxy.value)(t));
              };
            });
          };
        };
      };
    };
  };

  d.mapRecordWithIndexNil = a;
})(PS);

(function (a) {
  a["Formless.Transform.Record"] = a["Formless.Transform.Record"] || {};

  var d = a["Formless.Transform.Record"],
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

  d.unwrapOutputFields = function (e) {
    return function (c) {
      var m = k.hmap(c)(b.value),
          h = f.unwrap(e);
      return function (n) {
        return m(h(n));
      };
    };
  };

  d.wrapInputFields = function (e) {
    return function (c) {
      var m = f.wrap(e),
          h = k.hmap(c)(g.value);
      return function (n) {
        return m(h(n));
      };
    };
  };

  d.unwrapField = function (e) {
    return new k.Mapping(function (c) {
      return f.unwrap(e);
    });
  };

  d.wrapField = function (e) {
    return new k.Mapping(function (c) {
      return f.wrap(e);
    });
  };
})(PS);

(function (a) {
  a["Formless.Transform.Row"] = a["Formless.Transform.Row"] || {};

  var d = a["Formless.Transform.Row"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Symbol"],
      b = a["Formless.Internal.Transform"],
      e = a["Record.Builder"],
      c = a["Type.Data.RowList"],
      m = function m(h) {
    this.makeSProxiesBuilder = h;
  };

  a = new m(function (h) {
    return f.identity(e.categoryBuilder);
  });

  d.mkSProxies = function (h) {
    return function (n) {
      return function (w) {
        return function (r) {
          r = (0, w.makeSProxiesBuilder)(c.RLProxy.value);
          return b.fromScratch(r);
        };
      };
    };
  };

  d.makeSProxiesNil = a;

  d.makeSProxiesCons = function (h) {
    return function (n) {
      return function (w) {
        return new m(function (r) {
          r = (0, w.makeSProxiesBuilder)(c.RLProxy.value);
          var p = e.insert()()(h)(g.SProxy.value)(g.SProxy.value);
          return k.compose(e.semigroupoidBuilder)(p)(r);
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
  var d = a["Concur.React.Props"],
      f = a["Data.Functor"],
      k = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (g) {
    return d.classList(f.map(f.functorArray)(k.Just.create)(g));
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

  a["Metajelo.CSS.UI.Util"].mjUiClass = function (f) {
    return d.className("metajelo-ui_" + f);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var d = a["Metajelo.CSS.UI.ClassProps"],
      f = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      g = a["Metajelo.CSS.UI.Util"];
  a = g.mjUiClass(f.versioning);
  var b = g.mjUiClass(f.url),
      e = g.mjUiClass(k.tooltip),
      c = g.mjUiClass(f.title),
      m = g.mjUiClass(f.sustainability),
      h = g.mjUiClass(f.superOrg),
      n = g.mjUiClass(f.resourceTypeGen),
      w = g.mjUiClass(f.resourceTypeDescr),
      r = g.mjUiClass(f.resourceType),
      p = g.mjUiClass(f.resourceMDSource),
      z = g.mjUiClass(f.resourceId),
      x = g.mjUiClass(f.relatedIdsHeader),
      t = g.mjUiClass(f.relatedIds),
      C = g.mjUiClass(f.relatedIdList),
      A = g.mjUiClass(f.relatedId),
      q = g.mjUiClass(f.relType),
      v = g.mjUiClass(f.recordId),
      E = g.mjUiClass(f.record),
      y = g.mjUiClass(k.recPreview),
      F = g.mjUiClass(f.pubyear),
      D = g.mjUiClass(f.productsHeader),
      I = g.mjUiClass(f.products),
      u = g.mjUiClass(f.productList),
      M = g.mjUiClass(f.product),
      G = g.mjUiClass(k.prodPreview),
      S = g.mjUiClass(k.previewButtons),
      P = g.mjUiClass(f.policyType),
      J = g.mjUiClass(f.policy),
      W = g.mjUiClass(k.page),
      K = g.mjUiClass(f.missionStatement),
      O = g.mjUiClass(f.location),
      da = g.mjUiClass(k.locPreview),
      R = g.mjUiClass(f.institutionType),
      V = g.mjUiClass(f.institutionPolicy),
      aa = g.mjUiClass(f.institutionPolicies),
      ba = g.mjUiClass(f.institutionName),
      Z = g.mjUiClass(f.institutionId),
      ea = g.mjUiClass(f.institutionContact),
      Y = g.mjUiClass(f.identifier),
      ha = g.mjUiClass(f.idType),
      L = g.mjUiClass(f.id),
      H = g.mjUiClass(f.fundingStatement),
      U = g.mjUiClass(f.formatList),
      B = g.mjUiClass(f.format),
      Q = g.mjUiClass(k.downloadBtn),
      N = g.mjUiClass(k.date),
      ca = g.mjUiClass(f.creator),
      qa = g.mjUiClass(f.contactType),
      ta = g.mjUiClass(f.contactEmail);
  k = g.mjUiClass(k.clipBtn);
  var ja = g.mjUiClass(f.basicMetadata);
  f = g.mjUiClass(f.applies);
  d.page = W;
  d.date = N;
  d.recPreview = y;
  d.prodPreview = G;
  d.locPreview = da;
  d.tooltip = e;
  d.downloadBtn = Q;
  d.clipBtn = k;
  d.previewButtons = S;
  d.record = E;
  d.recordId = v;
  d.product = M;
  d.productList = u;
  d.productsHeader = D;
  d.products = I;
  d.location = O;
  d.sustainability = m;
  d.missionStatement = K;
  d.fundingStatement = H;
  d.identifier = Y;
  d.id = L;
  d.idType = ha;
  d.relatedId = A;
  d.relType = q;
  d.relatedIdList = C;
  d.relatedIdsHeader = x;
  d.relatedIds = t;
  d.basicMetadata = ja;
  d.creator = ca;
  d.pubyear = F;
  d.title = c;
  d.resourceId = z;
  d.resourceType = r;
  d.resourceTypeGen = n;
  d.resourceTypeDescr = w;
  d.resourceMDSource = p;
  d.institutionName = ba;
  d.institutionId = Z;
  d.institutionType = R;
  d.institutionContact = ea;
  d.contactEmail = ta;
  d.contactType = qa;
  d.institutionPolicy = V;
  d.institutionPolicies = aa;
  d.policy = J;
  d.policyType = P;
  d.applies = f;
  d.superOrg = h;
  d.versioning = a;
  d.format = B;
  d.formatList = U;
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
      f = a["Concur.React.Props"],
      k = a["Data.Functor"],
      g = a["Metajelo.CSS.Common.Util"],
      b = function b(e) {
    return "metajelo_" + e;
  };

  a = function () {
    var e = k.map(k.functorArray)(b);
    return function (c) {
      return g.cList(e(c));
    };
  }();

  d.mjWebClass = function (e) {
    return f.className("metajelo_" + e);
  };

  d.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var d = a["Metajelo.CSS.Web.ClassProps"],
      f = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      g = a["Metajelo.CSS.Web.Util"];
  a = g.mjWebClass(f.versioning);
  g.mjWebClass(f.url);
  var b = g.mjWebClass(f.title),
      e = g.mjWebClass(f.sustainability),
      c = g.mjWebClass(f.superOrg),
      m = g.mjWebClass(f.resourceTypeGen),
      h = g.mjWebClass(f.resourceTypeDescr),
      n = g.mjWebClass(f.resourceType),
      w = g.mjWebClass(f.resourceId),
      r = g.mjWebClass(f.relatedIdsHeader),
      p = g.mjWebClass(f.relatedIdList),
      z = g.mjWebClass(f.relatedId),
      x = g.mjWebClass(f.relType),
      t = g.mjWebClass(f.recordId),
      C = g.mjWebClass(f.record),
      A = g.mjWebClass(f.pubyear),
      q = g.mjWebClass(f.productsHeader),
      v = g.mjWebClass(f.productList),
      E = g.mjWebClass(k.productGroup),
      y = g.mjWebClass(k.productCitation),
      F = g.mjWebClass(f.product),
      D = g.mjWebClass(f.policyType),
      I = g.mjWebClass(f.policy),
      u = g.cList([f.url, f.missionStatement]),
      M = g.mjWebClass(f.institutionType),
      G = g.mjWebClass(f.institutionPolicy),
      S = g.mjWebClass(f.institutionPolicies),
      P = g.mjWebClass(f.institutionName),
      J = g.mjWebClass(f.institutionId),
      W = g.mjWebClass(f.institutionContact),
      K = g.mjWebClass(f.identifier),
      O = g.cList([f.url, k.idUrl]),
      da = g.mjWebClass(f.idType),
      R = g.cList([f.url, f.fundingStatement]),
      V = g.mjWebClass(k.errorDisplayBox),
      aa = g.mjWebClass(k.errorDisplay),
      ba = g.mjWebClass(f.creator),
      Z = g.mjWebClass(f.contactType),
      ea = g.mjWebClass(f.contactEmail);
  f = g.mjWebClass(f.basicMetadata);
  k = g.mjWebClass(k.appliesInfo);
  d.productGroup = E;
  d.productCitation = y;
  d.appliesInfo = k;
  d.idUrl = O;
  d.errorDisplayBox = V;
  d.errorDisplay = aa;
  d.record = C;
  d.recordId = t;
  d.product = F;
  d.productList = v;
  d.productsHeader = q;
  d.sustainability = e;
  d.missionStatement = u;
  d.fundingStatement = R;
  d.identifier = K;
  d.idType = da;
  d.relatedId = z;
  d.relType = x;
  d.relatedIdList = p;
  d.relatedIdsHeader = r;
  d.basicMetadata = f;
  d.creator = ba;
  d.pubyear = A;
  d.title = b;
  d.resourceId = w;
  d.resourceType = n;
  d.resourceTypeGen = m;
  d.resourceTypeDescr = h;
  d.institutionName = P;
  d.institutionId = J;
  d.institutionType = M;
  d.institutionContact = W;
  d.contactEmail = ea;
  d.contactType = Z;
  d.institutionPolicy = G;
  d.institutionPolicies = S;
  d.policy = I;
  d.policyType = D;
  d.superOrg = c;
  d.versioning = a;
})(PS);

(function (a) {
  a._validateURL = function (d) {
    return function (f) {
      if (!f || !/^https?:\/\//.test(f)) return "Unknown or missing protocol format in url: " + f;
      var k = document.createElement("a");
      k.href = f;

      if (d) {
        if (k.username) return "URL " + f + " contains a username: " + k.username;
        if (k.password) return "URL " + f + " contains a password: " + k.password;
      }

      return /\.[^0-9.]/.test(k.hostname) ? /(\s|^\.|\.$)/.test(k.hostname) ? "Hostname '" + k.href + "' contains whitespace in " + f : k.href.toLowerCase().replace(/\/+$/g, "") !== f.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + f + " doesn't match parsed href " + k.href : "SUCCESS" : "Invalid hostname '" + k.href + "' in " + f;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};
  var d = a["Text.URL.Validate"],
      f = a["Text.URL.Validate"],
      k = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a["Data.Show"],
      e = a["Data.String.NonEmpty.Internal"];
  a = new b.Show(function (m) {
    return b.show(e.showNonEmptyString)(m);
  });

  var c = function c(m) {
    return function (h) {
      var n = "SUCCESS" === h ? !0 : !1;

      if (n) {
        h = e.fromString(m);
        if (h instanceof g.Just) return new k.Right(h.value0);
        if (h instanceof g.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [h.constructor.name]);
      }

      if (!n) return new k.Left(h);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [n.constructor.name]);
    };
  };

  d.parsePublicURL = function (m) {
    var h = f._validateURL(!0)(m);

    return c(m)(h);
  };

  d.urlToNEString = function (m) {
    return m;
  };

  d.urlToString = function (m) {
    return e.toString(m);
  };

  d.showURL = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var d = a["Metajelo.Types"],
      f = a["Data.Bounded"],
      k = a["Data.Enum"],
      g = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Generic.Rep.Enum"],
      m = a["Data.Generic.Rep.Eq"],
      h = a["Data.Generic.Rep.Ord"],
      n = a["Data.Generic.Rep.Show"],
      w = a["Data.Ord"],
      r = a["Data.Show"],
      p = a["Data.String.NonEmpty.Internal"],
      z = a["Data.Symbol"],
      x = a["Text.URL.Validate"],
      t = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      C = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      A = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      q = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      v = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      E = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      y = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      F = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      D = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      I = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      u = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      M = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      G = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      S = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      P = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      J = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      W = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      K = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      O = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      da = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      R = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      V = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      aa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ba = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Z = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ea = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Y = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ha = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      L = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      H = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      U = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      B = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Q = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      N = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ca = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      qa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ta = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ja = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      la = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      oa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      pa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ua = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ha = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Na = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Pa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ta = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ja = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ua = function () {
    function l(Ba) {
      this.value0 = Ba;
    }

    l.create = function (Ba) {
      return new l(Ba);
    };

    return l;
  }(),
      T = function () {
    function l(Ba) {
      this.value0 = Ba;
    }

    l.create = function (Ba) {
      return new l(Ba);
    };

    return l;
  }(),
      na = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ea = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Xa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ga = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ya = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Va = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Wa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ia = function () {
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
      ra = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      xa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Fa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Aa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ka = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Oa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      La = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ma = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      X = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      fa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      sa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      va = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ya = new r.Show(function (l) {
    if (l instanceof na) return "commercial";
    if (l instanceof Ea) return "non-profit";
    if (l instanceof Xa) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [l.constructor.name]);
  }),
      Ca = new r.Show(function (l) {
    return "dataCustodian";
  }),
      za = new b.Generic(function (l) {
    if (l instanceof t) return new b.Inl(b.NoArguments.value);
    if (l instanceof C) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof A) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (l instanceof q) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (l instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (l instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (l instanceof y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (l instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (l instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (l instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (l instanceof u) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (l instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (l instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (l instanceof S) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return t.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return C.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inl) return A.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inl) return q.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return y.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return u.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return S.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [l.constructor.name]);
  }),
      $a = new r.Show(n.genericShow(za)(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Audiovisual";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Dataset";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Event";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Image";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "InteractiveResource";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Model";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "PhysicalObject";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "ResourceCollection";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Service";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Software";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Sound";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Text";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Workflow";
  })))(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      wa = new b.Generic(function (l) {
    if (l instanceof P) return new b.Inl(b.NoArguments.value);
    if (l instanceof J) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof W) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (l instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (l instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (l instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (l instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (l instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (l instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (l instanceof ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (l instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (l instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (l instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (l instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (l instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (l instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (l instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (l instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (l instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (l instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (l instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (l instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (l instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (l instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (l instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return P.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return J.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inl) return W.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inl) return K.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ba.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return B.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return la.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [l.constructor.name]);
  }),
      Ia = new r.Show(n.genericShow(wa)(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsCitedBy";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Cites";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsSupplementTo";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsContinuedBy";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Continues";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsPartOf";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "HasPart";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsReferencedBy";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "References";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Documents";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsCompiledBy";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Compiles";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "HasMetadata";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsMetadataFor";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "Reviews";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsReviewedBy";
  })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Da = new b.Generic(function (l) {
    if (l instanceof oa) return new b.Inl(b.NoArguments.value);
    if (l instanceof pa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof ua) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (l instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (l instanceof Na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (l instanceof Pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (l instanceof Ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (l instanceof Ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return oa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return pa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inl) return ua.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inl) return Na.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inl) return Pa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ta.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Ja.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [l.constructor.name]);
  }),
      ab = new r.Show(function (l) {
    return l instanceof Ja ? "Terms of Use" : n.genericShow(Da)(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Access";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Collection";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Data";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Metadata";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Preservation";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Submission";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Quality";
    })))(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(l);
  }),
      bb = new b.Generic(function (l) {
    if (l instanceof Ua) return new b.Inl(l.value0);
    if (l instanceof T) return new b.Inr(l.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return new Ua(l.value0);
    if (l instanceof b.Inr) return new T(l.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [l.constructor.name]);
  }),
      Za = new r.Show(n.genericShow(bb)(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsArgument(p.showNonEmptyString))(new z.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(n.genericShowConstructor(n.genericShowArgsArgument(x.showURL))(new z.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      Qa = new b.Generic(function (l) {
    if (l instanceof na) return new b.Inl(b.NoArguments.value);
    if (l instanceof Ea) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof Xa) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return na.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return Ea.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr) return Xa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [l.constructor.name]);
  }),
      Ra = new b.Generic(function (l) {
    return b.NoArguments.value;
  }, function (l) {
    return Ga.value;
  }),
      Sa = new b.Generic(function (l) {
    if (l instanceof Ya) return new b.Inl(b.NoArguments.value);
    if (l instanceof Va) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof Wa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (l instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (l instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (l instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (l instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (l instanceof xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (l instanceof Fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (l instanceof Aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (l instanceof Ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (l instanceof Oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (l instanceof La) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (l instanceof Ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (l instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (l instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (l instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (l instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return Ya.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return Va.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inl) return Wa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inl) return ka.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inl) return ma.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ra.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return xa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Fa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Aa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ka.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Oa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return La.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ma.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return va.value;
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [l.constructor.name]);
  }),
      mb = new r.Show(function (l) {
    return l instanceof Va ? "arXiv" : l instanceof Wa ? "bibcode" : n.genericShow(Sa)(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "ARK";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "ArXiv";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Bibcode";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "DOI";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "EAN13";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "EISSN";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "Handle";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "IGSN";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "ISBN";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "ISSN";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "ISTC";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "LISSN";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "LSID";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "PMID";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "PURL";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "UPC";
    })))(n.genericShowSum(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "URL";
    })))(n.genericShowConstructor(n.genericShowArgsNoArguments)(new z.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(l);
  }),
      nb = new g.Eq(m.genericEq(za)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments)))))))))))))))),
      cb = new w.Ord(function () {
    return nb;
  }, function (l) {
    return function (Ba) {
      return h.genericCompare(za)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))))))))(l)(Ba);
    };
  }),
      ob = new g.Eq(m.genericEq(wa)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments))))))))))))))))))))))))))),
      db = new w.Ord(function () {
    return ob;
  }, function (l) {
    return function (Ba) {
      return h.genericCompare(wa)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments))))))))))))))))))))))))))(l)(Ba);
    };
  }),
      eb = new g.Eq(m.genericEq(Da)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments)))))))))),
      fb = new w.Ord(function () {
    return eb;
  }, function (l) {
    return function (Ba) {
      return h.genericCompare(Da)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))(l)(Ba);
    };
  }),
      pb = new g.Eq(m.genericEq(Qa)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments))))),
      gb = new w.Ord(function () {
    return pb;
  }, function (l) {
    return function (Ba) {
      return h.genericCompare(Qa)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments))))(l)(Ba);
    };
  }),
      hb = new g.Eq(m.genericEq(Ra)(m.genericEqConstructor(m.genericEqNoArguments))),
      ib = new w.Ord(function () {
    return hb;
  }, function (l) {
    return function (Ba) {
      return h.genericCompare(Ra)(h.genericOrdConstructor(h.genericOrdNoArguments))(l)(Ba);
    };
  }),
      qb = new g.Eq(m.genericEq(Sa)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments)))))))))))))))))))),
      jb = new w.Ord(function () {
    return qb;
  }, function (l) {
    return function (Ba) {
      return h.genericCompare(Sa)(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdSum(h.genericOrdConstructor(h.genericOrdNoArguments))(h.genericOrdConstructor(h.genericOrdNoArguments)))))))))))))))))))(l)(Ba);
    };
  }),
      rb = new k.Enum(function () {
    return cb;
  }, c.genericPred(za)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(za)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      sb = new k.Enum(function () {
    return db;
  }, c.genericPred(wa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(wa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      tb = new k.Enum(function () {
    return fb;
  }, c.genericPred(Da)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(Da)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      ub = new k.Enum(function () {
    return gb;
  }, c.genericPred(Qa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(Qa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      vb = new k.Enum(function () {
    return ib;
  }, c.genericPred(Ra)(c.genericEnumConstructor(c.genericEnumNoArguments)), c.genericSucc(Ra)(c.genericEnumConstructor(c.genericEnumNoArguments))),
      wb = new k.Enum(function () {
    return jb;
  }, c.genericPred(Sa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(Sa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      xb = new f.Bounded(function () {
    return cb;
  }, e.genericBottom(za)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(za)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      yb = new f.Bounded(function () {
    return db;
  }, e.genericBottom(wa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(wa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      kb = new f.Bounded(function () {
    return fb;
  }, e.genericBottom(Da)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Da)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      zb = new k.SmallBounded(function () {
    return kb;
  }),
      Ab = new f.Bounded(function () {
    return gb;
  }, e.genericBottom(Qa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Qa)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      lb = new f.Bounded(function () {
    return ib;
  }, e.genericBottom(Ra)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(Ra)(e.genericTopConstructor(e.genericTopNoArguments))),
      Bb = new k.SmallBounded(function () {
    return lb;
  }),
      Cb = new f.Bounded(function () {
    return jb;
  }, e.genericBottom(Sa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Sa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      Db = new k.BoundedEnum(function () {
    return xb;
  }, function () {
    return rb;
  }, c.genericCardinality(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericFromEnum(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericToEnum(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))),
      Eb = new k.BoundedEnum(function () {
    return yb;
  }, function () {
    return sb;
  }, c.genericCardinality(wa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericFromEnum(wa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericToEnum(wa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Fb = new k.BoundedEnum(function () {
    return kb;
  }, function () {
    return tb;
  }, c.genericCardinality(Da)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericFromEnum(Da)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericToEnum(Da)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))),
      Gb = new k.BoundedEnum(function () {
    return Ab;
  }, function () {
    return ub;
  }, c.genericCardinality(Qa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericFromEnum(Qa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericToEnum(Qa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))),
      Hb = new k.BoundedEnum(function () {
    return lb;
  }, function () {
    return vb;
  }, c.genericCardinality(Ra)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericFromEnum(Ra)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericToEnum(Ra)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))),
      Ib = new k.BoundedEnum(function () {
    return Cb;
  }, function () {
    return wb;
  }, c.genericCardinality(Sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericFromEnum(Sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericToEnum(Sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))));

  d.ARK = Ya;
  d.ArXiv = Va;
  d.Bibcode = Wa;
  d.DOI = ia;
  d.EAN13 = ka;
  d.EISSN = ma;
  d.Handle = ra;
  d.IGSN = xa;
  d.ISBN = Fa;
  d.ISSN = Aa;
  d.ISTC = Ka;
  d.LISSN = Oa;
  d.LSID = La;
  d.PMID = Ma;
  d.PURL = X;
  d.UPC = fa;
  d.URL = sa;
  d.URN = va;
  d.Audiovisual = t;
  d.Dataset = C;
  d.Event = A;
  d.Image = q;
  d.InteractiveResource = v;
  d.Model = E;
  d.PhysicalObject = y;
  d.ResourceCollection = F;
  d.Service = D;
  d.Software = I;
  d.Sound = u;
  d.Text = M;
  d.Workflow = G;
  d.Other = S;
  d.IsCitedBy = P;
  d.Cites = J;
  d.IsSupplementTo = W;
  d.IsSupplementedBy = K;
  d.IsContinuedBy = O;
  d.Continues = da;
  d.IsNewVersionOf = R;
  d.IsPreviousVersionOf = V;
  d.IsPartOf = aa;
  d.HasPart = ba;
  d.IsReferencedBy = Z;
  d.References = ea;
  d.IsDocumentedBy = Y;
  d.Documents = ha;
  d.IsCompiledBy = L;
  d.Compiles = H;
  d.IsVariantFormOf = U;
  d.IsOriginalFormOf = B;
  d.IsIdenticalTo = Q;
  d.HasMetadata = N;
  d.IsMetadataFor = ca;
  d.Reviews = qa;
  d.IsReviewedBy = ta;
  d.IsDerivedFrom = ja;
  d.IsSourceOf = la;
  d.Commercial = na;
  d.NonProfit = Ea;
  d.Governmental = Xa;
  d.DataCustodian = Ga;
  d.Access = oa;
  d.Collection = pa;
  d.Data = ua;
  d.Metadata = Ha;
  d.Preservation = Na;
  d.Submission = Pa;
  d.Quality = Ta;
  d.TermsOfUse = Ja;
  d.FreeTextPolicy = Ua;
  d.RefPolicy = T;
  d.showIdentifierType = mb;
  d.boundedEnumIdentifierType = Ib;
  d.showResourceTypeGeneral = $a;
  d.boundedEnumResourceTypeGeneral = Db;
  d.showRelationType = Ia;
  d.boundedEnumRelationType = Eb;
  d.showInstitutionType = ya;
  d.boundedEnumInstitutionType = Gb;
  d.eqInstitutionContactType = hb;
  d.showInstitutionContactType = Ca;
  d.boundedEnumInstitutionContactType = Hb;
  d.smallBoundedInstitutionContactType = Bb;
  d.showPolicyType = ab;
  d.eqPolicyType = eb;
  d.boundedEnumPolicyType = Fb;
  d.smallBoundedPolicyType = zb;
  d.showPolicy = Za;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var d = a["Text.Parsing.StringParser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      m = a["Control.Monad.Rec.Class"],
      h = a["Control.Plus"],
      n = a["Data.Bifunctor"],
      w = a["Data.Boolean"],
      r = a["Data.Either"],
      p = a["Data.Functor"];
  a = a["Data.Show"];

  var z = function () {
    function F(D) {
      this.value0 = D;
    }

    F.create = function (D) {
      return new F(D);
    };

    return F;
  }();

  a = new a.Show(function (F) {
    return F.value0;
  });

  var x = new p.Functor(function (F) {
    return function (D) {
      var I = p.map(r.functorEither)(function (u) {
        return {
          result: F(u.result),
          suffix: u.suffix
        };
      });
      return function (u) {
        return I(D(u));
      };
    };
  }),
      t = function t(F) {
    return function (D) {
      return new r.Left({
        pos: D.pos,
        error: new z(F)
      });
    };
  },
      C = new b.Apply(function () {
    return x;
  }, function (F) {
    return function (D) {
      return function (I) {
        return e.bind(r.bindEither)(F(I))(function (u) {
          return e.bind(r.bindEither)(D(u.suffix))(function (M) {
            return g.pure(r.applicativeEither)({
              result: u.result(M.result),
              suffix: M.suffix
            });
          });
        });
      };
    };
  }),
      A = new e.Bind(function () {
    return C;
  }, function (F) {
    return function (D) {
      return function (I) {
        return e.bind(r.bindEither)(F(I))(function (u) {
          return D(u.result)(u.suffix);
        });
      };
    };
  }),
      q = new g.Applicative(function () {
    return C;
  }, function (F) {
    return function (D) {
      return new r.Right({
        result: F,
        suffix: D
      });
    };
  }),
      v = new c.Monad(function () {
    return q;
  }, function () {
    return A;
  });

  b = new m.MonadRec(function () {
    return v;
  }, function (F) {
    return function (D) {
      var I = function I(u) {
        if (u.result instanceof m.Loop) return new m.Loop({
          state: u.result.value0,
          str: u.suffix
        });
        if (u.result instanceof m.Done) return new m.Done({
          result: u.result.value0,
          suffix: u.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [u.constructor.name]);
      };

      return function (u) {
        return m.tailRecM(m.monadRecEither)(function (M) {
          return p.map(r.functorEither)(I)(F(M.state)(M.str));
        })({
          state: D,
          str: u
        });
      };
    };
  });
  var E = new f.Alt(function () {
    return x;
  }, function (F) {
    return function (D) {
      return function (I) {
        var u = F(I);

        if (u instanceof r.Left) {
          if (I.pos === u.value0.pos) return D(I);
          if (w.otherwise) return new r.Left({
            error: u.value0.error,
            pos: u.value0.pos
          });
        }

        return u;
      };
    };
  }),
      y = new h.Plus(function () {
    return E;
  }, t("No alternative"));
  f = new k.Alternative(function () {
    return q;
  }, function () {
    return y;
  });
  d.ParseError = z;

  d.runParser = function (F) {
    return function (D) {
      return n.bimap(r.bifunctorEither)(function (I) {
        return I.error;
      })(function (I) {
        return I.result;
      })(F({
        str: D,
        pos: 0
      }));
    };
  };

  d.fail = t;

  d["try"] = function (F) {
    return function (D) {
      return n.lmap(r.bifunctorEither)(function (I) {
        return {
          pos: D.pos,
          error: I.error
        };
      })(F(D));
    };
  };

  d.showParseError = a;
  d.functorParser = x;
  d.applyParser = C;
  d.applicativeParser = q;
  d.altParser = E;
  d.alternativeParser = f;
  d.bindParser = A;
  d.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var d = a["Text.Parsing.StringParser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Functor"],
      c = a["Data.NonEmpty"],
      m = a["Data.Unit"],
      h = a["Text.Parsing.StringParser"],
      n = a["Data.List"].manyRec(h.monadRecParser)(h.alternativeParser),
      w = function w(r) {
    return function (p) {
      return new c.NonEmpty(r, p);
    };
  };

  d.many = n;

  d.many1 = function (r) {
    return g.apply(h.applyParser)(e.map(h.functorParser)(w)(r))(n(r));
  };

  d.withError = function (r) {
    return function (p) {
      return f.alt(h.altParser)(r)(h.fail(p));
    };
  };

  d.optional = function (r) {
    return f.alt(h.altParser)(b.bind(h.bindParser)(r)(function (p) {
      return k.pure(h.applicativeParser)(m.unit);
    }))(k.pure(h.applicativeParser)(m.unit));
  };

  d.sepBy1 = function (r) {
    return function (p) {
      return b.bind(h.bindParser)(r)(function (z) {
        return b.bind(h.bindParser)(n(g.applySecond(h.applyParser)(p)(r)))(function (x) {
          return k.pure(h.applicativeParser)(w(z)(x));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var d = a["Text.Parsing.StringParser.CodePoints"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Char"],
      b = a["Data.Either"],
      e = a["Data.Enum"],
      c = a["Data.Maybe"],
      m = a["Data.Show"],
      h = a["Data.String.CodePoints"],
      n = a["Data.Unit"],
      w = a["Text.Parsing.StringParser"],
      r = a["Text.Parsing.StringParser.Combinators"],
      p = function () {
    var x = function () {
      var t = e.fromEnum(h.boundedEnumCodePoint);
      return function (C) {
        return g.fromCharCode(t(C));
      };
    }();

    return function (t) {
      var C = h.codePointAt(t.pos)(t.str);

      if (C instanceof c.Just) {
        var A = x(C.value0);
        if (A instanceof c.Just) return new b.Right({
          result: A.value0,
          suffix: {
            str: t.str,
            pos: t.pos + 1 | 0
          }
        });
        if (A instanceof c.Nothing) return new b.Left({
          pos: t.pos,
          error: w.ParseError.create("CodePoint " + (m.show(h.showCodePoint)(C.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [A.constructor.name]);
      }

      if (C instanceof c.Nothing) return new b.Left({
        pos: t.pos,
        error: new w.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [C.constructor.name]);
    };
  }(),
      z = function z(x) {
    return w["try"](k.bind(w.bindParser)(p)(function (t) {
      return x(t) ? f.pure(w.applicativeParser)(t) : w.fail("Character " + (m.show(m.showChar)(t) + " did not satisfy predicate"));
    }));
  };

  d.eof = function (x) {
    return x.pos < h.length(x.str) ? new b.Left({
      pos: x.pos,
      error: new w.ParseError("Expected EOF")
    }) : new b.Right({
      result: n.unit,
      suffix: x
    });
  };

  d.satisfy = z;

  d["char"] = function (x) {
    return r.withError(z(function (t) {
      return t === x;
    }))("Could not match character " + m.show(m.showChar)(x));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var d = a["Text.Email.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Char"],
      c = a["Data.Foldable"],
      m = a["Data.Functor"],
      h = a["Data.List.Types"],
      n = a["Data.Maybe"],
      w = a["Data.Monoid"],
      r = a["Data.String.CodeUnits"],
      p = a["Data.String.Pattern"],
      z = a["Data.Unit"],
      x = a["Text.Parsing.StringParser"],
      t = a["Text.Parsing.StringParser.CodePoints"],
      C = a["Text.Parsing.StringParser.Combinators"],
      A = function (H) {
    var U = n.fromJust();
    return function (B) {
      return U(e.fromCharCode(B));
    };
  }(),
      q = function q(H) {
    return m.map(x.functorParser)(function () {
      var U = c.fold(h.foldableNonEmptyList)(w.monoidString),
          B = m.map(h.functorNonEmptyList)(r.singleton);
      return function (Q) {
        return U(B(Q));
      };
    }())(C.many1(t.satisfy(H)));
  },
      v = function v(H) {
    return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(H))(function () {
      return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(E(H)))(function () {
        return k.pure(x.applicativeParser)(z.unit);
      });
    });
  },
      E = function E(H) {
    return f.alt(x.altParser)(v(H))(k.pure(x.applicativeParser)(z.unit));
  },
      y = function y(H) {
    return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t.satisfy(H)))(function () {
      return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(E(t.satisfy(H))))(function () {
        return k.pure(x.applicativeParser)(z.unit);
      });
    });
  },
      F = t["char"](A(0)),
      D = t["char"]("\n");

  a = function a(H) {
    return " " === H || "\t" === H;
  };

  var I = t.satisfy(a),
      u = y(a),
      M = function M(H) {
    return function (U) {
      return function (B) {
        return B >= H && B <= U;
      };
    };
  };

  a = M(A(33))(A(126));

  var G = t.satisfy(a),
      S = function S(H) {
    return function (U) {
      return r.contains(p.Pattern(r.singleton(U)))(H);
    };
  },
      P = function P(H) {
    return M(A(1))(A(8))(H) || M(A(14))(A(31))(H) || S("\x0B\f\x7F")(H);
  },
      J = function J(H) {
    return M(A(33))(A(39))(H) || M(A(42))(A(91))(H) || M(A(93))(A(126))(H) || P(H);
  },
      W = function W(H) {
    return M(A(33))(A(90))(H) || M(A(94))(A(126))(H) || P(H);
  },
      K = t.satisfy(P),
      O = t["char"]("\r"),
      da = m["void"](x.functorParser)(g.applySecond(x.applyParser)(O)(D)),
      R = function () {
    var H = v(g.applySecond(x.applyParser)(da)(u)),
        U = g.applySecond(x.applyParser)(u)(C.optional(g.applySecond(x.applyParser)(da)(u)));
    return f.alt(x.altParser)(U)(H);
  }(),
      V = function () {
    var H = b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t["char"]("\\")))(function () {
      return f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(G)(I))(D))(O))(K))(F);
    });
    return b.bind(x.bindParser)(H)(function (U) {
      return k.pure(x.applicativeParser)("\\" + r.singleton(U));
    });
  }(),
      aa = f.alt(x.altParser)(q(function (H) {
    return S(r.singleton(A(33)))(H) || M(A(35))(A(91))(H) || M(A(93))(A(126))(H) || P(H);
  }))(V),
      ba = function () {
    var H = b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t["char"]('"')))(function () {
      return b.bind(x.bindParser)(C.many(g.applySecond(x.applyParser)(C.optional(R))(aa)))(function (U) {
        return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(C.optional(R)))(function () {
          return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t["char"]('"')))(function () {
            return k.pure(x.applicativeParser)(U);
          });
        });
      });
    });
    return m.map(x.functorParser)(function (U) {
      return '"' + (c.fold(h.foldableList)(w.monoidString)(U) + '"');
    })(H);
  }(),
      Z = b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t["char"]("(")))(function () {
    return b.discard(b.discardUnit)(x.bindParser)(E(f.alt(x.altParser)(f.alt(x.altParser)(f.alt(x.altParser)(y(J))(m["void"](x.functorParser)(V)))(Z))(R)))(function () {
      return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t["char"](")")))(function () {
        return k.pure(x.applicativeParser)(z.unit);
      });
    });
  }),
      ea = E(f.alt(x.altParser)(Z)(R));

  a = b.discard(b.discardUnit)(x.bindParser)(C.optional(ea))(function () {
    return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t["char"]("[")))(function () {
      return b.bind(x.bindParser)(C.many(g.applySecond(x.applyParser)(C.optional(R))(q(W))))(function (H) {
        return b.discard(b.discardUnit)(x.bindParser)(C.optional(R))(function () {
          return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(t["char"]("]")))(function () {
            return b.discard(b.discardUnit)(x.bindParser)(C.optional(ea))(function () {
              return k.pure(x.applicativeParser)("[" + (c.fold(h.foldableList)(w.monoidString)(H) + "]"));
            });
          });
        });
      });
    });
  });

  var Y = function () {
    return q(function (H) {
      return "0" <= H && "9" >= H || "a" <= H && "z" >= H || "A" <= H && "Z" >= H || S("!#$%&'*+/=?^_`{|}~-")(H);
    });
  }(),
      ha = function () {
    var H = b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(C.optional(ea)))(function () {
      return b.bind(x.bindParser)(f.alt(x.altParser)(Y)(ba))(function (U) {
        return b.discard(b.discardUnit)(x.bindParser)(m["void"](x.functorParser)(C.optional(ea)))(function () {
          return k.pure(x.applicativeParser)(U);
        });
      });
    });
    H = C.sepBy1(H)(t["char"]("."));
    return m.map(x.functorParser)(c.intercalate(h.foldableNonEmptyList)(w.monoidString)("."))(H);
  }(),
      L = f.alt(x.altParser)(ha)(a);

  a = b.bind(x.bindParser)(ha)(function (H) {
    return b.bind(x.bindParser)(t["char"]("@"))(function () {
      return b.bind(x.bindParser)(L)(function (U) {
        return b.bind(x.bindParser)(t.eof)(function () {
          return k.pure(x.applicativeParser)({
            localPart: H,
            domainPart: U
          });
        });
      });
    });
  });
  d.addrSpec = a;

  d.toString = function (H) {
    return H.localPart + ("@" + H.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var d = a["Text.Email.Validate"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = a["Data.Show"],
      b = a["Text.Email.Parser"],
      e = a["Text.Parsing.StringParser"];

  a = function () {
    var c = f.lmap(k.bifunctorEither)(g.show(e.showParseError));
    return function (m) {
      m = e.runParser(b.addrSpec)(m);
      return c(m);
    };
  }();

  d.validate = a;
})(PS);

(function (a) {
  a["Metajelo.Validation"] = a["Metajelo.Validation"] || {};

  var d = a["Metajelo.Validation"],
      f = a["Control.Category"],
      k = a["Data.Bifunctor"],
      g = a["Data.Either"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      c = a["Data.String.Common"],
      m = a["Data.String.NonEmpty.Internal"],
      h = a["Formless.Validation"],
      n = a["Text.Email.Validate"],
      w = function () {
    function q() {}

    q.value = new q();
    return q;
  }(),
      r = function () {
    function q(v) {
      this.value0 = v;
    }

    q.create = function (v) {
      return new q(v);
    };

    return q;
  }(),
      p = function () {
    function q(v) {
      this.value0 = v;
    }

    q.create = function (v) {
      return new q(v);
    };

    return q;
  }(),
      z = function () {
    function q(v) {
      this.value0 = v;
    }

    q.create = function (v) {
      return new q(v);
    };

    return q;
  }(),
      x = function () {
    function q(v) {
      this.value0 = v;
    }

    q.create = function (v) {
      return new q(v);
    };

    return q;
  }(),
      t = function () {
    function q(v) {
      this.value0 = v;
    }

    q.create = function (v) {
      return new q(v);
    };

    return q;
  }(),
      C = function () {
    function q(v, E) {
      this.value0 = v;
      this.value1 = E;
    }

    q.create = function (v) {
      return function (E) {
        return new q(v, E);
      };
    };

    return q;
  }(),
      A = function A(q) {
    this.toText = q;
  };

  a = new A(f.identity(f.categoryFn));
  A = new A(function (q) {
    if (q instanceof w) return "This field is required.";
    if (q instanceof p) return "Invalid input: " + q.value0;
    if (q instanceof r) return "Email validation error: " + q.value0;
    if (q instanceof z) return "You must enter at least " + (e.show(e.showInt)(q.value0) + " characters.");
    if (q instanceof x) return "You must enter less than " + (e.show(e.showInt)(q.value0) + " characters.");
    if (q instanceof t) return 'Could not parse "' + (q.value0 + '" to a valid integer.');
    if (q instanceof C) return 'This field contains "' + (q.value1 + ('" but must be equal to "' + (q.value0 + '" to validate.')));
    throw Error("Failed pattern match at Metajelo.Validation (line 35, column 1 - line 42, column 126): " + [q.constructor.name]);
  });

  d.toText = function (q) {
    return q.toText;
  };

  d.dummy = function (q) {
    return h.hoistFn_(q)(f.identity(f.categoryFn));
  };

  d.emailFormat = function (q) {
    return h.hoistFnE_(q)(function (v) {
      return k.lmap(g.bifunctorEither)(function (E) {
        return new r(E);
      })(n.validate(v));
    });
  };

  d.readNEStringEi = function (q) {
    q = m.fromString(c.trim(q));
    if (q instanceof b.Just) return new g.Right(q.value0);
    if (q instanceof b.Nothing) return new g.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [q.constructor.name]);
  };

  d.toTextFieldError = A;
  d.toTextString = a;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};
  var d = a["Metajelo.XPaths.Read"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a.Effect,
      e = a["Effect.Exception"],
      c = a["Metajelo.Types"];

  d.readIdentifierType = function (m) {
    return "ARK" === m ? f.pure(k.applicativeEither)(c.ARK.value) : "arXiv" === m ? f.pure(k.applicativeEither)(c.ArXiv.value) : "bibcode" === m ? f.pure(k.applicativeEither)(c.Bibcode.value) : "DOI" === m ? f.pure(k.applicativeEither)(c.DOI.value) : "EAN13" === m ? f.pure(k.applicativeEither)(c.EAN13.value) : "EISSN" === m ? f.pure(k.applicativeEither)(c.EISSN.value) : "Handle" === m ? f.pure(k.applicativeEither)(c.Handle.value) : "IGSN" === m ? f.pure(k.applicativeEither)(c.IGSN.value) : "ISBN" === m ? f.pure(k.applicativeEither)(c.ISBN.value) : "ISSN" === m ? f.pure(k.applicativeEither)(c.ISSN.value) : "ISTC" === m ? f.pure(k.applicativeEither)(c.ISTC.value) : "LISSN" === m ? f.pure(k.applicativeEither)(c.LISSN.value) : "LSID" === m ? f.pure(k.applicativeEither)(c.LSID.value) : "PMID" === m ? f.pure(k.applicativeEither)(c.PMID.value) : "PURL" === m ? f.pure(k.applicativeEither)(c.PURL.value) : "UPC" === m ? f.pure(k.applicativeEither)(c.UPC.value) : "URL" === m ? f.pure(k.applicativeEither)(c.URL.value) : "URN" === m ? f.pure(k.applicativeEither)(c.URN.value) : k.Left.create("Unknown IdentifierType: '" + (m + "'"));
  };

  d.readRelationType = function (m) {
    return "IsCitedBy" === m ? f.pure(k.applicativeEither)(c.IsCitedBy.value) : "Cites" === m ? f.pure(k.applicativeEither)(c.Cites.value) : "IsSupplementTo" === m ? f.pure(k.applicativeEither)(c.IsSupplementTo.value) : "IsSupplementedBy" === m ? f.pure(k.applicativeEither)(c.IsSupplementedBy.value) : "IsContinuedBy" === m ? f.pure(k.applicativeEither)(c.IsContinuedBy.value) : "Continues" === m ? f.pure(k.applicativeEither)(c.Continues.value) : "IsNewVersionOf" === m ? f.pure(k.applicativeEither)(c.IsNewVersionOf.value) : "IsPreviousVersionOf" === m ? f.pure(k.applicativeEither)(c.IsPreviousVersionOf.value) : "IsPartOf" === m ? f.pure(k.applicativeEither)(c.IsPartOf.value) : "HasPart" === m ? f.pure(k.applicativeEither)(c.HasPart.value) : "IsReferencedBy" === m ? f.pure(k.applicativeEither)(c.IsReferencedBy.value) : "References" === m ? f.pure(k.applicativeEither)(c.References.value) : "IsDocumentedBy" === m ? f.pure(k.applicativeEither)(c.IsDocumentedBy.value) : "Documents" === m ? f.pure(k.applicativeEither)(c.Documents.value) : "IsCompiledBy" === m ? f.pure(k.applicativeEither)(c.IsCompiledBy.value) : "Compiles" === m ? f.pure(k.applicativeEither)(c.Compiles.value) : "IsVariantFormOf" === m ? f.pure(k.applicativeEither)(c.IsVariantFormOf.value) : "IsOriginalFormOf" === m ? f.pure(k.applicativeEither)(c.IsOriginalFormOf.value) : "IsIdenticalTo" === m ? f.pure(k.applicativeEither)(c.IsIdenticalTo.value) : "HasMetadata" === m ? f.pure(k.applicativeEither)(c.HasMetadata.value) : "IsMetadataFor" === m ? f.pure(k.applicativeEither)(c.IsMetadataFor.value) : "Reviews" === m ? f.pure(k.applicativeEither)(c.Reviews.value) : "IsReviewedBy" === m ? f.pure(k.applicativeEither)(c.IsReviewedBy.value) : "IsDerivedFrom" === m ? f.pure(k.applicativeEither)(c.IsDerivedFrom.value) : "IsSourceOf" === m ? f.pure(k.applicativeEither)(c.IsSourceOf.value) : k.Left.create("Unknown RelationType: '" + (m + "'"));
  };

  d.readResourceTypeGeneral = function (m) {
    return "Audiovisual" === m ? f.pure(k.applicativeEither)(c.Audiovisual.value) : "Dataset" === m ? f.pure(k.applicativeEither)(c.Dataset.value) : "Event" === m ? f.pure(k.applicativeEither)(c.Event.value) : "Image" === m ? f.pure(k.applicativeEither)(c.Image.value) : "InteractiveResource" === m ? f.pure(k.applicativeEither)(c.InteractiveResource.value) : "Model" === m ? f.pure(k.applicativeEither)(c.Model.value) : "PhysicalObject" === m ? f.pure(k.applicativeEither)(c.PhysicalObject.value) : "ResourceCollection" === m ? f.pure(k.applicativeEither)(c.ResourceCollection.value) : "Service" === m ? f.pure(k.applicativeEither)(c.Service.value) : "Software" === m ? f.pure(k.applicativeEither)(c.Software.value) : "Sound" === m ? f.pure(k.applicativeEither)(c.Sound.value) : "Text" === m ? f.pure(k.applicativeEither)(c.Text.value) : "Workflow" === m ? f.pure(k.applicativeEither)(c.Workflow.value) : "Other" === m ? f.pure(k.applicativeEither)(c.Other.value) : k.Left.create("Unknown ResourceTypeGeneral: '" + (m + "'"));
  };

  d.readInstitutionType = function (m) {
    return "commercial" === m ? f.pure(k.applicativeEither)(c.Commercial.value) : "non-profit" === m ? f.pure(k.applicativeEither)(c.NonProfit.value) : "governmental" === m ? f.pure(k.applicativeEither)(c.Governmental.value) : k.Left.create("Unknown InstitutionType: '" + (m + "'"));
  };

  d.readInstitutionContactType = function (m) {
    return "dataCustodian" === m ? f.pure(k.applicativeEither)(new g.Just(c.DataCustodian.value)) : "" === m ? f.pure(k.applicativeEither)(g.Nothing.value) : k.Left.create("Unknown InstitutionContactType: '" + (m + "'"));
  };

  d.readPolicyType = function (m) {
    return "Access" === m ? f.pure(k.applicativeEither)(new g.Just(c.Access.value)) : "Collection" === m ? f.pure(k.applicativeEither)(new g.Just(c.Collection.value)) : "Data" === m ? f.pure(k.applicativeEither)(new g.Just(c.Data.value)) : "Metadata" === m ? f.pure(k.applicativeEither)(new g.Just(c.Metadata.value)) : "Preservation" === m ? f.pure(k.applicativeEither)(new g.Just(c.Preservation.value)) : "Submission" === m ? f.pure(k.applicativeEither)(new g.Just(c.Submission.value)) : "Quality" === m ? f.pure(k.applicativeEither)(new g.Just(c.Quality.value)) : "Terms of Use" === m ? f.pure(k.applicativeEither)(new g.Just(c.TermsOfUse.value)) : "" === m ? f.pure(k.applicativeEither)(g.Nothing.value) : k.Left.create("Unknown PolicyType: '" + (m + "'"));
  };

  d.readBoolean = function (m) {
    return "0" === m ? f.pure(k.applicativeEither)(!1) : "1" === m ? f.pure(k.applicativeEither)(!0) : "false" === m ? f.pure(k.applicativeEither)(!1) : "true" === m ? f.pure(k.applicativeEither)(!0) : k.Left.create("Invalid xs:boolean value: '" + (m + "'"));
  };

  d.rightOrThrow = function (m) {
    if (m instanceof k.Right) return f.pure(b.applicativeEffect)(m.value0);
    if (m instanceof k.Left) return e["throw"](m.value0);
    throw Error("Failed pattern match at Metajelo.XPaths.Read (line 444, column 19 - line 446, column 24): " + [m.constructor.name]);
  };
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var d = a["Metajelo.FormUtil"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      m = a["Control.Applicative"],
      h = a["Control.Apply"],
      n = a["Control.Bind"],
      w = a["Control.Cofree"],
      r = a["Data.Array"],
      p = a["Data.Array.NonEmpty"],
      z = a["Data.Bounded"],
      x = a["Data.Date"],
      t = a["Data.Date.Component"],
      C = a["Data.DateTime"],
      A = a["Data.Either"],
      q = a["Data.Enum"],
      v = a["Data.Eq"],
      E = a["Data.Foldable"],
      y = a["Data.Formatter.DateTime"],
      F = a["Data.Functor"],
      D = a["Data.Generic.Rep"],
      I = a["Data.Generic.Rep.Bounded"],
      u = a["Data.Generic.Rep.Enum"],
      M = a["Data.Generic.Rep.Eq"],
      G = a["Data.Generic.Rep.Ord"],
      S = a["Data.Generic.Rep.Show"],
      P = a["Data.Maybe"],
      J = a["Data.Monoid"],
      W = a["Data.Ord"],
      K = a["Data.Profunctor.Strong"],
      O = a["Data.Semigroup"],
      da = a["Data.Show"],
      R = a["Data.String.Common"],
      V = a["Data.String.NonEmpty.Internal"],
      aa = a["Data.Symbol"],
      ba = a["Data.Time"],
      Z = a["Data.Time.Component"],
      ea = a["Data.Traversable"],
      Y = a["Data.Tuple"],
      ha = a["Data.Unfoldable1"],
      L = a["Formless.Internal.Transform"],
      H = a["Formless.Query"],
      U = a["Formless.Retrieve"],
      B = a["Formless.Types.Query"],
      Q = a["Metajelo.Types"],
      N = a["Metajelo.Validation"],
      ca = a["Metajelo.XPaths.Read"],
      qa = a["Text.URL.Validate"],
      ta = function () {
    function X() {}

    X.value = new X();
    return X;
  }(),
      ja = function () {
    function X() {}

    X.value = new X();
    return X;
  }(),
      la = function () {
    function X(fa) {
      this.value0 = fa;
    }

    X.create = function (fa) {
      return new X(fa);
    };

    return X;
  }(),
      oa = function () {
    function X(fa) {
      this.value0 = fa;
    }

    X.create = function (fa) {
      return new X(fa);
    };

    return X;
  }(),
      pa = function pa(X, fa, sa) {
    this.fromOptionValue = X;
    this.toOptionLabel = fa;
    this.toOptionValue = sa;
  },
      ua = function ua(X) {
    if (X instanceof la || X instanceof oa) return X.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 286, column 1 - line 286, column 34): " + [X.constructor.name]);
  },
      Ha = function Ha(X) {
    return e.input(k.widgetLiftWidget)([c.value(X), F.map(g.functorProps)(c.unsafeTargetValue)(c.onChange)]);
  },
      Na = function Na(X) {
    return n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(X)(function (fa) {
      return m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))(V.fromString(R.trim(fa)));
    });
  },
      Pa = function Pa(X) {
    return function (fa) {
      return fa < X ? [] : r.range(X)(fa);
    };
  },
      Ta = function Ta(X) {
    return "FreeTextPolicy" === X ? m.pure(A.applicativeEither)(ta.value) : "RefPolicy" === X ? m.pure(A.applicativeEither)(ja.value) : A.Left.create("Unknown Policy: '" + (X + "'"));
  },
      Ja = function Ja(X) {
    return function (fa) {
      return E.fold(E.foldableMaybe)(J.monoidString)(F.map(P.functorMaybe)(da.show(X))(fa));
    };
  };

  a = new pa(function (X) {
    return P.fromJust()(A.hush(ca.readResourceTypeGeneral(X)));
  }, da.show(Q.showResourceTypeGeneral), da.show(Q.showResourceTypeGeneral));

  var Ua = new pa(function (X) {
    return P.fromJust()(A.hush(ca.readRelationType(X)));
  }, da.show(Q.showRelationType), da.show(Q.showRelationType)),
      T = new pa(function (X) {
    return P.fromJust()(A.hush(ca.readInstitutionType(X)));
  }, da.show(Q.showInstitutionType), da.show(Q.showInstitutionType)),
      na = new pa(function (X) {
    return P.fromJust()(A.hush(ca.readIdentifierType(X)));
  }, da.show(Q.showIdentifierType), da.show(Q.showIdentifierType)),
      Ea = function Ea(X) {
    return X instanceof la ? !0 : !1;
  },
      Xa = function (X) {
    return function (fa) {
      return function (sa) {
        return function (va) {
          return function (ya) {
            return function (Ca) {
              return function (za) {
                return new C.DateTime(x.canonicalDate(P.fromMaybe(z.bottom(t.boundedYear))(q.toEnum(t.boundedEnumYear)(X)))(P.fromMaybe(z.bottom(t.boundedMonth))(q.toEnum(t.boundedEnumMonth)(fa)))(P.fromMaybe(z.bottom(t.boundedDay))(q.toEnum(t.boundedEnumDay)(sa))), new ba.Time(P.fromMaybe(z.bottom(Z.boundedHour))(q.toEnum(Z.boundedEnumHour)(va)), P.fromMaybe(z.bottom(Z.boundedMinute))(q.toEnum(Z.boundedEnumMinute)(ya)), P.fromMaybe(z.bottom(Z.boundedSecond))(q.toEnum(Z.boundedEnumSecond)(Ca)), P.fromMaybe(z.bottom(Z.boundedMillisecond))(q.toEnum(Z.boundedEnumMillisecond)(za))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      Ga = new D.Generic(function (X) {
    if (X instanceof ta) return new D.Inl(D.NoArguments.value);
    if (X instanceof ja) return new D.Inr(D.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [X.constructor.name]);
  }, function (X) {
    if (X instanceof D.Inl) return ta.value;
    if (X instanceof D.Inr) return ja.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [X.constructor.name]);
  });

  S = new da.Show(S.genericShow(Ga)(S.genericShowSum(S.genericShowConstructor(S.genericShowArgsNoArguments)(new aa.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(S.genericShowConstructor(S.genericShowArgsNoArguments)(new aa.IsSymbol(function () {
    return "RefPolicy";
  })))));
  S = new pa(function () {
    var X = P.fromMaybe(ta.value);
    return function (fa) {
      return X(A.hush(Ta(fa)));
    };
  }(), da.show(S), da.show(S));

  var Ya = new F.Functor(function (X) {
    return function (fa) {
      if (fa instanceof la) return la.create(F.map(P.functorMaybe)(X)(fa.value0));
      if (fa instanceof oa) return oa.create(F.map(P.functorMaybe)(X)(fa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 273, column 1 - line 275, column 48): " + [X.constructor.name, fa.constructor.name]);
    };
  }),
      Va = function Va(X) {
    return function (fa) {
      return function (sa) {
        return f.step(sa)(function () {
          var va = P.isJust(sa) ? !0 : !1;
          return n.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.value(P.maybe("")(fa.toOptionValue)(sa)), F.map(g.functorProps)(function () {
            var ya = fa.fromOptionValue;
            return function (Ca) {
              return ya(c.unsafeTargetValue(Ca));
            };
          }())(c.onChange)])(r.cons(e.option(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.disabled(va)])([e.text(k.widgetLiftWidget)("Select ...")]))(F.mapFlipped(F.functorArray)(q.upFromIncluding(X.Enum1())(ha.unfoldable1Array)(z.bottom(X.Bounded0())))(function (ya) {
            return e.option(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.value((0, fa.toOptionValue)(ya))])([e.text(k.widgetLiftWidget)((0, fa.toOptionLabel)(ya))]);
          }))))(function (ya) {
            return m.pure(b.widgetApplicative)(Va(X)(fa)(new P.Just(ya)));
          });
        }());
      };
    };
  },
      Wa = function Wa(X) {
    return function (fa) {
      return function (sa) {
        return function (va) {
          return function (ya) {
            return E.fold(X)(sa)(F.map(fa)(va)(ya));
          };
        };
      };
    };
  },
      ia = function ia(X) {
    X = Wa(E.foldableMaybe)(P.functorMaybe)(J.monoidString)(V.toString)(X);
    X = f.debounce(J.monoidArray)(500)(X)(Ha);
    return Na(X);
  },
      ka = function ka(X) {
    return P.maybe(J.mempty(b.widgetMonoid(J.monoidArray)))(function (fa) {
      return e.div(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.style({
        color: "red"
      })])([e.text(k.widgetLiftWidget)(N.toText(X)(fa))]);
    });
  },
      ma = new v.Eq(M.genericEq(Ga)(M.genericEqSum(M.genericEqConstructor(M.genericEqNoArguments))(M.genericEqConstructor(M.genericEqNoArguments)))),
      ra = new W.Ord(function () {
    return ma;
  }, function (X) {
    return function (fa) {
      return G.genericCompare(Ga)(G.genericOrdSum(G.genericOrdConstructor(G.genericOrdNoArguments))(G.genericOrdConstructor(G.genericOrdNoArguments)))(X)(fa);
    };
  }),
      xa = new q.Enum(function () {
    return ra;
  }, u.genericPred(Ga)(u.genericEnumSum(u.genericEnumConstructor(u.genericEnumNoArguments))(I.genericTopConstructor(I.genericTopNoArguments))(u.genericEnumConstructor(u.genericEnumNoArguments))(I.genericBottomConstructor(I.genericBottomNoArguments))), u.genericSucc(Ga)(u.genericEnumSum(u.genericEnumConstructor(u.genericEnumNoArguments))(I.genericTopConstructor(I.genericTopNoArguments))(u.genericEnumConstructor(u.genericEnumNoArguments))(I.genericBottomConstructor(I.genericBottomNoArguments))));

  aa = function aa(X) {
    return function (fa) {
      return fa instanceof P.Nothing ? "(None)" : Ja(X)(fa);
    };
  };

  v = new pa(function (X) {
    return A.hush(ca.readBoolean(X));
  }, aa(da.showBoolean), Ja(da.showBoolean));
  M = new pa(function () {
    var X = n.join(P.bindMaybe);
    return function (fa) {
      return X(A.hush(ca.readInstitutionContactType(fa)));
    };
  }(), aa(Q.showInstitutionContactType), Ja(Q.showInstitutionContactType));
  Q = new pa(function () {
    var X = n.join(P.bindMaybe);
    return function (fa) {
      return X(A.hush(ca.readPolicyType(fa)));
    };
  }(), aa(Q.showPolicyType), Ja(Q.showPolicyType));

  var Fa = function Fa(X) {
    return F.voidRight(b.widgetFunctor)(!X)(e.input(k.widgetLiftWidget)([c._type("checkbox"), c.checked(X), c.onChange]));
  },
      Aa = function Aa(X) {
    var fa = Fa(X);
    return f.step(X)(n.bind(b.widgetBind)(fa)(function (sa) {
      return m.pure(b.widgetApplicative)(Aa(sa));
    }));
  },
      Ka = new z.Bounded(function () {
    return ra;
  }, I.genericBottom(Ga)(I.genericBottomSum(I.genericBottomConstructor(I.genericBottomNoArguments))), I.genericTop(Ga)(I.genericTopSum(I.genericTopConstructor(I.genericTopNoArguments))));

  I = new q.BoundedEnum(function () {
    return Ka;
  }, function () {
    return xa;
  }, u.genericCardinality(Ga)(u.genericBoundedEnumSum(u.genericBoundedEnumConstructor(u.genericBoundedEnumNoArguments))(u.genericBoundedEnumConstructor(u.genericBoundedEnumNoArguments))), u.genericFromEnum(Ga)(u.genericBoundedEnumSum(u.genericBoundedEnumConstructor(u.genericBoundedEnumNoArguments))(u.genericBoundedEnumConstructor(u.genericBoundedEnumNoArguments))), u.genericToEnum(Ga)(u.genericBoundedEnumSum(u.genericBoundedEnumConstructor(u.genericBoundedEnumNoArguments))(u.genericBoundedEnumConstructor(u.genericBoundedEnumNoArguments))));

  var Oa = new h.Apply(function () {
    return Ya;
  }, function (X) {
    return function (fa) {
      if (X instanceof la && fa instanceof la || X instanceof la && fa instanceof oa || X instanceof oa && fa instanceof la) return la.create(h.apply(P.applyMaybe)(X.value0)(fa.value0));
      if (X instanceof oa && fa instanceof oa) return oa.create(h.apply(P.applyMaybe)(X.value0)(fa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 276, column 1 - line 280, column 63): " + [X.constructor.name, fa.constructor.name]);
    };
  }),
      La = new m.Applicative(function () {
    return Oa;
  }, function (X) {
    return la.create(new P.Just(X));
  }),
      Ma = function Ma(X) {
    return function (fa) {
      var sa = Y.snd(fa),
          va = Y.fst(fa),
          ya = new la(P.Nothing.value);

      fa = function () {
        var wa = W.max(W.ordInt)(0)(va - r.length(sa) | 0);
        return O.append(O.semigroupArray)(F.map(F.functorArray)(m.pure(La))(sa))(F.mapFlipped(F.functorArray)(Pa(1)(wa))(function (Ia) {
          return ya;
        }));
      }();

      var Ca = function Ca(wa) {
        return f.step(wa)(n.bind(b.widgetBind)(F.voidRight(b.widgetFunctor)(oa.create(ua(wa)))(e.button(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(k.widgetLiftWidget)("Delete")])))(function (Ia) {
          return m.pure(b.widgetApplicative)(Ca(Ia));
        }));
      },
          za = function za(wa) {
        return e.li_(w.shiftMapCofree(J.monoidArray))([])(n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(X(ua(wa)))(function (Ia) {
          return n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(Ca(new la(Ia)))(function (Da) {
            return m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))(Da);
          });
        }));
      },
          $a = function $a(wa) {
        if (wa instanceof oa) return f.step(new oa(P.Nothing.value))(J.mempty(b.widgetMonoid(J.monoidArray)));
        if (wa instanceof la) return za(wa);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 307, column 23 - line 309, column 35): " + [wa.constructor.name]);
      };

      return e.div_(w.shiftMapCofree(J.monoidArray))([])(n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(function (wa) {
        return function (Ia) {
          return f.loopS(J.monoidArray)(new Y.Tuple(wa, Ia))(function (Da) {
            return e.ul_(w.shiftMapCofree(J.monoidArray))([])(function () {
              Y.fst(Da);
              var ab = Y.snd(Da);
              return n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(f.step(0)(F.voidRight(b.widgetFunctor)(m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))(1))(e.button(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(k.widgetLiftWidget)("Add item")]))))(function (bb) {
                return n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(ea.traverse(ea.traversableArray)(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))($a)(ab))(function (Za) {
                  Za = r.filter(Ea)(Za);
                  var Qa = r.length(Za) + bb | 0,
                      Ra = F.mapFlipped(F.functorArray)(Pa(1)(bb))(function (Sa) {
                    return ya;
                  });
                  return m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))(Y.Tuple.create(Qa)(O.append(O.semigroupArray)(Za)(Ra)));
                });
              });
            }());
          });
        };
      }(va)(fa))(function (wa) {
        return m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))(K.second(K.strongFn)(function () {
          var Ia = F.map(F.functorArray)(ua);
          return function (Da) {
            return r.catMaybes(Ia(Da));
          };
        }())(wa));
      }));
    };
  };

  d.menu = function (X) {
    return function (fa) {
      return function (sa) {
        return function (va) {
          return function (ya) {
            return function (Ca) {
              return function (za) {
                return function ($a) {
                  return function (wa) {
                    return e.select(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.defaultValue((0, fa.toOptionValue)(U.getInput(X)(va)()(wa)($a))), F.map(g.functorProps)(function () {
                      var Ia = H.set(X)(Ca)()(wa),
                          Da = fa.fromOptionValue;
                      return function (ab) {
                        return Ia(Da(c.unsafeTargetValue(ab)));
                      };
                    }())(c.onChange)])(F.mapFlipped(F.functorArray)(q.upFromIncluding(sa.Enum1())(ha.unfoldable1Array)(z.bottom(sa.Bounded0())))(function (Ia) {
                      return e.option(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)([c.value((0, fa.toOptionValue)(Ia))])([e.text(k.widgetLiftWidget)((0, fa.toOptionLabel)(Ia))]);
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

  d.menuSignal = Va;
  d.textInput = ia;

  d.urlInput = function (X) {
    if (X instanceof A.Left) var fa = "";else if (X instanceof A.Right) fa = V.toString(qa.urlToNEString(X.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 169, column 15 - line 171, column 48): " + [X.constructor.name]);
    if (X instanceof A.Left) var sa = X.value0;else if (X instanceof A.Right) sa = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 165, column 15 - line 167, column 20): " + [X.constructor.name]);
    return n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(ia(V.fromString(fa)))(function (va) {
      var ya = n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray))),
          Ca = m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)));
      if (va instanceof P.Nothing) va = new A.Left(sa);else if (va instanceof P.Just) va = qa.parsePublicURL(V.toString(va.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 156, column 19 - line 158, column 46): " + [va.constructor.name]);
      return ya(Ca(va))(function (za) {
        return n.discard(n.discardUnit)(w.bindCofree(b.widgetAlternative(J.monoidArray)))(f.display(function () {
          if (za instanceof A.Right) return J.mempty(b.widgetMonoid(J.monoidArray));
          if (za instanceof A.Left) return ka(N.toTextString)(new P.Just(za.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 159, column 13 - line 161, column 40): " + [za.constructor.name]);
        }()))(function () {
          return m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))(za);
        });
      });
    });
  };

  d.checkBoxS = Aa;
  d.FreeTextPolicy = ta;
  d.RefPolicy = ja;

  d.formSaveButton = function (X) {
    X = X.dirty ? [c.onClick] : [c.disabled(!0)];
    return e.button(b.widgetMultiAlternative(J.monoidArray))(b.widgetShiftMap)(X)([e.text(k.widgetLiftWidget)("Save")]);
  };

  d.arrayView = Ma;

  d.nonEmptyArrayView = function (X) {
    return function (fa) {
      return n.bind(w.bindCofree(b.widgetAlternative(J.monoidArray)))(Ma(X)(K.second(K.strongFn)(Wa(E.foldableMaybe)(P.functorMaybe)(J.monoidArray)(p.toArray))(fa)))(function (sa) {
        return m.pure(w.applicativeCofree(b.widgetAlternative(J.monoidArray)))(K.second(K.strongFn)(p.fromArray)(sa));
      });
    };
  };

  d.errorDisplay = ka;

  d.initFormState = function (X) {
    return function (fa) {
      return function (sa) {
        return function (va) {
          return function (ya) {
            return function (Ca) {
              return {
                validity: B.Incomplete.value,
                dirty: !1,
                submitting: !1,
                errors: 0,
                submitAttempts: 0,
                form: L.inputFieldsToFormFields()(fa)(sa)(va)(ya),
                internal: {
                  initialInputs: ya,
                  validators: Ca,
                  allTouched: !1
                }
              };
            };
          };
        };
      };
    };
  };

  d.formatXsdDate = function (X) {
    var fa = y.formatDateTime("YYYY-MM-DD")(X);
    return function () {
      if (fa instanceof A.Left) return new A.Left(fa.value0);

      if (fa instanceof A.Right) {
        var sa = V.fromString(fa.value0);
        if (sa instanceof P.Nothing) return new A.Left("Empty Date output from formatXsdDate");
        if (sa instanceof P.Just) return new A.Right(sa.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 413, column 27 - line 415, column 30): " + [sa.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 411, column 15 - line 415, column 30): " + [fa.constructor.name]);
    }();
  };

  d.initDate = Xa;
  d.isOptionMaybeBoolean = v;
  d.isOptionIdentifierType = na;
  d.isOptionInstitutionType = T;
  d.isOptionMaybeInstitutionContactType = M;
  d.isOptionMaybePolicyType = Q;
  d.isOptionRelationType = Ua;
  d.isOptionResourceTypeGeneral = a;
  d.eqPolPolType = ma;
  d.boundedEnumPolPolType = I;
  d.isOptionPolPolType = S;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var d = a["Metajelo.View"],
      f = a["Concur.Core.LiftWidget"],
      k = a["Concur.Core.Types"],
      g = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      e = a["Control.Alt"],
      c = a["Control.Bind"],
      m = a["Control.Category"],
      h = a["Data.Array"],
      n = a["Data.Array.NonEmpty"],
      w = a["Data.Array.NonEmpty.Internal"],
      r = a["Data.Foldable"],
      p = a["Data.Functor"],
      z = a["Data.HeytingAlgebra"],
      x = a["Data.Maybe"],
      t = a["Data.Monoid"],
      C = a["Data.Profunctor.Strong"],
      A = a["Data.Semigroup"],
      q = a["Data.Show"],
      v = a["Data.String.CodePoints"],
      E = a["Data.String.NonEmpty.Internal"],
      y = a["Data.String.Utils"],
      F = a["Data.Unfoldable"],
      D = a["Data.Unfoldable1"],
      I = a["Foreign.Object"],
      u = a["Metajelo.CSS.Common.ClassNames"],
      M = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      G = a["Metajelo.CSS.Web.ClassProps"],
      S = a["Metajelo.CSS.Web.Util"],
      P = a["Metajelo.Types"],
      J = a["Text.Email.Parser"],
      W = a["Text.URL.Validate"],
      K = function () {
    var N = p.map(p.functorArray)(v.singleton);
    return function (ca) {
      return N(v.toCodePointArray(ca));
    };
  }(),
      O = function O(N) {
    var ca = g.text(N);
    return function (qa) {
      return ca(E.toString(qa));
    };
  },
      da = g["span'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)(" ")]),
      R = function () {
    var N = r.intercalate(r.foldableArray)(t.monoidArray)([da]),
        ca = p.map(p.functorArray)(D.singleton(D.unfoldable1Array));
    return function (qa) {
      return N(ca(qa));
    };
  }(),
      V = function V(N) {
    return g.div(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.institutionPolicy])(R([function (ca) {
      var qa = function () {
        if (ca instanceof x.Nothing) return {
          text: "May apply to product (unverified)",
          cls: M.appliesMaybe
        };
        if (ca instanceof x.Just && ca.value0) return {
          text: "Applies to product",
          cls: M.appliesYes
        };
        if (ca instanceof x.Just && !ca.value0) return {
          text: "Does not apply to product",
          cls: M.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 258, column 10 - line 261, column 75): " + [ca.constructor.name]);
      }();

      return g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([S.cList([u.applies, qa.cls])])([function (ta) {
        return g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.appliesInfo])([g.text(f.widgetLiftWidget)(ta)]);
      }(qa.text)]);
    }(N.appliesToProduct), r.foldMap(r.foldableMaybe)(k.widgetMonoid(t.monoidArray))(function (ca) {
      return g["span'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.policyType])([g.text(f.widgetLiftWidget)(q.show(P.showPolicyType)(ca))]), g.text(f.widgetLiftWidget)(" Policy:")]);
    })(N.policyType), function (ca) {
      var qa = g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.policy]),
          ta = D.singleton(D.unfoldable1Array);
      if (ca instanceof P.FreeTextPolicy) ca = O(f.widgetLiftWidget)(ca.value0);else if (ca instanceof P.RefPolicy) ca = W.urlToString(ca.value0), ca = g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([g.text(f.widgetLiftWidget)(ca)]);else throw Error("Failed pattern match at Metajelo.View (line 251, column 5 - line 254, column 40): " + [ca.constructor.name]);
      return qa(ta(ca));
    }(N.policy)]));
  },
      aa = function aa(N) {
    return g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.institutionName])([O(f.widgetLiftWidget)(N.institutionName)]);
  },
      ba = function ba(N) {
    return function (ca) {
      return r.foldMap(r.foldableMaybe)(t.monoidArray)(m.identity(m.categoryFn))(h.init(ca));
    };
  },
      Z = function Z(N) {
    return function (ca) {
      return function (qa) {
        return function (ta) {
          return function (ja) {
            var la = I.fromFoldableWith(N)(A.append(ta)),
                oa = p.map(ca)(C.fanout(m.categoryFn)(C.strongFn)(ja)(D.singleton(qa)));
            return function (pa) {
              return la(oa(pa));
            };
          };
        };
      };
    };
  },
      ea = function ea(N) {
    var ca = J.toString(N.emailAddress),
        qa = g.text(f.widgetLiftWidget);
    if (N.contactType instanceof x.Nothing) N = ".";else if (N.contactType instanceof x.Just) N = " (" + (q.show(P.showInstitutionContactType)(N.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 185, column 24 - line 187, column 41): " + [N.contactType.constructor.name]);
    qa = qa(N);
    return g.span_(k.widgetShiftMap)([G.institutionContact])(e.alt(k.widgetAlt(t.monoidArray))(e.alt(k.widgetAlt(t.monoidArray))(g["span'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("Institution Contact: ")]))(g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.contactEmail, b.href("mailto:" + ca)])([g.text(f.widgetLiftWidget)(ca)])))(g.span_(k.widgetShiftMap)([G.contactType])(qa)));
  },
      Y = function Y(N) {
    return g["cite'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([O(f.widgetLiftWidget)(N)]);
  },
      ha = function ha(N) {
    if (N.idType instanceof P.ARK) return g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(E.toString(N.id))])([Y(N.id)]);

    if (N.idType instanceof P.ArXiv) {
      var ca = "https://arxiv.org/abs/" + E.toString(N.id);
      return g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    }

    if (N.idType instanceof P.Bibcode) return ca = "https://ui.adsabs.harvard.edu/abs/" + (E.toString(N.id) + "/abstract"), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.DOI) return ca = "https://doi.org/" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.EAN13) return Y(N.id);
    if (N.idType instanceof P.EISSN) return ca = "https://www.worldcat.org/ISSN/" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.Handle) return ca = "http://hdl.handle.net/" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.IGSN) return ca = "http://igsn.org/" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.ISBN) return Y(N.id);
    if (N.idType instanceof P.ISSN) return ca = "https://www.worldcat.org/ISSN/" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.ISTC) return Y(N.id);
    if (N.idType instanceof P.LISSN) return ca = "https://www.worldcat.org/ISSN/" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.LSID) return ca = "http://www.lsid.info/resolver/?lsid=" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.PMID) return ca = "https://www.ncbi.nlm.nih.gov/pubmed/" + E.toString(N.id), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(ca)])([Y(N.id)]);
    if (N.idType instanceof P.PURL) return g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(E.toString(N.id))])([Y(N.id)]);
    if (N.idType instanceof P.UPC) return Y(N.id);
    if (N.idType instanceof P.URL) return g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([b.href(E.toString(N.id))])([Y(N.id)]);
    if (N.idType instanceof P.URN) return Y(N.id);
    throw Error("Failed pattern match at Metajelo.View (line 207, column 1 - line 207, column 47): " + [N.constructor.name]);
  },
      L = function L(N) {
    return g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.identifier])([g.span_(k.widgetShiftMap)([G.idType])(g.text(f.widgetLiftWidget)(q.show(P.showIdentifierType)(N.idType))), g.span_(k.widgetShiftMap)([G.idUrl])(ha(N))]);
  },
      H = function H(N) {
    return g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.relatedId])([g.span_(k.widgetShiftMap)([G.relType])(g.text(f.widgetLiftWidget)(q.show(P.showRelationType)(N.relType))), da, L({
      id: N.id,
      idType: N.idType
    })]);
  },
      U = function U(N) {
    return function (ca) {
      return function (qa) {
        if (ca) return N;

        if (r.any(r.foldableArray)(z.heytingAlgebraBoolean)(function (ja) {
          return y.endsWith(ja)(N);
        })([";", ".", ","])) {
          var ta = K(N);
          return y.fromCharArray(ba(t.monoidString)(ta)) + qa;
        }

        return N + qa;
      };
    };
  },
      B = function B(N) {
    var ca = aa(N),
        qa = g["span'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("("), g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.institutionId])([L(N.institutionID)]), g.text(f.widgetLiftWidget)("; "), g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.institutionType])([g.text(f.widgetLiftWidget)(q.show(P.showInstitutionType)(N.institutionType))]), g.text(f.widgetLiftWidget)(U(")")(x.isNothing(N.superOrganizationName))(","))]);
    if (N.superOrganizationName instanceof x.Nothing) var ta = t.mempty(k.widgetMonoid(t.monoidArray));else if (N.superOrganizationName instanceof x.Just) ta = g["span'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("a member of "), g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.superOrg])([g.text(f.widgetLiftWidget)(U(E.toString(N.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 147, column 7 - line 153, column 10): " + [N.superOrganizationName.constructor.name]);
    return R([ca, qa, ta, ea(N.institutionContact), g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.sustainability])([g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.missionStatement, b.href(W.urlToString(N.institutionSustainability.missionStatementURL))])([g.text(f.widgetLiftWidget)("Mission Statement")]), g.text(f.widgetLiftWidget)("; "), g.a(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.fundingStatement, b.href(W.urlToString(N.institutionSustainability.fundingStatementURL))])([g.text(f.widgetLiftWidget)("Funding Statement")]), g.text(f.widgetLiftWidget)(".")]), g.ul(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.institutionPolicies])(p.map(p.functorArray)(function (ja) {
      return g["li'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([V(ja)]);
    })(n.toArray(N.institutionPolicies))), function (ja) {
      if (ja) ja = "Versioned";else {
        if (ja) throw Error("Failed pattern match at Metajelo.View (line 174, column 14 - line 176, column 31): " + [ja.constructor.name]);
        ja = "Unversioned";
      }
      return g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.versioning])([g.text(f.widgetLiftWidget)(ja)]);
    }(N.versioning)]);
  },
      Q = function Q(N) {
    if (N.resourceID instanceof x.Just) var ca = g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.resourceId])([L(N.resourceID.value0), g.text(f.widgetLiftWidget)(".")]);else if (N.resourceID instanceof x.Nothing) ca = t.mempty(k.widgetMonoid(t.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 125, column 17 - line 127, column 24): " + [N.resourceID.constructor.name]);
    var qa = [g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.basicMetadata, G.creator])([O(f.widgetLiftWidget)(N.basicMetadata.creator)]), g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.basicMetadata, G.pubyear])([O(f.widgetLiftWidget)(N.basicMetadata.publicationYear)]), g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.basicMetadata, G.title])([g.text(f.widgetLiftWidget)(U(E.toString(N.basicMetadata.title))(x.isNothing(N.resourceID))(","))])];
    ca = A.append(A.semigroupArray)(qa)([g["span'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([aa(N.location), g.text(f.widgetLiftWidget)(".")]), ca]);
    return g.div(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.product])(R(A.append(A.semigroupArray)([g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.productCitation])([g["cite'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)(R(ca))])])(B(N.location))));
  };

  d.spacify = R;

  d.mkRecordWidget = function (N) {
    var ca = function () {
      var ja = p.map(w.functorNonEmptyArray)(function (la) {
        return g.li(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.relatedId])([la]);
      })(p.map(w.functorNonEmptyArray)(H)(N.relatedIdentifiers));
      return g.ul(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.relatedIdList])(n.toArray(ja));
    }(),
        qa = Z(w.foldableNonEmptyArray)(w.functorNonEmptyArray)(w.unfoldable1NonEmptyArray)(w.semigroupNonEmptyArray)(function (ja) {
      return q.show(P.showResourceTypeGeneral)(ja.resourceType.generalType) + (": " + ja.resourceType.description);
    })(N.supplementaryProducts),
        ta = function ta(ja) {
      ja = c.join(c.bindArray)(F.fromMaybe(F.unfoldableArray)(p.map(x.functorMaybe)(n.toArray)(I.lookup(ja)(qa))));
      var la = g.span_(k.widgetShiftMap)([G.resourceType])(r.fold(r.foldableMaybe)(k.widgetMonoid(t.monoidArray))(p.mapFlipped(x.functorMaybe)(h.head(ja))(function (oa) {
        return e.alt(k.widgetAlt(t.monoidArray))(e.alt(k.widgetAlt(t.monoidArray))(g.span_(k.widgetShiftMap)([G.resourceTypeGen])(g.text(f.widgetLiftWidget)(q.show(P.showResourceTypeGeneral)(oa.resourceType.generalType))))(g.span_(k.widgetShiftMap)([G.resourceTypeDescr])(g.text(f.widgetLiftWidget)(oa.resourceType.description))))(g["br'"](f.widgetLiftWidget));
      })));
      return g["div'"](k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)(h.cons(la)(p.map(p.functorArray)(Q)(ja)));
    };

    q.show(P.showIdentifierType)(N.identifier.idType);
    return g.div(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.record])([g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.productsHeader])([g.span_(k.widgetShiftMap)([G.recordId])(L(N.identifier))]), g.ul(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.productList])(p.map(p.functorArray)(function (ja) {
      return g.li_(k.widgetShiftMap)([G.productGroup])(ta(ja));
    })(I.keys(qa))), g.span(k.widgetMultiAlternative(t.monoidArray))(k.widgetShiftMap)([G.relatedIdsHeader])([]), ca]);
  };

  d.mkSupplementaryProductWidget = Q;
  d.locElems = B;
  d.contactWidg = ea;
  d.ipolicyWidg = V;
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionContact"] = a["Metajelo.Forms.InstitutionContact"] || {};

  var d = a["Metajelo.Forms.InstitutionContact"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      m = a["Control.Applicative"],
      h = a["Control.Bind"],
      n = a["Control.Cofree"],
      w = a["Data.Either"],
      r = a["Data.Enum"],
      p = a["Data.Eq"],
      z = a["Data.Foldable"],
      x = a["Data.Functor"],
      t = a["Data.Maybe"],
      C = a["Data.Monoid"],
      A = a["Data.Newtype"],
      q = a["Data.Symbol"],
      v = a["Formless.Component"],
      E = a["Formless.Internal.Transform"],
      y = a["Formless.Query"],
      F = a["Formless.Retrieve"],
      D = a["Formless.Transform.Record"],
      I = a["Formless.Transform.Row"],
      u = a["Formless.Types.Form"],
      M = a["Heterogeneous.Mapping"],
      G = a["Metajelo.CSS.UI.ClassProps"],
      S = a["Metajelo.FormUtil"],
      P = a["Metajelo.Types"],
      J = a["Metajelo.Validation"],
      W = a["Metajelo.View"],
      K = a["Text.Email.Parser"],
      O = {
    email1: J.emailFormat(b.widgetMonad),
    contactType: J.dummy(b.widgetMonad)
  },
      da = function da(Z) {
    return function (ea) {
      return function (Y) {
        return I.mkSProxies()(ea)(Y)(u.FormProxy.value);
      };
    };
  },
      R = new A.Newtype(function (Z) {
    return Z;
  }, function (Z) {
    return Z;
  }),
      V = {
    email1: "",
    contactType: t.Nothing.value
  },
      aa = function aa(Z) {
    if (Z instanceof t.Nothing) return V;
    if (Z instanceof t.Just) return {
      email1: K.toString(Z.value0.emailAddress),
      contactType: Z.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 49, column 1 - line 49, column 57): " + [Z.constructor.name]);
  },
      ba = function ba(Z) {
    return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([e.input(k.widgetLiftWidget)([G.contactEmail, c.defaultValue(F.getInput(new q.IsSymbol(function () {
      return "email1";
    }))(R)()(da()(R)(I.makeSProxiesCons(new q.IsSymbol(function () {
      return "contactType";
    }))()(I.makeSProxiesCons(new q.IsSymbol(function () {
      return "email1";
    }))()(I.makeSProxiesNil))).email1)(Z.form)), x.map(g.functorProps)(function () {
      var ea = y.setValidate(new q.IsSymbol(function () {
        return "email1";
      }))(R)()(da()(R)(I.makeSProxiesCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(I.makeSProxiesCons(new q.IsSymbol(function () {
        return "email1";
      }))()(I.makeSProxiesNil))).email1);
      return function (Y) {
        return ea(c.unsafeTargetValue(Y));
      };
    }())(c.onChange)]), S.errorDisplay(J.toTextFieldError)(F.getError(new q.IsSymbol(function () {
      return "email1";
    }))(R)()(da()(R)(I.makeSProxiesCons(new q.IsSymbol(function () {
      return "contactType";
    }))()(I.makeSProxiesCons(new q.IsSymbol(function () {
      return "email1";
    }))()(I.makeSProxiesNil))).email1)(Z.form)), e.span_(b.widgetShiftMap)([G.contactType])(S.menu(new q.IsSymbol(function () {
      return "contactType";
    }))(S.isOptionMaybeInstitutionContactType)(r.boundedEnumMaybe(P.smallBoundedInstitutionContactType)(P.boundedEnumInstitutionContactType))(R)()(R)()(Z.form)(da()(R)(I.makeSProxiesCons(new q.IsSymbol(function () {
      return "contactType";
    }))()(I.makeSProxiesCons(new q.IsSymbol(function () {
      return "email1";
    }))()(I.makeSProxiesNil))).contactType)), e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([x.voidRight(b.widgetFunctor)(y.submit)(S.formSaveButton(Z))])]))(function (ea) {
      return h.bind(b.widgetBind)(v.eval()()(p.eqRowCons(p.eqRowCons(p.eqRowNil)()(new q.IsSymbol(function () {
        return "email1";
      }))(u.eqInputField(p.eqString)))()(new q.IsSymbol(function () {
        return "contactType";
      }))(u.eqInputField(t.eqMaybe(P.eqInstitutionContactType))))(E.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(E.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
        return "email1";
      }))()(E.inputFieldsToFormFieldsNil)())())(E.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(E.inputFieldsToInputCons(new q.IsSymbol(function () {
        return "email1";
      }))()(E.inputFieldsToInputNil)())())(E.consCountErrors(new q.IsSymbol(function () {
        return "contactType";
      }))()(E.consCountErrors(new q.IsSymbol(function () {
        return "email1";
      }))()(E.nilCountErrors)))(E.consAllTouched(new q.IsSymbol(function () {
        return "contactType";
      }))()(E.consAllTouched(new q.IsSymbol(function () {
        return "email1";
      }))()(E.nilAllTouched)))(E.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(E.setFormFieldsTouchedCons(new q.IsSymbol(function () {
        return "email1";
      }))()(E.setFormFieldsTouchedNil)())())(E.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "contactType";
      }))(u.newtypeInputField)(u.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedCons(new q.IsSymbol(function () {
        return "email1";
      }))(u.newtypeInputField)(u.newtypeFormField)()()()(E.replaceFormFieldInputsTouchedNil)))(E.modifyAllCons(new q.IsSymbol(function () {
        return "contactType";
      }))(u.newtypeInputFunction)(u.newtypeFormField)()()()(E.modifyAllCons(new q.IsSymbol(function () {
        return "email1";
      }))(u.newtypeInputFunction)(u.newtypeFormField)()()()(E.modifyAllNil)))(E.applyToValidationCons(new q.IsSymbol(function () {
        return "contactType";
      }))(b.widgetMonad)()(R)()()(E.applyToValidationCons(new q.IsSymbol(function () {
        return "email1";
      }))(b.widgetMonad)()(R)()()(E.applyToValidationNil(b.widgetMonad))))(E.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "contactType";
      }))()(E.formFieldsToMaybeOutputCons(new q.IsSymbol(function () {
        return "email1";
      }))()(E.formFieldsToMaybeOutputNil)())())(R)(R)(R)(R)(R)(R)(R)(R)(b.widgetMonad)(ea)(Z))(function (Y) {
        if (Y instanceof w.Left) return ba(Y.value0);
        if (Y instanceof w.Right) return Y = D.unwrapOutputFields(R)(M.hmapRecord()(M.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "contactType";
        }))(M.constMapping(D.unwrapField(u.newtypeOutputField)))(M.mapRecordWithIndexCons(new q.IsSymbol(function () {
          return "email1";
        }))(M.constMapping(D.unwrapField(u.newtypeOutputField)))(M.mapRecordWithIndexNil)()())()()))(Y.value0), m.pure(b.widgetApplicative)({
          emailAddress: Y.email1,
          contactType: Y.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 75, column 3 - line 79, column 70): " + [Y.constructor.name]);
      });
    });
  };

  d.contactSignal = function (Z) {
    var ea = function ea(Y) {
      return f.step(Y)(h.bind(b.widgetBind)(m.pure(b.widgetApplicative)(D.wrapInputFields(R)(M.hmapRecord()(M.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "contactType";
      }))(M.constMapping(D.wrapField(u.newtypeInputField)))(M.mapRecordWithIndexCons(new q.IsSymbol(function () {
        return "email1";
      }))(M.constMapping(D.wrapField(u.newtypeInputField)))(M.mapRecordWithIndexNil)()())()()))(aa(Y))))(function (ha) {
        return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([ba(S.initFormState()(E.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "contactType";
        }))()(E.inputFieldsToFormFieldsCons(new q.IsSymbol(function () {
          return "email1";
        }))()(E.inputFieldsToFormFieldsNil)())())(R)(R)(ha)(O)), z.foldMap(z.foldableMaybe)(b.widgetMonoid(C.monoidArray))(W.contactWidg)(Y)]))(function (L) {
          return m.pure(b.widgetApplicative)(ea(new t.Just(L)));
        });
      }));
    };

    return e.div_(n.shiftMapCofree(C.monoidArray))([G.institutionContact])(ea(Z));
  };
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionPolicy"] = a["Metajelo.Forms.InstitutionPolicy"] || {};

  var d = a["Metajelo.Forms.InstitutionPolicy"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      m = a["Control.Applicative"],
      h = a["Control.Bind"],
      n = a["Control.Cofree"],
      w = a["Data.Either"],
      r = a["Data.Enum"],
      p = a["Data.Eq"],
      z = a["Data.Foldable"],
      x = a["Data.Functor"],
      t = a["Data.Maybe"],
      C = a["Data.Monoid"],
      A = a["Data.Show"],
      q = a["Data.String.NonEmpty.Internal"],
      v = a["Data.Symbol"],
      E = a["Effect.Class"],
      y = a["Effect.Class.Console"],
      F = a["Formless.Component"],
      D = a["Formless.Internal.Transform"],
      I = a["Formless.Query"],
      u = a["Formless.Retrieve"],
      M = a["Formless.Transform.Record"],
      G = a["Formless.Transform.Row"],
      S = a["Formless.Types.Form"],
      P = a["Formless.Validation"],
      J = a["Heterogeneous.Mapping"],
      W = a["Metajelo.CSS.UI.ClassProps"],
      K = a["Metajelo.FormUtil"],
      O = a["Metajelo.Types"],
      da = a["Metajelo.Validation"],
      R = a["Metajelo.View"],
      V = a["Text.URL.Validate"],
      aa = function aa(H) {
    return function (U) {
      return function (B) {
        return G.mkSProxies()(U)(B)(S.FormProxy.value);
      };
    };
  },
      ba = new a["Data.Newtype"].Newtype(function (H) {
    return H;
  }, function (H) {
    return H;
  }),
      Z = function Z(H) {
    return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([e.span_(b.widgetShiftMap)([W.policy])(K.menu(new v.IsSymbol(function () {
      return "polPolType";
    }))(K.isOptionPolPolType)(K.boundedEnumPolPolType)(ba)()(ba)()(H.form)(aa()(ba)(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).polPolType)), e.input(k.widgetLiftWidget)([c.defaultValue(u.getInput(new v.IsSymbol(function () {
      return "policy";
    }))(ba)()(aa()(ba)(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).policy)(H.form)), x.map(g.functorProps)(function () {
      var U = I.setValidate(new v.IsSymbol(function () {
        return "policy";
      }))(ba)()(aa()(ba)(G.makeSProxiesCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
        return "policy";
      }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(G.makeSProxiesNil))))).policy);
      return function (B) {
        return U(c.unsafeTargetValue(B));
      };
    }())(c.onChange)]), K.errorDisplay(da.toTextString)(u.getError(new v.IsSymbol(function () {
      return "policy";
    }))(ba)()(aa()(ba)(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).policy)(H.form)), e.span_(b.widgetShiftMap)([W.policyType])(K.menu(new v.IsSymbol(function () {
      return "policyType";
    }))(K.isOptionMaybePolicyType)(r.boundedEnumMaybe(O.smallBoundedPolicyType)(O.boundedEnumPolicyType))(ba)()(ba)()(H.form)(aa()(ba)(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).policyType)), e.span_(b.widgetShiftMap)([W.applies])(K.menu(new v.IsSymbol(function () {
      return "appliesToProd";
    }))(K.isOptionMaybeBoolean)(r.boundedEnumMaybe(r.smallBoundedBoolean)(r.boundedEnumBoolean))(ba)()(ba)()(H.form)(aa()(ba)(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "appliesToProd";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "polPolType";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policy";
    }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
      return "policyType";
    }))()(G.makeSProxiesNil))))).appliesToProd)), e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([x.voidRight(b.widgetFunctor)(I.submit)(K.formSaveButton(H))])]))(function (U) {
      return h.bind(b.widgetBind)(F.eval()()(p.eqRowCons(p.eqRowCons(p.eqRowCons(p.eqRowCons(p.eqRowNil)()(new v.IsSymbol(function () {
        return "policyType";
      }))(S.eqInputField(t.eqMaybe(O.eqPolicyType))))()(new v.IsSymbol(function () {
        return "policy";
      }))(S.eqInputField(p.eqString)))()(new v.IsSymbol(function () {
        return "polPolType";
      }))(S.eqInputField(K.eqPolPolType)))()(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(S.eqInputField(t.eqMaybe(p.eqBoolean))))(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "policy";
      }))()(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(D.inputFieldsToFormFieldsNil)())())())())(D.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(D.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "policy";
      }))()(D.inputFieldsToInputCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(D.inputFieldsToInputNil)())())())())(D.consCountErrors(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.consCountErrors(new v.IsSymbol(function () {
        return "polPolType";
      }))()(D.consCountErrors(new v.IsSymbol(function () {
        return "policy";
      }))()(D.consCountErrors(new v.IsSymbol(function () {
        return "policyType";
      }))()(D.nilCountErrors)))))(D.consAllTouched(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.consAllTouched(new v.IsSymbol(function () {
        return "polPolType";
      }))()(D.consAllTouched(new v.IsSymbol(function () {
        return "policy";
      }))()(D.consAllTouched(new v.IsSymbol(function () {
        return "policyType";
      }))()(D.nilAllTouched)))))(D.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(D.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "policy";
      }))()(D.setFormFieldsTouchedCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(D.setFormFieldsTouchedNil)())())())())(D.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(S.newtypeInputField)(S.newtypeFormField)()()()(D.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(S.newtypeInputField)(S.newtypeFormField)()()()(D.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "policy";
      }))(S.newtypeInputField)(S.newtypeFormField)()()()(D.replaceFormFieldInputsTouchedCons(new v.IsSymbol(function () {
        return "policyType";
      }))(S.newtypeInputField)(S.newtypeFormField)()()()(D.replaceFormFieldInputsTouchedNil)))))(D.modifyAllCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(S.newtypeInputFunction)(S.newtypeFormField)()()()(D.modifyAllCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(S.newtypeInputFunction)(S.newtypeFormField)()()()(D.modifyAllCons(new v.IsSymbol(function () {
        return "policy";
      }))(S.newtypeInputFunction)(S.newtypeFormField)()()()(D.modifyAllCons(new v.IsSymbol(function () {
        return "policyType";
      }))(S.newtypeInputFunction)(S.newtypeFormField)()()()(D.modifyAllNil)))))(D.applyToValidationCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(b.widgetMonad)()(ba)()()(D.applyToValidationCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(b.widgetMonad)()(ba)()()(D.applyToValidationCons(new v.IsSymbol(function () {
        return "policy";
      }))(b.widgetMonad)()(ba)()()(D.applyToValidationCons(new v.IsSymbol(function () {
        return "policyType";
      }))(b.widgetMonad)()(ba)()()(D.applyToValidationNil(b.widgetMonad))))))(D.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "polPolType";
      }))()(D.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "policy";
      }))()(D.formFieldsToMaybeOutputCons(new v.IsSymbol(function () {
        return "policyType";
      }))()(D.formFieldsToMaybeOutputNil)())())())())(ba)(ba)(ba)(ba)(ba)(ba)(ba)(ba)(b.widgetMonad)(U)(H))(function (B) {
        if (B instanceof w.Left) return Z(B.value0);
        if (B instanceof w.Right) return B = M.unwrapOutputFields(ba)(J.hmapRecord()(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "appliesToProd";
        }))(J.constMapping(M.unwrapField(S.newtypeOutputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "polPolType";
        }))(J.constMapping(M.unwrapField(S.newtypeOutputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "policy";
        }))(J.constMapping(M.unwrapField(S.newtypeOutputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
          return "policyType";
        }))(J.constMapping(M.unwrapField(S.newtypeOutputField)))(J.mapRecordWithIndexNil)()())()())()())()()))(B.value0), m.pure(b.widgetApplicative)({
          policy: B.policy,
          policyType: B.policyType,
          appliesToProduct: B.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 102, column 3 - line 110, column 8): " + [B.constructor.name]);
      });
    });
  },
      ea = {
    polPolType: K.FreeTextPolicy.value,
    policy: "",
    policyType: t.Nothing.value,
    appliesToProd: t.Nothing.value
  },
      Y = function Y(H) {
    if (H instanceof t.Nothing) return ea;

    if (H instanceof t.Just) {
      var U = H.value0.policy;
      if (U instanceof O.FreeTextPolicy) U = K.FreeTextPolicy.value;else if (U instanceof O.RefPolicy) U = K.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 62, column 1 - line 62, column 38): " + [U.constructor.name]);
      var B = H.value0.policy;
      if (B instanceof O.FreeTextPolicy) B = q.toString(B.value0);else if (B instanceof O.RefPolicy) B = V.urlToString(B.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 66, column 1 - line 66, column 36): " + [B.constructor.name]);
      return {
        polPolType: U,
        policy: B,
        policyType: H.value0.policyType,
        appliesToProd: H.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 70, column 1 - line 70, column 56): " + [H.constructor.name]);
  },
      ha = {
    polPolType: da.dummy(b.widgetMonad),
    policy: function (H) {
      return P.hoistFnE(H)(function (U) {
        return function (B) {
          var Q = u.getInput(new v.IsSymbol(function () {
            return "polPolType";
          }))(ba)()(aa()(ba)(G.makeSProxiesCons(new v.IsSymbol(function () {
            return "appliesToProd";
          }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
            return "polPolType";
          }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
            return "policy";
          }))()(G.makeSProxiesCons(new v.IsSymbol(function () {
            return "policyType";
          }))()(G.makeSProxiesNil))))).polPolType)(U);
          if (Q instanceof K.FreeTextPolicy) return x.mapFlipped(w.functorEither)(da.readNEStringEi(B))(O.FreeTextPolicy.create);
          if (Q instanceof K.RefPolicy) return x.mapFlipped(w.functorEither)(V.parsePublicURL(B))(O.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 128, column 6 - line 130, column 54): " + [Q.constructor.name]);
        };
      });
    }(b.widgetMonad),
    policyType: da.dummy(b.widgetMonad),
    appliesToProd: da.dummy(b.widgetMonad)
  },
      L = function L(H) {
    var U = function U(B) {
      return f.step(B)(h.bind(b.widgetBind)(m.pure(b.widgetApplicative)(M.wrapInputFields(ba)(J.hmapRecord()(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "appliesToProd";
      }))(J.constMapping(M.wrapField(S.newtypeInputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "polPolType";
      }))(J.constMapping(M.wrapField(S.newtypeInputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "policy";
      }))(J.constMapping(M.wrapField(S.newtypeInputField)))(J.mapRecordWithIndexCons(new v.IsSymbol(function () {
        return "policyType";
      }))(J.constMapping(M.wrapField(S.newtypeInputField)))(J.mapRecordWithIndexNil)()())()())()())()()))(Y(B))))(function (Q) {
        return h.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(C.monoidArray))(b.widgetShiftMap)([Z(K.initFormState()(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "appliesToProd";
        }))()(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "polPolType";
        }))()(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "policy";
        }))()(D.inputFieldsToFormFieldsCons(new v.IsSymbol(function () {
          return "policyType";
        }))()(D.inputFieldsToFormFieldsNil)())())())())(ba)(ba)(Q)(ha)), z.foldMap(z.foldableMaybe)(b.widgetMonoid(C.monoidArray))(R.ipolicyWidg)(B)]))(function (N) {
          return h.discard(h.discardUnit)(b.widgetBind)(E.liftEffect(b.widgetMonadEff(C.monoidArray))(y.logShow(E.monadEffectEffect)(A.showRecord()(A.showRecordFieldsCons(new v.IsSymbol(function () {
            return "appliesToProduct";
          }))(A.showRecordFieldsCons(new v.IsSymbol(function () {
            return "policy";
          }))(A.showRecordFieldsCons(new v.IsSymbol(function () {
            return "policyType";
          }))(A.showRecordFieldsNil)(t.showMaybe(O.showPolicyType)))(O.showPolicy))(t.showMaybe(A.showBoolean))))(N)))(function () {
            return m.pure(b.widgetApplicative)(U(new t.Just(N)));
          });
        });
      }));
    };

    return e.div_(n.shiftMapCofree(C.monoidArray))([W.institutionPolicy])(U(H));
  };

  d.policySigArray = function (H) {
    return e.div_(n.shiftMapCofree(C.monoidArray))([W.institutionPolicies])(K.nonEmptyArrayView(L)(H));
  };
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (d) {
    return function (f) {
      return function (k) {
        return function () {
          return k.parseFromString(f, d);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (d) {
    return function (f) {
      return function () {
        return f[d];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (d) {
    return function (f) {
      return function () {
        return f.getElementsByTagName(d);
      };
    };
  };

  a._getElementsByTagNameNS = function (d) {
    return function (f) {
      return function (k) {
        return function () {
          return k.getElementsByTagNameNS(d, f);
        };
      };
    };
  };

  a.createElement = function (d) {
    return function (f) {
      return function () {
        return f.createElement(d);
      };
    };
  };

  a._createElementNS = function (d) {
    return function (f) {
      return function (k) {
        return function () {
          return k.createElementNS(d, f);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (d, f, k, g) {
    if ("undefined" !== typeof window) return k = window[k], null != k && g instanceof k ? f(g) : d;

    for (var b = g; null != b;) {
      b = Object.getPrototypeOf(b);
      var e = b.constructor.name;
      if (e === k) return f(g);
      if ("Object" === e) break;
    }

    return d;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var d = a["Web.Internal.FFI"],
      f = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (k) {
    return function (g) {
      return d._unsafeReadProtoTagged(f.Nothing.value, f.Just.create, k, g);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var d = a["Web.DOM.Document"],
      f = a["Web.DOM.Document"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var e = function () {
    var c = k.map(b.functorEffect)(g.toMaybe);
    return function (m) {
      return c(f._documentElement(m));
    };
  }();

  d.fromNode = a;
  d.documentElement = e;

  d.getElementsByTagNameNS = function (c) {
    return f._getElementsByTagNameNS(g.toNullable(c));
  };

  d.createElementNS = function (c) {
    return f._createElementNS(g.toNullable(c));
  };

  d.getElementsByTagName = f.getElementsByTagName;
  d.createElement = f.createElement;
})(PS);

(function (a) {
  a._prefix = function (d) {
    return function (f) {
      return f[d];
    };
  }("prefix");

  a.setAttribute = function (d) {
    return function (f) {
      return function (k) {
        return function () {
          k.setAttribute(d, f);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (d) {
    return function (f) {
      return function () {
        return f.getAttribute(d);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var d = a["Web.DOM.Element"],
      f = a["Web.DOM.Element"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect,
      e = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  d.fromNode = a;
  d.toNode = e;

  d.prefix = function (c) {
    return g.toMaybe(f._prefix(c));
  };

  d.getAttribute = function (c) {
    var m = k.map(b.functorEffect)(g.toMaybe),
        h = f._getAttribute(c);

    return function (n) {
      return m(h(n));
    };
  };

  d.setAttribute = f.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (d) {
    return function () {
      return [].slice.call(d);
    };
  };

  a._item = function (d) {
    return function (f) {
      return function () {
        return f.item(d);
      };
    };
  };
})(PS["Web.DOM.HTMLCollection"] = PS["Web.DOM.HTMLCollection"] || {});

(function (a) {
  a["Web.DOM.HTMLCollection"] = a["Web.DOM.HTMLCollection"] || {};
  var d = a["Web.DOM.HTMLCollection"],
      f = a["Web.DOM.HTMLCollection"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  d.item = function (e) {
    var c = k.map(b.functorEffect)(g.toMaybe),
        m = f._item(e);

    return function (h) {
      return c(m(h));
    };
  };

  d.toArray = f.toArray;
})(PS);

(function (a) {
  var d = function d(f) {
    return function (k) {
      return function () {
        return k[f];
      };
    };
  };

  a._ownerDocument = d("ownerDocument");
  a.textContent = d("textContent");

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
  var d = a["Web.DOM.Node"],
      f = a["Web.DOM.Node"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  a = function () {
    var e = k.map(b.functorEffect)(g.toMaybe);
    return function (c) {
      return e(f._ownerDocument(c));
    };
  }();

  d.ownerDocument = a;
  d.textContent = f.textContent;
  d.setTextContent = f.setTextContent;
  d.appendChild = f.appendChild;
})(PS);

(function (a) {
  a["Web.DOM.DOMParser"] = a["Web.DOM.DOMParser"] || {};

  var d = a["Web.DOM.DOMParser"],
      f = a["Web.DOM.DOMParser"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Either"],
      c = a["Data.Functor"],
      m = a["Data.Maybe"],
      h = a.Effect,
      n = a["Web.DOM.Document"],
      w = a["Web.DOM.Element"],
      r = a["Web.DOM.HTMLCollection"],
      p = a["Web.DOM.Node"],
      z = function z(t) {
    return function (C) {
      if (t instanceof m.Nothing) return new e.Right(C);
      if (t instanceof m.Just) return new e.Left(t.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [t.constructor.name]);
    };
  },
      x = function x(t) {
    return function () {
      var C = g.join(h.bindEffect)(c.map(h.functorEffect)(r.toArray)(n.getElementsByTagName("parsererror")(t)))();
      C = b.head(C);
      C = c.map(m.functorMaybe)(w.toNode)(C);
      if (C instanceof m.Nothing) C = k.pure(h.applicativeEffect)(m.Nothing.value);else if (C instanceof m.Just) C = c.map(h.functorEffect)(m.Just.create)(p.textContent(C.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [C.constructor.name]);
      return C();
    };
  };

  d.parseXMLFromString = function (t) {
    return function (C) {
      return function () {
        var A = f.parseFromString("application/xml")(t)(C)(),
            q = x(A)();
        return z(q)(A);
      };
    };
  };

  d.makeDOMParser = f.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (d) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              return function () {
                return e.evaluate(d, f, k, g, b);
              };
            };
          };
        };
      };
    };
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

  a.customNSResolver = function (d) {
    return {
      lookupNamespaceURI: d
    };
  };

  a.createNSResolver = function (d) {
    return function (f) {
      return f.createNSResolver(d);
    };
  };

  a.lookupNamespaceURIInternal = function (d) {
    return function (f) {
      return d.lookupNamespaceURI(f);
    };
  };
})(PS["Web.DOM.Document.XPath"] = PS["Web.DOM.Document.XPath"] || {});

(function (a) {
  a.number_type = XPathResult.NUMBER_TYPE;
  a.string_type = XPathResult.STRING_TYPE;
  a.boolean_type = XPathResult.BOOLEAN_TYPE;
  a.any_unordered_node_type = XPathResult.ANY_UNORDERED_NODE_TYPE;
})(PS["Web.DOM.Document.XPath.ResultType"] = PS["Web.DOM.Document.XPath.ResultType"] || {});

(function (a) {
  a["Web.DOM.Document.XPath.ResultType"] = a["Web.DOM.Document.XPath.ResultType"] || {};
  var d = a["Web.DOM.Document.XPath.ResultType"];
  a = a["Web.DOM.Document.XPath.ResultType"];
  d.number_type = a.number_type;
  d.string_type = a.string_type;
  d.boolean_type = a.boolean_type;
  d.any_unordered_node_type = a.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};
  var d = a["Web.DOM.Document.XPath"],
      f = a["Web.DOM.Document.XPath"],
      k = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.Nullable"],
      e = a.Effect,
      c = a["Web.DOM.Document"],
      m = a["Web.DOM.Document.XPath.ResultType"],
      h = a["Web.DOM.Element"],
      n = a["Web.DOM.Node"];

  a = function () {
    var w = k.map(e.functorEffect)(b.toMaybe);
    return function (r) {
      return w(f.singleNodeValueInternal(r));
    };
  }();

  d.evaluate = function (w) {
    return function (r) {
      return function (p) {
        return function (z) {
          return function (x) {
            return function (t) {
              return f.evaluateInternal(w)(r)(b.toNullable(p))(z)(b.toNullable(x))(t);
            };
          };
        };
      };
    };
  };

  d.evaluateNumber = function (w) {
    return function (r) {
      return function (p) {
        return function (z) {
          return function (x) {
            return function () {
              var t = f.evaluateInternal(w)(r)(b.toNullable(p))(m.number_type)(b.toNullable(z))(x)();
              return f.numberValue(t)();
            };
          };
        };
      };
    };
  };

  d.evaluateString = function (w) {
    return function (r) {
      return function (p) {
        return function (z) {
          return function (x) {
            return function () {
              var t = f.evaluateInternal(w)(r)(b.toNullable(p))(m.string_type)(b.toNullable(z))(x)();
              return f.stringValue(t)();
            };
          };
        };
      };
    };
  };

  d.evaluateBoolean = function (w) {
    return function (r) {
      return function (p) {
        return function (z) {
          return function (x) {
            return function () {
              var t = f.evaluateInternal(w)(r)(b.toNullable(p))(m.boolean_type)(b.toNullable(z))(x)();
              return f.booleanValue(t)();
            };
          };
        };
      };
    };
  };

  d.singleNodeValue = a;

  d.lookupNamespaceURI = function (w) {
    return function (r) {
      return b.toMaybe(f.lookupNamespaceURIInternal(w)(r));
    };
  };

  d.defaultNSResolver = function (w) {
    return function (r) {
      var p = function p(z) {
        return function () {
          var x = c.documentElement(z)();
          if (x instanceof g.Nothing) return w;
          if (x instanceof g.Just) return h.toNode(x.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [x.constructor.name]);
        };
      };

      return function () {
        var z = n.ownerDocument(w)(),
            x = function () {
          if (z instanceof g.Nothing) {
            var t = c.fromNode(w);
            if (t instanceof g.Nothing) return w;
            if (t instanceof g.Just) return p(t.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [t.constructor.name]);
          }

          if (z instanceof g.Just) return p(z.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [z.constructor.name]);
        }();

        return f.createNSResolver(x)(r);
      };
    };
  };

  d.customNSResolver = f.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var d = a["Metajelo.XPaths"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Either"],
      c = a["Data.Foldable"],
      m = a["Data.Functor"],
      h = a["Data.Maybe"],
      n = a["Data.Traversable"],
      w = a["Data.XPath"],
      r = a.Effect,
      p = a["Effect.Exception"],
      z = a["Web.DOM.DOMParser"],
      x = a["Web.DOM.Document"],
      t = a["Web.DOM.Document.XPath"],
      C = a["Web.DOM.Document.XPath.ResultType"],
      A = a["Web.DOM.Element"],
      q = a["Web.DOM.HTMLCollection"];
  a = w.pathAppendNSx(w.stringXPath)(w.root(w.stringXPath))("record");

  var v = function v(I) {
    return function (u) {
      return {
        any: function any(M) {
          return function (G) {
            return function (S) {
              return t.evaluate(G)(M)(u)(S)(h.Nothing.value)(I);
            };
          };
        },
        num: function num(M) {
          return function (G) {
            return t.evaluateNumber(G)(M)(u)(h.Nothing.value)(I);
          };
        },
        str: function str(M) {
          return function (G) {
            return t.evaluateString(G)(M)(u)(h.Nothing.value)(I);
          };
        },
        bool: function bool(M) {
          return function (G) {
            return t.evaluateBoolean(G)(M)(u)(h.Nothing.value)(I);
          };
        },
        nodeMay: function nodeMay(M) {
          return function (G) {
            return k.bind(r.bindEffect)(t.evaluate(G)(M)(u)(C.any_unordered_node_type)(h.Nothing.value)(I))(t.singleNodeValue);
          };
        }
      };
    };
  },
      E = g["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      y = function y(I) {
    var u = function u(M) {
      return function () {
        var G = x.getElementsByTagNameNS(new h.Just(M))("record")(I)();
        return q.item(0)(G)();
      };
    };

    return function () {
      var M = x.getElementsByTagName("record")(I)();
      M = q.item(0)(M)();
      if (M instanceof h.Nothing) M = n.sequence(b.traversableNonEmptyArray)(r.applicativeEffect)(m.map(b.functorNonEmptyArray)(u)(E))(), M = k.join(h.bindMaybe)(c.find(b.foldableNonEmptyArray)(h.isJust)(M));else if (M instanceof h.Just) M = new h.Just(M.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 275, column 16 - line 279, column 38): " + [M.constructor.name]);
      return m.map(h.functorMaybe)(A.toNode)(M);
    };
  };

  g = w.pathAppendNSx(w.stringXPath)(a)("lastModified");

  var F = function F(I) {
    var u = function u(M) {
      return h.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(M);
    };

    if (I instanceof h.Nothing) return f.pure(r.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (I instanceof h.Just) return m.map(r.functorEffect)(u)(A.getAttribute("xmlns")(I.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 183, column 3 - line 185, column 59): " + [I.constructor.name]);
  },
      D = function D(I) {
    return function (u) {
      var M = function M(G) {
        return function (S) {
          return function (P) {
            P = t.lookupNamespaceURI(G)(P);
            if (P instanceof h.Nothing) return S;
            if (P instanceof h.Just) return P.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 200, column 39 - line 202, column 20): " + [P.constructor.name]);
          };
        };
      };

      return function () {
        var G = t.defaultNSResolver(I)(u)(),
            S = A.fromNode(I);
        S = F(S)();
        return t.customNSResolver(M(G)(S));
      };
    };
  };

  w = w.pathAppendNSx(w.stringXPath)(a)("date");
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
  d.dateRootP = w;
  d.lastModRootP = g;

  d.getDefaultParseEnv = function (I) {
    return function () {
      var u = z.makeDOMParser();
      u = z.parseXMLFromString(I)(u)();
      if (u instanceof e.Left) u = p["throw"]("XML parsing error: " + u.value0)();else if (u instanceof e.Right) u = u.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 243, column 13 - line 245, column 26): " + [u.constructor.name]);
      var M = y(u)();
      if (M instanceof h.Nothing) M = p["throw"]("Could not find <record> node!")();else if (M instanceof h.Just) M = M.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 247, column 14 - line 249, column 23): " + [M.constructor.name]);
      var G = A.fromNode(M);
      if (G instanceof h.Nothing) G = p["throw"]("<record> node could not be cast to an element!")();else if (G instanceof h.Just) G = G.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 250, column 14 - line 252, column 23): " + [G.constructor.name]);
      var S = F(new h.Just(G))(),
          P = D(M)(u)();
      P = v(u)(new h.Just(P));
      return {
        doc: u,
        ns: S,
        recNode: M,
        recElem: G,
        xeval: P,
        xevalRoot: {
          any: P.any(M),
          num: P.num(M),
          str: P.str(M),
          bool: P.bool(M),
          nodeMay: P.nodeMay(M)
        }
      };
    };
  };

  d.unsafeSingleNodeValue = function (I) {
    return function (u) {
      return function (M) {
        return function () {
          var G = I.xeval.nodeMay(u)(M)();
          if (G instanceof h.Just) return G.value0;
          if (G instanceof h.Nothing) return p["throw"]("Couldn't find required node at: " + M)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 292, column 3 - line 294, column 40): " + [G.constructor.name]);
        };
      };
    };
  };
})(PS);

(function (a) {
  a.copyToClipboard = function (d) {
    return function () {
      var f = document.createElement("textarea");
      f.type = "text";
      f.value = d;
      f.style.position = "absolute";
      f.style.left = -1E4;
      document.body.appendChild(f);
      f.select();
      document.execCommand("copy");
      document.body.removeChild(f);
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

  var d = a["Control.Applicative"],
      f = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Foldable"],
      g = a["Data.Functor"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      c = a["Data.Traversable"],
      m = a["Data.Unit"],
      h = a["Data.XPath"],
      n = a.Effect,
      w = a["Metajelo.Types"],
      r = a["Metajelo.XPaths"],
      p = a["Nonbili.DOM"],
      z = a["Text.Email.Parser"],
      x = a["Text.URL.Validate"],
      t = a["Web.DOM.Document"],
      C = a["Web.DOM.Element"],
      A = a["Web.DOM.Node"],
      q = function q(H) {
    return function (U) {
      return function (B) {
        return function (Q) {
          var N = C.fromNode(B);
          return function () {
            c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.mapFlipped(b.functorMaybe)(N)(function (ca) {
              return C.setAttribute(H)(e.show(w.showIdentifierType)(Q))(ca);
            }))();
            return m.unit;
          };
        };
      };
    };
  },
      v = a["Data.String.NonEmpty.Internal"].toString,
      E = function E(H) {
    return function (U) {
      return function (B) {
        return function (Q) {
          return function () {
            A.setTextContent(v(Q.id))(B)();
            return q(H)(U)(B)(Q.idType)();
          };
        };
      };
    };
  },
      y = function y(H) {
    return function (U) {
      return function () {
        var B = r.unsafeSingleNodeValue(H)(H.recNode)(h.xx(h.stringXPath)(r.idP))();
        return E(r.idTypeAT)(H)(B)(U)();
      };
    };
  },
      F = function F(H) {
    return function (U) {
      return function () {
        c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.map(b.functorMaybe)(A.setTextContent(v(H)))(U))();
        return m.unit;
      };
    };
  },
      D = function D(H) {
    return function (U) {
      return function () {
        var B = H.xevalRoot.nodeMay(r.dateRootP)();
        return F(U)(B)();
      };
    };
  },
      I = function I(H) {
    return function (U) {
      return function () {
        var B = H.xevalRoot.nodeMay(r.lastModRootP)();
        return F(U)(B)();
      };
    };
  },
      u = function u(H) {
    return function (U) {
      var B = C.prefix(H.recElem);
      return function () {
        if (B instanceof b.Just) var Q = B.value0 + ":";else if (B instanceof b.Nothing) Q = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 235, column 20 - line 237, column 18): " + [B.constructor.name]);
        Q += U;
        return t.createElementNS(new b.Just(H.ns))(Q)(H.doc)();
      };
    };
  },
      M = function M(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = u(H)(B)();
          A.appendChild(C.toNode(Q))(U)();
          return Q;
        };
      };
    };
  },
      G = function G(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = g.map(n.functorEffect)(C.toNode)(M(H)(U)(r.basicMetaP))(),
              N = g.map(n.functorEffect)(C.toNode)(M(H)(Q)(r.titleP))();
          A.setTextContent(v(B.title))(N)();
          N = g.map(n.functorEffect)(C.toNode)(M(H)(Q)(r.creatorP))();
          A.setTextContent(v(B.creator))(N)();
          Q = g.map(n.functorEffect)(C.toNode)(M(H)(Q)(r.pubYearP))();
          return A.setTextContent(v(B.publicationYear))(Q)();
        };
      };
    };
  },
      S = function S(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = M(H)(U)(r.instContactP)();
          c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.mapFlipped(b.functorMaybe)(B.contactType)(function (N) {
            return C.setAttribute(r.instContactTypeAT)(e.show(w.showInstitutionContactType)(N))(Q);
          }))();
          return A.setTextContent(z.toString(B.emailAddress))(C.toNode(Q))();
        };
      };
    };
  },
      P = function P(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = g.map(n.functorEffect)(C.toNode)(M(H)(U)(r.instIdP))();
          return E(r.idTypeAT)(H)(Q)(B)();
        };
      };
    };
  },
      J = function J(H) {
    return function (U) {
      return k.for_(n.applicativeEffect)(f.foldableNonEmptyArray)(U)(function (B) {
        return function () {
          var Q = M(H)(H.recNode)(r.relIdP)(),
              N = C.toNode(Q);
          A.setTextContent(v(B.id))(N)();
          C.setAttribute(r.relIdTypeAT)(e.show(w.showIdentifierType)(B.idType))(Q)();
          return C.setAttribute(r.relTypeAT)(e.show(w.showRelationType)(B.relType))(Q)();
        };
      });
    };
  },
      W = function W(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = g.map(n.functorEffect)(C.toNode)(M(H)(U)(r.resIdP))();
          return E(r.resIdTypeAT)(H)(Q)(B)();
        };
      };
    };
  },
      K = function K(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = M(H)(U)(r.resMetaSourceP)();
          A.setTextContent(x.urlToString(B.url))(C.toNode(Q))();
          return C.setAttribute(r.relTypeAT)(e.show(w.showRelationType)(B.relationType))(Q)();
        };
      };
    };
  },
      O = function O(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = M(H)(U)(r.resTypeP)();
          A.setTextContent(B.description)(C.toNode(Q))();
          return C.setAttribute(r.resTypeGenAT)(e.show(w.showResourceTypeGeneral)(B.generalType))(Q)();
        };
      };
    };
  },
      da = function da(H) {
    return function (U) {
      return function (B) {
        return function (Q) {
          return function () {
            var N = g.map(n.functorEffect)(C.toNode)(M(U)(B)(H))();
            return A.setTextContent(Q)(N)();
          };
        };
      };
    };
  },
      R = function R(H) {
    return function (U) {
      return function (B) {
        return function (Q) {
          return da(H)(U)(B)(v(Q));
        };
      };
    };
  },
      V = function V(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = g.map(n.functorEffect)(C.toNode)(M(H)(U)(r.formatCP))();
          return k.for_(n.applicativeEffect)(k.foldableArray)(B)(function (N) {
            return R(r.formatP)(H)(Q)(N);
          })();
        };
      };
    };
  },
      aa = function aa(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = M(H)(U)(r.instPolicyP)(),
              N = C.toNode(Q);
          c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.mapFlipped(b.functorMaybe)(B.policyType)(function (ca) {
            return C.setAttribute(r.polTypeAT)(e.show(w.showPolicyType)(ca))(Q);
          }))();
          c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.mapFlipped(b.functorMaybe)(B.appliesToProduct)(function (ca) {
            return C.setAttribute(r.appliesToProdAT)(e.show(e.showBoolean)(ca))(Q);
          }))();
          if (B.policy instanceof w.FreeTextPolicy) return R(r.freeTextPolicyP)(H)(N)(B.policy.value0)();
          if (B.policy instanceof w.RefPolicy) return R(r.refPolicyP)(H)(N)(x.urlToNEString(B.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 202, column 3 - line 205, column 27): " + [B.policy.constructor.name]);
        };
      };
    };
  },
      ba = function ba(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = g.map(n.functorEffect)(C.toNode)(M(H)(U)(r.instPolicyCP))();
          return k.for_(n.applicativeEffect)(f.foldableNonEmptyArray)(B)(function (N) {
            return aa(H)(Q)(N);
          })();
        };
      };
    };
  },
      Z = function Z(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = g.map(n.functorEffect)(C.toNode)(M(H)(U)(r.instSustainP))();
          R(r.missionUrlP)(H)(Q)(x.urlToNEString(B.missionStatementURL))();
          return R(r.fundingUrlP)(H)(Q)(x.urlToNEString(B.fundingStatementURL))();
        };
      };
    };
  },
      ea = function ea(H) {
    return function (U) {
      return function (B) {
        return function () {
          var Q = M(H)(U)(r.locP)(),
              N = C.toNode(Q);
          P(H)(N)(B.institutionID)();
          R(r.instNameP)(H)(N)(B.institutionName)();
          da(r.instTypeP)(H)(N)(e.show(w.showInstitutionType)(B.institutionType))();
          c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.mapFlipped(b.functorMaybe)(B.superOrganizationName)(function (ca) {
            return R(r.superOrgNameP)(H)(N)(ca);
          }))();
          S(H)(N)(B.institutionContact)();
          Z(H)(N)(B.institutionSustainability)();
          ba(H)(N)(B.institutionPolicies)();
          return da(r.versioningP)(H)(N)(e.show(e.showBoolean)(B.versioning))();
        };
      };
    };
  },
      Y = function Y(H) {
    return function (U) {
      return function () {
        var B = r.unsafeSingleNodeValue(H)(H.recNode)(h.xx(h.stringXPath)(r.sProdCP))(),
            Q = g.map(n.functorEffect)(C.toNode)(M(H)(B)(r.sProdP))();
        G(H)(Q)(U.basicMetadata)();
        c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.mapFlipped(b.functorMaybe)(U.resourceID)(function (N) {
          return W(H)(Q)(N);
        }))();
        O(H)(Q)(U.resourceType)();
        V(H)(Q)(U.format)();
        c.sequence(c.traversableMaybe)(n.applicativeEffect)(g.mapFlipped(b.functorMaybe)(U.resourceMetadataSource)(function (N) {
          return K(H)(Q)(N);
        }))();
        return ea(H)(Q)(U.location)();
      };
    };
  },
      ha = function ha(H) {
    return function (U) {
      return k.for_(n.applicativeEffect)(f.foldableNonEmptyArray)(U)(function (B) {
        return Y(H)(B);
      });
    };
  },
      L = function L(H) {
    return function (U) {
      return function () {
        y(H)(U.identifier)();
        D(H)(U.date)();
        I(H)(U.lastModified)();
        J(H)(U.relatedIdentifiers)();
        return ha(H)(U.supplementaryProducts)();
      };
    };
  };

  a["Metajelo.XPaths.Write"].recordToString = function (H) {
    return function () {
      var U = r.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      L(U)(H)();
      U = t.documentElement(U.doc)();
      return b.maybe(d.pure(n.applicativeEffect)(""))(p.outerHTML)(U)();
    };
  };
})(PS);

(function (a) {
  a.pickFn = function (d, f) {
    for (var k = {}, g = 0; g < d.length; g++) {
      "undefined" !== typeof f[d[g]] && (k[d[g]] = f[d[g]]);
    }

    return k;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var d = a["Record.Extra"],
      f = a["Data.List.Types"],
      k = a["Data.Monoid"],
      g = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(c) {
    this.keysImpl = c;
  };

  a = new e(function (c) {
    return k.mempty(f.monoidList);
  });

  d.keys = function (c) {
    return function (m) {
      return function (h) {
        return (0, m.keysImpl)(b.RLProxy.value);
      };
    };
  };

  d.nilKeys = a;

  d.consKeys = function (c) {
    return function (m) {
      return new e(function (h) {
        h = (0, m.keysImpl)(b.RLProxy.value);
        var n = g.reflectSymbol(c)(g.SProxy.value);
        return new f.Cons(n, h);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var d = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.RProxy = d;
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var d = a.Option,
      f = a.Option,
      k = a["Control.Monad.State.Class"],
      g = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      e = a["Data.Function.Uncurried"],
      c = a["Data.Identity"],
      m = a["Data.List.Types"],
      h = a["Data.Maybe"],
      n = a["Data.Symbol"],
      w = a["Foreign.Object"],
      r = a.Record,
      p = a["Record.Extra"],
      z = a["Type.Data.Row"],
      x = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      t = function t(D) {
    this.getAllOption = D;
  },
      C = function C(D) {
    this["getAll'"] = D;
  },
      A = function A(D) {
    return function (I) {
      return function (u) {
        u = b.fromFoldable(m.foldableList)(p.keys()(u)(z.RProxy.value));
        return e.runFn2(f.pickFn)(u);
      };
    };
  };

  a = new t(function (D) {
    return function (I) {
      return new h.Just({});
    };
  });

  var q = function q(D) {
    return function (I) {
      return function (u) {
        return function (M) {
          var G = n.reflectSymbol(D)(n.SProxy.value),
              S = w.alter(function (P) {
            return I(P);
          })(G)(M);
          M = I(w.lookup(G)(M));
          return {
            option: S,
            value: M
          };
        };
      };
    };
  },
      v = function v(D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return function (G) {
            return q(D)(function (S) {
              return h.Nothing.value;
            })(M)(G).option;
          };
        };
      };
    };
  },
      E = function E(D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return q(D)(function (G) {
            return G;
          })(u)(M).value;
        };
      };
    };
  },
      y = function y(D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return function (G) {
            return q(D)(function (S) {
              return new h.Just(M);
            })(u)(G).option;
          };
        };
      };
    };
  },
      F = function F(D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return function (G) {
            if (M instanceof h.Just) return y(D)()(u)(M.value0)(G);
            if (M instanceof h.Nothing) return G;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [M.constructor.name]);
          };
        };
      };
    };
  };

  d.empty = w.empty;
  d.get = E;

  d.getAll = function (D) {
    return D["getAll'"];
  };

  d.getSubset = function (D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return function (G) {
            return (0, M["getAll'"])(A()()(u)(G));
          };
        };
      };
    };
  };

  d.getWithDefault = function (D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return function (G) {
            G = E(D)()(M)(G);
            if (G instanceof h.Just) return G.value0;
            if (G instanceof h.Nothing) return u;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [G.constructor.name]);
          };
        };
      };
    };
  };

  d.maySetOptState = function (D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return function (G) {
            return k.put(g.monadStateStateT(c.monadIdentity))(F(D)()(u)(M)(G));
          };
        };
      };
    };
  };

  d.getAllAny = function (D) {
    return function (I) {
      return new C((0, I.getAllOption)(x.value));
    };
  };

  d.getAllOptionNil = a;

  d.getAllOptionCons = function (D) {
    return function (I) {
      return function (u) {
        return function (M) {
          return function (G) {
            return function (S) {
              return new t(function (P) {
                return function (J) {
                  var W = v(D)()()(n.SProxy.value)(J);
                  W = (0, S.getAllOption)(x.value)(W);
                  J = E(D)()(n.SProxy.value)(J);

                  if (W instanceof h.Just) {
                    if (J instanceof h.Just) return new h.Just(r.insert(D)()()(n.SProxy.value)(J.value0)(W.value0));
                    if (J instanceof h.Nothing) return h.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [J.constructor.name]);
                  }

                  if (W instanceof h.Nothing) return h.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [W.constructor.name]);
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
  a._read = function (d, f, k) {
    var g = Object.prototype.toString.call(k);
    return 0 === g.indexOf("[object HTML") && g.indexOf("Element]") === g.length - 8 ? f(k) : d;
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
      f = a["Web.HTML.HTMLElement"],
      k = a["Data.Maybe"];

  d.fromElement = function (g) {
    return f._read(k.Nothing.value, k.Just.create, g);
  };

  d.click = f.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var d = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Concur.React.DOM"],
      e = a["Concur.React.Props"],
      c = a["Concur.React.Run"],
      m = a["Control.Applicative"],
      h = a["Control.Bind"],
      n = a["Control.Cofree"],
      w = a["Control.Monad.State"],
      r = a["Control.Monad.State.Class"],
      p = a["Control.Monad.State.Trans"],
      z = a["Control.Plus"],
      x = a["Data.Array.NonEmpty.Internal"],
      t = a["Data.Either"],
      C = a["Data.Foldable"],
      A = a["Data.Functor"],
      q = a["Data.Identity"],
      v = a["Data.Maybe"],
      E = a["Data.Maybe.First"],
      y = a["Data.Monoid"],
      F = a["Data.Semigroup"],
      D = a["Data.String.Common"],
      I = a["Data.String.NonEmpty.Internal"],
      u = a["Data.Symbol"],
      M = a["Data.Traversable"],
      G = a["Data.Tuple"],
      S = a.Effect,
      P = a["Effect.Class"],
      J = a["Effect.Class.Console"],
      W = a["Effect.Now"],
      K = a.Global,
      O = a["Metajelo.CSS.UI.ClassProps"],
      da = a["Metajelo.CSS.Web.ClassProps"],
      R = a["Metajelo.FormUtil"],
      V = a["Metajelo.Forms.InstitutionContact"],
      aa = a["Metajelo.Forms.InstitutionPolicy"],
      ba = a["Metajelo.Types"],
      Z = a["Metajelo.View"],
      ea = a["Metajelo.XPaths.Read"],
      Y = a["Metajelo.XPaths.Write"],
      ha = a["Nonbili.DOM"],
      L = a.Option,
      H = a["Record.Extra"],
      U = a["Web.DOM.Document"],
      B = a["Web.DOM.Element"],
      Q = a["Web.HTML"],
      N = a["Web.HTML.HTMLDocument"],
      ca = a["Web.HTML.HTMLElement"],
      qa = a["Web.HTML.Window"],
      ta = function ta(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.tooltip])(ia);
  };

  a = b.div_(g.widgetShiftMap)([O.tooltip])(z.empty(g.widgetPlus(y.monoidArray)));

  var ja = function ja(ia) {
    return function () {
      var ka = Q.window();
      ka = qa.document(ka)();
      ka = N.toDocument(ka);
      ka = U.createElement("a")(ka)();
      B.setAttribute("download")("metajelo.xml")(ka)();
      B.setAttribute("href")("data:text/plain;charset=utf-8," + ia)(ka)();
      ka = ca.fromElement(ka);
      if (ka instanceof v.Just) ka = ca.click(ka.value0);else if (ka instanceof v.Nothing) ka = J.log(P.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + ia);else throw Error("Failed pattern match at Metajelo.UI (line 103, column 26 - line 107, column 18): " + [ka.constructor.name]);
      return ka;
    };
  },
      la = function la(ia) {
    return function (ka) {
      return L.getWithDefault(ia)()(L.empty);
    };
  },
      oa = function oa(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.format])(ta(R.textInput(ia)));
  },
      pa = function pa(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.formatList])(R.arrayView(oa)(ia));
  },
      ua = function ua(ia) {
    return function () {
      return {
        lastModified: h.join(S.bindEffect)(A.map(S.functorEffect)(A.map(A.functorFn)(ea.rightOrThrow)(R.formatXsdDate))(W.nowDateTime))(),
        date: ia.date,
        identifier: ia.identifier,
        relatedIdentifiers: ia.relatedIdentifiers,
        supplementaryProducts: ia.supplementaryProducts
      };
    };
  },
      Ha = function Ha(ia) {
    var ka = b.div_(g.widgetShiftMap)([da.errorDisplayBox])(b.div_(g.widgetShiftMap)([])(b.span(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([da.errorDisplay])([b.text(k.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        ma = function ma(ra) {
      return function (xa) {
        var Fa = function Fa(Aa) {
          return f.step(Aa)(h.bind(g.widgetBind)(b.button_(g.widgetShiftMap)([O.downloadBtn, e.onClick, e.disabled(D["null"](Aa))])(b.text(k.widgetLiftWidget)("Download")))(function () {
            return h.bind(g.widgetBind)(P.liftEffect(g.widgetMonadEff(y.monoidArray))(ra))(function () {
              return m.pure(g.widgetApplicative)(Fa(Aa));
            });
          }));
        };

        return f.dyn(Fa(xa));
      };
    };

    return b.div_(g.widgetShiftMap)([])(function () {
      var ra = K.encodeURIComponent(ia);
      return h.bind(g.widgetBind)(P.liftEffect(g.widgetMonadEff(y.monoidArray))(ja(v.fromMaybe("")(ra))))(function (xa) {
        return v.maybe(ka)(ma(xa))(ra);
      });
    }());
  },
      Na = function Na(ia) {
    var ka = function ka(ma) {
      return f.step(ma)(h.bind(g.widgetBind)(b.button_(g.widgetShiftMap)([O.clipBtn, e.onClick, e.disabled(D["null"](ma))])(b.text(k.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return h.bind(g.widgetBind)(P.liftEffect(g.widgetMonadEff(y.monoidArray))(ha.copyToClipboard(ma)))(function () {
          return m.pure(g.widgetApplicative)(ka(ma));
        });
      }));
    };

    return f.dyn(ka(ia));
  },
      Pa = function Pa(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.sustainability])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.span_(n.shiftMapCofree(y.monoidArray))([O.missionStatement])(R.urlInput(L.getWithDefault(new u.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new t.Left(""))(u.SProxy.value)(ia))))(function (ka) {
      var ma = t.hush(ka);
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.span_(n.shiftMapCofree(y.monoidArray))([O.fundingStatement])(R.urlInput(L.getWithDefault(new u.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new t.Left(""))(u.SProxy.value)(ia))))(function (ra) {
        var xa = t.hush(ra);
        return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(u.SProxy.value)(new v.Just(ka))))(function () {
          return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
            return "missionStatementURL";
          }))()(u.SProxy.value)(ma)))(function () {
            return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(u.SProxy.value)(new v.Just(ra))))(function () {
              return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(u.SProxy.value)(xa));
            });
          });
        }))(ia));
      });
    }));
  },
      Ta = function Ta(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.resourceType])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.resourceTypeGen])(R.menuSignal(ba.boundedEnumResourceTypeGeneral)(R.isOptionResourceTypeGeneral)(L.get(new u.IsSymbol(function () {
      return "generalType";
    }))()(u.SProxy.value)(ia)))))(function (ka) {
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.resourceTypeDescr])(R.textInput(h.join(v.bindMaybe)(A.map(v.functorMaybe)(I.fromString)(L.get(new u.IsSymbol(function () {
        return "description";
      }))()(u.SProxy.value)(ia)))))))(function (ma) {
        return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
          return "description";
        }))()(u.SProxy.value)(A.map(v.functorMaybe)(I.toString)(ma))))(function () {
          return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
            return "generalType";
          }))()(u.SProxy.value)(ka));
        }))(ia));
      });
    }));
  },
      Ja = function Ja(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.resourceMDSource])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.url])(R.urlInput(L.getWithDefault(new u.IsSymbol(function () {
      return "url_Ei";
    }))()(new t.Left(""))(u.SProxy.value)(ia)))))(function (ka) {
      var ma = t.hush(ka);
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.relType])(R.menuSignal(ba.boundedEnumRelationType)(R.isOptionRelationType)(L.get(new u.IsSymbol(function () {
        return "relationType";
      }))()(u.SProxy.value)(ia)))))(function (ra) {
        return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
          return "url_Ei";
        }))()(u.SProxy.value)(new v.Just(ka))))(function () {
          return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
            return "url";
          }))()(u.SProxy.value)(ma)))(function () {
            return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
              return "relationType";
            }))()(u.SProxy.value)(ra));
          });
        }))(ia));
      });
    }));
  },
      Ua = function Ua(ia) {
    var ka = v.fromMaybe(L.empty)(ia);
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.relatedId])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.id])(R.textInput(L.get(new u.IsSymbol(function () {
      return "id";
    }))()(u.SProxy.value)(ka)))))(function (ma) {
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.idType])(R.menuSignal(ba.boundedEnumIdentifierType)(R.isOptionIdentifierType)(L.get(new u.IsSymbol(function () {
        return "idType";
      }))()(u.SProxy.value)(ka)))))(function (ra) {
        return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.relType])(R.menuSignal(ba.boundedEnumRelationType)(R.isOptionRelationType)(L.get(new u.IsSymbol(function () {
          return "relType";
        }))()(u.SProxy.value)(ka)))))(function (xa) {
          return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(v.Just.create(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
            return "id";
          }))()(u.SProxy.value)(ma)))(function () {
            return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
              return "idType";
            }))()(u.SProxy.value)(ra)))(function () {
              return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                return "relType";
              }))()(u.SProxy.value)(xa));
            });
          }))(ka)));
        });
      });
    }));
  },
      T = function T(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.relatedIds])(b.span_(n.shiftMapCofree(y.monoidArray))([O.relatedIdsHeader])(b.div_(n.shiftMapCofree(y.monoidArray))([O.relatedIdList])(R.nonEmptyArrayView(Ua)(ia))));
  },
      na = function na(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.identifier])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.id])(R.textInput(L.get(new u.IsSymbol(function () {
      return "id";
    }))()(u.SProxy.value)(ia)))))(function (ka) {
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.idType])(R.menuSignal(ba.boundedEnumIdentifierType)(R.isOptionIdentifierType)(L.get(new u.IsSymbol(function () {
        return "idType";
      }))()(u.SProxy.value)(ia)))))(function (ma) {
        return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
          return "id";
        }))()(u.SProxy.value)(ka)))(function () {
          return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
            return "idType";
          }))()(u.SProxy.value)(ma));
        }))(ia));
      });
    }));
  },
      Ea = function Ea(ia) {
    var ka = function ka(ra) {
      return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([O.locPreview])([b["br'"](k.widgetLiftWidget), C.foldMap(C.foldableMaybe)(g.widgetMonoid(y.monoidArray))(function (xa) {
        return C.fold(C.foldableArray)(g.widgetMonoid(y.monoidArray))(Z.spacify(Z.locElems(xa)));
      })(ra)]);
    },
        ma = v.fromMaybe(L.empty)(ia);

    return b.div_(n.shiftMapCofree(y.monoidArray))([O.location])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.institutionId])(na(la(new u.IsSymbol(function () {
      return "institutionID_opt";
    }))()(u.SProxy.value)(ma)))))(function (ra) {
      var xa = L.getAll(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
        return "id";
      }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
        return "idType";
      }))()()()()(L.getAllOptionNil))))(ra);
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.institutionName])(R.textInput(L.get(new u.IsSymbol(function () {
        return "institutionName";
      }))()(u.SProxy.value)(ma)))))(function (Fa) {
        return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.institutionType])(R.menuSignal(ba.boundedEnumInstitutionType)(R.isOptionInstitutionType)(L.get(new u.IsSymbol(function () {
          return "institutionType";
        }))()(u.SProxy.value)(ma)))))(function (Aa) {
          return h.discard(h.discardUnit)(n.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(b["br'"](k.widgetLiftWidget)))(function () {
            return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.superOrg])(R.textInput(h.join(v.bindMaybe)(L.get(new u.IsSymbol(function () {
              return "superOrganizationName";
            }))()(u.SProxy.value)(ma))))))(function (Ka) {
              return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(V.contactSignal(L.get(new u.IsSymbol(function () {
                return "institutionContact";
              }))()(u.SProxy.value)(ma)))(function (Oa) {
                return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(Pa(la(new u.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(u.SProxy.value)(ma)))(function (La) {
                  var Ma = L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(H.consKeys(new u.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(H.nilKeys)))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(L.getAllOptionNil))))(La);
                  return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(aa.policySigArray(new G.Tuple(L.getWithDefault(new u.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(u.SProxy.value)(ma), L.get(new u.IsSymbol(function () {
                    return "institutionPolicies";
                  }))()(u.SProxy.value)(ma))))(function (X) {
                    var fa = G.fst(X),
                        sa = G.snd(X);
                    return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.versioning])(R.checkBoxS(L.getWithDefault(new u.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(u.SProxy.value)(ma)))))(function (va) {
                      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(u.SProxy.value)(new v.Just(ra))))(function () {
                        return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                          return "institutionID";
                        }))()(u.SProxy.value)(xa)))(function () {
                          return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                            return "institutionName";
                          }))()(u.SProxy.value)(Fa)))(function () {
                            return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                              return "institutionType";
                            }))()(u.SProxy.value)(Aa)))(function () {
                              return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(u.SProxy.value)(new v.Just(Ka))))(function () {
                                return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                  return "institutionContact";
                                }))()(u.SProxy.value)(Oa)))(function () {
                                  return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                    return "iSustain_opt";
                                  }))()(u.SProxy.value)(new v.Just(La))))(function () {
                                    return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                      return "institutionSustainability";
                                    }))()(u.SProxy.value)(Ma)))(function () {
                                      return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                        return "_numPolicies";
                                      }))()(u.SProxy.value)(new v.Just(fa))))(function () {
                                        return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                          return "institutionPolicies";
                                        }))()(u.SProxy.value)(sa)))(function () {
                                          return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                            return "versioning";
                                          }))()(u.SProxy.value)(new v.Just(va)));
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      }))(ma)))(function (ya) {
                        var Ca = L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
                          return "institutionContact";
                        }))(H.consKeys(new u.IsSymbol(function () {
                          return "institutionID";
                        }))(H.consKeys(new u.IsSymbol(function () {
                          return "institutionName";
                        }))(H.consKeys(new u.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(H.consKeys(new u.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(H.consKeys(new u.IsSymbol(function () {
                          return "institutionType";
                        }))(H.consKeys(new u.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(H.consKeys(new u.IsSymbol(function () {
                          return "versioning";
                        }))(H.nilKeys)))))))))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(L.getAllOptionNil))))))))))(ya);
                        return h.discard(h.discardUnit)(n.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(ka(Ca)))(function () {
                          return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(new v.Just(ya));
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
      Xa = function Xa(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.basicMetadata])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.title])(R.textInput(L.get(new u.IsSymbol(function () {
      return "title";
    }))()(u.SProxy.value)(ia)))))(function (ka) {
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.creator])(R.textInput(L.get(new u.IsSymbol(function () {
        return "creator";
      }))()(u.SProxy.value)(ia)))))(function (ma) {
        return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([])(b.span_(n.shiftMapCofree(y.monoidArray))([O.pubyear])(R.textInput(L.get(new u.IsSymbol(function () {
          return "publicationYear";
        }))()(u.SProxy.value)(ia)))))(function (ra) {
          return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
            return "title";
          }))()(u.SProxy.value)(ka)))(function () {
            return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
              return "creator";
            }))()(u.SProxy.value)(ma)))(function () {
              return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                return "publicationYear";
              }))()(u.SProxy.value)(ra));
            });
          }))(ia));
        });
      });
    }));
  },
      Ga = function Ga(ia) {
    var ka = function ka(ra) {
      return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([O.prodPreview])([b["br'"](k.widgetLiftWidget), C.fold(C.foldableMaybe)(g.widgetMonoid(y.monoidArray))(A.map(v.functorMaybe)(Z.mkSupplementaryProductWidget)(ra))]);
    },
        ma = v.fromMaybe(L.empty)(ia);

    return b.div_(n.shiftMapCofree(y.monoidArray))([O.product])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(Xa(la(new u.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(u.SProxy.value)(ma)))(function (ra) {
      var xa = L.getAll(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
        return "creator";
      }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
        return "title";
      }))()()()()(L.getAllOptionNil)))))(ra);
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([O.resourceId])(na(la(new u.IsSymbol(function () {
        return "resourceID_opt";
      }))()(u.SProxy.value)(ma))))(function (Fa) {
        var Aa = L.getAll(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
          return "id";
        }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
          return "idType";
        }))()()()()(L.getAllOptionNil))))(Fa);
        return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(Ta(la(new u.IsSymbol(function () {
          return "resourceType_opt";
        }))()(u.SProxy.value)(ma)))(function (Ka) {
          var Oa = L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
            return "description";
          }))(H.consKeys(new u.IsSymbol(function () {
            return "generalType";
          }))(H.nilKeys)))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
            return "description";
          }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
            return "generalType";
          }))()()()()(L.getAllOptionNil))))(Ka);
          return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(pa(new G.Tuple(L.getWithDefault(new u.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(u.SProxy.value)(ma), L.getWithDefault(new u.IsSymbol(function () {
            return "format";
          }))()([])(u.SProxy.value)(ma))))(function (La) {
            var Ma = G.fst(La),
                X = G.snd(La);
            return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(Ja(la(new u.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(u.SProxy.value)(ma)))(function (fa) {
              var sa = L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
                return "relationType";
              }))(H.consKeys(new u.IsSymbol(function () {
                return "url";
              }))(H.nilKeys)))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
                return "relationType";
              }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                return "url";
              }))()()()()(L.getAllOptionNil))))(fa);
              return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(Ea(L.get(new u.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(u.SProxy.value)(ma)))(function (va) {
                var ya = h.join(v.bindMaybe)(A.map(v.functorMaybe)(L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
                  return "institutionContact";
                }))(H.consKeys(new u.IsSymbol(function () {
                  return "institutionID";
                }))(H.consKeys(new u.IsSymbol(function () {
                  return "institutionName";
                }))(H.consKeys(new u.IsSymbol(function () {
                  return "institutionPolicies";
                }))(H.consKeys(new u.IsSymbol(function () {
                  return "institutionSustainability";
                }))(H.consKeys(new u.IsSymbol(function () {
                  return "institutionType";
                }))(H.consKeys(new u.IsSymbol(function () {
                  return "superOrganizationName";
                }))(H.consKeys(new u.IsSymbol(function () {
                  return "versioning";
                }))(H.nilKeys)))))))))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                  return "versioning";
                }))()()()()(L.getAllOptionNil)))))))))))(va));
                return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(u.SProxy.value)(new v.Just(ra))))(function () {
                  return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(u.SProxy.value)(xa)))(function () {
                    return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(u.SProxy.value)(new v.Just(Fa))))(function () {
                      return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                        return "resourceID";
                      }))()(u.SProxy.value)(new v.Just(Aa))))(function () {
                        return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(u.SProxy.value)(new v.Just(Ka))))(function () {
                          return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                            return "resourceType";
                          }))()(u.SProxy.value)(Oa)))(function () {
                            return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                              return "_numFormats";
                            }))()(u.SProxy.value)(new v.Just(Ma))))(function () {
                              return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                return "format";
                              }))()(u.SProxy.value)(new v.Just(X))))(function () {
                                return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(u.SProxy.value)(new v.Just(fa))))(function () {
                                  return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(u.SProxy.value)(new v.Just(sa))))(function () {
                                    return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(u.SProxy.value)(va)))(function () {
                                      return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                                        return "location";
                                      }))()(u.SProxy.value)(ya));
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
                }))(ma)))(function (Ca) {
                  var za = L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
                    return "basicMetadata";
                  }))(H.consKeys(new u.IsSymbol(function () {
                    return "format";
                  }))(H.consKeys(new u.IsSymbol(function () {
                    return "location";
                  }))(H.consKeys(new u.IsSymbol(function () {
                    return "resourceID";
                  }))(H.consKeys(new u.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(H.consKeys(new u.IsSymbol(function () {
                    return "resourceType";
                  }))(H.nilKeys)))))))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "format";
                  }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "location";
                  }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(L.getAllOptionNil))))))))(Ca);
                  return h.discard(h.discardUnit)(n.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(ka(za)))(function () {
                    return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(new v.Just(Ca));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      Ya = function Ya(ia) {
    return b.div_(n.shiftMapCofree(y.monoidArray))([O.products])(b.span_(n.shiftMapCofree(y.monoidArray))([O.productsHeader])(b.div_(n.shiftMapCofree(y.monoidArray))([O.productList])(R.nonEmptyArrayView(Ga)(ia))));
  },
      Va = function Va(ia) {
    return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(b.div_(n.shiftMapCofree(y.monoidArray))([O.recordId])(na(la(new u.IsSymbol(function () {
      return "identifier_opt";
    }))()(u.SProxy.value)(ia))))(function (ka) {
      var ma = L.getAll(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
        return "id";
      }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
        return "idType";
      }))()()()()(L.getAllOptionNil))))(ka);
      return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(A.map(A.functorFn)(b.div_(n.shiftMapCofree(y.monoidArray))([O.date]))(R.textInput)(L.get(new u.IsSymbol(function () {
        return "date";
      }))()(u.SProxy.value)(ia)))(function (ra) {
        return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(T(new G.Tuple(L.getWithDefault(new u.IsSymbol(function () {
          return "_numRelIds";
        }))()(0)(u.SProxy.value)(ia), L.get(new u.IsSymbol(function () {
          return "relId_opts";
        }))()(u.SProxy.value)(ia))))(function (xa) {
          var Fa = G.fst(xa),
              Aa = G.snd(xa),
              Ka = h.join(v.bindMaybe)(A.map(v.functorMaybe)(M.sequence(x.traversableNonEmptyArray)(v.applicativeMaybe))(A.map(v.functorMaybe)(A.map(x.functorNonEmptyArray)(L.getAll(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
            return "id";
          }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
            return "idType";
          }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
            return "relType";
          }))()()()()(L.getAllOptionNil)))))))(Aa)));
          return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(Ya(new G.Tuple(L.getWithDefault(new u.IsSymbol(function () {
            return "_numSupProds";
          }))()(0)(u.SProxy.value)(ia), L.get(new u.IsSymbol(function () {
            return "supProd_opts";
          }))()(u.SProxy.value)(ia))))(function (Oa) {
            var La = G.fst(Oa),
                Ma = G.snd(Oa),
                X = h.join(v.bindMaybe)(A.map(v.functorMaybe)(M.sequence(x.traversableNonEmptyArray)(v.applicativeMaybe))(A.map(v.functorMaybe)(A.map(x.functorNonEmptyArray)(L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
              return "basicMetadata";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "format";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "location";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "resourceID";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "resourceMetadataSource";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "resourceType";
            }))(H.nilKeys)))))))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "basicMetadata";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "format";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "location";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "resourceID";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "resourceMetadataSource";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "resourceType";
            }))()()()()(L.getAllOptionNil))))))))))(Ma)));
            return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
              return "identifier_opt";
            }))()(u.SProxy.value)(new v.Just(ka))))(function () {
              return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                return "identifier";
              }))()(u.SProxy.value)(ma)))(function () {
                return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                  return "date";
                }))()(u.SProxy.value)(ra)))(function () {
                  return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                    return "_numRelIds";
                  }))()(u.SProxy.value)(new v.Just(Fa))))(function () {
                    return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                      return "relId_opts";
                    }))()(u.SProxy.value)(Aa)))(function () {
                      return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                        return "relatedIdentifiers";
                      }))()(u.SProxy.value)(Ka)))(function () {
                        return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                          return "_numSupProds";
                        }))()(u.SProxy.value)(new v.Just(La))))(function () {
                          return h.discard(h.discardUnit)(p.bindStateT(q.monadIdentity))(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                            return "supProd_opts";
                          }))()(u.SProxy.value)(Ma)))(function () {
                            return h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
                              return "supplementaryProducts";
                            }))()(u.SProxy.value)(X));
                          });
                        });
                      });
                    });
                  });
                });
              });
            }))(ia));
          });
        });
      });
    });
  };

  z = function () {
    var ia = function ia(ka) {
      var ma = function ma(ra) {
        return v.maybe(m.pure(S.applicativeEffect)(""))(Y.recordToString)(ra);
      };

      return h.bind(g.widgetBind)(P.liftEffect(g.widgetMonadEff(y.monoidArray))(M.sequence(M.traversableMaybe)(S.applicativeEffect)(A.map(v.functorMaybe)(ua)(ka))))(function (ra) {
        return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([O.recPreview])([h.bind(g.widgetBind)(P.liftEffect(g.widgetMonadEff(y.monoidArray))(ma(ra)))(function (xa) {
          return b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([O.previewButtons])([Ha(xa), Na(xa)]);
        }), b["br'"](k.widgetLiftWidget), C.fold(C.foldableMaybe)(g.widgetMonoid(y.monoidArray))(A.map(v.functorMaybe)(Z.mkRecordWidget)(ra))]);
      });
    };

    return f.loopS(y.monoidArray)(L.empty)(function (ka) {
      return b.div_(n.shiftMapCofree(y.monoidArray))([O.record])(h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(Va(ka))(function (ma) {
        var ra = R.formatXsdDate(R.initDate);
        ra = t.hush(ra);
        var xa = L.get(new u.IsSymbol(function () {
          return "lastModified";
        }))()(u.SProxy.value)(ma);
        return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(F.append(E.semigroupFirst)(xa)(ra)))(function (Fa) {
          return h.bind(n.bindCofree(g.widgetAlternative(y.monoidArray)))(m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(w.execState(h.bind(p.bindStateT(q.monadIdentity))(r.get(p.monadStateStateT(q.monadIdentity)))(L.maySetOptState(new u.IsSymbol(function () {
            return "lastModified";
          }))()(u.SProxy.value)(Fa)))(ma)))(function (Aa) {
            var Ka = L.getSubset()()(H.consKeys(new u.IsSymbol(function () {
              return "date";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "identifier";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "lastModified";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "relatedIdentifiers";
            }))(H.consKeys(new u.IsSymbol(function () {
              return "supplementaryProducts";
            }))(H.nilKeys))))))(L.getAllAny()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "date";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "identifier";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "lastModified";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "relatedIdentifiers";
            }))()()()()(L.getAllOptionCons(new u.IsSymbol(function () {
              return "supplementaryProducts";
            }))()()()()(L.getAllOptionNil)))))))(Aa);
            return h.discard(h.discardUnit)(n.bindCofree(g.widgetAlternative(y.monoidArray)))(f.display(ia(Ka)))(function () {
              return m.pure(n.applicativeCofree(g.widgetAlternative(y.monoidArray)))(Aa);
            });
          });
        });
      }));
    });
  }();

  var Wa = b["div'"](g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([b.div(g.widgetMultiAlternative(y.monoidArray))(g.widgetShiftMap)([O.page])(m.pure(m.applicativeArray)(f.dyn(z)))]);

  d.runFormSPA = function (ia) {
    return c.runWidgetInDom(ia)(Wa);
  };

  d.page = Wa;
  d.utf8DataAttr = "data:text/plain;charset=utf-8";
  d.downloadButton = Ha;
  d.mkDLAnchorAndClicker = ja;
  d.copyButton = Na;
  d.accumulateMetajeloRecord = z;
  d.finalizeRecord = ua;
  d.accumulateMetajeloRecUI = Va;
  d.accumulateSuppProd = Ga;
  d.supProdSigArray = Ya;
  d.accumulateLocation = Ea;
  d.accumulateSustain = Pa;
  d.accumulateIdent = na;
  d.accumulateRelatedIdent = Ua;
  d.relIdSigArray = T;
  d.accumulateBasicMetaData = Xa;
  d.accumulateResType = Ta;
  d.formatSignal = oa;
  d.formatSigArray = pa;
  d.accumulateResMdSource = Ja;
  d.tooltip = a;
  d.tooltipS = ta;
  d.getOpt = la;
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
//# sourceMappingURL=prod.7c48697c.js.map