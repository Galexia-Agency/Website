/* eslint-disable */
/*Cookie Policy JS*/
! function(e) {
    if (!e.hasInitialised) {
        var t = {
            escapeRegExp: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            hasClass: function(e, t) {
                var i = " ";
                return 1 === e.nodeType && (i + e.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) >= 0
            },
            addClass: function(e, t) {
                e.className += " " + t
            },
            removeClass: function(e, t) {
                var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                e.className = e.className.replace(i, "")
            },
            interpolateString: function(e, t) {
                var i = /{{([a-z][a-z0-9\-_]*)}}/gi;
                return e.replace(i, function(e) {
                    return t(arguments[1]) || ""
                })
            },
            getCookie: function(e) {
                var t = "; " + document.cookie,
                    i = t.split("; " + e + "=");
                return 2 != i.length ? void 0 : i.pop().split(";").shift()
            },
            setCookie: function(e, t, i, n, o) {
                var s = new Date;
                s.setDate(s.getDate() + (i || 365));
                var r = [e + "=" + t, "expires=" + s.toUTCString(), "path=" + (o || "/")];
                n && r.push("domain=" + n), document.cookie = r.join(";")
            },
            deepExtend: function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (i in e && this.isPlainObject(e[i]) && this.isPlainObject(t[i]) ? this.deepExtend(e[i], t[i]) : e[i] = t[i]);
                return e
            },
            throttle: function(e, t) {
                var i = !1;
                return function() {
                    i || (e.apply(this, arguments), i = !0, setTimeout(function() {
                        i = !1
                    }, t))
                }
            },
            hash: function(e) {
                var t, i, n, o = 0;
                if (0 === e.length) return o;
                for (t = 0, n = e.length; t < n; ++t) i = e.charCodeAt(t), o = (o << 5) - o + i, o |= 0;
                return o
            },
            normaliseHex: function(e) {
                return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
            },
            getContrast: function(e) {
                e = this.normaliseHex(e);
                var t = parseInt(e.substr(0, 2), 16),
                    i = parseInt(e.substr(2, 2), 16),
                    n = parseInt(e.substr(4, 2), 16),
                    o = (299 * t + 587 * i + 114 * n) / 1e3;
                return o >= 128 ? "#000" : "#fff"
            },
            getLuminance: function(e) {
                var t = parseInt(this.normaliseHex(e), 16),
                    i = 38,
                    n = (t >> 16) + i,
                    o = (t >> 8 & 255) + i,
                    s = (255 & t) + i,
                    r = (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (o < 255 ? o < 1 ? 0 : o : 255) + (s < 255 ? s < 1 ? 0 : s : 255)).toString(16).slice(1);
                return "#" + r
            },
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            },
            isPlainObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor == Object
            }
        };
        e.status = {
            deny: "deny",
            allow: "allow",
            dismiss: "dismiss"
        }, e.transitionEnd = function() {
            var e = document.createElement("div"),
                t = {
                    t: "transitionend",
                    OT: "oTransitionEnd",
                    msT: "MSTransitionEnd",
                    MozT: "transitionend",
                    WebkitT: "webkitTransitionEnd"
                };
            for (var i in t)
                if (t.hasOwnProperty(i) && "undefined" != typeof e.style[i + "ransition"]) return t[i];
            return ""
        }(), e.hasTransition = !!e.transitionEnd;
        var i = Object.keys(e.status).map(t.escapeRegExp);
        e.customStyles = {}, e.Popup = function() {
            function n() {
                this.initialise.apply(this, arguments)
            }

            function o(e) {
                this.openingTimeout = null, t.removeClass(e, "cc-invisible")
            }

            function s(t) {
                t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
            }

            function r() {
                var t = this.options.onInitialise.bind(this);
                if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
                if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
                var i = Object.keys(e.status),
                    n = this.getStatus(),
                    o = i.indexOf(n) >= 0;
                return o && t(n), o
            }

            function a() {
                var e = this.options.position.split("-"),
                    t = [];
                return e.forEach(function(e) {
                    t.push("cc-" + e)
                }), t
            }

            function c() {
                var e = this.options,
                    i = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
                t.isMobile() && (i = "floating");
                var n = ["cc-" + i, "cc-type-" + e.type, "cc-theme-" + e.theme];
                e["static"] && n.push("cc-static"), n.push.apply(n, a.call(this));
                p.call(this, this.options.palette);
                return this.customStyleSelector && n.push(this.customStyleSelector), n
            }

            function l() {
                var e = {},
                    i = this.options;
                i.showLink || (i.elements.link = "", i.elements.messagelink = i.elements.message), Object.keys(i.elements).forEach(function(n) {
                    e[n] = t.interpolateString(i.elements[n], function(e) {
                        var t = i.content[e];
                        return e && "string" == typeof t && t.length ? t : ""
                    })
                });
                var n = i.compliance[i.type];
                n || (n = i.compliance.info), e.compliance = t.interpolateString(n, function(t) {
                    return e[t]
                });
                var o = i.layouts[i.layout];
                return o || (o = i.layouts.basic), t.interpolateString(o, function(t) {
                    return e[t]
                })
            }

            function u(i) {
                var n = this.options,
                    o = document.createElement("div"),
                    s = n.container && 1 === n.container.nodeType ? n.container : document.body;
                o.innerHTML = i;
                var r = o.children[0];
                return r.style.display = "none", t.hasClass(r, "cc-window") && e.hasTransition && t.addClass(r, "cc-invisible"), this.onButtonClick = h.bind(this), r.addEventListener("click", this.onButtonClick), n.autoAttach && (s.firstChild ? s.insertBefore(r, s.firstChild) : s.appendChild(r)), r
            }

            function h(n) {
                var o = n.target;
                if (t.hasClass(o, "cc-btn")) {
                    var s = o.className.match(new RegExp("\\bcc-(" + i.join("|") + ")\\b")),
                        r = s && s[1] || !1;
                    r && (this.setStatus(r), this.close(!0))
                }
                t.hasClass(o, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0)), t.hasClass(o, "cc-revoke") && this.revokeChoice()
            }

            function p(e) {
                var i = t.hash(JSON.stringify(e)),
                    n = "cc-color-override-" + i,
                    o = t.isPlainObject(e);
                return this.customStyleSelector = o ? n : null, o && d(i, e, "." + n), o
            }

            function d(i, n, o) {
                if (e.customStyles[i]) return void++e.customStyles[i].references;
                var s = {},
                    r = n.popup,
                    a = n.button,
                    c = n.highlight;
                r && (r.text = r.text ? r.text : t.getContrast(r.background), r.link = r.link ? r.link : r.text, s[o + ".cc-window"] = ["color: " + r.text, "background-color: " + r.background], s[o + ".cc-revoke"] = ["color: " + r.text, "background-color: " + r.background], s[o + " .cc-link," + o + " .cc-link:active," + o + " .cc-link:visited"] = ["color: " + r.link], a && (a.text = a.text ? a.text : t.getContrast(a.background), a.border = a.border ? a.border : "transparent", s[o + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background], "transparent" != a.background && (s[o + " .cc-btn:focus"] = ["background-color: " + v(a.background)]), c ? (c.text = c.text ? c.text : t.getContrast(c.background), c.border = c.border ? c.border : "transparent", s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + c.text, "border-color: " + c.border, "background-color: " + c.background]) : s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + r.text]));
                var l = document.createElement("style");
                document.head.appendChild(l), e.customStyles[i] = {
                    references: 1,
                    element: l.sheet
                };
                var u = -1;
                for (var h in s) s.hasOwnProperty(h) && l.sheet.insertRule(h + "{" + s[h].join(";") + "}", ++u)
            }

            function v(e) {
                return e = t.normaliseHex(e), "000000" == e ? "#222" : t.getLuminance(e)
            }

            function f(i) {
                if (t.isPlainObject(i)) {
                    var n = t.hash(JSON.stringify(i)),
                        o = e.customStyles[n];
                    if (o && !--o.references) {
                        var s = o.element.ownerNode;
                        s && s.parentNode && s.parentNode.removeChild(s), e.customStyles[n] = null
                    }
                }
            }

            function m(e, t) {
                for (var i = 0, n = e.length; i < n; ++i) {
                    var o = e[i];
                    if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return !0
                }
                return !1
            }

            function b() {
                var t = this.setStatus.bind(this),
                    i = this.options.dismissOnTimeout;
                "number" == typeof i && i >= 0 && (this.dismissTimeout = window.setTimeout(function() {
                    t(e.status.dismiss)
                }, Math.floor(i)));
                var n = this.options.dismissOnScroll;
                if ("number" == typeof n && n >= 0) {
                    var o = function(i) {
                        window.pageYOffset > Math.floor(n) && (t(e.status.dismiss), window.removeEventListener("scroll", o), this.onWindowScroll = null)
                    };
                    this.onWindowScroll = o, window.addEventListener("scroll", o)
                }
            }

            function y() {
                if ("info" != this.options.type && (this.options.revokable = !0), t.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
                    var e = a.call(this);
                    this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
                    var i = this.options.revokeBtn.replace("{{classes}}", e.join(" "));
                    this.revokeBtn = u.call(this, i);
                    var n = this.revokeBtn;
                    if (this.options.animateRevokable) {
                        var o = t.throttle(function(e) {
                            var i = !1,
                                o = 20,
                                s = window.innerHeight - 20;
                            t.hasClass(n, "cc-top") && e.clientY < o && (i = !0), t.hasClass(n, "cc-bottom") && e.clientY > s && (i = !0), i ? t.hasClass(n, "cc-active") || t.addClass(n, "cc-active") : t.hasClass(n, "cc-active") && t.removeClass(n, "cc-active")
                        }, 200);
                        this.onMouseMove = o, window.addEventListener("mousemove", o)
                    }
                }
            }
            var g = {
                enabled: !0,
                container: null,
                cookie: {
                    name: "cookieconsent_status",
                    path: "/",
                    domain: "",
                    expiryDays: 365
                },
                onPopupOpen: function() {},
                onPopupClose: function() {},
                onInitialise: function(e) {},
                onStatusChange: function(e, t) {},
                onRevokeChoice: function() {},
                content: {
                    header: "Cookies used on the website!",
                    message: "We use cookies and other tracking technologies to improve your browsing experience on our site, analyze site traffic, and understand where our audience is coming from. To find out more or to opt-out, please read our",
                    dismiss: "I accept",
                    allow: "Allow cookies",
                    deny: "Decline",
                    link: "Cookie Policy",
                    href: "http://cookiesandyou.com",
                    close: "&#x274c;"
                },
                elements: {
                    header: '<span class="cc-header">{{header}}</span>&nbsp;',
                    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" title="Cookie Policy" href="{{href}}" target="_blank">{{link}}</a></span>',
                    dismiss: '<div class="Button SpaceBackground"><a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn Button cc-dismiss">{{dismiss}}</a></div>',
                    allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                    deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" title="Cookie Policy" href="{{href}}" target="_blank">{{link}}</a>',
                    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                },
                window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window SpaceBackground {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
                revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
                compliance: {
                    info: '<div class="cc-compliance">{{dismiss}}</div>',
                    "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
                    "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
                },
                type: "info",
                layouts: {
                    basic: '<div class="cc-background-purple">{{messagelink}}{{compliance}}</div>',
                    "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                    "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                },
                layout: "basic",
                position: "bottom",
                theme: "block",
                "static": !1,
                palette: null,
                revokable: !1,
                animateRevokable: !0,
                showLink: !0,
                dismissOnScroll: !1,
                dismissOnTimeout: !1,
                autoOpen: !0,
                autoAttach: !0,
                whitelistPage: [],
                blacklistPage: [],
                overrideHTML: null
            };
            return n.prototype.initialise = function(e) {
                this.options && this.destroy(), t.deepExtend(this.options = {}, g), t.isPlainObject(e) && t.deepExtend(this.options, e), r.call(this) && (this.options.enabled = !1), m(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), m(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                var i = this.options.window.replace("{{classes}}", c.call(this).join(" ")).replace("{{children}}", l.call(this)),
                    n = this.options.overrideHTML;
                if ("string" == typeof n && n.length && (i = n), this.options["static"]) {
                    var o = u.call(this, '<div class="cc-grower">' + i + "</div>");
                    o.style.display = "", this.element = o.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
                } else this.element = u.call(this, i);
                b.call(this), y.call(this), this.options.autoOpen && this.autoOpen()
            }, n.prototype.destroy = function() {
                this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, f(this.options.palette), this.options = null
            }, n.prototype.open = function(t) {
                if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
            }, n.prototype.close = function(t) {
                if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
            }, n.prototype.fadeIn = function() {
                var i = this.element;
                if (e.hasTransition && i && (this.afterTransition && s.call(this, i), t.hasClass(i, "cc-invisible"))) {
                    if (i.style.display = "", this.options["static"]) {
                        var n = this.element.clientHeight;
                        this.element.parentNode.style.maxHeight = n + "px"
                    }
                    var r = 20;
                    this.openingTimeout = setTimeout(o.bind(this, i), r)
                }
            }, n.prototype.fadeOut = function() {
                var i = this.element;
                e.hasTransition && i && (this.openingTimeout && (clearTimeout(this.openingTimeout), o.bind(this, i)), t.hasClass(i, "cc-invisible") || (this.options["static"] && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = s.bind(this, i), i.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(i, "cc-invisible")))
            }, n.prototype.isOpen = function() {
                return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
            }, n.prototype.toggleRevokeButton = function(e) {
                this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
            }, n.prototype.revokeChoice = function(e) {
                this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
            }, n.prototype.hasAnswered = function(t) {
                return Object.keys(e.status).indexOf(this.getStatus()) >= 0
            }, n.prototype.hasConsented = function(t) {
                var i = this.getStatus();
                return i == e.status.allow || i == e.status.dismiss
            }, n.prototype.autoOpen = function(e) {
                !this.hasAnswered() && this.options.enabled && this.open()
            }, n.prototype.setStatus = function(i) {
                var n = this.options.cookie,
                    o = t.getCookie(n.name),
                    s = Object.keys(e.status).indexOf(o) >= 0;
                Object.keys(e.status).indexOf(i) >= 0 ? (t.setCookie(n.name, i, n.expiryDays, n.domain, n.path), this.options.onStatusChange.call(this, i, s)) : this.clearStatus()
            }, n.prototype.getStatus = function() {
                return t.getCookie(this.options.cookie.name)
            }, n.prototype.clearStatus = function() {
                var e = this.options.cookie;
                t.setCookie(e.name, "", -1, e.domain, e.path)
            }, n
        }(), e.Location = function() {
            function e(e) {
                t.deepExtend(this.options = {}, s), t.isPlainObject(e) && t.deepExtend(this.options, e), this.currentServiceIndex = -1
            }

            function i(e, t, i) {
                var n, o = document.createElement("script");
                o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function() {
                    var e = o.readyState;
                    clearTimeout(n), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null)
                }, document.body.appendChild(o), n = setTimeout(function() {
                    t.done = !0, t(), o.onreadystatechange = o.onload = null
                }, i)
            }

            function n(e, t, i, n, o) {
                var s = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                if (s.open(n ? "POST" : "GET", e, 1), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
                    for (var r = 0, a = o.length; r < a; ++r) {
                        var c = o[r].split(":", 2);
                        s.setRequestHeader(c[0].replace(/^\s+|\s+$/g, ""), c[1].replace(/^\s+|\s+$/g, ""))
                    }
                "function" == typeof t && (s.onreadystatechange = function() {
                    s.readyState > 3 && t(s)
                }), s.send(n)
            }

            function o(e) {
                return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
            }
            var s = {
                timeout: 5e3,
                services: ["freegeoip", "ipinfo", "maxmind"],
                serviceDefinitions: {
                    freegeoip: function() {
                        return {
                            url: "//freegeoip.net/json/?callback={callback}",
                            isScript: !0,
                            callback: function(e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return i.error ? o(i) : {
                                        code: i.country_code
                                    }
                                } catch (n) {
                                    return o({
                                        error: "Invalid response (" + n + ")"
                                    })
                                }
                            }
                        }
                    },
                    ipinfo: function() {
                        return {
                            url: "//ipinfo.io",
                            headers: ["Accept: application/json"],
                            callback: function(e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return i.error ? o(i) : {
                                        code: i.country
                                    }
                                } catch (n) {
                                    return o({
                                        error: "Invalid response (" + n + ")"
                                    })
                                }
                            }
                        }
                    },
                    ipinfodb: function(e) {
                        return {
                            url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                            isScript: !0,
                            callback: function(e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return "ERROR" == i.statusCode ? o({
                                        error: i.statusMessage
                                    }) : {
                                        code: i.countryCode
                                    }
                                } catch (n) {
                                    return o({
                                        error: "Invalid response (" + n + ")"
                                    })
                                }
                            }
                        }
                    },
                    maxmind: function() {
                        return {
                            url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                            isScript: !0,
                            callback: function(e) {
                                return window.geoip2 ? void geoip2.country(function(t) {
                                    try {
                                        e({
                                            code: t.country.iso_code
                                        })
                                    } catch (i) {
                                        e(o(i))
                                    }
                                }, function(t) {
                                    e(o(t))
                                }) : void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                            }
                        }
                    }
                }
            };
            return e.prototype.getNextService = function() {
                var e;
                do e = this.getServiceByIdx(++this.currentServiceIndex); while (this.currentServiceIndex < this.options.services.length && !e);
                return e
            }, e.prototype.getServiceByIdx = function(e) {
                var i = this.options.services[e];
                if ("function" == typeof i) {
                    var n = i();
                    return n.name && t.deepExtend(n, this.options.serviceDefinitions[n.name](n)), n
                }
                return "string" == typeof i ? this.options.serviceDefinitions[i]() : t.isPlainObject(i) ? this.options.serviceDefinitions[i.name](i) : null
            }, e.prototype.locate = function(e, t) {
                var i = this.getNextService();
                return i ? (this.callbackComplete = e, this.callbackError = t, void this.runService(i, this.runNextServiceOnError.bind(this))) : void t(new Error("No services to run"))
            }, e.prototype.setupUrl = function(e) {
                var t = this.getCurrentServiceOpts();
                return e.url.replace(/\{(.*?)\}/g, function(i, n) {
                    if ("callback" === n) {
                        var o = "callback" + Date.now();
                        return window[o] = function(t) {
                            e.__JSONP_DATA = JSON.stringify(t)
                        }, o
                    }
                    if (n in t.interpolateUrl) return t.interpolateUrl[n]
                })
            }, e.prototype.runService = function(e, t) {
                var o = this;
                if (e && e.url && e.callback) {
                    var s = e.isScript ? i : n,
                        r = this.setupUrl(e);
                    s(r, function(i) {
                        var n = i ? i.responseText : "";
                        e.__JSONP_DATA && (n = e.__JSONP_DATA, delete e.__JSONP_DATA), o.runServiceCallback.call(o, t, e, n)
                    }, this.options.timeout, e.data, e.headers)
                }
            }, e.prototype.runServiceCallback = function(e, t, i) {
                var n = this,
                    o = function(t) {
                        s || n.onServiceResult.call(n, e, t)
                    },
                    s = t.callback(o, i);
                s && this.onServiceResult.call(this, e, s)
            }, e.prototype.onServiceResult = function(e, t) {
                t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
            }, e.prototype.runNextServiceOnError = function(e, t) {
                if (e) {
                    this.logError(e);
                    var i = this.getNextService();
                    i ? this.runService(i, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                } else this.completeService.call(this, this.callbackComplete, t)
            }, e.prototype.getCurrentServiceOpts = function() {
                var e = this.options.services[this.currentServiceIndex];
                return "string" == typeof e ? {
                    name: e
                } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
            }, e.prototype.completeService = function(e, t) {
                this.currentServiceIndex = -1, e && e(t)
            }, e.prototype.logError = function(e) {
                var t = this.currentServiceIndex,
                    i = this.getServiceByIdx(t);
                console.error("The service[" + t + "] (" + i.url + ") responded with the following error", e)
            }, e
        }(), e.Law = function() {
            function e(e) {
                this.initialise.apply(this, arguments)
            }
            var i = {
                regionalLaw: !0,
                hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
                revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                explicitAction: ["HR", "IT", "ES"]
            };
            return e.prototype.initialise = function(e) {
                t.deepExtend(this.options = {}, i), t.isPlainObject(e) && t.deepExtend(this.options, e)
            }, e.prototype.get = function(e) {
                var t = this.options;
                return {
                    hasLaw: t.hasLaw.indexOf(e) >= 0,
                    revokable: t.revokable.indexOf(e) >= 0,
                    explicitAction: t.explicitAction.indexOf(e) >= 0
                }
            }, e.prototype.applyLaw = function(e, t) {
                var i = this.get(t);
                return i.hasLaw || (e.enabled = !1), this.options.regionalLaw && (i.revokable && (e.revokable = !0), i.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
            }, e
        }(), e.initialise = function(t, i, n) {
            var o = new e.Law(t.law);
            i || (i = function() {}), n || (n = function() {}), e.getCountryCode(t, function(n) {
                delete t.law, delete t.location, n.code && (t = o.applyLaw(t, n.code)), i(new e.Popup(t))
            }, function(i) {
                delete t.law, delete t.location, n(i, new e.Popup(t))
            })
        }, e.getCountryCode = function(t, i, n) {
            if (t.law && t.law.countryCode) return void i({
                code: t.law.countryCode
            });
            if (t.location) {
                var o = new e.Location(t.location);
                return void o.locate(function(e) {
                    i(e || {})
                }, n)
            }
            i({})
        }, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
    }
}(window.cookieconsent || {});

/*Cookie Policy Init*/
	window.addEventListener("load", function(){
	window.cookieconsent.initialise({
	"palette": {
		"popup": {
			"background": "#534BAE",
			"text": "#ffffff"
		},
		"button": {
			"background": "#174172",
			"text": "#c8c8c8"
		}
	},
	"theme": "edgeless",
	"content": {
		"href": "Cookie-Policy"
	}
	})});

// Check Cookies

function getCookie(name) {
	var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return v ? v[2] : null;
}

// If cookie accept button is pressed then apply JavaScript
if (getCookie('cookieconsent_status') == null) {
    setTimeout(
        function() {
            document.querySelector('.cc-btn.cc-dismiss').addEventListener("click", function(event) {
            applyCookies();
        })
    }, 1000)
}

// Create a script tag in the Header
function createScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
function addScripts() {		
    // GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-140457046-4');
};

// Loop through array of 3rd party scripts
function applyCookies() {
    const urls = ['//www.googletagmanager.com/gtag/js?id=UA-140457046-4'];
    addScripts();
    for (const element of urls) {
        createScript(element)
    }
}

// If cookies are accepted then apply JavaScript
if (getCookie('cookieconsent_status') == 'dismiss') {
    applyCookies();
}