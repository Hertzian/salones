! function(e, a) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : e.moment = a()
}(this, function() {
    "use strict";
    var e, n;
    function l() {
        return e.apply(null, arguments)
    }
    function _(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return void 0 === e
    }
    function m(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function u(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function M(e, a) {
        var t, s = [];
        for (t = 0; t < e.length; ++t) s.push(a(e[t], t));
        return s
    }
    function h(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    function L(e, a) {
        for (var t in a) h(a, t) && (e[t] = a[t]);
        return h(a, "toString") && (e.toString = a.toString), h(a, "valueOf") && (e.valueOf = a.valueOf), e
    }
    function c(e, a, t, s) {
        return va(e, a, t, s, !0).utc()
    }
    function Y(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }
    function y(e) {
        if (null == e._isValid) {
            var a = Y(e),
                t = n.call(a.parsedDateParts, function(e) {
                    return null != e
                }),
                s = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
            if (e._strict && (s = s && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s
        }
        return e._isValid
    }
    function f(e) {
        var a = c(NaN);
        return null != e ? L(Y(a), e) : Y(a).userInvalidated = !0, a
    }
    n = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var a = Object(this), t = a.length >>> 0, s = 0; s < t; s++)
            if (s in a && e.call(this, a[s], s, a)) return !0;
        return !1
    };
    var d = l.momentProperties = [];
    function k(e, a) {
        var t, s, n;
        if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = Y(a)), o(a._locale) || (e._locale = a._locale), 0 < d.length)
            for (t = 0; t < d.length; t++) o(n = a[s = d[t]]) || (e[s] = n);
        return e
    }
    var a = !1;
    function p(e) {
        k(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === a && (a = !0, l.updateOffset(this), a = !1)
    }
    function D(e) {
        return e instanceof p || null != e && null != e._isAMomentObject
    }
    function T(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function g(e) {
        var a = +e,
            t = 0;
        return 0 !== a && isFinite(a) && (t = T(a)), t
    }
    function r(e, a, t) {
        var s, n = Math.min(e.length, a.length),
            d = Math.abs(e.length - a.length),
            r = 0;
        for (s = 0; s < n; s++)(t && e[s] !== a[s] || !t && g(e[s]) !== g(a[s])) && r++;
        return r + d
    }
    function w(e) {
        !1 === l.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function t(n, d) {
        var r = !0;
        return L(function() {
            if (null != l.deprecationHandler && l.deprecationHandler(null, n), r) {
                for (var e, a = [], t = 0; t < arguments.length; t++) {
                    if (e = "", "object" == typeof arguments[t]) {
                        for (var s in e += "\n[" + t + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[t];
                    a.push(e)
                }
                w(n + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), r = !1
            }
            return d.apply(this, arguments)
        }, d)
    }
    var s, v = {};
    function H(e, a) {
        null != l.deprecationHandler && l.deprecationHandler(e, a), v[e] || (w(a), v[e] = !0)
    }
    function S(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function b(e, a) {
        var t, s = L({}, e);
        for (t in a) h(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {}, L(s[t], e[t]), L(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]);
        for (t in e) h(e, t) && !h(a, t) && i(e[t]) && (s[t] = L({}, s[t]));
        return s
    }
    function j(e) {
        null != e && this.set(e)
    }
    l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, s = Object.keys ? Object.keys : function(e) {
        var a, t = [];
        for (a in e) h(e, a) && t.push(a);
        return t
    };
    var x = {};
    function P(e, a) {
        var t = e.toLowerCase();
        x[t] = x[t + "s"] = x[a] = e
    }
    function O(e) {
        return "string" == typeof e ? x[e] || x[e.toLowerCase()] : void 0
    }
    function W(e) {
        var a, t, s = {};
        for (t in e) h(e, t) && (a = O(t)) && (s[a] = e[t]);
        return s
    }
    var E = {};
    function A(e, a) {
        E[e] = a
    }
    function F(e, a, t) {
        var s = "" + Math.abs(e),
            n = a - s.length;
        return (0 <= e ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s
    }
    var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        N = {},
        R = {};
    function I(e, a, t, s) {
        var n = s;
        "string" == typeof s && (n = function() {
            return this[s]()
        }), e && (R[e] = n), a && (R[a[0]] = function() {
            return F(n.apply(this, arguments), a[1], a[2])
        }), t && (R[t] = function() {
            return this.localeData().ordinal(n.apply(this, arguments), e)
        })
    }
    function C(e, a) {
        return e.isValid() ? (a = G(a, e.localeData()), N[a] = N[a] || function(s) {
            var e, n, a, d = s.match(z);
            for (e = 0, n = d.length; e < n; e++) R[d[e]] ? d[e] = R[d[e]] : d[e] = (a = d[e]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
            return function(e) {
                var a, t = "";
                for (a = 0; a < n; a++) t += S(d[a]) ? d[a].call(e, s) : d[a];
                return t
            }
        }(a), N[a](e)) : e.localeData().invalidDate()
    }
    function G(e, a) {
        var t = 5;
        function s(e) {
            return a.longDateFormat(e) || e
        }
        for (J.lastIndex = 0; 0 <= t && J.test(e);) e = e.replace(J, s), J.lastIndex = 0, t -= 1;
        return e
    }
    var U = /\d/,
        V = /\d\d/,
        K = /\d{3}/,
        $ = /\d{4}/,
        Z = /[+-]?\d{6}/,
        B = /\d\d?/,
        q = /\d\d\d\d?/,
        Q = /\d\d\d\d\d\d?/,
        X = /\d{1,3}/,
        ee = /\d{1,4}/,
        ae = /[+-]?\d{1,6}/,
        te = /\d+/,
        se = /[+-]?\d+/,
        ne = /Z|[+-]\d\d:?\d\d/gi,
        de = /Z|[+-]\d\d(?::?\d\d)?/gi,
        re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        _e = {};
    function ie(e, t, s) {
        _e[e] = S(t) ? t : function(e, a) {
            return e && s ? s : t
        }
    }
    function oe(e, a) {
        return h(_e, e) ? _e[e](a._strict, a._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, a, t, s, n) {
            return a || t || s || n
        })))
    }
    function me(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var ue = {};
    function le(e, t) {
        var a, s = t;
        for ("string" == typeof e && (e = [e]), m(t) && (s = function(e, a) {
                a[t] = g(e)
            }), a = 0; a < e.length; a++) ue[e[a]] = s
    }
    function Me(e, n) {
        le(e, function(e, a, t, s) {
            t._w = t._w || {}, n(e, t._w, t, s)
        })
    }
    var he = 0,
        Le = 1,
        ce = 2,
        Ye = 3,
        ye = 4,
        fe = 5,
        ke = 6,
        pe = 7,
        De = 8;
    function Te(e) {
        return ge(e) ? 366 : 365
    }
    function ge(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    I("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }), I(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), A("year", 1), ie("Y", se), ie("YY", B, V), ie("YYYY", ee, $), ie("YYYYY", ae, Z), ie("YYYYYY", ae, Z), le(["YYYYY", "YYYYYY"], he), le("YYYY", function(e, a) {
        a[he] = 2 === e.length ? l.parseTwoDigitYear(e) : g(e)
    }), le("YY", function(e, a) {
        a[he] = l.parseTwoDigitYear(e)
    }), le("Y", function(e, a) {
        a[he] = parseInt(e, 10)
    }), l.parseTwoDigitYear = function(e) {
        return g(e) + (68 < g(e) ? 1900 : 2e3)
    };
    var we, ve = He("FullYear", !0);
    function He(a, t) {
        return function(e) {
            return null != e ? (be(this, a, e), l.updateOffset(this, t), this) : Se(this, a)
        }
    }
    function Se(e, a) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN
    }
    function be(e, a, t) {
        e.isValid() && !isNaN(t) && ("FullYear" === a && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), je(t, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t))
    }
    function je(e, a) {
        if (isNaN(e) || isNaN(a)) return NaN;
        var t, s = (a % (t = 12) + t) % t;
        return e += (a - s) / 12, 1 === s ? ge(e) ? 29 : 28 : 31 - s % 7 % 2
    }
    we = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var a;
        for (a = 0; a < this.length; ++a)
            if (this[a] === e) return a;
        return -1
    }, I("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), I("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), I("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), P("month", "M"), A("month", 8), ie("M", B), ie("MM", B, V), ie("MMM", function(e, a) {
        return a.monthsShortRegex(e)
    }), ie("MMMM", function(e, a) {
        return a.monthsRegex(e)
    }), le(["M", "MM"], function(e, a) {
        a[Le] = g(e) - 1
    }), le(["MMM", "MMMM"], function(e, a, t, s) {
        var n = t._locale.monthsParse(e, s, t._strict);
        null != n ? a[Le] = n : Y(t).invalidMonth = e
    });
    var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var Oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function We(e, a) {
        var t;
        if (!e.isValid()) return e;
        if ("string" == typeof a)
            if (/^\d+$/.test(a)) a = g(a);
            else if (!m(a = e.localeData().monthsParse(a))) return e;
        return t = Math.min(e.date(), je(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t), e
    }
    function Ee(e) {
        return null != e ? (We(this, e), l.updateOffset(this, !0), this) : Se(this, "Month")
    }
    var Ae = re;
    var Fe = re;
    function ze() {
        function e(e, a) {
            return a.length - e.length
        }
        var a, t, s = [],
            n = [],
            d = [];
        for (a = 0; a < 12; a++) t = c([2e3, a]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), d.push(this.months(t, "")), d.push(this.monthsShort(t, ""));
        for (s.sort(e), n.sort(e), d.sort(e), a = 0; a < 12; a++) s[a] = me(s[a]), n[a] = me(n[a]);
        for (a = 0; a < 24; a++) d[a] = me(d[a]);
        this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }
    function Je(e) {
        var a = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e), a
    }
    function Ne(e, a, t) {
        var s = 7 + a - t;
        return -((7 + Je(e, 0, s).getUTCDay() - a) % 7) + s - 1
    }
    function Re(e, a, t, s, n) {
        var d, r, _ = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ne(e, s, n);
        return r = _ <= 0 ? Te(d = e - 1) + _ : _ > Te(e) ? (d = e + 1, _ - Te(e)) : (d = e, _), {
            year: d,
            dayOfYear: r
        }
    }
    function Ie(e, a, t) {
        var s, n, d = Ne(e.year(), a, t),
            r = Math.floor((e.dayOfYear() - d - 1) / 7) + 1;
        return r < 1 ? s = r + Ce(n = e.year() - 1, a, t) : r > Ce(e.year(), a, t) ? (s = r - Ce(e.year(), a, t), n = e.year() + 1) : (n = e.year(), s = r), {
            week: s,
            year: n
        }
    }
    function Ce(e, a, t) {
        var s = Ne(e, a, t),
            n = Ne(e + 1, a, t);
        return (Te(e) - s + n) / 7
    }
    I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), A("week", 5), A("isoWeek", 5), ie("w", B), ie("ww", B, V), ie("W", B), ie("WW", B, V), Me(["w", "ww", "W", "WW"], function(e, a, t, s) {
        a[s.substr(0, 1)] = g(e)
    });
    I("d", 0, "do", "day"), I("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), I("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), I("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), ie("d", B), ie("e", B), ie("E", B), ie("dd", function(e, a) {
        return a.weekdaysMinRegex(e)
    }), ie("ddd", function(e, a) {
        return a.weekdaysShortRegex(e)
    }), ie("dddd", function(e, a) {
        return a.weekdaysRegex(e)
    }), Me(["dd", "ddd", "dddd"], function(e, a, t, s) {
        var n = t._locale.weekdaysParse(e, s, t._strict);
        null != n ? a.d = n : Y(t).invalidWeekday = e
    }), Me(["d", "e", "E"], function(e, a, t, s) {
        a[s] = g(e)
    });
    var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Ue = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Ke = re;
    var $e = re;
    var Ze = re;
    function Be() {
        function e(e, a) {
            return a.length - e.length
        }
        var a, t, s, n, d, r = [],
            _ = [],
            i = [],
            o = [];
        for (a = 0; a < 7; a++) t = c([2e3, 1]).day(a), s = this.weekdaysMin(t, ""), n = this.weekdaysShort(t, ""), d = this.weekdays(t, ""), r.push(s), _.push(n), i.push(d), o.push(s), o.push(n), o.push(d);
        for (r.sort(e), _.sort(e), i.sort(e), o.sort(e), a = 0; a < 7; a++) _[a] = me(_[a]), i[a] = me(i[a]), o[a] = me(o[a]);
        this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }
    function qe() {
        return this.hours() % 12 || 12
    }
    function Qe(e, a) {
        I(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), a)
        })
    }
    function Xe(e, a) {
        return a._meridiemParse
    }
    I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, qe), I("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }), I("hmm", 0, 0, function() {
        return "" + qe.apply(this) + F(this.minutes(), 2)
    }), I("hmmss", 0, 0, function() {
        return "" + qe.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2)
    }), I("Hmm", 0, 0, function() {
        return "" + this.hours() + F(this.minutes(), 2)
    }), I("Hmmss", 0, 0, function() {
        return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2)
    }), Qe("a", !0), Qe("A", !1), P("hour", "h"), A("hour", 13), ie("a", Xe), ie("A", Xe), ie("H", B), ie("h", B), ie("k", B), ie("HH", B, V), ie("hh", B, V), ie("kk", B, V), ie("hmm", q), ie("hmmss", Q), ie("Hmm", q), ie("Hmmss", Q), le(["H", "HH"], Ye), le(["k", "kk"], function(e, a, t) {
        var s = g(e);
        a[Ye] = 24 === s ? 0 : s
    }), le(["a", "A"], function(e, a, t) {
        t._isPm = t._locale.isPM(e), t._meridiem = e
    }), le(["h", "hh"], function(e, a, t) {
        a[Ye] = g(e), Y(t).bigHour = !0
    }), le("hmm", function(e, a, t) {
        var s = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s)), Y(t).bigHour = !0
    }), le("hmmss", function(e, a, t) {
        var s = e.length - 4,
            n = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n)), Y(t).bigHour = !0
    }), le("Hmm", function(e, a, t) {
        var s = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s))
    }), le("Hmmss", function(e, a, t) {
        var s = e.length - 4,
            n = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n))
    });
    var ea, aa = He("Hours", !0),
        ta = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: Pe,
            monthsShort: Oe,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: Ge,
            weekdaysMin: Ve,
            weekdaysShort: Ue,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        sa = {},
        na = {};
    function da(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function ra(e) {
        var a = null;
        if (!sa[e] && "undefined" != typeof module && module && module.exports) try {
            a = ea._abbr, require("./locale/" + e), _a(a)
        } catch (e) {}
        return sa[e]
    }
    function _a(e, a) {
        var t;
        return e && ((t = o(a) ? oa(e) : ia(e, a)) ? ea = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ea._abbr
    }
    function ia(e, a) {
        if (null === a) return delete sa[e], null;
        var t, s = ta;
        if (a.abbr = e, null != sa[e]) H("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = sa[e]._config;
        else if (null != a.parentLocale)
            if (null != sa[a.parentLocale]) s = sa[a.parentLocale]._config;
            else {
                if (null == (t = ra(a.parentLocale))) return na[a.parentLocale] || (na[a.parentLocale] = []), na[a.parentLocale].push({
                    name: e,
                    config: a
                }), null;
                s = t._config
            }
        return sa[e] = new j(b(s, a)), na[e] && na[e].forEach(function(e) {
            ia(e.name, e.config)
        }), _a(e), sa[e]
    }
    function oa(e) {
        var a;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ea;
        if (!_(e)) {
            if (a = ra(e)) return a;
            e = [e]
        }
        return function(e) {
            for (var a, t, s, n, d = 0; d < e.length;) {
                for (a = (n = da(e[d]).split("-")).length, t = (t = da(e[d + 1])) ? t.split("-") : null; 0 < a;) {
                    if (s = ra(n.slice(0, a).join("-"))) return s;
                    if (t && t.length >= a && r(n, t, !0) >= a - 1) break;
                    a--
                }
                d++
            }
            return ea
        }(e)
    }
    function ma(e) {
        var a, t = e._a;
        return t && -2 === Y(e).overflow && (a = t[Le] < 0 || 11 < t[Le] ? Le : t[ce] < 1 || t[ce] > je(t[he], t[Le]) ? ce : t[Ye] < 0 || 24 < t[Ye] || 24 === t[Ye] && (0 !== t[ye] || 0 !== t[fe] || 0 !== t[ke]) ? Ye : t[ye] < 0 || 59 < t[ye] ? ye : t[fe] < 0 || 59 < t[fe] ? fe : t[ke] < 0 || 999 < t[ke] ? ke : -1, Y(e)._overflowDayOfYear && (a < he || ce < a) && (a = ce), Y(e)._overflowWeeks && -1 === a && (a = pe), Y(e)._overflowWeekday && -1 === a && (a = De), Y(e).overflow = a), e
    }
    function ua(e, a, t) {
        return null != e ? e : null != a ? a : t
    }
    function la(e) {
        var a, t, s, n, d, r = [];
        if (!e._d) {
            var _, i;
            for (_ = e, i = new Date(l.now()), s = _._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[ce] && null == e._a[Le] && function(e) {
                    var a, t, s, n, d, r, _, i;
                    if (null != (a = e._w).GG || null != a.W || null != a.E) d = 1, r = 4, t = ua(a.GG, e._a[he], Ie(Ha(), 1, 4).year), s = ua(a.W, 1), ((n = ua(a.E, 1)) < 1 || 7 < n) && (i = !0);
                    else {
                        d = e._locale._week.dow, r = e._locale._week.doy;
                        var o = Ie(Ha(), d, r);
                        t = ua(a.gg, e._a[he], o.year), s = ua(a.w, o.week), null != a.d ? ((n = a.d) < 0 || 6 < n) && (i = !0) : null != a.e ? (n = a.e + d, (a.e < 0 || 6 < a.e) && (i = !0)) : n = d
                    }
                    s < 1 || s > Ce(t, d, r) ? Y(e)._overflowWeeks = !0 : null != i ? Y(e)._overflowWeekday = !0 : (_ = Re(t, s, n, d, r), e._a[he] = _.year, e._dayOfYear = _.dayOfYear)
                }(e), null != e._dayOfYear && (d = ua(e._a[he], s[he]), (e._dayOfYear > Te(d) || 0 === e._dayOfYear) && (Y(e)._overflowDayOfYear = !0), t = Je(d, 0, e._dayOfYear), e._a[Le] = t.getUTCMonth(), e._a[ce] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) e._a[a] = r[a] = s[a];
            for (; a < 7; a++) e._a[a] = r[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
            24 === e._a[Ye] && 0 === e._a[ye] && 0 === e._a[fe] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Je : function(e, a, t, s, n, d, r) {
                var _ = new Date(e, a, t, s, n, d, r);
                return e < 100 && 0 <= e && isFinite(_.getFullYear()) && _.setFullYear(e), _
            }).apply(null, r), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== n && (Y(e).weekdayMismatch = !0)
        }
    }
    var Ma = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ha = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        La = /Z|[+-]\d\d(?::?\d\d)?/,
        ca = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Ya = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        ya = /^\/?Date\((\-?\d+)/i;
    function fa(e) {
        var a, t, s, n, d, r, _ = e._i,
            i = Ma.exec(_) || ha.exec(_);
        if (i) {
            for (Y(e).iso = !0, a = 0, t = ca.length; a < t; a++)
                if (ca[a][1].exec(i[1])) {
                    n = ca[a][0], s = !1 !== ca[a][2];
                    break
                }
            if (null == n) return void(e._isValid = !1);
            if (i[3]) {
                for (a = 0, t = Ya.length; a < t; a++)
                    if (Ya[a][1].exec(i[3])) {
                        d = (i[2] || " ") + Ya[a][0];
                        break
                    }
                if (null == d) return void(e._isValid = !1)
            }
            if (!s && null != d) return void(e._isValid = !1);
            if (i[4]) {
                if (!La.exec(i[4])) return void(e._isValid = !1);
                r = "Z"
            }
            e._f = n + (d || "") + (r || ""), ga(e)
        } else e._isValid = !1
    }
    var ka = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function pa(e, a, t, s, n, d) {
        var r = [function(e) {
            var a = parseInt(e, 10); {
                if (a <= 49) return 2e3 + a;
                if (a <= 999) return 1900 + a
            }
            return a
        }(e), Oe.indexOf(a), parseInt(t, 10), parseInt(s, 10), parseInt(n, 10)];
        return d && r.push(parseInt(d, 10)), r
    }
    var Da = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Ta(e) {
        var a, t, s, n = ka.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (n) {
            var d = pa(n[4], n[3], n[2], n[5], n[6], n[7]);
            if (a = n[1], t = d, s = e, a && Ue.indexOf(a) !== new Date(t[0], t[1], t[2]).getDay() && (Y(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
            e._a = d, e._tzm = function(e, a, t) {
                if (e) return Da[e];
                if (a) return 0;
                var s = parseInt(t, 10),
                    n = s % 100;
                return (s - n) / 100 * 60 + n
            }(n[8], n[9], n[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0
        } else e._isValid = !1
    }
    function ga(e) {
        if (e._f !== l.ISO_8601)
            if (e._f !== l.RFC_2822) {
                e._a = [], Y(e).empty = !0;
                var a, t, s, n, d, r, _, i, o = "" + e._i,
                    m = o.length,
                    u = 0;
                for (s = G(e._f, e._locale).match(z) || [], a = 0; a < s.length; a++) n = s[a], (t = (o.match(oe(n, e)) || [])[0]) && (0 < (d = o.substr(0, o.indexOf(t))).length && Y(e).unusedInput.push(d), o = o.slice(o.indexOf(t) + t.length), u += t.length), R[n] ? (t ? Y(e).empty = !1 : Y(e).unusedTokens.push(n), r = n, i = e, null != (_ = t) && h(ue, r) && ue[r](_, i._a, i, r)) : e._strict && !t && Y(e).unusedTokens.push(n);
                Y(e).charsLeftOver = m - u, 0 < o.length && Y(e).unusedInput.push(o), e._a[Ye] <= 12 && !0 === Y(e).bigHour && 0 < e._a[Ye] && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[Ye] = function(e, a, t) {
                    var s;
                    if (null == t) return a;
                    return null != e.meridiemHour ? e.meridiemHour(a, t) : (null != e.isPM && ((s = e.isPM(t)) && a < 12 && (a += 12), s || 12 !== a || (a = 0)), a)
                }(e._locale, e._a[Ye], e._meridiem), la(e), ma(e)
            } else Ta(e);
        else fa(e)
    }
    function wa(e) {
        var a, t, s, n, d = e._i,
            r = e._f;
        return e._locale = e._locale || oa(e._l), null === d || void 0 === r && "" === d ? f({
            nullInput: !0
        }) : ("string" == typeof d && (e._i = d = e._locale.preparse(d)), D(d) ? new p(ma(d)) : (u(d) ? e._d = d : _(r) ? function(e) {
            var a, t, s, n, d;
            if (0 === e._f.length) return Y(e).invalidFormat = !0, e._d = new Date(NaN);
            for (n = 0; n < e._f.length; n++) d = 0, a = k({}, e), null != e._useUTC && (a._useUTC = e._useUTC), a._f = e._f[n], ga(a), y(a) && (d += Y(a).charsLeftOver, d += 10 * Y(a).unusedTokens.length, Y(a).score = d, (null == s || d < s) && (s = d, t = a));
            L(e, t || a)
        }(e) : r ? ga(e) : o(t = (a = e)._i) ? a._d = new Date(l.now()) : u(t) ? a._d = new Date(t.valueOf()) : "string" == typeof t ? (s = a, null === (n = ya.exec(s._i)) ? (fa(s), !1 === s._isValid && (delete s._isValid, Ta(s), !1 === s._isValid && (delete s._isValid, l.createFromInputFallback(s)))) : s._d = new Date(+n[1])) : _(t) ? (a._a = M(t.slice(0), function(e) {
            return parseInt(e, 10)
        }), la(a)) : i(t) ? function(e) {
            if (!e._d) {
                var a = W(e._i);
                e._a = M([a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), la(e)
            }
        }(a) : m(t) ? a._d = new Date(t) : l.createFromInputFallback(a), y(e) || (e._d = null), e))
    }
    function va(e, a, t, s, n) {
        var d, r = {};
        return !0 !== t && !1 !== t || (s = t, t = void 0), (i(e) && function(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var a;
            for (a in e)
                if (e.hasOwnProperty(a)) return !1;
            return !0
        }(e) || _(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = n, r._l = t, r._i = e, r._f = a, r._strict = s, (d = new p(ma(wa(r))))._nextDay && (d.add(1, "d"), d._nextDay = void 0), d
    }
    function Ha(e, a, t, s) {
        return va(e, a, t, s, !1)
    }
    l.createFromInputFallback = t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), l.ISO_8601 = function() {}, l.RFC_2822 = function() {};
    var Sa = t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = Ha.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : f()
        }),
        ba = t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = Ha.apply(null, arguments);
            return this.isValid() && e.isValid() ? this < e ? this : e : f()
        });
    function ja(e, a) {
        var t, s;
        if (1 === a.length && _(a[0]) && (a = a[0]), !a.length) return Ha();
        for (t = a[0], s = 1; s < a.length; ++s) a[s].isValid() && !a[s][e](t) || (t = a[s]);
        return t
    }
    var xa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Pa(e) {
        var a = W(e),
            t = a.year || 0,
            s = a.quarter || 0,
            n = a.month || 0,
            d = a.week || a.isoWeek || 0,
            r = a.day || 0,
            _ = a.hour || 0,
            i = a.minute || 0,
            o = a.second || 0,
            m = a.millisecond || 0;
        this._isValid = function(e) {
            for (var a in e)
                if (-1 === we.call(xa, a) || null != e[a] && isNaN(e[a])) return !1;
            for (var t = !1, s = 0; s < xa.length; ++s)
                if (e[xa[s]]) {
                    if (t) return !1;
                    parseFloat(e[xa[s]]) !== g(e[xa[s]]) && (t = !0)
                }
            return !0
        }(a), this._milliseconds = +m + 1e3 * o + 6e4 * i + 1e3 * _ * 60 * 60, this._days = +r + 7 * d, this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = oa(), this._bubble()
    }
    function Oa(e) {
        return e instanceof Pa
    }
    function Wa(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Ea(e, t) {
        I(e, 0, 0, function() {
            var e = this.utcOffset(),
                a = "+";
            return e < 0 && (e = -e, a = "-"), a + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
        })
    }
    Ea("Z", ":"), Ea("ZZ", ""), ie("Z", de), ie("ZZ", de), le(["Z", "ZZ"], function(e, a, t) {
        t._useUTC = !0, t._tzm = Fa(de, e)
    });
    var Aa = /([\+\-]|\d\d)/gi;
    function Fa(e, a) {
        var t = (a || "").match(e);
        if (null === t) return null;
        var s = ((t[t.length - 1] || []) + "").match(Aa) || ["-", 0, 0],
            n = 60 * s[1] + g(s[2]);
        return 0 === n ? 0 : "+" === s[0] ? n : -n
    }
    function za(e, a) {
        var t, s;
        return a._isUTC ? (t = a.clone(), s = (D(e) || u(e) ? e.valueOf() : Ha(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + s), l.updateOffset(t, !1), t) : Ha(e).local()
    }
    function Ja(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Na() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    l.updateOffset = function() {};
    var Ra = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ia = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Ca(e, a) {
        var t, s, n, d = e,
            r = null;
        return Oa(e) ? d = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : m(e) ? (d = {}, a ? d[a] = e : d.milliseconds = e) : (r = Ra.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = {
            y: 0,
            d: g(r[ce]) * t,
            h: g(r[Ye]) * t,
            m: g(r[ye]) * t,
            s: g(r[fe]) * t,
            ms: g(Wa(1e3 * r[ke])) * t
        }) : (r = Ia.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = {
            y: Ga(r[2], t),
            M: Ga(r[3], t),
            w: Ga(r[4], t),
            d: Ga(r[5], t),
            h: Ga(r[6], t),
            m: Ga(r[7], t),
            s: Ga(r[8], t)
        }) : null == d ? d = {} : "object" == typeof d && ("from" in d || "to" in d) && (n = function(e, a) {
            var t;
            if (!e.isValid() || !a.isValid()) return {
                milliseconds: 0,
                months: 0
            };
            a = za(a, e), e.isBefore(a) ? t = Ua(e, a) : ((t = Ua(a, e)).milliseconds = -t.milliseconds, t.months = -t.months);
            return t
        }(Ha(d.from), Ha(d.to)), (d = {}).ms = n.milliseconds, d.M = n.months), s = new Pa(d), Oa(e) && h(e, "_locale") && (s._locale = e._locale), s
    }
    function Ga(e, a) {
        var t = e && parseFloat(e.replace(",", "."));
        return (isNaN(t) ? 0 : t) * a
    }
    function Ua(e, a) {
        var t = {
            milliseconds: 0,
            months: 0
        };
        return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, "M").isAfter(a) && --t.months, t.milliseconds = +a - +e.clone().add(t.months, "M"), t
    }
    function Va(s, n) {
        return function(e, a) {
            var t;
            return null === a || isNaN(+a) || (H(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), t = e, e = a, a = t), Ka(this, Ca(e = "string" == typeof e ? +e : e, a), s), this
        }
    }
    function Ka(e, a, t, s) {
        var n = a._milliseconds,
            d = Wa(a._days),
            r = Wa(a._months);
        e.isValid() && (s = null == s || s, r && We(e, Se(e, "Month") + r * t), d && be(e, "Date", Se(e, "Date") + d * t), n && e._d.setTime(e._d.valueOf() + n * t), s && l.updateOffset(e, d || r))
    }
    Ca.fn = Pa.prototype, Ca.invalid = function() {
        return Ca(NaN)
    };
    var $a = Va(1, "add"),
        Za = Va(-1, "subtract");
    function Ba(e, a) {
        var t = 12 * (a.year() - e.year()) + (a.month() - e.month()),
            s = e.clone().add(t, "months");
        return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, "months")) : (a - s) / (e.clone().add(t + 1, "months") - s))) || 0
    }
    function qa(e) {
        var a;
        return void 0 === e ? this._locale._abbr : (null != (a = oa(e)) && (this._locale = a), this)
    }
    l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Qa = t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    function Xa() {
        return this._locale
    }
    function et(e, a) {
        I(0, [e, e.length], 0, a)
    }
    function at(e, a, t, s, n) {
        var d;
        return null == e ? Ie(this, s, n).year : ((d = Ce(e, s, n)) < a && (a = d), function(e, a, t, s, n) {
            var d = Re(e, a, t, s, n),
                r = Je(d.year, 0, d.dayOfYear);
            return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
        }.call(this, e, a, t, s, n))
    }
    I(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), I(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), et("gggg", "weekYear"), et("ggggg", "weekYear"), et("GGGG", "isoWeekYear"), et("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), ie("G", se), ie("g", se), ie("GG", B, V), ie("gg", B, V), ie("GGGG", ee, $), ie("gggg", ee, $), ie("GGGGG", ae, Z), ie("ggggg", ae, Z), Me(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, a, t, s) {
        a[s.substr(0, 2)] = g(e)
    }), Me(["gg", "GG"], function(e, a, t, s) {
        a[s] = l.parseTwoDigitYear(e)
    }), I("Q", 0, "Qo", "quarter"), P("quarter", "Q"), A("quarter", 7), ie("Q", U), le("Q", function(e, a) {
        a[Le] = 3 * (g(e) - 1)
    }), I("D", ["DD", 2], "Do", "date"), P("date", "D"), A("date", 9), ie("D", B), ie("DD", B, V), ie("Do", function(e, a) {
        return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient
    }), le(["D", "DD"], ce), le("Do", function(e, a) {
        a[ce] = g(e.match(B)[0])
    });
    var tt = He("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), A("dayOfYear", 4), ie("DDD", X), ie("DDDD", K), le(["DDD", "DDDD"], function(e, a, t) {
        t._dayOfYear = g(e)
    }), I("m", ["mm", 2], 0, "minute"), P("minute", "m"), A("minute", 14), ie("m", B), ie("mm", B, V), le(["m", "mm"], ye);
    var st = He("Minutes", !1);
    I("s", ["ss", 2], 0, "second"), P("second", "s"), A("second", 15), ie("s", B), ie("ss", B, V), le(["s", "ss"], fe);
    var nt, dt = He("Seconds", !1);
    for (I("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), I(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), I(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), I(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), I(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), I(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), I(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), P("millisecond", "ms"), A("millisecond", 16), ie("S", X, U), ie("SS", X, V), ie("SSS", X, K), nt = "SSSS"; nt.length <= 9; nt += "S") ie(nt, te);
    function rt(e, a) {
        a[ke] = g(1e3 * ("0." + e))
    }
    for (nt = "S"; nt.length <= 9; nt += "S") le(nt, rt);
    var _t = He("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
    var it = p.prototype;
    function ot(e) {
        return e
    }
    it.add = $a, it.calendar = function(e, a) {
        var t = e || Ha(),
            s = za(t, this).startOf("day"),
            n = l.calendarFormat(this, s) || "sameElse",
            d = a && (S(a[n]) ? a[n].call(this, t) : a[n]);
        return this.format(d || this.localeData().calendar(n, this, Ha(t)))
    }, it.clone = function() {
        return new p(this)
    }, it.diff = function(e, a, t) {
        var s, n, d;
        if (!this.isValid()) return NaN;
        if (!(s = za(e, this)).isValid()) return NaN;
        switch (n = 6e4 * (s.utcOffset() - this.utcOffset()), a = O(a)) {
            case "year":
                d = Ba(this, s) / 12;
                break;
            case "month":
                d = Ba(this, s);
                break;
            case "quarter":
                d = Ba(this, s) / 3;
                break;
            case "second":
                d = (this - s) / 1e3;
                break;
            case "minute":
                d = (this - s) / 6e4;
                break;
            case "hour":
                d = (this - s) / 36e5;
                break;
            case "day":
                d = (this - s - n) / 864e5;
                break;
            case "week":
                d = (this - s - n) / 6048e5;
                break;
            default:
                d = this - s
        }
        return t ? d : T(d)
    }, it.endOf = function(e) {
        return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
    }, it.format = function(e) {
        e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
        var a = C(this, e);
        return this.localeData().postformat(a)
    }, it.from = function(e, a) {
        return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ca({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
    }, it.fromNow = function(e) {
        return this.from(Ha(), e)
    }, it.to = function(e, a) {
        return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ca({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
    }, it.toNow = function(e) {
        return this.to(Ha(), e)
    }, it.get = function(e) {
        return S(this[e = O(e)]) ? this[e]() : this
    }, it.invalidAt = function() {
        return Y(this).overflow
    }, it.isAfter = function(e, a) {
        var t = D(e) ? e : Ha(e);
        return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = O(a) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf())
    }, it.isBefore = function(e, a) {
        var t = D(e) ? e : Ha(e);
        return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = O(a) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf())
    }, it.isBetween = function(e, a, t, s) {
        var n = D(e) ? e : Ha(e),
            d = D(a) ? a : Ha(a);
        return !!(this.isValid() && n.isValid() && d.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(n, t) : !this.isBefore(n, t)) && (")" === s[1] ? this.isBefore(d, t) : !this.isAfter(d, t))
    }, it.isSame = function(e, a) {
        var t, s = D(e) ? e : Ha(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = O(a) || "millisecond") ? this.valueOf() === s.valueOf() : (t = s.valueOf(), this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()))
    }, it.isSameOrAfter = function(e, a) {
        return this.isSame(e, a) || this.isAfter(e, a)
    }, it.isSameOrBefore = function(e, a) {
        return this.isSame(e, a) || this.isBefore(e, a)
    }, it.isValid = function() {
        return y(this)
    }, it.lang = Qa, it.locale = qa, it.localeData = Xa, it.max = ba, it.min = Sa, it.parsingFlags = function() {
        return L({}, Y(this))
    }, it.set = function(e, a) {
        if ("object" == typeof e)
            for (var t = function(e) {
                    var a = [];
                    for (var t in e) a.push({
                        unit: t,
                        priority: E[t]
                    });
                    return a.sort(function(e, a) {
                        return e.priority - a.priority
                    }), a
                }(e = W(e)), s = 0; s < t.length; s++) this[t[s].unit](e[t[s].unit]);
        else if (S(this[e = O(e)])) return this[e](a);
        return this
    }, it.startOf = function(e) {
        switch (e = O(e)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }, it.subtract = Za, it.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, it.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, it.toDate = function() {
        return new Date(this.valueOf())
    }, it.toISOString = function(e) {
        if (!this.isValid()) return null;
        var a = !0 !== e,
            t = a ? this.clone().utc() : this;
        return t.year() < 0 || 9999 < t.year() ? C(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", C(t, "Z")) : C(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, it.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            a = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z");
        var t = "[" + e + '("]',
            s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            n = a + '[")]';
        return this.format(t + s + "-MM-DD[T]HH:mm:ss.SSS" + n)
    }, it.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }, it.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, it.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }, it.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, it.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }, it.year = ve, it.isLeapYear = function() {
        return ge(this.year())
    }, it.weekYear = function(e) {
        return at.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, it.isoWeekYear = function(e) {
        return at.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, it.quarter = it.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, it.month = Ee, it.daysInMonth = function() {
        return je(this.year(), this.month())
    }, it.week = it.weeks = function(e) {
        var a = this.localeData().week(this);
        return null == e ? a : this.add(7 * (e - a), "d")
    }, it.isoWeek = it.isoWeeks = function(e) {
        var a = Ie(this, 1, 4).week;
        return null == e ? a : this.add(7 * (e - a), "d")
    }, it.weeksInYear = function() {
        var e = this.localeData()._week;
        return Ce(this.year(), e.dow, e.doy)
    }, it.isoWeeksInYear = function() {
        return Ce(this.year(), 1, 4)
    }, it.date = tt, it.day = it.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var a, t, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (a = e, t = this.localeData(), e = "string" != typeof a ? a : isNaN(a) ? "number" == typeof(a = t.weekdaysParse(a)) ? a : null : parseInt(a, 10), this.add(e - s, "d")) : s
    }, it.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? a : this.add(e - a, "d")
    }, it.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this.day() || 7;
        var a, t, s = (a = e, t = this.localeData(), "string" == typeof a ? t.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a);
        return this.day(this.day() % 7 ? s : s - 7)
    }, it.dayOfYear = function(e) {
        var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? a : this.add(e - a, "d")
    }, it.hour = it.hours = aa, it.minute = it.minutes = st, it.second = it.seconds = dt, it.millisecond = it.milliseconds = _t, it.utcOffset = function(e, a, t) {
        var s, n = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? n : Ja(this);
        if ("string" == typeof e) {
            if (null === (e = Fa(de, e))) return this
        } else Math.abs(e) < 16 && !t && (e *= 60);
        return !this._isUTC && a && (s = Ja(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), n !== e && (!a || this._changeInProgress ? Ka(this, Ca(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this
    }, it.utc = function(e) {
        return this.utcOffset(0, e)
    }, it.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ja(this), "m")), this
    }, it.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Fa(ne, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }, it.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Ha(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, it.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, it.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }, it.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }, it.isUtc = Na, it.isUTC = Na, it.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }, it.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, it.dates = t("dates accessor is deprecated. Use date instead.", tt), it.months = t("months accessor is deprecated. Use month instead", Ee), it.years = t("years accessor is deprecated. Use year instead", ve), it.zone = t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, a) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset()
    }), it.isDSTShifted = t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (k(e, this), (e = wa(e))._a) {
            var a = e._isUTC ? c(e._a) : Ha(e._a);
            this._isDSTShifted = this.isValid() && 0 < r(e._a, a.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var mt = j.prototype;
    function ut(e, a, t, s) {
        var n = oa(),
            d = c().set(s, a);
        return n[t](d, e)
    }
    function lt(e, a, t) {
        if (m(e) && (a = e, e = void 0), e = e || "", null != a) return ut(e, a, t, "month");
        var s, n = [];
        for (s = 0; s < 12; s++) n[s] = ut(e, s, t, "month");
        return n
    }
    function Mt(e, a, t, s) {
        a = ("boolean" == typeof e ? m(a) && (t = a, a = void 0) : (a = e, e = !1, m(t = a) && (t = a, a = void 0)), a || "");
        var n, d = oa(),
            r = e ? d._week.dow : 0;
        if (null != t) return ut(a, (t + r) % 7, s, "day");
        var _ = [];
        for (n = 0; n < 7; n++) _[n] = ut(a, (n + r) % 7, s, "day");
        return _
    }
    mt.calendar = function(e, a, t) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return S(s) ? s.call(a, t) : s
    }, mt.longDateFormat = function(e) {
        var a = this._longDateFormat[e],
            t = this._longDateFormat[e.toUpperCase()];
        return a || !t ? a : (this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, mt.invalidDate = function() {
        return this._invalidDate
    }, mt.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }, mt.preparse = ot, mt.postformat = ot, mt.relativeTime = function(e, a, t, s) {
        var n = this._relativeTime[t];
        return S(n) ? n(e, a, t, s) : n.replace(/%d/i, e)
    }, mt.pastFuture = function(e, a) {
        var t = this._relativeTime[0 < e ? "future" : "past"];
        return S(t) ? t(a) : t.replace(/%s/i, a)
    }, mt.set = function(e) {
        var a, t;
        for (t in e) S(a = e[t]) ? this[t] = a : this["_" + t] = a;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, mt.months = function(e, a) {
        return e ? _(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(a) ? "format" : "standalone"][e.month()] : _(this._months) ? this._months : this._months.standalone
    }, mt.monthsShort = function(e, a) {
        return e ? _(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(a) ? "format" : "standalone"][e.month()] : _(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, mt.monthsParse = function(e, a, t) {
        var s, n, d;
        if (this._monthsParseExact) return function(e, a, t) {
            var s, n, d, r = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) d = c([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(d, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(d, "").toLocaleLowerCase();
            return t ? "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null
        }.call(this, e, a, t);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (n = c([2e3, s]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), t || this._monthsParse[s] || (d = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(d.replace(".", ""), "i")), t && "MMMM" === a && this._longMonthsParse[s].test(e)) return s;
            if (t && "MMM" === a && this._shortMonthsParse[s].test(e)) return s;
            if (!t && this._monthsParse[s].test(e)) return s
        }
    }, mt.monthsRegex = function(e) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, mt.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Ae), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, mt.week = function(e) {
        return Ie(e, this._week.dow, this._week.doy).week
    }, mt.firstDayOfYear = function() {
        return this._week.doy
    }, mt.firstDayOfWeek = function() {
        return this._week.dow
    }, mt.weekdays = function(e, a) {
        return e ? _(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(a) ? "format" : "standalone"][e.day()] : _(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }, mt.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, mt.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, mt.weekdaysParse = function(e, a, t) {
        var s, n, d;
        if (this._weekdaysParseExact) return function(e, a, t) {
            var s, n, d, r = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) d = c([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(d, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(d, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(d, "").toLocaleLowerCase();
            return t ? "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null
        }.call(this, e, a, t);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (n = c([2e3, 1]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (d = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(d.replace(".", ""), "i")), t && "dddd" === a && this._fullWeekdaysParse[s].test(e)) return s;
            if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e)) return s;
            if (t && "dd" === a && this._minWeekdaysParse[s].test(e)) return s;
            if (!t && this._weekdaysParse[s].test(e)) return s
        }
    }, mt.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, mt.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, mt.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, mt.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, mt.meridiem = function(e, a, t) {
        return 11 < e ? t ? "pm" : "PM" : t ? "am" : "AM"
    }, _a("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 === g(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        }
    }), l.lang = t("moment.lang is deprecated. Use moment.locale instead.", _a), l.langData = t("moment.langData is deprecated. Use moment.localeData instead.", oa);
    var ht = Math.abs;
    function Lt(e, a, t, s) {
        var n = Ca(a, t);
        return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble()
    }
    function ct(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function Yt(e) {
        return 4800 * e / 146097
    }
    function yt(e) {
        return 146097 * e / 4800
    }
    function ft(e) {
        return function() {
            return this.as(e)
        }
    }
    var kt = ft("ms"),
        pt = ft("s"),
        Dt = ft("m"),
        Tt = ft("h"),
        gt = ft("d"),
        wt = ft("w"),
        vt = ft("M"),
        Ht = ft("y");
    function St(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var bt = St("milliseconds"),
        jt = St("seconds"),
        xt = St("minutes"),
        Pt = St("hours"),
        Ot = St("days"),
        Wt = St("months"),
        Et = St("years");
    var At = Math.round,
        Ft = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        };
    var zt = Math.abs;
    function Jt(e) {
        return (0 < e) - (e < 0) || +e
    }
    function Nt() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, a, t = zt(this._milliseconds) / 1e3,
            s = zt(this._days),
            n = zt(this._months);
        a = T((e = T(t / 60)) / 60), t %= 60, e %= 60;
        var d = T(n / 12),
            r = n %= 12,
            _ = s,
            i = a,
            o = e,
            m = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
            u = this.asSeconds();
        if (!u) return "P0D";
        var l = u < 0 ? "-" : "",
            M = Jt(this._months) !== Jt(u) ? "-" : "",
            h = Jt(this._days) !== Jt(u) ? "-" : "",
            L = Jt(this._milliseconds) !== Jt(u) ? "-" : "";
        return l + "P" + (d ? M + d + "Y" : "") + (r ? M + r + "M" : "") + (_ ? h + _ + "D" : "") + (i || o || m ? "T" : "") + (i ? L + i + "H" : "") + (o ? L + o + "M" : "") + (m ? L + m + "S" : "")
    }
    var Rt = Pa.prototype;
    Rt.isValid = function() {
        return this._isValid
    }, Rt.abs = function() {
        var e = this._data;
        return this._milliseconds = ht(this._milliseconds), this._days = ht(this._days), this._months = ht(this._months), e.milliseconds = ht(e.milliseconds), e.seconds = ht(e.seconds), e.minutes = ht(e.minutes), e.hours = ht(e.hours), e.months = ht(e.months), e.years = ht(e.years), this
    }, Rt.add = function(e, a) {
        return Lt(this, e, a, 1)
    }, Rt.subtract = function(e, a) {
        return Lt(this, e, a, -1)
    }, Rt.as = function(e) {
        if (!this.isValid()) return NaN;
        var a, t, s = this._milliseconds;
        if ("month" === (e = O(e)) || "year" === e) return a = this._days + s / 864e5, t = this._months + Yt(a), "month" === e ? t : t / 12;
        switch (a = this._days + Math.round(yt(this._months)), e) {
            case "week":
                return a / 7 + s / 6048e5;
            case "day":
                return a + s / 864e5;
            case "hour":
                return 24 * a + s / 36e5;
            case "minute":
                return 1440 * a + s / 6e4;
            case "second":
                return 86400 * a + s / 1e3;
            case "millisecond":
                return Math.floor(864e5 * a) + s;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, Rt.asMilliseconds = kt, Rt.asSeconds = pt, Rt.asMinutes = Dt, Rt.asHours = Tt, Rt.asDays = gt, Rt.asWeeks = wt, Rt.asMonths = vt, Rt.asYears = Ht, Rt.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN
    }, Rt._bubble = function() {
        var e, a, t, s, n, d = this._milliseconds,
            r = this._days,
            _ = this._months,
            i = this._data;
        return 0 <= d && 0 <= r && 0 <= _ || d <= 0 && r <= 0 && _ <= 0 || (d += 864e5 * ct(yt(_) + r), _ = r = 0), i.milliseconds = d % 1e3, e = T(d / 1e3), i.seconds = e % 60, a = T(e / 60), i.minutes = a % 60, t = T(a / 60), i.hours = t % 24, _ += n = T(Yt(r += T(t / 24))), r -= ct(yt(n)), s = T(_ / 12), _ %= 12, i.days = r, i.months = _, i.years = s, this
    }, Rt.clone = function() {
        return Ca(this)
    }, Rt.get = function(e) {
        return e = O(e), this.isValid() ? this[e + "s"]() : NaN
    }, Rt.milliseconds = bt, Rt.seconds = jt, Rt.minutes = xt, Rt.hours = Pt, Rt.days = Ot, Rt.weeks = function() {
        return T(this.days() / 7)
    }, Rt.months = Wt, Rt.years = Et, Rt.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, t, s, n, d, r, _, i, o, m, u, l = this.localeData(),
            M = (t = !e, s = l, n = Ca(a = this).abs(), d = At(n.as("s")), r = At(n.as("m")), _ = At(n.as("h")), i = At(n.as("d")), o = At(n.as("M")), m = At(n.as("y")), (u = d <= Ft.ss && ["s", d] || d < Ft.s && ["ss", d] || r <= 1 && ["m"] || r < Ft.m && ["mm", r] || _ <= 1 && ["h"] || _ < Ft.h && ["hh", _] || i <= 1 && ["d"] || i < Ft.d && ["dd", i] || o <= 1 && ["M"] || o < Ft.M && ["MM", o] || m <= 1 && ["y"] || ["yy", m])[2] = t, u[3] = 0 < +a, u[4] = s, function(e, a, t, s, n) {
                return n.relativeTime(a || 1, !!t, e, s)
            }.apply(null, u));
        return e && (M = l.pastFuture(+this, M)), l.postformat(M)
    }, Rt.toISOString = Nt, Rt.toString = Nt, Rt.toJSON = Nt, Rt.locale = qa, Rt.localeData = Xa, Rt.toIsoString = t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Nt), Rt.lang = Qa, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ie("x", se), ie("X", /[+-]?\d+(\.\d{1,3})?/), le("X", function(e, a, t) {
        t._d = new Date(1e3 * parseFloat(e, 10))
    }), le("x", function(e, a, t) {
        t._d = new Date(g(e))
    }), l.version = "2.23.0", e = Ha, l.fn = it, l.min = function() {
        return ja("isBefore", [].slice.call(arguments, 0))
    }, l.max = function() {
        return ja("isAfter", [].slice.call(arguments, 0))
    }, l.now = function() {
        return Date.now ? Date.now() : +new Date
    }, l.utc = c, l.unix = function(e) {
        return Ha(1e3 * e)
    }, l.months = function(e, a) {
        return lt(e, a, "months")
    }, l.isDate = u, l.locale = _a, l.invalid = f, l.duration = Ca, l.isMoment = D, l.weekdays = function(e, a, t) {
        return Mt(e, a, t, "weekdays")
    }, l.parseZone = function() {
        return Ha.apply(null, arguments).parseZone()
    }, l.localeData = oa, l.isDuration = Oa, l.monthsShort = function(e, a) {
        return lt(e, a, "monthsShort")
    }, l.weekdaysMin = function(e, a, t) {
        return Mt(e, a, t, "weekdaysMin")
    }, l.defineLocale = ia, l.updateLocale = function(e, a) {
        if (null != a) {
            var t, s, n = ta;
            null != (s = ra(e)) && (n = s._config), (t = new j(a = b(n, a))).parentLocale = sa[e], sa[e] = t, _a(e)
        } else null != sa[e] && (null != sa[e].parentLocale ? sa[e] = sa[e].parentLocale : null != sa[e] && delete sa[e]);
        return sa[e]
    }, l.locales = function() {
        return s(sa)
    }, l.weekdaysShort = function(e, a, t) {
        return Mt(e, a, t, "weekdaysShort")
    }, l.normalizeUnits = O, l.relativeTimeRounding = function(e) {
        return void 0 === e ? At : "function" == typeof e && (At = e, !0)
    }, l.relativeTimeThreshold = function(e, a) {
        return void 0 !== Ft[e] && (void 0 === a ? Ft[e] : (Ft[e] = a, "s" === e && (Ft.ss = a - 1), !0))
    }, l.calendarFormat = function(e, a) {
        var t = e.diff(a, "days", !0);
        return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
    }, l.prototype = it, l.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, l.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function(e) {
            return /^nm$/i.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[M\xf4re om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("ar-dz", {
        months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
        monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
        weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
        weekdaysShort: "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
        weekdaysMin: "\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 0,
            doy: 4
        }
    }), l.defineLocale("ar-kw", {
        months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
        monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
        weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
        weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
        weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 0,
            doy: 12
        }
    });
    var It = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        },
        Ct = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
        },
        Gt = {
            s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
            m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"],
            h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
            d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
            M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
            y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
        },
        Ut = function(r) {
            return function(e, a, t, s) {
                var n = Ct(e),
                    d = Gt[r][Ct(e)];
                return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e)
            }
        },
        Vt = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
    l.defineLocale("ar-ly", {
        months: Vt,
        monthsShort: Vt,
        weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
        weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
        weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200fM/\u200fYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function(e) {
            return "\u0645" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0635" : "\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0628\u0639\u062f %s",
            past: "\u0645\u0646\u0630 %s",
            s: Ut("s"),
            ss: Ut("s"),
            m: Ut("m"),
            mm: Ut("m"),
            h: Ut("h"),
            hh: Ut("h"),
            d: Ut("d"),
            dd: Ut("d"),
            M: Ut("M"),
            MM: Ut("M"),
            y: Ut("y"),
            yy: Ut("y")
        },
        preparse: function(e) {
            return e.replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return It[e]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), l.defineLocale("ar-ma", {
        months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
        monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
        weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
        weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
        weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Kt = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660"
        },
        $t = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0"
        };
    l.defineLocale("ar-sa", {
        months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
        monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
        weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
        weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
        weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function(e) {
            return "\u0645" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0635" : "\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        preparse: function(e) {
            return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                return $t[e]
            }).replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Kt[e]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("ar-tn", {
        months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
        monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
        weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
        weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
        weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Zt = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660"
        },
        Bt = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0"
        },
        qt = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
        },
        Qt = {
            s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
            m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"],
            h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
            d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
            M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
            y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
        },
        Xt = function(r) {
            return function(e, a, t, s) {
                var n = qt(e),
                    d = Qt[r][qt(e)];
                return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e)
            }
        },
        es = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
    l.defineLocale("ar", {
        months: es,
        monthsShort: es,
        weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
        weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
        weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200fM/\u200fYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function(e) {
            return "\u0645" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0635" : "\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0628\u0639\u062f %s",
            past: "\u0645\u0646\u0630 %s",
            s: Xt("s"),
            ss: Xt("s"),
            m: Xt("m"),
            mm: Xt("m"),
            h: Xt("h"),
            hh: Xt("h"),
            d: Xt("d"),
            dd: Xt("d"),
            M: Xt("M"),
            MM: Xt("M"),
            y: Xt("y"),
            yy: Xt("y")
        },
        preparse: function(e) {
            return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                return Bt[e]
            }).replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Zt[e]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var as = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-\xfcnc\xfc",
        4: "-\xfcnc\xfc",
        100: "-\xfcnc\xfc",
        6: "-nc\u0131",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-\u0131nc\u0131",
        90: "-\u0131nc\u0131"
    };
    function ts(e, a, t) {
        var s, n;
        return "m" === t ? a ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === t ? a ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : e + " " + (s = +e, n = {
            ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
            mm: a ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
            hh: a ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
            dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
            MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
            yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"
        }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2])
    }
    l.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),
        weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),
        weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bug\xfcn saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
            lastDay: "[d\xfcn\u0259n] LT",
            lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s \u0259vv\u0259l",
            s: "birne\xe7\u0259 saniy\u0259",
            ss: "%d saniy\u0259",
            m: "bir d\u0259qiq\u0259",
            mm: "%d d\u0259qiq\u0259",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\xfcn",
            dd: "%d g\xfcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
        },
        meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
        isPM: function(e) {
            return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015fam"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
        ordinal: function(e) {
            if (0 === e) return e + "-\u0131nc\u0131";
            var a = e % 10;
            return e + (as[a] || as[e % 100 - a] || as[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("be", {
        months: {
            format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),
            standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")
        },
        monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),
        weekdays: {
            format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
            standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
            isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
        },
        weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0433.",
            LLL: "D MMMM YYYY \u0433., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0433., HH:mm"
        },
        calendar: {
            sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
            nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
            lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
            nextWeek: function() {
                return "[\u0423] dddd [\u045e] LT"
            },
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u043f\u0440\u0430\u0437 %s",
            past: "%s \u0442\u0430\u043c\u0443",
            s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",
            m: ts,
            mm: ts,
            h: ts,
            hh: ts,
            d: "\u0434\u0437\u0435\u043d\u044c",
            dd: ts,
            M: "\u043c\u0435\u0441\u044f\u0446",
            MM: ts,
            y: "\u0433\u043e\u0434",
            yy: ts
        },
        meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
        isPM: function(e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u043d\u043e\u0447\u044b" : e < 12 ? "\u0440\u0430\u043d\u0456\u0446\u044b" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
        ordinal: function(e, a) {
            switch (a) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044b" : e + "-\u0456";
                case "D":
                    return e + "-\u0433\u0430";
                default:
                    return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("bg", {
        months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
        monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
        weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
        weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
        weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
            nextWeek: "dddd [\u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0441\u043b\u0435\u0434 %s",
            past: "\u043f\u0440\u0435\u0434\u0438 %s",
            s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            m: "\u043c\u0438\u043d\u0443\u0442\u0430",
            mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
            h: "\u0447\u0430\u0441",
            hh: "%d \u0447\u0430\u0441\u0430",
            d: "\u0434\u0435\u043d",
            dd: "%d \u0434\u043d\u0438",
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
            y: "\u0433\u043e\u0434\u0438\u043d\u0430",
            yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function(e) {
            var a = e % 10,
                t = e % 100;
            return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043d" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("bm", {
        months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),
        monthsShort: "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"),
        weekdays: "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"
        },
        calendar: {
            sameDay: "[Bi l\u025br\u025b] LT",
            nextDay: "[Sini l\u025br\u025b] LT",
            nextWeek: "dddd [don l\u025br\u025b] LT",
            lastDay: "[Kunu l\u025br\u025b] LT",
            lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s k\u0254n\u0254",
            past: "a b\u025b %s b\u0254",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "l\u025br\u025b kelen",
            hh: "l\u025br\u025b %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ss = {
            1: "\u09e7",
            2: "\u09e8",
            3: "\u09e9",
            4: "\u09ea",
            5: "\u09eb",
            6: "\u09ec",
            7: "\u09ed",
            8: "\u09ee",
            9: "\u09ef",
            0: "\u09e6"
        },
        ns = {
            "\u09e7": "1",
            "\u09e8": "2",
            "\u09e9": "3",
            "\u09ea": "4",
            "\u09eb": "5",
            "\u09ec": "6",
            "\u09ed": "7",
            "\u09ee": "8",
            "\u09ef": "9",
            "\u09e6": "0"
        };
    l.defineLocale("bn", {
        months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),
        monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),
        weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),
        weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
        weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
        longDateFormat: {
            LT: "A h:mm \u09b8\u09ae\u09df",
            LTS: "A h:mm:ss \u09b8\u09ae\u09df",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"
        },
        calendar: {
            sameDay: "[\u0986\u099c] LT",
            nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT",
            lastWeek: "[\u0997\u09a4] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u09aa\u09b0\u09c7",
            past: "%s \u0986\u0997\u09c7",
            s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
            mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
            h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
            hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
            d: "\u098f\u0995 \u09a6\u09bf\u09a8",
            dd: "%d \u09a6\u09bf\u09a8",
            M: "\u098f\u0995 \u09ae\u09be\u09b8",
            MM: "%d \u09ae\u09be\u09b8",
            y: "\u098f\u0995 \u09ac\u099b\u09b0",
            yy: "%d \u09ac\u099b\u09b0"
        },
        preparse: function(e) {
            return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(e) {
                return ns[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return ss[e]
            })
        },
        meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u09b0\u09be\u09a4" === a && 4 <= e || "\u09a6\u09c1\u09aa\u09c1\u09b0" === a && e < 5 || "\u09ac\u09bf\u0995\u09be\u09b2" === a ? e + 12 : e
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u09b0\u09be\u09a4" : e < 10 ? "\u09b8\u0995\u09be\u09b2" : e < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : e < 20 ? "\u09ac\u09bf\u0995\u09be\u09b2" : "\u09b0\u09be\u09a4"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var ds = {
            1: "\u0f21",
            2: "\u0f22",
            3: "\u0f23",
            4: "\u0f24",
            5: "\u0f25",
            6: "\u0f26",
            7: "\u0f27",
            8: "\u0f28",
            9: "\u0f29",
            0: "\u0f20"
        },
        rs = {
            "\u0f21": "1",
            "\u0f22": "2",
            "\u0f23": "3",
            "\u0f24": "4",
            "\u0f25": "5",
            "\u0f26": "6",
            "\u0f27": "7",
            "\u0f28": "8",
            "\u0f29": "9",
            "\u0f20": "0"
        };
    function _s(e, a, t) {
        var s, n, d;
        return e + " " + (s = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        }[t], 2 !== e ? s : void 0 !== (d = {
            m: "v",
            b: "v",
            d: "z"
        })[(n = s).charAt(0)] ? d[n.charAt(0)] + n.substring(1) : n)
    }
    function is(e, a, t) {
        var s = e + " ";
        switch (t) {
            case "ss":
                return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return a ? "jedna minuta" : "jedne minute";
            case "mm":
                return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return a ? "jedan sat" : "jednog sata";
            case "hh":
                return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return s += 1 === e ? "dan" : "dana";
            case "MM":
                return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }
    l.defineLocale("bo", {
        months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
        monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
        weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
        weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
        weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",
            nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",
            nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",
            lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT",
            lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0f63\u0f0b",
            past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63",
            s: "\u0f63\u0f58\u0f0b\u0f66\u0f44",
            ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",
            m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",
            mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58",
            h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",
            hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",
            d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",
            dd: "%d \u0f49\u0f72\u0f53\u0f0b",
            M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",
            MM: "%d \u0f5f\u0fb3\u0f0b\u0f56",
            y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",
            yy: "%d \u0f63\u0f7c"
        },
        preparse: function(e) {
            return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(e) {
                return rs[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return ds[e]
            })
        },
        meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === a && 4 <= e || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === a && e < 5 || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === a ? e + 12 : e
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : e < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : e < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : e < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondenno\xf9",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: _s,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: _s,
            M: "ur miz",
            MM: _s,
            y: "ur bloaz",
            yy: function(e) {
                switch (function e(a) {
                    return 9 < a ? e(a % 10) : a
                }(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
        ordinal: function(e) {
            return e + (1 === e ? "a\xf1" : "vet")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro\u0161lu] dddd [u] LT";
                    case 6:
                        return "[pro\u0161le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro\u0161li] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: is,
            m: is,
            mm: is,
            h: is,
            hh: is,
            d: "dan",
            dd: is,
            M: "mjesec",
            MM: is,
            y: "godinu",
            yy: is
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("ca", {
        months: {
            standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextDay: function() {
                return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastDay: function() {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "d'aqu\xed %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
        ordinal: function(e, a) {
            var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8";
            return "w" !== a && "W" !== a || (t = "a"), e + t
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var os = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
        ms = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");
    function us(e) {
        return 1 < e && e < 5 && 1 != ~~(e / 10)
    }
    function ls(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
                return a || s ? n + (us(e) ? "sekundy" : "sekund") : n + "sekundami";
                break;
            case "m":
                return a ? "minuta" : s ? "minutu" : "minutou";
            case "mm":
                return a || s ? n + (us(e) ? "minuty" : "minut") : n + "minutami";
                break;
            case "h":
                return a ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
                return a || s ? n + (us(e) ? "hodiny" : "hodin") : n + "hodinami";
                break;
            case "d":
                return a || s ? "den" : "dnem";
            case "dd":
                return a || s ? n + (us(e) ? "dny" : "dn\xed") : n + "dny";
                break;
            case "M":
                return a || s ? "m\u011bs\xedc" : "m\u011bs\xedcem";
            case "MM":
                return a || s ? n + (us(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : n + "m\u011bs\xedci";
                break;
            case "y":
                return a || s ? "rok" : "rokem";
            case "yy":
                return a || s ? n + (us(e) ? "roky" : "let") : n + "lety";
                break
        }
    }
    function Ms(e, a, t, s) {
        var n = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return a ? n[t][0] : n[t][1]
    }
    function hs(e, a, t, s) {
        var n = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return a ? n[t][0] : n[t][1]
    }
    function Ls(e, a, t, s) {
        var n = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return a ? n[t][0] : n[t][1]
    }
    l.defineLocale("cs", {
        months: os,
        monthsShort: ms,
        monthsParse: function(e, a) {
            var t, s = [];
            for (t = 0; t < 12; t++) s[t] = new RegExp("^" + e[t] + "$|^" + a[t] + "$", "i");
            return s
        }(os, ms),
        shortMonthsParse: function(e) {
            var a, t = [];
            for (a = 0; a < 12; a++) t[a] = new RegExp("^" + e[a] + "$", "i");
            return t
        }(ms),
        longMonthsParse: function(e) {
            var a, t = [];
            for (a = 0; a < 12; a++) t[a] = new RegExp("^" + e[a] + "$", "i");
            return t
        }(os),
        weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),
        weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
        weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[z\xedtra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v ned\u011bli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve st\u0159edu v] LT";
                    case 4:
                        return "[ve \u010dtvrtek v] LT";
                    case 5:
                        return "[v p\xe1tek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                }
            },
            lastDay: "[v\u010dera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minulou ned\u011bli v] LT";
                    case 1:
                    case 2:
                        return "[minul\xe9] dddd [v] LT";
                    case 3:
                        return "[minulou st\u0159edu v] LT";
                    case 4:
                    case 5:
                        return "[minul\xfd] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "p\u0159ed %s",
            s: ls,
            ss: ls,
            m: ls,
            mm: ls,
            h: ls,
            hh: ls,
            d: ls,
            dd: ls,
            M: ls,
            MM: ls,
            y: ls,
            yy: ls
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("cv", {
        months: "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),
        monthsShort: "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),
        weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),
        weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"),
        weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",
            LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",
            LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"
        },
        calendar: {
            sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d")
            },
            past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
            s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
            ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
            m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",
            mm: "%d \u043c\u0438\u043d\u0443\u0442",
            h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",
            hh: "%d \u0441\u0435\u0445\u0435\u0442",
            d: "\u043f\u04d7\u0440 \u043a\u0443\u043d",
            dd: "%d \u043a\u0443\u043d",
            M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",
            MM: "%d \u0443\u0439\u04d1\u0445",
            y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b",
            yy: "%d \u04ab\u0443\u043b"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
        ordinal: "%d-\u043c\u04d7\u0448",
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn \xf4l",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(e) {
            var a = "";
            return 20 < e ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + a
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
        weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
        weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "p\xe5 dddd [kl.] LT",
            lastDay: "[i g\xe5r kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "f\xe5 sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en m\xe5ned",
            MM: "%d m\xe5neder",
            y: "et \xe5r",
            yy: "%d \xe5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("de-at", {
        months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: Ms,
            mm: "%d Minuten",
            h: Ms,
            hh: "%d Stunden",
            d: Ms,
            dd: Ms,
            M: Ms,
            MM: Ms,
            y: Ms,
            yy: Ms
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("de-ch", {
        months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: hs,
            mm: "%d Minuten",
            h: hs,
            hh: "%d Stunden",
            d: hs,
            dd: hs,
            M: hs,
            MM: hs,
            y: hs,
            yy: hs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("de", {
        months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: Ls,
            mm: "%d Minuten",
            h: Ls,
            hh: "%d Stunden",
            d: Ls,
            dd: Ls,
            M: Ls,
            MM: Ls,
            y: Ls,
            yy: Ls
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var cs = ["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9", "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9", "\u0789\u07a7\u0783\u07a8\u0797\u07aa", "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa", "\u0789\u07ad", "\u0796\u07ab\u0782\u07b0", "\u0796\u07aa\u078d\u07a6\u0787\u07a8", "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa", "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa", "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],
        Ys = ["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6", "\u0780\u07af\u0789\u07a6", "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6", "\u0784\u07aa\u078b\u07a6", "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8", "\u0780\u07aa\u0786\u07aa\u0783\u07aa", "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];
    l.defineLocale("dv", {
        months: cs,
        monthsShort: cs,
        weekdays: Ys,
        weekdaysShort: Ys,
        weekdaysMin: "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0789\u0786|\u0789\u078a/,
        isPM: function(e) {
            return "\u0789\u078a" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0789\u0786" : "\u0789\u078a"
        },
        calendar: {
            sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",
            nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",
            nextWeek: "dddd LT",
            lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",
            lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",
            past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",
            s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",
            ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",
            m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",
            mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",
            h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",
            hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",
            d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",
            dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",
            M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0",
            MM: "\u0789\u07a6\u0790\u07b0 %d",
            y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",
            yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"
        },
        preparse: function(e) {
            return e.replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/,/g, "\u060c")
        },
        week: {
            dow: 7,
            doy: 12
        }
    }), l.defineLocale("el", {
        monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),
        monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),
        months: function(e, a) {
            return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
        },
        monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),
        weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),
        weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),
        weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),
        meridiem: function(e, a, t) {
            return 11 < e ? t ? "\u03bc\u03bc" : "\u039c\u039c" : t ? "\u03c0\u03bc" : "\u03a0\u039c"
        },
        isPM: function(e) {
            return "\u03bc" === (e + "").toLowerCase()[0]
        },
        meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
            sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",
            nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 6:
                        return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                    default:
                        return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"
                }
            },
            sameElse: "L"
        },
        calendar: function(e, a) {
            var t = this._calendarEl[e],
                s = a && a.hours();
            return S(t) && (t = t.apply(a)), t.replace("{}", s % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2")
        },
        relativeTime: {
            future: "\u03c3\u03b5 %s",
            past: "%s \u03c0\u03c1\u03b9\u03bd",
            s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
            ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
            m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
            mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
            h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
            hh: "%d \u03ce\u03c1\u03b5\u03c2",
            d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
            dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
            M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
            MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
            y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",
            yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
        ordinal: "%d\u03b7",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        }
    }), l.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("en-il", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        }
    }), l.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"),
        weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"),
        weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-a de] MMMM, YYYY",
            LLL: "D[-a de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(e) {
            return "p" === e.charAt(0).toLowerCase()
        },
        meridiem: function(e, a, t) {
            return 11 < e ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M."
        },
        calendar: {
            sameDay: "[Hodia\u016d je] LT",
            nextDay: "[Morga\u016d je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hiera\u016d je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "post %s",
            past: "anta\u016d %s",
            s: "sekundoj",
            ss: "%d sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var ys = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        fs = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        ks = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        ps = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    l.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(e, a) {
            return e ? /-MMM-/.test(a) ? fs[e.month()] : ys[e.month()] : ys
        },
        monthsRegex: ps,
        monthsShortRegex: ps,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: ks,
        longMonthsParse: ks,
        shortMonthsParse: ks,
        weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
        weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ds = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        Ts = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    l.defineLocale("es-us", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(e, a) {
            return e ? /-MMM-/.test(a) ? Ts[e.month()] : Ds[e.month()] : Ds
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
        weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "MMMM [de] D [de] YYYY",
            LLL: "MMMM [de] D [de] YYYY h:mm A",
            LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 0,
            doy: 6
        }
    });
    var gs = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        ws = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        vs = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        Hs = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    function Ss(e, a, t, s) {
        var n = {
            s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
            ss: [e + "sekundi", e + "sekundit"],
            m: ["\xfche minuti", "\xfcks minut"],
            mm: [e + " minuti", e + " minutit"],
            h: ["\xfche tunni", "tund aega", "\xfcks tund"],
            hh: [e + " tunni", e + " tundi"],
            d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
            M: ["kuu aja", "kuu aega", "\xfcks kuu"],
            MM: [e + " kuu", e + " kuud"],
            y: ["\xfche aasta", "aasta", "\xfcks aasta"],
            yy: [e + " aasta", e + " aastat"]
        };
        return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1]
    }
    l.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(e, a) {
            return e ? /-MMM-/.test(a) ? ws[e.month()] : gs[e.month()] : gs
        },
        monthsRegex: Hs,
        monthsShortRegex: Hs,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: vs,
        longMonthsParse: vs,
        shortMonthsParse: vs,
        weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
        weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("et", {
        months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[T\xe4na,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[J\xe4rgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s p\xe4rast",
            past: "%s tagasi",
            s: Ss,
            ss: Ss,
            m: Ss,
            mm: Ss,
            h: Ss,
            hh: Ss,
            d: Ss,
            dd: "%d p\xe4eva",
            M: Ss,
            MM: Ss,
            y: Ss,
            yy: Ss
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: !0,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var bs = {
            1: "\u06f1",
            2: "\u06f2",
            3: "\u06f3",
            4: "\u06f4",
            5: "\u06f5",
            6: "\u06f6",
            7: "\u06f7",
            8: "\u06f8",
            9: "\u06f9",
            0: "\u06f0"
        },
        js = {
            "\u06f1": "1",
            "\u06f2": "2",
            "\u06f3": "3",
            "\u06f4": "4",
            "\u06f5": "5",
            "\u06f6": "6",
            "\u06f7": "7",
            "\u06f8": "8",
            "\u06f9": "9",
            "\u06f0": "0"
        };
    l.defineLocale("fa", {
        months: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
        monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
        weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
        weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
        weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
        isPM: function(e) {
            return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"
        },
        calendar: {
            sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
            nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",
            nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT",
            lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
            lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u062f\u0631 %s",
            past: "%s \u067e\u06cc\u0634",
            s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",
            ss: "\u062b\u0627\u0646\u06cc\u0647 d%",
            m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",
            mm: "%d \u062f\u0642\u06cc\u0642\u0647",
            h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a",
            hh: "%d \u0633\u0627\u0639\u062a",
            d: "\u06cc\u06a9 \u0631\u0648\u0632",
            dd: "%d \u0631\u0648\u0632",
            M: "\u06cc\u06a9 \u0645\u0627\u0647",
            MM: "%d \u0645\u0627\u0647",
            y: "\u06cc\u06a9 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644"
        },
        preparse: function(e) {
            return e.replace(/[\u06f0-\u06f9]/g, function(e) {
                return js[e]
            }).replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return bs[e]
            }).replace(/,/g, "\u060c")
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
        ordinal: "%d\u0645",
        week: {
            dow: 6,
            doy: 12
        }
    });
    var xs = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
        Ps = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", xs[7], xs[8], xs[9]];
    function Os(e, a, t, s) {
        var n, d, r = "";
        switch (t) {
            case "s":
                return s ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                return s ? "sekunnin" : "sekuntia";
            case "m":
                return s ? "minuutin" : "minuutti";
            case "mm":
                r = s ? "minuutin" : "minuuttia";
                break;
            case "h":
                return s ? "tunnin" : "tunti";
            case "hh":
                r = s ? "tunnin" : "tuntia";
                break;
            case "d":
                return s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
            case "dd":
                r = s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
                break;
            case "M":
                return s ? "kuukauden" : "kuukausi";
            case "MM":
                r = s ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return s ? "vuoden" : "vuosi";
            case "yy":
                r = s ? "vuoden" : "vuotta";
                break
        }
        return d = s, r = ((n = e) < 10 ? d ? Ps[n] : xs[n] : n) + " " + r
    }
    l.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s p\xe4\xe4st\xe4",
            past: "%s sitten",
            s: Os,
            ss: Os,
            m: Os,
            mm: Os,
            h: Os,
            hh: Os,
            d: Os,
            dd: Os,
            M: Os,
            MM: Os,
            y: Os,
            yy: Os
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("fo", {
        months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
        weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\xcd dag kl.] LT",
            nextDay: "[\xcd morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\xcd gj\xe1r kl.] LT",
            lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "um %s",
            past: "%s s\xed\xf0ani",
            s: "f\xe1 sekund",
            ss: "%d sekundir",
            m: "ein minutt",
            mm: "%d minuttir",
            h: "ein t\xedmi",
            hh: "%d t\xedmar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein m\xe1na\xf0i",
            MM: "%d m\xe1na\xf0ir",
            y: "eitt \xe1r",
            yy: "%d \xe1r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("fr-ca", {
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd\u2019hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e, a) {
            switch (a) {
                default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                        case "W":
                        return e + (1 === e ? "re" : "e")
            }
        }
    }), l.defineLocale("fr-ch", {
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd\u2019hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e, a) {
            switch (a) {
                default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                        case "W":
                        return e + (1 === e ? "re" : "e")
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("fr", {
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd\u2019hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(e, a) {
            switch (a) {
                case "D":
                    return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ws = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        Es = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    l.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function(e, a) {
            return e ? /-MMM-/.test(a) ? Es[e.month()] : Ws[e.month()] : Ws
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[\xf4fr\xfbne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            ss: "%d sekonden",
            m: "ien min\xfat",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    function As(e, a, t, s) {
        var n = {
            s: ["thodde secondanim", "thodde second"],
            ss: [e + " secondanim", e + " second"],
            m: ["eka mintan", "ek minute"],
            mm: [e + " mintanim", e + " mintam"],
            h: ["eka horan", "ek hor"],
            hh: [e + " horanim", e + " horam"],
            d: ["eka disan", "ek dis"],
            dd: [e + " disanim", e + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [e + " mhoineanim", e + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [e + " vorsanim", e + " vorsam"]
        };
        return a ? n[t][0] : n[t][1]
    }
    l.defineLocale("gd", {
        months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"],
        monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"],
        monthsParseExact: !0,
        weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"],
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-m\xe0ireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-d\xe8 aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            ss: "%d diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "m\xecos",
            MM: "%d m\xecosan",
            y: "bliadhna",
            yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(e) {
            return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),
        weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),
        weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
            },
            nextDay: function() {
                return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
            },
            nextWeek: function() {
                return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
            },
            lastDay: function() {
                return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT"
            },
            lastWeek: function() {
                return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return 0 === e.indexOf("un") ? "n" + e : "en " + e
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("gom-latn", {
        months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Ieta to] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fatlo] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s",
            past: "%s adim",
            s: As,
            ss: As,
            m: As,
            mm: As,
            h: As,
            hh: As,
            d: As,
            dd: As,
            M: As,
            MM: As,
            y: As,
            yy: As
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function(e, a) {
            switch (a) {
                case "D":
                    return e + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return e
            }
        },
        week: {
            dow: 1,
            doy: 4
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "rati" === a ? e < 4 ? e : e + 12 : "sokalli" === a ? e : "donparam" === a ? 12 < e ? e : e + 12 : "sanje" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
        }
    });
    var Fs = {
            1: "\u0ae7",
            2: "\u0ae8",
            3: "\u0ae9",
            4: "\u0aea",
            5: "\u0aeb",
            6: "\u0aec",
            7: "\u0aed",
            8: "\u0aee",
            9: "\u0aef",
            0: "\u0ae6"
        },
        zs = {
            "\u0ae7": "1",
            "\u0ae8": "2",
            "\u0ae9": "3",
            "\u0aea": "4",
            "\u0aeb": "5",
            "\u0aec": "6",
            "\u0aed": "7",
            "\u0aee": "8",
            "\u0aef": "9",
            "\u0ae6": "0"
        };
    l.defineLocale("gu", {
        months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"),
        monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"),
        weekdaysShort: "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"),
        weekdaysMin: "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"),
        longDateFormat: {
            LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"
        },
        calendar: {
            sameDay: "[\u0a86\u0a9c] LT",
            nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",
            lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0aae\u0abe",
            past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe",
            s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",
            ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",
            m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",
            mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",
            h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",
            hh: "%d \u0a95\u0ab2\u0abe\u0a95",
            d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",
            dd: "%d \u0aa6\u0abf\u0ab5\u0ab8",
            M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",
            MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",
            y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",
            yy: "%d \u0ab5\u0ab0\u0acd\u0ab7"
        },
        preparse: function(e) {
            return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function(e) {
                return zs[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Fs[e]
            })
        },
        meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0ab0\u0abe\u0aa4" === a ? e < 4 ? e : e + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === a ? e : "\u0aac\u0aaa\u0acb\u0ab0" === a ? 10 <= e ? e : e + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0ab0\u0abe\u0aa4" : e < 10 ? "\u0ab8\u0ab5\u0abe\u0ab0" : e < 17 ? "\u0aac\u0aaa\u0acb\u0ab0" : e < 20 ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("he", {
        months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),
        monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),
        weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),
        weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),
        weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [\u05d1]MMMM YYYY",
            LLL: "D [\u05d1]MMMM YYYY HH:mm",
            LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",
            nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT",
            nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT",
            lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",
            lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u05d1\u05e2\u05d5\u05d3 %s",
            past: "\u05dc\u05e4\u05e0\u05d9 %s",
            s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
            ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea",
            m: "\u05d3\u05e7\u05d4",
            mm: "%d \u05d3\u05e7\u05d5\u05ea",
            h: "\u05e9\u05e2\u05d4",
            hh: function(e) {
                return 2 === e ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : e + " \u05e9\u05e2\u05d5\u05ea"
            },
            d: "\u05d9\u05d5\u05dd",
            dd: function(e) {
                return 2 === e ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : e + " \u05d9\u05de\u05d9\u05dd"
            },
            M: "\u05d7\u05d5\u05d3\u05e9",
            MM: function(e) {
                return 2 === e ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : e + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"
            },
            y: "\u05e9\u05e0\u05d4",
            yy: function(e) {
                return 2 === e ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : e % 10 == 0 && 10 !== e ? e + " \u05e9\u05e0\u05d4" : e + " \u05e9\u05e0\u05d9\u05dd"
            }
        },
        meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
        isPM: function(e) {
            return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 5 ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : e < 10 ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : e < 12 ? t ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : e < 18 ? t ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : "\u05d1\u05e2\u05e8\u05d1"
        }
    });
    var Js = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        },
        Ns = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
    function Rs(e, a, t) {
        var s = e + " ";
        switch (t) {
            case "ss":
                return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return a ? "jedna minuta" : "jedne minute";
            case "mm":
                return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return a ? "jedan sat" : "jednog sata";
            case "hh":
                return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return s += 1 === e ? "dan" : "dana";
            case "MM":
                return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }
    l.defineLocale("hi", {
        months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),
        monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
        weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
        weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
        longDateFormat: {
            LT: "A h:mm \u092c\u091c\u0947",
            LTS: "A h:mm:ss \u092c\u091c\u0947",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"
        },
        calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u0915\u0932] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0915\u0932] LT",
            lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u092e\u0947\u0902",
            past: "%s \u092a\u0939\u0932\u0947",
            s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
            ss: "%d \u0938\u0947\u0915\u0902\u0921",
            m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
            mm: "%d \u092e\u093f\u0928\u091f",
            h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
            hh: "%d \u0918\u0902\u091f\u0947",
            d: "\u090f\u0915 \u0926\u093f\u0928",
            dd: "%d \u0926\u093f\u0928",
            M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
            MM: "%d \u092e\u0939\u0940\u0928\u0947",
            y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
            yy: "%d \u0935\u0930\u094d\u0937"
        },
        preparse: function(e) {
            return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                return Ns[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Js[e]
            })
        },
        meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0930\u093e\u0924" === a ? e < 4 ? e : e + 12 : "\u0938\u0941\u092c\u0939" === a ? e : "\u0926\u094b\u092a\u0939\u0930" === a ? 10 <= e ? e : e + 12 : "\u0936\u093e\u092e" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0930\u093e\u0924" : e < 10 ? "\u0938\u0941\u092c\u0939" : e < 17 ? "\u0926\u094b\u092a\u0939\u0930" : e < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("hr", {
        months: {
            format: "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro\u0161lu] dddd [u] LT";
                    case 6:
                        return "[pro\u0161le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro\u0161li] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: Rs,
            m: Rs,
            mm: Rs,
            h: Rs,
            hh: Rs,
            d: "dan",
            dd: Rs,
            M: "mjesec",
            MM: Rs,
            y: "godinu",
            yy: Rs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Is = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");
    function Cs(e, a, t, s) {
        var n = e;
        switch (t) {
            case "s":
                return s || a ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
            case "ss":
                return n + (s || a) ? " m\xe1sodperc" : " m\xe1sodperce";
            case "m":
                return "egy" + (s || a ? " perc" : " perce");
            case "mm":
                return n + (s || a ? " perc" : " perce");
            case "h":
                return "egy" + (s || a ? " \xf3ra" : " \xf3r\xe1ja");
            case "hh":
                return n + (s || a ? " \xf3ra" : " \xf3r\xe1ja");
            case "d":
                return "egy" + (s || a ? " nap" : " napja");
            case "dd":
                return n + (s || a ? " nap" : " napja");
            case "M":
                return "egy" + (s || a ? " h\xf3nap" : " h\xf3napja");
            case "MM":
                return n + (s || a ? " h\xf3nap" : " h\xf3napja");
            case "y":
                return "egy" + (s || a ? " \xe9v" : " \xe9ve");
            case "yy":
                return n + (s || a ? " \xe9v" : " \xe9ve")
        }
        return ""
    }
    function Gs(e) {
        return (e ? "" : "[m\xfalt] ") + "[" + Is[this.day()] + "] LT[-kor]"
    }
    function Us(e) {
        return e % 100 == 11 || e % 10 != 1
    }
    function Vs(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
            case "ss":
                return Us(e) ? n + (a || s ? "sek\xfandur" : "sek\xfandum") : n + "sek\xfanda";
            case "m":
                return a ? "m\xedn\xfata" : "m\xedn\xfatu";
            case "mm":
                return Us(e) ? n + (a || s ? "m\xedn\xfatur" : "m\xedn\xfatum") : a ? n + "m\xedn\xfata" : n + "m\xedn\xfatu";
            case "hh":
                return Us(e) ? n + (a || s ? "klukkustundir" : "klukkustundum") : n + "klukkustund";
            case "d":
                return a ? "dagur" : s ? "dag" : "degi";
            case "dd":
                return Us(e) ? a ? n + "dagar" : n + (s ? "daga" : "d\xf6gum") : a ? n + "dagur" : n + (s ? "dag" : "degi");
            case "M":
                return a ? "m\xe1nu\xf0ur" : s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
            case "MM":
                return Us(e) ? a ? n + "m\xe1nu\xf0ir" : n + (s ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : a ? n + "m\xe1nu\xf0ur" : n + (s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
            case "y":
                return a || s ? "\xe1r" : "\xe1ri";
            case "yy":
                return Us(e) ? n + (a || s ? "\xe1r" : "\xe1rum") : n + (a || s ? "\xe1r" : "\xe1ri")
        }
    }
    l.defineLocale("hu", {
        months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
        monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
        weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function(e) {
            return "u" === e.charAt(1).toLowerCase()
        },
        meridiem: function(e, a, t) {
            return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU"
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
                return Gs.call(this, !0)
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
                return Gs.call(this, !1)
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s m\xfalva",
            past: "%s",
            s: Cs,
            ss: Cs,
            m: Cs,
            mm: Cs,
            h: Cs,
            hh: Cs,
            d: Cs,
            dd: Cs,
            M: Cs,
            MM: Cs,
            y: Cs,
            yy: Cs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("hy-am", {
        months: {
            format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"),
            standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_")
        },
        monthsShort: "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),
        weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),
        weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
        weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0569.",
            LLL: "D MMMM YYYY \u0569., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0569., HH:mm"
        },
        calendar: {
            sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT",
            nextDay: "[\u057e\u0561\u0572\u0568] LT",
            lastDay: "[\u0565\u0580\u0565\u056f] LT",
            nextWeek: function() {
                return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
            },
            lastWeek: function() {
                return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0570\u0565\u057f\u0578",
            past: "%s \u0561\u057c\u0561\u057b",
            s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
            ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
            m: "\u0580\u0578\u057a\u0565",
            mm: "%d \u0580\u0578\u057a\u0565",
            h: "\u056a\u0561\u0574",
            hh: "%d \u056a\u0561\u0574",
            d: "\u0585\u0580",
            dd: "%d \u0585\u0580",
            M: "\u0561\u0574\u056b\u057d",
            MM: "%d \u0561\u0574\u056b\u057d",
            y: "\u057f\u0561\u0580\u056b",
            yy: "%d \u057f\u0561\u0580\u056b"
        },
        meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
        isPM: function(e) {
            return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)
        },
        meridiem: function(e) {
            return e < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : e < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
        ordinal: function(e, a) {
            switch (a) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === e ? e + "-\u056b\u0576" : e + "-\u0580\u0564";
                default:
                    return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "pagi" === a ? e : "siang" === a ? 11 <= e ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("is", {
        months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),
        weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),
        weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
        weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
            sameDay: "[\xed dag kl.] LT",
            nextDay: "[\xe1 morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\xed g\xe6r kl.] LT",
            lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s s\xed\xf0an",
            s: Vs,
            ss: Vs,
            m: Vs,
            mm: Vs,
            h: "klukkustund",
            hh: Vs,
            d: Vs,
            dd: Vs,
            M: Vs,
            MM: Vs,
            y: Vs,
            yy: Vs
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("ja", {
        months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
        weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"
        },
        meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
        isPM: function(e) {
            return "\u5348\u5f8c" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c"
        },
        calendar: {
            sameDay: "[\u4eca\u65e5] LT",
            nextDay: "[\u660e\u65e5] LT",
            nextWeek: function(e) {
                return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT"
            },
            lastDay: "[\u6628\u65e5] LT",
            lastWeek: function(e) {
                return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT"
            },
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                default:
                    return e
            }
        },
        relativeTime: {
            future: "%s\u5f8c",
            past: "%s\u524d",
            s: "\u6570\u79d2",
            ss: "%d\u79d2",
            m: "1\u5206",
            mm: "%d\u5206",
            h: "1\u6642\u9593",
            hh: "%d\u6642\u9593",
            d: "1\u65e5",
            dd: "%d\u65e5",
            M: "1\u30f6\u6708",
            MM: "%d\u30f6\u6708",
            y: "1\u5e74",
            yy: "%d\u5e74"
        }
    }), l.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "enjing" === a ? e : "siyang" === a ? 11 <= e ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
        },
        calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("ka", {
        months: {
            standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),
            format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_")
        },
        monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),
        weekdays: {
            standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),
            format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"),
            isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
        },
        weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),
        weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",
            nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",
            lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",
            nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",
            lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10e8\u10d8") : e + "\u10e8\u10d8"
            },
            past: function(e) {
                return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0
            },
            s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",
            ss: "%d \u10ec\u10d0\u10db\u10d8",
            m: "\u10ec\u10e3\u10d7\u10d8",
            mm: "%d \u10ec\u10e3\u10d7\u10d8",
            h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
            hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8",
            d: "\u10d3\u10e6\u10d4",
            dd: "%d \u10d3\u10e6\u10d4",
            M: "\u10d7\u10d5\u10d4",
            MM: "%d \u10d7\u10d5\u10d4",
            y: "\u10ec\u10d4\u10da\u10d8",
            yy: "%d \u10ec\u10d4\u10da\u10d8"
        },
        dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
        ordinal: function(e) {
            return 0 === e ? e : 1 === e ? e + "-\u10da\u10d8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10db\u10d4-" + e : e + "-\u10d4"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Ks = {
        0: "-\u0448\u0456",
        1: "-\u0448\u0456",
        2: "-\u0448\u0456",
        3: "-\u0448\u0456",
        4: "-\u0448\u0456",
        5: "-\u0448\u0456",
        6: "-\u0448\u044b",
        7: "-\u0448\u0456",
        8: "-\u0448\u0456",
        9: "-\u0448\u044b",
        10: "-\u0448\u044b",
        20: "-\u0448\u044b",
        30: "-\u0448\u044b",
        40: "-\u0448\u044b",
        50: "-\u0448\u0456",
        60: "-\u0448\u044b",
        70: "-\u0448\u0456",
        80: "-\u0448\u0456",
        90: "-\u0448\u044b",
        100: "-\u0448\u0456"
    };
    l.defineLocale("kk", {
        months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),
        monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),
        weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),
        weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),
        weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",
            nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",
            nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
            lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
            lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0456\u0448\u0456\u043d\u0434\u0435",
            past: "%s \u0431\u04b1\u0440\u044b\u043d",
            s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
            m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",
            mm: "%d \u043c\u0438\u043d\u0443\u0442",
            h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
            hh: "%d \u0441\u0430\u0493\u0430\u0442",
            d: "\u0431\u0456\u0440 \u043a\u04af\u043d",
            dd: "%d \u043a\u04af\u043d",
            M: "\u0431\u0456\u0440 \u0430\u0439",
            MM: "%d \u0430\u0439",
            y: "\u0431\u0456\u0440 \u0436\u044b\u043b",
            yy: "%d \u0436\u044b\u043b"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
        ordinal: function(e) {
            return e + (Ks[e] || Ks[e % 10] || Ks[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var $s = {
            1: "\u17e1",
            2: "\u17e2",
            3: "\u17e3",
            4: "\u17e4",
            5: "\u17e5",
            6: "\u17e6",
            7: "\u17e7",
            8: "\u17e8",
            9: "\u17e9",
            0: "\u17e0"
        },
        Zs = {
            "\u17e1": "1",
            "\u17e2": "2",
            "\u17e3": "3",
            "\u17e4": "4",
            "\u17e5": "5",
            "\u17e6": "6",
            "\u17e7": "7",
            "\u17e8": "8",
            "\u17e9": "9",
            "\u17e0": "0"
        };
    l.defineLocale("km", {
        months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
        monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
        weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
        weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
        weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
        isPM: function(e) {
            return "\u179b\u17d2\u1784\u17b6\u1785" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785"
        },
        calendar: {
            sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",
            nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",
            nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT",
            lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",
            lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u1791\u17c0\u178f",
            past: "%s\u1798\u17bb\u1793",
            s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
            ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",
            m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
            mm: "%d \u1793\u17b6\u1791\u17b8",
            h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
            hh: "%d \u1798\u17c9\u17c4\u1784",
            d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
            dd: "%d \u1790\u17d2\u1784\u17c3",
            M: "\u1798\u17bd\u1799\u1781\u17c2",
            MM: "%d \u1781\u17c2",
            y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
            yy: "%d \u1786\u17d2\u1793\u17b6\u17c6"
        },
        dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
        ordinal: "\u1791\u17b8%d",
        preparse: function(e) {
            return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function(e) {
                return Zs[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return $s[e]
            })
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Bs = {
            1: "\u0ce7",
            2: "\u0ce8",
            3: "\u0ce9",
            4: "\u0cea",
            5: "\u0ceb",
            6: "\u0cec",
            7: "\u0ced",
            8: "\u0cee",
            9: "\u0cef",
            0: "\u0ce6"
        },
        qs = {
            "\u0ce7": "1",
            "\u0ce8": "2",
            "\u0ce9": "3",
            "\u0cea": "4",
            "\u0ceb": "5",
            "\u0cec": "6",
            "\u0ced": "7",
            "\u0cee": "8",
            "\u0cef": "9",
            "\u0ce6": "0"
        };
    l.defineLocale("kn", {
        months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"),
        monthsShort: "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"),
        weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"),
        weekdaysMin: "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT",
            nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",
            lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0ca8\u0c82\u0ca4\u0cb0",
            past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",
            s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",
            ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",
            m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
            mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
            h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",
            hh: "%d \u0c97\u0c82\u0c9f\u0cc6",
            d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",
            dd: "%d \u0ca6\u0cbf\u0ca8",
            M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
            MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
            y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",
            yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7"
        },
        preparse: function(e) {
            return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function(e) {
                return qs[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Bs[e]
            })
        },
        meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === a ? e < 4 ? e : e + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === a ? e : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === a ? 10 <= e ? e : e + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : e < 10 ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : e < 17 ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : e < 20 ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
        ordinal: function(e) {
            return e + "\u0ca8\u0cc6\u0cd5"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("ko", {
        months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
        weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY\ub144 MMMM D\uc77c",
            LLL: "YYYY\ub144 MMMM D\uc77c A h:mm",
            LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY\ub144 MMMM D\uc77c",
            lll: "YYYY\ub144 MMMM D\uc77c A h:mm",
            llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm"
        },
        calendar: {
            sameDay: "\uc624\ub298 LT",
            nextDay: "\ub0b4\uc77c LT",
            nextWeek: "dddd LT",
            lastDay: "\uc5b4\uc81c LT",
            lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \ud6c4",
            past: "%s \uc804",
            s: "\uba87 \ucd08",
            ss: "%d\ucd08",
            m: "1\ubd84",
            mm: "%d\ubd84",
            h: "\ud55c \uc2dc\uac04",
            hh: "%d\uc2dc\uac04",
            d: "\ud558\ub8e8",
            dd: "%d\uc77c",
            M: "\ud55c \ub2ec",
            MM: "%d\ub2ec",
            y: "\uc77c \ub144",
            yy: "%d\ub144"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\uc77c";
                case "M":
                    return e + "\uc6d4";
                case "w":
                case "W":
                    return e + "\uc8fc";
                default:
                    return e
            }
        },
        meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
        isPM: function(e) {
            return "\uc624\ud6c4" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4"
        }
    });
    var Qs = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660"
        },
        Xs = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0"
        },
        en = ["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0634\u0648\u0628\u0627\u062a", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06cc\u0633\u0627\u0646", "\u0626\u0627\u06cc\u0627\u0631", "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646", "\u062a\u06d5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"];
    l.defineLocale("ku", {
        months: en,
        monthsShort: en,
        weekdays: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),
        weekdaysShort: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),
        weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,
        isPM: function(e) {
            return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc" : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c"
        },
        calendar: {
            sameDay: "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            nextDay: "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            lastDay: "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0644\u0647\u200c %s",
            past: "%s",
            s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643",
            ss: "\u0686\u0631\u0643\u0647\u200c %d",
            m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643",
            mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643",
            h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
            hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
            d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698",
            dd: "%d \u0695\u06c6\u0698",
            M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af",
            MM: "%d \u0645\u0627\u0646\u06af",
            y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5",
            yy: "%d \u0633\u0627\u06b5"
        },
        preparse: function(e) {
            return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                return Xs[e]
            }).replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Qs[e]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var an = {
        0: "-\u0447\u04af",
        1: "-\u0447\u0438",
        2: "-\u0447\u0438",
        3: "-\u0447\u04af",
        4: "-\u0447\u04af",
        5: "-\u0447\u0438",
        6: "-\u0447\u044b",
        7: "-\u0447\u0438",
        8: "-\u0447\u0438",
        9: "-\u0447\u0443",
        10: "-\u0447\u0443",
        20: "-\u0447\u044b",
        30: "-\u0447\u0443",
        40: "-\u0447\u044b",
        50: "-\u0447\u04af",
        60: "-\u0447\u044b",
        70: "-\u0447\u0438",
        80: "-\u0447\u0438",
        90: "-\u0447\u0443",
        100: "-\u0447\u04af"
    };
    function tn(e, a, t, s) {
        var n = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return a ? n[t][0] : n[t][1]
    }
    function sn(e) {
        if (e = parseInt(e, 10), isNaN(e)) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
            var a = e % 10;
            return sn(0 === a ? e / 10 : a)
        }
        if (e < 1e4) {
            for (; 10 <= e;) e /= 10;
            return sn(e)
        }
        return sn(e /= 1e3)
    }
    l.defineLocale("ky", {
        months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
        monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
        weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"),
        weekdaysShort: "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"),
        weekdaysMin: "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",
            nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",
            nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT",
            lastDay: "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT",
            lastWeek: "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0438\u0447\u0438\u043d\u0434\u0435",
            past: "%s \u043c\u0443\u0440\u0443\u043d",
            s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
            m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",
            mm: "%d \u043c\u04af\u043d\u04e9\u0442",
            h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",
            hh: "%d \u0441\u0430\u0430\u0442",
            d: "\u0431\u0438\u0440 \u043a\u04af\u043d",
            dd: "%d \u043a\u04af\u043d",
            M: "\u0431\u0438\u0440 \u0430\u0439",
            MM: "%d \u0430\u0439",
            y: "\u0431\u0438\u0440 \u0436\u044b\u043b",
            yy: "%d \u0436\u044b\u043b"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
        ordinal: function(e) {
            return e + (an[e] || an[e % 10] || an[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("lb", {
        months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[G\xebschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                }
            }
        },
        relativeTime: {
            future: function(e) {
                return sn(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            },
            past: function(e) {
                return sn(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            },
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: tn,
            mm: "%d Minutten",
            h: tn,
            hh: "%d Stonnen",
            d: tn,
            dd: "%d Deeg",
            M: tn,
            MM: "%d M\xe9int",
            y: tn,
            yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("lo", {
        months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
        monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
        weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
        weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
        weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
        isPM: function(e) {
            return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"
        },
        calendar: {
            sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0ead\u0eb5\u0e81 %s",
            past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",
            s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
            ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
            m: "1 \u0e99\u0eb2\u0e97\u0eb5",
            mm: "%d \u0e99\u0eb2\u0e97\u0eb5",
            h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
            hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
            d: "1 \u0ea1\u0eb7\u0ec9",
            dd: "%d \u0ea1\u0eb7\u0ec9",
            M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",
            MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",
            y: "1 \u0e9b\u0eb5",
            yy: "%d \u0e9b\u0eb5"
        },
        dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
        ordinal: function(e) {
            return "\u0e97\u0eb5\u0ec8" + e
        }
    });
    var nn = {
        ss: "sekund\u0117_sekund\u017ei\u0173_sekundes",
        m: "minut\u0117_minut\u0117s_minut\u0119",
        mm: "minut\u0117s_minu\u010di\u0173_minutes",
        h: "valanda_valandos_valand\u0105",
        hh: "valandos_valand\u0173_valandas",
        d: "diena_dienos_dien\u0105",
        dd: "dienos_dien\u0173_dienas",
        M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",
        MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
        y: "metai_met\u0173_metus",
        yy: "metai_met\u0173_metus"
    };
    function dn(e, a, t, s) {
        return a ? _n(t)[0] : s ? _n(t)[1] : _n(t)[2]
    }
    function rn(e) {
        return e % 10 == 0 || 10 < e && e < 20
    }
    function _n(e) {
        return nn[e].split("_")
    }
    function on(e, a, t, s) {
        var n = e + " ";
        return 1 === e ? n + dn(0, a, t[0], s) : a ? n + (rn(e) ? _n(t)[1] : _n(t)[0]) : s ? n + _n(t)[1] : n + (rn(e) ? _n(t)[1] : _n(t)[2])
    }
    l.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[\u0160iandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Pra\u0117jus\u012f] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prie\u0161 %s",
            s: function(e, a, t, s) {
                return a ? "kelios sekund\u0117s" : s ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes"
            },
            ss: on,
            m: dn,
            mm: on,
            h: dn,
            hh: on,
            d: dn,
            dd: on,
            M: dn,
            MM: on,
            y: dn,
            yy: on
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function(e) {
            return e + "-oji"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var mn = {
        ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"),
        m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),
        mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),
        h: "stundas_stund\u0101m_stunda_stundas".split("_"),
        hh: "stundas_stund\u0101m_stunda_stundas".split("_"),
        d: "dienas_dien\u0101m_diena_dienas".split("_"),
        dd: "dienas_dien\u0101m_diena_dienas".split("_"),
        M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
        MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
    };
    function un(e, a, t) {
        return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1]
    }
    function ln(e, a, t) {
        return e + " " + un(mn[t], e, a)
    }
    function Mn(e, a, t) {
        return un(mn[t], e, a)
    }
    l.defineLocale("lv", {
        months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[\u0160odien pulksten] LT",
            nextDay: "[R\u012bt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "p\u0113c %s",
            past: "pirms %s",
            s: function(e, a) {
                return a ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m"
            },
            ss: ln,
            m: Mn,
            mm: ln,
            h: Mn,
            hh: ln,
            d: Mn,
            dd: ln,
            M: Mn,
            MM: ln,
            y: Mn,
            yy: ln
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var hn = {
        words: {
            ss: ["sekund", "sekunda", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(e, a) {
            return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2]
        },
        translate: function(e, a, t) {
            var s = hn.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + " " + hn.correctGrammaticalCase(e, s)
        }
    };
    function Ln(e, a, t, s) {
        switch (t) {
            case "s":
                return a ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434" : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
            case "ss":
                return e + (a ? " \u0441\u0435\u043a\u0443\u043d\u0434" : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");
            case "m":
            case "mm":
                return e + (a ? " \u043c\u0438\u043d\u0443\u0442" : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d");
            case "h":
            case "hh":
                return e + (a ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043d");
            case "d":
            case "dd":
                return e + (a ? " \u04e9\u0434\u04e9\u0440" : " \u04e9\u0434\u0440\u0438\u0439\u043d");
            case "M":
            case "MM":
                return e + (a ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d");
            case "y":
            case "yy":
                return e + (a ? " \u0436\u0438\u043b" : " \u0436\u0438\u043b\u0438\u0439\u043d");
            default:
                return e
        }
    }
    l.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function() {
                return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            ss: hn.translate,
            m: hn.translate,
            mm: hn.translate,
            h: hn.translate,
            hh: hn.translate,
            d: "dan",
            dd: hn.translate,
            M: "mjesec",
            MM: hn.translate,
            y: "godinu",
            yy: hn.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("mi", {
        months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),
        weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
        weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te h\u0113kona ruarua",
            ss: "%d h\u0113kona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("mk", {
        months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
        monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
        weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),
        weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),
        weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",
            nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u043f\u043e\u0441\u043b\u0435 %s",
            past: "\u043f\u0440\u0435\u0434 %s",
            s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            m: "\u043c\u0438\u043d\u0443\u0442\u0430",
            mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
            h: "\u0447\u0430\u0441",
            hh: "%d \u0447\u0430\u0441\u0430",
            d: "\u0434\u0435\u043d",
            dd: "%d \u0434\u0435\u043d\u0430",
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438",
            y: "\u0433\u043e\u0434\u0438\u043d\u0430",
            yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function(e) {
            var a = e % 10,
                t = e % 100;
            return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043d" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("ml", {
        months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),
        monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),
        weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),
        weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),
        longDateFormat: {
            LT: "A h:mm -\u0d28\u0d41",
            LTS: "A h:mm:ss -\u0d28\u0d41",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41",
            LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"
        },
        calendar: {
            sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",
            nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",
            lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",
            past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",
            s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",
            ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",
            m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
            mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
            h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
            hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
            d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",
            dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02",
            M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",
            MM: "%d \u0d2e\u0d3e\u0d38\u0d02",
            y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",
            yy: "%d \u0d35\u0d7c\u0d37\u0d02"
        },
        meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === a && 4 <= e || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === a || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === a ? e + 12 : e
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : e < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : e < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : e < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"
        }
    }), l.defineLocale("mn", {
        months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),
        monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),
        monthsParseExact: !0,
        weekdays: "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"),
        weekdaysShort: "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"),
        weekdaysMin: "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",
            LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",
            LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm"
        },
        meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
        isPM: function(e) {
            return "\u04ae\u0425" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u04ae\u04e8" : "\u04ae\u0425"
        },
        calendar: {
            sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",
            nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",
            nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT",
            lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",
            lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0434\u0430\u0440\u0430\u0430",
            past: "%s \u04e9\u043c\u043d\u04e9",
            s: Ln,
            ss: Ln,
            m: Ln,
            mm: Ln,
            h: Ln,
            hh: Ln,
            d: Ln,
            dd: Ln,
            M: Ln,
            MM: Ln,
            y: Ln,
            yy: Ln
        },
        dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + " \u04e9\u0434\u04e9\u0440";
                default:
                    return e
            }
        }
    });
    var cn = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        },
        Yn = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
    function yn(e, a, t, s) {
        var n = "";
        if (a) switch (t) {
            case "s":
                n = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                break;
            case "ss":
                n = "%d \u0938\u0947\u0915\u0902\u0926";
                break;
            case "m":
                n = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";
                break;
            case "mm":
                n = "%d \u092e\u093f\u0928\u093f\u091f\u0947";
                break;
            case "h":
                n = "\u090f\u0915 \u0924\u093e\u0938";
                break;
            case "hh":
                n = "%d \u0924\u093e\u0938";
                break;
            case "d":
                n = "\u090f\u0915 \u0926\u093f\u0935\u0938";
                break;
            case "dd":
                n = "%d \u0926\u093f\u0935\u0938";
                break;
            case "M":
                n = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";
                break;
            case "MM":
                n = "%d \u092e\u0939\u093f\u0928\u0947";
                break;
            case "y":
                n = "\u090f\u0915 \u0935\u0930\u094d\u0937";
                break;
            case "yy":
                n = "%d \u0935\u0930\u094d\u0937\u0947";
                break
        } else switch (t) {
            case "s":
                n = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
            case "ss":
                n = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
            case "m":
                n = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";
                break;
            case "mm":
                n = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";
                break;
            case "h":
                n = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e";
                break;
            case "hh":
                n = "%d \u0924\u093e\u0938\u093e\u0902";
                break;
            case "d":
                n = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";
                break;
            case "dd":
                n = "%d \u0926\u093f\u0935\u0938\u093e\u0902";
                break;
            case "M":
                n = "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";
                break;
            case "MM":
                n = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";
                break;
            case "y":
                n = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";
                break;
            case "yy":
                n = "%d \u0935\u0930\u094d\u0937\u093e\u0902";
                break
        }
        return n.replace(/%d/i, e)
    }
    l.defineLocale("mr", {
        months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),
        monthsShort: "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
        weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
        weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
        longDateFormat: {
            LT: "A h:mm \u0935\u093e\u091c\u0924\u093e",
            LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"
        },
        calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0915\u093e\u0932] LT",
            lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u092e\u0927\u094d\u092f\u0947",
            past: "%s\u092a\u0942\u0930\u094d\u0935\u0940",
            s: yn,
            ss: yn,
            m: yn,
            mm: yn,
            h: yn,
            hh: yn,
            d: yn,
            dd: yn,
            M: yn,
            MM: yn,
            y: yn,
            yy: yn
        },
        preparse: function(e) {
            return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                return Yn[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return cn[e]
            })
        },
        meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === a ? e < 4 ? e : e + 12 : "\u0938\u0915\u093e\u0933\u0940" === a ? e : "\u0926\u0941\u092a\u093e\u0930\u0940" === a ? 10 <= e ? e : e + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0930\u093e\u0924\u094d\u0930\u0940" : e < 10 ? "\u0938\u0915\u093e\u0933\u0940" : e < 17 ? "\u0926\u0941\u092a\u093e\u0930\u0940" : e < 20 ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("mt", {
        months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"),
        weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"),
        weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"),
        weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[G\u0127ada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-biera\u0127 fil-]LT",
            lastWeek: "dddd [li g\u0127adda] [fil-]LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "f\u2019 %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "sieg\u0127a",
            hh: "%d sieg\u0127at",
            d: "\u0121urnata",
            dd: "%d \u0121ranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var fn = {
            1: "\u1041",
            2: "\u1042",
            3: "\u1043",
            4: "\u1044",
            5: "\u1045",
            6: "\u1046",
            7: "\u1047",
            8: "\u1048",
            9: "\u1049",
            0: "\u1040"
        },
        kn = {
            "\u1041": "1",
            "\u1042": "2",
            "\u1043": "3",
            "\u1044": "4",
            "\u1045": "5",
            "\u1046": "6",
            "\u1047": "7",
            "\u1048": "8",
            "\u1049": "9",
            "\u1040": "0"
        };
    l.defineLocale("my", {
        months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),
        monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),
        weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),
        weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
        weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",
            nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",
            nextWeek: "dddd LT [\u1019\u103e\u102c]",
            lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",
            lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
            past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
            s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
            ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",
            m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
            mm: "%d \u1019\u102d\u1014\u1005\u103a",
            h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
            hh: "%d \u1014\u102c\u101b\u102e",
            d: "\u1010\u1005\u103a\u101b\u1000\u103a",
            dd: "%d \u101b\u1000\u103a",
            M: "\u1010\u1005\u103a\u101c",
            MM: "%d \u101c",
            y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
            yy: "%d \u1014\u103e\u1005\u103a"
        },
        preparse: function(e) {
            return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(e) {
                return kn[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return fn[e]
            })
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
        weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
        weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i g\xe5r kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en m\xe5ned",
            MM: "%d m\xe5neder",
            y: "ett \xe5r",
            yy: "%d \xe5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var pn = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        },
        Dn = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
    l.defineLocale("ne", {
        months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),
        monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),
        weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),
        weekdaysMin: "\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "A\u0915\u094b h:mm \u092c\u091c\u0947",
            LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",
            LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"
        },
        preparse: function(e) {
            return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                return Dn[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return pn[e]
            })
        },
        meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0930\u093e\u0924\u093f" === a ? e < 4 ? e : e + 12 : "\u092c\u093f\u0939\u093e\u0928" === a ? e : "\u0926\u093f\u0909\u0901\u0938\u094b" === a ? 10 <= e ? e : e + 12 : "\u0938\u093e\u0901\u091d" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 3 ? "\u0930\u093e\u0924\u093f" : e < 12 ? "\u092c\u093f\u0939\u093e\u0928" : e < 16 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : e < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u093f"
        },
        calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u092d\u094b\u0932\u093f] LT",
            nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",
            lastDay: "[\u0939\u093f\u091c\u094b] LT",
            lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u092e\u093e",
            past: "%s \u0905\u0917\u093e\u0921\u093f",
            s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",
            ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",
            m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",
            mm: "%d \u092e\u093f\u0928\u0947\u091f",
            h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",
            hh: "%d \u0918\u0923\u094d\u091f\u093e",
            d: "\u090f\u0915 \u0926\u093f\u0928",
            dd: "%d \u0926\u093f\u0928",
            M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
            MM: "%d \u092e\u0939\u093f\u0928\u093e",
            y: "\u090f\u0915 \u092c\u0930\u094d\u0937",
            yy: "%d \u092c\u0930\u094d\u0937"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var Tn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        gn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        wn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        vn = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    l.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(e, a) {
            return e ? /-MMM-/.test(a) ? gn[e.month()] : Tn[e.month()] : Tn
        },
        monthsRegex: vn,
        monthsShortRegex: vn,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: wn,
        longMonthsParse: wn,
        shortMonthsParse: wn,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "\xe9\xe9n minuut",
            mm: "%d minuten",
            h: "\xe9\xe9n uur",
            hh: "%d uur",
            d: "\xe9\xe9n dag",
            dd: "%d dagen",
            M: "\xe9\xe9n maand",
            MM: "%d maanden",
            y: "\xe9\xe9n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Hn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        Sn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        bn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        jn = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    l.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(e, a) {
            return e ? /-MMM-/.test(a) ? Sn[e.month()] : Hn[e.month()] : Hn
        },
        monthsRegex: jn,
        monthsShortRegex: jn,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: bn,
        longMonthsParse: bn,
        shortMonthsParse: bn,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "\xe9\xe9n minuut",
            mm: "%d minuten",
            h: "\xe9\xe9n uur",
            hh: "%d uur",
            d: "\xe9\xe9n dag",
            dd: "%d dagen",
            M: "\xe9\xe9n maand",
            MM: "%d maanden",
            y: "\xe9\xe9n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I g\xe5r klokka] LT",
            lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein m\xe5nad",
            MM: "%d m\xe5nader",
            y: "eit \xe5r",
            yy: "%d \xe5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var xn = {
            1: "\u0a67",
            2: "\u0a68",
            3: "\u0a69",
            4: "\u0a6a",
            5: "\u0a6b",
            6: "\u0a6c",
            7: "\u0a6d",
            8: "\u0a6e",
            9: "\u0a6f",
            0: "\u0a66"
        },
        Pn = {
            "\u0a67": "1",
            "\u0a68": "2",
            "\u0a69": "3",
            "\u0a6a": "4",
            "\u0a6b": "5",
            "\u0a6c": "6",
            "\u0a6d": "7",
            "\u0a6e": "8",
            "\u0a6f": "9",
            "\u0a66": "0"
        };
    l.defineLocale("pa-in", {
        months: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),
        monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),
        weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"),
        weekdaysShort: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),
        weekdaysMin: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),
        longDateFormat: {
            LT: "A h:mm \u0a35\u0a1c\u0a47",
            LTS: "A h:mm:ss \u0a35\u0a1c\u0a47",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"
        },
        calendar: {
            sameDay: "[\u0a05\u0a1c] LT",
            nextDay: "[\u0a15\u0a32] LT",
            nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT",
            lastDay: "[\u0a15\u0a32] LT",
            lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0a35\u0a3f\u0a71\u0a1a",
            past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",
            s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
            ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
            m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",
            mm: "%d \u0a2e\u0a3f\u0a70\u0a1f",
            h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",
            hh: "%d \u0a18\u0a70\u0a1f\u0a47",
            d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",
            dd: "%d \u0a26\u0a3f\u0a28",
            M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",
            MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47",
            y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",
            yy: "%d \u0a38\u0a3e\u0a32"
        },
        preparse: function(e) {
            return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function(e) {
                return Pn[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return xn[e]
            })
        },
        meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0a30\u0a3e\u0a24" === a ? e < 4 ? e : e + 12 : "\u0a38\u0a35\u0a47\u0a30" === a ? e : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === a ? 10 <= e ? e : e + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0a30\u0a3e\u0a24" : e < 10 ? "\u0a38\u0a35\u0a47\u0a30" : e < 17 ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : e < 20 ? "\u0a38\u0a3c\u0a3e\u0a2e" : "\u0a30\u0a3e\u0a24"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var On = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
        Wn = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");
    function En(e) {
        return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1
    }
    function An(e, a, t) {
        var s = e + " ";
        switch (t) {
            case "ss":
                return s + (En(e) ? "sekundy" : "sekund");
            case "m":
                return a ? "minuta" : "minut\u0119";
            case "mm":
                return s + (En(e) ? "minuty" : "minut");
            case "h":
                return a ? "godzina" : "godzin\u0119";
            case "hh":
                return s + (En(e) ? "godziny" : "godzin");
            case "MM":
                return s + (En(e) ? "miesi\u0105ce" : "miesi\u0119cy");
            case "yy":
                return s + (En(e) ? "lata" : "lat")
        }
    }
    function Fn(e, a, t) {
        var s = " ";
        return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (s = " de "), e + s + {
            ss: "secunde",
            mm: "minute",
            hh: "ore",
            dd: "zile",
            MM: "luni",
            yy: "ani"
        }[t]
    }
    function zn(e, a, t) {
        var s, n;
        return "m" === t ? a ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + (s = +e, n = {
            ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
            mm: a ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
            hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
            dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
            MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
            yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"
        }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2])
    }
    l.defineLocale("pl", {
        months: function(e, a) {
            return e ? "" === a ? "(" + Wn[e.month()] + "|" + On[e.month()] + ")" : /D MMMM/.test(a) ? Wn[e.month()] : On[e.month()] : On
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
        weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Dzi\u015b o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W niedziel\u0119 o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W \u015brod\u0119 o] LT";
                    case 6:
                        return "[W sobot\u0119 o] LT";
                    default:
                        return "[W] dddd [o] LT"
                }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                    case 3:
                        return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                    case 6:
                        return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                    default:
                        return "[W zesz\u0142y] dddd [o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: An,
            m: An,
            mm: An,
            h: An,
            hh: An,
            d: "1 dzie\u0144",
            dd: "%d dni",
            M: "miesi\u0105c",
            MM: An,
            y: "rok",
            yy: An
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("pt-br", {
        months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
        weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"
        },
        calendar: {
            sameDay: "[Hoje \xe0s] LT",
            nextDay: "[Amanh\xe3 \xe0s] LT",
            nextWeek: "dddd [\xe0s] LT",
            lastDay: "[Ontem \xe0s] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "h\xe1 %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\xeas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba"
    }), l.defineLocale("pt", {
        months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
        weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hoje \xe0s] LT",
            nextDay: "[Amanh\xe3 \xe0s] LT",
            nextWeek: "dddd [\xe0s] LT",
            lastDay: "[Ontem \xe0s] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "h\xe1 %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\xeas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[m\xe2ine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s \xeen urm\u0103",
            s: "c\xe2teva secunde",
            ss: Fn,
            m: "un minut",
            mm: Fn,
            h: "o or\u0103",
            hh: Fn,
            d: "o zi",
            dd: Fn,
            M: "o lun\u0103",
            MM: Fn,
            y: "un an",
            yy: Fn
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Jn = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
    l.defineLocale("ru", {
        months: {
            format: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),
            standalone: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")
        },
        monthsShort: {
            format: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),
            standalone: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")
        },
        weekdays: {
            standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
            format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),
            isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/
        },
        weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        monthsParse: Jn,
        longMonthsParse: Jn,
        shortMonthsParse: Jn,
        monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
        monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0433.",
            LLL: "D MMMM YYYY \u0433., H:mm",
            LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
        },
        calendar: {
            sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",
            nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
            nextWeek: function(e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                switch (this.day()) {
                    case 0:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"
                }
            },
            lastWeek: function(e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                switch (this.day()) {
                    case 0:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0447\u0435\u0440\u0435\u0437 %s",
            past: "%s \u043d\u0430\u0437\u0430\u0434",
            s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: zn,
            m: zn,
            mm: zn,
            h: "\u0447\u0430\u0441",
            hh: zn,
            d: "\u0434\u0435\u043d\u044c",
            dd: zn,
            M: "\u043c\u0435\u0441\u044f\u0446",
            MM: zn,
            y: "\u0433\u043e\u0434",
            yy: zn
        },
        meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
        isPM: function(e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u043d\u043e\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
        ordinal: function(e, a) {
            switch (a) {
                case "M":
                case "d":
                case "DDD":
                    return e + "-\u0439";
                case "D":
                    return e + "-\u0433\u043e";
                case "w":
                case "W":
                    return e + "-\u044f";
                default:
                    return e
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Nn = ["\u062c\u0646\u0648\u0631\u064a", "\u0641\u064a\u0628\u0631\u0648\u0631\u064a", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u064a\u0644", "\u0645\u0626\u064a", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0621\u0650", "\u0622\u06af\u0633\u067d", "\u0633\u064a\u067e\u067d\u0645\u0628\u0631", "\u0622\u06aa\u067d\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068a\u0633\u0645\u0628\u0631"],
        Rn = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06b1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639", "\u0687\u0646\u0687\u0631"];
    l.defineLocale("sd", {
        months: Nn,
        monthsShort: Nn,
        weekdays: Rn,
        weekdaysShort: Rn,
        weekdaysMin: Rn,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd\u060c D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
        isPM: function(e) {
            return "\u0634\u0627\u0645" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0684] LT",
            nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT",
            nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",
            lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT",
            lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u067e\u0648\u0621",
            past: "%s \u0627\u06b3",
            s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",
            ss: "%d \u0633\u064a\u06aa\u0646\u068a",
            m: "\u0647\u06aa \u0645\u0646\u067d",
            mm: "%d \u0645\u0646\u067d",
            h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa",
            hh: "%d \u06aa\u0644\u0627\u06aa",
            d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",
            dd: "%d \u068f\u064a\u0646\u0647\u0646",
            M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",
            MM: "%d \u0645\u0647\u064a\u0646\u0627",
            y: "\u0647\u06aa \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644"
        },
        preparse: function(e) {
            return e.replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/,/g, "\u060c")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("se", {
        months: "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),
        monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"),
        weekdays: "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),
        weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s gea\u017ees",
            past: "ma\u014bit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta m\xe1nnu",
            MM: "%d m\xe1nut",
            y: "okta jahki",
            yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("si", {
        months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"),
        monthsShort: "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"),
        weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),
        weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),
        weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"
        },
        calendar: {
            sameDay: "[\u0d85\u0daf] LT[\u0da7]",
            nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]",
            nextWeek: "dddd LT[\u0da7]",
            lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]",
            lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u0d9a\u0dd2\u0db1\u0dca",
            past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",
            s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",
            ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d",
            m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",
            mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",
            h: "\u0db4\u0dd0\u0dba",
            hh: "\u0db4\u0dd0\u0dba %d",
            d: "\u0daf\u0dd2\u0db1\u0dba",
            dd: "\u0daf\u0dd2\u0db1 %d",
            M: "\u0db8\u0dcf\u0dc3\u0dba",
            MM: "\u0db8\u0dcf\u0dc3 %d",
            y: "\u0dc0\u0dc3\u0dbb",
            yy: "\u0dc0\u0dc3\u0dbb %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
        ordinal: function(e) {
            return e + " \u0dc0\u0dd0\u0db1\u0dd2"
        },
        meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
        isPM: function(e) {
            return "\u0db4.\u0dc0." === e || "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === e
        },
        meridiem: function(e, a, t) {
            return 11 < e ? t ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : t ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"
        }
    });
    var In = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
        Cn = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");
    function Gn(e) {
        return 1 < e && e < 5
    }
    function Un(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
            case "ss":
                return a || s ? n + (Gn(e) ? "sekundy" : "sek\xfand") : n + "sekundami";
                break;
            case "m":
                return a ? "min\xfata" : s ? "min\xfatu" : "min\xfatou";
            case "mm":
                return a || s ? n + (Gn(e) ? "min\xfaty" : "min\xfat") : n + "min\xfatami";
                break;
            case "h":
                return a ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
                return a || s ? n + (Gn(e) ? "hodiny" : "hod\xedn") : n + "hodinami";
                break;
            case "d":
                return a || s ? "de\u0148" : "d\u0148om";
            case "dd":
                return a || s ? n + (Gn(e) ? "dni" : "dn\xed") : n + "d\u0148ami";
                break;
            case "M":
                return a || s ? "mesiac" : "mesiacom";
            case "MM":
                return a || s ? n + (Gn(e) ? "mesiace" : "mesiacov") : n + "mesiacmi";
                break;
            case "y":
                return a || s ? "rok" : "rokom";
            case "yy":
                return a || s ? n + (Gn(e) ? "roky" : "rokov") : n + "rokmi";
                break
        }
    }
    function Vn(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return n += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || s ? "sekundi" : "sekundah" : e < 5 ? a || s ? "sekunde" : "sekundah" : "sekund";
            case "m":
                return a ? "ena minuta" : "eno minuto";
            case "mm":
                return n += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami";
            case "h":
                return a ? "ena ura" : "eno uro";
            case "hh":
                return n += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami";
            case "d":
                return a || s ? "en dan" : "enim dnem";
            case "dd":
                return n += 1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi";
            case "M":
                return a || s ? "en mesec" : "enim mesecem";
            case "MM":
                return n += 1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci";
            case "y":
                return a || s ? "eno leto" : "enim letom";
            case "yy":
                return n += 1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti"
        }
    }
    l.defineLocale("sk", {
        months: In,
        monthsShort: Cn,
        weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v nede\u013eu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo \u0161tvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                }
            },
            lastDay: "[v\u010dera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minul\xfa nede\u013eu o] LT";
                    case 1:
                    case 2:
                        return "[minul\xfd] dddd [o] LT";
                    case 3:
                        return "[minul\xfa stredu o] LT";
                    case 4:
                    case 5:
                        return "[minul\xfd] dddd [o] LT";
                    case 6:
                        return "[minul\xfa sobotu o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: Un,
            ss: Un,
            m: Un,
            mm: Un,
            h: Un,
            hh: Un,
            d: Un,
            dd: Un,
            M: Un,
            MM: Un,
            y: Un,
            yy: Un
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                }
            },
            lastDay: "[v\u010deraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[prej\u0161njo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prej\u0161njo] [sredo] [ob] LT";
                    case 6:
                        return "[prej\u0161njo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prej\u0161nji] dddd [ob] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u010dez %s",
            past: "pred %s",
            s: Vn,
            ss: Vn,
            m: Vn,
            mm: Vn,
            h: Vn,
            hh: Vn,
            d: Vn,
            dd: Vn,
            M: Vn,
            MM: Vn,
            y: Vn,
            yy: Vn
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),
        weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),
        weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function(e) {
            return "M" === e.charAt(0)
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "PD" : "MD"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Sot n\xeb] LT",
            nextDay: "[Nes\xebr n\xeb] LT",
            nextWeek: "dddd [n\xeb] LT",
            lastDay: "[Dje n\xeb] LT",
            lastWeek: "dddd [e kaluar n\xeb] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "n\xeb %s",
            past: "%s m\xeb par\xeb",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "nj\xeb minut\xeb",
            mm: "%d minuta",
            h: "nj\xeb or\xeb",
            hh: "%d or\xeb",
            d: "nj\xeb dit\xeb",
            dd: "%d dit\xeb",
            M: "nj\xeb muaj",
            MM: "%d muaj",
            y: "nj\xeb vit",
            yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Kn = {
        words: {
            ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435", "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"],
            m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],
            mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"],
            h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],
            hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"],
            dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"],
            MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"],
            yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"]
        },
        correctGrammaticalCase: function(e, a) {
            return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2]
        },
        translate: function(e, a, t) {
            var s = Kn.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + " " + Kn.correctGrammaticalCase(e, s)
        }
    };
    l.defineLocale("sr-cyrl", {
        months: "\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),
        monthsShort: "\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
        weekdaysShort: "\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),
        weekdaysMin: "\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",
            nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                    case 3:
                        return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                    case 6:
                        return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0443] dddd [\u0443] LT"
                }
            },
            lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
            lastWeek: function() {
                return ["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0437\u0430 %s",
            past: "\u043f\u0440\u0435 %s",
            s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: Kn.translate,
            m: Kn.translate,
            mm: Kn.translate,
            h: Kn.translate,
            hh: Kn.translate,
            d: "\u0434\u0430\u043d",
            dd: Kn.translate,
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: Kn.translate,
            y: "\u0433\u043e\u0434\u0438\u043d\u0443",
            yy: Kn.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var $n = {
        words: {
            ss: ["sekunda", "sekunde", "sekundi"],
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(e, a) {
            return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2]
        },
        translate: function(e, a, t) {
            var s = $n.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + " " + $n.correctGrammaticalCase(e, s)
        }
    };
    l.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function() {
                return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            ss: $n.translate,
            m: $n.translate,
            mm: $n.translate,
            h: $n.translate,
            hh: $n.translate,
            d: "dan",
            dd: $n.translate,
            M: "mesec",
            MM: $n.translate,
            y: "godinu",
            yy: $n.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(e, a, t) {
            return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
        },
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "ekuseni" === a ? e : "emini" === a ? 11 <= e ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
        weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
        weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Ig\xe5r] LT",
            nextWeek: "[P\xe5] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "f\xf6r %s sedan",
            s: "n\xe5gra sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en m\xe5nad",
            MM: "%d m\xe5nader",
            y: "ett \xe5r",
            yy: "%d \xe5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === a ? "a" : 2 === a ? "a" : "e")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Zn = {
            1: "\u0be7",
            2: "\u0be8",
            3: "\u0be9",
            4: "\u0bea",
            5: "\u0beb",
            6: "\u0bec",
            7: "\u0bed",
            8: "\u0bee",
            9: "\u0bef",
            0: "\u0be6"
        },
        Bn = {
            "\u0be7": "1",
            "\u0be8": "2",
            "\u0be9": "3",
            "\u0bea": "4",
            "\u0beb": "5",
            "\u0bec": "6",
            "\u0bed": "7",
            "\u0bee": "8",
            "\u0bef": "9",
            "\u0be6": "0"
        };
    l.defineLocale("ta", {
        months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
        monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
        weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),
        weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),
        weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
            sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",
            nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",
            lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0b87\u0bb2\u0bcd",
            past: "%s \u0bae\u0bc1\u0ba9\u0bcd",
            s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
            ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
            m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",
            mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
            h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
            hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
            d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",
            dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",
            M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",
            MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
            y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",
            yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
        ordinal: function(e) {
            return e + "\u0bb5\u0ba4\u0bc1"
        },
        preparse: function(e) {
            return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function(e) {
                return Bn[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Zn[e]
            })
        },
        meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
        meridiem: function(e, a, t) {
            return e < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : e < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : e < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : e < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : e < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : e < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd"
        },
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === a ? e < 2 ? e : e + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === a || "\u0b95\u0bbe\u0bb2\u0bc8" === a ? e : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === a && 10 <= e ? e : e + 12
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("te", {
        months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"),
        monthsShort: "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"),
        weekdaysShort: "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"),
        weekdaysMin: "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT",
            nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",
            lastWeek: "[\u0c17\u0c24] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0c32\u0c4b",
            past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",
            s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",
            ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",
            m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",
            mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",
            h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f",
            hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41",
            d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",
            dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",
            M: "\u0c12\u0c15 \u0c28\u0c46\u0c32",
            MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41",
            y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",
            yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
        ordinal: "%d\u0c35",
        meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === a ? e < 4 ? e : e + 12 : "\u0c09\u0c26\u0c2f\u0c02" === a ? e : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === a ? 10 <= e ? e : e + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : e < 10 ? "\u0c09\u0c26\u0c2f\u0c02" : e < 17 ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : e < 20 ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), l.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "minutu balun",
            ss: "minutu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var qn = {
        0: "-\u0443\u043c",
        1: "-\u0443\u043c",
        2: "-\u044e\u043c",
        3: "-\u044e\u043c",
        4: "-\u0443\u043c",
        5: "-\u0443\u043c",
        6: "-\u0443\u043c",
        7: "-\u0443\u043c",
        8: "-\u0443\u043c",
        9: "-\u0443\u043c",
        10: "-\u0443\u043c",
        12: "-\u0443\u043c",
        13: "-\u0443\u043c",
        20: "-\u0443\u043c",
        30: "-\u044e\u043c",
        40: "-\u0443\u043c",
        50: "-\u0443\u043c",
        60: "-\u0443\u043c",
        70: "-\u0443\u043c",
        80: "-\u0443\u043c",
        90: "-\u0443\u043c",
        100: "-\u0443\u043c"
    };
    l.defineLocale("tg", {
        months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),
        monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
        weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"),
        weekdaysShort: "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"),
        weekdaysMin: "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
            nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT",
            lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
            nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
            lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0431\u0430\u044a\u0434\u0438 %s",
            past: "%s \u043f\u0435\u0448",
            s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",
            m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",
            mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430",
            h: "\u044f\u043a \u0441\u043e\u0430\u0442",
            hh: "%d \u0441\u043e\u0430\u0442",
            d: "\u044f\u043a \u0440\u04ef\u0437",
            dd: "%d \u0440\u04ef\u0437",
            M: "\u044f\u043a \u043c\u043e\u04b3",
            MM: "%d \u043c\u043e\u04b3",
            y: "\u044f\u043a \u0441\u043e\u043b",
            yy: "%d \u0441\u043e\u043b"
        },
        meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u0448\u0430\u0431" === a ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04b3" === a ? e : "\u0440\u04ef\u0437" === a ? 11 <= e ? e : e + 12 : "\u0431\u0435\u0433\u043e\u04b3" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04b3" : e < 16 ? "\u0440\u04ef\u0437" : e < 19 ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
        ordinal: function(e) {
            return e + (qn[e] || qn[e % 10] || qn[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("th", {
        months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),
        monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
        weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
        weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
            LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"
        },
        meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
        isPM: function(e) {
            return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"
        },
        calendar: {
            sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",
            lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0e2d\u0e35\u0e01 %s",
            past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
            s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
            ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
            m: "1 \u0e19\u0e32\u0e17\u0e35",
            mm: "%d \u0e19\u0e32\u0e17\u0e35",
            h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
            hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
            d: "1 \u0e27\u0e31\u0e19",
            dd: "%d \u0e27\u0e31\u0e19",
            M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
            MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
            y: "1 \u0e1b\u0e35",
            yy: "%d \u0e1b\u0e35"
        }
    }), l.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
        },
        relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(e) {
            return e
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Qn = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
    function Xn(e, a, t, s) {
        var n = function(e) {
            var a = Math.floor(e % 1e3 / 100),
                t = Math.floor(e % 100 / 10),
                s = e % 10,
                n = "";
            0 < a && (n += Qn[a] + "vatlh");
            0 < t && (n += ("" !== n ? " " : "") + Qn[t] + "maH");
            0 < s && (n += ("" !== n ? " " : "") + Qn[s]);
            return "" === n ? "pagh" : n
        }(e);
        switch (t) {
            case "ss":
                return n + " lup";
            case "mm":
                return n + " tup";
            case "hh":
                return n + " rep";
            case "dd":
                return n + " jaj";
            case "MM":
                return n + " jar";
            case "yy":
                return n + " DIS"
        }
    }
    l.defineLocale("tlh", {
        months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),
        monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa\u2019leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa\u2019Hu\u2019] LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                var a = e;
                return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq"
            },
            past: function(e) {
                var a = e;
                return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret"
            },
            s: "puS lup",
            ss: Xn,
            m: "wa\u2019 tup",
            mm: Xn,
            h: "wa\u2019 rep",
            hh: Xn,
            d: "wa\u2019 jaj",
            dd: Xn,
            M: "wa\u2019 jar",
            MM: Xn,
            y: "wa\u2019 DIS",
            yy: Xn
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ed = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'\xfcnc\xfc",
        4: "'\xfcnc\xfc",
        100: "'\xfcnc\xfc",
        6: "'nc\u0131",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'\u0131nc\u0131",
        90: "'\u0131nc\u0131"
    };
    function ad(e, a, t, s) {
        var n = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [e + " secunds", e + " secunds"],
            m: ["'n m\xedut", "'iens m\xedut"],
            mm: [e + " m\xeduts", e + " m\xeduts"],
            h: ["'n \xfeora", "'iensa \xfeora"],
            hh: [e + " \xfeoras", e + " \xfeoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + " ziuas", e + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [e + " mesen", e + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [e + " ars", e + " ars"]
        };
        return s ? n[t][0] : a ? n[t][0] : n[t][1]
    }
    function td(e, a, t) {
        var s, n;
        return "m" === t ? a ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === t ? a ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : e + " " + (s = +e, n = {
            ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
            mm: a ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
            hh: a ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
            dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
            MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
            yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"
        }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2])
    }
    function sd(e) {
        return function() {
            return e + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT"
        }
    }
    l.defineLocale("tr", {
        months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
        monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bug\xfcn saat] LT",
            nextDay: "[yar\u0131n saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[d\xfcn] LT",
            lastWeek: "[ge\xe7en] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s \xf6nce",
            s: "birka\xe7 saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\xfcn",
            dd: "%d g\xfcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir y\u0131l",
            yy: "%d y\u0131l"
        },
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e) return e + "'\u0131nc\u0131";
                    var t = e % 10;
                    return e + (ed[t] || ed[e % 100 - t] || ed[100 <= e ? 100 : null])
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("tzl", {
        months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),
        weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),
        weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function(e) {
            return "d'o" === e.toLowerCase()
        },
        meridiem: function(e, a, t) {
            return 11 < e ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A"
        },
        calendar: {
            sameDay: "[oxhi \xe0] LT",
            nextDay: "[dem\xe0 \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[ieiri \xe0] LT",
            lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: ad,
            ss: ad,
            m: ad,
            mm: ad,
            h: ad,
            hh: ad,
            d: ad,
            dd: ad,
            M: ad,
            MM: ad,
            y: ad,
            yy: ad
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("tzm-latn", {
        months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minu\u1e0d",
            mm: "%d minu\u1e0d",
            h: "sa\u025ba",
            hh: "%d tassa\u025bin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), l.defineLocale("tzm", {
        months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
        monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
        weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
        weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
        weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",
            nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",
            nextWeek: "dddd [\u2d34] LT",
            lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",
            lastWeek: "dddd [\u2d34] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",
            past: "\u2d62\u2d30\u2d4f %s",
            s: "\u2d49\u2d4e\u2d49\u2d3d",
            ss: "%d \u2d49\u2d4e\u2d49\u2d3d",
            m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a",
            mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",
            h: "\u2d59\u2d30\u2d44\u2d30",
            hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",
            d: "\u2d30\u2d59\u2d59",
            dd: "%d o\u2d59\u2d59\u2d30\u2d4f",
            M: "\u2d30\u2d62o\u2d53\u2d54",
            MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",
            y: "\u2d30\u2d59\u2d33\u2d30\u2d59",
            yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), l.defineLocale("ug-cn", {
        months: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
        monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
        weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"),
        weekdaysShort: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
        weekdaysMin: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",
            LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",
            LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm"
        },
        meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === a || "\u0633\u06d5\u06be\u06d5\u0631" === a || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === a ? e : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === a || "\u0643\u06d5\u0686" === a ? e + 12 : 11 <= e ? e : e + 12
        },
        meridiem: function(e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : s < 900 ? "\u0633\u06d5\u06be\u06d5\u0631" : s < 1130 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : s < 1230 ? "\u0686\u06c8\u0634" : s < 1800 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" : "\u0643\u06d5\u0686"
        },
        calendar: {
            sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",
            nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",
            nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
            lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",
            lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0643\u06d0\u064a\u0649\u0646",
            past: "%s \u0628\u06c7\u0631\u06c7\u0646",
            s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",
            ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a",
            m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",
            mm: "%d \u0645\u0649\u0646\u06c7\u062a",
            h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",
            hh: "%d \u0633\u0627\u0626\u06d5\u062a",
            d: "\u0628\u0649\u0631 \u0643\u06c8\u0646",
            dd: "%d \u0643\u06c8\u0646",
            M: "\u0628\u0649\u0631 \u0626\u0627\u064a",
            MM: "%d \u0626\u0627\u064a",
            y: "\u0628\u0649\u0631 \u064a\u0649\u0644",
            yy: "%d \u064a\u0649\u0644"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "-\u0643\u06c8\u0646\u0649";
                case "w":
                case "W":
                    return e + "-\u06be\u06d5\u067e\u062a\u06d5";
                default:
                    return e
            }
        },
        preparse: function(e) {
            return e.replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/,/g, "\u060c")
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("uk", {
        months: {
            format: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),
            standalone: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_")
        },
        monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
        weekdays: function(e, a) {
            var t = {
                nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
                genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")
            };
            return e ? t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative
        },
        weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0440.",
            LLL: "D MMMM YYYY \u0440., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0440., HH:mm"
        },
        calendar: {
            sameDay: sd("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),
            nextDay: sd("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
            lastDay: sd("[\u0412\u0447\u043e\u0440\u0430 "),
            nextWeek: sd("[\u0423] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return sd("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return sd("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0437\u0430 %s",
            past: "%s \u0442\u043e\u043c\u0443",
            s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: td,
            m: td,
            mm: td,
            h: "\u0433\u043e\u0434\u0438\u043d\u0443",
            hh: td,
            d: "\u0434\u0435\u043d\u044c",
            dd: td,
            M: "\u043c\u0456\u0441\u044f\u0446\u044c",
            MM: td,
            y: "\u0440\u0456\u043a",
            yy: td
        },
        meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
        isPM: function(e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "\u043d\u043e\u0447\u0456" : e < 12 ? "\u0440\u0430\u043d\u043a\u0443" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
        ordinal: function(e, a) {
            switch (a) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-\u0439";
                case "D":
                    return e + "-\u0433\u043e";
                default:
                    return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var nd = ["\u062c\u0646\u0648\u0631\u06cc", "\u0641\u0631\u0648\u0631\u06cc", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u06cc\u0644", "\u0645\u0626\u06cc", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0626\u06cc", "\u0627\u06af\u0633\u062a", "\u0633\u062a\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062f\u0633\u0645\u0628\u0631"],
        dd = ["\u0627\u062a\u0648\u0627\u0631", "\u067e\u06cc\u0631", "\u0645\u0646\u06af\u0644", "\u0628\u062f\u06be", "\u062c\u0645\u0639\u0631\u0627\u062a", "\u062c\u0645\u0639\u06c1", "\u06c1\u0641\u062a\u06c1"];
    return l.defineLocale("ur", {
        months: nd,
        monthsShort: nd,
        weekdays: dd,
        weekdaysShort: dd,
        weekdaysMin: dd,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd\u060c D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
        isPM: function(e) {
            return "\u0634\u0627\u0645" === e
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
        },
        calendar: {
            sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT",
            nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",
            nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT",
            lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",
            lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0628\u0639\u062f",
            past: "%s \u0642\u0628\u0644",
            s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",
            ss: "%d \u0633\u06cc\u06a9\u0646\u0688",
            m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679",
            mm: "%d \u0645\u0646\u0679",
            h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",
            hh: "%d \u06af\u06be\u0646\u0679\u06d2",
            d: "\u0627\u06cc\u06a9 \u062f\u0646",
            dd: "%d \u062f\u0646",
            M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1",
            MM: "%d \u0645\u0627\u06c1",
            y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644"
        },
        preparse: function(e) {
            return e.replace(/\u060c/g, ",")
        },
        postformat: function(e) {
            return e.replace(/,/g, "\u060c")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("uz", {
        months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),
        monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
        weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),
        weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),
        weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",
            nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",
            past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",
            s: "\u0444\u0443\u0440\u0441\u0430\u0442",
            ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442",
            m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",
            mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430",
            h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",
            hh: "%d \u0441\u043e\u0430\u0442",
            d: "\u0431\u0438\u0440 \u043a\u0443\u043d",
            dd: "%d \u043a\u0443\u043d",
            M: "\u0431\u0438\u0440 \u043e\u0439",
            MM: "%d \u043e\u0439",
            y: "\u0431\u0438\u0440 \u0439\u0438\u043b",
            yy: "%d \u0439\u0438\u043b"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), l.defineLocale("vi", {
        months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function(e) {
            return /^ch$/i.test(e)
        },
        meridiem: function(e, a, t) {
            return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [n\u0103m] YYYY",
            LLL: "D MMMM [n\u0103m] YYYY HH:mm",
            LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[H\xf4m nay l\xfac] LT",
            nextDay: "[Ng\xe0y mai l\xfac] LT",
            nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT",
            lastDay: "[H\xf4m qua l\xfac] LT",
            lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s t\u1edbi",
            past: "%s tr\u01b0\u1edbc",
            s: "v\xe0i gi\xe2y",
            ss: "%d gi\xe2y",
            m: "m\u1ed9t ph\xfat",
            mm: "%d ph\xfat",
            h: "m\u1ed9t gi\u1edd",
            hh: "%d gi\u1edd",
            d: "m\u1ed9t ng\xe0y",
            dd: "%d ng\xe0y",
            M: "m\u1ed9t th\xe1ng",
            MM: "%d th\xe1ng",
            y: "m\u1ed9t n\u0103m",
            yy: "%d n\u0103m"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(e) {
            return e
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("x-pseudo", {
        months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),
        monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),
        monthsParseExact: !0,
        weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),
        weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),
        weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT",
            nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",
            nextWeek: "dddd [\xe1t] LT",
            lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",
            lastWeek: "[L~\xe1st] dddd [\xe1t] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\xed~\xf1 %s",
            past: "%s \xe1~g\xf3",
            s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",
            ss: "%d s~\xe9c\xf3\xf1~ds",
            m: "\xe1 ~m\xed\xf1~\xfat\xe9",
            mm: "%d m~\xed\xf1\xfa~t\xe9s",
            h: "\xe1~\xf1 h\xf3~\xfar",
            hh: "%d h~\xf3\xfars",
            d: "\xe1 ~d\xe1\xfd",
            dd: "%d d~\xe1\xfds",
            M: "\xe1 ~m\xf3\xf1~th",
            MM: "%d m~\xf3\xf1t~hs",
            y: "\xe1 ~\xfd\xe9\xe1r",
            yy: "%d \xfd~\xe9\xe1rs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("yo", {
        months: "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),
        monthsShort: "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),
        weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"),
        weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"),
        weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[O\u0300ni\u0300 ni] LT",
            nextDay: "[\u1ecc\u0300la ni] LT",
            nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",
            lastDay: "[A\u0300na ni] LT",
            lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ni\u0301 %s",
            past: "%s k\u1ecdja\u0301",
            s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die",
            ss: "aaya\u0301 %d",
            m: "i\u0300s\u1eb9ju\u0301 kan",
            mm: "i\u0300s\u1eb9ju\u0301 %d",
            h: "wa\u0301kati kan",
            hh: "wa\u0301kati %d",
            d: "\u1ecdj\u1ecd\u0301 kan",
            dd: "\u1ecdj\u1ecd\u0301 %d",
            M: "osu\u0300 kan",
            MM: "osu\u0300 %d",
            y: "\u1ecddu\u0301n kan",
            yy: "\u1ecddu\u0301n %d"
        },
        dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
        ordinal: "\u1ecdj\u1ecd\u0301 %d",
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("zh-cn", {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",
            LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : 11 <= e ? e : e + 12
        },
        meridiem: function(e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
        },
        calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: "[\u4e0b]ddddLT",
            lastDay: "[\u6628\u5929]LT",
            lastWeek: "[\u4e0a]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                case "M":
                    return e + "\u6708";
                case "w":
                case "W":
                    return e + "\u5468";
                default:
                    return e
            }
        },
        relativeTime: {
            future: "%s\u5185",
            past: "%s\u524d",
            s: "\u51e0\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u949f",
            mm: "%d \u5206\u949f",
            h: "1 \u5c0f\u65f6",
            hh: "%d \u5c0f\u65f6",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u4e2a\u6708",
            MM: "%d \u4e2a\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), l.defineLocale("zh-hk", {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e2d\u5348" === a ? 11 <= e ? e : e + 12 : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
        },
        calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: "[\u4e0b]ddddLT",
            lastDay: "[\u6628\u5929]LT",
            lastWeek: "[\u4e0a]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                case "M":
                    return e + "\u6708";
                case "w":
                case "W":
                    return e + "\u9031";
                default:
                    return e
            }
        },
        relativeTime: {
            future: "%s\u5167",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u9418",
            mm: "%d \u5206\u9418",
            h: "1 \u5c0f\u6642",
            hh: "%d \u5c0f\u6642",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u500b\u6708",
            MM: "%d \u500b\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74"
        }
    }), l.defineLocale("zh-tw", {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e2d\u5348" === a ? 11 <= e ? e : e + 12 : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : void 0
        },
        meridiem: function(e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
        },
        calendar: {
            sameDay: "[\u4eca\u5929] LT",
            nextDay: "[\u660e\u5929] LT",
            nextWeek: "[\u4e0b]dddd LT",
            lastDay: "[\u6628\u5929] LT",
            lastWeek: "[\u4e0a]dddd LT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                case "M":
                    return e + "\u6708";
                case "w":
                case "W":
                    return e + "\u9031";
                default:
                    return e
            }
        },
        relativeTime: {
            future: "%s\u5167",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u9418",
            mm: "%d \u5206\u9418",
            h: "1 \u5c0f\u6642",
            hh: "%d \u5c0f\u6642",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u500b\u6708",
            MM: "%d \u500b\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74"
        }
    }), l.locale("en"), l
});