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
},{"object-assign":"J4Nk"}],"n8MK":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"IvPb":[function(require,module,exports) {
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
},{"./cjs/scheduler.production.min.js":"IvPb"}],"i17t":[function(require,module,exports) {
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

},{"object-assign":"J4Nk","react":"n8MK"}],"KpxE":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-dom-server.browser.production.min.js');
} else {
  module.exports = require('./cjs/react-dom-server.browser.development.js');
}
},{"./cjs/react-dom-server.browser.production.min.js":"KA3k"}],"xbCx":[function(require,module,exports) {
var global = arguments[3];
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.checkStringArgs = function (a, d, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, f) {
  a != Array.prototype && a != Object.prototype && (a[d] = f.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(this);

$jscomp.polyfill = function (a, d, f, k) {
  if (d) {
    f = $jscomp.global;
    a = a.split(".");

    for (k = 0; k < a.length - 1; k++) {
      var h = a[k];
      h in f || (f[h] = {});
      f = f[h];
    }

    a = a[a.length - 1];
    k = f[a];
    d = d(k);
    d != k && null != d && $jscomp.defineProperty(f, a, {
      configurable: !0,
      writable: !0,
      value: d
    });
  }
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (a) {
    var d = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = d.length;
    a = Number(a) || 0;

    if (0 <= a && a < k) {
      a |= 0;
      var h = d.charCodeAt(a);
      if (55296 > h || 56319 < h || a + 1 === k) return h;
      a = d.charCodeAt(a + 1);
      return 56320 > a || 57343 < a ? h : 1024 * (h - 55296) + a + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (a) {
    for (var d = "", k = 0; k < arguments.length; k++) {
      var h = Number(arguments[k]);
      if (0 > h || 1114111 < h || h !== Math.floor(h)) throw new RangeError("invalid_code_point " + h);
      65535 >= h ? d += String.fromCharCode(h) : (h -= 65536, d += String.fromCharCode(h >>> 10 & 1023 | 55296), d += String.fromCharCode(h & 1023 | 56320));
    }

    return d;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (a, f, k) {
    f = null != f ? f : function (a) {
      return a;
    };
    var d = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];

    if ("function" == typeof b) {
      a = b.call(a);

      for (var e = 0; !(b = a.next()).done;) {
        d.push(f.call(k, b.value, e++));
      }
    } else for (b = a.length, e = 0; e < b; e++) {
      d.push(f.call(k, a[e], e));
    }

    return d;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (a, f) {
    var d = $jscomp.checkStringArgs(this, a, "endsWith");
    a += "";
    void 0 === f && (f = d.length);
    f = Math.max(0, Math.min(f | 0, d.length));

    for (var h = a.length; 0 < h && 0 < f;) {
      if (d[--f] != a[--h]) return !1;
    }

    return 0 >= h;
  };
}, "es6", "es3");
$jscomp.polyfill("Object.is", function (a) {
  return a ? a : function (a, f) {
    return a === f ? 0 !== a || 1 / a === 1 / f : a !== a && f !== f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function (a) {
  return a ? a : function (a, f) {
    var d = this;
    d instanceof String && (d = String(d));
    var h = d.length;
    f = f || 0;

    for (0 > f && (f = Math.max(f + h, 0)); f < h; f++) {
      var b = d[f];
      if (b === a || Object.is(b, a)) return !0;
    }

    return !1;
  };
}, "es7", "es3");
$jscomp.polyfill("String.prototype.includes", function (a) {
  return a ? a : function (a, f) {
    return -1 !== $jscomp.checkStringArgs(this, a, "includes").indexOf(a, f || 0);
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.repeat", function (a) {
  return a ? a : function (a) {
    var d = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > a || 1342177279 < a) throw new RangeError("Invalid count value");
    a |= 0;

    for (var k = ""; a;) {
      if (a & 1 && (k += d), a >>>= 1) d += d;
    }

    return k;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (a, f) {
    var d = $jscomp.checkStringArgs(this, a, "startsWith");
    a += "";
    var h = d.length,
        b = a.length;
    f = Math.max(0, Math.min(f | 0, d.length));

    for (var e = 0; e < b && f < h;) {
      if (d[f++] != a[e++]) return !1;
    }

    return e >= b;
  };
}, "es6", "es3");

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

$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";

$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};

  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};

$jscomp.SymbolClass = function (a, d) {
  this.$jscomp$symbol$id_ = a;
  $jscomp.defineProperty(this, "description", {
    configurable: !0,
    writable: !0,
    value: d
  });
};

$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};

$jscomp.Symbol = function () {
  function a(f) {
    if (this instanceof a) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (f || "") + "_" + d++, f);
  }

  var d = 0;
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

$jscomp.iteratorFromArray = function (a, d) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var f = 0,
      k = {
    next: function next() {
      if (f < a.length) {
        var h = f++;
        return {
          value: d(h, a[h]),
          done: !1
        };
      }

      k.next = function () {
        return {
          done: !0,
          value: void 0
        };
      };

      return k.next();
    }
  };

  k[Symbol.iterator] = function () {
    return k;
  };

  return k;
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

  a.Alt = function (a, f) {
    this.Functor0 = a;
    this.alt = f;
  };

  a.alt = function (a) {
    return a.alt;
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (a, f) {
    this.Applicative0 = a;
    this.Plus1 = f;
  };
})(PS);

(function (a) {
  a.arrayApply = function (a) {
    return function (d) {
      for (var f = a.length, h = d.length, b = Array(f * h), e = 0, c = 0; c < f; c++) {
        for (var g = a[c], l = 0; l < h; l++) {
          b[e++] = g(d[l]);
        }
      }

      return b;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var d = new function (a) {
    this.compose = a;
  }(function (a) {
    return function (d) {
      return function (f) {
        return a(d(f));
      };
    };
  });

  a.compose = function (a) {
    return a.compose;
  };

  a.composeFlipped = function (a) {
    return function (d) {
      return function (f) {
        return (0, a.compose)(f)(d);
      };
    };
  };

  a.semigroupoidFn = d;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var d = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (a, d) {
    this.Semigroupoid0 = a;
    this.identity = d;
  }(function () {
    return f.semigroupoidFn;
  }, function (a) {
    return a;
  });

  d.identity = function (a) {
    return a.identity;
  };

  d.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (a) {
    return function (d) {
      return function (f) {
        return a(f)(d);
      };
    };
  };

  a["const"] = function (a) {
    return function (d) {
      return a;
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (a) {
    return function (d) {
      for (var f = d.length, h = Array(f), b = 0; b < f; b++) {
        h[b] = a(d[b]);
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
  var d = a["Data.Functor"],
      f = a["Data.Functor"],
      k = a["Control.Semigroupoid"],
      h = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(_a) {
    this.map = _a;
  };

  k = new a(k.compose(k.semigroupoidFn));
  f = new a(f.arrayMap);
  d.Functor = a;

  d.map = function (a) {
    return a.map;
  };

  d.mapFlipped = function (a) {
    return function (b) {
      return function (c) {
        return (0, a.map)(c)(b);
      };
    };
  };

  d["void"] = function (a) {
    return (0, a.map)(h["const"](b.unit));
  };

  d.voidRight = function (a) {
    return function (b) {
      return (0, a.map)(h["const"](b));
    };
  };

  d.voidLeft = function (a) {
    return function (b) {
      return function (c) {
        return (0, a.map)(h["const"](c))(b);
      };
    };
  };

  d.flap = function (a) {
    return function (b) {
      return function (c) {
        return (0, a.map)(function (a) {
          return a(c);
        })(b);
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
      h = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(_a2, b) {
    this.Functor0 = _a2;
    this.apply = b;
  };

  var e = new a(function () {
    return b.functorFn;
  }, function (a) {
    return function (b) {
      return function (c) {
        return a(c)(b(c));
      };
    };
  });
  f = new a(function () {
    return b.functorArray;
  }, f.arrayApply);
  d.Apply = a;

  d.apply = function (a) {
    return a.apply;
  };

  d.applyFirst = function (a) {
    return function (c) {
      return function (e) {
        return (0, a.apply)(b.map(a.Functor0())(h["const"])(c))(e);
      };
    };
  };

  d.applySecond = function (a) {
    return function (c) {
      return function (e) {
        return (0, a.apply)(b.map(a.Functor0())(h["const"](k.identity(k.categoryFn)))(c))(e);
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

  a = function a(_a3, e) {
    this.Apply0 = _a3;
    this.pure = e;
  };

  var h = new a(function () {
    return f.applyArray;
  }, function (a) {
    return [a];
  });
  d.Applicative = a;

  d.pure = function (a) {
    return a.pure;
  };

  d.liftA1 = function (a) {
    return function (b) {
      return function (c) {
        return f.apply(a.Apply0())((0, a.pure)(b))(c);
      };
    };
  };

  d.unless = function (a) {
    return function (b) {
      return function (c) {
        if (!b) return c;
        if (b) return (0, a.pure)(k.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [b.constructor.name, c.constructor.name]);
      };
    };
  };

  d.applicativeArray = h;
})(PS);

(function (a) {
  a.arrayBind = function (a) {
    return function (d) {
      for (var f = [], h = 0, b = a.length; h < b; h++) {
        Array.prototype.push.apply(f, d(a[h]));
      }

      return f;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var d = a["Control.Bind"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      h = a["Data.Function"],
      b = function b(a, _b) {
    this.Apply0 = a;
    this.bind = _b;
  };

  a = new b(function () {
    return f.applyArray;
  }, a["Control.Bind"].arrayBind);
  var e = new function (a) {
    this.discard = a;
  }(function (a) {
    return a.bind;
  });
  d.Bind = b;

  d.bind = function (a) {
    return a.bind;
  };

  d.bindFlipped = function (a) {
    return h.flip(a.bind);
  };

  d.discard = function (a) {
    return a.discard;
  };

  d.join = function (a) {
    return function (b) {
      return (0, a.bind)(b)(k.identity(k.categoryFn));
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

  d.Monad = function (a, b) {
    this.Applicative0 = a;
    this.Bind1 = b;
  };

  d.ap = function (a) {
    return function (b) {
      return function (e) {
        return k.bind(a.Bind1())(b)(function (b) {
          return k.bind(a.Bind1())(e)(function (c) {
            return f.pure(a.Applicative0())(b(c));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Lazy"] = a["Control.Lazy"] || {};
  a = a["Control.Lazy"];

  a.defer = function (a) {
    return a.defer;
  };

  a.Lazy = function (a) {
    this.defer = a;
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var d = a["Data.Bifunctor"],
      f = a["Control.Category"];

  d.bimap = function (a) {
    return a.bimap;
  };

  d.Bifunctor = function (a) {
    this.bimap = a;
  };

  d.lmap = function (a) {
    return function (d) {
      return (0, a.bimap)(d)(f.identity(f.categoryFn));
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
  var d = function d(a) {
    return function (d) {
      return function (f) {
        return function (b) {
          return function (e) {
            return b < e ? a : b === e ? d : f;
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
  var d = function d(a) {
    return function (d) {
      return a === d;
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

  a.SProxy = d;
})(PS);

(function (a) {
  a.unsafeGet = function (a) {
    return function (d) {
      return d[a];
    };
  };

  a.unsafeSet = function (a) {
    return function (d) {
      return function (f) {
        var h = {},
            b;

        for (b in f) {
          ({}).hasOwnProperty.call(f, b) && (h[b] = f[b]);
        }

        h[a] = d;
        return h;
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
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RLProxy = d;
})(PS);

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};

  var d = a["Data.Eq"],
      f = a["Data.Eq"],
      k = a["Data.Symbol"],
      h = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.eqRecord = a;
  },
      c = function c(a) {
    this.eq = a;
  };

  a = new c(f.eqStringImpl);
  var g = new e(function (a) {
    return function (a) {
      return function (a) {
        return !0;
      };
    };
  }),
      l = new c(f.eqIntImpl),
      m = new c(f.eqCharImpl);
  f = new c(f.eqBooleanImpl);
  d.Eq = c;

  d.eq = function (a) {
    return a.eq;
  };

  d.eqBoolean = f;
  d.eqInt = l;
  d.eqChar = m;
  d.eqString = a;

  d.eqRec = function (a) {
    return function (a) {
      return new c((0, a.eqRecord)(b.RLProxy.value));
    };
  };

  d.eqRowNil = g;

  d.eqRowCons = function (a) {
    return function (c) {
      return function (c) {
        return function (d) {
          return new e(function (e) {
            return function (e) {
              return function (f) {
                var g = (0, a.eqRecord)(b.RLProxy.value)(e)(f),
                    l = k.reflectSymbol(c)(k.SProxy.value);
                l = h.unsafeGet(l);
                return (0, d.eq)(l(e))(l(f)) && g;
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
    function a() {}

    a.value = new a();
    return a;
  }(),
      f = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      k = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.LT = d;
  a.GT = f;
  a.EQ = k;
})(PS);

(function (a) {
  a.intSub = function (a) {
    return function (d) {
      return a - d | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (a) {
    return function (d) {
      return a + d | 0;
    };
  };

  a.intMul = function (a) {
    return function (d) {
      return a * d | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var d = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (a, d, h, b) {
    this.add = a;
    this.mul = d;
    this.one = h;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);

  d.zero = function (a) {
    return a.zero;
  };

  d.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var d = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (a, d) {
    this.Semiring0 = a;
    this.sub = d;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);

  d.negate = function (a) {
    return function (d) {
      return (0, a.sub)(f.zero(a.Semiring0()))(d);
    };
  };

  d.ringInt = a;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var d = a["Data.Ord"],
      f = a["Data.Ord"],
      k = a["Data.Eq"],
      h = a["Data.Ordering"],
      b = a["Data.Ring"],
      e = a["Data.Semiring"];

  a = function a(_a4, b) {
    this.Eq0 = _a4;
    this.compare = b;
  };

  var c = new a(function () {
    return k.eqInt;
  }, f.ordIntImpl(h.LT.value)(h.EQ.value)(h.GT.value)),
      g = new a(function () {
    return k.eqChar;
  }, f.ordCharImpl(h.LT.value)(h.EQ.value)(h.GT.value));
  f = new a(function () {
    return k.eqBoolean;
  }, f.ordBooleanImpl(h.LT.value)(h.EQ.value)(h.GT.value));

  var l = function l(a) {
    return function (b) {
      return function (c) {
        return (0, a.compare)(b)(c) instanceof h.LT ? !1 : !0;
      };
    };
  };

  d.Ord = a;

  d.compare = function (a) {
    return a.compare;
  };

  d.max = function (a) {
    return function (b) {
      return function (c) {
        var e = (0, a.compare)(b)(c);
        if (e instanceof h.LT) return c;
        if (e instanceof h.EQ || e instanceof h.GT) return b;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [e.constructor.name]);
      };
    };
  };

  d.abs = function (a) {
    return function (c) {
      return function (d) {
        return l(a)(d)(e.zero(c.Semiring0())) ? d : b.negate(c)(d);
      };
    };
  };

  d.ordBoolean = f;
  d.ordInt = c;
  d.ordChar = g;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var d = a["Data.Bounded"],
      f = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(_a5, b, d) {
    this.Ord0 = _a5;
    this.bottom = b;
    this.top = d;
  };

  var h = new a(function () {
    return k.ordInt;
  }, f.bottomInt, f.topInt);
  f = new a(function () {
    return k.ordChar;
  }, f.bottomChar, f.topChar);
  var b = new a(function () {
    return k.ordBoolean;
  }, !1, !0);
  d.Bounded = a;

  d.bottom = function (a) {
    return a.bottom;
  };

  d.top = function (a) {
    return a.top;
  };

  d.boundedBoolean = b;
  d.boundedInt = h;
  d.boundedChar = f;
})(PS);

(function (a) {
  a.showIntImpl = function (a) {
    return a.toString();
  };

  a.showCharImpl = function (a) {
    var d = a.charCodeAt(0);

    if (32 > d || 127 === d) {
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

      return "'\\" + d.toString(10) + "'";
    }

    return "'" === a || "\\" === a ? "'\\" + a + "'" : "'" + a + "'";
  };

  a.showStringImpl = function (a) {
    var d = a.length;
    return '"' + a.replace(/[\0-\x1F\x7F"\\]/g, function (f, h) {
      switch (f) {
        case '"':
        case "\\":
          return "\\" + f;

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
      h = h < d && "0" <= a[h] && "9" >= a[h] ? "\\&" : "";
      return "\\" + f.charCodeAt(0).toString(10) + h;
    }) + '"';
  };

  a.showArrayImpl = function (a) {
    return function (d) {
      for (var f = [], h = 0, b = d.length; h < b; h++) {
        f[h] = a(d[h]);
      }

      return "[" + f.join(",") + "]";
    };
  };

  a.cons = function (a) {
    return function (d) {
      return [a].concat(d);
    };
  };

  a.join = function (a) {
    return function (d) {
      return d.join(a);
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};

  var d = a["Data.Show"],
      f = a["Data.Show"],
      k = a["Data.Symbol"],
      h = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.showRecordFields = a;
  },
      c = function c(a) {
    this.show = a;
  };

  a = new c(f.showStringImpl);
  var g = new e(function (a) {
    return function (a) {
      return [];
    };
  }),
      l = new c(f.showIntImpl),
      m = new c(f.showCharImpl),
      r = new c(function (a) {
    if (a) return "true";
    if (!a) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [a.constructor.name]);
  });
  d.Show = c;

  d.show = function (a) {
    return a.show;
  };

  d.showBoolean = r;
  d.showInt = l;
  d.showChar = m;
  d.showString = a;

  d.showArray = function (a) {
    return new c(f.showArrayImpl(a.show));
  };

  d.showRecord = function (a) {
    return function (a) {
      return new c(function (c) {
        c = (0, a.showRecordFields)(b.RLProxy.value)(c);
        return 0 === c.length ? "{}" : f.join(" ")(["{", f.join(", ")(c), "}"]);
      });
    };
  };

  d.showRecordFieldsNil = g;

  d.showRecordFieldsCons = function (a) {
    return function (c) {
      return function (d) {
        return new e(function (e) {
          return function (e) {
            var g = (0, c.showRecordFields)(b.RLProxy.value)(e),
                l = k.reflectSymbol(a)(k.SProxy.value);
            e = h.unsafeGet(l)(e);
            return f.cons(f.join(": ")([l, (0, d.show)(e)]))(g);
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
      h = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Data.Bounded"],
      c = a["Data.Eq"],
      g = a["Data.Function"],
      l = a["Data.Functor"],
      m = a["Data.Ord"],
      r = a["Data.Ordering"],
      n = a["Data.Show"],
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      p = function p(a) {
    return function (b) {
      return function (c) {
        if (c instanceof y) return a;
        if (c instanceof t) return b(c.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  };

  a = p(!0)(g["const"](!1));
  g = p(!1)(g["const"](!0));

  var z = new l.Functor(function (a) {
    return function (b) {
      return b instanceof t ? new t(a(b.value0)) : y.value;
    };
  }),
      w = function w(a) {
    return new c.Eq(function (b) {
      return function (e) {
        return b instanceof y && e instanceof y ? !0 : b instanceof t && e instanceof t ? c.eq(a)(b.value0)(e.value0) : !1;
      };
    });
  },
      x = function x(a) {
    return new m.Ord(function () {
      return w(a.Eq0());
    }, function (b) {
      return function (c) {
        if (b instanceof y && c instanceof y) return r.EQ.value;
        if (b instanceof y) return r.LT.value;
        if (c instanceof y) return r.GT.value;
        if (b instanceof t && c instanceof t) return m.compare(a)(b.value0)(c.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [b.constructor.name, c.constructor.name]);
      };
    });
  },
      u = new k.Apply(function () {
    return z;
  }, function (a) {
    return function (b) {
      if (a instanceof t) return l.map(z)(a.value0)(b);
      if (a instanceof y) return y.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  });

  k = new h.Bind(function () {
    return u;
  }, function (a) {
    return function (b) {
      if (a instanceof t) return b(a.value0);
      if (a instanceof y) return y.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [a.constructor.name, b.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return u;
  }, t.create);
  d.Nothing = y;
  d.Just = t;
  d.maybe = p;

  d.fromMaybe = function (a) {
    return p(a)(b.identity(b.categoryFn));
  };

  d.isJust = g;
  d.isNothing = a;

  d.fromJust = function (a) {
    return function (a) {
      if (a instanceof t) return a.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [a.constructor.name]);
    };
  };

  d.functorMaybe = z;
  d.applyMaybe = u;
  d.applicativeMaybe = f;
  d.bindMaybe = k;
  d.eqMaybe = w;
  d.ordMaybe = x;

  d.boundedMaybe = function (a) {
    return new e.Bounded(function () {
      return x(a.Ord0());
    }, y.value, new t(e.top(a)));
  };

  d.showMaybe = function (a) {
    return new n.Show(function (b) {
      if (b instanceof t) return "(Just " + (n.show(a)(b.value0) + ")");
      if (b instanceof y) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [b.constructor.name]);
    });
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var d = a["Data.Either"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Bifunctor"],
      c = a["Data.Function"],
      g = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      r = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      n = new g.Functor(function (a) {
    return function (b) {
      if (b instanceof m) return new m(b.value0);
      if (b instanceof r) return new r(a(b.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [b.constructor.name]);
    };
  });

  a = function a(_a6) {
    return function (b) {
      return function (c) {
        if (c instanceof m) return _a6(c.value0);
        if (c instanceof r) return b(c.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [_a6.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  };

  c = a(c["const"](l.Nothing.value))(l.Just.create);
  e = new e.Bifunctor(function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m) return new m(a(c.value0));
        if (c instanceof r) return new r(b(c.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  });
  var y = new k.Apply(function () {
    return n;
  }, function (a) {
    return function (b) {
      if (a instanceof m) return new m(a.value0);
      if (a instanceof r) return g.map(n)(a.value0)(b);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      t = new h.Bind(function () {
    return y;
  }, a(function (a) {
    return function (b) {
      return new m(a);
    };
  })(function (a) {
    return function (b) {
      return b(a);
    };
  })),
      p = new f.Applicative(function () {
    return y;
  }, r.create);
  f = new b.Monad(function () {
    return p;
  }, function () {
    return t;
  });
  d.Left = m;
  d.Right = r;
  d.either = a;
  d.hush = c;
  d.functorEither = n;
  d.bifunctorEither = e;
  d.applicativeEither = p;
  d.bindEither = t;
  d.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var d = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      h = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      b = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  a = function a(_a7, b) {
    this.Monad0 = _a7;
    this.tailRecM = b;
  };

  var e = function e(a) {
    return function (c) {
      c = a(c);

      for (var e = !1, d; !e;) {
        if (d = c, d instanceof h) c = a(d.value0), d = void 0;else if (d instanceof b) e = !0, d = d.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [d.constructor.name]);
      }

      return d;
    };
  },
      c = new a(function () {
    return k.monadEither;
  }, function (a) {
    return function (c) {
      return e(function (c) {
        if (c instanceof k.Left) return new b(new k.Left(c.value0));
        if (c instanceof k.Right && c.value0 instanceof h) return new h(a(c.value0.value0));
        if (c instanceof k.Right && c.value0 instanceof b) return new b(new k.Right(c.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [c.constructor.name]);
      })(a(c));
    };
  });

  f = new f.Bifunctor(function (a) {
    return function (c) {
      return function (e) {
        if (e instanceof h) return new h(a(e.value0));
        if (e instanceof b) return new b(c(e.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [a.constructor.name, c.constructor.name, e.constructor.name]);
      };
    };
  });
  d.Loop = h;
  d.Done = b;
  d.MonadRec = a;

  d.tailRecM = function (a) {
    return a.tailRecM;
  };

  d.bifunctorStep = f;
  d.monadRecEither = c;
})(PS);

(function (a) {
  a.foldrArray = function (a) {
    return function (d) {
      return function (f) {
        for (var h = d, b = f.length - 1; 0 <= b; b--) {
          h = a(f[b])(h);
        }

        return h;
      };
    };
  };

  a.foldlArray = function (a) {
    return function (d) {
      return function (f) {
        for (var h = d, b = f.length, e = 0; e < b; e++) {
          h = a(h)(f[e]);
        }

        return h;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a.boolConj = function (a) {
    return function (d) {
      return a && d;
    };
  };

  a.boolDisj = function (a) {
    return function (d) {
      return a || d;
    };
  };

  a.boolNot = function (a) {
    return !a;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});

(function (a) {
  a["Data.HeytingAlgebra"] = a["Data.HeytingAlgebra"] || {};
  var d = a["Data.HeytingAlgebra"];
  a = a["Data.HeytingAlgebra"];
  var f = new function (a, d, b, e, c, f) {
    this.conj = a;
    this.disj = d;
    this.ff = b;
    this.implies = e;
    this.not = c;
    this.tt = f;
  }(a.boolConj, a.boolDisj, !1, function (a) {
    return function (d) {
      return (0, f.disj)((0, f.not)(a))(d);
    };
  }, a.boolNot, !0);

  d.ff = function (a) {
    return a.ff;
  };

  d.disj = function (a) {
    return a.disj;
  };

  d.not = function (a) {
    return a.not;
  };

  d.heytingAlgebraBoolean = f;
})(PS);

(function (a) {
  a.concatString = function (a) {
    return function (d) {
      return a + d;
    };
  };

  a.concatArray = function (a) {
    return function (d) {
      return 0 === a.length ? d : 0 === d.length ? a : a.concat(d);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};

  var d = a["Data.Semigroup"],
      f = a["Data.Semigroup"],
      k = function k(a) {
    this.append = a;
  };

  a = new k(f.concatString);
  f = new k(f.concatArray);
  d.Semigroup = k;

  d.append = function (a) {
    return a.append;
  };

  d.semigroupString = a;

  d.semigroupFn = function (a) {
    return new k(function (b) {
      return function (e) {
        return function (c) {
          return (0, a.append)(b(c))(e(c));
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
      k = function k(a, e) {
    this.Semigroup0 = a;
    this.mempty = e;
  };

  a = new k(function () {
    return f.semigroupString;
  }, "");
  var h = new k(function () {
    return f.semigroupArray;
  }, []);
  d.Monoid = k;

  d.mempty = function (a) {
    return a.mempty;
  };

  d.monoidFn = function (a) {
    return new k(function () {
      return f.semigroupFn(a.Semigroup0());
    }, function (b) {
      return a.mempty;
    });
  };

  d.monoidString = a;
  d.monoidArray = h;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var d = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      h = a["Data.Semigroup"],
      b = function b(a) {
    return new h.Semigroup(function (b) {
      return function (c) {
        return f.disj(a)(b)(c);
      };
    });
  };

  d.Disj = function (a) {
    return a;
  };

  d.monoidDisj = function (a) {
    return new k.Monoid(function () {
      return b(a);
    }, f.ff(a));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var d = a["Data.Newtype"],
      f = a["Data.Functor"],
      k = function k(a, b) {
    this.unwrap = a;
    this.wrap = b;
  };

  a = new k(function (a) {
    return a;
  }, a["Data.Monoid.Disj"].Disj);

  d.unwrap = function (a) {
    return a.unwrap;
  };

  d.wrap = function (a) {
    return a.wrap;
  };

  d.Newtype = k;

  d.alaF = function (a) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (d) {
            return function (d) {
              var g = f.map(b)(c.unwrap),
                  h = f.map(a)(e.wrap);
              return function (a) {
                return g(d(h(a)));
              };
            };
          };
        };
      };
    };
  };

  d.over = function (a) {
    return function (b) {
      return function (e) {
        return function (c) {
          var e = b.wrap,
              d = a.unwrap;
          return function (a) {
            return e(c(d(a)));
          };
        };
      };
    };
  };

  d.under = function (a) {
    return function (b) {
      return function (e) {
        return function (c) {
          var e = b.unwrap,
              d = a.wrap;
          return function (a) {
            return e(c(d(a)));
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
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Eq"],
      c = a["Data.Function"],
      g = a["Data.Functor"],
      l = a["Data.HeytingAlgebra"],
      m = a["Data.Maybe"],
      r = a["Data.Monoid"],
      n = a["Data.Monoid.Disj"],
      y = a["Data.Newtype"],
      t = a["Data.Semigroup"],
      p = a["Data.Unit"];

  a = function a(_a8, b, c) {
    this.foldMap = _a8;
    this.foldl = b;
    this.foldr = c;
  };

  var z = function z(a) {
    return function (b) {
      return function (c) {
        return (0, b.foldr)(function () {
          var b = h.applySecond(a.Apply0());
          return function (a) {
            return b(c(a));
          };
        }())(k.pure(a)(p.unit));
      };
    };
  },
      w = new a(function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m.Nothing) return r.mempty(a);
        if (c instanceof m.Just) return b(c.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [b.constructor.name, c.constructor.name]);
      };
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m.Nothing) return b;
        if (c instanceof m.Just) return a(b)(c.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        if (c instanceof m.Nothing) return b;
        if (c instanceof m.Just) return a(c.value0)(b);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [a.constructor.name, b.constructor.name, c.constructor.name]);
      };
    };
  }),
      x = function x(a) {
    return function (b) {
      return function (c) {
        return (0, a.foldr)(function (a) {
          return function (e) {
            return t.append(b.Semigroup0())(c(a))(e);
          };
        })(r.mempty(b));
      };
    };
  },
      u = new a(function (a) {
    return x(u)(a);
  }, f.foldlArray, f.foldrArray),
      H = function H(a) {
    return function (b) {
      return y.alaF(g.functorFn)(g.functorFn)(y.newtypeDisj)(y.newtypeDisj)(n.Disj)((0, a.foldMap)(n.monoidDisj(b)));
    };
  },
      q = function q(a) {
    return function (b) {
      var c = H(a)(l.heytingAlgebraBoolean),
          d = e.eq(b);
      return function (a) {
        return c(d(a));
      };
    };
  };

  d.Foldable = a;

  d.foldr = function (a) {
    return a.foldr;
  };

  d.foldl = function (a) {
    return a.foldl;
  };

  d.foldMap = function (a) {
    return a.foldMap;
  };

  d.fold = function (a) {
    return function (c) {
      return (0, a.foldMap)(c)(b.identity(b.categoryFn));
    };
  };

  d.traverse_ = z;

  d.for_ = function (a) {
    return function (b) {
      return c.flip(z(a)(b));
    };
  };

  d.intercalate = function (a) {
    return function (b) {
      return function (c) {
        return function (e) {
          return (0, a.foldl)(function (a) {
            return function (e) {
              return a.init ? {
                init: !1,
                acc: e
              } : {
                init: !1,
                acc: t.append(b.Semigroup0())(a.acc)(t.append(b.Semigroup0())(c)(e))
              };
            };
          })({
            init: !0,
            acc: r.mempty(b)
          })(e).acc;
        };
      };
    };
  };

  d.any = H;

  d.notElem = function (a) {
    return function (b) {
      return function (c) {
        var e = l.not(l.heytingAlgebraBoolean),
            d = q(a)(b)(c);
        return function (a) {
          return e(d(a));
        };
      };
    };
  };

  d.foldableArray = u;
  d.foldableMaybe = w;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var d = a["Data.NonEmpty"],
      f = a["Data.Foldable"],
      k = a["Data.Functor"],
      h = a["Data.Semigroup"],
      b = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  d.NonEmpty = b;

  d.functorNonEmpty = function (a) {
    return new k.Functor(function (c) {
      return function (e) {
        return new b(c(e.value0), k.map(a)(c)(e.value1));
      };
    });
  };

  d.foldableNonEmpty = function (a) {
    return new f.Foldable(function (b) {
      return function (c) {
        return function (e) {
          return h.append(b.Semigroup0())(c(e.value0))(f.foldMap(a)(b)(c)(e.value1));
        };
      };
    }, function (b) {
      return function (c) {
        return function (e) {
          return f.foldl(a)(b)(b(c)(e.value0))(e.value1);
        };
      };
    }, function (b) {
      return function (c) {
        return function (e) {
          return b(e.value0)(f.foldr(a)(b)(c)(e.value1));
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
      h = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.NonEmpty"],
      c = a["Data.Semigroup"],
      g = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      l = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  a = new h.Functor(function (a) {
    return function (b) {
      return function (c) {
        function e(b, e) {
          if (e instanceof l && e.value1 instanceof l && e.value1.value1 instanceof l) d = new l(e, b), c = e.value1.value1.value1;else return f = !0, function (b) {
            return function (c) {
              for (var e = b, d = !1, f; !d;) {
                f = e;
                var g = c;
                f instanceof l && f.value0 instanceof l && f.value0.value1 instanceof l && f.value0.value1.value1 instanceof l ? (e = f.value1, c = new l(a(f.value0.value0), new l(a(f.value0.value1.value0), new l(a(f.value0.value1.value1.value0), g))), f = void 0) : (d = !0, f = g);
              }

              return f;
            };
          }(b)(function (b) {
            return b instanceof l && b.value1 instanceof l && b.value1.value1 instanceof g ? new l(a(b.value0), new l(a(b.value1.value0), g.value)) : b instanceof l && b.value1 instanceof g ? new l(a(b.value0), g.value) : g.value;
          }(e));
        }

        for (var d = b, f = !1, h; !f;) {
          h = e(d, c);
        }

        return h;
      };
    }(g.value);
  });
  a = e.functorNonEmpty(a);
  var m = new f.Foldable(function (a) {
    return function (e) {
      return f.foldl(m)(function (b) {
        var d = c.append(a.Semigroup0())(b);
        return function (a) {
          return d(e(a));
        };
      })(b.mempty(a));
    };
  }, function (a) {
    return function (b) {
      return function (c) {
        for (var e = b, d = !1, f; !d;) {
          f = e;
          var h = c;
          if (h instanceof g) d = !0;else {
            if (h instanceof l) e = a(f)(h.value0), c = h.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [h.constructor.name]);
            f = void 0;
          }
        }

        return f;
      };
    };
  }, function (a) {
    return function (b) {
      var c = f.foldl(m)(k.flip(l.create))(g.value),
          e = f.foldl(m)(k.flip(a))(b);
      return function (a) {
        return e(c(a));
      };
    };
  });
  e = e.foldableNonEmpty(m);
  var r = new c.Semigroup(function (a) {
    return function (b) {
      return f.foldr(m)(l.create)(b)(a);
    };
  });
  h = new b.Monoid(function () {
    return r;
  }, g.value);
  d.Nil = g;
  d.Cons = l;
  d.monoidList = h;
  d.foldableList = m;
  d.functorNonEmptyList = a;
  d.foldableNonEmptyList = e;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var d = a["Data.List"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Rec.Class"],
      g = a["Data.Bifunctor"],
      l = a["Data.Functor"],
      m = a["Data.List.Types"],
      r = a["Data.Unit"],
      n = function () {
    return function (a) {
      return function (b) {
        for (var c = a, e = !1, d; !e;) {
          d = c;
          var f = b;
          if (f instanceof m.Nil) e = !0;else {
            if (f instanceof m.Cons) c = new m.Cons(f.value0, d), b = f.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [d.constructor.name, f.constructor.name]);
            d = void 0;
          }
        }

        return d;
      };
    }(m.Nil.value);
  }(),
      y = function y(a) {
    return function (b) {
      return function (c) {
        return h.apply(a.Applicative0().Apply0())(l.map(a.Plus1().Alt0().Functor0())(m.Cons.create)(c))(e.defer(b)(function (e) {
          return t(a)(b)(c);
        }));
      };
    };
  },
      t = function t(a) {
    return function (b) {
      return function (c) {
        return f.alt(a.Plus1().Alt0())(y(a)(b)(c))(k.pure(a.Applicative0())(m.Nil.value));
      };
    };
  };

  d.some = y;

  d.manyRec = function (a) {
    return function (e) {
      return function (d) {
        return c.tailRecM(a)(function (h) {
          return b.bind(a.Monad0().Bind1())(f.alt(e.Plus1().Alt0())(l.map(e.Plus1().Alt0().Functor0())(c.Loop.create)(d))(k.pure(e.Applicative0())(new c.Done(r.unit))))(function (a) {
            return k.pure(e.Applicative0())(g.bimap(c.bifunctorStep)(function (a) {
              return new m.Cons(a, h);
            })(function (a) {
              return n(h);
            })(a));
          });
        })(m.Nil.value);
      };
    };
  };

  d.reverse = n;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var d = a["Data.Tuple"];
  a = a["Data.Functor"];

  var f = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (d) {
      return function (b) {
        return new a(d, b);
      };
    };

    return a;
  }();

  a = new a.Functor(function (a) {
    return function (d) {
      return new f(d.value0, a(d.value1));
    };
  });
  d.Tuple = f;

  d.fst = function (a) {
    return a.value0;
  };

  d.snd = function (a) {
    return a.value1;
  };

  d.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var d = a["Data.CatQueue"],
      f = a["Data.List"],
      k = a["Data.List.Types"],
      h = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  a = new e(k.Nil.value, k.Nil.value);
  d.empty = a;

  d["null"] = function (a) {
    return a.value0 instanceof k.Nil && a.value1 instanceof k.Nil ? !0 : !1;
  };

  d.snoc = function (a) {
    return function (b) {
      return new e(a.value0, new k.Cons(b, a.value1));
    };
  };

  d.uncons = function (a) {
    for (var c = !1, d; !c;) {
      if (d = a, d.value0 instanceof k.Nil && d.value1 instanceof k.Nil) c = !0, d = h.Nothing.value;else if (d.value0 instanceof k.Nil) a = new e(f.reverse(d.value1), k.Nil.value), d = void 0;else if (d.value0 instanceof k.Cons) c = !0, d = new h.Just(new b.Tuple(d.value0.value0, new e(d.value0.value1, d.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [d.constructor.name]);
    }

    return d;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var d = a["Data.CatList"],
      f = a["Data.CatQueue"],
      k = a["Data.List.Types"],
      h = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      e = a["Data.Tuple"],
      c = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      g = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      l = function l(a) {
    return function (b) {
      if (a instanceof c) return b;
      if (b instanceof c) return a;
      if (a instanceof g) return new g(a.value0, f.snoc(a.value1)(b));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [a.constructor.name, b.constructor.name]);
    };
  },
      m = function m(a) {
    return function (b) {
      return function (c) {
        var e = function e(a) {
          return function (b) {
            return function (c) {
              for (var e = a, d = b, f = !1, g; !f;) {
                g = e;
                var h = d,
                    l = c;
                if (l instanceof k.Nil) f = !0, g = h;else {
                  if (l instanceof k.Cons) e = g, d = g(h)(l.value0), c = l.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [g.constructor.name, h.constructor.name, l.constructor.name]);
                  g = void 0;
                }
              }

              return g;
            };
          };
        };

        return function (c) {
          return function (d) {
            function g(c, g) {
              c = f.uncons(c);
              if (c instanceof h.Nothing) return m = !0, e(function (a) {
                return function (b) {
                  return b(a);
                };
              })(b)(g);
              if (c instanceof h.Just) l = c.value0.value1, d = new k.Cons(a(c.value0.value0), g);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [c.constructor.name]);
            }

            for (var l = c, m = !1, n; !m;) {
              n = g(l, d);
            }

            return n;
          };
        }(c)(k.Nil.value);
      };
    };
  };

  a = c.value;
  b = new b.Semigroup(l);
  d.empty = a;

  d.snoc = function (a) {
    return function (b) {
      return l(a)(new g(b, f.empty));
    };
  };

  d.uncons = function (a) {
    if (a instanceof c) return h.Nothing.value;

    if (a instanceof g) {
      var b = h.Just,
          d = e.Tuple,
          k = a.value0;
      a = f["null"](a.value1) ? c.value : m(l)(c.value)(a.value1);
      return new b(new d(k, a));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [a.constructor.name]);
  };

  d.semigroupCatList = b;
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

  var d = a["Control.Monad.Free"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.CatList"],
      c = a["Data.Either"],
      g = a["Data.Functor"],
      l = a["Data.Maybe"],
      m = a["Data.Semigroup"],
      r = a["Unsafe.Coerce"],
      n = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      y = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      t = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      p = function p(a) {
    function b(b) {
      var d = function d(a) {
        return function (b) {
          return new n(a.value0, m.append(e.semigroupCatList)(a.value1)(b));
        };
      };

      if (b.value0 instanceof y) {
        var f = e.uncons(b.value1);
        if (f instanceof l.Nothing) return c = !0, new y(b.value0.value0);

        if (f instanceof l.Just) {
          a = d((0, f.value0.value0)(b.value0.value0))(f.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [f.constructor.name]);
      }

      if (b.value0 instanceof t) return c = !0, new t(b.value0.value0, function (a) {
        return d(b.value0.value1(a))(b.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [b.value0.constructor.name]);
    }

    for (var c = !1, d; !c;) {
      d = b(a);
    }

    return d;
  },
      z = function z(a) {
    return function (b) {
      return function (c) {
        c = p(c);
        if (c instanceof y) return b(c.value0);
        if (c instanceof t) return a(c.value0)(c.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [c.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return H;
  }, function () {
    return x;
  });
  var w = new g.Functor(function (a) {
    return function (b) {
      return h.bindFlipped(x)(function () {
        var b = f.pure(H);
        return function (c) {
          return b(a(c));
        };
      }())(b);
    };
  }),
      x = new h.Bind(function () {
    return u;
  }, function (a) {
    return function (b) {
      return new n(a.value0, e.snoc(a.value1)(b));
    };
  }),
      u = new k.Apply(function () {
    return w;
  }, b.ap(a)),
      H = new f.Applicative(function () {
    return u;
  }, function (a) {
    return new n(y.create(a), e.empty);
  });

  d.wrap = function (a) {
    return new n(new t(a, r.unsafeCoerce), e.empty);
  };

  d.liftF = function (a) {
    return new n(new t(a, function () {
      var a = f.pure(H);
      return function (b) {
        return a(b);
      };
    }()), e.empty);
  };

  d.resume = function (a) {
    return z(function (b) {
      return function (e) {
        return new c.Left(g.map(a)(e)(b));
      };
    })(c.Right.create);
  };

  d["resume'"] = z;
  d.freeFunctor = w;
  d.freeBind = x;
  d.freeApplicative = H;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (a) {
    return a.orr;
  };

  a.MultiAlternative = function (a, f) {
    this.Plus0 = a;
    this.orr = f;
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

  a.Parallel = function (a, f, k, h) {
    this.Applicative1 = a;
    this.Monad0 = f;
    this.parallel = k;
    this.sequential = h;
  };
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  a = a["Control.Plus"];

  a.Plus = function (a, f) {
    this.Alt0 = a;
    this.empty = f;
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
    return function (d) {
      for (var f = a > d ? -1 : 1, h = Array(f * (d - a) + 1), b = a, e = 0; b !== d;) {
        h[e++] = b, b += f;
      }

      h[e] = b;
      return h;
    };
  };

  a.fromFoldableImpl = function () {
    function a(a, b) {
      this.head = a;
      this.tail = b;
    }

    function f(d) {
      return function (b) {
        return new a(d, b);
      };
    }

    var k = {};
    return function (a) {
      return function (b) {
        var e = [],
            c = 0;

        for (b = a(f)(k)(b); b !== k;) {
          e[c++] = b.head, b = b.tail;
        }

        return e;
      };
    };
  }();

  a.length = function (a) {
    return a.length;
  };

  a.cons = function (a) {
    return function (d) {
      return [a].concat(d);
    };
  };

  a.snoc = function (a) {
    return function (d) {
      var f = a.slice();
      f.push(d);
      return f;
    };
  };

  a["uncons'"] = function (a) {
    return function (d) {
      return function (f) {
        return 0 === f.length ? a({}) : d(f[0])(f.slice(1));
      };
    };
  };

  a._updateAt = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            if (0 > f || f >= b.length) return d;
            b = b.slice();
            b[f] = h;
            return a(b);
          };
        };
      };
    };
  };

  a.filter = function (a) {
    return function (d) {
      return d.filter(a);
    };
  };

  a.slice = function (a) {
    return function (d) {
      return function (f) {
        return f.slice(a, d);
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
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Category"],
      g = a["Control.Lazy"],
      l = a["Data.Boolean"],
      m = a["Data.Foldable"],
      r = a["Data.Function"],
      n = a["Data.Functor"],
      y = a["Data.Maybe"];
  a = f._updateAt(y.Just.create)(y.Nothing.value);

  var t = f["uncons'"](r["const"](y.Nothing.value))(function (a) {
    return function (b) {
      return new y.Just({
        head: a,
        tail: b
      });
    };
  }),
      p = function p(a) {
    return [a];
  },
      z = function z(a) {
    return function (c) {
      return function (e) {
        return b.apply(a.Applicative0().Apply0())(n.map(a.Plus1().Alt0().Functor0())(f.cons)(e))(g.defer(c)(function (b) {
          return w(a)(c)(e);
        }));
      };
    };
  },
      w = function w(a) {
    return function (b) {
      return function (c) {
        return k.alt(a.Plus1().Alt0())(z(a)(b)(c))(h.pure(a.Applicative0())([]));
      };
    };
  },
      x = r.flip(e.bind(e.bindArray));

  e = function (a) {
    return x(function () {
      var b = y.maybe([])(p);
      return function (c) {
        return b(a(c));
      };
    }());
  }(c.identity(c.categoryFn));

  d.fromFoldable = function (a) {
    return f.fromFoldableImpl(m.foldr(a));
  };

  d.singleton = p;
  d.some = z;

  d.init = function (a) {
    if (0 === f.length(a)) return y.Nothing.value;
    if (l.otherwise) return new y.Just(f.slice(0)(f.length(a) - 1 | 0)(a));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [a.constructor.name]);
  };

  d.uncons = t;
  d.updateAt = a;
  d.concatMap = x;
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
      h = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      e = a.unsafeCoerce,
      c = a.unsafeCoerce;

  a = function (a) {
    var b = h.fromJust();
    return function (e) {
      return b(a(c(e)));
    };
  }(f.uncons);

  (function (a) {
    return function (b) {
      return a(c(b));
    };
  })(f.length);

  d.fromArray = function (a) {
    if (0 < f.length(a)) return new h.Just(e(a));
    if (k.otherwise) return h.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [a.constructor.name]);
  };

  d.toArray = c;

  d.singleton = function (a) {
    return e(f.singleton(a));
  };

  d["cons'"] = function (a) {
    return function (b) {
      return e(f.cons(a)(b));
    };
  };

  d.snoc = function (a) {
    return function (b) {
      return e(f.snoc(c(a))(b));
    };
  };

  d.uncons = a;

  d.updateAt = function (a) {
    return function (e) {
      var d = f.updateAt(a)(e);
      return function (a) {
        return b(d(c(a)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (a) {
    return function (d) {
      for (var f = d[0], h = d.length, b = 1; b < h; b++) {
        f = a(f)(d[b]);
      }

      return f;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (a) {
    return function (d) {
      for (var f = d.length, h = Array(f), b = 0; b < f; b++) {
        h[b] = a(b)(d[b]);
      }

      return h;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var d = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (a, d) {
    this.Functor0 = a;
    this.mapWithIndex = d;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  d.mapWithIndex = function (a) {
    return a.mapWithIndex;
  };

  d.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var d = a["Data.FoldableWithIndex"],
      f = a["Data.Foldable"],
      k = a["Data.FunctorWithIndex"],
      h = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      c = function c(a) {
    return function (c) {
      return function (e) {
        return (0, a.foldrWithIndex)(function (a) {
          return function (d) {
            return function (f) {
              return b.append(c.Semigroup0())(e(a)(d))(f);
            };
          };
        })(h.mempty(c));
      };
    };
  },
      g = new function (a, b, c, e) {
    this.Foldable0 = a;
    this.foldMapWithIndex = b;
    this.foldlWithIndex = c;
    this.foldrWithIndex = e;
  }(function () {
    return f.foldableArray;
  }, function (a) {
    return c(g)(a);
  }, function (a) {
    return function (b) {
      var c = f.foldl(f.foldableArray)(function (b) {
        return function (c) {
          return a(c.value0)(b)(c.value1);
        };
      })(b),
          d = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (a) {
        return c(d(a));
      };
    };
  }, function (a) {
    return function (b) {
      var c = f.foldr(f.foldableArray)(function (b) {
        return function (c) {
          return a(b.value0)(b.value1)(c);
        };
      })(b),
          d = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (a) {
        return c(d(a));
      };
    };
  });

  d.foldlWithIndex = function (a) {
    return a.foldlWithIndex;
  };

  d.foldableWithIndexArray = g;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var d = a["Data.Semigroup.Foldable"],
      f = a["Data.Functor"];

  d.Foldable1 = function (a, d, b) {
    this.Foldable0 = a;
    this.fold1 = d;
    this.foldMap1 = b;
  };

  d.foldMap1 = function (a) {
    return a.foldMap1;
  };

  d.foldMap1Default = function (a) {
    return function (d) {
      return function (b) {
        return function (e) {
          var c = (0, a.fold1)(b),
              g = f.map(d)(e);
          return function (a) {
            return c(g(a));
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

    function f(a) {
      return function (b) {
        return [a, b];
      };
    }

    function k(a) {
      return function (b) {
        return function (c) {
          return [a, b, c];
        };
      };
    }

    function h(a) {
      return function (b) {
        return a.concat(b);
      };
    }

    return function (b) {
      return function (e) {
        return function (c) {
          return function (d) {
            return function (g) {
              function l(m, n) {
                switch (n - m) {
                  case 0:
                    return c([]);

                  case 1:
                    return e(a)(d(g[m]));

                  case 2:
                    return b(e(f)(d(g[m])))(d(g[m + 1]));

                  case 3:
                    return b(b(e(k)(d(g[m])))(d(g[m + 1])))(d(g[m + 2]));

                  default:
                    var r = m + 2 * Math.floor((n - m) / 4);
                    return b(e(h)(l(m, r)))(l(r, n));
                }
              }

              return l(0, g.length);
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
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Foldable"],
      c = a["Data.Functor"],
      g = function g(a) {
    return function (c) {
      return (0, a.traverse)(c)(b.identity(b.categoryFn));
    };
  },
      l = new function (a, b, c, e) {
    this.Foldable1 = a;
    this.Functor0 = b;
    this.sequence = c;
    this.traverse = e;
  }(function () {
    return e.foldableArray;
  }, function () {
    return c.functorArray;
  }, function (a) {
    return g(l)(a);
  }, function (a) {
    return f.traverseArrayImpl(h.apply(a.Apply0()))(c.map(a.Apply0().Functor0()))(k.pure(a));
  });

  d.traverse = function (a) {
    return a.traverse;
  };

  d.sequence = function (a) {
    return a.sequence;
  };

  d.traversableArray = l;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                c.push(f(e));
                e = h(e);
                if (a(e)) return c;
                e = d(e);
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
      h = a["Data.Tuple"];
  a = new function (a) {
    this.unfoldr1 = a;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(h.fst)(h.snd));

  var b = function b(a) {
    return function (b) {
      return function (c) {
        return (0, a.unfoldr1)(function (a) {
          if (0 >= a) return new h.Tuple(c, k.Nothing.value);
          if (f.otherwise) return new h.Tuple(c, new k.Just(a - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [a.constructor.name]);
        })(b - 1 | 0);
      };
    };
  };

  d.unfoldr1 = function (a) {
    return a.unfoldr1;
  };

  d.singleton = function (a) {
    return b(a)(1);
  };

  d.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var d = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Semigroup"],
      h = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      e = a["Data.Traversable"].traversableArray,
      c = k.semigroupArray,
      g = a["Data.Functor"].functorArray,
      l = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      m = a["Data.Foldable"].foldableArray,
      r = new h.Foldable1(function () {
    return m;
  }, function (a) {
    return f.fold1Impl(k.append(a));
  }, function (a) {
    return h.foldMap1Default(r)(g)(a);
  });
  d.semigroupNonEmptyArray = c;
  d.functorNonEmptyArray = g;
  d.foldableNonEmptyArray = m;
  d.foldableWithIndexNonEmptyArray = l;
  d.foldable1NonEmptyArray = r;
  d.unfoldable1NonEmptyArray = b;
  d.traversableNonEmptyArray = e;
})(PS);

(function (a) {
  a.pureE = function (a) {
    return function () {
      return a;
    };
  };

  a.bindE = function (a) {
    return function (d) {
      return function () {
        return d(a())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var d = a.Effect,
      f = a.Effect,
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"];
  a = a["Data.Functor"];
  var c = new e.Monad(function () {
    return m;
  }, function () {
    return g;
  }),
      g = new b.Bind(function () {
    return l;
  }, f.bindE),
      l = new h.Apply(function () {
    return r;
  }, e.ap(c)),
      m = new k.Applicative(function () {
    return l;
  }, f.pureE),
      r = new a.Functor(k.liftA1(m));
  d.functorEffect = r;
  d.applicativeEffect = m;
  d.monadEffect = c;
})(PS);

(function (a) {
  var d = function () {
    function a(a, b, c, e) {
      this.tag = a;
      this._1 = b;
      this._2 = c;
      this._3 = e;
    }

    function d(b) {
      var c = function c(_c, e, d) {
        return new a(b, _c, e, d);
      };

      c.tag = b;
      return c;
    }

    function h(b) {
      return new a("Pure", void 0);
    }

    function b(a) {
      try {
        a();
      } catch (t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
    }

    function e(a, b, c) {
      try {
        return b(c());
      } catch (z) {
        return a(z);
      }
    }

    function c(a, b, c) {
      try {
        return b(c)();
      } catch (z) {
        return c(a(z))(), h;
      }
    }

    function g(d, f, h) {
      function l(h) {
        for (var k, w, v;;) {
          switch (v = w = k = null, u) {
            case 2:
              u = 1;

              try {
                p = t(p), null === y ? t = null : (t = y._1, y = y._2);
              } catch (L) {
                u = 5, q = d.left(L), p = null;
              }

              break;

            case 3:
              d.isLeft(p) ? (u = 5, q = p, p = null) : null === t ? u = 5 : (u = 2, p = d.fromRight(p));
              break;

            case 1:
              switch (p.tag) {
                case "Bind":
                  t && (y = new a("Cons", t, y));
                  t = p._2;
                  u = 1;
                  p = p._1;
                  break;

                case "Pure":
                  null === t ? (u = 5, p = d.right(p._1)) : (u = 2, p = p._1);
                  break;

                case "Sync":
                  u = 3;
                  p = e(d.left, d.right, p._1);
                  break;

                case "Async":
                  u = 4;
                  p = c(d.left, p._1, function (a) {
                    return function () {
                      x === h && (x++, n.enqueue(function () {
                        x === h + 1 && (u = 3, p = a, l(x));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  u = 5;
                  q = d.left(p._1);
                  p = null;
                  break;

                case "Catch":
                  B = null === t ? new a("Cons", p, B, r) : new a("Cons", p, new a("Cons", new a("Resume", t, y), B, r), r);
                  y = t = null;
                  u = 1;
                  p = p._1;
                  break;

                case "Bracket":
                  G++;
                  B = null === t ? new a("Cons", p, B, r) : new a("Cons", p, new a("Cons", new a("Resume", t, y), B, r), r);
                  y = t = null;
                  u = 1;
                  p = p._1;
                  break;

                case "Fork":
                  u = 3;
                  k = g(d, f, p._2);
                  f && f.register(k);
                  p._1 && k.run();
                  p = d.right(k);
                  break;

                case "Sequential":
                  u = 1, p = m(d, f, p._1);
              }

              break;

            case 5:
              y = t = null;
              if (null === B) u = 6, p = r || q || p;else switch (k = B._3, v = B._1, B = B._2, v.tag) {
                case "Catch":
                  r && r !== k && 0 === G ? u = 5 : q && (u = 1, p = v._2(d.fromLeft(q)), q = null);
                  break;

                case "Resume":
                  r && r !== k && 0 === G || q ? u = 5 : (t = v._1, y = v._2, u = 2, p = d.fromRight(p));
                  break;

                case "Bracket":
                  G--;
                  null === q && (w = d.fromRight(p), B = new a("Cons", new a("Release", v._2, w), B, k), r === k || 0 < G) && (u = 1, p = v._3(w));
                  break;

                case "Release":
                  B = new a("Cons", new a("Finalized", p, q), B, r);
                  u = 1;
                  p = r && r !== k && 0 === G ? v._1.killed(d.fromLeft(r))(v._2) : q ? v._1.failed(d.fromLeft(q))(v._2) : v._1.completed(d.fromRight(p))(v._2);
                  q = null;
                  G++;
                  break;

                case "Finalizer":
                  G++;
                  B = new a("Cons", new a("Finalized", p, q), B, r);
                  u = 1;
                  p = v._1;
                  break;

                case "Finalized":
                  G--, u = 5, p = v._1, q = v._2;
              }
              break;

            case 6:
              for (var z in F) {
                F.hasOwnProperty(z) && (K = K && F[z].rethrow, b(F[z].handler(p)));
              }

              F = null;
              r && q ? setTimeout(function () {
                throw d.fromLeft(q);
              }, 0) : d.isLeft(p) && K && setTimeout(function () {
                if (K) throw d.fromLeft(p);
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
          if (6 === u) return K = K && a.rethrow, a.handler(p)(), function () {};
          var b = D++;
          F = F || {};
          F[b] = a;
          return function () {
            null !== F && delete F[b];
          };
        };
      }

      var x = 0,
          u = 0,
          p = h,
          q = null,
          r = null,
          t = null,
          y = null,
          B = null,
          G = 0,
          D = 0,
          F = null,
          K = !0;
      return {
        kill: function kill(b, c) {
          return function () {
            if (6 === u) return c(d.right(void 0))(), function () {};
            var e = k({
              rethrow: !1,
              handler: function handler() {
                return c(d.right(void 0));
              }
            })();

            switch (u) {
              case 0:
                r = d.left(b);
                u = 6;
                p = r;
                l(x);
                break;

              case 4:
                null === r && (r = d.left(b));
                0 === G && (4 === u && (B = new a("Cons", new a("Finalizer", p(b)), B, r)), u = 5, q = p = null, l(++x));
                break;

              default:
                null === r && (r = d.left(b)), 0 === G && (u = 5, q = p = null);
            }

            return e;
          };
        },
        join: function join(a) {
          return function () {
            var b = k({
              rethrow: !1,
              handler: a
            })();
            0 === u && l(x);
            return b;
          };
        },
        onComplete: k,
        isSuspended: function isSuspended() {
          return 0 === u;
        },
        run: function run() {
          0 === u && (n.isDraining() ? l(x) : n.enqueue(function () {
            l(x);
          }));
        }
      };
    }

    function l(b, c, d, e) {
      function f(c, d, e) {
        var f = d,
            g = null,
            h = null,
            k = 0;
        d = {};

        a: for (;;) {
          var l = null;

          switch (f.tag) {
            case "Forked":
              f._3 === r && (l = p[f._1], d[k++] = l.kill(c, function (a) {
                return function () {
                  k--;
                  0 === k && e(a)();
                };
              }));
              if (null === g) break a;
              f = g._2;
              null === h ? g = null : (g = h._1, h = h._2);
              break;

            case "Map":
              f = f._2;
              break;

            case "Apply":
            case "Alt":
              g && (h = new a("Cons", g, h)), g = f, f = f._1;
          }
        }

        if (0 === k) e(b.right(void 0))();else for (c = 0, l = k; c < l; c++) {
          d[c] = d[c]();
        }
        return d;
      }

      function k(a, c, d) {
        var g, h;

        if (b.isLeft(a)) {
          var l = a;
          var m = null;
        } else m = a, l = null;

        for (;;) {
          var u = h = g = a = null;
          if (null !== G) break;

          if (null === c) {
            e(l || m)();
            break;
          }

          if (c._3 !== r) break;

          switch (c.tag) {
            case "Map":
              null === l ? (c._3 = b.right(c._1(b.fromRight(m))), m = c._3) : c._3 = l;
              break;

            case "Apply":
              a = c._1._3;
              g = c._2._3;

              if (l) {
                if (c._3 = l, h = !0, u = t++, z[u] = f(y, l === a ? c._2 : c._1, function () {
                  return function () {
                    delete z[u];
                    h ? h = !1 : null === d ? k(l, null, null) : k(l, d._1, d._2);
                  };
                }), h) {
                  h = !1;
                  return;
                }
              } else {
                if (a === r || g === r) return;
                m = b.right(b.fromRight(a)(b.fromRight(g)));
                c._3 = m;
              }

              break;

            case "Alt":
              a = c._1._3;
              g = c._2._3;
              if (a === r && b.isLeft(g) || g === r && b.isLeft(a)) return;
              if (a !== r && b.isLeft(a) && g !== r && b.isLeft(g)) l = m === a ? g : a, m = null, c._3 = l;else if (c._3 = m, h = !0, u = t++, z[u] = f(y, m === a ? c._2 : c._1, function () {
                return function () {
                  delete z[u];
                  h ? h = !1 : null === d ? k(m, null, null) : k(m, d._1, d._2);
                };
              }), h) {
                h = !1;
                return;
              }
          }

          null === d ? c = null : (c = d._1, d = d._2);
        }
      }

      function l(a) {
        return function (b) {
          return function () {
            delete p[a._1];
            a._3 = b;
            k(b, a._2._1, a._2._2);
          };
        };
      }

      function m(c, d) {
        G = b.left(c);
        var e;

        for (e in z) {
          if (z.hasOwnProperty(e)) {
            var g = z[e];

            for (e in g) {
              if (g.hasOwnProperty(e)) g[e]();
            }
          }
        }

        z = null;
        var k = f(c, D, d);
        return function (b) {
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
          p = {},
          t = 0,
          z = {},
          y = Error("[ParAff] Early exit"),
          G = null,
          D = r;

      (function () {
        var e = 1,
            f = d,
            h = null,
            k = null;

        a: for (;;) {
          switch (e) {
            case 1:
              switch (f.tag) {
                case "Map":
                  h && (k = new a("Cons", h, k));
                  h = new a("Map", f._1, r, r);
                  f = f._2;
                  break;

                case "Apply":
                  h && (k = new a("Cons", h, k));
                  h = new a("Apply", r, f._2, r);
                  f = f._1;
                  break;

                case "Alt":
                  h && (k = new a("Cons", h, k));
                  h = new a("Alt", r, f._2, r);
                  f = f._1;
                  break;

                default:
                  var m = n++;
                  e = 5;
                  var u = f;
                  f = new a("Forked", m, new a("Cons", h, k), r);
                  u = g(b, c, u);
                  u.onComplete({
                    rethrow: !1,
                    handler: l(f)
                  })();
                  p[m] = u;
                  c && c.register(u);
              }

              break;

            case 5:
              if (null === h) break a;
              h._1 === r ? (h._1 = f, e = 1, f = h._2, h._2 = r) : (h._2 = f, f = h, null === k ? h = null : (h = k._1, k = k._2));
          }
        }

        D = f;

        for (m = 0; m < n; m++) {
          p[m].run();
        }
      })();

      return function (b) {
        return new a("Async", function (a) {
          return function () {
            return m(b, a);
          };
        });
      };
    }

    function m(b, c, d) {
      return new a("Async", function (a) {
        return function () {
          return l(b, c, d, a);
        };
      });
    }

    var r = {},
        n = function () {
      function a() {
        for (e = !0; 0 !== b;) {
          b--;
          var a = d[c];
          d[c] = void 0;
          c = (c + 1) % 1024;
          a();
        }

        e = !1;
      }

      var b = 0,
          c = 0,
          d = Array(1024),
          e = !1;
      return {
        isDraining: function isDraining() {
          return e;
        },
        enqueue: function enqueue(f) {
          if (1024 === b) {
            var g = e;
            a();
            e = g;
          }

          d[(c + b) % 1024] = f;
          b++;
          e || a();
        }
      };
    }();

    a.EMPTY = r;
    a.Pure = d("Pure");
    a.Throw = d("Throw");
    a.Catch = d("Catch");
    a.Sync = d("Sync");
    a.Async = d("Async");
    a.Bind = d("Bind");
    a.Bracket = d("Bracket");
    a.Fork = d("Fork");
    a.Seq = d("Sequential");
    a.ParMap = d("Map");
    a.ParApply = d("Apply");
    a.ParAlt = d("Alt");
    a.Fiber = g;

    a.Supervisor = function (b) {
      var c = {},
          d = 0,
          e = 0;
      return {
        register: function register(a) {
          var b = d++;
          a.onComplete({
            rethrow: !0,
            handler: function handler(a) {
              return function () {
                e--;
                delete c[b];
              };
            }
          })();
          c[b] = a;
          e++;
        },
        isEmpty: function isEmpty() {
          return 0 === e;
        },
        killAll: function killAll(f, g) {
          return function () {
            function h(a) {
              l[a] = c[a].kill(f, function (c) {
                return function () {
                  delete l[a];
                  k--;
                  b.isLeft(c) && b.fromLeft(c) && setTimeout(function () {
                    throw b.fromLeft(c);
                  }, 0);
                  0 === k && g();
                };
              })();
            }

            if (0 === e) return g();
            var k = 0,
                l = {},
                m;

            for (m in c) {
              c.hasOwnProperty(m) && (k++, h(m));
            }

            c = {};
            e = d = 0;
            return function (b) {
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

    a.Scheduler = n;
    a.nonCanceler = h;
    return a;
  }();

  a._pure = d.Pure;
  a._throwError = d.Throw;

  a._catchError = function (a) {
    return function (f) {
      return d.Catch(a, f);
    };
  };

  a._map = function (a) {
    return function (f) {
      return f.tag === d.Pure.tag ? d.Pure(a(f._1)) : d.Bind(f, function (f) {
        return d.Pure(a(f));
      });
    };
  };

  a._bind = function (a) {
    return function (f) {
      return d.Bind(a, f);
    };
  };

  a._liftEffect = d.Sync;

  a._parAffMap = function (a) {
    return function (f) {
      return d.ParMap(a, f);
    };
  };

  a._parAffApply = function (a) {
    return function (f) {
      return d.ParApply(a, f);
    };
  };

  a._parAffAlt = function (a) {
    return function (f) {
      return d.ParAlt(a, f);
    };
  };

  a.makeAff = d.Async;

  a._makeFiber = function (a, k) {
    return function () {
      return d.Fiber(a, null, k);
    };
  };

  a._sequential = d.Seq;
})(PS["Effect.Aff"] = PS["Effect.Aff"] || {});

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var d = a["Control.Monad.Error.Class"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      h = a["Data.Functor"];

  d.catchError = function (a) {
    return a.catchError;
  };

  d.throwError = function (a) {
    return a.throwError;
  };

  d.MonadThrow = function (a, d) {
    this.Monad0 = a;
    this.throwError = d;
  };

  d.MonadError = function (a, d) {
    this.MonadThrow0 = a;
    this.catchError = d;
  };

  d["try"] = function (a) {
    return function (b) {
      return (0, a.catchError)(h.map(a.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(b))(function () {
        var b = f.pure(a.MonadThrow0().Monad0().Applicative0());
        return function (a) {
          return b(k.Left.create(a));
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
      h = function h(a) {
    return function (b) {
      return function (c) {
        var d = f.sequential(a),
            e = k.traverse_(a.Applicative1())(b)(function () {
          var b = f.parallel(a);
          return function (a) {
            return b(c(a));
          };
        }());
        return function (a) {
          return d(e(a));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (a) {
    return function (b) {
      return h(a)(b)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var d = a["Effect.Class"],
      f = a["Control.Category"],
      k = a.Effect;

  a = function a(_a9, b) {
    this.Monad0 = _a9;
    this.liftEffect = b;
  };

  f = new a(function () {
    return k.monadEffect;
  }, f.identity(f.categoryFn));

  d.liftEffect = function (a) {
    return a.liftEffect;
  };

  d.MonadEffect = a;
  d.monadEffectEffect = f;
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
  var d = a["Effect.Exception"],
      f = a["Effect.Exception"];
  a = new a["Data.Show"].Show(f.showErrorImpl);
  d.showError = a;
  d.error = f.error;
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
  var d = a["Partial.Unsafe"],
      f = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (a) {
    return d.unsafePartial(function (d) {
      return f.crashWith()(a);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var d = a["Effect.Aff"],
      f = a["Effect.Aff"],
      k = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      g = a["Control.Monad.Error.Class"],
      l = a["Control.Parallel"],
      m = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      n = a["Data.Either"],
      y = a["Data.Foldable"],
      t = a["Data.Function"],
      p = a["Data.Functor"],
      z = a["Data.Monoid"],
      w = a["Data.Semigroup"],
      x = a["Data.Unit"],
      u = a.Effect,
      H = a["Effect.Class"],
      q = a["Effect.Exception"],
      E = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var C = new p.Functor(f._parAffMap),
      I = new p.Functor(f._map),
      B = function () {
    return {
      isLeft: function isLeft(a) {
        if (a instanceof n.Left) return !0;
        if (a instanceof n.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [a.constructor.name]);
      },
      fromLeft: function fromLeft(a) {
        if (a instanceof n.Left) return a.value0;
        if (a instanceof n.Right) return E.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [a.constructor.name]);
      },
      fromRight: function fromRight(a) {
        if (a instanceof n.Right) return a.value0;
        if (a instanceof n.Left) return E.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [a.constructor.name]);
      },
      left: n.Left.create,
      right: n.Right.create
    };
  }(),
      G = function G(a) {
    return function () {
      var b = f._makeFiber(B, a)();

      b.run();
      return b;
    };
  },
      D = new b.Apply(function () {
    return C;
  }, f._parAffApply),
      F = new c.Monad(function () {
    return A;
  }, function () {
    return K;
  }),
      K = new e.Bind(function () {
    return v;
  }, f._bind),
      v = new b.Apply(function () {
    return I;
  }, c.ap(F)),
      A = new h.Applicative(function () {
    return v;
  }, f._pure),
      J = new H.MonadEffect(function () {
    return F;
  }, f._liftEffect);

  b = function () {
    var a = H.liftEffect(J);
    return function (b) {
      return t["const"](a(b));
    };
  }();

  var R = new g.MonadThrow(function () {
    return F;
  }, f._throwError),
      N = new g.MonadError(function () {
    return R;
  }, f._catchError),
      L = function L(a) {
    return function (b) {
      return G(e.bindFlipped(K)(function () {
        var b = H.liftEffect(J);
        return function (c) {
          return b(a(c));
        };
      }())(g["try"](N)(b)));
    };
  },
      S = new m.Parallel(function () {
    return P;
  }, function () {
    return F;
  }, a.unsafeCoerce, f._sequential),
      P = new h.Applicative(function () {
    return D;
  }, function () {
    var a = m.parallel(S),
        b = h.pure(A);
    return function (c) {
      return a(b(c));
    };
  }()),
      M = new w.Semigroup(function (a) {
    return function (b) {
      return function (c) {
        return l.parSequence_(S)(y.foldableArray)([a(c), b(c)]);
      };
    };
  });

  w = t["const"](h.pure(A)(x.unit));
  var W = new z.Monoid(function () {
    return M;
  }, w);
  w = f.makeAff(function (a) {
    return h.pure(u.applicativeEffect)(z.mempty(W));
  });
  var Q = new k.Alt(function () {
    return C;
  }, f._parAffAlt),
      O = new k.Alt(function () {
    return I;
  }, function (a) {
    return function (b) {
      return g.catchError(N)(a)(t["const"](b));
    };
  });
  k = new r.Plus(function () {
    return O;
  }, g.throwError(R)(q.error("Always fails")));
  r = new r.Plus(function () {
    return Q;
  }, m.parallel(S)(r.empty(k)));

  d.runAff_ = function (a) {
    return function (b) {
      return p["void"](u.functorEffect)(L(a)(b));
    };
  };

  d.never = w;
  d.effectCanceler = b;
  d.functorAff = I;
  d.applicativeAff = A;
  d.bindAff = K;
  d.monadEffectAff = J;
  d.altParAff = Q;
  d.plusParAff = r;
  d.parallelAff = S;
  d.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var d = a["Concur.Core.Types"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Category"],
      c = a["Control.Monad"],
      g = a["Control.Monad.Free"],
      l = a["Control.MultiAlternative"],
      m = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      n = a["Data.Array.NonEmpty"],
      y = a["Data.Array.NonEmpty.Internal"],
      t = a["Data.Either"],
      p = a["Data.FoldableWithIndex"],
      z = a["Data.Functor"],
      w = a["Data.Maybe"],
      x = a["Data.Monoid"],
      u = a["Data.Semigroup"],
      H = a["Data.Semigroup.Foldable"],
      q = a["Data.Tuple"],
      E = a.Effect,
      C = a["Effect.Aff"],
      I = a["Effect.Class"];
  a = new a["Control.ShiftMap"].ShiftMap(function (a) {
    return a(e.identity(e.categoryFn));
  });

  var B = g.freeFunctor,
      G = g.freeBind,
      D = g.freeApplicative,
      F = new c.Monad(function () {
    return D;
  }, function () {
    return G;
  }),
      K = function K(a) {
    return a;
  },
      v = function v(a) {
    return g["resume'"](function (b) {
      return function (c) {
        return new t.Right(z.map(a)(c)(b));
      };
    })(t.Left.create);
  },
      A = new z.Functor(function (a) {
    return function (b) {
      if (b instanceof t.Right) b = new t.Right({
        cont: z.map(C.functorAff)(a)(b.value0.cont),
        view: b.value0.view
      });else if (b instanceof t.Left) b = new t.Left(z.map(E.functorEffect)(a)(b.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [b.constructor.name]);
      return b;
    };
  }),
      J = function J(a) {
    return g.liftF(t.Left.create(a));
  },
      R = function R(a) {
    return g.liftF(new t.Right({
      view: a,
      cont: C.never
    }));
  },
      N = function N(a) {
    return new u.Semigroup(function (b) {
      return function (c) {
        return l.orr(S(a))([b, c]);
      };
    });
  },
      L = function L(a) {
    return new r.Plus(function () {
      return P(a);
    }, R(x.mempty(a)));
  },
      S = function S(a) {
    return new l.MultiAlternative(function () {
      return L(a);
    }, function (c) {
      var d = function d(a) {
        return function (c) {
          return function (d) {
            var e = z.map(y.functorNonEmptyArray)(function (a) {
              return g.wrap(t.Right.create(a));
            })(c);
            return b.bind(C.bindAff)(m.sequential(C.parallelAff)(p.foldlWithIndex(y.foldableWithIndexNonEmptyArray)(function (a) {
              return function (b) {
                return function (c) {
                  return f.alt(C.altParAff)(m.parallel(C.parallelAff)(z.map(C.functorAff)(q.Tuple.create(a))(c)))(b);
                };
              };
            })(r.empty(C.plusParAff))(d)))(function (b) {
              return h.pure(C.applicativeAff)(u(a)(w.fromMaybe(e)(n.updateAt(b.value0)(b.value1)(e))));
            });
          };
        };
      },
          e = function e(a) {
        return function (b) {
          return g.wrap(new t.Right({
            view: H.foldMap1(y.foldable1NonEmptyArray)(a.Semigroup0())(function (a) {
              return a.view;
            })(b),
            cont: d(a)(b)(z.map(y.functorNonEmptyArray)(function (a) {
              return a.cont;
            })(b))
          }));
        };
      },
          k = function k(a) {
        return function (b) {
          return function (c) {
            var d = n.uncons(c),
                e = v(A)(d.head);
            if (e instanceof t.Left) return h.pure(g.freeApplicative)(e.value0);

            if (e instanceof t.Right) {
              if (e.value0 instanceof t.Left) return g.wrap(new t.Left(function () {
                var c = e.value0.value0();
                return k(a)(b)(n["cons'"](c)(d.tail));
              }));
              if (e.value0 instanceof t.Right) return l(a)(n.snoc(b)(e.value0.value0))(d.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [e.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [e.constructor.name]);
          };
        };
      },
          l = function l(a) {
        return function (b) {
          return function (c) {
            c = n.fromArray(c);
            if (c instanceof w.Nothing) return e(a)(b);
            if (c instanceof w.Just) return k(a)(b)(c.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [c.constructor.name]);
          };
        };
      },
          u = function u(a) {
        return function (b) {
          var c = n.uncons(b),
              d = v(A)(c.head);
          if (d instanceof t.Left) return h.pure(g.freeApplicative)(d.value0);

          if (d instanceof t.Right) {
            if (d.value0 instanceof t.Left) return g.wrap(new t.Left(function () {
              var b = d.value0.value0();
              return u(a)(n["cons'"](b)(c.tail));
            }));
            if (d.value0 instanceof t.Right) return l(a)(n.singleton(d.value0.value0))(c.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [d.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [d.constructor.name]);
        };
      };

      c = n.fromArray(c);
      if (c instanceof w.Just) return u(a)(z.map(y.functorNonEmptyArray)(K)(c.value0));
      if (c instanceof w.Nothing) return r.empty(L(a));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [c.constructor.name]);
    });
  },
      P = function P(a) {
    return new f.Alt(function () {
      return B;
    }, u.append(N(a)));
  };

  d.WidgetStep = function (a) {
    return a;
  };

  d.Widget = function (a) {
    return a;
  };

  d.unWidget = K;
  d.resume = v;
  d.display = R;
  d.functorWidgetStep = A;
  d.widgetFunctor = B;
  d.widgetBind = G;
  d.widgetApplicative = D;
  d.widgetMonad = F;
  d.widgetShiftMap = a;
  d.widgetMultiAlternative = S;

  d.widgetMonoid = function (a) {
    return new x.Monoid(function () {
      return N(a);
    }, r.empty(L(a)));
  };

  d.widgetAlternative = function (a) {
    return new k.Alternative(function () {
      return D;
    }, function () {
      return L(a);
    });
  };

  d.widgetMonadEff = function (a) {
    return new I.MonadEffect(function () {
      return F;
    }, J);
  };
})(PS);

(function (a) {
  var d = function () {
    function a() {
      this.last = this.head = null;
      this.size = 0;
    }

    function d(a, b) {
      this.queue = a;
      this.value = b;
      this.prev = this.next = null;
    }

    function h(b) {
      this.draining = !1;
      this.error = null;
      this.value = b;
      this.takes = new a();
      this.reads = new a();
      this.puts = new a();
    }

    function b(a) {
      try {
        a();
      } catch (m) {
        setTimeout(function () {
          throw m;
        }, 0);
      }
    }

    function e(a) {
      switch (a.size) {
        case 0:
          return null;

        case 1:
          var b = a.head;
          a.head = null;
          break;

        case 2:
          b = a.last;
          a.head.next = null;
          a.last = null;
          break;

        default:
          b = a.last, a.last = b.prev, a.last.next = null;
      }

      b.prev = null;
      b.queue = null;
      a.size--;
      return b.value;
    }

    function c(a) {
      switch (a.size) {
        case 0:
          return null;

        case 1:
          var b = a.head;
          a.head = null;
          break;

        case 2:
          b = a.head;
          a.last.prev = null;
          a.head = a.last;
          a.last = null;
          break;

        default:
          b = a.head, a.head = b.next, a.head.prev = null;
      }

      b.next = null;
      b.queue = null;
      a.size--;
      return b.value;
    }

    var g = {};
    h.EMPTY = g;

    h.putLast = function (a, b) {
      b = new d(a, b);

      switch (a.size) {
        case 0:
          a.head = b;
          break;

        case 1:
          b.prev = a.head;
          a.head.next = b;
          a.last = b;
          break;

        default:
          b.prev = a.last, a.last.next = b, a.last = b;
      }

      a.size++;
      return b;
    };

    h.takeLast = e;
    h.takeHead = c;

    h.deleteCell = function (a) {
      null !== a.queue && (a.queue.last === a ? e(a.queue) : a.queue.head === a ? c(a.queue) : (a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.queue.size--, a.queue = null, a.value = null, a.next = null, a.prev = null));
    };

    h.drainVar = function (a, d) {
      if (!d.draining) {
        var e = d.puts,
            f = d.takes,
            h = d.reads,
            k,
            l;

        for (d.draining = !0;;) {
          var m = k = null;
          var w = d.value;
          var x = h.size;

          if (null !== d.error) {
            for (w = a.left(d.error); k = c(e);) {
              b(k.cb(w));
            }

            for (; m = c(h);) {
              b(m(w));
            }

            for (; l = c(f);) {
              b(l(w));
            }

            break;
          }

          w === g && (k = c(e)) && (d.value = w = k.value);

          if (w !== g) {
            for (l = c(f); x-- && (m = c(h));) {
              b(m(a.right(w)));
            }

            null !== l && (d.value = g, b(l(a.right(w))));
          }

          null !== k && b(k.cb(a.right(void 0)));
          if (d.value === g && 0 === e.size || d.value !== g && 0 === f.size) break;
        }

        d.draining = !1;
      }
    };

    return h;
  }();

  a.empty = function () {
    return new d(d.EMPTY);
  };

  a._takeVar = function (a, k, h) {
    return function () {
      var b = d.putLast(k.takes, h);
      d.drainVar(a, k);
      return function () {
        d.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (a, k, h) {
    return function () {
      return h.value === d.EMPTY && null === h.error ? (h.value = k, d.drainVar(a, h), !0) : !1;
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.AVar"],
      k = a["Data.Either"];
  a = a["Data.Maybe"];

  var h = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      b = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      e = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      c = {
    left: k.Left.create,
    right: k.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: h.create,
    filled: b.create,
    empty: e.value
  };

  d.take = function (a) {
    return function (b) {
      return f._takeVar(c, a, b);
    };
  };

  d.tryPut = function (a) {
    return function (b) {
      return f._tryPutVar(c, a, b);
    };
  };

  d.empty = f.empty;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (a) {
    return f.makeAff(function (h) {
      return function () {
        var b = d.take(a)(h)();
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
  a = new function (a, b) {
    this.MonadEffect0 = a;
    this.liftAff = b;
  }(function () {
    return k.monadEffectAff;
  }, f.identity(f.categoryFn));

  d.liftAff = function (a) {
    return a.liftAff;
  };

  d.monadAffAff = a;
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var d = a["Concur.Core"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      e = a["Control.Parallel.Class"],
      c = a["Data.Either"],
      g = a["Data.Functor"],
      l = a.Effect,
      m = a["Effect.AVar"],
      r = a["Effect.Aff"],
      n = a["Effect.Aff.AVar"],
      y = a["Effect.Aff.Class"],
      t = function t(a) {
    return function (d) {
      var p = f.resume(f.functorWidgetStep)(d);
      if (p instanceof c.Left) return h.pure(b.freeApplicative)(p.value0);

      if (p instanceof c.Right) {
        if (p.value0 instanceof c.Left) return b.wrap(f.WidgetStep(new c.Left(function () {
          var b = p.value0.value0();
          return t(a)(b);
        })));
        if (p.value0 instanceof c.Right) return b.wrap(f.WidgetStep(new c.Left(function () {
          var d = m.empty(),
              u = e.sequential(r.parallelAff)(k.alt(r.altParAff)(e.parallel(r.parallelAff)(y.liftAff(y.monadAffAff)(n.take(d))))(e.parallel(r.parallelAff)(g.map(r.functorAff)(t(a))(p.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new c.Right({
            view: a(function (a) {
              return g["void"](l.functorEffect)(m.tryPut(h.pure(b.freeApplicative)(a))(d));
            })(p.value0.value0.view),
            cont: u
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [p.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [p.constructor.name]);
    };
  };

  d.mkLeafWidget = function (a) {
    return f.Widget(b.wrap(f.WidgetStep(new c.Left(function () {
      var d = m.empty();
      return b.wrap(f.WidgetStep(new c.Right({
        view: a(function (a) {
          return g["void"](l.functorEffect)(m.tryPut(h.pure(b.freeApplicative)(a))(d));
        }),
        cont: y.liftAff(y.monadAffAff)(n.take(d))
      })));
    }))));
  };

  d.mkNodeWidget = function (a) {
    return function (b) {
      return t(a)(b);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var d = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (a) {
    this.liftWidget = a;
  }(a.identity(a.categoryFn));

  d.liftWidget = function (a) {
    return a.liftWidget;
  };

  d.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var d = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var f = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      k = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  a = new a.Functor(function (a) {
    return function (b) {
      if (b instanceof f) return new f(b.value0);
      if (b instanceof k) return new k(function (d) {
        return b.value0(function (b) {
          return d(a(b));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [a.constructor.name, b.constructor.name]);
    };
  });
  d.PrimProp = f;
  d.Handler = k;

  d.mkProp = function (a) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof k) return b.value0(a);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [a.constructor.name, b.constructor.name]);
    };
  };

  d.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var d = a["Concur.Core.DOM"],
      f = a["Concur.Core"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      e = a["Control.ShiftMap"],
      c = a["Data.Functor"],
      g = function g(a) {
    return function (b) {
      return function (d) {
        return function (g) {
          return e.shiftMap(a)(function (a) {
            return function (e) {
              return f.mkNodeWidget(function (e) {
                return function (f) {
                  return d(c.map(b)(function () {
                    var b = h.mkProp(e),
                        d = c.map(h.functorProps)(a);
                    return function (a) {
                      return b(d(a));
                    };
                  }())(g))(f);
                };
              })(e);
            };
          });
        };
      };
    };
  };

  d.el = g;

  d.elLeaf = function (a) {
    return function (b) {
      return function (d) {
        return function (e) {
          return k.liftWidget(a)(f.mkLeafWidget(function (a) {
            return d(c.map(b)(h.mkProp(a))(e));
          }));
        };
      };
    };
  };

  d["el'"] = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (f) {
            var h = g(a)(d)(e)(f),
                k = b.orr(c);
            return function (a) {
              return h(k(a));
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
      h = a["Control.Monad.Free"],
      b = a["Data.Either"],
      e = a["Data.Functor"],
      c = a["Data.Monoid"],
      g = a["Data.Tuple"],
      l = a.Effect,
      m = a["Effect.Aff"],
      r = function r(a) {
    return function (d) {
      var e = h.resume(f.functorWidgetStep)(f.unWidget(d));
      if (e instanceof b.Right) return k.pure(l.applicativeEffect)(new g.Tuple(d, c.mempty(a)));

      if (e instanceof b.Left) {
        if (e.value0 instanceof b.Left) return function () {
          var b = e.value0.value0();
          return r(a)(b)();
        };
        if (e.value0 instanceof b.Right) return k.pure(l.applicativeEffect)(new g.Tuple(h.wrap(new b.Right(e.value0.value0)), e.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [e.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [e.constructor.name]);
    };
  },
      n = function n(a) {
    return function (d) {
      return function (g) {
        var p = h.resume(f.functorWidgetStep)(g);
        if (p instanceof b.Right) return k.pure(l.applicativeEffect)(c.mempty(a));

        if (p instanceof b.Left) {
          if (p.value0 instanceof b.Left) return function () {
            var b = p.value0.value0();
            return n(a)(d)(b)();
          };
          if (p.value0 instanceof b.Right) return function () {
            m.runAff_(function () {
              var a = e.map(b.functorEither)(f.Widget);
              return function (b) {
                return d(a(b));
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

  d.discharge = n;
  d.dischargePartialEffect = r;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (a, f) {
    this.Extend0 = a;
    this.extract = f;
  };

  a.extract = function (a) {
    return a.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (a, f) {
    this.Functor0 = a;
    this.extend = f;
  };
})(PS);

(function (a) {
  a.defer = function (a) {
    var d = null;
    return function () {
      if (void 0 === a) return d;
      d = a();
      a = void 0;
      return d;
    };
  };

  a.force = function (a) {
    return a();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var d = a["Data.Lazy"],
      f = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (a) {
    return function (d) {
      return f.defer(function (b) {
        return a(f.force(d));
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
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Comonad"],
      g = a["Control.Extend"],
      l = a["Control.Monad"],
      m = a["Control.Plus"],
      r = a["Control.ShiftMap"],
      n = a["Data.Functor"],
      y = a["Data.Lazy"],
      t = a["Data.Tuple"],
      p = function p(a) {
    return t.snd(y.force(a));
  },
      z = function z(a) {
    return function (b) {
      return y.defer(function (c) {
        return new t.Tuple(a, b);
      });
    };
  },
      w = function w(a) {
    return t.fst(y.force(a));
  },
      x = function x(a) {
    return new n.Functor(function (b) {
      var c = function c(d) {
        return n.map(y.functorLazy)(function (d) {
          return new t.Tuple(b(d.value0), n.map(a)(c)(d.value1));
        })(d);
      };

      return c;
    });
  },
      u = function u(a) {
    return new g.Extend(function () {
      return x(a);
    }, function (b) {
      var c = function c(d) {
        return n.map(y.functorLazy)(function (e) {
          return new t.Tuple(b(d), n.map(a)(c)(e.value1));
        })(d);
      };

      return c;
    });
  },
      H = function H(a) {
    return new l.Monad(function () {
      return C(a);
    }, function () {
      return q(a);
    });
  },
      q = function q(a) {
    return new e.Bind(function () {
      return E(a);
    }, function (b) {
      return function (c) {
        var d = function d(b) {
          return function (c) {
            var f = n.map(a.Plus1().Alt0().Functor0())(d(b))(p(c)),
                g = n.map(a.Plus1().Alt0().Functor0())(e)(p(b));
            return z(w(c))(k.alt(a.Plus1().Alt0())(g)(f));
          };
        },
            e = function e(a) {
          return d(a)(c(w(a)));
        };

        return e(b);
      };
    });
  },
      E = function E(a) {
    return new b.Apply(function () {
      return x(a.Plus1().Alt0().Functor0());
    }, l.ap(H(a)));
  },
      C = function C(a) {
    return new h.Applicative(function () {
      return E(a);
    }, function (b) {
      return z(b)(m.empty(a.Plus1()));
    });
  };

  d.mkCofree = z;
  d.tail = p;

  d.comonadCofree = function (a) {
    return new c.Comonad(function () {
      return u(a);
    }, w);
  };

  d.applicativeCofree = C;
  d.bindCofree = q;

  d.shiftMapCofree = function (a) {
    return new r.ShiftMap(function (b) {
      return function (c) {
        return y.defer(function (d) {
          d = y.force(c);
          return new t.Tuple(d.value0, b(h.pure(C(f.widgetAlternative(a))))(d.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var d = a["Concur.Core.FRP"],
      f = a["Concur.Core.Types"],
      k = a["Control.Applicative"],
      h = a["Control.Bind"],
      b = a["Control.Cofree"],
      e = a["Control.Comonad"],
      c = a["Data.Unit"],
      g = b.tail,
      l = b.mkCofree,
      m = function m(a) {
    return function (c) {
      return function (d) {
        var n = d(c);
        return l(e.extract(b.comonadCofree(f.widgetFunctor))(n))(h.bind(f.widgetBind)(g(n))(function (c) {
          return k.pure(f.widgetApplicative)(m(a)(e.extract(b.comonadCofree(f.widgetFunctor))(c))(d));
        }));
      };
    };
  },
      r = function r(a) {
    return h.bind(f.widgetBind)(g(a))(r);
  };

  d.step = l;

  d.display = function (a) {
    return l(c.unit)(a);
  };

  d.loopS = m;
  d.dyn = r;
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
  var d = a["Effect.Console"],
      f = a["Effect.Console"],
      k = a["Data.Show"];

  d.logShow = function (a) {
    return function (b) {
      return f.log(k.show(a)(b));
    };
  };

  d.log = f.log;
})(PS);

(function (a) {
  function d(a) {
    return function (b) {
      return function (d) {
        return f.createElement.apply(f, [a, b].concat(d));
      };
    };
  }

  var f = require("react"),
      k = function (a) {
    function b(a, b, d) {
      switch (b) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          a[b] = d;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          a[b] = function (a, b) {
            return d(a)(b)();
          };

          break;

        case "componentDidUpdate":
          a[b] = function (a, b, c) {
            return d(a)(b)(c)();
          };

          break;

        case "unsafeComponentWillMount":
          a.UNSAFE_componentWillMount = d;
          break;

        case "unsafeComponentWillReceiveProps":
          a.UNSAFE_componentWillReceiveProps = function (a) {
            return d(a)();
          };

          break;

        case "unsafeComponentWillUpdate":
          a.UNSAFE_componentWillUpdate = function (a, b) {
            return d(a)(b)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + b);
      }
    }

    return function (d) {
      return function (c) {
        var e = function e(d) {
          a.call(this, d);
          d = c(this)();

          for (var e in d) {
            b(this, e, d[e]);
          }
        };

        e.displayName = d;
        e.prototype = Object.create(a.prototype);
        return e.prototype.constructor = e;
      };
    };
  }(f.Component);

  a.componentImpl = k;
  a.fragment = f.Fragment;

  a.setStateImpl = function (a) {
    return function (b) {
      return function () {
        a.setState(b);
      };
    };
  };

  a.getState = function (a) {
    return function () {
      if (!a.state) throw Error("[purescript-react] Cannot get state within constructor");
      return a.state;
    };
  };

  a.createElementImpl = d;
  a.createElementTagName = d;

  a.createLeafElementImpl = function (a) {
    return function (b) {
      return f.createElement(a, b);
    };
  };

  a.createElementTagNameDynamic = function (a) {
    return function (b) {
      return function (d) {
        return f.createElement(a, b, d);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var d = a.React,
      f = a.React;
  a = f.setStateImpl;
  var k = new function (a) {
    this.toElement = a;
  }((0, f.createElementImpl)(f.fragment)({}));

  d.component = function (a) {
    return f.componentImpl;
  };

  d.writeState = a;

  d.createLeafElement = function (a) {
    return f.createLeafElementImpl;
  };

  d.toElement = function (a) {
    return a.toElement;
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
      h = a["Data.Monoid"],
      b = a["Data.Show"],
      e = a["Data.Unit"],
      c = a.Effect,
      g = a["Effect.Console"],
      l = a["Effect.Exception"],
      m = a.React,
      r = function r(a) {
    var n = function n(a) {
      return m.toElement(m.isReactElementArray)(a.view);
    },
        r = function r(a) {
      return function (n) {
        if (n instanceof f.Right) return function () {
          var b = d.discharge(h.monoidArray)(r(a))(n.value0)();
          return k["void"](c.functorEffect)(m.writeState(a)({
            view: b
          }))();
        };
        if (n instanceof f.Left) return function () {
          g.log("FAILED! " + b.show(l.showError)(n.value0))();
          return e.unit;
        };
        throw Error("Failed pattern match at Concur.React (line 31, column 3 - line 33, column 50): " + [a.constructor.name, n.constructor.name]);
      };
    };

    return m.component()("Concur")(function (b) {
      return function () {
        var e = d.dischargePartialEffect(h.monoidArray)(a)();
        return {
          state: {
            view: e.value1
          },
          render: k.map(c.functorEffect)(n)(m.getState(b)),
          componentDidMount: r(b)(new f.Right(e.value0))
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
    return function (d) {
      var f = {};
      f[a] = d;
      return f;
    };
  };

  a.unsafeUnfoldProps = function (a) {
    return function (d) {
      var f = {},
          h = {};
      h[a] = f;

      for (var b in d) {
        d.hasOwnProperty(b) && (f[b] = d[b]);
      }

      return h;
    };
  };

  a.unsafeFromPropsArray = function (a) {
    for (var d = {}, k = 0, h = a.length; k < h; k++) {
      var b = a[k],
          e;

      for (e in b) {
        b.hasOwnProperty(e) && (d[e] = b[e]);
      }
    }

    return d;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (a) {
    return function (d) {
      return a(d)();
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
  var h = f.unsafeMkProps("target"),
      b = f.unsafeUnfoldProps("style"),
      e = f.unsafeMkProps("href"),
      c = f.unsafeMkProps("disabled"),
      g = f.unsafeMkProps("defaultValue"),
      l = f.unsafeMkProps("className"),
      m = f.unsafeMkProps("checked"),
      r = f.unsafeMkProps("type");
  d.style = b;
  d.checked = m;
  d.className = l;
  d.defaultValue = g;
  d.disabled = c;
  d.href = e;
  d.target = h;
  d._type = r;
  d.value = a;

  d.onChange = function (a) {
    return f.unsafeMkProps("onChange")(k.mkEffectFn1(a));
  };

  d.onClick = function (a) {
    return f.unsafeMkProps("onClick")(k.mkEffectFn1(a));
  };

  d.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var d = a["React.DOM"],
      f = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var h = function h(a) {
    return function (b) {
      return function (c) {
        if (a) {
          if (a) var d = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [a.constructor.name]);
        } else d = f.createElementTagName;
        return d(b)(k.unsafeFromPropsArray(c));
      };
    };
  },
      b = h(!1)("option"),
      e = h(!1)("select"),
      c = h(!1)("span"),
      g = h(!1)("ul"),
      l = h(!1)("li"),
      m = h(!1)("h3"),
      r = h(!1)("h2"),
      n = h(!1)("h1"),
      y = h(!1)("div"),
      t = h(!1)("cite"),
      p = h(!1)("button"),
      z = h(!1)("a");

  d.text = a;
  d.a = z;

  d.br = function (a) {
    return h(!1)("br")(a)([]);
  };

  d.button = p;
  d.cite = t;
  d.div = y;
  d.h1 = n;
  d.h2 = r;
  d.h3 = m;

  d.input = function (a) {
    return h(!1)("input")(a)([]);
  };

  d.li = l;
  d.option = b;
  d.select = e;
  d.span = c;
  d.ul = g;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var d = a["Concur.React.DOM"],
      f = a["Concur.Core.DOM"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      c = function c(a) {
    return function (b) {
      return function (c) {
        return [a(b)(c)];
      };
    };
  },
      g = function g(a) {
    return function (c) {
      return f.elLeaf(a)(b.functorArray)(function (a) {
        return [c(a)];
      });
    };
  },
      l = function l(a) {
    return function (d) {
      return function (e) {
        return f["el'"](a)(d)(b.functorArray)(c(e));
      };
    };
  },
      m = function m(a) {
    return function (b) {
      return l(b)(a)(e.h1);
    };
  },
      r = function r(a) {
    return function (b) {
      return l(b)(a)(e.h2);
    };
  },
      n = function n(a) {
    return function (b) {
      return l(b)(a)(e.h3);
    };
  },
      y = function y(a) {
    return function (b) {
      return l(b)(a)(e.li);
    };
  },
      t = function t(a) {
    return function (b) {
      return l(b)(a)(e.span);
    };
  },
      p = function p(a) {
    return function (d) {
      return f.el(a)(b.functorArray)(c(d));
    };
  },
      z = function z(a) {
    return function (b) {
      return l(b)(a)(e.div);
    };
  },
      w = function w(a) {
    return function (b) {
      return l(b)(a)(e.cite);
    };
  };

  d.text = function (a) {
    return function (b) {
      return k.liftWidget(a)(h.display([e.text(b)]));
    };
  };

  d.a = function (a) {
    return function (b) {
      return l(b)(a)(e.a);
    };
  };

  d["br'"] = function (a) {
    return g(a)(e.br)([]);
  };

  d.button = function (a) {
    return function (b) {
      return l(b)(a)(e.button);
    };
  };

  d["cite'"] = function (a) {
    return function (b) {
      return w(a)(b)([]);
    };
  };

  d.div_ = function (a) {
    return p(a)(e.div);
  };

  d.div = z;

  d["div'"] = function (a) {
    return function (b) {
      return z(a)(b)([]);
    };
  };

  d["h1'"] = function (a) {
    return function (b) {
      return m(a)(b)([]);
    };
  };

  d["h2'"] = function (a) {
    return function (b) {
      return r(a)(b)([]);
    };
  };

  d["h3'"] = function (a) {
    return function (b) {
      return n(a)(b)([]);
    };
  };

  d.input = function (a) {
    return g(a)(e.input);
  };

  d.li_ = function (a) {
    return p(a)(e.li);
  };

  d.li = y;

  d["li'"] = function (a) {
    return function (b) {
      return y(a)(b)([]);
    };
  };

  d.option = function (a) {
    return function (b) {
      return l(b)(a)(e.option);
    };
  };

  d.select = function (a) {
    return function (b) {
      return l(b)(a)(e.select);
    };
  };

  d.span = t;

  d["span'"] = function (a) {
    return function (b) {
      return t(a)(b)([]);
    };
  };

  d.ul = function (a) {
    return function (b) {
      return l(b)(a)(e.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var d = a["Concur.React.Props"],
      f = a["Concur.Core.Props"],
      k = a["Data.Array"],
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Data.Monoid"],
      c = a["React.DOM.Props"];
  a = new f.Handler(c.onClick);

  var g = new f.Handler(c.onChange),
      l = function l(a) {
    return f.PrimProp.create(c.className(a));
  },
      m = function () {
    var a = h.intercalate(h.foldableArray)(e.monoidString)(" "),
        c = k.concatMap(b.maybe([])(function (a) {
      return [a];
    }));
    return function (b) {
      return l(a(c(b)));
    };
  }();

  d.classList = m;

  d.unsafeTargetValue = function (a) {
    return a.target.value;
  };

  d.style = function (a) {
    return f.PrimProp.create(c.style(a));
  };

  d.checked = function (a) {
    return f.PrimProp.create(c.checked(a));
  };

  d.className = l;

  d.defaultValue = function (a) {
    return f.PrimProp.create(c.defaultValue(a));
  };

  d.disabled = function (a) {
    return f.PrimProp.create(c.disabled(a));
  };

  d.href = function (a) {
    return f.PrimProp.create(c.href(a));
  };

  d._type = function (a) {
    return f.PrimProp.create(c._type(a));
  };

  d.value = function (a) {
    return f.PrimProp.create(c.value(a));
  };

  d.onChange = g;
  d.onClick = a;
})(PS);

(function (a) {
  var d = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (a, k) {
    return d.render(a, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.nullable = function (a, f, k) {
    return null == a ? f : k(a);
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var d = a["Data.Nullable"],
      f = a["Data.Maybe"];

  a["Data.Nullable"].toMaybe = function (a) {
    return d.nullable(a, f.Nothing.value, f.Just.create);
  };
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var d = a.ReactDOM,
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      h = a.Effect;

  a.ReactDOM.render = function (a) {
    return function (b) {
      return f.map(h.functorEffect)(k.toMaybe)(function () {
        return d.renderImpl(a, b);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (a) {
    return function (d) {
      return function () {
        return d.getElementById(a);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var d = a["Web.DOM.NonElementParentNode"],
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      h = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (a) {
    var b = f.map(h.functorEffect)(k.toMaybe),
        c = d._getElementById(a);

    return function (a) {
      return b(c(a));
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
  var d = a["Concur.React"],
      f = a["Data.Functor"],
      k = a["Data.Maybe"],
      h = a["Data.Unit"],
      b = a.Effect,
      e = a.ReactDOM,
      c = a["Web.DOM.NonElementParentNode"],
      g = a["Web.HTML"],
      l = a["Web.HTML.HTMLDocument"],
      m = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (a) {
    return function (n) {
      return function () {
        var r = g.window();
        r = m.document(r)();
        r = l.toNonElementParentNode(r);
        r = c.getElementById(a)(r)();
        if (r instanceof k.Nothing) return h.unit;
        if (r instanceof k.Just) return f["void"](b.functorEffect)(e.render(d.renderComponent(n))(r.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [r.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var d = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      k = a["Data.Unit"];

  d.state = function (a) {
    return a.state;
  };

  d.MonadState = function (a, b) {
    this.Monad0 = a;
    this.state = b;
  };

  d.get = function (a) {
    return (0, a.state)(function (a) {
      return new f.Tuple(a, a);
    });
  };

  d.gets = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(b(a), a);
      });
    };
  };

  d.put = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(k.unit, b);
      });
    };
  };

  d.modify_ = function (a) {
    return function (b) {
      return (0, a.state)(function (a) {
        return new f.Tuple(k.unit, b(a));
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Trans.Class"] = a["Control.Monad.Trans.Class"] || {};
  a = a["Control.Monad.Trans.Class"];

  a.lift = function (a) {
    return a.lift;
  };

  a.MonadTrans = function (a) {
    this.lift = a;
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var d = a["Control.Monad.Except.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.Error.Class"],
      c = a["Control.Monad.State.Class"],
      g = a["Control.Monad.Trans.Class"],
      l = a["Data.Either"],
      m = a["Data.Functor"],
      r = new g.MonadTrans(function (a) {
    return function (b) {
      return h.bind(a.Bind1())(b)(function (b) {
        return f.pure(a.Applicative0())(new l.Right(b));
      });
    };
  }),
      n = function n(a) {
    return function (b) {
      return a(b);
    };
  },
      y = function y(a) {
    return new m.Functor(function (b) {
      return n(m.map(a)(m.map(l.functorEither)(b)));
    });
  },
      t = function t(a) {
    return new b.Monad(function () {
      return w(a);
    }, function () {
      return p(a);
    });
  },
      p = function p(a) {
    return new h.Bind(function () {
      return z(a);
    }, function (b) {
      return function (c) {
        return h.bind(a.Bind1())(b)(l.either(function () {
          var b = f.pure(a.Applicative0());
          return function (a) {
            return b(l.Left.create(a));
          };
        }())(function (a) {
          return c(a);
        }));
      };
    });
  },
      z = function z(a) {
    return new k.Apply(function () {
      return y(a.Bind1().Apply0().Functor0());
    }, b.ap(t(a)));
  },
      w = function w(a) {
    return new f.Applicative(function () {
      return z(a);
    }, function () {
      var b = f.pure(a.Applicative0());
      return function (a) {
        return b(l.Right.create(a));
      };
    }());
  };

  d.ExceptT = function (a) {
    return a;
  };

  d.runExceptT = function (a) {
    return a;
  };

  d.functorExceptT = y;
  d.applyExceptT = z;
  d.applicativeExceptT = w;
  d.bindExceptT = p;

  d.monadThrowExceptT = function (a) {
    return new e.MonadThrow(function () {
      return t(a);
    }, function () {
      var b = f.pure(a.Applicative0());
      return function (a) {
        return b(l.Left.create(a));
      };
    }());
  };

  d.monadStateExceptT = function (a) {
    return new c.MonadState(function () {
      return t(a.Monad0());
    }, function (b) {
      return g.lift(r)(a.Monad0())(c.state(a)(b));
    });
  };
})(PS);

(function (a) {
  a.map_ = function (a) {
    return function (d) {
      return function () {
        return a(d());
      };
    };
  };

  a.pure_ = function (a) {
    return function () {
      return a;
    };
  };

  a.bind_ = function (a) {
    return function (d) {
      return function () {
        return d(a())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var d = a["Control.Monad.ST.Internal"],
      f = a["Control.Monad.ST.Internal"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      c = new a["Data.Functor"].Functor(f.map_);
  a = new e.Monad(function () {
    return m;
  }, function () {
    return g;
  });
  var g = new b.Bind(function () {
    return l;
  }, f.bind_),
      l = new h.Apply(function () {
    return c;
  }, e.ap(a)),
      m = new k.Applicative(function () {
    return l;
  }, f.pure_);
  d.applicativeST = m;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (a) {
    return function (d) {
      return a(d).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};
  var d = a["Control.Monad.State.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.State.Class"],
      c = a["Data.Functor"],
      g = a["Data.Tuple"],
      l = a["Data.Unit"];
  a = new a["Control.Lazy"].Lazy(function (a) {
    return function (b) {
      return a(l.unit)(b);
    };
  });

  var m = function m(a) {
    return new c.Functor(function (b) {
      return function (d) {
        return function (e) {
          return c.map(a)(function (a) {
            return new g.Tuple(b(a.value0), a.value1);
          })(d(e));
        };
      };
    });
  },
      r = function r(a) {
    return new b.Monad(function () {
      return t(a);
    }, function () {
      return n(a);
    });
  },
      n = function n(a) {
    return new h.Bind(function () {
      return y(a);
    }, function (b) {
      return function (c) {
        return function (d) {
          return h.bind(a.Bind1())(b(d))(function (a) {
            return c(a.value0)(a.value1);
          });
        };
      };
    });
  },
      y = function y(a) {
    return new k.Apply(function () {
      return m(a.Bind1().Apply0().Functor0());
    }, b.ap(r(a)));
  },
      t = function t(a) {
    return new f.Applicative(function () {
      return y(a);
    }, function (b) {
      return function (c) {
        return f.pure(a.Applicative0())(new g.Tuple(b, c));
      };
    });
  };

  d.StateT = function (a) {
    return a;
  };

  d.runStateT = function (a) {
    return a;
  };

  d.evalStateT = function (a) {
    return function (b) {
      return function (d) {
        return c.map(a)(g.fst)(b(d));
      };
    };
  };

  d.functorStateT = m;
  d.bindStateT = n;
  d.monadStateT = r;
  d.lazyStateT = a;

  d.monadStateStateT = function (a) {
    return new e.MonadState(function () {
      return r(a);
    }, function (b) {
      return function () {
        var c = f.pure(a.Applicative0());
        return function (a) {
          return c(b(a));
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
  a["Data.Enum"] = a["Data.Enum"] || {};
  var d = a["Data.Enum"],
      f = a["Data.Enum"],
      k = a["Control.Apply"],
      h = a["Data.Bounded"],
      b = a["Data.Functor"],
      e = a["Data.Maybe"],
      c = a["Data.Newtype"],
      g = a["Data.Ord"],
      l = a["Data.Tuple"],
      m = a["Data.Unfoldable1"];

  a = function a(_a10) {
    return _a10;
  };

  var r = function r(a) {
    this.Bounded0 = a;
  },
      n = function n(a, b, c) {
    this.Ord0 = a;
    this.pred = b;
    this.succ = c;
  },
      y = function y(a, b, c, d, e) {
    this.Bounded0 = a;
    this.Enum1 = b;
    this.cardinality = c;
    this.fromEnum = d;
    this.toEnum = e;
  },
      t = new r(function () {
    return h.boundedBoolean;
  }),
      p = new c.Newtype(function (a) {
    return a;
  }, a),
      z = function z(a) {
    return new n(function () {
      return e.ordMaybe(a.Enum1().Ord0());
    }, function (b) {
      if (b instanceof e.Nothing) return e.Nothing.value;
      if (b instanceof e.Just) return new e.Just((0, a.Enum1().pred)(b.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [b.constructor.name]);
    }, function (c) {
      if (c instanceof e.Nothing) return new e.Just(new e.Just(h.bottom(a.Bounded0())));
      if (c instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, a.Enum1().succ)(c.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [c.constructor.name]);
    });
  },
      w = new n(function () {
    return g.ordBoolean;
  }, function (a) {
    return a ? new e.Just(!1) : e.Nothing.value;
  }, function (a) {
    return a ? e.Nothing.value : new e.Just(!0);
  }),
      x = function x(a) {
    return function (b) {
      return function (c) {
        return a(b(c) + 1 | 0);
      };
    };
  },
      u = function u(a) {
    return function (b) {
      return function (c) {
        return a(b(c) - 1 | 0);
      };
    };
  },
      H = function H(a) {
    return a >= h.bottom(h.boundedInt) && a <= h.top(h.boundedInt) ? new e.Just(f.fromCharCode(a)) : e.Nothing.value;
  },
      q = new n(function () {
    return g.ordChar;
  }, u(H)(f.toCharCode), x(H)(f.toCharCode));

  H = new y(function () {
    return h.boundedChar;
  }, function () {
    return q;
  }, f.toCharCode(h.top(h.boundedChar)) - f.toCharCode(h.bottom(h.boundedChar)) | 0, f.toCharCode, H);
  var E = new y(function () {
    return h.boundedBoolean;
  }, function () {
    return w;
  }, 2, function (a) {
    if (!a) return 0;
    if (a) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [a.constructor.name]);
  }, function (a) {
    return 0 === a ? new e.Just(!1) : 1 === a ? new e.Just(!0) : e.Nothing.value;
  });
  d.Enum = n;
  d.BoundedEnum = y;

  d.toEnum = function (a) {
    return a.toEnum;
  };

  d.fromEnum = function (a) {
    return a.fromEnum;
  };

  d.toEnumWithDefaults = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          var f = (0, a.toEnum)(d);
          if (f instanceof e.Just) return f.value0;
          if (f instanceof e.Nothing) return d < (0, a.fromEnum)(h.bottom(a.Bounded0())) ? b : c;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [f.constructor.name]);
        };
      };
    };
  };

  d.Cardinality = a;

  d.upFromIncluding = function (a) {
    return function (b) {
      return m.unfoldr1(b)(k.apply(k.applyFn)(l.Tuple.create)(a.succ));
    };
  };

  d.defaultSucc = x;
  d.defaultPred = u;
  d.SmallBounded = r;
  d.boundedEnumBoolean = E;
  d.boundedEnumChar = H;
  d.newtypeCardinality = p;

  d.boundedEnumMaybe = function (a) {
    return function (a) {
      return new y(function () {
        return e.boundedMaybe(a.Bounded0());
      }, function () {
        return z(a);
      }, c.unwrap(p)(a.cardinality) + 1 | 0, function (b) {
        if (b instanceof e.Nothing) return 0;
        if (b instanceof e.Just) return (0, a.fromEnum)(b.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [b.constructor.name]);
      }, function (c) {
        return 0 === c ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, a.toEnum)(c - 1 | 0));
      });
    };
  };

  d.smallBoundedBoolean = t;
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
  a = new function (a) {
    this.Ring0 = a;
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
      h = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      c = function c(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, c);

  var g = new h.Functor(function (a) {
    return function (a) {
      return a;
    };
  }),
      l = function l(a) {
    return new k.Apply(function () {
      return g;
    }, function (b) {
      return function (c) {
        return e.append(a)(b)(c);
      };
    });
  };

  d.Const = c;
  d.newtypeConst = a;

  d.applicativeConst = function (a) {
    return new f.Applicative(function () {
      return l(a.Semigroup0());
    }, function (c) {
      return b.mempty(a);
    });
  };
})(PS);

(function (a) {
  var d = function d(a, _d, h) {
    _d = new Date(Date.UTC(a, _d, h));
    0 <= a && 100 > a && _d.setUTCFullYear(a);
    return _d;
  };

  a.canonicalDateImpl = function (a, k, h, b) {
    k = d(k, h - 1, b);
    return a(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };

  a.calcWeekday = function (a, k, h) {
    return d(a, k - 1, h).getUTCDay();
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var d = a["Data.Date.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      c = a["Data.Ord"],
      g = a["Data.Ordering"],
      l = a["Data.Show"],
      m = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      C = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
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
    function a() {}

    a.value = new a();
    return a;
  }(),
      D = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a = new l.Show(function (a) {
    if (a instanceof m) return "Monday";
    if (a instanceof r) return "Tuesday";
    if (a instanceof n) return "Wednesday";
    if (a instanceof y) return "Thursday";
    if (a instanceof t) return "Friday";
    if (a instanceof p) return "Saturday";
    if (a instanceof z) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [a.constructor.name]);
  });
  l = new l.Show(function (a) {
    if (a instanceof w) return "January";
    if (a instanceof x) return "February";
    if (a instanceof u) return "March";
    if (a instanceof H) return "April";
    if (a instanceof q) return "May";
    if (a instanceof E) return "June";
    if (a instanceof C) return "July";
    if (a instanceof I) return "August";
    if (a instanceof B) return "September";
    if (a instanceof G) return "October";
    if (a instanceof D) return "November";
    if (a instanceof F) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [a.constructor.name]);
  });
  var K = c.ordInt,
      v = c.ordInt,
      A = new b.Eq(function (a) {
    return function (b) {
      return a instanceof m && b instanceof m || a instanceof r && b instanceof r || a instanceof n && b instanceof n || a instanceof y && b instanceof y || a instanceof t && b instanceof t || a instanceof p && b instanceof p || a instanceof z && b instanceof z ? !0 : !1;
    };
  }),
      J = new c.Ord(function () {
    return A;
  }, function (a) {
    return function (b) {
      if (a instanceof m && b instanceof m) return g.EQ.value;
      if (a instanceof m) return g.LT.value;
      if (b instanceof m) return g.GT.value;
      if (a instanceof r && b instanceof r) return g.EQ.value;
      if (a instanceof r) return g.LT.value;
      if (b instanceof r) return g.GT.value;
      if (a instanceof n && b instanceof n) return g.EQ.value;
      if (a instanceof n) return g.LT.value;
      if (b instanceof n) return g.GT.value;
      if (a instanceof y && b instanceof y) return g.EQ.value;
      if (a instanceof y) return g.LT.value;
      if (b instanceof y) return g.GT.value;
      if (a instanceof t && b instanceof t) return g.EQ.value;
      if (a instanceof t) return g.LT.value;
      if (b instanceof t) return g.GT.value;
      if (a instanceof p && b instanceof p) return g.EQ.value;
      if (a instanceof p) return g.LT.value;
      if (b instanceof p) return g.GT.value;
      if (a instanceof z && b instanceof z) return g.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      R = new b.Eq(function (a) {
    return function (b) {
      return a instanceof w && b instanceof w || a instanceof x && b instanceof x || a instanceof u && b instanceof u || a instanceof H && b instanceof H || a instanceof q && b instanceof q || a instanceof E && b instanceof E || a instanceof C && b instanceof C || a instanceof I && b instanceof I || a instanceof B && b instanceof B || a instanceof G && b instanceof G || a instanceof D && b instanceof D || a instanceof F && b instanceof F ? !0 : !1;
    };
  }),
      N = new c.Ord(function () {
    return R;
  }, function (a) {
    return function (b) {
      if (a instanceof w && b instanceof w) return g.EQ.value;
      if (a instanceof w) return g.LT.value;
      if (b instanceof w) return g.GT.value;
      if (a instanceof x && b instanceof x) return g.EQ.value;
      if (a instanceof x) return g.LT.value;
      if (b instanceof x) return g.GT.value;
      if (a instanceof u && b instanceof u) return g.EQ.value;
      if (a instanceof u) return g.LT.value;
      if (b instanceof u) return g.GT.value;
      if (a instanceof H && b instanceof H) return g.EQ.value;
      if (a instanceof H) return g.LT.value;
      if (b instanceof H) return g.GT.value;
      if (a instanceof q && b instanceof q) return g.EQ.value;
      if (a instanceof q) return g.LT.value;
      if (b instanceof q) return g.GT.value;
      if (a instanceof E && b instanceof E) return g.EQ.value;
      if (a instanceof E) return g.LT.value;
      if (b instanceof E) return g.GT.value;
      if (a instanceof C && b instanceof C) return g.EQ.value;
      if (a instanceof C) return g.LT.value;
      if (b instanceof C) return g.GT.value;
      if (a instanceof I && b instanceof I) return g.EQ.value;
      if (a instanceof I) return g.LT.value;
      if (b instanceof I) return g.GT.value;
      if (a instanceof B && b instanceof B) return g.EQ.value;
      if (a instanceof B) return g.LT.value;
      if (b instanceof B) return g.GT.value;
      if (a instanceof G && b instanceof G) return g.EQ.value;
      if (a instanceof G) return g.LT.value;
      if (b instanceof G) return g.GT.value;
      if (a instanceof D && b instanceof D) return g.EQ.value;
      if (a instanceof D) return g.LT.value;
      if (b instanceof D) return g.GT.value;
      if (a instanceof F && b instanceof F) return g.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      L = new k.Bounded(function () {
    return K;
  }, -271820, 275759),
      S = new k.Bounded(function () {
    return J;
  }, m.value, z.value),
      P = new k.Bounded(function () {
    return N;
  }, w.value, F.value),
      M = new h.BoundedEnum(function () {
    return L;
  }, function () {
    return W;
  }, 547580, function (a) {
    return a;
  }, function (a) {
    if (-271820 <= a && 275759 >= a) return new e.Just(a);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [a.constructor.name]);
  }),
      W = new h.Enum(function () {
    return K;
  }, function () {
    var a = h.toEnum(M),
        b = h.fromEnum(M);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(M),
        b = h.fromEnum(M);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      Q = new h.BoundedEnum(function () {
    return S;
  }, function () {
    return O;
  }, 7, function (a) {
    if (a instanceof m) return 1;
    if (a instanceof r) return 2;
    if (a instanceof n) return 3;
    if (a instanceof y) return 4;
    if (a instanceof t) return 5;
    if (a instanceof p) return 6;
    if (a instanceof z) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(m.value) : 2 === a ? new e.Just(r.value) : 3 === a ? new e.Just(n.value) : 4 === a ? new e.Just(y.value) : 5 === a ? new e.Just(t.value) : 6 === a ? new e.Just(p.value) : 7 === a ? new e.Just(z.value) : e.Nothing.value;
  }),
      O = new h.Enum(function () {
    return J;
  }, function () {
    var a = h.toEnum(Q),
        b = h.fromEnum(Q);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(Q),
        b = h.fromEnum(Q);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      T = new h.BoundedEnum(function () {
    return P;
  }, function () {
    return U;
  }, 12, function (a) {
    if (a instanceof w) return 1;
    if (a instanceof x) return 2;
    if (a instanceof u) return 3;
    if (a instanceof H) return 4;
    if (a instanceof q) return 5;
    if (a instanceof E) return 6;
    if (a instanceof C) return 7;
    if (a instanceof I) return 8;
    if (a instanceof B) return 9;
    if (a instanceof G) return 10;
    if (a instanceof D) return 11;
    if (a instanceof F) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [a.constructor.name]);
  }, function (a) {
    return 1 === a ? new e.Just(w.value) : 2 === a ? new e.Just(x.value) : 3 === a ? new e.Just(u.value) : 4 === a ? new e.Just(H.value) : 5 === a ? new e.Just(q.value) : 6 === a ? new e.Just(E.value) : 7 === a ? new e.Just(C.value) : 8 === a ? new e.Just(I.value) : 9 === a ? new e.Just(B.value) : 10 === a ? new e.Just(G.value) : 11 === a ? new e.Just(D.value) : 12 === a ? new e.Just(F.value) : e.Nothing.value;
  }),
      U = new h.Enum(function () {
    return N;
  }, function () {
    var a = h.toEnum(T),
        b = h.fromEnum(T);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(T),
        b = h.fromEnum(T);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      aa = new k.Bounded(function () {
    return v;
  }, 1, 31),
      Z = new h.BoundedEnum(function () {
    return aa;
  }, function () {
    return ea;
  }, 31, function (a) {
    return a;
  }, function (a) {
    if (1 <= a && 31 >= a) return new e.Just(a);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [a.constructor.name]);
  }),
      ea = new h.Enum(function () {
    return v;
  }, function () {
    var a = h.toEnum(Z),
        b = h.fromEnum(Z);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(Z),
        b = h.fromEnum(Z);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }());
  d.January = w;
  d.February = x;
  d.March = u;
  d.April = H;
  d.May = q;
  d.June = E;
  d.July = C;
  d.August = I;
  d.September = B;
  d.October = G;
  d.November = D;
  d.December = F;
  d.boundedYear = L;
  d.boundedEnumYear = M;
  d.boundedMonth = P;
  d.boundedEnumMonth = T;
  d.showMonth = l;
  d.boundedDay = aa;
  d.boundedEnumDay = Z;
  d.boundedEnumWeekday = Q;
  d.showWeekday = a;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var d = a["Data.Date"],
      f = a["Data.Date"],
      k = a["Data.Date.Component"],
      h = a["Data.Enum"],
      b = a["Data.Maybe"],
      e = function () {
    function a(a, b, c) {
      this.value0 = a;
      this.value1 = b;
      this.value2 = c;
    }

    a.create = function (b) {
      return function (c) {
        return function (d) {
          return new a(b, c, d);
        };
      };
    };

    return a;
  }();

  d.canonicalDate = function (a) {
    return function (c) {
      return function (d) {
        return f.canonicalDateImpl(function (a) {
          return function (c) {
            return function (d) {
              return new e(a, b.fromJust()(h.toEnum(k.boundedEnumMonth)(c)), d);
            };
          };
        }, a, h.fromEnum(k.boundedEnumMonth)(c), d);
      };
    };
  };

  d.year = function (a) {
    return a.value0;
  };

  d.month = function (a) {
    return a.value1;
  };

  d.day = function (a) {
    return a.value2;
  };

  d.weekday = function (a) {
    a = f.calcWeekday(a.value0, h.fromEnum(k.boundedEnumMonth)(a.value1), a.value2);
    return 0 === a ? b.fromJust()(h.toEnum(k.boundedEnumWeekday)(7)) : b.fromJust()(h.toEnum(k.boundedEnumWeekday)(a));
  };
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  a = a["Data.DateTime"];

  var d = function () {
    function a(a, d) {
      this.value0 = a;
      this.value1 = d;
    }

    a.create = function (d) {
      return function (f) {
        return new a(d, f);
      };
    };

    return a;
  }();

  a.DateTime = d;
})(PS);

(function (a) {
  a.fromDateTimeImpl = function (a, f, k, h, b, e, c) {
    f = new Date(Date.UTC(a, f - 1, k, h, b, e, c));
    0 <= a && 100 > a && f.setUTCFullYear(a);
    return f.getTime();
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  a = a["Data.Time"];

  var d = function () {
    function a(a, d, b, e) {
      this.value0 = a;
      this.value1 = d;
      this.value2 = b;
      this.value3 = e;
    }

    a.create = function (d) {
      return function (f) {
        return function (b) {
          return function (e) {
            return new a(d, f, b, e);
          };
        };
      };
    };

    return a;
  }();

  a.Time = d;

  a.hour = function (a) {
    return a.value0;
  };

  a.minute = function (a) {
    return a.value1;
  };

  a.second = function (a) {
    return a.value2;
  };

  a.millisecond = function (a) {
    return a.value3;
  };
})(PS);

(function (a) {
  a["Data.DateTime.Instant"] = a["Data.DateTime.Instant"] || {};
  var d = a["Data.DateTime.Instant"],
      f = a["Data.DateTime.Instant"],
      k = a["Data.Date"],
      h = a["Data.Date.Component"],
      b = a["Data.Enum"],
      e = a["Data.Time"];

  d.unInstant = function (a) {
    return a;
  };

  d.fromDateTime = function (a) {
    return f.fromDateTimeImpl(k.year(a.value0), b.fromEnum(h.boundedEnumMonth)(k.month(a.value0)), k.day(a.value0), e.hour(a.value1), e.minute(a.value1), e.second(a.value1), e.millisecond(a.value1));
  };
})(PS);

(function (a) {
  a.intDegree = function (a) {
    return Math.min(Math.abs(a), 2147483647);
  };

  a.intDiv = function (a) {
    return function (d) {
      return 0 === d ? 0 : 0 < d ? Math.floor(a / d) : -Math.floor(a / -d);
    };
  };

  a.intMod = function (a) {
    return function (d) {
      if (0 === d) return 0;
      d = Math.abs(d);
      return (a % d + d) % d;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var d = a["Data.EuclideanRing"],
      f = a["Data.EuclideanRing"],
      k = a["Data.CommutativeRing"];
  a = new function (a, b, d, c) {
    this.CommutativeRing0 = a;
    this.degree = b;
    this.div = d;
    this.mod = c;
  }(function () {
    return k.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  d.div = function (a) {
    return a.div;
  };

  d.mod = function (a) {
    return a.mod;
  };

  d.euclideanRingInt = a;
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var d = a["Data.Identity"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      c = function c(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, c);
  var g = new e.Functor(function (a) {
    return function (b) {
      return a(b);
    };
  }),
      l = new k.Apply(function () {
    return g;
  }, function (a) {
    return function (b) {
      return a(b);
    };
  }),
      m = new h.Bind(function () {
    return l;
  }, function (a) {
    return function (b) {
      return b(a);
    };
  }),
      r = new f.Applicative(function () {
    return l;
  }, c);
  f = new b.Monad(function () {
    return r;
  }, function () {
    return m;
  });
  d.newtypeIdentity = a;
  d.functorIdentity = g;
  d.monadIdentity = f;
})(PS);

(function (a) {
  a.split = function (a) {
    return function (d) {
      return d.split(a);
    };
  };

  a.toUpper = function (a) {
    return a.toUpperCase();
  };

  a.trim = function (a) {
    return a.trim();
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var d = a["Data.String.Common"];
  a = a["Data.String.Common"];

  d["null"] = function (a) {
    return "" === a;
  };

  d.split = a.split;
  d.toUpper = a.toUpper;
  d.trim = a.trim;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  var d = a["Data.String.Pattern"],
      f = function f(a) {
    return a;
  };

  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, f);
  d.Pattern = f;
  d.newtypePattern = a;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Pos"] = a["Text.Parsing.Parser.Pos"] || {};
  var d = a["Text.Parsing.Parser.Pos"],
      f = a["Data.EuclideanRing"],
      k = a["Data.Foldable"],
      h = a["Data.Newtype"],
      b = a["Data.String.Common"],
      e = a["Data.String.Pattern"];
  d.initialPos = {
    line: 1,
    column: 1
  };

  d.updatePosString = function (a) {
    return function (c) {
      return k.foldl(k.foldableArray)(function (a) {
        return function (b) {
          return "\n" === b || "\r" === b ? {
            line: a.line + 1 | 0,
            column: 1
          } : "\t" === b ? {
            line: a.line,
            column: (a.column + 8 | 0) - f.mod(f.euclideanRingInt)(a.column - 1 | 0)(8) | 0
          } : {
            line: a.line,
            column: a.column + 1 | 0
          };
        };
      })(a)(b.split(h.wrap(e.newtypePattern)(""))(c));
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser"] = a["Text.Parsing.Parser"] || {};

  var d = a["Text.Parsing.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Error.Class"],
      g = a["Control.Monad.Except.Trans"],
      l = a["Control.Monad.State.Class"],
      m = a["Control.Monad.State.Trans"],
      r = a["Control.Plus"],
      n = a["Data.Either"],
      y = a["Data.Identity"],
      t = a["Data.Newtype"],
      p = a["Data.Tuple"],
      z = a["Text.Parsing.Parser.Pos"],
      w = function () {
    function a(a, b, c) {
      this.value0 = a;
      this.value1 = b;
      this.value2 = c;
    }

    a.create = function (b) {
      return function (c) {
        return function (d) {
          return new a(b, c, d);
        };
      };
    };

    return a;
  }(),
      x = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }();

  a = function a(_a11) {
    return _a11;
  };

  var u = new t.Newtype(function (a) {
    return a;
  }, a),
      H = function H(a) {
    return function (b) {
      return function (c) {
        var d = new w(b, z.initialPos, !1);
        return m.evalStateT(a.Bind1().Apply0().Functor0())(g.runExceptT(t.unwrap(u)(c)))(d);
      };
    };
  },
      q = function q(a) {
    return g.monadStateExceptT(m.monadStateStateT(a));
  },
      E = function E(a) {
    return l.gets(q(a))(function (a) {
      return a.value1;
    });
  },
      C = new e.Lazy(function (a) {
    return e.defer(m.lazyStateT)(function () {
      var b = t.unwrap(u);
      return function (c) {
        return g.runExceptT(b(a(c)));
      };
    }());
  }),
      I = function I(a) {
    return g.functorExceptT(m.functorStateT(a));
  },
      B = function B(a) {
    return function (b) {
      return function (d) {
        return c.throwError(g.monadThrowExceptT(m.monadStateT(a)))(new x(b, d));
      };
    };
  },
      G = function G(a) {
    return g.bindExceptT(m.monadStateT(a));
  },
      D = function D(a) {
    return function (c) {
      return b.bindFlipped(G(a))(B(a)(c))(E(a));
    };
  },
      F = function F(a) {
    return g.applicativeExceptT(m.monadStateT(a));
  },
      K = function K(a) {
    return new f.Alt(function () {
      return I(a.Bind1().Apply0().Functor0());
    }, function (c) {
      return function (d) {
        return g.ExceptT(m.StateT(function (e) {
          return b.bind(a.Bind1())(m.runStateT(g.runExceptT(t.unwrap(u)(c)))(new w(e.value0, e.value1, !1)))(function (b) {
            return b.value0 instanceof n.Left && !b.value1.value2 ? m.runStateT(g.runExceptT(t.unwrap(u)(d)))(e) : h.pure(a.Applicative0())(new p.Tuple(b.value0, b.value1));
          });
        }));
      };
    });
  },
      v = function v(a) {
    return new r.Plus(function () {
      return K(a);
    }, D(a)("No alternative"));
  };

  d.ParseError = x;

  d.parseErrorMessage = function (a) {
    return a.value0;
  };

  d.parseErrorPosition = function (a) {
    return a.value1;
  };

  d.ParseState = w;
  d.ParserT = a;

  d.runParser = function (a) {
    var b = t.unwrap(y.newtypeIdentity),
        c = H(y.monadIdentity)(a);
    return function (a) {
      return b(c(a));
    };
  };

  d.fail = D;
  d.newtypeParserT = u;
  d.lazyParserT = C;
  d.functorParserT = I;

  d.applyParserT = function (a) {
    return g.applyExceptT(m.monadStateT(a));
  };

  d.applicativeParserT = F;
  d.bindParserT = G;
  d.monadStateParserT = q;
  d.altParserT = K;
  d.plusParserT = v;

  d.alternativeParserT = function (a) {
    return new k.Alternative(function () {
      return F(a);
    }, function () {
      return v(a);
    });
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Combinators"] = a["Text.Parsing.Parser.Combinators"] || {};
  var d = a["Text.Parsing.Parser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Bind"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Control.Monad.State.Trans"],
      c = a["Control.Plus"],
      g = a["Data.Either"],
      l = a["Data.Foldable"],
      m = a["Data.Newtype"],
      r = a["Data.Tuple"],
      n = a["Text.Parsing.Parser"];

  d.withErrorMessage = function (a) {
    return function (b) {
      return function (c) {
        return f.alt(n.altParserT(a))(b)(n.fail(a)("Expected " + c));
      };
    };
  };

  d["try"] = function (a) {
    return function (c) {
      return n.ParserT(b.ExceptT(e.StateT(function (d) {
        return h.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(n.newtypeParserT)(c)))(d))(function (b) {
          return b.value0 instanceof g.Left ? k.pure(a.Applicative0())(new r.Tuple(b.value0, new n.ParseState(b.value1.value0, b.value1.value1, d.value2))) : k.pure(a.Applicative0())(new r.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  d.tryRethrow = function (a) {
    return function (c) {
      return n.ParserT(b.ExceptT(e.StateT(function (d) {
        return h.bind(a.Bind1())(e.runStateT(b.runExceptT(m.unwrap(n.newtypeParserT)(c)))(d))(function (b) {
          return b.value0 instanceof g.Left ? k.pure(a.Applicative0())(new r.Tuple(new g.Left(new n.ParseError(b.value0.value0.value0, d.value1)), new n.ParseState(b.value1.value0, b.value1.value1, d.value2))) : k.pure(a.Applicative0())(new r.Tuple(b.value0, b.value1));
        });
      })));
    };
  };

  d.choice = function (a) {
    return function (b) {
      return l.foldl(a)(f.alt(n.altParserT(b)))(c.empty(n.plusParserT(b)));
    };
  };
})(PS);

(function (a) {
  var d = "function" === typeof Array.from,
      f = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      k = "function" === typeof String.prototype.fromCodePoint,
      h = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (a) {
    return h ? function (a) {
      return a.codePointAt(0);
    } : a;
  };

  a._codePointAt = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (g) {
              var h = g.length;
              if (0 > e || e >= h) return c;
              if (f) for (g = g[Symbol.iterator](), h = e;; --h) {
                var k = g.next();
                if (k.done) return c;
                if (0 === h) return b(d(k.value));
              }
              return a(e)(g);
            };
          };
        };
      };
    };
  };

  a._singleton = function (a) {
    return k ? String.fromCodePoint : a;
  };

  a._take = function (a) {
    return function (b) {
      return f ? function (a) {
        var c = "";
        a = a[Symbol.iterator]();

        for (var d = 0; d < b; ++d) {
          var e = a.next();
          if (e.done) break;
          c += e.value;
        }

        return c;
      } : a(b);
    };
  };

  a._toCodePointArray = function (a) {
    return function (b) {
      return d ? function (a) {
        return Array.from(a, b);
      } : a;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.fromNumberImpl = function (a) {
    return function (d) {
      return function (f) {
        return (f | 0) === f ? a(f) : d;
      };
    };
  };

  a.toNumber = function (a) {
    return a;
  };

  a.toStringAs = function (a) {
    return function (d) {
      return d.toString(a);
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});

(function (a) {
  a.infinity = Infinity;
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  a.Global.infinity = a.Global.infinity;
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
      h = a["Data.Bounded"],
      b = a["Data.Maybe"],
      e = a.Global,
      c = a.Math,
      g = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      l = function l(a) {
    if (a === e.infinity || a === -e.infinity) return 0;
    if (a >= f.toNumber(h.top(h.boundedInt))) return h.top(h.boundedInt);
    if (a <= f.toNumber(h.bottom(h.boundedInt))) return h.bottom(h.boundedInt);
    if (k.otherwise) return b.fromMaybe(0)(g(a));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [a.constructor.name]);
  };

  d.floor = function (a) {
    return l(c.floor(a));
  };

  d.hexadecimal = 16;
  d.toStringAs = f.toStringAs;
})(PS);

(function (a) {
  a.fromCharArray = function (a) {
    return a.join("");
  };

  a.toCharArray = function (a) {
    return a.split("");
  };

  a.singleton = function (a) {
    return a;
  };

  a._charAt = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return 0 <= f && f < h.length ? a(h.charAt(f)) : d;
        };
      };
    };
  };

  a.length = function (a) {
    return a.length;
  };

  a._indexOf = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          h = h.indexOf(f);
          return -1 === h ? d : a(h);
        };
      };
    };
  };

  a.take = function (a) {
    return function (d) {
      return d.substr(0, a);
    };
  };

  a.drop = function (a) {
    return function (d) {
      return d.substring(a);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a.charAt = function (a) {
    return function (d) {
      if (0 <= a && a < d.length) return d.charAt(a);
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
      h = a["Data.String.Unsafe"],
      b = f._indexOf(k.Just.create)(k.Nothing.value);

  f._charAt(k.Just.create)(k.Nothing.value);

  d.contains = function (a) {
    var c = b(a);
    return function (a) {
      return k.isJust(c(a));
    };
  };

  d.uncons = function (a) {
    return "" === a ? k.Nothing.value : new k.Just({
      head: h.charAt(0)(a),
      tail: f.drop(1)(a)
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
  a.unfoldrArrayImpl = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                if (a(e)) return c;
                e = d(e);
                c.push(f(e));
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
  var d = a["Data.Unfoldable"],
      f = a["Data.Function"],
      k = a["Data.Functor"],
      h = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = a["Data.Unfoldable1"];
  a = new function (a, b) {
    this.Unfoldable10 = a;
    this.unfoldr = b;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(h.isNothing)(h.fromJust())(b.fst)(b.snd));

  d.unfoldr = function (a) {
    return a.unfoldr;
  };

  d.fromMaybe = function (a) {
    return (0, a.unfoldr)(function (a) {
      return k.map(h.functorMaybe)(f.flip(b.Tuple.create)(h.Nothing.value))(a);
    });
  };

  d.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var d = a["Data.String.CodePoints"],
      f = a["Data.String.CodePoints"],
      k = a["Data.Array"],
      h = a["Data.Boolean"],
      b = a["Data.Bounded"],
      e = a["Data.Enum"],
      c = a["Data.Eq"],
      g = a["Data.EuclideanRing"],
      l = a["Data.Functor"],
      m = a["Data.Int"],
      r = a["Data.Maybe"],
      n = a["Data.Ord"],
      y = a["Data.String.CodeUnits"],
      t = a["Data.String.Common"],
      p = a["Data.String.Unsafe"],
      z = a["Data.Tuple"],
      w = a["Data.Unfoldable"],
      x = function x(a) {
    return function (b) {
      return ((1024 * (a - 55296 | 0) | 0) + (b - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (a) {
    return "(CodePoint 0x" + (t.toUpper(m.toStringAs(m.hexadecimal)(a)) + ")");
  });

  var u = function u(a) {
    var b = y.length(a);
    if (0 === b) return r.Nothing.value;
    if (1 === b) return new r.Just({
      head: e.fromEnum(e.boundedEnumChar)(p.charAt(0)(a)),
      tail: ""
    });
    b = e.fromEnum(e.boundedEnumChar)(p.charAt(1)(a));
    var c = e.fromEnum(e.boundedEnumChar)(p.charAt(0)(a));
    return 55296 <= c && 56319 >= c && 56320 <= b && 57343 >= b ? new r.Just({
      head: x(c)(b),
      tail: y.drop(2)(a)
    }) : new r.Just({
      head: c,
      tail: y.drop(1)(a)
    });
  },
      H = function H(a) {
    return l.map(r.functorMaybe)(function (a) {
      return new z.Tuple(a.head, a.tail);
    })(u(a));
  },
      q = f._unsafeCodePointAt0(function (a) {
    var b = e.fromEnum(e.boundedEnumChar)(p.charAt(0)(a));
    return 55296 <= b && 56319 >= b && 1 < y.length(a) && (a = e.fromEnum(e.boundedEnumChar)(p.charAt(1)(a)), 56320 <= a && 57343 >= a) ? x(b)(a) : b;
  }),
      E = f._toCodePointArray(function (a) {
    return w.unfoldr(w.unfoldableArray)(H)(a);
  })(q),
      C = function C(a) {
    return k.length(E(a));
  },
      I = function () {
    var a = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (b) {
      return y.singleton(a(b));
    };
  }(),
      B = f._singleton(function (a) {
    if (65535 >= a) return I(a);
    var b = g.div(g.euclideanRingInt)(a - 65536 | 0)(1024) + 55296 | 0;
    a = g.mod(g.euclideanRingInt)(a - 65536 | 0)(1024) + 56320 | 0;
    return I(b) + I(a);
  }),
      G = function G(a) {
    return function (b) {
      if (1 > a) return "";
      var c = u(b);
      return c instanceof r.Just ? B(c.value0.head) + G(a - 1 | 0)(c.value0.tail) : b;
    };
  },
      D = f._take(G),
      F = new c.Eq(function (a) {
    return function (b) {
      return a === b;
    };
  }),
      K = new n.Ord(function () {
    return F;
  }, function (a) {
    return function (b) {
      return n.compare(n.ordInt)(a)(b);
    };
  }),
      v = function v(a) {
    return function (b) {
      for (var c = a, d = !1, e; !d;) {
        e = c;
        var f = u(b);
        f instanceof r.Just ? 0 === e ? (d = !0, e = new r.Just(f.value0.head)) : (c = e - 1 | 0, b = f.value0.tail, e = void 0) : (d = !0, e = r.Nothing.value);
      }

      return e;
    };
  },
      A = new b.Bounded(function () {
    return K;
  }, 0, 1114111);

  c = new e.BoundedEnum(function () {
    return A;
  }, function () {
    return J;
  }, 1114112, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 1114111 >= a) return new r.Just(a);
    if (h.otherwise) return r.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [a.constructor.name]);
  });
  var J = new e.Enum(function () {
    return K;
  }, e.defaultPred(e.toEnum(c))(e.fromEnum(c)), e.defaultSucc(e.toEnum(c))(e.fromEnum(c)));
  d.singleton = B;
  d.toCodePointArray = E;

  d.codePointAt = function (a) {
    return function (b) {
      return 0 > a || 0 === a && "" === b ? r.Nothing.value : 0 === a ? new r.Just(q(b)) : f._codePointAt(v)(r.Just.create)(r.Nothing.value)(q)(a)(b);
    };
  };

  d.length = C;

  d.indexOf = function (a) {
    return function (b) {
      return l.map(r.functorMaybe)(function (a) {
        return C(y.take(a)(b));
      })(y.indexOf(a)(b));
    };
  };

  d.take = D;

  d.drop = function (a) {
    return function (b) {
      return y.drop(y.length(D(a)(b)))(b);
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
      h = a["Control.Monad.State.Class"],
      b = a["Data.Eq"],
      e = a["Data.Foldable"],
      c = a["Data.Function"],
      g = a["Data.Maybe"],
      l = a["Data.Newtype"],
      m = a["Data.Show"],
      r = a["Data.String.CodePoints"],
      n = a["Data.String.CodeUnits"],
      y = a["Data.String.Pattern"],
      t = a["Text.Parsing.Parser"],
      p = a["Text.Parsing.Parser.Combinators"],
      z = a["Text.Parsing.Parser.Pos"];
  a = new function (a, b, c, d) {
    this.drop = a;
    this.indexOf = b;
    this["null"] = c;
    this.uncons = d;
  }(r.drop, r.indexOf, a["Data.String.Common"]["null"], n.uncons);

  var w = function w(a) {
    return function (b) {
      return k.bind(t.bindParserT(b))(h.gets(t.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (c) {
        var d = (0, a.uncons)(c);
        if (d instanceof g.Nothing) return t.fail(b)("Unexpected EOF");
        if (d instanceof g.Just) return k.discard(k.discardUnit)(t.bindParserT(b))(h.modify_(t.monadStateParserT(b))(function (a) {
          return new t.ParseState(d.value0.tail, z.updatePosString(a.value1)(n.singleton(d.value0.head)), !0);
        }))(function () {
          return f.pure(t.applicativeParserT(b))(d.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [d.constructor.name]);
      });
    };
  },
      x = function x(a) {
    return function (b) {
      return function (c) {
        return p.tryRethrow(b)(k.bind(t.bindParserT(b))(w(a)(b))(function (a) {
          return c(a) ? f.pure(t.applicativeParserT(b))(a) : t.fail(b)("Character '" + (n.singleton(a) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  d.eof = function (a) {
    return function (b) {
      return k.bind(t.bindParserT(b))(h.gets(t.monadStateParserT(b))(function (a) {
        return a.value0;
      }))(function (c) {
        return f.unless(t.applicativeParserT(b))((0, a["null"])(c))(t.fail(b)("Expected EOF"));
      });
    };
  };

  d.string = function (a) {
    return function (b) {
      return function (c) {
        return k.bind(t.bindParserT(b))(h.gets(t.monadStateParserT(b))(function (a) {
          return a.value0;
        }))(function (d) {
          var e = (0, a.indexOf)(l.wrap(y.newtypePattern)(c))(d);
          return e instanceof g.Just && 0 === e.value0 ? k.discard(k.discardUnit)(t.bindParserT(b))(h.modify_(t.monadStateParserT(b))(function (b) {
            return new t.ParseState((0, a.drop)(r.length(c))(d), z.updatePosString(b.value1)(c), !0);
          }))(function () {
            return f.pure(t.applicativeParserT(b))(c);
          }) : t.fail(b)("Expected " + m.show(m.showString)(c));
        });
      };
    };
  };

  d.noneOf = function (a) {
    return function (d) {
      return function (f) {
        return p.withErrorMessage(d)(x(a)(d)(c.flip(e.notElem(e.foldableArray)(b.eqChar))(f)))("none of " + m.show(m.showArray(m.showChar))(f));
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
      h = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Identity"],
      c = a["Data.Show"],
      g = a["Text.Parsing.Parser"],
      l = a["Text.Parsing.Parser.Combinators"],
      m = a["Text.Parsing.Parser.String"],
      r = function r(a) {
    var b = g.parseErrorMessage(a);
    a = g.parseErrorPosition(a);
    a = "(line " + (c.show(c.showInt)(a.line) + (", col " + (c.show(c.showInt)(a.column) + ")")));
    return b + (" " + a);
  };

  d.oneOfAs = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (f) {
            return l.choice(c)(d)(b.map(a)(function (a) {
              return b.voidLeft(g.functorParserT(d.Bind1().Apply0().Functor0()))(e(a.value0))(a.value1);
            })(f));
          };
        };
      };
    };
  };

  d.runP = function (a) {
    return function (b) {
      return function (c) {
        return k.lmap(h.bifunctorEither)(r)(g.runParser(c)(f.applyFirst(g.applyParserT(e.monadIdentity))(b)(m.eof(a)(e.monadIdentity))));
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var d = a["Data.Time.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Maybe"];
  a = a["Data.Ord"];
  var e = a.ordInt,
      c = a.ordInt,
      g = a.ordInt,
      l = a.ordInt,
      m = new k.Bounded(function () {
    return e;
  }, 0, 59),
      r = new k.Bounded(function () {
    return c;
  }, 0, 59),
      n = new k.Bounded(function () {
    return g;
  }, 0, 999),
      y = new k.Bounded(function () {
    return l;
  }, 0, 23),
      t = new h.BoundedEnum(function () {
    return m;
  }, function () {
    return p;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [a.constructor.name]);
  }),
      p = new h.Enum(function () {
    return e;
  }, function () {
    var a = h.toEnum(t),
        b = h.fromEnum(t);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(t),
        b = h.fromEnum(t);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      z = new h.BoundedEnum(function () {
    return r;
  }, function () {
    return w;
  }, 60, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 59 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [a.constructor.name]);
  }),
      w = new h.Enum(function () {
    return c;
  }, function () {
    var a = h.toEnum(z),
        b = h.fromEnum(z);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(z),
        b = h.fromEnum(z);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      x = new h.BoundedEnum(function () {
    return n;
  }, function () {
    return u;
  }, 1E3, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 999 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [a.constructor.name]);
  }),
      u = new h.Enum(function () {
    return g;
  }, function () {
    var a = h.toEnum(x),
        b = h.fromEnum(x);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(x),
        b = h.fromEnum(x);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }()),
      H = new h.BoundedEnum(function () {
    return y;
  }, function () {
    return q;
  }, 24, function (a) {
    return a;
  }, function (a) {
    if (0 <= a && 23 >= a) return new b.Just(a);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [a.constructor.name]);
  }),
      q = new h.Enum(function () {
    return l;
  }, function () {
    var a = h.toEnum(H),
        b = h.fromEnum(H);
    return function (c) {
      return a(b(c) - 1 | 0);
    };
  }(), function () {
    var a = h.toEnum(H),
        b = h.fromEnum(H);
    return function (c) {
      return a(b(c) + 1 | 0);
    };
  }());
  d.boundedHour = y;
  d.boundedEnumHour = H;
  d.boundedMinute = r;
  d.boundedEnumMinute = z;
  d.boundedSecond = m;
  d.boundedEnumSecond = t;
  d.boundedMillisecond = n;
  d.boundedEnumMillisecond = x;
})(PS);

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};
  var d = a["Data.Time.Duration"];
  a = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });
  d.newtypeMilliseconds = a;
})(PS);

(function (a) {
  a["Data.Formatter.DateTime"] = a["Data.Formatter.DateTime"] || {};

  var d = a["Data.Formatter.DateTime"],
      f = a["Control.Alt"],
      k = a["Data.Array"],
      h = a["Data.Boolean"],
      b = a["Data.Date"],
      e = a["Data.Date.Component"],
      c = a["Data.DateTime.Instant"],
      g = a["Data.Either"],
      l = a["Data.Enum"],
      m = a["Data.EuclideanRing"],
      r = a["Data.Foldable"],
      n = a["Data.Formatter.Parser.Utils"],
      y = a["Data.Functor"],
      t = a["Data.Identity"],
      p = a["Data.Int"],
      z = a["Data.List"],
      w = a["Data.List.Types"],
      x = a["Data.Monoid"],
      u = a["Data.Newtype"],
      H = a["Data.Ord"],
      q = a["Data.Ring"],
      E = a["Data.Show"],
      C = a["Data.String.CodePoints"],
      I = a["Data.String.CodeUnits"],
      B = a["Data.Time"],
      G = a["Data.Time.Component"],
      D = a["Data.Time.Duration"],
      F = a["Data.Tuple"],
      K = a["Text.Parsing.Parser"],
      v = a["Text.Parsing.Parser.Combinators"],
      A = a["Text.Parsing.Parser.String"],
      J = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      S = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      fa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Y = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      ba = function ba(a) {
    if (a instanceof e.January) return "Jan";
    if (a instanceof e.February) return "Feb";
    if (a instanceof e.March) return "Mar";
    if (a instanceof e.April) return "Apr";
    if (a instanceof e.May) return "May";
    if (a instanceof e.June) return "Jun";
    if (a instanceof e.July) return "Jul";
    if (a instanceof e.August) return "Aug";
    if (a instanceof e.September) return "Sep";
    if (a instanceof e.October) return "Oct";
    if (a instanceof e.November) return "Nov";
    if (a instanceof e.December) return "Dec";
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 482, column 19 - line 494, column 21): " + [a.constructor.name]);
  };

  a = y.mapFlipped(K.functorParserT(t.functorIdentity))(k.some(K.alternativeParserT(t.monadIdentity))(K.lazyParserT)(A.noneOf(A.stringLikeString)(t.monadIdentity)(I.toCharArray("YMDEHhamsS"))))(I.fromCharArray);

  var X = function X(a) {
    if (0 > a) return "-" + X(-a | 0);
    if (10 > a) return "0" + E.show(E.showInt)(a);
    if (h.otherwise) return E.show(E.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [a.constructor.name]);
  },
      ka = function ka(a) {
    if (0 > a) return "-" + ka(-a | 0);
    if (10 > a) return "000" + E.show(E.showInt)(a);
    if (100 > a) return "00" + E.show(E.showInt)(a);
    if (1E3 > a) return "0" + E.show(E.showInt)(a);
    if (h.otherwise) return E.show(E.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [a.constructor.name]);
  },
      ua = function ua(a) {
    if (0 > a) return "-" + ua(-a | 0);
    if (10 > a) return "00" + E.show(E.showInt)(a);
    if (100 > a) return "0" + E.show(E.showInt)(a);
    if (h.otherwise) return E.show(E.showInt)(a);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [a.constructor.name]);
  };

  f = f.alt(K.altParserT(t.monadIdentity))(n.oneOfAs(y.functorArray)(r.foldableArray)(t.monadIdentity)(function () {
    var a = v["try"](t.monadIdentity),
        b = A.string(A.stringLikeString)(t.monadIdentity);
    return function (c) {
      return a(b(c));
    };
  }())([new F.Tuple("YYYY", J.value), new F.Tuple("YY", R.value), new F.Tuple("Y", N.value), new F.Tuple("MMMM", L.value), new F.Tuple("MMM", S.value), new F.Tuple("MM", P.value), new F.Tuple("DD", M.value), new F.Tuple("D", W.value), new F.Tuple("E", O.value), new F.Tuple("X", Q.value), new F.Tuple("dddd", T.value), new F.Tuple("ddd", U.value), new F.Tuple("HH", aa.value), new F.Tuple("hh", Z.value), new F.Tuple("a", ea.value), new F.Tuple("mm", V.value), new F.Tuple("m", fa.value), new F.Tuple("ss", da.value), new F.Tuple("s", ha.value), new F.Tuple("SSS", qa.value), new F.Tuple("SS", ja.value), new F.Tuple("S", ia.value)]))(y.map(K.functorParserT(t.functorIdentity))(Y.create)(a));

  var va = function va(a) {
    a = E.show(E.showInt)(H.abs(H.ordInt)(q.ringInt)(a));
    var b = C.length(a);
    return 1 === b ? "0" + a : 2 === b ? a : C.drop(b - 2 | 0)(a);
  };

  z = z.some(K.alternativeParserT(t.monadIdentity))(K.lazyParserT)(f);

  var xa = n.runP(A.stringLikeString)(z),
      la = function la(a) {
    return 0 === a ? 12 : a;
  },
      ra = function ra(a) {
    return function (d) {
      if (d instanceof J) return ka(l.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (d instanceof R) return va(l.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (d instanceof N) return E.show(E.showInt)(l.fromEnum(e.boundedEnumYear)(b.year(a.value0)));
      if (d instanceof L) return E.show(e.showMonth)(b.month(a.value0));
      if (d instanceof S) return ba(b.month(a.value0));
      if (d instanceof P) return X(l.fromEnum(e.boundedEnumMonth)(b.month(a.value0)));
      if (d instanceof M) return X(l.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (d instanceof W) return E.show(E.showInt)(l.fromEnum(e.boundedEnumDay)(b.day(a.value0)));
      if (d instanceof Q) return E.show(E.showInt)(p.floor(u.unwrap(D.newtypeMilliseconds)(c.unInstant(c.fromDateTime(a))) / 1E3));
      if (d instanceof O) return E.show(E.showInt)(l.fromEnum(e.boundedEnumWeekday)(b.weekday(a.value0)));
      if (d instanceof T) return E.show(e.showWeekday)(b.weekday(a.value0));
      if (d instanceof U) return C.take(3)(E.show(e.showWeekday)(b.weekday(a.value0)));
      if (d instanceof aa) return X(l.fromEnum(G.boundedEnumHour)(B.hour(a.value1)));
      if (d instanceof Z) return X(la(m.mod(m.euclideanRingInt)(l.fromEnum(G.boundedEnumHour)(B.hour(a.value1)))(12)));
      if (d instanceof ea) return 12 <= l.fromEnum(G.boundedEnumHour)(B.hour(a.value1)) ? "PM" : "AM";
      if (d instanceof fa) return E.show(E.showInt)(l.fromEnum(G.boundedEnumMinute)(B.minute(a.value1)));
      if (d instanceof V) return X(l.fromEnum(G.boundedEnumMinute)(B.minute(a.value1)));
      if (d instanceof ha) return E.show(E.showInt)(l.fromEnum(G.boundedEnumSecond)(B.second(a.value1)));
      if (d instanceof da) return X(l.fromEnum(G.boundedEnumSecond)(B.second(a.value1)));
      if (d instanceof qa) return ua(l.fromEnum(G.boundedEnumMillisecond)(B.millisecond(a.value1)));
      if (d instanceof ia) return E.show(E.showInt)(function (a) {
        return m.div(m.euclideanRingInt)(a)(100);
      }(l.fromEnum(G.boundedEnumMillisecond)(B.millisecond(a.value1))));
      if (d instanceof ja) return X(function (a) {
        return m.div(m.euclideanRingInt)(a)(10);
      }(l.fromEnum(G.boundedEnumMillisecond)(B.millisecond(a.value1))));
      if (d instanceof Y) return d.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [d.constructor.name]);
    };
  },
      wa = function wa(a) {
    return function (b) {
      return r.foldMap(w.foldableList)(x.monoidString)(ra(b))(a);
    };
  };

  d.formatDateTime = function (a) {
    return function (b) {
      return y.mapFlipped(g.functorEither)(xa(a))(function (a) {
        return wa(a)(b);
      });
    };
  };
})(PS);

(function (a) {
  a.runFn2 = function (a) {
    return function (d) {
      return function (f) {
        return a(d, f);
      };
    };
  };

  a.runFn4 = function (a) {
    return function (d) {
      return function (f) {
        return function (h) {
          return function (b) {
            return a(d, f, h, b);
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
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      f = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      k = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.Generic = function (a, b) {
    this.from = a;
    this.to = b;
  };

  a.to = function (a) {
    return a.to;
  };

  a.from = function (a) {
    return a.from;
  };

  a.NoArguments = k;
  a.Inl = d;
  a.Inr = f;

  a.Constructor = function (a) {
    return a;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var d = a["Data.Generic.Rep.Bounded"],
      f = a["Data.Generic.Rep"],
      k = function k(a) {
    this["genericTop'"] = a;
  },
      h = function h(a) {
    this["genericBottom'"] = a;
  };

  a = new k(f.NoArguments.value);

  var b = function b(a) {
    return a["genericTop'"];
  },
      e = new h(f.NoArguments.value),
      c = function c(a) {
    return a["genericBottom'"];
  };

  d["genericBottom'"] = c;

  d.genericBottom = function (a) {
    return function (b) {
      return f.to(a)(c(b));
    };
  };

  d["genericTop'"] = b;

  d.genericTop = function (a) {
    return function (c) {
      return f.to(a)(b(c));
    };
  };

  d.genericBottomNoArguments = e;

  d.genericBottomSum = function (a) {
    return new h(new f.Inl(c(a)));
  };

  d.genericBottomConstructor = function (a) {
    return new h(c(a));
  };

  d.genericTopNoArguments = a;

  d.genericTopSum = function (a) {
    return new k(new f.Inr(b(a)));
  };

  d.genericTopConstructor = function (a) {
    return new k(b(a));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var d = a["Data.Generic.Rep.Enum"],
      f = a["Data.Boolean"],
      k = a["Data.Enum"],
      h = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Maybe"],
      g = a["Data.Newtype"],
      l = function l(a, b) {
    this["genericPred'"] = a;
    this["genericSucc'"] = b;
  },
      m = function m(a, b, c) {
    this["genericCardinality'"] = a;
    this["genericFromEnum'"] = b;
    this["genericToEnum'"] = c;
  },
      r = function r(a) {
    return a["genericToEnum'"];
  },
      n = function n(a) {
    return a["genericSucc'"];
  },
      y = function y(a) {
    return a["genericPred'"];
  },
      t = function t(a) {
    return a["genericFromEnum'"];
  };

  a = new l(function (a) {
    return c.Nothing.value;
  }, function (a) {
    return c.Nothing.value;
  });

  var p = function p(a) {
    return a["genericCardinality'"];
  },
      z = new m(1, function (a) {
    return 0;
  }, function (a) {
    return 0 === a ? new c.Just(b.NoArguments.value) : c.Nothing.value;
  });

  d.genericPred = function (a) {
    return function (d) {
      var e = h.map(c.functorMaybe)(b.to(a)),
          f = y(d),
          g = b.from(a);
      return function (a) {
        return e(f(g(a)));
      };
    };
  };

  d.genericSucc = function (a) {
    return function (d) {
      var e = h.map(c.functorMaybe)(b.to(a)),
          f = n(d),
          g = b.from(a);
      return function (a) {
        return e(f(g(a)));
      };
    };
  };

  d.genericCardinality = function (a) {
    return function (a) {
      return g.unwrap(k.newtypeCardinality)(p(a));
    };
  };

  d.genericToEnum = function (a) {
    return function (d) {
      var e = h.map(c.functorMaybe)(b.to(a)),
          f = r(d);
      return function (a) {
        return e(f(a));
      };
    };
  };

  d.genericFromEnum = function (a) {
    return function (c) {
      var d = t(c),
          e = b.from(a);
      return function (a) {
        return d(e(a));
      };
    };
  };

  d.genericEnumNoArguments = a;

  d.genericEnumConstructor = function (a) {
    return new l(function (d) {
      return h.map(c.functorMaybe)(b.Constructor)(y(a)(d));
    }, function (d) {
      return h.map(c.functorMaybe)(b.Constructor)(n(a)(d));
    });
  };

  d.genericEnumSum = function (a) {
    return function (d) {
      return function (f) {
        return function (g) {
          return new l(function (g) {
            if (g instanceof b.Inl) return h.map(c.functorMaybe)(b.Inl.create)(y(a)(g.value0));

            if (g instanceof b.Inr) {
              g = y(f)(g.value0);
              if (g instanceof c.Nothing) return new c.Just(new b.Inl(e["genericTop'"](d)));
              if (g instanceof c.Just) return new c.Just(new b.Inr(g.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [g.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [g.constructor.name]);
          }, function (d) {
            if (d instanceof b.Inl) {
              d = n(a)(d.value0);
              if (d instanceof c.Nothing) return new c.Just(new b.Inr(e["genericBottom'"](g)));
              if (d instanceof c.Just) return new c.Just(new b.Inl(d.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [d.constructor.name]);
            }

            if (d instanceof b.Inr) return h.map(c.functorMaybe)(b.Inr.create)(n(f)(d.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [d.constructor.name]);
          });
        };
      };
    };
  };

  d.genericBoundedEnumNoArguments = z;

  d.genericBoundedEnumConstructor = function (a) {
    return new m(g.unwrap(k.newtypeCardinality)(p(a)), function (b) {
      return t(a)(b);
    }, function (d) {
      return h.map(c.functorMaybe)(b.Constructor)(r(a)(d));
    });
  };

  d.genericBoundedEnumSum = function (a) {
    return function (d) {
      return new m(k.Cardinality(g.unwrap(k.newtypeCardinality)(p(a)) + g.unwrap(k.newtypeCardinality)(p(d)) | 0), function (c) {
        if (c instanceof b.Inl) return t(a)(c.value0);
        if (c instanceof b.Inr) return t(d)(c.value0) + g.unwrap(k.newtypeCardinality)(p(a)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [c.constructor.name]);
      }, function (e) {
        var g = p(a);
        if (0 <= e && e < g) e = h.map(c.functorMaybe)(b.Inl.create)(r(a)(e));else if (f.otherwise) e = h.map(c.functorMaybe)(b.Inr.create)(r(d)(e - g | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [g.constructor.name]);
        return e;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var d = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
      k = function k(a) {
    this["genericEq'"] = a;
  };

  a = new k(function (a) {
    return function (a) {
      return !0;
    };
  });

  d.genericEq = function (a) {
    return function (b) {
      return function (d) {
        return function (c) {
          return (0, b["genericEq'"])(f.from(a)(d))(f.from(a)(c));
        };
      };
    };
  };

  d.genericEqNoArguments = a;

  d.genericEqSum = function (a) {
    return function (b) {
      return new k(function (d) {
        return function (c) {
          return d instanceof f.Inl && c instanceof f.Inl ? (0, a["genericEq'"])(d.value0)(c.value0) : d instanceof f.Inr && c instanceof f.Inr ? (0, b["genericEq'"])(d.value0)(c.value0) : !1;
        };
      });
    };
  };

  d.genericEqConstructor = function (a) {
    return new k(function (b) {
      return function (d) {
        return (0, a["genericEq'"])(b)(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var d = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      h = function h(a) {
    this["genericCompare'"] = a;
  };

  a = new h(function (a) {
    return function (a) {
      return k.EQ.value;
    };
  });

  var b = function b(a) {
    return a["genericCompare'"];
  };

  d.genericCompare = function (a) {
    return function (c) {
      return function (d) {
        return function (e) {
          return b(c)(f.from(a)(d))(f.from(a)(e));
        };
      };
    };
  };

  d.genericOrdNoArguments = a;

  d.genericOrdSum = function (a) {
    return function (c) {
      return new h(function (d) {
        return function (e) {
          if (d instanceof f.Inl && e instanceof f.Inl) return b(a)(d.value0)(e.value0);
          if (d instanceof f.Inr && e instanceof f.Inr) return b(c)(d.value0)(e.value0);
          if (d instanceof f.Inl && e instanceof f.Inr) return k.LT.value;
          if (d instanceof f.Inr && e instanceof f.Inl) return k.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [d.constructor.name, e.constructor.name]);
        };
      });
    };
  };

  d.genericOrdConstructor = function (a) {
    return new h(function (c) {
      return function (d) {
        return b(a)(c)(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var d = a["Data.Generic.Rep.Show"],
      f = a["Data.Foldable"],
      k = a["Data.Generic.Rep"],
      h = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      c = a["Data.Symbol"],
      g = function g(a) {
    this.genericShowArgs = a;
  },
      l = function l(a) {
    this["genericShow'"] = a;
  };

  a = new g(function (a) {
    return [];
  });

  d.genericShow = function (a) {
    return function (b) {
      return function (c) {
        return (0, b["genericShow'"])(k.from(a)(c));
      };
    };
  };

  d.genericShowArgsNoArguments = a;

  d.genericShowSum = function (a) {
    return function (b) {
      return new l(function (c) {
        if (c instanceof k.Inl) return (0, a["genericShow'"])(c.value0);
        if (c instanceof k.Inr) return (0, b["genericShow'"])(c.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [c.constructor.name]);
      });
    };
  };

  d.genericShowConstructor = function (a) {
    return function (d) {
      return new l(function (e) {
        var g = c.reflectSymbol(d)(c.SProxy.value);
        e = (0, a.genericShowArgs)(e);
        return 0 === e.length ? g : "(" + (f.intercalate(f.foldableArray)(h.monoidString)(" ")(b.append(b.semigroupArray)([g])(e)) + ")");
      });
    };
  };

  d.genericShowArgsArgument = function (a) {
    return new g(function (b) {
      return [e.show(a)(b)];
    });
  };
})(PS);

(function (a) {
  a["Data.Lens.Internal.Wander"] = a["Data.Lens.Internal.Wander"] || {};

  a["Data.Lens.Internal.Wander"].Wander = function (a, f, k) {
    this.Choice1 = a;
    this.Strong0 = f;
    this.wander = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  var d = a["Data.Profunctor"],
      f = a["Control.Category"];

  a = function a(_a12) {
    this.dimap = _a12;
  };

  var k = new a(function (a) {
    return function (b) {
      return function (d) {
        return function (c) {
          return b(d(a(c)));
        };
      };
    };
  });

  d.dimap = function (a) {
    return a.dimap;
  };

  d.Profunctor = a;

  d.rmap = function (a) {
    return function (b) {
      return (0, a.dimap)(f.identity(f.categoryFn))(b);
    };
  };

  d.profunctorFn = k;
})(PS);

(function (a) {
  a["Data.Profunctor.Choice"] = a["Data.Profunctor.Choice"] || {};
  a = a["Data.Profunctor.Choice"];

  a.right = function (a) {
    return a.right;
  };

  a.Choice = function (a, f, k) {
    this.Profunctor0 = a;
    this.left = f;
    this.right = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};

  var d = a["Data.Profunctor.Strong"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      h = a["Data.Profunctor"],
      b = a["Data.Tuple"],
      e = function e(a, b, c) {
    this.Profunctor0 = a;
    this.first = b;
    this.second = c;
  };

  a = new e(function () {
    return h.profunctorFn;
  }, function (a) {
    return function (c) {
      return new b.Tuple(a(c.value0), c.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var c = function c(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return k.composeFlipped(a.Semigroupoid0())((0, b.first)(c))((0, b.second)(d));
        };
      };
    };
  };

  d.first = function (a) {
    return a.first;
  };

  d.second = function (a) {
    return a.second;
  };

  d.Strong = e;

  d.fanout = function (a) {
    return function (d) {
      return function (e) {
        return function (g) {
          var l = h.dimap(d.Profunctor0())(f.identity(f.categoryFn))(function (a) {
            return new b.Tuple(a, a);
          })(f.identity(a));
          return k.composeFlipped(a.Semigroupoid0())(l)(c(a)(d)(e)(g));
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
      h = a["Data.Functor"],
      b = a["Data.Lens.Internal.Wander"],
      e = a["Data.Monoid"],
      c = a["Data.Newtype"],
      g = a["Data.Profunctor.Choice"],
      l = a["Data.Profunctor.Strong"],
      m = a["Data.Tuple"],
      r = function r(a) {
    return a;
  },
      n = new a["Data.Profunctor"].Profunctor(function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return b(a(c));
        };
      };
    };
  }),
      y = new l.Strong(function () {
    return n;
  }, function (a) {
    return function (b) {
      return a(m.fst(b));
    };
  }, function (a) {
    return function (b) {
      return a(m.snd(b));
    };
  });

  a = new c.Newtype(function (a) {
    return a;
  }, r);

  var t = function t(a) {
    return new g.Choice(function () {
      return n;
    }, function (b) {
      return k.either(b)(e.mempty(e.monoidFn(a)));
    }, function (b) {
      return k.either(e.mempty(e.monoidFn(a)))(b);
    });
  };

  d.Forget = r;
  d.newtypeForget = a;
  d.strongForget = y;

  d.wanderForget = function (a) {
    return new b.Wander(function () {
      return t(a);
    }, function () {
      return y;
    }, function (b) {
      return function (d) {
        return c.alaF(h.functorFn)(h.functorFn)(f.newtypeConst)(f.newtypeConst)(f.Const)(b(f.applicativeConst(a)))(d);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};

  var d = a["Data.Maybe.First"],
      f = a["Data.Maybe"],
      k = a["Data.Monoid"],
      h = a["Data.Newtype"],
      b = function b(a) {
    return a;
  },
      e = new a["Data.Semigroup"].Semigroup(function (a) {
    return function (b) {
      return a instanceof f.Just ? a : b;
    };
  });

  a = new h.Newtype(function (a) {
    return a;
  }, b);
  k = new k.Monoid(function () {
    return e;
  }, f.Nothing.value);
  d.First = b;
  d.newtypeFirst = a;
  d.monoidFirst = k;
})(PS);

(function (a) {
  a["Data.Lens.Fold"] = a["Data.Lens.Fold"] || {};
  var d = a["Data.Lens.Fold"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Maybe"],
      h = a["Data.Maybe.First"],
      b = a["Data.Newtype"],
      e = b.under(f.newtypeForget)(f.newtypeForget)(f.Forget);

  d.preview = function (a) {
    var c = b.unwrap(h.newtypeFirst),
        d = e(a)(function (a) {
      return h.First(k.Just.create(a));
    });
    return function (a) {
      return c(d(a));
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Getter"] = a["Data.Lens.Getter"] || {};
  var d = a["Control.Category"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Newtype"];

  a["Data.Lens.Getter"].view = function (a) {
    return k.unwrap(f.newtypeForget)(a(d.identity(d.categoryFn)));
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso"] = a["Data.Lens.Iso"] || {};
  var d = a["Data.Profunctor"];

  a["Data.Lens.Iso"].iso = function (a) {
    return function (f) {
      return function (h) {
        return function (b) {
          return d.dimap(h)(a)(f)(b);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso.Newtype"] = a["Data.Lens.Iso.Newtype"] || {};
  var d = a["Data.Lens.Iso"],
      f = a["Data.Newtype"];

  a["Data.Lens.Iso.Newtype"]._Newtype = function (a) {
    return function (h) {
      return function (b) {
        return d.iso(f.unwrap(a))(f.wrap(h))(b);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Lens"] = a["Data.Lens.Lens"] || {};

  var d = a["Data.Profunctor"],
      f = a["Data.Profunctor.Strong"],
      k = a["Data.Tuple"],
      h = function h(a) {
    return function (b) {
      return function (c) {
        return d.dimap(b.Profunctor0())(a)(function (a) {
          return a.value1(a.value0);
        })(f.first(b)(c));
      };
    };
  };

  a["Data.Lens.Lens"].lens = function (a) {
    return function (b) {
      return function (c) {
        return h(function (c) {
          return new k.Tuple(a(c), function (a) {
            return b(c)(a);
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
      h = a["Data.Profunctor"],
      b = a["Data.Profunctor.Choice"],
      e = function e(a) {
    return function (c) {
      return function (e) {
        return function (g) {
          return h.dimap(e.Profunctor0())(c)(f.either(d.identity(d.categoryFn))(d.identity(d.categoryFn)))(b.right(e)(h.rmap(e.Profunctor0())(a)(g)));
        };
      };
    };
  };

  a["Data.Lens.Prism"]["prism'"] = function (a) {
    return function (b) {
      return function (c) {
        return e(a)(function (a) {
          return k.maybe(new f.Left(a))(f.Right.create)(b(a));
        })(c);
      };
    };
  };
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var d = a.Record,
      f = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  d.get = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return k.unsafeGet(f.reflectSymbol(a)(b))(c);
        };
      };
    };
  };

  d.set = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return function (d) {
              return k.unsafeSet(f.reflectSymbol(a)(b))(c)(d);
            };
          };
        };
      };
    };
  };

  d.insert = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return function (d) {
              return k.unsafeSet(f.reflectSymbol(a)(b))(c)(d);
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

  a["Data.Lens.Record"].prop = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return f.lens(k.get(a)()(b))(d.flip(k.set(a)()()(b)))(c);
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
  a = new k.Show(function (a) {
    return "(NonEmptyString.unsafeFromString " + (k.show(k.showString)(a) + ")");
  });

  d.fromString = function (a) {
    return "" === a ? f.Nothing.value : new f.Just(a);
  };

  d.toString = function (a) {
    return a;
  };

  d.showNonEmptyString = a;
})(PS);

(function (a) {
  a.endsWith = function (a) {
    return function (d) {
      return d.endsWith(a);
    };
  };

  a.fromCharArray = function (a) {
    return a.join("");
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

  a["Data.Variant"].inj = function (a) {
    return function (a) {
      return function (f) {
        return function (b) {
          return {
            type: d.reflectSymbol(a)(f),
            value: b
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var d = a["Effect.Class"],
      f = a["Effect.Console"];

  a["Effect.Class.Console"].logShow = function (a) {
    return function (h) {
      var b = d.liftEffect(a),
          e = f.logShow(h);
      return function (a) {
        return b(e(a));
      };
    };
  };
})(PS);

(function (a) {
  function d(a) {
    return function (d) {
      var f = [],
          b;

      for (b in d) {
        hasOwnProperty.call(d, b) && f.push(a(b)(d[b]));
      }

      return f;
    };
  }

  a._copyST = function (a) {
    return function () {
      var d = {},
          f;

      for (f in a) {
        hasOwnProperty.call(a, f) && (d[f] = a[f]);
      }

      return d;
    };
  };

  a.empty = {};

  a.runST = function (a) {
    return a();
  };

  a._lookup = function (a, d, h, b) {
    return h in b ? d(b[h]) : a;
  };

  a._lookupST = function (a, d, h, b) {
    return function () {
      return h in b ? d(b[h]) : a;
    };
  };

  a.keys = Object.keys || d(function (a) {
    return function () {
      return a;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a["new"] = function () {
    return {};
  };

  a.poke = function (a) {
    return function (d) {
      return function (f) {
        return function () {
          f[a] = d;
          return f;
        };
      };
    };
  };

  a["delete"] = function (a) {
    return function (d) {
      return function () {
        delete d[a];
        return d;
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
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Foreign.Object.ST"],
      c = f._copyST,
      g = function g(a) {
    return function (b) {
      return f.runST(function () {
        var d = c(b)();
        a(d)();
        return d;
      });
    };
  },
      l = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      m = function m(a) {
    return function (b) {
      return g(e.poke(a)(b));
    };
  };

  d.lookup = l;

  d.fromFoldableWith = function (a) {
    return function (b) {
      return function (c) {
        return f.runST(function () {
          var d = e["new"]();
          h.for_(k.applicativeST)(a)(c)(function (a) {
            return function () {
              var c = f._lookupST(a.value1, b(a.value1), a.value0, d)();

              return e.poke(a.value0)(c)(d)();
            };
          })();
          return d;
        });
      };
    };
  };

  d.alter = function (a) {
    return function (c) {
      return function (d) {
        var f = a(l(c)(d));
        if (f instanceof b.Nothing) return g(e["delete"](c))(d);
        if (f instanceof b.Just) return m(c)(f.value0)(d);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [f.constructor.name]);
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
      h = a["Data.Maybe"];

  a = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  var b = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      e = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  d.NotValidated = a;
  d.Error = b;

  d.fromEither = function (a) {
    if (a instanceof f.Left) return new b(a.value0);
    if (a instanceof f.Right) return new e(a.value0);
    throw Error("Failed pattern match at Formless.Data.FormFieldResult (line 44, column 14 - line 46, column 23): " + [a.constructor.name]);
  };

  d.toMaybe = function (a) {
    return a instanceof e ? new h.Just(a.value0) : h.Nothing.value;
  };

  d._Error = function (a) {
    return k["prism'"](b.create)(function (a) {
      return a instanceof b ? new h.Just(a.value0) : h.Nothing.value;
    })(a);
  };
})(PS);

(function (a) {
  a["Formless.Types.Form"] = a["Formless.Types.Form"] || {};
  var d = a["Formless.Types.Form"],
      f = a["Data.Newtype"];

  a = function a(_a13) {
    return _a13;
  };

  var k = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      h = function h(a) {
    return a;
  },
      b = new f.Newtype(function (a) {
    return a;
  }, a),
      e = new f.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      c = new f.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  f = new f.Newtype(function (a) {
    return a;
  }, h);
  d.FormProxy = k;
  d.OutputField = a;
  d.FormField = h;
  d.newtypeInputField = c;

  d.eqInputField = function (a) {
    return a;
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
      h = a["Data.Function"],
      b = a["Data.Newtype"],
      e = new b.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  });

  d.runValidation = function (a) {
    return b.unwrap(e);
  };

  d.hoistFn_ = function (a) {
    return function (b) {
      return h["const"](function () {
        var c = f.pure(a.Applicative0()),
            d = f.pure(k.applicativeEither);
        return function (a) {
          return c(d(b(a)));
        };
      }());
    };
  };

  d.hoistFnE = function (a) {
    return function (b) {
      return function (c) {
        var d = f.pure(a.Applicative0()),
            e = b(c);
        return function (a) {
          return d(e(a));
        };
      };
    };
  };

  d.hoistFnE_ = function (a) {
    return function (b) {
      return h["const"](function () {
        var c = f.pure(a.Applicative0());
        return function (a) {
          return c(b(a));
        };
      }());
    };
  };

  d.newtypeValidation = e;
})(PS);

(function (a) {
  a.copyRecord = function (a) {
    var d = {},
        k;

    for (k in a) {
      ({}).hasOwnProperty.call(a, k) && (d[k] = a[k]);
    }

    return d;
  };

  a.unsafeInsert = function (a) {
    return function (d) {
      return function (f) {
        f[a] = d;
        return f;
      };
    };
  };

  a.unsafeModify = function (a) {
    return function (d) {
      return function (f) {
        f[a] = d(f[a]);
        return f;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var d = a["Record.Builder"],
      f = a["Record.Builder"],
      k = a["Data.Symbol"],
      h = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  d.build = function (a) {
    return function (b) {
      return a(f.copyRecord(b));
    };
  };

  d.insert = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return function (d) {
              return f.unsafeInsert(k.reflectSymbol(a)(b))(c)(d);
            };
          };
        };
      };
    };
  };

  d.modify = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return function (d) {
              return f.unsafeModify(k.reflectSymbol(a)(b))(c)(d);
            };
          };
        };
      };
    };
  };

  d.semigroupoidBuilder = h;
  d.categoryBuilder = a;
})(PS);

(function (a) {
  a["Formless.Internal.Transform"] = a["Formless.Internal.Transform"] || {};

  var d = a["Formless.Internal.Transform"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Control.Semigroupoid"],
      c = a["Data.Functor"],
      g = a["Data.Maybe"],
      l = a["Data.Newtype"],
      m = a["Data.Symbol"],
      r = a["Data.Tuple"],
      n = a["Formless.Data.FormFieldResult"],
      y = a["Formless.Types.Form"],
      t = a["Formless.Validation"],
      p = a.Record,
      z = a["Record.Builder"],
      w = a["Record.Unsafe"],
      x = a["Type.Data.RowList"],
      u = function u(a) {
    this.validateAllBuilder = a;
  },
      H = function H(a) {
    this.setFormFieldsTouchedBuilder = a;
  },
      q = function q(a) {
    this.replaceFormFieldInputsBuilder = a;
  },
      E = function E(a) {
    this.modifyAllBuilder = a;
  },
      C = function C(a) {
    this.inputFieldsToFormFieldsBuilder = a;
  },
      I = function I(a) {
    this.formFieldsToInputFieldsBuilder = a;
  },
      B = function B(a) {
    this.formFieldsToMaybeOutputBuilder = a;
  },
      G = function G(a) {
    this.countErrorsImpl = a;
  },
      D = function D(a) {
    this.allTouchedImpl = a;
  };

  a = new H(function (a) {
    return function (a) {
      return b.identity(z.categoryBuilder);
    };
  });
  var F = new q(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(z.categoryBuilder);
      };
    };
  }),
      K = new G(function (a) {
    return function (a) {
      return 0;
    };
  }),
      v = new D(function (a) {
    return function (a) {
      return !0;
    };
  }),
      A = new E(function (a) {
    return function (a) {
      return function (a) {
        return b.identity(z.categoryBuilder);
      };
    };
  }),
      J = new I(function (a) {
    return function (a) {
      return b.identity(z.categoryBuilder);
    };
  }),
      R = new C(function (a) {
    return function (a) {
      return b.identity(z.categoryBuilder);
    };
  }),
      N = c.flap(c.functorFn)(z.build)({}),
      L = new B(function (a) {
    return function (a) {
      return new g.Just(b.identity(z.categoryBuilder));
    };
  });
  d.fromScratch = N;

  d.allTouched = function (a) {
    return function (a) {
      return function (b) {
        var c = (0, a.allTouchedImpl)(x.RLProxy.value),
            d = l.unwrap(b);
        return function (a) {
          return c(d(a));
        };
      };
    };
  };

  d.countErrors = function (a) {
    return function (a) {
      return function (b) {
        var c = (0, a.countErrorsImpl)(x.RLProxy.value),
            d = l.unwrap(b);
        return function (a) {
          return c(d(a));
        };
      };
    };
  };

  d.setFormFieldsTouched = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          c = (0, a.setFormFieldsTouchedBuilder)(x.RLProxy.value)(l.unwrap(b)(c));
          return l.wrap(b)(N(c));
        };
      };
    };
  };

  d.formFieldsToInputFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = (0, a.formFieldsToInputFieldsBuilder)(x.RLProxy.value)(l.unwrap(c)(d));
            return l.wrap(b)(N(d));
          };
        };
      };
    };
  };

  d.inputFieldsToFormFields = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = (0, a.inputFieldsToFormFieldsBuilder)(x.RLProxy.value)(l.unwrap(b)(d));
            return l.wrap(c)(N(d));
          };
        };
      };
    };
  };

  d.formFieldsToMaybeOutputFields = function (a) {
    return function (a) {
      return function (b) {
        return function (d) {
          return function (e) {
            e = (0, d.formFieldsToMaybeOutputBuilder)(x.RLProxy.value)(l.unwrap(a)(e));
            return c.map(g.functorMaybe)(l.wrap(b))(c.map(g.functorMaybe)(N)(e));
          };
        };
      };
    };
  };

  d.replaceFormFieldInputs = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              e = (0, a.replaceFormFieldInputsBuilder)(l.unwrap(b)(d))(x.RLProxy.value)(l.unwrap(c)(e));
              return l.wrap(c)(N(e));
            };
          };
        };
      };
    };
  };

  d.modifyAll = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              e = (0, a.modifyAllBuilder)(l.unwrap(b)(d))(x.RLProxy.value)(l.unwrap(c)(e));
              return l.wrap(c)(N(e));
            };
          };
        };
      };
    };
  };

  d.validateAll = function (a) {
    return function (a) {
      return function (b) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                g = (0, b.validateAllBuilder)(l.unwrap(d)(f))(x.RLProxy.value)(l.unwrap(e)(g));
                return c.map(a.Bind1().Apply0().Functor0())(l.wrap(e))(c.map(a.Bind1().Apply0().Functor0())(N)(g));
              };
            };
          };
        };
      };
    };
  };

  d.unsafeModifyInputVariant = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            var f = function () {
              var b = l.unwrap(a)(d);
              return new r.Tuple(b.type, b.value);
            }(),
                g = function () {
              var a = w.unsafeGet(r.fst(f))(l.unwrap(b)(e));
              return y.FormField({
                input: l.unwrap(y.newtypeInputFunction)(r.snd(f))(a.input),
                touched: a.touched,
                result: c(a.result)
              });
            }();

            return l.wrap(b)(w.unsafeSet(r.fst(f))(g)(l.unwrap(b)(e)));
          };
        };
      };
    };
  };

  d.unsafeRunValidationVariant = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (g) {
              return function (k) {
                var m = l.unwrap(b)(e).type;
                return function () {
                  var b = w.unsafeGet(m)(l.unwrap(c)(k));
                  return h.bind(a.Bind1())(t.runValidation(a)(w.unsafeGet(m)(l.unwrap(d)(g)))(k)(b.input))(function (d) {
                    d = w.unsafeSet(m)(y.FormField({
                      input: b.input,
                      touched: b.touched,
                      result: n.fromEither(d)
                    }))(l.unwrap(c)(k));
                    return f.pure(a.Applicative0())(l.wrap(c)(d));
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

  d.setFormFieldsTouchedCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new H(function (c) {
            return function (c) {
              var d = (0, b.setFormFieldsTouchedBuilder)(x.RLProxy.value)(c);
              c = l.over(y.newtypeFormField)(y.newtypeFormField)(y.FormField)(function (a) {
                return {
                  touched: !0,
                  input: a.input,
                  result: a.result
                };
              })(p.get(a)()(m.SProxy.value)(c));
              c = z.insert()()(a)(m.SProxy.value)(c);
              return e.compose(z.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  d.inputFieldsToInputNil = J;

  d.inputFieldsToInputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new I(function (c) {
            return function (c) {
              var d = (0, b.formFieldsToInputFieldsBuilder)(x.RLProxy.value)(c);
              c = p.get(a)()(m.SProxy.value)(c).input;
              c = z.insert()()(a)(m.SProxy.value)(c);
              return e.compose(z.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  d.inputFieldsToFormFieldsNil = R;

  d.inputFieldsToFormFieldsCons = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return new C(function (c) {
            return function (c) {
              var d = (0, b.inputFieldsToFormFieldsBuilder)(x.RLProxy.value)(c);
              c = {
                input: p.get(a)()(m.SProxy.value)(c),
                touched: !1,
                result: n.NotValidated.value
              };
              c = z.insert()()(a)(m.SProxy.value)(c);
              return e.compose(z.semigroupoidBuilder)(c)(d);
            };
          });
        };
      };
    };
  };

  d.formFieldsToMaybeOutputNil = L;

  d.formFieldsToMaybeOutputCons = function (a) {
    return function (b) {
      return function (b) {
        return function (d) {
          return new B(function (d) {
            return function (d) {
              var f = (0, b.formFieldsToMaybeOutputBuilder)(x.RLProxy.value)(d);
              d = c.map(g.functorMaybe)(y.OutputField)(n.toMaybe(l.unwrap(y.newtypeFormField)(p.get(a)()(m.SProxy.value)(d)).result));
              return k.apply(g.applyMaybe)(c.map(g.functorMaybe)(function (b) {
                return function (c) {
                  return e.compose(z.semigroupoidBuilder)(z.insert()()(a)(m.SProxy.value)(b))(c);
                };
              })(d))(f);
            };
          });
        };
      };
    };
  };

  d.nilCountErrors = K;

  d.consCountErrors = function (a) {
    return function (b) {
      return function (b) {
        return new G(function (c) {
          return function (c) {
            var d = l.unwrap(y.newtypeFormField)(p.get(a)()(m.SProxy.value)(c)).result instanceof n.Error ? 1 : 0;
            return d + (0, b.countErrorsImpl)(x.RLProxy.value)(c) | 0;
          };
        });
      };
    };
  };

  d.nilAllTouched = v;

  d.consAllTouched = function (a) {
    return function (b) {
      return function (b) {
        return new D(function (c) {
          return function (c) {
            return l.unwrap(y.newtypeFormField)(p.get(a)()(m.SProxy.value)(c)).touched ? (0, b.allTouchedImpl)(x.RLProxy.value)(c) : !1;
          };
        });
      };
    };
  };

  d.applyToValidationNil = function (a) {
    return new u(function (c) {
      return function (c) {
        return function (c) {
          return f.pure(a.Applicative0())(b.identity(z.categoryBuilder));
        };
      };
    });
  };

  d.applyToValidationCons = function (a) {
    return function (b) {
      return function (d) {
        return function (d) {
          return function (g) {
            return function (g) {
              return function (g) {
                return new u(function (u) {
                  return function (q) {
                    return function (q) {
                      var r = (0, g.validateAllBuilder)(u)(x.RLProxy.value)(q),
                          v = function () {
                        var c = l.unwrap(t.newtypeValidation)(p.get(a)()(m.SProxy.value)(u)),
                            e = l.unwrap(y.newtypeFormField)(p.get(a)()(m.SProxy.value)(q));
                        return h.bind(b.Bind1())(c(l.wrap(d)(q))(e.input))(function (a) {
                          var c = f.pure(b.Applicative0()),
                              d = l.wrap(y.newtypeFormField),
                              g = {},
                              h;

                          for (h in e) {
                            ({}).hasOwnProperty.call(e, h) && (g[h] = e[h]);
                          }

                          g.result = n.fromEither(a);
                          return c(d(g));
                        });
                      }();

                      return k.apply(b.Bind1().Apply0())(c.map(b.Bind1().Apply0().Functor0())(function (b) {
                        return function (c) {
                          return e.compose(z.semigroupoidBuilder)(z.insert()()(a)(m.SProxy.value)(b))(c);
                        };
                      })(v))(r);
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

  d.modifyAllNil = A;

  d.modifyAllCons = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new E(function (f) {
                  return function (g) {
                    return function (g) {
                      var h = (0, d.modifyAllBuilder)(f)(x.RLProxy.value)(g),
                          k = l.unwrap(b)(p.get(a)()(m.SProxy.value)(f));
                      g = p.get(a)()(m.SProxy.value)(g);
                      g = z.insert()()(a)(m.SProxy.value)(l.over(c)(c)(y.FormField)(function (a) {
                        return {
                          input: k(a.input),
                          result: a.result,
                          touched: a.touched
                        };
                      })(g));
                      return e.compose(z.semigroupoidBuilder)(g)(h);
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

  d.replaceFormFieldInputsTouchedNil = F;

  d.replaceFormFieldInputsTouchedCons = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (d) {
            return function (d) {
              return function (d) {
                return new q(function (f) {
                  return function (g) {
                    return function (g) {
                      var h = (0, d.replaceFormFieldInputsBuilder)(f)(x.RLProxy.value)(g);
                      l.unwrap(c)(p.get(a)()(m.SProxy.value)(g));
                      g = p.get(a)()(m.SProxy.value)(f);
                      g = z.insert()()(a)(m.SProxy.value)(y.FormField({
                        input: l.unwrap(b)(g),
                        touched: !1,
                        result: n.NotValidated.value
                      }));
                      return e.compose(z.semigroupoidBuilder)(g)(h);
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
      h = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      b = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      e = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  var c = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      g = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      l = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      m = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      r = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      n = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      t = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      p = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      z = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      w = function w(a) {
    return a;
  };

  k = new k.Newtype(function (a) {
    return a;
  }, w);
  f = new f.Eq(function (a) {
    return function (c) {
      return a instanceof h && c instanceof h || a instanceof b && c instanceof b || a instanceof e && c instanceof e ? !0 : !1;
    };
  });
  d.Modify = a;
  d.Validate = c;
  d.ModifyValidate = g;
  d.Reset = l;
  d.SetAll = m;
  d.ModifyAll = r;
  d.ResetAll = n;
  d.ValidateAll = y;
  d.Submit = t;
  d.LoadForm = p;
  d.AndThen = z;
  d.InternalState = w;
  d.Invalid = h;
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
      h = a["Data.Either"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      c = a["Data.Newtype"],
      g = a["Formless.Internal.Transform"],
      l = a["Formless.Types.Query"],
      m = function m(a) {
    return function (a) {
      return function (a) {
        return function (n) {
          return function (p) {
            return function (r) {
              return function (t) {
                return function (w) {
                  return function (u) {
                    return function (x) {
                      return function (q) {
                        return function (z) {
                          return function (y) {
                            return function (I) {
                              return function (B) {
                                return function (C) {
                                  return function (G) {
                                    return function (H) {
                                      return function (F) {
                                        return function (v) {
                                          return function (A) {
                                            return function (D) {
                                              return function (E) {
                                                var J = function J(e) {
                                                  var f = g.countErrors()(r)(B)(e.form),
                                                      k = !b.eq(b.eqRec()(a))(c.unwrap(y)(g.formFieldsToInputFields()(p)(y)(B)(e.form)))(c.unwrap(y)(c.unwrap(l.newtypeInternalState)(e.internal).initialInputs));
                                                  return d.pure(A.Applicative0())(h.Left.create(function () {
                                                    return c.unwrap(l.newtypeInternalState)(e.internal).allTouched ? {
                                                      validity: 0 !== e.errors ? l.Invalid.value : l.Valid.value,
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : g.allTouched()(t)(B)(e.form) ? {
                                                      validity: 0 !== e.errors ? l.Invalid.value : l.Valid.value,
                                                      internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: a.initialInputs,
                                                          validators: a.validators
                                                        };
                                                      })(e.internal),
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    } : {
                                                      validity: l.Incomplete.value,
                                                      errors: f,
                                                      dirty: k,
                                                      form: e.form,
                                                      internal: e.internal,
                                                      submitAttempts: e.submitAttempts,
                                                      submitting: e.submitting
                                                    };
                                                  }()));
                                                },
                                                    L = function L(k) {
                                                  var D = {
                                                    submitAttempts: k.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: k.internal,
                                                    form: k.form,
                                                    dirty: k.dirty,
                                                    errors: k.errors,
                                                    validity: k.validity
                                                  },
                                                      E = c.unwrap(l.newtypeInternalState)(D.internal);

                                                  k = function () {
                                                    return E.allTouched ? D : {
                                                      form: g.setFormFieldsTouched()(w)(B)(D.form),
                                                      internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: a.initialInputs,
                                                          validators: a.validators
                                                        };
                                                      })(D.internal),
                                                      submitAttempts: D.submitAttempts,
                                                      submitting: D.submitting,
                                                      dirty: D.dirty,
                                                      errors: D.errors,
                                                      validity: D.validity
                                                    };
                                                  }();

                                                  return f.bind(A.Bind1())(m()()(a)(n)(p)(r)(t)(w)(u)(x)(q)(z)(y)(I)(B)(C)(G)(H)(F)(v)(A)(l.ValidateAll.value)(k))(function (a) {
                                                    if (a instanceof h.Right) return d.pure(A.Applicative0())(new h.Right(a.value0));

                                                    if (a instanceof h.Left) {
                                                      var c = {
                                                        submitting: !1,
                                                        dirty: a.value0.dirty,
                                                        errors: a.value0.errors,
                                                        form: a.value0.form,
                                                        internal: a.value0.internal,
                                                        submitAttempts: a.value0.submitAttempts,
                                                        validity: a.value0.validity
                                                      };
                                                      return d.pure(A.Applicative0())(function () {
                                                        if (b.eq(l.eqValidStatus)(c.validity)(l.Valid.value)) {
                                                          var d = g.formFieldsToMaybeOutputFields()(B)(C)(z)(a.value0.form);
                                                          if (d instanceof e.Nothing) return new h.Left(c);
                                                          if (d instanceof e.Just) return new h.Right(d.value0);
                                                          throw Error("Failed pattern match at Formless.Component (line 201, column 16 - line 203, column 36): " + [d.constructor.name]);
                                                        }

                                                        return new h.Left(c);
                                                      }());
                                                    }

                                                    throw Error("Failed pattern match at Formless.Component (line 192, column 5 - line 204, column 31): " + [a.constructor.name]);
                                                  });
                                                };

                                                if (D instanceof l.Modify) return J({
                                                  form: g.unsafeModifyInputVariant(F)(B)(k.identity(k.categoryFn))(D.value0)(E.form),
                                                  internal: E.internal,
                                                  errors: E.errors,
                                                  dirty: E.dirty,
                                                  validity: E.validity,
                                                  submitAttempts: E.submitAttempts,
                                                  submitting: E.submitting
                                                });
                                                if (D instanceof l.Validate) return f.bind(A.Bind1())(g.unsafeRunValidationVariant(A)(v)(B)(G)(D.value0)(c.unwrap(l.newtypeInternalState)(E.internal).validators)(E.form))(function (a) {
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

                                                if (D instanceof l.ModifyValidate) {
                                                  L = function L(a) {
                                                    var b = c.unwrap(l.newtypeInternalState)(a.internal).validators;
                                                    return f.bind(A.Bind1())(g.unsafeRunValidationVariant(A)(v)(B)(G)(D.value1)(b)(a.form))(function (b) {
                                                      return d.pure(A.Applicative0())({
                                                        form: b,
                                                        internal: a.internal,
                                                        dirty: a.dirty,
                                                        errors: a.errors,
                                                        submitAttempts: a.submitAttempts,
                                                        submitting: a.submitting,
                                                        validity: a.validity
                                                      });
                                                    });
                                                  };

                                                  var K = function K(a) {
                                                    return function (b) {
                                                      return {
                                                        validity: b.validity,
                                                        dirty: b.dirty,
                                                        submitting: b.submitting,
                                                        errors: b.errors,
                                                        submitAttempts: b.submitAttempts,
                                                        form: g.unsafeModifyInputVariant(F)(B)(a)(D.value1)(b.form),
                                                        internal: b.internal
                                                      };
                                                    };
                                                  };

                                                  if (D.value0 instanceof e.Nothing || D.value0 instanceof e.Just) return K = K(k.identity(k.categoryFn))(E), f.bind(A.Bind1())(L(K))(function (a) {
                                                    return J(a);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [D.value0.constructor.name]);
                                                }

                                                if (D instanceof l.Reset) return J({
                                                  form: g.unsafeModifyInputVariant(F)(B)(k.identity(k.categoryFn))(D.value0)(E.form),
                                                  internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
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
                                                if (D instanceof l.SetAll) return J({
                                                  form: g.replaceFormFieldInputs()(u)(y)(B)(D.value0)(E.form),
                                                  internal: E.internal,
                                                  errors: E.errors,
                                                  dirty: E.dirty,
                                                  validity: E.validity,
                                                  submitAttempts: E.submitAttempts,
                                                  submitting: E.submitting
                                                });
                                                if (D instanceof l.ModifyAll) return J({
                                                  form: g.modifyAll()(x)(I)(B)(D.value0)(E.form),
                                                  internal: E.internal,
                                                  errors: E.errors,
                                                  dirty: E.dirty,
                                                  validity: E.validity,
                                                  submitAttempts: E.submitAttempts,
                                                  submitting: E.submitting
                                                });
                                                if (D instanceof l.ValidateAll) return f.bind(A.Bind1())(g.validateAll()(A)(q)(G)(B)(c.unwrap(l.newtypeInternalState)(E.internal).validators)(E.form))(function (a) {
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
                                                if (D instanceof l.Submit) return L(E);
                                                if (D instanceof l.ResetAll) return d.pure(A.Applicative0())(h.Left.create({
                                                  validity: l.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: g.replaceFormFieldInputs()(u)(y)(B)(c.unwrap(l.newtypeInternalState)(E.internal).initialInputs)(E.form),
                                                  internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: a.initialInputs,
                                                      validators: a.validators
                                                    };
                                                  })(E.internal)
                                                }));
                                                if (D instanceof l.LoadForm) return d.pure(A.Applicative0())(h.Left.create({
                                                  validity: l.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: g.replaceFormFieldInputs()(u)(y)(B)(D.value0)(E.form),
                                                  internal: c.over(l.newtypeInternalState)(l.newtypeInternalState)(l.InternalState)(function (a) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: D.value0,
                                                      validators: a.validators
                                                    };
                                                  })(E.internal)
                                                }));
                                                if (D instanceof l.AndThen) return f.bind(A.Bind1())(m()()(a)(n)(p)(r)(t)(w)(u)(x)(q)(z)(y)(I)(B)(C)(G)(H)(F)(v)(A)(D.value0)(E))(function (b) {
                                                  if (b instanceof h.Left) return m()()(a)(n)(p)(r)(t)(w)(u)(x)(q)(z)(y)(I)(B)(C)(G)(H)(F)(v)(A)(D.value1)(b.value0);
                                                  if (b instanceof h.Right) return d.pure(A.Applicative0())(new h.Right(b.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [b.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [D.constructor.name]);
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
  var d = a["Formless.Query"],
      f = a["Data.Function"],
      k = a["Data.Maybe"],
      h = a["Data.Newtype"],
      b = a["Data.Variant"],
      e = a["Formless.Types.Form"],
      c = a["Formless.Types.Query"];
  d.submit = c.Submit.value;

  d.set = function (a) {
    return function (d) {
      return function (g) {
        return function (g) {
          return function (k) {
            return new c.Modify(h.wrap(d)(b.inj()(a)(g)(h.wrap(e.newtypeInputFunction)(f["const"](k)))));
          };
        };
      };
    };
  };

  d.setValidate = function (a) {
    return function (d) {
      return function (g) {
        return function (g) {
          return function (l) {
            return new c.ModifyValidate(k.Nothing.value, h.wrap(d)(b.inj()(a)(g)(h.wrap(e.newtypeInputFunction)(f["const"](l)))));
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
      h = a["Data.Lens.Internal.Forget"],
      b = a["Data.Lens.Iso.Newtype"],
      e = a["Data.Lens.Record"],
      c = a["Data.Maybe.First"],
      g = a["Data.Symbol"],
      l = a["Formless.Data.FormFieldResult"],
      m = a["Formless.Types.Form"],
      r = function r(a) {
    return function (c) {
      return function (d) {
        return function (d) {
          return function (f) {
            var g = b._Newtype(c)(c)(f.Profunctor0()),
                h = e.prop(a)()()(d)(f),
                k = b._Newtype(m.newtypeFormField)(m.newtypeFormField)(f.Profunctor0());

            return function (a) {
              return g(h(k(a)));
            };
          };
        };
      };
    };
  },
      n = function n(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var f = r(a)(b)()(c)(d),
                h = e.prop(new g.IsSymbol(function () {
              return "input";
            }))()()(g.SProxy.value)(d);
            return function (a) {
              return f(h(a));
            };
          };
        };
      };
    };
  },
      y = function y(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var f = r(a)(b)()(c)(d),
                h = e.prop(new g.IsSymbol(function () {
              return "result";
            }))()()(g.SProxy.value)(d);
            return function (a) {
              return f(h(a));
            };
          };
        };
      };
    };
  },
      t = function t(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return function (d) {
            var e = y(a)(b)()(c)(d.Strong0()),
                f = l._Error(d.Choice1());

            return function (a) {
              return e(f(a));
            };
          };
        };
      };
    };
  };

  d.getInput = function (a) {
    return function (b) {
      return function (c) {
        return function (c) {
          return k.view(n(a)(b)()(c)(h.strongForget));
        };
      };
    };
  };

  d.getError = function (a) {
    return function (b) {
      return function (d) {
        return function (d) {
          return f.preview(t(a)(b)()(d)(h.wanderForget(c.monoidFirst)));
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
      h = a["Data.Symbol"],
      b = a["Record.Builder"],
      e = a["Type.Data.RowList"],
      c = function c(a) {
    this.mappingWithIndex = a;
  },
      g = function g(a) {
    this.mapRecordWithIndexBuilder = a;
  },
      l = function l(a) {
    this.hmap = a;
  };

  a = new g(function (a) {
    return function (a) {
      return f.identity(b.categoryBuilder);
    };
  });

  d.hmap = function (a) {
    return a.hmap;
  };

  d.Mapping = function (a) {
    this.mapping = a;
  };

  d.constMapping = function (a) {
    return new c(function (b) {
      return function (c) {
        return (0, a.mapping)(b);
      };
    });
  };

  d.hmapRecord = function (a) {
    return function (a) {
      return new l(function () {
        var c = (0, a.mapRecordWithIndexBuilder)(e.RLProxy.value);
        return function (a) {
          return b.build(c(a));
        };
      }());
    };
  };

  d.mapRecordWithIndexCons = function (a) {
    return function (c) {
      return function (d) {
        return function (f) {
          return function (f) {
            return new g(function (f) {
              return function (f) {
                return k.compose(b.semigroupoidBuilder)(b.modify()()(a)(h.SProxy.value)((0, c.mappingWithIndex)(f)(h.SProxy.value)))((0, d.mapRecordWithIndexBuilder)(e.RLProxy.value)(f));
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
      h = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      b = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  d.unwrapOutputFields = function (a) {
    return function (c) {
      var d = k.hmap(c)(b.value),
          e = f.unwrap(a);
      return function (a) {
        return d(e(a));
      };
    };
  };

  d.wrapInputFields = function (a) {
    return function (b) {
      var c = f.wrap(a),
          d = k.hmap(b)(h.value);
      return function (a) {
        return c(d(a));
      };
    };
  };

  d.unwrapField = function (a) {
    return new k.Mapping(function (b) {
      return f.unwrap(a);
    });
  };

  d.wrapField = function (a) {
    return new k.Mapping(function (b) {
      return f.wrap(a);
    });
  };
})(PS);

(function (a) {
  a["Formless.Transform.Row"] = a["Formless.Transform.Row"] || {};

  var d = a["Formless.Transform.Row"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      h = a["Data.Symbol"],
      b = a["Formless.Internal.Transform"],
      e = a["Record.Builder"],
      c = a["Type.Data.RowList"],
      g = function g(a) {
    this.makeSProxiesBuilder = a;
  };

  a = new g(function (a) {
    return f.identity(e.categoryBuilder);
  });

  d.mkSProxies = function (a) {
    return function (a) {
      return function (a) {
        return function (d) {
          d = (0, a.makeSProxiesBuilder)(c.RLProxy.value);
          return b.fromScratch(d);
        };
      };
    };
  };

  d.makeSProxiesNil = a;

  d.makeSProxiesCons = function (a) {
    return function (b) {
      return function (b) {
        return new g(function (d) {
          d = (0, b.makeSProxiesBuilder)(c.RLProxy.value);
          var f = e.insert()()(a)(h.SProxy.value)(h.SProxy.value);
          return k.compose(e.semigroupoidBuilder)(f)(d);
        });
      };
    };
  };
})(PS);

(function (a) {
  a._validateURL = function (a) {
    return function (d) {
      if (!d || !/^https?:\/\//.test(d)) return "Unknown or missing protocol format in url: " + d;
      var f = document.createElement("a");
      f.href = d;

      if (a) {
        if (f.username) return "URL " + d + " contains a username: " + f.username;
        if (f.password) return "URL " + d + " contains a password: " + f.password;
      }

      return /\.[^0-9.]/.test(f.hostname) ? /(\s|^\.|\.$)/.test(f.hostname) ? "Hostname '" + f.href + "' contains whitespace in " + d : f.href.toLowerCase().replace(/\/+$/g, "") !== d.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + d + " doesn't match parsed href " + f.href : "SUCCESS" : "Invalid hostname '" + f.href + "' in " + d;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};
  var d = a["Text.URL.Validate"],
      f = a["Text.URL.Validate"],
      k = a["Data.Either"],
      h = a["Data.Maybe"],
      b = a["Data.Show"],
      e = a["Data.String.NonEmpty.Internal"];
  a = new b.Show(function (a) {
    return b.show(e.showNonEmptyString)(a);
  });

  var c = function c(a) {
    return function (b) {
      var c = "SUCCESS" === b ? !0 : !1;

      if (c) {
        b = e.fromString(a);
        if (b instanceof h.Just) return new k.Right(b.value0);
        if (b instanceof h.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [b.constructor.name]);
      }

      if (!c) return new k.Left(b);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [c.constructor.name]);
    };
  };

  d.parsePublicURL = function (a) {
    var b = f._validateURL(!0)(a);

    return c(a)(b);
  };

  d.urlToNEString = function (a) {
    return a;
  };

  d.urlToString = function (a) {
    return e.toString(a);
  };

  d.showURL = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var d = a["Metajelo.Types"],
      f = a["Data.Bounded"],
      k = a["Data.Enum"],
      h = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Generic.Rep.Enum"],
      g = a["Data.Generic.Rep.Eq"],
      l = a["Data.Generic.Rep.Ord"],
      m = a["Data.Generic.Rep.Show"],
      r = a["Data.Ord"],
      n = a["Data.Show"],
      y = a["Data.String.NonEmpty.Internal"],
      t = a["Data.Symbol"],
      p = a["Text.URL.Validate"],
      z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      w = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      x = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      u = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      H = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      E = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      C = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      I = function () {
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
    function a() {}

    a.value = new a();
    return a;
  }(),
      D = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      F = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      K = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      v = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      A = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      J = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      R = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      N = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      L = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      S = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      P = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      M = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      W = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Q = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      O = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      T = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      U = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Z = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      fa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      V = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Y = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      X = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ka = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ua = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      va = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      xa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      la = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ra = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      wa = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      Ka = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      ya = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      za = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Aa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ra = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      La = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ba = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ca = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Da = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ea = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Fa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ga = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ha = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ma = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Na = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Oa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Pa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Qa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Sa = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Ta = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      db = new n.Show(function (a) {
    if (a instanceof ya) return "commercial";
    if (a instanceof za) return "non-profit";
    if (a instanceof Aa) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [a.constructor.name]);
  }),
      eb = new n.Show(function (a) {
    return "dataCustodian";
  }),
      ma = new b.Generic(function (a) {
    if (a instanceof z) return new b.Inl(b.NoArguments.value);
    if (a instanceof w) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof x) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof u) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return w.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return x.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return u.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return B.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return K.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [a.constructor.name]);
  }),
      fb = new n.Show(m.genericShow(ma)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Audiovisual";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Dataset";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Event";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Image";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "InteractiveResource";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Model";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "PhysicalObject";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "ResourceCollection";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Service";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Software";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Sound";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Text";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Workflow";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      na = new b.Generic(function (a) {
    if (a instanceof v) return new b.Inl(b.NoArguments.value);
    if (a instanceof A) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof J) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof S) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (a instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (a instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (a instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (a instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (a instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (a instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (a instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (a instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (a instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (a instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (a instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return v.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return A.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return J.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return R.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return S.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return W.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Y.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [a.constructor.name]);
  }),
      gb = new n.Show(m.genericShow(na)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsCitedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Cites";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSupplementTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsContinuedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Continues";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsPartOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "HasPart";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsReferencedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "References";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Documents";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsCompiledBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Compiles";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "HasMetadata";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsMetadataFor";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Reviews";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsReviewedBy";
  })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      oa = new b.Generic(function (a) {
    if (a instanceof ba) return new b.Inl(b.NoArguments.value);
    if (a instanceof X) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof ka) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return ba.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return X.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return ka.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return ua.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return va.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return xa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ra.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [a.constructor.name]);
  }),
      hb = new n.Show(function (a) {
    return a instanceof ra ? "Terms of Use" : m.genericShow(oa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Access";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Collection";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Data";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Metadata";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Preservation";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Submission";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Quality";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(a);
  }),
      ib = new b.Generic(function (a) {
    if (a instanceof wa) return new b.Inl(a.value0);
    if (a instanceof Ka) return new b.Inr(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return new wa(a.value0);
    if (a instanceof b.Inr) return new Ka(a.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [a.constructor.name]);
  }),
      jb = new n.Show(m.genericShow(ib)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsArgument(y.showNonEmptyString))(new t.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(m.genericShowConstructor(m.genericShowArgsArgument(p.showURL))(new t.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      sa = new b.Generic(function (a) {
    if (a instanceof ya) return new b.Inl(b.NoArguments.value);
    if (a instanceof za) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof Aa) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return ya.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return za.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr) return Aa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [a.constructor.name]);
  }),
      ta = new b.Generic(function (a) {
    return b.NoArguments.value;
  }, function (a) {
    return Ra.value;
  }),
      pa = new b.Generic(function (a) {
    if (a instanceof La) return new b.Inl(b.NoArguments.value);
    if (a instanceof ca) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (a instanceof Ba) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (a instanceof Ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (a instanceof Da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (a instanceof Ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (a instanceof Fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (a instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (a instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (a instanceof Ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (a instanceof Na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (a instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (a instanceof Oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (a instanceof Pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (a instanceof Qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (a instanceof Ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (a instanceof Sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (a instanceof Ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof b.Inl) return La.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inl) return ca.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inl) return Ba.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inl) return Ca.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inl) return Da.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inl) return Ea.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Fa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ma.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Na.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ia.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Oa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Pa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Qa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ja.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Sa.value;
    if (a instanceof b.Inr && a.value0 instanceof b.Inr && a.value0.value0 instanceof b.Inr && a.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && a.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Ta.value;
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [a.constructor.name]);
  }),
      kb = new n.Show(function (a) {
    return a instanceof ca ? "arXiv" : a instanceof Ba ? "bibcode" : m.genericShow(pa)(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ARK";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ArXiv";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Bibcode";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "DOI";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "EAN13";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "EISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Handle";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "IGSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISBN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISTC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "LISSN";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "LSID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "PMID";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "PURL";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "UPC";
    })))(m.genericShowSum(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "URL";
    })))(m.genericShowConstructor(m.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(a);
  }),
      lb = new h.Eq(g.genericEq(ma)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments)))))))))))))))),
      Ua = new r.Ord(function () {
    return lb;
  }, function (a) {
    return function (b) {
      return l.genericCompare(ma)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))(a)(b);
    };
  }),
      mb = new h.Eq(g.genericEq(na)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments))))))))))))))))))))))))))),
      Va = new r.Ord(function () {
    return mb;
  }, function (a) {
    return function (b) {
      return l.genericCompare(na)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))))))))))))))))))))))))(a)(b);
    };
  }),
      Wa = new h.Eq(g.genericEq(oa)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments)))))))))),
      Xa = new r.Ord(function () {
    return Wa;
  }, function (a) {
    return function (b) {
      return l.genericCompare(oa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))(a)(b);
    };
  }),
      nb = new h.Eq(g.genericEq(sa)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments))))),
      Ya = new r.Ord(function () {
    return nb;
  }, function (a) {
    return function (b) {
      return l.genericCompare(sa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))(a)(b);
    };
  }),
      Za = new h.Eq(g.genericEq(ta)(g.genericEqConstructor(g.genericEqNoArguments))),
      $a = new r.Ord(function () {
    return Za;
  }, function (a) {
    return function (b) {
      return l.genericCompare(ta)(l.genericOrdConstructor(l.genericOrdNoArguments))(a)(b);
    };
  }),
      ob = new h.Eq(g.genericEq(pa)(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqSum(g.genericEqConstructor(g.genericEqNoArguments))(g.genericEqConstructor(g.genericEqNoArguments)))))))))))))))))))),
      ab = new r.Ord(function () {
    return ob;
  }, function (a) {
    return function (b) {
      return l.genericCompare(pa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))))))(a)(b);
    };
  }),
      pb = new k.Enum(function () {
    return Ua;
  }, c.genericPred(ma)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(ma)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      qb = new k.Enum(function () {
    return Va;
  }, c.genericPred(na)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(na)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      rb = new k.Enum(function () {
    return Xa;
  }, c.genericPred(oa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(oa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      sb = new k.Enum(function () {
    return Ya;
  }, c.genericPred(sa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(sa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      tb = new k.Enum(function () {
    return $a;
  }, c.genericPred(ta)(c.genericEnumConstructor(c.genericEnumNoArguments)), c.genericSucc(ta)(c.genericEnumConstructor(c.genericEnumNoArguments))),
      ub = new k.Enum(function () {
    return ab;
  }, c.genericPred(pa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(pa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      vb = new f.Bounded(function () {
    return Ua;
  }, e.genericBottom(ma)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ma)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      wb = new f.Bounded(function () {
    return Va;
  }, e.genericBottom(na)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(na)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      bb = new f.Bounded(function () {
    return Xa;
  }, e.genericBottom(oa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(oa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      xb = new k.SmallBounded(function () {
    return bb;
  }),
      yb = new f.Bounded(function () {
    return Ya;
  }, e.genericBottom(sa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(sa)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      cb = new f.Bounded(function () {
    return $a;
  }, e.genericBottom(ta)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(ta)(e.genericTopConstructor(e.genericTopNoArguments))),
      zb = new k.SmallBounded(function () {
    return cb;
  }),
      Ab = new f.Bounded(function () {
    return ab;
  }, e.genericBottom(pa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(pa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      Bb = new k.BoundedEnum(function () {
    return vb;
  }, function () {
    return pb;
  }, c.genericCardinality(ma)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericFromEnum(ma)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericToEnum(ma)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))),
      Cb = new k.BoundedEnum(function () {
    return wb;
  }, function () {
    return qb;
  }, c.genericCardinality(na)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericFromEnum(na)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericToEnum(na)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Db = new k.BoundedEnum(function () {
    return bb;
  }, function () {
    return rb;
  }, c.genericCardinality(oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericFromEnum(oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericToEnum(oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))),
      Eb = new k.BoundedEnum(function () {
    return yb;
  }, function () {
    return sb;
  }, c.genericCardinality(sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericFromEnum(sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericToEnum(sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))),
      Fb = new k.BoundedEnum(function () {
    return cb;
  }, function () {
    return tb;
  }, c.genericCardinality(ta)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericFromEnum(ta)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericToEnum(ta)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))),
      Gb = new k.BoundedEnum(function () {
    return Ab;
  }, function () {
    return ub;
  }, c.genericCardinality(pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericFromEnum(pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericToEnum(pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))));

  d.ARK = La;
  d.ArXiv = ca;
  d.Bibcode = Ba;
  d.DOI = Ca;
  d.EAN13 = Da;
  d.EISSN = Ea;
  d.Handle = Fa;
  d.IGSN = Ga;
  d.ISBN = Ha;
  d.ISSN = Ma;
  d.ISTC = Na;
  d.LISSN = Ia;
  d.LSID = Oa;
  d.PMID = Pa;
  d.PURL = Qa;
  d.UPC = Ja;
  d.URL = Sa;
  d.URN = Ta;
  d.Audiovisual = z;
  d.Dataset = w;
  d.Event = x;
  d.Image = u;
  d.InteractiveResource = H;
  d.Model = q;
  d.PhysicalObject = E;
  d.ResourceCollection = C;
  d.Service = I;
  d.Software = B;
  d.Sound = G;
  d.Text = D;
  d.Workflow = F;
  d.Other = K;
  d.IsCitedBy = v;
  d.Cites = A;
  d.IsSupplementTo = J;
  d.IsSupplementedBy = R;
  d.IsContinuedBy = N;
  d.Continues = L;
  d.IsNewVersionOf = S;
  d.IsPreviousVersionOf = P;
  d.IsPartOf = M;
  d.HasPart = W;
  d.IsReferencedBy = Q;
  d.References = O;
  d.IsDocumentedBy = T;
  d.Documents = U;
  d.IsCompiledBy = aa;
  d.Compiles = Z;
  d.IsVariantFormOf = ea;
  d.IsOriginalFormOf = fa;
  d.IsIdenticalTo = V;
  d.HasMetadata = ha;
  d.IsMetadataFor = da;
  d.Reviews = qa;
  d.IsReviewedBy = ia;
  d.IsDerivedFrom = ja;
  d.IsSourceOf = Y;
  d.Commercial = ya;
  d.NonProfit = za;
  d.Governmental = Aa;
  d.DataCustodian = Ra;
  d.Access = ba;
  d.Collection = X;
  d.Data = ka;
  d.Metadata = ua;
  d.Preservation = va;
  d.Submission = xa;
  d.Quality = la;
  d.TermsOfUse = ra;
  d.FreeTextPolicy = wa;
  d.RefPolicy = Ka;
  d.showIdentifierType = kb;
  d.boundedEnumIdentifierType = Gb;
  d.showResourceTypeGeneral = fb;
  d.boundedEnumResourceTypeGeneral = Bb;
  d.showRelationType = gb;
  d.boundedEnumRelationType = Cb;
  d.showInstitutionType = db;
  d.boundedEnumInstitutionType = Eb;
  d.eqInstitutionContactType = Za;
  d.showInstitutionContactType = eb;
  d.boundedEnumInstitutionContactType = Fb;
  d.smallBoundedInstitutionContactType = zb;
  d.showPolicyType = hb;
  d.eqPolicyType = Wa;
  d.boundedEnumPolicyType = Db;
  d.smallBoundedPolicyType = xb;
  d.showPolicy = jb;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var d = a["Text.Parsing.StringParser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      g = a["Control.Monad.Rec.Class"],
      l = a["Control.Plus"],
      m = a["Data.Bifunctor"],
      r = a["Data.Boolean"],
      n = a["Data.Either"],
      y = a["Data.Functor"];
  a = a["Data.Show"];

  var t = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }();

  a = new a.Show(function (a) {
    return a.value0;
  });

  var p = new y.Functor(function (a) {
    return function (b) {
      var c = y.map(n.functorEither)(function (b) {
        return {
          result: a(b.result),
          suffix: b.suffix
        };
      });
      return function (a) {
        return c(b(a));
      };
    };
  }),
      z = function z(a) {
    return function (b) {
      return new n.Left({
        pos: b.pos,
        error: new t(a)
      });
    };
  },
      w = new b.Apply(function () {
    return p;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(n.bindEither)(a(c))(function (a) {
          return e.bind(n.bindEither)(b(a.suffix))(function (b) {
            return h.pure(n.applicativeEither)({
              result: a.result(b.result),
              suffix: b.suffix
            });
          });
        });
      };
    };
  }),
      x = new e.Bind(function () {
    return w;
  }, function (a) {
    return function (b) {
      return function (c) {
        return e.bind(n.bindEither)(a(c))(function (a) {
          return b(a.result)(a.suffix);
        });
      };
    };
  }),
      u = new h.Applicative(function () {
    return w;
  }, function (a) {
    return function (b) {
      return new n.Right({
        result: a,
        suffix: b
      });
    };
  }),
      H = new c.Monad(function () {
    return u;
  }, function () {
    return x;
  });

  b = new g.MonadRec(function () {
    return H;
  }, function (a) {
    return function (b) {
      var c = function c(a) {
        if (a.result instanceof g.Loop) return new g.Loop({
          state: a.result.value0,
          str: a.suffix
        });
        if (a.result instanceof g.Done) return new g.Done({
          result: a.result.value0,
          suffix: a.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [a.constructor.name]);
      };

      return function (d) {
        return g.tailRecM(g.monadRecEither)(function (b) {
          return y.map(n.functorEither)(c)(a(b.state)(b.str));
        })({
          state: b,
          str: d
        });
      };
    };
  });
  var q = new f.Alt(function () {
    return p;
  }, function (a) {
    return function (b) {
      return function (c) {
        var d = a(c);

        if (d instanceof n.Left) {
          if (c.pos === d.value0.pos) return b(c);
          if (r.otherwise) return new n.Left({
            error: d.value0.error,
            pos: d.value0.pos
          });
        }

        return d;
      };
    };
  }),
      E = new l.Plus(function () {
    return q;
  }, z("No alternative"));
  f = new k.Alternative(function () {
    return u;
  }, function () {
    return E;
  });
  d.ParseError = t;

  d.runParser = function (a) {
    return function (b) {
      return m.bimap(n.bifunctorEither)(function (a) {
        return a.error;
      })(function (a) {
        return a.result;
      })(a({
        str: b,
        pos: 0
      }));
    };
  };

  d.fail = z;

  d["try"] = function (a) {
    return function (b) {
      return m.lmap(n.bifunctorEither)(function (a) {
        return {
          pos: b.pos,
          error: a.error
        };
      })(a(b));
    };
  };

  d.showParseError = a;
  d.functorParser = p;
  d.applyParser = w;
  d.applicativeParser = u;
  d.altParser = q;
  d.alternativeParser = f;
  d.bindParser = x;
  d.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var d = a["Text.Parsing.StringParser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Functor"],
      c = a["Data.NonEmpty"],
      g = a["Data.Unit"],
      l = a["Text.Parsing.StringParser"],
      m = a["Data.List"].manyRec(l.monadRecParser)(l.alternativeParser),
      r = function r(a) {
    return function (b) {
      return new c.NonEmpty(a, b);
    };
  };

  d.many = m;

  d.many1 = function (a) {
    return h.apply(l.applyParser)(e.map(l.functorParser)(r)(a))(m(a));
  };

  d.withError = function (a) {
    return function (b) {
      return f.alt(l.altParser)(a)(l.fail(b));
    };
  };

  d.optional = function (a) {
    return f.alt(l.altParser)(b.bind(l.bindParser)(a)(function (a) {
      return k.pure(l.applicativeParser)(g.unit);
    }))(k.pure(l.applicativeParser)(g.unit));
  };

  d.sepBy1 = function (a) {
    return function (c) {
      return b.bind(l.bindParser)(a)(function (d) {
        return b.bind(l.bindParser)(m(h.applySecond(l.applyParser)(c)(a)))(function (a) {
          return k.pure(l.applicativeParser)(r(d)(a));
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
      h = a["Data.Char"],
      b = a["Data.Either"],
      e = a["Data.Enum"],
      c = a["Data.Maybe"],
      g = a["Data.Show"],
      l = a["Data.String.CodePoints"],
      m = a["Data.Unit"],
      r = a["Text.Parsing.StringParser"],
      n = a["Text.Parsing.StringParser.Combinators"],
      y = function () {
    var a = function () {
      var a = e.fromEnum(l.boundedEnumCodePoint);
      return function (b) {
        return h.fromCharCode(a(b));
      };
    }();

    return function (d) {
      var e = l.codePointAt(d.pos)(d.str);

      if (e instanceof c.Just) {
        var f = a(e.value0);
        if (f instanceof c.Just) return new b.Right({
          result: f.value0,
          suffix: {
            str: d.str,
            pos: d.pos + 1 | 0
          }
        });
        if (f instanceof c.Nothing) return new b.Left({
          pos: d.pos,
          error: r.ParseError.create("CodePoint " + (g.show(l.showCodePoint)(e.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [f.constructor.name]);
      }

      if (e instanceof c.Nothing) return new b.Left({
        pos: d.pos,
        error: new r.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [e.constructor.name]);
    };
  }(),
      t = function t(a) {
    return r["try"](k.bind(r.bindParser)(y)(function (b) {
      return a(b) ? f.pure(r.applicativeParser)(b) : r.fail("Character " + (g.show(g.showChar)(b) + " did not satisfy predicate"));
    }));
  };

  d.eof = function (a) {
    return a.pos < l.length(a.str) ? new b.Left({
      pos: a.pos,
      error: new r.ParseError("Expected EOF")
    }) : new b.Right({
      result: m.unit,
      suffix: a
    });
  };

  d.satisfy = t;

  d["char"] = function (a) {
    return n.withError(t(function (b) {
      return b === a;
    }))("Could not match character " + g.show(g.showChar)(a));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var d = a["Text.Email.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Char"],
      c = a["Data.Foldable"],
      g = a["Data.Functor"],
      l = a["Data.List.Types"],
      m = a["Data.Maybe"],
      r = a["Data.Monoid"],
      n = a["Data.String.CodeUnits"],
      y = a["Data.String.Pattern"],
      t = a["Data.Unit"],
      p = a["Text.Parsing.StringParser"],
      z = a["Text.Parsing.StringParser.CodePoints"],
      w = a["Text.Parsing.StringParser.Combinators"],
      x = function (a) {
    var b = m.fromJust();
    return function (a) {
      return b(e.fromCharCode(a));
    };
  }(),
      u = function u(a) {
    return g.map(p.functorParser)(function () {
      var a = c.fold(l.foldableNonEmptyList)(r.monoidString),
          b = g.map(l.functorNonEmptyList)(n.singleton);
      return function (c) {
        return a(b(c));
      };
    }())(w.many1(z.satisfy(a)));
  },
      H = function H(a) {
    return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(a))(function () {
      return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(q(a)))(function () {
        return k.pure(p.applicativeParser)(t.unit);
      });
    });
  },
      q = function q(a) {
    return f.alt(p.altParser)(H(a))(k.pure(p.applicativeParser)(t.unit));
  },
      E = function E(a) {
    return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z.satisfy(a)))(function () {
      return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(q(z.satisfy(a))))(function () {
        return k.pure(p.applicativeParser)(t.unit);
      });
    });
  },
      C = z["char"](x(0)),
      I = z["char"]("\n");

  a = function a(_a14) {
    return " " === _a14 || "\t" === _a14;
  };

  var B = z.satisfy(a),
      G = E(a),
      D = function D(a) {
    return function (b) {
      return function (c) {
        return c >= a && c <= b;
      };
    };
  };

  a = D(x(33))(x(126));

  var F = z.satisfy(a),
      K = function K(a) {
    return function (b) {
      return n.contains(y.Pattern(n.singleton(b)))(a);
    };
  },
      v = function v(a) {
    return D(x(1))(x(8))(a) || D(x(14))(x(31))(a) || K("\x0B\f\x7F")(a);
  },
      A = function A(a) {
    return D(x(33))(x(39))(a) || D(x(42))(x(91))(a) || D(x(93))(x(126))(a) || v(a);
  },
      J = function J(a) {
    return D(x(33))(x(90))(a) || D(x(94))(x(126))(a) || v(a);
  },
      R = z.satisfy(v),
      N = z["char"]("\r"),
      L = g["void"](p.functorParser)(h.applySecond(p.applyParser)(N)(I)),
      S = function () {
    var a = H(h.applySecond(p.applyParser)(L)(G)),
        b = h.applySecond(p.applyParser)(G)(w.optional(h.applySecond(p.applyParser)(L)(G)));
    return f.alt(p.altParser)(b)(a);
  }(),
      P = function () {
    var a = b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z["char"]("\\")))(function () {
      return f.alt(p.altParser)(f.alt(p.altParser)(f.alt(p.altParser)(f.alt(p.altParser)(f.alt(p.altParser)(F)(B))(I))(N))(R))(C);
    });
    return b.bind(p.bindParser)(a)(function (a) {
      return k.pure(p.applicativeParser)("\\" + n.singleton(a));
    });
  }(),
      M = f.alt(p.altParser)(u(function (a) {
    return K(n.singleton(x(33)))(a) || D(x(35))(x(91))(a) || D(x(93))(x(126))(a) || v(a);
  }))(P),
      W = function () {
    var a = b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z["char"]('"')))(function () {
      return b.bind(p.bindParser)(w.many(h.applySecond(p.applyParser)(w.optional(S))(M)))(function (a) {
        return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(w.optional(S)))(function () {
          return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z["char"]('"')))(function () {
            return k.pure(p.applicativeParser)(a);
          });
        });
      });
    });
    return g.map(p.functorParser)(function (a) {
      return '"' + (c.fold(l.foldableList)(r.monoidString)(a) + '"');
    })(a);
  }(),
      Q = b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z["char"]("(")))(function () {
    return b.discard(b.discardUnit)(p.bindParser)(q(f.alt(p.altParser)(f.alt(p.altParser)(f.alt(p.altParser)(E(A))(g["void"](p.functorParser)(P)))(Q))(S)))(function () {
      return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z["char"](")")))(function () {
        return k.pure(p.applicativeParser)(t.unit);
      });
    });
  }),
      O = q(f.alt(p.altParser)(Q)(S));

  a = b.discard(b.discardUnit)(p.bindParser)(w.optional(O))(function () {
    return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z["char"]("[")))(function () {
      return b.bind(p.bindParser)(w.many(h.applySecond(p.applyParser)(w.optional(S))(u(J))))(function (a) {
        return b.discard(b.discardUnit)(p.bindParser)(w.optional(S))(function () {
          return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(z["char"]("]")))(function () {
            return b.discard(b.discardUnit)(p.bindParser)(w.optional(O))(function () {
              return k.pure(p.applicativeParser)("[" + (c.fold(l.foldableList)(r.monoidString)(a) + "]"));
            });
          });
        });
      });
    });
  });

  var T = function () {
    return u(function (a) {
      return "0" <= a && "9" >= a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a || K("!#$%&'*+/=?^_`{|}~-")(a);
    });
  }(),
      U = function () {
    var a = b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(w.optional(O)))(function () {
      return b.bind(p.bindParser)(f.alt(p.altParser)(T)(W))(function (a) {
        return b.discard(b.discardUnit)(p.bindParser)(g["void"](p.functorParser)(w.optional(O)))(function () {
          return k.pure(p.applicativeParser)(a);
        });
      });
    });
    a = w.sepBy1(a)(z["char"]("."));
    return g.map(p.functorParser)(c.intercalate(l.foldableNonEmptyList)(r.monoidString)("."))(a);
  }(),
      aa = f.alt(p.altParser)(U)(a);

  a = b.bind(p.bindParser)(U)(function (a) {
    return b.bind(p.bindParser)(z["char"]("@"))(function (c) {
      return b.bind(p.bindParser)(aa)(function (c) {
        return b.bind(p.bindParser)(z.eof)(function (b) {
          return k.pure(p.applicativeParser)({
            localPart: a,
            domainPart: c
          });
        });
      });
    });
  });
  d.addrSpec = a;

  d.toString = function (a) {
    return a.localPart + ("@" + a.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var d = a["Text.Email.Validate"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      h = a["Data.Show"],
      b = a["Text.Email.Parser"],
      e = a["Text.Parsing.StringParser"];

  a = function () {
    var a = f.lmap(k.bifunctorEither)(h.show(e.showParseError));
    return function (c) {
      c = e.runParser(b.addrSpec)(c);
      return a(c);
    };
  }();

  d.validate = a;
})(PS);

(function (a) {
  a["Metajelo.Validation"] = a["Metajelo.Validation"] || {};

  var d = a["Metajelo.Validation"],
      f = a["Control.Category"],
      k = a["Data.Bifunctor"],
      h = a["Data.Either"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      c = a["Data.String.Common"],
      g = a["Data.String.NonEmpty.Internal"],
      l = a["Formless.Validation"],
      m = a["Text.Email.Validate"],
      r = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      n = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      y = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      t = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      p = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      z = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      w = function () {
    function a(a, b) {
      this.value0 = a;
      this.value1 = b;
    }

    a.create = function (b) {
      return function (c) {
        return new a(b, c);
      };
    };

    return a;
  }(),
      x = function x(a) {
    this.toText = a;
  };

  a = new x(f.identity(f.categoryFn));
  x = new x(function (a) {
    if (a instanceof r) return "This field is required.";
    if (a instanceof y) return "Invalid input: " + a.value0;
    if (a instanceof n) return "Email validation error: " + a.value0;
    if (a instanceof t) return "You must enter at least " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof p) return "You must enter less than " + (e.show(e.showInt)(a.value0) + " characters.");
    if (a instanceof z) return 'Could not parse "' + (a.value0 + '" to a valid integer.');
    if (a instanceof w) return 'This field contains "' + (a.value1 + ('" but must be equal to "' + (a.value0 + '" to validate.')));
    throw Error("Failed pattern match at Metajelo.Validation (line 35, column 1 - line 42, column 126): " + [a.constructor.name]);
  });

  d.toText = function (a) {
    return a.toText;
  };

  d.dummy = function (a) {
    return l.hoistFn_(a)(f.identity(f.categoryFn));
  };

  d.emailFormat = function (a) {
    return l.hoistFnE_(a)(function (a) {
      return k.lmap(h.bifunctorEither)(function (a) {
        return new n(a);
      })(m.validate(a));
    });
  };

  d.readNEStringEi = function (a) {
    a = g.fromString(c.trim(a));
    if (a instanceof b.Just) return new h.Right(a.value0);
    if (a instanceof b.Nothing) return new h.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [a.constructor.name]);
  };

  d.toTextFieldError = x;
  d.toTextString = a;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};
  var d = a["Metajelo.XPaths.Read"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      h = a["Data.Maybe"],
      b = a["Metajelo.Types"];

  d.readIdentifierType = function (a) {
    return "ARK" === a ? f.pure(k.applicativeEither)(b.ARK.value) : "arXiv" === a ? f.pure(k.applicativeEither)(b.ArXiv.value) : "bibcode" === a ? f.pure(k.applicativeEither)(b.Bibcode.value) : "DOI" === a ? f.pure(k.applicativeEither)(b.DOI.value) : "EAN13" === a ? f.pure(k.applicativeEither)(b.EAN13.value) : "EISSN" === a ? f.pure(k.applicativeEither)(b.EISSN.value) : "Handle" === a ? f.pure(k.applicativeEither)(b.Handle.value) : "IGSN" === a ? f.pure(k.applicativeEither)(b.IGSN.value) : "ISBN" === a ? f.pure(k.applicativeEither)(b.ISBN.value) : "ISSN" === a ? f.pure(k.applicativeEither)(b.ISSN.value) : "ISTC" === a ? f.pure(k.applicativeEither)(b.ISTC.value) : "LISSN" === a ? f.pure(k.applicativeEither)(b.LISSN.value) : "LSID" === a ? f.pure(k.applicativeEither)(b.LSID.value) : "PMID" === a ? f.pure(k.applicativeEither)(b.PMID.value) : "PURL" === a ? f.pure(k.applicativeEither)(b.PURL.value) : "UPC" === a ? f.pure(k.applicativeEither)(b.UPC.value) : "URL" === a ? f.pure(k.applicativeEither)(b.URL.value) : "URN" === a ? f.pure(k.applicativeEither)(b.URN.value) : k.Left.create("Unknown IdentifierType: '" + (a + "'"));
  };

  d.readRelationType = function (a) {
    return "IsCitedBy" === a ? f.pure(k.applicativeEither)(b.IsCitedBy.value) : "Cites" === a ? f.pure(k.applicativeEither)(b.Cites.value) : "IsSupplementTo" === a ? f.pure(k.applicativeEither)(b.IsSupplementTo.value) : "IsSupplementedBy" === a ? f.pure(k.applicativeEither)(b.IsSupplementedBy.value) : "IsContinuedBy" === a ? f.pure(k.applicativeEither)(b.IsContinuedBy.value) : "Continues" === a ? f.pure(k.applicativeEither)(b.Continues.value) : "IsNewVersionOf" === a ? f.pure(k.applicativeEither)(b.IsNewVersionOf.value) : "IsPreviousVersionOf" === a ? f.pure(k.applicativeEither)(b.IsPreviousVersionOf.value) : "IsPartOf" === a ? f.pure(k.applicativeEither)(b.IsPartOf.value) : "HasPart" === a ? f.pure(k.applicativeEither)(b.HasPart.value) : "IsReferencedBy" === a ? f.pure(k.applicativeEither)(b.IsReferencedBy.value) : "References" === a ? f.pure(k.applicativeEither)(b.References.value) : "IsDocumentedBy" === a ? f.pure(k.applicativeEither)(b.IsDocumentedBy.value) : "Documents" === a ? f.pure(k.applicativeEither)(b.Documents.value) : "IsCompiledBy" === a ? f.pure(k.applicativeEither)(b.IsCompiledBy.value) : "Compiles" === a ? f.pure(k.applicativeEither)(b.Compiles.value) : "IsVariantFormOf" === a ? f.pure(k.applicativeEither)(b.IsVariantFormOf.value) : "IsOriginalFormOf" === a ? f.pure(k.applicativeEither)(b.IsOriginalFormOf.value) : "IsIdenticalTo" === a ? f.pure(k.applicativeEither)(b.IsIdenticalTo.value) : "HasMetadata" === a ? f.pure(k.applicativeEither)(b.HasMetadata.value) : "IsMetadataFor" === a ? f.pure(k.applicativeEither)(b.IsMetadataFor.value) : "Reviews" === a ? f.pure(k.applicativeEither)(b.Reviews.value) : "IsReviewedBy" === a ? f.pure(k.applicativeEither)(b.IsReviewedBy.value) : "IsDerivedFrom" === a ? f.pure(k.applicativeEither)(b.IsDerivedFrom.value) : "IsSourceOf" === a ? f.pure(k.applicativeEither)(b.IsSourceOf.value) : k.Left.create("Unknown RelationType: '" + (a + "'"));
  };

  d.readResourceTypeGeneral = function (a) {
    return "Audiovisual" === a ? f.pure(k.applicativeEither)(b.Audiovisual.value) : "Dataset" === a ? f.pure(k.applicativeEither)(b.Dataset.value) : "Event" === a ? f.pure(k.applicativeEither)(b.Event.value) : "Image" === a ? f.pure(k.applicativeEither)(b.Image.value) : "InteractiveResource" === a ? f.pure(k.applicativeEither)(b.InteractiveResource.value) : "Model" === a ? f.pure(k.applicativeEither)(b.Model.value) : "PhysicalObject" === a ? f.pure(k.applicativeEither)(b.PhysicalObject.value) : "ResourceCollection" === a ? f.pure(k.applicativeEither)(b.ResourceCollection.value) : "Service" === a ? f.pure(k.applicativeEither)(b.Service.value) : "Software" === a ? f.pure(k.applicativeEither)(b.Software.value) : "Sound" === a ? f.pure(k.applicativeEither)(b.Sound.value) : "Text" === a ? f.pure(k.applicativeEither)(b.Text.value) : "Workflow" === a ? f.pure(k.applicativeEither)(b.Workflow.value) : "Other" === a ? f.pure(k.applicativeEither)(b.Other.value) : k.Left.create("Unknown ResourceTypeGeneral: '" + (a + "'"));
  };

  d.readInstitutionType = function (a) {
    return "commercial" === a ? f.pure(k.applicativeEither)(b.Commercial.value) : "non-profit" === a ? f.pure(k.applicativeEither)(b.NonProfit.value) : "governmental" === a ? f.pure(k.applicativeEither)(b.Governmental.value) : k.Left.create("Unknown InstitutionType: '" + (a + "'"));
  };

  d.readInstitutionContactType = function (a) {
    return "dataCustodian" === a ? f.pure(k.applicativeEither)(new h.Just(b.DataCustodian.value)) : "" === a ? f.pure(k.applicativeEither)(h.Nothing.value) : k.Left.create("Unknown InstitutionContactType: '" + (a + "'"));
  };

  d.readPolicyType = function (a) {
    return "Access" === a ? f.pure(k.applicativeEither)(new h.Just(b.Access.value)) : "Collection" === a ? f.pure(k.applicativeEither)(new h.Just(b.Collection.value)) : "Data" === a ? f.pure(k.applicativeEither)(new h.Just(b.Data.value)) : "Metadata" === a ? f.pure(k.applicativeEither)(new h.Just(b.Metadata.value)) : "Preservation" === a ? f.pure(k.applicativeEither)(new h.Just(b.Preservation.value)) : "Submission" === a ? f.pure(k.applicativeEither)(new h.Just(b.Submission.value)) : "Quality" === a ? f.pure(k.applicativeEither)(new h.Just(b.Quality.value)) : "Terms of Use" === a ? f.pure(k.applicativeEither)(new h.Just(b.TermsOfUse.value)) : "" === a ? f.pure(k.applicativeEither)(h.Nothing.value) : k.Left.create("Unknown PolicyType: '" + (a + "'"));
  };

  d.readBoolean = function (a) {
    return "0" === a ? f.pure(k.applicativeEither)(!1) : "1" === a ? f.pure(k.applicativeEither)(!0) : "false" === a ? f.pure(k.applicativeEither)(!1) : "true" === a ? f.pure(k.applicativeEither)(!0) : k.Left.create("Invalid xs:boolean value: '" + (a + "'"));
  };
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var d = a["Metajelo.FormUtil"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      g = a["Control.Applicative"],
      l = a["Control.Apply"],
      m = a["Control.Bind"],
      r = a["Control.Cofree"],
      n = a["Data.Array"],
      y = a["Data.Array.NonEmpty"],
      t = a["Data.Bounded"],
      p = a["Data.Date"],
      z = a["Data.Date.Component"],
      w = a["Data.DateTime"],
      x = a["Data.Either"],
      u = a["Data.Enum"],
      H = a["Data.Eq"],
      q = a["Data.Foldable"],
      E = a["Data.Formatter.DateTime"],
      C = a["Data.Functor"],
      I = a["Data.Generic.Rep"],
      B = a["Data.Generic.Rep.Bounded"],
      G = a["Data.Generic.Rep.Enum"],
      D = a["Data.Generic.Rep.Eq"],
      F = a["Data.Generic.Rep.Ord"],
      K = a["Data.Generic.Rep.Show"],
      v = a["Data.Maybe"],
      A = a["Data.Monoid"],
      J = a["Data.Ord"],
      R = a["Data.Profunctor.Strong"],
      N = a["Data.Semigroup"],
      L = a["Data.Show"],
      S = a["Data.String.Common"],
      P = a["Data.String.NonEmpty.Internal"],
      M = a["Data.Symbol"],
      W = a["Data.Time"],
      Q = a["Data.Time.Component"],
      O = a["Data.Traversable"],
      T = a["Data.Tuple"],
      U = a["Data.Unfoldable1"],
      aa = a["Formless.Internal.Transform"],
      Z = a["Formless.Query"],
      ea = a["Formless.Retrieve"],
      fa = a["Formless.Types.Query"],
      V = a["Metajelo.Types"],
      ha = a["Metajelo.Validation"],
      da = a["Metajelo.XPaths.Read"],
      qa = a["Text.URL.Validate"],
      ia = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      ja = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      Y = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      ba = function () {
    function a(a) {
      this.value0 = a;
    }

    a.create = function (b) {
      return new a(b);
    };

    return a;
  }(),
      X = function X(a, b, c) {
    this.fromOptionValue = a;
    this.toOptionLabel = b;
    this.toOptionValue = c;
  },
      ka = function ka(a) {
    if (a instanceof Y || a instanceof ba) return a.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 283, column 1 - line 283, column 34): " + [a.constructor.name]);
  },
      ua = function ua(a) {
    return m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(a)(function (a) {
      return g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(P.fromString(S.trim(a)));
    });
  },
      va = function va(a) {
    return function (b) {
      return b < a ? [] : n.range(a)(b);
    };
  },
      xa = function xa(a) {
    return "FreeTextPolicy" === a ? g.pure(x.applicativeEither)(ia.value) : "RefPolicy" === a ? g.pure(x.applicativeEither)(ja.value) : x.Left.create("Unknown Policy: '" + (a + "'"));
  },
      la = function la(a) {
    return function (b) {
      return q.fold(q.foldableMaybe)(A.monoidString)(C.map(v.functorMaybe)(L.show(a))(b));
    };
  },
      ra = function ra(a) {
    return function (c) {
      return function (d) {
        return e.div_(r.shiftMapCofree(A.monoidArray))(c)(m.discard(m.discardUnit)(r.bindCofree(b.widgetAlternative(A.monoidArray)))(f.display(a))(function () {
          return d;
        }));
      };
    };
  },
      wa = function wa(a) {
    return function (c) {
      return function (d) {
        return function (f) {
          return ra(a(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([e.text(k.widgetLiftWidget)(c)]))(d)(f);
        };
      };
    };
  },
      Ka = function Ka(a) {
    return function (d) {
      return function (l) {
        var n = function n(a) {
          return f.step(a)(m.bind(b.widgetBind)(e.input(k.widgetLiftWidget)([c.value(a), C.map(h.functorProps)(c.unsafeTargetValue)(c.onChange)]))(function (a) {
            return g.pure(b.widgetApplicative)(n(a));
          }));
        };

        return wa(function (b) {
          return function (c) {
            return a(b)(c);
          };
        })(d)([])(n(l));
      };
    };
  };

  a = new X(function (a) {
    return v.fromJust()(x.hush(da.readResourceTypeGeneral(a)));
  }, L.show(V.showResourceTypeGeneral), L.show(V.showResourceTypeGeneral));

  var ya = new X(function (a) {
    return v.fromJust()(x.hush(da.readRelationType(a)));
  }, L.show(V.showRelationType), L.show(V.showRelationType)),
      za = new X(function (a) {
    return v.fromJust()(x.hush(da.readInstitutionType(a)));
  }, L.show(V.showInstitutionType), L.show(V.showInstitutionType)),
      Aa = new X(function (a) {
    return v.fromJust()(x.hush(da.readIdentifierType(a)));
  }, L.show(V.showIdentifierType), L.show(V.showIdentifierType)),
      Ra = function Ra(a) {
    return a instanceof Y ? !0 : !1;
  },
      La = function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return new w.DateTime(p.canonicalDate(v.fromMaybe(t.bottom(z.boundedYear))(u.toEnum(z.boundedEnumYear)(a)))(v.fromMaybe(t.bottom(z.boundedMonth))(u.toEnum(z.boundedEnumMonth)(b)))(v.fromMaybe(t.bottom(z.boundedDay))(u.toEnum(z.boundedEnumDay)(c))), new W.Time(v.fromMaybe(t.bottom(Q.boundedHour))(u.toEnum(Q.boundedEnumHour)(d)), v.fromMaybe(t.bottom(Q.boundedMinute))(u.toEnum(Q.boundedEnumMinute)(e)), v.fromMaybe(t.bottom(Q.boundedSecond))(u.toEnum(Q.boundedEnumSecond)(f)), v.fromMaybe(t.bottom(Q.boundedMillisecond))(u.toEnum(Q.boundedEnumMillisecond)(g))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      ca = new I.Generic(function (a) {
    if (a instanceof ia) return new I.Inl(I.NoArguments.value);
    if (a instanceof ja) return new I.Inr(I.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 231, column 1 - line 231, column 58): " + [a.constructor.name]);
  }, function (a) {
    if (a instanceof I.Inl) return ia.value;
    if (a instanceof I.Inr) return ja.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 231, column 1 - line 231, column 58): " + [a.constructor.name]);
  });

  K = new L.Show(K.genericShow(ca)(K.genericShowSum(K.genericShowConstructor(K.genericShowArgsNoArguments)(new M.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(K.genericShowConstructor(K.genericShowArgsNoArguments)(new M.IsSymbol(function () {
    return "RefPolicy";
  })))));
  K = new X(function () {
    var a = v.fromMaybe(ia.value);
    return function (b) {
      return a(x.hush(xa(b)));
    };
  }(), L.show(K), L.show(K));

  var Ba = new C.Functor(function (a) {
    return function (b) {
      if (b instanceof Y) return Y.create(C.map(v.functorMaybe)(a)(b.value0));
      if (b instanceof ba) return ba.create(C.map(v.functorMaybe)(a)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 270, column 1 - line 272, column 48): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      Ca = function Ca(a) {
    return function (d) {
      return function (l) {
        return f.step(l)(function () {
          var f = v.isJust(l) ? !0 : !1;
          return m.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.value(v.maybe("")(d.toOptionValue)(l)), C.map(h.functorProps)(function () {
            var a = d.fromOptionValue;
            return function (b) {
              return a(c.unsafeTargetValue(b));
            };
          }())(c.onChange)])(n.cons(e.option(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.disabled(f)])([e.text(k.widgetLiftWidget)("Select ...")]))(C.mapFlipped(C.functorArray)(u.upFromIncluding(a.Enum1())(U.unfoldable1Array)(t.bottom(a.Bounded0())))(function (a) {
            return e.option(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.value((0, d.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, d.toOptionLabel)(a))]);
          }))))(function (c) {
            return g.pure(b.widgetApplicative)(Ca(a)(d)(new v.Just(c)));
          });
        }());
      };
    };
  },
      Da = function Da(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return q.fold(a)(c)(C.map(b)(d)(e));
          };
        };
      };
    };
  },
      Ea = function Ea(a) {
    return function (b) {
      return function (c) {
        return ua(Ka(function (b) {
          return function (c) {
            return a(b)(c);
          };
        })(b)(Da(q.foldableMaybe)(v.functorMaybe)(A.monoidString)(P.toString)(c)));
      };
    };
  },
      Fa = function Fa(a) {
    return v.maybe(A.mempty(b.widgetMonoid(A.monoidArray)))(function (d) {
      return e.div(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.style({
        color: "red"
      })])([e.text(k.widgetLiftWidget)(ha.toText(a)(d))]);
    });
  },
      Ga = new H.Eq(D.genericEq(ca)(D.genericEqSum(D.genericEqConstructor(D.genericEqNoArguments))(D.genericEqConstructor(D.genericEqNoArguments)))),
      Ha = new J.Ord(function () {
    return Ga;
  }, function (a) {
    return function (b) {
      return F.genericCompare(ca)(F.genericOrdSum(F.genericOrdConstructor(F.genericOrdNoArguments))(F.genericOrdConstructor(F.genericOrdNoArguments)))(a)(b);
    };
  }),
      Ma = new u.Enum(function () {
    return Ha;
  }, G.genericPred(ca)(G.genericEnumSum(G.genericEnumConstructor(G.genericEnumNoArguments))(B.genericTopConstructor(B.genericTopNoArguments))(G.genericEnumConstructor(G.genericEnumNoArguments))(B.genericBottomConstructor(B.genericBottomNoArguments))), G.genericSucc(ca)(G.genericEnumSum(G.genericEnumConstructor(G.genericEnumNoArguments))(B.genericTopConstructor(B.genericTopNoArguments))(G.genericEnumConstructor(G.genericEnumNoArguments))(B.genericBottomConstructor(B.genericBottomNoArguments))));

  M = function M(a) {
    return function (b) {
      return b instanceof v.Nothing ? "(None)" : la(a)(b);
    };
  };

  H = new X(function (a) {
    return x.hush(da.readBoolean(a));
  }, M(L.showBoolean), la(L.showBoolean));
  D = new X(function () {
    var a = m.join(v.bindMaybe);
    return function (b) {
      return a(x.hush(da.readInstitutionContactType(b)));
    };
  }(), M(V.showInstitutionContactType), la(V.showInstitutionContactType));
  V = new X(function () {
    var a = m.join(v.bindMaybe);
    return function (b) {
      return a(x.hush(da.readPolicyType(b)));
    };
  }(), M(V.showPolicyType), la(V.showPolicyType));

  var Na = function Na(a) {
    return C.voidRight(b.widgetFunctor)(!a)(e.input(k.widgetLiftWidget)([c._type("checkbox"), c.checked(a), c.onChange]));
  },
      Ia = function Ia(a) {
    var c = Na(a);
    return f.step(a)(m.bind(b.widgetBind)(c)(function (a) {
      return g.pure(b.widgetApplicative)(Ia(a));
    }));
  },
      Oa = new t.Bounded(function () {
    return Ha;
  }, B.genericBottom(ca)(B.genericBottomSum(B.genericBottomConstructor(B.genericBottomNoArguments))), B.genericTop(ca)(B.genericTopSum(B.genericTopConstructor(B.genericTopNoArguments))));

  B = new u.BoundedEnum(function () {
    return Oa;
  }, function () {
    return Ma;
  }, G.genericCardinality(ca)(G.genericBoundedEnumSum(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))), G.genericFromEnum(ca)(G.genericBoundedEnumSum(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))), G.genericToEnum(ca)(G.genericBoundedEnumSum(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))));

  var Pa = new l.Apply(function () {
    return Ba;
  }, function (a) {
    return function (b) {
      if (a instanceof Y && b instanceof Y || a instanceof Y && b instanceof ba || a instanceof ba && b instanceof Y) return Y.create(l.apply(v.applyMaybe)(a.value0)(b.value0));
      if (a instanceof ba && b instanceof ba) return ba.create(l.apply(v.applyMaybe)(a.value0)(b.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 273, column 1 - line 277, column 63): " + [a.constructor.name, b.constructor.name]);
    };
  }),
      Qa = new g.Applicative(function () {
    return Pa;
  }, function (a) {
    return Y.create(new v.Just(a));
  }),
      Ja = function Ja(a) {
    return function (d) {
      var h = T.snd(d),
          l = T.fst(d),
          q = new Y(v.Nothing.value);

      d = function () {
        var a = J.max(J.ordInt)(0)(l - n.length(h) | 0);
        return N.append(N.semigroupArray)(C.map(C.functorArray)(g.pure(Qa))(h))(C.mapFlipped(C.functorArray)(va(1)(a))(function (a) {
          return q;
        }));
      }();

      var p = function p(a) {
        return f.step(a)(m.bind(b.widgetBind)(C.voidRight(b.widgetFunctor)(ba.create(ka(a)))(e.button(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(k.widgetLiftWidget)("Delete")])))(function (a) {
          return g.pure(b.widgetApplicative)(p(a));
        }));
      },
          u = function u(c) {
        return e.li_(r.shiftMapCofree(A.monoidArray))([])(m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(a(ka(c)))(function (a) {
          return m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(p(new Y(a)))(function (a) {
            return g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(a);
          });
        }));
      },
          t = function t(a) {
        if (a instanceof ba) return f.step(new ba(v.Nothing.value))(A.mempty(b.widgetMonoid(A.monoidArray)));
        if (a instanceof Y) return u(a);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 304, column 23 - line 306, column 35): " + [a.constructor.name]);
      };

      return e.div_(r.shiftMapCofree(A.monoidArray))([])(m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(function (a) {
        return function (d) {
          return f.loopS(A.monoidArray)(new T.Tuple(a, d))(function (a) {
            return e.div_(r.shiftMapCofree(A.monoidArray))([])(function () {
              T.fst(a);
              var d = T.snd(a);
              return m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(f.step(0)(C.voidRight(b.widgetFunctor)(g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(1))(e.button(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(k.widgetLiftWidget)("Add item")]))))(function (a) {
                return m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(O.traverse(O.traversableArray)(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(t)(d))(function (c) {
                  c = n.filter(Ra)(c);
                  var d = n.length(c) + a | 0,
                      e = C.mapFlipped(C.functorArray)(va(1)(a))(function (a) {
                    return q;
                  });
                  return g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(T.Tuple.create(d)(N.append(N.semigroupArray)(c)(e)));
                });
              });
            }());
          });
        };
      }(l)(d))(function (a) {
        return g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(R.second(R.strongFn)(function () {
          var a = C.map(C.functorArray)(ka);
          return function (b) {
            return n.catMaybes(a(b));
          };
        }())(a));
      }));
    };
  };

  d.menu = function (a) {
    return function (d) {
      return function (f) {
        return function (g) {
          return function (l) {
            return function (l) {
              return function (m) {
                return function (m) {
                  return function (n) {
                    return e.select(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.defaultValue((0, d.toOptionValue)(ea.getInput(a)(g)()(n)(m))), C.map(h.functorProps)(function () {
                      var b = Z.set(a)(l)()(n),
                          e = d.fromOptionValue;
                      return function (a) {
                        return b(e(c.unsafeTargetValue(a)));
                      };
                    }())(c.onChange)])(C.mapFlipped(C.functorArray)(u.upFromIncluding(f.Enum1())(U.unfoldable1Array)(t.bottom(f.Bounded0())))(function (a) {
                      return e.option(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([c.value((0, d.toOptionValue)(a))])([e.text(k.widgetLiftWidget)((0, d.toOptionLabel)(a))]);
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

  d.menuSignal = Ca;
  d["labelSig'"] = wa;
  d.labelSig = ra;
  d.textInput = Ea;

  d.urlInput = function (a) {
    return function (c) {
      return function (d) {
        if (d instanceof x.Left) var e = "";else if (d instanceof x.Right) e = P.toString(qa.urlToNEString(d.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 166, column 15 - line 168, column 48): " + [d.constructor.name]);
        if (d instanceof x.Left) var h = d.value0;else if (d instanceof x.Right) h = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 162, column 15 - line 164, column 20): " + [d.constructor.name]);
        return m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(Ea(function (b) {
          return function (c) {
            return a(b)(c);
          };
        })(c)(P.fromString(e)))(function (a) {
          var c = m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray))),
              d = g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)));
          if (a instanceof v.Nothing) a = new x.Left(h);else if (a instanceof v.Just) a = qa.parsePublicURL(P.toString(a.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 153, column 19 - line 155, column 46): " + [a.constructor.name]);
          return c(d(a))(function (a) {
            return m.discard(m.discardUnit)(r.bindCofree(b.widgetAlternative(A.monoidArray)))(f.display(function () {
              if (a instanceof x.Right) return A.mempty(b.widgetMonoid(A.monoidArray));
              if (a instanceof x.Left) return Fa(ha.toTextString)(new v.Just(a.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 156, column 13 - line 158, column 40): " + [a.constructor.name]);
            }()))(function () {
              return g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(a);
            });
          });
        });
      };
    };
  };

  d.checkBoxS = Ia;
  d.FreeTextPolicy = ia;
  d.RefPolicy = ja;

  d.formSaveButton = function (a) {
    a = a.dirty ? [c.onClick] : [c.disabled(!0)];
    return e.button(b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)(a)([e.text(k.widgetLiftWidget)("Save")]);
  };

  d.arrayView = Ja;

  d.nonEmptyArrayView = function (a) {
    return function (c) {
      return m.bind(r.bindCofree(b.widgetAlternative(A.monoidArray)))(Ja(a)(R.second(R.strongFn)(Da(q.foldableMaybe)(v.functorMaybe)(A.monoidArray)(y.toArray))(c)))(function (a) {
        return g.pure(r.applicativeCofree(b.widgetAlternative(A.monoidArray)))(R.second(R.strongFn)(y.fromArray)(a));
      });
    };
  };

  d.errorDisplay = Fa;

  d.initFormState = function (a) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return {
                validity: fa.Incomplete.value,
                dirty: !1,
                submitting: !1,
                errors: 0,
                submitAttempts: 0,
                form: aa.inputFieldsToFormFields()(a)(b)(c)(d),
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

  d.formatXsdDate = function (a) {
    var b = E.formatDateTime("YYYY-MM-DD")(a);
    return function () {
      if (b instanceof x.Left) return new x.Left(b.value0);

      if (b instanceof x.Right) {
        var a = P.fromString(b.value0);
        if (a instanceof v.Nothing) return new x.Left("Empty Date output from formatXsdDate");
        if (a instanceof v.Just) return new x.Right(a.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 396, column 27 - line 398, column 30): " + [a.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 394, column 15 - line 398, column 30): " + [b.constructor.name]);
    }();
  };

  d.initDate = La;
  d.isOptionMaybeBoolean = H;
  d.isOptionIdentifierType = Aa;
  d.isOptionInstitutionType = za;
  d.isOptionMaybeInstitutionContactType = D;
  d.isOptionMaybePolicyType = V;
  d.isOptionRelationType = ya;
  d.isOptionResourceTypeGeneral = a;
  d.eqPolPolType = Ga;
  d.boundedEnumPolPolType = B;
  d.isOptionPolPolType = K;
})(PS);

(function (a) {
  a["Metajelo.UI.CSS.ClassNames"] = a["Metajelo.UI.CSS.ClassNames"] || {};
  a = a["Metajelo.UI.CSS.ClassNames"];
  a.page = "page";
  a.record = "record";
  a.product = "product";
  a.products = "products";
  a.location = "location";
  a.sustainability = "sustainability";
  a.identifier = "identifier";
  a.relatedIdentifier = "relatedIdentifier";
  a.relatedIdentifiers = "relatedIdentifiers";
  a.basicMetaData = "basicMetaData";
  a.resourceType = "resourceType";
  a.resourceMDSource = "resourceMDSource";
  a.institutionContact = "institutionContact";
  a.institutionPolicy = "institutionPolicy";
  a.institutionPolicies = "institutionPolicies";
})(PS);

(function (a) {
  a["Metajelo.UI.CSS.Util"] = a["Metajelo.UI.CSS.Util"] || {};
  var d = a["Concur.React.Props"];

  a["Metajelo.UI.CSS.Util"].mjUiClass = function (a) {
    return d.className("metajelo-ui_" + a);
  };
})(PS);

(function (a) {
  a["Metajelo.UI.CSS.ClassProps"] = a["Metajelo.UI.CSS.ClassProps"] || {};
  var d = a["Metajelo.UI.CSS.ClassProps"],
      f = a["Metajelo.UI.CSS.ClassNames"],
      k = a["Metajelo.UI.CSS.Util"];
  a = k.mjUiClass(f.sustainability);
  var h = k.mjUiClass(f.resourceType),
      b = k.mjUiClass(f.resourceMDSource),
      e = k.mjUiClass(f.relatedIdentifiers),
      c = k.mjUiClass(f.relatedIdentifier),
      g = k.mjUiClass(f.record),
      l = k.mjUiClass(f.products),
      m = k.mjUiClass(f.product),
      r = k.mjUiClass(f.page),
      n = k.mjUiClass(f.location),
      y = k.mjUiClass(f.institutionPolicy),
      t = k.mjUiClass(f.institutionPolicies),
      p = k.mjUiClass(f.institutionContact),
      z = k.mjUiClass(f.identifier);
  f = k.mjUiClass(f.basicMetaData);
  d.page = r;
  d.record = g;
  d.product = m;
  d.products = l;
  d.location = n;
  d.sustainability = a;
  d.identifier = z;
  d.relatedIdentifier = c;
  d.relatedIdentifiers = e;
  d.basicMetaData = f;
  d.resourceType = h;
  d.resourceMDSource = b;
  d.institutionContact = p;
  d.institutionPolicy = y;
  d.institutionPolicies = t;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var d = a["Metajelo.View"],
      f = a["Concur.Core.LiftWidget"],
      k = a["Concur.Core.Types"],
      h = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      e = a["Control.Bind"],
      c = a["Control.Category"],
      g = a["Data.Array"],
      l = a["Data.Array.NonEmpty"],
      m = a["Data.Array.NonEmpty.Internal"],
      r = a["Data.Foldable"],
      n = a["Data.Functor"],
      y = a["Data.HeytingAlgebra"],
      t = a["Data.Maybe"],
      p = a["Data.Monoid"],
      z = a["Data.Profunctor.Strong"],
      w = a["Data.Semigroup"],
      x = a["Data.Show"],
      u = a["Data.String.CodePoints"],
      H = a["Data.String.NonEmpty.Internal"],
      q = a["Data.String.Utils"],
      E = a["Data.Unfoldable"],
      C = a["Data.Unfoldable1"],
      I = a["Foreign.Object"],
      B = a["Metajelo.Types"],
      G = a["Text.Email.Parser"],
      D = a["Text.URL.Validate"],
      F = function () {
    var a = n.map(n.functorArray)(u.singleton);
    return function (b) {
      return a(u.toCodePointArray(b));
    };
  }(),
      K = function K(a) {
    var b = h.text(a);
    return function (a) {
      return b(H.toString(a));
    };
  },
      v = h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([h.text(f.widgetLiftWidget)(" ")]),
      A = function () {
    var a = r.intercalate(r.foldableArray)(p.monoidArray)([v]),
        b = n.map(n.functorArray)(C.singleton(C.unfoldable1Array));
    return function (c) {
      return a(b(c));
    };
  }(),
      J = function J(a) {
    return "metajelo_" + a;
  },
      R = J("icon-check-square-o"),
      N = J("icon"),
      L = J("icon-minus-square-o"),
      S = J("icon-square-o"),
      P = function P(a) {
    return h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("institutionName"))])([K(f.widgetLiftWidget)(a.institutionName)]);
  },
      M = function M(a) {
    return function (a) {
      return r.foldMap(r.foldableMaybe)(p.monoidArray)(c.identity(c.categoryFn))(g.init(a));
    };
  },
      W = function W(a) {
    return function (b) {
      return function (d) {
        return function (e) {
          return function (f) {
            var g = I.fromFoldableWith(a)(w.append(e)),
                h = n.map(b)(z.fanout(c.categoryFn)(z.strongFn)(f)(C.singleton(d)));
            return function (a) {
              return g(h(a));
            };
          };
        };
      };
    };
  },
      Q = function Q(a) {
    var c = G.toString(a.emailAddress),
        d = h.text(f.widgetLiftWidget);
    if (a.contactType instanceof t.Nothing) a = ".";else if (a.contactType instanceof t.Just) a = " (" + (x.show(B.showInstitutionContactType)(a.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 198, column 22 - line 200, column 39): " + [a.contactType.constructor.name]);
    d = d(a);
    return h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)(w.append(w.semigroupArray)([h.text(f.widgetLiftWidget)("Institution Contact: "), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("institutionContact")), b.href("mailto:" + c)])([h.text(f.widgetLiftWidget)(c)])])([d]));
  },
      O = function O(a) {
    return h["cite'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([K(f.widgetLiftWidget)(a)]);
  },
      T = function T(a) {
    if (a.idType instanceof B.ARK) return h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(H.toString(a.id))])([O(a.id)]);

    if (a.idType instanceof B.ArXiv) {
      var c = "https://arxiv.org/abs/" + H.toString(a.id);
      return h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    }

    if (a.idType instanceof B.Bibcode) return c = "https://ui.adsabs.harvard.edu/abs/" + (H.toString(a.id) + "/abstract"), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.DOI) return c = "https://doi.org/" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.EAN13) return O(a.id);
    if (a.idType instanceof B.EISSN) return c = "https://www.worldcat.org/ISSN/" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.Handle) return c = "http://hdl.handle.net/" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.IGSN) return c = "http://igsn.org/" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.ISBN) return O(a.id);
    if (a.idType instanceof B.ISSN) return c = "https://www.worldcat.org/ISSN/" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.ISTC) return O(a.id);
    if (a.idType instanceof B.LISSN) return c = "https://www.worldcat.org/ISSN/" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.LSID) return c = "http://www.lsid.info/resolver/?lsid=" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.PMID) return c = "https://www.ncbi.nlm.nih.gov/pubmed/" + H.toString(a.id), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(c)])([O(a.id)]);
    if (a.idType instanceof B.PURL) return h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(H.toString(a.id))])([O(a.id)]);
    if (a.idType instanceof B.UPC) return O(a.id);
    if (a.idType instanceof B.URL) return h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(H.toString(a.id))])([O(a.id)]);
    if (a.idType instanceof B.URN) return O(a.id);
    throw Error("Failed pattern match at Metajelo.View (line 220, column 1 - line 220, column 47): " + [a.constructor.name]);
  },
      U = function U(a) {
    return h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("identifier"))])([h.text(f.widgetLiftWidget)(x.show(B.showIdentifierType)(a.idType) + ": "), T(a)]);
  },
      aa = function aa(a) {
    return h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("relatedId"))])([h.text(f.widgetLiftWidget)(x.show(B.showRelationType)(a.relType)), v, U({
      id: a.id,
      idType: a.idType
    })]);
  },
      Z = function Z(a) {
    return b.classList(n.map(n.functorArray)(t.Just.create)(a));
  },
      ea = function ea(a) {
    return h.div(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("institutionPolicy"))])(A([function (a) {
      var c = function () {
        if (a instanceof t.Nothing) return {
          text: "May apply to product (unverified)",
          cls: S
        };
        if (a instanceof t.Just && a.value0) return {
          text: "Applies to product",
          cls: R
        };
        if (a instanceof t.Just && !a.value0) return {
          text: "Does not apply to product",
          cls: L
        };
        throw Error("Failed pattern match at Metajelo.View (line 271, column 10 - line 274, column 73): " + [a.constructor.name]);
      }();

      return h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([Z([N, c.cls])])([function (a) {
        return h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("applies_info"))])([h.text(f.widgetLiftWidget)(a)]);
      }(c.text)]);
    }(a.appliesToProduct), r.foldMap(r.foldableMaybe)(k.widgetMonoid(p.monoidArray))(function (a) {
      return h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("policyType"))])([h.text(f.widgetLiftWidget)(x.show(B.showPolicyType)(a))]), h.text(f.widgetLiftWidget)(" Policy:")]);
    })(a.policyType), function (a) {
      var c = h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("policy"))]),
          d = C.singleton(C.unfoldable1Array);
      if (a instanceof B.FreeTextPolicy) a = K(f.widgetLiftWidget)(a.value0);else if (a instanceof B.RefPolicy) a = D.urlToString(a.value0), a = h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.href(a)])([h.text(f.widgetLiftWidget)(a)]);else throw Error("Failed pattern match at Metajelo.View (line 264, column 5 - line 267, column 40): " + [a.constructor.name]);
      return c(d(a));
    }(a.policy)]));
  },
      fa = function fa(a) {
    return function (b) {
      return function (c) {
        if (b) return a;

        if (r.any(r.foldableArray)(y.heytingAlgebraBoolean)(function (b) {
          return q.endsWith(b)(a);
        })([";", ".", ","])) {
          var d = F(a);
          return q.fromCharArray(M(p.monoidString)(d)) + c;
        }

        return a + c;
      };
    };
  },
      V = function V(a) {
    var c = P(a),
        d = h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([h.text(f.widgetLiftWidget)("("), h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("institutionId"))])([U(a.institutionID)]), h.text(f.widgetLiftWidget)("; "), h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("institutionType"))])([h.text(f.widgetLiftWidget)(x.show(B.showInstitutionType)(a.institutionType))]), h.text(f.widgetLiftWidget)(fa(")")(t.isNothing(a.superOrganizationName))(","))]);
    if (a.superOrganizationName instanceof t.Nothing) var e = p.mempty(k.widgetMonoid(p.monoidArray));else if (a.superOrganizationName instanceof t.Just) e = h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([h.text(f.widgetLiftWidget)("a member of "), h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("superOrg"))])([h.text(f.widgetLiftWidget)(fa(H.toString(a.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 160, column 7 - line 166, column 10): " + [a.superOrganizationName.constructor.name]);
    return A([c, d, e, Q(a.institutionContact), h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("missionStatement")), b.href(D.urlToString(a.institutionSustainability.missionStatementURL))])([h.text(f.widgetLiftWidget)("Mission Statement")]), h.text(f.widgetLiftWidget)("; "), h.a(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("fundingStatement")), b.href(D.urlToString(a.institutionSustainability.fundingStatementURL))])([h.text(f.widgetLiftWidget)("Funding Statement")]), h.text(f.widgetLiftWidget)(".")]), h.ul(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("institutionPolicies"))])(n.map(n.functorArray)(function (a) {
      return h["li'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([ea(a)]);
    })(l.toArray(a.institutionPolicies))), function (a) {
      if (a) a = "Versioned";else {
        if (a) throw Error("Failed pattern match at Metajelo.View (line 187, column 14 - line 189, column 31): " + [a.constructor.name]);
        a = "Unversioned";
      }
      return h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("versioning"))])([h.text(f.widgetLiftWidget)(a)]);
    }(a.versioning)]);
  },
      ha = function ha(a) {
    if (a.resourceID instanceof t.Just) var c = h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([U(a.resourceID.value0), h.text(f.widgetLiftWidget)(".")]);else if (a.resourceID instanceof t.Nothing) c = p.mempty(k.widgetMonoid(p.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 138, column 17 - line 140, column 24): " + [a.resourceID.constructor.name]);
    var d = [h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("creator"))])([K(f.widgetLiftWidget)(a.basicMetadata.creator)]), h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("pubyear"))])([K(f.widgetLiftWidget)(a.basicMetadata.publicationYear)]), h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("title"))])([h.text(f.widgetLiftWidget)(fa(H.toString(a.basicMetadata.title))(t.isNothing(a.resourceID))(","))])];
    c = w.append(w.semigroupArray)(d)([h["span'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([P(a.location), h.text(f.widgetLiftWidget)(".")]), c]);
    return h.div(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("product"))])(A(w.append(w.semigroupArray)([h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("productCitation"))])([h["cite'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)(A(c))])])(V(a.location))));
  };

  d.spacify = A;

  d.mkRecordWidget = function (a) {
    var c = function () {
      var c = n.map(m.functorNonEmptyArray)(function (a) {
        return h.li(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("relatedIdItem"))])([a]);
      })(n.map(m.functorNonEmptyArray)(aa)(a.relatedIdentifiers));
      return h.ul(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("relatedIdList"))])(l.toArray(c));
    }(),
        d = W(m.foldableNonEmptyArray)(m.functorNonEmptyArray)(m.unfoldable1NonEmptyArray)(m.semigroupNonEmptyArray)(function (a) {
      return x.show(B.showResourceTypeGeneral)(a.resourceType.generalType) + (": " + a.resourceType.description);
    })(a.supplementaryProducts);

    x.show(B.showIdentifierType)(a.identifier.idType);
    return h.div(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("record"))])([h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("productsHeader"))])([h.text(f.widgetLiftWidget)("Supplementary materials for "), U(a.identifier)]), h.ul(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("productGroupList"))])(n.map(n.functorArray)(function (a) {
      var c = h.li(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("productGroup"))]),
          g = h["div'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap),
          m = h.text(f.widgetLiftWidget)(a),
          q = h["br'"](f.widgetLiftWidget);
      a = e.join(e.bindArray)(E.fromMaybe(E.unfoldableArray)(n.map(t.functorMaybe)(l.toArray)(I.lookup(a)(d))));
      a = h["div'"](k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)(n.map(n.functorArray)(ha)(a));
      return c([g([m, q, a])]);
    })(I.keys(d))), h.span(k.widgetMultiAlternative(p.monoidArray))(k.widgetShiftMap)([b.className(J("relatedIdentifiersHeader"))])([h.text(f.widgetLiftWidget)("Related Identifiers")]), c]);
  };

  d.mkSupplementaryProductWidget = ha;
  d.locElems = V;
  d.contactWidg = Q;
  d.ipolicyWidg = ea;
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionContact"] = a["Metajelo.Forms.InstitutionContact"] || {};

  var d = a["Metajelo.Forms.InstitutionContact"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      g = a["Control.Applicative"],
      l = a["Control.Bind"],
      m = a["Data.Either"],
      r = a["Data.Enum"],
      n = a["Data.Eq"],
      y = a["Data.Foldable"],
      t = a["Data.Functor"],
      p = a["Data.Maybe"],
      z = a["Data.Monoid"],
      w = a["Data.Newtype"],
      x = a["Data.Symbol"],
      u = a["Formless.Component"],
      H = a["Formless.Internal.Transform"],
      q = a["Formless.Query"],
      E = a["Formless.Retrieve"],
      C = a["Formless.Transform.Record"],
      I = a["Formless.Transform.Row"],
      B = a["Formless.Types.Form"],
      G = a["Heterogeneous.Mapping"],
      D = a["Metajelo.FormUtil"],
      F = a["Metajelo.Types"],
      K = a["Metajelo.UI.CSS.ClassProps"],
      v = a["Metajelo.Validation"],
      A = a["Metajelo.View"],
      J = a["Text.Email.Parser"],
      R = {
    email1: v.emailFormat(b.widgetMonad),
    contactType: v.dummy(b.widgetMonad)
  },
      N = function N(a) {
    return function (a) {
      return function (b) {
        return I.mkSProxies()(a)(b)(B.FormProxy.value);
      };
    };
  },
      L = new w.Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      S = {
    email1: "",
    contactType: p.Nothing.value
  },
      P = function P(a) {
    if (a instanceof p.Nothing) return S;
    if (a instanceof p.Just) return {
      email1: J.toString(a.value0.emailAddress),
      contactType: a.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 49, column 1 - line 49, column 57): " + [a.constructor.name]);
  },
      M = function M(a) {
    return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([e.text(k.widgetLiftWidget)("Email")]), e.input(k.widgetLiftWidget)([c.defaultValue(E.getInput(new x.IsSymbol(function () {
      return "email1";
    }))(L)()(N()(L)(I.makeSProxiesCons(new x.IsSymbol(function () {
      return "contactType";
    }))()(I.makeSProxiesCons(new x.IsSymbol(function () {
      return "email1";
    }))()(I.makeSProxiesNil))).email1)(a.form)), t.map(h.functorProps)(function () {
      var a = q.setValidate(new x.IsSymbol(function () {
        return "email1";
      }))(L)()(N()(L)(I.makeSProxiesCons(new x.IsSymbol(function () {
        return "contactType";
      }))()(I.makeSProxiesCons(new x.IsSymbol(function () {
        return "email1";
      }))()(I.makeSProxiesNil))).email1);
      return function (b) {
        return a(c.unsafeTargetValue(b));
      };
    }())(c.onChange)]), D.errorDisplay(v.toTextFieldError)(E.getError(new x.IsSymbol(function () {
      return "email1";
    }))(L)()(N()(L)(I.makeSProxiesCons(new x.IsSymbol(function () {
      return "contactType";
    }))()(I.makeSProxiesCons(new x.IsSymbol(function () {
      return "email1";
    }))()(I.makeSProxiesNil))).email1)(a.form)), e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([e.text(k.widgetLiftWidget)("Contact type: "), D.menu(new x.IsSymbol(function () {
      return "contactType";
    }))(D.isOptionMaybeInstitutionContactType)(r.boundedEnumMaybe(F.smallBoundedInstitutionContactType)(F.boundedEnumInstitutionContactType))(L)()(L)()(a.form)(N()(L)(I.makeSProxiesCons(new x.IsSymbol(function () {
      return "contactType";
    }))()(I.makeSProxiesCons(new x.IsSymbol(function () {
      return "email1";
    }))()(I.makeSProxiesNil))).contactType)]), e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([t.voidRight(b.widgetFunctor)(q.submit)(D.formSaveButton(a))])]))(function (c) {
      return l.bind(b.widgetBind)(u.eval()()(n.eqRowCons(n.eqRowCons(n.eqRowNil)()(new x.IsSymbol(function () {
        return "email1";
      }))(B.eqInputField(n.eqString)))()(new x.IsSymbol(function () {
        return "contactType";
      }))(B.eqInputField(p.eqMaybe(F.eqInstitutionContactType))))(H.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
        return "contactType";
      }))()(H.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
        return "email1";
      }))()(H.inputFieldsToFormFieldsNil)())())(H.inputFieldsToInputCons(new x.IsSymbol(function () {
        return "contactType";
      }))()(H.inputFieldsToInputCons(new x.IsSymbol(function () {
        return "email1";
      }))()(H.inputFieldsToInputNil)())())(H.consCountErrors(new x.IsSymbol(function () {
        return "contactType";
      }))()(H.consCountErrors(new x.IsSymbol(function () {
        return "email1";
      }))()(H.nilCountErrors)))(H.consAllTouched(new x.IsSymbol(function () {
        return "contactType";
      }))()(H.consAllTouched(new x.IsSymbol(function () {
        return "email1";
      }))()(H.nilAllTouched)))(H.setFormFieldsTouchedCons(new x.IsSymbol(function () {
        return "contactType";
      }))()(H.setFormFieldsTouchedCons(new x.IsSymbol(function () {
        return "email1";
      }))()(H.setFormFieldsTouchedNil)())())(H.replaceFormFieldInputsTouchedCons(new x.IsSymbol(function () {
        return "contactType";
      }))(B.newtypeInputField)(B.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedCons(new x.IsSymbol(function () {
        return "email1";
      }))(B.newtypeInputField)(B.newtypeFormField)()()()(H.replaceFormFieldInputsTouchedNil)))(H.modifyAllCons(new x.IsSymbol(function () {
        return "contactType";
      }))(B.newtypeInputFunction)(B.newtypeFormField)()()()(H.modifyAllCons(new x.IsSymbol(function () {
        return "email1";
      }))(B.newtypeInputFunction)(B.newtypeFormField)()()()(H.modifyAllNil)))(H.applyToValidationCons(new x.IsSymbol(function () {
        return "contactType";
      }))(b.widgetMonad)()(L)()()(H.applyToValidationCons(new x.IsSymbol(function () {
        return "email1";
      }))(b.widgetMonad)()(L)()()(H.applyToValidationNil(b.widgetMonad))))(H.formFieldsToMaybeOutputCons(new x.IsSymbol(function () {
        return "contactType";
      }))()(H.formFieldsToMaybeOutputCons(new x.IsSymbol(function () {
        return "email1";
      }))()(H.formFieldsToMaybeOutputNil)())())(L)(L)(L)(L)(L)(L)(L)(L)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof m.Left) return M(a.value0);
        if (a instanceof m.Right) return a = C.unwrapOutputFields(L)(G.hmapRecord()(G.mapRecordWithIndexCons(new x.IsSymbol(function () {
          return "contactType";
        }))(G.constMapping(C.unwrapField(B.newtypeOutputField)))(G.mapRecordWithIndexCons(new x.IsSymbol(function () {
          return "email1";
        }))(G.constMapping(C.unwrapField(B.newtypeOutputField)))(G.mapRecordWithIndexNil)()())()()))(a.value0), g.pure(b.widgetApplicative)({
          emailAddress: a.email1,
          contactType: a.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 75, column 3 - line 79, column 70): " + [a.constructor.name]);
      });
    });
  };

  d.contactSignal = function (a) {
    var c = function c(a) {
      return f.step(a)(l.bind(b.widgetBind)(g.pure(b.widgetApplicative)(C.wrapInputFields(L)(G.hmapRecord()(G.mapRecordWithIndexCons(new x.IsSymbol(function () {
        return "contactType";
      }))(G.constMapping(C.wrapField(B.newtypeInputField)))(G.mapRecordWithIndexCons(new x.IsSymbol(function () {
        return "email1";
      }))(G.constMapping(C.wrapField(B.newtypeInputField)))(G.mapRecordWithIndexNil)()())()()))(P(a))))(function (d) {
        return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([M(D.initFormState()(H.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
          return "contactType";
        }))()(H.inputFieldsToFormFieldsCons(new x.IsSymbol(function () {
          return "email1";
        }))()(H.inputFieldsToFormFieldsNil)())())(L)(L)(d)(R)), y.foldMap(y.foldableMaybe)(b.widgetMonoid(z.monoidArray))(A.contactWidg)(a)]))(function (a) {
          return g.pure(b.widgetApplicative)(c(new p.Just(a)));
        });
      }));
    };

    return D["labelSig'"](function (a) {
      return function (b) {
        return e["h2'"](a)(b);
      };
    })("Institution Contact")([K.institutionContact])(c(a));
  };
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionPolicy"] = a["Metajelo.Forms.InstitutionPolicy"] || {};

  var d = a["Metajelo.Forms.InstitutionPolicy"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      g = a["Control.Applicative"],
      l = a["Control.Bind"],
      m = a["Data.Either"],
      r = a["Data.Enum"],
      n = a["Data.Eq"],
      y = a["Data.Foldable"],
      t = a["Data.Functor"],
      p = a["Data.Maybe"],
      z = a["Data.Monoid"],
      w = a["Data.Show"],
      x = a["Data.String.NonEmpty.Internal"],
      u = a["Data.Symbol"],
      H = a["Effect.Class"],
      q = a["Effect.Class.Console"],
      E = a["Formless.Component"],
      C = a["Formless.Internal.Transform"],
      I = a["Formless.Query"],
      B = a["Formless.Retrieve"],
      G = a["Formless.Transform.Record"],
      D = a["Formless.Transform.Row"],
      F = a["Formless.Types.Form"],
      K = a["Formless.Validation"],
      v = a["Heterogeneous.Mapping"],
      A = a["Metajelo.FormUtil"],
      J = a["Metajelo.Types"],
      R = a["Metajelo.UI.CSS.ClassProps"],
      N = a["Metajelo.Validation"],
      L = a["Metajelo.View"],
      S = a["Text.URL.Validate"],
      P = function P(a) {
    return function (a) {
      return function (b) {
        return D.mkSProxies()(a)(b)(F.FormProxy.value);
      };
    };
  },
      M = new a["Data.Newtype"].Newtype(function (a) {
    return a;
  }, function (a) {
    return a;
  }),
      W = function W(a) {
    return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([e.text(k.widgetLiftWidget)("Policy: "), A.menu(new u.IsSymbol(function () {
      return "polPolType";
    }))(A.isOptionPolPolType)(A.boundedEnumPolPolType)(M)()(M)()(a.form)(P()(M)(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).polPolType)]), e.input(k.widgetLiftWidget)([c.defaultValue(B.getInput(new u.IsSymbol(function () {
      return "policy";
    }))(M)()(P()(M)(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).policy)(a.form)), t.map(h.functorProps)(function () {
      var a = I.setValidate(new u.IsSymbol(function () {
        return "policy";
      }))(M)()(P()(M)(D.makeSProxiesCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
        return "policy";
      }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(D.makeSProxiesNil))))).policy);
      return function (b) {
        return a(c.unsafeTargetValue(b));
      };
    }())(c.onChange)]), A.errorDisplay(N.toTextString)(B.getError(new u.IsSymbol(function () {
      return "policy";
    }))(M)()(P()(M)(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).policy)(a.form)), e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([e.text(k.widgetLiftWidget)("Policy type: "), A.menu(new u.IsSymbol(function () {
      return "policyType";
    }))(A.isOptionMaybePolicyType)(r.boundedEnumMaybe(J.smallBoundedPolicyType)(J.boundedEnumPolicyType))(M)()(M)()(a.form)(P()(M)(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).policyType)]), e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([e.text(k.widgetLiftWidget)("Applies to product? "), A.menu(new u.IsSymbol(function () {
      return "appliesToProd";
    }))(A.isOptionMaybeBoolean)(r.boundedEnumMaybe(r.smallBoundedBoolean)(r.boundedEnumBoolean))(M)()(M)()(a.form)(P()(M)(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "appliesToProd";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "polPolType";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policy";
    }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
      return "policyType";
    }))()(D.makeSProxiesNil))))).appliesToProd)]), e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([t.voidRight(b.widgetFunctor)(I.submit)(A.formSaveButton(a))])]))(function (c) {
      return l.bind(b.widgetBind)(E.eval()()(n.eqRowCons(n.eqRowCons(n.eqRowCons(n.eqRowCons(n.eqRowNil)()(new u.IsSymbol(function () {
        return "policyType";
      }))(F.eqInputField(p.eqMaybe(J.eqPolicyType))))()(new u.IsSymbol(function () {
        return "policy";
      }))(F.eqInputField(n.eqString)))()(new u.IsSymbol(function () {
        return "polPolType";
      }))(F.eqInputField(A.eqPolPolType)))()(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(F.eqInputField(p.eqMaybe(n.eqBoolean))))(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "policy";
      }))()(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(C.inputFieldsToFormFieldsNil)())())())())(C.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(C.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "policy";
      }))()(C.inputFieldsToInputCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(C.inputFieldsToInputNil)())())())())(C.consCountErrors(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.consCountErrors(new u.IsSymbol(function () {
        return "polPolType";
      }))()(C.consCountErrors(new u.IsSymbol(function () {
        return "policy";
      }))()(C.consCountErrors(new u.IsSymbol(function () {
        return "policyType";
      }))()(C.nilCountErrors)))))(C.consAllTouched(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.consAllTouched(new u.IsSymbol(function () {
        return "polPolType";
      }))()(C.consAllTouched(new u.IsSymbol(function () {
        return "policy";
      }))()(C.consAllTouched(new u.IsSymbol(function () {
        return "policyType";
      }))()(C.nilAllTouched)))))(C.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(C.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "policy";
      }))()(C.setFormFieldsTouchedCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(C.setFormFieldsTouchedNil)())())())())(C.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "policy";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedCons(new u.IsSymbol(function () {
        return "policyType";
      }))(F.newtypeInputField)(F.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedNil)))))(C.modifyAllCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(C.modifyAllCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(C.modifyAllCons(new u.IsSymbol(function () {
        return "policy";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(C.modifyAllCons(new u.IsSymbol(function () {
        return "policyType";
      }))(F.newtypeInputFunction)(F.newtypeFormField)()()()(C.modifyAllNil)))))(C.applyToValidationCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(b.widgetMonad)()(M)()()(C.applyToValidationCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(b.widgetMonad)()(M)()()(C.applyToValidationCons(new u.IsSymbol(function () {
        return "policy";
      }))(b.widgetMonad)()(M)()()(C.applyToValidationCons(new u.IsSymbol(function () {
        return "policyType";
      }))(b.widgetMonad)()(M)()()(C.applyToValidationNil(b.widgetMonad))))))(C.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "polPolType";
      }))()(C.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "policy";
      }))()(C.formFieldsToMaybeOutputCons(new u.IsSymbol(function () {
        return "policyType";
      }))()(C.formFieldsToMaybeOutputNil)())())())())(M)(M)(M)(M)(M)(M)(M)(M)(b.widgetMonad)(c)(a))(function (a) {
        if (a instanceof m.Left) return W(a.value0);
        if (a instanceof m.Right) return a = G.unwrapOutputFields(M)(v.hmapRecord()(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "appliesToProd";
        }))(v.constMapping(G.unwrapField(F.newtypeOutputField)))(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "polPolType";
        }))(v.constMapping(G.unwrapField(F.newtypeOutputField)))(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "policy";
        }))(v.constMapping(G.unwrapField(F.newtypeOutputField)))(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
          return "policyType";
        }))(v.constMapping(G.unwrapField(F.newtypeOutputField)))(v.mapRecordWithIndexNil)()())()())()())()()))(a.value0), g.pure(b.widgetApplicative)({
          policy: a.policy,
          policyType: a.policyType,
          appliesToProduct: a.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 102, column 3 - line 110, column 8): " + [a.constructor.name]);
      });
    });
  },
      Q = {
    polPolType: A.FreeTextPolicy.value,
    policy: "",
    policyType: p.Nothing.value,
    appliesToProd: p.Nothing.value
  },
      O = function O(a) {
    if (a instanceof p.Nothing) return Q;

    if (a instanceof p.Just) {
      var b = a.value0.policy;
      if (b instanceof J.FreeTextPolicy) b = A.FreeTextPolicy.value;else if (b instanceof J.RefPolicy) b = A.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 62, column 1 - line 62, column 38): " + [b.constructor.name]);
      var c = a.value0.policy;
      if (c instanceof J.FreeTextPolicy) c = x.toString(c.value0);else if (c instanceof J.RefPolicy) c = S.urlToString(c.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 66, column 1 - line 66, column 36): " + [c.constructor.name]);
      return {
        polPolType: b,
        policy: c,
        policyType: a.value0.policyType,
        appliesToProd: a.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 70, column 1 - line 70, column 56): " + [a.constructor.name]);
  },
      T = {
    polPolType: N.dummy(b.widgetMonad),
    policy: function (a) {
      return K.hoistFnE(a)(function (a) {
        return function (b) {
          var c = B.getInput(new u.IsSymbol(function () {
            return "polPolType";
          }))(M)()(P()(M)(D.makeSProxiesCons(new u.IsSymbol(function () {
            return "appliesToProd";
          }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
            return "polPolType";
          }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
            return "policy";
          }))()(D.makeSProxiesCons(new u.IsSymbol(function () {
            return "policyType";
          }))()(D.makeSProxiesNil))))).polPolType)(a);
          if (c instanceof A.FreeTextPolicy) return t.mapFlipped(m.functorEither)(N.readNEStringEi(b))(J.FreeTextPolicy.create);
          if (c instanceof A.RefPolicy) return t.mapFlipped(m.functorEither)(S.parsePublicURL(b))(J.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 129, column 6 - line 131, column 54): " + [c.constructor.name]);
        };
      });
    }(b.widgetMonad),
    policyType: N.dummy(b.widgetMonad),
    appliesToProd: N.dummy(b.widgetMonad)
  },
      U = function U(a) {
    var c = function c(a) {
      return f.step(a)(l.bind(b.widgetBind)(g.pure(b.widgetApplicative)(G.wrapInputFields(M)(v.hmapRecord()(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "appliesToProd";
      }))(v.constMapping(G.wrapField(F.newtypeInputField)))(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "polPolType";
      }))(v.constMapping(G.wrapField(F.newtypeInputField)))(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "policy";
      }))(v.constMapping(G.wrapField(F.newtypeInputField)))(v.mapRecordWithIndexCons(new u.IsSymbol(function () {
        return "policyType";
      }))(v.constMapping(G.wrapField(F.newtypeInputField)))(v.mapRecordWithIndexNil)()())()())()())()()))(O(a))))(function (d) {
        return l.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(z.monoidArray))(b.widgetShiftMap)([W(A.initFormState()(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "appliesToProd";
        }))()(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "polPolType";
        }))()(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "policy";
        }))()(C.inputFieldsToFormFieldsCons(new u.IsSymbol(function () {
          return "policyType";
        }))()(C.inputFieldsToFormFieldsNil)())())())())(M)(M)(d)(T)), y.foldMap(y.foldableMaybe)(b.widgetMonoid(z.monoidArray))(L.ipolicyWidg)(a)]))(function (a) {
          return l.discard(l.discardUnit)(b.widgetBind)(H.liftEffect(b.widgetMonadEff(z.monoidArray))(q.logShow(H.monadEffectEffect)(w.showRecord()(w.showRecordFieldsCons(new u.IsSymbol(function () {
            return "appliesToProduct";
          }))(w.showRecordFieldsCons(new u.IsSymbol(function () {
            return "policy";
          }))(w.showRecordFieldsCons(new u.IsSymbol(function () {
            return "policyType";
          }))(w.showRecordFieldsNil)(p.showMaybe(J.showPolicyType)))(J.showPolicy))(p.showMaybe(w.showBoolean))))(a)))(function () {
            return g.pure(b.widgetApplicative)(c(new p.Just(a)));
          });
        });
      }));
    };

    return A["labelSig'"](function (a) {
      return function (b) {
        return e["h3'"](a)(b);
      };
    })("Institution Policy")([R.institutionPolicy])(c(a));
  };

  d.policySigArray = function (a) {
    return A["labelSig'"](function (a) {
      return function (b) {
        return e["h2'"](a)(b);
      };
    })("Institution Policies")([R.institutionPolicies])(A.nonEmptyArrayView(U)(a));
  };
})(PS);

(function (a) {
  a.pickFn = function (a, f) {
    for (var d = {}, h = 0; h < a.length; h++) {
      "undefined" !== typeof f[a[h]] && (d[a[h]] = f[a[h]]);
    }

    return d;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var d = a["Record.Extra"],
      f = a["Data.List.Types"],
      k = a["Data.Monoid"],
      h = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(a) {
    this.keysImpl = a;
  };

  a = new e(function (a) {
    return k.mempty(f.monoidList);
  });

  d.keys = function (a) {
    return function (a) {
      return function (c) {
        return (0, a.keysImpl)(b.RLProxy.value);
      };
    };
  };

  d.nilKeys = a;

  d.consKeys = function (a) {
    return function (c) {
      return new e(function (d) {
        d = (0, c.keysImpl)(b.RLProxy.value);
        var e = h.reflectSymbol(a)(h.SProxy.value);
        return new f.Cons(e, d);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var d = function () {
    function a() {}

    a.value = new a();
    return a;
  }();

  a.RProxy = d;
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var d = a.Option,
      f = a.Option,
      k = a["Control.Monad.State.Class"],
      h = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      e = a["Data.Function.Uncurried"],
      c = a["Data.Identity"],
      g = a["Data.List.Types"],
      l = a["Data.Maybe"],
      m = a["Data.Symbol"],
      r = a["Foreign.Object"],
      n = a.Record,
      y = a["Record.Extra"],
      t = a["Type.Data.Row"],
      p = function () {
    function a() {}

    a.value = new a();
    return a;
  }(),
      z = function z(a) {
    this.getAllOption = a;
  },
      w = function w(a) {
    this["getAll'"] = a;
  },
      x = function x(a) {
    return function (a) {
      return function (a) {
        a = b.fromFoldable(g.foldableList)(y.keys()(a)(t.RProxy.value));
        return e.runFn2(f.pickFn)(a);
      };
    };
  };

  a = new z(function (a) {
    return function (a) {
      return new l.Just({});
    };
  });

  var u = function u(a) {
    return function (b) {
      return function (c) {
        return function (c) {
          var d = m.reflectSymbol(a)(m.SProxy.value),
              e = r.alter(function (a) {
            return b(a);
          })(d)(c);
          c = b(r.lookup(d)(c));
          return {
            option: e,
            value: c
          };
        };
      };
    };
  },
      H = function H(a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (c) {
            return u(a)(function (a) {
              return l.Nothing.value;
            })(b)(c).option;
          };
        };
      };
    };
  },
      q = function q(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return u(a)(function (a) {
            return a;
          })(b)(c).value;
        };
      };
    };
  },
      E = function E(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            return u(a)(function (a) {
              return new l.Just(c);
            })(b)(d).option;
          };
        };
      };
    };
  },
      C = function C(a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            if (c instanceof l.Just) return E(a)()(b)(c.value0)(d);
            if (c instanceof l.Nothing) return d;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [c.constructor.name]);
          };
        };
      };
    };
  };

  d.empty = r.empty;
  d.get = q;

  d.getAll = function (a) {
    return a["getAll'"];
  };

  d.getSubset = function (a) {
    return function (a) {
      return function (a) {
        return function (b) {
          return function (c) {
            return (0, b["getAll'"])(x()()(a)(c));
          };
        };
      };
    };
  };

  d.getWithDefault = function (a) {
    return function (b) {
      return function (b) {
        return function (c) {
          return function (d) {
            d = q(a)()(c)(d);
            if (d instanceof l.Just) return d.value0;
            if (d instanceof l.Nothing) return b;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [d.constructor.name]);
          };
        };
      };
    };
  };

  d.maySetOptState = function (a) {
    return function (b) {
      return function (b) {
        return function (d) {
          return function (e) {
            return k.put(h.monadStateStateT(c.monadIdentity))(C(a)()(b)(d)(e));
          };
        };
      };
    };
  };

  d.getAllAny = function (a) {
    return function (a) {
      return new w((0, a.getAllOption)(p.value));
    };
  };

  d.getAllOptionNil = a;

  d.getAllOptionCons = function (a) {
    return function (b) {
      return function (b) {
        return function (b) {
          return function (b) {
            return function (b) {
              return new z(function (c) {
                return function (c) {
                  var d = H(a)()()(m.SProxy.value)(c);
                  d = (0, b.getAllOption)(p.value)(d);
                  c = q(a)()(m.SProxy.value)(c);

                  if (d instanceof l.Just) {
                    if (c instanceof l.Just) return new l.Just(n.insert(a)()()(m.SProxy.value)(c.value0)(d.value0));
                    if (c instanceof l.Nothing) return l.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [c.constructor.name]);
                  }

                  if (d instanceof l.Nothing) return l.Nothing.value;
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

  var d = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      b = a["Concur.React.DOM"],
      e = a["Concur.React.Run"],
      c = a["Control.Applicative"],
      g = a["Control.Bind"],
      l = a["Control.Cofree"],
      m = a["Control.Monad.State"],
      r = a["Control.Monad.State.Class"],
      n = a["Control.Monad.State.Trans"],
      y = a["Data.Array.NonEmpty.Internal"],
      t = a["Data.Either"],
      p = a["Data.Foldable"],
      z = a["Data.Functor"],
      w = a["Data.Identity"],
      x = a["Data.Maybe"],
      u = a["Data.Monoid"],
      H = a["Data.String.NonEmpty.Internal"],
      q = a["Data.Symbol"],
      E = a["Data.Traversable"],
      C = a["Data.Tuple"],
      I = a["Metajelo.FormUtil"],
      B = a["Metajelo.Forms.InstitutionContact"],
      G = a["Metajelo.Forms.InstitutionPolicy"],
      D = a["Metajelo.Types"],
      F = a["Metajelo.UI.CSS.ClassProps"],
      K = a["Metajelo.View"],
      v = a.Option,
      A = a["Record.Extra"],
      J = function J(a) {
    return function (b) {
      return v.getWithDefault(a)()(v.empty);
    };
  },
      R = function R(a) {
    return I.textInput(function (a) {
      return function (c) {
        return b["h3'"](a)(c);
      };
    })("Format: ")(a);
  },
      N = function N(a) {
    return I.labelSig(b["div'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b["h2'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b.text(k.widgetLiftWidget)("Formats")]), b.text(k.widgetLiftWidget)("Technical format of the resource.Use file extension or MIME type where possible.")]))([])(I.arrayView(R)(a));
  },
      L = function L(a) {
    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h3'"](a)(c);
      };
    })("Institution Sustainability:")([F.sustainability])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.urlInput(function (a) {
      return function (c) {
        return b["span'"](a)(c);
      };
    })("Mission Statement URL: ")(v.getWithDefault(new q.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new t.Left(""))(q.SProxy.value)(a)))(function (d) {
      var e = t.hush(d);
      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.urlInput(function (a) {
        return function (c) {
          return b["span'"](a)(c);
        };
      })("Funding Statement URL: ")(v.getWithDefault(new q.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new t.Left(""))(q.SProxy.value)(a)))(function (b) {
        var f = t.hush(b);
        return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(q.SProxy.value)(new x.Just(d))))(function () {
          return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
            return "missionStatementURL";
          }))()(q.SProxy.value)(e)))(function () {
            return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(q.SProxy.value)(new x.Just(b))))(function () {
              return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(q.SProxy.value)(f));
            });
          });
        }))(a));
      });
    }));
  },
      S = function S(a) {
    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h3'"](a)(c);
      };
    })("Resource Type")([F.resourceType])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
      return function (c) {
        return b["span'"](a)(c);
      };
    })("Description: ")(g.join(x.bindMaybe)(z.map(x.functorMaybe)(H.fromString)(v.get(new q.IsSymbol(function () {
      return "description";
    }))()(q.SProxy.value)(a)))))(function (d) {
      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I["labelSig'"](function (a) {
        return function (c) {
          return b["span'"](a)(c);
        };
      })("General Type: ")([])(I.menuSignal(D.boundedEnumResourceTypeGeneral)(I.isOptionResourceTypeGeneral)(v.get(new q.IsSymbol(function () {
        return "generalType";
      }))()(q.SProxy.value)(a))))(function (b) {
        return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
          return "description";
        }))()(q.SProxy.value)(z.map(x.functorMaybe)(H.toString)(d))))(function () {
          return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
            return "generalType";
          }))()(q.SProxy.value)(b));
        }))(a));
      });
    }));
  },
      P = function P(a) {
    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h3'"](a)(c);
      };
    })("Resource Metadata Source")([F.resourceMDSource])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.urlInput(function (a) {
      return function (c) {
        return b["span'"](a)(c);
      };
    })("URL: ")(v.getWithDefault(new q.IsSymbol(function () {
      return "url_Ei";
    }))()(new t.Left(""))(q.SProxy.value)(a)))(function (d) {
      var e = t.hush(d);
      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I["labelSig'"](function (a) {
        return function (c) {
          return b["span'"](a)(c);
        };
      })("Relation Type: ")([])(I.menuSignal(D.boundedEnumRelationType)(I.isOptionRelationType)(v.get(new q.IsSymbol(function () {
        return "relationType";
      }))()(q.SProxy.value)(a))))(function (b) {
        return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
          return "url_Ei";
        }))()(q.SProxy.value)(new x.Just(d))))(function () {
          return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
            return "url";
          }))()(q.SProxy.value)(e)))(function () {
            return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
              return "relationType";
            }))()(q.SProxy.value)(b));
          });
        }))(a));
      });
    }));
  },
      M = function M(a) {
    var d = x.fromMaybe(v.empty)(a);
    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h3'"](a)(c);
      };
    })("Related Identifier: ")([F.relatedIdentifier])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
      return function (c) {
        return b["span'"](a)(c);
      };
    })("Id: ")(v.get(new q.IsSymbol(function () {
      return "id";
    }))()(q.SProxy.value)(d)))(function (a) {
      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I["labelSig'"](function (a) {
        return function (c) {
          return b["span'"](a)(c);
        };
      })("Identifier Type")([])(I.menuSignal(D.boundedEnumIdentifierType)(I.isOptionIdentifierType)(v.get(new q.IsSymbol(function () {
        return "idType";
      }))()(q.SProxy.value)(d))))(function (e) {
        return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I["labelSig'"](function (a) {
          return function (c) {
            return b["span'"](a)(c);
          };
        })("Relation Type")([])(I.menuSignal(D.boundedEnumRelationType)(I.isOptionRelationType)(v.get(new q.IsSymbol(function () {
          return "relType";
        }))()(q.SProxy.value)(d))))(function (b) {
          return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(x.Just.create(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
            return "id";
          }))()(q.SProxy.value)(a)))(function () {
            return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
              return "idType";
            }))()(q.SProxy.value)(e)))(function () {
              return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                return "relType";
              }))()(q.SProxy.value)(b));
            });
          }))(d)));
        });
      });
    }));
  },
      W = function W(a) {
    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h2'"](a)(c);
      };
    })("Related Identifiers")([F.relatedIdentifiers])(I.nonEmptyArrayView(M)(a));
  },
      Q = function Q(a) {
    return function (d) {
      return I["labelSig'"](function (a) {
        return function (c) {
          return b["h3'"](a)(c);
        };
      })(a)([F.identifier])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
        return function (c) {
          return b["span'"](a)(c);
        };
      })("Id: ")(v.get(new q.IsSymbol(function () {
        return "id";
      }))()(q.SProxy.value)(d)))(function (a) {
        return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I["labelSig'"](function (a) {
          return function (c) {
            return b["span'"](a)(c);
          };
        })("Identifier Type")([])(I.menuSignal(D.boundedEnumIdentifierType)(I.isOptionIdentifierType)(v.get(new q.IsSymbol(function () {
          return "idType";
        }))()(q.SProxy.value)(d))))(function (b) {
          return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
            return "id";
          }))()(q.SProxy.value)(a)))(function () {
            return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
              return "idType";
            }))()(q.SProxy.value)(b));
          }))(d));
        });
      }));
    };
  },
      O = function O(a) {
    var d = function d(a) {
      return b["div'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b["h3'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b.text(k.widgetLiftWidget)("Location preview:")]), b["br'"](k.widgetLiftWidget), p.foldMap(p.foldableMaybe)(h.widgetMonoid(u.monoidArray))(function (a) {
        return p.fold(p.foldableArray)(h.widgetMonoid(u.monoidArray))(K.spacify(K.locElems(a)));
      })(a)]);
    },
        e = x.fromMaybe(v.empty)(a);

    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h1'"](a)(c);
      };
    })("Location")([F.location])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(Q("Identifier")(J(new q.IsSymbol(function () {
      return "institutionID_opt";
    }))()(q.SProxy.value)(e)))(function (a) {
      var p = v.getAll(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
        return "id";
      }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
        return "idType";
      }))()()()()(v.getAllOptionNil))))(a);
      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
        return function (c) {
          return b["span'"](a)(c);
        };
      })("Institution Name: ")(v.get(new q.IsSymbol(function () {
        return "institutionName";
      }))()(q.SProxy.value)(e)))(function (t) {
        return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I["labelSig'"](function (a) {
          return function (c) {
            return b["h3'"](a)(c);
          };
        })("Institution Type")([])(I.menuSignal(D.boundedEnumInstitutionType)(I.isOptionInstitutionType)(v.get(new q.IsSymbol(function () {
          return "institutionType";
        }))()(q.SProxy.value)(e))))(function (y) {
          return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(u.monoidArray)))(f.display(b["br'"](k.widgetLiftWidget)))(function () {
            return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
              return function (c) {
                return b["span'"](a)(c);
              };
            })("Super Organization (optional): ")(g.join(x.bindMaybe)(v.get(new q.IsSymbol(function () {
              return "superOrganizationName";
            }))()(q.SProxy.value)(e))))(function (k) {
              return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(B.contactSignal(v.get(new q.IsSymbol(function () {
                return "institutionContact";
              }))()(q.SProxy.value)(e)))(function (z) {
                return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(L(J(new q.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(q.SProxy.value)(e)))(function (B) {
                  var D = v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(A.consKeys(new q.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(A.nilKeys)))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(v.getAllOptionNil))))(B);
                  return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(G.policySigArray(new C.Tuple(v.getWithDefault(new q.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(q.SProxy.value)(e), v.get(new q.IsSymbol(function () {
                    return "institutionPolicies";
                  }))()(q.SProxy.value)(e))))(function (E) {
                    var F = C.fst(E),
                        G = C.snd(E);
                    return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I["labelSig'"](function (a) {
                      return function (c) {
                        return b["span'"](a)(c);
                      };
                    })("versioning? ")([])(I.checkBoxS(v.getWithDefault(new q.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(q.SProxy.value)(e))))(function (b) {
                      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(q.SProxy.value)(new x.Just(a))))(function () {
                        return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                          return "institutionID";
                        }))()(q.SProxy.value)(p)))(function () {
                          return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                            return "institutionName";
                          }))()(q.SProxy.value)(t)))(function () {
                            return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                              return "institutionType";
                            }))()(q.SProxy.value)(y)))(function () {
                              return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(q.SProxy.value)(new x.Just(k))))(function () {
                                return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                  return "institutionContact";
                                }))()(q.SProxy.value)(z)))(function () {
                                  return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                    return "iSustain_opt";
                                  }))()(q.SProxy.value)(new x.Just(B))))(function () {
                                    return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                      return "institutionSustainability";
                                    }))()(q.SProxy.value)(D)))(function () {
                                      return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                        return "_numPolicies";
                                      }))()(q.SProxy.value)(new x.Just(F))))(function () {
                                        return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                          return "institutionPolicies";
                                        }))()(q.SProxy.value)(G)))(function () {
                                          return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                            return "versioning";
                                          }))()(q.SProxy.value)(new x.Just(b)));
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      }))(e)))(function (a) {
                        var b = v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
                          return "institutionContact";
                        }))(A.consKeys(new q.IsSymbol(function () {
                          return "institutionID";
                        }))(A.consKeys(new q.IsSymbol(function () {
                          return "institutionName";
                        }))(A.consKeys(new q.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(A.consKeys(new q.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(A.consKeys(new q.IsSymbol(function () {
                          return "institutionType";
                        }))(A.consKeys(new q.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(A.consKeys(new q.IsSymbol(function () {
                          return "versioning";
                        }))(A.nilKeys)))))))))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(v.getAllOptionNil))))))))))(a);
                        return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(u.monoidArray)))(f.display(d(b)))(function () {
                          return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(new x.Just(a));
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
      T = function T(a) {
    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h3'"](a)(c);
      };
    })("Basic Metadata")([F.basicMetaData])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
      return function (c) {
        return b["span'"](a)(c);
      };
    })("Title: ")(v.get(new q.IsSymbol(function () {
      return "title";
    }))()(q.SProxy.value)(a)))(function (d) {
      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
        return function (c) {
          return b["span'"](a)(c);
        };
      })("Creator: ")(v.get(new q.IsSymbol(function () {
        return "creator";
      }))()(q.SProxy.value)(a)))(function (e) {
        return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
          return function (c) {
            return b["span'"](a)(c);
          };
        })("Publication Year: ")(v.get(new q.IsSymbol(function () {
          return "publicationYear";
        }))()(q.SProxy.value)(a)))(function (b) {
          return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
            return "title";
          }))()(q.SProxy.value)(d)))(function () {
            return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
              return "creator";
            }))()(q.SProxy.value)(e)))(function () {
              return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                return "publicationYear";
              }))()(q.SProxy.value)(b));
            });
          }))(a));
        });
      });
    }));
  },
      U = function U(a) {
    var d = function d(a) {
      return b["div'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b["h3'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b.text(k.widgetLiftWidget)("Product preview:")]), b["br'"](k.widgetLiftWidget), p.fold(p.foldableMaybe)(h.widgetMonoid(u.monoidArray))(z.map(x.functorMaybe)(K.mkSupplementaryProductWidget)(a))]);
    },
        e = x.fromMaybe(v.empty)(a);

    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h1'"](a)(c);
      };
    })("Product")([F.product])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(T(J(new q.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(q.SProxy.value)(e)))(function (a) {
      var b = v.getAll(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
        return "creator";
      }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
        return "title";
      }))()()()()(v.getAllOptionNil)))))(a);
      return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(Q("Resource ID")(J(new q.IsSymbol(function () {
        return "resourceID_opt";
      }))()(q.SProxy.value)(e)))(function (k) {
        var p = v.getAll(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
          return "id";
        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
          return "idType";
        }))()()()()(v.getAllOptionNil))))(k);
        return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(S(J(new q.IsSymbol(function () {
          return "resourceType_opt";
        }))()(q.SProxy.value)(e)))(function (t) {
          var y = v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
            return "description";
          }))(A.consKeys(new q.IsSymbol(function () {
            return "generalType";
          }))(A.nilKeys)))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
            return "description";
          }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
            return "generalType";
          }))()()()()(v.getAllOptionNil))))(t);
          return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(N(new C.Tuple(v.getWithDefault(new q.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(q.SProxy.value)(e), v.getWithDefault(new q.IsSymbol(function () {
            return "format";
          }))()([])(q.SProxy.value)(e))))(function (B) {
            var D = C.fst(B),
                E = C.snd(B);
            return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(P(J(new q.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(q.SProxy.value)(e)))(function (B) {
              var C = v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
                return "relationType";
              }))(A.consKeys(new q.IsSymbol(function () {
                return "url";
              }))(A.nilKeys)))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "relationType";
              }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "url";
              }))()()()()(v.getAllOptionNil))))(B);
              return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(O(v.get(new q.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(q.SProxy.value)(e)))(function (F) {
                var G = g.join(x.bindMaybe)(z.map(x.functorMaybe)(v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
                  return "institutionContact";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "institutionID";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "institutionName";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "institutionPolicies";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "institutionSustainability";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "institutionType";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "superOrganizationName";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "versioning";
                }))(A.nilKeys)))))))))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "versioning";
                }))()()()()(v.getAllOptionNil)))))))))))(F));
                return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(q.SProxy.value)(new x.Just(a))))(function () {
                  return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(q.SProxy.value)(b)))(function () {
                    return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(q.SProxy.value)(new x.Just(k))))(function () {
                      return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                        return "resourceID";
                      }))()(q.SProxy.value)(new x.Just(p))))(function () {
                        return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(q.SProxy.value)(new x.Just(t))))(function () {
                          return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                            return "resourceType";
                          }))()(q.SProxy.value)(y)))(function () {
                            return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                              return "_numFormats";
                            }))()(q.SProxy.value)(new x.Just(D))))(function () {
                              return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                return "format";
                              }))()(q.SProxy.value)(new x.Just(E))))(function () {
                                return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(q.SProxy.value)(new x.Just(B))))(function () {
                                  return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(q.SProxy.value)(new x.Just(C))))(function () {
                                    return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(q.SProxy.value)(F)))(function () {
                                      return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                        return "location";
                                      }))()(q.SProxy.value)(G));
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
                }))(e)))(function (a) {
                  var b = v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
                    return "basicMetadata";
                  }))(A.consKeys(new q.IsSymbol(function () {
                    return "format";
                  }))(A.consKeys(new q.IsSymbol(function () {
                    return "location";
                  }))(A.consKeys(new q.IsSymbol(function () {
                    return "resourceID";
                  }))(A.consKeys(new q.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(A.consKeys(new q.IsSymbol(function () {
                    return "resourceType";
                  }))(A.nilKeys)))))))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "format";
                  }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "location";
                  }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(v.getAllOptionNil))))))))(a);
                  return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(u.monoidArray)))(f.display(d(b)))(function () {
                    return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(new x.Just(a));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      aa = function aa(a) {
    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h1'"](a)(c);
      };
    })("Supplementary Products")([F.products])(I.nonEmptyArrayView(U)(a));
  };

  a = function () {
    var a = function a(_a15) {
      return b["div'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b["h3'"](h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([b.text(k.widgetLiftWidget)("Metajelo Record preview:")]), b["br'"](k.widgetLiftWidget), p.fold(p.foldableMaybe)(h.widgetMonoid(u.monoidArray))(z.map(x.functorMaybe)(K.mkRecordWidget)(_a15))]);
    };

    return I["labelSig'"](function (a) {
      return function (c) {
        return b["h1'"](a)(c);
      };
    })("Metajelo Record Form")([F.record])(f.loopS(u.monoidArray)(v.empty)(function (d) {
      return b.div_(l.shiftMapCofree(u.monoidArray))([])(g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(Q("Record Identifier")(J(new q.IsSymbol(function () {
        return "identifier_opt";
      }))()(q.SProxy.value)(d)))(function (e) {
        var k = v.getAll(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
          return "id";
        }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
          return "idType";
        }))()()()()(v.getAllOptionNil))))(e);
        return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(I.textInput(function (a) {
          return function (c) {
            return b["span'"](a)(c);
          };
        })("Original creation date of this metadata record: ")(v.get(new q.IsSymbol(function () {
          return "date";
        }))()(q.SProxy.value)(d)))(function (b) {
          var p = I.formatXsdDate(I.initDate),
              B = t.hush(p);
          return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(W(new C.Tuple(v.getWithDefault(new q.IsSymbol(function () {
            return "_numRelIds";
          }))()(0)(q.SProxy.value)(d), v.get(new q.IsSymbol(function () {
            return "relId_opts";
          }))()(q.SProxy.value)(d))))(function (p) {
            var t = C.fst(p),
                D = C.snd(p),
                F = g.join(x.bindMaybe)(z.map(x.functorMaybe)(E.sequence(y.traversableNonEmptyArray)(x.applicativeMaybe))(z.map(x.functorMaybe)(z.map(y.functorNonEmptyArray)(v.getAll(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
              return "id";
            }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
              return "idType";
            }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
              return "relType";
            }))()()()()(v.getAllOptionNil)))))))(D)));
            return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(aa(new C.Tuple(v.getWithDefault(new q.IsSymbol(function () {
              return "_numSupProds";
            }))()(0)(q.SProxy.value)(d), v.get(new q.IsSymbol(function () {
              return "supProd_opts";
            }))()(q.SProxy.value)(d))))(function (p) {
              var G = C.fst(p),
                  H = C.snd(p),
                  I = g.join(x.bindMaybe)(z.map(x.functorMaybe)(E.sequence(y.traversableNonEmptyArray)(x.applicativeMaybe))(z.map(x.functorMaybe)(z.map(y.functorNonEmptyArray)(v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
                return "basicMetadata";
              }))(A.consKeys(new q.IsSymbol(function () {
                return "format";
              }))(A.consKeys(new q.IsSymbol(function () {
                return "location";
              }))(A.consKeys(new q.IsSymbol(function () {
                return "resourceID";
              }))(A.consKeys(new q.IsSymbol(function () {
                return "resourceMetadataSource";
              }))(A.consKeys(new q.IsSymbol(function () {
                return "resourceType";
              }))(A.nilKeys)))))))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "basicMetadata";
              }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "format";
              }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "location";
              }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "resourceID";
              }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "resourceMetadataSource";
              }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                return "resourceType";
              }))()()()()(v.getAllOptionNil))))))))))(H)));
              return g.bind(l.bindCofree(h.widgetAlternative(u.monoidArray)))(c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(m.execState(g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                return "identifier_opt";
              }))()(q.SProxy.value)(new x.Just(e))))(function () {
                return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                  return "identifier";
                }))()(q.SProxy.value)(k)))(function () {
                  return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                    return "date";
                  }))()(q.SProxy.value)(b)))(function () {
                    return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                      return "lastModified";
                    }))()(q.SProxy.value)(B)))(function () {
                      return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                        return "_numRelIds";
                      }))()(q.SProxy.value)(new x.Just(t))))(function () {
                        return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                          return "relId_opts";
                        }))()(q.SProxy.value)(D)))(function () {
                          return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                            return "relatedIdentifiers";
                          }))()(q.SProxy.value)(F)))(function () {
                            return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                              return "_numSupProds";
                            }))()(q.SProxy.value)(new x.Just(G))))(function () {
                              return g.discard(g.discardUnit)(n.bindStateT(w.monadIdentity))(g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                return "supProd_opts";
                              }))()(q.SProxy.value)(H)))(function () {
                                return g.bind(n.bindStateT(w.monadIdentity))(r.get(n.monadStateStateT(w.monadIdentity)))(v.maySetOptState(new q.IsSymbol(function () {
                                  return "supplementaryProducts";
                                }))()(q.SProxy.value)(I));
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              }))(d)))(function (b) {
                var d = v.getSubset()()(A.consKeys(new q.IsSymbol(function () {
                  return "date";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "identifier";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "lastModified";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))(A.consKeys(new q.IsSymbol(function () {
                  return "supplementaryProducts";
                }))(A.nilKeys))))))(v.getAllAny()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "date";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "identifier";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "lastModified";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))()()()()(v.getAllOptionCons(new q.IsSymbol(function () {
                  return "supplementaryProducts";
                }))()()()()(v.getAllOptionNil)))))))(b);
                return g.discard(g.discardUnit)(l.bindCofree(h.widgetAlternative(u.monoidArray)))(f.display(a(d)))(function () {
                  return c.pure(l.applicativeCofree(h.widgetAlternative(u.monoidArray)))(b);
                });
              });
            });
          });
        });
      }));
    }));
  }();

  var Z = b.div(h.widgetMultiAlternative(u.monoidArray))(h.widgetShiftMap)([F.page])(c.pure(c.applicativeArray)(f.dyn(a)));

  d.runFormSPA = function (a) {
    return e.runWidgetInDom(a)(Z);
  };

  d.page = Z;
  d.accumulateMetajeloRecord = a;
  d.accumulateSuppProd = U;
  d.supProdSigArray = aa;
  d.accumulateLocation = O;
  d.accumulateSustain = L;
  d.accumulateIdent = Q;
  d.accumulateRelatedIdent = M;
  d.relIdSigArray = W;
  d.accumulateBasicMetaData = T;
  d.accumulateResType = S;
  d.formatSignal = R;
  d.formatSigArray = N;
  d.accumulateResMdSource = P;
  d.getOpt = J;
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
//# sourceMappingURL=prod.fc372854.js.map