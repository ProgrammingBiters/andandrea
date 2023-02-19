(function (Flits) {
    var flitsList = (function (t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
            (r.m = t),
            (r.c = e),
            (r.i = function (t) {
                return t;
            }),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return r.d(e, "a", e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ""),
            r((r.s = 11))
        );
    })([
        function (t, e, r) {
            var n = r(4),
                i = /\s+/;
            Object.prototype.toString;
            function s(t) {
                if (!t || !t.nodeType) throw new Error("A DOM element reference is required");
                (this.el = t), (this.list = t.classList);
            }
            (t.exports = function (t) {
                return new s(t);
            }),
                (s.prototype.add = function (t) {
                    if (this.list) return this.list.add(t), this;
                    var e = this.array();
                    return ~n(e, t) || e.push(t), (this.el.className = e.join(" ")), this;
                }),
                (s.prototype.remove = function (t) {
                    if (this.list) return this.list.remove(t), this;
                    var e = this.array(),
                        r = n(e, t);
                    return ~r && e.splice(r, 1), (this.el.className = e.join(" ")), this;
                }),
                (s.prototype.toggle = function (t, e) {
                    return this.list
                        ? (void 0 !== e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), this)
                        : (void 0 !== e ? (e ? this.add(t) : this.remove(t)) : this.has(t) ? this.remove(t) : this.add(t), this);
                }),
                (s.prototype.array = function () {
                    var t = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(i);
                    return "" === t[0] && t.shift(), t;
                }),
                (s.prototype.has = s.prototype.contains = function (t) {
                    return this.list ? this.list.contains(t) : !!~n(this.array(), t);
                });
        },
        function (t, e, r) {
            var n = window.addEventListener ? "addEventListener" : "attachEvent",
                i = window.removeEventListener ? "removeEventListener" : "detachEvent",
                s = "addEventListener" !== n ? "on" : "",
                a = r(5);
            (e.bind = function (t, e, r, i) {
                t = a(t);
                for (var o = 0; o < t.length; o++) t[o][n](s + e, r, i || !1);
            }),
                (e.unbind = function (t, e, r, n) {
                    t = a(t);
                    for (var o = 0; o < t.length; o++) t[o][i](s + e, r, n || !1);
                });
        },
        function (t, e) {
            t.exports = function (t) {
                return function (e, r, n) {
                    var i = this;
                    (this._values = {}), (this.found = !1), (this.filtered = !1);
                    (this.values = function (e, r) {
                        if (void 0 === e) return i._values;
                        for (var n in e) i._values[n] = e[n];
                        !0 !== r && t.templater.set(i, i.values());
                    }),
                        (this.show = function () {
                            t.templater.show(i);
                        }),
                        (this.hide = function () {
                            t.templater.hide(i);
                        }),
                        (this.matching = function () {
                            return (t.filtered && t.searched && i.found && i.filtered) || (t.filtered && !t.searched && i.filtered) || (!t.filtered && t.searched && i.found) || (!t.filtered && !t.searched);
                        }),
                        (this.visible = function () {
                            return !(!i.elm || i.elm.parentNode != t.list);
                        }),
                        (function (e, r, n) {
                            if (void 0 === r) n ? i.values(e, n) : i.values(e);
                            else {
                                i.elm = r;
                                var s = t.templater.get(i, e);
                                i.values(s);
                            }
                        })(e, r, n);
                };
            };
        },
        function (t, e) {
            t.exports = function (t, e, r, n) {
                return ((n = n || {}).test && n.getElementsByClassName) || (!n.test && document.getElementsByClassName)
                    ? ((a = t), (o = e), r ? a.getElementsByClassName(o)[0] : a.getElementsByClassName(o))
                    : (n.test && n.querySelector) || (!n.test && document.querySelector)
                    ? ((i = t), (s = "." + (s = e)), r ? i.querySelector(s) : i.querySelectorAll(s))
                    : (function (t, e, r) {
                          for (var n = [], i = t.getElementsByTagName("*"), s = i.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), o = 0, l = 0; o < s; o++)
                              if (a.test(i[o].className)) {
                                  if (r) return i[o];
                                  (n[l] = i[o]), l++;
                              }
                          return n;
                      })(t, e, r);
                var i, s, a, o;
            };
        },
        function (t, e) {
            var r = [].indexOf;
            t.exports = function (t, e) {
                if (r) return t.indexOf(e);
                for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
                return -1;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                if (void 0 === t) return [];
                if (null === t) return [null];
                if (t === window) return [window];
                if ("string" == typeof t) return [t];
                if (((e = t), "[object Array]" === Object.prototype.toString.call(e))) return t;
                var e;
                if ("number" != typeof t.length) return [t];
                if ("function" == typeof t && t instanceof Function) return [t];
                for (var r = [], n = 0; n < t.length; n++) (Object.prototype.hasOwnProperty.call(t, n) || n in t) && r.push(t[n]);
                return r.length ? r : [];
            };
        },
        function (t, e) {
            t.exports = function (t) {
                return (t = (t = null === (t = void 0 === t ? "" : t) ? "" : t).toString());
            };
        },
        function (t, e) {
            t.exports = function (t) {
                for (var e, r = Array.prototype.slice.call(arguments, 1), n = 0; (e = r[n]); n++) if (e) for (var i in e) t[i] = e[i];
                return t;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e = function (r, n, i) {
                    var s = r.splice(0, 50);
                    (i = (i = i || []).concat(t.add(s))),
                        r.length > 0
                            ? setTimeout(function () {
                                  e(r, n, i);
                              }, 1)
                            : (t.update(), n(i));
                };
                return e;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                return (
                    (t.handlers.filterStart = t.handlers.filterStart || []),
                    (t.handlers.filterComplete = t.handlers.filterComplete || []),
                    function (e) {
                        if ((t.trigger("filterStart"), (t.i = 1), t.reset.filter(), void 0 === e)) t.filtered = !1;
                        else {
                            t.filtered = !0;
                            for (var r = t.items, n = 0, i = r.length; n < i; n++) {
                                var s = r[n];
                                e(s) ? (s.filtered = !0) : (s.filtered = !1);
                            }
                        }
                        return t.update(), t.trigger("filterComplete"), t.visibleItems;
                    }
                );
            };
        },
        function (t, e, r) {
            r(0);
            var n = r(1),
                i = r(7),
                s = r(6),
                a = r(3),
                o = r(19);
            t.exports = function (t, e) {
                e = i({ location: 0, distance: 100, threshold: 0.4, multiSearch: !0, searchClass: "fuzzy-search" }, (e = e || {}));
                var r = {
                    search: function (n, i) {
                        for (var s = e.multiSearch ? n.replace(/ +$/, "").split(/ +/) : [n], a = 0, o = t.items.length; a < o; a++) r.item(t.items[a], i, s);
                    },
                    item: function (t, e, n) {
                        for (var i = !0, s = 0; s < n.length; s++) {
                            for (var a = !1, o = 0, l = e.length; o < l; o++) r.values(t.values(), e[o], n[s]) && (a = !0);
                            a || (i = !1);
                        }
                        t.found = i;
                    },
                    values: function (t, r, n) {
                        if (t.hasOwnProperty(r)) {
                            var i = s(t[r]).toLowerCase();
                            if (o(i, n, e)) return !0;
                        }
                        return !1;
                    },
                };
                return (
                    n.bind(a(t.listContainer, e.searchClass), "keyup", function (e) {
                        var n = e.target || e.srcElement;
                        t.search(n.value, r.search);
                    }),
                    function (e, n) {
                        t.search(e, n, r.search);
                    }
                );
            };
        },
        function (t, e, r) {
            var n = r(18),
                i = r(3),
                s = r(7),
                a = r(4),
                o = r(1),
                l = r(6),
                u = r(0),
                c = r(17),
                f = r(5);
            t.exports = function (t, e, h) {
                var d,
                    v = this,
                    m = r(2)(v),
                    g = r(8)(v),
                    p = r(12)(v);
                (d = {
                    start: function () {
                        (v.listClass = "list"),
                            (v.searchClass = "search"),
                            (v.sortClass = "sort"),
                            (v.page = 1e4),
                            (v.Item = r(2)(v)),
                            (v.i = 1),
                            (v.items = []),
                            (v.visibleItems = []),
                            (v.matchingItems = []),
                            (v.searched = !1),
                            (v.filtered = !1),
                            (v.searchColumns = void 0),
                            (v.handlers = { updated: [] }),
                            (v.valueNames = []),
                            (v.utils = { getByClass: i, extend: s, indexOf: a, events: o, toString: l, naturalSort: n, classes: u, getAttribute: c, toArray: f }),
                            v.utils.extend(v, e),
                            (v.listContainer = "string" == typeof t ? document.getElementById(t) : t),
                            v.listContainer &&
                                ((v.list = i(v.listContainer, v.listClass, !0)),
                                (v.parse = r(13)(v)),
                                (v.templater = r(16)(v)),
                                (v.search = r(14)(v)),
                                (v.filter = r(9)(v)),
                                (v.sort = r(15)(v)),
                                (v.fuzzySearch = r(10)(v, e.fuzzySearch)),
                                this.handlers(),
                                this.items(),
                                this.pagination(),
                                v.update());
                    },
                    handlers: function () {
                        for (var t in v.handlers) v[t] && v.on(t, v[t]);
                    },
                    items: function () {
                        v.parse(v.list), void 0 !== h && v.add(h);
                    },
                    pagination: function () {
                        if (void 0 !== e.pagination) {
                            !0 === e.pagination && (e.pagination = [{}]), void 0 === e.pagination[0] && (e.pagination = [e.pagination]);
                            for (var t = 0, r = e.pagination.length; t < r; t++) p(e.pagination[t]);
                        }
                    },
                }),
                    (this.reIndex = function () {
                        (v.items = []), (v.visibleItems = []), (v.matchingItems = []), (v.searched = !1), (v.filtered = !1), v.parse(v.list);
                    }),
                    (this.toJSON = function () {
                        for (var t = [], e = 0, r = v.items.length; e < r; e++) t.push(v.items[e].values());
                        return t;
                    }),
                    (this.add = function (t, e) {
                        if (0 !== t.length) {
                            if (!e) {
                                var r = [],
                                    n = !1;
                                void 0 === t[0] && (t = [t]);
                                for (var i = 0, s = t.length; i < s; i++) {
                                    var a;
                                    (n = v.items.length > v.page), (a = new m(t[i], void 0, n)), v.items.push(a), r.push(a);
                                }
                                return v.update(), r;
                            }
                            g(t, e);
                        }
                    }),
                    (this.show = function (t, e) {
                        return (this.i = t), (this.page = e), v.update(), v;
                    }),
                    (this.remove = function (t, e, r) {
                        for (var n = 0, i = 0, s = v.items.length; i < s; i++) v.items[i].values()[t] == e && (v.templater.remove(v.items[i], r), v.items.splice(i, 1), s--, i--, n++);
                        return v.update(), n;
                    }),
                    (this.get = function (t, e) {
                        for (var r = [], n = 0, i = v.items.length; n < i; n++) {
                            var s = v.items[n];
                            s.values()[t] == e && r.push(s);
                        }
                        return r;
                    }),
                    (this.size = function () {
                        return v.items.length;
                    }),
                    (this.clear = function () {
                        return v.templater.clear(), (v.items = []), v;
                    }),
                    (this.on = function (t, e) {
                        return v.handlers[t].push(e), v;
                    }),
                    (this.off = function (t, e) {
                        var r = v.handlers[t],
                            n = a(r, e);
                        return n > -1 && r.splice(n, 1), v;
                    }),
                    (this.trigger = function (t) {
                        for (var e = v.handlers[t].length; e--; ) v.handlers[t][e](v);
                        return v;
                    }),
                    (this.reset = {
                        filter: function () {
                            for (var t = v.items, e = t.length; e--; ) t[e].filtered = !1;
                            return v;
                        },
                        search: function () {
                            for (var t = v.items, e = t.length; e--; ) t[e].found = !1;
                            return v;
                        },
                    }),
                    (this.update = function () {
                        var t = v.items,
                            e = t.length;
                        (v.visibleItems = []), (v.matchingItems = []), v.templater.clear();
                        for (var r = 0; r < e; r++)
                            t[r].matching() && v.matchingItems.length + 1 >= v.i && v.visibleItems.length < v.page
                                ? (t[r].show(), v.visibleItems.push(t[r]), v.matchingItems.push(t[r]))
                                : t[r].matching()
                                ? (v.matchingItems.push(t[r]), t[r].hide())
                                : t[r].hide();
                        return v.trigger("updated"), v;
                    }),
                    d.start();
            };
        },
        function (t, e, r) {
            var n = r(0),
                i = r(1),
                s = r(11);
            t.exports = function (t) {
                var e = function (e, i) {
                        var s,
                            o = t.matchingItems.length,
                            l = t.i,
                            u = t.page,
                            c = Math.ceil(o / u),
                            f = Math.ceil(l / u),
                            h = i.innerWindow || 2,
                            d = i.left || i.outerWindow || 0,
                            v = i.right || i.outerWindow || 0;
                        (v = c - v), e.clear();
                        for (var m = 1; m <= c; m++) {
                            var g = f === m ? "active" : "";
                            r.number(m, d, v, f, h)
                                ? ((s = e.add({ page: m, dotted: !1 })[0]), g && n(s.elm).add(g), a(s.elm, m, u))
                                : r.dotted(e, m, d, v, f, h, e.size()) && ((s = e.add({ page: "...", dotted: !0 })[0]), n(s.elm).add("disabled"));
                        }
                    },
                    r = {
                        number: function (t, e, r, n, i) {
                            return this.left(t, e) || this.right(t, r) || this.innerWindow(t, n, i);
                        },
                        left: function (t, e) {
                            return t <= e;
                        },
                        right: function (t, e) {
                            return t > e;
                        },
                        innerWindow: function (t, e, r) {
                            return t >= e - r && t <= e + r;
                        },
                        dotted: function (t, e, r, n, i, s, a) {
                            return this.dottedLeft(t, e, r, n, i, s) || this.dottedRight(t, e, r, n, i, s, a);
                        },
                        dottedLeft: function (t, e, r, n, i, s) {
                            return e == r + 1 && !this.innerWindow(e, i, s) && !this.right(e, n);
                        },
                        dottedRight: function (t, e, r, n, i, s, a) {
                            return !t.items[a - 1].values().dotted && e == n && !this.innerWindow(e, i, s) && !this.right(e, n);
                        },
                    },
                    a = function (e, r, n) {
                        i.bind(e, "click", function () {
                            t.show((r - 1) * n + 1, n);
                        });
                    };
                return function (r) {
                    var n = new s(t.listContainer.id, {
                        listClass: r.paginationClass || "pagination",
                        item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
                        valueNames: ["page", "dotted"],
                        searchClass: "pagination-search-that-is-not-supposed-to-exist",
                        sortClass: "pagination-sort-that-is-not-supposed-to-exist",
                    });
                    t.on("updated", function () {
                        e(n, r);
                    }),
                        e(n, r);
                };
            };
        },
        function (t, e, r) {
            t.exports = function (t) {
                var e = r(2)(t),
                    n = function (r, n) {
                        for (var i = 0, s = r.length; i < s; i++) t.items.push(new e(n, r[i]));
                    },
                    i = function (e, r) {
                        var s = e.splice(0, 50);
                        n(s, r),
                            e.length > 0
                                ? setTimeout(function () {
                                      i(e, r);
                                  }, 1)
                                : (t.update(), t.trigger("parseComplete"));
                    };
                return (
                    (t.handlers.parseComplete = t.handlers.parseComplete || []),
                    function () {
                        var e = (function (t) {
                                for (var e = t.childNodes, r = [], n = 0, i = e.length; n < i; n++) void 0 === e[n].data && r.push(e[n]);
                                return r;
                            })(t.list),
                            r = t.valueNames;
                        t.indexAsync ? i(e, r) : n(e, r);
                    }
                );
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e,
                    r,
                    n,
                    i,
                    s = {
                        resetList: function () {
                            (t.i = 1), t.templater.clear(), (i = void 0);
                        },
                        setOptions: function (t) {
                            2 == t.length && t[1] instanceof Array ? (r = t[1]) : 2 == t.length && "function" == typeof t[1] ? ((r = void 0), (i = t[1])) : 3 == t.length ? ((r = t[1]), (i = t[2])) : (r = void 0);
                        },
                        setColumns: function () {
                            0 !== t.items.length && void 0 === r && (r = void 0 === t.searchColumns ? s.toArray(t.items[0].values()) : t.searchColumns);
                        },
                        setSearchString: function (e) {
                            (e = (e = t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&")), (n = e);
                        },
                        toArray: function (t) {
                            var e = [];
                            for (var r in t) e.push(r);
                            return e;
                        },
                    },
                    a = {
                        list: function () {
                            for (var e = 0, r = t.items.length; e < r; e++) a.item(t.items[e]);
                        },
                        item: function (t) {
                            t.found = !1;
                            for (var e = 0, n = r.length; e < n; e++) if (a.values(t.values(), r[e])) return void (t.found = !0);
                        },
                        values: function (r, i) {
                            return !!(r.hasOwnProperty(i) && ((e = t.utils.toString(r[i]).toLowerCase()), "" !== n && e.search(n) > -1));
                        },
                        reset: function () {
                            t.reset.search(), (t.searched = !1);
                        },
                    },
                    o = function (e) {
                        return (
                            t.trigger("searchStart"),
                            s.resetList(),
                            s.setSearchString(e),
                            s.setOptions(arguments),
                            s.setColumns(),
                            "" === n ? a.reset() : ((t.searched = !0), i ? i(n, r) : a.list()),
                            t.update(),
                            t.trigger("searchComplete"),
                            t.visibleItems
                        );
                    };
                return (
                    (t.handlers.searchStart = t.handlers.searchStart || []),
                    (t.handlers.searchComplete = t.handlers.searchComplete || []),
                    t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", function (e) {
                        var r = e.target || e.srcElement;
                        ("" === r.value && !t.searched) || o(r.value);
                    }),
                    t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", function (t) {
                        "" === (t.target || t.srcElement).value && o("");
                    }),
                    o
                );
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e = {
                        els: void 0,
                        clear: function () {
                            for (var r = 0, n = e.els.length; r < n; r++) t.utils.classes(e.els[r]).remove("asc"), t.utils.classes(e.els[r]).remove("desc");
                        },
                        getOrder: function (e) {
                            var r = t.utils.getAttribute(e, "data-order");
                            return "asc" == r || "desc" == r ? r : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc";
                        },
                        getInSensitive: function (e, r) {
                            var n = t.utils.getAttribute(e, "data-insensitive");
                            r.insensitive = "false" !== n;
                        },
                        setOrder: function (r) {
                            for (var n = 0, i = e.els.length; n < i; n++) {
                                var s = e.els[n];
                                if (t.utils.getAttribute(s, "data-sort") === r.valueName) {
                                    var a = t.utils.getAttribute(s, "data-order");
                                    "asc" == a || "desc" == a ? a == r.order && t.utils.classes(s).add(r.order) : t.utils.classes(s).add(r.order);
                                }
                            }
                        },
                    },
                    r = function () {
                        t.trigger("sortStart");
                        var r = {},
                            n = arguments[0].currentTarget || arguments[0].srcElement || void 0;
                        n
                            ? ((r.valueName = t.utils.getAttribute(n, "data-sort")), e.getInSensitive(n, r), (r.order = e.getOrder(n)))
                            : (((r = arguments[1] || r).valueName = arguments[0]), (r.order = r.order || "asc"), (r.insensitive = void 0 === r.insensitive || r.insensitive)),
                            e.clear(),
                            e.setOrder(r);
                        var i,
                            s = r.sortFunction || t.sortFunction || null,
                            a = "desc" === r.order ? -1 : 1;
                        (i = s
                            ? function (t, e) {
                                  return s(t, e, r) * a;
                              }
                            : function (e, n) {
                                  var i = t.utils.naturalSort;
                                  return (i.alphabet = t.alphabet || r.alphabet || void 0), !i.alphabet && r.insensitive && (i = t.utils.naturalSort.caseInsensitive), i(e.values()[r.valueName], n.values()[r.valueName]) * a;
                              }),
                            t.items.sort(i),
                            t.update(),
                            t.trigger("sortComplete");
                    };
                return (
                    (t.handlers.sortStart = t.handlers.sortStart || []),
                    (t.handlers.sortComplete = t.handlers.sortComplete || []),
                    (e.els = t.utils.getByClass(t.listContainer, t.sortClass)),
                    t.utils.events.bind(e.els, "click", r),
                    t.on("searchStart", e.clear),
                    t.on("filterStart", e.clear),
                    r
                );
            };
        },
        function (t, e) {
            var r = function (t) {
                var e,
                    r = this;
                (this.clearSourceItem = function (e, r) {
                    for (var n = 0, i = r.length; n < i; n++) {
                        var s;
                        if (r[n].data) for (var a = 0, o = r[n].data.length; a < o; a++) e.setAttribute("data-" + r[n].data[a], "");
                        else r[n].attr && r[n].name ? (s = t.utils.getByClass(e, r[n].name, !0)) && s.setAttribute(r[n].attr, "") : (s = t.utils.getByClass(e, r[n], !0)) && (s.innerHTML = "");
                        s = void 0;
                    }
                    return e;
                }),
                    (this.getItemSource = function (e) {
                        if (void 0 === e) {
                            for (var r = t.list.childNodes, n = 0, i = r.length; n < i; n++) if (void 0 === r[n].data) return r[n].cloneNode(!0);
                        } else {
                            if (/<tr[\s>]/g.exec(e)) {
                                var s = document.createElement("tbody");
                                return (s.innerHTML = e), s.firstChild;
                            }
                            if (-1 !== e.indexOf("<")) {
                                var a = document.createElement("div");
                                return (a.innerHTML = e), a.firstChild;
                            }
                            var o = document.getElementById(t.item);
                            if (o) return o;
                        }
                    }),
                    (this.get = function (e, n) {
                        r.create(e);
                        for (var i = {}, s = 0, a = n.length; s < a; s++) {
                            var o;
                            if (n[s].data) for (var l = 0, u = n[s].data.length; l < u; l++) i[n[s].data[l]] = t.utils.getAttribute(e.elm, "data-" + n[s].data[l]);
                            else
                                n[s].attr && n[s].name
                                    ? ((o = t.utils.getByClass(e.elm, n[s].name, !0)), (i[n[s].name] = o ? t.utils.getAttribute(o, n[s].attr) : ""))
                                    : ((o = t.utils.getByClass(e.elm, n[s], !0)), (i[n[s]] = o ? o.innerHTML : ""));
                            o = void 0;
                        }
                        return i;
                    }),
                    (this.set = function (e, n) {
                        var i = function (r, n) {
                            var i,
                                s = (function (e) {
                                    for (var r = 0, n = t.valueNames.length; r < n; r++)
                                        if (t.valueNames[r].data) {
                                            for (var i = t.valueNames[r].data, s = 0, a = i.length; s < a; s++) if (i[s] === e) return { data: e };
                                        } else {
                                            if (t.valueNames[r].attr && t.valueNames[r].name && t.valueNames[r].name == e) return t.valueNames[r];
                                            if (t.valueNames[r] === e) return e;
                                        }
                                })(r);
                            s &&
                                (s.data ? e.elm.setAttribute("data-" + s.data, n) : s.attr && s.name ? (i = t.utils.getByClass(e.elm, s.name, !0)) && i.setAttribute(s.attr, n) : (i = t.utils.getByClass(e.elm, s, !0)) && (i.innerHTML = n),
                                (i = void 0));
                        };
                        if (!r.create(e)) for (var s in n) n.hasOwnProperty(s) && i(s, n[s]);
                    }),
                    (this.create = function (t) {
                        if (void 0 !== t.elm) return !1;
                        if (void 0 === e) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
                        var n = e.cloneNode(!0);
                        return n.removeAttribute("id"), (t.elm = n), r.set(t, t.values()), !0;
                    }),
                    (this.remove = function (e) {
                        e.elm.parentNode === t.list && t.list.removeChild(e.elm);
                    }),
                    (this.show = function (e) {
                        r.create(e), t.list.appendChild(e.elm);
                    }),
                    (this.hide = function (e) {
                        void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm);
                    }),
                    (this.clear = function () {
                        if (t.list.hasChildNodes()) for (; t.list.childNodes.length >= 1; ) t.list.removeChild(t.list.firstChild);
                    }),
                    (e = r.getItemSource(t.item)) && (e = r.clearSourceItem(e, t.valueNames));
            };
            t.exports = function (t) {
                return new r(t);
            };
        },
        function (t, e) {
            t.exports = function (t, e) {
                var r = (t.getAttribute && t.getAttribute(e)) || null;
                if (!r) for (var n = t.attributes.length, i = 0; i < n; i++) void 0 !== e[i] && e[i].nodeName === e && (r = e[i].nodeValue);
                return r;
            };
        },
        function (t, e, r) {
            "use strict";
            var n,
                i,
                s = 0;
            function a(t) {
                return t >= 48 && t <= 57;
            }
            function o(t, e) {
                for (var r = (t += "").length, n = (e += "").length, o = 0, l = 0; o < r && l < n; ) {
                    var u = t.charCodeAt(o),
                        c = e.charCodeAt(l);
                    if (a(u)) {
                        if (!a(c)) return u - c;
                        for (var f = o, h = l; 48 === u && ++f < r; ) u = t.charCodeAt(f);
                        for (; 48 === c && ++h < n; ) c = e.charCodeAt(h);
                        for (var d = f, v = h; d < r && a(t.charCodeAt(d)); ) ++d;
                        for (; v < n && a(e.charCodeAt(v)); ) ++v;
                        var m = d - f - v + h;
                        if (m) return m;
                        for (; f < d; ) if ((m = t.charCodeAt(f++) - e.charCodeAt(h++))) return m;
                        (o = d), (l = v);
                    } else {
                        if (u !== c) return u < s && c < s && -1 !== i[u] && -1 !== i[c] ? i[u] - i[c] : u - c;
                        ++o, ++l;
                    }
                }
                return r - n;
            }
            (o.caseInsensitive = o.i = function (t, e) {
                return o(("" + t).toLowerCase(), ("" + e).toLowerCase());
            }),
                Object.defineProperties(o, {
                    alphabet: {
                        get: function () {
                            return n;
                        },
                        set: function (t) {
                            i = [];
                            var e = 0;
                            if ((n = t)) for (; e < n.length; e++) i[n.charCodeAt(e)] = e;
                            for (s = i.length, e = 0; e < s; e++) void 0 === i[e] && (i[e] = -1);
                        },
                    },
                }),
                (t.exports = o);
        },
        function (t, e) {
            t.exports = function (t, e, r) {
                var n = r.location || 0,
                    i = r.distance || 100,
                    s = r.threshold || 0.4;
                if (e === t) return !0;
                if (e.length > 32) return !1;
                var a = n,
                    o = (function () {
                        var t,
                            r = {};
                        for (t = 0; t < e.length; t++) r[e.charAt(t)] = 0;
                        for (t = 0; t < e.length; t++) r[e.charAt(t)] |= 1 << (e.length - t - 1);
                        return r;
                    })();
                function l(t, r) {
                    var n = t / e.length,
                        s = Math.abs(a - r);
                    return i ? n + s / i : s ? 1 : n;
                }
                var u = s,
                    c = t.indexOf(e, a);
                -1 != c && ((u = Math.min(l(0, c), u)), -1 != (c = t.lastIndexOf(e, a + e.length)) && (u = Math.min(l(0, c), u)));
                var f,
                    h,
                    d = 1 << (e.length - 1);
                c = -1;
                for (var v, m = e.length + t.length, g = 0; g < e.length; g++) {
                    for (f = 0, h = m; f < h; ) l(g, a + h) <= u ? (f = h) : (m = h), (h = Math.floor((m - f) / 2 + f));
                    m = h;
                    var p = Math.max(1, a - h + 1),
                        C = Math.min(a + h, t.length) + e.length,
                        y = Array(C + 2);
                    y[C + 1] = (1 << g) - 1;
                    for (var b = C; b >= p; b--) {
                        var w = o[t.charAt(b - 1)];
                        if (((y[b] = 0 === g ? ((y[b + 1] << 1) | 1) & w : (((y[b + 1] << 1) | 1) & w) | ((v[b + 1] | v[b]) << 1) | 1 | v[b + 1]), y[b] & d)) {
                            var x = l(g, b - 1);
                            if (x <= u) {
                                if (((u = x), !((c = b - 1) > a))) break;
                                p = Math.max(1, 2 * a - c);
                            }
                        }
                    }
                    if (l(g + 1, a) > u) break;
                    v = y;
                }
                return !(c < 0);
            };
        },
    ]);
    var AccountPage = (Flits.AccountPage = function (options) {
        Flits.AccountPage.settings = {};
        var settings = { active_tab: "#profile", bdayInterval: null, dobCountDown: null };
        settings = Flits.extend(Flits.AccountPage.settings, settings, options);
        Flits.dispatchEvent("Flits:AccountPage:Loaded", { settings: settings });
        Flits.setPhoneCountryCode();
        var hash = window.location.hash;
        if (hash.length) {
            Flits.navigationFunc(hash);
        } else {
            Flits.navigationFunc(Flits.AccountPage.settings.active_tab, 0);
        }
        Flits("#flits-skeleton-style").remove();
        Flits(".flits-skeleton-container").removeClass("flits-skeleton-container");
        Flits(".flits-skeleton-account-section").removeClass("flits-skeleton-account-section");
        Flits(".flits-skeleton-header").removeClass("flits-skeleton-header");
        Flits(".flits-skeleton-box").removeClass("flits-skeleton-box-header");
        Flits(".flits-skeleton-nav").removeClass("flits-skeleton-nav");
        Flits(".flits-skeleton-account-page-tab").removeClass("flits-skeleton-account-page-tab");
        Flits(".flits-skeleton-box").removeClass("flits-skeleton-box");
        let current_customer = Flits.customer_id;
        let last_customer = Flits.getLocalStorage("last_cutomer_id");
        let localStorageArr = {
            customer_attachment_url: "",
            customer_email: "",
            customer_link: "",
            customer_message: "",
            customer_name: "",
            customer_phone: "",
            customer_reason: "",
            flits_before_login_url: "",
            flits_recently_products: [],
            last_wishlist_product_update: "",
            login_status: "",
            order_date: "",
            order_link: "",
            order_name: "",
            order_number: "",
            order_page_no: 1,
            order_payment_status: "",
            order_fulfillment_status: "",
            order_total: "",
            total_order_count: undefined,
        };
        if (last_customer != undefined && current_customer != last_customer) {
            Flits.each(localStorageArr, function (key, value) {
                Flits.setLocalStorage(key, value);
            });
        }
        Flits.setLocalStorage("last_cutomer_id", Flits.customer_id);
        Flits(document).on("Flits:profileTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_profile").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_profile").append(Flits(resp).filter(".flits-profile-module").find(".flits-content").html());
            Flits.myProfile();
            Flits.birthdayCountDown();
        });
        Flits(document).on("Flits:recentlyViewTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_recentlyView").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_recentlyView").append(Flits(resp).filter(".flits-recently-view-module").find(".flits-content").html());
            Flits.recentlyView();
        });
        Flits(document).on("Flits:changePasswordTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_changePassword").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_changePassword").append(Flits(resp).filter(".flits-change-password-module").find(".flits-content").html());
            Flits.changePassword();
        });
        Flits(document).on("Flits:deliveryAddressTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_address").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_address").append(Flits(resp).filter(".flits-content").html());
            Flits.deliveryAddress();
        });
        Flits(document).on("Flits:orderTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_order").find(".flits-order-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_order").append(Flits(resp).filter(".flits-content").html());
            Flits.order();
            if (Flits.Metafields.IS_ORDER_CONTACT_US_ENABLE == 1) {
                Flits.contactUS();
            }
        });
        let topOrderRespData = null;
        let topOrderAjaxCall = false;
        let topOrderTemplateCall = false;
        function topOrderModuleFunc() {
            if (topOrderAjaxCall && topOrderTemplateCall) {
                var settings = { data: topOrderRespData };
                Flits(document).on("Flits:topOrder:Loaded", function () {
                    settings = Flits.extend(Flits.topOrder.settings, settings, options);
                });
                Flits.topOrder();
            }
        }
        Flits(document).on("Flits:topOrderTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_topOrder").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_topOrder").append(Flits(resp).filter(".flits-content").html());
            topOrderTemplateCall = true;
            topOrderModuleFunc();
        });
        let wishlistRespData = null;
        let wishlistAjaxCall = false;
        let wishlistTemplateCall = false;
        function wishlistModuleFunc() {
            if (wishlistAjaxCall && wishlistTemplateCall) {
                var settings = { wishlistServerData: wishlistRespData };
                Flits(document).on("Flits:Wishlist:Loaded", function () {
                    settings = Flits.extend(Flits.Wishlist.settings, settings, options);
                });
                Flits.Wishlist();
            }
        }
        Flits(document).on("Flits:wishlistTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_wishlist").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_wishlist").append(Flits(resp).filter(".flits-content").html());
            wishlistTemplateCall = true;
            wishlistModuleFunc();
        });
        let storeCreditRespData = null;
        let storeCreditAjaxCall = false;
        let storeCreditTemplateCall = false;
        function storeCreditModuleFunc() {
            if (storeCreditAjaxCall && storeCreditTemplateCall) {
                var settings = { data: storeCreditRespData };
                Flits(document).on("Flits:storeCredit:Loaded", function () {
                    settings = Flits.extend(Flits.storeCredit.settings, settings, options);
                });
                Flits.storeCredit();
            }
        }
        Flits(document).on("Flits:storeCreditTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_storeCredit").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_storeCredit").append(Flits(resp).filter(".flits-store-credit-module").find(".flits-content").html());
            storeCreditTemplateCall = true;
            storeCreditModuleFunc();
        });
        let rulesRespData = null;
        let rulesAjaxCall = false;
        let rulesTemplateCall = false;
        function rulesModuleFunc() {
            if (rulesAjaxCall && rulesTemplateCall) {
                var settings = { data: rulesRespData };
                Flits(document).on("Flits:howToEarnCredit:Loaded", function () {
                    settings = Flits.extend(Flits.howToEarnCredit.settings, settings, options);
                });
                Flits.howToEarnCredit();
            }
        }
        Flits(document).on("Flits:rulesTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_howToManageCredit").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_howToManageCredit").append(Flits(resp).filter(".flits-how-to-manage-credit-module").find(".flits-content").html());
            rulesTemplateCall = true;
            rulesModuleFunc();
        });
        let referRespData = null;
        let referAjaxCall = false;
        let referTemplateCall = false;
        function referFriendModuleFunc() {
            if (referAjaxCall && referTemplateCall) {
                var settings = { data: referRespData };
                Flits(document).on("Flits:referCredit:Loaded", function () {
                    settings = Flits.extend(Flits.referCredit.settings, settings, options);
                });
                Flits.referCredit();
            }
        }
        Flits(document).on("Flits:referFriendTemplate:Loaded", function (event) {
            let resp = event.detail.resp;
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_referFriend").find(".flits-module-loader").remove();
            Flits(".flits-account-page-tabs .flits-tabs-box #flits_tab_referFriend").append(Flits(resp).filter(".flits-content").html());
            referTemplateCall = true;
            referFriendModuleFunc();
        });
        Flits(document).on("Flits:customer:AjaxSuccessful", function (event) {
            let resp = event.detail.resp;
            if (resp.status) {
                if (Flits.Metafields.IS_STORE_CREDIT_PAID == 1 && Flits.Metafields.is_store_credit_enable == 1) {
                    Flits.services.settings.rulesService(function (resp) {
                        rulesRespData = resp;
                        rulesAjaxCall = true;
                        rulesModuleFunc();
                    });
                    Flits.services.settings.storeCreditService(function (resp) {
                        storeCreditRespData = resp;
                        storeCreditAjaxCall = true;
                        storeCreditModuleFunc();
                    });
                    Flits.services.settings.referCreditService(function (resp) {
                        referRespData = resp;
                        referAjaxCall = true;
                        referFriendModuleFunc();
                    });
                    if (Flits.Metafields.IS_REFER_PROGRAM_ON == 1) {
                        Flits.get(
                            "/account?view=flits_referFriend_template",
                            function (resp) {
                                Flits.dispatchEvent("Flits:referFriendTemplate:Loaded", { resp: resp });
                            },
                            "html"
                        );
                    } else {
                        Flits("#flits_tab_referFriend").remove();
                    }
                    Flits.get(
                        "/account?view=flits_storeCredit_template",
                        function (resp) {
                            Flits.dispatchEvent("Flits:storeCreditTemplate:Loaded", { resp: resp });
                            if (Flits.Metafields.IS_HOW_TO_EARN_CREDIT_DISPLAY == 1) {
                                Flits.dispatchEvent("Flits:rulesTemplate:Loaded", { resp: resp });
                            } else {
                                Flits("#flits_tab_howToManageCredit").remove();
                            }
                        },
                        "html"
                    );
                } else {
                    Flits("#flits_tab_storeCredit").remove();
                    Flits("#flits_tab_howToManageCredit").remove();
                    Flits("#flits_tab_referFriend").remove();
                }
            } else {
                let error = Flits.t("Flits.locals.general.getting_customer_details", "Getting/Syncing Customer Details");
                Flits(".flits-store-credit-module-loader .flits-loading-message, .flits-how-to-manage-module-loader .flits-loading-message, .flits-refer-friend-module-loader .flits-loading-message").html(error);
                setTimeout(function () {
                    Flits.services.settings.customerSevices();
                }, 30000);
            }
        });
        Flits.services.settings.customerSevices();
        Flits.get(
            "/account?view=flits_profile_template",
            function (resp) {
                Flits.dispatchEvent("Flits:profileTemplate:Loaded", { resp: resp });
                if (Flits.Metafields.is_recently_view_enable == 1) {
                    Flits.dispatchEvent("Flits:recentlyViewTemplate:Loaded", { resp: resp });
                } else {
                    Flits("#flits_tab_recentlyView").remove();
                    Flits("#flits_mobile_tab_recentlyView").remove();
                }
                Flits.dispatchEvent("Flits:changePasswordTemplate:Loaded", { resp: resp });
            },
            "html"
        );
        Flits.get(
            "/account?view=flits_address_template",
            function (resp) {
                Flits.dispatchEvent("Flits:deliveryAddressTemplate:Loaded", { resp: resp });
            },
            "html"
        );
        Flits.get(
            "/account?view=flits_order_template",
            function (resp) {
                Flits.dispatchEvent("Flits:orderTemplate:Loaded", { resp: resp });
            },
            "html"
        );
        if (Flits.Metafields.IS_ADVANCE_DASHBOARD_PAID == 1 && Flits.Metafields.IS_ADVANCE_DASHBOARD_ENABLE == 1) {
            Flits.services.settings.topOrderService(function (resp) {
                topOrderRespData = resp;
                topOrderAjaxCall = true;
                topOrderModuleFunc();
            });
            Flits.get(
                "/account?view=flits_topOrder_template",
                function (resp) {
                    Flits.dispatchEvent("Flits:topOrderTemplate:Loaded", { resp: resp });
                },
                "html"
            );
        } else {
            Flits("#flits_tab_topOrder").remove();
        }
        if (Flits.Metafields.IS_WISHLIST_PAID == 1 && Flits.Metafields.IS_WISHLIST_ENABLE == 1) {
            Flits.services.settings.wishlistService(function (resp) {
                wishlistRespData = resp;
                wishlistAjaxCall = true;
                wishlistModuleFunc();
            });
            Flits.get(
                "/account?view=flits_wishlist_template",
                function (resp) {
                    Flits.dispatchEvent("Flits:wishlistTemplate:Loaded", { resp: resp });
                },
                "html"
            );
        } else {
            Flits("#flits_tab_wishlist").remove();
        }
        setInterval(function () {
            Flits.setupContainer();
        }, 1);
        Flits(document).on("click", ".flits-nav-tabs .flits-menu-item", function (e) {
            if (!Flits(this).hasClass("flits-external-link")) {
                var target_attr = Flits(this).find("a").attr("href");
                if (target_attr.search("#") != 0) {
                } else {
                    Flits.navigationFunc(target_attr);
                }
            }
        });
        Flits(document).on("click", ".flits-back-btn", function () {
            Flits(".flits-account-page-container").toggleClass("flits-active");
            location.hash = "";
        });
        Flits(document).on("change", ".flits-variant-select", function (e) {
            Flits(this).removeAttr("data-tippy-content");
            if (instances) {
                if (instances.length) {
                    Flits.each(instances, function (i, v) {
                        instances[i].destroy();
                    });
                } else {
                    instances.destroy();
                }
            }
            Flits.variantOnChange(this);
            Flits(this).attr("value", this.value);
        });
        Flits(document).on("click", ".flits-quantity-btn", function () {
            Flits.productQuntityAdjust(this);
        });
        Flits(document).on("click", ".flits-pagination-div .flits-pagination-btn", function () {
            let paginationOf = Flits(this).parents(".flits-pagination-div").attr("data-flits-pagination");
            let btnAttr = Flits(this).attr("data-flits-btn");
            let position = Flits('.flits-pagination-div[data-flits-pagination="' + paginationOf + '"] .flits-pagination li').index(Flits('.flits-pagination-div[data-flits-pagination="' + paginationOf + '"] .flits-pagination li.active'));
            let liList = Flits('.flits-pagination-div[data-flits-pagination="' + paginationOf + '"] .flits-pagination li');
            if (btnAttr == "flits-prev-btn") {
                Flits(liList[position - 1]).trigger("click");
            } else {
                Flits(liList[position + 1]).trigger("click");
            }
        });
        Flits(document).on("click", ".flits-add-to-cart", function () {
            let el = Flits(this);
            let quantity = parseInt(Flits(el).parents(".flits-product-card").find('input[name="product_quantity_input"]').val());
            let maxLimit = parseInt(Flits(el).parents(".flits-product-card").find('input[name="product_quantity_input"]').attr("max"));
            let id = Flits(el).parents(".flits-product-card").find(".flits-variant-select").val();
            if (Flits(el).attr("data-flits-add-action-from") == "wishlist" || Flits(el).attr("data-flits-add-action-from") == "recentlyView") {
                if (Flits(el).parents(".flits-product-card").find(".flits-variant-select").val() == "") {
                    id = Flits(el).parents(".flits-product-card").find(".flits-variant-select option:nth-child(2)").val();
                }
            }
            let interval = 0;
            if (cartOrder[id]) {
                if (quantity + parseInt(cartOrder[id].cart_quantity) > maxLimit) {
                    quantity = maxLimit - parseInt(cartOrder[id].cart_quantity);
                    quantity == 0 ? (quantity = maxLimit) : quantity;
                    interval = 3000;
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.general.cart_updated", "Some items are no longer available. Your cart has been updated."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                }
            }
            let data = "id=" + id + "&quantity=" + quantity;
            setTimeout(function () {
                Flits.addToCart(data);
            }, interval);
        });
        Flits(document).on("keypress", '.flits-product-quantity input[name="product_quantity_input"]', function (event) {
            Flits.phoneNumberBind(this);
            return Flits.isNumber(event);
        });
        Flits(document).on("input", '.flits-product-quantity input[name="product_quantity_input"]', function (event) {
            if (/^0/.test(this.value) || /^\s*$/.test(this.value)) {
                this.value = this.value.replace(/^0/, "1");
                this.value = this.value.replace(/^\s*$/, "1");
            }
        });
        Flits(document).on("keyup", '.flits-product-quantity input[name="product_quantity_input"]', function (event) {
            let maxLimit = parseInt(Flits(this).attr("max"));
            if (parseInt(this.value) > maxLimit) {
                Flits(this).val(maxLimit);
                flitsSnackbar.show({
                    text: Flits.t("Flits.locals.general.cant_add_more_quantity", "You have reached the maximum limit. You cannot add any more items."),
                    pos: "bottom-center",
                    showAction: false,
                    customClass: "flits-alert-error",
                });
            }
        });
    });
    var myProfile = (Flits.myProfile = function (options) {
        Flits.myProfile.settings = {};
        var settings = { phoneValid: true, emailValid: true, phoneNumber: "" };
        settings = Flits.extend(Flits.myProfile.settings, settings, options);
        Flits.dispatchEvent("Flits:myProfile:Loaded", { settings: settings });
        Flits.each(Flits.setPhoneCountryCode.settings.countryOptionArr, function (key, value) {
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").append(value.clone());
        });
        let newDate = new Date();
        let newDateDD = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
        let newDateMM = newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
        let newDateYY = newDate.getFullYear();
        newDate = newDateYY + "-" + newDateMM + "-" + newDateDD;
        Flits('#flits-form-profile .flits-input[name="birthdate"]').attr("max", newDate);
        Flits.myProfile.settings.phoneNumber = Flits('#flits-form-profile .flits-input[name="phone"]').val();
        Flits.phoneNumberBind("#flits-form-profile .flits-input[name='phone']");
        function phoneWithContry() {
            let numberDetails;
            let countryIndex;
            let onlyNumber;
            let areaCode;
            if (Flits('#flits-form-profile .flits-input[name="phone"]').val()) {
                numberDetails = new libphonenumber.parsePhoneNumber(Flits('#flits-form-profile .flits-input[name="phone"]').val());
                countryIndex = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').val();
                areaCode = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').attr("data-country-code");
                onlyNumber = numberDetails.number.replace(areaCode, "");
                Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                Flits('#flits-form-profile .flits-input[name="phone"]').val(onlyNumber);
            } else {
                Flits.shopCountryName = Flits.shopCountryName.replace("&amp;", "&");
                if (Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]')) {
                    countryIndex = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]').val();
                    Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                } else {
                    let defualtCountry = Flits.defualtCountry;
                    countryIndex = Flits('.flits-profile-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + defualtCountry + '"]').val();
                    Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                }
            }
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").trigger("change");
        }
        Flits(document).on("click", ".flits-profile-edit-button", function () {
            Flits(this).hide();
            Flits(".flits-edit-form-btn-grp").removeClass("flits-d-none");
            Flits("#flits-form-profile").removeClass("flits-read-input");
            Flits("#flits-form-profile .flits-input").attr("readonly", false);
            Flits('#flits-form-profile .flits-input[name="email"]').attr("readonly", true);
            Flits('#flits-form-profile .flits-input[name="birthdate"]').attr("type", "date");
            Flits('#flits-form-profile .flits-input[name="referby"]').attr("readonly", true);
            Flits("#flits-form-profile select.flits-input").attr("disabled", false);
            Flits(".flits-profile-phone-with-country-div").removeClass("flits-readonly-mode");
            phoneWithContry();
        });
        function profileNonEditForm() {
            Flits(".flits-profile-edit-button").show();
            Flits(".flits-edit-form-btn-grp").addClass("flits-d-none");
            Flits("#flits-form-profile").addClass("flits-read-input");
            Flits("#flits-form-profile .flits-input").attr("readonly", true);
            Flits('#flits-form-profile .flits-input[name="email"]').attr("readonly", true);
            Flits('#flits-form-profile .flits-input[name="birthdate"]').attr("type", "text");
            if (!Flits('#flits-form-profile .flits-input[name="birthdate"]').val()) {
                Flits('#flits-form-profile .flits-input[name="birthdate"]').val("");
            }
            Flits('#flits-form-profile .flits-inputl[name="referby"]').attr("readonly", true);
            Flits("#flits-form-profile select.flits-input").attr("disabled", true);
            Flits(".flits-profile-phone-with-country-div").addClass("flits-readonly-mode");
            Flits('#flits-form-profile .flits-input[name="phone"]').attr("value", Flits.myProfile.settings.phoneNumber);
            Flits('#flits-form-profile .flits-input[name="phone"]').val(Flits.myProfile.settings.phoneNumber);
            let selectGender = Flits("#flits-form-profile #flits-profile-gender").attr("data-flits-gender");
            Flits("#flits-form-profile #flits-profile-gender").val(selectGender);
        }
        Flits("#flits-form-profile input[type='tel'][name='phone']").keypress(function (event) {
            return Flits.isNumber(event);
        });
        Flits(document).on("click", ".flits-profile-cancel-button", function () {
            Flits("#flits-form-profile")[0].reset();
            profileNonEditForm();
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown select").trigger("change");
        });
        function getProfileErrorMsg(comment) {
            switch (comment) {
                case "phone is invalid":
                    return Flits.t("Flits.locals.profile_page.invalid_contact_number", "Contact number is not valid");
                    break;
                case "phone has already been taken":
                    return Flits.t("Flits.locals.profile_page.contact_number_already_taken", "This contact number is already in use. Please enter a different contact number.");
                    break;
                case "email is invalid":
                    return Flits.t("Flits.locals.profile_page.invalid_email", "Email is not valid");
                    break;
                case "email has already been taken":
                    return Flits.t("Flits.locals.profile_page.email_already_taken", "This email is already in use. Please enter a different email address.");
                    break;
                case "email contains an invalid domain name":
                    return Flits.t("Flits.locals.profile_page.invalid_email_domain", "Email contains an invalid domain name");
                    break;
                default:
                    return comment;
                    break;
            }
        }
        Flits(".flits-profile-save-button").on("click", function () {
            let phoneValue = Flits('#flits-form-profile input[name="phone"]').val();
            let countryValue = Flits("#flits-form-profile").find(".flits-profile-phone-with-country-div .flits-country-code-textbox").val();
            let phoneNumber = countryValue + phoneValue;
            let emailValue = Flits('#flits-form-profile input[name="email"]').val();
            if (!Flits.validateEmail(emailValue)) {
                Flits.myProfile.settings.emailValid = false;
                flitsSnackbar.show({ text: Flits.t("Flits.locals.profile_page.invalid_email", "Email is not valid"), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
            } else {
                Flits.myProfile.settings.emailValid = true;
            }
            Flits.myProfile.settings.phoneValid = true;
            if (phoneValue.length > 0) {
                if (!Flits.validatePhone(phoneNumber)) {
                    Flits.myProfile.settings.phoneValid = false;
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.profile_page.invalid_contact_number", "Contact number is not valid"), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                }
            }
            if (Flits.myProfile.settings.phoneValid && Flits.myProfile.settings.emailValid) {
                Flits("#flits-form-profile").submit();
            }
        });
        Flits("#flits-form-profile").submit(function (event) {
            event.preventDefault();
            let form = Flits(this);
            let params = form.serializeArray();
            let indexGender = params.findIndex(function (data) {
                return data.name == "gender";
            });
            if (params[indexGender].value == "none") {
                params.splice(indexGender, 1);
            }
            let index = params.findIndex(function (data) {
                return data.name == "phone";
            });
            let number = Flits('#flits-form-profile .flits-input[name="phone"]').val();
            let country = Flits("#flits-form-profile .flits-profile-phone-with-country-div .flits-country-code-textbox").val();
            if (number.length != 0) {
                params[index].value = country + number;
            }
            let url = Flits.base_url + "/" + Flits.customer_id + form.attr("action");
            let method = form.attr("method");
            params.push({ name: "customer_hash", value: Flits.customerHash }), params.push({ name: "token", value: Flits.token });
            flitsSnackbar.show({ text: Flits.t("Flits.locals.profile_page.save_details", "Saving profile details..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
            Flits.dispatchEvent("Flits:myProfile:BeforeUpdate", { params: params });
            Flits.ajax({ method: method, url: url, data: params })
                .done(function (resp) {
                    if (resp.status) {
                        Flits.myProfile.settings.phoneNumber = resp.customer.phone;
                        Flits("#flits-form-profile input").each(function (i, v) {
                            let inputVal = Flits(v).val().trim();
                            Flits(v).attr("value", inputVal);
                            Flits(v).val(inputVal);
                        });
                        Flits("[data-flits-birthdate]").attr("data-flits-birthdate", resp.customer.birthdate);
                        Flits.birthdayCountDown();
                        let greeting_text = Flits.t("Flits.locals.general.greeting", "Hello") + " " + Flits('#flits-form-profile input[name="first_name"]').val();
                        Flits(".flits-header-title h1").text(greeting_text);
                        let genderVal;
                        resp.customer.gender == null ? (genderVal = "none") : (genderVal = resp.customer.gender);
                        Flits("#flits-form-profile #flits-profile-gender").attr("data-flits-gender", genderVal);
                        profileNonEditForm();
                        Flits.dispatchEvent("Flits:myProfile:Updated", { resp: resp });
                        flitsSnackbar.show({ text: Flits.t("Flits.locals.profile_page.saved_successfully", "Profile updated successfully"), pos: "bottom-center", showAction: false, customClass: "flits-alert-success" });
                    } else {
                        let errors = JSON.parse(resp.response).errors;
                        let error_key = Object.keys(errors)[0];
                        let error_text = errors[Object.keys(errors)[0]][0];
                        error_text = getProfileErrorMsg(error_key + " " + error_text);
                        flitsSnackbar.show({ text: error_text, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                })
                .fail(function (resp) {
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.general.something_went_wrong", "Something went wrong. Please try again."), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                })
                .always(function () {});
        });
    });
    var deliveryAddress = (Flits.deliveryAddress = function (options) {
        Flits.deliveryAddress.settings = {};
        var settings = { addressList: null, totalAddress: 0, perPageLimit: 6, pageNo: 1, totaPages: 0 };
        settings = Flits.extend(Flits.deliveryAddress.settings, settings, options);
        Flits.dispatchEvent("Flits:deliveryAddress:Loaded", { settings: settings });
        Flits.deliveryAddress.settings.totalAddress = parseInt(Flits("div[data-address-count]").attr("data-address-count"));
        Flits.deliveryAddress.settings.totaPages = Math.ceil(Flits.deliveryAddress.settings.totalAddress / Flits.deliveryAddress.settings.perPageLimit);
        Flits(".flits-address-count-badge").html(Flits.deliveryAddress.settings.totalAddress);
        Flits(".flits-address-count-badge").removeClass("flits-menu-badge-hide");
        Flits(".flits-address-list-pagination-row").html("");
        Flits(".flits-address-display-container").removeClass("flits-d-none");
        Flits(".flits-address-loader").hide();
        Flits(".flits-address-add-save-button").attr("data-add-text", Flits.t("Flits.locals.address_page.save_button", "Save"));
        Flits(".flits-address-add-save-button").attr("data-update-text", Flits.t("Flits.locals.address_page.save_button", "Save"));
        Flits.each(Flits.setPhoneCountryCode.settings.countryOptionArr, function (key, value) {
            Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").append(value.clone());
        });
        function addressAppend(addressDesk, page) {
            let index = page * Flits.deliveryAddress.settings.perPageLimit - Flits.deliveryAddress.settings.perPageLimit;
            for (i = 0; i < addressDesk.length; i++) {
                if (!Flits(addressDesk[i]).hasClass("flits-default-hidden-card")) {
                    var newItem = new Flits.deliveryAddress.settings.addressList.Item(["id"], addressDesk[i]);
                    newItem._values["id"] = newItem.elm.dataset.id;
                    Flits.deliveryAddress.settings.addressList.items.splice(index + i, 0, newItem);
                    Flits.deliveryAddress.settings.addressList.update();
                }
            }
            setAddressData();
        }
        function getAddress(page) {
            let url = "/account?view=flits_address_template";
            Flits.ajax({ url: url, method: "GET", data: { page: page } })
                .done(function (res) {
                    let addressRows = Flits(res).filter(".flits-content").find(".flits-address-list-pagination-row .flits-address-card");
                    if (addressRows.length) {
                        addressAppend(addressRows, page);
                    } else {
                        Flits.dispatchEvent("Flits:deliveryAddress:AllLoaded");
                        return false;
                    }
                })
                .fail(function (resp) {})
                .always(function () {});
        }
        function setAddressData() {
            Flits(".flits-address-list-pagination-row").removeClass("flits-d-none");
            Flits(".flits-address-pagination-loader").hide();
        }
        function setPagination() {
            var options = { page: Flits.deliveryAddress.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" }, item: Flits(".flits-address-card-template")[0].outerHTML };
            Flits.deliveryAddress.settings.addressList = new flitsList("flits-address-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-delivery-address"]');
            });
            Flits.paginationDisabled(Flits.deliveryAddress.settings.addressList, '.flits-pagination-div[data-flits-pagination="flits-delivery-address"]');
        }
        if (Flits.deliveryAddress.settings.totalAddress == 0) {
            Flits(".flits-address-pagination-loader").hide();
        } else if (Flits.deliveryAddress.settings.totalAddress >= 2) {
            Flits(".flits-address-list-pagination-row").addClass("flits-hr");
        }
        setPagination();
        if (Flits.deliveryAddress.settings.totaPages >= 1) {
            for (i = 1; i <= Flits.deliveryAddress.settings.totaPages; i++) {
                getAddress(i);
            }
        }
        let form = Flits(".flits-address-form form");
        function shopifySetup() {
            if (Flits) {
                if (Flits.CountryProvinceSelector) {
                    new Flits.CountryProvinceSelector("AddressCountryNew", "AddressProvinceNew", { hideElement: "AddressProvinceContainerNew" });
                }
            }
        }
        shopifySetup();
        Flits.phoneNumberBind('.flits-input[name="address[phone]"]');
        function phoneWithContry() {
            let numberDetails;
            let countryIndex;
            let onlyNumber;
            let areaCode;
            if (form.find('.flits-input[name="address[phone]"]').val()) {
                numberDetails = new libphonenumber.parsePhoneNumber(form.find('.flits-input[name="address[phone]"]').val());
                countryIndex = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').val();
                areaCode = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + numberDetails.country + '"]').attr("data-country-code");
                onlyNumber = numberDetails.number.replace(areaCode, "");
                Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                form.find('.flits-input[name="address[phone]"]').val(onlyNumber);
            } else {
                Flits.shopCountryName = Flits.shopCountryName.replace("&amp;", "&");
                if (Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]')) {
                    countryIndex = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-name="' + Flits.shopCountryName + '"]').val();
                    Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                } else {
                    let defualtCountry = Flits.defualtCountry;
                    countryIndex = Flits('.flits-address-phone-with-country-div .flits-country-drpdown select option[data-country-iso-code="' + defualtCountry + '"]').val();
                    Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").val(countryIndex);
                }
            }
            Flits(".flits-address-phone-with-country-div .flits-country-drpdown select").trigger("change");
        }
        function addressForm(item) {
            form.find("#AddressFirstNameNew").val(item.attr("data-first-name"));
            form.find("#AddressLastNameNew").val(item.attr("data-last-name"));
            form.find("#AddressAddress1New").val(item.attr("data-address1"));
            form.find("#AddressAddress2New").val(item.attr("data-address2"));
            form.find("#AddressCompanyNew").val(item.attr("data-company"));
            form.find("#AddressZipNew").val(item.attr("data-zip"));
            form.find("#AddressPhoneNew").val(item.attr("data-phone"));
            form.find("#AddressCityNew").val(item.attr("data-city"));
            if (item.attr("data-country") != "") {
                form.find('[name="address[country]"] option')
                    .filter(function () {
                        return this.text == item.attr("data-country");
                    })
                    .prop("selected", true)
                    .attr("selected", true);
            }
            shopifySetup();
            if (item.attr("data-province") != "") {
                form.find('[name="address[province]"] option')
                    .filter(function () {
                        return this.text == item.attr("data-province");
                    })
                    .prop("selected", true)
                    .attr("selected", true);
            }
            item.attr("data-default") == "true" ? form.find("#address_default_address_new").parent().hide() : form.find("#address_default_address_new").parent().show();
            form.find("#address_default_address_new").attr("checked", item.attr("data-default") == "true" ? true : false);
            form.find("#form_type").val("edit");
            form.find(".flits-address-form-title").html(Flits.t("Flits.locals.address_page.edit_address", "Edit Address"));
            form.attr("action", "/account/addresses" + "/" + item.attr("data-id"));
            phoneWithContry();
        }
        function isPhoneValid() {
            let phoneValue = form.find('.flits-input[name="address[phone]"]').val();
            let countryValue = form.find(".flits-address-phone-with-country-div .flits-country-code-textbox").val();
            let phoneNumber = countryValue + phoneValue;
            if (phoneValue.length > 0) {
                if (!Flits.validatePhone(phoneNumber)) {
                    Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.invalid_contact_number", "Contact number is not valid"), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                } else {
                    form.submit();
                }
            } else {
                form.submit();
            }
        }
        function getAddressErrorMsg(comment) {
            switch (comment) {
                case "first_name is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.first_name_is_long", "First name is too long (maximum is 255 characters)");
                    break;
                case "last_name is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.last_name_is_long", "Last name is too long (maximum is 255 characters)");
                    break;
                case "address1 is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.address1_is_long", "Address1 is too long (maximum is 255 characters)");
                    break;
                case "address2 is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.address2_is_long", "Address2 is too long (maximum is 255 characters)");
                    break;
                case "company is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.company_name_is_long", "Company name is too long (maximum is 255 characters)");
                    break;
                case "city is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.city_is_long", "City is too long (maximum is 255 characters)");
                    break;
                case "zip is too long (maximum is 255 characters)":
                    return Flits.t("Flits.locals.address_page.zip_is_long", "Zip is too long (maximum is 255 characters)");
                    break;
                case "signature has already been taken":
                    return Flits.t("Flits.locals.address_page.address_already_taken", "This address already exists.");
                    break;
                case "country is not a valid country":
                    return Flits.t("Flits.locals.address_page.country_invalid", "Country is not valid");
                    break;
                default:
                    return comment;
                    break;
            }
        }
        Flits(form).submit(function (event) {
            event.preventDefault();
            let form = Flits(this);
            let formType = form.find("#form_type").val();
            let params = form.serializeArray();
            let index = params.findIndex(function (data) {
                return data.name == "address[phone]";
            });
            let number = form.find('.flits-input[name="address[phone]"]').val();
            let country = Flits(".flits-address-phone-with-country-div .flits-country-code-textbox").val();
            if (number.length != 0) {
                params[index].value = country + number;
            }
            let url = Flits.base_url + "/" + Flits.customer_id + form.attr("action");
            let method = form.attr("method");
            params.push({ name: "customer_hash", value: Flits.customerHash }), params.push({ name: "token", value: Flits.token });
            if (formType == "edit") {
                method = "PUT";
                params.push({ name: "_method", value: "PUT" });
                Flits.dispatchEvent("Flits:deliveryAddress:BeforeUpdate", { params: params });
                flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.updating_address", "Updating Address..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: false });
            } else {
                Flits.dispatchEvent("Flits:deliveryAddress:BeforeAdd", { params: params });
                flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.adding_new_address", "Adding New Address..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: false });
            }
            Flits.ajax({ method: method, url: url, data: params })
                .done(function (resp) {
                    if (resp.status) {
                        Flits.flitsSnackbarHide();
                        let adrs = resp.address.data;
                        let itemClone = Flits(".flits-address-card-template").clone();
                        itemClone.removeClass("flits-address-card-template");
                        itemClone.removeClass("flits-d-none");
                        if (formType == "edit") {
                            itemClone = Flits("div[data-id='" + adrs.id + "']");
                        } else {
                            Flits.deliveryAddress.settings.totalAddress = parseInt(Flits.deliveryAddress.settings.totalAddress) + 1;
                            Flits(".flits-address-count-badge").html(Flits.deliveryAddress.settings.totalAddress);
                            if (Flits.deliveryAddress.settings.totalAddress >= 2) {
                                Flits(".flits-address-list-pagination-row").addClass("flits-hr");
                            } else {
                                Flits(".flits-address-list-pagination-row").removeClass("flits-hr");
                            }
                        }
                        adrs.first_name == null ? (adrs.first_name = "") : (adrs.first_name = adrs.first_name);
                        adrs.last_name == null ? (adrs.last_name = "") : (adrs.last_name = adrs.last_name);
                        adrs.address1 == null ? (adrs.address1 = "") : (adrs.address1 = adrs.address1);
                        adrs.address2 == null ? (adrs.address2 = "") : (adrs.address2 = adrs.address2);
                        adrs.company == null ? (adrs.company = "") : (adrs.company = adrs.company);
                        adrs.zip == null ? (adrs.zip = "") : (adrs.zip = adrs.zip);
                        adrs.phone == null ? (adrs.phone = "") : (adrs.phone = adrs.phone);
                        adrs.city == null ? (adrs.city = "") : (adrs.city = adrs.city);
                        adrs.country == null ? (adrs.country = "") : (adrs.country = adrs.country);
                        adrs.province == null ? (adrs.province = "") : (adrs.province = adrs.province);
                        adrs.province_code == null ? (adrs.province_code = "") : (adrs.province_code = adrs.province_code);
                        itemClone = Flits(itemClone);
                        itemClone.attr("data-id", adrs.id);
                        itemClone.attr("data-first-name", adrs.first_name);
                        itemClone.attr("data-last-name", adrs.last_name);
                        itemClone.attr("data-address1", adrs.address1);
                        itemClone.attr("data-address2", adrs.address2);
                        itemClone.attr("data-company", adrs.company);
                        itemClone.attr("data-zip", adrs.zip);
                        itemClone.attr("data-phone", adrs.phone);
                        itemClone.attr("data-city", adrs.city);
                        itemClone.attr("data-country", adrs.country);
                        itemClone.attr("data-province", adrs.province);
                        itemClone.attr("data-default", adrs.default ? "true" : "false");
                        itemClone.find(".flits-address-name").html(adrs.first_name + " " + adrs.last_name);
                        itemClone.find(".flits-company-name").html(adrs.company);
                        itemClone.find(".flits-address1-name").html(adrs.address1);
                        itemClone.find(".flits-address2-name").html(adrs.address2);
                        itemClone.find(".flits-phone-number").html(adrs.phone);
                        itemClone.find(".flits-company-name").html(adrs.company);
                        itemClone.find(".flits-city-name").html(adrs.zip + " " + adrs.city + " " + adrs.province_code);
                        itemClone.find(".flits-country-name").html(adrs.country_name);
                        itemClone.find(".flits-address-edit-btn").attr("data-form-id", adrs.id);
                        itemClone.find(".flits-address-remove-btn").attr("data-form-id", adrs.id);
                        itemClone.find(".flits-address-default-btn").attr("data-form-id", adrs.id);
                        if (Flits.deliveryAddress.settings.totalAddress > 1) {
                            Flits(".flits-address-list-pagination-row").removeClass("flits-d-none");
                        }
                        if (adrs.default) {
                            if (formType == "edit") {
                                let addressStaticList = Flits(".flits-address-list-static-row");
                                let oldDefaultItem = Flits(addressStaticList).find(".flits-address-card.flits-address-default").removeClass("flits-address-default").attr("data-default", false);
                                var newItem = new Flits.deliveryAddress.settings.addressList.Item(["id"], oldDefaultItem[0]);
                                newItem._values["id"] = newItem.elm.dataset.id;
                                Flits.deliveryAddress.settings.addressList.remove("id", itemClone[0].dataset.id);
                                Flits.deliveryAddress.settings.addressList.items.push(newItem);
                                Flits.deliveryAddress.settings.addressList.update();
                                Flits(itemClone).addClass("flits-address-default").attr("data-default", true);
                                Flits(addressStaticList).append(itemClone);
                                Flits(addressStaticList).find(".flits-address-card[data-default='false']").remove();
                            } else {
                                let addressStaticList = Flits(".flits-address-list-static-row");
                                if (Flits.deliveryAddress.settings.totalAddress > 1) {
                                    let oldDefaultItem = Flits(addressStaticList).find(".flits-address-card.flits-address-default").removeClass("flits-address-default").attr("data-default", false);
                                    var newItem = new Flits.deliveryAddress.settings.addressList.Item(["id"], oldDefaultItem[0]);
                                    newItem._values["id"] = newItem.elm.dataset.id;
                                    Flits.deliveryAddress.settings.addressList.items.push(newItem);
                                    Flits.deliveryAddress.settings.addressList.update();
                                }
                                Flits(itemClone).addClass("flits-address-default");
                                Flits(addressStaticList).append(itemClone.clone());
                                Flits(addressStaticList).find(".flits-address-card[data-default='false']").remove();
                            }
                        } else {
                            if (formType == "edit") {
                                Flits.deliveryAddress.settings.addressList.update();
                            } else {
                                var newItem = new Flits.deliveryAddress.settings.addressList.Item(["id"], itemClone.clone()[0]);
                                newItem._values["id"] = newItem.elm.dataset.id;
                                Flits.deliveryAddress.settings.addressList.items.push(newItem);
                                Flits.deliveryAddress.settings.addressList.update();
                            }
                        }
                        if (formType == "edit") {
                            Flits.dispatchEvent("Flits:deliveryAddress:Updated", { resp: resp });
                            flitsSnackbar.show({
                                text: Flits.t("Flits.locals.address_page.address_updated_successfully", "Delivery address updated successfully"),
                                pos: "bottom-center",
                                showAction: false,
                                customClass: "flits-alert-success",
                            });
                        } else {
                            Flits.dispatchEvent("Flits:deliveryAddress:Added", { resp: resp });
                            flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.address_added_successfully", "Delivery address added successfully"), pos: "bottom-center", showAction: false, customClass: "flits-alert-success" });
                        }
                        Flits(".flits-address-cancel-btn").trigger("click");
                    } else {
                        Flits.flitsSnackbarHide();
                        let errors = JSON.parse(resp.response).errors;
                        let error_key = Object.keys(errors)[0];
                        let error_text = errors[Object.keys(errors)[0]][0];
                        error_text = getAddressErrorMsg(error_key + " " + error_text);
                        flitsSnackbar.show({ text: error_text, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                    Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                })
                .fail(function (resp) {
                    Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                    flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                })
                .always(function () {});
        });
        Flits(document).on("click", ".flits-new-address", function (event) {
            form.find("#address_default_address_new").parent().show();
            form.find("#address_default_address_new").attr("checked", false);
            Flits(".flits-address-display-container").addClass("flits-d-none");
            Flits(".flits-address-form").removeClass("flits-d-none");
            form.find("#form_type").val("new");
            form.attr("action", "/account/addresses");
            form.find(".flits-address-add-save-button").html(form.find(".flits-address-add-save-button").attr("data-add-text"));
            form.find(".flits-address-form-title").html(form.find(".flits-address-form-title").attr("data-original-text"));
            form[0].reset();
            let countryVal = form.find("#AddressCountryNew option")[0];
            countryVal = Flits(countryVal).val();
            let countryName = form.find("#AddressCountryNew option")[1];
            if (countryVal.indexOf("---") == 0) {
                form.find("#AddressCountryNew").val(Flits(countryName).val());
            }
            shopifySetup();
            phoneWithContry();
        });
        Flits(document).on("click", ".flits-address-cancel-btn", function () {
            form[0].reset();
            Flits(".flits-address-display-container").removeClass("flits-d-none");
            Flits(".flits-address-form").addClass("flits-d-none");
        });
        Flits(document).on("click", ".flits-address-edit-btn", function () {
            let item = Flits(this).parents(".flits-address-card");
            Flits(".flits-address-display-container").addClass("flits-d-none");
            Flits(".flits-address-form").removeClass("flits-d-none");
            form.find(".flits-address-add-save-button").html(form.find(".flits-address-add-save-button").attr("data-update-text"));
            addressForm(item);
            Flits("html, body").animate({ scrollTop: form.position().top + 145 });
        });
        Flits(document).on("click", ".flits-address-remove-btn", function () {
            Flits(".flits-address-card .flits-address-card-action").addClass("flits-disabled");
            let el = Flits(this);
            let formId = el.data("form-id");
            let confirmMessage = el.data("confirm-message");
            Flits.dispatchEvent("Flits:deliveryAddress:BeforeRemove", { el: el, form_id: formId });
            if (confirm(confirmMessage || Flits.t("Flits.locals.address_page.delete_confirmation_message", "Are you sure you want to delete this address?"))) {
                let url = "/account/addresses/" + formId;
                url = Flits.base_url + "/" + Flits.customer_id + url;
                flitsSnackbar.show({ text: Flits.t("Flits.locals.address_page.deleting_address", "Deleting Address..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                Flits.ajax({ method: "DELETE", url: url, data: { customer_hash: Flits.customerHash, token: Flits.token, _mehtod: "DELETE" } })
                    .done(function (resp) {
                        if (resp.status) {
                            Flits.deliveryAddress.settings.addressList.remove("id", formId);
                            Flits.deliveryAddress.settings.totalAddress = parseInt(Flits.deliveryAddress.settings.totalAddress) - 1;
                            Flits(".flits-address-count-badge").html(Flits.deliveryAddress.settings.totalAddress);
                            Flits.deliveryAddress.settings.totaPages = Math.ceil((Flits.deliveryAddress.settings.totalAddress - 1) / Flits.deliveryAddress.settings.perPageLimit);
                            let showItem = (Flits.deliveryAddress.settings.totaPages - 1) * Flits.deliveryAddress.settings.perPageLimit + 1;
                            if (Flits(".flits-address-list-pagination-row .flits-address-card").not(".flits-default-hidden-card").length == 0) {
                                Flits.deliveryAddress.settings.addressList.i = showItem;
                                Flits(".flits-address-pagination .flits-prev-btn").trigger("click");
                            }
                            Flits.deliveryAddress.settings.addressList.update();
                            if (Flits.deliveryAddress.settings.totalAddress >= 2) {
                                Flits(".flits-address-list-pagination-row").addClass("flits-hr");
                            } else {
                                Flits(".flits-address-list-pagination-row").removeClass("flits-hr");
                            }
                            Flits.dispatchEvent("Flits:deliveryAddress:Removed", { resp: resp });
                        } else {
                            flitsSnackbar.show({ text: resp.error, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                        }
                        Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                    })
                    .fail(function (resp) {
                        Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            } else {
                Flits(".flits-address-card .flits-address-card-action").removeClass("flits-disabled");
            }
        });
        Flits(document).on("click", ".flits-address-default-btn", function () {
            Flits(".flits-address-card .flits-address-card-action").addClass("flits-disabled");
            let item = Flits(this).parents(".flits-address-card");
            item.attr("data-default", "true");
            addressForm(item);
            isPhoneValid();
        });
        Flits(document).on("click", ".flits-address-add-save-button", function () {
            isPhoneValid();
        });
        form.find('.flits-input[name="address[phone]"]').keypress(function (event) {
            return Flits.isNumber(event);
        });
    });
    var order = (Flits.order = function (options) {
        Flits.order.settings = {};
        var settings = { orderList: null, perPageLimit: 3, totalOrder: 0, pageNo: Flits.getLocalStorage("order_page_no"), totaPages: 0, orderSize: 0, pageArray: [] };
        settings = Flits.extend(Flits.order.settings, settings, options);
        Flits.dispatchEvent("Flits:order:Loaded", { settings: settings });
        var showItem = 1;
        var isShowItem = true;
        Flits.order.settings.orderSize = parseInt(Flits("div[data-order-size]").attr("data-order-size"));
        Flits.order.settings.totalOrder = parseInt(Flits("div[data-order-count]").attr("data-order-count"));
        if (Flits.order.settings.totalOrder == 0 && Flits.order.settings.orderSize > 0) {
            Flits.order.settings.totalOrder = Flits.order.settings.orderSize;
        }
        Flits.order.settings.totaPages = Math.ceil(Flits.order.settings.totalOrder / Flits.order.settings.perPageLimit);
        Flits(".flits-order-count-badge").html(Flits.order.settings.totalOrder);
        Flits(".flits-order-count-badge").removeClass("flits-menu-badge-hide");
        Flits(".flits-order-div .flits-order-list").html("");
        function setOrdersSearch() {
            Flits(".flits-order-list-container").removeClass("flits-d-none");
            Flits(".flits-order-loader").hide();
            Flits(".flits-order-loader").remove();
        }
        function setPagination() {
            var options = { i: showItem, page: Flits.order.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.order.settings.orderList = new flitsList("flits-order-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-order"]');
            });
            Flits.paginationDisabled(Flits.order.settings.orderList, '.flits-pagination-div[data-flits-pagination="flits-order"]');
        }
        function ordersAppend(ordersDesk, page) {
            Flits(".flits-orders-temp .flits-orders").html(ordersDesk);
            Flits.dispatchEvent("Flits:order:contactUs");
            let orderRowsDesk = Flits(".flits-orders-temp .flits-orders").find(".flits-order-card").clone();
            let index = page * Flits.order.settings.perPageLimit - Flits.order.settings.perPageLimit;
            for (i = 0; i < orderRowsDesk.length; i++) {
                var newItem = new Flits.order.settings.orderList.Item([], orderRowsDesk[i]);
                Flits.order.settings.orderList.items.splice(index + i, 1);
                Flits.order.settings.orderList.items.splice(index + i, 0, newItem);
            }
            if (Flits.order.settings.orderList.items.length >= showItem && isShowItem) {
                isShowItem = false;
                Flits.order.settings.orderList.i = showItem;
                Flits.order.settings.orderList.update();
            } else {
                if (!isShowItem) {
                    Flits.order.settings.orderList.update();
                }
            }
        }
        function getOrderAjax(page, check) {
            Flits.order.settings.pageArray.push(page);
            let url = "/account?view=flits_order_template";
            Flits.ajax({ url: url, method: "GET", data: { page: page } })
                .done(function (res) {
                    let orderRows = Flits(res).filter(".flits-content").find(".flits-order-card").not(".flits-skeleton-order-card");
                    if (orderRows.length) {
                        ordersAppend(orderRows, page);
                        if (check) {
                            page++;
                            extraOrder(page);
                        }
                    } else {
                        Flits.setLocalStorage("total_order_count", Flits.order.settings.orderList.items.length);
                        Flits.dispatchEvent("Flits:order:AllLoaded");
                        Flits.order.settings.pageArray = Flits.order.settings.pageArray.filter(function (el) {
                            return el != page;
                        });
                        return false;
                    }
                })
                .fail(function (resp) {})
                .always(function () {});
        }
        function getOrders(startPage, endPage) {
            for (i = startPage; i <= endPage; i++) {
                if (!Flits.order.settings.pageArray.find((x) => x == i)) {
                    getOrderAjax(i, false);
                    if (i == endPage) {
                        if (!Flits.order.settings.pageArray.find((x) => x == 1)) {
                            endPage = startPage - 1;
                            startPage = 1;
                            i = startPage - 1;
                        }
                    }
                }
            }
        }
        function extraOrder(page) {
            if (!Flits.order.settings.pageArray.find((x) => x == page)) {
                getOrderAjax(page, true);
            }
        }
        if (Flits.order.settings.totalOrder > 0) {
            let skeletonOrderCount = 0;
            let pageNo = Flits.order.settings.pageNo;
            pageNo = pageNo == undefined ? 1 : pageNo;
            let totalOrderCount = Flits.getLocalStorage("total_order_count");
            skeletonOrderCount = Flits.order.settings.totalOrder;
            if (totalOrderCount != undefined) {
                skeletonOrderCount = Flits.order.settings.totalOrder > totalOrderCount ? Flits.order.settings.totalOrder : totalOrderCount;
            }
            for (i = 0; i < skeletonOrderCount; i++) {
                let skeletonDom = Flits(".flits-skeleton-order-template").clone();
                Flits(skeletonDom).removeClass("flits-skeleton-order-template");
                Flits(".flits-order-div .flits-order-list").append(skeletonDom);
                if (i == skeletonOrderCount - 1) {
                    Flits(".flits-skeleton-order-template").remove();
                }
            }
            showItem = (pageNo - 1) * Flits.order.settings.perPageLimit + 1;
            setPagination();
            setOrdersSearch();
            getOrderAjax(pageNo, false);
            if (pageNo > Flits.order.settings.totaPages) {
                getOrders(1, pageNo - 1);
                extraOrder(pageNo + 1);
            } else {
                getOrders(1, Flits.order.settings.totaPages);
                extraOrder(Flits.order.settings.totaPages + 1);
            }
        } else {
            Flits(".flits-order-empty").removeClass("flits-d-none");
            Flits(".flits-order-loader").hide();
            Flits(".flits-order-loader").remove();
        }
        Flits(".flits-order-div .flits-pagination").bind("click", function (event) {
            Flits.setLocalStorage("order_page_no", parseInt(Flits(event.target).text()));
            Flits.dispatchEvent("Flits:order:pageClick", { pageNo: parseInt(Flits(event.target).text()) });
            Flits.dispatchEvent("Flits:order:contactUs");
        });
        Flits(document).on("click", ".flits-order-details-btn", function () {
            let buttin_s = Flits(this);
            let hide_text = Flits.t("Flits.locals.order_page.hide_order_details", "Hide Order");
            let show_text = Flits.t("Flits.locals.order_page.show_order_details", "View Order");
            if (Flits(this).parents(".flits-order-card").find(".flits-order-details-summary").is(":visible")) {
                buttin_s.text(show_text);
            } else {
                buttin_s.text(hide_text);
            }
            Flits(this).parents(".flits-order-card").find(".flits-order-details-summary").slideToggle();
        });
        Flits(document).on("click", ".flits-reorder-btn", function () {
            let items = flitsOrder[Flits(this).attr("data-target")];
            let params = {};
            let noItem = 0;
            let soldOutItem = 0;
            params["items"] = [];
            if (items.length > 0) {
                for (let i = 0; items.length > i; i++) {
                    let item = items[i];
                    if (!item.item_variant_id) {
                        noItem++;
                    } else {
                        if (item.available == "true") {
                            if (parseInt(item.inventory_quantity) <= parseInt(item.quantity)) {
                                if (cartOrder[item.variant_id]) {
                                    if (parseInt(item.inventory_quantity) > parseInt(cartOrder[item.variant_id].cart_quantity)) {
                                        item.quantity = parseInt(item.inventory_quantity) - parseInt(cartOrder[item.variant_id].cart_quantity);
                                    } else {
                                        item.quantity = parseInt(item.inventory_quantity);
                                    }
                                    flitsSnackbar.show({
                                        text: Flits.t("Flits.locals.general.cart_updated", "Some items are no longer available. Your cart has been updated."),
                                        pos: "bottom-center",
                                        showAction: false,
                                        customClass: "flits-alert-default",
                                    });
                                }
                            } else {
                                if (cartOrder[item.variant_id]) {
                                    if (parseInt(item.inventory_quantity) <= parseInt(cartOrder[item.variant_id].cart_quantity) + parseInt(item.quantity)) {
                                        item.quantity = parseInt(item.inventory_quantity) - parseInt(cartOrder[item.variant_id].cart_quantity);
                                        flitsSnackbar.show({
                                            text: Flits.t("Flits.locals.general.cart_updated", "Some items are no longer available. Your cart has been updated."),
                                            pos: "bottom-center",
                                            showAction: false,
                                            customClass: "flits-alert-default",
                                        });
                                    }
                                }
                            }
                            params["items"].push({ id: item.variant_id, quantity: item.quantity });
                        } else {
                            soldOutItem++;
                        }
                    }
                }
                if (noItem == 1) {
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.one_product_unavailable", "One of the products is unavailable"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                } else if (noItem > 1) {
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.some_products_unavailable", "Some of the products are unavailable"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                }
                if (soldOutItem == 1) {
                    setTimeout(
                        function () {
                            flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.one_product_sold_out", "One of the products is sold out."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                        },
                        noItem > 0 ? 1500 : 0
                    );
                } else if (soldOutItem > 1) {
                    setTimeout(
                        function () {
                            flitsSnackbar.show({ text: Flits.t("Flits.locals.order_page.some_products_sold_out", "Some of the products are sold out"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
                        },
                        noItem > 0 ? 1500 : 0
                    );
                }
                Flits.dispatchEvent("Flits:order:BeforeReOrder", { params: params });
                setTimeout(
                    function () {
                        Flits.addToCart(params);
                    },
                    soldOutItem > 0 || noItem > 0 ? 2500 : 1000
                );
            }
        });
    });
    var contactUS = (Flits.contactUS = function (options) {
        Flits.contactUS.settings = {};
        var settings = {
            formId: window.flitsApp.formId,
            flitsFormId: window.flitsApp.flitsFormId,
            formError: false,
            contactUsHandle: "contact_us_order_list_" + Flits.customer_id,
            queue: "",
            alertIcon: '<span class="flits-error-icon"></span>',
            emailRequiredWarning: Flits.t("Flits.locals.order_contact_us.email_required_warning", "Email is required"),
            invalidEmailWarning: Flits.t("Flits.locals.order_contact_us.invalid_email_warning", "Please enter a valid email address"),
            invalidPhoneNumberWarning: Flits.t("Flits.locals.order_contact_us.invalid_contact_number_warning", "Please enter a valid contact number"),
            reasonRequiredWarning: Flits.t("Flits.locals.order_contact_us.reason_required_warning", "Please select a reason"),
            messageRequiredWarning: Flits.t("Flits.locals.order_contact_us.message_required_warning", "Message is required"),
            invalidAttachmentLinkWarning: Flits.t("Flits.locals.order_contact_us.invalid_attachment_link_warning", "Please enter a valid attachment link"),
            alreadyContactedMessage: Flits.t("Flits.locals.order_contact_us.already_contacted_message", "You have contacted us last on {{ date_time }}"),
            shopCountryName: Flits.shopCountryName,
            months: [
                Flits.t("Flits.locals.months.january", "January"),
                Flits.t("Flits.locals.months.february", "February"),
                Flits.t("Flits.locals.months.march", "March"),
                Flits.t("Flits.locals.months.april", "April"),
                Flits.t("Flits.locals.months.may", "May"),
                Flits.t("Flits.locals.months.june", "June"),
                Flits.t("Flits.locals.months.july", "July"),
                Flits.t("Flits.locals.months.august", "August"),
                Flits.t("Flits.locals.months.september", "September"),
                Flits.t("Flits.locals.months.october", "October"),
                Flits.t("Flits.locals.months.november", "November"),
                Flits.t("Flits.locals.months.december", "December"),
            ],
            noOfDay: 7,
            errorSelector: "flits-input-error",
            activeClassSelector: "flits-active",
            phoneValid: true,
            emailValid: false,
            reasonValid: false,
            messageValid: false,
            urlValid: true,
        };
        settings = Flits.extend(Flits.contactUS.settings, settings, options);
        Flits.dispatchEvent("Flits:contactUS:Loaded", { settings: settings });
        Flits.each(Flits.setPhoneCountryCode.settings.countryOptionArr, function (key, value) {
            Flits(".flits-contact-us-phone-number-country-div select").append(value);
        });
        Flits(document).on("Flits:myProfile:Updated", function () {
            Flits("#flits-contact-form .flits-form-first-name").attr("value", Flits("#flits-form-profile input[name='first_name']").val());
            Flits("#flits-contact-form .flits-form-last-name").attr("value", Flits("#flits-form-profile input[name='last_name']").val());
            Flits("#flits-contact-form .flits-form-email").attr("value", Flits("#flits-form-profile input[name='email']").val());
            Flits("#flits-contact-form .flits-form-phone").attr("value", Flits("#flits-form-profile input[name='phone']").attr("value"));
        });
        Flits("body").append(Flits("#flits-contact-us-form"));
        Flits("body").append(Flits("#flits-contact-us-form-success"));
        Flits.phoneNumberBind("#flits-contact-us-form .flits-form-phone");
        updateContactUs();
        Flits(document).on("Flits:order:AllLoaded", function () {
            contactUsDone();
        });
        Flits(document).on("Flits:order:contactUs", function () {
            contactUsDone();
        });
        function messageOnChange(el) {
            Flits("#flits-msg-count").html(el.value.length + " / 250");
        }
        function emailValidationCheck(keyup) {
            let selector = ".flits-form-email";
            let alertSelector = "#flits-alert-email";
            let statusVal = Flits(selector).val();
            if (keyup == 0) {
                if (statusVal.length == 0) {
                    Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.emailRequiredWarning);
                    Flits.contactUS.settings.emailValid = false;
                } else if (!Flits.validateEmail(statusVal)) {
                    Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(Flits.contactUS.settings.invalidEmailWarning);
                    Flits.contactUS.settings.emailValid = false;
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html("");
                    Flits.contactUS.settings.emailValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html("");
            }
        }
        function phoneValidationCheck(keyup) {
            let selector = ".flits-form-phone";
            let countryVal = Flits(".flits-contact-us-phone-number-country-div").find(".flits-country-code-textbox").val();
            let alertSelector = "#flits-alert-phone";
            let statusVal = Flits(selector).val();
            let phoneNumber = countryVal + statusVal;
            if (keyup == 0) {
                if (statusVal.length > 0) {
                    if (!Flits.validatePhone(phoneNumber)) {
                        Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.invalidPhoneNumberWarning);
                        Flits.contactUS.settings.phoneValid = false;
                    } else {
                        Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(alertSelector).html("");
                        Flits.contactUS.settings.phoneValid = true;
                    }
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(alertSelector).html("");
                    Flits.contactUS.settings.phoneValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
            }
        }
        function reasonValidationCheck() {
            let selector = ".flits-form-reason";
            let alertSelector = "#flits-alert-reason";
            let statusVal = Flits(selector).val();
            if (statusVal == null) {
                Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.reasonRequiredWarning);
                Flits.contactUS.settings.reasonValid = false;
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
                Flits.contactUS.settings.reasonValid = true;
            }
        }
        function messageValidationCheck(keyup) {
            let selector = ".flits-form-message";
            let alertSelector = "#flits-alert-message";
            let statusVal = Flits(selector).val();
            if (keyup == 0) {
                if (statusVal.trim().length == 0) {
                    Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.messageRequiredWarning);
                    Flits.contactUS.settings.messageValid = false;
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(alertSelector).html("");
                    Flits.contactUS.settings.messageValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
            }
        }
        function urlValidationCheck(keyup) {
            let selector = ".flits-form-url";
            let alertSelector = "#flits-alert-url";
            let statusVal = Flits(selector).val();
            if (keyup == 0) {
                if (statusVal.length > 0) {
                    if (!Flits.validateUrl(statusVal)) {
                        Flits(selector).addClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(Flits.contactUS.settings.alertIcon + Flits.contactUS.settings.invalidAttachmentLinkWarning);
                        Flits.contactUS.settings.urlValid = false;
                    } else {
                        Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                        Flits(alertSelector).html(alertSelector).html("");
                        Flits.contactUS.settings.urlValid = true;
                    }
                } else {
                    Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                    Flits(alertSelector).html(alertSelector).html("");
                    Flits.contactUS.settings.urlValid = true;
                }
            } else {
                Flits(selector).removeClass(Flits.contactUS.settings.errorSelector);
                Flits(alertSelector).html(alertSelector).html("");
            }
        }
        Flits(".flits-form-phone").on("keyup", function (event) {
            phoneValidationCheck(1);
        });
        Flits(".flits-form-phone").on("keypress", function (event) {
            return Flits.isNumber(event);
        });
        Flits(".flits-form-email").on("keyup", function (event) {
            emailValidationCheck(1);
        });
        Flits(".flits-form-url").on("keyup", function (event) {
            urlValidationCheck(1);
        });
        Flits(".flits-form-message").on("keyup", function (event) {
            messageOnChange(this);
            messageValidationCheck(1);
        });
        Flits(".flits-form-reason").on("change", function (event) {
            reasonValidationCheck(1);
        });
        function updateContactUs() {
            if (Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle) == null || Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle) == undefined) {
                Flits.setLocalStorage(Flits.contactUS.settings.contactUsHandle, []);
                Flits.contactUS.settings.queue = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            } else {
                Flits.contactUS.settings.queue = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            }
        }
        function contactFormSubmit() {
            emailValidationCheck(0);
            phoneValidationCheck(0);
            reasonValidationCheck(0);
            messageValidationCheck(0);
            urlValidationCheck(0);
            if (
                Flits.contactUS.settings.emailValid == true &&
                Flits.contactUS.settings.reasonValid == true &&
                Flits.contactUS.settings.messageValid == true &&
                Flits.contactUS.settings.phoneValid == true &&
                Flits.contactUS.settings.urlValid == true
            ) {
                formValueSet();
                let _orderNumber = Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-number").val();
                let _contactedAt = new Date();
                var index = Flits.contactUS.settings.queue.findIndex(function (data) {
                    return data.order_number == _orderNumber;
                });
                if (index != -1) {
                    Flits.contactUS.settings.queue[index].contacted_at = _contactedAt;
                } else {
                    Flits.contactUS.settings.queue.push({ order_number: _orderNumber, contacted_at: _contactedAt });
                }
                Flits.setLocalStorage(Flits.contactUS.settings.contactUsHandle, Flits.contactUS.settings.queue);
                Flits("#" + Flits.contactUS.settings.flitsFormId)[0].submit();
            }
        }
        function dateFormating(date) {
            let datetime = new Date(date);
            let formatted_date = datetime.getDate() + " " + Flits.contactUS.settings.months[datetime.getMonth()] + " " + datetime.getFullYear();
            let hours = datetime.getHours();
            let minutes = datetime.getMinutes();
            minutes = minutes < 10 ? "0" + minutes : minutes;
            let ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            let formatted_time = hours + ":" + minutes + " " + ampm;
            return formatted_date + ", " + formatted_time;
        }
        function contactFormReset() {
            Flits("#" + Flits.contactUS.settings.formId)[0].reset();
            Flits("#" + Flits.contactUS.settings.flitsFormId)[0].reset();
            let classOne = Flits("#" + Flits.contactUS.settings.formId + "-email");
            let classTwo = Flits("#" + Flits.contactUS.settings.formId + "-phone");
            let classThree = Flits("#" + Flits.contactUS.settings.formId + "-reason");
            let classFour = Flits("#" + Flits.contactUS.settings.formId + "-message");
            let classFive = Flits("#" + Flits.contactUS.settings.formId + "-url");
            let allClasses = [classOne, classTwo, classThree, classFour, classFive];
            Flits.each(allClasses, function (id, el) {
                Flits(el).removeClass("flits-input-success");
                Flits(el).removeClass("flits-input-error");
            });
            Flits(".flits-form-alert").each(function (e, v) {
                Flits(v).html("");
            });
        }
        Flits("#flits-contactus-submit").on("click", function () {
            contactFormSubmit();
        });
        function formValueSet() {
            var _customerName = Flits("#" + Flits.contactUS.settings.formId + "-first-name").val() + " " + Flits("#" + Flits.contactUS.settings.formId + "-last-name").val();
            var _customerEmail = Flits("#" + Flits.contactUS.settings.formId + "-email").val();
            var _customerCountry = Flits("#" + Flits.contactUS.settings.formId + " .flits-country-code-textbox").val();
            var _customerMobile = Flits("#" + Flits.contactUS.settings.formId + "-phone").val();
            var _customerPhoneNo = _customerCountry + _customerMobile;
            var _customerReason = Flits("#" + Flits.contactUS.settings.formId + "-reason").val();
            var _customerMessage = Flits("#" + Flits.contactUS.settings.formId + "-message").val();
            var _customerAttachLink = Flits("#" + Flits.contactUS.settings.formId + "-url").val();
            if (_customerName.trim().length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").val(_customerName.trim());
            }
            if (_customerEmail.length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").val(_customerEmail);
            }
            if (_customerMobile.length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").val(_customerPhoneNo);
            }
            if (_customerMessage.trim().length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").val(_customerMessage);
            }
            if (_customerReason.trim().length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").val(_customerReason);
            }
            if (_customerAttachLink.length == 0) {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").attr("disabled", true);
            } else {
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").removeAttr("disabled");
                Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").val(_customerAttachLink);
            }
            Flits.setLocalStorage("customer_name", _customerName);
            Flits.setLocalStorage("customer_email", _customerEmail);
            Flits.setLocalStorage("customer_phone", _customerPhoneNo);
            Flits.setLocalStorage("customer_message", _customerMessage);
            Flits.setLocalStorage("customer_reason", _customerReason);
            Flits.setLocalStorage("customer_attachment_url", _customerAttachLink);
        }
        function phoneWithContry() {
            let numberDetails;
            let countryIndex;
            let onlyNumber;
            let areaCode;
            if (Flits("#" + Flits.contactUS.settings.formId + "-phone").val()) {
                numberDetails = new libphonenumber.parsePhoneNumber(Flits("#" + Flits.contactUS.settings.formId + "-phone").val());
                countryIndex = Flits('.flits-contact-us-phone-number-country-div select option[data-country-iso-code="' + numberDetails.country + '"]').val();
                areaCode = Flits('.flits-contact-us-phone-number-country-div select option[data-country-iso-code="' + numberDetails.country + '"]').attr("data-country-code");
                onlyNumber = numberDetails.number.replace(areaCode, "");
                Flits(".flits-contact-us-phone-number-country-div select").val(countryIndex);
                Flits("#" + Flits.contactUS.settings.formId + "-phone").val(onlyNumber);
            } else {
                Flits.shopCountryName = Flits.shopCountryName.replace("&amp;", "&");
                if (Flits('.flits-contact-us-phone-number-country-div select option[data-country-name="' + Flits.shopCountryName + '"]')) {
                    countryIndex = Flits('.flits-contact-us-phone-number-country-div select option[data-country-name="' + Flits.shopCountryName + '"]').val();
                    Flits(".flits-contact-us-phone-number-country-div select").val(countryIndex);
                } else {
                    let defualtCountry = Flits.defualtCountry;
                    countryIndex = Flits('.flits-contact-us-phone-number-country-div select option[data-country-iso-code="' + defualtCountry + '"]').val();
                    Flits(".flits-contact-us-phone-number-country-div select").val(countryIndex);
                }
            }
            Flits(".flits-contact-us-phone-number-country-div select").trigger("change");
        }
        Flits(document).on("click", ".flits-contact-us-btn", function (event) {
            contactFormReset();
            phoneWithContry();
            let orderNumber = Flits(this).attr("data-flits-order-number");
            let orderName = Flits(this).attr("data-flits-order-name");
            let orderDate = Flits(this).attr("data-flits-order-date");
            let orderTotal = Flits(this).attr("data-flits-order-total");
            let orderFulfillmentStatus = Flits(this).attr("data-flits-order-fulfillment-status");
            let orderPaymentStatus = Flits(this).attr("data-flits-order-payment-status");
            let orderLink = Flits(this).attr("data-flits-order-link");
            let customerLink = Flits(this).attr("data-flits-customer-link");
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-number").val(orderNumber);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-name").val(orderName);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-date").val(orderDate);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-total").val(orderTotal);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-fulfillment-status").val(orderFulfillmentStatus);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-payment-status").val(orderPaymentStatus);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-link").val(orderLink);
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-link").val(customerLink);
            Flits.setLocalStorage("order_number", orderNumber);
            Flits.setLocalStorage("order_name", orderName);
            Flits.setLocalStorage("order_date", orderDate);
            Flits.setLocalStorage("order_total", orderTotal);
            Flits.setLocalStorage("order_fulfillment_status", orderFulfillmentStatus);
            Flits.setLocalStorage("order_payment_status", orderPaymentStatus);
            Flits.setLocalStorage("order_link", orderLink);
            Flits.setLocalStorage("customer_link", customerLink);
            Flits("body").css("overflow", "hidden");
            Flits("#flits-contact-us-form").addClass("active-popup");
        });
        Flits(document).on("click", ".flits-close-popup", function () {
            Flits("body").css("overflow", "auto");
            let modal_Id = Flits(this).parents(".flits-order-contact-us-popup").attr("id");
            if (modal_Id == "flits-contact-us-form") {
                Flits("#flits-contact-us-form").removeClass("active-popup");
            } else if (modal_Id == "flits-contact-us-form-success") {
                Flits("#flits-contact-us-form-success").removeClass("active-popup");
            }
        });
        Flits(document).on("click", ".flits-contactus-success-btn", function () {
            Flits("body").css("overflow", "auto");
            Flits("#flits-contact-us-form-success").removeClass("active-popup");
        });
        Flits(document).on("click", ".flits-notify-close", function () {
            let tooltipNo = Flits(this).parents(".flits-contact-us-tooltip ").attr("data-flits-order-number");
            Flits('.flits-contact-us-tooltip[data-flits-order-number="' + tooltipNo + '"]').removeClass("flits-tooltip-active");
        });
        if (Flits.contactUS.settings.formError == true) {
            Flits.contactUS.settings.formError = false;
            let existing = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            existing.pop();
            Flits.setLocalStorage(Flits.contactUS.settings.contactUsHandle, existing);
            Flits("#flits-contact-us-form").addClass("active-popup");
            Flits("body").css("overflow", "hidden");
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-name").val(Flits.getLocalStorage("customer_name"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-email").val(Flits.getLocalStorage("customer_email"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-phone").val(Flits.getLocalStorage("customer_phone"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-message").val(Flits.getLocalStorage("customer_message"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-reason").val(Flits.getLocalStorage("customer_reason"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-url").val(Flits.getLocalStorage("customer_attachment_url"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-number").val(Flits.getLocalStorage("order_number"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-name").val(Flits.getLocalStorage("order_name"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-date").val(Flits.getLocalStorage("order_date"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-total").val(Flits.getLocalStorage("order_total"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-fulfillment-status").val(Flits.getLocalStorage("order_fulfillment_status"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-payment-status").val(Flits.getLocalStorage("order_payment_status"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-order-link").val(Flits.getLocalStorage("order_link"));
            Flits("#" + Flits.contactUS.settings.flitsFormId + "-customer-link").val(Flits.getLocalStorage("customer_link"));
        } else {
            let newURL = location.href.split("?")[0];
            let url_string = window.location.href;
            let url = new URL(url_string);
            let c = url.searchParams.get("contact_posted");
            if (c) {
                window.history.pushState("object", document.title, newURL + "#order");
                Flits.navigationFunc("#order");
                Flits("#flits-contact-us-form-success").addClass("active-popup");
                Flits("body").css("overflow", "hidden");
            }
        }
        function contactUsDone() {
            let contactUsLocal = Flits.getLocalStorage(Flits.contactUS.settings.contactUsHandle);
            let filtered = contactUsLocal;
            contactUsLocal.forEach(function notifyInserFunc(item, index) {
                if (Flits.timeDiffer({ date1: item.contacted_at, date2: new Date(), type: "day" }) < Flits.contactUS.settings.noOfDay) {
                    let orderMessageText = Flits.contactUS.settings.alreadyContactedMessage.replace("{{ date_time }}", dateFormating(item.contacted_at));
                    if (Flits('.flits-contact-us-btn[data-flits-order-number="' + item.order_number + '"]')) {
                        Flits('.flits-contact-us-btn[data-flits-order-number="' + item.order_number + '"]').attr("data-flits-contact-done", true);
                        Flits('.flits-contact-us-tooltip[data-flits-order-number="' + item.order_number + '"] .flits-notify-msg').html(orderMessageText);
                        Flits('.flits-contact-us-tooltip[data-flits-order-number="' + item.order_number + '"]').addClass("flits-tooltip-active");
                    }
                } else {
                }
            });
        }
    });
    var setPhoneCountryCode = (Flits.setPhoneCountryCode = function (options) {
        Flits.setPhoneCountryCode.settings = {};
        var settings = {
            countryOptionArr: [],
            country_list: [
                { countryName: "Afghanistan", code: "AF", phoneCode: "93" },
                { countryName: "Åland Islands", code: "AX", phoneCode: "358" },
                { countryName: "Albania", code: "AL", phoneCode: "355" },
                { countryName: "Algeria", code: "DZ", phoneCode: "213" },
                { countryName: "American Samoa", code: "AS", phoneCode: "1684" },
                { countryName: "Andorra", code: "AD", phoneCode: "376" },
                { countryName: "Angola", code: "AO", phoneCode: "244" },
                { countryName: "Anguilla", code: "AI", phoneCode: "1264" },
                { countryName: "Antigua & Barbuda", code: "AG", phoneCode: "1268" },
                { countryName: "Argentina", code: "AR", phoneCode: "54" },
                { countryName: "Armenia", code: "AM", phoneCode: "374" },
                { countryName: "Aruba", code: "AW", phoneCode: "297" },
                { countryName: "Australia", code: "AU", phoneCode: "61" },
                { countryName: "Austria", code: "AT", phoneCode: "43" },
                { countryName: "Azerbaijan", code: "AZ", phoneCode: "994" },
                { countryName: "Bahamas", code: "BS", phoneCode: "1242" },
                { countryName: "Bahrain", code: "BH", phoneCode: "973" },
                { countryName: "Bangladesh", code: "BD", phoneCode: "880" },
                { countryName: "Barbados", code: "BB", phoneCode: "1246" },
                { countryName: "Belarus", code: "BY", phoneCode: "375" },
                { countryName: "Belgium", code: "BE", phoneCode: "32" },
                { countryName: "Belize", code: "BZ", phoneCode: "501" },
                { countryName: "Benin", code: "BJ", phoneCode: "229" },
                { countryName: "Bermuda", code: "BM", phoneCode: "1441" },
                { countryName: "Bhutan", code: "BT", phoneCode: "975" },
                { countryName: "Bolivia", code: "BO", phoneCode: "591" },
                { countryName: "Bosnia & Herzegovina", code: "BA", phoneCode: "387" },
                { countryName: "Botswana", code: "BW", phoneCode: "267" },
                { countryName: "Brazil", code: "BR", phoneCode: "55" },
                { countryName: "British Indian Ocean Territory", code: "IO", phoneCode: "246" },
                { countryName: "British Virgin Islands", code: "VG", phoneCode: "1284" },
                { countryName: "Brunei", code: "BN", phoneCode: "673" },
                { countryName: "Bulgaria", code: "BG", phoneCode: "359" },
                { countryName: "Burkina Faso", code: "BF", phoneCode: "226" },
                { countryName: "Burundi", code: "BI", phoneCode: "257" },
                { countryName: "Cambodia", code: "KH", phoneCode: "855" },
                { countryName: "Cameroon", code: "CM", phoneCode: "237" },
                { countryName: "Canada", code: "CA", phoneCode: "1" },
                { countryName: "Cape Verde", code: "CV", phoneCode: "238" },
                { countryName: "Cayman Islands", code: "KY", phoneCode: "1345" },
                { countryName: "Central African Republic", code: "CF", phoneCode: "236" },
                { countryName: "Chad", code: "TD", phoneCode: "235" },
                { countryName: "Chile", code: "CL", phoneCode: "56" },
                { countryName: "China", code: "CN", phoneCode: "86" },
                { countryName: "Christmas Island", code: "CX", phoneCode: "61" },
                { countryName: "Cocos (Keeling) Islands", code: "CC", phoneCode: "61" },
                { countryName: "Colombia", code: "CO", phoneCode: "57" },
                { countryName: "Comoros", code: "KM", phoneCode: "269" },
                { countryName: "Cook Islands", code: "CK", phoneCode: "682" },
                { countryName: "Costa Rica", code: "CR", phoneCode: "506" },
                { countryName: "Croatia", code: "HR", phoneCode: "385" },
                { countryName: "Cuba", code: "CU", phoneCode: "53" },
                { countryName: "Curaçao", code: "CW", phoneCode: "5999" },
                { countryName: "Cyprus", code: "CY", phoneCode: "357" },
                { countryName: "Czechia", code: "CZ", phoneCode: "420" },
                { countryName: "DR Congo", code: "CD", phoneCode: "243" },
                { countryName: "Denmark", code: "DK", phoneCode: "45" },
                { countryName: "Djibouti", code: "DJ", phoneCode: "253" },
                { countryName: "Dominica", code: "DM", phoneCode: "1767" },
                { countryName: "Dominican Republic", code: "DO", phoneCode: "1809" },
                { countryName: "Dominican Republic", code: "DO", phoneCode: "1829" },
                { countryName: "Dominican Republic", code: "DO", phoneCode: "1849" },
                { countryName: "Ecuador", code: "EC", phoneCode: "593" },
                { countryName: "Egypt", code: "EG", phoneCode: "20" },
                { countryName: "El Salvador", code: "SV", phoneCode: "503" },
                { countryName: "Equatorial Guinea", code: "GQ", phoneCode: "240" },
                { countryName: "Eritrea", code: "ER", phoneCode: "291" },
                { countryName: "Estonia", code: "EE", phoneCode: "372" },
                { countryName: "Ethiopia", code: "ET", phoneCode: "251" },
                { countryName: "Falkland Islands", code: "FK", phoneCode: "500" },
                { countryName: "Faroe Islands", code: "FO", phoneCode: "298" },
                { countryName: "Fiji", code: "FJ", phoneCode: "679" },
                { countryName: "Finland", code: "FI", phoneCode: "358" },
                { countryName: "France", code: "FR", phoneCode: "33" },
                { countryName: "French Guiana", code: "GF", phoneCode: "594" },
                { countryName: "French Polynesia", code: "PF", phoneCode: "689" },
                { countryName: "Gabon", code: "GA", phoneCode: "241" },
                { countryName: "Gambia", code: "GM", phoneCode: "220" },
                { countryName: "Georgia", code: "GE", phoneCode: "995" },
                { countryName: "Germany", code: "DE", phoneCode: "49" },
                { countryName: "Ghana", code: "GH", phoneCode: "233" },
                { countryName: "Gibraltar", code: "GI", phoneCode: "350" },
                { countryName: "Greece", code: "GR", phoneCode: "30" },
                { countryName: "Greenland", code: "GL", phoneCode: "299" },
                { countryName: "Grenada", code: "GD", phoneCode: "1473" },
                { countryName: "Guadeloupe", code: "GP", phoneCode: "590" },
                { countryName: "Guam", code: "GU", phoneCode: "1671" },
                { countryName: "Guatemala", code: "GT", phoneCode: "502" },
                { countryName: "Guernsey", code: "GG", phoneCode: "44" },
                { countryName: "Guinea", code: "GN", phoneCode: "224" },
                { countryName: "Guinea-Bissau", code: "GW", phoneCode: "245" },
                { countryName: "Guyana", code: "GY", phoneCode: "592" },
                { countryName: "Haiti", code: "HT", phoneCode: "509" },
                { countryName: "Honduras", code: "HN", phoneCode: "504" },
                { countryName: "Hong Kong", code: "HK", phoneCode: "852" },
                { countryName: "Hungary", code: "HU", phoneCode: "36" },
                { countryName: "Iceland", code: "IS", phoneCode: "354" },
                { countryName: "India", code: "IN", phoneCode: "91" },
                { countryName: "Indonesia", code: "ID", phoneCode: "62" },
                { countryName: "Iran", code: "IR", phoneCode: "98" },
                { countryName: "Iraq", code: "IQ", phoneCode: "964" },
                { countryName: "Ireland", code: "IE", phoneCode: "353" },
                { countryName: "Isle of Man", code: "IM", phoneCode: "44" },
                { countryName: "Israel", code: "IL", phoneCode: "972" },
                { countryName: "Italy", code: "IT", phoneCode: "39" },
                { countryName: "Ivory Coast", code: "CI", phoneCode: "225" },
                { countryName: "Jamaica", code: "JM", phoneCode: "1876" },
                { countryName: "Japan", code: "JP", phoneCode: "81" },
                { countryName: "Jersey", code: "JE", phoneCode: "44" },
                { countryName: "Jordan", code: "JO", phoneCode: "962" },
                { countryName: "Kazakhstan", code: "KZ", phoneCode: "77" },
                { countryName: "Kazakhstan", code: "KZ", phoneCode: "76" },
                { countryName: "Kenya", code: "KE", phoneCode: "254" },
                { countryName: "Kiribati", code: "KI", phoneCode: "686" },
                { countryName: "Kosovo", code: "XK", phoneCode: "383" },
                { countryName: "Kuwait", code: "KW", phoneCode: "965" },
                { countryName: "Kyrgyzstan", code: "KG", phoneCode: "996" },
                { countryName: "Laos", code: "LA", phoneCode: "856" },
                { countryName: "Latvia", code: "LV", phoneCode: "371" },
                { countryName: "Lebanon", code: "LB", phoneCode: "961" },
                { countryName: "Lesotho", code: "LS", phoneCode: "266" },
                { countryName: "Liberia", code: "LR", phoneCode: "231" },
                { countryName: "Libya", code: "LY", phoneCode: "218" },
                { countryName: "Liechtenstein", code: "LI", phoneCode: "423" },
                { countryName: "Lithuania", code: "LT", phoneCode: "370" },
                { countryName: "Luxembourg", code: "LU", phoneCode: "352" },
                { countryName: "Macau", code: "MO", phoneCode: "853" },
                { countryName: "Macedonia", code: "MK", phoneCode: "389" },
                { countryName: "Madagascar", code: "MG", phoneCode: "261" },
                { countryName: "Malawi", code: "MW", phoneCode: "265" },
                { countryName: "Malaysia", code: "MY", phoneCode: "60" },
                { countryName: "Maldives", code: "MV", phoneCode: "960" },
                { countryName: "Mali", code: "ML", phoneCode: "223" },
                { countryName: "Malta", code: "MT", phoneCode: "356" },
                { countryName: "Marshall Islands", code: "MH", phoneCode: "692" },
                { countryName: "Martinique", code: "MQ", phoneCode: "596" },
                { countryName: "Mauritania", code: "MR", phoneCode: "222" },
                { countryName: "Mauritius", code: "MU", phoneCode: "230" },
                { countryName: "Mayotte", code: "YT", phoneCode: "262" },
                { countryName: "Mexico", code: "MX", phoneCode: "52" },
                { countryName: "Micronesia", code: "FM", phoneCode: "691" },
                { countryName: "Moldova", code: "MD", phoneCode: "373" },
                { countryName: "Monaco", code: "MC", phoneCode: "377" },
                { countryName: "Mongolia", code: "MN", phoneCode: "976" },
                { countryName: "Montenegro", code: "ME", phoneCode: "382" },
                { countryName: "Montserrat", code: "MS", phoneCode: "1664" },
                { countryName: "Morocco", code: "MA", phoneCode: "212" },
                { countryName: "Mozambique", code: "MZ", phoneCode: "258" },
                { countryName: "Myanmar", code: "MM", phoneCode: "95" },
                { countryName: "Namibia", code: "NA", phoneCode: "264" },
                { countryName: "Nauru", code: "NR", phoneCode: "674" },
                { countryName: "Nepal", code: "NP", phoneCode: "977" },
                { countryName: "Netherlands", code: "NL", phoneCode: "31" },
                { countryName: "New Caledonia", code: "NC", phoneCode: "687" },
                { countryName: "New Zealand", code: "NZ", phoneCode: "64" },
                { countryName: "Nicaragua", code: "NI", phoneCode: "505" },
                { countryName: "Niger", code: "NE", phoneCode: "227" },
                { countryName: "Nigeria", code: "NG", phoneCode: "234" },
                { countryName: "Niue", code: "NU", phoneCode: "683" },
                { countryName: "Norfolk Island", code: "NF", phoneCode: "672" },
                { countryName: "North Korea", code: "KP", phoneCode: "850" },
                { countryName: "Northern Mariana Islands", code: "MP", phoneCode: "1670" },
                { countryName: "Norway", code: "NO", phoneCode: "47" },
                { countryName: "Oman", code: "OM", phoneCode: "968" },
                { countryName: "Pakistan", code: "PK", phoneCode: "92" },
                { countryName: "Palau", code: "PW", phoneCode: "680" },
                { countryName: "Palestine", code: "PS", phoneCode: "970" },
                { countryName: "Panama", code: "PA", phoneCode: "507" },
                { countryName: "Papua New Guinea", code: "PG", phoneCode: "675" },
                { countryName: "Paraguay", code: "PY", phoneCode: "595" },
                { countryName: "Peru", code: "PE", phoneCode: "51" },
                { countryName: "Philippines", code: "PH", phoneCode: "63" },
                { countryName: "Pitcairn Islands", code: "PN", phoneCode: "64" },
                { countryName: "Poland", code: "PL", phoneCode: "48" },
                { countryName: "Portugal", code: "PT", phoneCode: "351" },
                { countryName: "Puerto Rico", code: "PR", phoneCode: "1787" },
                { countryName: "Puerto Rico", code: "PR", phoneCode: "1939" },
                { countryName: "Qatar", code: "QA", phoneCode: "974" },
                { countryName: "Republic of the Congo", code: "CG", phoneCode: "242" },
                { countryName: "Romania", code: "RO", phoneCode: "40" },
                { countryName: "Russia", code: "RU", phoneCode: "7" },
                { countryName: "Rwanda", code: "RW", phoneCode: "250" },
                { countryName: "Réunion", code: "RE", phoneCode: "262" },
                { countryName: "Saint Barthélemy", code: "BL", phoneCode: "590" },
                { countryName: "Saint Kitts & Nevis", code: "KN", phoneCode: "1869" },
                { countryName: "Saint Lucia", code: "LC", phoneCode: "1758" },
                { countryName: "Saint Martin", code: "MF", phoneCode: "590" },
                { countryName: "Saint Pierre & Miquelon", code: "PM", phoneCode: "508" },
                { countryName: "Saint Vincent & the Grenadines", code: "VC", phoneCode: "1784" },
                { countryName: "Samoa", code: "WS", phoneCode: "685" },
                { countryName: "San Marino", code: "SM", phoneCode: "378" },
                { countryName: "Saudi Arabia", code: "SA", phoneCode: "966" },
                { countryName: "Senegal", code: "SN", phoneCode: "221" },
                { countryName: "Serbia", code: "RS", phoneCode: "381" },
                { countryName: "Seychelles", code: "SC", phoneCode: "248" },
                { countryName: "Sierra Leone", code: "SL", phoneCode: "232" },
                { countryName: "Singapore", code: "SG", phoneCode: "65" },
                { countryName: "Sint Maarten", code: "SX", phoneCode: "1721" },
                { countryName: "Slovakia", code: "SK", phoneCode: "421" },
                { countryName: "Slovenia", code: "SI", phoneCode: "386" },
                { countryName: "Solomon Islands", code: "SB", phoneCode: "677" },
                { countryName: "Somalia", code: "SO", phoneCode: "252" },
                { countryName: "South Africa", code: "ZA", phoneCode: "27" },
                { countryName: "South Georgia", code: "GS", phoneCode: "500" },
                { countryName: "South Korea", code: "KR", phoneCode: "82" },
                { countryName: "South Sudan", code: "SS", phoneCode: "211" },
                { countryName: "Spain", code: "ES", phoneCode: "34" },
                { countryName: "Sri Lanka", code: "LK", phoneCode: "94" },
                { countryName: "Sudan", code: "SD", phoneCode: "249" },
                { countryName: "Suriname", code: "SR", phoneCode: "597" },
                { countryName: "Svalbard & Jan Mayen", code: "SJ", phoneCode: "4779" },
                { countryName: "Swaziland", code: "SZ", phoneCode: "268" },
                { countryName: "Sweden", code: "SE", phoneCode: "46" },
                { countryName: "Switzerland", code: "CH", phoneCode: "41" },
                { countryName: "Syria", code: "SY", phoneCode: "963" },
                { countryName: "São Tomé & Príncipe", code: "ST", phoneCode: "239" },
                { countryName: "Taiwan", code: "TW", phoneCode: "886" },
                { countryName: "Tajikistan", code: "TJ", phoneCode: "992" },
                { countryName: "Tanzania", code: "TZ", phoneCode: "255" },
                { countryName: "Thailand", code: "TH", phoneCode: "66" },
                { countryName: "Timor-Leste", code: "TL", phoneCode: "670" },
                { countryName: "Togo", code: "TG", phoneCode: "228" },
                { countryName: "Tokelau", code: "TK", phoneCode: "690" },
                { countryName: "Tonga", code: "TO", phoneCode: "676" },
                { countryName: "Trinidad & Tobago", code: "TT", phoneCode: "1868" },
                { countryName: "Tunisia", code: "TN", phoneCode: "216" },
                { countryName: "Turkey", code: "TR", phoneCode: "90" },
                { countryName: "Turkmenistan", code: "TM", phoneCode: "993" },
                { countryName: "Turks & Caicos Islands", code: "TC", phoneCode: "1649" },
                { countryName: "Tuvalu", code: "TV", phoneCode: "688" },
                { countryName: "Uganda", code: "UG", phoneCode: "256" },
                { countryName: "Ukraine", code: "UA", phoneCode: "380" },
                { countryName: "United Arab Emirates", code: "AE", phoneCode: "971" },
                { countryName: "United Kingdom", code: "GB", phoneCode: "44" },
                { countryName: "United States", code: "US", phoneCode: "1" },
                { countryName: "United States Virgin Islands", code: "VI", phoneCode: "1340" },
                { countryName: "Uruguay", code: "UY", phoneCode: "598" },
                { countryName: "Uzbekistan", code: "UZ", phoneCode: "998" },
                { countryName: "Vanuatu", code: "VU", phoneCode: "678" },
                { countryName: "Vatican City", code: "VA", phoneCode: "379" },
                { countryName: "Venezuela", code: "VE", phoneCode: "58" },
                { countryName: "Vietnam", code: "VN", phoneCode: "84" },
                { countryName: "Wallis & Futuna", code: "WF", phoneCode: "681" },
                { countryName: "Western Sahara", code: "EH", phoneCode: "212" },
                { countryName: "Yemen", code: "YE", phoneCode: "967" },
                { countryName: "Zambia", code: "ZM", phoneCode: "260" },
                { countryName: "Zimbabwe", code: "ZW", phoneCode: "263" },
            ],
            scaleSize: 1.25,
            flagSvgUrl: Flits.accountSettings.flagSvgUrl,
        };
        settings = Flits.extend(Flits.setPhoneCountryCode.settings, settings, options);
        Flits.dispatchEvent("Flits:setPhoneCountryCode:Loaded", { settings: settings });
        let scaleSize = Flits.setPhoneCountryCode.settings.scaleSize;
        let flagSvgSize = { w: 645 * scaleSize, h: 515 * scaleSize };
        let displayFlagSize = { w: 20 * scaleSize, h: 15 * scaleSize };
        let gap = { x: 5 * scaleSize, y: 5 * scaleSize };
        let posFlagSize = { w: displayFlagSize.w + gap.x, h: displayFlagSize.h + gap.y };
        function calcPos(letter, size) {
            return -(letter.toLowerCase().charCodeAt(0) - 97) * size;
        }
        function setFlagPositionFunc(iso) {
            var x = calcPos(iso[1], posFlagSize.w);
            var y = calcPos(iso[0], posFlagSize.h);
            return { x: x, y: y };
        }
        function flitsCountryFlagCss() {
            let flitsCountryFlagCss =
                ".flits-country-drpdown .flits-country-flag { " +
                "background-image: url(" +
                Flits.setPhoneCountryCode.settings.flagSvgUrl +
                ") !important;" +
                "background-repeat: no-repeat !important ;" +
                "background-size: " +
                flagSvgSize.w +
                "px " +
                flagSvgSize.h +
                "px !important;" +
                "width: " +
                displayFlagSize.w +
                "px !important;" +
                "height: " +
                displayFlagSize.h +
                "px !important;" +
                "}";
            Flits.styleCreate(flitsCountryFlagCss);
        }
        flitsCountryFlagCss();
        Flits.each(Flits.setPhoneCountryCode.settings.country_list, function (key, value) {
            let country_flag = value.code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
            let optionElement = Flits("<option/>");
            optionElement.attr("data-country-iso-code", value.code);
            optionElement.attr("data-country-flag", country_flag);
            optionElement.attr("data-country-code", "+" + value.phoneCode);
            optionElement.attr("data-country-name", value.countryName);
            optionElement.attr("value", value.countryName);
            optionElement.html(value.countryName + " " + "(+" + value.phoneCode + ")");
            let flagPos = setFlagPositionFunc(value.code);
            optionElement.attr("data-x-pos", flagPos.x);
            optionElement.attr("data-y-pos", flagPos.y);
            Flits.setPhoneCountryCode.settings.countryOptionArr.push(optionElement.clone());
        });
        Flits(document).on("change", ".flits-profile-phone-with-country-div .flits-country-drpdown select", function (event) {
            let countryFlag = event.target.options[event.target.selectedIndex].dataset.countryFlag;
            let countryCode = event.target.options[event.target.selectedIndex].dataset.countryCode;
            let countryIsoCode = event.target.options[event.target.selectedIndex].dataset.countryIsoCode;
            let xPos = event.target.options[event.target.selectedIndex].dataset.xPos + "px ";
            let yPos = event.target.options[event.target.selectedIndex].dataset.yPos + "px";
            Flits(".flits-profile-phone-with-country-div .flits-country-flag").css("background-position", [xPos, yPos].join(""));
            Flits(".flits-profile-phone-with-country-div .flits-country-drpdown").attr("data-country-code", countryCode);
            Flits(".flits-profile-phone-with-country-div .flits-country-code-textbox").val(countryCode);
            Flits(".flits-profile-phone-with-country-div .flits-country-code-textbox").css("width", (countryCode.length + 2) * 8 + 10 + "px");
            Flits(".flits-profile-phone-with-country-div input[name='phone']").css("padding-left", (countryCode.length + 2) * 8 + "px");
        });
        Flits(document).on("change", ".flits-address-phone-with-country-div .flits-country-drpdown select", function (event) {
            let countryFlag = event.target.options[event.target.selectedIndex].dataset.countryFlag;
            let countryCode = event.target.options[event.target.selectedIndex].dataset.countryCode;
            let countryIsoCode = event.target.options[event.target.selectedIndex].dataset.countryIsoCode;
            let xPos = event.target.options[event.target.selectedIndex].dataset.xPos + "px ";
            let yPos = event.target.options[event.target.selectedIndex].dataset.yPos + "px";
            Flits(".flits-address-phone-with-country-div .flits-country-flag").css("background-position", [xPos, yPos].join(""));
            Flits(".flits-address-phone-with-country-div .flits-country-drpdown").attr("data-country-code", countryCode);
            Flits(".flits-address-phone-with-country-div .flits-country-code-textbox").val(countryCode);
            Flits(".flits-address-phone-with-country-div .flits-country-code-textbox").css("width", (countryCode.length + 2) * 8 + 10 + "px");
            Flits(".flits-address-phone-with-country-div input[name='address[phone]']").css("padding-left", (countryCode.length + 2) * 8 + "px");
        });
        Flits(document).on("change", ".flits-contact-us-phone-number-country-div select", function (event) {
            let countryFlag = event.target.options[event.target.selectedIndex].dataset.countryFlag;
            let countryCode = event.target.options[event.target.selectedIndex].dataset.countryCode;
            let countryIsoCode = event.target.options[event.target.selectedIndex].dataset.countryIsoCode;
            let xPos = event.target.options[event.target.selectedIndex].dataset.xPos + "px ";
            let yPos = event.target.options[event.target.selectedIndex].dataset.yPos + "px";
            Flits(".flits-contact-us-phone-number-country-div .flits-country-flag").css("background-position", [xPos, yPos].join(""));
            Flits(".flits-contact-us-phone-number-country-div .flits-country-drpdown").attr("data-country-code", countryCode);
            Flits(".flits-contact-us-phone-number-country-div .flits-country-code-textbox").val(countryCode);
            Flits(".flits-contact-us-phone-number-country-div .flits-country-code-textbox").css("width", (countryCode.length + 2) * 8 + 10 + 36 + "px");
            Flits(".flits-contact-us-phone-number-country-div .flits-form-phone").css("padding-left", (countryCode.length + 2) * 8 + 10 + 28 + "px");
        });
    });
    var topOrder = (Flits.topOrder = function (options) {
        Flits.topOrder.settings = {};
        var settings = { topOrderList: null, perPageLimit: 4, noImage: "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif", data: null };
        settings = Flits.extend(Flits.topOrder.settings, settings, options);
        Flits.dispatchEvent("Flits:topOrder:Loaded", { settings: settings });
        Flits(document).on("Flits:topOrder:BindSuccessful", function () {
            Flits(".flits-top-order-list-div").removeClass("flits-d-none");
            Flits(".flits-top-order-loader").hide();
            topOrderFilter();
        });
        function topOrderFilter() {
            var options = {
                valueNames: ["flits-product-name", "flits-product-count", { data: ["days"] }, { name: "flits-product-price", attr: "data-price" }],
                page: Flits.topOrder.settings.perPageLimit,
                pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" },
                searchClass: "flits-search",
            };
            Flits.topOrder.settings.topOrderList = new flitsList("flits-top-order-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-top-order"]');
            });
            Flits.paginationDisabled(Flits.topOrder.settings.topOrderList, '.flits-pagination-div[data-flits-pagination="flits-top-order"]');
        }
        function viewTopProducts(data) {
            Flits(".flits-top-order-div .flits-top-order-list").attr("data-flits-top-order-count", data.orders_count);
            if (data.status && data.orders_count > 0) {
                let products = data.products;
                let moneyFormat = Flits.money_format;
                let productDatas = data.products_data;
                Flits.each(products, function (index, product) {
                    let itemClone = Flits(".flits-top-order-card-template").clone();
                    itemClone.removeClass("flits-top-order-card-template");
                    let todayDate = new Date();
                    let productDate = new Date(product.last_date);
                    let orderDay = Flits.timeDiffer({ date1: productDate, date2: todayDate, type: "day" });
                    itemClone.attr("data-days", orderDay);
                    let orderItemProduct = productDatas[product.id];
                    let image = "";
                    if (orderItemProduct.image == null) {
                        image = Flits.topOrder.settings.noImage;
                    } else {
                        image = orderItemProduct.image.src;
                    }
                    let extidx = image.lastIndexOf(".");
                    let extension = image.substr(extidx);
                    image = image.replace(extension, "_200x_crop_center" + extension);
                    itemClone.find(".flits-product-image img").attr("src", image);
                    let imgWidth = itemClone.find(".flits-product-image img").width();
                    let imgHeight = itemClone.find(".flits-product-image img").height();
                    if (imgWidth > imgHeight) {
                    } else {
                    }
                    itemClone.find(".flits-product-name").attr("data-tippy-content", orderItemProduct.title);
                    itemClone.find(".flits-product-name").attr("href", "/products/" + orderItemProduct.handle);
                    itemClone.find(".flits-product-name").html(orderItemProduct.title);
                    itemClone.find(".flits-product-price").attr("data-price", parseInt(orderItemProduct.variants[0].price * 100));
                    itemClone.find(".flits-product-price").html(Flits.formatMoney(Math.abs(orderItemProduct.variants[0].price * 100), moneyFormat));
                    itemClone.find(".flits-product-item-count .flits-product-count").html(product.count);
                    if (orderItemProduct.published_at !== null) {
                        Flits(itemClone).find(".flits-add-to-cart").attr("data-flits-add-cart-text", Flits.t("Flits.locals.buttons.add_to_cart", "Add to Cart"));
                        Flits(itemClone).find(".flits-add-to-cart").attr("data-flits-sold-text", Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                        Flits.each(orderItemProduct.variants, function (var_index, variant) {
                            if (variant.title == "Default Title") {
                                itemClone.find(".flits-variant-select").parents(".flits-select-row").hide();
                                itemClone.find(".flits-product-quantity").addClass("w-100");
                            }
                            let variantPrice = Flits.formatMoney(Math.abs(variant.price * 100), Flits.money_format);
                            var optionElement = Flits("<option/>");
                            optionElement.html(variant.title);
                            optionElement.attr("value", variant.id);
                            optionElement.attr("data-flits-variant-price", variantPrice);
                            Flits.ajax({ type: "GET", url: location.origin + "/products/" + orderItemProduct.handle + "?view=flits_product_variant_data&variant=" + variant.id })
                                .done(function (resp) {
                                    let parser = new DOMParser();
                                    let htmlDoc = parser.parseFromString(resp, "text/html");
                                    let response = JSON.parse(Flits(htmlDoc).text());
                                    if (!response.variant_available) {
                                        optionElement.html(variant.title + " - " + Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                                        optionElement.attr("value", variant.id);
                                        optionElement.attr("data-flits-variant-price", variantPrice);
                                        itemClone.find(".flits-variant-select").append(optionElement);
                                        let selectedText = itemClone.find(".flits-variant-select option:selected").text();
                                        if (selectedText.indexOf(Flits.t("Flits.locals.buttons.sold_out", "Sold Out")) != -1) {
                                            let sold_out_text = itemClone.find(".flits-add-to-cart").attr("data-flits-sold-text");
                                            itemClone.find(".flits-add-to-cart").addClass("flits-btn-danger");
                                            itemClone.find(".flits-add-to-cart").attr("disabled", true);
                                            itemClone.find(".flits-add-to-cart").text(sold_out_text);
                                            itemClone.find(".flits-product-quantity").addClass("flits-disabled");
                                        }
                                    }
                                    if (response.variant_available && response.inventory_management == "shopify" && response.inventory_quantity > 0) {
                                        optionElement.attr("data-flits-inventory-quantity", response.inventory_quantity);
                                    }
                                    let selectedVariant = Flits(itemClone).find(".flits-variant-select option:selected").attr("data-flits-inventory-quantity");
                                    Flits(itemClone).find('.flits-product-quantity [name="product_quantity_input"]').attr("max", selectedVariant);
                                })
                                .fail(function (resp) {})
                                .always(function () {});
                            itemClone.find(".flits-variant-select").append(optionElement);
                        });
                    } else {
                        Flits(itemClone).find(".flits-add-to-cart").addClass("flits-secondary-btn flits-unavailable-btn").removeClass("flits-primary-btn flits-add-to-cart");
                        Flits(itemClone).find(".flits-unavailable-btn").attr("data-flits-unavailable-text", Flits.t("Flits.locals.buttons.product_unavailable_text", "Currently Unavailable"));
                        let product_unavailable_text = Flits(itemClone).find(".flits-unavailable-btn").attr("data-flits-unavailable-text");
                        Flits(itemClone).find(".flits-unavailable-btn").attr("disabled", !0);
                        Flits(itemClone).find(".flits-product-name").removeAttr("href");
                        Flits(itemClone).find(".flits-unavailable-btn").text(product_unavailable_text);
                        Flits(itemClone).addClass("flits-unavailable-top-order-product");
                    }
                    Flits(".flits-top-order-list").append(itemClone);
                    if (index == products.length - 1) {
                        Flits.dispatchEvent("Flits:topOrder:BindSuccessful");
                    }
                });
            } else {
                Flits(".flits-top-order-empty").removeClass("flits-d-none");
                Flits(".flits-top-order-loader").hide();
            }
        }
        viewTopProducts(Flits.topOrder.settings.data);
        Flits(document).on("click", ".flits-top-order-list-div .flits-products-filter", function () {
            Flits(".flits-top-order-list-div .flits-dropdown .flits-dropdown-content").slideToggle();
            var type = Flits(this).attr("data-type");
            Flits(".flits-top-order-list-div .flits-products-filter.flits-active").removeClass("flits-active");
            Flits(this).addClass("flits-active");
            Flits(".flits-top-order-list-div .flits-filter-text").html(Flits(this).attr("data-text"));
            switch (type) {
                case "none":
                    Flits.topOrder.settings.topOrderList.filter();
                    break;
                case "sort":
                    var sort_type = Flits(this).attr("data-sort-type");
                    var sort = Flits(this).attr("data-sort");
                    Flits.topOrder.settings.topOrderList.sort(sort, { order: sort_type });
                    break;
                case "days":
                    var days = Flits(this).attr("data-days");
                    Flits.topOrder.settings.topOrderList.filter(function (item) {
                        if (parseInt(item.values().days) <= days) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    break;
            }
            notFound();
        });
        Flits(".flits-top-order-list-div .flits-dropdown .flits-filter-dropbtn").on("click", function () {
            Flits(".flits-top-order-list-div .flits-dropdown .flits-dropdown-content").slideToggle();
        });
        function notFound() {
            Flits.topOrder.settings.topOrderList.update();
            if (Flits(".flits-top-order-list .flits-top-order-card").length == 0) {
                Flits(".flits-not-find").addClass("flits-active");
            } else {
                Flits(".flits-not-find").removeClass("flits-active");
            }
        }
        Flits(document).on("input", ".flits-top-order-list-div .flits-search-fillter .flits-search", function (event) {
            if (event.target.value) {
                Flits(".flits-search-fillter .flits-clear-icon").removeClass("flits-d-none");
            } else {
                Flits(".flits-search-fillter .flits-clear-icon").addClass("flits-d-none");
                Flits.topOrder.settings.topOrderList.searched = false;
                Flits.topOrder.settings.topOrderList.update();
            }
            Flits.topOrder.settings.topOrderList.on("searchComplete", function () {
                notFound();
            });
        });
        Flits(document).on("click", ".flits-top-order-list-div .flits-search-fillter .flits-clear-icon", function (event) {
            Flits(".flits-top-order-list-div .flits-search-fillter .flits-search").val("");
            Flits(".flits-top-order-list-div .flits-search-fillter .flits-clear-icon").addClass("flits-d-none");
            Flits.topOrder.settings.topOrderList.searched = false;
            Flits.topOrder.settings.topOrderList.update();
            notFound();
        });
    });
    var Wishlist = (Flits.Wishlist = function (options) {
        Flits.Wishlist.settings = {};
        var settings = { wishlistHandle: "flits_wishlist_products", perPageLimit: 9, wishlistList: null, wishlistServerData: null };
        settings = Flits.extend(Flits.Wishlist.settings, settings, options);
        Flits.dispatchEvent("Flits:Wishlist:Loaded", { settings: settings });
        Flits(document).on("Flits:WishlistDataBind:Successful", function () {
            var options = { valueNames: [{ data: ["flits-product-id"] }], page: Flits.Wishlist.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.Wishlist.settings.wishlistList = new flitsList("flits-wishlist-product-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-wishlist"]');
            });
            Flits.paginationDisabled(Flits.Wishlist.settings.wishlistList, '.flits-pagination-div[data-flits-pagination="flits-wishlist"]');
            Flits(".flits-wishlist-list-div").removeClass("flits-d-none");
            Flits(".flits-wishlist-loader").hide();
        });
        let wishlistServerData = Flits.Wishlist.settings.wishlistServerData;
        Flits(".flits-wishlist-count-badge").html(wishlistServerData.count);
        Flits(".flits-wishlist-count-badge").removeClass("flits-menu-badge-hide");
        if (wishlistServerData != null && wishlistServerData.count > 0) {
            Flits.productDomDisplay(wishlistServerData, "flits-wishlist-product-list", 0);
        } else {
            Flits(".flits-wishlist-empty").removeClass("flits-d-none");
            Flits(".flits-wishlist-loader").hide();
        }
        Flits(document).on("click", ".flits-remove-product", function () {
            let el = Flits(this);
            let removeFrom = Flits(this).parents(".flits-wishlist-list-div");
            let customerId = Flits.customer_id;
            let customerEmail = Flits.customer_email;
            let productId = Flits(el).attr("data-flits-product-id");
            let token = Flits.token;
            let params = { customer_hash: Flits.customerHash, token: token, customer_id: customerId, customer_email: customerEmail, product_id: productId };
            function removeWishlistProduct(params) {
                Flits.dispatchEvent("Flits:Wishlist:BeforeRemove", { el: el, params: params });
                Flits.ajax({ type: "DELETE", url: Flits.base_url + "/wishlist/remove_from_wishlist", contentType: "application/x-www-form-urlencoded", data: params })
                    .done(function (resp) {
                        Flits(".flits-wishlist-count-badge").html(resp.customer_wishlist_count);
                        if (resp.customer_wishlist_count == 0) {
                            Flits(".flits-wishlist-list-div").addClass("flits-d-none");
                            Flits(".flits-wishlist-empty").removeClass("flits-d-none");
                        }
                        Flits.setLocalStorage(Flits.Wishlist.settings.wishlistHandle, resp.products_handle);
                        if (Flits(".flits-remove-product[data-flits-product-id='" + productId + "']")) {
                            Flits(".flits-remove-product[data-flits-product-id='" + productId + "']")
                                .parents("[data-flits-product-handle]")
                                .remove();
                        }
                        Flits.dispatchEvent("Flits:Wishlist:Removed", { resp: resp });
                        flitsSnackbar.show({
                            text: "<p>" + Flits.t("Flits.locals.wishlisted_product_page.product_remove_from_wishlist", "Product removed from your wishlist") + "</p>",
                            pos: "bottom-center",
                            showAction: false,
                            customClass: "flits-alert-default",
                        });
                        if (Flits.Wishlist.settings.wishlistList) {
                            Flits.Wishlist.settings.wishlistList.remove("flits-product-id", productId);
                            Flits.Wishlist.settings.wishlistList.update();
                        }
                        let noOfPage = Flits(".flits-wishlist-list-div .flits-pagination li").length;
                        if (Flits(".flits-wishlist-product-list li").length == 0) {
                            Flits(removeFrom)
                                .find(".flits-pagination li:nth-child(" + noOfPage + ")")
                                .trigger("click");
                        }
                    })
                    .fail(function (resp) {})
                    .always(function () {});
            }
            removeWishlistProduct(params);
        });
        let wl_functions = {
            replaceWishlistProduct: function (old_handle, product_data) {
                let image = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif";
                if (product_data.image != null) {
                    image = product_data.image.src;
                }
                let data = { customer_hash: Flits.customerHash, token: Flits.token, product_id: product_data.id, new_product_handle: product_data.handle, new_product_title: product_data.title, new_product_image: image };
                Flits.ajax({ method: "PUT", url: Flits.base_url + "/wishlist/replace_wishlist_product", data: data }).done(function (resp) {
                    if (resp.status) {
                        var local_storage_wl_handles = Flits.getLocalStorage(Flits.Wishlist.settings.wishlistHandle);
                        if (local_storage_wl_handles != undefined) {
                            local_storage_wl_handles = "," + local_storage_wl_handles + ",";
                            let handle_to_replace = "," + old_handle + ",";
                            let new_handle = "," + product_data.handle + ",";
                            if (local_storage_wl_handles.indexOf(handle_to_replace) != -1) {
                                let updated_wishlist_local_storage = local_storage_wl_handles.replace(handle_to_replace, new_handle);
                                updated_wishlist_local_storage = updated_wishlist_local_storage.slice(1, -1);
                                Flits.setLocalStorage(Flits.Wishlist.settings.wishlistHandle, updated_wishlist_local_storage);
                            }
                        }
                    }
                });
            },
            flitsGetProductDetailsFromWishlistResponse: function (handle) {
                var item_details = undefined;
                Flits.each(wishlistServerData.data, function (index, item) {
                    if (item.product_handle == handle) {
                        item_details = item;
                        return false;
                    }
                });
                return item_details;
            },
        };
        Flits.extend(Flits.Wishlist.settings, wl_functions);
    });
    var recentlyView = (Flits.recentlyView = function (options) {
        Flits.recentlyView.settings = {};
        var settings = { recentHandle: "flits_recently_products", perPageLimit: 9, recentViewList: null };
        settings = Flits.extend(Flits.recentlyView.settings, settings, options);
        Flits.dispatchEvent("Flits:recentlyView:Loaded", { settings: settings });
        Flits(document).on("Flits:recentlyDataBind:Successful", function () {
            var options = { page: Flits.recentlyView.settings.perPageLimit, pagination: { innerWindow: 1, left: 1, right: 1, paginationClass: "flits-pagination" } };
            Flits.recentlyView.settings.recentViewList = new flitsList("flits-recently-view-product-list", options).on("updated", function (list) {
                Flits.paginationDisabled(list, '.flits-pagination-div[data-flits-pagination="flits-recently-view"]');
            });
            Flits.paginationDisabled(Flits.recentlyView.settings.recentViewList, '.flits-pagination-div[data-flits-pagination="flits-recently-view"]');
            setTimeout(function () {
                Flits.recentlyView.settings.showAndHideSection("flits-recently-view-product-list-div", "flits-recently-view-loader");
            }, 0);
        });
        let recentViewData = Flits.getLocalStorage(Flits.recentlyView.settings.recentHandle);
        if (recentViewData != null && recentViewData.length > 0) {
            Flits.productDomDisplay(recentViewData, "flits-recently-view-product-list", 1);
        } else {
            setTimeout(function () {
                Flits.recentlyView.settings.showAndHideSection("flits-recently-view-empty", "flits-recently-view-loader");
            }, 0);
        }
        let rv_functions = {
            removeHandle: function (handle) {
                let updatedRecetViewData = recentViewData;
                Flits.each(updatedRecetViewData, function (key, value) {
                    if (value.product_handle == handle) {
                        updatedRecetViewData.splice(key, 1);
                        Flits.setLocalStorage(Flits.recentlyView.settings.recentHandle, updatedRecetViewData);
                        if (updatedRecetViewData.length <= 0) {
                            setTimeout(function () {
                                Flits.recentlyView.settings.showAndHideSection("flits-recently-view-empty", "flits-recently-view-product-list-div");
                            }, 0);
                        }
                        return false;
                    }
                });
            },
            replaceHandle: function (handle, new_handle) {
                let updatedRecetViewData = recentViewData;
                Flits.each(updatedRecetViewData, function (key, value) {
                    if (value.product_handle == handle) {
                        value.product_handle = new_handle;
                        Flits.setLocalStorage(Flits.recentlyView.settings.recentHandle, updatedRecetViewData);
                        return false;
                    }
                });
            },
            showAndHideSection: function (show_section, hide_section) {
                Flits("." + show_section).removeClass("flits-d-none");
                Flits("." + hide_section).hide();
            },
        };
        Flits.extend(Flits.recentlyView.settings, rv_functions);
    });
    var storeCredit = (Flits.storeCredit = function (options) {
        Flits.storeCredit.settings = {};
        var settings = { data: null };
        settings = Flits.extend(Flits.storeCredit.settings, settings, options);
        Flits.dispatchEvent("Flits:storeCredit:Loaded", { settings: settings });
        Flits(document).on("click", ".flits-credit-dropdown", function () {
            Flits(this).toggleClass("flits-active");
            Flits(this).parents(".flits-credit-log-with-dropdown").toggleClass("flits-text-bold");
            Flits(this).parents(".flits-credit-log-item").find(".flits-credit-details").slideToggle();
            Flits(this).parents(".flits-credit-log-item").toggleClass("flits-credit-border");
        });
        Flits(document).on("Flits:storeCredit:ListSuccessful", function (event) {
            Flits(".flits-store-credit-balance").removeClass("flits-d-none");
            Flits(".flits-history-credit-box").removeClass("flits-d-none");
            Flits(".flits-store-credit-table-div").removeClass("flits-d-none");
            Flits(".flits-store-credit-loader").hide();
        });
        function getCreditCommentMsg(comment) {
            switch (comment) {
                case "Loyal Customer":
                    return Flits.t("Flits.locals.credit_page.loyal_customer", "Loyal Customer");
                    break;
                case "Repeat customer":
                    return Flits.t("Flits.locals.credit_page.repeat_customer", "Repeat Customer");
                    break;
                case "Fault in product":
                    return Flits.t("Flits.locals.credit_page.fault_in_product", "Fault in product");
                    break;
                case "Canceled order first time by customer":
                    return Flits.t("Flits.locals.credit_page.canceled_order_first_time_by_customer", "Canceled order first time by customer");
                    break;
                case "Delay in delivery time":
                    return Flits.t("Flits.locals.credit_page.delay_in_delivery_time", "Delay in delivery time");
                    break;
                case "Registration Credit":
                    return Flits.t("Flits.locals.credit_page.registration_credit", "Registration Credit");
                    break;
                case "Subscribe Credit":
                    return Flits.t("Flits.locals.credit_page.subscribe_credit", "Subscribe Credit");
                    break;
                case "First Order Credit":
                    return Flits.t("Flits.locals.credit_page.first_order_credit", "First Order Credit");
                    break;
                default:
                    if (comment && comment.includes("Spent in")) {
                        let additionalComment = "";
                        let isPosComment = false;
                        if (comment.indexOf("Order through POS.") != -1) {
                            comment = comment.replace("Order through POS.", "");
                            isPosComment = true;
                        }
                        let splitBy = " - ";
                        if (comment.includes(splitBy)) {
                            let resultComment = comment.split(splitBy);
                            comment = resultComment[0];
                            additionalComment = splitBy + resultComment[1];
                        }
                        comment = comment.replace("Spent in", "");
                        comment = comment.replace("Order.", "");
                        let orderNumber = comment.trim();
                        comment = Flits.t("Flits.locals.credit_page.spent_in_order", "Spent in {{ order_number }} order");
                        if (isPosComment) {
                            comment = Flits.t("Flits.locals.credit_page.spent_in_order_through_pos", "Spent in {{ order_number }} order through POS").replace("{{ order_number }}", orderNumber);
                        }
                        comment = comment.replace("{{ order_number }}", orderNumber);
                        return comment + additionalComment;
                    }
                    return comment;
                    break;
            }
        }
        function updateStoreCredit(data) {
            let customer = data;
            let log = customer.credit_log;
            Flits(".flits-earn-credit-value").html(Flits.formatMoney(Math.abs(customer.total_earned_credits), Flits.money_format));
            Flits(".flits-spent-credit-value").html(Flits.formatMoney(Math.abs(customer.total_spent_credits), Flits.money_format));
            Flits(".flits-current-credit-value").html(Flits.formatMoney(Math.abs(customer.credits), Flits.money_format));
            Flits(".flits-credit-count-badge").html(Flits.formatMoney(Math.abs(customer.credits), Flits.money_format));
            Flits(".flits-credit-count-badge").removeClass("flits-menu-badge-hide");
            if (log.length > 0) {
                Flits.each(log, function (logIndex, logItem) {
                    let liClone = Flits(".flits-credit-log-item-template").clone();
                    liClone.removeClass("flits-credit-log-title");
                    liClone.removeClass("flits-credit-log-item-template");
                    liClone.attr("id");
                    liClone.attr("id", "flits-log-" + logItem.id);
                    let credits = logItem.credits;
                    if (credits > 0) {
                        liClone.find(".flits-earn-credit-icon-round").removeClass("flits-d-none");
                        credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                    } else {
                        liClone.find(".flits-spent-credit-icon-round").removeClass("flits-d-none");
                        credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                    }
                    liClone.find(".flits-credit-value").html(credits);
                    let comment = getCreditCommentMsg(logItem.comment);
                    liClone.find(".flits-credit-comment").html(comment).attr("data-tippy-content", comment);
                    liClone.find(".flits-credit-date").html(logItem.created_at);
                    if (typeof logItem.metafields != "undefined" && logItem.metafields.length > 0) {
                        liClone.find(".flits-credit-log-details").addClass("flits-credit-log-with-dropdown");
                        let creditDetailsDiv = liClone.find(".flits-credit-details");
                        Flits.each(logItem.metafields, function (subLogIndex, subLogIem) {
                            let creditDetailsRowClone = creditDetailsDiv.find(".flits-credit-details-row-template").clone();
                            creditDetailsRowClone.removeClass("flits-credit-details-row-template");
                            let credits = subLogIem.credits;
                            if (credits > 0) {
                                credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                            } else {
                                credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                            }
                            creditDetailsRowClone.find(".flits-product-tag-credit").html(credits);
                            creditDetailsRowClone.find(".flits-product-title").attr("href", "/products/" + subLogIem.product_handle + "?variant=" + subLogIem.variant_id);
                            creditDetailsRowClone.find(".flits-product-title").html(subLogIem.product_title).attr("data-tippy-content", subLogIem.product_title);
                            creditDetailsRowClone.find(".flits-product-tag").attr("href", "/search?q=" + subLogIem.tag);
                            creditDetailsRowClone.find(".flits-product-tag").html(subLogIem.tag);
                            creditDetailsDiv.append(creditDetailsRowClone);
                        });
                        creditDetailsDiv.find(".flits-credit-details-row-template").remove();
                        liClone.append(creditDetailsDiv);
                    }
                    Flits(".flits-store-credit-log-list").append(liClone);
                    if (log.length - 1 == logIndex) {
                        Flits.dispatchEvent("Flits:storeCredit:ListSuccessful");
                    }
                });
            } else {
                Flits(".flits-store-credit-balance").removeClass("flits-d-none");
                Flits(".flits-history-credit-box").removeClass("flits-d-none");
                Flits(".flits-store-credit-table-div").addClass("flits-d-none");
                Flits(".flits-store-credit-empty").removeClass("flits-d-none");
                Flits(".flits-store-credit-loader").hide();
            }
            if (Flits(window).width() > 992) {
                setTimeout(function () {
                    if (Flits(".flits-store-credit-log-list .flits-credit-log-item").length > 8) {
                        let paddingVal = Flits(".flits-store-credit-log-list").outerWidth() - Flits(".flits-store-credit-log-list li:first-child").outerWidth();
                        Flits(".flits-store-credit-table-div .flits-credit-log-header li").css("padding-right", paddingVal + 15);
                    }
                }, 800);
            }
        }
        let data = Flits.storeCredit.settings.data;
        if (data.status) {
            let customer = data.customer;
            updateStoreCredit(customer);
        } else {
            Flits(".flits-earn-credit-value").html(Flits.formatMoney(Math.abs(00), Flits.money_format));
            Flits(".flits-spent-credit-value").html(Flits.formatMoney(Math.abs(00), Flits.money_format));
            Flits(".flits-current-credit-value").html(Flits.formatMoney(Math.abs(00), Flits.money_format));
            Flits(".flits-credit-count-badge").html(Flits.formatMoney(Math.abs(00), Flits.money_format));
            Flits(".flits-credit-count-badge").removeClass("flits-menu-badge-hide");
            Flits(".flits-store-credit-balance").removeClass("flits-d-none");
            Flits(".flits-history-credit-box").removeClass("flits-d-none");
            Flits(".flits-store-credit-empty").removeClass("flits-d-none");
            Flits(".flits-store-credit-loader").hide();
        }
    });
    var howToEarnCredit = (Flits.howToEarnCredit = function (options) {
        Flits.howToEarnCredit.settings = {};
        var settings = {
            ruleTabActive: "flits_earning_rules",
            rulesConfig: {
                register: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiM4Njk3Q0I7IiBkPSJNNTMuNTY2LDQ0Ljc4M2wtOS41NTItNC43NzZDNDIuNzgsMzkuMzksNDIsMzguMTI4LDQyLDM2Ljc0OFYzMw0KCQkJYzAuMjY4LTAuMzA1LDAuNTc2LTAuNjk4LDAuOTA0LTEuMTYyYzEuMzAyLTEuODM4LDIuMjg2LTMuODYxLDIuOTY5LTUuOTg0QzQ3LjA5OCwyNS40NzcsNDgsMjQuMzQ1LDQ4LDIzdi00DQoJCQljMC0wLjg4LTAuMzkxLTEuNjY3LTEtMi4yMTdWMTFjMCwwLDEuMTg3LTktMTEtOWMtMTIuMTg4LDAtMTEsOS0xMSw5djUuNzgzYy0wLjYwOSwwLjU1LTEsMS4zMzctMSwyLjIxN3Y0DQoJCQljMCwxLjA1NCwwLjU1NCwxLjk4MSwxLjM4MywyLjUxN0MyNi4zODIsMjkuODY5LDI5LDMzLDI5LDMzdjMuNjU1YzAsMS4zMzMtMC43MjgsMi41Ni0xLjg5OSwzLjE5OEwxOC4xOCw0NC43Mg0KCQkJQzE1LjYwMyw0Ni4xMjUsMTQsNDguODI2LDE0LDUxLjc2MVY1NWg0NHYtMy4wNDNDNTgsNDguOTE5LDU2LjI4Myw0Ni4xNDIsNTMuNTY2LDQ0Ljc4M3oiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik0xOC4xOCw0NC43Mmw1Ljk0Ni0zLjI0M2MtMC4wMzQtMC4wMzMtMC4wMDUtMC4wNDMsMC4wNjUtMC4wMzZsMi45MS0xLjU4Nw0KCQkJQzI4LjI3MiwzOS4yMTUsMjksMzcuOTg5LDI5LDM2LjY1NVYzM2MwLDAtMS4wNjItMS4yNzUtMi4wOTItMy4zMjNoMGMwLTAuMDAxLTAuMDAxLTAuMDAyLTAuMDAxLTAuMDAzDQoJCQljLTAuMTM1LTAuMjY4LTAuMjY4LTAuNTUxLTAuMzk5LTAuODQ0Yy0wLjAxOC0wLjA0MS0wLjAzNi0wLjA4LTAuMDU0LTAuMTIxYy0wLjEzMy0wLjMwMy0wLjI2My0wLjYxNi0wLjM4Ni0wLjk0NA0KCQkJYy0wLjAwOC0wLjAyMS0wLjAxNS0wLjA0NC0wLjAyMy0wLjA2NWMtMC4xMDgtMC4yOS0wLjIwOS0wLjU4OS0wLjMwNi0wLjg5NmMtMC4wMjYtMC4wODQtMC4wNTItMC4xNjctMC4wNzctMC4yNTENCgkJCWMtMC4xMDEtMC4zMzgtMC4xOTYtMC42ODItMC4yNzgtMS4wMzhDMjQuNTU0LDI0Ljk4MSwyNCwyNC4wNTQsMjQsMjN2LTRjMC0wLjg4LDAuMzkxLTEuNjY3LDEtMi4yMTd2LTUuNjQ4DQoJCQlDMjMuNTg3LDEwLjAzOSwyMS4zOTcsOSwxOCw5QzguNDM3LDksOCwxNyw4LDE3djQuOTk1Yy0wLjUyNiwwLjQ3NS0xLDEuMTU0LTEsMS45MTR2My40NTVjMCwwLjkxMSwwLjQ3OSwxLjcxMSwxLjE5NCwyLjE3NA0KCQkJQzkuMDU3LDMzLjI5NiwxMS45NTUsMzYsMTEuOTU1LDM2djMuMTU3YzAsMS4xNTEtMC42MjksMi4yMTEtMS42NCwyLjc2MkwzLjYxLDQ2LjEyMkMxLjM4NSw0Ny4zMzYsMCw0OS42NjgsMCw1Mi4yMDNWNTVoMTQNCgkJCXYtMy4yMzlDMTQsNDguODI2LDE1LjYwMyw0Ni4xMjUsMTguMTgsNDQuNzJ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMyNkI5OTk7IiBjeD0iNDgiIGN5PSI0NiIgcj0iMTIiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik01NC41NzEsNDAuMTc5Yy0wLjQ1NS0wLjMxNi0xLjA3Ny0wLjIwNC0xLjM5MiwwLjI1bC01LjU5Niw4LjA0bC0zLjk0OS0zLjI0Mg0KCQkJYy0wLjQyNi0wLjM1MS0xLjA1Ny0wLjI4OC0xLjQwNywwLjEzOWMtMC4zNTEsMC40MjctMC4yODksMS4wNTcsMC4xMzksMS40MDdsNC43ODYsMy45MjljMC4xOCwwLjE0NywwLjQwNCwwLjIyNywwLjYzNCwwLjIyNw0KCQkJYzAuMDQ1LDAsMC4wOTEtMC4wMDMsMC4xMzctMC4wMDljMC4yNzYtMC4wMzksMC41MjQtMC4xOSwwLjY4NC0wLjQxOWw2LjIxNC04LjkyOUM1NS4xMzYsNDEuMTE4LDU1LjAyNCw0MC40OTUsNTQuNTcxLDQwLjE3OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                subscribe: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS45MiA1MTEuOTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45MiA1MTEuOTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM4QUQ1REQ7IiBwb2ludHM9IjI4NC4zMzYsNDg4LjI0IDI4NC4zMzYsMzM4LjUyIDM0NS4xOTIsNDAwLjU2OCAzODUuNjk2LDM2MS4wNCAyNTUuOTYsMjI4Ljc2IA0KCTEyNi4yMjQsMzYxLjA0IDE2Ni43MjgsNDAwLjU2OCAyMjcuNTg0LDMzOC41MiAyMjcuNTg0LDQ4OC4yNCAiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQjJCNDI7IiBkPSJNNDA3LjAxNiwxMzAuMjI0YzAtNi4xNTItNS41Mi04LjU5Mi0xMi4zOTItOC41OTJoLTQuNzEydjE3LjE4NA0KCQljMS4zNiwwLjE3NiwyLjk5MiwwLjE3Niw1LjM0NCwwLjE3NkM0MDEuNDg4LDEzOSw0MDcuMDE2LDEzNi42NDgsNDA3LjAxNiwxMzAuMjI0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQjJCNDI7IiBkPSJNNDA1LjU2LDEwNC4yNjRjMC00LjYxNi0zLjUyLTcuMDU2LTkuNzY4LTcuMDU2Yy0yLjk4NCwwLTQuNzA0LDAuMTg0LTUuODgsMC4zNnYxNC4yaDQuNTINCgkJQzQwMS42OCwxMTEuNzc2LDQwNS41NiwxMDguNzkyLDQwNS41NiwxMDQuMjY0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQjJCNDI7IiBkPSJNMjQsMjE0LjI0aDQ2My45MmMxMy4yLDAsMjQtMTAuOCwyNC0yNFY0Ny42OGMwLTEzLjItMTAuOC0yNC0yNC0yNEgyNGMtMTMuMiwwLTI0LDEwLjgtMjQsMjQNCgkJdjE0Mi41NkMwLDIwMy40NCwxMC44LDIxNC4yNCwyNCwyMTQuMjR6IE00MjguNjQ4LDg3LjYyNGgzNy42MzJ2MTEuMzA0aC0yMy43OTJ2MTIuNjY0aDIyLjQzMnYxMS4yMTZoLTIyLjQzMnYxNC40NzJoMjUuMDU2DQoJCXYxMS4zMTJoLTM4Ljg5NlY4Ny42MjR6IE0zNzYuMjU2LDg4LjQ0YzMuNjE2LTAuNzIsMTAuOTQ0LTEuMjY0LDE3LjgyNC0xLjI2NGM4LjQxNiwwLDEzLjU2OCwwLjgxNiwxOCwzLjQ0DQoJCWM0LjI0OCwyLjI2NCw3LjMyOCw2LjQyNCw3LjMyOCwxMS45MzZjMCw1LjQzMi0zLjE2OCwxMC40OTYtMTAuMDQsMTMuMDI0djAuMTc2YzYuOTYsMS45MDQsMTIuMTIsNy4xNTIsMTIuMTIsMTUuMDE2DQoJCWMwLDUuNTItMi41MjgsOS44NTYtNi4zMjgsMTIuOTM2Yy00LjQ0LDMuNTItMTEuODQ4LDUuNTEyLTIzLjk2OCw1LjUxMmMtNi43OTIsMC0xMS44NDgtMC40NTYtMTQuOTI4LTAuOTA0Vjg4LjQ0SDM3Ni4yNTZ6DQoJCSBNMzUyLjczNiw4Ny42MjRoMTMuODR2NjAuOTY4aC0xMy44NFY4Ny42MjR6IE0zMDEuMzM2LDg4LjQ0YzQuNDMyLTAuNzIsMTEuMDQtMS4yNjQsMTguMzY4LTEuMjY0DQoJCWM5LjA0LDAsMTUuMzc2LDEuMzUyLDE5LjcyLDQuNzkyYzMuNjE2LDIuODk2LDUuNiw3LjE1Miw1LjYsMTIuNzUyYzAsNy43ODQtNS41MTIsMTMuMTItMTAuNzYsMTUuMDE2djAuMjcyDQoJCWM0LjI0OCwxLjcyLDYuNiw1Ljc5Miw4LjE0NCwxMS4zOTJjMS44OTYsNi44NzIsMy44LDE0LjgzMiw0Ljk2OCwxNy4xODRoLTE0LjExMmMtMC45OTItMS43Mi0yLjQ0LTYuNjk2LTQuMjQ4LTE0LjINCgkJYy0xLjYyNC03LjYtNC4yNDgtOS42NzItOS44NTYtOS43NjhoLTQuMTY4djIzLjk2OGgtMTMuNjU2TDMwMS4zMzYsODguNDRMMzAxLjMzNiw4OC40NHogTTI4MC4yNCw4Ni42MzINCgkJYzcuMTUyLDAsMTIuNTY4LDEuNDQ4LDE1LjAxNiwyLjcxMmwtMi44MDgsMTAuOTQ0Yy0yLjgwOC0xLjE3Ni02LjY5Ni0yLjI2NC0xMS41NzYtMi4yNjRjLTEwLjk0NCwwLTE5LjQ0OCw2LjYtMTkuNDQ4LDIwLjE2OA0KCQljMCwxMi4yMDgsNy4yMzIsMTkuODk2LDE5LjUzNiwxOS44OTZjNC4xNiwwLDguNzc2LTAuOTA0LDExLjQ4OC0xLjk5MmwyLjA4LDEwLjc2OGMtMi41MjgsMS4yNjQtOC4yMjQsMi42MjQtMTUuNjQ4LDIuNjI0DQoJCWMtMjEuMDcyLDAtMzEuOTI4LTEzLjEyLTMxLjkyOC0zMC40ODhDMjQ2Ljk1Miw5OC4yMDgsMjYxLjc5Miw4Ni42MzIsMjgwLjI0LDg2LjYzMnogTTIxOC4zNDQsMTIyLjk5Mg0KCQljLTEwLjEyOC0zLjUyOC0xNi43MzYtOS4xMzYtMTYuNzM2LTE4YzAtMTAuNCw4LjY4OC0xOC4zNiwyMy4wNzItMTguMzZjNi44NzIsMCwxMS45MzYsMS40NDgsMTUuNTUyLDMuMDcybC0zLjA3MiwxMS4xMjgNCgkJYy0yLjQ0OC0xLjE3Ni02Ljc5Mi0yLjg5Ni0xMi43Ni0yLjg5NmMtNS45NjgsMC04Ljg2NCwyLjcxMi04Ljg2NCw1Ljg4YzAsMy44ODgsMy40NCw1LjYwOCwxMS4zMTIsOC41OTINCgkJYzEwLjc2LDMuOTc2LDE1LjgzMiw5LjU4NCwxNS44MzIsMTguMTc2YzAsMTAuMjE2LTcuODcyLDE4LjkwNC0yNC42LDE4LjkwNGMtNi45NjgsMC0xMy44NC0xLjgxNi0xNy4yOC0zLjcxMmwyLjgwOC0xMS40DQoJCWMzLjcxMiwxLjkwNCw5LjQwOCwzLjgsMTUuMjg4LDMuOGM2LjMyOCwwLDkuNjgtMi42MjQsOS42OC02LjZDMjI4LjU2OCwxMjcuNzg0LDIyNS42NzIsMTI1LjYxNiwyMTguMzQ0LDEyMi45OTJ6IE0xNTAuNzYsODguNDQNCgkJYzMuNjE2LTAuNzIsMTAuOTQ0LTEuMjY0LDE3LjgyNC0xLjI2NGM4LjQxNiwwLDEzLjU2OCwwLjgxNiwxOCwzLjQ0YzQuMjQ4LDIuMjY0LDcuMzI4LDYuNDI0LDcuMzI4LDExLjkzNg0KCQljMCw1LjQzMi0zLjE2OCwxMC40OTYtMTAuMDQsMTMuMDI0djAuMTc2YzYuOTYsMS45MDQsMTIuMTIsNy4xNTIsMTIuMTIsMTUuMDE2YzAsNS41Mi0yLjUyOCw5Ljg1Ni02LjMyOCwxMi45MzYNCgkJYy00LjQ0LDMuNTItMTEuODQ4LDUuNTEyLTIzLjk2OCw1LjUxMmMtNi43OTIsMC0xMS44NDgtMC40NTYtMTQuOTI4LTAuOTA0Vjg4LjQ0SDE1MC43NnogTTkxLjIxNiw4Ny42MjRoMTMuODMydjM1LjA5Ng0KCQljMCwxMC40OTYsMy45NzYsMTUuODMyLDExLjA0LDE1LjgzMmM3LjIzMiwwLDExLjIwOC01LjA2NCwxMS4yMDgtMTUuODMyVjg3LjYyNGgxMy43NTJ2MzQuMTkyDQoJCWMwLDE4LjgxNi05LjUwNCwyNy43NjgtMjUuNDE2LDI3Ljc2OGMtMTUuMzg0LDAtMjQuNDI0LTguNDk2LTI0LjQyNC0yNy45NTJWODcuNjI0SDkxLjIxNnogTTU5Ljg5NiwxMjIuOTkyDQoJCWMtMTAuMTItMy41MjgtMTYuNzM2LTkuMTM2LTE2LjczNi0xOGMwLTEwLjQsOC42ODgtMTguMzYsMjMuMDcyLTE4LjM2YzYuODcyLDAsMTEuOTM2LDEuNDQ4LDE1LjU1MiwzLjA3MmwtMy4wNzIsMTEuMTI4DQoJCWMtMi40NDgtMS4xNzYtNi43OTItMi44OTYtMTIuNzYtMi44OTZzLTguODY0LDIuNzEyLTguODY0LDUuODhjMCwzLjg4OCwzLjQ0LDUuNjA4LDExLjMxMiw4LjU5Mg0KCQljMTAuNzYsMy45NzYsMTUuODMyLDkuNTg0LDE1LjgzMiwxOC4xNzZjMCwxMC4yMTYtNy44NjQsMTguOTA0LTI0LjYsMTguOTA0Yy02Ljk2OCwwLTEzLjg0LTEuODE2LTE3LjI4LTMuNzEybDIuODA4LTExLjQNCgkJYzMuNzEyLDEuOTA0LDkuNDA4LDMuOCwxNS4yODgsMy44YzYuMzI4LDAsOS42OC0yLjYyNCw5LjY4LTYuNkM3MC4xMjgsMTI3Ljc4NCw2Ny4yMjQsMTI1LjYxNiw1OS44OTYsMTIyLjk5MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojREIyQjQyOyIgZD0iTTE4MC4wNjQsMTA0LjI2NGMwLTQuNjE2LTMuNTItNy4wNTYtOS43NjgtNy4wNTZjLTIuOTg0LDAtNC43MDQsMC4xODQtNS44OCwwLjM2djE0LjJoNC41Mg0KCQlDMTc2LjE3NiwxMTEuNzc2LDE4MC4wNjQsMTA4Ljc5MiwxODAuMDY0LDEwNC4yNjR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0RCMkI0MjsiIGQ9Ik0zMzEuMzY4LDEwNS44OTZjMC01LjYwOC0zLjgtOC40MDgtMTAuMTM2LTguNDk2Yy0zLjM0NCwwLTUuMjQsMC4yNzItNi4yNCwwLjQ0OHYxNi44MjRoNS40MzINCgkJQzMyNy4yOTYsMTE0LjY3MiwzMzEuMzY4LDExMS4yMzIsMzMxLjM2OCwxMDUuODk2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQjJCNDI7IiBkPSJNMTgxLjUxMiwxMzAuMjI0YzAtNi4xNTItNS41Mi04LjU5Mi0xMi4zOTItOC41OTJoLTQuNzEydjE3LjE4NA0KCQljMS4zNiwwLjE3NiwyLjk5MiwwLjE3Niw1LjM0NCwwLjE3NkMxNzUuOTkyLDEzOSwxODEuNTEyLDEzNi42NDgsMTgxLjUxMiwxMzAuMjI0eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02MC40NDgsMTM4LjE5MmMtNS44OCwwLTExLjU3Ni0xLjg5Ni0xNS4yODgtMy44bC0yLjgwOCwxMS40YzMuNDQsMS44OTYsMTAuMzEyLDMuNzEyLDE3LjI4LDMuNzEyDQoJCWMxNi43MzYsMCwyNC42LTguNjg4LDI0LjYtMTguOTA0YzAtOC41OTItNS4wNzItMTQuMi0xNS44MzItMTguMTc2Yy03Ljg3Mi0yLjk5Mi0xMS4zMTItNC43MDQtMTEuMzEyLTguNTkyDQoJCWMwLTMuMTY4LDIuODk2LTUuODgsOC44NjQtNS44OHMxMC4zMTIsMS43MiwxMi43NiwyLjg5NmwzLjA3Mi0xMS4xMjhjLTMuNjE2LTEuNjMyLTguNjgtMy4wNzItMTUuNTUyLTMuMDcyDQoJCWMtMTQuMzg0LDAtMjMuMDcyLDcuOTYtMjMuMDcyLDE4LjM2YzAsOC44NjQsNi42MDgsMTQuNDcyLDE2LjczNiwxOGM3LjMyOCwyLjYyNCwxMC4yMjQsNC43OTIsMTAuMjI0LDguNTkyDQoJCUM3MC4xMjgsMTM1LjU2OCw2Ni43NzYsMTM4LjE5Miw2MC40NDgsMTM4LjE5MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTExNS42NCwxNDkuNTg0YzE1LjkxMiwwLDI1LjQxNi04Ljk1MiwyNS40MTYtMjcuNzY4Vjg3LjYyNGgtMTMuNzUydjM1LjA5Ng0KCQljMCwxMC43NjgtMy45NzYsMTUuODMyLTExLjIwOCwxNS44MzJjLTcuMDY0LDAtMTEuMDQtNS4zMzYtMTEuMDQtMTUuODMyVjg3LjYyNEg5MS4yMjR2MzQuMDA4DQoJCUM5MS4yMTYsMTQxLjA4LDEwMC4yNTYsMTQ5LjU4NCwxMTUuNjQsMTQ5LjU4NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE4OS42NTYsMTQzLjcwNGMzLjgtMy4wOCw2LjMyOC03LjQxNiw2LjMyOC0xMi45MzZjMC03Ljg2NC01LjE2LTEzLjExMi0xMi4xMi0xNS4wMTZ2LTAuMTc2DQoJCWM2Ljg3Mi0yLjUyOCwxMC4wNC03LjYsMTAuMDQtMTMuMDI0YzAtNS41MTItMy4wOC05LjY3Mi03LjMyOC0xMS45MzZjLTQuNDMyLTIuNjI0LTkuNTg0LTMuNDQtMTgtMy40NA0KCQljLTYuODcyLDAtMTQuMiwwLjU0NC0xNy44MjQsMS4yNjR2NTkuODhjMy4wOCwwLjQ1Niw4LjE0NCwwLjkwNCwxNC45MjgsMC45MDRDMTc3LjgsMTQ5LjIyNCwxODUuMjE2LDE0Ny4yMzIsMTg5LjY1NiwxNDMuNzA0eg0KCQkgTTE2NC40MTYsOTcuNTc2YzEuMTc2LTAuMTc2LDIuODk2LTAuMzYsNS44OC0wLjM2YzYuMjQsMCw5Ljc2OCwyLjQ0LDkuNzY4LDcuMDU2YzAsNC41Mi0zLjg4LDcuNTA0LTExLjEyOCw3LjUwNGgtNC41MlY5Ny41NzZ6DQoJCSBNMTY0LjQxNiwxMjEuNjMyaDQuNzEyYzYuODY0LDAsMTIuMzkyLDIuNDQ4LDEyLjM5Miw4LjU5MmMwLDYuNDI0LTUuNTIsOC43NzYtMTEuNzYsOC43NzZjLTIuMzUyLDAtMy45ODQsMC01LjM0NC0wLjE3Ng0KCQlMMTY0LjQxNiwxMjEuNjMyTDE2NC40MTYsMTIxLjYzMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIxOC44ODgsMTM4LjE5MmMtNS44OCwwLTExLjU3Ni0xLjg5Ni0xNS4yODgtMy44bC0yLjgwOCwxMS40YzMuNDQsMS44OTYsMTAuMzEyLDMuNzEyLDE3LjI4LDMuNzEyDQoJCWMxNi43MjgsMCwyNC42LTguNjg4LDI0LjYtMTguOTA0YzAtOC41OTItNS4wNzItMTQuMi0xNS44MzItMTguMTc2Yy03Ljg3Mi0yLjk5Mi0xMS4zMTItNC43MDQtMTEuMzEyLTguNTkyDQoJCWMwLTMuMTY4LDIuODk2LTUuODgsOC44NjQtNS44OGM1Ljk2OCwwLDEwLjMxMiwxLjcyLDEyLjc2LDIuODk2bDMuMDcyLTExLjEyOGMtMy42MTYtMS42MzItOC42OC0zLjA3Mi0xNS41NTItMy4wNzINCgkJYy0xNC4zODQsMC0yMy4wNzIsNy45Ni0yMy4wNzIsMTguMzZjMCw4Ljg2NCw2LjYwOCwxNC40NzIsMTYuNzM2LDE4YzcuMzI4LDIuNjI0LDEwLjIyNCw0Ljc5MiwxMC4yMjQsOC41OTINCgkJQzIyOC41NjgsMTM1LjU2OCwyMjUuMjE2LDEzOC4xOTIsMjE4Ljg4OCwxMzguMTkyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjc4Ljg4LDE0OS40OTZjNy40MjQsMCwxMy4xMi0xLjM2LDE1LjY0OC0yLjYyNGwtMi4wOC0xMC43NjgNCgkJYy0yLjcxMiwxLjA4OC03LjMyOCwxLjk5Mi0xMS40ODgsMS45OTJjLTEyLjMwNCwwLTE5LjUzNi03LjY4OC0xOS41MzYtMTkuODk2YzAtMTMuNTY4LDguNDk2LTIwLjE2OCwxOS40NDgtMjAuMTY4DQoJCWM0Ljg4LDAsOC43NzYsMS4wODgsMTEuNTc2LDIuMjY0bDIuODA4LTEwLjk0NGMtMi40NDgtMS4yNzItNy44NjQtMi43MTItMTUuMDE2LTIuNzEyYy0xOC40NTYsMC0zMy4yODgsMTEuNTc2LTMzLjI4OCwzMi4zODQNCgkJQzI0Ni45NTIsMTM2LjM3NiwyNTcuODA4LDE0OS40OTYsMjc4Ljg4LDE0OS40OTZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zMTQuOTkyLDEyNC42MjRoNC4xNjhjNS42MDgsMC4wODgsOC4yMzIsMi4xNjgsOS44NTYsOS43NjhjMS44MTYsNy41MDQsMy4yNTYsMTIuNDg4LDQuMjQ4LDE0LjINCgkJaDE0LjExMmMtMS4xNjgtMi4zNTItMy4wNzItMTAuMzEyLTQuOTY4LTE3LjE4NGMtMS41MzYtNS42MDgtMy44ODgtOS42NzItOC4xNDQtMTEuMzkydi0wLjI3Mg0KCQljNS4yNC0xLjg5NiwxMC43Ni03LjIzMiwxMC43Ni0xNS4wMTZjMC01LjYwOC0xLjk4NC05Ljg1Ni01LjYtMTIuNzUyYy00LjM0NC0zLjQ0LTEwLjY4LTQuNzkyLTE5LjcyLTQuNzkyDQoJCWMtNy4zMjgsMC0xMy45MzYsMC41NDQtMTguMzY4LDEuMjY0VjE0OC42aDEzLjY1NkwzMTQuOTkyLDEyNC42MjRMMzE0Ljk5MiwxMjQuNjI0eiBNMzE0Ljk5Miw5Ny44NDgNCgkJYzEtMC4xNzYsMi44OTYtMC40NDgsNi4yNC0wLjQ0OGM2LjMzNiwwLjA4OCwxMC4xMzYsMi44OTYsMTAuMTM2LDguNDk2YzAsNS4zMzYtNC4wNzIsOC43NzYtMTAuOTQ0LDguNzc2aC01LjQzMkwzMTQuOTkyLDk3Ljg0OA0KCQlMMzE0Ljk5Miw5Ny44NDh6Ii8+DQoJPHJlY3QgeD0iMzUyLjc2IiB5PSI4Ny42MjQiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTMuODQiIGhlaWdodD0iNjAuOTY4Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik00MTUuMTUyLDE0My43MDRjMy44LTMuMDgsNi4zMjgtNy40MTYsNi4zMjgtMTIuOTM2YzAtNy44NjQtNS4xNi0xMy4xMTItMTIuMTItMTUuMDE2di0wLjE3Ng0KCQljNi44NzItMi41MjgsMTAuMDQtNy42LDEwLjA0LTEzLjAyNGMwLTUuNTEyLTMuMDgtOS42NzItNy4zMjgtMTEuOTM2Yy00LjQzMi0yLjYyNC05LjU4NC0zLjQ0LTE4LTMuNDQNCgkJYy02Ljg3MiwwLTE0LjIsMC41NDQtMTcuODI0LDEuMjY0djU5Ljg4YzMuMDgsMC40NTYsOC4xNDQsMC45MDQsMTQuOTI4LDAuOTA0QzQwMy4zMDQsMTQ5LjIyNCw0MTAuNzIsMTQ3LjIzMiw0MTUuMTUyLDE0My43MDR6DQoJCSBNMzg5LjkxMiw5Ny41NzZjMS4xNzYtMC4xNzYsMi44OTYtMC4zNiw1Ljg4LTAuMzZjNi4yNCwwLDkuNzY4LDIuNDQsOS43NjgsNy4wNTZjMCw0LjUyLTMuODgsNy41MDQtMTEuMTI4LDcuNTA0aC00LjUyDQoJCUwzODkuOTEyLDk3LjU3NkwzODkuOTEyLDk3LjU3NnogTTM4OS45MTIsMTIxLjYzMmg0LjcxMmM2Ljg2NCwwLDEyLjM5MiwyLjQ0OCwxMi4zOTIsOC41OTJjMCw2LjQyNC01LjUyLDguNzc2LTExLjc2LDguNzc2DQoJCWMtMi4zNTIsMC0zLjk4NCwwLTUuMzQ0LTAuMTc2VjEyMS42MzJ6Ii8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iNDY3LjU0NCwxMzcuMjggNDQyLjQ4OCwxMzcuMjggNDQyLjQ4OCwxMjIuODA4IDQ2NC45MiwxMjIuODA4IDQ2NC45MiwxMTEuNTkyIA0KCQk0NDIuNDg4LDExMS41OTIgNDQyLjQ4OCw5OC45MjggNDY2LjI4LDk4LjkyOCA0NjYuMjgsODcuNjI0IDQyOC42NDgsODcuNjI0IDQyOC42NDgsMTQ4LjU5MiA0NjcuNTQ0LDE0OC41OTIgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                order_number: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgwIDQ4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzdEOEQ5QzsiIGQ9Ik0xNTIsOGgxNzZjMTcuNjczLDAsMzIsMTQuMzI3LDMyLDMydjQwMGMwLDE3LjY3My0xNC4zMjcsMzItMzIsMzJIMTUyYy0xNy42NzMsMC0zMi0xNC4zMjctMzItMzJWNDANCglDMTIwLDIyLjMyNywxMzQuMzI3LDgsMTUyLDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojODdDRUU5OyIgZD0iTTEyMCw4MGgyNDB2MzI4SDEyMFY4MHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNBQUJFQ0U7IiBkPSJNMTg0LDQwaDExMnYxNkgxODRWNDB6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0FBQkVDRTsiIGQ9Ik0yMjQsNDMyaDMydjE2aC0zMlY0MzJ6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMkQ3NUJCOyIgZD0iTTI0OCwyMTZ2MTYwSDhWMjE2SDI0OHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGREJENDA7IiBkPSJNMjQ4LDI0OHY0OEg4di00OEgyNDh6Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkRCRDQwOyIgY3g9IjM3NiIgY3k9IjIwOCIgcj0iOTYiLz4NCjwvZz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRjY5QTsiIGN4PSIzNzYiIGN5PSIyMDgiIHI9IjY0Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkRCRDQwOyIgZD0iTTIyNCwzMjB2MzJoLTMydi0zMkgyMjR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZEQkQ0MDsiIGQ9Ik00MDAsMjAwaC00MHYtMTZoNDBjNC40MTgsMCw4LTMuNTgyLDgtOHMtMy41ODItOC04LThoLTE2di04YzAtNC40MTgtMy41ODItOC04LThzLTgsMy41ODItOCw4djgNCgkJaC0xNmMtNC40MTgsMC04LDMuNTgyLTgsOHYzMmMwLDQuNDE4LDMuNTgyLDgsOCw4aDQwdjE2aC00MGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOGgxNnY4YzAsNC40MTgsMy41ODIsOCw4LDgNCgkJczgtMy41ODIsOC04di04aDE2YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTMyQzQwOCwyMDMuNTgyLDQwNC40MTgsMjAwLDQwMCwyMDB6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzk0RDVDOyIgZD0iTTI4OCwxMjBoLTgwYy00LjQxOCwwLTgtMy41ODItOC04YzAtNC40MTgsMy41ODItOCw4LThoODBjNC40MTgsMCw4LDMuNTgyLDgsOA0KCQlDMjk2LDExNi40MTgsMjkyLjQxOCwxMjAsMjg4LDEyMHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzk0RDVDOyIgZD0iTTI3MiwxNTJoLTMyYy00LjQxOCwwLTgtMy41ODItOC04czMuNTgyLTgsOC04aDMyYzQuNDE4LDAsOCwzLjU4Miw4LDhTMjc2LjQxOCwxNTIsMjcyLDE1MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzk0RDVDOyIgZD0iTTMyOCwzNDRoLTQ4Yy00LjQxOCwwLTgtMy41ODItOC04czMuNTgyLTgsOC04aDQ4YzQuNDE4LDAsOCwzLjU4Miw4LDhTMzMyLjQxOCwzNDQsMzI4LDM0NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzk0RDVDOyIgZD0iTTMxMiwzNzZoLTMyYy00LjQxOCwwLTgtMy41ODItOC04czMuNTgyLTgsOC04aDMyYzQuNDE4LDAsOCwzLjU4Miw4LDhTMzE2LjQxOCwzNzYsMzEyLDM3NnoiLz4NCjwvZz4NCjxwYXRoIGQ9Ik0xODQsNDBoMTEydjE2SDE4NFY0MHoiLz4NCjxwYXRoIGQ9Ik0yMjQsNDMyaDMydjE2aC0zMlY0MzJ6Ii8+DQo8cGF0aCBkPSJNMzc2LDEwNGMtMi43MDQsMC01LjM1MiwwLjItOCwwLjQwOFY0MGMtMC4wMjYtMjIuMDgtMTcuOTItMzkuOTc0LTQwLTQwSDE1MmMtMjIuMDgsMC4wMjYtMzkuOTc0LDE3LjkyLTQwLDQwdjE2OEg4DQoJYy00LjQxOCwwLTgsMy41ODItOCw4djE2MGMwLDQuNDE4LDMuNTgyLDgsOCw4aDEwNHY1NmMwLjAyNiwyMi4wOCwxNy45MiwzOS45NzQsNDAsNDBoMTc2YzIyLjA4LTAuMDI2LDM5Ljk3NC0xNy45Miw0MC00MFYzMTEuNTkyDQoJYzIuNjQ4LDAuMjA4LDUuMjk2LDAuNDA4LDgsMC40MDhjNTcuNDM4LDAsMTA0LTQ2LjU2MiwxMDQtMTA0UzQzMy40MzgsMTA0LDM3NiwxMDRMMzc2LDEwNHogTTEyOCw0MGMwLTEzLjI1NSwxMC43NDUtMjQsMjQtMjRoMTc2DQoJYzEzLjI1NSwwLDI0LDEwLjc0NSwyNCwyNHYzMkgxMjhWNDB6IE0yNDAsMjI0djE2SDE2di0xNkgyNDB6IE0xNiwyNTZoMjI0djMySDE2VjI1NnogTTE2LDMwNGgyMjR2NjRIMTZWMzA0eiBNMzUyLDQ0MA0KCWMwLDEzLjI1NS0xMC43NDUsMjQtMjQsMjRIMTUyYy0xMy4yNTUsMC0yNC0xMC43NDUtMjQtMjR2LTI0aDIyNFY0NDB6IE0zNTIsNDAwSDEyOHYtMTZoMTIwYzQuNDE4LDAsOC0zLjU4Miw4LThWMjE2DQoJYzAtNC40MTgtMy41ODItOC04LThIMTI4Vjg4aDIyNHYxOC45MDRjLTU1LjgzNCwxMy4xOTMtOTAuNDAxLDY5LjE1MS03Ny4yMDgsMTI0Ljk4NGM5LjA0NSwzOC4yNzcsMzguOTMxLDY4LjE2Myw3Ny4yMDgsNzcuMjA4VjQwMA0KCXogTTM3NiwyOTZjLTQ4LjYwMSwwLTg4LTM5LjM5OS04OC04OHMzOS4zOTktODgsODgtODhzODgsMzkuMzk5LDg4LDg4QzQ2My45NDMsMjU2LjU3Nyw0MjQuNTc3LDI5NS45NDMsMzc2LDI5NnoiLz4NCjxwYXRoIGQ9Ik0zNzYsMTM2Yy0zOS43NjQsMC03MiwzMi4yMzYtNzIsNzJzMzIuMjM2LDcyLDcyLDcyczcyLTMyLjIzNiw3Mi03MkM0NDcuOTU2LDE2OC4yNTQsNDE1Ljc0NiwxMzYuMDQ0LDM3NiwxMzZ6IE0zNzYsMjY0DQoJYy0zMC45MjgsMC01Ni0yNS4wNzItNTYtNTZzMjUuMDcyLTU2LDU2LTU2czU2LDI1LjA3Miw1Niw1NkM0MzEuOTY1LDIzOC45MTMsNDA2LjkxMywyNjMuOTY1LDM3NiwyNjR6Ii8+DQo8cGF0aCBkPSJNMjI0LDMxMmgtMzJjLTQuNDE4LDAtOCwzLjU4Mi04LDh2MzJjMCw0LjQxOCwzLjU4Miw4LDgsOGgzMmM0LjQxOCwwLDgtMy41ODIsOC04di0zMkMyMzIsMzE1LjU4MiwyMjguNDE4LDMxMiwyMjQsMzEyeg0KCSBNMjE2LDM0NGgtMTZ2LTE2aDE2VjM0NHoiLz4NCjxwYXRoIGQ9Ik0zODQsMjU2di04aDE2YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTMyYzAtNC40MTgtMy41ODItOC04LThoLTQwdi0xNmg0MGM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOGgtMTZ2LTgNCgljMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2OGgtMTZjLTQuNDE4LDAtOCwzLjU4Mi04LDh2MzJjMCw0LjQxOCwzLjU4Miw4LDgsOGg0MHYxNmgtNDBjLTQuNDE4LDAtOCwzLjU4Mi04LDhzMy41ODIsOCw4LDgNCgloMTZ2OGMwLDQuNDE4LDMuNTgyLDgsOCw4UzM4NCwyNjAuNDE4LDM4NCwyNTZ6Ii8+DQo8cGF0aCBkPSJNMjk2LDExMmMwLTQuNDE4LTMuNTgyLTgtOC04aC04MGMtNC40MTgsMC04LDMuNTgyLTgsOGMwLDQuNDE4LDMuNTgyLDgsOCw4aDgwQzI5Mi40MTgsMTIwLDI5NiwxMTYuNDE4LDI5NiwxMTJ6Ii8+DQo8cGF0aCBkPSJNMjgwLDE0NGMwLTQuNDE4LTMuNTgyLTgtOC04aC0zMmMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOGgzMkMyNzYuNDE4LDE1MiwyODAsMTQ4LjQxOCwyODAsMTQ0eiIvPg0KPHBhdGggZD0iTTI3MiwzMzZjMCw0LjQxOCwzLjU4Miw4LDgsOGg0OGM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOGgtNDhDMjc1LjU4MiwzMjgsMjcyLDMzMS41ODIsMjcyLDMzNnoiLz4NCjxwYXRoIGQ9Ik0zMTIsMzYwaC0zMmMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOGgzMmM0LjQxOCwwLDgtMy41ODIsOC04UzMxNi40MTgsMzYwLDMxMiwzNjB6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
                    linkTo: "/collections/all",
                    isDisplayEarnedCredits: false,
                },
                birthdate: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5bGluZSBzdHlsZT0iZmlsbDojNTdCQUU1OyIgcG9pbnRzPSIxOC41MzksNDcxLjk2NiA2Mi4wMDUsNTEyIDQ1MC4wMSw1MTIgNDkzLjQ3Niw0NzEuOTY2ICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzM0QTlEMTsiIHBvaW50cz0iMTguNTM5LDQ3MS45NjYgNjIuMDA1LDUxMiA5My4xNDIsNTEyIDQ5LjY3Niw0NzEuOTY2ICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzU3QkFFNTsiIGQ9Ik0yNjkuMjI3LDc3LjYwN2MtMTguNDQxLTUuMjI3LTQwLjQzNi0wLjI1OC00MC40MzYsMTguMTY2djM3LjE3NGg1NC40MzJWOTUuNzczDQoJQzI4My4yMjQsODUuNzAxLDI3Ni45NSw4MC4zOTMsMjY5LjIyNyw3Ny42MDd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzRBOUQxOyIgZD0iTTI3MS41NzYsNzguNTY3Yy0xNC40MjItNi41MjgtNDIuNzg0LTMuNDY5LTQyLjc4NCwxNy4yMDZ2MzcuMTc0aDMxLjEzN1Y5NS43NzMNCglDMjU5LjkyOCw4Ni43NDcsMjY0Ljk3LDgxLjU1MywyNzEuNTc2LDc4LjU2N3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3QzU0Mzc7IiBkPSJNNDA3LjEwNSwyMjUuMTR2LTQxLjA2OWMwLTEwLjYzLTguNjE2LTE5LjI0Ni0xOS4yNDYtMTkuMjQ2SDEyNC4xNTINCgljLTEwLjYyOCwwLTE5LjI0NCw4LjYxNi0xOS4yNDQsMTkuMjQ2djExNC4xOThoMzAyLjE5OVYyNTIuMiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzhFNUUzRDsiIGQ9Ik0zODcuODU5LDE2NC44MjVIMjYzLjI5OGMtMi43MDUsNDcuMTcyLDcuMDg5LDkyLjgyMiwyNy42MTQsMTMzLjQ0NGgxMTYuMTkzDQoJYzAtMTAuODg1LDAtMTAxLjUxMSwwLTExNC4xOThDNDA3LjEwNSwxNzMuNDQyLDM5OC40ODksMTY0LjgyNSwzODcuODU5LDE2NC44MjV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkY0QjRFOyIgZD0iTTM0Mi4xODIsMTY0LjgyNVYxNDIuODFjMC02LjA2Mi00LjkxMy0xMC45NzUtMTAuOTc2LTEwLjk3NUgxODAuODA4DQoJYy02LjA2MiwwLTEwLjk3Niw0LjkxMy0xMC45NzYsMTAuOTc1djIyLjAxNUgzNDIuMTgyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZDNTE2MjsiIGQ9Ik0zMzEuMjA1LDEzMS44MzVIMjY3LjI5Yy0yLjAwMiwxMC43OC0zLjM0NywyMS43OS0zLjk5MSwzMi45OWg3OC44ODRWMTQyLjgxDQoJQzM0Mi4xODIsMTM2Ljc0OSwzMzcuMjY5LDEzMS44MzUsMzMxLjIwNSwxMzEuODM1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzYwM0QyNjsiIGQ9Ik0xNTUuMjksMTY0LjgyNWgtMzEuMTM5Yy0xMC42MjgsMC0xOS4yNDQsOC42MTYtMTkuMjQ0LDE5LjI0NnYxMTQuMTk4aDMxLjEzN1YxODQuMDcxDQoJQzEzNi4wNDQsMTczLjQ0MiwxNDQuNjYsMTY0LjgyNSwxNTUuMjksMTY0LjgyNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFRjIyMzU7IiBkPSJNMjExLjk0NCwxMzEuODM1aC0zMS4xMzdjLTYuMDYyLDAtMTAuOTc2LDQuOTEzLTEwLjk3NiwxMC45NzV2MjIuMDE1aDMxLjEzN1YxNDIuODENCglDMjAwLjk2OCwxMzYuNzQ5LDIwNS44ODIsMTMxLjgzNSwyMTEuOTQ0LDEzMS44MzV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjk5ODMwOyIgZD0iTTI1NC45MDMsMC4xMzRjLTExLjQ4OCw0Ljk2NS0xOC45MDksMTYuMjU1LTE4LjkwOSwyOC43NjFjMCwxOS4xODksMTYuNjgzLDI4Ljk4OSwyMC4wMTQsMjguOTg5DQoJYzMuMTM0LDAsMjAuMDE0LTkuNTc3LDIwLjAxNC0yOC45ODlDMjc2LjAyLDkuMzUzLDI1OC4zMDgtMS4zMzcsMjU0LjkwMywwLjEzNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkMzNzM7IiBkPSJNMzg3Ljg1OSwxNjQuODI1SDEyNC4xNTNjLTguNzIsMC0xNi4wODUsNS43OTgtMTguNDQ5LDEzLjc0OGMtMS4wMTYsMy40My0wLjc5Nyw0LjI2Ni0wLjc5NywyMC4yNDkNCglsMzUuODExLDIzLjI2N2MxMi42MzgsOC4yMTEsMjMuNzAzLDMuMjcsMjcuNjA4LDAuOTc3bDI0LjQ5OS0xNS45MTljMC4wMDIsMCwwLjAwMiwwLDAuMDAyLTAuMDAxDQoJYzExLjE5OC03LjI3NiwyMS4wOC0yLjc1NSwyNC40MjEtMC43ODJjNDMuMDU2LDI3Ljk3NCwzNC4yNiwyOC4xMDQsNzcuNTE2LDBjMy4zNDEtMS45NzMsMTMuMjIzLTYuNDk0LDI0LjQyMSwwLjc4Mg0KCWMwLDAuMDAxLDAuMDAyLDAuMDAxLDAuMDAyLDAuMDAxbDI0LjQ5OSwxNS45MTljMy45MDQsMi4yOTMsMTQuOTcsNy4yMzMsMjcuNjA4LTAuOTc3bDM1LjgxMS0yMy4yNjd2LTE0Ljc1Mg0KCUM0MDcuMTA1LDE3My40MzksMzk4LjQ4NywxNjQuODI1LDM4Ny44NTksMTY0LjgyNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQ0NBOEQ7IiBkPSJNMzg3Ljg1OSwxNjQuODI1SDI2My4yOThjLTEuMTUsMjAuMDYyLTAuMDc1LDM5Ljg0OSwzLjMxMiw1OS43MDENCgljMS4yNDEtMC42MjgtMS4wNzQsMC44MzEsMjguMTU0LTE4LjE2YzMuMzQxLTEuOTczLDEzLjIyMy02LjQ5NCwyNC40MjEsMC43ODJjMCwwLjAwMSwwLjAwMiwwLjAwMSwwLjAwMiwwLjAwMWwyNC40OTksMTUuOTE5DQoJYzMuOTA0LDIuMjkzLDE0Ljk3LDcuMjMzLDI3LjYwOC0wLjk3N2wzNS44MTEtMjMuMjY3YzAtMTYuMjA2LDAuMDMzLTE1LjM4Ny0wLjEtMTYuNzINCglDNDA2LjAxOCwxNzIuMzg5LDM5Ny44MTksMTY0LjgyNSwzODcuODU5LDE2NC44MjV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjdBQzUyOyIgZD0iTTEzNi4wNDQsMTg0LjA3MWMwLTEwLjYzLDguNjE2LTE5LjI0NiwxOS4yNDYtMTkuMjQ2Yy0zMS40MDUsMC0zMy4yNy0wLjYxMi0zOC4yODMsMS4zODUNCgljLTcuNTY4LDMuMDUzLTEyLjEsMTAuMjY4LTEyLjEsMTcuODZ2MTQuNzUybDMxLjEzNywyMC4yM1YxODQuMDcxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzdDNTQzNzsiIGQ9Ik00NTQuMTg5LDM2OC45NjR2LTQ1LjQ1MWMwLTEzLjk0My0xMS4zMDEtMjUuMjQ0LTI1LjI0My0yNS4yNDRIODMuMDY3DQoJYy0xMy45NDIsMC0yNS4yNDEsMTEuMzAxLTI1LjI0MSwyNS4yNDR2MTE2LjIwNGgzOTYuMzYzdi00NC4wNjUiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM4RTVFM0Q7IiBkPSJNNDI4Ljk0NSwyOTguMjY5SDI5MC45MTJjMzIuODM0LDY0Ljk5LDkxLjg5MywxMTQuNDY2LDE2My4yNzcsMTM0LjUxMWMwLTQuNjk2LDAtMTA1LjM3MiwwLTEwOS4yNjYNCglDNDU0LjE4OSwzMDkuNTcsNDQyLjg4NywyOTguMjY5LDQyOC45NDUsMjk4LjI2OXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCQUQ4RTg7IiBkPSJNNDk1LjA5NCw0MzkuNzE3SDE2LjkxOWMtOS4yMTMsMC0xNi42OCw3LjQ2OC0xNi42OCwxNi42ODFjMCw5LjIxMiw3LjQ2NywxNi42ODEsMTYuNjgsMTYuNjgxDQoJYzIwLjg2NiwwLDQ2MS4yMzEsMCw0NzguMTc2LDBjOS4yMTMsMCwxNi42ODItNy40NjgsMTYuNjgyLTE2LjY4MUM1MTEuNzc2LDQ0Ny4xODYsNTA0LjMwNyw0MzkuNzE3LDQ5NS4wOTQsNDM5LjcxN3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM5MUM1REI7IiBkPSJNNDk1LjA5NCw0NTYuMzk4Yy05LjQzMiwwLTQ2NS4zNDcsMC00NzguMTc2LDBjLTYuMTY5LDAtMTEuNTQ2LTMuMzU5LTE0LjQyOS04LjM0DQoJYy02LjQzOCwxMS4xMDksMS42MTMsMjUuMDIsMTQuNDI5LDI1LjAyYzIwLjg2NiwwLDQ2MS4yMzEsMCw0NzguMTc2LDBjOS4yMTMsMCwxNi42ODItNy40NjgsMTYuNjgyLTE2LjY4MQ0KCWMwLTMuMDQyLTAuODI4LTUuODg1LTIuMjUxLTguMzRDNTA2LjY0LDQ1My4wMzksNTAxLjI2Niw0NTYuMzk4LDQ5NS4wOTQsNDU2LjM5OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2MDNEMjY7IiBkPSJNMTE0LjIwNSwyOTguMjY5SDgzLjA2N2MtMTMuOTQyLDAtMjUuMjQxLDExLjMwMS0yNS4yNDEsMjUuMjQ0djExNi4yMDRoMzEuMTM3VjMyMy41MTMNCglDODguOTYzLDMwOS41NywxMDAuMjYzLDI5OC4yNjksMTE0LjIwNSwyOTguMjY5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzM3MzsiIGQ9Ik01Ny44MjYsMzIzLjUxM3YxNS40MzFsMzIuMzc4LDIxLjAzOGMxMi42MzgsOC4yMTIsMjMuNzAzLDMuMjcsMjcuNjA4LDAuOTc4bDI0LjQ5OS0xNS45MTkNCgljMC4wMDIsMCwwLjAwMiwwLDAuMDAyLTAuMDAxYzExLjE5OC03LjI3NiwyMS4wODItMi43NTQsMjQuNDIxLTAuNzgyYzQyLjg1LDI3LjgzNywzNC45NCwyNy44NTUsNzYuNjA1LDAuNzgzDQoJYzAsMCw1LjQ1My0zLjk4OCwxMi43MjYtMy45ODhjMy43NTYsMC4wMzEsOC4wNzIsMS4wNDIsMTIuNjA3LDMuOTg3YzAsMC4wMDEsMC4wMDIsMC4wMDEsMC4wMDIsMC4wMDENCgljMjQuNDI3LDE1Ljg3MiwyOC40OTYsMTkuNjcyLDM2Ljg2NiwxOS45MzVjNC41OTUsMC4yMTcsOS4xNzUtMS4wODksMTIuNzkxLTMuMjA4YzE1LjExNi05LjgyMyw4LjUxMy01LjUzMiwyNi45NDctMTcuNTA5DQoJYzMuMzM5LTEuOTcyLDEzLjIyMy02LjQ5NCwyNC40MjEsMC43ODJjMCwwLjAwMSwwLDAuMDAxLDAuMDAyLDAuMDAxbDI0LjQ5OSwxNS45MTljMy45MDQsMi4yOTIsMTQuOTY5LDcuMjM0LDI3LjYxLTAuOTc4DQoJbDMyLjM3OC0yMS4wMzh2LTE1LjQzMWMwLTEzLjk0My0xMS4zMDEtMjUuMjQ0LTI1LjI0My0yNS4yNDRjLTExLjMwMSwwLTM0Mi4wNjIsMC0zNDUuODc4LDANCglDNjkuMTI1LDI5OC4yNjksNTcuODI2LDMwOS41Nyw1Ny44MjYsMzIzLjUxM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQ0NBOEQ7IiBkPSJNNDI4Ljk0NSwyOTguMjY5Yy0xLjE1OSwwLTEzNS4yODksMC0xMzguMDMzLDBjMTAuMzQyLDIwLjQ3NCwyMy4yOSwzOS40LDM4LjQwNiw1Ni4zNTkNCgljMS43MzMtMS4xMjctMC44MzMsMC41NCwxNS45Ni0xMC4zNzFjMy4zMzktMS45NzIsMTMuMjIzLTYuNDk0LDI0LjQyMSwwLjc4MmMwLDAuMDAxLDAsMC4wMDEsMC4wMDIsMC4wMDFsMjQuNDk5LDE1LjkxOQ0KCWMzLjkwNCwyLjI5MiwxNC45NjksNy4yMzQsMjcuNjEtMC45NzhsMzIuMzc4LTIxLjAzOHYtMTUuNDMxQzQ1NC4xODksMzA5LjU3LDQ0Mi44ODcsMjk4LjI2OSw0MjguOTQ1LDI5OC4yNjl6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjdBQzUyOyIgZD0iTTg4Ljk2MywzMjMuNTEzYzAtMTMuOTQzLDExLjI5OS0yNS4yNDQsMjUuMjQyLTI1LjI0NEg4My4wNjdjLTEzLjk0MiwwLTI1LjI0MSwxMS4zMDEtMjUuMjQxLDI1LjI0NA0KCXYxNS40MzFsMzEuMTM3LDIwLjIzMUM4OC45NjMsMzU5LjE3NSw4OC45NjMsMzIzLjUxMyw4OC45NjMsMzIzLjUxM3oiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzAwQ0RCMzsiIGN4PSIxNzMuOTgxIiBjeT0iMjY2LjEzOSIgcj0iMTAuODMiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzU3QkFFNTsiIGN4PSIyODIuOTY0IiBjeT0iMjQ4LjM1MSIgcj0iMTAuODMiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzAwQ0RCMzsiIGN4PSIzNTYuMjgxIiBjeT0iMjU5LjQxNCIgcj0iMTAuODMiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjRCNEU7IiBkPSJNMjk4LjU1MSwyODAuNzEzYy0xLjk1OS00LjE3LTAuMTY0LTkuMTM4LDQuMDA1LTExLjA5NWwxNS4wNDYtNy4wNjYNCgljNC4xNzEtMS45NTcsOS4xMzktMC4xNjYsMTEuMDk2LDQuMDA2YzEuOTU3LDQuMTY4LDAuMTYyLDkuMTM1LTQuMDA1LDExLjA5NGwtMTUuMDQ4LDcuMDY2DQoJQzMwNS40NTUsMjg2LjY4LDMwMC41MDIsMjg0Ljg2OSwyOTguNTUxLDI4MC43MTN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZDQTU0OyIgZD0iTTIyMC41ODQsMjY5Ljk4MmwtMTQuMTg0LTguNjY1Yy0zLjkzLTIuNC01LjE3MS03LjUzMy0yLjc3LTExLjQ2NQ0KCWMyLjQwMS0zLjkzLDcuNTM0LTUuMTcyLDExLjQ2NC0yLjc3bDE0LjE4Niw4LjY2NWMzLjkzMiwyLjQsNS4xNzEsNy41MzQsMi43NywxMS40NjQNCglDMjI5LjY1MSwyNzEuMTM5LDIyNC41MjQsMjcyLjM4NCwyMjAuNTg0LDI2OS45ODJ6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1N0JBRTU7IiBjeD0iMzIyLjEzOCIgY3k9IjQwNy4yNiIgcj0iMTAuODMiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzAwQ0RCMzsiIGN4PSIyMTMuMTU1IiBjeT0iMzg5LjQ3MiIgcj0iMTAuODMiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGNEI0RTsiIGN4PSIxMzkuODM4IiBjeT0iNDAwLjUyNiIgcj0iMTAuODMiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNBNTQ7IiBkPSJNMTg2LjQ3NCw0MjUuODM3bC0xNS4wNDYtNy4wNjVjLTQuMTY5LTEuOTU4LTUuOTYyLTYuOTI1LTQuMDA1LTExLjA5NQ0KCWMxLjk1Ny00LjE2OSw2LjkyNS01Ljk2LDExLjA5NC00LjAwNWwxNS4wNDgsNy4wNjZjNC4xNjksMS45NTcsNS45NjIsNi45MjQsNC4wMDUsMTEuMDk0DQoJQzE5NS42MSw0MjYuMDAyLDE5MC42NDYsNDI3Ljc5NCwxODYuNDc0LDQyNS44Mzd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTdCQUU1OyIgZD0iTTM3OS4wNTMsNDE4Ljc3MmwtMTUuMDQ4LTcuMDY0Yy00LjE2OS0xLjk1OS01Ljk2Mi02LjkyNS00LjAwNS0xMS4wOTUNCgljMS45NTctNC4xNjksNi45MjUtNS45NiwxMS4wOTQtNC4wMDZsMTUuMDQ4LDcuMDY1YzQuMTY3LDEuOTU4LDUuOTYyLDYuOTI0LDQuMDA1LDExLjA5NQ0KCUMzODguMTk4LDQxOC45MTksMzgzLjI0Niw0MjAuNzM2LDM3OS4wNTMsNDE4Ljc3MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNBNTQ7IiBkPSJNMjY0LjA3LDQwOC4zM2MtMi40LTMuOTMtMS4xNi05LjA2MywyLjc3LTExLjQ2NGwxNC4xODYtOC42NjZjMy45My0yLjQsOS4wNjQtMS4xNiwxMS40NjYsMi43Nw0KCWMyLjQsMy45MywxLjE1OCw5LjA2My0yLjc3MiwxMS40NjZsLTE0LjE4Niw4LjY2NUMyNzEuNjAzLDQxMy41MDMsMjY2LjQ3LDQxMi4yNjIsMjY0LjA3LDQwOC4zM3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                monthly_date: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0ODUgNDg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODUgNDg1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPgo8Zz4KCTxnIGlkPSJYTUxJRF8xNV8iPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojQUZCNkJCOyIgZD0iTTQ3Ny41LDE0Ny41djMzMEg3LjV2LTMzMEg0NzcuNXogTTQ0Mi41LDM2Mi41di0xODBoLTQwMHYyNjBoMzIwTDQ0Mi41LDM2Mi41eiIvPgoJCQk8cG9seWdvbiBzdHlsZT0iZmlsbDojOTE5NzlDOyIgcG9pbnRzPSI0NDIuNSwzNjIuNSAzNjIuNSw0NDIuNSAzNjIuNSwzNjIuNSAgICAiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0FGQjZCQjsiIGQ9Ik0zOTIuNSwyNy41djQwaC00MHYtNDB2LTEwYzAtNS41LDQuNS0xMCwxMC0xMGgyMGM1LjUsMCwxMCw0LjUsMTAsMTBWMjcuNXoiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0FGQjZCQjsiIGQ9Ik0yNjIuNSwyNy41djQwaC00MHYtNDB2LTEwYzAtNS41LDQuNS0xMCwxMC0xMGgyMGM1LjUsMCwxMCw0LjUsMTAsMTBWMjcuNXoiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0FGQjZCQjsiIGQ9Ik0xMzIuNSwyNy41djQwaC00MHYtNDB2LTEwYzAtNS41LDQuNS0xMCwxMC0xMGgyMGM1LjUsMCwxMCw0LjUsMTAsMTBWMjcuNXoiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0U3RUNFRDsiIGQ9Ik00NDIuNSwxODIuNXYxODBoLTgwdjgwaC0zMjB2LTI2MEg0NDIuNXogTTMyNy41LDMwNy41YzAtNDYuOS0zOC4xLTg1LTg1LTg1cy04NSwzOC4xLTg1LDg1ICAgICBzMzguMSw4NSw4NSw4NVMzMjcuNSwzNTQuNCwzMjcuNSwzMDcuNXoiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzQzQjA1QzsiIGQ9Ik0yNDIuNSwyMjIuNWM0Ni45LDAsODUsMzguMSw4NSw4NXMtMzguMSw4NS04NSw4NXMtODUtMzguMS04NS04NVMxOTUuNiwyMjIuNSwyNDIuNSwyMjIuNXoiLz4KCQkJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0Y0NjYxRTsiIHBvaW50cz0iNy41LDI3LjUgOTIuNSwyNy41IDkyLjUsNjcuNSAxMzIuNSw2Ny41IDEzMi41LDI3LjUgMjIyLjUsMjcuNSAyMjIuNSw2Ny41IDI2Mi41LDY3LjUgICAgICAyNjIuNSwyNy41IDM1Mi41LDI3LjUgMzUyLjUsNjcuNSAzOTIuNSw2Ny41IDM5Mi41LDI3LjUgNDc3LjUsMjcuNSA0NzcuNSwxNDcuNSA3LjUsMTQ3LjUgICAgIi8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBkPSJNNDAwLDIwdi0yLjVDNDAwLDcuODUxLDM5Mi4xNDksMCwzODIuNSwwaC0yMEMzNTIuODUxLDAsMzQ1LDcuODUxLDM0NSwxNy41VjIwaC03NXYtMi41QzI3MCw3Ljg1MSwyNjIuMTQ5LDAsMjUyLjUsMCAgICAgaC0yMEMyMjIuODUxLDAsMjE1LDcuODUxLDIxNSwxNy41VjIwaC03NXYtMi41QzE0MCw3Ljg1MSwxMzIuMTQ5LDAsMTIyLjUsMGgtMjBDOTIuODUxLDAsODUsNy44NTEsODUsMTcuNVYyMEgwdjQ2NWg0ODVWMjBINDAweiAgICAgIE0zNjAsMTcuNWMwLTEuMzU1LDEuMTQ1LTIuNSwyLjUtMi41aDIwYzEuMzU1LDAsMi41LDEuMTQ1LDIuNSwyLjVWNjBoLTI1VjE3LjV6IE0yMzAsMTcuNWMwLTEuMzU1LDEuMTQ1LTIuNSwyLjUtMi41aDIwICAgICBjMS4zNTUsMCwyLjUsMS4xNDUsMi41LDIuNVY2MGgtMjVWMTcuNXogTTEwMCwxNy41YzAtMS4zNTUsMS4xNDUtMi41LDIuNS0yLjVoMjBjMS4zNTUsMCwyLjUsMS4xNDUsMi41LDIuNVY2MGgtMjVWMTcuNXogICAgICBNNDcwLDQ3MEgxNVYxNTVoNDU1VjQ3MHogTTE1LDE0MHYtMjVoNDAyLjV2LTE1SDE1VjM1aDcwdjQwaDU1VjM1aDc1djQwaDU1VjM1aDc1djQwaDU1VjM1aDcwdjEwNUgxNXoiLz4KCQkJPHBhdGggZD0iTTQ1MCwzNjUuNjA2VjE3NUgzNXYyNzVoMzMwLjYwNkw0NTAsMzY1LjYwNnogTTM3MCw0MjQuMzk0VjM3MGg1NC4zOTRMMzcwLDQyNC4zOTR6IE01MCwxOTBoMzg1djE2NWgtODB2ODBINTBWMTkweiIvPgoJCQk8cmVjdCB4PSI2Ny41IiB5PSIyMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSIvPgoJCQk8cmVjdCB4PSI2Ny41IiB5PSI0MDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSIvPgoJCQk8cmVjdCB4PSIzOTcuNSIgeT0iMjEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTUiLz4KCQkJPHBhdGggZD0iTTI0Mi41LDIxNWMtNTEuMDA1LDAtOTIuNSw0MS40OTUtOTIuNSw5Mi41czQxLjQ5NSw5Mi41LDkyLjUsOTIuNXM5Mi41LTQxLjQ5NSw5Mi41LTkyLjVTMjkzLjUwNSwyMTUsMjQyLjUsMjE1eiAgICAgIE0yNDIuNSwzODVjLTQyLjczMywwLTc3LjUtMzQuNzY3LTc3LjUtNzcuNXMzNC43NjctNzcuNSw3Ny41LTc3LjVzNzcuNSwzNC43NjcsNzcuNSw3Ny41UzI4NS4yMzMsMzg1LDI0Mi41LDM4NXoiLz4KCQkJPHBvbHlnb24gcG9pbnRzPSIyODcuMTk2LDI3Mi4xOTcgMjI3LjUsMzMxLjg5NCAyMDIuODA0LDMwNy4xOTcgMTkyLjE5NiwzMTcuODAzIDIyNy41LDM1My4xMDYgMjk3LjgwNCwyODIuODAzICAgICIvPgoJCTwvZz4KCTwvZz4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L3N2Zz4K",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                product_review: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTA0LjEyMyA1MDQuMTIzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQuMTIzIDUwNC4xMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0UwRTRFODsiIGN4PSIxNzYuNDQzIiBjeT0iMzI3LjI4NiIgcj0iMTc2LjQ0MyIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzRGQkY5RjsiIGQ9Ik00NjQuNzM4LDcuNDgzSDExOC45NDJjLTE3LjMyOSwwLTMxLjUwOCwxNC4xNzgtMzEuNTA4LDMxLjUwOFYyMjAuMTYNCgljMCwxNy4zMjksMTQuMTc4LDMxLjUwOCwzMS41MDgsMzEuNTA4aDIzMC43OTR2ODYuNjQ2bDkxLjM3Mi04Ni42NDZoMjMuNjMxYzE3LjMyOSwwLDMxLjUwOC0xNC4xNzgsMzEuNTA4LTMxLjUwOFYzOC45OTENCglDNDk2LjI0NiwyMS42NjIsNDgyLjA2OCw3LjQ4Myw0NjQuNzM4LDcuNDgzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE4MzY1MTsiIGQ9Ik0zNDYuNTg1LDM0Ni4xOTFjLTMuMTUxLTEuNTc1LTQuNzI2LTMuOTM4LTQuNzI2LTcuMDg5di03OC43NjlIMTE4Ljk0Mg0KCWMtMjIuMDU1LDAtMzkuMzg1LTE3LjMyOS0zOS4zODUtMzkuMzg1VjM5Ljc3OGMwLTIyLjA1NSwxNy4zMjktMzkuMzg1LDM5LjM4NS0zOS4zODVoMzQ1Ljc5N2MyMi4wNTUsMCwzOS4zODUsMTcuMzI5LDM5LjM4NSwzOS4zODUNCgl2MTgxLjE2OWMwLDIyLjA1NS0xNy4zMjksMzkuMzg1LTM5LjM4NSwzOS4zODVoLTIwLjQ4bC04OS4wMDksODQuMjgzQzM1Mi44ODYsMzQ2LjE5MSwzNDguOTQ4LDM0Ni45NzgsMzQ2LjU4NSwzNDYuMTkxeg0KCSBNMTE4Ljk0MiwxNS4zNmMtMTMuMzkxLDAtMjMuNjMxLDEwLjI0LTIzLjYzMSwyMy42MzFWMjIwLjE2YzAsMTMuMzkxLDEwLjI0LDIzLjYzMSwyMy42MzEsMjMuNjMxaDIzMC43OTQNCgljNC43MjYsMCw3Ljg3NywzLjE1MSw3Ljg3Nyw3Ljg3N3Y2OC41MjlsNzcuOTgyLTc0LjA0M2MxLjU3NS0xLjU3NSwzLjE1MS0yLjM2Myw1LjUxNC0yLjM2M2gyMy42MzENCgljMTMuMzkxLDAsMjMuNjMxLTEwLjI0LDIzLjYzMS0yMy42MzFWMzguOTkxYzAtMTMuMzkxLTEwLjI0LTIzLjYzMS0yMy42MzEtMjMuNjMxTDExOC45NDIsMTUuMzZMMTE4Ljk0MiwxNS4zNnoiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjM4MS4yNDMsMjIwLjE2IDExOC45NDIsMjIwLjE2IDExOC45NDIsMzguOTkxIDQ2NC43MzgsMzguOTkxIDQ2NC43MzgsMjIwLjE2IA0KCTQyOC41MDUsMjIwLjE2IDM4MS4yNDMsMjY1LjA1OCAiLz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGQkJENUU7IiBwb2ludHM9IjE3MC4xNDIsMTI4Ljc4OCAxNTMuNiwxMTIuMjQ2IDE3Ni40NDMsMTA5LjA5NSAxODcuNDcxLDg3LjgyOCAxOTcuNzExLDEwOS4wOTUgDQoJCTIyMS4zNDIsMTEyLjI0NiAyMDQuMDEyLDEyOC43ODggMjA3Ljk1MSwxNTEuNjMxIDE4Ny40NzEsMTQwLjYwMyAxNjYuMjAzLDE1MS42MzEgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGQkJENUU7IiBwb2ludHM9IjI3NC45MDUsMTI4Ljc4OCAyNTguMzYzLDExMi4yNDYgMjgxLjIwNiwxMDkuMDk1IDI5MS40NDYsODcuODI4IDMwMi40NzQsMTA5LjA5NSANCgkJMzI1LjMxNywxMTIuMjQ2IDMwOC43NzUsMTI4Ljc4OCAzMTIuNzE0LDE1MS42MzEgMjkxLjQ0NiwxNDAuNjAzIDI3MC45NjYsMTUxLjYzMSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZCQkQ1RTsiIHBvaW50cz0iMzc5LjY2OCwxMjguNzg4IDM2Mi4zMzgsMTEyLjI0NiAzODUuOTY5LDEwOS4wOTUgMzk2LjIwOSw4Ny44MjggNDA2LjQ0OSwxMDkuMDk1IA0KCQk0MzAuMDgsMTEyLjI0NiA0MTMuNTM4LDEyOC43ODggNDE3LjQ3NywxNTEuNjMxIDM5Ni4yMDksMTQwLjYwMyAzNzUuNzI5LDE1MS42MzEgCSIvPg0KPC9nPg0KPGc+DQoJPHJlY3QgeD0iMTc5LjU5NCIgeT0iNTMuMTY5IiBzdHlsZT0iZmlsbDojMTgzNjUxOyIgd2lkdGg9IjE1Ljc1NCIgaGVpZ2h0PSIxNS43NTQiLz4NCgk8cmVjdCB4PSIyODMuNTY5IiB5PSI1My4xNjkiIHN0eWxlPSJmaWxsOiMxODM2NTE7IiB3aWR0aD0iMTUuNzU0IiBoZWlnaHQ9IjE1Ljc1NCIvPg0KCTxyZWN0IHg9IjM4OC4zMzIiIHk9IjUzLjE2OSIgc3R5bGU9ImZpbGw6IzE4MzY1MTsiIHdpZHRoPSIxNS43NTQiIGhlaWdodD0iMTUuNzU0Ii8+DQoJPHJlY3QgeD0iMTc5LjU5NCIgeT0iMTcxLjMyMyIgc3R5bGU9ImZpbGw6IzE4MzY1MTsiIHdpZHRoPSIxNS43NTQiIGhlaWdodD0iMTUuNzU0Ii8+DQoJPHJlY3QgeD0iMjgzLjU2OSIgeT0iMTcxLjMyMyIgc3R5bGU9ImZpbGw6IzE4MzY1MTsiIHdpZHRoPSIxNS43NTQiIGhlaWdodD0iMTUuNzU0Ii8+DQoJPHJlY3QgeD0iMzg4LjMzMiIgeT0iMTcxLjMyMyIgc3R5bGU9ImZpbGw6IzE4MzY1MTsiIHdpZHRoPSIxNS43NTQiIGhlaWdodD0iMTUuNzU0Ii8+DQo8L2c+DQo8cmVjdCB4PSI0OC44MzciIHk9IjI0Ni45NDIiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iODQuMjgzIiBoZWlnaHQ9IjE4MS45NTciLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxODM2NTE7IiBkPSJNMTMzLjEyLDQzNi43NzVINDguODM3Yy00LjcyNiwwLTcuODc3LTMuMTUxLTcuODc3LTcuODc3VjI0Ni45NDJjMC00LjcyNiwzLjE1MS03Ljg3Nyw3Ljg3Ny03Ljg3Nw0KCWg4NC4yODNjNC43MjYsMCw3Ljg3NywzLjE1MSw3Ljg3Nyw3Ljg3N3YxODEuOTU3QzE0MC45OTcsNDMyLjgzNywxMzcuMDU4LDQzNi43NzUsMTMzLjEyLDQzNi43NzV6IE01Ni43MTQsNDIxLjAyMmg2OC41MjlWMjU0LjgxOA0KCUg1Ni43MTRWNDIxLjAyMnoiLz4NCjxyZWN0IHg9Ijc2LjQwNiIgeT0iMjc1LjI5OCIgc3R5bGU9ImZpbGw6IzJFQTBEQTsiIHdpZHRoPSIyOC4zNTciIGhlaWdodD0iMTI2LjAzMSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZCQkQ1RTsiIGQ9Ik0zMTIuNzE0LDI4MS42di0wLjc4OGMwLTExLjAyOC04LjY2NS0yMC40OC0yMC40OC0yMC40OGgtNDQuODk4bDAsMA0KCWMxMS44MTUtMjguMzU3LDEwLjI0LTQ4LjA0OSwxMC4yNC00OC4wNDljMC00Ny4yNjItMzEuNTA4LTI5LjE0NS0zMS41MDgtMjkuMTQ1Yy00LjcyNiwzMy4wODMtMTcuMzI5LDQ0Ljg5OC0xNy4zMjksNDQuODk4DQoJYy04LjY2NSw3Ljg3Ny0yMS4yNjgsMjEuMjY4LTMwLjcyLDMzLjA4M2gtMi4zNjNjLTE3LjMyOSwwLTI3LjU2OSw0LjcyNi00Mi41MzUsMTMuMzkxdjEzNy4wNTkNCgljMjIuMDU1LDguNjY1LDM5LjM4NSwxMy4zOTEsNjMuMDE1LDEzLjM5MWg5NC41MjNjMTAuMjQsMCwyMC40OC03Ljg3NywyMS4yNjgtMTguMTE3YzEuNTc1LTExLjgxNS03Ljg3Ny0yMi4wNTUtMTkuNjkyLTIyLjA1NQ0KCWMxMS4wMjgsMCwyMC40OC04LjY2NSwyMC40OC0yMC40OHYtMC43ODhjMC0xMS4wMjgtOC42NjUtMjAuNDgtMjAuNDgtMjAuNDhjMTEuMDI4LDAsMjAuNDgtOC42NjUsMjAuNDgtMjAuNDh2LTAuNzg4DQoJYzAtMTEuMDI4LTguNjY1LTIwLjQ4LTIwLjQ4LTIwLjQ4aDAuNzg4QzMwMy4yNjIsMzAyLjA4LDMxMi43MTQsMjkyLjYyOCwzMTIuNzE0LDI4MS42eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE4MzY1MTsiIGQ9Ik0yOTAuNjU4LDQzMi44MzdoLTk0LjUyM2MtMjUuOTk0LDAtNDMuMzIzLTQuNzI2LTY2LjE2Ni0xNC4xNzgNCgljLTMuMTUxLTEuNTc1LTQuNzI2LTMuOTM4LTQuNzI2LTcuMDg5VjI3NC41MTFjMC0zLjE1MSwxLjU3NS01LjUxNCwzLjkzOC03LjA4OWMxNC4xNzgtOC42NjUsMjUuOTk0LTE0LjE3OCw0NC44OTgtMTQuOTY2DQoJYzExLjgxNS0xNC4xNzgsMjIuMDU1LTI0LjQxOCwyOS4xNDUtMzAuNzJjMCwwLDExLjAyOC0xMC4yNCwxNC45NjYtNDAuMTcyYzAtMi4zNjMsMS41NzUtNC43MjYsMy45MzgtNS41MTQNCgljMC43ODgtMC43ODgsNy44NzctNC43MjYsMTYuNTQyLTQuNzI2YzE0LjE3OCwwLDI2Ljc4MiwxMC4yNCwyNi43ODIsNDAuOTZjMCwwLDAuNzg4LDE2LjU0Mi02LjMwMiw0MC4xNzJoMzMuMDgzDQoJYzE1Ljc1NCwwLDI4LjM1NywxMi42MDMsMjguMzU3LDI4LjM1N3YwLjc4OGMwLDcuODc3LTMuMTUxLDE0Ljk2Ni04LjY2NSwyMC40OGM0LjcyNiw0LjcyNiw4LjY2NSwxMS44MTUsOC42NjUsMTkuNjkydjAuNzg4DQoJYzAsNy44NzctMy4xNTEsMTQuOTY2LTguNjY1LDIwLjQ4YzUuNTE0LDQuNzI2LDguNjY1LDEyLjYwMyw4LjY2NSwyMC40OHYwLjc4OGMwLDcuODc3LTMuMTUxLDE0Ljk2Ni04LjY2NSwyMC40OA0KCWMwLjc4OCwwLjc4OCwwLjc4OCwwLjc4OCwxLjU3NSwxLjU3NWM1LjUxNCw1LjUxNCw3Ljg3NywxMy4zOTEsNy4wODksMjEuMjY4QzMxOC4yMjgsNDIxLjgwOSwzMDUuNjI1LDQzMi44MzcsMjkwLjY1OCw0MzIuODM3eg0KCSBNMTQwLjk5Nyw0MDYuMDU1YzE4LjkwNSw3LjA4OSwzMy44NzEsMTEuMDI4LDU1LjEzOCwxMS4wMjhoOTQuNTIzYzcuMDg5LDAsMTIuNjAzLTQuNzI2LDEzLjM5MS0xMS4wMjgNCgljMC0zLjE1MS0wLjc4OC03LjA4OS0zLjE1MS05LjQ1MmMtMi4zNjMtMi4zNjMtNS41MTQtMy45MzgtOS40NTItMy45MzhjLTQuNzI2LDAtNy44NzctMy4xNTEtNy44NzctNy44NzdzMy4xNTEtNy44NzcsNy44NzctNy44NzcNCgljNy4wODksMCwxMi42MDMtNS41MTQsMTIuNjAzLTEyLjYwM3YtMC43ODhjMC03LjA4OS01LjUxNC0xMi42MDMtMTIuNjAzLTEyLjYwM2MtNC43MjYsMC03Ljg3Ny0zLjE1MS03Ljg3Ny03Ljg3Nw0KCWMwLTQuNzI2LDMuMTUxLTcuODc3LDcuODc3LTcuODc3YzcuMDg5LDAsMTIuNjAzLTUuNTE0LDEyLjYwMy0xMi42MDN2LTAuNzg4YzAtNy4wODktNS41MTQtMTIuNjAzLTEyLjYwMy0xMi42MDMNCgljLTQuNzI2LDAtNy44NzctMy4xNTEtNy44NzctNy44NzdjMC00LjcyNiwzLjE1MS03Ljg3Nyw3Ljg3Ny03Ljg3N2M3LjA4OSwwLDEyLjYwMy01LjUxNCwxMi42MDMtMTIuNjAzdi0wLjc4OA0KCWMwLTcuMDg5LTUuNTE0LTEyLjYwMy0xMi42MDMtMTIuNjAzaC00My4zMjNjLTIuMzYzLDAtNC43MjYtMC43ODgtNi4zMDItMy4xNTFjLTEuNTc1LTAuNzg4LTIuMzYzLTMuMTUxLTEuNTc1LTUuNTE0DQoJYzAsMCwwLTAuNzg4LDAtMS41NzVjMTAuMjQtMjUuOTk0LDkuNDUyLTQ0Ljg5OCw5LjQ1Mi00NC44OThjMC0xMC4yNC0wLjc4OC0yNS4yMDYtMTEuMDI4LTI1LjIwNmMtMS41NzUsMC0zLjkzOCwwLjc4OC01LjUxNCwwLjc4OA0KCWMtNS41MTQsMzIuMjk1LTE4LjExNyw0NC4xMTEtMTkuNjkyLDQ1LjY4NmMtNy4wODksNi4zMDItMTcuMzI5LDE3LjMyOS0yOS45MzIsMzIuMjk1Yy0xLjU3NSwxLjU3NS0zLjkzOCwzLjE1MS02LjMwMiwzLjE1MWgtMi4zNjMNCgljLTEzLjM5MSwwLTIyLjA1NSwzLjE1MS0zNC42NTgsMTAuMjR2MTI2LjgxOEgxNDAuOTk3eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
                    linkTo: "/collections/all",
                    isDisplayEarnedCredits: true,
                },
                product_tag: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTExLjk5OTcyIDUxMSIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtNDQyLjIzMDQ2OSA3MC4yMTg3NS0xMTAuMjA3MDMxLTE3LjI3NzM0NC0zMC4wMDM5MDctNC43MDMxMjUtMjkuNzY1NjI1LTQuNjY0MDYyLTI1Ny4zNjMyODEgMjU3LjM2MzI4MWMtOS43MzA0NjkgOS43MjY1NjItOS43MzA0NjkgMjUuNSAwIDM1LjIzMDQ2OWwxNjEuMzkwNjI1IDE2MS4zOTA2MjVjOS43MjY1NjIgOS43MzA0NjggMjUuNSA5LjcyNjU2MiAzNS4yMzA0NjkgMGwyNTcuMzYzMjgxLTI1Ny4zNjMyODJ6bS0zMy4zMzk4NDQgNzEuNjY0MDYyYy0xMC41ODIwMzEgMTAuNTg1OTM4LTI3Ljc0MjE4NyAxMC41ODU5MzgtMzguMzI4MTI1IDAtMTAuNTgyMDMxLTEwLjU4MjAzMS0xMC41ODIwMzEtMjcuNzQyMTg3IDAtMzguMzI0MjE4IDEwLjU4NTkzOC0xMC41ODU5MzggMjcuNzQ2MDk0LTEwLjU4NTkzOCAzOC4zMjgxMjUgMCAxMC41ODIwMzEgMTAuNTgyMDMxIDEwLjU4MjAzMSAyNy43NDIxODcgMCAzOC4zMjQyMTh6bTAgMCIgZmlsbD0iIzY4YTFkNyIvPjxwYXRoIGQ9Im00NDIuMjMwNDY5IDcwLjIxODc1LTI5Ljc4NTE1Ny00LjY2Nzk2OSAxNy4xNjAxNTcgMTA5LjQ3MjY1N2MzLjAyNzM0MyAxOS4zMDA3ODEtMy4zNTU0NjkgMzguODg2NzE4LTE3LjE3MTg3NSA1Mi42OTkyMThsLTIzNS4zNzUgMjM1LjM3ODkwNmMtOS43MzA0NjkgOS43MzA0NjktMjUuNTAzOTA2IDkuNzMwNDY5LTM1LjIzNDM3NSAwbDM0LjQ1MzEyNSAzNC40NTcwMzJjOS43MzA0NjggOS43MjY1NjIgMjUuNTAzOTA2IDkuNzI2NTYyIDM1LjIzNDM3NSAwbDI1Ny4zNjMyODEtMjU3LjM2MzI4MnptMCAwIiBmaWxsPSIjNWI4ZGJkIi8+PHBhdGggZD0ibTE3MS43MzQzNzUgNDA3LjM5MDYyNS0yMS4yMTg3NS0yMS4yMTQ4NDQtMTEwLjQyOTY4Ny0xMTAuNDMzNTkzLTI1LjE5NTMxMyAyNS4xOTUzMTJjLTkuNzMwNDY5IDkuNzI2NTYyLTkuNzMwNDY5IDI1LjUwMzkwNiAwIDM1LjIzNDM3NWwxNjEuMzkwNjI1IDE2MS4zODY3MTljOS43MjY1NjIgOS43MzA0NjggMjUuNSA5LjczMDQ2OCAzNS4yMzA0NjkgMGwyNS4xOTUzMTItMjUuMTkxNDA2em0wIDAiIGZpbGw9IiM0ZDU4OTQiLz48cGF0aCBkPSJtMjAyLjI1IDQzNy45MTAxNTYtMjUuMTk1MzEyIDI1LjE5MTQwNmMtOS43MjY1NjMgOS43MzA0NjktMjUuNSA5LjczMDQ2OS0zNS4yMzA0NjkgMGwzNC40NTMxMjUgMzQuNDU3MDMyYzkuNzMwNDY4IDkuNzI2NTYyIDI1LjUwMzkwNiA5LjcyNjU2MiAzNS4yMzQzNzUgMGwyNS4xOTE0MDYtMjUuMTk1MzEzem0wIDAiIGZpbGw9IiMzZTQ3NzgiLz48cGF0aCBkPSJtNDE4LjQ0NTMxMiAxLjk4ODI4MWMtMzkuNDcyNjU2LTcuNTgyMDMxLTY1LjUyMzQzNyAxNC43MzgyODEtNjguMzAwNzgxIDQ2LjE5OTIxOWwtMTcuMDIzNDM3LTIuNjY3OTY5Yy00LjEwNTQ2OS0uNjQ0NTMxLTcuOTU3MDMyIDIuMTY0MDYzLTguNjAxNTYzIDYuMjY5NTMxLS42NDQ1MzEgNC4xMDkzNzYgMi4xNjQwNjMgNy45NjA5MzggNi4yNjk1MzEgOC42MDE1NjNsMTkuNjkxNDA3IDMuMDg5ODQ0YzEuNjMyODEyIDEzLjE3MTg3NSA2LjI4NTE1NiAyNS42Mjg5MDYgMTIuNzAzMTI1IDM2Ljk0OTIxOS0xOC45NzI2NTYgMjIuNDk2MDkzLTIuODUxNTYzIDU2LjkxNzk2OCAyNi40ODA0NjggNTYuOTE3OTY4IDMwLjc2OTUzMiAwIDQ2LjE4MzU5NC0zNy40MDIzNDQgMjQuNDg0Mzc2LTU5LjEwMTU2Mi0xMC40ODgyODItMTAuNDg4MjgyLTI2LjA4OTg0NC0xMi44MjQyMTktMzguODU1NDY5LTcuMDE1NjI1LTQuMzM5ODQ0LTguMDE5NTMxLTcuNTcwMzEzLTE2LjUxOTUzMS05LjIxODc1LTI1LjMwODU5NGw2OS41MDM5MDYgMTAuODk4NDM3YzIuNjkxNDA2IDE3LjE3NTc4MiAyMi4yODkwNjMgMTQyLjE5OTIxOSAyNS4yMDMxMjUgMTYwLjc2OTUzMmwtMjI0LjE0MDYyNSAyMjQuMTQ0NTMxLTU5LjY1MjM0NC01OS42NTIzNDRjLTIuOTM3NS0yLjkzNzUtNy43MDcwMzEtMi45Mzc1LTEwLjY0NDUzMSAwLTIuOTM3NSAyLjk0MTQwNy0yLjkzNzUgNy43MDcwMzEgMCAxMC42NDQ1MzFsNTkuNjQ4NDM4IDU5LjY1MjM0NC0xOS44NjcxODggMTkuODY3MTg4Yy0yLjg3NSAyLjg3NS02LjU3NDIxOSA0LjYxNzE4Ny0xMC41NjY0MDYgNS4wMTE3MTgtLjU3MDMxMy4wNTQ2ODgtMS4xNDg0MzguMDgyMDMyLTEuNzI2NTYzLjA4MjAzMi00LjY0NDUzMSAwLTkuMDExNzE5LTEuODA4NTk0LTEyLjI5Njg3NS01LjA5Mzc1bC0xNjEuMzg2NzE4LTE2MS4zODY3MTljLTMuMjg1MTU3LTMuMjg1MTU2LTUuMDkzNzUtNy42NDg0MzctNS4wOTM3NS0xMi4yOTI5NjkgMC0uNTgyMDMxLjAyNzM0My0xLjE1NjI1LjA4NTkzNy0xLjcyNjU2Mi4zOTA2MjUtMy45OTIxODggMi4xMzI4MTMtNy42OTUzMTMgNS4wMDc4MTMtMTAuNTY2NDA2bDE5Ljg3MTA5My0xOS44NzEwOTQgMTA1LjEwOTM3NSAxMDUuMTA5Mzc1YzIuOTQxNDA2IDIuOTQxNDA2IDcuNzA3MDMyIDIuOTQxNDA2IDEwLjY0NDUzMiAwIDIuOTQxNDA2LTIuOTM3NSAyLjk0MTQwNi03LjcwMzEyNSAwLTEwLjY0NDUzMWwtMTA1LjEwOTM3Ni0xMDUuMTA5Mzc2IDIyNC4xNDA2MjYtMjI0LjE0MDYyNCAyNS45ODA0NjggNC4wNzQyMThjNC4xMDkzNzUuNjQwNjI1IDcuOTYwOTM4LTIuMTY0MDYyIDguNjA1NDY5LTYuMjczNDM3LjY0MDYyNS00LjEwNTQ2OS0yLjE2NDA2My03Ljk1NzAzMS02LjI3MzQzNy04LjYwMTU2M2wtMjkuNzY1NjI2LTQuNjY0MDYyYy0yLjM3NS0uMzc1LTQuNzg5MDYyLjQxMDE1Ni02LjQ4ODI4MSAyLjExMzI4MWwtMjU3LjM2MzI4MSAyNTcuMzU5Mzc1Yy02LjEyNSA2LjEyODkwNi05LjUgMTQuMjc3MzQ0LTkuNSAyMi45NDE0MDYgMCA4LjY2NDA2MyAzLjM3NSAxNi44MTI1IDkuNSAyMi45Mzc1bDE2MS4zOTA2MjUgMTYxLjM5MDYyNWM2LjEyNSA2LjEyNSAxNC4yNzM0MzcgOS41IDIyLjkzNzUgOS41czE2LjgxMjUtMy4zNzUgMjIuOTQxNDA2LTkuNWwyNTcuMzYzMjgxLTI1Ny4zNjMyODFjMS42OTkyMTktMS42OTkyMTkgMi40ODQzNzYtNC4xMTMyODEgMi4xMTMyODItNi40ODgyODFsLTEyLjAzOTA2My03Ni43OTI5NjljMTMuMDg5ODQ0LTEuMTUyMzQ0IDI0LjMwODU5NC02LjExNzE4OCAzMi43OTY4NzUtMTQuNjA1NDY5IDQxLjU1NDY4OC00MS41NTA3ODEtOS4yOTI5NjgtMTMyLjM1OTM3NS03OC41NTg1OTQtMTQ1LjY1NjI1em0tNDYuMzA0Njg3IDExMi4wNTQ2ODhjNy40NTMxMjUgOS44NzUgMTYuMzU1NDY5IDE4Ljc3NzM0MyAyNi4yMTA5MzcgMjYuMjEwOTM3LTE2Ljc2OTUzMSA4LjMwMDc4Mi0zNC41MTE3MTgtOS40Mzc1LTI2LjIxMDkzNy0yNi4yMTA5Mzd6bTM2LjA5NzY1NiAxNC43OTY4NzVjLTkuMzU5Mzc1LTYuOTI5Njg4LTE3LjcxNDg0My0xNS4yODEyNS0yNC42ODc1LTI0LjY3OTY4OCAxNS4yNzczNDQtNC45OTYwOTQgMjkuNjc1NzgxIDkuNDE0MDYzIDI0LjY4NzUgMjQuNjc5Njg4em03OC4xMjEwOTQgOC4xNjAxNTZjLTYuMTIxMDk0IDYuMTIxMDk0LTE0LjUxMTcxOSA5LjYzMjgxMi0yNC40OTIxODcgMTAuMzIwMzEybC0xMi4yNjU2MjYtNzguMjUzOTA2Yy0uNTA3ODEyLTMuMjMwNDY4LTMuMDM5MDYyLTUuNzY1NjI1LTYuMjY5NTMxLTYuMjY5NTMxbC03OC4yNjE3MTktMTIuMjY5NTMxYzEuODU5Mzc2LTI2LjgwODU5NCAyMy40MjE4NzYtMzguOTYwOTM4IDUwLjUzNTE1Ny0zMy43NTM5MDYgNTguOTcyNjU2IDExLjMyNDIxOCAxMDIuMTkxNDA2IDg4Ljc4OTA2MiA3MC43NTM5MDYgMTIwLjIyNjU2MnptMCAwIi8+PHBhdGggZD0ibTI4Ny42MTMyODEgMTMyLjM0Mzc1Yy0yLjk0MTQwNi0yLjk0MTQwNi03LjcwNzAzMS0yLjkzNzUtMTAuNjQ0NTMxIDBsLTE0MS43NTM5MDYgMTQxLjc1Yy0yLjkzNzUgMi45NDE0MDYtMi45Mzc1IDcuNzA3MDMxIDAgMTAuNjQ4NDM4IDIuOTQxNDA2IDIuOTM3NSA3LjcwNzAzMSAyLjkzNzUgMTAuNjQ0NTMxIDBsMTQxLjc1MzkwNi0xNDEuNzUzOTA3YzIuOTQxNDA3LTIuOTM3NSAyLjk0MTQwNy03LjcwMzEyNSAwLTEwLjY0NDUzMXptMCAwIi8+PHBhdGggZD0ibTE3Ni42NzU3ODEgMzE1LjU1NDY4OCAxMTQuOTc2NTYzLTExNC45ODA0NjljMi45NDE0MDYtMi45Mzc1IDIuOTQxNDA2LTcuNzA3MDMxIDAtMTAuNjQ0NTMxLTIuOTM3NS0yLjk0MTQwNy03LjcwMzEyNS0yLjk0MTQwNy0xMC42NDQ1MzIgMGwtMTE0Ljk4MDQ2OCAxMTQuOTgwNDY4Yy0yLjkzNzUgMi45Mzc1LTIuOTM3NSA3LjcwNzAzMiAwIDEwLjY0NDUzMiAyLjk0MTQwNiAyLjk0MTQwNiA3LjcwNzAzMSAyLjk0MTQwNiAxMC42NDg0MzcgMHptMCAwIi8+PHBhdGggZD0ibTIwMi4xNjQwNjIgMzQ4LjU3MDMxMmM1Ljg1OTM3NiAwIDMuNTI3MzQ0LTEuNTY2NDA2IDYyLjgxMjUtNTkuNjk1MzEyIDIuOTQxNDA3LTIuOTM3NSAyLjk0MTQwNy03LjcwMzEyNSAwLTEwLjY0NDUzMS0yLjkzNzUtMi45Mzc1LTcuNzA3MDMxLTIuOTM3NS0xMC42NDQ1MzEgMGwtNTcuNDg4MjgxIDU3LjQ5MjE4N2MtMi45NDE0MDYgMi45Mzc1LTIuOTQxNDA2IDcuNzAzMTI1IDAgMTAuNjQ0NTMyIDEuNDY0ODQ0IDEuNDY4NzUgMy4zOTQ1MzEgMi4yMDMxMjQgNS4zMjAzMTIgMi4yMDMxMjR6bTAgMCIvPjxwYXRoIGQ9Im0yMzguMzAwNzgxIDM3Ny4xNzk2ODggNTcuNDg4MjgxLTU3LjQ4ODI4MmMyLjk0MTQwNy0yLjk0MTQwNiAyLjk0MTQwNy03LjcwNzAzMSAwLTEwLjY0ODQzNy0yLjkzNzUtMi45Mzc1LTcuNzA3MDMxLTIuOTM3NS0xMC42NDQ1MzEgMGwtNTcuNDg4MjgxIDU3LjQ5MjE4N2MtMi45NDE0MDYgMi45Mzc1LTIuOTQxNDA2IDcuNzA3MDMyIDAgMTAuNjQ0NTMyIDIuOTM3NSAyLjk0MTQwNiA3LjcwMzEyNSAyLjk0MTQwNiAxMC42NDQ1MzEgMHptMCAwIi8+PC9zdmc+Cg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                cart: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzEwNzsiIGQ9Ik0zOTQuNjY3LDI1NkMzMTguMTE3LDI1NS45MTgsMjU2LjA4MiwxOTMuODgzLDI1NiwxMTcuMzMzYzAtMy42MDUsMC4yNzctNy4xMjUsMC41MzMtMTAuNjY3SDk2DQoJYy01Ljg5MS0wLjAwMS0xMC42NjgsNC43NzMtMTAuNjY5LDEwLjY2NGMwLDAuNzE3LDAuMDcyLDEuNDMzLDAuMjE2LDIuMTM2TDEyOC4yMTMsMzMyLjhjMS4wNzksNS41MzEsNi4yNzQsOS4yNjksMTEuODYxLDguNTMzDQoJbDMyMC00Mi42NjdjNC4zMzktMC41OCw3Ljg4My0zLjc1Miw4LjkzOS04TDQ4Ni40LDIyMS4xMkM0NjEuMTMyLDI0My41OTksNDI4LjQ4NiwyNTYuMDEyLDM5NC42NjcsMjU2eiIvPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNDU1QTY0OyIgY3g9IjM5NC42NjciIGN5PSI0NTguNjY3IiByPSI1My4zMzMiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBjeD0iMTgxLjMzMyIgY3k9IjQ1OC42NjciIHI9IjUzLjMzMyIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNMTkxLjEyNSwzODRoMjQ2LjIwOGM1Ljg5MSwwLDEwLjY2Ny00Ljc3NiwxMC42NjctMTAuNjY3cy00Ljc3Ni0xMC42NjctMTAuNjY3LTEwLjY2N0gxOTEuMTI1DQoJCWMtMjUuNDA4LTAuMDUzLTQ3LjI3Mi0xNy45NzYtNTIuMzA5LTQyLjg4TDg1LjEyLDUxLjJjLTEuMDE0LTQuOTY3LTUuMzg0LTguNTM0LTEwLjQ1My04LjUzM2gtNjRDNC43NzYsNDIuNjY3LDAsNDcuNDQyLDAsNTMuMzMzDQoJCVM0Ljc3Niw2NCwxMC42NjcsNjRINjUuOTJsNTEuOTg5LDI1OS45NjhDMTI0Ljk1NCwzNTguODMxLDE1NS41NTcsMzgzLjkyNCwxOTEuMTI1LDM4NHoiLz4NCjwvZz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Y0NDMzNjsiIGN4PSIzOTQuNjY3IiBjeT0iMTE3LjMzMyIgcj0iMTE3LjMzMyIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZBRkFGQTsiIGQ9Ik00MzcuMzMzLDEyOEgzNTJjLTUuODkxLDAtMTAuNjY3LTQuNzc2LTEwLjY2Ny0xMC42NjdzNC43NzYtMTAuNjY3LDEwLjY2Ny0xMC42NjdoODUuMzMzDQoJCWM1Ljg5MSwwLDEwLjY2Nyw0Ljc3NiwxMC42NjcsMTAuNjY3UzQ0My4yMjQsMTI4LDQzNy4zMzMsMTI4eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNMzk0LjY2NywxNzAuNjY3Yy01Ljg5MSwwLTEwLjY2Ny00Ljc3Ni0xMC42NjctMTAuNjY3Vjc0LjY2N0MzODQsNjguNzc2LDM4OC43NzYsNjQsMzk0LjY2Nyw2NA0KCQljNS44OTEsMCwxMC42NjcsNC43NzYsMTAuNjY3LDEwLjY2N1YxNjBDNDA1LjMzMywxNjUuODkxLDQwMC41NTgsMTcwLjY2NywzOTQuNjY3LDE3MC42Njd6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                checkout_shipping: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMEMzRkY7IiBkPSJNMzU4LjYxNCwxNTcuNjU0SDUwLjc3MmMtNC43MjIsMC04LjU1MSwzLjgyOS04LjU1MSw4LjU1MXYxNzkuNTc0aDI1LjY1Mw0KCWM5LjQ0NSwwLDE3LjEwMiw3LjY1NiwxNy4xMDIsMTcuMTAyYzAsOS40NDUtNy42NTgsMTcuMTAyLTE3LjEwMiwxNy4xMDJINDIuMjIxdjI1LjY1M2MwLDQuNzIyLDMuODI5LDguNTUxLDguNTUxLDguNTUxaDMxNi4zOTMNCglWMTY2LjIwNUMzNjcuMTY1LDE2MS40ODIsMzYzLjMzNiwxNTcuNjU0LDM1OC42MTQsMTU3LjY1NHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMEFBRjA7IiBkPSJNNDY5Ljc3OSwyOTQuNDcySDM2Ny4xNjV2MTE5LjcxNmgxMzYuODE4di04NS41MTFDNTAzLjk4MywzMDkuNzg2LDQ4OC42NjksMjk0LjQ3Miw0NjkuNzc5LDI5NC40NzJ6DQoJIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA5NkRDOyIgZD0iTTM2Ny4xNjUsMzIwLjEyNmg5Mi42MzhjOS40NDYsMCwxNy4xMDIsNy42NTYsMTcuMTAyLDE3LjEwMnY3Ni45NmgtMTA5Ljc0VjMyMC4xMjZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDBBQUYwOyIgZD0iTTQzNS41NzQsMTkxLjg1OWgtNjguNDA5djM0LjIwNWg5NC4wNjN2LTguNTUxQzQ2MS4yMjgsMjAzLjM0NCw0NDkuNzQyLDE5MS44NTksNDM1LjU3NCwxOTEuODU5eiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0I0RTZGRjsiIHBvaW50cz0iNDY5Ljc3OSwyOTQuNDcyIDQ1Mi42NzYsMjI2LjA2MyAzNjcuMTY1LDIyNi4wNjMgMzY3LjE2NSwyOTQuNDcyICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0YxRjRGQjsiIGQ9Ik00NjkuNzc5LDMyOC42NzdoMzQuMjA1djM0LjIwNWgtMTcuMTAyYy05LjQ0NiwwLTE3LjEwMi03LjY1Ni0xNy4xMDItMTcuMTAyVjMyOC42Nzd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA3REM4OyIgZD0iTTQyNy4wMjMsMzU0LjMzYy0yNS43NzIsMC00OC4xOTQsMTQuMjY1LTU5Ljg1OCwzNS4zMTd2MjQuNTQxaDEyNy42NzYNCglDNDkwLjYyNCwzODAuNDUyLDQ2MS45MDIsMzU0LjMzLDQyNy4wMjMsMzU0LjMzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwOTZEQzsiIGQ9Ik00NzYuOTA0LDM3NS45ODZ2MzguMjAyaDE3LjkzN0M0OTMuMDA1LDM5OS41LDQ4Ni41MTgsMzg2LjI2LDQ3Ni45MDQsMzc1Ljk4NnoiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzVCNUQ2RTsiIGN4PSI0MjcuMDIzIiBjeT0iNDIyLjczNiIgcj0iNDIuNzU2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOUJENkZGOyIgZD0iTTQwMS4zNywyNTEuNzE3aDU3LjcybC02LjQxMy0yNS42NTNoLTg1LjUxMXY2OC40MDloMjUuNjUzdi0zNC4yMDUNCglDMzkyLjgxOCwyNTUuNTQ0LDM5Ni42NDcsMjUxLjcxNyw0MDEuMzcsMjUxLjcxN3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMEFBRjA7IiBkPSJNMTQ0LjgzNSwzNTQuMzNjLTIxLjU5MywwLTQwLjgxOSwxMC4wMjgtNTMuMzU1LDI1LjY1M0g2Ny44NzVINDIuMjIxdjI1LjY1Mw0KCWMwLDQuNzIyLDMuODI5LDguNTUxLDguNTUxLDguNTUxaDMxNi4zOTN2LTM0LjIwNUgxOTguMTlDMTg1LjY1NCwzNjQuMzU5LDE2Ni40MjgsMzU0LjMzLDE0NC44MzUsMzU0LjMzeiIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojNUI1RDZFOyIgY3g9IjE0NC44MzUiIGN5PSI0MjIuNzM2IiByPSI0Mi43NTYiLz4NCjxwYXRoIGQ9Ik00NzYuMTU4LDI4Ni45MzhsLTEzLjI1OS01My4wMzVjMy42MjUtMC43Nyw2LjM0NS0zLjk4Niw2LjM0NS03LjgzOXYtOC41NTFjMC0xOC41NjYtMTUuMTA1LTMzLjY3LTMzLjY3LTMzLjY3aC02MC4zOTINCgl2LTE3LjYzN2MwLTkuMTM2LTcuNDMyLTE2LjU2OC0xNi41NjgtMTYuNTY4SDI0Ni4zMmw2OC4yNC0yNy4yOTZjNC4xMTEtMS42NDQsNi4xMS02LjMxLDQuNDY2LTEwLjQyMQ0KCWMtMS42NDQtNC4xMS02LjMwOC02LjExMS0xMC40MjEtNC40NjZsLTU1Ljg3NCwyMi4zNDljMTcuMDI2LTEwLjkyNCwzMy44NzEtMjIuOTQ3LDQwLjI4NC0zMS4zNTUNCgljMTIuNDg1LTE2LjM2OSw5LjMyMy0zOS44NDMtNy4wNDYtNTIuMzI4Yy0xNi4zNjktMTIuNDg2LTM5Ljg0My05LjMyMy01Mi4zMjgsNy4wNDZsMCwwYy05LjEyMiwxMS45NjItMjEuMTU4LDQ1LjU3My0yOC45NDgsNjkuMjU4DQoJYy03Ljc5LTIzLjY4My0xOS44MjYtNTcuMjk2LTI4Ljk0OC02OS4yNThsMCwwYy0xMi40ODQtMTYuMzY5LTM1Ljk1OS0xOS41My01Mi4zMjgtNy4wNDZzLTE5LjUzLDM1Ljk1OC03LjA0Niw1Mi4zMjgNCgljNi40MTMsOC40MDksMjMuMjU3LDIwLjQzMSw0MC4yODQsMzEuMzU1bC01NS44NzQtMjIuMzQ5Yy00LjExMy0xLjY0Ny04Ljc3NywwLjM1NS0xMC40MjEsNC40NjYNCgljLTEuNjQ1LDQuMTExLDAuMzU1LDguNzc3LDQuNDY2LDEwLjQyMWw2OC4yNCwyNy4yOTZINTAuNzcyYy05LjEzNiwwLTE2LjU2OCw3LjQzMi0xNi41NjgsMTYuNTY4djE0NS4zNw0KCWMwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3czguMDE3LTMuNTg5LDguMDE3LTguMDE3di0xNDUuMzdjMC0wLjI5NSwwLjIzOS0wLjUzNCwwLjUzNC0wLjUzNGgzMDcuODQxDQoJYzAuMjk1LDAsMC41MzQsMC4yMzksMC41MzQsMC41MzR2MTQ1LjM3MmMwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3YzQuNDI3LDAsOC4wMTctMy41ODksOC4wMTctOC4wMTd2LTkuMDg4aDk0LjU2Ng0KCWMwLjAwOSwwLDAuMDE2LDAuMDAyLDAuMDI1LDAuMDAyYzAuMDA5LDAsMC4wMTctMC4wMDEsMC4wMjYtMC4wMDFjMTEuNjM2LDAuMDA5LDIxLjUxNiw3LjY0NywyNC45MDgsMTguMTcxaC0yNC45MjgNCgljLTQuNDI3LDAtOC4wMTcsMy41ODktOC4wMTcsOC4wMTd2MTcuMTAyYzAsMTMuODUxLDExLjI2OCwyNS4xMTksMjUuMTE5LDI1LjExOWg5LjA4NnYzNS4yNzNoLTIwLjk2Mg0KCWMtNi44ODYtMTkuODgzLTI1Ljc4Ny0zNC4yMDUtNDcuOTgyLTM0LjIwNXMtNDEuMDk3LDE0LjMyMi00Ny45ODIsMzQuMjA1aC0zLjg2VjM0NS43OGMwLTQuNDI3LTMuNTg5LTguMDE3LTguMDE3LTguMDE3DQoJYy00LjQyNywwLTguMDE3LDMuNTg5LTguMDE3LDguMDE3djYwLjM5MkgxOTIuODE3Yy02Ljg4Ni0xOS44ODMtMjUuNzg3LTM0LjIwNS00Ny45ODItMzQuMjA1cy00MS4wOTcsMTQuMzIyLTQ3Ljk4MiwzNC4yMDVINTAuNzcyDQoJYy0wLjI5NSwwLTAuNTM0LTAuMjM5LTAuNTM0LTAuNTM0di0xNy42MzdoMzQuNzM5YzQuNDI3LDAsOC4wMTctMy41ODksOC4wMTctOC4wMTdjMC00LjQyNy0zLjU4OS04LjAxNy04LjAxNy04LjAxN0g4LjAxNw0KCWMtNC40MjcsMC04LjAxNywzLjU4OS04LjAxNyw4LjAxN2MwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3aDI2LjE4OHYxNy42MzdjMCw5LjEzNiw3LjQzMiwxNi41NjgsMTYuNTY4LDE2LjU2OGg0My4zMDQNCgljLTAuMDAyLDAuMTc4LTAuMDE0LDAuMzU1LTAuMDE0LDAuNTM0YzAsMjcuOTk1LDIyLjc3Nyw1MC43NzIsNTAuNzcyLDUwLjc3MnM1MC43NzItMjIuNzc3LDUwLjc3Mi01MC43NzINCgljMC0wLjE4LTAuMDEyLTAuMzU2LTAuMDE0LTAuNTM0aDE4MC42N2MtMC4wMDIsMC4xNzgtMC4wMTQsMC4zNTUtMC4wMTQsMC41MzRjMCwyNy45OTUsMjIuNzc3LDUwLjc3Miw1MC43NzIsNTAuNzcyDQoJYzI3Ljk5NSwwLDUwLjc3Mi0yMi43NzcsNTAuNzcyLTUwLjc3MmMwLTAuMTgtMC4wMTItMC4zNTYtMC4wMTQtMC41MzRoMjYuMjAzYzQuNDI3LDAsOC4wMTctMy41ODksOC4wMTctOC4wMTd2LTg1LjUxMQ0KCUM1MTIsMzA3LjU2NCw0OTYuNDIzLDI5MC4wMjIsNDc2LjE1OCwyODYuOTM4eiBNMjQ2LjM5MSw2Mi44OUwyNDYuMzkxLDYyLjg5YzcuMTIzLTkuMzM5LDIwLjUxNi0xMS4xNDIsMjkuODU1LTQuMDINCgljOS4zNCw3LjEyMywxMS4xNDMsMjAuNTE2LDQuMDIxLDI5Ljg1NWMtMi43NzcsMy42NDEtMTIuMTU3LDEyLjY4My00My43NzgsMzIuMzMzYy02LjM4NSwzLjk2OC0xMi42MDQsNy42OTgtMTguMDE2LDEwLjg4Mw0KCUMyMjYuNDkxLDEwNy4yODEsMjM4LjYzNiw3My4wNiwyNDYuMzkxLDYyLjg5eiBNMTI5LjEyLDg4LjcyNWMtNy4xMjMtOS4zMzktNS4zMTktMjIuNzMyLDQuMDIxLTI5Ljg1NQ0KCWMzLjg1LTIuOTM2LDguMzg4LTQuMzU1LDEyLjg5My00LjM1NWM2LjQyMiwwLDEyLjc3NiwyLjg4NiwxNi45NjMsOC4zNzZsMCwwYzcuNzU1LDEwLjE2OCwxOS45LDQ0LjM5MSwyNy45MTgsNjkuMDUyDQoJYy01LjQxMi0zLjE4NS0xMS42MzItNi45MTUtMTguMDE2LTEwLjg4M0MxNDEuMjc3LDEwMS40MDksMTMxLjg5Nyw5Mi4zNjcsMTI5LjEyLDg4LjcyNXogTTM3NS4xODIsMjM0LjA4aDcxLjIzNWwxMy4wOTQsNTIuMzc2DQoJaC04NC4zMjlWMjM0LjA4eiBNNDM1LjU3NCwxOTkuODc1YzkuNzI1LDAsMTcuNjM3LDcuOTEyLDE3LjYzNywxNy42Mzd2MC41MzRoLTc4LjAyOXYtMTguMTcxSDQzNS41NzR6IE0xNDQuODM1LDQ1Ny40NzkNCgljLTE5LjE1NSwwLTM0LjczOS0xNS41ODQtMzQuNzM5LTM0LjczOWMwLTE5LjE1NSwxNS41ODQtMzQuNzM5LDM0LjczOS0zNC43MzljMTkuMTU1LDAsMzQuNzM5LDE1LjU4NCwzNC43MzksMzQuNzM5DQoJQzE3OS41NzQsNDQxLjg5NCwxNjMuOTksNDU3LjQ3OSwxNDQuODM1LDQ1Ny40Nzl6IE00MjcuMDIzLDQ1Ny40NzljLTE5LjE1NSwwLTM0LjczOS0xNS41ODQtMzQuNzM5LTM0LjczOQ0KCWMwLTE5LjE1NSwxNS41ODQtMzQuNzM5LDM0LjczOS0zNC43MzljMTkuMTU1LDAsMzQuNzM5LDE1LjU4NCwzNC43MzksMzQuNzM5QzQ2MS43NjIsNDQxLjg5NCw0NDYuMTc4LDQ1Ny40NzksNDI3LjAyMyw0NTcuNDc5eg0KCSBNNDg2Ljg4MSwzNTQuODY1Yy01LjAxLDAtOS4wODYtNC4wNzYtOS4wODYtOS4wODZ2LTkuMDg2aDE4LjE3MXYxOC4xNzFINDg2Ljg4MXoiLz4NCjxwYXRoIGQ9Ik0xNDQuODM1LDQwNi4xNzJjLTkuMTM2LDAtMTYuNTY4LDcuNDMyLTE2LjU2OCwxNi41NjhzNy40MzIsMTYuNTY4LDE2LjU2OCwxNi41NjhjOS4xMzYsMCwxNi41NjgtNy40MzIsMTYuNTY4LTE2LjU2OA0KCVMxNTMuOTcxLDQwNi4xNzIsMTQ0LjgzNSw0MDYuMTcyeiIvPg0KPHBhdGggZD0iTTQyNy4wMjMsNDA2LjE3MmMtOS4xMzYsMC0xNi41NjgsNy40MzItMTYuNTY4LDE2LjU2OHM3LjQzMiwxNi41NjgsMTYuNTY4LDE2LjU2OHMxNi41NjgtNy40MzIsMTYuNTY4LTE2LjU2OA0KCVM0MzYuMTU5LDQwNi4xNzIsNDI3LjAyMyw0MDYuMTcyeiIvPg0KPHBhdGggZD0iTTIwNS4yMjgsMzc5Ljk4NGMwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3SDMzMi45NmM0LjQyNywwLDguMDE3LTMuNTg5LDguMDE3LTguMDE3YzAtNC40MjctMy41ODktOC4wMTctOC4wMTctOC4wMTcNCglIMjEzLjI0NEMyMDguODE3LDM3MS45NjcsMjA1LjIyOCwzNzUuNTU3LDIwNS4yMjgsMzc5Ljk4NHoiLz4NCjxwYXRoIGQ9Ik0yNS4xMTksMzUzLjc5NmgxMDIuNjE0YzQuNDI3LDAsOC4wMTctMy41ODksOC4wMTctOC4wMTdzLTMuNTg5LTguMDE3LTguMDE3LTguMDE3SDI1LjExOQ0KCWMtNC40MjcsMC04LjAxNywzLjU4OS04LjAxNyw4LjAxN1MyMC42OTIsMzUzLjc5NiwyNS4xMTksMzUzLjc5NnoiLz4NCjxwYXRoIGQ9Ik0xMjcuNzMzLDIzNC4wOGM0LjQyNywwLDguMDE3LTMuNTg5LDguMDE3LTguMDE3cy0zLjU4OS04LjAxNy04LjAxNy04LjAxN0g5My41MjhjLTQuNDI3LDAtOC4wMTcsMy41ODktOC4wMTcsOC4wMTd2NjguNDA5DQoJYzAsNC40MjcsMy41ODksOC4wMTcsOC4wMTcsOC4wMTdjNC40MjcsMCw4LjAxNy0zLjU4OSw4LjAxNy04LjAxN3YtMjYuMTg4aDE3LjYzN2M0LjQyNywwLDguMDE3LTMuNTg5LDguMDE3LTguMDE3DQoJYzAtNC40MjctMy41ODktOC4wMTctOC4wMTctOC4wMTdoLTE3LjYzN1YyMzQuMDhMMTI3LjczMywyMzQuMDhMMTI3LjczMywyMzQuMDh6Ii8+DQo8cGF0aCBkPSJNMjA0LjE1OSwyNDcuNDQxYzAtMTYuMjA5LTEzLjE4Ni0yOS4zOTUtMjkuMzk1LTI5LjM5NWgtMjEuMzc4Yy00LjQyNywwLTguMDE3LDMuNTg5LTguMDE3LDguMDE3djY4LjQwOQ0KCWMwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3YzQuNDI3LDAsOC4wMTctMy41ODksOC4wMTctOC4wMTd2LTE3LjYzN2gxMy4zNDZsMTQuNzIyLDIyLjA4Mw0KCWMxLjU0NSwyLjMxNyw0LjA4NiwzLjU3MSw2LjY3NywzLjU3MWMxLjUyOSwwLDMuMDczLTAuNDM2LDQuNDM5LTEuMzQ4YzMuNjg0LTIuNDU1LDQuNjgtNy40MzMsMi4yMjMtMTEuMTE2bC0xMS45ODktMTcuOTgzDQoJQzE5OC44NDUsMjY2Ljc4OCwyMDQuMTU5LDI1Ny43MjYsMjA0LjE1OSwyNDcuNDQxeiBNMTYxLjQwMywyMzQuMDhoMTMuMzYxYzcuMzY4LDAsMTMuMzYxLDUuOTkzLDEzLjM2MSwxMy4zNjENCglzLTUuOTkzLDEzLjM2MS0xMy4zNjEsMTMuMzYxaC0xMy4zNjFWMjM0LjA4eiIvPg0KPHBhdGggZD0iTTI1NiwyMzQuMDhjNC40MjcsMCw4LjAxNy0zLjU4OSw4LjAxNy04LjAxN3MtMy41ODktOC4wMTctOC4wMTctOC4wMTdoLTM0LjIwNWMtNC40MjcsMC04LjAxNywzLjU4OS04LjAxNyw4LjAxN3Y2OC40MDkNCgljMCw0LjQyNywzLjU4OSw4LjAxNyw4LjAxNyw4LjAxN0gyNTZjNC40MjcsMCw4LjAxNy0zLjU4OSw4LjAxNy04LjAxN2MwLTQuNDI3LTMuNTg5LTguMDE3LTguMDE3LTguMDE3aC0yNi4xODh2LTE4LjE5OA0KCWMwLjE3NywwLjAxMiwwLjM1NCwwLjAyNywwLjUzNCwwLjAyN2gxNy4xMDJjNC40MjcsMCw4LjAxNy0zLjU4OSw4LjAxNy04LjAxN2MwLTQuNDI3LTMuNTg5LTguMDE3LTguMDE3LTguMDE3aC0xNy4xMDINCgljLTAuMTgxLDAtMC4zNTcsMC4wMTUtMC41MzQsMC4wMjdWMjM0LjA4TDI1NiwyMzQuMDhMMjU2LDIzNC4wOHoiLz4NCjxwYXRoIGQ9Ik0zMTUuODU4LDIzNC4wOGM0LjQyNywwLDguMDE3LTMuNTg5LDguMDE3LTguMDE3cy0zLjU4OS04LjAxNy04LjAxNy04LjAxN2gtMzQuMjA1Yy00LjQyNywwLTguMDE3LDMuNTg5LTguMDE3LDguMDE3DQoJdjY4LjQwOWMwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3aDM0LjIwNWM0LjQyNywwLDguMDE3LTMuNTg5LDguMDE3LTguMDE3YzAtNC40MjctMy41ODktOC4wMTctOC4wMTctOC4wMTdIMjg5LjY3di0xOC4xNzENCgloOS4wODZjNC40MjcsMCw4LjAxNy0zLjU4OSw4LjAxNy04LjAxN2MwLTQuNDI3LTMuNTg5LTguMDE3LTguMDE3LTguMDE3aC05LjA4NlYyMzQuMDhMMzE1Ljg1OCwyMzQuMDhMMzE1Ljg1OCwyMzQuMDh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                referrer_friend: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRjJBMDc3OyIgZD0iTTMwOS41MjEsNDA1LjAyOGgxOS4yODJ2NjguMTYxSDMxMy41NWMtMi4yMjUsMC00LjAyOSwxLjgwNC00LjAyOSw0LjAyOWwwLDAgICAgIGMwLDUuODk5LTQuNzgyLDEwLjY4MS0xMC42ODEsMTAuNjgxSDE5OS43N3YtMTQuNzF2LTcwLjg0YzAtNi42NzcsNS40MTMtMTIuMDksMTIuMDktMTIuMDloNzYuMDc2ICAgICBjNS4xMjgsMCwxMC4wMjEsMi4xNTIsMTMuNDg2LDUuOTMzTDMwOS41MjEsNDA1LjAyOHoiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Q2Nzc0RDsiIGQ9Ik0zMDkuNTIxLDQ1Ni44NzhjMC0yLjIyNSwxLjgwNC00LjAyOSw0LjAyOS00LjAyOWgxNS4yNTN2MjAuMzRIMzEzLjU1ICAgICBjLTIuMjI1LDAtNC4wMjksMS44MDQtNC4wMjksNC4wMjljMCw1Ljg5OS00Ljc4MiwxMC42ODEtMTAuNjgxLDEwLjY4MUgxOTkuNzd2LTE0Ljcxdi01LjYzaDk5LjA3MSAgICAgQzMwNC43MzksNDY3LjU1OSwzMDkuNTIxLDQ2Mi43NzcsMzA5LjUyMSw0NTYuODc4eiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojNzVEQzVFOyIgZD0iTTM5MC42MzEsNDg3Ljk1OGgtNTQuNzg5Yy0zLjg4NywwLTcuMDM4LTMuMTUxLTcuMDM4LTcuMDM4di04My42MjIgICAgIGMwLTMuODg3LDMuMTUxLTcuMDM4LDcuMDM4LTcuMDM4aDU0Ljc4OVY0ODcuOTU4eiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMkFBRDUyOyIgZD0iTTMyOC44MDMsNDU5LjU1MnYyMS4zNjdjMCwzLjg4NywzLjE1MSw3LjAzOCw3LjAzOCw3LjAzOGg1NC43ODl2LTIxLjM2N2gtNTQuNzg5ICAgICBDMzMxLjk1NCw0NjYuNTkxLDMyOC44MDMsNDYzLjQ0LDMyOC44MDMsNDU5LjU1MnoiLz4KCQk8L2c+Cgk8L2c+Cgk8cmVjdCB4PSIyMjIuNjA5IiB5PSIzMjguNDM4IiBzdHlsZT0iZmlsbDojRUJFQUU2OyIgd2lkdGg9IjM1LjYyNiIgaGVpZ2h0PSIxNzYuMDYyIi8+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMkJCNEYzOyIgZD0iTTExMS4zNTUsMzM1LjY0MUg1Ni41NjZ2LTk3LjY5OWg1NC43ODljMy44ODcsMCw3LjAzOCwzLjE1MSw3LjAzOCw3LjAzOHY4My42MjIgICAgQzExOC4zOTMsMzMyLjQ5LDExNS4yNDIsMzM1LjY0MSwxMTEuMzU1LDMzNS42NDF6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzE2ODdDNDsiIGQ9Ik0xMTguMzkzLDMwNy4yMzV2MjEuMzY3YzAsMy44ODctMy4xNTEsNy4wMzgtNy4wMzgsNy4wMzhINTYuNTY2di0yMS4zNjdoNTQuNzg5ICAgIEMxMTUuMjQyLDMxNC4yNzQsMTE4LjM5MywzMTEuMTIzLDExOC4zOTMsMzA3LjIzNXoiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRDc4NzVGOyIgZD0iTTEzNy42NzUsMjUyLjcxMXYtMi4wNjhjMC04LjM5Myw0LjA3NS0xNi4yNjIsMTAuOTI5LTIxLjEwNmwyOC42OTgtMjAuMjgyICAgIGMxLjk3OC0xLjM5OCw0LjM0LTIuMTQ4LDYuNzYxLTIuMTQ4aDQwLjQyNmM5LjYxLDAsMTcuNCw3Ljc5LDE3LjQsMTcuNHYwLjQyaDI0LjM2NWM3LjYzOSwwLDEzLjgzMiw2LjE5MywxMy44MzIsMTMuODMydjAgICAgYzAsNy42MzktNi4xOTMsMTMuODMyLTEzLjgzMiwxMy44MzJoMy40MDFjNy42MzksMCwxMy44MzIsNi4xOTMsMTMuODMyLDEzLjgzMnYwYzAsNy42MzktNi4xOTMsMTMuODMyLTEzLjgzMiwxMy44MzJoLTkuNTI0ICAgIGM3LjYzOSwwLDEzLjgzMiw2LjE5MywxMy44MzIsMTMuODMydjBjMCw3LjYzOS02LjE5MywxMy44MzItMTMuODMyLDEzLjgzMmgtOC4xNjNjNy42MzksMCwxMy44MzIsNi4xOTMsMTMuODMyLDEzLjgzMnYwICAgIGMwLDcuNjM5LTYuMTkzLDEzLjgzMi0xMy44MzIsMTMuODMyaC00LjU0MUgyMjIuNDloLTc0LjEzNGMtNS44OTksMC0xMC42ODEtNC43ODItMTAuNjgxLTEwLjY4MWMwLTIuMjI1LTEuODA0LTQuMDI5LTQuMDI5LTQuMDI5ICAgIGgtMTUuMjUzdi02OC4xNjFIMTM3LjY3NXoiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojQjA1QTNEOyIgZD0iTTEzNy42NzUsMzA0LjkyNGMwLDUuODk5LDQuNzgyLDEwLjY4MSwxMC42ODEsMTAuNjgxaDc0LjEzNGgyNC45MzdoNC41NDEgICAgYzMuNzA5LDAsNy4wNjktMS40NjgsOS41NTItMy44NDRjMi42MzIsMi41MTgsNC4yNzksNi4wNTcsNC4yNzksOS45ODh2MGMwLDcuNjM5LTYuMTkzLDEzLjgzMi0xMy44MzIsMTMuODMyaC00LjU0MUgyMjIuNDkgICAgaC03NC4xMzRjLTUuODk5LDAtMTAuNjgxLTQuNzgyLTEwLjY4MS0xMC42ODFjMC0yLjIyNS0xLjgwNC00LjAyOS00LjAyOS00LjAyOWgtMTUuMjUzdi0xOS45NzZoMTUuMjUzICAgIEMxMzUuODcxLDMwMC44OTYsMTM3LjY3NSwzMDIuNjk5LDEzNy42NzUsMzA0LjkyNHoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRTg4RTZCOyIgZD0iTTE4MC45NDQsMzc3LjI0M2gyOS40NzhjNy42MzksMCwxMy44MzIsNi4xOTMsMTMuODMyLDEzLjgzMnYwICAgICBjMCw3LjYzOS02LjE5MywxMy44MzItMTMuODMyLDEzLjgzMmgtMjkuNDc4Yy03LjYzOSwwLTEzLjgzMi02LjE5My0xMy44MzItMTMuODMydjAgICAgIEMxNjcuMTEyLDM4My40MzYsMTczLjMwNCwzNzcuMjQzLDE4MC45NDQsMzc3LjI0M3oiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0Y3QUE4NjsiIGQ9Ik0xNzcuNTQyLDQwNC45MDdoMjkuNDc4YzcuNjM5LDAsMTMuODMyLDYuMTkzLDEzLjgzMiwxMy44MzJ2MCAgICAgYzAsNy42MzktNi4xOTMsMTMuODMyLTEzLjgzMiwxMy44MzJoLTI5LjQ3OGMtNy42MzksMC0xMy44MzItNi4xOTMtMTMuODMyLTEzLjgzMnYwICAgICBDMTYzLjcxLDQxMS4xLDE2OS45MDMsNDA0LjkwNywxNzcuNTQyLDQwNC45MDd6Ii8+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNFODhFNkI7IiBkPSJNMTg3LjA2Niw0MzIuNTcxaDI5LjQ3OGM3LjYzOSwwLDEzLjgzMiw2LjE5MywxMy44MzIsMTMuODMydjAgICAgIGMwLDcuNjM5LTYuMTkzLDEzLjgzMi0xMy44MzIsMTMuODMyaC0yOS40NzhjLTcuNjM5LDAtMTMuODMyLTYuMTkzLTEzLjgzMi0xMy44MzJ2MCAgICAgQzE3My4yMzQsNDM4Ljc2NCwxNzkuNDI3LDQzMi41NzEsMTg3LjA2Niw0MzIuNTcxeiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQ0FBOyIgZD0iTTE5NS4yMjksNDYwLjIzNWgyOS40NzhjNy42MzksMCwxMy44MzIsNi4xOTMsMTMuODMyLDEzLjgzMnYwICAgICBjMCw3LjYzOS02LjE5MywxMy44MzItMTMuODMyLDEzLjgzMmgtMjkuNDc4Yy03LjYzOSwwLTEzLjgzMi02LjE5My0xMy44MzItMTMuODMydjAgICAgIEMxODEuMzk3LDQ2Ni40MjcsMTg3LjU5LDQ2MC4yMzUsMTk1LjIyOSw0NjAuMjM1eiIvPgoJCTwvZz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQ0FBOyIgZD0iTTI2My4xMzQsMzU5LjQyNGMyLjQyMiwwLDQuNzg0LDAuNzUsNi43NjEsMi4xNDhsMjguNjk4LDIwLjI4MiAgICBjNi44NTQsNC44NDQsMTAuOTI5LDEyLjcxNCwxMC45MjksMjEuMTA2djEwLjg4MWMwLDEyLjY1Ni0xMC4yNTksMjIuOTE1LTIyLjkxNSwyMi45MTVoLTguNDVjLTIxLjM1MSwwLTM4LjY2LTE3LjMwOS0zOC42Ni0zOC42NiAgICB2LTIuNDA0YzAtMi45ODEtMi40MTYtNS4zOTctNS4zOTctNS4zOTdoMGMtMi45ODEsMC01LjM5NywyLjQxNi01LjM5Nyw1LjM5N3YxNC4wNDJjMCwxMy4xMTEtMTAuNjI5LDIzLjc0LTIzLjc0LDIzLjc0aDAgICAgYy00LjIyMiwwLTcuNjQ0LTMuNDIyLTcuNjQ0LTcuNjQ0di00OS4wMDdjMC05LjYxLDcuNzktMTcuNCwxNy40LTE3LjRIMjYzLjEzNHoiLz4KCTwvZz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjVBNTk7IiBkPSJNNDUyLjQyMiwxNjcuMjY5SDI1OC4yMzVWNy41aDE5NC4xODdjMi41MDYsMCwzLjkwNywyLjg5LDIuMzU2LDQuODU4bC01Ny43MDEsNzMuMTY5ICAgYy0wLjg1OSwxLjA4OS0wLjg1OSwyLjYyNiwwLDMuNzE1bDU3LjcwMSw3My4xNjlDNDU2LjMyOSwxNjQuMzc5LDQ1NC45MjcsMTY3LjI2OSw0NTIuNDIyLDE2Ny4yNjl6Ii8+Cgk8cmVjdCB4PSIyNTguMjM1IiB5PSI3LjUiIHN0eWxlPSJmaWxsOiNDRTNBNEM7IiB3aWR0aD0iMjQuOTYxIiBoZWlnaHQ9IjE1OS43NjkiLz4KCTxyZWN0IHg9IjIyMi42MDkiIHk9IjcuNSIgc3R5bGU9ImZpbGw6I0VCRUFFNjsiIHdpZHRoPSIzNS42MjYiIGhlaWdodD0iMjE3LjQyNiIvPgoJPHBhdGggZD0iTTQ2MC42NjYsMTU3Ljc2N2wtNTUuNTAzLTcwLjM4M2w1NS41MDMtNzAuMzgyYzIuNTEzLTMuMTg2LDIuOTc0LTcuNDMzLDEuMjAzLTExLjA4M0M0NjAuMDk5LDIuMjY4LDQ1Ni40NzksMCw0NTIuNDIxLDAgICBjLTExLjY1OSwwLTIxOC43ODcsMC0yMjkuODEyLDBjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjV2MzUuNDI2YzAsNC4xNDIsMy4zNTgsNy41LDcuNSw3LjVzNy41LTMuMzU4LDcuNS03LjVWMTVoMjAuNjI2djE1Mi4yNjkgICB2NTAuMTU4aC0yMC42MjZ2LTE0NC41YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVzLTcuNSwzLjM1OC03LjUsNy41VjE5OS42MWgtMzEuMDQyYy00LjAwOSwwLTcuODQ5LDEuMjIzLTExLjA4OCwzLjUyNSAgIGwtMjguNjk2LDIwLjI3N2MtNy4zMzUsNS4xNzYtMTIuMjE2LDEzLjA3My0xMy42NiwyMS43OThoLTQuNzI5di0wLjIzYzAtOC4wMTYtNi41MjItMTQuNTM4LTE0LjUzOS0xNC41MzhINTYuNTY2ICAgYy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41aDU0LjMyOHY4Mi42OTlINTYuNTY2Yy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41aDU0Ljc4OSAgIGM4LjAxNywwLDE0LjUzOS02LjUyMiwxNC41MzktMTQuNTM4di0wLjIzMmg0LjYxNWMxLjYyNSw4LjM3MSw5LjAxLDE0LjcxLDE3Ljg0OCwxNC43MWg2Ni43NXY4Ljg0NGgtMC4zODkgICBjLTExLjI2OSwwLTIwLjgwOCw3LjUyNy0yMy44NjcsMTcuODE2aC05LjkwM2MtNS43MDgsMC0xMS4wNjgsMi4yMjYtMTUuMDgzLDYuMjU2Yy00LjAyOCw0LjAyOC02LjI0Nyw5LjM4NS02LjI0NywxNS4wODMgICBjMCw0LjM5LDEuMzM2LDguNDc0LDMuNjE5LDExLjg3Yy0wLjI2MSwwLjIzNi0wLjUzMSwwLjQ1Ny0wLjc4MiwwLjcwN2MtNC4wMjgsNC4wMjgtNi4yNDcsOS4zODUtNi4yNDcsMTUuMDgzICAgYzAsOC4xODgsNC42NDYsMTUuMzAyLDExLjQzNCwxOC44NzZjLTEuMjM0LDIuNzI3LTEuOTA0LDUuNzAxLTEuOTA0LDguNzg0YzAsNy43NTIsNC4xNzEsMTQuNTMxLDEwLjM3MiwxOC4yNjYgICBjLTEuNDAzLDIuODQxLTIuMjEyLDYuMDI0LTIuMjEyLDkuNGMwLDExLjc2Myw5LjU2OSwyMS4zMzIsMjEuMzMyLDIxLjMzMmgxOS44Nzd2OS4xMDJjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNSAgIHM3LjUtMy4zNTgsNy41LTcuNXYtOS44MjFjOS4xNTItMi40MDEsMTUuOTMyLTEwLjcxOSwxNS45MzItMjAuNjEzYzAtNy43NDgtNC4xNjUtMTQuNTIzLTEwLjM2MS0xOC4yNiAgIGMxLjQyNS0yLjg5MywyLjE5OC02LjA4NywyLjE5OC05LjQwNmMwLTYuOTg4LTMuMzkzLTEzLjE4My04LjYwMi0xNy4wNzZjMy4wODktMy44MjYsNS4yOTktOC4zOTEsNi4zMDktMTMuMzg2ICAgYzMuMjQyLDcuNzA2LDguNTIsMTQuMzUxLDE1LjE1MywxOS4yNjZWNTA0LjVjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNWM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41di05LjFoMzMuMSAgIGM0Ljg1NCwwLDkuNDE5LTEuODkyLDEyLjg1My01LjMyNmMyLjYwMi0yLjYwMiw0LjMxOC01Ljg1Miw0Ljk5OC05LjM4NGg0LjYxNnYwLjIyOWMwLDguMDE2LDYuNTIxLDE0LjUzOCwxNC41MzgsMTQuNTM4aDU0Ljc4OSAgIGM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtNTQuMzI3di03LjIwOWMwLTAuMDIsMC4wMDMtMC4wMzksMC4wMDMtMC4wNThzLTAuMDAzLTAuMDM4LTAuMDAzLTAuMDU4di02OC4wNDQgICBjMC0wLjAyLDAuMDAzLTAuMDM4LDAuMDAzLTAuMDU4cy0wLjAwMy0wLjAzOC0wLjAwMy0wLjA1OHYtNy4yMTNoNTQuMzI3YzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC01NC43ODkgICBjLTguMDE3LDAtMTQuNTM4LDYuNTIyLTE0LjUzOCwxNC41Mzh2MC4yMzNoLTQuNzQxYy0xLjQ0NC04LjcyLTYuMzExLTE2LjYyLTEzLjY0MS0yMS44MDFsLTI4LjY5OC0yMC4yODIgICBjLTIuNTQ0LTEuNzk4LTUuNDQtMi45MjUtOC40ODYtMy4zMzh2LTE0LjA4NmMwLjQ0OS0wLjM4MSwwLjg5Mi0wLjc3LDEuMzEzLTEuMTkxYzQuMDI3LTQuMDI4LDYuMjQ2LTkuMzg1LDYuMjQ2LTE1LjA4MyAgIGMwLTMuMzYxLTAuNzgxLTYuNTQzLTIuMTcyLTkuMzc1YzEuNDc0LTAuODg5LDIuODUyLTEuOTYzLDQuMTA2LTMuMjEzYzQuMDIxLTQuMDM4LDYuMjM1LTkuMzkxLDYuMjM1LTE1LjA3MyAgIGMwLTMuMTI1LTAuNjc2LTYuMDk3LTEuODg5LTguNzc1YzEuODc5LTAuOTg5LDMuNjE5LTIuMjY4LDUuMTYzLTMuODEyYzQuMDI3LTQuMDI4LDYuMjQ2LTkuMzg1LDYuMjQ2LTE1LjA4MyAgIGMwLTYuMjUxLTIuNzAyLTExLjg4Mi03LjAwMS0xNS43ODdjMi4zNDItMy40ODMsMy42MDEtNy41ODEsMy42MDEtMTEuODczYzAtMTEuNzYxLTkuNTY4LTIxLjMzLTIxLjMzLTIxLjMzaC0wLjUyMXYtNDIuNjYyaDkxLjA5NiAgIGM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtOTEuMDk2VjE1aDE3Ny40MDdsLTUxLjk1Nyw2NS44ODVjLTMuMDE1LDMuODI2LTMuMDE2LDkuMTcxLDAuMDAyLDEzLjAwMSAgIGw1MS45NTQsNjUuODgyaC01Ni4zMTFjLTQuMTQzLDAtNy41LDMuMzU4LTcuNSw3LjVzMy4zNTcsNy41LDcuNSw3LjVoNjUuNTkxYzQuMDU4LDAsNy42NzgtMi4yNjgsOS40NDgtNS45MTkgICBDNDYzLjYzOSwxNjUuMTk5LDQ2My4xNzgsMTYwLjk1Miw0NjAuNjY2LDE1Ny43Njd6IE0yMzAuMTA3LDM0My4wOGgyMC42M3Y4Ljg0NGgtMjAuNjNWMzQzLjA4eiBNMjE2LjU0Niw0NDAuMDcgICBjMy40OSwwLDYuMzMsMi44NCw2LjMzLDYuMzNjMCwxLjY5Mi0wLjY1OCwzLjI4Mi0xLjg1Myw0LjQ3N2MtMS4xOTUsMS4xOTUtMi43ODUsMS44NTMtNC40NzcsMS44NTNoLTI5LjQ4ICAgYy0zLjQ5LDAtNi4zMy0yLjg0LTYuMzMtNi4zM2MwLTEuNjkyLDAuNjU4LTMuMjgyLDEuODUzLTQuNDc3YzEuMTk1LTEuMTk1LDIuNzg1LTEuODU0LDQuNDc3LTEuODU0aDEyLjc5ICAgYzEuNTk4LDAuNTc1LDMuMzEyLDAuOTA1LDUuMTA2LDAuOTA1YzIuNTY3LDAsNS4wNi0wLjMxOCw3LjQ0OC0wLjkwNUgyMTYuNTQ2eiBNMTc3LjU0Niw0MjUuMDdjLTMuNDk2LDAtNi4zNC0yLjgzOS02LjM0LTYuMzMgICBjMC0xLjY5MiwwLjY1OC0zLjI4MiwxLjg0Mi00LjQ2NmMxLjIwNy0xLjIwMiwyLjgwNC0xLjg2NCw0LjQ5OC0xLjg2NGgzLjRoOC44NzF2MTIuNjZoLTIuNzUxSDE3Ny41NDZ6IE0xNzYuNDgsMzg2LjU5MyAgIGMxLjE5LTEuMTk1LDIuNzc2LTEuODUzLDQuNDY3LTEuODUzaDguODcxdjEyLjY3aC04Ljg3MWMtMy40OSwwLTYuMzMtMi44NC02LjMzLTYuMzMgICBDMTc0LjYxNywzODkuMzg4LDE3NS4yNzUsMzg3Ljc5OCwxNzYuNDgsMzg2LjU5M3ogTTIyNC43MDcsNDgwLjM5OGgtMjkuNDc4Yy0zLjQ5MiwwLTYuMzMyLTIuODQtNi4zMzItNi4zMzIgICBzMi44NC02LjMzMiw2LjMzMi02LjMzMmgyOS40NzhjMy40OTIsMCw2LjMzMiwyLjg0LDYuMzMyLDYuMzMyUzIyOC4xOTgsNDgwLjM5OCwyMjQuNzA3LDQ4MC4zOTh6IE0yOTQuMjY0LDM4Ny45NzkgICBjNC44NTcsMy40MzIsNy43NTcsOS4wMzMsNy43NTcsMTQuOTgxdjEuOTczYzAsMC4wMzMtMC4wMDUsMC4wNjQtMC4wMDUsMC4wOTdzMC4wMDQsMC4wNjQsMC4wMDUsMC4wOTd2MTUuOTAxICAgYzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVzNy41LTMuMzU4LDcuNS03LjV2LTguNDk4aDQuMjgydjUzLjE2aC03Ljc1N2MtNi4zNTcsMC0xMS41Myw1LjE3Mi0xMS41MywxMS41MyAgIGMwLDEuMTQzLTAuNTg0LDEuODk3LTAuOTM0LDIuMjQ3Yy0wLjM0OSwwLjM0OC0xLjEwNCwwLjkzMy0yLjI0NiwwLjkzM2gtMzMuMXYtMzcuODQ2YzMuOTU0LDEuMTA2LDguMTE4LDEuNzAyLDEyLjQyLDEuNzAyICAgYzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41Yy0xNy4xODIsMC0zMS4xNjEtMTMuOTc5LTMxLjE2MS0zMS4xNnYtMi40MDNjMC03LjExMi01Ljc4Ni0xMi44OTctMTIuODk3LTEyLjg5NyAgIHMtMTIuODk3LDUuNzg2LTEyLjg5NywxMi44OTd2MTQuMDQyYzAsOC45NTUtNy4yODUsMTYuMjQtMTYuMjQsMTYuMjRjLTAuMDgsMC0wLjE0NC0wLjA2NS0wLjE0NC0wLjE0NXYtNDkuMDA2ICAgYzAtNS40NTgsNC40NDEtOS44OTksOS44OTktOS44OTloNDguNDE2YzAuODc2LDAsMS43MTgsMC4yNjcsMi40MzMsMC43NzNMMjk0LjI2NCwzODcuOTc5eiBNMjcyLjU4NiwyMzguNzYgICBjMCwxLjY5Mi0wLjY1OCwzLjI4Mi0xLjg1NCw0LjQ3N2MtMS4xOTQsMS4xOTUtMi43ODQsMS44NTMtNC40NzcsMS44NTNjLTQuMTQzLDAtNy41LDMuMzU4LTcuNSw3LjVzMy4zNTcsNy41LDcuNSw3LjVoMy40ICAgYzMuNDksMCw2LjMzLDIuODQsNi4zMyw2LjMzYzAsMS42OTItMC42NTgsMy4yODItMS44NTQsNC40NzdjLTEuMTk0LDEuMTk1LTIuNzg0LDEuODUzLTQuNDc3LDEuODUzaC05LjUzICAgYy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41YzMuNDk2LDAsNi4zNCwyLjg0NCw2LjM0LDYuMzRjMCwxLjY4Ny0wLjY2MiwzLjI4MS0xLjg0Myw0LjQ2NyAgIGMtMS4yMDYsMS4yMDItMi44MDQsMS44NjMtNC40OTcsMS44NjNoLTguMTZjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVzMy4zNTgsNy41LDcuNSw3LjVjNS42MDEsMCw4LjQ1Myw2LjgzLDQuNDc3LDEwLjgwNyAgIGMtMy41MDIsMy41MDItMS42MjMsMS4xOTgtMTA4LjA4NywxLjg1NGMtMS43NTMsMC0zLjE4LTEuNDI3LTMuMTgtMy4xOGMwLTYuMzU3LTUuMTcyLTExLjUzLTExLjUzLTExLjUzaC03Ljc1M3YtNTMuMTZoMTEuNzgzICAgYzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjV2LTIuMDdjMC01Ljk1LDIuODk4LTExLjU0Niw3Ljc1OC0xNC45NzVsMjguNzE3LTIwLjI5MmMwLjcwMy0wLjQ5OSwxLjUzOC0wLjc2MywyLjQxNS0wLjc2M2gzMS4wNDIgICB2Mi44MTZoLTE0LjkxNGMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNXMzLjM1OCw3LjUsNy41LDcuNWg0MS42MTRjMC4wMjYsMCwwLjA1MSwwLjAwNCwwLjA3NywwLjAwNGgyNC4zNyAgIEMyNjkuNzQ3LDIzMi40MywyNzIuNTg2LDIzNS4yNywyNzIuNTg2LDIzOC43NnoiLz4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L3N2Zz4K",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                referee_friend: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMS45OTcgNTExLjk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk5NyA1MTEuOTk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRDc4NzVGOyIgZD0iTTMzOS40MzksMjM1LjE1N1YxMTkuMjI1aC0xMDEuNzd2ODkuNzk5YzAsMjYuNjc0LDIxLjYyNCw0OC4yOTgsNDguMjk3LDQ4LjI5OGgxLjczN3YyOC4zMjMgICBjMCwxOC4yMzUsMTQuNzgzLDMzLjAxNywzMy4wMTgsMzMuMDE3aDguOTUzYzE4LjIzNSwwLDMzLjAxOC0xNC43ODIsMzMuMDE4LTMzLjAxN3YtNTAuNDg2SDMzOS40Mzl6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDc1RDZEOyIgZD0iTTMxOC40MDcsMTM3LjEyNmgtODAuNzM4VjU0LjAwN2gxMDIuODE3YzI4Ljg0NiwwLDUyLjIzMSwyMy4zODQsNTIuMjMxLDUyLjIzMXYxMDkuMjE3ICAgYzAsMTcuNDczLTE0LjE2NCwzMS42MzctMzEuNjM3LDMxLjYzN2gtMjEuOTU5Yy0xNS4xMjUsMC0yNy4zODYtMTIuMjYxLTI3LjM4Ni0yNy4zODZ2LTM1Ljg0MWMwLTMuNjg1LDIuOTg3LTYuNjczLDYuNjczLTYuNjczaDAgICBjMTEuMDY0LDAsMjAuMDMyLTguOTY5LDIwLjAzMi0yMC4wMzJ2MEMzMzguNDM5LDE0Ni4wOTUsMzI5LjQ3MSwxMzcuMTI2LDMxOC40MDcsMTM3LjEyNnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMyQzNGNEY7IiBkPSJNMzQwLjQ4Niw1NC4wMDdoLTIyLjVjMjguODQ2LDAsNTIuMjMxLDIzLjM4NSw1Mi4yMzEsNTIuMjMxdjEwOS4yMTcgICBjMCwxNy4zODItMTQuMDE5LDMxLjQ4NC0zMS4zNjYsMzEuNjNjMC4wOTEsMC4wMDEsMC4xOCwwLjAwNywwLjI3MSwwLjAwN2gyMS45NTljMTcuNDczLDAsMzEuNjM3LTE0LjE2NCwzMS42MzctMzEuNjM3VjEwNi4yMzcgICBDMzkyLjcxNyw3Ny4zOTEsMzY5LjMzMiw1NC4wMDcsMzQwLjQ4Niw1NC4wMDd6Ii8+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMkJCNEYzOyIgZD0iTTI2NC45NzgsNTA0LjQ5N0g4My40OTNWMzQ3LjAxYzAtMzcuMzUsMzAuMjc4LTY3LjYyNyw2Ny42MjctNjcuNjI3aDQ2LjIzMSAgICBjMzcuMzUsMCw2Ny42MjcsMzAuMjc4LDY3LjYyNyw2Ny42MjdWNTA0LjQ5N3oiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMTY4N0M0OyIgZD0iTTE5Ny4zNSwyNzkuMzgzaC0yMy4xNzljMzQuMjYyLDAsNjIuMDM2LDI3Ljc3NSw2Mi4wMzYsNjIuMDM2djE2My4wNzhoMjguNzdWMzQ3LjAxICAgIEMyNjQuOTc4LDMwOS42NjEsMjM0LjcsMjc5LjM4MywxOTcuMzUsMjc5LjM4M3oiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRjJBMDc3OyIgZD0iTTE3OC4wNzEsMzE4LjY2MUwxNzguMDcxLDMxOC42NjFjLTIwLjcwOCwwLTM3LjQ5NC0xNi43ODctMzcuNDk0LTM3LjQ5NHYtNzAuMTg4aDc0Ljk4OXY3MC4xODggICAgQzIxNS41NjYsMzAxLjg3NCwxOTguNzc5LDMxOC42NjEsMTc4LjA3MSwzMTguNjYxeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0NBQTsiIGQ9Ik0yODcuNzA3LDEwMC41MTZ2NzguNzYyYzAsMjMuOTU0LTkuNzA1LDQ1LjY0Ny0yNS40MDQsNjEuMzM0ICAgIGMtMTUuNjk5LDE1LjcxMS0zNy4zOTMsMjUuNDE2LTYxLjM0NiwyNS40MTZjLTQ3LjkxOSwwLTg2Ljc2Mi0zOC44NDMtODYuNzYyLTg2Ljc1di0xLjI4MUg5OC4yNjUgICAgYy03Ljg1NiwwLTE0LjIyNS02LjM1Ny0xNC4yMjUtMTQuMjEydi05LjE4NWMwLTUuODAxLDMuNDY5LTEwLjc4LDguNDQ4LTEyLjk5Mmg5LjY2OGMyLjg3NiwwLDUuNjU2LTAuNDIzLDguMjc5LTEuMjMzICAgIGMxLjI5My0wLjM4NywyLjU1LTAuODcsMy43NTktMS40NWM5LjY4MS00LjUyLDE2LjM3Ni0xNC4zNDYsMTYuMzc2LTI1Ljczdi00Ljk0M2MwLTQuMjc4LDMuNDU2LTcuNzM1LDcuNzM1LTcuNzM1SDI4Ny43MDd6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0YyQTA3NzsiIGQ9Ik0yNjEuMDY4LDEwMC41MTZ2NzguNzYyYzAsMjMuOTU0LTkuNzA1LDQ1LjY0Ny0yNS40MDQsNjEuMzM1ICAgIGMtMTIuNzMxLDEyLjc0LTI5LjQwNCwyMS41MjktNDguMDI3LDI0LjM5N2M0LjM0MiwwLjY2OSw4Ljc5LDEuMDE5LDEzLjMxOSwxLjAxOWMyMy45NTQsMCw0NS42NDctOS43MDUsNjEuMzQ3LTI1LjQxNiAgICBjMTUuNjk5LTE1LjY4NywyNS40MDQtMzcuMzgxLDI1LjQwNC02MS4zMzV2LTc4Ljc2MkgyNjEuMDY4eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGOURDNkE7IiBkPSJNMzM4LjQ0MiwxNy44MDJWNTkuMjhjMCwyMi43ODEtMTguNDU1LDQxLjIzNi00MS4yMzYsNDEuMjM2SDEzOC4zMDUgICAgYy00LjI3OCwwLTcuNzM1LDMuNDU2LTcuNzM1LDcuNzM1djQuOTQzYzAsMTEuMzg1LTYuNjk1LDIxLjIxLTE2LjM3NiwyNS43M2MtMS4yMDksMC41OC0yLjQ2NiwxLjA2My0zLjc1OSwxLjQ1ICAgIGMtMi42MjMsMC44MS01LjQwMiwxLjIzMy04LjI3OSwxLjIzM0g5MS44OTZWNjAuOTEyYzAtMTQuOTc0LDExLjIxNS0yNy41NTUsMjYuMDgxLTI5LjI3MUwzMjYuOTYxLDcuNTY2ICAgIEMzMzMuMDc2LDYuODY1LDMzOC40NDIsMTEuNjUxLDMzOC40NDIsMTcuODAyeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNFNUFDNTE7IiBkPSJNMzI2Ljk2MSw3LjU2NkwzMDcuMTMzLDkuODVjMi4yOSwxLjg4MSwzLjc3Nyw0LjcyMywzLjc3Nyw3Ljk1M1Y1OS4yOCAgICBjMCwyMi43ODItMTguNDU1LDQxLjIzNi00MS4yMzYsNDEuMjM2aDI3LjUzMmMyMi43ODEsMCw0MS4yMzYtMTguNDU1LDQxLjIzNi00MS4yMzZWMTcuODAyICAgIEMzMzguNDQyLDExLjY1MSwzMzMuMDc2LDYuODY1LDMyNi45NjEsNy41NjZ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojNzVEQzVFOyIgZD0iTTQxNS45NDEsNTA0LjQ5N0gyMzQuNDU2VjM0Ny4wMWMwLTM3LjM1LDMwLjI3OC02Ny42MjcsNjcuNjI3LTY3LjYyN2g0Ni4yMzEgICAgYzM3LjM1LDAsNjcuNjI3LDMwLjI3OCw2Ny42MjcsNjcuNjI3VjUwNC40OTd6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzJBQUQ1MjsiIGQ9Ik0zNDguMzE0LDI3OS4zODNoLTIzLjE3OWMzNC4yNjIsMCw2Mi4wMzYsMjcuNzc1LDYyLjAzNiw2Mi4wMzZ2MTYzLjA3OGgyOC43N1YzNDcuMDEgICAgQzQxNS45NDEsMzA5LjY2MSwzODUuNjYzLDI3OS4zODMsMzQ4LjMxNCwyNzkuMzgzeiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzE2ODdDNDsiIGQ9Ik0xMDUuMDI4LDM1My43OTZMMTA1LjAyOCwzNTMuNzk2YzAsMTkuNzU2LDE2LjAxNSwzNS43NzEsMzUuNzcxLDM1Ljc3MWg1OS43Mzd2LTcxLjU0MmgtNTkuNzM3ICAgQzEyMS4wNDMsMzE4LjAyNSwxMDUuMDI4LDMzNC4wNCwxMDUuMDI4LDM1My43OTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMkFBRDUyOyIgZD0iTTMwMC44MiwzMDIuNDY2TDMwMC44MiwzMDIuNDY2Yy0yMC4xMDgsMC0zNi40MDksMTYuMzAxLTM2LjQwOSwzNi40MDl2NjAuODA0aDcyLjgxOXYtNjAuODA0ICAgQzMzNy4yMjksMzE4Ljc2OCwzMjAuOTI4LDMwMi40NjYsMzAwLjgyLDMwMi40NjZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQ0FBOyIgZD0iTTM0Ny4wODUsMzMyLjExM0wzNDcuMDg1LDMzMi4xMTNIMjAwLjUzNnY0My4zNjZoMTQ2LjU0OWwwLDBjMCw1LjI0OSw0LjI1NSw5LjUwNCw5LjUwNCw5LjUwNCAgIGg0Ni43ODZjMTMuODgsMCwyNS4xMzItMTEuMjUyLDI1LjEzMi0yNS4xMzJ2LTEyLjEwOWMwLTEzLjg4LTExLjI1Mi0yNS4xMzItMjUuMTMyLTI1LjEzMmgtNDYuNzg2ICAgQzM1MS4zNCwzMjIuNjA5LDM0Ny4wODUsMzI2Ljg2NCwzNDcuMDg1LDMzMi4xMTN6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRDc4NzVGOyIgZD0iTTI3OS4xMzcsMzk5LjY3OXYxNS4wOTdjMCw2LjkzNi01LjYyMiwxMi41NTgtMTIuNTU4LDEyLjU1OGgtNjIuMDYxbDAsMCAgIGMtMy45NzktNi4zMTctMTAuOTIzLTEwLjE1LTE4LjM4OS0xMC4xNWgtMjkuNTM3Yy0xNS43NDEsMC0yOC41MDIsMTIuNzYxLTI4LjUwMiwyOC41MDJ2Ni42NjEgICBjMCwxNS43NDEsMTIuNzYxLDI4LjUwMiwyOC41MDIsMjguNTAyaDI5LjUzN2M3LjQ2NiwwLDE0LjQwOS0zLjgzMiwxOC4zODktMTAuMTQ5bDAsMGg3NC42MTloMTkuMTk1ICAgYzEzLjM0OSwwLDI0LjE3MS0xMC44MjIsMjQuMTcxLTI0LjE3MXYtMTkuMTk1di0yNy42NTVIMjc5LjEzN3oiLz4KCTxnPgoJCTxwYXRoIGQ9Ik0xODAuNjUxLDE5OS44MzJjOC45MjcsOS44MDgsMjEuNjUzLDE1LjQzMywzNC45MTUsMTUuNDMzYzEzLjI2MiwwLDI1Ljk4OC01LjYyNSwzNC45MTUtMTUuNDMzICAgIGMyLjc4OC0zLjA2MywyLjU2NS03LjgwNy0wLjQ5OC0xMC41OTZjLTMuMDYyLTIuNzg2LTcuODA2LTIuNTY1LTEwLjU5NSwwLjQ5OGMtNi4wOTEsNi42OTItMTQuNzc0LDEwLjUzLTIzLjgyMiwxMC41MyAgICBjLTkuMDQ4LDAtMTcuNzMtMy44MzgtMjMuODIyLTEwLjUzYy0yLjc4OC0zLjA2My03LjUzMi0zLjI4NS0xMC41OTUtMC40OThDMTc4LjA4NSwxOTIuMDI2LDE3Ny44NjMsMTk2Ljc2OSwxODAuNjUxLDE5OS44MzJ6Ii8+CgkJPHBhdGggZD0iTTI1Ni45NTksMTUyLjczM2M0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41di0zLjYyNmMwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTctNy41LDcuNXYzLjYyNiAgICBDMjQ5LjQ1OSwxNDkuMzc1LDI1Mi44MTcsMTUyLjczMywyNTYuOTU5LDE1Mi43MzN6Ii8+CgkJPHBhdGggZD0iTTE3NC4xNzIsMTUyLjczM2M0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41di0zLjYyNmMwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTctNy41LDcuNXYzLjYyNiAgICBDMTY2LjY3MiwxNDkuMzc1LDE3MC4wMywxNTIuNzMzLDE3NC4xNzIsMTUyLjczM3oiLz4KCQk8cGF0aCBkPSJNNDE1Ljk0MSw0MDUuMjI0Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41djkxLjc3M2MwLDQuMTQzLDMuMzU4LDcuNSw3LjUsNy41czcuNS0zLjM1Nyw3LjUtNy41di05MS43NzMgICAgQzQyMy40NDEsNDA4LjU4MSw0MjAuMDgzLDQwNS4yMjQsNDE1Ljk0MSw0MDUuMjI0eiIvPgoJCTxwYXRoIGQ9Ik00MTcuODI4LDMxOC40OTVjLTguNjUxLTIxLjA4My0yNi4zODctMzYuODIzLTQ3LjYzOC00My4zMjN2LTIxLjY1NmMxNy4zMTItNC4xMTEsMzAuMDMtMTkuNjM4LDMwLjAzLTM4LjA1OXYtMTA5LjIyICAgIGMwLTIxLjA1NC0xMC43NTgtNDAuMTUzLTI4Ljc3OS01MS4wOTJjLTMuNTQtMi4xNDktOC4xNTMtMS4wMjEtMTAuMzAzLDIuNTJjLTIuMTQ5LDMuNTQxLTEuMDIxLDguMTUzLDIuNTIsMTAuMzAzICAgIGMxMy41MDEsOC4xOTYsMjEuNTYyLDIyLjUwMiwyMS41NjIsMzguMjd2MTA5LjIyYzAsMTIuODY4LTEwLjA2MiwyMy40NTQtMjIuOTU4LDI0LjEwMmMtMC4zODksMC4wMjItMC43ODYsMC4wMjgtMS4xODIsMC4wMjggICAgaC0yMS45NmMtMTAuOTY3LDAtMTkuODktOC45MTgtMTkuODktMTkuODh2LTM1LjAzMWM3LjA1Ni0wLjIwNSwxMy42NTEtMy4wNDksMTguNjM2LTguMDQ4YzUuMjA3LTUuMTkxLDguMDc0LTEyLjEwNiw4LjA3NC0xOS40NzEgICAgYzAtMTUuMzYxLTEyLjQ3Mi0yNy41My0yNy41My0yNy41M2gtMjMuMjA0di0yMS42MTFoMmMyNi44NzMsMCw0OC43MzYtMjEuODYzLDQ4LjczNi00OC43MzZWMTcuODAyICAgIGMwLTUuMDY3LTIuMTctOS45MDktNS45NTUtMTMuMjg0cy04LjgzOC00Ljk3OC0xMy44ODUtNC40MDNsLTE2MS4yODYsMTguNThjLTQuMTE1LDAuNDc1LTcuMDY2LDQuMTk0LTYuNTkyLDguMzEgICAgczQuMTk4LDcuMDY0LDguMzA5LDYuNTkzbDE2MS4yODItMTguNThjMS4wODMtMC4xMjgsMS44MzcsMC4zODIsMi4xODgsMC42OTVjMC4zNTEsMC4zMTIsMC45MzgsMSwwLjkzOCwyLjA5VjU5LjI4ICAgIGMwLDE4LjYwMy0xNS4xMzQsMzMuNzM2LTMzLjczNiwzMy43MzZoLTkuNUgxMzguMzA1Yy04LjQsMC0xNS4yMzUsNi44MzUtMTUuMjM1LDE1LjIzNXY0Ljk0MiAgICBjMCwxMS4zNDYtOS4yMzksMjAuOTEzLTIwLjkxMywyMC45MTNoLTIuNzYxVjYwLjkxMWMwLTExLjE2LDguMzU4LTIwLjU0MSwxOS40MzktMjEuODJsMTguMDM0LTIuMDc3ICAgIGM0LjExNS0wLjQ3NSw3LjA2Ny00LjE5NCw2LjU5My04LjMxYy0wLjQ3NC00LjExNC00LjE5OC03LjA2LTguMzA5LTYuNTkzbC0xOC4wMzcsMi4wNzhjLTE4LjY1NCwyLjE1NC0zMi43MiwxNy45NDEtMzIuNzIsMzYuNzIyICAgIHY3Ni45ODZjLTQuODkyLDQuMDY0LTcuODU1LDEwLjE1LTcuODU1LDE2LjcwMnY5LjE4NmMwLDExLjk3Miw5Ljc0NiwyMS43MTIsMjEuNzI1LDIxLjcxMmg4LjYzMiAgICBjMS40OTgsMjIuODc5LDExLjIwMSw0My41NTQsMjYuMTgzLDU5LjExMnYyOS40N2MtMTUuMDE2LDMuNzEtMjguNjMzLDEyLjAzNC0zOC44NDksMjMuODY1ICAgIGMtMTEuNzYzLDEzLjYyMy0xOC4yNDEsMzEuMDQ4LTE4LjI0MSw0OS4wNjR2MTU3LjQ5YzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVzNy41LTMuMzU3LDcuNS03LjV2LTE1Ny40OSAgICBjMC0xNC40MTksNS4xODMtMjguMzYxLDE0LjU5NC0zOS4yNjFjNy41MzMtOC43MjUsMTcuMzctMTUuMDY1LDI4LjI1OC0xOC4zMzFjMS40NzIsNy45MjgsNS4wMzMsMTUuMTc5LDEwLjEzNSwyMS4xMWgtMy4xNzkgICAgYy0yMy44NiwwLTQzLjI3MSwxOS40MTEtNDMuMjcxLDQzLjI3MWMwLDIzLjg1OSwxOS40MTEsNDMuMjcxLDQzLjI3MSw0My4yNzFoNTkuNzM3YzQuMTQyLDAsNy41LTMuMzU3LDcuNS03LjV2LTYuNTg4aDQ4Ljg3NSAgICB2MTYuNjk4YzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVoNy4yMjd2Ny41OTljMCwyLjc4OS0yLjI2OSw1LjA1OS01LjA1OCw1LjA1OUgyNDEuOTZ2LTE1LjI2N2MwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41ICAgIHMtNy41LDMuMzU3LTcuNSw3LjV2MTUuMjY3aC0xOC42NzljLTUuNTA3LTYuNDIyLTEzLjUxNi0xMC4xNDktMjIuMTUyLTEwLjE0OWgtMjkuNTM3Yy0xOS44NTIsMC0zNi4wMDIsMTYuMTUtMzYuMDAyLDM2LjAwMiAgICB2Ni42NjFjMCwxOS44NTIsMTYuMTUsMzYuMDAyLDM2LjAwMiwzNi4wMDJoMjkuNTM3YzguNjM1LDAsMTYuNjQ1LTMuNzI5LDIyLjE1Mi0xMC4xNDloMTguNjc5djI2LjI5N2MwLDQuMTQzLDMuMzU4LDcuNSw3LjUsNy41ICAgIHM3LjUtMy4zNTcsNy41LTcuNXYtMjYuMjk3aDU2LjM3MmMxNy40NjMsMCwzMS42NzEtMTQuMjA3LDMxLjY3MS0zMS42NzF2LTM5LjM1M2g3LjIyN2M0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41di0xMi4wMjUgICAgYzMuMDY2LDIuOTg3LDcuMjUxLDQuODMxLDExLjg1OSw0LjgzMWg0Ni43ODZjMTcuOTk0LDAsMzIuNjMyLTE0LjYzOSwzMi42MzItMzIuNjMzdi0xMi4xMDggICAgQzQzNi4wMDcsMzM0LjkzNSw0MjguNTg5LDMyMy44MzUsNDE3LjgyOCwzMTguNDk1eiBNMzE1LjAwMyw0NDYuNTNjMCw5LjE5Mi03LjQ3OSwxNi42NzEtMTYuNjcxLDE2LjY3MWgtNjMuODE0ICAgIGMtMC4wMiwwLTAuMDM4LTAuMDAzLTAuMDU4LTAuMDAzcy0wLjAzOCwwLjAwMy0wLjA1OCwwLjAwM2gtMjkuODg0Yy0yLjU3NywwLTQuOTczLDEuMzIyLTYuMzQ2LDMuNTAzICAgIGMtMi42MjIsNC4xNjItNy4xMjQsNi42NDYtMTIuMDQzLDYuNjQ2aC0yOS41MzdjLTExLjU4MSwwLTIxLjAwMi05LjQyMi0yMS4wMDItMjEuMDAydi02LjY2MWMwLTExLjU4LDkuNDIxLTIxLjAwMiwyMS4wMDItMjEuMDAyICAgIGgyOS41MzdjNC45MTksMCw5LjQyMSwyLjQ4NCwxMi4wNDIsNi42NDZjMS4zNzQsMi4xODEsMy43NywzLjUwMyw2LjM0NiwzLjUwM2gyOS44ODRjMC4wMiwwLDAuMDM4LDAuMDAzLDAuMDU4LDAuMDAzICAgIHMwLjAzOC0wLjAwMywwLjA1OC0wLjAwM2gzMi4wNjFjMTEuMDYsMCwyMC4wNTgtOC45OTgsMjAuMDU4LTIwLjA1OXYtNy41OTdoMjguMzY2VjQ0Ni41M3ogTTM5OS4yNzYsMzE1LjEwOWgtNDIuNjg3ICAgIGMtNi4yMjQsMC0xMS42NzUsMy4zNjQtMTQuNjM4LDguMzY3Yy02LjMwMi0xNi44ODYtMjIuNTY1LTI4LjUwOS00MS4xMzEtMjguNTA5Yy0xOC45NzgsMC0zNS41NDgsMTIuMTQ3LTQxLjUzMywyOS42NDZoLTEyLjk5OSAgICBjMy44MDItOS40MzksOS45OTItMTcuODgxLDE3Ljk4NC0yNC4zNTRjNy4zNS01Ljk1MywxNS43NTQtOS45OTEsMjQuNzY1LTExLjk2N2MwLjE1OS0wLjAyOSwwLjMxNS0wLjA2NCwwLjQ3MS0wLjEwMyAgICBjNC4wODMtMC44NjEsOC4yODYtMS4zMDIsMTIuNTczLTEuMzAyaDQ2LjIzQzM2OS4yNTMsMjg2Ljg4NywzODguNDM2LDI5Ny44NDUsMzk5LjI3NiwzMTUuMTA5eiBNMzI1Ljk3NywzMjQuNjEzaC01MC4zMTMgICAgYzUuMDEzLTguODM5LDE0LjUwNy0xNC42NDYsMjUuMTU2LTE0LjY0NlMzMjAuOTY0LDMxNS43NzMsMzI1Ljk3NywzMjQuNjEzeiBNMjA4LjAzNiwzMjQuNjEzdi02LjU4OCAgICBjMC0wLjk5Mi0wLjE5Ny0xLjkzNi0wLjU0Ny0yLjgwMmM2Ljk0OS02LjAwOSwxMS45ODEtMTQuMDg0LDE0LjI0My0yMy4xODJjNi44MzQsMy4wMiwxMy4wMiw3LjI4OCwxOC4zMDcsMTIuNjM0ICAgIGMtNC4xODEsNi4xMjQtNy40NTIsMTIuODUxLTkuNjcsMTkuOTM5SDIwOC4wMzZ6IE0yNTUuNzkzLDI1NS45NTZjNy4zMzMsNC43MSwxNS43Miw3LjY1MywyNC40MDcsOC41NjF2MTAuNjQgICAgYy05LjE5NSwyLjgtMTcuODM4LDcuMzQ2LTI1LjM3LDEzLjQ0NmMtMS43NzQsMS40MzctMy40NywyLjk1OC01LjA5OCw0LjU0M2MtNy42MTMtNy40MjQtMTYuNjU2LTEzLjEwNC0yNi42NjItMTYuNzMzdi01LjQ4MyAgICBDMjM0LjgzNywyNjguMTE0LDI0NS45MTgsMjYzLjA1MSwyNTUuNzkzLDI1NS45NTZ6IE0zMTguNDEsMTQ0LjYyN2MxMS4yLDAsMTYuNjg4LDEzLjU3OSw4Ljg0OSwyMS4zOTUgICAgYy0yLjM1NywyLjM2NC01LjUsMy42NjYtOC44NDksMy42NjZjLTcuODE5LDAtMTQuMTgsNi4zNjEtMTQuMTgsMTQuMTh2MzUuODRjMCwxOS4yMzIsMTUuNjUyLDM0Ljg4LDM0Ljg5LDM0Ljg4aDE2LjA3djE3LjYyOSAgICBjLTIuMjczLTAuMjEtNC41NjctMC4zMy02Ljg4LTAuMzNoLTQ2LjIzYy0yLjMwMywwLTQuNTk4LDAuMTE1LTYuODgsMC4zMjd2LTE0Ljg5NmMwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41aC0xLjczICAgIGMtNi4zOTMsMC0xMi41MTYtMS40MzgtMTguMDc0LTQuMTk4YzE3LjYxMy0xNy43NTMsMjcuMzExLTQxLjI5NCwyNy4zMTEtNjYuMzQydi0zNC42NUgzMTguNDF6IE0xMTQuMTk0LDE3MC40OTZIOTguMjY1ICAgIGMtMy43MDgsMC02LjcyNS0zLjAxMS02LjcyNS02LjcxMnYtOS4xODZjMC0yLjIwOSwxLjA4Ny00LjI1LDIuODUzLTUuNDkyaDcuNzYzYzE5LjgwNCwwLDM1LjkxMy0xNi4xMzUsMzUuOTEzLTM1LjkxM3YtNC45NDIgICAgYzAtMC4xMzcsMC4wOTktMC4yMzUsMC4yMzUtMC4yMzVoMTQxLjkwMnY3MS4yNjJjMCwyMS4xNzktOC4yNDEsNDEuMDc3LTIzLjIwOSw1Ni4wMzNjLTEuOTQ3LDEuOTQ4LTMuOTgxLDMuNzc2LTYuMDg3LDUuNDkzICAgIGMtMC4wMTEsMC4wMDktMC4wMjIsMC4wMTctMC4wMzMsMC4wMjZjLTE0LjA3MywxMS40NjItMzEuNTEzLDE3LjY5OS00OS45MjIsMTcuNjk5Yy00My43MDYsMC03OS4yNjMtMzUuNTUyLTc5LjI2My03OS4yNTF2LTEuMjgxICAgIEMxMjEuNjk0LDE3My44NTQsMTE4LjMzNiwxNzAuNDk2LDExNC4xOTQsMTcwLjQ5NnogTTE0OC4wOCwyODEuMTY3di0yMy45MDRjMTUuMDg4LDEwLjI2MSwzMy4yOTQsMTYuMjY1LDUyLjg3NiwxNi4yNjUgICAgYzIuMzg2LDAsNC43NTgtMC4wODksNy4xMTMtMC4yNjN2Ny45MDJjMCwxNC4yNS0xMC4wMDksMjYuNDkyLTIzLjg4NywyOS4zNTdoLTEyLjIyNSAgICBDMTU4LjA4NiwzMDcuNjYxLDE0OC4wOCwyOTUuNDE5LDE0OC4wOCwyODEuMTY3eiBNMTkzLjAzNiwzODIuMDY3aC01Mi4yMzdjLTE1LjU4OSwwLTI4LjI3MS0xMi42ODItMjguMjcxLTI4LjI3MSAgICBzMTIuNjgyLTI4LjI3MSwyOC4yNzEtMjguMjcxaDMwLjMzNGMwLjAyOCwwLDAuMDU3LDAuMDA0LDAuMDg2LDAuMDA0YzAuMDMsMCwwLjA1OS0wLjAwMywwLjA4OC0wLjAwNGgxMy41MjcgICAgYzAuMDMsMCwwLjA1OSwwLjAwNCwwLjA4OCwwLjAwNGMwLjAyOCwwLDAuMDU3LTAuMDA0LDAuMDg2LTAuMDA0aDguMDI4djYuNTg4djQzLjM2NlYzODIuMDY3eiBNMzI5LjczLDM4Mi45Nzl2OS4xOThoLTU3LjgyICAgIHYtOS4xOThIMzI5LjczeiBNNDIxLjAwNywzNTkuODVjMCw5LjcyMy03LjkxLDE3LjYzMy0xNy42MzIsMTcuNjMzaC00Ni43ODZjLTEuMTA1LDAtMi4wMDQtMC44OTktMi4wMDQtMi4wMDQgICAgYzAtNC4xNDMtMy4zNTgtNy41LTcuNS03LjVoLTkuODM2Yy0wLjAwNywwLTAuMDEzLTAuMDAxLTAuMDE5LTAuMDAxcy0wLjAxMywwLjAwMS0wLjAxOSwwLjAwMWgtNzIuNzgxICAgIGMtMC4wMDcsMC0wLjAxMy0wLjAwMS0wLjAxOS0wLjAwMXMtMC4wMTMsMC4wMDEtMC4wMTksMC4wMDFoLTU2LjM1NXYtMjguMzY2aDI3Ljk1N2MwLjA0MSwwLjAwMSwwLjA4MywwLjAwNywwLjEyNCwwLjAwNyAgICBjMC4wMjcsMCwwLjA1My0wLjAwNywwLjA4LTAuMDA3aDI4Ljg0N2MwLjA2NSwwLDAuMTMxLDAuMDAyLDAuMTk2LDBoNzEuMjE5YzAuMDQ1LDAuMDAxLDAuMDg4LDAuMDA2LDAuMTMzLDAuMDA2ICAgIGMwLjA0MiwwLDAuMDg1LTAuMDA1LDAuMTI3LTAuMDA2aDEwLjM2NmM0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41YzAtMS4xMDQsMC44OTktMi4wMDQsMi4wMDQtMi4wMDRoNDYuNzg2ICAgIGM5LjcyMywwLDE3LjYzMiw3LjkxLDE3LjYzMiwxNy42MzNWMzU5Ljg1eiIvPgoJPC9nPgo8L2c+CgoKCgoKCgoKCgoKCgoKCjwvc3ZnPgo=",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
                referrals_total_number: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48dGl0bGU+dmFsdWUgY3VzdG9tZXJzIHVzZXJzIHZpZXdlcjwvdGl0bGU+PHBhdGggZD0iTTM2MiwzNDQuMzNsOS44MS01LjE4LDU5LjA1LTMxLjg0LDcuMDktMy44M2EzMi4yMzUsMzIuMjM1LDAsMCwxLDQyLjk0LDExLjc0TDM0MS43Myw0MTAuNzdhOTcuNDQ3LDk3LjQ0NywwLDAsMS02MC42MSw4LjU2bC04MC40NC0xNC44MmEyOS45MzMsMjkuOTMzLDAsMCwwLTIxLjg5LDIuOTFsLTQzLjU2LDI3LjU0LTMwLjQ0LTk5LjgzLjI2LS4wOGE1Mi4xNzcsNTIuMTc3LDAsMCwwLDI1LjI1LTEyLjM2bDEzLjMzLTExLjg2YTg5LjA4LDg5LjA4LDAsMCwxLDkyLjMzLTkuMDJsNS41MiwyLjY3YTYzLjYwNSw2My42MDUsMCwwLDAsMjcuNyw2LjM1aDUzLjUzQTM5LjgwOSwzOS44MDksMCwwLDEsMzYyLDM0NC4zM1oiIHN0eWxlPSJmaWxsOiNmN2NhYTUiLz48cGF0aCBkPSJNNDM2LDE5NC43MXYzOC45NEgzMjkuNDlWMTg5LjE2YTQ0LjI2NSw0NC4yNjUsMCwwLDAtNy41Mi0yNC43NSwzOC43NzgsMzguNzc4LDAsMCwxLDIzLjQ4LTguNjMsMzMuNTI5LDMzLjUyOSwwLDAsMCw1Mi45LDEuMyw4LjE4NCw4LjE4NCwwLDAsMSwxLjEtMS4yNEEzOC45NTIsMzguOTUyLDAsMCwxLDQzNiwxOTQuNzFaIiBzdHlsZT0iZmlsbDojZjhlYzdkIi8+PHBhdGggZD0iTTQzMC44MSwzMDcuMjJsLjA1LjA5LTU5LjA1LDMxLjg0TDM2MiwzNDQuMzNhMzkuNjQ4LDM5LjY0OCwwLDAsMC0xMy0yMy41N2wzNy45NS0yMC40NSw5LjY2LTUuMjFDNDA4LjU0LDI4OS4wNSw0MjQuMiwyOTUuNTksNDMwLjgxLDMwNy4yMloiIHN0eWxlPSJmaWxsOiNlZGIyODgiLz48cGF0aCBkPSJNNDA2LjM1LDkwLjg3djE3LjMxYTM0LjYxLDM0LjYxLDAsMCwxLTY5LjIyLDBWOTAuODdhMzQuNjEsMzQuNjEsMCwxLDEsNjkuMjIsMFoiIHN0eWxlPSJmaWxsOiNmOGVjN2QiLz48cGF0aCBkPSJNMzg2LjQ4LDI5OS40M2wuNDcuODhMMzQ5LDMyMC43NmEzOS41NjYsMzkuNTY2LDAsMCwwLTI2LjI5LTkuOTNIMzEwLjg0bDMxLjU2LTE3LjE2QTM2LjQ3LDM2LjQ3LDAsMCwxLDM4Ni40OCwyOTkuNDNaIiBzdHlsZT0iZmlsbDojZWRiMjg4Ii8+PHBhdGggZD0iTTMyMS45NywxNjQuNDFhNDQuMjY1LDQ0LjI2NSwwLDAsMSw3LjUyLDI0Ljc1djY0LjI2SDE4Mi42N1YxODkuMTZhNDQuNDgxLDQ0LjQ4MSwwLDAsMSw0My4zNy00NC40OCwzOC4zMDcsMzguMzA3LDAsMCwwLDYwLjQ0LDEuNDksMTAuNTA5LDEwLjUwOSwwLDAsMSwxLjI1LTEuNDJBNDQuNSw0NC41LDAsMCwxLDMyMS45NywxNjQuNDFaIiBzdHlsZT0iZmlsbDojZTQ4ZTY2Ii8+PHBhdGggZD0iTTI5NS42Miw3MC41M1Y5MC4zYTM5LjU0LDM5LjU0LDAsMSwxLTc5LjA4LDBWNzAuNTNhMzkuNTQsMzkuNTQsMCwxLDEsNzkuMDgsMFoiIHN0eWxlPSJmaWxsOiNlNDhlNjYiLz48cGF0aCBkPSJNMTg4LjQ5LDE2My4yMmwxLjU2LDEuMzlhNDQuMzExLDQ0LjMxMSwwLDAsMC03LjM4LDI0LjU1djQ0LjQ5SDc2VjE5NC43MWEzOC45NDMsMzguOTQzLDAsMCwxLDM3Ljk2LTM4LjkzLDMzLjUzOSwzMy41MzksMCwwLDAsNTIuOTEsMS4zLDguNTE2LDguNTE2LDAsMCwxLDEuMDktMS4yNEEzOC43MSwzOC43MSwwLDAsMSwxODguNDksMTYzLjIyWiIgc3R5bGU9ImZpbGw6I2Y4ZWM3ZCIvPjxwYXRoIGQ9Ik0xNzQuODcsOTAuODd2MTcuMzFhMzQuNjEsMzQuNjEsMCwwLDEtNjkuMjIsMFY5MC44N2EzNC42MSwzNC42MSwwLDAsMSw2OS4yMiwwWiIgc3R5bGU9ImZpbGw6I2Y4ZWM3ZCIvPjxwYXRoIGQ9Ik0xMzUuMjMsNDM0Ljk2bDE0LjA0LDQ2LjA1SDUyLjU5TDMxLjExLDMwNC44NUg5NS41Nmw5LjIzLDMwLjI4Wm0tMjYuNDgsMTUuMjNhMTIuODksMTIuODksMCwxLDAtMTIuODksMTIuODlBMTIuODg5LDEyLjg4OSwwLDAsMCwxMDguNzUsNDUwLjE5WiIgc3R5bGU9ImZpbGw6I2U0OGU2NiIvPjxjaXJjbGUgY3g9Ijk1Ljg2IiBjeT0iNDUwLjE5IiByPSIxMi44OSIgc3R5bGU9ImZpbGw6I2Y4ZWM3ZCIvPjxwYXRoIGQ9Ik00MzUuMSwyOTguMmwtMi4zNzEsMS4yNzljLTkuNTc4LTExLjYzNi0yNi4xODItMTYuMTQ1LTM4LjgzMi05LjczMmwtLjEzMy4wNy01LjYsMy4wMTZhNDIuNTIzLDQyLjUyMywwLDAsMC00OC43LTQuNEwzMDkuMzEzLDMwNC44M0gyNjkuMThhNTcuOTI3LDU3LjkyNywwLDAsMS0yNS4wODYtNS43NTFsLTUuNTIzLTIuNjcyYTk0LjcyLDk0LjcyLDAsMCwwLTk4LjU0OSw5LjYyOWMtLjEzLjEtLjI1OC4yLS4zOC4zMTJsLTEzLjMzNCwxMS44NjNhNDYuMTQ3LDQ2LjE0NywwLDAsMS0xNy40MzYsOS43MjZMMTAxLjMsMzAzLjFhNiw2LDAsMCwwLTUuNzM5LTQuMjVIMzEuMTFhNiw2LDAsMCwwLTUuOTU2LDYuNzI2bDIxLjQ4LDE3Ni4xNmE2LDYsMCwwLDAsNS45NTYsNS4yNzRoOTYuNjhhNiw2LDAsMCwwLDUuNzM5LTcuNzVsLTEyLjctNDEuNjc0LDM5LjU1LTI1YTIzLjg0NSwyMy44NDUsMCwwLDEsMTcuMzcxLTIuMjVjLjEyMi4wMy4yNDQuMDU3LjM2OC4wNzlsODAuNDU4LDE0LjgyNGExMDQuMTUsMTA0LjE1LDAsMCwwLDY0LjM0Mi05LjA4OCw1Ljg2Nyw1Ljg2NywwLDAsMCwuNzM0LS40M2wxMzkuMTU5LTk1LjU1YTYsNiwwLDAsMCwxLjc0NC04LjA0MUEzOC4xNzUsMzguMTc1LDAsMCwwLDQzNS4xLDI5OC4yWm0tMzUuNzEzLDIuMjE5YzcuMzE4LTMuNjY4LDE2LjUyNi0uNjYsMjIuNCw0Ljk1OGwtNTIuNzgzLDI4LjQ2Ny0zLjA4NywxLjYzYTQ1LjgzNCw0NS44MzQsMCwwLDAtNy4yMS0xMy4xMzRabS01NC4xMTktMS40NzljLjA0Ny0uMDI2LjEtLjA1My4xNDItLjA4MWEzMC41MTUsMzAuNTE1LDAsMCwxLDMxLjAzOS4yOWwtMjYuOCwxNC40NDRhNDUuNjMyLDQ1LjYzMiwwLDAsMC0xNy4xNjItNy43Wk01Ny45LDQ3NS4wMSwzNy44ODcsMzEwLjg1SDkxLjExNmw1MC4wNTIsMTY0LjE2Wm0yODAuNzg5LTY5LjQzMmE5Mi4wNjksOTIuMDY5LDAsMCwxLTU2LjQ4NCw3Ljg1MmwtODAuMjYzLTE0Ljc4OGEzNS44LDM1LjgsMCwwLDAtMjYuMDg2LDMuNTQzYy0uMDkyLjA1Mi0uMTg0LjEwNi0uMjc0LjE2NGwtMzYuOTA5LDIzLjMzNS0yNi4zLTg2LjI1YTU4LjE1NCw1OC4xNTQsMCwwLDAsMjEuOTExLTEyLjI2MWwxMy4xNDMtMTEuNjk0YTgyLjc2Myw4Mi43NjMsMCwwLDEsODUuOTE2LTguMjY4bDUuNTIsMi42NzFhNzAuMDExLDcwLjAxMSwwLDAsMCwzMC4zMTMsNi45NDhoNTMuNTNhMzMuODEzLDMzLjgxMywwLDAsMSwzMy4yLDI3LjVsLTM4Ljc5LTEuNzZhMjMyLjQ3OSwyMzIuNDc5LDAsMCwwLTQyLjIyNCwxLjk1Miw2LDYsMCwxLDAsMS42NDgsMTEuODg2LDIxOS44NTUsMjE5Ljg1NSwwLDAsMSw0MC4wMzQtMS44NDlsNDUuNjUxLDIuMDdjLjA5LDAsLjE4LjAwNi4yNzEuMDA2YTYsNiwwLDAsMCw2LTZjMC0uOTY3LS4wMzktMS45MzItLjEtMi44OTRsNi4yNTctMy4zTDQ0MC44LDMwOC43NTlhMjYuMTg4LDI2LjE4OCwwLDAsMSwzMS41MzUsNS4wNTNaIiBzdHlsZT0iZmlsbDojNjMzMTZkIi8+PHBhdGggZD0iTTc2Ljk3LDQ1MC4xOUExOC44OSwxOC44OSwwLDEsMCw5NS44Niw0MzEuMywxOC45MTEsMTguOTExLDAsMCwwLDc2Ljk3LDQ1MC4xOVptMTguODktNi44OWE2Ljg5LDYuODksMCwxLDEtNi44OSw2Ljg5QTYuOSw2LjksMCwwLDEsOTUuODYsNDQzLjNaIiBzdHlsZT0iZmlsbDojNjMzMTZkIi8+PHBhdGggZD0iTTMwMS42Miw5MC4zVjcwLjUzYTQ1LjU0LDQ1LjU0LDAsMCwwLTkxLjA4LDBWOTAuM2E0NS41NCw0NS41NCwwLDEsMCw5MS4wOCwwWm0tNzkuMDgsMFY3MC41M2EzMy41NCwzMy41NCwwLDEsMSw2Ny4wOCwwVjkwLjNhMzMuNTQsMzMuNTQsMCwxLDEtNjcuMDgsMFoiIHN0eWxlPSJmaWxsOiM2MzMxNmQiLz48cGF0aCBkPSJNMTgyLjY3LDI1OS40MkgzMjkuNDlhNiw2LDAsMCwwLDYtNlYyMzkuNjVINDM2YTYsNiwwLDAsMCw2LTZWMTk0LjcxYTQ0Ljk5Miw0NC45OTIsMCwwLDAtNDIuMTg2LTQ0Ljg1OWMtLjEyMS0uMDA3LS4yNDMtLjAxMS0uMzY0LS4wMTEtMi45NTQsMC00LjQ0NSwxLjgzOS01LjczOCwzLjQzM2EyNy41MjksMjcuNTI5LDAsMCwxLTQzLjQzOS0xLjA2MSw1Ljk4NCw1Ljk4NCwwLDAsMC00Ljk3MS0yLjQzLDQ0LjQ2OCw0NC40NjgsMCwwLDAtMjIuMDY3LDYuNDMxQTUwLjgyNCw1MC44MjQsMCwwLDAsMjg4LjEsMTM4Ljc2MWMtLjEyMi0uMDA3LS4yNDMtLjAxMS0uMzY2LS4wMTEtMi45NTMsMC00LjQ1NSwxLjg0OS01Ljg4OSwzLjYxNWEzMi4zMDcsMzIuMzA3LDAsMCwxLTUwLjk3NS0xLjI1LDUuOTQzLDUuOTQzLDAsMCwwLTQuOTc3LTIuNDMzLDUwLjU4OCw1MC41ODgsMCwwLDAtMzcuMDI4LDE3LjU4OSw0NC43MDksNDQuNzA5LDAsMCwwLTIwLjU0MS02LjQyYy0uMTItLjAwNy0uMjQtLjAxMS0uMzYtLjAxMS0yLjk0OCwwLTQuNDM5LDEuODQxLTUuNzI4LDMuNDMyYTI3LjUzOSwyNy41MzksMCwwLDEtNDMuNDQ5LTEuMDYsNS45ODUsNS45ODUsMCwwLDAtNC45NzEtMi40M0E0NC45NDUsNDQuOTQ1LDAsMCwwLDcwLDE5NC43MXYzOC45NGE2LDYsMCwwLDAsNiw2SDE3Ni42N3YxMy43N0E2LDYsMCwwLDAsMTgyLjY3LDI1OS40MlpNMzcyLjQsMTc1LjM3YTM5LjQzNywzOS40MzcsMCwwLDAsMjkuNTI3LTEzLjI0NUEzMi45ODYsMzIuOTg2LDAsMCwxLDQzMCwxOTQuNzF2MzIuOTRIMzM1LjQ5VjE4OS4xNmE1MC4yNTcsNTAuMjU3LDAsMCwwLTUuNTI5LTIyLjk3NSwzMi40NDcsMzIuNDQ3LDAsMCwxLDEyLjc3OC00LjIxNEEzOS4xMSwzOS4xMSwwLDAsMCwzNzIuNCwxNzUuMzdaTTIyMy4zLDE1MC44NmE0NC4zMTMsNDQuMzEzLDAsMCwwLDY2LjkzMy4xNjQsMzguNzkzLDM4Ljc5MywwLDAsMSwyNi43MzgsMTYuN2MuMDEyLjAyLjAyNS4wNC4wMzkuMDU5YTM4LjMsMzguMywwLDAsMSw2LjQ4MiwyMS4zNzR2NTguMjZIMTg4LjY3VjE4OS4xNmEzOC40ODIsMzguNDgyLDAsMCwxLDM0LjYyOC0zOC4zWk04MiwyMjcuNjVWMTk0LjcxYTMzLjE3MSwzMy4xNzEsMCwwLDEsMjkuMjUyLTMyLjczNSwzOS41NDQsMzkuNTQ0LDAsMCwwLDU5LjIuMTUsMzIuNjg5LDMyLjY4OSwwLDAsMSwxMS43MTIsNC4xMjksNTAuMzI4LDUwLjMyOCwwLDAsMC01LjQ4OSwyMi45MDZ2MzguNDlaIiBzdHlsZT0iZmlsbDojNjMzMTZkIi8+PHBhdGggZD0iTTQxMi4zNSwxMDguMThWOTAuODdhNDAuNjEsNDAuNjEsMCwwLDAtODEuMjIsMHYxNy4zMWE0MC42MSw0MC42MSwwLDAsMCw4MS4yMiwwWm0tNjkuMjIsMFY5MC44N2EyOC42MSwyOC42MSwwLDEsMSw1Ny4yMiwwdjE3LjMxYTI4LjYxLDI4LjYxLDAsMCwxLTU3LjIyLDBaIiBzdHlsZT0iZmlsbDojNjMzMTZkIi8+PHBhdGggZD0iTTE4MC44NywxMDguMThWOTAuODdhNDAuNjEsNDAuNjEsMCwwLDAtODEuMjIsMHYxNy4zMWE0MC42MSw0MC42MSwwLDAsMCw4MS4yMiwwWm0tNjkuMjIsMFY5MC44N2EyOC42MSwyOC42MSwwLDAsMSw1Ny4yMiwwdjE3LjMxYTI4LjYxLDI4LjYxLDAsMCwxLTU3LjIyLDBaIiBzdHlsZT0iZmlsbDojNjMzMTZkIi8+PC9zdmc+Cg==",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                referrals_order_number: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSItNDAgMCA0ODAgNDgwIiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im0zNTIgOGgtMzA0bC00MCAxMDR2Mjg4aDM4NHYtMjg4em0wIDAiIGZpbGw9IiNjZWIxOTUiLz48cGF0aCBkPSJtNDggOC00MCAxMDRoMzg0bC00MC0xMDR6bTAgMCIgZmlsbD0iI2VkZDliZSIvPjxwYXRoIGQ9Im0zMi44MDA3ODEgNDhoMzM0LjM5ODQzOGwtNS41OTc2NTctMTZoLTMyMy4yMDMxMjR6bTAgMCIgZmlsbD0iI2NlYjE5NSIvPjxwYXRoIGQ9Im0yNjQgMTA0YzAgMzUuMzQ3NjU2LTI4LjY1MjM0NCA2NC02NCA2NHMtNjQtMjguNjUyMzQ0LTY0LTY0IDI4LjY1MjM0NC02NCA2NC02NCA2NCAyOC42NTIzNDQgNjQgNjR6bTAgMCIgZmlsbD0iIzJhYjc5MyIvPjxwYXRoIGQ9Im0yMTguMzk4NDM4IDc0LjM5ODQzOC0zNC4zOTg0MzggMzQuNDAyMzQzLTEwLjM5ODQzOC0xMC40MDIzNDMtMTEuMjAzMTI0IDExLjIwMzEyNCAyMS42MDE1NjIgMjEuNTk3NjU3IDQ1LjYwMTU2Mi00NS41OTc2NTd6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zMjggMjU2aC0xMDR2LTg4YzAtOC44MDA3ODEtNy4xOTkyMTktMTYtMTYtMTZoLThjLTguODAwNzgxIDAtMTYgNy4xOTkyMTktMTYgMTZ2MTEyaC0yNGMtOC44MDA3ODEgMC0xNiA3LjE5OTIxOS0xNiAxNnY1Nmw0OCA4OHYzMmgxMjh2LTMybDI0LTU2di0xMTJjMC04LjgwMDc4MS03LjE5OTIxOS0xNi0xNi0xNnptMCAwIiBmaWxsPSIjZWZjY2JmIi8+PGcgZmlsbD0iI2M5YThhMyI+PHBhdGggZD0ibTI5NC4zOTg0MzggNDIwLjgwMDc4MS0xMi43OTY4NzYtOS42MDE1NjIgMTQuMzk4NDM4LTIxLjU5NzY1N3YtMjkuNjAxNTYyaDE2djM0LjM5ODQzOHptMCAwIi8+PHBhdGggZD0ibTE5MiA0NDBoMTI4djMyaC0xMjh6bTAgMCIvPjxwYXRoIGQ9Im0xODQgMzIwLTE2LTQwaDE2em0wIDAiLz48L2c+PHBhdGggZD0ibTMyOCAyNDhoLTk2di04MGMwLTEzLjYwMTU2Mi0xMC4zOTg0MzgtMjQtMjQtMjRoLThjLTEzLjYwMTU2MiAwLTI0IDEwLjM5ODQzOC0yNCAyNHYxMDRoLTE2Yy0xMy42MDE1NjIgMC0yNCAxMC4zOTg0MzgtMjQgMjR2NTguMzk4NDM4bDQ4IDg4djM3LjYwMTU2MmgxNDR2LTM4LjM5ODQzOGwyNC01NnYtMTEzLjYwMTU2MmMwLTEzLjYwMTU2Mi0xMC4zOTg0MzgtMjQtMjQtMjR6bS0xMjggMjE2di0xNmgxMTJ2MTZ6bTEzNi04MS42MDE1NjItMjEuNjAxNTYyIDQ5LjYwMTU2MmgtMTE3LjU5NzY1N2wtNDQuODAwNzgxLTgyLjM5ODQzOHYtNTMuNjAxNTYyYzAtNC44MDA3ODEgMy4xOTkyMTktOCA4LThoMTZ2MzJoMTZ2LTE1MmMwLTQuODAwNzgxIDMuMTk5MjE5LTggOC04aDhjNC44MDA3ODEgMCA4IDMuMTk5MjE5IDggOHYxMzZoMTZ2LTQwaDI0djQwaDE2di00MGgyNHY0MGgxNnYtNDBoMTZjNC44MDA3ODEgMCA4IDMuMTk5MjE5IDggOHptMCAwIi8+PHBhdGggZD0ibTI5NiAzODkuNjAxNTYyLTE0LjM5ODQzOCAyMS41OTc2NTcgMTIuNzk2ODc2IDkuNjAxNTYyIDE3LjYwMTU2Mi0yNi40MDIzNDN2LTM0LjM5ODQzOGgtMTZ6bTAgMCIvPjxwYXRoIGQ9Im0zNTcuNjAxNTYyIDBoLTMxNS4yMDMxMjRsLTQyLjM5ODQzOCAxMTAuMzk4NDM4djI5Ny42MDE1NjJoMTQ0di0xNmgtMTI4di0yNzJoOTZ2LTE2aC05MmwyMC44MDA3ODEtNTZoOTUuMTk5MjE5di0xNmgtODguODAwNzgxbDYuNDAyMzQzLTE2aDI5Mi43OTY4NzZsNi40MDIzNDMgMTZoLTg4LjgwMDc4MXYxNmg5NS4xOTkyMTlsMjAuODAwNzgxIDU2aC05MnYxNmg5NnYyNzJoLTE2djE2aDMydi0yOTcuNjAxNTYyem0wIDAiLz48cGF0aCBkPSJtMTczLjYwMTU2MiA5OC4zOTg0MzgtMTEuMjAzMTI0IDExLjIwMzEyNCAyMS42MDE1NjIgMjEuNTk3NjU3IDQ1LjYwMTU2Mi00NS41OTc2NTctMTEuMjAzMTI0LTExLjIwMzEyNC0zNC4zOTg0MzggMzQuNDAyMzQzem0wIDAiLz48cGF0aCBkPSJtMjU0LjM5ODQzOCAxNTJjMjYuNDAyMzQzLTI5LjYwMTU2MiAyMy4yMDMxMjQtNzUuMTk5MjE5LTYuMzk4NDM4LTEwMS42MDE1NjItMzAuMzk4NDM4LTI2LjM5ODQzOC03Ni0yNC0xMDIuMzk4NDM4IDUuNjAxNTYyLTI2LjQwMjM0MyAyOS42MDE1NjItMjMuMjAzMTI0IDc1LjE5OTIxOSA2LjM5ODQzOCAxMDEuNjAxNTYybDEwLjM5ODQzOC0xMmMtMjMuMTk5MjE5LTIwLjgwMDc4MS0yNS41OTc2NTctNTYtNC43OTY4NzYtNzkuMjAzMTI0IDIwLjc5Njg3Ni0yMy4xOTkyMTkgNTYtMjUuNTk3NjU3IDc5LjE5OTIxOS00Ljc5Njg3NiAyMy4xOTkyMTkgMjAuNzk2ODc2IDI1LjU5NzY1NyA1NiA0LjgwMDc4MSA3OS4xOTkyMTl6bTAgMCIvPjwvc3ZnPgo=",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                referrals_total_spent: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjEuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwOS42NzcgNjA5LjY3NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjA5LjY3NyA2MDkuNjc3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8ZyBpZD0iZmlsbGVkX291dGxpbmVfOF8iPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZCNzgyOyIgZD0iTTU2My41NTUsMTc3LjYzbC0xMDYuMjk3LTEwNi41djQyNi43NzRoMTQyLjI1OFYyNjQuMTAyICAgICBDNTk5LjUxNiwyMzEuNjM3LDU4Ni41NzEsMjAwLjUxMyw1NjMuNTU1LDE3Ny42M3oiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0RFNEMzQzsiIGQ9Ik05My4yNCw0MjAuMTM5TDEyLjg4NSwyMTEuNTI4Yy04LjA2OC0yMC45NDIsMi4zNjgtNDQuNDY2LDIzLjMyLTUyLjUzNGwzNzkuMjktMTQ2LjA5OSAgICAgYzIwLjk0Mi04LjA2OCw0NC40NjYsMi4zNjgsNTIuNTM0LDIzLjMybDgwLjM1NSwyMDguNjExYzguMDY4LDIwLjk0Mi0yLjM2OCw0NC40NjYtMjMuMzIsNTIuNTM0bC0zNzkuMjgsMTQ2LjA5OSAgICAgQzEyNC44MzEsNDUxLjUyNywxMDEuMzE4LDQ0MS4wODEsOTMuMjQsNDIwLjEzOXoiLz4KCQkJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzdBNDkzMDsiIHBvaW50cz0iNDk2Ljk4OSwxMTEuMzY4IDQyLjIxLDI4Ny42NDYgNzIuNDkxLDM2Ni4yNTQgNTI3LjI5LDE5MC4wNTcgICAgIi8+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM0Mzk4RDE7IiBkPSJNMTAuMTYxLDI3NC4zNTVWNTAuODA2YzAtMjIuNDQ2LDE4LjE5OS00MC42NDUsNDAuNjQ1LTQwLjY0NWg0MDYuNDUyICAgICBjMjIuNDQ2LDAsNDAuNjQ1LDE4LjE5OSw0MC42NDUsNDAuNjQ1djIyMy41NDhjMCwyMi40NDYtMTguMTk5LDQwLjY0NS00MC42NDUsNDAuNjQ1SDUwLjgwNiAgICAgQzI4LjM2LDMxNSwxMC4xNjEsMjk2LjgwMSwxMC4xNjEsMjc0LjM1NXoiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzNFOENDNzsiIGQ9Ik00NTcuMjU4LDEwLjE2MWgtNDMuMTg1TDEwOS4yMzQsMzE1aDM0OC4wMjRjMjIuNDQ2LDAsNDAuNjQ1LTE4LjE5OSw0MC42NDUtNDAuNjQ1VjUwLjgwNiAgICAgQzQ5Ny45MDMsMjguMzYsNDc5LjcwNCwxMC4xNjEsNDU3LjI1OCwxMC4xNjF6Ii8+CgkJCTxyZWN0IHg9IjUwLjgwNiIgeT0iMTcyLjc0MiIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSI0MC42NDUiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxyZWN0IHg9IjUwLjgwNiIgeT0iMjMzLjcxIiBzdHlsZT0iZmlsbDojNUVCM0QxOyIgd2lkdGg9IjQwLjY0NSIgaGVpZ2h0PSIyMC4zMjMiLz4KCQkJPHJlY3QgeD0iMjMzLjcxIiB5PSIyMzMuNzEiIHN0eWxlPSJmaWxsOiM1RUIzRDE7IiB3aWR0aD0iNDAuNjQ1IiBoZWlnaHQ9IjIwLjMyMyIvPgoJCQk8cmVjdCB4PSIxMTEuNzc0IiB5PSIxNzIuNzQyIiBzdHlsZT0iZmlsbDojNUVCM0QxOyIgd2lkdGg9IjQwLjY0NSIgaGVpZ2h0PSIyMC4zMjMiLz4KCQkJPHJlY3QgeD0iMTcyLjc0MiIgeT0iMTcyLjc0MiIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSI0MC42NDUiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxyZWN0IHg9IjIzMy43MSIgeT0iMTcyLjc0MiIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSI0MC42NDUiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxyZWN0IHg9IjQyNi43NzQiIHk9IjUwLjgwNiIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSIyMC4zMjMiIGhlaWdodD0iMzAuNDg0Ii8+CgkJCTxyZWN0IHg9IjM4Ni4xMjkiIHk9IjUwLjgwNiIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSIyMC4zMjMiIGhlaWdodD0iMzAuNDg0Ii8+CgkJCTxyZWN0IHg9IjM0NS40ODQiIHk9IjUwLjgwNiIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSIyMC4zMjMiIGhlaWdodD0iMzAuNDg0Ii8+CgkJCTxyZWN0IHg9IjMwNC44MzkiIHk9IjUwLjgwNiIgc3R5bGU9ImZpbGw6IzVFQjNEMTsiIHdpZHRoPSIyMC4zMjMiIGhlaWdodD0iMzAuNDg0Ii8+CgkJCTxyZWN0IHg9IjQxNi42MTMiIHk9IjQ5Ny45MDMiIHN0eWxlPSJmaWxsOiM4OEIzMzc7IiB3aWR0aD0iMTgyLjkwMyIgaGVpZ2h0PSIxMDEuNjEzIi8+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkI3ODI7IiBkPSJNMzg2Ljc4OSwxOTMuNzI1Yy0xNy4yMzQtMTcuMTczLTQ1LjEyNi0xNy4xMjItNjIuMjk5LDAuMTEyICAgICBjLTE2LjYwNCwxNi42NjUtMTcuMTgzLDQzLjQ0LTEuMzExLDYwLjgwNWw4My4yNzIsOTAuODQyYy0yNS4wMjcsNDMuODA1LTIzLjk2LDk3LjgyMywyLjc3NCwxNDAuNjAybDcuMzg3LDExLjgxOEg1NDguNzEgICAgIFYzNTUuNjQ1TDM4Ni43ODksMTkzLjcyNXoiLz4KCQkJPHJlY3QgeD0iNDQ3LjA5NyIgeT0iNTI4LjM4NyIgc3R5bGU9ImZpbGw6IzZCOTYyQTsiIHdpZHRoPSIyMC4zMjMiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGREI2MkY7IiBkPSJNNTAuODA2LDExNS44MzlWNjcuMDY1YzAtOC45ODMsNy4yNzUtMTYuMjU4LDE2LjI1OC0xNi4yNThoNDguNzc0ICAgICBjOC45ODMsMCwxNi4yNTgsNy4yNzUsMTYuMjU4LDE2LjI1OHY0OC43NzRjMCw4Ljk4My03LjI3NSwxNi4yNTgtMTYuMjU4LDE2LjI1OEg2Ny4wNjUgICAgIEM1OC4wODIsMTMyLjA5Nyw1MC44MDYsMTI0LjgyMSw1MC44MDYsMTE1LjgzOXoiLz4KCQkJPHJlY3QgeD0iNTAuODA2IiB5PSI4MS4yOSIgc3R5bGU9ImZpbGw6I0ZEN0IyRjsiIHdpZHRoPSIzMC40ODQiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxyZWN0IHg9IjEwMS42MTMiIHk9IjgxLjI5IiBzdHlsZT0iZmlsbDojRkQ3QjJGOyIgd2lkdGg9IjMwLjQ4NCIgaGVpZ2h0PSIyMC4zMjMiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0YyQTQ2RjsiIGQ9Ik01MzguNTQ4LDM1NS42NDVjLTIuNjkzLDAtNS4yODQtMS4wNjctNy4xODQtMi45NzdsLTQwLjY0NS00MC42NDUgICAgIGMtMy45MDItNC4wMzQtMy43OS0xMC40NjYsMC4yNTQtMTQuMzY4YzMuOTQzLTMuOCwxMC4xODItMy44LDE0LjExNCwwbDQwLjY0NSw0MC42NDVjMy45NjMsMy45NzMsMy45NjMsMTAuNDA1LDAsMTQuMzY4ICAgICBDNTQzLjgyMiwzNTQuNTc4LDU0MS4yNDEsMzU1LjY0NSw1MzguNTQ4LDM1NS42NDV6Ii8+CgkJCTxwYXRoIGQ9Ik01MDguMDY1LDEwNy42NDlWNTAuODA2QzUwOC4wMzQsMjIuNzYxLDQ4NS4zMDMsMC4wMyw0NTcuMjU4LDBINTAuODA2QzIyLjc2MSwwLjAzLDAuMDMsMjIuNzYxLDAsNTAuODA2djIyMy41NDggICAgIGMwLjA4MSwyNS45NTIsMTkuNzQzLDQ3LjY0Niw0NS41NjMsNTAuMjc4bDM4LjE5Niw5OS4xNTRjMTAuMDksMjYuMTg2LDM5LjQ4NywzOS4yMzMsNjUuNjcyLDI5LjE0M2wyMzguNTI2LTkxLjg3OCAgICAgYy0xNi40ODIsNDMuMDUzLTExLjc5Nyw5MS4zNCwxMi42NjEsMTMwLjQybDUuODMzLDkuMzM4djk4LjcwN2MwLDUuNjA5LDQuNTUyLDEwLjE2MSwxMC4xNjEsMTAuMTYxaDE4Mi45MDMgICAgIGM1LjYwOSwwLDEwLjE2MS00LjU1MiwxMC4xNjEtMTAuMTYxVjI2NC4xMDJjLTAuMDkxLTM1LjEzOC0xNC4wODQtNjguODAyLTM4LjkyOC05My42NTdMNTA4LjA2NSwxMDcuNjQ5eiBNNTA4LjA2NSwxNjguNDEzICAgICBsMzAuODQsODAuMDYxYzYuMDQ2LDE1LjcwOS0xLjc4OCwzMy4zNDktMTcuNDk4LDM5LjM5NWwtMTcuNjMsNi44MDhjMi44MTUtNi40MDIsNC4yNzgtMTMuMzIxLDQuMjg4LTIwLjMyM1YxNjguNDEzeiAgICAgIE0yMC4zMjMsMjc0LjM1NVY1MC44MDZjMC0xNi44MzcsMTMuNjQ3LTMwLjQ4NCwzMC40ODQtMzAuNDg0aDQwNi40NTJjMTYuODM3LDAsMzAuNDg0LDEzLjY0NywzMC40ODQsMzAuNDg0djY0LjU4NWgtMC4wOTEgICAgIGwwLjA5MSwwLjIzNHYxNTguNzNjLTAuMDgxLDEuNzY4LTAuMzA1LDMuNTM2LTAuNjkxLDUuMjY0bC05My4wNzctOTMuMDg4Yy0yMS40Mi0yMC45MjItNTUuNzM1LTIwLjUyNi03Ni42NTcsMC44OTQgICAgIGMtMTkuOTU3LDIwLjQyNC0yMC42NDgsNTIuODE4LTEuNTg1LDc0LjA3NmwzOS42OCw0My4zMzhINTAuODA2QzMzLjk2OSwzMDQuODM5LDIwLjMyMywyOTEuMTkyLDIwLjMyMywyNzQuMzU1TDIwLjMyMywyNzQuMzU1eiAgICAgIE0xNTAuNDk5LDMyNS4xNjFsLTcyLjI1NywyNy44MjJsLTEwLjY5LTI3LjgyMkgxNTAuNDk5eiBNMTQyLjEyNiw0MzMuOTY4Yy0xNS43MDksNi4wNTYtMzMuMzQ5LTEuNzc4LTM5LjQwNS0xNy40ODhsMCwwICAgICBsLTE3LjE0Mi00NC41NzhsMTIxLjI5NS00Ni43NDJWMzI1LjFoMTY3LjE2M2wxMy4yMSwxNC4zOTlMMTQyLjEyNiw0MzMuOTY4eiBNNTg5LjM1NSw1ODkuMzU1SDQyNi43NzR2LTgxLjI5aDE2Mi41ODFWNTg5LjM1NXogICAgICBNNTg5LjM1NSw0ODcuNzQySDQyMi4yNTJsLTQuNDEtNy4wNDJjLTI0Ljc3My0zOS41ODgtMjUuNzU5LTg5LjYwMi0yLjU3MS0xMzAuMTM2YzIuMTk1LTMuODQxLDEuNjU2LTguNjQ3LTEuMzMxLTExLjkwOSAgICAgbC04My4yNzItOTAuODQyYy0xMi42Mi0xMy44MTktMTEuNjU1LTM1LjI1LDIuMTY0LTQ3Ljg4YzEzLjM2Mi0xMi4yMDQsMzMuOTU5LTExLjc1Nyw0Ni43NzIsMS4wMTZsMTYxLjkyLDE2MS44OGwxNC4zNjgtMTQuMzY4ICAgICBsLTM3LjU5Ny0zNy41OTdsMTAuNDI2LTQuMDY1YzI2LjE2NS0xMC4wOSwzOS4yMDItMzkuNDY2LDI5LjEzMi02NS42NDJsLTM0LjM5Ni04OS4zMDhsMzIuOTIzLDMyLjk4NCAgICAgYzIxLjAzNCwyMS4wMjQsMzIuODkyLDQ5LjUyNiwzMi45NzMsNzkuMjY4TDU4OS4zNTUsNDg3Ljc0Mkw1ODkuMzU1LDQ4Ny43NDJ6Ii8+CgkJCTxwYXRoIGQ9Ik0xMTUuODM5LDE0Mi4yNThjMTQuNTkyLDAsMjYuNDE5LTExLjgyOCwyNi40MTktMjYuNDE5bDAsMFY2Ny4wNjVjMC0xNC41OTItMTEuODI4LTI2LjQxOS0yNi40MTktMjYuNDE5bDAsMEg2Ny4wNjUgICAgIGMtMTQuNTkyLDAtMjYuNDE5LDExLjgyOC0yNi40MTksMjYuNDE5bDAsMHY0OC43NzRjMCwxNC41OTIsMTEuODI4LDI2LjQxOSwyNi40MTksMjYuNDE5bDAsMEgxMTUuODM5eiBNNjAuOTY4LDExNS44Mzl2LTE0LjIyNiAgICAgSDgxLjI5VjgxLjI5SDYwLjk2OFY2Ny4wNjVjMC0zLjM2MywyLjczMy02LjA5Nyw2LjA5Ny02LjA5N2wwLDBoNDguNzc0YzMuMzYzLDAsNi4wOTcsMi43MzMsNi4wOTcsNi4wOTdsMCwwVjgxLjI5aC0yMC4zMjMgICAgIHYyMC4zMjNoMjAuMzIzdjE0LjIyNmMwLDMuMzYzLTIuNzMzLDYuMDk3LTYuMDk3LDYuMDk3bDAsMEg2Ny4wNjVDNjMuNzAxLDEyMS45MzUsNjAuOTY4LDExOS4yMDIsNjAuOTY4LDExNS44MzlMNjAuOTY4LDExNS44MzkgICAgIHoiLz4KCQkJPHJlY3QgeD0iNTAuODA2IiB5PSIxNzIuNzQyIiB3aWR0aD0iNDAuNjQ1IiBoZWlnaHQ9IjIwLjMyMyIvPgoJCQk8cmVjdCB4PSI1MC44MDYiIHk9IjIzMy43MSIgd2lkdGg9IjQwLjY0NSIgaGVpZ2h0PSIyMC4zMjMiLz4KCQkJPHJlY3QgeD0iMjMzLjcxIiB5PSIyMzMuNzEiIHdpZHRoPSI0MC42NDUiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxyZWN0IHg9IjExMS43NzQiIHk9IjE3Mi43NDIiIHdpZHRoPSI0MC42NDUiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxyZWN0IHg9IjE3Mi43NDIiIHk9IjE3Mi43NDIiIHdpZHRoPSI0MC42NDUiIGhlaWdodD0iMjAuMzIzIi8+CgkJCTxyZWN0IHg9IjIzMy43MSIgeT0iMTcyLjc0MiIgd2lkdGg9IjQwLjY0NSIgaGVpZ2h0PSIyMC4zMjMiLz4KCQkJPHJlY3QgeD0iNDI2Ljc3NCIgeT0iNTAuODA2IiB3aWR0aD0iMjAuMzIzIiBoZWlnaHQ9IjMwLjQ4NCIvPgoJCQk8cmVjdCB4PSIzODYuMTI5IiB5PSI1MC44MDYiIHdpZHRoPSIyMC4zMjMiIGhlaWdodD0iMzAuNDg0Ii8+CgkJCTxyZWN0IHg9IjM0NS40ODQiIHk9IjUwLjgwNiIgd2lkdGg9IjIwLjMyMyIgaGVpZ2h0PSIzMC40ODQiLz4KCQkJPHJlY3QgeD0iMzA0LjgzOSIgeT0iNTAuODA2IiB3aWR0aD0iMjAuMzIzIiBoZWlnaHQ9IjMwLjQ4NCIvPgoJCQk8cmVjdCB4PSI0NDcuMDk3IiB5PSI1MjguMzg3IiB3aWR0aD0iMjAuMzIzIiBoZWlnaHQ9IjIwLjMyMyIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
                    linkTo: "none",
                    isDisplayEarnedCredits: true,
                },
                add_product_to_wishlist: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSItODkgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im0yMzguODI0MjE5IDE4MS41ODk4NDRjLTcuODc4OTA3IDcuODc4OTA2LTIwLjY2MDE1NyA3Ljg3ODkwNi0yOC41MzkwNjMgMGwtNjkuODkwNjI1LTY5Ljg5NDUzMmMtMjMuODM1OTM3LTIzLjgzNTkzNy0yMy44MzU5MzctNjIuNDgwNDY4IDAtODYuMzIwMzEyIDIzLjEzMjgxMy0yMy4xMjg5MDYgNjAuMjA3MDMxLTIzLjgxMjUgODQuMTYwMTU3LTIuMDU0Njg4IDIzLjk2MDkzNy0yMS43NTc4MTIgNjEuMDM1MTU2LTIxLjA3MDMxMiA4NC4xNjQwNjIgMi4wNTQ2ODggMjMuODM1OTM4IDIzLjgzOTg0NCAyMy44MzU5MzggNjIuNDg0Mzc1IDAgODYuMzIwMzEyem0wIDAiIGZpbGw9IiNmZjUzNjgiLz48cGF0aCBkPSJtMjg3LjUwMzkwNiA5MC40ODQzNzUtODQuMTYwMTU2IDg0LjE2MDE1NiA2Ljk0MTQwNiA2Ljk0NTMxM2M3Ljg3ODkwNiA3Ljg4MjgxMiAyMC42NTYyNSA3Ljg4MjgxMiAyOC41MzkwNjMgMGw2OS44OTQ1MzEtNjkuODk0NTMyYzIzLjgzNTkzOC0yMy44MzU5MzcgMjMuODM1OTM4LTYyLjQ4MDQ2OCAwLTg2LjMxNjQwNmwtLjEzMjgxMi4xMjg5MDZjLTEwLjEwOTM3NiAxMC4xMDU0NjktMTQuMzYzMjgyIDI0LjQyNTc4Mi0xMi4zMjQyMTkgMzguNTcwMzEzIDEuMzQ3NjU2IDkuMzU5Mzc1LTEuNTcwMzEzIDE5LjIyMjY1Ni04Ljc1NzgxMyAyNi40MDYyNXptMCAwIiBmaWxsPSIjZTkzZDUyIi8+PHBhdGggZD0ibTIxNy41IDI4OS42OTUzMTJ2LTEzMC42OTUzMTJjMC0xNC41LTExLjc1MzkwNi0yNi4yNS0yNi4yNS0yNi4yNXMtMjYuMjUgMTEuNzUtMjYuMjUgMjYuMjV2OTkuOTk2MDk0Yy0uMDAzOTA2LTE0LjQ5MjE4OC0xMS43NTM5MDYtMjYuMjM4MjgyLTI2LjI1LTI2LjIzODI4MnMtMjYuMjUgMTEuNzUtMjYuMjUgMjYuMjVjMC0xNC41LTExLjc1MzkwNi0yNi4yNS0yNi4yNS0yNi4yNXMtMjYuMjUgMTEuNzUtMjYuMjUgMjYuMjV2MTguNjAxNTYzbC0uMDM1MTU2LjAwNzgxM2MtLjcyNjU2My0xMy44NTkzNzYtMTIuMTk1MzEzLTI0Ljg3MTA5NC0yNi4yMzQzNzUtMjQuODU5Mzc2LTE0LjQyOTY4OC4wMTE3MTktMjYuMjMwNDY5IDEyLjM4MjgxMy0yNi4yMzA0NjkgMjYuODEyNXY5NC4yNWMwIDEzLjkyMTg3NiAzLjYzMjgxMiAyNy42MDE1NjMgMTAuNTM5MDYyIDM5LjY4NzVsMjkuNDYwOTM4IDUxLjU1ODU5NHYyNC40MzM1OTRjMCA4LjI4NTE1NiA2LjcxNDg0NCAxNSAxNSAxNWwxMzQuNjU2MjUtLjAxNTYyNWM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1di0yNC40MTc5NjlsMzEuOTgwNDY5LTUwLjM3NWM4LjEzNjcxOS0xMi44MjAzMTIgMTIuNDU3MDMxLTI3LjY5MTQwNiAxMi40NTcwMzEtNDIuODc4OTA2di01My41NTg1OTRjLjAwMzkwNi0yMC40NDE0MDYtMjAuMDAzOTA2LTM0Ljc3MzQzNy0zOS4wOTM3NS0yOC41NTg1OTR6bTAgMCIgZmlsbD0iI2ZmYzk4YyIvPjxnIGZpbGw9IiNmN2ExNmUiPjxwYXRoIGQ9Im0xMDYuODk0NTMxIDMwNi45MTc5NjloNS42MDU0Njl2LTQ3LjM1OTM3NWMwLTE0LjMzOTg0NC0xMS4yNjU2MjUtMjYuNDQ5MjE5LTI1LjYwMTU2Mi0yNi43OTI5NjktMS40OTYwOTQtLjAzOTA2My0yLjk2NDg0NC4wNTg1OTQtNC4zOTg0MzguMjYxNzE5djQ5LjQ5NjA5NGMwIDEzLjQ3MjY1NiAxMC45MjE4NzUgMjQuMzk0NTMxIDI0LjM5NDUzMSAyNC4zOTQ1MzF6bTAgMCIvPjxwYXRoIGQ9Im02MCAzMDYuOTE3OTY5di0yNy4zNTkzNzVjMC0xNC4zMzk4NDQtMTEuMjY1NjI1LTI2LjQ0OTIxOS0yNS42MDE1NjItMjYuNzkyOTY5LTEuNDk2MDk0LS4wMzkwNjMtMi45NjQ4NDQuMDU4NTk0LTQuMzk4NDM4LjI2MTcxOXYyOS40OTYwOTRjMCAxMy40NzI2NTYgMTAuOTIxODc1IDI0LjM5NDUzMSAyNC4zOTQ1MzEgMjQuMzk0NTMxem0wIDAiLz48cGF0aCBkPSJtMTU5LjM5NDUzMSAzMDYuOTE3OTY5aDUuNjA1NDY5di00Ny4zNTkzNzVjMC0xNC4zMzk4NDQtMTEuMjY1NjI1LTI2LjQ0OTIxOS0yNS42MDE1NjItMjYuNzkyOTY5LTEuNDk2MDk0LS4wMzkwNjMtMi45NjQ4NDQuMDU4NTk0LTQuMzk4NDM4LjI2MTcxOXY0OS40OTYwOTRjMCAxMy40NzI2NTYgMTAuOTIxODc1IDI0LjM5NDUzMSAyNC4zOTQ1MzEgMjQuMzk0NTMxem0wIDAiLz48cGF0aCBkPSJtMjI2LjU5NzY1NiAyODguMjUzOTA2di0uMDE5NTMxbC05LjA5NzY1Ni4wMTk1MzF2LTEyOS4yNTM5MDZoLS4wMTE3MTljLS4yODkwNjItMTQuMDk3NjU2LTExLjQzNzUtMjUuOTAyMzQ0LTI1LjU4NTkzNy0yNi4yNDIxODgtMS41LS4wMzUxNTYtMi45Njg3NS4wNTg1OTQtNC40MDIzNDQuMjYxNzE5djE2My44OTg0MzhjMCAxNi41NjY0MDYgMTMuNDMzNTk0IDMwIDMwIDMwaDkuMDk3NjU2djQ0Ljg5ODQzN2MwIDkuNDg4MjgyLTIuNzAzMTI1IDE4Ljc4NTE1Ni03Ljc4OTA2MiAyNi43OTY4NzVsLTI2LjkyOTY4OCA0Mi40MjE4NzVjLTYuMzUxNTYyIDEwLjAwMzkwNi05LjcyMjY1NiAyMS42MDU0NjktOS43MjI2NTYgMzMuNDUzMTI1djMwLjAxMTcxOWwxNS0uMDE1NjI1YzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTV2LTI0LjQxNzk2OWwzMS45ODA0NjktNTAuMzc1YzguMTM2NzE5LTEyLjgyMDMxMiAxMi40NjA5MzctMjcuNjkxNDA2IDEyLjQ2MDkzNy00Mi44Nzg5MDZ2LTUzLjU1ODU5NGMwLTE2Ljg1OTM3NS0xMy43NTc4MTItMzAtMzAtMzB6bTAgMCIvPjwvZz48cGF0aCBkPSJtMjY1LjY1NjI1IDBoLS4wNTg1OTRjLTE0LjUyMzQzNyAwLTI4Ljk0NTMxMiA0LjU2NjQwNi00MS4wMzkwNjIgMTMuNjAxNTYyLTExLjQxNzk2OS04LjU0Njg3NC0yNS41ODIwMzItMTMuNjAxNTYyLTQwLjcxMDkzOC0xMy42MDE1NjJoLS4wNzAzMTJjLTM4LjM0Mzc1IDAtNjguODAwNzgyIDMwLjgyODEyNS02OC43NTc4MTMgNjguNzc3MzQ0LS4wMTk1MzEgMTcuNTY2NDA2IDYuODM1OTM4IDM0Ljk5MjE4NyAyMC4wNzAzMTMgNDguMjIyNjU2bDI2LjI5Njg3NSAyNi4zMDA3ODFjLTIuNDc2NTYzIDQuNjkxNDA3LTMuODg2NzE5IDEwLjAzMTI1LTMuODg2NzE5IDE1LjY5OTIxOXY3MS45NTcwMzFjLTUuMzY3MTg4LTMuNjAxNTYyLTExLjgxNjQwNi01LjY5OTIxOS0xOC43NS01LjY5OTIxOS0xMC41ODk4NDQgMC0yMC4wNTg1OTQgNC45MDIzNDQtMjYuMjUgMTIuNTU4NTk0LTYuMTkxNDA2LTcuNjU2MjUtMTUuNjYwMTU2LTEyLjU1ODU5NC0yNi4yNS0xMi41NTg1OTQtMTYuMDM1MTU2IDAtMjkuNDkyMTg4IDExLjIzODI4Mi0zMi45MTAxNTYgMjYuMjUzOTA3LTUuNTM1MTU2LTMuOTQ1MzEzLTEyLjMwNDY4OC02LjI1MzkwNy0xOS41OTM3NS02LjI1MzkwN2gtLjAyMzQzOGMtMTguMjc3MzQ0LjAxMTcxOS0zMy43MjI2NTYgMTUuNzI2NTYzLTMzLjcyMjY1NiAzNC4zMTI1djk0LjI0NjA5NGMwIDE1LjIwMzEyNSAzLjk4NDM3NSAzMC4yMTQ4NDQgMTEuNTI3MzQ0IDQzLjQxMDE1NmwyOC40NzI2NTYgNDkuODMyMDMydjM3LjQ0OTIxOGMwIDQuMTQwNjI2IDMuMzU1NDY5IDcuNDkyMTg4IDcuNSA3LjQ5MjE4OHM3LjUtMy4zNTE1NjIgNy41LTcuNDkyMTg4di0zOS40NDE0MDZjMC0xLjMwNDY4Ny0uMzM5ODQ0LTIuNTg1OTM3LS45ODgyODEtMy43MTg3NWwtMjkuNDYwOTM4LTUxLjU2MjVjLTYuMjQ2MDkzLTEwLjkzMzU5NC05LjU1MDc4MS0yMy4zNzEwOTQtOS41NTA3ODEtMzUuOTY4NzV2LTk0LjI1YzAtMTAuNDYwOTM3IDguNTc4MTI1LTE5LjMwNDY4NyAxOC43MzQzNzUtMTkuMzEyNWguMDExNzE5YzkuOTQ5MjE4IDAgMTguMTQ4NDM3IDcuNzQ2MDk0IDE4LjcxODc1IDE3LjY1NjI1djI5LjAwMzkwNmMwIDQuMTQ0NTMyIDMuMzU1NDY4IDcuNSA3LjUgNy41IDQuMTQwNjI1IDAgNy41LTMuMzU1NDY4IDcuNS03LjV2LTI4LjU3ODEyNGMuMDE5NTMxLS4yNDIxODguMDM1MTU2LS40ODQzNzYuMDM1MTU2LS43MjY1NjN2LTE4LjYwNTQ2OWMwLTEwLjMzOTg0NCA4LjQxMDE1Ni0xOC43NSAxOC43NS0xOC43NXMxOC43NSA4LjQxMDE1NiAxOC43NSAxOC43NWMwIC4wOTM3NS4wMTE3MTkuMTgzNTk0LjAxNTYyNS4yNzczNDQtLjAwMzkwNi4wODk4NDQtLjAxNTYyNS4xODM1OTQtLjAxNTYyNS4yNzM0Mzh2NDcuMzU5Mzc0YzAgNC4xNDQ1MzIgMy4zNTU0NjkgNy41IDcuNSA3LjVzNy41LTMuMzU1NDY4IDcuNS03LjV2LTQ3LjM1OTM3NGMwLS4wODk4NDQtLjAxMTcxOS0uMTgzNTk0LS4wMTU2MjUtLjI3MzQzOC4wMDM5MDYtLjA5Mzc1LjAxNTYyNS0uMTgzNTk0LjAxNTYyNS0uMjc3MzQ0IDAtMTAuMzM5ODQ0IDguNDEwMTU2LTE4Ljc1IDE4Ljc1LTE4Ljc1IDEwLjI3MzQzOCAwIDE4LjY0ODQzOCA4LjMxMjUgMTguNzUgMTguNTYyNXY0OC4wOTc2NTZjMCA0LjE0NDUzMiAzLjM1NTQ2OSA3LjUgNy41IDcuNXM3LjUtMy4zNTU0NjggNy41LTcuNXYtMTQ3LjkxNzk2OGMwLTEwLjMzNTkzOCA4LjQxMDE1Ni0xOC43NSAxOC43NS0xOC43NXMxOC43NSA4LjQxNDA2MiAxOC43NSAxOC43NXYxODguOTg0Mzc1YzAgNC4xNDQ1MzEgMy4zNTU0NjkgNy41IDcuNSA3LjVzNy41LTMuMzU1NDY5IDcuNS03LjV2LTUyLjE5MTQwN2M1LjE5OTIxOS0uNDAyMzQzIDEwLjM5ODQzOCAxLjA1ODU5NCAxNC44MDg1OTQgNC4yNjE3MTkgNS45MDIzNDQgNC4yODUxNTcgOS4yODkwNjIgMTAuOTIxODc1IDkuMjg5MDYyIDE4LjE5OTIxOXY1My41NjI1YzAgMTMuNzg1MTU2LTMuOTA2MjUgMjcuMjIyNjU2LTExLjI5Mjk2OCAzOC44NTkzNzVsLTMxLjk4MDQ2OSA1MC4zNzVjLS43NjE3MTkgMS4yMDMxMjUtMS4xNjc5NjkgMi41OTc2NTYtMS4xNjc5NjkgNC4wMTk1MzF2MzkuNDI1NzgyYzAgNC4xNDQ1MzEgMy4zNTU0NjkgNy41MDc4MTIgNy41IDcuNTA3ODEyczcuNS0zLjM2MzI4MSA3LjUtNy41MDc4MTJ2LTM3LjI0NjA5NGwzMC44MTI1LTQ4LjUzNTE1NmM4LjkxNDA2Mi0xNC4wNDI5NjkgMTMuNjI4OTA2LTMwLjI2MTcxOSAxMy42Mjg5MDYtNDYuODk4NDM4di01My41NjI1YzAtMTIuMTQwNjI1LTUuNjQwNjI1LTIzLjE5NTMxMi0xNS40NzY1NjItMzAuMzM5ODQ0LTcuMDM1MTU2LTUuMTA1NDY4LTE1LjMwMDc4Mi03LjU0Njg3NS0yMy42MjEwOTQtNy4xNjAxNTZ2LTEyMS43NWMwLTE4LjYwOTM3NS0xNS4xNDA2MjUtMzMuNzUtMzMuNzUtMzMuNzUtNy41MTE3MTkgMC0xNC40NTMxMjUgMi40Njg3NS0yMC4wNjY0MDYgNi42MzI4MTJsLTI1LjQ4NDM3NS0yNS40OTIxODdjLTEwLjEwOTM3NS0xMC4xMDE1NjMtMTUuNjc5Njg4LTIzLjQ2MDkzNy0xNS42Nzk2ODgtMzcuNjA5Mzc1LjAxOTUzMS0yOS42MDkzNzUgMjMuNTQ2ODc1LTUzLjc2MTcxOSA1My44MDg1OTQtNTMuNzgxMjUgMTMuMTcxODc1IDAgMjUuODM5ODQ0IDQuOTI5Njg4IDM1LjY5MTQwNiAxMy44NzEwOTQgMi44NzEwOTQgMi42MjEwOTQgNy4yNTc4MTMgMi41NzQyMTggMTAuMDc4MTI1IDAgOS44NTE1NjMtOC45NDE0MDYgMjIuNjQwNjI1LTEzLjg3MTA5NCAzNi4wMTk1MzItMTMuODcxMDk0IDI5LjMzMjAzMS4wMTk1MzEgNTMuNDYwOTM3IDIzLjczNDM3NSA1My40ODA0NjggNTMuNTM5MDYyLS4wMDc4MTIgMTQuMzAwNzgyLTUuNTc4MTI1IDI3Ljc1LTE1LjY3OTY4NyAzNy44NTE1NjNsLTYwLjczODI4MSA2MC43NDIxODdjLTIuOTQxNDA3IDIuOTM3NS0yLjkzMzU5NCA3LjY3NTc4MiAwIDEwLjYwOTM3NiAyLjg5ODQzNyAyLjkxNzk2OCA3LjY2Nzk2OCAyLjk0OTIxOCAxMC41OTc2NTYgMGw2MC43NDIxODctNjAuNzQyMTg4YzEzLjE2MDE1Ny0xMy4xNDA2MjUgMjAuMDc4MTI1LTMwLjU5Mzc1IDIwLjA3ODEyNS00OC40NjA5MzggMC0zNy44NjcxODctMzAuNzI2NTYyLTY4LjUzOTA2Mi02OC40NDE0MDYtNjguNTM5MDYyem0wIDAiLz48L3N2Zz4K",
                    linkTo: "/collections/all",
                    isDisplayEarnedCredits: true,
                },
                admin_rule: {
                    icon:
                        "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNjBEQzREOyIgZD0iTTUwOC45NjksMTcxLjgxMWwtMjcuMDAzLDQ0LjAyN0wzNDEuMzQ4LDQ0NS4xMDFjLTMuODUzLDYuMjk1LTEwLjU5OSw5Ljc2OC0xNy40ODUsOS43NjggIGMtMy42NTMsMC03LjM0Ni0wLjk4MS0xMC42NzktMy4wMjNsLTU3LjcyOS0zNS40MWwtNi4wMTUtMy42OTNsLTIuMzQyLTE5Ljk1N2wtMTkuNDM2LTE2NS44NmwxNS44MjMtMjUuNjkybDU5LjYxLTk2Ljc3MSAgbDI2LjM2Mi00Mi43OTZjMi44NDItNC42MzQsNy4zNDYtNy45MDcsMTIuNjcxLTkuMTc4YzUuMzE0LTEuMjgxLDEwLjgxOS0wLjQsMTUuNDgzLDIuNDUybDcyLjE5MSw0NC4yODdsNzIuNDIxLDQ0LjQxNyAgYzQuNjY0LDIuODYyLDcuOTM3LDcuMzY2LDkuMjA4LDEyLjY4MUM1MTIuNzAyLDE2MS42NTIsNTExLjgzMSwxNjcuMTQ3LDUwOC45NjksMTcxLjgxMXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzAwQkE2MzsiIGQ9Ik01MDguOTY5LDE3MS44MTFsLTI3LjAwMyw0NC4wMjdMMzQxLjM0OCw0NDUuMTAxYy0zLjg1Myw2LjI5NS0xMC41OTksOS43NjgtMTcuNDg1LDkuNzY4ICBjLTMuNjUzLDAtNy4zNDYtMC45ODEtMTAuNjc5LTMuMDIzbC01Ny43MjktMzUuNDFsLTYuMDE1LTMuNjkzbC0yLjM0Mi0xOS45NTdMNDI5LjgwMiw5OS4yM2w3Mi40MjEsNDQuNDE3ICBjNC42NjQsMi44NjIsNy45MzcsNy4zNjYsOS4yMDgsMTIuNjgxQzUxMi43MDIsMTYxLjY1Miw1MTEuODMxLDE2Ny4xNDcsNTA4Ljk2OSwxNzEuODExeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkY0RjE5OyIgZD0iTTMwMi43MjUsMzk0LjAxOGMtMi40MTIsNC45MDQtNi41OTYsOC41NzctMTEuNzcsMTAuMzM5bC0zNS41LDEyLjA4TDIxMS4xODgsNDMxLjVsLTAuOTUxLDAuMzIgIGwtNzkuODk3LDI3LjE3M2MtMi4xODIsMC43NDEtNC40MDQsMS4wOTEtNi41ODYsMS4wOTFjLTguNTI3LDAtMTYuNTA0LTUuMzY1LTE5LjQwNi0xMy44ODJMMTcuNDY1LDE5MC43NzdsLTE2LjM2NC00OC4wOSAgYy0xLjc2MS01LjE3NC0xLjQwMS0xMC43MjksMS4wMjEtMTUuNjQzYzIuNDEyLTQuOTA0LDYuNTk2LTguNTc3LDExLjc4LTEwLjMzOUw5NC41LDg5LjI4Mmw4MC4wMDctMjcuMjEzICBjMTAuNjk5LTMuNjQzLDIyLjM0OSwyLjEwMiwyNS45OTIsMTIuNzkxbDE2LjI3NCw0Ny44NGwyNi43MTIsNzguNTM2bDYwLjI2MSwxNzcuMTM5ICBDMzA1LjUwNywzODMuNTUsMzA1LjE0NywzODkuMTA0LDMwMi43MjUsMzk0LjAxOHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0VEMjUwMDsiIGQ9Ik0zMDIuNzI1LDM5NC4wMThjLTIuNDEyLDQuOTA0LTYuNTk2LDguNTc3LTExLjc3LDEwLjMzOWwtMzUuNSwxMi4wOEwyMTEuMTg4LDQzMS41TDk1LjkxMSw4OC44MTEgIGw3OC41OTYtMjYuNzQzYzEwLjY5OS0zLjY0MywyMi4zNDksMi4xMDIsMjUuOTkyLDEyLjc5MWwxNi4yNzQsNDcuODRsMjYuNzEyLDc4LjUzNmw2MC4yNjEsMTc3LjEzOSAgQzMwNS41MDcsMzgzLjU1LDMwNS4xNDcsMzg5LjEwNCwzMDIuNzI1LDM5NC4wMTh6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRFNDY7IiBkPSJNMjA2Ljk3NCwyOTMuNjk3Yy0yLjc5Miw0Ljc4NC03LjgyNyw3LjQ0Ni0xMi45ODEsNy40NDZjLTIuNTcyLDAtNS4xNzQtMC42NjEtNy41NTYtMi4wNDIgIGwtMjQuNTYxLTE0LjM0MmwtOS44ODgsMjQuODgxYy0yLjMzMiw1Ljg4NS03Ljk3Nyw5LjQ3OC0xMy45NTIsOS40NzhjLTEuODQyLDAtMy43MjMtMC4zNC01LjUzNS0xLjA2MSAgYy03LjcwNi0zLjA2My0xMS40Ny0xMS43OS04LjQxNy0xOS40OTZsMTEuNTYtMjkuMTE1bC0zMC43MzYtMTcuOTM1Yy03LjE2Ni00LjE4NC05LjU3OC0xMy4zNzEtNS40MDUtMjAuNTM3ICBjNC4xODQtNy4xNTYsMTMuMzgxLTkuNTc4LDIwLjUzNy01LjM5NWwyNi42NTIsMTUuNTUzbDAuMTYsMC4wOWwwLjQ0LTEuMTExbDExLjExOS0yOC4wMDRjMy4wNTMtNy43MDYsMTEuNzktMTEuNDcsMTkuNDg2LTguNDA3ICBjNy43MDYsMy4wNTMsMTEuNDgsMTEuNzgsOC40MTcsMTkuNDg2bC0xMy4yNDEsMzMuMzQ4bDI4LjQ5NCwxNi42MzRDMjA4LjczNiwyNzcuMzQzLDIxMS4xNDgsMjg2LjU0MSwyMDYuOTc0LDI5My42OTd6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFMEUwRTI7IiBkPSJNMzgxLjQxMSwyNjYuMzQxbC02MC41ODEsOC41NDdjLTAuMTIsMC4wMi0wLjI0LDAuMDMtMC4zNSwwLjA0aC0wLjAzICBjLTAuMTYsMC4wMi0wLjMxLDAuMDQtMC40NywwLjA1Yy0wLjQsMC4wNC0wLjgxMSwwLjA2LTEuMjExLDAuMDZjLTAuMDEsMC0wLjAxLDAtMC4wMiwwaC0wLjA0Yy0wLjI0LDAtMC40OC0wLjAyLTAuNzIxLTAuMDMgIGMtMC4xNy0wLjAxLTAuMzUtMC4wMS0wLjUyLTAuMDJjLTAuMDEsMC0wLjAxLTAuMDEtMC4wMi0wLjAxYy0wLjk4MS0wLjA4LTEuOTUyLTAuMjYtMi44NzItMC41M2MtMC4xNi0wLjA0LTAuMzItMC4xLTAuNDgtMC4xNSAgYy0wLjI4LTAuMS0wLjU2LTAuMTktMC44MzEtMC4zYy0wLjIxLTAuMDgtMC40LTAuMTYtMC42LTAuMjVjLTAuMjItMC4xLTAuNDQtMC4yLTAuNjYxLTAuMzFjLTAuMjEtMC4xLTAuNDEtMC4yMi0wLjYyMS0wLjMzICBjLTAuMi0wLjExLTAuMzktMC4yMy0wLjU4LTAuMzVjLTAuMi0wLjEyLTAuNC0wLjI1LTAuNTktMC4zOGMtMC4xOS0wLjEzLTAuMzgtMC4yNy0wLjU3LTAuNDJjLTAuMTctMC4xMy0wLjM1LTAuMjYtMC41MS0wLjQgIGMtMC4yLTAuMTctMC40LTAuMzQtMC41OS0wLjUyYy0wLjE0LTAuMTMtMC4yOC0wLjI2LTAuNDItMC40Yy0wLjIxLTAuMjEtMC40MS0wLjQzLTAuNjEtMC42NjFjLTAuMTEtMC4xMS0wLjIxLTAuMjItMC4zMS0wLjM0ICBjLTAuMjMtMC4yOC0wLjQ1LTAuNTgtMC42NzEtMC44ODFjLTAuMDUtMC4wNy0wLjExLTAuMTQtMC4xNy0wLjIyYy0wLjUzLTAuNzcxLTAuOTkxLTEuNTkxLTEuMzcxLTIuNDcyICBjLTAuMDUtMC4xMS0wLjA5LTAuMjItMC4xNC0wLjM0Yy0wLjEyLTAuMzEtMC4yNS0wLjYyMS0wLjM2LTAuOTUxYy0wLjA4LTAuMjQtMC4xNC0wLjQ5LTAuMjEtMC43NDFjLTAuMDYtMC4yLTAuMTItMC40LTAuMTctMC42MDEgIGMtMC4wNi0wLjI4LTAuMTEtMC41Ny0wLjE1LTAuODUxYy0wLjAzLTAuMTUtMC4wNy0wLjMtMC4wOS0wLjQ1Yy0wLjAxLTAuMDQtMC4wMS0wLjA4LTAuMDEtMC4xMmMtMC4wNC0wLjMtMC4wNi0wLjYyMS0wLjA4LTAuOTMxICBjLTAuMDItMC4yMS0wLjA0LTAuNDItMC4wNS0wLjYyMWMwLTAuMjMsMC4wMS0wLjQ2LDAuMDEtMC42OTFjMC4wMS0wLjI5LDAuMDEtMC41OSwwLjAzLTAuODgxdi0wLjEybDMuMDQzLTM2LjA0ICBjMC43MDEtOC4yNjcsNy45NTctMTQuMzkyLDE2LjIyNC0xMy43MDJjOC4yNjcsMC43MDEsMTQuMzkyLDcuOTY3LDEzLjcwMiwxNi4yMjRsLTEuNDYxLDE3LjI4NWw1Ljg1NS0wLjgzMWwzNi4wOS01LjA4NCAgYzguMjA3LTEuMTYxLDE1LjgwMyw0LjU1NCwxNi45NjQsMTIuNzYxQzM5NS4zNDMsMjU3LjU5NCwzODkuNjI4LDI2NS4xOCwzODEuNDExLDI2Ni4zNDF6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNEOEQ3REE7IiBkPSJNMzk0LjE4MiwyNDkuMzc3YzEuMTYxLDguMjE3LTQuNTU0LDE1LjgwMy0xMi43NzEsMTYuOTY0bC02MC41ODEsOC41NDcgIGMtMC4xMiwwLjAyLTAuMjQsMC4wMy0wLjM1LDAuMDRoLTAuMDNsMjAuNjc3LTMzLjIyOGwzNi4wOS01LjA4NEMzODUuNDI1LDIzNS40NTUsMzkzLjAyMSwyNDEuMTcsMzk0LjE4MiwyNDkuMzc3eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZERTQ2OyIgZD0iTTIxNi43NzMsMTIyLjdsLTk4LjE5MywzMy41MzhMMTcuNDY1LDE5MC43NzdsLTE2LjM2NC00OC4wOWMtMS43NjEtNS4xNzQtMS40MDEtMTAuNzI5LDEuMDIxLTE1LjY0MyAgYzIuNDEyLTQuOTA0LDYuNTk2LTguNTc3LDExLjc4LTEwLjMzOWw4Mi4wMDktMjcuODkzbDAuNTgtMC4yaDAuMDFsNzguMDA2LTI2LjU0MmMxMC42OTktMy42NDMsMjIuMzQ5LDIuMTAyLDI1Ljk5MiwxMi43OTEgIEwyMTYuNzczLDEyMi43eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRTBFMEUyOyIgZD0iTTUwOC45NjksMTcxLjgxMWwtMjcuMDAzLDQ0LjAyN2wtODkuODk2LTU1Ljk3N2wtODguOTc1LTU1LjM5N2wyNi4zNjItNDIuNzk2ICBjMi44NDItNC42MzQsNy4zNDYtNy45MDcsMTIuNjcxLTkuMTc4YzUuMzE0LTEuMjgxLDEwLjgxOS0wLjQsMTUuNDgzLDIuNDUybDcyLjE5MSw0NC4yODdsMC4wMiwwLjAxbDcyLjQwMSw0NC40MDcgIGM0LjY2NCwyLjg2Miw3LjkzNyw3LjM2Niw5LjIwOCwxMi42ODFDNTEyLjcwMiwxNjEuNjUyLDUxMS44MzEsMTY3LjE0Nyw1MDguOTY5LDE3MS44MTF6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNEOEQ3REE7IiBkPSJNNTA4Ljk2OSwxNzEuODExbC0yNy4wMDMsNDQuMDI3bC04OS44OTYtNTUuOTc3bDM3LjczMi02MC42MzFsMC4wMiwwLjAxbDcyLjQwMSw0NC40MDcgIGM0LjY2NCwyLjg2Miw3LjkzNyw3LjM2Niw5LjIwOCwxMi42ODFDNTEyLjcwMiwxNjEuNjUyLDUxMS44MzEsMTY3LjE0Nyw1MDguOTY5LDE3MS44MTF6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjY0QzsiIGQ9Ik0yMDYuOTc0LDI5My42OTdjLTIuNzkyLDQuNzg0LTcuODI3LDcuNDQ2LTEyLjk4MSw3LjQ0NmMtMi41NzIsMC01LjE3NC0wLjY2MS03LjU1Ni0yLjA0MiAgIGwtMjQuNTYxLTE0LjM0MmwtMTUuMTgzLTQzLjYyN2wwLjE2LDAuMDlsMC40NC0xLjExMWwxMS4xMTktMjguMDA0YzMuMDUzLTcuNzA2LDExLjc5LTExLjQ3LDE5LjQ4Ni04LjQwNyAgIGM3LjcwNiwzLjA1MywxMS40OCwxMS43OCw4LjQxNywxOS40ODZsLTEzLjI0MSwzMy4zNDhsMjguNDk0LDE2LjYzNEMyMDguNzM2LDI3Ny4zNDMsMjExLjE0OCwyODYuNTQxLDIwNi45NzQsMjkzLjY5N3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkI2NEM7IiBkPSJNMjE2Ljc3MywxMjIuN2wtOTguMTkzLDMzLjUzOEw5NS45MTEsODguODExbDAuNTgtMC4yaDAuMDFsNzguMDA2LTI2LjU0MiAgIGMxMC42OTktMy42NDMsMjIuMzQ5LDIuMTAyLDI1Ljk5MiwxMi43OTFMMjE2Ljc3MywxMjIuN3oiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
                    linkTo: "none",
                    isDisplayEarnedCredits: false,
                },
            },
            data: null,
        };
        settings = Flits.extend(Flits.howToEarnCredit.settings, settings, options);
        Flits.dispatchEvent("Flits:howToEarnCredit:Loaded", { settings: settings });
        Flits(document).on("Flits:howToEarnRules:Successful", function (event) {
            Flits(".flits-how-to-manage-container").removeClass("flits-d-none");
            Flits(".flits-how-to-manage-empty").addClass("flits-d-none");
            Flits(".flits-how-to-manage-loader").hide();
        });
        let allRules = Flits.howToEarnCredit.settings.data.rules.all_rules_data;
        let rulesConfig = Flits.howToEarnCredit.settings.rulesConfig;
        let descriptionCloneTag;
        function setRules(data) {
            let rules = data;
            let title;
            let description;
            let multilangTitle;
            let multilangDescription;
            Flits.each(rules, function (ruleIndex, ruleItem) {
                let ruleBoxClone = Flits("#flits-rule-card-clone").clone().removeClass("flits-d-none");
                ruleBoxClone.removeAttr("id");
                let credits;
                if (ruleItem.is_default_rule) {
                    credits = ruleItem.credits;
                    if (ruleItem.is_fixed || ruleItem.module_on == "monthly_date") {
                        credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                    } else {
                        credits /= 100;
                        credits += "%";
                    }
                    switch (ruleItem.module_on) {
                        case "register":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.register_credit_rule_title", "Register credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.register_credit_rule_description", "Register and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            break;
                        case "subscribe":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.subscribe_credit_rule_title", "Subscriber credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.subscribe_credit_rule_description", "Subscribe and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            break;
                        case "order_number":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.specific_order_credit_rule_title", "Credit on specific order");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.specific_order_credit_rule_description", "Earn {{ credit }} credit on your order number {{ order_count }}");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ order_count }}", ruleItem.column_value);
                            if (ruleItem.relation == ">=") {
                                multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.specific_order_and_next_orders_credit_rule_title", "Credit on order number {{ order_count }} and next orders");
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_earn_credit_page.specific_order_and_next_orders_credit_rule_description",
                                    "You can earn {{ credit }} credit on order number {{ order_count }} and next orders {{ order_count+1 }}, {{ order_count+2 }}..... {{ order_count+n }}"
                                );
                                title = multilangTitle.replace("{{ order_count }}", ruleItem.column_value);
                                description = multilangDescription
                                    .replace("{{ credit }}", credits)
                                    .replace("{{ order_count }}", ruleItem.column_value)
                                    .replace("{{ order_count+1 }}", parseInt(ruleItem.column_value) + 1)
                                    .replace("{{ order_count+2 }}", parseInt(ruleItem.column_value) + 2)
                                    .replace("{{ order_count+n }}", "n");
                            }
                            break;
                        case "birthdate":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_title", "Birthday credit*");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_description_1", "Share your birthdate with us to get {{ credit }} credit on your birthday.");
                            let birthdayMultilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_description_2", "{{ days }} day/s left for a birthday reward of {{ credit }} credit.");
                            let termsCondtionMultilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.birthdate_credit_rule_description_3", "*You can avail this credit only once in a year.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            let birthdayDescription = birthdayMultilangDescription.replace("{{ credit }}", credits);
                            if (Flits("[data-flits-birthdate]").attr("data-flits-birthdate")) {
                                description = birthdayDescription;
                                ruleBoxClone.find(".flits-birthday-unlock-badge").addClass("flits-hide");
                            }
                            descriptionCloneTag = ruleBoxClone.find(".flits-rule-credit").clone();
                            descriptionCloneTag.addClass("flits-birthday-rule-terms-condition flits-mt-10");
                            ruleBoxClone.find(".flits-rule-credit").after(descriptionCloneTag);
                            ruleBoxClone.find(".flits-rule-credit:not(.flits-birthday-rule-terms-condition)").addClass("flits-birthday-rule-description");
                            ruleBoxClone.find(".flits-rule-credit").attr("data-flits-birthdate-count-text", birthdayDescription);
                            ruleBoxClone.find(".flits-birthday-rule-terms-condition").html(termsCondtionMultilangDescription);
                            break;
                        case "monthly_date":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.monthly_credit_rule_title", "Monthly credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.monthly_credit_rule_description", "You will get {{ credit }} credit on  {{ date }} of every month.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ date }}", new Date(ruleItem.column_value).getDate());
                            if (ruleItem.is_fixed) {
                                multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.special_day_credit_rule_title", "Bonus day credit");
                                multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.special_day_credit_rule_description", "Get special day credit on {{ date }}");
                                title = multilangTitle;
                                description = multilangDescription.replace(
                                    "{{ date }}",
                                    new Date(ruleItem.column_value).getDate() + "/" + (new Date(ruleItem.column_value).getMonth() + 1) + "/" + new Date(ruleItem.column_value).getFullYear()
                                );
                            }
                            break;
                        case "product_review":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.product_review_credit_rule_title", "Product review credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.product_review_credit_rule_description", "Write a product review and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            break;
                        case "product_tag":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.product_tag_credit_rule_title", "Credit for specific product collection");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.product_tag_credit_rule_description", "Buy product/s with (any tag) {{ tag }} and get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            let productTagSpan = Flits("<span/>");
                            Flits(ruleItem.avails).each(function (index, item) {
                                let productTagAnchor = Flits('<a href="/search?q=' + item + '" target="_blank" class="flits-link">' + item + "</a>");
                                if (index > 0) {
                                    productTagSpan.append(",");
                                }
                                productTagSpan.append(productTagAnchor);
                            });
                            description = description.replace("{{ tag }}", productTagSpan.html());
                            break;
                        case "add_product_to_wishlist":
                            multilangTitle = Flits.t("Flits.locals.how_to_earn_credit_page.wishlisted_product_credit_rule_title", "Wishlisted product credit");
                            multilangDescription = Flits.t("Flits.locals.how_to_earn_credit_page.wishlisted_product_credit_rule_description", "You can earn {{ credit }} credit when you add product/s in wishlist.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            break;
                        case "cart":
                            multilangTitle = Flits.t("Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_title", "Spend on cart");
                            title = multilangTitle;
                            let cartRange = ruleItem.column_value;
                            let range = cartRange.split(":");
                            let minRange = Flits.formatMoney(Math.abs(range[0] * 100), Flits.money_format);
                            let maxRange = Flits.formatMoney(Math.abs(range[1] * 100), Flits.money_format);
                            if (ruleItem.is_fixed && range[1] != "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_1",
                                    "Your cart value is between {{ min_cart_value }}-{{ max_cart_value }}. Congratulations you are eligible to use {{ credit }} credit."
                                );
                                description = multilangDescription
                                    .replace("{{ min_cart_value }}-{{ max_cart_value }}", '{{ min_cart_value }}<span class="flits-divider">-</span>{{ max_cart_value }}')
                                    .replace("{{ min_cart_value }}", minRange)
                                    .replace("{{ max_cart_value }}", maxRange)
                                    .replace("{{ credit }}", credits);
                            } else if (ruleItem.is_fixed && range[1] == "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_3",
                                    "Your cart value is {{ min_cart_value }} (or more). Congratulations you can use {{ credit }} credit."
                                );
                                description = multilangDescription.replace("{{ min_cart_value }}", minRange).replace("{{ credit }}", credits);
                            } else if (!ruleItem.is_fixed && range[1] != "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_2",
                                    "Your cart value is between {{ min_cart_value }}-{{ max_cart_value }}. Congratulations you are eligible to use {{ credit }} of cart value as credit."
                                );
                                description = multilangDescription
                                    .replace("{{ min_cart_value }}-{{ max_cart_value }}", '{{ min_cart_value }}<span class="flits-divider">-</span>{{ max_cart_value }}')
                                    .replace("{{ min_cart_value }}", minRange)
                                    .replace("{{ max_cart_value }}", maxRange)
                                    .replace("{{ credit }}", credits);
                            } else if (!ruleItem.is_fixed && range[1] == "-1") {
                                multilangDescription = Flits.t(
                                    "Flits.locals.how_to_spend_credit_page.spend_credit_on_cart_rule_description_4",
                                    "Your cart value is {{ min_cart_value }} (or more). Congratulations you are eligible to use {{ credit }} of cart value as credit."
                                );
                                description = multilangDescription.replace("{{ min_cart_value }}", minRange).replace("{{ credit }}", credits);
                            }
                            break;
                        case "referrer_friend":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.referrer_credit_rule_title", "Referral Program");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.referrer_credit_rule_description", "Invite your friends and get {{ credit }} credit when they sign up.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            break;
                        case "referee_friend":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.referee_credit_rule_title", "Referral Program");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.referee_credit_rule_description", "When your friends accept the invitation, they will get  {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits);
                            break;
                        case "referrals_total_number":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.credit_on_number_of_referrals_rule_title", "Credit on numbers of referrals");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.credit_on_number_of_referrals_rule_description", "When you reach {{ referral_count }} referrals you get {{ credit }} credit.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ referral_count }}", ruleItem.column_value);
                            break;
                        case "referrals_total_spent":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.credit_on_referrals_total_spent_amount_rule_title", "Credit after referral's total spent amount");
                            multilangDescription = Flits.t(
                                "Flits.locals.refer_friend_page.credit_on_referrals_total_spent_amount_rule_description",
                                "You can earn {{ credit }} credit when your referral's total spent amount is {{ total_spent_amount }} or more."
                            );
                            title = multilangTitle;
                            let totalSpentAmount = Flits.formatMoney(Math.abs(parseInt(ruleItem.column_value) * 100), Flits.money_format);
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ total_spent_amount }}", totalSpentAmount);
                            break;
                        case "referrals_order_number":
                            multilangTitle = Flits.t("Flits.locals.refer_friend_page.referrals_specific_order_credit_rule_title", "Credit on specific order by referee");
                            multilangDescription = Flits.t("Flits.locals.refer_friend_page.referrals_specific_order_credit_rule_description", "You can earn {{ credit }} credit on your referee's order number {{ order_count }}.");
                            title = multilangTitle;
                            description = multilangDescription.replace("{{ credit }}", credits).replace("{{ order_count }}", ruleItem.column_value);
                            if (ruleItem.relation == ">=") {
                                multilangTitle = Flits.t("Flits.locals.refer_friend_page.referrals_specific_order_and_next_orders_credit_rule_title", "Credit on referee's order number {{ order_count }} and next orders");
                                multilangDescription = Flits.t(
                                    "Flits.locals.refer_friend_page.referrals_specific_order_and_next_orders_credit_rule_description",
                                    "You can earn {{ credit }} credit on referee's order number {{ order_count }} and next orders {{ order_count+1 }}, {{ order_count+2 }}... {{ order_count+n }}"
                                );
                                title = multilangTitle.replace("{{ order_count }}", ruleItem.column_value);
                                description = multilangDescription
                                    .replace("{{ credit }}", credits)
                                    .replace("{{ order_count }}", ruleItem.column_value)
                                    .replace("{{ order_count+1 }}", parseInt(ruleItem.column_value) + 1)
                                    .replace("{{ order_count+2 }}", parseInt(ruleItem.column_value) + 2)
                                    .replace("{{ order_count+n }}", "n");
                            }
                            break;
                        case "checkout_shipping":
                            multilangTitle = Flits.t("Flits.locals.how_to_spend_credit_page.spend_credit_on_shipping_rule_title", "Free Shipping");
                            multilangDescription = Flits.t("Flits.locals.how_to_spend_credit_page.spend_credit_on_shipping_rule_description", "You can use your credit on shipping charges.");
                            title = multilangTitle;
                            description = multilangDescription;
                            break;
                        default:
                            break;
                    }
                } else {
                    title = ruleItem.title;
                    description = ruleItem.description;
                }
                ruleBoxClone.find(".flits-rule-details").html(title);
                if (ruleItem.module_on == "birthdate") {
                    ruleBoxClone.find(".flits-birthday-rule-description").html(description);
                } else {
                    ruleBoxClone.find(".flits-rule-credit").html(description);
                }
                if (ruleItem.mappedRuleIds) {
                    ruleBoxClone.attr("data-flits-rule-id-array", ruleItem.mappedRuleIds.toString());
                } else {
                    ruleBoxClone.attr("data-flits-rule-id-array", ruleItem.rule_id);
                }
                ruleBoxClone.attr("data-flits-rule-id", ruleItem.rule_id);
                if (ruleItem.is_earned) {
                    ruleBoxClone.find(".flits-rule-box").addClass("flits-earned-rule flits-z-dept-1");
                }
                if (rulesConfig[ruleItem.module_on]) {
                    let image = rulesConfig[ruleItem.module_on].icon == undefined ? "" : "data:image/svg+xml;base64," + rulesConfig[ruleItem.module_on].icon;
                    ruleBoxClone.find(".flits-rule-image").attr("src", image);
                }
                switch (ruleItem.tab_to_append) {
                    case "flits_spent_rules":
                        let rangeValue = ruleItem.column_value.split(":");
                        let rangeValueFrom = parseInt(rangeValue[0]);
                        ruleBoxClone.css("order", rangeValueFrom);
                        break;
                    case "flits_from_admin_rules":
                        title = ruleItem.title;
                        description = ruleItem.description;
                        ruleBoxClone.find(".flits-rule-details").html(title);
                        ruleBoxClone.find(".flits-rule-credit").html(description);
                        image = rulesConfig["admin_rule"].icon == undefined ? "" : "data:image/svg+xml;base64," + rulesConfig["admin_rule"].icon;
                        ruleBoxClone.find(".flits-rule-image").attr("src", image);
                        Flits(".flits-from-admin-div .flits-rules-card").append(ruleBoxClone);
                        break;
                    default:
                        break;
                }
                Flits(".flits-nav-pil-link[data-href=" + ruleItem.tab_to_append + "]")
                    .parent()
                    .removeClass("flits-d-none");
                Flits(".flits-tab-pane[data-id=" + ruleItem.tab_to_append + "]").append(ruleBoxClone);
                if (rules.length - 1 == ruleIndex) {
                    Flits.dispatchEvent("Flits:howToEarnRules:Successful");
                    Flits.dispatchEvent("Flits:howToSpentRules:Successful");
                    Flits.dispatchEvent("Flits:referFriendRules:Successful");
                    Flits.dispatchEvent("Flits:adminRules:Successful");
                }
            });
            Flits(".flits-nav-item.flits-d-none").remove();
            if (Flits(".flits-nav-pil-link[data-href=" + Flits.howToEarnCredit.settings.ruleTabActive + "]").length == 0) {
                Flits(".flits-nav-pils li:first-child a").addClass("flits-nav-pil-link-active");
                Flits(".flits-tab-pane[data-id=" + Flits(".flits-nav-pils li:first-child a").attr("data-href") + "]").addClass("flits-nav-tab-active");
            } else {
                Flits(".flits-nav-pil-link[data-href=" + Flits.howToEarnCredit.settings.ruleTabActive + "]").addClass("flits-nav-pil-link-active");
                Flits(".flits-tab-pane[data-id=" + Flits.howToEarnCredit.settings.ruleTabActive + "]").addClass("flits-nav-tab-active");
            }
        }
        Flits(document).on("click", ".flits-nav-pil-link", function () {
            let targetId = Flits(this).attr("data-href");
            Flits(".flits-nav-pil-link").removeClass("flits-nav-pil-link-active");
            Flits(this).addClass("flits-nav-pil-link-active");
            Flits(".flits-tab-pane").removeClass("flits-nav-tab-active");
            Flits('div[data-id="' + targetId + '"]').addClass("flits-nav-tab-active");
        });
        if (allRules.length > 0) {
            setRules(allRules);
        } else {
            Flits(".flits-how-to-manage-container").addClass("flits-d-none");
            Flits(".flits-how-to-manage-empty").removeClass("flits-d-none");
            Flits(".flits-how-to-manage-loader").hide();
        }
    });
    var referCredit = (Flits.referCredit = function (options) {
        Flits.referCredit.settings = {};
        var settings = { data: null };
        settings = Flits.extend(Flits.referCredit.settings, settings, options);
        Flits.dispatchEvent("Flits:referCredit:Loaded", { settings: settings });
        Flits(document).on("Flits:referCredit:ListSuccessful", function (event) {
            Flits(".flits-refer-friend-content").removeClass("flits-d-none");
            Flits(".flits-refer-credit-table-div").removeClass("flits-d-none");
            Flits(".flits-refer-credit-empty").addClass("flits-d-none");
            Flits(".flits-refer-credit-loader").hide();
        });
        Flits(document).on("click", ".flits-copy-btn", function () {
            Flits.copyClipBoardCode(this);
            flitsSnackbar.show({ text: Flits.t("Flits.locals.refer_friend_page.referral_link_copied", "Link Copied"), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: 1500 });
        });
        Flits(document).on("click", ".flits-share-btn", function (event) {
            let platform = Flits(this).attr("data-flits-share-platform");
            let referralLink = Flits('input[name="referral link"]').val();
            let facebookDescription = encodeURIComponent(
                unescape(
                    Flits.t("Flits.locals.refer_friend_page.referral_program_invitation_message", "You can earn credit for creating an account with {{ shop_name }}. Use this link and get rewarded : {{ link }}")
                        .replace("{{ link }}", "")
                        .replace("{{ shop_name }}", Flits.shop_name)
                )
            );
            let encodedDescription = encodeURIComponent(
                unescape(
                    Flits.t("Flits.locals.refer_friend_page.referral_program_invitation_message", "You can earn credit for creating an account with {{ shop_name }}. Use this link and get rewarded : {{ link }}")
                        .replace("{{ link }}", referralLink)
                        .replace("{{ shop_name }}", Flits.shop_name)
                )
            );
            let description = Flits.t("Flits.locals.refer_friend_page.referral_program_invitation_message", "You can earn credit for creating an account with {{ shop_name }}. Use this link and get rewarded : {{ link }}")
                .replace("{{ link }}", referralLink)
                .replace("{{ shop_name }}", Flits.shop_name);
            let url = null;
            switch (platform) {
                case "facebook":
                    url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(unescape(referralLink)) + "&quote=" + facebookDescription;
                    break;
                case "whatsapp":
                    url = "https://api.whatsapp.com/send?text=" + encodedDescription;
                    break;
                case "navigator_share":
                    var data = { title: "Refer Freind", text: description };
                    let sharePromise = navigator.share(data);
                    return true;
                    break;
                default:
                case "facebook":
                    break;
            }
            if (url) {
                Flits.popupWindow(url, platform.charAt(0).toUpperCase() + platform.slice(1) + " Share", window, 700, 700);
            }
        });
        function updateReferCredit(resp) {
            let customer = resp.customer;
            let log = customer.credit_log;
            if (customer.referral_code != "") {
                Flits(".flits-refferal-code-div").html(customer.referral_code);
                let shareableLink =
                    "https://" + location.host + "/account/register?flits_refer_code=" + encodeURIComponent(unescape(btoa(customer.referral_code))) + "&flits_inviter_name=" + encodeURIComponent(unescape(btoa(customer.name)));
                Flits('input[name="referral link"]').val(shareableLink);
                Flits(".flits-refer-link-container").removeClass("flits-d-none");
            }
            if (resp.refer_by != "") {
                Flits("#flits-referby-row").removeClass("flits-d-none");
                Flits("#flits-referred-by").val(resp.refer_by);
            }
            if (typeof navigator.share == "function") {
                Flits(".flits-navigator-button").removeClass("flits-d-none");
            }
            if (resp.facebook_share) {
                Flits(".flits-facebook-button").removeClass("flits-d-none");
            }
            if (resp.whatsapp_share) {
                Flits(".flits-whatsapp-button").removeClass("flits-d-none");
            }
            let totalEarnedCredits = 0;
            if (log.length > 0) {
                Flits.each(log, function (logIndex, logItem) {
                    let liClone = Flits(".flits-refer-credit-log-item-template").clone();
                    liClone.removeClass("flits-credit-log-title");
                    liClone.removeClass("flits-refer-credit-log-item-template");
                    liClone.attr("id");
                    liClone.attr("id", "flits-log-" + logItem.id);
                    let credits = logItem.credits;
                    totalEarnedCredits += credits;
                    credits = Flits.formatMoney(Math.abs(credits), Flits.money_format);
                    liClone.find(".flits-earn-credit-icon-round").removeClass("flits-d-none");
                    liClone.find(".flits-referral-customer-credit").html(credits);
                    let referrerName = Flits.t("Flits.locals.refer_friend_page.customer_deleted", "Customer Deleted");
                    let referrerEmail = "--";
                    if (logItem["referrer_customer"] != null) {
                        referrerName = logItem["referrer_customer"].name;
                        referrerEmail = logItem["referrer_customer"].email;
                    }
                    referrerName == "--" ? (referrerName = Flits.t("Flits.locals.refer_friend_page.customer_deleted", "Customer Deleted")) : (referrerName = referrerName);
                    referrerEmail == "--" ? (referrerEmail = Flits.t("Flits.locals.refer_friend_page.customer_deleted", "Customer Deleted")) : (referrerEmail = referrerEmail);
                    liClone.find(".flits-referral-customer-name").html(referrerName).attr("data-tippy-content", referrerName);
                    liClone.find(".flits-referral-customer-email").html(referrerEmail).attr("data-tippy-content", referrerEmail);
                    liClone.find(".flits-referral-customer-credit-date").html(logItem.created_at);
                    Flits(".flits-refer-credit-log-list").append(liClone);
                    if (log.length - 1 == logIndex) {
                        Flits.dispatchEvent("Flits:referCredit:ListSuccessful");
                    }
                });
            } else {
                Flits(".flits-refer-friend-content").removeClass("flits-d-none");
                Flits(".flits-refer-credit-table-div").addClass("flits-d-none");
                Flits(".flits-refer-credit-empty").removeClass("flits-d-none");
                Flits(".flits-refer-credit-loader").hide();
            }
            if (Flits(window).width() > 992) {
                setTimeout(function () {
                    if (Flits(".flits-refer-credit-log-list .flits-credit-log-item").length > 8) {
                        let paddingVal = Flits(".flits-refer-credit-log-list").outerWidth() - Flits(".flits-refer-credit-log-list li:first-child").outerWidth() + 15;
                        Flits(".flits-refer-credit-table-div .flits-credit-log-header li").css("padding-right", paddingVal);
                    }
                }, 800);
            }
            totalEarnedCredits = Flits.formatMoney(Math.abs(totalEarnedCredits), Flits.money_format);
            Flits("#flits-refer-program-total-credits").html(totalEarnedCredits);
        }
        let data = Flits.referCredit.settings.data;
        if (data.status) {
            updateReferCredit(data);
        } else {
            switch (data.error_code) {
                case 2:
                case 3:
                    break;
                default:
                    Flits(".flits-refer-friend-content").removeClass("flits-d-none");
                    Flits(".flits-refer-credit-empty").addClass("flits-d-none");
                    Flits(".flits-refer-credit-loader").hide();
                    break;
            }
        }
    });
    var changePassword = (Flits.changePassword = function (options) {
        Flits.changePassword.settings = {};
        var settings = {};
        settings = Flits.extend(Flits.changePassword.settings, settings, options);
        Flits.dispatchEvent("Flits:changePassword:Loaded", { settings: settings });
        Flits(document).on("keyup", "#flits-form-change-password input[name=password]", function () {
            let inputLength = Flits(this).val().length;
            if (inputLength >= 6 && inputLength <= 40) {
                Flits("#flits-form-change-password .flits-password-hint").hide();
            } else {
                Flits("#flits-form-change-password .flits-password-hint").show();
            }
        });
        Flits("#flits-form-change-password input[name=password]").on("focus", function () {
            Flits("#flits-form-change-password .flits-password-hint").show();
            Flits(".flits-password-hint").css("opacity", 1);
        });
        Flits("#flits-form-change-password input[name=password]").on("blur", function () {
            Flits("#flits-form-change-password .flits-password-hint").hide();
            Flits(".flits-password-hint").css("opacity", 0);
        });
        Flits(document).on("keyup", "#flits-form-change-password input[name=password_confirmation]", function () {
            let inputLength = Flits(this).val().length;
            if (inputLength >= 6 && inputLength <= 40) {
                Flits("#flits-form-change-password .flits-confirm-password-hint").hide();
            } else {
                Flits("#flits-form-change-password .flits-confirm-password-hint").show();
            }
        });
        Flits("#flits-form-change-password input[name=password_confirmation]").on("focus", function () {
            Flits("#flits-form-change-password .flits-confirm-password-hint").show();
            Flits("#flits-form-change-password .flits-confirm-password-hint").css("opacity", 1);
        });
        Flits("#flits-form-change-password input[name=password_confirmation]").on("blur", function () {
            Flits("#flits-form-change-password .flits-confirm-password-hint").hide();
            Flits("#flits-form-change-password .flits-confirm-password-hint").css("opacity", 0);
        });
        Flits(".flits-change-pass-button").on("click", function () {
            let password = Flits("#flits-form-change-password").find("input[name=password]")[0];
            let confirm_password = Flits("#flits-form-change-password").find("input[name=password_confirmation]")[0];
            let formSubmit = true;
            Flits("#flits-form-change-password .flits-password-hint").hide();
            Flits("#flits-form-change-password .flits-confirm-password-hint").hide();
            if (password.value.length == 0 || confirm_password.value.length == 0) {
                formSubmit = false;
                flitsSnackbar.show({ text: Flits.t("Flits.locals.update_password_page.password_empty_message", "The password is empty"), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
            } else {
                if (password.value.length >= 6 && password.value.length <= 40) {
                    if (password.value !== confirm_password.value) {
                        formSubmit = false;
                        flitsSnackbar.show({ text: Flits.t("Flits.locals.update_password_page.password_not_match", "Passwords didn't match. Try again."), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                } else {
                    formSubmit = false;
                    flitsSnackbar.show({ text: Flits.t("Flits.locals.update_password_page.password_hint_message", "Password must between 6 to 40 characters."), pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                }
                if (confirm_password.value.length >= 6 && confirm_password.value.length <= 40) {
                } else {
                }
            }
            if (formSubmit) {
                Flits("#flits-form-change-password").submit();
            }
        });
        Flits("#flits-form-change-password").submit(function (event) {
            event.preventDefault();
            let form = Flits(this);
            let params = form.serializeArray();
            let url = Flits.base_url + "/" + Flits.customer_id + form.attr("action");
            let method = form.attr("method");
            params.push({ name: "customer_hash", value: Flits.customerHash }), params.push({ name: "token", value: Flits.token });
            flitsSnackbar.show({ text: Flits.t("Flits.locals.update_password_page.updating_password", "Updating password..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default" });
            Flits.dispatchEvent("Flits:ChangesPassword:BeforeUpdate", { params: params });
            Flits.ajax({ method: method, url: url, data: params })
                .done(function (resp) {
                    if (resp.status) {
                        flitsSnackbar.show({
                            text: Flits.t("Flits.locals.update_password_page.password_updated_successfully", "Your password for account {{ email }} has been successfully updated").replace(
                                "{{ email }}",
                                "<br> <strong> " + Flits("#flits-form-profile").find("input[name=email]").val() + "</strong> <br>"
                            ),
                            pos: "bottom-center",
                            showAction: false,
                            customClass: "flits-alert-success",
                        });
                        let login_form = Flits("<form/>");
                        login_form.attr("action", "/account/login");
                        login_form.attr("method", "post");
                        login_form.attr("autocomplete", "off");
                        login_form.append('<input type="email" name="customer[email]" class="flits-d-none" autocomplete="off" value="' + Flits("#flits-form-profile").find("input[name=email]").val() + '">');
                        login_form.append('<input type="hidden" name="checkout_url"  class="flits-d-none" autocomplete="off" value="' + location.href + '">');
                        login_form.append('<input type="password" name="customer[password]"  class="flits-d-none" autocomplete="off" value="' + Flits("#flits-form-change-password").find("input[name=password]").val() + '">');
                        Flits("body").append(login_form);
                        form[0].reset();
                        login_form.submit();
                        Flits.dispatchEvent("Flits:ChangesPassword:Updated", { resp: resp });
                    } else {
                        flitsSnackbar.show({ text: resp.error, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    }
                })
                .fail(function (resp) {
                    flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                })
                .always(function () {});
            return false;
        });
    });
    Flits.extend({
        navigationFunc: function (elem, from_flag) {
            from_flag = from_flag == undefined ? 1 : from_flag;
            let newURL = location.href.split("#")[0];
            Flits.dispatchEvent("Flits:navigation:Before", { el: elem });
            var el = elem.replace("#", "");
            if (Flits('.flits-nav-tabs a[href="' + elem + '"]').length == 0 || Flits(".flits-account-page-tabs #flits_tab_" + el).length == 0) {
                elem = Flits.AccountPage.settings.active_tab;
                el = elem.replace("#", "");
            }
            if (el == "changePassword") {
                if (Flits("#flits-form-change-password")[0]) {
                    Flits("#flits-form-change-password")[0].reset();
                }
            }
            if (Flits(window).width() < 992 && from_flag == 0) {
                Flits(".flits-account-page-container").removeClass("flits-active");
            } else {
                Flits(".flits-account-page-container").addClass("flits-active");
                if (from_flag == 1) {
                    window.history.pushState("object", document.title, newURL + elem);
                }
            }
            Flits(".flits-nav-tabs .flits-menu-item, .flits-tab-box").removeClass("flits-active");
            Flits('.flits-nav-tabs .flits-menu-item a[href="' + elem + '"]')
                .parent()
                .addClass("flits-active");
            Flits(".flits-account-page-tabs #flits_tab_" + el).addClass("flits-active");
            Flits.dispatchEvent("Flits:navigation:After", { el: elem });
            Flits.setupContainer();
        },
        flitsSnackbarHide: function () {
            setTimeout(
                function () {
                    if (flitsSnackbar.current === this) {
                        flitsSnackbar.current.style.opacity = 0;
                        flitsSnackbar.current.style.top = "-100px";
                        flitsSnackbar.current.style.bottom = "-100px";
                    }
                }.bind(flitsSnackbar.snackbar),
                1
            );
        },
        productDomDisplay: function (data, selector, condtion) {
            if (condtion == 0) {
                let count = data.count;
                let products = data.data;
                let status = data.status;
                if (status && count > 0) {
                    products.forEach(domCloneFunction);
                }
            } else {
                if (data.length > 0) {
                    data.forEach(domCloneFunction);
                }
            }
            function domCloneFunction(item, index) {
                let appenSelector = Flits("." + selector)[0];
                let clone_dom = Flits("#flits-product-card-clone").clone()[0];
                let cloneSkeleton_card = Flits(".flits-skeleton-product-card-template").clone();
                cloneSkeleton_card.removeClass("flits-skeleton-product-card-template");
                let listElement = '<li data-flits-product-handle="' + item.product_handle + '"></li>';
                Flits(clone_dom).removeAttr("id");
                Flits(clone_dom)
                    .find(".flits-product-image")
                    .attr("href", "/products/" + item.product_handle);
                if (condtion == 0) {
                    Flits(clone_dom).find(".flits-remove-product").removeClass("flits-d-none");
                    Flits(clone_dom).find(".flits-product-card").addClass("flits-wishlist-card");
                    Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-add-action-from", "wishlist");
                    listElement = '<li data-flits-product-handle="' + item.product_handle + '" data-flits-product-id="' + item.product_id + '"></li>';
                } else {
                    Flits(clone_dom).find(".flits-product-card").addClass("flits-recently-view-card");
                    Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-add-action-from", "recentlyView");
                    Flits(clone_dom).find(".flits-remove-product").remove();
                }
                Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-add-cart-text", Flits.t("Flits.locals.buttons.add_to_cart", "Add to Cart"));
                Flits(clone_dom).find(".flits-add-to-cart").attr("data-flits-sold-text", Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                Flits(appenSelector).append(listElement);
                Flits(appenSelector).find("li:last-child").append(clone_dom, cloneSkeleton_card);
            }
            var temp_element = Flits("." + selector + " li");
            temp_element.each(function (e, v) {
                Flits.getProductData(v);
                if (e == temp_element.length - 1) {
                    if (condtion == 1) {
                        Flits.dispatchEvent("Flits:recentlyDataBind:Successful");
                    } else {
                        Flits.dispatchEvent("Flits:WishlistDataBind:Successful");
                    }
                }
            });
        },
        getProductData: function (item) {
            var itemDom = item;
            let handle = Flits(item).attr("data-flits-product-handle");
            function ajaxCallPromise(url) {
                return Flits.ajax({
                    type: "GET",
                    url: url,
                    xhr: function () {
                        return (this._xhr_url = Flits.ajaxSettings.xhr());
                    },
                });
            }
            function getProductDataSuccess(resp) {
                fillProductData(resp);
                Flits.dispatchEvent("Flits:getShopifyProductData:complete", { handle: handle, resp: resp, item: item, status: true });
            }
            function firstTimeAjaxFail(resp) {
                var is_wishlist_data = false;
                Flits(item).find(".flits-product-card").hasClass("flits-wishlist-card") ? (is_wishlist_data = true) : is_wishlist_data;
                checkForProductHandleUpdate(handle, item, is_wishlist_data);
                Flits.dispatchEvent("Flits:getShopifyProductData:complete", { handle: handle, resp: resp, item: item, status: false });
            }
            function checkForProductHandleUpdate(handle, item, is_wishlist_data) {
                function productHandleChangedSuccess(productPageHtmlResponse) {
                    let url = this._xhr_url.responseURL;
                    function setupUpdatedProductHandleDataSuccess(resp) {
                        let new_handle = resp.product.handle;
                        Flits(item).attr("data-flits-product-handle", new_handle);
                        getProductDataSuccess(resp);
                        if (is_wishlist_data) {
                            Flits.Wishlist.settings.replaceWishlistProduct(handle, resp.product);
                        } else {
                            Flits.recentlyView.settings.replaceHandle(handle, new_handle);
                        }
                    }
                    ajaxCallPromise(url + ".json").done(setupUpdatedProductHandleDataSuccess);
                }
                function productHandleChangedFail(resp) {
                    if (is_wishlist_data) {
                        fillUnavailableProductData(handle, item);
                    } else {
                        Flits(item).remove();
                        Flits.recentlyView.settings.removeHandle(handle);
                    }
                }
                ajaxCallPromise("/products/" + handle)
                    .done(productHandleChangedSuccess)
                    .fail(productHandleChangedFail);
            }
            ajaxCallPromise("/products/" + handle + ".json")
                .done(getProductDataSuccess)
                .fail(firstTimeAjaxFail);
            function fillUnavailableProductData(handle, itemDom) {
                var product = Flits.Wishlist.settings.flitsGetProductDetailsFromWishlistResponse(handle);
                let image = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif";
                if (product.product_image != null) {
                    image = product.product_image;
                }
                Flits(itemDom).find(".flits-product-image img").attr("src", image);
                Flits(itemDom).find(".flits-product-image").removeAttr("href");
                Flits(itemDom).find(".flits-floating-label label").html(product.product_title);
                Flits(itemDom)
                    .find(".flits-product-price")
                    .html(Flits.formatMoney(Math.abs(0 * 100), Flits.money_format));
                Flits(itemDom).find(".flits-floating-label").addClass("flits-without-select"), Flits(itemDom).find(".flits-floating-label.flits-without-select").attr("data-tippy-content", product.product_title);
                Flits(itemDom).find(".flits-floating-label .flits-variant-select").hide();
                Flits(itemDom).find(".flits-floating-label label").attr("data-tippy-content", product.product_title);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-id", product.product_id);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-title", product.product_title);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-handle", product.product_handle);
                Flits(itemDom).find(".flits-add-to-cart").addClass("flits-secondary-btn flits-unavailable-btn").removeClass("flits-primary-btn flits-add-to-cart");
                Flits(itemDom).find(".flits-unavailable-btn").attr("data-remove", product.product_id);
                Flits(itemDom).find(".flits-unavailable-btn").attr("data-flits-unavailable-text", Flits.t("Flits.locals.buttons.product_unavailable_text", "Currently Unavailable"));
                let product_unavailable_text = Flits(itemDom).find(".flits-unavailable-btn").attr("data-flits-unavailable-text");
                Flits(itemDom).find(".flits-unavailable-btn").attr("disabled", !0);
                Flits(itemDom).find(".flits-unavailable-btn").text(product_unavailable_text);
                Flits(itemDom).find(".flits-product-quantity").addClass("flits-disabled");
                Flits(itemDom).find(".flits-product-skeleton-card").remove();
                Flits(itemDom).addClass("flits-unavailable-product");
                Flits(itemDom).find("form").css("display", "block");
            }
            function fillProductData(response) {
                let product = response.product;
                let image = "https://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif";
                if (product.image != null) {
                    image = product.image.src;
                }
                let extidx = image.lastIndexOf(".");
                let extension = image.substr(extidx);
                image = image.replace(extension, "_200x_crop_center" + extension);
                Flits(itemDom).find(".flits-product-image img").attr("src", image);
                let imgWidth = Flits(itemDom).find(".flits-product-image img").width();
                let imgHeight = Flits(itemDom).find(".flits-product-image img").height();
                if (imgWidth > imgHeight) {
                } else {
                }
                let variantPriceValue = 0;
                product.variants.forEach(function (variant, variantIndex) {
                    let variantPrice = Flits.formatMoney(Math.abs(variant.price * 100), Flits.money_format);
                    let variantTitle = variant.title;
                    var optionElement = Flits("<option/>");
                    if (product.variants.length == 1 && variantTitle == "Default Title") {
                        optionElement.html(variantTitle);
                        optionElement.attr("value", variant.id);
                        optionElement.attr("data-flits-variant-price", variantPrice);
                        Flits(itemDom).find(".flits-floating-label").addClass("flits-without-select");
                        Flits(itemDom).find(".flits-floating-label.flits-without-select").attr("data-tippy-content", product.title);
                        Flits(itemDom).find(".flits-floating-label .flits-variant-select").hide();
                    } else {
                        optionElement.html(variantTitle);
                        optionElement.attr("value", variant.id);
                        optionElement.attr("data-flits-variant-price", variantPrice);
                    }
                    Flits.ajax({ type: "GET", url: location.origin + "/products/" + product.handle + "?view=flits_product_variant_data&variant=" + variant.id })
                        .done(function (resp) {
                            let parser = new DOMParser();
                            let htmlDoc = parser.parseFromString(resp, "text/html");
                            let response = JSON.parse(Flits(htmlDoc).text());
                            if (!response.variant_available) {
                                optionElement.html(variantTitle + " - " + Flits.t("Flits.locals.buttons.sold_out", "Sold Out"));
                                optionElement.attr("value", variant.id);
                                optionElement.attr("data-flits-variant-price", variantPrice);
                                if (product.variants.length == 1 && variantTitle == "Default Title") {
                                } else {
                                }
                                Flits(itemDom).find(".flits-floating-label .flits-variant-select").append(optionElement);
                                let selectedText = Flits(itemDom).find(".flits-variant-select option:nth-child(2)").text();
                                if (selectedText.indexOf(Flits.t("Flits.locals.buttons.sold_out", "Sold Out")) != -1) {
                                    let sold_out_text = Flits(itemDom).find(".flits-add-to-cart").attr("data-flits-sold-text");
                                    Flits(itemDom).find(".flits-add-to-cart").addClass("flits-btn-danger");
                                    Flits(itemDom).find(".flits-add-to-cart").attr("disabled", true);
                                    Flits(itemDom).find(".flits-add-to-cart").text(sold_out_text);
                                    Flits(itemDom).find(".flits-product-quantity").addClass("flits-disabled");
                                }
                                if (product.variants.length == 1 && variantTitle == "Default Title") {
                                    Flits(itemDom).find(".flits-floating-label .flits-variant-select").html("");
                                }
                            }
                            if (response.variant_available && response.inventory_management == "shopify" && response.inventory_quantity > 0) {
                                optionElement.attr("data-flits-inventory-quantity", response.inventory_quantity);
                            }
                            let selectedVariant = Flits(itemDom).find(".flits-variant-select option:nth-child(2)").attr("data-flits-inventory-quantity");
                            Flits(itemDom).find('.flits-product-quantity [name="product_quantity_input"]').attr("max", selectedVariant);
                        })
                        .fail(function (resp) {})
                        .always(function () {});
                    if (variantPriceValue <= 0) {
                        variantPriceValue = variantPrice;
                    }
                    Flits(itemDom).find(".flits-floating-label .flits-variant-select").append(optionElement);
                    Flits(itemDom).find(".flits-floating-label .flits-variant-select").attr("data-tippy-content", product.title);
                    Flits(itemDom).find(".flits-floating-label label").html(product.title);
                    Flits(itemDom).find(".flits-floating-label label").attr("data-tippy-content", product.title);
                });
                Flits(itemDom).find(".flits-product-price").html(variantPriceValue);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-id", product.id);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-title", product.title);
                Flits(itemDom).find(".flits-remove-product").attr("data-flits-product-handle", product.handle);
                Flits(itemDom).find(".flits-add-to-cart").attr("data-remove", product.id);
                Flits(itemDom).find(".flits-product-skeleton-card").remove();
                Flits(itemDom).find("form").css("display", "block");
            }
        },
        variantOnChange: function (evt) {
            let variantPrice = Flits("option:selected", evt).attr("data-flits-variant-price");
            let inventoryQuantity = Flits("option:selected", evt).attr("data-flits-inventory-quantity");
            let selectedVariantText = Flits("option:selected", evt).text();
            Flits(evt).parents(".flits-product-card").find('.flits-product-quantity input[name="product_quantity_input"]').val(1);
            inventoryQuantity == undefined
                ? Flits(evt).parents(".flits-product-card").find('.flits-product-quantity input[name="product_quantity_input"]').removeAttr("max")
                : Flits(evt).parents(".flits-product-card").find('.flits-product-quantity input[name="product_quantity_input"]').attr("max", inventoryQuantity);
            Flits(evt).parents(".flits-product-card").find(".flits-product-price").html(variantPrice);
            let addCartBtnText = "";
            let addCartBtn = Flits(evt).parents(".flits-product-card").find(".flits-add-to-cart");
            let quantityBtn = Flits(evt).parents(".flits-product-card").find(".flits-product-quantity");
            if (selectedVariantText.indexOf(Flits.t("Flits.locals.buttons.sold_out", "Sold Out")) != -1) {
                addCartBtnText = addCartBtn.attr("data-flits-sold-text");
                addCartBtn.attr("disabled", true);
                addCartBtn.addClass("flits-btn-danger");
                quantityBtn.addClass("flits-disabled");
            } else {
                addCartBtnText = addCartBtn.attr("data-flits-add-cart-text");
                addCartBtn.attr("disabled", false);
                addCartBtn.removeClass("flits-btn-danger");
                quantityBtn.removeClass("flits-disabled");
            }
            addCartBtn.text(addCartBtnText);
        },
        productQuntityAdjust: function (evt) {
            let el = evt;
            let quantitySelector = Flits(el).parents(".flits-product-card").find('input[name="product_quantity_input"]');
            let maxLimit = parseInt(Flits(el).parents(".flits-product-quantity").find('input[name="product_quantity_input"]').attr("max"));
            let qty = parseInt(quantitySelector.val());
            qty = validateQuantity(qty);
            let qtyMin = 1;
            if (Flits(el).attr("data-flits-qty-btn") == "plus") {
                if (maxLimit) {
                    if (maxLimit > qty) {
                        qty = qty + 1;
                    } else {
                        let errorMsg = Flits.t("Flits.locals.general.cant_add_more_quantity", "You can't add more than {{ quantity }} quantity");
                        errorMsg = errorMsg.replace("{{ quantity }}", qty);
                        flitsSnackbar.show({ text: errorMsg, pos: "bottom-center", showAction: false, customClass: "flits-alert-error" });
                    }
                } else {
                    qty = qty + 1;
                }
            } else {
                qty = qty <= qtyMin ? qtyMin : qty - 1;
            }
            quantitySelector.val(qty);
            function validateQuantity(qty) {
                if (parseFloat(qty) == parseInt(qty) && !isNaN(qty)) {
                    return qty;
                } else {
                    return 1;
                }
            }
        },
        addToCart: function (params) {
            flitsSnackbar.show({ text: Flits.t("Flits.locals.cart_page.adding_items_to_cart", "Adding items to cart..."), pos: "bottom-center", showAction: false, customClass: "flits-alert-default", duration: false });
            Flits.ajax({ type: "POST", url: "/cart/add.js", data: params, dataType: "json" })
                .done(function (resp) {
                    Flits.flitsSnackbarHide();
                    location.href = "/cart";
                })
                .fail(function (resp) {
                    flitsSnackbar.show({ text: resp.responseJSON.description, pos: "bottom-center", showAction: false, customClass: "flits-alert-error" });
                })
                .always(function () {});
        },
        loaderHide: function (selector) {
            Flits(selector).fadeOut();
        },
        loaderShow: function (selector) {
            Flits(selector).fadeIn();
        },
        setupContainer: function () {
            Flits(".flits-account-page-nav").css("height", "auto");
            Flits(".flits-tabs-box").parent().css("height", "auto");
            Flits(".flits-tabs-box").css("min-height", "auto");
            if (Flits(window).width() < 992) {
                Flits(".flits-account-page-nav").css("height", "auto");
                Flits(".flits-tabs-box").parent().css("height", "auto");
                Flits(".flits-tabs-box").css("height", "auto");
                Flits(".flits-tabs-box").css("min-height", "auto");
            } else {
                var height = 0;
                var nav_height = Flits(".flits-account-page-nav .flits-nav-tabs").outerHeight();
                var pages_height = Flits(".flits-tabs-box .flits-tab-box.flits-active").outerHeight();
                var height = Math.max(nav_height, pages_height);
                Flits(".flits-account-page-nav").css("height", height);
                Flits(".flits-tabs-box").parent().css("height", height);
                Flits(".flits-tabs-box").css("min-height", height);
            }
        },
        setTemplateColor: function (colorOptions) {
            let colors = colorOptions;
            document.documentElement.style.setProperty("--navigationBGColor", colors.navigationBGColor);
            document.documentElement.style.setProperty("--navigationBorderColor", colors.navigationBorderColor);
            document.documentElement.style.setProperty("--navigationTextColor", colors.navigationTextColor);
            document.documentElement.style.setProperty("--navigationHoverBGColor", Flits.lightOrDark(colors.navigationBGColor));
            document.documentElement.style.setProperty("--contentBGColor", colors.contentBGColor);
            document.documentElement.style.setProperty("--contentTextColor", colors.contentTextColor);
            document.documentElement.style.setProperty("--primaryButtonBGColor", colors.primaryButtonBGColor);
            document.documentElement.style.setProperty("--primaryButtonHoverBGColor", Flits.lightOrDark(colors.primaryButtonBGColor));
            document.documentElement.style.setProperty("--primaryButtonTextColor", colors.primaryButtonTextColor);
            document.documentElement.style.setProperty("--secondaryButtonBGColor", colors.secondaryButtonBGColor);
            document.documentElement.style.setProperty("--secondaryButtonTextColor", colors.secondaryButtonTextColor);
            document.documentElement.style.setProperty("--badgeBGColor", colors.badgeBGColor);
            document.documentElement.style.setProperty("--badgeTextColor", colors.badgeTextColor);
            document.documentElement.style.setProperty("--linkColor", colors.linkColor);
        },
        validatePhone: function (data) {
            if (new libphonenumber.parsePhoneNumber(data).isValid()) {
                return true;
            }
            return false;
        },
        isNumber: function (evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        },
        validateEmail: function (data) {
            let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (testData.test(data)) {
                return true;
            }
            return false;
        },
        validateUrl: function (data) {
            let testData = /\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/g;
            if (testData.test(data)) {
                return true;
            }
            return false;
        },
        phoneNumberBind: function (selector) {
            Flits(selector).bind("paste", function () {
                let data = Flits(selector).val();
                let dataFull = data.replace(/[^\w\s]/gi, "").replace(/ /g, "");
                Flits(selector).val(dataFull);
            });
            Flits(selector).on("input", function () {
                let data = Flits(selector).val();
                let dataFull = data.replace(/[^\w\s]/gi, "").replace(/ /g, "");
                Flits(selector).val(dataFull);
            });
        },
        watchForHover: function () {
            let hasHoverClass = false;
            let hoverClass = "flits-has-hover";
            let container = ".flits-account-page-container";
            let lastTouchTime = 0;
            function enableHover() {
                if (new Date() - lastTouchTime < 500) return;
                if (hasHoverClass) return;
                Flits(container).addClass(hoverClass);
                hasHoverClass = true;
            }
            function disableHover() {
                if (!hasHoverClass) return;
                Flits(container).removeClass(hoverClass);
                hasHoverClass = false;
            }
            function updateLastTouchTime() {
                lastTouchTime = new Date();
            }
            Flits(document).on("touchstart", function () {
                updateLastTouchTime();
                disableHover();
            });
            Flits(document).on("mousemove", function () {
                enableHover();
            });
        },
        paginationDisabled: function (list, selector) {
            let isFirst = list.i == 1;
            let isLast = list.i > list.matchingItems.length - list.page;
            Flits(selector + " .flits-prev-btn[disabled], " + selector + " .flits-next-btn[disabled]").attr("disabled", false);
            if (isFirst) {
                Flits(selector + " .flits-prev-btn").attr("disabled", true);
            }
            if (isLast) {
                Flits(selector + " .flits-next-btn").attr("disabled", true);
            }
            if (list.matchingItems.length <= list.page) {
                Flits(selector).addClass("flits-d-none");
            } else {
                Flits(selector).removeClass("flits-d-none");
            }
        },
        setSelectorByValue: function (selector, value) {
            for (let i = 0, count = selector.options.length; i < count; i++) {
                const option = selector.options[i];
                if (value == option.value || value == option.innerHTML) {
                    selector.selectedIndex = i;
                    return i;
                }
            }
        },
        postLink: function (path, options) {
            options = options || {};
            const method = options["method"] || "post";
            const params = options["parameters"] || {};
            const form = document.createElement("form");
            form.setAttribute("method", method);
            form.setAttribute("action", path);
            for (const key in params) {
                const hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                form.appendChild(hiddenField);
            }
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        },
        CountryProvinceSelector: function (country_domid, province_domid, options) {
            this.countryEl = document.getElementById(country_domid);
            this.provinceEl = document.getElementById(province_domid);
            this.provinceContainer = document.getElementById(options["hideElement"] || province_domid);
            this.countryEl.addEventListener("change", this.countryHandler.bind(this));
            this.initCountry();
            this.initProvince();
        },
        flitsNewCode: function (e) {
            Flits.services();
            Flits.dispatchEvent("Flits:AccountPage:BeforeVisible");
            Flits.navigationBind();
            Flits.extraPageBind();
            Flits.setTemplateColor(Flits.accountSettings.colorSettings);
            Flits.AccountPage(window.flitsObjects.accountPage);
            Flits.dispatchEvent("Flits:AccountPage:Visible");
        },
        flitsSplitArrayIntoChunks: function (arr, len) {
            var chunks = [],
                i = 0,
                n = arr.length;
            while (i < n) {
                chunks.push(arr.slice(i, (i += len)));
            }
            return chunks;
        },
        flitsOldCode: function () {
            var accountPageSections = [];
            var accountSettings = window.flitsObjects.accountPage.accountSettings;
            if (accountSettings.isAccountPageInJSON != undefined && accountSettings.sections != undefined) {
                if (accountSettings.isAccountPageInJSON && accountSettings.sections.length > 0) {
                    accountPageSections = accountSettings.sections;
                }
            }
            if (accountPageSections.length > 0) {
                var accountSectionAppended = false;
                var sectionsChunkSize = 5;
                var sectionParentElement = Flits(".flits-code-snippet").parent();
                Flits.flitsSplitArrayIntoChunks(accountPageSections, sectionsChunkSize).forEach(function (accountPageSection) {
                    Flits.get(
                        "/account?sections=" + accountPageSection.join(","),
                        function (resp) {
                            for (const [key, sectionHTMLContent] of Object.entries(resp)) {
                                if (sectionHTMLContent) {
                                    sectionParentElement.append(sectionHTMLContent);
                                }
                                if (!accountSectionAppended) {
                                    Flits(".flits-code-snippet").remove();
                                    sectionAppended = true;
                                }
                            }
                        },
                        "json"
                    );
                });
            } else {
                Flits(".flits-code-snippet")
                    .parent()
                    .load("/account?view=flits .flits-old-code-snippet", function () {
                        Flits(".flits-code-snippet").remove();
                        Flits(".flits-old-code-snippet").show();
                    });
            }
        },
        accountSettingAjax: function () {
            let url = Flits.base_url + "/theme/" + Flits.theme.id;
            let params = { customer_hash: Flits.customerHash, token: Flits.token };
            let header = { "x-flits-token": Flits.token, version: "2.0" };
            Flits.setTemplateColor(Flits.accountSettings.colorSettings);
            Flits.ajax({ method: "GET", header: header, url: url, data: params })
                .done(function (resp) {
                    Flits.setLocalStorage("account_status", resp);
                    Flits.setLocalStorage("account_status_update_at", new Date());
                    if (resp.status) {
                        Flits.accountSettings.flagSvgUrl = resp.flagSvgUrl;
                        Flits.setLocalStorage("flag_svg_url", Flits.accountSettings.flagSvgUrl);
                        Flits.flitsNewCode();
                    } else {
                        Flits.flitsOldCode();
                    }
                })
                .fail(function (resp) {
                    Flits.setLocalStorage("account_status", resp.responseJSON);
                    if (resp.status == 404) {
                        Flits.flitsOldCode();
                    }
                })
                .always(function () {});
        },
        isTouchEnabled: function () {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        },
        birthdayCountDown: function () {
            if (Flits.AccountPage.settings.bdayInterval) {
                clearInterval(Flits.AccountPage.settings.bdayInterval);
            }
            let dob = Flits("[data-flits-birthdate]").attr("data-flits-birthdate");
            if (dob) {
                let second = 1000;
                let minute = second * 60;
                let hour = minute * 60;
                let day = hour * 24;
                let currentYear = new Date().getFullYear();
                let bDay = new Date(dob).getDate();
                bDay = bDay < 10 ? "0" + bDay : bDay;
                let bMonth = new Date(dob).getMonth() + 1;
                bMonth = bMonth < 10 ? "0" + bMonth : bMonth;
                let birthday = currentYear + "-" + bMonth + "-" + bDay;
                let countDown = new Date(birthday).getTime();
                Flits.AccountPage.settings.bdayInterval = setInterval(function () {
                    let now = new Date().getTime();
                    let distance = countDown - now;
                    if (distance < 0) {
                        birthday = currentYear + 1 + "-" + bMonth + "-" + bDay;
                        countDown = new Date(birthday).getTime();
                        distance = countDown - now;
                    }
                    let remainingDays = Math.floor(distance / day);
                    let remainingHours = Math.floor((distance % day) / hour);
                    let remainingMinutes = Math.floor((distance % hour) / minute);
                    let remainingSeconds = Math.floor((distance % minute) / second);
                    Flits.AccountPage.settings.dobCountDown = remainingDays;
                    if (!Flits.isNull(remainingDays)) {
                        if (Flits(".flits-birthday-rule-description").attr("data-flits-birthdate-count-text")) {
                            birthdayCountText = Flits(".flits-birthday-rule-description").attr("data-flits-birthdate-count-text");
                            birthdayCountText = birthdayCountText.replace("{{ days }}", remainingDays);
                            Flits(".flits-birthday-rule-description").html(birthdayCountText);
                        }
                    }
                }, 0);
            }
        },
        services: function (options) {
            Flits.services.settings = {};
            var settings = { customerSevices: null, recentlyViewService: null, wishlistService: null, topOrderService: null, rulesService: null, storeCreditService: null, referCreditService: null };
            settings = Flits.extend(Flits.services.settings, settings, options);
            Flits.services.settings.customerSevices = function (callBack) {
                Flits.ajax({ type: "GET", url: Flits.base_url + "/customer/get", contentType: "application/x-www-form-urlencoded", data: { customer_hash: Flits.customerHash, token: Flits.token, customer_id: Flits.customer_id } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:customer:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.recentlyViewService = function (handle, callBack) {
                let data = Flits.getLocalStorage(handle);
                if (callBack) {
                    callBack(data);
                }
            };
            Flits.services.settings.wishlistService = function (callBack) {
                Flits.ajax({ type: "GET", url: Flits.base_url + "/wishlist", data: { customer_id: Flits.customer_id, customer_hash: Flits.customerHash, token: Flits.token }, contentType: "application/x-www-form-urlencoded" })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:Wishlist:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.topOrderService = function (callBack) {
                Flits.ajax({ type: "GET", url: Flits.base_url + "/" + Flits.customer_id + "/top_product_from_all_order", contentType: "application/x-www-form-urlencoded", data: { customer_hash: Flits.customerHash, token: Flits.token } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:topOrder:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.rulesService = function (callBack) {
                Flits.ajax({ type: "POST", url: Flits.base_url + "/" + Flits.customer_id + "/get_rule", data: { customer_hash: Flits.customerHash, token: Flits.token, theme_id: Flits.theme.id } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:rulesGet:AjaxSuccessful", { resp: resp });
                        Flits.dispatchEvent("Flits:howToEarnCredit:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.storeCreditService = function (callBack) {
                Flits.ajax({ method: "GET", url: Flits.base_url + "/" + Flits.customer_id + "/credit/get_credit", data: { customer_hash: Flits.customerHash, token: Flits.token } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:storeCredit:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.services.settings.referCreditService = function (callBack) {
                Flits.ajax({ method: "GET", url: Flits.base_url + "/" + Flits.customer_id + "/refer_friend/get_referral_data", data: { customer_hash: Flits.customerHash, token: Flits.token } })
                    .done(function (resp) {
                        Flits.dispatchEvent("Flits:referCredit:AjaxSuccessful", { resp: resp });
                        if (callBack) {
                            callBack(resp);
                        }
                    })
                    .fail(function (resp) {
                        flitsSnackbar.show({ text: resp.statusText, pos: "bottom-center", showAction: false, customClass: "flits-alert-danger" });
                    })
                    .always(function () {});
            };
            Flits.dispatchEvent("Flits:services:Loaded", { settings: settings });
        },
        navigationBind: function (options) {
            var caretIcon =
                '<svg class="flits-nav-caret-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve" class=""><g><g> <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/> </g></g> </svg>';
            var flitsProfileIcon = '<span class="flits-span-svg"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0724 4.02447C15.1063 3.04182 13.7429 2.5 12.152 2.5C10.5611 2.5 9.19773 3.04182 8.23167 4.02447C7.26636 5.00636 6.73644 6.38891 6.73644 8C6.73644 10.169 7.68081 11.567 8.8496 12.4062C9.07675 12.5692 9.3115 12.7107 9.54832 12.8327C8.24215 13.1916 7.18158 13.8173 6.31809 14.5934C4.95272 15.8205 4.10647 17.3993 3.53633 18.813C3.43305 19.0691 3.55693 19.3604 3.81304 19.4637C4.06914 19.567 4.36047 19.4431 4.46375 19.187C5.00642 17.8414 5.78146 16.4202 6.98653 15.3371C8.1795 14.265 9.82009 13.5 12.152 13.5C14.332 13.5 15.9058 14.1685 17.074 15.1279C18.252 16.0953 19.0453 17.3816 19.6137 18.6532C19.9929 19.5016 19.3274 20.5 18.2827 20.5H6.74488C6.46874 20.5 6.24488 20.7239 6.24488 21C6.24488 21.2761 6.46874 21.5 6.74488 21.5H18.2827C19.9348 21.5 21.2479 19.8588 20.5267 18.2452C19.9232 16.8952 19.0504 15.4569 17.7087 14.3551C16.9123 13.7011 15.9603 13.1737 14.8203 12.8507C15.43 12.5136 15.9312 12.0662 16.33 11.5591C17.1929 10.462 17.5676 9.10016 17.5676 8C17.5676 6.38891 17.0377 5.00636 16.0724 4.02447ZM15.3593 4.72553C16.1144 5.49364 16.5676 6.61109 16.5676 8C16.5676 8.89984 16.2541 10.038 15.544 10.9409C14.8475 11.8265 13.7607 12.5 12.152 12.5C11.5014 12.5 10.3789 12.2731 9.43284 11.5938C8.51251 10.933 7.73644 9.83102 7.73644 8C7.73644 6.61109 8.18963 5.49364 8.94477 4.72553C9.69916 3.95818 10.7935 3.5 12.152 3.5C13.5105 3.5 14.6049 3.95818 15.3593 4.72553Z" fill="black"/></svg></span>';
          var flitsAddressIcon = '<span class="flits-span-svg"><?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g transform="translate(1 1)"><g><g><path d="M442.733,84.333c14.507,0,25.6-11.093,25.6-25.6V24.6c0-14.507-11.093-25.6-25.6-25.6H67.267c-14.507,0-25.6,11.093-25.6,25.6v34.133c0,14.507,11.093,25.6,25.6,25.6v153.6c0,3.016,0.486,5.881,1.376,8.533h-1.376c-14.507,0-25.6,11.093-25.6,25.6V306.2c0,14.507,11.093,25.6,25.6,25.6v153.6c0,14.507,11.093,25.6,25.6,25.6h324.267c14.507,0,25.6-11.093,25.6-25.6V331.8c14.507,0,25.6-11.093,25.6-25.6v-34.133c0-14.507-11.093-25.6-25.6-25.6h-1.376c0.89-2.652,1.376-5.517,1.376-8.533V84.333z M58.733,58.733V24.6c0-5.12,3.413-8.533,8.533-8.533h375.467c5.12,0,8.533,3.413,8.533,8.533v34.133c0,5.12-3.413,8.533-8.533,8.533H434.2H75.8h-8.533C62.147,67.267,58.733,63.853,58.733,58.733z M425.667,485.4c0,5.12-3.413,8.533-8.533,8.533H92.867c-5.12,0-8.533-3.413-8.533-8.533V331.8h341.333V485.4z M451.267,272.067V306.2c0,5.12-3.413,8.533-8.533,8.533H434.2H75.8h-8.533c-5.12,0-8.533-3.413-8.533-8.533v-34.133c0-5.12,3.413-8.533,8.533-8.533h25.6h324.267h25.6C447.853,263.533,451.267,266.947,451.267,272.067z M92.867,246.467c-5.12,0-8.533-3.413-8.533-8.533v-153.6h341.333v153.6c0,5.12-3.413,8.533-8.533,8.533H92.867z"/><path d="M278.04,101.4h-45.227c-14.507,0-25.6,11.093-25.6,25.6s11.093,25.6,25.6,25.6h45.227c13.653,0,25.6-11.093,25.6-25.6S292.547,101.4,278.04,101.4z M277.187,135.533H231.96c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533h45.227c5.12,0,8.533,3.413,8.533,8.533S282.307,135.533,277.187,135.533z"/><path d="M232.813,400.067h45.227c13.653,0,25.6-11.093,25.6-25.6c0-14.507-11.093-25.6-25.6-25.6h-45.227c-14.507,0-25.6,11.093-25.6,25.6C207.213,388.973,218.307,400.067,232.813,400.067z M231.96,365.933h45.227c5.12,0,8.533,3.413,8.533,8.533S282.307,383,277.187,383H231.96c-5.12,0-8.533-3.413-8.533-8.533S226.84,365.933,231.96,365.933z"/><path d="M152.6,169.667h-42.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533H152.6c5.12,0,8.533-3.413,8.533-8.533S157.72,169.667,152.6,169.667z"/><path d="M135.533,203.8h-25.6c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h25.6c5.12,0,8.533-3.413,8.533-8.533C144.067,207.213,140.653,203.8,135.533,203.8z"/><path d="M109.933,434.2H152.6c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-42.667c-5.12,0-8.533,3.413-8.533,8.533S104.813,434.2,109.933,434.2z"/><path d="M109.933,468.333h25.6c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-25.6c-5.12,0-8.533,3.413-8.533,8.533C101.4,464.92,104.813,468.333,109.933,468.333z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span>';
          var flitsOrderIcon =  '<span class="flits-span-svg"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 142 142" style="enable-background:new 0 0 142 142;" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:#231F20;stroke-width:8;stroke-miterlimit:10;}</style><g><rect x="14.81" y="41.07" class="st0" width="112.89" height="85.93"></rect><polyline class="st0" points="128.21,39.35 111.25,15 33.47,15 13.79,39.43 	"></polyline><line class="st0" x1="71.25" y1="17.37" x2="71.25" y2="40.04"></line></g></svg></span>';
          var flitsWishlistIcon =  '<span class="flits-span-svg"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>';
          var flitsRecentViewIcon =  '<span class="flits-span-svg"><?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="442.04px" height="442.04px" viewBox="0 0 442.04 442.04" style="enable-background:new 0 0 442.04 442.04;" xml:space="preserve"><g><g><path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/></g><g><path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/></g><g><path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span>';
          var mycreditIcon = '<span class="flits-span-svg"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 16.01 16.01"><path id="Layer_2" data-name="Layer 2" d="M2.24,16a.87.87,0,0,1-.82-.58l-1.37-4a.86.86,0,0,1,.53-1.1h0l1.78-.6a.86.86,0,0,1,1.1.52h0l1.38,4a.88.88,0,0,1-.54,1.1L2.52,16A.87.87,0,0,1,2.24,16Zm.41-5.46-1.78.6,1.37,4L4,14.53l-1.37-4Zm2.26,4H4.28L3,10.71l.9-.79A3.91,3.91,0,0,1,6.28,8.28a3.92,3.92,0,0,1,3,.73h1.6l.09.05a2.06,2.06,0,0,1,.8.79l2-1.21A1.4,1.4,0,0,1,15.71,9l.06.09a1.5,1.5,0,0,1-.33,2l-3,2.21a7.69,7.69,0,0,1-2.61,1A39.43,39.43,0,0,1,4.91,14.54Zm0-.87h0a38.53,38.53,0,0,0,4.76-.22A7.29,7.29,0,0,0,12,12.63l2.94-2.19A.65.65,0,0,0,15,9.57a.54.54,0,0,0-.73-.23l-.06,0-2.28,1.38a1.51,1.51,0,0,1-1,1.26H7.82v-.86h2.87a.63.63,0,0,0,.38-.51V10.5a.88.88,0,0,0-.42-.64H9L8.89,9.8a3.15,3.15,0,0,0-2.45-.67,3,3,0,0,0-1.88,1.3l-.08.1L4,11ZM10.49,8a4,4,0,1,1,4-4A4,4,0,0,1,10.49,8Zm0-7.13A3.13,3.13,0,1,0,13.63,4,3.13,3.13,0,0,0,10.49.87h0ZM10.37,6V5.65A2.07,2.07,0,0,1,9.2,5.09l.35-.45a1.65,1.65,0,0,0,.82.45v-1a1.77,1.77,0,0,1-.78-.36.87.87,0,0,1-.25-.67,1,1,0,0,1,.28-.73A1.16,1.16,0,0,1,10.37,2V1.76h.31V2a1.85,1.85,0,0,1,1,.38l-.31.47a1.41,1.41,0,0,0-.68-.29v1h0a1.75,1.75,0,0,1,.8.38.83.83,0,0,1,.26.68,1,1,0,0,1-.29.73,1.2,1.2,0,0,1-.78.31V6ZM10,2.71A.36.36,0,0,0,9.92,3a.41.41,0,0,0,.09.28,1.16,1.16,0,0,0,.36.19v-.9A.5.5,0,0,0,10,2.71ZM11,5a.38.38,0,0,0,.13-.3.39.39,0,0,0-.1-.29,1,1,0,0,0-.39-.19V5.1A.65.65,0,0,0,11,5Z" transform="translate(0)"></path></svg></span>';
          var managecreditIcon = '<span class="flits-span-svg"><?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve"><g><g><g><path d="M469.334,119.467h-85.333c-14.114,0-25.6-11.486-25.6-25.6V51.2c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533v42.667c0,23.526,19.14,42.667,42.667,42.667h76.8v312.201l-19.567-19.567c-3.337-3.336-8.73-3.336-12.066,0l-45.167,45.167l-19.567-19.567c-3.336-3.337-8.73-3.337-12.066,0l-19.567,19.567l-28.1-28.1c-3.336-3.337-8.73-3.337-12.066,0l-28.1,28.1L253.501,463.3c-3.337-3.337-8.73-3.337-12.066,0l-28.1,28.1l-28.1-28.1c-3.337-3.337-8.73-3.337-12.066,0l-28.1,28.1l-45.167-45.167c-3.337-3.337-8.73-3.337-12.066,0l-36.634,36.634V42.667c0-14.114,11.486-25.6,25.6-25.6h269.534L429.168,99.9c3.337,3.337,8.73,3.337,12.066,0c3.336-3.336,3.336-8.73,0-12.066L355.901,2.5c-1.596-1.604-3.763-2.5-6.033-2.5H76.801C53.275,0,34.134,19.14,34.134,42.667v460.8c0,3.447,2.074,6.562,5.265,7.885c1.058,0.435,2.167,0.648,3.268,0.648c2.219,0,4.403-0.87,6.033-2.5l45.167-45.167l45.167,45.167c3.337,3.337,8.73,3.337,12.066,0l28.1-28.1l28.1,28.1c3.337,3.337,8.73,3.337,12.066,0l28.1-28.1l11.034,11.034c3.337,3.336,8.73,3.336,12.066,0l28.1-28.1l28.1,28.1c3.337,3.336,8.73,3.336,12.066,0l19.567-19.567l19.567,19.567c3.337,3.336,8.73,3.336,12.066,0l45.167-45.167l28.1,28.1c2.449,2.449,6.11,3.183,9.301,1.852c3.191-1.323,5.265-4.437,5.265-7.885V128C477.868,123.29,474.053,119.467,469.334,119.467z"/><path d="M128.001,221.867h153.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-153.6c-4.719,0-8.533,3.823-8.533,8.533C119.468,218.044,123.282,221.867,128.001,221.867z"/><path d="M128.001,153.6h85.333c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-85.333c-4.719,0-8.533,3.823-8.533,8.533C119.468,149.777,123.282,153.6,128.001,153.6z"/><path d="M298.668,273.067h51.2c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-51.2c-4.719,0-8.533,3.823-8.533,8.533C290.134,269.244,293.949,273.067,298.668,273.067z"/><path d="M204.801,315.733c0-4.71-3.814-8.533-8.533-8.533h-68.267c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h68.267C200.987,324.267,204.801,320.444,204.801,315.733z"/><path d="M128.001,358.4c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H128.001z"/><path d="M213.334,375.467h85.333c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333c-4.719,0-8.533,3.823-8.533,8.533S208.615,375.467,213.334,375.467z"/><path d="M384.001,204.8h-68.267c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h68.267c4.719,0,8.533-3.823,8.533-8.533C392.534,208.623,388.72,204.8,384.001,204.8z"/><path d="M332.801,375.467h51.2c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-51.2c-4.719,0-8.533,3.823-8.533,8.533S328.082,375.467,332.801,375.467z"/><path d="M375.468,315.733c0-4.71-3.814-8.533-8.533-8.533H230.401c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h136.533C371.653,324.267,375.468,320.444,375.468,315.733z"/><path d="M230.401,256c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h34.133c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H230.401z"/><path d="M128.001,273.067h68.267c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-68.267c-4.719,0-8.533,3.823-8.533,8.533C119.468,269.244,123.282,273.067,128.001,273.067z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span>';
          var referfrndIcon = '<span class="flits-span-svg"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 16.62 16"><path id="Layer_2" data-name="Layer 2" d="M8.75,15.8H8.34v-.88h.07a5.87,5.87,0,0,0,6.38-4.57l-.11.09-.57-.66,1-.85.29-.24.31.27.91.9-.63.62-.27-.27A6.73,6.73,0,0,1,8.75,15.8ZM7.66,1.68l-.11.09.54.69,1-.81.31-.24-.22-.34L8.5,0,7.77.48,8,.8A6.81,6.81,0,0,0,1,6.91L1.46,7,1,6.9l.46.1H1.9A5.85,5.85,0,0,1,7.66,1.68ZM16,8a3.63,3.63,0,0,0-2.69-3.44h0a2.13,2.13,0,1,0-1.9,0h0A3.64,3.64,0,0,0,8.71,8v.44H16ZM11.63,5.42l.72-.19.71.19a2.76,2.76,0,0,1,2,2.16H9.63A2.78,2.78,0,0,1,11.63,5.42Zm2-2.76a1.24,1.24,0,0,1-.7,1.11l-.55.28-.56-.28a1.24,1.24,0,0,1-.7-1.11,1.26,1.26,0,0,1,2.51,0ZM7.28,15.55a3.64,3.64,0,0,0-2.63-3.41,2.11,2.11,0,0,0,1.13-1.87,2.14,2.14,0,0,0-4.27,0,2.11,2.11,0,0,0,1.13,1.87A3.64,3.64,0,0,0,0,15.55V16H7.29ZM2.93,13l.71-.2.72.2a2.76,2.76,0,0,1,2,2.15H.93A2.76,2.76,0,0,1,2.93,13Zm2-2.7a1.24,1.24,0,0,1-.7,1.11l-.56.28-.55-.28a1.24,1.24,0,0,1-.7-1.11,1.26,1.26,0,0,1,2.51,0Z"></path></svg></span>';
          var flitsPasswordIcon =  '<span class="flits-span-svg"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 142 142" style="enable-background:new 0 0 142 142;" xml:space="preserve"> <style type="text/css"> .st0{fill:none;stroke:#231F20;stroke-width:8;stroke-miterlimit:10;}</style> <g> <rect x="27.3" y="59.45" class="st0" width="87.41" height="68.44"></rect> <path class="st0" d="M45.96,56.78V34.56c0,0,5.63-20.74,25.04-20.44s25.63,19.26,25.63,19.26v23.41"></path> <circle class="st0" cx="71.89" cy="95.74" r="12.3"></circle> </g> </svg></span>';
          var flitsLogoutIcon =  '<span class="flits-span-svg"><?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.3 490.3" style="enable-background:new 0 0 490.3 490.3;" xml:space="preserve"><g><g><path d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1C27.9,58.95,0,86.75,0,121.05z"/><path d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63C380.6,325.15,380.6,332.95,385.4,337.65z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span>';
          var topOrdersIcon = '<span class="flits-span-svg"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 19.89 15.98"><path id="Layer_2" data-name="Layer 2" d="M19.45.9H.45a.45.45,0,0,1,0-.9h19a.45.45,0,0,1,0,.9ZM14.9,5.48A.45.45,0,0,0,14.48,5H.45a.45.45,0,1,0,0,.9h14A.45.45,0,0,0,14.9,5.48ZM9.9,11a.45.45,0,0,0-.45-.45h-9a.45.45,0,0,0,0,.9h9A.45.45,0,0,0,9.9,11Zm-5,4.53a.45.45,0,0,0-.44-.45h-4a.45.45,0,0,0,0,.9h4a.45.45,0,0,0,.43-.43Z" transform="translate(0)"></path></svg></span>';
          
          var settings = {
                navs: [
                    { title: Flits.t("Flits.locals.navigation.profile", "My Profile"), url: "#profile", target: 0, menuClass: null, badge: null, icon: flitsProfileIcon + caretIcon, isShow: 1, loader: { loader_class: null }, body_html: null },
                    {
                        title: Flits.t("Flits.locals.navigation.delivery_address", "Delivery Address"),
                        url: "#address",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-badge flits-badge-nav flits-address-count-badge flits-menu-badge-hide">0</span>',
                        icon: flitsAddressIcon+caretIcon,
                        isShow: 1,
                        loader: { loader_class: null },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.my_orders", "My Orders"),
                        url: "#order",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-badge flits-badge-nav flits-order-count-badge flits-menu-badge-hide">0</span>',
                        icon: flitsOrderIcon+caretIcon,
                        isShow: 1,
                        loader: null,
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.top_ordered_products", "Top Ordered Products"),
                        url: "#topOrder",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon: topOrdersIcon + caretIcon,
                        isShow: Flits.Metafields.IS_ADVANCE_DASHBOARD_PAID && Flits.Metafields.IS_ADVANCE_DASHBOARD_ENABLE,
                        loader: { loader_class: null },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.wishlist", "My Wishlist"),
                        url: "#wishlist",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-badge flits-badge-nav flits-wishlist-count-badge flits-menu-badge-hide">0</span>',
                        icon: flitsWishlistIcon+caretIcon,
                        isShow: Flits.Metafields.IS_WISHLIST_PAID && Flits.Metafields.IS_WISHLIST_ENABLE,
                        loader: { loader_class: null },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.recently_viewed_products", "Recently Viewed"),
                        url: "#recentlyView",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon: flitsRecentViewIcon+caretIcon,
                        isShow: Flits.Metafields.is_recently_view_enable,
                        loader: { loader_class: null },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.store_credit", "My Credits"),
                        url: "#storeCredit",
                        target: 0,
                        menuClass: null,
                        badge: '<span class="flits-badge flits-badge-nav flits-credit-count-badge flits-menu-badge-hide">0</span>',
                        icon: mycreditIcon+caretIcon,
                        isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable,
                        loader: { loader_class: "flits-store-credit-module-loader" },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.how_to_manage_credit", "How To Manage Credits"),
                        url: "#howToManageCredit",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon: managecreditIcon + caretIcon,
                        isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable && Flits.Metafields.IS_HOW_TO_EARN_CREDIT_DISPLAY,
                        loader: { loader_class: "flits-how-to-manage-module-loader" },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.refer_friend", "Refer Friend"),
                        url: "#referFriend",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon: referfrndIcon + caretIcon,
                        isShow: Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable && Flits.Metafields.IS_REFER_PROGRAM_ON,
                        loader: { loader_class: "flits-refer-friend-module-loader" },
                        body_html: null,
                    },
                    {
                        title: Flits.t("Flits.locals.navigation.change_password", "Change Password"),
                        url: "#changePassword",
                        target: 0,
                        menuClass: null,
                        badge: null,
                        icon: flitsPasswordIcon+caretIcon,
                        isShow: 1,
                        loader: { loader_class: null },
                        body_html: null,
                    },
                    { title: Flits.t("Flits.locals.navigation.log_out", "Log Out"), url: "/account/logout", target: 0, menuClass: null, badge: null, icon: flitsLogoutIcon, isShow: 1, loader: null, body_html: null },
                ],
                extraNavs: [],
            };
            settings = Flits.extend(true, settings, options);
            let extraPageCount = Flits.Metafields.total_pages;
            let spliceIndex = 0;
            if (extraPageCount) {
                for (i = 1; i <= extraPageCount; i++) {
                    let _title = Flits.Metafields["title_" + i].toLowerCase();
                    let _target = 0;
                    let _icon = caretIcon;
                    let _url = null;
                    if (Flits.Metafields["type_" + i] == "PAGE") {
                        _url = "#" + Flits.Metafields["url_" + i];
                        var bodyCardClone = Flits(".flits-body-card-template").clone();
                        Flits(bodyCardClone).removeClass("flits-body-card-template");
                        Flits(bodyCardClone).attr("id", "flits_tab_" + Flits.Metafields["url_" + i]);
                        Flits(bodyCardClone).find(".flits-tab-box-header .flits-tab-box-title").html(_title);
                        Flits(".flits-account-page-container .flits-account-page-tabs .flits-tabs-box").append(bodyCardClone);
                    } else {
                        _url = Flits.Metafields["url_" + i];
                        _target = 1;
                    }
                    let obj = { title: _title, url: _url, target: _target, menuClass: null, badge: null, icon: _icon, isShow: 1, loader: { loader_class: null }, body_html: null };
                    settings.navs.splice(9 + spliceIndex, 0, obj);
                    spliceIndex++;
                }
            }
            Flits.dispatchEvent("Flits:Navigation:Loaded", { settings: settings });
            for (i = 0; i < settings.navs.length; i++) {
                if (settings.navs[i].isShow) {
                    let menuItemCloneNode = Flits(".flits-menu-item-template").clone();
                    Flits(menuItemCloneNode).removeClass("flits-menu-item-template");
                    if (settings.navs[i].menuClass) {
                        Flits(menuItemCloneNode).addClass(settings.navs[i].menuClass);
                    }
                    Flits(menuItemCloneNode).find(".flits-nav-link").attr("href", settings.navs[i].url);
                    if (settings.navs[i].target) {
                        Flits(menuItemCloneNode).find(".flits-nav-link").attr("target", "_blank");
                    }
                    Flits(menuItemCloneNode).find(".flits-nav-link").append(settings.navs[i].icon);
                    Flits(menuItemCloneNode).find(".flist-menu-title").html(settings.navs[i].title);
                    if (settings.navs[i].badge) {
                        Flits(menuItemCloneNode).find(".flits-nav-link").append(settings.navs[i].badge);
                    }
                    Flits(".flits-account-page-nav .flits-nav-tabs").append(menuItemCloneNode);
                }
                if (settings.navs[i].url.includes("#")) {
                    var urlWithOutHash = settings.navs[i].url.replace("#", "");
                    var loaderClone = Flits(".flits-loader-template").clone().removeClass("flits-loader-template").addClass("flits-module-loader");
                    if (Flits("#flits_tab_" + urlWithOutHash).length) {
                        if (settings.navs[i].loader) {
                            if (settings.navs[i].loader.loader_class) {
                                Flits(loaderClone).addClass(settings.navs[i].loader.loader_class);
                            }
                            Flits("#flits_tab_" + urlWithOutHash).append(loaderClone);
                        }
                        if (settings.navs[i].body_html) {
                            Flits("#flits_tab_" + urlWithOutHash).html(settings.navs[i].body_html);
                        }
                    } else {
                        if (settings.navs[i].body_html) {
                            var bodyCardClone = Flits(".flits-body-card-template").clone();
                            Flits(bodyCardClone).removeClass("flits-body-card-template");
                            Flits(bodyCardClone).attr("id", "flits_tab_" + urlWithOutHash);
                            Flits(bodyCardClone).find(".flits-tab-box-header .flits-tab-box-title").html(settings.navs[i].title);
                            Flits(bodyCardClone).find(".flits-tab-box-body").html(settings.navs[i].body_html);
                            if (settings.navs[i].loader) {
                                if (settings.navs[i].loader.loader_class) {
                                    Flits(loaderClone).addClass(settings.navs[i].loader.loader_class);
                                }
                                Flits(bodyCardClone).find(".flits-tab-box-body").append(loaderClone);
                            }
                            Flits(bodyCardClone).find(".flits-tab-box-body").html(settings.navs[i].body_html);
                            Flits(".flits-account-page-container .flits-account-page-tabs .flits-tabs-box").append(bodyCardClone);
                        }
                    }
                }
            }
            Flits(".flits-account-page-container .flits-skeleton-nav-tabs").fadeOut(0, function () {
                Flits(".flits-account-page-container .flits-account-page-nav .flits-nav-tabs").removeClass("flits-d-none");
                Flits(".flits-account-page-container .flits-skeleton-nav-tabs").remove();
            });
        },
        extraPageBind: function () {
            let extraPageCount = Flits.Metafields.total_pages;
            for (i = 1; i <= extraPageCount; i++) {
                let bodyCardClone = Flits(".flits-body-card-template").clone();
                Flits(bodyCardClone).removeClass("flits-body-card-template");
                let url = Flits.Metafields["url_" + i];
                if (Flits.Metafields["type_" + i] == "PAGE") {
                    Flits.get("/pages/" + url + ".json", function (resp) {
                        let title = resp.page.title;
                        let bodyHtml = resp.page.body_html;
                        bodyCardClone.find(".flits-tab-box-header .flits-tab-box-title").html(title);
                        bodyCardClone.find(".flits-tab-box-body").html(bodyHtml);
                        Flits("#flits_tab_" + url).html(bodyCardClone.html());
                    });
                }
            }
        },
    });
    Flits.fn.extend({});
    Flits.CountryProvinceSelector.prototype = {
        initCountry: function () {
            const value = this.countryEl.getAttribute("data-default");
            Flits.setSelectorByValue(this.countryEl, value);
            this.countryHandler();
        },
        initProvince: function () {
            const value = this.provinceEl.getAttribute("data-default");
            if (value && this.provinceEl.options.length > 0) {
                Flits.setSelectorByValue(this.provinceEl, value);
            }
        },
        countryHandler: function (e) {
            const opt = this.countryEl.options[this.countryEl.selectedIndex];
            const raw = opt.getAttribute("data-provinces");
            const provinces = JSON.parse(raw);
            this.clearOptions(this.provinceEl);
            if (provinces && provinces.length == 0) {
                this.provinceContainer.style.display = "none";
            } else {
                this.setOptions(this.provinceEl, provinces);
                this.provinceContainer.style.display = "";
            }
        },
        clearOptions: function (selector) {
            while (selector.firstChild) {
                selector.removeChild(selector.firstChild);
            }
        },
        setOptions: function (selector, values) {
            for (let i = 0, count = values.length; i < values.length; i++) {
                const opt = document.createElement("option");
                opt.value = values[i][0];
                opt.innerHTML = values[i][1];
                selector.appendChild(opt);
            }
        },
    };
    var instances = null;
    Flits.watchForHover();
    Flits(window).on("resize", function () {
        Flits.setupContainer();
    });
    if (Flits.fromCache) {
        let lastUpdateAt = Flits.getLocalStorage("account_status_update_at");
        if (lastUpdateAt != undefined || isNaN(lastUpdateAt)) {
            let lastUpdateAtTime = Flits.timeDiffer({ date1: new Date(), date2: lastUpdateAt, type: "minute" });
            if (lastUpdateAtTime <= Flits.cacheTime) {
                let respValue = Flits.getLocalStorage("account_status");
                if (respValue.status) {
                    Flits.accountSettings.flagSvgUrl = Flits.getLocalStorage("flag_svg_url");
                    Flits.flitsNewCode();
                } else {
                    Flits.flitsOldCode();
                }
            } else {
                Flits.accountSettingAjax();
            }
        } else {
            Flits.accountSettingAjax();
        }
    } else {
        Flits.accountSettingAjax();
    }
})(Flits);
