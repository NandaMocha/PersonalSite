(function() {
    const b = document.createElement("link").relList;
    if (b && b.supports && b.supports("modulepreload"))
        return;
    for (const S of document.querySelectorAll('link[rel="modulepreload"]'))
        r(S);
    new MutationObserver(S => {
        for (const w of S)
            if (w.type === "childList")
                for (const H of w.addedNodes)
                    H.tagName === "LINK" && H.rel === "modulepreload" && r(H)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function T(S) {
        const w = {};
        return S.integrity && (w.integrity = S.integrity),
        S.referrerPolicy && (w.referrerPolicy = S.referrerPolicy),
        S.crossOrigin === "use-credentials" ? w.credentials = "include" : S.crossOrigin === "anonymous" ? w.credentials = "omit" : w.credentials = "same-origin",
        w
    }
    function r(S) {
        if (S.ep)
            return;
        S.ep = !0;
        const w = T(S);
        fetch(S.href, w)
    }
}
)();
function Wh(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f
}
var es = {
    exports: {}
}
  , bn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function Fh() {
    if (ud)
        return bn;
    ud = 1;
    var f = Symbol.for("react.transitional.element")
      , b = Symbol.for("react.fragment");
    function T(r, S, w) {
        var H = null;
        if (w !== void 0 && (H = "" + w),
        S.key !== void 0 && (H = "" + S.key),
        "key"in S) {
            w = {};
            for (var q in S)
                q !== "key" && (w[q] = S[q])
        } else
            w = S;
        return S = w.ref,
        {
            $$typeof: f,
            type: r,
            key: H,
            ref: S !== void 0 ? S : null,
            props: w
        }
    }
    return bn.Fragment = b,
    bn.jsx = T,
    bn.jsxs = T,
    bn
}
var cd;
function Ih() {
    return cd || (cd = 1,
    es.exports = Fh()),
    es.exports
}
var u = Ih()
  , ts = {
    exports: {}
}
  , Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function Ph() {
    if (sd)
        return Q;
    sd = 1;
    var f = Symbol.for("react.transitional.element")
      , b = Symbol.for("react.portal")
      , T = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , S = Symbol.for("react.profiler")
      , w = Symbol.for("react.consumer")
      , H = Symbol.for("react.context")
      , q = Symbol.for("react.forward_ref")
      , M = Symbol.for("react.suspense")
      , x = Symbol.for("react.memo")
      , D = Symbol.for("react.lazy")
      , W = Symbol.iterator;
    function B(d) {
        return d === null || typeof d != "object" ? null : (d = W && d[W] || d["@@iterator"],
        typeof d == "function" ? d : null)
    }
    var fe = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Be = Object.assign
      , pt = {};
    function Ge(d, E, C) {
        this.props = d,
        this.context = E,
        this.refs = pt,
        this.updater = C || fe
    }
    Ge.prototype.isReactComponent = {},
    Ge.prototype.setState = function(d, E) {
        if (typeof d != "object" && typeof d != "function" && d != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, E, "setState")
    }
    ,
    Ge.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    }
    ;
    function pl() {}
    pl.prototype = Ge.prototype;
    function Tt(d, E, C) {
        this.props = d,
        this.context = E,
        this.refs = pt,
        this.updater = C || fe
    }
    var ze = Tt.prototype = new pl;
    ze.constructor = Tt,
    Be(ze, Ge.prototype),
    ze.isPureReactComponent = !0;
    var gt = Array.isArray
      , I = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , Ke = Object.prototype.hasOwnProperty;
    function Je(d, E, C, O, k, P) {
        return C = P.ref,
        {
            $$typeof: f,
            type: d,
            key: E,
            ref: C !== void 0 ? C : null,
            props: P
        }
    }
    function $e(d, E) {
        return Je(d.type, E, void 0, void 0, void 0, d.props)
    }
    function bt(d) {
        return typeof d == "object" && d !== null && d.$$typeof === f
    }
    function Hl(d) {
        var E = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + d.replace(/[=:]/g, function(C) {
            return E[C]
        })
    }
    var Et = /\/+/g;
    function Ce(d, E) {
        return typeof d == "object" && d !== null && d.key != null ? Hl("" + d.key) : E.toString(36)
    }
    function gl() {}
    function yl(d) {
        switch (d.status) {
        case "fulfilled":
            return d.value;
        case "rejected":
            throw d.reason;
        default:
            switch (typeof d.status == "string" ? d.then(gl, gl) : (d.status = "pending",
            d.then(function(E) {
                d.status === "pending" && (d.status = "fulfilled",
                d.value = E)
            }, function(E) {
                d.status === "pending" && (d.status = "rejected",
                d.reason = E)
            })),
            d.status) {
            case "fulfilled":
                return d.value;
            case "rejected":
                throw d.reason
            }
        }
        throw d
    }
    function Re(d, E, C, O, k) {
        var P = typeof d;
        (P === "undefined" || P === "boolean") && (d = null);
        var V = !1;
        if (d === null)
            V = !0;
        else
            switch (P) {
            case "bigint":
            case "string":
            case "number":
                V = !0;
                break;
            case "object":
                switch (d.$$typeof) {
                case f:
                case b:
                    V = !0;
                    break;
                case D:
                    return V = d._init,
                    Re(V(d._payload), E, C, O, k)
                }
            }
        if (V)
            return k = k(d),
            V = O === "" ? "." + Ce(d, 0) : O,
            gt(k) ? (C = "",
            V != null && (C = V.replace(Et, "$&/") + "/"),
            Re(k, E, C, "", function(Vt) {
                return Vt
            })) : k != null && (bt(k) && (k = $e(k, C + (k.key == null || d && d.key === k.key ? "" : ("" + k.key).replace(Et, "$&/") + "/") + V)),
            E.push(k)),
            1;
        V = 0;
        var We = O === "" ? "." : O + ":";
        if (gt(d))
            for (var de = 0; de < d.length; de++)
                O = d[de],
                P = We + Ce(O, de),
                V += Re(O, E, C, P, k);
        else if (de = B(d),
        typeof de == "function")
            for (d = de.call(d),
            de = 0; !(O = d.next()).done; )
                O = O.value,
                P = We + Ce(O, de++),
                V += Re(O, E, C, P, k);
        else if (P === "object") {
            if (typeof d.then == "function")
                return Re(yl(d), E, C, O, k);
            throw E = String(d),
            Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.")
        }
        return V
    }
    function j(d, E, C) {
        if (d == null)
            return d;
        var O = []
          , k = 0;
        return Re(d, O, "", "", function(P) {
            return E.call(C, P, k++)
        }),
        O
    }
    function z(d) {
        if (d._status === -1) {
            var E = d._result;
            E = E(),
            E.then(function(C) {
                (d._status === 0 || d._status === -1) && (d._status = 1,
                d._result = C)
            }, function(C) {
                (d._status === 0 || d._status === -1) && (d._status = 2,
                d._result = C)
            }),
            d._status === -1 && (d._status = 0,
            d._result = E)
        }
        if (d._status === 1)
            return d._result.default;
        throw d._result
    }
    var L = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var E = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                error: d
            });
            if (!window.dispatchEvent(E))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", d);
            return
        }
        console.error(d)
    }
    ;
    function se() {}
    return Q.Children = {
        map: j,
        forEach: function(d, E, C) {
            j(d, function() {
                E.apply(this, arguments)
            }, C)
        },
        count: function(d) {
            var E = 0;
            return j(d, function() {
                E++
            }),
            E
        },
        toArray: function(d) {
            return j(d, function(E) {
                return E
            }) || []
        },
        only: function(d) {
            if (!bt(d))
                throw Error("React.Children.only expected to receive a single React element child.");
            return d
        }
    },
    Q.Component = Ge,
    Q.Fragment = T,
    Q.Profiler = S,
    Q.PureComponent = Tt,
    Q.StrictMode = r,
    Q.Suspense = M,
    Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I,
    Q.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(d) {
            return I.H.useMemoCache(d)
        }
    },
    Q.cache = function(d) {
        return function() {
            return d.apply(null, arguments)
        }
    }
    ,
    Q.cloneElement = function(d, E, C) {
        if (d == null)
            throw Error("The argument must be a React element, but you passed " + d + ".");
        var O = Be({}, d.props)
          , k = d.key
          , P = void 0;
        if (E != null)
            for (V in E.ref !== void 0 && (P = void 0),
            E.key !== void 0 && (k = "" + E.key),
            E)
                !Ke.call(E, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && E.ref === void 0 || (O[V] = E[V]);
        var V = arguments.length - 2;
        if (V === 1)
            O.children = C;
        else if (1 < V) {
            for (var We = Array(V), de = 0; de < V; de++)
                We[de] = arguments[de + 2];
            O.children = We
        }
        return Je(d.type, k, void 0, void 0, P, O)
    }
    ,
    Q.createContext = function(d) {
        return d = {
            $$typeof: H,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        d.Provider = d,
        d.Consumer = {
            $$typeof: w,
            _context: d
        },
        d
    }
    ,
    Q.createElement = function(d, E, C) {
        var O, k = {}, P = null;
        if (E != null)
            for (O in E.key !== void 0 && (P = "" + E.key),
            E)
                Ke.call(E, O) && O !== "key" && O !== "__self" && O !== "__source" && (k[O] = E[O]);
        var V = arguments.length - 2;
        if (V === 1)
            k.children = C;
        else if (1 < V) {
            for (var We = Array(V), de = 0; de < V; de++)
                We[de] = arguments[de + 2];
            k.children = We
        }
        if (d && d.defaultProps)
            for (O in V = d.defaultProps,
            V)
                k[O] === void 0 && (k[O] = V[O]);
        return Je(d, P, void 0, void 0, null, k)
    }
    ,
    Q.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Q.forwardRef = function(d) {
        return {
            $$typeof: q,
            render: d
        }
    }
    ,
    Q.isValidElement = bt,
    Q.lazy = function(d) {
        return {
            $$typeof: D,
            _payload: {
                _status: -1,
                _result: d
            },
            _init: z
        }
    }
    ,
    Q.memo = function(d, E) {
        return {
            $$typeof: x,
            type: d,
            compare: E === void 0 ? null : E
        }
    }
    ,
    Q.startTransition = function(d) {
        var E = I.T
          , C = {};
        I.T = C;
        try {
            var O = d()
              , k = I.S;
            k !== null && k(C, O),
            typeof O == "object" && O !== null && typeof O.then == "function" && O.then(se, L)
        } catch (P) {
            L(P)
        } finally {
            I.T = E
        }
    }
    ,
    Q.unstable_useCacheRefresh = function() {
        return I.H.useCacheRefresh()
    }
    ,
    Q.use = function(d) {
        return I.H.use(d)
    }
    ,
    Q.useActionState = function(d, E, C) {
        return I.H.useActionState(d, E, C)
    }
    ,
    Q.useCallback = function(d, E) {
        return I.H.useCallback(d, E)
    }
    ,
    Q.useContext = function(d) {
        return I.H.useContext(d)
    }
    ,
    Q.useDebugValue = function() {}
    ,
    Q.useDeferredValue = function(d, E) {
        return I.H.useDeferredValue(d, E)
    }
    ,
    Q.useEffect = function(d, E, C) {
        var O = I.H;
        if (typeof C == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return O.useEffect(d, E)
    }
    ,
    Q.useId = function() {
        return I.H.useId()
    }
    ,
    Q.useImperativeHandle = function(d, E, C) {
        return I.H.useImperativeHandle(d, E, C)
    }
    ,
    Q.useInsertionEffect = function(d, E) {
        return I.H.useInsertionEffect(d, E)
    }
    ,
    Q.useLayoutEffect = function(d, E) {
        return I.H.useLayoutEffect(d, E)
    }
    ,
    Q.useMemo = function(d, E) {
        return I.H.useMemo(d, E)
    }
    ,
    Q.useOptimistic = function(d, E) {
        return I.H.useOptimistic(d, E)
    }
    ,
    Q.useReducer = function(d, E, C) {
        return I.H.useReducer(d, E, C)
    }
    ,
    Q.useRef = function(d) {
        return I.H.useRef(d)
    }
    ,
    Q.useState = function(d) {
        return I.H.useState(d)
    }
    ,
    Q.useSyncExternalStore = function(d, E, C) {
        return I.H.useSyncExternalStore(d, E, C)
    }
    ,
    Q.useTransition = function() {
        return I.H.useTransition()
    }
    ,
    Q.version = "19.1.0",
    Q
}
var od;
function cs() {
    return od || (od = 1,
    ts.exports = Ph()),
    ts.exports
}
var he = cs();
const us = Wh(he);
var ls = {
    exports: {}
}
  , Sn = {}
  , as = {
    exports: {}
}
  , ns = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd;
function ep() {
    return rd || (rd = 1,
    function(f) {
        function b(j, z) {
            var L = j.length;
            j.push(z);
            e: for (; 0 < L; ) {
                var se = L - 1 >>> 1
                  , d = j[se];
                if (0 < S(d, z))
                    j[se] = z,
                    j[L] = d,
                    L = se;
                else
                    break e
            }
        }
        function T(j) {
            return j.length === 0 ? null : j[0]
        }
        function r(j) {
            if (j.length === 0)
                return null;
            var z = j[0]
              , L = j.pop();
            if (L !== z) {
                j[0] = L;
                e: for (var se = 0, d = j.length, E = d >>> 1; se < E; ) {
                    var C = 2 * (se + 1) - 1
                      , O = j[C]
                      , k = C + 1
                      , P = j[k];
                    if (0 > S(O, L))
                        k < d && 0 > S(P, O) ? (j[se] = P,
                        j[k] = L,
                        se = k) : (j[se] = O,
                        j[C] = L,
                        se = C);
                    else if (k < d && 0 > S(P, L))
                        j[se] = P,
                        j[k] = L,
                        se = k;
                    else
                        break e
                }
            }
            return z
        }
        function S(j, z) {
            var L = j.sortIndex - z.sortIndex;
            return L !== 0 ? L : j.id - z.id
        }
        if (f.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var w = performance;
            f.unstable_now = function() {
                return w.now()
            }
        } else {
            var H = Date
              , q = H.now();
            f.unstable_now = function() {
                return H.now() - q
            }
        }
        var M = []
          , x = []
          , D = 1
          , W = null
          , B = 3
          , fe = !1
          , Be = !1
          , pt = !1
          , Ge = !1
          , pl = typeof setTimeout == "function" ? setTimeout : null
          , Tt = typeof clearTimeout == "function" ? clearTimeout : null
          , ze = typeof setImmediate < "u" ? setImmediate : null;
        function gt(j) {
            for (var z = T(x); z !== null; ) {
                if (z.callback === null)
                    r(x);
                else if (z.startTime <= j)
                    r(x),
                    z.sortIndex = z.expirationTime,
                    b(M, z);
                else
                    break;
                z = T(x)
            }
        }
        function I(j) {
            if (pt = !1,
            gt(j),
            !Be)
                if (T(M) !== null)
                    Be = !0,
                    Ke || (Ke = !0,
                    Ce());
                else {
                    var z = T(x);
                    z !== null && Re(I, z.startTime - j)
                }
        }
        var Ke = !1
          , Je = -1
          , $e = 5
          , bt = -1;
        function Hl() {
            return Ge ? !0 : !(f.unstable_now() - bt < $e)
        }
        function Et() {
            if (Ge = !1,
            Ke) {
                var j = f.unstable_now();
                bt = j;
                var z = !0;
                try {
                    e: {
                        Be = !1,
                        pt && (pt = !1,
                        Tt(Je),
                        Je = -1),
                        fe = !0;
                        var L = B;
                        try {
                            t: {
                                for (gt(j),
                                W = T(M); W !== null && !(W.expirationTime > j && Hl()); ) {
                                    var se = W.callback;
                                    if (typeof se == "function") {
                                        W.callback = null,
                                        B = W.priorityLevel;
                                        var d = se(W.expirationTime <= j);
                                        if (j = f.unstable_now(),
                                        typeof d == "function") {
                                            W.callback = d,
                                            gt(j),
                                            z = !0;
                                            break t
                                        }
                                        W === T(M) && r(M),
                                        gt(j)
                                    } else
                                        r(M);
                                    W = T(M)
                                }
                                if (W !== null)
                                    z = !0;
                                else {
                                    var E = T(x);
                                    E !== null && Re(I, E.startTime - j),
                                    z = !1
                                }
                            }
                            break e
                        } finally {
                            W = null,
                            B = L,
                            fe = !1
                        }
                        z = void 0
                    }
                } finally {
                    z ? Ce() : Ke = !1
                }
            }
        }
        var Ce;
        if (typeof ze == "function")
            Ce = function() {
                ze(Et)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var gl = new MessageChannel
              , yl = gl.port2;
            gl.port1.onmessage = Et,
            Ce = function() {
                yl.postMessage(null)
            }
        } else
            Ce = function() {
                pl(Et, 0)
            }
            ;
        function Re(j, z) {
            Je = pl(function() {
                j(f.unstable_now())
            }, z)
        }
        f.unstable_IdlePriority = 5,
        f.unstable_ImmediatePriority = 1,
        f.unstable_LowPriority = 4,
        f.unstable_NormalPriority = 3,
        f.unstable_Profiling = null,
        f.unstable_UserBlockingPriority = 2,
        f.unstable_cancelCallback = function(j) {
            j.callback = null
        }
        ,
        f.unstable_forceFrameRate = function(j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $e = 0 < j ? Math.floor(1e3 / j) : 5
        }
        ,
        f.unstable_getCurrentPriorityLevel = function() {
            return B
        }
        ,
        f.unstable_next = function(j) {
            switch (B) {
            case 1:
            case 2:
            case 3:
                var z = 3;
                break;
            default:
                z = B
            }
            var L = B;
            B = z;
            try {
                return j()
            } finally {
                B = L
            }
        }
        ,
        f.unstable_requestPaint = function() {
            Ge = !0
        }
        ,
        f.unstable_runWithPriority = function(j, z) {
            switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
            }
            var L = B;
            B = j;
            try {
                return z()
            } finally {
                B = L
            }
        }
        ,
        f.unstable_scheduleCallback = function(j, z, L) {
            var se = f.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay,
            L = typeof L == "number" && 0 < L ? se + L : se) : L = se,
            j) {
            case 1:
                var d = -1;
                break;
            case 2:
                d = 250;
                break;
            case 5:
                d = 1073741823;
                break;
            case 4:
                d = 1e4;
                break;
            default:
                d = 5e3
            }
            return d = L + d,
            j = {
                id: D++,
                callback: z,
                priorityLevel: j,
                startTime: L,
                expirationTime: d,
                sortIndex: -1
            },
            L > se ? (j.sortIndex = L,
            b(x, j),
            T(M) === null && j === T(x) && (pt ? (Tt(Je),
            Je = -1) : pt = !0,
            Re(I, L - se))) : (j.sortIndex = d,
            b(M, j),
            Be || fe || (Be = !0,
            Ke || (Ke = !0,
            Ce()))),
            j
        }
        ,
        f.unstable_shouldYield = Hl,
        f.unstable_wrapCallback = function(j) {
            var z = B;
            return function() {
                var L = B;
                B = z;
                try {
                    return j.apply(this, arguments)
                } finally {
                    B = L
                }
            }
        }
    }(ns)),
    ns
}
var fd;
function tp() {
    return fd || (fd = 1,
    as.exports = ep()),
    as.exports
}
var is = {
    exports: {}
}
  , qe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dd;
