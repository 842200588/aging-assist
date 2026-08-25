var Ne = Object.defineProperty;
var Ue = (s, e, t) => e in s ? Ne(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var u = (s, e, t) => Ue(s, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as Ke, computed as C, ref as S, watch as D, nextTick as E, onMounted as Ze, onBeforeUnmount as je, openBlock as v, createElementBlock as T, createVNode as d, unref as p, createElementVNode as a, toDisplayString as h, createCommentVNode as A, normalizeClass as y, Fragment as we, renderList as Ee, createTextVNode as Q, normalizeStyle as Ve, reactive as Xe, createApp as Je } from "vue";
import { BadgeCheck as We, Sparkles as Ye, ListRestart as Qe, Volume2 as _e, Pause as et, Play as tt, AudioLines as st, Rows3 as it, Baseline as nt, Type as at, Minimize2 as ot, Maximize2 as rt, Contrast as lt, MousePointer2 as ct, Crosshair as ut, ScanEye as ht, ALargeSmall as gt, Eye as dt, Zap as pt, CircleOff as ft, X as ke, Focus as mt, MousePointerClick as bt, Hand as St, ShieldAlert as vt } from "lucide-vue-next";
const Tt = ["data-theme"], yt = ["aria-label"], Pt = ["aria-label"], xt = { class: "aging-assist-shell" }, wt = { class: "aging-assist-brand" }, Et = {
  class: "aging-assist-mark",
  "aria-hidden": "true"
}, kt = { class: "aging-assist-title" }, Ct = { class: "aging-assist-groups" }, Mt = { class: "aging-assist-group" }, Dt = ["aria-pressed"], At = { class: "aging-assist-group" }, Ft = { class: "aging-assist-group" }, Rt = ["aria-pressed"], Lt = ["aria-pressed"], Ot = ["aria-pressed"], Bt = ["aria-pressed"], Ht = ["aria-pressed"], It = { class: "aging-assist-group" }, $t = ["aria-pressed"], zt = ["aria-expanded", "aria-controls"], Gt = { class: "aging-assist-status" }, qt = { class: "aging-assist-rate" }, Nt = ["for"], Ut = ["id", "value"], Kt = ["value"], Zt = {
  key: 0,
  class: "aging-assist-message",
  role: "status"
}, jt = ["aria-label"], Vt = ["id", "aria-labelledby"], Xt = ["id"], Jt = { class: "aging-assist-switches" }, Wt = { class: "aging-assist-switch" }, Yt = ["checked"], Qt = { class: "aging-assist-switch" }, _t = ["checked"], es = { class: "aging-assist-switch" }, ts = ["checked"], ss = { class: "aging-assist-switch" }, is = ["checked"], ns = { class: "aging-assist-bigtext-window" }, as = { class: "aging-assist-bigtext-actions" }, os = ["aria-label", "title"], rs = ["aria-labelledby", "aria-describedby"], ls = { class: "aging-assist-confirm-box" }, cs = ["id"], us = ["id"], hs = { class: "aging-assist-confirm-actions" }, gs = 8, ds = /* @__PURE__ */ Ke({
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
    const t = s, n = e, l = C(() => [
      { label: t.labels.slowRate, value: 0.75 },
      { label: t.labels.standardRate, value: 1 },
      { label: t.labels.fasterRate, value: 1.25 },
      { label: t.labels.fastRate, value: 1.5 }
    ]), c = S(null), x = S(null), f = S(null), P = S(null), K = C(() => `${t.idPrefix}-confirm-title`), z = C(() => `${t.idPrefix}-confirm-description`), he = C(() => `${t.idPrefix}-settings-title`), ge = C(() => `${t.idPrefix}-settings`), de = C(() => `${t.idPrefix}-rate`), te = S(0), se = S(0), M = S(0), Z = S(0), G = S(0), F = S(0), q = S(""), B = S(0), R = S(0), j = C(
      () => t.state.currentText || t.labels.bigTextHint
    ), ie = C(
      () => t.state.bigText && t.state.speech && !t.state.speechPaused
    ), De = C(() => Array.from(j.value));
    function g(o, i) {
      n("action", o, i);
    }
    function V(o, i) {
      g("setBoolean", {
        key: o,
        value: i.target.checked
      });
    }
    function X() {
      M.value && (window.cancelAnimationFrame(M.value), M.value = 0);
    }
    function N() {
      G.value && window.clearTimeout(G.value), G.value = 0, q.value = "", B.value = 0, R.value = 0;
    }
    function J(o) {
      return Math.min(1, Math.max(0, o));
    }
    function U(o) {
      const i = o.scrollHeight - o.clientHeight;
      te.value = i > 0 ? Math.min(100, o.scrollTop / i * 100) : 0;
    }
    function Ae(o) {
      var I;
      const i = Array.from(o.querySelectorAll(".aging-assist-subtitle-char")), r = [];
      if (i.length <= 1)
        return { charsLength: i.length, lines: r };
      const m = ((I = i[0]) == null ? void 0 : I.offsetTop) ?? 0;
      let w = 0, L = m;
      return i.forEach((O, Y) => {
        O.offsetTop <= L + 2 || (r.push({ start: w, end: Y, top: L }), w = Y, L = O.offsetTop);
      }), r.push({ start: w, end: i.length, top: L }), { charsLength: i.length, lines: r };
    }
    function Fe(o) {
      const i = J(o);
      return i * i * (3 - 2 * i);
    }
    function ne() {
      var o;
      return ((o = window.matchMedia) == null ? void 0 : o.call(window, "(prefers-reduced-motion: reduce)").matches) ?? !1;
    }
    function Re() {
      return t.state.speech ? t.state.speechProgress : Z.value;
    }
    function Le(o, i) {
      if (!t.state.bigText) return 0;
      const { charsLength: r, lines: m } = Ae(o);
      if (r <= 1 || m.length <= 1) return 0;
      const w = J(Re());
      if (w >= 1) return i;
      const L = w * r, I = m.findIndex((qe) => L < qe.end);
      if (I <= 0) return 0;
      const O = m[I], Y = m[I - 1], Pe = m[0].top, $e = Math.max(1, O.end - O.start), ze = Fe((L - O.start) / $e), xe = Math.max(0, Y.top - Pe), Ge = Math.max(0, O.top - Pe);
      return Math.min(i, xe + (Ge - xe) * ze);
    }
    function pe() {
      const o = c.value;
      if (!o) {
        M.value = 0;
        return;
      }
      const i = se.value - o.scrollTop;
      if (Math.abs(i) < 0.5) {
        o.scrollTop = se.value, U(o), M.value = 0;
        return;
      }
      o.scrollTop += i * 0.22, U(o), M.value = window.requestAnimationFrame(pe);
    }
    function fe(o, i, r = !1) {
      if (se.value = i, r || ne()) {
        X(), o.scrollTop = i, U(o);
        return;
      }
      M.value || (M.value = window.requestAnimationFrame(pe));
    }
    function H(o = !1) {
      const i = c.value;
      if (!i) return;
      const r = i.scrollHeight - i.clientHeight;
      if (r <= 0) {
        te.value = 0;
        return;
      }
      fe(i, Le(i, r), o);
    }
    function Oe(o) {
      const i = Math.max(o.replace(/\s+/g, "").length, 8);
      return Math.max(4200, i * 120);
    }
    function me(o) {
      return `${j.value}|${o.scrollHeight}|${o.clientHeight}`;
    }
    function be(o, i = !1) {
      q.value = me(o), R.value = Oe(j.value);
      const r = o.scrollHeight - o.clientHeight;
      Z.value = i && r > 0 ? J(o.scrollTop / r) : 0, B.value = window.performance.now() - Z.value * R.value;
    }
    function Se() {
      const o = c.value;
      if (!o || !t.state.bigText || t.state.speech || ne()) {
        q.value = "", B.value = 0, R.value = 0;
        return;
      }
      if (o.scrollHeight <= o.clientHeight) {
        q.value = "", B.value = 0, R.value = 0, U(o);
        return;
      }
      (me(o) !== q.value || !R.value) && be(o);
      const r = B.value || window.performance.now();
      B.value = r, Z.value = J(
        (window.performance.now() - r) / R.value
      ), H(!0);
    }
    function W(o = !1, i = 0) {
      i === 0 && N(), !(!t.state.bigText || t.state.speech || ne()) && E(() => {
        const r = c.value;
        if (r) {
          if (r.scrollHeight <= r.clientHeight) {
            i < gs && (G.value = window.setTimeout(() => {
              G.value = 0, W(o, i + 1);
            }, 120));
            return;
          }
          be(r, o), Se();
        }
      });
    }
    function Be() {
      if (F.value) return;
      const o = () => {
        F.value = 0, Se(), F.value = window.setTimeout(o, 64);
      };
      F.value = window.setTimeout(o, 64);
    }
    function He() {
      F.value && (window.clearTimeout(F.value), F.value = 0);
    }
    function ve() {
      E(() => {
        const o = c.value;
        o && (fe(o, 0, !0), ie.value && H(), W());
      });
    }
    D(j, ve), D(
      () => t.state.bigText,
      (o) => {
        o ? ve() : (X(), N());
      }
    ), D(ie, (o) => {
      o ? (N(), E(H)) : (X(), t.state.speech || W(!0));
    }), D(
      () => t.state.speech,
      (o) => {
        o ? (N(), E(H)) : W(!0);
      }
    ), D(
      () => t.state.speechRate,
      () => {
        ie.value && E(H);
      }
    ), D(
      () => t.state.speechProgress,
      () => {
        !t.state.bigText || !t.state.speech || E(() => {
          H();
        });
      }
    );
    let b = null;
    function Te() {
      var o;
      g("toolbarResize", ((o = x.value) == null ? void 0 : o.getBoundingClientRect().height) ?? 0);
    }
    function ae() {
      b == null || b.disconnect(), b = null, Te(), !(!x.value || typeof ResizeObserver > "u") && (b = new ResizeObserver(Te), b.observe(x.value));
    }
    function ye() {
      E(ae);
    }
    function Ie(o) {
      if (o.key === "Escape") {
        o.preventDefault(), g("cancelDanger");
        return;
      }
      if (o.key !== "Tab" || !f.value) return;
      const i = Array.from(
        f.value.querySelectorAll(
          "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
        )
      ).filter((w) => !w.hidden), r = i[0], m = i[i.length - 1];
      !r || !m || (o.shiftKey && document.activeElement === r ? (o.preventDefault(), m.focus()) : !o.shiftKey && document.activeElement === m && (o.preventDefault(), r.focus()));
    }
    return D(
      () => t.state.toolbarOpen,
      async (o) => {
        await E(), o ? ae() : (b == null || b.disconnect(), b = null, g("toolbarResize", 0));
      }
    ), D(
      () => t.state.confirming,
      async (o) => {
        var i, r, m;
        if (o) {
          const w = document.activeElement;
          P.value = w instanceof HTMLElement ? w : null, await E(), (r = (i = f.value) == null ? void 0 : i.querySelector("[data-aging-confirm-primary]")) == null || r.focus();
          return;
        }
        await E(), (m = P.value) != null && m.isConnected && P.value.focus(), P.value = null;
      }
    ), Ze(() => {
      Be(), window.addEventListener("resize", ye), t.state.toolbarOpen && E(ae);
    }), je(() => {
      window.removeEventListener("resize", ye), b == null || b.disconnect(), g("toolbarResize", 0), He(), X(), N();
    }), (o, i) => (v(), T("div", {
      class: "aging-assist-root",
      "data-aging-assist-root": "",
      "data-theme": s.theme
    }, [
      s.showLauncher && !s.state.toolbarOpen ? (v(), T("button", {
        key: 0,
        class: "aging-assist-launcher",
        type: "button",
        "aria-label": s.labels.openToolbar,
        onClick: i[0] || (i[0] = (r) => g("open"))
      }, [
        d(p(We), { size: 24 }),
        a("span", null, h(s.labels.launcher), 1)
      ], 8, yt)) : A("", !0),
      s.state.toolbarOpen ? (v(), T("section", {
        key: 1,
        ref_key: "toolbar",
        ref: x,
        class: y(["aging-assist-toolbar", s.position === "bottom" ? "is-bottom" : "is-top"]),
        "aria-label": s.labels.launcher
      }, [
        a("div", xt, [
          a("div", wt, [
            a("div", Et, [
              d(p(Ye), { size: 26 })
            ]),
            a("div", kt, [
              a("strong", null, h(s.labels.launcher), 1),
              a("span", null, h(s.labels.tagline), 1)
            ])
          ]),
          a("div", Ct, [
            a("div", Mt, [
              a("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[1] || (i[1] = (r) => g("reset"))
              }, [
                d(p(Qe)),
                a("span", null, h(s.labels.reset), 1)
              ]),
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.speech }]),
                type: "button",
                "aria-pressed": s.state.speech,
                onClick: i[2] || (i[2] = (r) => g("toggle", "speech"))
              }, [
                d(p(_e)),
                a("span", null, h(s.labels.speech), 1)
              ], 10, Dt),
              s.state.speech && !s.state.speechPaused ? (v(), T("button", {
                key: 0,
                class: "aging-assist-control",
                type: "button",
                onClick: i[3] || (i[3] = (r) => g("pauseSpeech"))
              }, [
                d(p(et)),
                a("span", null, h(s.labels.pauseSpeech), 1)
              ])) : A("", !0),
              s.state.speech && s.state.speechPaused ? (v(), T("button", {
                key: 1,
                class: "aging-assist-control",
                type: "button",
                onClick: i[4] || (i[4] = (r) => g("resumeSpeech"))
              }, [
                d(p(tt)),
                a("span", null, h(s.labels.continueSpeech), 1)
              ])) : A("", !0),
              a("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[5] || (i[5] = (r) => g("readPrevious"))
              }, [
                d(p(st)),
                a("span", null, h(s.labels.readPrevious), 1)
              ]),
              a("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[6] || (i[6] = (r) => g("readNext"))
              }, [
                d(p(it)),
                a("span", null, h(s.labels.readNext), 1)
              ])
            ]),
            a("div", At, [
              a("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[7] || (i[7] = (r) => g("fontDown"))
              }, [
                d(p(nt)),
                a("span", null, h(s.labels.fontDown), 1)
              ]),
              a("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[8] || (i[8] = (r) => g("fontUp"))
              }, [
                d(p(at)),
                a("span", null, h(s.labels.fontUp), 1)
              ]),
              a("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[9] || (i[9] = (r) => g("zoomOut"))
              }, [
                d(p(ot)),
                a("span", null, h(s.labels.pageZoomOut), 1)
              ]),
              a("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: i[10] || (i[10] = (r) => g("zoomIn"))
              }, [
                d(p(rt)),
                a("span", null, h(s.labels.pageZoomIn), 1)
              ])
            ]),
            a("div", Ft, [
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.highContrast }]),
                type: "button",
                "aria-pressed": s.state.highContrast,
                onClick: i[11] || (i[11] = (r) => g("toggle", "highContrast"))
              }, [
                d(p(lt)),
                a("span", null, h(s.labels.highContrast), 1)
              ], 10, Rt),
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.largeCursor }]),
                type: "button",
                "aria-pressed": s.state.largeCursor,
                onClick: i[12] || (i[12] = (r) => g("toggle", "largeCursor"))
              }, [
                d(p(ct)),
                a("span", null, h(s.labels.largeCursor), 1)
              ], 10, Lt),
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.crosshair }]),
                type: "button",
                "aria-pressed": s.state.crosshair,
                onClick: i[13] || (i[13] = (r) => g("toggle", "crosshair"))
              }, [
                d(p(ut)),
                a("span", null, h(s.labels.crosshair), 1)
              ], 10, Ot),
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.readingGuide }]),
                type: "button",
                "aria-pressed": s.state.readingGuide,
                onClick: i[14] || (i[14] = (r) => g("toggle", "readingGuide"))
              }, [
                d(p(ht)),
                a("span", null, h(s.labels.readingGuide), 1)
              ], 10, Bt),
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.bigText }]),
                type: "button",
                "aria-pressed": s.state.bigText,
                onClick: i[15] || (i[15] = (r) => g("toggle", "bigText"))
              }, [
                d(p(gt)),
                a("span", null, h(s.labels.bigText), 1)
              ], 10, Ht)
            ]),
            a("div", It, [
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.simplified }]),
                type: "button",
                "aria-pressed": s.state.simplified,
                onClick: i[16] || (i[16] = (r) => g("toggle", "simplified"))
              }, [
                d(p(dt)),
                a("span", null, h(s.labels.simplified), 1)
              ], 10, $t),
              a("button", {
                class: y(["aging-assist-control", { "is-active": s.state.moreOpen }]),
                type: "button",
                "aria-expanded": s.state.moreOpen,
                "aria-controls": ge.value,
                onClick: i[17] || (i[17] = (r) => g("toggleMore"))
              }, [
                d(p(pt)),
                a("span", null, h(s.labels.more), 1)
              ], 10, zt)
            ])
          ]),
          a("div", Gt, [
            a("div", qt, [
              a("label", { for: de.value }, h(s.labels.speechRate), 9, Nt),
              a("select", {
                id: de.value,
                value: s.state.speechRate,
                onChange: i[18] || (i[18] = (r) => g("rate", Number(r.target.value)))
              }, [
                (v(!0), T(we, null, Ee(l.value, (r) => (v(), T("option", {
                  key: r.value,
                  value: r.value
                }, h(r.label), 9, Kt))), 128))
              ], 40, Ut)
            ]),
            s.state.statusMessage ? (v(), T("p", Zt, h(s.state.statusMessage), 1)) : A("", !0),
            a("button", {
              class: "aging-assist-control is-danger",
              type: "button",
              onClick: i[19] || (i[19] = (r) => g("disable"))
            }, [
              d(p(ft)),
              a("span", null, h(s.labels.exit), 1)
            ]),
            a("button", {
              class: "aging-assist-control",
              type: "button",
              "aria-label": s.labels.closeToolbar,
              onClick: i[20] || (i[20] = (r) => g("close"))
            }, [
              d(p(ke)),
              a("span", null, h(s.labels.closeToolbar), 1)
            ], 8, jt)
          ])
        ])
      ], 10, Pt)) : A("", !0),
      s.state.toolbarOpen && s.state.moreOpen ? (v(), T("aside", {
        key: 2,
        id: ge.value,
        class: y(["aging-assist-more", s.position === "bottom" ? "is-bottom" : "is-top"]),
        "aria-labelledby": he.value
      }, [
        a("h2", { id: he.value }, h(s.labels.enhancementSettings), 9, Xt),
        a("div", Jt, [
          a("label", Wt, [
            a("span", null, [
              d(p(mt), { size: 20 }),
              Q(" " + h(s.labels.focusEnhance), 1)
            ]),
            a("input", {
              type: "checkbox",
              checked: s.state.focusEnhance,
              onChange: i[21] || (i[21] = (r) => V("focusEnhance", r))
            }, null, 40, Yt)
          ]),
          a("label", Qt, [
            a("span", null, [
              d(p(bt), { size: 20 }),
              Q(" " + h(s.labels.clickEnhance), 1)
            ]),
            a("input", {
              type: "checkbox",
              checked: s.state.clickEnhance,
              onChange: i[22] || (i[22] = (r) => V("clickEnhance", r))
            }, null, 40, _t)
          ]),
          a("label", es, [
            a("span", null, [
              d(p(St), { size: 20 }),
              Q(" " + h(s.labels.formEnhance), 1)
            ]),
            a("input", {
              type: "checkbox",
              checked: s.state.formEnhance,
              onChange: i[23] || (i[23] = (r) => V("formEnhance", r))
            }, null, 40, ts)
          ]),
          a("label", ss, [
            a("span", null, [
              d(p(vt), { size: 20 }),
              Q(" " + h(s.labels.mistakeGuard), 1)
            ]),
            a("input", {
              type: "checkbox",
              checked: s.state.mistakeGuard,
              onChange: i[24] || (i[24] = (r) => V("mistakeGuard", r))
            }, null, 40, is)
          ])
        ])
      ], 10, Vt)) : A("", !0),
      s.state.bigText ? (v(), T("section", {
        key: 3,
        class: y(["aging-assist-bigtext is-bottom", [
          s.position === "top" ? "has-toolbar-top" : "has-toolbar-bottom",
          s.state.speech ? "is-reading" : "is-plain"
        ]]),
        "aria-live": "polite"
      }, [
        a("div", ns, [
          a("p", {
            ref_key: "bigTextScroller",
            ref: c,
            onScroll: i[25] || (i[25] = (r) => U(r.currentTarget))
          }, [
            (v(!0), T(we, null, Ee(De.value, (r, m) => (v(), T("span", {
              key: `${m}-${r}`,
              class: "aging-assist-subtitle-char"
            }, h(r), 1))), 128))
          ], 544),
          a("span", {
            class: "aging-assist-bigtext-progress",
            style: Ve({ transform: `scaleX(${te.value / 100})` }),
            "aria-hidden": "true"
          }, null, 4)
        ]),
        a("div", as, [
          a("button", {
            type: "button",
            "aria-label": s.labels.closeBigText,
            title: s.labels.closeBigText,
            onClick: i[26] || (i[26] = (r) => g("toggle", "bigText"))
          }, [
            d(p(ke), { size: 28 })
          ], 8, os)
        ])
      ], 2)) : A("", !0),
      a("div", {
        class: y(["aging-assist-crosshair-x", { "is-visible": s.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      a("div", {
        class: y(["aging-assist-crosshair-y", { "is-visible": s.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      s.state.confirming ? (v(), T("section", {
        key: 4,
        ref_key: "confirmDialog",
        ref: f,
        class: "aging-assist-confirm",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": K.value,
        "aria-describedby": z.value,
        onKeydown: Ie
      }, [
        a("div", ls, [
          a("h2", { id: K.value }, h(s.labels.confirmTitle), 9, cs),
          a("p", { id: z.value }, h(s.labels.confirmDescription), 9, us),
          a("div", hs, [
            a("button", {
              type: "button",
              onClick: i[27] || (i[27] = (r) => g("cancelDanger"))
            }, h(s.labels.cancel), 1),
            a("button", {
              class: "primary",
              type: "button",
              "data-aging-confirm-primary": "",
              onClick: i[28] || (i[28] = (r) => g("confirmDanger"))
            }, h(s.labels.continue), 1)
          ])
        ])
      ], 40, rs)) : A("", !0)
    ], 8, Tt));
  }
}), ps = "aging-assist", fs = "aging-assist-state", oe = {
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
  statusMessage: "",
  focusEnhance: !0,
  clickEnhance: !1,
  formEnhance: !0,
  mistakeGuard: !1,
  currentText: "",
  readingIndex: -1
}, ms = {
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
}, bs = {
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
}, Ss = [
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
], vs = /* @__PURE__ */ new Set([0.75, 1, 1.25, 1.5]);
function ce(s) {
  if (!s || typeof s != "object" || Array.isArray(s)) return {};
  const e = s, t = {};
  return Ss.forEach((n) => {
    typeof e[n] == "boolean" && Object.assign(t, { [n]: e[n] });
  }), typeof e.fontScale == "number" && Number.isFinite(e.fontScale) && (t.fontScale = re(e.fontScale, 1, 1.8)), typeof e.pageScale == "number" && Number.isFinite(e.pageScale) && (t.pageScale = re(e.pageScale, 1, 1.3)), typeof e.speechProgress == "number" && Number.isFinite(e.speechProgress) && (t.speechProgress = re(e.speechProgress, 0, 1)), vs.has(e.speechRate) && (t.speechRate = e.speechRate), typeof e.statusMessage == "string" && (t.statusMessage = e.statusMessage.slice(0, 240)), typeof e.currentText == "string" && (t.currentText = e.currentText.slice(0, 240)), typeof e.readingIndex == "number" && Number.isInteger(e.readingIndex) && (t.readingIndex = Math.max(-1, e.readingIndex)), t;
}
function Ts(s) {
  const e = { ...s };
  return e.enabled || (e.toolbarOpen = !1, e.moreOpen = !1, e.confirming = !1, e.speech = !1, e.speechPaused = !1, e.speechProgress = 0), e.toolbarOpen || (e.moreOpen = !1), e.speech || (e.speechPaused = !1, e.speechProgress = 0), e;
}
function re(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function ys(s) {
  try {
    const e = window.localStorage.getItem(s);
    return e ? ce(JSON.parse(e)) : {};
  } catch {
    return {};
  }
}
function Ps(s, e) {
  try {
    window.localStorage.setItem(s, JSON.stringify(e));
  } catch {
  }
}
function xs(s) {
  try {
    window.localStorage.removeItem(s);
  } catch {
  }
}
function le(s) {
  return s ? typeof s == "string" ? document.querySelector(s) : s : null;
}
function ws(s, e = {}) {
  const t = document.createElement(s);
  return Object.entries(e).forEach(([n, l]) => {
    t.setAttribute(n, l);
  }), t;
}
function _(s) {
  var z;
  if (!s || s.closest("[data-aging-assist-root]")) return "";
  const e = s.closest(
    "[data-aging-text], [data-aging-label], button, a, label, input, textarea, select, img, h1, h2, h3, h4, h5, h6, p, li, td, th, summary, [role='button'], [title], [aria-label]"
  ) ?? s, t = e.closest("[data-aging-readable], [data-aging-text]"), n = t && t !== e && !ks(e) ? t : e, l = n.getAttribute("data-aging-text") || n.getAttribute("data-aging-label"), c = n.getAttribute("aria-label"), x = n.getAttribute("title"), f = n instanceof HTMLImageElement ? n.getAttribute("alt") : "", P = n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement ? n.value || n.placeholder : n instanceof HTMLSelectElement ? ((z = n.selectedOptions[0]) == null ? void 0 : z.textContent) || n.value : "", K = n.textContent || "";
  return Me(l || c || x || f || P || K);
}
function Me(s) {
  return s.replace(/\s+/g, " ").replace(/[|_~`^*#<>[\]{}\\]/g, "").replace(/\s+/g, " ").trim().slice(0, 240);
}
function Es(s = document.body) {
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
    const l = n.getBoundingClientRect(), c = _(n);
    return !c || l.width <= 0 || l.height <= 0 || !Cs(n, c) || t.has(c) ? !1 : (t.add(c), !0);
  });
}
function ks(s) {
  return s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement || s instanceof HTMLSelectElement || s instanceof HTMLButtonElement;
}
function Cs(s, e) {
  return s.matches("[data-aging-text], [data-aging-readable], .qunar-assist-long-text") ? e.length >= 2 : s.matches("h1, h2, h3, p, li, summary") || s.matches("button, a, [role='button'], [title], [aria-label], label") ? e.length >= 4 : e.length >= 6;
}
class Ms {
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
    const x = window.speechSynthesis.getVoices().find((f) => f.lang.toLowerCase().startsWith(n.slice(0, 2).toLowerCase()));
    return x && (c.voice = x), c.onstart = () => {
      var f;
      return (f = l.onStart) == null ? void 0 : f.call(l);
    }, c.onboundary = (f) => {
      var P;
      (P = l.onBoundary) == null || P.call(l, Ds(f.charIndex, e.length));
    }, c.onend = () => {
      var f, P;
      this.utterance === c && ((f = l.onBoundary) == null || f.call(l, 1), (P = l.onEnd) == null || P.call(l), this.utterance = null);
    }, c.onerror = () => {
      var f;
      this.utterance === c && ((f = l.onError) == null || f.call(l), this.utterance = null);
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
function Ds(s, e) {
  return e ? Math.min(1, Math.max(0, s / e)) : 0;
}
let k = null;
class ue {
  constructor(e = {}) {
    u(this, "state");
    u(this, "options");
    u(this, "app", null);
    u(this, "host", null);
    u(this, "labels");
    u(this, "listeners", /* @__PURE__ */ new Set());
    u(this, "speech", new Ms());
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
      namespace: e.namespace ?? ps,
      storageKey: e.storageKey ?? fs,
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
    const t = this.options.persist ? ys(this.options.storageKey) : {}, { bigTextDock: n, ...l } = t, {
      bigTextDock: c,
      ...x
    } = e.initialState ?? {};
    this.state = Xe({
      ...oe,
      ...l,
      ...ce(x),
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
      ...this.options.locale === "en-US" ? bs : ms,
      ...e.labels
    }, this.options.autoMount && this.mount();
  }
  mount() {
    if (this.app || this.destroyed) return;
    if (k && k !== this && !k.destroyed)
      throw new Error(
        "Aging Assist already has an active instance. Destroy it before mounting another instance."
      );
    const e = le(this.options.container) ?? document.body;
    if (!e) {
      k = this, this.pendingMount || (this.pendingMount = !0, document.addEventListener("DOMContentLoaded", this.onDocumentReady, { once: !0 }));
      return;
    }
    k = this, this.host = ws("div", {
      id: `${this.options.namespace}-root`,
      "data-aging-assist-root": "true"
    }), e.appendChild(this.host), this.app = Je(ds, {
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
      ...oe,
      toolbarOpen: !1,
      enabled: !1,
      focusEnhance: !0,
      formEnhance: !0
    }), this.options.persist && xs(this.options.storageKey), this.applyEffects(), this.restoreToolbarFocus(), this.emit("disable");
  }
  reset() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.clearReadTarget(), this.setState({
      ...oe,
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
    const t = Me(e);
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
    const t = ce(e);
    if (!Object.keys(t).length) return;
    const n = this.getState(), l = Ts({ ...this.state, ...t });
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
        this.setState({ fontScale: $(this.state.fontScale + 0.1, 1, 1.8) });
        break;
      case "fontDown":
        this.setState({ fontScale: $(this.state.fontScale - 0.1, 1, 1.8) });
        break;
      case "zoomIn":
        this.setState({ pageScale: $(this.state.pageScale + 0.05, 1, 1.3) });
        break;
      case "zoomOut":
        this.setState({ pageScale: $(this.state.pageScale - 0.05, 1, 1.3) });
        break;
      case "toggle":
        Ce(t) && this.toggle(t);
        break;
      case "setBoolean": {
        const n = t;
        Ce(n == null ? void 0 : n.key) && typeof n.value == "boolean" && this.setBoolean(n.key, n.value);
        break;
      }
      case "toggleMore":
        this.setState({ moreOpen: !this.state.moreOpen });
        break;
      case "rate":
        this.setState({ speechRate: t }), this.state.currentText && this.state.speech && this.speak(this.state.currentText);
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
    const t = Es();
    if (!t.length) return;
    const n = $(this.state.readingIndex + e, 0, t.length - 1), l = t[n], c = _(l);
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
    const e = le(this.options.trigger);
    e == null || e.addEventListener("click", this.onTriggerClick);
  }
  unbindTrigger() {
    const e = le(this.options.trigger);
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
    const t = _(e);
    t && ((this.state.readingGuide || this.state.bigText) && this.applyHoverTarget(e, t, !1), !(!this.state.speech || t === this.lastSpokenText) && (this.hoverTarget = e, this.hoverTimer = window.setTimeout(() => {
      this.hoverTimer = 0, this.hoverTarget = null, this.applyHoverTarget(e, t, !0);
    }, 220)));
  }
  handleDirectTarget(e) {
    if (this.clearHoverTimer(), !this.state.enabled || !e || e.closest(this.options.ignoredSelector) || !this.state.readingGuide && !this.state.bigText && !this.state.speech) return;
    const t = _(e);
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
    const t = Math.max(this.state.speechProgress, $(e, 0, 1));
    Math.abs(this.state.speechProgress - t) < 0.01 && t !== 0 && t !== 1 || (this.state.speechProgress = t, this.notify());
  }
  startSpeechProgressClock(e) {
    this.stopSpeechProgressClock(), this.speechProgressElapsed = 0, this.speechProgressDuration = As(e, this.state.speechRate), this.speechProgressStartedAt = window.performance.now(), this.queueSpeechProgressTick();
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
    typeof MutationObserver > "u" || !document.body || ((e = this.fontScaleObserver) == null || e.disconnect(), this.fontScaleObserver = new MutationObserver(() => {
      !this.state.enabled || this.state.fontScale <= 1 || this.fontScaleFrame || (this.fontScaleFrame = window.requestAnimationFrame(() => {
        this.fontScaleFrame = 0, this.syncFontScale();
      }));
    }), this.fontScaleObserver.observe(document.body, { childList: !0, subtree: !0 }));
  }
  stopFontScaleObserver() {
    var e;
    (e = this.fontScaleObserver) == null || e.disconnect(), this.fontScaleObserver = null, this.fontScaleFrame && window.cancelAnimationFrame(this.fontScaleFrame), this.fontScaleFrame = 0, this.restoreFontScale();
  }
  syncFontScale() {
    if (!this.state.enabled || this.state.fontScale <= 1) {
      this.restoreFontScale();
      return;
    }
    Array.from(document.body.querySelectorAll("*")).forEach((t) => {
      if (!this.shouldScaleFontElement(t) || this.fontScaleElements.has(t)) return;
      const n = Number.parseFloat(window.getComputedStyle(t).fontSize);
      !Number.isFinite(n) || n <= 0 || this.fontScaleElements.set(t, {
        value: t.style.getPropertyValue("font-size"),
        priority: t.style.getPropertyPriority("font-size"),
        baseSize: n
      });
    }), this.fontScaleElements.forEach((t, n) => {
      !n.isConnected || !this.shouldScaleFontElement(n) || n.style.setProperty(
        "font-size",
        `${(t.baseSize * this.state.fontScale).toFixed(2)}px`,
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
      focusEnhance: this.state.focusEnhance,
      clickEnhance: this.state.clickEnhance,
      formEnhance: this.state.formEnhance,
      mistakeGuard: this.state.mistakeGuard
    };
    Ps(this.options.storageKey, e);
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
function $(s, e, t) {
  return Number(Math.min(t, Math.max(e, s)).toFixed(2));
}
function As(s, e) {
  const t = Math.max(s.replace(/\s+/g, "").length, 8);
  return Math.max(2600, t * 210 / e);
}
function Ce(s) {
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
const Fs = "0.1.0";
function ee(s = {}) {
  return ue.getActiveInstance() ?? new ue(s);
}
const Bs = ee, Hs = ee;
typeof window < "u" && (window.AgingAssist = {
  create: ee,
  init: ee,
  AgingAssist: ue,
  version: Fs
});
export {
  ue as AgingAssist,
  Fs as VERSION,
  Bs as create,
  ee as createAgingAssist,
  Hs as init
};
