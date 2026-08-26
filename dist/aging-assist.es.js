var tt = Object.defineProperty;
var st = (s, e, t) => e in s ? tt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var u = (s, e, t) => st(s, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as it, computed as y, ref as S, watch as D, nextTick as E, onMounted as nt, onBeforeUnmount as at, openBlock as T, createElementBlock as P, createVNode as d, unref as p, createElementVNode as o, toDisplayString as h, createCommentVNode as F, normalizeClass as b, Fragment as Fe, renderList as Le, createTextVNode as se, normalizeStyle as ot, reactive as rt, createApp as lt } from "vue";
import { BadgeCheck as ct, Sparkles as ut, ListRestart as ht, Volume2 as gt, Pause as dt, Play as pt, AudioLines as ft, Rows3 as mt, Baseline as bt, Type as St, Minimize2 as vt, Maximize2 as yt, Contrast as Tt, MousePointer2 as Pt, Crosshair as xt, ScanEye as wt, ALargeSmall as Et, Eye as kt, Zap as Ct, CircleOff as Mt, X as Oe, Focus as Rt, MousePointerClick as At, Hand as Dt, ShieldAlert as Ft } from "lucide-vue-next";
let ie = null, de = null;
function He() {
  return de ? Promise.resolve(de) : ie || (ie = import("./subtitle-runtime-CtSRJvvb.js").then((s) => ({
    convert: s.convertSubtitleRuntime,
    pinyinParts: s.convertPinyinPartsRuntime
  })), ie.then((s) => (de = s, s)));
}
async function Lt(s, e) {
  return (await He()).convert(s, e);
}
async function Ot(s) {
  return (await He()).pinyinParts(s);
}
const Bt = ["data-theme"], Ht = ["aria-label"], $t = ["aria-label"], zt = { class: "aging-assist-shell" }, It = { class: "aging-assist-brand" }, Nt = {
  class: "aging-assist-mark",
  "aria-hidden": "true"
}, qt = { class: "aging-assist-title" }, Gt = { class: "aging-assist-groups" }, Ut = { class: "aging-assist-group" }, Kt = ["aria-pressed"], Zt = { class: "aging-assist-group" }, jt = { class: "aging-assist-group" }, Vt = ["aria-pressed"], Xt = ["aria-pressed"], Jt = ["aria-pressed"], Wt = ["aria-pressed"], Yt = ["aria-pressed"], Qt = { class: "aging-assist-group" }, _t = ["aria-pressed"], es = ["aria-expanded", "aria-controls"], ts = { class: "aging-assist-status" }, ss = { class: "aging-assist-rate" }, is = ["for"], ns = ["id", "value"], as = ["value"], os = {
  key: 0,
  class: "aging-assist-message",
  role: "status"
}, rs = ["aria-label"], ls = ["id", "aria-labelledby"], cs = ["id"], us = { class: "aging-assist-switches" }, hs = { class: "aging-assist-switch" }, gs = ["checked"], ds = { class: "aging-assist-switch" }, ps = ["checked"], fs = { class: "aging-assist-switch" }, ms = ["checked"], bs = { class: "aging-assist-switch" }, Ss = ["checked"], vs = { class: "aging-assist-bigtext-window" }, ys = {
  key: 0,
  class: "aging-assist-subtitle-pinyin"
}, Ts = { class: "aging-assist-subtitle-char" }, Ps = { class: "aging-assist-bigtext-actions" }, xs = ["aria-label"], ws = ["aria-label", "title", "aria-pressed"], Es = ["aria-pressed"], ks = ["aria-label", "title"], Cs = ["aria-labelledby", "aria-describedby"], Ms = { class: "aging-assist-confirm-box" }, Rs = ["id"], As = ["id"], Ds = { class: "aging-assist-confirm-actions" }, Fs = 8, Ls = /* @__PURE__ */ it({
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
    const t = s, n = e, l = y(() => [
      { label: t.labels.slowRate, value: 0.75 },
      { label: t.labels.standardRate, value: 1 },
      { label: t.labels.fasterRate, value: 1.25 },
      { label: t.labels.fastRate, value: 1.5 }
    ]), c = S(null), v = S(null), m = S(null), w = S(null), X = y(() => `${t.idPrefix}-confirm-title`), G = y(() => `${t.idPrefix}-confirm-description`), ve = y(() => `${t.idPrefix}-settings-title`), ye = y(() => `${t.idPrefix}-settings`), Te = y(() => `${t.idPrefix}-rate`), oe = S(0), re = S(0), L = S(0), J = S(0), U = S(0), B = S(0), K = S(""), z = S(0), H = S(0), M = y(
      () => t.state.currentText || t.labels.bigTextHint
    ), le = y(
      () => t.state.bigText && t.state.speech && !t.state.speechPaused
    ), W = S(M.value), Y = S([]), k = y(() => t.state.subtitleMode === "pinyin"), Pe = y(() => t.state.subtitleMode === "traditional"), ze = y(() => k.value ? `${t.labels.simplifiedSubtitle.slice(0, 1)}/${t.labels.traditionalSubtitle.slice(0, 1)}` : Pe.value ? t.labels.simplifiedSubtitle : t.labels.traditionalSubtitle), Ie = y(() => k.value ? M.value : W.value), Ne = y(() => Array.from(Ie.value)), qe = y(() => k.value ? Y.value.flatMap((a) => {
      const i = Array.from(a.origin);
      return i.map((r) => i.length === 1 ? a.pinyin : "");
    }) : []);
    function Ge() {
      g(
        "subtitleMode",
        Pe.value || k.value ? "simplified" : "traditional"
      );
    }
    function g(a, i) {
      n("action", a, i);
    }
    let ce = 0;
    async function xe(a = !1) {
      const i = ++ce;
      if (t.state.subtitleMode === "simplified" && !a) {
        W.value = M.value, Y.value = [];
        return;
      }
      if (t.state.subtitleMode === "pinyin") {
        const f = await Ot(M.value);
        if (i !== ce) return;
        Y.value = f, W.value = M.value;
        return;
      }
      const r = await Lt(M.value, t.state.subtitleMode);
      i === ce && (Y.value = [], W.value = r);
    }
    function Q(a, i) {
      g("setBoolean", {
        key: a,
        value: i.target.checked
      });
    }
    function _() {
      L.value && (window.cancelAnimationFrame(L.value), L.value = 0);
    }
    function Z() {
      U.value && window.clearTimeout(U.value), U.value = 0, K.value = "", z.value = 0, H.value = 0;
    }
    function ee(a) {
      return Math.min(1, Math.max(0, a));
    }
    function j(a) {
      const i = a.scrollHeight - a.clientHeight;
      oe.value = i > 0 ? Math.min(100, a.scrollTop / i * 100) : 0;
    }
    function Ue(a) {
      const i = Array.from(a.querySelectorAll(".aging-assist-subtitle-char")), r = [];
      if (i.length <= 1)
        return { charsLength: i.length, lines: r };
      const f = (A) => {
        var $;
        return (($ = A.closest(".aging-assist-subtitle-token")) == null ? void 0 : $.offsetTop) ?? A.offsetTop;
      }, R = f(i[0]);
      let N = 0, O = R;
      return i.forEach((A, $) => {
        const V = f(A);
        V <= O + 2 || (r.push({ start: N, end: $, top: O }), N = $, O = V);
      }), r.push({ start: N, end: i.length, top: O }), { charsLength: i.length, lines: r };
    }
    function Ke(a) {
      const i = ee(a);
      return i * i * (3 - 2 * i);
    }
    function ue() {
      var a;
      return ((a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches) ?? !1;
    }
    function Ze() {
      return t.state.speech ? t.state.speechProgress : J.value;
    }
    function je(a, i) {
      if (!t.state.bigText) return 0;
      const { charsLength: r, lines: f } = Ue(a);
      if (r <= 1 || f.length <= 1) return 0;
      const R = ee(Ze());
      if (R >= 1) return i;
      const N = R * r, O = f.findIndex((et) => N < et.end);
      if (O <= 0) return 0;
      const A = f[O], $ = f[O - 1], V = f[0].top, Ye = Math.max(1, A.end - A.start), Qe = Ke((N - A.start) / Ye), De = Math.max(0, $.top - V), _e = Math.max(0, A.top - V);
      return Math.min(i, De + (_e - De) * Qe);
    }
    function we() {
      const a = c.value;
      if (!a) {
        L.value = 0;
        return;
      }
      const i = re.value - a.scrollTop;
      if (Math.abs(i) < 0.5) {
        a.scrollTop = re.value, j(a), L.value = 0;
        return;
      }
      a.scrollTop += i * 0.22, j(a), L.value = window.requestAnimationFrame(we);
    }
    function Ee(a, i, r = !1) {
      if (re.value = i, r || ue()) {
        _(), a.scrollTop = i, j(a);
        return;
      }
      L.value || (L.value = window.requestAnimationFrame(we));
    }
    function I(a = !1) {
      const i = c.value;
      if (!i) return;
      const r = i.scrollHeight - i.clientHeight;
      if (r <= 0) {
        oe.value = 0;
        return;
      }
      Ee(i, je(i, r), a);
    }
    function Ve(a) {
      const i = Math.max(a.replace(/\s+/g, "").length, 8);
      return Math.max(4200, i * 120);
    }
    function ke(a) {
      return `${M.value}|${a.scrollHeight}|${a.clientHeight}`;
    }
    function Ce(a, i = !1) {
      K.value = ke(a), H.value = Ve(M.value);
      const r = a.scrollHeight - a.clientHeight;
      J.value = i && r > 0 ? ee(a.scrollTop / r) : 0, z.value = window.performance.now() - J.value * H.value;
    }
    function Me() {
      const a = c.value;
      if (!a || !t.state.bigText || t.state.speech || ue()) {
        K.value = "", z.value = 0, H.value = 0;
        return;
      }
      if (a.scrollHeight <= a.clientHeight) {
        K.value = "", z.value = 0, H.value = 0, j(a);
        return;
      }
      (ke(a) !== K.value || !H.value) && Ce(a);
      const r = z.value || window.performance.now();
      z.value = r, J.value = ee(
        (window.performance.now() - r) / H.value
      ), I(!0);
    }
    function te(a = !1, i = 0) {
      i === 0 && Z(), !(!t.state.bigText || t.state.speech || ue()) && E(() => {
        const r = c.value;
        if (r) {
          if (r.scrollHeight <= r.clientHeight) {
            i < Fs && (U.value = window.setTimeout(() => {
              U.value = 0, te(a, i + 1);
            }, 120));
            return;
          }
          Ce(r, a), Me();
        }
      });
    }
    function Xe() {
      if (B.value) return;
      const a = () => {
        B.value = 0, Me(), B.value = window.setTimeout(a, 64);
      };
      B.value = window.setTimeout(a, 64);
    }
    function Je() {
      B.value && (window.clearTimeout(B.value), B.value = 0);
    }
    function he() {
      E(() => {
        const a = c.value;
        a && (Ee(a, 0, !0), le.value && I(), te());
      });
    }
    D(M, async () => {
      await xe(), he();
    }), D(() => t.state.subtitleMode, async (a, i) => {
      await xe(a === "simplified" && i !== "simplified"), he();
    }), D(
      () => t.state.bigText,
      (a) => {
        a ? he() : (_(), Z());
      }
    ), D(le, (a) => {
      a ? (Z(), E(I)) : (_(), t.state.speech || te(!0));
    }), D(
      () => t.state.speech,
      (a) => {
        a ? (Z(), E(I)) : te(!0);
      }
    ), D(
      () => t.state.speechRate,
      () => {
        le.value && E(I);
      }
    ), D(
      () => t.state.speechProgress,
      () => {
        !t.state.bigText || !t.state.speech || E(() => {
          I();
        });
      }
    );
    let x = null;
    function Re() {
      var a;
      g("toolbarResize", ((a = v.value) == null ? void 0 : a.getBoundingClientRect().height) ?? 0);
    }
    function ge() {
      x == null || x.disconnect(), x = null, Re(), !(!v.value || typeof ResizeObserver > "u") && (x = new ResizeObserver(Re), x.observe(v.value));
    }
    function Ae() {
      E(ge);
    }
    function We(a) {
      if (a.key === "Escape") {
        a.preventDefault(), g("cancelDanger");
        return;
      }
      if (a.key !== "Tab" || !m.value) return;
      const i = Array.from(
        m.value.querySelectorAll(
          "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
        )
      ).filter((R) => !R.hidden), r = i[0], f = i[i.length - 1];
      !r || !f || (a.shiftKey && document.activeElement === r ? (a.preventDefault(), f.focus()) : !a.shiftKey && document.activeElement === f && (a.preventDefault(), r.focus()));
    }
    return D(
      () => t.state.toolbarOpen,
      async (a) => {
        await E(), a ? ge() : (x == null || x.disconnect(), x = null, g("toolbarResize", 0));
      }
    ), D(
      () => t.state.confirming,
      async (a) => {
        var i, r, f;
        if (a) {
          const R = document.activeElement;
          w.value = R instanceof HTMLElement ? R : null, await E(), (r = (i = m.value) == null ? void 0 : i.querySelector("[data-aging-confirm-primary]")) == null || r.focus();
          return;
        }
        await E(), (f = w.value) != null && f.isConnected && w.value.focus(), w.value = null;
      }
    ), nt(() => {
      Xe(), window.addEventListener("resize", Ae), t.state.toolbarOpen && E(ge);
    }), at(() => {
      window.removeEventListener("resize", Ae), x == null || x.disconnect(), g("toolbarResize", 0), Je(), _(), Z();
    }), (a, i) => (T(), P("div", {
      class: "aging-assist-root",
      "data-aging-assist-root": "",
      "data-theme": s.theme
    }, [
      s.showLauncher && !s.state.toolbarOpen ? (T(), P("button", {
        key: 0,
        class: "aging-assist-launcher",
        type: "button",
        "aria-label": s.labels.openToolbar,
        onClick: i[0] || (i[0] = (r) => g("open"))
      }, [
        d(p(ct), { size: 24 }),
        o("span", null, h(s.labels.launcher), 1)
      ], 8, Ht)) : F("", !0),
      s.state.toolbarOpen ? (T(), P("section", {
        key: 1,
        ref_key: "toolbar",
        ref: v,
        class: b(["aging-assist-toolbar", s.position === "bottom" ? "is-bottom" : "is-top"]),
        role: "toolbar",
        "aria-orientation": "horizontal",
        "aria-label": s.labels.launcher
      }, [
        o("div", zt, [
          o("div", It, [
            o("div", Nt, [
              d(p(ut), { size: 26 })
            ]),
            o("div", qt, [
              o("strong", null, h(s.labels.launcher), 1),
              o("span", null, h(s.labels.tagline), 1)
            ])
          ]),
          o("div", Gt, [
            o("div", Ut, [
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[1] || (i[1] = (r) => g("reset"))
              }, [
                d(p(ht)),
                o("span", null, h(s.labels.reset), 1)
              ]),
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.speech }]),
                type: "button",
                "aria-pressed": s.state.speech,
                onClick: i[2] || (i[2] = (r) => g("toggle", "speech"))
              }, [
                d(p(gt)),
                o("span", null, h(s.labels.speech), 1)
              ], 10, Kt),
              s.state.speech && !s.state.speechPaused ? (T(), P("button", {
                key: 0,
                class: "aging-assist-control",
                type: "button",
                onClick: i[3] || (i[3] = (r) => g("pauseSpeech"))
              }, [
                d(p(dt)),
                o("span", null, h(s.labels.pauseSpeech), 1)
              ])) : F("", !0),
              s.state.speech && s.state.speechPaused ? (T(), P("button", {
                key: 1,
                class: "aging-assist-control",
                type: "button",
                onClick: i[4] || (i[4] = (r) => g("resumeSpeech"))
              }, [
                d(p(pt)),
                o("span", null, h(s.labels.continueSpeech), 1)
              ])) : F("", !0),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[5] || (i[5] = (r) => g("readPrevious"))
              }, [
                d(p(ft)),
                o("span", null, h(s.labels.readPrevious), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[6] || (i[6] = (r) => g("readNext"))
              }, [
                d(p(mt)),
                o("span", null, h(s.labels.readNext), 1)
              ])
            ]),
            o("div", Zt, [
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[7] || (i[7] = (r) => g("fontDown"))
              }, [
                d(p(bt)),
                o("span", null, h(s.labels.fontDown), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[8] || (i[8] = (r) => g("fontUp"))
              }, [
                d(p(St)),
                o("span", null, h(s.labels.fontUp), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[9] || (i[9] = (r) => g("zoomOut"))
              }, [
                d(p(vt)),
                o("span", null, h(s.labels.pageZoomOut), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[10] || (i[10] = (r) => g("zoomIn"))
              }, [
                d(p(yt)),
                o("span", null, h(s.labels.pageZoomIn), 1)
              ])
            ]),
            o("div", jt, [
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.highContrast }]),
                type: "button",
                "aria-pressed": s.state.highContrast,
                onClick: i[11] || (i[11] = (r) => g("toggle", "highContrast"))
              }, [
                d(p(Tt)),
                o("span", null, h(s.labels.highContrast), 1)
              ], 10, Vt),
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.largeCursor }]),
                type: "button",
                "aria-pressed": s.state.largeCursor,
                onClick: i[12] || (i[12] = (r) => g("toggle", "largeCursor"))
              }, [
                d(p(Pt)),
                o("span", null, h(s.labels.largeCursor), 1)
              ], 10, Xt),
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.crosshair }]),
                type: "button",
                "aria-pressed": s.state.crosshair,
                onClick: i[13] || (i[13] = (r) => g("toggle", "crosshair"))
              }, [
                d(p(xt)),
                o("span", null, h(s.labels.crosshair), 1)
              ], 10, Jt),
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.readingGuide }]),
                type: "button",
                "aria-pressed": s.state.readingGuide,
                onClick: i[14] || (i[14] = (r) => g("toggle", "readingGuide"))
              }, [
                d(p(wt)),
                o("span", null, h(s.labels.readingGuide), 1)
              ], 10, Wt),
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.bigText }]),
                type: "button",
                "aria-pressed": s.state.bigText,
                onClick: i[15] || (i[15] = (r) => g("toggle", "bigText"))
              }, [
                d(p(Et)),
                o("span", null, h(s.labels.bigText), 1)
              ], 10, Yt)
            ]),
            o("div", Qt, [
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.simplified }]),
                type: "button",
                "aria-pressed": s.state.simplified,
                onClick: i[16] || (i[16] = (r) => g("toggle", "simplified"))
              }, [
                d(p(kt)),
                o("span", null, h(s.labels.simplified), 1)
              ], 10, _t),
              o("button", {
                class: b(["aging-assist-control", { "is-active": s.state.moreOpen }]),
                type: "button",
                "aria-expanded": s.state.moreOpen,
                "aria-controls": ye.value,
                onClick: i[17] || (i[17] = (r) => g("toggleMore"))
              }, [
                d(p(Ct)),
                o("span", null, h(s.labels.more), 1)
              ], 10, es)
            ])
          ]),
          o("div", ts, [
            o("div", ss, [
              o("label", { for: Te.value }, h(s.labels.speechRate), 9, is),
              o("select", {
                id: Te.value,
                value: s.state.speechRate,
                onChange: i[18] || (i[18] = (r) => g("rate", Number(r.target.value)))
              }, [
                (T(!0), P(Fe, null, Le(l.value, (r) => (T(), P("option", {
                  key: r.value,
                  value: r.value
                }, h(r.label), 9, as))), 128))
              ], 40, ns)
            ]),
            s.state.statusMessage ? (T(), P("p", os, h(s.state.statusMessage), 1)) : F("", !0),
            o("button", {
              class: "aging-assist-control is-danger",
              type: "button",
              onClick: i[19] || (i[19] = (r) => g("disable"))
            }, [
              d(p(Mt)),
              o("span", null, h(s.labels.exit), 1)
            ]),
            o("button", {
              class: "aging-assist-control",
              type: "button",
              "aria-label": s.labels.closeToolbar,
              onClick: i[20] || (i[20] = (r) => g("close"))
            }, [
              d(p(Oe)),
              o("span", null, h(s.labels.closeToolbar), 1)
            ], 8, rs)
          ])
        ])
      ], 10, $t)) : F("", !0),
      s.state.toolbarOpen && s.state.moreOpen ? (T(), P("aside", {
        key: 2,
        id: ye.value,
        class: b(["aging-assist-more", s.position === "bottom" ? "is-bottom" : "is-top"]),
        "aria-labelledby": ve.value
      }, [
        o("h2", { id: ve.value }, h(s.labels.enhancementSettings), 9, cs),
        o("div", us, [
          o("label", hs, [
            o("span", null, [
              d(p(Rt), { size: 20 }),
              se(" " + h(s.labels.focusEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.focusEnhance,
              onChange: i[21] || (i[21] = (r) => Q("focusEnhance", r))
            }, null, 40, gs)
          ]),
          o("label", ds, [
            o("span", null, [
              d(p(At), { size: 20 }),
              se(" " + h(s.labels.clickEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.clickEnhance,
              onChange: i[22] || (i[22] = (r) => Q("clickEnhance", r))
            }, null, 40, ps)
          ]),
          o("label", fs, [
            o("span", null, [
              d(p(Dt), { size: 20 }),
              se(" " + h(s.labels.formEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.formEnhance,
              onChange: i[23] || (i[23] = (r) => Q("formEnhance", r))
            }, null, 40, ms)
          ]),
          o("label", bs, [
            o("span", null, [
              d(p(Ft), { size: 20 }),
              se(" " + h(s.labels.mistakeGuard), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.mistakeGuard,
              onChange: i[24] || (i[24] = (r) => Q("mistakeGuard", r))
            }, null, 40, Ss)
          ])
        ])
      ], 10, ls)) : F("", !0),
      s.state.bigText ? (T(), P("section", {
        key: 3,
        class: b(["aging-assist-bigtext is-bottom", [
          s.position === "top" ? "has-toolbar-top" : "has-toolbar-bottom",
          s.state.speech ? "is-reading" : "is-plain"
        ]]),
        "aria-live": "polite"
      }, [
        o("div", vs, [
          o("p", {
            ref_key: "bigTextScroller",
            ref: c,
            onScroll: i[25] || (i[25] = (r) => j(r.currentTarget))
          }, [
            (T(!0), P(Fe, null, Le(Ne.value, (r, f) => (T(), P("span", {
              key: `${f}-${r}`,
              class: b(["aging-assist-subtitle-token", { "is-pinyin": k.value }])
            }, [
              k.value ? (T(), P("span", ys, h(qe.value[f] || " "), 1)) : F("", !0),
              o("span", Ts, h(r), 1)
            ], 2))), 128))
          ], 544),
          o("span", {
            class: "aging-assist-bigtext-progress",
            style: ot({ transform: `scaleX(${oe.value / 100})` }),
            "aria-hidden": "true"
          }, null, 4)
        ]),
        o("div", Ps, [
          o("div", {
            class: "aging-assist-subtitle-mode",
            role: "group",
            "aria-label": s.labels.subtitleMode
          }, [
            o("span", null, h(s.labels.subtitleMode), 1),
            o("button", {
              type: "button",
              class: b({ "is-active": !k.value }),
              "aria-label": `${s.labels.simplifiedSubtitle}/${s.labels.traditionalSubtitle}`,
              title: `${s.labels.simplifiedSubtitle}/${s.labels.traditionalSubtitle}`,
              "aria-pressed": !k.value,
              onClick: Ge
            }, h(ze.value), 11, ws),
            o("button", {
              type: "button",
              class: b({ "is-active": k.value }),
              "aria-pressed": k.value,
              onClick: i[26] || (i[26] = (r) => g("subtitleMode", "pinyin"))
            }, h(s.labels.pinyinSubtitle), 11, Es)
          ], 8, xs),
          o("button", {
            type: "button",
            "aria-label": s.labels.closeBigText,
            title: s.labels.closeBigText,
            onClick: i[27] || (i[27] = (r) => g("toggle", "bigText"))
          }, [
            d(p(Oe), { size: 28 })
          ], 8, ks)
        ])
      ], 2)) : F("", !0),
      o("div", {
        class: b(["aging-assist-crosshair-x", { "is-visible": s.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      o("div", {
        class: b(["aging-assist-crosshair-y", { "is-visible": s.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      s.state.confirming ? (T(), P("section", {
        key: 4,
        ref_key: "confirmDialog",
        ref: m,
        class: "aging-assist-confirm",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": X.value,
        "aria-describedby": G.value,
        onKeydown: We
      }, [
        o("div", Ms, [
          o("h2", { id: X.value }, h(s.labels.confirmTitle), 9, Rs),
          o("p", { id: G.value }, h(s.labels.confirmDescription), 9, As),
          o("div", Ds, [
            o("button", {
              type: "button",
              onClick: i[28] || (i[28] = (r) => g("cancelDanger"))
            }, h(s.labels.cancel), 1),
            o("button", {
              class: "primary",
              type: "button",
              "data-aging-confirm-primary": "",
              onClick: i[29] || (i[29] = (r) => g("confirmDanger"))
            }, h(s.labels.continue), 1)
          ])
        ])
      ], 40, Cs)) : F("", !0)
    ], 8, Bt));
  }
}), Os = "aging-assist", Bs = "aging-assist-state", pe = {
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
}, Hs = {
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
}, $s = {
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
}, zs = [
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
], Is = /* @__PURE__ */ new Set([0.75, 1, 1.25, 1.5]), Ns = /* @__PURE__ */ new Set(["simplified", "traditional", "pinyin"]);
function be(s) {
  if (!s || typeof s != "object" || Array.isArray(s)) return {};
  const e = s, t = {};
  return zs.forEach((n) => {
    typeof e[n] == "boolean" && Object.assign(t, { [n]: e[n] });
  }), typeof e.fontScale == "number" && Number.isFinite(e.fontScale) && (t.fontScale = fe(e.fontScale, 1, 1.8)), typeof e.pageScale == "number" && Number.isFinite(e.pageScale) && (t.pageScale = fe(e.pageScale, 1, 1.3)), typeof e.speechProgress == "number" && Number.isFinite(e.speechProgress) && (t.speechProgress = fe(e.speechProgress, 0, 1)), Is.has(e.speechRate) && (t.speechRate = e.speechRate), Ns.has(e.subtitleMode) && (t.subtitleMode = e.subtitleMode), typeof e.statusMessage == "string" && (t.statusMessage = e.statusMessage.slice(0, 240)), typeof e.currentText == "string" && (t.currentText = e.currentText.slice(0, 240)), typeof e.readingIndex == "number" && Number.isInteger(e.readingIndex) && (t.readingIndex = Math.max(-1, e.readingIndex)), t;
}
function qs(s) {
  const e = { ...s };
  return e.enabled || (e.toolbarOpen = !1, e.moreOpen = !1, e.confirming = !1, e.speech = !1, e.speechPaused = !1, e.speechProgress = 0), e.toolbarOpen || (e.moreOpen = !1), e.speech || (e.speechPaused = !1, e.speechProgress = 0), e;
}
function fe(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function Gs(s) {
  try {
    const e = window.localStorage.getItem(s);
    return e ? be(JSON.parse(e)) : {};
  } catch {
    return {};
  }
}
function Us(s, e) {
  try {
    window.localStorage.setItem(s, JSON.stringify(e));
  } catch {
  }
}
function Ks(s) {
  try {
    window.localStorage.removeItem(s);
  } catch {
  }
}
function me(s) {
  return s ? typeof s == "string" ? document.querySelector(s) : s : null;
}
function Zs(s, e = {}) {
  const t = document.createElement(s);
  return Object.entries(e).forEach(([n, l]) => {
    t.setAttribute(n, l);
  }), t;
}
function ne(s) {
  var G;
  if (!s || s.closest("[data-aging-assist-root]")) return "";
  const e = s.closest(
    "[data-aging-text], [data-aging-label], button, a, label, input, textarea, select, img, h1, h2, h3, h4, h5, h6, p, li, td, th, summary, [role='button'], [title], [aria-label]"
  ) ?? s, t = e.closest("[data-aging-readable], [data-aging-text]"), n = t && t !== e && !Vs(e) ? t : e, l = n.getAttribute("data-aging-text") || n.getAttribute("data-aging-label"), c = n.getAttribute("aria-label"), v = n.getAttribute("title"), m = n instanceof HTMLImageElement ? n.getAttribute("alt") : "", w = n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement ? n.value || n.placeholder : n instanceof HTMLSelectElement ? ((G = n.selectedOptions[0]) == null ? void 0 : G.textContent) || n.value : "", X = n.textContent || "";
  return $e(l || c || v || m || w || X);
}
function $e(s) {
  return s.replace(/\s+/g, " ").replace(/[|_~`^*#<>[\]{}\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 240);
}
function js(s = document.body) {
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
    return !c || l.width <= 0 || l.height <= 0 || !Xs(n, c) || t.has(c) ? !1 : (t.add(c), !0);
  });
}
function Vs(s) {
  return s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement || s instanceof HTMLSelectElement || s instanceof HTMLButtonElement;
}
function Xs(s, e) {
  return s.matches("[data-aging-text], [data-aging-readable], .qunar-assist-long-text") ? e.length >= 2 : s.matches("h1, h2, h3, p, li, summary") || s.matches("button, a, [role='button'], [title], [aria-label], label") ? e.length >= 4 : e.length >= 6;
}
class Js {
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
    const v = window.speechSynthesis.getVoices().find((m) => m.lang.toLowerCase().startsWith(n.slice(0, 2).toLowerCase()));
    return v && (c.voice = v), c.onstart = () => {
      var m;
      return (m = l.onStart) == null ? void 0 : m.call(l);
    }, c.onboundary = (m) => {
      var w;
      (w = l.onBoundary) == null || w.call(l, Ws(m.charIndex, e.length));
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
function Ws(s, e) {
  return e ? Math.min(1, Math.max(0, s / e)) : 0;
}
let C = null;
class Se {
  constructor(e = {}) {
    u(this, "state");
    u(this, "options");
    u(this, "app", null);
    u(this, "host", null);
    u(this, "labels");
    u(this, "listeners", /* @__PURE__ */ new Set());
    u(this, "speech", new Js());
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
      namespace: e.namespace ?? Os,
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
    const t = this.options.persist ? Gs(this.options.storageKey) : {}, { bigTextDock: n, ...l } = t, {
      bigTextDock: c,
      ...v
    } = e.initialState ?? {};
    this.state = rt({
      ...pe,
      ...l,
      ...be(v),
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
      ...this.options.locale === "en-US" ? $s : Hs,
      ...e.labels
    }, this.options.autoMount && this.mount();
  }
  mount() {
    if (this.app || this.destroyed) return;
    if (C && C !== this && !C.destroyed)
      throw new Error(
        "Aging Assist already has an active instance. Destroy it before mounting another instance."
      );
    const e = me(this.options.container) ?? document.body;
    if (!e) {
      C = this, this.pendingMount || (this.pendingMount = !0, document.addEventListener("DOMContentLoaded", this.onDocumentReady, { once: !0 }));
      return;
    }
    C = this, this.host = Zs("div", {
      id: `${this.options.namespace}-root`,
      "data-aging-assist-root": "true"
    }), e.appendChild(this.host), this.app = lt(Ls, {
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
      ...pe,
      toolbarOpen: !1,
      enabled: !1,
      focusEnhance: !0,
      formEnhance: !0
    }), this.options.persist && Ks(this.options.storageKey), this.applyEffects(), this.restoreToolbarFocus(), this.emit("disable");
  }
  reset() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.clearReadTarget(), this.setState({
      ...pe,
      enabled: !0,
      toolbarOpen: !0,
      focusEnhance: !0,
      formEnhance: !0
    }), this.emit("reset");
  }
  destroy() {
    var e, t;
    this.destroyed = !0, document.removeEventListener("DOMContentLoaded", this.onDocumentReady), this.pendingMount = !1, this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.crosshairFrame && window.cancelAnimationFrame(this.crosshairFrame), this.crosshairFrame = 0, this.crosshairPoint = null, this.clearReadTarget(), this.unbindTrigger(), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("focusin", this.onFocusIn), document.removeEventListener("pointerup", this.onPointerUp), document.removeEventListener("click", this.onDangerClick, !0), document.removeEventListener("submit", this.onDangerSubmit, !0), (e = this.app) == null || e.unmount(), (t = this.host) == null || t.remove(), this.app = null, this.host = null, this.removeRootEffects(), C === this && (C = null);
  }
  speak(e) {
    const t = $e(e);
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
    const t = be(e);
    if (!Object.keys(t).length) return;
    const n = this.getState(), l = qs({ ...this.state, ...t });
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
        this.setState({ fontScale: q(this.state.fontScale + 0.1, 1, 1.8) });
        break;
      case "fontDown":
        this.setState({ fontScale: q(this.state.fontScale - 0.1, 1, 1.8) });
        break;
      case "zoomIn":
        this.setState({ pageScale: q(this.state.pageScale + 0.05, 1, 1.3) });
        break;
      case "zoomOut":
        this.setState({ pageScale: q(this.state.pageScale - 0.05, 1, 1.3) });
        break;
      case "toggle":
        Be(t) && this.toggle(t);
        break;
      case "setBoolean": {
        const n = t;
        Be(n == null ? void 0 : n.key) && typeof n.value == "boolean" && this.setBoolean(n.key, n.value);
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
    const t = js();
    if (!t.length) return;
    const n = q(this.state.readingIndex + e, 0, t.length - 1), l = t[n], c = ne(l);
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
    const e = me(this.options.trigger);
    e == null || e.addEventListener("click", this.onTriggerClick);
  }
  unbindTrigger() {
    const e = me(this.options.trigger);
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
    const t = Math.max(this.state.speechProgress, q(e, 0, 1));
    Math.abs(this.state.speechProgress - t) < 0.01 && t !== 0 && t !== 1 || (this.state.speechProgress = t, this.notify());
  }
  startSpeechProgressClock(e) {
    this.stopSpeechProgressClock(), this.speechProgressElapsed = 0, this.speechProgressDuration = Ys(e, this.state.speechRate), this.speechProgressStartedAt = window.performance.now(), this.queueSpeechProgressTick();
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
      const l = Number.parseFloat(window.getComputedStyle(n).fontSize), c = n.parentElement, v = c ? Number.parseFloat(window.getComputedStyle(c).fontSize) : Number.NaN;
      Number.isFinite(v) && Math.abs(l - v) < 0.01 || !Number.isFinite(l) || l <= 0 || this.fontScaleElements.set(n, {
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
    Us(this.options.storageKey, e);
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
    return C && !C.destroyed ? C : null;
  }
}
function q(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function Ys(s, e) {
  const t = Math.max(s.replace(/\s+/g, "").length, 8);
  return Math.max(2600, t * 210 / e);
}
function Be(s) {
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
const Qs = "0.1.1";
function ae(s = {}) {
  return Se.getActiveInstance() ?? new Se(s);
}
const si = ae, ii = ae;
typeof window < "u" && (window.AgingAssist = {
  create: ae,
  init: ae,
  AgingAssist: Se,
  version: Qs
});
export {
  Se as AgingAssist,
  Qs as VERSION,
  si as create,
  ae as createAgingAssist,
  ii as init
};