function lp() {
    if (dd)
        return qe;
    dd = 1;
    var f = cs();
    function b(M) {
        var x = "https://react.dev/errors/" + M;
        if (1 < arguments.length) {
            x += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var D = 2; D < arguments.length; D++)
                x += "&args[]=" + encodeURIComponent(arguments[D])
        }
        return "Minified React error #" + M + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function T() {}
    var r = {
        d: {
            f: T,
            r: function() {
                throw Error(b(522))
            },
            D: T,
            C: T,
            L: T,
            m: T,
            X: T,
            S: T,
            M: T
        },
        p: 0,
        findDOMNode: null
    }
      , S = Symbol.for("react.portal");
    function w(M, x, D) {
        var W = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: S,
            key: W == null ? null : "" + W,
            children: M,
            containerInfo: x,
            implementation: D
        }
    }
    var H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function q(M, x) {
        if (M === "font")
            return "";
        if (typeof x == "string")
            return x === "use-credentials" ? x : ""
    }
    return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    qe.createPortal = function(M, x) {
        var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)
            throw Error(b(299));
        return w(M, x, null, D)
    }
    ,
    qe.flushSync = function(M) {
        var x = H.T
          , D = r.p;
        try {
            if (H.T = null,
            r.p = 2,
            M)
                return M()
        } finally {
            H.T = x,
            r.p = D,
            r.d.f()
        }
    }
    ,
    qe.preconnect = function(M, x) {
        typeof M == "string" && (x ? (x = x.crossOrigin,
        x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null,
        r.d.C(M, x))
    }
    ,
    qe.prefetchDNS = function(M) {
        typeof M == "string" && r.d.D(M)
    }
    ,
    qe.preinit = function(M, x) {
        if (typeof M == "string" && x && typeof x.as == "string") {
            var D = x.as
              , W = q(D, x.crossOrigin)
              , B = typeof x.integrity == "string" ? x.integrity : void 0
              , fe = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
            D === "style" ? r.d.S(M, typeof x.precedence == "string" ? x.precedence : void 0, {
                crossOrigin: W,
                integrity: B,
                fetchPriority: fe
            }) : D === "script" && r.d.X(M, {
                crossOrigin: W,
                integrity: B,
                fetchPriority: fe,
                nonce: typeof x.nonce == "string" ? x.nonce : void 0
            })
        }
    }
    ,
    qe.preinitModule = function(M, x) {
        if (typeof M == "string")
            if (typeof x == "object" && x !== null) {
                if (x.as == null || x.as === "script") {
                    var D = q(x.as, x.crossOrigin);
                    r.d.M(M, {
                        crossOrigin: D,
                        integrity: typeof x.integrity == "string" ? x.integrity : void 0,
                        nonce: typeof x.nonce == "string" ? x.nonce : void 0
                    })
                }
            } else
                x == null && r.d.M(M)
    }
    ,
    qe.preload = function(M, x) {
        if (typeof M == "string" && typeof x == "object" && x !== null && typeof x.as == "string") {
            var D = x.as
              , W = q(D, x.crossOrigin);
            r.d.L(M, D, {
                crossOrigin: W,
                integrity: typeof x.integrity == "string" ? x.integrity : void 0,
                nonce: typeof x.nonce == "string" ? x.nonce : void 0,
                type: typeof x.type == "string" ? x.type : void 0,
                fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
                referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
                imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
                imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
                media: typeof x.media == "string" ? x.media : void 0
            })
        }
    }
    ,
    qe.preloadModule = function(M, x) {
        if (typeof M == "string")
            if (x) {
                var D = q(x.as, x.crossOrigin);
                r.d.m(M, {
                    as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
                    crossOrigin: D,
                    integrity: typeof x.integrity == "string" ? x.integrity : void 0
                })
            } else
                r.d.m(M)
    }
    ,
    qe.requestFormReset = function(M) {
        r.d.r(M)
    }
    ,
    qe.unstable_batchedUpdates = function(M, x) {
        return M(x)
    }
    ,
    qe.useFormState = function(M, x, D) {
        return H.H.useFormState(M, x, D)
    }
    ,
    qe.useFormStatus = function() {
        return H.H.useHostTransitionStatus()
    }
    ,
    qe.version = "19.1.0",
    qe
}
var md;
function ap() {
    if (md)
        return is.exports;
    md = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (b) {
                console.error(b)
            }
    }
    return f(),
    is.exports = lp(),
    is.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function np() {
    if (hd)
        return Sn;
    hd = 1;
    var f = tp()
      , b = cs()
      , T = ap();
    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function S(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function w(e) {
        var t = e
          , l = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (l = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function H(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function q(e) {
        if (w(e) !== e)
            throw Error(r(188))
    }
    function M(e) {
        var t = e.alternate;
        if (!t) {
            if (t = w(e),
            t === null)
                throw Error(r(188));
            return t !== e ? null : e
        }
        for (var l = e, a = t; ; ) {
            var n = l.return;
            if (n === null)
                break;
            var i = n.alternate;
            if (i === null) {
                if (a = n.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === i.child) {
                for (i = n.child; i; ) {
                    if (i === l)
                        return q(n),
                        e;
                    if (i === a)
                        return q(n),
                        t;
                    i = i.sibling
                }
                throw Error(r(188))
            }
            if (l.return !== a.return)
                l = n,
                a = i;
            else {
                for (var c = !1, s = n.child; s; ) {
                    if (s === l) {
                        c = !0,
                        l = n,
                        a = i;
                        break
                    }
                    if (s === a) {
                        c = !0,
                        a = n,
                        l = i;
                        break
                    }
                    s = s.sibling
                }
                if (!c) {
                    for (s = i.child; s; ) {
                        if (s === l) {
                            c = !0,
                            l = i,
                            a = n;
                            break
                        }
                        if (s === a) {
                            c = !0,
                            a = i,
                            l = n;
                            break
                        }
                        s = s.sibling
                    }
                    if (!c)
                        throw Error(r(189))
                }
            }
            if (l.alternate !== a)
                throw Error(r(190))
        }
        if (l.tag !== 3)
            throw Error(r(188));
        return l.stateNode.current === l ? e : t
    }
    function x(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = x(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var D = Object.assign
      , W = Symbol.for("react.element")
      , B = Symbol.for("react.transitional.element")
      , fe = Symbol.for("react.portal")
      , Be = Symbol.for("react.fragment")
      , pt = Symbol.for("react.strict_mode")
      , Ge = Symbol.for("react.profiler")
      , pl = Symbol.for("react.provider")
      , Tt = Symbol.for("react.consumer")
      , ze = Symbol.for("react.context")
      , gt = Symbol.for("react.forward_ref")
      , I = Symbol.for("react.suspense")
      , Ke = Symbol.for("react.suspense_list")
      , Je = Symbol.for("react.memo")
      , $e = Symbol.for("react.lazy")
      , bt = Symbol.for("react.activity")
      , Hl = Symbol.for("react.memo_cache_sentinel")
      , Et = Symbol.iterator;
    function Ce(e) {
        return e === null || typeof e != "object" ? null : (e = Et && e[Et] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var gl = Symbol.for("react.client.reference");
    function yl(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === gl ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case Be:
            return "Fragment";
        case Ge:
            return "Profiler";
        case pt:
            return "StrictMode";
        case I:
            return "Suspense";
        case Ke:
            return "SuspenseList";
        case bt:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case fe:
                return "Portal";
            case ze:
                return (e.displayName || "Context") + ".Provider";
            case Tt:
                return (e._context.displayName || "Context") + ".Consumer";
            case gt:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Je:
                return t = e.displayName || null,
                t !== null ? t : yl(e.type) || "Memo";
            case $e:
                t = e._payload,
                e = e._init;
                try {
                    return yl(e(t))
                } catch {}
            }
        return null
    }
    var Re = Array.isArray
      , j = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , z = T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , L = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , se = []
      , d = -1;
    function E(e) {
        return {
            current: e
        }
    }
    function C(e) {
        0 > d || (e.current = se[d],
        se[d] = null,
        d--)
    }
    function O(e, t) {
        d++,
        se[d] = e.current,
        e.current = t
    }
    var k = E(null)
      , P = E(null)
      , V = E(null)
      , We = E(null);
    function de(e, t) {
        switch (O(V, t),
        O(P, e),
        O(k, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Rf(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Rf(t),
                e = Uf(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        C(k),
        O(k, e)
    }
    function Vt() {
        C(k),
        C(P),
        C(V)
    }
    function ki(e) {
        e.memoizedState !== null && O(We, e);
        var t = k.current
          , l = Uf(t, e.type);
        t !== l && (O(P, e),
        O(k, l))
    }
    function jn(e) {
        P.current === e && (C(k),
        C(P)),
        We.current === e && (C(We),
        pn._currentValue = L)
    }
    var Yi = Object.prototype.hasOwnProperty
      , Gi = f.unstable_scheduleCallback
      , Li = f.unstable_cancelCallback
      , Ed = f.unstable_shouldYield
      , wd = f.unstable_requestPaint
      , St = f.unstable_now
      , Dd = f.unstable_getCurrentPriorityLevel
      , ds = f.unstable_ImmediatePriority
      , ms = f.unstable_UserBlockingPriority
      , _n = f.unstable_NormalPriority
      , Od = f.unstable_LowPriority
      , hs = f.unstable_IdlePriority
      , zd = f.log
      , Cd = f.unstable_setDisableYieldValue
      , Na = null
      , Fe = null;
    function Qt(e) {
        if (typeof zd == "function" && Cd(e),
        Fe && typeof Fe.setStrictMode == "function")
            try {
                Fe.setStrictMode(Na, e)
            } catch {}
    }
    var Ie = Math.clz32 ? Math.clz32 : Hd
      , Rd = Math.log
      , Ud = Math.LN2;
    function Hd(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Rd(e) / Ud | 0) | 0
    }
    var An = 256
      , Mn = 4194304;
    function vl(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Tn(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , i = e.suspendedLanes
          , c = e.pingedLanes;
        e = e.warmLanes;
        var s = a & 134217727;
        return s !== 0 ? (a = s & ~i,
        a !== 0 ? n = vl(a) : (c &= s,
        c !== 0 ? n = vl(c) : l || (l = s & ~e,
        l !== 0 && (n = vl(l))))) : (s = a & ~i,
        s !== 0 ? n = vl(s) : c !== 0 ? n = vl(c) : l || (l = a & ~e,
        l !== 0 && (n = vl(l)))),
        n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n,
        l = t & -t,
        i >= l || i === 32 && (l & 4194048) !== 0) ? t : n
    }
    function ja(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function qd(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function ps() {
        var e = An;
        return An <<= 1,
        (An & 4194048) === 0 && (An = 256),
        e
    }
    function gs() {
        var e = Mn;
        return Mn <<= 1,
        (Mn & 62914560) === 0 && (Mn = 4194304),
        e
    }
    function Xi(e) {
        for (var t = [], l = 0; 31 > l; l++)
            t.push(e);
        return t
    }
    function _a(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Bd(e, t, l, a, n, i) {
        var c = e.pendingLanes;
        e.pendingLanes = l,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= l,
        e.entangledLanes &= l,
        e.errorRecoveryDisabledLanes &= l,
        e.shellSuspendCounter = 0;
        var s = e.entanglements
          , o = e.expirationTimes
          , g = e.hiddenUpdates;
        for (l = c & ~l; 0 < l; ) {
            var N = 31 - Ie(l)
              , A = 1 << N;
            s[N] = 0,
            o[N] = -1;
            var y = g[N];
            if (y !== null)
                for (g[N] = null,
                N = 0; N < y.length; N++) {
                    var v = y[N];
                    v !== null && (v.lane &= -536870913)
                }
            l &= ~A
        }
        a !== 0 && ys(e, a, 0),
        i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t))
    }
    function ys(e, t, l) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var a = 31 - Ie(t);
        e.entangledLanes |= t,
        e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 4194090
    }
    function vs(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
            var a = 31 - Ie(l)
              , n = 1 << a;
            n & t | e[a] & t && (e[a] |= t),
            l &= ~n
        }
    }
    function Vi(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Qi(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function xs() {
        var e = z.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : ed(e.type))
    }
    function kd(e, t) {
        var l = z.p;
        try {
            return z.p = e,
            t()
        } finally {
            z.p = l
        }
    }
    var Zt = Math.random().toString(36).slice(2)
      , Ue = "__reactFiber$" + Zt
      , Le = "__reactProps$" + Zt
      , ql = "__reactContainer$" + Zt
      , Zi = "__reactEvents$" + Zt
      , Yd = "__reactListeners$" + Zt
      , Gd = "__reactHandles$" + Zt
      , bs = "__reactResources$" + Zt
      , Aa = "__reactMarker$" + Zt;
    function Ki(e) {
        delete e[Ue],
        delete e[Le],
        delete e[Zi],
        delete e[Yd],
        delete e[Gd]
    }
    function Bl(e) {
        var t = e[Ue];
        if (t)
            return t;
        for (var l = e.parentNode; l; ) {
            if (t = l[ql] || l[Ue]) {
                if (l = t.alternate,
                t.child !== null || l !== null && l.child !== null)
                    for (e = kf(e); e !== null; ) {
                        if (l = e[Ue])
                            return l;
                        e = kf(e)
                    }
                return t
            }
            e = l,
            l = e.parentNode
        }
        return null
    }
    function kl(e) {
        if (e = e[Ue] || e[ql]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Ma(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(r(33))
    }
    function Yl(e) {
        var t = e[bs];
        return t || (t = e[bs] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ae(e) {
        e[Aa] = !0
    }
    var Ss = new Set
      , Ns = {};
    function xl(e, t) {
        Gl(e, t),
        Gl(e + "Capture", t)
    }
    function Gl(e, t) {
        for (Ns[e] = t,
        e = 0; e < t.length; e++)
            Ss.add(t[e])
    }
    var Ld = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , js = {}
      , _s = {};
    function Xd(e) {
        return Yi.call(_s, e) ? !0 : Yi.call(js, e) ? !1 : Ld.test(e) ? _s[e] = !0 : (js[e] = !0,
        !1)
    }
    function En(e, t, l) {
        if (Xd(t))
            if (l === null)
                e.removeAttribute(t);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + l)
            }
    }
    function wn(e, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + l)
        }
    }
    function wt(e, t, l, a) {
        if (a === null)
            e.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(l);
                return
            }
            e.setAttributeNS(t, l, "" + a)
        }
    }
    var Ji, As;
    function Ll(e) {
        if (Ji === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Ji = t && t[1] || "",
                As = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ji + e + As
    }
    var $i = !1;
    function Wi(e, t) {
        if (!e || $i)
            return "";
        $i = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var A = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(A.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(A, [])
                                } catch (v) {
                                    var y = v
                                }
                                Reflect.construct(e, [], A)
                            } else {
                                try {
                                    A.call()
                                } catch (v) {
                                    y = v
                                }
                                e.call(A.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (v) {
                                y = v
                            }
                            (A = e()) && typeof A.catch == "function" && A.catch(function() {})
                        }
                    } catch (v) {
                        if (v && y && typeof v.stack == "string")
                            return [v.stack, y.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = a.DetermineComponentFrameRoot()
              , c = i[0]
              , s = i[1];
            if (c && s) {
                var o = c.split(`
`)
                  , g = s.split(`
`);
                for (n = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === o.length || n === g.length)
                    for (a = o.length - 1,
                    n = g.length - 1; 1 <= a && 0 <= n && o[a] !== g[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (o[a] !== g[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || o[a] !== g[n]) {
                                    var N = `
` + o[a].replace(" at new ", " at ");
                                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)),
                                    N
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            $i = !1,
            Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? Ll(l) : ""
    }
    function Vd(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Ll(e.type);
        case 16:
            return Ll("Lazy");
        case 13:
            return Ll("Suspense");
        case 19:
            return Ll("SuspenseList");
        case 0:
        case 15:
            return Wi(e.type, !1);
        case 11:
            return Wi(e.type.render, !1);
        case 1:
            return Wi(e.type, !0);
        case 31:
            return Ll("Activity");
        default:
            return ""
        }
    }
    function Ms(e) {
        try {
            var t = "";
            do
                t += Vd(e),
                e = e.return;
            while (e);
            return t
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    function ut(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Ts(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Qd(e) {
        var t = Ts(e) ? "checked" : "value"
          , l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var n = l.get
              , i = l.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(c) {
                    a = "" + c,
                    i.call(this, c)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(c) {
                    a = "" + c
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Dn(e) {
        e._valueTracker || (e._valueTracker = Qd(e))
    }
    function Es(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var l = t.getValue()
          , a = "";
        return e && (a = Ts(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== l ? (t.setValue(e),
        !0) : !1
    }
    function On(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Zd = /[\n"\\]/g;
    function ct(e) {
        return e.replace(Zd, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Fi(e, t, l, a, n, i, c, s) {
        e.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ut(t)) : e.value !== "" + ut(t) && (e.value = "" + ut(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"),
        t != null ? Ii(e, c, ut(t)) : l != null ? Ii(e, c, ut(l)) : a != null && e.removeAttribute("value"),
        n == null && i != null && (e.defaultChecked = !!i),
        n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"),
        s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + ut(s) : e.removeAttribute("name")
    }
    function ws(e, t, l, a, n, i, c, s) {
        if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i),
        t != null || l != null) {
            if (!(i !== "submit" && i !== "reset" || t != null))
                return;
            l = l != null ? "" + ut(l) : "",
            t = t != null ? "" + ut(t) : l,
            s || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        e.checked = s ? e.checked : !!a,
        e.defaultChecked = !!a,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c)
    }
    function Ii(e, t, l) {
        t === "number" && On(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }
    function Xl(e, t, l, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var n = 0; n < l.length; n++)
                t["$" + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                n = t.hasOwnProperty("$" + e[l].value),
                e[l].selected !== n && (e[l].selected = n),
                n && a && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + ut(l),
            t = null,
            n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    e[n].selected = !0,
                    a && (e[n].defaultSelected = !0);
                    return
                }
                t !== null || e[n].disabled || (t = e[n])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Ds(e, t, l) {
        if (t != null && (t = "" + ut(t),
        t !== e.value && (e.value = t),
        l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + ut(l) : ""
    }
    function Os(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null)
                    throw Error(r(92));
                if (Re(a)) {
                    if (1 < a.length)
                        throw Error(r(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            t = l
        }
        l = ut(t),
        e.defaultValue = l,
        a = e.textContent,
        a === l && a !== "" && a !== null && (e.value = a)
    }
    function Vl(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Kd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function zs(e, t, l) {
        var a = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Kd.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }
    function Cs(e, t, l) {
        if (t != null && typeof t != "object")
            throw Error(r(62));
        if (e = e.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var n in t)
                a = t[n],
                t.hasOwnProperty(n) && l[n] !== a && zs(e, n, a)
        } else
            for (var i in t)
                t.hasOwnProperty(i) && zs(e, i, t[i])
    }
    function Pi(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Jd = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , $d = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function zn(e) {
        return $d.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var eu = null;
    function tu(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Ql = null
      , Zl = null;
    function Rs(e) {
        var t = kl(e);
        if (t && (e = t.stateNode)) {
            var l = e[Le] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Fi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                t = l.name,
                l.type === "radio" && t != null) {
                    for (l = e; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + ct("" + t) + '"][type="radio"]'),
                    t = 0; t < l.length; t++) {
                        var a = l[t];
                        if (a !== e && a.form === e.form) {
                            var n = a[Le] || null;
                            if (!n)
                                throw Error(r(90));
                            Fi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (t = 0; t < l.length; t++)
                        a = l[t],
                        a.form === e.form && Es(a)
                }
                break e;
            case "textarea":
                Ds(e, l.value, l.defaultValue);
                break e;
            case "select":
                t = l.value,
                t != null && Xl(e, !!l.multiple, t, !1)
            }
        }
    }
    var lu = !1;
    function Us(e, t, l) {
        if (lu)
            return e(t, l);
        lu = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (lu = !1,
            (Ql !== null || Zl !== null) && (yi(),
            Ql && (t = Ql,
            e = Zl,
            Zl = Ql = null,
            Rs(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Rs(e[t])
        }
    }
    function Ta(e, t) {
        var l = e.stateNode;
        if (l === null)
            return null;
        var a = l[Le] || null;
        if (a === null)
            return null;
        l = a[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (l && typeof l != "function")
            throw Error(r(231, t, typeof l));
        return l
    }
    var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , au = !1;
    if (Dt)
        try {
            var Ea = {};
            Object.defineProperty(Ea, "passive", {
                get: function() {
                    au = !0
                }
            }),
            window.addEventListener("test", Ea, Ea),
            window.removeEventListener("test", Ea, Ea)
        } catch {
            au = !1
        }
    var Kt = null
      , nu = null
      , Cn = null;
    function Hs() {
        if (Cn)
            return Cn;
        var e, t = nu, l = t.length, a, n = "value"in Kt ? Kt.value : Kt.textContent, i = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++)
            ;
        var c = l - e;
        for (a = 1; a <= c && t[l - a] === n[i - a]; a++)
            ;
        return Cn = n.slice(e, 1 < a ? 1 - a : void 0)
    }
    function Rn(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Un() {
        return !0
    }
    function qs() {
        return !1
    }
    function Xe(e) {
        function t(l, a, n, i, c) {
            this._reactName = l,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = i,
            this.target = c,
            this.currentTarget = null;
            for (var s in e)
                e.hasOwnProperty(s) && (l = e[s],
                this[s] = l ? l(i) : i[s]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Un : qs,
            this.isPropagationStopped = qs,
            this
        }
        return D(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = Un)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = Un)
            },
            persist: function() {},
            isPersistent: Un
        }),
        t
    }
    var bl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Hn = Xe(bl), wa = D({}, bl, {
        view: 0,
        detail: 0
    }), Wd = Xe(wa), iu, uu, Da, qn = D({}, wa, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: su,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Da && (Da && e.type === "mousemove" ? (iu = e.screenX - Da.screenX,
            uu = e.screenY - Da.screenY) : uu = iu = 0,
            Da = e),
            iu)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : uu
        }
    }), Bs = Xe(qn), Fd = D({}, qn, {
        dataTransfer: 0
    }), Id = Xe(Fd), Pd = D({}, wa, {
        relatedTarget: 0
    }), cu = Xe(Pd), em = D({}, bl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), tm = Xe(em), lm = D({}, bl, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), am = Xe(lm), nm = D({}, bl, {
        data: 0
    }), ks = Xe(nm), im = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, um = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, cm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function sm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = cm[e]) ? !!t[e] : !1
    }
    function su() {
        return sm
    }
    var om = D({}, wa, {
        key: function(e) {
            if (e.key) {
                var t = im[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Rn(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? um[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: su,
        charCode: function(e) {
            return e.type === "keypress" ? Rn(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Rn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , rm = Xe(om)
      , fm = D({}, qn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Ys = Xe(fm)
      , dm = D({}, wa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: su
    })
      , mm = Xe(dm)
      , hm = D({}, bl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , pm = Xe(hm)
      , gm = D({}, qn, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , ym = Xe(gm)
      , vm = D({}, bl, {
        newState: 0,
        oldState: 0
    })
      , xm = Xe(vm)
      , bm = [9, 13, 27, 32]
      , ou = Dt && "CompositionEvent"in window
      , Oa = null;
    Dt && "documentMode"in document && (Oa = document.documentMode);
    var Sm = Dt && "TextEvent"in window && !Oa
      , Gs = Dt && (!ou || Oa && 8 < Oa && 11 >= Oa)
      , Ls = " "
      , Xs = !1;
    function Vs(e, t) {
        switch (e) {
        case "keyup":
            return bm.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Qs(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Kl = !1;
    function Nm(e, t) {
        switch (e) {
        case "compositionend":
            return Qs(t);
        case "keypress":
            return t.which !== 32 ? null : (Xs = !0,
            Ls);
        case "textInput":
            return e = t.data,
            e === Ls && Xs ? null : e;
        default:
            return null
        }
    }
    function jm(e, t) {
        if (Kl)
            return e === "compositionend" || !ou && Vs(e, t) ? (e = Hs(),
            Cn = nu = Kt = null,
            Kl = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Gs && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var _m = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Zs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!_m[e.type] : t === "textarea"
    }
    function Ks(e, t, l, a) {
        Ql ? Zl ? Zl.push(a) : Zl = [a] : Ql = a,
        t = ji(t, "onChange"),
        0 < t.length && (l = new Hn("onChange","change",null,l,a),
        e.push({
            event: l,
            listeners: t
        }))
    }
    var za = null
      , Ca = null;
    function Am(e) {
        wf(e, 0)
    }
    function Bn(e) {
        var t = Ma(e);
        if (Es(t))
            return e
    }
    function Js(e, t) {
        if (e === "change")
            return t
    }
    var $s = !1;
    if (Dt) {
        var ru;
        if (Dt) {
            var fu = "oninput"in document;
            if (!fu) {
                var Ws = document.createElement("div");
                Ws.setAttribute("oninput", "return;"),
                fu = typeof Ws.oninput == "function"
            }
            ru = fu
        } else
            ru = !1;
        $s = ru && (!document.documentMode || 9 < document.documentMode)
    }
    function Fs() {
        za && (za.detachEvent("onpropertychange", Is),
        Ca = za = null)
    }
    function Is(e) {
        if (e.propertyName === "value" && Bn(Ca)) {
            var t = [];
            Ks(t, Ca, e, tu(e)),
            Us(Am, t)
        }
    }
    function Mm(e, t, l) {
        e === "focusin" ? (Fs(),
        za = t,
        Ca = l,
        za.attachEvent("onpropertychange", Is)) : e === "focusout" && Fs()
    }
    function Tm(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Bn(Ca)
    }
    function Em(e, t) {
        if (e === "click")
            return Bn(t)
    }
    function wm(e, t) {
        if (e === "input" || e === "change")
            return Bn(t)
    }
    function Dm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Pe = typeof Object.is == "function" ? Object.is : Dm;
    function Ra(e, t) {
        if (Pe(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var l = Object.keys(e)
          , a = Object.keys(t);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!Yi.call(t, n) || !Pe(e[n], t[n]))
                return !1
        }
        return !0
    }
    function Ps(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function eo(e, t) {
        var l = Ps(e);
        e = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = e + l.textContent.length,
                e <= t && a >= t)
                    return {
                        node: l,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Ps(l)
        }
    }
    function to(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? to(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function lo(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = On(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                e = t.contentWindow;
            else
                break;
            t = On(e.document)
        }
        return t
    }
    function du(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Om = Dt && "documentMode"in document && 11 >= document.documentMode
      , Jl = null
      , mu = null
      , Ua = null
      , hu = !1;
    function ao(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        hu || Jl == null || Jl !== On(a) || (a = Jl,
        "selectionStart"in a && du(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Ua && Ra(Ua, a) || (Ua = a,
        a = ji(mu, "onSelect"),
        0 < a.length && (t = new Hn("onSelect","select",null,t,l),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = Jl)))
    }
    function Sl(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(),
        l["Webkit" + e] = "webkit" + t,
        l["Moz" + e] = "moz" + t,
        l
    }
    var $l = {
        animationend: Sl("Animation", "AnimationEnd"),
        animationiteration: Sl("Animation", "AnimationIteration"),
        animationstart: Sl("Animation", "AnimationStart"),
        transitionrun: Sl("Transition", "TransitionRun"),
        transitionstart: Sl("Transition", "TransitionStart"),
        transitioncancel: Sl("Transition", "TransitionCancel"),
        transitionend: Sl("Transition", "TransitionEnd")
    }
      , pu = {}
      , no = {};
    Dt && (no = document.createElement("div").style,
    "AnimationEvent"in window || (delete $l.animationend.animation,
    delete $l.animationiteration.animation,
    delete $l.animationstart.animation),
    "TransitionEvent"in window || delete $l.transitionend.transition);
    function Nl(e) {
        if (pu[e])
            return pu[e];
        if (!$l[e])
            return e;
        var t = $l[e], l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in no)
                return pu[e] = t[l];
        return e
    }
    var io = Nl("animationend")
      , uo = Nl("animationiteration")
      , co = Nl("animationstart")
      , zm = Nl("transitionrun")
      , Cm = Nl("transitionstart")
      , Rm = Nl("transitioncancel")
      , so = Nl("transitionend")
      , oo = new Map
      , gu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    gu.push("scrollEnd");
    function yt(e, t) {
        oo.set(e, t),
        xl(t, [e])
    }
    var ro = new WeakMap;
    function st(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = ro.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: Ms(t)
            },
            ro.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Ms(t)
        }
    }
    var ot = []
      , Wl = 0
      , yu = 0;
    function kn() {
        for (var e = Wl, t = yu = Wl = 0; t < e; ) {
            var l = ot[t];
            ot[t++] = null;
            var a = ot[t];
            ot[t++] = null;
            var n = ot[t];
            ot[t++] = null;
            var i = ot[t];
            if (ot[t++] = null,
            a !== null && n !== null) {
                var c = a.pending;
                c === null ? n.next = n : (n.next = c.next,
                c.next = n),
                a.pending = n
            }
            i !== 0 && fo(l, n, i)
        }
    }
    function Yn(e, t, l, a) {
        ot[Wl++] = e,
        ot[Wl++] = t,
        ot[Wl++] = l,
        ot[Wl++] = a,
        yu |= a,
        e.lanes |= a,
        e = e.alternate,
        e !== null && (e.lanes |= a)
    }
    function vu(e, t, l, a) {
        return Yn(e, t, l, a),
        Gn(e)
    }
    function Fl(e, t) {
        return Yn(e, null, null, t),
        Gn(e)
    }
    function fo(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, i = e.return; i !== null; )
            i.childLanes |= l,
            a = i.alternate,
            a !== null && (a.childLanes |= l),
            i.tag === 22 && (e = i.stateNode,
            e === null || e._visibility & 1 || (n = !0)),
            e = i,
            i = i.return;
        return e.tag === 3 ? (i = e.stateNode,
        n && t !== null && (n = 31 - Ie(l),
        e = i.hiddenUpdates,
        a = e[n],
        a === null ? e[n] = [t] : a.push(t),
        t.lane = l | 536870912),
        i) : null
    }
    function Gn(e) {
        if (50 < cn)
            throw cn = 0,
            _c = null,
            Error(r(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Il = {};
    function Um(e, t, l, a) {
        this.tag = e,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function et(e, t, l, a) {
        return new Um(e,t,l,a)
    }
    function xu(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Ot(e, t) {
        var l = e.alternate;
        return l === null ? (l = et(e.tag, t, e.key, e.mode),
        l.elementType = e.elementType,
        l.type = e.type,
        l.stateNode = e.stateNode,
        l.alternate = e,
        e.alternate = l) : (l.pendingProps = t,
        l.type = e.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = e.flags & 65011712,
        l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        l.sibling = e.sibling,
        l.index = e.index,
        l.ref = e.ref,
        l.refCleanup = e.refCleanup,
        l
    }
    function mo(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        e.type = l.type,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Ln(e, t, l, a, n, i) {
        var c = 0;
        if (a = e,
        typeof e == "function")
            xu(e) && (c = 1);
        else if (typeof e == "string")
            c = qh(e, l, k.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case bt:
                return e = et(31, l, t, n),
                e.elementType = bt,
                e.lanes = i,
                e;
            case Be:
                return jl(l.children, n, i, t);
            case pt:
                c = 8,
                n |= 24;
                break;
            case Ge:
                return e = et(12, l, t, n | 2),
                e.elementType = Ge,
                e.lanes = i,
                e;
            case I:
                return e = et(13, l, t, n),
                e.elementType = I,
                e.lanes = i,
                e;
            case Ke:
                return e = et(19, l, t, n),
                e.elementType = Ke,
                e.lanes = i,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case pl:
                    case ze:
                        c = 10;
                        break e;
                    case Tt:
                        c = 9;
                        break e;
                    case gt:
                        c = 11;
                        break e;
                    case Je:
                        c = 14;
                        break e;
                    case $e:
                        c = 16,
                        a = null;
                        break e
                    }
                c = 29,
                l = Error(r(130, e === null ? "null" : typeof e, "")),
                a = null
            }
        return t = et(c, l, t, n),
        t.elementType = e,
        t.type = a,
        t.lanes = i,
        t
    }
    function jl(e, t, l, a) {
        return e = et(7, e, a, t),
        e.lanes = l,
        e
    }
    function bu(e, t, l) {
        return e = et(6, e, null, t),
        e.lanes = l,
        e
    }
    function Su(e, t, l) {
        return t = et(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = l,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Pl = []
      , ea = 0
      , Xn = null
      , Vn = 0
      , rt = []
      , ft = 0
      , _l = null
      , zt = 1
      , Ct = "";
    function Al(e, t) {
        Pl[ea++] = Vn,
        Pl[ea++] = Xn,
        Xn = e,
        Vn = t
    }
    function ho(e, t, l) {
        rt[ft++] = zt,
        rt[ft++] = Ct,
        rt[ft++] = _l,
        _l = e;
        var a = zt;
        e = Ct;
        var n = 32 - Ie(a) - 1;
        a &= ~(1 << n),
        l += 1;
        var i = 32 - Ie(t) + n;
        if (30 < i) {
            var c = n - n % 5;
            i = (a & (1 << c) - 1).toString(32),
            a >>= c,
            n -= c,
            zt = 1 << 32 - Ie(t) + n | l << n | a,
            Ct = i + e
        } else
            zt = 1 << i | l << n | a,
            Ct = e
    }
    function Nu(e) {
        e.return !== null && (Al(e, 1),
        ho(e, 1, 0))
    }
    function ju(e) {
        for (; e === Xn; )
            Xn = Pl[--ea],
            Pl[ea] = null,
            Vn = Pl[--ea],
            Pl[ea] = null;
        for (; e === _l; )
            _l = rt[--ft],
            rt[ft] = null,
            Ct = rt[--ft],
            rt[ft] = null,
            zt = rt[--ft],
            rt[ft] = null
    }
    var ke = null
      , ge = null
      , te = !1
      , Ml = null
      , Nt = !1
      , _u = Error(r(519));
    function Tl(e) {
        var t = Error(r(418, ""));
        throw Ba(st(t, e)),
        _u
    }
    function po(e) {
        var t = e.stateNode
          , l = e.type
          , a = e.memoizedProps;
        switch (t[Ue] = e,
        t[Le] = a,
        l) {
        case "dialog":
            $("cancel", t),
            $("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            $("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < on.length; l++)
                $(on[l], t);
            break;
        case "source":
            $("error", t);
            break;
        case "img":
        case "image":
        case "link":
            $("error", t),
            $("load", t);
            break;
        case "details":
            $("toggle", t);
            break;
        case "input":
            $("invalid", t),
            ws(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
            Dn(t);
            break;
        case "select":
            $("invalid", t);
            break;
        case "textarea":
            $("invalid", t),
            Os(t, a.value, a.defaultValue, a.children),
            Dn(t)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Cf(t.textContent, l) ? (a.popover != null && ($("beforetoggle", t),
        $("toggle", t)),
        a.onScroll != null && $("scroll", t),
        a.onScrollEnd != null && $("scrollend", t),
        a.onClick != null && (t.onclick = _i),
        t = !0) : t = !1,
        t || Tl(e)
    }
    function go(e) {
        for (ke = e.return; ke; )
            switch (ke.tag) {
            case 5:
            case 13:
                Nt = !1;
                return;
            case 27:
            case 3:
                Nt = !0;
                return;
            default:
                ke = ke.return
            }
    }
    function Ha(e) {
        if (e !== ke)
            return !1;
        if (!te)
            return go(e),
            te = !0,
            !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type,
        l = !(l !== "form" && l !== "button") || Yc(e.type, e.memoizedProps)),
        l = !l),
        l && ge && Tl(e),
        go(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(r(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (l = e.data,
                        l === "/$") {
                            if (t === 0) {
                                ge = xt(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            l !== "$" && l !== "$!" && l !== "$?" || t++;
                    e = e.nextSibling
                }
                ge = null
            }
        } else
            t === 27 ? (t = ge,
            ol(e.type) ? (e = Vc,
            Vc = null,
            ge = e) : ge = t) : ge = ke ? xt(e.stateNode.nextSibling) : null;
        return !0
    }
    function qa() {
        ge = ke = null,
        te = !1
    }
    function yo() {
        var e = Ml;
        return e !== null && (Ze === null ? Ze = e : Ze.push.apply(Ze, e),
        Ml = null),
        e
    }
    function Ba(e) {
        Ml === null ? Ml = [e] : Ml.push(e)
    }
    var Au = E(null)
      , El = null
      , Rt = null;
    function Jt(e, t, l) {
        O(Au, t._currentValue),
        t._currentValue = l
    }
    function Ut(e) {
        e._currentValue = Au.current,
        C(Au)
    }
    function Mu(e, t, l) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === l)
                break;
            e = e.return
        }
    }
    function Tu(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null; ) {
            var i = n.dependencies;
            if (i !== null) {
                var c = n.child;
                i = i.firstContext;
                e: for (; i !== null; ) {
                    var s = i;
                    i = n;
                    for (var o = 0; o < t.length; o++)
                        if (s.context === t[o]) {
                            i.lanes |= l,
                            s = i.alternate,
                            s !== null && (s.lanes |= l),
                            Mu(i.return, l, e),
                            a || (c = null);
                            break e
                        }
                    i = s.next
                }
            } else if (n.tag === 18) {
                if (c = n.return,
                c === null)
                    throw Error(r(341));
                c.lanes |= l,
                i = c.alternate,
                i !== null && (i.lanes |= l),
                Mu(c, l, e),
                c = null
            } else
                c = n.child;
            if (c !== null)
                c.return = n;
            else
                for (c = n; c !== null; ) {
                    if (c === e) {
                        c = null;
                        break
                    }
                    if (n = c.sibling,
                    n !== null) {
                        n.return = c.return,
                        c = n;
                        break
                    }
                    c = c.return
                }
            n = c
        }
    }
    function ka(e, t, l, a) {
        e = null;
        for (var n = t, i = !1; n !== null; ) {
            if (!i) {
                if ((n.flags & 524288) !== 0)
                    i = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var c = n.alternate;
                if (c === null)
                    throw Error(r(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var s = n.type;
                    Pe(n.pendingProps.value, c.value) || (e !== null ? e.push(s) : e = [s])
                }
            } else if (n === We.current) {
                if (c = n.alternate,
                c === null)
                    throw Error(r(387));
                c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(pn) : e = [pn])
            }
            n = n.return
        }
        e !== null && Tu(t, e, l, a),
        t.flags |= 262144
    }
    function Qn(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Pe(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function wl(e) {
        El = e,
        Rt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function He(e) {
        return vo(El, e)
    }
    function Zn(e, t) {
        return El === null && wl(e),
        vo(e, t)
    }
    function vo(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        },
        Rt === null) {
            if (e === null)
                throw Error(r(308));
            Rt = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Rt = Rt.next = t;
        return l
    }
    var Hm = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                e.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(l) {
                return l()
            })
        }
    }
      , qm = f.unstable_scheduleCallback
      , Bm = f.unstable_NormalPriority
      , je = {
        $$typeof: ze,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Eu() {
        return {
            controller: new Hm,
            data: new Map,
            refCount: 0
        }
    }
    function Ya(e) {
        e.refCount--,
        e.refCount === 0 && qm(Bm, function() {
            e.controller.abort()
        })
    }
    var Ga = null
      , wu = 0
      , ta = 0
      , la = null;
    function km(e, t) {
        if (Ga === null) {
            var l = Ga = [];
            wu = 0,
            ta = Oc(),
            la = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return wu++,
        t.then(xo, xo),
        t
    }
    function xo() {
        if (--wu === 0 && Ga !== null) {
            la !== null && (la.status = "fulfilled");
            var e = Ga;
            Ga = null,
            ta = 0,
            la = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Ym(e, t) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                l.push(n)
            }
        };
        return e.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var n = 0; n < l.length; n++)
                (0,
                l[n])(t)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < l.length; n++)
                (0,
                l[n])(void 0)
        }),
        a
    }
    var bo = j.S;
    j.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && km(e, t),
        bo !== null && bo(e, t)
    }
    ;
    var Dl = E(null);
    function Du() {
        var e = Dl.current;
        return e !== null ? e : re.pooledCache
    }
    function Kn(e, t) {
        t === null ? O(Dl, Dl.current) : O(Dl, t.pool)
    }
    function So() {
        var e = Du();
        return e === null ? null : {
            parent: je._currentValue,
            pool: e
        }
    }
    var La = Error(r(460))
      , No = Error(r(474))
      , Jn = Error(r(542))
      , Ou = {
        then: function() {}
    };
    function jo(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function $n() {}
    function _o(e, t, l) {
        switch (l = e[l],
        l === void 0 ? e.push(t) : l !== t && (t.then($n, $n),
        t = l),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Mo(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then($n, $n);
            else {
                if (e = re,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(r(482));
                e = t,
                e.status = "pending",
                e.then(function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Mo(e),
                e
            }
            throw Xa = t,
            La
        }
    }
    var Xa = null;
    function Ao() {
        if (Xa === null)
            throw Error(r(459));
        var e = Xa;
        return Xa = null,
        e
    }
    function Mo(e) {
        if (e === La || e === Jn)
            throw Error(r(483))
    }
    var $t = !1;
    function zu(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Cu(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Wt(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ft(e, t, l) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (ae & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next,
            n.next = t),
            a.pending = t,
            t = Gn(e),
            fo(e, null, l),
            t
        }
        return Yn(e, a, t, l),
        Gn(e)
    }
    function Va(e, t, l) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (l & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            vs(e, l)
        }
    }
    function Ru(e, t) {
        var l = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var n = null
              , i = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var c = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    i === null ? n = i = c : i = i.next = c,
                    l = l.next
                } while (l !== null);
                i === null ? n = i = t : i = i.next = t
            } else
                n = i = t;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: i,
                shared: a.shared,
                callbacks: a.callbacks
            },
            e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate,
        e === null ? l.firstBaseUpdate = t : e.next = t,
        l.lastBaseUpdate = t
    }
    var Uu = !1;
    function Qa() {
        if (Uu) {
            var e = la;
            if (e !== null)
                throw e
        }
    }
    function Za(e, t, l, a) {
        Uu = !1;
        var n = e.updateQueue;
        $t = !1;
        var i = n.firstBaseUpdate
          , c = n.lastBaseUpdate
          , s = n.shared.pending;
        if (s !== null) {
            n.shared.pending = null;
            var o = s
              , g = o.next;
            o.next = null,
            c === null ? i = g : c.next = g,
            c = o;
            var N = e.alternate;
            N !== null && (N = N.updateQueue,
            s = N.lastBaseUpdate,
            s !== c && (s === null ? N.firstBaseUpdate = g : s.next = g,
            N.lastBaseUpdate = o))
        }
        if (i !== null) {
            var A = n.baseState;
            c = 0,
            N = g = o = null,
            s = i;
            do {
                var y = s.lane & -536870913
                  , v = y !== s.lane;
                if (v ? (F & y) === y : (a & y) === y) {
                    y !== 0 && y === ta && (Uu = !0),
                    N !== null && (N = N.next = {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var X = e
                          , Y = s;
                        y = t;
                        var ce = l;
                        switch (Y.tag) {
                        case 1:
                            if (X = Y.payload,
                            typeof X == "function") {
                                A = X.call(ce, A, y);
                                break e
                            }
                            A = X;
                            break e;
                        case 3:
                            X.flags = X.flags & -65537 | 128;
                        case 0:
                            if (X = Y.payload,
                            y = typeof X == "function" ? X.call(ce, A, y) : X,
                            y == null)
                                break e;
                            A = D({}, A, y);
                            break e;
                        case 2:
                            $t = !0
                        }
                    }
                    y = s.callback,
                    y !== null && (e.flags |= 64,
                    v && (e.flags |= 8192),
                    v = n.callbacks,
                    v === null ? n.callbacks = [y] : v.push(y))
                } else
                    v = {
                        lane: y,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    },
                    N === null ? (g = N = v,
                    o = A) : N = N.next = v,
                    c |= y;
                if (s = s.next,
                s === null) {
                    if (s = n.shared.pending,
                    s === null)
                        break;
                    v = s,
                    s = v.next,
                    v.next = null,
                    n.lastBaseUpdate = v,
                    n.shared.pending = null
                }
            } while (!0);
            N === null && (o = A),
            n.baseState = o,
            n.firstBaseUpdate = g,
            n.lastBaseUpdate = N,
            i === null && (n.shared.lanes = 0),
            il |= c,
            e.lanes = c,
            e.memoizedState = A
        }
    }
    function To(e, t) {
        if (typeof e != "function")
            throw Error(r(191, e));
        e.call(t)
    }
    function Eo(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null,
            e = 0; e < l.length; e++)
                To(l[e], t)
    }
    var aa = E(null)
      , Wn = E(0);
    function wo(e, t) {
        e = Lt,
        O(Wn, e),
        O(aa, t),
        Lt = e | t.baseLanes
    }
    function Hu() {
        O(Wn, Lt),
        O(aa, aa.current)
    }
    function qu() {
        Lt = Wn.current,
        C(aa),
        C(Wn)
    }
    var It = 0
      , Z = null
      , ie = null
      , be = null
      , Fn = !1
      , na = !1
      , Ol = !1
      , In = 0
      , Ka = 0
      , ia = null
      , Gm = 0;
    function ve() {
        throw Error(r(321))
    }
    function Bu(e, t) {
        if (t === null)
            return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!Pe(e[l], t[l]))
                return !1;
        return !0
    }
    function ku(e, t, l, a, n, i) {
        return It = i,
        Z = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        j.H = e === null || e.memoizedState === null ? dr : mr,
        Ol = !1,
        i = l(a, n),
        Ol = !1,
        na && (i = Oo(t, l, a, n)),
        Do(e),
        i
    }
    function Do(e) {
        j.H = ni;
        var t = ie !== null && ie.next !== null;
        if (It = 0,
        be = ie = Z = null,
        Fn = !1,
        Ka = 0,
        ia = null,
        t)
            throw Error(r(300));
        e === null || Me || (e = e.dependencies,
        e !== null && Qn(e) && (Me = !0))
    }
    function Oo(e, t, l, a) {
        Z = e;
        var n = 0;
        do {
            if (na && (ia = null),
            Ka = 0,
            na = !1,
            25 <= n)
                throw Error(r(301));
            if (n += 1,
            be = ie = null,
            e.updateQueue != null) {
                var i = e.updateQueue;
                i.lastEffect = null,
                i.events = null,
                i.stores = null,
                i.memoCache != null && (i.memoCache.index = 0)
            }
            j.H = Jm,
            i = t(l, a)
        } while (na);
        return i
    }
    function Lm() {
        var e = j.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ja(t) : t,
        e = e.useState()[0],
        (ie !== null ? ie.memoizedState : null) !== e && (Z.flags |= 1024),
        t
    }
    function Yu() {
        var e = In !== 0;
        return In = 0,
        e
    }
    function Gu(e, t, l) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l
    }
    function Lu(e) {
        if (Fn) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Fn = !1
        }
        It = 0,
        be = ie = Z = null,
        na = !1,
        Ka = In = 0,
        ia = null
    }
    function Ve() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return be === null ? Z.memoizedState = be = e : be = be.next = e,
        be
    }
    function Se() {
        if (ie === null) {
            var e = Z.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = ie.next;
        var t = be === null ? Z.memoizedState : be.next;
        if (t !== null)
            be = t,
            ie = e;
        else {
            if (e === null)
                throw Z.alternate === null ? Error(r(467)) : Error(r(310));
            ie = e,
            e = {
                memoizedState: ie.memoizedState,
                baseState: ie.baseState,
                baseQueue: ie.baseQueue,
                queue: ie.queue,
                next: null
            },
            be === null ? Z.memoizedState = be = e : be = be.next = e
        }
        return be
    }
    function Xu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ja(e) {
        var t = Ka;
        return Ka += 1,
        ia === null && (ia = []),
        e = _o(ia, e, t),
        t = Z,
        (be === null ? t.memoizedState : be.next) === null && (t = t.alternate,
        j.H = t === null || t.memoizedState === null ? dr : mr),
        e
    }
    function Pn(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ja(e);
            if (e.$$typeof === ze)
                return He(e)
        }
        throw Error(r(438, String(e)))
    }
    function Vu(e) {
        var t = null
          , l = Z.updateQueue;
        if (l !== null && (t = l.memoCache),
        t == null) {
            var a = Z.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        l === null && (l = Xu(),
        Z.updateQueue = l),
        l.memoCache = t,
        l = t.data[t.index],
        l === void 0)
            for (l = t.data[t.index] = Array(e),
            a = 0; a < e; a++)
                l[a] = Hl;
        return t.index++,
        l
    }
    function Ht(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ei(e) {
        var t = Se();
        return Qu(t, ie, e)
    }
    function Qu(e, t, l) {
        var a = e.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue
          , i = a.pending;
        if (i !== null) {
            if (n !== null) {
                var c = n.next;
                n.next = i.next,
                i.next = c
            }
            t.baseQueue = n = i,
            a.pending = null
        }
        if (i = e.baseState,
        n === null)
            e.memoizedState = i;
        else {
            t = n.next;
            var s = c = null
              , o = null
              , g = t
              , N = !1;
            do {
                var A = g.lane & -536870913;
                if (A !== g.lane ? (F & A) === A : (It & A) === A) {
                    var y = g.revertLane;
                    if (y === 0)
                        o !== null && (o = o.next = {
                            lane: 0,
                            revertLane: 0,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        }),
                        A === ta && (N = !0);
                    else if ((It & y) === y) {
                        g = g.next,
                        y === ta && (N = !0);
                        continue
                    } else
                        A = {
                            lane: 0,
                            revertLane: g.revertLane,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        },
                        o === null ? (s = o = A,
                        c = i) : o = o.next = A,
                        Z.lanes |= y,
                        il |= y;
                    A = g.action,
                    Ol && l(i, A),
                    i = g.hasEagerState ? g.eagerState : l(i, A)
                } else
                    y = {
                        lane: A,
                        revertLane: g.revertLane,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    },
                    o === null ? (s = o = y,
                    c = i) : o = o.next = y,
                    Z.lanes |= A,
                    il |= A;
                g = g.next
            } while (g !== null && g !== t);
            if (o === null ? c = i : o.next = s,
            !Pe(i, e.memoizedState) && (Me = !0,
            N && (l = la,
            l !== null)))
                throw l;
            e.memoizedState = i,
            e.baseState = c,
            e.baseQueue = o,
            a.lastRenderedState = i
        }
        return n === null && (a.lanes = 0),
        [e.memoizedState, a.dispatch]
    }
    function Zu(e) {
        var t = Se()
          , l = t.queue;
        if (l === null)
            throw Error(r(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch
          , n = l.pending
          , i = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var c = n = n.next;
            do
                i = e(i, c.action),
                c = c.next;
            while (c !== n);
            Pe(i, t.memoizedState) || (Me = !0),
            t.memoizedState = i,
            t.baseQueue === null && (t.baseState = i),
            l.lastRenderedState = i
        }
        return [i, a]
    }
    function zo(e, t, l) {
        var a = Z
          , n = Se()
          , i = te;
        if (i) {
            if (l === void 0)
                throw Error(r(407));
            l = l()
        } else
            l = t();
        var c = !Pe((ie || n).memoizedState, l);
        c && (n.memoizedState = l,
        Me = !0),
        n = n.queue;
        var s = Uo.bind(null, a, n, e);
        if ($a(2048, 8, s, [e]),
        n.getSnapshot !== t || c || be !== null && be.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            ua(9, ti(), Ro.bind(null, a, n, l, t), null),
            re === null)
                throw Error(r(349));
            i || (It & 124) !== 0 || Co(a, t, l)
        }
        return l
    }
    function Co(e, t, l) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: l
        },
        t = Z.updateQueue,
        t === null ? (t = Xu(),
        Z.updateQueue = t,
        t.stores = [e]) : (l = t.stores,
        l === null ? t.stores = [e] : l.push(e))
    }
    function Ro(e, t, l, a) {
        t.value = l,
        t.getSnapshot = a,
        Ho(t) && qo(e)
    }
    function Uo(e, t, l) {
        return l(function() {
            Ho(t) && qo(e)
        })
    }
    function Ho(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !Pe(e, l)
        } catch {
            return !0
        }
    }
    function qo(e) {
        var t = Fl(e, 2);
        t !== null && it(t, e, 2)
    }
    function Ku(e) {
        var t = Ve();
        if (typeof e == "function") {
            var l = e;
            if (e = l(),
            Ol) {
                Qt(!0);
                try {
                    l()
                } finally {
                    Qt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ht,
            lastRenderedState: e
        },
        t
    }
    function Bo(e, t, l, a) {
        return e.baseState = l,
        Qu(e, ie, typeof a == "function" ? a : Ht)
    }
    function Xm(e, t, l, a, n) {
        if (ai(e))
            throw Error(r(485));
        if (e = t.action,
        e !== null) {
            var i = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    i.listeners.push(c)
                }
            };
            j.T !== null ? l(!0) : i.isTransition = !1,
            a(i),
            l = t.pending,
            l === null ? (i.next = t.pending = i,
            ko(t, i)) : (i.next = l.next,
            t.pending = l.next = i)
        }
    }
    function ko(e, t) {
        var l = t.action
          , a = t.payload
          , n = e.state;
        if (t.isTransition) {
            var i = j.T
              , c = {};
            j.T = c;
            try {
                var s = l(n, a)
                  , o = j.S;
                o !== null && o(c, s),
                Yo(e, t, s)
            } catch (g) {
                Ju(e, t, g)
            } finally {
                j.T = i
            }
        } else
            try {
                i = l(n, a),
                Yo(e, t, i)
            } catch (g) {
                Ju(e, t, g)
            }
    }
    function Yo(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            Go(e, t, a)
        }, function(a) {
            return Ju(e, t, a)
        }) : Go(e, t, l)
    }
    function Go(e, t, l) {
        t.status = "fulfilled",
        t.value = l,
        Lo(t),
        e.state = l,
        t = e.pending,
        t !== null && (l = t.next,
        l === t ? e.pending = null : (l = l.next,
        t.next = l,
        ko(e, l)))
    }
    function Ju(e, t, l) {
        var a = e.pending;
        if (e.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = l,
                Lo(t),
                t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function Lo(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Xo(e, t) {
        return t
    }
    function Vo(e, t) {
        if (te) {
            var l = re.formState;
            if (l !== null) {
                e: {
                    var a = Z;
                    if (te) {
                        if (ge) {
                            t: {
                                for (var n = ge, i = Nt; n.nodeType !== 8; ) {
                                    if (!i) {
                                        n = null;
                                        break t
                                    }
                                    if (n = xt(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                i = n.data,
                                n = i === "F!" || i === "F" ? n : null
                            }
                            if (n) {
                                ge = xt(n.nextSibling),
                                a = n.data === "F!";
                                break e
                            }
                        }
                        Tl(a)
                    }
                    a = !1
                }
                a && (t = l[0])
            }
        }
        return l = Ve(),
        l.memoizedState = l.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xo,
            lastRenderedState: t
        },
        l.queue = a,
        l = or.bind(null, Z, a),
        a.dispatch = l,
        a = Ku(!1),
        i = Pu.bind(null, Z, !1, a.queue),
        a = Ve(),
        n = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        a.queue = n,
        l = Xm.bind(null, Z, n, i, l),
        n.dispatch = l,
        a.memoizedState = e,
        [t, l, !1]
    }
    function Qo(e) {
        var t = Se();
        return Zo(t, ie, e)
    }
    function Zo(e, t, l) {
        if (t = Qu(e, t, Xo)[0],
        e = ei(Ht)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = Ja(t)
            } catch (c) {
                throw c === La ? Jn : c
            }
        else
            a = t;
        t = Se();
        var n = t.queue
          , i = n.dispatch;
        return l !== t.memoizedState && (Z.flags |= 2048,
        ua(9, ti(), Vm.bind(null, n, l), null)),
        [a, i, e]
    }
    function Vm(e, t) {
        e.action = t
    }
    function Ko(e) {
        var t = Se()
          , l = ie;
        if (l !== null)
            return Zo(t, l, e);
        Se(),
        t = t.memoizedState,
        l = Se();
        var a = l.queue.dispatch;
        return l.memoizedState = e,
        [t, a, !1]
    }
    function ua(e, t, l, a) {
        return e = {
            tag: e,
            create: l,
            deps: a,
            inst: t,
            next: null
        },
        t = Z.updateQueue,
        t === null && (t = Xu(),
        Z.updateQueue = t),
        l = t.lastEffect,
        l === null ? t.lastEffect = e.next = e : (a = l.next,
        l.next = e,
        e.next = a,
        t.lastEffect = e),
        e
    }
    function ti() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Jo() {
        return Se().memoizedState
    }
    function li(e, t, l, a) {
        var n = Ve();
        a = a === void 0 ? null : a,
        Z.flags |= e,
        n.memoizedState = ua(1 | t, ti(), l, a)
    }
    function $a(e, t, l, a) {
        var n = Se();
        a = a === void 0 ? null : a;
        var i = n.memoizedState.inst;
        ie !== null && a !== null && Bu(a, ie.memoizedState.deps) ? n.memoizedState = ua(t, i, l, a) : (Z.flags |= e,
        n.memoizedState = ua(1 | t, i, l, a))
    }
    function $o(e, t) {
        li(8390656, 8, e, t)
    }
    function Wo(e, t) {
        $a(2048, 8, e, t)
    }
    function Fo(e, t) {
        return $a(4, 2, e, t)
    }
    function Io(e, t) {
        return $a(4, 4, e, t)
    }
    function Po(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function er(e, t, l) {
        l = l != null ? l.concat([e]) : null,
        $a(4, 4, Po.bind(null, t, e), l)
    }
    function $u() {}
    function tr(e, t) {
        var l = Se();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && Bu(t, a[1]) ? a[0] : (l.memoizedState = [e, t],
        e)
    }
    function lr(e, t) {
        var l = Se();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && Bu(t, a[1]))
            return a[0];
        if (a = e(),
        Ol) {
            Qt(!0);
            try {
                e()
            } finally {
                Qt(!1)
            }
        }
        return l.memoizedState = [a, t],
        a
    }
    function Wu(e, t, l) {
        return l === void 0 || (It & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l,
        e = uf(),
        Z.lanes |= e,
        il |= e,
        l)
    }
    function ar(e, t, l, a) {
        return Pe(l, t) ? l : aa.current !== null ? (e = Wu(e, l, a),
        Pe(e, t) || (Me = !0),
        e) : (It & 42) === 0 ? (Me = !0,
        e.memoizedState = l) : (e = uf(),
        Z.lanes |= e,
        il |= e,
        t)
    }
    function nr(e, t, l, a, n) {
        var i = z.p;
        z.p = i !== 0 && 8 > i ? i : 8;
        var c = j.T
          , s = {};
        j.T = s,
        Pu(e, !1, t, l);
        try {
            var o = n()
              , g = j.S;
            if (g !== null && g(s, o),
            o !== null && typeof o == "object" && typeof o.then == "function") {
                var N = Ym(o, a);
                Wa(e, t, N, nt(e))
            } else
                Wa(e, t, a, nt(e))
        } catch (A) {
            Wa(e, t, {
                then: function() {},
                status: "rejected",
                reason: A
            }, nt())
        } finally {
            z.p = i,
            j.T = c
        }
    }
    function Qm() {}
    function Fu(e, t, l, a) {
        if (e.tag !== 5)
            throw Error(r(476));
        var n = ir(e).queue;
        nr(e, n, t, L, l === null ? Qm : function() {
            return ur(e),
            l(a)
        }
        )
    }
    function ir(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: L,
            baseState: L,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ht,
                lastRenderedState: L
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ht,
                lastRenderedState: l
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function ur(e) {
        var t = ir(e).next.queue;
        Wa(e, t, {}, nt())
    }
    function Iu() {
        return He(pn)
    }
    function cr() {
        return Se().memoizedState
    }
    function sr() {
        return Se().memoizedState
    }
    function Zm(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var l = nt();
                e = Wt(l);
                var a = Ft(t, e, l);
                a !== null && (it(a, t, l),
                Va(a, t, l)),
                t = {
                    cache: Eu()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Km(e, t, l) {
        var a = nt();
        l = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ai(e) ? rr(t, l) : (l = vu(e, t, l, a),
        l !== null && (it(l, e, a),
        fr(l, t, a)))
    }
    function or(e, t, l) {
        var a = nt();
        Wa(e, t, l, a)
    }
    function Wa(e, t, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ai(e))
            rr(t, n);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
            i !== null))
                try {
                    var c = t.lastRenderedState
                      , s = i(c, l);
                    if (n.hasEagerState = !0,
                    n.eagerState = s,
                    Pe(s, c))
                        return Yn(e, t, n, 0),
                        re === null && kn(),
                        !1
                } catch {} finally {}
            if (l = vu(e, t, n, a),
            l !== null)
                return it(l, e, a),
                fr(l, t, a),
                !0
        }
        return !1
    }
    function Pu(e, t, l, a) {
        if (a = {
            lane: 2,
            revertLane: Oc(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ai(e)) {
            if (t)
                throw Error(r(479))
        } else
            t = vu(e, l, a, 2),
            t !== null && it(t, e, 2)
    }
    function ai(e) {
        var t = e.alternate;
        return e === Z || t !== null && t === Z
    }
    function rr(e, t) {
        na = Fn = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        e.pending = t
    }
    function fr(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            vs(e, l)
        }
    }
    var ni = {
        readContext: He,
        use: Pn,
        useCallback: ve,
        useContext: ve,
        useEffect: ve,
        useImperativeHandle: ve,
        useLayoutEffect: ve,
        useInsertionEffect: ve,
        useMemo: ve,
        useReducer: ve,
        useRef: ve,
        useState: ve,
        useDebugValue: ve,
        useDeferredValue: ve,
        useTransition: ve,
        useSyncExternalStore: ve,
        useId: ve,
        useHostTransitionStatus: ve,
        useFormState: ve,
        useActionState: ve,
        useOptimistic: ve,
        useMemoCache: ve,
        useCacheRefresh: ve
    }
      , dr = {
        readContext: He,
        use: Pn,
        useCallback: function(e, t) {
            return Ve().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: He,
        useEffect: $o,
        useImperativeHandle: function(e, t, l) {
            l = l != null ? l.concat([e]) : null,
            li(4194308, 4, Po.bind(null, t, e), l)
        },
        useLayoutEffect: function(e, t) {
            return li(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            li(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var l = Ve();
            t = t === void 0 ? null : t;
            var a = e();
            if (Ol) {
                Qt(!0);
                try {
                    e()
                } finally {
                    Qt(!1)
                }
            }
            return l.memoizedState = [a, t],
            a
        },
        useReducer: function(e, t, l) {
            var a = Ve();
            if (l !== void 0) {
                var n = l(t);
                if (Ol) {
                    Qt(!0);
                    try {
                        l(t)
                    } finally {
                        Qt(!1)
                    }
                }
            } else
                n = t;
            return a.memoizedState = a.baseState = n,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            },
            a.queue = e,
            e = e.dispatch = Km.bind(null, Z, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ve();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Ku(e);
            var t = e.queue
              , l = or.bind(null, Z, t);
            return t.dispatch = l,
            [e.memoizedState, l]
        },
        useDebugValue: $u,
        useDeferredValue: function(e, t) {
            var l = Ve();
            return Wu(l, e, t)
        },
        useTransition: function() {
            var e = Ku(!1);
            return e = nr.bind(null, Z, e.queue, !0, !1),
            Ve().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, l) {
            var a = Z
              , n = Ve();
            if (te) {
                if (l === void 0)
                    throw Error(r(407));
                l = l()
            } else {
                if (l = t(),
                re === null)
                    throw Error(r(349));
                (F & 124) !== 0 || Co(a, t, l)
            }
            n.memoizedState = l;
            var i = {
                value: l,
                getSnapshot: t
            };
            return n.queue = i,
            $o(Uo.bind(null, a, i, e), [e]),
            a.flags |= 2048,
            ua(9, ti(), Ro.bind(null, a, i, l, t), null),
            l
        },
        useId: function() {
            var e = Ve()
              , t = re.identifierPrefix;
            if (te) {
                var l = Ct
                  , a = zt;
                l = (a & ~(1 << 32 - Ie(a) - 1)).toString(32) + l,
                t = "«" + t + "R" + l,
                l = In++,
                0 < l && (t += "H" + l.toString(32)),
                t += "»"
            } else
                l = Gm++,
                t = "«" + t + "r" + l.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Iu,
        useFormState: Vo,
        useActionState: Vo,
        useOptimistic: function(e) {
            var t = Ve();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l,
            t = Pu.bind(null, Z, !0, l),
            l.dispatch = t,
            [e, t]
        },
        useMemoCache: Vu,
        useCacheRefresh: function() {
            return Ve().memoizedState = Zm.bind(null, Z)
        }
    }
      , mr = {
        readContext: He,
        use: Pn,
        useCallback: tr,
        useContext: He,
        useEffect: Wo,
        useImperativeHandle: er,
        useInsertionEffect: Fo,
        useLayoutEffect: Io,
        useMemo: lr,
        useReducer: ei,
        useRef: Jo,
        useState: function() {
            return ei(Ht)
        },
        useDebugValue: $u,
        useDeferredValue: function(e, t) {
            var l = Se();
            return ar(l, ie.memoizedState, e, t)
        },
        useTransition: function() {
            var e = ei(Ht)[0]
              , t = Se().memoizedState;
            return [typeof e == "boolean" ? e : Ja(e), t]
        },
        useSyncExternalStore: zo,
        useId: cr,
        useHostTransitionStatus: Iu,
        useFormState: Qo,
        useActionState: Qo,
        useOptimistic: function(e, t) {
            var l = Se();
            return Bo(l, ie, e, t)
        },
        useMemoCache: Vu,
        useCacheRefresh: sr
    }
      , Jm = {
        readContext: He,
        use: Pn,
        useCallback: tr,
        useContext: He,
        useEffect: Wo,
        useImperativeHandle: er,
        useInsertionEffect: Fo,
        useLayoutEffect: Io,
        useMemo: lr,
        useReducer: Zu,
        useRef: Jo,
        useState: function() {
            return Zu(Ht)
        },
        useDebugValue: $u,
        useDeferredValue: function(e, t) {
            var l = Se();
            return ie === null ? Wu(l, e, t) : ar(l, ie.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Zu(Ht)[0]
              , t = Se().memoizedState;
            return [typeof e == "boolean" ? e : Ja(e), t]
        },
        useSyncExternalStore: zo,
        useId: cr,
        useHostTransitionStatus: Iu,
        useFormState: Ko,
        useActionState: Ko,
        useOptimistic: function(e, t) {
            var l = Se();
            return ie !== null ? Bo(l, ie, e, t) : (l.baseState = e,
            [e, l.queue.dispatch])
        },
        useMemoCache: Vu,
        useCacheRefresh: sr
    }
      , ca = null
      , Fa = 0;
    function ii(e) {
        var t = Fa;
        return Fa += 1,
        ca === null && (ca = []),
        _o(ca, e, t)
    }
    function Ia(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function ui(e, t) {
        throw t.$$typeof === W ? Error(r(525)) : (e = Object.prototype.toString.call(t),
        Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function hr(e) {
        var t = e._init;
        return t(e._payload)
    }
    function pr(e) {
        function t(h, m) {
            if (e) {
                var p = h.deletions;
                p === null ? (h.deletions = [m],
                h.flags |= 16) : p.push(m)
            }
        }
        function l(h, m) {
            if (!e)
                return null;
            for (; m !== null; )
                t(h, m),
                m = m.sibling;
            return null
        }
        function a(h) {
            for (var m = new Map; h !== null; )
                h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
                h = h.sibling;
            return m
        }
        function n(h, m) {
            return h = Ot(h, m),
            h.index = 0,
            h.sibling = null,
            h
        }
        function i(h, m, p) {
            return h.index = p,
            e ? (p = h.alternate,
            p !== null ? (p = p.index,
            p < m ? (h.flags |= 67108866,
            m) : p) : (h.flags |= 67108866,
            m)) : (h.flags |= 1048576,
            m)
        }
        function c(h) {
            return e && h.alternate === null && (h.flags |= 67108866),
            h
        }
        function s(h, m, p, _) {
            return m === null || m.tag !== 6 ? (m = bu(p, h.mode, _),
            m.return = h,
            m) : (m = n(m, p),
            m.return = h,
            m)
        }
        function o(h, m, p, _) {
            var R = p.type;
            return R === Be ? N(h, m, p.props.children, _, p.key) : m !== null && (m.elementType === R || typeof R == "object" && R !== null && R.$$typeof === $e && hr(R) === m.type) ? (m = n(m, p.props),
            Ia(m, p),
            m.return = h,
            m) : (m = Ln(p.type, p.key, p.props, null, h.mode, _),
            Ia(m, p),
            m.return = h,
            m)
        }
        function g(h, m, p, _) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = Su(p, h.mode, _),
            m.return = h,
            m) : (m = n(m, p.children || []),
            m.return = h,
            m)
        }
        function N(h, m, p, _, R) {
            return m === null || m.tag !== 7 ? (m = jl(p, h.mode, _, R),
            m.return = h,
            m) : (m = n(m, p),
            m.return = h,
            m)
        }
        function A(h, m, p) {
            if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
                return m = bu("" + m, h.mode, p),
                m.return = h,
                m;
            if (typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                case B:
                    return p = Ln(m.type, m.key, m.props, null, h.mode, p),
                    Ia(p, m),
                    p.return = h,
                    p;
                case fe:
                    return m = Su(m, h.mode, p),
                    m.return = h,
                    m;
                case $e:
                    var _ = m._init;
                    return m = _(m._payload),
                    A(h, m, p)
                }
                if (Re(m) || Ce(m))
                    return m = jl(m, h.mode, p, null),
                    m.return = h,
                    m;
                if (typeof m.then == "function")
                    return A(h, ii(m), p);
                if (m.$$typeof === ze)
                    return A(h, Zn(h, m), p);
                ui(h, m)
            }
            return null
        }
        function y(h, m, p, _) {
            var R = m !== null ? m.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                return R !== null ? null : s(h, m, "" + p, _);
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case B:
                    return p.key === R ? o(h, m, p, _) : null;
                case fe:
                    return p.key === R ? g(h, m, p, _) : null;
                case $e:
                    return R = p._init,
                    p = R(p._payload),
                    y(h, m, p, _)
                }
                if (Re(p) || Ce(p))
                    return R !== null ? null : N(h, m, p, _, null);
                if (typeof p.then == "function")
                    return y(h, m, ii(p), _);
                if (p.$$typeof === ze)
                    return y(h, m, Zn(h, p), _);
                ui(h, p)
            }
            return null
        }
        function v(h, m, p, _, R) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
                return h = h.get(p) || null,
                s(m, h, "" + _, R);
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                case B:
                    return h = h.get(_.key === null ? p : _.key) || null,
                    o(m, h, _, R);
                case fe:
                    return h = h.get(_.key === null ? p : _.key) || null,
                    g(m, h, _, R);
                case $e:
                    var K = _._init;
                    return _ = K(_._payload),
                    v(h, m, p, _, R)
                }
                if (Re(_) || Ce(_))
                    return h = h.get(p) || null,
                    N(m, h, _, R, null);
                if (typeof _.then == "function")
                    return v(h, m, p, ii(_), R);
                if (_.$$typeof === ze)
                    return v(h, m, p, Zn(m, _), R);
                ui(m, _)
            }
            return null
        }
        function X(h, m, p, _) {
            for (var R = null, K = null, U = m, G = m = 0, Ee = null; U !== null && G < p.length; G++) {
                U.index > G ? (Ee = U,
                U = null) : Ee = U.sibling;
                var ee = y(h, U, p[G], _);
                if (ee === null) {
                    U === null && (U = Ee);
                    break
                }
                e && U && ee.alternate === null && t(h, U),
                m = i(ee, m, G),
                K === null ? R = ee : K.sibling = ee,
                K = ee,
                U = Ee
            }
            if (G === p.length)
                return l(h, U),
                te && Al(h, G),
                R;
            if (U === null) {
                for (; G < p.length; G++)
                    U = A(h, p[G], _),
                    U !== null && (m = i(U, m, G),
                    K === null ? R = U : K.sibling = U,
                    K = U);
                return te && Al(h, G),
                R
            }
            for (U = a(U); G < p.length; G++)
                Ee = v(U, h, G, p[G], _),
                Ee !== null && (e && Ee.alternate !== null && U.delete(Ee.key === null ? G : Ee.key),
                m = i(Ee, m, G),
                K === null ? R = Ee : K.sibling = Ee,
                K = Ee);
            return e && U.forEach(function(hl) {
                return t(h, hl)
            }),
            te && Al(h, G),
            R
        }
        function Y(h, m, p, _) {
            if (p == null)
                throw Error(r(151));
            for (var R = null, K = null, U = m, G = m = 0, Ee = null, ee = p.next(); U !== null && !ee.done; G++,
            ee = p.next()) {
                U.index > G ? (Ee = U,
                U = null) : Ee = U.sibling;
                var hl = y(h, U, ee.value, _);
                if (hl === null) {
                    U === null && (U = Ee);
                    break
                }
                e && U && hl.alternate === null && t(h, U),
                m = i(hl, m, G),
                K === null ? R = hl : K.sibling = hl,
                K = hl,
                U = Ee
            }
            if (ee.done)
                return l(h, U),
                te && Al(h, G),
                R;
            if (U === null) {
                for (; !ee.done; G++,
                ee = p.next())
                    ee = A(h, ee.value, _),
                    ee !== null && (m = i(ee, m, G),
                    K === null ? R = ee : K.sibling = ee,
                    K = ee);
                return te && Al(h, G),
                R
            }
            for (U = a(U); !ee.done; G++,
            ee = p.next())
                ee = v(U, h, G, ee.value, _),
                ee !== null && (e && ee.alternate !== null && U.delete(ee.key === null ? G : ee.key),
                m = i(ee, m, G),
                K === null ? R = ee : K.sibling = ee,
                K = ee);
            return e && U.forEach(function($h) {
                return t(h, $h)
            }),
            te && Al(h, G),
            R
        }
        function ce(h, m, p, _) {
            if (typeof p == "object" && p !== null && p.type === Be && p.key === null && (p = p.props.children),
            typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case B:
                    e: {
                        for (var R = p.key; m !== null; ) {
                            if (m.key === R) {
                                if (R = p.type,
                                R === Be) {
                                    if (m.tag === 7) {
                                        l(h, m.sibling),
                                        _ = n(m, p.props.children),
                                        _.return = h,
                                        h = _;
                                        break e
                                    }
                                } else if (m.elementType === R || typeof R == "object" && R !== null && R.$$typeof === $e && hr(R) === m.type) {
                                    l(h, m.sibling),
                                    _ = n(m, p.props),
                                    Ia(_, p),
                                    _.return = h,
                                    h = _;
                                    break e
                                }
                                l(h, m);
                                break
                            } else
                                t(h, m);
                            m = m.sibling
                        }
                        p.type === Be ? (_ = jl(p.props.children, h.mode, _, p.key),
                        _.return = h,
                        h = _) : (_ = Ln(p.type, p.key, p.props, null, h.mode, _),
                        Ia(_, p),
                        _.return = h,
                        h = _)
                    }
                    return c(h);
                case fe:
                    e: {
                        for (R = p.key; m !== null; ) {
                            if (m.key === R)
                                if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                                    l(h, m.sibling),
                                    _ = n(m, p.children || []),
                                    _.return = h,
                                    h = _;
                                    break e
                                } else {
                                    l(h, m);
                                    break
                                }
                            else
                                t(h, m);
                            m = m.sibling
                        }
                        _ = Su(p, h.mode, _),
                        _.return = h,
                        h = _
                    }
                    return c(h);
                case $e:
                    return R = p._init,
                    p = R(p._payload),
                    ce(h, m, p, _)
                }
                if (Re(p))
                    return X(h, m, p, _);
                if (Ce(p)) {
                    if (R = Ce(p),
                    typeof R != "function")
                        throw Error(r(150));
                    return p = R.call(p),
                    Y(h, m, p, _)
                }
                if (typeof p.then == "function")
                    return ce(h, m, ii(p), _);
                if (p.$$typeof === ze)
                    return ce(h, m, Zn(h, p), _);
                ui(h, p)
            }
            return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p,
            m !== null && m.tag === 6 ? (l(h, m.sibling),
            _ = n(m, p),
            _.return = h,
            h = _) : (l(h, m),
            _ = bu(p, h.mode, _),
            _.return = h,
            h = _),
            c(h)) : l(h, m)
        }
        return function(h, m, p, _) {
            try {
                Fa = 0;
                var R = ce(h, m, p, _);
                return ca = null,
                R
            } catch (U) {
                if (U === La || U === Jn)
                    throw U;
                var K = et(29, U, null, h.mode);
                return K.lanes = _,
                K.return = h,
                K
            } finally {}
        }
    }
    var sa = pr(!0)
      , gr = pr(!1)
      , dt = E(null)
      , jt = null;
    function Pt(e) {
        var t = e.alternate;
        O(_e, _e.current & 1),
        O(dt, e),
        jt === null && (t === null || aa.current !== null || t.memoizedState !== null) && (jt = e)
    }
    function yr(e) {
        if (e.tag === 22) {
            if (O(_e, _e.current),
            O(dt, e),
            jt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (jt = e)
            }
        } else
            el()
    }
    function el() {
        O(_e, _e.current),
        O(dt, dt.current)
    }
    function qt(e) {
        C(dt),
        jt === e && (jt = null),
        C(_e)
    }
    var _e = E(0);
    function ci(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || l.data === "$?" || Xc(l)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function ec(e, t, l, a) {
        t = e.memoizedState,
        l = l(a, t),
        l = l == null ? t : D({}, t, l),
        e.memoizedState = l,
        e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var tc = {
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var a = nt()
              , n = Wt(a);
            n.payload = t,
            l != null && (n.callback = l),
            t = Ft(e, n, a),
            t !== null && (it(t, e, a),
            Va(t, e, a))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var a = nt()
              , n = Wt(a);
            n.tag = 1,
            n.payload = t,
            l != null && (n.callback = l),
            t = Ft(e, n, a),
            t !== null && (it(t, e, a),
            Va(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = nt()
              , a = Wt(l);
            a.tag = 2,
            t != null && (a.callback = t),
            t = Ft(e, a, l),
            t !== null && (it(t, e, l),
            Va(t, e, l))
        }
    };
    function vr(e, t, l, a, n, i, c) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !Ra(l, a) || !Ra(n, i) : !0
    }
    function xr(e, t, l, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a),
        t.state !== e && tc.enqueueReplaceState(t, t.state, null)
    }
    function zl(e, t) {
        var l = t;
        if ("ref"in t) {
            l = {};
            for (var a in t)
                a !== "ref" && (l[a] = t[a])
        }
        if (e = e.defaultProps) {
            l === t && (l = D({}, l));
            for (var n in e)
                l[n] === void 0 && (l[n] = e[n])
        }
        return l
    }
    var si = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function br(e) {
        si(e)
    }
    function Sr(e) {
        console.error(e)
    }
    function Nr(e) {
        si(e)
    }
    function oi(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function jr(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function lc(e, t, l) {
        return l = Wt(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            oi(e, t)
        }
        ,
        l
    }
    function _r(e) {
        return e = Wt(e),
        e.tag = 3,
        e
    }
    function Ar(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var i = a.value;
            e.payload = function() {
                return n(i)
            }
            ,
            e.callback = function() {
                jr(t, l, a)
            }
        }
        var c = l.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
            jr(t, l, a),
            typeof n != "function" && (ul === null ? ul = new Set([this]) : ul.add(this));
            var s = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: s !== null ? s : ""
            })
        }
        )
    }
    function $m(e, t, l, a, n) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = l.alternate,
            t !== null && ka(t, l, n, !0),
            l = dt.current,
            l !== null) {
                switch (l.tag) {
                case 13:
                    return jt === null ? Mc() : l.alternate === null && ye === 0 && (ye = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = n,
                    a === Ou ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? l.updateQueue = new Set([a]) : t.add(a),
                    Ec(e, a, n)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === Ou ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = t) : (l = t.retryQueue,
                    l === null ? t.retryQueue = new Set([a]) : l.add(a)),
                    Ec(e, a, n)),
                    !1
                }
                throw Error(r(435, l.tag))
            }
            return Ec(e, a, n),
            Mc(),
            !1
        }
        if (te)
            return t = dt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = n,
            a !== _u && (e = Error(r(422), {
                cause: a
            }),
            Ba(st(e, l)))) : (a !== _u && (t = Error(r(423), {
                cause: a
            }),
            Ba(st(t, l))),
            e = e.current.alternate,
            e.flags |= 65536,
            n &= -n,
            e.lanes |= n,
            a = st(a, l),
            n = lc(e.stateNode, a, n),
            Ru(e, n),
            ye !== 4 && (ye = 2)),
            !1;
        var i = Error(r(520), {
            cause: a
        });
        if (i = st(i, l),
        un === null ? un = [i] : un.push(i),
        ye !== 4 && (ye = 2),
        t === null)
            return !0;
        a = st(a, l),
        l = t;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                e = n & -n,
                l.lanes |= e,
                e = lc(l.stateNode, a, e),
                Ru(l, e),
                !1;
            case 1:
                if (t = l.type,
                i = l.stateNode,
                (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ul === null || !ul.has(i))))
                    return l.flags |= 65536,
                    n &= -n,
                    l.lanes |= n,
                    n = _r(n),
                    Ar(n, e, l, a),
                    Ru(l, n),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var Mr = Error(r(461))
      , Me = !1;
    function we(e, t, l, a) {
        t.child = e === null ? gr(t, null, l, a) : sa(t, e.child, l, a)
    }
    function Tr(e, t, l, a, n) {
        l = l.render;
        var i = t.ref;
        if ("ref"in a) {
            var c = {};
            for (var s in a)
                s !== "ref" && (c[s] = a[s])
        } else
            c = a;
        return wl(t),
        a = ku(e, t, l, c, i, n),
        s = Yu(),
        e !== null && !Me ? (Gu(e, t, n),
        Bt(e, t, n)) : (te && s && Nu(t),
        t.flags |= 1,
        we(e, t, a, n),
        t.child)
    }
    function Er(e, t, l, a, n) {
        if (e === null) {
            var i = l.type;
            return typeof i == "function" && !xu(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15,
            t.type = i,
            wr(e, t, i, a, n)) : (e = Ln(l.type, null, a, t, t.mode, n),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (i = e.child,
        !rc(e, n)) {
            var c = i.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : Ra,
            l(c, a) && e.ref === t.ref)
                return Bt(e, t, n)
        }
        return t.flags |= 1,
        e = Ot(i, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function wr(e, t, l, a, n) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (Ra(i, a) && e.ref === t.ref)
                if (Me = !1,
                t.pendingProps = a = i,
                rc(e, n))
                    (e.flags & 131072) !== 0 && (Me = !0);
                else
                    return t.lanes = e.lanes,
                    Bt(e, t, n)
        }
        return ac(e, t, l, a, n)
    }
    function Dr(e, t, l) {
        var a = t.pendingProps
          , n = a.children
          , i = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (a = i !== null ? i.baseLanes | l : l,
                e !== null) {
                    for (n = t.child = e.child,
                    i = 0; n !== null; )
                        i = i | n.lanes | n.childLanes,
                        n = n.sibling;
                    t.childLanes = i & ~a
                } else
                    t.childLanes = 0,
                    t.child = null;
                return Or(e, t, a, l)
            }
            if ((l & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Kn(t, i !== null ? i.cachePool : null),
                i !== null ? wo(t, i) : Hu(),
                yr(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Or(e, t, i !== null ? i.baseLanes | l : l, l)
        } else
            i !== null ? (Kn(t, i.cachePool),
            wo(t, i),
            el(),
            t.memoizedState = null) : (e !== null && Kn(t, null),
            Hu(),
            el());
        return we(e, t, n, l),
        t.child
    }
    function Or(e, t, l, a) {
        var n = Du();
        return n = n === null ? null : {
            parent: je._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: l,
            cachePool: n
        },
        e !== null && Kn(t, null),
        Hu(),
        yr(t),
        e !== null && ka(e, t, a, !0),
        null
    }
    function ri(e, t) {
        var l = t.ref;
        if (l === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(r(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }
    function ac(e, t, l, a, n) {
        return wl(t),
        l = ku(e, t, l, a, void 0, n),
        a = Yu(),
        e !== null && !Me ? (Gu(e, t, n),
        Bt(e, t, n)) : (te && a && Nu(t),
        t.flags |= 1,
        we(e, t, l, n),
        t.child)
    }
    function zr(e, t, l, a, n, i) {
        return wl(t),
        t.updateQueue = null,
        l = Oo(t, a, l, n),
        Do(e),
        a = Yu(),
        e !== null && !Me ? (Gu(e, t, i),
        Bt(e, t, i)) : (te && a && Nu(t),
        t.flags |= 1,
        we(e, t, l, i),
        t.child)
    }
    function Cr(e, t, l, a, n) {
        if (wl(t),
        t.stateNode === null) {
            var i = Il
              , c = l.contextType;
            typeof c == "object" && c !== null && (i = He(c)),
            i = new l(a,i),
            t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
            i.updater = tc,
            t.stateNode = i,
            i._reactInternals = t,
            i = t.stateNode,
            i.props = a,
            i.state = t.memoizedState,
            i.refs = {},
            zu(t),
            c = l.contextType,
            i.context = typeof c == "object" && c !== null ? He(c) : Il,
            i.state = t.memoizedState,
            c = l.getDerivedStateFromProps,
            typeof c == "function" && (ec(t, l, c, a),
            i.state = t.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            c !== i.state && tc.enqueueReplaceState(i, i.state, null),
            Za(t, a, i, n),
            Qa(),
            i.state = t.memoizedState),
            typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (e === null) {
            i = t.stateNode;
            var s = t.memoizedProps
              , o = zl(l, s);
            i.props = o;
            var g = i.context
              , N = l.contextType;
            c = Il,
            typeof N == "object" && N !== null && (c = He(N));
            var A = l.getDerivedStateFromProps;
            N = typeof A == "function" || typeof i.getSnapshotBeforeUpdate == "function",
            s = t.pendingProps !== s,
            N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || g !== c) && xr(t, i, a, c),
            $t = !1;
            var y = t.memoizedState;
            i.state = y,
            Za(t, a, i, n),
            Qa(),
            g = t.memoizedState,
            s || y !== g || $t ? (typeof A == "function" && (ec(t, l, A, a),
            g = t.memoizedState),
            (o = $t || vr(t, l, o, a, y, g, c)) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
            typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = g),
            i.props = a,
            i.state = g,
            i.context = c,
            a = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            i = t.stateNode,
            Cu(e, t),
            c = t.memoizedProps,
            N = zl(l, c),
            i.props = N,
            A = t.pendingProps,
            y = i.context,
            g = l.contextType,
            o = Il,
            typeof g == "object" && g !== null && (o = He(g)),
            s = l.getDerivedStateFromProps,
            (g = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== A || y !== o) && xr(t, i, a, o),
            $t = !1,
            y = t.memoizedState,
            i.state = y,
            Za(t, a, i, n),
            Qa();
            var v = t.memoizedState;
            c !== A || y !== v || $t || e !== null && e.dependencies !== null && Qn(e.dependencies) ? (typeof s == "function" && (ec(t, l, s, a),
            v = t.memoizedState),
            (N = $t || vr(t, l, N, a, y, v, o) || e !== null && e.dependencies !== null && Qn(e.dependencies)) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, v, o),
            typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, v, o)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = v),
            i.props = a,
            i.state = v,
            i.context = o,
            a = N) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return i = a,
        ri(e, t),
        a = (t.flags & 128) !== 0,
        i || a ? (i = t.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(),
        t.flags |= 1,
        e !== null && a ? (t.child = sa(t, e.child, null, n),
        t.child = sa(t, null, l, n)) : we(e, t, l, n),
        t.memoizedState = i.state,
        e = t.child) : e = Bt(e, t, n),
        e
    }
    function Rr(e, t, l, a) {
        return qa(),
        t.flags |= 256,
        we(e, t, l, a),
        t.child
    }
    var nc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function ic(e) {
        return {
            baseLanes: e,
            cachePool: So()
        }
    }
    function uc(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0,
        t && (e |= mt),
        e
    }
    function Ur(e, t, l) {
        var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, c;
        if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0),
        c && (n = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (te) {
                if (n ? Pt(t) : el(),
                te) {
                    var s = ge, o;
                    if (o = s) {
                        e: {
                            for (o = s,
                            s = Nt; o.nodeType !== 8; ) {
                                if (!s) {
                                    s = null;
                                    break e
                                }
                                if (o = xt(o.nextSibling),
                                o === null) {
                                    s = null;
                                    break e
                                }
                            }
                            s = o
                        }
                        s !== null ? (t.memoizedState = {
                            dehydrated: s,
                            treeContext: _l !== null ? {
                                id: zt,
                                overflow: Ct
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        o = et(18, null, null, 0),
                        o.stateNode = s,
                        o.return = t,
                        t.child = o,
                        ke = t,
                        ge = null,
                        o = !0) : o = !1
                    }
                    o || Tl(t)
                }
                if (s = t.memoizedState,
                s !== null && (s = s.dehydrated,
                s !== null))
                    return Xc(s) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                qt(t)
            }
            return s = a.children,
            a = a.fallback,
            n ? (el(),
            n = t.mode,
            s = fi({
                mode: "hidden",
                children: s
            }, n),
            a = jl(a, n, l, null),
            s.return = t,
            a.return = t,
            s.sibling = a,
            t.child = s,
            n = t.child,
            n.memoizedState = ic(l),
            n.childLanes = uc(e, c, l),
            t.memoizedState = nc,
            a) : (Pt(t),
            cc(t, s))
        }
        if (o = e.memoizedState,
        o !== null && (s = o.dehydrated,
        s !== null)) {
            if (i)
                t.flags & 256 ? (Pt(t),
                t.flags &= -257,
                t = sc(e, t, l)) : t.memoizedState !== null ? (el(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (el(),
                n = a.fallback,
                s = t.mode,
                a = fi({
                    mode: "visible",
                    children: a.children
                }, s),
                n = jl(n, s, l, null),
                n.flags |= 2,
                a.return = t,
                n.return = t,
                a.sibling = n,
                t.child = a,
                sa(t, e.child, null, l),
                a = t.child,
                a.memoizedState = ic(l),
                a.childLanes = uc(e, c, l),
                t.memoizedState = nc,
                t = n);
            else if (Pt(t),
            Xc(s)) {
                if (c = s.nextSibling && s.nextSibling.dataset,
                c)
                    var g = c.dgst;
                c = g,
                a = Error(r(419)),
                a.stack = "",
                a.digest = c,
                Ba({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = sc(e, t, l)
            } else if (Me || ka(e, t, l, !1),
            c = (l & e.childLanes) !== 0,
            Me || c) {
                if (c = re,
                c !== null && (a = l & -l,
                a = (a & 42) !== 0 ? 1 : Vi(a),
                a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a,
                a !== 0 && a !== o.retryLane))
                    throw o.retryLane = a,
                    Fl(e, a),
                    it(c, e, a),
                    Mr;
                s.data === "$?" || Mc(),
                t = sc(e, t, l)
            } else
                s.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = o.treeContext,
                ge = xt(s.nextSibling),
                ke = t,
                te = !0,
                Ml = null,
                Nt = !1,
                e !== null && (rt[ft++] = zt,
                rt[ft++] = Ct,
                rt[ft++] = _l,
                zt = e.id,
                Ct = e.overflow,
                _l = t),
                t = cc(t, a.children),
                t.flags |= 4096);
            return t
        }
        return n ? (el(),
        n = a.fallback,
        s = t.mode,
        o = e.child,
        g = o.sibling,
        a = Ot(o, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = o.subtreeFlags & 65011712,
        g !== null ? n = Ot(g, n) : (n = jl(n, s, l, null),
        n.flags |= 2),
        n.return = t,
        a.return = t,
        a.sibling = n,
        t.child = a,
        a = n,
        n = t.child,
        s = e.child.memoizedState,
        s === null ? s = ic(l) : (o = s.cachePool,
        o !== null ? (g = je._currentValue,
        o = o.parent !== g ? {
            parent: g,
            pool: g
        } : o) : o = So(),
        s = {
            baseLanes: s.baseLanes | l,
            cachePool: o
        }),
        n.memoizedState = s,
        n.childLanes = uc(e, c, l),
        t.memoizedState = nc,
        a) : (Pt(t),
        l = e.child,
        e = l.sibling,
        l = Ot(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = t,
        l.sibling = null,
        e !== null && (c = t.deletions,
        c === null ? (t.deletions = [e],
        t.flags |= 16) : c.push(e)),
        t.child = l,
        t.memoizedState = null,
        l)
    }
    function cc(e, t) {
        return t = fi({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function fi(e, t) {
        return e = et(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function sc(e, t, l) {
        return sa(t, e.child, null, l),
        e = cc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Hr(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        Mu(e.return, t, l)
    }
    function oc(e, t, l, a, n) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n
        } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = a,
        i.tail = l,
        i.tailMode = n)
    }
    function qr(e, t, l) {
        var a = t.pendingProps
          , n = a.revealOrder
          , i = a.tail;
        if (we(e, t, a.children, l),
        a = _e.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Hr(e, l, t);
                    else if (e.tag === 19)
                        Hr(e, l, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a &= 1
        }
        switch (O(_e, a),
        n) {
        case "forwards":
            for (l = t.child,
            n = null; l !== null; )
                e = l.alternate,
                e !== null && ci(e) === null && (n = l),
                l = l.sibling;
            l = n,
            l === null ? (n = t.child,
            t.child = null) : (n = l.sibling,
            l.sibling = null),
            oc(t, !1, n, l, i);
            break;
        case "backwards":
            for (l = null,
            n = t.child,
            t.child = null; n !== null; ) {
                if (e = n.alternate,
                e !== null && ci(e) === null) {
                    t.child = n;
                    break
                }
                e = n.sibling,
                n.sibling = l,
                l = n,
                n = e
            }
            oc(t, !0, l, null, i);
            break;
        case "together":
            oc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Bt(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies),
        il |= t.lanes,
        (l & t.childLanes) === 0)
            if (e !== null) {
                if (ka(e, t, l, !1),
                (l & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child,
            l = Ot(e, e.pendingProps),
            t.child = l,
            l.return = t; e.sibling !== null; )
                e = e.sibling,
                l = l.sibling = Ot(e, e.pendingProps),
                l.return = t;
            l.sibling = null
        }
        return t.child
    }
    function rc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Qn(e)))
    }
    function Wm(e, t, l) {
        switch (t.tag) {
        case 3:
            de(t, t.stateNode.containerInfo),
            Jt(t, je, e.memoizedState.cache),
            qa();
            break;
        case 27:
        case 5:
            ki(t);
            break;
        case 4:
            de(t, t.stateNode.containerInfo);
            break;
        case 10:
            Jt(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (Pt(t),
                t.flags |= 128,
                null) : (l & t.child.childLanes) !== 0 ? Ur(e, t, l) : (Pt(t),
                e = Bt(e, t, l),
                e !== null ? e.sibling : null);
            Pt(t);
            break;
        case 19:
            var n = (e.flags & 128) !== 0;
            if (a = (l & t.childLanes) !== 0,
            a || (ka(e, t, l, !1),
            a = (l & t.childLanes) !== 0),
            n) {
                if (a)
                    return qr(e, t, l);
                t.flags |= 128
            }
            if (n = t.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            O(_e, _e.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Dr(e, t, l);
        case 24:
            Jt(t, je, e.memoizedState.cache)
        }
        return Bt(e, t, l)
    }
    function Br(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Me = !0;
            else {
                if (!rc(e, l) && (t.flags & 128) === 0)
                    return Me = !1,
                    Wm(e, t, l);
                Me = (e.flags & 131072) !== 0
            }
        else
            Me = !1,
            te && (t.flags & 1048576) !== 0 && ho(t, Vn, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var a = t.elementType
                  , n = a._init;
                if (a = n(a._payload),
                t.type = a,
                typeof a == "function")
                    xu(a) ? (e = zl(a, e),
                    t.tag = 1,
                    t = Cr(null, t, a, e, l)) : (t.tag = 0,
                    t = ac(null, t, a, e, l));
                else {
                    if (a != null) {
                        if (n = a.$$typeof,
                        n === gt) {
                            t.tag = 11,
                            t = Tr(null, t, a, e, l);
                            break e
                        } else if (n === Je) {
                            t.tag = 14,
                            t = Er(null, t, a, e, l);
                            break e
                        }
                    }
                    throw t = yl(a) || a,
                    Error(r(306, t, ""))
                }
            }
            return t;
        case 0:
            return ac(e, t, t.type, t.pendingProps, l);
        case 1:
            return a = t.type,
            n = zl(a, t.pendingProps),
            Cr(e, t, a, n, l);
        case 3:
            e: {
                if (de(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(r(387));
                a = t.pendingProps;
                var i = t.memoizedState;
                n = i.element,
                Cu(e, t),
                Za(t, a, null, l);
                var c = t.memoizedState;
                if (a = c.cache,
                Jt(t, je, a),
                a !== i.cache && Tu(t, [je], l, !0),
                Qa(),
                a = c.element,
                i.isDehydrated)
                    if (i = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = i,
                    t.memoizedState = i,
                    t.flags & 256) {
                        t = Rr(e, t, a, l);
                        break e
                    } else if (a !== n) {
                        n = st(Error(r(424)), t),
                        Ba(n),
                        t = Rr(e, t, a, l);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (ge = xt(e.firstChild),
                        ke = t,
                        te = !0,
                        Ml = null,
                        Nt = !0,
                        l = gr(t, null, a, l),
                        t.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling
                    }
                else {
                    if (qa(),
                    a === n) {
                        t = Bt(e, t, l);
                        break e
                    }
                    we(e, t, a, l)
                }
                t = t.child
            }
            return t;
        case 26:
            return ri(e, t),
            e === null ? (l = Xf(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : te || (l = t.type,
            e = t.pendingProps,
            a = Ai(V.current).createElement(l),
            a[Ue] = t,
            a[Le] = e,
            Oe(a, l, e),
            Ae(a),
            t.stateNode = a) : t.memoizedState = Xf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return ki(t),
            e === null && te && (a = t.stateNode = Yf(t.type, t.pendingProps, V.current),
            ke = t,
            Nt = !0,
            n = ge,
            ol(t.type) ? (Vc = n,
            ge = xt(a.firstChild)) : ge = n),
            we(e, t, t.pendingProps.children, l),
            ri(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && te && ((n = a = ge) && (a = _h(a, t.type, t.pendingProps, Nt),
            a !== null ? (t.stateNode = a,
            ke = t,
            ge = xt(a.firstChild),
            Nt = !1,
            n = !0) : n = !1),
            n || Tl(t)),
            ki(t),
            n = t.type,
            i = t.pendingProps,
            c = e !== null ? e.memoizedProps : null,
            a = i.children,
            Yc(n, i) ? a = null : c !== null && Yc(n, c) && (t.flags |= 32),
            t.memoizedState !== null && (n = ku(e, t, Lm, null, null, l),
            pn._currentValue = n),
            ri(e, t),
            we(e, t, a, l),
            t.child;
        case 6:
            return e === null && te && ((e = l = ge) && (l = Ah(l, t.pendingProps, Nt),
            l !== null ? (t.stateNode = l,
            ke = t,
            ge = null,
            e = !0) : e = !1),
            e || Tl(t)),
            null;
        case 13:
            return Ur(e, t, l);
        case 4:
            return de(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = sa(t, null, a, l) : we(e, t, a, l),
            t.child;
        case 11:
            return Tr(e, t, t.type, t.pendingProps, l);
        case 7:
            return we(e, t, t.pendingProps, l),
            t.child;
        case 8:
            return we(e, t, t.pendingProps.children, l),
            t.child;
        case 12:
            return we(e, t, t.pendingProps.children, l),
            t.child;
        case 10:
            return a = t.pendingProps,
            Jt(t, t.type, a.value),
            we(e, t, a.children, l),
            t.child;
        case 9:
            return n = t.type._context,
            a = t.pendingProps.children,
            wl(t),
            n = He(n),
            a = a(n),
            t.flags |= 1,
            we(e, t, a, l),
            t.child;
        case 14:
            return Er(e, t, t.type, t.pendingProps, l);
        case 15:
            return wr(e, t, t.type, t.pendingProps, l);
        case 19:
            return qr(e, t, l);
        case 31:
            return a = t.pendingProps,
            l = t.mode,
            a = {
                mode: a.mode,
                children: a.children
            },
            e === null ? (l = fi(a, l),
            l.ref = t.ref,
            t.child = l,
            l.return = t,
            t = l) : (l = Ot(e.child, a),
            l.ref = t.ref,
            t.child = l,
            l.return = t,
            t = l),
            t;
        case 22:
            return Dr(e, t, l);
        case 24:
            return wl(t),
            a = He(je),
            e === null ? (n = Du(),
            n === null && (n = re,
            i = Eu(),
            n.pooledCache = i,
            i.refCount++,
            i !== null && (n.pooledCacheLanes |= l),
            n = i),
            t.memoizedState = {
                parent: a,
                cache: n
            },
            zu(t),
            Jt(t, je, n)) : ((e.lanes & l) !== 0 && (Cu(e, t),
            Za(t, null, null, l),
            Qa()),
            n = e.memoizedState,
            i = t.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            t.memoizedState = n,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
            Jt(t, je, a)) : (a = i.cache,
            Jt(t, je, a),
            a !== n.cache && Tu(t, [je], l, !0))),
            we(e, t, t.pendingProps.children, l),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }
    function kt(e) {
        e.flags |= 4
    }
    function kr(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Jf(t)) {
            if (t = dt.current,
            t !== null && ((F & 4194048) === F ? jt !== null : (F & 62914560) !== F && (F & 536870912) === 0 || t !== jt))
                throw Xa = Ou,
                No;
            e.flags |= 8192
        }
    }
    function di(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? gs() : 536870912,
        e.lanes |= t,
        da |= t)
    }
    function Pa(e, t) {
        if (!te)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null; )
                    t.alternate !== null && (l = t),
                    t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function pe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , l = 0
          , a = 0;
        if (t)
            for (var n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = e,
                n = n.sibling;
        else
            for (n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = e,
                n = n.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = l,
        t
    }
    function Fm(e, t, l) {
        var a = t.pendingProps;
        switch (ju(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return pe(t),
            null;
        case 1:
            return pe(t),
            null;
        case 3:
            return l = t.stateNode,
            a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Ut(je),
            Vt(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (Ha(t) ? kt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            yo())),
            pe(t),
            null;
        case 26:
            return l = t.memoizedState,
            e === null ? (kt(t),
            l !== null ? (pe(t),
            kr(t, l)) : (pe(t),
            t.flags &= -16777217)) : l ? l !== e.memoizedState ? (kt(t),
            pe(t),
            kr(t, l)) : (pe(t),
            t.flags &= -16777217) : (e.memoizedProps !== a && kt(t),
            pe(t),
            t.flags &= -16777217),
            null;
        case 27:
            jn(t),
            l = V.current;
            var n = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== a && kt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return pe(t),
                    null
                }
                e = k.current,
                Ha(t) ? po(t) : (e = Yf(n, a, l),
                t.stateNode = e,
                kt(t))
            }
            return pe(t),
            null;
        case 5:
            if (jn(t),
            l = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && kt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return pe(t),
                    null
                }
                if (e = k.current,
                Ha(t))
                    po(t);
                else {
                    switch (n = Ai(V.current),
                    e) {
                    case 1:
                        e = n.createElementNS("http://www.w3.org/2000/svg", l);
                        break;
                    case 2:
                        e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                        break;
                    default:
                        switch (l) {
                        case "svg":
                            e = n.createElementNS("http://www.w3.org/2000/svg", l);
                            break;
                        case "math":
                            e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                            break;
                        case "script":
                            e = n.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof a.is == "string" ? n.createElement("select", {
                                is: a.is
                            }) : n.createElement("select"),
                            a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                            break;
                        default:
                            e = typeof a.is == "string" ? n.createElement(l, {
                                is: a.is
                            }) : n.createElement(l)
                        }
                    }
                    e[Ue] = t,
                    e[Le] = a;
                    e: for (n = t.child; n !== null; ) {
                        if (n.tag === 5 || n.tag === 6)
                            e.appendChild(n.stateNode);
                        else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                            n.child.return = n,
                            n = n.child;
                            continue
                        }
                        if (n === t)
                            break e;
                        for (; n.sibling === null; ) {
                            if (n.return === null || n.return === t)
                                break e;
                            n = n.return
                        }
                        n.sibling.return = n.return,
                        n = n.sibling
                    }
                    t.stateNode = e;
                    e: switch (Oe(e, l, a),
                    l) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!a.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && kt(t)
                }
            }
            return pe(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== a && kt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(r(166));
                if (e = V.current,
                Ha(t)) {
                    if (e = t.stateNode,
                    l = t.memoizedProps,
                    a = null,
                    n = ke,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    e[Ue] = t,
                    e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Cf(e.nodeValue, l)),
                    e || Tl(t)
                } else
                    e = Ai(e).createTextNode(a),
                    e[Ue] = t,
                    t.stateNode = e
            }
            return pe(t),
            null;
        case 13:
            if (a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (n = Ha(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!n)
                            throw Error(r(318));
                        if (n = t.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(r(317));
                        n[Ue] = t
                    } else
                        qa(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    pe(t),
                    n = !1
                } else
                    n = yo(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return t.flags & 256 ? (qt(t),
                    t) : (qt(t),
                    null)
            }
            if (qt(t),
            (t.flags & 128) !== 0)
                return t.lanes = l,
                t;
            if (l = a !== null,
            e = e !== null && e.memoizedState !== null,
            l) {
                a = t.child,
                n = null,
                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
                var i = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool),
                i !== n && (a.flags |= 2048)
            }
            return l !== e && l && (t.child.flags |= 8192),
            di(t, t.updateQueue),
            pe(t),
            null;
        case 4:
            return Vt(),
            e === null && Uc(t.stateNode.containerInfo),
            pe(t),
            null;
        case 10:
            return Ut(t.type),
            pe(t),
            null;
        case 19:
            if (C(_e),
            n = t.memoizedState,
            n === null)
                return pe(t),
                null;
            if (a = (t.flags & 128) !== 0,
            i = n.rendering,
            i === null)
                if (a)
                    Pa(n, !1);
                else {
                    if (ye !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (i = ci(e),
                            i !== null) {
                                for (t.flags |= 128,
                                Pa(n, !1),
                                e = i.updateQueue,
                                t.updateQueue = e,
                                di(t, e),
                                t.subtreeFlags = 0,
                                e = l,
                                l = t.child; l !== null; )
                                    mo(l, e),
                                    l = l.sibling;
                                return O(_e, _e.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    n.tail !== null && St() > pi && (t.flags |= 128,
                    a = !0,
                    Pa(n, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = ci(i),
                    e !== null) {
                        if (t.flags |= 128,
                        a = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        di(t, e),
                        Pa(n, !0),
                        n.tail === null && n.tailMode === "hidden" && !i.alternate && !te)
                            return pe(t),
                            null
                    } else
                        2 * St() - n.renderingStartTime > pi && l !== 536870912 && (t.flags |= 128,
                        a = !0,
                        Pa(n, !1),
                        t.lanes = 4194304);
                n.isBackwards ? (i.sibling = t.child,
                t.child = i) : (e = n.last,
                e !== null ? e.sibling = i : t.child = i,
                n.last = i)
            }
            return n.tail !== null ? (t = n.tail,
            n.rendering = t,
            n.tail = t.sibling,
            n.renderingStartTime = St(),
            t.sibling = null,
            e = _e.current,
            O(_e, a ? e & 1 | 2 : e & 1),
            t) : (pe(t),
            null);
        case 22:
        case 23:
            return qt(t),
            qu(),
            a = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (pe(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t),
            l = t.updateQueue,
            l !== null && di(t, l.retryQueue),
            l = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== l && (t.flags |= 2048),
            e !== null && C(Dl),
            null;
        case 24:
            return l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            Ut(je),
            pe(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, t.tag))
    }
    function Im(e, t) {
        switch (ju(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Ut(je),
            Vt(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return jn(t),
            null;
        case 13:
            if (qt(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(r(340));
                qa()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return C(_e),
            null;
        case 4:
            return Vt(),
            null;
        case 10:
            return Ut(t.type),
            null;
        case 22:
        case 23:
            return qt(t),
            qu(),
            e !== null && C(Dl),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Ut(je),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Yr(e, t) {
        switch (ju(t),
        t.tag) {
        case 3:
            Ut(je),
            Vt();
            break;
        case 26:
        case 27:
        case 5:
            jn(t);
            break;
        case 4:
            Vt();
            break;
        case 13:
            qt(t);
            break;
        case 19:
            C(_e);
            break;
        case 10:
            Ut(t.type);
            break;
        case 22:
        case 23:
            qt(t),
            qu(),
            e !== null && C(Dl);
            break;
        case 24:
            Ut(je)
        }
    }
    function en(e, t) {
        try {
            var l = t.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var i = l.create
                          , c = l.inst;
                        a = i(),
                        c.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (s) {
            oe(t, t.return, s)
        }
    }
    function tl(e, t, l) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var i = n.next;
                a = i;
                do {
                    if ((a.tag & e) === e) {
                        var c = a.inst
                          , s = c.destroy;
                        if (s !== void 0) {
                            c.destroy = void 0,
                            n = t;
                            var o = l
                              , g = s;
                            try {
                                g()
                            } catch (N) {
                                oe(n, o, N)
                            }
                        }
                    }
                    a = a.next
                } while (a !== i)
            }
        } catch (N) {
            oe(t, t.return, N)
        }
    }
    function Gr(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                Eo(t, l)
            } catch (a) {
                oe(e, e.return, a)
            }
        }
    }
    function Lr(e, t, l) {
        l.props = zl(e.type, e.memoizedProps),
        l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            oe(e, t, a)
        }
    }
    function tn(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var a = e.stateNode;
                    break;
                case 30:
                    a = e.stateNode;
                    break;
                default:
                    a = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            oe(e, t, n)
        }
    }
    function _t(e, t) {
        var l = e.ref
          , a = e.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    oe(e, t, n)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    oe(e, t, n)
                }
            else
                l.current = null
    }
    function Xr(e) {
        var t = e.type
          , l = e.memoizedProps
          , a = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break e;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            oe(e, e.return, n)
        }
    }
    function fc(e, t, l) {
        try {
            var a = e.stateNode;
            xh(a, e.type, l, t),
            a[Le] = t
        } catch (n) {
            oe(e, e.return, n)
        }
    }
    function Vr(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ol(e.type) || e.tag === 4
    }
    function dc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Vr(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && ol(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function mc(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            t.appendChild(e),
            l = l._reactRootContainer,
            l != null || t.onclick !== null || (t.onclick = _i));
        else if (a !== 4 && (a === 27 && ol(e.type) && (l = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (mc(e, t, l),
            e = e.sibling; e !== null; )
                mc(e, t, l),
                e = e.sibling
    }
    function mi(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (a !== 4 && (a === 27 && ol(e.type) && (l = e.stateNode),
        e = e.child,
        e !== null))
            for (mi(e, t, l),
            e = e.sibling; e !== null; )
                mi(e, t, l),
                e = e.sibling
    }
    function Qr(e) {
        var t = e.stateNode
          , l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length; )
                t.removeAttributeNode(n[0]);
            Oe(t, a, l),
            t[Ue] = e,
            t[Le] = l
        } catch (i) {
            oe(e, e.return, i)
        }
    }
    var Yt = !1
      , xe = !1
      , hc = !1
      , Zr = typeof WeakSet == "function" ? WeakSet : Set
      , Te = null;
    function Pm(e, t) {
        if (e = e.containerInfo,
        Bc = Oi,
        e = lo(e),
        du(e)) {
            if ("selectionStart"in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                          , i = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            i.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var c = 0
                          , s = -1
                          , o = -1
                          , g = 0
                          , N = 0
                          , A = e
                          , y = null;
                        t: for (; ; ) {
                            for (var v; A !== l || n !== 0 && A.nodeType !== 3 || (s = c + n),
                            A !== i || a !== 0 && A.nodeType !== 3 || (o = c + a),
                            A.nodeType === 3 && (c += A.nodeValue.length),
                            (v = A.firstChild) !== null; )
                                y = A,
                                A = v;
                            for (; ; ) {
                                if (A === e)
                                    break t;
                                if (y === l && ++g === n && (s = c),
                                y === i && ++N === a && (o = c),
                                (v = A.nextSibling) !== null)
                                    break;
                                A = y,
                                y = A.parentNode
                            }
                            A = v
                        }
                        l = s === -1 || o === -1 ? null : {
                            start: s,
                            end: o
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (kc = {
            focusedElem: e,
            selectionRange: l
        },
        Oi = !1,
        Te = t; Te !== null; )
            if (t = Te,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Te = e;
            else
                for (; Te !== null; ) {
                    switch (t = Te,
                    i = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && i !== null) {
                            e = void 0,
                            l = t,
                            n = i.memoizedProps,
                            i = i.memoizedState,
                            a = l.stateNode;
                            try {
                                var X = zl(l.type, n, l.elementType === l.type);
                                e = a.getSnapshotBeforeUpdate(X, i),
                                a.__reactInternalSnapshotBeforeUpdate = e
                            } catch (Y) {
                                oe(l, l.return, Y)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            l = e.nodeType,
                            l === 9)
                                Lc(e);
                            else if (l === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Lc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Te = e;
                        break
                    }
                    Te = t.return
                }
    }
    function Kr(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            ll(e, l),
            a & 4 && en(5, l);
            break;
        case 1:
            if (ll(e, l),
            a & 4)
                if (e = l.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (c) {
                        oe(l, l.return, c)
                    }
                else {
                    var n = zl(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        oe(l, l.return, c)
                    }
                }
            a & 64 && Gr(l),
            a & 512 && tn(l, l.return);
            break;
        case 3:
            if (ll(e, l),
            a & 64 && (e = l.updateQueue,
            e !== null)) {
                if (t = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        t = l.child.stateNode;
                        break;
                    case 1:
                        t = l.child.stateNode
                    }
                try {
                    Eo(e, t)
                } catch (c) {
                    oe(l, l.return, c)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Qr(l);
        case 26:
        case 5:
            ll(e, l),
            t === null && a & 4 && Xr(l),
            a & 512 && tn(l, l.return);
            break;
        case 12:
            ll(e, l);
            break;
        case 13:
            ll(e, l),
            a & 4 && Wr(e, l),
            a & 64 && (e = l.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (l = sh.bind(null, l),
            Mh(e, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || Yt,
            !a) {
                t = t !== null && t.memoizedState !== null || xe,
                n = Yt;
                var i = xe;
                Yt = a,
                (xe = t) && !i ? al(e, l, (l.subtreeFlags & 8772) !== 0) : ll(e, l),
                Yt = n,
                xe = i
            }
            break;
        case 30:
            break;
        default:
            ll(e, l)
        }
    }
    function Jr(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Jr(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Ki(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var me = null
      , Qe = !1;
    function Gt(e, t, l) {
        for (l = l.child; l !== null; )
            $r(e, t, l),
            l = l.sibling
    }
    function $r(e, t, l) {
        if (Fe && typeof Fe.onCommitFiberUnmount == "function")
            try {
                Fe.onCommitFiberUnmount(Na, l)
            } catch {}
        switch (l.tag) {
        case 26:
            xe || _t(l, t),
            Gt(e, t, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            xe || _t(l, t);
            var a = me
              , n = Qe;
            ol(l.type) && (me = l.stateNode,
            Qe = !1),
            Gt(e, t, l),
            fn(l.stateNode),
            me = a,
            Qe = n;
            break;
        case 5:
            xe || _t(l, t);
        case 6:
            if (a = me,
            n = Qe,
            me = null,
            Gt(e, t, l),
            me = a,
            Qe = n,
            me !== null)
                if (Qe)
                    try {
                        (me.nodeType === 9 ? me.body : me.nodeName === "HTML" ? me.ownerDocument.body : me).removeChild(l.stateNode)
                    } catch (i) {
                        oe(l, t, i)
                    }
                else
                    try {
                        me.removeChild(l.stateNode)
                    } catch (i) {
                        oe(l, t, i)
                    }
            break;
        case 18:
            me !== null && (Qe ? (e = me,
            Bf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode),
            xn(e)) : Bf(me, l.stateNode));
            break;
        case 4:
            a = me,
            n = Qe,
            me = l.stateNode.containerInfo,
            Qe = !0,
            Gt(e, t, l),
            me = a,
            Qe = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            xe || tl(2, l, t),
            xe || tl(4, l, t),
            Gt(e, t, l);
            break;
        case 1:
            xe || (_t(l, t),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && Lr(l, t, a)),
            Gt(e, t, l);
            break;
        case 21:
            Gt(e, t, l);
            break;
        case 22:
            xe = (a = xe) || l.memoizedState !== null,
            Gt(e, t, l),
            xe = a;
            break;
        default:
            Gt(e, t, l)
        }
    }
    function Wr(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                xn(e)
            } catch (l) {
                oe(t, t.return, l)
            }
    }
    function eh(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Zr),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Zr),
            t;
        default:
            throw Error(r(435, e.tag))
        }
    }
    function pc(e, t) {
        var l = eh(e);
        t.forEach(function(a) {
            var n = oh.bind(null, e, a);
            l.has(a) || (l.add(a),
            a.then(n, n))
        })
    }
    function tt(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                  , i = e
                  , c = t
                  , s = c;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 27:
                        if (ol(s.type)) {
                            me = s.stateNode,
                            Qe = !1;
                            break e
                        }
                        break;
                    case 5:
                        me = s.stateNode,
                        Qe = !1;
                        break e;
                    case 3:
                    case 4:
                        me = s.stateNode.containerInfo,
                        Qe = !0;
                        break e
                    }
                    s = s.return
                }
                if (me === null)
                    throw Error(r(160));
                $r(i, c, n),
                me = null,
                Qe = !1,
                i = n.alternate,
                i !== null && (i.return = null),
                n.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                Fr(t, e),
                t = t.sibling
    }
    var vt = null;
    function Fr(e, t) {
        var l = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            tt(t, e),
            lt(e),
            a & 4 && (tl(3, e, e.return),
            en(3, e),
            tl(5, e, e.return));
            break;
        case 1:
            tt(t, e),
            lt(e),
            a & 512 && (xe || l === null || _t(l, l.return)),
            a & 64 && Yt && (e = e.updateQueue,
            e !== null && (a = e.callbacks,
            a !== null && (l = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var n = vt;
            if (tt(t, e),
            lt(e),
            a & 512 && (xe || l === null || _t(l, l.return)),
            a & 4) {
                var i = l !== null ? l.memoizedState : null;
                if (a = e.memoizedState,
                l === null)
                    if (a === null)
                        if (e.stateNode === null) {
                            e: {
                                a = e.type,
                                l = e.memoizedProps,
                                n = n.ownerDocument || n;
                                t: switch (a) {
                                case "title":
                                    i = n.getElementsByTagName("title")[0],
                                    (!i || i[Aa] || i[Ue] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a),
                                    n.head.insertBefore(i, n.querySelector("head > title"))),
                                    Oe(i, a, l),
                                    i[Ue] = e,
                                    Ae(i),
                                    a = i;
                                    break e;
                                case "link":
                                    var c = Zf("link", "href", n).get(a + (l.href || ""));
                                    if (c) {
                                        for (var s = 0; s < c.length; s++)
                                            if (i = c[s],
                                            i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                c.splice(s, 1);
                                                break t
                                            }
                                    }
                                    i = n.createElement(a),
                                    Oe(i, a, l),
                                    n.head.appendChild(i);
                                    break;
                                case "meta":
                                    if (c = Zf("meta", "content", n).get(a + (l.content || ""))) {
                                        for (s = 0; s < c.length; s++)
                                            if (i = c[s],
                                            i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                c.splice(s, 1);
                                                break t
                                            }
                                    }
                                    i = n.createElement(a),
                                    Oe(i, a, l),
                                    n.head.appendChild(i);
                                    break;
                                default:
                                    throw Error(r(468, a))
                                }
                                i[Ue] = e,
                                Ae(i),
                                a = i
                            }
                            e.stateNode = a
                        } else
                            Kf(n, e.type, e.stateNode);
                    else
                        e.stateNode = Qf(n, a, e.memoizedProps);
                else
                    i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : i.count--,
                    a === null ? Kf(n, e.type, e.stateNode) : Qf(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && fc(e, e.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            tt(t, e),
            lt(e),
            a & 512 && (xe || l === null || _t(l, l.return)),
            l !== null && a & 4 && fc(e, e.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (tt(t, e),
            lt(e),
            a & 512 && (xe || l === null || _t(l, l.return)),
            e.flags & 32) {
                n = e.stateNode;
                try {
                    Vl(n, "")
                } catch (v) {
                    oe(e, e.return, v)
                }
            }
            a & 4 && e.stateNode != null && (n = e.memoizedProps,
            fc(e, n, l !== null ? l.memoizedProps : n)),
            a & 1024 && (hc = !0);
            break;
        case 6:
            if (tt(t, e),
            lt(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(r(162));
                a = e.memoizedProps,
                l = e.stateNode;
                try {
                    l.nodeValue = a
                } catch (v) {
                    oe(e, e.return, v)
                }
            }
            break;
        case 3:
            if (Ei = null,
            n = vt,
            vt = Mi(t.containerInfo),
            tt(t, e),
            vt = n,
            lt(e),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    xn(t.containerInfo)
                } catch (v) {
                    oe(e, e.return, v)
                }
            hc && (hc = !1,
            Ir(e));
            break;
        case 4:
            a = vt,
            vt = Mi(e.stateNode.containerInfo),
            tt(t, e),
            lt(e),
            vt = a;
            break;
        case 12:
            tt(t, e),
            lt(e);
            break;
        case 13:
            tt(t, e),
            lt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Sc = St()),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            pc(e, a)));
            break;
        case 22:
            n = e.memoizedState !== null;
            var o = l !== null && l.memoizedState !== null
              , g = Yt
              , N = xe;
            if (Yt = g || n,
            xe = N || o,
            tt(t, e),
            xe = N,
            Yt = g,
            lt(e),
            a & 8192)
                e: for (t = e.stateNode,
                t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                n && (l === null || o || Yt || xe || Cl(e)),
                l = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            o = l = t;
                            try {
                                if (i = o.stateNode,
                                n)
                                    c = i.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    s = o.stateNode;
                                    var A = o.memoizedProps.style
                                      , y = A != null && A.hasOwnProperty("display") ? A.display : null;
                                    s.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim()
                                }
                            } catch (v) {
                                oe(o, o.return, v)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            o = t;
                            try {
                                o.stateNode.nodeValue = n ? "" : o.memoizedProps
                            } catch (v) {
                                oe(o, o.return, v)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        l === t && (l = null),
                        t = t.return
                    }
                    l === t && (l = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = e.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            pc(e, l))));
            break;
        case 19:
            tt(t, e),
            lt(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            pc(e, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            tt(t, e),
            lt(e)
        }
    }
    function lt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null; ) {
                    if (Vr(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(r(160));
                switch (l.tag) {
                case 27:
                    var n = l.stateNode
                      , i = dc(e);
                    mi(e, i, n);
                    break;
                case 5:
                    var c = l.stateNode;
                    l.flags & 32 && (Vl(c, ""),
                    l.flags &= -33);
                    var s = dc(e);
                    mi(e, s, c);
                    break;
                case 3:
                case 4:
                    var o = l.stateNode.containerInfo
                      , g = dc(e);
                    mc(e, g, o);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (N) {
                oe(e, e.return, N)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Ir(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Ir(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function ll(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Kr(e, t.alternate, t),
                t = t.sibling
    }
    function Cl(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                tl(4, t, t.return),
                Cl(t);
                break;
            case 1:
                _t(t, t.return);
                var l = t.stateNode;
                typeof l.componentWillUnmount == "function" && Lr(t, t.return, l),
                Cl(t);
                break;
            case 27:
                fn(t.stateNode);
            case 26:
            case 5:
                _t(t, t.return),
                Cl(t);
                break;
            case 22:
                t.memoizedState === null && Cl(t);
                break;
            case 30:
                Cl(t);
                break;
            default:
                Cl(t)
            }
            e = e.sibling
        }
    }
    function al(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , n = e
              , i = t
              , c = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                al(n, i, l),
                en(4, i);
                break;
            case 1:
                if (al(n, i, l),
                a = i,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (g) {
                        oe(a, a.return, g)
                    }
                if (a = i,
                n = a.updateQueue,
                n !== null) {
                    var s = a.stateNode;
                    try {
                        var o = n.shared.hiddenCallbacks;
                        if (o !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < o.length; n++)
                                To(o[n], s)
                    } catch (g) {
                        oe(a, a.return, g)
                    }
                }
                l && c & 64 && Gr(i),
                tn(i, i.return);
                break;
            case 27:
                Qr(i);
            case 26:
            case 5:
                al(n, i, l),
                l && a === null && c & 4 && Xr(i),
                tn(i, i.return);
                break;
            case 12:
                al(n, i, l);
                break;
            case 13:
                al(n, i, l),
                l && c & 4 && Wr(n, i);
                break;
            case 22:
                i.memoizedState === null && al(n, i, l),
                tn(i, i.return);
                break;
            case 30:
                break;
            default:
                al(n, i, l)
            }
            t = t.sibling
        }
    }
    function gc(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++,
        l != null && Ya(l))
    }
    function yc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Ya(e))
    }
    function At(e, t, l, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Pr(e, t, l, a),
                t = t.sibling
    }
    function Pr(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            At(e, t, l, a),
            n & 2048 && en(9, t);
            break;
        case 1:
            At(e, t, l, a);
            break;
        case 3:
            At(e, t, l, a),
            n & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Ya(e)));
            break;
        case 12:
            if (n & 2048) {
                At(e, t, l, a),
                e = t.stateNode;
                try {
                    var i = t.memoizedProps
                      , c = i.id
                      , s = i.onPostCommit;
                    typeof s == "function" && s(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (o) {
                    oe(t, t.return, o)
                }
            } else
                At(e, t, l, a);
            break;
        case 13:
            At(e, t, l, a);
            break;
        case 23:
            break;
        case 22:
            i = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? i._visibility & 2 ? At(e, t, l, a) : ln(e, t) : i._visibility & 2 ? At(e, t, l, a) : (i._visibility |= 2,
            oa(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
            n & 2048 && gc(c, t);
            break;
        case 24:
            At(e, t, l, a),
            n & 2048 && yc(t.alternate, t);
            break;
        default:
            At(e, t, l, a)
        }
    }
    function oa(e, t, l, a, n) {
        for (n = n && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var i = e
              , c = t
              , s = l
              , o = a
              , g = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                oa(i, c, s, o, n),
                en(8, c);
                break;
            case 23:
                break;
            case 22:
                var N = c.stateNode;
                c.memoizedState !== null ? N._visibility & 2 ? oa(i, c, s, o, n) : ln(i, c) : (N._visibility |= 2,
                oa(i, c, s, o, n)),
                n && g & 2048 && gc(c.alternate, c);
                break;
            case 24:
                oa(i, c, s, o, n),
                n && g & 2048 && yc(c.alternate, c);
                break;
            default:
                oa(i, c, s, o, n)
            }
            t = t.sibling
        }
    }
    function ln(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e
                  , a = t
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    ln(l, a),
                    n & 2048 && gc(a.alternate, a);
                    break;
                case 24:
                    ln(l, a),
                    n & 2048 && yc(a.alternate, a);
                    break;
                default:
                    ln(l, a)
                }
                t = t.sibling
            }
    }
    var an = 8192;
    function ra(e) {
        if (e.subtreeFlags & an)
            for (e = e.child; e !== null; )
                ef(e),
                e = e.sibling
    }
    function ef(e) {
        switch (e.tag) {
        case 26:
            ra(e),
            e.flags & an && e.memoizedState !== null && kh(vt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            ra(e);
            break;
        case 3:
        case 4:
            var t = vt;
            vt = Mi(e.stateNode.containerInfo),
            ra(e),
            vt = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = an,
            an = 16777216,
            ra(e),
            an = t) : ra(e));
            break;
        default:
            ra(e)
        }
    }
    function tf(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function nn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Te = a,
                    af(a, e)
                }
            tf(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                lf(e),
                e = e.sibling
    }
    function lf(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            nn(e),
            e.flags & 2048 && tl(9, e, e.return);
            break;
        case 3:
            nn(e);
            break;
        case 12:
            nn(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            hi(e)) : nn(e);
            break;
        default:
            nn(e)
        }
    }
    function hi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Te = a,
                    af(a, e)
                }
            tf(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                tl(8, t, t.return),
                hi(t);
                break;
            case 22:
                l = t.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                hi(t));
                break;
            default:
                hi(t)
            }
            e = e.sibling
        }
    }
    function af(e, t) {
        for (; Te !== null; ) {
            var l = Te;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                tl(8, l, t);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Ya(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                Te = a;
            else
                e: for (l = e; Te !== null; ) {
                    a = Te;
                    var n = a.sibling
                      , i = a.return;
                    if (Jr(a),
                    a === l) {
                        Te = null;
                        break e
                    }
                    if (n !== null) {
                        n.return = i,
                        Te = n;
                        break e
                    }
                    Te = i
                }
        }
    }
    var th = {
        getCacheForType: function(e) {
            var t = He(je)
              , l = t.data.get(e);
            return l === void 0 && (l = e(),
            t.data.set(e, l)),
            l
        }
    }
      , lh = typeof WeakMap == "function" ? WeakMap : Map
      , ae = 0
      , re = null
      , J = null
      , F = 0
      , ne = 0
      , at = null
      , nl = !1
      , fa = !1
      , vc = !1
      , Lt = 0
      , ye = 0
      , il = 0
      , Rl = 0
      , xc = 0
      , mt = 0
      , da = 0
      , un = null
      , Ze = null
      , bc = !1
      , Sc = 0
      , pi = 1 / 0
      , gi = null
      , ul = null
      , De = 0
      , cl = null
      , ma = null
      , ha = 0
      , Nc = 0
      , jc = null
      , nf = null
      , cn = 0
      , _c = null;
    function nt() {
        if ((ae & 2) !== 0 && F !== 0)
            return F & -F;
        if (j.T !== null) {
            var e = ta;
            return e !== 0 ? e : Oc()
        }
        return xs()
    }
    function uf() {
        mt === 0 && (mt = (F & 536870912) === 0 || te ? ps() : 536870912);
        var e = dt.current;
        return e !== null && (e.flags |= 32),
        mt
    }
    function it(e, t, l) {
        (e === re && (ne === 2 || ne === 9) || e.cancelPendingCommit !== null) && (pa(e, 0),
        sl(e, F, mt, !1)),
        _a(e, l),
        ((ae & 2) === 0 || e !== re) && (e === re && ((ae & 2) === 0 && (Rl |= l),
        ye === 4 && sl(e, F, mt, !1)),
        Mt(e))
    }
    function cf(e, t, l) {
        if ((ae & 6) !== 0)
            throw Error(r(327));
        var a = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ja(e, t)
          , n = a ? ih(e, t) : Tc(e, t, !0)
          , i = a;
        do {
            if (n === 0) {
                fa && !a && sl(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate,
                i && !ah(l)) {
                    n = Tc(e, t, !1),
                    i = !1;
                    continue
                }
                if (n === 2) {
                    if (i = t,
                    e.errorRecoveryDisabledLanes & i)
                        var c = 0;
                    else
                        c = e.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        e: {
                            var s = e;
                            n = un;
                            var o = s.current.memoizedState.isDehydrated;
                            if (o && (pa(s, c).flags |= 256),
                            c = Tc(s, c, !1),
                            c !== 2) {
                                if (vc && !o) {
                                    s.errorRecoveryDisabledLanes |= i,
                                    Rl |= i,
                                    n = 4;
                                    break e
                                }
                                i = Ze,
                                Ze = n,
                                i !== null && (Ze === null ? Ze = i : Ze.push.apply(Ze, i))
                            }
                            n = c
                        }
                        if (i = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    pa(e, 0),
                    sl(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    i = n,
                    i) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        sl(a, t, mt, !nl);
                        break e;
                    case 2:
                        Ze = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (n = Sc + 300 - St(),
                    10 < n)) {
                        if (sl(a, t, mt, !nl),
                        Tn(a, 0, !0) !== 0)
                            break e;
                        a.timeoutHandle = Hf(sf.bind(null, a, l, Ze, gi, bc, t, mt, Rl, da, nl, i, 2, -0, 0), n);
                        break e
                    }
                    sf(a, l, Ze, gi, bc, t, mt, Rl, da, nl, i, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Mt(e)
    }
    function sf(e, t, l, a, n, i, c, s, o, g, N, A, y, v) {
        if (e.timeoutHandle = -1,
        A = t.subtreeFlags,
        (A & 8192 || (A & 16785408) === 16785408) && (hn = {
            stylesheets: null,
            count: 0,
            unsuspend: Bh
        },
        ef(t),
        A = Yh(),
        A !== null)) {
            e.cancelPendingCommit = A(pf.bind(null, e, t, i, l, a, n, c, s, o, N, 1, y, v)),
            sl(e, i, c, !g);
            return
        }
        pf(e, t, i, l, a, n, c, s, o)
    }
    function ah(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                      , i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!Pe(i(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child,
            t.subtreeFlags & 16384 && l !== null)
                l.return = t,
                t = l;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function sl(e, t, l, a) {
        t &= ~xc,
        t &= ~Rl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        a && (e.warmLanes |= t),
        a = e.expirationTimes;
        for (var n = t; 0 < n; ) {
            var i = 31 - Ie(n)
              , c = 1 << i;
            a[i] = -1,
            n &= ~c
        }
        l !== 0 && ys(e, l, t)
    }
    function yi() {
        return (ae & 6) === 0 ? (sn(0),
        !1) : !0
    }
    function Ac() {
        if (J !== null) {
            if (ne === 0)
                var e = J.return;
            else
                e = J,
                Rt = El = null,
                Lu(e),
                ca = null,
                Fa = 0,
                e = J;
            for (; e !== null; )
                Yr(e.alternate, e),
                e = e.return;
            J = null
        }
    }
    function pa(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1,
        Sh(l)),
        l = e.cancelPendingCommit,
        l !== null && (e.cancelPendingCommit = null,
        l()),
        Ac(),
        re = e,
        J = l = Ot(e.current, null),
        F = t,
        ne = 0,
        at = null,
        nl = !1,
        fa = ja(e, t),
        vc = !1,
        da = mt = xc = Rl = il = ye = 0,
        Ze = un = null,
        bc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
            a &= t; 0 < a; ) {
                var n = 31 - Ie(a)
                  , i = 1 << n;
                t |= e[n],
                a &= ~i
            }
        return Lt = t,
        kn(),
        l
    }
    function of(e, t) {
        Z = null,
        j.H = ni,
        t === La || t === Jn ? (t = Ao(),
        ne = 3) : t === No ? (t = Ao(),
        ne = 4) : ne = t === Mr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        at = t,
        J === null && (ye = 1,
        oi(e, st(t, e.current)))
    }
    function rf() {
        var e = j.H;
        return j.H = ni,
        e === null ? ni : e
    }
    function ff() {
        var e = j.A;
        return j.A = th,
        e
    }
    function Mc() {
        ye = 4,
        nl || (F & 4194048) !== F && dt.current !== null || (fa = !0),
        (il & 134217727) === 0 && (Rl & 134217727) === 0 || re === null || sl(re, F, mt, !1)
    }
    function Tc(e, t, l) {
        var a = ae;
        ae |= 2;
        var n = rf()
          , i = ff();
        (re !== e || F !== t) && (gi = null,
        pa(e, t)),
        t = !1;
        var c = ye;
        e: do
            try {
                if (ne !== 0 && J !== null) {
                    var s = J
                      , o = at;
                    switch (ne) {
                    case 8:
                        Ac(),
                        c = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        dt.current === null && (t = !0);
                        var g = ne;
                        if (ne = 0,
                        at = null,
                        ga(e, s, o, g),
                        l && fa) {
                            c = 0;
                            break e
                        }
                        break;
                    default:
                        g = ne,
                        ne = 0,
                        at = null,
                        ga(e, s, o, g)
                    }
                }
                nh(),
                c = ye;
                break
            } catch (N) {
                of(e, N)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Rt = El = null,
        ae = a,
        j.H = n,
        j.A = i,
        J === null && (re = null,
        F = 0,
        kn()),
        c
    }
    function nh() {
        for (; J !== null; )
            df(J)
    }
    function ih(e, t) {
        var l = ae;
        ae |= 2;
        var a = rf()
          , n = ff();
        re !== e || F !== t ? (gi = null,
        pi = St() + 500,
        pa(e, t)) : fa = ja(e, t);
        e: do
            try {
                if (ne !== 0 && J !== null) {
                    t = J;
                    var i = at;
                    t: switch (ne) {
                    case 1:
                        ne = 0,
                        at = null,
                        ga(e, t, i, 1);
                        break;
                    case 2:
                    case 9:
                        if (jo(i)) {
                            ne = 0,
                            at = null,
                            mf(t);
                            break
                        }
                        t = function() {
                            ne !== 2 && ne !== 9 || re !== e || (ne = 7),
                            Mt(e)
                        }
                        ,
                        i.then(t, t);
                        break e;
                    case 3:
                        ne = 7;
                        break e;
                    case 4:
                        ne = 5;
                        break e;
                    case 7:
                        jo(i) ? (ne = 0,
                        at = null,
                        mf(t)) : (ne = 0,
                        at = null,
                        ga(e, t, i, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (J.tag) {
                        case 26:
                            c = J.memoizedState;
                        case 5:
                        case 27:
                            var s = J;
                            if (!c || Jf(c)) {
                                ne = 0,
                                at = null;
                                var o = s.sibling;
                                if (o !== null)
                                    J = o;
                                else {
                                    var g = s.return;
                                    g !== null ? (J = g,
                                    vi(g)) : J = null
                                }
                                break t
                            }
                        }
                        ne = 0,
                        at = null,
                        ga(e, t, i, 5);
                        break;
                    case 6:
                        ne = 0,
                        at = null,
                        ga(e, t, i, 6);
                        break;
                    case 8:
                        Ac(),
                        ye = 6;
                        break e;
                    default:
                        throw Error(r(462))
                    }
                }
                uh();
                break
            } catch (N) {
                of(e, N)
            }
        while (!0);
        return Rt = El = null,
        j.H = a,
        j.A = n,
        ae = l,
        J !== null ? 0 : (re = null,
        F = 0,
        kn(),
        ye)
    }
    function uh() {
        for (; J !== null && !Ed(); )
            df(J)
    }
    function df(e) {
        var t = Br(e.alternate, e, Lt);
        e.memoizedProps = e.pendingProps,
        t === null ? vi(e) : J = t
    }
    function mf(e) {
        var t = e
          , l = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = zr(l, t, t.pendingProps, t.type, void 0, F);
            break;
        case 11:
            t = zr(l, t, t.pendingProps, t.type.render, t.ref, F);
            break;
        case 5:
            Lu(t);
        default:
            Yr(l, t),
            t = J = mo(t, Lt),
            t = Br(l, t, Lt)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? vi(e) : J = t
    }
    function ga(e, t, l, a) {
        Rt = El = null,
        Lu(t),
        ca = null,
        Fa = 0;
        var n = t.return;
        try {
            if ($m(e, n, t, l, F)) {
                ye = 1,
                oi(e, st(l, e.current)),
                J = null;
                return
            }
        } catch (i) {
            if (n !== null)
                throw J = n,
                i;
            ye = 1,
            oi(e, st(l, e.current)),
            J = null;
            return
        }
        t.flags & 32768 ? (te || a === 1 ? e = !0 : fa || (F & 536870912) !== 0 ? e = !1 : (nl = e = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = dt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        hf(t, e)) : vi(t)
    }
    function vi(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                hf(t, nl);
                return
            }
            e = t.return;
            var l = Fm(t.alternate, t, Lt);
            if (l !== null) {
                J = l;
                return
            }
            if (t = t.sibling,
            t !== null) {
                J = t;
                return
            }
            J = t = e
        } while (t !== null);
        ye === 0 && (ye = 5)
    }
    function hf(e, t) {
        do {
            var l = Im(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767,
                J = l;
                return
            }
            if (l = e.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                J = e;
                return
            }
            J = e = l
        } while (e !== null);
        ye = 6,
        J = null
    }
    function pf(e, t, l, a, n, i, c, s, o) {
        e.cancelPendingCommit = null;
        do
            xi();
        while (De !== 0);
        if ((ae & 6) !== 0)
            throw Error(r(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(r(177));
            if (i = t.lanes | t.childLanes,
            i |= yu,
            Bd(e, l, i, c, s, o),
            e === re && (J = re = null,
            F = 0),
            ma = t,
            cl = e,
            ha = l,
            Nc = i,
            jc = n,
            nf = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            rh(_n, function() {
                return bf(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = j.T,
                j.T = null,
                n = z.p,
                z.p = 2,
                c = ae,
                ae |= 4;
                try {
                    Pm(e, t, l)
                } finally {
                    ae = c,
                    z.p = n,
                    j.T = a
                }
            }
            De = 1,
            gf(),
            yf(),
            vf()
        }
    }
    function gf() {
        if (De === 1) {
            De = 0;
            var e = cl
              , t = ma
              , l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = j.T,
                j.T = null;
                var a = z.p;
                z.p = 2;
                var n = ae;
                ae |= 4;
                try {
                    Fr(t, e);
                    var i = kc
                      , c = lo(e.containerInfo)
                      , s = i.focusedElem
                      , o = i.selectionRange;
                    if (c !== s && s && s.ownerDocument && to(s.ownerDocument.documentElement, s)) {
                        if (o !== null && du(s)) {
                            var g = o.start
                              , N = o.end;
                            if (N === void 0 && (N = g),
                            "selectionStart"in s)
                                s.selectionStart = g,
                                s.selectionEnd = Math.min(N, s.value.length);
                            else {
                                var A = s.ownerDocument || document
                                  , y = A && A.defaultView || window;
                                if (y.getSelection) {
                                    var v = y.getSelection()
                                      , X = s.textContent.length
                                      , Y = Math.min(o.start, X)
                                      , ce = o.end === void 0 ? Y : Math.min(o.end, X);
                                    !v.extend && Y > ce && (c = ce,
                                    ce = Y,
                                    Y = c);
                                    var h = eo(s, Y)
                                      , m = eo(s, ce);
                                    if (h && m && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== m.node || v.focusOffset !== m.offset)) {
                                        var p = A.createRange();
                                        p.setStart(h.node, h.offset),
                                        v.removeAllRanges(),
                                        Y > ce ? (v.addRange(p),
                                        v.extend(m.node, m.offset)) : (p.setEnd(m.node, m.offset),
                                        v.addRange(p))
                                    }
                                }
                            }
                        }
                        for (A = [],
                        v = s; v = v.parentNode; )
                            v.nodeType === 1 && A.push({
                                element: v,
                                left: v.scrollLeft,
                                top: v.scrollTop
                            });
                        for (typeof s.focus == "function" && s.focus(),
                        s = 0; s < A.length; s++) {
                            var _ = A[s];
                            _.element.scrollLeft = _.left,
                            _.element.scrollTop = _.top
                        }
                    }
                    Oi = !!Bc,
                    kc = Bc = null
                } finally {
                    ae = n,
                    z.p = a,
                    j.T = l
                }
            }
            e.current = t,
            De = 2
        }
    }
    function yf() {
        if (De === 2) {
            De = 0;
            var e = cl
              , t = ma
              , l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = j.T,
                j.T = null;
                var a = z.p;
                z.p = 2;
                var n = ae;
                ae |= 4;
                try {
                    Kr(e, t.alternate, t)
                } finally {
                    ae = n,
                    z.p = a,
                    j.T = l
                }
            }
            De = 3
        }
    }
    function vf() {
        if (De === 4 || De === 3) {
            De = 0,
            wd();
            var e = cl
              , t = ma
              , l = ha
              , a = nf;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? De = 5 : (De = 0,
            ma = cl = null,
            xf(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (ul = null),
            Qi(l),
            t = t.stateNode,
            Fe && typeof Fe.onCommitFiberRoot == "function")
                try {
                    Fe.onCommitFiberRoot(Na, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = j.T,
                n = z.p,
                z.p = 2,
                j.T = null;
                try {
                    for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
                        var s = a[c];
                        i(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    j.T = t,
                    z.p = n
                }
            }
            (ha & 3) !== 0 && xi(),
            Mt(e),
            n = e.pendingLanes,
            (l & 4194090) !== 0 && (n & 42) !== 0 ? e === _c ? cn++ : (cn = 0,
            _c = e) : cn = 0,
            sn(0)
        }
    }
    function xf(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Ya(t)))
    }
    function xi(e) {
        return gf(),
        yf(),
        vf(),
        bf()
    }
    function bf() {
        if (De !== 5)
            return !1;
        var e = cl
          , t = Nc;
        Nc = 0;
        var l = Qi(ha)
          , a = j.T
          , n = z.p;
        try {
            z.p = 32 > l ? 32 : l,
            j.T = null,
            l = jc,
            jc = null;
            var i = cl
              , c = ha;
            if (De = 0,
            ma = cl = null,
            ha = 0,
            (ae & 6) !== 0)
                throw Error(r(331));
            var s = ae;
            if (ae |= 4,
            lf(i.current),
            Pr(i, i.current, c, l),
            ae = s,
            sn(0, !1),
            Fe && typeof Fe.onPostCommitFiberRoot == "function")
                try {
                    Fe.onPostCommitFiberRoot(Na, i)
                } catch {}
            return !0
        } finally {
            z.p = n,
            j.T = a,
            xf(e, t)
        }
    }
    function Sf(e, t, l) {
        t = st(l, t),
        t = lc(e.stateNode, t, 2),
        e = Ft(e, t, 2),
        e !== null && (_a(e, 2),
        Mt(e))
    }
    function oe(e, t, l) {
        if (e.tag === 3)
            Sf(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Sf(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ul === null || !ul.has(a))) {
                        e = st(l, e),
                        l = _r(2),
                        a = Ft(t, l, 2),
                        a !== null && (Ar(l, a, t, e),
                        _a(a, 2),
                        Mt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function Ec(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new lh;
            var n = new Set;
            a.set(t, n)
        } else
            n = a.get(t),
            n === void 0 && (n = new Set,
            a.set(t, n));
        n.has(l) || (vc = !0,
        n.add(l),
        e = ch.bind(null, e, t, l),
        t.then(e, e))
    }
    function ch(e, t, l) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        e.pingedLanes |= e.suspendedLanes & l,
        e.warmLanes &= ~l,
        re === e && (F & l) === l && (ye === 4 || ye === 3 && (F & 62914560) === F && 300 > St() - Sc ? (ae & 2) === 0 && pa(e, 0) : xc |= l,
        da === F && (da = 0)),
        Mt(e)
    }
    function Nf(e, t) {
        t === 0 && (t = gs()),
        e = Fl(e, t),
        e !== null && (_a(e, t),
        Mt(e))
    }
    function sh(e) {
        var t = e.memoizedState
          , l = 0;
        t !== null && (l = t.retryLane),
        Nf(e, l)
    }
    function oh(e, t) {
        var l = 0;
        switch (e.tag) {
        case 13:
            var a = e.stateNode
              , n = e.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        case 22:
            a = e.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        a !== null && a.delete(t),
        Nf(e, l)
    }
    function rh(e, t) {
        return Gi(e, t)
    }
    var bi = null
      , ya = null
      , wc = !1
      , Si = !1
      , Dc = !1
      , Ul = 0;
    function Mt(e) {
        e !== ya && e.next === null && (ya === null ? bi = ya = e : ya = ya.next = e),
        Si = !0,
        wc || (wc = !0,
        dh())
    }
    function sn(e, t) {
        if (!Dc && Si) {
            Dc = !0;
            do
                for (var l = !1, a = bi; a !== null; ) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var i = 0;
                        else {
                            var c = a.suspendedLanes
                              , s = a.pingedLanes;
                            i = (1 << 31 - Ie(42 | e) + 1) - 1,
                            i &= n & ~(c & ~s),
                            i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
                        }
                        i !== 0 && (l = !0,
                        Mf(a, i))
                    } else
                        i = F,
                        i = Tn(a, a === re ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (i & 3) === 0 || ja(a, i) || (l = !0,
                        Mf(a, i));
                    a = a.next
                }
            while (l);
            Dc = !1
        }
    }
    function fh() {
        jf()
    }
    function jf() {
        Si = wc = !1;
        var e = 0;
        Ul !== 0 && (bh() && (e = Ul),
        Ul = 0);
        for (var t = St(), l = null, a = bi; a !== null; ) {
            var n = a.next
              , i = _f(a, t);
            i === 0 ? (a.next = null,
            l === null ? bi = n : l.next = n,
            n === null && (ya = l)) : (l = a,
            (e !== 0 || (i & 3) !== 0) && (Si = !0)),
            a = n
        }
        sn(e)
    }
    function _f(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var c = 31 - Ie(i)
              , s = 1 << c
              , o = n[c];
            o === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = qd(s, t)) : o <= t && (e.expiredLanes |= s),
            i &= ~s
        }
        if (t = re,
        l = F,
        l = Tn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a = e.callbackNode,
        l === 0 || e === t && (ne === 2 || ne === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Li(a),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((l & 3) === 0 || ja(e, l)) {
            if (t = l & -l,
            t === e.callbackPriority)
                return t;
            switch (a !== null && Li(a),
            Qi(l)) {
            case 2:
            case 8:
                l = ms;
                break;
            case 32:
                l = _n;
                break;
            case 268435456:
                l = hs;
                break;
            default:
                l = _n
            }
            return a = Af.bind(null, e),
            l = Gi(l, a),
            e.callbackPriority = t,
            e.callbackNode = l,
            t
        }
        return a !== null && a !== null && Li(a),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Af(e, t) {
        if (De !== 0 && De !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var l = e.callbackNode;
        if (xi() && e.callbackNode !== l)
            return null;
        var a = F;
        return a = Tn(e, e === re ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a === 0 ? null : (cf(e, a, t),
        _f(e, St()),
        e.callbackNode != null && e.callbackNode === l ? Af.bind(null, e) : null)
    }
    function Mf(e, t) {
        if (xi())
            return null;
        cf(e, t, !0)
    }
    function dh() {
        Nh(function() {
            (ae & 6) !== 0 ? Gi(ds, fh) : jf()
        })
    }
    function Oc() {
        return Ul === 0 && (Ul = ps()),
        Ul
    }
    function Tf(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : zn("" + e)
    }
    function Ef(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name,
        l.value = t.value,
        e.id && l.setAttribute("form", e.id),
        t.parentNode.insertBefore(l, t),
        e = new FormData(e),
        l.parentNode.removeChild(l),
        e
    }
    function mh(e, t, l, a, n) {
        if (t === "submit" && l && l.stateNode === n) {
            var i = Tf((n[Le] || null).action)
              , c = a.submitter;
            c && (t = (t = c[Le] || null) ? Tf(t.formAction) : c.getAttribute("formAction"),
            t !== null && (i = t,
            c = null));
            var s = new Hn("action","action",null,a,n);
            e.push({
                event: s,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Ul !== 0) {
                                var o = c ? Ef(n, c) : new FormData(n);
                                Fu(l, {
                                    pending: !0,
                                    data: o,
                                    method: n.method,
                                    action: i
                                }, null, o)
                            }
                        } else
                            typeof i == "function" && (s.preventDefault(),
                            o = c ? Ef(n, c) : new FormData(n),
                            Fu(l, {
                                pending: !0,
                                data: o,
                                method: n.method,
                                action: i
                            }, i, o))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var zc = 0; zc < gu.length; zc++) {
        var Cc = gu[zc]
          , hh = Cc.toLowerCase()
          , ph = Cc[0].toUpperCase() + Cc.slice(1);
        yt(hh, "on" + ph)
    }
    yt(io, "onAnimationEnd"),
    yt(uo, "onAnimationIteration"),
    yt(co, "onAnimationStart"),
    yt("dblclick", "onDoubleClick"),
    yt("focusin", "onFocus"),
    yt("focusout", "onBlur"),
    yt(zm, "onTransitionRun"),
    yt(Cm, "onTransitionStart"),
    yt(Rm, "onTransitionCancel"),
    yt(so, "onTransitionEnd"),
    Gl("onMouseEnter", ["mouseout", "mouseover"]),
    Gl("onMouseLeave", ["mouseout", "mouseover"]),
    Gl("onPointerEnter", ["pointerout", "pointerover"]),
    Gl("onPointerLeave", ["pointerout", "pointerover"]),
    xl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    xl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    xl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    xl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    xl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var on = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , gh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(on));
    function wf(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l]
              , n = a.event;
            a = a.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var s = a[c]
                          , o = s.instance
                          , g = s.currentTarget;
                        if (s = s.listener,
                        o !== i && n.isPropagationStopped())
                            break e;
                        i = s,
                        n.currentTarget = g;
                        try {
                            i(n)
                        } catch (N) {
                            si(N)
                        }
                        n.currentTarget = null,
                        i = o
                    }
                else
                    for (c = 0; c < a.length; c++) {
                        if (s = a[c],
                        o = s.instance,
                        g = s.currentTarget,
                        s = s.listener,
                        o !== i && n.isPropagationStopped())
                            break e;
                        i = s,
                        n.currentTarget = g;
                        try {
                            i(n)
                        } catch (N) {
                            si(N)
                        }
                        n.currentTarget = null,
                        i = o
                    }
            }
        }
    }
    function $(e, t) {
        var l = t[Zi];
        l === void 0 && (l = t[Zi] = new Set);
        var a = e + "__bubble";
        l.has(a) || (Df(t, e, 2, !1),
        l.add(a))
    }
    function Rc(e, t, l) {
        var a = 0;
        t && (a |= 4),
        Df(l, e, a, t)
    }
    var Ni = "_reactListening" + Math.random().toString(36).slice(2);
    function Uc(e) {
        if (!e[Ni]) {
            e[Ni] = !0,
            Ss.forEach(function(l) {
                l !== "selectionchange" && (gh.has(l) || Rc(l, !1, e),
                Rc(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ni] || (t[Ni] = !0,
            Rc("selectionchange", !1, t))
        }
    }
    function Df(e, t, l, a) {
        switch (ed(t)) {
        case 2:
            var n = Xh;
            break;
        case 8:
            n = Vh;
            break;
        default:
            n = $c
        }
        l = n.bind(null, t, l, e),
        n = void 0,
        !au || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
        a ? n !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: n
        }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
            passive: n
        }) : e.addEventListener(t, l, !1)
    }
    function Hc(e, t, l, a, n) {
        var i = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var s = a.stateNode.containerInfo;
                    if (s === n)
                        break;
                    if (c === 4)
                        for (c = a.return; c !== null; ) {
                            var o = c.tag;
                            if ((o === 3 || o === 4) && c.stateNode.containerInfo === n)
                                return;
                            c = c.return
                        }
                    for (; s !== null; ) {
                        if (c = Bl(s),
                        c === null)
                            return;
                        if (o = c.tag,
                        o === 5 || o === 6 || o === 26 || o === 27) {
                            a = i = c;
                            continue e
                        }
                        s = s.parentNode
                    }
                }
                a = a.return
            }
        Us(function() {
            var g = i
              , N = tu(l)
              , A = [];
            e: {
                var y = oo.get(e);
                if (y !== void 0) {
                    var v = Hn
                      , X = e;
                    switch (e) {
                    case "keypress":
                        if (Rn(l) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        v = rm;
                        break;
                    case "focusin":
                        X = "focus",
                        v = cu;
                        break;
                    case "focusout":
                        X = "blur",
                        v = cu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = cu;
                        break;
                    case "click":
                        if (l.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Bs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = Id;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = mm;
                        break;
                    case io:
                    case uo:
                    case co:
                        v = tm;
                        break;
                    case so:
                        v = pm;
                        break;
                    case "scroll":
                    case "scrollend":
                        v = Wd;
                        break;
                    case "wheel":
                        v = ym;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = am;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Ys;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        v = xm
                    }
                    var Y = (t & 4) !== 0
                      , ce = !Y && (e === "scroll" || e === "scrollend")
                      , h = Y ? y !== null ? y + "Capture" : null : y;
                    Y = [];
                    for (var m = g, p; m !== null; ) {
                        var _ = m;
                        if (p = _.stateNode,
                        _ = _.tag,
                        _ !== 5 && _ !== 26 && _ !== 27 || p === null || h === null || (_ = Ta(m, h),
                        _ != null && Y.push(rn(m, _, p))),
                        ce)
                            break;
                        m = m.return
                    }
                    0 < Y.length && (y = new v(y,X,null,l,N),
                    A.push({
                        event: y,
                        listeners: Y
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (y = e === "mouseover" || e === "pointerover",
                    v = e === "mouseout" || e === "pointerout",
                    y && l !== eu && (X = l.relatedTarget || l.fromElement) && (Bl(X) || X[ql]))
                        break e;
                    if ((v || y) && (y = N.window === N ? N : (y = N.ownerDocument) ? y.defaultView || y.parentWindow : window,
                    v ? (X = l.relatedTarget || l.toElement,
                    v = g,
                    X = X ? Bl(X) : null,
                    X !== null && (ce = w(X),
                    Y = X.tag,
                    X !== ce || Y !== 5 && Y !== 27 && Y !== 6) && (X = null)) : (v = null,
                    X = g),
                    v !== X)) {
                        if (Y = Bs,
                        _ = "onMouseLeave",
                        h = "onMouseEnter",
                        m = "mouse",
                        (e === "pointerout" || e === "pointerover") && (Y = Ys,
                        _ = "onPointerLeave",
                        h = "onPointerEnter",
                        m = "pointer"),
                        ce = v == null ? y : Ma(v),
                        p = X == null ? y : Ma(X),
                        y = new Y(_,m + "leave",v,l,N),
                        y.target = ce,
                        y.relatedTarget = p,
                        _ = null,
                        Bl(N) === g && (Y = new Y(h,m + "enter",X,l,N),
                        Y.target = p,
                        Y.relatedTarget = ce,
                        _ = Y),
                        ce = _,
                        v && X)
                            t: {
                                for (Y = v,
                                h = X,
                                m = 0,
                                p = Y; p; p = va(p))
                                    m++;
                                for (p = 0,
                                _ = h; _; _ = va(_))
                                    p++;
                                for (; 0 < m - p; )
                                    Y = va(Y),
                                    m--;
                                for (; 0 < p - m; )
                                    h = va(h),
                                    p--;
                                for (; m--; ) {
                                    if (Y === h || h !== null && Y === h.alternate)
                                        break t;
                                    Y = va(Y),
                                    h = va(h)
                                }
                                Y = null
                            }
                        else
                            Y = null;
                        v !== null && Of(A, y, v, Y, !1),
                        X !== null && ce !== null && Of(A, ce, X, Y, !0)
                    }
                }
                e: {
                    if (y = g ? Ma(g) : window,
                    v = y.nodeName && y.nodeName.toLowerCase(),
                    v === "select" || v === "input" && y.type === "file")
                        var R = Js;
                    else if (Zs(y))
                        if ($s)
                            R = wm;
                        else {
                            R = Tm;
                            var K = Mm
                        }
                    else
                        v = y.nodeName,
                        !v || v.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? g && Pi(g.elementType) && (R = Js) : R = Em;
                    if (R && (R = R(e, g))) {
                        Ks(A, R, l, N);
                        break e
                    }
                    K && K(e, y, g),
                    e === "focusout" && g && y.type === "number" && g.memoizedProps.value != null && Ii(y, "number", y.value)
                }
                switch (K = g ? Ma(g) : window,
                e) {
                case "focusin":
                    (Zs(K) || K.contentEditable === "true") && (Jl = K,
                    mu = g,
                    Ua = null);
                    break;
                case "focusout":
                    Ua = mu = Jl = null;
                    break;
                case "mousedown":
                    hu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    hu = !1,
                    ao(A, l, N);
                    break;
                case "selectionchange":
                    if (Om)
                        break;
                case "keydown":
                case "keyup":
                    ao(A, l, N)
                }
                var U;
                if (ou)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var G = "onCompositionStart";
                            break e;
                        case "compositionend":
                            G = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            G = "onCompositionUpdate";
                            break e
                        }
                        G = void 0
                    }
                else
                    Kl ? Vs(e, l) && (G = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (G = "onCompositionStart");
                G && (Gs && l.locale !== "ko" && (Kl || G !== "onCompositionStart" ? G === "onCompositionEnd" && Kl && (U = Hs()) : (Kt = N,
                nu = "value"in Kt ? Kt.value : Kt.textContent,
                Kl = !0)),
                K = ji(g, G),
                0 < K.length && (G = new ks(G,e,null,l,N),
                A.push({
                    event: G,
                    listeners: K
                }),
                U ? G.data = U : (U = Qs(l),
                U !== null && (G.data = U)))),
                (U = Sm ? Nm(e, l) : jm(e, l)) && (G = ji(g, "onBeforeInput"),
                0 < G.length && (K = new ks("onBeforeInput","beforeinput",null,l,N),
                A.push({
                    event: K,
                    listeners: G
                }),
                K.data = U)),
                mh(A, e, g, l, N)
            }
            wf(A, t)
        })
    }
    function rn(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }
    function ji(e, t) {
        for (var l = t + "Capture", a = []; e !== null; ) {
            var n = e
              , i = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ta(e, l),
            n != null && a.unshift(rn(e, n, i)),
            n = Ta(e, t),
            n != null && a.push(rn(e, n, i))),
            e.tag === 3)
                return a;
            e = e.return
        }
        return []
    }
    function va(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Of(e, t, l, a, n) {
        for (var i = t._reactName, c = []; l !== null && l !== a; ) {
            var s = l
              , o = s.alternate
              , g = s.stateNode;
            if (s = s.tag,
            o !== null && o === a)
                break;
            s !== 5 && s !== 26 && s !== 27 || g === null || (o = g,
            n ? (g = Ta(l, i),
            g != null && c.unshift(rn(l, g, o))) : n || (g = Ta(l, i),
            g != null && c.push(rn(l, g, o)))),
            l = l.return
        }
        c.length !== 0 && e.push({
            event: t,
            listeners: c
        })
    }
    var yh = /\r\n?/g
      , vh = /\u0000|\uFFFD/g;
    function zf(e) {
        return (typeof e == "string" ? e : "" + e).replace(yh, `
`).replace(vh, "")
    }
    function Cf(e, t) {
        return t = zf(t),
        zf(e) === t
    }
    function _i() {}
    function ue(e, t, l, a, n, i) {
        switch (l) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Vl(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Vl(e, "" + a);
            break;
        case "className":
            wn(e, "class", a);
            break;
        case "tabIndex":
            wn(e, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            wn(e, l, a);
            break;
        case "style":
            Cs(e, a, i);
            break;
        case "data":
            if (t !== "object") {
                wn(e, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || l !== "href")) {
                e.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = zn("" + a),
            e.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof i == "function" && (l === "formAction" ? (t !== "input" && ue(e, t, "name", n.name, n, null),
                ue(e, t, "formEncType", n.formEncType, n, null),
                ue(e, t, "formMethod", n.formMethod, n, null),
                ue(e, t, "formTarget", n.formTarget, n, null)) : (ue(e, t, "encType", n.encType, n, null),
                ue(e, t, "method", n.method, n, null),
                ue(e, t, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = zn("" + a),
            e.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (e.onclick = _i);
            break;
        case "onScroll":
            a != null && $("scroll", e);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(r(60));
                    e.innerHTML = l
                }
            }
            break;
        case "multiple":
            e.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            e.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            l = zn("" + a),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
            break;
        case "popover":
            $("beforetoggle", e),
            $("toggle", e),
            En(e, "popover", a);
            break;
        case "xlinkActuate":
            wt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            wt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            wt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            wt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            wt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            wt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            wt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            wt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            wt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            En(e, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Jd.get(l) || l,
            En(e, l, a))
        }
    }
    function qc(e, t, l, a, n, i) {
        switch (l) {
        case "style":
            Cs(e, a, i);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(r(60));
                    e.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? Vl(e, a) : (typeof a == "number" || typeof a == "bigint") && Vl(e, "" + a);
            break;
        case "onScroll":
            a != null && $("scroll", e);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", e);
            break;
        case "onClick":
            a != null && (e.onclick = _i);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Ns.hasOwnProperty(l))
                e: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                    t = l.slice(2, n ? l.length - 7 : void 0),
                    i = e[Le] || null,
                    i = i != null ? i[l] : null,
                    typeof i == "function" && e.removeEventListener(t, i, n),
                    typeof a == "function")) {
                        typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)),
                        e.addEventListener(t, a, n);
                        break e
                    }
                    l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : En(e, l, a)
                }
        }
    }
    function Oe(e, t, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            $("error", e),
            $("load", e);
            var a = !1, n = !1, i;
            for (i in l)
                if (l.hasOwnProperty(i)) {
                    var c = l[i];
                    if (c != null)
                        switch (i) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            ue(e, t, i, c, l, null)
                        }
                }
            n && ue(e, t, "srcSet", l.srcSet, l, null),
            a && ue(e, t, "src", l.src, l, null);
            return;
        case "input":
            $("invalid", e);
            var s = i = c = n = null
              , o = null
              , g = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var N = l[a];
                    if (N != null)
                        switch (a) {
                        case "name":
                            n = N;
                            break;
                        case "type":
                            c = N;
                            break;
                        case "checked":
                            o = N;
                            break;
                        case "defaultChecked":
                            g = N;
                            break;
                        case "value":
                            i = N;
                            break;
                        case "defaultValue":
                            s = N;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (N != null)
                                throw Error(r(137, t));
                            break;
                        default:
                            ue(e, t, a, N, l, null)
                        }
                }
            ws(e, i, s, o, g, c, n, !1),
            Dn(e);
            return;
        case "select":
            $("invalid", e),
            a = c = i = null;
            for (n in l)
                if (l.hasOwnProperty(n) && (s = l[n],
                s != null))
                    switch (n) {
                    case "value":
                        i = s;
                        break;
                    case "defaultValue":
                        c = s;
                        break;
                    case "multiple":
                        a = s;
                    default:
                        ue(e, t, n, s, l, null)
                    }
            t = i,
            l = c,
            e.multiple = !!a,
            t != null ? Xl(e, !!a, t, !1) : l != null && Xl(e, !!a, l, !0);
            return;
        case "textarea":
            $("invalid", e),
            i = n = a = null;
            for (c in l)
                if (l.hasOwnProperty(c) && (s = l[c],
                s != null))
                    switch (c) {
                    case "value":
                        a = s;
                        break;
                    case "defaultValue":
                        n = s;
                        break;
                    case "children":
                        i = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(r(91));
                        break;
                    default:
                        ue(e, t, c, s, l, null)
                    }
            Os(e, a, n, i),
            Dn(e);
            return;
        case "option":
            for (o in l)
                if (l.hasOwnProperty(o) && (a = l[o],
                a != null))
                    switch (o) {
                    case "selected":
                        e.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        ue(e, t, o, a, l, null)
                    }
            return;
        case "dialog":
            $("beforetoggle", e),
            $("toggle", e),
            $("cancel", e),
            $("close", e);
            break;
        case "iframe":
        case "object":
            $("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < on.length; a++)
                $(on[a], e);
            break;
        case "image":
            $("error", e),
            $("load", e);
            break;
        case "details":
            $("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            $("error", e),
            $("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (g in l)
                if (l.hasOwnProperty(g) && (a = l[g],
                a != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, t));
                    default:
                        ue(e, t, g, a, l, null)
                    }
            return;
        default:
            if (Pi(t)) {
                for (N in l)
                    l.hasOwnProperty(N) && (a = l[N],
                    a !== void 0 && qc(e, t, N, a, l, void 0));
                return
            }
        }
        for (s in l)
            l.hasOwnProperty(s) && (a = l[s],
            a != null && ue(e, t, s, a, l, null))
    }
    function xh(e, t, l, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , i = null
              , c = null
              , s = null
              , o = null
              , g = null
              , N = null;
            for (v in l) {
                var A = l[v];
                if (l.hasOwnProperty(v) && A != null)
                    switch (v) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        o = A;
                    default:
                        a.hasOwnProperty(v) || ue(e, t, v, null, a, A)
                    }
            }
            for (var y in a) {
                var v = a[y];
                if (A = l[y],
                a.hasOwnProperty(y) && (v != null || A != null))
                    switch (y) {
                    case "type":
                        i = v;
                        break;
                    case "name":
                        n = v;
                        break;
                    case "checked":
                        g = v;
                        break;
                    case "defaultChecked":
                        N = v;
                        break;
                    case "value":
                        c = v;
                        break;
                    case "defaultValue":
                        s = v;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        v !== A && ue(e, t, y, v, a, A)
                    }
            }
            Fi(e, c, s, o, g, N, i, n);
            return;
        case "select":
            v = c = s = y = null;
            for (i in l)
                if (o = l[i],
                l.hasOwnProperty(i) && o != null)
                    switch (i) {
                    case "value":
                        break;
                    case "multiple":
                        v = o;
                    default:
                        a.hasOwnProperty(i) || ue(e, t, i, null, a, o)
                    }
            for (n in a)
                if (i = a[n],
                o = l[n],
                a.hasOwnProperty(n) && (i != null || o != null))
                    switch (n) {
                    case "value":
                        y = i;
                        break;
                    case "defaultValue":
                        s = i;
                        break;
                    case "multiple":
                        c = i;
                    default:
                        i !== o && ue(e, t, n, i, a, o)
                    }
            t = s,
            l = c,
            a = v,
            y != null ? Xl(e, !!l, y, !1) : !!a != !!l && (t != null ? Xl(e, !!l, t, !0) : Xl(e, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            v = y = null;
            for (s in l)
                if (n = l[s],
                l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
                    switch (s) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ue(e, t, s, null, a, n)
                    }
            for (c in a)
                if (n = a[c],
                i = l[c],
                a.hasOwnProperty(c) && (n != null || i != null))
                    switch (c) {
                    case "value":
                        y = n;
                        break;
                    case "defaultValue":
                        v = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(r(91));
                        break;
                    default:
                        n !== i && ue(e, t, c, n, a, i)
                    }
            Ds(e, y, v);
            return;
        case "option":
            for (var X in l)
                if (y = l[X],
                l.hasOwnProperty(X) && y != null && !a.hasOwnProperty(X))
                    switch (X) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        ue(e, t, X, null, a, y)
                    }
            for (o in a)
                if (y = a[o],
                v = l[o],
                a.hasOwnProperty(o) && y !== v && (y != null || v != null))
                    switch (o) {
                    case "selected":
                        e.selected = y && typeof y != "function" && typeof y != "symbol";
                        break;
                    default:
                        ue(e, t, o, y, a, v)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Y in l)
                y = l[Y],
                l.hasOwnProperty(Y) && y != null && !a.hasOwnProperty(Y) && ue(e, t, Y, null, a, y);
            for (g in a)
                if (y = a[g],
                v = l[g],
                a.hasOwnProperty(g) && y !== v && (y != null || v != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        ue(e, t, g, y, a, v)
                    }
            return;
        default:
            if (Pi(t)) {
                for (var ce in l)
                    y = l[ce],
                    l.hasOwnProperty(ce) && y !== void 0 && !a.hasOwnProperty(ce) && qc(e, t, ce, void 0, a, y);
                for (N in a)
                    y = a[N],
                    v = l[N],
                    !a.hasOwnProperty(N) || y === v || y === void 0 && v === void 0 || qc(e, t, N, y, a, v);
                return
            }
        }
        for (var h in l)
            y = l[h],
            l.hasOwnProperty(h) && y != null && !a.hasOwnProperty(h) && ue(e, t, h, null, a, y);
        for (A in a)
            y = a[A],
            v = l[A],
            !a.hasOwnProperty(A) || y === v || y == null && v == null || ue(e, t, A, y, a, v)
    }
    var Bc = null
      , kc = null;
    function Ai(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Rf(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Uf(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Yc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Gc = null;
    function bh() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Gc ? !1 : (Gc = e,
        !0) : (Gc = null,
        !1)
    }
    var Hf = typeof setTimeout == "function" ? setTimeout : void 0
      , Sh = typeof clearTimeout == "function" ? clearTimeout : void 0
      , qf = typeof Promise == "function" ? Promise : void 0
      , Nh = typeof queueMicrotask == "function" ? queueMicrotask : typeof qf < "u" ? function(e) {
        return qf.resolve(null).then(e).catch(jh)
    }
    : Hf;
    function jh(e) {
        setTimeout(function() {
            throw e
        })
    }
    function ol(e) {
        return e === "head"
    }
    function Bf(e, t) {
        var l = t
          , a = 0
          , n = 0;
        do {
            var i = l.nextSibling;
            if (e.removeChild(l),
            i && i.nodeType === 8)
                if (l = i.data,
                l === "/$") {
                    if (0 < a && 8 > a) {
                        l = a;
                        var c = e.ownerDocument;
                        if (l & 1 && fn(c.documentElement),
                        l & 2 && fn(c.body),
                        l & 4)
                            for (l = c.head,
                            fn(l),
                            c = l.firstChild; c; ) {
                                var s = c.nextSibling
                                  , o = c.nodeName;
                                c[Aa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c),
                                c = s
                            }
                    }
                    if (n === 0) {
                        e.removeChild(i),
                        xn(t);
                        return
                    }
                    n--
                } else
                    l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
            else
                a = 0;
            l = i
        } while (l);
        xn(t)
    }
    function Lc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (t = t.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Lc(l),
                Ki(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(l)
        }
    }
    function _h(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[Aa])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (i = e.getAttribute("rel"),
                        i === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (i = e.getAttribute("src"),
                        (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var i = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === i)
                    return e
            } else
                return e;
            if (e = xt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Ah(e, t, l) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = xt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Xc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function Mh(e, t) {
        var l = e.ownerDocument;
        if (e.data !== "$?" || l.readyState === "complete")
            t();
        else {
            var a = function() {
                t(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            e._reactRetry = a
        }
    }
    function xt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var Vc = null;
    function kf(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    l === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Yf(e, t, l) {
        switch (t = Ai(l),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(r(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(r(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(r(454));
            return e;
        default:
            throw Error(r(451))
        }
    }
    function fn(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Ki(e)
    }
    var ht = new Map
      , Gf = new Set;
    function Mi(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Xt = z.d;
    z.d = {
        f: Th,
        r: Eh,
        D: wh,
        C: Dh,
        L: Oh,
        m: zh,
        X: Rh,
        S: Ch,
        M: Uh
    };
    function Th() {
        var e = Xt.f()
          , t = yi();
        return e || t
    }
    function Eh(e) {
        var t = kl(e);
        t !== null && t.tag === 5 && t.type === "form" ? ur(t) : Xt.r(e)
    }
    var xa = typeof document > "u" ? null : document;
    function Lf(e, t, l) {
        var a = xa;
        if (a && typeof t == "string" && t) {
            var n = ct(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]',
            typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
            Gf.has(n) || (Gf.add(n),
            e = {
                rel: e,
                crossOrigin: l,
                href: t
            },
            a.querySelector(n) === null && (t = a.createElement("link"),
            Oe(t, "link", e),
            Ae(t),
            a.head.appendChild(t)))
        }
    }
    function wh(e) {
        Xt.D(e),
        Lf("dns-prefetch", e, null)
    }
    function Dh(e, t) {
        Xt.C(e, t),
        Lf("preconnect", e, t)
    }
    function Oh(e, t, l) {
        Xt.L(e, t, l);
        var a = xa;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + ct(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ct(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (n += '[imagesizes="' + ct(l.imageSizes) + '"]')) : n += '[href="' + ct(e) + '"]';
            var i = n;
            switch (t) {
            case "style":
                i = ba(e);
                break;
            case "script":
                i = Sa(e)
            }
            ht.has(i) || (e = D({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l),
            ht.set(i, e),
            a.querySelector(n) !== null || t === "style" && a.querySelector(dn(i)) || t === "script" && a.querySelector(mn(i)) || (t = a.createElement("link"),
            Oe(t, "link", e),
            Ae(t),
            a.head.appendChild(t)))
        }
    }
    function zh(e, t) {
        Xt.m(e, t);
        var l = xa;
        if (l && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , n = 'link[rel="modulepreload"][as="' + ct(a) + '"][href="' + ct(e) + '"]'
              , i = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                i = Sa(e)
            }
            if (!ht.has(i) && (e = D({
                rel: "modulepreload",
                href: e
            }, t),
            ht.set(i, e),
            l.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(mn(i)))
                        return
                }
                a = l.createElement("link"),
                Oe(a, "link", e),
                Ae(a),
                l.head.appendChild(a)
            }
        }
    }
    function Ch(e, t, l) {
        Xt.S(e, t, l);
        var a = xa;
        if (a && e) {
            var n = Yl(a).hoistableStyles
              , i = ba(e);
            t = t || "default";
            var c = n.get(i);
            if (!c) {
                var s = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(dn(i)))
                    s.loading = 5;
                else {
                    e = D({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l),
                    (l = ht.get(i)) && Qc(e, l);
                    var o = c = a.createElement("link");
                    Ae(o),
                    Oe(o, "link", e),
                    o._p = new Promise(function(g, N) {
                        o.onload = g,
                        o.onerror = N
                    }
                    ),
                    o.addEventListener("load", function() {
                        s.loading |= 1
                    }),
                    o.addEventListener("error", function() {
                        s.loading |= 2
                    }),
                    s.loading |= 4,
                    Ti(c, t, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: s
                },
                n.set(i, c)
            }
        }
    }
    function Rh(e, t) {
        Xt.X(e, t);
        var l = xa;
        if (l && e) {
            var a = Yl(l).hoistableScripts
              , n = Sa(e)
              , i = a.get(n);
            i || (i = l.querySelector(mn(n)),
            i || (e = D({
                src: e,
                async: !0
            }, t),
            (t = ht.get(n)) && Zc(e, t),
            i = l.createElement("script"),
            Ae(i),
            Oe(i, "link", e),
            l.head.appendChild(i)),
            i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            },
            a.set(n, i))
        }
    }
    function Uh(e, t) {
        Xt.M(e, t);
        var l = xa;
        if (l && e) {
            var a = Yl(l).hoistableScripts
              , n = Sa(e)
              , i = a.get(n);
            i || (i = l.querySelector(mn(n)),
            i || (e = D({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = ht.get(n)) && Zc(e, t),
            i = l.createElement("script"),
            Ae(i),
            Oe(i, "link", e),
            l.head.appendChild(i)),
            i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            },
            a.set(n, i))
        }
    }
    function Xf(e, t, l, a) {
        var n = (n = V.current) ? Mi(n) : null;
        if (!n)
            throw Error(r(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (t = ba(l.href),
            l = Yl(n).hoistableStyles,
            a = l.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                e = ba(l.href);
                var i = Yl(n).hoistableStyles
                  , c = i.get(e);
                if (c || (n = n.ownerDocument || n,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                i.set(e, c),
                (i = n.querySelector(dn(e))) && !i._p && (c.instance = i,
                c.state.loading = 5),
                ht.has(e) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                ht.set(e, l),
                i || Hh(n, e, l, c.state))),
                t && a === null)
                    throw Error(r(528, ""));
                return c
            }
            if (t && a !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return t = l.async,
            l = l.src,
            typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(l),
            l = Yl(n).hoistableScripts,
            a = l.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, e))
        }
    }
    function ba(e) {
        return 'href="' + ct(e) + '"'
    }
    function dn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Vf(e) {
        return D({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Hh(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Oe(t, "link", l),
        Ae(t),
        e.head.appendChild(t))
    }
    function Sa(e) {
        return '[src="' + ct(e) + '"]'
    }
    function mn(e) {
        return "script[async]" + e
    }
    function Qf(e, t, l) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + ct(l.href) + '"]');
                if (a)
                    return t.instance = a,
                    Ae(a),
                    a;
                var n = D({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"),
                Ae(a),
                Oe(a, "style", n),
                Ti(a, l.precedence, e),
                t.instance = a;
            case "stylesheet":
                n = ba(l.href);
                var i = e.querySelector(dn(n));
                if (i)
                    return t.state.loading |= 4,
                    t.instance = i,
                    Ae(i),
                    i;
                a = Vf(l),
                (n = ht.get(n)) && Qc(a, n),
                i = (e.ownerDocument || e).createElement("link"),
                Ae(i);
                var c = i;
                return c._p = new Promise(function(s, o) {
                    c.onload = s,
                    c.onerror = o
                }
                ),
                Oe(i, "link", a),
                t.state.loading |= 4,
                Ti(i, l.precedence, e),
                t.instance = i;
            case "script":
                return i = Sa(l.src),
                (n = e.querySelector(mn(i))) ? (t.instance = n,
                Ae(n),
                n) : (a = l,
                (n = ht.get(i)) && (a = D({}, l),
                Zc(a, n)),
                e = e.ownerDocument || e,
                n = e.createElement("script"),
                Ae(n),
                Oe(n, "link", a),
                e.head.appendChild(n),
                t.instance = n);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            Ti(a, l.precedence, e));
        return t.instance
    }
    function Ti(e, t, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, c = 0; c < a.length; c++) {
            var s = a[c];
            if (s.dataset.precedence === t)
                i = s;
            else if (i !== n)
                break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l,
        t.insertBefore(e, t.firstChild))
    }
    function Qc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Zc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Ei = null;
    function Zf(e, t, l) {
        if (Ei === null) {
            var a = new Map
              , n = Ei = new Map;
            n.set(l, a)
        } else
            n = Ei,
            a = n.get(l),
            a || (a = new Map,
            n.set(l, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
        l = l.getElementsByTagName(e),
        n = 0; n < l.length; n++) {
            var i = l[n];
            if (!(i[Aa] || i[Ue] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = i.getAttribute(t) || "";
                c = e + c;
                var s = a.get(c);
                s ? s.push(i) : a.set(c, [i])
            }
        }
        return a
    }
    function Kf(e, t, l) {
        e = e.ownerDocument || e,
        e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }
    function qh(e, t, l) {
        if (l === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Jf(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var hn = null;
    function Bh() {}
    function kh(e, t, l) {
        if (hn === null)
            throw Error(r(475));
        var a = hn;
        if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var n = ba(l.href)
                  , i = e.querySelector(dn(n));
                if (i) {
                    e = i._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++,
                    a = wi.bind(a),
                    e.then(a, a)),
                    t.state.loading |= 4,
                    t.instance = i,
                    Ae(i);
                    return
                }
                i = e.ownerDocument || e,
                l = Vf(l),
                (n = ht.get(n)) && Qc(l, n),
                i = i.createElement("link"),
                Ae(i);
                var c = i;
                c._p = new Promise(function(s, o) {
                    c.onload = s,
                    c.onerror = o
                }
                ),
                Oe(i, "link", l),
                t.instance = i
            }
            a.stylesheets === null && (a.stylesheets = new Map),
            a.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++,
            t = wi.bind(a),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function Yh() {
        if (hn === null)
            throw Error(r(475));
        var e = hn;
        return e.stylesheets && e.count === 0 && Kc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var l = setTimeout(function() {
                if (e.stylesheets && Kc(e, e.stylesheets),
                e.unsuspend) {
                    var a = e.unsuspend;
                    e.unsuspend = null,
                    a()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(l)
            }
        }
        : null
    }
    function wi() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Kc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Di = null;
    function Kc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Di = new Map,
        t.forEach(Gh, e),
        Di = null,
        wi.call(e))
    }
    function Gh(e, t) {
        if (!(t.state.loading & 4)) {
            var l = Di.get(e);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                Di.set(e, l);
                for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
                    var c = n[i];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c),
                    a = c)
                }
                a && l.set(null, a)
            }
            n = t.instance,
            c = n.getAttribute("data-precedence"),
            i = l.get(c) || a,
            i === a && l.set(null, n),
            l.set(c, n),
            this.count++,
            a = wi.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(n, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var pn = {
        $$typeof: ze,
        Provider: null,
        Consumer: null,
        _currentValue: L,
        _currentValue2: L,
        _threadCount: 0
    };
    function Lh(e, t, l, a, n, i, c, s) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Xi(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Xi(0),
        this.hiddenUpdates = Xi(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = i,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = s,
        this.incompleteTransitions = new Map
    }
    function $f(e, t, l, a, n, i, c, s, o, g, N, A) {
        return e = new Lh(e,t,l,c,s,o,g,A),
        t = 1,
        i === !0 && (t |= 24),
        i = et(3, null, null, t),
        e.current = i,
        i.stateNode = e,
        t = Eu(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        i.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: t
        },
        zu(i),
        e
    }
    function Wf(e) {
        return e ? (e = Il,
        e) : Il
    }
    function Ff(e, t, l, a, n, i) {
        n = Wf(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = Wt(t),
        a.payload = {
            element: l
        },
        i = i === void 0 ? null : i,
        i !== null && (a.callback = i),
        l = Ft(e, a, t),
        l !== null && (it(l, e, t),
        Va(l, e, t))
    }
    function If(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function Jc(e, t) {
        If(e, t),
        (e = e.alternate) && If(e, t)
    }
    function Pf(e) {
        if (e.tag === 13) {
            var t = Fl(e, 67108864);
            t !== null && it(t, e, 67108864),
            Jc(e, 67108864)
        }
    }
    var Oi = !0;
    function Xh(e, t, l, a) {
        var n = j.T;
        j.T = null;
        var i = z.p;
        try {
            z.p = 2,
            $c(e, t, l, a)
        } finally {
            z.p = i,
            j.T = n
        }
    }
    function Vh(e, t, l, a) {
        var n = j.T;
        j.T = null;
        var i = z.p;
        try {
            z.p = 8,
            $c(e, t, l, a)
        } finally {
            z.p = i,
            j.T = n
        }
    }
    function $c(e, t, l, a) {
        if (Oi) {
            var n = Wc(a);
            if (n === null)
                Hc(e, t, a, zi, l),
                td(e, a);
            else if (Zh(n, e, t, l, a))
                a.stopPropagation();
            else if (td(e, a),
            t & 4 && -1 < Qh.indexOf(e)) {
                for (; n !== null; ) {
                    var i = kl(n);
                    if (i !== null)
                        switch (i.tag) {
                        case 3:
                            if (i = i.stateNode,
                            i.current.memoizedState.isDehydrated) {
                                var c = vl(i.pendingLanes);
                                if (c !== 0) {
                                    var s = i;
                                    for (s.pendingLanes |= 2,
                                    s.entangledLanes |= 2; c; ) {
                                        var o = 1 << 31 - Ie(c);
                                        s.entanglements[1] |= o,
                                        c &= ~o
                                    }
                                    Mt(i),
                                    (ae & 6) === 0 && (pi = St() + 500,
                                    sn(0))
                                }
                            }
                            break;
                        case 13:
                            s = Fl(i, 2),
                            s !== null && it(s, i, 2),
                            yi(),
                            Jc(i, 2)
                        }
                    if (i = Wc(a),
                    i === null && Hc(e, t, a, zi, l),
                    i === n)
                        break;
                    n = i
                }
                n !== null && a.stopPropagation()
            } else
                Hc(e, t, a, null, l)
        }
    }
    function Wc(e) {
        return e = tu(e),
        Fc(e)
    }
    var zi = null;
    function Fc(e) {
        if (zi = null,
        e = Bl(e),
        e !== null) {
            var t = w(e);
            if (t === null)
                e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = H(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return zi = e,
        null
    }
    function ed(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Dd()) {
            case ds:
                return 2;
            case ms:
                return 8;
            case _n:
            case Od:
                return 32;
            case hs:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Ic = !1
      , rl = null
      , fl = null
      , dl = null
      , gn = new Map
      , yn = new Map
      , ml = []
      , Qh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function td(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            rl = null;
            break;
        case "dragenter":
        case "dragleave":
            fl = null;
            break;
        case "mouseover":
        case "mouseout":
            dl = null;
            break;
        case "pointerover":
        case "pointerout":
            gn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            yn.delete(t.pointerId)
        }
    }
    function vn(e, t, l, a, n, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: i,
            targetContainers: [n]
        },
        t !== null && (t = kl(t),
        t !== null && Pf(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e)
    }
    function Zh(e, t, l, a, n) {
        switch (t) {
        case "focusin":
            return rl = vn(rl, e, t, l, a, n),
            !0;
        case "dragenter":
            return fl = vn(fl, e, t, l, a, n),
            !0;
        case "mouseover":
            return dl = vn(dl, e, t, l, a, n),
            !0;
        case "pointerover":
            var i = n.pointerId;
            return gn.set(i, vn(gn.get(i) || null, e, t, l, a, n)),
            !0;
        case "gotpointercapture":
            return i = n.pointerId,
            yn.set(i, vn(yn.get(i) || null, e, t, l, a, n)),
            !0
        }
        return !1
    }
    function ld(e) {
        var t = Bl(e.target);
        if (t !== null) {
            var l = w(t);
            if (l !== null) {
                if (t = l.tag,
                t === 13) {
                    if (t = H(l),
                    t !== null) {
                        e.blockedOn = t,
                        kd(e.priority, function() {
                            if (l.tag === 13) {
                                var a = nt();
                                a = Vi(a);
                                var n = Fl(l, a);
                                n !== null && it(n, l, a),
                                Jc(l, a)
                            }
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ci(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = Wc(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type,l);
                eu = a,
                l.target.dispatchEvent(a),
                eu = null
            } else
                return t = kl(l),
                t !== null && Pf(t),
                e.blockedOn = l,
                !1;
            t.shift()
        }
        return !0
    }
    function ad(e, t, l) {
        Ci(e) && l.delete(t)
    }
    function Kh() {
        Ic = !1,
        rl !== null && Ci(rl) && (rl = null),
        fl !== null && Ci(fl) && (fl = null),
        dl !== null && Ci(dl) && (dl = null),
        gn.forEach(ad),
        yn.forEach(ad)
    }
    function Ri(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Ic || (Ic = !0,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Kh)))
    }
    var Ui = null;
    function nd(e) {
        Ui !== e && (Ui = e,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
            Ui === e && (Ui = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t]
                  , a = e[t + 1]
                  , n = e[t + 2];
                if (typeof a != "function") {
                    if (Fc(a || l) === null)
                        continue;
                    break
                }
                var i = kl(l);
                i !== null && (e.splice(t, 3),
                t -= 3,
                Fu(i, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function xn(e) {
        function t(o) {
            return Ri(o, e)
        }
        rl !== null && Ri(rl, e),
        fl !== null && Ri(fl, e),
        dl !== null && Ri(dl, e),
        gn.forEach(t),
        yn.forEach(t);
        for (var l = 0; l < ml.length; l++) {
            var a = ml[l];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < ml.length && (l = ml[0],
        l.blockedOn === null); )
            ld(l),
            l.blockedOn === null && ml.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                  , i = l[a + 1]
                  , c = n[Le] || null;
                if (typeof i == "function")
                    c || nd(l);
                else if (c) {
                    var s = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (n = i,
                        c = i[Le] || null)
                            s = c.formAction;
                        else if (Fc(n) !== null)
                            continue
                    } else
                        s = c.action;
                    typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3),
                    a -= 3),
                    nd(l)
                }
            }
    }
    function Pc(e) {
        this._internalRoot = e
    }
    Hi.prototype.render = Pc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(r(409));
        var l = t.current
          , a = nt();
        Ff(l, a, e, t, null, null)
    }
    ,
    Hi.prototype.unmount = Pc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Ff(e.current, 2, null, e, null, null),
            yi(),
            t[ql] = null
        }
    }
    ;
    function Hi(e) {
        this._internalRoot = e
    }
    Hi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = xs();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < ml.length && t !== 0 && t < ml[l].priority; l++)
                ;
            ml.splice(l, 0, e),
            l === 0 && ld(e)
        }
    }
    ;
    var id = b.version;
    if (id !== "19.1.0")
        throw Error(r(527, id, "19.1.0"));
    z.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","),
            Error(r(268, e)));
        return e = M(t),
        e = e !== null ? x(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Jh = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: j,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!qi.isDisabled && qi.supportsFiber)
            try {
                Na = qi.inject(Jh),
                Fe = qi
            } catch {}
    }
    return Sn.createRoot = function(e, t) {
        if (!S(e))
            throw Error(r(299));
        var l = !1
          , a = ""
          , n = br
          , i = Sr
          , c = Nr
          , s = null;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
        t.onCaughtError !== void 0 && (i = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (s = t.unstable_transitionCallbacks)),
        t = $f(e, 1, !1, null, null, l, a, n, i, c, s, null),
        e[ql] = t.current,
        Uc(e),
        new Pc(t)
    }
    ,
    Sn.hydrateRoot = function(e, t, l) {
        if (!S(e))
            throw Error(r(299));
        var a = !1
          , n = ""
          , i = br
          , c = Sr
          , s = Nr
          , o = null
          , g = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
        l.onCaughtError !== void 0 && (c = l.onCaughtError),
        l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
        l.unstable_transitionCallbacks !== void 0 && (o = l.unstable_transitionCallbacks),
        l.formState !== void 0 && (g = l.formState)),
        t = $f(e, 1, !0, t, l ?? null, a, n, i, c, s, o, g),
        t.context = Wf(null),
        l = t.current,
        a = nt(),
        a = Vi(a),
        n = Wt(a),
        n.callback = null,
        Ft(l, n, a),
        l = a,
        t.current.lanes = l,
        _a(t, l),
        Mt(t),
        e[ql] = t.current,
        Uc(e),
        new Hi(t)
    }
    ,
    Sn.version = "19.1.0",
    Sn
}
var pd;
function ip() {
    if (pd)
        return ls.exports;
    pd = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (b) {
                console.error(b)
            }
    }
    return f(),
    ls.exports = np(),
    ls.exports
}
var up = ip();
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = f => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , sp = f => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (b, T, r) => r ? r.toUpperCase() : T.toLowerCase())
  , gd = f => {
    const b = sp(f);
    return b.charAt(0).toUpperCase() + b.slice(1)
}
  , xd = (...f) => f.filter( (b, T, r) => !!b && b.trim() !== "" && r.indexOf(b) === T).join(" ").trim()
  , op = f => {
    for (const b in f)
        if (b.startsWith("aria-") || b === "role" || b === "title")
            return !0
}
;
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rp = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = he.forwardRef( ({color: f="currentColor", size: b=24, strokeWidth: T=2, absoluteStrokeWidth: r, className: S="", children: w, iconNode: H, ...q}, M) => he.createElement("svg", {
    ref: M,
    ...rp,
    width: b,
    height: b,
    stroke: f,
    strokeWidth: r ? Number(T) * 24 / Number(b) : T,
    className: xd("lucide", S),
    ...!w && !op(q) && {
        "aria-hidden": "true"
    },
    ...q
}, [...H.map( ([x,D]) => he.createElement(x, D)), ...Array.isArray(w) ? w : [w]]));
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = (f, b) => {
    const T = he.forwardRef( ({className: r, ...S}, w) => he.createElement(fp, {
        ref: w,
        iconNode: b,
        className: xd(`lucide-${cp(gd(f))}`, `lucide-${f}`, r),
        ...S
    }));
    return T.displayName = gd(f),
    T
}
;
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , mp = le("arrow-right", dp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]
  , pp = le("arrow-up", hp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , yp = le("award", gp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]
  , yd = le("book-open", vp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , ss = le("briefcase", xp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]
  , bd = le("calendar", bp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , Np = le("chevron-down", Sp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]
  , Sd = le("chevron-left", jp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , Nd = le("chevron-right", _p);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]
  , Mp = le("chevron-up", Ap);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]
  , vd = le("code", Tp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = [["rect", {
    width: "14",
    height: "8",
    x: "5",
    y: "2",
    rx: "2",
    key: "wc9tft"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    key: "w68u3i"
}], ["path", {
    d: "M6 18h2",
    key: "rwmk9e"
}], ["path", {
    d: "M12 18h6",
    key: "aqd8w3"
}]]
  , wp = le("computer", Ep);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , os = le("external-link", Dp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]
  , Bi = le("github", Op);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]
  , Cp = le("graduation-cap", zp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]
  , jd = le("heart", Rp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]
  , Hp = le("lightbulb", Up);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , rs = le("linkedin", qp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , fs = le("mail", Bp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , _d = le("map-pin", kp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = [["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 18h16",
    key: "19g7jn"
}], ["path", {
    d: "M4 6h16",
    key: "1o0s65"
}]]
  , Gp = le("menu", Yp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , Xp = le("phone", Lp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]
  , Qp = le("send", Vp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , Kp = le("star", Zp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]
  , $p = le("target", Jp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]
  , Fp = le("twitter", Wp);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]
  , Pp = le("user", Ip);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["path", {
    d: "M16 3.128a4 4 0 0 1 0 7.744",
    key: "16gr8j"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , tg = le("users", eg);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]
  , ag = le("wrench", lg);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , Ad = le("x", ng)
  , Ye = () => ({
    addClickEffect: he.useCallback(b => {
        const T = b.currentTarget;
        T.classList.remove("clicked"),
        T.classList.add("clicked");
        const r = document.createElement("div")
          , S = T.getBoundingClientRect()
          , w = Math.max(S.width, S.height)
          , H = b.clientX - S.left - w / 2
          , q = b.clientY - S.top - w / 2;
        r.style.cssText = `
      position: absolute;
      width: ${w}px;
      height: ${w}px;
      left: ${H}px;
      top: ${q}px;
      background: radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: ripple 0.6s ease-out;
      z-index: 1000;
    `,
        T.style.position = "relative",
        T.style.overflow = "hidden",
        T.appendChild(r),
        setTimeout( () => {
            r.parentNode && r.parentNode.removeChild(r),
            T.classList.remove("clicked")
        }
        , 600)
    }
    , [])
})
  , Md = document.createElement("style");
Md.textContent = `
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
document.head.appendChild(Md);
const ig = () => {
    const {addClickEffect: f} = Ye()
      , [b,T] = he.useState(!1)
      , [r,S] = he.useState(!1);
    he.useEffect( () => {
        const q = () => {
            S(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", q),
        () => window.removeEventListener("scroll", q)
    }
    , []);
    const w = [{
        name: "Story",
        href: "#professional-story"
    }, {
        name: "Experience",
        href: "#experience"
    }, {
        name: "Education",
        href: "#education"
    }, {
        name: "Learning",
        href: "#training"
    }, {
        name: "Projects",
        href: "#projects"
    }, {
        name: "Skills",
        href: "#skills"
    }, {
        name: "Contact",
        href: "#contact"
    }]
      , H = q => {
        const M = document.querySelector(q);
        M && M.scrollIntoView({
            behavior: "smooth"
        }),
        T(!1)
    }
    ;
    return u.jsx("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${r ? "bg-background/80 backdrop-blur-md border-b border-border shadow-apple" : "bg-transparent"}`,
        children: u.jsxs("div", {
            className: "container-custom",
            children: [u.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [u.jsxs("div", {
                    className: "text-xl font-bold cursor-pointer hover-lift",
                    onClick: q => {
                        f(q),
                        H("#hero")
                    }
                    ,
                    children: [u.jsx("span", {
                        className: "text-foreground",
                        children: "Nanda"
                    }), u.jsx("span", {
                        className: "text-primary",
                        children: "Mochammad"
                    })]
                }), u.jsx("div", {
                    className: "hidden md:flex items-center space-x-8",
                    children: w.map(q => u.jsx("button", {
                        onClick: M => {
                            f(M),
                            H(q.href)
                        }
                        ,
                        className: "text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium",
                        children: q.name
                    }, q.name))
                }), u.jsx("button", {
                    onClick: q => {
                        f(q),
                        T(!b)
                    }
                    ,
                    className: "md:hidden p-2 rounded-lg hover:bg-accent transition-colors",
                    children: b ? u.jsx(Ad, {
                        className: "w-6 h-6"
                    }) : u.jsx(Gp, {
                        className: "w-6 h-6"
                    })
                })]
            }), b && u.jsx("div", {
                className: "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-apple",
                children: u.jsx("div", {
                    className: "py-4 space-y-2",
                    children: w.map(q => u.jsx("button", {
                        onClick: M => {
                            f(M),
                            H(q.href)
                        }
                        ,
                        className: "block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 font-medium",
                        children: q.name
                    }, q.name))
                })
            })]
        })
    })
}
  , ug = {
    headline: "iOS Software Engineer Team Lead, pursuing M.CS in AI at UB, exploring AI automation."
}
  , cg = `Seasoned iOS Engineer with 7+ years of experience in crafting high-quality mobile applications. I specialize in Swift, SwiftUI, UIKit, MVVM, and modular architecture, delivering scalable software for industries like HRMS, healthcare, education, and e-commerce. My recent Master's in Computer Science from Universitas Brawijaya, with a focus on AI-NLP, enhances my technical expertise. I'm also proficient in Python for various development tasks.

I'm a strong advocate for clean code and principles like SOLID and DRY, and I'm skilled in TDD, including unit and UI tests. I enjoy architecting software, exploring new design patterns, and building reusable components to streamline development. My go-to patterns are MVVM and VIPER. I'm currently exploring AI automation using n8n and Swift 6 to enhance workflows.

Beyond coding, I'm a leader who fosters collaborative environments. I've successfully managed teams, optimized development workflows, and aligned projects across international teams. I believe in open communication, actively contributing to technical discussions, and using tools like Git and pair programming to solve critical issues and support colleagues.

I'm always eager to connect with fellow professionals and discuss new opportunities. Feel free to reach out to me via email or Instagram to connect!`
  , sg = [{
    institution: "University of Brawijaya",
    degree: "Master of Computer Science, MSc",
    interest: "Artificial Intelligence - Natural Language Processing (NLP)",
    start_date: "Aug 2025",
    end_date: "Aug 2027",
    status: "In Progress",
    gpa: "N/A",
    activities: ["Conduct an Automated Essay Scoring (AES) Research with Transformers and Meta-Learning"],
    skills: ["Artificial Intelligence (AI)", "Artificial Neural Networks", "Convolutional Neural Networks (CNN)", "Swarm Intelligence", "Deep Learning", "Deep Neural Networks (DNN)", "Natural Language Processing (NLP)"]
}, {
    institution: "Apple Developer Academy | Indonesia",
    degree: "Scholarship Internship",
    interest: "iOS Development",
    start_date: "2019",
    end_date: "2020",
    status: "Completed",
    gpa: "N/A",
    activities: ["Successfully launched Project Doolan, a final challenge project developed through active collaboration between team members and mentors.", "Actively participated in Challenge-Based Learning (CBL) learning through peer-learning and public talks.", "Contributing to the development of seven projects across various aspects.", "Achieved expert-level criteria on personal goals throughout the academy process, showcasing consistent growth and skill mastery."],
    skills: ["iOS Development", "UIKit", "Swift", "Challenge Based Learning", "Scrum Project Management"]
}, {
    institution: "Universitas Islam Negeri Maulana Malik Ibrahim",
    degree: "Bachelor of Informatic Engineering",
    interest: "Mobile Programming - iOS",
    start_date: "2015",
    end_date: "2022",
    status: "Completed",
    gpa: "3.8",
    activities: ["Led Google Developer Student Club: Mentored over 20 students yearly, focusing on mobile development through workshops, events, and mentorship.", "Mentored University Boarding School Students: Provided academic and personal support to help new students adapt and thrive over a four-year period.", "Lecture Assistant for Mobile Programming (4 semesters): Assisted in course delivery, evaluated assignments, and mentored students to enhance learning experiences."],
    skills: ["Java Programming", "Mobile Development", "Software Engineering", "Database Management", "Web Development"]
}]
  , og = JSON.parse(`[
  {
    "company": "Apple Developer Academy @CIP",
    "positions": [
      {
        "title": "Software Development Learning Facilitator",
        "employment_type": "Full-time",
        "start_date": "Aug 2025",
        "end_date": "Present",
        "duration": "3 mo",
        "location": "Surabaya Â· Indonesia",
        "description": "- Deep dive into expertise on AI/ML using Apple environments and beyond, exploring cutting-edge technologies and frameworks.\\n- Provide comprehensive learning guidance to learners focusing on tech, especially Apple development including iOS, macOS, watchOS, and other platforms.\\n- Apply learning pedagogy knowledge to deliver proper and effective learning experiences tailored to individual learner needs.\\n- Foster a collaborative environment that encourages innovation and technical excellence among learners.",
        "skills": [
          "Pedagogy",
          "AI/ML",
          "Mentoring",
          "Technical Leadership",
          "Coaching",
          "Xcode Cloud",
          "Xcode",
          "CI/CD",
          "Git",
          "Swift"
        ],
        "projects": []
      }
    ],
    "company_duration": "3 mo",
    "location": "Surabaya Â· Indonesia"
  },{
    "company": "Visi Prima Nusantara",
    "positions": [
      {
        "title": "Software Engineer Team Lead - iOS",
        "employment_type": "Full-time",
        "start_date": "Jun 2023",
        "end_date": "Aug 2025",
        "duration": "2 yr 3 mo",
        "location": "Indonesia · Remote",
        "description": "- Delivered the Portal Kerja Employee, HRMS, and Portal Kampus SaaS app within 20 sprints, managing complex projects on schedule.\\n- Led a team of three engineers to migrate to modular architecture, achieving 2x faster product deliveries per sprint.\\n- Coordinated cross-stakeholder planning for four concurrent projects, enhancing alignment and communication.\\n- Reported directly to the Head of IT regarding project planning and progress, maintaining active communication.",
        "skills": [
          "Mentoring",
          "Technical Leadership",
          "UIKit",
          "Coaching",
          "CI/CD",
          "Swift",
          "Git",
          "XcodeCloud",
          "SwiftUI",
          "Modular Architecture",
          "MVVM",
          "VIPER"
        ],
        "projects": [
          "Portal Sekolah Orang Tua"
        ]
      },
      {
        "title": "Senior Software Engineer - iOS",
        "employment_type": "Full-time",
        "start_date": "Mar 2023",
        "end_date": "Jun 2023",
        "duration": "4 mo",
        "location": "Indonesia · Remote",
        "description": "- Launched the Portal Sekolah Student and Parent MVP feature in just three months as the sole engineer on the project, achieving 500 users at the outset.\\n- Developed complex features with clean code and created reusable components, increasing efficiency by 1.5x each sprint.\\n- Utilized various libraries, such as Alamofire, Snapkit, Lottie, SkeletonView, Realm, and DGChart, to reduce project timelines by 1.5 times.",
        "skills": [
          "Technical Leadership",
          "Remote Working",
          "MVVM",
          "Git",
          "Swift (Programming Language)",
          "Viper"
        ],
        "projects": [
          "Portal Kerja",
          "Portal Sekolah"
        ]
      }
    ],
    "company_duration": "2 yr 7 mo",
    "location": "Indonesia · Remote"
  },
  {
    "company": "KlikDokter",
    "positions": [
      {
        "title": "Software Engineer - iOS",
        "employment_type": "Full-time",
        "start_date": "Mar 2022",
        "end_date": "Mar 2023",
        "duration": "1 yr 1 mo",
        "location": "Indonesia · Remote",
        "description": "- Launched the redesigned KlikDokter user interface in three months, achieving a 4.5 app store rating.\\n- Created reusable components that boosted developer productivity, leading to a 2x faster development process and doubling build releases per sprint.\\n- Adopted MVVM and SOLID principles to enhance algorithm processing, resulting in a build release speed that is twice as fast.",
        "skills": [
          "Scrum",
          "Mentoring",
          "Agile Methodologies",
          "Remote Working",
          "Coaching",
          "Teaching",
          "MVVM"
        ],
        "projects": [
          "KlikDokter: Jaga Sehatmu"
        ]
      }
    ],
    "company_duration": "1 yr 1 mo",
    "location": "Indonesia · Remote"
  },
  {
    "company": "PT Bank Mandiri (Persero) Tbk.",
    "positions": [
      {
        "title": "Software Engineer - iOS",
        "employment_type": "Full-time",
        "start_date": "Oct 2021",
        "end_date": "Mar 2022",
        "duration": "6 mo",
        "location": "Jakarta Selatan · Indonesia",
        "description": "- Contributed to the successful launch of the Livin' by Mandiri app within 6 months, achieving the top ranking for banking apps in Indonesia.\\n- Adopted modern technologies such as RxSwift, Modular design, and VIPER architecture, significantly improving product scalability and accelerating delivery by 2x in each phase.\\n- Applied agile and scrum methodologies to ensure seamless collaboration among teams.\\n- Developed a library for automating folder creation, which improved the development process by 10%.",
        "skills": [
          "Mentoring",
          "Version Control",
          "Objective-C",
          "Coaching",
          "Gitlab",
          "Teaching",
          "CI/CD",
          "iOS"
        ],
        "projects": [
          "Livin' by Mandiri"
        ]
      }
    ],
    "company_duration": "6 mo",
    "location": "Jakarta Selatan · Indonesia"
  },
  {
    "company": "Namatech",
    "positions": [
      {
        "title": "Technical Lead & iOS Developer",
        "employment_type": "Freelance",
        "start_date": "Jul 2019",
        "end_date": "Feb 2022",
        "duration": "2 yr 8 mo",
        "location": "Indonesia · Remote",
        "description": "- Led iOS development and technical direction for multiple client projects.\\n- Translated PRDs and UI designs into scalable iOS applications.\\n- Created reusable components and set up project repositories with GitFlow.\\n- Oversaw development in collaboration with 5-10 team members.\\n- Managed App Store Connect setup, including provisioning and app IDs.",
        "skills": [
          "iOS Development",
          "Technical Leadership",
          "UIKit",
          "GitFlow",
          "iOS"
        ],
        "projects": [
          "Saham Daily",
          "Kkuljaem Korean"
        ]
      },
      {
        "title": "Founder",
        "employment_type": "Self-employed",
        "start_date": "Jun 2019",
        "end_date": "Feb 2022",
        "duration": "2 yr 9 mo",
        "location": "Indonesia · Remote",
        "description": "- Founded Namatech to deliver trusted IT services for professional brands.\\n- Led client negotiations, team recruitment, and project oversight.\\n- Built a vetted team of developers to ensure high-quality delivery.\\n- Focused on long-term client collaboration and growth strategy.",
        "skills": [
          "Product Development",
          "Agile Methodologies",
          "Business Strategy",
          "Accounting",
          "Negotiation",
          "Business Development",
          "Product Management",
          "Product Design"
        ]
      }
    ],
    "company_duration": "2 yr 9 mo",
    "location": "Indonesia · Remote"
  },
  {
    "company": "PCCW Solutions Limited",
    "positions": [
      {
        "title": "iOS Developer",
        "employment_type": "Full-time",
        "start_date": "Oct 2020",
        "end_date": "Oct 2021",
        "duration": "1 yr 1 mo",
        "location": "Indonesia · Remote",
        "description": "- Executed a comprehensive unit testing in Xcode, leveraging Sonarqube for coverage and analytics; achieved an 80% code coverage with zero bugs ensuring optimum app performance and stability.",
        "skills": [
          "MVC",
          "Unit Testing",
          "Pair Programming"
        ],
        "projects": [
          "myIndiHome"
        ],
        "notes": "LinkedIn helped me get this job"
      }
    ],
    "company_duration": "1 yr 1 mo",
    "location": "Indonesia · Remote"
  },
  {
    "company": "Algostudio",
    "positions": [
      {
        "title": "iOS Developer",
        "employment_type": "Full-time",
        "start_date": "Feb 2020",
        "end_date": "Oct 2020",
        "duration": "9 mo",
        "location": "Malang · Indonesia",
        "description": "- Enhanced app functionality by improving navigation and UX flows.\\n- Refactored code using clean code and reusable component principles.\\n- Increased maintainability and efficiency of the codebase.\\n- Delivered visible improvements that positively impacted users.",
        "skills": [
          "UIKit",
          "Gitlab",
          "Swift (Programming Language)",
          "iOS"
        ],
        "projects": [
          "Philips lighting e-shop ID",
          "PCC - Authorized Store",
          "Philips Lighting e-store"
        ]
      }
    ],
    "company_duration": "9 mo",
    "location": "Malang · Indonesia"
  },
  {
    "company": "PergiKuliner.com",
    "positions": [
      {
        "title": "iOS Developer",
        "employment_type": "Part-time",
        "start_date": "Oct 2019",
        "end_date": "Jan 2020",
        "duration": "4 mo",
        "location": "Jakarta Barat · Indonesia",
        "description": "- Updated and maintained iOS app features, focusing on the Craving module.\\n- Resolved legacy bugs and improved app stability.\\n- Followed Model-View-Controller design pattern for scalable code.\\n- Integrated key third-party libraries like Alamofire, SDWebImage, and Firebase.\\n- Contributed to enhancing performance and user experience.",
        "skills": [
          "iOS Development",
          "UIKit",
          "iOS"
        ],
        "projects": [
          "PergiKuliner"
        ]
      }
    ],
    "company_duration": "4 mo",
    "location": "Jakarta Barat · Indonesia"
  },
  {
    "company": "Apple Developer Academy | Indonesia",
    "positions": [
      {
        "title": "iOS Developer",
        "employment_type": "Internship",
        "start_date": "Mar 2019",
        "end_date": "Jan 2020",
        "duration": "11 mo",
        "location": "BSD · Indonesia",
        "description": "- Built six iOS apps solving real-world problems with different teams.\\n- Led product design, development, and research using Challenge-Based Learning.\\n- Practiced agile collaboration through Scrum methodology.\\n- Delivered innovative solutions, including games and AI-powered tools.\\n- Honed leadership, teamwork, and technical excellence under Apple mentorship.",
        "skills": [
          "iOS Development",
          "UIKit",
          "iOS"
        ],
        "projects": [
          "Doolan",
          "Little Happy",
          "Mazic",
          "Calemo",
          "Treshno",
          "Locquee"
        ]
      }
    ],
    "company_duration": "11 mo",
    "location": "BSD · Indonesia"
  },
  {
    "company": "GDG on Campus Maliki",
    "positions": [
      {
        "title": "Leader",
        "employment_type": "Apprenticeship",
        "start_date": "Mar 2018",
        "end_date": "May 2019",
        "duration": "1 yr 3 mo",
        "location": "Malang · Indonesia",
        "description": "- Selected as one of 60 DSC Leaders across Indonesia by Google Developers.\\n- Led workshops, seminars, and hands-on tech events for students.\\n- Promoted collaboration through project showcases and peer learning."
      }
    ],
    "company_duration": "1 yr 3 mo",
    "location": "Malang · Indonesia"
  },
  {
    "company": "UIN Maulana Malik Ibrahim Malang",
    "positions": [
      {
        "title": "Musyrif Mahad Sunan Ampel Al Aly",
        "employment_type": "N/A",
        "start_date": "Aug 2016",
        "end_date": "Feb 2019",
        "duration": "2 yr 7 mo",
        "location": "Malang · Indonesia",
        "description": "- Mentored new students in academic, spiritual, and personal development.\\n- Organized daily language and religious study sessions to build discipline and fluency.\\n- Led student initiatives as IT Director and Media Head for key events.\\n- Oversaw programs on Quranic and classical Islamic studies.\\n- Cultivated leadership and community-building experience over 3 years."
      },
      {
        "title": "Lecture Assistant of Basic Programming",
        "employment_type": "Apprenticeship",
        "start_date": "Sep 2016",
        "end_date": "Sep 2018",
        "duration": "2 yr 1 mo",
        "location": "Malang · Indonesia",
        "description": "- Facilitated Java programming labs for over 10 classes across two academic years.\\n- Provided real-time coding support and conceptual guidance to students.\\n- Strengthened communication skills through consistent mentoring."
      },
      {
        "title": "Lecture Assistant of Mobile Programming",
        "employment_type": "Apprenticeship",
        "start_date": "Aug 2016",
        "end_date": "Dec 2017",
        "duration": "1 yr 5 mo",
        "location": "Malang · Indonesia",
        "description": "- Led lab sessions and guided students in Android app development using Java.\\n- Co-designed the Mobile Programming curriculum and authored the official lab handbook.\\n- Initiated and established a new course that ran for three academic years."
      },
      {
        "title": "Campus Journalist",
        "employment_type": "N/A",
        "start_date": "Jan 2016",
        "end_date": "Aug 2017",
        "duration": "1 yr 8 mo",
        "location": "Malang · Indonesia",
        "description": "- Served as a student journalist for GEMA in the 2016/2017 academic year.\\n- Covered campus events and student activities through written reports.\\n- Contributed to editorial planning and article development.\\n- Strengthened skills in writing, interviewing, and information gathering."
      }
    ],
    "company_duration": "3 yr 2 mo",
    "location": "Malang · Indonesia"
  }
]`)
  , rg = [{
    name: "Introduction to Python for Developers",
    provider: "DataCamp",
    year: "2025",
    certificate_url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/2c40493268eaab4874d79d33d4281eb13261a322",
    primary_courses: !0
}, {
    name: "Belajar Dasar AI",
    provider: "Dicoding Indonesia",
    year: "2024",
    certificate_url: "https://www.dicoding.com/certificates/KEXLYR3Q0ZG2",
    primary_courses: !1
}, {
    name: "Memulai Pemrograman Dengan Dart",
    provider: "Dicoding Indonesia",
    year: "2024",
    certificate_url: "https://www.dicoding.com/certificates/KEXLYR46MZG2",
    primary_courses: !1
}, {
    name: "SwiftUI + SwiftData Masterclass - iOS App Development Swift",
    provider: "Udemy",
    year: "2024",
    certificate_url: "https://www.udemy.com/certificate/UC-303039d9-b71a-4cc8-8be8-8b1a9d943f7f/",
    primary_courses: !0
}, {
    name: "ITBox Certificate - Full Stack Javascript",
    provider: "ITBOX",
    year: "2024",
    certificate_url: "https://itbox.id/certificate-verifier/1336923C7-138E4CA8F-12704118D/",
    primary_courses: !1
}, {
    name: "500 Mentorship Minutes",
    provider: "adplist.org",
    year: "2023",
    certificate_url: "https://adplist.org/certifications/119221",
    primary_courses: !1
}, {
    name: "10 Mentorship Sessions",
    provider: "adplist.org",
    year: "2023",
    certificate_url: "https://adplist.org/certifications/110441",
    primary_courses: !1
}, {
    name: "100 Mentorship Minutes",
    provider: "adplist.org",
    year: "2023",
    certificate_url: "https://adplist.org/certifications/106558",
    primary_courses: !1
}, {
    name: "1 Mentorship Sessions",
    provider: "adplist.org",
    year: "2023",
    certificate_url: "https://adplist.org/certifications/95739",
    primary_courses: !1
}, {
    name: "Belajar Fundamental Aplikasi iOS",
    provider: "Dicoding Indonesia",
    year: "2022",
    certificate_url: "https://www.dicoding.com/certificates/0LZ01KL70P65",
    primary_courses: !1
}, {
    name: "Belajar Prinsip Pemrograman SOLID",
    provider: "Dicoding Indonesia",
    year: "2022",
    certificate_url: "https://www.dicoding.com/certificates/JMZVGKWQQZN9",
    primary_courses: !1
}, {
    name: "iOS & Swift - The Complete iOS App Development Bootcamp",
    provider: "Udemy",
    year: "2021",
    certificate_url: "https://www.udemy.com/certificate/UC-af167965-d75f-4dd8-9571-1f95404c604a/",
    primary_courses: !0
}, {
    name: "iOS App Testing in Swift, Xcode",
    provider: "Udemy",
    year: "2020",
    certificate_url: "http://ude.my/UC-f3828c17-507e-4d84-9994-2c2cebc69635",
    primary_courses: !1
}, {
    name: "Notion Essentials Badge",
    provider: "Notion",
    year: "2022",
    certificate_url: "https://www.credly.com/badges/2b151b71-fb74-4c79-b87f-398b355cdcc3?source=linked_in_profile",
    primary_courses: !1
}, {
    name: "Belajar Membuat Aplikasi iOS untuk Pemula",
    provider: "Dicoding Indonesia",
    year: "2021",
    certificate_url: "https://www.dicoding.com/certificates/4EXGYM4YQXRL",
    primary_courses: !1
}, {
    name: "Memulai Pemrograman Dengan Swift",
    provider: "Dicoding Indonesia",
    year: "2021",
    certificate_url: "https://www.dicoding.com/certificates/1RXY4V8VKPVM",
    primary_courses: !1
}, {
    name: "The Complete 2019 Flutter Development Bootcamp with Dart",
    provider: "Udemy",
    year: "2019",
    certificate_url: "https://www.udemy.com/certificate/UC-OCDPA98Q/",
    primary_courses: !1
}]
  , fg = [{
    name: "Portal Sekolah Orang Tua",
    description: "Portal Sekolah Orang Tua is a school and learning management system that allows parents to monitor their children's activities and communicate with the school. This project is in collaboration with Visi Prima Nusantara.",
    collaboration: "@PT Visi Prima Nusantara",
    technologies: ["Swift", "UIKit", "MVVM", "Modular Architecture"],
    achievements: ["500+ users in first month", "2x faster delivery", "Clean architecture implementation"],
    app_store_url: "https://apps.apple.com/id/app/portal-sekolah-orang-tua/id6476955227",
    github_url: null,
    icon: "🏫",
    color: "purple",
    showcase: !0
}, {
    name: "Portal Kerja",
    description: "Portal Kerja is an integrated job search platform that assists job seekers in finding new opportunities. Available in Web, iOS, and Android This project is in collaboration with Visi Prima Nusantara.",
    collaboration: "@PT Visi Prima Nusantara",
    technologies: ["Swift", "UIKit", "MVVM", "Clean Code"],
    achievements: ["500+ users in first month", "1.5x faster sprint efficiency", "Reusable components"],
    app_store_url: "https://apps.apple.com/id/app/portal-kerja-hrms/id6479629717",
    github_url: null,
    icon: "💼",
    color: "blue",
    showcase: !0
}, {
    name: "Portal Sekolah",
    description: "School and Learning Management System for students, teachers, headmasters, and other stakeholders. Available in Apps Store and Play Store This project is in collaboration with Visi Prima Nusantara.",
    collaboration: "@PT Visi Prima Nusantara",
    technologies: ["Swift", "UIKit", "MVVM", "Modular Architecture"],
    achievements: ["500+ users in first month", "1.5x faster sprint efficiency", "Clean architecture implementation"],
    app_store_url: "https://apps.apple.com/id/app/portal-sekolah/id6447937633",
    github_url: null,
    icon: "🏫",
    color: "purple",
    showcase: !0
}, {
    name: "Portal Sekolah Staff",
    description: "School and Learning Management System for teachers, headmasters, and other stakeholders at school. Available in Apps Store and Play Store This project is in collaboration with Visi Prima Nusantara.",
    collaboration: "@PT Visi Prima Nusantara",
    technologies: ["Swift", "UIKit", "MVVM"],
    achievements: ["500+ users in first month", "1.5x faster sprint efficiency", "Clean architecture implementation"],
    app_store_url: "https://apps.apple.com/id/app/portal-sekolah/id6447937633",
    github_url: null,
    icon: "🏫",
    color: "purple",
    showcase: !0
}, {
    name: "KlikDokter: Jaga Sehatmu",
    description: "Healthcare mobile application connecting patients with doctors",
    collaboration: "@PT Medika Komunika Teknologi",
    technologies: ["Swift", "UIKit", "MVVM", "SOLID Principles"],
    achievements: ["4.5 App Store rating", "2x faster development", "Reusable components"],
    app_store_url: "https://apps.apple.com/id/app/klikdokter-jaga-sehatmu/id1001542966",
    github_url: null,
    icon: "🏥",
    color: "orange",
    showcase: !0
}, {
    name: "Livin' by Mandiri",
    description: "Top-ranking banking application in Indonesia",
    collaboration: "@PT Bank Mandiri",
    technologies: ["Swift", "RxSwift", "VIPER", "Modular Design"],
    achievements: ["#1 Banking app in Indonesia", "2x delivery acceleration", "10% development improvement"],
    app_store_url: "https://apps.apple.com/id/app/livin-by-mandiri/id1555414743",
    github_url: null,
    icon: "🏦",
    color: "green",
    showcase: !0
}, {
    name: "Saham Daily",
    description: "Stock market tracking and analysis mobile application",
    collaboration: "@Namatech x SahamDaily",
    technologies: ["Swift", "UIKit", "GitFlow", "Technical Leadership"],
    achievements: ["Real-time stock data", "User-friendly interface", "Market analysis features"],
    app_store_url: "https://apps.apple.com/id/app/saham-daily/id1620758550",
    github_url: null,
    icon: "📈",
    color: "red",
    showcase: !0
}, {
    name: "Kkuljaem Korean",
    description: "Develop an online course Kkuljaem Korean. Run on iOS, android, and web. This project is in collaboration with Namatech.",
    collaboration: "@Namatech x Bandung Oppa",
    technologies: ["Swift", "UIKit", "GitFlow", "Technical Leadership"],
    achievements: ["Multi-platform support", "User-friendly interface", "Online course integration"],
    app_store_url: "https://apps.apple.com/id/app/kkuljaem-korean/id1586145527",
    github_url: null,
    icon: "🇰🇷",
    color: "blue",
    showcase: !0
}, {
    name: "myIndiHome",
    description: "Develop an existing project and develop new feature. This project is in collaboration with PCCW Solutions Limited.",
    collaboration: "@PCCW Solutions Limited",
    technologies: ["Swift", "MVC", "Unit Testing", "Pair Programming"],
    achievements: ["80% code coverage", "Zero bugs", "Enhanced app stability"],
    app_store_url: "https://apps.apple.com/id/app/myindihome/id1119407221",
    github_url: null,
    icon: "📡",
    color: "blue",
    showcase: !0
}, {
    name: "Philips lighting e-shop ID",
    description: "Create an app from scratch. This project is in collaboration with Algostudio.",
    collaboration: "@Algostudio",
    technologies: ["Swift", "UIKit", "Gitlab", "iOS"],
    achievements: ["Built from scratch", "Improved navigation", "Clean code practices"],
    app_store_url: "https://apps.apple.com/id/app/philips-lighting-e-shop-id/id1539388913",
    github_url: null,
    icon: "💡",
    color: "yellow",
    showcase: !1
}, {
    name: "PCC - Authorized Store",
    description: "Develop an existing project and develop new feature. This project is in collaboration with Algostudio.",
    collaboration: "@Algostudio",
    technologies: ["Swift", "UIKit", "Gitlab", "iOS"],
    achievements: ["Enhanced features", "Improved navigation", "Clean code practices"],
    app_store_url: "https://apps.apple.com/id/app/pcc-authorized-store/id1225506538",
    github_url: null,
    icon: "🏬",
    color: "blue",
    showcase: !1
}, {
    name: "Philips Lighting e-store",
    description: "Develop an existing project and develop new feature. This project is in collaboration with Algostudio.",
    collaboration: "@Algostudio",
    technologies: ["Swift", "UIKit", "Gitlab", "iOS"],
    achievements: ["Enhanced features", "Improved navigation", "Clean code practices"],
    app_store_url: "https://apps.apple.com/id/app/philips-lighting-e-store/id1459823942",
    github_url: null,
    icon: "💡",
    color: "yellow",
    showcase: !1
}, {
    name: "Doolan",
    description: "iOS Mobile Apps - Travelling Assistant",
    collaboration: "@Apple Academy",
    technologies: ["Swift", "UIKit", "Scrum", "Challenge Based Learning"],
    achievements: ["Collaborative development", "Global idea implementation", "Research-based solution"],
    app_store_url: null,
    github_url: null,
    icon: "✈️",
    color: "blue",
    showcase: !0
}, {
    name: "Little Happy",
    description: "iOS Mobile Apps - Semi Game to Teach Kid about Feeling",
    collaboration: "@Apple Academy",
    technologies: ["Swift", "UIKit", "Scrum", "Challenge Based Learning"],
    achievements: ["Educational impact", "Collaborative development", "Research-based solution"],
    app_store_url: null,
    github_url: null,
    icon: "😊",
    color: "yellow",
    showcase: !1
}, {
    name: "Mazic",
    description: "iOS Mobile Apps - Quiz Game to show emotion of human behaviour",
    collaboration: "@Apple Academy",
    technologies: ["Swift", "UIKit", "Scrum", "Challenge Based Learning"],
    achievements: ["Engaging quiz platform", "Collaborative development", "Research-based solution"],
    app_store_url: null,
    github_url: null,
    icon: "❓",
    color: "purple",
    showcase: !1
}, {
    name: "Calemo",
    description: "iOS Mobile Apps - Journaling Apps to journal a daily activities with simple AI",
    collaboration: "@Apple Academy",
    technologies: ["Swift", "UIKit", "Scrum", "Challenge Based Learning"],
    achievements: ["AI-driven journaling", "Collaborative development", "Research-based solution"],
    app_store_url: null,
    github_url: null,
    icon: "📝",
    color: "blue",
    showcase: !1
}, {
    name: "Treshno",
    description: "iOS Mobile Apps - Pick up trash Apps",
    collaboration: "@Apple Academy",
    technologies: ["Swift", "UIKit", "Scrum", "Challenge Based Learning"],
    achievements: ["Environmental impact", "Collaborative development", "Research-based solution"],
    app_store_url: null,
    github_url: null,
    icon: "🗑️",
    color: "green",
    showcase: !1
}, {
    name: "Locquee",
    description: "iOS Mobile Apps - Lock and Track Locker Owner",
    collaboration: "@Apple Academy",
    technologies: ["Swift", "UIKit", "Scrum", "Challenge Based Learning"],
    achievements: ["Security-focused solution", "Collaborative development", "Research-based solution"],
    app_store_url: null,
    github_url: null,
    icon: "🔒",
    color: "red",
    showcase: !1
}, {
    name: "PergiKuliner",
    description: "iOS Mobile Apps to find recommended food and restaurant in Indonesia",
    collaboration: "@Pergi Kuliner",
    technologies: ["Swift", "UIKit", "Scrum", "Reusable Components"],
    achievements: ["Fluid user experience", "Collaborative development", "Work under CTO supervision"],
    app_store_url: "https://apps.apple.com/id/app/pergikuliner/id1066140928%3Fl",
    github_url: null,
    icon: "🍜",
    color: "red",
    showcase: !1
}]
  , dg = {
    technical: [{
        name: "Swift",
        icon: "https://img.icons8.com/color/512/swift.png"
    }, {
        name: "SwiftUI",
        icon: "https://img.icons8.com/ios-filled/512/swiftui.png"
    }, {
        name: "UIKit",
        icon: "https://img.icons8.com/ios-filled/512/uikit.png"
    }, {
        name: "MVVM",
        icon: "https://img.icons8.com/ios-filled/512/model-view-viewmodel.png"
    }, {
        name: "VIPER",
        icon: "https://img.icons8.com/ios-filled/512/architecture.png"
    }, {
        name: "Modular Architecture",
        icon: "https://img.icons8.com/ios-filled/512/modular.png"
    }, {
        name: "RxSwift",
        icon: "https://img.icons8.com/ios-filled/512/reactive-programming.png"
    }, {
        name: "Git",
        icon: "https://img.icons8.com/color/512/git.png"
    }, {
        name: "CI/CD",
        icon: "https://img.icons8.com/ios-filled/512/continuous-integration.png"
    }, {
        name: "XcodeCloud",
        icon: "https://img.icons8.com/ios-filled/512/cloud.png"
    }, {
        name: "Python",
        icon: "https://img.icons8.com/color/512/python.png"
    }, {
        name: "Artificial Intelligence",
        icon: "https://img.icons8.com/ios-filled/512/artificial-intelligence.png"
    }, {
        name: "Natural Language Processing",
        icon: "https://img.icons8.com/ios-filled/512/nlp.png"
    }, {
        name: "Deep Learning",
        icon: "https://img.icons8.com/ios-filled/512/deep-learning.png"
    }, {
        name: "TDD",
        icon: "https://img.icons8.com/ios-filled/512/test‑driven‑development.png"
    }, {
        name: "Unit Testing",
        icon: "https://img.icons8.com/ios-filled/512/unit-testing.png"
    }, {
        name: "UI Testing",
        icon: "https://img.icons8.com/ios-filled/512/ui-testing.png"
    }, {
        name: "Flutter",
        icon: "https://img.icons8.com/color/512/flutter.png"
    }, {
        name: "Dart",
        icon: "https://img.icons8.com/color/512/dart.png"
    }, {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/512/javascript.png"
    }, {
        name: "Java",
        icon: "https://img.icons8.com/color/512/java.png"
    }, {
        name: "Objective-C",
        icon: "https://img.icons8.com/ios-filled/512/objective-c.png"
    }, {
        name: "Kotlin",
        icon: "https://img.icons8.com/color/512/kotlin.png"
    }, {
        name: "REST API",
        icon: "https://img.icons8.com/ios-filled/512/rest-api.png"
    }, {
        name: "GraphQL",
        icon: "https://img.icons8.com/color/512/graphql.png"
    }, {
        name: "Core Data",
        icon: "https://img.icons8.com/ios-filled/512/core-data.png"
    }],
    soft_skills: [{
        name: "Technical Leadership",
        icon: "https://img.icons8.com/ios-filled/512/leadership.png"
    }, {
        name: "Mentoring",
        icon: "https://img.icons8.com/ios-filled/512/mentor.png"
    }, {
        name: "Coaching",
        icon: "https://img.icons8.com/ios-filled/512/coaching.png"
    }, {
        name: "Team Management",
        icon: "https://img.icons8.com/ios-filled/512/teamwork.png"
    }, {
        name: "Agile Methodologies",
        icon: "https://img.icons8.com/color/512/agile-development.png"
    }, {
        name: "Scrum",
        icon: "https://img.icons8.com/color/512/scrum.png"
    }, {
        name: "Cross-functional Collaboration",
        icon: "https://img.icons8.com/ios-filled/512/collaboration.png"
    }, {
        name: "Problem Solving",
        icon: "https://img.icons8.com/ios-filled/512/problem-solving.png"
    }, {
        name: "Communication",
        icon: "https://img.icons8.com/ios-filled/512/communication.png"
    }, {
        name: "Project Management",
        icon: "https://img.icons8.com/color/512/project-management.png"
    }, {
        name: "Business Strategy",
        icon: "https://img.icons8.com/ios-filled/512/business-strategy.png"
    }, {
        name: "Negotiation",
        icon: "https://img.icons8.com/ios-filled/512/negotiation.png"
    }, {
        name: "Business Development",
        icon: "https://img.icons8.com/ios-filled/512/business-development.png"
    }, {
        name: "Time Management",
        icon: "https://img.icons8.com/ios-filled/512/time-management.png"
    }],
    tools: [{
        name: "Xcode",
        icon: "https://img.icons8.com/ios-filled/512/xcode.png"
    }, {
        name: "Git",
        icon: "https://img.icons8.com/color/512/git.png"
    }, {
        name: "GitLab",
        icon: "https://img.icons8.com/color/512/gitlab.png"
    }, {
        name: "GitHub",
        icon: "https://img.icons8.com/material-outlined/512/github.png"
    }, {
        name: "Jira",
        icon: "https://img.icons8.com/color/512/jira.png"
    }, {
        name: "Figma",
        icon: "https://img.icons8.com/color/512/figma.png"
    }, {
        name: "Sketch",
        icon: "https://img.icons8.com/ios-filled/512/sketch.png"
    }, {
        name: "Postman",
        icon: "https://img.icons8.com/color/512/postman.png"
    }, {
        name: "Firebase",
        icon: "https://img.icons8.com/color/512/firebase.png"
    }, {
        name: "App Store Connect",
        icon: "https://img.icons8.com/ios-filled/512/app-store-connect.png"
    }, {
        name: "TestFlight",
        icon: "https://img.icons8.com/ios-filled/512/testflight.png"
    }, {
        name: "Alamofire",
        icon: "https://img.icons8.com/ios-filled/512/networking.png"
    }, {
        name: "Realm",
        icon: "https://img.icons8.com/ios-filled/512/database.png"
    }, {
        name: "Lottie",
        icon: "https://img.icons8.com/color/512/lottie.png"
    }, {
        name: "GitFlow",
        icon: "https://img.icons8.com/ios-filled/512/git-branch.png"
    }, {
        name: "SnapKit",
        icon: "https://img.icons8.com/ios-filled/512/constraints.png"
    }, {
        name: "SkeletonView",
        icon: "https://img.icons8.com/ios-filled/512/skeleton-interface.png"
    }, {
        name: "Crashlytics",
        icon: "https://img.icons8.com/color/512/crashlytics.png"
    }, {
        name: "Sonarqube",
        icon: "https://img.icons8.com/color/512/sonarqube.png"
    }, {
        name: "Fastlane",
        icon: "https://img.icons8.com/ios-filled/512/fastlane.png"
    }]
}
  , mg = {
    linkedin: "https://linkedin.com/in/nandamochammad",
    github: "https://github.com/NandaMocha",
    email: "nanda.mocha@gmail.com",
    whatsapp: "6285156516071"
}
  , Ne = {
    personal_info: ug,
    about: cg,
    education: sg,
    experience: og,
    training: rg,
    projects: fg,
    skills: dg,
    social_links: mg
}
  , Nn = ({type: f, size: b, position: T, delay: r}) => {
    const S = {
        position: "absolute",
        width: `${b}px`,
        height: `${b}px`,
        opacity: .1,
        animation: "float 6s ease-in-out infinite",
        animationDelay: `${r}s`,
        ...T
    };
    return f === "circle" ? u.jsx("div", {
        style: {
            ...S,
            borderRadius: "50%",
            background: "linear-gradient(45deg, #007AFF, #34C759)"
        }
    }) : f === "square" ? u.jsx("div", {
        style: {
            ...S,
            background: "linear-gradient(45deg, #FF3B30, #FF9500)",
            borderRadius: "12px"
        }
    }) : f === "triangle" ? u.jsx("div", {
        style: {
            ...S,
            width: 0,
            height: 0,
            borderLeft: `${b / 2}px solid transparent`,
            borderRight: `${b / 2}px solid transparent`,
            borderBottom: `${b * .87}px solid rgba(0, 122, 255, 0.1)`
        }
    }) : null
}
  , hg = () => {
    const {addClickEffect: f} = (Ye == null ? void 0 : Ye()) || {
        addClickEffect: () => {}
    }
      , b = (Ne == null ? void 0 : Ne.personal_info) || {
        headline: "Full-Stack Developer"
    }
      , T = (Ne == null ? void 0 : Ne.social_links) || {
        github: "#",
        linkedin: "#"
    }
      , r = S => {
        const w = document.getElementById(S);
        w && w.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return u.jsxs("section", {
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24",
        children: [u.jsx(Nn, {
            type: "circle",
            size: 60,
            position: {
                top: "15%",
                left: "5%"
            },
            delay: 0
        }), u.jsx(Nn, {
            type: "square",
            size: 50,
            position: {
                top: "25%",
                right: "10%"
            },
            delay: 1
        }), u.jsx(Nn, {
            type: "triangle",
            size: 55,
            position: {
                bottom: "35%",
                left: "15%"
            },
            delay: 2
        }), u.jsx(Nn, {
            type: "circle",
            size: 40,
            position: {
                top: "55%",
                right: "5%"
            },
            delay: 3
        }), u.jsx(Nn, {
            type: "square",
            size: 35,
            position: {
                bottom: "45%",
                right: "20%"
            },
            delay: 4
        }), u.jsx("div", {
            className: "container mx-auto px-4 sm:px-6 relative z-10",
            children: u.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-6 sm:gap-8 items-center",
                children: [u.jsxs("div", {
                    className: "text-center lg:text-left space-y-6",
                    children: [u.jsxs("div", {
                        className: "space-y-3",
                        children: [u.jsx("h1", {
                            className: "text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900 leading-tight whitespace-nowrap",
                            children: "NANDA MOCHAMMAD"
                        }), u.jsx("p", {
                            className: "text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0",
                            children: b.headline
                        })]
                    }), u.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start",
                        children: [u.jsxs("button", {
                            onClick: S => {
                                f(S),
                                r("projects")
                            }
                            ,
                            className: "group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 px-6 py-3 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300",
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }), u.jsxs("span", {
                                className: "relative z-10 flex items-center gap-3",
                                children: ["My Projects", u.jsx(mp, {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                })]
                            }), u.jsx("div", {
                                className: "absolute -top-1 -left-1 w-3 h-3 bg-white/30 rounded-full animate-ping group-hover:animate-pulse"
                            })]
                        }), u.jsxs("button", {
                            onClick: S => {
                                f(S),
                                r("contact")
                            }
                            ,
                            className: "group relative overflow-hidden border-2 border-blue-500 bg-transparent text-blue-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 px-6 py-3 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300",
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                            }), u.jsxs("span", {
                                className: "relative z-10 flex items-center gap-3",
                                children: ["Contact Me", u.jsx(fs, {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-12 transition-transform duration-300"
                                })]
                            }), u.jsx("div", {
                                className: "absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500/50 rounded-full animate-bounce group-hover:animate-pulse"
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "flex gap-3 justify-center lg:justify-start",
                        children: [u.jsx("a", {
                            href: T.github,
                            onClick: f,
                            className: "group p-2 sm:p-3 bg-white hover:bg-blue-500 rounded-full shadow-md transform hover:scale-110 hover:-rotate-12 active:scale-95 transition-all duration-300",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Bi, {
                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white transition-colors duration-300"
                            })
                        }), u.jsx("a", {
                            href: T.linkedin,
                            onClick: f,
                            className: "group p-2 sm:p-3 bg-white hover:bg-blue-500 rounded-full shadow-md transform hover:scale-110 hover:rotate-12 active:scale-95 transition-all duration-300",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(rs, {
                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white transition-colors duration-300"
                            })
                        })]
                    })]
                }), u.jsx("div", {
                    className: "relative flex justify-center lg:justify-end",
                    children: u.jsxs("div", {
                        className: "relative",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl opacity-20 scale-110"
                        }), u.jsxs("div", {
                            className: "relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300",
                            children: [u.jsx("img", {
                                src: "/assets/nandamochammad-profile.webp",
                                alt: "Nanda Mochammad",
                                className: "w-full h-full object-cover"
                            }), u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                            })]
                        }), u.jsx("div", {
                            className: "absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full animate-float"
                        }), u.jsx("div", {
                            className: "absolute -bottom-3 -left-3 w-5 h-5 bg-green-500 rounded-full animate-float",
                            style: {
                                animationDelay: "1s"
                            }
                        }), u.jsx("div", {
                            className: "absolute top-1/2 -left-6 w-3 h-3 bg-purple-500 rounded-full animate-float",
                            style: {
                                animationDelay: "2s"
                            }
                        })]
                    })
                })]
            })
        }), u.jsx("div", {
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20",
            children: u.jsx("div", {
                className: "w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center",
                children: u.jsx("div", {
                    className: "w-1 h-2 sm:h-3 bg-gray-600 rounded-full mt-2 animate-pulse"
                })
            })
        })]
    })
}
  , pg = () => {
    const f = Ye()
      , b = Ne.about.split(`

`);
    return u.jsx("section", {
        id: "professional-story",
        className: "spacing-normal bg-background",
        children: u.jsxs("div", {
            className: "container-wide",
            children: [u.jsxs("div", {
                className: "text-center mb-12",
                children: [u.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4",
                    children: [u.jsx(Pp, {
                        className: "w-5 h-5"
                    }), u.jsx("span", {
                        className: "font-medium",
                        children: "Professional Story"
                    })]
                }), u.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-foreground mb-4",
                    children: "My Journey"
                }), u.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                    children: "From passionate learner to seasoned professional - here's my story"
                })]
            }), u.jsx("div", {
                className: "max-w-4xl mx-auto",
                children: u.jsxs("div", {
                    className: "grid gap-8",
                    children: [u.jsx("div", {
                        onClick: f,
                        className: "card-borderless p-8 hover-lift",
                        style: {
                            borderRadius: "10px"
                        },
                        children: u.jsx("div", {
                            className: "space-y-6",
                            children: b.map( (T, r) => u.jsx("p", {
                                className: "text-lg text-muted-foreground leading-relaxed",
                                children: T
                            }, r))
                        })
                    }), u.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-6 mt-8",
                        children: [u.jsxs("div", {
                            onClick: f,
                            className: "card-borderless p-6 text-center hover-lift cursor-pointer",
                            style: {
                                borderRadius: "10px"
                            },
                            children: [u.jsx("div", {
                                className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: u.jsx($p, {
                                    className: "w-6 h-6 text-primary"
                                })
                            }), u.jsx("h3", {
                                className: "text-lg font-semibold text-foreground mb-2",
                                children: "Excellence"
                            }), u.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Committed to delivering high-quality solutions that exceed expectations"
                            })]
                        }), u.jsxs("div", {
                            onClick: f,
                            className: "card-borderless p-6 text-center hover-lift cursor-pointer",
                            style: {
                                borderRadius: "10px"
                            },
                            children: [u.jsx("div", {
                                className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: u.jsx(jd, {
                                    className: "w-6 h-6 text-primary"
                                })
                            }), u.jsx("h3", {
                                className: "text-lg font-semibold text-foreground mb-2",
                                children: "Collaboration"
                            }), u.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Building strong teams and fostering environments where everyone thrives"
                            })]
                        }), u.jsxs("div", {
                            onClick: f,
                            className: "card-borderless p-6 text-center hover-lift cursor-pointer",
                            style: {
                                borderRadius: "10px"
                            },
                            children: [u.jsx("div", {
                                className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: u.jsx(Hp, {
                                    className: "w-6 h-6 text-primary"
                                })
                            }), u.jsx("h3", {
                                className: "text-lg font-semibold text-foreground mb-2",
                                children: "Innovation"
                            }), u.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Always exploring new technologies and approaches to solve complex problems"
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-8",
                        children: [u.jsxs("div", {
                            onClick: f,
                            className: "card-borderless p-6 text-center hover-lift cursor-pointer",
                            style: {
                                borderRadius: "10px"
                            },
                            children: [u.jsx("div", {
                                className: "text-3xl font-bold text-primary mb-2",
                                children: "7+"
                            }), u.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: "Years Experience"
                            })]
                        }), u.jsxs("div", {
                            onClick: f,
                            className: "card-borderless p-6 text-center hover-lift cursor-pointer",
                            style: {
                                borderRadius: "10px"
                            },
                            children: [u.jsx("div", {
                                className: "text-3xl font-bold text-primary mb-2",
                                children: "15+"
                            }), u.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: "Projects Delivered"
                            })]
                        }), u.jsxs("div", {
                            onClick: f,
                            className: "card-borderless p-6 text-center hover-lift cursor-pointer",
                            style: {
                                borderRadius: "10px"
                            },
                            children: [u.jsx("div", {
                                className: "text-3xl font-bold text-primary mb-2",
                                children: "4+"
                            }), u.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: "Industry Type"
                            })]
                        }), u.jsxs("div", {
                            onClick: f,
                            className: "card-borderless p-6 text-center hover-lift cursor-pointer",
                            style: {
                                borderRadius: "10px"
                            },
                            children: [u.jsx("div", {
                                className: "text-3xl font-bold text-primary mb-2",
                                children: "5K+"
                            }), u.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: "Users Impacted"
                            })]
                        })]
                    })]
                })
            })]
        })
    })
}
  , gg = ({skills: f}) => {
    const b = he.useRef(null)
      , T = () => {
        b.current && b.current.scrollBy({
            left: -150,
            behavior: "smooth"
        })
    }
      , r = () => {
        b.current && b.current.scrollBy({
            left: 150,
            behavior: "smooth"
        })
    }
    ;
    return u.jsx("div", {
        className: "relative",
        children: u.jsxs("div", {
            className: "flex items-center gap-2",
            children: [u.jsx("button", {
                onClick: T,
                className: "flex-shrink-0 p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors md:block hidden",
                children: u.jsx(Sd, {
                    className: "w-4 h-4"
                })
            }), u.jsx("div", {
                ref: b,
                className: "flex gap-2 overflow-x-auto scrollbar-hide flex-1",
                style: {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                children: f.map( (S, w) => u.jsx("span", {
                    className: "inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm font-medium bg-primary/10 text-primary border border-primary/20 whitespace-nowrap flex-shrink-0",
                    children: S
                }, w))
            }), u.jsx("button", {
                onClick: r,
                className: "flex-shrink-0 p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors md:block hidden",
                children: u.jsx(Nd, {
                    className: "w-4 h-4"
                })
            })]
        })
    })
}
  , yg = ({education: f, index: b}) => {
    const {addClickEffect: T} = Ye();
    return u.jsxs("div", {
        className: "relative",
        children: [b < Ne.education.length - 1 && u.jsx("div", {
            className: "absolute left-2 md:left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20"
        }), u.jsx("div", {
            className: "absolute left-0 md:left-4 top-8 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 md:border-4 border-background shadow-lg z-10"
        }), u.jsx("div", {
            className: "ml-6 md:ml-12 mb-6 md:mb-8",
            children: u.jsx("div", {
                onClick: T,
                className: "p-4 md:p-6 hover-lift cursor-pointer",
                style: {
                    borderRadius: "8px"
                },
                children: u.jsxs("div", {
                    className: "space-y-3 md:space-y-4",
                    children: [u.jsxs("div", {
                        className: "flex flex-col md:flex-row items-start justify-between",
                        children: [u.jsxs("div", {
                            className: "flex-1",
                            children: [u.jsx("h3", {
                                className: "text-lg md:text-xl font-bold text-foreground mb-1",
                                children: f.institution
                            }), u.jsx("p", {
                                className: "text-sm md:text-lg font-semibold text-primary mb-1",
                                children: f.degree
                            }), u.jsxs("p", {
                                className: "text-xs md:text-sm text-muted-foreground",
                                children: ["Focusing ", f.interest]
                            })]
                        }), u.jsxs("div", {
                            className: "text-right mt-2 md:mt-0",
                            children: [u.jsxs("div", {
                                className: "text-xs md:text-sm font-medium text-muted-foreground",
                                children: [f.start_date, " - ", f.end_date]
                            }), f.gpa && f.gpa !== "N/A" && u.jsx("div", {
                                className: "mt-1",
                                children: u.jsxs("span", {
                                    className: "inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs md:text-sm font-medium",
                                    children: ["GPA: ", f.gpa]
                                })
                            })]
                        })]
                    }), f.activities && f.activities.length > 0 && u.jsxs("div", {
                        className: "space-y-1 md:space-y-2",
                        children: [u.jsx("h4", {
                            className: "text-xs md:text-sm font-semibold text-foreground",
                            children: "Key Activities:"
                        }), u.jsx("div", {
                            className: "space-y-1",
                            children: f.activities.map( (r, S) => u.jsxs("p", {
                                className: "text-xs md:text-sm text-muted-foreground pl-3 md:pl-4 relative",
                                children: [u.jsx("span", {
                                    className: "absolute left-0 top-2 w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full"
                                }), r]
                            }, S))
                        })]
                    }), f.skills && f.skills.length > 0 && u.jsxs("div", {
                        className: "space-y-1 md:space-y-2",
                        children: [u.jsx("h4", {
                            className: "text-xs md:text-sm font-semibold text-foreground",
                            children: "Skills Developed:"
                        }), u.jsx(gg, {
                            skills: f.skills
                        })]
                    })]
                })
            })
        })]
    })
}
  , vg = () => u.jsx("section", {
    id: "education",
    className: "py-8 md:py-12 bg-background",
    children: u.jsxs("div", {
        className: "container mx-auto px-4 md:px-6 lg:px-8",
        children: [u.jsxs("div", {
            className: "text-center mb-8 md:mb-12",
            children: [u.jsxs("div", {
                className: "inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-2 rounded-full bg-primary/10 text-primary mb-3 md:mb-4",
                children: [u.jsx(Cp, {
                    className: "w-4 h-4 md:w-5 md:h-5"
                }), u.jsx("span", {
                    className: "text-xs md:text-sm font-medium",
                    children: "Education Journey"
                })]
            }), u.jsx("h2", {
                className: "text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4",
                children: "Academic Excellence"
            }), u.jsx("p", {
                className: "text-sm md:text-xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto",
                children: "A continuous journey of learning and growth across prestigious institutions"
            })]
        }), u.jsx("div", {
            className: "max-w-3xl md:max-w-4xl mx-auto",
            children: u.jsx("div", {
                className: "relative",
                children: Ne.education.map( (f, b) => u.jsx(yg, {
                    education: f,
                    index: b
                }, b))
            })
        })]
    })
})
  , Td = ({project: f, isOpen: b, onClose: T}) => {
    const {addClickEffect: r} = Ye();
    return !b || !f ? null : u.jsx("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: S => {
            S.target === S.currentTarget && (r(S),
            T())
        }
        ,
        children: u.jsx("div", {
            className: "bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-apple-lg",
            children: u.jsxs("div", {
                className: "p-6",
                children: [u.jsxs("div", {
                    className: "flex justify-between items-start mb-6",
                    children: [u.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [u.jsx("div", {
                            className: "w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center",
                            children: u.jsx("span", {
                                className: "text-2xl",
                                children: f.icon || "📱"
                            })
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-2xl font-bold",
                                children: f.name
                            }), u.jsx("p", {
                                className: "text-muted-foreground",
                                children: f.collaboration || "N/A"
                            })]
                        })]
                    }), u.jsx("button", {
                        onClick: S => {
                            r(S),
                            T()
                        }
                        ,
                        className: "p-2 hover:bg-accent rounded-full transition-colors",
                        children: u.jsx(Ad, {
                            className: "w-5 h-5"
                        })
                    })]
                }), u.jsxs("div", {
                    className: "space-y-6",
                    children: [u.jsx("p", {
                        className: "text-muted-foreground text-lg leading-relaxed",
                        children: f.description || "No description available."
                    }), f.achievements && f.achievements.length > 0 && u.jsxs("div", {
                        className: "space-y-3",
                        children: [u.jsx("h4", {
                            className: "font-semibold text-lg",
                            children: "Key Achievements:"
                        }), u.jsx("ul", {
                            className: "space-y-2",
                            children: f.achievements.map( (S, w) => u.jsxs("li", {
                                className: "text-muted-foreground flex items-start",
                                children: [u.jsx(Kp, {
                                    className: "w-4 h-4 text-primary mt-0.5 mr-3 flex-shrink-0"
                                }), S]
                            }, w))
                        })]
                    }), f.technologies && f.technologies.length > 0 && u.jsxs("div", {
                        className: "space-y-3",
                        children: [u.jsx("h4", {
                            className: "font-semibold text-lg",
                            children: "Technologies Used:"
                        }), u.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: f.technologies.map( (S, w) => u.jsx("span", {
                                className: "px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20",
                                children: S
                            }, w))
                        })]
                    }), (f.github_url || f.app_store_url) && u.jsxs("div", {
                        className: "flex flex-wrap gap-4 pt-4",
                        children: [f.github_url && u.jsxs("a", {
                            href: f.github_url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: r,
                            className: "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300",
                            children: [u.jsx(Bi, {
                                className: "w-4 h-4"
                            }), "View Code"]
                        }), f.app_store_url && u.jsxs("a", {
                            href: f.app_store_url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: r,
                            className: "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
                            children: [u.jsx(os, {
                                className: "w-4 h-4"
                            }), "View on App Store"]
                        })]
                    })]
                })]
            })
        })
    })
}
  , xg = ({skills: f}) => {
    const b = us.useRef(null)
      , T = () => {
        b.current && b.current.scrollBy({
            left: -200,
            behavior: "smooth"
        })
    }
      , r = () => {
        b.current && b.current.scrollBy({
            left: 200,
            behavior: "smooth"
        })
    }
    ;
    return u.jsx("div", {
        className: "relative",
        children: u.jsxs("div", {
            className: "flex items-center gap-2",
            children: [u.jsx("button", {
                onClick: T,
                className: "flex-shrink-0 p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors",
                children: u.jsx(Sd, {
                    className: "w-4 h-4"
                })
            }), u.jsx("div", {
                ref: b,
                className: "flex gap-2 overflow-x-auto scrollbar-hide flex-1",
                style: {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                children: f.map( (S, w) => u.jsx("span", {
                    className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 whitespace-nowrap flex-shrink-0",
                    children: S
                }, w))
            }), u.jsx("button", {
                onClick: r,
                className: "flex-shrink-0 p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors",
                children: u.jsx(Nd, {
                    className: "w-4 h-4"
                })
            })]
        })
    })
}
  , bg = ({project: f, onClick: b}) => {
    const {addClickEffect: T} = Ye()
      , r = Ne.projects.find(S => f.includes(S.name));
    return r ? u.jsxs("button", {
        onClick: S => {
            T(S),
            b(r)
        }
        ,
        className: "flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors text-left w-full",
        children: [u.jsx("div", {
            className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0",
            children: u.jsx("span", {
                className: "text-sm",
                children: r.icon
            })
        }), u.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [u.jsx("h4", {
                className: "font-medium text-foreground truncate",
                children: r.name
            }), u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Click to view details"
            })]
        }), u.jsx(os, {
            className: "w-4 h-4 text-muted-foreground flex-shrink-0"
        })]
    }) : u.jsxs("div", {
        className: "flex items-center gap-3 p-3 bg-white/50 rounded-lg text-left w-full",
        children: [u.jsx("div", {
            className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0",
            children: u.jsx(ss, {
                className: "w-4 h-4 text-primary"
            })
        }), u.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [u.jsx("h4", {
                className: "font-medium text-foreground truncate",
                children: f
            }), u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Details not available"
            })]
        })]
    })
}
  , Sg = ({position: f, onProjectClick: b}) => {
    const {addClickEffect: T} = Ye()
      , r = f.description ? f.description.split(`
`).filter(S => S.trim().startsWith("-")).map(S => S.trim().substring(1).trim()) : [];
    return u.jsx("div", {
        className: "relative",
        children: u.jsx("div", {
            className: "ml-12 mb-6",
            children: u.jsx("div", {
                onClick: T,
                className: "card-borderless p-6 hover-lift cursor-pointer",
                style: {
                    borderRadius: "10px"
                },
                children: u.jsxs("div", {
                    className: "space-y-4",
                    children: [u.jsx("div", {
                        className: "flex items-start justify-between",
                        children: u.jsxs("div", {
                            className: "flex-1",
                            children: [u.jsx("h3", {
                                className: "text-xl font-bold text-foreground mb-1",
                                children: f.title
                            }), u.jsxs("div", {
                                className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-2",
                                children: [u.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [u.jsx(bd, {
                                        className: "w-4 h-4"
                                    }), f.start_date, " - ", f.end_date]
                                }), f.duration && u.jsx("div", {
                                    className: "badge-duration",
                                    children: f.duration
                                })]
                            })]
                        })
                    }), r.length > 0 && u.jsxs("div", {
                        className: "space-y-2",
                        children: [u.jsx("h4", {
                            className: "text-sm font-semibold text-foreground",
                            children: "Key Activities:"
                        }), u.jsx("div", {
                            className: "space-y-1",
                            children: r.map( (S, w) => u.jsxs("p", {
                                className: "text-sm text-muted-foreground pl-4 relative",
                                children: [u.jsx("span", {
                                    className: "absolute left-0 top-2 w-1.5 h-1.5 bg-primary rounded-full"
                                }), S]
                            }, w))
                        })]
                    }), f.skills && f.skills.length > 0 && u.jsxs("div", {
                        className: "space-y-2",
                        children: [u.jsx("h4", {
                            className: "text-sm font-semibold text-foreground",
                            children: "Technologies & Skills:"
                        }), u.jsx(xg, {
                            skills: f.skills
                        })]
                    }), f.projects && f.projects.length > 0 && u.jsxs("div", {
                        className: "space-y-2",
                        children: [u.jsx("h4", {
                            className: "text-sm font-semibold text-foreground",
                            children: "Projects:"
                        }), u.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: f.projects.map( (S, w) => u.jsx(bg, {
                                project: S,
                                onClick: b
                            }, w))
                        })]
                    })]
                })
            })
        })
    })
}
  , Ng = ({company: f, index: b, onProjectClick: T}) => u.jsxs("div", {
    className: "relative mb-12",
    children: [b < Ne.experience.length - 1 && u.jsx("div", {
        className: "absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20"
    }), u.jsx("div", {
        className: "absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"
    }), u.jsx("div", {
        className: "ml-12 mb-6",
        children: u.jsxs("div", {
            className: "flex items-center gap-4",
            children: [u.jsx("div", {
                className: "w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow",
                children: u.jsx(ss, {
                    className: "w-6 h-6 text-primary"
                })
            }), u.jsxs("div", {
                className: "flex-1",
                children: [u.jsx("h3", {
                    className: "text-2xl font-bold text-foreground",
                    children: f.company
                }), u.jsxs("div", {
                    className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground",
                    children: [u.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [u.jsx(tg, {
                            className: "w-4 h-4"
                        }), "Full-time"]
                    }), u.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [u.jsx(bd, {
                            className: "w-4 h-4"
                        }), f.company_duration]
                    }), f.location && u.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [u.jsx(_d, {
                            className: "w-4 h-4"
                        }), f.location]
                    })]
                })]
            })]
        })
    }), u.jsx("div", {
        className: "space-y-0",
        children: f.positions.map( (r, S) => u.jsx(Sg, {
            position: r,
            onProjectClick: T
        }, S))
    })]
})
  , jg = () => {
    const [f,b] = he.useState(null)
      , [T,r] = he.useState(!1)
      , [S,w] = he.useState(!1)
      , H = D => {
        b(D),
        r(!0)
    }
      , q = () => {
        r(!1),
        b(null)
    }
      , M = () => {
        w(!S)
    }
      , x = S ? Ne.experience : Ne.experience.slice(0, 2);
    return u.jsxs(u.Fragment, {
        children: [u.jsx("section", {
            id: "experience",
            className: "spacing-normal bg-secondary/30",
            children: u.jsxs("div", {
                className: "container mx-auto px-6 lg:px-8",
                children: [u.jsxs("div", {
                    className: "text-center mb-12",
                    children: [u.jsxs("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4",
                        children: [u.jsx(ss, {
                            className: "w-5 h-5"
                        }), u.jsx("span", {
                            className: "font-medium",
                            children: "Professional Experience"
                        })]
                    }), u.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-foreground mb-4",
                        children: "Building Innovative Mobile Solutions"
                    }), u.jsx("p", {
                        className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                        children: "A journey of technical excellence and leadership across diverse industries"
                    })]
                }), u.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [u.jsx("div", {
                        className: "relative",
                        children: x.map( (D, W) => u.jsx(Ng, {
                            company: D,
                            index: W,
                            onProjectClick: H
                        }, W))
                    }), Ne.experience.length > 2 && u.jsx("div", {
                        className: "flex justify-center mt-8",
                        children: u.jsx("button", {
                            onClick: M,
                            className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium",
                            children: S ? "Show My Recent Journey" : "Explore My Full Journey"
                        })
                    })]
                })]
            })
        }), u.jsx(Td, {
            project: f,
            isOpen: T,
            onClose: q
        })]
    })
}
  , _g = () => {
    const {addClickEffect: f} = Ye()
      , {training: b} = Ne
      , [T,r] = he.useState(!1)
      , S = he.useMemo( () => {
        const M = b.filter(B => B.primary_courses === !0).sort( (B, fe) => parseInt(fe.year) - parseInt(B.year))
          , x = b.filter(B => B.primary_courses !== !0).sort( (B, fe) => parseInt(fe.year) - parseInt(B.year));
        let D = [...M];
        if (D.length < 5) {
            const B = 5 - D.length;
            D = [...D, ...x.slice(0, B)]
        } else
            D = D.slice(0, 5);
        D.sort( (B, fe) => parseInt(fe.year) - parseInt(B.year));
        const W = [...M, ...x];
        return {
            initial: D,
            all: W
        }
    }
    , [b])
      , w = T ? S.all : S.initial
      , H = () => {
        r(!T)
    }
      , q = M => {
        const x = M.certificate_url || M.url;
        x && window.open(x, "_blank", "noopener,noreferrer")
    }
    ;
    return u.jsx("section", {
        id: "training",
        className: "py-8 md:py-12 bg-secondary/30",
        children: u.jsxs("div", {
            className: "container mx-auto px-4 md:px-6 lg:px-8",
            children: [u.jsxs("div", {
                className: "text-center mb-8 md:mb-12",
                children: [u.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-2 rounded-full bg-primary/10 text-primary mb-3 md:mb-4",
                    children: [u.jsx(yd, {
                        className: "w-4 h-4 md:w-5 md:h-5"
                    }), u.jsx("span", {
                        className: "text-xs md:text-sm font-medium",
                        children: "Courses Journey"
                    })]
                }), u.jsx("h2", {
                    className: "text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4",
                    children: "Longlife Learner"
                }), u.jsx("p", {
                    className: "text-sm md:text-xl text-muted-foreground max-w-xl md:max-w-3xl mx-auto",
                    children: "Staying ahead of the curve through continuous education and skill development"
                })]
            }), u.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [u.jsxs("div", {
                    className: "mb-6 md:mb-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
                    children: [u.jsxs("div", {
                        className: "card-borderless text-center p-3 md:p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-xl md:text-2xl font-bold text-primary",
                            children: b.length
                        }), u.jsx("div", {
                            className: "text-xs md:text-sm text-muted-foreground",
                            children: "Courses Completed"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-3 md:p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-xl md:text-2xl font-bold text-primary",
                            children: b.filter(M => M.certificate_url).length
                        }), u.jsx("div", {
                            className: "text-xs md:text-sm text-muted-foreground",
                            children: "Certifications"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-3 md:p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-xl md:text-2xl font-bold text-primary",
                            children: new Set(b.map(M => M.provider)).size
                        }), u.jsx("div", {
                            className: "text-xs md:text-sm text-muted-foreground",
                            children: "Platforms"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-3 md:p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-xl md:text-2xl font-bold text-primary",
                            children: "2021-2025"
                        }), u.jsx("div", {
                            className: "text-xs md:text-sm text-muted-foreground",
                            children: "Years Active"
                        })]
                    })]
                }), u.jsx("div", {
                    className: "space-y-3 md:space-y-4",
                    children: w.map( (M, x) => u.jsx("div", {
                        className: `card-borderless p-3 md:p-4 ${M.url || M.certificate_url ? "cursor-pointer hover-lift" : ""} rounded-xl shadow-apple transition-all duration-300 ${M.primary_courses ? "ring-1 ring-primary/20" : ""}`,
                        onClick: D => {
                            (M.url || M.certificate_url) && (f(D),
                            q(M))
                        }
                        ,
                        children: u.jsxs("div", {
                            className: "flex flex-col sm:flex-row items-start gap-3 md:gap-4",
                            children: [u.jsx("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: u.jsx("div", {
                                    className: "p-2 md:p-3 bg-primary/10 rounded-lg",
                                    children: M.type === "certification" ? u.jsx(yp, {
                                        className: "w-4 h-4 md:w-5 md:h-5 text-primary"
                                    }) : u.jsx(yd, {
                                        className: "w-4 h-4 md:w-5 md:h-5 text-primary"
                                    })
                                })
                            }), u.jsxs("div", {
                                className: "flex-1 space-y-2 md:space-y-3",
                                children: [u.jsxs("div", {
                                    className: "flex flex-col sm:flex-row justify-between items-start",
                                    children: [u.jsxs("div", {
                                        className: "flex-1 mb-2 sm:mb-0",
                                        children: [u.jsxs("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [u.jsx("h3", {
                                                className: "text-sm md:text-lg font-bold",
                                                children: M.name
                                            }), (M.url || M.certificate_url) && u.jsx(os, {
                                                className: "w-3 h-3 md:w-4 md:h-4 text-muted-foreground hidden md:block"
                                            }), M.primary_courses && u.jsx("span", {
                                                className: "badge-colored text-xs px-1 md:px-2 py-0.5 md:py-1 rounded-full hidden md:block",
                                                children: "⭐️⭐️⭐️"
                                            })]
                                        }), u.jsx("p", {
                                            className: "text-primary text-xs md:text-sm font-medium",
                                            children: M.provider
                                        })]
                                    }), u.jsxs("div", {
                                        className: "text-left sm:text-right space-y-1 flex-shrink-0",
                                        children: [u.jsx("div", {
                                            className: "text-xs md:text-sm text-muted-foreground",
                                            children: M.year
                                        }), M.status && u.jsx("div", {
                                            className: `badge px-2 py-1 rounded-full text-xs md:text-sm font-medium ${M.status === "completed" ? "badge-colored" : "badge"}`,
                                            children: M.status
                                        })]
                                    })]
                                }), M.description && u.jsx("p", {
                                    className: "text-muted-foreground text-xs md:text-sm",
                                    children: M.description
                                }), M.skills && M.skills.length > 0 && u.jsx("div", {
                                    className: "flex flex-wrap gap-1 md:gap-2",
                                    children: M.skills.map( (D, W) => u.jsx("span", {
                                        className: "badge text-xs",
                                        children: D
                                    }, W))
                                })]
                            })]
                        })
                    }, x))
                }), b.length > 5 && u.jsx("div", {
                    className: "flex justify-center mt-6 md:mt-8",
                    children: u.jsx("button", {
                        onClick: H,
                        className: "inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium text-xs md:text-sm",
                        children: T ? "Show Featured Courses" : "Explore All Training"
                    })
                }), u.jsx("div", {
                    className: "mt-6 md:mt-12",
                    children: u.jsx("div", {
                        className: "card-borderless p-4 md:p-6 text-center rounded-xl shadow-apple",
                        children: u.jsxs("div", {
                            className: "max-w-xl md:max-w-2xl mx-auto space-y-3 md:space-y-4",
                            children: [u.jsx("div", {
                                className: "w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow to-orange-500 rounded-full flex items-center justify-center mx-auto",
                                children: u.jsx("span", {
                                    className: "text-lg md:text-2xl",
                                    children: "🔥"
                                })
                            }), u.jsx("h3", {
                                className: "text-lg md:text-xl font-bold",
                                children: "Stay Hungry, Stay Foolish - Steve Jobs"
                            }), u.jsx("p", {
                                className: "text-muted-foreground text-sm md:text-base leading-relaxed",
                                children: "Inspires relentless curiosity and fearless ambition. Embrace a hunger for growth, seek challenges, and dare to dream big, unafraid of risks or seeming foolish in pursuit of your passions."
                            })]
                        })
                    })
                })]
            })]
        })
    })
}
  , Ag = {
    "Portal Sekolah Orang Tua": "Visi Prima Nusantara",
    "Portal Kerja": "Visi Prima Nusantara",
    "Portal Sekolah": "Visi Prima Nusantara",
    "KlikDokter: Jaga Sehatmu": "KlikDokter",
    "Livin' by Mandiri": "PT Bank Mandiri (Persero) Tbk.",
    "Saham Daily": "Namatech",
    "Kkuljaem Korean": "Namatech",
    myIndiHome: "PCCW Solutions Limited",
    "Philips lighting e-shop ID": "Algostudio",
    "PCC - Authorized Store": "Algostudio",
    "Philips Lighting e-store": "Algostudio",
    Doolan: "Apple Developer Academy | Indonesia",
    "Little Happy": "Apple Developer Academy | Indonesia",
    Mazic: "Apple Developer Academy | Indonesia",
    Calemo: "Apple Developer Academy | Indonesia",
    Treshno: "Apple Developer Academy | Indonesia",
    Locquee: "Apple Developer Academy | Indonesia",
    PergiKuliner: "PergiKuliner.com"
}
  , Mg = f => {
    const b = Ag[f] || "N/A"
      , T = Ne.experience.find(r => r.company === b);
    return {
        duration: T && T.company_duration || "N/A",
        location: T && T.location || "N/A"
    }
}
  , Tg = ({project: f, onClick: b}) => {
    const {addClickEffect: T} = Ye();
    return Mg(f.name),
    u.jsx("div", {
        className: "card-borderless p-4 cursor-pointer hover-lift rounded-xl shadow-apple transition-all duration-300",
        onClick: r => {
            T(r),
            b(f)
        }
        ,
        children: u.jsxs("div", {
            className: "flex space-x-4",
            children: [u.jsx("div", {
                className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0",
                children: u.jsx("span", {
                    className: "text-xl",
                    children: f.icon
                })
            }), u.jsxs("div", {
                className: "flex-1 space-y-2",
                children: [u.jsxs("div", {
                    children: [u.jsx("h3", {
                        className: "font-semibold text-lg line-clamp-1",
                        children: f.name
                    }), u.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: f.collaboration || "N/A"
                    })]
                }), u.jsx("p", {
                    className: "text-sm text-muted-foreground line-clamp-2",
                    children: f.description || "No description available."
                }), f.technologies && u.jsx("div", {
                    className: "flex flex-wrap gap-1",
                    children: f.technologies.slice(0, 3).map( (r, S) => u.jsx("span", {
                        className: "badge px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20",
                        children: r
                    }, S))
                })]
            })]
        })
    })
}
  , Eg = () => {
    const {projects: f} = Ne
      , b = f.filter(B => B.showcase === !0)
      , [T,r] = he.useState(null)
      , [S,w] = he.useState(!1)
      , [H,q] = he.useState(!1)
      , M = H ? b : b.slice(0, 6)
      , x = B => {
        r(B),
        w(!0)
    }
      , D = () => {
        w(!1),
        r(null)
    }
      , W = () => {
        q(!H)
    }
    ;
    return u.jsxs("section", {
        id: "projects",
        className: "spacing-normal bg-background",
        children: [u.jsxs("div", {
            className: "container mx-auto px-6 lg:px-8",
            children: [u.jsxs("div", {
                className: "text-center mb-12",
                children: [u.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4",
                    children: [u.jsx(wp, {
                        className: "w-5 h-5"
                    }), u.jsx("span", {
                        className: "font-medium",
                        children: "Practical Journey"
                    })]
                }), u.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-foreground mb-4",
                    children: "Featured Projects"
                }), u.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                    children: "A showcase of innovative solutions and technical excellence"
                })]
            }), u.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [u.jsxs("div", {
                    className: "mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                    children: [u.jsxs("div", {
                        className: "card-borderless text-center p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: b.length
                        }), u.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Total Projects"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: new Set(b.flatMap(B => B.technologies || [])).size
                        }), u.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Technologies"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: "7+"
                        }), u.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Years Experience"
                        })]
                    })]
                }), u.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: M.map( (B, fe) => u.jsx(Tg, {
                        project: B,
                        onClick: x
                    }, fe))
                }), f.length > 6 && u.jsx("div", {
                    className: "flex justify-center mt-8",
                    children: u.jsx("button", {
                        onClick: W,
                        className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium",
                        children: H ? "Show Recent Projects" : "Explore All Projects"
                    })
                })]
            })]
        }), u.jsx(Td, {
            project: T,
            isOpen: S,
            onClose: D
        })]
    })
}
  , wg = ({skill: f, category: b}) => {
    const {addClickEffect: T} = Ye()
      , r = S => {
        switch (S) {
        case "technical":
            return "bg-blue-50 border-blue-200 text-blue-700";
        case "soft_skills":
            return "bg-green-50 border-green-200 text-green-700";
        case "tools":
            return "bg-purple-50 border-purple-200 text-purple-700";
        default:
            return "bg-gray-50 border-gray-200 text-gray-700"
        }
    }
    ;
    return u.jsx("div", {
        className: `card-borderless p-4 hover-lift cursor-pointer transition-all duration-300 border ${r(b)} rounded-xl shadow-apple`,
        onClick: T,
        children: u.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [u.jsxs("div", {
                className: "w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm",
                children: [f.icon ? u.jsx("img", {
                    src: f.icon,
                    alt: f.name,
                    className: "w-6 h-6",
                    onError: S => {
                        S.target.style.display = "none",
                        S.target.nextSibling.style.display = "block"
                    }
                }) : null, u.jsx("span", {
                    className: "text-lg",
                    style: {
                        display: f.icon ? "none" : "block"
                    },
                    children: b === "technical" ? "⚡" : b === "soft_skills" ? "🎯" : "🛠️"
                })]
            }), u.jsx("h4", {
                className: "font-semibold text-sm",
                children: f.name
            })]
        })
    })
}
  , Dg = ({title: f, skills: b, icon: T, isExpanded: r, onToggle: S, category: w}) => {
    const {addClickEffect: H} = Ye()
      , q = () => typeof window < "u" && window.innerWidth < 768 ? 3 : 6
      , [M,x] = us.useState(q);
    us.useEffect( () => {
        const B = () => {
            x(q())
        }
        ;
        if (typeof window < "u")
            return window.addEventListener("resize", B),
            () => window.removeEventListener("resize", B)
    }
    , []);
    const D = r ? b : b.slice(0, M)
      , W = b.length > M;
    return u.jsxs("div", {
        className: "space-y-4",
        children: [u.jsxs("div", {
            className: "flex items-center justify-between",
            children: [u.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [u.jsx("div", {
                    className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",
                    children: T
                }), u.jsxs("div", {
                    children: [u.jsx("h3", {
                        className: "text-xl font-bold",
                        children: f
                    }), u.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: [b.length, " skills"]
                    })]
                })]
            }), W && u.jsxs("button", {
                onClick: B => {
                    H(B),
                    S()
                }
                ,
                className: "flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors",
                children: [u.jsx("span", {
                    className: "text-sm font-medium",
                    children: r ? "Show Less" : `Show All (${b.length})`
                }), r ? u.jsx(Mp, {
                    className: "w-4 h-4"
                }) : u.jsx(Np, {
                    className: "w-4 h-4"
                })]
            })]
        }), u.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
            children: D.map( (B, fe) => u.jsx(wg, {
                skill: B,
                category: w
            }, fe))
        })]
    })
}
  , Og = () => {
    var H, q, M;
    const {skills: f} = Ne
      , [b,T] = he.useState({
        technical: !1,
        soft_skills: !1,
        tools: !1
    })
      , r = x => {
        T(D => ({
            ...D,
            [x]: !D[x]
        }))
    }
      , S = [{
        key: "technical",
        title: "Technical Skills",
        icon: u.jsx(vd, {
            className: "w-4 h-4 text-primary"
        }),
        skills: f.technical || []
    }, {
        key: "soft_skills",
        title: "Soft Skills",
        icon: u.jsx(jd, {
            className: "w-4 h-4 text-primary"
        }),
        skills: f.soft_skills || []
    }, {
        key: "tools",
        title: "Tools & Platforms",
        icon: u.jsx(ag, {
            className: "w-4 h-4 text-primary"
        }),
        skills: f.tools || []
    }]
      , w = S.reduce( (x, D) => x + D.skills.length, 0);
    return u.jsx("section", {
        id: "skills",
        className: "spacing-normal bg-secondary/30",
        children: u.jsxs("div", {
            className: "container mx-auto px-6 lg:px-8",
            children: [u.jsxs("div", {
                className: "text-center mb-12",
                children: [u.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4",
                    children: [u.jsx(vd, {
                        className: "w-5 h-5"
                    }), u.jsx("span", {
                        className: "font-medium",
                        children: "Improvement Journey"
                    })]
                }), u.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-foreground mb-4",
                    children: "Skills & Expertise"
                }), u.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                    children: "A comprehensive toolkit built through years of hands-on experience and continuous learning"
                })]
            }), u.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [u.jsxs("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8",
                    children: [u.jsxs("div", {
                        className: "card-borderless text-center p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: w
                        }), u.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Total Skills"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: ((H = f.technical) == null ? void 0 : H.length) || 0
                        }), u.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Technical"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: ((q = f.soft_skills) == null ? void 0 : q.length) || 0
                        }), u.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Soft Skills"
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless text-center p-4 rounded-xl shadow-apple",
                        children: [u.jsx("div", {
                            className: "text-2xl font-bold text-primary",
                            children: ((M = f.tools) == null ? void 0 : M.length) || 0
                        }), u.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: "Tools"
                        })]
                    })]
                }), u.jsx("div", {
                    className: "space-y-8",
                    children: S.map(x => u.jsx(Dg, {
                        title: x.title,
                        skills: x.skills,
                        icon: x.icon,
                        isExpanded: b[x.key],
                        onToggle: () => r(x.key),
                        category: x.key
                    }, x.key))
                }), u.jsx("div", {
                    className: "mt-12",
                    children: u.jsx("div", {
                        className: "card-borderless p-6 text-center rounded-xl shadow-apple",
                        children: u.jsxs("div", {
                            className: "max-w-2xl mx-auto space-y-4",
                            children: [u.jsx("div", {
                                className: "w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto",
                                children: u.jsx("span", {
                                    className: "text-2xl",
                                    children: "🚀"
                                })
                            }), u.jsx("h3", {
                                className: "text-xl font-bold",
                                children: "Continuous Growth Mindset"
                            }), u.jsx("p", {
                                className: "text-muted-foreground leading-relaxed",
                                children: "Technology evolves rapidly, and so do I. Each skill represents not just knowledge gained, but a commitment to excellence and a passion for solving complex problems through innovative solutions."
                            })]
                        })
                    })
                })]
            })]
        })
    })
}
  , zg = () => {
    const {addClickEffect: f} = Ye()
      , {social_links: b} = Ne
      , [T,r] = he.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
      , S = H => {
        const {name: q, value: M} = H.target;
        r(x => ({
            ...x,
            [q]: M
        }))
    }
      , w = async H => {
        H.preventDefault(),
        f(H);
        try {
            (await fetch("http://localhost:3001/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(T)
            })).ok ? (alert("Message sent successfully!"),
            r({
                name: "",
                email: "",
                subject: "",
                message: ""
            })) : alert("Failed to send message.")
        } catch (x) {
            console.error(x),
            alert("An error occurred.")
        }
        const q = `Hi Nanda! 

Name: ${T.name}
Email: ${T.email}
Subject: ${T.subject}

Message:
${T.message}`
          , M = `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(q)}`;
        window.open(M, "_blank")
    }
    ;
    return u.jsx("section", {
        id: "contact",
        className: "spacing-normal bg-background w-full",
        children: u.jsxs("div", {
            className: "container-custom w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [u.jsxs("div", {
                className: "text-center mb-8",
                children: [u.jsx("h2", {
                    className: "text-4xl font-bold mb-4",
                    children: "Get In Touch"
                }), u.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                    children: "Ready to collaborate on your next project? Let's discuss how we can work together"
                })]
            }), u.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [u.jsxs("div", {
                    className: "space-y-6",
                    children: [u.jsxs("div", {
                        className: "card-borderless p-6 rounded-xl shadow-apple",
                        children: [u.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Send a Message"
                        }), u.jsxs("form", {
                            onSubmit: w,
                            className: "space-y-4",
                            children: [u.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [u.jsxs("div", {
                                    children: [u.jsx("label", {
                                        htmlFor: "name",
                                        className: "block text-sm font-medium mb-2",
                                        children: "Name *"
                                    }), u.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        value: T.name,
                                        onChange: S,
                                        required: !0,
                                        className: "w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
                                        placeholder: "Your name"
                                    })]
                                }), u.jsxs("div", {
                                    children: [u.jsx("label", {
                                        htmlFor: "email",
                                        className: "block text-sm font-medium mb-2",
                                        children: "Email *"
                                    }), u.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        value: T.email,
                                        onChange: S,
                                        required: !0,
                                        className: "w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
                                        placeholder: "your.email@example.com"
                                    })]
                                })]
                            }), u.jsxs("div", {
                                children: [u.jsx("label", {
                                    htmlFor: "subject",
                                    className: "block text-sm font-medium mb-2",
                                    children: "Subject *"
                                }), u.jsx("input", {
                                    type: "text",
                                    id: "subject",
                                    name: "subject",
                                    value: T.subject,
                                    onChange: S,
                                    required: !0,
                                    className: "w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
                                    placeholder: "What's this about?"
                                })]
                            }), u.jsxs("div", {
                                children: [u.jsx("label", {
                                    htmlFor: "message",
                                    className: "block text-sm font-medium mb-2",
                                    children: "Message *"
                                }), u.jsx("textarea", {
                                    id: "message",
                                    name: "message",
                                    value: T.message,
                                    onChange: S,
                                    required: !0,
                                    rows: 5,
                                    className: "w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none",
                                    placeholder: "Tell me about your project or idea..."
                                })]
                            }), u.jsxs("button", {
                                type: "submit",
                                className: "w-full btn-large bg-primary text-primary-foreground hover:bg-primary/90 shadow-apple-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300",
                                children: [u.jsx(Qp, {
                                    className: "w-5 h-5"
                                }), "Send"]
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                        children: [u.jsxs("div", {
                            className: "card-borderless p-4 text-center rounded-xl shadow-apple",
                            children: [u.jsx("div", {
                                className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3",
                                children: u.jsx(fs, {
                                    className: "w-6 h-6 text-primary"
                                })
                            }), u.jsx("h4", {
                                className: "font-semibold mb-1",
                                children: "Email"
                            }), u.jsx("p", {
                                className: "text-xs text-muted-foreground break-all",
                                children: b.email
                            })]
                        }), u.jsxs("div", {
                            className: "card-borderless p-4 text-center rounded-xl shadow-apple",
                            children: [u.jsx("div", {
                                className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3",
                                children: u.jsx(Xp, {
                                    className: "w-6 h-6 text-primary"
                                })
                            }), u.jsx("h4", {
                                className: "font-semibold mb-1",
                                children: "WhatsApp"
                            }), u.jsxs("p", {
                                className: "text-sm text-muted-foreground",
                                children: ["+", b.whatsapp]
                            })]
                        }), u.jsxs("div", {
                            className: "card-borderless p-4 text-center rounded-xl shadow-apple",
                            children: [u.jsx("div", {
                                className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3",
                                children: u.jsx(_d, {
                                    className: "w-6 h-6 text-primary"
                                })
                            }), u.jsx("h4", {
                                className: "font-semibold mb-1",
                                children: "Location"
                            }), u.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Indonesia"
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless p-6 rounded-xl shadow-apple",
                        children: [u.jsx("h3", {
                            className: "text-lg font-bold mb-4",
                            children: "Connect With Me"
                        }), u.jsxs("div", {
                            className: "flex space-x-4",
                            children: [u.jsx("a", {
                                href: b.linkedin,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: f,
                                className: "w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary transition-all duration-300 hover-lift",
                                children: u.jsx(rs, {
                                    className: "w-6 h-6"
                                })
                            }), u.jsx("a", {
                                href: b.github,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: f,
                                className: "w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary transition-all duration-300 hover-lift",
                                children: u.jsx(Bi, {
                                    className: "w-6 h-6"
                                })
                            }), u.jsx("a", {
                                href: b.twitter,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: f,
                                className: "w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-primary transition-all duration-300 hover-lift",
                                children: u.jsx(Fp, {
                                    className: "w-6 h-6"
                                })
                            })]
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "space-y-6",
                    children: [u.jsxs("div", {
                        className: "card-borderless p-6 rounded-xl shadow-apple",
                        children: [u.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Meet Me Here"
                        }), u.jsx("div", {
                            className: "w-full h-96 bg-secondary/30 rounded-lg overflow-hidden",
                            children: u.jsx("iframe", {
                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126217.24696225266!2d112.6540724!3d-7.296163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus",
                                width: "100%",
                                height: "100%",
                                style: {
                                    border: 0
                                },
                                allowFullScreen: "",
                                loading: "lazy",
                                referrerPolicy: "no-referrer-when-downgrade",
                                title: "Surabaya Location"
                            })
                        })]
                    }), u.jsxs("div", {
                        className: "card-borderless p-6 rounded-xl shadow-apple",
                        children: [u.jsx("h3", {
                            className: "text-lg font-bold mb-4",
                            children: "Availability"
                        }), u.jsxs("div", {
                            className: "space-y-3",
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [u.jsx("span", {
                                    className: "text-sm",
                                    children: "Project Consultation"
                                }), u.jsx("span", {
                                    className: "badge px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20",
                                    children: "Available"
                                })]
                            }), u.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [u.jsx("span", {
                                    className: "text-sm",
                                    children: "Full-time Opportunities"
                                }), u.jsx("span", {
                                    className: "badge px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20",
                                    children: "Open to Discuss"
                                })]
                            }), u.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [u.jsx("span", {
                                    className: "text-sm",
                                    children: "Response Time"
                                }), u.jsx("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Within 24 hours"
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
}
  , Cg = () => {
    const {addClickEffect: f} = Ye()
      , {social_links: b} = Ne
      , T = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
      , r = w => {
        const H = document.querySelector(w);
        H && H.scrollIntoView({
            behavior: "smooth"
        })
    }
      , S = [{
        name: "About",
        href: "#about"
    }, {
        name: "Experience",
        href: "#experience"
    }, {
        name: "Learning",
        href: "#training"
    }, {
        name: "Projects",
        href: "#projects"
    }, {
        name: "Skills",
        href: "#skills"
    }, {
        name: "Contact",
        href: "#contact"
    }];
    return u.jsx("footer", {
        className: "bg-secondary/50 border-t border-border",
        children: u.jsxs("div", {
            className: "container-custom px-6 sm:px-8 lg:px-12",
            children: [u.jsx("div", {
                className: "py-12",
                children: u.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-8 items-center",
                    children: [u.jsxs("div", {
                        className: "space-y-6",
                        children: [u.jsxs("div", {
                            className: "space-y-4",
                            children: [u.jsx("blockquote", {
                                className: "text-2xl lg:text-3xl font-medium text-foreground leading-relaxed",
                                children: '"The only way to do great work is to love what you do."'
                            }), u.jsx("p", {
                                className: "text-muted-foreground",
                                children: "— Steve Jobs"
                            })]
                        }), u.jsxs("div", {
                            className: "space-y-4",
                            children: [u.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Ready to bring your ideas to life? Let's create something extraordinary together."
                            }), u.jsxs("div", {
                                className: "flex space-x-3",
                                children: [u.jsx("a", {
                                    href: b.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: f,
                                    className: "w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-apple hover:shadow-apple-lg text-muted-foreground hover:text-primary transition-all hover-lift",
                                    children: u.jsx(rs, {
                                        size: 20
                                    })
                                }), u.jsx("a", {
                                    href: b.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: f,
                                    className: "w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-apple hover:shadow-apple-lg text-muted-foreground hover:text-primary transition-all hover-lift",
                                    children: u.jsx(Bi, {
                                        size: 20
                                    })
                                }), u.jsx("a", {
                                    href: `mailto:${b.email}`,
                                    onClick: f,
                                    className: "w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-apple hover:shadow-apple-lg text-muted-foreground hover:text-primary transition-all hover-lift",
                                    children: u.jsx(fs, {
                                        size: 20
                                    })
                                })]
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "space-y-8",
                        children: [u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "font-semibold text-xl text-foreground mb-6",
                                children: "Quick Navigation"
                            }), u.jsx("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: S.map(w => u.jsx("button", {
                                    onClick: H => {
                                        f(H),
                                        r(w.href)
                                    }
                                    ,
                                    className: "text-left text-muted-foreground hover:text-primary font-medium transition-colors py-2 hover:translate-x-1 transition-transform",
                                    children: w.name
                                }, w.name))
                            })]
                        }), u.jsx("div", {
                            className: "flex justify-end",
                            children: u.jsx("button", {
                                onClick: w => {
                                    f(w),
                                    T()
                                }
                                ,
                                className: "w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-apple hover:shadow-apple-lg transition-all hover-lift",
                                children: u.jsx(pp, {
                                    size: 20
                                })
                            })
                        })]
                    })]
                })
            }), u.jsx("div", {
                className: "border-t border-border py-6",
                children: u.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [u.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4",
                        children: [u.jsxs("div", {
                            className: "font-bold text-xl",
                            children: [u.jsx("span", {
                                className: "text-foreground",
                                children: "Nanda"
                            }), u.jsx("span", {
                                className: "text-primary",
                                children: "Mochammad"
                            })]
                        }), u.jsx("div", {
                            className: "text-muted-foreground text-sm text-center",
                            children: "© 2025 Nanda Mochammad. All rights reserved."
                        })]
                    }), u.jsx("div", {
                        className: "text-muted-foreground text-sm text-center",
                        children: "Built with 🔥 using React & Tailwind CSS"
                    })]
                })
            })]
        })
    })
}
  , Rg = () => {
    const [f,b] = he.useState([]);
    he.useEffect( () => {
        ( () => {
            const S = []
              , w = ["circle", "square", "triangle"];
            for (let H = 0; H < 15; H++) {
                const q = {
                    id: H,
                    type: w[Math.floor(Math.random() * w.length)],
                    size: Math.random() * 100 + 50,
                    left: Math.random() * 100,
                    animationDelay: Math.random() * 20,
                    animationDuration: Math.random() * 10 + 15
                };
                S.push(q)
            }
            b(S)
        }
        )()
    }
    , []);
    const T = r => {
        const S = {
            position: "absolute",
            left: `${r.left}%`,
            width: `${r.size}px`,
            height: `${r.size}px`,
            opacity: .03,
            animationDelay: `${r.animationDelay}s`,
            animationDuration: `${r.animationDuration}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            animationName: "float-geometric"
        };
        switch (r.type) {
        case "circle":
            return {
                ...S,
                borderRadius: "50%",
                background: "linear-gradient(45deg, #007AFF, #34C759)"
            };
        case "square":
            return {
                ...S,
                background: "linear-gradient(45deg, #FF3B30, #FF9500)"
            };
        case "triangle":
            return {
                ...S,
                width: 0,
                height: 0,
                background: "transparent",
                borderLeft: `${r.size / 2}px solid transparent`,
                borderRight: `${r.size / 2}px solid transparent`,
                borderBottom: `${r.size * .87}px solid rgba(0, 122, 255, 0.1)`
            };
        default:
            return S
        }
    }
    ;
    return u.jsx("div", {
        className: "geometric-bg",
        children: f.map(r => u.jsx("div", {
            className: `geometric-shape ${r.type}`,
            style: T(r)
        }, r.id))
    })
}
;
function Ug() {
    return u.jsxs("div", {
        className: "min-h-screen bg-background font-sf-pro",
        children: [u.jsx(Rg, {}), u.jsx(ig, {}), u.jsxs("main", {
            children: [u.jsx(hg, {}), u.jsx(pg, {}), u.jsx(jg, {}), u.jsx(vg, {}), u.jsx(_g, {}), u.jsx(Eg, {}), u.jsx(Og, {}), u.jsx(zg, {})]
        }), u.jsx(Cg, {})]
    })
}
up.createRoot(document.getElementById("root")).render(u.jsx(he.StrictMode, {
    children: u.jsx(Ug, {})
}));
