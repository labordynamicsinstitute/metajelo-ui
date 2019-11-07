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
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var h = require("object-assign"),
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
    aa = n ? Symbol.for("react.suspense_list") : 60120,
    ba = n ? Symbol.for("react.memo") : 60115,
    ca = n ? Symbol.for("react.lazy") : 60116;

n && Symbol.for("react.fundamental");
n && Symbol.for("react.responder");
var z = "function" === typeof Symbol && Symbol.iterator;

function A(a) {
  for (var b = a.message, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, c = 1; c < arguments.length; c++) d += "&args[]=" + encodeURIComponent(arguments[c]);

  a.message = "Minified React error #" + b + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
  return a;
}

var B = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    C = {};

function D(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = d || B;
}

D.prototype.isReactComponent = {};

D.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw A(Error(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

D.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function E() {}

E.prototype = D.prototype;

function F(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = d || B;
}

var G = F.prototype = new E();
G.constructor = F;
h(G, D.prototype);
G.isPureReactComponent = !0;
var H = {
  current: null
},
    I = {
  suspense: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      k = null;
  if (null != b) for (c in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === e[c] && (e[c] = f[c]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
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

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
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
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    e = a[k];
    var f = b + T(e, k);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = z && a[z] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(e = a.next()).done;) e = e.value, f = b + T(e, k++), g += S(e, f, d, c);else if ("object" === e) throw d = "" + a, A(Error(31), "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, "");
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = H.current;
  if (null === a) throw A(Error(321));
  return a;
}

var X = {
  Children: {
    map: function (a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function (a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function (a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      if (!N(a)) throw A(Error(143));
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: D,
  PureComponent: F,
  createContext: function (a, b) {
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
  },
  forwardRef: function (a) {
    return {
      $$typeof: x,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ca,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: ba,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  Profiler: u,
  StrictMode: t,
  Suspense: y,
  unstable_SuspenseList: aa,
  createElement: M,
  cloneElement: function (a, b, d) {
    if (null === a || void 0 === a) throw A(Error(267), a);
    var c = void 0,
        e = h({}, a.props),
        g = a.key,
        k = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (k = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: k,
      props: e,
      _owner: f
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.9.0",
  unstable_withSuspenseConfig: function (a, b) {
    var d = I.suspense;
    I.suspense = void 0 === b ? null : b;

    try {
      a();
    } finally {
      I.suspense = d;
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: H,
    ReactCurrentBatchConfig: I,
    ReactCurrentOwner: J,
    IsSomeRendererActing: {
      current: !1
    },
    assign: h
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"5IvP":[function(require,module,exports) {
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var d=void 0,e=void 0,g=void 0,m=void 0,n=void 0;exports.unstable_now=void 0;exports.unstable_forceFrameRate=void 0;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,r=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(r,0),b;}};exports.unstable_now=function(){return Date.now()};d=function(a){null!==p?setTimeout(d,0,a):(p=a,setTimeout(r,0))};e=function(a,b){q=setTimeout(a,b)};g=function(){clearTimeout(q)};m=function(){return!1};n=exports.unstable_forceFrameRate=function(){}}else{var t=window.performance,u=window.Date,v=window.setTimeout,
w=window.clearTimeout,x=window.requestAnimationFrame,y=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));exports.unstable_now="object"===typeof t&&
"function"===typeof t.now?function(){return t.now()}:function(){return u.now()};var z=!1,A=null,B=-1,C=-1,D=33.33,E=-1,F=-1,G=0,H=!1;m=function(){return exports.unstable_now()>=G};n=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):0<a?(D=Math.floor(1E3/a),H=!0):(D=33.33,H=!1)};var J=function(){if(null!==A){var a=exports.unstable_now(),b=0<G-a;try{A(b,
a)||(A=null)}catch(c){throw I.postMessage(null),c;}}},K=new MessageChannel,I=K.port2;K.port1.onmessage=J;var L=function(a){if(null===A)F=E=-1,z=!1;else{z=!0;x(function(a){w(B);L(a)});var b=function(){G=exports.unstable_now()+D/2;J();B=v(b,3*D)};B=v(b,3*D);if(-1!==E&&.1<a-E){var c=a-E;!H&&-1!==F&&c<D&&F<D&&(D=c<F?F:c,8.33>D&&(D=8.33));F=c}E=a;G=a+D;I.postMessage(null)}};d=function(a){A=a;z||(z=!0,x(function(a){L(a)}))};e=function(a,b){C=v(function(){a(exports.unstable_now())},b)};g=function(){w(C);
C=-1}}var M=null,N=null,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a,b){var c=a.next;if(c===a)M=null;else{a===M&&(M=c);var f=a.previous;f.next=c;c.previous=f}a.next=a.previous=null;c=a.callback;f=P;var l=O;P=a.priorityLevel;O=a;try{var h=a.expirationTime<=b;switch(P){case 1:var k=c(h);break;case 2:k=c(h);break;case 3:k=c(h);break;case 4:k=c(h);break;case 5:k=c(h)}}catch(Z){throw Z;}finally{P=f,O=l}if("function"===typeof k)if(b=a.expirationTime,a.callback=k,null===M)M=a.next=a.previous=a;else{k=null;h=M;do{if(b<=h.expirationTime){k=h;break}h=h.next}while(h!==
M);null===k?k=M:k===M&&(M=a);b=k.previous;b.next=k.previous=a;a.next=k;a.previous=b}}function U(a){if(null!==N&&N.startTime<=a){do{var b=N,c=b.next;if(b===c)N=null;else{N=c;var f=b.previous;f.next=c;c.previous=f}b.next=b.previous=null;V(b,b.expirationTime)}while(null!==N&&N.startTime<=a)}}function W(a){S=!1;U(a);R||(null!==M?(R=!0,d(X)):null!==N&&e(W,N.startTime-a))}
function X(a,b){R=!1;S&&(S=!1,g());U(b);Q=!0;try{if(!a)for(;null!==M&&M.expirationTime<=b;)T(M,b),b=exports.unstable_now(),U(b);else if(null!==M){do T(M,b),b=exports.unstable_now(),U(b);while(null!==M&&!m())}if(null!==M)return!0;null!==N&&e(W,N.startTime-b);return!1}finally{Q=!1}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}
function V(a,b){if(null===M)M=a.next=a.previous=a;else{var c=null,f=M;do{if(b<f.expirationTime){c=f;break}f=f.next}while(f!==M);null===c?c=M:c===M&&(M=a);b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}}var aa=n;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var f=exports.unstable_now();if("object"===typeof c&&null!==c){var l=c.delay;l="number"===typeof l&&0<l?f+l:f;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),l=f;c=l+c;a={callback:b,priorityLevel:a,startTime:l,expirationTime:c,next:null,previous:null};if(l>f){c=l;if(null===N)N=a.next=a.previous=a;else{b=null;var h=N;do{if(c<h.startTime){b=h;break}h=h.next}while(h!==N);null===b?b=N:b===N&&(N=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=
c}null===M&&N===a&&(S?g():S=!0,e(W,l-f))}else V(a,c),R||Q||(R=!0,d(X));return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(a===b)a===M?M=null:a===N&&(N=null);else{a===M?M=b:a===N&&(N=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};exports.unstable_getCurrentPriorityLevel=function(){return P};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();U(a);return null!==O&&null!==M&&M.startTime<=a&&M.expirationTime<O.expirationTime||m()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){R||Q||(R=!0,d(X))};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M};

},{}],"MDSO":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"5IvP"}],"i17t":[function(require,module,exports) {
/** @license React v16.9.0
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
'use strict';var aa=require("react"),m=require("object-assign"),q=require("scheduler");function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}if(!aa)throw t(Error(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw t(Error(96),a);if(!ea[c]){if(!b.extractEvents)throw t(Error(97),a);ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],h=b,g=d;if(fa.hasOwnProperty(g))throw t(Error(99),g);fa[g]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],h,g);e=!0}else f.registrationName?(ha(f.registrationName,h,g),e=!0):e=!1;if(!e)throw t(Error(98),d,a);}}}}
function ha(a,b,c){if(ia[a])throw t(Error(100),a);ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,h,g,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,h,g,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,h,g,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw t(Error(198));na||(na=!0,oa=l)}}var sa=null,ta=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw t(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw t(Error(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw t(Error(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw t(Error(102),c);ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw t(Error(231),b,typeof c);
return c}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw t(Error(33));}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Ma(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}
function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement);
function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),ab=Wa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,db=null,eb=null;
function fb(){if(eb)return eb;var a,b=db,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var h=c-a;for(d=1;d<=h&&b[c-d]===e[f-d];d++);return eb=e.slice(a,1<d?1-d:void 0)}function gb(){return!0}function hb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?gb:hb;this.isPropagationStopped=hb;return this}
m(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=gb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=gb)},persist:function(){this.isPersistent=gb},isPersistent:hb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=hb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;m(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=m({},d.Interface,a);c.extend=d.extend;ib(c);return c};ib(y);function jb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function kb(a){if(!(a instanceof this))throw t(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function ib(a){a.eventPool=[];a.getPooled=jb;a.release=kb}var lb=y.extend({data:null}),mb=y.extend({data:null}),nb=[9,13,27,32],ob=Ra&&"CompositionEvent"in window,pb=null;Ra&&"documentMode"in document&&(pb=document.documentMode);
var qb=Ra&&"TextEvent"in window&&!pb,sb=Ra&&(!ob||pb&&8<pb&&11>=pb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==nb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function Ab(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Bb(a,b){if(yb)return"compositionend"===a||!ob&&wb(a,b)?(a=fb(),eb=db=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
var Cb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(ob)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=fb()):(cb=d,db="value"in cb?cb.value:cb.textContent,yb=
!0)),e=lb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=qb?Ab(a,c):Bb(a,c))?(b=mb.getPooled(ub.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Db=null,Eb=null,Fb=null;function Gb(a){if(a=ta(a)){if("function"!==typeof Db)throw t(Error(280));var b=sa(a.stateNode);Db(a.stateNode,a.type,b)}}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function Ib(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;Gb(a);if(b)for(a=0;a<b.length;a++)Gb(b[a])}}
function Jb(a,b){return a(b)}function Kb(a,b,c,d){return a(b,c,d)}function Lb(){}var Mb=Jb,Nb=!1;function Ob(){if(null!==Eb||null!==Fb)Lb(),Ib()}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xb.hasOwnProperty("ReactCurrentDispatcher")||(Xb.ReactCurrentDispatcher={current:null});Xb.hasOwnProperty("ReactCurrentBatchConfig")||(Xb.ReactCurrentBatchConfig={suspense:null});
var Yb=/^(.*)[\\\/]/,B="function"===typeof Symbol&&Symbol.for,Zb=B?Symbol.for("react.element"):60103,$b=B?Symbol.for("react.portal"):60106,ac=B?Symbol.for("react.fragment"):60107,bc=B?Symbol.for("react.strict_mode"):60108,cc=B?Symbol.for("react.profiler"):60114,dc=B?Symbol.for("react.provider"):60109,ec=B?Symbol.for("react.context"):60110,fc=B?Symbol.for("react.concurrent_mode"):60111,gc=B?Symbol.for("react.forward_ref"):60112,hc=B?Symbol.for("react.suspense"):60113,ic=B?Symbol.for("react.suspense_list"):
60120,jc=B?Symbol.for("react.memo"):60115,kc=B?Symbol.for("react.lazy"):60116;B&&Symbol.for("react.fundamental");B&&Symbol.for("react.responder");var lc="function"===typeof Symbol&&Symbol.iterator;function mc(a){if(null===a||"object"!==typeof a)return null;a=lc&&a[lc]||a["@@iterator"];return"function"===typeof a?a:null}
function oc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense";case ic:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jc:return oc(a.type);case kc:if(a=1===a._status?a._result:null)return oc(a)}return null}function pc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=oc(a.type);c=null;d&&(c=oc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc=Object.prototype.hasOwnProperty,sc={},tc={};
function uc(a){if(rc.call(tc,a))return!0;if(rc.call(sc,a))return!1;if(qc.test(a))return tc[a]=!0;sc[a]=!0;return!1}function vc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wc(a,b,c,d){if(null===b||"undefined"===typeof b||vc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new D(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new D(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new D(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new D(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new D(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){F[a]=new D(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){F[a]=new D(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){F[a]=new D(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){F[a]=new D(a,5,!1,a.toLowerCase(),null,!1)});var xc=/[\-:]([a-z])/g;function yc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(xc,
yc);F[b]=new D(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!1)});
F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!0)});
function zc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(wc(b,c,e,d)&&(c=null),d||null===e?uc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Ac(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Bc(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Cc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ac(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Dc(a,b){b=b.checked;null!=b&&zc(a,"checked",b,!1)}
function Ec(a,b){Dc(a,b);var c=Ac(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fc(a,b.type,Ac(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Hc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ic(a,b,c){a=y.getPooled(Hc.change,a,b,c);a.type="change";Hb(c);Qa(a);return a}var Jc=null,Kc=null;function Lc(a){Ba(a)}
function Mc(a){var b=Ja(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Ra&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){if("value"===a.propertyName&&Mc(Kc))if(a=Ic(Kc,a,Rb(a)),Nb)Ba(a);else{Nb=!0;try{Jb(Lc,a)}finally{Nb=!1,Ob()}}}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}
function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Hc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,h=void 0,g=e.nodeName&&e.nodeName.toLowerCase();"select"===g||"input"===g&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,h=Rc):(g=e.nodeName)&&"input"===g.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Ic(f,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fc(e,"number",e.value)}},Wc=y.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var h=void 0,g=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)h=dd,g=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)h=ed,g=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var n=null==f?e:Ja(f);e=null==b?e:Ja(b);a=h.getPooled(g,f,c,d);a.type=l+"leave";a.target=n;a.relatedTarget=e;c=h.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=n;d=b;if(f&&d)a:{b=f;e=d;l=0;for(h=b;h;h=La(h))l++;h=0;for(k=e;k;k=La(k))h++;for(;0<l-h;)b=La(b),l--;for(;0<h-l;)e=La(e),h--;for(;l--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function hd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var id=Object.prototype.hasOwnProperty;
function jd(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!id.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function kd(a,b){return{responder:a,props:b}}new Map;new Map;new Set;new Map;
function ld(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function od(a){if(2!==ld(a))throw t(Error(188));}
function pd(a){var b=a.alternate;if(!b){b=ld(a);if(3===b)throw t(Error(188));return 1===b?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return od(e),a;if(f===d)return od(e),b;f=f.sibling}throw t(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var h=!1,g=e.child;g;){if(g===c){h=!0;c=e;d=f;break}if(g===d){h=!0;d=e;c=f;break}g=g.sibling}if(!h){for(g=f.child;g;){if(g===
c){h=!0;c=f;d=e;break}if(g===d){h=!0;d=f;c=e;break}g=g.sibling}if(!h)throw t(Error(189));}}if(c.alternate!==d)throw t(Error(190));}if(3!==c.tag)throw t(Error(188));return c.stateNode.current===c?a:b}function qd(a){a=pd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var rd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),sd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),td=Wc.extend({relatedTarget:null});function ud(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd=Wc.extend({key:function(a){if(a.key){var b=vd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ud(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?wd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?ud(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ud(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),yd=dd.extend({dataTransfer:null}),zd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),Ad=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Bd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Cd=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],
["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",
1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Xa,"animationEnd",2],[Ya,"animationIteration",2],[Za,"animationStart",2],["canplay","canPlay",2],["canplaythrough",
"canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",
2],[ab,"transitionEnd",2],["waiting","waiting",2]],Dd={},Ed={},Fd=0;for(;Fd<Cd.length;Fd++){var Gd=Cd[Fd],Hd=Gd[0],Id=Gd[1],Jd=Gd[2],Kd="on"+(Id[0].toUpperCase()+Id.slice(1)),Ld={phasedRegistrationNames:{bubbled:Kd,captured:Kd+"Capture"},dependencies:[Hd],eventPriority:Jd};Dd[Id]=Ld;Ed[Hd]=Ld}
var Md={eventTypes:Dd,getEventPriority:function(a){a=Ed[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=Ed[a];if(!e)return null;switch(a){case "keypress":if(0===ud(c))return null;case "keydown":case "keyup":a=xd;break;case "blur":case "focus":a=td;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
yd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=zd;break;case Xa:case Ya:case Za:a=rd;break;case ab:a=Ad;break;case "scroll":a=Wc;break;case "wheel":a=Bd;break;case "copy":case "cut":case "paste":a=sd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},Nd=Md.getEventPriority,Od=[];
function Pd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,h=null,g=0;g<ea.length;g++){var k=ea[g];k&&(k=k.extractEvents(d,b,f,e))&&(h=xa(h,k))}Ba(h)}}var Qd=!0;function G(a,b){Rd(b,a,!1)}
function Rd(a,b,c){switch(Nd(b)){case 0:var d=Sd.bind(null,b,1);break;case 1:d=Td.bind(null,b,1);break;default:d=Ud.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Sd(a,b,c){Nb||Lb();var d=Ud,e=Nb;Nb=!0;try{Kb(d,a,b,c)}finally{(Nb=e)||Ob()}}function Td(a,b,c){Ud(a,b,c)}
function Ud(a,b,c){if(Qd){b=Rb(c);b=Ha(b);null===b||"number"!==typeof b.tag||2===ld(b)||(b=null);if(Od.length){var d=Od.pop();d.topLevelType=a;d.nativeEvent=c;d.targetInst=b;a=d}else a={topLevelType:a,nativeEvent:c,targetInst:b,ancestors:[]};try{if(c=a,Nb)Pd(c,void 0);else{Nb=!0;try{Mb(Pd,c,void 0)}finally{Nb=!1,Ob()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Od.length&&Od.push(a)}}}var Vd=new ("function"===typeof WeakMap?WeakMap:Map);
function Wd(a){var b=Vd.get(a);void 0===b&&(b=new Set,Vd.set(a,b));return b}function Xd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Yd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Zd(a,b){var c=Yd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Yd(c)}}function $d(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?$d(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function ae(){for(var a=window,b=Xd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xd(a.document)}return b}function be(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var ce=Ra&&"documentMode"in document&&11>=document.documentMode,de={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ee=null,fe=null,ge=null,he=!1;
function ie(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(he||null==ee||ee!==Xd(c))return null;c=ee;"selectionStart"in c&&be(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return ge&&jd(ge,c)?null:(ge=c,a=y.getPooled(de.select,fe,a,b),a.type="select",a.target=ee,Qa(a),a)}
var je={eventTypes:de,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Wd(e);f=ja.onSelect;for(var h=0;h<f.length;h++)if(!e.has(f[h])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)ee=e,fe=b,ge=null;break;case "blur":ge=fe=ee=null;break;case "mousedown":he=!0;break;case "contextmenu":case "mouseup":case "dragend":return he=!1,ie(c,d);case "selectionchange":if(ce)break;
case "keydown":case "keyup":return ie(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));sa=Ka;ta=Ia;va=Ja;Ca.injectEventPluginsByName({SimpleEventPlugin:Md,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:je,BeforeInputEventPlugin:Cb});function ke(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function le(a,b){a=m({children:void 0},b);if(b=ke(b.children))a.children=b;return a}function me(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Ac(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw t(Error(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function oe(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw t(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw t(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:Ac(c)}}
function pe(a,b){var c=Ac(b.value),d=Ac(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function qe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var re={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function se(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?se(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ue=void 0,ve=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==re.svg||"innerHTML"in a)a.innerHTML=b;else{ue=ue||document.createElement("div");ue.innerHTML="<svg>"+b+"</svg>";for(b=ue.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function we(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var xe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ye=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(a){ye.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);xe[b]=xe[a]})});function ze(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||xe.hasOwnProperty(a)&&xe[a]?(""+b).trim():b+"px"}
function Ae(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ze(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Ce=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function De(a,b){if(b){if(Ce[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw t(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw t(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw t(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw t(Error(62),"");}}
function Ee(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function Fe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Wd(a);b=ja[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Rd(a,"scroll",!0);break;case "focus":case "blur":Rd(a,"focus",!0);Rd(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Sb(e)&&Rd(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&G(e,a)}c.add(e)}}}function Ge(){}var He=null,Ie=null;
function Je(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ke(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Le="function"===typeof setTimeout?setTimeout:void 0,Me="function"===typeof clearTimeout?clearTimeout:void 0;
function Ne(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}new Set;var Oe=[],Pe=-1;function H(a){0>Pe||(a.current=Oe[Pe],Oe[Pe]=null,Pe--)}function J(a,b){Pe++;Oe[Pe]=a.current;a.current=b}var Qe={},L={current:Qe},M={current:!1},Re=Qe;
function Se(a,b){var c=a.type.contextTypes;if(!c)return Qe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Te(a){H(M,a);H(L,a)}function Ue(a){H(M,a);H(L,a)}
function Ve(a,b,c){if(L.current!==Qe)throw t(Error(168));J(L,b,a);J(M,c,a)}function We(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw t(Error(108),oc(b)||"Unknown",e);return m({},c,d)}function Xe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Qe;Re=L.current;J(L,b,a);J(M,M.current,a);return!0}
function Ye(a,b,c){var d=a.stateNode;if(!d)throw t(Error(169));c?(b=We(a,b,Re),d.__reactInternalMemoizedMergedChildContext=b,H(M,a),H(L,a),J(L,b,a)):H(M,a);J(M,c,a)}
var Ze=q.unstable_runWithPriority,$e=q.unstable_scheduleCallback,af=q.unstable_cancelCallback,bf=q.unstable_shouldYield,cf=q.unstable_requestPaint,df=q.unstable_now,ef=q.unstable_getCurrentPriorityLevel,ff=q.unstable_ImmediatePriority,hf=q.unstable_UserBlockingPriority,jf=q.unstable_NormalPriority,kf=q.unstable_LowPriority,lf=q.unstable_IdlePriority,mf={},nf=void 0!==cf?cf:function(){},of=null,pf=null,qf=!1,rf=df(),sf=1E4>rf?df:function(){return df()-rf};
function tf(){switch(ef()){case ff:return 99;case hf:return 98;case jf:return 97;case kf:return 96;case lf:return 95;default:throw t(Error(332));}}function uf(a){switch(a){case 99:return ff;case 98:return hf;case 97:return jf;case 96:return kf;case 95:return lf;default:throw t(Error(332));}}function vf(a,b){a=uf(a);return Ze(a,b)}function wf(a,b,c){a=uf(a);return $e(a,b,c)}function xf(a){null===of?(of=[a],pf=$e(ff,yf)):of.push(a);return mf}function O(){null!==pf&&af(pf);yf()}
function yf(){if(!qf&&null!==of){qf=!0;var a=0;try{var b=of;vf(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});of=null}catch(c){throw null!==of&&(of=of.slice(a+1)),$e(ff,O),c;}finally{qf=!1}}}function zf(a,b){if(1073741823===b)return 99;if(1===b)return 95;a=10*(1073741821-b)-10*(1073741821-a);return 0>=a?99:250>=a?98:5250>=a?97:95}function Af(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function Bf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var Cf={current:null},Df=null,Ef=null,Ff=null;function Gf(){Ff=Ef=Df=null}
function Hf(a,b){var c=a.type._context;J(Cf,c._currentValue,a);c._currentValue=b}function If(a){var b=Cf.current;H(Cf,a);a.type._context._currentValue=b}function Jf(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function Kf(a,b){Df=a;Ff=Ef=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(Lf=!0),a.firstContext=null)}function Mf(a,b){if(Ff!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ff=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===Ef){if(null===Df)throw t(Error(308));Ef=b;Df.dependencies={expirationTime:0,firstContext:b,responders:null}}else Ef=Ef.next=b}return a._currentValue}var Nf=!1;
function Of(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Pf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Qf(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Rf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Sf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Of(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Of(a.memoizedState),e=c.updateQueue=Of(c.memoizedState)):d=a.updateQueue=Pf(e):null===e&&(e=c.updateQueue=Pf(d));null===e||d===e?Rf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Rf(d,b),Rf(e,b)):(Rf(d,b),e.lastUpdate=b)}
function Tf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Of(a.memoizedState):Uf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Uf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Pf(b));return b}
function Vf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return m({},d,e);case 2:Nf=!0}return d}
function Wf(a,b,c,d,e){Nf=!1;b=Uf(a,b);for(var f=b.baseState,h=null,g=0,k=b.firstUpdate,l=f;null!==k;){var n=k.expirationTime;n<e?(null===h&&(h=k,f=l),g<n&&(g=n)):(Xf(n,k.suspenseConfig),l=Vf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}n=null;for(k=b.firstCapturedUpdate;null!==k;){var z=k.expirationTime;z<e?(null===n&&(n=k,null===h&&(f=l)),g<z&&(g=z)):(l=Vf(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===h&&(b.lastUpdate=null);null===n?b.lastCapturedUpdate=null:a.effectTag|=32;null===h&&null===n&&(f=l);b.baseState=f;b.firstUpdate=h;b.firstCapturedUpdate=n;a.expirationTime=g;a.memoizedState=l}
function Yf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Zf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Zf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Zf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw t(Error(191),c);c.call(d)}a=a.nextEffect}}
var $f=Xb.ReactCurrentBatchConfig,ag=(new aa.Component).refs;function bg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var fg={isMounted:function(a){return(a=a._reactInternalFiber)?2===ld(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=cg(),d=$f.suspense;
c=dg(c,a,d);d=Qf(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Sf(a,d);eg(a,c)}};function gg(a,b,c,d,e,f,h){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,h):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function hg(a,b,c){var d=!1,e=Qe;var f=b.contextType;"object"===typeof f&&null!==f?f=Mf(f):(e=N(b)?Re:L.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Se(a,e):Qe);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=fg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function ig(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&fg.enqueueReplaceState(b,b.state,null)}
function jg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=ag;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Mf(f):(f=N(b)?Re:L.current,e.context=Se(a,f));f=a.updateQueue;null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(bg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&fg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var kg=Array.isArray;
function lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;if(c){if(1!==c.tag)throw t(Error(309));d=c.stateNode}if(!d)throw t(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===ag&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw t(Error(284));if(!c._owner)throw t(Error(290),a);}return a}
function mg(a,b){if("textarea"!==a.type)throw t(Error(31),"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
function ng(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=og(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function h(b){a&&null===b.alternate&&(b.effectTag=2);return b}function g(a,b,c,d){if(null===b||6!==b.tag)return b=pg(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=lg(a,b,c),d.return=a,d;d=qg(c.type,c.key,c.props,null,a.mode,d);d.ref=lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=rg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=sg(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=pg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=qg(b.type,b.key,b.props,null,a.mode,c),c.ref=lg(a,null,b),c.return=a,c;case $b:return b=rg(b,a.mode,c),b.return=a,b}if(kg(b)||
mc(b))return b=sg(b,a.mode,c,null),b.return=a,b;mg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:g(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(kg(c)||mc(c))return null!==e?null:n(a,b,c,d,null);mg(a,c)}return null}function v(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,g(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(kg(d)||mc(d))return a=a.get(c)||null,n(b,a,d,e,null);mg(b,d)}return null}function rb(e,h,g,k){for(var l=null,u=null,n=h,w=h=0,C=null;null!==n&&w<g.length;w++){n.index>w?(C=n,n=null):C=n.sibling;var p=x(e,n,g[w],k);if(null===p){null===n&&(n=C);break}a&&
n&&null===p.alternate&&b(e,n);h=f(p,h,w);null===u?l=p:u.sibling=p;u=p;n=C}if(w===g.length)return c(e,n),l;if(null===n){for(;w<g.length;w++)n=z(e,g[w],k),null!==n&&(h=f(n,h,w),null===u?l=n:u.sibling=n,u=n);return l}for(n=d(e,n);w<g.length;w++)C=v(n,e,w,g[w],k),null!==C&&(a&&null!==C.alternate&&n.delete(null===C.key?w:C.key),h=f(C,h,w),null===u?l=C:u.sibling=C,u=C);a&&n.forEach(function(a){return b(e,a)});return l}function Be(e,h,g,k){var l=mc(g);if("function"!==typeof l)throw t(Error(150));g=l.call(g);
if(null==g)throw t(Error(151));for(var n=l=null,u=h,w=h=0,C=null,p=g.next();null!==u&&!p.done;w++,p=g.next()){u.index>w?(C=u,u=null):C=u.sibling;var r=x(e,u,p.value,k);if(null===r){null===u&&(u=C);break}a&&u&&null===r.alternate&&b(e,u);h=f(r,h,w);null===n?l=r:n.sibling=r;n=r;u=C}if(p.done)return c(e,u),l;if(null===u){for(;!p.done;w++,p=g.next())p=z(e,p.value,k),null!==p&&(h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);return l}for(u=d(e,u);!p.done;w++,p=g.next())p=v(u,e,w,p.value,k),null!==p&&(a&&null!==
p.alternate&&u.delete(null===p.key?w:p.key),h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,g){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,g);d.ref=lg(a,k,f);d.return=a;a=d;break a}c(a,
k);break}else b(a,k);k=k.sibling}f.type===ac?(d=sg(f.props.children,a.mode,g,f.key),d.return=a,a=d):(g=qg(f.type,f.key,f.props,null,a.mode,g),g.ref=lg(a,d,f),g.return=a,a=g)}return h(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],g);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=rg(f,a.mode,g);d.return=a;a=d}return h(a)}if("string"===typeof f||
"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,g),d.return=a,a=d):(c(a,d),d=pg(f,a.mode,g),d.return=a,a=d),h(a);if(kg(f))return rb(a,d,f,g);if(mc(f))return Be(a,d,f,g);l&&mg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,t(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}var tg=ng(!0),ug=ng(!1),vg={},wg={current:vg},xg={current:vg},yg={current:vg};function zg(a){if(a===vg)throw t(Error(174));return a}
function Ag(a,b){J(yg,b,a);J(xg,a,a);J(wg,vg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:te(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=te(b,c)}H(wg,a);J(wg,b,a)}function Bg(a){H(wg,a);H(xg,a);H(yg,a)}function Cg(a){zg(yg.current);var b=zg(wg.current);var c=te(b,a.type);b!==c&&(J(xg,a,a),J(wg,c,a))}function Dg(a){xg.current===a&&(H(wg,a),H(xg,a))}var Eg=1,Fg=1,Gg=2,P={current:0};
function Hg(a){for(var b=a;null!==b;){if(13===b.tag){if(null!==b.memoizedState)return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}
var Ig=0,Jg=2,Kg=4,Lg=8,Mg=16,Ng=32,Og=64,Pg=128,Qg=Xb.ReactCurrentDispatcher,Rg=0,Sg=null,Q=null,Tg=null,Ug=null,R=null,Vg=null,Wg=0,Xg=null,Yg=0,Zg=!1,$g=null,ah=0;function bh(){throw t(Error(321));}function ch(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!hd(a[c],b[c]))return!1;return!0}
function dh(a,b,c,d,e,f){Rg=f;Sg=b;Tg=null!==a?a.memoizedState:null;Qg.current=null===Tg?eh:fh;b=c(d,e);if(Zg){do Zg=!1,ah+=1,Tg=null!==a?a.memoizedState:null,Vg=Ug,Xg=R=Q=null,Qg.current=fh,b=c(d,e);while(Zg);$g=null;ah=0}Qg.current=hh;a=Sg;a.memoizedState=Ug;a.expirationTime=Wg;a.updateQueue=Xg;a.effectTag|=Yg;a=null!==Q&&null!==Q.next;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;if(a)throw t(Error(300));return b}
function ih(){Qg.current=hh;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;Zg=!1;$g=null;ah=0}function jh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===R?Ug=R=a:R=R.next=a;return R}function kh(){if(null!==Vg)R=Vg,Vg=R.next,Q=Tg,Tg=null!==Q?Q.next:null;else{if(null===Tg)throw t(Error(310));Q=Tg;var a={memoizedState:Q.memoizedState,baseState:Q.baseState,queue:Q.queue,baseUpdate:Q.baseUpdate,next:null};R=null===R?Ug=a:R.next=a;Tg=Q.next}return R}
function lh(a,b){return"function"===typeof b?b(a):b}
function mh(a){var b=kh(),c=b.queue;if(null===c)throw t(Error(311));c.lastRenderedReducer=a;if(0<ah){var d=c.dispatch;if(null!==$g){var e=$g.get(c);if(void 0!==e){$g.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var h=b.baseUpdate;f=b.baseState;null!==h?(null!==d&&(d.next=null),d=h.next):d=null!==d?d.next:null;if(null!==
d){var g=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Rg?(l||(l=!0,g=h,e=f),n>Wg&&(Wg=n)):(Xf(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));h=k;k=k.next}while(null!==k&&k!==d);l||(g=h,e=f);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate=g;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function nh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===Xg?(Xg={lastEffect:null},Xg.lastEffect=a.next=a):(b=Xg.lastEffect,null===b?Xg.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Xg.lastEffect=a));return a}function oh(a,b,c,d){var e=jh();Yg|=a;e.memoizedState=nh(b,c,void 0,void 0===d?null:d)}
function ph(a,b,c,d){var e=kh();d=void 0===d?null:d;var f=void 0;if(null!==Q){var h=Q.memoizedState;f=h.destroy;if(null!==d&&ch(d,h.deps)){nh(Ig,c,f,d);return}}Yg|=a;e.memoizedState=nh(b,c,f,d)}function qh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function rh(){}
function sh(a,b,c){if(!(25>ah))throw t(Error(301));var d=a.alternate;if(a===Sg||null!==d&&d===Sg)if(Zg=!0,a={expirationTime:Rg,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===$g&&($g=new Map),c=$g.get(b),void 0===c)$g.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=cg(),f=$f.suspense;e=dg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var h=b.last;if(null===h)f.next=f;else{var g=h.next;null!==g&&
(f.next=g);h.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(hd(l,k))return}catch(n){}finally{}eg(a,e)}}
var hh={readContext:Mf,useCallback:bh,useContext:bh,useEffect:bh,useImperativeHandle:bh,useLayoutEffect:bh,useMemo:bh,useReducer:bh,useRef:bh,useState:bh,useDebugValue:bh,useResponder:bh},eh={readContext:Mf,useCallback:function(a,b){jh().memoizedState=[a,void 0===b?null:b];return a},useContext:Mf,useEffect:function(a,b){return oh(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return oh(4,Kg|Ng,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return oh(4,
Kg|Ng,a,b)},useMemo:function(a,b){var c=jh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=jh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=sh.bind(null,Sg,a);return[d.memoizedState,a]},useRef:function(a){var b=jh();a={current:a};return b.memoizedState=a},useState:function(a){var b=jh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue=
{last:null,dispatch:null,lastRenderedReducer:lh,lastRenderedState:a};a=a.dispatch=sh.bind(null,Sg,a);return[b.memoizedState,a]},useDebugValue:rh,useResponder:kd},fh={readContext:Mf,useCallback:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:Mf,useEffect:function(a,b){return ph(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ph(4,Kg|Ng,qh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return ph(4,Kg|Ng,a,b)},useMemo:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:mh,useRef:function(){return kh().memoizedState},useState:function(a){return mh(lh,a)},useDebugValue:rh,useResponder:kd},th=null,uh=null,vh=!1;
function wh(a,b){var c=xh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function yh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function zh(a){if(vh){var b=uh;if(b){var c=b;if(!yh(a,b)){b=Ne(c.nextSibling);if(!b||!yh(a,b)){a.effectTag|=2;vh=!1;th=a;return}wh(th,c)}th=a;uh=Ne(b.firstChild)}else a.effectTag|=2,vh=!1,th=a}}function Ah(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;th=a}
function Bh(a){if(a!==th)return!1;if(!vh)return Ah(a),vh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ke(b,a.memoizedProps))for(b=uh;b;)wh(a,b),b=Ne(b.nextSibling);Ah(a);uh=th?Ne(a.stateNode.nextSibling):null;return!0}function Ch(){uh=th=null;vh=!1}var Dh=Xb.ReactCurrentOwner,Lf=!1;function S(a,b,c,d){b.child=null===a?ug(b,null,c,d):tg(b,a.child,c,d)}
function Eh(a,b,c,d,e){c=c.render;var f=b.ref;Kf(b,e);d=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Gh(a,b,c,d,e,f){if(null===a){var h=c.type;if("function"===typeof h&&!Hh(h)&&void 0===h.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=h,Ih(a,b,h,d,e,f);a=qg(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}h=a.child;if(e<f&&(e=h.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return Fh(a,b,f);b.effectTag|=1;a=og(h,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Ih(a,b,c,d,e,f){return null!==a&&jd(a.memoizedProps,d)&&a.ref===b.ref&&(Lf=!1,e<f)?Fh(a,b,f):Jh(a,b,c,d,f)}function Kh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Jh(a,b,c,d,e){var f=N(c)?Re:L.current;f=Se(b,f);Kf(b,e);c=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Lh(a,b,c,d,e){if(N(c)){var f=!0;Xe(b)}else f=!1;Kf(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),hg(b,c,d,e),jg(b,c,d,e),d=!0;else if(null===a){var h=b.stateNode,g=b.memoizedProps;h.props=g;var k=h.context,l=c.contextType;"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l));var n=c.getDerivedStateFromProps,z="function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate;z||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&
"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l);Nf=!1;var x=b.memoizedState;k=h.state=x;var v=b.updateQueue;null!==v&&(Wf(b,v,d,h,e),k=b.memoizedState);g!==d||x!==k||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),k=b.memoizedState),(g=Nf||gg(b,c,g,d,x,k,l))?(z||"function"!==typeof h.UNSAFE_componentWillMount&&"function"!==typeof h.componentWillMount||("function"===typeof h.componentWillMount&&h.componentWillMount(),"function"===typeof h.UNSAFE_componentWillMount&&
h.UNSAFE_componentWillMount()),"function"===typeof h.componentDidMount&&(b.effectTag|=4)):("function"===typeof h.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),h.props=d,h.state=k,h.context=l,d=g):("function"===typeof h.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.stateNode,g=b.memoizedProps,h.props=b.type===b.elementType?g:Af(b.type,g),k=h.context,l=c.contextType,"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l)),n=c.getDerivedStateFromProps,(z=
"function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate)||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l),Nf=!1,k=b.memoizedState,x=h.state=k,v=b.updateQueue,null!==v&&(Wf(b,v,d,h,e),x=b.memoizedState),g!==d||k!==x||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),x=b.memoizedState),(n=Nf||gg(b,c,g,d,k,x,l))?(z||"function"!==typeof h.UNSAFE_componentWillUpdate&&"function"!==typeof h.componentWillUpdate||
("function"===typeof h.componentWillUpdate&&h.componentWillUpdate(d,x,l),"function"===typeof h.UNSAFE_componentWillUpdate&&h.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof h.componentDidUpdate&&(b.effectTag|=4),"function"===typeof h.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=x),h.props=d,h.state=x,h.context=l,d=n):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Mh(a,b,c,d,f,e)}
function Mh(a,b,c,d,e,f){Kh(a,b);var h=0!==(b.effectTag&64);if(!d&&!h)return e&&Ye(b,c,!1),Fh(a,b,f);d=b.stateNode;Dh.current=b;var g=h&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&h?(b.child=tg(b,a.child,null,f),b.child=tg(b,null,g,f)):S(a,b,g,f);b.memoizedState=d.state;e&&Ye(b,c,!0);return b.child}function Nh(a){var b=a.stateNode;b.pendingContext?Ve(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ve(a,b.context,!1);Ag(a,b.containerInfo)}
var Oh={};
function Ph(a,b,c){var d=b.mode,e=b.pendingProps,f=P.current,h=null,g=!1,k;(k=0!==(b.effectTag&64))||(k=0!==(f&Gg)&&(null===a||null!==a.memoizedState));k?(h=Oh,g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=Fg);f&=Eg;J(P,f,b);if(null===a)if(g){e=e.fallback;a=sg(null,d,0,null);a.return=b;if(0===(b.mode&2))for(g=null!==b.memoizedState?b.child.child:b.child,a.child=g;null!==g;)g.return=a,g=g.sibling;c=sg(e,d,c,null);c.return=b;a.sibling=
c;d=a}else d=c=ug(b,null,e.children,c);else{if(null!==a.memoizedState)if(f=a.child,d=f.sibling,g){e=e.fallback;c=og(f,f.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==f.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;e=og(d,e,d.expirationTime);e.return=b;c.sibling=e;d=c;c.childExpirationTime=0;c=e}else d=c=tg(b,f.child,e.children,c);else if(f=a.child,g){g=e.fallback;e=sg(null,d,0,null);e.return=b;e.child=f;null!==f&&(f.return=e);if(0===(b.mode&
2))for(f=null!==b.memoizedState?b.child.child:b.child,e.child=f;null!==f;)f.return=e,f=f.sibling;c=sg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;d=e;e.childExpirationTime=0}else c=d=tg(b,f,e.children,c);b.stateNode=a.stateNode}b.memoizedState=h;b.child=d;return c}function Qh(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}
function Rh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=P.current;if(0!==(d&Gg))d=d&Eg|Gg,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var h=a.alternate;null!==h&&h.expirationTime<c&&(h.expirationTime=c);Jf(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===
b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=Eg}J(P,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===Hg(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Qh(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===Hg(d)){b.child=e;break}d=e.sibling;e.sibling=c;c=e;e=d}Qh(b,!0,c,null,f);break;case "together":Qh(b,
!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fh(a,b,c){null!==a&&(b.dependencies=a.dependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw t(Error(153));if(null!==b.child){a=b.child;c=og(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=og(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Sh(a){a.effectTag|=4}
var Th=void 0,Uh=void 0,Vh=void 0,Wh=void 0;Th=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Uh=function(){};
Vh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var h=b.stateNode;zg(wg.current);a=null;switch(c){case "input":f=Bc(h,f);d=Bc(h,d);a=[];break;case "option":f=le(h,f);d=le(h,d);a=[];break;case "select":f=m({},f,{value:void 0});d=m({},d,{value:void 0});a=[];break;case "textarea":f=ne(h,f);d=ne(h,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(h.onclick=Ge)}De(c,d);h=c=void 0;var g=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(h in k)k.hasOwnProperty(h)&&(g||(g={}),g[h]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ia.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(h in k)!k.hasOwnProperty(h)||l&&l.hasOwnProperty(h)||(g||(g={}),g[h]="");for(h in l)l.hasOwnProperty(h)&&k[h]!==l[h]&&(g||
(g={}),g[h]=l[h])}else g||(a||(a=[]),a.push(c,g)),g=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ia.hasOwnProperty(c)?(null!=l&&Fe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}g&&(a=a||[]).push("style",g);e=a;(b.updateQueue=e)&&Sh(b)}};Wh=function(a,b,c,d){c!==d&&Sh(b)};
function $h(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function ai(a){switch(a.tag){case 1:N(a.type)&&Te(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:Bg(a);Ue(a);b=a.effectTag;if(0!==(b&64))throw t(Error(285));a.effectTag=b&-2049|64;return a;case 5:return Dg(a),null;case 13:return H(P,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return H(P,a),null;case 4:return Bg(a),null;case 10:return If(a),null;default:return null}}function bi(a,b){return{value:a,source:b,stack:pc(b)}}
var ci="function"===typeof WeakSet?WeakSet:Set;function di(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=pc(c));null!==c&&oc(c.type);b=b.value;null!==a&&1===a.tag&&oc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function ei(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){fi(a,c)}}function gi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){fi(a,c)}else b.current=null}
function hi(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Ig){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Ig&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function ii(a,b){"function"===typeof ji&&ji(a);switch(a.tag){case 0:case 11:case 14:case 15:var c=a.updateQueue;if(null!==c&&(c=c.lastEffect,null!==c)){var d=c.next;vf(97<b?97:b,function(){var b=d;do{var c=b.destroy;if(void 0!==c){var h=a;try{c()}catch(g){fi(h,g)}}b=b.next}while(b!==d)})}break;case 1:gi(a);b=a.stateNode;"function"===typeof b.componentWillUnmount&&ei(a,b);break;case 5:gi(a);break;case 4:ki(a,b)}}
function li(a,b){for(var c=a;;)if(ii(c,b),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function mi(a){return 5===a.tag||3===a.tag||4===a.tag}
function ni(a){a:{for(var b=a.return;null!==b;){if(mi(b)){var c=b;break a}b=b.return}throw t(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw t(Error(161));}c.effectTag&16&&(we(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||mi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f||20===e.tag){var h=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var g=h;h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(h,c);else d?(g=b,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=Ge)):
b.appendChild(h)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function ki(a,b){for(var c=a,d=!1,e=void 0,f=void 0;;){if(!d){d=c.return;a:for(;;){if(null===d)throw t(Error(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)if(li(c,b),f){var h=e,g=c.stateNode;8===h.nodeType?h.parentNode.removeChild(g):h.removeChild(g)}else e.removeChild(c.stateNode);else if(20===c.tag)g=c.stateNode.instance,li(c,b),f?(h=e,8===h.nodeType?h.parentNode.removeChild(g):
h.removeChild(g)):e.removeChild(g);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(ii(c,b),null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function oi(a,b){switch(b.tag){case 0:case 11:case 14:case 15:hi(Kg,Lg,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ga]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Dc(c,d);Ee(a,e);b=Ee(a,d);for(e=0;e<f.length;e+=2){var h=f[e],g=f[e+1];"style"===h?Ae(c,g):"dangerouslySetInnerHTML"===h?ve(c,g):"children"===h?we(c,g):zc(c,h,g,b)}switch(a){case "input":Ec(c,d);break;case "textarea":pe(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?me(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?me(c,!!d.multiple,d.defaultValue,!0):me(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw t(Error(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,pi=sf());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=
f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ze("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===
a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}qi(b);break;case 19:qi(b);break;case 17:break;case 20:break;default:throw t(Error(163));}}function qi(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new ci);b.forEach(function(b){var d=ri.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var si="function"===typeof WeakMap?WeakMap:Map;
function ti(a,b,c){c=Qf(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){ui||(ui=!0,vi=d);di(a,b)};return c}
function wi(a,b,c){c=Qf(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){di(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===xi?xi=new Set([this]):xi.add(this),di(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var yi=Math.ceil,zi=Xb.ReactCurrentDispatcher,Ai=Xb.ReactCurrentOwner,T=0,Bi=8,Ci=16,Di=32,Ei=0,Fi=1,Gi=2,Hi=3,Ii=4,U=T,Ji=null,V=null,W=0,X=Ei,Ki=1073741823,Li=1073741823,Mi=null,Ni=!1,pi=0,Oi=500,Y=null,ui=!1,vi=null,xi=null,Pi=!1,Qi=null,Ri=90,Si=0,Ti=null,Ui=0,Vi=null,Wi=0;function cg(){return(U&(Ci|Di))!==T?1073741821-(sf()/10|0):0!==Wi?Wi:Wi=1073741821-(sf()/10|0)}
function dg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=tf();if(0===(b&4))return 99===d?1073741823:1073741822;if((U&Ci)!==T)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=1;break;default:throw t(Error(326));}null!==Ji&&a===W&&--a;return a}var Xi=0;
function eg(a,b){if(50<Ui)throw Ui=0,Vi=null,t(Error(185));a=Yi(a,b);if(null!==a){a.pingTime=0;var c=tf();if(1073741823===b)if((U&Bi)!==T&&(U&(Ci|Di))===T)for(var d=Z(a,1073741823,!0);null!==d;)d=d(!0);else Zi(a,99,1073741823),U===T&&O();else Zi(a,c,b);(U&4)===T||98!==c&&99!==c||(null===Ti?Ti=new Map([[a,b]]):(c=Ti.get(a),(void 0===c||c>b)&&Ti.set(a,b)))}}
function Yi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(b>e.firstPendingTime&&(e.firstPendingTime=b),a=e.lastPendingTime,0===a||b<a)&&(e.lastPendingTime=
b);return e}function Zi(a,b,c){if(a.callbackExpirationTime<c){var d=a.callbackNode;null!==d&&d!==mf&&af(d);a.callbackExpirationTime=c;1073741823===c?a.callbackNode=xf($i.bind(null,a,Z.bind(null,a,c))):(d=null,1!==c&&(d={timeout:10*(1073741821-c)-sf()}),a.callbackNode=wf(b,$i.bind(null,a,Z.bind(null,a,c)),d))}}function $i(a,b,c){var d=a.callbackNode,e=null;try{return e=b(c),null!==e?$i.bind(null,a,e):null}finally{null===e&&d===a.callbackNode&&(a.callbackNode=null,a.callbackExpirationTime=0)}}
function aj(){(U&(1|Ci|Di))===T&&(bj(),cj())}function dj(a,b){var c=a.firstBatch;return null!==c&&c._defer&&c._expirationTime>=b?(wf(97,function(){c._onComplete();return null}),!0):!1}function bj(){if(null!==Ti){var a=Ti;Ti=null;a.forEach(function(a,c){xf(Z.bind(null,c,a))});O()}}function ej(a,b){var c=U;U|=1;try{return a(b)}finally{U=c,U===T&&O()}}function fj(a,b,c,d){var e=U;U|=4;try{return vf(98,a.bind(null,b,c,d))}finally{U=e,U===T&&O()}}
function gj(a,b){var c=U;U&=-2;U|=Bi;try{return a(b)}finally{U=c,U===T&&O()}}
function hj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Me(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Te(d);break;case 3:Bg(d);Ue(d);break;case 5:Dg(d);break;case 4:Bg(d);break;case 13:H(P,d);break;case 19:H(P,d);break;case 10:If(d)}c=c.return}Ji=a;V=og(a.current,null,b);W=b;X=Ei;Li=Ki=1073741823;Mi=null;Ni=!1}
function Z(a,b,c){if((U&(Ci|Di))!==T)throw t(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return ij.bind(null,a);cj();if(a!==Ji||b!==W)hj(a,b);else if(X===Hi)if(Ni)hj(a,b);else{var d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d)}if(null!==V){d=U;U|=Ci;var e=zi.current;null===e&&(e=hh);zi.current=hh;if(c){if(1073741823!==b){var f=cg();if(f<b)return U=d,Gf(),zi.current=e,Z.bind(null,a,f)}}else Wi=0;do try{if(c)for(;null!==V;)V=jj(V);else for(;null!==V&&!bf();)V=
jj(V);break}catch(rb){Gf();ih();f=V;if(null===f||null===f.return)throw hj(a,b),U=d,rb;a:{var h=a,g=f.return,k=f,l=rb,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var z=l,x=0!==(P.current&Fg);l=g;do{var v;if(v=13===l.tag)null!==l.memoizedState?v=!1:(v=l.memoizedProps,v=void 0===v.fallback?!1:!0!==v.unstable_avoidThisFallback?!0:x?!1:!0);if(v){g=l.updateQueue;null===g?(g=new Set,g.add(z),l.updateQueue=g):g.add(z);if(0===(l.mode&
2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Qf(1073741823,null),n.tag=2,Sf(k,n)));k.expirationTime=1073741823;break a}k=h;h=n;x=k.pingCache;null===x?(x=k.pingCache=new si,g=new Set,x.set(z,g)):(g=x.get(z),void 0===g&&(g=new Set,x.set(z,g)));g.has(h)||(g.add(h),k=kj.bind(null,k,z,h),z.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==l);l=Error((oc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
pc(k))}X!==Ii&&(X=Fi);l=bi(l,k);k=g;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=ti(k,l,n);Tf(k,n);break a;case 1:if(z=l,h=k.type,g=k.stateNode,0===(k.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==g&&"function"===typeof g.componentDidCatch&&(null===xi||!xi.has(g)))){k.effectTag|=2048;k.expirationTime=n;n=wi(k,z,n);Tf(k,n);break a}}k=k.return}while(null!==k)}V=lj(f)}while(1);U=d;Gf();zi.current=e;if(null!==V)return Z.bind(null,a,b)}a.finishedWork=a.current.alternate;
a.finishedExpirationTime=b;if(dj(a,b))return null;Ji=null;switch(X){case Ei:throw t(Error(328));case Fi:return d=a.lastPendingTime,d<b?Z.bind(null,a,d):c?ij.bind(null,a):(hj(a,b),xf(Z.bind(null,a,b)),null);case Gi:if(1073741823===Ki&&!c&&(c=pi+Oi-sf(),10<c)){if(Ni)return hj(a,b),Z.bind(null,a,b);d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d);a.timeoutHandle=Le(ij.bind(null,a),c);return null}return ij.bind(null,a);case Hi:if(!c){if(Ni)return hj(a,b),Z.bind(null,a,b);c=a.lastPendingTime;if(c<b)return Z.bind(null,
a,c);1073741823!==Li?c=10*(1073741821-Li)-sf():1073741823===Ki?c=0:(c=10*(1073741821-Ki)-5E3,d=sf(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*yi(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=Le(ij.bind(null,a),c),null}return ij.bind(null,a);case Ii:return!c&&1073741823!==Ki&&null!==Mi&&(d=Ki,e=Mi,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=sf()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=
Le(ij.bind(null,a),b),null):ij.bind(null,a);default:throw t(Error(329));}}function Xf(a,b){a<Ki&&1<a&&(Ki=a);null!==b&&a<Li&&1<a&&(Li=a,Mi=b)}function jj(a){var b=mj(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=lj(a));Ai.current=null;return b}
function lj(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&1024)){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:N(b.type)&&Te(b);break;case 3:Bg(b);Ue(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===c||null===c.child)Bh(b),b.effectTag&=-3;Uh(b);break;case 5:Dg(b);d=zg(yg.current);var f=b.type;if(null!==c&&null!=b.stateNode)Vh(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var h=
zg(wg.current);if(Bh(b)){c=b;e=void 0;f=c.stateNode;var g=c.type,k=c.memoizedProps;f[Fa]=c;f[Ga]=k;switch(g){case "iframe":case "object":case "embed":G("load",f);break;case "video":case "audio":for(var l=0;l<bb.length;l++)G(bb[l],f);break;case "source":G("error",f);break;case "img":case "image":case "link":G("error",f);G("load",f);break;case "form":G("reset",f);G("submit",f);break;case "details":G("toggle",f);break;case "input":Cc(f,k);G("invalid",f);Fe(d,"onChange");break;case "select":f._wrapperState=
{wasMultiple:!!k.multiple};G("invalid",f);Fe(d,"onChange");break;case "textarea":oe(f,k),G("invalid",f),Fe(d,"onChange")}De(g,k);l=null;for(e in k)k.hasOwnProperty(e)&&(h=k[e],"children"===e?"string"===typeof h?f.textContent!==h&&(l=["children",h]):"number"===typeof h&&f.textContent!==""+h&&(l=["children",""+h]):ia.hasOwnProperty(e)&&null!=h&&Fe(d,e));switch(g){case "input":Vb(f);Gc(f,k,!0);break;case "textarea":Vb(f);qe(f,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(f.onclick=Ge)}d=l;c.updateQueue=d;null!==d&&Sh(b)}else{k=f;c=e;g=b;l=9===d.nodeType?d:d.ownerDocument;h===re.html&&(h=se(k));h===re.html?"script"===k?(k=l.createElement("div"),k.innerHTML="<script>\x3c/script>",l=k.removeChild(k.firstChild)):"string"===typeof c.is?l=l.createElement(k,{is:c.is}):(l=l.createElement(k),"select"===k&&(k=l,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):l=l.createElementNS(h,k);k=l;k[Fa]=g;k[Ga]=c;c=k;Th(c,b,!1,!1);g=c;var n=d,z=Ee(f,e);switch(f){case "iframe":case "object":case "embed":G("load",
g);d=e;break;case "video":case "audio":for(d=0;d<bb.length;d++)G(bb[d],g);d=e;break;case "source":G("error",g);d=e;break;case "img":case "image":case "link":G("error",g);G("load",g);d=e;break;case "form":G("reset",g);G("submit",g);d=e;break;case "details":G("toggle",g);d=e;break;case "input":Cc(g,e);d=Bc(g,e);G("invalid",g);Fe(n,"onChange");break;case "option":d=le(g,e);break;case "select":g._wrapperState={wasMultiple:!!e.multiple};d=m({},e,{value:void 0});G("invalid",g);Fe(n,"onChange");break;case "textarea":oe(g,
e);d=ne(g,e);G("invalid",g);Fe(n,"onChange");break;default:d=e}De(f,d);k=void 0;l=f;h=g;var x=d;for(k in x)if(x.hasOwnProperty(k)){var v=x[k];"style"===k?Ae(h,v):"dangerouslySetInnerHTML"===k?(v=v?v.__html:void 0,null!=v&&ve(h,v)):"children"===k?"string"===typeof v?("textarea"!==l||""!==v)&&we(h,v):"number"===typeof v&&we(h,""+v):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ia.hasOwnProperty(k)?null!=v&&Fe(n,k):null!=v&&zc(h,k,v,z))}switch(f){case "input":Vb(g);
Gc(g,e,!1);break;case "textarea":Vb(g);qe(g,e);break;case "option":null!=e.value&&g.setAttribute("value",""+Ac(e.value));break;case "select":d=g;g=e;d.multiple=!!g.multiple;k=g.value;null!=k?me(d,!!g.multiple,k,!1):null!=g.defaultValue&&me(d,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof d.onClick&&(g.onclick=Ge)}Je(f,e)&&Sh(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw t(Error(166));break;case 6:if(c&&null!=b.stateNode)Wh(c,b,c.memoizedProps,
e);else{if("string"!==typeof e&&null===b.stateNode)throw t(Error(166));c=zg(yg.current);zg(wg.current);Bh(b)?(d=b.stateNode,c=b.memoizedProps,d[Fa]=b,d.nodeValue!==c&&Sh(b)):(d=b,c=(9===c.nodeType?c:c.ownerDocument).createTextNode(e),c[Fa]=b,d.stateNode=c)}break;case 11:break;case 13:H(P,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}d=null!==e;e=!1;null===c?Bh(b):(f=c.memoizedState,e=null!==f,d||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=
f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(d&&!e&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&Fg))X===Ei&&(X=Gi);else if(X===Ei||X===Gi)X=Hi;if(d||e)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Bg(b);Uh(b);break;case 10:If(b);break;case 9:break;case 14:break;case 17:N(b.type)&&Te(b);break;case 18:break;case 19:H(P,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;
if(null===g)if(f)$h(e,!1);else{if(X!==Ei||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Hg(c);if(null!==g){b.effectTag|=64;$h(e,!1);c=g.updateQueue;null!==c&&(b.updateQueue=c,b.effectTag|=4);b.firstEffect=b.lastEffect=null;for(c=b.child;null!==c;)e=c,f=d,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,g=e.alternate,null===g?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=
g.childExpirationTime,e.expirationTime=g.expirationTime,e.child=g.child,e.memoizedProps=g.memoizedProps,e.memoizedState=g.memoizedState,e.updateQueue=g.updateQueue,f=g.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),c=c.sibling;J(P,P.current&Eg|Gg,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Hg(g),null!==c){if(b.effectTag|=64,f=!0,$h(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=
d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else sf()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,$h(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=sf()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;c=P.current;c=f?c&Eg|Gg:c&Eg;J(P,c,b);b=d;break a}break;case 20:break;
default:throw t(Error(156));}b=null}d=V;if(1===W||1!==d.childExpirationTime){c=0;for(e=d.child;null!==e;)f=e.expirationTime,g=e.childExpirationTime,f>c&&(c=f),g>c&&(c=g),e=e.sibling;d.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,
a.lastEffect=V))}else{b=ai(V,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===Ei&&(X=Ii);return null}function ij(a){var b=tf();vf(99,nj.bind(null,a,b));null!==Qi&&wf(97,function(){cj();return null});return null}
function nj(a,b){cj();if((U&(Ci|Di))!==T)throw t(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw t(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;var e=c.expirationTime,f=c.childExpirationTime;e=f>e?f:e;a.firstPendingTime=e;e<a.lastPendingTime&&(a.lastPendingTime=e);a===Ji&&(V=Ji=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;
if(null!==e){f=U;U|=Di;Ai.current=null;He=Qd;var h=ae();if(be(h)){if("selectionStart"in h)var g={start:h.selectionStart,end:h.selectionEnd};else a:{g=(g=h.ownerDocument)&&g.defaultView||window;var k=g.getSelection&&g.getSelection();if(k&&0!==k.rangeCount){g=k.anchorNode;var l=k.anchorOffset,n=k.focusNode;k=k.focusOffset;try{g.nodeType,n.nodeType}catch(zb){g=null;break a}var z=0,x=-1,v=-1,rb=0,Be=0,u=h,w=null;b:for(;;){for(var C;;){u!==g||0!==l&&3!==u.nodeType||(x=z+l);u!==n||0!==k&&3!==u.nodeType||
(v=z+k);3===u.nodeType&&(z+=u.nodeValue.length);if(null===(C=u.firstChild))break;w=u;u=C}for(;;){if(u===h)break b;w===g&&++rb===l&&(x=z);w===n&&++Be===k&&(v=z);if(null!==(C=u.nextSibling))break;u=w;w=u.parentNode}u=C}g=-1===x||-1===v?null:{start:x,end:v}}else g=null}g=g||{start:0,end:0}}else g=null;Ie={focusedElem:h,selectionRange:g};Qd=!1;Y=e;do try{for(;null!==Y;){if(0!==(Y.effectTag&256)){var I=Y.alternate;h=Y;switch(h.tag){case 0:case 11:case 15:hi(Jg,Ig,h);break;case 1:if(h.effectTag&256&&null!==
I){var E=I.memoizedProps,ua=I.memoizedState,gh=h.stateNode,oj=gh.getSnapshotBeforeUpdate(h.elementType===h.type?E:Af(h.type,E),ua);gh.__reactInternalSnapshotBeforeUpdate=oj}break;case 3:case 5:case 6:case 4:case 17:break;default:throw t(Error(163));}}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(I=b;null!==Y;){var A=Y.effectTag;A&16&&we(Y.stateNode,"");if(A&128){var p=Y.alternate;if(null!==p){var r=p.ref;null!==r&&("function"===typeof r?
r(null):r.current=null)}}switch(A&14){case 2:ni(Y);Y.effectTag&=-3;break;case 6:ni(Y);Y.effectTag&=-3;oi(Y.alternate,Y);break;case 4:oi(Y.alternate,Y);break;case 8:E=Y;ki(E,I);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;E.dependencies=null;var K=E.alternate;null!==K&&(K.return=null,K.child=null,K.memoizedState=null,K.updateQueue=null,K.dependencies=null)}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);r=Ie;p=ae();A=r.focusedElem;
I=r.selectionRange;if(p!==A&&A&&A.ownerDocument&&$d(A.ownerDocument.documentElement,A)){null!==I&&be(A)&&(p=I.start,r=I.end,void 0===r&&(r=p),"selectionStart"in A?(A.selectionStart=p,A.selectionEnd=Math.min(r,A.value.length)):(r=(p=A.ownerDocument||document)&&p.defaultView||window,r.getSelection&&(r=r.getSelection(),E=A.textContent.length,K=Math.min(I.start,E),I=void 0===I.end?K:Math.min(I.end,E),!r.extend&&K>I&&(E=I,I=K,K=E),E=Zd(A,K),ua=Zd(A,I),E&&ua&&(1!==r.rangeCount||r.anchorNode!==E.node||r.anchorOffset!==
E.offset||r.focusNode!==ua.node||r.focusOffset!==ua.offset)&&(p=p.createRange(),p.setStart(E.node,E.offset),r.removeAllRanges(),K>I?(r.addRange(p),r.extend(ua.node,ua.offset)):(p.setEnd(ua.node,ua.offset),r.addRange(p))))));p=[];for(r=A;r=r.parentNode;)1===r.nodeType&&p.push({element:r,left:r.scrollLeft,top:r.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<p.length;A++)r=p[A],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}Ie=null;Qd=!!He;He=null;a.current=c;Y=e;do try{for(A=d;null!==
Y;){var $a=Y.effectTag;if($a&36){var nc=Y.alternate;p=Y;r=A;switch(p.tag){case 0:case 11:case 15:hi(Mg,Ng,p);break;case 1:var md=p.stateNode;if(p.effectTag&4)if(null===nc)md.componentDidMount();else{var Fj=p.elementType===p.type?nc.memoizedProps:Af(p.type,nc.memoizedProps);md.componentDidUpdate(Fj,nc.memoizedState,md.__reactInternalSnapshotBeforeUpdate)}var Xh=p.updateQueue;null!==Xh&&Yf(p,Xh,md,r);break;case 3:var Yh=p.updateQueue;if(null!==Yh){K=null;if(null!==p.child)switch(p.child.tag){case 5:K=
p.child.stateNode;break;case 1:K=p.child.stateNode}Yf(p,Yh,K,r)}break;case 5:var Gj=p.stateNode;null===nc&&p.effectTag&4&&(r=Gj,Je(p.type,p.memoizedProps)&&r.focus());break;case 6:break;case 4:break;case 12:break;case 13:case 19:case 17:case 20:break;default:throw t(Error(163));}}if($a&128){var nd=Y.ref;if(null!==nd){var Zh=Y.stateNode;switch(Y.tag){case 5:var gf=Zh;break;default:gf=Zh}"function"===typeof nd?nd(gf):nd.current=gf}}$a&512&&(Pi=!0);Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));
fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=null;nf();U=f}else a.current=c;if(Pi)Pi=!1,Qi=a,Si=d,Ri=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0!==b?($a=cg(),$a=zf($a,b),Zi(a,$a,b)):xi=null;"function"===typeof pj&&pj(c.stateNode,d);1073741823===b?a===Vi?Ui++:(Ui=0,Vi=a):Ui=0;if(ui)throw ui=!1,a=vi,vi=null,a;if((U&Bi)!==T)return null;O();return null}
function cj(){if(null===Qi)return!1;var a=Qi,b=Si,c=Ri;Qi=null;Si=0;Ri=90;return vf(97<c?97:c,qj.bind(null,a,b))}function qj(a){if((U&(Ci|Di))!==T)throw t(Error(331));var b=U;U|=Di;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:hi(Pg,Ig,c),hi(Ig,Og,c)}}catch(d){if(null===a)throw t(Error(330));fi(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}U=b;O();return!0}
function rj(a,b,c){b=bi(c,b);b=ti(a,b,1073741823);Sf(a,b);a=Yi(a,1073741823);null!==a&&Zi(a,99,1073741823)}function fi(a,b){if(3===a.tag)rj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){rj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===xi||!xi.has(d))){a=bi(b,a);a=wi(c,a,1073741823);Sf(c,a);c=Yi(c,1073741823);null!==c&&Zi(c,99,1073741823);break}}c=c.return}}
function kj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);Ji===a&&W===c?X===Hi||X===Gi&&1073741823===Ki&&sf()-pi<Oi?hj(a,W):Ni=!0:a.lastPendingTime<c||(b=a.pingTime,0!==b&&b<c||(a.pingTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),b=cg(),b=zf(b,c),Zi(a,b,c)))}function ri(a,b){var c=a.stateNode;null!==c&&c.delete(b);c=cg();b=dg(c,a,null);c=zf(c,b);a=Yi(a,b);null!==a&&Zi(a,c,b)}var mj=void 0;
mj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)Lf=!0;else if(d<c){Lf=!1;switch(b.tag){case 3:Nh(b);Ch();break;case 5:Cg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Xe(b);break;case 4:Ag(b,b.stateNode.containerInfo);break;case 10:Hf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Ph(a,b,c);J(P,P.current&
Eg,b);b=Fh(a,b,c);return null!==b?b.sibling:null}J(P,P.current&Eg,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Rh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);J(P,P.current,b);if(!d)return null}return Fh(a,b,c)}}else Lf=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Se(b,L.current);Kf(b,c);e=dh(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&
null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;ih();if(N(d)){var f=!0;Xe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var h=d.getDerivedStateFromProps;"function"===typeof h&&bg(b,d,h,a);e.updater=fg;b.stateNode=e;e._reactInternalFiber=b;jg(b,d,a,c);b=Mh(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Bf(e);b.type=e;f=b.tag=sj(e);
a=Af(e,a);switch(f){case 0:b=Jh(null,b,e,a,c);break;case 1:b=Lh(null,b,e,a,c);break;case 11:b=Eh(null,b,e,a,c);break;case 14:b=Gh(null,b,e,Af(e.type,a),d,c);break;default:throw t(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Jh(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Lh(a,b,d,e,c);case 3:Nh(b);d=b.updateQueue;if(null===d)throw t(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Wf(b,d,b.pendingProps,
null,c);d=b.memoizedState.element;if(d===e)Ch(),b=Fh(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)uh=Ne(b.stateNode.containerInfo.firstChild),th=b,e=vh=!0;e?(b.effectTag|=2,b.child=ug(b,null,d,c)):(S(a,b,d,c),Ch());b=b.child}return b;case 5:return Cg(b),null===a&&zh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,h=e.children,Ke(d,e)?h=null:null!==f&&Ke(d,f)&&(b.effectTag|=16),Kh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):
(S(a,b,h,c),b=b.child),b;case 6:return null===a&&zh(b),null;case 13:return Ph(a,b,c);case 4:return Ag(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=tg(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Eh(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;h=b.memoizedProps;
f=e.value;Hf(b,f);if(null!==h){var g=h.value;f=hd(g,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(g,f):1073741823)|0;if(0===f){if(h.children===e.children&&!M.current){b=Fh(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){var k=g.dependencies;if(null!==k){h=g.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===g.tag&&(l=Qf(c,null),l.tag=2,Sf(g,l));g.expirationTime<c&&(g.expirationTime=c);l=g.alternate;null!==l&&l.expirationTime<
c&&(l.expirationTime=c);Jf(g.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else h=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Kf(b,c),e=Mf(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=Af(e,b.pendingProps),
f=Af(e.type,f),Gh(a,b,e,f,d,c);case 15:return Ih(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Xe(b)):a=!1,Kf(b,c),hg(b,d,e,c),jg(b,d,e,c),Mh(null,b,d,!0,a,c);case 19:return Rh(a,b,c)}throw t(Error(156));};var pj=null,ji=null;
function tj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);pj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};ji=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function uj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function xh(a,b,c,d){return new uj(a,b,c,d)}
function Hh(a){a=a.prototype;return!(!a||!a.isReactComponent)}function sj(a){if("function"===typeof a)return Hh(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===jc)return 14}return 2}
function og(a,b){var c=a.alternate;null===c?(c=xh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function qg(a,b,c,d,e,f){var h=2;d=a;if("function"===typeof a)Hh(a)&&(h=1);else if("string"===typeof a)h=5;else a:switch(a){case ac:return sg(c.children,e,f,b);case fc:h=8;e|=7;break;case bc:h=8;e|=1;break;case cc:return a=xh(12,c,b,e|8),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=xh(13,c,b,e),a.type=hc,a.elementType=hc,a.expirationTime=f,a;case ic:return a=xh(19,c,b,e),a.elementType=ic,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:h=
10;break a;case ec:h=9;break a;case gc:h=11;break a;case jc:h=14;break a;case kc:h=16;d=null;break a}throw t(Error(130),null==a?a:typeof a,"");}b=xh(h,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function sg(a,b,c,d){a=xh(7,a,d,b);a.expirationTime=c;return a}function pg(a,b,c){a=xh(6,a,null,b);a.expirationTime=c;return a}
function rg(a,b,c){b=xh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function vj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.pingTime=this.lastPendingTime=this.firstPendingTime=this.callbackExpirationTime=0}function wj(a,b,c){a=new vj(a,b,c);b=xh(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a}
function xj(a,b,c,d,e,f){var h=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==ld(c)||1!==c.tag)throw t(Error(170));var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(N(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);throw t(Error(171));}if(1===c.tag){var k=c.type;if(N(k)){c=We(c,k,g);break a}}c=g}else c=Qe;null===b.context?b.context=c:b.pendingContext=c;b=f;e=Qf(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&
(e.callback=b);Sf(h,e);eg(h,d);return d}function yj(a,b,c,d){var e=b.current,f=cg(),h=$f.suspense;e=dg(f,e,h);return xj(a,b,c,e,h,d)}function zj(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Aj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Db=function(a,b,c){switch(b){case "input":Ec(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);if(!e)throw t(Error(90));Wb(d);Ec(d,e)}}}break;case "textarea":pe(a,c);break;case "select":b=c.value,null!=b&&me(a,!!c.multiple,b,!1)}};
function Bj(a){var b=1073741821-25*(((1073741821-cg()+500)/25|0)+1);b<=Xi&&--b;this._expirationTime=Xi=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bj.prototype.render=function(a){if(!this._defer)throw t(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Cj;xj(a,b,null,c,null,d._onCommit);return d};
Bj.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bj.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw t(Error(251));if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw t(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((U&(Ci|Di))!==T)throw t(Error(253));xf(Z.bind(null,a,b));O();b=this._next;this._next=
null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Cj(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Cj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Cj.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw t(Error(191),c);c()}}};function Dj(a,b,c){this._internalRoot=wj(a,b,c)}function Ej(a,b){this._internalRoot=wj(a,2,b)}Ej.prototype.render=Dj.prototype.render=function(a,b){var c=this._internalRoot,d=new Cj;b=void 0===b?null:b;null!==b&&d.then(b);yj(a,c,null,d._onCommit);return d};
Ej.prototype.unmount=Dj.prototype.unmount=function(a){var b=this._internalRoot,c=new Cj;a=void 0===a?null:a;null!==a&&c.then(a);yj(null,b,null,c._onCommit);return c};Ej.prototype.createBatch=function(){var a=new Bj(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};
function Hj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=ej;Kb=fj;Lb=aj;Mb=function(a,b){var c=U;U|=2;try{return a(b)}finally{U=c,U===T&&O()}};function Ij(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dj(a,0,b)}
function Jj(a,b,c,d,e){var f=c._reactRootContainer,h=void 0;if(f){h=f._internalRoot;if("function"===typeof e){var g=e;e=function(){var a=zj(h);g.call(a)}}yj(b,h,a,e)}else{f=c._reactRootContainer=Ij(c,d);h=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=zj(h);k.call(a)}}gj(function(){yj(b,h,a,e)})}return zj(h)}function Kj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Hj(b))throw t(Error(200));return Aj(a,b,null,c)}
var Nj={createPortal:Kj,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw t(Error(188));throw t(Error(268),Object.keys(a));}a=qd(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!0,c)},render:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Hj(c))throw t(Error(200));
if(null==a||void 0===a._reactInternalFiber)throw t(Error(38));return Jj(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!Hj(a))throw t(Error(40));return a._reactRootContainer?(gj(function(){Jj(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Kj.apply(void 0,arguments)},unstable_batchedUpdates:ej,unstable_interactiveUpdates:function(a,b,c,d){aj();return fj(a,b,c,d)},unstable_discreteUpdates:fj,unstable_flushDiscreteUpdates:aj,flushSync:function(a,
b){if((U&(Ci|Di))!==T)throw t(Error(187));var c=U;U|=1;try{return vf(99,a.bind(null,b))}finally{U=c,O()}},unstable_createRoot:Lj,unstable_createSyncRoot:Mj,unstable_flushControlled:function(a){var b=U;U|=1;try{vf(99,a)}finally{U=b,U===T&&O()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ca.injectEventPluginsByName,fa,Qa,function(a){ya(a,Pa)},Hb,Ib,Ud,Ba,cj,{current:!1}]}};
function Lj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Ej(a,null!=b&&!0===b.hydrate)}function Mj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Dj(a,1,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return tj(m({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=qd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.9.0",
rendererPackageName:"react-dom"});var Oj={default:Nj},Pj=Oj&&Nj||Oj;module.exports=Pj.default||Pj;

},{"react":"1n8/","object-assign":"J4Nk","scheduler":"MDSO"}],"NKHc":[function(require,module,exports) {
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
},{"./cjs/react-dom.production.min.js":"i17t"}],"01KA":[function(require,module,exports) {
/** @license React v16.9.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var l=require("object-assign"),m=require("react");function r(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}
var t="function"===typeof Symbol&&Symbol.for,aa=t?Symbol.for("react.portal"):60106,v=t?Symbol.for("react.fragment"):60107,ba=t?Symbol.for("react.strict_mode"):60108,ca=t?Symbol.for("react.profiler"):60114,x=t?Symbol.for("react.provider"):60109,da=t?Symbol.for("react.context"):60110,ea=t?Symbol.for("react.concurrent_mode"):60111,fa=t?Symbol.for("react.forward_ref"):60112,A=t?Symbol.for("react.suspense"):60113,ha=t?Symbol.for("react.suspense_list"):60120,ia=t?Symbol.for("react.memo"):60115,ja=t?Symbol.for("react.lazy"):
60116,ka=t?Symbol.for("react.fundamental"):60117;
function B(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case v:return"Fragment";case aa:return"Portal";case ca:return"Profiler";case ba:return"StrictMode";case A:return"Suspense";case ha:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return"Context.Consumer";case x:return"Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ia:return B(a.type);case ja:if(a=1===a._status?a._result:null)return B(a)}return null}var C=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;C.hasOwnProperty("ReactCurrentDispatcher")||(C.ReactCurrentDispatcher={current:null});C.hasOwnProperty("ReactCurrentBatchConfig")||(C.ReactCurrentBatchConfig={suspense:null});var la={};function D(a,b){for(var d=a._threadCount|0;d<=b;d++)a[d]=a._currentValue2,a._threadCount=d+1}
function ma(a,b,d,c){if(c&&(c=a.contextType,"object"===typeof c&&null!==c))return D(c,d),c[d];if(a=a.contextTypes){d={};for(var f in a)d[f]=b[f];b=d}else b=la;return b}for(var E=new Uint16Array(16),G=0;15>G;G++)E[G]=G+1;E[15]=0;
var na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa=Object.prototype.hasOwnProperty,pa={},qa={};
function ra(a){if(oa.call(qa,a))return!0;if(oa.call(pa,a))return!1;if(na.test(a))return qa[a]=!0;pa[a]=!0;return!1}function sa(a,b,d,c){if(null!==d&&0===d.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(c)return!1;if(null!==d)return!d.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function ta(a,b,d,c){if(null===b||"undefined"===typeof b||sa(a,b,d,c))return!0;if(c)return!1;if(null!==d)switch(d.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function I(a,b,d,c,f,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=c;this.attributeNamespace=f;this.mustUseProperty=d;this.propertyName=a;this.type=b;this.sanitizeURL=e}var J={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){J[a]=new I(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];J[b]=new I(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){J[a]=new I(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){J[a]=new I(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){J[a]=new I(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){J[a]=new I(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){J[a]=new I(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){J[a]=new I(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){J[a]=new I(a,5,!1,a.toLowerCase(),null,!1)});var K=/[\-:]([a-z])/g;function L(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(K,
L);J[b]=new I(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(K,L);J[b]=new I(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(K,L);J[b]=new I(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){J[a]=new I(a,1,!1,a.toLowerCase(),null,!1)});
J.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){J[a]=new I(a,1,!1,a.toLowerCase(),null,!0)});var ua=/["'&<>]/;
function M(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ua.exec(a);if(b){var d="",c,f=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==c&&(d+=a.substring(f,c));f=c+1;d+=b}a=f!==c?d+a.substring(f,c):d}return a}
function va(a,b){var d=J.hasOwnProperty(a)?J[a]:null;var c;if(c="style"!==a)c=null!==d?0===d.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(c||ta(a,b,d,!1))return"";if(null!==d){a=d.attributeName;c=d.type;if(3===c||4===c&&!0===b)return a+'=""';d.sanitizeURL&&(b=""+b);return a+"="+('"'+M(b)+'"')}return ra(a)?a+"="+('"'+M(b)+'"'):""}var N=null,O=null,P=null,Q=!1,R=!1,T=null,U=0;function V(){if(null===N)throw r(Error(321));return N}
function wa(){if(0<U)throw r(Error(312));return{memoizedState:null,queue:null,next:null}}function W(){null===P?null===O?(Q=!1,O=P=wa()):(Q=!0,P=O):null===P.next?(Q=!1,P=P.next=wa()):(Q=!0,P=P.next);return P}function xa(a,b,d,c){for(;R;)R=!1,U+=1,P=null,d=a(b,c);O=N=null;U=0;P=T=null;return d}function ya(a,b){return"function"===typeof b?b(a):b}
function za(a,b,d){N=V();P=W();if(Q){var c=P.queue;b=c.dispatch;if(null!==T&&(d=T.get(c),void 0!==d)){T.delete(c);c=P.memoizedState;do c=a(c,d.action),d=d.next;while(null!==d);P.memoizedState=c;return[c,b]}return[P.memoizedState,b]}a=a===ya?"function"===typeof b?b():b:void 0!==d?d(b):b;P.memoizedState=a;a=P.queue={last:null,dispatch:null};a=a.dispatch=Aa.bind(null,N,a);return[P.memoizedState,a]}
function Aa(a,b,d){if(!(25>U))throw r(Error(301));if(a===N)if(R=!0,a={action:d,next:null},null===T&&(T=new Map),d=T.get(b),void 0===d)T.set(b,a);else{for(b=d;null!==b.next;)b=b.next;b.next=a}}function Ba(){}
var X=0,Ca={readContext:function(a){var b=X;D(a,b);return a[b]},useContext:function(a){V();var b=X;D(a,b);return a[b]},useMemo:function(a,b){N=V();P=W();b=void 0===b?null:b;if(null!==P){var d=P.memoizedState;if(null!==d&&null!==b){a:{var c=d[1];if(null===c)c=!1;else{for(var f=0;f<c.length&&f<b.length;f++){var e=b[f],h=c[f];if((e!==h||0===e&&1/e!==1/h)&&(e===e||h===h)){c=!1;break a}}c=!0}}if(c)return d[0]}}a=a();P.memoizedState=[a,b];return a},useReducer:za,useRef:function(a){N=V();P=W();var b=P.memoizedState;
return null===b?(a={current:a},P.memoizedState=a):b},useState:function(a){return za(ya,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ba,useEffect:Ba,useDebugValue:Ba,useResponder:function(a,b){return{props:b,responder:a}}},Da={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ea(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Fa={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ga=l({menuitem:!0},Fa),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ha=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Ha.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Ia=/([A-Z])/g,Ja=/^ms-/,Z=m.Children.toArray,Ka=C.ReactCurrentDispatcher,La={listing:!0,pre:!0,textarea:!0},Ma=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Na={},Oa={};function Pa(a){if(void 0===a||null===a)return a;var b="";m.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Qa=Object.prototype.hasOwnProperty,Ra={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Sa(a,b){if(void 0===a)throw r(Error(152),B(b)||"Component");}
function Ta(a,b,d){function c(c,f){var e=f.prototype&&f.prototype.isReactComponent,g=ma(f,b,d,e),h=[],w=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===h)return null},enqueueReplaceState:function(a,b){w=!0;h=[b]},enqueueSetState:function(a,b){if(null===h)return null;h.push(b)}},k=void 0;if(e)k=new f(c.props,g,p),"function"===typeof f.getDerivedStateFromProps&&(e=f.getDerivedStateFromProps.call(null,c.props,k.state),null!=e&&(k.state=l({},k.state,e)));else if(N={},k=f(c.props,
g,p),k=xa(f,c.props,k,g),null==k||null==k.render){a=k;Sa(a,f);return}k.props=c.props;k.context=g;k.updater=p;p=k.state;void 0===p&&(k.state=p=null);if("function"===typeof k.UNSAFE_componentWillMount||"function"===typeof k.componentWillMount)if("function"===typeof k.componentWillMount&&"function"!==typeof f.getDerivedStateFromProps&&k.componentWillMount(),"function"===typeof k.UNSAFE_componentWillMount&&"function"!==typeof f.getDerivedStateFromProps&&k.UNSAFE_componentWillMount(),h.length){p=h;var q=
w;h=null;w=!1;if(q&&1===p.length)k.state=p[0];else{e=q?p[0]:k.state;var y=!0;for(q=q?1:0;q<p.length;q++){var u=p[q];u="function"===typeof u?u.call(k,e,c.props,g):u;null!=u&&(y?(y=!1,e=l({},e,u)):l(e,u))}k.state=e}}else h=null;a=k.render();Sa(a,f);c=void 0;if("function"===typeof k.getChildContext&&(g=f.childContextTypes,"object"===typeof g)){c=k.getChildContext();for(var S in c)if(!(S in g))throw r(Error(108),B(f)||"Unknown",S);}c&&(b=l({},b,c))}for(;m.isValidElement(a);){var f=a,e=f.type;if("function"!==
typeof e)break;c(f,e)}return{child:a,context:b}}
var Ua=function(){function a(b,d){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");m.isValidElement(b)?b.type!==v?b=[b]:(b=b.props.children,b=m.isValidElement(b)?[b]:Z(b)):b=Z(b);b={type:null,domNamespace:Da.html,children:b,childIndex:0,context:la,footer:""};var c=E[0];if(0===c){var f=E;c=f.length;var e=2*c;if(!(65536>=e))throw r(Error(304));var h=new Uint16Array(e);h.set(f);E=h;E[0]=c+1;for(f=c;f<e-1;f++)E[f]=f+1;E[e-1]=0}else E[0]=E[c];this.threadID=c;this.stack=
[b];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=d;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}a.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;E[a]=E[0];E[0]=a}};a.prototype.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,f=this.threadID;D(c,f);var e=c[f];this.contextStack[b]=c;this.contextValueStack[b]=e;c[f]=a.props.value};
a.prototype.popProvider=function(){var a=this.contextIndex,d=this.contextStack[a],c=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;d[this.threadID]=c};a.prototype.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};a.prototype.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Ka.current;Ka.current=Ca;try{for(var f=[""],e=!1;f[0].length<a;){if(0===
this.stack.length){this.exhausted=!0;var h=this.threadID;E[h]=E[0];E[0]=h;break}var g=this.stack[this.stack.length-1];if(e||g.childIndex>=g.children.length){var H=g.footer;""!==H&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===g.type)this.currentSelectValue=null;else if(null!=g.type&&null!=g.type.type&&g.type.type.$$typeof===x)this.popProvider(g.type);else if(g.type===A){this.suspenseDepth--;var F=f.pop();if(e){e=!1;var n=g.fallbackFrame;if(!n)throw r(Error(303));this.stack.push(n);
f[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else f[this.suspenseDepth]+=F}f[this.suspenseDepth]+=H}else{var w=g.children[g.childIndex++],p="";try{p+=this.render(w,g.context,g.domNamespace)}catch(k){throw k;}finally{}f.length<=this.suspenseDepth&&f.push("");f[this.suspenseDepth]+=p}}return f[0]}finally{Ka.current=c,X=b}};a.prototype.render=function(a,d,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return M(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+
M(c);this.previousWasTextNode=!0;return M(c)}d=Ta(a,d,this.threadID);a=d.child;d=d.context;if(null===a||!1===a)return"";if(!m.isValidElement(a)){if(null!=a&&null!=a.$$typeof){c=a.$$typeof;if(c===aa)throw r(Error(257));throw r(Error(258),c.toString());}a=Z(a);this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""});return""}var b=a.type;if("string"===typeof b)return this.renderDOM(a,d,c);switch(b){case ba:case ea:case ca:case ha:case v:return a=Z(a.props.children),this.stack.push({type:null,
domNamespace:c,children:a,childIndex:0,context:d,footer:""}),"";case A:throw r(Error(294));}if("object"===typeof b&&null!==b)switch(b.$$typeof){case fa:N={};var e=b.render(a.props,a.ref);e=xa(b.render,a.props,e,a.ref);e=Z(e);this.stack.push({type:null,domNamespace:c,children:e,childIndex:0,context:d,footer:""});return"";case ia:return a=[m.createElement(b.type,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""}),"";case x:return b=Z(a.props.children),
c={type:a,domNamespace:c,children:b,childIndex:0,context:d,footer:""},this.pushProvider(a),this.stack.push(c),"";case da:b=a.type;e=a.props;var h=this.threadID;D(b,h);b=Z(e.children(b[h]));this.stack.push({type:a,domNamespace:c,children:b,childIndex:0,context:d,footer:""});return"";case ka:throw r(Error(338));case ja:throw r(Error(295));}throw r(Error(130),null==b?b:typeof b,"");};a.prototype.renderDOM=function(a,d,c){var b=a.type.toLowerCase();c===Da.html&&Ea(b);if(!Na.hasOwnProperty(b)){if(!Ma.test(b))throw r(Error(65),
b);Na[b]=!0}var e=a.props;if("input"===b)e=l({type:void 0},e,{defaultChecked:void 0,defaultValue:void 0,value:null!=e.value?e.value:e.defaultValue,checked:null!=e.checked?e.checked:e.defaultChecked});else if("textarea"===b){var h=e.value;if(null==h){h=e.defaultValue;var g=e.children;if(null!=g){if(null!=h)throw r(Error(92));if(Array.isArray(g)){if(!(1>=g.length))throw r(Error(93));g=g[0]}h=""+g}null==h&&(h="")}e=l({},e,{value:void 0,children:""+h})}else if("select"===b)this.currentSelectValue=null!=
e.value?e.value:e.defaultValue,e=l({},e,{value:void 0});else if("option"===b){g=this.currentSelectValue;var H=Pa(e.children);if(null!=g){var F=null!=e.value?e.value+"":H;h=!1;if(Array.isArray(g))for(var n=0;n<g.length;n++){if(""+g[n]===F){h=!0;break}}else h=""+g===F;e=l({selected:void 0,children:void 0},e,{selected:h,children:H})}}if(h=e){if(Ga[b]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw r(Error(137),b,"");if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw r(Error(60));
if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw r(Error(61));}if(null!=h.style&&"object"!==typeof h.style)throw r(Error(62),"");}h=e;g=this.makeStaticMarkup;H=1===this.stack.length;F="<"+a.type;for(z in h)if(Qa.call(h,z)){var w=h[z];if(null!=w){if("style"===z){n=void 0;var p="",k="";for(n in w)if(w.hasOwnProperty(n)){var q=0===n.indexOf("--"),y=w[n];if(null!=y){if(q)var u=n;else if(u=n,Oa.hasOwnProperty(u))u=Oa[u];else{var S=u.replace(Ia,"-$1").toLowerCase().replace(Ja,
"-ms-");u=Oa[u]=S}p+=k+u+":";k=n;q=null==y||"boolean"===typeof y||""===y?"":q||"number"!==typeof y||0===y||Y.hasOwnProperty(k)&&Y[k]?(""+y).trim():y+"px";p+=q;k=";"}}w=p||null}n=null;b:if(q=b,y=h,-1===q.indexOf("-"))q="string"===typeof y.is;else switch(q){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":q=!1;break b;default:q=!0}q?Ra.hasOwnProperty(z)||(n=z,n=ra(n)&&null!=w?n+"="+
('"'+M(w)+'"'):""):n=va(z,w);n&&(F+=" "+n)}}g||H&&(F+=' data-reactroot=""');var z=F;h="";Fa.hasOwnProperty(b)?z+="/>":(z+=">",h="</"+a.type+">");a:{g=e.dangerouslySetInnerHTML;if(null!=g){if(null!=g.__html){g=g.__html;break a}}else if(g=e.children,"string"===typeof g||"number"===typeof g){g=M(g);break a}g=null}null!=g?(e=[],La[b]&&"\n"===g.charAt(0)&&(z+="\n"),z+=g):e=Z(e.children);a=a.type;c=null==c||"http://www.w3.org/1999/xhtml"===c?Ea(a):"http://www.w3.org/2000/svg"===c&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":
c;this.stack.push({domNamespace:c,type:b,children:e,childIndex:0,context:d,footer:h});this.previousWasTextNode=!1;return z};return a}(),Va={renderToString:function(a){a=new Ua(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new Ua(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(){throw r(Error(207));},renderToStaticNodeStream:function(){throw r(Error(208));},version:"16.9.0"},Wa={default:Va},Xa=Wa&&Va||
Wa;module.exports=Xa.default||Xa;

},{"object-assign":"J4Nk","react":"1n8/"}],"70Kp":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-dom-server.browser.production.min.js');
} else {
  module.exports = require('./cjs/react-dom-server.browser.development.js');
}
},{"./cjs/react-dom-server.browser.production.min.js":"01KA"}],"xbCx":[function(require,module,exports) {
var global = arguments[3];
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, e) {
  a != Array.prototype && a != Object.prototype && (a[b] = e.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(this);

$jscomp.polyfill = function (a, b, e, g) {
  if (b) {
    e = $jscomp.global;
    a = a.split(".");

    for (g = 0; g < a.length - 1; g++) {
      var h = a[g];
      h in e || (e[h] = {});
      e = e[h];
    }

    a = a[a.length - 1];
    g = e[a];
    b = b(g);
    b != g && null != b && $jscomp.defineProperty(e, a, {
      configurable: !0,
      writable: !0,
      value: b
    });
  }
};

$jscomp.polyfill("Array.prototype.fill", function (a) {
  return a ? a : function (a, e, g) {
    var b = this.length || 0;
    0 > e && (e = Math.max(0, b + e));
    if (null == g || g > b) g = b;
    g = Number(g);
    0 > g && (g = Math.max(0, b + g));

    for (e = Number(e || 0); e < g; e++) {
      this[e] = a;
    }

    return this;
  };
}, "es6", "es3");

$jscomp.checkStringArgs = function (a, b, e) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + e + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + e + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (a) {
    var b = $jscomp.checkStringArgs(this, null, "codePointAt"),
        g = b.length;
    a = Number(a) || 0;

    if (0 <= a && a < g) {
      a |= 0;
      var h = b.charCodeAt(a);
      if (55296 > h || 56319 < h || a + 1 === g) return h;
      a = b.charCodeAt(a + 1);
      return 56320 > a || 57343 < a ? h : 1024 * (h - 55296) + a + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (a) {
    for (var b = "", g = 0; g < arguments.length; g++) {
      var h = Number(arguments[g]);
      if (0 > h || 1114111 < h || h !== Math.floor(h)) throw new RangeError("invalid_code_point " + h);
      65535 >= h ? b += String.fromCharCode(h) : (h -= 65536, b += String.fromCharCode(h >>> 10 & 1023 | 55296), b += String.fromCharCode(h & 1023 | 56320));
    }

    return b;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (a, e, g) {
    e = null != e ? e : function (a) {
      return a;
    };
    var b = [],
        c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];

    if ("function" == typeof c) {
      a = c.call(a);

      for (var f = 0; !(c = a.next()).done;) {
        b.push(e.call(g, c.value, f++));
      }
    } else for (c = a.length, f = 0; f < c; f++) {
      b.push(e.call(g, a[f], f));
    }

    return b;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (a, e) {
    var b = $jscomp.checkStringArgs(this, a, "endsWith");
    a += "";
    void 0 === e && (e = b.length);
    e = Math.max(0, Math.min(e | 0, b.length));

    for (var h = a.length; 0 < h && 0 < e;) {
      if (b[--e] != a[--h]) return !1;
    }

    return 0 >= h;
  };
}, "es6", "es3");
$jscomp.polyfill("Object.is", function (a) {
  return a ? a : function (a, e) {
    return a === e ? 0 !== a || 1 / a === 1 / e : a !== a && e !== e;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function (a) {
  return a ? a : function (a, e) {
    var b = this;
    b instanceof String && (b = String(b));
    var h = b.length;
    e = e || 0;

    for (0 > e && (e = Math.max(e + h, 0)); e < h; e++) {
      var c = b[e];
      if (c === a || Object.is(c, a)) return !0;
    }

    return !1;
  };
}, "es7", "es3");
$jscomp.polyfill("String.prototype.includes", function (a) {
  return a ? a : function (a, e) {
    return -1 !== $jscomp.checkStringArgs(this, a, "includes").indexOf(a, e || 0);
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.repeat", function (a) {
  return a ? a : function (a) {
    var b = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > a || 1342177279 < a) throw new RangeError("Invalid count value");
    a |= 0;

    for (var g = ""; a;) {
      if (a & 1 && (g += b), a >>>= 1) b += b;
    }

    return g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (a, e) {
    var b = $jscomp.checkStringArgs(this, a, "startsWith");
    a += "";
    var h = b.length,
        c = a.length;
    e = Math.max(0, Math.min(e | 0, b.length));

    for (var f = 0; f < c && e < h;) {
      if (b[e++] != a[f++]) return !1;
    }

    return f >= c;
  };
}, "es6", "es3");

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

$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";

$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};

  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};

$jscomp.SymbolClass = function (a, b) {
  this.$jscomp$symbol$id_ = a;
  $jscomp.defineProperty(this, "description", {
    configurable: !0,
    writable: !0,
    value: b
  });
};

$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};

$jscomp.Symbol = function () {
  function a(e) {
    if (this instanceof a) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (e || "") + "_" + b++, e);
  }

  var b = 0;
  return a;
}();

$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.iterator;
  a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
    configurable: !0,
    writable: !0,
    value: function value() {
      return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
    }
  });

  $jscomp.initSymbolIterator = function () {};
};

$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.asyncIterator;
  a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));

  $jscomp.initSymbolAsyncIterator = function () {};
};

$jscomp.iteratorPrototype = function (a) {
  $jscomp.initSymbolIterator();
  a = {
    next: a
  };

  a[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };

  return a;
};

$jscomp.iteratorFromArray = function (a, b) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var e = 0,
      g = {
    next: function next() {
      if (e < a.length) {
        var h = e++;
        return {
          value: b(h, a[h]),
          done: !1
        };
      }

      g.next = function () {
        return {
          done: !0,
          value: void 0
        };
      };

      return g.next();
    }
  };

  g[Symbol.iterator] = function () {
    return g;
  };

  return g;
};

$jscomp.polyfill("Array.prototype.keys", function (a) {
  return a ? a : function () {
    return $jscomp.iteratorFromArray(this, function (a) {
      return a;
    });
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  a = a["Control.Alt"];

  a.Alt = function (a, e) {
    this.Functor0 = a;
    this.alt = e;
  };

  a.alt = function (a) {
    return a.alt;
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (a, e) {
    this.Applicative0 = a;
    this.Plus1 = e;
  };
})(PS);

(function (a) {
  a.arrayApply = function (a) {
    return function (b) {
      for (var e = a.length, h = b.length, c = Array(e * h), f = 0, d = 0; d < e; d++) {
        for (var l = a[d], k = 0; k < h; k++) {
          c[f++] = l(b[k]);
        }
      }

      return c;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var b = new function (a) {
    this.compose = a;
  }(function (a) {
    return function (b) {
      return function (e) {
        return a(b(e));
      };
    };
  });

  a.compose = function (a) {
    return a.compose;
  };

  a.semigroupoidFn = b;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var b = a["Control.Category"],
      e = a["Control.Semigroupoid"];
  a = new function (a, b) {
    this.Semigroupoid0 = a;
    this.identity = b;
  }(function () {
    return e.semigroupoidFn;
  }, function (a) {
    return a;
  });

  b.identity = function (a) {
    return a.identity;
  };

  b.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (a) {
    return function (b) {
      return function (e) {
        return a(e)(b);
      };
    };
  };

  a["const"] = function (a) {
    return function (b) {
      return a;
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (a) {
    return function (b) {
      for (var e = b.length, h = Array(e), c = 0; c < e; c++) {
        h[c] = a(b[c]);
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
  var b = a["Data.Functor"],
      e = a["Data.Functor"],
      g = a["Control.Semigroupoid"],
      h = a["Data.Function"],
      c = a["Data.Unit"];

  a = function a(_a) {
    this.map = _a;
  };

  g = new a(g.compose(g.semigroupoidFn));
  e = new a(e.arrayMap);
  b.Functor = a;

  b.map = function (a) {
    return a.map;
  };

  b.mapFlipped = function (a) {
    return function (c) {
      return function (b) {
        return (0, a.map)(b)(c);
      };
    };
  };

  b["void"] = function (a) {
    return (0, a.map)(h["const"](c.unit));
  };

  b.voidRight = function (a) {
    return function (c) {
      return (0, a.map)(h["const"](c));
    };
  };

  b.flap = function (a) {
    return function (c) {
      return function (b) {
        return (0, a.map)(function (a) {
          return a(b);
        })(c);
      };
    };
  };

  b.functorFn = g;
  b.functorArray = e;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var b = a["Control.Apply"],
      e = a["Control.Apply"],
      g = a["Control.Category"],
      h = a["Data.Function"],
      c = a["Data.Functor"];

  a = function a(_a2, c) {
    this.Functor0 = _a2;
    this.apply = c;
  };

  var f = new a(function () {
    return c.functorFn;
  }, function (a) {
    return function (c) {
      return function (b) {
        return a(b)(c(b));
      };
    };
  });
  e = new a(function () {
    return c.functorArray;
  }, e.arrayApply);
  b.Apply = a;

  b.apply = function (a) {
    return a.apply;
  };

  b.applySecond = function (a) {
    return function (b) {
      return function (d) {
        return (0, a.apply)(c.map(a.Functor0())(h["const"](g.identity(g.categoryFn)))(b))(d);
      };
    };
  };

  b.applyFn = f;
  b.applyArray = e;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var b = a["Control.Applicative"],
      e = a["Control.Apply"];

  b.Applicative = function (a, b) {
    this.Apply0 = a;
    this.pure = b;
  };

  b.pure = function (a) {
    return a.pure;
  };

  b.liftA1 = function (a) {
    return function (b) {
      return function (c) {
        return e.apply(a.Apply0())((0, a.pure)(b))(c);
      };
    };
  };
})(PS);

(function (a) {
  a.arrayBind = function (a) {
    return function (b) {
      for (var e = [], h = 0, c = a.length; h < c; h++) {
        Array.prototype.push.apply(e, b(a[h]));
      }

      return e;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var b = a["Control.Bind"],
      e = a["Control.Apply"],
      g = a["Control.Category"],
      h = a["Data.Function"],
      c = function c(a, _c) {
    this.Apply0 = a;
    this.bind = _c;
  };

  a = new c(function () {
    return e.applyArray;
  }, a["Control.Bind"].arrayBind);
  var f = new function (a) {
    this.discard = a;
  }(function (a) {
    return a.bind;
  });
  b.Bind = c;

  b.bind = function (a) {
    return a.bind;
  };

  b.bindFlipped = function (a) {
    return h.flip(a.bind);
  };

  b.discard = function (a) {
    return a.discard;
  };

  b.join = function (a) {
    return function (c) {
      return (0, a.bind)(c)(g.identity(g.categoryFn));
    };
  };

  b.bindArray = a;
  b.discardUnit = f;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var b = a["Control.Monad"],
      e = a["Control.Applicative"],
      g = a["Control.Bind"];

  b.Monad = function (a, c) {
    this.Applicative0 = a;
    this.Bind1 = c;
  };

  b.ap = function (a) {
    return function (c) {
      return function (b) {
        return g.bind(a.Bind1())(c)(function (c) {
          return g.bind(a.Bind1())(b)(function (b) {
            return e.pure(a.Applicative0())(c(b));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var b = a["Data.Bifunctor"],
      e = a["Control.Category"];

  b.bimap = function (a) {
    return a.bimap;
  };

  b.Bifunctor = function (a) {
    this.bimap = a;
  };

  b.lmap = function (a) {
    return function (b) {
      return (0, a.bimap)(b)(e.identity(e.categoryFn));
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
  var b = function b(a) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (f) {
            return c < f ? a : c === f ? b : e;
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
  var b = function b(a) {
    return function (b) {
      return a === b;
    };
  };

  a.eqBooleanImpl = b;
  a.eqIntImpl = b;
  a.eqCharImpl = b;
  a.eqStringImpl = b;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var b = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.IsSymbol = function (a) {
    this.reflectSymbol = a;
  };

  a.reflectSymbol = function (a) {
    return a.reflectSymbol;
  };

  a.SProxy = b;
})(PS);

(function (a) {
  a.unsafeGet = function (a) {
    return function (b) {
      return b[a];
    };
  };

  a.unsafeSet = function (a) {
    return function (b) {
      return function (e) {
        var h = {},
            c;

        for (c in e) {
          ({}).hasOwnProperty.call(e, c) && (h[c] = e[c]);
        }

        h[a] = b;
        return h;
      };
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});

(function (a) {
  a["Record.Unsafe"] = a["Record.Unsafe"] || {};
  var b = a["Record.Unsafe"];
  a = a["Record.Unsafe"];
  b.unsafeGet = a.unsafeGet;
  b.unsafeSet = a.unsafeSet;
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var b = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RLProxy = b;
})(PS);

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};

  var b = a["Data.Eq"],
      e = a["Data.Eq"],
      g = a["Data.Symbol"],
      h = a["Record.Unsafe"],
      c = a["Type.Data.RowList"],
      f = function f(a) {
    this.eqRecord = a;
  },
      d = function d(a) {
    this.eq = a;
  };

  a = new d(e.eqStringImpl);
  var l = new f(function (a) {
    return function (a) {
      return function (a) {
        return !0;
      };
    };
  }),
      k = new d(e.eqIntImpl),
      m = new d(e.eqCharImpl);
  e = new d(e.eqBooleanImpl);
  b.Eq = d;

  b.eq = function (a) {
    return a.eq;
  };

  b.eqBoolean = e;
  b.eqInt = k;
  b.eqChar = m;
  b.eqString = a;

  b.eqRec = function (a) {
    return function (a) {
      return new d((0, a.eqRecord)(c.RLProxy.value));
    };
  };

  b.eqRowNil = l;

  b.eqRowCons = function (a) {
    return function (b) {
      return function (b) {
        return function (d) {
          return new f(function (e) {
            return function (e) {
              return function (f) {
                var k = (0, a.eqRecord)(c.RLProxy.value)(e)(f),
                    l = g.reflectSymbol(b)(g.SProxy.value);
                l = h.unsafeGet(l);
                return (0, d.eq)(l(e))(l(f)) && k;
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

  var b = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      e = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      g = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.LT = b;
  a.GT = e;
  a.EQ = g;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var b = a["Data.Ord"],
      e = a["Data.Ord"],
      g = a["Data.Eq"],
      h = a["Data.Ordering"];

  a = function a(_a3, c) {
    this.Eq0 = _a3;
    this.compare = c;
  };

  var c = new a(function () {
    return g.eqInt;
  }, e.ordIntImpl(h.LT.value)(h.EQ.value)(h.GT.value)),
      f = new a(function () {
    return g.eqChar;
  }, e.ordCharImpl(h.LT.value)(h.EQ.value)(h.GT.value));
  e = new a(function () {
    return g.eqBoolean;
  }, e.ordBooleanImpl(h.LT.value)(h.EQ.value)(h.GT.value));
  b.Ord = a;

  b.compare = function (a) {
    return a.compare;
  };

  b.max = function (a) {
    return function (c) {
      return function (b) {
        var d = (0, a.compare)(c)(b);
        if (d instanceof h.LT) return b;
        if (d instanceof h.EQ || d instanceof h.GT) return c;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [d.constructor.name]);
      };
    };
  };

  b.ordBoolean = e;
  b.ordInt = c;
  b.ordChar = f;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var b = a["Data.Bounded"],
      e = a["Data.Bounded"],
      g = a["Data.Ord"];

  a = function a(_a4, c, b) {
    this.Ord0 = _a4;
    this.bottom = c;
    this.top = b;
  };

  var h = new a(function () {
    return g.ordInt;
  }, e.bottomInt, e.topInt);
  e = new a(function () {
    return g.ordChar;
  }, e.bottomChar, e.topChar);
  var c = new a(function () {
    return g.ordBoolean;
  }, !1, !0);
  b.Bounded = a;

  b.bottom = function (a) {
    return a.bottom;
  };

  b.top = function (a) {
    return a.top;
  };

  b.boundedBoolean = c;
  b.boundedInt = h;
  b.boundedChar = e;
})(PS);

(function (a) {
  a.showIntImpl = function (a) {
    return a.toString();
  };

  a.showCharImpl = function (a) {
    var b = a.charCodeAt(0);

    if (32 > b || 127 === b) {
      switch (a) {
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

      return "'\\" + b.toString(10) + "'";
    }

    return "'" === a || "\\" === a ? "'\\" + a + "'" : "'" + a + "'";
  };

  a.showStringImpl = function (a) {
    var b = a.length;
    return '"' + a.replace(/[\0-\x1F\x7F"\\]/g, function (e, h) {
      switch (e) {
        case '"':
        case "\\":
          return "\\" + e;

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
      h = h < b && "0" <= a[h] && "9" >= a[h] ? "\\&" : "";
      return "\\" + e.charCodeAt(0).toString(10) + h;
    }) + '"';
  };

  a.cons = function (a) {
    return function (b) {
      return [a].concat(b);
    };
  };

  a.join = function (a) {
    return function (b) {
      return b.join(a);
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};

  var b = a["Data.Show"],
      e = a["Data.Show"],
      g = a["Data.Symbol"],
      h = a["Record.Unsafe"],
      c = a["Type.Data.RowList"],
      f = function f(a) {
    this.showRecordFields = a;
  },
      d = function d(a) {
    this.show = a;
  };

  a = new d(e.showStringImpl);
  var l = new f(function (a) {
    return function (a) {
      return [];
    };
  }),
      k = new d(e.showIntImpl),
      m = new d(e.showCharImpl),
      r = new d(function (a) {
    if (a) return "true";
    if (!a) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [a.constructor.name]);
  });
  b.Show = d;

  b.show = function (a) {
    return a.show;
  };

  b.showBoolean = r;
  b.showInt = k;
  b.showChar = m;
  b.showString = a;

  b.showRecord = function (a) {
    return function (a) {
      return new d(function (b) {
        b = (0, a.showRecordFields)(c.RLProxy.value)(b);
        return 0 === b.length ? "{}" : e.join(" ")(["{", e.join(", ")(b), "}"]);
      });
    };
  };

  b.showRecordFieldsNil = l;

  b.showRecordFieldsCons = function (a) {
    return function (b) {
      return function (d) {
        return new f(function (f) {
          return function (f) {
            var k = (0, b.showRecordFields)(c.RLProxy.value)(f),
                l = g.reflectSymbol(a)(g.SProxy.value);
            f = h.unsafeGet(l)(f);
            return e.cons(e.join(": ")([l, (0, d.show)(f)]))(k);
          };
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var b = a["Data.Maybe"],
      e = a["Control.Apply"],
      g = a["Control.Bind"],
      h = a["Control.Category"],
      c = a["Data.Bounded"],
      f = a["Data.Eq"],
      d = a["Data.Function"],
      l = a["Data.Functor"],
      k = a["Data.Ord"],
      m = a["Data.Ordering"],
      r = a["Data.Show"],
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      v = function v(a) {
    return function (c) {
      return function (b) {
        if (b instanceof q) return a;
        if (b instanceof t) return c(b.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [a.constructor.name, c.constructor.name, b.constructor.name]);
      };
    };
  };

  a = v(!0)(d["const"](!1));
  d = v(!1)(d["const"](!0));

  var n = new l.Functor(function (a) {
    return function (c) {
      return c instanceof t ? new t(a(c.value0)) : q.value;
    };
  }),
      y = function y(a) {
    return new f.Eq(function (c) {
      return function (b) {
        return c instanceof q && b instanceof q ? !0 : c instanceof t && b instanceof t ? f.eq(a)(c.value0)(b.value0) : !1;
      };
    });
  },
      x = function x(a) {
    return new k.Ord(function () {
      return y(a.Eq0());
    }, function (c) {
      return function (b) {
        if (c instanceof q && b instanceof q) return m.EQ.value;
        if (c instanceof q) return m.LT.value;
        if (b instanceof q) return m.GT.value;
        if (c instanceof t && b instanceof t) return k.compare(a)(c.value0)(b.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [c.constructor.name, b.constructor.name]);
      };
    });
  },
      p = new e.Apply(function () {
    return n;
  }, function (a) {
    return function (c) {
      if (a instanceof t) return l.map(n)(a.value0)(c);
      if (a instanceof q) return q.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [a.constructor.name, c.constructor.name]);
    };
  });

  e = new g.Bind(function () {
    return p;
  }, function (a) {
    return function (c) {
      if (a instanceof t) return c(a.value0);
      if (a instanceof q) return q.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [a.constructor.name, c.constructor.name]);
    };
  });
  b.Nothing = q;
  b.Just = t;
  b.maybe = v;

  b.fromMaybe = function (a) {
    return v(a)(h.identity(h.categoryFn));
  };

  b.isJust = d;
  b.isNothing = a;

  b.fromJust = function (a) {
    return function (a) {
      if (a instanceof t) return a.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [a.constructor.name]);
    };
  };

  b.functorMaybe = n;
  b.applyMaybe = p;
  b.bindMaybe = e;
  b.eqMaybe = y;
  b.ordMaybe = x;

  b.boundedMaybe = function (a) {
    return new c.Bounded(function () {
      return x(a.Ord0());
    }, q.value, new t(c.top(a)));
  };

  b.showMaybe = function (a) {
    return new r.Show(function (c) {
      if (c instanceof t) return "(Just " + (r.show(a)(c.value0) + ")");
      if (c instanceof q) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [c.constructor.name]);
    });
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var b = a["Data.Either"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      h = a["Control.Bind"],
      c = a["Control.Monad"],
      f = a["Data.Bifunctor"],
      d = a["Data.Function"],
      l = a["Data.Functor"],
      k = a["Data.Maybe"],
      m = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      r = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      q = new l.Functor(function (a) {
    return function (c) {
      if (c instanceof m) return new m(c.value0);
      if (c instanceof r) return new r(a(c.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [c.constructor.name]);
    };
  });

  a = function a(_a5) {
    return function (c) {
      return function (b) {
        if (b instanceof m) return _a5(b.value0);
        if (b instanceof r) return c(b.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [_a5.constructor.name, c.constructor.name, b.constructor.name]);
      };
    };
  };

  d = a(d["const"](k.Nothing.value))(k.Just.create);
  f = new f.Bifunctor(function (a) {
    return function (c) {
      return function (b) {
        if (b instanceof m) return new m(a(b.value0));
        if (b instanceof r) return new r(c(b.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [a.constructor.name, c.constructor.name, b.constructor.name]);
      };
    };
  });
  var t = new g.Apply(function () {
    return q;
  }, function (a) {
    return function (c) {
      if (a instanceof m) return new m(a.value0);
      if (a instanceof r) return l.map(q)(a.value0)(c);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [a.constructor.name, c.constructor.name]);
    };
  }),
      v = new h.Bind(function () {
    return t;
  }, a(function (a) {
    return function (c) {
      return new m(a);
    };
  })(function (a) {
    return function (c) {
      return c(a);
    };
  })),
      n = new e.Applicative(function () {
    return t;
  }, r.create);
  e = new c.Monad(function () {
    return n;
  }, function () {
    return v;
  });
  b.Left = m;
  b.Right = r;
  b.either = a;
  b.hush = d;
  b.functorEither = q;
  b.bifunctorEither = f;
  b.applicativeEither = n;
  b.bindEither = v;
  b.monadEither = e;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var b = a["Control.Monad.Rec.Class"],
      e = a["Data.Bifunctor"],
      g = a["Data.Either"],
      h = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      c = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }();

  a = function a(_a6, c) {
    this.Monad0 = _a6;
    this.tailRecM = c;
  };

  var f = function f(a) {
    return function (b) {
      b = a(b);

      for (var d = !1, e; !d;) {
        if (e = b, e instanceof h) b = a(e.value0), e = void 0;else if (e instanceof c) d = !0, e = e.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 91, column 3 - line 91, column 25): " + [e.constructor.name]);
      }

      return e;
    };
  },
      d = new a(function () {
    return g.monadEither;
  }, function (a) {
    return function (b) {
      return f(function (b) {
        if (b instanceof g.Left) return new c(new g.Left(b.value0));
        if (b instanceof g.Right && b.value0 instanceof h) return new h(a(b.value0.value0));
        if (b instanceof g.Right && b.value0 instanceof c) return new c(new g.Right(b.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 119, column 7 - line 119, column 33): " + [b.constructor.name]);
      })(a(b));
    };
  });

  e = new e.Bifunctor(function (a) {
    return function (b) {
      return function (d) {
        if (d instanceof h) return new h(a(d.value0));
        if (d instanceof c) return new c(b(d.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 27, column 1 - line 29, column 34): " + [a.constructor.name, b.constructor.name, d.constructor.name]);
      };
    };
  });
  b.Loop = h;
  b.Done = c;
  b.MonadRec = a;

  b.tailRecM = function (a) {
    return a.tailRecM;
  };

  b.bifunctorStep = e;
  b.monadRecEither = d;
})(PS);

(function (a) {
  a.foldrArray = function (a) {
    return function (b) {
      return function (e) {
        for (var h = b, c = e.length - 1; 0 <= c; c--) {
          h = a(e[c])(h);
        }

        return h;
      };
    };
  };

  a.foldlArray = function (a) {
    return function (b) {
      return function (e) {
        for (var h = b, c = e.length, f = 0; f < c; f++) {
          h = a(h)(e[f]);
        }

        return h;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a.concatString = function (a) {
    return function (b) {
      return a + b;
    };
  };

  a.concatArray = function (a) {
    return function (b) {
      return 0 === a.length ? b : 0 === b.length ? a : a.concat(b);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};

  var b = a["Data.Semigroup"],
      e = a["Data.Semigroup"],
      g = function g(a) {
    this.append = a;
  };

  a = new g(e.concatString);
  e = new g(e.concatArray);
  b.Semigroup = g;

  b.append = function (a) {
    return a.append;
  };

  b.semigroupString = a;

  b.semigroupFn = function (a) {
    return new g(function (c) {
      return function (b) {
        return function (d) {
          return (0, a.append)(c(d))(b(d));
        };
      };
    });
  };

  b.semigroupArray = e;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var b = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      g = function g(a, b) {
    this.Semigroup0 = a;
    this.mempty = b;
  };

  a = new g(function () {
    return e.semigroupString;
  }, "");
  var h = new g(function () {
    return e.semigroupArray;
  }, []);
  b.Monoid = g;

  b.mempty = function (a) {
    return a.mempty;
  };

  b.monoidFn = function (a) {
    return new g(function () {
      return e.semigroupFn(a.Semigroup0());
    }, function (c) {
      return a.mempty;
    });
  };

  b.monoidString = a;
  b.monoidArray = h;
})(PS);

(function (a) {
  a.boolConj = function (a) {
    return function (b) {
      return a && b;
    };
  };

  a.boolDisj = function (a) {
    return function (b) {
      return a || b;
    };
  };

  a.boolNot = function (a) {
    return !a;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});

(function (a) {
  a["Data.HeytingAlgebra"] = a["Data.HeytingAlgebra"] || {};
  var b = a["Data.HeytingAlgebra"];
  a = a["Data.HeytingAlgebra"];
  var e = new function (a, b, c, e, d, l) {
    this.conj = a;
    this.disj = b;
    this.ff = c;
    this.implies = e;
    this.not = d;
    this.tt = l;
  }(a.boolConj, a.boolDisj, !1, function (a) {
    return function (b) {
      return (0, e.disj)((0, e.not)(a))(b);
    };
  }, a.boolNot, !0);

  b.ff = function (a) {
    return a.ff;
  };

  b.disj = function (a) {
    return a.disj;
  };

  b.heytingAlgebraBoolean = e;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var b = a["Data.Monoid.Disj"],
      e = a["Data.HeytingAlgebra"],
      g = a["Data.Monoid"],
      h = a["Data.Semigroup"],
      c = function c(a) {
    return new h.Semigroup(function (c) {
      return function (b) {
        return e.disj(a)(c)(b);
      };
    });
  };

  b.Disj = function (a) {
    return a;
  };

  b.monoidDisj = function (a) {
    return new g.Monoid(function () {
      return c(a);
    }, e.ff(a));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var b = a["Data.Newtype"],
      e = a["Data.Functor"],
      g = function g(a, c) {
    this.unwrap = a;
    this.wrap = c;
  };

  a = new g(function (a) {
    return a;
  }, a["Data.Monoid.Disj"].Disj);

  b.unwrap = function (a) {
    return a.unwrap;
  };

  b.wrap = function (a) {
    return a.wrap;
  };

  b.Newtype = g;

  b.alaF = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (f) {
            return function (f) {
              var h = e.map(c)(d.unwrap),
                  g = e.map(a)(b.wrap);
              return function (a) {
                return h(f(g(a)));
              };
            };
          };
        };
      };
    };
  };

  b.over = function (a) {
    return function (c) {
      return function (b) {
        return function (b) {
          var d = c.wrap,
              e = a.unwrap;
          return function (a) {
            return d(b(e(a)));
          };
        };
      };
    };
  };

  b.under = function (a) {
    return function (c) {
      return function (b) {
        return function (b) {
          var d = c.unwrap,
              e = a.wrap;
          return function (a) {
            return d(b(e(a)));
          };
        };
      };
    };
  };

  b.newtypeDisj = a;
})(PS);

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var b = a["Data.Foldable"],
      e = a["Data.Foldable"],
      g = a["Control.Applicative"],
      h = a["Control.Apply"],
      c = a["Control.Category"],
      f = a["Data.Functor"],
      d = a["Data.Maybe"],
      l = a["Data.Monoid"],
      k = a["Data.Monoid.Disj"],
      m = a["Data.Newtype"],
      r = a["Data.Semigroup"],
      q = a["Data.Unit"];

  a = function a(_a7, c, b) {
    this.foldMap = _a7;
    this.foldl = c;
    this.foldr = b;
  };

  var t = new a(function (a) {
    return function (c) {
      return function (b) {
        if (b instanceof d.Nothing) return l.mempty(a);
        if (b instanceof d.Just) return c(b.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [c.constructor.name, b.constructor.name]);
      };
    };
  }, function (a) {
    return function (c) {
      return function (b) {
        if (b instanceof d.Nothing) return c;
        if (b instanceof d.Just) return a(c)(b.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, c.constructor.name, b.constructor.name]);
      };
    };
  }, function (a) {
    return function (c) {
      return function (b) {
        if (b instanceof d.Nothing) return c;
        if (b instanceof d.Just) return a(b.value0)(c);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, c.constructor.name, b.constructor.name]);
      };
    };
  }),
      v = function v(a) {
    return function (c) {
      return function (b) {
        return (0, a.foldr)(function (a) {
          return function (d) {
            return r.append(c.Semigroup0())(b(a))(d);
          };
        })(l.mempty(c));
      };
    };
  },
      n = new a(function (a) {
    return v(n)(a);
  }, e.foldlArray, e.foldrArray);

  b.Foldable = a;

  b.foldr = function (a) {
    return a.foldr;
  };

  b.foldl = function (a) {
    return a.foldl;
  };

  b.foldMap = function (a) {
    return a.foldMap;
  };

  b.fold = function (a) {
    return function (b) {
      return (0, a.foldMap)(b)(c.identity(c.categoryFn));
    };
  };

  b.traverse_ = function (a) {
    return function (c) {
      return function (b) {
        return (0, c.foldr)(function () {
          var c = h.applySecond(a.Apply0());
          return function (a) {
            return c(b(a));
          };
        }())(g.pure(a)(q.unit));
      };
    };
  };

  b.intercalate = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return (0, a.foldl)(function (a) {
            return function (d) {
              return a.init ? {
                init: !1,
                acc: d
              } : {
                init: !1,
                acc: r.append(c.Semigroup0())(a.acc)(r.append(c.Semigroup0())(b)(d))
              };
            };
          })({
            init: !0,
            acc: l.mempty(c)
          })(d).acc;
        };
      };
    };
  };

  b.any = function (a) {
    return function (c) {
      return m.alaF(f.functorFn)(f.functorFn)(m.newtypeDisj)(m.newtypeDisj)(k.Disj)((0, a.foldMap)(k.monoidDisj(c)));
    };
  };

  b.foldableArray = n;
  b.foldableMaybe = t;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var b = a["Data.NonEmpty"],
      e = a["Data.Foldable"],
      g = a["Data.Functor"],
      h = a["Data.Semigroup"],
      c = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }();

  b.NonEmpty = c;

  b.functorNonEmpty = function (a) {
    return new g.Functor(function (b) {
      return function (d) {
        return new c(b(d.value0), g.map(a)(b)(d.value1));
      };
    });
  };

  b.foldableNonEmpty = function (a) {
    return new e.Foldable(function (c) {
      return function (b) {
        return function (d) {
          return h.append(c.Semigroup0())(b(d.value0))(e.foldMap(a)(c)(b)(d.value1));
        };
      };
    }, function (c) {
      return function (b) {
        return function (d) {
          return e.foldl(a)(c)(c(b)(d.value0))(d.value1);
        };
      };
    }, function (c) {
      return function (b) {
        return function (d) {
          return c(d.value0)(e.foldr(a)(c)(b)(d.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var b = a["Data.List.Types"],
      e = a["Data.Foldable"],
      g = a["Data.Function"],
      h = a["Data.Functor"],
      c = a["Data.Monoid"],
      f = a["Data.NonEmpty"],
      d = a["Data.Semigroup"],
      l = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      k = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }();

  a = new h.Functor(function (a) {
    return function (c) {
      return function (b) {
        function d(c, d) {
          if (d instanceof k && d.value1 instanceof k && d.value1.value1 instanceof k) e = new k(d, c), b = d.value1.value1.value1;else return f = !0, function (c) {
            return function (b) {
              for (var d = c, e = !1, f; !e;) {
                f = d;
                var h = b;
                f instanceof k && f.value0 instanceof k && f.value0.value1 instanceof k && f.value0.value1.value1 instanceof k ? (d = f.value1, b = new k(a(f.value0.value0), new k(a(f.value0.value1.value0), new k(a(f.value0.value1.value1.value0), h))), f = void 0) : (e = !0, f = h);
              }

              return f;
            };
          }(c)(function (c) {
            return c instanceof k && c.value1 instanceof k && c.value1.value1 instanceof l ? new k(a(c.value0), new k(a(c.value1.value0), l.value)) : c instanceof k && c.value1 instanceof l ? new k(a(c.value0), l.value) : l.value;
          }(d));
        }

        for (var e = c, f = !1, h; !f;) {
          h = d(e, b);
        }

        return h;
      };
    }(l.value);
  });
  a = f.functorNonEmpty(a);
  var m = new e.Foldable(function (a) {
    return function (b) {
      return e.foldl(m)(function (c) {
        var e = d.append(a.Semigroup0())(c);
        return function (a) {
          return e(b(a));
        };
      })(c.mempty(a));
    };
  }, function (a) {
    return function (c) {
      return function (b) {
        for (var d = c, e = !1, f; !e;) {
          f = d;
          var h = b;
          if (h instanceof l) e = !0;else {
            if (h instanceof k) d = a(f)(h.value0), b = h.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [h.constructor.name]);
            f = void 0;
          }
        }

        return f;
      };
    };
  }, function (a) {
    return function (c) {
      var b = e.foldl(m)(g.flip(k.create))(l.value),
          d = e.foldl(m)(g.flip(a))(c);
      return function (a) {
        return d(b(a));
      };
    };
  });
  f = f.foldableNonEmpty(m);
  var r = new d.Semigroup(function (a) {
    return function (c) {
      return e.foldr(m)(k.create)(c)(a);
    };
  });
  h = new c.Monoid(function () {
    return r;
  }, l.value);
  b.Nil = l;
  b.Cons = k;
  b.monoidList = h;
  b.foldableList = m;
  b.functorNonEmptyList = a;
  b.foldableNonEmptyList = f;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var b = a["Data.List"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      h = a["Control.Bind"],
      c = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      d = a["Data.Functor"],
      l = a["Data.List.Types"],
      k = a["Data.Unit"],
      m = function () {
    return function (a) {
      return function (c) {
        for (var b = a, d = !1, e; !d;) {
          e = b;
          var f = c;
          if (f instanceof l.Nil) d = !0;else {
            if (f instanceof l.Cons) b = new l.Cons(f.value0, e), c = f.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [e.constructor.name, f.constructor.name]);
            e = void 0;
          }
        }

        return e;
      };
    }(l.Nil.value);
  }();

  b.manyRec = function (a) {
    return function (b) {
      return function (q) {
        return c.tailRecM(a)(function (r) {
          return h.bind(a.Monad0().Bind1())(e.alt(b.Plus1().Alt0())(d.map(b.Plus1().Alt0().Functor0())(c.Loop.create)(q))(g.pure(b.Applicative0())(new c.Done(k.unit))))(function (a) {
            return g.pure(b.Applicative0())(f.bimap(c.bifunctorStep)(function (a) {
              return new l.Cons(a, r);
            })(function (a) {
              return m(r);
            })(a));
          });
        })(l.Nil.value);
      };
    };
  };

  b.reverse = m;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var b = a["Data.Tuple"];
  a = a["Data.Functor"];

  var e = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  a = new a.Functor(function (a) {
    return function (b) {
      return new e(b.value0, a(b.value1));
    };
  });
  b.Tuple = e;

  b.fst = function (a) {
    return a.value0;
  };

  b.snd = function (a) {
    return a.value1;
  };

  b.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var b = a["Data.CatQueue"],
      e = a["Data.List"],
      g = a["Data.List.Types"],
      h = a["Data.Maybe"],
      c = a["Data.Tuple"],
      f = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }();

  a = new f(g.Nil.value, g.Nil.value);
  b.empty = a;

  b["null"] = function (a) {
    return a.value0 instanceof g.Nil && a.value1 instanceof g.Nil ? !0 : !1;
  };

  b.snoc = function (a) {
    return function (c) {
      return new f(a.value0, new g.Cons(c, a.value1));
    };
  };

  b.uncons = function (a) {
    for (var b = !1, d; !b;) {
      if (d = a, d.value0 instanceof g.Nil && d.value1 instanceof g.Nil) b = !0, d = h.Nothing.value;else if (d.value0 instanceof g.Nil) a = new f(e.reverse(d.value1), g.Nil.value), d = void 0;else if (d.value0 instanceof g.Cons) b = !0, d = new h.Just(new c.Tuple(d.value0.value0, new f(d.value0.value1, d.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [d.constructor.name]);
    }

    return d;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var b = a["Data.CatList"],
      e = a["Data.CatQueue"],
      g = a["Data.List.Types"],
      h = a["Data.Maybe"],
      c = a["Data.Semigroup"],
      f = a["Data.Tuple"],
      d = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      l = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }(),
      k = function k(a) {
    return function (c) {
      if (a instanceof d) return c;
      if (c instanceof d) return a;
      if (a instanceof l) return new l(a.value0, e.snoc(a.value1)(c));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [a.constructor.name, c.constructor.name]);
    };
  },
      m = function m(a) {
    return function (c) {
      return function (b) {
        var d = function d(a) {
          return function (c) {
            return function (b) {
              for (var d = a, e = c, f = !1, h; !f;) {
                h = d;
                var k = e,
                    l = b;
                if (l instanceof g.Nil) f = !0, h = k;else {
                  if (l instanceof g.Cons) d = h, e = h(k)(l.value0), b = l.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [h.constructor.name, k.constructor.name, l.constructor.name]);
                  h = void 0;
                }
              }

              return h;
            };
          };
        };

        return function (b) {
          return function (f) {
            function k(b, k) {
              b = e.uncons(b);
              if (b instanceof h.Nothing) return m = !0, d(function (a) {
                return function (c) {
                  return c(a);
                };
              })(c)(k);
              if (b instanceof h.Just) l = b.value0.value1, f = new g.Cons(a(b.value0.value0), k);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [b.constructor.name]);
            }

            for (var l = b, m = !1, n; !m;) {
              n = k(l, f);
            }

            return n;
          };
        }(b)(g.Nil.value);
      };
    };
  };

  a = d.value;
  c = new c.Semigroup(k);
  b.empty = a;

  b.snoc = function (a) {
    return function (c) {
      return k(a)(new l(c, e.empty));
    };
  };

  b.uncons = function (a) {
    if (a instanceof d) return h.Nothing.value;

    if (a instanceof l) {
      var c = h.Just,
          b = f.Tuple,
          g = a.value0;
      a = e["null"](a.value1) ? d.value : m(k)(d.value)(a.value1);
      return new c(new b(g, a));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [a.constructor.name]);
  };

  b.semigroupCatList = c;
})(PS);

(function (a) {
  a.unsafeCoerce = function (a) {
    return a;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});

(function (a) {
  a["Unsafe.Coerce"] = a["Unsafe.Coerce"] || {};
  a["Unsafe.Coerce"].unsafeCoerce = a["Unsafe.Coerce"].unsafeCoerce;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var b = a["Control.Monad.Free"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      h = a["Control.Bind"],
      c = a["Control.Monad"],
      f = a["Data.CatList"],
      d = a["Data.Either"],
      l = a["Data.Functor"],
      k = a["Data.Maybe"],
      m = a["Data.Semigroup"],
      r = a["Unsafe.Coerce"],
      q = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }(),
      t = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      v = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }(),
      n = function n(a) {
    function c(c) {
      var d = function d(a) {
        return function (c) {
          return new q(a.value0, m.append(f.semigroupCatList)(a.value1)(c));
        };
      };

      if (c.value0 instanceof t) {
        var e = f.uncons(c.value1);
        if (e instanceof k.Nothing) return b = !0, new t(c.value0.value0);

        if (e instanceof k.Just) {
          a = d((0, e.value0.value0)(c.value0.value0))(e.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [e.constructor.name]);
      }

      if (c.value0 instanceof v) return b = !0, new v(c.value0.value0, function (a) {
        return d(c.value0.value1(a))(c.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [c.value0.constructor.name]);
    }

    for (var b = !1, d; !b;) {
      d = c(a);
    }

    return d;
  },
      y = function y(a) {
    return function (c) {
      return function (b) {
        b = n(b);
        if (b instanceof t) return c(b.value0);
        if (b instanceof v) return a(b.value0)(b.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [b.constructor.name]);
      };
    };
  };

  a = new c.Monad(function () {
    return z;
  }, function () {
    return p;
  });
  var x = new l.Functor(function (a) {
    return function (c) {
      return h.bindFlipped(p)(function () {
        var c = e.pure(z);
        return function (b) {
          return c(a(b));
        };
      }())(c);
    };
  }),
      p = new h.Bind(function () {
    return u;
  }, function (a) {
    return function (c) {
      return new q(a.value0, f.snoc(a.value1)(c));
    };
  }),
      u = new g.Apply(function () {
    return x;
  }, c.ap(a)),
      z = new e.Applicative(function () {
    return u;
  }, function (a) {
    return new q(t.create(a), f.empty);
  });

  b.wrap = function (a) {
    return new q(new v(a, r.unsafeCoerce), f.empty);
  };

  b.liftF = function (a) {
    return new q(new v(a, function () {
      var a = e.pure(z);
      return function (c) {
        return a(c);
      };
    }()), f.empty);
  };

  b.resume = function (a) {
    return y(function (c) {
      return function (b) {
        return new d.Left(l.map(a)(b)(c));
      };
    })(d.Right.create);
  };

  b["resume'"] = y;
  b.freeFunctor = x;
  b.freeBind = p;
  b.freeApplicative = z;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (a) {
    return a.orr;
  };

  a.MultiAlternative = function (a, e) {
    this.Plus0 = a;
    this.orr = e;
  };
})(PS);

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (a) {
    return a.parallel;
  };

  a.sequential = function (a) {
    return a.sequential;
  };

  a.Parallel = function (a, e, g, h) {
    this.Applicative1 = a;
    this.Monad0 = e;
    this.parallel = g;
    this.sequential = h;
  };
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  a = a["Control.Plus"];

  a.Plus = function (a, e) {
    this.Alt0 = a;
    this.empty = e;
  };

  a.empty = function (a) {
    return a.empty;
  };
})(PS);

(function (a) {
  a["Control.ShiftMap"] = a["Control.ShiftMap"] || {};
  a = a["Control.ShiftMap"];

  a.shiftMap = function (a) {
    return a.shiftMap;
  };

  a.ShiftMap = function (a) {
    this.shiftMap = a;
  };
})(PS);

(function (a) {
  a.range = function (a) {
    return function (b) {
      for (var c = a > b ? -1 : 1, e = Array(c * (b - a) + 1), d = a, h = 0; d !== b;) {
        e[h++] = d, d += c;
      }

      e[h] = d;
      return e;
    };
  };

  var b = function b(a) {
    return function (b) {
      return 1 > a ? [] : Array(a).fill(b);
    };
  },
      e = function e(a) {
    return function (b) {
      for (var c = [], e = 0, d = 0; d < a; d++) {
        c[e++] = b;
      }

      return c;
    };
  };

  a.replicate = "function" === typeof Array.prototype.fill ? b : e;

  a.fromFoldableImpl = function () {
    function a(a, c) {
      this.head = a;
      this.tail = c;
    }

    function b(c) {
      return function (b) {
        return new a(c, b);
      };
    }

    var c = {};
    return function (a) {
      return function (d) {
        var e = [],
            f = 0;

        for (d = a(b)(c)(d); d !== c;) {
          e[f++] = d.head, d = d.tail;
        }

        return e;
      };
    };
  }();

  a.length = function (a) {
    return a.length;
  };

  a._updateAt = function (a) {
    return function (b) {
      return function (c) {
        return function (e) {
          return function (d) {
            if (0 > c || c >= d.length) return b;
            d = d.slice();
            d[c] = e;
            return a(d);
          };
        };
      };
    };
  };

  a.filter = function (a) {
    return function (b) {
      return b.filter(a);
    };
  };

  a.slice = function (a) {
    return function (b) {
      return function (c) {
        return c.slice(a, b);
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
  var b = a["Data.Array"],
      e = a["Data.Array"],
      g = a["Control.Bind"],
      h = a["Control.Category"],
      c = a["Data.Boolean"],
      f = a["Data.Foldable"],
      d = a["Data.Function"],
      l = a["Data.Maybe"];
  a = e._updateAt(l.Just.create)(l.Nothing.value);

  var k = function k(a) {
    return [a];
  },
      m = d.flip(g.bind(g.bindArray));

  g = function (a) {
    return m(function () {
      var c = l.maybe([])(k);
      return function (b) {
        return c(a(b));
      };
    }());
  }(h.identity(h.categoryFn));

  b.fromFoldable = function (a) {
    return e.fromFoldableImpl(f.foldr(a));
  };

  b.init = function (a) {
    if (0 === e.length(a)) return l.Nothing.value;
    if (c.otherwise) return new l.Just(e.slice(0)(e.length(a) - 1 | 0)(a));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [a.constructor.name]);
  };

  b.updateAt = a;
  b.concatMap = m;
  b.catMaybes = g;
  b.range = e.range;
  b.replicate = e.replicate;
  b.length = e.length;
  b.filter = e.filter;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var b = a["Data.Array.NonEmpty"],
      e = a["Data.Array"],
      g = a["Data.Boolean"],
      h = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var c = a.unsafeCoerce,
      f = a.unsafeCoerce,
      d = a.unsafeCoerce;

  (function (a) {
    return function (c) {
      return a(d(c));
    };
  })(e.length);

  b.fromArray = function (a) {
    if (0 < e.length(a)) return new h.Just(f(a));
    if (g.otherwise) return h.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [a.constructor.name]);
  };

  b.toArray = d;

  b.updateAt = function (a) {
    return function (b) {
      var f = e.updateAt(a)(b);
      return function (a) {
        return c(f(d(a)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (a) {
    return function (b) {
      for (var e = b[0], h = b.length, c = 1; c < h; c++) {
        e = a(e)(b[c]);
      }

      return e;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (a) {
    return function (b) {
      for (var e = b.length, h = Array(e), c = 0; c < e; c++) {
        h[c] = a(c)(b[c]);
      }

      return h;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var b = a["Data.FunctorWithIndex"],
      e = a["Data.Functor"];
  a = new function (a, b) {
    this.Functor0 = a;
    this.mapWithIndex = b;
  }(function () {
    return e.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  b.mapWithIndex = function (a) {
    return a.mapWithIndex;
  };

  b.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var b = a["Data.FoldableWithIndex"],
      e = a["Data.Foldable"],
      g = a["Data.FunctorWithIndex"],
      h = a["Data.Monoid"],
      c = a["Data.Semigroup"],
      f = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }(),
      d = function d(a) {
    return function (b) {
      return function (d) {
        return (0, a.foldrWithIndex)(function (a) {
          return function (e) {
            return function (f) {
              return c.append(b.Semigroup0())(d(a)(e))(f);
            };
          };
        })(h.mempty(b));
      };
    };
  },
      l = new function (a, c, b, d) {
    this.Foldable0 = a;
    this.foldMapWithIndex = c;
    this.foldlWithIndex = b;
    this.foldrWithIndex = d;
  }(function () {
    return e.foldableArray;
  }, function (a) {
    return d(l)(a);
  }, function (a) {
    return function (c) {
      var b = e.foldl(e.foldableArray)(function (c) {
        return function (b) {
          return a(b.value0)(c)(b.value1);
        };
      })(c),
          d = g.mapWithIndex(g.functorWithIndexArray)(f.create);
      return function (a) {
        return b(d(a));
      };
    };
  }, function (a) {
    return function (c) {
      var b = e.foldr(e.foldableArray)(function (c) {
        return function (b) {
          return a(c.value0)(c.value1)(b);
        };
      })(c),
          d = g.mapWithIndex(g.functorWithIndexArray)(f.create);
      return function (a) {
        return b(d(a));
      };
    };
  });

  b.foldlWithIndex = function (a) {
    return a.foldlWithIndex;
  };

  b.foldableWithIndexArray = l;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var b = a["Data.Semigroup.Foldable"],
      e = a["Data.Functor"];

  b.Foldable1 = function (a, b, c) {
    this.Foldable0 = a;
    this.fold1 = b;
    this.foldMap1 = c;
  };

  b.foldMap1 = function (a) {
    return a.foldMap1;
  };

  b.foldMap1Default = function (a) {
    return function (b) {
      return function (c) {
        return function (f) {
          var d = (0, a.fold1)(c),
              h = e.map(b)(f);
          return function (a) {
            return d(h(a));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function a(a) {
      return [a];
    }

    function e(a) {
      return function (c) {
        return [a, c];
      };
    }

    function g(a) {
      return function (c) {
        return function (b) {
          return [a, c, b];
        };
      };
    }

    function h(a) {
      return function (c) {
        return a.concat(c);
      };
    }

    return function (c) {
      return function (b) {
        return function (d) {
          return function (f) {
            return function (k) {
              function l(m, q) {
                switch (q - m) {
                  case 0:
                    return d([]);

                  case 1:
                    return b(a)(f(k[m]));

                  case 2:
                    return c(b(e)(f(k[m])))(f(k[m + 1]));

                  case 3:
                    return c(c(b(g)(f(k[m])))(f(k[m + 1])))(f(k[m + 2]));

                  default:
                    var t = m + 2 * Math.floor((q - m) / 4);
                    return c(b(h)(l(m, t)))(l(t, q));
                }
              }

              return l(0, k.length);
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
      e = a["Data.Traversable"],
      g = a["Control.Applicative"],
      h = a["Control.Apply"],
      c = a["Control.Category"],
      f = a["Data.Foldable"],
      d = a["Data.Functor"],
      l = function l(a) {
    return function (b) {
      return (0, a.traverse)(b)(c.identity(c.categoryFn));
    };
  },
      k = new function (a, c, b, d) {
    this.Foldable1 = a;
    this.Functor0 = c;
    this.sequence = b;
    this.traverse = d;
  }(function () {
    return f.foldableArray;
  }, function () {
    return d.functorArray;
  }, function (a) {
    return l(k)(a);
  }, function (a) {
    return e.traverseArrayImpl(h.apply(a.Apply0()))(d.map(a.Apply0().Functor0()))(g.pure(a));
  });

  b.traverse = function (a) {
    return a.traverse;
  };

  b.sequence = function (a) {
    return a.sequence;
  };

  b.traversableArray = k;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var b = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Array.NonEmpty.Internal"],
      g = a["Data.Semigroup"],
      h = a["Data.Semigroup.Foldable"],
      c = a["Data.Traversable"].traversableArray,
      f = a["Data.Functor"].functorArray,
      d = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      l = a["Data.Foldable"].foldableArray,
      k = new h.Foldable1(function () {
    return l;
  }, function (a) {
    return e.fold1Impl(g.append(a));
  }, function (a) {
    return h.foldMap1Default(k)(f)(a);
  });
  b.functorNonEmptyArray = f;
  b.foldableWithIndexNonEmptyArray = d;
  b.foldable1NonEmptyArray = k;
  b.traversableNonEmptyArray = c;
})(PS);

(function (a) {
  a.pureE = function (a) {
    return function () {
      return a;
    };
  };

  a.bindE = function (a) {
    return function (b) {
      return function () {
        return b(a())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var b = a.Effect,
      e = a.Effect,
      g = a["Control.Applicative"],
      h = a["Control.Apply"],
      c = a["Control.Bind"],
      f = a["Control.Monad"];
  a = a["Data.Functor"];
  var d = new f.Monad(function () {
    return m;
  }, function () {
    return l;
  }),
      l = new c.Bind(function () {
    return k;
  }, e.bindE),
      k = new h.Apply(function () {
    return r;
  }, f.ap(d)),
      m = new g.Applicative(function () {
    return k;
  }, e.pureE),
      r = new a.Functor(g.liftA1(m));
  b.functorEffect = r;
  b.applicativeEffect = m;
  b.bindEffect = l;
  b.monadEffect = d;
})(PS);

(function (a) {
  var b = function () {
    function a(a, c, b, d) {
      this.tag = a;
      this._1 = c;
      this._2 = b;
      this._3 = d;
    }

    function b(c) {
      var b = function b(_b, d, e) {
        return new a(c, _b, d, e);
      };

      b.tag = c;
      return b;
    }

    function h(c) {
      return new a("Pure", void 0);
    }

    function c(a) {
      try {
        a();
      } catch (v) {
        setTimeout(function () {
          throw v;
        }, 0);
      }
    }

    function f(a, c, b) {
      try {
        return c(b());
      } catch (y) {
        return a(y);
      }
    }

    function d(a, c, b) {
      try {
        return c(b)();
      } catch (y) {
        return b(a(y))(), h;
      }
    }

    function l(b, e, h) {
      function g(h) {
        for (var k, x, z;;) {
          switch (z = x = k = null, u) {
            case 2:
              u = 1;
              n = v(n);
              null === G ? v = null : (v = G._1, G = G._2);
              break;

            case 3:
              b.isLeft(n) ? (u = 5, r = n, n = null) : null === v ? u = 5 : (u = 2, n = b.fromRight(n));
              break;

            case 1:
              switch (n.tag) {
                case "Bind":
                  v && (G = new a("Cons", v, G));
                  v = n._2;
                  u = 1;
                  n = n._1;
                  break;

                case "Pure":
                  null === v ? (u = 5, n = b.right(n._1)) : (u = 2, n = n._1);
                  break;

                case "Sync":
                  u = 3;
                  n = f(b.left, b.right, n._1);
                  break;

                case "Async":
                  u = 4;
                  n = d(b.left, n._1, function (a) {
                    return function () {
                      p === h && (p++, q.enqueue(function () {
                        p === h + 1 && (u = 3, n = a, g(p));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  u = 5;
                  r = b.left(n._1);
                  n = null;
                  break;

                case "Catch":
                  D = null === v ? new a("Cons", n, D, t) : new a("Cons", n, new a("Cons", new a("Resume", v, G), D, t), t);
                  G = v = null;
                  u = 1;
                  n = n._1;
                  break;

                case "Bracket":
                  w++;
                  D = null === v ? new a("Cons", n, D, t) : new a("Cons", n, new a("Cons", new a("Resume", v, G), D, t), t);
                  G = v = null;
                  u = 1;
                  n = n._1;
                  break;

                case "Fork":
                  u = 3;
                  k = l(b, e, n._2);
                  e && e.register(k);
                  n._1 && k.run();
                  n = b.right(k);
                  break;

                case "Sequential":
                  u = 1, n = m(b, e, n._1);
              }

              break;

            case 5:
              G = v = null;
              if (null === D) u = 6, n = t || r || n;else switch (k = D._3, z = D._1, D = D._2, z.tag) {
                case "Catch":
                  t && t !== k && 0 === w ? u = 5 : r && (u = 1, n = z._2(b.fromLeft(r)), r = null);
                  break;

                case "Resume":
                  t && t !== k && 0 === w || r ? u = 5 : (v = z._1, G = z._2, u = 2, n = b.fromRight(n));
                  break;

                case "Bracket":
                  w--;
                  null === r && (x = b.fromRight(n), D = new a("Cons", new a("Release", z._2, x), D, k), t === k || 0 < w) && (u = 1, n = z._3(x));
                  break;

                case "Release":
                  D = new a("Cons", new a("Finalized", n, r), D, t);
                  u = 1;
                  n = t && t !== k && 0 === w ? z._1.killed(b.fromLeft(t))(z._2) : r ? z._1.failed(b.fromLeft(r))(z._2) : z._1.completed(b.fromRight(n))(z._2);
                  r = null;
                  w++;
                  break;

                case "Finalizer":
                  w++;
                  D = new a("Cons", new a("Finalized", n, r), D, t);
                  u = 1;
                  n = z._1;
                  break;

                case "Finalized":
                  w--, u = 5, n = z._1, r = z._2;
              }
              break;

            case 6:
              for (var y in F) {
                F.hasOwnProperty(y) && (P = P && F[y].rethrow, c(F[y].handler(n)));
              }

              F = null;
              t && r ? setTimeout(function () {
                throw b.fromLeft(r);
              }, 0) : b.isLeft(n) && P && setTimeout(function () {
                if (P) throw b.fromLeft(n);
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

      function k(a) {
        return function () {
          if (6 === u) return P = P && a.rethrow, a.handler(n)(), function () {};
          var c = A++;
          F = F || {};
          F[c] = a;
          return function () {
            null !== F && delete F[c];
          };
        };
      }

      var p = 0,
          u = 0,
          n = h,
          r = null,
          t = null,
          v = null,
          G = null,
          D = null,
          w = 0,
          A = 0,
          F = null,
          P = !0;
      return {
        kill: function kill(c, d) {
          return function () {
            if (6 === u) return d(b.right(void 0))(), function () {};
            var e = k({
              rethrow: !1,
              handler: function handler() {
                return d(b.right(void 0));
              }
            })();

            switch (u) {
              case 0:
                t = b.left(c);
                u = 6;
                n = t;
                g(p);
                break;

              case 4:
                null === t && (t = b.left(c));
                0 === w && (4 === u && (D = new a("Cons", new a("Finalizer", n(c)), D, t)), u = 5, r = n = null, g(++p));
                break;

              default:
                null === t && (t = b.left(c)), 0 === w && (u = 5, r = n = null);
            }

            return e;
          };
        },
        join: function join(a) {
          return function () {
            var c = k({
              rethrow: !1,
              handler: a
            })();
            0 === u && g(p);
            return c;
          };
        },
        onComplete: k,
        isSuspended: function isSuspended() {
          return 0 === u;
        },
        run: function run() {
          0 === u && (q.isDraining() ? g(p) : q.enqueue(function () {
            g(p);
          }));
        }
      };
    }

    function k(c, b, d, e) {
      function f(b, d, e) {
        var f = d,
            h = null,
            g = null,
            k = 0;
        d = {};

        a: for (;;) {
          var l = null;

          switch (f.tag) {
            case "Forked":
              f._3 === r && (l = q[f._1], d[k++] = l.kill(b, function (a) {
                return function () {
                  k--;
                  0 === k && e(a)();
                };
              }));
              if (null === h) break a;
              f = h._2;
              null === g ? h = null : (h = g._1, g = g._2);
              break;

            case "Map":
              f = f._2;
              break;

            case "Apply":
            case "Alt":
              h && (g = new a("Cons", h, g)), h = f, f = f._1;
          }
        }

        if (0 === k) e(c.right(void 0))();else for (b = 0, l = k; b < l; b++) {
          d[b] = d[b]();
        }
        return d;
      }

      function g(a, b, d) {
        var h, k;

        if (c.isLeft(a)) {
          var l = a;
          var m = null;
        } else m = a, l = null;

        for (;;) {
          var p = k = h = a = null;
          if (null !== w) break;

          if (null === b) {
            e(l || m)();
            break;
          }

          if (b._3 !== r) break;

          switch (b.tag) {
            case "Map":
              null === l ? (b._3 = c.right(b._1(c.fromRight(m))), m = b._3) : b._3 = l;
              break;

            case "Apply":
              a = b._1._3;
              h = b._2._3;

              if (l) {
                if (b._3 = l, k = !0, p = t++, v[p] = f(y, l === a ? b._2 : b._1, function () {
                  return function () {
                    delete v[p];
                    k ? k = !1 : null === d ? g(l, null, null) : g(l, d._1, d._2);
                  };
                }), k) {
                  k = !1;
                  return;
                }
              } else {
                if (a === r || h === r) return;
                m = c.right(c.fromRight(a)(c.fromRight(h)));
                b._3 = m;
              }

              break;

            case "Alt":
              a = b._1._3;
              h = b._2._3;
              if (a === r && c.isLeft(h) || h === r && c.isLeft(a)) return;
              if (a !== r && c.isLeft(a) && h !== r && c.isLeft(h)) l = m === a ? h : a, m = null, b._3 = l;else if (b._3 = m, k = !0, p = t++, v[p] = f(y, m === a ? b._2 : b._1, function () {
                return function () {
                  delete v[p];
                  k ? k = !1 : null === d ? g(m, null, null) : g(m, d._1, d._2);
                };
              }), k) {
                k = !1;
                return;
              }
          }

          null === d ? b = null : (b = d._1, d = d._2);
        }
      }

      function k(a) {
        return function (c) {
          return function () {
            delete q[a._1];
            a._3 = c;
            g(c, a._2._1, a._2._2);
          };
        };
      }

      function m(b, d) {
        w = c.left(b);
        var e;

        for (e in v) {
          if (v.hasOwnProperty(e)) {
            var g = v[e];

            for (e in g) {
              if (g.hasOwnProperty(e)) g[e]();
            }
          }
        }

        v = null;
        var k = f(b, A, d);
        return function (c) {
          return new a("Async", function (a) {
            return function () {
              for (var a in k) {
                if (k.hasOwnProperty(a)) k[a]();
              }

              return h;
            };
          });
        };
      }

      var n = 0,
          q = {},
          t = 0,
          v = {},
          y = Error("[ParAff] Early exit"),
          w = null,
          A = r;

      (function () {
        var e = 1,
            f = d,
            h = null,
            g = null;

        a: for (;;) {
          switch (e) {
            case 1:
              switch (f.tag) {
                case "Map":
                  h && (g = new a("Cons", h, g));
                  h = new a("Map", f._1, r, r);
                  f = f._2;
                  break;

                case "Apply":
                  h && (g = new a("Cons", h, g));
                  h = new a("Apply", r, f._2, r);
                  f = f._1;
                  break;

                case "Alt":
                  h && (g = new a("Cons", h, g));
                  h = new a("Alt", r, f._2, r);
                  f = f._1;
                  break;

                default:
                  var m = n++;
                  e = 5;
                  var p = f;
                  f = new a("Forked", m, new a("Cons", h, g), r);
                  p = l(c, b, p);
                  p.onComplete({
                    rethrow: !1,
                    handler: k(f)
                  })();
                  q[m] = p;
                  b && b.register(p);
              }

              break;

            case 5:
              if (null === h) break a;
              h._1 === r ? (h._1 = f, e = 1, f = h._2, h._2 = r) : (h._2 = f, f = h, null === g ? h = null : (h = g._1, g = g._2));
          }
        }

        A = f;

        for (m = 0; m < n; m++) {
          q[m].run();
        }
      })();

      return function (c) {
        return new a("Async", function (a) {
          return function () {
            return m(c, a);
          };
        });
      };
    }

    function m(c, b, d) {
      return new a("Async", function (a) {
        return function () {
          return k(c, b, d, a);
        };
      });
    }

    var r = {},
        q = function () {
      function a() {
        for (e = !0; 0 !== c;) {
          c--;
          var a = d[b];
          d[b] = void 0;
          b = (b + 1) % 1024;
          a();
        }

        e = !1;
      }

      var c = 0,
          b = 0,
          d = Array(1024),
          e = !1;
      return {
        isDraining: function isDraining() {
          return e;
        },
        enqueue: function enqueue(f) {
          if (1024 === c) {
            var h = e;
            a();
            e = h;
          }

          d[(b + c) % 1024] = f;
          c++;
          e || a();
        }
      };
    }();

    a.EMPTY = r;
    a.Pure = b("Pure");
    a.Throw = b("Throw");
    a.Catch = b("Catch");
    a.Sync = b("Sync");
    a.Async = b("Async");
    a.Bind = b("Bind");
    a.Bracket = b("Bracket");
    a.Fork = b("Fork");
    a.Seq = b("Sequential");
    a.ParMap = b("Map");
    a.ParApply = b("Apply");
    a.ParAlt = b("Alt");
    a.Fiber = l;

    a.Supervisor = function (c) {
      var b = {},
          d = 0,
          e = 0;
      return {
        register: function register(a) {
          var c = d++;
          a.onComplete({
            rethrow: !0,
            handler: function handler(a) {
              return function () {
                e--;
                delete b[c];
              };
            }
          });
          b[c] = a;
          e++;
        },
        isEmpty: function isEmpty() {
          return 0 === e;
        },
        killAll: function killAll(f, h) {
          return function () {
            function g(a) {
              l[a] = b[a].kill(f, function (b) {
                return function () {
                  delete l[a];
                  k--;
                  c.isLeft(b) && c.fromLeft(b) && setTimeout(function () {
                    throw c.fromLeft(b);
                  }, 0);
                  0 === k && h();
                };
              })();
            }

            if (0 === e) return h();
            var k = 0,
                l = {},
                m;

            for (m in b) {
              b.hasOwnProperty(m) && (k++, g(m));
            }

            b = {};
            e = d = 0;
            return function (c) {
              return new a("Sync", function () {
                for (var a in l) {
                  if (l.hasOwnProperty(a)) l[a]();
                }
              });
            };
          };
        }
      };
    };

    a.Scheduler = q;
    a.nonCanceler = h;
    return a;
  }();

  a._pure = b.Pure;
  a._throwError = b.Throw;

  a._catchError = function (a) {
    return function (e) {
      return b.Catch(a, e);
    };
  };

  a._map = function (a) {
    return function (e) {
      return e.tag === b.Pure.tag ? b.Pure(a(e._1)) : b.Bind(e, function (e) {
        return b.Pure(a(e));
      });
    };
  };

  a._bind = function (a) {
    return function (e) {
      return b.Bind(a, e);
    };
  };

  a._liftEffect = b.Sync;

  a._parAffMap = function (a) {
    return function (e) {
      return b.ParMap(a, e);
    };
  };

  a._parAffApply = function (a) {
    return function (e) {
      return b.ParApply(a, e);
    };
  };

  a._parAffAlt = function (a) {
    return function (e) {
      return b.ParAlt(a, e);
    };
  };

  a.makeAff = b.Async;

  a._makeFiber = function (a, g) {
    return function () {
      return b.Fiber(a, null, g);
    };
  };

  a._sequential = b.Seq;
})(PS["Effect.Aff"] = PS["Effect.Aff"] || {});

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var b = a["Control.Monad.Error.Class"],
      e = a["Control.Applicative"],
      g = a["Data.Either"],
      h = a["Data.Functor"];

  b.catchError = function (a) {
    return a.catchError;
  };

  b.throwError = function (a) {
    return a.throwError;
  };

  b.MonadThrow = function (a, b) {
    this.Monad0 = a;
    this.throwError = b;
  };

  b.MonadError = function (a, b) {
    this.MonadThrow0 = a;
    this.catchError = b;
  };

  b["try"] = function (a) {
    return function (c) {
      return (0, a.catchError)(h.map(a.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(g.Right.create)(c))(function () {
        var c = e.pure(a.MonadThrow0().Monad0().Applicative0());
        return function (a) {
          return c(g.Left.create(a));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var b = a["Control.Category"],
      e = a["Control.Parallel.Class"],
      g = a["Data.Foldable"],
      h = function h(a) {
    return function (c) {
      return function (b) {
        var d = e.sequential(a),
            f = g.traverse_(a.Applicative1())(c)(function () {
          var c = e.parallel(a);
          return function (a) {
            return c(b(a));
          };
        }());
        return function (a) {
          return d(f(a));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (a) {
    return function (c) {
      return h(a)(c)(b.identity(b.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var b = a["Effect.Class"],
      e = a["Control.Category"],
      g = a.Effect;

  a = function a(_a8, c) {
    this.Monad0 = _a8;
    this.liftEffect = c;
  };

  e = new a(function () {
    return g.monadEffect;
  }, e.identity(e.categoryFn));

  b.liftEffect = function (a) {
    return a.liftEffect;
  };

  b.MonadEffect = a;
  b.monadEffectEffect = e;
})(PS);

(function (a) {
  a.showErrorImpl = function (a) {
    return a.stack || a.toString();
  };

  a.error = function (a) {
    return Error(a);
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var b = a["Effect.Exception"],
      e = a["Effect.Exception"];
  a = new a["Data.Show"].Show(e.showErrorImpl);
  b.showError = a;
  b.error = e.error;
})(PS);

(function (a) {
  a.unsafePartial = function (a) {
    return a();
  };
})(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});

(function (a) {
  a.crashWith = function () {
    return function (a) {
      throw Error(a);
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
      e = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (a) {
    return b.unsafePartial(function (b) {
      return e.crashWith()(a);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var b = a["Effect.Aff"],
      e = a["Effect.Aff"],
      g = a["Control.Alt"],
      h = a["Control.Applicative"],
      c = a["Control.Apply"],
      f = a["Control.Bind"],
      d = a["Control.Monad"],
      l = a["Control.Monad.Error.Class"],
      k = a["Control.Parallel"],
      m = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      q = a["Data.Either"],
      t = a["Data.Foldable"],
      v = a["Data.Function"],
      n = a["Data.Functor"],
      y = a["Data.Monoid"],
      x = a["Data.Semigroup"],
      p = a["Data.Unit"],
      u = a.Effect,
      z = a["Effect.Class"],
      C = a["Effect.Exception"],
      N = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var B = new n.Functor(e._parAffMap),
      G = new n.Functor(e._map),
      D = function () {
    return {
      isLeft: function isLeft(a) {
        if (a instanceof q.Left) return !0;
        if (a instanceof q.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [a.constructor.name]);
      },
      fromLeft: function fromLeft(a) {
        if (a instanceof q.Left) return a.value0;
        if (a instanceof q.Right) return N.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [a.constructor.name]);
      },
      fromRight: function fromRight(a) {
        if (a instanceof q.Right) return a.value0;
        if (a instanceof q.Left) return N.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [a.constructor.name]);
      },
      left: q.Left.create,
      right: q.Right.create
    };
  }(),
      w = function w(a) {
    return function () {
      var c = e._makeFiber(D, a)();

      c.run();
      return c;
    };
  },
      A = new c.Apply(function () {
    return B;
  }, e._parAffApply),
      F = new d.Monad(function () {
    return I;
  }, function () {
    return P;
  }),
      P = new f.Bind(function () {
    return L;
  }, e._bind),
      L = new c.Apply(function () {
    return G;
  }, d.ap(F)),
      I = new h.Applicative(function () {
    return L;
  }, e._pure),
      H = new z.MonadEffect(function () {
    return F;
  }, e._liftEffect);

  c = function () {
    var a = z.liftEffect(H);
    return function (c) {
      return v["const"](a(c));
    };
  }();

  var E = new l.MonadThrow(function () {
    return F;
  }, e._throwError),
      J = new l.MonadError(function () {
    return E;
  }, e._catchError),
      M = function M(a) {
    return function (c) {
      return w(f.bindFlipped(P)(function () {
        var c = z.liftEffect(H);
        return function (b) {
          return c(a(b));
        };
      }())(l["try"](J)(c)));
    };
  },
      O = new m.Parallel(function () {
    return K;
  }, function () {
    return F;
  }, a.unsafeCoerce, e._sequential),
      K = new h.Applicative(function () {
    return A;
  }, function () {
    var a = m.parallel(O),
        c = h.pure(I);
    return function (b) {
      return a(c(b));
    };
  }()),
      R = new x.Semigroup(function (a) {
    return function (c) {
      return function (b) {
        return k.parSequence_(O)(t.foldableArray)([a(b), c(b)]);
      };
    };
  });

  x = v["const"](h.pure(I)(p.unit));
  var T = new y.Monoid(function () {
    return R;
  }, x);
  x = e.makeAff(function (a) {
    return h.pure(u.applicativeEffect)(y.mempty(T));
  });
  var S = new g.Alt(function () {
    return B;
  }, e._parAffAlt),
      Q = new g.Alt(function () {
    return G;
  }, function (a) {
    return function (c) {
      return l.catchError(J)(a)(v["const"](c));
    };
  });
  g = new r.Plus(function () {
    return Q;
  }, l.throwError(E)(C.error("Always fails")));
  r = new r.Plus(function () {
    return S;
  }, m.parallel(O)(r.empty(g)));

  b.runAff_ = function (a) {
    return function (c) {
      return n["void"](u.functorEffect)(M(a)(c));
    };
  };

  b.never = x;
  b.effectCanceler = c;
  b.functorAff = G;
  b.applicativeAff = I;
  b.bindAff = P;
  b.monadEffectAff = H;
  b.altParAff = S;
  b.plusParAff = r;
  b.parallelAff = O;
  b.makeAff = e.makeAff;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var b = a["Concur.Core.Types"],
      e = a["Control.Alt"],
      g = a["Control.Alternative"],
      h = a["Control.Applicative"],
      c = a["Control.Bind"],
      f = a["Control.Category"],
      d = a["Control.Monad"],
      l = a["Control.Monad.Free"],
      k = a["Control.MultiAlternative"],
      m = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      q = a["Data.Array.NonEmpty"],
      t = a["Data.Array.NonEmpty.Internal"],
      v = a["Data.Either"],
      n = a["Data.FoldableWithIndex"],
      y = a["Data.Functor"],
      x = a["Data.Maybe"],
      p = a["Data.Monoid"],
      u = a["Data.Semigroup"],
      z = a["Data.Semigroup.Foldable"],
      C = a["Data.Traversable"],
      N = a["Data.Tuple"],
      B = a.Effect,
      G = a["Effect.Aff"],
      D = a["Effect.Class"];
  a = new a["Control.ShiftMap"].ShiftMap(function (a) {
    return a(f.identity(f.categoryFn));
  });

  var w = l.freeFunctor,
      A = l.freeBind,
      F = l.freeApplicative,
      P = new d.Monad(function () {
    return F;
  }, function () {
    return A;
  }),
      L = function L(a) {
    return a;
  },
      I = function I(a) {
    return a;
  },
      H = function H(a) {
    return l["resume'"](function (c) {
      return function (b) {
        return new v.Right(y.map(a)(b)(c));
      };
    })(v.Left.create);
  },
      E = new y.Functor(function (a) {
    return function (c) {
      return y.map(B.functorEffect)(function (c) {
        if (c instanceof v.Right) return new v.Right({
          cont: y.map(G.functorAff)(a)(c.value0.cont),
          view: c.value0.view
        });
        if (c instanceof v.Left) return new v.Left(a(c.value0));
        throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 46, column 34): " + [c.constructor.name]);
      })(c);
    };
  }),
      J = function () {
    var a = y.map(B.functorEffect)(v.Left.create);
    return function (c) {
      return l.liftF(a(c));
    };
  }(),
      M = function M(a) {
    return h.pure(B.applicativeEffect)(new v.Right({
      view: a,
      cont: G.never
    }));
  },
      O = function O(a) {
    return l.liftF(M(a));
  },
      K = function K(a) {
    return new u.Semigroup(function (c) {
      return function (b) {
        return k.orr(T(a))([c, b]);
      };
    });
  },
      R = function R(a) {
    return new r.Plus(function () {
      return S(a);
    }, O(p.mempty(a)));
  },
      T = function T(a) {
    return new k.MultiAlternative(function () {
      return R(a);
    }, function (b) {
      var d = function d(a) {
        return v.either(function (b) {
          b = H(E)(b);
          if (b instanceof v.Left) return h.pure(B.applicativeEffect)(new v.Left(b.value0));
          if (b instanceof v.Right) return c.bind(B.bindEffect)(b.value0)(d(a));
          throw Error("Failed pattern match at Concur.Core.Types (line 127, column 26 - line 129, column 57): " + [b.constructor.name]);
        })(function (a) {
          return h.pure(B.applicativeEffect)(new v.Right(a));
        });
      },
          f = function f(a) {
        return function (b) {
          return function (d) {
            var f = y.map(t.functorNonEmptyArray)(function () {
              var a = h.pure(B.applicativeEffect);
              return function (c) {
                return l.wrap(a(v.Right.create(c)));
              };
            }())(b);
            return c.bind(G.bindAff)(m.sequential(G.parallelAff)(n.foldlWithIndex(t.foldableWithIndexNonEmptyArray)(function (a) {
              return function (c) {
                return function (b) {
                  return e.alt(G.altParAff)(m.parallel(G.parallelAff)(y.map(G.functorAff)(N.Tuple.create(a))(b)))(c);
                };
              };
            })(r.empty(G.plusParAff))(d)))(function (c) {
              return h.pure(G.applicativeAff)(g(a)(x.fromMaybe(f)(q.updateAt(c.value0)(c.value1)(f))));
            });
          };
        };
      },
          g = function g(a) {
        return function (c) {
          var b = C.traverse(t.traversableNonEmptyArray)(v.applicativeEither)(H(E))(c);
          if (b instanceof v.Left) return h.pure(l.freeApplicative)(b.value0);
          if (b instanceof v.Right) return l.wrap(function () {
            var c = C.traverse(t.traversableNonEmptyArray)(B.applicativeEffect)(L)(b.value0)();
            c = C.traverse(t.traversableNonEmptyArray)(B.applicativeEffect)(d(a))(c)();
            c = C.sequence(t.traversableNonEmptyArray)(v.applicativeEither)(c);
            if (c instanceof v.Left) return new v.Left(h.pure(l.freeApplicative)(c.value0));
            if (c instanceof v.Right) return new v.Right({
              view: z.foldMap1(t.foldable1NonEmptyArray)(a.Semigroup0())(function (a) {
                return a.view;
              })(c.value0),
              cont: f(a)(c.value0)(y.map(t.functorNonEmptyArray)(function (a) {
                return a.cont;
              })(c.value0))
            });
            throw Error("Failed pattern match at Concur.Core.Types (line 110, column 9 - line 117, column 14): " + [c.constructor.name]);
          });
          throw Error("Failed pattern match at Concur.Core.Types (line 101, column 16 - line 117, column 14): " + [b.constructor.name]);
        };
      };

      b = q.fromArray(b);
      if (b instanceof x.Just) return g(a)(y.map(t.functorNonEmptyArray)(I)(b.value0));
      if (b instanceof x.Nothing) return r.empty(R(a));
      throw Error("Failed pattern match at Concur.Core.Types (line 90, column 13 - line 92, column 21): " + [b.constructor.name]);
    });
  },
      S = function S(a) {
    return new e.Alt(function () {
      return w;
    }, u.append(K(a)));
  };

  b.Widget = function (a) {
    return a;
  };

  b.unWidget = I;
  b.resume = H;
  b.display = O;
  b.functorWidgetStep = E;
  b.widgetFunctor = w;
  b.widgetBind = A;
  b.widgetApplicative = F;
  b.widgetMonad = P;
  b.widgetShiftMap = a;
  b.widgetMultiAlternative = T;

  b.widgetMonoid = function (a) {
    return new p.Monoid(function () {
      return K(a);
    }, r.empty(R(a)));
  };

  b.widgetAlternative = function (a) {
    return new g.Alternative(function () {
      return F;
    }, function () {
      return R(a);
    });
  };

  b.widgetMonadEff = function (a) {
    return new D.MonadEffect(function () {
      return P;
    }, J);
  };
})(PS);

(function (a) {
  var b = function () {
    function a() {
      this.last = this.head = null;
      this.size = 0;
    }

    function b(a, c) {
      this.queue = a;
      this.value = c;
      this.prev = this.next = null;
    }

    function h(c) {
      this.draining = !1;
      this.error = null;
      this.value = c;
      this.takes = new a();
      this.reads = new a();
      this.puts = new a();
    }

    function c(a) {
      try {
        a();
      } catch (m) {
        setTimeout(function () {
          throw m;
        }, 0);
      }
    }

    function f(a) {
      switch (a.size) {
        case 0:
          return null;

        case 1:
          var c = a.head;
          a.head = null;
          break;

        case 2:
          c = a.last;
          a.head.next = null;
          a.last = null;
          break;

        default:
          c = a.last, a.last = c.prev, a.last.next = null;
      }

      c.prev = null;
      c.queue = null;
      a.size--;
      return c.value;
    }

    function d(a) {
      switch (a.size) {
        case 0:
          return null;

        case 1:
          var c = a.head;
          a.head = null;
          break;

        case 2:
          c = a.head;
          a.last.prev = null;
          a.head = a.last;
          a.last = null;
          break;

        default:
          c = a.head, a.head = c.next, a.head.prev = null;
      }

      c.next = null;
      c.queue = null;
      a.size--;
      return c.value;
    }

    var l = {};
    h.EMPTY = l;

    h.putLast = function (a, c) {
      c = new b(a, c);

      switch (a.size) {
        case 0:
          a.head = c;
          break;

        case 1:
          c.prev = a.head;
          a.head.next = c;
          a.last = c;
          break;

        default:
          c.prev = a.last, a.last.next = c, a.last = c;
      }

      a.size++;
      return c;
    };

    h.takeLast = f;
    h.takeHead = d;

    h.deleteCell = function (a) {
      null !== a.queue && (a.queue.last === a ? f(a.queue) : a.queue.head === a ? d(a.queue) : (a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.queue.size--, a.queue = null, a.value = null, a.next = null, a.prev = null));
    };

    h.drainVar = function (a, b) {
      if (!b.draining) {
        var e = b.puts,
            f = b.takes,
            h = b.reads,
            g,
            k;

        for (b.draining = !0;;) {
          var m = g = null;
          var x = b.value;
          var p = h.size;

          if (null !== b.error) {
            for (x = a.left(b.error); g = d(e);) {
              c(g.cb(x));
            }

            for (; m = d(h);) {
              c(m(x));
            }

            for (; k = d(f);) {
              c(k(x));
            }

            break;
          }

          x === l && (g = d(e)) && (b.value = x = g.value);

          if (x !== l) {
            for (k = d(f); p-- && (m = d(h));) {
              c(m(a.right(x)));
            }

            null !== k && (b.value = l, c(k(a.right(x))));
          }

          null !== g && c(g.cb(a.right(void 0)));
          if (b.value === l && 0 === e.size || b.value !== l && 0 === f.size) break;
        }

        b.draining = !1;
      }
    };

    return h;
  }();

  a.empty = function () {
    return new b(b.EMPTY);
  };

  a._takeVar = function (a, g, h) {
    return function () {
      var c = b.putLast(g.takes, h);
      b.drainVar(a, g);
      return function () {
        b.deleteCell(c);
      };
    };
  };

  a._tryPutVar = function (a, g, h) {
    return function () {
      return h.value === b.EMPTY && null === h.error ? (h.value = g, b.drainVar(a, h), !0) : !1;
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var b = a["Effect.AVar"],
      e = a["Effect.AVar"],
      g = a["Data.Either"];
  a = a["Data.Maybe"];

  var h = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      c = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      f = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      d = {
    left: g.Left.create,
    right: g.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: h.create,
    filled: c.create,
    empty: f.value
  };

  b.take = function (a) {
    return function (c) {
      return e._takeVar(d, a, c);
    };
  };

  b.tryPut = function (a) {
    return function (c) {
      return e._tryPutVar(d, a, c);
    };
  };

  b.empty = e.empty;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var b = a["Effect.AVar"],
      e = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (a) {
    return e.makeAff(function (h) {
      return function () {
        var c = b.take(a)(h)();
        return e.effectCanceler(c);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var b = a["Effect.Aff.Class"],
      e = a["Control.Category"],
      g = a["Effect.Aff"];
  a = new function (a, c) {
    this.MonadEffect0 = a;
    this.liftAff = c;
  }(function () {
    return g.monadEffectAff;
  }, e.identity(e.categoryFn));

  b.liftAff = function (a) {
    return a.liftAff;
  };

  b.monadAffAff = a;
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var b = a["Concur.Core"],
      e = a["Concur.Core.Types"],
      g = a["Control.Alt"],
      h = a["Control.Applicative"],
      c = a["Control.Monad.Free"],
      f = a["Control.Parallel.Class"],
      d = a["Data.Either"],
      l = a["Data.Functor"],
      k = a.Effect,
      m = a["Effect.AVar"],
      r = a["Effect.Aff"],
      q = a["Effect.Aff.AVar"],
      t = a["Effect.Aff.Class"],
      v = function v(a) {
    return function (b) {
      var n = e.resume(e.functorWidgetStep)(b);
      if (n instanceof d.Left) return h.pure(c.freeApplicative)(n.value0);
      if (n instanceof d.Right) return c.wrap(function () {
        var b = n.value0();
        if (b instanceof d.Left) return new d.Left(b.value0);

        if (b instanceof d.Right) {
          var e = m.empty(),
              z = f.sequential(r.parallelAff)(g.alt(r.altParAff)(f.parallel(r.parallelAff)(t.liftAff(t.monadAffAff)(q.take(e))))(f.parallel(r.parallelAff)(l.map(r.functorAff)(v(a))(b.value0.cont))));
          return new d.Right({
            view: a(function (a) {
              return l["void"](k.functorEffect)(m.tryPut(h.pure(c.freeApplicative)(a))(e));
            })(b.value0.view),
            cont: z
          });
        }

        throw Error("Failed pattern match at Concur.Core (line 54, column 5 - line 64, column 23): " + [b.constructor.name]);
      });
      throw Error("Failed pattern match at Concur.Core (line 50, column 27 - line 64, column 23): " + [n.constructor.name]);
    };
  };

  b.mkLeafWidget = function (a) {
    return e.Widget(c.wrap(function () {
      var b = m.empty(),
          e = a(function (a) {
        return l["void"](k.functorEffect)(m.tryPut(h.pure(c.freeApplicative)(a))(b));
      }),
          f = t.liftAff(t.monadAffAff)(q.take(b));
      return new d.Right({
        view: e,
        cont: f
      });
    }));
  };

  b.wrapViewEvent = function (a) {
    return function (c) {
      return v(a)(c);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var b = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (a) {
    this.liftWidget = a;
  }(a.identity(a.categoryFn));

  b.liftWidget = function (a) {
    return a.liftWidget;
  };

  b.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var b = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var e = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      g = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }();

  a = new a.Functor(function (a) {
    return function (c) {
      if (c instanceof e) return new e(c.value0);
      if (c instanceof g) return new g(function (b) {
        return c.value0(function (c) {
          return b(a(c));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [a.constructor.name, c.constructor.name]);
    };
  });
  b.PrimProp = e;
  b.Handler = g;

  b.mkProp = function (a) {
    return function (c) {
      if (c instanceof e) return c.value0;
      if (c instanceof g) return c.value0(a);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [a.constructor.name, c.constructor.name]);
    };
  };

  b.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var b = a["Concur.Core.DOM"],
      e = a["Concur.Core"],
      g = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      c = a["Control.MultiAlternative"],
      f = a["Control.ShiftMap"],
      d = a["Data.Functor"],
      l = function l(a) {
    return function (c) {
      return function (b) {
        return function (g) {
          return f.shiftMap(a)(function (a) {
            return function (f) {
              return e.wrapViewEvent(function (e) {
                return function (f) {
                  return b(d.map(c)(function () {
                    var c = h.mkProp(e),
                        b = d.map(h.functorProps)(a);
                    return function (a) {
                      return c(b(a));
                    };
                  }())(g))(f);
                };
              })(f);
            };
          });
        };
      };
    };
  };

  b.el = l;

  b.elLeaf = function (a) {
    return function (c) {
      return function (b) {
        return function (f) {
          return g.liftWidget(a)(e.mkLeafWidget(function (a) {
            return b(d.map(c)(h.mkProp(a))(f));
          }));
        };
      };
    };
  };

  b["el'"] = function (a) {
    return function (b) {
      return function (d) {
        return function (e) {
          return function (f) {
            var h = l(a)(d)(e)(f),
                g = c.orr(b);
            return function (a) {
              return h(g(a));
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
      e = a["Concur.Core.Types"],
      g = a["Control.Applicative"],
      h = a["Control.Monad.Free"],
      c = a["Data.Either"],
      f = a["Data.Functor"],
      d = a["Data.Monoid"],
      l = a["Data.Tuple"],
      k = a.Effect,
      m = a["Effect.Aff"],
      r = function r(a) {
    return function (b) {
      var f = h.resume(e.functorWidgetStep)(e.unWidget(b));
      if (f instanceof c.Right) return g.pure(k.applicativeEffect)(new l.Tuple(b, d.mempty(a)));
      if (f instanceof c.Left) return function () {
        var b = f.value0();
        if (b instanceof c.Left) return r(a)(b.value0)();
        if (b instanceof c.Right) return new l.Tuple(h.wrap(g.pure(k.applicativeEffect)(new c.Right(b.value0))), b.value0.view);
        throw Error("Failed pattern match at Concur.Core.Discharge (line 49, column 5 - line 51, column 86): " + [b.constructor.name]);
      };
      throw Error("Failed pattern match at Concur.Core.Discharge (line 45, column 28 - line 51, column 86): " + [f.constructor.name]);
    };
  },
      q = function q(a) {
    return function (b) {
      return function (l) {
        var n = h.resume(e.functorWidgetStep)(l);
        if (n instanceof c.Right) return g.pure(k.applicativeEffect)(d.mempty(a));
        if (n instanceof c.Left) return function () {
          var d = n.value0();
          if (d instanceof c.Left) return q(a)(b)(d.value0)();
          if (d instanceof c.Right) return m.runAff_(function () {
            var a = f.map(c.functorEither)(e.Widget);
            return function (c) {
              return b(a(c));
            };
          }())(d.value0.cont)(), d.value0.view;
          throw Error("Failed pattern match at Concur.Core.Discharge (line 32, column 5 - line 36, column 21): " + [d.constructor.name]);
        };
        throw Error("Failed pattern match at Concur.Core.Discharge (line 28, column 32 - line 36, column 21): " + [n.constructor.name]);
      };
    };
  };

  b.discharge = q;
  b.dischargePartialEffect = r;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (a, e) {
    this.Extend0 = a;
    this.extract = e;
  };

  a.extract = function (a) {
    return a.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (a, e) {
    this.Functor0 = a;
    this.extend = e;
  };
})(PS);

(function (a) {
  a.defer = function (a) {
    var b = null;
    return function () {
      if (void 0 === a) return b;
      b = a();
      a = void 0;
      return b;
    };
  };

  a.force = function (a) {
    return a();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var b = a["Data.Lazy"],
      e = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (a) {
    return function (b) {
      return e.defer(function (c) {
        return a(e.force(b));
      });
    };
  });
  b.functorLazy = a;
  b.defer = e.defer;
  b.force = e.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var b = a["Control.Cofree"],
      e = a["Concur.Core.Types"],
      g = a["Control.Alt"],
      h = a["Control.Applicative"],
      c = a["Control.Apply"],
      f = a["Control.Bind"],
      d = a["Control.Comonad"],
      l = a["Control.Extend"],
      k = a["Control.Monad"],
      m = a["Control.Plus"],
      r = a["Control.ShiftMap"],
      q = a["Data.Functor"],
      t = a["Data.Lazy"],
      v = a["Data.Tuple"],
      n = function n(a) {
    return v.snd(t.force(a));
  },
      y = function y(a) {
    return function (c) {
      return t.defer(function (b) {
        return new v.Tuple(a, c);
      });
    };
  },
      x = function x(a) {
    return v.fst(t.force(a));
  },
      p = function p(a) {
    return new q.Functor(function (c) {
      var b = function b(d) {
        return q.map(t.functorLazy)(function (d) {
          return new v.Tuple(c(d.value0), q.map(a)(b)(d.value1));
        })(d);
      };

      return b;
    });
  },
      u = function u(a) {
    return new l.Extend(function () {
      return p(a);
    }, function (c) {
      var b = function b(d) {
        return q.map(t.functorLazy)(function (f) {
          return new v.Tuple(c(d), q.map(a)(b)(f.value1));
        })(d);
      };

      return b;
    });
  },
      z = function z(a) {
    return new k.Monad(function () {
      return B(a);
    }, function () {
      return C(a);
    });
  },
      C = function C(a) {
    return new f.Bind(function () {
      return N(a);
    }, function (c) {
      return function (b) {
        var d = function d(c) {
          return function (b) {
            var e = q.map(a.Plus1().Alt0().Functor0())(d(c))(n(b)),
                h = q.map(a.Plus1().Alt0().Functor0())(f)(n(c));
            return y(x(b))(g.alt(a.Plus1().Alt0())(h)(e));
          };
        },
            f = function f(a) {
          return d(a)(b(x(a)));
        };

        return f(c);
      };
    });
  },
      N = function N(a) {
    return new c.Apply(function () {
      return p(a.Plus1().Alt0().Functor0());
    }, k.ap(z(a)));
  },
      B = function B(a) {
    return new h.Applicative(function () {
      return N(a);
    }, function (c) {
      return y(c)(m.empty(a.Plus1()));
    });
  };

  b.mkCofree = y;
  b.tail = n;

  b.comonadCofree = function (a) {
    return new d.Comonad(function () {
      return u(a);
    }, x);
  };

  b.applicativeCofree = B;
  b.bindCofree = C;

  b.shiftMapCofree = function (a) {
    return new r.ShiftMap(function (c) {
      return function (b) {
        return t.defer(function (d) {
          d = t.force(b);
          return new v.Tuple(d.value0, c(h.pure(B(e.widgetAlternative(a))))(d.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var b = a["Concur.Core.FRP"],
      e = a["Concur.Core.Types"],
      g = a["Control.Applicative"],
      h = a["Control.Bind"],
      c = a["Control.Cofree"],
      f = a["Control.Comonad"],
      d = a["Data.Unit"],
      l = c.tail,
      k = c.mkCofree,
      m = function m(a) {
    return function (b) {
      return function (d) {
        var n = d(b);
        return k(f.extract(c.comonadCofree(e.widgetFunctor))(n))(h.bind(e.widgetBind)(l(n))(function (b) {
          return g.pure(e.widgetApplicative)(m(a)(f.extract(c.comonadCofree(e.widgetFunctor))(b))(d));
        }));
      };
    };
  },
      r = function r(a) {
    return h.bind(e.widgetBind)(l(a))(r);
  };

  b.step = k;

  b.display = function (a) {
    return k(d.unit)(a);
  };

  b.loopS = m;
  b.dyn = r;
})(PS);

(function (a) {
  a.log = function (a) {
    return function () {
      console.log(a);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});

(function (a) {
  a["Effect.Console"] = a["Effect.Console"] || {};
  var b = a["Effect.Console"],
      e = a["Effect.Console"],
      g = a["Data.Show"];

  b.logShow = function (a) {
    return function (c) {
      return e.log(g.show(a)(c));
    };
  };

  b.log = e.log;
})(PS);

(function (a) {
  function b(a) {
    return function (c) {
      return function (b) {
        return e.createElement.apply(e, [a, c].concat(b));
      };
    };
  }

  var e = require("react"),
      g = function (a) {
    function c(a, c, b) {
      switch (c) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          a[c] = b;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          a[c] = function (a, c) {
            return b(a)(c)();
          };

          break;

        case "componentDidUpdate":
          a[c] = function (a, c, d) {
            return b(a)(c)(d)();
          };

          break;

        case "unsafeComponentWillMount":
          a.UNSAFE_componentWillMount = b;
          break;

        case "unsafeComponentWillReceiveProps":
          a.UNSAFE_componentWillReceiveProps = function (a) {
            return b(a)();
          };

          break;

        case "unsafeComponentWillUpdate":
          a.UNSAFE_componentWillUpdate = function (a, c) {
            return b(a)(c)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + c);
      }
    }

    return function (b) {
      return function (d) {
        var e = function e(b) {
          a.call(this, b);
          b = d(this)();

          for (var e in b) {
            c(this, e, b[e]);
          }
        };

        e.displayName = b;
        e.prototype = Object.create(a.prototype);
        return e.prototype.constructor = e;
      };
    };
  }(e.Component);

  a.componentImpl = g;
  a.fragment = e.Fragment;

  a.setStateImpl = function (a) {
    return function (c) {
      return function () {
        a.setState(c);
      };
    };
  };

  a.getState = function (a) {
    return function () {
      if (!a.state) throw Error("[purescript-react] Cannot get state within constructor");
      return a.state;
    };
  };

  a.createElementImpl = b;
  a.createElementTagName = b;

  a.createLeafElementImpl = function (a) {
    return function (c) {
      return e.createElement(a, c);
    };
  };

  a.createElementTagNameDynamic = function (a) {
    return function (c) {
      return function (b) {
        return e.createElement(a, c, b);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var b = a.React,
      e = a.React;
  a = e.setStateImpl;
  var g = new function (a) {
    this.toElement = a;
  }((0, e.createElementImpl)(e.fragment)({}));

  b.component = function (a) {
    return e.componentImpl;
  };

  b.writeState = a;

  b.createLeafElement = function (a) {
    return e.createLeafElementImpl;
  };

  b.toElement = function (a) {
    return a.toElement;
  };

  b.isReactElementArray = g;
  b.getState = e.getState;
  b.createElementTagName = e.createElementTagName;
  b.createElementTagNameDynamic = e.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var b = a["Concur.Core.Discharge"],
      e = a["Data.Either"],
      g = a["Data.Functor"],
      h = a["Data.Monoid"],
      c = a["Data.Show"],
      f = a["Data.Unit"],
      d = a.Effect,
      l = a["Effect.Console"],
      k = a["Effect.Exception"],
      m = a.React,
      r = function r(a) {
    var q = function q(a) {
      return m.toElement(m.isReactElementArray)(a.view);
    },
        r = function r(a) {
      return function (n) {
        if (n instanceof e.Right) return function () {
          var c = b.discharge(h.monoidArray)(r(a))(n.value0)();
          return g["void"](d.functorEffect)(m.writeState(a)({
            view: c
          }))();
        };
        if (n instanceof e.Left) return function () {
          l.log("FAILED! " + c.show(k.showError)(n.value0))();
          return f.unit;
        };
        throw Error("Failed pattern match at Concur.React (line 31, column 3 - line 33, column 50): " + [a.constructor.name, n.constructor.name]);
      };
    };

    return m.component()("Concur")(function (c) {
      return function () {
        var f = b.dischargePartialEffect(h.monoidArray)(a)();
        return {
          state: {
            view: f.value1
          },
          render: g.map(d.functorEffect)(q)(m.getState(c)),
          componentDidMount: r(c)(new e.Right(f.value0))
        };
      };
    });
  };

  a["Concur.React"].renderComponent = function (a) {
    return m.createLeafElement()(r(a))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (a) {
    return function (b) {
      var e = {};
      e[a] = b;
      return e;
    };
  };

  a.unsafeUnfoldProps = function (a) {
    return function (b) {
      var e = {},
          h = {};
      h[a] = e;

      for (var c in b) {
        b.hasOwnProperty(c) && (e[c] = b[c]);
      }

      return h;
    };
  };

  a.unsafeFromPropsArray = function (a) {
    for (var b = {}, g = 0, h = a.length; g < h; g++) {
      var c = a[g],
          f;

      for (f in c) {
        c.hasOwnProperty(f) && (b[f] = c[f]);
      }
    }

    return b;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (a) {
    return function (b) {
      return a(b)();
    };
  };
})(PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {});

(function (a) {
  a["Effect.Uncurried"] = a["Effect.Uncurried"] || {};
  a["Effect.Uncurried"].mkEffectFn1 = a["Effect.Uncurried"].mkEffectFn1;
})(PS);

(function (a) {
  a["React.DOM.Props"] = a["React.DOM.Props"] || {};
  var b = a["React.DOM.Props"],
      e = a["React.DOM.Props"],
      g = a["Effect.Uncurried"];
  a = e.unsafeMkProps("value");
  var h = e.unsafeMkProps("target"),
      c = e.unsafeUnfoldProps("style"),
      f = e.unsafeMkProps("href"),
      d = e.unsafeMkProps("disabled"),
      l = e.unsafeMkProps("defaultValue"),
      k = e.unsafeMkProps("className"),
      m = e.unsafeMkProps("checked"),
      r = e.unsafeMkProps("type");
  b.style = c;
  b.checked = m;
  b.className = k;
  b.defaultValue = l;
  b.disabled = d;
  b.href = f;
  b.target = h;
  b._type = r;
  b.value = a;

  b.onChange = function (a) {
    return e.unsafeMkProps("onChange")(g.mkEffectFn1(a));
  };

  b.onClick = function (a) {
    return e.unsafeMkProps("onClick")(g.mkEffectFn1(a));
  };

  b.unsafeFromPropsArray = e.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var b = a["React.DOM"],
      e = a.React,
      g = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var h = function h(a) {
    return function (c) {
      return function (b) {
        if (a) {
          if (a) var d = e.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [a.constructor.name]);
        } else d = e.createElementTagName;
        return d(c)(g.unsafeFromPropsArray(b));
      };
    };
  },
      c = h(!1)("option"),
      f = h(!1)("select"),
      d = h(!1)("span"),
      l = h(!1)("ul"),
      k = h(!1)("li"),
      m = h(!1)("h3"),
      r = h(!1)("h2"),
      q = h(!1)("h1"),
      t = h(!1)("div"),
      v = h(!1)("cite"),
      n = h(!1)("button"),
      y = h(!1)("a");

  b.text = a;
  b.a = y;

  b.br = function (a) {
    return h(!1)("br")(a)([]);
  };

  b.button = n;
  b.cite = v;
  b.div = t;
  b.h1 = q;
  b.h2 = r;
  b.h3 = m;

  b.input = function (a) {
    return h(!1)("input")(a)([]);
  };

  b.li = k;
  b.option = c;
  b.select = f;
  b.span = d;
  b.ul = l;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var b = a["Concur.React.DOM"],
      e = a["Concur.Core.DOM"],
      g = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      c = a["Data.Functor"],
      f = a["React.DOM"],
      d = function d(a) {
    return function (c) {
      return function (b) {
        return [a(c)(b)];
      };
    };
  },
      l = function l(a) {
    return function (b) {
      return e.elLeaf(a)(c.functorArray)(function (a) {
        return [b(a)];
      });
    };
  },
      k = function k(a) {
    return function (b) {
      return function (f) {
        return e["el'"](a)(b)(c.functorArray)(d(f));
      };
    };
  },
      m = function m(a) {
    return function (c) {
      return k(c)(a)(f.h1);
    };
  },
      r = function r(a) {
    return function (c) {
      return k(c)(a)(f.h2);
    };
  },
      q = function q(a) {
    return function (c) {
      return k(c)(a)(f.h3);
    };
  },
      t = function t(a) {
    return function (c) {
      return k(c)(a)(f.li);
    };
  },
      v = function v(a) {
    return function (c) {
      return k(c)(a)(f.span);
    };
  },
      n = function n(a) {
    return function (b) {
      return e.el(a)(c.functorArray)(d(b));
    };
  },
      y = function y(a) {
    return function (c) {
      return k(c)(a)(f.div);
    };
  },
      x = function x(a) {
    return function (c) {
      return k(c)(a)(f.cite);
    };
  };

  b.text = function (a) {
    return function (c) {
      return g.liftWidget(a)(h.display([f.text(c)]));
    };
  };

  b.a = function (a) {
    return function (c) {
      return k(c)(a)(f.a);
    };
  };

  b["br'"] = function (a) {
    return l(a)(f.br)([]);
  };

  b.button = function (a) {
    return function (c) {
      return k(c)(a)(f.button);
    };
  };

  b["cite'"] = function (a) {
    return function (c) {
      return x(a)(c)([]);
    };
  };

  b.div_ = function (a) {
    return n(a)(f.div);
  };

  b.div = y;

  b["div'"] = function (a) {
    return function (c) {
      return y(a)(c)([]);
    };
  };

  b["h1'"] = function (a) {
    return function (c) {
      return m(a)(c)([]);
    };
  };

  b["h2'"] = function (a) {
    return function (c) {
      return r(a)(c)([]);
    };
  };

  b["h3'"] = function (a) {
    return function (c) {
      return q(a)(c)([]);
    };
  };

  b.input = function (a) {
    return l(a)(f.input);
  };

  b.li_ = function (a) {
    return n(a)(f.li);
  };

  b["li'"] = function (a) {
    return function (c) {
      return t(a)(c)([]);
    };
  };

  b.option = function (a) {
    return function (c) {
      return k(c)(a)(f.option);
    };
  };

  b.select = function (a) {
    return function (c) {
      return k(c)(a)(f.select);
    };
  };

  b.span = v;

  b["span'"] = function (a) {
    return function (c) {
      return v(a)(c)([]);
    };
  };

  b.ul = function (a) {
    return function (c) {
      return k(c)(a)(f.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var b = a["Concur.React.Props"],
      e = a["Concur.Core.Props"],
      g = a["Data.Array"],
      h = a["Data.Foldable"],
      c = a["Data.Maybe"],
      f = a["Data.Monoid"],
      d = a["React.DOM.Props"];
  a = new e.Handler(d.onClick);

  var l = new e.Handler(d.onChange),
      k = function k(a) {
    return e.PrimProp.create(d.className(a));
  },
      m = function () {
    var a = h.intercalate(h.foldableArray)(f.monoidString)(" "),
        b = g.concatMap(c.maybe([])(function (a) {
      return [a];
    }));
    return function (c) {
      return k(a(b(c)));
    };
  }();

  b.classList = m;

  b.unsafeTargetValue = function (a) {
    return a.target.value;
  };

  b.style = function (a) {
    return e.PrimProp.create(d.style(a));
  };

  b.checked = function (a) {
    return e.PrimProp.create(d.checked(a));
  };

  b.className = k;

  b.defaultValue = function (a) {
    return e.PrimProp.create(d.defaultValue(a));
  };

  b.disabled = function (a) {
    return e.PrimProp.create(d.disabled(a));
  };

  b.href = function (a) {
    return e.PrimProp.create(d.href(a));
  };

  b._type = function (a) {
    return e.PrimProp.create(d._type(a));
  };

  b.value = function (a) {
    return e.PrimProp.create(d.value(a));
  };

  b.onChange = l;
  b.onClick = a;
})(PS);

(function (a) {
  var b = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (a, g) {
    return b.render(a, g);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.nullable = function (a, e, g) {
    return null == a ? e : g(a);
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var b = a["Data.Nullable"],
      e = a["Data.Maybe"];

  a["Data.Nullable"].toMaybe = function (a) {
    return b.nullable(a, e.Nothing.value, e.Just.create);
  };
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var b = a.ReactDOM,
      e = a["Data.Functor"],
      g = a["Data.Nullable"],
      h = a.Effect;

  a.ReactDOM.render = function (a) {
    return function (c) {
      return e.map(h.functorEffect)(g.toMaybe)(function () {
        return b.renderImpl(a, c);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (a) {
    return function (b) {
      return function () {
        return b.getElementById(a);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var b = a["Web.DOM.NonElementParentNode"],
      e = a["Data.Functor"],
      g = a["Data.Nullable"],
      h = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (a) {
    var c = e.map(h.functorEffect)(g.toMaybe),
        d = b._getElementById(a);

    return function (a) {
      return c(d(a));
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
  a["Web.HTML.HTMLDocument"].toNonElementParentNode = a["Unsafe.Coerce"].unsafeCoerce;
})(PS);

(function (a) {
  a.document = function (a) {
    return function () {
      return a.document;
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
      e = a["Data.Functor"],
      g = a["Data.Maybe"],
      h = a["Data.Unit"],
      c = a.Effect,
      f = a.ReactDOM,
      d = a["Web.DOM.NonElementParentNode"],
      l = a["Web.HTML"],
      k = a["Web.HTML.HTMLDocument"],
      m = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (a) {
    return function (q) {
      return function () {
        var r = l.window();
        r = m.document(r)();
        r = k.toNonElementParentNode(r);
        r = d.getElementById(a)(r)();
        if (r instanceof g.Nothing) return h.unit;
        if (r instanceof g.Just) return e["void"](c.functorEffect)(f.render(b.renderComponent(q))(r.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [r.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (a) {
    return function (b) {
      return a(b).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var b = a["Control.Monad.State.Class"],
      e = a["Data.Tuple"],
      g = a["Data.Unit"];

  b.MonadState = function (a, c) {
    this.Monad0 = a;
    this.state = c;
  };

  b.get = function (a) {
    return (0, a.state)(function (a) {
      return new e.Tuple(a, a);
    });
  };

  b.put = function (a) {
    return function (c) {
      return (0, a.state)(function (a) {
        return new e.Tuple(g.unit, c);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var b = a["Control.Monad.State.Trans"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      h = a["Control.Bind"],
      c = a["Control.Monad"],
      f = a["Control.Monad.State.Class"],
      d = a["Data.Functor"],
      l = a["Data.Tuple"],
      k = function k(a) {
    return new d.Functor(function (c) {
      return function (b) {
        return function (e) {
          return d.map(a)(function (a) {
            return new l.Tuple(c(a.value0), a.value1);
          })(b(e));
        };
      };
    });
  },
      m = function m(a) {
    return new c.Monad(function () {
      return t(a);
    }, function () {
      return r(a);
    });
  },
      r = function r(a) {
    return new h.Bind(function () {
      return q(a);
    }, function (c) {
      return function (b) {
        return function (d) {
          return h.bind(a.Bind1())(c(d))(function (a) {
            return b(a.value0)(a.value1);
          });
        };
      };
    });
  },
      q = function q(a) {
    return new g.Apply(function () {
      return k(a.Bind1().Apply0().Functor0());
    }, c.ap(m(a)));
  },
      t = function t(a) {
    return new e.Applicative(function () {
      return q(a);
    }, function (c) {
      return function (b) {
        return e.pure(a.Applicative0())(new l.Tuple(c, b));
      };
    });
  };

  b.bindStateT = r;

  b.monadStateStateT = function (a) {
    return new f.MonadState(function () {
      return m(a);
    }, function (c) {
      return function () {
        var b = e.pure(a.Applicative0());
        return function (a) {
          return b(c(a));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a.toCharCode = function (a) {
    return a.charCodeAt(0);
  };

  a.fromCharCode = function (a) {
    return String.fromCharCode(a);
  };
})(PS["Data.Enum"] = PS["Data.Enum"] || {});

(function (a) {
  a.unfoldr1ArrayImpl = function (a) {
    return function (b) {
      return function (e) {
        return function (h) {
          return function (c) {
            return function (f) {
              for (var d = [];;) {
                f = c(f);
                d.push(e(f));
                f = h(f);
                if (a(f)) return d;
                f = b(f);
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
      e = a["Data.Boolean"],
      g = a["Data.Maybe"],
      h = a["Data.Tuple"];
  a = new function (a) {
    this.unfoldr1 = a;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(g.isNothing)(g.fromJust())(h.fst)(h.snd));

  var c = function c(a) {
    return function (c) {
      return function (b) {
        return (0, a.unfoldr1)(function (a) {
          if (0 >= a) return new h.Tuple(b, g.Nothing.value);
          if (e.otherwise) return new h.Tuple(b, new g.Just(a - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [a.constructor.name]);
        })(c - 1 | 0);
      };
    };
  };

  b.unfoldr1 = function (a) {
    return a.unfoldr1;
  };

  b.singleton = function (a) {
    return c(a)(1);
  };

  b.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Enum"] = a["Data.Enum"] || {};
  var b = a["Data.Enum"],
      e = a["Data.Enum"],
      g = a["Control.Apply"],
      h = a["Data.Bounded"],
      c = a["Data.Functor"],
      f = a["Data.Maybe"],
      d = a["Data.Newtype"],
      l = a["Data.Ord"],
      k = a["Data.Tuple"],
      m = a["Data.Unfoldable1"];

  a = function a(_a9) {
    return _a9;
  };

  var r = function r(a) {
    this.Bounded0 = a;
  },
      q = function q(a, c, b) {
    this.Ord0 = a;
    this.pred = c;
    this.succ = b;
  },
      t = function t(a, c, b, d, e) {
    this.Bounded0 = a;
    this.Enum1 = c;
    this.cardinality = b;
    this.fromEnum = d;
    this.toEnum = e;
  },
      v = new r(function () {
    return h.boundedBoolean;
  }),
      n = new d.Newtype(function (a) {
    return a;
  }, a),
      y = function y(a) {
    return new q(function () {
      return f.ordMaybe(a.Enum1().Ord0());
    }, function (c) {
      if (c instanceof f.Nothing) return f.Nothing.value;
      if (c instanceof f.Just) return new f.Just((0, a.Enum1().pred)(c.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [c.constructor.name]);
    }, function (b) {
      if (b instanceof f.Nothing) return new f.Just(new f.Just(h.bottom(a.Bounded0())));
      if (b instanceof f.Just) return c.map(f.functorMaybe)(f.Just.create)((0, a.Enum1().succ)(b.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [b.constructor.name]);
    });
  },
      x = new q(function () {
    return l.ordBoolean;
  }, function (a) {
    return a ? new f.Just(!1) : f.Nothing.value;
  }, function (a) {
    return a ? f.Nothing.value : new f.Just(!0);
  }),
      p = function p(a) {
    return a >= h.bottom(h.boundedInt) && a <= h.top(h.boundedInt) ? new f.Just(e.fromCharCode(a)) : f.Nothing.value;
  },
      u = new q(function () {
    return l.ordChar;
  }, function (a) {
    return function (c) {
      return function (b) {
        return a(c(b) - 1 | 0);
      };
    };
  }(p)(e.toCharCode), function (a) {
    return function (c) {
      return function (b) {
        return a(c(b) + 1 | 0);
      };
    };
  }(p)(e.toCharCode));

  p = new t(function () {
    return h.boundedChar;
  }, function () {
    return u;
  }, e.toCharCode(h.top(h.boundedChar)) - e.toCharCode(h.bottom(h.boundedChar)) | 0, e.toCharCode, p);
  var z = new t(function () {
    return h.boundedBoolean;
  }, function () {
    return x;
  }, 2, function (a) {
    if (!a) return 0;
    if (a) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [a.constructor.name]);
  }, function (a) {
    return 0 === a ? new f.Just(!1) : 1 === a ? new f.Just(!0) : f.Nothing.value;
  });
  b.Enum = q;
  b.BoundedEnum = t;

  b.toEnum = function (a) {
    return a.toEnum;
  };

  b.fromEnum = function (a) {
    return a.fromEnum;
  };

  b.toEnumWithDefaults = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          var e = (0, a.toEnum)(d);
          if (e instanceof f.Just) return e.value0;
          if (e instanceof f.Nothing) return d < (0, a.fromEnum)(h.bottom(a.Bounded0())) ? c : b;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [e.constructor.name]);
        };
      };
    };
  };

  b.Cardinality = a;

  b.upFromIncluding = function (a) {
    return function (c) {
      return m.unfoldr1(c)(g.apply(g.applyFn)(k.Tuple.create)(a.succ));
    };
  };

  b.SmallBounded = r;
  b.boundedEnumBoolean = z;
  b.boundedEnumChar = p;
  b.newtypeCardinality = n;

  b.boundedEnumMaybe = function (a) {
    return function (a) {
      return new t(function () {
        return f.boundedMaybe(a.Bounded0());
      }, function () {
        return y(a);
      }, d.unwrap(n)(a.cardinality) + 1 | 0, function (c) {
        if (c instanceof f.Nothing) return 0;
        if (c instanceof f.Just) return (0, a.fromEnum)(c.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [c.constructor.name]);
      }, function (b) {
        return 0 === b ? f.Nothing.value : c.map(f.functorMaybe)(f.Just.create)((0, a.toEnum)(b - 1 | 0));
      });
    };
  };

  b.smallBoundedBoolean = v;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var b = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  b.fromCharCode = a;
})(PS);

(function (a) {
  a.intSub = function (a) {
    return function (b) {
      return a - b | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (a) {
    return function (b) {
      return a + b | 0;
    };
  };

  a.intMul = function (a) {
    return function (b) {
      return a * b | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var b = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (a, b, h, c) {
    this.add = a;
    this.mul = b;
    this.one = h;
    this.zero = c;
  }(a.intAdd, a.intMul, 1, 0);
  b.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var b = a["Data.Ring"],
      e = a["Data.Semiring"];
  a = new function (a, b) {
    this.Semiring0 = a;
    this.sub = b;
  }(function () {
    return e.semiringInt;
  }, a["Data.Ring"].intSub);
  b.ringInt = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var b = a["Data.CommutativeRing"],
      e = a["Data.Ring"];
  a = new function (a) {
    this.Ring0 = a;
  }(function () {
    return e.ringInt;
  });
  b.commutativeRingInt = a;
})(PS);

(function (a) {
  a["Data.Const"] = a["Data.Const"] || {};

  var b = a["Data.Const"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      h = a["Data.Functor"],
      c = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      d = function d(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, d);

  var l = new h.Functor(function (a) {
    return function (a) {
      return a;
    };
  }),
      k = function k(a) {
    return new g.Apply(function () {
      return l;
    }, function (c) {
      return function (b) {
        return f.append(a)(c)(b);
      };
    });
  };

  b.Const = d;
  b.newtypeConst = a;

  b.applicativeConst = function (a) {
    return new e.Applicative(function () {
      return k(a.Semigroup0());
    }, function (b) {
      return c.mempty(a);
    });
  };
})(PS);

(function (a) {
  a.intDegree = function (a) {
    return Math.min(Math.abs(a), 2147483647);
  };

  a.intDiv = function (a) {
    return function (b) {
      return 0 === b ? 0 : 0 < b ? Math.floor(a / b) : -Math.floor(a / -b);
    };
  };

  a.intMod = function (a) {
    return function (b) {
      if (0 === b) return 0;
      b = Math.abs(b);
      return (a % b + b) % b;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var b = a["Data.EuclideanRing"],
      e = a["Data.EuclideanRing"],
      g = a["Data.CommutativeRing"];
  a = new function (a, c, b, d) {
    this.CommutativeRing0 = a;
    this.degree = c;
    this.div = b;
    this.mod = d;
  }(function () {
    return g.commutativeRingInt;
  }, e.intDegree, e.intDiv, e.intMod);

  b.div = function (a) {
    return a.div;
  };

  b.mod = function (a) {
    return a.mod;
  };

  b.euclideanRingInt = a;
})(PS);

(function (a) {
  a.runFn2 = function (a) {
    return function (b) {
      return function (e) {
        return a(b, e);
      };
    };
  };

  a.runFn4 = function (a) {
    return function (b) {
      return function (e) {
        return function (h) {
          return function (c) {
            return a(b, e, h, c);
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
  a["Data.Generic.Rep"] = a["Data.Generic.Rep"] || {};
  a = a["Data.Generic.Rep"];

  var b = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      e = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      g = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.Generic = function (a, c) {
    this.from = a;
    this.to = c;
  };

  a.to = function (a) {
    return a.to;
  };

  a.from = function (a) {
    return a.from;
  };

  a.NoArguments = g;
  a.Inl = b;
  a.Inr = e;

  a.Constructor = function (a) {
    return a;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var b = a["Data.Generic.Rep.Bounded"],
      e = a["Data.Generic.Rep"],
      g = function g(a) {
    this["genericTop'"] = a;
  },
      h = function h(a) {
    this["genericBottom'"] = a;
  };

  a = new g(e.NoArguments.value);

  var c = function c(a) {
    return a["genericTop'"];
  },
      f = new h(e.NoArguments.value),
      d = function d(a) {
    return a["genericBottom'"];
  };

  b["genericBottom'"] = d;

  b.genericBottom = function (a) {
    return function (c) {
      return e.to(a)(d(c));
    };
  };

  b["genericTop'"] = c;

  b.genericTop = function (a) {
    return function (b) {
      return e.to(a)(c(b));
    };
  };

  b.genericBottomNoArguments = f;

  b.genericBottomSum = function (a) {
    return new h(new e.Inl(d(a)));
  };

  b.genericBottomConstructor = function (a) {
    return new h(d(a));
  };

  b.genericTopNoArguments = a;

  b.genericTopSum = function (a) {
    return new g(new e.Inr(c(a)));
  };

  b.genericTopConstructor = function (a) {
    return new g(c(a));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var b = a["Data.Generic.Rep.Enum"],
      e = a["Data.Boolean"],
      g = a["Data.Enum"],
      h = a["Data.Functor"],
      c = a["Data.Generic.Rep"],
      f = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Maybe"],
      l = a["Data.Newtype"],
      k = function k(a, c) {
    this["genericPred'"] = a;
    this["genericSucc'"] = c;
  },
      m = function m(a, c, b) {
    this["genericCardinality'"] = a;
    this["genericFromEnum'"] = c;
    this["genericToEnum'"] = b;
  },
      r = function r(a) {
    return a["genericToEnum'"];
  },
      q = function q(a) {
    return a["genericSucc'"];
  },
      t = function t(a) {
    return a["genericPred'"];
  },
      v = function v(a) {
    return a["genericFromEnum'"];
  };

  a = new k(function (a) {
    return d.Nothing.value;
  }, function (a) {
    return d.Nothing.value;
  });

  var n = function n(a) {
    return a["genericCardinality'"];
  },
      y = new m(1, function (a) {
    return 0;
  }, function (a) {
    return 0 === a ? new d.Just(c.NoArguments.value) : d.Nothing.value;
  });

  b.genericPred = function (a) {
    return function (b) {
      var e = h.map(d.functorMaybe)(c.to(a)),
          f = t(b),
          g = c.from(a);
      return function (a) {
        return e(f(g(a)));
      };
    };
  };

  b.genericSucc = function (a) {
    return function (b) {
      var e = h.map(d.functorMaybe)(c.to(a)),
          f = q(b),
          g = c.from(a);
      return function (a) {
        return e(f(g(a)));
      };
    };
  };

  b.genericCardinality = function (a) {
    return function (a) {
      return l.unwrap(g.newtypeCardinality)(n(a));
    };
  };

  b.genericToEnum = function (a) {
    return function (b) {
      var e = h.map(d.functorMaybe)(c.to(a)),
          f = r(b);
      return function (a) {
        return e(f(a));
      };
    };
  };

  b.genericFromEnum = function (a) {
    return function (b) {
      var d = v(b),
          e = c.from(a);
      return function (a) {
        return d(e(a));
      };
    };
  };

  b.genericEnumNoArguments = a;

  b.genericEnumConstructor = function (a) {
    return new k(function (b) {
      return h.map(d.functorMaybe)(c.Constructor)(t(a)(b));
    }, function (b) {
      return h.map(d.functorMaybe)(c.Constructor)(q(a)(b));
    });
  };

  b.genericEnumSum = function (a) {
    return function (b) {
      return function (e) {
        return function (g) {
          return new k(function (g) {
            if (g instanceof c.Inl) return h.map(d.functorMaybe)(c.Inl.create)(t(a)(g.value0));

            if (g instanceof c.Inr) {
              g = t(e)(g.value0);
              if (g instanceof d.Nothing) return new d.Just(new c.Inl(f["genericTop'"](b)));
              if (g instanceof d.Just) return new d.Just(new c.Inr(g.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [g.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [g.constructor.name]);
          }, function (b) {
            if (b instanceof c.Inl) {
              b = q(a)(b.value0);
              if (b instanceof d.Nothing) return new d.Just(new c.Inr(f["genericBottom'"](g)));
              if (b instanceof d.Just) return new d.Just(new c.Inl(b.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [b.constructor.name]);
            }

            if (b instanceof c.Inr) return h.map(d.functorMaybe)(c.Inr.create)(q(e)(b.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [b.constructor.name]);
          });
        };
      };
    };
  };

  b.genericBoundedEnumNoArguments = y;

  b.genericBoundedEnumConstructor = function (a) {
    return new m(l.unwrap(g.newtypeCardinality)(n(a)), function (c) {
      return v(a)(c);
    }, function (b) {
      return h.map(d.functorMaybe)(c.Constructor)(r(a)(b));
    });
  };

  b.genericBoundedEnumSum = function (a) {
    return function (b) {
      return new m(g.Cardinality(l.unwrap(g.newtypeCardinality)(n(a)) + l.unwrap(g.newtypeCardinality)(n(b)) | 0), function (d) {
        if (d instanceof c.Inl) return v(a)(d.value0);
        if (d instanceof c.Inr) return v(b)(d.value0) + l.unwrap(g.newtypeCardinality)(n(a)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [d.constructor.name]);
      }, function (f) {
        var g = n(a);
        if (0 <= f && f < g) f = h.map(d.functorMaybe)(c.Inl.create)(r(a)(f));else if (e.otherwise) f = h.map(d.functorMaybe)(c.Inr.create)(r(b)(f - g | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [g.constructor.name]);
        return f;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var b = a["Data.Generic.Rep.Eq"],
      e = a["Data.Generic.Rep"],
      g = function g(a) {
    this["genericEq'"] = a;
  };

  a = new g(function (a) {
    return function (a) {
      return !0;
    };
  });

  b.genericEq = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return (0, c["genericEq'"])(e.from(a)(b))(e.from(a)(d));
        };
      };
    };
  };

  b.genericEqNoArguments = a;

  b.genericEqSum = function (a) {
    return function (c) {
      return new g(function (b) {
        return function (d) {
          return b instanceof e.Inl && d instanceof e.Inl ? (0, a["genericEq'"])(b.value0)(d.value0) : b instanceof e.Inr && d instanceof e.Inr ? (0, c["genericEq'"])(b.value0)(d.value0) : !1;
        };
      });
    };
  };

  b.genericEqConstructor = function (a) {
    return new g(function (c) {
      return function (b) {
        return (0, a["genericEq'"])(c)(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var b = a["Data.Generic.Rep.Ord"],
      e = a["Data.Generic.Rep"],
      g = a["Data.Ordering"],
      h = function h(a) {
    this["genericCompare'"] = a;
  };

  a = new h(function (a) {
    return function (a) {
      return g.EQ.value;
    };
  });

  var c = function c(a) {
    return a["genericCompare'"];
  };

  b.genericCompare = function (a) {
    return function (b) {
      return function (d) {
        return function (f) {
          return c(b)(e.from(a)(d))(e.from(a)(f));
        };
      };
    };
  };

  b.genericOrdNoArguments = a;

  b.genericOrdSum = function (a) {
    return function (b) {
      return new h(function (d) {
        return function (f) {
          if (d instanceof e.Inl && f instanceof e.Inl) return c(a)(d.value0)(f.value0);
          if (d instanceof e.Inr && f instanceof e.Inr) return c(b)(d.value0)(f.value0);
          if (d instanceof e.Inl && f instanceof e.Inr) return g.LT.value;
          if (d instanceof e.Inr && f instanceof e.Inl) return g.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [d.constructor.name, f.constructor.name]);
        };
      });
    };
  };

  b.genericOrdConstructor = function (a) {
    return new h(function (b) {
      return function (d) {
        return c(a)(b)(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var b = a["Data.Generic.Rep.Show"],
      e = a["Data.Foldable"],
      g = a["Data.Generic.Rep"],
      h = a["Data.Monoid"],
      c = a["Data.Semigroup"],
      f = a["Data.Show"],
      d = a["Data.Symbol"],
      l = function l(a) {
    this.genericShowArgs = a;
  },
      k = function k(a) {
    this["genericShow'"] = a;
  };

  a = new l(function (a) {
    return [];
  });

  b.genericShow = function (a) {
    return function (c) {
      return function (b) {
        return (0, c["genericShow'"])(g.from(a)(b));
      };
    };
  };

  b.genericShowArgsNoArguments = a;

  b.genericShowSum = function (a) {
    return function (c) {
      return new k(function (b) {
        if (b instanceof g.Inl) return (0, a["genericShow'"])(b.value0);
        if (b instanceof g.Inr) return (0, c["genericShow'"])(b.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [b.constructor.name]);
      });
    };
  };

  b.genericShowConstructor = function (a) {
    return function (b) {
      return new k(function (f) {
        var g = d.reflectSymbol(b)(d.SProxy.value);
        f = (0, a.genericShowArgs)(f);
        return 0 === f.length ? g : "(" + (e.intercalate(e.foldableArray)(h.monoidString)(" ")(c.append(c.semigroupArray)([g])(f)) + ")");
      });
    };
  };

  b.genericShowArgsArgument = function (a) {
    return new l(function (c) {
      return [f.show(a)(c)];
    });
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};
  var b = a["Data.Identity"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      h = a["Control.Bind"],
      c = a["Control.Monad"],
      f = new a["Data.Functor"].Functor(function (a) {
    return function (c) {
      return a(c);
    };
  }),
      d = new g.Apply(function () {
    return f;
  }, function (a) {
    return function (c) {
      return a(c);
    };
  }),
      l = new h.Bind(function () {
    return d;
  }, function (a) {
    return function (c) {
      return c(a);
    };
  }),
      k = new e.Applicative(function () {
    return d;
  }, function (a) {
    return a;
  });
  a = new c.Monad(function () {
    return k;
  }, function () {
    return l;
  });
  b.monadIdentity = a;
})(PS);

(function (a) {
  a["Data.Lens.Internal.Wander"] = a["Data.Lens.Internal.Wander"] || {};

  a["Data.Lens.Internal.Wander"].Wander = function (a, e, g) {
    this.Choice1 = a;
    this.Strong0 = e;
    this.wander = g;
  };
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  var b = a["Data.Profunctor"],
      e = a["Control.Category"];

  a = function a(_a10) {
    this.dimap = _a10;
  };

  var g = new a(function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return c(b(a(d)));
        };
      };
    };
  });

  b.dimap = function (a) {
    return a.dimap;
  };

  b.Profunctor = a;

  b.rmap = function (a) {
    return function (c) {
      return (0, a.dimap)(e.identity(e.categoryFn))(c);
    };
  };

  b.profunctorFn = g;
})(PS);

(function (a) {
  a["Data.Profunctor.Choice"] = a["Data.Profunctor.Choice"] || {};
  a = a["Data.Profunctor.Choice"];

  a.right = function (a) {
    return a.right;
  };

  a.Choice = function (a, e, g) {
    this.Profunctor0 = a;
    this.left = e;
    this.right = g;
  };
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};

  var b = a["Data.Profunctor.Strong"],
      e = a["Data.Profunctor"],
      g = a["Data.Tuple"],
      h = function h(a, b, d) {
    this.Profunctor0 = a;
    this.first = b;
    this.second = d;
  };

  a = new h(function () {
    return e.profunctorFn;
  }, function (a) {
    return function (c) {
      return new g.Tuple(a(c.value0), c.value1);
    };
  }, a["Data.Functor"].map(g.functorTuple));

  b.first = function (a) {
    return a.first;
  };

  b.second = function (a) {
    return a.second;
  };

  b.Strong = h;
  b.strongFn = a;
})(PS);

(function (a) {
  a["Data.Lens.Internal.Forget"] = a["Data.Lens.Internal.Forget"] || {};

  var b = a["Data.Lens.Internal.Forget"],
      e = a["Data.Const"],
      g = a["Data.Either"],
      h = a["Data.Functor"],
      c = a["Data.Lens.Internal.Wander"],
      f = a["Data.Monoid"],
      d = a["Data.Newtype"],
      l = a["Data.Profunctor.Choice"],
      k = a["Data.Profunctor.Strong"],
      m = a["Data.Tuple"],
      r = function r(a) {
    return a;
  },
      q = new a["Data.Profunctor"].Profunctor(function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return c(a(b));
        };
      };
    };
  }),
      t = new k.Strong(function () {
    return q;
  }, function (a) {
    return function (c) {
      return a(m.fst(c));
    };
  }, function (a) {
    return function (c) {
      return a(m.snd(c));
    };
  });

  a = new d.Newtype(function (a) {
    return a;
  }, r);

  var v = function v(a) {
    return new l.Choice(function () {
      return q;
    }, function (c) {
      return g.either(c)(f.mempty(f.monoidFn(a)));
    }, function (c) {
      return g.either(f.mempty(f.monoidFn(a)))(c);
    });
  };

  b.Forget = r;
  b.newtypeForget = a;
  b.strongForget = t;

  b.wanderForget = function (a) {
    return new c.Wander(function () {
      return v(a);
    }, function () {
      return t;
    }, function (c) {
      return function (b) {
        return d.alaF(h.functorFn)(h.functorFn)(e.newtypeConst)(e.newtypeConst)(e.Const)(c(e.applicativeConst(a)))(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};

  var b = a["Data.Maybe.First"],
      e = a["Data.Maybe"],
      g = a["Data.Monoid"],
      h = a["Data.Newtype"],
      c = function c(a) {
    return a;
  },
      f = new a["Data.Semigroup"].Semigroup(function (a) {
    return function (c) {
      return a instanceof e.Just ? a : c;
    };
  });

  a = new h.Newtype(function (a) {
    return a;
  }, c);
  g = new g.Monoid(function () {
    return f;
  }, e.Nothing.value);
  b.First = c;
  b.newtypeFirst = a;
  b.monoidFirst = g;
})(PS);

(function (a) {
  a["Data.Lens.Fold"] = a["Data.Lens.Fold"] || {};
  var b = a["Data.Lens.Fold"],
      e = a["Data.Lens.Internal.Forget"],
      g = a["Data.Maybe"],
      h = a["Data.Maybe.First"],
      c = a["Data.Newtype"],
      f = c.under(e.newtypeForget)(e.newtypeForget)(e.Forget);

  b.preview = function (a) {
    var b = c.unwrap(h.newtypeFirst),
        d = f(a)(function (a) {
      return h.First(g.Just.create(a));
    });
    return function (a) {
      return b(d(a));
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Getter"] = a["Data.Lens.Getter"] || {};
  var b = a["Control.Category"],
      e = a["Data.Lens.Internal.Forget"],
      g = a["Data.Newtype"];

  a["Data.Lens.Getter"].view = function (a) {
    return g.unwrap(e.newtypeForget)(a(b.identity(b.categoryFn)));
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso"] = a["Data.Lens.Iso"] || {};
  var b = a["Data.Profunctor"];

  a["Data.Lens.Iso"].iso = function (a) {
    return function (e) {
      return function (g) {
        return function (c) {
          return b.dimap(g)(a)(e)(c);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso.Newtype"] = a["Data.Lens.Iso.Newtype"] || {};
  var b = a["Data.Lens.Iso"],
      e = a["Data.Newtype"];

  a["Data.Lens.Iso.Newtype"]._Newtype = function (a) {
    return function (g) {
      return function (c) {
        return b.iso(e.unwrap(a))(e.wrap(g))(c);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Lens"] = a["Data.Lens.Lens"] || {};

  var b = a["Data.Profunctor"],
      e = a["Data.Profunctor.Strong"],
      g = a["Data.Tuple"],
      h = function h(a) {
    return function (c) {
      return function (d) {
        return b.dimap(c.Profunctor0())(a)(function (a) {
          return a.value1(a.value0);
        })(e.first(c)(d));
      };
    };
  };

  a["Data.Lens.Lens"].lens = function (a) {
    return function (c) {
      return function (b) {
        return h(function (b) {
          return new g.Tuple(a(b), function (a) {
            return c(b)(a);
          });
        })(b);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Prism"] = a["Data.Lens.Prism"] || {};

  var b = a["Control.Category"],
      e = a["Data.Either"],
      g = a["Data.Maybe"],
      h = a["Data.Profunctor"],
      c = a["Data.Profunctor.Choice"],
      f = function f(a) {
    return function (d) {
      return function (f) {
        return function (g) {
          return h.dimap(f.Profunctor0())(d)(e.either(b.identity(b.categoryFn))(b.identity(b.categoryFn)))(c.right(f)(h.rmap(f.Profunctor0())(a)(g)));
        };
      };
    };
  };

  a["Data.Lens.Prism"]["prism'"] = function (a) {
    return function (c) {
      return function (b) {
        return f(a)(function (a) {
          return g.maybe(new e.Left(a))(e.Right.create)(c(a));
        })(b);
      };
    };
  };
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var b = a.Record,
      e = a["Data.Symbol"],
      g = a["Record.Unsafe"];

  b.get = function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return g.unsafeGet(e.reflectSymbol(a)(c))(b);
        };
      };
    };
  };

  b.set = function (a) {
    return function (c) {
      return function (c) {
        return function (c) {
          return function (b) {
            return function (d) {
              return g.unsafeSet(e.reflectSymbol(a)(c))(b)(d);
            };
          };
        };
      };
    };
  };

  b.insert = function (a) {
    return function (c) {
      return function (c) {
        return function (c) {
          return function (b) {
            return function (d) {
              return g.unsafeSet(e.reflectSymbol(a)(c))(b)(d);
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Record"] = a["Data.Lens.Record"] || {};
  var b = a["Data.Function"],
      e = a["Data.Lens.Lens"],
      g = a.Record;

  a["Data.Lens.Record"].prop = function (a) {
    return function (c) {
      return function (c) {
        return function (c) {
          return function (d) {
            return e.lens(g.get(a)()(c))(b.flip(g.set(a)()()(c)))(d);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  var b = "function" === typeof Array.from,
      e = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      g = "function" === typeof String.prototype.fromCodePoint,
      h = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (a) {
    return h ? function (a) {
      return a.codePointAt(0);
    } : a;
  };

  a._singleton = function (a) {
    return g ? String.fromCodePoint : a;
  };

  a._take = function (a) {
    return function (c) {
      return e ? function (a) {
        var b = "";
        a = a[Symbol.iterator]();

        for (var d = 0; d < c; ++d) {
          var e = a.next();
          if (e.done) break;
          b += e.value;
        }

        return b;
      } : a(c);
    };
  };

  a._toCodePointArray = function (a) {
    return function (c) {
      return b ? function (a) {
        return Array.from(a, c);
      } : a;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.singleton = function (a) {
    return a;
  };

  a._charAt = function (a) {
    return function (b) {
      return function (e) {
        return function (g) {
          return 0 <= e && e < g.length ? a(g.charAt(e)) : b;
        };
      };
    };
  };

  a.length = function (a) {
    return a.length;
  };

  a._indexOf = function (a) {
    return function (b) {
      return function (e) {
        return function (g) {
          g = g.indexOf(e);
          return -1 === g ? b : a(g);
        };
      };
    };
  };

  a.drop = function (a) {
    return function (b) {
      return b.substring(a);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var b = a["Data.String.CodeUnits"],
      e = a["Data.String.CodeUnits"],
      g = a["Data.Maybe"],
      h = e._indexOf(g.Just.create)(g.Nothing.value);

  a = e._charAt(g.Just.create)(g.Nothing.value);

  b.contains = function (a) {
    var c = h(a);
    return function (a) {
      return g.isJust(c(a));
    };
  };

  b.charAt = a;
  b.singleton = e.singleton;
  b.length = e.length;
  b.drop = e.drop;
})(PS);

(function (a) {
  a.charAt = function (a) {
    return function (b) {
      if (0 <= a && a < b.length) return b.charAt(a);
      throw Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };
})(PS["Data.String.Unsafe"] = PS["Data.String.Unsafe"] || {});

(function (a) {
  a["Data.String.Unsafe"] = a["Data.String.Unsafe"] || {};
  a["Data.String.Unsafe"].charAt = a["Data.String.Unsafe"].charAt;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (a) {
    return function (b) {
      return function (e) {
        return function (g) {
          return function (c) {
            return function (f) {
              for (var d = [];;) {
                f = c(f);
                if (a(f)) return d;
                f = b(f);
                d.push(e(f));
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
  var b = a["Data.Unfoldable"],
      e = a["Data.Maybe"],
      g = a["Data.Tuple"],
      h = a["Data.Unfoldable1"];
  a = new function (a, b) {
    this.Unfoldable10 = a;
    this.unfoldr = b;
  }(function () {
    return h.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(e.isNothing)(e.fromJust())(g.fst)(g.snd));

  b.unfoldr = function (a) {
    return a.unfoldr;
  };

  b.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var b = a["Data.String.CodePoints"],
      e = a["Data.String.CodePoints"],
      g = a["Data.Array"],
      h = a["Data.Bounded"],
      c = a["Data.Enum"],
      f = a["Data.EuclideanRing"],
      d = a["Data.Functor"],
      l = a["Data.Maybe"],
      k = a["Data.String.CodeUnits"],
      m = a["Data.String.Unsafe"],
      r = a["Data.Tuple"],
      q = a["Data.Unfoldable"],
      t = function t(a) {
    return function (c) {
      return ((1024 * (a - 55296 | 0) | 0) + (c - 56320 | 0) | 0) + 65536 | 0;
    };
  },
      v = function v(a) {
    var b = k.length(a);
    if (0 === b) return l.Nothing.value;
    if (1 === b) return new l.Just({
      head: c.fromEnum(c.boundedEnumChar)(m.charAt(0)(a)),
      tail: ""
    });
    b = c.fromEnum(c.boundedEnumChar)(m.charAt(1)(a));
    var d = c.fromEnum(c.boundedEnumChar)(m.charAt(0)(a));
    return 55296 <= d && 56319 >= d && 56320 <= b && 57343 >= b ? new l.Just({
      head: t(d)(b),
      tail: k.drop(2)(a)
    }) : new l.Just({
      head: d,
      tail: k.drop(1)(a)
    });
  },
      n = function n(a) {
    return d.map(l.functorMaybe)(function (a) {
      return new r.Tuple(a.head, a.tail);
    })(v(a));
  };

  a = e._unsafeCodePointAt0(function (a) {
    var b = c.fromEnum(c.boundedEnumChar)(m.charAt(0)(a));
    return 55296 <= b && 56319 >= b && 1 < k.length(a) && (a = c.fromEnum(c.boundedEnumChar)(m.charAt(1)(a)), 56320 <= a && 57343 >= a) ? t(b)(a) : b;
  });

  var y = e._toCodePointArray(function (a) {
    return q.unfoldr(q.unfoldableArray)(n)(a);
  })(a),
      x = function () {
    var a = c.toEnumWithDefaults(c.boundedEnumChar)(h.bottom(h.boundedChar))(h.top(h.boundedChar));
    return function (c) {
      return k.singleton(a(c));
    };
  }(),
      p = e._singleton(function (a) {
    if (65535 >= a) return x(a);
    var c = f.div(f.euclideanRingInt)(a - 65536 | 0)(1024) + 55296 | 0;
    a = f.mod(f.euclideanRingInt)(a - 65536 | 0)(1024) + 56320 | 0;
    return x(c) + x(a);
  }),
      u = function u(a) {
    return function (c) {
      if (1 > a) return "";
      var b = v(c);
      return b instanceof l.Just ? p(b.value0.head) + u(a - 1 | 0)(b.value0.tail) : c;
    };
  };

  e._take(u);

  b.singleton = p;
  b.toCodePointArray = y;

  b.length = function (a) {
    return g.length(y(a));
  };
})(PS);

(function (a) {
  a.trim = function (a) {
    return a.trim();
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  a["Data.String.Common"].trim = a["Data.String.Common"].trim;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var b = a["Data.String.NonEmpty.Internal"],
      e = a["Data.Maybe"],
      g = a["Data.Show"];
  a = new g.Show(function (a) {
    return "(NonEmptyString.unsafeFromString " + (g.show(g.showString)(a) + ")");
  });

  b.fromString = function (a) {
    return "" === a ? e.Nothing.value : new e.Just(a);
  };

  b.toString = function (a) {
    return a;
  };

  b.showNonEmptyString = a;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  a["Data.String.Pattern"].Pattern = function (a) {
    return a;
  };
})(PS);

(function (a) {
  a.endsWith = function (a) {
    return function (b) {
      return b.endsWith(a);
    };
  };

  a.fromCharArray = function (a) {
    return a.join("");
  };
})(PS["Data.String.Utils"] = PS["Data.String.Utils"] || {});

(function (a) {
  a["Data.String.Utils"] = a["Data.String.Utils"] || {};
  var b = a["Data.String.Utils"];
  a = a["Data.String.Utils"];
  b.endsWith = a.endsWith;
  b.fromCharArray = a.fromCharArray;
})(PS);

(function (a) {
  a["Data.Variant"] = a["Data.Variant"] || {};
  var b = a["Data.Symbol"];

  a["Data.Variant"].inj = function (a) {
    return function (a) {
      return function (e) {
        return function (c) {
          return {
            type: b.reflectSymbol(a)(e),
            value: c
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var b = a["Effect.Class"],
      e = a["Effect.Console"];

  a["Effect.Class.Console"].logShow = function (a) {
    return function (g) {
      var c = b.liftEffect(a),
          f = e.logShow(g);
      return function (a) {
        return c(f(a));
      };
    };
  };
})(PS);

(function (a) {
  a._copyST = function (a) {
    return function () {
      var b = {},
          g;

      for (g in a) {
        hasOwnProperty.call(a, g) && (b[g] = a[g]);
      }

      return b;
    };
  };

  a.empty = {};

  a.runST = function (a) {
    return a();
  };

  a._lookup = function (a, e, g, h) {
    return g in h ? e(h[g]) : a;
  };
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a.poke = function (a) {
    return function (b) {
      return function (e) {
        return function () {
          e[a] = b;
          return e;
        };
      };
    };
  };

  a["delete"] = function (a) {
    return function (b) {
      return function () {
        delete b[a];
        return b;
      };
    };
  };
})(PS["Foreign.Object.ST"] = PS["Foreign.Object.ST"] || {});

(function (a) {
  a["Foreign.Object.ST"] = a["Foreign.Object.ST"] || {};
  var b = a["Foreign.Object.ST"];
  a = a["Foreign.Object.ST"];
  b.poke = a.poke;
  b["delete"] = a["delete"];
})(PS);

(function (a) {
  a["Foreign.Object"] = a["Foreign.Object"] || {};

  var b = a["Foreign.Object"],
      e = a["Foreign.Object"],
      g = a["Data.Maybe"],
      h = a["Foreign.Object.ST"],
      c = e._copyST,
      f = function f(a) {
    return function (b) {
      return e.runST(function () {
        var d = c(b)();
        a(d)();
        return d;
      });
    };
  },
      d = a["Data.Function.Uncurried"].runFn4(e._lookup)(g.Nothing.value)(g.Just.create),
      l = function l(a) {
    return function (c) {
      return f(h.poke(a)(c));
    };
  };

  b.lookup = d;

  b.alter = function (a) {
    return function (c) {
      return function (b) {
        var e = a(d(c)(b));
        if (e instanceof g.Nothing) return f(h["delete"](c))(b);
        if (e instanceof g.Just) return l(c)(e.value0)(b);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [e.constructor.name]);
      };
    };
  };

  b.empty = e.empty;
})(PS);

(function (a) {
  a["Formless.Data.FormFieldResult"] = a["Formless.Data.FormFieldResult"] || {};
  var b = a["Formless.Data.FormFieldResult"],
      e = a["Data.Either"],
      g = a["Data.Lens.Prism"],
      h = a["Data.Maybe"];

  a = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  var c = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      f = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }();

  b.NotValidated = a;
  b.Error = c;

  b.fromEither = function (a) {
    if (a instanceof e.Left) return new c(a.value0);
    if (a instanceof e.Right) return new f(a.value0);
    throw Error("Failed pattern match at Formless.Data.FormFieldResult (line 44, column 14 - line 46, column 23): " + [a.constructor.name]);
  };

  b.toMaybe = function (a) {
    return a instanceof f ? new h.Just(a.value0) : h.Nothing.value;
  };

  b._Error = function (a) {
    return g["prism'"](c.create)(function (a) {
      return a instanceof c ? new h.Just(a.value0) : h.Nothing.value;
    })(a);
  };
})(PS);

(function (a) {
  a["Formless.Types.Form"] = a["Formless.Types.Form"] || {};
  var b = a["Formless.Types.Form"],
      e = a["Data.Newtype"];

  a = function a(_a11) {
    return _a11;
  };

  var g = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      h = function h(a) {
    return a;
  },
      c = new e.Newtype(function (a) {
    return a;
  }, a),
      f = new e.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      d = new e.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  e = new e.Newtype(function (a) {
    return a;
  }, h);
  b.FormProxy = g;
  b.OutputField = a;
  b.FormField = h;
  b.newtypeInputField = d;

  b.eqInputField = function (a) {
    return a;
  };

  b.newtypeOutputField = c;
  b.newtypeInputFunction = f;
  b.newtypeFormField = e;
})(PS);

(function (a) {
  a["Formless.Validation"] = a["Formless.Validation"] || {};
  var b = a["Formless.Validation"],
      e = a["Control.Applicative"],
      g = a["Data.Either"],
      h = a["Data.Function"],
      c = a["Data.Newtype"],
      f = new c.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  b.runValidation = function (a) {
    return c.unwrap(f);
  };

  b.hoistFn_ = function (a) {
    return function (c) {
      return h["const"](function () {
        var b = e.pure(a.Applicative0()),
            d = e.pure(g.applicativeEither);
        return function (a) {
          return b(d(c(a)));
        };
      }());
    };
  };

  b.hoistFnE = function (a) {
    return function (c) {
      return function (b) {
        var d = e.pure(a.Applicative0()),
            f = c(b);
        return function (a) {
          return d(f(a));
        };
      };
    };
  };

  b.hoistFnE_ = function (a) {
    return function (c) {
      return h["const"](function () {
        var b = e.pure(a.Applicative0());
        return function (a) {
          return b(c(a));
        };
      }());
    };
  };

  b.newtypeValidation = f;
})(PS);

(function (a) {
  a.copyRecord = function (a) {
    var b = {},
        g;

    for (g in a) {
      ({}).hasOwnProperty.call(a, g) && (b[g] = a[g]);
    }

    return b;
  };

  a.unsafeInsert = function (a) {
    return function (b) {
      return function (e) {
        e[a] = b;
        return e;
      };
    };
  };

  a.unsafeModify = function (a) {
    return function (b) {
      return function (e) {
        e[a] = b(e[a]);
        return e;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var b = a["Record.Builder"],
      e = a["Record.Builder"],
      g = a["Data.Symbol"],
      h = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  b.build = function (a) {
    return function (c) {
      return a(e.copyRecord(c));
    };
  };

  b.insert = function (a) {
    return function (a) {
      return function (a) {
        return function (c) {
          return function (b) {
            return function (d) {
              return e.unsafeInsert(g.reflectSymbol(a)(c))(b)(d);
            };
          };
        };
      };
    };
  };

  b.modify = function (a) {
    return function (a) {
      return function (a) {
        return function (c) {
          return function (b) {
            return function (d) {
              return e.unsafeModify(g.reflectSymbol(a)(c))(b)(d);
            };
          };
        };
      };
    };
  };

  b.semigroupoidBuilder = h;
  b.categoryBuilder = a;
})(PS);

(function (a) {
  a["Formless.Internal.Transform"] = a["Formless.Internal.Transform"] || {};

  var b = a["Formless.Internal.Transform"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      h = a["Control.Bind"],
      c = a["Control.Category"],
      f = a["Control.Semigroupoid"],
      d = a["Data.Functor"],
      l = a["Data.Maybe"],
      k = a["Data.Newtype"],
      m = a["Data.Symbol"],
      r = a["Data.Tuple"],
      q = a["Formless.Data.FormFieldResult"],
      t = a["Formless.Types.Form"],
      v = a["Formless.Validation"],
      n = a.Record,
      y = a["Record.Builder"],
      x = a["Record.Unsafe"],
      p = a["Type.Data.RowList"],
      u = function u(a) {
    this.validateAllBuilder = a;
  },
      z = function z(a) {
    this.setFormFieldsTouchedBuilder = a;
  },
      C = function C(a) {
    this.replaceFormFieldInputsBuilder = a;
  },
      N = function N(a) {
    this.modifyAllBuilder = a;
  },
      B = function B(a) {
    this.inputFieldsToFormFieldsBuilder = a;
  },
      G = function G(a) {
    this.formFieldsToInputFieldsBuilder = a;
  },
      D = function D(a) {
    this.formFieldsToMaybeOutputBuilder = a;
  },
      w = function w(a) {
    this.countErrorsImpl = a;
  },
      A = function A(a) {
    this.allTouchedImpl = a;
  };

  a = new z(function (a) {
    return function (a) {
      return c.identity(y.categoryBuilder);
    };
  });
  var F = new C(function (a) {
    return function (a) {
      return function (a) {
        return c.identity(y.categoryBuilder);
      };
    };
  }),
      P = new w(function (a) {
    return function (a) {
      return 0;
    };
  }),
      L = new A(function (a) {
    return function (a) {
      return !0;
    };
  }),
      I = new N(function (a) {
    return function (a) {
      return function (a) {
        return c.identity(y.categoryBuilder);
      };
    };
  }),
      H = new G(function (a) {
    return function (a) {
      return c.identity(y.categoryBuilder);
    };
  }),
      E = new B(function (a) {
    return function (a) {
      return c.identity(y.categoryBuilder);
    };
  }),
      J = d.flap(d.functorFn)(y.build)({}),
      M = new D(function (a) {
    return function (a) {
      return new l.Just(c.identity(y.categoryBuilder));
    };
  });
  b.fromScratch = J;

  b.allTouched = function (a) {
    return function (a) {
      return function (c) {
        var b = (0, a.allTouchedImpl)(p.RLProxy.value),
            d = k.unwrap(c);
        return function (a) {
          return b(d(a));
        };
      };
    };
  };

  b.countErrors = function (a) {
    return function (a) {
      return function (c) {
        var b = (0, a.countErrorsImpl)(p.RLProxy.value),
            d = k.unwrap(c);
        return function (a) {
          return b(d(a));
        };
      };
    };
  };

  b.setFormFieldsTouched = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          b = (0, a.setFormFieldsTouchedBuilder)(p.RLProxy.value)(k.unwrap(c)(b));
          return k.wrap(c)(J(b));
        };
      };
    };
  };

  b.formFieldsToInputFields = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          return function (d) {
            d = (0, a.formFieldsToInputFieldsBuilder)(p.RLProxy.value)(k.unwrap(b)(d));
            return k.wrap(c)(J(d));
          };
        };
      };
    };
  };

  b.inputFieldsToFormFields = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          return function (d) {
            d = (0, a.inputFieldsToFormFieldsBuilder)(p.RLProxy.value)(k.unwrap(c)(d));
            return k.wrap(b)(J(d));
          };
        };
      };
    };
  };

  b.formFieldsToMaybeOutputFields = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          return function (e) {
            e = (0, b.formFieldsToMaybeOutputBuilder)(p.RLProxy.value)(k.unwrap(a)(e));
            return d.map(l.functorMaybe)(k.wrap(c))(d.map(l.functorMaybe)(J)(e));
          };
        };
      };
    };
  };

  b.replaceFormFieldInputs = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          return function (d) {
            return function (e) {
              e = (0, a.replaceFormFieldInputsBuilder)(k.unwrap(c)(d))(p.RLProxy.value)(k.unwrap(b)(e));
              return k.wrap(b)(J(e));
            };
          };
        };
      };
    };
  };

  b.modifyAll = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          return function (d) {
            return function (e) {
              e = (0, a.modifyAllBuilder)(k.unwrap(c)(d))(p.RLProxy.value)(k.unwrap(b)(e));
              return k.wrap(b)(J(e));
            };
          };
        };
      };
    };
  };

  b.validateAll = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          return function (e) {
            return function (f) {
              return function (g) {
                g = (0, c.validateAllBuilder)(k.unwrap(b)(f))(p.RLProxy.value)(k.unwrap(e)(g));
                return d.map(a.Bind1().Apply0().Functor0())(k.wrap(e))(d.map(a.Bind1().Apply0().Functor0())(J)(g));
              };
            };
          };
        };
      };
    };
  };

  b.unsafeModifyInputVariant = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (e) {
            var f = function () {
              var c = k.unwrap(a)(d);
              return new r.Tuple(c.type, c.value);
            }(),
                g = function () {
              var a = x.unsafeGet(r.fst(f))(k.unwrap(c)(e));
              return t.FormField({
                input: k.unwrap(t.newtypeInputFunction)(r.snd(f))(a.input),
                touched: a.touched,
                result: b(a.result)
              });
            }();

            return k.wrap(c)(x.unsafeSet(r.fst(f))(g)(k.unwrap(c)(e)));
          };
        };
      };
    };
  };

  b.unsafeRunValidationVariant = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (f) {
            return function (g) {
              return function (l) {
                var m = k.unwrap(c)(f).type;
                return function () {
                  var c = x.unsafeGet(m)(k.unwrap(b)(l));
                  return h.bind(a.Bind1())(v.runValidation(a)(x.unsafeGet(m)(k.unwrap(d)(g)))(l)(c.input))(function (d) {
                    d = x.unsafeSet(m)(t.FormField({
                      input: c.input,
                      touched: c.touched,
                      result: q.fromEither(d)
                    }))(k.unwrap(b)(l));
                    return e.pure(a.Applicative0())(k.wrap(b)(d));
                  });
                }();
              };
            };
          };
        };
      };
    };
  };

  b.setFormFieldsTouchedNil = a;

  b.setFormFieldsTouchedCons = function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return new z(function (b) {
            return function (b) {
              var d = (0, c.setFormFieldsTouchedBuilder)(p.RLProxy.value)(b);
              b = k.over(t.newtypeFormField)(t.newtypeFormField)(t.FormField)(function (a) {
                return {
                  touched: !0,
                  input: a.input,
                  result: a.result
                };
              })(n.get(a)()(m.SProxy.value)(b));
              b = y.insert()()(a)(m.SProxy.value)(b);
              return f.compose(y.semigroupoidBuilder)(b)(d);
            };
          });
        };
      };
    };
  };

  b.inputFieldsToInputNil = H;

  b.inputFieldsToInputCons = function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return new G(function (b) {
            return function (b) {
              var d = (0, c.formFieldsToInputFieldsBuilder)(p.RLProxy.value)(b);
              b = n.get(a)()(m.SProxy.value)(b).input;
              b = y.insert()()(a)(m.SProxy.value)(b);
              return f.compose(y.semigroupoidBuilder)(b)(d);
            };
          });
        };
      };
    };
  };

  b.inputFieldsToFormFieldsNil = E;

  b.inputFieldsToFormFieldsCons = function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return new B(function (b) {
            return function (b) {
              var d = (0, c.inputFieldsToFormFieldsBuilder)(p.RLProxy.value)(b);
              b = {
                input: n.get(a)()(m.SProxy.value)(b),
                touched: !1,
                result: q.NotValidated.value
              };
              b = y.insert()()(a)(m.SProxy.value)(b);
              return f.compose(y.semigroupoidBuilder)(b)(d);
            };
          });
        };
      };
    };
  };

  b.formFieldsToMaybeOutputNil = M;

  b.formFieldsToMaybeOutputCons = function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return new D(function (b) {
            return function (b) {
              var e = (0, c.formFieldsToMaybeOutputBuilder)(p.RLProxy.value)(b);
              b = d.map(l.functorMaybe)(t.OutputField)(q.toMaybe(k.unwrap(t.newtypeFormField)(n.get(a)()(m.SProxy.value)(b)).result));
              return g.apply(l.applyMaybe)(d.map(l.functorMaybe)(function (c) {
                return function (b) {
                  return f.compose(y.semigroupoidBuilder)(y.insert()()(a)(m.SProxy.value)(c))(b);
                };
              })(b))(e);
            };
          });
        };
      };
    };
  };

  b.nilCountErrors = P;

  b.consCountErrors = function (a) {
    return function (c) {
      return function (c) {
        return new w(function (b) {
          return function (b) {
            var d = k.unwrap(t.newtypeFormField)(n.get(a)()(m.SProxy.value)(b)).result instanceof q.Error ? 1 : 0;
            return d + (0, c.countErrorsImpl)(p.RLProxy.value)(b) | 0;
          };
        });
      };
    };
  };

  b.nilAllTouched = L;

  b.consAllTouched = function (a) {
    return function (c) {
      return function (c) {
        return new A(function (b) {
          return function (b) {
            return k.unwrap(t.newtypeFormField)(n.get(a)()(m.SProxy.value)(b)).touched ? (0, c.allTouchedImpl)(p.RLProxy.value)(b) : !1;
          };
        });
      };
    };
  };

  b.applyToValidationNil = function (a) {
    return new u(function (b) {
      return function (b) {
        return function (b) {
          return e.pure(a.Applicative0())(c.identity(y.categoryBuilder));
        };
      };
    });
  };

  b.applyToValidationCons = function (a) {
    return function (c) {
      return function (b) {
        return function (b) {
          return function (l) {
            return function (l) {
              return function (l) {
                return new u(function (u) {
                  return function (r) {
                    return function (r) {
                      var w = (0, l.validateAllBuilder)(u)(p.RLProxy.value)(r),
                          z = function () {
                        var d = k.unwrap(v.newtypeValidation)(n.get(a)()(m.SProxy.value)(u)),
                            f = k.unwrap(t.newtypeFormField)(n.get(a)()(m.SProxy.value)(r));
                        return h.bind(c.Bind1())(d(k.wrap(b)(r))(f.input))(function (a) {
                          var b = e.pure(c.Applicative0()),
                              d = k.wrap(t.newtypeFormField),
                              g = {},
                              h;

                          for (h in f) {
                            ({}).hasOwnProperty.call(f, h) && (g[h] = f[h]);
                          }

                          g.result = q.fromEither(a);
                          return b(d(g));
                        });
                      }();

                      return g.apply(c.Bind1().Apply0())(d.map(c.Bind1().Apply0().Functor0())(function (c) {
                        return function (b) {
                          return f.compose(y.semigroupoidBuilder)(y.insert()()(a)(m.SProxy.value)(c))(b);
                        };
                      })(z))(w);
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

  b.modifyAllNil = I;

  b.modifyAllCons = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new N(function (e) {
                  return function (g) {
                    return function (g) {
                      var h = (0, d.modifyAllBuilder)(e)(p.RLProxy.value)(g),
                          l = k.unwrap(c)(n.get(a)()(m.SProxy.value)(e));
                      g = n.get(a)()(m.SProxy.value)(g);
                      g = y.insert()()(a)(m.SProxy.value)(k.over(b)(b)(t.FormField)(function (a) {
                        return {
                          input: l(a.input),
                          result: a.result,
                          touched: a.touched
                        };
                      })(g));
                      return f.compose(y.semigroupoidBuilder)(g)(h);
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

  b.replaceFormFieldInputsTouchedNil = F;

  b.replaceFormFieldInputsTouchedCons = function (a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new C(function (e) {
                  return function (g) {
                    return function (g) {
                      var h = (0, d.replaceFormFieldInputsBuilder)(e)(p.RLProxy.value)(g);
                      k.unwrap(b)(n.get(a)()(m.SProxy.value)(g));
                      g = n.get(a)()(m.SProxy.value)(e);
                      g = y.insert()()(a)(m.SProxy.value)(t.FormField({
                        input: k.unwrap(c)(g),
                        touched: !1,
                        result: q.NotValidated.value
                      }));
                      return f.compose(y.semigroupoidBuilder)(g)(h);
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

  var b = a["Formless.Types.Query"],
      e = a["Data.Eq"],
      g = a["Data.Newtype"],
      h = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      c = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      f = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }();

  var d = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      l = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }(),
      k = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      m = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      r = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      y = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }(),
      x = function x(a) {
    return a;
  };

  g = new g.Newtype(function (a) {
    return a;
  }, x);
  e = new e.Eq(function (a) {
    return function (b) {
      return a instanceof h && b instanceof h || a instanceof c && b instanceof c || a instanceof f && b instanceof f ? !0 : !1;
    };
  });
  b.Modify = a;
  b.Validate = d;
  b.ModifyValidate = l;
  b.Reset = k;
  b.SetAll = m;
  b.ModifyAll = r;
  b.ResetAll = q;
  b.ValidateAll = t;
  b.Submit = v;
  b.LoadForm = n;
  b.AndThen = y;
  b.InternalState = x;
  b.Invalid = h;
  b.Incomplete = c;
  b.Valid = f;
  b.newtypeInternalState = g;
  b.eqValidStatus = e;
})(PS);

(function (a) {
  a["Formless.Component"] = a["Formless.Component"] || {};

  var b = a["Control.Applicative"],
      e = a["Control.Bind"],
      g = a["Control.Category"],
      h = a["Data.Either"],
      c = a["Data.Eq"],
      f = a["Data.Maybe"],
      d = a["Data.Newtype"],
      l = a["Formless.Internal.Transform"],
      k = a["Formless.Types.Query"],
      m = function m(a) {
    return function (a) {
      return function (a) {
        return function (q) {
          return function (n) {
            return function (r) {
              return function (t) {
                return function (p) {
                  return function (u) {
                    return function (v) {
                      return function (z) {
                        return function (y) {
                          return function (x) {
                            return function (G) {
                              return function (D) {
                                return function (w) {
                                  return function (A) {
                                    return function (B) {
                                      return function (C) {
                                        return function (F) {
                                          return function (I) {
                                            return function (H) {
                                              return function (E) {
                                                var J = function J(e) {
                                                  var f = l.countErrors()(r)(D)(e.form),
                                                      g = !c.eq(c.eqRec()(a))(d.unwrap(x)(l.formFieldsToInputFields()(n)(x)(D)(e.form)))(d.unwrap(x)(d.unwrap(k.newtypeInternalState)(e.internal).initialInputs));
                                                  return b.pure(I.Applicative0())(h.Left.create(function () {
                                                    return d.unwrap(k.newtypeInternalState)(e.internal).allTouched ? {
                                                      validity: 0 !== e.errors ? k.Invalid.value : k.Valid.value,
                                                      errors: f,
                                                      dirty: g,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : l.allTouched()(t)(D)(e.form) ? {
                                                      validity: 0 !== e.errors ? k.Invalid.value : k.Valid.value,
                                                      internal: d.over(k.newtypeInternalState)(k.newtypeInternalState)(k.InternalState)(function (a) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: a.initialInputs,
                                                          validators: a.validators
                                                        };
                                                      })(e.internal),
                                                      errors: f,
                                                      dirty: g,
                                                      form: e.form,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : {
                                                      validity: k.Incomplete.value,
                                                      errors: f,
                                                      dirty: g,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    };
                                                  }()));
                                                },
                                                    M = function M(g) {
                                                  var K = {
                                                    submitAttempts: g.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: g.internal,
                                                    form: g.form,
                                                    dirty: g.dirty,
                                                    errors: g.errors,
                                                    validity: g.validity
                                                  },
                                                      E = d.unwrap(k.newtypeInternalState)(K.internal);

                                                  g = function () {
                                                    return E.allTouched ? K : {
                                                      form: l.setFormFieldsTouched()(p)(D)(K.form),
                                                      internal: d.over(k.newtypeInternalState)(k.newtypeInternalState)(k.InternalState)(function (a) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: a.initialInputs,
                                                          validators: a.validators
                                                        };
                                                      })(K.internal),
                                                      submitAttempts: K.submitAttempts,
                                                      submitting: K.submitting,
                                                      dirty: K.dirty,
                                                      errors: K.errors,
                                                      validity: K.validity
                                                    };
                                                  }();

                                                  return e.bind(I.Bind1())(m()()(a)(q)(n)(r)(t)(p)(u)(v)(z)(y)(x)(G)(D)(w)(A)(B)(C)(F)(I)(k.ValidateAll.value)(g))(function (a) {
                                                    if (a instanceof h.Right) return b.pure(I.Applicative0())(new h.Right(a.value0));

                                                    if (a instanceof h.Left) {
                                                      var d = {
                                                        submitting: !1,
                                                        dirty: a.value0.dirty,
                                                        errors: a.value0.errors,
                                                        form: a.value0.form,
                                                        internal: a.value0.internal,
                                                        submitAttempts: a.value0.submitAttempts,
                                                        validity: a.value0.validity
                                                      };
                                                      return b.pure(I.Applicative0())(function () {
                                                        if (c.eq(k.eqValidStatus)(d.validity)(k.Valid.value)) {
                                                          var b = l.formFieldsToMaybeOutputFields()(D)(w)(y)(a.value0.form);
                                                          if (b instanceof f.Nothing) return new h.Left(d);
                                                          if (b instanceof f.Just) return new h.Right(b.value0);
                                                          throw Error("Failed pattern match at Formless.Component (line 201, column 16 - line 203, column 36): " + [b.constructor.name]);
                                                        }

                                                        return new h.Left(d);
                                                      }());
                                                    }

                                                    throw Error("Failed pattern match at Formless.Component (line 192, column 5 - line 204, column 31): " + [a.constructor.name]);
                                                  });
                                                };

                                                if (H instanceof k.Modify) return J({
                                                  form: l.unsafeModifyInputVariant(C)(D)(g.identity(g.categoryFn))(H.value0)(E.form),
                                                  internal: E.internal,
                                                  errors: E.errors,
                                                  dirty: E.dirty,
                                                  validity: E.validity,
                                                  submitAttempts: E.submitAttempts,
                                                  submitting: E.submitting
                                                });
                                                if (H instanceof k.Validate) return e.bind(I.Bind1())(l.unsafeRunValidationVariant(I)(F)(D)(A)(H.value0)(d.unwrap(k.newtypeInternalState)(E.internal).validators)(E.form))(function (a) {
                                                  return J({
                                                    form: a,
                                                    internal: E.internal,
                                                    errors: E.errors,
                                                    dirty: E.dirty,
                                                    validity: E.validity,
                                                    submitAttempts: E.submitAttempts,
                                                    submitting: E.submitting
                                                  });
                                                });

                                                if (H instanceof k.ModifyValidate) {
                                                  M = function M(a) {
                                                    var c = d.unwrap(k.newtypeInternalState)(a.internal).validators;
                                                    return e.bind(I.Bind1())(l.unsafeRunValidationVariant(I)(F)(D)(A)(H.value1)(c)(a.form))(function (c) {
                                                      return b.pure(I.Applicative0())({
                                                        form: c,
                                                        internal: a.internal,
                                                        dirty: a.dirty,
                                                        errors: a.errors,
                                                        submitAttempts: a.submitAttempts,
                                                        submitting: a.submitting,
                                                        validity: a.validity
                                                      });
                                                    });
                                                  };

                                                  var O = function O(a) {
                                                    return function (c) {
                                                      return {
                                                        validity: c.validity,
                                                        dirty: c.dirty,
                                                        submitting: c.submitting,
                                                        errors: c.errors,
                                                        submitAttempts: c.submitAttempts,
                                                        form: l.unsafeModifyInputVariant(C)(D)(a)(H.value1)(c.form),
                                                        internal: c.internal
                                                      };
                                                    };
                                                  };

                                                  if (H.value0 instanceof f.Nothing || H.value0 instanceof f.Just) return O = O(g.identity(g.categoryFn))(E), e.bind(I.Bind1())(M(O))(function (a) {
                                                    return J(a);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [H.value0.constructor.name]);
                                                }

                                                if (H instanceof k.Reset) return J({
                                                  form: l.unsafeModifyInputVariant(C)(D)(g.identity(g.categoryFn))(H.value0)(E.form),
                                                  internal: d.over(k.newtypeInternalState)(k.newtypeInternalState)(k.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: a.initialInputs,
                                                      validators: a.validators
                                                    };
                                                  })(E.internal),
                                                  errors: E.errors,
                                                  dirty: E.dirty,
                                                  validity: E.validity,
                                                  submitAttempts: E.submitAttempts,
                                                  submitting: E.submitting
                                                });
                                                if (H instanceof k.SetAll) return J({
                                                  form: l.replaceFormFieldInputs()(u)(x)(D)(H.value0)(E.form),
                                                  internal: E.internal,
                                                  errors: E.errors,
                                                  dirty: E.dirty,
                                                  validity: E.validity,
                                                  submitAttempts: E.submitAttempts,
                                                  submitting: E.submitting
                                                });
                                                if (H instanceof k.ModifyAll) return J({
                                                  form: l.modifyAll()(v)(G)(D)(H.value0)(E.form),
                                                  internal: E.internal,
                                                  errors: E.errors,
                                                  dirty: E.dirty,
                                                  validity: E.validity,
                                                  submitAttempts: E.submitAttempts,
                                                  submitting: E.submitting
                                                });
                                                if (H instanceof k.ValidateAll) return e.bind(I.Bind1())(l.validateAll()(I)(z)(A)(D)(d.unwrap(k.newtypeInternalState)(E.internal).validators)(E.form))(function (a) {
                                                  return J({
                                                    form: a,
                                                    internal: E.internal,
                                                    errors: E.errors,
                                                    dirty: E.dirty,
                                                    validity: E.validity,
                                                    submitAttempts: E.submitAttempts,
                                                    submitting: E.submitting
                                                  });
                                                });
                                                if (H instanceof k.Submit) return M(E);
                                                if (H instanceof k.ResetAll) return b.pure(I.Applicative0())(h.Left.create({
                                                  validity: k.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: l.replaceFormFieldInputs()(u)(x)(D)(d.unwrap(k.newtypeInternalState)(E.internal).initialInputs)(E.form),
                                                  internal: d.over(k.newtypeInternalState)(k.newtypeInternalState)(k.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: a.initialInputs,
                                                      validators: a.validators
                                                    };
                                                  })(E.internal)
                                                }));
                                                if (H instanceof k.LoadForm) return b.pure(I.Applicative0())(h.Left.create({
                                                  validity: k.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: l.replaceFormFieldInputs()(u)(x)(D)(H.value0)(E.form),
                                                  internal: d.over(k.newtypeInternalState)(k.newtypeInternalState)(k.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: H.value0,
                                                      validators: a.validators
                                                    };
                                                  })(E.internal)
                                                }));
                                                if (H instanceof k.AndThen) return e.bind(I.Bind1())(m()()(a)(q)(n)(r)(t)(p)(u)(v)(z)(y)(x)(G)(D)(w)(A)(B)(C)(F)(I)(H.value0)(E))(function (c) {
                                                  if (c instanceof h.Left) return m()()(a)(q)(n)(r)(t)(p)(u)(v)(z)(y)(x)(G)(D)(w)(A)(B)(C)(F)(I)(H.value1)(c.value0);
                                                  if (c instanceof h.Right) return b.pure(I.Applicative0())(new h.Right(c.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [c.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [H.constructor.name]);
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

  a["Formless.Component"].eval = m;
})(PS);

(function (a) {
  a["Formless.Query"] = a["Formless.Query"] || {};
  var b = a["Formless.Query"],
      e = a["Data.Function"],
      g = a["Data.Maybe"],
      h = a["Data.Newtype"],
      c = a["Data.Variant"],
      f = a["Formless.Types.Form"],
      d = a["Formless.Types.Query"];
  b.submit = d.Submit.value;

  b.set = function (a) {
    return function (b) {
      return function (g) {
        return function (g) {
          return function (k) {
            return new d.Modify(h.wrap(b)(c.inj()(a)(g)(h.wrap(f.newtypeInputFunction)(e["const"](k)))));
          };
        };
      };
    };
  };

  b.setValidate = function (a) {
    return function (b) {
      return function (k) {
        return function (k) {
          return function (l) {
            return new d.ModifyValidate(g.Nothing.value, h.wrap(b)(c.inj()(a)(k)(h.wrap(f.newtypeInputFunction)(e["const"](l)))));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Formless.Retrieve"] = a["Formless.Retrieve"] || {};

  var b = a["Formless.Retrieve"],
      e = a["Data.Lens.Fold"],
      g = a["Data.Lens.Getter"],
      h = a["Data.Lens.Internal.Forget"],
      c = a["Data.Lens.Iso.Newtype"],
      f = a["Data.Lens.Record"],
      d = a["Data.Maybe.First"],
      l = a["Data.Symbol"],
      k = a["Formless.Data.FormFieldResult"],
      m = a["Formless.Types.Form"],
      r = function r(a) {
    return function (b) {
      return function (d) {
        return function (d) {
          return function (e) {
            var g = c._Newtype(b)(b)(e.Profunctor0()),
                h = f.prop(a)()()(d)(e),
                k = c._Newtype(m.newtypeFormField)(m.newtypeFormField)(e.Profunctor0());

            return function (a) {
              return g(h(k(a)));
            };
          };
        };
      };
    };
  },
      q = function q(a) {
    return function (c) {
      return function (b) {
        return function (b) {
          return function (d) {
            var e = r(a)(c)()(b)(d),
                g = f.prop(new l.IsSymbol(function () {
              return "input";
            }))()()(l.SProxy.value)(d);
            return function (a) {
              return e(g(a));
            };
          };
        };
      };
    };
  },
      t = function t(a) {
    return function (c) {
      return function (b) {
        return function (b) {
          return function (d) {
            var e = r(a)(c)()(b)(d),
                g = f.prop(new l.IsSymbol(function () {
              return "result";
            }))()()(l.SProxy.value)(d);
            return function (a) {
              return e(g(a));
            };
          };
        };
      };
    };
  },
      v = function v(a) {
    return function (c) {
      return function (b) {
        return function (b) {
          return function (d) {
            var e = t(a)(c)()(b)(d.Strong0()),
                f = k._Error(d.Choice1());

            return function (a) {
              return e(f(a));
            };
          };
        };
      };
    };
  };

  b.getInput = function (a) {
    return function (c) {
      return function (b) {
        return function (b) {
          return g.view(q(a)(c)()(b)(h.strongForget));
        };
      };
    };
  };

  b.getError = function (a) {
    return function (c) {
      return function (b) {
        return function (b) {
          return e.preview(v(a)(c)()(b)(h.wanderForget(d.monoidFirst)));
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Heterogeneous.Mapping"] = a["Heterogeneous.Mapping"] || {};

  var b = a["Heterogeneous.Mapping"],
      e = a["Control.Category"],
      g = a["Control.Semigroupoid"],
      h = a["Data.Symbol"],
      c = a["Record.Builder"],
      f = a["Type.Data.RowList"],
      d = function d(a) {
    this.mappingWithIndex = a;
  },
      l = function l(a) {
    this.mapRecordWithIndexBuilder = a;
  },
      k = function k(a) {
    this.hmap = a;
  };

  a = new l(function (a) {
    return function (a) {
      return e.identity(c.categoryBuilder);
    };
  });

  b.hmap = function (a) {
    return a.hmap;
  };

  b.Mapping = function (a) {
    this.mapping = a;
  };

  b.constMapping = function (a) {
    return new d(function (c) {
      return function (b) {
        return (0, a.mapping)(c);
      };
    });
  };

  b.hmapRecord = function (a) {
    return function (a) {
      return new k(function () {
        var b = (0, a.mapRecordWithIndexBuilder)(f.RLProxy.value);
        return function (a) {
          return c.build(b(a));
        };
      }());
    };
  };

  b.mapRecordWithIndexCons = function (a) {
    return function (b) {
      return function (d) {
        return function (e) {
          return function (e) {
            return new l(function (e) {
              return function (e) {
                return g.compose(c.semigroupoidBuilder)(c.modify()()(a)(h.SProxy.value)((0, b.mappingWithIndex)(e)(h.SProxy.value)))((0, d.mapRecordWithIndexBuilder)(f.RLProxy.value)(e));
              };
            });
          };
        };
      };
    };
  };

  b.mapRecordWithIndexNil = a;
})(PS);

(function (a) {
  a["Formless.Transform.Record"] = a["Formless.Transform.Record"] || {};

  var b = a["Formless.Transform.Record"],
      e = a["Data.Newtype"],
      g = a["Heterogeneous.Mapping"],
      h = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      c = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  b.unwrapOutputFields = function (a) {
    return function (b) {
      var d = g.hmap(b)(c.value),
          f = e.unwrap(a);
      return function (a) {
        return d(f(a));
      };
    };
  };

  b.wrapInputFields = function (a) {
    return function (c) {
      var b = e.wrap(a),
          d = g.hmap(c)(h.value);
      return function (a) {
        return b(d(a));
      };
    };
  };

  b.unwrapField = function (a) {
    return new g.Mapping(function (c) {
      return e.unwrap(a);
    });
  };

  b.wrapField = function (a) {
    return new g.Mapping(function (c) {
      return e.wrap(a);
    });
  };
})(PS);

(function (a) {
  a["Formless.Transform.Row"] = a["Formless.Transform.Row"] || {};

  var b = a["Formless.Transform.Row"],
      e = a["Control.Category"],
      g = a["Control.Semigroupoid"],
      h = a["Data.Symbol"],
      c = a["Formless.Internal.Transform"],
      f = a["Record.Builder"],
      d = a["Type.Data.RowList"],
      l = function l(a) {
    this.makeSProxiesBuilder = a;
  };

  a = new l(function (a) {
    return e.identity(f.categoryBuilder);
  });

  b.mkSProxies = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          b = (0, a.makeSProxiesBuilder)(d.RLProxy.value);
          return c.fromScratch(b);
        };
      };
    };
  };

  b.makeSProxiesNil = a;

  b.makeSProxiesCons = function (a) {
    return function (c) {
      return function (c) {
        return new l(function (b) {
          b = (0, c.makeSProxiesBuilder)(d.RLProxy.value);
          var e = f.insert()()(a)(h.SProxy.value)(h.SProxy.value);
          return g.compose(f.semigroupoidBuilder)(e)(b);
        });
      };
    };
  };
})(PS);

(function (a) {
  a._validateURL = function (a) {
    return function (b) {
      if (!b || !/^https?:\/\//.test(b)) return "Unknown or missing protocol format in url: " + b;
      var e = document.createElement("a");
      e.href = b;

      if (a) {
        if (e.username) return "URL " + b + " contains a username: " + e.username;
        if (e.password) return "URL " + b + " contains a password: " + e.password;
      }

      return /\.[^0-9.]/.test(e.hostname) ? /(\s|^\.|\.$)/.test(e.hostname) ? "Hostname '" + e.href + "' contains whitespace in " + b : e.href.toLowerCase().replace(/\/+$/g, "") !== b.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + b + " doesn't match parsed href " + e.href : "SUCCESS" : "Invalid hostname '" + e.href + "' in " + b;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};
  var b = a["Text.URL.Validate"],
      e = a["Text.URL.Validate"],
      g = a["Data.Either"],
      h = a["Data.Maybe"],
      c = a["Data.Show"],
      f = a["Data.String.NonEmpty.Internal"];
  a = new c.Show(function (a) {
    return c.show(f.showNonEmptyString)(a);
  });

  var d = function d(a) {
    return function (c) {
      var b = "SUCCESS" === c ? !0 : !1;

      if (b) {
        c = f.fromString(a);
        if (c instanceof h.Just) return new g.Right(c.value0);
        if (c instanceof h.Nothing) return new g.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [c.constructor.name]);
      }

      if (!b) return new g.Left(c);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [b.constructor.name]);
    };
  };

  b.parsePublicURL = function (a) {
    var c = e._validateURL(!0)(a);

    return d(a)(c);
  };

  b.urlToNEString = function (a) {
    return a;
  };

  b.urlToString = function (a) {
    return f.toString(a);
  };

  b.showURL = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var b = a["Metajelo.Types"],
      e = a["Data.Bounded"],
      g = a["Data.Enum"],
      h = a["Data.Eq"],
      c = a["Data.Generic.Rep"],
      f = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep.Enum"],
      l = a["Data.Generic.Rep.Eq"],
      k = a["Data.Generic.Rep.Ord"],
      m = a["Data.Generic.Rep.Show"],
      r = a["Data.Ord"],
      q = a["Data.Show"],
      t = a["Data.String.NonEmpty.Internal"],
      v = a["Data.Symbol"],
      n = a["Text.URL.Validate"],
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      C = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      B = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      G = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      D = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      J = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      K = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      S = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a = new q.Show(function (a) {
    if (a instanceof w) return "commercial";
    if (a instanceof A) return "non-profit";
    if (a instanceof F) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [a.constructor.name]);
  });
  var fa = new q.Show(function (a) {
    return "dataCustodian";
  }),
      U = new c.Generic(function (a) {
    if (a instanceof y) return new c.Inl(c.NoArguments.value);
    if (a instanceof x) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (a instanceof p) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (a instanceof u) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (a instanceof z) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (a instanceof C) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (a instanceof N) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (a instanceof B) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof c.Inl) return y.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inl) return x.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inl) return p.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inl) return u.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inl) return z.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inl) return C.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return N.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return B.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }),
      ha = new q.Show(function (a) {
    return a instanceof B ? "Terms of Use" : m.genericShow(U)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Access";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Collection";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Data";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Metadata";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Preservation";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Submission";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Quality";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(a);
  }),
      va = new c.Generic(function (a) {
    if (a instanceof G) return new c.Inl(a.value0);
    if (a instanceof D) return new c.Inr(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof c.Inl) return new G(a.value0);
    if (a instanceof c.Inr) return new D(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  });
  t = new q.Show(m.genericShow(va)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsArgument(t.showNonEmptyString))(new v.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(m.genericShowConstructor(m.genericShowArgsArgument(n.showURL))(new v.IsSymbol(function () {
    return "RefPolicy";
  })))));
  var Z = new c.Generic(function (a) {
    if (a instanceof w) return new c.Inl(c.NoArguments.value);
    if (a instanceof A) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (a instanceof F) return new c.Inr(new c.Inr(c.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof c.Inl) return w.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inl) return A.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr) return F.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }),
      V = new c.Generic(function (a) {
    return c.NoArguments.value;
  }, function (a) {
    return P.value;
  }),
      W = new c.Generic(function (a) {
    if (a instanceof L) return new c.Inl(c.NoArguments.value);
    if (a instanceof I) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (a instanceof H) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (a instanceof E) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (a instanceof J) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (a instanceof M) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (a instanceof O) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (a instanceof K) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))));
    if (a instanceof R) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))));
    if (a instanceof T) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))));
    if (a instanceof S) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))));
    if (a instanceof Q) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))));
    if (a instanceof aa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))));
    if (a instanceof Y) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))));
    if (a instanceof da) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))));
    if (a instanceof ca) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))));
    if (a instanceof ea) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))));
    if (a instanceof ba) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 73, column 1 - line 73, column 66): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof c.Inl) return L.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inl) return I.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inl) return H.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inl) return E.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inl) return J.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inl) return M.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return O.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return K.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return R.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return T.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return S.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Q.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return aa.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Y.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return da.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ca.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ea.value;
    if (a instanceof c.Inr && a.value0 instanceof c.Inr && a.value0.value0 instanceof c.Inr && a.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return ba.value;
    throw Error("Failed pattern match at Metajelo.Types (line 73, column 1 - line 73, column 66): " + [a.constructor.name]);
  });
  q = new q.Show(function (a) {
    return a instanceof I ? "arXiv" : a instanceof H ? "bibcode" : m.genericShow(W)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ARK";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ArXiv";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Bibcode";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "DOI";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "EAN13";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "EISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "Handle";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "IGSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ISBN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "ISTC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "LISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "LSID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "PMID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "PURL";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "UPC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "URL";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new v.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(a);
  });
  var ia = new h.Eq(l.genericEq(U)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))),
      la = new r.Ord(function () {
    return ia;
  }, function (a) {
    return function (c) {
      return k.genericCompare(U)(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdConstructor(k.genericOrdNoArguments)))))))))(a)(c);
    };
  }),
      wa = new h.Eq(l.genericEq(Z)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))),
      ma = new r.Ord(function () {
    return wa;
  }, function (a) {
    return function (c) {
      return k.genericCompare(Z)(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdConstructor(k.genericOrdNoArguments))))(a)(c);
    };
  }),
      X = new h.Eq(l.genericEq(V)(l.genericEqConstructor(l.genericEqNoArguments))),
      ja = new r.Ord(function () {
    return X;
  }, function (a) {
    return function (c) {
      return k.genericCompare(V)(k.genericOrdConstructor(k.genericOrdNoArguments))(a)(c);
    };
  }),
      na = new h.Eq(l.genericEq(W)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))))))),
      ka = new r.Ord(function () {
    return na;
  }, function (a) {
    return function (c) {
      return k.genericCompare(W)(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdSum(k.genericOrdConstructor(k.genericOrdNoArguments))(k.genericOrdConstructor(k.genericOrdNoArguments)))))))))))))))))))(a)(c);
    };
  }),
      oa = new g.Enum(function () {
    return la;
  }, d.genericPred(U)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), d.genericSucc(U)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      pa = new g.Enum(function () {
    return ma;
  }, d.genericPred(Z)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), d.genericSucc(Z)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      qa = new g.Enum(function () {
    return ja;
  }, d.genericPred(V)(d.genericEnumConstructor(d.genericEnumNoArguments)), d.genericSucc(V)(d.genericEnumConstructor(d.genericEnumNoArguments))),
      xa = new g.Enum(function () {
    return ka;
  }, d.genericPred(W)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), d.genericSucc(W)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      ra = new e.Bounded(function () {
    return la;
  }, f.genericBottom(U)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(U)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))))))));
  h = new g.SmallBounded(function () {
    return ra;
  });
  var sa = new e.Bounded(function () {
    return ma;
  }, f.genericBottom(Z)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(Z)(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))),
      ta = new e.Bounded(function () {
    return ja;
  }, f.genericBottom(V)(f.genericBottomConstructor(f.genericBottomNoArguments)), f.genericTop(V)(f.genericTopConstructor(f.genericTopNoArguments)));
  l = new g.SmallBounded(function () {
    return ta;
  });
  var ua = new e.Bounded(function () {
    return ka;
  }, f.genericBottom(W)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(W)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))))))))))))))))));
  e = new g.BoundedEnum(function () {
    return ra;
  }, function () {
    return oa;
  }, d.genericCardinality(U)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericFromEnum(U)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericToEnum(U)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))));
  f = new g.BoundedEnum(function () {
    return sa;
  }, function () {
    return pa;
  }, d.genericCardinality(Z)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericFromEnum(Z)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericToEnum(Z)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))));
  r = new g.BoundedEnum(function () {
    return ta;
  }, function () {
    return qa;
  }, d.genericCardinality(V)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericFromEnum(V)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericToEnum(V)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)));
  g = new g.BoundedEnum(function () {
    return ua;
  }, function () {
    return xa;
  }, d.genericCardinality(W)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(W)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(W)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));
  b.ARK = L;
  b.ArXiv = I;
  b.Bibcode = H;
  b.DOI = E;
  b.EAN13 = J;
  b.EISSN = M;
  b.Handle = O;
  b.IGSN = K;
  b.ISBN = R;
  b.ISSN = T;
  b.ISTC = S;
  b.LISSN = Q;
  b.LSID = aa;
  b.PMID = Y;
  b.PURL = da;
  b.UPC = ca;
  b.URL = ea;
  b.URN = ba;
  b.Commercial = w;
  b.NonProfit = A;
  b.Governmental = F;
  b.DataCustodian = P;
  b.Access = y;
  b.Collection = x;
  b.Data = p;
  b.Metadata = u;
  b.Preservation = z;
  b.Submission = C;
  b.Quality = N;
  b.TermsOfUse = B;
  b.FreeTextPolicy = G;
  b.RefPolicy = D;
  b.showIdentifierType = q;
  b.boundedEnumIdentifierType = g;
  b.showInstitutionType = a;
  b.boundedEnumInstitutionType = f;
  b.eqInstitutionContactType = X;
  b.showInstitutionContactType = fa;
  b.boundedEnumInstitutionContactType = r;
  b.smallBoundedInstitutionContactType = l;
  b.showPolicyType = ha;
  b.eqPolicyType = ia;
  b.boundedEnumPolicyType = e;
  b.smallBoundedPolicyType = h;
  b.showPolicy = t;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var b = a["Text.Parsing.StringParser"],
      e = a["Control.Alt"],
      g = a["Control.Alternative"],
      h = a["Control.Applicative"],
      c = a["Control.Apply"],
      f = a["Control.Bind"],
      d = a["Control.Monad"],
      l = a["Control.Monad.Rec.Class"],
      k = a["Control.Plus"],
      m = a["Data.Bifunctor"],
      r = a["Data.Boolean"],
      q = a["Data.Either"],
      t = a["Data.Functor"];
  a = a["Data.Show"];

  var v = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }();

  a = new a.Show(function (a) {
    return a.value0;
  });

  var n = new t.Functor(function (a) {
    return function (c) {
      var b = t.map(q.functorEither)(function (c) {
        return {
          result: a(c.result),
          suffix: c.suffix
        };
      });
      return function (a) {
        return b(c(a));
      };
    };
  }),
      y = function y(a) {
    return function (c) {
      return new q.Left({
        pos: c.pos,
        error: new v(a)
      });
    };
  },
      x = new c.Apply(function () {
    return n;
  }, function (a) {
    return function (c) {
      return function (b) {
        return f.bind(q.bindEither)(a(b))(function (a) {
          return f.bind(q.bindEither)(c(a.suffix))(function (c) {
            return h.pure(q.applicativeEither)({
              result: a.result(c.result),
              suffix: c.suffix
            });
          });
        });
      };
    };
  }),
      p = new f.Bind(function () {
    return x;
  }, function (a) {
    return function (c) {
      return function (b) {
        return f.bind(q.bindEither)(a(b))(function (a) {
          return c(a.result)(a.suffix);
        });
      };
    };
  }),
      u = new h.Applicative(function () {
    return x;
  }, function (a) {
    return function (c) {
      return new q.Right({
        result: a,
        suffix: c
      });
    };
  }),
      z = new d.Monad(function () {
    return u;
  }, function () {
    return p;
  });

  c = new l.MonadRec(function () {
    return z;
  }, function (a) {
    return function (c) {
      var b = function b(a) {
        if (a.result instanceof l.Loop) return new l.Loop({
          state: a.result.value0,
          str: a.suffix
        });
        if (a.result instanceof l.Done) return new l.Done({
          result: a.result.value0,
          suffix: a.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [a.constructor.name]);
      };

      return function (d) {
        return l.tailRecM(l.monadRecEither)(function (c) {
          return t.map(q.functorEither)(b)(a(c.state)(c.str));
        })({
          state: c,
          str: d
        });
      };
    };
  });
  var C = new e.Alt(function () {
    return n;
  }, function (a) {
    return function (c) {
      return function (b) {
        var d = a(b);

        if (d instanceof q.Left) {
          if (b.pos === d.value0.pos) return c(b);
          if (r.otherwise) return new q.Left({
            error: d.value0.error,
            pos: d.value0.pos
          });
        }

        return d;
      };
    };
  }),
      N = new k.Plus(function () {
    return C;
  }, y("No alternative"));
  e = new g.Alternative(function () {
    return u;
  }, function () {
    return N;
  });
  b.ParseError = v;

  b.runParser = function (a) {
    return function (c) {
      return m.bimap(q.bifunctorEither)(function (a) {
        return a.error;
      })(function (a) {
        return a.result;
      })(a({
        str: c,
        pos: 0
      }));
    };
  };

  b.fail = y;

  b["try"] = function (a) {
    return function (c) {
      return m.lmap(q.bifunctorEither)(function (a) {
        return {
          pos: c.pos,
          error: a.error
        };
      })(a(c));
    };
  };

  b.showParseError = a;
  b.functorParser = n;
  b.applyParser = x;
  b.applicativeParser = u;
  b.altParser = C;
  b.alternativeParser = e;
  b.bindParser = p;
  b.monadRecParser = c;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var b = a["Text.Parsing.StringParser.Combinators"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      h = a["Control.Apply"],
      c = a["Control.Bind"],
      f = a["Data.Functor"],
      d = a["Data.NonEmpty"],
      l = a["Data.Unit"],
      k = a["Text.Parsing.StringParser"],
      m = a["Data.List"].manyRec(k.monadRecParser)(k.alternativeParser),
      r = function r(a) {
    return function (c) {
      return new d.NonEmpty(a, c);
    };
  };

  b.many = m;

  b.many1 = function (a) {
    return h.apply(k.applyParser)(f.map(k.functorParser)(r)(a))(m(a));
  };

  b.withError = function (a) {
    return function (c) {
      return e.alt(k.altParser)(a)(k.fail(c));
    };
  };

  b.optional = function (a) {
    return e.alt(k.altParser)(c.bind(k.bindParser)(a)(function (a) {
      return g.pure(k.applicativeParser)(l.unit);
    }))(g.pure(k.applicativeParser)(l.unit));
  };

  b.sepBy1 = function (a) {
    return function (b) {
      return c.bind(k.bindParser)(a)(function (d) {
        return c.bind(k.bindParser)(m(h.applySecond(k.applyParser)(b)(a)))(function (a) {
          return g.pure(k.applicativeParser)(r(d)(a));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var b = a["Text.Parsing.StringParser.CodePoints"],
      e = a["Control.Applicative"],
      g = a["Control.Bind"],
      h = a["Data.Either"],
      c = a["Data.Maybe"],
      f = a["Data.Show"],
      d = a["Data.String.CodePoints"],
      l = a["Data.String.CodeUnits"],
      k = a["Data.Unit"],
      m = a["Text.Parsing.StringParser"],
      r = a["Text.Parsing.StringParser.Combinators"],
      q = function q(a) {
    var b = l.charAt(a.pos)(a.str);
    if (b instanceof c.Just) return new h.Right({
      result: b.value0,
      suffix: {
        str: a.str,
        pos: a.pos + 1 | 0
      }
    });
    if (b instanceof c.Nothing) return new h.Left({
      pos: a.pos,
      error: new m.ParseError("Unexpected EOF")
    });
    throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 51, column 3 - line 53, column 64): " + [b.constructor.name]);
  },
      t = function t(a) {
    return m["try"](g.bind(m.bindParser)(q)(function (c) {
      return a(c) ? e.pure(m.applicativeParser)(c) : m.fail("Character " + (f.show(f.showChar)(c) + " did not satisfy predicate"));
    }));
  };

  b.eof = function (a) {
    return a.pos < d.length(a.str) ? new h.Left({
      pos: a.pos,
      error: new m.ParseError("Expected EOF")
    }) : new h.Right({
      result: k.unit,
      suffix: a
    });
  };

  b.satisfy = t;

  b["char"] = function (a) {
    return r.withError(t(function (c) {
      return c === a;
    }))("Could not match character " + f.show(f.showChar)(a));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var b = a["Text.Email.Parser"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      h = a["Control.Apply"],
      c = a["Control.Bind"],
      f = a["Data.Char"],
      d = a["Data.Foldable"],
      l = a["Data.Functor"],
      k = a["Data.List.Types"],
      m = a["Data.Maybe"],
      r = a["Data.Monoid"],
      q = a["Data.String.CodeUnits"],
      t = a["Data.String.Pattern"],
      v = a["Data.Unit"],
      n = a["Text.Parsing.StringParser"],
      y = a["Text.Parsing.StringParser.CodePoints"],
      x = a["Text.Parsing.StringParser.Combinators"],
      p = function (a) {
    var c = m.fromJust();
    return function (a) {
      return c(f.fromCharCode(a));
    };
  }(),
      u = function u(a) {
    return l.map(n.functorParser)(function () {
      var a = d.fold(k.foldableNonEmptyList)(r.monoidString),
          c = l.map(k.functorNonEmptyList)(q.singleton);
      return function (b) {
        return a(c(b));
      };
    }())(x.many1(y.satisfy(a)));
  },
      z = function z(a) {
    return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(a))(function () {
      return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(C(a)))(function () {
        return g.pure(n.applicativeParser)(v.unit);
      });
    });
  },
      C = function C(a) {
    return e.alt(n.altParser)(z(a))(g.pure(n.applicativeParser)(v.unit));
  },
      N = function N(a) {
    return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y.satisfy(a)))(function () {
      return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(C(y.satisfy(a))))(function () {
        return g.pure(n.applicativeParser)(v.unit);
      });
    });
  },
      B = y["char"](p(0)),
      G = y["char"]("\n");

  a = function a(_a12) {
    return " " === _a12 || "\t" === _a12;
  };

  var D = y.satisfy(a),
      w = N(a),
      A = function A(a) {
    return function (c) {
      return function (b) {
        return b >= a && b <= c;
      };
    };
  };

  a = A(p(33))(p(126));

  var F = y.satisfy(a),
      P = function P(a) {
    return function (c) {
      return q.contains(t.Pattern(q.singleton(c)))(a);
    };
  },
      L = function L(a) {
    return A(p(1))(p(8))(a) || A(p(14))(p(31))(a) || P("\x0B\f\x7F")(a);
  },
      I = function I(a) {
    return A(p(33))(p(39))(a) || A(p(42))(p(91))(a) || A(p(93))(p(126))(a) || L(a);
  },
      H = function H(a) {
    return A(p(33))(p(90))(a) || A(p(94))(p(126))(a) || L(a);
  },
      E = y.satisfy(L),
      J = y["char"]("\r"),
      M = l["void"](n.functorParser)(h.applySecond(n.applyParser)(J)(G)),
      O = function () {
    var a = z(h.applySecond(n.applyParser)(M)(w)),
        c = h.applySecond(n.applyParser)(w)(x.optional(h.applySecond(n.applyParser)(M)(w)));
    return e.alt(n.altParser)(c)(a);
  }(),
      K = function () {
    var a = c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y["char"]("\\")))(function () {
      return e.alt(n.altParser)(e.alt(n.altParser)(e.alt(n.altParser)(e.alt(n.altParser)(e.alt(n.altParser)(F)(D))(G))(J))(E))(B);
    });
    return c.bind(n.bindParser)(a)(function (a) {
      return g.pure(n.applicativeParser)("\\" + q.singleton(a));
    });
  }(),
      R = e.alt(n.altParser)(u(function (a) {
    return P(q.singleton(p(33)))(a) || A(p(35))(p(91))(a) || A(p(93))(p(126))(a) || L(a);
  }))(K),
      T = function () {
    var a = c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y["char"]('"')))(function () {
      return c.bind(n.bindParser)(x.many(h.applySecond(n.applyParser)(x.optional(O))(R)))(function (a) {
        return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(x.optional(O)))(function () {
          return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y["char"]('"')))(function () {
            return g.pure(n.applicativeParser)(a);
          });
        });
      });
    });
    return l.map(n.functorParser)(function (a) {
      return '"' + (d.fold(k.foldableList)(r.monoidString)(a) + '"');
    })(a);
  }(),
      S = c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y["char"]("(")))(function () {
    return c.discard(c.discardUnit)(n.bindParser)(C(e.alt(n.altParser)(e.alt(n.altParser)(e.alt(n.altParser)(N(I))(l["void"](n.functorParser)(K)))(S))(O)))(function () {
      return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y["char"](")")))(function () {
        return g.pure(n.applicativeParser)(v.unit);
      });
    });
  }),
      Q = C(e.alt(n.altParser)(S)(O));

  a = c.discard(c.discardUnit)(n.bindParser)(x.optional(Q))(function () {
    return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y["char"]("[")))(function () {
      return c.bind(n.bindParser)(x.many(h.applySecond(n.applyParser)(x.optional(O))(u(H))))(function (a) {
        return c.discard(c.discardUnit)(n.bindParser)(x.optional(O))(function () {
          return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(y["char"]("]")))(function () {
            return c.discard(c.discardUnit)(n.bindParser)(x.optional(Q))(function () {
              return g.pure(n.applicativeParser)("[" + (d.fold(k.foldableList)(r.monoidString)(a) + "]"));
            });
          });
        });
      });
    });
  });

  var aa = function () {
    return u(function (a) {
      return "0" <= a && "9" >= a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a || P("!#$%&'*+/=?^_`{|}~-")(a);
    });
  }(),
      Y = function () {
    var a = c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(x.optional(Q)))(function () {
      return c.bind(n.bindParser)(e.alt(n.altParser)(aa)(T))(function (a) {
        return c.discard(c.discardUnit)(n.bindParser)(l["void"](n.functorParser)(x.optional(Q)))(function () {
          return g.pure(n.applicativeParser)(a);
        });
      });
    });
    a = x.sepBy1(a)(y["char"]("."));
    return l.map(n.functorParser)(d.intercalate(k.foldableNonEmptyList)(r.monoidString)("."))(a);
  }(),
      da = e.alt(n.altParser)(Y)(a);

  a = c.bind(n.bindParser)(Y)(function (a) {
    return c.bind(n.bindParser)(y["char"]("@"))(function (b) {
      return c.bind(n.bindParser)(da)(function (b) {
        return c.bind(n.bindParser)(y.eof)(function (c) {
          return g.pure(n.applicativeParser)({
            localPart: a,
            domainPart: b
          });
        });
      });
    });
  });
  b.addrSpec = a;

  b.toString = function (a) {
    return a.localPart + ("@" + a.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var b = a["Text.Email.Validate"],
      e = a["Data.Bifunctor"],
      g = a["Data.Either"],
      h = a["Data.Show"],
      c = a["Text.Email.Parser"],
      f = a["Text.Parsing.StringParser"];

  a = function () {
    var a = e.lmap(g.bifunctorEither)(h.show(f.showParseError));
    return function (b) {
      b = f.runParser(c.addrSpec)(b);
      return a(b);
    };
  }();

  b.validate = a;
})(PS);

(function (a) {
  a["Metajelo.Validation"] = a["Metajelo.Validation"] || {};

  var b = a["Metajelo.Validation"],
      e = a["Control.Category"],
      g = a["Data.Bifunctor"],
      h = a["Data.Either"],
      c = a["Data.Maybe"],
      f = a["Data.Show"],
      d = a["Data.String.Common"],
      l = a["Data.String.NonEmpty.Internal"],
      k = a["Formless.Validation"],
      m = a["Text.Email.Validate"],
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      q = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      t = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      v = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      n = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      y = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      x = function () {
    function a(a, c) {
      this.value0 = a;
      this.value1 = c;
    }

    a.create = function (c) {
      return function (b) {
        return new a(c, b);
      };
    };

    return a;
  }(),
      p = function p(a) {
    this.toText = a;
  };

  a = new p(e.identity(e.categoryFn));
  p = new p(function (a) {
    if (a instanceof r) return "This field is required.";
    if (a instanceof t) return "Invalid input: " + a.value0;
    if (a instanceof q) return "Email validation error: " + a.value0;
    if (a instanceof v) return "You must enter at least " + (f.show(f.showInt)(a.value0) + " characters.");
    if (a instanceof n) return "You must enter less than " + (f.show(f.showInt)(a.value0) + " characters.");
    if (a instanceof y) return 'Could not parse "' + (a.value0 + '" to a valid integer.');
    if (a instanceof x) return 'This field contains "' + (a.value1 + ('" but must be equal to "' + (a.value0 + '" to validate.')));
    throw Error("Failed pattern match at Metajelo.Validation (line 35, column 1 - line 42, column 126): " + [a.constructor.name]);
  });

  b.toText = function (a) {
    return a.toText;
  };

  b.dummy = function (a) {
    return k.hoistFn_(a)(e.identity(e.categoryFn));
  };

  b.emailFormat = function (a) {
    return k.hoistFnE_(a)(function (a) {
      return g.lmap(h.bifunctorEither)(function (a) {
        return new q(a);
      })(m.validate(a));
    });
  };

  b.readNEStringEi = function (a) {
    a = l.fromString(d.trim(a));
    if (a instanceof c.Just) return new h.Right(a.value0);
    if (a instanceof c.Nothing) return new h.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [a.constructor.name]);
  };

  b.toTextFieldError = p;
  b.toTextString = a;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};
  var b = a["Metajelo.XPaths.Read"],
      e = a["Control.Applicative"],
      g = a["Data.Either"],
      h = a["Data.Maybe"],
      c = a["Metajelo.Types"];

  b.readIdentifierType = function (a) {
    return "ARK" === a ? e.pure(g.applicativeEither)(c.ARK.value) : "arXiv" === a ? e.pure(g.applicativeEither)(c.ArXiv.value) : "bibcode" === a ? e.pure(g.applicativeEither)(c.Bibcode.value) : "DOI" === a ? e.pure(g.applicativeEither)(c.DOI.value) : "EAN13" === a ? e.pure(g.applicativeEither)(c.EAN13.value) : "EISSN" === a ? e.pure(g.applicativeEither)(c.EISSN.value) : "Handle" === a ? e.pure(g.applicativeEither)(c.Handle.value) : "IGSN" === a ? e.pure(g.applicativeEither)(c.IGSN.value) : "ISBN" === a ? e.pure(g.applicativeEither)(c.ISBN.value) : "ISSN" === a ? e.pure(g.applicativeEither)(c.ISSN.value) : "ISTC" === a ? e.pure(g.applicativeEither)(c.ISTC.value) : "LISSN" === a ? e.pure(g.applicativeEither)(c.LISSN.value) : "LSID" === a ? e.pure(g.applicativeEither)(c.LSID.value) : "PMID" === a ? e.pure(g.applicativeEither)(c.PMID.value) : "PURL" === a ? e.pure(g.applicativeEither)(c.PURL.value) : "UPC" === a ? e.pure(g.applicativeEither)(c.UPC.value) : "URL" === a ? e.pure(g.applicativeEither)(c.URL.value) : "URN" === a ? e.pure(g.applicativeEither)(c.URN.value) : g.Left.create("Unknown IdentifierType: '" + (a + "'"));
  };

  b.readInstitutionType = function (a) {
    return "commercial" === a ? e.pure(g.applicativeEither)(c.Commercial.value) : "non-profit" === a ? e.pure(g.applicativeEither)(c.NonProfit.value) : "governmental" === a ? e.pure(g.applicativeEither)(c.Governmental.value) : g.Left.create("Unknown InstitutionType: '" + (a + "'"));
  };

  b.readInstitutionContactType = function (a) {
    return "dataCustodian" === a ? e.pure(g.applicativeEither)(new h.Just(c.DataCustodian.value)) : "" === a ? e.pure(g.applicativeEither)(h.Nothing.value) : g.Left.create("Unknown InstitutionContactType: '" + (a + "'"));
  };

  b.readPolicyType = function (a) {
    return "Access" === a ? e.pure(g.applicativeEither)(new h.Just(c.Access.value)) : "Collection" === a ? e.pure(g.applicativeEither)(new h.Just(c.Collection.value)) : "Data" === a ? e.pure(g.applicativeEither)(new h.Just(c.Data.value)) : "Metadata" === a ? e.pure(g.applicativeEither)(new h.Just(c.Metadata.value)) : "Preservation" === a ? e.pure(g.applicativeEither)(new h.Just(c.Preservation.value)) : "Submission" === a ? e.pure(g.applicativeEither)(new h.Just(c.Submission.value)) : "Quality" === a ? e.pure(g.applicativeEither)(new h.Just(c.Quality.value)) : "Terms of Use" === a ? e.pure(g.applicativeEither)(new h.Just(c.TermsOfUse.value)) : "" === a ? e.pure(g.applicativeEither)(h.Nothing.value) : g.Left.create("Unknown PolicyType: '" + (a + "'"));
  };

  b.readBoolean = function (a) {
    return "0" === a ? e.pure(g.applicativeEither)(!1) : "1" === a ? e.pure(g.applicativeEither)(!0) : "false" === a ? e.pure(g.applicativeEither)(!1) : "true" === a ? e.pure(g.applicativeEither)(!0) : g.Left.create("Invalid xs:boolean value: '" + (a + "'"));
  };
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var b = a["Metajelo.FormUtil"],
      e = a["Concur.Core.FRP"],
      g = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      c = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      l = a["Control.Applicative"],
      k = a["Control.Bind"],
      m = a["Control.Cofree"],
      r = a["Data.Array"],
      q = a["Data.Array.NonEmpty"],
      t = a["Data.Bounded"],
      v = a["Data.Either"],
      n = a["Data.Enum"],
      y = a["Data.Eq"],
      x = a["Data.Foldable"],
      p = a["Data.Functor"],
      u = a["Data.Generic.Rep"],
      z = a["Data.Generic.Rep.Bounded"],
      C = a["Data.Generic.Rep.Enum"],
      N = a["Data.Generic.Rep.Eq"],
      B = a["Data.Generic.Rep.Ord"],
      G = a["Data.Generic.Rep.Show"],
      D = a["Data.Maybe"],
      w = a["Data.Monoid"],
      A = a["Data.Ord"],
      F = a["Data.Profunctor.Strong"],
      P = a["Data.Semigroup"],
      L = a["Data.Show"],
      I = a["Data.String.Common"],
      H = a["Data.String.NonEmpty.Internal"],
      E = a["Data.Symbol"],
      J = a["Data.Traversable"],
      M = a["Data.Tuple"],
      O = a["Data.Unfoldable1"],
      K = a["Formless.Internal.Transform"],
      R = a["Formless.Query"],
      T = a["Formless.Retrieve"],
      S = a["Formless.Types.Query"],
      Q = a["Metajelo.Types"],
      aa = a["Metajelo.Validation"],
      Y = a["Metajelo.XPaths.Read"],
      da = a["Text.URL.Validate"],
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ba = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      fa = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (c) {
      return new a(c);
    };

    return a;
  }(),
      U = function U(a, c, b) {
    this.fromOptionValue = a;
    this.toOptionLabel = c;
    this.toOptionValue = b;
  },
      ha = function ha(a) {
    if (a instanceof ba || a instanceof fa) return a.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 255, column 1 - line 255, column 34): " + [a.constructor.name]);
  },
      va = function va(a) {
    return k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(a)(function (a) {
      return l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(H.fromString(I.trim(a)));
    });
  },
      Z = function Z(a) {
    return "FreeTextPolicy" === a ? l.pure(v.applicativeEither)(ca.value) : "RefPolicy" === a ? l.pure(v.applicativeEither)(ea.value) : v.Left.create("Unknown Policy: '" + (a + "'"));
  },
      V = function V(a) {
    return function (c) {
      return x.fold(x.foldableMaybe)(w.monoidString)(p.map(D.functorMaybe)(L.show(a))(c));
    };
  },
      W = function W(a) {
    return function (b) {
      return k.discard(k.discardUnit)(m.bindCofree(c.widgetAlternative(w.monoidArray)))(e.display(a))(function () {
        return b;
      });
    };
  },
      ia = function ia(a) {
    return function (b) {
      return function (d) {
        return W(a(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([f.text(g.widgetLiftWidget)(b)]))(d);
      };
    };
  },
      la = function la(a) {
    return function (b) {
      return function (m) {
        var n = function n(a) {
          return e.step(a)(k.bind(c.widgetBind)(f.input(g.widgetLiftWidget)([p.map(h.functorProps)(d.unsafeTargetValue)(d.onChange)]))(function (a) {
            return l.pure(c.widgetApplicative)(n(a));
          }));
        };

        return ia(function (c) {
          return function (b) {
            return a(c)(b);
          };
        })(b)(n(m));
      };
    };
  };

  a = new U(function (a) {
    return D.fromJust()(v.hush(Y.readInstitutionType(a)));
  }, L.show(Q.showInstitutionType), L.show(Q.showInstitutionType));

  var wa = new U(function (a) {
    return D.fromJust()(v.hush(Y.readIdentifierType(a)));
  }, L.show(Q.showIdentifierType), L.show(Q.showIdentifierType)),
      ma = function ma(a) {
    return a instanceof ba ? !0 : !1;
  },
      X = new u.Generic(function (a) {
    if (a instanceof ca) return new u.Inl(u.NoArguments.value);
    if (a instanceof ea) return new u.Inr(u.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 203, column 1 - line 203, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof u.Inl) return ca.value;
    if (a instanceof u.Inr) return ea.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 203, column 1 - line 203, column 58): " + [a.constructor.name]);
  });

  G = new L.Show(G.genericShow(X)(G.genericShowSum(G.genericShowConstructor(G.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(G.genericShowConstructor(G.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "RefPolicy";
  })))));
  G = new U(function () {
    var a = D.fromMaybe(ca.value);
    return function (c) {
      return a(v.hush(Z(c)));
    };
  }(), L.show(G), L.show(G));

  var ja = function ja(a) {
    return function (b) {
      return function (m) {
        return e.step(m)(k.bind(c.widgetBind)(f.select(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([d.defaultValue(D.maybe("")(b.toOptionValue)(m)), p.map(h.functorProps)(function () {
          var a = b.fromOptionValue;
          return function (c) {
            return a(d.unsafeTargetValue(c));
          };
        }())(d.onChange)])(p.mapFlipped(p.functorArray)(n.upFromIncluding(a.Enum1())(O.unfoldable1Array)(t.bottom(a.Bounded0())))(function (a) {
          return f.option(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([d.value((0, b.toOptionValue)(a))])([f.text(g.widgetLiftWidget)((0, b.toOptionLabel)(a))]);
        })))(function (d) {
          return l.pure(c.widgetApplicative)(ja(a)(b)(new D.Just(d)));
        }));
      };
    };
  },
      na = function na(a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (e) {
            return x.fold(a)(b)(p.map(c)(d)(e));
          };
        };
      };
    };
  },
      ka = function ka(a) {
    return function (c) {
      return function (b) {
        return va(la(function (c) {
          return function (b) {
            return a(c)(b);
          };
        })(c)(na(x.foldableMaybe)(D.functorMaybe)(w.monoidString)(H.toString)(b)));
      };
    };
  },
      oa = function oa(a) {
    return D.maybe(w.mempty(c.widgetMonoid(w.monoidArray)))(function (b) {
      return f.div(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([d.style({
        color: "red"
      })])([f.text(g.widgetLiftWidget)(aa.toText(a)(b))]);
    });
  },
      pa = new y.Eq(N.genericEq(X)(N.genericEqSum(N.genericEqConstructor(N.genericEqNoArguments))(N.genericEqConstructor(N.genericEqNoArguments)))),
      qa = new A.Ord(function () {
    return pa;
  }, function (a) {
    return function (c) {
      return B.genericCompare(X)(B.genericOrdSum(B.genericOrdConstructor(B.genericOrdNoArguments))(B.genericOrdConstructor(B.genericOrdNoArguments)))(a)(c);
    };
  }),
      xa = new n.Enum(function () {
    return qa;
  }, C.genericPred(X)(C.genericEnumSum(C.genericEnumConstructor(C.genericEnumNoArguments))(z.genericTopConstructor(z.genericTopNoArguments))(C.genericEnumConstructor(C.genericEnumNoArguments))(z.genericBottomConstructor(z.genericBottomNoArguments))), C.genericSucc(X)(C.genericEnumSum(C.genericEnumConstructor(C.genericEnumNoArguments))(z.genericTopConstructor(z.genericTopNoArguments))(C.genericEnumConstructor(C.genericEnumNoArguments))(z.genericBottomConstructor(z.genericBottomNoArguments))));

  E = function E(a) {
    return function (c) {
      return c instanceof D.Nothing ? "(None)" : V(a)(c);
    };
  };

  y = new U(function (a) {
    return v.hush(Y.readBoolean(a));
  }, E(L.showBoolean), V(L.showBoolean));
  N = new U(function () {
    var a = k.join(D.bindMaybe);
    return function (c) {
      return a(v.hush(Y.readInstitutionContactType(c)));
    };
  }(), E(Q.showInstitutionContactType), V(Q.showInstitutionContactType));
  Q = new U(function () {
    var a = k.join(D.bindMaybe);
    return function (c) {
      return a(v.hush(Y.readPolicyType(c)));
    };
  }(), E(Q.showPolicyType), V(Q.showPolicyType));

  var ra = function ra(a) {
    return p.voidRight(c.widgetFunctor)(!a)(f.input(g.widgetLiftWidget)([d._type("checkbox"), d.checked(a), d.onChange]));
  },
      sa = function sa(a) {
    var b = ra(a);
    return e.step(a)(k.bind(c.widgetBind)(b)(function (a) {
      return l.pure(c.widgetApplicative)(sa(a));
    }));
  },
      ta = new t.Bounded(function () {
    return qa;
  }, z.genericBottom(X)(z.genericBottomSum(z.genericBottomConstructor(z.genericBottomNoArguments))), z.genericTop(X)(z.genericTopSum(z.genericTopConstructor(z.genericTopNoArguments))));

  z = new n.BoundedEnum(function () {
    return ta;
  }, function () {
    return xa;
  }, C.genericCardinality(X)(C.genericBoundedEnumSum(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))), C.genericFromEnum(X)(C.genericBoundedEnumSum(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))), C.genericToEnum(X)(C.genericBoundedEnumSum(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))));

  var ua = function ua(a) {
    return function (b) {
      var h = M.snd(b),
          n = M.fst(b),
          q = new ba(D.Nothing.value);

      b = function () {
        var a = A.max(A.ordInt)(0)(n - r.length(h) | 0);
        a = 1 > a ? [] : r.range(1)(a);
        return P.append(P.semigroupArray)(p.map(p.functorArray)(function (a) {
          return ba.create(D.Just.create(a));
        })(h))(p.mapFlipped(p.functorArray)(a)(function (a) {
          return q;
        }));
      }();

      var t = function t(a) {
        return e.step(a)(k.bind(c.widgetBind)(p.voidRight(c.widgetFunctor)(fa.create(ha(a)))(f.button(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([d.onClick])([f.text(g.widgetLiftWidget)("Delete")])))(function (a) {
          return l.pure(c.widgetApplicative)(t(a));
        }));
      },
          u = function u(b) {
        return f.li_(m.shiftMapCofree(w.monoidArray))([])(k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(a(ha(b)))(function (a) {
          return k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(t(new ba(a)))(function (a) {
            return l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(a);
          });
        }));
      },
          v = function v(a) {
        if (a instanceof fa) return e.step(new fa(D.Nothing.value))(w.mempty(c.widgetMonoid(w.monoidArray)));
        if (a instanceof ba) return u(a);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 278, column 23 - line 280, column 35): " + [a.constructor.name]);
      };

      return f.div_(m.shiftMapCofree(w.monoidArray))([])(k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(function (a) {
        return function (b) {
          return e.loopS(w.monoidArray)(new M.Tuple(a, b))(function (a) {
            return f.div_(m.shiftMapCofree(w.monoidArray))([])(function () {
              M.fst(a);
              var b = M.snd(a);
              return k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(e.step(0)(p.voidRight(c.widgetFunctor)(l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(1))(f.button(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([d.onClick])([f.text(g.widgetLiftWidget)("Add item")]))))(function (a) {
                return k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(J.traverse(J.traversableArray)(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(v)(b))(function (b) {
                  var d = r.filter(ma)(b),
                      e = r.length(d) + a | 0;
                  b = A.max(A.ordInt)(0)(a);
                  return k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(J.traverse(J.traversableArray)(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(u)(r.replicate(b)(q)))(function (a) {
                    return l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(M.Tuple.create(e)(P.append(P.semigroupArray)(d)(a)));
                  });
                });
              });
            }());
          });
        };
      }(n)(b))(function (a) {
        return l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(F.second(F.strongFn)(function () {
          var a = p.map(p.functorArray)(ha);
          return function (c) {
            return r.catMaybes(a(c));
          };
        }())(a));
      }));
    };
  };

  b.menu = function (a) {
    return function (b) {
      return function (e) {
        return function (k) {
          return function (l) {
            return function (l) {
              return function (m) {
                return function (m) {
                  return function (q) {
                    return f.select(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([d.defaultValue((0, b.toOptionValue)(T.getInput(a)(k)()(q)(m))), p.map(h.functorProps)(function () {
                      var c = R.set(a)(l)()(q),
                          e = b.fromOptionValue;
                      return function (a) {
                        return c(e(d.unsafeTargetValue(a)));
                      };
                    }())(d.onChange)])(p.mapFlipped(p.functorArray)(n.upFromIncluding(e.Enum1())(O.unfoldable1Array)(t.bottom(e.Bounded0())))(function (a) {
                      return f.option(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([d.value((0, b.toOptionValue)(a))])([f.text(g.widgetLiftWidget)((0, b.toOptionLabel)(a))]);
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

  b.menuSignal = ja;
  b["labelSig'"] = ia;
  b.labelSig = W;
  b.textInput = ka;

  b.urlInput = function (a) {
    return function (b) {
      return function (d) {
        if (d instanceof v.Left) var f = "";else if (d instanceof v.Right) f = H.toString(da.urlToNEString(d.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 151, column 15 - line 153, column 48): " + [d.constructor.name]);
        if (d instanceof v.Left) var g = d.value0;else if (d instanceof v.Right) g = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 147, column 15 - line 149, column 20): " + [d.constructor.name]);
        return k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(ka(function (c) {
          return function (b) {
            return a(c)(b);
          };
        })(b)(H.fromString(f)))(function (a) {
          var b = k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray))),
              d = l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)));
          if (a instanceof D.Nothing) a = new v.Left(g);else if (a instanceof D.Just) a = da.parsePublicURL(H.toString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 138, column 19 - line 140, column 46): " + [a.constructor.name]);
          return b(d(a))(function (a) {
            return k.discard(k.discardUnit)(m.bindCofree(c.widgetAlternative(w.monoidArray)))(e.display(function () {
              if (a instanceof v.Right) return w.mempty(c.widgetMonoid(w.monoidArray));
              if (a instanceof v.Left) return oa(aa.toTextString)(new D.Just(a.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 141, column 13 - line 143, column 40): " + [a.constructor.name]);
            }()))(function () {
              return l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(a);
            });
          });
        });
      };
    };
  };

  b.checkBoxS = sa;
  b.FreeTextPolicy = ca;
  b.RefPolicy = ea;

  b.formSaveButton = function (a) {
    a = a.dirty ? [d.onClick] : [d.disabled(!0)];
    return f.button(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)(a)([f.text(g.widgetLiftWidget)("Save")]);
  };

  b.arrayView = ua;

  b.nonEmptyArrayView = function (a) {
    return function (b) {
      return k.bind(m.bindCofree(c.widgetAlternative(w.monoidArray)))(ua(a)(F.second(F.strongFn)(na(x.foldableMaybe)(D.functorMaybe)(w.monoidArray)(q.toArray))(b)))(function (a) {
        return l.pure(m.applicativeCofree(c.widgetAlternative(w.monoidArray)))(F.second(F.strongFn)(q.fromArray)(a));
      });
    };
  };

  b.errorDisplay = oa;

  b.initFormState = function (a) {
    return function (a) {
      return function (c) {
        return function (b) {
          return function (d) {
            return function (e) {
              return {
                validity: S.Incomplete.value,
                dirty: !1,
                submitting: !1,
                errors: 0,
                submitAttempts: 0,
                form: K.inputFieldsToFormFields()(a)(c)(b)(d),
                internal: {
                  initialInputs: d,
                  validators: e,
                  allTouched: !1
                }
              };
            };
          };
        };
      };
    };
  };

  b.isOptionMaybeBoolean = y;
  b.isOptionIdentifierType = wa;
  b.isOptionInstitutionType = a;
  b.isOptionMaybeInstitutionContactType = N;
  b.isOptionMaybePolicyType = Q;
  b.eqPolPolType = pa;
  b.boundedEnumPolPolType = z;
  b.isOptionPolPolType = G;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var b = a["Metajelo.View"],
      e = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      h = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      f = a["Control.Category"],
      d = a["Data.Array"],
      l = a["Data.Array.NonEmpty"],
      k = a["Data.Foldable"],
      m = a["Data.Functor"],
      r = a["Data.HeytingAlgebra"],
      q = a["Data.Maybe"],
      t = a["Data.Monoid"],
      v = a["Data.Semigroup"],
      n = a["Data.Show"],
      y = a["Data.String.CodePoints"],
      x = a["Data.String.NonEmpty.Internal"],
      p = a["Data.String.Utils"],
      u = a["Data.Unfoldable1"],
      z = a["Metajelo.Types"],
      C = a["Text.Email.Parser"],
      N = a["Text.URL.Validate"],
      B = function () {
    var a = m.map(m.functorArray)(y.singleton);
    return function (c) {
      return a(y.toCodePointArray(c));
    };
  }(),
      G = function G(a) {
    var c = h.text(a);
    return function (a) {
      return c(x.toString(a));
    };
  },
      D = h["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([h.text(e.widgetLiftWidget)(" ")]),
      w = function () {
    var a = k.intercalate(k.foldableArray)(t.monoidArray)([D]),
        c = m.map(m.functorArray)(u.singleton(u.unfoldable1Array));
    return function (b) {
      return a(c(b));
    };
  }(),
      A = function A(a) {
    return "metajelo_" + a;
  },
      F = A("icon-check-square-o"),
      P = A("icon"),
      L = A("icon-minus-square-o"),
      I = A("icon-square-o"),
      H = function H(a) {
    return h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("institutionName"))])([G(e.widgetLiftWidget)(a.institutionName)]);
  },
      E = function E(a) {
    return function (a) {
      return k.foldMap(k.foldableMaybe)(t.monoidArray)(f.identity(f.categoryFn))(d.init(a));
    };
  },
      J = function J(a) {
    var b = C.toString(a.emailAddress),
        d = h.text(e.widgetLiftWidget);
    if (a.contactType instanceof q.Nothing) a = ".";else if (a.contactType instanceof q.Just) a = " (" + (n.show(z.showInstitutionContactType)(a.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 198, column 22 - line 200, column 39): " + [a.contactType.constructor.name]);
    d = d(a);
    return h["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)(v.append(v.semigroupArray)([h.text(e.widgetLiftWidget)("Institution Contact: "), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("institutionContact")), c.href("mailto:" + b)])([h.text(e.widgetLiftWidget)(b)])])([d]));
  },
      M = function M(a) {
    return h["cite'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([G(e.widgetLiftWidget)(a)]);
  },
      O = function O(a) {
    if (a.idType instanceof z.ARK) return h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(x.toString(a.id))])([M(a.id)]);

    if (a.idType instanceof z.ArXiv) {
      var b = "https://arxiv.org/abs/" + x.toString(a.id);
      return h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    }

    if (a.idType instanceof z.Bibcode) return b = "https://ui.adsabs.harvard.edu/abs/" + (x.toString(a.id) + "/abstract"), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.DOI) return b = "https://doi.org/" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.EAN13) return M(a.id);
    if (a.idType instanceof z.EISSN) return b = "https://www.worldcat.org/ISSN/" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.Handle) return b = "http://hdl.handle.net/" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.IGSN) return b = "http://igsn.org/" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.ISBN) return M(a.id);
    if (a.idType instanceof z.ISSN) return b = "https://www.worldcat.org/ISSN/" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.ISTC) return M(a.id);
    if (a.idType instanceof z.LISSN) return b = "https://www.worldcat.org/ISSN/" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.LSID) return b = "http://www.lsid.info/resolver/?lsid=" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.PMID) return b = "https://www.ncbi.nlm.nih.gov/pubmed/" + x.toString(a.id), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(b)])([M(a.id)]);
    if (a.idType instanceof z.PURL) return h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(x.toString(a.id))])([M(a.id)]);
    if (a.idType instanceof z.UPC) return M(a.id);
    if (a.idType instanceof z.URL) return h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(x.toString(a.id))])([M(a.id)]);
    if (a.idType instanceof z.URN) return M(a.id);
    throw Error("Failed pattern match at Metajelo.View (line 220, column 1 - line 220, column 47): " + [a.constructor.name]);
  },
      K = function K(a) {
    return h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("identifier"))])([h.text(e.widgetLiftWidget)(n.show(z.showIdentifierType)(a.idType) + ": "), O(a)]);
  },
      R = function R(a) {
    return c.classList(m.map(m.functorArray)(q.Just.create)(a));
  },
      T = function T(a) {
    return h.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("institutionPolicy"))])(w([function (a) {
      var b = function () {
        if (a instanceof q.Nothing) return {
          text: "May apply to product (unverified)",
          cls: I
        };
        if (a instanceof q.Just && a.value0) return {
          text: "Applies to product",
          cls: F
        };
        if (a instanceof q.Just && !a.value0) return {
          text: "Does not apply to product",
          cls: L
        };
        throw Error("Failed pattern match at Metajelo.View (line 271, column 10 - line 274, column 73): " + [a.constructor.name]);
      }();

      return h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([R([P, b.cls])])([function (a) {
        return h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("applies_info"))])([h.text(e.widgetLiftWidget)(a)]);
      }(b.text)]);
    }(a.appliesToProduct), k.foldMap(k.foldableMaybe)(g.widgetMonoid(t.monoidArray))(function (a) {
      return h["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("policyType"))])([h.text(e.widgetLiftWidget)(n.show(z.showPolicyType)(a))]), h.text(e.widgetLiftWidget)(" Policy:")]);
    })(a.policyType), function (a) {
      var b = h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("policy"))]),
          d = u.singleton(u.unfoldable1Array);
      if (a instanceof z.FreeTextPolicy) a = G(e.widgetLiftWidget)(a.value0);else if (a instanceof z.RefPolicy) a = N.urlToString(a.value0), a = h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.href(a)])([h.text(e.widgetLiftWidget)(a)]);else throw Error("Failed pattern match at Metajelo.View (line 264, column 5 - line 267, column 40): " + [a.constructor.name]);
      return b(d(a));
    }(a.policy)]));
  },
      S = function S(a) {
    return function (c) {
      return function (b) {
        if (c) return a;

        if (k.any(k.foldableArray)(r.heytingAlgebraBoolean)(function (c) {
          return p.endsWith(c)(a);
        })([";", ".", ","])) {
          var d = B(a);
          return p.fromCharArray(E(t.monoidString)(d)) + b;
        }

        return a + b;
      };
    };
  };

  b.spacify = w;

  b.locElems = function (a) {
    var b = H(a),
        d = h["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([h.text(e.widgetLiftWidget)("("), h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("institutionId"))])([K(a.institutionID)]), h.text(e.widgetLiftWidget)("; "), h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("institutionType"))])([h.text(e.widgetLiftWidget)(n.show(z.showInstitutionType)(a.institutionType))]), h.text(e.widgetLiftWidget)(S(")")(q.isNothing(a.superOrganizationName))(","))]);
    if (a.superOrganizationName instanceof q.Nothing) var f = t.mempty(g.widgetMonoid(t.monoidArray));else if (a.superOrganizationName instanceof q.Just) f = h["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([h.text(e.widgetLiftWidget)("a member of "), h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("superOrg"))])([h.text(e.widgetLiftWidget)(S(x.toString(a.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 160, column 7 - line 166, column 10): " + [a.superOrganizationName.constructor.name]);
    return w([b, d, f, J(a.institutionContact), h["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("missionStatement")), c.href(N.urlToString(a.institutionSustainability.missionStatementURL))])([h.text(e.widgetLiftWidget)("Mission Statement")]), h.text(e.widgetLiftWidget)("; "), h.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("fundingStatement")), c.href(N.urlToString(a.institutionSustainability.fundingStatementURL))])([h.text(e.widgetLiftWidget)("Funding Statement")]), h.text(e.widgetLiftWidget)(".")]), h.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("institutionPolicies"))])(m.map(m.functorArray)(function (a) {
      return h["li'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([T(a)]);
    })(l.toArray(a.institutionPolicies))), function (a) {
      if (a) a = "Versioned";else {
        if (a) throw Error("Failed pattern match at Metajelo.View (line 187, column 14 - line 189, column 31): " + [a.constructor.name]);
        a = "Unversioned";
      }
      return h.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([c.className(A("versioning"))])([h.text(e.widgetLiftWidget)(a)]);
    }(a.versioning)]);
  };

  b.contactWidg = J;
  b.ipolicyWidg = T;
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionContact"] = a["Metajelo.Forms.InstitutionContact"] || {};

  var b = a["Metajelo.Forms.InstitutionContact"],
      e = a["Concur.Core.FRP"],
      g = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      c = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      l = a["Control.Applicative"],
      k = a["Control.Bind"],
      m = a["Data.Either"],
      r = a["Data.Enum"],
      q = a["Data.Eq"],
      t = a["Data.Foldable"],
      v = a["Data.Functor"],
      n = a["Data.Maybe"],
      y = a["Data.Monoid"],
      x = a["Data.Newtype"],
      p = a["Data.Symbol"],
      u = a["Formless.Component"],
      z = a["Formless.Internal.Transform"],
      C = a["Formless.Query"],
      N = a["Formless.Retrieve"],
      B = a["Formless.Transform.Record"],
      G = a["Formless.Transform.Row"],
      D = a["Formless.Types.Form"],
      w = a["Heterogeneous.Mapping"],
      A = a["Metajelo.FormUtil"],
      F = a["Metajelo.Types"],
      P = a["Metajelo.Validation"],
      L = a["Metajelo.View"],
      I = a["Text.Email.Parser"],
      H = {
    email1: P.emailFormat(c.widgetMonad),
    contactType: P.dummy(c.widgetMonad)
  },
      E = function E(a) {
    return function (a) {
      return function (c) {
        return G.mkSProxies()(a)(c)(D.FormProxy.value);
      };
    };
  },
      J = new x.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      M = {
    email1: "",
    contactType: n.Nothing.value
  },
      O = function O(a) {
    if (a instanceof n.Nothing) return M;
    if (a instanceof n.Just) return {
      email1: I.toString(a.value0.emailAddress),
      contactType: a.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 48, column 1 - line 48, column 57): " + [a.constructor.name]);
  },
      K = function K(a) {
    return k.bind(c.widgetBind)(f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([f.text(g.widgetLiftWidget)("Email")]), f.input(g.widgetLiftWidget)([d.defaultValue(N.getInput(new p.IsSymbol(function () {
      return "email1";
    }))(J)()(E()(J)(G.makeSProxiesCons(new p.IsSymbol(function () {
      return "contactType";
    }))()(G.makeSProxiesCons(new p.IsSymbol(function () {
      return "email1";
    }))()(G.makeSProxiesNil))).email1)(a.form)), v.map(h.functorProps)(function () {
      var a = C.setValidate(new p.IsSymbol(function () {
        return "email1";
      }))(J)()(E()(J)(G.makeSProxiesCons(new p.IsSymbol(function () {
        return "contactType";
      }))()(G.makeSProxiesCons(new p.IsSymbol(function () {
        return "email1";
      }))()(G.makeSProxiesNil))).email1);
      return function (c) {
        return a(d.unsafeTargetValue(c));
      };
    }())(d.onChange)]), A.errorDisplay(P.toTextFieldError)(N.getError(new p.IsSymbol(function () {
      return "email1";
    }))(J)()(E()(J)(G.makeSProxiesCons(new p.IsSymbol(function () {
      return "contactType";
    }))()(G.makeSProxiesCons(new p.IsSymbol(function () {
      return "email1";
    }))()(G.makeSProxiesNil))).email1)(a.form)), f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([f.text(g.widgetLiftWidget)("Contact type: "), A.menu(new p.IsSymbol(function () {
      return "contactType";
    }))(A.isOptionMaybeInstitutionContactType)(r.boundedEnumMaybe(F.smallBoundedInstitutionContactType)(F.boundedEnumInstitutionContactType))(J)()(J)()(a.form)(E()(J)(G.makeSProxiesCons(new p.IsSymbol(function () {
      return "contactType";
    }))()(G.makeSProxiesCons(new p.IsSymbol(function () {
      return "email1";
    }))()(G.makeSProxiesNil))).contactType)]), f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([v.voidRight(c.widgetFunctor)(C.submit)(A.formSaveButton(a))])]))(function (b) {
      return k.bind(c.widgetBind)(u.eval()()(q.eqRowCons(q.eqRowCons(q.eqRowNil)()(new p.IsSymbol(function () {
        return "email1";
      }))(D.eqInputField(q.eqString)))()(new p.IsSymbol(function () {
        return "contactType";
      }))(D.eqInputField(n.eqMaybe(F.eqInstitutionContactType))))(z.inputFieldsToFormFieldsCons(new p.IsSymbol(function () {
        return "contactType";
      }))()(z.inputFieldsToFormFieldsCons(new p.IsSymbol(function () {
        return "email1";
      }))()(z.inputFieldsToFormFieldsNil)())())(z.inputFieldsToInputCons(new p.IsSymbol(function () {
        return "contactType";
      }))()(z.inputFieldsToInputCons(new p.IsSymbol(function () {
        return "email1";
      }))()(z.inputFieldsToInputNil)())())(z.consCountErrors(new p.IsSymbol(function () {
        return "contactType";
      }))()(z.consCountErrors(new p.IsSymbol(function () {
        return "email1";
      }))()(z.nilCountErrors)))(z.consAllTouched(new p.IsSymbol(function () {
        return "contactType";
      }))()(z.consAllTouched(new p.IsSymbol(function () {
        return "email1";
      }))()(z.nilAllTouched)))(z.setFormFieldsTouchedCons(new p.IsSymbol(function () {
        return "contactType";
      }))()(z.setFormFieldsTouchedCons(new p.IsSymbol(function () {
        return "email1";
      }))()(z.setFormFieldsTouchedNil)())())(z.replaceFormFieldInputsTouchedCons(new p.IsSymbol(function () {
        return "contactType";
      }))(D.newtypeInputField)(D.newtypeFormField)()()()(z.replaceFormFieldInputsTouchedCons(new p.IsSymbol(function () {
        return "email1";
      }))(D.newtypeInputField)(D.newtypeFormField)()()()(z.replaceFormFieldInputsTouchedNil)))(z.modifyAllCons(new p.IsSymbol(function () {
        return "contactType";
      }))(D.newtypeInputFunction)(D.newtypeFormField)()()()(z.modifyAllCons(new p.IsSymbol(function () {
        return "email1";
      }))(D.newtypeInputFunction)(D.newtypeFormField)()()()(z.modifyAllNil)))(z.applyToValidationCons(new p.IsSymbol(function () {
        return "contactType";
      }))(c.widgetMonad)()(J)()()(z.applyToValidationCons(new p.IsSymbol(function () {
        return "email1";
      }))(c.widgetMonad)()(J)()()(z.applyToValidationNil(c.widgetMonad))))(z.formFieldsToMaybeOutputCons(new p.IsSymbol(function () {
        return "contactType";
      }))()(z.formFieldsToMaybeOutputCons(new p.IsSymbol(function () {
        return "email1";
      }))()(z.formFieldsToMaybeOutputNil)())())(J)(J)(J)(J)(J)(J)(J)(J)(c.widgetMonad)(b)(a))(function (a) {
        if (a instanceof m.Left) return K(a.value0);
        if (a instanceof m.Right) return a = B.unwrapOutputFields(J)(w.hmapRecord()(w.mapRecordWithIndexCons(new p.IsSymbol(function () {
          return "contactType";
        }))(w.constMapping(B.unwrapField(D.newtypeOutputField)))(w.mapRecordWithIndexCons(new p.IsSymbol(function () {
          return "email1";
        }))(w.constMapping(B.unwrapField(D.newtypeOutputField)))(w.mapRecordWithIndexNil)()())()()))(a.value0), l.pure(c.widgetApplicative)({
          emailAddress: a.email1,
          contactType: a.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 74, column 3 - line 78, column 70): " + [a.constructor.name]);
      });
    });
  };

  b.contactSignal = function (a) {
    var b = function b(a) {
      return e.step(a)(k.bind(c.widgetBind)(l.pure(c.widgetApplicative)(B.wrapInputFields(J)(w.hmapRecord()(w.mapRecordWithIndexCons(new p.IsSymbol(function () {
        return "contactType";
      }))(w.constMapping(B.wrapField(D.newtypeInputField)))(w.mapRecordWithIndexCons(new p.IsSymbol(function () {
        return "email1";
      }))(w.constMapping(B.wrapField(D.newtypeInputField)))(w.mapRecordWithIndexNil)()())()()))(O(a))))(function (d) {
        return k.bind(c.widgetBind)(f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([K(A.initFormState()(z.inputFieldsToFormFieldsCons(new p.IsSymbol(function () {
          return "contactType";
        }))()(z.inputFieldsToFormFieldsCons(new p.IsSymbol(function () {
          return "email1";
        }))()(z.inputFieldsToFormFieldsNil)())())(J)(J)(d)(H)), t.foldMap(t.foldableMaybe)(c.widgetMonoid(y.monoidArray))(L.contactWidg)(a)]))(function (a) {
          return l.pure(c.widgetApplicative)(b(new n.Just(a)));
        });
      }));
    };

    return A["labelSig'"](function (a) {
      return function (c) {
        return f["h2'"](a)(c);
      };
    })("Institution Contact")(b(a));
  };
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionPolicy"] = a["Metajelo.Forms.InstitutionPolicy"] || {};

  var b = a["Metajelo.Forms.InstitutionPolicy"],
      e = a["Concur.Core.FRP"],
      g = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      c = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      l = a["Control.Applicative"],
      k = a["Control.Bind"],
      m = a["Data.Either"],
      r = a["Data.Enum"],
      q = a["Data.Eq"],
      t = a["Data.Foldable"],
      v = a["Data.Functor"],
      n = a["Data.Maybe"],
      y = a["Data.Monoid"],
      x = a["Data.Show"],
      p = a["Data.String.NonEmpty.Internal"],
      u = a["Data.Symbol"],
      z = a["Effect.Class"],
      C = a["Effect.Class.Console"],
      N = a["Formless.Component"],
      B = a["Formless.Internal.Transform"],
      G = a["Formless.Query"],
      D = a["Formless.Retrieve"],
      w = a["Formless.Transform.Record"],
      A = a["Formless.Transform.Row"],
      F = a["Formless.Types.Form"],
      P = a["Formless.Validation"],
      L = a["Heterogeneous.Mapping"],
      I = a["Metajelo.FormUtil"],
      H = a["Metajelo.Types"],
      E = a["Metajelo.Validation"],
      J = a["Metajelo.View"],
      M = a["Text.URL.Validate"],
      O = function O(a) {
    return function (a) {
      return function (c) {
        return A.mkSProxies()(a)(c)(F.FormProxy.value);
      };
    };
  },
      K = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      R = function R(a) {
    return k.bind(c.widgetBind)(f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([f.text(g.widgetLiftWidget)("Policy: "), I.menu(new u.IsSymbol(function () {
      return "polPolType";
    }))(I.isOptionPolPolType)(I.boundedEnumPolPolType)(K)()(K)()(a.form)(O()(K)(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(A.makeSProxiesNil))))).polPolType)]), f.input(g.widgetLiftWidget)([d.defaultValue(D.getInput(new u.IsSymbol(function () {
      return "policy";
    }))(K)()(O()(K)(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(A.makeSProxiesNil))))).policy)(a.form)), v.map(h.functorProps)(function () {
      var a = G.setValidate(new u.IsSymbol(function () {
        return "policy";
      }))(K)()(O()(K)(A.makeSProxiesCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
        return "policy";
      }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(A.makeSProxiesNil))))).policy);
      return function (c) {
        return a(d.unsafeTargetValue(c));
      };
    }())(d.onChange)]), I.errorDisplay(E.toTextString)(D.getError(new u.IsSymbol(function () {
      return "policy";
    }))(K)()(O()(K)(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(A.makeSProxiesNil))))).policy)(a.form)), f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([f.text(g.widgetLiftWidget)("Policy type: "), I.menu(new u.IsSymbol(function () {
      return "policyType";
    }))(I.isOptionMaybePolicyType)(r.boundedEnumMaybe(H.smallBoundedPolicyType)(H.boundedEnumPolicyType))(K)()(K)()(a.form)(O()(K)(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(A.makeSProxiesNil))))).policyType)]), f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([f.text(g.widgetLiftWidget)("Applies to product? "), I.menu(new u.IsSymbol(function () {
      return "appliesToProd";
    }))(I.isOptionMaybeBoolean)(r.boundedEnumMaybe(r.smallBoundedBoolean)(r.boundedEnumBoolean))(K)()(K)()(a.form)(O()(K)(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(A.makeSProxiesNil))))).appliesToProd)]), f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([v.voidRight(c.widgetFunctor)(G.submit)(I.formSaveButton(a))])]))(function (b) {
      return k.bind(c.widgetBind)(N.eval()()(q.eqRowCons(q.eqRowCons(q.eqRowCons(q.eqRowCons(q.eqRowNil)()(new u.IsSymbol(function () {
        return "policyType";
      }))(F.eqInputField(n.eqMaybe(H.eqPolicyType))))()(new u.IsSymbol(function () {
        return "policy";
      }))(F.eqInputField(q.eqString)))()(new u.IsSymbol(function () {
        return "polPolType";
      }))(F.eqInputField(I.eqPolPolType)))()(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(F.eqInputField(n.eqMaybe(q.eqBoolean))))(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "policy";
      }))()(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(B.inputFieldsToFormFieldsNil)())())())())(B.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(B.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(B.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "policy";
      }))()(B.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(B.inputFieldsToInputNil)())())())())(B.consCountErrors(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(B.consCountErrors(new u.IsSymbol(function () {
        return "polPolType";
      }))()(B.consCountErrors(new u.IsSymbol(function () {
        return "policy";
      }))()(B.consCountErrors(new u.IsSymbol(function () {
        return "policyType";
      }))()(B.nilCountErrors)))))(B.consAllTouched(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(B.consAllTouched(new u.IsSymbol(function () {
        return "polPolType";
      }))()(B.consAllTouched(new u.IsSymbol(function () {
        return "policy";
      }))()(B.consAllTouched(new u.IsSymbol(function () {
        return "policyType";
      }))()(B.nilAllTouched)))))(B.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(B.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(B.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "policy";
      }))()(B.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(B.setFormFieldsTouchedNil)())())())())(B.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(B.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(B.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "policy";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(B.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "policyType";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(B.replaceFormFieldInputsTouchedNil)))))(B.modifyAllCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(B.modifyAllCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(B.modifyAllCons(new u.IsSymbol(function () {
        return "policy";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(B.modifyAllCons(new u.IsSymbol(function () {
        return "policyType";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(B.modifyAllNil)))))(B.applyToValidationCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(c.widgetMonad)()(K)()()(B.applyToValidationCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(c.widgetMonad)()(K)()()(B.applyToValidationCons(new u.IsSymbol(function () {
        return "policy";
      }))(c.widgetMonad)()(K)()()(B.applyToValidationCons(new u.IsSymbol(function () {
        return "policyType";
      }))(c.widgetMonad)()(K)()()(B.applyToValidationNil(c.widgetMonad))))))(B.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(B.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(B.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "policy";
      }))()(B.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(B.formFieldsToMaybeOutputNil)())())())())(K)(K)(K)(K)(K)(K)(K)(K)(c.widgetMonad)(b)(a))(function (a) {
        if (a instanceof m.Left) return R(a.value0);
        if (a instanceof m.Right) return a = w.unwrapOutputFields(K)(L.hmapRecord()(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "appliesToProd";
        }))(L.constMapping(w.unwrapField(F.newtypeOutputField)))(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "polPolType";
        }))(L.constMapping(w.unwrapField(F.newtypeOutputField)))(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "policy";
        }))(L.constMapping(w.unwrapField(F.newtypeOutputField)))(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "policyType";
        }))(L.constMapping(w.unwrapField(F.newtypeOutputField)))(L.mapRecordWithIndexNil)()())()())()())()()))(a.value0), l.pure(c.widgetApplicative)({
          policy: a.policy,
          policyType: a.policyType,
          appliesToProduct: a.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 101, column 3 - line 109, column 8): " + [a.constructor.name]);
      });
    });
  },
      T = {
    polPolType: I.FreeTextPolicy.value,
    policy: "",
    policyType: n.Nothing.value,
    appliesToProd: n.Nothing.value
  },
      S = function S(a) {
    if (a instanceof n.Nothing) return T;

    if (a instanceof n.Just) {
      var c = a.value0.policy;
      if (c instanceof H.FreeTextPolicy) c = I.FreeTextPolicy.value;else if (c instanceof H.RefPolicy) c = I.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 61, column 1 - line 61, column 38): " + [c.constructor.name]);
      var b = a.value0.policy;
      if (b instanceof H.FreeTextPolicy) b = p.toString(b.value0);else if (b instanceof H.RefPolicy) b = M.urlToString(b.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 65, column 1 - line 65, column 36): " + [b.constructor.name]);
      return {
        polPolType: c,
        policy: b,
        policyType: a.value0.policyType,
        appliesToProd: a.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 69, column 1 - line 69, column 56): " + [a.constructor.name]);
  },
      Q = {
    polPolType: E.dummy(c.widgetMonad),
    policy: function (a) {
      return P.hoistFnE(a)(function (a) {
        return function (c) {
          var b = D.getInput(new u.IsSymbol(function () {
            return "polPolType";
          }))(K)()(O()(K)(A.makeSProxiesCons(new u.IsSymbol(function () {
            return "appliesToProd";
          }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
            return "polPolType";
          }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
            return "policy";
          }))()(A.makeSProxiesCons(new u.IsSymbol(function () {
            return "policyType";
          }))()(A.makeSProxiesNil))))).polPolType)(a);
          if (b instanceof I.FreeTextPolicy) return v.mapFlipped(m.functorEither)(E.readNEStringEi(c))(H.FreeTextPolicy.create);
          if (b instanceof I.RefPolicy) return v.mapFlipped(m.functorEither)(M.parsePublicURL(c))(H.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 127, column 6 - line 129, column 54): " + [b.constructor.name]);
        };
      });
    }(c.widgetMonad),
    policyType: E.dummy(c.widgetMonad),
    appliesToProd: E.dummy(c.widgetMonad)
  },
      aa = function aa(a) {
    var b = function b(a) {
      return e.step(a)(k.bind(c.widgetBind)(l.pure(c.widgetApplicative)(w.wrapInputFields(K)(L.hmapRecord()(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(L.constMapping(w.wrapField(F.newtypeInputField)))(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(L.constMapping(w.wrapField(F.newtypeInputField)))(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "policy";
      }))(L.constMapping(w.wrapField(F.newtypeInputField)))(L.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "policyType";
      }))(L.constMapping(w.wrapField(F.newtypeInputField)))(L.mapRecordWithIndexNil)()())()())()())()()))(S(a))))(function (d) {
        return k.bind(c.widgetBind)(f["div'"](c.widgetMultiAlternative(y.monoidArray))(c.widgetShiftMap)([R(I.initFormState()(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "appliesToProd";
        }))()(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "polPolType";
        }))()(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "policy";
        }))()(B.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "policyType";
        }))()(B.inputFieldsToFormFieldsNil)())())())())(K)(K)(d)(Q)), t.foldMap(t.foldableMaybe)(c.widgetMonoid(y.monoidArray))(J.ipolicyWidg)(a)]))(function (a) {
          return k.discard(k.discardUnit)(c.widgetBind)(z.liftEffect(c.widgetMonadEff(y.monoidArray))(C.logShow(z.monadEffectEffect)(x.showRecord()(x.showRecordFieldsCons(new u.IsSymbol(function () {
            return "appliesToProduct";
          }))(x.showRecordFieldsCons(new u.IsSymbol(function () {
            return "policy";
          }))(x.showRecordFieldsCons(new u.IsSymbol(function () {
            return "policyType";
          }))(x.showRecordFieldsNil)(n.showMaybe(H.showPolicyType)))(H.showPolicy))(n.showMaybe(x.showBoolean))))(a)))(function () {
            return l.pure(c.widgetApplicative)(b(new n.Just(a)));
          });
        });
      }));
    };

    return I["labelSig'"](function (a) {
      return function (c) {
        return f["h3'"](a)(c);
      };
    })("Institution Policy")(b(a));
  };

  b.policySigArray = function (a) {
    return I["labelSig'"](function (a) {
      return function (c) {
        return f["h2'"](a)(c);
      };
    })("Institution Policies")(I.nonEmptyArrayView(aa)(a));
  };
})(PS);

(function (a) {
  a.pickFn = function (a, e) {
    for (var b = {}, h = 0; h < a.length; h++) {
      "undefined" !== typeof e[a[h]] && (b[a[h]] = e[a[h]]);
    }

    return b;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var b = a["Record.Extra"],
      e = a["Data.List.Types"],
      g = a["Data.Monoid"],
      h = a["Data.Symbol"],
      c = a["Type.Data.RowList"],
      f = function f(a) {
    this.keysImpl = a;
  };

  a = new f(function (a) {
    return g.mempty(e.monoidList);
  });

  b.keys = function (a) {
    return function (a) {
      return function (b) {
        return (0, a.keysImpl)(c.RLProxy.value);
      };
    };
  };

  b.nilKeys = a;

  b.consKeys = function (a) {
    return function (b) {
      return new f(function (d) {
        d = (0, b.keysImpl)(c.RLProxy.value);
        var f = h.reflectSymbol(a)(h.SProxy.value);
        return new e.Cons(f, d);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var b = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RProxy = b;
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var b = a.Option,
      e = a.Option,
      g = a["Control.Monad.State.Class"],
      h = a["Control.Monad.State.Trans"],
      c = a["Data.Array"],
      f = a["Data.Function.Uncurried"],
      d = a["Data.Identity"],
      l = a["Data.List.Types"],
      k = a["Data.Maybe"],
      m = a["Data.Symbol"],
      r = a["Foreign.Object"],
      q = a.Record,
      t = a["Record.Extra"],
      v = a["Type.Data.Row"],
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function y(a) {
    this.getAllOption = a;
  },
      x = function x(a) {
    this["getAll'"] = a;
  },
      p = function p(a) {
    return function (a) {
      return function (a) {
        a = c.fromFoldable(l.foldableList)(t.keys()(a)(v.RProxy.value));
        return f.runFn2(e.pickFn)(a);
      };
    };
  };

  a = new y(function (a) {
    return function (a) {
      return new k.Just({});
    };
  });

  var u = function u(a) {
    return function (c) {
      return function (b) {
        return function (b) {
          var d = m.reflectSymbol(a)(m.SProxy.value),
              e = r.alter(function (a) {
            return c(a);
          })(d)(b);
          b = c(r.lookup(d)(b));
          return {
            option: e,
            value: b
          };
        };
      };
    };
  },
      z = function z(a) {
    return function (c) {
      return function (c) {
        return function (c) {
          return function (b) {
            return u(a)(function (a) {
              return k.Nothing.value;
            })(c)(b).option;
          };
        };
      };
    };
  },
      C = function C(a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return u(a)(function (a) {
            return a;
          })(c)(b).value;
        };
      };
    };
  },
      N = function N(a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return function (d) {
            return u(a)(function (a) {
              return new k.Just(b);
            })(c)(d).option;
          };
        };
      };
    };
  },
      B = function B(a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return function (d) {
            if (b instanceof k.Just) return N(a)()(c)(b.value0)(d);
            if (b instanceof k.Nothing) return d;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [b.constructor.name]);
          };
        };
      };
    };
  };

  b.empty = r.empty;
  b.get = C;

  b.getAll = function (a) {
    return a["getAll'"];
  };

  b.getSubset = function (a) {
    return function (a) {
      return function (a) {
        return function (c) {
          return function (b) {
            return (0, c["getAll'"])(p()()(a)(b));
          };
        };
      };
    };
  };

  b.getWithDefault = function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return function (d) {
            d = C(a)()(b)(d);
            if (d instanceof k.Just) return d.value0;
            if (d instanceof k.Nothing) return c;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [d.constructor.name]);
          };
        };
      };
    };
  };

  b.maySetOptState = function (a) {
    return function (c) {
      return function (c) {
        return function (b) {
          return function (e) {
            return g.put(h.monadStateStateT(d.monadIdentity))(B(a)()(c)(b)(e));
          };
        };
      };
    };
  };

  b.getAllAny = function (a) {
    return function (a) {
      return new x((0, a.getAllOption)(n.value));
    };
  };

  b.getAllOptionNil = a;

  b.getAllOptionCons = function (a) {
    return function (c) {
      return function (c) {
        return function (c) {
          return function (c) {
            return function (c) {
              return new y(function (b) {
                return function (b) {
                  var d = z(a)()()(m.SProxy.value)(b);
                  d = (0, c.getAllOption)(n.value)(d);
                  b = C(a)()(m.SProxy.value)(b);

                  if (d instanceof k.Just) {
                    if (b instanceof k.Just) return new k.Just(q.insert(a)()()(m.SProxy.value)(b.value0)(d.value0));
                    if (b instanceof k.Nothing) return k.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [b.constructor.name]);
                  }

                  if (d instanceof k.Nothing) return k.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [d.constructor.name]);
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
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};
  var b = a["Metajelo.UI"],
      e = a["Concur.Core.FRP"],
      g = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      c = a["Concur.React.DOM"],
      f = a["Concur.React.Run"],
      d = a["Control.Applicative"],
      l = a["Control.Bind"],
      k = a["Control.Cofree"],
      m = a["Control.Monad.State"],
      r = a["Control.Monad.State.Class"],
      q = a["Control.Monad.State.Trans"],
      t = a["Data.Either"],
      v = a["Data.Foldable"],
      n = a["Data.Identity"],
      y = a["Data.Maybe"],
      x = a["Data.Monoid"],
      p = a["Data.Symbol"],
      u = a["Data.Tuple"],
      z = a["Data.Unit"],
      C = a["Metajelo.FormUtil"],
      N = a["Metajelo.Forms.InstitutionContact"],
      B = a["Metajelo.Forms.InstitutionPolicy"],
      G = a["Metajelo.Types"],
      D = a["Metajelo.View"],
      w = a.Option,
      A = a["Record.Extra"];
  a = d.pure(a.Effect.applicativeEffect)(z.unit);

  var F = function F(a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (e) {
            return m.execState(l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
              return "missionUrl_Ei";
            }))()(p.SProxy.value)(new y.Just(c))))(function () {
              return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                return "missionStatementURL";
              }))()(p.SProxy.value)(b)))(function () {
                return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                  return "fundingUrl_Ei";
                }))()(p.SProxy.value)(new y.Just(d))))(function () {
                  return l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()(p.SProxy.value)(e));
                });
              });
            }))(a);
          };
        };
      };
    };
  },
      P = function P(a) {
    return function (c) {
      return function (b) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return function (h) {
                  return function (k) {
                    return function (t) {
                      return function (u) {
                        return function (v) {
                          return m.execState(l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(p.SProxy.value)(new y.Just(c))))(function () {
                            return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                              return "institutionID";
                            }))()(p.SProxy.value)(b)))(function () {
                              return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                return "institutionName";
                              }))()(p.SProxy.value)(d)))(function () {
                                return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                  return "institutionType";
                                }))()(p.SProxy.value)(e)))(function () {
                                  return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(p.SProxy.value)(new y.Just(f))))(function () {
                                    return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                      return "institutionContact";
                                    }))()(p.SProxy.value)(g)))(function () {
                                      return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                        return "iSustain_opt";
                                      }))()(p.SProxy.value)(new y.Just(h))))(function () {
                                        return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                          return "institutionSustainability";
                                        }))()(p.SProxy.value)(k)))(function () {
                                          return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                            return "_numPolicies";
                                          }))()(p.SProxy.value)(new y.Just(t))))(function () {
                                            return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                              return "institutionPolicies";
                                            }))()(p.SProxy.value)(u)))(function () {
                                              return l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                                                return "versioning";
                                              }))()(p.SProxy.value)(new y.Just(v)));
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          }))(a);
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
  },
      L = function L(a) {
    return function (c) {
      return w.getWithDefault(a)()(w.empty);
    };
  },
      I = function I(a) {
    return C.textInput(function (a) {
      return function (b) {
        return c["h3'"](a)(b);
      };
    })("Format: ")(a);
  },
      H = function H(a) {
    return function (b) {
      return C["labelSig'"](function (a) {
        return function (b) {
          return c["h3'"](a)(b);
        };
      })(a)(l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.urlInput(function (a) {
        return function (b) {
          return c["span'"](a)(b);
        };
      })("Mission Statement URL: ")(w.getWithDefault(new p.IsSymbol(function () {
        return "missionUrl_Ei";
      }))()(new t.Left(""))(p.SProxy.value)(b)))(function (a) {
        var e = t.hush(a);
        return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.urlInput(function (a) {
          return function (b) {
            return c["span'"](a)(b);
          };
        })("Funding Statement URL: ")(w.getWithDefault(new p.IsSymbol(function () {
          return "fundingUrl_Ei";
        }))()(new t.Left(""))(p.SProxy.value)(b)))(function (c) {
          var f = t.hush(c);
          return d.pure(k.applicativeCofree(h.widgetAlternative(x.monoidArray)))(F(b)(a)(e)(c)(f));
        });
      }));
    };
  },
      E = function E(a) {
    return function (b) {
      var e = function e(a) {
        return function (c) {
          return function (b) {
            return m.execState(l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
              return "id";
            }))()(p.SProxy.value)(c)))(function () {
              return l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                return "idType";
              }))()(p.SProxy.value)(b));
            }))(a);
          };
        };
      };

      return C["labelSig'"](function (a) {
        return function (b) {
          return c["h3'"](a)(b);
        };
      })(a)(l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.textInput(function (a) {
        return function (b) {
          return c["span'"](a)(b);
        };
      })("Record Identifier: ")(w.get(new p.IsSymbol(function () {
        return "id";
      }))()(p.SProxy.value)(b)))(function (a) {
        return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C["labelSig'"](function (a) {
          return function (b) {
            return c["span'"](a)(b);
          };
        })("Identifier Type")(C.menuSignal(G.boundedEnumIdentifierType)(C.isOptionIdentifierType)(w.get(new p.IsSymbol(function () {
          return "idType";
        }))()(p.SProxy.value)(b))))(function (c) {
          return d.pure(k.applicativeCofree(h.widgetAlternative(x.monoidArray)))(e(b)(a)(c));
        });
      }));
    };
  };

  z = function () {
    var a = function a(_a13) {
      return c["div'"](h.widgetMultiAlternative(x.monoidArray))(h.widgetShiftMap)([c["h3'"](h.widgetMultiAlternative(x.monoidArray))(h.widgetShiftMap)([c.text(g.widgetLiftWidget)("Last submitted location summary for this product:")]), c["br'"](g.widgetLiftWidget), v.foldMap(v.foldableMaybe)(h.widgetMonoid(x.monoidArray))(function (a) {
        return v.fold(v.foldableArray)(h.widgetMonoid(x.monoidArray))(D.spacify(D.locElems(a)));
      })(_a13)]);
    };

    return C["labelSig'"](function (a) {
      return function (b) {
        return c["h1'"](a)(b);
      };
    })("Location")(e.loopS(x.monoidArray)(w.empty)(function (b) {
      return c.div_(k.shiftMapCofree(x.monoidArray))([])(l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(E("Identifier")(L(new p.IsSymbol(function () {
        return "institutionID_opt";
      }))()(p.SProxy.value)(b)))(function (f) {
        var m = w.getAll(w.getAllAny()(w.getAllOptionCons(new p.IsSymbol(function () {
          return "id";
        }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
          return "idType";
        }))()()()()(w.getAllOptionNil))))(f);
        return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.textInput(function (a) {
          return function (b) {
            return c["span'"](a)(b);
          };
        })("Institution Name: ")(w.get(new p.IsSymbol(function () {
          return "institutionName";
        }))()(p.SProxy.value)(b)))(function (n) {
          return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C["labelSig'"](function (a) {
            return function (b) {
              return c["h3'"](a)(b);
            };
          })("Institution Type")(C.menuSignal(G.boundedEnumInstitutionType)(C.isOptionInstitutionType)(w.get(new p.IsSymbol(function () {
            return "institutionType";
          }))()(p.SProxy.value)(b))))(function (q) {
            return l.discard(l.discardUnit)(k.bindCofree(h.widgetAlternative(x.monoidArray)))(e.display(c["br'"](g.widgetLiftWidget)))(function () {
              return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.textInput(function (a) {
                return function (b) {
                  return c["span'"](a)(b);
                };
              })("Super Organization (optional): ")(l.join(y.bindMaybe)(w.get(new p.IsSymbol(function () {
                return "superOrganizationName";
              }))()(p.SProxy.value)(b))))(function (g) {
                return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(N.contactSignal(w.get(new p.IsSymbol(function () {
                  return "institutionContact";
                }))()(p.SProxy.value)(b)))(function (r) {
                  return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(H("Institution Sustainability:")(L(new p.IsSymbol(function () {
                    return "iSustain_opt";
                  }))()(p.SProxy.value)(b)))(function (t) {
                    var v = w.getSubset()()(A.consKeys(new p.IsSymbol(function () {
                      return "fundingStatementURL";
                    }))(A.consKeys(new p.IsSymbol(function () {
                      return "missionStatementURL";
                    }))(A.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new p.IsSymbol(function () {
                      return "fundingStatementURL";
                    }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                      return "missionStatementURL";
                    }))()()()()(w.getAllOptionNil))))(t);
                    return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(B.policySigArray(new u.Tuple(w.getWithDefault(new p.IsSymbol(function () {
                      return "_numPolicies";
                    }))()(1)(p.SProxy.value)(b), w.get(new p.IsSymbol(function () {
                      return "institutionPolicies";
                    }))()(p.SProxy.value)(b))))(function (y) {
                      var z = u.fst(y),
                          B = u.snd(y);
                      return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C["labelSig'"](function (a) {
                        return function (b) {
                          return c["span'"](a)(b);
                        };
                      })("versioning? ")(C.checkBoxS(w.getWithDefault(new p.IsSymbol(function () {
                        return "versioning";
                      }))()(!1)(p.SProxy.value)(b))))(function (c) {
                        return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(d.pure(k.applicativeCofree(h.widgetAlternative(x.monoidArray)))(P(b)(f)(m)(n)(q)(g)(r)(t)(v)(z)(B)(c)))(function (c) {
                          var b = w.getSubset()()(A.consKeys(new p.IsSymbol(function () {
                            return "institutionContact";
                          }))(A.consKeys(new p.IsSymbol(function () {
                            return "institutionID";
                          }))(A.consKeys(new p.IsSymbol(function () {
                            return "institutionName";
                          }))(A.consKeys(new p.IsSymbol(function () {
                            return "institutionPolicies";
                          }))(A.consKeys(new p.IsSymbol(function () {
                            return "institutionSustainability";
                          }))(A.consKeys(new p.IsSymbol(function () {
                            return "institutionType";
                          }))(A.consKeys(new p.IsSymbol(function () {
                            return "superOrganizationName";
                          }))(A.consKeys(new p.IsSymbol(function () {
                            return "versioning";
                          }))(A.nilKeys)))))))))(w.getAllAny()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "institutionContact";
                          }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "institutionID";
                          }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "institutionName";
                          }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "institutionPolicies";
                          }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "institutionSustainability";
                          }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "institutionType";
                          }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "superOrganizationName";
                          }))()()()()(w.getAllOptionCons(new p.IsSymbol(function () {
                            return "versioning";
                          }))()()()()(w.getAllOptionNil))))))))))(c);
                          return l.discard(l.discardUnit)(k.bindCofree(h.widgetAlternative(x.monoidArray)))(e.display(a(b)))(function () {
                            return d.pure(k.applicativeCofree(h.widgetAlternative(x.monoidArray)))(c);
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
    }));
  }();

  var J = e.dyn(z);
  b.main = a;

  b.runFormSPA = function (a) {
    return f.runWidgetInDom(a)(J);
  };

  b.injectLocationFieldsOpt = P;
  b.accumulateLocation = z;
  b.page = J;
  b.injectSustainFieldsOpt = F;
  b.accumulateSustain = H;
  b.accumulateIdent = E;

  b.accumulateBasicMetaData = function (a) {
    var b = function b(a) {
      return function (c) {
        return function (b) {
          return function (d) {
            return m.execState(l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
              return "title";
            }))()(p.SProxy.value)(c)))(function () {
              return l.discard(l.discardUnit)(q.bindStateT(n.monadIdentity))(l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                return "creator";
              }))()(p.SProxy.value)(b)))(function () {
                return l.bind(q.bindStateT(n.monadIdentity))(r.get(q.monadStateStateT(n.monadIdentity)))(w.maySetOptState(new p.IsSymbol(function () {
                  return "publicationYear";
                }))()(p.SProxy.value)(d));
              });
            }))(a);
          };
        };
      };
    };

    return C["labelSig'"](function (a) {
      return function (b) {
        return c["h3'"](a)(b);
      };
    })("Basic Metadata")(l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.textInput(function (a) {
      return function (b) {
        return c["span'"](a)(b);
      };
    })("Title: ")(w.get(new p.IsSymbol(function () {
      return "title";
    }))()(p.SProxy.value)(a)))(function (e) {
      return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.textInput(function (a) {
        return function (b) {
          return c["span'"](a)(b);
        };
      })("Creator: ")(w.get(new p.IsSymbol(function () {
        return "creator";
      }))()(p.SProxy.value)(a)))(function (f) {
        return l.bind(k.bindCofree(h.widgetAlternative(x.monoidArray)))(C.textInput(function (a) {
          return function (b) {
            return c["span'"](a)(b);
          };
        })("Publication Year: ")(w.get(new p.IsSymbol(function () {
          return "publicationYear";
        }))()(p.SProxy.value)(a)))(function (c) {
          return d.pure(k.applicativeCofree(h.widgetAlternative(x.monoidArray)))(b(a)(e)(f)(c));
        });
      });
    }));
  };

  b.formatSignal = I;

  b.formatSigArray = function (a) {
    return C.labelSig(c["div'"](h.widgetMultiAlternative(x.monoidArray))(h.widgetShiftMap)([c["h2'"](h.widgetMultiAlternative(x.monoidArray))(h.widgetShiftMap)([c.text(g.widgetLiftWidget)("Formats")]), c.text(g.widgetLiftWidget)("Technical format of the resource.Use file extension or MIME type where possible.")]))(C.arrayView(I)(a));
  };

  b.getOpt = L;
})(PS);

module.exports = PS["Metajelo.UI"];
},{"react":"1n8/","react-dom":"NKHc","react-dom/server":"70Kp"}],"Focm":[function(require,module,exports) {
"use strict";

var MetajeloUI = _interopRequireWildcard(require("./index.opt.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// var Metajelo = require("../output/Metajelo"); // For bower
window.MetajeloUI = MetajeloUI;
},{"./index.opt.js":"xbCx"}]},{},["Focm"], null)
//# sourceMappingURL=prod.92a58e66.js.map