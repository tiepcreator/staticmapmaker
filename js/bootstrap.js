/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    e[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.tooltip"),
          s = "object" == typeof e && e;
        (!n && /destroy|hide/.test(e)) ||
          (n || i.data("bs.tooltip", (n = new o(this, s))),
          "string" == typeof e && n[e]());
      });
    }
    var o = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (o.VERSION = "3.3.7"),
      (o.TRANSITION_DURATION = 150),
      (o.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (o.prototype.init = function (e, o, i) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(o)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
          var r = n[s];
          if ("click" == r)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != r) {
            var p = "hover" == r ? "mouseenter" : "focusin",
              l = "hover" == r ? "mouseleave" : "focusout";
            this.$element.on(
              p + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (o.prototype.getDefaults = function () {
        return o.DEFAULTS;
      }),
      (o.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (o.prototype.getDelegateOptions = function () {
        var e = {},
          o = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, i) {
              o[t] != i && (e[t] = i);
            }),
          e
        );
      }),
      (o.prototype.enter = function (e) {
        var o =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          o ||
            ((o = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, o)),
          e instanceof t.Event &&
            (o.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          o.tip().hasClass("in") || "in" == o.hoverState
            ? void (o.hoverState = "in")
            : (clearTimeout(o.timeout),
              (o.hoverState = "in"),
              o.options.delay && o.options.delay.show
                ? void (o.timeout = setTimeout(function () {
                    "in" == o.hoverState && o.show();
                  }, o.options.delay.show))
                : o.show())
        );
      }),
      (o.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (o.prototype.leave = function (e) {
        var o =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          o ||
            ((o = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, o)),
          e instanceof t.Event &&
            (o.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          o.isInStateTrue()
            ? void 0
            : (clearTimeout(o.timeout),
              (o.hoverState = "out"),
              o.options.delay && o.options.delay.hide
                ? void (o.timeout = setTimeout(function () {
                    "out" == o.hoverState && o.hide();
                  }, o.options.delay.hide))
                : o.hide())
        );
      }),
      (o.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !i) return;
          var n = this,
            s = this.tip(),
            r = this.getUID(this.type);
          this.setContent(),
            s.attr("id", r),
            this.$element.attr("aria-describedby", r),
            this.options.animation && s.addClass("fade");
          var p =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, s[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            a = l.test(p);
          a && (p = p.replace(l, "") || "top"),
            s
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(p)
              .data("bs." + this.type, this),
            this.options.container
              ? s.appendTo(this.options.container)
              : s.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var h = this.getPosition(),
            f = s[0].offsetWidth,
            c = s[0].offsetHeight;
          if (a) {
            var u = p,
              d = this.getPosition(this.$viewport);
            (p =
              "bottom" == p && h.bottom + c > d.bottom
                ? "top"
                : "top" == p && h.top - c < d.top
                ? "bottom"
                : "right" == p && h.right + f > d.width
                ? "left"
                : "left" == p && h.left - f < d.left
                ? "right"
                : p),
              s.removeClass(u).addClass(p);
          }
          var v = this.getCalculatedOffset(p, h, f, c);
          this.applyPlacement(v, p);
          var g = function () {
            var t = n.hoverState;
            n.$element.trigger("shown.bs." + n.type),
              (n.hoverState = null),
              "out" == t && n.leave(n);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? s
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(o.TRANSITION_DURATION)
            : g();
        }
      }),
      (o.prototype.applyPlacement = function (e, o) {
        var i = this.tip(),
          n = i[0].offsetWidth,
          s = i[0].offsetHeight,
          r = parseInt(i.css("margin-top"), 10),
          p = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0),
          isNaN(p) && (p = 0),
          (e.top += r),
          (e.left += p),
          t.offset.setOffset(
            i[0],
            t.extend(
              {
                using: function (t) {
                  i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          i.addClass("in");
        var l = i[0].offsetWidth,
          a = i[0].offsetHeight;
        "top" == o && a != s && (e.top = e.top + s - a);
        var h = this.getViewportAdjustedDelta(o, e, l, a);
        h.left ? (e.left += h.left) : (e.top += h.top);
        var f = /top|bottom/.test(o),
          c = f ? 2 * h.left - n + l : 2 * h.top - s + a,
          u = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(c, i[0][u], f);
      }),
      (o.prototype.replaceArrow = function (t, e, o) {
        this.arrow()
          .css(o ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(o ? "top" : "left", "");
      }),
      (o.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (o.prototype.hide = function (e) {
        function i() {
          "in" != n.hoverState && s.detach(),
            n.$element &&
              n.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + n.type),
            e && e();
        }
        var n = this,
          s = t(this.$tip),
          r = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(r),
          r.isDefaultPrevented()
            ? void 0
            : (s.removeClass("in"),
              t.support.transition && s.hasClass("fade")
                ? s
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(o.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (o.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (o.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (o.prototype.getPosition = function (e) {
        e = e || this.$element;
        var o = e[0],
          i = "BODY" == o.tagName,
          n = o.getBoundingClientRect();
        null == n.width &&
          (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top,
          }));
        var s = window.SVGElement && o instanceof window.SVGElement,
          r = i ? { top: 0, left: 0 } : s ? null : e.offset(),
          p = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          l = i
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, n, p, l, r);
      }),
      (o.prototype.getCalculatedOffset = function (t, e, o, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - o / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - o / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - o }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (o.prototype.getViewportAdjustedDelta = function (t, e, o, i) {
        var n = { top: 0, left: 0 };
        if (!this.$viewport) return n;
        var s = (this.options.viewport && this.options.viewport.padding) || 0,
          r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var p = e.top - s - r.scroll,
            l = e.top + s - r.scroll + i;
          p < r.top
            ? (n.top = r.top - p)
            : l > r.top + r.height && (n.top = r.top + r.height - l);
        } else {
          var a = e.left - s,
            h = e.left + s + o;
          a < r.left
            ? (n.left = r.left - a)
            : h > r.right && (n.left = r.left + r.width - h);
        }
        return n;
      }),
      (o.prototype.getTitle = function () {
        var t,
          e = this.$element,
          o = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof o.title ? o.title.call(e[0]) : o.title));
      }),
      (o.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (o.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (o.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (o.prototype.enable = function () {
        this.enabled = !0;
      }),
      (o.prototype.disable = function () {
        this.enabled = !1;
      }),
      (o.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (o.prototype.toggle = function (e) {
        var o = this;
        e &&
          ((o = t(e.currentTarget).data("bs." + this.type)),
          o ||
            ((o = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, o))),
          e
            ? ((o.inState.click = !o.inState.click),
              o.isInStateTrue() ? o.enter(o) : o.leave(o))
            : o.tip().hasClass("in")
            ? o.leave(o)
            : o.enter(o);
      }),
      (o.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      });
    var i = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = o),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = i), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.popover"),
          s = "object" == typeof e && e;
        (!n && /destroy|hide/.test(e)) ||
          (n || i.data("bs.popover", (n = new o(this, s))),
          "string" == typeof e && n[e]());
      });
    }
    var o = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (o.VERSION = "3.3.7"),
      (o.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (o.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (o.prototype.constructor = o),
      (o.prototype.getDefaults = function () {
        return o.DEFAULTS;
      }),
      (o.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          o = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof o
                  ? "html"
                  : "append"
                : "text"
            ](o),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (o.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (o.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (o.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var i = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = o),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = i), this;
      });
  })(jQuery);
