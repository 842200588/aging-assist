var pr = Object.defineProperty;
var hr = (e, t, s) => t in e ? pr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Z = (e, t, s) => hr(e, typeof t != "symbol" ? t + "" : t, s);
/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function gt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const X = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], fe = () => {
}, Jo = () => !1, vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), fs = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Rn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, gr = Object.prototype.hasOwnProperty, K = (e, t) => gr.call(e, t), $ = Array.isArray, Mt = (e) => bs(e) === "[object Map]", Yo = (e) => bs(e) === "[object Set]", lo = (e) => bs(e) === "[object Date]", R = (e) => typeof e == "function", se = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Ln = (e) => (q(e) || R(e)) && R(e.then) && R(e.catch), Zo = Object.prototype.toString, bs = (e) => Zo.call(e), Fn = (e) => bs(e).slice(8, -1), Xo = (e) => bs(e) === "[object Object]", Hn = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, is = /* @__PURE__ */ gt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), mr = /* @__PURE__ */ gt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Zs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, vr = /-\w/g, we = Zs(
  (e) => e.replace(vr, (t) => t.slice(1).toUpperCase())
), br = /\B([A-Z])/g, xt = Zs(
  (e) => e.replace(br, "-$1").toLowerCase()
), Xs = Zs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ct = Zs(
  (e) => e ? `on${Xs(e)}` : ""
), it = (e, t) => !Object.is(e, t), Zt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Rs = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, yr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let co;
const ys = () => co || (co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qs(e) {
  if ($(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], o = se(n) ? xr(n) : Qs(n);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (se(e) || q(e))
    return e;
}
const Er = /;(?![^(]*\))/g, _r = /:([^]+)/, Nr = /\/\*[^]*?\*\//g;
function xr(e) {
  const t = {};
  return e.replace(Nr, "").split(Er).forEach((s) => {
    if (s) {
      const n = s.split(_r);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ne(e) {
  let t = "";
  if (se(e))
    t = e;
  else if ($(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ne(e[s]);
      n && (t += n + " ");
    }
  else if (q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Sr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Or = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", wr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Tr = /* @__PURE__ */ gt(Sr), Dr = /* @__PURE__ */ gt(Or), Cr = /* @__PURE__ */ gt(wr), Vr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Pr = /* @__PURE__ */ gt(Vr);
function Qo(e) {
  return !!e || e === "";
}
function Mr(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = jn(e[n], t[n]);
  return s;
}
function jn(e, t) {
  if (e === t) return !0;
  let s = lo(e), n = lo(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ke(e), n = Ke(t), s || n)
    return e === t;
  if (s = $(e), n = $(t), s || n)
    return s && n ? Mr(e, t) : !1;
  if (s = q(e), n = q(t), s || n) {
    if (!s || !n)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !jn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ei = (e) => !!(e && e.__v_isRef === !0), J = (e) => se(e) ? e : e == null ? "" : $(e) || q(e) && (e.toString === Zo || !R(e.toString)) ? ei(e) ? J(e.value) : JSON.stringify(e, ti, 2) : String(e), ti = (e, t) => ei(t) ? ti(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, o], i) => (s[cn(n, i) + " =>"] = o, s),
    {}
  )
} : Yo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => cn(s))
} : Ke(t) ? cn(t) : q(t) && !$(t) && !Xo(t) ? String(t) : t, cn = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ke(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ge;
class kr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ge && (ge.active ? (this.parent = ge, this.index = (ge.scopes || (ge.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ge;
      try {
        return ge = this, t();
      } finally {
        ge = s;
      }
    } else process.env.NODE_ENV !== "production" && this._warnOnRun && qe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ge, ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ge === this)
        ge = this.prevScope;
      else {
        let t = ge;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ar() {
  return ge;
}
let Y;
const an = /* @__PURE__ */ new WeakSet();
class si {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && (ge.active ? ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, an.has(this) && (an.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || oi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ao(this), ii(this);
    const t = Y, s = Ue;
    Y = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Y !== this && qe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ri(this), Y = t, Ue = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Kn(t);
      this.deps = this.depsTail = void 0, ao(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? an.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _n(this) && this.run();
  }
  get dirty() {
    return _n(this);
  }
}
let ni = 0, rs, ls;
function oi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ls, ls = e;
    return;
  }
  e.next = rs, rs = e;
}
function Bn() {
  ni++;
}
function Un() {
  if (--ni > 0)
    return;
  if (ls) {
    let t = ls;
    for (ls = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; rs; ) {
    let t = rs;
    for (rs = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ri(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === s && (s = o), Kn(n), $r(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  e.deps = t, e.depsTail = s;
}
function _n(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (li(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function li(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ds) || (e.globalVersion = ds, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_n(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Y, n = Ue;
  Y = e, Ue = !0;
  try {
    ii(e);
    const o = e.fn(e._value);
    (t.version === 0 || it(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Y = s, Ue = n, ri(e), e.flags &= -3;
  }
}
function Kn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), process.env.NODE_ENV !== "production" && s.subsHead === e && (s.subsHead = o), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Kn(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function $r(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const ci = [];
function We() {
  ci.push(Ue), Ue = !1;
}
function ze() {
  const e = ci.pop();
  Ue = e === void 0 ? !0 : e;
}
function ao(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Y;
    Y = void 0;
    try {
      t();
    } finally {
      Y = s;
    }
  }
}
let ds = 0;
class Ir {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Y || !Ue || Y === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Y)
      s = this.activeLink = new Ir(Y, this), Y.deps ? (s.prevDep = Y.depsTail, Y.depsTail.nextDep = s, Y.depsTail = s) : Y.deps = Y.depsTail = s, ai(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Y.depsTail, s.nextDep = void 0, Y.depsTail.nextDep = s, Y.depsTail = s, Y.deps === s && (Y.deps = n);
    }
    return process.env.NODE_ENV !== "production" && Y.onTrack && Y.onTrack(
      ie(
        {
          effect: Y
        },
        t
      )
    ), s;
  }
  trigger(t) {
    this.version++, ds++, this.notify(t);
  }
  notify(t) {
    Bn();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let s = this.subsHead; s; s = s.nextSub)
          s.sub.onTrigger && !(s.sub.flags & 8) && s.sub.onTrigger(
            ie(
              {
                effect: s.sub
              },
              t
            )
          );
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Un();
    }
  }
}
function ai(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ai(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Nn = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), xn = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ps = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ue(e, t, s) {
  if (Ue && Y) {
    let n = Nn.get(e);
    n || Nn.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(s);
    o || (n.set(s, o = new qn()), o.map = n, o.key = s), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: s
    }) : o.track();
  }
}
function rt(e, t, s, n, o, i) {
  const r = Nn.get(e);
  if (!r) {
    ds++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: s,
      newValue: n,
      oldValue: o,
      oldTarget: i
    }) : a.trigger());
  };
  if (Bn(), t === "clear")
    r.forEach(l);
  else {
    const a = $(e), p = a && Hn(s);
    if (a && s === "length") {
      const d = Number(n);
      r.forEach((f, m) => {
        (m === "length" || m === ps || !Ke(m) && m >= d) && l(f);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && l(r.get(s)), p && l(r.get(ps)), t) {
        case "add":
          a ? p && l(r.get("length")) : (l(r.get(kt)), Mt(e) && l(r.get(xn)));
          break;
        case "delete":
          a || (l(r.get(kt)), Mt(e) && l(r.get(xn)));
          break;
        case "set":
          Mt(e) && l(r.get(kt));
          break;
      }
  }
  Un();
}
function Rt(e) {
  const t = /* @__PURE__ */ F(e);
  return t === e ? t : (ue(t, "iterate", ps), /* @__PURE__ */ Se(e) ? t : t.map(Je));
}
function en(e) {
  return ue(e = /* @__PURE__ */ F(e), "iterate", ps), e;
}
function ot(e, t) {
  return /* @__PURE__ */ Ge(e) ? qt(/* @__PURE__ */ Nt(e) ? Je(t) : t) : Je(t);
}
const Rr = {
  __proto__: null,
  [Symbol.iterator]() {
    return un(this, Symbol.iterator, (e) => ot(this, e));
  },
  concat(...e) {
    return Rt(this).concat(
      ...e.map((t) => $(t) ? Rt(t) : t)
    );
  },
  entries() {
    return un(this, "entries", (e) => (e[1] = ot(this, e[1]), e));
  },
  every(e, t) {
    return at(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return at(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => ot(this, n)),
      arguments
    );
  },
  find(e, t) {
    return at(
      this,
      "find",
      e,
      t,
      (s) => ot(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return at(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return at(
      this,
      "findLast",
      e,
      t,
      (s) => ot(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return at(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return at(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return fn(this, "includes", e);
  },
  indexOf(...e) {
    return fn(this, "indexOf", e);
  },
  join(e) {
    return Rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return fn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return at(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xt(this, "pop");
  },
  push(...e) {
    return Xt(this, "push", e);
  },
  reduce(e, ...t) {
    return uo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return uo(this, "reduceRight", e, t);
  },
  shift() {
    return Xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return at(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xt(this, "splice", e);
  },
  toReversed() {
    return Rt(this).toReversed();
  },
  toSorted(e) {
    return Rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xt(this, "unshift", e);
  },
  values() {
    return un(this, "values", (e) => ot(this, e));
  }
};
function un(e, t, s) {
  const n = en(e), o = n[t]();
  return n !== e && !/* @__PURE__ */ Se(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = s(i.value)), i;
  }), o;
}
const Lr = Array.prototype;
function at(e, t, s, n, o, i) {
  const r = en(e), l = r !== e && !/* @__PURE__ */ Se(e), a = r[t];
  if (a !== Lr[t]) {
    const f = a.apply(e, i);
    return l ? Je(f) : f;
  }
  let p = s;
  r !== e && (l ? p = function(f, m) {
    return s.call(this, ot(e, f), m, e);
  } : s.length > 2 && (p = function(f, m) {
    return s.call(this, f, m, e);
  }));
  const d = a.call(r, p, n);
  return l && o ? o(d) : d;
}
function uo(e, t, s, n) {
  const o = en(e), i = o !== e && !/* @__PURE__ */ Se(e);
  let r = s, l = !1;
  o !== e && (i ? (l = n.length === 0, r = function(p, d, f) {
    return l && (l = !1, p = ot(e, p)), s.call(this, p, ot(e, d), f, e);
  }) : s.length > 3 && (r = function(p, d, f) {
    return s.call(this, p, d, f, e);
  }));
  const a = o[t](r, ...n);
  return l ? ot(e, a) : a;
}
function fn(e, t, s) {
  const n = /* @__PURE__ */ F(e);
  ue(n, "iterate", ps);
  const o = n[t](...s);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ls(s[0]) ? (s[0] = /* @__PURE__ */ F(s[0]), n[t](...s)) : o;
}
function Xt(e, t, s = []) {
  We(), Bn();
  const n = (/* @__PURE__ */ F(e))[t].apply(e, s);
  return Un(), ze(), n;
}
const Fr = /* @__PURE__ */ gt("__proto__,__v_isRef,__isVue"), ui = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function Hr(e) {
  Ke(e) || (e = String(e));
  const t = /* @__PURE__ */ F(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
class fi {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !o;
    if (s === "__v_isReadonly")
      return o;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (o ? i ? vi : mi : i ? gi : hi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = $(t);
    if (!o) {
      let a;
      if (r && (a = Rr[s]))
        return a;
      if (s === "hasOwnProperty")
        return Hr;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : n
    );
    if ((Ke(s) ? ui.has(s) : Fr(s)) || (o || ue(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ ce(l)) {
      const a = r && Hn(s) ? l : l.value;
      return o && q(a) ? /* @__PURE__ */ On(a) : a;
    }
    return q(l) ? o ? /* @__PURE__ */ On(l) : /* @__PURE__ */ sn(l) : l;
  }
}
class di extends fi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, o) {
    let i = t[s];
    const r = $(t) && Hn(s);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ Ge(i);
      if (!/* @__PURE__ */ Se(n) && !/* @__PURE__ */ Ge(n) && (i = /* @__PURE__ */ F(i), n = /* @__PURE__ */ F(n)), !r && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(n))
        return p ? (process.env.NODE_ENV !== "production" && qe(
          `Set operation on key "${String(s)}" failed: target is readonly.`,
          t[s]
        ), !0) : (i.value = n, !0);
    }
    const l = r ? Number(s) < t.length : K(t, s), a = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ ce(t) ? t : o
    );
    return t === /* @__PURE__ */ F(o) && (l ? it(n, i) && rt(t, "set", s, n, i) : rt(t, "add", s, n)), a;
  }
  deleteProperty(t, s) {
    const n = K(t, s), o = t[s], i = Reflect.deleteProperty(t, s);
    return i && n && rt(t, "delete", s, void 0, o), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ke(s) || !ui.has(s)) && ue(t, "has", s), n;
  }
  ownKeys(t) {
    return ue(
      t,
      "iterate",
      $(t) ? "length" : kt
    ), Reflect.ownKeys(t);
  }
}
class pi extends fi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return process.env.NODE_ENV !== "production" && qe(
      `Set operation on key "${String(s)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, s) {
    return process.env.NODE_ENV !== "production" && qe(
      `Delete operation on key "${String(s)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const jr = /* @__PURE__ */ new di(), Br = /* @__PURE__ */ new pi(), Ur = /* @__PURE__ */ new di(!0), Kr = /* @__PURE__ */ new pi(!0), Sn = (e) => e, Os = (e) => Reflect.getPrototypeOf(e);
function qr(e, t, s) {
  return function(...n) {
    const o = this.__v_raw, i = /* @__PURE__ */ F(o), r = Mt(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, p = o[e](...n), d = s ? Sn : t ? qt : Je;
    return !t && ue(
      i,
      "iterate",
      a ? xn : kt
    ), ie(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: f, done: m } = p.next();
          return m ? { value: f, done: m } : {
            value: l ? [d(f[0]), d(f[1])] : d(f),
            done: m
          };
        }
      }
    );
  };
}
function ws(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const s = t[0] ? `on key "${t[0]}" ` : "";
      qe(
        `${Xs(e)} operation ${s}failed: target is readonly.`,
        /* @__PURE__ */ F(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wr(e, t) {
  const s = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ F(i), l = /* @__PURE__ */ F(o);
      e || (it(o, l) && ue(r, "get", o), ue(r, "get", l));
      const { has: a } = Os(r), p = t ? Sn : e ? qt : Je;
      if (a.call(r, o))
        return p(i.get(o));
      if (a.call(r, l))
        return p(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ue(/* @__PURE__ */ F(o), "iterate", kt), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ F(i), l = /* @__PURE__ */ F(o);
      return e || (it(o, l) && ue(r, "has", o), ue(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ F(l), p = t ? Sn : e ? qt : Je;
      return !e && ue(a, "iterate", kt), l.forEach((d, f) => o.call(i, p(d), p(f), r));
    }
  };
  return ie(
    s,
    e ? {
      add: ws("add"),
      set: ws("set"),
      delete: ws("delete"),
      clear: ws("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ F(this), r = Os(i), l = /* @__PURE__ */ F(o), a = !t && !/* @__PURE__ */ Se(o) && !/* @__PURE__ */ Ge(o) ? l : o;
        return r.has.call(i, a) || it(o, a) && r.has.call(i, o) || it(l, a) && r.has.call(i, l) || (i.add(a), rt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Se(i) && !/* @__PURE__ */ Ge(i) && (i = /* @__PURE__ */ F(i));
        const r = /* @__PURE__ */ F(this), { has: l, get: a } = Os(r);
        let p = l.call(r, o);
        p ? process.env.NODE_ENV !== "production" && fo(r, l, o) : (o = /* @__PURE__ */ F(o), p = l.call(r, o));
        const d = a.call(r, o);
        return r.set(o, i), p ? it(i, d) && rt(r, "set", o, i, d) : rt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ F(this), { has: r, get: l } = Os(i);
        let a = r.call(i, o);
        a ? process.env.NODE_ENV !== "production" && fo(i, r, o) : (o = /* @__PURE__ */ F(o), a = r.call(i, o));
        const p = l ? l.call(i, o) : void 0, d = i.delete(o);
        return a && rt(i, "delete", o, void 0, p), d;
      },
      clear() {
        const o = /* @__PURE__ */ F(this), i = o.size !== 0, r = process.env.NODE_ENV !== "production" ? Mt(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && rt(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    s[o] = qr(o, e, t);
  }), s;
}
function tn(e, t) {
  const s = Wr(e, t);
  return (n, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    K(s, o) && o in n ? s : n,
    o,
    i
  );
}
const zr = {
  get: /* @__PURE__ */ tn(!1, !1)
}, Gr = {
  get: /* @__PURE__ */ tn(!1, !0)
}, Jr = {
  get: /* @__PURE__ */ tn(!0, !1)
}, Yr = {
  get: /* @__PURE__ */ tn(!0, !0)
};
function fo(e, t, s) {
  const n = /* @__PURE__ */ F(s);
  if (n !== s && t.call(e, n)) {
    const o = Fn(e);
    qe(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const hi = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap();
function Zr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
  return /* @__PURE__ */ Ge(e) ? e : nn(
    e,
    !1,
    jr,
    zr,
    hi
  );
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return nn(
    e,
    !1,
    Ur,
    Gr,
    gi
  );
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return nn(
    e,
    !0,
    Br,
    Jr,
    mi
  );
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return nn(
    e,
    !0,
    Kr,
    Yr,
    vi
  );
}
function nn(e, t, s, n, o) {
  if (!q(e))
    return process.env.NODE_ENV !== "production" && qe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = Zr(Fn(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? n : s
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return /* @__PURE__ */ Ge(e) ? /* @__PURE__ */ Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ F(t) : e;
}
function Qr(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && Rs(e, "__v_skip", !0), e;
}
const Je = (e) => q(e) ? /* @__PURE__ */ sn(e) : e, qt = (e) => q(e) ? /* @__PURE__ */ On(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return el(e, !1);
}
function el(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new tl(e, t);
}
class tl {
  constructor(t, s) {
    this.dep = new qn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ F(t), this._value = s ? t : Je(t), this.__v_isShallow = s;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Se(t) || /* @__PURE__ */ Ge(t);
    t = n ? t : /* @__PURE__ */ F(t), it(t, s) && (this._rawValue = t, this._value = n ? t : Je(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: s
    }) : this.dep.trigger());
  }
}
function Q(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const sl = {
  get: (e, t, s) => t === "__v_raw" ? e : Q(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const o = e[t];
    return /* @__PURE__ */ ce(o) && !/* @__PURE__ */ ce(s) ? (o.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function bi(e) {
  return /* @__PURE__ */ Nt(e) ? e : new Proxy(e, sl);
}
class nl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new qn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ds - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Y !== this)
      return oi(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return li(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && qe("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function ol(e, t, s = !1) {
  let n, o;
  R(e) ? n = e : (n = e.get, o = e.set);
  const i = new nl(n, o, s);
  return process.env.NODE_ENV, i;
}
const Ts = {}, Fs = /* @__PURE__ */ new WeakMap();
let Vt;
function il(e, t = !1, s = Vt) {
  if (s) {
    let n = Fs.get(s);
    n || Fs.set(s, n = []), n.push(e);
  } else process.env.NODE_ENV !== "production" && !t && qe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function rl(e, t, s = X) {
  const { immediate: n, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = s, p = (P) => {
    (s.onWarn || qe)(
      "Invalid watch source: ",
      P,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (P) => o ? P : /* @__PURE__ */ Se(P) || o === !1 || o === 0 ? _t(P, 1) : _t(P);
  let f, m, O, A, V = !1, te = !1;
  if (/* @__PURE__ */ ce(e) ? (m = () => e.value, V = /* @__PURE__ */ Se(e)) : /* @__PURE__ */ Nt(e) ? (m = () => d(e), V = !0) : $(e) ? (te = !0, V = e.some((P) => /* @__PURE__ */ Nt(P) || /* @__PURE__ */ Se(P)), m = () => e.map((P) => {
    if (/* @__PURE__ */ ce(P))
      return P.value;
    if (/* @__PURE__ */ Nt(P))
      return d(P);
    if (R(P))
      return a ? a(P, 2) : P();
    process.env.NODE_ENV !== "production" && p(P);
  })) : R(e) ? t ? m = a ? () => a(e, 2) : e : m = () => {
    if (O) {
      We();
      try {
        O();
      } finally {
        ze();
      }
    }
    const P = Vt;
    Vt = f;
    try {
      return a ? a(e, 3, [A]) : e(A);
    } finally {
      Vt = P;
    }
  } : (m = fe, process.env.NODE_ENV !== "production" && p(e)), t && o) {
    const P = m, oe = o === !0 ? 1 / 0 : o;
    m = () => _t(P(), oe);
  }
  const ee = Ar(), M = () => {
    f.stop(), ee && ee.active && Rn(ee.effects, f);
  };
  if (i && t) {
    const P = t;
    t = (...oe) => {
      const re = P(...oe);
      return M(), re;
    };
  }
  let B = te ? new Array(e.length).fill(Ts) : Ts;
  const de = (P) => {
    if (!(!(f.flags & 1) || !f.dirty && !P))
      if (t) {
        const oe = f.run();
        if (P || o || V || (te ? oe.some((re, pe) => it(re, B[pe])) : it(oe, B))) {
          O && O();
          const re = Vt;
          Vt = f;
          try {
            const pe = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              B === Ts ? void 0 : te && B[0] === Ts ? [] : B,
              A
            ];
            B = oe, a ? a(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Vt = re;
          }
        }
      } else
        f.run();
  };
  return l && l(de), f = new si(m), f.scheduler = r ? () => r(de, !1) : de, A = (P) => il(P, !1, f), O = f.onStop = () => {
    const P = Fs.get(f);
    if (P) {
      if (a)
        a(P, 4);
      else
        for (const oe of P) oe();
      Fs.delete(f);
    }
  }, process.env.NODE_ENV !== "production" && (f.onTrack = s.onTrack, f.onTrigger = s.onTrigger), t ? n ? de(!0) : B = f.run() : r ? r(de.bind(null, !0), !0) : f.run(), M.pause = f.pause.bind(f), M.resume = f.resume.bind(f), M.stop = M, M;
}
function _t(e, t = 1 / 0, s) {
  if (t <= 0 || !q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ ce(e))
    _t(e.value, t, s);
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      _t(e[n], t, s);
  else if (Yo(e) || Mt(e))
    e.forEach((n) => {
      _t(n, t, s);
    });
  else if (Xo(e)) {
    for (const n in e)
      _t(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && _t(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const At = [];
function Cs(e) {
  At.push(e);
}
function Vs() {
  At.pop();
}
let dn = !1;
function x(e, ...t) {
  if (dn) return;
  dn = !0, We();
  const s = At.length ? At[At.length - 1].component : null, n = s && s.appContext.config.warnHandler, o = ll();
  if (n)
    zt(
      n,
      s,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        s && s.proxy,
        o.map(
          ({ vnode: i }) => `at <${Ss(s, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...cl(o)), console.warn(...i);
  }
  ze(), dn = !1;
}
function ll() {
  let e = At[At.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const s = t[0];
    s && s.vnode === e ? s.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function cl(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...al(s));
  }), t;
}
function al({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, o = ` at <${Ss(
    e.component,
    e.type,
    n
  )}`, i = ">" + s;
  return e.props ? [o, ...ul(e.props), i] : [o + i];
}
function ul(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...yi(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function yi(e, t, s) {
  return se(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : /* @__PURE__ */ ce(t) ? (t = yi(e, /* @__PURE__ */ F(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ F(t), s ? t : [`${e}=`, t]);
}
const Wn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function zt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    Es(o, t, s);
  }
}
function Ye(e, t, s, n) {
  if (R(e)) {
    const o = zt(e, t, s, n);
    return o && Ln(o) && o.catch((i) => {
      Es(i, t, s);
    }), o;
  }
  if ($(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ye(e[i], t, s, n));
    return o;
  } else process.env.NODE_ENV !== "production" && x(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Es(e, t, s, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const a = t.proxy, p = process.env.NODE_ENV !== "production" ? Wn[s] : `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, a, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      We(), zt(i, null, 10, [
        e,
        a,
        p
      ]), ze();
      return;
    }
  }
  fl(e, s, o, n, r);
}
function fl(e, t, s, n = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = Wn[t];
    if (s && Cs(s), x(`Unhandled error${i ? ` during execution of ${i}` : ""}`), s && Vs(), n)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const xe = [];
let nt = -1;
const Ut = [];
let Et = null, jt = 0;
const Ei = /* @__PURE__ */ Promise.resolve();
let Hs = null;
const dl = 100;
function Pt(e) {
  const t = Hs || Ei;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pl(e) {
  let t = nt + 1, s = xe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, o = xe[n], i = hs(o);
    i < e || i === e && o.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function on(e) {
  if (!(e.flags & 1)) {
    const t = hs(e), s = xe[xe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hs(s) ? xe.push(e) : xe.splice(pl(t), 0, e), e.flags |= 1, _i();
  }
}
function _i() {
  Hs || (Hs = Ei.then(Si));
}
function Ni(e) {
  $(e) ? Ut.push(...e) : Et && e.id === -1 ? Et.splice(jt + 1, 0, e) : e.flags & 1 || (Ut.push(e), e.flags |= 1), _i();
}
function po(e, t, s = nt + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); s < xe.length; s++) {
    const n = xe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid || process.env.NODE_ENV !== "production" && zn(t, n))
        continue;
      xe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function xi(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)].sort(
      (s, n) => hs(s) - hs(n)
    );
    if (Ut.length = 0, Et) {
      Et.push(...t);
      return;
    }
    for (Et = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), jt = 0; jt < Et.length; jt++) {
      const s = Et[jt];
      process.env.NODE_ENV !== "production" && zn(e, s) || (s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2);
    }
    Et = null, jt = 0;
  }
}
const hs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Si(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (s) => zn(e, s) : fe;
  try {
    for (nt = 0; nt < xe.length; nt++) {
      const s = xe[nt];
      if (s && !(s.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(s))
          continue;
        s.flags & 4 && (s.flags &= -2), zt(
          s,
          s.i,
          s.i ? 15 : 14
        ), s.flags & 4 || (s.flags &= -2);
      }
    }
  } finally {
    for (; nt < xe.length; nt++) {
      const s = xe[nt];
      s && (s.flags &= -2);
    }
    nt = -1, xe.length = 0, xi(e), Hs = null, (xe.length || Ut.length) && Si(e);
  }
}
function zn(e, t) {
  const s = e.get(t) || 0;
  if (s > dl) {
    const n = t.i, o = n && cr(n.type);
    return Es(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, s + 1), !1;
}
let Me = !1;
const ho = (e) => {
  try {
    return Me;
  } finally {
    Me = e;
  }
}, Ps = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ys().__VUE_HMR_RUNTIME__ = {
  createRecord: pn(Oi),
  rerender: pn(ml),
  reload: pn(vl)
});
const It = /* @__PURE__ */ new Map();
function hl(e) {
  const t = e.type.__hmrId;
  let s = It.get(t);
  s || (Oi(t, e.type), s = It.get(t)), s.instances.add(e);
}
function gl(e) {
  It.get(e.type.__hmrId).instances.delete(e);
}
function Oi(e, t) {
  return It.has(e) ? !1 : (It.set(e, {
    initialDef: js(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function js(e) {
  return ar(e) ? e.__vccOpts : e;
}
function ml(e, t) {
  const s = It.get(e);
  s && (s.initialDef.render = t, [...s.instances].forEach((n) => {
    t && (n.render = t, js(n.type).render = t), n.renderCache = [], Me = !0, n.job.flags & 8 || n.update(), Me = !1;
  }));
}
function vl(e, t) {
  const s = It.get(e);
  if (!s) return;
  t = js(t), go(s.initialDef, t);
  const n = [...s.instances];
  for (let o = 0; o < n.length; o++) {
    const i = n[o], r = js(i.type);
    let l = Ps.get(r);
    l || (r !== s.initialDef && go(r, t), Ps.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? on(() => {
      i.job.flags & 8 || (Me = !0, i.parent.update(), Me = !1, l.delete(i));
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  Ni(() => {
    Ps.clear();
  });
}
function go(e, t) {
  ie(e, t);
  for (const s in e)
    s !== "__file" && !(s in t) && delete e[s];
}
function pn(e) {
  return (t, s) => {
    try {
      return e(t, s);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Be, ts = [], wn = !1;
function _s(e, ...t) {
  Be ? Be.emit(e, ...t) : wn || ts.push({ event: e, args: t });
}
function Gn(e, t) {
  var s, n;
  Be = e, Be ? (Be.enabled = !0, ts.forEach(({ event: o, args: i }) => Be.emit(o, ...i)), ts = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (s = window.navigator) == null ? void 0 : s.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Gn(i, t);
  }), setTimeout(() => {
    Be || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, wn = !0, ts = []);
  }, 3e3)) : (wn = !0, ts = []);
}
function bl(e, t) {
  _s("app:init", e, t, {
    Fragment: Re,
    Text: Ns,
    Comment: $e,
    Static: As
  });
}
function yl(e) {
  _s("app:unmount", e);
}
const El = /* @__PURE__ */ Jn(
  "component:added"
  /* COMPONENT_ADDED */
), wi = /* @__PURE__ */ Jn(
  "component:updated"
  /* COMPONENT_UPDATED */
), _l = /* @__PURE__ */ Jn(
  "component:removed"
  /* COMPONENT_REMOVED */
), Nl = (e) => {
  Be && typeof Be.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Be.cleanupBuffer(e) && _l(e);
};
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  return (t) => {
    _s(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const xl = /* @__PURE__ */ Ti(
  "perf:start"
  /* PERFORMANCE_START */
), Sl = /* @__PURE__ */ Ti(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ti(e) {
  return (t, s, n) => {
    _s(e, t.appContext.app, t.uid, t, s, n);
  };
}
function Ol(e, t, s) {
  _s(
    "component:emit",
    e.appContext.app,
    e,
    t,
    s
  );
}
let ke = null, Di = null;
function Bs(e) {
  const t = ke;
  return ke = e, Di = e && e.type.__scopeId || null, t;
}
function wl(e, t = ke, s) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && zs(-1);
    const i = Bs(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Bs(i), n._d && zs(1);
    }
    return process.env.NODE_ENV !== "production" && wi(t), r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ci(e) {
  mr(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function Tt(e, t, s, n) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[n];
    a && (We(), Ye(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), ze());
  }
}
function Tl(e, t) {
  if (process.env.NODE_ENV !== "production" && (!ae || ae.isMounted) && x("provide() can only be used inside setup()."), ae) {
    let s = ae.provides;
    const n = ae.parent && ae.parent.provides;
    n === s && (s = ae.provides = Object.create(n)), s[e] = t;
  }
}
function Ms(e, t, s = !1) {
  const n = ir();
  if (n || Kt) {
    let o = Kt ? Kt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return s && R(t) ? t.call(n && n.proxy) : t;
    process.env.NODE_ENV !== "production" && x(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && x("inject() can only be used inside setup() or functional components.");
}
const Dl = /* @__PURE__ */ Symbol.for("v-scx"), Cl = () => {
  {
    const e = Ms(Dl);
    return e || process.env.NODE_ENV !== "production" && x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ft(e, t, s) {
  return process.env.NODE_ENV !== "production" && !R(t) && x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Vi(e, t, s);
}
function Vi(e, t, s = X) {
  const { immediate: n, deep: o, flush: i, once: r } = s;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ie({}, s);
  process.env.NODE_ENV !== "production" && (l.onWarn = x);
  const a = t && n || !t && i !== "post";
  let p;
  if (ms) {
    if (i === "sync") {
      const O = Cl();
      p = O.__watcherHandles || (O.__watcherHandles = []);
    } else if (!a) {
      const O = () => {
      };
      return O.stop = fe, O.resume = fe, O.pause = fe, O;
    }
  }
  const d = ae;
  l.call = (O, A, V) => Ye(O, d, A, V);
  let f = !1;
  i === "post" ? l.scheduler = (O) => {
    Oe(O, d && d.suspense);
  } : i !== "sync" && (f = !0, l.scheduler = (O, A) => {
    A ? O() : on(O);
  }), l.augmentJob = (O) => {
    t && (O.flags |= 4), f && (O.flags |= 2, d && (O.id = d.uid, O.i = d));
  };
  const m = rl(e, t, l);
  return ms && (p ? p.push(m) : a && m()), m;
}
function Vl(e, t, s) {
  const n = this.proxy, o = se(e) ? e.includes(".") ? Pi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  R(t) ? i = t : (i = t.handler, s = t);
  const r = xs(this), l = Vi(o, i.bind(n), s);
  return r(), l;
}
function Pi(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < s.length && n; o++)
      n = n[s[o]];
    return n;
  };
}
const Pl = /* @__PURE__ */ Symbol("_vte"), Ml = (e) => e.__isTeleport, hn = /* @__PURE__ */ Symbol("_leaveCb");
function Yn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function kl(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function Mi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const mo = /* @__PURE__ */ new WeakSet();
function vo(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Us = /* @__PURE__ */ new WeakMap();
function cs(e, t, s, n, o = !1) {
  if ($(e)) {
    e.forEach(
      (V, te) => cs(
        V,
        t && ($(t) ? t[te] : t),
        s,
        n,
        o
      )
    );
    return;
  }
  if (as(n) && !o) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && cs(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? no(n.component) : n.el, r = o ? null : i, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === X ? l.refs = {} : l.refs, f = l.setupState, m = /* @__PURE__ */ F(f), O = f === X ? Jo : (V) => process.env.NODE_ENV !== "production" && (K(m, V) && !/* @__PURE__ */ ce(m[V]) && x(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), mo.has(m[V])) || vo(d, V) ? !1 : K(m, V), A = (V, te) => !(process.env.NODE_ENV !== "production" && mo.has(V) || te && vo(d, te));
  if (p != null && p !== a) {
    if (bo(t), se(p))
      d[p] = null, O(p) && (f[p] = null);
    else if (/* @__PURE__ */ ce(p)) {
      const V = t;
      A(p, V.k) && (p.value = null), V.k && (d[V.k] = null);
    }
  }
  if (R(a))
    zt(a, l, 12, [r, d]);
  else {
    const V = se(a), te = /* @__PURE__ */ ce(a);
    if (V || te) {
      const ee = () => {
        if (e.f) {
          const M = V ? O(a) ? f[a] : d[a] : A(a) || !e.k ? a.value : d[e.k];
          if (o)
            $(M) && Rn(M, i);
          else if ($(M))
            M.includes(i) || M.push(i);
          else if (V)
            d[a] = [i], O(a) && (f[a] = d[a]);
          else {
            const B = [i];
            A(a, e.k) && (a.value = B), e.k && (d[e.k] = B);
          }
        } else V ? (d[a] = r, O(a) && (f[a] = r)) : te ? (A(a, e.k) && (a.value = r), e.k && (d[e.k] = r)) : process.env.NODE_ENV !== "production" && x("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (r) {
        const M = () => {
          ee(), Us.delete(e);
        };
        M.id = -1, Us.set(e, M), Oe(M, s);
      } else
        bo(e), ee();
    } else process.env.NODE_ENV !== "production" && x("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function bo(e) {
  const t = Us.get(e);
  t && (t.flags |= 8, Us.delete(e));
}
ys().requestIdleCallback;
ys().cancelIdleCallback;
const as = (e) => !!e.type.__asyncLoader, Zn = (e) => e.type.__isKeepAlive;
function Al(e, t) {
  ki(e, "a", t);
}
function $l(e, t) {
  ki(e, "da", t);
}
function ki(e, t, s = ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = s;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (rn(t, n, s), s) {
    let o = s.parent;
    for (; o && o.parent; )
      Zn(o.parent.vnode) && Il(n, t, s, o), o = o.parent;
  }
}
function Il(e, t, s, n) {
  const o = rn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ii(() => {
    Rn(n[t], o);
  }, s);
}
function rn(e, t, s = ae, n = !1) {
  if (s) {
    const o = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...r) => {
      We();
      const l = xs(s), a = Ye(t, s, e, r);
      return l(), ze(), a;
    });
    return n ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Ct(Wn[e].replace(/ hook$/, ""));
    x(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const mt = (e) => (t, s = ae) => {
  (!ms || e === "sp") && rn(e, (...n) => t(...n), s);
}, Rl = mt("bm"), Ai = mt("m"), Ll = mt(
  "bu"
), Fl = mt("u"), $i = mt(
  "bum"
), Ii = mt("um"), Hl = mt(
  "sp"
), jl = mt("rtg"), Bl = mt("rtc");
function Ul(e, t = ae) {
  rn("ec", e, t);
}
const Kl = /* @__PURE__ */ Symbol.for("v-ndc");
function yo(e, t, s, n) {
  let o;
  const i = s, r = $(e);
  if (r || se(e)) {
    const l = r && /* @__PURE__ */ Nt(e);
    let a = !1, p = !1;
    l && (a = !/* @__PURE__ */ Se(e), p = /* @__PURE__ */ Ge(e), e = en(e)), o = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      o[d] = t(
        a ? p ? qt(Je(e[d])) : Je(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number")
    if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0))
      x(
        `The v-for range expects a positive integer value but got ${e}.`
      ), o = [];
    else {
      o = new Array(e);
      for (let l = 0; l < e; l++)
        o[l] = t(l + 1, l, void 0, i);
    }
  else if (q(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, p = l.length; a < p; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, i);
      }
    }
  else
    o = [];
  return o;
}
const Tn = (e) => e ? rr(e) ? no(e) : Tn(e.parent) : null, $t = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(e.refs) : e.refs,
    $parent: (e) => Tn(e.parent),
    $root: (e) => Tn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      on(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Vl.bind(e)
  })
), Xn = (e) => e === "_" || e === "$", gn = (e, t) => e !== X && !e.__isScriptSetup && K(e, t), Ri = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const m = r[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (gn(n, t))
          return r[t] = 1, n[t];
        if (o !== X && K(o, t))
          return r[t] = 2, o[t];
        if (K(i, t))
          return r[t] = 3, i[t];
        if (s !== X && K(s, t))
          return r[t] = 4, s[t];
        Dn && (r[t] = 0);
      }
    }
    const p = $t[t];
    let d, f;
    if (p)
      return t === "$attrs" ? (ue(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && qs()) : process.env.NODE_ENV !== "production" && t === "$slots" && ue(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (s !== X && K(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      f = a.config.globalProperties, K(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && ke && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== X && Xn(t[0]) && K(o, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ke && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: o, ctx: i } = e;
    return gn(o, t) ? (o[t] = s, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && K(o, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== X && K(n, t) ? (n[t] = s, !0) : K(e.props, t) ? (process.env.NODE_ENV !== "production" && x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && x(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: s
    }) : i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(s[l] || e !== X && l[0] !== "$" && K(e, l) || gn(t, l) || K(i, l) || K(n, l) || K($t, l) || K(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : K(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
process.env.NODE_ENV !== "production" && (Ri.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ql(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys($t).forEach((s) => {
    Object.defineProperty(t, s, {
      configurable: !0,
      enumerable: !1,
      get: () => $t[s](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: fe
    });
  }), t;
}
function Wl(e) {
  const {
    ctx: t,
    propsOptions: [s]
  } = e;
  s && Object.keys(s).forEach((n) => {
    Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[n],
      set: fe
    });
  });
}
function zl(e) {
  const { ctx: t, setupState: s } = e;
  Object.keys(/* @__PURE__ */ F(s)).forEach((n) => {
    if (!s.__isScriptSetup) {
      if (Xn(n[0])) {
        x(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        get: () => s[n],
        set: fe
      });
    }
  });
}
function Eo(e) {
  return $(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
function Gl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, s) => {
    e[s] ? x(`${t} property "${s}" is already defined in ${e[s]}.`) : e[s] = t;
  };
}
let Dn = !0;
function Jl(e) {
  const t = Fi(e), s = e.proxy, n = e.ctx;
  Dn = !1, t.beforeCreate && _o(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: m,
    beforeUpdate: O,
    updated: A,
    activated: V,
    deactivated: te,
    beforeDestroy: ee,
    beforeUnmount: M,
    destroyed: B,
    unmounted: de,
    render: P,
    renderTracked: oe,
    renderTriggered: re,
    errorCaptured: pe,
    serverPrefetch: me,
    // public API
    expose: Te,
    inheritAttrs: Ze,
    // assets
    components: De,
    directives: Ot,
    filters: Gt
  } = t, be = process.env.NODE_ENV !== "production" ? Gl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const j in U)
        be("Props", j);
  }
  if (p && Yl(p, n, be), r)
    for (const U in r) {
      const j = r[U];
      R(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(n, U, {
        value: j.bind(s),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[U] = j.bind(s), process.env.NODE_ENV !== "production" && be("Methods", U)) : process.env.NODE_ENV !== "production" && x(
        `Method "${U}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !R(o) && x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = o.call(s, s);
    if (process.env.NODE_ENV !== "production" && Ln(U) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(U))
      process.env.NODE_ENV !== "production" && x("data() should return an object.");
    else if (e.data = /* @__PURE__ */ sn(U), process.env.NODE_ENV !== "production")
      for (const j in U)
        be("Data", j), Xn(j[0]) || Object.defineProperty(n, j, {
          configurable: !0,
          enumerable: !0,
          get: () => U[j],
          set: fe
        });
  }
  if (Dn = !0, i)
    for (const U in i) {
      const j = i[U], Ce = R(j) ? j.bind(s, s) : R(j.get) ? j.get.bind(s, s) : fe;
      process.env.NODE_ENV !== "production" && Ce === fe && x(`Computed property "${U}" has no getter.`);
      const vt = !R(j) && R(j.set) ? j.set.bind(s) : process.env.NODE_ENV !== "production" ? () => {
        x(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : fe, wt = Is({
        get: Ce,
        set: vt
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (bt) => wt.value = bt
      }), process.env.NODE_ENV !== "production" && be("Computed", U);
    }
  if (l)
    for (const U in l)
      Li(l[U], n, s, U);
  if (a) {
    const U = R(a) ? a.call(s) : a;
    Reflect.ownKeys(U).forEach((j) => {
      Tl(j, U[j]);
    });
  }
  d && _o(d, e, "c");
  function ve(U, j) {
    $(j) ? j.forEach((Ce) => U(Ce.bind(s))) : j && U(j.bind(s));
  }
  if (ve(Rl, f), ve(Ai, m), ve(Ll, O), ve(Fl, A), ve(Al, V), ve($l, te), ve(Ul, pe), ve(Bl, oe), ve(jl, re), ve($i, M), ve(Ii, de), ve(Hl, me), $(Te))
    if (Te.length) {
      const U = e.exposed || (e.exposed = {});
      Te.forEach((j) => {
        Object.defineProperty(U, j, {
          get: () => s[j],
          set: (Ce) => s[j] = Ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === fe && (e.render = P), Ze != null && (e.inheritAttrs = Ze), De && (e.components = De), Ot && (e.directives = Ot), me && Mi(e);
}
function Yl(e, t, s = fe) {
  $(e) && (e = Cn(e));
  for (const n in e) {
    const o = e[n];
    let i;
    q(o) ? "default" in o ? i = Ms(
      o.from || n,
      o.default,
      !0
    ) : i = Ms(o.from || n) : i = Ms(o), /* @__PURE__ */ ce(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[n] = i, process.env.NODE_ENV !== "production" && s("Inject", n);
  }
}
function _o(e, t, s) {
  Ye(
    $(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Li(e, t, s, n) {
  let o = n.includes(".") ? Pi(s, n) : () => s[n];
  if (se(e)) {
    const i = t[e];
    R(i) ? ft(o, i) : process.env.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e}"`, i);
  } else if (R(e))
    ft(o, e.bind(s));
  else if (q(e))
    if ($(e))
      e.forEach((i) => Li(i, t, s, n));
    else {
      const i = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(i) ? ft(o, i, e) : process.env.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else process.env.NODE_ENV !== "production" && x(`Invalid watch option: "${n}"`, e);
}
function Fi(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !s && !n ? a = t : (a = {}, o.length && o.forEach(
    (p) => Ks(a, p, r, !0)
  ), Ks(a, t, r)), q(t) && i.set(t, a), a;
}
function Ks(e, t, s, n = !1) {
  const { mixins: o, extends: i } = t;
  i && Ks(e, i, s, !0), o && o.forEach(
    (r) => Ks(e, r, s, !0)
  );
  for (const r in t)
    if (n && r === "expose")
      process.env.NODE_ENV !== "production" && x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Zl[r] || s && s[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Zl = {
  data: No,
  props: xo,
  emits: xo,
  // objects
  methods: ss,
  computed: ss,
  // lifecycle
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  // assets
  components: ss,
  directives: ss,
  // watch
  watch: Ql,
  // provide / inject
  provide: No,
  inject: Xl
};
function No(e, t) {
  return t ? e ? function() {
    return ie(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xl(e, t) {
  return ss(Cn(e), Cn(t));
}
function Cn(e) {
  if ($(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ss(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xo(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Eo(e),
    Eo(t ?? {})
  ) : t;
}
function Ql(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ie(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = _e(e[n], t[n]);
  return s;
}
function Hi() {
  return {
    app: null,
    config: {
      isNativeTag: Jo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ec = 0;
function tc(e, t) {
  return function(n, o = null) {
    R(n) || (n = ie({}, n)), o != null && !q(o) && (process.env.NODE_ENV !== "production" && x("root props passed to app.mount() must be an object."), o = null);
    const i = Hi(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const p = i.app = {
      _uid: ec++,
      _component: n,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Ao,
      get config() {
        return i.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return r.has(d) ? process.env.NODE_ENV !== "production" && x("Plugin has already been applied to target app.") : d && R(d.install) ? (r.add(d), d.install(p, ...f)) : R(d) ? (r.add(d), d(p, ...f)) : process.env.NODE_ENV !== "production" && x(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return i.mixins.includes(d) ? process.env.NODE_ENV !== "production" && x(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), p;
      },
      component(d, f) {
        return process.env.NODE_ENV !== "production" && An(d, i.config), f ? (process.env.NODE_ENV !== "production" && i.components[d] && x(`Component "${d}" has already been registered in target app.`), i.components[d] = f, p) : i.components[d];
      },
      directive(d, f) {
        return process.env.NODE_ENV !== "production" && Ci(d), f ? (process.env.NODE_ENV !== "production" && i.directives[d] && x(`Directive "${d}" has already been registered in target app.`), i.directives[d] = f, p) : i.directives[d];
      },
      mount(d, f, m) {
        if (a)
          process.env.NODE_ENV !== "production" && x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const O = p._ceVNode || H(n, o);
          return O.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
            const A = St(O);
            A.el = null, e(A, d, m);
          }), e(O, d, m), a = !0, p._container = d, d.__vue_app__ = p, process.env.NODE_ENV !== "production" && (p._instance = O.component, bl(p, Ao)), no(O.component);
        }
      },
      onUnmount(d) {
        process.env.NODE_ENV !== "production" && typeof d != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Ye(
          l,
          p._instance,
          16
        ), e(null, p._container), process.env.NODE_ENV !== "production" && (p._instance = null, yl(p)), delete p._container.__vue_app__) : process.env.NODE_ENV !== "production" && x("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return process.env.NODE_ENV !== "production" && d in i.provides && (K(i.provides, d) ? x(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : x(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = f, p;
      },
      runWithContext(d) {
        const f = Kt;
        Kt = p;
        try {
          return d();
        } finally {
          Kt = f;
        }
      }
    };
    return p;
  };
}
let Kt = null;
const sc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function nc(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || X;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(Ct(we(t)) in f)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ct(we(t))}" prop.`
        );
      else {
        const m = d[t];
        R(m) && (m(...s) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = s;
  const i = t.startsWith("update:"), r = i && sc(n, t.slice(7));
  if (r && (r.trim && (o = s.map((d) => se(d) ? d.trim() : d)), r.number && (o = s.map(yr))), process.env.NODE_ENV !== "production" && Ol(e, t, o), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && n[Ct(d)] && x(
      `Event "${d}" is emitted in component ${Ss(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${xt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = n[l = Ct(t)] || // also try camelCase event handler (#2249)
  n[l = Ct(we(t))];
  !a && i && (a = n[l = Ct(xt(t))]), a && Ye(
    a,
    e,
    6,
    o
  );
  const p = n[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ye(
      p,
      e,
      6,
      o
    );
  }
}
const oc = /* @__PURE__ */ new WeakMap();
function ji(e, t, s = !1) {
  const n = s ? oc : t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!R(e)) {
    const a = (p) => {
      const d = ji(p, t, !0);
      d && (l = !0, ie(r, d));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (q(e) && n.set(e, null), null) : ($(i) ? i.forEach((a) => r[a] = null) : ie(r, i), q(e) && n.set(e, r), r);
}
function ln(e, t) {
  return !e || !vs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, xt(t)) || K(e, t));
}
let Vn = !1;
function qs() {
  Vn = !0;
}
function So(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: p,
    renderCache: d,
    props: f,
    data: m,
    setupState: O,
    ctx: A,
    inheritAttrs: V
  } = e, te = Bs(e);
  let ee, M;
  process.env.NODE_ENV !== "production" && (Vn = !1);
  try {
    if (s.shapeFlag & 4) {
      const P = o || n, oe = process.env.NODE_ENV !== "production" && O.__isScriptSetup ? new Proxy(P, {
        get(re, pe, me) {
          return x(
            `Property '${String(
              pe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(re, pe, me);
        }
      }) : P;
      ee = je(
        p.call(
          oe,
          P,
          d,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(f) : f,
          O,
          m,
          A
        )
      ), M = l;
    } else {
      const P = t;
      process.env.NODE_ENV !== "production" && l === f && qs(), ee = je(
        P.length > 1 ? P(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return qs(), /* @__PURE__ */ lt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : P(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(f) : f,
          null
        )
      ), M = t.props ? l : ic(l);
    }
  } catch (P) {
    us.length = 0, Es(P, e, 1), ee = H($e);
  }
  let B = ee, de;
  if (process.env.NODE_ENV !== "production" && ee.patchFlag > 0 && ee.patchFlag & 2048 && ([B, de] = Bi(ee)), M && V !== !1) {
    const P = Object.keys(M), { shapeFlag: oe } = B;
    if (P.length) {
      if (oe & 7)
        i && P.some(fs) && (M = rc(
          M,
          i
        )), B = St(B, M, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Vn && B.type !== $e) {
        const re = Object.keys(l), pe = [], me = [];
        for (let Te = 0, Ze = re.length; Te < Ze; Te++) {
          const De = re[Te];
          vs(De) ? fs(De) || pe.push(De[2].toLowerCase() + De.slice(3)) : me.push(De);
        }
        me.length && x(
          `Extraneous non-props attributes (${me.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), pe.length && x(
          `Extraneous non-emits event listeners (${pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return s.dirs && (process.env.NODE_ENV !== "production" && !Oo(B) && x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = St(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(s.dirs) : s.dirs), s.transition && (process.env.NODE_ENV !== "production" && !Oo(B) && x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Yn(B, s.transition)), process.env.NODE_ENV !== "production" && de ? de(B) : ee = B, Bs(te), ee;
}
const Bi = (e) => {
  const t = e.children, s = e.dynamicChildren, n = Qn(t, !1);
  if (n) {
    if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048)
      return Bi(n);
  } else return [e, void 0];
  const o = t.indexOf(n), i = s ? s.indexOf(n) : -1, r = (l) => {
    t[o] = l, s && (i > -1 ? s[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...s, l]));
  };
  return [je(n), r];
};
function Qn(e, t = !0) {
  let s;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Wt(o)) {
      if (o.type !== $e || o.children === "v-if") {
        if (s)
          return;
        if (s = o, process.env.NODE_ENV !== "production" && t && s.patchFlag > 0 && s.patchFlag & 2048)
          return Qn(s.children);
      }
    } else
      return;
  }
  return s;
}
const ic = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || vs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, rc = (e, t) => {
  const s = {};
  for (const n in e)
    (!fs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
}, Oo = (e) => e.shapeFlag & 7 || e.type === $e;
function lc(e, t, s) {
  const { props: n, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, p = i.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && Me || t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? wo(n, r, p) : !!r;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        if (Ui(r, n, m) && !ln(p, m))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? wo(n, r, p) : !0 : !!r;
  return !1;
}
function wo(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (Ui(t, e, i) && !ln(s, i))
      return !0;
  }
  return !1;
}
function Ui(e, t, s) {
  const n = e[s], o = t[s];
  return s === "style" && q(n) && q(o) ? !jn(n, o) : n !== o;
}
function cc({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = n, e = o), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Ki = {}, qi = () => Object.create(Ki), Wi = (e) => Object.getPrototypeOf(e) === Ki;
function ac(e, t, s, n = !1) {
  const o = {}, i = qi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zi(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  process.env.NODE_ENV !== "production" && Ji(t || {}, o, e), s ? e.props = n ? o : /* @__PURE__ */ Xr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function uc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function fc(e, t, s, n) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ F(o), [a] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && uc(e)) && (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let m = d[f];
        if (ln(e.emitsOptions, m))
          continue;
        const O = t[m];
        if (a)
          if (K(i, m))
            O !== i[m] && (i[m] = O, p = !0);
          else {
            const A = we(m);
            o[A] = Pn(
              a,
              l,
              A,
              O,
              e,
              !1
            );
          }
        else
          O !== i[m] && (i[m] = O, p = !0);
      }
    }
  } else {
    zi(e, t, o, i) && (p = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !K(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = xt(f)) === f || !K(t, d))) && (a ? s && // for camelCase
      (s[f] !== void 0 || // for kebab-case
      s[d] !== void 0) && (o[f] = Pn(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (i !== l)
      for (const f in i)
        (!t || !K(t, f)) && (delete i[f], p = !0);
  }
  p && rt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Ji(t || {}, o, e);
}
function zi(e, t, s, n) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (is(a))
        continue;
      const p = t[a];
      let d;
      o && K(o, d = we(a)) ? !i || !i.includes(d) ? s[d] = p : (l || (l = {}))[d] = p : ln(e.emitsOptions, a) || (!(a in n) || p !== n[a]) && (n[a] = p, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ F(s), p = l || X;
    for (let d = 0; d < i.length; d++) {
      const f = i[d];
      s[f] = Pn(
        o,
        a,
        f,
        p[f],
        e,
        !K(p, f)
      );
    }
  }
  return r;
}
function Pn(e, t, s, n, o, i) {
  const r = e[s];
  if (r != null) {
    const l = K(r, "default");
    if (l && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && R(a)) {
        const { propsDefaults: p } = o;
        if (s in p)
          n = p[s];
        else {
          const d = xs(o);
          n = p[s] = a.call(
            null,
            t
          ), d();
        }
      } else
        n = a;
      o.ce && o.ce._setProp(s, n);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === xt(s)) && (n = !0));
  }
  return n;
}
const dc = /* @__PURE__ */ new WeakMap();
function Gi(e, t, s = !1) {
  const n = s ? dc : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!R(e)) {
    const d = (f) => {
      a = !0;
      const [m, O] = Gi(f, t, !0);
      ie(r, m), O && l.push(...O);
    };
    !s && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return q(e) && n.set(e, Bt), Bt;
  if ($(i))
    for (let d = 0; d < i.length; d++) {
      process.env.NODE_ENV !== "production" && !se(i[d]) && x("props must be strings when using array syntax.", i[d]);
      const f = we(i[d]);
      To(f) && (r[f] = X);
    }
  else if (i) {
    process.env.NODE_ENV !== "production" && !q(i) && x("invalid props options", i);
    for (const d in i) {
      const f = we(d);
      if (To(f)) {
        const m = i[d], O = r[f] = $(m) || R(m) ? { type: m } : ie({}, m), A = O.type;
        let V = !1, te = !0;
        if ($(A))
          for (let ee = 0; ee < A.length; ++ee) {
            const M = A[ee], B = R(M) && M.name;
            if (B === "Boolean") {
              V = !0;
              break;
            } else B === "String" && (te = !1);
          }
        else
          V = R(A) && A.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = V, O[
          1
          /* shouldCastTrue */
        ] = te, (V || K(O, "default")) && l.push(f);
      }
    }
  }
  const p = [r, l];
  return q(e) && n.set(e, p), p;
}
function To(e) {
  return e[0] !== "$" && !is(e) ? !0 : (process.env.NODE_ENV !== "production" && x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function pc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ji(e, t, s) {
  const n = /* @__PURE__ */ F(t), o = s.propsOptions[0], i = Object.keys(e).map((r) => we(r));
  for (const r in o) {
    let l = o[r];
    l != null && hc(
      r,
      n[r],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(n) : n,
      !i.includes(r)
    );
  }
}
function hc(e, t, s, n, o) {
  const { type: i, required: r, validator: l, skipCheck: a } = s;
  if (r && o) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !a) {
      let p = !1;
      const d = $(i) ? i : [i], f = [];
      for (let m = 0; m < d.length && !p; m++) {
        const { valid: O, expectedType: A } = mc(t, d[m]);
        f.push(A || ""), p = O;
      }
      if (!p) {
        x(vc(e, t, f));
        return;
      }
    }
    l && !l(t, n) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const gc = /* @__PURE__ */ gt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function mc(e, t) {
  let s;
  const n = pc(t);
  if (n === "null")
    s = e === null;
  else if (gc(n)) {
    const o = typeof e;
    s = o === n.toLowerCase(), !s && o === "object" && (s = e instanceof t);
  } else n === "Object" ? s = q(e) : n === "Array" ? s = $(e) : s = e instanceof t;
  return {
    valid: s,
    expectedType: n
  };
}
function vc(e, t, s) {
  if (s.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${e}". Expected ${s.map(Xs).join(" | ")}`;
  const o = s[0], i = Fn(t), r = Do(t, o), l = Do(t, i);
  return s.length === 1 && Co(o) && bc(o, i) && (n += ` with value ${r}`), n += `, got ${i} `, Co(i) && (n += `with value ${l}.`), n;
}
function Do(e, t) {
  return Ke(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Co(e) {
  return ["string", "number", "boolean"].some((s) => e.toLowerCase() === s);
}
function bc(...e) {
  return e.every((t) => {
    const s = t.toLowerCase();
    return s !== "boolean" && s !== "symbol";
  });
}
const eo = (e) => e === "_" || e === "_ctx" || e === "$stable", to = (e) => $(e) ? e.map(je) : [je(e)], yc = (e, t, s) => {
  if (t._n)
    return t;
  const n = wl((...o) => (process.env.NODE_ENV !== "production" && ae && !(s === null && ke) && !(s && s.root !== ae.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), to(t(...o))), s);
  return n._c = !1, n;
}, Yi = (e, t, s) => {
  const n = e._ctx;
  for (const o in e) {
    if (eo(o)) continue;
    const i = e[o];
    if (R(i))
      t[o] = yc(o, i, n);
    else if (i != null) {
      process.env.NODE_ENV !== "production" && x(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = to(i);
      t[o] = () => r;
    }
  }
}, Zi = (e, t) => {
  process.env.NODE_ENV !== "production" && !Zn(e.vnode) && x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const s = to(t);
  e.slots.default = () => s;
}, Mn = (e, t, s) => {
  for (const n in t)
    (s || !eo(n)) && (e[n] = t[n]);
}, Ec = (e, t, s) => {
  const n = e.slots = qi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Mn(n, t, s), s && Rs(n, "_", o, !0)) : Yi(t, n);
  } else t && Zi(e, t);
}, _c = (e, t, s) => {
  const { vnode: n, slots: o } = e;
  let i = !0, r = X;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Me ? (Mn(o, t, s), rt(e, "set", "$slots")) : s && l === 1 ? i = !1 : Mn(o, t, s) : (i = !t.$stable, Yi(t, o)), r = t;
  } else t && (Zi(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !eo(l) && r[l] == null && delete o[l];
};
let Qt, dt;
function Lt(e, t) {
  e.appContext.config.performance && Ws() && dt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && xl(e, t, Ws() ? dt.now() : Date.now());
}
function Ft(e, t) {
  if (e.appContext.config.performance && Ws()) {
    const s = `vue-${t}-${e.uid}`, n = s + ":end", o = `<${Ss(e, e.type)}> ${t}`;
    dt.mark(n), dt.measure(o, s, n), dt.clearMeasures(o), dt.clearMarks(s), dt.clearMarks(n);
  }
  process.env.NODE_ENV !== "production" && Sl(e, t, Ws() ? dt.now() : Date.now());
}
function Ws() {
  return Qt !== void 0 || (typeof window < "u" && window.performance ? (Qt = !0, dt = window.performance) : Qt = !1), Qt;
}
function Nc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Oe = Tc;
function xc(e) {
  return Sc(e);
}
function Sc(e, t) {
  Nc();
  const s = ys();
  s.__VUE__ = !0, process.env.NODE_ENV !== "production" && Gn(s.__VUE_DEVTOOLS_GLOBAL_HOOK__, s);
  const {
    insert: n,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: p,
    setElementText: d,
    parentNode: f,
    nextSibling: m,
    setScopeId: O = fe,
    insertStaticContent: A
  } = e, V = (c, u, h, y = null, b = null, v = null, w = void 0, N = null, _ = process.env.NODE_ENV !== "production" && Me ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !es(c, u) && (y = Fe(c), Le(c, b, v, !0), c = null), u.patchFlag === -2 && (_ = !1, u.dynamicChildren = null);
    const { type: E, ref: I, shapeFlag: T } = u;
    switch (E) {
      case Ns:
        te(c, u, h, y);
        break;
      case $e:
        ee(c, u, h, y);
        break;
      case As:
        c == null ? M(u, h, y, w) : process.env.NODE_ENV !== "production" && B(c, u, h, w);
        break;
      case Re:
        Ot(
          c,
          u,
          h,
          y,
          b,
          v,
          w,
          N,
          _
        );
        break;
      default:
        T & 1 ? oe(
          c,
          u,
          h,
          y,
          b,
          v,
          w,
          N,
          _
        ) : T & 6 ? Gt(
          c,
          u,
          h,
          y,
          b,
          v,
          w,
          N,
          _
        ) : T & 64 || T & 128 ? E.process(
          c,
          u,
          h,
          y,
          b,
          v,
          w,
          N,
          _,
          Ve
        ) : process.env.NODE_ENV !== "production" && x("Invalid VNode type:", E, `(${typeof E})`);
    }
    I != null && b ? cs(I, c && c.ref, v, u || c, !u) : I == null && c && c.ref != null && cs(c.ref, null, v, c, !0);
  }, te = (c, u, h, y) => {
    if (c == null)
      n(
        u.el = l(u.children),
        h,
        y
      );
    else {
      const b = u.el = c.el;
      u.children !== c.children && p(b, u.children);
    }
  }, ee = (c, u, h, y) => {
    c == null ? n(
      u.el = a(u.children || ""),
      h,
      y
    ) : u.el = c.el;
  }, M = (c, u, h, y) => {
    [c.el, c.anchor] = A(
      c.children,
      u,
      h,
      y,
      c.el,
      c.anchor
    );
  }, B = (c, u, h, y) => {
    if (u.children !== c.children) {
      const b = m(c.anchor);
      P(c), [u.el, u.anchor] = A(
        u.children,
        h,
        b,
        y
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, de = ({ el: c, anchor: u }, h, y) => {
    let b;
    for (; c && c !== u; )
      b = m(c), n(c, h, y), c = b;
    n(u, h, y);
  }, P = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = m(c), o(c), c = h;
    o(u);
  }, oe = (c, u, h, y, b, v, w, N, _) => {
    if (u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null)
      re(
        u,
        h,
        y,
        b,
        v,
        w,
        N,
        _
      );
    else {
      const E = c.el && c.el._isVueCE ? c.el : null;
      try {
        E && E._beginPatch(), Te(
          c,
          u,
          b,
          v,
          w,
          N,
          _
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, re = (c, u, h, y, b, v, w, N) => {
    let _, E;
    const { props: I, shapeFlag: T, transition: k, dirs: L } = c;
    if (_ = c.el = r(
      c.type,
      v,
      I && I.is,
      I
    ), T & 8 ? d(_, c.children) : T & 16 && me(
      c.children,
      _,
      null,
      y,
      b,
      mn(c, v),
      w,
      N
    ), L && Tt(c, null, y, "created"), pe(_, c, c.scopeId, w, y), I) {
      for (const G in I)
        G !== "value" && !is(G) && i(_, G, null, I[G], v, y);
      "value" in I && i(_, "value", null, I.value, v), (E = I.onVnodeBeforeMount) && st(E, y, c);
    }
    process.env.NODE_ENV !== "production" && (Rs(_, "__vnode", c, !0), Rs(_, "__vueParentComponent", y, !0)), L && Tt(c, null, y, "beforeMount");
    const W = Oc(b, k);
    if (W && k.beforeEnter(_), n(_, u, h), (E = I && I.onVnodeMounted) || W || L) {
      const G = process.env.NODE_ENV !== "production" && Me;
      Oe(() => {
        let z;
        process.env.NODE_ENV !== "production" && (z = ho(G));
        try {
          E && st(E, y, c), W && k.enter(_), L && Tt(c, null, y, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && ho(z);
        }
      }, b);
    }
  }, pe = (c, u, h, y, b) => {
    if (h && O(c, h), y)
      for (let v = 0; v < y.length; v++)
        O(c, y[v]);
    if (b) {
      let v = b.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Qn(v.children) || v), u === v || er(v.type) && (v.ssContent === u || v.ssFallback === u)) {
        const w = b.vnode;
        pe(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          b.parent
        );
      }
    }
  }, me = (c, u, h, y, b, v, w, N, _ = 0) => {
    for (let E = _; E < c.length; E++) {
      const I = c[E] = N ? pt(c[E]) : je(c[E]);
      V(
        null,
        I,
        u,
        h,
        y,
        b,
        v,
        w,
        N
      );
    }
  }, Te = (c, u, h, y, b, v, w) => {
    const N = u.el = c.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = u);
    let { patchFlag: _, dynamicChildren: E, dirs: I } = u;
    _ |= c.patchFlag & 16;
    const T = c.props || X, k = u.props || X;
    let L;
    if (h && Dt(h, !1), (L = k.onVnodeBeforeUpdate) && st(L, h, u, c), I && Tt(u, c, h, "beforeUpdate"), h && Dt(h, !0), process.env.NODE_ENV !== "production" && Me && (_ = 0, w = !1, E = null), (T.innerHTML && k.innerHTML == null || T.textContent && k.textContent == null) && d(N, ""), E ? (Ze(
      c.dynamicChildren,
      E,
      N,
      h,
      y,
      mn(u, b),
      v
    ), process.env.NODE_ENV !== "production" && ks(c, u)) : w || Ce(
      c,
      u,
      N,
      null,
      h,
      y,
      mn(u, b),
      v,
      !1
    ), _ > 0) {
      if (_ & 16)
        De(N, T, k, h, b);
      else if (_ & 2 && T.class !== k.class && i(N, "class", null, k.class, b), _ & 4 && i(N, "style", T.style, k.style, b), _ & 8) {
        const W = u.dynamicProps;
        for (let G = 0; G < W.length; G++) {
          const z = W[G], le = T[z], he = k[z];
          (he !== le || z === "value") && i(N, z, le, he, b, h);
        }
      }
      _ & 1 && c.children !== u.children && d(N, u.children);
    } else !w && E == null && De(N, T, k, h, b);
    ((L = k.onVnodeUpdated) || I) && Oe(() => {
      L && st(L, h, u, c), I && Tt(u, c, h, "updated");
    }, y);
  }, Ze = (c, u, h, y, b, v, w) => {
    for (let N = 0; N < u.length; N++) {
      const _ = c[N], E = u[N], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        _.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (_.type === Re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !es(_, E) || // - In the case of a component, it could contain anything.
        _.shapeFlag & 198) ? f(_.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        _,
        E,
        I,
        null,
        y,
        b,
        v,
        w,
        !0
      );
    }
  }, De = (c, u, h, y, b) => {
    if (u !== h) {
      if (u !== X)
        for (const v in u)
          !is(v) && !(v in h) && i(
            c,
            v,
            u[v],
            null,
            b,
            y
          );
      for (const v in h) {
        if (is(v)) continue;
        const w = h[v], N = u[v];
        w !== N && v !== "value" && i(c, v, N, w, b, y);
      }
      "value" in h && i(c, "value", u.value, h.value, b);
    }
  }, Ot = (c, u, h, y, b, v, w, N, _) => {
    const E = u.el = c ? c.el : l(""), I = u.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: k, slotScopeIds: L } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Me || T & 2048) && (T = 0, _ = !1, k = null), L && (N = N ? N.concat(L) : L), c == null ? (n(E, h, y), n(I, h, y), me(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      I,
      b,
      v,
      w,
      N,
      _
    )) : T > 0 && T & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === k.length ? (Ze(
      c.dynamicChildren,
      k,
      h,
      b,
      v,
      w,
      N
    ), process.env.NODE_ENV !== "production" ? ks(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || b && u === b.subTree) && ks(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Ce(
      c,
      u,
      h,
      I,
      b,
      v,
      w,
      N,
      _
    );
  }, Gt = (c, u, h, y, b, v, w, N, _) => {
    u.slotScopeIds = N, c == null ? u.shapeFlag & 512 ? b.ctx.activate(
      u,
      h,
      y,
      w,
      _
    ) : be(
      u,
      h,
      y,
      b,
      v,
      w,
      _
    ) : ve(c, u, _);
  }, be = (c, u, h, y, b, v, w) => {
    const N = c.component = $c(
      c,
      y,
      b
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && hl(N), process.env.NODE_ENV !== "production" && (Cs(c), Lt(N, "mount")), Zn(c) && (N.ctx.renderer = Ve), process.env.NODE_ENV !== "production" && Lt(N, "init"), Rc(N, !1, w), process.env.NODE_ENV !== "production" && Ft(N, "init"), process.env.NODE_ENV !== "production" && Me && (c.el = null), N.asyncDep) {
      if (b && b.registerDep(N, U, w), !c.el) {
        const _ = N.subTree = H($e);
        ee(null, _, u, h), c.placeholder = _.el;
      }
    } else
      U(
        N,
        c,
        u,
        h,
        b,
        v,
        w
      );
    process.env.NODE_ENV !== "production" && (Vs(), Ft(N, "mount"));
  }, ve = (c, u, h) => {
    const y = u.component = c.component;
    if (lc(c, u, h))
      if (y.asyncDep && !y.asyncResolved) {
        process.env.NODE_ENV !== "production" && Cs(u), j(y, u, h), process.env.NODE_ENV !== "production" && Vs();
        return;
      } else
        y.next = u, y.update();
    else
      u.el = c.el, y.vnode = u;
  }, U = (c, u, h, y, b, v, w) => {
    const N = () => {
      if (c.isMounted) {
        let { next: T, bu: k, u: L, parent: W, vnode: G } = c;
        {
          const Qe = Xi(c);
          if (Qe) {
            T && (T.el = G.el, j(c, T, w)), Qe.asyncDep.then(() => {
              Oe(() => {
                c.isUnmounted || E();
              }, b);
            });
            return;
          }
        }
        let z = T, le;
        process.env.NODE_ENV !== "production" && Cs(T || c.vnode), Dt(c, !1), T ? (T.el = G.el, j(c, T, w)) : T = G, k && Zt(k), (le = T.props && T.props.onVnodeBeforeUpdate) && st(le, W, T, G), Dt(c, !0), process.env.NODE_ENV !== "production" && Lt(c, "render");
        const he = So(c);
        process.env.NODE_ENV !== "production" && Ft(c, "render");
        const Xe = c.subTree;
        c.subTree = he, process.env.NODE_ENV !== "production" && Lt(c, "patch"), V(
          Xe,
          he,
          // parent may have changed if it's in a teleport
          f(Xe.el),
          // anchor may have changed if it's in a fragment
          Fe(Xe),
          c,
          b,
          v
        ), process.env.NODE_ENV !== "production" && Ft(c, "patch"), T.el = he.el, z === null && cc(c, he.el), L && Oe(L, b), (le = T.props && T.props.onVnodeUpdated) && Oe(
          () => st(le, W, T, G),
          b
        ), process.env.NODE_ENV !== "production" && wi(c), process.env.NODE_ENV !== "production" && Vs();
      } else {
        let T;
        const { el: k, props: L } = u, { bm: W, m: G, parent: z, root: le, type: he } = c, Xe = as(u);
        Dt(c, !1), W && Zt(W), !Xe && (T = L && L.onVnodeBeforeMount) && st(T, z, u), Dt(c, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            he,
            c.parent ? c.parent.type : void 0
          ), process.env.NODE_ENV !== "production" && Lt(c, "render");
          const Qe = c.subTree = So(c);
          process.env.NODE_ENV !== "production" && Ft(c, "render"), process.env.NODE_ENV !== "production" && Lt(c, "patch"), V(
            null,
            Qe,
            h,
            y,
            c,
            b,
            v
          ), process.env.NODE_ENV !== "production" && Ft(c, "patch"), u.el = Qe.el;
        }
        if (G && Oe(G, b), !Xe && (T = L && L.onVnodeMounted)) {
          const Qe = u;
          Oe(
            () => st(T, z, Qe),
            b
          );
        }
        (u.shapeFlag & 256 || z && as(z.vnode) && z.vnode.shapeFlag & 256) && c.a && Oe(c.a, b), c.isMounted = !0, process.env.NODE_ENV !== "production" && El(c), u = h = y = null;
      }
    };
    c.scope.on();
    const _ = c.effect = new si(N);
    c.scope.off();
    const E = c.update = _.run.bind(_), I = c.job = _.runIfDirty.bind(_);
    I.i = c, I.id = c.uid, _.scheduler = () => on(I), Dt(c, !0), process.env.NODE_ENV !== "production" && (_.onTrack = c.rtc ? (T) => Zt(c.rtc, T) : void 0, _.onTrigger = c.rtg ? (T) => Zt(c.rtg, T) : void 0), E();
  }, j = (c, u, h) => {
    u.component = c;
    const y = c.vnode.props;
    c.vnode = u, c.next = null, fc(c, u.props, y, h), _c(c, u.children, h), We(), po(c), ze();
  }, Ce = (c, u, h, y, b, v, w, N, _ = !1) => {
    const E = c && c.children, I = c ? c.shapeFlag : 0, T = u.children, { patchFlag: k, shapeFlag: L } = u;
    if (k > 0) {
      if (k & 128) {
        wt(
          E,
          T,
          h,
          y,
          b,
          v,
          w,
          N,
          _
        );
        return;
      } else if (k & 256) {
        vt(
          E,
          T,
          h,
          y,
          b,
          v,
          w,
          N,
          _
        );
        return;
      }
    }
    L & 8 ? (I & 16 && ye(E, b, v), T !== E && d(h, T)) : I & 16 ? L & 16 ? wt(
      E,
      T,
      h,
      y,
      b,
      v,
      w,
      N,
      _
    ) : ye(E, b, v, !0) : (I & 8 && d(h, ""), L & 16 && me(
      T,
      h,
      y,
      b,
      v,
      w,
      N,
      _
    ));
  }, vt = (c, u, h, y, b, v, w, N, _) => {
    c = c || Bt, u = u || Bt;
    const E = c.length, I = u.length, T = Math.min(E, I);
    let k;
    for (k = 0; k < T; k++) {
      const L = u[k] = _ ? pt(u[k]) : je(u[k]);
      V(
        c[k],
        L,
        h,
        null,
        b,
        v,
        w,
        N,
        _
      );
    }
    E > I ? ye(
      c,
      b,
      v,
      !0,
      !1,
      T
    ) : me(
      u,
      h,
      y,
      b,
      v,
      w,
      N,
      _,
      T
    );
  }, wt = (c, u, h, y, b, v, w, N, _) => {
    let E = 0;
    const I = u.length;
    let T = c.length - 1, k = I - 1;
    for (; E <= T && E <= k; ) {
      const L = c[E], W = u[E] = _ ? pt(u[E]) : je(u[E]);
      if (es(L, W))
        V(
          L,
          W,
          h,
          null,
          b,
          v,
          w,
          N,
          _
        );
      else
        break;
      E++;
    }
    for (; E <= T && E <= k; ) {
      const L = c[T], W = u[k] = _ ? pt(u[k]) : je(u[k]);
      if (es(L, W))
        V(
          L,
          W,
          h,
          null,
          b,
          v,
          w,
          N,
          _
        );
      else
        break;
      T--, k--;
    }
    if (E > T) {
      if (E <= k) {
        const L = k + 1, W = L < I ? u[L].el : y;
        for (; E <= k; )
          V(
            null,
            u[E] = _ ? pt(u[E]) : je(u[E]),
            h,
            W,
            b,
            v,
            w,
            N,
            _
          ), E++;
      }
    } else if (E > k)
      for (; E <= T; )
        Le(c[E], b, v, !0), E++;
    else {
      const L = E, W = E, G = /* @__PURE__ */ new Map();
      for (E = W; E <= k; E++) {
        const Ee = u[E] = _ ? pt(u[E]) : je(u[E]);
        Ee.key != null && (process.env.NODE_ENV !== "production" && G.has(Ee.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), G.set(Ee.key, E));
      }
      let z, le = 0;
      const he = k - W + 1;
      let Xe = !1, Qe = 0;
      const Yt = new Array(he);
      for (E = 0; E < he; E++) Yt[E] = 0;
      for (E = L; E <= T; E++) {
        const Ee = c[E];
        if (le >= he) {
          Le(Ee, b, v, !0);
          continue;
        }
        let et;
        if (Ee.key != null)
          et = G.get(Ee.key);
        else
          for (z = W; z <= k; z++)
            if (Yt[z - W] === 0 && es(Ee, u[z])) {
              et = z;
              break;
            }
        et === void 0 ? Le(Ee, b, v, !0) : (Yt[et - W] = E + 1, et >= Qe ? Qe = et : Xe = !0, V(
          Ee,
          u[et],
          h,
          null,
          b,
          v,
          w,
          N,
          _
        ), le++);
      }
      const oo = Xe ? wc(Yt) : Bt;
      for (z = oo.length - 1, E = he - 1; E >= 0; E--) {
        const Ee = W + E, et = u[Ee], io = u[Ee + 1], ro = Ee + 1 < I ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          io.el || Qi(io)
        ) : y;
        Yt[E] === 0 ? V(
          null,
          et,
          h,
          ro,
          b,
          v,
          w,
          N,
          _
        ) : Xe && (z < 0 || E !== oo[z] ? bt(et, h, ro, 2) : z--);
      }
    }
  }, bt = (c, u, h, y, b = null) => {
    const { el: v, type: w, transition: N, children: _, shapeFlag: E } = c;
    if (E & 6) {
      bt(c.component.subTree, u, h, y);
      return;
    }
    if (E & 128) {
      c.suspense.move(u, h, y);
      return;
    }
    if (E & 64) {
      w.move(c, u, h, Ve);
      return;
    }
    if (w === Re) {
      n(v, u, h);
      for (let T = 0; T < _.length; T++)
        bt(_[T], u, h, y);
      n(c.anchor, u, h);
      return;
    }
    if (w === As) {
      de(c, u, h);
      return;
    }
    if (y !== 2 && E & 1 && N)
      if (y === 0)
        N.persisted && !v[hn] ? n(v, u, h) : (N.beforeEnter(v), n(v, u, h), Oe(() => N.enter(v), b));
      else {
        const { leave: T, delayLeave: k, afterLeave: L } = N, W = () => {
          c.ctx.isUnmounted ? o(v) : n(v, u, h);
        }, G = () => {
          const z = v._isLeaving || !!v[hn];
          v._isLeaving && v[hn](
            !0
            /* cancelled */
          ), N.persisted && !z ? W() : T(v, () => {
            W(), L && L();
          });
        };
        k ? k(v, W, G) : G();
      }
    else
      n(v, u, h);
  }, Le = (c, u, h, y = !1, b = !1) => {
    const {
      type: v,
      props: w,
      ref: N,
      children: _,
      dynamicChildren: E,
      shapeFlag: I,
      patchFlag: T,
      dirs: k,
      cacheIndex: L,
      memo: W
    } = c;
    if (T === -2 && (b = !1), N != null && (We(), cs(N, null, h, c, !0), ze()), L != null && (u.renderCache[L] = void 0), I & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const G = I & 1 && k, z = !as(c);
    let le;
    if (z && (le = w && w.onVnodeBeforeUnmount) && st(le, u, c), I & 6)
      C(c.component, h, y);
    else {
      if (I & 128) {
        c.suspense.unmount(h, y);
        return;
      }
      G && Tt(c, null, u, "beforeUnmount"), I & 64 ? c.type.remove(
        c,
        u,
        h,
        Ve,
        y
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Re || T > 0 && T & 64) ? ye(
        E,
        u,
        h,
        !1,
        !0
      ) : (v === Re && T & 384 || !b && I & 16) && ye(_, u, h), y && D(c);
    }
    const he = W != null && L == null;
    (z && (le = w && w.onVnodeUnmounted) || G || he) && Oe(() => {
      le && st(le, u, c), G && Tt(c, null, u, "unmounted"), he && (c.el = null);
    }, h);
  }, D = (c) => {
    const { type: u, el: h, anchor: y, transition: b } = c;
    if (u === Re) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((w) => {
        w.type === $e ? o(w.el) : D(w);
      }) : g(h, y);
      return;
    }
    if (u === As) {
      P(c);
      return;
    }
    const v = () => {
      o(h), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: w, delayLeave: N } = b, _ = () => w(h, v);
      N ? N(c.el, v, _) : _();
    } else
      v();
  }, g = (c, u) => {
    let h;
    for (; c !== u; )
      h = m(c), o(c), c = h;
    o(u);
  }, C = (c, u, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && gl(c);
    const { bum: y, scope: b, job: v, subTree: w, um: N, m: _, a: E } = c;
    Vo(_), Vo(E), y && Zt(y), b.stop(), v && (v.flags |= 8, Le(w, c, u, h)), N && Oe(N, u), Oe(() => {
      c.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && Nl(c);
  }, ye = (c, u, h, y = !1, b = !1, v = 0) => {
    for (let w = v; w < c.length; w++)
      Le(c[w], u, h, y, b);
  }, Fe = (c) => {
    if (c.shapeFlag & 6)
      return Fe(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = m(c.anchor || c.el), h = u && u[Pl];
    return h ? m(h) : u;
  };
  let He = !1;
  const ct = (c, u, h) => {
    let y;
    c == null ? u._vnode && (Le(u._vnode, null, null, !0), y = u._vnode.component) : V(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, He || (He = !0, po(y), xi(), He = !1);
  }, Ve = {
    p: V,
    um: Le,
    m: bt,
    r: D,
    mt: be,
    mc: me,
    pc: Ce,
    pbc: Ze,
    n: Fe,
    o: e
  };
  return {
    render: ct,
    hydrate: void 0,
    createApp: tc(ct)
  };
}
function mn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Dt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Oc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ks(e, t, s = !1) {
  const n = e.children, o = t.children;
  if ($(n) && $(o))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = pt(o[i]), l.el = r.el), !s && l.patchFlag !== -2 && ks(r, l)), l.type === Ns && (l.patchFlag === -1 && (l = o[i] = pt(l)), l.el = r.el), l.type === $e && !l.el && (l.el = r.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function wc(e) {
  const t = e.slice(), s = [0];
  let n, o, i, r, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const p = e[n];
    if (p !== 0) {
      if (o = s[s.length - 1], e[o] < p) {
        t[n] = o, s.push(n);
        continue;
      }
      for (i = 0, r = s.length - 1; i < r; )
        l = i + r >> 1, e[s[l]] < p ? i = l + 1 : r = l;
      p < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, r = s[i - 1]; i-- > 0; )
    s[i] = r, r = t[r];
  return s;
}
function Xi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xi(t);
}
function Vo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qi(t.subTree) : null;
}
const er = (e) => e.__isSuspense;
function Tc(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : Ni(e);
}
const Re = /* @__PURE__ */ Symbol.for("v-fgt"), Ns = /* @__PURE__ */ Symbol.for("v-txt"), $e = /* @__PURE__ */ Symbol.for("v-cmt"), As = /* @__PURE__ */ Symbol.for("v-stc"), us = [];
let Ae = null;
function Pe(e = !1) {
  us.push(Ae = e ? null : []);
}
function Dc() {
  us.pop(), Ae = us[us.length - 1] || null;
}
let gs = 1;
function zs(e, t = !1) {
  gs += e, e < 0 && Ae && t && (Ae.hasOnce = !0);
}
function tr(e) {
  return e.dynamicChildren = gs > 0 ? Ae || Bt : null, Dc(), gs > 0 && Ae && Ae.push(e), e;
}
function Ie(e, t, s, n, o, i) {
  return tr(
    S(
      e,
      t,
      s,
      n,
      o,
      i,
      !0
    )
  );
}
function Cc(e, t, s, n, o) {
  return tr(
    H(
      e,
      t,
      s,
      n,
      o,
      !0
    )
  );
}
function Wt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function es(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const s = Ps.get(t.type);
    if (s && s.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Vc = (...e) => nr(
  ...e
), sr = ({ key: e }) => e ?? null, $s = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || /* @__PURE__ */ ce(e) || R(e) ? { i: ke, r: e, k: t, f: !!s } : e : null);
function S(e, t = null, s = null, n = 0, o = null, i = e === Re ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && sr(t),
    ref: t && $s(t),
    scopeId: Di,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ke
  };
  return l ? (so(a, s), i & 128 && e.normalize(a)) : s && (a.shapeFlag |= se(s) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && x("VNode created with invalid key (NaN). VNode type:", a.type), gs > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ae.push(a), a;
}
const H = process.env.NODE_ENV !== "production" ? Vc : nr;
function nr(e, t = null, s = null, n = 0, o = null, i = !1) {
  if ((!e || e === Kl) && (process.env.NODE_ENV !== "production" && !e && x(`Invalid vnode type when creating vnode: ${e}.`), e = $e), Wt(e)) {
    const l = St(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && so(l, s), gs > 0 && !i && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l;
  }
  if (ar(e) && (e = e.__vccOpts), t) {
    t = Pc(t);
    let { class: l, style: a } = t;
    l && !se(l) && (t.class = Ne(l)), q(a) && (/* @__PURE__ */ Ls(a) && !$(a) && (a = ie({}, a)), t.style = Qs(a));
  }
  const r = se(e) ? 1 : er(e) ? 128 : Ml(e) ? 64 : q(e) ? 4 : R(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && /* @__PURE__ */ Ls(e) && (e = /* @__PURE__ */ F(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), S(
    e,
    t,
    s,
    n,
    o,
    r,
    i,
    !0
  );
}
function Pc(e) {
  return e ? /* @__PURE__ */ Ls(e) || Wi(e) ? ie({}, e) : e : null;
}
function St(e, t, s = !1, n = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, p = t ? Mc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && sr(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? $(i) ? i.concat($s(t)) : [i, $s(t)] : $s(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && $(l) ? l.map(or) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Re ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && St(e.ssContent),
    ssFallback: e.ssFallback && St(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && Yn(
    d,
    a.clone(d)
  ), d;
}
function or(e) {
  const t = St(e);
  return $(e.children) && (t.children = e.children.map(or)), t;
}
function ns(e = " ", t = 0) {
  return H(Ns, null, e, t);
}
function yt(e = "", t = !1) {
  return t ? (Pe(), Cc($e, null, e)) : H($e, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean" ? H($e) : $(e) ? H(
    Re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Wt(e) ? pt(e) : H(Ns, null, String(e));
}
function pt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e);
}
function so(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if ($(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), so(e, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = t._;
      !o && !Wi(t) ? t._ctx = ke : o === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: ke }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [ns(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Mc(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = Ne([t.class, n.class]));
      else if (o === "style")
        t.style = Qs([t.style, n.style]);
      else if (vs(o)) {
        const i = t[o], r = n[o];
        r && i !== r && !($(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !fs(o) && (t[o] = r);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function st(e, t, s, n = null) {
  Ye(e, t, 7, [
    s,
    n
  ]);
}
const kc = Hi();
let Ac = 0;
function $c(e, t, s) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || kc, i = {
    uid: Ac++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new kr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Gi(n, o),
    emitsOptions: ji(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? i.ctx = ql(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = nc.bind(null, i), e.ce && e.ce(i), i;
}
let ae = null;
const ir = () => ae || ke;
let Gs, kn;
{
  const e = ys(), t = (s, n) => {
    let o;
    return (o = e[s]) || (o = e[s] = []), o.push(n), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  Gs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ae = s
  ), kn = t(
    "__VUE_SSR_SETTERS__",
    (s) => ms = s
  );
}
const xs = (e) => {
  const t = ae;
  return Gs(e), e.scope.on(), () => {
    e.scope.off(), Gs(t);
  };
}, Po = () => {
  ae && ae.scope.off(), Gs(null);
}, Ic = /* @__PURE__ */ gt("slot,component");
function An(e, { isNativeTag: t }) {
  (Ic(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function rr(e) {
  return e.vnode.shapeFlag & 4;
}
let ms = !1;
function Rc(e, t = !1, s = !1) {
  t && kn(t);
  const { props: n, children: o } = e.vnode, i = rr(e);
  ac(e, n, i, t), Ec(e, o, s || t);
  const r = i ? Lc(e, t) : void 0;
  return t && kn(!1), r;
}
function Lc(e, t) {
  const s = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (s.name && An(s.name, e.appContext.config), s.components) {
      const o = Object.keys(s.components);
      for (let i = 0; i < o.length; i++)
        An(o[i], e.appContext.config);
    }
    if (s.directives) {
      const o = Object.keys(s.directives);
      for (let i = 0; i < o.length; i++)
        Ci(o[i]);
    }
    s.compilerOptions && Fc() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ri), process.env.NODE_ENV !== "production" && Wl(e);
  const { setup: n } = s;
  if (n) {
    We();
    const o = e.setupContext = n.length > 1 ? jc(e) : null, i = xs(e), r = zt(
      n,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ lt(e.props) : e.props,
        o
      ]
    ), l = Ln(r);
    if (ze(), i(), (l || e.sp) && !as(e) && Mi(e), l) {
      if (r.then(Po, Po), t)
        return r.then((a) => {
          Mo(e, a, t);
        }).catch((a) => {
          Es(a, e, 0);
        });
      if (e.asyncDep = r, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = Ss(e, s);
        x(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Mo(e, r, t);
  } else
    lr(e, t);
}
function Mo(e, t, s) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (process.env.NODE_ENV !== "production" && Wt(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = bi(t), process.env.NODE_ENV !== "production" && zl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), lr(e, s);
}
const Fc = () => !0;
function lr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || fe);
  {
    const o = xs(e);
    We();
    try {
      Jl(e);
    } finally {
      ze(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !n.render && e.render === fe && !t && (n.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", n));
}
const ko = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return qs(), ue(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ue(e, "get", ""), e[t];
  }
};
function Hc(e) {
  return new Proxy(e.slots, {
    get(t, s) {
      return ue(e, "get", "$slots"), t[s];
    }
  });
}
function jc(e) {
  const t = (s) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && x("expose() should be called only once per setup()."), s != null)) {
      let n = typeof s;
      n === "object" && ($(s) ? n = "array" : /* @__PURE__ */ ce(s) && (n = "ref")), n !== "object" && x(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    e.exposed = s || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let s, n;
    return Object.freeze({
      get attrs() {
        return s || (s = new Proxy(e.attrs, ko));
      },
      get slots() {
        return n || (n = Hc(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ko),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function no(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bi(Qr(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in $t)
        return $t[s](e);
    },
    has(t, s) {
      return s in t || s in $t;
    }
  })) : e.proxy;
}
const Bc = /(?:^|[-_])\w/g, Uc = (e) => e.replace(Bc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function cr(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ss(e, t, s = !1) {
  let n = cr(t);
  if (!n && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (n = o[1]);
  }
  if (!n && e) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    n = o(e.components) || e.parent && o(
      e.parent.type.components
    ) || o(e.appContext.components);
  }
  return n ? Uc(n) : s ? "App" : "Anonymous";
}
function ar(e) {
  return R(e) && "__vccOpts" in e;
}
const Is = (e, t) => {
  const s = /* @__PURE__ */ ol(e, t, ms);
  if (process.env.NODE_ENV !== "production") {
    const n = ir();
    n && n.appContext.config.warnRecursiveComputed && (s._warnRecursive = !0);
  }
  return s;
};
function $n(e, t, s) {
  try {
    zs(-1);
    const n = arguments.length;
    return n === 2 ? q(t) && !$(t) ? Wt(t) ? H(e, null, [t]) : H(e, t) : H(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Wt(s) && (s = [s]), H(e, t, s));
  } finally {
    zs(1);
  }
}
function Kc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, s = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!q(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ ce(f)) {
        We();
        const m = f.value;
        return ze(), [
          "div",
          {},
          ["span", e, d(f)],
          "<",
          l(m),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ Nt(f))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Se(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${/* @__PURE__ */ Ge(f) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ Ge(f))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Se(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...i(f.$)
        ];
    }
  };
  function i(f) {
    const m = [];
    f.type.props && f.props && m.push(r("props", /* @__PURE__ */ F(f.props))), f.setupState !== X && m.push(r("setup", f.setupState)), f.data !== X && m.push(r("data", /* @__PURE__ */ F(f.data)));
    const O = a(f, "computed");
    O && m.push(r("computed", O));
    const A = a(f, "inject");
    return A && m.push(r("injected", A)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), m;
  }
  function r(f, m) {
    return m = ie({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((O) => [
          "div",
          {},
          ["span", n, O + ": "],
          l(m[O], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, m = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", s, JSON.stringify(f)] : typeof f == "boolean" ? ["span", n, f] : q(f) ? ["object", { object: m ? /* @__PURE__ */ F(f) : f }] : ["span", s, String(f)];
  }
  function a(f, m) {
    const O = f.type;
    if (R(O))
      return;
    const A = {};
    for (const V in f.ctx)
      p(O, V, m) && (A[V] = f.ctx[V]);
    return A;
  }
  function p(f, m, O) {
    const A = f[O];
    if ($(A) && A.includes(m) || q(A) && m in A || f.extends && p(f.extends, m, O) || f.mixins && f.mixins.some((V) => p(V, m, O)))
      return !0;
  }
  function d(f) {
    return /* @__PURE__ */ Se(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Ao = "3.5.38", ht = process.env.NODE_ENV !== "production" ? x : fe;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let In;
const $o = typeof window < "u" && window.trustedTypes;
if ($o)
  try {
    In = /* @__PURE__ */ $o.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && ht(`Error creating trusted types policy: ${e}`);
  }
const ur = In ? (e) => In.createHTML(e) : (e) => e, qc = "http://www.w3.org/2000/svg", Wc = "http://www.w3.org/1998/Math/MathML", ut = typeof document < "u" ? document : null, Io = ut && /* @__PURE__ */ ut.createElement("template"), zc = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const o = t === "svg" ? ut.createElementNS(qc, e) : t === "mathml" ? ut.createElementNS(Wc, e) : s ? ut.createElement(e, { is: s }) : ut.createElement(e);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => ut.createTextNode(e),
  createComment: (e) => ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ut.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, o, i) {
    const r = s ? s.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), s), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Io.innerHTML = ur(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Io.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Gc = /* @__PURE__ */ Symbol("_vtc");
function Jc(e, t, s) {
  const n = e[Gc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Ro = /* @__PURE__ */ Symbol("_vod"), Yc = /* @__PURE__ */ Symbol("_vsh"), Zc = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Xc = /(?:^|;)\s*display\s*:/;
function Qc(e, t, s) {
  const n = e.style, o = se(s);
  let i = !1;
  if (s && !o) {
    if (t)
      if (se(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          s[l] == null && os(n, l, "");
        }
      else
        for (const r in t)
          s[r] == null && os(n, r, "");
    for (const r in s) {
      r === "display" && (i = !0);
      const l = s[r];
      l != null ? sa(
        e,
        r,
        !se(t) && t ? t[r] : void 0,
        l
      ) || os(n, r, l) : os(n, r, "");
    }
  } else if (o) {
    if (t !== s) {
      const r = n[Zc];
      r && (s += ";" + r), n.cssText = s, i = Xc.test(s);
    }
  } else t && e.removeAttribute("style");
  Ro in e && (e[Ro] = i ? n.display : "", e[Yc] && (n.display = "none"));
}
const ea = /[^\\];\s*$/, Lo = /\s*!important$/;
function os(e, t, s) {
  if ($(s))
    s.forEach((n) => os(e, t, n));
  else if (s == null && (s = ""), process.env.NODE_ENV !== "production" && ea.test(s) && ht(
    `Unexpected semicolon at the end of '${t}' style value: '${s}'`
  ), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ta(e, t);
    Lo.test(s) ? e.setProperty(
      xt(n),
      s.replace(Lo, ""),
      "important"
    ) : e[n] = s;
  }
}
const Fo = ["Webkit", "Moz", "ms"], vn = {};
function ta(e, t) {
  const s = vn[t];
  if (s)
    return s;
  let n = we(t);
  if (n !== "filter" && n in e)
    return vn[t] = n;
  n = Xs(n);
  for (let o = 0; o < Fo.length; o++) {
    const i = Fo[o] + n;
    if (i in e)
      return vn[t] = i;
  }
  return t;
}
function sa(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && se(n) && s === n;
}
const Ho = "http://www.w3.org/1999/xlink";
function jo(e, t, s, n, o, i = Pr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Ho, t.slice(6, t.length)) : e.setAttributeNS(Ho, t, s) : s == null || i && !Qo(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ke(s) ? String(s) : s
  );
}
function Bo(e, t, s, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? ur(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== a || !("_value" in e)) && (e.value = a), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let r = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Qo(s) : s == null && l === "string" ? (s = "", r = !0) : l === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !r && ht(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${s} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function na(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function oa(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Uo = /* @__PURE__ */ Symbol("_vei");
function ia(e, t, s, n, o = null) {
  const i = e[Uo] || (e[Uo] = {}), r = i[t];
  if (n && r)
    r.value = process.env.NODE_ENV !== "production" ? qo(n, t) : n;
  else {
    const [l, a] = ra(t);
    if (n) {
      const p = i[t] = aa(
        process.env.NODE_ENV !== "production" ? qo(n, t) : n,
        o
      );
      na(e, l, p, a);
    } else r && (oa(e, l, r, a), i[t] = void 0);
  }
}
const Ko = /(?:Once|Passive|Capture)$/;
function ra(e) {
  let t;
  if (Ko.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Ko); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let bn = 0;
const la = /* @__PURE__ */ Promise.resolve(), ca = () => bn || (la.then(() => bn = 0), bn = Date.now());
function aa(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const o = s.value;
    if ($(o)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const r = o.slice(), l = [n];
      for (let a = 0; a < r.length && !n._stopped; a++) {
        const p = r[a];
        p && Ye(
          p,
          t,
          5,
          l
        );
      }
    } else
      Ye(
        o,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = ca(), s;
}
function qo(e, t) {
  return R(e) || $(e) ? e : (ht(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), fe);
}
const Wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ua = (e, t, s, n, o, i) => {
  const r = o === "svg";
  t === "class" ? Jc(e, n, r) : t === "style" ? Qc(e, s, n) : vs(t) ? fs(t) || ia(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fa(e, t, n, r)) ? (Bo(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && jo(e, t, n, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (da(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !se(n))) ? Bo(e, we(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), jo(e, t, n, r));
};
function fa(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wo(t) && R(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wo(t) && se(s) ? !1 : t in e;
}
function da(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = we(t);
  return Array.isArray(s) ? s.some((o) => we(o) === n) : Object.keys(s).some((o) => we(o) === n);
}
const pa = /* @__PURE__ */ ie({ patchProp: ua }, zc);
let zo;
function ha() {
  return zo || (zo = xc(pa));
}
const ga = (...e) => {
  const t = ha().createApp(...e);
  process.env.NODE_ENV !== "production" && (va(t), ba(t));
  const { mount: s } = t;
  return t.mount = (n) => {
    const o = ya(n);
    if (!o) return;
    const i = t._component;
    !R(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = s(o, !1, ma(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
};
function ma(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function va(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Tr(t) || Dr(t) || Cr(t),
    writable: !1
  });
}
function ba(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ht(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const s = e.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ht(n), s;
      },
      set() {
        ht(n);
      }
    });
  }
}
function ya(e) {
  if (se(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ht(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ht(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ea() {
  Kc();
}
process.env.NODE_ENV !== "production" && Ea();
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ds = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Na = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: s, color: n, iconNode: o, name: i, class: r, ...l }, { slots: a }) => $n(
  "svg",
  {
    ...Ds,
    width: e || Ds.width,
    height: e || Ds.height,
    stroke: n || Ds.stroke,
    "stroke-width": s ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${_a(i ?? "icon")}`],
    ...l
  },
  [...o.map((p) => $n(...p)), ...a.default ? [a.default()] : []]
);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = (e, t) => (s, { slots: n }) => $n(
  Na,
  {
    ...s,
    iconNode: t,
    name: e
  },
  n
);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = ne("ALargeSmallIcon", [
  ["path", { d: "M21 14h-5", key: "1vh23k" }],
  ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16", key: "1wh10o" }],
  ["path", { d: "M4.5 13h6", key: "dfilno" }],
  ["path", { d: "m3 16 4.5-9 4.5 9", key: "2dxa0e" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sa = ne("AudioLinesIcon", [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = ne("BadgeCheckIcon", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = ne("BaselineIcon", [
  ["path", { d: "M4 20h16", key: "14thso" }],
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = ne("CircleOffIcon", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Da = ne("ContrastIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = ne("CrosshairIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = ne("EyeIcon", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pa = ne("FocusIcon", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ma = ne("HandIcon", [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ka = ne("ListRestartIcon", [
  ["path", { d: "M21 6H3", key: "1jwq7v" }],
  ["path", { d: "M7 12H3", key: "13ou7f" }],
  ["path", { d: "M7 18H3", key: "1sijw9" }],
  [
    "path",
    {
      d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
      key: "qth677"
    }
  ],
  ["path", { d: "M11 10v4h4", key: "172dkj" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = ne("Maximize2Icon", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $a = ne("Minimize2Icon", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = ne("MousePointer2Icon", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = ne("MousePointerClickIcon", [
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  [
    "path",
    {
      d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
      key: "s0h3yz"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const La = ne("PauseIcon", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = ne("PlayIcon", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = ne("Rows3Icon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = ne("ScanEyeIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
      key: "11ak4c"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = ne("ShieldAlertIcon", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ua = ne("SparklesIcon", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = ne("TypeIcon", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = ne("Volume2Icon", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = ne("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = ne("ZapIcon", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), za = {
  class: "aging-assist-root",
  "data-aging-assist-root": ""
}, Ga = ["aria-label"], Ja = ["aria-label"], Ya = { class: "aging-assist-shell" }, Za = { class: "aging-assist-brand" }, Xa = {
  class: "aging-assist-mark",
  "aria-hidden": "true"
}, Qa = { class: "aging-assist-title" }, eu = { class: "aging-assist-groups" }, tu = { class: "aging-assist-group" }, su = { class: "aging-assist-group" }, nu = { class: "aging-assist-group" }, ou = { class: "aging-assist-group" }, iu = { class: "aging-assist-status" }, ru = { class: "aging-assist-rate" }, lu = { for: "aging-assist-rate" }, cu = ["value"], au = ["value"], uu = {
  key: 0,
  class: "aging-assist-message",
  role: "status"
}, fu = ["aria-label"], du = {
  key: 2,
  class: "aging-assist-more"
}, pu = { class: "aging-assist-switches" }, hu = { class: "aging-assist-switch" }, gu = ["checked"], mu = { class: "aging-assist-switch" }, vu = ["checked"], bu = { class: "aging-assist-switch" }, yu = ["checked"], Eu = { class: "aging-assist-switch" }, _u = ["checked"], Nu = { class: "aging-assist-bigtext-window" }, xu = { class: "aging-assist-bigtext-actions" }, Su = ["aria-label", "title"], Ou = {
  key: 4,
  class: "aging-assist-confirm",
  role: "dialog",
  "aria-modal": "true"
}, wu = { class: "aging-assist-confirm-box" }, Tu = { class: "aging-assist-confirm-actions" }, Du = 8, Cu = /* @__PURE__ */ kl({
  __name: "AssistPanel",
  props: {
    state: {},
    labels: {},
    position: {},
    showLauncher: { type: Boolean }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const s = e, n = t, o = [
      { label: "慢速", value: 0.75 },
      { label: "标准", value: 1 },
      { label: "较快", value: 1.25 },
      { label: "快速", value: 1.5 }
    ], i = /* @__PURE__ */ tt(null), r = /* @__PURE__ */ tt(0), l = /* @__PURE__ */ tt(0), a = /* @__PURE__ */ tt(0), p = /* @__PURE__ */ tt(0), d = /* @__PURE__ */ tt(0), f = /* @__PURE__ */ tt(0), m = /* @__PURE__ */ tt(""), O = /* @__PURE__ */ tt(0), A = /* @__PURE__ */ tt(0), V = Is(
      () => s.state.currentText || "移动鼠标到文字上，这里会显示大字幕。"
    ), te = Is(
      () => s.state.bigText && s.state.speech && !s.state.speechPaused
    ), ee = Is(() => Array.from(V.value));
    function M(D, g) {
      n("action", D, g);
    }
    function B(D, g) {
      M("setBoolean", {
        key: D,
        value: g.target.checked
      });
    }
    function de() {
      a.value && (window.cancelAnimationFrame(a.value), a.value = 0);
    }
    function P() {
      d.value && window.clearTimeout(d.value), d.value = 0, m.value = "", O.value = 0, A.value = 0;
    }
    function oe(D) {
      return Math.min(1, Math.max(0, D));
    }
    function re(D) {
      const g = D.scrollHeight - D.clientHeight;
      r.value = g > 0 ? Math.min(100, D.scrollTop / g * 100) : 0;
    }
    function pe(D) {
      var ct;
      const g = Array.from(D.querySelectorAll(".aging-assist-subtitle-char")), C = [];
      if (g.length <= 1)
        return { charsLength: g.length, lines: C };
      const ye = ((ct = g[0]) == null ? void 0 : ct.offsetTop) ?? 0;
      let Fe = 0, He = ye;
      return g.forEach((Ve, Jt) => {
        Ve.offsetTop <= He + 2 || (C.push({ start: Fe, end: Jt, top: He }), Fe = Jt, He = Ve.offsetTop);
      }), C.push({ start: Fe, end: g.length, top: He }), { charsLength: g.length, lines: C };
    }
    function me(D) {
      const g = oe(D);
      return g * g * (3 - 2 * g);
    }
    function Te() {
      var D;
      return ((D = window.matchMedia) == null ? void 0 : D.call(window, "(prefers-reduced-motion: reduce)").matches) ?? !1;
    }
    function Ze() {
      return s.state.speech ? s.state.speechProgress : p.value;
    }
    function De(D, g) {
      if (!s.state.bigText) return 0;
      const { charsLength: C, lines: ye } = pe(D);
      if (C <= 1 || ye.length <= 1) return 0;
      const Fe = oe(Ze());
      if (Fe >= 1) return g;
      const He = Fe * C, ct = ye.findIndex((v) => He < v.end);
      if (ct <= 0) return 0;
      const Ve = ye[ct], Jt = ye[ct - 1], c = ye[0].top, u = Math.max(1, Ve.end - Ve.start), h = me((He - Ve.start) / u), y = Math.max(0, Jt.top - c), b = Math.max(0, Ve.top - c);
      return Math.min(g, y + (b - y) * h);
    }
    function Ot() {
      const D = i.value;
      if (!D) {
        a.value = 0;
        return;
      }
      const g = l.value - D.scrollTop;
      if (Math.abs(g) < 0.5) {
        D.scrollTop = l.value, re(D), a.value = 0;
        return;
      }
      D.scrollTop += g * 0.22, re(D), a.value = window.requestAnimationFrame(Ot);
    }
    function Gt(D, g, C = !1) {
      if (l.value = g, C || Te()) {
        de(), D.scrollTop = g, re(D);
        return;
      }
      a.value || (a.value = window.requestAnimationFrame(Ot));
    }
    function be(D = !1) {
      const g = i.value;
      if (!g) return;
      const C = g.scrollHeight - g.clientHeight;
      if (C <= 0) {
        r.value = 0;
        return;
      }
      Gt(g, De(g, C), D);
    }
    function ve(D) {
      const g = Math.max(D.replace(/\s+/g, "").length, 8);
      return Math.max(4200, g * 120);
    }
    function U(D) {
      return `${V.value}|${D.scrollHeight}|${D.clientHeight}`;
    }
    function j(D, g = !1) {
      m.value = U(D), A.value = ve(V.value);
      const C = D.scrollHeight - D.clientHeight;
      p.value = g && C > 0 ? oe(D.scrollTop / C) : 0, O.value = window.performance.now() - p.value * A.value;
    }
    function Ce() {
      const D = i.value;
      if (!D || !s.state.bigText || s.state.speech || Te()) {
        m.value = "", O.value = 0, A.value = 0;
        return;
      }
      if (D.scrollHeight <= D.clientHeight) {
        m.value = "", O.value = 0, A.value = 0, re(D);
        return;
      }
      (U(D) !== m.value || !A.value) && j(D);
      const C = O.value || window.performance.now();
      O.value = C, p.value = oe(
        (window.performance.now() - C) / A.value
      ), be(!0);
    }
    function vt(D = !1, g = 0) {
      g === 0 && P(), !(!s.state.bigText || s.state.speech || Te()) && Pt(() => {
        const C = i.value;
        if (C) {
          if (C.scrollHeight <= C.clientHeight) {
            g < Du && (d.value = window.setTimeout(() => {
              d.value = 0, vt(D, g + 1);
            }, 120));
            return;
          }
          j(C, D), Ce();
        }
      });
    }
    function wt() {
      if (f.value) return;
      const D = () => {
        f.value = 0, Ce(), f.value = window.setTimeout(D, 64);
      };
      f.value = window.setTimeout(D, 64);
    }
    function bt() {
      f.value && (window.clearTimeout(f.value), f.value = 0);
    }
    function Le() {
      Pt(() => {
        const D = i.value;
        D && (Gt(D, 0, !0), te.value && be(), vt());
      });
    }
    return ft(V, Le), ft(
      () => s.state.bigText,
      (D) => {
        D ? Le() : (de(), P());
      }
    ), ft(te, (D) => {
      D ? (P(), Pt(be)) : (de(), s.state.speech || vt(!0));
    }), ft(
      () => s.state.speech,
      (D) => {
        D ? (P(), Pt(be)) : vt(!0);
      }
    ), ft(
      () => s.state.speechRate,
      () => {
        te.value && Pt(be);
      }
    ), ft(
      () => s.state.speechProgress,
      () => {
        !s.state.bigText || !s.state.speech || Pt(() => {
          be();
        });
      }
    ), Ai(wt), $i(() => {
      bt(), de(), P();
    }), (D, g) => (Pe(), Ie("div", za, [
      e.showLauncher && !e.state.toolbarOpen ? (Pe(), Ie("button", {
        key: 0,
        class: "aging-assist-launcher",
        type: "button",
        "aria-label": e.labels.openToolbar,
        onClick: g[0] || (g[0] = (C) => M("open"))
      }, [
        H(Q(Oa), { size: 24 }),
        S("span", null, J(e.labels.launcher), 1)
      ], 8, Ga)) : yt("", !0),
      e.state.toolbarOpen ? (Pe(), Ie("section", {
        key: 1,
        class: Ne(["aging-assist-toolbar", e.position === "bottom" ? "is-bottom" : "is-top"]),
        "aria-label": e.labels.launcher
      }, [
        S("div", Ya, [
          S("div", Za, [
            S("div", Xa, [
              H(Q(Ua), { size: 26 })
            ]),
            S("div", Qa, [
              S("strong", null, J(e.labels.launcher), 1),
              g[29] || (g[29] = S("span", null, "更清楚，更好点，更安心", -1))
            ])
          ]),
          S("div", eu, [
            S("div", tu, [
              S("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: g[1] || (g[1] = (C) => M("reset"))
              }, [
                H(Q(ka)),
                S("span", null, J(e.labels.reset), 1)
              ]),
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.speech }]),
                type: "button",
                onClick: g[2] || (g[2] = (C) => M("toggle", "speech"))
              }, [
                H(Q(qa)),
                S("span", null, J(e.labels.speech), 1)
              ], 2),
              e.state.speech && !e.state.speechPaused ? (Pe(), Ie("button", {
                key: 0,
                class: "aging-assist-control",
                type: "button",
                onClick: g[3] || (g[3] = (C) => M("pauseSpeech"))
              }, [
                H(Q(La)),
                S("span", null, J(e.labels.pauseSpeech), 1)
              ])) : yt("", !0),
              e.state.speech && e.state.speechPaused ? (Pe(), Ie("button", {
                key: 1,
                class: "aging-assist-control",
                type: "button",
                onClick: g[4] || (g[4] = (C) => M("resumeSpeech"))
              }, [
                H(Q(Fa)),
                S("span", null, J(e.labels.continueSpeech), 1)
              ])) : yt("", !0),
              S("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: g[5] || (g[5] = (C) => M("readPrevious"))
              }, [
                H(Q(Sa)),
                S("span", null, J(e.labels.readPrevious), 1)
              ]),
              S("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: g[6] || (g[6] = (C) => M("readNext"))
              }, [
                H(Q(Ha)),
                S("span", null, J(e.labels.readNext), 1)
              ])
            ]),
            S("div", su, [
              S("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: g[7] || (g[7] = (C) => M("fontDown"))
              }, [
                H(Q(wa)),
                S("span", null, J(e.labels.fontDown), 1)
              ]),
              S("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: g[8] || (g[8] = (C) => M("fontUp"))
              }, [
                H(Q(Ka)),
                S("span", null, J(e.labels.fontUp), 1)
              ]),
              S("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: g[9] || (g[9] = (C) => M("zoomOut"))
              }, [
                H(Q($a)),
                S("span", null, J(e.labels.pageZoomOut), 1)
              ]),
              S("button", {
                class: "aging-assist-control",
                type: "button",
                onClick: g[10] || (g[10] = (C) => M("zoomIn"))
              }, [
                H(Q(Aa)),
                S("span", null, J(e.labels.pageZoomIn), 1)
              ])
            ]),
            S("div", nu, [
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.highContrast }]),
                type: "button",
                onClick: g[11] || (g[11] = (C) => M("toggle", "highContrast"))
              }, [
                H(Q(Da)),
                S("span", null, J(e.labels.highContrast), 1)
              ], 2),
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.largeCursor }]),
                type: "button",
                onClick: g[12] || (g[12] = (C) => M("toggle", "largeCursor"))
              }, [
                H(Q(Ia)),
                S("span", null, J(e.labels.largeCursor), 1)
              ], 2),
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.crosshair }]),
                type: "button",
                onClick: g[13] || (g[13] = (C) => M("toggle", "crosshair"))
              }, [
                H(Q(Ca)),
                S("span", null, J(e.labels.crosshair), 1)
              ], 2),
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.readingGuide }]),
                type: "button",
                onClick: g[14] || (g[14] = (C) => M("toggle", "readingGuide"))
              }, [
                H(Q(ja)),
                S("span", null, J(e.labels.readingGuide), 1)
              ], 2),
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.bigText }]),
                type: "button",
                onClick: g[15] || (g[15] = (C) => M("toggle", "bigText"))
              }, [
                H(Q(xa)),
                S("span", null, J(e.labels.bigText), 1)
              ], 2)
            ]),
            S("div", ou, [
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.simplified }]),
                type: "button",
                onClick: g[16] || (g[16] = (C) => M("toggle", "simplified"))
              }, [
                H(Q(Va)),
                S("span", null, J(e.labels.simplified), 1)
              ], 2),
              S("button", {
                class: Ne(["aging-assist-control", { "is-active": e.state.moreOpen }]),
                type: "button",
                onClick: g[17] || (g[17] = (C) => M("toggleMore"))
              }, [
                H(Q(Wa)),
                S("span", null, J(e.labels.more), 1)
              ], 2)
            ])
          ]),
          S("div", iu, [
            S("div", ru, [
              S("label", lu, J(e.labels.speechRate), 1),
              S("select", {
                id: "aging-assist-rate",
                value: e.state.speechRate,
                onChange: g[18] || (g[18] = (C) => M("rate", Number(C.target.value)))
              }, [
                (Pe(), Ie(Re, null, yo(o, (C) => S("option", {
                  key: C.value,
                  value: C.value
                }, J(C.label), 9, au)), 64))
              ], 40, cu)
            ]),
            e.state.statusMessage ? (Pe(), Ie("p", uu, J(e.state.statusMessage), 1)) : yt("", !0),
            S("button", {
              class: "aging-assist-control is-danger",
              type: "button",
              onClick: g[19] || (g[19] = (C) => M("disable"))
            }, [
              H(Q(Ta)),
              S("span", null, J(e.labels.exit), 1)
            ]),
            S("button", {
              class: "aging-assist-control",
              type: "button",
              "aria-label": e.labels.closeToolbar,
              onClick: g[20] || (g[20] = (C) => M("close"))
            }, [
              H(Q(Go)),
              S("span", null, J(e.labels.closeToolbar), 1)
            ], 8, fu)
          ])
        ])
      ], 10, Ja)) : yt("", !0),
      e.state.toolbarOpen && e.state.moreOpen ? (Pe(), Ie("aside", du, [
        g[30] || (g[30] = S("h2", null, "增强设置", -1)),
        S("div", pu, [
          S("label", hu, [
            S("span", null, [
              H(Q(Pa), { size: 20 }),
              ns(" " + J(e.labels.focusEnhance), 1)
            ]),
            S("input", {
              type: "checkbox",
              checked: e.state.focusEnhance,
              onChange: g[21] || (g[21] = (C) => B("focusEnhance", C))
            }, null, 40, gu)
          ]),
          S("label", mu, [
            S("span", null, [
              H(Q(Ra), { size: 20 }),
              ns(" " + J(e.labels.clickEnhance), 1)
            ]),
            S("input", {
              type: "checkbox",
              checked: e.state.clickEnhance,
              onChange: g[22] || (g[22] = (C) => B("clickEnhance", C))
            }, null, 40, vu)
          ]),
          S("label", bu, [
            S("span", null, [
              H(Q(Ma), { size: 20 }),
              ns(" " + J(e.labels.formEnhance), 1)
            ]),
            S("input", {
              type: "checkbox",
              checked: e.state.formEnhance,
              onChange: g[23] || (g[23] = (C) => B("formEnhance", C))
            }, null, 40, yu)
          ]),
          S("label", Eu, [
            S("span", null, [
              H(Q(Ba), { size: 20 }),
              ns(" " + J(e.labels.mistakeGuard), 1)
            ]),
            S("input", {
              type: "checkbox",
              checked: e.state.mistakeGuard,
              onChange: g[24] || (g[24] = (C) => B("mistakeGuard", C))
            }, null, 40, _u)
          ])
        ])
      ])) : yt("", !0),
      e.state.bigText ? (Pe(), Ie("section", {
        key: 3,
        class: Ne(["aging-assist-bigtext is-bottom", [
          e.position === "top" ? "has-toolbar-top" : "has-toolbar-bottom",
          e.state.speech ? "is-reading" : "is-plain"
        ]]),
        "aria-live": "polite"
      }, [
        S("div", Nu, [
          S("p", {
            ref_key: "bigTextScroller",
            ref: i,
            onScroll: g[25] || (g[25] = (C) => re(C.currentTarget))
          }, [
            (Pe(!0), Ie(Re, null, yo(ee.value, (C, ye) => (Pe(), Ie("span", {
              key: `${ye}-${C}`,
              class: "aging-assist-subtitle-char"
            }, J(C), 1))), 128))
          ], 544),
          S("span", {
            class: "aging-assist-bigtext-progress",
            style: Qs({ transform: `scaleX(${r.value / 100})` }),
            "aria-hidden": "true"
          }, null, 4)
        ]),
        S("div", xu, [
          S("button", {
            type: "button",
            "aria-label": e.labels.closeBigText,
            title: e.labels.closeBigText,
            onClick: g[26] || (g[26] = (C) => M("toggle", "bigText"))
          }, [
            H(Q(Go), { size: 28 })
          ], 8, Su)
        ])
      ], 2)) : yt("", !0),
      S("div", {
        class: Ne(["aging-assist-crosshair-x", { "is-visible": e.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      S("div", {
        class: Ne(["aging-assist-crosshair-y", { "is-visible": e.state.crosshair }]),
        "aria-hidden": "true"
      }, null, 2),
      e.state.confirming ? (Pe(), Ie("section", Ou, [
        S("div", wu, [
          g[31] || (g[31] = S("h2", null, "请确认操作", -1)),
          g[32] || (g[32] = S("p", null, "这个操作可能会提交、删除或改变重要信息。请确认是否继续。", -1)),
          S("div", Tu, [
            S("button", {
              type: "button",
              onClick: g[27] || (g[27] = (C) => M("cancelDanger"))
            }, "取消"),
            S("button", {
              class: "primary",
              type: "button",
              "data-aging-confirm-primary": "",
              onClick: g[28] || (g[28] = (C) => M("confirmDanger"))
            }, " 继续 ")
          ])
        ])
      ])) : yt("", !0)
    ]));
  }
}), Vu = "aging-assist", Pu = "aging-assist-state", yn = {
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
}, Mu = {
  launcher: "适老化",
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
  more: "更多"
};
function ku(e) {
  try {
    const t = window.localStorage.getItem(e);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}
function Au(e, t) {
  try {
    window.localStorage.setItem(e, JSON.stringify(t));
  } catch {
  }
}
function $u(e) {
  try {
    window.localStorage.removeItem(e);
  } catch {
  }
}
function En(e) {
  return e ? typeof e == "string" ? document.querySelector(e) : e : null;
}
function Iu(e, t = {}) {
  const s = document.createElement(e);
  return Object.entries(t).forEach(([n, o]) => {
    s.setAttribute(n, o);
  }), s;
}
function Js(e) {
  var a;
  if (!e || e.closest("[data-aging-assist-root]")) return "";
  const t = e.closest("[data-aging-readable], [data-aging-text]");
  if (t && t !== e && !Lu(e))
    return Js(t);
  const s = e.getAttribute("data-aging-text") || e.getAttribute("data-aging-label"), n = e.getAttribute("aria-label"), o = e.getAttribute("title"), i = e instanceof HTMLImageElement ? e.getAttribute("alt") : "", r = e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? e.value || e.placeholder : e instanceof HTMLSelectElement ? ((a = e.selectedOptions[0]) == null ? void 0 : a.textContent) || e.value : "", l = e.textContent || "";
  return fr(s || n || o || i || r || l);
}
function fr(e) {
  return e.replace(/\s+/g, " ").replace(/[|_~`^*#<>[\]{}\\]/g, "").trim().slice(0, 240);
}
function Ru(e = document.body) {
  const t = [
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
  return Array.from(e.querySelectorAll(t)).filter((n) => {
    if (n.closest("[data-aging-assist-root]") || n.closest("[data-aging-ignore], .qunar-assist-hide") || n.closest("[data-aging-readable]") && !n.matches("[data-aging-readable]"))
      return !1;
    const o = n.getBoundingClientRect(), i = Js(n);
    return !i || o.width <= 0 || o.height <= 0 || !Fu(n, i) || s.has(i) ? !1 : (s.add(i), !0);
  });
}
function Lu(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement || e instanceof HTMLButtonElement;
}
function Fu(e, t) {
  return e.matches("[data-aging-text], [data-aging-readable], .qunar-assist-long-text") ? t.length >= 2 : e.matches("h1, h2, h3, p, li, summary") || e.matches("button, a, [role='button'], [title], [aria-label], label") ? t.length >= 4 : t.length >= 6;
}
class Hu {
  constructor() {
    Z(this, "utterance", null);
  }
  get supported() {
    return typeof window < "u" && "speechSynthesis" in window;
  }
  speak(t, s, n = {}) {
    if (!this.supported || !t) return !1;
    this.stop();
    const o = new SpeechSynthesisUtterance(t);
    o.lang = "zh-CN", o.rate = s, o.pitch = 1, o.volume = 1;
    const i = window.speechSynthesis.getVoices().find((r) => r.lang.toLowerCase().startsWith("zh"));
    return i && (o.voice = i), o.onstart = () => {
      var r;
      return (r = n.onStart) == null ? void 0 : r.call(n);
    }, o.onboundary = (r) => {
      var l;
      (l = n.onBoundary) == null || l.call(n, ju(r.charIndex, t.length));
    }, o.onend = () => {
      var r, l;
      this.utterance === o && ((r = n.onBoundary) == null || r.call(n, 1), (l = n.onEnd) == null || l.call(n), this.utterance = null);
    }, o.onerror = () => {
      var r;
      this.utterance === o && ((r = n.onError) == null || r.call(n), this.utterance = null);
    }, this.utterance = o, window.speechSynthesis.speak(o), !0;
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
function ju(e, t) {
  return t ? Math.min(1, Math.max(0, e / t)) : 0;
}
class dr {
  constructor(t = {}) {
    Z(this, "state");
    Z(this, "options");
    Z(this, "app", null);
    Z(this, "host", null);
    Z(this, "labels");
    Z(this, "listeners", /* @__PURE__ */ new Set());
    Z(this, "speech", new Hu());
    Z(this, "currentReadTarget", null);
    Z(this, "pendingDanger", null);
    Z(this, "pendingDangerAction", null);
    Z(this, "lastSpokenText", "");
    Z(this, "destroyed", !1);
    Z(this, "originalBodyPaddingBottom", null);
    Z(this, "bigTextReserveApplied", !1);
    Z(this, "speechProgressTimer", 0);
    Z(this, "speechProgressStartedAt", 0);
    Z(this, "speechProgressElapsed", 0);
    Z(this, "speechProgressDuration", 0);
    Z(this, "hoverTimer", 0);
    Z(this, "hoverTarget", null);
    Z(this, "crosshairFrame", 0);
    Z(this, "crosshairPoint", null);
    Z(this, "onTriggerClick", (t) => {
      t.preventDefault(), this.open();
    });
    Z(this, "onMouseMove", (t) => {
      this.queueCrosshairUpdate(t);
    });
    Z(this, "onMouseOver", (t) => {
      this.queueHover(t.target);
    });
    Z(this, "onDangerClick", (t) => {
      if (!this.state.enabled || !this.state.mistakeGuard) return;
      const s = this.findDangerElement(t.target);
      !s || s.dataset.agingAssistConfirmed === "true" || (t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), this.requestDangerConfirmation(s, () => {
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
    Z(this, "onDangerSubmit", (t) => {
      if (!this.state.enabled || !this.state.mistakeGuard) return;
      const s = t.target instanceof HTMLFormElement ? t.target : null, n = t.submitter instanceof HTMLElement ? t.submitter : null, o = this.findDangerElement(n) ?? (s != null && s.matches(this.options.dangerousSelector) ? s : null);
      !o || o.dataset.agingAssistConfirmed === "true" || (t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), this.requestDangerConfirmation(o, () => {
        s && (typeof s.requestSubmit == "function" ? s.requestSubmit(n instanceof HTMLElement ? n : void 0) : s.submit());
      }));
    });
    this.options = {
      namespace: t.namespace ?? Vu,
      storageKey: t.storageKey ?? Pu,
      persist: t.persist ?? !0,
      locale: t.locale ?? "zh-CN",
      theme: t.theme ?? "warm",
      position: t.position ?? "top",
      autoMount: t.autoMount ?? !0,
      showLauncher: t.showLauncher ?? !0,
      dangerousSelector: t.dangerousSelector ?? "[data-aging-danger], .danger, .delete, .dangerous, [type='submit'][data-danger='true']",
      ignoredSelector: t.ignoredSelector ?? "[data-aging-ignore], [data-aging-assist-root], .qunar-assist-hide",
      ...t
    };
    const s = this.options.persist ? ku(this.options.storageKey) : {}, { bigTextDock: n, ...o } = s, {
      bigTextDock: i,
      ...r
    } = t.initialState ?? {};
    this.state = /* @__PURE__ */ sn({
      ...yn,
      ...o,
      ...r,
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
      ...Mu,
      ...t.labels
    }, this.options.autoMount && this.mount();
  }
  mount() {
    if (this.app || this.destroyed) return;
    this.host = Iu("div", {
      id: `${this.options.namespace}-root`,
      "data-aging-assist-root": "true"
    }), (En(this.options.container) ?? document.body).appendChild(this.host), this.app = ga(Cu, {
      state: this.state,
      labels: this.labels,
      position: this.options.position,
      showLauncher: this.options.showLauncher,
      onAction: (s, n) => this.handleAction(s, n)
    }), this.app.mount(this.host), this.bindTrigger(), this.bindDocumentEvents(), this.applyEffects(), this.emit("init");
  }
  open() {
    this.setState({ enabled: !0, toolbarOpen: !0 }), this.emit("open");
  }
  close() {
    this.setState({ toolbarOpen: !1, moreOpen: !1 }), this.emit("close");
  }
  enable() {
    this.setState({ enabled: !0, toolbarOpen: !0 }), this.emit("enable");
  }
  disable() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.clearReadTarget(), this.setState({
      ...yn,
      toolbarOpen: !1,
      enabled: !1,
      focusEnhance: !0,
      formEnhance: !0
    }), this.options.persist && $u(this.options.storageKey), this.applyEffects(), this.emit("disable");
  }
  reset() {
    this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.clearReadTarget(), this.setState({
      ...yn,
      enabled: !0,
      toolbarOpen: !0,
      focusEnhance: !0,
      formEnhance: !0
    }), this.emit("reset");
  }
  destroy() {
    var t, s;
    this.destroyed = !0, this.speech.stop(), this.stopSpeechProgressClock(), this.clearHoverTimer(), this.crosshairFrame && window.cancelAnimationFrame(this.crosshairFrame), this.crosshairFrame = 0, this.crosshairPoint = null, this.clearReadTarget(), this.unbindTrigger(), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("click", this.onDangerClick, !0), document.removeEventListener("submit", this.onDangerSubmit, !0), (t = this.app) == null || t.unmount(), (s = this.host) == null || s.remove(), this.app = null, this.host = null, this.removeRootEffects();
  }
  speak(t) {
    const s = fr(t);
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
  setState(t) {
    Object.assign(this.state, t), this.applyEffects(), this.persist(), this.notify(), this.emit("change", t);
  }
  subscribe(t) {
    return this.listeners.add(t), () => this.listeners.delete(t);
  }
  subscribeKey(t, s) {
    return s(this.state[t], this.getState()), this.subscribe((n) => {
      s(n[t], n);
    });
  }
  handleAction(t, s) {
    switch (t) {
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
        this.setState({ fontScale: Ht(this.state.fontScale + 0.1, 1, 1.8) });
        break;
      case "fontDown":
        this.setState({ fontScale: Ht(this.state.fontScale - 0.1, 1, 1.8) });
        break;
      case "zoomIn":
        this.setState({ pageScale: Ht(this.state.pageScale + 0.05, 1, 1.3) });
        break;
      case "zoomOut":
        this.setState({ pageScale: Ht(this.state.pageScale - 0.05, 1, 1.3) });
        break;
      case "toggle":
        this.toggle(s);
        break;
      case "setBoolean": {
        const n = s;
        n != null && n.key && this.setBoolean(n.key, n.value);
        break;
      }
      case "toggleMore":
        this.setState({ moreOpen: !this.state.moreOpen });
        break;
      case "rate":
        this.setState({ speechRate: s }), this.state.currentText && this.state.speech && this.speak(this.state.currentText);
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
  toggle(t) {
    const s = this.state[t];
    if (typeof s != "boolean") return;
    if (t === "speech") {
      s ? (this.speech.stop(), this.stopSpeechProgressClock(), this.setState({ speech: !1, speechPaused: !1, speechProgress: 0, statusMessage: "" })) : (this.setState({ speech: !0, speechPaused: !1, speechProgress: 0, statusMessage: "" }), this.state.currentText && (this.lastSpokenText = this.state.currentText, this.speakText(this.state.currentText)));
      return;
    }
    const n = { [t]: !s };
    t === "readingGuide" && s && this.clearReadTarget(), this.setState(n);
  }
  setBoolean(t, s) {
    this.setState({ [t]: s });
  }
  readOffset(t) {
    const s = Ru();
    if (!s.length) return;
    const n = Ht(this.state.readingIndex + t, 0, s.length - 1), o = s[n], i = Js(o);
    this.highlightTarget(o), this.lastSpokenText = i, this.setState({
      readingIndex: n,
      currentText: i,
      speech: !0,
      speechPaused: !1,
      speechProgress: 0,
      statusMessage: ""
    }), this.speakText(i);
  }
  bindTrigger() {
    const t = En(this.options.trigger);
    t == null || t.addEventListener("click", this.onTriggerClick);
  }
  unbindTrigger() {
    const t = En(this.options.trigger);
    t == null || t.removeEventListener("click", this.onTriggerClick);
  }
  bindDocumentEvents() {
    document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseover", this.onMouseOver), document.addEventListener("click", this.onDangerClick, !0), document.addEventListener("submit", this.onDangerSubmit, !0);
  }
  findDangerElement(t) {
    const s = t instanceof HTMLElement ? t : t instanceof Node ? t.parentElement : null;
    return (s == null ? void 0 : s.closest(this.options.dangerousSelector)) ?? null;
  }
  queueCrosshairUpdate(t) {
    !this.state.enabled || !this.state.crosshair || (this.crosshairPoint = { x: t.clientX, y: t.clientY }, !this.crosshairFrame && (this.crosshairFrame = window.requestAnimationFrame(() => {
      this.crosshairFrame = 0, this.crosshairPoint && this.updateCrosshair(this.crosshairPoint.x, this.crosshairPoint.y);
    })));
  }
  updateCrosshair(t, s) {
    const n = this.host, o = n == null ? void 0 : n.querySelector(".aging-assist-crosshair-x"), i = n == null ? void 0 : n.querySelector(".aging-assist-crosshair-y");
    o && (o.style.top = `${s}px`), i && (i.style.left = `${t}px`);
  }
  queueHover(t) {
    if (t === this.hoverTarget && this.hoverTimer || (this.clearHoverTimer(), !this.state.enabled || t != null && t.closest(this.options.ignoredSelector)) || !this.state.readingGuide && !this.state.bigText && !this.state.speech)
      return;
    const s = Js(t);
    s && ((this.state.readingGuide || this.state.bigText) && this.applyHoverTarget(t, s, !1), !(!this.state.speech || s === this.lastSpokenText) && (this.hoverTarget = t, this.hoverTimer = window.setTimeout(() => {
      this.hoverTimer = 0, this.hoverTarget = null, this.applyHoverTarget(t, s, !0);
    }, 220)));
  }
  clearHoverTimer() {
    this.hoverTimer && window.clearTimeout(this.hoverTimer), this.hoverTimer = 0, this.hoverTarget = null;
  }
  applyHoverTarget(t, s, n) {
    const o = {};
    (this.state.currentText !== s || n) && (o.currentText = s), n && (o.speechPaused = !1, o.speechProgress = 0, o.statusMessage = ""), Object.keys(o).length && this.setState(o), this.state.readingGuide && t instanceof HTMLElement && t !== this.currentReadTarget && this.highlightTarget(t), n && (this.lastSpokenText = s, this.speakText(s));
  }
  speakText(t) {
    if (this.stopSpeechProgressClock(), !this.speech.speak(t, this.state.speechRate, {
      onBoundary: (n) => this.updateSpeechProgress(n),
      onEnd: () => {
        this.updateSpeechProgress(1), this.stopSpeechProgressClock();
      },
      onError: () => {
        this.stopSpeechProgressClock(), this.setState({
          speech: !1,
          speechPaused: !1,
          speechProgress: 0,
          statusMessage: "朗读失败，请稍后再试"
        });
      }
    })) {
      this.setState({
        speech: !1,
        speechPaused: !1,
        speechProgress: 0,
        statusMessage: "当前浏览器不支持朗读"
      });
      return;
    }
    this.startSpeechProgressClock(t);
  }
  updateSpeechProgress(t) {
    const s = Math.max(this.state.speechProgress, Ht(t, 0, 1));
    Math.abs(this.state.speechProgress - s) < 0.01 && s !== 0 && s !== 1 || (this.state.speechProgress = s, this.notify());
  }
  startSpeechProgressClock(t) {
    this.stopSpeechProgressClock(), this.speechProgressElapsed = 0, this.speechProgressDuration = Bu(t, this.state.speechRate), this.speechProgressStartedAt = window.performance.now(), this.queueSpeechProgressTick();
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
      const t = this.speechProgressElapsed + (this.speechProgressStartedAt ? window.performance.now() - this.speechProgressStartedAt : 0);
      this.updateSpeechProgress(Math.min(0.98, t / this.speechProgressDuration)), this.queueSpeechProgressTick();
    }, 120);
  }
  highlightTarget(t) {
    this.clearReadTarget(), this.currentReadTarget = t, t.classList.add("aging-assist-read-target");
  }
  clearReadTarget() {
    var t;
    (t = this.currentReadTarget) == null || t.classList.remove("aging-assist-read-target"), this.currentReadTarget = null;
  }
  cancelDanger() {
    var t;
    (t = this.pendingDanger) == null || t.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null, this.setState({ confirming: !1 });
  }
  confirmDanger() {
    const t = this.pendingDanger, s = this.pendingDangerAction;
    if (!t || !s) {
      this.cancelDanger();
      return;
    }
    t.dataset.agingAssistConfirmed = "true", t.classList.remove("aging-assist-danger-focus"), this.pendingDanger = null, this.pendingDangerAction = null, this.setState({ confirming: !1 }), s(), this.emit("confirm", t), window.setTimeout(() => {
      t && delete t.dataset.agingAssistConfirmed;
    }, 0);
  }
  requestDangerConfirmation(t, s) {
    var n;
    (n = this.pendingDanger) == null || n.classList.remove("aging-assist-danger-focus"), this.pendingDanger = t, this.pendingDangerAction = s, this.setState({ confirming: !0 }), t.classList.add("aging-assist-danger-focus"), window.setTimeout(() => {
      var o, i;
      (i = (o = this.host) == null ? void 0 : o.querySelector("[data-aging-confirm-primary]")) == null || i.focus();
    });
  }
  applyEffects() {
    const t = document.documentElement, s = this.state.enabled && this.state.bigText;
    s && !this.bigTextReserveApplied && document.body && (this.originalBodyPaddingBottom = window.getComputedStyle(document.body).paddingBottom || "0px"), t.dataset.agingEnabled = String(this.state.enabled), t.dataset.agingContrast = String(this.state.highContrast), t.dataset.agingSimplified = String(this.state.simplified), t.dataset.agingLargeCursor = String(this.state.largeCursor), t.dataset.agingFocus = String(this.state.focusEnhance), t.dataset.agingClick = String(this.state.clickEnhance), t.dataset.agingForm = String(this.state.formEnhance), t.dataset.agingMistakeGuard = String(this.state.mistakeGuard), t.dataset.agingBigText = String(this.state.bigText), t.dataset.agingToolbarPosition = this.options.position, t.dataset.agingFontScale = String(this.state.fontScale), t.style.setProperty("--aging-assist-font-scale", String(this.state.fontScale)), t.style.setProperty("--aging-assist-page-scale", String(this.state.pageScale)), t.style.setProperty(
      "--aging-assist-body-padding-bottom",
      this.originalBodyPaddingBottom ?? "0px"
    ), !s && this.bigTextReserveApplied && (this.originalBodyPaddingBottom = null, t.style.setProperty("--aging-assist-body-padding-bottom", "0px")), this.bigTextReserveApplied = s, this.host && (this.host.style.zoom = String(1 / this.state.pageScale));
  }
  removeRootEffects() {
    const t = document.documentElement;
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
      "agingToolbarPosition",
      "agingFontScale"
    ].forEach((s) => {
      delete t.dataset[s];
    }), t.style.removeProperty("--aging-assist-font-scale"), t.style.removeProperty("--aging-assist-page-scale"), t.style.removeProperty("--aging-assist-body-padding-bottom"), this.originalBodyPaddingBottom = null, this.bigTextReserveApplied = !1, this.host && (this.host.style.zoom = "");
  }
  persist() {
    if (!this.options.persist) return;
    const t = {
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
    Au(this.options.storageKey, t);
  }
  notify() {
    var s, n;
    const t = this.getState();
    (n = (s = this.options).onChange) == null || n.call(s, t), this.listeners.forEach((o) => o(t));
  }
  emit(t, s) {
    var n, o;
    (o = (n = this.options).onEvent) == null || o.call(n, {
      type: t,
      state: this.getState(),
      detail: s
    });
  }
}
function Ht(e, t, s) {
  return Number(Math.min(s, Math.max(t, e)).toFixed(2));
}
function Bu(e, t) {
  const s = Math.max(e.replace(/\s+/g, "").length, 8);
  return Math.max(2600, s * 210 / t);
}
const Uu = "0.1.0";
function Ys(e = {}) {
  return new dr(e);
}
const qu = Ys, Wu = Ys;
typeof window < "u" && (window.AgingAssist = {
  create: Ys,
  init: Ys,
  AgingAssist: dr,
  version: Uu
});
export {
  dr as AgingAssist,
  Uu as VERSION,
  qu as create,
  Ys as createAgingAssist,
  Wu as init
};
