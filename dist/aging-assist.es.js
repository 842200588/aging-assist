var tt = Object.defineProperty;
var st = (s, e, t) => e in s ? tt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var u = (s, e, t) => st(s, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as it, computed as y, ref as b, watch as D, nextTick as k, onMounted as at, onBeforeUnmount as nt, openBlock as T, createElementBlock as P, createVNode as g, unref as f, createElementVNode as o, toDisplayString as h, createCommentVNode as F, normalizeClass as S, Fragment as Fe, renderList as Le, createTextVNode as se, normalizeStyle as ot, reactive as rt, createApp as lt } from "vue";
import { BadgeCheck as ct, Sparkles as ut, ListRestart as ht, Volume2 as dt, Pause as gt, Play as ft, AudioLines as pt, Rows3 as mt, Baseline as bt, Type as St, Minimize2 as vt, Maximize2 as yt, Contrast as Tt, MousePointer2 as Pt, Crosshair as wt, ScanEye as xt, ALargeSmall as kt, Zap as Ct, CircleOff as Et, X as Oe, Focus as Mt, MousePointerClick as Rt, Hand as At, ShieldAlert as Dt } from "lucide-vue-next";
let ie = null, ge = null;
function He() {
  return ge ? Promise.resolve(ge) : ie || (ie = import("./subtitle-runtime-CtSRJvvb.js").then((s) => ({
    convert: s.convertSubtitleRuntime,
    pinyinParts: s.convertPinyinPartsRuntime
  })), ie.then((s) => (ge = s, s)));
}
async function Ft(s, e) {
  return (await He()).convert(s, e);
}
async function Lt(s) {
  return (await He()).pinyinParts(s);
}
const Ot = ["data-theme"], Bt = ["aria-label"], Ht = ["aria-label"], $t = { class: "aging-assist-shell" }, zt = { class: "aging-assist-brand" }, It = {
  class: "aging-assist-mark",
  "aria-hidden": "true"
}, Nt = { class: "aging-assist-title" }, qt = { class: "aging-assist-groups" }, Gt = { class: "aging-assist-group" }, Ut = ["aria-pressed"], Kt = { class: "aging-assist-group" }, Zt = { class: "aging-assist-group" }, jt = ["aria-pressed", "title"], Vt = ["aria-pressed"], Xt = ["aria-pressed"], Jt = ["aria-pressed"], Wt = ["aria-pressed"], Yt = { class: "aging-assist-group" }, Qt = ["aria-expanded", "aria-controls"], _t = { class: "aging-assist-status" }, es = { class: "aging-assist-rate" }, ts = ["for"], ss = ["id", "value"], is = ["value"], as = {
  key: 0,
  class: "aging-assist-message",
  role: "status"
}, ns = ["aria-label"], os = ["id", "aria-labelledby"], rs = ["id"], ls = { class: "aging-assist-switches" }, cs = { class: "aging-assist-switch" }, us = ["checked"], hs = { class: "aging-assist-switch" }, ds = ["checked"], gs = { class: "aging-assist-switch" }, fs = ["checked"], ps = { class: "aging-assist-switch" }, ms = ["checked"], bs = { class: "aging-assist-bigtext-window" }, Ss = {
  key: 0,
  class: "aging-assist-subtitle-pinyin"
}, vs = { class: "aging-assist-subtitle-char" }, ys = { class: "aging-assist-bigtext-actions" }, Ts = ["aria-label"], Ps = ["aria-label", "title", "aria-pressed"], ws = ["aria-pressed"], xs = ["aria-label", "title"], ks = ["aria-labelledby", "aria-describedby"], Cs = { class: "aging-assist-confirm-box" }, Es = ["id"], Ms = ["id"], Rs = { class: "aging-assist-confirm-actions" }, As = 8, Ds = /* @__PURE__ */ it({
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
    const t = s, a = e, l = y(() => [
      { label: t.labels.slowRate, value: 0.75 },
      { label: t.labels.standardRate, value: 1 },
      { label: t.labels.fasterRate, value: 1.25 },
      { label: t.labels.fastRate, value: 1.5 }
    ]), c = b(null), v = b(null), m = b(null), x = b(null), X = y(() => `${t.idPrefix}-confirm-title`), G = y(() => `${t.idPrefix}-confirm-description`), ve = y(() => `${t.idPrefix}-settings-title`), ye = y(() => `${t.idPrefix}-settings`), Te = y(() => `${t.idPrefix}-rate`), oe = b(0), re = b(0), L = b(0), J = b(0), U = b(0), B = b(0), K = b(""), z = b(0), H = b(0), M = y(
      () => t.state.currentText || t.labels.bigTextHint
    ), le = y(
      () => t.state.bigText && t.state.speech && !t.state.speechPaused
    ), W = b(M.value), Y = b([]), C = y(() => t.state.subtitleMode === "pinyin"), Pe = y(() => t.state.subtitleMode === "traditional"), ze = y(() => C.value ? `${t.labels.simplifiedSubtitle.slice(0, 1)}/${t.labels.traditionalSubtitle.slice(0, 1)}` : Pe.value ? t.labels.simplifiedSubtitle : t.labels.traditionalSubtitle), Ie = y(() => C.value ? M.value : W.value), Ne = y(() => Array.from(Ie.value)), qe = y(() => C.value ? Y.value.flatMap((n) => {
      const i = Array.from(n.origin);
      return i.map((r) => i.length === 1 ? n.pinyin : "");
    }) : []);
    function Ge() {
      d(
        "subtitleMode",
        Pe.value || C.value ? "simplified" : "traditional"
      );
    }
    function d(n, i) {
      a("action", n, i);
    }
    let ce = 0;
    async function we(n = !1) {
      const i = ++ce;
      if (t.state.subtitleMode === "simplified" && !n) {
        W.value = M.value, Y.value = [];
        return;
      }
      if (t.state.subtitleMode === "pinyin") {
        const p = await Lt(M.value);
        if (i !== ce) return;
        Y.value = p, W.value = M.value;
        return;
      }
      const r = await Ft(M.value, t.state.subtitleMode);
      i === ce && (Y.value = [], W.value = r);
    }
    function Q(n, i) {
      d("setBoolean", {
        key: n,
        value: i.target.checked
      });
    }
    function _() {
      L.value && (window.cancelAnimationFrame(L.value), L.value = 0);
    }
    function Z() {
      U.value && window.clearTimeout(U.value), U.value = 0, K.value = "", z.value = 0, H.value = 0;
    }
    function ee(n) {
      return Math.min(1, Math.max(0, n));
    }
    function j(n) {
      const i = n.scrollHeight - n.clientHeight;
      oe.value = i > 0 ? Math.min(100, n.scrollTop / i * 100) : 0;
    }
    function Ue(n) {
      const i = Array.from(n.querySelectorAll(".aging-assist-subtitle-char")), r = [];
      if (i.length <= 1)
        return { charsLength: i.length, lines: r };
      const p = (A) => {
        var $;
        return (($ = A.closest(".aging-assist-subtitle-token")) == null ? void 0 : $.offsetTop) ?? A.offsetTop;
      }, R = p(i[0]);
      let N = 0, O = R;
      return i.forEach((A, $) => {
        const V = p(A);
        V <= O + 2 || (r.push({ start: N, end: $, top: O }), N = $, O = V);
      }), r.push({ start: N, end: i.length, top: O }), { charsLength: i.length, lines: r };
    }
    function Ke(n) {
      const i = ee(n);
      return i * i * (3 - 2 * i);
    }
    function ue() {
      var n;
      return ((n = window.matchMedia) == null ? void 0 : n.call(window, "(prefers-reduced-motion: reduce)").matches) ?? !1;
    }
    function Ze() {
      return t.state.speech ? t.state.speechProgress : J.value;
    }
    function je(n, i) {
      if (!t.state.bigText) return 0;
      const { charsLength: r, lines: p } = Ue(n);
      if (r <= 1 || p.length <= 1) return 0;
      const R = ee(Ze());
      if (R >= 1) return i;
      const N = R * r, O = p.findIndex((et) => N < et.end);
      if (O <= 0) return 0;
      const A = p[O], $ = p[O - 1], V = p[0].top, Ye = Math.max(1, A.end - A.start), Qe = Ke((N - A.start) / Ye), De = Math.max(0, $.top - V), _e = Math.max(0, A.top - V);
      return Math.min(i, De + (_e - De) * Qe);
    }
    function xe() {
      const n = c.value;
      if (!n) {
        L.value = 0;
        return;
      }
      const i = re.value - n.scrollTop;
      if (Math.abs(i) < 0.5) {
        n.scrollTop = re.value, j(n), L.value = 0;
        return;
      }
      n.scrollTop += i * 0.22, j(n), L.value = window.requestAnimationFrame(xe);
    }
    function ke(n, i, r = !1) {
      if (re.value = i, r || ue()) {
        _(), n.scrollTop = i, j(n);
        return;
      }
      L.value || (L.value = window.requestAnimationFrame(xe));
    }
    function I(n = !1) {
      const i = c.value;
      if (!i) return;
      const r = i.scrollHeight - i.clientHeight;
      if (r <= 0) {
        oe.value = 0;
        return;
      }
      ke(i, je(i, r), n);
    }
    function Ve(n) {
      const i = Math.max(n.replace(/\s+/g, "").length, 8);
      return Math.max(4200, i * 120);
    }
    function Ce(n) {
      return `${M.value}|${n.scrollHeight}|${n.clientHeight}`;
    }
    function Ee(n, i = !1) {
      K.value = Ce(n), H.value = Ve(M.value);
      const r = n.scrollHeight - n.clientHeight;
      J.value = i && r > 0 ? ee(n.scrollTop / r) : 0, z.value = window.performance.now() - J.value * H.value;
    }
    function Me() {
      const n = c.value;
      if (!n || !t.state.bigText || t.state.speech || ue()) {
        K.value = "", z.value = 0, H.value = 0;
        return;
      }
      if (n.scrollHeight <= n.clientHeight) {
        K.value = "", z.value = 0, H.value = 0, j(n);
        return;
      }
      (Ce(n) !== K.value || !H.value) && Ee(n);
      const r = z.value || window.performance.now();
      z.value = r, J.value = ee(
        (window.performance.now() - r) / H.value
      ), I(!0);
    }
    function te(n = !1, i = 0) {
      i === 0 && Z(), !(!t.state.bigText || t.state.speech || ue()) && k(() => {
        const r = c.value;
        if (r) {
          if (r.scrollHeight <= r.clientHeight) {
            i < As && (U.value = window.setTimeout(() => {
              U.value = 0, te(n, i + 1);
            }, 120));
            return;
          }
          Ee(r, n), Me();
        }
      });
    }
    function Xe() {
      if (B.value) return;
      const n = () => {
        B.value = 0, Me(), B.value = window.setTimeout(n, 64);
      };
      B.value = window.setTimeout(n, 64);
    }
    function Je() {
      B.value && (window.clearTimeout(B.value), B.value = 0);
    }
    function he() {
      k(() => {
        const n = c.value;
        n && (ke(n, 0, !0), le.value && I(), te());
      });
    }
    D(M, async () => {
      await we(), he();
    }), D(() => t.state.subtitleMode, async (n, i) => {
      await we(n === "simplified" && i !== "simplified"), he();
    }), D(
      () => t.state.bigText,
      (n) => {
        n ? he() : (_(), Z());
      }
    ), D(le, (n) => {
      n ? (Z(), k(I)) : (_(), t.state.speech || te(!0));
    }), D(
      () => t.state.speech,
      (n) => {
        n ? (Z(), k(I)) : te(!0);
      }
    ), D(
      () => t.state.speechRate,
      () => {
        le.value && k(I);
      }
    ), D(
      () => t.state.speechProgress,
      () => {
        !t.state.bigText || !t.state.speech || k(() => {
          I();
        });
      }
    );
    let w = null;
    function Re() {
      var n;
      d("toolbarResize", ((n = v.value) == null ? void 0 : n.getBoundingClientRect().height) ?? 0);
    }
    function de() {
      w == null || w.disconnect(), w = null, Re(), !(!v.value || typeof ResizeObserver > "u") && (w = new ResizeObserver(Re), w.observe(v.value));
    }
    function Ae() {
      k(de);
    }
    function We(n) {
      if (n.key === "Escape") {
        n.preventDefault(), d("cancelDanger");
        return;
      }
      if (n.key !== "Tab" || !m.value) return;
      const i = Array.from(
        m.value.querySelectorAll(
          "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
        )
      ).filter((R) => !R.hidden), r = i[0], p = i[i.length - 1];
      !r || !p || (n.shiftKey && document.activeElement === r ? (n.preventDefault(), p.focus()) : !n.shiftKey && document.activeElement === p && (n.preventDefault(), r.focus()));
    }
    return D(
      () => t.state.toolbarOpen,
      async (n) => {
        await k(), n ? de() : (w == null || w.disconnect(), w = null, d("toolbarResize", 0));
      }
    ), D(
      () => t.state.confirming,
      async (n) => {
        var i, r, p;
        if (n) {
          const R = document.activeElement;
          x.value = R instanceof HTMLElement ? R : null, await k(), (r = (i = m.value) == null ? void 0 : i.querySelector("[data-aging-confirm-primary]")) == null || r.focus();
          return;
        }
        await k(), (p = x.value) != null && p.isConnected && x.value.focus(), x.value = null;
      }
    ), at(() => {
      Xe(), window.addEventListener("resize", Ae), t.state.toolbarOpen && k(de);
    }), nt(() => {
      window.removeEventListener("resize", Ae), w == null || w.disconnect(), d("toolbarResize", 0), Je(), _(), Z();
    }), (n, i) => (T(), P("div", {
      class: "aging-assist-root",
      "data-aging-assist-root": "",
      "data-theme": s.theme
    }, [
      s.showLauncher && !s.state.toolbarOpen ? (T(), P("button", {
        key: 0,
        class: "aging-assist-launcher",
        type: "button",
        "aria-label": s.labels.openToolbar,
        onClick: i[0] || (i[0] = (r) => d("open"))
      }, [
        g(f(ct), { size: 24 }),
        o("span", null, h(s.labels.launcher), 1)
      ], 8, Bt)) : F("", !0),
      s.state.toolbarOpen ? (T(), P("section", {
        key: 1,
        ref_key: "toolbar",
        ref: v,
        class: S(["aging-assist-toolbar", s.position === "bottom" ? "is-bottom" : "is-top"]),
        role: "toolbar",
        "aria-orientation": "horizontal",
        "aria-label": s.labels.launcher
      }, [
        o("div", $t, [
          o("div", zt, [
            o("div", It, [
              g(f(ut), { size: 26 })
            ]),
            o("div", Nt, [
              o("strong", null, h(s.labels.launcher), 1),
              o("span", null, h(s.labels.tagline), 1)
            ])
          ]),
          o("div", qt, [
            o("div", Gt, [
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[1] || (i[1] = (r) => d("reset"))
              }, [
                g(f(ht)),
                o("span", null, h(s.labels.reset), 1)
              ]),
              o("button", {
                class: S(["aging-assist-control", { "is-active": s.state.speech }]),
                type: "button",
                "aria-pressed": s.state.speech,
                onClick: i[2] || (i[2] = (r) => d("toggle", "speech"))
              }, [
                g(f(dt)),
                o("span", null, h(s.labels.speech), 1)
              ], 10, Ut),
              s.state.speech && !s.state.speechPaused ? (T(), P("button", {
                key: 0,
                class: "aging-assist-control",
                type: "button",
                onClick: i[3] || (i[3] = (r) => d("pauseSpeech"))
              }, [
                g(f(gt)),
                o("span", null, h(s.labels.pauseSpeech), 1)
              ])) : F("", !0),
              s.state.speech && s.state.speechPaused ? (T(), P("button", {
                key: 1,
                class: "aging-assist-control",
                type: "button",
                onClick: i[4] || (i[4] = (r) => d("resumeSpeech"))
              }, [
                g(f(ft)),
                o("span", null, h(s.labels.continueSpeech), 1)
              ])) : F("", !0),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[5] || (i[5] = (r) => d("readPrevious"))
              }, [
                g(f(pt)),
                o("span", null, h(s.labels.readPrevious), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[6] || (i[6] = (r) => d("readNext"))
              }, [
                g(f(mt)),
                o("span", null, h(s.labels.readNext), 1)
              ])
            ]),
            o("div", Kt, [
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[7] || (i[7] = (r) => d("fontDown"))
              }, [
                g(f(bt)),
                o("span", null, h(s.labels.fontDown), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[8] || (i[8] = (r) => d("fontUp"))
              }, [
                g(f(St)),
                o("span", null, h(s.labels.fontUp), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[9] || (i[9] = (r) => d("zoomOut"))
              }, [
                g(f(vt)),
                o("span", null, h(s.labels.pageZoomOut), 1)
              ]),
              o("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[10] || (i[10] = (r) => d("zoomIn"))
              }, [
                g(f(yt)),
                o("span", null, h(s.labels.pageZoomIn), 1)
              ])
            ]),
            o("div", Zt, [
              o("button", {
                class: S(["aging-assist-control", { "is-active": s.state.highContrast }]),
                type: "button",
                "aria-pressed": s.state.highContrast,
                title: s.labels.highContrast,
                onClick: i[11] || (i[11] = (r) => d("toggle", "highContrast"))
              }, [
                g(f(Tt)),
                o("span", null, h(s.labels.highContrast), 1)
              ], 10, jt),
              o("button", {
                class: S(["aging-assist-control", { "is-active": s.state.largeCursor }]),
                type: "button",
                "aria-pressed": s.state.largeCursor,
                onClick: i[12] || (i[12] = (r) => d("toggle", "largeCursor"))
              }, [
                g(f(Pt)),
                o("span", null, h(s.labels.largeCursor), 1)
              ], 10, Vt),
              o("button", {
                class: S(["aging-assist-control", { "is-active": s.state.crosshair }]),
                type: "button",
                "aria-pressed": s.state.crosshair,
                onClick: i[13] || (i[13] = (r) => d("toggle", "crosshair"))
              }, [
                g(f(wt)),
                o("span", null, h(s.labels.crosshair), 1)
              ], 10, Xt),
              o("button", {
                class: S(["aging-assist-control", { "is-active": s.state.readingGuide }]),
                type: "button",
                "aria-pressed": s.state.readingGuide,
                onClick: i[14] || (i[14] = (r) => d("toggle", "readingGuide"))
              }, [
                g(f(xt)),
                o("span", null, h(s.labels.readingGuide), 1)
              ], 10, Jt),
              o("button", {
                class: S(["aging-assist-control", { "is-active": s.state.bigText }]),
                type: "button",
                "aria-pressed": s.state.bigText,
                onClick: i[15] || (i[15] = (r) => d("toggle", "bigText"))
              }, [
                g(f(kt)),
                o("span", null, h(s.labels.bigText), 1)
              ], 10, Wt)
            ]),
            o("div", Yt, [
              o("button", {
                class: S(["aging-assist-control", { "is-active": s.state.moreOpen }]),
                type: "button",
                "aria-expanded": s.state.moreOpen,
                "aria-controls": ye.value,
                onClick: i[16] || (i[16] = (r) => d("toggleMore"))
              }, [
                g(f(Ct)),
                o("span", null, h(s.labels.more), 1)
              ], 10, Qt)
            ])
          ]),
          o("div", _t, [
            o("div", es, [
              o("label", { for: Te.value }, h(s.labels.speechRate), 9, ts),
              o("select", {
                id: Te.value,
                value: s.state.speechRate,
                onChange: i[17] || (i[17] = (r) => d("rate", Number(r.target.value)))
              }, [
                (T(!0), P(Fe, null, Le(l.value, (r) => (T(), P("option", {
                  key: r.value,
                  value: r.value
                }, h(r.label), 9, is))), 128))
              ], 40, ss)
            ]),
            s.state.statusMessage ? (T(), P("p", as, h(s.state.statusMessage), 1)) : F("", !0),
            o("button", {
              class: "aging-assist-control is-danger",
              type: "button",
              onClick: i[18] || (i[18] = (r) => d("disable"))
            }, [
              g(f(Et)),
              o("span", null, h(s.labels.exit), 1)
            ]),
            o("button", {
              class: "aging-assist-control",
              type: "button",
              "aria-label": s.labels.closeToolbar,
              onClick: i[19] || (i[19] = (r) => d("close"))
            }, [
              g(f(Oe)),
              o("span", null, h(s.labels.closeToolbar), 1)
            ], 8, ns)
          ])
        ])
      ], 10, Ht)) : F("", !0),
      s.state.toolbarOpen && s.state.moreOpen ? (T(), P("aside", {
        key: 2,
        id: ye.value,
        class: S(["aging-assist-more", s.position === "bottom" ? "is-bottom" : "is-top"]),
        "aria-labelledby": ve.value
      }, [
        o("h2", { id: ve.value }, h(s.labels.enhancementSettings), 9, rs),
        o("div", ls, [
          o("label", cs, [
            o("span", null, [
              g(f(Mt), { size: 20 }),
              se(" " + h(s.labels.focusEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.focusEnhance,
              onChange: i[20] || (i[20] = (r) => Q("focusEnhance", r))
            }, null, 40, us)
          ]),
          o("label", hs, [
            o("span", null, [
              g(f(Rt), { size: 20 }),
              se(" " + h(s.labels.clickEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.clickEnhance,
              onChange: i[21] || (i[21] = (r) => Q("clickEnhance", r))
            }, null, 40, ds)
          ]),
          o("label", gs, [
            o("span", null, [
              g(f(At), { size: 20 }),
              se(" " + h(s.labels.formEnhance), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.formEnhance,
              onChange: i[22] || (i[22] = (r) => Q("formEnhance", r))
            }, null, 40, fs)
          ]),
          o("label", ps, [
            o("span", null, [
              g(f(Dt), { size: 20 }),
              se(" " + h(s.labels.mistakeGuard), 1)
            ]),
            o("input", {
              type: "checkbox",
              checked: s.state.mistakeGuard,
              onChange: i[23] || (i[23] = (r) => Q("mistakeGuard", r))
            }, null, 40, ms)
          ])
        ])
      ], 10, os)) : F("", !0),
      s.state.bigText ? (T(), P("section", {
        key: 3,
        class: S(["aging-assist-bigtext is-bottom", [
          s.position === "top" ? "has-toolbar-top" : "has-toolbar-bottom",
          s.state.speech ? "is-reading" : "is-plain"
        ]]),
        "aria-live": "polite"
      }, [
        o("div", bs, [
          o("p", {
            ref_key: "bigTextScroller",
            ref: c,
            onScroll: i[24] || (i[24] = (r) => j(r.currentTarget))
          }, [
            (T(!0), P(Fe, null, Le(Ne.value, (r, p) => (T(), P("span", {
              key: `${p}-${r}`,
              class: S(["aging-assist-subtitle-token", { "is-pinyin": C.value }])
            }, [
              C.value ? (T(), P("span", Ss, h(qe.value[p] || " "), 1)) : F("", !0),
              o("span", vs, h(r), 1)
            ], 2))), 128))
          ], 544),
          o("span", {
            class: "aging-assist-bigtext-progress",
            style: ot({ transform: `scaleX(${oe.value / 100})` }),
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
            o("button", {
              type: "button",
              class: S({ "is-active": !C.value }),
              "aria-label": `${s.labels.simplifiedSubtitle}/${s.labels.traditionalSubtitle}`,
              title: `${s.labels.simplifiedSubtitle}/${s.labels.traditionalSubtitle}`,
              "aria-pressed": !C.value,
              onClick: Ge
            }, h(ze.value), 11, Ps),
            o("button", {
              type: "button",
              class: S({ "is-active": C.value }),
              "aria-pressed": C.value,
              onClick: i[25] || (i[25] = (r) => d("subtitleMode", "pinyin"))
            }, h(s.labels.pinyinSubtitle), 11, ws)
          ], 8, Ts),
          o("button", {
            type: "button",
            "aria-label": s.labels.closeBigText,
            title: s.labels.closeBigText,
            onClick: i[26] || (i[26] = (r) => d("toggle", "bigText"))
          }, [
            g(f(Oe), { size: 28 })
          ], 8, xs)
        ])
      ], 2)) : F("", !0),
      o("div", {
        class: S(["aging-assist-crosshair-x", { "is-visible": s.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      o("div", {
        class: S(["aging-assist-crosshair-y", { "is-visible": s.state.crosshair }]),
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
        o("div", Cs, [
          o("h2", { id: X.value }, h(s.labels.confirmTitle), 9, Es),
          o("p", { id: G.value }, h(s.labels.confirmDescription), 9, Ms),
          o("div", Rs, [
            o("button", {
              type: "button",
              onClick: i[27] || (i[27] = (r) => d("cancelDanger"))
            }, h(s.labels.cancel), 1),
            o("button", {
              class: "primary",
              type: "button",
              "data-aging-confirm-primary": "",
              onClick: i[28] || (i[28] = (r) => d("confirmDanger"))
            }, h(s.labels.continue), 1)
          ])
        ])
      ], 40, ks)) : F("", !0)
    ], 8, Ot));
  }
}), Fs = "aging-assist", Ls = "aging-assist-state", fe = {
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
}, Os = {
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
}, Bs = {
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
}, Hs = [
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
], $s = /* @__PURE__ */ new Set([0.75, 1, 1.25, 1.5]), zs = /* @__PURE__ */ new Set(["simplified", "traditional", "pinyin"]), Is = /* @__PURE__ */ new Set([
  "standard",
  "white-black-blue",
  "blue-yellow-white",
  "yellow-black-blue",
  "black-yellow-white"
]), Ns = /* @__PURE__ */ new Set(["black-yellow", "blue", "gray"]);
function qs(s) {
  if (Is.has(s)) return s;
  if (Ns.has(s))
    return s === "black-yellow" ? "black-yellow-white" : s === "blue" ? "blue-yellow-white" : "yellow-black-blue";
}
function be(s) {
  if (!s || typeof s != "object" || Array.isArray(s)) return {};
  const e = s, t = {};
  Hs.forEach((l) => {
    typeof e[l] == "boolean" && Object.assign(t, { [l]: e[l] });
  }), typeof e.fontScale == "number" && Number.isFinite(e.fontScale) && (t.fontScale = pe(e.fontScale, 1, 1.8)), typeof e.pageScale == "number" && Number.isFinite(e.pageScale) && (t.pageScale = pe(e.pageScale, 1, 1.3));
  const a = qs(e.contrastMode);
  return a && (t.contrastMode = a), typeof e.speechProgress == "number" && Number.isFinite(e.speechProgress) && (t.speechProgress = pe(e.speechProgress, 0, 1)), $s.has(e.speechRate) && (t.speechRate = e.speechRate), zs.has(e.subtitleMode) && (t.subtitleMode = e.subtitleMode), typeof e.statusMessage == "string" && (t.statusMessage = e.statusMessage.slice(0, 240)), typeof e.currentText == "string" && (t.currentText = e.currentText.slice(0, 240)), typeof e.readingIndex == "number" && Number.isInteger(e.readingIndex) && (t.readingIndex = Math.max(-1, e.readingIndex)), t;
}
function Gs(s) {
  const e = { ...s };
  return e.enabled || (e.toolbarOpen = !1, e.moreOpen = !1, e.confirming = !1, e.speech = !1, e.speechPaused = !1, e.speechProgress = 0), e.toolbarOpen || (e.moreOpen = !1), e.speech || (e.speechPaused = !1, e.speechProgress = 0), e;
}
function pe(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function Us(s) {
  try {
    const e = window.localStorage.getItem(s);
    return e ? be(JSON.parse(e)) : {};
  } catch {
    return {};
  }
}
function Ks(s, e) {
  try {
    window.localStorage.setItem(s, JSON.stringify(e));
  } catch {
  }
}
function Zs(s) {
  try {
    window.localStorage.removeItem(s);
  } catch {
  }
}
function me(s) {
  return s ? typeof s == "string" ? document.querySelector(s) : s : null;
}
function js(s, e = {}) {
  const t = document.createElement(s);
  return Object.entries(e).forEach(([a, l]) => {
    t.setAttribute(a, l);
  }), t;
}
function ae(s) {
  var G;
  if (!s || s.closest("[data-aging-assist-root]")) return "";
  const e = s.closest(
    "[data-aging-text], [data-aging-label], button, a, label, input, textarea, select, img, h1, h2, h3, h4, h5, h6, p, li, td, th, summary, [role='button'], [title], [aria-label]"
  ) ?? s, t = e.closest("[data-aging-readable], [data-aging-text]"), a = t && t !== e && !Xs(e) ? t : e, l = a.getAttribute("data-aging-text") || a.getAttribute("data-aging-label"), c = a.getAttribute("aria-label"), v = a.getAttribute("title"), m = a instanceof HTMLImageElement ? a.getAttribute("alt") : "", x = a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement ? a.value || a.placeholder : a instanceof HTMLSelectElement ? ((G = a.selectedOptions[0]) == null ? void 0 : G.textContent) || a.value : "", X = a.textContent || "";
  return $e(l || c || v || m || x || X);
}
function $e(s) {
  return s.replace(/\s+/g, " ").replace(/[|_~`^*#<>[\]{}\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 240);
}
function Vs(s = document.body) {
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
  return Array.from(s.querySelectorAll(e)).filter((a) => {
    if (a.closest("[data-aging-assist-root]") || a.closest("[data-aging-ignore], .qunar-assist-hide") || a.closest("[data-aging-readable]") && !a.matches("[data-aging-readable]"))
      return !1;
    const l = a.getBoundingClientRect(), c = ae(a);
    return !c || l.width <= 0 || l.height <= 0 || !Js(a, c) || t.has(c) ? !1 : (t.add(c), !0);
  });
}
function Xs(s) {
  return s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement || s instanceof HTMLSelectElement || s instanceof HTMLButtonElement;
}
function Js(s, e) {
  return s.matches("[data-aging-text], [data-aging-readable], .qunar-assist-long-text") ? e.length >= 2 : s.matches("h1, h2, h3, p, li, summary") || s.matches("button, a, [role='button'], [title], [aria-label], label") ? e.length >= 4 : e.length >= 6;
}
class Ws {
  constructor() {
    u(this, "utterance", null);
  }
  get supported() {
    return typeof window < "u" && "speechSynthesis" in window;
  }
  speak(e, t, a, l = {}) {
    if (!this.supported || !e) return !1;
    this.stop();
    const c = new SpeechSynthesisUtterance(e);
    c.lang = a, c.rate = t, c.pitch = 1, c.volume = 1;
    const v = window.speechSynthesis.getVoices().find((m) => m.lang.toLowerCase().startsWith(a.slice(0, 2).toLowerCase()));
    return v && (c.voice = v), c.onstart = () => {
      var m;
      return (m = l.onStart) == null ? void 0 : m.call(l);
    }, c.onboundary = (m) => {
      var x;
      (x = l.onBoundary) == null || x.call(l, Ys(m.charIndex, e.length));
    }, c.onend = () => {
      var m, x;
      this.utterance === c && ((m = l.onBoundary) == null || m.call(l, 1), (x = l.onEnd) == null || x.call(l), this.utterance = null);
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
function Ys(s, e) {
  return e ? Math.min(1, Math.max(0, s / e)) : 0;
}
let E = null;
class Se {
  constructor(e = {}) {
    u(this, "state");
    u(this, "options");
    u(this, "app", null);
    u(this, "host", null);
    u(this, "labels");
    u(this, "listeners", /* @__PURE__ */ new Set());
    u(this, "speech", new Ws());
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
      const t = e.target instanceof HTMLFormElement ? e.target : null, a = e.submitter instanceof HTMLElement ? e.submitter : null, l = this.findDangerElement(a) ?? (t != null && t.matches(this.options.dangerousSelector) ? t : null);
      !l || l.dataset.agingAssistConfirmed === "true" || (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.requestDangerConfirmation(l, () => {
        t && (typeof t.requestSubmit == "function" ? t.requestSubmit(a instanceof HTMLElement ? a : void 0) : t.submit());
      }));
    });
    this.options = {
      namespace: e.namespace ?? Fs,
      storageKey: e.storageKey ?? Ls,
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
    const t = this.options.persist ? Us(this.options.storageKey) : {}, { bigTextDock: a, ...l } = t, {
      bigTextDock: c,
      ...v
    } = e.initialState ?? {};
    this.state = rt({
      ...fe,
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
    }), this.state.highContrast && this.state.contrastMode === "standard" && (this.state.contrastMode = "white-black-blue"), this.labels = {
      ...this.options.locale === "en-US" ? Bs : Os,
      ...e.labels
    }, this.options.autoMount && this.mount();
  }
  mount() {
    if (this.app || this.destroyed) return;
    if (E && E !== this && !E.destroyed)
      throw new Error(
        "Aging Assist already has an active instance. Destroy it before mounting another instance."
      );
    const e = me(this.options.container) ?? document.body;
    if (!e) {
      E = this, this.pendingMount || (this.pendingMount = !0, document.addEventListener("DOMContentLoaded", this.onDocumentReady, { once: !0 }));
      return;
    }
    E = this, this.host = js("div", {
      id: `${this.options.namespace}-root`,
      "data-aging-assist-root": "true"
    }), e.appendChild(this.host), this.app = lt(Ds, {
      state: this.state,
      labels: this.labels,
      position: this.options.position,
      theme: this.options.theme,
      idPrefix: this.options.namespace,
      showLauncher: this.options.showLauncher,
      onAction: (t, a) => this.handleAction(t, a)
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
      ...fe,
      toolbarOpen: !1,
      enabled: !1,
      focusEnhance: !0,
      formEnhance: !0
    }), this.options.persist && Zs(this.options.storageKey), this.applyEffects(), this.restoreToolbarFocus(), this.emit("disable");
  }
  reset() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.clearReadTarget(), this.setState({
      ...fe,
      enabled: !0,
      toolbarOpen: !0,
      focusEnhance: !0,
      formEnhance: !0
    }), this.emit("reset");
  }
  destroy() {
    var e, t;
    this.destroyed = !0, document.removeEventListener("DOMContentLoaded", this.onDocumentReady), this.pendingMount = !1, this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.crosshairFrame && window.cancelAnimationFrame(this.crosshairFrame), this.crosshairFrame = 0, this.crosshairPoint = null, this.clearReadTarget(), this.unbindTrigger(), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("focusin", this.onFocusIn), document.removeEventListener("pointerup", this.onPointerUp), document.removeEventListener("click", this.onDangerClick, !0), document.removeEventListener("submit", this.onDangerSubmit, !0), (e = this.app) == null || e.unmount(), (t = this.host) == null || t.remove(), this.app = null, this.host = null, this.removeRootEffects(), E === this && (E = null);
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
    t.contrastMode ? t.highContrast = t.contrastMode !== "standard" : typeof t.highContrast == "boolean" && (t.contrastMode = t.highContrast ? "white-black-blue" : "standard");
    const a = this.getState(), l = Gs({ ...this.state, ...t });
    Object.assign(this.state, l), this.reconcileStateEffects(a, l), this.applyEffects(), this.persist(), this.notify(), this.emit("change", t);
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  subscribeKey(e, t) {
    let a = this.state[e];
    return t(a, this.getState()), this.subscribe((l) => {
      const c = l[e];
      Object.is(a, c) || (a = c, t(c, l));
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
        const a = t;
        Be(a == null ? void 0 : a.key) && typeof a.value == "boolean" && this.setBoolean(a.key, a.value);
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
    if (e === "highContrast") {
      const l = Qs(this.state.contrastMode);
      this.setState({
        contrastMode: l,
        highContrast: l !== "standard"
      });
      return;
    }
    if (e === "speech") {
      t ? (this.speech.stop(), this.stopSpeechProgressClock(), this.setState({ speech: !1, speechPaused: !1, speechProgress: 0, statusMessage: "" })) : (this.setState({ speech: !0, speechPaused: !1, speechProgress: 0, statusMessage: "" }), this.state.currentText && (this.lastSpokenText = this.state.currentText, this.speakText(this.state.currentText)));
      return;
    }
    const a = { [e]: !t };
    e === "readingGuide" && t && this.clearReadTarget(), this.setState(a);
  }
  setBoolean(e, t) {
    this.setState({ [e]: t });
  }
  readOffset(e) {
    const t = Vs();
    if (!t.length) return;
    const a = q(this.state.readingIndex + e, 0, t.length - 1), l = t[a], c = ae(l);
    this.highlightTarget(l), this.lastSpokenText = c, this.setState({
      readingIndex: a,
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
    const a = this.host, l = a == null ? void 0 : a.querySelector(".aging-assist-crosshair-x"), c = a == null ? void 0 : a.querySelector(".aging-assist-crosshair-y");
    l && (l.style.top = `${t}px`), c && (c.style.left = `${e}px`);
  }
  queueHover(e) {
    if (e === this.hoverTarget && this.hoverTimer || (this.clearHoverTimer(), !this.state.enabled || e != null && e.closest(this.options.ignoredSelector)) || !this.state.readingGuide && !this.state.bigText && !this.state.speech)
      return;
    const t = ae(e);
    t && ((this.state.readingGuide || this.state.bigText) && this.applyHoverTarget(e, t, !1), !(!this.state.speech || t === this.lastSpokenText) && (this.hoverTarget = e, this.hoverTimer = window.setTimeout(() => {
      this.hoverTimer = 0, this.hoverTarget = null, this.applyHoverTarget(e, t, !0);
    }, 220)));
  }
  handleDirectTarget(e) {
    if (this.clearHoverTimer(), !this.state.enabled || !e || e.closest(this.options.ignoredSelector) || !this.state.readingGuide && !this.state.bigText && !this.state.speech) return;
    const t = ae(e);
    t && this.applyHoverTarget(e, t, this.state.speech && t !== this.lastSpokenText);
  }
  clearHoverTimer() {
    this.hoverTimer && window.clearTimeout(this.hoverTimer), this.hoverTimer = 0, this.hoverTarget = null;
  }
  applyHoverTarget(e, t, a) {
    const l = {};
    (this.state.currentText !== t || a) && (l.currentText = t), a && (l.speechPaused = !1, l.speechProgress = 0, l.statusMessage = ""), Object.keys(l).length && this.setState(l), this.state.readingGuide && e instanceof HTMLElement && e !== this.currentReadTarget && this.highlightTarget(e), a && (this.lastSpokenText = t, this.speakText(t));
  }
  speakText(e) {
    if (this.stopSpeechProgressClock(), !this.speech.speak(e, this.state.speechRate, this.options.locale, {
      onBoundary: (a) => this.updateSpeechProgress(a),
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
    this.stopSpeechProgressClock(), this.speechProgressElapsed = 0, this.speechProgressDuration = _s(e, this.state.speechRate), this.speechProgressStartedAt = window.performance.now(), this.queueSpeechProgressTick();
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
    var a;
    (a = this.pendingDanger) == null || a.classList.remove("aging-assist-danger-focus"), this.pendingDanger = e, this.pendingDangerAction = t, this.setState({ confirming: !0 }), e.classList.add("aging-assist-danger-focus");
  }
  applyEffects() {
    const e = document.documentElement, t = this.state.enabled && this.state.toolbarOpen && this.options.position === "top", a = this.state.enabled && (this.state.bigText || this.state.toolbarOpen && this.options.position === "bottom");
    t && this.originalBodyPaddingTop === null && document.body && (this.originalBodyPaddingTop = window.getComputedStyle(document.body).paddingTop || "0px"), a && this.originalBodyPaddingBottom === null && document.body && (this.originalBodyPaddingBottom = window.getComputedStyle(document.body).paddingBottom || "0px"), e.dataset.agingEnabled = String(this.state.enabled), e.dataset.agingContrast = String(this.state.highContrast), e.dataset.agingContrastTheme = this.state.contrastMode, e.dataset.agingSimplified = String(this.state.simplified), e.dataset.agingLargeCursor = String(this.state.largeCursor), e.dataset.agingFocus = String(this.state.focusEnhance), e.dataset.agingClick = String(this.state.clickEnhance), e.dataset.agingForm = String(this.state.formEnhance), e.dataset.agingMistakeGuard = String(this.state.mistakeGuard), e.dataset.agingBigText = String(this.state.bigText), e.dataset.agingToolbarOpen = String(this.state.toolbarOpen), e.dataset.agingToolbarPosition = this.options.position, e.dataset.agingFontScale = String(this.state.fontScale), e.style.setProperty("--aging-assist-font-scale", String(this.state.fontScale)), e.style.setProperty("--aging-assist-page-scale", String(this.state.pageScale)), e.style.setProperty(
      "--aging-assist-toolbar-reserve",
      `${this.toolbarHeight / this.state.pageScale}px`
    ), e.style.setProperty(
      "--aging-assist-body-padding-top",
      this.originalBodyPaddingTop ?? "0px"
    ), e.style.setProperty(
      "--aging-assist-body-padding-bottom",
      this.originalBodyPaddingBottom ?? "0px"
    ), !t && this.originalBodyPaddingTop !== null && (this.originalBodyPaddingTop = null, e.style.setProperty("--aging-assist-body-padding-top", "0px")), !a && this.originalBodyPaddingBottom !== null && (this.originalBodyPaddingBottom = null, e.style.setProperty("--aging-assist-body-padding-bottom", "0px")), this.host && (this.host.style.zoom = String(1 / this.state.pageScale)), this.syncFontScale();
  }
  startFontScaleObserver() {
    var e;
    typeof MutationObserver > "u" || !document.body || ((e = this.fontScaleObserver) == null || e.disconnect(), this.fontScaleObserver = new MutationObserver((t) => {
      if (!this.state.enabled || this.state.fontScale <= 1) {
        this.fontScalePendingRoots.clear();
        return;
      }
      t.forEach((a) => {
        a.addedNodes.forEach((l) => {
          l instanceof HTMLElement && this.fontScalePendingRoots.add(l);
        });
      }), !(this.fontScaleFrame || !this.fontScalePendingRoots.size) && (this.fontScaleFrame = window.requestAnimationFrame(() => {
        this.fontScaleFrame = 0;
        const a = Array.from(this.fontScalePendingRoots);
        this.fontScalePendingRoots.clear(), this.syncFontScale(a);
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
    (e ? e.flatMap((a) => [a, ...Array.from(a.querySelectorAll("*"))]) : Array.from(document.body.querySelectorAll("*"))).forEach((a) => {
      if (!this.shouldScaleFontElement(a) || this.fontScaleElements.has(a)) return;
      const l = Number.parseFloat(window.getComputedStyle(a).fontSize), c = a.parentElement, v = c ? Number.parseFloat(window.getComputedStyle(c).fontSize) : Number.NaN;
      Number.isFinite(v) && Math.abs(l - v) < 0.01 || !Number.isFinite(l) || l <= 0 || this.fontScaleElements.set(a, {
        value: a.style.getPropertyValue("font-size"),
        priority: a.style.getPropertyPriority("font-size"),
        baseSize: l
      });
    }), this.fontScaleElements.forEach((a, l) => {
      if (!l.isConnected) {
        this.fontScaleElements.delete(l);
        return;
      }
      l.style.setProperty(
        "font-size",
        `${(a.baseSize * this.state.fontScale).toFixed(2)}px`,
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
        var a;
        return t.nodeType === Node.TEXT_NODE && !!((a = t.textContent) != null && a.trim());
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
    Ks(this.options.storageKey, e);
  }
  notify() {
    var t, a;
    const e = this.getState();
    (a = (t = this.options).onChange) == null || a.call(t, e), this.listeners.forEach((l) => l(e));
  }
  emit(e, t) {
    var a, l;
    (l = (a = this.options).onEvent) == null || l.call(a, {
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
      var e, t, a;
      (e = this.toolbarReturnFocus) != null && e.isConnected ? this.toolbarReturnFocus.focus() : (a = (t = this.host) == null ? void 0 : t.querySelector(".aging-assist-launcher")) == null || a.focus(), this.toolbarReturnFocus = null;
    });
  }
  reconcileStateEffects(e, t) {
    (e.speech && !t.speech || !t.enabled) && (this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer()), e.readingGuide && !t.readingGuide && this.clearReadTarget(), e.confirming && !t.confirming && this.pendingDanger && (this.pendingDanger.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null);
  }
  static getActiveInstance() {
    return E && !E.destroyed ? E : null;
  }
}
function q(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function Qs(s) {
  const e = [
    "standard",
    "white-black-blue",
    "blue-yellow-white",
    "yellow-black-blue",
    "black-yellow-white"
  ];
  return e[(e.indexOf(s) + 1) % e.length] ?? "standard";
}
function _s(s, e) {
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
const ei = "0.1.1";
function ne(s = {}) {
  return Se.getActiveInstance() ?? new Se(s);
}
const ai = ne, ni = ne;
typeof window < "u" && (window.AgingAssist = {
  create: ne,
  init: ne,
  AgingAssist: Se,
  version: ei
});
export {
  Se as AgingAssist,
  ei as VERSION,
  ai as create,
  ne as createAgingAssist,
  ni as init
};
