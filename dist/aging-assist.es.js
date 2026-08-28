var it = Object.defineProperty;
var nt = (t, e, s) => e in t ? it(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var u = (t, e, s) => nt(t, typeof e != "symbol" ? e + "" : e, s);
import { defineComponent as at, computed as y, ref as S, watch as L, nextTick as E, onMounted as ot, onBeforeUnmount as rt, openBlock as T, createElementBlock as P, createVNode as g, unref as f, createElementVNode as r, toDisplayString as h, createCommentVNode as D, Transition as lt, withCtx as ct, normalizeClass as v, Fragment as Oe, renderList as $e, createTextVNode as oe, normalizeStyle as ut, reactive as ht, createApp as dt } from "vue";
import { BadgeCheck as gt, Sparkles as ft, ListRestart as pt, Volume2 as mt, Pause as bt, Play as St, AudioLines as vt, Rows3 as yt, Baseline as Tt, Type as Pt, Minimize2 as wt, Maximize2 as xt, Contrast as Et, MousePointer2 as kt, Crosshair as Ct, ScanEye as Mt, ALargeSmall as At, Zap as Rt, CircleOff as Lt, X as He, Focus as Dt, MousePointerClick as Ft, Hand as Ot, ShieldAlert as $t } from "lucide-vue-next";
let re = null, be = null;
function ze() {
  return be ? Promise.resolve(be) : re || (re = import("./subtitle-runtime-CtSRJvvb.js").then((t) => ({
    convert: t.convertSubtitleRuntime,
    pinyinParts: t.convertPinyinPartsRuntime
  })), re.then((t) => (be = t, t)));
}
async function Ht(t, e) {
  return (await ze()).convert(t, e);
}
async function Bt(t) {
  return (await ze()).pinyinParts(t);
}
const It = ["data-theme"], zt = ["aria-label"], qt = ["aria-label"], Nt = { class: "aging-assist-shell" }, Gt = { class: "aging-assist-brand" }, Ut = {
  class: "aging-assist-mark",
  "aria-hidden": "true"
}, Kt = { class: "aging-assist-title" }, jt = { class: "aging-assist-groups" }, Zt = { class: "aging-assist-group" }, Vt = ["aria-pressed"], Wt = { class: "aging-assist-group" }, Xt = { class: "aging-assist-group" }, Jt = ["aria-pressed", "title"], Yt = ["aria-pressed"], Qt = ["aria-pressed"], _t = ["aria-pressed"], es = ["aria-pressed"], ts = { class: "aging-assist-group" }, ss = ["aria-expanded", "aria-controls"], is = { class: "aging-assist-status" }, ns = { class: "aging-assist-rate" }, as = ["for"], os = ["id", "value"], rs = ["value"], ls = {
  key: 0,
  class: "aging-assist-message",
  role: "status"
}, cs = ["aria-label"], us = ["id", "aria-labelledby"], hs = ["id"], ds = { class: "aging-assist-switches" }, gs = { class: "aging-assist-switch" }, fs = ["checked"], ps = { class: "aging-assist-switch" }, ms = ["checked"], bs = { class: "aging-assist-switch" }, Ss = ["checked"], vs = { class: "aging-assist-switch" }, ys = ["checked"], Ts = { class: "aging-assist-bigtext-window" }, Ps = {
  key: 0,
  class: "aging-assist-subtitle-pinyin"
}, ws = { class: "aging-assist-subtitle-char" }, xs = { class: "aging-assist-bigtext-actions" }, Es = ["aria-label"], ks = ["aria-label", "title", "aria-pressed"], Cs = ["aria-pressed"], Ms = ["aria-label", "title"], As = ["aria-labelledby", "aria-describedby"], Rs = { class: "aging-assist-confirm-box" }, Ls = ["id"], Ds = ["id"], Fs = { class: "aging-assist-confirm-actions" }, Os = 8, $s = /* @__PURE__ */ at({
  __name: "AssistPanel",
  props: {
    state: {},
    labels: {},
    position: {},
    theme: {},
    idPrefix: {},
    showLauncher: { type: Boolean }
  },
  emits: ["action"],
  setup(t, { emit: e }) {
    const s = t, n = e, a = y(() => [
      { label: s.labels.slowRate, value: 0.75 },
      { label: s.labels.standardRate, value: 1 },
      { label: s.labels.fasterRate, value: 1.25 },
      { label: s.labels.fastRate, value: 1.5 }
    ]), c = S(null), b = S(null), m = S(null), x = S(null), Y = y(() => `${s.idPrefix}-confirm-title`), Q = y(() => `${s.idPrefix}-confirm-description`), U = y(() => `${s.idPrefix}-settings-title`), K = y(() => `${s.idPrefix}-settings`), j = y(() => `${s.idPrefix}-rate`), ue = S(0), he = S(0), F = S(0), _ = S(0), Z = S(0), $ = S(0), V = S(""), z = S(0), H = S(0), M = y(
      () => s.state.currentText || s.labels.bigTextHint
    ), de = y(
      () => s.state.bigText && s.state.speech && !s.state.speechPaused
    ), ee = S(M.value), te = S([]), k = y(() => s.state.subtitleMode === "pinyin"), xe = y(() => s.state.subtitleMode === "traditional"), qe = y(() => k.value ? `${s.labels.simplifiedSubtitle.slice(0, 1)}/${s.labels.traditionalSubtitle.slice(0, 1)}` : xe.value ? s.labels.simplifiedSubtitle : s.labels.traditionalSubtitle), Ne = y(() => k.value ? M.value : ee.value), Ge = y(() => Array.from(Ne.value)), Ue = y(() => k.value ? te.value.flatMap((o) => {
      const i = Array.from(o.origin);
      return i.map((l) => i.length === 1 ? o.pinyin : "");
    }) : []);
    function Ke() {
      d(
        "subtitleMode",
        xe.value || k.value ? "simplified" : "traditional"
      );
    }
    function d(o, i) {
      n("action", o, i);
    }
    let ge = 0;
    async function Ee(o = !1) {
      const i = ++ge;
      if (s.state.subtitleMode === "simplified" && !o) {
        ee.value = M.value, te.value = [];
        return;
      }
      if (s.state.subtitleMode === "pinyin") {
        const p = await Bt(M.value);
        if (i !== ge) return;
        te.value = p, ee.value = M.value;
        return;
      }
      const l = await Ht(M.value, s.state.subtitleMode);
      i === ge && (te.value = [], ee.value = l);
    }
    function se(o, i) {
      d("setBoolean", {
        key: o,
        value: i.target.checked
      });
    }
    function ie() {
      F.value && (window.cancelAnimationFrame(F.value), F.value = 0);
    }
    function W() {
      Z.value && window.clearTimeout(Z.value), Z.value = 0, V.value = "", z.value = 0, H.value = 0;
    }
    function ne(o) {
      return Math.min(1, Math.max(0, o));
    }
    function X(o) {
      const i = o.scrollHeight - o.clientHeight;
      ue.value = i > 0 ? Math.min(100, o.scrollTop / i * 100) : 0;
    }
    function je(o) {
      const i = Array.from(o.querySelectorAll(".aging-assist-subtitle-char")), l = [];
      if (i.length <= 1)
        return { charsLength: i.length, lines: l };
      const p = (R) => {
        var B;
        return ((B = R.closest(".aging-assist-subtitle-token")) == null ? void 0 : B.offsetTop) ?? R.offsetTop;
      }, A = p(i[0]);
      let N = 0, O = A;
      return i.forEach((R, B) => {
        const J = p(R);
        J <= O + 2 || (l.push({ start: N, end: B, top: O }), N = B, O = J);
      }), l.push({ start: N, end: i.length, top: O }), { charsLength: i.length, lines: l };
    }
    function Ze(o) {
      const i = ne(o);
      return i * i * (3 - 2 * i);
    }
    function fe() {
      var o;
      return ((o = window.matchMedia) == null ? void 0 : o.call(window, "(prefers-reduced-motion: reduce)").matches) ?? !1;
    }
    function Ve() {
      return s.state.speech ? s.state.speechProgress : _.value;
    }
    function We(o, i) {
      if (!s.state.bigText) return 0;
      const { charsLength: l, lines: p } = je(o);
      if (l <= 1 || p.length <= 1) return 0;
      const A = ne(Ve());
      if (A >= 1) return i;
      const N = A * l, O = p.findIndex((st) => N < st.end);
      if (O <= 0) return 0;
      const R = p[O], B = p[O - 1], J = p[0].top, _e = Math.max(1, R.end - R.start), et = Ze((N - R.start) / _e), Fe = Math.max(0, B.top - J), tt = Math.max(0, R.top - J);
      return Math.min(i, Fe + (tt - Fe) * et);
    }
    function ke() {
      const o = c.value;
      if (!o) {
        F.value = 0;
        return;
      }
      const i = he.value - o.scrollTop;
      if (Math.abs(i) < 0.5) {
        o.scrollTop = he.value, X(o), F.value = 0;
        return;
      }
      o.scrollTop += i * 0.22, X(o), F.value = window.requestAnimationFrame(ke);
    }
    function Ce(o, i, l = !1) {
      if (he.value = i, l || fe()) {
        ie(), o.scrollTop = i, X(o);
        return;
      }
      F.value || (F.value = window.requestAnimationFrame(ke));
    }
    function q(o = !1) {
      const i = c.value;
      if (!i) return;
      const l = i.scrollHeight - i.clientHeight;
      if (l <= 0) {
        ue.value = 0;
        return;
      }
      Ce(i, We(i, l), o);
    }
    function Xe(o) {
      const i = Math.max(o.replace(/\s+/g, "").length, 8);
      return Math.max(4200, i * 120);
    }
    function Me(o) {
      return `${M.value}|${o.scrollHeight}|${o.clientHeight}`;
    }
    function Ae(o, i = !1) {
      V.value = Me(o), H.value = Xe(M.value);
      const l = o.scrollHeight - o.clientHeight;
      _.value = i && l > 0 ? ne(o.scrollTop / l) : 0, z.value = window.performance.now() - _.value * H.value;
    }
    function Re() {
      const o = c.value;
      if (!o || !s.state.bigText || s.state.speech || fe()) {
        V.value = "", z.value = 0, H.value = 0;
        return;
      }
      if (o.scrollHeight <= o.clientHeight) {
        V.value = "", z.value = 0, H.value = 0, X(o);
        return;
      }
      (Me(o) !== V.value || !H.value) && Ae(o);
      const l = z.value || window.performance.now();
      z.value = l, _.value = ne(
        (window.performance.now() - l) / H.value
      ), q(!0);
    }
    function ae(o = !1, i = 0) {
      i === 0 && W(), !(!s.state.bigText || s.state.speech || fe()) && E(() => {
        const l = c.value;
        if (l) {
          if (l.scrollHeight <= l.clientHeight) {
            i < Os && (Z.value = window.setTimeout(() => {
              Z.value = 0, ae(o, i + 1);
            }, 120));
            return;
          }
          Ae(l, o), Re();
        }
      });
    }
    function Je() {
      if ($.value) return;
      const o = () => {
        $.value = 0, Re(), $.value = window.setTimeout(o, 64);
      };
      $.value = window.setTimeout(o, 64);
    }
    function Ye() {
      $.value && (window.clearTimeout($.value), $.value = 0);
    }
    function pe() {
      E(() => {
        const o = c.value;
        o && (Ce(o, 0, !0), de.value && q(), ae());
      });
    }
    L(M, async () => {
      await Ee(), pe();
    }), L(() => s.state.subtitleMode, async (o, i) => {
      await Ee(o === "simplified" && i !== "simplified"), pe();
    }), L(
      () => s.state.bigText,
      (o) => {
        o ? pe() : (ie(), W());
      }
    ), L(de, (o) => {
      o ? (W(), E(q)) : (ie(), s.state.speech || ae(!0));
    }), L(
      () => s.state.speech,
      (o) => {
        o ? (W(), E(q)) : ae(!0);
      }
    ), L(
      () => s.state.speechRate,
      () => {
        de.value && E(q);
      }
    ), L(
      () => s.state.speechProgress,
      () => {
        !s.state.bigText || !s.state.speech || E(() => {
          q();
        });
      }
    );
    let w = null;
    function Le() {
      var o;
      d("toolbarResize", ((o = b.value) == null ? void 0 : o.getBoundingClientRect().height) ?? 0);
    }
    function me() {
      w == null || w.disconnect(), w = null, Le(), !(!b.value || typeof ResizeObserver > "u") && (w = new ResizeObserver(Le), w.observe(b.value));
    }
    function De() {
      E(me);
    }
    function Qe(o) {
      if (o.key === "Escape") {
        o.preventDefault(), d("cancelDanger");
        return;
      }
      if (o.key !== "Tab" || !m.value) return;
      const i = Array.from(
        m.value.querySelectorAll(
          "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
        )
      ).filter((A) => !A.hidden), l = i[0], p = i[i.length - 1];
      !l || !p || (o.shiftKey && document.activeElement === l ? (o.preventDefault(), p.focus()) : !o.shiftKey && document.activeElement === p && (o.preventDefault(), l.focus()));
    }
    return L(
      () => s.state.toolbarOpen,
      async (o) => {
        await E(), o ? me() : (w == null || w.disconnect(), w = null, d("toolbarResize", 0));
      }
    ), L(
      () => s.state.confirming,
      async (o) => {
        var i, l, p;
        if (o) {
          const A = document.activeElement;
          x.value = A instanceof HTMLElement ? A : null, await E(), (l = (i = m.value) == null ? void 0 : i.querySelector("[data-aging-confirm-primary]")) == null || l.focus();
          return;
        }
        await E(), (p = x.value) != null && p.isConnected && x.value.focus(), x.value = null;
      }
    ), ot(() => {
      Je(), window.addEventListener("resize", De), s.state.toolbarOpen && E(me);
    }), rt(() => {
      window.removeEventListener("resize", De), w == null || w.disconnect(), d("toolbarResize", 0), Ye(), ie(), W();
    }), (o, i) => (T(), P("div", {
      class: "aging-assist-root",
      "data-aging-assist-root": "",
      "data-theme": t.theme
    }, [
      t.showLauncher && !t.state.toolbarOpen ? (T(), P("button", {
        key: 0,
        class: "aging-assist-launcher",
        type: "button",
        "aria-label": t.labels.openToolbar,
        onClick: i[0] || (i[0] = (l) => d("open"))
      }, [
        g(f(gt), { size: 24 }),
        r("span", null, h(t.labels.launcher), 1)
      ], 8, zt)) : D("", !0),
      g(lt, {
        name: t.position === "bottom" ? "aging-toolbar-slide-bottom" : "aging-toolbar-slide-top"
      }, {
        default: ct(() => [
          t.state.toolbarOpen ? (T(), P("section", {
            key: 0,
            ref_key: "toolbar",
            ref: b,
            class: v(["aging-assist-toolbar", t.position === "bottom" ? "is-bottom" : "is-top"]),
            role: "toolbar",
            "aria-orientation": "horizontal",
            "aria-label": t.labels.launcher
          }, [
            r("div", Nt, [
              r("div", Gt, [
                r("div", Ut, [
                  g(f(ft), { size: 26 })
                ]),
                r("div", Kt, [
                  r("strong", null, h(t.labels.launcher), 1),
                  r("span", null, h(t.labels.tagline), 1)
                ])
              ]),
              r("div", jt, [
                r("div", Zt, [
                  r("button", {
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[1] || (i[1] = (l) => d("reset"))
                  }, [
                    g(f(pt)),
                    r("span", null, h(t.labels.reset), 1)
                  ]),
                  r("button", {
                    class: v(["aging-assist-control", { "is-active": t.state.speech }]),
                    type: "button",
                    "aria-pressed": t.state.speech,
                    onClick: i[2] || (i[2] = (l) => d("toggle", "speech"))
                  }, [
                    g(f(mt)),
                    r("span", null, h(t.labels.speech), 1)
                  ], 10, Vt),
                  t.state.speech && !t.state.speechPaused ? (T(), P("button", {
                    key: 0,
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[3] || (i[3] = (l) => d("pauseSpeech"))
                  }, [
                    g(f(bt)),
                    r("span", null, h(t.labels.pauseSpeech), 1)
                  ])) : D("", !0),
                  t.state.speech && t.state.speechPaused ? (T(), P("button", {
                    key: 1,
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[4] || (i[4] = (l) => d("resumeSpeech"))
                  }, [
                    g(f(St)),
                    r("span", null, h(t.labels.continueSpeech), 1)
                  ])) : D("", !0),
                  r("button", {
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[5] || (i[5] = (l) => d("readPrevious"))
                  }, [
                    g(f(vt)),
                    r("span", null, h(t.labels.readPrevious), 1)
                  ]),
                  r("button", {
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[6] || (i[6] = (l) => d("readNext"))
                  }, [
                    g(f(yt)),
                    r("span", null, h(t.labels.readNext), 1)
                  ])
                ]),
                r("div", Wt, [
                  r("button", {
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[7] || (i[7] = (l) => d("fontDown"))
                  }, [
                    g(f(Tt)),
                    r("span", null, h(t.labels.fontDown), 1)
                  ]),
                  r("button", {
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[8] || (i[8] = (l) => d("fontUp"))
                  }, [
                    g(f(Pt)),
                    r("span", null, h(t.labels.fontUp), 1)
                  ]),
                  r("button", {
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[9] || (i[9] = (l) => d("zoomOut"))
                  }, [
                    g(f(wt)),
                    r("span", null, h(t.labels.pageZoomOut), 1)
                  ]),
                  r("button", {
                    class: "aging-assist-control",
                    type: "button",
                    onClick: i[10] || (i[10] = (l) => d("zoomIn"))
                  }, [
                    g(f(xt)),
                    r("span", null, h(t.labels.pageZoomIn), 1)
                  ])
                ]),
                r("div", Xt, [
                  r("button", {
                    class: v(["aging-assist-control", { "is-active": t.state.highContrast }]),
                    type: "button",
                    "aria-pressed": t.state.highContrast,
                    title: t.labels.highContrast,
                    onClick: i[11] || (i[11] = (l) => d("toggle", "highContrast"))
                  }, [
                    g(f(Et)),
                    r("span", null, h(t.labels.highContrast), 1)
                  ], 10, Jt),
                  r("button", {
                    class: v(["aging-assist-control", { "is-active": t.state.largeCursor }]),
                    type: "button",
                    "aria-pressed": t.state.largeCursor,
                    onClick: i[12] || (i[12] = (l) => d("toggle", "largeCursor"))
                  }, [
                    g(f(kt)),
                    r("span", null, h(t.labels.largeCursor), 1)
                  ], 10, Yt),
                  r("button", {
                    class: v(["aging-assist-control", { "is-active": t.state.crosshair }]),
                    type: "button",
                    "aria-pressed": t.state.crosshair,
                    onClick: i[13] || (i[13] = (l) => d("toggle", "crosshair"))
                  }, [
                    g(f(Ct)),
                    r("span", null, h(t.labels.crosshair), 1)
                  ], 10, Qt),
                  r("button", {
                    class: v(["aging-assist-control", { "is-active": t.state.readingGuide }]),
                    type: "button",
                    "aria-pressed": t.state.readingGuide,
                    onClick: i[14] || (i[14] = (l) => d("toggle", "readingGuide"))
                  }, [
                    g(f(Mt)),
                    r("span", null, h(t.labels.readingGuide), 1)
                  ], 10, _t),
                  r("button", {
                    class: v(["aging-assist-control", { "is-active": t.state.bigText }]),
                    type: "button",
                    "aria-pressed": t.state.bigText,
                    onClick: i[15] || (i[15] = (l) => d("toggle", "bigText"))
                  }, [
                    g(f(At)),
                    r("span", null, h(t.labels.bigText), 1)
                  ], 10, es)
                ]),
                r("div", ts, [
                  r("button", {
                    class: v(["aging-assist-control", { "is-active": t.state.moreOpen }]),
                    type: "button",
                    "aria-expanded": t.state.moreOpen,
                    "aria-controls": K.value,
                    onClick: i[16] || (i[16] = (l) => d("toggleMore"))
                  }, [
                    g(f(Rt)),
                    r("span", null, h(t.labels.more), 1)
                  ], 10, ss)
                ])
              ]),
              r("div", is, [
                r("div", ns, [
                  r("label", { for: j.value }, h(t.labels.speechRate), 9, as),
                  r("select", {
                    id: j.value,
                    value: t.state.speechRate,
                    onChange: i[17] || (i[17] = (l) => d("rate", Number(l.target.value)))
                  }, [
                    (T(!0), P(Oe, null, $e(a.value, (l) => (T(), P("option", {
                      key: l.value,
                      value: l.value
                    }, h(l.label), 9, rs))), 128))
                  ], 40, os)
                ]),
                t.state.statusMessage ? (T(), P("p", ls, h(t.state.statusMessage), 1)) : D("", !0),
                r("button", {
                  class: "aging-assist-control is-danger",
                  type: "button",
                  onClick: i[18] || (i[18] = (l) => d("disable"))
                }, [
                  g(f(Lt)),
                  r("span", null, h(t.labels.exit), 1)
                ]),
                r("button", {
                  class: "aging-assist-control",
                  type: "button",
                  "aria-label": t.labels.closeToolbar,
                  onClick: i[19] || (i[19] = (l) => d("close"))
                }, [
                  g(f(He)),
                  r("span", null, h(t.labels.closeToolbar), 1)
                ], 8, cs)
              ])
            ])
          ], 10, qt)) : D("", !0)
        ]),
        _: 1
      }, 8, ["name"]),
      t.state.toolbarOpen && t.state.moreOpen ? (T(), P("aside", {
        key: 1,
        id: K.value,
        class: v(["aging-assist-more", t.position === "bottom" ? "is-bottom" : "is-top"]),
        "aria-labelledby": U.value
      }, [
        r("h2", { id: U.value }, h(t.labels.enhancementSettings), 9, hs),
        r("div", ds, [
          r("label", gs, [
            r("span", null, [
              g(f(Dt), { size: 20 }),
              oe(" " + h(t.labels.focusEnhance), 1)
            ]),
            r("input", {
              type: "checkbox",
              checked: t.state.focusEnhance,
              onChange: i[20] || (i[20] = (l) => se("focusEnhance", l))
            }, null, 40, fs)
          ]),
          r("label", ps, [
            r("span", null, [
              g(f(Ft), { size: 20 }),
              oe(" " + h(t.labels.clickEnhance), 1)
            ]),
            r("input", {
              type: "checkbox",
              checked: t.state.clickEnhance,
              onChange: i[21] || (i[21] = (l) => se("clickEnhance", l))
            }, null, 40, ms)
          ]),
          r("label", bs, [
            r("span", null, [
              g(f(Ot), { size: 20 }),
              oe(" " + h(t.labels.formEnhance), 1)
            ]),
            r("input", {
              type: "checkbox",
              checked: t.state.formEnhance,
              onChange: i[22] || (i[22] = (l) => se("formEnhance", l))
            }, null, 40, Ss)
          ]),
          r("label", vs, [
            r("span", null, [
              g(f($t), { size: 20 }),
              oe(" " + h(t.labels.mistakeGuard), 1)
            ]),
            r("input", {
              type: "checkbox",
              checked: t.state.mistakeGuard,
              onChange: i[23] || (i[23] = (l) => se("mistakeGuard", l))
            }, null, 40, ys)
          ])
        ])
      ], 10, us)) : D("", !0),
      t.state.bigText ? (T(), P("section", {
        key: 2,
        class: v(["aging-assist-bigtext is-bottom", [
          t.position === "top" ? "has-toolbar-top" : "has-toolbar-bottom",
          t.state.speech ? "is-reading" : "is-plain"
        ]]),
        "aria-live": "polite"
      }, [
        r("div", Ts, [
          r("p", {
            ref_key: "bigTextScroller",
            ref: c,
            onScroll: i[24] || (i[24] = (l) => X(l.currentTarget))
          }, [
            (T(!0), P(Oe, null, $e(Ge.value, (l, p) => (T(), P("span", {
              key: `${p}-${l}`,
              class: v(["aging-assist-subtitle-token", { "is-pinyin": k.value }])
            }, [
              k.value ? (T(), P("span", Ps, h(Ue.value[p] || " "), 1)) : D("", !0),
              r("span", ws, h(l), 1)
            ], 2))), 128))
          ], 544),
          r("span", {
            class: "aging-assist-bigtext-progress",
            style: ut({ transform: `scaleX(${ue.value / 100})` }),
            "aria-hidden": "true"
          }, null, 4)
        ]),
        r("div", xs, [
          r("div", {
            class: "aging-assist-subtitle-mode",
            role: "group",
            "aria-label": t.labels.subtitleMode
          }, [
            r("span", null, h(t.labels.subtitleMode), 1),
            r("button", {
              type: "button",
              class: v({ "is-active": !k.value }),
              "aria-label": `${t.labels.simplifiedSubtitle}/${t.labels.traditionalSubtitle}`,
              title: `${t.labels.simplifiedSubtitle}/${t.labels.traditionalSubtitle}`,
              "aria-pressed": !k.value,
              onClick: Ke
            }, h(qe.value), 11, ks),
            r("button", {
              type: "button",
              class: v({ "is-active": k.value }),
              "aria-pressed": k.value,
              onClick: i[25] || (i[25] = (l) => d("subtitleMode", "pinyin"))
            }, h(t.labels.pinyinSubtitle), 11, Cs)
          ], 8, Es),
          r("button", {
            type: "button",
            "aria-label": t.labels.closeBigText,
            title: t.labels.closeBigText,
            onClick: i[26] || (i[26] = (l) => d("toggle", "bigText"))
          }, [
            g(f(He), { size: 28 })
          ], 8, Ms)
        ])
      ], 2)) : D("", !0),
      r("div", {
        class: v(["aging-assist-crosshair-x", { "is-visible": t.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      r("div", {
        class: v(["aging-assist-crosshair-y", { "is-visible": t.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      t.state.confirming ? (T(), P("section", {
        key: 3,
        ref_key: "confirmDialog",
        ref: m,
        class: "aging-assist-confirm",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": Y.value,
        "aria-describedby": Q.value,
        onKeydown: Qe
      }, [
        r("div", Rs, [
          r("h2", { id: Y.value }, h(t.labels.confirmTitle), 9, Ls),
          r("p", { id: Q.value }, h(t.labels.confirmDescription), 9, Ds),
          r("div", Fs, [
            r("button", {
              type: "button",
              onClick: i[27] || (i[27] = (l) => d("cancelDanger"))
            }, h(t.labels.cancel), 1),
            r("button", {
              class: "primary",
              type: "button",
              "data-aging-confirm-primary": "",
              onClick: i[28] || (i[28] = (l) => d("confirmDanger"))
            }, h(t.labels.continue), 1)
          ])
        ])
      ], 40, As)) : D("", !0)
    ], 8, It));
  }
}), Hs = "aging-assist", Bs = "aging-assist-state", Se = {
  enabled: !1,
  toolbarOpen: !1,
  moreOpen: !1,
  confirming: !1,
  fontScale: 1,
  pageScale: 1,
  highContrast: !1,
  contrastMode: "standard",
  simplified: !1,
  largeCursor: !1,
  crosshair: !1,
  readingGuide: !1,
  bigText: !1,
  speech: !1,
  speechPaused: !1,
  speechProgress: 0,
  speechRate: 1,
  subtitleMode: "simplified",
  statusMessage: "",
  focusEnhance: !0,
  clickEnhance: !1,
  formEnhance: !0,
  mistakeGuard: !1,
  currentText: "",
  readingIndex: -1
}, Is = {
  launcher: "适老化",
  tagline: "更清楚，更好点，更安心",
  openToolbar: "打开适老化工具",
  closeToolbar: "收起工具条",
  enable: "开启服务",
  exit: "退出服务",
  reset: "重置",
  fontUp: "文字放大",
  fontDown: "文字缩小",
  pageZoomIn: "页面放大",
  pageZoomOut: "页面缩小",
  highContrast: "配色",
  simplified: "简洁模式",
  largeCursor: "大鼠标",
  crosshair: "十字线",
  readingGuide: "指读",
  bigText: "大字幕",
  closeBigText: "关闭大字幕",
  speech: "语音朗读",
  speechRate: "语速",
  subtitleMode: "字幕",
  simplifiedSubtitle: "简体",
  traditionalSubtitle: "繁體",
  pinyinSubtitle: "拼音",
  focusEnhance: "焦点增强",
  clickEnhance: "点击增强",
  formEnhance: "表单辅助",
  mistakeGuard: "防误触",
  readPrevious: "上一段",
  readNext: "下一段",
  pauseSpeech: "暂停朗读",
  continueSpeech: "继续朗读",
  more: "更多",
  enhancementSettings: "增强设置",
  slowRate: "慢速",
  standardRate: "标准",
  fasterRate: "较快",
  fastRate: "快速",
  confirmTitle: "请确认操作",
  confirmDescription: "这个操作可能会提交、删除或改变重要信息。请确认是否继续。",
  cancel: "取消",
  continue: "继续",
  bigTextHint: "移动鼠标或触摸文字，这里会显示大字幕。",
  speechFailed: "朗读失败，请稍后再试",
  speechUnsupported: "当前浏览器不支持朗读"
}, zs = {
  launcher: "Accessibility",
  tagline: "Clearer, easier and safer",
  openToolbar: "Open accessibility tools",
  closeToolbar: "Close toolbar",
  enable: "Enable service",
  exit: "Exit service",
  reset: "Reset",
  fontUp: "Increase text",
  fontDown: "Decrease text",
  pageZoomIn: "Zoom in",
  pageZoomOut: "Zoom out",
  highContrast: "Color scheme",
  simplified: "Simplify page",
  largeCursor: "Large cursor",
  crosshair: "Crosshair",
  readingGuide: "Reading guide",
  bigText: "Large captions",
  closeBigText: "Close large captions",
  speech: "Read aloud",
  speechRate: "Speech rate",
  subtitleMode: "Captions",
  simplifiedSubtitle: "Simplified",
  traditionalSubtitle: "Traditional",
  pinyinSubtitle: "Pinyin",
  focusEnhance: "Focus highlight",
  clickEnhance: "Larger targets",
  formEnhance: "Form assistance",
  mistakeGuard: "Action guard",
  readPrevious: "Previous item",
  readNext: "Next item",
  pauseSpeech: "Pause reading",
  continueSpeech: "Resume reading",
  more: "More",
  enhancementSettings: "Enhancement settings",
  slowRate: "Slow",
  standardRate: "Standard",
  fasterRate: "Faster",
  fastRate: "Fast",
  confirmTitle: "Confirm action",
  confirmDescription: "This action may submit, delete or change important information. Continue?",
  cancel: "Cancel",
  continue: "Continue",
  bigTextHint: "Point to, focus or touch text to show it here.",
  speechFailed: "Reading failed. Please try again.",
  speechUnsupported: "Read aloud is not supported in this browser."
}, qs = [
  "enabled",
  "toolbarOpen",
  "moreOpen",
  "confirming",
  "highContrast",
  "simplified",
  "largeCursor",
  "crosshair",
  "readingGuide",
  "bigText",
  "speech",
  "speechPaused",
  "focusEnhance",
  "clickEnhance",
  "formEnhance",
  "mistakeGuard"
], Ns = /* @__PURE__ */ new Set([0.75, 1, 1.25, 1.5]), Gs = /* @__PURE__ */ new Set(["simplified", "traditional", "pinyin"]), Us = /* @__PURE__ */ new Set([
  "standard",
  "white-black-blue",
  "blue-yellow-white",
  "yellow-black-blue",
  "black-yellow-white"
]), Ks = /* @__PURE__ */ new Set(["black-yellow", "blue", "gray"]);
function js(t) {
  if (Us.has(t)) return t;
  if (Ks.has(t))
    return t === "black-yellow" ? "black-yellow-white" : t === "blue" ? "blue-yellow-white" : "yellow-black-blue";
}
function Pe(t) {
  if (!t || typeof t != "object" || Array.isArray(t)) return {};
  const e = t, s = {};
  qs.forEach((a) => {
    typeof e[a] == "boolean" && Object.assign(s, { [a]: e[a] });
  }), typeof e.fontScale == "number" && Number.isFinite(e.fontScale) && (s.fontScale = ve(e.fontScale, 1, 1.8)), typeof e.pageScale == "number" && Number.isFinite(e.pageScale) && (s.pageScale = ve(e.pageScale, 1, 1.3));
  const n = js(e.contrastMode);
  return n && (s.contrastMode = n), typeof e.speechProgress == "number" && Number.isFinite(e.speechProgress) && (s.speechProgress = ve(e.speechProgress, 0, 1)), Ns.has(e.speechRate) && (s.speechRate = e.speechRate), Gs.has(e.subtitleMode) && (s.subtitleMode = e.subtitleMode), typeof e.statusMessage == "string" && (s.statusMessage = e.statusMessage.slice(0, 240)), typeof e.currentText == "string" && (s.currentText = e.currentText.slice(0, 240)), typeof e.readingIndex == "number" && Number.isInteger(e.readingIndex) && (s.readingIndex = Math.max(-1, e.readingIndex)), s;
}
function Zs(t) {
  const e = { ...t };
  return e.enabled || (e.toolbarOpen = !1, e.moreOpen = !1, e.confirming = !1, e.speech = !1, e.speechPaused = !1, e.speechProgress = 0), e.toolbarOpen || (e.moreOpen = !1), e.speech || (e.speechPaused = !1, e.speechProgress = 0), e;
}
function ve(t, e, s) {
  return Number(Math.min(s, Math.max(e, t)).toFixed(2));
}
function Vs(t) {
  try {
    const e = window.localStorage.getItem(t);
    return e ? Pe(JSON.parse(e)) : {};
  } catch {
    return {};
  }
}
function Ws(t, e) {
  try {
    window.localStorage.setItem(t, JSON.stringify(e));
  } catch {
  }
}
function Xs(t) {
  try {
    window.localStorage.removeItem(t);
  } catch {
  }
}
function ye(t) {
  return t ? typeof t == "string" ? document.querySelector(t) : t : null;
}
function Js(t, e = {}) {
  const s = document.createElement(t);
  return Object.entries(e).forEach(([n, a]) => {
    s.setAttribute(n, a);
  }), s;
}
function le(t) {
  var j;
  if (!t || t.closest("[data-aging-assist-root]")) return "";
  const e = t.closest(
    "[data-aging-text], [data-aging-label], button, a, label, input, textarea, select, img, h1, h2, h3, h4, h5, h6, p, li, td, th, summary, [role='button'], [title], [aria-label]"
  ) ?? (t instanceof HTMLElement ? t : t.parentElement);
  if (!e) return "";
  const s = e.closest("[data-aging-readable], [data-aging-text]"), n = s && s !== e && !Be(e) ? s : e, a = n.getAttribute("data-aging-text") || n.getAttribute("data-aging-label"), c = n.getAttribute("aria-label"), b = n.getAttribute("title"), m = n instanceof HTMLImageElement ? n.getAttribute("alt") : "", x = n instanceof HTMLAnchorElement && ((j = n.querySelector("img")) == null ? void 0 : j.getAttribute("alt")) || "", Y = Qs(n), Q = n.textContent || "", U = a || c || b || m || x || Y || Q;
  if (n instanceof HTMLButtonElement)
    return I(`${U}按钮`);
  const K = Ys(n);
  return Be(n) && !(n instanceof HTMLButtonElement) ? I(K.replace(/，$/, "")) : I(`${K}${U}`);
}
function Ys(t) {
  var n;
  const e = [], s = t instanceof HTMLAnchorElement ? t : t.closest("a");
  if (s ? (s.target === "_blank" && e.push("打开窗口"), ei(s) && e.push("外部链接"), t instanceof HTMLImageElement || s.querySelector("img") ? e.push("图片") : e.push("链接")) : t instanceof HTMLImageElement && e.push("图片"), t instanceof HTMLInputElement) {
    const a = Te(t);
    if (["button", "submit", "reset"].includes(t.type))
      return `${a || t.value || (t.type === "reset" ? "重置" : "提交")}按钮，`;
    if (t.type === "radio" || t.type === "checkbox") {
      const b = t.type === "radio" ? "单选按钮" : "复选框";
      return `${a}${b}，当前${t.checked ? "已选中" : "未选中"}，`;
    }
    const c = a ? `${a}：` : "";
    e.push(`${c}${_s(t)}`), t.type === "password" ? e.push(`当前${t.value ? "已填写" : "未填写"}`) : e.push(`当前内容为${t.value || "空"}`);
  } else if (t instanceof HTMLTextAreaElement) {
    const a = Te(t);
    e.push(`${a ? `${a}：` : ""}多行文本输入框`), e.push(`当前内容为${t.value || "空"}`);
  } else if (t instanceof HTMLSelectElement) {
    const a = I(((n = t.selectedOptions[0]) == null ? void 0 : n.textContent) || t.value || "空"), c = Te(t);
    e.push(`${c ? `${c}：` : ""}列表框`), e.push(`当前选中项为${a}`);
  }
  return e.length ? `${e.join("，")}，` : "";
}
function Qs(t) {
  var e;
  return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t.type === "password" ? "" : t.value || t.placeholder : t instanceof HTMLSelectElement ? ((e = t.selectedOptions[0]) == null ? void 0 : e.textContent) || t.value : "";
}
function Te(t) {
  var a;
  const e = t.getAttribute("aria-label") || t.getAttribute("data-aging-label");
  if (e) return I(e);
  const s = ((a = t.labels) == null ? void 0 : a[0]) || t.closest("label");
  if (!s) return "";
  const n = s.cloneNode(!0);
  return n.querySelectorAll("input, textarea, select, button").forEach((c) => c.remove()), I(n.textContent || "").replace(/[：:，,\s]+$/, "");
}
function _s(t) {
  switch (t.type) {
    case "password":
      return "密码输入框";
    case "radio":
      return "单选按钮";
    case "checkbox":
      return "复选框";
    case "file":
      return "文件选择框";
    case "tel":
      return "电话输入框";
    case "email":
      return "邮箱输入框";
    case "number":
      return "数字输入框";
    default:
      return "文本输入框";
  }
}
function ei(t) {
  const e = t.getAttribute("href");
  if (!e || e.startsWith("#") || e.startsWith("/")) return !1;
  if (/^(mailto:|tel:|javascript:)/i.test(e)) return !0;
  try {
    return new URL(t.href, window.location.href).hostname !== window.location.hostname;
  } catch {
    return !1;
  }
}
function I(t) {
  return t.replace(/\s+/g, " ").replace(/[|_~`^*#<>[\]{}\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 240);
}
function ti(t = document.body) {
  const e = [
    "[data-aging-text]",
    "[data-aging-readable]",
    ".qunar-assist-long-text",
    "main p",
    "main li",
    "main h1",
    "main h2",
    "main h3",
    "article p",
    "article li",
    "article h1",
    "article h2",
    "article h3",
    "p",
    "li",
    "h1",
    "h2",
    "h3",
    "button",
    "a",
    "label",
    "summary",
    "[role='button']",
    "[title]",
    "[aria-label]"
  ].join(","), s = /* @__PURE__ */ new Set();
  return Array.from(t.querySelectorAll(e)).filter((n) => {
    if (n.closest("[data-aging-assist-root]") || n.closest("[data-aging-ignore], .qunar-assist-hide") || n.closest("[data-aging-readable]") && !n.matches("[data-aging-readable]"))
      return !1;
    const a = n.getBoundingClientRect(), c = le(n);
    return !c || a.width <= 0 || a.height <= 0 || !si(n, c) || s.has(c) ? !1 : (s.add(c), !0);
  });
}
function Be(t) {
  return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement || t instanceof HTMLButtonElement;
}
function si(t, e) {
  return t.matches("[data-aging-text], [data-aging-readable], .qunar-assist-long-text") ? e.length >= 2 : t.matches("h1, h2, h3, p, li, summary") || t.matches("button, a, [role='button'], [title], [aria-label], label") ? e.length >= 4 : e.length >= 6;
}
class ii {
  constructor() {
    u(this, "utterance", null);
  }
  get supported() {
    return typeof window < "u" && "speechSynthesis" in window;
  }
  speak(e, s, n, a = {}) {
    if (!this.supported || !e) return !1;
    this.stop();
    const c = new SpeechSynthesisUtterance(e);
    c.lang = n, c.rate = s, c.pitch = 1, c.volume = 1;
    const b = window.speechSynthesis.getVoices().find((m) => m.lang.toLowerCase().startsWith(n.slice(0, 2).toLowerCase()));
    return b && (c.voice = b), c.onstart = () => {
      var m;
      return (m = a.onStart) == null ? void 0 : m.call(a);
    }, c.onboundary = (m) => {
      var x;
      (x = a.onBoundary) == null || x.call(a, ni(m.charIndex, e.length));
    }, c.onend = () => {
      var m, x;
      this.utterance === c && ((m = a.onBoundary) == null || m.call(a, 1), (x = a.onEnd) == null || x.call(a), this.utterance = null);
    }, c.onerror = () => {
      var m;
      this.utterance === c && ((m = a.onError) == null || m.call(a), this.utterance = null);
    }, this.utterance = c, window.speechSynthesis.speak(c), !0;
  }
  pause() {
    this.supported && window.speechSynthesis.pause();
  }
  resume() {
    this.supported && window.speechSynthesis.resume();
  }
  stop() {
    this.clearUtteranceHandlers(), this.supported && window.speechSynthesis.cancel(), this.utterance = null;
  }
  clearUtteranceHandlers() {
    this.utterance && (this.utterance.onstart = null, this.utterance.onboundary = null, this.utterance.onend = null, this.utterance.onerror = null);
  }
}
function ni(t, e) {
  return e ? Math.min(1, Math.max(0, t / e)) : 0;
}
let C = null;
class we {
  constructor(e = {}) {
    u(this, "state");
    u(this, "options");
    u(this, "app", null);
    u(this, "host", null);
    u(this, "labels");
    u(this, "listeners", /* @__PURE__ */ new Set());
    u(this, "speech", new ii());
    u(this, "currentReadTarget", null);
    u(this, "pendingDanger", null);
    u(this, "pendingDangerAction", null);
    u(this, "lastSpokenText", "");
    u(this, "destroyed", !1);
    u(this, "originalBodyPaddingBottom", null);
    u(this, "speechProgressTimer", 0);
    u(this, "speechProgressStartedAt", 0);
    u(this, "speechProgressElapsed", 0);
    u(this, "speechProgressDuration", 0);
    u(this, "hoverTimer", 0);
    u(this, "hoverTarget", null);
    u(this, "crosshairFrame", 0);
    u(this, "crosshairPoint", null);
    u(this, "toolbarHeight", 0);
    u(this, "originalBodyPaddingTop", null);
    u(this, "toolbarReturnFocus", null);
    u(this, "pendingMount", !1);
    u(this, "fontScaleElements", /* @__PURE__ */ new Map());
    u(this, "fontScaleObserver", null);
    u(this, "fontScaleFrame", 0);
    u(this, "fontScalePendingRoots", /* @__PURE__ */ new Set());
    u(this, "onDocumentReady", () => {
      this.pendingMount = !1, this.mount();
    });
    u(this, "onTriggerClick", (e) => {
      e.preventDefault(), this.open();
    });
    u(this, "onMouseMove", (e) => {
      this.queueCrosshairUpdate(e);
    });
    u(this, "onMouseOver", (e) => {
      this.queueHover(e.target);
    });
    u(this, "onFocusIn", (e) => {
      this.handleDirectTarget(e.target);
    });
    u(this, "onPointerUp", (e) => {
      (e.pointerType === "touch" || e.pointerType === "pen") && this.handleDirectTarget(e.target);
    });
    u(this, "onDangerClick", (e) => {
      if (!this.state.enabled || !this.state.mistakeGuard) return;
      const s = this.findDangerElement(e.target);
      !s || s.dataset.agingAssistConfirmed === "true" || (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.requestDangerConfirmation(s, () => {
        s.dispatchEvent(
          new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            view: window
          })
        );
      }));
    });
    u(this, "onDangerSubmit", (e) => {
      if (!this.state.enabled || !this.state.mistakeGuard) return;
      const s = e.target instanceof HTMLFormElement ? e.target : null, n = e.submitter instanceof HTMLElement ? e.submitter : null, a = this.findDangerElement(n) ?? (s != null && s.matches(this.options.dangerousSelector) ? s : null);
      !a || a.dataset.agingAssistConfirmed === "true" || (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.requestDangerConfirmation(a, () => {
        s && (typeof s.requestSubmit == "function" ? s.requestSubmit(n instanceof HTMLElement ? n : void 0) : s.submit());
      }));
    });
    this.options = {
      namespace: e.namespace ?? Hs,
      storageKey: e.storageKey ?? Bs,
      persist: e.persist ?? !0,
      locale: e.locale ?? "zh-CN",
      theme: e.theme ?? "warm",
      position: e.position ?? "top",
      autoMount: e.autoMount ?? !0,
      showLauncher: e.showLauncher ?? !0,
      dangerousSelector: e.dangerousSelector ?? "[data-aging-danger], .danger, .delete, .dangerous, [type='submit'][data-danger='true']",
      ignoredSelector: e.ignoredSelector ?? "[data-aging-ignore], [data-aging-assist-root], .qunar-assist-hide",
      ...e
    };
    const s = this.options.persist ? Vs(this.options.storageKey) : {}, { bigTextDock: n, ...a } = s, {
      bigTextDock: c,
      ...b
    } = e.initialState ?? {};
    this.state = ht({
      ...Se,
      ...a,
      ...Pe(b),
      currentText: "",
      confirming: !1,
      toolbarOpen: !1,
      moreOpen: !1,
      speech: !1,
      speechPaused: !1,
      speechProgress: 0,
      statusMessage: "",
      readingIndex: -1
    }), this.state.highContrast && this.state.contrastMode === "standard" && (this.state.contrastMode = "white-black-blue"), this.labels = {
      ...this.options.locale === "en-US" ? zs : Is,
      ...e.labels
    }, this.options.autoMount && this.mount();
  }
  mount() {
    if (this.app || this.destroyed) return;
    if (C && C !== this && !C.destroyed)
      throw new Error(
        "Aging Assist already has an active instance. Destroy it before mounting another instance."
      );
    const e = ye(this.options.container) ?? document.body;
    if (!e) {
      C = this, this.pendingMount || (this.pendingMount = !0, document.addEventListener("DOMContentLoaded", this.onDocumentReady, { once: !0 }));
      return;
    }
    C = this, this.host = Js("div", {
      id: `${this.options.namespace}-root`,
      "data-aging-assist-root": "true"
    }), e.appendChild(this.host), this.app = dt($s, {
      state: this.state,
      labels: this.labels,
      position: this.options.position,
      theme: this.options.theme,
      idPrefix: this.options.namespace,
      showLauncher: this.options.showLauncher,
      onAction: (s, n) => this.handleAction(s, n)
    }), this.app.mount(this.host), this.bindTrigger(), this.bindDocumentEvents(), this.startFontScaleObserver(), this.applyEffects(), this.emit("init");
  }
  open() {
    this.captureToolbarReturnFocus(), this.setState({ enabled: !0, toolbarOpen: !0 }), this.focusToolbar(), this.emit("open");
  }
  close() {
    this.setState({ toolbarOpen: !1, moreOpen: !1 }), this.restoreToolbarFocus(), this.emit("close");
  }
  enable() {
    this.captureToolbarReturnFocus(), this.setState({ enabled: !0, toolbarOpen: !0 }), this.focusToolbar(), this.emit("enable");
  }
  disable() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.stopFontScaleObserver(), this.clearReadTarget(), this.setState({
      ...Se,
      toolbarOpen: !1,
      enabled: !1,
      focusEnhance: !0,
      formEnhance: !0
    }), this.options.persist && Xs(this.options.storageKey), this.applyEffects(), this.restoreToolbarFocus(), this.emit("disable");
  }
  reset() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.clearReadTarget(), this.setState({
      ...Se,
      enabled: !0,
      toolbarOpen: !0,
      focusEnhance: !0,
      formEnhance: !0
    }), this.emit("reset");
  }
  destroy() {
    var e, s;
    this.destroyed = !0, document.removeEventListener("DOMContentLoaded", this.onDocumentReady), this.pendingMount = !1, this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.crosshairFrame && window.cancelAnimationFrame(this.crosshairFrame), this.crosshairFrame = 0, this.crosshairPoint = null, this.clearReadTarget(), this.unbindTrigger(), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("focusin", this.onFocusIn), document.removeEventListener("pointerup", this.onPointerUp), document.removeEventListener("click", this.onDangerClick, !0), document.removeEventListener("submit", this.onDangerSubmit, !0), (e = this.app) == null || e.unmount(), (s = this.host) == null || s.remove(), this.app = null, this.host = null, this.removeRootEffects(), C === this && (C = null);
  }
  speak(e) {
    const s = I(e);
    s && (this.setState({
      speech: !0,
      speechPaused: !1,
      speechProgress: 0,
      statusMessage: "",
      currentText: s
    }), this.speakText(s), this.emit("speak", s));
  }
  pauseSpeech() {
    this.speech.pause(), this.pauseSpeechProgressClock(), this.setState({ speechPaused: !0 }), this.emit("pause");
  }
  resumeSpeech() {
    this.speech.resume(), this.setState({ speechPaused: !1 }), this.resumeSpeechProgressClock(), this.emit("resume");
  }
  getState() {
    return { ...this.state };
  }
  setState(e) {
    const s = Pe(e);
    if (!Object.keys(s).length) return;
    s.contrastMode ? s.highContrast = s.contrastMode !== "standard" : typeof s.highContrast == "boolean" && (s.contrastMode = s.highContrast ? "white-black-blue" : "standard");
    const n = this.getState(), a = Zs({ ...this.state, ...s });
    Object.assign(this.state, a), this.reconcileStateEffects(n, a), this.applyEffects(), this.persist(), this.notify(), this.emit("change", s);
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  subscribeKey(e, s) {
    let n = this.state[e];
    return s(n, this.getState()), this.subscribe((a) => {
      const c = a[e];
      Object.is(n, c) || (n = c, s(c, a));
    });
  }
  handleAction(e, s) {
    switch (e) {
      case "open":
        this.open();
        break;
      case "close":
        this.close();
        break;
      case "disable":
        this.disable();
        break;
      case "reset":
        this.reset();
        break;
      case "fontUp":
        this.setState({ fontScale: G(this.state.fontScale + 0.1, 1, 1.8) });
        break;
      case "fontDown":
        this.setState({ fontScale: G(this.state.fontScale - 0.1, 1, 1.8) });
        break;
      case "zoomIn":
        this.setState({ pageScale: G(this.state.pageScale + 0.05, 1, 1.3) });
        break;
      case "zoomOut":
        this.setState({ pageScale: G(this.state.pageScale - 0.05, 1, 1.3) });
        break;
      case "toggle":
        Ie(s) && this.toggle(s);
        break;
      case "setBoolean": {
        const n = s;
        Ie(n == null ? void 0 : n.key) && typeof n.value == "boolean" && this.setBoolean(n.key, n.value);
        break;
      }
      case "toggleMore":
        this.setState({ moreOpen: !this.state.moreOpen });
        break;
      case "rate":
        this.setState({ speechRate: s }), this.state.currentText && this.state.speech && this.speak(this.state.currentText);
        break;
      case "subtitleMode":
        this.setState({ subtitleMode: s });
        break;
      case "toolbarResize":
        typeof s == "number" && Number.isFinite(s) && (this.toolbarHeight = Math.max(0, s), this.applyEffects());
        break;
      case "readPrevious":
        this.readOffset(-1);
        break;
      case "readNext":
        this.readOffset(1);
        break;
      case "pauseSpeech":
        this.pauseSpeech();
        break;
      case "resumeSpeech":
        this.resumeSpeech();
        break;
      case "cancelDanger":
        this.cancelDanger();
        break;
      case "confirmDanger":
        this.confirmDanger();
        break;
    }
  }
  toggle(e) {
    const s = this.state[e];
    if (typeof s != "boolean") return;
    if (e === "highContrast") {
      const a = ai(this.state.contrastMode);
      this.setState({
        contrastMode: a,
        highContrast: a !== "standard"
      });
      return;
    }
    if (e === "speech") {
      s ? (this.speech.stop(), this.stopSpeechProgressClock(), this.setState({ speech: !1, speechPaused: !1, speechProgress: 0, statusMessage: "" })) : (this.setState({ speech: !0, speechPaused: !1, speechProgress: 0, statusMessage: "" }), this.state.currentText && (this.lastSpokenText = this.state.currentText, this.speakText(this.state.currentText)));
      return;
    }
    const n = { [e]: !s };
    e === "readingGuide" && s && this.clearReadTarget(), this.setState(n);
  }
  setBoolean(e, s) {
    this.setState({ [e]: s });
  }
  readOffset(e) {
    const s = ti();
    if (!s.length) return;
    const n = G(this.state.readingIndex + e, 0, s.length - 1), a = s[n], c = le(a);
    this.highlightTarget(a), this.lastSpokenText = c, this.setState({
      readingIndex: n,
      currentText: c,
      speech: !0,
      speechPaused: !1,
      speechProgress: 0,
      statusMessage: ""
    }), this.speakText(c);
  }
  bindTrigger() {
    const e = ye(this.options.trigger);
    e == null || e.addEventListener("click", this.onTriggerClick);
  }
  unbindTrigger() {
    const e = ye(this.options.trigger);
    e == null || e.removeEventListener("click", this.onTriggerClick);
  }
  bindDocumentEvents() {
    document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseover", this.onMouseOver), document.addEventListener("focusin", this.onFocusIn), document.addEventListener("pointerup", this.onPointerUp), document.addEventListener("click", this.onDangerClick, !0), document.addEventListener("submit", this.onDangerSubmit, !0);
  }
  findDangerElement(e) {
    const s = e instanceof HTMLElement ? e : e instanceof Node ? e.parentElement : null;
    return (s == null ? void 0 : s.closest(this.options.dangerousSelector)) ?? null;
  }
  queueCrosshairUpdate(e) {
    !this.state.enabled || !this.state.crosshair || (this.crosshairPoint = { x: e.clientX, y: e.clientY }, !this.crosshairFrame && (this.crosshairFrame = window.requestAnimationFrame(() => {
      this.crosshairFrame = 0, this.crosshairPoint && this.updateCrosshair(this.crosshairPoint.x, this.crosshairPoint.y);
    })));
  }
  updateCrosshair(e, s) {
    const n = this.host, a = n == null ? void 0 : n.querySelector(".aging-assist-crosshair-x"), c = n == null ? void 0 : n.querySelector(".aging-assist-crosshair-y");
    a && (a.style.top = `${s}px`), c && (c.style.left = `${e}px`);
  }
  queueHover(e) {
    if (e === this.hoverTarget && this.hoverTimer || (this.clearHoverTimer(), !this.state.enabled || e != null && e.closest(this.options.ignoredSelector)) || !this.state.readingGuide && !this.state.bigText && !this.state.speech)
      return;
    const s = le(e);
    s && ((this.state.readingGuide || this.state.bigText) && this.applyHoverTarget(e, s, !1), !(!this.state.speech || s === this.lastSpokenText) && (this.hoverTarget = e, this.hoverTimer = window.setTimeout(() => {
      this.hoverTimer = 0, this.hoverTarget = null, this.applyHoverTarget(e, s, !0);
    }, 220)));
  }
  handleDirectTarget(e) {
    if (this.clearHoverTimer(), !this.state.enabled || !e || e.closest(this.options.ignoredSelector) || !this.state.readingGuide && !this.state.bigText && !this.state.speech) return;
    const s = le(e);
    s && this.applyHoverTarget(e, s, this.state.speech && s !== this.lastSpokenText);
  }
  clearHoverTimer() {
    this.hoverTimer && window.clearTimeout(this.hoverTimer), this.hoverTimer = 0, this.hoverTarget = null;
  }
  applyHoverTarget(e, s, n) {
    const a = {};
    (this.state.currentText !== s || n) && (a.currentText = s), n && (a.speechPaused = !1, a.speechProgress = 0, a.statusMessage = ""), Object.keys(a).length && this.setState(a), this.state.readingGuide && e instanceof HTMLElement && e !== this.currentReadTarget && this.highlightTarget(e), n && (this.lastSpokenText = s, this.speakText(s));
  }
  speakText(e) {
    if (this.stopSpeechProgressClock(), !this.speech.speak(e, this.state.speechRate, this.options.locale, {
      onBoundary: (n) => this.updateSpeechProgress(n),
      onEnd: () => {
        this.updateSpeechProgress(1), this.stopSpeechProgressClock();
      },
      onError: () => {
        this.stopSpeechProgressClock(), this.setState({
          speech: !1,
          speechPaused: !1,
          speechProgress: 0,
          statusMessage: this.labels.speechFailed
        });
      }
    })) {
      this.setState({
        speech: !1,
        speechPaused: !1,
        speechProgress: 0,
        statusMessage: this.labels.speechUnsupported
      });
      return;
    }
    this.startSpeechProgressClock(e);
  }
  updateSpeechProgress(e) {
    const s = Math.max(this.state.speechProgress, G(e, 0, 1));
    Math.abs(this.state.speechProgress - s) < 0.01 && s !== 0 && s !== 1 || (this.state.speechProgress = s, this.notify());
  }
  startSpeechProgressClock(e) {
    this.stopSpeechProgressClock(), this.speechProgressElapsed = 0, this.speechProgressDuration = oi(e, this.state.speechRate), this.speechProgressStartedAt = window.performance.now(), this.queueSpeechProgressTick();
  }
  pauseSpeechProgressClock() {
    this.speechProgressTimer && window.clearTimeout(this.speechProgressTimer), this.speechProgressTimer = 0, this.speechProgressStartedAt && (this.speechProgressElapsed += window.performance.now() - this.speechProgressStartedAt, this.speechProgressStartedAt = 0);
  }
  resumeSpeechProgressClock() {
    !this.state.speech || this.state.speechPaused || !this.speechProgressDuration || (this.speechProgressStartedAt = window.performance.now(), this.queueSpeechProgressTick());
  }
  stopSpeechProgressClock() {
    this.speechProgressTimer && window.clearTimeout(this.speechProgressTimer), this.speechProgressTimer = 0, this.speechProgressStartedAt = 0, this.speechProgressElapsed = 0, this.speechProgressDuration = 0;
  }
  queueSpeechProgressTick() {
    this.speechProgressTimer && window.clearTimeout(this.speechProgressTimer), this.speechProgressTimer = window.setTimeout(() => {
      if (this.speechProgressTimer = 0, !this.state.speech || this.state.speechPaused || !this.speechProgressDuration) return;
      const e = this.speechProgressElapsed + (this.speechProgressStartedAt ? window.performance.now() - this.speechProgressStartedAt : 0);
      this.updateSpeechProgress(Math.min(0.98, e / this.speechProgressDuration)), this.queueSpeechProgressTick();
    }, 120);
  }
  highlightTarget(e) {
    this.clearReadTarget(), this.currentReadTarget = e, e.classList.add("aging-assist-read-target");
  }
  clearReadTarget() {
    var e;
    (e = this.currentReadTarget) == null || e.classList.remove("aging-assist-read-target"), this.currentReadTarget = null;
  }
  cancelDanger() {
    var e;
    (e = this.pendingDanger) == null || e.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null, this.setState({ confirming: !1 });
  }
  confirmDanger() {
    const e = this.pendingDanger, s = this.pendingDangerAction;
    if (!e || !s) {
      this.cancelDanger();
      return;
    }
    e.dataset.agingAssistConfirmed = "true", e.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null, this.setState({ confirming: !1 }), s(), this.emit("confirm", e), window.setTimeout(() => {
      e && delete e.dataset.agingAssistConfirmed;
    }, 0);
  }
  requestDangerConfirmation(e, s) {
    var n;
    (n = this.pendingDanger) == null || n.classList.remove("aging-assist-danger-focus"), this.pendingDanger = e, this.pendingDangerAction = s, this.setState({ confirming: !0 }), e.classList.add("aging-assist-danger-focus");
  }
  applyEffects() {
    const e = document.documentElement, s = this.state.enabled && this.state.toolbarOpen && this.options.position === "top", n = this.state.enabled && (this.state.bigText || this.state.toolbarOpen && this.options.position === "bottom");
    s && this.originalBodyPaddingTop === null && document.body && (this.originalBodyPaddingTop = window.getComputedStyle(document.body).paddingTop || "0px"), n && this.originalBodyPaddingBottom === null && document.body && (this.originalBodyPaddingBottom = window.getComputedStyle(document.body).paddingBottom || "0px"), e.dataset.agingEnabled = String(this.state.enabled), e.dataset.agingContrast = String(this.state.highContrast), e.dataset.agingContrastTheme = this.state.contrastMode, e.dataset.agingSimplified = String(this.state.simplified), e.dataset.agingLargeCursor = String(this.state.largeCursor), e.dataset.agingFocus = String(this.state.focusEnhance), e.dataset.agingClick = String(this.state.clickEnhance), e.dataset.agingForm = String(this.state.formEnhance), e.dataset.agingMistakeGuard = String(this.state.mistakeGuard), e.dataset.agingBigText = String(this.state.bigText), e.dataset.agingToolbarOpen = String(this.state.toolbarOpen), e.dataset.agingToolbarPosition = this.options.position, e.dataset.agingFontScale = String(this.state.fontScale), e.style.setProperty("--aging-assist-font-scale", String(this.state.fontScale)), e.style.setProperty("--aging-assist-page-scale", String(this.state.pageScale)), e.style.setProperty(
      "--aging-assist-toolbar-reserve",
      `${this.toolbarHeight / this.state.pageScale}px`
    ), e.style.setProperty(
      "--aging-assist-body-padding-top",
      this.originalBodyPaddingTop ?? "0px"
    ), e.style.setProperty(
      "--aging-assist-body-padding-bottom",
      this.originalBodyPaddingBottom ?? "0px"
    ), !s && this.originalBodyPaddingTop !== null && (this.originalBodyPaddingTop = null, e.style.setProperty("--aging-assist-body-padding-top", "0px")), !n && this.originalBodyPaddingBottom !== null && (this.originalBodyPaddingBottom = null, e.style.setProperty("--aging-assist-body-padding-bottom", "0px")), this.host && (this.host.style.zoom = String(1 / this.state.pageScale)), this.syncFontScale();
  }
  startFontScaleObserver() {
    var e;
    typeof MutationObserver > "u" || !document.body || ((e = this.fontScaleObserver) == null || e.disconnect(), this.fontScaleObserver = new MutationObserver((s) => {
      if (!this.state.enabled || this.state.fontScale <= 1) {
        this.fontScalePendingRoots.clear();
        return;
      }
      s.forEach((n) => {
        n.addedNodes.forEach((a) => {
          a instanceof HTMLElement && this.fontScalePendingRoots.add(a);
        });
      }), !(this.fontScaleFrame || !this.fontScalePendingRoots.size) && (this.fontScaleFrame = window.requestAnimationFrame(() => {
        this.fontScaleFrame = 0;
        const n = Array.from(this.fontScalePendingRoots);
        this.fontScalePendingRoots.clear(), this.syncFontScale(n);
      }));
    }), this.fontScaleObserver.observe(document.body, { childList: !0, subtree: !0 }));
  }
  stopFontScaleObserver() {
    var e;
    (e = this.fontScaleObserver) == null || e.disconnect(), this.fontScaleObserver = null, this.fontScaleFrame && window.cancelAnimationFrame(this.fontScaleFrame), this.fontScaleFrame = 0, this.fontScalePendingRoots.clear(), this.restoreFontScale();
  }
  syncFontScale(e) {
    if (!this.state.enabled || this.state.fontScale <= 1) {
      this.restoreFontScale();
      return;
    }
    (e ? e.flatMap((n) => [n, ...Array.from(n.querySelectorAll("*"))]) : Array.from(document.body.querySelectorAll("*"))).forEach((n) => {
      if (!this.shouldScaleFontElement(n) || this.fontScaleElements.has(n)) return;
      const a = Number.parseFloat(window.getComputedStyle(n).fontSize), c = n.parentElement, b = c ? Number.parseFloat(window.getComputedStyle(c).fontSize) : Number.NaN;
      Number.isFinite(b) && Math.abs(a - b) < 0.01 || !Number.isFinite(a) || a <= 0 || this.fontScaleElements.set(n, {
        value: n.style.getPropertyValue("font-size"),
        priority: n.style.getPropertyPriority("font-size"),
        baseSize: a
      });
    }), this.fontScaleElements.forEach((n, a) => {
      if (!a.isConnected) {
        this.fontScaleElements.delete(a);
        return;
      }
      a.style.setProperty(
        "font-size",
        `${(n.baseSize * this.state.fontScale).toFixed(2)}px`,
        "important"
      );
    });
  }
  restoreFontScale() {
    this.fontScaleElements.forEach((e, s) => {
      e.value ? s.style.setProperty("font-size", e.value, e.priority) : s.style.removeProperty("font-size");
    }), this.fontScaleElements.clear();
  }
  shouldScaleFontElement(e) {
    return !e.isConnected || e.closest("[data-aging-assist-root]") || e.matches("script, style, noscript, svg, path, img, video, canvas") ? !1 : e.matches("input, textarea, select, option, button") ? !0 : Array.from(e.childNodes).some(
      (s) => {
        var n;
        return s.nodeType === Node.TEXT_NODE && !!((n = s.textContent) != null && n.trim());
      }
    );
  }
  removeRootEffects() {
    const e = document.documentElement;
    [
      "agingEnabled",
      "agingContrast",
      "agingContrastTheme",
      "agingSimplified",
      "agingLargeCursor",
      "agingFocus",
      "agingClick",
      "agingForm",
      "agingMistakeGuard",
      "agingBigText",
      "agingToolbarOpen",
      "agingToolbarPosition",
      "agingFontScale"
    ].forEach((s) => {
      delete e.dataset[s];
    }), e.style.removeProperty("--aging-assist-font-scale"), e.style.removeProperty("--aging-assist-page-scale"), e.style.removeProperty("--aging-assist-toolbar-reserve"), e.style.removeProperty("--aging-assist-body-padding-top"), e.style.removeProperty("--aging-assist-body-padding-bottom"), this.originalBodyPaddingTop = null, this.originalBodyPaddingBottom = null, this.host && (this.host.style.zoom = "");
  }
  persist() {
    if (!this.options.persist) return;
    const e = {
      enabled: this.state.enabled,
      fontScale: this.state.fontScale,
      pageScale: this.state.pageScale,
      highContrast: this.state.highContrast,
      contrastMode: this.state.contrastMode,
      simplified: this.state.simplified,
      largeCursor: this.state.largeCursor,
      crosshair: this.state.crosshair,
      readingGuide: this.state.readingGuide,
      bigText: this.state.bigText,
      speechRate: this.state.speechRate,
      subtitleMode: this.state.subtitleMode,
      focusEnhance: this.state.focusEnhance,
      clickEnhance: this.state.clickEnhance,
      formEnhance: this.state.formEnhance,
      mistakeGuard: this.state.mistakeGuard
    };
    Ws(this.options.storageKey, e);
  }
  notify() {
    var s, n;
    const e = this.getState();
    (n = (s = this.options).onChange) == null || n.call(s, e), this.listeners.forEach((a) => a(e));
  }
  emit(e, s) {
    var n, a;
    (a = (n = this.options).onEvent) == null || a.call(n, {
      type: e,
      state: this.getState(),
      detail: s
    });
  }
  captureToolbarReturnFocus() {
    if (this.state.toolbarOpen) return;
    const e = document.activeElement;
    this.toolbarReturnFocus = e instanceof HTMLElement ? e : null;
  }
  focusToolbar() {
    window.setTimeout(() => {
      var e, s;
      (s = (e = this.host) == null ? void 0 : e.querySelector(".aging-assist-control")) == null || s.focus();
    });
  }
  restoreToolbarFocus() {
    window.setTimeout(() => {
      var e, s, n;
      (e = this.toolbarReturnFocus) != null && e.isConnected ? this.toolbarReturnFocus.focus() : (n = (s = this.host) == null ? void 0 : s.querySelector(".aging-assist-launcher")) == null || n.focus(), this.toolbarReturnFocus = null;
    });
  }
  reconcileStateEffects(e, s) {
    (e.speech && !s.speech || !s.enabled) && (this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer()), e.readingGuide && !s.readingGuide && this.clearReadTarget(), e.confirming && !s.confirming && this.pendingDanger && (this.pendingDanger.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null);
  }
  static getActiveInstance() {
    return C && !C.destroyed ? C : null;
  }
}
function G(t, e, s) {
  return Number(Math.min(s, Math.max(e, t)).toFixed(2));
}
function ai(t) {
  const e = [
    "standard",
    "white-black-blue",
    "blue-yellow-white",
    "yellow-black-blue",
    "black-yellow-white"
  ];
  return e[(e.indexOf(t) + 1) % e.length] ?? "standard";
}
function oi(t, e) {
  const s = Math.max(t.replace(/\s+/g, "").length, 8);
  return Math.max(2600, s * 210 / e);
}
function Ie(t) {
  return [
    "highContrast",
    "simplified",
    "largeCursor",
    "crosshair",
    "readingGuide",
    "bigText",
    "speech",
    "focusEnhance",
    "clickEnhance",
    "formEnhance",
    "mistakeGuard"
  ].includes(t);
}
const ri = "0.1.1";
function ce(t = {}) {
  return we.getActiveInstance() ?? new we(t);
}
const hi = ce, di = ce;
typeof window < "u" && (window.AgingAssist = {
  create: ce,
  init: ce,
  AgingAssist: we,
  version: ri
});
export {
  we as AgingAssist,
  ri as VERSION,
  hi as create,
  ce as createAgingAssist,
  di as init
};
