var _e = Object.defineProperty;
var et = (s, e, t) => e in s ? _e(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var u = (s, e, t) => et(s, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as tt, computed as x, ref as v, watch as A, nextTick as E, onMounted as st, onBeforeUnmount as it, openBlock as b, createElementBlock as S, createVNode as d, unref as p, createElementVNode as o, toDisplayString as h, createCommentVNode as D, normalizeClass as y, Fragment as de, renderList as pe, createTextVNode as se, normalizeStyle as nt, reactive as at, createApp as ot } from "vue";
import { BadgeCheck as rt, Sparkles as lt, ListRestart as ct, Volume2 as ut, Pause as ht, Play as gt, AudioLines as dt, Rows3 as pt, Baseline as ft, Type as mt, Minimize2 as bt, Maximize2 as St, Contrast as vt, MousePointer2 as yt, Crosshair as Tt, ScanEye as Pt, ALargeSmall as xt, Eye as wt, Zap as Et, CircleOff as kt, X as Le, Focus as Ct, MousePointerClick as Mt, Hand as Rt, ShieldAlert as At } from "lucide-vue-next";
let ie = null, fe = null;
function Be() {
  return fe ? Promise.resolve(fe) : ie || (ie = import("./subtitle-runtime-CtSRJvvb.js").then((s) => ({
    convert: s.convertSubtitleRuntime,
    pinyinParts: s.convertPinyinPartsRuntime
  })), ie.then((s) => (fe = s, s)));
}
async function Dt(s, e) {
  return (await Be()).convert(s, e);
}
async function Ft(s) {
  return (await Be()).pinyinParts(s);
}
const Lt = ["data-theme"], Ot = ["aria-label"], Bt = ["aria-label"], Ht = { class: "aging-assist-shell" }, zt = { class: "aging-assist-brand" }, $t = {
  class: "aging-assist-mark",
  "aria-hidden": "true"
}, It = { class: "aging-assist-title" }, Nt = { class: "aging-assist-groups" }, qt = { class: "aging-assist-group" }, Gt = ["aria-pressed"], Ut = { class: "aging-assist-group" }, Kt = { class: "aging-assist-group" }, Zt = ["aria-pressed"], jt = ["aria-pressed"], Vt = ["aria-pressed"], Xt = ["aria-pressed"], Jt = ["aria-pressed"], Wt = { class: "aging-assist-group" }, Yt = ["aria-pressed"], Qt = ["aria-expanded", "aria-controls"], _t = { class: "aging-assist-status" }, es = { class: "aging-assist-rate" }, ts = ["for"], ss = ["id", "value"], is = ["value"], ns = {
  key: 0,
  class: "aging-assist-message",
  role: "status"
}, as = ["aria-label"], os = ["id", "aria-labelledby"], rs = ["id"], ls = { class: "aging-assist-switches" }, cs = { class: "aging-assist-switch" }, us = ["checked"], hs = { class: "aging-assist-switch" }, gs = ["checked"], ds = { class: "aging-assist-switch" }, ps = ["checked"], fs = { class: "aging-assist-switch" }, ms = ["checked"], bs = { class: "aging-assist-bigtext-window" }, Ss = {
  key: 0,
  class: "aging-assist-subtitle-pinyin"
}, vs = { class: "aging-assist-subtitle-char" }, ys = { class: "aging-assist-bigtext-actions" }, Ts = ["aria-label"], Ps = ["aria-pressed", "onClick"], xs = ["aria-label", "title"], ws = ["aria-labelledby", "aria-describedby"], Es = { class: "aging-assist-confirm-box" }, ks = ["id"], Cs = ["id"], Ms = { class: "aging-assist-confirm-actions" }, Rs = 8, As = /* @__PURE__ */ tt({
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
  setup(s, { emit: e }) {
    const t = s, n = e, l = x(() => [
      { label: t.labels.slowRate, value: 0.75 },
      { label: t.labels.standardRate, value: 1 },
      { label: t.labels.fasterRate, value: 1.25 },
      { label: t.labels.fastRate, value: 1.5 }
    ]), c = v(null), T = v(null), m = v(null), w = v(null), V = x(() => `${t.idPrefix}-confirm-title`), q = x(() => `${t.idPrefix}-confirm-description`), Te = x(() => `${t.idPrefix}-settings-title`), Pe = x(() => `${t.idPrefix}-settings`), xe = x(() => `${t.idPrefix}-rate`), oe = v(0), re = v(0), F = v(0), X = v(0), G = v(0), O = v(0), U = v(""), z = v(0), B = v(0), C = x(
      () => t.state.currentText || t.labels.bigTextHint
    ), le = x(
      () => t.state.bigText && t.state.speech && !t.state.speechPaused
    ), J = v(C.value), W = v([]), Y = x(() => t.state.subtitleMode === "pinyin"), ze = x(() => Y.value ? C.value : J.value), $e = x(() => Array.from(ze.value)), Ie = x(() => Y.value ? W.value.flatMap((a) => {
      const i = Array.from(a.origin);
      return i.map((r) => i.length === 1 ? a.pinyin : "");
    }) : []), Ne = x(() => [
      { label: t.labels.simplifiedSubtitle, value: "simplified" },
      { label: t.labels.traditionalSubtitle, value: "traditional" },
      { label: t.labels.pinyinSubtitle, value: "pinyin" }
    ]);
    function g(a, i) {
      n("action", a, i);
    }
    let ce = 0;
    async function we(a = !1) {
      const i = ++ce;
      if (t.state.subtitleMode === "simplified" && !a) {
        J.value = C.value, W.value = [];
        return;
      }
      if (t.state.subtitleMode === "pinyin") {
        const f = await Ft(C.value);
        if (i !== ce) return;
        W.value = f, J.value = C.value;
        return;
      }
      const r = await Dt(C.value, t.state.subtitleMode);
      i === ce && (W.value = [], J.value = r);
    }
    function Q(a, i) {
      g("setBoolean", {
        key: a,
        value: i.target.checked
      });
    }
    function _() {
      F.value && (window.cancelAnimationFrame(F.value), F.value = 0);
    }
    function K() {
      G.value && window.clearTimeout(G.value), G.value = 0, U.value = "", z.value = 0, B.value = 0;
    }
    function ee(a) {
      return Math.min(1, Math.max(0, a));
    }
    function Z(a) {
      const i = a.scrollHeight - a.clientHeight;
      oe.value = i > 0 ? Math.min(100, a.scrollTop / i * 100) : 0;
    }
    function qe(a) {
      const i = Array.from(a.querySelectorAll(".aging-assist-subtitle-char")), r = [];
      if (i.length <= 1)
        return { charsLength: i.length, lines: r };
      const f = (R) => {
        var H;
        return ((H = R.closest(".aging-assist-subtitle-token")) == null ? void 0 : H.offsetTop) ?? R.offsetTop;
      }, M = f(i[0]);
      let I = 0, L = M;
      return i.forEach((R, H) => {
        const j = f(R);
        j <= L + 2 || (r.push({ start: I, end: H, top: L }), I = H, L = j);
      }), r.push({ start: I, end: i.length, top: L }), { charsLength: i.length, lines: r };
    }
    function Ge(a) {
      const i = ee(a);
      return i * i * (3 - 2 * i);
    }
    function ue() {
      var a;
      return ((a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches) ?? !1;
    }
    function Ue() {
      return t.state.speech ? t.state.speechProgress : X.value;
    }
    function Ke(a, i) {
      if (!t.state.bigText) return 0;
      const { charsLength: r, lines: f } = qe(a);
      if (r <= 1 || f.length <= 1) return 0;
      const M = ee(Ue());
      if (M >= 1) return i;
      const I = M * r, L = f.findIndex((Qe) => I < Qe.end);
      if (L <= 0) return 0;
      const R = f[L], H = f[L - 1], j = f[0].top, Je = Math.max(1, R.end - R.start), We = Ge((I - R.start) / Je), Fe = Math.max(0, H.top - j), Ye = Math.max(0, R.top - j);
      return Math.min(i, Fe + (Ye - Fe) * We);
    }
    function Ee() {
      const a = c.value;
      if (!a) {
        F.value = 0;
        return;
      }
      const i = re.value - a.scrollTop;
      if (Math.abs(i) < 0.5) {
        a.scrollTop = re.value, Z(a), F.value = 0;
        return;
      }
      a.scrollTop += i * 0.22, Z(a), F.value = window.requestAnimationFrame(Ee);
    }
    function ke(a, i, r = !1) {
      if (re.value = i, r || ue()) {
        _(), a.scrollTop = i, Z(a);
        return;
      }
      F.value || (F.value = window.requestAnimationFrame(Ee));
    }
    function $(a = !1) {
      const i = c.value;
      if (!i) return;
      const r = i.scrollHeight - i.clientHeight;
      if (r <= 0) {
        oe.value = 0;
        return;
      }
      ke(i, Ke(i, r), a);
    }
    function Ze(a) {
      const i = Math.max(a.replace(/\s+/g, "").length, 8);
      return Math.max(4200, i * 120);
    }
    function Ce(a) {
      return `${C.value}|${a.scrollHeight}|${a.clientHeight}`;
    }
    function Me(a, i = !1) {
      U.value = Ce(a), B.value = Ze(C.value);
      const r = a.scrollHeight - a.clientHeight;
      X.value = i && r > 0 ? ee(a.scrollTop / r) : 0, z.value = window.performance.now() - X.value * B.value;
    }
    function Re() {
      const a = c.value;
      if (!a || !t.state.bigText || t.state.speech || ue()) {
        U.value = "", z.value = 0, B.value = 0;
        return;
      }
      if (a.scrollHeight <= a.clientHeight) {
        U.value = "", z.value = 0, B.value = 0, Z(a);
        return;
      }
      (Ce(a) !== U.value || !B.value) && Me(a);
      const r = z.value || window.performance.now();
      z.value = r, X.value = ee(
        (window.performance.now() - r) / B.value
      ), $(!0);
    }
    function te(a = !1, i = 0) {
      i === 0 && K(), !(!t.state.bigText || t.state.speech || ue()) && E(() => {
        const r = c.value;
        if (r) {
          if (r.scrollHeight <= r.clientHeight) {
            i < Rs && (G.value = window.setTimeout(() => {
              G.value = 0, te(a, i + 1);
            }, 120));
            return;
          }
          Me(r, a), Re();
        }
      });
    }
    function je() {
      if (O.value) return;
      const a = () => {
        O.value = 0, Re(), O.value = window.setTimeout(a, 64);
      };
      O.value = window.setTimeout(a, 64);
    }
    function Ve() {
      O.value && (window.clearTimeout(O.value), O.value = 0);
    }
    function he() {
      E(() => {
        const a = c.value;
        a && (ke(a, 0, !0), le.value && $(), te());
      });
    }
    A(C, async () => {
      await we(), he();
    }), A(() => t.state.subtitleMode, async (a, i) => {
      await we(a === "simplified" && i !== "simplified"), he();
    }), A(
      () => t.state.bigText,
      (a) => {
        a ? he() : (_(), K());
      }
    ), A(le, (a) => {
      a ? (K(), E($)) : (_(), t.state.speech || te(!0));
    }), A(
      () => t.state.speech,
      (a) => {
        a ? (K(), E($)) : te(!0);
      }
    ), A(
      () => t.state.speechRate,
      () => {
        le.value && E($);
      }
    ), A(
      () => t.state.speechProgress,
      () => {
        !t.state.bigText || !t.state.speech || E(() => {
          $();
        });
      }
    );
    let P = null;
    function Ae() {
      var a;
      g("toolbarResize", ((a = T.value) == null ? void 0 : a.getBoundingClientRect().height) ?? 0);
    }
    function ge() {
      P == null || P.disconnect(), P = null, Ae(), !(!T.value || typeof ResizeObserver > "u") && (P = new ResizeObserver(Ae), P.observe(T.value));
    }
    function De() {
      E(ge);
    }
    function Xe(a) {
      if (a.key === "Escape") {
        a.preventDefault(), g("cancelDanger");
        return;
      }
      if (a.key !== "Tab" || !m.value) return;
      const i = Array.from(
        m.value.querySelectorAll(
          "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
        )
      ).filter((M) => !M.hidden), r = i[0], f = i[i.length - 1];
      !r || !f || (a.shiftKey && document.activeElement === r ? (a.preventDefault(), f.focus()) : !a.shiftKey && document.activeElement === f && (a.preventDefault(), r.focus()));
    }
    return A(
      () => t.state.toolbarOpen,
      async (a) => {
        await E(), a ? ge() : (P == null || P.disconnect(), P = null, g("toolbarResize", 0));
      }
    ), A(
      () => t.state.confirming,
      async (a) => {
        var i, r, f;
        if (a) {
          const M = document.activeElement;
          w.value = M instanceof HTMLElement ? M : null, await E(), (r = (i = m.value) == null ? void 0 : i.querySelector("[data-aging-confirm-primary]")) == null || r.focus();
          return;
        }
        await E(), (f = w.value) != null && f.isConnected && w.value.focus(), w.value = null;
      }
    ), st(() => {
      je(), window.addEventListener("resize", De), t.state.toolbarOpen && E(ge);
    }), it(() => {
      window.removeEventListener("resize", De), P == null || P.disconnect(), g("toolbarResize", 0), Ve(), _(), K();
    }), (a, i) => (b(), S("div", {
      class: "aging-assist-root",
      "data-aging-assist-root": "",
      "data-theme": s.theme
    }, [
      s.showLauncher && !s.state.toolbarOpen ? (b(), S("button", {
        key: 0,
        class: "aging-assist-launcher",
        type: "button",
        "aria-label": s.labels.openToolbar,
        onClick: i[0] || (i[0] = (r) => g("open"))
      }, [
        d(p(rt), { size: 24 }),
        o("span", null, h(s.labels.launcher), 1)
      ], 8, Ot)) : D("", !0),
      s.state.toolbarOpen ? (b(), S("section", {
        key: 1,
        ref_key: "toolbar",
        ref: T,
        class: y(["aging-assist-toolbar", s.position === "bottom" ? "is-bottom" : "is-top"]),
        role: "toolbar",
        "aria-orientation": "horizontal",
        "aria-label": s.labels.launcher
      }, [
        o("div", Ht, [
          o("div", zt, [
            o("div", $t, [
              d(p(lt), { size: 26 })
            ]),
            o("div", It, [
              o("strong", null, h(s.labels.launcher), 1),
              o("span", null, h(s.labels.tagline), 1)
            ])
          ]),
          o("div", Nt, [
            o("div", qt, [
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[1] || (i[1] = (r) => g("reset"))
              }, [
                d(p(ct)),
                o("span", null, h(s.labels.reset), 1)
              ]),
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.speech }]),
                type: "button",
                "aria-pressed": s.state.speech,
                onClick: i[2] || (i[2] = (r) => g("toggle", "speech"))
              }, [
                d(p(ut)),
                o("span", null, h(s.labels.speech), 1)
              ], 10, Gt),
              s.state.speech && !s.state.speechPaused ? (b(), S("button", {
                key: 0,
                class: "aging-assist-control",
                type: "button",
                onClick: i[3] || (i[3] = (r) => g("pauseSpeech"))
              }, [
                d(p(ht)),
                o("span", null, h(s.labels.pauseSpeech), 1)
              ])) : D("", !0),
              s.state.speech && s.state.speechPaused ? (b(), S("button", {
                key: 1,
                class: "aging-assist-control",
                type: "button",
                onClick: i[4] || (i[4] = (r) => g("resumeSpeech"))
              }, [
                d(p(gt)),
                o("span", null, h(s.labels.continueSpeech), 1)
              ])) : D("", !0),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[5] || (i[5] = (r) => g("readPrevious"))
              }, [
                d(p(dt)),
                o("span", null, h(s.labels.readPrevious), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[6] || (i[6] = (r) => g("readNext"))
              }, [
                d(p(pt)),
                o("span", null, h(s.labels.readNext), 1)
              ])
            ]),
            o("div", Ut, [
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[7] || (i[7] = (r) => g("fontDown"))
              }, [
                d(p(ft)),
                o("span", null, h(s.labels.fontDown), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[8] || (i[8] = (r) => g("fontUp"))
              }, [
                d(p(mt)),
                o("span", null, h(s.labels.fontUp), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[9] || (i[9] = (r) => g("zoomOut"))
              }, [
                d(p(bt)),
                o("span", null, h(s.labels.pageZoomOut), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[10] || (i[10] = (r) => g("zoomIn"))
              }, [
                d(p(St)),
                o("span", null, h(s.labels.pageZoomIn), 1)
              ])
            ]),
            o("div", Kt, [
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.highContrast }]),
                type: "button",
                "aria-pressed": s.state.highContrast,
                onClick: i[11] || (i[11] = (r) => g("toggle", "highContrast"))
              }, [
                d(p(vt)),
                o("span", null, h(s.labels.highContrast), 1)
              ], 10, Zt),
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.largeCursor }]),
                type: "button",
                "aria-pressed": s.state.largeCursor,
                onClick: i[12] || (i[12] = (r) => g("toggle", "largeCursor"))
              }, [
                d(p(yt)),
                o("span", null, h(s.labels.largeCursor), 1)
              ], 10, jt),
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.crosshair }]),
                type: "button",
                "aria-pressed": s.state.crosshair,
                onClick: i[13] || (i[13] = (r) => g("toggle", "crosshair"))
              }, [
                d(p(Tt)),
                o("span", null, h(s.labels.crosshair), 1)
              ], 10, Vt),
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.readingGuide }]),
                type: "button",
                "aria-pressed": s.state.readingGuide,
                onClick: i[14] || (i[14] = (r) => g("toggle", "readingGuide"))
              }, [
                d(p(Pt)),
                o("span", null, h(s.labels.readingGuide), 1)
              ], 10, Xt),
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.bigText }]),
                type: "button",
                "aria-pressed": s.state.bigText,
                onClick: i[15] || (i[15] = (r) => g("toggle", "bigText"))
              }, [
                d(p(xt)),
                o("span", null, h(s.labels.bigText), 1)
              ], 10, Jt)
            ]),
            o("div", Wt, [
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.simplified }]),
                type: "button",
                "aria-pressed": s.state.simplified,
                onClick: i[16] || (i[16] = (r) => g("toggle", "simplified"))
              }, [
                d(p(wt)),
                o("span", null, h(s.labels.simplified), 1)
              ], 10, Yt),
              o("button", {
                class: y(["aging-assist-control", { "is-active": s.state.moreOpen }]),
                type: "button",
                "aria-expanded": s.state.moreOpen,
                "aria-controls": Pe.value,
                onClick: i[17] || (i[17] = (r) => g("toggleMore"))
              }, [
                d(p(Et)),
                o("span", null, h(s.labels.more), 1)
              ], 10, Qt)
            ])
          ]),
          o("div", _t, [
            o("div", es, [
              o("label", { for: xe.value }, h(s.labels.speechRate), 9, ts),
              o("select", {
                id: xe.value,
                value: s.state.speechRate,
                onChange: i[18] || (i[18] = (r) => g("rate", Number(r.target.value)))
              }, [
                (b(!0), S(de, null, pe(l.value, (r) => (b(), S("option", {
                  key: r.value,
                  value: r.value
                }, h(r.label), 9, is))), 128))
              ], 40, ss)
            ]),
            s.state.statusMessage ? (b(), S("p", ns, h(s.state.statusMessage), 1)) : D("", !0),
            o("button", {
              class: "aging-assist-control is-danger",
              type: "button",
              onClick: i[19] || (i[19] = (r) => g("disable"))
            }, [
              d(p(kt)),
              o("span", null, h(s.labels.exit), 1)
            ]),
            o("button", {
              class: "aging-assist-control",
              type: "button",
              "aria-label": s.labels.closeToolbar,
              onClick: i[20] || (i[20] = (r) => g("close"))
            }, [
              d(p(Le)),
              o("span", null, h(s.labels.closeToolbar), 1)
            ], 8, as)
          ])
        ])
      ], 10, Bt)) : D("", !0),
      s.state.toolbarOpen && s.state.moreOpen ? (b(), S("aside", {
        key: 2,
        id: Pe.value,
        class: y(["aging-assist-more", s.position === "bottom" ? "is-bottom" : "is-top"]),
        "aria-labelledby": Te.value
      }, [
        o("h2", { id: Te.value }, h(s.labels.enhancementSettings), 9, rs),
        o("div", ls, [
          o("label", cs, [
            o("span", null, [
              d(p(Ct), { size: 20 }),
              se(" " + h(s.labels.focusEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.focusEnhance,
              onChange: i[21] || (i[21] = (r) => Q("focusEnhance", r))
            }, null, 40, us)
          ]),
          o("label", hs, [
            o("span", null, [
              d(p(Mt), { size: 20 }),
              se(" " + h(s.labels.clickEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.clickEnhance,
              onChange: i[22] || (i[22] = (r) => Q("clickEnhance", r))
            }, null, 40, gs)
          ]),
          o("label", ds, [
            o("span", null, [
              d(p(Rt), { size: 20 }),
              se(" " + h(s.labels.formEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.formEnhance,
              onChange: i[23] || (i[23] = (r) => Q("formEnhance", r))
            }, null, 40, ps)
          ]),
          o("label", fs, [
            o("span", null, [
              d(p(At), { size: 20 }),
              se(" " + h(s.labels.mistakeGuard), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.mistakeGuard,
              onChange: i[24] || (i[24] = (r) => Q("mistakeGuard", r))
            }, null, 40, ms)
          ])
        ])
      ], 10, os)) : D("", !0),
      s.state.bigText ? (b(), S("section", {
        key: 3,
        class: y(["aging-assist-bigtext is-bottom", [
          s.position === "top" ? "has-toolbar-top" : "has-toolbar-bottom",
          s.state.speech ? "is-reading" : "is-plain"
        ]]),
        "aria-live": "polite"
      }, [
        o("div", bs, [
          o("p", {
            ref_key: "bigTextScroller",
            ref: c,
            onScroll: i[25] || (i[25] = (r) => Z(r.currentTarget))
          }, [
            (b(!0), S(de, null, pe($e.value, (r, f) => (b(), S("span", {
              key: `${f}-${r}`,
              class: y(["aging-assist-subtitle-token", { "is-pinyin": Y.value }])
            }, [
              Y.value ? (b(), S("span", Ss, h(Ie.value[f] || " "), 1)) : D("", !0),
              o("span", vs, h(r), 1)
            ], 2))), 128))
          ], 544),
          o("span", {
            class: "aging-assist-bigtext-progress",
            style: nt({ transform: `scaleX(${oe.value / 100})` }),
            "aria-hidden": "true"
          }, null, 4)
        ]),
        o("div", ys, [
          o("div", {
            class: "aging-assist-subtitle-mode",
            role: "group",
            "aria-label": s.labels.subtitleMode
          }, [
            o("span", null, h(s.labels.subtitleMode), 1),
            (b(!0), S(de, null, pe(Ne.value, (r) => (b(), S("button", {
              key: r.value,
              type: "button",
              class: y({ "is-active": s.state.subtitleMode === r.value }),
              "aria-pressed": s.state.subtitleMode === r.value,
              onClick: (f) => g("subtitleMode", r.value)
            }, h(r.label), 11, Ps))), 128))
          ], 8, Ts),
          o("button", {
            type: "button",
            "aria-label": s.labels.closeBigText,
            title: s.labels.closeBigText,
            onClick: i[26] || (i[26] = (r) => g("toggle", "bigText"))
          }, [
            d(p(Le), { size: 28 })
          ], 8, xs)
        ])
      ], 2)) : D("", !0),
      o("div", {
        class: y(["aging-assist-crosshair-x", { "is-visible": s.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      o("div", {
        class: y(["aging-assist-crosshair-y", { "is-visible": s.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      s.state.confirming ? (b(), S("section", {
        key: 4,
        ref_key: "confirmDialog",
        ref: m,
        class: "aging-assist-confirm",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": V.value,
        "aria-describedby": q.value,
        onKeydown: Xe
      }, [
        o("div", Es, [
          o("h2", { id: V.value }, h(s.labels.confirmTitle), 9, ks),
          o("p", { id: q.value }, h(s.labels.confirmDescription), 9, Cs),
          o("div", Ms, [
            o("button", {
              type: "button",
              onClick: i[27] || (i[27] = (r) => g("cancelDanger"))
            }, h(s.labels.cancel), 1),
            o("button", {
              class: "primary",
              type: "button",
              "data-aging-confirm-primary": "",
              onClick: i[28] || (i[28] = (r) => g("confirmDanger"))
            }, h(s.labels.continue), 1)
          ])
        ])
      ], 40, ws)) : D("", !0)
    ], 8, Lt));
  }
}), Ds = "aging-assist", Fs = "aging-assist-state", me = {
  enabled: !1,
  toolbarOpen: !1,
  moreOpen: !1,
  confirming: !1,
  fontScale: 1,
  pageScale: 1,
  highContrast: !1,
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
}, Ls = {
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
  highContrast: "高对比",
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
}, Os = {
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
  highContrast: "High contrast",
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
}, Bs = [
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
], Hs = /* @__PURE__ */ new Set([0.75, 1, 1.25, 1.5]), zs = /* @__PURE__ */ new Set(["simplified", "traditional", "pinyin"]);
function ve(s) {
  if (!s || typeof s != "object" || Array.isArray(s)) return {};
  const e = s, t = {};
  return Bs.forEach((n) => {
    typeof e[n] == "boolean" && Object.assign(t, { [n]: e[n] });
  }), typeof e.fontScale == "number" && Number.isFinite(e.fontScale) && (t.fontScale = be(e.fontScale, 1, 1.8)), typeof e.pageScale == "number" && Number.isFinite(e.pageScale) && (t.pageScale = be(e.pageScale, 1, 1.3)), typeof e.speechProgress == "number" && Number.isFinite(e.speechProgress) && (t.speechProgress = be(e.speechProgress, 0, 1)), Hs.has(e.speechRate) && (t.speechRate = e.speechRate), zs.has(e.subtitleMode) && (t.subtitleMode = e.subtitleMode), typeof e.statusMessage == "string" && (t.statusMessage = e.statusMessage.slice(0, 240)), typeof e.currentText == "string" && (t.currentText = e.currentText.slice(0, 240)), typeof e.readingIndex == "number" && Number.isInteger(e.readingIndex) && (t.readingIndex = Math.max(-1, e.readingIndex)), t;
}
function $s(s) {
  const e = { ...s };
  return e.enabled || (e.toolbarOpen = !1, e.moreOpen = !1, e.confirming = !1, e.speech = !1, e.speechPaused = !1, e.speechProgress = 0), e.toolbarOpen || (e.moreOpen = !1), e.speech || (e.speechPaused = !1, e.speechProgress = 0), e;
}
function be(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function Is(s) {
  try {
    const e = window.localStorage.getItem(s);
    return e ? ve(JSON.parse(e)) : {};
  } catch {
    return {};
  }
}
function Ns(s, e) {
  try {
    window.localStorage.setItem(s, JSON.stringify(e));
  } catch {
  }
}
function qs(s) {
  try {
    window.localStorage.removeItem(s);
  } catch {
  }
}
function Se(s) {
  return s ? typeof s == "string" ? document.querySelector(s) : s : null;
}
function Gs(s, e = {}) {
  const t = document.createElement(s);
  return Object.entries(e).forEach(([n, l]) => {
    t.setAttribute(n, l);
  }), t;
}
function ne(s) {
  var q;
  if (!s || s.closest("[data-aging-assist-root]")) return "";
  const e = s.closest(
    "[data-aging-text], [data-aging-label], button, a, label, input, textarea, select, img, h1, h2, h3, h4, h5, h6, p, li, td, th, summary, [role='button'], [title], [aria-label]"
  ) ?? s, t = e.closest("[data-aging-readable], [data-aging-text]"), n = t && t !== e && !Ks(e) ? t : e, l = n.getAttribute("data-aging-text") || n.getAttribute("data-aging-label"), c = n.getAttribute("aria-label"), T = n.getAttribute("title"), m = n instanceof HTMLImageElement ? n.getAttribute("alt") : "", w = n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement ? n.value || n.placeholder : n instanceof HTMLSelectElement ? ((q = n.selectedOptions[0]) == null ? void 0 : q.textContent) || n.value : "", V = n.textContent || "";
  return He(l || c || T || m || w || V);
}
function He(s) {
  return s.replace(/\s+/g, " ").replace(/[|_~`^*#<>[\]{}\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 240);
}
function Us(s = document.body) {
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
  ].join(","), t = /* @__PURE__ */ new Set();
  return Array.from(s.querySelectorAll(e)).filter((n) => {
    if (n.closest("[data-aging-assist-root]") || n.closest("[data-aging-ignore], .qunar-assist-hide") || n.closest("[data-aging-readable]") && !n.matches("[data-aging-readable]"))
      return !1;
    const l = n.getBoundingClientRect(), c = ne(n);
    return !c || l.width <= 0 || l.height <= 0 || !Zs(n, c) || t.has(c) ? !1 : (t.add(c), !0);
  });
}
function Ks(s) {
  return s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement || s instanceof HTMLSelectElement || s instanceof HTMLButtonElement;
}
function Zs(s, e) {
  return s.matches("[data-aging-text], [data-aging-readable], .qunar-assist-long-text") ? e.length >= 2 : s.matches("h1, h2, h3, p, li, summary") || s.matches("button, a, [role='button'], [title], [aria-label], label") ? e.length >= 4 : e.length >= 6;
}
class js {
  constructor() {
    u(this, "utterance", null);
  }
  get supported() {
    return typeof window < "u" && "speechSynthesis" in window;
  }
  speak(e, t, n, l = {}) {
    if (!this.supported || !e) return !1;
    this.stop();
    const c = new SpeechSynthesisUtterance(e);
    c.lang = n, c.rate = t, c.pitch = 1, c.volume = 1;
    const T = window.speechSynthesis.getVoices().find((m) => m.lang.toLowerCase().startsWith(n.slice(0, 2).toLowerCase()));
    return T && (c.voice = T), c.onstart = () => {
      var m;
      return (m = l.onStart) == null ? void 0 : m.call(l);
    }, c.onboundary = (m) => {
      var w;
      (w = l.onBoundary) == null || w.call(l, Vs(m.charIndex, e.length));
    }, c.onend = () => {
      var m, w;
      this.utterance === c && ((m = l.onBoundary) == null || m.call(l, 1), (w = l.onEnd) == null || w.call(l), this.utterance = null);
    }, c.onerror = () => {
      var m;
      this.utterance === c && ((m = l.onError) == null || m.call(l), this.utterance = null);
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
function Vs(s, e) {
  return e ? Math.min(1, Math.max(0, s / e)) : 0;
}
let k = null;
class ye {
  constructor(e = {}) {
    u(this, "state");
    u(this, "options");
    u(this, "app", null);
    u(this, "host", null);
    u(this, "labels");
    u(this, "listeners", /* @__PURE__ */ new Set());
    u(this, "speech", new js());
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
      const t = this.findDangerElement(e.target);
      !t || t.dataset.agingAssistConfirmed === "true" || (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.requestDangerConfirmation(t, () => {
        t.dispatchEvent(
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
      const t = e.target instanceof HTMLFormElement ? e.target : null, n = e.submitter instanceof HTMLElement ? e.submitter : null, l = this.findDangerElement(n) ?? (t != null && t.matches(this.options.dangerousSelector) ? t : null);
      !l || l.dataset.agingAssistConfirmed === "true" || (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.requestDangerConfirmation(l, () => {
        t && (typeof t.requestSubmit == "function" ? t.requestSubmit(n instanceof HTMLElement ? n : void 0) : t.submit());
      }));
    });
    this.options = {
      namespace: e.namespace ?? Ds,
      storageKey: e.storageKey ?? Fs,
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
    const t = this.options.persist ? Is(this.options.storageKey) : {}, { bigTextDock: n, ...l } = t, {
      bigTextDock: c,
      ...T
    } = e.initialState ?? {};
    this.state = at({
      ...me,
      ...l,
      ...ve(T),
      currentText: "",
      confirming: !1,
      toolbarOpen: !1,
      moreOpen: !1,
      speech: !1,
      speechPaused: !1,
      speechProgress: 0,
      statusMessage: "",
      readingIndex: -1
    }), this.labels = {
      ...this.options.locale === "en-US" ? Os : Ls,
      ...e.labels
    }, this.options.autoMount && this.mount();
  }
  mount() {
    if (this.app || this.destroyed) return;
    if (k && k !== this && !k.destroyed)
      throw new Error(
        "Aging Assist already has an active instance. Destroy it before mounting another instance."
      );
    const e = Se(this.options.container) ?? document.body;
    if (!e) {
      k = this, this.pendingMount || (this.pendingMount = !0, document.addEventListener("DOMContentLoaded", this.onDocumentReady, { once: !0 }));
      return;
    }
    k = this, this.host = Gs("div", {
      id: `${this.options.namespace}-root`,
      "data-aging-assist-root": "true"
    }), e.appendChild(this.host), this.app = ot(As, {
      state: this.state,
      labels: this.labels,
      position: this.options.position,
      theme: this.options.theme,
      idPrefix: this.options.namespace,
      showLauncher: this.options.showLauncher,
      onAction: (t, n) => this.handleAction(t, n)
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
      ...me,
      toolbarOpen: !1,
      enabled: !1,
      focusEnhance: !0,
      formEnhance: !0
    }), this.options.persist && qs(this.options.storageKey), this.applyEffects(), this.restoreToolbarFocus(), this.emit("disable");
  }
  reset() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.clearReadTarget(), this.setState({
      ...me,
      enabled: !0,
      toolbarOpen: !0,
      focusEnhance: !0,
      formEnhance: !0
    }), this.emit("reset");
  }
  destroy() {
    var e, t;
    this.destroyed = !0, document.removeEventListener("DOMContentLoaded", this.onDocumentReady), this.pendingMount = !1, this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.crosshairFrame && window.cancelAnimationFrame(this.crosshairFrame), this.crosshairFrame = 0, this.crosshairPoint = null, this.clearReadTarget(), this.unbindTrigger(), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("focusin", this.onFocusIn), document.removeEventListener("pointerup", this.onPointerUp), document.removeEventListener("click", this.onDangerClick, !0), document.removeEventListener("submit", this.onDangerSubmit, !0), (e = this.app) == null || e.unmount(), (t = this.host) == null || t.remove(), this.app = null, this.host = null, this.removeRootEffects(), k === this && (k = null);
  }
  speak(e) {
    const t = He(e);
    t && (this.setState({
      speech: !0,
      speechPaused: !1,
      speechProgress: 0,
      statusMessage: "",
      currentText: t
    }), this.speakText(t), this.emit("speak", t));
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
    const t = ve(e);
    if (!Object.keys(t).length) return;
    const n = this.getState(), l = $s({ ...this.state, ...t });
    Object.assign(this.state, l), this.reconcileStateEffects(n, l), this.applyEffects(), this.persist(), this.notify(), this.emit("change", t);
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  subscribeKey(e, t) {
    let n = this.state[e];
    return t(n, this.getState()), this.subscribe((l) => {
      const c = l[e];
      Object.is(n, c) || (n = c, t(c, l));
    });
  }
  handleAction(e, t) {
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
        this.setState({ fontScale: N(this.state.fontScale + 0.1, 1, 1.8) });
        break;
      case "fontDown":
        this.setState({ fontScale: N(this.state.fontScale - 0.1, 1, 1.8) });
        break;
      case "zoomIn":
        this.setState({ pageScale: N(this.state.pageScale + 0.05, 1, 1.3) });
        break;
      case "zoomOut":
        this.setState({ pageScale: N(this.state.pageScale - 0.05, 1, 1.3) });
        break;
      case "toggle":
        Oe(t) && this.toggle(t);
        break;
      case "setBoolean": {
        const n = t;
        Oe(n == null ? void 0 : n.key) && typeof n.value == "boolean" && this.setBoolean(n.key, n.value);
        break;
      }
      case "toggleMore":
        this.setState({ moreOpen: !this.state.moreOpen });
        break;
      case "rate":
        this.setState({ speechRate: t }), this.state.currentText && this.state.speech && this.speak(this.state.currentText);
        break;
      case "subtitleMode":
        this.setState({ subtitleMode: t });
        break;
      case "toolbarResize":
        typeof t == "number" && Number.isFinite(t) && (this.toolbarHeight = Math.max(0, t), this.applyEffects());
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
    const t = this.state[e];
    if (typeof t != "boolean") return;
    if (e === "speech") {
      t ? (this.speech.stop(), this.stopSpeechProgressClock(), this.setState({ speech: !1, speechPaused: !1, speechProgress: 0, statusMessage: "" })) : (this.setState({ speech: !0, speechPaused: !1, speechProgress: 0, statusMessage: "" }), this.state.currentText && (this.lastSpokenText = this.state.currentText, this.speakText(this.state.currentText)));
      return;
    }
    const n = { [e]: !t };
    e === "readingGuide" && t && this.clearReadTarget(), this.setState(n);
  }
  setBoolean(e, t) {
    this.setState({ [e]: t });
  }
  readOffset(e) {
    const t = Us();
    if (!t.length) return;
    const n = N(this.state.readingIndex + e, 0, t.length - 1), l = t[n], c = ne(l);
    this.highlightTarget(l), this.lastSpokenText = c, this.setState({
      readingIndex: n,
      currentText: c,
      speech: !0,
      speechPaused: !1,
      speechProgress: 0,
      statusMessage: ""
    }), this.speakText(c);
  }
  bindTrigger() {
    const e = Se(this.options.trigger);
    e == null || e.addEventListener("click", this.onTriggerClick);
  }
  unbindTrigger() {
    const e = Se(this.options.trigger);
    e == null || e.removeEventListener("click", this.onTriggerClick);
  }
  bindDocumentEvents() {
    document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseover", this.onMouseOver), document.addEventListener("focusin", this.onFocusIn), document.addEventListener("pointerup", this.onPointerUp), document.addEventListener("click", this.onDangerClick, !0), document.addEventListener("submit", this.onDangerSubmit, !0);
  }
  findDangerElement(e) {
    const t = e instanceof HTMLElement ? e : e instanceof Node ? e.parentElement : null;
    return (t == null ? void 0 : t.closest(this.options.dangerousSelector)) ?? null;
  }
  queueCrosshairUpdate(e) {
    !this.state.enabled || !this.state.crosshair || (this.crosshairPoint = { x: e.clientX, y: e.clientY }, !this.crosshairFrame && (this.crosshairFrame = window.requestAnimationFrame(() => {
      this.crosshairFrame = 0, this.crosshairPoint && this.updateCrosshair(this.crosshairPoint.x, this.crosshairPoint.y);
    })));
  }
  updateCrosshair(e, t) {
    const n = this.host, l = n == null ? void 0 : n.querySelector(".aging-assist-crosshair-x"), c = n == null ? void 0 : n.querySelector(".aging-assist-crosshair-y");
    l && (l.style.top = `${t}px`), c && (c.style.left = `${e}px`);
  }
  queueHover(e) {
    if (e === this.hoverTarget && this.hoverTimer || (this.clearHoverTimer(), !this.state.enabled || e != null && e.closest(this.options.ignoredSelector)) || !this.state.readingGuide && !this.state.bigText && !this.state.speech)
      return;
    const t = ne(e);
    t && ((this.state.readingGuide || this.state.bigText) && this.applyHoverTarget(e, t, !1), !(!this.state.speech || t === this.lastSpokenText) && (this.hoverTarget = e, this.hoverTimer = window.setTimeout(() => {
      this.hoverTimer = 0, this.hoverTarget = null, this.applyHoverTarget(e, t, !0);
    }, 220)));
  }
  handleDirectTarget(e) {
    if (this.clearHoverTimer(), !this.state.enabled || !e || e.closest(this.options.ignoredSelector) || !this.state.readingGuide && !this.state.bigText && !this.state.speech) return;
    const t = ne(e);
    t && this.applyHoverTarget(e, t, this.state.speech && t !== this.lastSpokenText);
  }
  clearHoverTimer() {
    this.hoverTimer && window.clearTimeout(this.hoverTimer), this.hoverTimer = 0, this.hoverTarget = null;
  }
  applyHoverTarget(e, t, n) {
    const l = {};
    (this.state.currentText !== t || n) && (l.currentText = t), n && (l.speechPaused = !1, l.speechProgress = 0, l.statusMessage = ""), Object.keys(l).length && this.setState(l), this.state.readingGuide && e instanceof HTMLElement && e !== this.currentReadTarget && this.highlightTarget(e), n && (this.lastSpokenText = t, this.speakText(t));
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
    const t = Math.max(this.state.speechProgress, N(e, 0, 1));
    Math.abs(this.state.speechProgress - t) < 0.01 && t !== 0 && t !== 1 || (this.state.speechProgress = t, this.notify());
  }
  startSpeechProgressClock(e) {
    this.stopSpeechProgressClock(), this.speechProgressElapsed = 0, this.speechProgressDuration = Xs(e, this.state.speechRate), this.speechProgressStartedAt = window.performance.now(), this.queueSpeechProgressTick();
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
    const e = this.pendingDanger, t = this.pendingDangerAction;
    if (!e || !t) {
      this.cancelDanger();
      return;
    }
    e.dataset.agingAssistConfirmed = "true", e.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null, this.setState({ confirming: !1 }), t(), this.emit("confirm", e), window.setTimeout(() => {
      e && delete e.dataset.agingAssistConfirmed;
    }, 0);
  }
  requestDangerConfirmation(e, t) {
    var n;
    (n = this.pendingDanger) == null || n.classList.remove("aging-assist-danger-focus"), this.pendingDanger = e, this.pendingDangerAction = t, this.setState({ confirming: !0 }), e.classList.add("aging-assist-danger-focus");
  }
  applyEffects() {
    const e = document.documentElement, t = this.state.enabled && this.state.toolbarOpen && this.options.position === "top", n = this.state.enabled && (this.state.bigText || this.state.toolbarOpen && this.options.position === "bottom");
    t && this.originalBodyPaddingTop === null && document.body && (this.originalBodyPaddingTop = window.getComputedStyle(document.body).paddingTop || "0px"), n && this.originalBodyPaddingBottom === null && document.body && (this.originalBodyPaddingBottom = window.getComputedStyle(document.body).paddingBottom || "0px"), e.dataset.agingEnabled = String(this.state.enabled), e.dataset.agingContrast = String(this.state.highContrast), e.dataset.agingSimplified = String(this.state.simplified), e.dataset.agingLargeCursor = String(this.state.largeCursor), e.dataset.agingFocus = String(this.state.focusEnhance), e.dataset.agingClick = String(this.state.clickEnhance), e.dataset.agingForm = String(this.state.formEnhance), e.dataset.agingMistakeGuard = String(this.state.mistakeGuard), e.dataset.agingBigText = String(this.state.bigText), e.dataset.agingToolbarOpen = String(this.state.toolbarOpen), e.dataset.agingToolbarPosition = this.options.position, e.dataset.agingFontScale = String(this.state.fontScale), e.style.setProperty("--aging-assist-font-scale", String(this.state.fontScale)), e.style.setProperty("--aging-assist-page-scale", String(this.state.pageScale)), e.style.setProperty(
      "--aging-assist-toolbar-reserve",
      `${this.toolbarHeight / this.state.pageScale}px`
    ), e.style.setProperty(
      "--aging-assist-body-padding-top",
      this.originalBodyPaddingTop ?? "0px"
    ), e.style.setProperty(
      "--aging-assist-body-padding-bottom",
      this.originalBodyPaddingBottom ?? "0px"
    ), !t && this.originalBodyPaddingTop !== null && (this.originalBodyPaddingTop = null, e.style.setProperty("--aging-assist-body-padding-top", "0px")), !n && this.originalBodyPaddingBottom !== null && (this.originalBodyPaddingBottom = null, e.style.setProperty("--aging-assist-body-padding-bottom", "0px")), this.host && (this.host.style.zoom = String(1 / this.state.pageScale)), this.syncFontScale();
  }
  startFontScaleObserver() {
    var e;
    typeof MutationObserver > "u" || !document.body || ((e = this.fontScaleObserver) == null || e.disconnect(), this.fontScaleObserver = new MutationObserver((t) => {
      if (!this.state.enabled || this.state.fontScale <= 1) {
        this.fontScalePendingRoots.clear();
        return;
      }
      t.forEach((n) => {
        n.addedNodes.forEach((l) => {
          l instanceof HTMLElement && this.fontScalePendingRoots.add(l);
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
      const l = Number.parseFloat(window.getComputedStyle(n).fontSize), c = n.parentElement, T = c ? Number.parseFloat(window.getComputedStyle(c).fontSize) : Number.NaN;
      Number.isFinite(T) && Math.abs(l - T) < 0.01 || !Number.isFinite(l) || l <= 0 || this.fontScaleElements.set(n, {
        value: n.style.getPropertyValue("font-size"),
        priority: n.style.getPropertyPriority("font-size"),
        baseSize: l
      });
    }), this.fontScaleElements.forEach((n, l) => {
      if (!l.isConnected) {
        this.fontScaleElements.delete(l);
        return;
      }
      l.style.setProperty(
        "font-size",
        `${(n.baseSize * this.state.fontScale).toFixed(2)}px`,
        "important"
      );
    });
  }
  restoreFontScale() {
    this.fontScaleElements.forEach((e, t) => {
      e.value ? t.style.setProperty("font-size", e.value, e.priority) : t.style.removeProperty("font-size");
    }), this.fontScaleElements.clear();
  }
  shouldScaleFontElement(e) {
    return !e.isConnected || e.closest("[data-aging-assist-root]") || e.matches("script, style, noscript, svg, path, img, video, canvas") ? !1 : e.matches("input, textarea, select, option, button") ? !0 : Array.from(e.childNodes).some(
      (t) => {
        var n;
        return t.nodeType === Node.TEXT_NODE && !!((n = t.textContent) != null && n.trim());
      }
    );
  }
  removeRootEffects() {
    const e = document.documentElement;
    [
      "agingEnabled",
      "agingContrast",
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
    ].forEach((t) => {
      delete e.dataset[t];
    }), e.style.removeProperty("--aging-assist-font-scale"), e.style.removeProperty("--aging-assist-page-scale"), e.style.removeProperty("--aging-assist-toolbar-reserve"), e.style.removeProperty("--aging-assist-body-padding-top"), e.style.removeProperty("--aging-assist-body-padding-bottom"), this.originalBodyPaddingTop = null, this.originalBodyPaddingBottom = null, this.host && (this.host.style.zoom = "");
  }
  persist() {
    if (!this.options.persist) return;
    const e = {
      enabled: this.state.enabled,
      fontScale: this.state.fontScale,
      pageScale: this.state.pageScale,
      highContrast: this.state.highContrast,
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
    Ns(this.options.storageKey, e);
  }
  notify() {
    var t, n;
    const e = this.getState();
    (n = (t = this.options).onChange) == null || n.call(t, e), this.listeners.forEach((l) => l(e));
  }
  emit(e, t) {
    var n, l;
    (l = (n = this.options).onEvent) == null || l.call(n, {
      type: e,
      state: this.getState(),
      detail: t
    });
  }
  captureToolbarReturnFocus() {
    if (this.state.toolbarOpen) return;
    const e = document.activeElement;
    this.toolbarReturnFocus = e instanceof HTMLElement ? e : null;
  }
  focusToolbar() {
    window.setTimeout(() => {
      var e, t;
      (t = (e = this.host) == null ? void 0 : e.querySelector(".aging-assist-control")) == null || t.focus();
    });
  }
  restoreToolbarFocus() {
    window.setTimeout(() => {
      var e, t, n;
      (e = this.toolbarReturnFocus) != null && e.isConnected ? this.toolbarReturnFocus.focus() : (n = (t = this.host) == null ? void 0 : t.querySelector(".aging-assist-launcher")) == null || n.focus(), this.toolbarReturnFocus = null;
    });
  }
  reconcileStateEffects(e, t) {
    (e.speech && !t.speech || !t.enabled) && (this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer()), e.readingGuide && !t.readingGuide && this.clearReadTarget(), e.confirming && !t.confirming && this.pendingDanger && (this.pendingDanger.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null);
  }
  static getActiveInstance() {
    return k && !k.destroyed ? k : null;
  }
}
function N(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function Xs(s, e) {
  const t = Math.max(s.replace(/\s+/g, "").length, 8);
  return Math.max(2600, t * 210 / e);
}
function Oe(s) {
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
  ].includes(s);
}
const Js = "0.1.1";
function ae(s = {}) {
  return ye.getActiveInstance() ?? new ye(s);
}
const _s = ae, ei = ae;
typeof window < "u" && (window.AgingAssist = {
  create: ae,
  init: ae,
  AgingAssist: ye,
  version: Js
});
export {
  ye as AgingAssist,
  Js as VERSION,
  _s as create,
  ae as createAgingAssist,
  ei as init
};
