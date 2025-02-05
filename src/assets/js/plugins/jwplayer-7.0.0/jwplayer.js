! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? exports.jwplayer = t() : e.jwplayer = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var o = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = window.webpackJsonpjwplayer;
        window.webpackJsonpjwplayer = function(i, r) {
            for (var s, a, l = 0, c = []; l < i.length; l++) a = i[l], o[a] && c.push.apply(c, o[a]), o[a] = 0;
            for (s in r) e[s] = r[s];
            for (n && n(i, r); c.length;) c.shift().call(null, t)
        };
        var i = {},
            o = {
                0: 0
            };
        return t.e = function(e, n) {
            if (0 === o[e]) return n.call(null, t);
            if (void 0 !== o[e]) o[e].push(n);
            else {
                o[e] = [n];
                var i = document.getElementsByTagName("head")[0],
                    r = document.createElement("script");
                r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = t.p + "" + ({
                    1: "provider.dashjs",
                    2: "provider.shaka"
                }[e] || e) + ".js", i.appendChild(r)
            }
        }, t.m = e, t.c = i, t.p = "", t(0)
    }([function(e, t, n) {
        e.exports = n(40)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        var i, o;
        i = [n(41), n(168), n(48), n(45)], o = function(e, t, i, o) {
            return o.extend(e, t), n.p = i.getScriptPath("jwplayer.js"), e
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(42), n(48), n(45), n(68), n(159), n(160)], o = function(e, t, i) {
            return n.p = t.getScriptPath("jwplayer.js"), window.jwplayer = window.jwplayer || i.constant({
                registerPlugin: e.registerPlugin
            }), e.selectPlayer
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(43), n(60), n(69), n(83), n(45)], o = function(e, t, n, i, o) {
            function r(e) {
                if (!o.isFunction(e.supports)) throw {
                    message: "Tried to register a provider with an invalid object"
                };
                var i = function() {};
                i.prototype = n, e.prototype = new i, t.defaultList.unshift(e)
            }
            var s = e.selectPlayer,
                a = function() {
                    var e = s.apply(this, arguments);
                    return e ? e : {
                        registerPlugin: function(e, t, n) {
                            "jwpsrv" !== e && i.registerPlugin(e, t, n)
                        }
                    }
                };
            return o.extend(e, {
                selectPlayer: a,
                registerProvider: r
            })
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(44), n(83)], o = function(e, t) {
            var n = [],
                i = 0,
                o = function(i) {
                    var o, l;
                    return i ? "string" == typeof i ? (o = r(i), o || (l = document.getElementById(i))) : "number" == typeof i ? o = n[i] : i.nodeType && (l = i, o = r(l.id)) : o = n[0], o ? o : l ? s(new e(l, a)) : {
                        registerPlugin: t.registerPlugin
                    }
                },
                r = function(e) {
                    for (var t = 0; t < n.length; t++)
                        if (n[t].id === e) return n[t];
                    return null
                },
                s = function(e) {
                    return i++, e.uniqueId = i, n.push(e), e
                },
                a = function(e) {
                    for (var t = n.length; t--;)
                        if (n[t].uniqueId === e.uniqueId) {
                            n.splice(t, 1);
                            break
                        }
                };
            return {
                selectPlayer: o,
                registerPlugin: t.registerPlugin
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(46), n(64), n(65), n(67), n(48), n(76), n(45), n(77), n(156), n(157), n(158), n(52)], o = function(e, t, n, i, o, r, s, a, l, c, u, d) {
            function A(e) {
                o.addClass(e, "jw-tab-focus")
            }

            function p(e) {
                o.removeClass(e, "jw-tab-focus")
            }
            var w = function(w, f) {
                var g, h = this,
                    m = !1,
                    j = {};
                s.extend(this, i), this.utils = o, this._ = s, this.version = d, this.trigger = function(e, t) {
                    return t = s.isObject(t) ? s.extend({}, t) : {}, t.type = e, i.trigger.call(h, e, t)
                }, this.on = function(e, t) {
                    if (s.isString(t)) throw new TypeError("eval callbacks depricated");
                    var n = function() {
                        try {
                            t.apply(this, arguments)
                        } catch (n) {
                            o.log('There was an error calling back an event handler for "' + e + '". Error: ' + n.message)
                        }
                    };
                    return i.on.call(h, e, n)
                }, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this);
                var v = function() {
                    g && (g.off(), g.reset()), g = new a(w), l(h, g), c(h, g), g.on(t.JWPLAYER_PLAYLIST_ITEM, function() {
                        j = {}
                    }), g.on(t.JWPLAYER_MEDIA_META, function(e) {
                        s.extend(j, e.metadata)
                    }), g.on(t.JWPLAYER_VIEW_TAB_FOCUS, function(e) {
                        e.hasFocus === !0 ? A(this.getContainer()) : p(this.getContainer())
                    }), g.on(t.JWPLAYER_READY, function(e) {
                        m = !0, b.tick("ready"), e.setupTime = b.between("setup", "ready")
                    }), g.on("all", h.trigger)
                };
                v(), u(this), this.id = w.id;
                var b = this._qoe = new r;
                b.tick("init");
                var k = function() {
                        m = !1, j = {}, h.off(), v()
                    },
                    E = function(e) {
                        var t = h.plugins;
                        return t && t[e]
                    };
                return this.setup = function(t) {
                    b.tick("setup"), k(), o.foreach(t.events, function(e, t) {
                        var n = h[e];
                        "function" == typeof n && n.call(h, t)
                    });
                    var n = new e(t);
                    return n.id = h.id, g.setup(n, this), h
                }, this.qoe = function() {
                    var e = g.getItemQoe(),
                        n = b.between("setup", "ready"),
                        i = e.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, t.JWPLAYER_MEDIA_FIRST_FRAME);
                    return {
                        setupTime: n,
                        firstFrame: i,
                        player: b.dump(),
                        item: e.dump()
                    }
                }, this.getContainer = function() {
                    return g.getContainer ? g.getContainer() : w
                }, this.getMeta = this.getItemMeta = function() {
                    return j
                }, this.getPlaylistItem = function(e) {
                    return o.exists(e) || (e = h.getPlaylistIndex()), h.getPlaylist()[e]
                }, this.getRenderingMode = function() {
                    return "html5"
                }, this.load = function(e) {
                    var t = E("vast") || E("googima");
                    return t && t.destroy(), g.load(e), h
                }, this.play = function(e) {
                    if (void 0 !== e) return g.play(e), h;
                    e = h.getState();
                    var t = g._instreamAdapter,
                        i = t && t.getState();
                    if (i) {
                        switch (i) {
                            case n.IDLE:
                            case n.PLAYING:
                            case n.BUFFERING:
                                t.pause();
                                break;
                            default:
                                t.play()
                        }
                        return h
                    }
                    switch (e) {
                        case n.PLAYING:
                        case n.BUFFERING:
                            g.pause();
                            break;
                        default:
                            g.play()
                    }
                    return h
                }, this.pause = function(e) {
                    if (void 0 === e) switch (e = h.getState()) {
                        case n.PLAYING:
                        case n.BUFFERING:
                            g.pause();
                            break;
                        default:
                            g.play()
                    } else g.pause(e);
                    return h
                }, this.createInstream = function() {
                    return g.createInstream()
                }, this.playAd = this.pauseAd = s.noop, this.remove = function() {
                    return f(h), g.playerDestroy && g.playerDestroy(), h.trigger("remove"), k(), h
                }, this
            };
            return w
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            var e = {},
                t = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = t.slice,
                r = t.concat,
                s = n.toString,
                a = n.hasOwnProperty,
                l = t.map,
                c = t.forEach,
                u = t.filter,
                d = t.every,
                A = t.some,
                p = t.indexOf,
                w = Array.isArray,
                f = Object.keys,
                g = i.bind,
                h = function(e) {
                    return e instanceof h ? e : this instanceof h ? void 0 : new h(e)
                },
                m = h.each = h.forEach = function(t, n, i) {
                    if (null == t) return t;
                    if (c && t.forEach === c) t.forEach(n, i);
                    else if (t.length === +t.length) {
                        for (var o = 0, r = t.length; r > o; o++)
                            if (n.call(i, t[o], o, t) === e) return
                    } else
                        for (var s = h.keys(t), o = 0, r = s.length; r > o; o++)
                            if (n.call(i, t[s[o]], s[o], t) === e) return; return t
                };
            h.map = h.collect = function(e, t, n) {
                var i = [];
                return null == e ? i : l && e.map === l ? e.map(t, n) : (m(e, function(e, o, r) {
                    i.push(t.call(n, e, o, r))
                }), i)
            }, h.find = h.detect = function(e, t, n) {
                var i;
                return j(e, function(e, o, r) {
                    return t.call(n, e, o, r) ? (i = e, !0) : void 0
                }), i
            }, h.filter = h.select = function(e, t, n) {
                var i = [];
                return null == e ? i : u && e.filter === u ? e.filter(t, n) : (m(e, function(e, o, r) {
                    t.call(n, e, o, r) && i.push(e)
                }), i)
            }, h.reject = function(e, t, n) {
                return h.filter(e, function(e, i, o) {
                    return !t.call(n, e, i, o)
                }, n)
            }, h.compact = function(e) {
                return h.filter(e, h.identity)
            }, h.every = h.all = function(t, n, i) {
                n || (n = h.identity);
                var o = !0;
                return null == t ? o : d && t.every === d ? t.every(n, i) : (m(t, function(t, r, s) {
                    return (o = o && n.call(i, t, r, s)) ? void 0 : e
                }), !!o)
            };
            var j = h.some = h.any = function(t, n, i) {
                n || (n = h.identity);
                var o = !1;
                return null == t ? o : A && t.some === A ? t.some(n, i) : (m(t, function(t, r, s) {
                    return o || (o = n.call(i, t, r, s)) ? e : void 0
                }), !!o)
            };
            h.size = function(e) {
                return null == e ? 0 : e.length === +e.length ? e.length : h.keys(e).length
            }, h.after = function(e, t) {
                return function() {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }, h.before = function(e, t) {
                var n;
                return function() {
                    return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
                }
            };
            var v = function(e) {
                return null == e ? h.identity : h.isFunction(e) ? e : h.property(e)
            };
            h.sortedIndex = function(e, t, n, i) {
                n = v(n);
                for (var o = n.call(i, t), r = 0, s = e.length; s > r;) {
                    var a = r + s >>> 1;
                    n.call(i, e[a]) < o ? r = a + 1 : s = a
                }
                return r
            };
            var j = h.some = h.any = function(t, n, i) {
                n || (n = h.identity);
                var o = !1;
                return null == t ? o : A && t.some === A ? t.some(n, i) : (m(t, function(t, r, s) {
                    return o || (o = n.call(i, t, r, s)) ? e : void 0
                }), !!o)
            };
            h.contains = h.include = function(e, t) {
                return null == e ? !1 : (e.length !== +e.length && (e = h.values(e)), h.indexOf(e, t) >= 0)
            }, h.where = function(e, t) {
                return h.filter(e, h.matches(t))
            }, h.findWhere = function(e, t) {
                return h.find(e, h.matches(t))
            }, h.max = function(e, t, n) {
                if (!t && h.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                var i = -(1 / 0),
                    o = -(1 / 0);
                return m(e, function(e, r, s) {
                    var a = t ? t.call(n, e, r, s) : e;
                    a > o && (i = e, o = a)
                }), i
            }, h.difference = function(e) {
                var n = r.apply(t, o.call(arguments, 1));
                return h.filter(e, function(e) {
                    return !h.contains(n, e)
                })
            }, h.without = function(e) {
                return h.difference(e, o.call(arguments, 1))
            }, h.indexOf = function(e, t, n) {
                if (null == e) return -1;
                var i = 0,
                    o = e.length;
                if (n) {
                    if ("number" != typeof n) return i = h.sortedIndex(e, t), e[i] === t ? i : -1;
                    i = 0 > n ? Math.max(0, o + n) : n
                }
                if (p && e.indexOf === p) return e.indexOf(t, n);
                for (; o > i; i++)
                    if (e[i] === t) return i;
                return -1
            };
            var b = function() {};
            h.bind = function(e, t) {
                var n, i;
                if (g && e.bind === g) return g.apply(e, o.call(arguments, 1));
                if (!h.isFunction(e)) throw new TypeError;
                return n = o.call(arguments, 2), i = function() {
                    if (!(this instanceof i)) return e.apply(t, n.concat(o.call(arguments)));
                    b.prototype = e.prototype;
                    var r = new b;
                    b.prototype = null;
                    var s = e.apply(r, n.concat(o.call(arguments)));
                    return Object(s) === s ? s : r
                }
            }, h.partial = function(e) {
                var t = o.call(arguments, 1);
                return function() {
                    for (var n = 0, i = t.slice(), o = 0, r = i.length; r > o; o++) i[o] === h && (i[o] = arguments[n++]);
                    for (; n < arguments.length;) i.push(arguments[n++]);
                    return e.apply(this, i)
                }
            }, h.once = h.partial(h.before, 2), h.memoize = function(e, t) {
                var n = {};
                return t || (t = h.identity),
                    function() {
                        var i = t.apply(this, arguments);
                        return h.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                    }
            }, h.delay = function(e, t) {
                var n = o.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, h.defer = function(e) {
                return h.delay.apply(h, [e, 1].concat(o.call(arguments, 1)))
            }, h.throttle = function(e, t, n) {
                var i, o, r, s = null,
                    a = 0;
                n || (n = {});
                var l = function() {
                    a = n.leading === !1 ? 0 : h.now(), s = null, r = e.apply(i, o), i = o = null
                };
                return function() {
                    var c = h.now();
                    a || n.leading !== !1 || (a = c);
                    var u = t - (c - a);
                    return i = this, o = arguments, 0 >= u ? (clearTimeout(s), s = null, a = c, r = e.apply(i, o), i = o = null) : s || n.trailing === !1 || (s = setTimeout(l, u)), r
                }
            }, h.keys = function(e) {
                if (!h.isObject(e)) return [];
                if (f) return f(e);
                var t = [];
                for (var n in e) h.has(e, n) && t.push(n);
                return t
            }, h.invert = function(e) {
                for (var t = {}, n = h.keys(e), i = 0, o = n.length; o > i; i++) t[e[n[i]]] = n[i];
                return t
            }, h.defaults = function(e) {
                return m(o.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) void 0 === e[n] && (e[n] = t[n])
                }), e
            }, h.extend = function(e) {
                return m(o.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }, h.pick = function(e) {
                var n = {},
                    i = r.apply(t, o.call(arguments, 1));
                return m(i, function(t) {
                    t in e && (n[t] = e[t])
                }), n
            }, h.clone = function(e) {
                return h.isObject(e) ? h.isArray(e) ? e.slice() : h.extend({}, e) : e
            }, h.isArray = w || function(e) {
                return "[object Array]" == s.call(e)
            }, h.isObject = function(e) {
                return e === Object(e)
            }, m(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
                h["is" + e] = function(t) {
                    return s.call(t) == "[object " + e + "]"
                }
            }), h.isArguments(arguments) || (h.isArguments = function(e) {
                return !(!e || !h.has(e, "callee"))
            }), h.isFunction = function(e) {
                return "function" == typeof e
            }, h.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, h.isNaN = function(e) {
                return h.isNumber(e) && e != +e
            }, h.isBoolean = function(e) {
                return e === !0 || e === !1 || "[object Boolean]" == s.call(e)
            }, h.isNull = function(e) {
                return null === e
            }, h.isUndefined = function(e) {
                return void 0 === e
            }, h.has = function(e, t) {
                return a.call(e, t)
            }, h.identity = function(e) {
                return e
            }, h.constant = function(e) {
                return function() {
                    return e
                }
            }, h.property = function(e) {
                return function(t) {
                    return t[e]
                }
            }, h.propertyOf = function(e) {
                return null == e ? function() {} : function(t) {
                    return e[t]
                }
            }, h.matches = function(e) {
                return function(t) {
                    if (t === e) return !0;
                    for (var n in e)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
            }, h.now = Date.now || function() {
                return (new Date).getTime()
            }, h.result = function(e, t) {
                if (null == e) return void 0;
                var n = e[t];
                return h.isFunction(n) ? n.call(e) : n
            };
            var k = 0;
            return h.uniqueId = function(e) {
                var t = ++k + "";
                return e ? e + t : t
            }, h
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(47), n(54), n(48), n(45)], o = function(e, t, n, i) {
            var o = function(o) {
                var r = window.jwplayer || {},
                    s = /\.(js|swf)$/,
                    a = i.extend({}, r.defaults),
                    l = new t(i.extend({}, a, o)),
                    c = l.plugins || {},
                    u = l.analytics,
                    d = n.repo(),
                    A = d + "jwpsrv.js",
                    p = d + "sharing.js",
                    w = d + "related.js",
                    f = d + "gapro.js",
                    g = l.key || r.key || a.key,
                    h = new e(g),
                    m = h.edition();
                return l.plugins = c, l.key = g, "ads" === m && l.advertising && (s.test(l.advertising.client) ? c[l.advertising.client] = l.advertising : c[d + l.advertising.client + ".js"] = l.advertising), delete l.advertising, l.analytics && s.test(l.analytics.client) && (A = l.analytics.client), delete l.analytics, c[A] = u ? u : {}, delete c.sharing, delete c.related, l.ga && (s.test(l.ga.client) && (f = l.ga.client), c[f] = l.ga), l.sharing && (s.test(l.sharing.client) && (p = l.sharing.client), c[p] = l.sharing), l.related && (s.test(l.related.client) && (w = l.related.client), c[w] = l.related), l
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(53)], o = function(e, t) {
            function n(e) {
                return t.decrypt(e, o)
            }
            var i = "invalid",
                o = "RnXcsftYjWRDA^Uy",
                r = function(t) {
                    function o(t) {
                        e.exists(t) || (t = "");
                        try {
                            t = n(t);
                            var o = t.split("/");
                            if (r = o[0], "pro" === r && (r = "premium"), o.length > 2 && /^(free|pro|premium|enterprise|ads)/i.test(r)) {
                                s = o[1];
                                var l = parseInt(o[2]);
                                l > 0 && (a = new Date, a.setTime(l))
                            } else r = i
                        } catch (c) {
                            r = i
                        }
                    }
                    var r, s, a;
                    this.edition = function() {
                        return a && a.getTime() < (new Date).getTime() ? i : r
                    }, this.token = function() {
                        return s
                    }, this.expiration = function() {
                        return a
                    }, o(t)
                };
            return r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(49), n(50), n(45), n(51), n(52)], o = function(e, t, n, i, o) {
            function r(e) {
                return /^(?:(?:https?|file)\:)?\/\//.test(e)
            }

            function s(e) {
                return function() {
                    return p(e)
                }
            }

            function a(e) {
                return e && e.indexOf("://") >= 0 && e.split("/")[2] !== window.location.href.split("/")[2]
            }

            function l(e, t, n) {
                return function() {
                    e("Error loading file", t, n)
                }
            }

            function c(e, t, n, i, o) {
                return function() {
                    if (4 === e.readyState) switch (e.status) {
                        case 200:
                            u(e, t, n, i, o)();
                            break;
                        case 404:
                            i("File not found", t, e)
                    }
                }
            }

            function u(e, t, i, o, r) {
                return function() {
                    var s, a;
                    if (r) i(e);
                    else {
                        try {
                            if (s = e.responseXML, s && (a = s.firstChild, s.lastChild && "parsererror" === s.lastChild.nodeName)) return void(o && o("Invalid XML", t, e))
                        } catch (l) {}
                        if (s && a) return i(e);
                        var c = b(e.responseText);
                        if (!c || !c.firstChild) return void(o && o(e.responseText ? "Invalid XML" : t, t, e));
                        e = n.extend({}, e, {
                            responseXML: c
                        }), i(e)
                    }
                }
            }
            var d = {},
                A = d.exists = function(e) {
                    switch (typeof e) {
                        case "string":
                            return e.length > 0;
                        case "object":
                            return null !== e;
                        case "undefined":
                            return !1
                    }
                    return !0
                };
            d.createElement = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.firstChild
            }, d.styleDimension = function(e) {
                return e + (e.toString().indexOf("%") > 0 ? "" : "px")
            }, d.getAbsolutePath = function(e, t) {
                if (A(t) || (t = document.location.href), A(e)) {
                    if (r(e)) return e;
                    var n, i = t.substring(0, t.indexOf("://") + 3),
                        o = t.substring(i.length, t.indexOf("/", i.length + 1));
                    if (0 === e.indexOf("/")) n = e.split("/");
                    else {
                        var s = t.split("?")[0];
                        s = s.substring(i.length + o.length + 1, s.lastIndexOf("/")), n = s.split("/").concat(e.split("/"))
                    }
                    for (var a = [], l = 0; l < n.length; l++) n[l] && A(n[l]) && "." !== n[l] && (".." === n[l] ? a.pop() : a.push(n[l]));
                    return i + o + "/" + a.join("/")
                }
            }, d.log = function() {
                window.console && ("object" == typeof console.log ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log.apply(console, arguments))
            };
            var p = n.memoize(function(e) {
                var t = navigator.userAgent.toLowerCase();
                return null !== t.match(e)
            });
            d.isFF = s(/firefox/i), d.isChrome = s(/chrome/i), d.isIPod = s(/iP(hone|od)/i), d.isIPad = s(/iPad/i), d.isSafari602 = s(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);
            var w = d.isIETrident = function(e) {
                    return e ? (e = parseFloat(e).toFixed(1), p(new RegExp("trident/.+rv:\\s*" + e, "i"))) : p(/trident/i)
                },
                f = d.isMSIE = function(e) {
                    return e ? (e = parseFloat(e).toFixed(1), p(new RegExp("msie\\s*" + e, "i"))) : p(/msie/i)
                };
            d.isIE = function(e) {
                return e ? (e = parseFloat(e).toFixed(1), e >= 11 ? w(e) : f(e)) : f() || w()
            }, d.isSafari = function() {
                return p(/safari/i) && !p(/chrome/i) && !p(/chromium/i) && !p(/android/i)
            };
            var g = d.isIOS = function(e) {
                return p(e ? new RegExp("iP(hone|ad|od).+\\sOS\\s" + e, "i") : /iP(hone|ad|od)/i)
            };
            d.isAndroidNative = function(e) {
                return h(e, !0)
            };
            var h = d.isAndroid = function(e, t) {
                return t && p(/chrome\/[123456789]/i) && !p(/chrome\/18/) ? !1 : e ? (m(e) && !/\./.test(e) && (e = "" + e + "."), p(new RegExp("Android\\s*" + e, "i"))) : p(/Android/i)
            };
            d.isMobile = function() {
                return g() || h()
            }, d.isIframe = function() {
                return window.frameElement && "IFRAME" === window.frameElement.nodeName
            };
            var m = d.isInt = function(e) {
                    return parseFloat(e) % 1 === 0
                },
                j = d.typeOf = function(e) {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t && n.isArray(e) ? "array" : t
                };
            d.flashVersion = function() {
                if (h()) return 0;
                var e, t = navigator.plugins;
                if (t && (e = t["Shockwave Flash"], e && e.description)) return parseFloat(e.description.replace(/\D+(\d+)\..*/, "$1"));
                if ("undefined" != typeof window.ActiveXObject) {
                    var n = d.tryCatch(function() {
                        return e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e ? parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, ".")) : void 0
                    });
                    return n instanceof d.Error ? 0 : n
                }
                return 0
            }, d.isFlashSupported = function() {
                var e = d.flashVersion();
                return e && e >= 11.2
            }, d.getScriptPath = n.memoize(function(e) {
                for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                    var i = t[n].src;
                    if (i && i.indexOf(e) >= 0) return i.substr(0, i.indexOf(e))
                }
                return ""
            }), d.isYouTube = function(e, t) {
                return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
            }, d.youTubeID = function(e) {
                var t = d.tryCatch(function() {
                    return /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e).slice(1).join("").replace("?", "")
                });
                return t instanceof d.Error ? "" : t
            }, d.isRtmp = function(e, t) {
                return 0 === e.indexOf("rtmp") || "rtmp" === t
            }, d.adaptiveType = function(e) {
                if (-1 !== e) {
                    var t = -120;
                    if (t >= e) return "DVR";
                    if (0 > e || e === 1 / 0) return "LIVE"
                }
                return "VOD"
            }, d.foreach = function(e, t) {
                var n, i;
                for (n in e) "function" === j(e.hasOwnProperty) ? e.hasOwnProperty(n) && (i = e[n], t(n, i)) : (i = e[n], t(n, i))
            };
            var v = d.isHTTPS = function() {
                return 0 === window.location.href.indexOf("https")
            };
            d.repo = function() {
                var e = o.split("+")[0],
                    t = "http://p.jwpcdn.com/player/v/" + e + "/";
                return v() ? t.replace("http://", "https://ssl.") : t
            }, d.getSkinUrl = function(t) {
                return e.repo + "skins/" + e.skinsVersion + "/" + t + ".css"
            }, d.addStyleSheet = function(e) {
                var t = document.createElement("link");
                t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
            }, d.versionCheck = function(e) {
                var t = ("0" + e).split(/\W/),
                    n = o.split(/\W/),
                    i = parseFloat(t[0]),
                    r = parseFloat(n[0]);
                return i > r ? !1 : i === r && parseFloat("0" + t[1]) > parseFloat(n[1]) ? !1 : !0
            }, d.ajax = function(e, t, n, i) {
                var o, r = !1;
                if (e.indexOf("#") > 0 && (e = e.replace(/#.*$/, "")), a(e) && A(window.XDomainRequest)) o = new window.XDomainRequest, o.onload = u(o, e, t, n, i), o.ontimeout = o.onprogress = function() {}, o.timeout = 5e3;
                else {
                    if (!A(window.XMLHttpRequest)) return n && n("", e, o), o;
                    o = new window.XMLHttpRequest, o.onreadystatechange = c(o, e, t, n, i)
                }
                o.overrideMimeType && o.overrideMimeType("text/xml"), o.onerror = l(n, e, o);
                var s = d.tryCatch(function() {
                    o.open("GET", e, !0)
                });
                return s instanceof d.Error && (r = !0), setTimeout(function() {
                    if (r) return void(n && n(e, e, o));
                    var t = d.tryCatch(function() {
                        o.send()
                    });
                    t instanceof d.Error && n && n(e, e, o)
                }, 0), o
            };
            var b = d.parseXML = function(e) {
                var t = null;
                return d.tryCatch(function() {
                    if (window.DOMParser) {
                        t = (new window.DOMParser).parseFromString(e, "text/xml");
                        var n = t.childNodes;
                        n && n.length && n[0].firstChild && "parsererror" === n[0].firstChild.nodeName && (t = null)
                    } else t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)
                }), t
            };
            d.between = function(e, t, n) {
                return Math.max(Math.min(e, n), t)
            }, d.prefix = function(e, t) {
                return n.map(e, function(e) {
                    return t + e
                })
            }, d.suffix = function(e, t) {
                return n.map(e, function(e) {
                    return e + t
                })
            }, d.seconds = function(e) {
                if (n.isNumber(e)) return e;
                e = e.replace(",", ".");
                var t = e.split(":"),
                    i = 0;
                return "s" === e.slice(-1) ? i = parseFloat(e) : "m" === e.slice(-1) ? i = 60 * parseFloat(e) : "h" === e.slice(-1) ? i = 3600 * parseFloat(e) : t.length > 1 ? (i = parseFloat(t[t.length - 1]), i += 60 * parseFloat(t[t.length - 2]), 3 === t.length && (i += 3600 * parseFloat(t[t.length - 3]))) : i = parseFloat(e), i
            }, d.serialize = function(e) {
                if (void 0 === e) return null;
                if ("string" == typeof e && e.length < 6) {
                    var t = e.toLowerCase();
                    if ("true" === t) return !0;
                    if ("false" === t) return !1;
                    if (!isNaN(Number(e)) && !isNaN(parseFloat(e))) return Number(e)
                }
                return e
            }, d.classList = function(e) {
                return e.classList ? e.classList : e.className.split(" ")
            }, d.hasClass = i.hasClass, d.addClass = function(e, i) {
                var o = n.isString(e.className) ? e.className.split(" ") : [],
                    r = n.isArray(i) ? i : i.split(" ");
                n.each(r, function(e) {
                    n.contains(o, e) || o.push(e)
                }), e.className = t.trim(o.join(" "))
            }, d.removeClass = function(e, i) {
                var o = n.isString(e.className) ? e.className.split(" ") : [],
                    r = n.isArray(i) ? i : i.split(" ");
                e.className = t.trim(n.difference(o, r).join(" "))
            }, d.toggleClass = function(e, t, i) {
                var o = d.hasClass(e, t);
                i = n.isBoolean(i) ? i : !o, i !== o && (i ? d.addClass(e, t) : d.removeClass(e, t))
            }, d.emptyElement = function(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }, d.indexOf = n.indexOf, d.noop = function() {}, d.parseDimension = function(e) {
                return "string" == typeof e ? "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
            }, d.timeFormat = function(e) {
                if (e > 0) {
                    var t = Math.floor(e / 3600),
                        n = Math.floor((e - 3600 * t) / 60),
                        i = Math.floor(e % 60);
                    return (t ? t + ":" : "") + (10 > n ? "0" : "") + n + ":" + (10 > i ? "0" : "") + i
                }
                return "00:00"
            }, d.bounds = function(e) {
                var t = {
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    top: 0,
                    bottom: 0
                };
                if (!e || !document.body.contains(e)) return t;
                if (e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect(e),
                        i = window.pageYOffset,
                        o = window.pageXOffset;
                    if (!(n.width || n.height || n.left || n.top)) return t;
                    t.left = n.left + o, t.right = n.right + o, t.top = n.top + i, t.bottom = n.bottom + i, t.width = n.right - n.left, t.height = n.bottom - n.top
                } else {
                    t.width = 0 | e.offsetWidth, t.height = 0 | e.offsetHeight;
                    do t.left += 0 | e.offsetLeft, t.top += 0 | e.offsetTop; while (e = e.offsetParent);
                    t.right = t.left + t.width, t.bottom = t.top + t.height
                }
                return t
            }, d.empty = function(e) {
                if (e)
                    for (; e.childElementCount > 0;) e.removeChild(e.children[0])
            };
            var k = d.Error = function(e, t) {
                this.name = e, this.message = t
            };
            return d.tryCatch = function(e, t, n) {
                if (t = t || this, n = n || [], window.jwplayer && window.jwplayer.debug) return e.apply(t, n);
                try {
                    return e.apply(t, n)
                } catch (i) {
                    return new k(e.name, i)
                }
            }, d
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            return {
                repo: "//p.jwpcdn.com/7/",
                skinsVersion: "0.1.0",
                SkinsIncluded: ["beelden", "bekle", "five", "glow", "roundster", "seven", "six", "stormtrooper", "vapor"],
                SkinsLoadable: []
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            function e(e) {
                return e.indexOf("(format=m3u8-") > -1 ? "m3u8" : !1
            }
            var t = function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                },
                n = function(e, t, n) {
                    for (n || (n = "0"); e.length < t;) e = n + e;
                    return e
                },
                i = function(e, t) {
                    for (var n = 0; n < e.attributes.length; n++)
                        if (e.attributes[n].name && e.attributes[n].name.toLowerCase() === t.toLowerCase()) return e.attributes[n].value.toString();
                    return ""
                },
                o = function(t) {
                    if (!t || "rtmp" === t.substr(0, 4)) return "";
                    var n = e(t);
                    return n ? n : (t = t.substring(t.lastIndexOf("/") + 1, t.length).split("?")[0].split("#")[0], t.lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : void 0)
                };
            return {
                trim: t,
                pad: n,
                xmlAttribute: i,
                extension: o
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            return {
                hasClass: function(e, t) {
                    var n = " " + t + " ";
                    return 1 === e.nodeType && (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(n) >= 0
                }
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            return "7.0.0+commercial_v7-0-0.24.commercial.3e1de5.jwplayer.bb6cf1.analytics.0d93c8.vast.1f89fa.googima.916050.plugins.975a51"
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            var e = {};
            e.encrypt = function(i, o) {
                if (0 == i.length) return "";
                var r = e.strToLongs(n.encode(i));
                r.length <= 1 && (r[1] = 0);
                for (var s, a, l = e.strToLongs(n.encode(o).slice(0, 16)), c = r.length, u = r[c - 1], d = r[0], A = 2654435769, p = Math.floor(6 + 52 / c), w = 0; p-- > 0;) {
                    w += A, a = w >>> 2 & 3;
                    for (var f = 0; c > f; f++) d = r[(f + 1) % c], s = (u >>> 5 ^ d << 2) + (d >>> 3 ^ u << 4) ^ (w ^ d) + (l[3 & f ^ a] ^ u), u = r[f] += s
                }
                var g = e.longsToStr(r);
                return t.encode(g)
            }, e.decrypt = function(i, o) {
                if (0 == i.length) return "";
                for (var r, s, a = e.strToLongs(t.decode(i)), l = e.strToLongs(n.encode(o).slice(0, 16)), c = a.length, u = a[c - 1], d = a[0], A = 2654435769, p = Math.floor(6 + 52 / c), w = p * A; 0 != w;) {
                    s = w >>> 2 & 3;
                    for (var f = c - 1; f >= 0; f--) u = a[f > 0 ? f - 1 : c - 1], r = (u >>> 5 ^ d << 2) + (d >>> 3 ^ u << 4) ^ (w ^ d) + (l[3 & f ^ s] ^ u), d = a[f] -= r;
                    w -= A
                }
                var g = e.longsToStr(a);
                return g = g.replace(/\0+$/, ""), n.decode(g)
            }, e.strToLongs = function(e) {
                for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++) t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
                return t
            }, e.longsToStr = function(e) {
                for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
                return t.join("")
            };
            var t = {};
            t.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", t.encode = function(e, i) {
                i = "undefined" == typeof i ? !1 : i;
                var o, r, s, a, l, c, u, d, A, p, w, f = [],
                    g = "",
                    h = t.code;
                if (p = i ? n.encode(e) : e, A = p.length % 3, A > 0)
                    for (; A++ < 3;) g += "=", p += "\x00";
                for (A = 0; A < p.length; A += 3) o = p.charCodeAt(A), r = p.charCodeAt(A + 1), s = p.charCodeAt(A + 2), a = o << 16 | r << 8 | s, l = a >> 18 & 63, c = a >> 12 & 63, u = a >> 6 & 63, d = 63 & a, f[A / 3] = h.charAt(l) + h.charAt(c) + h.charAt(u) + h.charAt(d);
                return w = f.join(""), w = w.slice(0, w.length - g.length) + g
            }, t.decode = function(e, i) {
                i = "undefined" == typeof i ? !1 : i;
                var o, r, s, a, l, c, u, d, A, p, w = [],
                    f = t.code;
                p = i ? n.decode(e) : e;
                for (var g = 0; g < p.length; g += 4) a = f.indexOf(p.charAt(g)), l = f.indexOf(p.charAt(g + 1)), c = f.indexOf(p.charAt(g + 2)), u = f.indexOf(p.charAt(g + 3)), d = a << 18 | l << 12 | c << 6 | u, o = d >>> 16 & 255, r = d >>> 8 & 255, s = 255 & d, w[g / 4] = String.fromCharCode(o, r, s), 64 == u && (w[g / 4] = String.fromCharCode(o, r)), 64 == c && (w[g / 4] = String.fromCharCode(o));
                return A = w.join(""), i ? n.decode(A) : A
            };
            var n = {};
            return n.encode = function(e) {
                var t = e.replace(/[\u0080-\u07ff]/g, function(e) {
                    var t = e.charCodeAt(0);
                    return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
                });
                return t = t.replace(/[\u0800-\uffff]/g, function(e) {
                    var t = e.charCodeAt(0);
                    return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
                })
            }, n.decode = function(e) {
                var t = e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(e) {
                    var t = (15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2);
                    return String.fromCharCode(t)
                });
                return t = t.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(e) {
                    var t = (31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1);
                    return String.fromCharCode(t)
                })
            }, e
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(55), n(45)], o = function(e, t, n) {
            function i(t) {
                n.each(t, function(n, i) {
                    t[i] = e.serialize(n)
                })
            }

            function o(e) {
                return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
            }

            function r(t, n) {
                if (-1 === n.toString().indexOf("%")) return 0;
                if ("string" != typeof t || !e.exists(t)) return 0;
                var i = t.indexOf(":");
                if (-1 === i) return 0;
                var o = parseFloat(t.substr(0, i)),
                    r = parseFloat(t.substr(i + 1));
                return 0 >= o || 0 >= r ? 0 : r / o * 100 + "%"
            }
            var s = {
                    width: 480,
                    height: 270,
                    cookies: !0
                },
                a = function(t) {
                    var a = n.extend({}, (window.jwplayer || {}).defaults, t);
                    i(a);
                    var l = n.extend({}, s, a);
                    return l.width = o(l.width), l.height = o(l.height), l.base = l.base || e.getScriptPath("jwplayer.js"), l.flashplayer = l.flashplayer || l.base + "jwplayer.flash.swf", l.aspectratio = r(l.aspectratio, l.width), n.isObject(l.skin) && (l.skinUrl = l.skin.url, l.skinColorInactive = l.skin.inactive, l.skinColorActive = l.skin.active, l.skinColorBackground = l.skin.background, l.skin.name ? l.skin = l.skin.name : delete l.skin), n.isString(l.skin) && l.skin.indexOf(".xml") > 0 && (console.log("JW Player does not support XML skins, please update your config"), l.skin = l.skin.replace(".xml", "")), l.aspectratio || delete l.aspectratio, l.playlist || (l.playlist = n.clone(l)), l
                };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(56), n(57), n(45), n(59)], o = function(e, t, n, i) {
            function o(e, t) {
                var i = n.map(e, function(e) {
                        var n = t.choose(e),
                            i = t.priority(n);
                        return {
                            priority: i,
                            type: e.type
                        }
                    }),
                    o = n.max(i, n.property("priority"));
                return o.priority > -1 ? o.type : null
            }
            var r = function(t) {
                return t = n.isArray(t) ? t : [t], n.compact(n.map(t, e))
            };
            r.filterPlaylist = function(e, t, i, o) {
                var r = [];
                return n.each(e, function(e) {
                    e = n.extend({}, e), e.sources = s(e.sources, t, i, e.drm || o), e.sources.length && (e.file = e.sources[0].file, r.push(e))
                }), r
            };
            var s = r.filterSources = function(e, r, s, a) {
                r && r.choose || (r = new i({
                    primary: r ? "flash" : null
                })), e = n.compact(n.map(e, function(e) {
                    return n.isObject(e) ? (s && (e.androidhls = s), (e.drm || a) && (e.drm = e.drm || a), t(e)) : void 0
                }));
                var l = o(e, r);
                return n.where(e, {
                    type: l
                })
            };
            return r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(57), n(58)], o = function(e, t, n) {
            var i = {
                    sources: [],
                    tracks: []
                },
                o = function(o) {
                    o = o || {}, e.isArray(o.tracks) || delete o.tracks;
                    var r = e.extend({}, i, o);
                    e.isObject(r.sources) && !e.isArray(r.sources) && (r.sources = [t(r.sources)]), e.isArray(r.sources) && 0 !== r.sources.length || (o.levels ? r.sources = o.levels : r.sources = [t(o)]);
                    for (var s = 0; s < r.sources.length; s++) {
                        var a = r.sources[s];
                        if (a) {
                            var l = a["default"];
                            l ? a["default"] = "true" === l.toString() : a["default"] = !1, r.sources[s].label || (r.sources[s].label = s.toString()), r.sources[s] = t(r.sources[s])
                        }
                    }
                    return r.sources = e.compact(r.sources), e.isArray(r.tracks) || (r.tracks = []), e.isArray(r.captions) && (r.tracks = r.tracks.concat(r.captions), delete r.captions), r.tracks = e.compact(e.map(r.tracks, n)), r
                };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(50), n(45)], o = function(e, t, n) {
            var i = {
                    "default": !1
                },
                o = function(o) {
                    if (o && o.file) {
                        var r = n.extend({}, i, o);
                        if (r.file = t.trim("" + r.file), r.type && r.type.indexOf("/") > 0 && (r.type = r.type.split("/")[1]), !r.type)
                            if (e.isYouTube(r.file)) r.type = "youtube";
                            else if (e.isRtmp(r.file)) r.type = "rtmp";
                        else {
                            var s = t.extension(r.file);
                            r.type = s
                        }
                        if (r.type) return "m3u8" === r.type && (r.type = "hls"), "smil" === r.type && (r.type = "rtmp"), "m4a" === r.type && (r.type = "aac"), n.each(r, function(e, t) {
                            "" === e && delete r[t]
                        }), r
                    }
                };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(45)], o = function(e, t) {
            var n = {
                    kind: "captions",
                    "default": !1
                },
                i = function(e) {
                    return e && e.file ? t.extend({}, n, e) : void 0
                };
            return i
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(60)], o = function(e) {
            return e.prototype.providerSupports = function(e, t) {
                return e.supports(t, this.config.edition)
            }, e
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(61), n(71), n(74), n(45)], o = function(e, t, n, i) {
            function o(n) {
                this.providers = o.defaultList.slice(), this.config = n || {}, "flash" === this.config.primary && r(this.providers, e, t)
            }

            function r(e, t, n) {
                var o = i.indexOf(e, t),
                    r = i.indexOf(e, n),
                    s = e[o];
                e[o] = e[r], e[r] = s
            }
            return o.defaultList = [e, t, n], i.extend(o.prototype, {
                providerSupports: function(e, t) {
                    return e.supports(t)
                },
                choose: function(e) {
                    e = i.isObject(e) ? e : {};
                    var t = i.find(this.providers, function(t) {
                        return this.providerSupports(t, e)
                    }, this);
                    return t
                },
                priority: function(e) {
                    var t = i.indexOf(this.providers, e);
                    return 0 > t ? t : this.providers.length - t - 1
                }
            }), o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(62), n(48), n(63), n(45), n(64), n(65), n(66), n(69), n(70)], o = function(e, t, n, i, o, r, s, a, l) {
            function c(e, n) {
                t.foreach(e, function(e, t) {
                    n.addEventListener(e, t, !1)
                });
                var i = k(n, e.stalled);
                p = setInterval(i, f)
            }

            function u(e, n) {
                t.foreach(e, function(e, t) {
                    n.removeEventListener(e, t, !1)
                }), p && w(p)
            }

            function d(e) {
                if ("hls" === e.type)
                    if (e.androidhls) {
                        var n = t.isAndroidNative;
                        if (n(2) || n(3) || n("4.0")) return !1;
                        if (t.isAndroid()) return !0
                    } else if (t.isAndroid()) return !1;
                return null
            }

            function A(a, l) {
                function A(e) {
                    q.sendEvent("click", e)
                }

                function p() {
                    if (ie) {
                        var e = ce.duration;
                        V !== e && (V = e), j && ee > 0 && e > ee && q.seek(ee), f()
                    }
                }

                function f(e) {
                    C(e), ie && (q.state === r.PLAYING && (H = ce.currentTime, e && ($ = !0), q.sendEvent(o.JWPLAYER_MEDIA_TIME, {
                        position: H,
                        duration: V
                    })), q.state === r.STALLED && q.setState(r.PLAYING))
                }

                function k() {
                    q.sendEvent(o.JWPLAYER_MEDIA_META, {
                        duration: ce.duration,
                        height: ce.videoHeight,
                        width: ce.videoWidth
                    })
                }

                function E() {
                    ie && ($ || ($ = !0, x()))
                }

                function y() {
                    ie && (E(), ce.muted && (ce.muted = !1, ce.muted = !0), k())
                }

                function C() {
                    $ && ee > 0 && !j && (g ? setTimeout(function() {
                        ee > 0 && q.seek(ee)
                    }, 200) : q.seek(ee))
                }

                function x() {
                    K || (K = !0, q.sendEvent(o.JWPLAYER_MEDIA_BUFFER_FULL))
                }

                function L() {
                    ie && (q.setState(r.PLAYING), q.sendEvent(o.JWPLAYER_PROVIDER_FIRST_FRAME, {}))
                }

                function R() {
                    ie && (re || ce.paused || ce.ended || q.state !== r.LOADING && (q.seeking || q.setState(r.STALLED)))
                }

                function I() {
                    ie && (t.log("Error playing media: %o %s", ce.error, ce.src || G.file), q.sendEvent(o.JWPLAYER_MEDIA_ERROR, {
                        message: "Error loading media: File could not be played"
                    }))
                }

                function B(e) {
                    var n;
                    return "array" === t.typeOf(e) && e.length > 0 && (n = i.map(e, function(e, t) {
                        return {
                            label: e.label || t
                        }
                    })), n
                }

                function M(e) {
                    X = e, oe = P(e);
                    var t = B(e);
                    t && q.sendEvent(o.JWPLAYER_MEDIA_LEVELS, {
                        levels: t,
                        currentQuality: oe
                    })
                }

                function P(e) {
                    var t = Math.max(0, oe),
                        n = l.qualityLabel;
                    if (e)
                        for (var i = 0; i < e.length; i++)
                            if (e[i]["default"] && (t = i), n && e[i].label === n) return i;
                    return t
                }

                function D() {
                    return h || m
                }

                function T(e, n) {
                    G = X[oe], w(te), te = setInterval(F, 100), ee = 0;
                    var i = ce.src !== G.file;
                    i || D() ? (h || q.setState(r.LOADING), $ = !1, K = !1, V = n, re = d(G), ce.src = G.file, ce.load()) : (0 === e && (ee = -1, q.seek(e)), k(), ce.play()), H = ce.currentTime, h && x(), t.isIOS() && q.getFullScreen() && (ce.controls = !0), e > 0 && q.seek(e)
                }

                function _() {
                    q.seeking = !1, q.sendEvent(o.JWPLAYER_MEDIA_SEEKED)
                }

                function S() {
                    q.sendEvent("volume", {
                        volume: Math.round(100 * ce.volume)
                    }), q.sendEvent("mute", {
                        mute: ce.muted
                    })
                }

                function F() {
                    if (ie) {
                        var e = Y();
                        e >= 1 && w(te), e !== ne && (ne = e, q.sendEvent(o.JWPLAYER_MEDIA_BUFFER, {
                            bufferPercent: Math.round(100 * ne)
                        }))
                    }
                }

                function Y() {
                    var e = ce.buffered;
                    return e && ce.duration && 0 !== e.length ? e.end(e.length - 1) / ce.duration : 0
                }

                function Q() {
                    if (ie && q.state !== r.IDLE && q.state !== r.COMPLETE) {
                        if (w(te), oe = -1, se = !0, q.sendEvent(o.JWPLAYER_MEDIA_BEFORECOMPLETE), !ie) return;
                        N()
                    }
                }

                function N() {
                    q.setState(r.COMPLETE), se = !1, q.sendEvent(o.JWPLAYER_MEDIA_COMPLETE)
                }

                function O(e) {
                    ae = !0, U(e), t.isIOS() && (ce.controls = !1)
                }

                function J(e) {
                    ae = !1, U(e), t.isIOS() && (ce.controls = !1)
                }

                function U(e) {
                    q.sendEvent("fullscreenchange", {
                        target: e.target,
                        jwstate: ae
                    })
                }
                this.state = r.IDLE, this.seeking = !1;
                var W = new s("provider." + b);
                i.extend(this, W);
                var z, G, V, H, K, X, q = this,
                    Z = {
                        click: A,
                        durationchange: p,
                        ended: Q,
                        error: I,
                        loadedmetadata: y,
                        canplay: E,
                        playing: L,
                        progress: C,
                        seeked: _,
                        stalled: R,
                        timeupdate: f,
                        volumechange: S,
                        waiting: R,
                        webkitbeginfullscreen: O,
                        webkitendfullscreen: J
                    },
                    $ = !1,
                    ee = 0,
                    te = -1,
                    ne = -1,
                    ie = !0,
                    oe = -1,
                    re = null,
                    se = !1,
                    ae = !1;
                this.sendEvent = function() {
                    ie && W.sendEvent.apply(this, arguments)
                };
                var le = document.getElementById(a),
                    ce = le ? le.querySelector("video") : void 0;
                ce = ce || document.createElement("video"), ce.className = "jw-video jw-reset", c(Z, ce), v || (ce.controls = !0, ce.controls = !1), ce.setAttribute("x-webkit-airplay", "allow"), ce.setAttribute("webkit-playsinline", ""), this.stop = function() {
                    ie && (w(te), ce.removeAttribute("src"), g || ce.load(), oe = -1, this.setState(r.IDLE))
                }, this.destroy = function() {
                    u(Z, ce), this.remove()
                }, this.load = function(e) {
                    ie && (M(e.sources), T(e.starttime || 0, e.duration || 0))
                }, this.play = function() {
                    return q.seeking ? (q.setState(r.LOADING), void q.once(o.JWPLAYER_MEDIA_SEEKED, q.play)) : void ce.play()
                }, this.pause = function() {
                    ce.pause(), this.setState(r.PAUSED)
                }, this.seek = function(e) {
                    if (ie)
                        if (0 === ee && this.sendEvent(o.JWPLAYER_MEDIA_SEEK, {
                                position: ce.currentTime,
                                offset: e
                            }), $) {
                            ee = 0;
                            var n = t.tryCatch(function() {
                                q.seeking = !0, ce.currentTime = e
                            });
                            n instanceof t.Error && (ee = e)
                        } else ee = e
                }, this.volume = function(e) {
                    ce.volume = Math.min(Math.max(0, e / 100), 1)
                }, this.mute = function(e) {
                    ce.muted = !!e
                }, this.checkComplete = function() {
                    return se
                }, this.detachMedia = function() {
                    return w(te), ie = !1, ce
                }, this.attachMedia = function(e) {
                    ie = !0, e || ($ = !1), se && N()
                }, this.setContainer = function(e) {
                    z = e, e.appendChild(ce)
                }, this.getContainer = function() {
                    return z
                }, this.remove = function() {
                    ce && (ce.removeAttribute("src"), g || ce.load()), w(te), oe = -1, z === ce.parentNode && z.removeChild(ce)
                }, this.setVisibility = function(t) {
                    t = !!t, t || j ? e.style(z, {
                        visibility: "visible",
                        opacity: 1
                    }) : e.style(z, {
                        visibility: "",
                        opacity: 0
                    })
                }, this.resize = function(e, t, i) {
                    return n.stretch(i, ce, e, t, ce.videoWidth, ce.videoHeight)
                }, this.setControls = function(e) {
                    ce.controls = !!e
                }, this.supportsFullscreen = i.constant(!0), this.setFullscreen = function(e) {
                    if (e = !!e) {
                        var n = t.tryCatch(function() {
                            var e = ce.webkitEnterFullscreen || ce.webkitEnterFullScreen;
                            e && e.apply(ce)
                        });
                        return n instanceof t.Error ? !1 : q.getFullScreen()
                    }
                    var i = ce.webkitExitFullscreen || ce.webkitExitFullScreen;
                    return i && i.apply(ce), e
                }, q.getFullScreen = function() {
                    return ae || !!ce.webkitDisplayingFullscreen
                }, this.isAudioFile = function() {
                    if (!X) return !1;
                    var e = X[0].type;
                    return "oga" === e || "aac" === e || "mp3" === e || "mpeg" === e || "vorbis" === e
                }, this.setCurrentQuality = function(e) {
                    if (oe !== e && (e = parseInt(e, 10), e >= 0 && X && X.length > e)) {
                        oe = e, this.sendEvent(o.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                            currentQuality: e,
                            levels: B(X)
                        });
                        var t = ce.currentTime || 0,
                            n = ce.duration;
                        0 >= n && (n = V), T(t, n || 0)
                    }
                }, this.getCurrentQuality = function() {
                    return oe
                }, this.getQualityLevels = function() {
                    return B(X)
                }, this.getName = function() {
                    return {
                        name: b
                    }
                }
            }
            var p, w = window.clearInterval,
                f = 256,
                g = t.isMSIE(),
                h = t.isMobile(),
                m = t.isSafari(),
                j = t.isAndroidNative(),
                v = t.isIOS(7),
                b = "html5",
                k = function(e, t) {
                    var n = -1;
                    return function() {
                        e.currentTime === n && t(), n = e.currentTime
                    }
                },
                E = {
                    aac: "audio/mp4",
                    mp4: "video/mp4",
                    f4v: "video/mp4",
                    m4v: "video/mp4",
                    mov: "video/mp4",
                    mp3: "audio/mpeg",
                    mpeg: "audio/mpeg",
                    ogv: "video/ogg",
                    ogg: "video/ogg",
                    oga: "video/ogg",
                    vorbis: "video/ogg",
                    webm: "video/webm",
                    f4a: "video/aac",
                    m3u8: "application/vnd.apple.mpegurl",
                    m3u: "application/vnd.apple.mpegurl",
                    hls: "application/vnd.apple.mpegurl"
                },
                y = function() {};
            return y.prototype = a, A.prototype = new y, A.supports = function(e) {
                var n = e.file,
                    i = e.type,
                    o = d(e);
                if (null !== o) return o;
                if (t.isRtmp(n, i)) return !1;
                if (!E[i]) return !1;
                if (l.canPlayType) {
                    var r = l.canPlayType(E[i]);
                    return !!r
                }
                return !1
            }, A
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(50), n(45)], o = function(e, t, n) {
            function i(e) {
                var t = document.createElement("style");
                return e && t.appendChild(document.createTextNode(e)), t.type = "text/css", document.getElementsByTagName("head")[0].appendChild(t), t
            }

            function o(e, t, n) {
                var i, o, r = !1;
                for (i in t) o = a(i, t[i], n), "" !== o ? o !== e[i] && (e[i] = o, r = !0) : void 0 !== e[i] && (delete e[i], r = !0);
                return r
            }

            function r(e, t) {
                for (var n in t) e[n] = a(n, t[n])
            }

            function s(e) {
                e = e.split("-");
                for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
                return e.join("")
            }

            function a(e, n, i) {
                if (!j(n)) return "";
                var o = i ? " !important" : "";
                return "string" == typeof n && isNaN(n) ? /png|gif|jpe?g/i.test(n) && n.indexOf("url") < 0 ? "url(" + n + ")" : n + o : 0 === n || "z-index" === e || "opacity" === e ? "" + n + o : /color/i.test(e) ? "#" + t.pad(n.toString(16).replace(/^0x/i, ""), 6) + o : Math.ceil(n) + "px" + o
            }

            function l(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var i, o, r = e[n];
                    if (void 0 !== r && null !== r)
                        for (i in t) o = s(i), r.style[o] !== t[i] && (r.style[o] = t[i])
                }
            }

            function c(e) {
                var t, n, i, o = w[e].sheet;
                if (o) {
                    if (t = o.cssRules, n = h[e], i = d(e), void 0 !== n && n < t.length && t[n].selectorText === e) {
                        if (i === t[n].cssText) return;
                        o.deleteRule(n)
                    } else n = t.length, h[e] = n;
                    u(o, i, n)
                }
            }

            function u(t, n, i) {
                e.tryCatch(function() {
                    t.insertRule(n, i)
                })
            }

            function d(e) {
                var t = f[e];
                e += " { ";
                for (var n in t) e += n + ": " + t[n] + "; ";
                return e + "}"
            }
            var A, p = 5e4,
                w = {},
                f = {},
                g = null,
                h = {},
                m = !1,
                j = function(e) {
                    switch (typeof e) {
                        case "string":
                            return e.length > 0;
                        case "object":
                            return null !== e;
                        case "undefined":
                            return !1
                    }
                    return !0
                },
                v = function(e, t) {
                    var n = w.keyframes;
                    n || (n = i(), w.keyframes = n);
                    var o = n.sheet,
                        r = "@keyframes " + e + " { " + t + " }";
                    u(o, r, o.cssRules.length), u(o, r.replace(/(keyframes|transform)/g, "-webkit-$1"), o.cssRules.length)
                },
                b = function(e, t, n) {
                    if (n = n || !1, f[e] || (f[e] = {}), o(f[e], t, n)) {
                        if (m) return w[e] && w[e].parentNode.removeChild(w[e]), void(w[e] = i(d(e)));
                        if (!w[e]) {
                            var r = A && A.sheet && A.sheet.cssRules && A.sheet.cssRules.length || 0;
                            (!A || r > p) && (A = i()), w[e] = A
                        }
                        return null !== g ? void(g.styleSheets[e] = f[e]) : void c(e)
                    }
                },
                k = function(e, t, i) {
                    if (void 0 !== e && null !== e) {
                        void 0 === e.length && (e = [e]);
                        var o = {};
                        return r(o, t), null === g || i ? void l(e, o) : (e.__cssRules || (e.__cssRules = {}), n.extend(e.__cssRules, o), void(n.indexOf(g.elements, e) < 0 && g.elements.push(e)))
                    }
                },
                E = function(e) {
                    null === g && (g = {
                        id: e,
                        styleSheets: {},
                        elements: []
                    })
                },
                y = function(e) {
                    if (g && (!e || g.id === e)) {
                        for (var t in g.styleSheets) c(t);
                        for (var n = 0; n < g.elements.length; n++) {
                            var i = g.elements[n];
                            l(i, i.__cssRules)
                        }
                        g = null
                    }
                },
                C = function(e) {
                    for (var t in f) t.indexOf(e) >= 0 && delete f[t];
                    for (var n in w) n.indexOf(e) >= 0 && c(n)
                },
                x = function(e, t) {
                    var n = "transform",
                        i = {};
                    t = t || "", i[n] = t, i["-webkit-" + n] = t, i["-ms-" + n] = t, i["-moz-" + n] = t, i["-o-" + n] = t, "string" == typeof e ? b(e, i) : k(e, i)
                },
                L = function(e, t) {
                    b(e, {
                        "-webkit-user-select": t,
                        "-moz-user-select": t,
                        "-ms-user-select": t,
                        "-webkit-user-drag": t,
                        "user-select": t,
                        "user-drag": t
                    })
                },
                R = function(e, t) {
                    navigator.userAgent.match(/5\.\d(\.\d)? safari/i) || b(e, {
                        "-webkit-transition": t,
                        "-moz-transition": t,
                        "-o-transition": t,
                        transition: t
                    })
                },
                I = function(e, t) {
                    x(e, "rotate(" + t + "deg)")
                },
                B = function(e) {
                    var t = String(e).replace("#", "");
                    return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), "#" + t.substr(-6)
                },
                M = function(e, t) {
                    var n = "rgb",
                        i = [parseInt(e.substr(1, 2), 16), parseInt(e.substr(3, 2), 16), parseInt(e.substr(5, 2), 16)];
                    return void 0 !== t && 100 !== t && (n += "a", i.push(t / 100)), n + "(" + i.join(",") + ")"
                };
            return e.style = k, {
                cssKeyframes: v,
                css: b,
                style: k,
                block: E,
                unblock: y,
                clearCss: C,
                transform: x,
                dragStyle: L,
                transitionStyle: R,
                rotate: I,
                rgbHex: B,
                hexToRgba: M
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(48), n(62)], o = function(e, t, n) {
            var i = {
                    NONE: "none",
                    FILL: "fill",
                    UNIFORM: "uniform",
                    EXACTFIT: "exactfit"
                },
                o = function(e, t, i, o, r) {
                    var s = "";
                    t = t || 1, i = i || 1, o = 0 | o, r = 0 | r, (1 !== t || 1 !== i) && (s = "scale(" + t + ", " + i + ")"), (o || r) && (s && (s += " "), s = "translate(" + o + "px, " + r + "px)"), n.transform(e, s)
                },
                r = o,
                s = function(o, s, a, l, c, u) {
                    if (!s) return !1;
                    if (!(a && l && c && u)) return !1;
                    o = o || i.UNIFORM;
                    var d = 2 * Math.ceil(a / 2) / c,
                        A = 2 * Math.ceil(l / 2) / u,
                        p = "video" === s.tagName.toLowerCase(),
                        w = !1,
                        f = "jw-stretch-" + o.toLowerCase(),
                        g = !1;
                    switch (o.toLowerCase()) {
                        case i.FILL:
                            d > A ? A = d : d = A, w = !0;
                            break;
                        case i.NONE:
                            d = A = 1;
                        case i.EXACTFIT:
                            w = !0;
                            break;
                        case i.UNIFORM:
                        default:
                            d > A ? (c * A / a > .95 ? (w = !0, f = "jw-stretch-exactfit") : (c *= A, u *= A), g = !0) : (u * d / l > .95 ? (w = !0, f = "jw-stretch-exactfit") : (c *= d, u *= d), g = !1), w && (d = 2 * Math.ceil(a / 2) / c, A = 2 * Math.ceil(l / 2) / u)
                    }
                    if (p) {
                        var h = {
                            left: "",
                            right: "",
                            width: "",
                            height: ""
                        };
                        if (w ? (c > a && (h.left = h.right = Math.ceil((a - c) / 2)), u > l && (h.top = h.bottom = Math.ceil((l - u) / 2)), h.width = c, h.height = u, r(s, d, A, 0, 0)) : (w = !1, n.transform(s)), t.isIOS(8) && w === !1) {
                            var m = {
                                width: "auto",
                                height: "auto"
                            };
                            o.toLowerCase() === i.UNIFORM && (m[g === !1 ? "width" : "height"] = "100%"), e.extend(h, m)
                        }
                        n.style(s, h)
                    } else s.className = s.className.replace(/\s*jw\-stretch\-(none|exactfit|uniform|fill)/g, "") + " " + f;
                    return w
                };
            return {
                scale: o,
                stretching: i,
                stretch: s
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            var e = {
                    DRAG: "drag",
                    DRAG_START: "dragStart",
                    DRAG_END: "dragEnd",
                    CLICK: "click",
                    DOUBLE_CLICK: "doubleClick",
                    TAP: "tap",
                    DOUBLE_TAP: "doubleTap"
                },
                t = {
                    COMPLETE: "complete",
                    ERROR: "error",
                    JWPLAYER_AD_CLICK: "adClick",
                    JWPLAYER_AD_COMPANIONS: "adCompanions",
                    JWPLAYER_AD_COMPLETE: "adComplete",
                    JWPLAYER_AD_ERROR: "adError",
                    JWPLAYER_AD_IMPRESSION: "adImpression",
                    JWPLAYER_AD_META: "adMeta",
                    JWPLAYER_AD_PAUSE: "adPause",
                    JWPLAYER_AD_PLAY: "adPlay",
                    JWPLAYER_AD_SKIPPED: "adSkipped",
                    JWPLAYER_AD_TIME: "adTime",
                    JWPLAYER_CAST_AD_CHANGED: "castAdChanged",
                    JWPLAYER_MEDIA_COMPLETE: "complete",
                    JWPLAYER_READY: "ready",
                    JWPLAYER_MEDIA_SEEK: "seek",
                    JWPLAYER_MEDIA_BEFOREPLAY: "beforePlay",
                    JWPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
                    JWPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
                    JWPLAYER_DISPLAY_CLICK: "displayClick",
                    JWPLAYER_PLAYLIST_COMPLETE: "playlistComplete",
                    JWPLAYER_CAST_SESSION: "cast",
                    JWPLAYER_MEDIA_ERROR: "mediaError",
                    JWPLAYER_MEDIA_FIRST_FRAME: "firstFrame",
                    JWPLAYER_MEDIA_PLAY_ATTEMPT: "playAttempt",
                    JWPLAYER_MEDIA_LOADED: "loaded",
                    JWPLAYER_MEDIA_SEEKED: "seeked",
                    JWPLAYER_SETUP_ERROR: "setupError",
                    JWPLAYER_ERROR: "error",
                    JWPLAYER_PLAYER_STATE: "state",
                    JWPLAYER_CAST_AVAILABLE: "castAvailable",
                    JWPLAYER_MEDIA_BUFFER: "bufferChange",
                    JWPLAYER_MEDIA_TIME: "time",
                    JWPLAYER_MEDIA_VOLUME: "volume",
                    JWPLAYER_MEDIA_MUTE: "mute",
                    JWPLAYER_MEDIA_META: "meta",
                    JWPLAYER_MEDIA_LEVELS: "levels",
                    JWPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
                    JWPLAYER_CONTROLS: "controls",
                    JWPLAYER_FULLSCREEN: "fullscreen",
                    JWPLAYER_RESIZE: "resize",
                    JWPLAYER_PLAYLIST_ITEM: "playlistItem",
                    JWPLAYER_PLAYLIST_LOADED: "playlist",
                    JWPLAYER_AUDIO_TRACKS: "audioTracks",
                    JWPLAYER_AUDIO_TRACK_CHANGED: "audioTrackChanged",
                    JWPLAYER_LOGO_CLICK: "logoClick",
                    JWPLAYER_CAPTIONS_LIST: "captionsList",
                    JWPLAYER_CAPTIONS_CHANGED: "captionsChanged",
                    JWPLAYER_PROVIDER_CHANGED: "providerChanged",
                    JWPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame",
                    JWPLAYER_USER_ACTION: "userAction",
                    JWPLAYER_PROVIDER_CLICK: "providerClick",
                    JWPLAYER_VIEW_TAB_FOCUS: "tabFocus",
                    JWPLAYER_CONTROLBAR_DRAGGING: "scrubbing",
                    JWPLAYER_INSTREAM_CLICK: "instreamClick"
                };
            return t.touchEvents = e, t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            return {
                BUFFERING: "buffering",
                IDLE: "idle",
                COMPLETE: "complete",
                PAUSED: "paused",
                PLAYING: "playing",
                ERROR: "error",
                LOADING: "loading",
                STALLED: "stalled"
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(67), n(45), n(68)], o = function(e, t) {
            var n = "GLOBAL_EVENT",
                i = function(i) {
                    var o = t.extend({}, e);
                    this.resetEventListeners = this.removeEventListener = o.off.bind(o), this.on = o.on.bind(o), this.once = o.once.bind(o), this.off = o.off.bind(o), this.addEventListener = function(e, n) {
                        return t.isString(n) && console.log("Error, please fix this callback", i, e, n), o.on(e, n)
                    }, this.addGlobalListener = function(e) {
                        return this.addEventListener(n, e)
                    }, this.removeGlobalListener = function(e) {
                        return this.removeEventListener(n, e)
                    }, this.sendEvent = function(e, i, r) {
                        i = t.extend({}, i, {
                            type: e
                        }), o.trigger(n, i, r), o.trigger(e, i, r)
                    }
                };
            return i
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45)], o = function(e) {
            var t = [],
                n = t.slice,
                i = {
                    on: function(e, t, n) {
                        if (!r(this, "on", e, [t, n]) || !t) return this;
                        this._events || (this._events = {});
                        var i = this._events[e] || (this._events[e] = []);
                        return i.push({
                            callback: t,
                            context: n,
                            ctx: n || this
                        }), this
                    },
                    once: function(t, n, i) {
                        if (!r(this, "once", t, [n, i]) || !n) return this;
                        var o = this,
                            s = e.once(function() {
                                o.off(t, s), n.apply(this, arguments)
                            });
                        return s._callback = n, this.on(t, s, i)
                    },
                    off: function(t, n, i) {
                        var o, s, a, l, c, u, d, A;
                        if (!this._events || !r(this, "off", t, [n, i])) return this;
                        if (!t && !n && !i) return this._events = void 0, this;
                        for (l = t ? [t] : e.keys(this._events), c = 0, u = l.length; u > c; c++)
                            if (t = l[c], a = this._events[t]) {
                                if (this._events[t] = o = [], n || i)
                                    for (d = 0, A = a.length; A > d; d++) s = a[d], (n && n !== s.callback && n !== s.callback._callback || i && i !== s.context) && o.push(s);
                                o.length || delete this._events[t]
                            }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var t = n.call(arguments, 1);
                        if (!r(this, "trigger", e, t)) return this;
                        var i = this._events[e],
                            o = this._events.all;
                        return i && s(i, t), o && s(o, arguments), this
                    }
                },
                o = /\s+/,
                r = function(e, t, n, i) {
                    if (!n) return !0;
                    if ("object" == typeof n) {
                        for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                        return !1
                    }
                    if (o.test(n)) {
                        for (var s = n.split(o), a = 0, l = s.length; l > a; a++) e[t].apply(e, [s[a]].concat(i));
                        return !1
                    }
                    return !0
                },
                s = function(e, t) {
                    var n, i = -1,
                        o = e.length,
                        r = t[0],
                        s = t[1],
                        a = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r);
                            return;
                        case 2:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, s);
                            return;
                        case 3:
                            for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, s, a);
                            return;
                        default:
                            for (; ++i < o;)(n = e[i]).callback.apply(n.ctx, t);
                            return
                    }
                };
            return i
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t) {
        Function.prototype.bind || (Function.prototype.bind = function(e) {
            if ("function" != typeof this) throw new TypeError("not callable");
            var t = Array.prototype.slice.call(arguments, 1),
                n = this,
                i = function() {},
                o = function() {
                    return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
            return i.prototype = this.prototype, o.prototype = new i, o
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(64), n(65), n(45)], o = function(e, t, n, i) {
            var o = e.noop,
                r = i.constant(!1),
                s = {
                    supports: r,
                    play: o,
                    load: o,
                    stop: o,
                    volume: o,
                    mute: o,
                    seek: o,
                    resize: o,
                    remove: o,
                    destroy: o,
                    setVisibility: o,
                    setFullscreen: r,
                    getFullscreen: o,
                    getContainer: o,
                    setContainer: r,
                    isAudioFile: r,
                    supportsFullscreen: r,
                    getName: o,
                    getQualityLevels: o,
                    getCurrentQuality: o,
                    setCurrentQuality: o,
                    getAudioTracks: o,
                    getCurrentAudioTrack: o,
                    setCurrentAudioTrack: o,
                    checkComplete: o,
                    setControls: o,
                    attachMedia: o,
                    detachMedia: o,
                    setState: function(e) {
                        var i = this.state || n.IDLE;
                        this.state = e, e !== i && this.sendEvent(t.JWPLAYER_PLAYER_STATE, {
                            newstate: e
                        })
                    }
                };
            return s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            return document.createElement("video")
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(72), n(45)], o = function(e, t, n) {
            var i = ["hls", "m3u8"],
                o = t.supports;
            return t.supports = function(t, r) {
                if (!e.isFlashSupported()) return !1;
                if (o.apply(this, arguments)) return !0;
                if ("ads" === r || "enterprise" === r || "premium" === r) {
                    var s = t && t.type;
                    return n.contains(i, s)
                }
                return !1
            }, t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(45), n(64), n(65), n(66), n(73), n(69)], o = function(e, t, n, i, o, r, s) {
            function a(e) {
                return e + "_swf_" + c++
            }

            function l(l, c) {
                function u(e) {
                    if (L)
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (n.bitrate) {
                                var i = Math.round(n.bitrate / 1024);
                                n.label = d(i)
                            }
                        }
                }

                function d(e) {
                    var t = L[e];
                    if (!t) {
                        for (var n = 1 / 0, i = L.bitrates.length; i--;) {
                            var o = Math.abs(L.bitrates[i] - e);
                            if (o > n) break;
                            n = o
                        }
                        t = L.labels[L.bitrates[i + 1]], L[e] = t
                    }
                    return t
                }

                function A() {
                    var e = c.hlslabels;
                    if (!e) return null;
                    var t = {},
                        n = [];
                    for (var i in e) {
                        var o = parseFloat(i);
                        if (!isNaN(o)) {
                            var r = Math.round(o);
                            t[r] = e[i], n.push(r)
                        }
                    }
                    return 0 === n.length ? null : (n.sort(function(e, t) {
                        return e - t
                    }), {
                        labels: t,
                        bitrates: n
                    })
                }
                var p, w, f, g = null,
                    h = !1,
                    m = -1,
                    j = null,
                    v = -1,
                    b = null,
                    k = !0,
                    E = !1,
                    y = function() {
                        return w && w.__ready
                    },
                    C = function() {
                        w.triggerFlash.apply(w, arguments)
                    },
                    x = new o("flash.provider"),
                    L = A();
                t.extend(this, x, {
                    load: function(e) {
                        g = e, h = !1, this.setState(i.LOADING), C("load", e)
                    },
                    play: function() {
                        C("play")
                    },
                    pause: function() {
                        C("pause"), this.setState(i.PAUSED)
                    },
                    stop: function() {
                        C("stop"), m = -1, g = null, this.setState(i.IDLE)
                    },
                    seek: function(e) {
                        C("seek", e)
                    },
                    volume: function(e) {
                        if (t.isNumber(e)) {
                            var n = Math.min(Math.max(0, e), 100);
                            c.volume = n, y() && C("volume", n)
                        }
                    },
                    mute: function(t) {
                        var n = e.exists(t) ? !!t : !c.mute;
                        c.mute = n, y() && C("mute", n)
                    },
                    setState: function() {
                        return s.setState.apply(this, arguments)
                    },
                    checkComplete: function() {
                        return h
                    },
                    attachMedia: function() {
                        k = !0, h && (this.setState(i.COMPLETE), this.sendEvent(n.JWPLAYER_MEDIA_COMPLETE), h = !1)
                    },
                    detachMedia: function() {
                        return k = !1, null
                    },
                    getSwfObject: function(e) {
                        var t = e.getElementsByTagName("object")[0];
                        return t ? (t.off(null, null, this), t) : r.embed(c.flashplayer, e, a(l))
                    },
                    getContainer: function() {
                        return p
                    },
                    setContainer: function(o) {
                        if (p !== o) {
                            p = o, w = this.getSwfObject(o), w.once("ready", function() {
                                w.once("pluginsLoaded", function() {
                                    w.queueCommands = !1, C("setupCommandQueue", w.__commandQueue), w.__commandQueue = []
                                });
                                var e = t.extend({}, c);
                                C("setup", e), w.__ready = !0
                            }, this);
                            var r = [n.JWPLAYER_MEDIA_META, n.JWPLAYER_MEDIA_ERROR, "subtitlesTracks", "subtitlesTrackChanged", "subtitlesTrackData"],
                                s = [n.JWPLAYER_MEDIA_BUFFER, n.JWPLAYER_MEDIA_TIME],
                                a = [n.JWPLAYER_MEDIA_BUFFER_FULL];
                            w.on(n.JWPLAYER_MEDIA_LEVELS, function(e) {
                                u(e.levels), m = e.currentQuality, j = e.levels, this.sendEvent(e.type, e)
                            }, this).on(n.JWPLAYER_MEDIA_LEVEL_CHANGED, function(e) {
                                u(e.levels), m = e.currentQuality, j = e.levels, this.sendEvent(e.type, e)
                            }, this).on(n.JWPLAYER_AUDIO_TRACKS, function(e) {
                                v = e.currentTrack, b = e.tracks, this.sendEvent(e.type, e)
                            }, this).on(n.JWPLAYER_AUDIO_TRACK_CHANGED, function(e) {
                                v = e.currentTrack, b = e.tracks, this.sendEvent(e.type, e)
                            }, this).on(n.JWPLAYER_PLAYER_STATE, function(e) {
                                var t = e.newstate;
                                t !== i.IDLE && this.setState(t)
                            }, this).on(s.join(" "), function(e) {
                                "Infinity" === e.duration && (e.duration = 1 / 0), this.sendEvent(e.type, e)
                            }, this).on(r.join(" "), function(e) {
                                this.sendEvent(e.type, e)
                            }, this).on(a.join(" "), function(e) {
                                this.sendEvent(e.type)
                            }, this).on(n.JWPLAYER_MEDIA_BEFORECOMPLETE, function(e) {
                                h = !0, this.sendEvent(e.type), k === !0 && (h = !1)
                            }, this).on(n.JWPLAYER_MEDIA_COMPLETE, function(e) {
                                h || (this.setState(i.COMPLETE), this.sendEvent(e.type))
                            }, this).on(n.JWPLAYER_MEDIA_SEEK, function(e) {
                                this.sendEvent(n.JWPLAYER_MEDIA_SEEK, e)
                            }, this).on("visualQuality", function(e) {
                                e.reason = e.reason || "api", this.sendEvent("visualQuality", e), this.sendEvent(n.JWPLAYER_PROVIDER_FIRST_FRAME, {})
                            }, this).on(n.JWPLAYER_PROVIDER_CHANGED, function(e) {
                                f = e.message, this.sendEvent(n.JWPLAYER_PROVIDER_CHANGED, e)
                            }, this).on(n.JWPLAYER_ERROR, function(t) {
                                e.log("Error playing media: %o %s", t.code, t.message, t), this.sendEvent(n.JWPLAYER_MEDIA_ERROR, {
                                    message: "Error loading media: File could not be played"
                                })
                            }, this)
                        }
                    },
                    remove: function() {
                        m = -1, j = null, r.remove(w)
                    },
                    setVisibility: function(e) {
                        e = !!e, p.style.opacity = e ? 1 : 0
                    },
                    resize: function(e, t, n) {
                        n && C("stretch", n)
                    },
                    setControls: function() {},
                    setFullscreen: function(e) {
                        E = e, C("fullscreen", e)
                    },
                    getFullScreen: function() {
                        return E
                    },
                    isAudioFile: function() {
                        if (g) {
                            var e = g.sources[0].type;
                            return "oga" === e || "aac" === e || "mp3" === e || "vorbis" === e
                        }
                        return !1
                    },
                    setCurrentQuality: function(e) {
                        C("setCurrentQuality", e)
                    },
                    getCurrentQuality: function() {
                        return m
                    },
                    setSubtitlesTrack: function(e) {
                        C("setSubtitlesTrack", e)
                    },
                    getName: function() {
                        return f ? {
                            name: "flash_" + f
                        } : {
                            name: "flash"
                        }
                    },
                    getQualityLevels: function() {
                        return j || g.sources
                    },
                    getAudioTracks: function() {
                        return b
                    },
                    getCurrentAudioTrack: function() {
                        return v
                    },
                    setCurrentAudioTrack: function(e) {
                        C("setCurrentAudioTrack", e)
                    },
                    supportsFullscreen: t.constant(!0),
                    destroy: function() {
                        this.remove(), w && (w.off(), w = null), p = null, g = null, x.resetEventListeners(), x = null
                    }
                }), this.sendEvent = function() {
                    k && x.sendEvent.apply(this, arguments)
                }
            }
            var c = 0,
                u = {
                    flv: "video",
                    f4v: "video",
                    mov: "video",
                    m4a: "video",
                    m4v: "video",
                    mp4: "video",
                    aac: "video",
                    f4a: "video",
                    mp3: "sound",
                    mpeg: "sound",
                    smil: "rtmp"
                },
                d = t.keys(u),
                A = function() {};
            return A.prototype = s, l.prototype = new A, l.supports = function(n) {
                if (!e.isFlashSupported()) return !1;
                var i = n.file,
                    o = n.type;
                return e.isRtmp(i, o) ? !0 : t.contains(d, o)
            }, l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(67), n(45)], o = function(e, t, n) {
            function i(e, t, n) {
                var i = document.createElement("param");
                i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
            }

            function o(o, r, a, l) {
                var c;
                if (l = l || "opaque", e.isMSIE()) {
                    var u = document.createElement("div");
                    r.appendChild(u), u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + a + '" name="' + a + '" tabindex="0"><param name="movie" value="' + o + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="' + l + '"><param name="bgcolor" value="' + s + '"><param name="menu" value="false"></object>';
                    for (var d = r.getElementsByTagName("object"), A = d.length; A--;) d[A].id === a && (c = d[A])
                } else c = document.createElement("object"), c.setAttribute("type", "application/x-shockwave-flash"), c.setAttribute("data", o), c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), c.setAttribute("bgcolor", s), c.setAttribute("id", a), c.setAttribute("name", a), i(c, "allowfullscreen", "true"), i(c, "allowscriptaccess", "always"), i(c, "wmode", l), i(c, "menu", "false"), r.appendChild(c, r);
                return c.className = "jw-swf jw-reset", c.style.display = "block", c.style.position = "absolute", c.style.left = 0, c.style.right = 0, c.style.top = 0, c.style.bottom = 0, n.extend(c, t), c.queueCommands = !0, c.triggerFlash = function(t) {
                    var n = this;
                    if ("setup" !== t && n.queueCommands || !n.__externalCall) {
                        for (var i = n.__commandQueue, o = i.length; o--;) i[o][0] === t && i.splice(o, 1);
                        return i.push(Array.prototype.slice.call(arguments)), n
                    }
                    var r = Array.prototype.slice.call(arguments, 1),
                        s = e.tryCatch(function() {
                            if (r.length) {
                                var e = JSON.stringify(r);
                                n.__externalCall(t, e)
                            } else n.__externalCall(t)
                        });
                    return s instanceof e.Error && console.error({
                        command: t,
                        error: s
                    }), n
                }, c.__commandQueue = [], c
            }

            function r(t) {
                if (t && t.parentNode) {
                    if (t.style.display = "none", e.isMSIE(8))
                        for (var n in t) "function" == typeof t[n] && (t[n] = null);
                    t.parentNode.removeChild(t)
                }
            }
            var s = "#000000";
            return {
                embed: o,
                remove: r
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(62), n(63), n(45), n(64), n(65), n(66), n(75), n(69)], o = function(e, t, n, i, o, r, s, a, l) {
            function c(c, u) {
                function p() {
                    window.YT && window.YT.loaded ? (_ = window.YT, g()) : setTimeout(p, 100)
                }

                function w() {
                    d = null
                }

                function f() {
                    var e = F && F.parentNode;
                    return e ? e : (Q || (window.jwplayer(c).onReady(g), Q = !0), !1)
                }

                function g() {
                    _ && f() && N && N.apply(T)
                }

                function h() {
                    if (S && S.getPlayerState) {
                        var e = S.getPlayerState();
                        null !== e && void 0 !== e && e !== U && x({
                            data: e
                        });
                        var t = _.PlayerState;
                        e === t.PLAYING ? j() : e === t.BUFFERING && v()
                    }
                }

                function m(e) {
                    return Math.round(10 * e) / 10
                }

                function j() {
                    v(), T.sendEvent(o.JWPLAYER_MEDIA_TIME, {
                        position: m(S.getCurrentTime()),
                        duration: S.getDuration()
                    })
                }

                function v() {
                    var e = 0;
                    S && S.getVideoLoadedFraction && (e = Math.round(100 * S.getVideoLoadedFraction())), Y !== e && (Y = e, T.sendEvent(o.JWPLAYER_MEDIA_BUFFER, {
                        bufferPercent: e
                    }))
                }

                function b() {
                    T.state !== r.IDLE && T.state !== r.COMPLETE && (W = !0, T.sendEvent(o.JWPLAYER_MEDIA_BEFORECOMPLETE), T.setState(r.COMPLETE), W = !1, T.sendEvent(o.JWPLAYER_MEDIA_COMPLETE))
                }

                function k() {
                    T.sendEvent(o.JWPLAYER_MEDIA_META, {
                        duration: S.getDuration(),
                        width: F.clientWidth,
                        height: F.clientHeight
                    })
                }

                function E() {
                    var e = arguments,
                        t = e.length - 1;
                    return function() {
                        for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                        return i
                    }
                }

                function y(e, t) {
                    
                    /*
                     * IA:ARBH: (2016/03/17) 
                     * */
                    if (!e) {
                        
                        /*start*/
                        var msg = 'El ID del vídeo de youtube no es válido o el video no existe.';
                        try {
                            g_utils.closeJWPlayerDlg();
                            g_utils.prompt_msg(msg, function() { });                        
                        } catch(ex) {
                            /*DO-NOTHING*/
                        }
                        /*end*/
                        
                        throw "invalid Youtube ID";
                    }
                    
                    var n = F.parentNode;
                    if (n) {
                        var o = {
                            height: "100%",
                            width: "100%",
                            videoId: e,
                            playerVars: i.extend({
                                html5: 1,
                                autoplay: 0,
                                controls: 0,
                                showinfo: 0,
                                rel: 0,
                                modestbranding: 0,
                                playsinline: 1,
                                origin: location.protocol + "//" + location.hostname
                            }, t),
                            events: {
                                onReady: C,
                                onStateChange: x,
                                onPlaybackQualityChange: L,
                                onError: R
                            }
                        };
                        T.setVisibility(!0), S = new _.Player(F, o), F = S.getIframe(), N = null, I()
                    }
                }

                function C() {
                    O && (O.apply(T), O = null)
                }

                function x(e) {
                    var t = _.PlayerState;
                    switch (U = e.data) {
                        case t.UNSTARTED:
                            return;
                        case t.ENDED:
                            return void b();
                        case t.PLAYING:
                            return i.isFunction(S.unloadModule) && S.unloadModule("captions"), z = !1, k(), T.sendEvent(o.JWPLAYER_MEDIA_LEVELS, {
                                levels: T.getQualityLevels(),
                                currentQuality: T.getCurrentQuality()
                            }), void T.setState(r.PLAYING);
                        case t.PAUSED:
                            return void T.setState(r.PAUSED);
                        case t.BUFFERING:
                            return void(T.seeking ? T.setState(r.LOADING) : T.setState(r.STALLED));
                        case t.CUED:
                            return void T.setState(r.IDLE)
                    }
                }

                function L() {
                    U !== _.PlayerState.ENDED && T.play(), T.sendEvent(o.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                        currentQuality: T.getCurrentQuality(),
                        levels: T.getQualityLevels()
                    })
                }

                function R() {
                    T.sendEvent(o.JWPLAYER_MEDIA_ERROR, {
                        message: "Error loading YouTube: Video could not be played"
                    })
                }

                function I() {
                    A && (T.setVisibility(!0), t.css("#" + c + " .jwcontrols", {
                        display: "none"
                    }))
                }

                function B() {
                    t.css("#" + c + " .jwcontrols", {
                        display: ""
                    })
                }

                function M() {
                    clearInterval(J), S && S.stopVideo && e.tryCatch(function() {
                        S.stopVideo(), S.clearVideo()
                    })
                }

                function P(t) {
                    O = null;
                    var n = t.sources[0].file,
                        i = e.youTubeID(n);
                    if (t.image || (t.image = "//i.ytimg.com/vi/" + i + "/0.jpg"), T.volume(u.volume), T.mute(u.mute), T.setVisibility(!0), !_ || !S) return N = function() {
                        y(i)
                    }, void g();
                    if (!S.getPlayerState) {
                        var o = function() {
                            T.load(t)
                        };
                        return void(O = O ? E(o, O) : o)
                    }
                    var r = S.getVideoData().video_id;
                    if (r !== i) {
                        z ? (M(), S.cueVideoById(i)) : S.loadVideoById(i);
                        var s = S.getPlayerState(),
                            a = _.PlayerState;
                        (s === a.UNSTARTED || s === a.CUED) && I()
                    } else S.getCurrentTime() > 0 && S.seekTo(0), k()
                }
                this.state = r.IDLE;
                var D, T = i.extend(this, new s("provider." + this.name)),
                    _ = window.YT,
                    S = null,
                    F = document.createElement("div"),
                    Y = -1,
                    Q = !1,
                    N = null,
                    O = null,
                    J = -1,
                    U = -1,
                    W = !1,
                    z = A;
                this.setState = function(e) {
                    clearInterval(J), e !== r.IDLE && e !== r.COMPLETE && (J = setInterval(h, 250), e === r.PLAYING ? (this.seeking = !1, B()) : (e === r.LOADING || e === r.STALLED) && v()), l.setState.apply(this, arguments)
                }, !_ && d && d.getStatus() === a.loaderstatus.NEW && (d.addEventListener(o.COMPLETE, p), d.addEventListener(o.ERROR, w), d.load()), F.id = c + "_youtube", this.init = function(e) {
                    P(e)
                }, this.destroy = function() {
                    this.remove(), D = F = _ = T = null
                }, this.load = function(e) {
                    this.setState(r.LOADING), P(e), T.play()
                }, this.stop = function() {
                    M(), this.setState(r.IDLE)
                }, this.play = function() {
                    z || (S && S.playVideo ? S.playVideo() : O = O ? E(this.play, O) : this.play)
                }, this.pause = function() {
                    z || S.pauseVideo && S.pauseVideo()
                }, this.seek = function(e) {
                    z || S.seekTo && (this.seeking = !0, S.seekTo(e))
                }, this.volume = function(e) {
                    if (i.isNumber(e)) {
                        var t = Math.min(Math.max(0, e), 100);
                        u.volume = t, S && S.getVolume && S.setVolume(t)
                    }
                }, this.mute = function(t) {
                    var n = e.exists(t) ? !!t : !u.mute;
                    u.mute = n, S && S.mute && (n ? S.mute() : S.unMute())
                }, this.detachMedia = function() {
                    return null
                }, this.attachMedia = function() {
                    W && (this.setState(r.COMPLETE), this.sendEvent(o.JWPLAYER_MEDIA_COMPLETE), W = !1)
                }, this.setContainer = function(e) {
                    D = e, e.appendChild(F), this.setVisibility(!0)
                }, this.getContainer = function() {
                    return D
                }, this.supportsFullscreen = function() {
                    return !(!D || !(D.requestFullscreen || D.requestFullScreen || D.webkitRequestFullscreen || D.webkitRequestFullScreen || D.webkitEnterFullscreen || D.webkitEnterFullScreen || D.mozRequestFullScreen || D.msRequestFullscreen))
                }, this.remove = function() {
                    M(), F && D && D === F.parentNode && D.removeChild(F), N = O = S = null
                }, this.setVisibility = function(e) {
                    e = !!e, e ? (t.style(F, {
                        display: "block"
                    }), t.style(D, {
                        visibility: "visible",
                        opacity: 1
                    })) : A || t.style(D, {
                        opacity: 0
                    })
                }, this.resize = function(e, t, i) {
                    return n.stretch(i, F, e, t, F.clientWidth, F.clientHeight)
                }, this.checkComplete = function() {
                    return W
                }, this.getCurrentQuality = function() {
                    if (!S) return -1;
                    if (S.getAvailableQualityLevels) {
                        var e = S.getPlaybackQuality(),
                            t = S.getAvailableQualityLevels();
                        return t.indexOf(e)
                    }
                    return -1
                }, this.getQualityLevels = function() {
                    if (S) {
                        if (!i.isFunction(S.getAvailableQualityLevels)) return [];
                        var e = S.getAvailableQualityLevels();
                        if (2 === e.length && i.contains(e, "auto")) return {
                            label: i.without(e, "auto")
                        };
                        var t = i.map(e, function(e) {
                            return {
                                label: e
                            }
                        });
                        return t.reverse()
                    }
                }, this.setCurrentQuality = function(e) {
                    if (S && S.getAvailableQualityLevels) {
                        var t = S.getAvailableQualityLevels();
                        if (t.length) {
                            var n = t[t.length - e - 1];
                            S.setPlaybackQuality(n)
                        }
                    }
                }, this.getName = function() {
                    return {
                        name: "youtube"
                    }
                }
            }

            function u(t) {
                return e.isYouTube(t.file, t.type)
            }
            var d = new a(window.location.protocol + "//www.youtube.com/iframe_api"),
                A = e.isMobile(),
                p = function() {};
            return p.prototype = l, c.prototype = new p, c.supports = u, c
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(64), n(67), n(45)], o = function(e, t, n) {
            var i = {},
                o = {
                    NEW: 0,
                    LOADING: 1,
                    ERROR: 2,
                    COMPLETE: 3
                },
                r = function(r, s) {
                    function a(t) {
                        u = o.ERROR, c.trigger(e.ERROR, t)
                    }

                    function l(t) {
                        u = o.COMPLETE, c.trigger(e.COMPLETE, t)
                    }
                    var c = n.extend(this, t),
                        u = o.NEW;
                    this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function(e) {
                        var t = document.createElement("link");
                        return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
                    }, this.makeScriptTag = function(e) {
                        var t = document.createElement("script");
                        return t.src = e, t
                    }, this.makeTag = s ? this.makeStyleLink : this.makeScriptTag, this.load = function() {
                        if (u === o.NEW) {
                            var t = i[r];
                            if (t && (u = t.getStatus(), 2 > u)) return t.on(e.ERROR, a), void t.on(e.COMPLETE, l);
                            var n = document.getElementsByTagName("head")[0] || document.documentElement,
                                c = this.makeTag(r),
                                d = !1;
                            c.onload = c.onreadystatechange = function(e) {
                                d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, l(e), c.onload = c.onreadystatechange = null, n && c.parentNode && !s && n.removeChild(c))
                            }, c.onerror = a, n.insertBefore(c, n.firstChild), u = o.LOADING, i[r] = this
                        }
                    }, this.getStatus = function() {
                        return u
                    }
                };
            return r.loaderstatus = o, r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45)], o = function(e) {
            var t = function() {
                var t = {},
                    n = {},
                    i = {},
                    o = {};
                return {
                    start: function(n) {
                        t[n] = e.now(), i[n] = i[n] + 1 || 1
                    },
                    end: function(i) {
                        if (t[i]) {
                            var o = e.now() - t[i];
                            n[i] = n[i] + o || o
                        }
                    },
                    dump: function() {
                        return {
                            counts: i,
                            sums: n,
                            events: o
                        }
                    },
                    tick: function(t, n) {
                        o[t] = n || e.now()
                    },
                    between: function(e, t) {
                        return o[t] && o[e] ? o[t] - o[e] : -1
                    }
                }
            };
            return t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(78), n(150)], o = function(e, t) {
            var n = e.prototype.setup;
            return e.prototype.setup = function() {
                n.apply(this, arguments);
                var e = this.edition();
                ("enterprise" === e || "ads" === e || "premium" === e) && (this._castController = new t(this, this._model), this.jwStartCasting = this._castController.startCasting, this.jwStopCasting = this._castController.stopCasting, this.jwOpenExtension = this._castController.openExtension)
            }, e.prototype.edition = function() {
                return this._model.edition()
            }, e
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(79), n(105), n(45), n(80), n(97), n(100), n(88), n(48), n(119), n(67), n(107), n(65), n(64), n(148)], o = function(e, t, n, i, o, r, s, a, l, c, u, d, A, p) {
            function w(e) {
                return function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    this.eventsQueue.push([e, t])
                }
            }

            function f(e) {
                return e === d.LOADING || e === d.STALLED ? d.BUFFERING : e
            }
            var g = function(e) {
                this.originalContainer = this.currentContainer = e, this.eventsQueue = [], n.extend(this, c), this._model = new r
            };
            return g.prototype = {
                play: w("play"),
                pause: w("pause"),
                setVolume: w("setVolume"),
                setMute: w("setMute"),
                seek: w("seek"),
                stop: w("stop"),
                load: w("load"),
                playlistNext: w("playlistNext"),
                playlistPrev: w("playlistPrev"),
                playlistItem: w("playlistItem"),
                setFullscreen: w("setFullscreen"),
                setCurrentCaptions: w("setCurrentCaptions"),
                setCurrentQuality: w("setCurrentQuality"),
                setup: function(r, c) {
                    function p() {
                        J.mediaModel.on("change:state", function(e, t) {
                            var n = f(t);
                            J.set("state", n)
                        })
                    }

                    function w() {
                        z = null, J.on("change:state", u, this),
                            J.on("change:castState", function(e, t) {
                                X.trigger(A.JWPLAYER_CAST_SESSION, t)
                            }), J.on("change:fullscreen", function(e, t) {
                                X.trigger(A.JWPLAYER_FULLSCREEN, {
                                    fullscreen: t
                                })
                            }), J.on("change:playlistItem", function(e, t) {
                                X.trigger(A.JWPLAYER_PLAYLIST_ITEM, {
                                    index: e.get("item"),
                                    item: t
                                })
                            }), J.on("change:playlist", function(e, t) {
                                t.length && X.trigger(A.JWPLAYER_PLAYLIST_LOADED, {
                                    playlist: t
                                })
                            }), J.on("change:volume", function(e, t) {
                                X.trigger(A.JWPLAYER_MEDIA_VOLUME, {
                                    volume: t
                                })
                            }), J.on("change:mute", function(e, t) {
                                X.trigger(A.JWPLAYER_MEDIA_MUTE, {
                                    mute: t
                                })
                            }), J.on("change:scrubbing", function(e, t) {
                                t ? b() : j()
                            }), J.on("change:captionsList", function(e, t) {
                                X.trigger(A.JWPLAYER_CAPTIONS_LIST, {
                                    tracks: t,
                                    track: F()
                                })
                            }), J.mediaController.on("all", X.trigger.bind(X)), U.on("all", X.trigger.bind(X)), this.showView(U.element()), window.addEventListener("beforeunload", function() {
                                N() || v(!0)
                            }), n.defer(g)
                    }

                    function g() {
                        for (X.trigger(A.JWPLAYER_READY, {
                                setupTime: 0
                            }), X.trigger(A.JWPLAYER_PLAYLIST_LOADED, {
                                playlist: J.get("playlist")
                            }), X.trigger(A.JWPLAYER_PLAYLIST_ITEM, {
                                index: J.get("item"),
                                item: J.get("playlistItem")
                            }), X.trigger(A.JWPLAYER_CAPTIONS_LIST, {
                                tracks: J.get("captionsList"),
                                track: J.get("captionsIndex")
                            }), J.get("autostart") && j(); X.eventsQueue.length > 0;) {
                            var e = X.eventsQueue.shift(),
                                t = e[0],
                                n = e[1] || [];
                            X[t].apply(X, n)
                        }
                    }

                    function h(e) {
                        switch (v(!0), J.get("autostart") && J.once("setItem", j), typeof e) {
                            case "string":
                                m(e);
                                break;
                            case "object":
                                J.setPlaylist(e);
                                break;
                            case "number":
                                J.setItem(e)
                        }
                    }

                    function m(e) {
                        var t = new s;
                        t.on(A.JWPLAYER_PLAYLIST_LOADED, function(e) {
                            h(e.playlist)
                        }), t.on(A.JWPLAYER_ERROR, function(e) {
                            J.set("state", d.ERROR), h([]), e.message = "Could not load playlist: " + e.message, X.trigger.call(X, e.type, e)
                        }), t.load(e)
                    }

                    function j(e) {
                        var t;
                        if (e === !1) return b();
                        if (J.get("state") !== d.ERROR) {
                            if (J.get("state") === d.COMPLETE && (v(!0), J.setItem(0)), !H && (H = !0, X.trigger(A.JWPLAYER_MEDIA_BEFOREPLAY, {}), H = !1, V)) return V = !1, void(G = null);
                            if (k()) {
                                if (0 === J.get("playlist").length) return !1;
                                t = a.tryCatch(function() {
                                    J.loadVideo()
                                })
                            } else J.get("state") === d.PAUSED && (t = a.tryCatch(function() {
                                J.playVideo()
                            }));
                            return t instanceof a.Error ? (X.trigger(A.JWPLAYER_ERROR, t), G = null, !1) : !0
                        }
                    }

                    function v(e) {
                        J.off("setItem", j);
                        var t = !e;
                        G = null;
                        var n = a.tryCatch(function() {
                            q().stop()
                        }, X);
                        return n instanceof a.Error ? (X.trigger(A.JWPLAYER_ERROR, n), !1) : (t && (K = !0), H && (V = !0), !0)
                    }

                    function b(e) {
                        if (G = null, a.exists(e)) {
                            if (!e) return j()
                        } else e = !0;
                        switch (J.get("state")) {
                            case d.ERROR:
                                return !1;
                            case d.PLAYING:
                            case d.BUFFERING:
                                var t = a.tryCatch(function() {
                                    q().pause()
                                }, this);
                                if (t instanceof a.Error) return X.trigger(A.JWPLAYER_ERROR, t), !1;
                                break;
                            default:
                                H && (V = !0)
                        }
                        return !0
                    }

                    function k() {
                        var e = J.get("state");
                        return e === d.IDLE || e === d.COMPLETE || e === d.ERROR
                    }

                    function E(e) {
                        J.get("state") !== d.ERROR && (J.get("scrubbing") || J.get("state") === d.PLAYING || j(!0), q().seek(e))
                    }

                    function y(e) {
                        v(!0), J.setItem(e), j()
                    }

                    function C() {
                        y(J.get("item") - 1)
                    }

                    function x() {
                        y(J.get("item") + 1)
                    }

                    function L() {
                        if (k()) {
                            if (K) return void(K = !1);
                            G = L;
                            var e = J.get("item");
                            return e === J.get("playlist").length - 1 ? void(J.get("repeat") ? x() : (J.set("state", d.COMPLETE), X.trigger(A.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void x()
                        }
                    }

                    function R(e) {
                        q().setCurrentQuality(e)
                    }

                    function I() {
                        return q() ? q().getCurrentQuality() : -1
                    }

                    function B() {
                        return this._model ? this._model.get("config") : void 0
                    }

                    function M() {
                        if (this._model.mediaModel) return this._model.mediaModel.visualQuality;
                        var e = P();
                        if (e) {
                            var t = I(),
                                i = e[t];
                            if (i) return {
                                level: n.extend({
                                    index: t
                                }, i),
                                mode: "",
                                reason: ""
                            }
                        }
                        return null
                    }

                    function P() {
                        return q() ? q().getQualityLevels() : null
                    }

                    function D(e) {
                        q().setCurrentAudioTrack(e)
                    }

                    function T() {
                        return q() ? q().getCurrentAudioTrack() : -1
                    }

                    function _() {
                        return q() ? q().getAudioTracks() : null
                    }

                    function S(e) {
                        J.setVideoSubtitleTrack(e), X.trigger(A.JWPLAYER_CAPTIONS_CHANGED, {
                            tracks: Y(),
                            track: e
                        })
                    }

                    function F() {
                        return W.getCurrentIndex()
                    }

                    function Y() {
                        return W.getCaptionsList()
                    }

                    function Q() {
                        var e = J.getVideo();
                        if (e) {
                            var t = e.detachMedia();
                            if (t instanceof HTMLVideoElement) return t
                        }
                        return null
                    }

                    function N() {
                        var e = J.getVideo();
                        return e ? e.isCaster : !1
                    }

                    function O(e) {
                        var t = a.tryCatch(function() {
                            J.getVideo().attachMedia(e)
                        });
                        return t instanceof a.Error ? void a.log("Error calling _attachMedia", t) : void("function" == typeof G && G())
                    }
                    var J, U, W, z, G, V, H = !1,
                        K = !1,
                        X = this,
                        q = function() {
                            return J.getVideo()
                        };
                    J = this._model.setup(r), U = this._view = new l(c, J), W = new o(c, J), z = new i(c, J, U), X.id = this._model.id, z.on(A.JWPLAYER_READY, w, this), z.on(A.JWPLAYER_SETUP_ERROR, function(e) {
                        X.setupError(e.message)
                    }), J.mediaController.on(A.JWPLAYER_MEDIA_COMPLETE, function() {
                        n.defer(L)
                    }), J.mediaController.on(A.JWPLAYER_MEDIA_ERROR, function(e) {
                        J.set("state", d.ERROR);
                        var t = n.extend({}, e);
                        t.type = A.JWPLAYER_ERROR, this.trigger(t.type, t)
                    }, this), p(), J.on("change:mediaModel", p), this.play = j, this.pause = b, this.seek = E, this.stop = v, this.load = h, this.playlistNext = x, this.playlistPrev = C, this.playlistItem = y, this.setCurrentCaptions = S, this.setCurrentQuality = R, this.detachMedia = Q, this.attachMedia = O, this.getCurrentQuality = I, this.getQualityLevels = P, this.setCurrentAudioTrack = D, this.getCurrentAudioTrack = T, this.getAudioTracks = _, this.getCurrentCaptions = F, this.getCaptionsList = Y, this.getVisualQuality = M, this.getConfig = B, this.setVolume = J.setVolume, this.setMute = J.setMute, this.seekDrag = J.seekDrag, this.getProvider = function() {
                        return J.get("provider")
                    }, this.getContainer = function() {
                        return this.currentContainer
                    }, this.resize = U.resize, this.getSafeRegion = U.getSafeRegion, this.setCues = U.addCues, this.setFullscreen = U.fullscreen, this.addButton = function(e, t, i, o) {
                        var r = {
                                img: e,
                                tooltip: t,
                                callback: i,
                                id: o
                            },
                            s = J.get("dock");
                        s = s ? s.slice(0) : [], s = n.reject(s, n.matches({
                            id: r.id
                        })), s.push(r), J.set("dock", s)
                    }, this.removeButton = function(e) {
                        var t = J.get("dock") || [];
                        t = n.reject(t, n.matches({
                            id: e
                        })), J.set("dock", t)
                    }, this.checkBeforePlay = function() {
                        return H
                    }, this.getItemQoe = function() {
                        return J._qoeItem
                    }, this.setControls = function(e) {
                        J.set("controls", e)
                    }, this.playerDestroy = function() {
                        this.stop(), U && U.destroy(), J && J.destroy(), z && (z.destroy(), z = null)
                    }, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function() {
                        return J.getVideo().checkComplete()
                    }, this.createInstream = function() {
                        return X.instreamDestroy(), X._instreamAdapter = new t(this, J, U), X._instreamAdapter
                    }, this.instreamDestroy = function() {
                        X._instreamAdapter && X._instreamAdapter.destroy()
                    }, e(c, this), z.start()
                },
                showView: function(e) {
                    (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this.id), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(e, this.currentContainer), this.currentContainer = e)
                },
                setupError: function(e) {
                    var t = a.createElement(p(this._model.get("id"), this._model.get("skin"), e)),
                        i = this._model.get("width"),
                        o = this._model.get("height");
                    a.style(t, {
                        width: i.toString().indexOf("%") > 0 ? i : i + "px",
                        height: o.toString().indexOf("%") > 0 ? o : o + "px"
                    }), this.showView(t);
                    var r = this;
                    n.defer(function() {
                        r.trigger(A.JWPLAYER_SETUP_ERROR, {
                            message: e
                        })
                    })
                },
                reset: function() {
                    this.showView(this.originalContainer)
                }
            }, g
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            return function(e, t) {
                e.getPlaylistIndex = e.getItem;
                var n = {
                    jwPlay: t.play,
                    jwPause: t.pause,
                    jwSetMute: t.setMute,
                    jwLoad: t.load,
                    jwPlaylistItem: t.item,
                    jwGetAudioTracks: t.getAudioTracks,
                    jwDetachMedia: t.detachMedia,
                    jwAttachMedia: t.attachMedia,
                    jwAddEventListener: t.on,
                    jwRemoveEventListener: t.off,
                    jwStop: t.stop,
                    jwSeek: t.seek,
                    jwSetVolume: t.setVolume,
                    jwPlaylistNext: t.next,
                    jwPlaylistPrev: t.prev,
                    jwSetFullscreen: t.setFullscreen,
                    jwGetQualityLevels: t.getQualityLevels,
                    jwGetCurrentQuality: t.getCurrentQuality,
                    jwSetCurrentQuality: t.setCurrentQuality,
                    jwSetCurrentAudioTrack: t.setCurrentAudioTrack,
                    jwGetCurrentAudioTrack: t.getCurrentAudioTrack,
                    jwGetCaptionsList: t.getCaptionsList,
                    jwGetCurrentCaptions: t.getCurrentCaptions,
                    jwSetCurrentCaptions: t.setCurrentCaptions,
                    jwSetCues: t.setCues
                };
                e.callInternal = function(e) {
                    console.log("You are using the deprecated callInternal method for " + e);
                    var i = Array.prototype.slice.call(arguments, 1);
                    n[e].apply(t, i)
                }
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(81), n(48), n(67), n(45), n(64)], o = function(e, t, n, i, o) {
            var r = function(t, n, r, s) {
                function a() {
                    A("Setup Timeout Error", "Setup took longer than " + s + " seconds to complete.")
                }

                function l() {
                    i.each(f, function(e) {
                        e.complete !== !0 && e.running !== !0 && null !== t && u(e.depends) && (e.running = !0, c(e))
                    })
                }

                function c(e) {
                    var i = function(t) {
                        t = t || {}, d(e, t)
                    };
                    e.method(i, n, t, r)
                }

                function u(e) {
                    return i.all(e, function(e) {
                        return f[e].complete
                    })
                }

                function d(e, t) {
                    "error" === t.type ? A(t.msg, t.reason) : "complete" === t.type ? (clearTimeout(p), w.trigger(o.JWPLAYER_READY)) : (e.complete = !0, l())
                }

                function A(e, t) {
                    clearTimeout(p), w.trigger(o.JWPLAYER_SETUP_ERROR, {
                        message: e + ": " + t
                    }), w.destroy()
                }
                var p, w = this,
                    f = e.getQueue();
                s = s || 10, this.start = function() {
                    p = setTimeout(a, 1e3 * s), l()
                }, this.destroy = function() {
                    clearTimeout(p), this.off(), f = 0, t = null, n = null, r = null
                }
            };
            return r.prototype = n, r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(82)], o = function(e) {
            function t(t, n) {
                var i = n.get("key"),
                    o = n.edition();
                "invalid" === o ? e.error(t, "Error setting up player", (void 0 === i ? "Missing" : "Invalid") + " license key") : t()
            }

            function i(e, t) {
                var i = t.get("config");
                "dashjs" === i.dash ? n.e(1, function(i) {
                    var o = n(93);
                    o.register(window.jwplayer), t.updateProviders(), e()
                }) : i.dash ? n.e(2, function(i) {
                    var o = n(95);
                    o.register(window.jwplayer), t.updateProviders(), e()
                }) : e()
            }

            function o() {
                var n = e.getQueue();
                return n.LOAD_PLAYLIST.depends.push("LOAD_PROVIDERS"), n.LOAD_PROVIDERS = {
                    method: i,
                    depends: []
                }, n.LOAD_PROVIDERS.depends.push("CHECK_KEY"), n.CHECK_KEY = {
                    method: t,
                    depends: []
                }, n
            }
            return {
                getQueue: o
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(83), n(88), n(55), n(75), n(48), n(67), n(49), n(45), n(64)], o = function(e, t, n, i, o, r, s, a, l) {
            function c() {
                var e = {
                    LOAD_PLUGINS: {
                        method: u,
                        depends: []
                    },
                    LOAD_SKIN: {
                        method: j,
                        depends: []
                    },
                    LOAD_PLAYLIST: {
                        method: w,
                        depends: []
                    },
                    SETUP_COMPONENTS: {
                        method: v,
                        depends: ["LOAD_PLAYLIST", "LOAD_SKIN"]
                    },
                    SEND_READY: {
                        method: b,
                        depends: ["LOAD_PLUGINS", "SETUP_COMPONENTS"]
                    }
                };
                return e
            }

            function u(t, n, i) {
                E = e.loadPlugins(n.config.id, n.config.plugins), E.on(l.COMPLETE, a.partial(d, t, n, i)), E.on(l.ERROR, a.partial(p, t)), E.load()
            }

            function d(e, t, n) {
                E.setupPlugins(n, t.config, a.partial(A, n)), e()
            }

            function A(e, t, n, i) {
                var o = e.id;
                return function() {
                    var e = document.querySelector("#" + o + " .jw-overlays");
                    e && i && e.appendChild(n), "function" == typeof t.resize && (t.resize(e.clientWidth, e.clientHeight), setTimeout(function() {
                        t.resize(e.clientWidth, e.clientHeight)
                    }, 400)), e && e.style && (n.left = e.style.left, n.top = e.style.top)
                }
            }

            function p(e, t) {
                k(e, "Could not load plugin", t.message)
            }

            function w(e, n) {
                var i = n.config.playlist;
                a.isString(i) ? (y = new t, y.on(l.JWPLAYER_PLAYLIST_LOADED, function(t) {
                    f(e, n, t.playlist)
                }), y.on(l.JWPLAYER_ERROR, a.partial(g, e)), y.load(i)) : f(e, n, i)
            }

            function f(e, t, n) {
                t.setPlaylist(n);
                var i = t.get("playlist");
                return a.isArray(i) && 0 !== i.length ? void e() : void g(e, "Playlist type not supported")
            }

            function g(e, t) {
                t && t.message ? k(e, "Error loading playlist", t.message) : k(e, "Error loading player", "No playable sources found")
            }

            function h(e) {
                return a.contains(s.SkinsLoadable, e) ? o.getSkinUrl(e) : void console.log("The skin parameter does not match any of our skins : " + e)
            }

            function m(e) {
                for (var t = document.styleSheets, n = 0, i = t.length; i > n; n++)
                    if (t[n].href === e) return !0;
                return !1
            }

            function j(e, t) {
                var n = t.get("skin"),
                    o = t.get("skinUrl");
                if (a.contains(s.SkinsIncluded, n)) return void e();
                if (o || (o = h(n)), a.isString(o) && !m(o)) {
                    t.set("skin-loading", !0);
                    var r = !0,
                        c = new i(o, r);
                    c.addEventListener(l.COMPLETE, function() {
                        t.set("skin-loading", !1)
                    }), c.addEventListener(l.ERROR, function() {
                        console.log("The given skin failed to load : ", o), t.set("skin", "seven"), t.set("skin-loading", !1)
                    }), c.load()
                }
                a.defer(function() {
                    e()
                })
            }

            function v(e, t, n, i) {
                i.setup(), e()
            }

            function b(e) {
                e({
                    type: "complete"
                })
            }

            function k(e, t, n) {
                e({
                    type: "error",
                    msg: t,
                    reason: n
                })
            }
            var E, y;
            return {
                getQueue: c,
                error: k
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(84), n(86), n(87), n(85)], o = function(e, t, n, i) {
            var o = {},
                r = {},
                s = function(n, i) {
                    return r[n] = new e(new t(o), i), r[n]
                },
                a = function(e, t, r, s) {
                    var a = i.getPluginName(e);
                    o[a] || (o[a] = new n(e)), o[a].registerPlugin(e, t, r, s)
                };
            return {
                loadPlugins: s,
                registerPlugin: a
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(85), n(48), n(64), n(67), n(45), n(75)], o = function(e, t, n, i, o, r) {
            var s = function(s, a) {
                function l() {
                    w || (w = !0, p = r.loaderstatus.COMPLETE, A.trigger(n.COMPLETE))
                }

                function c() {
                    if (!g && (a && 0 !== o.keys(a).length || l(), !w)) {
                        var i = s.getPlugins();
                        d = o.after(f, l), o.each(a, function(o, s) {
                            var a = e.getPluginName(s),
                                l = i[a],
                                c = l.getJS(),
                                u = l.getTarget(),
                                p = l.getStatus();
                            p !== r.loaderstatus.LOADING && p !== r.loaderstatus.NEW && (c && !t.versionCheck(u) && A.trigger(n.ERROR, {
                                message: "Incompatible player version"
                            }), d())
                        })
                    }
                }

                function u(e) {
                    if (!g) {
                        var i = "File not found";
                        e.url && t.log(i, e.url), this.off(), this.trigger(n.ERROR, {
                            message: i
                        }), c()
                    }
                }
                var d, A = o.extend(this, i),
                    p = r.loaderstatus.NEW,
                    w = !1,
                    f = o.size(a),
                    g = !1;
                this.setupPlugins = function(n, i, r) {
                    var a = [],
                        l = {},
                        c = s.getPlugins();
                    o.each(i.plugins, function(s, u) {
                        var d = e.getPluginName(u),
                            A = c[d],
                            p = A.getFlashPath(),
                            w = A.getJS(),
                            f = A.getURL();
                        if (p) {
                            var g = o.extend({
                                name: d,
                                swf: p,
                                pluginmode: A.getPluginmode()
                            }, s);
                            a.push(g)
                        }
                        var h = t.tryCatch(function() {
                            if (w && i.plugins && i.plugins[f]) {
                                var e = document.createElement("div");
                                e.id = n.id + "_" + d, e.className = "jw-plugin jw-reset", l[d] = A.getNewInstance(n, o.extend({}, i.plugins[f]), e), n.onReady(r(l[d], e, !0)), n.onResize(r(l[d], e))
                            }
                        });
                        h instanceof t.Error && t.log("ERROR: Failed to load " + d + ".")
                    }), n.plugins = l, i.flashPlugins = a
                }, this.load = function() {
                    if (t.exists(a) && "object" !== t.typeOf(a)) return void c();
                    p = r.loaderstatus.LOADING, o.each(a, function(e, i) {
                        if (t.exists(i)) {
                            var o = s.addPlugin(i);
                            o.on(n.COMPLETE, c), o.on(n.ERROR, u)
                        }
                    });
                    var e = s.getPlugins();
                    o.each(e, function(e) {
                        e.load()
                    }), c()
                }, this.destroy = function() {
                    g = !0, this.off()
                }, this.pluginFailed = u, this.getStatus = function() {
                    return p
                }
            };
            return s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(50)], o = function(e) {
            var t = {},
                n = t.pluginPathType = {
                    ABSOLUTE: 0,
                    RELATIVE: 1,
                    CDN: 2
                };
            return t.getPluginPathType = function(t) {
                if ("string" == typeof t) {
                    t = t.split("?")[0];
                    var i = t.indexOf("://");
                    if (i > 0) return n.ABSOLUTE;
                    var o = t.indexOf("/"),
                        r = e.extension(t);
                    return !(0 > i && 0 > o) || r && isNaN(r) ? n.RELATIVE : n.CDN
                }
            }, t.getPluginName = function(e) {
                return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
            }, t.getPluginVersion = function(e) {
                return e.replace(/[^-]*-?([^\.]*).*$/, "$1")
            }, t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(85), n(87)], o = function(e, t) {
            var n = function(n) {
                this.addPlugin = function(i) {
                    var o = e.getPluginName(i);
                    return n[o] || (n[o] = new t(i)), n[o]
                }, this.getPlugins = function() {
                    return n
                }
            };
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(85), n(64), n(67), n(75), n(45)], o = function(e, t, n, i, o, r) {
            var s = {
                    FLASH: 0,
                    JAVASCRIPT: 1,
                    HYBRID: 2
                },
                a = function(a) {
                    function l() {
                        switch (t.getPluginPathType(a)) {
                            case t.pluginPathType.ABSOLUTE:
                                return a;
                            case t.pluginPathType.RELATIVE:
                                return e.getAbsolutePath(a, window.location.href)
                        }
                    }

                    function c() {
                        r.defer(function() {
                            g = o.loaderstatus.COMPLETE, f.trigger(n.COMPLETE)
                        })
                    }

                    function u() {
                        g = o.loaderstatus.ERROR, f.trigger(n.ERROR, {
                            url: a
                        })
                    }
                    var d, A, p, w, f = r.extend(this, i),
                        g = o.loaderstatus.NEW;
                    this.load = function() {
                        if (g === o.loaderstatus.NEW) {
                            if (a.lastIndexOf(".swf") > 0) return d = a, g = o.loaderstatus.COMPLETE, void f.trigger(n.COMPLETE);
                            if (t.getPluginPathType(a) === t.pluginPathType.CDN) return g = o.loaderstatus.COMPLETE, void f.trigger(n.COMPLETE);
                            g = o.loaderstatus.LOADING;
                            var e = new o(l());
                            e.on(n.COMPLETE, c), e.on(n.ERROR, u), e.load()
                        }
                    }, this.registerPlugin = function(e, t, i, r) {
                        w && (clearTimeout(w), w = void 0), p = t, i && r ? (d = r, A = i) : "string" == typeof i ? d = i : "function" == typeof i ? A = i : i || r || (d = e), g = o.loaderstatus.COMPLETE, f.trigger(n.COMPLETE)
                    }, this.getStatus = function() {
                        return g
                    }, this.getPluginName = function() {
                        return t.getPluginName(a)
                    }, this.getFlashPath = function() {
                        if (d) switch (t.getPluginPathType(d)) {
                            case t.pluginPathType.ABSOLUTE:
                                return d;
                            case t.pluginPathType.RELATIVE:
                                return a.lastIndexOf(".swf") > 0 ? e.getAbsolutePath(d, window.location.href) : e.getAbsolutePath(d, l())
                        }
                        return null
                    }, this.getJS = function() {
                        return A
                    }, this.getTarget = function() {
                        return p
                    }, this.getPluginmode = function() {
                        return void 0 !== typeof d && void 0 !== typeof A ? s.HYBRID : void 0 !== typeof d ? s.FLASH : void 0 !== typeof A ? s.JAVASCRIPT : void 0
                    }, this.getNewInstance = function(e, t, n) {
                        return new A(e, t, n)
                    }, this.getURL = function() {
                        return a
                    }
                };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(55), n(89), n(90), n(48), n(64), n(67), n(45)], o = function(e, t, n, i, o, r, s) {
            var a = function() {
                function e(e) {
                    var r = i.tryCatch(function() {
                        for (var i = e.responseXML.childNodes, r = "", s = 0; s < i.length && (r = i[s], 8 === r.nodeType); s++);
                        if ("xml" === t.localName(r) && (r = r.nextSibling), "rss" !== t.localName(r)) return void l("Not a valid RSS feed");
                        var a = n.parse(r);
                        u.trigger(o.JWPLAYER_PLAYLIST_LOADED, {
                            playlist: a
                        })
                    });
                    r instanceof i.Error && l()
                }

                function a(e) {
                    l(e.match(/invalid/i) ? "Not a valid RSS feed" : "")
                }

                function l(e) {
                    u.trigger(o.JWPLAYER_ERROR, {
                        message: e ? e : "Error loading file"
                    })
                }
                var c, u = s.extend(this, r);
                this.load = function(t) {
                    c = i.ajax(t, e, a)
                }, this.destroy = function() {
                    this.off(), c = null
                }
            };
            return a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(50)], o = function(e) {
            return {
                localName: function(e) {
                    return e ? e.localName ? e.localName : e.baseName ? e.baseName : "" : ""
                },
                textContent: function(t) {
                    return t ? t.textContent ? e.trim(t.textContent) : t.text ? e.trim(t.text) : "" : ""
                },
                getChildNode: function(e, t) {
                    return e.childNodes[t]
                },
                numChildren: function(e) {
                    return e.childNodes ? e.childNodes.length : 0
                }
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(50), n(89), n(91), n(92), n(56)], o = function(e, t, n, i, o) {
            function r(t) {
                for (var r = {}, a = 0; a < t.childNodes.length; a++) {
                    var l = t.childNodes[a],
                        u = c(l);
                    if (u) switch (u.toLowerCase()) {
                        case "enclosure":
                            r.file = e.xmlAttribute(l, "url");
                            break;
                        case "title":
                            r.title = s(l);
                            break;
                        case "guid":
                            r.mediaid = s(l);
                            break;
                        case "pubdate":
                            r.date = s(l);
                            break;
                        case "description":
                            r.description = s(l);
                            break;
                        case "link":
                            r.link = s(l);
                            break;
                        case "category":
                            r.tags ? r.tags += s(l) : r.tags = s(l)
                    }
                }
                return r = i(t, r), r = n(t, r), new o(r)
            }
            var s = t.textContent,
                a = t.getChildNode,
                l = t.numChildren,
                c = t.localName,
                u = {};
            return u.parse = function(e) {
                for (var t = [], n = 0; n < l(e); n++) {
                    var i = a(e, n),
                        o = c(i).toLowerCase();
                    if ("channel" === o)
                        for (var s = 0; s < l(i); s++) {
                            var u = a(i, s);
                            "item" === c(u).toLowerCase() && t.push(r(u))
                        }
                }
                return t
            }, u
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(89), n(50), n(48)], o = function(e, t, n) {
            var i = "jwplayer",
                o = function(o, r) {
                    for (var s = [], a = [], l = t.xmlAttribute, c = "default", u = "label", d = "file", A = "type", p = 0; p < o.childNodes.length; p++) {
                        var w = o.childNodes[p];
                        if (w.prefix === i) {
                            var f = e.localName(w);
                            "source" === f ? (delete r.sources, s.push({
                                file: l(w, d),
                                "default": l(w, c),
                                label: l(w, u),
                                type: l(w, A)
                            })) : "track" === f ? (delete r.tracks, a.push({
                                file: l(w, d),
                                "default": l(w, c),
                                kind: l(w, "kind"),
                                label: l(w, u)
                            })) : (r[f] = n.serialize(e.textContent(w)), "file" === f && r.sources && delete r.sources)
                        }
                        r[d] || (r[d] = r.link)
                    }
                    if (s.length)
                        for (r.sources = [], p = 0; p < s.length; p++) s[p].file.length > 0 && (s[p][c] = "true" === s[p][c] ? !0 : !1, s[p].label.length || delete s[p].label, r.sources.push(s[p]));
                    if (a.length)
                        for (r.tracks = [], p = 0; p < a.length; p++) a[p].file.length > 0 && (a[p][c] = "true" === a[p][c] ? !0 : !1, a[p].kind = a[p].kind.length ? a[p].kind : "captions", a[p].label.length || delete a[p].label, r.tracks.push(a[p]));
                    return r
                };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(89), n(50), n(48)], o = function(e, t, n) {
            var i = t.xmlAttribute,
                o = e.localName,
                r = e.textContent,
                s = e.numChildren,
                a = "media",
                l = function(e, t) {
                    function c(e) {
                        var t = {
                            zh: "Chinese",
                            nl: "Dutch",
                            en: "English",
                            fr: "French",
                            de: "German",
                            it: "Italian",
                            ja: "Japanese",
                            pt: "Portuguese",
                            ru: "Russian",
                            es: "Spanish"
                        };
                        return t[e] ? t[e] : e
                    }
                    var u, d, A = "tracks",
                        p = [];
                    for (d = 0; d < s(e); d++)
                        if (u = e.childNodes[d], u.prefix === a) {
                            if (!o(u)) continue;
                            switch (o(u).toLowerCase()) {
                                case "content":
                                    i(u, "duration") && (t.duration = n.seconds(i(u, "duration"))), s(u) > 0 && (t = l(u, t)), i(u, "url") && (t.sources || (t.sources = []), t.sources.push({
                                        file: i(u, "url"),
                                        type: i(u, "type"),
                                        width: i(u, "width"),
                                        label: i(u, "label")
                                    }));
                                    break;
                                case "title":
                                    t.title = r(u);
                                    break;
                                case "description":
                                    t.description = r(u);
                                    break;
                                case "guid":
                                    t.mediaid = r(u);
                                    break;
                                case "thumbnail":
                                    t.image || (t.image = i(u, "url"));
                                    break;
                                case "player":
                                    break;
                                case "group":
                                    l(u, t);
                                    break;
                                case "subtitle":
                                    var w = {};
                                    w.file = i(u, "url"), w.kind = "captions", i(u, "lang").length > 0 && (w.label = c(i(u, "lang"))), p.push(w)
                            }
                        }
                    for (t.hasOwnProperty(A) || (t[A] = []), d = 0; d < p.length; d++) t[A].push(p[d]);
                    return t
                };
            return l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, , , , , function(e, t, n) {
        var i, o;
        i = [n(89), n(98), n(99), n(48)], o = function(e, t, n, i) {
            var o = function(o, r) {
                function s(e) {
                    i.log("CAPTIONS(" + e + ")")
                }

                function a(e, t) {
                    g = [], h = {}, m = {}, j = 0;
                    var n, i, o, r = t.tracks;
                    for (o = 0; o < r.length; o++) n = r[o], i = n.kind.toLowerCase(), ("captions" === i || "subtitles" === i) && (n.file ? (c(n), u(n)) : n.data && c(n));
                    var s = w();
                    this.setCaptionsList(s), f()
                }

                function l(e, t) {
                    return 0 === t ? void p(e, null) : void p(e, g[t - 1])
                }

                function c(e) {
                    "number" != typeof e.id && (e.id = e.name || e.file || "cc" + g.length), e.data = e.data || [], e.label || (e.label = "Unknown CC", j++, j > 1 && (e.label += " (" + j + ")")), g.push(e), h[e.id] = e
                }

                function u(e) {
                    i.ajax(e.file, function(t) {
                        d(t, e)
                    }, A, !0)
                }

                function d(o, r) {
                    var a, l = o.responseXML ? o.responseXML.firstChild : null;
                    if (l)
                        for ("xml" === e.localName(l) && (l = l.nextSibling); l.nodeType === l.COMMENT_NODE;) l = l.nextSibling;
                    a = l && "tt" === e.localName(l) ? i.tryCatch(function() {
                        r.data = n(o.responseXML)
                    }) : i.tryCatch(function() {
                        r.data = t(o.responseText)
                    }), a instanceof i.Error && s(a.message + ": " + r.file)
                }

                function A(e) {
                    s(e)
                }

                function p(e, t) {
                    e.set("captionsTrack", t), t ? e.set("captionLabel", t.label) : e.set("captionLabel", "Off")
                }

                function w() {
                    for (var e = [{
                            id: "off",
                            label: "Off"
                        }], t = 0; t < g.length; t++) e.push({
                        id: g[t].id,
                        label: g[t].label
                    });
                    return e
                }

                function f() {
                    for (var e = 0, t = r.get("captionLabel"), n = 0; n < g.length; n++) {
                        var i = g[n];
                        if (t && t === i.label) {
                            e = n + 1;
                            break
                        }
                        i["default"] || i.defaulttrack ? e = n + 1 : i.autoselect
                    }
                    r.set("captionsIndex", e)
                }
                r.on("change:playlistItem", a, this), r.on("change:captionsIndex", l, this), r.mediaController.on("subtitlesTracks", function(e) {
                    if (e.tracks.length) {
                        g = [], h = {}, m = {}, j = 0;
                        for (var t = e.tracks || [], n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.id = i.name, i.label = i.name || i.language, c(i)
                        }
                        var o = w();
                        this.setCaptionsList(o), f()
                    }
                }, this), r.mediaController.on("subtitlesTrackData", function(e) {
                    var t = h[e.name];
                    if (t) {
                        for (var n = e.captions || [], i = !1, o = 0; o < n.length; o++) {
                            var r = n[o],
                                s = e.name + "_" + r.begin + "_" + r.end;
                            m[s] || (m[s] = r, t.data.push(r), i = !0)
                        }
                        i && t.data.sort(function(e, t) {
                            return e.begin - t.begin
                        })
                    }
                }, this), r.mediaController.on("meta", function(e) {
                    var t = e.metadata;
                    if (t && "textdata" === t.type) {
                        var n = h[t.trackid];
                        if (!n) {
                            n = {
                                kind: "captions",
                                id: t.trackid,
                                data: []
                            }, c(n);
                            var i = w();
                            this.setCaptionsList(i)
                        }
                        var o = e.position || r.get("position"),
                            s = "" + Math.round(10 * o) + "_" + t.text,
                            a = m[s];
                        a || (a = {
                            begin: o,
                            text: t.text
                        }, m[s] = a, n.data.push(a))
                    }
                }, this);
                var g = [],
                    h = {},
                    m = {},
                    j = 0;
                this.getCurrentIndex = function() {
                    return r.get("captionsIndex")
                }, this.getCaptionsList = function() {
                    return r.get("captionsList")
                }, this.setCurrentIndex = function(e) {
                    o.setCurrentCaptions(e)
                }, this.setCaptionsList = function(e) {
                    r.set("captionsList", e)
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(50)], o = function(e, t) {
            function n(e) {
                var t = {},
                    n = e.split("\r\n");
                1 === n.length && (n = e.split("\n"));
                var o = 1;
                if (n[0].indexOf(" --> ") > 0 && (o = 0), n.length > o + 1 && n[o + 1]) {
                    var r = n[o],
                        s = r.indexOf(" --> ");
                    s > 0 && (t.begin = i(r.substr(0, s)), t.end = i(r.substr(s + 5)), t.text = n.slice(o + 1).join("<br/>"))
                }
                return t
            }
            var i = e.seconds;
            return function(e) {
                var i = [];
                e = t.trim(e);
                var o = e.split("\r\n\r\n");
                1 === o.length && (o = e.split("\n\n"));
                for (var r = 0; r < o.length; r++)
                    if ("WEBVTT" !== o[r]) {
                        var s = n(o[r]);
                        s.text && i.push(s)
                    }
                if (!i.length) throw new Error("Invalid SRT file");
                return i
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(50)], o = function(e, t) {
            function n(e) {
                e || i()
            }

            function i() {
                throw new Error("Invalid DFXP file")
            }
            var o = e.seconds;
            return function(e) {
                n(e);
                var r = [],
                    s = e.getElementsByTagName("p");
                n(s), s.length || (s = e.getElementsByTagName("tt:p"), s.length || (s = e.getElementsByTagName("tts:p")));
                for (var a = 0; a < s.length; a++) {
                    var l = s[a],
                        c = l.innerHTML || l.textContent || l.text || "",
                        u = t.trim(c).replace(/>\s+</g, "><").replace(/tts?:/g, "");
                    if (u) {
                        var d = l.getAttribute("begin"),
                            A = l.getAttribute("dur"),
                            p = l.getAttribute("end"),
                            w = {
                                begin: o(d),
                                text: u
                            };
                        p ? w.end = o(p) : A && (w.end = w.begin + o(A)), r.push(w)
                    }
                }
                return r.length || i(), r
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(101), n(47)], o = function(e, t) {
            var n = e,
                i = function() {
                    var e = new n,
                        i = e.setup;
                    return e.setup = function(e) {
                        var n = new t(e.key),
                            o = n.edition();
                        return e.edition = o, e.token = n.token(), i.apply(this, arguments), this.edition = function() {
                            return o
                        }, this
                    }, e
                };
            return i
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(63), n(55), n(59), n(102), n(103), n(45), n(67), n(104), n(64), n(65)], o = function(e, t, n, i, o, r, s, a, l, c, u) {
            var d = {
                    autostart: !1,
                    controls: !0,
                    scrubbing: !1,
                    fullscreen: !1,
                    height: 320,
                    mobilecontrols: !1,
                    mute: !1,
                    playlist: [],
                    repeat: !1,
                    skin: "seven",
                    stretching: t.UNIFORM,
                    width: 480,
                    volume: 90
                },
                A = function() {
                    function t(e) {
                        switch (e.type) {
                            case "volume":
                            case "mute":
                                return void this.set(e.type, e[e.type]);
                            case c.JWPLAYER_PLAYER_STATE:
                                return void this.mediaModel.set("state", e.newstate);
                            case c.JWPLAYER_MEDIA_BUFFER:
                                this.set("buffer", e.bufferPercent);
                                break;
                            case c.JWPLAYER_MEDIA_BUFFER_FULL:
                                this.playVideo();
                                break;
                            case c.JWPLAYER_MEDIA_TIME:
                                this.mediaModel.set("position", e.position), this.mediaModel.set("duration", e.duration), this.set("position", e.position), this.set("duration", e.duration);
                                break;
                            case c.JWPLAYER_PROVIDER_CHANGED:
                                this.set("provider", A.getName());
                                break;
                            case c.JWPLAYER_MEDIA_LEVELS:
                                this.setQualityLevel(e.currentQuality, e.levels), this.mediaModel.set("levels", e.levels);
                                break;
                            case c.JWPLAYER_MEDIA_LEVEL_CHANGED:
                                this.setQualityLevel(e.currentQuality, e.levels);
                                break;
                            case c.JWPLAYER_AUDIO_TRACKS:
                                this.setCurrentAudioTrack(e.currentTrack, e.tracks), this.mediaModel.set("audioTracks", e.tracks);
                                break;
                            case c.JWPLAYER_AUDIO_TRACK_CHANGED:
                                this.setCurrentAudioTrack(e.currentTrack, e.tracks);
                                break;
                            case "visualQuality":
                                var t = s.extend({}, e);
                                delete t.type, this.mediaModel.set("visualQuality", t)
                        }
                        this.mediaController.trigger(e.type, e)
                    }
                    var l, A, w = this,
                        f = {},
                        g = {
                            controlbar: {},
                            display: {}
                        },
                        h = e.noop;
                    this.mediaController = s.extend({}, a), this.mediaModel = new p, r.model(this), this.setup = function(t) {
                        return t.cookies && (o.model(this), f = o.getAllItems()), this.config = s.extend({}, d, f, t), s.extend(this, this.config, {
                            state: u.IDLE,
                            duration: 0,
                            position: 0,
                            buffer: 0
                        }), e.isMobile() && (this.autostart = !1), this.updateProviders(), this
                    }, this.updateProviders = function() {
                        l = new i(w.config)
                    }, this.setQualityLevel = function(e, t) {
                        e > -1 && t.length > 1 && "youtube" !== A.getName().name && this.mediaModel.set("currentLevel", parseInt(e))
                    }, this.setCurrentAudioTrack = function(e, t) {
                        e > -1 && t.length > 1 && this.mediaModel.set("currentAudioTrack", parseInt(e))
                    }, this.changeVideoProvider = function(e) {
                        var n;
                        A && (A.removeGlobalListener(t), n = A.getContainer(), n && A.remove()), h = new e(w.id, w.config), n && h.setContainer(n), this.set("provider", h.getName()), A = h, A.volume(w.volume), A.mute(w.mute), A.addGlobalListener(t.bind(this))
                    }, this.destroy = function() {
                        A && (A.removeGlobalListener(t), A.destroy())
                    }, this.getVideo = function() {
                        return A
                    }, this.setFullscreen = function(e) {
                        e = !!e, e !== w.fullscreen && w.set("fullscreen", e)
                    }, this.setPlaylist = function(e) {
                        var t = n(e);
                        return t = n.filterPlaylist(t, l, w.get("androidhls"), this.get("drm")), 0 === t.length ? (this.playlist = [], void this.mediaController.trigger(c.JWPLAYER_ERROR, {
                            message: "Error loading playlist: No playable sources found"
                        })) : (this.set("playlist", t), void this.setItem(0))
                    }, this.chooseProvider = function(e) {
                        return l.choose(e)
                    }, this.setItem = function(e) {
                        var t = w.get("playlist"),
                            n = (e + t.length) % t.length;
                        this.mediaModel.off(), this.set("mediaModel", new p), this.set("item", n);
                        var i = this.get("playlist")[n];
                        this.set("playlistItem", i);
                        var o = i && i.sources && i.sources[0];
                        if (void 0 !== o) {
                            var r = this.chooseProvider(o);
                            if (!r) throw new Error("No suitable provider found");
                            h instanceof r || w.changeVideoProvider(r), h.init && h.init(i), this.trigger("setItem")
                        }
                    }, this.setVolume = function(e) {
                        e = Math.round(e), w.set("volume", e), A && A.volume(e);
                        var t = 0 === e;
                        t !== w.get("mute") && w.setMute(t)
                    }, this.setMute = function(t) {
                        if (e.exists(t) || (t = !w.mute), w.set("mute", t), A && A.mute(t), !t) {
                            var n = Math.max(20, w.get("volume"));
                            this.setVolume(n)
                        }
                    }, this.componentConfig = function(e) {
                        return "logo" === e ? this.config.logo : g[e]
                    }, this.loadVideo = function(e) {
                        if (this.mediaController.trigger(c.JWPLAYER_MEDIA_PLAY_ATTEMPT), !e) {
                            var t = this.get("item");
                            e = this.get("playlist")[t]
                        }
                        this.set("position", e.starttime || 0), this.set("duration", e.duration || 0), A.load(e)
                    }, this.playVideo = function() {
                        A.play()
                    }, this.setVideoSubtitleTrack = function(e) {
                        this.set("captionsIndex", e), A.setSubtitlesTrack && A.setSubtitlesTrack(e)
                    }
                },
                p = A.MediaModel = function() {
                    this.state = u.IDLE
                };
            return s.extend(A.prototype, l), s.extend(p.prototype, l), A
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(48)], o = function(e, t) {
            function n() {
                for (var e = {}, n = document.cookie.split("; "), i = 0; i < n.length; i++) {
                    var o = n[i].split("=");
                    if ("jwplayer." === o[0].substr(0, 9)) {
                        var r = o[0].substr(9);
                        e[r] = t.serialize(o[1])
                    }
                }
                return e
            }

            function i(e) {
                return n()[e]
            }

            function o(e, t) {
                document.cookie = "jwplayer." + e + "=" + t + "; path=/"
            }

            function r(e) {
                o(e, "; expires=Thu, 01 Jan 1970 00:00:01 GMT")
            }

            function s() {
                var t = n();
                e.each(t, function(e, t) {
                    r(t)
                })
            }

            function a(t) {
                e.each(l, function(e) {
                    t.on("change:" + e, function(t, n) {
                        o(e, n)
                    })
                })
            }
            var l = ["volume", "mute", "captionLabel", "qualityLabel"];
            return {
                model: a,
                getAllItems: n,
                getItem: i,
                setItem: o,
                removeItem: r,
                clear: s
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(76), n(64), n(45)], o = function(e, t, n) {
            function i(e) {
                e.mediaController.off(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.off(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame), e.mediaController.off(t.JWPLAYER_MEDIA_TIME, e._onTime)
            }

            function o(e) {
                i(e), e._triggerFirstFrame = n.once(function() {
                    var n = e._qoeItem;
                    n.tick(t.JWPLAYER_MEDIA_FIRST_FRAME);
                    var o = n.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, t.JWPLAYER_MEDIA_FIRST_FRAME);
                    e.mediaController.trigger(t.JWPLAYER_MEDIA_FIRST_FRAME, {
                        loadTime: o
                    }), i(e)
                }), e._onTime = s(e._triggerFirstFrame), e._onPlayAttempt = function() {
                    e._qoeItem.tick(t.JWPLAYER_MEDIA_PLAY_ATTEMPT)
                }, e.mediaController.once(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.once(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame), e.mediaController.on(t.JWPLAYER_MEDIA_TIME, e._onTime)
            }

            function r(n) {
                n.on("change:mediaModel", function(n, i, r) {
                    n._qoeItem && n._qoeItem.end(r.get("state")), n._qoeItem = new e, n._qoeItem.tick(t.JWPLAYER_PLAYLIST_ITEM), n._qoeItem.start(i.get("state")), o(n), i.on("change:state", function(e, t, i) {
                        n._qoeItem.end(i), n._qoeItem.start(t)
                    })
                })
            }
            var s = function(e) {
                var t = Number.MIN_VALUE;
                return function(n) {
                    n.position > t && e(), t = n.position
                }
            };
            return {
                model: r
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(67)], o = function(e, t) {
            var n = e.extend({
                get: function(e) {
                    return this[e]
                },
                set: function(e, t) {
                    if (this[e] !== t) {
                        var n = this[e];
                        this[e] = t, this.trigger("change:" + e, this, t, n)
                    }
                }
            }, t);
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(106), n(108), n(109), n(64), n(65), n(48), n(67), n(45)], o = function(e, t, n, i, o, r, s, a) {
            function l(n) {
                var i = n.get("provider").name || "";
                return i.indexOf("flash") >= 0 ? t : e
            }
            var c = {
                    skipoffset: null,
                    tag: null
                },
                u = function(e, t, s) {
                    function u(e, t) {
                        t = t || {}, k.tag && !t.tag && (t.tag = k.tag), this.trigger(e, t)
                    }

                    function d(e) {
                        this._skipButton && this._skipButton.updateMediaTime(e.position, e.duration)
                    }

                    function A(e) {
                        if (v._adModel.state = "complete", p && b + 1 < p.length) {
                            this._skipButton && this._skipButton.destroy(), b++;
                            var t, n = p[b];
                            w && (t = w[b]), this.loadItem(n, t)
                        } else e.type === i.JWPLAYER_MEDIA_COMPLETE && (u.call(this, e.type, e), this.trigger(i.JWPLAYER_PLAYLIST_COMPLETE, {})), this.destroy()
                    }
                    var p, w, f, g, h, m, j = l(t),
                        v = new j(e, t),
                        b = 0,
                        k = {},
                        E = a.bind(function(e) {
                            e = e || {}, e.hasControls = !!t.get("controls"), this.trigger(i.JWPLAYER_INSTREAM_CLICK, e), v && v._adModel && (v._adModel.state === o.PAUSED ? e.hasControls && v.instreamPlay() : v.instreamPause())
                        }, this),
                        y = a.bind(function() {
                            v && v._adModel && v._adModel.state === o.PAUSED && t.get("controls") && (e.setFullscreen(),
                                e.play())
                        }, this);
                    this.type = "instream", this.init = function() {
                        return f = t.getVideo(), g = t.position, m = t.playlist[t.item], v.on("all", u, this), v.on(i.JWPLAYER_MEDIA_TIME, d, this), v.on(i.JWPLAYER_MEDIA_COMPLETE, A, this), v.init(), f.detachMedia(), e.checkBeforePlay() || 0 === g && !f.checkComplete() ? (g = 0, h = o.PLAYING) : h = f && f.checkComplete() ? o.IDLE : t.get("state") === o.IDLE ? o.IDLE : o.PLAYING, h === o.PLAYING && f.pause(), s.setupInstream(v._adModel), s.clickHandler().setAlternateClickHandlers(r.noop, null), this.setText("Loading ad"), this
                    }, this.loadItem = function(e, t) {
                        return r.isAndroid(2.3) ? void this.trigger({
                            type: i.JWPLAYER_ERROR,
                            message: "Error loading instream: Cannot play instream on Android 2.3"
                        }) : (a.isArray(e) && (p = e, w = t, e = p[b], w && (t = w[b])), this.trigger(i.JWPLAYER_PLAYLIST_ITEM, {
                            index: b,
                            item: e
                        }), k = a.extend({}, c, t), v.load(e), this.addClickHandler(), void(k.skipoffset && (this._skipButton && this._skipButton.destroy(), this._skipButton = new n(k.skipMessage, k.skipText), this._skipButton.on(i.JWPLAYER_AD_SKIPPED, this.skipAd, this), this._skipButton.setWaitTime(k.skipoffset), s.controlsContainer().appendChild(this._skipButton.element()))))
                    }, this.play = function() {
                        v.instreamPlay()
                    }, this.pause = function() {
                        v.instreamPause()
                    }, this.hide = function() {
                        v.hide()
                    }, this.addClickHandler = function() {
                        s.clickHandler().setAlternateClickHandlers(E, y), v.on(i.JWPLAYER_MEDIA_META, this.metaHandler, this)
                    }, this.skipAd = function(e) {
                        var t = i.JWPLAYER_AD_SKIPPED;
                        this.trigger(t, e), A.call(this, {
                            type: t
                        })
                    }, this.metaHandler = function(e) {
                        e.width && e.height && s.resizeMedia()
                    }, this.destroy = function() {
                        if (this.off(), this._skipButton && (s.controlsContainer().removeChild(this._skipButton.element()), this._skipButton = null), v) {
                            if (s.clickHandler() && s.clickHandler().revertAlternateClickHandlers(), v.instreamDestroy(), s.destroyInstream(), v = null, e.attachMedia(), h !== o.IDLE) {
                                var n = a.extend({}, m);
                                n.starttime = g, t.loadVideo(n)
                            } else f.stop();
                            h === o.PLAYING && f.play()
                        }
                    }, this.getState = function() {
                        return v && v._adModel ? v._adModel.get("state") : !1
                    }, this.setText = function(e) {
                        s.setAltText(e ? e : "")
                    }, this.hide = function() {
                        s.useExternalControls()
                    }
                };
            return a.extend(u.prototype, s), u
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(67), n(107), n(64), n(65), n(100)], o = function(e, t, n, i, o, r) {
            var s = function(s, a) {
                function l() {
                    var e = w.getVideo();
                    if (f !== e) {
                        if (f = e, !e) return;
                        e.resetEventListeners(), e.addGlobalListener(u), e.addEventListener(i.JWPLAYER_MEDIA_BUFFER_FULL, p), e.addEventListener(i.JWPLAYER_PLAYER_STATE, c), e.attachMedia(), e.mute(a.mute), e.volume(a.volume), w.on("change:state", n, g)
                    }
                }

                function c(e) {
                    switch (e.newstate) {
                        case o.PLAYING:
                            w.set("state", e.newstate);
                            break;
                        case o.PAUSED:
                            w.set("state", e.newstate)
                    }
                }

                function u(e) {
                    g.trigger(e.type, e)
                }

                function d(e) {
                    a.trigger(e.type, e), g.trigger(i.JWPLAYER_FULLSCREEN, {
                        fullscreen: e.jwstate
                    })
                }

                function A(e) {
                    u(e)
                }

                function p() {
                    w.getVideo().play()
                }
                var w, f, g = e.extend(this, t);
                return s.on(i.JWPLAYER_FULLSCREEN, A), this.init = function() {
                    w = (new r).setup({
                        id: a.id,
                        volume: a.volume,
                        fullscreen: a.fullscreen,
                        mute: a.mute
                    }), w.on("fullscreenchange", d), this._adModel = w
                }, g.load = function(e) {
                    w.setPlaylist([e]), l(), w.off(i.JWPLAYER_ERROR), w.on(i.JWPLAYER_ERROR, u), w.loadVideo()
                }, this.instreamDestroy = function() {
                    w && (w.off(), g.off(), f && (f.detachMedia(), f.resetEventListeners(), f.destroy()), w = null)
                }, g.instreamPlay = function() {
                    w.getVideo() && w.getVideo().play(!0)
                }, g.instreamPause = function() {
                    w.getVideo() && w.getVideo().pause(!0)
                }, g
            };
            return s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(65)], o = function(e) {
            function t(t) {
                return t === e.COMPLETE || t === e.ERROR ? e.IDLE : t
            }
            return function(e, n, i) {
                if (n = t(n), i = t(i), n !== i) {
                    var o = n.replace(/(?:ing|d)$/, ""),
                        r = {
                            type: o,
                            newstate: n,
                            oldstate: i,
                            reason: e.mediaModel.get("state")
                        };
                    this.trigger(o, r)
                }
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(67), n(100), n(107), n(64), n(65), n(45)], o = function(e, t, n, i, o, r) {
            var s = function(e, i) {
                this.controller = e, this.model = i, this._adModel = (new t).setup({
                    id: i.id,
                    volume: i.volume,
                    fullscreen: i.fullscreen,
                    mute: i.mute
                }), this._adModel.on("change:state", n, this);
                var o = e.getContainer();
                this.swf = o.querySelector("object")
            };
            return s.prototype = r.extend({
                init: function() {
                    this.swf.on("instream:state", function(e) {
                        switch (e.newstate) {
                            case o.PLAYING:
                                this._adModel.set("state", e.newstate);
                                break;
                            case o.PAUSED:
                                this._adModel.set("state", e.newstate)
                        }
                    }, this).on("instream:time", function(e) {
                        this._adModel.set("position", e.position), this._adModel.set("duration", e.duration), this.trigger(i.JWPLAYER_MEDIA_TIME, e)
                    }, this).on("instream:complete", function(e) {
                        this.trigger(i.JWPLAYER_MEDIA_COMPLETE, e)
                    }, this).on("instream:error", function(e) {
                        this.trigger(i.JWPLAYER_MEDIA_ERROR, e)
                    }, this), this.swf.triggerFlash("instream:init")
                },
                instreamDestroy: function() {
                    this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash("instream:destroy"), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null, this.controller = null)
                },
                load: function(e) {
                    this.swf.triggerFlash("instream:load", e)
                },
                instreamPlay: function() {
                    this.swf.triggerFlash("instream:play")
                },
                instreamPause: function() {
                    this.swf.triggerFlash("instream:pause")
                }
            }, e), s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(64), n(110), n(67), n(45), n(111)], o = function(e, t, n, i, o, r) {
            var s = function(e, t) {
                this.skipMessage = t, this.skipMessageCountdown = e, this.skipMessage = t, this.setup()
            };
            return o.extend(s.prototype, i, {
                setup: function() {
                    this.destroy();
                    var t = r();
                    this.el = e.createElement(t), this.skiptext = this.el.getElementsByClassName("jw-skiptext")[0], this.skipAdOnce = o.once(this.skipAd), new n(this.el).on("click tap", o.bind(function() {
                        this.skippable && this.skipAdOnce()
                    }, this))
                },
                updateMessage: function(e) {
                    this.skiptext.innerHTML = e
                },
                updateCountdown: function(e) {
                    this.updateMessage(this.skipMessageCountdown.replace(/xx/gi, Math.ceil(this.waitTime - e)))
                },
                updateMediaTime: function(t, n) {
                    if (this.waitPercentage) {
                        if (!n) return;
                        this.itemDuration = n, this.setWaitTime(this.waitPercentage), delete this.waitPercentage
                    }
                    e.removeClass(this.el, "jw-hidden"), this.waitTime - t > 0 ? this.updateCountdown(t) : (this.updateMessage(this.skipMessage), this.skippable = !0, e.addClass(this.el, "jw-skippable"))
                },
                element: function() {
                    return this.el
                },
                setWaitTime: function(t) {
                    if (o.isString(t) && "%" === t.slice(-1)) {
                        var n = parseFloat(t);
                        return void(this.itemDuration && !isNaN(n) ? this.waitTime = this.itemDuration * n / 100 : this.waitPercentage = t)
                    }
                    o.isNumber(t) ? this.waitTime = t : "string" === e.typeOf(t) ? this.waitTime = e.seconds(t) : isNaN(Number(t)) ? this.waitTime = 0 : this.waitTime = Number(t)
                },
                skipAd: function() {
                    this.trigger(t.JWPLAYER_AD_SKIPPED)
                },
                destroy: function() {
                    this.el && (this.el.removeEventListener("click", this.skipAdOnce), this.el.parentElement && this.el.parentElement.removeChild(this.el)), delete this.skippable, delete this.itemDuration, delete this.waitPercentage
                }
            }), s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(67), n(64), n(45), n(48)], o = function(e, t, n, i) {
            function o(e, t) {
                return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
            }

            function r(e) {
                var t = e || window.event;
                return "which" in t ? 3 === t.which : "button" in t ? 2 === t.button : !1
            }

            function s(e, t, n) {
                var i;
                return i = t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], {
                    type: e,
                    target: t.target,
                    currentTarget: n,
                    pageX: i.pageX,
                    pageY: i.pageY
                }
            }

            function a(e) {
                (e instanceof MouseEvent || e instanceof l) && (e.preventManipulation && e.preventManipulation(), e.cancelable && e.preventDefault && e.preventDefault())
            }
            var l = window.TouchEvent || {},
                c = function(e, l) {
                    function c(e) {
                        var t = e instanceof MouseEvent;
                        p = e.target, m = o(e, "X"), j = o(e, "Y"), (!t || t && !r(e)) && (k && document.addEventListener("mousemove", u), p.addEventListener("touchmove", u)), k && document.addEventListener("mouseup", d), p.addEventListener("touchcancel", d), p.addEventListener("touchend", d)
                    }

                    function u(e) {
                        var n = t.touchEvents,
                            i = 6;
                        if (h) A(n.DRAG, e);
                        else {
                            var r = o(e, "X"),
                                s = o(e, "Y"),
                                l = r - m,
                                c = s - j;
                            l * l + c * c > i * i && (A(n.DRAG_START, e), h = !0, A(n.DRAG, e))
                        }
                        g && a(e)
                    }

                    function d(e) {
                        var n = t.touchEvents;
                        k && (document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", d)), p.removeEventListener("touchmove", u), p.removeEventListener("touchcancel", d), p.removeEventListener("touchend", d), h ? A(n.DRAG_END, e) : e instanceof MouseEvent ? r(e) || A(n.CLICK, e) : (A(n.TAP, e), a(e)), p = null, h = !1
                    }

                    function A(e, i) {
                        var o;
                        if (f && (e === t.touchEvents.CLICK || e === t.touchEvents.TAP))
                            if (n.now() - v < b) {
                                var r = e === t.touchEvents.CLICK ? t.touchEvents.DOUBLE_CLICK : t.touchEvents.DOUBLE_TAP;
                                o = s(r, i, w), E.trigger(r, o), v = 0
                            } else v = n.now();
                        o = s(e, i, w), E.trigger(e, o)
                    }
                    var p, w = e,
                        f = l && l.enableDoubleTap,
                        g = l && l.preventScrolling,
                        h = !1,
                        m = 0,
                        j = 0,
                        v = 0,
                        b = 300,
                        k = !i.isMobile();
                    k && e.addEventListener("mousedown", c), e.addEventListener("touchstart", c);
                    var E = this;
                    return this.triggerEvent = A, this.destroy = function() {
                        e.removeEventListener("touchstart", c), e.removeEventListener("mousedown", c), p && (p.removeEventListener("touchmove", u), p.removeEventListener("touchcancel", d), p.removeEventListener("touchend", d)), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", d)
                    }, this
                };
            return n.extend(c.prototype, e), c
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                return '<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'
            },
            useData: !0
        })
    }, function(e, t, n) {
        e.exports = n(113)
    }, function(e, t, n) {
        "use strict";
        var i = n(114),
            o = n(116)["default"],
            r = n(117)["default"],
            s = n(115),
            a = n(118),
            l = function() {
                var e = new i.HandlebarsEnvironment;
                return s.extend(e, i), e.SafeString = o, e.Exception = r, e.Utils = s, e.escapeExpression = s.escapeExpression, e.VM = a, e.template = function(t) {
                    return a.template(t, e)
                }, e
            },
            c = l();
        c.create = l, c["default"] = c, t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            this.helpers = e || {}, this.partials = t || {}, o(this)
        }

        function o(e) {
            e.registerHelper("helperMissing", function() {
                if (1 === arguments.length) return void 0;
                throw new s("Missing helper: '" + arguments[arguments.length - 1].name + "'")
            }), e.registerHelper("blockHelperMissing", function(t, n) {
                var i = n.inverse,
                    o = n.fn;
                if (t === !0) return o(this);
                if (t === !1 || null == t) return i(this);
                if (u(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
                if (n.data && n.ids) {
                    var s = g(n.data);
                    s.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {
                        data: s
                    }
                }
                return o(t, n)
            }), e.registerHelper("each", function(e, t) {
                if (!t) throw new s("Must pass iterator to #each");
                var n, i, o = t.fn,
                    a = t.inverse,
                    l = 0,
                    c = "";
                if (t.data && t.ids && (i = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), d(e) && (e = e.call(this)), t.data && (n = g(t.data)), e && "object" == typeof e)
                    if (u(e))
                        for (var A = e.length; A > l; l++) n && (n.index = l, n.first = 0 === l, n.last = l === e.length - 1, i && (n.contextPath = i + l)), c += o(e[l], {
                            data: n
                        });
                    else
                        for (var p in e) e.hasOwnProperty(p) && (n && (n.key = p, n.index = l, n.first = 0 === l, i && (n.contextPath = i + p)), c += o(e[p], {
                            data: n
                        }), l++);
                return 0 === l && (c = a(this)), c
            }), e.registerHelper("if", function(e, t) {
                return d(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
            }), e.registerHelper("unless", function(t, n) {
                return e.helpers["if"].call(this, t, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                })
            }), e.registerHelper("with", function(e, t) {
                d(e) && (e = e.call(this));
                var n = t.fn;
                if (r.isEmpty(e)) return t.inverse(this);
                if (t.data && t.ids) {
                    var i = g(t.data);
                    i.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                        data: i
                    }
                }
                return n(e, t)
            }), e.registerHelper("log", function(t, n) {
                var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                e.log(i, t)
            }), e.registerHelper("lookup", function(e, t) {
                return e && e[t]
            })
        }
        var r = n(115),
            s = n(117)["default"],
            a = "2.0.0";
        t.VERSION = a;
        var l = 6;
        t.COMPILER_REVISION = l;
        var c = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        t.REVISION_CHANGES = c;
        var u = r.isArray,
            d = r.isFunction,
            A = r.toString,
            p = "[object Object]";
        t.HandlebarsEnvironment = i, i.prototype = {
            constructor: i,
            logger: w,
            log: f,
            registerHelper: function(e, t) {
                if (A.call(e) === p) {
                    if (t) throw new s("Arg not supported with multiple helpers");
                    r.extend(this.helpers, e)
                } else this.helpers[e] = t
            },
            unregisterHelper: function(e) {
                delete this.helpers[e]
            },
            registerPartial: function(e, t) {
                A.call(e) === p ? r.extend(this.partials, e) : this.partials[e] = t
            },
            unregisterPartial: function(e) {
                delete this.partials[e]
            }
        };
        var w = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(e, t) {
                if (w.level <= e) {
                    var n = w.methodMap[e];
                    "undefined" != typeof console && console[n] && console[n].call(console, t)
                }
            }
        };
        t.logger = w;
        var f = w.log;
        t.log = f;
        var g = function(e) {
            var t = r.extend({}, e);
            return t._parent = e, t
        };
        t.createFrame = g
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return c[e]
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++)
                for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }

        function r(e) {
            return e instanceof l ? e.toString() : null == e ? "" : e ? (e = "" + e, d.test(e) ? e.replace(u, i) : e) : e + ""
        }

        function s(e) {
            return e || 0 === e ? w(e) && 0 === e.length ? !0 : !1 : !0
        }

        function a(e, t) {
            return (e ? e + "." : "") + t
        }
        var l = n(116)["default"],
            c = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            u = /[&<>"'`]/g,
            d = /[&<>"'`]/;
        t.extend = o;
        var A = Object.prototype.toString;
        t.toString = A;
        var p = function(e) {
            return "function" == typeof e
        };
        p(/x/) && (p = function(e) {
            return "function" == typeof e && "[object Function]" === A.call(e)
        });
        var p;
        t.isFunction = p;
        var w = Array.isArray || function(e) {
            return e && "object" == typeof e ? "[object Array]" === A.call(e) : !1
        };
        t.isArray = w, t.escapeExpression = r, t.isEmpty = s, t.appendContextPath = a
    }, function(e, t) {
        "use strict";

        function n(e) {
            this.string = e
        }
        n.prototype.toString = function() {
            return "" + this.string
        }, t["default"] = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            var n;
            t && t.firstLine && (n = t.firstLine, e += " - " + n + ":" + t.firstColumn);
            for (var o = Error.prototype.constructor.call(this, e), r = 0; r < i.length; r++) this[i[r]] = o[i[r]];
            n && (this.lineNumber = n, this.column = t.firstColumn)
        }
        var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        n.prototype = new Error, t["default"] = n
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e && e[0] || 1,
                n = d;
            if (t !== n) {
                if (n > t) {
                    var i = A[n],
                        o = A[t];
                    throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + o + ").")
                }
                throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }

        function o(e, t) {
            if (!t) throw new u("No environment passed to template");
            if (!e || !e.main) throw new u("Unknown template object: " + typeof e);
            t.VM.checkRevision(e.compiler);
            var n = function(n, i, o, r, s, a, l, d, A) {
                    s && (r = c.extend({}, r, s));
                    var p = t.VM.invokePartial.call(this, n, o, r, a, l, d, A);
                    if (null == p && t.compile) {
                        var w = {
                            helpers: a,
                            partials: l,
                            data: d,
                            depths: A
                        };
                        l[o] = t.compile(n, {
                            data: void 0 !== d,
                            compat: e.compat
                        }, t), p = l[o](r, w)
                    }
                    if (null != p) {
                        if (i) {
                            for (var f = p.split("\n"), g = 0, h = f.length; h > g && (f[g] || g + 1 !== h); g++) f[g] = i + f[g];
                            p = f.join("\n")
                        }
                        return p
                    }
                    throw new u("The partial " + o + " could not be compiled when running in runtime-only mode")
                },
                i = {
                    lookup: function(e, t) {
                        for (var n = e.length, i = 0; n > i; i++)
                            if (e[i] && null != e[i][t]) return e[i][t]
                    },
                    lambda: function(e, t) {
                        return "function" == typeof e ? e.call(t) : e
                    },
                    escapeExpression: c.escapeExpression,
                    invokePartial: n,
                    fn: function(t) {
                        return e[t]
                    },
                    programs: [],
                    program: function(e, t, n) {
                        var i = this.programs[e],
                            o = this.fn(e);
                        return t || n ? i = r(this, e, o, t, n) : i || (i = this.programs[e] = r(this, e, o)), i
                    },
                    data: function(e, t) {
                        for (; e && t--;) e = e._parent;
                        return e
                    },
                    merge: function(e, t) {
                        var n = e || t;
                        return e && t && e !== t && (n = c.extend({}, t, e)), n
                    },
                    noop: t.VM.noop,
                    compilerInfo: e.compiler
                },
                o = function(t, n) {
                    n = n || {};
                    var r = n.data;
                    o._setup(n), !n.partial && e.useData && (r = l(t, r));
                    var s;
                    return e.useDepths && (s = n.depths ? [t].concat(n.depths) : [t]), e.main.call(i, t, i.helpers, i.partials, r, s)
                };
            return o.isTop = !0, o._setup = function(n) {
                n.partial ? (i.helpers = n.helpers, i.partials = n.partials) : (i.helpers = i.merge(n.helpers, t.helpers), e.usePartial && (i.partials = i.merge(n.partials, t.partials)))
            }, o._child = function(t, n, o) {
                if (e.useDepths && !o) throw new u("must pass parent depths");
                return r(i, t, e[t], n, o)
            }, o
        }

        function r(e, t, n, i, o) {
            var r = function(t, r) {
                return r = r || {}, n.call(e, t, e.helpers, e.partials, r.data || i, o && [t].concat(o))
            };
            return r.program = t, r.depth = o ? o.length : 0, r
        }

        function s(e, t, n, i, o, r, s) {
            var a = {
                partial: !0,
                helpers: i,
                partials: o,
                data: r,
                depths: s
            };
            if (void 0 === e) throw new u("The partial " + t + " could not be found");
            return e instanceof Function ? e(n, a) : void 0
        }

        function a() {
            return ""
        }

        function l(e, t) {
            return t && "root" in t || (t = t ? p(t) : {}, t.root = e), t
        }
        var c = n(115),
            u = n(117)["default"],
            d = n(114).COMPILER_REVISION,
            A = n(114).REVISION_CHANGES,
            p = n(114).createFrame;
        t.checkRevision = i, t.template = o, t.program = r, t.invokePartial = s, t.noop = a
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(64), n(67), n(65), n(122), n(123), n(124), n(125), n(127), n(120), n(129), n(142), n(143), n(146), n(62), n(45), n(147)], o = function(e, t, n, i, o, r, s, a, l, c, u, d, A, p, w, f, g) {
            var h = e.style,
                m = e.bounds,
                j = e.isMobile(),
                v = e.isIPad(),
                b = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                k = function(k, E) {
                    function y(t) {
                        var n = e.between(E.get("position") + t, 0, this.getDuration());
                        this.seek(n)
                    }

                    function C(t) {
                        var n = e.between(this.getVolume() + t, 0, 100);
                        this.setVolume(n)
                    }

                    function x(e) {
                        return e.ctrlKey || e.metaKey ? !1 : E.get("controls") ? !0 : !1
                    }

                    function L(e) {
                        if (!x(e)) return !0;
                        switch (Ye || oe(), e.keyCode) {
                            case 27:
                                k.setFullscreen(!1);
                                break;
                            case 13:
                            case 32:
                                k.play();
                                break;
                            case 37:
                                Ye || y.call(k, -5);
                                break;
                            case 39:
                                Ye || y.call(k, 5);
                                break;
                            case 38:
                                C.call(k, 10);
                                break;
                            case 40:
                                C.call(k, -10);
                                break;
                            case 77:
                                k.setMute();
                                break;
                            case 70:
                                k.setFullscreen();
                                break;
                            default:
                                if (e.keyCode >= 48 && e.keyCode <= 59) {
                                    var t = e.keyCode - 48,
                                        n = t / 10 * k.getDuration();
                                    k.seek(n)
                                }
                        }
                        return /13|32|37|38|39|40/.test(e.keyCode) ? (e.preventDefault(), !1) : void 0
                    }

                    function R() {
                        Ue = !0, We.trigger(t.JWPLAYER_VIEW_TAB_FOCUS, {
                            hasFocus: !1
                        })
                    }

                    function I() {
                        var e = !Ue;
                        Ue = !1, e && We.trigger(t.JWPLAYER_VIEW_TAB_FOCUS, {
                            hasFocus: !0
                        }), Ye || oe()
                    }

                    function B() {
                        Ue = !1, We.trigger(t.JWPLAYER_VIEW_TAB_FOCUS, {
                            hasFocus: !1
                        })
                    }

                    function M() {
                        var e = m(pe),
                            n = Math.round(e.width),
                            i = Math.round(e.height);
                        return document.body.contains(pe) ? n && i && (n !== me || i !== je) && (me = n, je = i, clearTimeout(Oe), Oe = setTimeout(q, 50), We.trigger(t.JWPLAYER_RESIZE, {
                            width: n,
                            height: i
                        })) : (window.removeEventListener("resize", M), j && window.removeEventListener("orientationchange", M)), e
                    }

                    function P(t, n, i) {
                        i && e.removeClass(pe, "jw-stretch-" + i), e.addClass(pe, "jw-stretch-" + n)
                    }

                    function D(e) {
                        e && !j && (e.element().addEventListener("mousemove", S, !1), e.element().addEventListener("mouseout", F, !1))
                    }

                    function T() {
                        E.get("state") !== i.IDLE && E.get("state") !== i.COMPLETE || !E.get("controls") || k.play(), Ne ? ie() : oe()
                    }

                    function _(e) {
                        e.link ? (k.pause(!0), k.setFullscreen(!1), window.open(e.link, e.linktarget)) : k.play()
                    }

                    function S() {
                        clearTimeout(Se)
                    }

                    function F() {
                        oe()
                    }

                    function Y(e) {
                        We.trigger(e.type, e)
                    }

                    function Q() {
                        E.get("controls") && k.setFullscreen()
                    }

                    function N() {
                        Ve(), E.on("change:controls", Ve), Ee = new s(E, ge), Ee.on("click", function() {
                            Y({
                                type: t.JWPLAYER_DISPLAY_CLICK
                            }), E.get("controls") && k.play()
                        }), Ee.on("tap", function() {
                            Y({
                                type: t.JWPLAYER_DISPLAY_CLICK
                            }), T()
                        }), Ee.on("doubleClick", Q);
                        var n = new a(E);
                        n.on("click", function() {
                            Y({
                                type: t.JWPLAYER_DISPLAY_CLICK
                            }), k.play()
                        }), n.on("tap", function() {
                            Y({
                                type: t.JWPLAYER_DISPLAY_CLICK
                            }), T()
                        }), fe.appendChild(n.element()), Ce = new l(E), xe = new c(E), xe.on(t.JWPLAYER_LOGO_CLICK, _);
                        var i = document.createElement("div");
                        i.className = "jw-controls-right jw-reset", E.get("config").logo && i.appendChild(xe.element()), i.appendChild(Ce.element()), fe.appendChild(i), Re = new r(E), Re.setup(E.get("config").captions), fe.parentNode.insertBefore(Re.element(), Le.element()), j ? e.addClass(pe, "jw-flag-touch-screen") : (Me = new A, Me.setup(E, pe, pe)), be = new u(k, E), be.on(t.JWPLAYER_USER_ACTION, oe), E.on("change:scrubbing", U), fe.appendChild(be.element()), E.get("castAvailable") && We.forceControls(!0), pe.onfocusin = I, pe.onfocusout = B, pe.addEventListener("focus", I), pe.addEventListener("blur", B), pe.addEventListener("keydown", L), pe.onmousedown = R
                    }

                    function O(t, n) {
                        e.toggleClass(fe, "jw-hidden", n), n && le(t, t.get("state"))
                    }

                    function J(t) {
                        return t.get("state") === i.PAUSED ? void t.once("change:state", J) : void(t.get("scrubbing") === !1 && e.removeClass(pe, "jw-flag-dragging"))
                    }

                    function U(t, n) {
                        t.off("change:state", J), n ? e.addClass(pe, "jw-flag-dragging") : J(t)
                    }

                    function W(e) {
                        if (e.done) return void G();
                        if (!e.complete) {
                            Ye || z(), this.setAltText(e.message);
                            var t = e.onClick;
                            void 0 !== t && Ee.setAlternateClickHandlers(function() {
                                t(e)
                            }, k.setFullscreen);
                            var n = e.onSkipAd;
                            void 0 !== n && ye && ye.setSkipoffset(e, e.onSkipAd)
                        }
                        ye && ye.adChanged(e)
                    }

                    function z() {
                        e.addClass(pe, "jw-flag-ads")
                    }

                    function G() {
                        this.setAltText(""), e.removeClass(pe, "jw-flag-ads"), ye && (ye.adsEnded(), ye.setState(E.get("state"))), Ee.revertAlternateClickHandlers()
                    }

                    function V(t, n, i) {
                        var o, r = pe.className,
                            s = E.get("id") + "_view";
                        w.block(s), i = !!i, i && (r = r.replace(/\s*aspectMode/, ""), pe.className !== r && (pe.className = r), w.style(pe, {
                            display: "block"
                        }, i)), e.exists(t) && e.exists(n) && (E.set("width", t), E.set("height", n)), o = {
                            width: t
                        }, e.hasClass(pe, "jw-flag-aspect-mode") || (o.height = n), h(pe, o, !0), xe && xe.offset(be && xe.position().indexOf("bottom") >= 0 ? be.element().clientHeight : 0), H(n), q(t, n), w.unblock(s)
                    }

                    function H(t) {
                        if (Ie = K(t), be && !Ie) {
                            var n = Ye ? ve : E;
                            Ae(n.get("state"))
                        }
                        e.toggleClass(pe, "jw-flag-audio-player", Ie)
                    }

                    function K(e) {
                        return E.get("aspectratio") ? !1 : f.isNumber(e) ? X(e) : f.isString(e) && e.indexOf("%") > -1 ? !1 : X(m(we).height)
                    }

                    function X(e) {
                        return e && 40 >= e
                    }

                    function q(t, n) {
                        if (!t || isNaN(Number(t))) {
                            if (!ge) return;
                            t = ge.clientWidth
                        }
                        if (!n || isNaN(Number(n))) {
                            if (!ge) return;
                            n = ge.clientHeight
                        }
                        e.isMSIE(9) && document.all && !window.atob && (t = n = "100%");
                        var i = E.getVideo();
                        if (i) {
                            var o = i.resize(t, n, E.get("stretching"));
                            o && (clearTimeout(Oe), Oe = setTimeout(q, 250)), Re.resize()
                        }
                    }

                    function Z() {
                        if (Je) {
                            var e = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                            return !(!e || e.id !== E.get("id"))
                        }
                        return Ye ? ve.getVideo().getFullScreen() : E.getVideo().getFullScreen()
                    }

                    function $(e) {
                        var t = void 0 !== e.jwstate ? e.jwstate : Z();
                        Je ? ee(pe, t) : te(t)
                    }

                    function ee(t, n) {
                        e.removeClass(t, "jw-flag-fullscreen"), n ? (e.addClass(t, "jw-flag-fullscreen"), h(document.body, {
                            "overflow-y": "hidden"
                        }), oe()) : h(document.body, {
                            "overflow-y": ""
                        }), q(), te(n)
                    }

                    function te(e) {
                        E.setFullscreen(e), ve && ve.setFullscreen(e);
                        var t = Ye ? ve : E;
                        e ? (clearTimeout(Oe), Oe = setTimeout(q, 200)) : v && t.get("state") === i.PAUSED && setTimeout(ne, 500)
                    }

                    function ne() {
                        j && E.get("fullscreen") || E.getVideo().setControls(!1)
                    }

                    function ie() {
                        Ne = !1, clearTimeout(Se), e.addClass(pe, "jw-flag-user-inactive")
                    }

                    function oe() {
                        Ne = !0, e.removeClass(pe, "jw-flag-user-inactive"), clearTimeout(Se), Se = setTimeout(ie, Fe)
                    }

                    function re() {
                        Be = !0, He(!1), E.get("controls")
                    }

                    function se() {
                        ye && ye.setState(E.get("state"));
                        var t = ue();
                        e.toggleClass(pe, "jw-flag-media-audio", t), E.on("change:duration", ae, this)
                    }

                    function ae(t, n) {
                        var i = "LIVE" === e.adaptiveType(n);
                        e.toggleClass(pe, "jw-flag-live", i), We.setAltText(i ? "Live Broadcast" : "")
                    }

                    function le(e, t) {
                        Be = !1, Ae(t)
                    }

                    function ce(e) {
                        le(E, i.ERROR), Le.updateText(E, {
                            title: e.message
                        })
                    }

                    function ue() {
                        var e = Ye ? ve : E,
                            t = e.getVideo();
                        return t ? t.isAudioFile() : !1
                    }

                    function de() {
                        var e = E.getVideo();
                        return e ? e.isCaster : !1
                    }

                    function Ae(t) {
                        if (e.removeClass(pe, "jw-state-" + Pe), e.addClass(pe, "jw-state-" + t), Pe = t, de()) return void e.addClass(ge, "jw-media-show");
                        switch (t) {
                            case i.PLAYING:
                                q();
                                break;
                            case i.IDLE:
                            case i.ERROR:
                            case i.COMPLETE:
                                Ie || ne();
                                break;
                            case i.BUFFERING:
                                ne();
                                break;
                            case i.PAUSED:
                                oe(), ne()
                        }
                    }
                    var pe, we, fe, ge, he, me, je, ve, be, ke, Ee, ye, Ce, xe, Le, Re, Ie, Be, Me, Pe, De, Te, _e, Se = -1,
                        Fe = j ? 4e3 : 2e3,
                        Ye = !1,
                        Qe = !1,
                        Ne = !1,
                        Oe = -1,
                        Je = !1,
                        Ue = !1,
                        We = f.extend(this, n);
                    pe = e.createElement(g({
                        id: E.get("id")
                    }));
                    var ze = E.get("width"),
                        Ge = E.get("height");
                    h(pe, {
                        width: ze.toString().indexOf("%") > 0 ? ze : ze + "px",
                        height: Ge.toString().indexOf("%") > 0 ? Ge : Ge + "px"
                    }), Te = pe.requestFullscreen || pe.webkitRequestFullscreen || pe.webkitRequestFullScreen || pe.mozRequestFullScreen || pe.msRequestFullscreen, _e = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, Je = Te && _e, this.onChangeSkin = function(t, n, i) {
                        i && e.removeClass(pe, "jw-skin-" + i), n && e.addClass(pe, "jw-skin-" + n)
                    }, this.handleColorOverrides = function() {
                        function t(t, i, o) {
                            if (o) {
                                i = e.prefix(i, "#" + n + " ");
                                var r = {};
                                r[t] = o, w.css(i.join(", "), r)
                            }
                        }
                        var n = E.get("id");
                        t("color", [".jw-button-color"], E.get("skinColorInactive")), t("color", [".jw-button-color:hover"], E.get("skinColorActive")), t("color", [".jw-option"], E.get("skinColorInactive")), t("background-color", [".jw-active-option"], E.get("skinColorActive")), t("color", [".jw-toggle"], E.get("skinColorActive")), t("color", [".jw-toggle.jw-off"], E.get("skinColorInactive")), t("background", [".jw-progress"], E.get("skinColorActive")), t("background", [".jw-cue", ".jw-knob"], E.get("skinColorInactive")), t("background", [".jw-background-color"], E.get("skinColorBackground"))
                    }, this.setup = function() {
                        if (!Qe) {
                            this.handleColorOverrides(), E.get("skin-loading") === !0 && (e.addClass(pe, "jw-flag-skin-loading"), E.once("change:skin-loading", function() {
                                e.removeClass(pe, "jw-flag-skin-loading")
                            })), this.onChangeSkin(E, E.get("skin"), ""), E.on("change:skin", this.onChangeSkin, this), we = pe, ge = pe.getElementsByClassName("jw-media")[0], fe = pe.getElementsByClassName("jw-controls")[0], he = pe.getElementsByClassName("jw-aspect")[0];
                            var n = pe.getElementsByClassName("jw-preview")[0];
                            if (ke = new d(E), ke.setup(n), !E.get("hidetitle")) {
                                var r = pe.getElementsByClassName("jw-title")[0];
                                Le = new p(E), Le.setup(r)
                            }
                            N(), E.getVideo().setContainer(ge), E.mediaController.on("fullscreenchange", $);
                            for (var s = b.length; s--;) document.addEventListener(b[s], $, !1);
                            window.removeEventListener("resize", M), window.addEventListener("resize", M, !1), j && (window.removeEventListener("orientationchange", M), window.addEventListener("orientationchange", M, !1)), E.on("change:controls", O), E.on("change:state", le), E.mediaController.on(t.JWPLAYER_MEDIA_ERROR, ce), k.onPlaylistComplete(re), k.onPlaylistItem(se), E.on("change:castAvailable", function(t, n) {
                                e.toggleClass(fe, "jw-cast-available", n)
                            }), E.get("stretching") && P(E, E.get("stretching")), E.on("change:stretching", P), E.on("change:castState", function(e) {
                                ye || (ye = new o(E.get("id")), ye.statusDelegate = function(e, t) {
                                    ye.setState(t)
                                }), e.active ? (ye.setState("connecting").setName(e.deviceName).show(), E.on("change:state", ye.statusDelegate), E.mediaController.on(t.JWPLAYER_CAST_AD_CHANGED, W)) : (E.off("change:state", ye.statusDelegate), E.mediaController.off(t.JWPLAYER_CAST_AD_CHANGED, W), ye.hide(), Ye || G(), le(null, E.get("state")), M())
                            }), le(null, i.IDLE), j || (Ee.element().addEventListener("mouseout", oe, !1), Ee.element().addEventListener("mousemove", oe, !1)), D(be), D(xe), E.get("aspectratio") && (e.addClass(pe, "jw-flag-aspect-mode"), e.style(he, {
                                "padding-top": E.get("aspectratio")
                            })), setTimeout(function() {
                                V(E.get("width"), E.get("height"))
                            }, 0)
                        }
                    };
                    var Ve = function() {
                            E.get("controls") ? e.removeClass(fe, "jw-controls-disabled") : e.addClass(fe, "jw-controls-disabled")
                        },
                        He = this.fullscreen = function(t) {
                            if (e.exists(t) || (t = !E.get("fullscreen")), t = !!t, t !== E.get("fullscreen")) {
                                var n = E.getVideo();
                                Je ? (t ? Te.apply(pe) : _e.apply(document), ee(pe, t)) : e.isIE() ? ee(pe, t) : (ve && ve.getVideo() && ve.getVideo().setFullscreen(t), n.setFullscreen(t)), n && 0 === n.getName().name.indexOf("flash") && n.setFullscreen(t)
                            }
                        };
                    this.resize = function(e, t) {
                        var n = !0;
                        V(e, t, n), M()
                    }, this.resizeMedia = q, this.reset = function() {
                        document.contains(pe) && pe.parentNode.replaceChild(De, pe), e.emptyElement(pe)
                    }, this.setupInstream = function(t) {
                        ve = t, ve.on("change:controls", O, this), ve.on("change:state", le, this), Ye = !0, e.addClass(pe, "jw-flag-ads"), oe()
                    }, this.setAltText = function(e) {
                        be.setAltText(e)
                    }, this.useExternalControls = function() {
                        e.addClass(pe, "jw-flag-ads-hide-controls")
                    }, this.destroyInstream = function() {
                        if (Ye = !1, ve && (ve.off(null, null, this), ve = null), this.setAltText(""), e.removeClass(pe, "jw-flag-ads"), e.removeClass(pe, "jw-flag-ads-hide-controls"), E.getVideo) {
                            var t = E.getVideo();
                            t.setContainer(ge)
                        }
                        ae(E, E.get("duration")), Ee.revertAlternateClickHandlers()
                    }, this.addCues = function(e) {
                        be && be.addCues(e)
                    }, this.clickHandler = function() {
                        return Ee
                    }, this.controlsContainer = function() {
                        return fe
                    }, this.getContainer = this.element = function() {
                        return pe
                    }, this.getSafeRegion = function(t) {
                        var n = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        t = t || !e.exists(t);
                        var i, o = m(we),
                            r = o.top,
                            s = be.getVisibleBounds(),
                            a = E.get("dock");
                        if (a && a.length && E.get("controls") && (i = m(Ce.element()), n.y = Math.max(0, i.bottom - r)), n.width = o.width, s.height && t && E.get("controls")) {
                            var l = s.top;
                            n.height = l - r - n.y
                        } else n.height = o.height - n.y;
                        return n
                    }, this.destroy = function() {
                        window.removeEventListener("resize", M), window.removeEventListener("orientationchange", M);
                        for (var e = b.length; e--;) document.removeEventListener(b[e], $, !1);
                        E.mediaController && E.mediaController.off("fullscreenchange", $), pe.removeEventListener("keydown", L, !1), Me && Me.destroy(), ye && (E.off("change:state", ye.statusDelegate), ye.destroy(), ye = null), fe && (Ee.element().removeEventListener("mousemove", oe), Ee.element().removeEventListener("mouseout", oe)), Ye && this.destroyInstream()
                    }
                };
            return k
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(110), n(48), n(64), n(45), n(67), n(121)], o = function(e, t, n, i, o, r) {
            var s = t.style,
                a = {
                    linktarget: "_blank",
                    margin: 8,
                    hide: !1,
                    position: "top-right"
                },
                l = function(l) {
                    function c() {
                        p = i.extend({}, a, f), p.hide = "true" === p.hide.toString(), u()
                    }

                    function u() {
                        if (A = t.createElement(r({
                                file: p.file
                            })), p.file) {
                            if (p.hide && t.addClass(A, "jw-hide"), p.position !== a.position || p.margin !== a.margin) {
                                var n = /(\w+)-(\w+)/.exec(p.position),
                                    i = {
                                        top: "auto",
                                        right: "auto",
                                        bottom: "auto",
                                        left: "auto"
                                    };
                                3 === n.length && (i[n[1]] = p.margin, i[n[2]] = p.margin, s(A, i))
                            }
                            var o = new e(A);
                            o.on("click tap", d)
                        }
                    }

                    function d(e) {
                        t.exists(e) && e.stopPropagation && e.stopPropagation(), w.trigger(n.JWPLAYER_LOGO_CLICK, {
                            link: p.link,
                            linktarget: p.linktarget
                        })
                    }
                    var A, p, w = this,
                        f = i.extend({}, l.get("config").logo);
                    return i.extend(this, o), this.element = function() {
                        return A
                    }, this.offset = function(e) {
                        s(A, {
                            "margin-bottom": e
                        })
                    }, this.position = function() {
                        return p.position
                    }, this.margin = function() {
                        return parseInt(p.margin, 10)
                    }, c(), this
                };
            return l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i) {
                var o, r = "function",
                    s = t.helperMissing,
                    a = this.escapeExpression;
                return 'src="' + a((o = null != (o = t.file || (null != e ? e.file : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "file",
                    hash: {},
                    data: i
                }) : o)) + '"'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = '<div class="jw-logo jw-reset">\n    <img class="jw-logo-image" ';
                return o = t["if"].call(e, null != e ? e.file : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (r += o), r + ">\n</div>"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(64), n(65), n(109), n(45), n(62)], o = function(e, t, n, i, o, r) {
            function s(e) {
                var t, n, i, o = Number.MAX_VALUE,
                    r = null;
                for (n = e.length; n--;)
                    if (t = e[n], t.width && t.height && t.source) switch (t.type) {
                        case "html":
                        case "iframe":
                        case "application/x-shockwave-flash":
                            break;
                        default:
                            i = Math.abs(t.width / t.height - f), o > i && (o = i, .75 > i && (r = t))
                    }
                    return r
            }

            function a(e) {
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA" + p[e]
            }

            function l() {
                var e = '"Karbon", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';
                A(".jwplayer .jwcast-display", {
                    display: "none",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    "background-repeat": "no-repeat",
                    "background-size": "auto",
                    "background-position": "50% 50%",
                    "background-image": a("display")
                }), A(".jwplayer .jwcast-label", {
                    position: "absolute",
                    left: 10,
                    right: 10,
                    bottom: "50%",
                    "margin-bottom": 100,
                    "text-align": "center"
                }), A(".jwplayer .jwcast-label span", {
                    "font-family": e,
                    "font-size": 20,
                    "font-weight": 300,
                    color: "#7a7a7a"
                }), A(".jwplayer span.jwcast-name", {
                    color: "#ccc"
                }), A(".jwcast-button", {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    "background-repeat": "no-repeat",
                    "background-size": "auto",
                    "background-position": "50% 50%"
                }), A(".jwcast-wheel", {
                    "background-image": a("wheel")
                }), A(".jwcast-pause", {
                    "background-image": a("pause")
                }), A(".jwcast-play", {
                    "background-image": a("play")
                }), A(".jwcast-replay", {
                    "background-image": a("replay")
                }), A(".jwcast-paused .jwcast-play", {
                    opacity: 1
                }), A(".jwcast-playing .jwcast-pause", {
                    opacity: 1
                }), A(".jwcast-idle .jwcast-replay", {
                    opacity: 1
                }), r.cssKeyframes("spin", "from {transform: rotate(0deg);} to {transform: rotate(360deg);}"), A(".jwcast-connecting .jwcast-wheel, .jwcast-buffering .jwcast-wheel", {
                    opacity: 1,
                    "-webkit-animation": "spin 1.5s linear infinite",
                    animation: "spin 1.5s linear infinite"
                }), A(".jwcast-companion", {
                    position: "absolute",
                    "background-position": "50% 50%",
                    "background-size": "316px 176px",
                    "background-repeat": "no-repeat",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 4
                }), A(".jwplayer .jwcast-click-label", {
                    "font-family": e,
                    "font-size": 14,
                    "font-weight": 300,
                    "text-align": "center",
                    position: "absolute",
                    left: 10,
                    right: 10,
                    top: "50%",
                    color: "#ccc",
                    "margin-top": 100,
                    "-webkit-user-select": "none",
                    "user-select": "none",
                    cursor: "pointer"
                }), A(".jwcast-paused .jwcast-click-label", {
                    color: "#7a7a7a",
                    cursor: "default"
                })
            }

            function c(e, t) {
                var n = document.createElement(e);
                return t && u(n, t), n
            }

            function u(e, t) {
                o.isArray(t) || (t = [t]), t = o.map(t, function(e) {
                    return e ? "jw-cast-" + e.toLowerCase() : ""
                }), t.push("jw-reset"), e.className = t.join(" ")
            }

            function d(e, t) {
                t.join || (t = [t]);
                for (var n = 0; n < t.length; n++) e.appendChild(t[n])
            }
            var A = r.css,
                p = {
                    wheel: "DgAAAA4CAYAAACohjseAAACiUlEQVR42u3aP2sTYRzAcZ87Md6mhE5GhRqli0NC22yNKO1iaStSY+ggdKggal6BDXRoUuwbEG1LpE4B30LAxEGbKYgO7SVoUhJD04hOusRv4ZlCwP5LevfDgw9kCnzD5Z4/95xqtVqideNLTQzjKV4gCxtNtNwaqBBGCg3UkcYz3EUIV+F1W6AHj7CFb1hAEIbbb1GFByjjAyZgSvkPXkMGW7gt7SETwQ8swpL0FFV4jjpuShsmTiOFz7gobRxUWEceXokDfQKf0CdxJhNFFT6JU7Ur2MUtiXNRhXdYlDrZnkERZyUGerCNcanLpYfISV0PGtjEpNTAGyjBkBq4ggWpWxYmGghIDRzEDgypgTG8lbyrtoZ5yYFZ3JccWMKg5MCfGJAcuHf5/ge6xwX8lnyLDmCn/SEzJChwCKX2YSIqKDCKbPtAHxcUGAdNOhBPkBYUmAZNOhDXUYMSEKdQBU06EAp1BAUEBnWLgg4EXmJJQOASXnVa0YdRcfma0NAN4U6BCpu44+LASd2g0BYIPEbexYHvdQOfOwdaqLh063AcFVj73bq3XBRnoYiZ/b58ySDposAkMlD/DNT8aGLUBXGjaMJ/0Beg9/Dd4etEH2qIHOUVdgHnHRh3DgUkjnoIIYUNh0V6sYHXUIcO1Eyso4BLDoi7jC94A/O4DgIZWEYdYycYN4YalmF04yjXNJpIwOrxOJdAE9PdPoznRxZFTPUgbgI2svD38jjlLMrI61DjmFcFU/iICmZhnMSB2DOYg41tJBGAOuSPFkASZdiYg8cpR5pHsIIGqkgjjghC6Eef1o8QIphHGlU0sIYRGE4/lB7DKnL4il/Yu/5gFzZyWEUMwzC7sXUv2l9q1CPRZSGkLwAAAABJRU5ErkJggg==",
                    display: "UAAAAC4AQMAAACo6KcpAAAABlBMVEV6enp6enqEWMsmAAAAAXRSTlMAQObYZgAAAEdJREFUeF7t2bEJACAMRcGAg7j/Fo6VTkvbIKSRe/XBH+DHLlaHK0qN7yAIgiAIgiAIgiAIgiAIgiAIgiAIgg0PZHfzbuUjPCPnO5qQcE/AAAAAAElFTkSuQmCC",
                    pause: "CoAAAA2CAQAAAAb3sMwAAAAMElEQVR4Ae3MMQEAMAzDsIY/6AxB9/aRfyvt7GX2Ph8UCoVCoVAo9AiFQqFQKBQKfdYvoctOjDeGAAAAAElFTkSuQmCC",
                    play: "DYAAAA2BAMAAAB+a3fuAAAAFVBMVEX///////////////////////////9nSIHRAAAABnRSTlMAP79AwMFfxd6iAAAAX0lEQVR4Xn3JQQGAABAEoaliFiPYYftHMMHBl55uQw455JBDDjnkkEMOOeSQQw455JBDDjnkkEMOOeSQQ+5O3HffW6hQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKgfWHsiYI6VycIAAAAASUVORK5CYII=",
                    replay: "DQAAAA8CAYAAAApK5mGAAADkklEQVRoBd3BW2iVBRwA8P/cWHMsv9QilLCITLCU0khpST6JCEXrQbKMCgrKFwsfZq/LMnRRIdkFvBQUvmShgg9iV02zB7FScyWlqNHNqbCJ7PKLkFHp952dnZ3tfOv3ixgGSLAVt8b/ARIX9WADJsVIhsR/daIV42MkQiJdO5ZjdIwkSBR2Ek+gJkYCJIpzEE2Rd0gMzB7MibxCojRbcEtUGsZgJu7HYixVuh6sx6QYLrgSD+Fd/GhodKIV42Ko4B68h07Dpx3NGB3lgnnYpbJOYFoMBm7ANpW3D3NjMPAgzqqsn7EIVVEqVGOtymrHMtTGYKAeWxSvB3vxIh7ANIzFNUpzAa0YF4OFWuxUnFNYjkmRAomB6cX7uDHKAdX4QP/asRRXRAFIFO8TzI5yQov+bcO1UQQk+ncITVFumIce2XqxHFVRJCSy/YolqIlyQwOOy9aNR2KAkLhcJ1agIYYKVsvWi6eiBEj8owfrMDEGAVVYiMcjDa7HBdlejhIhcdF2TI9BQiP2uOgsro5LYa1sX6M2SoQ6zItBwmRsdrnn498wDuel68aMqDBMQZd0v6Mu+mCJbBsiJ7BdtkXRB7ul68HNkRNolO3D+BvGoke6HZEz+Fa6c6gJNMn2WOQMmmW7K/CSbBMiZ3CbbM8EPpKuLXIIo3BWujcCh6TbEjmFr6TbGfhDulcip7BJugOBbulaIqfwlnRHQ7bnIqewVrpjgU7pVkZOYaN0hwOnpFsfOYWt0u0LfCnd55FT+EG6zYEN0p1BdeQMEnRLtzKwTLZZkTO4V7bFgTtka4mcwTrZrgtU47R0P6E6cgINOCfdkeiDjbItipzAs7K1Rh/Mle0gaqLC0IBTsk2PPhiFI7ItiwrDKtl2xaXwqGwdmBoVgrvRJdv8uBRq0CbbISQxzDARJ2TbG1kwX2GfoT6GCa7CN7J1Y0YUgk0K+wJjY4hhAg4o7LXoD8bjuMIOY1oMETTiuMIOoj6KgTvRobDzaEZtlAnq8QK6FHYGU2IgcB+69e97LEJNlAh1eBrH9K8DjVEKPIxuxTmJVZiFmugHajEHa/Cb4nRiQQwGmtBpYM7hU7yNFjSjGSuwDrvRYWD+RGOUA25Hm8rZj8lRThiDd9Br+PTgVdTFUMFcfGfo7cHMGA4YhYXYr/x2YQGqohIwG2vwi9Idw2pMjzzBVCzBm/gYR3EaXbiA02jDDryOJ3FTlNFfAO8ENqnn13UAAAAASUVORK5CYII="
                },
                w = !1,
                f = 316 / 176,
                g = function(o) {
                    function a() {
                        if (M) {
                            var e = M.element();
                            e.parentNode && e.parentNode.removeChild(e), M.resetEventListeners(), M = null
                        }
                    }

                    function p() {
                        null === D && (D = c("div", "click-label"), D.innerText = "Click here to learn more >", d(v, D))
                    }

                    function g() {
                        D && (D.parentNode && D.parentNode.removeChild(D), D = null)
                    }

                    function h(e) {
                        null === P && (P = c("div", "companion"), d(v, P));
                        var t, n;
                        e.width / e.height > f ? (t = 316, n = e.height * t / e.width) : (n = 176, t = e.width * n / e.height), r.style(P, {
                            "background-image": e.source,
                            "background-size": t + "px " + n + "px"
                        })
                    }

                    function m() {
                        P && (P.parentNode && P.parentNode.removeChild(P), P = null)
                    }
                    w || (l(), w = !0);
                    var j = document.getElementById(o + "_display_button"),
                        v = c("div", "display"),
                        b = c("div", ["pause", "button"]),
                        k = c("div", ["play", "button"]),
                        E = c("div", ["replay", "button"]),
                        y = c("div", ["wheel", "button"]),
                        C = c("div", "label"),
                        x = c("span"),
                        L = c("span", "name"),
                        R = "#" + o + "_display.jwdisplay",
                        I = -1,
                        B = null,
                        M = null,
                        P = null,
                        D = null;
                    d(v, [y, b, k, E, C]), d(C, [x, L]), j.parentNode.insertBefore(v, j), this.statusDelegate = null, this.setName = function(e) {
                        return L.innerText = e || "Google Cast", this
                    }, this.setState = function(e) {
                        var t = "Casting to ";
                        if (null === B)
                            if ("connecting" === e) t = "Loading on ";
                            else if (e !== n.IDLE) {
                            var i = window.jwplayer(o).getPlaylistItem().title || "";
                            i && (t = t.replace("to", i + " to"))
                        }
                        return x.innerText = t, clearTimeout(I), e === n.IDLE && (I = setTimeout(function() {
                            u(v, ["display", "idle"])
                        }, 3e3), e = ""), u(v, ["display", e || ""]), this
                    }, this.show = function() {
                        return A(R + " .jwpreview", {
                            "background-size": "316px 176px !important",
                            opacity: .6,
                            "margin-top": -2
                        }), A(R + " .jwdisplayIcon", {
                            display: "none !important"
                        }), r.style(v, {
                            display: "block"
                        }), this
                    }, this.hide = function() {
                        return r.clearCss(R + " .jwpreview"), A(R + " .jwdisplayIcon", {
                            display: ""
                        }), r.style(v, {
                            display: "none"
                        }), this
                    }, this.setSkipoffset = function(n, r) {
                        if (null === M) {
                            var s = document.getElementById(o + "_controlbar"),
                                a = 10 + e.bounds(v).bottom - e.bounds(s).top;
                            M = new i(o, 0 | a, n.skipMessage, n.skipText), M.on(t.JWPLAYER_AD_SKIPPED, function() {
                                r(n)
                            }), M.reset(n.skipoffset || -1), M.show(), s.parentNode.insertBefore(M.element(), s)
                        } else M.reset(n.skipoffset || -1)
                    }, this.setCompanions = function(e) {
                        var t = s(e);
                        t ? h(t) : m()
                    }, this.adChanged = function(e) {
                        if (e.complete) return M && M.reset(-1), void(B = null);
                        M && (void 0 === e.skipoffset ? a() : (e.position || e.duration) && M.updateSkipTime(0 | e.position, 0 | e.duration));
                        var t = e.tag + e.sequence;
                        t !== B && (A(R + " .jwpreview", {
                            opacity: 0
                        }), e.companions ? this.setCompanions(e.companions) : m(), e.clickthrough ? p() : g(), B = t, this.setState(e.newstate))
                    }, this.adsEnded = function() {
                        a(), m(), g(), A(R + " .jwpreview", {
                            opacity: .6
                        }), B = null
                    }, this.destroy = function() {
                        this.hide(), v.parentNode && v.parentNode.removeChild(v)
                    }
                };
            return g
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(62), n(65), n(45)], o = function(e, t, n, i) {
            var o = t.style,
                r = {
                    back: !0,
                    fontSize: 15,
                    fontFamily: "Arial,sans-serif",
                    fontOpacity: 100,
                    backgroundColor: "#000",
                    backgroundOpacity: 100,
                    edgeStyle: null,
                    windowColor: "#FFF",
                    windowOpacity: 0
                },
                s = function(s) {
                    function a(t) {
                        t = t || "";
                        var n = "jw-captions-window jw-reset";
                        t ? (f.innerHTML = t, w.className = n + " jw-captions-window-active") : (w.className = n, e.empty(f))
                    }

                    function l(e) {
                        if (e) {
                            var t = -1;
                            if (!(A >= 0 && c(e, h, A))) {
                                for (var n = 0; n < e.length; n++)
                                    if (c(e, h, n)) {
                                        t = n;
                                        break
                                    } - 1 === t ? a("") : t !== A && (A = t, a(e[A].text))
                            }
                        }
                    }

                    function c(e, t, n) {
                        return e[n].begin <= t && (!e[n].end || e[n].end >= t) && (n === e.length - 1 || e[n + 1].begin >= t)
                    }

                    function u(e, n, i) {
                        var o = t.hexToRgba("#000000", i);
                        "dropshadow" === e ? n.textShadow = "0 2px 1px " + o : "raised" === e ? n.textShadow = "0 0 5px " + o + ", 0 1px 5px " + o + ", 0 2px 5px " + o : "depressed" === e ? n.textShadow = "0 -2px 1px " + o : "uniform" === e && (n.textShadow = "-2px 0 1px " + o + ",2px 0 1px " + o + ",0 -2px 1px " + o + ",0 2px 1px " + o + ",-1px 1px 1px " + o + ",1px 1px 1px " + o + ",1px -1px 1px " + o + ",1px 1px 1px " + o)
                    }
                    var d, A, p, w, f, g = {},
                        h = 0;
                    p = document.createElement("div"), p.className = "jw-captions jw-reset", this.show = function() {
                        p.className = "jw-captions jw-captions-enabled jw-reset"
                    }, this.hide = function() {
                        p.className = "jw-captions jw-reset"
                    }, this.populate = function(e) {
                        return A = -1, d = e, e ? void l(e.data) : void a("")
                    }, this.resize = function() {
                        var e = p.clientWidth,
                            t = Math.pow(e / 400, .6);
                        if (t) {
                            var n = g.fontSize * t;
                            o(p, {
                                fontSize: Math.round(n) + "px"
                            })
                        }
                    }, this.setup = function(e) {
                        g = i.extend({}, r, e);
                        var n = g.fontOpacity,
                            a = g.windowOpacity,
                            l = g.edgeStyle,
                            c = g.backgroundColor,
                            d = {},
                            A = {
                                color: t.hexToRgba(t.rgbHex(g.color), n),
                                fontFamily: g.fontFamily,
                                fontStyle: g.fontStyle,
                                fontWeight: g.fontWeight,
                                textDecoration: g.textDecoration
                            };
                        a && (d.backgroundColor = t.hexToRgba(t.rgbHex(g.windowColor), a)), u(l, A, n), g.back ? A.backgroundColor = t.hexToRgba(t.rgbHex(c), g.backgroundOpacity) : null === l && u("uniform", A), w = document.createElement("div"), f = document.createElement("span"), w.className = "jw-captions-window jw-reset", f.className = "jw-captions-text jw-reset", o(w, d), o(f, A), w.appendChild(f), p.appendChild(w), this.populate(s.get("captionsTrack"))
                    }, this.update = function(e) {
                        h = e, d && l(d.data)
                    }, this.element = function() {
                        return p
                    }, s.on("change:captionsTrack", function(e, t) {
                        this.populate(t)
                    }, this), s.on("change:position", function(e, t) {
                        this.update(t)
                    }, this), s.mediaController.on("seek", function(e) {
                        this.update(e.position)
                    }, this), s.mediaController.on("subtitlesTrackData", function() {
                        d && l(d.data)
                    }, this), s.on("change:state", function(e, t) {
                        switch (t) {
                            case n.IDLE:
                            case n.ERROR:
                            case n.COMPLETE:
                                this.hide();
                                break;
                            default:
                                this.show()
                        }
                    }, this)
                };
            return s
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(110), n(64), n(67), n(45)], o = function(e, t, n, i) {
            var o = function(o, r) {
                function s(e) {
                    return c ? void c(e) : void A.trigger(e.type === t.touchEvents.CLICK ? "click" : "tap")
                }

                function a() {
                    return u ? void u() : void A.trigger("doubleClick")
                }
                var l, c, u;
                i.extend(this, n), l = r, this.element = function() {
                    return l
                };
                var d = new e(l, {
                    enableDoubleTap: !0
                });
                d.on("click tap", s), d.on("doubleClick doubleTap", a), this.clickHandler = s;
                var A = this;
                this.setAlternateClickHandlers = function(e, t) {
                    c = e, u = t || null
                }, this.revertAlternateClickHandlers = function() {
                    c = null, u = null
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(67), n(110), n(126), n(45)], o = function(e, t, n, i, o) {
            var r = function(r) {
                o.extend(this, t), this.model = r, this.el = e.createElement(i({}));
                var s = this;
                this.iconUI = new n(this.el).on("click tap", function(e) {
                    s.trigger(e.type)
                })
            };
            return o.extend(r.prototype, {
                element: function() {
                    return this.el
                }
            }), r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                return '<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>\n</div>\n'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(128), n(48), n(45), n(110)], o = function(e, t, n, i) {
            var o = function(e) {
                this.model = e, this.setup(), this.model.on("change:dock", this.render, this)
            };
            return n.extend(o.prototype, {
                setup: function() {
                    var n = this.model.get("dock"),
                        o = this.click.bind(this),
                        r = e(n);
                    this.el = t.createElement(r), new i(this.el).on("click tap", o)
                },
                getDockButton: function(e) {
                    return t.hasClass(e.target, "jw-dock-button") ? e.target : t.hasClass(e.target, "jw-dock-text") ? e.target.parentElement.parentElement : e.target.parentElement
                },
                click: function(e) {
                    var t = this.getDockButton(e),
                        i = t.getAttribute("button"),
                        o = this.model.get("dock"),
                        r = n.findWhere(o, {
                            id: i
                        });
                    r && r.callback && r.callback()
                },
                render: function() {
                    var n = this.model.get("dock"),
                        i = e(n),
                        o = t.createElement(i);
                    this.el.innerHTML = o.innerHTML
                },
                element: function() {
                    return this.el
                }
            }), o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i) {
                var o, r, s = "function",
                    a = t.helperMissing,
                    l = this.escapeExpression,
                    c = '    <div class="jw-dock-button jw-background-color jw-reset" button="' + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                        name: "id",
                        hash: {},
                        data: i
                    }) : r)) + '">\n        <div class="jw-icon jw-dock-image jw-reset" style="background-image: url(' + l((r = null != (r = t.img || (null != e ? e.img : e)) ? r : a, typeof r === s ? r.call(e, {
                        name: "img",
                        hash: {},
                        data: i
                    }) : r)) + ')"></div>\n        <div class="jw-arrow jw-reset"></div>\n';
                return o = t["if"].call(e, null != e ? e.tooltip : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (c += o), c + "    </div>\n"
            },
            2: function(e, t, n, i) {
                var o, r = "function",
                    s = t.helperMissing,
                    a = this.escapeExpression;
                return '        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">' + a((o = null != (o = t.tooltip || (null != e ? e.tooltip : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "tooltip",
                    hash: {},
                    data: i
                }) : o)) + "</span>\n        </div>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = '<div class="jw-dock jw-reset">\n';
                return o = t.each.call(e, e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (r += o), r + "</div>"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(45), n(67), n(110), n(130), n(133), n(137), n(139), n(141)], o = function(e, t, n, i, o, r, s, a, l) {
            function c(e, t) {
                var n = document.createElement("div");
                return n.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + e, n.style.display = "none", t && new i(n).on("click tap", function() {
                    t()
                }), {
                    element: function() {
                        return n
                    },
                    toggle: function(e) {
                        e ? this.show() : this.hide()
                    },
                    show: function() {
                        n.style.display = ""
                    },
                    hide: function() {
                        n.style.display = "none"
                    }
                }
            }

            function u(e) {
                var t = document.createElement("span");
                return t.className = "jw-text jw-reset " + e, t
            }

            function d(e) {
                var t = new s(e);
                return t
            }

            function A(e, n) {
                var i = document.createElement("div");
                return i.className = "jw-group jw-controlbar-" + e + "-group jw-reset", t.each(n, function(e) {
                    e.element && (e = e.element()), i.appendChild(e)
                }), i
            }

            function p(e, t) {
                this._api = e, this._model = t, this.setup()
            }
            return t.extend(p.prototype, n, {
                setup: function() {
                    this.build(), this.initialize()
                },
                build: function() {
                    var n, i, s, p = new r(this._model, this._api),
                        w = new a("jw-icon-playlist");
                    e.isMobile() || (s = c("jw-icon-volume", this._api.setMute), n = new o("jw-slider-volume", "horizontal"), i = new l(this._model, "jw-icon-volume")), this.elements = {
                        alt: u("jw-text-alt"),
                        play: c("jw-icon-playback", this._api.play),
                        prev: c("jw-icon-prev", this._api.playlistPrev),
                        next: c("jw-icon-next", this._api.playlistNext),
                        playlist: w,
                        elapsed: u("jw-text-elapsed"),
                        time: p,
                        duration: u("jw-text-duration"),
                        hd: d("jw-icon-hd"),
                        cc: d("jw-icon-cc"),
                        audiotracks: d("jw-icon-audio-tracks"),
                        mute: s,
                        volume: n,
                        volumetooltip: i,
                        cast: c("jw-icon-cast jw-off"),
                        fullscreen: c("jw-icon-fullscreen", this._api.setFullscreen)
                    }, this.layout = {
                        left: [this.elements.play, this.elements.prev, this.elements.playlist, this.elements.next, this.elements.elapsed],
                        center: [this.elements.time, this.elements.alt],
                        right: [this.elements.duration, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.mute, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen]
                    }, this.layout.right = t.reject(this.layout.right, function(e) {
                        return t.isUndefined(e)
                    }), this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-background-color jw-reset";
                    var f = A("left", this.layout.left),
                        g = A("center", this.layout.center),
                        h = A("right", this.layout.right);
                    this.el.appendChild(f), this.el.appendChild(g), this.el.appendChild(h)
                },
                initialize: function() {
                    this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get("volume")), this.onPlaylist(this._model, this._model.get("playlist")), this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.onCastAvailable(this._model, this._model.get("castAvailable")), this.onCaptionsList(this._model, this._model.get("captionsList")), this._model.on("change:volume", this.onVolume, this), this._model.on("change:mute", this.onMute, this), this._model.on("change:playlist", this.onPlaylist, this), this._model.on("change:playlistItem", this.onPlaylistItem, this), this._model.on("change:castAvailable", this.onCastAvailable, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this._model.on("change:fullscreen", this.onFullscreen, this), this._model.on("change:captionsList", this.onCaptionsList, this), this._model.on("change:captionsIndex", this.onCaptionsIndex, this), this.elements.volume && this.elements.volume.on("update", function(e) {
                        var t = e.percentage;
                        this._api.setVolume(t)
                    }, this), this.elements.volumetooltip && (this.elements.volumetooltip.on("update", function(e) {
                        var t = e.percentage;
                        this._api.setVolume(t)
                    }, this), this.elements.volumetooltip.on("toggleValue", function() {
                        this._api.setMute()
                    }, this)), this.elements.playlist.on("select", function(e) {
                        this._model.once("setItem", function() {
                            this._api.play()
                        }, this), this._api.load(e)
                    }, this), this.elements.hd.on("select", function(e) {
                        this._model.getVideo().setCurrentQuality(e)
                    }, this), this.elements.hd.on("toggleValue", function() {
                        this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0)
                    }, this), this.elements.cc.on("select", function(e) {
                        this._api.setCurrentCaptions(e)
                    }, this), this.elements.cc.on("toggleValue", function() {
                        var e = this._model.get("captionsIndex");
                        this._api.setCurrentCaptions(e ? 0 : 1)
                    }, this), this.elements.audiotracks.on("select", function(e) {
                        this._model.getVideo().setCurrentAudioTrack(e)
                    }, this)
                },
                onCaptionsList: function(e, t) {
                    var n = e.get("captionsIndex");
                    this.elements.cc.setup(t, n)
                },
                onCaptionsIndex: function(e, t) {
                    this.elements.cc.selectItem(t)
                },
                onPlaylist: function(e, t) {
                    var n = t.length > 1;
                    this.elements.next.toggle(n), this.elements.prev.toggle(n), this.elements.playlist.setup(t, e.get("item"))
                },
                onPlaylistItem: function(e) {
                    this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = "00:00", this.elements.elapsed.innerHTML = "00:00";
                    var n = e.get("item");
                    this.elements.playlist.selectItem(n), this.elements.audiotracks.setup(), this._model.mediaModel.on("change:levels", function(e, t) {
                        this.elements.hd.setup(t, e.get("currentLevel"))
                    }, this), this._model.mediaModel.on("change:currentLevel", function(e, t) {
                        this.elements.hd.selectItem(t)
                    }, this), this._model.mediaModel.on("change:audioTracks", function(e, n) {
                        var i = t.map(n, function(e) {
                            return {
                                label: e.name
                            }
                        });
                        this.elements.audiotracks.setup(i, e.get("currentAudioTrack"), {
                            toggle: !1
                        })
                    }, this), this._model.mediaModel.on("change:currentAudioTrack", function(e, t) {
                        this.elements.audiotracks.selectItem(t)
                    }, this)
                },
                onVolume: function(e, t) {
                    this.renderVolume(e.get("mute"), t)
                },
                onMute: function(e, t) {
                    this.renderVolume(t, e.get("volume"))
                },
                renderVolume: function(t, n) {
                    this.elements.mute && e.toggleClass(this.elements.mute.element(), "jw-off", t), this.elements.volume && this.elements.volume.render(t ? 0 : n), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(t ? 0 : n), e.toggleClass(this.elements.volumetooltip.element(), "jw-off", t))
                },
                onCastAvailable: function(e, t) {
                    this.elements.cast.toggle(t)
                },
                onElapsed: function(t, n) {
                    var i, o = t.get("duration");
                    i = "DVR" === e.adaptiveType(o) ? "-" + e.timeFormat(-o) : e.timeFormat(n), this.elements.elapsed.innerHTML = i
                },
                onDuration: function(t, n) {
                    var i;
                    i = "DVR" === e.adaptiveType(n) ? "Live" : e.timeFormat(n), this.elements.duration.innerHTML = i
                },
                onFullscreen: function(t, n) {
                    e.toggleClass(this.elements.fullscreen.element(), "jw-off", n)
                },
                element: function() {
                    return this.el
                },
                getVisibleBounds: function() {
                    var t, n = this.el,
                        i = getComputedStyle ? getComputedStyle(n) : n.currentStyle;
                    return "table" === i.display ? e.bounds(n) : (n.style.visibility = "hidden", n.style.display = "table", t = e.bounds(n), n.style.visibility = n.style.display = "", t)
                },
                setAltText: function(e) {
                    this.elements.alt.innerHTML = e
                },
                addCues: function(e) {
                    this.elements.time && (t.each(e, function(e) {
                        this.elements.time.addCue(e)
                    }, this), this.elements.time.drawCues())
                }
            }), p
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(131), n(110), n(132), n(48)], o = function(e, t, n, i) {
            var o = e.extend({
                constructor: function(e, t) {
                    this.className = e + " jw-background-color jw-reset", this.orientation = t, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup()
                },
                setup: function() {
                    var e = {
                        "default": this["default"],
                        className: this.className,
                        orientation: "jw-slider-" + this.orientation
                    };
                    this.el = i.createElement(n(e)), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.userInteract = new t(this.element(), {
                        preventScrolling: !0
                    }), this.userInteract.on("dragStart", this.dragStartListener), this.userInteract.on("drag", this.dragMoveListener), this.userInteract.on("dragEnd", this.dragEndListener), this.userInteract.on("tap click", this.tapListener)
                },
                dragStart: function() {
                    this.trigger("dragStart"), this.railBounds = i.bounds(this.elementRail)
                },
                dragEnd: function(e) {
                    this.dragMove(e), this.trigger("dragEnd")
                },
                dragMove: function(e) {
                    var t, n, o = this.railBounds = this.railBounds ? this.railBounds : i.bounds(this.elementRail);
                    return "horizontal" === this.orientation ? (t = e.pageX, n = t < o.left ? 0 : t > o.right ? 100 : 100 * i.between((t - o.left) / o.width, 0, 1)) : (t = e.pageY, n = t >= o.bottom ? 0 : t <= o.top ? 100 : 100 * i.between((o.height - (t - o.top)) / o.height, 0, 1)), this.render(n), this.update(n), !1
                },
                tap: function(e) {
                    this.railBounds = i.bounds(this.elementRail), this.dragMove(e)
                },
                update: function(e) {
                    this.trigger("update", {
                        percentage: e
                    })
                },
                render: function(e) {
                    e = Math.max(0, Math.min(e, 100)), "horizontal" === this.orientation ? (this.elementThumb.style.left = e + "%", this.elementProgress.style.width = e + "%") : (this.elementThumb.style.bottom = e + "%", this.elementProgress.style.height = e + "%")
                },
                updateBuffer: function(e) {
                    this.elementBuffer.style.width = e + "%"
                },
                element: function() {
                    return this.el
                }
            });
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(67), n(45)], o = function(e, t) {
            function n() {}
            var i = function(e, n) {
                var i, o = this;
                i = e && t.has(e, "constructor") ? e.constructor : function() {
                    return o.apply(this, arguments)
                }, t.extend(i, o, n);
                var r = function() {
                    this.constructor = i
                };
                return r.prototype = o.prototype, i.prototype = new r, e && t.extend(i.prototype, e), i.__super__ = o.prototype, i
            };
            return n.extend = i, t.extend(n.prototype, e), n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = "function",
                    s = t.helperMissing,
                    a = this.escapeExpression;
                return '<div class="' + a((o = null != (o = t.className || (null != e ? e.className : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "className",
                    hash: {},
                    data: i
                }) : o)) + " " + a((o = null != (o = t.orientation || (null != e ? e.orientation : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "orientation",
                    hash: {},
                    data: i
                }) : o)) + ' jw-reset">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(130), n(48), n(134), n(135), n(136)], o = function(e, t, n, i, o, r) {
            var s = i.extend({
                    setup: function() {
                        this.text = document.createElement("span"), this.text.className = "jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-reset";
                        var e = document.createElement("div");
                        e.className = "jw-time-tip jw-background-color jw-reset", e.appendChild(this.img), e.appendChild(this.text), n.removeClass(this.el, "jw-hidden"), this.addContent(e)
                    },
                    image: function(e) {
                        n.style(this.img, e)
                    },
                    update: function(e) {
                        this.text.innerHTML = e
                    }
                }),
                a = t.extend({
                    constructor: function(n, i) {
                        this._model = n, this._api = i, this.timeTip = new s("jw-tooltip-time"), this.timeTip.setup(), this.seekThrottled = e.throttle(this.performSeek, 400), this._model.on("change:playlistItem", this.onPlaylistItem, this).on("change:position", this.onPosition, this).on("change:buffer", this.onBuffer, this), t.call(this, "jw-slider-time", "horizontal")
                    },
                    setup: function() {
                        t.prototype.setup.apply(this, arguments), this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.elementRail.appendChild(this.timeTip.element()), this.elementRail.addEventListener("mousemove", this.showTimeTooltip.bind(this), !1), this.elementRail.addEventListener("mouseout", this.hideTimeTooltip.bind(this), !1)
                    },
                    update: function(n) {
                        this.activeCue && e.isNumber(this.activeCue.pct) ? this.seekTo = this.activeCue.pct : this.seekTo = n, this.seekThrottled(), t.prototype.update.apply(this, arguments)
                    },
                    dragStart: function() {
                        this._model.set("scrubbing", !0), t.prototype.dragStart.apply(this, arguments)
                    },
                    dragEnd: function() {
                        t.prototype.dragEnd.apply(this, arguments), this._model.set("scrubbing", !1)
                    },
                    onSeeked: function() {
                        this._model.get("scrubbing") && this.performSeek()
                    },
                    onBuffer: function(e, t) {
                        this.updateBuffer(t)
                    },
                    onPosition: function(e, t) {
                        var i = 0,
                            o = this._model.get("duration");
                        if (o) {
                            var r = n.adaptiveType(o);
                            "DVR" === r ? i = (o - t) / o * 100 : "VOD" === r && (i = t / o * 100)
                        }
                        this.render(i)
                    },
                    onPlaylistItem: function(t, n) {
                        this.reset(), t.mediaModel.on("seeked", this.onSeeked, this);
                        var i = n.tracks;
                        e.each(i, function(e) {
                            e && e.kind && "thumbnails" === e.kind.toLowerCase() ? this.loadThumbnails(e.file) : e && e.kind && "chapters" === e.kind.toLowerCase() && this.loadChapters(e.file)
                        }, this)
                    },
                    performSeek: function() {
                        var e, t = this._api.getDuration(),
                            i = n.adaptiveType(t);
                        "LIVE" === i || 0 === t ? this._api.play() : "DVR" === i ? (e = (1 - this.seekTo / 100) * t, this._api.seek(Math.min(e, -.25))) : (e = this.seekTo / 100 * t, this._api.seek(Math.min(e, t - .25)))
                    },
                    showTimeTooltip: function(e) {
                        var t = this._model.get("duration");
                        if (!(0 >= t)) {
                            var i = n.bounds(this.elementRail),
                                o = e.pageX ? e.pageX - i.left : e.x;
                            o = n.between(o, 0, i.width);
                            var r, s = o / i.width,
                                a = t * s;
                            r = this.activeCue ? this.activeCue.text : n.timeFormat(a), this.timeTip.update(r), this.showThumbnail(a), n.addClass(this.timeTip.el, "jw-open"), this.timeTip.el.style.left = 100 * s + "%"
                        }
                    },
                    hideTimeTooltip: function() {
                        n.removeClass(this.timeTip.el, "jw-open")
                    },
                    reset: function() {
                        this.resetChapters(), this.resetThumbnails()
                    }
                });
            return e.extend(a.prototype, o, r), a
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(131), n(48)], o = function(e, t) {
            var n = e.extend({
                constructor: function(e) {
                    this.el = document.createElement("div"), this.el.className = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset jw-hidden", this.container = document.createElement("div"), this.container.className = "jw-overlay jw-reset", this.el.appendChild(this.container)
                },
                addContent: function(e) {
                    this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
                },
                removeContent: function() {
                    this.content && (this.container.removeChild(this.content), this.content = null)
                },
                element: function() {
                    return this.el
                },
                openTooltip: function() {
                    this.isOpen = !0, t.toggleClass(this.el, "jw-open", this.isOpen)
                },
                closeTooltip: function() {
                    this.isOpen = !1, t.toggleClass(this.el, "jw-open", this.isOpen)
                },
                toggleOpenState: function() {
                    this.isOpen = !this.isOpen, t.toggleClass(this.el, "jw-open", this.isOpen)
                }
            });
            return n
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(48), n(98)], o = function(e, t, n) {
            function i(e, t) {
                this.time = e, this.text = t, this.el = document.createElement("div"), this.el.className = "jw-cue jw-reset"
            }
            e.extend(i.prototype, {
                align: function(e) {
                    "%" === this.time.toString().slice(-1) ? this.pct = this.time : this.pct = this.time / e * 100, this.el.style.left = this.pct + "%"
                }
            });
            var o = {
                loadChapters: function(e) {
                    t.ajax(e, this.chaptersLoaded.bind(this), this.chaptersFailed, !0)
                },
                chaptersLoaded: function(t) {
                    var i = n(t.responseText);
                    e.isArray(i) && (e.each(i, this.addCue, this), this.drawCues())
                },
                chaptersFailed: function() {},
                addCue: function(e) {
                    this.cues.push(new i(e.begin, e.text))
                },
                drawCues: function() {
                    var t = this._model.mediaModel.get("duration");
                    if (!t || 0 >= t) return void this._model.mediaModel.once("change:duration", this.drawCues, this);
                    var n = this;
                    e.each(this.cues, function(e) {
                        e.align(t), e.el.addEventListener("mouseover", function() {
                            n.activeCue = e
                        }), e.el.addEventListener("mouseout", function() {
                            n.activeCue = null
                        }), n.elementRail.appendChild(e.el)
                    })
                },
                resetChapters: function() {
                    e.each(this.cues, function(e) {
                        e.el.parentNode && e.el.parentNode.removeChild(e.el)
                    }, this), this.cues = []
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(48), n(98)], o = function(e, t, n) {
            function i(e) {
                this.begin = e.begin, this.end = e.end, this.img = e.text
            }
            var o = {
                loadThumbnails: function(e) {
                    e && (this.vttPath = e.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, t.ajax(e, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), !0))
                },
                thumbnailsLoaded: function(t) {
                    var o = n(t.responseText);
                    e.isArray(o) && (e.each(o, function(e) {
                        this.thumbnails.push(new i(e))
                    }, this), this.drawCues())
                },
                thumbnailsFailed: function() {},
                chooseThumbnail: function(t) {
                    var n = e.sortedIndex(this.thumbnails, {
                        end: t
                    }, e.property("end"));
                    n >= this.thumbnails.length && (n = this.thumbnails.length - 1);
                    var i = this.thumbnails[n].img;
                    return i.indexOf("://") < 0 && (i = this.vttPath ? this.vttPath + "/" + i : i), i
                },
                loadThumbnail: function(t) {
                    var n = this.chooseThumbnail(t),
                        i = {
                            display: "block",
                            margin: "0 auto",
                            "background-position": "0 0"
                        },
                        o = n.indexOf("#xywh");
                    if (o > 0) try {
                        var r = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);
                        n = r[1], i["background-position"] = -1 * r[2] + "px " + -1 * r[3] + "px", i.width = r[4], i.height = r[5]
                    } catch (s) {
                        return
                    } else this.individualImage || (this.individualImage = new Image, this.individualImage.onload = e.bind(function() {
                        this.individualImage.onload = null, this.timeTip.image({
                            width: this.individualImage.width,
                            height: this.individualImage.height
                        })
                    }, this), this.individualImage.src = n);
                    return i["background-image"] = n, i
                },
                showThumbnail: function(e) {
                    this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(e))
                },
                resetThumbnails: function() {
                    this.timeTip.image({
                        "background-image": "",
                        width: 0,
                        height: 0
                    }), this.thumbnails = []
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(134), n(48), n(45), n(110), n(138)], o = function(e, t, n, i, o) {
            var r = e.extend({
                setup: function(e, r, s) {
                    this.iconUI || (this.iconUI = new i(this.el), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), e = n.isArray(e) ? e : [], t.toggleClass(this.el, "jw-hidden", e.length < 2);
                    var a = e.length > 2 || 2 === e.length && s && s.toggle === !1,
                        l = !a && 2 === e.length;
                    if (t.toggleClass(this.el, "jw-toggle", l), t.toggleClass(this.el, "jw-button-color", !l), a) {
                        t.removeClass(this.el, "jw-off"), this.iconUI.on("tap", this.toggleOpenStateListener), this.el.addEventListener("mouseover", this.openTooltipListener), this.el.addEventListener("mouseout", this.closeTooltipListener);
                        var c = o(e),
                            u = t.createElement(c);
                        this.addContent(u), this.contentUI = new i(this.content).on("click tap", this.selectListener)
                    } else l && this.iconUI.on("click tap", this.toggleValueListener);
                    this.selectItem(r)
                },
                toggleValue: function() {
                    this.trigger("toggleValue")
                },
                select: function(e) {
                    if (e.target.parentElement === this.content) {
                        var i = t.classList(e.target),
                            o = n.find(i, function(e) {
                                return 0 === e.indexOf("jw-item")
                            });
                        o && (this.trigger("select", parseInt(o.split("-")[2])), this.closeTooltipListener())
                    }
                },
                selectItem: function(e) {
                    if (this.content)
                        for (var n = 0; n < this.content.children.length; n++) t.toggleClass(this.content.children[n], "jw-active-option", e === n);
                    else t.toggleClass(this.el, "jw-off", 0 === e)
                },
                reset: function() {
                    t.addClass(this.el, "jw-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent(), this.el.removeEventListener("mouseover", this.openTooltipListener), this.el.removeEventListener("mouseout", this.closeTooltipListener)
                }
            });
            return r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i) {
                var o = this.lambda,
                    r = this.escapeExpression;
                return "        <li class='jw-text jw-option jw-item-" + r(o(i && i.index, e)) + " jw-reset'>" + r(o(null != e ? e.label : e, e)) + "</li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = '<ul class="jw-menu jw-background-color jw-reset">\n';
                return o = t.each.call(e, e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (r += o), r + "</ul>"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(45), n(134), n(110), n(140)], o = function(e, t, n, i, o) {
            var r = n.extend({
                setup: function(n, o) {
                    if (this.iconUI || (this.iconUI = new i(this.el), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this),
                            this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.onSelect.bind(this)), this.reset(), n = t.isArray(n) ? n : [], e.toggleClass(this.el, "jw-hidden", n.length < 2), n.length >= 2) {
                        this.iconUI = new i(this.el).on("tap", this.toggleOpenStateListener), this.el.addEventListener("mouseover", this.openTooltipListener), this.el.addEventListener("mouseout", this.closeTooltipListener);
                        var r = this.menuTemplate(n, o),
                            s = e.createElement(r);
                        this.addContent(s), this.contentUI = new i(this.content), this.contentUI.on("click tap", this.selectListener)
                    }
                    this.originalList = n
                },
                menuTemplate: function(e, n) {
                    var i = t.map(e, function(e, t) {
                        return {
                            active: t === n,
                            label: t + 1 + ".",
                            title: e.title
                        }
                    });
                    return o(i)
                },
                onSelect: function(n) {
                    var i = n.target;
                    if ("UL" !== i.tagName) {
                        "LI" !== i.tagName && (i = i.parentElement);
                        var o = e.classList(i),
                            r = t.find(o, function(e) {
                                return 0 === e.indexOf("jw-item")
                            });
                        r && (this.trigger("select", parseInt(r.split("-")[2])), this.closeTooltip())
                    }
                },
                selectItem: function(e) {
                    this.setup(this.originalList, e)
                },
                reset: function() {
                    this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.el.removeEventListener("mouseover", this.openTooltipListener), this.el.removeEventListener("mouseout", this.closeTooltipListener), this.removeContent()
                }
            });
            return r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i) {
                var o, r = "";
                return o = t["if"].call(e, null != e ? e.active : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, i),
                    inverse: this.program(4, i),
                    data: i
                }), null != o && (r += o), r
            },
            2: function(e, t, n, i) {
                var o = this.lambda,
                    r = this.escapeExpression;
                return "                <li class='jw-option jw-text jw-active-option jw-item-" + r(o(i && i.index, e)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset">' + r(o(null != e ? e.title : e, e)) + "</span>\n                </li>\n"
            },
            4: function(e, t, n, i) {
                var o = this.lambda,
                    r = this.escapeExpression;
                return "                <li class='jw-option jw-text jw-item-" + r(o(i && i.index, e)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset">' + r(o(null != e ? e.label : e, e)) + '</span>\n                    <span class="jw-name jw-reset">' + r(o(null != e ? e.title : e, e)) + "</span>\n                </li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = '<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">PLAYLIST</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n';
                return o = t.each.call(e, e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (r += o), r + "    </ul>\n</div>"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(134), n(130), n(110), n(48)], o = function(e, t, n, i) {
            var o = e.extend({
                constructor: function(o, r) {
                    this._model = o, e.call(this, r), this.volumeSlider = new t("jw-slider-volume jw-volume-tip", "vertical"), this.addContent(this.volumeSlider.element()), this.volumeSlider.on("update", function(e) {
                        this.trigger("update", e)
                    }.bind(this)), i.toggleClass(this.el, "jw-hidden", !1), new n(this.el).on("click", this.toggleValue.bind(this)).on("tap", this.toggleOpenState.bind(this)), this.el.addEventListener("mouseover", this.openTooltip.bind(this)), this.el.addEventListener("mouseout", this.closeTooltip.bind(this)), this._model.on("change:volume", this.onVolume, this)
                },
                toggleValue: function(e) {
                    e.target === this.el && this.trigger("toggleValue")
                }
            });
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45)], o = function(e) {
            var t = function(e) {
                this.model = e, this.model.on("change:playlistItem", this.loadImage, this)
            };
            return e.extend(t.prototype, {
                setup: function(e) {
                    this.el = e, this.loadImage(this.model, this.model.get("playlistItem"))
                },
                loadImage: function(t, n) {
                    var i = n.image;
                    e.isString(i) ? this.el.style["background-image"] = "url(" + i + ")" : this.el.style["background-image"] = ""
                },
                element: function() {
                    return this.el
                }
            }), t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(144), n(45), n(52)], o = function(e, t, n) {
            function i(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }

            function o(e) {
                return "pro" === e ? "p" : "premium" === e ? "r" : "enterprise" === e ? "e" : "ads" === e ? "a" : "f"
            }
            var r = function() {};
            return t.extend(r.prototype, e.prototype, {
                buildArray: function() {
                    var t = e.prototype.buildArray.apply(this, arguments),
                        r = this.model.edition(),
                        s = n.split("+")[0],
                        a = "//jwplayer.com/learn-more/?m=h&e=" + o(r) + "&v=" + n;
                    if (t.items[0].link = a, t.items[0].title = "About JW Player " + i(r) + " " + s, "free" === r) return t;
                    if (this.model.get("abouttext")) {
                        var l = {
                            title: this.model.get("abouttext"),
                            link: this.model.get("aboutlink") || a
                        };
                        t.items.splice(1, 0, l)
                    }
                    return t
                }
            }), r
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(145), n(45), n(52)], o = function(e, t, n, i) {
            var o = function() {};
            return n.extend(o.prototype, {
                buildArray: function() {
                    var t = i.split("+"),
                        n = t[0],
                        o = {
                            items: [{
                                title: "About JW Player " + n,
                                featured: !0,
                                link: "//jwplayer.com/learn-more/?m=h&e=o&v=" + i
                            }]
                        },
                        r = n.indexOf("-") > 0,
                        s = t[1];
                    if (r && s) {
                        var a = s.split(".");
                        o.items.push({
                            title: "build: (" + a[0] + "." + a[1] + ")",
                            link: "#"
                        })
                    }
                    var l = this.model.get("provider").name;
                    if (l.indexOf("flash") >= 0) {
                        var c = "Flash Version " + e.flashVersion();
                        o.items.push({
                            title: c,
                            link: "#"
                        })
                    }
                    return o
                },
                buildMenu: function() {
                    var n = this.buildArray();
                    return e.createElement(t(n))
                },
                updateHtml: function() {
                    this.el.innerHTML = this.buildMenu().innerHTML
                },
                rightClick: function(e) {
                    return this.lazySetup(), this.mouseOverContext ? !1 : (this.hideMenu(), this.showMenu(e), !1)
                },
                getOffset: function(e) {
                    for (var t = e.target, n = e.offsetX || e.layerX, i = e.offsetY || e.layerY; t !== this.playerElement;) n += t.offsetLeft, i += t.offsetTop, t = t.parentNode;
                    return {
                        x: n,
                        y: i
                    }
                },
                showMenu: function(t) {
                    var n = this.getOffset(t);
                    return this.el.style.left = n.x + "px", this.el.style.top = n.y + "px", e.addClass(this.playerElement, "jw-flag-rightclick-open"), e.addClass(this.el, "jw-open"), !1
                },
                hideMenu: function() {
                    this.mouseOverContext || (e.removeClass(this.playerElement, "jw-flag-rightclick-open"), e.removeClass(this.el, "jw-open"))
                },
                lazySetup: function() {
                    this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.playerElement.onclick = this.hideMenu.bind(this), document.addEventListener("mousedown", this.hideMenu.bind(this), !1), this.model.on("change:provider", this.updateHtml, this), this.el.onmouseover = function() {
                        this.mouseOverContext = !0
                    }.bind(this), this.el.onmouseout = function() {
                        this.mouseOverContext = !1
                    }.bind(this))
                },
                setup: function(e, t, n) {
                    this.playerElement = t, this.model = e, this.mouseOverContext = !1, this.layer = n, t.oncontextmenu = this.rightClick.bind(this)
                },
                destroy: function() {
                    this.model.off("change:provider", this.updateHtml), document.removeEventListener("mousedown", this.hideMenu), this.model = null, this.playerElement = null, this.el = null
                }
            }), o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i) {
                var o, r, s = "function",
                    a = t.helperMissing,
                    l = this.escapeExpression,
                    c = '        <li class="jw-reset';
                return o = t["if"].call(e, null != e ? e.featured : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(2, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (c += o), c += '">\n            <a href="' + l((r = null != (r = t.link || (null != e ? e.link : e)) ? r : a, typeof r === s ? r.call(e, {
                    name: "link",
                    hash: {},
                    data: i
                }) : r)) + '" class="jw-reset">\n', o = t["if"].call(e, null != e ? e.featured : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(4, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (c += o), c + "                " + l((r = null != (r = t.title || (null != e ? e.title : e)) ? r : a, typeof r === s ? r.call(e, {
                    name: "title",
                    hash: {},
                    data: i
                }) : r)) + "\n            </a>\n        </li>\n"
            },
            2: function(e, t, n, i) {
                return " jw-featured"
            },
            4: function(e, t, n, i) {
                return '                <span class="jw-icon jw-rightlick-logo jw-reset"></span>\n'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = '<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n';
                return o = t.each.call(e, null != e ? e.items : e, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, i),
                    inverse: this.noop,
                    data: i
                }), null != o && (r += o), r + "    </ul>\n</div>"
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(45)], o = function(e) {
            var t = function(e) {
                this.model = e
            };
            return e.extend(t.prototype, {
                hide: function() {
                    this.el.style.display = "none"
                },
                show: function() {
                    this.el.style.display = ""
                },
                setup: function(e) {
                    this.el = e;
                    var t = this.el.getElementsByTagName("div");
                    this.title = t[0], this.description = t[1], this.model.on("change:playlistItem", this.updateText, this), this.updateText(this.model, this.model.get("playlistItem"))
                },
                updateText: function(e, t) {
                    var n = t.title,
                        i = t.description || "";
                    n ? (this.show(), this.title.innerHTML = n, this.description.innerHTML = i) : this.hide()
                },
                element: function() {
                    return this.el
                }
            }), t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = "function",
                    s = t.helperMissing,
                    a = this.escapeExpression;
                return '<div id="' + a((o = null != (o = t.id || (null != e ? e.id : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "id",
                    hash: {},
                    data: i
                }) : o)) + '" class="jwplayer jw-reset" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(149)], o = function(e) {
            function t(t, n, i, o) {
                return e({
                    id: t,
                    skin: n,
                    title: i,
                    body: o
                })
            }
            return t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i = n(112);
        e.exports = (i["default"] || i).template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(e, t, n, i) {
                var o, r = "function",
                    s = t.helperMissing,
                    a = this.escapeExpression;
                return '<div id="' + a((o = null != (o = t.id || (null != e ? e.id : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "id",
                    hash: {},
                    data: i
                }) : o)) + '"class="jw-skin-' + a((o = null != (o = t.skin || (null != e ? e.skin : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "skin",
                    hash: {},
                    data: i
                }) : o)) + ' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">' + a((o = null != (o = t.title || (null != e ? e.title : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "title",
                    hash: {},
                    data: i
                }) : o)) + '</div>\n        <div class="jw-title-secondary jw-reset">' + a((o = null != (o = t.body || (null != e ? e.body : e)) ? o : s, typeof o === r ? o.call(e, {
                    name: "body",
                    hash: {},
                    data: i
                }) : o)) + '</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset"></div>\n        </div>\n    </div>\n</div>\n'
            },
            useData: !0
        })
    }, function(e, t, n) {
        var i, o;
        i = [n(151), n(153), n(154), n(155), n(152), n(48), n(64), n(65), n(45)], o = function(e, t, n, i, o, r, s, a, l) {
            function c(e, t) {
                e[t] && (e[t] = r.getAbsolutePath(e[t]))
            }
            var u = r.noop,
                d = {},
                A = function(A, p) {
                    function w(e, t) {
                        o.log("send command", e, t);
                        var n = {
                            command: e
                        };
                        void 0 !== t && (n.args = t), J.sendMessage(o.NS, n, u, function(e) {
                            o.log("error message", e), "Invalid namespace" === e.description && C()
                        })
                    }

                    function f(e) {
                        var t = o.available(e.availability);
                        m(t)
                    }

                    function g(e) {
                        o.log("existing session", e), J || X || (X = e.session, X.addMessageListener(o.NS, h))
                    }

                    function h(e, t) {
                        var n = JSON.parse(t);
                        if (!n) throw "Message not proper JSON";
                        if (n.reconcile) {
                            X.removeMessageListener(o.NS, h);
                            var i = n.diff,
                                r = X;
                            i.id && n.appid && n.pageUrl || (i.id = window.jwplayer().id, n.appid = O.appid, n.pageUrl = z, X = J = null), i.id === A.id && n.appid === O.appid && n.pageUrl === z && (J || (A.jwInstreamState() && A.instreamDestroy(), L(r), p.set("state", a.IDLE)), P(n)), X = null
                        }
                    }

                    function m(e) {
                        var t = !!e;
                        U.available !== t && (U.available = t, p.set("castAvailable", t))
                    }

                    function j(e) {
                        U.active = !!e, U.deviceName = v(), p.set("castState", U)
                    }

                    function v() {
                        return J && J.receiver ? J.receiver.friendlyName : ""
                    }

                    function b() {
                        if (!J && !A.jwInstreamState()) {
                            var e = window.chrome;
                            e.cast.requestSession(L, k)
                        }
                    }

                    function k(e) {
                        var t = window.chrome;
                        e.code !== t.cast.ErrorCode.CANCEL && (o.log("Cast Session Error:", e, J), e.code === t.cast.ErrorCode.SESSION_ERROR && C())
                    }

                    function E() {
                        if (!A.jwInstreamState()) {
                            var e = window.chrome;
                            e.cast.requestSession(L, y)
                        }
                    }

                    function y(e) {
                        var t = window.chrome;
                        e.code !== t.cast.ErrorCode.CANCEL && (o.log("Cast Session Error:", e, J), e.code === t.cast.ErrorCode.SESSION_ERROR && C())
                    }

                    function C() {
                        return J ? (B(), J.stop(I, x), D({
                            item: 0
                        }), void P({
                            type: "state",
                            diff: {
                                buffer: 0,
                                position: 0,
                                duration: 0
                            }
                        })) : void I()
                    }

                    function x(e) {
                        o.error("Cast Session Stop error:", e, J), I()
                    }

                    function L(n) {
                        o.log("Session started:", n), J ? (C(), q = n) : (J = n, J.addMessageListener(o.NS, M), J.addUpdateListener(R), A.jwPause(!0), A.jwSetFullscreen(!1), H = p.getVideo(), K.volume = p.volume, K.mute = p.mute, G = new t(w), G.init(), p.setVideoProvider(G), Q(), S(), j(!0), n !== X && (G.setup(i.setupCastConfig(p, O), p), e.sendDummyMedia(n)))
                    }

                    function R(e) {
                        o.log("Cast Session status", e), e ? S() : (G.sendEvent(s.JWPLAYER_PLAYER_STATE, {
                            oldstate: p.state,
                            newstate: a.BUFFERING
                        }), I())
                    }

                    function I() {
                        o.log("_sessionStopped"), J && (B(), J = null), H && (N(), p.volume = K.volume, p.mute = K.mute, p.setVideoProvider(H), p.duration = 0, G && (G.destroy(), G = null), V && (V.destroy(), V = null), p.state !== a.IDLE ? r.isIPad() || r.isIPod() ? (A.jwStop(!0), H.sendEvent(s.JWPLAYER_PLAYER_STATE, {
                            oldstate: a.BUFFERING,
                            newstate: a.IDLE
                        })) : (p.state = a.IDLE, A.jwPlay(!0), A.jwSeek(p.position)) : H.sendEvent(s.JWPLAYER_PLAYER_STATE, {
                            oldstate: a.BUFFERING,
                            newstate: a.IDLE
                        }), H = null), j(!1), null !== q && (L(q), q = null)
                    }

                    function B() {
                        J.removeUpdateListener(R), J.removeMessageListener(o.NS, M)
                    }

                    function M(e, t) {
                        var n = JSON.parse(t);
                        if (!n) throw "Message not proper JSON";
                        P(n)
                    }

                    function P(e) {
                        if ("state" === e.type) V && (e.diff.newstate || e.diff.position) && (V.destroy(), V = null, p.setVideoProvider(G), p.trigger(s.JWPLAYER_CAST_AD_CHANGED, {
                            done: !0
                        })), G.updateModel(e.diff, e.type), D(e.diff);
                        else if ("ad" === e.type) {
                            null === V && (V = new n(o.NS, J), V.init(), p.setVideoProvider(V)), V.updateModel(e.diff, e.type);
                            var t = V.getAdModel();
                            e.diff.clickthrough && (t.onClick = A.jwClickAd), e.diff.skipoffset && (t.onSkipAd = A.jwSkipAd), p.trigger(s.JWPLAYER_CAST_AD_CHANGED, t), e.diff.complete && V.resetAdModel()
                        } else "connection" === e.type ? e.closed === !0 && C() : o.error("received unhandled message", e.type, e)
                    }

                    function D(e) {
                        void 0 !== e.item && p.item !== e.item && (p.item = e.item, p.trigger(s.JWPLAYER_PLAYLIST_ITEM, {
                            index: p.item
                        }))
                    }

                    function T(e) {
                        e = Math.max(0, Math.min(e, 1)), J.setReceiverVolumeLevel(e, S, function(e) {
                            o.error("set volume error", e), S()
                        })
                    }

                    function _(e) {
                        J.setReceiverMuted(!!e, S, function(e) {
                            o.error("set muted error", e), S()
                        })
                    }

                    function S() {
                        if (J && J.receiver) {
                            var e = J.receiver.volume;
                            if (e) {
                                var t = 100 * e.level | 0,
                                    n = !!e.muted;
                                Y(n), F(t)
                            }
                        }
                    }

                    function F(e) {
                        var t = W.volume !== e;
                        return t && (W.volume = e, G.sendEvent(s.JWPLAYER_MEDIA_VOLUME, {
                            volume: e
                        })), t
                    }

                    function Y(e) {
                        var t = W.mute !== e;
                        return t && (W.mute = e, G.sendEvent(s.JWPLAYER_MEDIA_MUTE, {
                            mute: e
                        })), t
                    }

                    function Q() {
                        A.jwPlay = function(e) {
                            e === !1 ? G.pause() : G.play()
                        }, A.jwPause = function(e) {
                            A.jwPlay(!!e)
                        }, A.jwLoad = function(e) {
                            l.isNumber(e) ? p.setItem(e) : l.isObject(e) && p.setPlaylist(e), p.loadVideo()
                        }, A.jwPlaylistItem = function(e) {
                            "number" === r.typeOf(e) && p.setItem(e), G.playlistItem(e)
                        }, A.jwPlaylistNext = function() {
                            A.jwPlaylistItem(p.item + 1)
                        }, A.jwPlaylistPrev = function() {
                            A.jwPlaylistItem(p.item - 1)
                        }, A.jwSetVolume = function(e) {
                            r.exists(e) && (e = 0 | Math.min(Math.max(0, e), 100), F(e) && T(e / 100))
                        }, A.jwSetMute = function(e) {
                            r.exists(e) || (e = !W.mute), Y(e) && _(e)
                        }, A.jwGetVolume = function() {
                            return 0 | W.volume
                        }, A.jwGetMute = function() {
                            return !!W.mute
                        }, A.jwIsBeforePlay = function() {
                            return !1
                        };
                        var e = A.jwSetCurrentCaptions;
                        A.jwSetCurrentCaptions = function(t) {
                            e(t), G.sendCommand("caption", t)
                        }, A.jwSkipAd = function(e) {
                            if (V) {
                                V.skipAd(e);
                                var t = V.getAdModel();
                                t.complete = !0, p.trigger(s.JWPLAYER_CAST_AD_CHANGED, t)
                            }
                        }, A.jwClickAd = function(e) {
                            if (V && V.timeSinceClick() > 300 && (V.clickAd(e), p.state !== a.PAUSED)) {
                                var t = {
                                    tag: e.tag
                                };
                                e.sequence && (t.sequence = e.sequence), e.podcount && (t.podcount = e.podcount), window.jwplayer(A.id).dispatchEvent(s.JWPLAYER_AD_CLICK, t), window.open(e.clickthrough)
                            }
                        }, A.jwPlayAd = A.jwPauseAd = A.jwSetControls = A.jwForceState = A.jwReleaseState = A.jwSetFullscreen = A.jwDetachMedia = A.jwAttachMedia = u;
                        var t = window.jwplayer(A.id).plugins;
                        t.vast && t.vast.jwPauseAd !== u && (Z = {
                            jwPlayAd: t.vast.jwPlayAd,
                            jwPauseAd: t.vast.jwPauseAd
                        }, t.vast.jwPlayAd = t.vast.jwPauseAd = u)
                    }

                    function N() {
                        delete A.jwSkipAd, delete A.jwClickAd, A.initializeAPI();
                        var e = window.jwplayer(A.id).plugins;
                        e.vast && l.extend(e.vast, Z)
                    }
                    var O, J = null,
                        U = {
                            available: !1,
                            active: !1,
                            deviceName: ""
                        },
                        W = {
                            volume: null,
                            mute: null
                        },
                        z = r.getAbsolutePath(window.location.href),
                        G = null,
                        V = null,
                        H = null,
                        K = {
                            volume: p.volume,
                            mute: p.mute
                        },
                        X = null,
                        q = null,
                        Z = null;
                    O = l.extend({}, d, p.cast), c(O, "loadscreen"), c(O, "endscreen"), c(O, "logo"), !O.appid || window.cast && window.cast.receiver || (e.addEventListener("availability", f), e.addEventListener("session", g), e.initialize(O.appid)), this.startCasting = b, this.stopCasting = C, this.openExtension = E
                };
            return A
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(152), n(64), n(75), n(66), n(45)], o = function(e, t, n, i, o) {
            function r(i) {
                j = i, null !== e.availability ? v.sendEvent("availability", {
                    availability: e.availability
                }) : f && f.cast ? a() : p || (p = new n(g), p.addEventListener(t.ERROR, l), p.addEventListener(t.COMPLETE, a), p.load())
            }

            function s(e) {
                var t = new f.cast.media.MediaInfo("");
                t.contentType = "video/mp4";
                var n = new f.cast.media.LoadRequest(t);
                n.autoplay = !1, e.loadMedia(n)
            }

            function a() {
                f && f.cast && f.cast.isAvailable && !w ? (w = new f.cast.ApiConfig(new f.cast.SessionRequest(j), d, A, f.cast.AutoJoinPolicy.ORIGIN_SCOPED), f.cast.initialize(w, u, c)) : m++ < 15 && (h = setTimeout(a, 1e3))
            }

            function l() {
                p && (p.resetEventListeners(), p = null)
            }

            function c() {
                w = null
            }

            function u() {}

            function d(t) {
                v.sendEvent("session", {
                    session: t
                }), t.sendMessage(e.NS, {
                    whoami: 1
                }), 0 === t.media.length && s(t)
            }

            function A(t) {
                e.availability = t, v.sendEvent("availability", {
                    availability: t
                })
            }
            var p, w, f = window.chrome,
                g = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js",
                h = -1,
                m = 0,
                j = null,
                v = o.extend({
                    initialize: r,
                    sendDummyMedia: s
                }, new i("cast.loader"));
            return v
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [], o = function() {
            var e = window.chrome,
                t = {};
            return t.NS = "urn:x-cast:com.longtailvideo.jwplayer", t.debug = !1, t.availability = null, t.available = function(n) {
                n = n || t.availability;
                var i = "available";
                return e && e.cast && e.cast.ReceiverAvailability && (i = e.cast.ReceiverAvailability.AVAILABLE), n === i
            }, t.log = function() {
                if (t.debug) {
                    var e = Array.prototype.slice.call(arguments, 0);
                    console.log.apply(console, e)
                }
            }, t.error = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                console.error.apply(console, e)
            }, t
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(64), n(66), n(65), n(45), n(152), n(62)], o = function(e, t, n, i, o, r, s) {
            function a() {
                var e = document.createElement("div");
                return e.className = "jw-cast-screen jw-reset", e
            }
            var l = function(s) {
                function l(e) {
                    A.oldstate = A.newstate, A.newstate = e, c(t.JWPLAYER_PLAYER_STATE, {
                        oldstate: A.oldstate,
                        newstate: A.newstate
                    })
                }

                function c(e, t) {
                    u.sendEvent(e, t)
                }
                var u = o.extend(this, new n("cast.provider")),
                    d = -1,
                    A = {
                        newstate: i.IDLE,
                        oldstate: i.IDLE,
                        buffer: 0,
                        position: 0,
                        duration: -1,
                        audioMode: !1
                    },
                    p = a();
                p.onclick = function() {
                    u.sendEvent(t.JWPLAYER_PROVIDER_CLICK)
                }, u.isCaster = !0, u.init = function() {}, u.destroy = function() {
                    clearTimeout(d)
                }, u.updateModel = function(e, n) {
                    e.newstate && (A.newstate = e.newstate, A.oldstate = e.oldstate || A.oldstate, c(t.JWPLAYER_PLAYER_STATE, {
                        oldstate: A.oldstate,
                        newstate: A.newstate
                    })), "ad" !== n && ((void 0 !== e.position || void 0 !== e.duration) && (void 0 !== e.position && (A.position = e.position), void 0 !== e.duration && (A.duration = e.duration), c(t.JWPLAYER_MEDIA_TIME, {
                        position: A.position,
                        duration: A.duration
                    })), void 0 !== e.buffer && (A.buffer = e.buffer, c(t.JWPLAYER_MEDIA_BUFFER, {
                        bufferPercent: A.buffer
                    })))
                }, u.supportsFullscreen = function() {
                    return !1
                }, u.setup = function(e, t) {
                    t.state && (A.newstate = t.state), void 0 !== t.buffer && (A.buffer = t.buffer), void 0 !== e.position && (A.position = e.position), void 0 !== e.duration && (A.duration = e.duration), l(i.BUFFERING), s("setup", e)
                }, u.playlistItem = function(e) {
                    l(i.BUFFERING), s("item", e)
                }, u.load = function(e) {
                    l(i.BUFFERING), s("load", e)
                }, u.stop = function() {
                    clearTimeout(d), d = setTimeout(function() {
                        l(i.IDLE), s("stop")
                    }, 0)
                }, u.play = function() {
                    s("play")
                }, u.pause = function() {
                    l(i.PAUSED), s("pause")
                }, u.seek = function(e) {
                    l(i.BUFFERING), c(t.JWPLAYER_MEDIA_SEEK, {
                        position: A.position,
                        offset: e
                    }), s("seek", e)
                }, u.audioMode = function() {
                    return A.audioMode
                }, u.sendCommand = function(e, t) {
                    s(e, t)
                }, u.detachMedia = function() {
                    return r.error("detachMedia called while casting"), document.createElement("video")
                }, u.attachMedia = function() {
                    r.error("attachMedia called while casting")
                };
                var w;
                u.setContainer = function(e) {
                    e.appendChild(p), w = e
                }, u.getContainer = function() {
                    return w
                }, u.remove = function() {
                    w.removeChild(p)
                }, u.volume = u.mute = u.setControls = u.setCurrentQuality = u.resize = u.seekDrag = u.addCaptions = u.resetCaptions = u.setVisibility = u.fsCaptions = e.noop, u.setFullScreen = u.getFullScreen = u.checkComplete = o.constant(!1), u.getWidth = u.getHeight = u.getCurrentQuality = o.constant(0), u.getQualityLevels = o.constant(["Auto"])
            };
            return s.css(".jwplayer .jwcast-screen", {
                width: "100%",
                height: "100%"
            }), l
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(153), n(152), n(45)], o = function(e, t, n, i) {
            var o = function(o, r) {
                function s() {
                    l = {
                        message: d,
                        position: 0,
                        duration: -1
                    }
                }

                function a(t, i) {
                    var s = {
                        command: t
                    };
                    void 0 !== i && (s.args = i), r.sendMessage(o, s, e.noop, function(e) {
                        n.error("message send error", e)
                    })
                }
                var l, c = new t(o, r),
                    u = i.extend(this, c),
                    d = "Loading ad",
                    A = 0;
                u.init = function() {
                    c.init(), s()
                }, u.destroy = function() {
                    c.destroy()
                }, u.updateModel = function(e, t) {
                    (e.tag || e.newstate || e.sequence || e.companions) && n.log("received ad change:", e), e.tag && l.tag && e.tag !== l.tag && (n.error("ad messages not received in order. new model:", e, "old model:", l), s()), i.extend(l, e), c.updateModel(e, t)
                }, u.getAdModel = function() {
                    var e = i.extend({}, l);
                    return l.duration > 0 ? e.message = p(l) : e.message = d, e
                }, u.resetAdModel = function() {
                    s()
                }, u.skipAd = function(e) {
                    a("skipAd", {
                        tag: e.tag
                    })
                }, u.clickAd = function(e) {
                    A = (new Date).getTime(), a("clickAd", {
                        tag: e.tag
                    })
                }, u.timeSinceClick = function() {
                    return (new Date).getTime() - A
                };
                var p = function(e) {
                    var t = e.message.replace(/xx/gi, "" + Math.min(0 | e.duration, Math.ceil(e.duration - e.position)));
                    return e.podMessage && e.podcount > 1 && (t = e.podMessage.replace(/__AD_POD_CURRENT__/g, "" + e.sequence).replace(/__AD_POD_LENGTH__/g, "" + e.podcount) + t), t
                }
            };
            return o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(48), n(45), n(52)], o = function(e, t, n) {
            function i(e, i) {
                var r = t.extend({}, e.config);
                return r.cast = t.extend({
                    pageUrl: l
                }, i), s(r, ["base", "autostart", "controls", "fallback", "fullscreen", "width", "height", "mobilecontrols", "modes", "playlistlayout", "playlistposition", "playlistsize", "primary", "stretching", "sharing", "related", "ga", "skin", "logo", "listbar", "events"]), o(r), e.position && (r.position = e.position), e.item > 0 && (r.item = e.item), r.captionLabel = e.captionLabel, r.playerVersion = n, r
            }

            function o(e) {
                var t = e.plugins;
                delete e.plugins;
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var i = t[n];
                        i.client && (/[\.\/]/.test(i.client) && a(i, "client"), i.client.indexOf("vast") > -1 && (e.advertising = r(i)))
                    }
            }

            function r(e) {
                var n = t.extend({}, e);
                if (n.client = "vast", delete n.companiondiv, n.schedule)
                    for (var i in n.schedule)
                        if (n.schedule.hasOwnProperty(i)) {
                            var o = n.schedule[i].ad || n.schedule[i];
                            a(o, "tag")
                        }
                return a(n, "tag"), n
            }

            function s(e, t) {
                for (var n = t.length; n--;) delete e[t[n]]
            }

            function a(t, n) {
                t[n] && (t[n] = e.getAbsolutePath(t[n]))
            }
            var l = window.location.href;
            return {
                setupCastConfig: i
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(83), n(45)], o = function(e, t) {
            return function(n, i) {
                var o = ["seek", "stop", "playlistNext", "playlistPrev", "playlistItem", "resize", "addButton", "removeButton", "registerPlugin", "attachMedia"];
                t.each(o, function(e) {
                    n[e] = function() {
                        return i[e].apply(i, arguments), n
                    }
                }), n.registerPlugin = e.registerPlugin
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45)], o = function(e) {
            return function(t, n) {
                var i = ["buffer", "controls", "position", "duration", "width", "height", "fullscreen", "volume", "mute", "state", "item", "stretching", "playlist"];
                e.each(i, function(e) {
                    var i = e.slice(0, 1).toUpperCase() + e.slice(1);
                    t["get" + i] = function() {
                        return n._model.get(e)
                    }
                });
                var o = ["getAudioTracks", "getCaptionsList", "getCurrentAudioTrack", "setCurrentAudioTrack", "getCurrentCaptions", "setCurrentCaptions", "getCurrentQuality", "setCurrentQuality", "getQualityLevels", "getVisualQuality", "getConfig", "getSafeRegion", "isBeforeComplete", "isBeforePlay", "getProvider", "detachMedia"],
                    r = ["setControls", "setFullscreen", "setVolume", "setMute", "setCues"];
                e.each(o, function(e) {
                    t[e] = function() {
                        return n[e].apply(n, arguments)
                    }
                }), e.each(r, function(e) {
                    t[e] = function() {
                        return n[e].apply(n, arguments), t
                    }
                })
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i, o;
        i = [n(45), n(64)], o = function(e, t) {
            return function(n) {
                var i = {
                        onBufferChange: t.JWPLAYER_MEDIA_BUFFER,
                        onBufferFull: t.JWPLAYER_MEDIA_BUFFER_FULL,
                        onError: t.JWPLAYER_ERROR,
                        onSetupError: t.JWPLAYER_SETUP_ERROR,
                        onFullscreen: t.JWPLAYER_FULLSCREEN,
                        onMeta: t.JWPLAYER_MEDIA_META,
                        onMute: t.JWPLAYER_MEDIA_MUTE,
                        onPlaylist: t.JWPLAYER_PLAYLIST_LOADED,
                        onPlaylistItem: t.JWPLAYER_PLAYLIST_ITEM,
                        onPlaylistComplete: t.JWPLAYER_PLAYLIST_COMPLETE,
                        onReady: t.JWPLAYER_READY,
                        onResize: t.JWPLAYER_RESIZE,
                        onComplete: t.JWPLAYER_MEDIA_COMPLETE,
                        onSeek: t.JWPLAYER_MEDIA_SEEK,
                        onTime: t.JWPLAYER_MEDIA_TIME,
                        onVolume: t.JWPLAYER_MEDIA_VOLUME,
                        onBeforePlay: t.JWPLAYER_MEDIA_BEFOREPLAY,
                        onBeforeComplete: t.JWPLAYER_MEDIA_BEFORECOMPLETE,
                        onDisplayClick: t.JWPLAYER_DISPLAY_CLICK,
                        onControls: t.JWPLAYER_CONTROLS,
                        onQualityLevels: t.JWPLAYER_MEDIA_LEVELS,
                        onQualityChange: t.JWPLAYER_MEDIA_LEVEL_CHANGED,
                        onCaptionsList: t.JWPLAYER_CAPTIONS_LIST,
                        onCaptionsChange: t.JWPLAYER_CAPTIONS_CHANGED,
                        onAdError: t.JWPLAYER_AD_ERROR,
                        onAdClick: t.JWPLAYER_AD_CLICK,
                        onAdImpression: t.JWPLAYER_AD_IMPRESSION,
                        onAdTime: t.JWPLAYER_AD_TIME,
                        onAdComplete: t.JWPLAYER_AD_COMPLETE,
                        onAdCompanions: t.JWPLAYER_AD_COMPANIONS,
                        onAdSkipped: t.JWPLAYER_AD_SKIPPED,
                        onAdPlay: t.JWPLAYER_AD_PLAY,
                        onAdPause: t.JWPLAYER_AD_PAUSE,
                        onAdMeta: t.JWPLAYER_AD_META,
                        onCast: t.JWPLAYER_CAST_SESSION,
                        onAudioTrackChange: t.JWPLAYER_AUDIO_TRACK_CHANGED,
                        onAudioTracks: t.JWPLAYER_AUDIO_TRACKS
                    },
                    o = {
                        onBuffer: "buffer",
                        onPause: "pause",
                        onPlay: "play",
                        onIdle: "idle"
                    };
                e.each(o, function(t, i) {
                    n[i] = e.partial(n.on, t, e)
                }), e.each(i, function(t, i) {
                    n[i] = e.partial(n.on, t, e)
                })
            }
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t) {
        window.addEventListener || (window.addEventListener = document.addEventListener = Element.prototype.addEventListener = Function.prototype.addEventListener = function(e, t) {
            this.attachEvent(e, t)
        }), window.removeEventListener || (window.removeEventListener = document.removeEventListener = Element.prototype.removeEventListener = Function.prototype.removeEventListener = function(e, t) {
            this.detachEvent(e, t)
        })
    }, function(e, t, n) {
        var i = n(161);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(167)(i, {})
    }, function(e, t, n) {
        t = e.exports = n(163)(), t.push([e.id, ".jwplayer,.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jw-media,.jwplayer{overflow:hidden}.jw-media.jw-media-show,.jw-preview{visibility:visible;opacity:1}.jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:'jw-icons';src:url(" + n(164) + ");font-weight:400;font-style:normal}@font-face{font-family:'jw-icons';src:url(" + n(164) + ") format('embedded-opentype'),url(" + n(162) + ") format('woff'),url(" + n(165) + ") format('truetype'),url(" + n(166) + ') format(\'svg\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-text,.jwplayer{font-family:Arial,Helvetica,sans-serif}.jw-icon-audio-tracks:before{content:"\\e600"}.jw-icon-buffer:before{content:"\\e601"}.jw-icon-cast:before{content:"\\e603"}.jw-icon-cast.jw-off:before{content:"\\e602"}.jw-icon-cc:before{content:"\\e605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\e606"}.jw-icon-error:before{content:"\\e607"}.jw-icon-fullscreen:before{content:"\\e608"}.jw-icon-fullscreen.jw-off:before{content:"\\e613"}.jw-icon-hd:before{content:"\\e60a"}.jw-rightlick-logo:before{content:"\\e60b"}.jw-icon-next:before{content:"\\e60c"}.jw-icon-pause:before{content:"\\e60d"}.jw-icon-play:before{content:"\\e60e"}.jw-icon-prev:before{content:"\\e60f"}.jw-icon-replay:before{content:"\\e610"}.jw-icon-volume:before{content:"\\e612"}.jw-icon-volume.jw-off:before{content:"\\e611"}.jw-icon-more:before{content:"\\e614"}.jw-icon-close:before{content:"\\e615"}.jw-icon-playlist:before{content:"\\e616"}.jwplayer{width:100%;font-size:16px;position:relative;min-height:0;box-sizing:border-box;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jw-controls,.jw-media,.jw-media video,.jw-overlays,.jw-preview{right:0;left:0;bottom:0;position:absolute;top:0;width:100%;height:100%}.jw-controls.jw-controls-disabled,.jw-instream,.jw-preview,.jwplayer .jw-aspect{display:none}.jwplayer .jw-swf,.jwplayer:focus{outline:0}.jwplayer:hover .jw-display-icon-container{background:#333;background-size:#333}.jw-media video{margin:auto;background:0 0}.jw-media video::-webkit-media-controls-start-playback-button{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0}.jw-text{height:1em;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-cast-screen,.jw-click,.jw-preview{width:100%;height:100%}.jw-plugin{position:absolute}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0}.jw-icon-playback:before{content:"\\e60e"}.jw-tab-focus:focus{outline:#0b7ef4 solid 2px}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-controlbar,.jw-display-icon-container,.jw-dock,.jw-logo,.jw-media,.jw-overlays>div,.jw-skip{pointer-events:all}.jw-click{position:absolute}.jw-preview{position:absolute;background:50% 50% no-repeat #000}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;margin-top:-1.75em;margin-right:auto;margin-left:auto;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;padding:.25em;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:\'jw-icons\';font-weight:400;background-color:transparent;font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon,.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{-webkit-font-smoothing:antialiased;font-style:normal;text-transform:none;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga"}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-cast{display:none}.jw-cast.jw-can-cast{display:inline-block}.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000 0,#000 18%,rgba(0,0,0,0) 100%);background:linear-gradient(to bottom,#000 0,#000 18%,rgba(0,0,0,0) 100%)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;width:75%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{display:inline-block;height:1em;position:relative}.jw-captions,.jw-slider-volume .jw-buffer{display:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{width:100%;height:.4em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:0}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:0}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-captions,.jw-overlay:after,.jw-rightclick,.jw-tooltip-time{position:absolute}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-captions{margin:0 auto;width:100%;left:0;bottom:1.75em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-rightclick{display:none;white-space:nowrap}.jw-rightclick.jw-open{display:block}.jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #d9dde6;padding-left:0}.jw-rightclick .jw-rightlick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #d9dde6}.jw-rightclick a{color:#000;text-decoration:none;padding:1em;display:block;font-size:.6875em}.jw-icon-tooltip.jw-hidden,.jw-logo .jw-flag-audio-player{display:none}.jw-rightclick li{background-color:#f2f3f6;border-bottom:1px solid #d9dde6}.jw-rightclick li:last-child{border-bottom:none}.jw-rightclick li.jw-featured:hover,.jw-rightclick li:hover a{background-color:#e4e6ed;cursor:pointer;color:#ff0046}.jw-rightclick li.jw-featured{background-color:#fff;vertical-align:middle}.jw-rightclick li.jw-featured a{color:#aab4c8}.jw-logo{float:right;padding:.75em;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-flag-audio-player .jw-media,.jw-skip.jw-hidden{visibility:hidden}.jw-overlay:after{bottom:-.5em;left:-50%;width:100%;height:15%;background-color:transparent;content:" "}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;border:1px solid #000;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:4px solid #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid #000;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:#fff;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable,.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\e60c"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:#aaa;vertical-align:middle}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-idle .jw-preview{display:block}.jwplayer.jw-state-idle .jw-icon-display:before{content:"\\e60e"}.jwplayer.jw-state-idle .jw-captions,.jwplayer.jw-state-idle .jw-controlbar{display:none}.jwplayer.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text,.jwplayer.jw-state-paused .jw-display-icon-container,.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\e601"}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-captions,.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\e610"}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-error .jw-preview,.jwplayer.jw-state-error .jw-title,body .jw-error .jw-preview,body .jw-error .jw-title{display:block}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:\'jw-icons\';font-weight:400;background-color:transparent;font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\e607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-fullscreen.jw-flag-user-inactive{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jw-flag-user-inactive.jw-state-playing .jw-dock,.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jw-flag-audio-player{background-color:transparent}.jw-flag-audio-player .jw-controlbar{display:table;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;height:auto}.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-media-audio .jw-controlbar{display:table}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-ads.jw-flag-touch-screen .jw-controlbar{display:table}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-skin-beelden .jw-background-color{background:rgba(0,0,0,.5)}.jw-skin-beelden .jw-controlbar{background:-webkit-linear-gradient(top,#6c6c6c 0,#444 100%);background:linear-gradient(to bottom,#6c6c6c 0,#444 100%)}.jw-skin-beelden .jw-button-color,.jw-skin-beelden .jw-knob,.jw-skin-beelden .jw-text,.jw-skin-beelden .jw-tooltip-title{color:#c7c7c7}.jw-skin-beelden .jw-button-color:hover{color:#fff}.jw-skin-beelden .jw-option,.jw-skin-beelden .jw-toggle.jw-off{color:#c7c7c7}.jw-skin-beelden .jw-option.jw-active-option{color:#fff}.jw-skin-beelden .jw-icon-display{color:#c7c7c7}.jw-skin-beelden .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-beelden .jw-display-icon-container:hover{background:#6c6c6c}.jw-skin-beelden .jw-display-icon-container:hover .jw-icon-display{color:#fff}.jw-skin-beelden .jw-rail{background:-webkit-linear-gradient(top,#353535 0,#434343 100%);background:linear-gradient(to bottom,#353535 0,#434343 100%)}.jw-skin-beelden .jw-buffer{background:-webkit-linear-gradient(top,#7d7d7d 0,#868686 100%);background:linear-gradient(to bottom,#7d7d7d 0,#868686 100%)}.jw-skin-beelden .jw-progress{background:-webkit-linear-gradient(top,#c93835 0,#b22021 50%,#803637 100%);background:linear-gradient(to bottom,#c93835 0,#b22021 50%,#803637 100%)}.jw-skin-beelden .jw-slider-horizontal .jw-knob{margin-left:-.325em}.jw-skin-beelden .jw-slider-vertical .jw-knob{margin-bottom:-.325em}.jw-skin-beelden .jw-menu,.jw-skin-beelden .jw-time-tip,.jw-skin-beelden .jw-volume-tip{background:rgba(0,0,0,.5);border:1px solid #000;padding:.4em}.jw-skin-beelden .jw-dock-button .jw-text,.jw-skin-beelden .jw-time-tip .jw-text{color:#bbb}.jw-skin-beelden .jw-time-tip{bottom:1em}.jw-skin-beelden .jw-dock-button{background:rgba(0,0,0,.5);border-radius:.5em}.jw-skin-beelden .jw-dock-button:hover{background:#6c6c6c}.jw-skin-beelden .jw-playlist-container{padding:0}.jw-skin-beelden .jw-icon-inline,.jw-skin-beelden .jw-icon-tooltip,.jw-skin-beelden .jw-text-duration,.jw-skin-beelden .jw-text-elapsed{padding:0 .25em}.jw-skin-beelden .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;box-shadow:inset 0 7px 1px -5px grey;border-radius:.3em}.jw-skin-beelden.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-beelden .jw-icon-playback{padding-left:0}.jw-skin-beelden .jw-icon-playback:before{background-color:#333;background:-webkit-linear-gradient(top,#333,#333 50%,#2e2e2e 50%,#2e2e2e);background:linear-gradient(to bottom,#333,#333 50%,#2e2e2e 50%,#2e2e2e);background-size:100% 2px;border-radius:.3em;padding:.2em .7em;box-shadow:inset 0 0 1px 0 rgba(0,0,0,.6);border:1px solid #000;box-sizing:border-box}.jw-skin-beelden.jw-state-playing .jw-icon-playback:before{padding-right:.8em}.jw-skin-beelden .jw-playlist-container{left:-45%;background-color:#282828;bottom:.5em}.jw-skin-beelden .jw-playlist-container .jw-option{border-bottom:1px solid #000;background-color:#282828;color:#b6b6b6}.jw-skin-beelden .jw-playlist-container .jw-option.jw-active-option,.jw-skin-beelden .jw-playlist-container .jw-option:hover{color:#c93835;background-color:#000}.jw-skin-beelden .jw-playlist-container ::-webkit-scrollbar-track{background-color:#000}.jw-skin-beelden .jw-playlist-container ::-webkit-scrollbar{border:10px solid #282828;border-radius:.25em}.jw-skin-beelden .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#b6b6b6}.jw-skin-beelden .jw-tooltip-title{border-bottom:1px solid #000;background-color:#282828}.jw-skin-beelden .jw-buffer,.jw-skin-beelden .jw-progress,.jw-skin-beelden .jw-rail{border-radius:.5em;border:1px solid #000}.jw-skin-beelden .jw-rail{background-color:#353535}.jw-skin-beelden .jw-progress{background-color:#c93835}.jw-skin-beelden .jw-buffer{background-color:#7d7d7d;box-shadow:inset 0 -2px 4px -1px rgba(255,255,255,.5)}.jw-skin-beelden .jw-knob{background-color:#bbb5b7;box-shadow:inset 0 0 5px 0 rgba(255,255,255,.5);border:1px solid #000;border-radius:50%}.jw-skin-beelden .jw-slider-horizontal{background:0 0}.jw-skin-beelden .jw-slider-horizontal .jw-slider-container{top:-.75em;height:.4em}.jw-skin-beelden .jw-slider-horizontal .jw-buffer,.jw-skin-beelden .jw-slider-horizontal .jw-progress,.jw-skin-beelden .jw-slider-horizontal .jw-rail{height:.5em}.jw-skin-beelden .jw-slider-horizontal .jw-cue{top:.15em;background-color:#fff;width:.2em;height:.2em;border-radius:1em}.jw-skin-beelden .jw-slider-horizontal .jw-knob{top:-.15em;box-sizing:border-box;width:.8em;height:.8em}.jw-skin-beelden .jw-slider-vertical{bottom:5px}.jw-skin-beelden .jw-slider-vertical .jw-progress,.jw-skin-beelden .jw-slider-vertical .jw-rail{width:.4em}.jw-skin-beelden .jw-slider-vertical .jw-rail{background:rgba(0,0,0,.5)}.jw-skin-beelden .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#c93835 0,#b22021 50%,#803637 100%);background:linear-gradient(to right,#c93835 0,#b22021 50%,#803637 100%)}.jw-skin-beelden .jw-slider-vertical .jw-knob{width:.7em;height:.7em}.jw-skin-beelden .jw-display-icon-container{border:1px solid #000;box-shadow:inset 0 0 2px 1px rgba(255,255,255,.3)}.jw-skin-beelden .jw-dock-button,.jw-skin-beelden .jw-menu,.jw-skin-beelden .jw-time-tip,.jw-skin-beelden .jw-volume-tip{border-radius:.25em}.jw-skin-beelden .jw-toggle{color:#fff}.jw-skin-beelden .jw-toggle.jw-off{color:#7d7d7d}.jw-skin-bekle .jw-background-color{background:-webkit-linear-gradient(top,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to bottom,#323b4c,#2f3847 50%,#323b4c 100%)}.jw-skin-bekle .jw-controlbar{background:rgba(24,35,53,.8)}.jw-skin-bekle .jw-button-color,.jw-skin-bekle .jw-knob,.jw-skin-bekle .jw-text,.jw-skin-bekle .jw-tooltip-title{color:#fff}.jw-skin-bekle .jw-button-color:hover,.jw-skin-bekle .jw-toggle{color:#139ed5}.jw-skin-bekle .jw-option,.jw-skin-bekle .jw-toggle.jw-off{color:#fff}.jw-skin-bekle .jw-option.jw-active-option{color:#139ed5}.jw-skin-bekle .jw-display-icon-container:hover .jw-icon-display,.jw-skin-bekle .jw-icon-display{color:#fff}.jw-skin-bekle .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-bekle .jw-display-icon-container:hover{background:#139ed5}.jw-skin-bekle .jw-rail{background:-webkit-linear-gradient(top,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to bottom,#323b4c,#2f3847 50%,#323b4c 100%)}.jw-skin-bekle .jw-buffer{background:-webkit-linear-gradient(top,#5e6575,#565e6b 50%,#5e6575 100%);background:linear-gradient(to bottom,#5e6575,#565e6b 50%,#5e6575 100%)}.jw-skin-bekle .jw-progress{background:-webkit-linear-gradient(top,#15b2f0,#149bd1 50%,#15b2f0 100%);background:linear-gradient(to bottom,#15b2f0,#149bd1 50%,#15b2f0 100%)}.jw-skin-bekle .jw-slider-horizontal .jw-knob{margin-left:-.325em}.jw-skin-bekle .jw-slider-vertical .jw-knob{margin-bottom:-.325em}.jw-skin-bekle .jw-menu,.jw-skin-bekle .jw-time-tip,.jw-skin-bekle .jw-volume-tip{background:rgba(80,88,99,.9);border:0;padding:.5em}.jw-skin-bekle .jw-dock-button .jw-text,.jw-skin-bekle .jw-time-tip .jw-text{color:#bbb}.jw-skin-bekle .jw-time-tip{bottom:1em}.jw-skin-bekle .jw-dock-button{background:-webkit-linear-gradient(top,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to bottom,#323b4c,#2f3847 50%,#323b4c 100%);border-radius:.5em}.jw-skin-bekle .jw-dock-button:hover{background:#139ed5}.jw-skin-bekle .jw-playlist-container{padding:0}.jw-skin-bekle .jw-icon-inline,.jw-skin-bekle .jw-icon-tooltip,.jw-skin-bekle .jw-text-duration,.jw-skin-bekle .jw-text-elapsed{padding:0 .25em}.jw-skin-bekle .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;border-radius:.3em}.jw-skin-bekle.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-bekle .jw-playlist-container{left:-42%;overflow:hidden;bottom:.2em}.jw-skin-bekle .jw-playlist-container .jw-option{border-bottom:1px solid rgba(24,35,53,.8)}.jw-skin-bekle .jw-playlist-container .jw-option.jw-active-option,.jw-skin-bekle .jw-playlist-container .jw-option:hover{background-color:rgba(24,35,53,.8);color:#139ed5}.jw-skin-bekle .jw-playlist-container ::-webkit-scrollbar-track{background-color:#222c37}.jw-skin-bekle .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid rgba(24,35,53,.8);border-radius:.3em}.jw-skin-bekle .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff}.jw-skin-bekle .jw-tooltip-title{border-bottom:1px solid rgba(24,35,53,.8);background-color:rgba(24,35,53,.8)}.jw-skin-bekle .jw-slider-horizontal .jw-buffer,.jw-skin-bekle .jw-slider-horizontal .jw-progress,.jw-skin-bekle .jw-slider-horizontal .jw-rail,.jw-skin-bekle .jw-slider-vertical .jw-buffer,.jw-skin-bekle .jw-slider-vertical .jw-progress,.jw-skin-bekle .jw-slider-vertical .jw-rail{border-radius:.5em}.jw-skin-bekle .jw-slider-horizontal .jw-knob,.jw-skin-bekle .jw-slider-vertical .jw-knob{background-color:#fff;width:.7em;height:.7em;border-radius:50%}.jw-skin-bekle .jw-slider-horizontal{background:0 0}.jw-skin-bekle .jw-slider-horizontal .jw-buffer,.jw-skin-bekle .jw-slider-horizontal .jw-progress,.jw-skin-bekle .jw-slider-horizontal .jw-rail{height:.3em}.jw-skin-bekle .jw-slider-horizontal .jw-cue{top:.05em;background-color:#fff;width:.2em;height:.2em;border-radius:1em}.jw-skin-bekle .jw-slider-horizontal .jw-knob{top:-.2em}.jw-skin-bekle .jw-slider-vertical .jw-progress,.jw-skin-bekle .jw-slider-vertical .jw-rail{width:.3em}.jw-skin-bekle .jw-slider-vertical .jw-rail{background:-webkit-linear-gradient(left,#323b4c,#2f3847 50%,#323b4c 100%);background:linear-gradient(to right,#323b4c,#2f3847 50%,#323b4c 100%)}.jw-skin-bekle .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#15b2f0,#149bd1 50%,#15b2f0 100%);background:linear-gradient(to right,#15b2f0,#149bd1 50%,#15b2f0 100%)}.jw-skin-bekle .jw-menu,.jw-skin-bekle .jw-time-tip,.jw-skin-bekle .jw-volume-tip{border-radius:.3em}.jw-skin-bekle .jw-menu,.jw-skin-bekle .jw-volume-tip{bottom:.2em}.jw-skin-five .jw-time-tip,.jw-skin-glow .jw-time-tip{bottom:1em}.jw-skin-five .jw-background-color{background:rgba(51,51,51,.7)}.jw-skin-five .jw-controlbar{background:rgba(238,238,238,.8)}.jw-skin-five .jw-button-color,.jw-skin-five .jw-knob,.jw-skin-five .jw-text,.jw-skin-five .jw-tooltip-title{color:#464646}.jw-skin-five .jw-button-color:hover,.jw-skin-five .jw-toggle{color:#000}.jw-skin-five .jw-option,.jw-skin-five .jw-toggle.jw-off{color:#464646}.jw-skin-five .jw-option.jw-active-option{color:#000}.jw-skin-five .jw-icon-display{color:rgba(238,238,238,.8)}.jw-skin-five .jw-display-icon-container{padding:.5em .75em}.jw-skin-five .jw-display-icon-container:hover{background:#333}.jw-skin-five .jw-display-icon-container:hover .jw-icon-display{color:#fff}.jw-skin-five .jw-dock-button .jw-text,.jw-skin-five .jw-option,.jw-skin-five .jw-time-tip .jw-text{color:#bbb}.jw-skin-five .jw-rail{background:#b8b6b7}.jw-skin-five .jw-buffer{background:#9c9a9d}.jw-skin-five .jw-progress{background:#000}.jw-skin-five .jw-menu,.jw-skin-five .jw-time-tip,.jw-skin-five .jw-volume-tip{background:#333;border:0;padding:.5em}.jw-skin-five .jw-dock-button{background:rgba(51,51,51,.7)}.jw-skin-five .jw-dock-button:hover{background:#333}.jw-skin-five .jw-playlist-container{padding:0;left:-42%;background-color:#fff}.jw-skin-five .jw-icon-inline,.jw-skin-five .jw-icon-tooltip,.jw-skin-five .jw-text-duration,.jw-skin-five .jw-text-elapsed{padding:0 .25em}.jw-skin-five .jw-display-icon-container{border-radius:0}.jw-skin-five .jw-option.jw-active-option,.jw-skin-five .jw-option:hover{color:#fff}.jw-skin-five .jw-playlist{width:calc(100% - 8px)}.jw-skin-five .jw-playlist-container .jw-option{border-bottom:1px solid #ececec;background-color:#fff;margin-right:8px;color:#464646}.jw-skin-five .jw-playlist-container .jw-option.jw-active-option,.jw-skin-five .jw-playlist-container .jw-option:hover{background-color:#ececec;color:#000}.jw-skin-five .jw-playlist-container .jw-label .jw-icon-play,.jw-skin-five .jw-playlist-container .jw-option:hover{color:#000}.jw-skin-glow .jw-button-color,.jw-skin-glow .jw-button-color:hover,.jw-skin-glow .jw-display-icon-container:hover .jw-icon-display,.jw-skin-glow .jw-icon-display,.jw-skin-glow .jw-knob,.jw-skin-glow .jw-option,.jw-skin-glow .jw-option.jw-active-option,.jw-skin-glow .jw-text,.jw-skin-glow .jw-toggle,.jw-skin-glow .jw-toggle.jw-off,.jw-skin-glow .jw-tooltip-title{color:#fff}.jw-skin-five .jw-playlist-container ::-webkit-scrollbar-track{background-color:#ececec}.jw-skin-five .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid #fff}.jw-skin-five .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#000}.jw-skin-five .jw-tooltip-title{border-bottom:1px solid #000;background-color:#ececec}.jw-skin-five .jw-slider-horizontal{background:0 0}.jw-skin-five .jw-slider-horizontal .jw-slider-container{height:.9em}.jw-skin-five .jw-slider-horizontal .jw-buffer,.jw-skin-five .jw-slider-horizontal .jw-progress,.jw-skin-five .jw-slider-horizontal .jw-rail{height:.2em;border-radius:0}.jw-skin-five .jw-slider-horizontal .jw-rail{box-shadow:none}.jw-skin-five .jw-slider-horizontal .jw-knob{top:-.4em;margin:0;background-color:#000;border-radius:0;width:1px;height:1em}.jw-skin-five .jw-slider-horizontal .jw-cue{top:-.1em;width:.1em;height:.4em;background-color:#000;border-left:1px solid #fff;border-right:1px solid #fff}.jw-skin-five .jw-slider-vertical .jw-progress,.jw-skin-five .jw-slider-vertical .jw-rail{width:.2em}.jw-skin-five .jw-slider-vertical .jw-progress{background:#fff}.jw-skin-five .jw-slider-vertical .jw-rail{background:#737373}.jw-skin-five .jw-slider-vertical .jw-knob{margin-bottom:-1px;background:-webkit-linear-gradient(top,#fff 0,#fff 30%,#333 100%);background:linear-gradient(to bottom,#fff 0,#fff 30%,#333 100%);border-radius:0;height:2px;width:100%}.jw-skin-five .jw-dock-button{border-radius:0}.jw-skin-glow .jw-background-color{background:#333}.jw-skin-glow .jw-controlbar{background:rgba(19,20,21,.8)}.jw-skin-glow .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-glow .jw-display-icon-container:hover{background:#4d4d4d}.jw-skin-glow .jw-rail{background:#2a2c2e}.jw-skin-glow .jw-buffer{background:#3b3d41}.jw-skin-glow .jw-progress{background:#fff}.jw-skin-glow .jw-slider-horizontal .jw-knob{margin-left:-.325em}.jw-skin-glow .jw-slider-vertical .jw-knob{margin-bottom:-.325em}.jw-skin-glow .jw-menu,.jw-skin-glow .jw-time-tip,.jw-skin-glow .jw-volume-tip{background:#333;border:0;padding:.5em}.jw-skin-glow .jw-dock-button .jw-text,.jw-skin-glow .jw-time-tip .jw-text{color:#bbb}.jw-skin-glow .jw-dock-button{background:#333;border-radius:.5em}.jw-skin-glow .jw-dock-button:hover{background:#4d4d4d}.jw-skin-glow .jw-playlist-container{padding:0}.jw-skin-glow .jw-icon-inline,.jw-skin-glow .jw-icon-tooltip,.jw-skin-glow .jw-text-duration,.jw-skin-glow .jw-text-elapsed{padding:0 .25em}.jw-skin-glow .jw-menu,.jw-skin-glow .jw-time-tip,.jw-skin-glow .jw-volume-tip{border-radius:.25em}.jw-skin-glow .jw-menu,.jw-skin-glow .jw-volume-tip{bottom:.3em}.jw-skin-glow .jw-playlist-container{left:-42%;bottom:0;border-radius:0}.jw-skin-glow .jw-playlist-container .jw-option{border-bottom:1px solid #000;color:#fff}.jw-skin-glow .jw-playlist-container .jw-option.jw-active-option,.jw-skin-glow .jw-playlist-container .jw-option:hover{background-color:rgba(19,20,21,.8);color:#fff}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar-track{background-color:#000}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar{border:10px solid #3b3d41}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff}.jw-skin-glow .jw-tooltip-title{border-bottom:1px solid #000;background-color:#3b3d41}.jw-skin-glow .jw-buffer,.jw-skin-glow .jw-progress,.jw-skin-glow .jw-rail{border-radius:.5em}.jw-skin-glow .jw-knob{display:none}.jw-skin-glow .jw-slider-horizontal{background:0 0}.jw-skin-glow .jw-slider-horizontal .jw-cue{top:.075em;background-color:#000;width:.25em;height:.25em;border-radius:1em}.jw-skin-glow .jw-slider-vertical{bottom:5px}.jw-skin-glow .jw-slider-vertical .jw-rail{background-color:#141516}.jw-skin-glow .jw-slider-vertical .jw-progress,.jw-skin-glow .jw-slider-vertical .jw-rail{width:.4em}.jw-skin-roundster .jw-background-color{background:#8490a0}.jw-skin-roundster .jw-controlbar{background:#dfe2e9}.jw-skin-roundster .jw-button-color,.jw-skin-roundster .jw-knob,.jw-skin-roundster .jw-text,.jw-skin-roundster .jw-tooltip-title{color:#8490a0}.jw-skin-roundster .jw-button-color:hover,.jw-skin-roundster .jw-toggle{color:#f15173}.jw-skin-roundster .jw-option,.jw-skin-roundster .jw-toggle.jw-off{color:#8490a0}.jw-skin-roundster .jw-option.jw-active-option{color:#f15173}.jw-skin-roundster .jw-icon-display{color:rgba(255,255,255,.5)}.jw-skin-roundster .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-roundster .jw-display-icon-container:hover{background:#f15173}.jw-skin-roundster .jw-display-icon-container:hover .jw-icon-display{color:#fff}.jw-skin-roundster .jw-rail{background:#878fa2}.jw-skin-roundster .jw-buffer{background:#9c9a9d}.jw-skin-roundster .jw-progress{background:#f15173}.jw-skin-roundster .jw-slider-horizontal{background:#dfe2e9}.jw-skin-roundster .jw-slider-horizontal .jw-knob{margin-left:-.45em}.jw-skin-roundster .jw-slider-vertical .jw-knob{margin-bottom:-.45em}.jw-skin-roundster .jw-menu,.jw-skin-roundster .jw-time-tip,.jw-skin-roundster .jw-volume-tip{background:#5c6373;border:0;padding:.5em}.jw-skin-roundster .jw-dock-button .jw-text,.jw-skin-roundster .jw-time-tip .jw-text{color:#bbb}.jw-skin-roundster .jw-time-tip{bottom:1em}.jw-skin-roundster .jw-dock-button{background:#8490a0;border-radius:.5em}.jw-skin-roundster .jw-dock-button:hover{background:#f15173}.jw-skin-roundster .jw-playlist-container{padding:0}.jw-skin-roundster .jw-icon-inline,.jw-skin-roundster .jw-icon-tooltip,.jw-skin-roundster .jw-text-duration,.jw-skin-roundster .jw-text-elapsed{padding:0 .25em}.jw-skin-roundster .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;border-radius:1em;padding:0 1em}.jw-skin-roundster.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-roundster .jw-playlist-container{left:-48%;background-color:#878fa2;border-radius:.3em;overflow:hidden}.jw-skin-roundster .jw-playlist-container .jw-icon,.jw-skin-roundster .jw-playlist-container .jw-option,.jw-skin-roundster .jw-playlist-container .jw-text{color:#cbd0da}.jw-skin-roundster .jw-playlist-container .jw-option{border-bottom:1px solid #747d92;background-color:#878fa2}.jw-skin-roundster .jw-playlist-container .jw-option.jw-active-option,.jw-skin-roundster .jw-playlist-container .jw-option:hover{background-color:#747d92;color:#fff}.jw-skin-roundster .jw-playlist-container .jw-label .jw-icon-play{color:#f15173}.jw-skin-roundster .jw-playlist-container ::-webkit-scrollbar-track{background-color:#747d92}.jw-skin-roundster .jw-playlist-container ::-webkit-scrollbar{border:10px solid #878fa2}.jw-skin-roundster .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff}.jw-skin-roundster .jw-tooltip-title{border-bottom:1px solid #747d92;background-color:#878fa2}.jw-skin-roundster .jw-buffer,.jw-skin-roundster .jw-progress,.jw-skin-roundster .jw-rail{border-radius:1em}.jw-skin-roundster .jw-knob{background-color:#fff;width:.9em;height:.9em;border-radius:50%;box-shadow:0 1px 5px 1px #868ea3}.jw-skin-roundster .jw-slider-horizontal .jw-cue{top:.075em;width:.25em;height:.25em;border-radius:50%;background-color:#fff}.jw-skin-roundster .jw-slider-horizontal .jw-knob{top:-.25em}.jw-skin-roundster .jw-slider-vertical .jw-rail{background-color:#434853}.jw-skin-stormtrooper .jw-background-color,.jw-skin-stormtrooper .jw-controlbar,.jw-skin-stormtrooper .jw-display-icon-container:hover,.jw-skin-stormtrooper .jw-rail{background:#2b3036}.jw-skin-roundster .jw-slider-vertical .jw-progress,.jw-skin-roundster .jw-slider-vertical .jw-rail{width:.4em}.jw-skin-roundster .jw-menu,.jw-skin-roundster .jw-time-tip,.jw-skin-roundster .jw-volume-tip{border-radius:.25em}.jw-skin-roundster .jw-menu,.jw-skin-roundster .jw-volume-tip{bottom:.3em}.jw-skin-roundster .jw-dock .jw-dock-button{border-radius:50%}.jw-skin-roundster .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-stormtrooper .jw-button-color,.jw-skin-stormtrooper .jw-knob,.jw-skin-stormtrooper .jw-text,.jw-skin-stormtrooper .jw-tooltip-title{color:#6d7a8b}.jw-skin-stormtrooper .jw-button-color:hover,.jw-skin-stormtrooper .jw-toggle{color:#35e5fc}.jw-skin-stormtrooper .jw-option,.jw-skin-stormtrooper .jw-toggle.jw-off{color:#6d7a8b}.jw-skin-stormtrooper .jw-option.jw-active-option{color:#35e5fc}.jw-skin-stormtrooper .jw-icon-display{color:#6d7a8b}.jw-skin-stormtrooper .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-stormtrooper .jw-display-icon-container:hover .jw-icon-display{color:#35e5fc}.jw-skin-stormtrooper .jw-buffer{background:#000}.jw-skin-stormtrooper .jw-progress{background:#35e5fc}.jw-skin-stormtrooper .jw-slider-horizontal{background:#2b3036}.jw-skin-stormtrooper .jw-menu,.jw-skin-stormtrooper .jw-time-tip,.jw-skin-stormtrooper .jw-volume-tip{background:#333;border:0;padding:.5em}.jw-skin-stormtrooper .jw-dock-button .jw-text,.jw-skin-stormtrooper .jw-time-tip .jw-text{color:#bbb}.jw-skin-stormtrooper .jw-time-tip{bottom:1em}.jw-skin-stormtrooper .jw-dock-button{background:#2b3036;border-radius:.5em}.jw-skin-stormtrooper .jw-dock-button:hover{background:#2b3036}.jw-skin-stormtrooper .jw-playlist-container{padding:0}.jw-skin-stormtrooper .jw-icon-inline,.jw-skin-stormtrooper .jw-icon-tooltip,.jw-skin-stormtrooper .jw-text-duration,.jw-skin-stormtrooper .jw-text-elapsed{padding:0 .25em}.jw-skin-stormtrooper .jw-menu,.jw-skin-stormtrooper .jw-time-tip,.jw-skin-stormtrooper .jw-volume-tip{border-radius:.25em}.jw-skin-stormtrooper .jw-menu,.jw-skin-stormtrooper .jw-volume-tip{bottom:.3em}.jw-skin-stormtrooper .jw-playlist-container{background-color:#6d7a8b;left:-42%;border-radius:0;bottom:0}.jw-skin-stormtrooper .jw-playlist-container .jw-icon,.jw-skin-stormtrooper .jw-playlist-container .jw-option,.jw-skin-stormtrooper .jw-playlist-container .jw-text{color:#cbd0da}.jw-skin-stormtrooper .jw-playlist-container .jw-option{border-bottom:1px solid #5b697a;background-color:#6d7a8b}.jw-skin-stormtrooper .jw-playlist-container .jw-option.jw-active-option,.jw-skin-stormtrooper .jw-playlist-container .jw-option:hover{background:#5b697a}.jw-skin-stormtrooper .jw-playlist-container ::-webkit-scrollbar-track{background-color:#5b697a}.jw-skin-stormtrooper .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid #6d7a8b}.jw-skin-stormtrooper .jw-playlist-container ::-webkit-scrollbar-thumb{background:-webkit-linear-gradient(left,#2b3036 0,#fff 50%,#2b3036 100%);background:linear-gradient(to right,#2b3036 0,#fff 50%,#2b3036 100%)}.jw-skin-stormtrooper .jw-tooltip-title{border-bottom:1px solid #5b697a;background-color:#2b3036}.jw-skin-stormtrooper .jw-buffer,.jw-skin-stormtrooper .jw-knob,.jw-skin-stormtrooper .jw-progress,.jw-skin-stormtrooper .jw-rail{box-sizing:border-box;border:1.5px solid #000;border-radius:2px}.jw-skin-stormtrooper .jw-knob,.jw-skin-stormtrooper .jw-progress{background:#2b3036}.jw-skin-stormtrooper .jw-slider-horizontal .jw-buffer,.jw-skin-stormtrooper .jw-slider-horizontal .jw-progress,.jw-skin-stormtrooper .jw-slider-horizontal .jw-rail{height:.3em}.jw-skin-stormtrooper .jw-slider-horizontal .jw-progress{background:-webkit-linear-gradient(top,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to bottom,#1389af 0,#36e4fc 50%,#1389af 100%)}.jw-skin-stormtrooper .jw-slider-horizontal .jw-knob{margin-left:-.05em;top:-.1em;background:-webkit-linear-gradient(left,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to right,#1389af 0,#36e4fc 50%,#1389af 100%);width:.3em;height:.5em;border-width:1px;border-radius:0}.jw-skin-stormtrooper .jw-slider-horizontal .jw-cue{top:-.05em;background-color:#6d7a8b;border:1px solid #000}.jw-skin-stormtrooper .jw-slider-vertical .jw-progress,.jw-skin-stormtrooper .jw-slider-vertical .jw-rail{width:.3em}.jw-skin-stormtrooper .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to right,#1389af 0,#36e4fc 50%,#1389af 100%)}.jw-skin-stormtrooper .jw-slider-vertical .jw-knob{margin-bottom:-.05em;background:-webkit-linear-gradient(top,#1389af 0,#36e4fc 50%,#1389af 100%);background:linear-gradient(to bottom,#1389af 0,#36e4fc 50%,#1389af 100%);height:.2em;width:.5em;border-width:1px}.jw-skin-stormtrooper .jw-icon-cc.jw-off:before{content:"\\e604"}.jw-skin-stormtrooper .jw-icon-hd.jw-off:before{content:"\\e609"}.jw-skin-vapor .jw-background-color{background:rgba(0,0,0,.5)}.jw-skin-vapor .jw-controlbar{background:rgba(255,255,255,.4)}.jw-skin-vapor .jw-button-color,.jw-skin-vapor .jw-knob,.jw-skin-vapor .jw-text,.jw-skin-vapor .jw-tooltip-title{color:rgba(0,0,0,.5)}.jw-skin-vapor .jw-button-color:hover,.jw-skin-vapor .jw-toggle{color:#fff}.jw-skin-vapor .jw-option,.jw-skin-vapor .jw-toggle.jw-off{color:rgba(0,0,0,.5)}.jw-skin-vapor .jw-option.jw-active-option{color:#fff}.jw-skin-vapor .jw-icon-display{color:rgba(255,255,255,.5)}.jw-skin-vapor .jw-display-icon-container{border-radius:.5em;padding:.5em .75em}.jw-skin-vapor .jw-display-icon-container:hover{background:#000}.jw-skin-vapor .jw-display-icon-container:hover .jw-icon-display{color:#0f9e60}.jw-skin-vapor .jw-rail{background:rgba(255,255,255,.4)}.jw-skin-vapor .jw-buffer{background:rgba(0,0,0,.5)}.jw-skin-vapor .jw-progress{background:#0f9e60}.jw-skin-vapor .jw-slider-horizontal{background:rgba(255,255,255,.4)}.jw-skin-vapor .jw-slider-vertical .jw-knob{margin-bottom:-.325em;display:none}.jw-skin-vapor .jw-menu,.jw-skin-vapor .jw-time-tip,.jw-skin-vapor .jw-volume-tip{background:rgba(0,0,0,.5);border:0;padding:.5em}.jw-skin-vapor .jw-dock-button .jw-text,.jw-skin-vapor .jw-time-tip .jw-text{color:#bbb}.jw-skin-vapor .jw-time-tip{bottom:1em}.jw-skin-vapor .jw-dock-button{background:rgba(0,0,0,.5);border-radius:.5em}.jw-skin-vapor .jw-dock-button:hover{background:#000}.jw-skin-vapor .jw-playlist-container{padding:0}.jw-skin-vapor .jw-icon-inline,.jw-skin-vapor .jw-icon-tooltip,.jw-skin-vapor .jw-text-duration,.jw-skin-vapor .jw-text-elapsed{padding:0 .25em}.jw-skin-vapor .jw-menu,.jw-skin-vapor .jw-time-tip,.jw-skin-vapor .jw-volume-tip{border-radius:.25em;bottom:.3em}.jw-skin-vapor .jw-option{color:#fff}.jw-skin-vapor .jw-option.jw-active-option,.jw-skin-vapor .jw-option:hover{color:#0f9e60}.jw-skin-vapor .jw-playlist-container{left:-42%;bottom:0;border-radius:0;background-color:#1e1e1e}.jw-skin-vapor .jw-playlist-container .jw-icon,.jw-skin-vapor .jw-playlist-container .jw-option,.jw-skin-vapor .jw-playlist-container .jw-text{color:#a0a0a0}.jw-skin-vapor .jw-playlist-container .jw-option{border-bottom:1px solid #000;background-color:#1e1e1e;color:#a8a8a8}.jw-skin-vapor .jw-playlist-container .jw-option.jw-active-option,.jw-skin-vapor .jw-playlist-container .jw-option:hover{color:#0f9e60}.jw-skin-vapor .jw-playlist-container ::-webkit-scrollbar-track{background-color:#000}.jw-skin-vapor .jw-playlist-container ::-webkit-scrollbar{width:2px;border:10px solid #1e1e1e}.jw-skin-vapor .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#a0a0a0}.jw-skin-vapor .jw-tooltip-title{border-bottom:1px solid #000;background-color:#1e1e1e}.jw-skin-vapor .jw-slider-horizontal,.jw-skin-vapor .jw-slider-horizontal .jw-buffer,.jw-skin-vapor .jw-slider-horizontal .jw-progress,.jw-skin-vapor .jw-slider-horizontal .jw-rail,.jw-skin-vapor .jw-slider-horizontal .jw-slider-container{height:100%}.jw-skin-vapor .jw-slider-horizontal .jw-cue,.jw-skin-vapor .jw-slider-horizontal .jw-knob{height:2em}.jw-skin-vapor .jw-slider-horizontal .jw-knob{margin-left:0;background-color:#fff;width:.2em}.jw-skin-vapor .jw-slider-horizontal .jw-cue{top:.67em;background:rgba(255,255,255,.5);height:.66em}.jw-skin-vapor .jw-slider-vertical{padding:.4em;bottom:3px;border-radius:2px;border:0}.jw-skin-vapor .jw-slider-vertical .jw-rail{background-color:rgba(0,0,0,.8)}.jw-skin-vapor .jw-slider-vertical .jw-progress,.jw-skin-vapor .jw-slider-vertical .jw-rail{width:.5em;border:1px solid #000}.jw-skin-vapor .jw-icon-cc.jw-off:before{content:"\\e604"}.jw-skin-vapor .jw-icon-hd.jw-off:before{content:"\\e609"}.jw-skin-vapor.jw-flag-audio-player .jw-controlbar{background:rgba(0,0,0,.5)}.jw-skin-six .jw-background-color{background:#333}.jw-skin-six .jw-controlbar{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-button-color,.jw-skin-six .jw-knob,.jw-skin-six .jw-text,.jw-skin-six .jw-tooltip-title{color:#aaa}.jw-skin-six .jw-button-color:hover,.jw-skin-six .jw-toggle{color:#eee}.jw-skin-six .jw-option,.jw-skin-six .jw-toggle.jw-off{color:#aaa}.jw-skin-six .jw-option.jw-active-option{color:#eee}.jw-skin-six .jw-icon-display{color:#aaa}.jw-skin-six .jw-display-icon-container:hover{background:#4d4d4d}.jw-skin-six .jw-display-icon-container:hover .jw-icon-display{color:#eee}.jw-skin-six .jw-rail{background:#666}.jw-skin-six .jw-buffer{background:#202020}.jw-skin-six .jw-menu,.jw-skin-six .jw-slider-horizontal,.jw-skin-six .jw-time-tip,.jw-skin-six .jw-volume-tip{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-slider-horizontal{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-slider-horizontal .jw-knob{margin-left:-.4em;top:-.075em}.jw-skin-six .jw-slider-vertical .jw-knob{margin-bottom:-.4em}.jw-skin-six .jw-menu,.jw-skin-six .jw-time-tip,.jw-skin-six .jw-volume-tip{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);border:1px solid #000;padding:.5em}.jw-skin-six .jw-dock-button .jw-text,.jw-skin-six .jw-time-tip .jw-text{color:#bbb}.jw-skin-six .jw-time-tip{bottom:1em}.jw-skin-six .jw-dock-button{background:#333;border-radius:.5em}.jw-skin-six .jw-dock-button:hover{background:#4d4d4d}.jw-skin-six .jw-playlist-container{padding:0;left:-41%}.jw-skin-six .jw-icon-inline,.jw-skin-six .jw-icon-tooltip,.jw-skin-six .jw-text-duration,.jw-skin-six .jw-text-elapsed{padding:0 .25em}.jw-skin-six .jw-background-color{background-color:#444}.jw-skin-six .jw-controlbar{display:block;margin:0 auto;max-width:96%;bottom:.7em;border:1px solid #000;border-radius:.3em;background-size:100% 100%}.jw-skin-six.jw-flag-audio-player .jw-controlbar{bottom:0}.jw-skin-six .jw-controlbar .jw-overlay{bottom:2.25em}.jw-skin-six .jw-display-icon-container{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background:linear-gradient(0deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background-size:100% 100%;border-radius:.3em;padding:0 1em;border:1px solid #000}.jw-skin-six:hover .jw-display-icon-container{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background-size:100% 100%}.jw-skin-six .jw-option{text-align:left}.jw-skin-six .jw-option:before{content:"\\e606";font-size:.4em;vertical-align:middle;margin-right:.4em}.jw-skin-six .jw-playlist-container .jw-icon,.jw-skin-six .jw-playlist-container .jw-text{color:#eee}.jw-skin-six .jw-playlist-container .jw-option{border-bottom:1px solid #2f2f31;color:#878787}.jw-skin-six .jw-playlist-container .jw-option:before{content:""}.jw-skin-six .jw-playlist-container .jw-option.jw-active-option,.jw-skin-six .jw-playlist-container .jw-option:hover{background-color:#2f2f31;color:#fff}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play,.jw-skin-seven .jw-playlist-container .jw-option:hover .jw-label{color:#ff0046}.jw-skin-six .jw-playlist-container ::-webkit-scrollbar{border-radius:.25em}.jw-skin-six .jw-playlist-container ::-webkit-scrollbar-track{background-color:#3c3c3e}.jw-skin-six .jw-playlist-container ::-webkit-scrollbar-thumb{background:-webkit-linear-gradient(left,#fff 0,#ccc 50%,#fff 100%);background:linear-gradient(to right,#fff 0,#ccc 50%,#fff 100%)}.jw-skin-six .jw-buffer,.jw-skin-six .jw-progress,.jw-skin-six .jw-rail{border-radius:.5em;border:1px solid #000}.jw-skin-six .jw-progress{background:-webkit-linear-gradient(top,#fff 0,#ccc 50%,#fff 100%);background:linear-gradient(to bottom,#fff 0,#ccc 50%,#fff 100%)}.jw-skin-six .jw-rail{box-shadow:inset 0 3px 10px 1px rgba(51,51,51,.85)}.jw-skin-six .jw-knob{width:.8em;height:.8em;border-radius:1em;background:-webkit-radial-gradient(center,ellipse,#f3f3f3 0,#d2d2d2 90%,#b0b0b0 100%);background:radial-gradient(ellipse at center,#f3f3f3 0,#d2d2d2 90%,#b0b0b0 100%);box-shadow:0 1px 10px 1px rgba(0,0,0,.75)}.jw-skin-six .jw-slider-horizontal .jw-slider-container{height:1.2em}.jw-skin-six .jw-slider-horizontal .jw-buffer,.jw-skin-six .jw-slider-horizontal .jw-progress,.jw-skin-six .jw-slider-horizontal .jw-rail{height:.65em}.jw-skin-six .jw-slider-horizontal .jw-progress{border-radius:.5em 0 0 .5em}.jw-skin-six .jw-slider-horizontal .jw-buffer,.jw-skin-six .jw-slider-horizontal .jw-progress{border:1px solid #000;border-style:solid none #000}.jw-skin-six .jw-slider-horizontal .jw-cue{top:.2em;width:.25em;height:.25em;background-color:#616164;border-radius:50%;box-shadow:0 0 0 1px rgba(0,0,0,.75)}.jw-skin-six .jw-slider-vertical .jw-progress,.jw-skin-six .jw-slider-vertical .jw-rail{width:.65em}.jw-skin-six .jw-slider-vertical .jw-progress{background:-webkit-linear-gradient(left,#fff 0,#ccc 50%,#fff 100%);background:linear-gradient(to right,#fff 0,#ccc 50%,#fff 100%);border-radius:0 0 .5em .5em}.jw-skin-six .jw-menu,.jw-skin-six .jw-time-tip,.jw-skin-six .jw-volume-tip{background-size:100% 100%;border-radius:.25em}.jw-skin-six .jw-dock .jw-dock-button{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background:linear-gradient(0deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background-size:100% 100%;border-radius:.25em}.jw-skin-six .jw-dock .jw-dock-button .jw-overlay,.jw-skin-six .jw-dock .jw-dock-button:hover{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-dock .jw-dock-button:hover{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%)}.jw-skin-six .jw-dock .jw-dock-button .jw-overlay{background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background-size:100% 100%;border-radius:.25em}.jw-skin-six .jw-skip{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background:linear-gradient(0deg,rgba(73,73,75,.85) 0,rgba(69,69,71,.9) 3%,rgba(63,63,65,.9) 7%,rgba(62,62,64,.9) 10%,rgba(58,58,61,.9) 59%,rgba(52,52,55,.9) 97%,rgba(52,52,55,.85) 100%);background-size:100% 100%;border-radius:.5em;padding:.25em .5em}.jw-skin-six .jw-skip:hover{background:-webkit-linear-gradient(90deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background:linear-gradient(0deg,rgba(73,73,75,.87) 0,#454547 3%,#3f3f41 7%,#3e3e40 10%,#3a3a3d 59%,#343437 97%,rgba(52,52,55,.87) 100%);background-size:100% 100%}.jw-skin-seven .jw-background-color{background:#000}.jw-skin-seven .jw-controlbar{border-top:#333 1px solid;height:2.5em}.jw-skin-seven .jw-group{vertical-align:middle}.jw-skin-seven .jw-playlist{background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container{left:-43%;background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container .jw-option{border-bottom:1px solid #444}.jw-skin-seven .jw-playlist-container .jw-option.jw-active-option,.jw-skin-seven .jw-playlist-container .jw-option:hover{background-color:#000}.jw-skin-seven .jw-playlist-container .jw-icon-playlist{margin-left:0}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play:before{padding-left:0}.jw-skin-seven .jw-tooltip-title{background-color:#000;color:#fff}.jw-skin-seven .jw-button-color,.jw-skin-seven .jw-text{color:#fff}.jw-skin-seven .jw-button-color:hover,.jw-skin-seven .jw-toggle{color:#ff0046}.jw-skin-seven .jw-icon-display,.jw-skin-seven .jw-toggle.jw-off{color:#fff}.jw-skin-seven .jw-controlbar .jw-icon:before,.jw-skin-seven .jw-text-duration,.jw-skin-seven .jw-text-elapsed{padding:0 .7em}.jw-skin-seven .jw-controlbar .jw-icon-playlist:before{padding:0}.jw-skin-seven .jw-icon-next,.jw-skin-seven .jw-icon-prev{font-size:.7em}.jw-skin-seven .jw-icon-prev:before{border-left:1px solid #666}.jw-skin-seven .jw-icon-next:before{border-right:1px solid #666}.jw-skin-seven .jw-icon-display:before{padding-left:0}.jw-skin-seven .jw-display-icon-container{border-radius:50%;padding:0 .3em;border:1px solid #333}.jw-skin-seven.jw-state-idle .jw-display-icon-container{padding:0 0 0 .5em}.jw-skin-seven .jw-rail{background-color:#384154;box-shadow:none}.jw-skin-seven .jw-buffer{background-color:#666f82}.jw-skin-seven .jw-progress{background:#ff0046}.jw-skin-seven .jw-knob{width:.6em;height:.6em;background-color:#fff;box-shadow:0 0 0 1px #000;border-radius:1em}.jw-skin-seven .jw-slider-horizontal .jw-slider-container{height:.95em}.jw-skin-seven .jw-slider-horizontal .jw-buffer,.jw-skin-seven .jw-slider-horizontal .jw-progress,.jw-skin-seven .jw-slider-horizontal .jw-rail{height:.2em;border-radius:0}.jw-skin-seven .jw-slider-horizontal .jw-knob{top:-.2em}.jw-skin-seven .jw-slider-horizontal .jw-cue{top:-.05em;width:.3em;height:.3em;background-color:#fff;border-radius:50%}.jw-skin-seven .jw-slider-vertical .jw-buffer,.jw-skin-seven .jw-slider-vertical .jw-progress,.jw-skin-seven .jw-slider-vertical .jw-rail{width:.2em}.jw-skin-seven .jw-volume-tip{width:100%;left:-45%;padding-bottom:.7em}.jw-skin-seven .jw-text-duration{color:#666f82}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:before,.jw-skin-seven .jw-controlbar-right-group .jw-icon-tooltip:before{border-left:1px solid #666}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:first-child:before{border:none}.jw-skin-seven .jw-dock .jw-dock-button{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-seven .jw-icon-tooltip .jw-active-option{background-color:#ff0046;color:#fff}.jw-skin-seven .jw-icon-volume{min-width:2.6em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-skip,.jw-skin-seven .jw-time-tip,.jw-skin-seven .jw-volume-tip{border:1px solid #333}.jw-skin-seven .jw-time-tip{padding:.2em;bottom:1.3em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip{bottom:.24em}.jw-skin-seven .jw-skip{padding:.4em;border-radius:1em}.jw-skin-seven .jw-skip .jw-icon-inline,.jw-skin-seven .jw-skip .jw-text{color:#fff;font-size:.7em}', ""]);
    }, function(e, t) {
        e.exports = "data:application/font-woff;base64,d09GRgABAAAAABQ4AAsAAAAAE+wAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxID2WNtYXAAAAFoAAAAVAAAAFQaVsydZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAD3AAAA9wKFaHg2hlYWQAABE0AAAANgAAADYIGEIZaGhlYQAAEWwAAAAkAAAAJAmCBdxobXR4AAARkAAAAGwAAABscmAG/WxvY2EAABH8AAAAOAAAADg2EDnwbWF4cAAAEjQAAAAgAAAAIAAiANFuYW1lAAASVAAAAcIAAAHCwZOZtHBvc3QAABQYAAAAIAAAACAAAwAAAAMEmQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5hYDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOYW//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABABgAAAFoAOAADoAPwBEAEkAACUVIi4CNTQ2Ny4BNTQ+AjMyHgIVFAYHHgEVFA4CIxEyFhc+ATU0LgIjIg4CFRQWFz4BMxExARUhNSEXFSE1IRcVITUhAUAuUj0jCgoKCkZ6o11do3pGCgoKCiM9Ui4qSh4BAjpmiE1NiGY6AQIeSioCVQIL/fWWAXX+i0oBK/7VHh4jPVIuGS4VH0MiXaN6RkZ6o10iQx8VLhkuUj0jAcAdGQ0bDk2IZjo6ZohNDhsNGR3+XgNilZXglZXglZUAAAABAEAAAAPAA4AAIQAAExQeAjMyPgI1MxQOAiMiLgI1ND4CMxUiDgIVMYs6ZohNTYhmOktGeqNdXaN6RkZ6o11NiGY6AcBNiGY6OmaITV2jekZGeqNdXaN6Rks6ZohNAAAEAEAAAATAA4AADgAcACoAMQAAJS4BJyERIREuAScRIREhByMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAn8DBQQCDPxGCysLBDz9v1NaCERrjE9irINTCLVbByc6Sio9a1I1CLaBL0YMQgsoCgLB/ukDCgIBSPzCQk6HaEIIWAhQgKdgKUg5JgdYBzRRZzx9C0QuAAAAAAUAQAAABMADgAAOABkAJwA1ADwAACUuASchESERLgEnESERIQE1IREhLgMnMQEjLgMnNR4DFzErAS4DJzUeAxcxKwE1HgEXMQKAAgYFAg38QAwqCgRA/cD+gANA/iAYRVlsPgEtWghFa4xPYq2DUgmzWgcnO0oqPGpSNgm6gDBEDEAMKAwCwP7tAggDAUb8wAHQ8P3APWdUQRf98E2IaEIHWghQgKhgKUg4JgdaCDVRZzt9DEMuAAAEAEAAAAXAA4AABAAJAGcAxQAANxEhESEBIREhEQU+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzEhPgE3PgEzMhYXHgEXHgEXHgEXIy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNzMOAQcOAQcOAQcOASMiJicuAScuAScuATU0Njc+ATcxQAWA+oAFNvsUBOz8Iw4hExQsGBIhEA8cDQwUCAgLAlsBBQUECgYHDggIEAkQGgsLEgcHCgMDAwMDAwoHBxILCxoQFiEMDA8DWgIJBwgTDQwcERAkFBgsFBMhDg0VBwcHBwcHFQ0Bug0hFBMsGREhEBAcDAwVCAgKAloCBQQECwYGDggIEQgQGwsLEgcHCgMDAwMDAwoHBxILCxsQFSIMDA4DWwIJCAcUDAwdEBEkExksExQhDQ4UBwcICAcHFA4AA4D8gAM1/RYC6tcQGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDwAAAAADAEAAAAXAA4AAEABvAM4AACUhIiY1ETQ2MyEyFhURFAYjAT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEhPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5AQUs+6g9V1c9BFg9V1c9/JoDCgcGEgsLGxAJEAgIDgYHCgQEBgFaAgoICBQNDBwQDyESGCwUEyEODRUHBwcHBwcVDQ4hExQrGRQkEBAdDAwUCAcJAloDDwwMIhUQGwsLEgYHCgMEAwMEAbkDCgcHEgsLGxAIEQgHDwYGCwQEBQFbAgoICBUMDBwQECERGSwTFCENDhQHBwgIBwcUDg0hFBMsGRMkERAdDAwUBwgJAlsDDgwNIRUQGwsLEgcHCgMDAwMDAFc+AlY+V1c+/ao+VwH0DRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQ0YCgsQBgYGAgMDCAUFDAcHDgkTIQ4PGAoKDgYFBQkJCBgQDyQUFS0YFywUFCQPDxcJCAkGBgYSCwscEBEkFBYiDg0NBgYGEQoKFw0NGg4OGw0AAAABAOAAoAMgAuAAFAAAARQOAiMiLgI1ND4CMzIeAhUDIC1OaTw8aU4tLU5pPDxpTi0BwDxpTi0tTmk8PGlOLS1OaTwAAAMAQAAQBEADkAADABAAHwAANwkBISUyNjU0JiMiBhUUFjMTNCYjIgYVERQWMzI2NRFAAgACAPwAAgAOFRUODhUVDiMVDg4VFQ4OFRADgPyAcBYQDxgWERAWAeYPGBYR/tcPGBYRASkAAgBAAAADwAOAAAcADwAANxEXNxcHFyEBIREnByc3J0CAsI2wgP5zAfMBjYCwjbCAAAGNgLCNsIADgP5zgLCNsIAAAAAFAEAAAAXAA4AABAAJABYAMwBPAAA3ESERIQEhESERATM1MxEjNSMVIxEzFSUeARceARceARUUBgcOAQcOAQcOASsBETMeARcxBxEzMjY3PgE3PgE3PgE1NCYnLgEnLgEnLgErAUAFgPqABTb7FATs/FS2YGC2ZGQCXBQeDg8UBwcJBgcHEwwMIRMTLBuwsBYqE6BHCRcJChIIBw0FBQUEAwINBwcTDAwgETcAA4D8gAM2/RcC6f7Arf5AwMABwK2dBxQODyIWFTAbGC4TFiIPDhgKCQcBwAIHB0P+5gQDAg0HBxcMDCETER0PDhgKCQ8EBQUABAA9AAAFwAOAABAAHQA7AFkAACUhIiY1ETQ2MyEyFhURFAYjASMVIzUjETM1MxUzEQUuAScuAScuASsBETMyNjc+ATc+ATc+ATUuASc5AQcOAQcOASsBETMyFhceARceARceARUUBgcOAQc5AQUq+6k+WFg+BFc+WFg+/bNgs2Rks2ABsAcXDA4fExMnFrCwGywTEx4PDBMHBwYCCAl3CBIKCRQMRzcTHgwMEwcHCwQDBAUFBQ0HAFg+AlQ+WFg+/aw+WAKdra3+QMDAAcB9FiIODxQHBwb+QAkHCRgPDiUTFiwYHTAW4ggNAgMEAR8EBQUPCgoYDw4fERMfDwwXBwAAAAABAEMABgOgA3oAjwAAExQiNScwJic0JicuAQcOARUcARUeARceATc+ATc+ATE2MhUwFAcUFhceARceATMyNjc+ATc+ATc+AzE2MhUwDgIVFBYXHgEXFjY3PgE3PgE3PgE3PgM3PAE1NCYnJgYHDgMxBiI1MDwCNTQmJyYGBw4BBw4DMQYiNTAmJy4BJyYGBw4BMRWQBgQIBAgCBQ4KBwkDFgcHIQ8QDwcHNgUEAwMHBQsJChcMBQ0FBwsHDBMICR8cFQUFAwQDCAUHFRERJBEMEwgJEgUOGQwGMjgvBAkHDBYEAz1IPAQFLyQRIhEQFgoGIiUcBQUEAgMYKCcmCgcsAboFBQwYDwUKBwUEAgMNBwcLBxRrDhENBwggDxOTCgqdMBM1EQwTCAcFBAIFCgcPIw4UQ0IxCgpTc3glEyMREBgIBwEKBxUKESUQJ00mE6/JrA8FBgIHDQMECAkGla2PCQk1VGYxNTsHAgUKChwQC2BqVQoKehYfTwUDRx8TkAMAAAAAAgBGAAAENgOAAAQACAAAJREzESMJAhEDxnBw/IADgPyAAAOA/IADgP5A/kADgAAAAgCAAAADgAOAAAQACQAAJREhESEBIREhEQKAAQD/AP4AAQD/AAADgPyAA4D8gAOAAAAAAAEAQAAAA8ADgAADAAAJAREBA8D8gAOAAcD+QAOA/kAAAgBKAAAEOgOAAAQACAAANxEjETMJAhG6cHADgPyAA4AAA4D8gAOA/kD+QAOAAAAAAQBDAAADQwOAACkAAAEeARUUDgIjIi4CNTQ+AjM1DQE1Ig4CFRQeAjMyPgI1NCYnNwMNGhw8aYxPT4xoPT1ojE8BQP7APGlOLS1OaTw8aU4tFhNTAkMrYzVPjGg9PWiMT0+MaD2ArbOALU5pPDxpTi0tTmk8KUsfMAAAAAEAQABmAiADEwAGAAATETMlESUjQM0BE/7tzQEzARPN/VPNAAQAQAAABJADgAAXACsAOgBBAAAlJz4DNTQuAic3HgMVFA4CBzEvAT4BNTQmJzceAxUOAwcxJz4BNTQmJzceARUUBgcnBREzJRElIwPaKiY+KxcXKz4mKipDMBkZMEMqpCk5REQ5KSE0JBQBFCQzIcMiKCgiKiYwMCYq/c3NARP+7c0AIyheaXI8PHFpXikjK2ZyfEFBfHJmK4MjNZFUVJE1Ix5IUFgvL1lRRx2zFkgpK0YVIxxcNDVZHykDARPN/VPNAAACAEAAAAPDA4AABwAPAAABFyERFzcXBwEHJzcnIREnAypw/qlwl3mZ/iaWepZwAVdtAnNwAVdwlnqT/iOWepZw/qpsAAMAQAETBcACYAAMABkAJgAAARQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUhFAYjIiY1NDYzMhYVAY1iRUVhYUVFYgIWYUVFYmJFRWECHWFFRWJiRUVhAbpFYmJFRWFhRUViYkVFYWFFRWJiRUVhYUUAAAAAAQBmACYDmgNaACAAAAEXFhQHBiIvAQcGIicmND8BJyY0NzYyHwE3NjIXFhQPAQKj9yQkJGMd9vYkYx0kJPf3JCQkYx329iRjHSQk9wHA9iRjHSQk9/ckJCRjHfb2JGMdJCT39yQkJGMd9gAABgBEAAQDvAN8AAQACQAOABMAGAAdAAABIRUhNREhFSE1ESEVITUBMxUjNREzFSM1ETMVIzUBpwIV/esCFf3rAhX96/6dsrKysrKyA3xZWf6dWVn+nVlZAsaysv6dsrL+nbKyAAEAAAABGZqjMK4nXw889QALBAAAAAAA0Zzx+QAAAADRnPH5AAAAAAXAA5AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgAAAAAABcAAAQAAAAAAAAAAAAAAAAAAABsEAAAAAAAAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAABABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAZgQAAEQAAAAAAAoAFAAeAIgAuAEEAWAChgOyA9QECAQqBKQFJgXoBgAGGgYqBkIGgAaSBvQHFgdQB4YHuAABAAAAGwDPAAYAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIABwCNAAEAAAAAAAMADABFAAEAAAAAAAQADACiAAEAAAAAAAUACwAkAAEAAAAAAAYADABpAAEAAAAAAAoAGgDGAAMAAQQJAAEAGAAMAAMAAQQJAAIADgCUAAMAAQQJAAMAGABRAAMAAQQJAAQAGACuAAMAAQQJAAUAFgAvAAMAAQQJAAYAGAB1AAMAAQQJAAoANADganctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjEAVgBlAHIAcwBpAG8AbgAgADEALgAxanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
    }, function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (var o = 0; o < t.length; o++) {
                    var s = t[o];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                }
            }, e
        }
    }, function(e, t, n) {
        e.exports = n.p + "jw-icons.eot"
    }, function(e, t) {
        e.exports = "data:application/octet-stream;base64,AAEAAAALAIAAAwAwT1MvMg8SA9kAAAC8AAAAYGNtYXAaVsydAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZihWh4MAAAF4AAAPcGhlYWQIGEIZAAAQ6AAAADZoaGVhCYIF3AAAESAAAAAkaG10eHJgBv0AABFEAAAAbGxvY2E2EDnwAAARsAAAADhtYXhwACIA0QAAEegAAAAgbmFtZcGTmbQAABIIAAABwnBvc3QAAwAAAAATzAAAACAAAwSZAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmFgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg5hb//f//AAAAAAAg5gD//f//AAH/4xoEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAGAAAAWgA4AAOgA/AEQASQAAJRUiLgI1NDY3LgE1ND4CMzIeAhUUBgceARUUDgIjETIWFz4BNTQuAiMiDgIVFBYXPgEzETEBFSE1IRcVITUhFxUhNSEBQC5SPSMKCgoKRnqjXV2jekYKCgoKIz1SLipKHgECOmaITU2IZjoBAh5KKgJVAgv99ZYBdf6LSgEr/tUeHiM9Ui4ZLhUfQyJdo3pGRnqjXSJDHxUuGS5SPSMBwB0ZDRsOTYhmOjpmiE0OGw0ZHf5eA2KVleCVleCVlQAAAAEAQAAAA8ADgAAhAAATFB4CMzI+AjUzFA4CIyIuAjU0PgIzFSIOAhUxizpmiE1NiGY6S0Z6o11do3pGRnqjXU2IZjoBwE2IZjo6ZohNXaN6RkZ6o11do3pGSzpmiE0AAAQAQAAABMADgAAOABwAKgAxAAAlLgEnIREhES4BJxEhESEHIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECfwMFBAIM/EYLKwsEPP2/U1oIRGuMT2Ksg1MItVsHJzpKKj1rUjUItoEvRgxCCygKAsH+6QMKAgFI/MJCTodoQghYCFCAp2ApSDkmB1gHNFFnPH0LRC4AAAAABQBAAAAEwAOAAA4AGQAnADUAPAAAJS4BJyERIREuAScRIREhATUhESEuAycxASMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAoACBgUCDfxADCoKBED9wP6AA0D+IBhFWWw+AS1aCEVrjE9irYNSCbNaByc7Sio8alI2CbqAMEQMQAwoDALA/u0CCAMBRvzAAdDw/cA9Z1RBF/3wTYhoQgdaCFCAqGApSDgmB1oINVFnO30MQy4AAAQAQAAABcADgAAEAAkAZwDFAAA3ESERIQEhESERBT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MSE+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzFABYD6gAU2+xQE7PwjDiETFCwYEiEQDxwNDBQICAsCWwEFBQQKBgcOCAgQCRAaCwsSBwcKAwMDAwMDCgcHEgsLGhAWIQwMDwNaAgkHCBMNDBwRECQUGCwUEyEODRUHBwcHBwcVDQG6DSEUEywZESEQEBwMDBUICAoCWgIFBAQLBgYOCAgRCBAbCwsSBwcKAwMDAwMDCgcHEgsLGxAVIgwMDgNbAgkIBxQMDB0QESQTGSwTFCENDhQHBwgIBwcUDgADgPyAAzX9FgLq1xAYCAkJBQUFDwoKGA8OIRMJDgcHDAUFCAMDAgYGBhEKChgNDRwODRoNDRcKChEGBgYNDQ4iFhQkERAcCwsSBgYGCQgJFw8PJBQULBcYLRUUJA8QGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPAAAAAAMAQAAABcADgAAQAG8AzgAAJSEiJjURNDYzITIWFREUBiMBPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5ASE+ATc+ATc+ATMyFhceARceARceARczLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE3Iw4BBw4BIyImJy4BJy4BJy4BNTQ2NzkBBSz7qD1XVz0EWD1XVz38mgMKBwYSCwsbEAkQCAgOBgcKBAQGAVoCCggIFA0MHBAPIRIYLBQTIQ4NFQcHBwcHBxUNDiETFCsZFCQQEB0MDBQIBwkCWgMPDAwiFRAbCwsSBgcKAwQDAwQBuQMKBwcSCwsbEAgRCAcPBgYLBAQFAVsCCggIFQwMHBAQIREZLBMUIQ0OFAcHCAgHBxQODSEUEywZEyQREB0MDBQHCAkCWwMODA0hFRAbCwsSBwcKAwMDAwMAVz4CVj5XVz79qj5XAfQNGAoLEAYGBgIDAwgFBQwHBw4JEyEODxgKCg4GBQUJCQgYEA8kFBUtGBcsFBQkDw8XCQgJBgYGEgsLHBARJBQWIg4NDQYGBhEKChcNDRoODhsNDRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQAAAAEA4ACgAyAC4AAUAAABFA4CIyIuAjU0PgIzMh4CFQMgLU5pPDxpTi0tTmk8PGlOLQHAPGlOLS1OaTw8aU4tLU5pPAAAAwBAABAEQAOQAAMAEAAfAAA3CQEhJTI2NTQmIyIGFRQWMxM0JiMiBhURFBYzMjY1EUACAAIA/AACAA4VFQ4OFRUOIxUODhUVDg4VEAOA/IBwFhAPGBYREBYB5g8YFhH+1w8YFhEBKQACAEAAAAPAA4AABwAPAAA3ERc3FwcXIQEhEScHJzcnQICwjbCA/nMB8wGNgLCNsIAAAY2AsI2wgAOA/nOAsI2wgAAAAAUAQAAABcADgAAEAAkAFgAzAE8AADcRIREhASERIREBMzUzESM1IxUjETMVJR4BFx4BFx4BFRQGBw4BBw4BBw4BKwERMx4BFzEHETMyNjc+ATc+ATc+ATU0JicuAScuAScuASsBQAWA+oAFNvsUBOz8VLZgYLZkZAJcFB4ODxQHBwkGBwcTDAwhExMsG7CwFioToEcJFwkKEggHDQUFBQQDAg0HBxMMDCARNwADgPyAAzb9FwLp/sCt/kDAwAHArZ0HFA4PIhYVMBsYLhMWIg8OGAoJBwHAAgcHQ/7mBAMCDQcHFwwMIRMRHQ8OGAoJDwQFBQAEAD0AAAXAA4AAEAAdADsAWQAAJSEiJjURNDYzITIWFREUBiMBIxUjNSMRMzUzFTMRBS4BJy4BJy4BKwERMzI2Nz4BNz4BNz4BNS4BJzkBBw4BBw4BKwERMzIWFx4BFx4BFx4BFRQGBw4BBzkBBSr7qT5YWD4EVz5YWD79s2CzZGSzYAGwBxcMDh8TEycWsLAbLBMTHg8MEwcHBgIICXcIEgoJFAxHNxMeDAwTBwcLBAMEBQUFDQcAWD4CVD5YWD79rD5YAp2trf5AwMABwH0WIg4PFAcHBv5ACQcJGA8OJRMWLBgdMBbiCA0CAwQBHwQFBQ8KChgPDh8REx8PDBcHAAAAAAEAQwAGA6ADegCPAAATFCI1JzAmJzQmJy4BBw4BFRwBFR4BFx4BNz4BNz4BMTYyFTAUBxQWFx4BFx4BMzI2Nz4BNz4BNz4DMTYyFTAOAhUUFhceARcWNjc+ATc+ATc+ATc+Azc8ATU0JicmBgcOAzEGIjUwPAI1NCYnJgYHDgEHDgMxBiI1MCYnLgEnJgYHDgExFZAGBAgECAIFDgoHCQMWBwchDxAPBwc2BQQDAwcFCwkKFwwFDQUHCwcMEwgJHxwVBQUDBAMIBQcVEREkEQwTCAkSBQ4ZDAYyOC8ECQcMFgQDPUg8BAUvJBEiERAWCgYiJRwFBQQCAxgoJyYKBywBugUFDBgPBQoHBQQCAw0HBwsHFGsOEQ0HCCAPE5MKCp0wEzURDBMIBwUEAgUKBw8jDhRDQjEKClNzeCUTIxEQGAgHAQoHFQoRJRAnTSYTr8msDwUGAgcNAwQICQaVrY8JCTVUZjE1OwcCBQoKHBALYGpVCgp6Fh9PBQNHHxOQAwAAAAACAEYAAAQ2A4AABAAIAAAlETMRIwkCEQPGcHD8gAOA/IAAA4D8gAOA/kD+QAOAAAACAIAAAAOAA4AABAAJAAAlESERIQEhESERAoABAP8A/gABAP8AAAOA/IADgPyAA4AAAAAAAQBAAAADwAOAAAMAAAkBEQEDwPyAA4ABwP5AA4D+QAACAEoAAAQ6A4AABAAIAAA3ESMRMwkCEbpwcAOA/IADgAADgPyAA4D+QP5AA4AAAAABAEMAAANDA4AAKQAAAR4BFRQOAiMiLgI1ND4CMzUNATUiDgIVFB4CMzI+AjU0Jic3Aw0aHDxpjE9PjGg9PWiMTwFA/sA8aU4tLU5pPDxpTi0WE1MCQytjNU+MaD09aIxPT4xoPYCts4AtTmk8PGlOLS1OaTwpSx8wAAAAAQBAAGYCIAMTAAYAABMRMyURJSNAzQET/u3NATMBE839U80ABABAAAAEkAOAABcAKwA6AEEAACUnPgM1NC4CJzceAxUUDgIHMS8BPgE1NCYnNx4DFQ4DBzEnPgE1NCYnNx4BFRQGBycFETMlESUjA9oqJj4rFxcrPiYqKkMwGRkwQyqkKTlERDkpITQkFAEUJDMhwyIoKCIqJjAwJir9zc0BE/7tzQAjKF5pcjw8cWleKSMrZnJ8QUF8cmYrgyM1kVRUkTUjHkhQWC8vWVFHHbMWSCkrRhUjHFw0NVkfKQMBE839U80AAAIAQAAAA8MDgAAHAA8AAAEXIREXNxcHAQcnNychEScDKnD+qXCXeZn+JpZ6lnABV20Cc3ABV3CWepP+I5Z6lnD+qmwAAwBAARMFwAJgAAwAGQAmAAABFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUBjWJFRWFhRUViAhZhRUViYkVFYQIdYUVFYmJFRWEBukViYkVFYWFFRWJiRUVhYUVFYmJFRWFhRQAAAAABAGYAJgOaA1oAIAAAARcWFAcGIi8BBwYiJyY0PwEnJjQ3NjIfATc2MhcWFA8BAqP3JCQkYx329iRjHSQk9/ckJCRjHfb2JGMdJCT3AcD2JGMdJCT39yQkJGMd9vYkYx0kJPf3JCQkYx32AAAGAEQABAO8A3wABAAJAA4AEwAYAB0AAAEhFSE1ESEVITURIRUhNQEzFSM1ETMVIzURMxUjNQGnAhX96wIV/esCFf3r/p2ysrKysrIDfFlZ/p1ZWf6dWVkCxrKy/p2ysv6dsrIAAQAAAAEZmqMwridfDzz1AAsEAAAAAADRnPH5AAAAANGc8fkAAAAABcADkAAAAAgAAgAAAAAAAAABAAADwP/AAAAGAAAAAAAFwAABAAAAAAAAAAAAAAAAAAAAGwQAAAAAAAAAAAAAAAIAAAAGAABgBAAAQAUAAEAFAABABgAAQAYAAEAEAADgBIAAQAQAAEAGAABABgAAPQPgAEMEgABGBAAAgAQAAEAEgABKA4AAQwTAAEAEwABABAAAQAYAAEAEAABmBAAARAAAAAAACgAUAB4AiAC4AQQBYAKGA7ID1AQIBCoEpAUmBegGAAYaBioGQgaABpIG9AcWB1AHhge4AAEAAAAbAM8ABgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAMAAAAAQAAAAAAAgAHAI0AAQAAAAAAAwAMAEUAAQAAAAAABAAMAKIAAQAAAAAABQALACQAAQAAAAAABgAMAGkAAQAAAAAACgAaAMYAAwABBAkAAQAYAAwAAwABBAkAAgAOAJQAAwABBAkAAwAYAFEAAwABBAkABAAYAK4AAwABBAkABQAWAC8AAwABBAkABgAYAHUAAwABBAkACgA0AOBqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNWZXJzaW9uIDEuMQBWAGUAcgBzAGkAbwBuACAAMQAuADFqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNSZWd1bGFyAFIAZQBnAHUAbABhAHJqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }, function(e, t, n) {
        e.exports = n.p + "jw-icons.svg"
    }, function(e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                    o = d[i.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(a(i.parts[r], t))
                } else {
                    for (var s = [], r = 0; r < i.parts.length; r++) s.push(a(i.parts[r], t));
                    d[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function o(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o[0],
                    s = o[1],
                    a = o[2],
                    l = o[3],
                    c = {
                        css: s,
                        media: a,
                        sourceMap: l
                    };
                n[r] ? n[r].parts.push(c) : t.push(n[r] = {
                    id: r,
                    parts: [c]
                })
            }
            return t
        }

        function r() {
            var e = document.createElement("style"),
                t = w();
            return e.type = "text/css", t.appendChild(e), e
        }

        function s() {
            var e = document.createElement("link"),
                t = w();
            return e.rel = "stylesheet", t.appendChild(e), e
        }

        function a(e, t) {
            var n, i, o;
            if (t.singleton) {
                var a = g++;
                n = f || (f = r()), i = l.bind(null, n, a, !1), o = l.bind(null, n, a, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(), i = u.bind(null, n), o = function() {
                n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = r(), i = c.bind(null, n), o = function() {
                n.parentNode.removeChild(n)
            });
            return i(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        i(e = t)
                    } else o()
                }
        }

        function l(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, o);
            else {
                var r = document.createTextNode(o),
                    s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(r, s[t]) : e.appendChild(r)
            }
        }

        function c(e, t) {
            var n = t.css,
                i = t.media;
            t.sourceMap;
            if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function u(e, t) {
            var n = t.css,
                i = (t.media, t.sourceMap);
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(i)) + " */");
            var o = new Blob([n], {
                    type: "text/css"
                }),
                r = e.href;
            e.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
        }
        var d = {},
            A = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            p = A(function() {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }),
            w = A(function() {
                return document.head || document.getElementsByTagName("head")[0]
            }),
            f = null,
            g = 0;
        e.exports = function(e, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = p());
            var n = o(e);
            return i(n, t),
                function(e) {
                    for (var r = [], s = 0; s < n.length; s++) {
                        var a = n[s],
                            l = d[a.id];
                        l.refs--, r.push(l)
                    }
                    if (e) {
                        var c = o(e);
                        i(c, t)
                    }
                    for (var s = 0; s < r.length; s++) {
                        var l = r[s];
                        if (0 === l.refs) {
                            for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                            delete d[l.id]
                        }
                    }
                }
        };
        var h = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function(e, t, n) {
        var i, o;
        i = [n(42), n(45), n(52), n(48), n(102), n(50), n(62), n(110), n(47), n(75), n(53), n(70), n(64), n(65), n(66), n(55), n(56), n(152), n(90), n(83)], o = function(e, t, n, i, o, r, s, a, l, c, u, d, A, p, w, f, g, h, m, j) {
            var v = {};
            return v.api = e, v._ = t, v.version = n, v.utils = t.extend(i, r, {
                canCast: h.available,
                getCookies: o.getAllItems,
                saveCookie: o.setItem,
                css: s,
                key: l,
                extend: t.extend,
                scriptloader: c,
                rssparser: m,
                tea: u,
                UI: a
            }), v.vid = d, v.events = t.extend({}, A, {
                eventdispatcher: w,
                state: p
            }), v.playlist = t.extend({}, f, {
                item: g
            }), v.plugins = j, v.cast = h, v
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }])
});