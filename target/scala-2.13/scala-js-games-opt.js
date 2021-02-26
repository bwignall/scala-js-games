let ScalaJSExample;
(function () {
  "use strict";
  var e,
    aa = Object.freeze({
      assumingES6: !0,
      productionMode: !0,
      linkerVersion: "1.5.0",
      fileLevelThis: this,
    }),
    ba = Math.imul,
    ca = Math.clz32,
    da;
  function ea(a) {
    for (var b in a) return b;
  }
  function fa(a) {
    this.yk = a;
  }
  fa.prototype.toString = function () {
    return String.fromCharCode(this.yk);
  };
  var ia = function ha(a, b, c) {
    var f = new a.G(b[c]);
    if (c < b.length - 1) {
      a = a.Bg;
      c += 1;
      for (var g = f.a, h = 0; h < g.length; h++) g[h] = ha(a, b, c);
    }
    return f;
  };
  function ja(a) {
    switch (typeof a) {
      case "string":
        return m(la);
      case "number":
        return ma(a)
          ? (a << 24) >> 24 === a
            ? m(na)
            : (a << 16) >> 16 === a
            ? m(oa)
            : m(pa)
          : m(ra);
      case "boolean":
        return m(sa);
      case "undefined":
        return m(ta);
      default:
        return null === a
          ? a.Am()
          : a instanceof n
          ? m(ua)
          : a instanceof fa
          ? m(va)
          : a && a.$classData
          ? m(a.$classData)
          : null;
    }
  }
  function xa(a) {
    switch (typeof a) {
      case "string":
        return "java.lang.String";
      case "number":
        return ma(a)
          ? (a << 24) >> 24 === a
            ? "java.lang.Byte"
            : (a << 16) >> 16 === a
            ? "java.lang.Short"
            : "java.lang.Integer"
          : "java.lang.Float";
      case "boolean":
        return "java.lang.Boolean";
      case "undefined":
        return "java.lang.Void";
      default:
        return null === a
          ? a.Am()
          : a instanceof n
          ? "java.lang.Long"
          : a instanceof fa
          ? "java.lang.Character"
          : a && a.$classData
          ? a.$classData.name
          : null.Cc.name;
    }
  }
  function ya(a, b) {
    switch (typeof a) {
      case "string":
        return a === b;
      case "number":
        return Object.is(a, b);
      case "boolean":
        return a === b;
      case "undefined":
        return a === b;
      default:
        return (a && a.$classData) || null === a
          ? a.y(b)
          : a instanceof fa
          ? b instanceof fa
            ? za(a) === za(b)
            : !1
          : Aa.prototype.y.call(a, b);
    }
  }
  function Ba(a) {
    switch (typeof a) {
      case "string":
        return Ca(a);
      case "number":
        return Da(a);
      case "boolean":
        return a ? 1231 : 1237;
      case "undefined":
        return 0;
      default:
        return (a && a.$classData) || null === a
          ? a.H()
          : a instanceof fa
          ? za(a)
          : Aa.prototype.H.call(a);
    }
  }
  function Ea(a) {
    return void 0 === a ? "undefined" : a.toString();
  }
  function Fa(a, b) {
    if (0 === b) throw new Ga();
    return (a / b) | 0;
  }
  function Ia(a, b) {
    if (0 === b) throw new Ga();
    return a % b | 0;
  }
  function Ja(a) {
    return 2147483647 < a ? 2147483647 : -2147483648 > a ? -2147483648 : a | 0;
  }
  function La(a, b, c, d, f) {
    if (a !== c || d < b || ((b + f) | 0) < d)
      for (var g = 0; g < f; g = (g + 1) | 0) c[(d + g) | 0] = a[(b + g) | 0];
    else
      for (g = (f - 1) | 0; 0 <= g; g = (g - 1) | 0)
        c[(d + g) | 0] = a[(b + g) | 0];
  }
  var Ma = 0,
    Na = new WeakMap();
  function Oa(a) {
    switch (typeof a) {
      case "string":
        return Ca(a);
      case "number":
        return Da(a);
      case "bigint":
        var b = 0;
        for (a < BigInt(0) && (a = ~a); a !== BigInt(0); )
          (b ^= Number(BigInt.asIntN(32, a))), (a >>= BigInt(32));
        return b;
      case "boolean":
        return a ? 1231 : 1237;
      case "undefined":
        return 0;
      case "symbol":
        return (a = a.description), void 0 === a ? 0 : Ca(a);
      default:
        if (null === a) return 0;
        b = Na.get(a);
        void 0 === b && ((Ma = b = (Ma + 1) | 0), Na.set(a, b));
        return b;
    }
  }
  function ma(a) {
    return "number" === typeof a && (a | 0) === a && 1 / a !== 1 / -0;
  }
  function Pa(a) {
    return new fa(a);
  }
  function za(a) {
    return null === a ? 0 : a.yk;
  }
  function Qa(a) {
    return null === a ? da : a;
  }
  function Aa() {}
  Aa.prototype.constructor = Aa;
  function q() {}
  q.prototype = Aa.prototype;
  Aa.prototype.H = function () {
    return Oa(this);
  };
  Aa.prototype.y = function (a) {
    return this === a;
  };
  Aa.prototype.z = function () {
    var a = this.H();
    return xa(this) + "@" + (+(a >>> 0)).toString(16);
  };
  Aa.prototype.toString = function () {
    return this.z();
  };
  function r(a) {
    if ("number" === typeof a) {
      this.a = Array(a);
      for (var b = 0; b < a; b++) this.a[b] = null;
    } else this.a = a;
  }
  r.prototype = new q();
  r.prototype.constructor = r;
  r.prototype.I = function (a, b, c, d) {
    La(this.a, a, b.a, c, d);
  };
  r.prototype.q = function () {
    return new r(this.a.slice());
  };
  function Ra() {}
  Ra.prototype = r.prototype;
  function Sa(a) {
    if ("number" === typeof a) {
      this.a = Array(a);
      for (var b = 0; b < a; b++) this.a[b] = !1;
    } else this.a = a;
  }
  Sa.prototype = new q();
  Sa.prototype.constructor = Sa;
  Sa.prototype.I = function (a, b, c, d) {
    La(this.a, a, b.a, c, d);
  };
  Sa.prototype.q = function () {
    return new Sa(this.a.slice());
  };
  function Ta(a) {
    this.a = "number" === typeof a ? new Uint16Array(a) : a;
  }
  Ta.prototype = new q();
  Ta.prototype.constructor = Ta;
  Ta.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Ta.prototype.q = function () {
    return new Ta(this.a.slice());
  };
  function Ua(a) {
    this.a = "number" === typeof a ? new Int8Array(a) : a;
  }
  Ua.prototype = new q();
  Ua.prototype.constructor = Ua;
  Ua.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Ua.prototype.q = function () {
    return new Ua(this.a.slice());
  };
  function Va(a) {
    this.a = "number" === typeof a ? new Int16Array(a) : a;
  }
  Va.prototype = new q();
  Va.prototype.constructor = Va;
  Va.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Va.prototype.q = function () {
    return new Va(this.a.slice());
  };
  function t(a) {
    this.a = "number" === typeof a ? new Int32Array(a) : a;
  }
  t.prototype = new q();
  t.prototype.constructor = t;
  t.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  t.prototype.q = function () {
    return new t(this.a.slice());
  };
  function Wa(a) {
    if ("number" === typeof a) {
      this.a = Array(a);
      for (var b = 0; b < a; b++) this.a[b] = da;
    } else this.a = a;
  }
  Wa.prototype = new q();
  Wa.prototype.constructor = Wa;
  Wa.prototype.I = function (a, b, c, d) {
    La(this.a, a, b.a, c, d);
  };
  Wa.prototype.q = function () {
    return new Wa(this.a.slice());
  };
  function Xa(a) {
    this.a = "number" === typeof a ? new Float32Array(a) : a;
  }
  Xa.prototype = new q();
  Xa.prototype.constructor = Xa;
  Xa.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Xa.prototype.q = function () {
    return new Xa(this.a.slice());
  };
  function Ya(a) {
    this.a = "number" === typeof a ? new Float64Array(a) : a;
  }
  Ya.prototype = new q();
  Ya.prototype.constructor = Ya;
  Ya.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Ya.prototype.q = function () {
    return new Ya(this.a.slice());
  };
  function Za() {
    this.G = void 0;
    this.Nf = this.Bg = this.Nb = null;
    this.Of = 0;
    this.$h = null;
    this.gf = "";
    this.Zh = this.kf = this.wg = this.Pi = void 0;
    this.name = "";
    this.isJSClass = this.isArrayClass = this.isInterface = this.isPrimitive = !1;
    this.isInstance = void 0;
  }
  function $a(a, b, c, d, f) {
    var g = new Za();
    g.Nb = {};
    g.$h = a;
    g.gf = b;
    g.kf = (h) => h === g;
    g.name = c;
    g.isPrimitive = !0;
    g.isInstance = () => !1;
    void 0 !== d && (g.wg = ab(g, d, f));
    return g;
  }
  function v(a, b, c, d, f) {
    var g = new Za(),
      h = ea(a);
    g.Nb = d;
    g.gf = "L" + c + ";";
    g.kf = (k) => !!k.Nb[h];
    g.name = c;
    g.isInterface = b;
    g.isInstance = f || ((k) => !!(k && k.$classData && k.$classData.Nb[h]));
    return g;
  }
  function ab(a, b, c, d) {
    var f = new Za();
    b.prototype.$classData = f;
    var g = "[" + a.gf;
    f.G = b;
    f.Nb = { b: 1, Xb: 1, c: 1 };
    f.Bg = a;
    f.Nf = a;
    f.Of = 1;
    f.gf = g;
    f.name = g;
    f.isArrayClass = !0;
    f.kf = d || ((h) => f === h);
    f.Zh = c ? (h) => new b(new c(h)) : (h) => new b(h);
    f.isInstance = (h) => h instanceof b;
    return f;
  }
  function bb(a) {
    function b(k) {
      if ("number" === typeof k) {
        this.a = Array(k);
        for (var l = 0; l < k; l++) this.a[l] = null;
      } else this.a = k;
    }
    var c = new Za();
    b.prototype = new Ra();
    b.prototype.constructor = b;
    b.prototype.I = function (k, l, p, u) {
      La(this.a, k, l.a, p, u);
    };
    b.prototype.q = function () {
      return new b(this.a.slice());
    };
    var d = a.Nf || a,
      f = a.Of + 1;
    b.prototype.$classData = c;
    var g = "[" + a.gf;
    c.G = b;
    c.Nb = { b: 1, Xb: 1, c: 1 };
    c.Bg = a;
    c.Nf = d;
    c.Of = f;
    c.gf = g;
    c.name = g;
    c.isArrayClass = !0;
    var h = (k) => {
      var l = k.Of;
      return l === f ? d.kf(k.Nf) : l > f && d === w;
    };
    c.kf = h;
    c.Zh = (k) => new b(k);
    c.isInstance = (k) => {
      k = k && k.$classData;
      return !!k && (k === c || h(k));
    };
    return c;
  }
  function x(a) {
    a.wg || (a.wg = bb(a));
    return a.wg;
  }
  function m(a) {
    a.Pi || (a.Pi = new cb(a));
    return a.Pi;
  }
  Za.prototype.isAssignableFrom = function (a) {
    return this === a || this.kf(a);
  };
  Za.prototype.checkCast = function () {};
  Za.prototype.getSuperclass = function () {
    return this.qn ? m(this.qn) : null;
  };
  Za.prototype.getComponentType = function () {
    return this.Bg ? m(this.Bg) : null;
  };
  Za.prototype.newArrayOfThisClass = function (a) {
    for (var b = this, c = 0; c < a.length; c++) b = x(b);
    return ia(b, a, 0);
  };
  var w = new Za();
  w.Nb = { b: 1 };
  w.gf = "Ljava.lang.Object;";
  w.kf = (a) => !a.isPrimitive;
  w.name = "java.lang.Object";
  w.isInstance = (a) => null !== a;
  w.wg = ab(w, r, void 0, (a) => {
    var b = a.Of;
    return 1 === b ? !a.Nf.isPrimitive : 1 < b;
  });
  Aa.prototype.$classData = w;
  var db = $a(void 0, "V", "void", void 0, void 0),
    eb = $a(!1, "Z", "boolean", Sa, void 0),
    fb = $a(0, "C", "char", Ta, Uint16Array),
    gb = $a(0, "B", "byte", Ua, Int8Array),
    hb = $a(0, "S", "short", Va, Int16Array),
    ib = $a(0, "I", "int", t, Int32Array),
    jb = $a(null, "J", "long", Wa, void 0),
    kb = $a(0, "F", "float", Xa, Float32Array),
    lb = $a(0, "D", "double", Ya, Float64Array);
  function mb(a, b, c, d) {
    this.bi = null;
    this.qg = b;
    this.yd = c;
    this.Tj = d;
    if (null === a) throw nb(null);
    this.bi = a;
  }
  mb.prototype = new q();
  mb.prototype.constructor = mb;
  mb.prototype.cd = function (a) {
    var b = ba(10, this.qg);
    a.fillRect(this.yd.h - ((b / 2) | 0), this.yd.g - ((b / 2) | 0), b, b);
  };
  mb.prototype.$i = function () {
    this.yd = z(this.yd, this.Tj);
    this.yd = z(this.yd, this.bi.Ad);
    this.yd = ob(this.yd, this.bi.Ad);
  };
  function pb(a, b) {
    return qb(
      b,
      rb(a.yd, sb(new A(5, 5), a.qg)),
      z(a.yd, sb(new A(5, 5), a.qg)),
      new A(0, 0)
    );
  }
  mb.prototype.$classData = v({ Ql: 0 }, !1, "example.Asteroids$Asteroid", {
    Ql: 1,
    b: 1,
  });
  function tb(a, b, c) {
    this.cf = b;
    this.ci = c;
    if (null === a) throw nb(null);
  }
  tb.prototype = new q();
  tb.prototype.constructor = tb;
  tb.prototype.cd = function (a) {
    a.beginPath();
    a.moveTo(this.cf.h, this.cf.g);
    var b = z(this.cf, ub(sb(this.ci, 5), vb(this.ci)));
    a.lineTo(b.h, b.g);
    a.stroke();
  };
  tb.prototype.$i = function () {
    this.cf = z(this.cf, this.ci);
  };
  tb.prototype.$classData = v({ Rl: 0 }, !1, "example.Asteroids$Bullet", {
    Rl: 1,
    b: 1,
  });
  function wb(a, b, c, d) {
    this.di = null;
    this.zd = b;
    this.Jf = c;
    this.Wd = d;
    if (null === a) throw nb(null);
    this.di = a;
  }
  wb.prototype = new q();
  wb.prototype.constructor = wb;
  wb.prototype.cd = function (a) {
    a.beginPath();
    var b = xb().jb,
      c = [
        z(yb(new A(15, 0), this.Wd), this.zd),
        z(yb(new A(7, 0), this.Wd + 2.2252947962927703), this.zd),
        z(yb(new A(7, 0), this.Wd - 2.2252947962927703), this.zd),
      ];
    b = zb(b, B(new C(), c));
    a.moveTo(b.dd().h, b.dd().g);
    b.R(
      new E(
        ((d, f) => (g) => {
          f.lineTo(g.h, g.g);
        })(this, a)
      )
    );
    a.fill();
  };
  function Ab(a, b) {
    a.zd = z(a.zd, a.Jf);
    a.zd = z(a.zd, a.di.Ad);
    a.zd = ob(a.zd, a.di.Ad);
    b.F(37) && (a.Wd -= 0.05);
    b.F(38) && (a.Jf = z(a.Jf, yb(new A(0.2, 0), a.Wd)));
    b.F(39) && (a.Wd += 0.05);
    b.F(40) && (a.Jf = rb(a.Jf, yb(new A(0.2, 0), a.Wd)));
  }
  wb.prototype.$classData = v({ Sl: 0 }, !1, "example.Asteroids$Craft", {
    Sl: 1,
    b: 1,
  });
  function Bb() {
    this.jk = this.bk = this.ik = this.fk = this.dk = this.ck = this.ek = this.gk = this.hk = null;
    this.Ta = 0;
    Cb = this;
    this.hk = Db(255, 255, 255);
    this.Ta |= 1;
    this.gk = Db(255, 0, 0);
    this.Ta |= 2;
    this.ek = Db(0, 255, 0);
    this.Ta |= 4;
    this.ck = Db(0, 0, 255);
    this.Ta |= 8;
    this.dk = Db(0, 255, 255);
    this.Ta |= 16;
    this.fk = Db(255, 0, 255);
    this.Ta |= 32;
    this.ik = Db(255, 255, 0);
    this.Ta |= 64;
    this.bk = Db(0, 0, 0);
    this.Ta |= 128;
    var a = xb().jb,
      b = [
        Eb(this),
        Fb(this),
        Gb(this),
        Hb(this),
        Ib(this),
        Jb(this),
        Kb(this),
        Lb(this),
      ];
    this.jk = zb(a, B(new C(), b));
    this.Ta |= 256;
  }
  Bb.prototype = new q();
  Bb.prototype.constructor = Bb;
  function Db(a, b, c) {
    return "rgb(" + a + ", " + b + ", " + c + ")";
  }
  function Eb(a) {
    if (0 === (1 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 12"
      );
    return a.hk;
  }
  function Fb(a) {
    if (0 === (2 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 13"
      );
    return a.gk;
  }
  function Gb(a) {
    if (0 === (4 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 14"
      );
    return a.ek;
  }
  function Hb(a) {
    if (0 === (8 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 15"
      );
    return a.ck;
  }
  function Ib(a) {
    if (0 === (16 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 16"
      );
    return a.dk;
  }
  function Jb(a) {
    if (0 === (32 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 17"
      );
    return a.fk;
  }
  function Kb(a) {
    if (0 === (64 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 18"
      );
    return a.ik;
  }
  function Lb(a) {
    if (0 === (128 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 19"
      );
    return a.bk;
  }
  function Mb() {
    var a = G();
    if (0 === (256 & a.Ta))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 20"
      );
    return a.jk;
  }
  Bb.prototype.$classData = v({ Zl: 0 }, !1, "example.Color$", { Zl: 1, b: 1 });
  var Cb;
  function G() {
    Cb || (Cb = new Bb());
    return Cb;
  }
  function Nb(a) {
    a.ie = Ob();
    a.he = !0;
  }
  function Pb() {
    this.ie = null;
    this.he = !1;
  }
  Pb.prototype = new q();
  Pb.prototype.constructor = Pb;
  function Qb() {}
  Qb.prototype = Pb.prototype;
  function Rb(a) {
    if (!a.he)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 115"
      );
    return a.ie;
  }
  function Sb(a, b) {
    a.ie = b;
    a.he = !0;
  }
  function Tb(a, b) {
    this.df = b;
    if (null === a) throw nb(null);
  }
  Tb.prototype = new q();
  Tb.prototype.constructor = Tb;
  function Ub(a, b, c) {
    a.df.beginPath();
    a.df.arc(b, c, 5, 0, 6.283185307179586);
    a.df.fill();
  }
  function Vb(a, b) {
    a.df.beginPath();
    a.df.moveTo(b.dd().h, b.dd().g);
    b.O(
      new E(
        ((c) => (d) => {
          c.df.lineTo(d.h, d.g);
        })(a)
      )
    );
    a.df.stroke();
  }
  Tb.prototype.$classData = v({ bm: 0 }, !1, "example.Game$pimpedContext", {
    bm: 1,
    b: 1,
  });
  function Wb(a, b) {
    this.$c = this.si = this.ih = this.ge = this.ze = this.kk = null;
    this.ri = this.hh = !1;
    this.ti = null;
    this.wa = 0;
    this.kk = b;
    this.ze = Xb().getElementById(a);
    this.wa = ((1 | this.wa) << 24) >> 24;
    this.ge = new A(this.ze.width | 0, this.ze.height | 0);
    this.wa = ((2 | this.wa) << 24) >> 24;
    this.ih = Yb().Fb();
    this.wa = ((4 | this.wa) << 24) >> 24;
    this.si = b.ad(
      this.ge,
      new H(
        ((c) => () => {
          Zb(c);
        })(this)
      )
    );
    this.wa = ((8 | this.wa) << 24) >> 24;
    this.ze.onkeydown = ((c) => (d) => {
      $b(c.ih, d.keyCode | 0);
      zb(xb().jb, B(new C(), [32, 37, 38, 39, 40])).F(d.keyCode | 0) &&
        d.preventDefault();
      ac(c, Ob());
    })(this);
    this.ze.onkeyup = ((c) => (d) => {
      bc(c.ih, d.keyCode | 0);
      zb(xb().jb, B(new C(), [32, 37, 38, 39, 40])).F(d.keyCode | 0) &&
        d.preventDefault();
    })(this);
    this.ze.onfocus = ((c) => () => {
      c.hh = !0;
      c.wa = ((32 | c.wa) << 24) >> 24;
    })(this);
    this.ze.onblur = ((c) => () => {
      c.hh = !1;
      c.wa = ((32 | c.wa) << 24) >> 24;
    })(this);
    this.$c = this.ze.getContext("2d");
    this.wa = ((16 | this.wa) << 24) >> 24;
    this.hh = !1;
    this.wa = ((32 | this.wa) << 24) >> 24;
    this.ri = !1;
    this.wa = ((64 | this.wa) << 24) >> 24;
    this.ti = Ob();
    this.wa = ((128 | this.wa) << 24) >> 24;
    this.$c.font = "12pt Arial";
    this.$c.textAlign = "center";
  }
  Wb.prototype = new q();
  Wb.prototype.constructor = Wb;
  function cc(a) {
    if (0 === ((8 & a.wa) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 62"
      );
    return a.si;
  }
  function dc(a, b) {
    a.si = b;
    a.wa = ((8 | a.wa) << 24) >> 24;
  }
  function ec(a) {
    if (0 === ((128 & a.wa) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 105"
      );
    return a.ti;
  }
  function ac(a, b) {
    a.ti = b;
    a.wa = ((128 | a.wa) << 24) >> 24;
  }
  function Zb(a) {
    ac(a, Rb(cc(a)));
    var b = ec(a);
    b = "MESSAGE " + (b.f() ? "missing message?!" : b.Fg());
    fc(b + "\n");
    dc(
      a,
      a.kk.ad(
        a.ge,
        new H(
          ((c) => () => {
            Zb(c);
          })(a)
        )
      )
    );
  }
  Wb.prototype.$classData = v({ cm: 0 }, !1, "example.GameHolder", {
    cm: 1,
    b: 1,
  });
  function gc(a, b, c, d) {
    this.Vb = a;
    this.rc = b;
    this.md = c;
    this.je = d;
  }
  gc.prototype = new q();
  gc.prototype.constructor = gc;
  gc.prototype.$classData = v({ dm: 0 }, !1, "example.Paddle", { dm: 1, b: 1 });
  function hc() {}
  hc.prototype = new q();
  hc.prototype.constructor = hc;
  function ic(a) {
    jc || (jc = new kc());
    var b = new Wb("asteroids", jc);
    lc || (lc = new mc());
    var c = new Wb("astrolander", lc);
    nc || (nc = new oc());
    var d = new Wb("snake", nc);
    pc || (pc = new qc());
    var f = new Wb("pong", pc);
    rc || (rc = new sc());
    var g = new Wb("bricks", rc);
    tc || (tc = new uc());
    var h = new Wb("tetris", tc);
    b = zb(xb().jb, B(new C(), [b, c, d, f, g, h]));
    c = vc;
    wc || (wc = new xc());
    c(
      wc,
      new H(
        ((k, l) => () => {
          l.O(
            new E(
              (() => (p) => {
                if (0 === ((64 & p.wa) << 24) >> 24)
                  throw new F(
                    "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 84"
                  );
                p.ri ||
                  (cc(p).cd(p.$c),
                  (p.ri = !0),
                  (p.wa = ((64 | p.wa) << 24) >> 24));
                if (0 === ((32 & p.wa) << 24) >> 24)
                  throw new F(
                    "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 83"
                  );
                if (p.hh && ec(p).f()) {
                  cc(p).cd(p.$c);
                  var u = cc(p);
                  yc();
                  p = p.ih;
                  zc();
                  p = Ac(I(), p);
                  u.pg(Bc(p));
                } else if (!ec(p).f()) {
                  u = p.$c;
                  var y = Lb(G());
                  u.fillStyle = y;
                  p.$c.fillRect(0, 0, p.ge.h, p.ge.g);
                  u = p.$c;
                  y = Eb(G());
                  u.fillStyle = y;
                  p.$c.font = "20pt Arial";
                  p.$c.textAlign = "center";
                  p.$c.fillText(ec(p).Fg(), p.ge.h / 2, p.ge.g / 2);
                  p.$c.font = "14pt Arial";
                  p.$c.fillText(
                    "Press any key to continue",
                    p.ge.h / 2,
                    p.ge.g / 2 + 30
                  );
                }
              })(k)
            )
          );
        })(a, b)
      )
    );
  }
  hc.prototype.main = function () {
    ic(this);
  };
  hc.prototype.$classData = v({ hm: 0 }, !1, "example.ScalaJSExample$", {
    hm: 1,
    b: 1,
  });
  var Cc;
  function Dc() {
    Cc || (Cc = new hc());
    return Cc;
  }
  var Ec = v({ kh: 0 }, !0, "example.Spot", { kh: 1, b: 1 });
  function Hc(a, b) {
    this.ef = b;
    if (null === a) throw nb(null);
  }
  Hc.prototype = new q();
  Hc.prototype.constructor = Hc;
  var Ic = v({ nm: 0 }, !1, "example.Tetris$Position", { nm: 1, b: 1 });
  Hc.prototype.$classData = Ic;
  function Jc() {}
  Jc.prototype = new q();
  Jc.prototype.constructor = Jc;
  Jc.prototype.$classData = v({ om: 0 }, !1, "example.Tetris$Position$", {
    om: 1,
    b: 1,
  });
  function cb(a) {
    this.Cc = a;
  }
  cb.prototype = new q();
  cb.prototype.constructor = cb;
  cb.prototype.z = function () {
    return (
      (this.Cc.isInterface
        ? "interface "
        : this.Cc.isPrimitive
        ? ""
        : "class ") + this.Cc.name
    );
  };
  function Kc(a) {
    return a.Cc.getComponentType();
  }
  function Lc(a, b) {
    return a.Cc.newArrayOfThisClass(b);
  }
  cb.prototype.$classData = v({ Km: 0 }, !1, "java.lang.Class", {
    Km: 1,
    b: 1,
  });
  function Mc() {
    this.Gk = this.rh = this.Hg = null;
    this.Vi = !1;
    this.Ik = this.Hk = 0;
    Nc = this;
    this.Hg = new ArrayBuffer(8);
    this.rh = new Int32Array(this.Hg, 0, 2);
    new Float32Array(this.Hg, 0, 2);
    this.Gk = new Float64Array(this.Hg, 0, 1);
    this.rh[0] = 16909060;
    this.Hk = (this.Vi = 1 === (new Int8Array(this.Hg, 0, 8)[0] | 0)) ? 0 : 1;
    this.Ik = this.Vi ? 1 : 0;
  }
  Mc.prototype = new q();
  Mc.prototype.constructor = Mc;
  function Oc(a, b) {
    var c = b | 0;
    if (c === b && -Infinity !== 1 / b) return c;
    a.Gk[0] = b;
    a = new n(a.rh[a.Ik] | 0, a.rh[a.Hk] | 0);
    return a.Fa ^ a.Ea;
  }
  Mc.prototype.$classData = v({ Mm: 0 }, !1, "java.lang.FloatingPointBits$", {
    Mm: 1,
    b: 1,
  });
  var Nc;
  function Pc() {
    Nc || (Nc = new Mc());
    return Nc;
  }
  function Qc() {
    this.Kk = null;
    Rc = this;
    this.Kk = new Sc(!1);
    new Sc(!0);
  }
  Qc.prototype = new q();
  Qc.prototype.constructor = Qc;
  Qc.prototype.$classData = v({ an: 0 }, !1, "java.lang.System$Streams$", {
    an: 1,
    b: 1,
  });
  var Rc;
  function Tc() {
    Rc || (Rc = new Qc());
    return Rc;
  }
  function Uc() {
    this.Lk = this.Xi = null;
    Vc = this;
    var a = {
      "java.version": "1.8",
      "java.vm.specification.version": "1.8",
      "java.vm.specification.vendor": "Oracle Corporation",
      "java.vm.specification.name": "Java Virtual Machine Specification",
      "java.vm.name": "Scala.js",
    };
    a["java.vm.version"] = aa.linkerVersion;
    a["java.specification.version"] = "1.8";
    a["java.specification.vendor"] = "Oracle Corporation";
    a["java.specification.name"] = "Java Platform API Specification";
    a["file.separator"] = "/";
    a["path.separator"] = ":";
    a["line.separator"] = "\n";
    this.Xi = a;
    this.Lk = null;
  }
  Uc.prototype = new q();
  Uc.prototype.constructor = Uc;
  function Wc(a, b, c) {
    null !== a.Xi
      ? (Xc || (Xc = new Yc()),
        (a = a.Xi),
        Zc || (Zc = new $c()),
        (b = Zc.Nk.call(a, b) ? a[b] : c))
      : (b = Wc(a.Lk, b, c));
    return b;
  }
  Uc.prototype.$classData = v(
    { bn: 0 },
    !1,
    "java.lang.System$SystemProperties$",
    { bn: 1, b: 1 }
  );
  var Vc;
  function ad() {
    Vc || (Vc = new Uc());
    return Vc;
  }
  function Yc() {}
  Yc.prototype = new q();
  Yc.prototype.constructor = Yc;
  Yc.prototype.$classData = v({ gn: 0 }, !1, "java.lang.Utils$", {
    gn: 1,
    b: 1,
  });
  var Xc;
  function $c() {
    this.Nk = null;
    Zc = this;
    this.Nk = Object.prototype.hasOwnProperty;
  }
  $c.prototype = new q();
  $c.prototype.constructor = $c;
  $c.prototype.$classData = v({ hn: 0 }, !1, "java.lang.Utils$Cache$", {
    hn: 1,
    b: 1,
  });
  var Zc,
    ta = v(
      { Ok: 0 },
      !1,
      "java.lang.Void",
      { Ok: 1, b: 1 },
      (a) => void 0 === a
    );
  function bd() {}
  bd.prototype = new q();
  bd.prototype.constructor = bd;
  bd.prototype.$classData = v({ jn: 0 }, !1, "java.lang.reflect.Array$", {
    jn: 1,
    b: 1,
  });
  var cd;
  function dd() {
    cd || (cd = new bd());
  }
  function ed() {}
  ed.prototype = new q();
  ed.prototype.constructor = ed;
  function fd(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = f.Fa;
      f = f.Ea;
      var h = c.a[d],
        k = h.Fa;
      h = h.Ea;
      if (!L(M(), new n(g, f), new n(k, h))) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function gd(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!L(M(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function hd(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!L(M(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function id(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!L(M(), Pa(f), Pa(g))) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function jd(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!L(M(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function kd(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!L(M(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function ld(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!L(M(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function md(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!L(M(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function nd(a, b, c) {
    a = od(pd(), Kc(ja(b)));
    if (0 > c) throw new qd();
    var d = b.a.length;
    d = c < d ? c : d;
    c = a.Dc(c);
    b.I(0, c, 0, d);
    return c;
  }
  function N(a, b, c, d) {
    a = od(pd(), Kc(ja(b)));
    if (c > d) throw rd(c + " \x3e " + d);
    d = (d - c) | 0;
    var f = (b.a.length - c) | 0;
    f = d < f ? d : f;
    a = a.Dc(d);
    b.I(c, a, 0, f);
    return a;
  }
  ed.prototype.$classData = v({ kn: 0 }, !1, "java.util.Arrays$", {
    kn: 1,
    b: 1,
  });
  var sd;
  function O() {
    sd || (sd = new ed());
    return sd;
  }
  function td() {
    this.tk = this.uk = null;
    this.Ae = 0;
  }
  td.prototype = new q();
  td.prototype.constructor = td;
  function Xb() {
    ud || (ud = new td());
    var a = ud;
    0 === (67108864 & a.Ae) &&
      0 === (67108864 & a.Ae) &&
      (0 === (33554432 & a.Ae) &&
        0 === (33554432 & a.Ae) &&
        ((a.uk = window), (a.Ae |= 33554432)),
      (a.tk = a.uk.document),
      (a.Ae |= 67108864));
    return a.tk;
  }
  td.prototype.$classData = v({ tm: 0 }, !1, "org.scalajs.dom.package$", {
    tm: 1,
    b: 1,
  });
  var ud;
  function vd() {
    this.Rk = this.dj = null;
    wd = this;
    new Sa(0);
    new Ua(0);
    new Ta(0);
    new Ya(0);
    new Xa(0);
    this.dj = new t(0);
    new Wa(0);
    new Va(0);
    this.Rk = new r(0);
  }
  vd.prototype = new q();
  vd.prototype.constructor = vd;
  vd.prototype.$classData = v({ un: 0 }, !1, "scala.Array$EmptyArrays$", {
    un: 1,
    b: 1,
  });
  var wd;
  function xd() {
    wd || (wd = new vd());
    return wd;
  }
  function yd() {}
  yd.prototype = new q();
  yd.prototype.constructor = yd;
  function zd() {}
  zd.prototype = yd.prototype;
  function Ad() {}
  Ad.prototype = new q();
  Ad.prototype.constructor = Ad;
  function Bd(a, b) {
    a = (b + ~(b << 9)) | 0;
    a ^= (a >>> 14) | 0;
    a = (a + (a << 4)) | 0;
    return a ^ ((a >>> 10) | 0);
  }
  Ad.prototype.$classData = v({ Bo: 0 }, !1, "scala.collection.Hashing$", {
    Bo: 1,
    b: 1,
  });
  var Cd;
  function Dd() {
    Cd || (Cd = new Ad());
    return Cd;
  }
  function Ed(a, b) {
    for (a = a.i(); a.m(); ) b.l(a.k());
  }
  function Fd(a, b) {
    var c = !1;
    for (a = a.i(); !c && a.m(); ) c = !!b.l(a.k());
    return c;
  }
  function Kd(a, b) {
    a = a.i();
    if (!a.m()) throw Ld("empty.reduceLeft");
    for (var c = !0, d = null; a.m(); ) {
      var f = a.k();
      c ? ((d = f), (c = !1)) : (d = b.ad(d, f));
    }
    return d;
  }
  function Md(a, b, c, d) {
    a = a.i();
    var f = c,
      g = (Nd(Od(), b) - c) | 0;
    for (d = (c + (d < g ? d : g)) | 0; f < d && a.m(); )
      Pd(Od(), b, f, a.k()), (f = (1 + f) | 0);
    return (f - c) | 0;
  }
  function Qd(a) {
    var b = Rd;
    return a.f()
      ? 0
      : a.Fe(new Sd((() => (c, d) => ((c | 0) + (d | 0)) | 0)(a, b)));
  }
  function Td(a, b, c) {
    return a.f() ? "" + b + ")" : a.le(Ud(), b, c, ")").Tb.o;
  }
  function Vd(a, b, c, d, f) {
    var g = b.Tb;
    0 !== (c.length | 0) && (g.o = "" + g.o + c);
    a = a.i();
    if (a.m())
      for (c = a.k(), g.o = "" + g.o + c; a.m(); )
        (g.o = "" + g.o + d), (c = a.k()), (g.o = "" + g.o + c);
    0 !== (f.length | 0) && (g.o = "" + g.o + f);
    return b;
  }
  function Wd(a, b) {
    this.Xo = a;
    this.Gh = b;
  }
  Wd.prototype = new q();
  Wd.prototype.constructor = Wd;
  Wd.prototype.$classData = v(
    { Wo: 0 },
    !1,
    "scala.collection.Iterator$ConcatIteratorCell",
    { Wo: 1, b: 1 }
  );
  function Xd(a, b) {
    this.dl = null;
    this.oj = !1;
    this.cl = b;
  }
  Xd.prototype = new q();
  Xd.prototype.constructor = Xd;
  function Yd(a) {
    a.oj || (a.oj || ((a.dl = Zd(a.cl)), (a.oj = !0)), (a.cl = null));
    return a.dl;
  }
  Xd.prototype.$classData = v(
    { Zo: 0 },
    !1,
    "scala.collection.LinearSeqIterator$LazyCell",
    { Zo: 1, b: 1 }
  );
  function $d(a, b) {
    null === a.ae &&
      ((a.ae = new t(P().Ej << 1)), (a.ag = new (x(ae).G)(P().Ej)));
    a.Gc = (1 + a.Gc) | 0;
    var c = a.Gc << 1,
      d = (1 + (a.Gc << 1)) | 0;
    a.ag.a[a.Gc] = b;
    a.ae.a[c] = 0;
    a.ae.a[d] = b.Pk();
  }
  function be(a, b) {
    a.lc = 0;
    a.tf = 0;
    a.Gc = -1;
    b.Ti() && $d(a, b);
    b.Ui() && ((a.qe = b), (a.lc = 0), (a.tf = b.bj()));
  }
  function ce() {
    this.tf = this.lc = 0;
    this.qe = null;
    this.Gc = 0;
    this.ag = this.ae = null;
  }
  ce.prototype = new q();
  ce.prototype.constructor = ce;
  function de() {}
  de.prototype = ce.prototype;
  ce.prototype.m = function () {
    var a;
    if (!(a = this.lc < this.tf))
      a: {
        for (; 0 <= this.Gc; ) {
          a = this.Gc << 1;
          var b = this.ae.a[a];
          if (b < this.ae.a[(1 + (this.Gc << 1)) | 0]) {
            var c = this.ae;
            c.a[a] = (1 + c.a[a]) | 0;
            a = this.ag.a[this.Gc].Yd(b);
            a.Ti() && $d(this, a);
            if (a.Ui()) {
              this.qe = a;
              this.lc = 0;
              this.tf = a.bj();
              a = !0;
              break a;
            }
          } else this.Gc = (-1 + this.Gc) | 0;
        }
        a = !1;
      }
    return a;
  };
  function ee() {
    this.nl = 0;
    fe = this;
    try {
      var a = Wc(
        ad(),
        "scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength",
        "64"
      );
      var b = ge(he(), a);
    } catch (c) {
      throw c;
    }
    this.nl = b;
  }
  ee.prototype = new q();
  ee.prototype.constructor = ee;
  ee.prototype.$classData = v(
    { Ep: 0 },
    !1,
    "scala.collection.immutable.IndexedSeqDefaults$",
    { Ep: 1, b: 1 }
  );
  var fe;
  function ie() {
    this.zj = null;
  }
  ie.prototype = new q();
  ie.prototype.constructor = ie;
  function je(a) {
    a = a.zj;
    if (null === a) throw new ke("uninitialized");
    return Zd(a);
  }
  function le(a, b) {
    if (null !== a.zj) throw new ke("already initialized");
    a.zj = b;
  }
  ie.prototype.$classData = v(
    { Jp: 0 },
    !1,
    "scala.collection.immutable.LazyList$LazyBuilder$DeferredState",
    { Jp: 1, b: 1 }
  );
  function me(a, b) {
    var c = new ne();
    a = b + " is out of bounds (min 0, max " + ((-1 + Nd(Od(), a)) | 0);
    oe(c, a);
    return c;
  }
  function pe() {}
  pe.prototype = new q();
  pe.prototype.constructor = pe;
  function qe() {}
  qe.prototype = pe.prototype;
  function re(a, b) {
    if (0 > b) throw me(a, b);
    if (b > ((-1 + a.a.length) | 0)) throw me(a, b);
    var c = new t((-1 + a.a.length) | 0);
    a.I(0, c, 0, b);
    a.I((1 + b) | 0, c, b, (-1 + ((a.a.length - b) | 0)) | 0);
    return c;
  }
  function se(a, b, c) {
    if (0 > b) throw me(a, b);
    if (b > a.a.length) throw me(a, b);
    var d = new t((1 + a.a.length) | 0);
    a.I(0, d, 0, b);
    d.a[b] = c;
    a.I(b, d, (1 + b) | 0, (a.a.length - b) | 0);
    return d;
  }
  var ae = v({ Dj: 0 }, !1, "scala.collection.immutable.Node", { Dj: 1, b: 1 });
  pe.prototype.$classData = ae;
  function te() {
    this.Ej = 0;
    ue = this;
    this.Ej = Ja(7);
  }
  te.prototype = new q();
  te.prototype.constructor = te;
  function ve(a, b, c) {
    return 31 & ((b >>> c) | 0);
  }
  function we(a, b) {
    return 1 << b;
  }
  function xe(a, b, c) {
    a = b & ((-1 + c) | 0);
    return ye(he(), a);
  }
  function ze(a, b, c, d) {
    return -1 === b ? c : xe(0, b, d);
  }
  te.prototype.$classData = v(
    { Xp: 0 },
    !1,
    "scala.collection.immutable.Node$",
    { Xp: 1, b: 1 }
  );
  var ue;
  function P() {
    ue || (ue = new te());
    return ue;
  }
  function Ae() {
    this.ig = null;
    Be = this;
    this.ig = new Ce(0, 0, (De(), new r(0)), (Ee(), new t(0)), 0, 0);
  }
  Ae.prototype = new q();
  Ae.prototype.constructor = Ae;
  Ae.prototype.$classData = v(
    { qq: 0 },
    !1,
    "scala.collection.immutable.SetNode$",
    { qq: 1, b: 1 }
  );
  var Be;
  function Fe() {
    Be || (Be = new Ae());
    return Be;
  }
  var Ie = function Ge(a, b, c, d, f) {
    for (;;) {
      if (1 === b) {
        b = c;
        var h = d,
          k = f;
        He(a, 1, 0 === h && k === b.a.length ? b : N(O(), b, h, k));
      } else {
        h = ba(5, (-1 + b) | 0);
        var l = 1 << h;
        k = (d >>> h) | 0;
        h = (f >>> h) | 0;
        d &= (-1 + l) | 0;
        f &= (-1 + l) | 0;
        if (0 === d)
          if (0 === f)
            (f = c),
              He(a, b, 0 === k && h === f.a.length ? f : N(O(), f, k, h));
          else {
            h > k &&
              ((d = c),
              He(a, b, 0 === k && h === d.a.length ? d : N(O(), d, k, h)));
            h = c.a[h];
            b = (-1 + b) | 0;
            c = h;
            d = 0;
            continue;
          }
        else if (h === k) {
          h = c.a[k];
          b = (-1 + b) | 0;
          c = h;
          continue;
        } else if ((Ge(a, (-1 + b) | 0, c.a[k], d, l), 0 === f))
          h > ((1 + k) | 0) &&
            ((f = c),
            (k = (1 + k) | 0),
            He(a, b, 0 === k && h === f.a.length ? f : N(O(), f, k, h)));
        else {
          h > ((1 + k) | 0) &&
            ((d = c),
            (k = (1 + k) | 0),
            He(a, b, 0 === k && h === d.a.length ? d : N(O(), d, k, h)));
          h = c.a[h];
          b = (-1 + b) | 0;
          c = h;
          d = 0;
          continue;
        }
      }
      break;
    }
  };
  function He(a, b, c) {
    b <= a.Jc ? (b = (11 - b) | 0) : ((a.Jc = b), (b = (-1 + b) | 0));
    a.A.a[b] = c;
  }
  var Ke = function Je(a, b) {
      if (null === a.A.a[(-1 + b) | 0])
        if (b === a.Jc)
          (a.A.a[(-1 + b) | 0] = a.A.a[(11 - b) | 0]),
            (a.A.a[(11 - b) | 0] = null);
        else {
          Je(a, (1 + b) | 0);
          var d = a.A.a[(-1 + ((1 + b) | 0)) | 0];
          a.A.a[(-1 + b) | 0] = d.a[0];
          if (1 === d.a.length)
            (a.A.a[(-1 + ((1 + b) | 0)) | 0] = null),
              a.Jc === ((1 + b) | 0) &&
                null === a.A.a[(11 - ((1 + b) | 0)) | 0] &&
                (a.Jc = b);
          else {
            var f = d.a.length;
            a.A.a[(-1 + ((1 + b) | 0)) | 0] = N(O(), d, 1, f);
          }
        }
    },
    Me = function Le(a, b) {
      if (null === a.A.a[(11 - b) | 0])
        if (b === a.Jc)
          (a.A.a[(11 - b) | 0] = a.A.a[(-1 + b) | 0]),
            (a.A.a[(-1 + b) | 0] = null);
        else {
          Le(a, (1 + b) | 0);
          var d = a.A.a[(11 - ((1 + b) | 0)) | 0];
          a.A.a[(11 - b) | 0] = d.a[(-1 + d.a.length) | 0];
          if (1 === d.a.length)
            (a.A.a[(11 - ((1 + b) | 0)) | 0] = null),
              a.Jc === ((1 + b) | 0) &&
                null === a.A.a[(-1 + ((1 + b) | 0)) | 0] &&
                (a.Jc = b);
          else {
            var f = (-1 + d.a.length) | 0;
            a.A.a[(11 - ((1 + b) | 0)) | 0] = N(O(), d, 0, f);
          }
        }
    };
  function Ne(a, b) {
    this.A = null;
    this.Jc = this.lg = this.Sd = 0;
    this.Cl = a;
    this.Bl = b;
    this.A = new (x(x(w)).G)(11);
    this.Jc = this.lg = this.Sd = 0;
  }
  Ne.prototype = new q();
  Ne.prototype.constructor = Ne;
  function Q(a, b, c) {
    var d = ba(c.a.length, 1 << ba(5, (-1 + b) | 0)),
      f = (a.Cl - a.lg) | 0;
    f = 0 < f ? f : 0;
    var g = (a.Bl - a.lg) | 0;
    g = g < d ? g : d;
    g > f && (Ie(a, b, c, f, g), (a.Sd = (a.Sd + ((g - f) | 0)) | 0));
    a.lg = (a.lg + d) | 0;
  }
  Ne.prototype.Id = function () {
    if (32 >= this.Sd) {
      if (0 === this.Sd) return Oe();
      var a = this.A.a[0],
        b = this.A.a[10];
      if (null !== a)
        if (null !== b) {
          var c = (a.a.length + b.a.length) | 0,
            d = nd(O(), a, c);
          b.I(0, d, a.a.length, b.a.length);
          var f = d;
        } else f = a;
      else if (null !== b) f = b;
      else {
        var g = this.A.a[1];
        f = null !== g ? g.a[0] : this.A.a[9].a[0];
      }
      return new Pe(f);
    }
    Ke(this, 1);
    Me(this, 1);
    var h = this.Jc;
    if (6 > h) {
      var k = this.A.a[(-1 + this.Jc) | 0],
        l = this.A.a[(11 - this.Jc) | 0];
      if (null !== k && null !== l)
        if (30 >= ((k.a.length + l.a.length) | 0)) {
          var p = this.A,
            u = this.Jc,
            y = (k.a.length + l.a.length) | 0,
            D = nd(O(), k, y);
          l.I(0, D, k.a.length, l.a.length);
          p.a[(-1 + u) | 0] = D;
          this.A.a[(11 - this.Jc) | 0] = null;
        } else h = (1 + h) | 0;
      else 30 < (null !== k ? k : l).a.length && (h = (1 + h) | 0);
    }
    var K = this.A.a[0],
      J = this.A.a[10],
      Z = K.a.length,
      wa = h;
    switch (wa) {
      case 2:
        var Ha = R().Q,
          ka = this.A.a[1];
        if (null !== ka) var Ka = ka;
        else {
          var qa = this.A.a[9];
          Ka = null !== qa ? qa : Ha;
        }
        var Gd = new Ue(K, Z, Ka, J, this.Sd);
        break;
      case 3:
        var Ug = R().Q,
          Vg = this.A.a[1],
          Nj = null !== Vg ? Vg : Ug,
          Oj = R().fb,
          Pj = this.A.a[2];
        if (null !== Pj) var Wg = Pj;
        else {
          var Qe = this.A.a[8];
          Wg = null !== Qe ? Qe : Oj;
        }
        var Re = Wg,
          rm = R().Q,
          Qj = this.A.a[9];
        Gd = new Ve(
          K,
          Z,
          Nj,
          (Z + (Nj.a.length << 5)) | 0,
          Re,
          null !== Qj ? Qj : rm,
          J,
          this.Sd
        );
        break;
      case 4:
        var Rj = R().Q,
          Sj = this.A.a[1],
          Xg = null !== Sj ? Sj : Rj,
          Tj = R().fb,
          Uj = this.A.a[2],
          Yg = null !== Uj ? Uj : Tj,
          Vj = R().wc,
          Wj = this.A.a[3];
        if (null !== Wj) var Xj = Wj;
        else {
          var Yj = this.A.a[7];
          Xj = null !== Yj ? Yj : Vj;
        }
        var sm = Xj,
          Zg = R().fb,
          $g = this.A.a[8],
          tm = null !== $g ? $g : Zg,
          Zj = R().Q,
          ah = this.A.a[9],
          ak = (Z + (Xg.a.length << 5)) | 0;
        Gd = new We(
          K,
          Z,
          Xg,
          ak,
          Yg,
          (ak + (Yg.a.length << 10)) | 0,
          sm,
          tm,
          null !== ah ? ah : Zj,
          J,
          this.Sd
        );
        break;
      case 5:
        var bk = R().Q,
          Se = this.A.a[1],
          Hd = null !== Se ? Se : bk,
          Id = R().fb,
          ck = this.A.a[2],
          dk = null !== ck ? ck : Id,
          ek = R().wc,
          fk = this.A.a[3],
          bh = null !== fk ? fk : ek,
          gk = R().Re,
          hk = this.A.a[4];
        if (null !== hk) var ch = hk;
        else {
          var dh = this.A.a[6];
          ch = null !== dh ? dh : gk;
        }
        var um = ch,
          ik = R().wc,
          eh = this.A.a[7],
          vm = null !== eh ? eh : ik,
          wm = R().fb,
          jk = this.A.a[8],
          xm = null !== jk ? jk : wm,
          ym = R().Q,
          kk = this.A.a[9],
          Te = (Z + (Hd.a.length << 5)) | 0,
          fh = (Te + (dk.a.length << 10)) | 0;
        Gd = new Xe(
          K,
          Z,
          Hd,
          Te,
          dk,
          fh,
          bh,
          (fh + (bh.a.length << 15)) | 0,
          um,
          vm,
          xm,
          null !== kk ? kk : ym,
          J,
          this.Sd
        );
        break;
      case 6:
        var zm = R().Q,
          gh = this.A.a[1],
          hh = null !== gh ? gh : zm,
          lk = R().fb,
          mk = this.A.a[2],
          ih = null !== mk ? mk : lk,
          jh = R().wc,
          Jd = this.A.a[3],
          Fc = null !== Jd ? Jd : jh,
          Gc = R().Re,
          nk = this.A.a[4],
          ok = null !== nk ? nk : Gc,
          pk = R().Sh,
          qk = this.A.a[5];
        if (null !== qk) var kh = qk;
        else {
          var lh = this.A.a[5];
          kh = null !== lh ? lh : pk;
        }
        var Am = kh,
          rk = R().Re,
          mh = this.A.a[6],
          Bm = null !== mh ? mh : rk,
          sk = R().wc,
          nh = this.A.a[7],
          Cm = null !== nh ? nh : sk,
          tk = R().fb,
          oh = this.A.a[8],
          Dm = null !== oh ? oh : tk,
          Em = R().Q,
          uk = this.A.a[9],
          vk = (Z + (hh.a.length << 5)) | 0,
          wk = (vk + (ih.a.length << 10)) | 0,
          xk = (wk + (Fc.a.length << 15)) | 0;
        Gd = new S(
          K,
          Z,
          hh,
          vk,
          ih,
          wk,
          Fc,
          xk,
          ok,
          (xk + (ok.a.length << 20)) | 0,
          Am,
          Bm,
          Cm,
          Dm,
          null !== uk ? uk : Em,
          J,
          this.Sd
        );
        break;
      default:
        throw new T(wa);
    }
    return Gd;
  };
  Ne.prototype.z = function () {
    return (
      "VectorSliceBuilder(lo\x3d" +
      this.Cl +
      ", hi\x3d" +
      this.Bl +
      ", len\x3d" +
      this.Sd +
      ", pos\x3d" +
      this.lg +
      ", maxDim\x3d" +
      this.Jc +
      ")"
    );
  };
  Ne.prototype.$classData = v(
    { Hq: 0 },
    !1,
    "scala.collection.immutable.VectorSliceBuilder",
    { Hq: 1, b: 1 }
  );
  function Ye() {
    this.Sh = this.Re = this.wc = this.fb = this.Q = this.Hj = null;
    Ze = this;
    this.Hj = new r(0);
    this.Q = new (x(x(w)).G)(0);
    this.fb = new (x(x(x(w))).G)(0);
    this.wc = new (x(x(x(x(w)))).G)(0);
    this.Re = new (x(x(x(x(x(w))))).G)(0);
    this.Sh = new (x(x(x(x(x(x(w)))))).G)(0);
  }
  Ye.prototype = new q();
  Ye.prototype.constructor = Ye;
  function $e(a, b, c) {
    a = b.a.length;
    var d = new r((1 + a) | 0);
    b.I(0, d, 0, a);
    d.a[a] = c;
    return d;
  }
  function U(a, b, c) {
    a = (1 + b.a.length) | 0;
    b = nd(O(), b, a);
    b.a[(-1 + b.a.length) | 0] = c;
    return b;
  }
  function af(a, b, c) {
    a = new r((1 + c.a.length) | 0);
    c.I(0, a, 1, c.a.length);
    a.a[0] = b;
    return a;
  }
  function V(a, b, c) {
    a = Kc(ja(c));
    var d = (1 + c.a.length) | 0;
    dd();
    a = Lc(a, [d]);
    c.I(0, a, 1, c.a.length);
    a.a[0] = b;
    return a;
  }
  function bf(a, b, c, d) {
    var f = 0,
      g = c.a.length;
    if (0 === b) for (; f < g; ) d.l(c.a[f]), (f = (1 + f) | 0);
    else for (b = (-1 + b) | 0; f < g; ) bf(a, b, c.a[f], d), (f = (1 + f) | 0);
  }
  function cf(a, b, c) {
    for (var d = 0; d < b.a.length; ) {
      var f = b.a[d];
      a = c.l(f);
      if (!Object.is(f, a)) {
        f = a;
        a = new r(b.a.length);
        0 < d && b.I(0, a, 0, d);
        a.a[d] = f;
        for (d = (1 + d) | 0; d < b.a.length; )
          (a.a[d] = c.l(b.a[d])), (d = (1 + d) | 0);
        return a;
      }
      d = (1 + d) | 0;
    }
    return b;
  }
  function df(a, b, c, d) {
    if (1 === b) return cf(0, c, d);
    for (var f = 0; f < c.a.length; ) {
      var g = c.a[f],
        h = df(a, (-1 + b) | 0, g, d);
      if (g !== h) {
        g = Kc(ja(c));
        var k = c.a.length;
        dd();
        g = Lc(g, [k]);
        0 < f && c.I(0, g, 0, f);
        g.a[f] = h;
        for (h = (1 + f) | 0; h < c.a.length; )
          (g.a[h] = df(a, (-1 + b) | 0, c.a[h], d)), (h = (1 + h) | 0);
        return g;
      }
      f = (1 + f) | 0;
    }
    return c;
  }
  function ef(a, b, c) {
    if (ff(c))
      if (0 >= c.Pj((32 - b.a.length) | 0))
        switch (((a = c.Xa()), a)) {
          case 0:
            return null;
          case 1:
            return U(0, b, c.u());
          default:
            return (
              (a = (b.a.length + a) | 0),
              (a = nd(O(), b, a)),
              c.Ob(a, b.a.length, 2147483647),
              a
            );
        }
      else return null;
    else
      return (
        (a = c.v()),
        0 < a && a <= ((32 - b.a.length) | 0)
          ? ((a = (b.a.length + a) | 0),
            (a = nd(O(), b, a)),
            c.i().Ob(a, b.a.length, 2147483647),
            a)
          : null
      );
  }
  Ye.prototype.$classData = v(
    { Iq: 0 },
    !1,
    "scala.collection.immutable.VectorStatics$",
    { Iq: 1, b: 1 }
  );
  var Ze;
  function R() {
    Ze || (Ze = new Ye());
    return Ze;
  }
  function gf(a, b, c) {
    this.af = a;
    this.Td = b;
    this.pb = c;
  }
  gf.prototype = new q();
  gf.prototype.constructor = gf;
  gf.prototype.O = function (a) {
    for (var b = this; ; )
      if ((a.l(b.af), null !== b.pb)) b = b.pb;
      else break;
  };
  gf.prototype.z = function () {
    return "Node(" + this.af + ", " + this.Td + ") -\x3e " + this.pb;
  };
  var hf = v({ mr: 0 }, !1, "scala.collection.mutable.HashSet$Node", {
    mr: 1,
    b: 1,
  });
  gf.prototype.$classData = hf;
  function jf() {}
  jf.prototype = new q();
  jf.prototype.constructor = jf;
  jf.prototype.$classData = v(
    { qr: 0 },
    !1,
    "scala.collection.mutable.MutationTracker$",
    { qr: 1, b: 1 }
  );
  var kf;
  function lf() {}
  lf.prototype = new q();
  lf.prototype.constructor = lf;
  lf.prototype.$classData = v(
    { tp: 0 },
    !1,
    "scala.collection.package$$colon$plus$",
    { tp: 1, b: 1 }
  );
  var mf;
  function nf() {}
  nf.prototype = new q();
  nf.prototype.constructor = nf;
  nf.prototype.$classData = v(
    { up: 0 },
    !1,
    "scala.collection.package$$plus$colon$",
    { up: 1, b: 1 }
  );
  var of;
  function pf() {}
  pf.prototype = new q();
  pf.prototype.constructor = pf;
  pf.prototype.$classData = v({ In: 0 }, !1, "scala.math.Ordered$", {
    In: 1,
    b: 1,
  });
  var qf;
  function rf() {
    this.gj = this.jb = null;
    sf = this;
    tf || (tf = new uf());
    tf || (tf = new uf());
    vf || (vf = new wf());
    this.jb = vf;
    xf();
    W();
    zc();
    this.gj = I();
    yf || (yf = new zf());
    of || (of = new nf());
    mf || (mf = new lf());
    Af();
    Bf();
    Cf();
    Df || (Df = new Ef());
    Ff();
    Gf || (Gf = new Hf());
    If || (If = new Jf());
    Kf || (Kf = new Lf());
    Mf || (Mf = new Nf());
    qf || (qf = new pf());
    Of || (Of = new Pf());
    Qf || (Qf = new Rf());
    Sf || (Sf = new Tf());
    Uf || (Uf = new Vf());
  }
  rf.prototype = new q();
  rf.prototype.constructor = rf;
  rf.prototype.$classData = v({ Kn: 0 }, !1, "scala.package$", { Kn: 1, b: 1 });
  var sf;
  function xb() {
    sf || (sf = new rf());
    return sf;
  }
  function Wf() {}
  Wf.prototype = new q();
  Wf.prototype.constructor = Wf;
  function L(a, b, c) {
    if (b === c) c = !0;
    else if (Xf(b))
      a: if (Xf(c)) c = Yf(b, c);
      else {
        if (c instanceof fa) {
          if ("number" === typeof b) {
            c = +b === za(c);
            break a;
          }
          if (b instanceof n) {
            a = Qa(b);
            b = a.Ea;
            c = za(c);
            c = a.Fa === c && b === c >> 31;
            break a;
          }
        }
        c = null === b ? null === c : ya(b, c);
      }
    else c = b instanceof fa ? Zf(b, c) : null === b ? null === c : ya(b, c);
    return c;
  }
  function Yf(a, b) {
    if ("number" === typeof a) {
      a = +a;
      if ("number" === typeof b) return a === +b;
      if (b instanceof n) {
        var c = Qa(b);
        b = c.Fa;
        c = c.Ea;
        return a === $f(ag(), b, c);
      }
      return !1;
    }
    if (a instanceof n) {
      c = Qa(a);
      a = c.Fa;
      c = c.Ea;
      if (b instanceof n) {
        b = Qa(b);
        var d = b.Ea;
        return a === b.Fa && c === d;
      }
      return "number" === typeof b ? ((b = +b), $f(ag(), a, c) === b) : !1;
    }
    return null === a ? null === b : ya(a, b);
  }
  function Zf(a, b) {
    if (b instanceof fa) return za(a) === za(b);
    if (Xf(b)) {
      if ("number" === typeof b) return +b === za(a);
      if (b instanceof n) {
        b = Qa(b);
        var c = b.Ea;
        a = za(a);
        return b.Fa === a && c === a >> 31;
      }
      return null === b ? null === a : ya(b, a);
    }
    return null === a && null === b;
  }
  Wf.prototype.$classData = v({ Mr: 0 }, !1, "scala.runtime.BoxesRunTime$", {
    Mr: 1,
    b: 1,
  });
  var bg;
  function M() {
    bg || (bg = new Wf());
    return bg;
  }
  var cg = v({ Pr: 0 }, !1, "scala.runtime.Null$", { Pr: 1, b: 1 });
  function dg() {}
  dg.prototype = new q();
  dg.prototype.constructor = dg;
  function eg(a, b, c) {
    if (
      b instanceof r ||
      b instanceof t ||
      b instanceof Ya ||
      b instanceof Wa ||
      b instanceof Xa
    )
      return b.a[c];
    if (b instanceof Ta) return Pa(b.a[c]);
    if (b instanceof Ua || b instanceof Va || b instanceof Sa) return b.a[c];
    if (null === b) throw new fg();
    throw new T(b);
  }
  function Pd(a, b, c, d) {
    if (b instanceof r) b.a[c] = d;
    else if (b instanceof t) b.a[c] = d | 0;
    else if (b instanceof Ya) b.a[c] = +d;
    else if (b instanceof Wa) b.a[c] = Qa(d);
    else if (b instanceof Xa) b.a[c] = +d;
    else if (b instanceof Ta) b.a[c] = za(d);
    else if (b instanceof Ua) b.a[c] = d | 0;
    else if (b instanceof Va) b.a[c] = d | 0;
    else if (b instanceof Sa) b.a[c] = !!d;
    else {
      if (null === b) throw new fg();
      throw new T(b);
    }
  }
  function Nd(a, b) {
    dd();
    if (
      b instanceof r ||
      b instanceof Sa ||
      b instanceof Ta ||
      b instanceof Ua ||
      b instanceof Va ||
      b instanceof t ||
      b instanceof Wa ||
      b instanceof Xa ||
      b instanceof Ya
    )
      a = b.a.length;
    else throw rd("argument type mismatch");
    return a;
  }
  function gg(a) {
    Od();
    return Td(new hg(a), a.ib() + "(", ",");
  }
  dg.prototype.$classData = v({ Rr: 0 }, !1, "scala.runtime.ScalaRunTime$", {
    Rr: 1,
    b: 1,
  });
  var ig;
  function Od() {
    ig || (ig = new dg());
    return ig;
  }
  function jg() {}
  jg.prototype = new q();
  jg.prototype.constructor = jg;
  jg.prototype.p = function (a, b) {
    a = this.th(a, b);
    return (-430675100 + ba(5, (a << 13) | (a >>> 19) | 0)) | 0;
  };
  jg.prototype.th = function (a, b) {
    b = ba(-862048943, b);
    b = ba(461845907, (b << 15) | (b >>> 17) | 0);
    return a ^ b;
  };
  jg.prototype.L = function (a, b) {
    a ^= b;
    a = ba(-2048144789, a ^ ((a >>> 16) | 0));
    a = ba(-1028477387, a ^ ((a >>> 13) | 0));
    return a ^ ((a >>> 16) | 0);
  };
  function kg(a, b) {
    a = b.Fa;
    b = b.Ea;
    return b === a >> 31 ? a : a ^ b;
  }
  function lg(a, b) {
    a = Ja(b);
    if (a === b) return a;
    a = ag();
    if (-9223372036854775808 > b) {
      a.Na = -2147483648;
      var c = 0;
    } else if (0x7fffffffffffffff <= b) (a.Na = 2147483647), (c = -1);
    else {
      c = b | 0;
      var d = (b / 4294967296) | 0;
      a.Na = 0 > b && 0 !== c ? (-1 + d) | 0 : d;
    }
    a = a.Na;
    return $f(ag(), c, a) === b ? c ^ a : Oc(Pc(), b);
  }
  function mg(a, b) {
    return null === b
      ? 0
      : "number" === typeof b
      ? lg(0, +b)
      : b instanceof n
      ? ((a = Qa(b)), kg(0, new n(a.Fa, a.Ea)))
      : Ba(b);
  }
  function ng(a, b) {
    throw og(new pg(), "" + b);
  }
  jg.prototype.$classData = v({ Ur: 0 }, !1, "scala.runtime.Statics$", {
    Ur: 1,
    b: 1,
  });
  var qg;
  function X() {
    qg || (qg = new jg());
    return qg;
  }
  function xc() {}
  xc.prototype = new q();
  xc.prototype.constructor = xc;
  function vc(a, b) {
    setInterval(
      ((c) => () => {
        Zd(c);
      })(b),
      15
    );
  }
  xc.prototype.$classData = v(
    { Br: 0 },
    !1,
    "scala.scalajs.js.timers.package$",
    { Br: 1, b: 1 }
  );
  var wc;
  function rg() {}
  rg.prototype = new q();
  rg.prototype.constructor = rg;
  function nb(a) {
    sg || (sg = new rg());
    return a instanceof tg ? a.eh : a;
  }
  rg.prototype.$classData = v({ Kr: 0 }, !1, "scala.scalajs.runtime.package$", {
    Kr: 1,
    b: 1,
  });
  var sg;
  function ug(a) {
    this.Uk = a;
  }
  ug.prototype = new q();
  ug.prototype.constructor = ug;
  ug.prototype.z = function () {
    return "DynamicVariable(" + this.Uk + ")";
  };
  ug.prototype.$classData = v({ bo: 0 }, !1, "scala.util.DynamicVariable", {
    bo: 1,
    b: 1,
  });
  function vg() {}
  vg.prototype = new q();
  vg.prototype.constructor = vg;
  function wg() {}
  wg.prototype = vg.prototype;
  vg.prototype.p = function (a, b) {
    a = this.th(a, b);
    return (-430675100 + ba(5, (a << 13) | (a >>> 19) | 0)) | 0;
  };
  vg.prototype.th = function (a, b) {
    b = ba(-862048943, b);
    b = ba(461845907, (b << 15) | (b >>> 17) | 0);
    return a ^ b;
  };
  vg.prototype.L = function (a, b) {
    return xg(a ^ b);
  };
  function xg(a) {
    a = ba(-2048144789, a ^ ((a >>> 16) | 0));
    a = ba(-1028477387, a ^ ((a >>> 13) | 0));
    return a ^ ((a >>> 16) | 0);
  }
  function yg(a) {
    var b = zg(),
      c = a.rb();
    if (0 === c) return Ca(a.ib());
    var d = b.p(-889275714, Ca(a.ib()));
    for (var f = 0; f < c; ) {
      var g = a.sb(f);
      d = b.p(d, mg(X(), g));
      f = (1 + f) | 0;
    }
    return b.L(d, c);
  }
  function Ag(a, b, c) {
    var d = 0,
      f = 0,
      g = 0,
      h = 1;
    for (b = b.i(); b.m(); ) {
      var k = b.k();
      k = mg(X(), k);
      d = (d + k) | 0;
      f ^= k;
      h = ba(h, 1 | k);
      g = (1 + g) | 0;
    }
    c = a.p(c, d);
    c = a.p(c, f);
    c = a.th(c, h);
    return a.L(c, g);
  }
  function Bg(a) {
    0 === ((32 & a.qh) << 24) >> 24 &&
      0 === ((32 & a.qh) << 24) >> 24 &&
      ((a.Fk = new t(
        new Int32Array([
          1632,
          1776,
          1984,
          2406,
          2534,
          2662,
          2790,
          2918,
          3046,
          3174,
          3302,
          3430,
          3664,
          3792,
          3872,
          4160,
          4240,
          6112,
          6160,
          6470,
          6608,
          6784,
          6800,
          6992,
          7088,
          7232,
          7248,
          42528,
          43216,
          43264,
          43472,
          43600,
          44016,
          65296,
          66720,
          69734,
          69872,
          69942,
          70096,
          71360,
          120782,
          120792,
          120802,
          120812,
          120822,
        ])
      )),
      (a.qh = ((32 | a.qh) << 24) >> 24));
    return a.Fk;
  }
  function Cg() {
    this.Fk = null;
    this.qh = 0;
  }
  Cg.prototype = new q();
  Cg.prototype.constructor = Cg;
  Cg.prototype.$classData = v({ Jm: 0 }, !1, "java.lang.Character$", {
    Jm: 1,
    b: 1,
    c: 1,
  });
  var Dg;
  function Eg(a) {
    throw new Fg('For input string: "' + a + '"');
  }
  function Gg() {}
  Gg.prototype = new q();
  Gg.prototype.constructor = Gg;
  function ge(a, b) {
    a = null === b ? 0 : b.length | 0;
    0 === a && Eg(b);
    var c = 65535 & (b.charCodeAt(0) | 0),
      d = 45 === c,
      f = d ? 2147483648 : 2147483647;
    c = d || 43 === c ? 1 : 0;
    c >= (b.length | 0) && Eg(b);
    for (var g = 0; c !== a; ) {
      Dg || (Dg = new Cg());
      var h = Dg;
      var k = 65535 & (b.charCodeAt(c) | 0);
      if (256 > k)
        h =
          48 <= k && 57 >= k
            ? (-48 + k) | 0
            : 65 <= k && 90 >= k
            ? (-55 + k) | 0
            : 97 <= k && 122 >= k
            ? (-87 + k) | 0
            : -1;
      else if (65313 <= k && 65338 >= k) h = (-65303 + k) | 0;
      else if (65345 <= k && 65370 >= k) h = (-65335 + k) | 0;
      else {
        var l = Bg(h);
        a: {
          O();
          for (var p = k, u = 0, y = l.a.length; ; ) {
            if (u === y) {
              l = (-1 - u) | 0;
              break a;
            }
            var D = (((u + y) | 0) >>> 1) | 0,
              K = l.a[D];
            if (p < K) y = D;
            else {
              if (L(M(), p, K)) {
                l = D;
                break a;
              }
              u = (1 + D) | 0;
            }
          }
        }
        l = 0 > l ? (-2 - l) | 0 : l;
        0 > l ? (h = -1) : ((h = (k - Bg(h).a[l]) | 0), (h = 9 < h ? -1 : h));
      }
      h = 10 > h ? h : -1;
      g = 10 * g + h;
      (-1 === h || g > f) && Eg(b);
      c = (1 + c) | 0;
    }
    return d ? -g | 0 : g | 0;
  }
  function ye(a, b) {
    a = (b - (1431655765 & (b >> 1))) | 0;
    a = ((858993459 & a) + (858993459 & (a >> 2))) | 0;
    return ba(16843009, 252645135 & ((a + (a >> 4)) | 0)) >> 24;
  }
  Gg.prototype.$classData = v({ Pm: 0 }, !1, "java.lang.Integer$", {
    Pm: 1,
    b: 1,
    c: 1,
  });
  var Hg;
  function he() {
    Hg || (Hg = new Gg());
    return Hg;
  }
  function Ig() {}
  Ig.prototype = new q();
  Ig.prototype.constructor = Ig;
  function Jg() {}
  Jg.prototype = Ig.prototype;
  function Xf(a) {
    return a instanceof Ig || "number" === typeof a;
  }
  function Kg() {}
  Kg.prototype = new q();
  Kg.prototype.constructor = Kg;
  Kg.prototype.$classData = v({ Ym: 0 }, !1, "java.lang.String$", {
    Ym: 1,
    b: 1,
    c: 1,
  });
  var Lg;
  function oe(a, b) {
    a.Mk = b;
    a.cn = null;
    a.dn = !0;
    a.en = !0;
    a.Ak();
  }
  class Mg extends Error {
    constructor() {
      super();
      this.cn = this.Mk = null;
      this.en = this.dn = !1;
    }
    ph() {
      return this.Mk;
    }
    Ak() {
      "[object Error]" !== Object.prototype.toString.call(this) &&
        void 0 !== Error.captureStackTrace &&
        Error.captureStackTrace(this);
    }
    z() {
      var a = xa(this),
        b = this.ph();
      return null === b ? a : a + ": " + b;
    }
    H() {
      return Aa.prototype.H.call(this);
    }
    y(a) {
      return Aa.prototype.y.call(this, a);
    }
    get ["message"]() {
      var a = this.ph();
      return null === a ? "" : a;
    }
    get ["name"]() {
      return xa(this);
    }
    ["toString"]() {
      return this.z();
    }
  }
  function Ng() {
    this.Zi = this.Yi = 0;
    this.pn = !1;
  }
  Ng.prototype = new q();
  Ng.prototype.constructor = Ng;
  function Og(a, b) {
    var c = a.Zi,
      d = 15525485 * c + 11;
    c =
      16777215 &
      ((((d / 16777216) | 0) +
        (16777215 & ((1502 * c + 15525485 * a.Yi) | 0))) |
        0);
    d = 16777215 & (d | 0);
    a.Yi = c;
    a.Zi = d;
    return (((c << 8) | (d >> 16)) >>> ((32 - b) | 0)) | 0;
  }
  function Pg(a, b) {
    if (0 >= b) throw rd("n must be positive");
    if ((b & (-b | 0)) === b) a = Og(a, 31) >> ca(b);
    else
      a: for (;;) {
        var c = Og(a, 31),
          d = Ia(c, b);
        if (!(0 > ((((c - d) | 0) + ((-1 + b) | 0)) | 0))) {
          a = d;
          break a;
        }
      }
    return a;
  }
  Ng.prototype.$classData = v({ nn: 0 }, !1, "java.util.Random", {
    nn: 1,
    b: 1,
    c: 1,
  });
  function Qg() {
    var a = 4294967296 * +Math.random();
    return Ja(+Math.floor(a) - 2147483648);
  }
  function Rg() {}
  Rg.prototype = new q();
  Rg.prototype.constructor = Rg;
  Rg.prototype.$classData = v({ on: 0 }, !1, "java.util.Random$", {
    on: 1,
    b: 1,
    c: 1,
  });
  var Sg;
  function Tg(a, b, c) {
    return 0 === (-2097152 & c)
      ? "" + (4294967296 * c + +(b >>> 0))
      : ph(a, b, c, 1e9, 0, 2);
  }
  function ph(a, b, c, d, f, g) {
    var h =
        ((0 !== f ? ca(f) : (32 + ca(d)) | 0) -
          (0 !== c ? ca(c) : (32 + ca(b)) | 0)) |
        0,
      k = h,
      l = 0 === (32 & k) ? d << k : 0,
      p =
        0 === (32 & k)
          ? (((d >>> 1) | 0) >>> ((31 - k) | 0)) | 0 | (f << k)
          : d << k;
    k = b;
    var u = c;
    for (b = c = 0; 0 <= h && 0 !== (-2097152 & u); ) {
      var y = k,
        D = u,
        K = l,
        J = p;
      if (
        D === J
          ? (-2147483648 ^ y) >= (-2147483648 ^ K)
          : (-2147483648 ^ D) >= (-2147483648 ^ J)
      )
        (y = u),
          (D = p),
          (u = (k - l) | 0),
          (y =
            (-2147483648 ^ u) > (-2147483648 ^ k)
              ? (-1 + ((y - D) | 0)) | 0
              : (y - D) | 0),
          (k = u),
          (u = y),
          32 > h ? (c |= 1 << h) : (b |= 1 << h);
      h = (-1 + h) | 0;
      y = (p >>> 1) | 0;
      l = (l >>> 1) | 0 | (p << 31);
      p = y;
    }
    h = u;
    if (
      h === f
        ? (-2147483648 ^ k) >= (-2147483648 ^ d)
        : (-2147483648 ^ h) >= (-2147483648 ^ f)
    )
      (h = 4294967296 * u + +(k >>> 0)),
        (d = 4294967296 * f + +(d >>> 0)),
        1 !== g &&
          ((p = h / d),
          (f = (p / 4294967296) | 0),
          (l = c),
          (c = p = (l + (p | 0)) | 0),
          (b =
            (-2147483648 ^ p) < (-2147483648 ^ l)
              ? (1 + ((b + f) | 0)) | 0
              : (b + f) | 0)),
        0 !== g && ((d = h % d), (k = d | 0), (u = (d / 4294967296) | 0));
    if (0 === g) return (a.Na = b), c;
    if (1 === g) return (a.Na = u), k;
    a = "" + k;
    return (
      "" +
      (4294967296 * b + +(c >>> 0)) +
      "000000000".substring(a.length | 0) +
      a
    );
  }
  function qh() {
    this.Na = 0;
  }
  qh.prototype = new q();
  qh.prototype.constructor = qh;
  function $f(a, b, c) {
    return 0 > c
      ? -(4294967296 * +((0 !== b ? ~c : -c | 0) >>> 0) + +((-b | 0) >>> 0))
      : 4294967296 * c + +(b >>> 0);
  }
  function rh(a, b, c, d, f) {
    if (0 === (d | f)) throw new Ga();
    if (c === b >> 31) {
      if (f === d >> 31) {
        if (-2147483648 === b && -1 === d) return (a.Na = 0), -2147483648;
        c = Fa(b, d);
        a.Na = c >> 31;
        return c;
      }
      return -2147483648 === b && -2147483648 === d && 0 === f
        ? (a.Na = -1)
        : (a.Na = 0);
    }
    if (0 > c) {
      var g = -b | 0;
      b = 0 !== b ? ~c : -c | 0;
    } else (g = b), (b = c);
    if (0 > f) {
      var h = -d | 0;
      d = 0 !== d ? ~f : -f | 0;
    } else (h = d), (d = f);
    0 === (-2097152 & b)
      ? 0 === (-2097152 & d)
        ? ((g = (4294967296 * b + +(g >>> 0)) / (4294967296 * d + +(h >>> 0))),
          (a.Na = (g / 4294967296) | 0),
          (g |= 0))
        : (g = a.Na = 0)
      : 0 === d && 0 === (h & ((-1 + h) | 0))
      ? ((h = (31 - ca(h)) | 0),
        (a.Na = (b >>> h) | 0),
        (g = (g >>> h) | 0 | ((b << 1) << ((31 - h) | 0))))
      : 0 === h && 0 === (d & ((-1 + d) | 0))
      ? ((g = (31 - ca(d)) | 0), (a.Na = 0), (g = (b >>> g) | 0))
      : (g = ph(a, g, b, h, d, 0) | 0);
    if (0 <= (c ^ f)) return g;
    c = a.Na;
    a.Na = 0 !== g ? ~c : -c | 0;
    return -g | 0;
  }
  function sh(a, b, c, d, f) {
    if (0 === (d | f)) throw new Ga();
    if (c === b >> 31) {
      if (f === d >> 31)
        return -1 !== d ? ((c = Ia(b, d)), (a.Na = c >> 31), c) : (a.Na = 0);
      if (-2147483648 === b && -2147483648 === d && 0 === f) return (a.Na = 0);
      a.Na = c;
      return b;
    }
    if (0 > c) {
      var g = -b | 0;
      var h = 0 !== b ? ~c : -c | 0;
    } else (g = b), (h = c);
    0 > f ? ((b = -d | 0), (d = 0 !== d ? ~f : -f | 0)) : ((b = d), (d = f));
    0 === (-2097152 & h)
      ? 0 === (-2097152 & d)
        ? ((b = (4294967296 * h + +(g >>> 0)) % (4294967296 * d + +(b >>> 0))),
          (a.Na = (b / 4294967296) | 0),
          (b |= 0))
        : ((a.Na = h), (b = g))
      : 0 === d && 0 === (b & ((-1 + b) | 0))
      ? ((a.Na = 0), (b = g & ((-1 + b) | 0)))
      : 0 === b && 0 === (d & ((-1 + d) | 0))
      ? ((a.Na = h & ((-1 + d) | 0)), (b = g))
      : (b = ph(a, g, h, b, d, 1) | 0);
    return 0 > c ? ((c = a.Na), (a.Na = 0 !== b ? ~c : -c | 0), -b | 0) : b;
  }
  qh.prototype.$classData = v(
    { vm: 0 },
    !1,
    "org.scalajs.linker.runtime.RuntimeLong$",
    { vm: 1, b: 1, c: 1 }
  );
  var th;
  function ag() {
    th || (th = new qh());
    return th;
  }
  function uh() {
    this.cj = null;
    vh = this;
    this.cj = new wh();
  }
  uh.prototype = new q();
  uh.prototype.constructor = uh;
  uh.prototype.$classData = v({ rn: 0 }, !1, "scala.$less$colon$less$", {
    rn: 1,
    b: 1,
    c: 1,
  });
  var vh;
  function xh() {
    vh || (vh = new uh());
    return vh;
  }
  function yh() {}
  yh.prototype = new q();
  yh.prototype.constructor = yh;
  function zh(a, b, c, d, f, g) {
    a = ja(b);
    var h;
    if ((h = !!a.Cc.isArrayClass)) h = !!ja(d).Cc.isAssignableFrom(a.Cc);
    if (h) b.I(c, d, f, g);
    else
      for (a = c, c = (c + g) | 0; a < c; )
        Pd(Od(), d, f, eg(Od(), b, a)), (a = (1 + a) | 0), (f = (1 + f) | 0);
  }
  yh.prototype.$classData = v({ tn: 0 }, !1, "scala.Array$", {
    tn: 1,
    b: 1,
    c: 1,
  });
  var Ah;
  function Bh() {
    Ah || (Ah = new yh());
    return Ah;
  }
  function Ch() {
    this.Sk = null;
    Dh = this;
    this.Sk = new ug(Tc().Kk);
    Tc();
  }
  Ch.prototype = new q();
  Ch.prototype.constructor = Ch;
  Ch.prototype.$classData = v({ vn: 0 }, !1, "scala.Console$", {
    vn: 1,
    b: 1,
    fs: 1,
  });
  var Dh;
  function Eh() {}
  Eh.prototype = new zd();
  Eh.prototype.constructor = Eh;
  function Fh() {}
  Fh.prototype = Eh.prototype;
  function Gh(a, b) {
    return null !== b ? new Hh(b) : null;
  }
  function Ih() {}
  Ih.prototype = new q();
  Ih.prototype.constructor = Ih;
  Ih.prototype.z = function () {
    return "Tuple2";
  };
  Ih.prototype.$classData = v({ xm: 0 }, !1, "scala.Tuple2$", {
    xm: 1,
    b: 1,
    c: 1,
  });
  var Jh;
  function Kh(a, b, c) {
    return a.ga(new Lh(b, c));
  }
  function Mh() {}
  Mh.prototype = new q();
  Mh.prototype.constructor = Mh;
  function Nh() {}
  Nh.prototype = Mh.prototype;
  function zf() {}
  zf.prototype = new q();
  zf.prototype.constructor = zf;
  zf.prototype.z = function () {
    return "::";
  };
  zf.prototype.$classData = v(
    { wp: 0 },
    !1,
    "scala.collection.immutable.$colon$colon$",
    { wp: 1, b: 1, c: 1 }
  );
  var yf;
  function Oh(a, b) {
    this.tf = this.lc = 0;
    this.qe = null;
    this.Gc = 0;
    this.ag = this.ae = null;
    for (be(this, b.mc); this.m(); )
      (b = this.qe.Gd(this.lc)),
        Ph(a, a.re, this.qe.ic(this.lc), b, Bd(Dd(), b), 0),
        (this.lc = (1 + this.lc) | 0);
  }
  Oh.prototype = new de();
  Oh.prototype.constructor = Oh;
  Oh.prototype.$classData = v(
    { Cp: 0 },
    !1,
    "scala.collection.immutable.HashSetBuilder$$anon$1",
    { Cp: 1, ml: 1, b: 1 }
  );
  function Qh() {}
  Qh.prototype = new q();
  Qh.prototype.constructor = Qh;
  function Rh(a, b, c, d, f) {
    throw rd(
      b +
        (f ? " to " : " until ") +
        c +
        " by " +
        d +
        ": seqs cannot contain more than Int.MaxValue elements."
    );
  }
  function Sh(a) {
    Ff();
    return Th(new Uh(), a + " on empty Range");
  }
  Qh.prototype.$classData = v(
    { Zp: 0 },
    !1,
    "scala.collection.immutable.Range$",
    { Zp: 1, b: 1, c: 1 }
  );
  var Vh;
  function Ff() {
    Vh || (Vh = new Qh());
    return Vh;
  }
  function Wh() {}
  Wh.prototype = new qe();
  Wh.prototype.constructor = Wh;
  function Xh() {}
  Xh.prototype = Wh.prototype;
  function Yh(a, b) {
    if (b === a) {
      var c = a.qb;
      Zh || (Zh = new $h());
      c.call(a, Zh.Ce(b));
    } else for (b = b.i(); b.m(); ) a.Oa(b.k());
    return a;
  }
  function Ef() {}
  Ef.prototype = new q();
  Ef.prototype.constructor = Ef;
  Ef.prototype.$classData = v(
    { xr: 0 },
    !1,
    "scala.collection.mutable.StringBuilder$",
    { xr: 1, b: 1, c: 1 }
  );
  var Df;
  function Jf() {}
  Jf.prototype = new q();
  Jf.prototype.constructor = Jf;
  Jf.prototype.$classData = v({ En: 0 }, !1, "scala.math.Fractional$", {
    En: 1,
    b: 1,
    c: 1,
  });
  var If;
  function Lf() {}
  Lf.prototype = new q();
  Lf.prototype.constructor = Lf;
  Lf.prototype.$classData = v({ Fn: 0 }, !1, "scala.math.Integral$", {
    Fn: 1,
    b: 1,
    c: 1,
  });
  var Kf;
  function Nf() {}
  Nf.prototype = new q();
  Nf.prototype.constructor = Nf;
  Nf.prototype.$classData = v({ Gn: 0 }, !1, "scala.math.Numeric$", {
    Gn: 1,
    b: 1,
    c: 1,
  });
  var Mf;
  function ai() {}
  ai.prototype = new q();
  ai.prototype.constructor = ai;
  function od(a, b) {
    b === m(gb)
      ? (a = bi())
      : b === m(hb)
      ? (a = ci())
      : b === m(fb)
      ? (a = di())
      : b === m(ib)
      ? (a = Ee())
      : b === m(jb)
      ? (a = ei())
      : b === m(kb)
      ? (a = fi())
      : b === m(lb)
      ? (a = gi())
      : b === m(eb)
      ? (a = hi())
      : b === m(db)
      ? (a = ii())
      : b === m(w)
      ? (ji || (ji = new ki()), (a = ji))
      : b === m(li)
      ? (mi || (mi = new ni()), (a = mi))
      : b === m(cg)
      ? (oi || (oi = new pi()), (a = oi))
      : (a = new qi(b));
    return a;
  }
  ai.prototype.$classData = v({ Ln: 0 }, !1, "scala.reflect.ClassTag$", {
    Ln: 1,
    b: 1,
    c: 1,
  });
  var ri;
  function pd() {
    ri || (ri = new ai());
    return ri;
  }
  function si() {}
  si.prototype = new q();
  si.prototype.constructor = si;
  si.prototype.$classData = v({ Nn: 0 }, !1, "scala.reflect.Manifest$", {
    Nn: 1,
    b: 1,
    c: 1,
  });
  var ti;
  function ui() {}
  ui.prototype = new q();
  ui.prototype.constructor = ui;
  function vi() {}
  vi.prototype = ui.prototype;
  ui.prototype.z = function () {
    return "\x3cfunction0\x3e";
  };
  function wi() {}
  wi.prototype = new q();
  wi.prototype.constructor = wi;
  function xi() {}
  xi.prototype = wi.prototype;
  wi.prototype.z = function () {
    return "\x3cfunction1\x3e";
  };
  function yi() {}
  yi.prototype = new q();
  yi.prototype.constructor = yi;
  function zi() {}
  zi.prototype = yi.prototype;
  yi.prototype.z = function () {
    return "\x3cfunction2\x3e";
  };
  function Ai(a) {
    this.og = a;
  }
  Ai.prototype = new q();
  Ai.prototype.constructor = Ai;
  Ai.prototype.z = function () {
    return "" + this.og;
  };
  Ai.prototype.$classData = v({ Lr: 0 }, !1, "scala.runtime.BooleanRef", {
    Lr: 1,
    b: 1,
    c: 1,
  });
  function Bi(a) {
    this.Rj = a;
  }
  Bi.prototype = new q();
  Bi.prototype.constructor = Bi;
  Bi.prototype.z = function () {
    return "" + this.Rj;
  };
  Bi.prototype.$classData = v({ Nr: 0 }, !1, "scala.runtime.IntRef", {
    Nr: 1,
    b: 1,
    c: 1,
  });
  function Ci(a) {
    this.fa = a;
  }
  Ci.prototype = new q();
  Ci.prototype.constructor = Ci;
  Ci.prototype.z = function () {
    return "" + this.fa;
  };
  Ci.prototype.$classData = v({ Qr: 0 }, !1, "scala.runtime.ObjectRef", {
    Qr: 1,
    b: 1,
    c: 1,
  });
  function Rf() {}
  Rf.prototype = new q();
  Rf.prototype.constructor = Rf;
  Rf.prototype.$classData = v({ co: 0 }, !1, "scala.util.Either$", {
    co: 1,
    b: 1,
    c: 1,
  });
  var Qf;
  function Tf() {}
  Tf.prototype = new q();
  Tf.prototype.constructor = Tf;
  Tf.prototype.z = function () {
    return "Left";
  };
  Tf.prototype.$classData = v({ eo: 0 }, !1, "scala.util.Left$", {
    eo: 1,
    b: 1,
    c: 1,
  });
  var Sf;
  function Di() {
    this.Cb = null;
  }
  Di.prototype = new q();
  Di.prototype.constructor = Di;
  function Ei() {}
  Ei.prototype = Di.prototype;
  function Vf() {}
  Vf.prototype = new q();
  Vf.prototype.constructor = Vf;
  Vf.prototype.z = function () {
    return "Right";
  };
  Vf.prototype.$classData = v({ go: 0 }, !1, "scala.util.Right$", {
    go: 1,
    b: 1,
    c: 1,
  });
  var Uf;
  function Fi() {
    this.xh = this.Vk = this.Ec = 0;
    Gi = this;
    this.Ec = Ca("Seq");
    this.Vk = Ca("Map");
    this.xh = Ca("Set");
    Ag(this, xb().gj, this.Vk);
  }
  Fi.prototype = new wg();
  Fi.prototype.constructor = Fi;
  function Hi(a) {
    var b = zg();
    if (a && a.$classData && a.$classData.Nb.$a)
      a: {
        var c = b.Ec,
          d = a.n();
        switch (d) {
          case 0:
            b = b.L(c, 0);
            break a;
          case 1:
            d = c;
            a = a.t(0);
            b = b.L(b.p(d, mg(X(), a)), 1);
            break a;
          default:
            var f = a.t(0),
              g = mg(X(), f);
            f = c = b.p(c, g);
            var h = a.t(1);
            h = mg(X(), h);
            var k = (h - g) | 0;
            for (g = 2; g < d; ) {
              c = b.p(c, h);
              var l = a.t(g);
              l = mg(X(), l);
              if (k !== ((l - h) | 0)) {
                c = b.p(c, l);
                for (g = (1 + g) | 0; g < d; )
                  (f = a.t(g)), (c = b.p(c, mg(X(), f))), (g = (1 + g) | 0);
                b = b.L(c, d);
                break a;
              }
              h = l;
              g = (1 + g) | 0;
            }
            b = xg(b.p(b.p(f, k), h));
        }
      }
    else if (a instanceof Ii) {
      d = b.Ec;
      g = 0;
      h = d;
      c = f = l = k = 0;
      for (var p = a; !p.f(); ) {
        a = p.u();
        p = p.w();
        a = mg(X(), a);
        h = b.p(h, a);
        switch (k) {
          case 0:
            c = a;
            k = 1;
            break;
          case 1:
            l = (a - f) | 0;
            k = 2;
            break;
          case 2:
            l !== ((a - f) | 0) && (k = 3);
        }
        f = a;
        g = (1 + g) | 0;
      }
      2 === k
        ? ((a = l), (b = xg(b.p(b.p(b.p(d, c), a), f))))
        : (b = b.L(h, g));
    } else
      a: if (((d = b.Ec), (a = a.i()), a.m()))
        if (((c = a.k()), a.m())) {
          f = a.k();
          h = mg(X(), c);
          c = d = b.p(d, h);
          g = mg(X(), f);
          h = (g - h) | 0;
          for (f = 2; a.m(); ) {
            d = b.p(d, g);
            k = a.k();
            k = mg(X(), k);
            if (h !== ((k - g) | 0)) {
              d = b.p(d, k);
              for (f = (1 + f) | 0; a.m(); )
                (c = a.k()), (d = b.p(d, mg(X(), c))), (f = (1 + f) | 0);
              b = b.L(d, f);
              break a;
            }
            g = k;
            f = (1 + f) | 0;
          }
          b = xg(b.p(b.p(c, h), g));
        } else b = b.L(b.p(d, mg(X(), c)), 1);
      else b = b.L(d, 0);
    return b;
  }
  Fi.prototype.$classData = v(
    { ho: 0 },
    !1,
    "scala.util.hashing.MurmurHash3$",
    { ho: 1, As: 1, b: 1 }
  );
  var Gi;
  function zg() {
    Gi || (Gi = new Fi());
    return Gi;
  }
  var sa = v(
      { Gm: 0 },
      !1,
      "java.lang.Boolean",
      { Gm: 1, b: 1, c: 1, Ee: 1 },
      (a) => "boolean" === typeof a
    ),
    va = v(
      { Im: 0 },
      !1,
      "java.lang.Character",
      { Im: 1, b: 1, c: 1, Ee: 1 },
      (a) => a instanceof fa
    );
  class Ji extends Mg {}
  class Ki extends Mg {}
  Ki.prototype.$classData = v({ jc: 0 }, !1, "java.lang.Exception", {
    jc: 1,
    fc: 1,
    b: 1,
    c: 1,
  });
  function Li() {}
  Li.prototype = new q();
  Li.prototype.constructor = Li;
  function Mi() {}
  Mi.prototype = Li.prototype;
  function Ni() {
    Oi = this;
    xb();
    zc();
    Pi || (Pi = new Qi());
    Ri();
    Jh || (Jh = new Ih());
    ti || (ti = new si());
    Si || (Si = new Ti());
  }
  Ni.prototype = new Fh();
  Ni.prototype.constructor = Ni;
  Ni.prototype.$classData = v({ zn: 0 }, !1, "scala.Predef$", {
    zn: 1,
    bs: 1,
    cs: 1,
    b: 1,
  });
  var Oi;
  function yc() {
    Oi || (Oi = new Ni());
    return Oi;
  }
  function Ui() {
    this.kj = null;
  }
  Ui.prototype = new q();
  Ui.prototype.constructor = Ui;
  function Vi() {}
  Vi.prototype = Ui.prototype;
  Ui.prototype.Fb = function () {
    var a = this.kj;
    De();
    return a.Fl;
  };
  Ui.prototype.ga = function (a) {
    De();
    var b = a.v();
    if (-1 < b) {
      var c = new r(b);
      a = a.i();
      for (var d = 0; d < b; ) (c.a[d] = a.k()), (d = (1 + d) | 0);
      b = c;
    } else {
      b = [];
      for (c = a.i(); c.m(); ) (a = c.k()), b.push(null === a ? null : a);
      b = new r(b);
    }
    return Wi(0, b);
  };
  Ui.prototype.X = function () {
    var a = this.kj;
    De();
    var b = new Xi(m(w));
    return new Yi(b, new E((() => (c) => Wi(Zi(), c))(a)));
  };
  Ui.prototype.od = function (a) {
    De();
    var b = a.v();
    if (-1 < b) {
      var c = new r(b);
      a = a.i();
      for (var d = 0; d < b; ) (c.a[d] = a.k()), (d = (1 + d) | 0);
      b = c;
    } else {
      b = [];
      for (c = a.i(); c.m(); ) (a = c.k()), b.push(null === a ? null : a);
      b = new r(b);
    }
    return Wi(0, b);
  };
  function $i() {
    this.pe = null;
  }
  $i.prototype = new q();
  $i.prototype.constructor = $i;
  function aj() {}
  aj.prototype = $i.prototype;
  $i.prototype.Fb = function () {
    return this.pe.Fb();
  };
  $i.prototype.ga = function (a) {
    return this.pe.ga(a);
  };
  $i.prototype.X = function () {
    return this.pe.X();
  };
  function bj(a, b) {
    if (0 > b) return 1;
    var c = a.v();
    if (0 <= c) return c === b ? 0 : c < b ? -1 : 1;
    c = 0;
    for (a = a.i(); a.m(); ) {
      if (c === b) return 1;
      a.k();
      c = (1 + c) | 0;
    }
    return (c - b) | 0;
  }
  function cj(a) {
    if (a.f()) throw ((a = new dj()), oe(a, null), a);
    return a.Eb(1);
  }
  function ej(a, b) {
    var c = a.ha();
    a = fj(b) ? new gj(a, b) : a.i().Dd(new H(((d, f) => () => f.i())(a, b)));
    return c.ga(a);
  }
  function hj(a, b) {
    var c = ij(new jj(), a, new E(((d, f) => (g) => f.l(g).Ac())(a, b)));
    b = ij(new jj(), a, new E(((d, f) => (g) => f.l(g).Bc())(a, b)));
    return kj(new lj(), a.ha().ga(c), a.ha().ga(b));
  }
  function mj(a, b) {
    this.zh = a;
    this.lj = b;
  }
  mj.prototype = new Nh();
  mj.prototype.constructor = mj;
  mj.prototype.R = function (a) {
    return this.zh.ha().ga(ij(new jj(), new nj(this.zh, this.lj, !1), a));
  };
  mj.prototype.O = function (a) {
    new nj(this.zh, this.lj, !1).O(a);
  };
  function oj(a, b) {
    return new mj(
      a.zh,
      new E(((c, d) => (f) => !!c.lj.l(f) && !!d.l(f))(a, b))
    );
  }
  mj.prototype.Vd = function (a) {
    return oj(this, a);
  };
  mj.prototype.$classData = v(
    { Jo: 0 },
    !1,
    "scala.collection.IterableOps$WithFilter",
    { Jo: 1, ll: 1, b: 1, c: 1 }
  );
  function pj(a, b, c) {
    var d = 0 < c ? c : 0;
    for (a.Ed(c); a.m(); ) {
      if (b.l(a.k())) return d;
      d = (1 + d) | 0;
    }
    return -1;
  }
  function qj(a, b) {
    for (var c = 0; c < b && a.m(); ) a.k(), (c = (1 + c) | 0);
    return a;
  }
  function rj() {
    this.Y = null;
    sj = this;
    this.Y = new tj();
  }
  rj.prototype = new q();
  rj.prototype.constructor = rj;
  rj.prototype.X = function () {
    return new uj();
  };
  rj.prototype.Fb = function () {
    return this.Y;
  };
  rj.prototype.ga = function (a) {
    return a.i();
  };
  rj.prototype.$classData = v({ Ko: 0 }, !1, "scala.collection.Iterator$", {
    Ko: 1,
    b: 1,
    Hb: 1,
    c: 1,
  });
  var sj;
  function W() {
    sj || (sj = new rj());
    return sj;
  }
  function vj() {}
  vj.prototype = new q();
  vj.prototype.constructor = vj;
  function wj(a, b) {
    if (b && b.$classData && b.$classData.Nb.Zb) return b;
    if (fj(b)) return new xj(new H(((c, d) => () => d.i())(a, b)));
    a = yj(Bf(), b);
    return zj(new Aj(), a);
  }
  vj.prototype.X = function () {
    var a = new Bj();
    return new Yi(a, new E((() => (b) => wj(Cj(), b))(this)));
  };
  vj.prototype.Fb = function () {
    Dj || (Dj = new Ej());
    return Dj;
  };
  vj.prototype.ga = function (a) {
    return wj(this, a);
  };
  vj.prototype.$classData = v({ cp: 0 }, !1, "scala.collection.View$", {
    cp: 1,
    b: 1,
    Hb: 1,
    c: 1,
  });
  var Fj;
  function Cj() {
    Fj || (Fj = new vj());
    return Fj;
  }
  function Ce(a, b, c, d, f, g) {
    this.S = a;
    this.Qa = b;
    this.Db = c;
    this.$b = d;
    this.bb = f;
    this.Fc = g;
  }
  Ce.prototype = new Xh();
  Ce.prototype.constructor = Ce;
  e = Ce.prototype;
  e.Xa = function () {
    return this.bb;
  };
  e.Cd = function () {
    return this.Fc;
  };
  e.ic = function (a) {
    return this.Db.a[a];
  };
  e.Gd = function (a) {
    return this.$b.a[a];
  };
  e.Yd = function (a) {
    return this.Db.a[(((-1 + this.Db.a.length) | 0) - a) | 0];
  };
  e.Cg = function (a, b, c, d) {
    var f = ve(P(), c, d),
      g = we(P(), f);
    return 0 !== (this.S & g)
      ? ((c = ze(P(), this.S, f, g)),
        this.$b.a[c] === b && L(M(), a, this.ic(c)))
      : 0 !== (this.Qa & g)
      ? ((f = ze(P(), this.Qa, f, g)), this.Yd(f).Cg(a, b, c, (5 + d) | 0))
      : !1;
  };
  function Gj(a, b, c, d, f) {
    var g = ve(P(), d, f),
      h = we(P(), g);
    if (0 !== (a.S & h)) {
      g = ze(P(), a.S, g, h);
      var k = a.ic(g);
      if (Object.is(k, b)) return a;
      var l = a.Gd(g);
      g = Bd(Dd(), l);
      if (c === l && L(M(), k, b)) return a;
      d = Hj(a, k, l, g, b, c, d, (5 + f) | 0);
      c = Ij(a, h);
      f = (((-1 + a.Db.a.length) | 0) - Jj(a, h)) | 0;
      k = a.Db;
      b = new r(k.a.length);
      k.I(0, b, 0, c);
      k.I((1 + c) | 0, b, c, (f - c) | 0);
      b.a[f] = d;
      k.I((1 + f) | 0, b, (1 + f) | 0, (-1 + ((k.a.length - f) | 0)) | 0);
      c = re(a.$b, c);
      return new Ce(
        a.S ^ h,
        a.Qa | h,
        b,
        c,
        (((-1 + a.bb) | 0) + d.Xa()) | 0,
        (((a.Fc - g) | 0) + d.Cd()) | 0
      );
    }
    if (0 !== (a.Qa & h))
      return (
        (g = ze(P(), a.Qa, g, h)),
        (g = a.Yd(g)),
        (d = g.Ml(b, c, d, (5 + f) | 0)),
        g === d ? a : Kj(a, h, g, d)
      );
    f = Ij(a, h);
    k = a.Db;
    g = new r((1 + k.a.length) | 0);
    k.I(0, g, 0, f);
    g.a[f] = b;
    k.I(f, g, (1 + f) | 0, (k.a.length - f) | 0);
    b = se(a.$b, f, c);
    return new Ce(a.S | h, a.Qa, g, b, (1 + a.bb) | 0, (a.Fc + d) | 0);
  }
  function Lj(a, b, c, d, f) {
    var g = ve(P(), d, f),
      h = we(P(), g);
    if (0 !== (a.S & h)) {
      g = ze(P(), a.S, g, h);
      c = a.ic(g);
      if (L(M(), c, b)) {
        b = a.S;
        2 === ye(he(), b) ? ((b = a.Qa), (b = 0 === ye(he(), b))) : (b = !1);
        if (b) {
          h = 0 === f ? a.S ^ h : we(P(), ve(P(), d, 0));
          if (0 === g) {
            d = [a.ic(1)];
            f = B(new C(), d);
            De();
            d = f.n();
            d = new r(d);
            f = new Mj(f);
            f = new yk(f);
            for (g = 0; f.m(); ) (d.a[g] = f.k()), (g = (1 + g) | 0);
            return new Ce(
              h,
              0,
              d,
              new t(new Int32Array([a.$b.a[1]])),
              (-1 + a.bb) | 0,
              Bd(Dd(), a.$b.a[1])
            );
          }
          d = [a.ic(0)];
          f = B(new C(), d);
          De();
          d = f.n();
          d = new r(d);
          f = new Mj(f);
          f = new yk(f);
          for (g = 0; f.m(); ) (d.a[g] = f.k()), (g = (1 + g) | 0);
          return new Ce(
            h,
            0,
            d,
            new t(new Int32Array([a.$b.a[0]])),
            (-1 + a.bb) | 0,
            Bd(Dd(), a.$b.a[0])
          );
        }
        g = Ij(a, h);
        b = a.Db;
        f = new r((-1 + b.a.length) | 0);
        b.I(0, f, 0, g);
        b.I((1 + g) | 0, f, g, (-1 + ((b.a.length - g) | 0)) | 0);
        g = re(a.$b, g);
        return new Ce(a.S ^ h, a.Qa, f, g, (-1 + a.bb) | 0, (a.Fc - d) | 0);
      }
      return a;
    }
    if (0 !== (a.Qa & h)) {
      g = ze(P(), a.Qa, g, h);
      g = a.Yd(g);
      d = g.Qk(b, c, d, (5 + f) | 0);
      if (d === g) return a;
      f = d.Xa();
      if (1 === f) {
        if (a.bb === g.Xa()) a = d;
        else {
          b = (((-1 + a.Db.a.length) | 0) - Jj(a, h)) | 0;
          c = Ij(a, h);
          var k = a.Db;
          f = new r(k.a.length);
          k.I(0, f, 0, c);
          f.a[c] = d.ic(0);
          k.I(c, f, (1 + c) | 0, (b - c) | 0);
          k.I((1 + b) | 0, f, (1 + b) | 0, (-1 + ((k.a.length - b) | 0)) | 0);
          b = se(a.$b, c, d.Gd(0));
          a = new Ce(
            a.S | h,
            a.Qa ^ h,
            f,
            b,
            (1 + ((a.bb - g.Xa()) | 0)) | 0,
            (((a.Fc - g.Cd()) | 0) + d.Cd()) | 0
          );
        }
        return a;
      }
      if (1 < f) return Kj(a, h, g, d);
    }
    return a;
  }
  function Hj(a, b, c, d, f, g, h, k) {
    if (32 <= k) return Cf(), new zk(c, d, Ak(0, B(new C(), [b, f])));
    var l = ve(P(), d, k),
      p = ve(P(), h, k);
    if (l !== p) {
      var u = we(P(), l) | we(P(), p);
      d = (d + h) | 0;
      if (l < p) {
        f = B(new C(), [b, f]);
        De();
        b = f.n();
        b = new r(b);
        f = new Mj(f);
        f = new yk(f);
        for (h = 0; f.m(); ) (b.a[h] = f.k()), (h = (1 + h) | 0);
        return new Ce(u, 0, b, new t(new Int32Array([c, g])), 2, d);
      }
      f = B(new C(), [f, b]);
      De();
      b = f.n();
      b = new r(b);
      f = new Mj(f);
      f = new yk(f);
      for (h = 0; f.m(); ) (b.a[h] = f.k()), (h = (1 + h) | 0);
      return new Ce(u, 0, b, new t(new Int32Array([g, c])), 2, d);
    }
    u = we(P(), l);
    c = Hj(a, b, c, d, f, g, h, (5 + k) | 0);
    d = B(new C(), [c]);
    De();
    g = d.n();
    g = new r(g);
    d = new Mj(d);
    d = new yk(d);
    for (b = 0; d.m(); ) (g.a[b] = d.k()), (b = (1 + b) | 0);
    return new Ce(0, u, g, xd().dj, c.Xa(), c.Cd());
  }
  e.Ui = function () {
    return 0 !== this.S;
  };
  e.bj = function () {
    var a = this.S;
    return ye(he(), a);
  };
  e.Ti = function () {
    return 0 !== this.Qa;
  };
  e.Pk = function () {
    var a = this.Qa;
    return ye(he(), a);
  };
  function Ij(a, b) {
    a = a.S & ((-1 + b) | 0);
    return ye(he(), a);
  }
  function Jj(a, b) {
    a = a.Qa & ((-1 + b) | 0);
    return ye(he(), a);
  }
  function Kj(a, b, c, d) {
    b = (((-1 + a.Db.a.length) | 0) - Jj(a, b)) | 0;
    var f = a.Db,
      g = new r(f.a.length);
    f.I(0, g, 0, f.a.length);
    g.a[b] = d;
    return new Ce(
      a.S,
      a.Qa,
      g,
      a.$b,
      (((a.bb - c.Xa()) | 0) + d.Xa()) | 0,
      (((a.Fc - c.Cd()) | 0) + d.Cd()) | 0
    );
  }
  e.O = function (a) {
    var b = this.S;
    b = ye(he(), b);
    for (var c = 0; c < b; ) a.l(this.ic(c)), (c = (1 + c) | 0);
    b = this.Qa;
    b = ye(he(), b);
    for (c = 0; c < b; ) this.Yd(c).O(a), (c = (1 + c) | 0);
  };
  function Bk(a, b, c) {
    if (0 === a.bb) return a;
    if (1 === a.bb) return !!b.l(a.ic(0)) !== c ? a : Fe().ig;
    if (0 === a.Qa) {
      for (
        var d = a.S,
          f = 0 === d ? 32 : (31 - ca(d & (-d | 0))) | 0,
          g = (32 - ca(a.S)) | 0,
          h = (d = 0),
          k = 0;
        f < g;

      ) {
        var l = we(P(), f);
        if (0 !== (l & a.S)) {
          var p = a.ic(k);
          !!b.l(p) !== c && ((d |= l), (h = (h + Bd(Dd(), a.Gd(k))) | 0));
          k = (1 + k) | 0;
        }
        f = (1 + f) | 0;
      }
      if (0 === d) return Fe().ig;
      if (d === a.S) return a;
      b = d;
      b = ye(he(), b);
      c = new r(b);
      g = new t(b);
      k = (32 - ca(d)) | 0;
      f = d;
      f = 0 === f ? 32 : (31 - ca(f & (-f | 0))) | 0;
      for (l = 0; f < k; )
        (p = we(P(), f)),
          0 !== (p & d) &&
            ((p = xe(P(), a.S, p)),
            (c.a[l] = a.Db.a[p]),
            (g.a[l] = a.$b.a[p]),
            (l = (1 + l) | 0)),
          (f = (1 + f) | 0);
      return new Ce(d, 0, c, g, b, h);
    }
    h = a.S | a.Qa;
    d = 0 === h ? 32 : (31 - ca(h & (-h | 0))) | 0;
    var u = (32 - ca(h)) | 0,
      y = (f = 0),
      D = null;
    l = p = 0;
    k = null;
    for (var K = 0, J = (g = 0), Z = (h = 0), wa = 0, Ha = d; Ha < u; ) {
      var ka = we(P(), Ha);
      if (0 !== (ka & a.S)) {
        var Ka = a.ic(Z);
        !!b.l(Ka) !== c &&
          ((K |= ka),
          (f |= ka),
          (J = (1 + J) | 0),
          (h = (h + Bd(Dd(), a.Gd(Z))) | 0));
        Z = (1 + Z) | 0;
      } else if (0 !== (ka & a.Qa)) {
        Ka = a.Yd(wa);
        var qa = Ka.Bk(b, c);
        J = (J + qa.Xa()) | 0;
        h = (h + qa.Cd()) | 0;
        1 < qa.Xa()
          ? ((g |= ka),
            Ka === qa
              ? (p |= ka)
              : ((l |= ka), null === k && (k = new Ck(16)), Dk(k, qa)))
          : 1 === qa.Xa() &&
            ((K |= ka), (y |= ka), null === D && (D = new Ck(16)), Dk(D, qa));
        wa = (1 + wa) | 0;
      }
      Ha = (1 + Ha) | 0;
    }
    b = J;
    c = K;
    if (0 === b) a = Fe().ig;
    else if (b !== a.bb) {
      J = ye(he(), c);
      K = (J + ye(he(), g)) | 0;
      u = new r(K);
      J = new t(J);
      Z = (32 - ca(c | g)) | 0;
      for (Ka = ka = Ha = wa = 0; d < Z; )
        (qa = we(P(), d)),
          0 !== (qa & f)
            ? ((u.a[ka] = a.ic(wa)),
              (J.a[ka] = a.Gd(wa)),
              (ka = (1 + ka) | 0),
              (wa = (1 + wa) | 0))
            : 0 !== (qa & p)
            ? ((u.a[(-1 + ((K - Ka) | 0)) | 0] = a.Yd(Ha)),
              (Ka = (1 + Ka) | 0),
              (Ha = (1 + Ha) | 0))
            : 0 !== (qa & y)
            ? ((qa = Ek(D)),
              (u.a[ka] = qa.ic(0)),
              (J.a[ka] = qa.Gd(0)),
              (ka = (1 + ka) | 0),
              (Ha = (1 + Ha) | 0))
            : 0 !== (qa & l)
            ? ((u.a[(-1 + ((K - Ka) | 0)) | 0] = Ek(k)),
              (Ka = (1 + Ka) | 0),
              (Ha = (1 + Ha) | 0))
            : 0 !== (qa & a.S)
            ? (wa = (1 + wa) | 0)
            : 0 !== (qa & a.Qa) && (Ha = (1 + Ha) | 0),
          (d = (1 + d) | 0);
      a = new Ce(c, g, u, J, b, h);
    }
    return a;
  }
  e.y = function (a) {
    if (a instanceof Ce) {
      if (this === a) return !0;
      if (
        this.Fc === a.Fc &&
        this.Qa === a.Qa &&
        this.S === a.S &&
        this.bb === a.bb
      ) {
        var b = this.$b;
        var c = a.$b;
        b = gd(O(), b, c);
      } else b = !1;
      if (b) {
        b = this.Db;
        a = a.Db;
        c = this.Db.a.length;
        if (b === a) return !0;
        for (var d = !0, f = 0; d && f < c; )
          (d = L(M(), b.a[f], a.a[f])), (f = (1 + f) | 0);
        return d;
      }
    }
    return !1;
  };
  e.H = function () {
    throw Ld("Trie nodes do not support hashing.");
  };
  function Fk(a) {
    var b = a.Db.q(),
      c = b.a.length,
      d = a.S;
    for (d = ye(he(), d); d < c; ) (b.a[d] = b.a[d].zk()), (d = (1 + d) | 0);
    return new Ce(a.S, a.Qa, b, a.$b.q(), a.bb, a.Fc);
  }
  e.Ri = function (a) {
    var b = this.S;
    b = ye(he(), b);
    for (var c = 0; c < b; ) a.ad(this.ic(c), this.Gd(c)), (c = (1 + c) | 0);
    b = this.Qa;
    b = ye(he(), b);
    for (c = 0; c < b; ) this.Yd(c).Ri(a), (c = (1 + c) | 0);
  };
  e.zk = function () {
    return Fk(this);
  };
  e.Bk = function (a, b) {
    return Bk(this, a, b);
  };
  e.Qk = function (a, b, c, d) {
    return Lj(this, a, b, c, d);
  };
  e.Ml = function (a, b, c, d) {
    return Gj(this, a, b, c, d);
  };
  e.$classData = v(
    { xp: 0 },
    !1,
    "scala.collection.immutable.BitmapIndexedSetNode",
    { xp: 1, pq: 1, Dj: 1, b: 1 }
  );
  function zk(a, b, c) {
    this.Rg = a;
    this.Ke = b;
    this.Qb = c;
    yc();
    if (!(2 <= this.Qb.n())) throw rd("requirement failed");
  }
  zk.prototype = new Xh();
  zk.prototype.constructor = zk;
  e = zk.prototype;
  e.Cg = function (a, b, c) {
    return this.Ke === c ? Gk(this.Qb, a) : !1;
  };
  e.Ml = function (a, b, c, d) {
    return this.Cg(a, b, c, d) ? this : new zk(b, c, this.Qb.hc(a));
  };
  e.Qk = function (a, b, c, d) {
    if (this.Cg(a, b, c, d)) {
      d = Hk(this.Qb, new E(((h, k) => (l) => L(M(), l, k))(this, a)), !0);
      if (1 === d.n()) {
        a = we(P(), ve(P(), c, 0));
        d = [d.t(0)];
        var f = B(new C(), d);
        De();
        d = f.n();
        d = new r(d);
        f = new Mj(f);
        f = new yk(f);
        for (var g = 0; f.m(); ) (d.a[g] = f.k()), (g = (1 + g) | 0);
        return new Ce(a, 0, d, new t(new Int32Array([b])), 1, c);
      }
      return new zk(b, c, d);
    }
    return this;
  };
  e.Ti = function () {
    return !1;
  };
  e.Pk = function () {
    return 0;
  };
  e.Yd = function () {
    throw og(new pg(), "No sub-nodes present in hash-collision leaf node.");
  };
  e.Ui = function () {
    return !0;
  };
  e.bj = function () {
    return this.Qb.n();
  };
  e.ic = function (a) {
    return this.Qb.t(a);
  };
  e.Gd = function () {
    return this.Rg;
  };
  e.Xa = function () {
    return this.Qb.n();
  };
  e.O = function (a) {
    for (var b = this.Qb.i(); b.m(); ) a.l(b.k());
  };
  e.Cd = function () {
    return ba(this.Qb.n(), this.Ke);
  };
  e.Bk = function (a, b) {
    b = Hk(this.Qb, a, b);
    a = b.n();
    if (0 === a) return Fe().ig;
    if (1 === a) {
      a = we(P(), ve(P(), this.Ke, 0));
      b = [b.u()];
      var c = B(new C(), b);
      De();
      b = c.n();
      b = new r(b);
      c = new Mj(c);
      c = new yk(c);
      for (var d = 0; c.m(); ) (b.a[d] = c.k()), (d = (1 + d) | 0);
      return new Ce(a, 0, b, new t(new Int32Array([this.Rg])), 1, this.Ke);
    }
    return b.n() === this.Qb.n() ? this : new zk(this.Rg, this.Ke, b);
  };
  e.y = function (a) {
    if (a instanceof zk) {
      if (this === a) return !0;
      if (this.Ke === a.Ke && this.Qb.n() === a.Qb.n()) {
        a = a.Qb;
        for (var b = !0, c = this.Qb.i(); b && c.m(); )
          (b = c.k()), (b = Gk(a, b));
        return b;
      }
    }
    return !1;
  };
  e.H = function () {
    throw Ld("Trie nodes do not support hashing.");
  };
  e.Ri = function (a) {
    for (var b = this.Qb.i(); b.m(); ) {
      var c = b.k();
      a.ad(c, this.Rg);
    }
  };
  e.zk = function () {
    return new zk(this.Rg, this.Ke, this.Qb);
  };
  e.$classData = v(
    { yp: 0 },
    !1,
    "scala.collection.immutable.HashCollisionSetNode",
    { yp: 1, pq: 1, Dj: 1, b: 1 }
  );
  function Ik() {
    this.bg = null;
    Jk = this;
    var a = Fe();
    this.bg = new Kk(a.ig);
  }
  Ik.prototype = new q();
  Ik.prototype.constructor = Ik;
  Ik.prototype.X = function () {
    return new Lk();
  };
  Ik.prototype.ga = function (a) {
    return a instanceof Kk ? a : 0 === a.v() ? this.bg : Mk(Nk(new Lk(), a));
  };
  Ik.prototype.Fb = function () {
    return this.bg;
  };
  Ik.prototype.$classData = v(
    { Ap: 0 },
    !1,
    "scala.collection.immutable.HashSet$",
    { Ap: 1, b: 1, Hb: 1, c: 1 }
  );
  var Jk;
  function Ok() {
    Jk || (Jk = new Ik());
    return Jk;
  }
  function Pk(a, b) {
    this.Np = a;
    this.Op = b;
  }
  Pk.prototype = new q();
  Pk.prototype.constructor = Pk;
  Pk.prototype.u = function () {
    return this.Np;
  };
  Pk.prototype.gb = function () {
    return this.Op;
  };
  Pk.prototype.$classData = v(
    { Mp: 0 },
    !1,
    "scala.collection.immutable.LazyList$State$Cons",
    { Mp: 1, b: 1, Lp: 1, c: 1 }
  );
  function Qk() {}
  Qk.prototype = new q();
  Qk.prototype.constructor = Qk;
  Qk.prototype.Gg = function () {
    throw Th(new Uh(), "head of empty lazy list");
  };
  Qk.prototype.gb = function () {
    throw Ld("tail of empty lazy list");
  };
  Qk.prototype.u = function () {
    this.Gg();
  };
  Qk.prototype.$classData = v(
    { Pp: 0 },
    !1,
    "scala.collection.immutable.LazyList$State$Empty$",
    { Pp: 1, b: 1, Lp: 1, c: 1 }
  );
  var Rk;
  function Sk() {
    Rk || (Rk = new Qk());
    return Rk;
  }
  function Tk(a, b) {
    this.Oh = null;
    this.Oh = Uk(a, b);
  }
  Tk.prototype = new Nh();
  Tk.prototype.constructor = Tk;
  e = Tk.prototype;
  e.Tf = function (a) {
    return this.Oh.Tf(a);
  };
  e.O = function (a) {
    this.Oh.O(a);
  };
  e.Vd = function (a) {
    return new Tk(this.Oh, a);
  };
  e.R = function (a) {
    return this.Tf(a);
  };
  e.$classData = v(
    { Qp: 0 },
    !1,
    "scala.collection.immutable.LazyList$WithFilter",
    { Qp: 1, ll: 1, b: 1, c: 1 }
  );
  function Qi() {}
  Qi.prototype = new q();
  Qi.prototype.constructor = Qi;
  Qi.prototype.$classData = v(
    { Tp: 0 },
    !1,
    "scala.collection.immutable.Map$",
    { Tp: 1, b: 1, Gs: 1, c: 1 }
  );
  var Pi;
  function Vk() {}
  Vk.prototype = new q();
  Vk.prototype.constructor = Vk;
  function Bc(a) {
    return a && a.$classData && a.$classData.Nb.Ks
      ? Wk(Xk(new Yk(), a))
      : 0 === a.v()
      ? Zk()
      : a && a.$classData && a.$classData.Nb.hg
      ? a
      : Wk(Xk(new Yk(), a));
  }
  Vk.prototype.X = function () {
    return new Yk();
  };
  Vk.prototype.ga = function (a) {
    return Bc(a);
  };
  Vk.prototype.Fb = function () {
    return Zk();
  };
  Vk.prototype.$classData = v(
    { dq: 0 },
    !1,
    "scala.collection.immutable.Set$",
    { dq: 1, b: 1, Hb: 1, c: 1 }
  );
  var $k;
  function Ri() {
    $k || ($k = new Vk());
    return $k;
  }
  function al(a) {
    if (!a.Xg) {
      var b = bl(a.yl, a.xq, !1);
      a.yl = null;
      a.Yg = b;
      a.Xg = !0;
    }
    return a.Yg;
  }
  function cl(a, b) {
    this.Yg = null;
    this.Xg = !1;
    this.xq = b;
    this.yl = a;
  }
  cl.prototype = new Nh();
  cl.prototype.constructor = cl;
  cl.prototype.O = function (a) {
    (this.Xg ? this.Yg : al(this)).O(a);
  };
  cl.prototype.Vd = function (a) {
    return new cl(this.Xg ? this.Yg : al(this), a);
  };
  cl.prototype.R = function (a) {
    return dl(this.Xg ? this.Yg : al(this), a);
  };
  cl.prototype.$classData = v(
    { wq: 0 },
    !1,
    "scala.collection.immutable.Stream$WithFilter",
    { wq: 1, ll: 1, b: 1, c: 1 }
  );
  function el() {}
  el.prototype = new q();
  el.prototype.constructor = el;
  el.prototype.X = function () {
    return new fl(16, 0.75);
  };
  el.prototype.Fb = function () {
    var a = new gl();
    hl(a, 16, 0.75);
    return a;
  };
  el.prototype.ga = function (a) {
    var b = a.v();
    return il(hl(new gl(), 0 < b ? Ja(((1 + b) | 0) / 0.75) : 16, 0.75), a);
  };
  el.prototype.$classData = v(
    { hr: 0 },
    !1,
    "scala.collection.mutable.HashSet$",
    { hr: 1, b: 1, Hb: 1, c: 1 }
  );
  var jl;
  function kl() {
    jl || (jl = new el());
    return jl;
  }
  function Hf() {}
  Hf.prototype = new q();
  Hf.prototype.constructor = Hf;
  Hf.prototype.$classData = v({ Dn: 0 }, !1, "scala.math.Equiv$", {
    Dn: 1,
    b: 1,
    js: 1,
    c: 1,
  });
  var Gf;
  function Pf() {}
  Pf.prototype = new q();
  Pf.prototype.constructor = Pf;
  Pf.prototype.$classData = v({ Jn: 0 }, !1, "scala.math.Ordering$", {
    Jn: 1,
    b: 1,
    ks: 1,
    c: 1,
  });
  var Of;
  function Ti() {}
  Ti.prototype = new q();
  Ti.prototype.constructor = Ti;
  Ti.prototype.z = function () {
    return "\x3c?\x3e";
  };
  Ti.prototype.$classData = v({ ao: 0 }, !1, "scala.reflect.NoManifest$", {
    ao: 1,
    b: 1,
    Sc: 1,
    c: 1,
  });
  var Si,
    li = v({ Or: 0 }, !1, "scala.runtime.Nothing$", {
      Or: 1,
      fc: 1,
      b: 1,
      c: 1,
    });
  function H(a) {
    this.Dr = a;
  }
  H.prototype = new vi();
  H.prototype.constructor = H;
  function Zd(a) {
    return (0, a.Dr)();
  }
  H.prototype.$classData = v(
    { Cr: 0 },
    !1,
    "scala.scalajs.runtime.AnonFunction0",
    { Cr: 1, Rs: 1, b: 1, Vr: 1 }
  );
  function E(a) {
    this.Fr = a;
  }
  E.prototype = new xi();
  E.prototype.constructor = E;
  E.prototype.l = function (a) {
    return (0, this.Fr)(a);
  };
  E.prototype.$classData = v(
    { Er: 0 },
    !1,
    "scala.scalajs.runtime.AnonFunction1",
    { Er: 1, Ss: 1, b: 1, N: 1 }
  );
  function Sd(a) {
    this.Hr = a;
  }
  Sd.prototype = new zi();
  Sd.prototype.constructor = Sd;
  Sd.prototype.ad = function (a, b) {
    return (0, this.Hr)(a, b);
  };
  Sd.prototype.$classData = v(
    { Gr: 0 },
    !1,
    "scala.scalajs.runtime.AnonFunction2",
    { Gr: 1, ng: 1, b: 1, Hf: 1 }
  );
  function ll() {
    this.Cb = null;
    var a = new Ng();
    Sg || (Sg = new Rg());
    var b = Qg();
    var c = Qg();
    b = new n(c, b);
    c = -554899859 ^ b.Fa;
    a.Yi = (c >>> 24) | 0 | ((65535 & (5 ^ b.Ea)) << 8);
    a.Zi = 16777215 & c;
    a.pn = !1;
    this.Cb = a;
  }
  ll.prototype = new Ei();
  ll.prototype.constructor = ll;
  ll.prototype.$classData = v({ fo: 0 }, !1, "scala.util.Random$", {
    fo: 1,
    zs: 1,
    b: 1,
    c: 1,
  });
  var ml;
  function nl() {
    ml || (ml = new ll());
    return ml;
  }
  function kc() {}
  kc.prototype = new zi();
  kc.prototype.constructor = kc;
  kc.prototype.z = function () {
    return "Asteroids";
  };
  kc.prototype.ad = function (a, b) {
    return new ol(a, b);
  };
  kc.prototype.$classData = v({ Pl: 0 }, !1, "example.Asteroids$", {
    Pl: 1,
    ng: 1,
    b: 1,
    Hf: 1,
    c: 1,
  });
  var jc;
  function mc() {}
  mc.prototype = new zi();
  mc.prototype.constructor = mc;
  mc.prototype.z = function () {
    return "AstroLander";
  };
  mc.prototype.ad = function (a, b) {
    return new pl(a, b);
  };
  mc.prototype.$classData = v({ Ul: 0 }, !1, "example.AstroLander$", {
    Ul: 1,
    ng: 1,
    b: 1,
    Hf: 1,
    c: 1,
  });
  var lc;
  function ql(a, b) {
    this.zc = a;
    this.tg = b;
  }
  ql.prototype = new q();
  ql.prototype.constructor = ql;
  e = ql.prototype;
  e.ib = function () {
    return "Brick";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.zc;
      case 1:
        return this.tg;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof ql) {
      var b = this.zc,
        c = a.zc;
      return (null === b ? null === c : b.y(c)) ? this.tg === a.tg : !1;
    }
    return !1;
  };
  e.$classData = v({ Vl: 0 }, !1, "example.Brick", {
    Vl: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function sc() {}
  sc.prototype = new zi();
  sc.prototype.constructor = sc;
  sc.prototype.z = function () {
    return "BrickBreaker";
  };
  sc.prototype.ad = function (a, b) {
    return new rl(a, b);
  };
  sc.prototype.$classData = v({ Xl: 0 }, !1, "example.BrickBreaker$", {
    Xl: 1,
    ng: 1,
    b: 1,
    Hf: 1,
    c: 1,
  });
  var rc;
  function A(a, b) {
    this.h = a;
    this.g = b;
  }
  A.prototype = new q();
  A.prototype.constructor = A;
  function z(a, b) {
    return new A(a.h + b.h, a.g + b.g);
  }
  function rb(a, b) {
    return new A(a.h - b.h, a.g - b.g);
  }
  function ob(a, b) {
    return new A(a.h % b.h, a.g % b.g);
  }
  function ub(a, b) {
    return new A(a.h / b, a.g / b);
  }
  function sb(a, b) {
    return new A(a.h * b, a.g * b);
  }
  function sl(a, b) {
    return a.h * b.h + a.g * b.g;
  }
  function vb(a) {
    return +Math.sqrt(tl(a));
  }
  function tl(a) {
    return a.h * a.h + a.g * a.g;
  }
  function qb(a, b, c, d) {
    return a.h >= +Math.min(b.h, c.h) - d.h &&
      a.h < +Math.max(b.h, c.h) + d.g &&
      a.g >= +Math.min(b.g, c.g) - d.h
      ? a.g < +Math.max(b.g, c.g) + d.g
      : !1;
  }
  function yb(a, b) {
    var c = +Math.cos(b);
    b = +Math.sin(b);
    return new A(c * a.h - b * a.g, b * a.h + c * a.g);
  }
  e = A.prototype;
  e.ib = function () {
    return "Point";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.h;
      case 1:
        return this.g;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    var a = Ca("Point");
    a = X().p(-889275714, a);
    var b = this.h;
    b = lg(X(), b);
    a = X().p(a, b);
    b = this.g;
    b = lg(X(), b);
    a = X().p(a, b);
    return X().L(a, 2);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof A
      ? this.h === a.h && this.g === a.g
      : !1;
  };
  e.$classData = v({ em: 0 }, !1, "example.Point", {
    em: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function qc() {}
  qc.prototype = new zi();
  qc.prototype.constructor = qc;
  qc.prototype.z = function () {
    return "Pong";
  };
  qc.prototype.ad = function (a, b) {
    return new ul(a, b);
  };
  qc.prototype.$classData = v({ gm: 0 }, !1, "example.Pong$", {
    gm: 1,
    ng: 1,
    b: 1,
    Hf: 1,
    c: 1,
  });
  var pc;
  function oc() {}
  oc.prototype = new zi();
  oc.prototype.constructor = oc;
  oc.prototype.z = function () {
    return "Snake";
  };
  oc.prototype.ad = function (a, b) {
    return new vl(a, b);
  };
  oc.prototype.$classData = v({ jm: 0 }, !1, "example.Snake$", {
    jm: 1,
    ng: 1,
    b: 1,
    Hf: 1,
    c: 1,
  });
  var nc;
  function uc() {}
  uc.prototype = new zi();
  uc.prototype.constructor = uc;
  uc.prototype.z = function () {
    return "Tetris";
  };
  uc.prototype.ad = function (a, b) {
    return new wl(a, b);
  };
  uc.prototype.$classData = v({ mm: 0 }, !1, "example.Tetris$", {
    mm: 1,
    ng: 1,
    b: 1,
    Hf: 1,
    c: 1,
  });
  var tc;
  function xl() {}
  xl.prototype = new q();
  xl.prototype.constructor = xl;
  function yl() {}
  yl.prototype = xl.prototype;
  class zl extends Ji {
    constructor() {
      super();
      oe(this, "assertion failed: Array.length must be power of 2");
    }
  }
  zl.prototype.$classData = v({ Em: 0 }, !1, "java.lang.AssertionError", {
    Em: 1,
    Yr: 1,
    fc: 1,
    b: 1,
    c: 1,
  });
  var na = v(
    { Hm: 0 },
    !1,
    "java.lang.Byte",
    { Hm: 1, Ig: 1, b: 1, c: 1, Ee: 1 },
    (a) => "number" === typeof a && (a << 24) >> 24 === a && 1 / a !== 1 / -0
  );
  function Da(a) {
    a = +a;
    return Oc(Pc(), a);
  }
  var ra = v(
      { Lm: 0 },
      !1,
      "java.lang.Float",
      { Lm: 1, Ig: 1, b: 1, c: 1, Ee: 1 },
      (a) => "number" === typeof a
    ),
    pa = v(
      { Om: 0 },
      !1,
      "java.lang.Integer",
      { Om: 1, Ig: 1, b: 1, c: 1, Ee: 1 },
      (a) => ma(a)
    ),
    ua = v(
      { Tm: 0 },
      !1,
      "java.lang.Long",
      { Tm: 1, Ig: 1, b: 1, c: 1, Ee: 1 },
      (a) => a instanceof n
    );
  class Al extends Ki {}
  Al.prototype.$classData = v({ sc: 0 }, !1, "java.lang.RuntimeException", {
    sc: 1,
    jc: 1,
    fc: 1,
    b: 1,
    c: 1,
  });
  var oa = v(
    { Xm: 0 },
    !1,
    "java.lang.Short",
    { Xm: 1, Ig: 1, b: 1, c: 1, Ee: 1 },
    (a) => "number" === typeof a && (a << 16) >> 16 === a && 1 / a !== 1 / -0
  );
  function Ca(a) {
    for (var b = 0, c = 1, d = (-1 + (a.length | 0)) | 0; 0 <= d; )
      (b = (b + ba(65535 & (a.charCodeAt(d) | 0), c)) | 0),
        (c = ba(31, c)),
        (d = (-1 + d) | 0);
    return b;
  }
  var la = v(
    { wm: 0 },
    !1,
    "java.lang.String",
    { wm: 1, b: 1, c: 1, Ee: 1, Ek: 1 },
    (a) => "string" === typeof a
  );
  function Bl(a) {
    a.o = "";
    return a;
  }
  function Cl(a) {
    var b = new Dl();
    Bl(b);
    if (null === a) throw new fg();
    b.o = a;
    return b;
  }
  function Dl() {
    this.o = null;
  }
  Dl.prototype = new q();
  Dl.prototype.constructor = Dl;
  function El(a, b) {
    Lg || (Lg = new Kg());
    var c = (0 + b.a.length) | 0;
    if (0 > c || c > b.a.length) throw ((a = new Fl()), oe(a, null), a);
    for (var d = "", f = 0; f !== c; )
      (d = "" + d + String.fromCharCode(b.a[f])), (f = (1 + f) | 0);
    a.o = "" + a.o + d;
  }
  Dl.prototype.z = function () {
    return this.o;
  };
  Dl.prototype.n = function () {
    return this.o.length | 0;
  };
  function Gl(a, b) {
    return 65535 & (a.o.charCodeAt(b) | 0);
  }
  Dl.prototype.$classData = v({ Zm: 0 }, !1, "java.lang.StringBuilder", {
    Zm: 1,
    b: 1,
    Ek: 1,
    Bm: 1,
    c: 1,
  });
  function n(a, b) {
    this.Fa = a;
    this.Ea = b;
  }
  n.prototype = new Jg();
  n.prototype.constructor = n;
  n.prototype.y = function (a) {
    return a instanceof n ? this.Fa === a.Fa && this.Ea === a.Ea : !1;
  };
  n.prototype.H = function () {
    return this.Fa ^ this.Ea;
  };
  n.prototype.z = function () {
    var a = ag(),
      b = this.Fa,
      c = this.Ea;
    return c === b >> 31
      ? "" + b
      : 0 > c
      ? "-" + Tg(a, -b | 0, 0 !== b ? ~c : -c | 0)
      : Tg(a, b, c);
  };
  n.prototype.$classData = v(
    { um: 0 },
    !1,
    "org.scalajs.linker.runtime.RuntimeLong",
    { um: 1, Ig: 1, b: 1, c: 1, Ee: 1 }
  );
  function Hl() {}
  Hl.prototype = new Mi();
  Hl.prototype.constructor = Hl;
  function Il() {}
  Il.prototype = Hl.prototype;
  function Jl() {}
  Jl.prototype = new q();
  Jl.prototype.constructor = Jl;
  function Kl() {}
  e = Kl.prototype = Jl.prototype;
  e.i = function () {
    return this;
  };
  e.f = function () {
    return !this.m();
  };
  e.Dd = function (a) {
    return new Ll(this).Dd(a);
  };
  e.Ed = function (a) {
    return qj(this, a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.Fe = function (a) {
    return Kd(this, a);
  };
  e.Ob = function (a, b, c) {
    return Md(this, a, b, c);
  };
  e.le = function (a, b, c, d) {
    return Vd(this, a, b, c, d);
  };
  e.v = function () {
    return -1;
  };
  function uf() {
    this.pe = null;
    Ml || (Ml = new Nl());
    this.pe = Ml;
  }
  uf.prototype = new aj();
  uf.prototype.constructor = uf;
  uf.prototype.$classData = v({ Io: 0 }, !1, "scala.collection.Iterable$", {
    Io: 1,
    Xk: 1,
    b: 1,
    Hb: 1,
    c: 1,
  });
  var tf;
  function Ol() {
    this.hd = null;
  }
  Ol.prototype = new q();
  Ol.prototype.constructor = Ol;
  function Pl() {}
  Pl.prototype = Ol.prototype;
  function zb(a, b) {
    return a.hd.od(b);
  }
  e = Ol.prototype;
  e.Ce = function (a) {
    return this.hd.ga(a);
  };
  e.X = function () {
    return this.hd.X();
  };
  e.ga = function (a) {
    return this.Ce(a);
  };
  e.Fb = function () {
    return this.hd.Fb();
  };
  e.od = function (a) {
    return zb(this, a);
  };
  function Ql(a, b) {
    return a.De(new E(((c, d) => (f) => L(M(), d, f))(a, b)), 0);
  }
  function Gk(a, b) {
    return a.Qf(new E(((c, d) => (f) => L(M(), f, d))(a, b)));
  }
  function Rl(a, b) {
    var c = a.v();
    if (-1 !== c) {
      var d = b.v();
      c = -1 !== d && c !== d;
    } else c = !1;
    if (c) return !1;
    a: {
      a = a.i();
      for (b = b.i(); a.m() && b.m(); )
        if (!L(M(), a.k(), b.k())) {
          b = !1;
          break a;
        }
      b = a.m() === b.m();
    }
    return b;
  }
  function Sl(a, b) {
    var c = a.ha().X(),
      d = a.ha().X();
    a.O(
      new E(
        ((f, g, h, k) => (l) => {
          l = g.l(l);
          h.Oa(l.Ac());
          return k.Oa(l.Bc());
        })(a, b, c, d)
      )
    );
    return kj(new lj(), c.Ua(), d.Ua());
  }
  function Tl(a, b) {
    var c = a.ha().X();
    for (a = a.i(); a.m(); ) {
      var d = b.l(a.k());
      c.Oa(d);
    }
    return c.Ua();
  }
  function Ul(a, b) {
    var c = a.ha().X();
    for (a = a.i(); a.m(); ) {
      var d = b.l(a.k());
      c.qb(d);
    }
    return c.Ua();
  }
  function Vl(a, b) {
    var c = a.ha().X();
    for (a = a.i(); a.m(); ) {
      var d = b.l(a.k());
      c.qb(d);
    }
    return c.Ua();
  }
  function Wl(a, b) {
    var c = a.ha().X();
    a = a.i();
    for (b = b.i(); a.m() && b.m(); ) {
      var d = kj(new lj(), a.k(), b.k());
      c.Oa(d);
    }
    return c.Ua();
  }
  function Xl(a, b) {
    var c = a.aj();
    for (a = a.i(); a.m(); ) {
      var d = a.k();
      !1 !== !!b.l(d) && c.Oa(d);
    }
    return c.Ua();
  }
  function Nl() {
    this.pe = null;
    this.pe = zc();
  }
  Nl.prototype = new aj();
  Nl.prototype.constructor = Nl;
  Nl.prototype.ga = function (a) {
    return ff(a) ? a : $i.prototype.ga.call(this, a);
  };
  Nl.prototype.$classData = v(
    { Fp: 0 },
    !1,
    "scala.collection.immutable.Iterable$",
    { Fp: 1, Xk: 1, b: 1, Hb: 1, c: 1 }
  );
  var Ml;
  function Yl() {
    this.Le = null;
    Zl = this;
    this.Le = $l(new am(new H((() => () => Sk())(this))));
  }
  Yl.prototype = new q();
  Yl.prototype.constructor = Yl;
  e = Yl.prototype;
  e.od = function (a) {
    return yj(this, a);
  };
  function bm(a, b, c, d) {
    return new am(
      new H(
        ((f, g, h, k) => () => {
          for (var l = null, p = !1, u = g.fa; !p && !u.f(); )
            (l = Y(u).u()), (p = !!h.l(l) !== k), (u = Y(u).gb()), (g.fa = u);
          return p ? (Bf(), (u = bm(Bf(), u, h, k)), new Pk(l, u)) : Sk();
        })(a, new Ci(b), c, d)
      )
    );
  }
  function cm(a, b, c) {
    return new am(
      new H(
        ((d, f, g) => () => {
          for (
            var h = new Ci(null), k = !1, l = new Ci(f.fa);
            !k && !l.fa.f();

          )
            (h.fa = g.l(Y(l.fa).u()).i()),
              (k = h.fa.m()),
              k || ((l.fa = Y(l.fa).gb()), (f.fa = l.fa));
          return k
            ? ((k = h.fa.k()),
              (l.fa = Y(l.fa).gb()),
              (f.fa = l.fa),
              Bf(),
              Bf(),
              new Pk(
                k,
                new am(
                  new H(
                    ((p, u, y, D) => () =>
                      dm(
                        Bf(),
                        u.fa,
                        new H(
                          ((K, J, Z) => () => Y(cm(Bf(), J.fa, Z)))(p, y, D)
                        )
                      ))(d, h, l, g)
                  )
                )
              ))
            : Sk();
        })(a, new Ci(b), c)
      )
    );
  }
  function em(a, b, c) {
    return new am(
      new H(
        ((d, f, g) => () => {
          for (var h = f.fa, k = g.Rj; 0 < k && !h.f(); )
            (h = Y(h).gb()), (f.fa = h), (k = (-1 + k) | 0), (g.Rj = k);
          return Y(h);
        })(a, new Ci(b), new Bi(c))
      )
    );
  }
  function yj(a, b) {
    return b instanceof am
      ? b
      : 0 === b.v()
      ? a.Le
      : new am(new H(((c, d) => () => fm(Bf(), d.i()))(a, b)));
  }
  function dm(a, b, c) {
    if (b.m()) {
      var d = b.k();
      return new Pk(
        d,
        new am(new H(((f, g, h) => () => dm(Bf(), g, h))(a, b, c)))
      );
    }
    return Zd(c);
  }
  function fm(a, b) {
    if (b.m()) {
      var c = b.k();
      return new Pk(c, new am(new H(((d, f) => () => fm(Bf(), f))(a, b))));
    }
    return Sk();
  }
  e.X = function () {
    return new gm();
  };
  e.Fb = function () {
    return this.Le;
  };
  e.ga = function (a) {
    return yj(this, a);
  };
  e.$classData = v({ Hp: 0 }, !1, "scala.collection.immutable.LazyList$", {
    Hp: 1,
    b: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var Zl;
  function Bf() {
    Zl || (Zl = new Yl());
    return Zl;
  }
  function hm() {}
  hm.prototype = new q();
  hm.prototype.constructor = hm;
  e = hm.prototype;
  e.od = function (a) {
    return im(this, a);
  };
  function im(a, b) {
    return b instanceof jm ? b : km(a, b.i());
  }
  function km(a, b) {
    return b.m()
      ? new lm(b.k(), new H(((c, d) => () => km(Af(), d))(a, b)))
      : mm();
  }
  e.X = function () {
    var a = new Bj();
    return new Yi(a, new E((() => (b) => im(Af(), b))(this)));
  };
  function nm(a, b, c, d) {
    var f = b.u();
    return new lm(
      f,
      new H(((g, h, k, l) => () => bl(h.w(), k, l))(a, b, c, d))
    );
  }
  e.Fb = function () {
    return mm();
  };
  e.ga = function (a) {
    return im(this, a);
  };
  e.$classData = v({ sq: 0 }, !1, "scala.collection.immutable.Stream$", {
    sq: 1,
    b: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var om;
  function Af() {
    om || (om = new hm());
    return om;
  }
  function pm() {
    qm = this;
  }
  pm.prototype = new q();
  pm.prototype.constructor = pm;
  function Fm(a, b) {
    a = a.X();
    var c = b.v();
    0 <= c && a.cc(c);
    a.qb(b);
    return a.Ua();
  }
  pm.prototype.X = function () {
    var a = Ud();
    return new Yi(a, new E((() => (b) => new Gm(b))(this)));
  };
  pm.prototype.$classData = v(
    { Kq: 0 },
    !1,
    "scala.collection.immutable.WrappedString$",
    { Kq: 1, b: 1, Hs: 1, Fs: 1, c: 1 }
  );
  var qm;
  function Hm() {
    qm || (qm = new pm());
    return qm;
  }
  function Yi(a, b) {
    this.Gl = this.$g = null;
    if (null === a) throw nb(null);
    this.$g = a;
    this.Gl = b;
  }
  Yi.prototype = new q();
  Yi.prototype.constructor = Yi;
  e = Yi.prototype;
  e.cc = function (a) {
    this.$g.cc(a);
  };
  e.Ua = function () {
    return this.Gl.l(this.$g.Ua());
  };
  e.qb = function (a) {
    this.$g.qb(a);
    return this;
  };
  e.Oa = function (a) {
    this.$g.Oa(a);
    return this;
  };
  e.$classData = v({ fr: 0 }, !1, "scala.collection.mutable.Builder$$anon$1", {
    fr: 1,
    b: 1,
    Xc: 1,
    qc: 1,
    pc: 1,
  });
  function Im(a, b) {
    a.ee = b;
    return a;
  }
  function Jm() {
    this.ee = null;
  }
  Jm.prototype = new q();
  Jm.prototype.constructor = Jm;
  function Km() {}
  e = Km.prototype = Jm.prototype;
  e.cc = function () {};
  e.qb = function (a) {
    this.ee.qb(a);
    return this;
  };
  e.Oa = function (a) {
    this.ee.Oa(a);
    return this;
  };
  e.Ua = function () {
    return this.ee;
  };
  e.$classData = v({ Vh: 0 }, !1, "scala.collection.mutable.GrowableBuilder", {
    Vh: 1,
    b: 1,
    Xc: 1,
    qc: 1,
    pc: 1,
  });
  function Lm() {
    this.pe = null;
    this.pe = kl();
  }
  Lm.prototype = new aj();
  Lm.prototype.constructor = Lm;
  Lm.prototype.$classData = v({ vr: 0 }, !1, "scala.collection.mutable.Set$", {
    vr: 1,
    Xk: 1,
    b: 1,
    Hb: 1,
    c: 1,
  });
  var Mm;
  function Yb() {
    Mm || (Mm = new Lm());
    return Mm;
  }
  function Nm(a, b) {
    this.If = a;
    this.bf = b;
  }
  Nm.prototype = new q();
  Nm.prototype.constructor = Nm;
  e = Nm.prototype;
  e.ib = function () {
    return "Apple";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.If;
      case 1:
        return this.bf;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    var a = Ca("Apple");
    a = X().p(-889275714, a);
    var b = this.If;
    a = X().p(a, b);
    b = this.bf;
    a = X().p(a, b);
    return X().L(a, 2);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof Nm
      ? this.If === a.If && this.bf === a.bf
      : !1;
  };
  e.$classData = v({ Nl: 0 }, !1, "example.Apple", {
    Nl: 1,
    b: 1,
    kh: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function ol(a, b) {
    this.ie = null;
    this.he = !1;
    this.Uj = this.fi = this.Kf = this.Ad = null;
    this.gi = 0;
    this.ei = null;
    this.dc = 0;
    this.Ad = a;
    this.Kf = b;
    Nb(this);
    this.fi = xb().jb.hd.Fb();
    this.dc = ((1 | this.dc) << 24) >> 24;
    this.Uj = new wb(this, ub(a, 2), new A(0, 0), 0);
    this.dc = ((2 | this.dc) << 24) >> 24;
    this.gi = 0;
    this.dc = ((4 | this.dc) << 24) >> 24;
    a = xb().jb;
    this.ei = Kh(
      a,
      10,
      new H(
        ((c) => () => {
          var d = nl().Cb;
          0 !== Og(d, 1)
            ? ((d = nl()), (d = new A(0, Pg(d.Cb, Ja(c.Ad.g)))))
            : ((d = nl()), (d = new A(Pg(d.Cb, Ja(c.Ad.g)), 0)));
          var f = Pg(nl().Cb, 5),
            g = nl();
          return new mb(c, 3, d, rb(new A(f, Pg(g.Cb, 5)), new A(2.5, 2.5)));
        })(this)
      )
    );
    this.dc = ((8 | this.dc) << 24) >> 24;
  }
  ol.prototype = new Qb();
  ol.prototype.constructor = ol;
  function Om(a) {
    if (0 === ((1 & a.dc) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 8"
      );
    return a.fi;
  }
  function Pm(a, b) {
    a.fi = b;
    a.dc = ((1 | a.dc) << 24) >> 24;
  }
  function Qm(a) {
    if (0 === ((2 & a.dc) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 9"
      );
    return a.Uj;
  }
  e = ol.prototype;
  e.Eg = function () {
    if (0 === ((4 & this.dc) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 10"
      );
    return this.gi;
  };
  e.Si = function (a) {
    this.gi = a;
    this.dc = ((4 | this.dc) << 24) >> 24;
  };
  function Rm(a) {
    if (0 === ((8 & a.dc) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 11"
      );
    return a.ei;
  }
  function Sm(a, b) {
    a.ei = b;
    a.dc = ((8 | a.dc) << 24) >> 24;
  }
  e.pg = function (a) {
    this.Si((1 + this.Eg()) | 0);
    Rm(this).O(
      new E(
        (() => (f) => {
          f.$i();
        })(this)
      )
    );
    Om(this).O(
      new E(
        (() => (f) => {
          f.$i();
        })(this)
      )
    );
    Ab(Qm(this), a);
    if (a.F(32) && 10 > Om(this).n() && 0 === (this.Eg() % 2 | 0)) {
      a = Om(this);
      var b = new tb(
        this,
        Qm(this).zd,
        z(Qm(this).Jf, yb(new A(15, 0), Qm(this).Wd))
      );
      Pm(this, a.nd(b));
    }
    a = Om(this).Wb(
      new E(
        ((f) => (g) =>
          Rm(f)
            .Vd(new E(((h, k) => (l) => pb(l, k.cf))(f, g)))
            .R(
              new E(
                ((h, k) => (l) => {
                  var p =
                    1 === l.qg
                      ? xb().gj
                      : zb(xb().jb, B(new C(), [30, -30])).R(
                          new E(
                            ((u, y) => (D) =>
                              new mb(
                                u,
                                (-1 + y.qg) | 0,
                                y.yd,
                                yb(y.Tj, (3.141592653589793 * (D | 0)) / 180)
                              ))(h, l)
                          )
                        );
                  return kj(new lj(), kj(new lj(), l, k), p);
                })(f, g)
              )
            ))(this)
      )
    );
    b = xh();
    a = a.Ff(b.cj);
    if (null === a) throw new T(a);
    b = a.Ac();
    a = a.Bc();
    var c = b.R(new E((() => (f) => f.Ac())(this)));
    b = b.R(new E((() => (f) => f.Bc())(this)));
    c = Rm(this).Pb(new E(((f, g) => (h) => !g.F(h))(this, c)));
    var d = xh();
    a = a.Rf(d.cj);
    Sm(this, c.Pf(a));
    Pm(
      this,
      Om(this)
        .Pb(new E(((f, g) => (h) => !g.F(h))(this, b)))
        .Pb(
          new E(((f) => (g) => qb(g.cf, new A(0, 0), f.Ad, new A(0, 0)))(this))
        )
    );
    Rm(this).Qf(new E(((f) => (g) => pb(g, Qm(f).zd))(this)))
      ? (Sb(this, new Tm("Your ship hit an asteroid!")), Zd(this.Kf))
      : 0 === Rm(this).n() &&
        (Sb(this, new Tm("You successfully destroyed every asteroid!")),
        Zd(this.Kf));
  };
  e.cd = function (a) {
    var b = Lb(G());
    a.fillStyle = b;
    a.fillRect(0, 0, 800, 800);
    b = Eb(G());
    a.fillStyle = b;
    b = Eb(G());
    a.strokeStyle = b;
    Rm(this).O(
      new E(
        ((c, d) => (f) => {
          f.cd(d);
        })(this, a)
      )
    );
    Om(this).O(
      new E(
        ((c, d) => (f) => {
          f.cd(d);
        })(this, a)
      )
    );
    Qm(this).cd(a);
  };
  e.ib = function () {
    return "Asteroids";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.Ad;
      case 1:
        return this.Kf;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof ol) {
      var b = this.Ad,
        c = a.Ad;
      return (null === b ? null === c : b.y(c)) ? this.Kf === a.Kf : !1;
    }
    return !1;
  };
  e.$classData = v({ Ol: 0 }, !1, "example.Asteroids", {
    Ol: 1,
    ug: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function Um(a, b, c, d, f, g, h) {
    d = (3.141592653589793 * d) / 180;
    a = new Tb(a, f);
    b = [
      z(g, yb(new A(b, b), h - 3.9269908169872414)),
      z(g, yb(new A(15, 15), h - 3.9269908169872414 + d)),
      z(g, yb(new A(c, c), h - 3.9269908169872414)),
      z(g, yb(new A(15, 15), h - 3.9269908169872414 - d)),
      z(g, yb(new A(b, b), h - 3.9269908169872414)),
    ];
    Vb(a, B(new C(), b));
  }
  function Vm(a, b, c, d) {
    Um(a, 5, 25, 15, d, b, c);
    Um(a, 10, 20, 10, d, b, c);
  }
  function pl(a, b) {
    this.ie = null;
    this.he = !1;
    this.ii = this.hi = this.Vj = null;
    this.ji = this.Wj = 0;
    this.ki = null;
    this.Ya = 0;
    this.Xd = a;
    this.rg = b;
    Nb(this);
    var c = 450;
    xb();
    a = I();
    b = Pg(nl().Cb, 21);
    for (var d; (d = Pg(nl().Cb, 21)), d === b; );
    for (var f; (f = Pg(nl().Cb, 21)), f === b || f === d; );
    for (var g = 0; ; ) {
      var h = g;
      if (h !== ((1 + b) | 0))
        if (h === ((1 + d) | 0)) {
          var k = nl();
          c = c - Pg(k.Cb, 25) - 150;
        } else
          h === ((2 + f) | 0)
            ? ((k = nl()), (c = c - Pg(k.Cb, 25) + 150))
            : ((k = nl()), (c = c - Pg(k.Cb, 50) + 25));
      c > this.Xd.g && (c = Ja(2 * this.Xd.g - c));
      a = new Wm(new A(40 * h, c), a);
      if (21 === g) break;
      g = (1 + g) | 0;
    }
    b = a;
    for (a = I(); !b.f(); ) (d = b.u()), (a = new Wm(d, a)), (b = b.w());
    this.Vj = a;
    this.Ya = ((1 | this.Ya) << 24) >> 24;
    this.hi = new A(400, 25);
    this.Ya = ((2 | this.Ya) << 24) >> 24;
    this.ii = new A(0, 0);
    this.Ya = ((4 | this.Ya) << 24) >> 24;
    this.Wj = -1.5707963267948966;
    this.Ya = ((8 | this.Ya) << 24) >> 24;
    this.ji = 500;
    this.Ya = ((16 | this.Ya) << 24) >> 24;
    yc();
    a = I();
    this.ki = Bc(a);
    this.Ya = ((32 | this.Ya) << 24) >> 24;
  }
  pl.prototype = new Qb();
  pl.prototype.constructor = pl;
  function Xm(a) {
    if (0 === ((1 & a.Ya) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 7"
      );
    return a.Vj;
  }
  function Ym(a) {
    if (0 === ((2 & a.Ya) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 36"
      );
    return a.hi;
  }
  function Zm(a) {
    if (0 === ((4 & a.Ya) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 37"
      );
    return a.ii;
  }
  function $m(a, b) {
    a.ii = b;
    a.Ya = ((4 | a.Ya) << 24) >> 24;
  }
  function an(a) {
    if (0 === ((8 & a.Ya) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 38"
      );
    return a.Wj;
  }
  function bn(a) {
    if (0 === ((16 & a.Ya) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 39"
      );
    return a.ji;
  }
  function cn(a) {
    var b = xb().jb;
    a = [
      z(Ym(a), yb(new A(15, 0), an(a))),
      z(Ym(a), yb(new A(7, 0), an(a) + 2.2252947962927703)),
      z(Ym(a), yb(new A(7, 0), an(a) - 2.2252947962927703)),
    ];
    return zb(b, B(new C(), a));
  }
  e = pl.prototype;
  e.cd = function (a) {
    a.textAlign = "left";
    var b = Lb(G());
    a.fillStyle = b;
    a.fillRect(0, 0, this.Xd.h, this.Xd.g);
    b = 3 > vb(Zm(this)) ? Gb(G()) : Eb(G());
    a.fillStyle = b;
    a.fillText("Speed: " + Ja(10 * vb(Zm(this))) / 10, 20, 50);
    b = Gb(G());
    a.strokeStyle = b;
    b = bn(this);
    a.strokeRect(20, 60, (65 * (1 > b ? 1 : b)) / 500, 15);
    b = Eb(G());
    a.fillStyle = b;
    b = Eb(G());
    a.strokeStyle = b;
    a.strokeRect(20, 60, 65, 15);
    a.beginPath();
    a.moveTo(0, this.Xd.g);
    for (b = Xm(this); !b.f(); ) {
      var c = b.u();
      a.lineTo(c.h, c.g);
      b = b.w();
    }
    a.lineTo(this.Xd.h, this.Xd.g);
    a.fill();
    a.beginPath();
    a.moveTo(cn(this).dd().h, cn(this).dd().g);
    cn(this).R(
      new E(
        ((d, f) => (g) => {
          f.lineTo(g.h, g.g);
        })(this, a)
      )
    );
    a.fill();
    b = Fb(G());
    a.strokeStyle = b;
    0 < bn(this) &&
      (dn(this).F(37) && Vm(this, Ym(this), an(this) + 0.7853981633974483, a),
      dn(this).F(39) && Vm(this, Ym(this), an(this) - 0.7853981633974483, a),
      dn(this).F(40) && Vm(this, Ym(this), an(this), a));
  };
  function dn(a) {
    if (0 === ((32 & a.Ya) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 97"
      );
    return a.ki;
  }
  e.pg = function (a) {
    this.ki = a;
    this.Ya = ((32 | this.Ya) << 24) >> 24;
    if (0 < bn(this)) {
      a.F(37) &&
        $m(this, z(Zm(this), yb(new A(0.5, 0), an(this) + 0.7853981633974483)));
      a.F(39) &&
        $m(this, z(Zm(this), yb(new A(0.5, 0), an(this) - 0.7853981633974483)));
      a.F(40) && $m(this, z(Zm(this), yb(new A(0.5, 0), an(this))));
      var b = bn(this),
        c = xb().jb,
        d = [a.F(37), a.F(39), a.F(40)];
      a = 0;
      for (c = zb(c, B(new C(), d)).i(); c.m(); ) c.k() && (a = (1 + a) | 0);
      this.ji = (b - a) | 0;
      this.Ya = ((16 | this.Ya) << 24) >> 24;
    }
    $m(this, z(Zm(this), new A(0, 0.2)));
    this.hi = z(Ym(this), Zm(this));
    this.Ya = ((2 | this.Ya) << 24) >> 24;
    b = Xm(this);
    for (a = c = null; b !== I(); ) {
      b.u();
      d = 0;
      for (var f = Xm(this), g = -1; !f.f(); )
        f.u().h < Ym(this).h && (g = d), (f = f.w()), (d = (1 + d) | 0);
      d = g;
      -1 === d || 21 === d
        ? (d = Ob())
        : ((f = Xm(this)),
          (f = en(f, d)),
          (g = Xm(this)),
          (d = en(g, (1 + d) | 0)),
          ((Ym(this).h - f.h) / (d.h - f.h)) * (d.g - f.g) + f.g > Ym(this).g
            ? (d = Ob())
            : ((d = +Math.abs((d.g - f.g) / (d.h - f.h))),
              (f = Zm(this).h / Zm(this).g),
              (f = +Math.abs(f)),
              (d = new Tm(
                0.1 < d
                  ? new fn("landing area too steep")
                  : 1 < f
                  ? new fn("too much horizontal velocity")
                  : 3 < vb(Zm(this))
                  ? new fn("coming in too fast")
                  : gn()
              ))));
      for (d = d.i(); d.m(); )
        (f = new Wm(d.k(), I())), null === a ? (c = f) : (a.tc = f), (a = f);
      b = b.w();
    }
    b = (null === c ? I() : c).Dk();
    if (!b.f())
      if (((b = b.Fg()), gn() === b))
        Sb(this, new Tm("You have landed successfully.")), Zd(this.rg);
      else if (b instanceof fn)
        Sb(this, new Tm("You have crashed your lander: " + b.gh)), Zd(this.rg);
      else throw new T(b);
  };
  e.ib = function () {
    return "AstroLander";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.Xd;
      case 1:
        return this.rg;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof pl) {
      var b = this.Xd,
        c = a.Xd;
      return (null === b ? null === c : b.y(c)) ? this.rg === a.rg : !1;
    }
    return !1;
  };
  e.$classData = v({ Tl: 0 }, !1, "example.AstroLander", {
    Tl: 1,
    ug: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function rl(a, b) {
    this.ie = null;
    this.he = !1;
    this.Xj = 0;
    this.Yj = null;
    this.ni = this.$j = 0;
    this.pi = this.li = this.mi = null;
    this.qi = 0;
    this.Zj = this.oi = this.ak = null;
    this.K = 0;
    this.ec = a;
    this.sg = b;
    Nb(this);
    this.Xj = 175;
    this.K |= 1;
    this.Yj = new A(50, 15);
    this.K |= 2;
    this.$j = a.h - 2 * hn(this);
    this.K |= 4;
    this.ni = 3;
    this.K |= 8;
    this.mi = new A(0, 0);
    this.K |= 16;
    this.li = new A(0, 0);
    this.K |= 32;
    this.pi = new A(0, 0);
    this.K |= 64;
    this.qi = 0;
    this.K |= 128;
    jn(this);
    this.ak = new A(75, 5);
    this.K |= 256;
    this.oi = new A(0, 0);
    this.K |= 512;
    a = xb().jb;
    b = [Eb(G()), Ib(G()), Kb(G()), Jb(G()), Fb(G()), Gb(G()), Hb(G())];
    a = zb(a, B(new C(), b));
    b = Yb().Fb();
    if (0 === (4 & this.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 12"
      );
    var c = (-1 + Ja(this.$j / kn(this).h)) | 0;
    if (!(0 > c))
      for (var d = 0; ; ) {
        for (var f = d, g = 3; ; ) {
          var h = g;
          h = new A(f * kn(this).h + hn(this), h * kn(this).g);
          var k = nl(),
            l = a.n();
          $b(b, new ql(h, a.t(Pg(k.Cb, l))));
          if (15 === g) break;
          g = (1 + g) | 0;
        }
        if (d === c) break;
        d = (1 + d) | 0;
      }
    this.Zj = b;
    this.K |= 1024;
  }
  rl.prototype = new Qb();
  rl.prototype.constructor = rl;
  function hn(a) {
    if (0 === (1 & a.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 9"
      );
    return a.Xj;
  }
  function kn(a) {
    if (0 === (2 & a.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 10"
      );
    return a.Yj;
  }
  function ln(a) {
    if (0 === (8 & a.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 13"
      );
    return a.ni;
  }
  function mn(a, b) {
    a.ni = b;
    a.K |= 8;
  }
  e = rl.prototype;
  e.Za = function () {
    if (0 === (16 & this.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 15"
      );
    return this.mi;
  };
  e.bd = function (a) {
    this.mi = a;
    this.K |= 16;
  };
  e.Ab = function () {
    if (0 === (32 & this.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 16"
      );
    return this.li;
  };
  e.zg = function (a) {
    this.li = a;
    this.K |= 32;
  };
  function nn(a) {
    if (0 === (64 & a.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 17"
      );
    return a.pi;
  }
  function on(a, b) {
    a.pi = b;
    a.K |= 64;
  }
  e.He = function () {
    if (0 === (128 & this.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 19"
      );
    return this.qi;
  };
  e.Ge = function (a) {
    this.qi = a;
    this.K |= 128;
  };
  function jn(a) {
    a.bd(new A(0, 0));
    on(a, new A(a.ec.h / 2, a.ec.g - 40));
    a.zg(new A(a.ec.h / 2, nn(a).g - 5));
    a.Ge(60);
  }
  function pn(a) {
    if (0 === (256 & a.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 30"
      );
    return a.ak;
  }
  function qn(a) {
    if (0 === (512 & a.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 31"
      );
    return a.oi;
  }
  function rn(a, b) {
    a.oi = b;
    a.K |= 512;
  }
  function sn(a) {
    if (0 === (1024 & a.K))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 33"
      );
    return a.Zj;
  }
  e.cd = function (a) {
    var b = Lb(G());
    a.fillStyle = b;
    a.fillRect(0, 0, this.ec.h, this.ec.g);
    b = Eb(G());
    a.fillStyle = b;
    b = Eb(G());
    a.strokeStyle = b;
    a.strokeRect(0, 0, hn(this) - 1, this.ec.g);
    a.strokeRect(this.ec.h - hn(this) + 1, 0, hn(this) - 1, this.ec.g);
    Ub(new Tb(this, a), this.Ab().h - 5, this.Ab().g - 5);
    a.textAlign = "left";
    a.fillText(
      "Balls Left: " + ln(this),
      this.ec.h - hn(this) / 2 - 40,
      (4 * this.ec.g) / 5 - 10
    );
    b = ln(this);
    if (!(1 > b))
      for (var c = 1; ; ) {
        var d = c;
        Ub(
          new Tb(this, a),
          this.ec.h - hn(this) / 2 - 40 + ba(15, d),
          (4 * this.ec.g) / 5 + 10
        );
        if (c === b) break;
        c = (1 + c) | 0;
      }
    sn(this).O(
      new E(
        ((f, g) => (h) => {
          var k = h.tg.split("255").join("128");
          g.fillStyle = k;
          g.fillRect(h.zc.h, h.zc.g, kn(f).h, kn(f).g);
          g.fillStyle = h.tg;
          g.beginPath();
          g.moveTo(h.zc.h + 1, h.zc.g + kn(f).g - 1);
          g.lineTo(h.zc.h + 1, h.zc.g + 1);
          g.lineTo(h.zc.h + kn(f).h - 1, h.zc.g + 1);
          g.stroke();
        })(this, a)
      )
    );
    b = Eb(G()).split("255").join("128");
    a.fillStyle = b;
    b = rb(nn(this), ub(pn(this), 2));
    a.fillRect(b.h, b.g, pn(this).h, pn(this).g);
    c = Eb(G());
    a.fillStyle = c;
    a.strokeRect(b.h, b.g, pn(this).h, pn(this).g);
  };
  e.pg = function (a) {
    if (0 < this.He()) this.Ge((-1 + this.He()) | 0);
    else if (0 === this.He())
      (a = nl()),
        this.bd(new A(7 * (Pg(a.Cb, 2) - 0.5), -3.5)),
        this.Ge((-1 + this.He()) | 0);
    else {
      rn(this, new A(0, 0));
      a.F(37) && rn(this, new A(-8, 0));
      a.F(39) && rn(this, new A(8, 0));
      on(this, z(nn(this), qn(this)));
      a = nn(this);
      var b = nn(this).h,
        c = pn(this).h / 2 + hn(this);
      b = +Math.max(b, c);
      c = this.ec.h - pn(this).h / 2 - hn(this);
      b = +Math.min(b, c);
      on(this, new A(b, a.g));
      this.zg(z(this.Ab(), this.Za()));
      this.Ab().h + 5 > this.ec.h - hn(this)
        ? ((a = this.Za()),
          (b = this.Za().h),
          (b = -+Math.abs(b)),
          this.bd(new A(b, a.g)))
        : this.Ab().h - 5 < hn(this)
        ? ((a = this.Za()),
          (b = this.Za().h),
          (b = +Math.abs(b)),
          this.bd(new A(b, a.g)))
        : 0 > this.Ab().g - 5
        ? ((a = this.Za()),
          (b = this.Za().g),
          (b = +Math.abs(b)),
          this.bd(new A(a.h, b)))
        : this.Ab().g > this.ec.g
        ? (mn(this, (-1 + ln(this)) | 0),
          0 <= ln(this)
            ? jn(this)
            : (Sb(this, new Tm("You've run out of balls!")), Zd(this.sg)))
        : (qb(
            this.Ab(),
            rb(nn(this), ub(pn(this), 2)),
            z(nn(this), ub(pn(this), 2)),
            new A(5, 5)
          ) &&
            (this.Za(),
            (a = this.Za().h + qn(this).h / 8),
            (b = this.Za().g),
            (b = -+Math.abs(b)),
            this.bd(new A(a, b))),
          sn(this).O(
            new E(
              ((d) => (f) => {
                var g = xb().jb,
                  h = [
                    f.zc,
                    z(f.zc, new A(kn(d).h, 0)),
                    z(f.zc, kn(d)),
                    z(f.zc, new A(0, kn(d).g)),
                  ];
                g = zb(g, B(new C(), h));
                h = xb().jb;
                var k = [
                  new tn(
                    g.t(0),
                    g.t(1),
                    new E(
                      (() => (l) => {
                        var p = -+Math.abs(l.g);
                        return new A(l.h, p);
                      })(d)
                    )
                  ),
                  new tn(
                    g.t(1),
                    g.t(2),
                    new E(
                      (() => (l) => {
                        var p = +Math.abs(l.h);
                        return new A(p, l.g);
                      })(d)
                    )
                  ),
                  new tn(
                    g.t(2),
                    g.t(3),
                    new E(
                      (() => (l) => {
                        var p = +Math.abs(l.g);
                        return new A(l.h, p);
                      })(d)
                    )
                  ),
                  new tn(
                    g.t(3),
                    g.t(0),
                    new E(
                      (() => (l) => {
                        var p = -+Math.abs(l.h);
                        return new A(p, l.g);
                      })(d)
                    )
                  ),
                ];
                h = zb(h, B(new C(), k));
                k = new Ai(!1);
                h.Vd(new E((() => (l) => null !== l)(d)))
                  .Vd(
                    new E(
                      ((l, p) => (u) => {
                        if (null !== u) return !p.og;
                        throw new T(u);
                      })(d, k)
                    )
                  )
                  .O(
                    new E(
                      ((l, p, u) => (y) => {
                        if (null !== y) {
                          var D = y.vg,
                            K = y.ff;
                          y = y.Mf;
                          var J = sl(rb(l.Ab(), D), rb(K, D)) / vb(rb(K, D)),
                            Z = tl(rb(l.Ab(), D)) - J * J;
                          Z = +Math.sqrt(Z);
                          !p.og &&
                            0 < J &&
                            J < vb(rb(K, D)) &&
                            5 > Z &&
                            (l.bd(y.l(l.Za())), bc(sn(l), u), (p.og = !0));
                        } else throw new T(y);
                      })(d, k, f)
                    )
                  );
                g.Vd(new E(((l, p) => () => !p.og)(d, k))).O(
                  new E(
                    ((l, p, u) => () =>
                      new E(
                        ((y, D, K) => (J) => {
                          J = rb(y.Ab(), J);
                          5 > vb(J) &&
                            ((J = ub(sb(J, sl(y.Za(), J)), tl(J))),
                            y.bd(rb(y.Za(), sb(J, 2))),
                            bc(sn(y), D),
                            (K.og = !0));
                        })(l, p, u)
                      ))(d, f, k)
                  )
                );
              })(this)
            )
          ),
          0 === sn(this).kd &&
            (Sb(this, new Tm("Success! You've destroyed all the bricks!")),
            Zd(this.sg)));
    }
  };
  e.ib = function () {
    return "BrickBreaker";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.ec;
      case 1:
        return this.sg;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof rl) {
      var b = this.ec,
        c = a.ec;
      return (null === b ? null === c : b.y(c)) ? this.sg === a.sg : !1;
    }
    return !1;
  };
  e.$classData = v({ Wl: 0 }, !1, "example.BrickBreaker", {
    Wl: 1,
    ug: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function un() {}
  un.prototype = new q();
  un.prototype.constructor = un;
  e = un.prototype;
  e.ib = function () {
    return "Empty";
  };
  e.rb = function () {
    return 0;
  };
  e.sb = function (a) {
    return ng(X(), a);
  };
  e.H = function () {
    return 67081517;
  };
  e.z = function () {
    return "Empty";
  };
  e.$classData = v({ $l: 0 }, !1, "example.Empty$", {
    $l: 1,
    b: 1,
    kh: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  var vn;
  function wn() {
    vn || (vn = new un());
    return vn;
  }
  function fn(a) {
    this.gh = a;
  }
  fn.prototype = new q();
  fn.prototype.constructor = fn;
  e = fn.prototype;
  e.ib = function () {
    return "Failure";
  };
  e.rb = function () {
    return 1;
  };
  e.sb = function (a) {
    return 0 === a ? this.gh : ng(X(), a);
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof fn ? this.gh === a.gh : !1;
  };
  e.$classData = v({ am: 0 }, !1, "example.Failure", {
    am: 1,
    b: 1,
    Yl: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function ul(a, b) {
    this.ie = null;
    this.he = !1;
    this.mk = this.lk = this.vi = this.ui = this.Ai = null;
    this.W = this.yi = this.zi = this.wi = 0;
    this.Oc = a;
    this.xi = b;
    Nb(this);
    b = xn();
    if (null !== b) b = kj(new lj(), b.Ac(), b.Bc());
    else throw new T(b);
    this.Ai = b;
    this.W |= 1;
    this.ui = this.Ai.Ac();
    this.W |= 2;
    this.vi = this.Ai.Bc();
    this.W |= 4;
    this.lk = new gc(new A(40, a.g / 2), new A(5, 75), new A(0, 0), 0.5);
    this.W |= 8;
    this.mk = new gc(new A(a.h - 40, a.g / 2), new A(5, 75), new A(0, 0), -0.5);
    this.W |= 16;
    this.wi = 0;
    this.W |= 32;
    this.zi = 0;
    this.W |= 64;
    this.yi = 60;
    this.W |= 128;
    this.W |= 256;
  }
  ul.prototype = new Qb();
  ul.prototype.constructor = ul;
  e = ul.prototype;
  e.Ab = function () {
    if (0 === (2 & this.W))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 13"
      );
    return this.ui;
  };
  e.zg = function (a) {
    this.ui = a;
    this.W |= 2;
  };
  e.Za = function () {
    if (0 === (4 & this.W))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 13"
      );
    return this.vi;
  };
  e.bd = function (a) {
    this.vi = a;
    this.W |= 4;
  };
  function yn(a) {
    if (0 === (8 & a.W))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 14"
      );
    return a.lk;
  }
  function zn(a) {
    if (0 === (16 & a.W))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 16"
      );
    return a.mk;
  }
  function An(a) {
    if (0 === (32 & a.W))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 23"
      );
    return a.wi;
  }
  function Bn(a, b) {
    a.wi = b;
    a.W |= 32;
  }
  function Cn(a) {
    if (0 === (64 & a.W))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 24"
      );
    return a.zi;
  }
  function Dn(a, b) {
    a.zi = b;
    a.W |= 64;
  }
  e.He = function () {
    if (0 === (128 & this.W))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 26"
      );
    return this.yi;
  };
  e.Ge = function (a) {
    this.yi = a;
    this.W |= 128;
  };
  function En(a) {
    var b = zn(a).Vb.h - a.Ab().h,
      c = a.Za().g / a.Za().h;
    b = b * c + a.Ab().g;
    zn(a).md = new A(0, 0);
    c = zn(a).Vb.h - a.Ab().h;
    +Math.abs(c) < 45 * a.Za().h + 25 &&
      0 < a.Za().h &&
      (b > zn(a).Vb.g + zn(a).rc.g / 2
        ? ((b = b - zn(a).Vb.g - zn(a).rc.g / 2),
          +Math.abs(b) > zn(a).rc.g / 2 - 10 &&
            (zn(a).md = z(zn(a).md, new A(0, 8))))
        : b < zn(a).Vb.g + zn(a).rc.g / 2 &&
          ((b = b - zn(a).Vb.g - zn(a).rc.g / 2),
          +Math.abs(b) > zn(a).rc.g / 2 - 10 &&
            (zn(a).md = rb(zn(a).md, new A(0, 8)))));
  }
  function xn() {
    var a = new A(400, 300),
      b = Pg(nl().Cb, 2),
      c = nl();
    return kj(new lj(), a, new A(8 * (b - 0.5), 8 * (Pg(c.Cb, 2) - 0.5)));
  }
  e.cd = function (a) {
    var b = Lb(G());
    a.fillStyle = b;
    a.fillRect(0, 0, this.Oc.h, this.Oc.g);
    b = Eb(G());
    a.fillStyle = b;
    b = Eb(G());
    a.strokeStyle = b;
    Ub(new Tb(this, a), this.Ab().h, this.Ab().g);
    a.fillText("Score", (5 * this.Oc.h) / 10, this.Oc.g / 8);
    b = An(this);
    a.fillText("" + b, (5 * this.Oc.h) / 10 - 20, this.Oc.g / 8 + 15);
    b = Cn(this);
    a.fillText("" + b, (5 * this.Oc.h) / 10 + 20, this.Oc.g / 8 + 15);
    b = xb().jb;
    var c = [yn(this), zn(this)];
    zb(b, B(new C(), c)).O(
      new E(
        ((d, f) => (g) => {
          Vb(
            new Tb(d, f),
            B(new C(), [
              new A(g.Vb.h + g.rc.h * g.je, g.Vb.g - g.rc.g * g.je),
              new A(g.Vb.h + g.rc.h * g.je, g.Vb.g + g.rc.g * g.je),
              new A(g.Vb.h - g.rc.h * g.je, g.Vb.g + g.rc.g * g.je),
            ])
          );
        })(this, a)
      )
    );
  };
  e.pg = function (a) {
    yn(this).md = new A(0, 0);
    a.F(38) && (yn(this).md = rb(yn(this).md, new A(0, 8)));
    a.F(40) && (yn(this).md = z(yn(this).md, new A(0, 8)));
    En(this);
    this.zg(z(this.Ab(), this.Za()));
    if (0 >= this.Ab().g) {
      a = this.Za();
      var b = this.Za().g;
      b = +Math.abs(b);
      this.bd(new A(a.h, b));
    }
    this.Ab().g >= this.Oc.g &&
      ((a = this.Za()),
      (b = this.Za().g),
      (b = -+Math.abs(b)),
      this.bd(new A(a.h, b)));
    0 > this.Ab().h && (Dn(this, (1 + Cn(this)) | 0), this.Ge(100));
    this.Ab().h > this.Oc.h && (Bn(this, (1 + An(this)) | 0), this.Ge(100));
    if (0 < this.He()) {
      a = xn();
      if (null === a) throw new T(a);
      b = a.Bc();
      this.zg(a.Ac());
      this.bd(b);
      this.Ge((-1 + this.He()) | 0);
    } else 0 === this.He() && this.Ge(-1);
    a = xb().jb;
    b = [yn(this), zn(this)];
    zb(a, B(new C(), b)).O(
      new E(
        ((c) => (d) => {
          var f = rb(d.Vb, sb(d.rc, d.je)),
            g = z(d.Vb, sb(d.rc, d.je));
          qb(c.Ab(), g, f, new A(5, 5)) &&
            (c.Za(),
            (f = d.je),
            (g = c.Za().h),
            (f = 2 * f * +Math.abs(g)),
            (g = c.Za().g + d.md.g / 8),
            c.bd(new A(f, g)));
          d.Vb = z(d.Vb, d.md);
          f = d.Vb;
          g = +Math.min(d.Vb.g, c.Oc.g - d.rc.g / 2);
          g = +Math.max(g, d.rc.g / 2);
          d.Vb = new A(f.h, g);
        })(this)
      )
    );
  };
  e.ib = function () {
    return "Pong";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.Oc;
      case 1:
        return this.xi;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof ul) {
      var b = this.Oc,
        c = a.Oc;
      return (null === b ? null === c : b.y(c)) ? this.xi === a.xi : !1;
    }
    return !1;
  };
  e.$classData = v({ fm: 0 }, !1, "example.Pong", {
    fm: 1,
    ug: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function vl(a, b) {
    this.ie = null;
    this.he = !1;
    this.Ei = this.Di = 0;
    this.nk = this.Fi = this.Ci = null;
    this.zb = 0;
    this.Bi = a;
    this.jh = b;
    Nb(this);
    this.Di = 0;
    this.zb = ((1 | this.zb) << 24) >> 24;
    this.Ei = 10;
    this.zb = ((2 | this.zb) << 24) >> 24;
    this.Ci = new A(1, 0);
    this.zb = ((4 | this.zb) << 24) >> 24;
    this.Fi = new A(40, 30);
    this.zb = ((8 | this.zb) << 24) >> 24;
    a = new (x(x(Ec)).G)(80);
    for (b = 0; 80 > b; ) {
      for (var c = b, d = new (x(Ec).G)(60), f = 0; 60 > f; )
        (d.a[f] = wn()), (f = (1 + f) | 0);
      a.a[c] = d;
      b = (1 + b) | 0;
    }
    for (b = 0; ; ) {
      c = b;
      a.a[c].a[0] = new Fn(2147483647);
      a.a[c].a[59] = new Fn(2147483647);
      if (79 === b) break;
      b = (1 + b) | 0;
    }
    for (b = 0; ; ) {
      c = b;
      a.a[0].a[c] = new Fn(2147483647);
      a.a[79].a[c] = new Fn(2147483647);
      if (59 === b) break;
      b = (1 + b) | 0;
    }
    this.nk = a;
    this.zb = ((16 | this.zb) << 24) >> 24;
  }
  vl.prototype = new Qb();
  vl.prototype.constructor = vl;
  e = vl.prototype;
  e.Eg = function () {
    if (0 === ((1 & this.zb) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 12"
      );
    return this.Di;
  };
  e.Si = function (a) {
    this.Di = a;
    this.zb = ((1 | this.zb) << 24) >> 24;
  };
  e.n = function () {
    if (0 === ((2 & this.zb) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 13"
      );
    return this.Ei;
  };
  function Gn(a) {
    if (0 === ((4 & a.zb) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 14"
      );
    return a.Ci;
  }
  function Hn(a) {
    if (0 === ((8 & a.zb) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 15"
      );
    return a.Fi;
  }
  function In(a) {
    if (0 === ((16 & a.zb) << 24) >> 24)
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 16"
      );
    return a.nk;
  }
  function Jn(a) {
    var b = In(a);
    Ee();
    var c = null;
    c = [];
    for (var d = 0; d < b.a.length; ) {
      var f = b.a[d],
        g = (() => (u) => (u instanceof Nm ? 1 : 0))(a);
      Ee();
      var h = f.a.length,
        k = new t(h);
      if (0 < h) {
        var l = 0;
        if (null !== f)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof t)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Ya)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Wa)
          for (; l < h; ) {
            var p = f.a[l];
            k.a[l] = g(new n(p.Fa, p.Ea)) | 0;
            l = (1 + l) | 0;
          }
        else if (f instanceof Xa)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Ta)
          for (; l < h; ) (k.a[l] = g(Pa(f.a[l])) | 0), (l = (1 + l) | 0);
        else if (f instanceof Ua)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Va)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Sa)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else throw new T(f);
      }
      g = Gh(yc(), k);
      for (g = new Kn(g.We); g.m(); ) (h = Ln(g)), c.push(h);
      d = (1 + d) | 0;
    }
    a = new t(new Int32Array(c));
    a = Gh(yc(), a);
    Rd || (Rd = new Mn());
    return Qd(a) | 0;
  }
  e.cd = function (a) {
    a.fillStyle = "rgb(0, 0, 0)";
    a.fillRect(0, 0, 800, 800);
    for (var b = 0; ; ) {
      for (var c = b, d = 0; ; ) {
        var f = d,
          g = In(this).a[c].a[f];
        if (g instanceof Fn)
          (a.fillStyle = "rgb(200, 200, 200)"),
            a.fillRect(10 * c, 10 * f, 10, 10);
        else if (g instanceof Nm) {
          g = g.bf;
          switch (g) {
            case 2:
              g = "rgb(255, 0, 0)";
              break;
            case 5:
              g = "rgb(255, 255, 0)";
              break;
            default:
              throw new T(g);
          }
          a.fillStyle = g;
          Ub(new Tb(this, a), 10 * c + 5, 10 * f + 5);
        } else if (wn() !== g) throw new T(g);
        if (59 === d) break;
        d = (1 + d) | 0;
      }
      if (79 === b) break;
      b = (1 + b) | 0;
    }
  };
  e.pg = function (a) {
    this.Si((1 + this.Eg()) | 0);
    if (0 === (this.Eg() % 2 | 0)) {
      if (+Math.random() > 0.9 + Jn(this) / 10) {
        var b = Pg(nl().Cb, 80),
          c = Pg(nl().Cb, 60),
          d = In(this).a[b].a[c];
        wn() === d &&
          ((d = 0 === Pg(nl().Cb, 20) ? 5 : 2),
          (In(this).a[b].a[c] = new Nm(375, d)));
      }
      this.Fi = z(Hn(this), Gn(this));
      this.zb = ((8 | this.zb) << 24) >> 24;
      b = In(this).a[Ja(Hn(this).h)].a[Ja(Hn(this).g)];
      b instanceof Fn
        ? (Sb(this, new Tm("You hit a wall!")), Zd(this.jh))
        : (b instanceof Nm &&
            ((b = b.bf),
            (this.Ei = (this.n() + b) | 0),
            (this.zb = ((2 | this.zb) << 24) >> 24)),
          (In(this).a[Ja(Hn(this).h)].a[Ja(Hn(this).g)] = new Fn(this.n())));
      a = a.F(37)
        ? new A(-1, 0)
        : a.F(39)
        ? new A(1, 0)
        : a.F(38)
        ? new A(0, -1)
        : a.F(40)
        ? new A(0, 1)
        : Gn(this);
      b = z(a, Gn(this));
      c = new A(0, 0);
      (null !== b && b.y(c)) ||
        ((this.Ci = a), (this.zb = ((4 | this.zb) << 24) >> 24));
      for (a = 0; ; ) {
        b = a;
        for (c = 0; ; ) {
          d = c;
          var f = In(this).a[b],
            g = In(this).a[b].a[d];
          var h =
            g instanceof Fn && 1 === g.Lf
              ? !0
              : g instanceof Nm && 1 === g.If
              ? !0
              : !1;
          if (h) g = wn();
          else if (g instanceof Fn) g = new Fn((-1 + g.Lf) | 0);
          else if (g instanceof Nm) g = new Nm((-1 + g.If) | 0, g.bf);
          else if (wn() === g) g = wn();
          else throw new T(g);
          f.a[d] = g;
          if (59 === c) break;
          c = (1 + c) | 0;
        }
        if (79 === a) break;
        a = (1 + a) | 0;
      }
    }
  };
  e.ib = function () {
    return "Snake";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.Bi;
      case 1:
        return this.jh;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof vl) {
      var b = this.Bi,
        c = a.Bi;
      return (null === b ? null === c : b.y(c)) ? this.jh === a.jh : !1;
    }
    return !1;
  };
  e.$classData = v({ im: 0 }, !1, "example.Snake", {
    im: 1,
    ug: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function Nn() {}
  Nn.prototype = new q();
  Nn.prototype.constructor = Nn;
  e = Nn.prototype;
  e.ib = function () {
    return "Success";
  };
  e.rb = function () {
    return 0;
  };
  e.sb = function (a) {
    return ng(X(), a);
  };
  e.H = function () {
    return -202516509;
  };
  e.z = function () {
    return "Success";
  };
  e.$classData = v({ km: 0 }, !1, "example.Success$", {
    km: 1,
    b: 1,
    Yl: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  var On;
  function gn() {
    On || (On = new Nn());
    return On;
  }
  function Pn(a, b) {
    var c = Ja(Qn(a).h),
      d = 0 >= c;
    if (d) var f = 0;
    else {
      var g = c >> 31;
      f = (0 === g ? -1 < (-2147483648 ^ c) : 0 < g) ? -1 : c;
    }
    g = (-1 + c) | 0;
    0 > f && Rh(Ff(), 0, c, 1, !1);
    c = xf().X();
    for (d = new Rn(0, 1, g, d); d.Md; )
      (g = Sn(d)), (g = Tn(a).a[g].a[b]), c.Oa(g);
    return c.Ua();
  }
  function Un(a, b, c, d, f) {
    var g = d.split("255").join("128");
    f.fillStyle = g;
    f.fillRect(Vn(a) + b * Wn(a), c * Wn(a), Wn(a), Wn(a));
    f.strokeStyle = d;
    f.strokeRect(Vn(a) + b * Wn(a), c * Wn(a), Wn(a), Wn(a));
  }
  function Xn(a, b, c, d, f) {
    c = Yn(a, Zn(a).t(b), c);
    var g = c.n(),
      h = (-1 + g) | 0;
    if (!(0 >= g))
      for (g = 0; ; ) {
        var k = c.t(g);
        if (null === k) throw new T(k);
        var l = k.mh();
        k = k.nh();
        var p = new A(l, k),
          u = new A(0, 0),
          y = Qn(a);
        (qb(p, u, y, new A(0, 0)) || d) && Un(a, l, k, Mb().t(b), f);
        if (g === h) break;
        g = (1 + g) | 0;
      }
  }
  function wl(a, b) {
    this.ie = null;
    this.he = !1;
    this.sk = this.Gi = null;
    this.ok = this.Ji = 0;
    this.qk = null;
    this.Hi = this.Ki = this.Ii = this.rk = 0;
    this.Mi = this.pk = this.Li = null;
    this.J = 0;
    this.ke = a;
    this.lh = b;
    Nb(this);
    b = xb().jb;
    var c = xb().jb,
      d = [
        new t(new Int32Array([0, 1, 0, 0])),
        new t(new Int32Array([0, 1, 0, 0])),
        new t(new Int32Array([0, 1, 0, 0])),
        new t(new Int32Array([0, 1, 0, 0])),
      ];
    c = zb(c, B(new C(), d));
    d = xb().jb;
    var f = [new t(new Int32Array([1, 1])), new t(new Int32Array([1, 1]))];
    d = zb(d, B(new C(), f));
    f = xb().jb;
    var g = [
      new t(new Int32Array([1, 1, 0])),
      new t(new Int32Array([0, 1, 1])),
      new t(new Int32Array([0, 0, 0])),
    ];
    f = zb(f, B(new C(), g));
    g = xb().jb;
    var h = [
      new t(new Int32Array([0, 1, 1])),
      new t(new Int32Array([1, 1, 0])),
      new t(new Int32Array([0, 0, 0])),
    ];
    g = zb(g, B(new C(), h));
    h = xb().jb;
    var k = [
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([1, 1, 1])),
      new t(new Int32Array([0, 0, 0])),
    ];
    h = zb(h, B(new C(), k));
    k = xb().jb;
    var l = [
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([1, 1, 0])),
    ];
    k = zb(k, B(new C(), l));
    l = xb().jb;
    var p = [
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([0, 1, 1])),
    ];
    c = [c, d, f, g, h, k, zb(l, B(new C(), p))];
    this.sk = zb(b, B(new C(), c));
    this.J |= 2;
    this.Ji = 0;
    this.J |= 4;
    this.J |= 8;
    this.ok = 20;
    this.J |= 16;
    this.qk = new A(13, a.g / Wn(this));
    this.J |= 32;
    this.rk = (a.h - Wn(this) * Qn(this).h) / 2;
    this.J |= 64;
    this.Ii = 0;
    this.J |= 128;
    a = nl();
    b = Zn(this).n();
    this.Ki = Pg(a.Cb, b);
    this.J |= 256;
    a = nl();
    b = Zn(this).n();
    this.Hi = Pg(a.Cb, b);
    this.J |= 512;
    this.Li = new A(Qn(this).h / 2, 0);
    this.J |= 1024;
    a = Ja(Qn(this).h);
    b = Ja(Qn(this).g);
    if (0 >= a) a = new (x(x(Ic)).G)(0);
    else {
      c = new (x(x(Ic)).G)(a);
      for (d = 0; d < a; ) {
        f = d;
        if (0 >= b) g = new (x(Ic).G)(0);
        else
          for (g = new (x(Ic).G)(b), h = 0; h < b; )
            (k = g.a),
              (l = h),
              null === this.Gi && null === this.Gi && (this.Gi = new Jc(this)),
              (k[l] = new Hc(this, Lb(G()))),
              (h = (1 + h) | 0);
        c.a[f] = g;
        d = (1 + d) | 0;
      }
      a = c;
    }
    this.pk = a;
    this.J |= 2048;
    this.Mi = Zk();
    this.J |= 4096;
  }
  wl.prototype = new Qb();
  wl.prototype.constructor = wl;
  function Zn(a) {
    if (0 === (2 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 7"
      );
    return a.sk;
  }
  function Yn(a, b, c) {
    var d = b.n(),
      f = 0 >= d,
      g = (-1 + d) | 0;
    d = xf().X();
    for (f = new Rn(0, 1, g, f); f.Md; ) {
      g = Sn(f);
      var h = b.t(0).a.length;
      h = new $n(0, h, 1);
      g = new mj(
        h,
        new E(
          ((k, l, p) => (u) => {
            u |= 0;
            return 0 !== l.t(p).a[u];
          })(a, b, g)
        )
      ).R(
        new E(
          ((k, l, p) => (u) =>
            new ao((l + Ja(p.h)) | 0, ((u | 0) + Ja(p.g)) | 0))(a, g, c)
        )
      );
      d.qb(g);
    }
    return d.Ua();
  }
  function co(a) {
    if (0 === (4 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 51"
      );
    return a.Ji;
  }
  function eo(a, b) {
    a.Ji = b;
    a.J |= 4;
  }
  function Wn(a) {
    if (0 === (16 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 53"
      );
    return a.ok;
  }
  function Qn(a) {
    if (0 === (32 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 54"
      );
    return a.qk;
  }
  function Vn(a) {
    if (0 === (64 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 55"
      );
    return a.rk;
  }
  function fo(a) {
    if (0 === (128 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 56"
      );
    return a.Ii;
  }
  function go(a, b) {
    a.Ii = b;
    a.J |= 128;
  }
  function ho(a) {
    if (0 === (256 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 57"
      );
    return a.Ki;
  }
  function io(a) {
    if (0 === (512 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 58"
      );
    return a.Hi;
  }
  function jo(a) {
    if (0 === (1024 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 59"
      );
    return a.Li;
  }
  function ko(a, b) {
    a.Li = b;
    a.J |= 1024;
  }
  function Tn(a) {
    if (0 === (2048 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 62"
      );
    return a.pk;
  }
  function lo(a) {
    if (0 === (4096 & a.J))
      throw new F(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 63"
      );
    return a.Mi;
  }
  function mo(a, b) {
    var c = b.n(),
      d = b.t(0).a.length,
      f = ub(new A(c - 1, d - 1), 2),
      g = xb().jb;
    a = Kh(
      g,
      c,
      new H(
        ((D, K) => () => {
          Ee();
          if (0 >= K) return new t(0);
          for (var J = new t(K), Z = 0; Z < K; )
            (J.a[Z] = 0), (Z = (1 + Z) | 0);
          return J;
        })(a, d)
      )
    );
    g = (-1 + c) | 0;
    if (!(0 >= c))
      for (var h = 0; ; ) {
        var k = h,
          l = (-1 + d) | 0;
        if (!(0 >= d))
          for (var p = 0; ; ) {
            var u = p,
              y = rb(new A(k, u), f);
            y = z(new A(-y.g, y.h), f);
            a.t(Ja(y.h)).a[Ja(y.g)] = b.t(k).a[u];
            if (p === l) break;
            p = (1 + p) | 0;
          }
        if (h === g) break;
        h = (1 + h) | 0;
      }
    f = (-1 + c) | 0;
    if (!(0 >= c))
      for (c = 0; ; ) {
        g = c;
        h = (-1 + d) | 0;
        if (!(0 >= d))
          for (k = 0; ; ) {
            l = k;
            b.t(g).a[l] = a.t(g).a[l];
            if (k === h) break;
            k = (1 + k) | 0;
          }
        if (c === f) break;
        c = (1 + c) | 0;
      }
  }
  function no(a, b) {
    var c = Yn(a, Zn(a).t(io(a)), jo(a));
    if (0 <= c.n()) {
      var d = c.n();
      d = new (x(oo).G)(d);
      c.Ob(d, 0, 2147483647);
      c = d;
    } else {
      d = null;
      d = [];
      for (c = c.i(); c.m(); ) {
        var f = c.k();
        d.push(null === f ? null : f);
      }
      c = new (x(oo).G)(d);
    }
    f = c.a.length;
    d = 0 >= f;
    if (d) var g = 0;
    else {
      var h = f >> 31;
      g = (0 === h ? -1 < (-2147483648 ^ f) : 0 < h) ? -1 : f;
    }
    h = (-1 + f) | 0;
    0 > g && Rh(Ff(), 0, f, 1, !1);
    f = xf().X();
    for (d = new Rn(0, 1, h, d); d.Md; ) {
      h = Sn(d);
      g = c.a[h];
      if (null === g) throw new T(g);
      f.Oa(new tn(h, g, z(new A(g.mh(), g.nh()), b)));
    }
    b = f.Ua();
    return new mj(
      b,
      new E(
        ((k) => (l) => {
          if (null !== l) {
            var p = l.Mf;
            if (null !== l.ff)
              return (
                !qb(p, new A(0, 0), Qn(k), new A(0, 0)) ||
                Tn(k).a[Ja(p.h)].a[Ja(p.g)].ef !== Lb(G())
              );
          }
          throw new T(l);
        })(a)
      )
    ).R(
      new E(
        (() => (k) => {
          if (null === k || null === k.ff) throw new T(k);
        })(a)
      )
    );
  }
  function po(a) {
    var b = no(a, new A(0, 1)),
      c = Yn(a, Zn(a).t(io(a)), jo(a));
    if (0 <= c.n()) {
      var d = c.n();
      d = new (x(oo).G)(d);
      c.Ob(d, 0, 2147483647);
      c = d;
    } else {
      d = [];
      for (c = c.i(); c.m(); ) {
        var f = c.k();
        d.push(null === f ? null : f);
      }
      c = new (x(oo).G)(d);
    }
    if (0 < b.n()) {
      d = c.a.length;
      b = (-1 + d) | 0;
      if (!(0 >= d))
        for (d = 0; ; ) {
          var g = c.a[d];
          if (null === g) throw new T(g);
          f = g.mh();
          g = g.nh();
          Tn(a).a[f].a[g].ef = Mb().t(io(a));
          if (d === b) break;
          d = (1 + d) | 0;
        }
      b = ho(a);
      a.Hi = b;
      a.J |= 512;
      b = nl();
      c = Zn(a).n();
      b = Pg(b.Cb, c);
      a.Ki = b;
      a.J |= 256;
      ko(a, new A(Qn(a).h / 2, 0));
      no(a, new A(0, 0)).f() ||
        (Sb(a, new Tm("The board has filled up!")), Zd(a.lh));
    } else ko(a, z(jo(a), new A(0, 1)));
  }
  e = wl.prototype;
  e.pg = function (a) {
    a.F(37) &&
      !lo(this).F(37) &&
      no(this, new A(-1, 0)).f() &&
      ko(this, z(jo(this), new A(-1, 0)));
    a.F(39) &&
      !lo(this).F(39) &&
      no(this, new A(1, 0)).f() &&
      ko(this, z(jo(this), new A(1, 0)));
    if (
      a.F(32) &&
      !lo(this).F(32) &&
      (mo(this, Zn(this).t(io(this))), !no(this, new A(0, 0)).f())
    )
      for (var b = 0; ; ) {
        mo(this, Zn(this).t(io(this)));
        if (2 === b) break;
        b = (1 + b) | 0;
      }
    a.F(40) && po(this);
    this.Mi = a;
    this.J |= 4096;
    0 < co(this) ? eo(this, (-1 + co(this)) | 0) : (eo(this, 15), po(this));
    a = (-1 + Ja(Qn(this).g)) | 0;
    b = 0 > a;
    if (b) var c = 0;
    else {
      c = a >> 31;
      var d = -a | 0;
      c = 0 !== a ? ~c : -c | 0;
      c = 0 !== d ? ~c : -c | 0;
      d = (1 + (-d | 0)) | 0;
      c = 0 === d ? (1 + c) | 0 : c;
      c = (0 === c ? -1 < (-2147483648 ^ d) : 0 < c) ? -1 : d;
    }
    zc();
    d = I();
    0 > c && Rh(Ff(), a, 0, -1, !0);
    if (0 === c) b = d;
    else if (((a = new Rn(a, -1, 0, b)), a.Md))
      for (c = b = new Wm(Sn(a), d); a.Md; ) {
        var f = new Wm(Sn(a), d);
        c = c.tc = f;
      }
    else b = d;
    a = null;
    a = new mj(
      b,
      new E(
        ((k) => (l) => {
          var p = !0;
          for (l = Pn(k, l | 0).i(); p && l.m(); ) p = l.k().ef !== Lb(G());
          return !p;
        })(this)
      )
    ).R(new E((() => (k) => k | 0)(this)));
    b = (-1 + Ja(Qn(this).g)) | 0;
    if (!(0 > b))
      for (;;) {
        d = b;
        c = a;
        if (c instanceof Wm)
          (a = c),
            (c = a.Nh | 0),
            (a = a.tc),
            Pn(this, d)
              .ai(Pn(this, c))
              .Vd(new E((() => (k) => null !== k)(this)))
              .O(
                new E(
                  (() => (k) => {
                    if (null !== k) k.Ac().ef = k.Bc().ef;
                    else throw new T(k);
                  })(this)
                )
              );
        else {
          go(this, (1 + fo(this)) | 0);
          var g = Tn(this).a[d];
          d = (() => (k) => {
            k.ef = Lb(G());
          })(this);
          c = g.a.length;
          f = 0;
          if (null !== g) for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof t) for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Ya)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Wa)
            for (; f < c; ) {
              var h = g.a[f];
              d(new n(h.Fa, h.Ea));
              f = (1 + f) | 0;
            }
          else if (g instanceof Xa)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Ta)
            for (; f < c; ) d(Pa(g.a[f])), (f = (1 + f) | 0);
          else if (g instanceof Ua)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Va)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Sa)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else throw new T(g);
        }
        if (0 === b) break;
        b = (-1 + b) | 0;
      }
  };
  e.cd = function (a) {
    var b = Lb(G());
    a.fillStyle = b;
    a.fillRect(0, 0, this.ke.h, this.ke.g);
    a.textAlign = "left";
    b = Eb(G());
    a.fillStyle = b;
    a.fillText(
      "Lines Cleared: " + fo(this),
      1.3 * Vn(this) + Qn(this).h * Wn(this),
      100
    );
    a.fillText("Next Block", 1.35 * Vn(this) + Qn(this).h * Wn(this), 150);
    var c = Ja(Qn(this).h);
    b = (-1 + c) | 0;
    if (!(0 >= c))
      for (c = 0; ; ) {
        var d = c,
          f = Ja(Qn(this).g),
          g = (-1 + f) | 0;
        if (!(0 >= f))
          for (f = 0; ; ) {
            var h = f;
            Un(this, d, h, Tn(this).a[d].a[h].ef, a);
            if (f === g) break;
            f = (1 + f) | 0;
          }
        if (c === b) break;
        c = (1 + c) | 0;
      }
    Xn(this, io(this), jo(this), !1, a);
    Xn(this, ho(this), new A(18, 9), !0, a);
    b = Eb(G());
    a.strokeStyle = b;
    b = new Tb(this, a);
    c = [new A(Vn(this), 0), new A(Vn(this), this.ke.g)];
    Vb(b, B(new C(), c));
    a = new Tb(this, a);
    b = [
      new A(this.ke.h - Vn(this), 0),
      new A(this.ke.h - Vn(this), this.ke.g),
    ];
    Vb(a, B(new C(), b));
  };
  e.ib = function () {
    return "Tetris";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.ke;
      case 1:
        return this.lh;
      default:
        return ng(X(), a);
    }
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof wl) {
      var b = this.ke,
        c = a.ke;
      return (null === b ? null === c : b.y(c)) ? this.lh === a.lh : !1;
    }
    return !1;
  };
  e.$classData = v({ lm: 0 }, !1, "example.Tetris", {
    lm: 1,
    ug: 1,
    b: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function Fn(a) {
    this.Lf = a;
  }
  Fn.prototype = new q();
  Fn.prototype.constructor = Fn;
  e = Fn.prototype;
  e.ib = function () {
    return "Wall";
  };
  e.rb = function () {
    return 1;
  };
  e.sb = function (a) {
    return 0 === a ? this.Lf : ng(X(), a);
  };
  e.H = function () {
    var a = Ca("Wall");
    a = X().p(-889275714, a);
    var b = this.Lf;
    a = X().p(a, b);
    return X().L(a, 1);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof Fn ? this.Lf === a.Lf : !1;
  };
  e.$classData = v({ pm: 0 }, !1, "example.Wall", {
    pm: 1,
    b: 1,
    kh: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function qo() {}
  qo.prototype = new yl();
  qo.prototype.constructor = qo;
  function ro() {}
  ro.prototype = qo.prototype;
  class Ga extends Al {
    constructor() {
      super();
      oe(this, "/ by zero");
    }
  }
  Ga.prototype.$classData = v({ Cm: 0 }, !1, "java.lang.ArithmeticException", {
    Cm: 1,
    sc: 1,
    jc: 1,
    fc: 1,
    b: 1,
    c: 1,
  });
  function rd(a) {
    var b = new so();
    oe(b, a);
    return b;
  }
  function to() {
    var a = new so();
    oe(a, null);
    return a;
  }
  class so extends Al {}
  so.prototype.$classData = v(
    { Jk: 0 },
    !1,
    "java.lang.IllegalArgumentException",
    { Jk: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  class ke extends Al {
    constructor(a) {
      super();
      oe(this, a);
    }
  }
  ke.prototype.$classData = v(
    { Nm: 0 },
    !1,
    "java.lang.IllegalStateException",
    { Nm: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  function og(a, b) {
    oe(a, b);
    return a;
  }
  class pg extends Al {}
  pg.prototype.$classData = v(
    { Wi: 0 },
    !1,
    "java.lang.IndexOutOfBoundsException",
    { Wi: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  v({ Rm: 0 }, !1, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
    Rm: 1,
    sm: 1,
    b: 1,
    qm: 1,
    Fm: 1,
    rm: 1,
  });
  class qd extends Al {
    constructor() {
      super();
      oe(this, null);
    }
  }
  qd.prototype.$classData = v(
    { Um: 0 },
    !1,
    "java.lang.NegativeArraySizeException",
    { Um: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  class fg extends Al {
    constructor() {
      super();
      oe(this, null);
    }
  }
  fg.prototype.$classData = v({ Vm: 0 }, !1, "java.lang.NullPointerException", {
    Vm: 1,
    sc: 1,
    jc: 1,
    fc: 1,
    b: 1,
    c: 1,
  });
  function Ld(a) {
    var b = new dj();
    oe(b, a);
    return b;
  }
  class dj extends Al {}
  dj.prototype.$classData = v(
    { fn: 0 },
    !1,
    "java.lang.UnsupportedOperationException",
    { fn: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  class uo extends Al {
    constructor() {
      super();
      oe(this, "mutation occurred during iteration");
    }
  }
  uo.prototype.$classData = v(
    { ln: 0 },
    !1,
    "java.util.ConcurrentModificationException",
    { ln: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  function Th(a, b) {
    oe(a, b);
    return a;
  }
  function vo() {
    var a = new Uh();
    oe(a, null);
    return a;
  }
  class Uh extends Al {}
  Uh.prototype.$classData = v(
    { mn: 0 },
    !1,
    "java.util.NoSuchElementException",
    { mn: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  function wh() {}
  wh.prototype = new Il();
  wh.prototype.constructor = wh;
  wh.prototype.l = function (a) {
    return a;
  };
  wh.prototype.z = function () {
    return "generalized constraint";
  };
  wh.prototype.$classData = v({ sn: 0 }, !1, "scala.$less$colon$less$$anon$1", {
    sn: 1,
    $r: 1,
    as: 1,
    b: 1,
    N: 1,
    c: 1,
  });
  class T extends Al {
    constructor(a) {
      super();
      this.Tk = null;
      this.ej = !1;
      this.uh = a;
      oe(this, null);
    }
    ph() {
      if (!this.ej && !this.ej) {
        if (null === this.uh) var a = "null";
        else
          try {
            a = Ea(this.uh) + " (of class " + xa(this.uh) + ")";
          } catch (b) {
            if (
              (sg || (sg = new rg()),
              null !== (b instanceof Mg ? b : new tg(b)))
            )
              a = "an instance of class " + xa(this.uh);
            else throw b;
          }
        this.Tk = a;
        this.ej = !0;
      }
      return this.Tk;
    }
  }
  T.prototype.$classData = v({ wn: 0 }, !1, "scala.MatchError", {
    wn: 1,
    sc: 1,
    jc: 1,
    fc: 1,
    b: 1,
    c: 1,
  });
  function wo() {}
  wo.prototype = new q();
  wo.prototype.constructor = wo;
  function xo() {}
  xo.prototype = wo.prototype;
  wo.prototype.f = function () {
    return this === Ob();
  };
  wo.prototype.v = function () {
    return this.f() ? 0 : 1;
  };
  wo.prototype.i = function () {
    if (this.f()) return W().Y;
    W();
    var a = this.Fg();
    return new yo(a);
  };
  function kj(a, b, c) {
    a.Ni = b;
    a.Oi = c;
    return a;
  }
  function lj() {
    this.Oi = this.Ni = null;
  }
  lj.prototype = new q();
  lj.prototype.constructor = lj;
  function zo() {}
  e = zo.prototype = lj.prototype;
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    a: switch (a) {
      case 0:
        a = this.Ac();
        break a;
      case 1:
        a = this.Bc();
        break a;
      default:
        throw og(new pg(), a + " is out of bounds (min 0, max 1)");
    }
    return a;
  };
  e.Ac = function () {
    return this.Ni;
  };
  e.Bc = function () {
    return this.Oi;
  };
  e.z = function () {
    return "(" + this.Ac() + "," + this.Bc() + ")";
  };
  e.ib = function () {
    return "Tuple2";
  };
  e.H = function () {
    return yg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof lj
      ? L(M(), this.Ac(), a.Ac()) && L(M(), this.Bc(), a.Bc())
      : !1;
  };
  e.mh = function () {
    return this.Ac() | 0;
  };
  e.nh = function () {
    return this.Bc() | 0;
  };
  var oo = v({ vk: 0 }, !1, "scala.Tuple2", {
    vk: 1,
    b: 1,
    An: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  lj.prototype.$classData = oo;
  function tn(a, b, c) {
    this.vg = a;
    this.ff = b;
    this.Mf = c;
  }
  tn.prototype = new q();
  tn.prototype.constructor = tn;
  e = tn.prototype;
  e.rb = function () {
    return 3;
  };
  e.sb = function (a) {
    a: switch (a) {
      case 0:
        a = this.vg;
        break a;
      case 1:
        a = this.ff;
        break a;
      case 2:
        a = this.Mf;
        break a;
      default:
        throw og(new pg(), a + " is out of bounds (min 0, max 2)");
    }
    return a;
  };
  e.z = function () {
    return "(" + this.vg + "," + this.ff + "," + this.Mf + ")";
  };
  e.ib = function () {
    return "Tuple3";
  };
  e.H = function () {
    return yg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof tn
      ? L(M(), this.vg, a.vg) && L(M(), this.ff, a.ff) && L(M(), this.Mf, a.Mf)
      : !1;
  };
  e.$classData = v({ zm: 0 }, !1, "scala.Tuple3", {
    zm: 1,
    b: 1,
    es: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function Ao(a) {
    this.kj = a;
  }
  Ao.prototype = new Vi();
  Ao.prototype.constructor = Ao;
  Ao.prototype.$classData = v(
    { Ao: 0 },
    !1,
    "scala.collection.ClassTagSeqFactory$AnySeqDelegate",
    { Ao: 1, Cs: 1, b: 1, Hb: 1, c: 1, Tc: 1 }
  );
  function Bo(a, b) {
    return a.Be(new Co(a, b));
  }
  function Do(a, b) {
    return a.ha().ga(new Eo(a, b));
  }
  function Fo(a) {
    this.Vf = 0;
    this.Wk = null;
    if (null === a) throw nb(null);
    this.Wk = a;
    this.Vf = a.n();
  }
  Fo.prototype = new Kl();
  Fo.prototype.constructor = Fo;
  Fo.prototype.m = function () {
    return 0 < this.Vf;
  };
  Fo.prototype.k = function () {
    return 0 < this.Vf
      ? ((this.Vf = (-1 + this.Vf) | 0), this.Wk.t(this.Vf))
      : W().Y.k();
  };
  Fo.prototype.$classData = v(
    { Co: 0 },
    !1,
    "scala.collection.IndexedSeqOps$$anon$1",
    { Co: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Go(a) {
    return Td(a, a.Qc() + "(", ", ");
  }
  function fj(a) {
    return !!(a && a.$classData && a.$classData.Nb.B);
  }
  function Ho(a, b) {
    this.Wf = null;
    this.nf = 0;
    this.Yk = this.mj = null;
    if (null === a) throw nb(null);
    this.mj = a;
    this.Yk = b;
    this.Wf = W().Y;
    this.nf = -1;
  }
  Ho.prototype = new Kl();
  Ho.prototype.constructor = Ho;
  Ho.prototype.m = function () {
    if (-1 === this.nf) {
      for (; !this.Wf.m(); ) {
        if (!this.mj.m()) return (this.nf = 0), (this.Wf = W().Y), !1;
        this.Wf = null;
        this.Wf = this.Yk.l(this.mj.k()).i();
        this.nf = -1;
      }
      this.nf = 1;
      return !0;
    }
    return 1 === this.nf;
  };
  Ho.prototype.k = function () {
    this.m() && (this.nf = -1);
    return this.Wf.k();
  };
  Ho.prototype.$classData = v(
    { Lo: 0 },
    !1,
    "scala.collection.Iterator$$anon$10",
    { Lo: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Io(a, b) {
    this.Ah = this.Bh = null;
    if (null === a) throw nb(null);
    this.Ah = a;
    this.Bh = b.i();
  }
  Io.prototype = new Kl();
  Io.prototype.constructor = Io;
  Io.prototype.v = function () {
    var a = this.Ah.v(),
      b = this.Bh.v();
    return a < b ? a : b;
  };
  Io.prototype.m = function () {
    return this.Ah.m() && this.Bh.m();
  };
  Io.prototype.k = function () {
    return kj(new lj(), this.Ah.k(), this.Bh.k());
  };
  Io.prototype.$classData = v(
    { Mo: 0 },
    !1,
    "scala.collection.Iterator$$anon$14",
    { Mo: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function tj() {}
  tj.prototype = new Kl();
  tj.prototype.constructor = tj;
  tj.prototype.m = function () {
    return !1;
  };
  tj.prototype.v = function () {
    return 0;
  };
  tj.prototype.k = function () {
    throw Th(new Uh(), "next on empty iterator");
  };
  tj.prototype.$classData = v(
    { No: 0 },
    !1,
    "scala.collection.Iterator$$anon$19",
    { No: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function yo(a) {
    this.Po = a;
    this.nj = !1;
  }
  yo.prototype = new Kl();
  yo.prototype.constructor = yo;
  yo.prototype.m = function () {
    return !this.nj;
  };
  yo.prototype.k = function () {
    if (this.nj) return W().Y.k();
    this.nj = !0;
    return this.Po;
  };
  yo.prototype.$classData = v(
    { Oo: 0 },
    !1,
    "scala.collection.Iterator$$anon$20",
    { Oo: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Jo(a, b) {
    this.Zk = a;
    this.So = b;
    this.Ch = 0;
  }
  Jo.prototype = new Kl();
  Jo.prototype.constructor = Jo;
  Jo.prototype.v = function () {
    var a = (this.Zk - this.Ch) | 0;
    return 0 < a ? a : 0;
  };
  Jo.prototype.m = function () {
    return this.Ch < this.Zk;
  };
  Jo.prototype.k = function () {
    return this.m() ? ((this.Ch = (1 + this.Ch) | 0), Zd(this.So)) : W().Y.k();
  };
  Jo.prototype.$classData = v(
    { Ro: 0 },
    !1,
    "scala.collection.Iterator$$anon$22",
    { Ro: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Ko(a, b, c) {
    this.Dh = null;
    this.Eh = !1;
    this.al = this.Lg = null;
    this.$k = !1;
    if (null === a) throw nb(null);
    this.Lg = a;
    this.al = b;
    this.$k = c;
    this.Eh = !1;
  }
  Ko.prototype = new Kl();
  Ko.prototype.constructor = Ko;
  Ko.prototype.m = function () {
    if (!this.Eh) {
      if (!this.Lg.m()) return !1;
      for (this.Dh = this.Lg.k(); !!this.al.l(this.Dh) === this.$k; ) {
        if (!this.Lg.m()) return !1;
        this.Dh = this.Lg.k();
      }
      this.Eh = !0;
    }
    return !0;
  };
  Ko.prototype.k = function () {
    return this.m() ? ((this.Eh = !1), this.Dh) : W().Y.k();
  };
  Ko.prototype.$classData = v(
    { To: 0 },
    !1,
    "scala.collection.Iterator$$anon$6",
    { To: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Lo(a, b) {
    this.bl = this.Fh = null;
    if (null === a) throw nb(null);
    this.Fh = a;
    this.bl = b;
  }
  Lo.prototype = new Kl();
  Lo.prototype.constructor = Lo;
  Lo.prototype.v = function () {
    return this.Fh.v();
  };
  Lo.prototype.m = function () {
    return this.Fh.m();
  };
  Lo.prototype.k = function () {
    return this.bl.l(this.Fh.k());
  };
  Lo.prototype.$classData = v(
    { Uo: 0 },
    !1,
    "scala.collection.Iterator$$anon$9",
    { Uo: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Ll(a) {
    this.gd = a;
    this.$d = this.Jd = null;
    this.of = !1;
  }
  Ll.prototype = new Kl();
  Ll.prototype.constructor = Ll;
  Ll.prototype.m = function () {
    if (this.of) return !0;
    if (null !== this.gd) {
      if (this.gd.m()) return (this.of = !0);
      a: for (;;) {
        if (null === this.Jd) {
          this.$d = this.gd = null;
          var a = !1;
          break a;
        }
        this.gd = Zd(this.Jd.Xo).i();
        this.$d === this.Jd && (this.$d = this.$d.Gh);
        for (this.Jd = this.Jd.Gh; this.gd instanceof Ll; )
          (a = this.gd),
            (this.gd = a.gd),
            (this.of = a.of),
            null !== a.Jd &&
              (null === this.$d && (this.$d = a.$d),
              (a.$d.Gh = this.Jd),
              (this.Jd = a.Jd));
        if (this.of) {
          a = !0;
          break a;
        }
        if (null !== this.gd && this.gd.m()) {
          a = this.of = !0;
          break a;
        }
      }
      return a;
    }
    return !1;
  };
  Ll.prototype.k = function () {
    return this.m() ? ((this.of = !1), this.gd.k()) : W().Y.k();
  };
  Ll.prototype.Dd = function (a) {
    a = new Wd(a, null);
    null === this.Jd ? (this.Jd = a) : (this.$d.Gh = a);
    this.$d = a;
    null === this.gd && (this.gd = W().Y);
    return this;
  };
  Ll.prototype.$classData = v(
    { Vo: 0 },
    !1,
    "scala.collection.Iterator$ConcatIterator",
    { Vo: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Mo(a) {
    this.Hh = this.el = null;
    this.el = a;
    this.Hh = new Xd(this, new H(((b) => () => b.el)(this)));
  }
  Mo.prototype = new Kl();
  Mo.prototype.constructor = Mo;
  Mo.prototype.m = function () {
    return !Yd(this.Hh).f();
  };
  Mo.prototype.k = function () {
    if (this.m()) {
      var a = Yd(this.Hh),
        b = a.u();
      this.Hh = new Xd(this, new H(((c, d) => () => d.w())(this, a)));
      return b;
    }
    return W().Y.k();
  };
  Mo.prototype.$classData = v(
    { Yo: 0 },
    !1,
    "scala.collection.LinearSeqIterator",
    { Yo: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function No(a) {
    for (var b = 0; !a.f(); ) (b = (1 + b) | 0), (a = a.w());
    return b;
  }
  function Oo(a) {
    if (a.f()) throw Th(new Uh(), "LinearSeq.last");
    var b = a;
    for (a = a.w(); !a.f(); ) (b = a), (a = a.w());
    return b.u();
  }
  function en(a, b) {
    if (0 > b) throw og(new pg(), "" + b);
    a = a.Eb(b);
    if (a.f()) throw og(new pg(), "" + b);
    return a.u();
  }
  function Po(a, b) {
    for (; !a.f(); ) {
      if (b.l(a.u())) return !0;
      a = a.w();
    }
    return !1;
  }
  function Qo(a, b) {
    for (; !a.f(); ) {
      if (L(M(), a.u(), b)) return !0;
      a = a.w();
    }
    return !1;
  }
  function Ro(a, b) {
    if (b && b.$classData && b.$classData.Nb.Mg)
      a: for (;;) {
        if (a === b) {
          a = !0;
          break a;
        }
        if ((a.f() ? 0 : !b.f()) && L(M(), a.u(), b.u()))
          (a = a.w()), (b = b.w());
        else {
          a = a.f() && b.f();
          break a;
        }
      }
    else a = Rl(a, b);
    return a;
  }
  function So(a, b, c) {
    var d = 0 < c ? c : 0;
    for (a = a.Eb(c); !a.f(); ) {
      if (b.l(a.u())) return d;
      d = (1 + d) | 0;
      a = a.w();
    }
    return -1;
  }
  function To(a, b) {
    for (var c = 0; ; ) {
      if (c === b) return a.f() ? 0 : 1;
      if (a.f()) return -1;
      c = (1 + c) | 0;
      a = a.w();
    }
  }
  function Uo(a) {
    this.Kh = a;
  }
  Uo.prototype = new Kl();
  Uo.prototype.constructor = Uo;
  Uo.prototype.m = function () {
    return !this.Kh.f();
  };
  Uo.prototype.k = function () {
    var a = this.Kh.u();
    this.Kh = this.Kh.w();
    return a;
  };
  Uo.prototype.$classData = v(
    { ap: 0 },
    !1,
    "scala.collection.StrictOptimizedLinearSeqOps$$anon$1",
    { ap: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Lk() {
    this.re = this.uf = null;
    this.re = new Ce(0, 0, xd().Rk, xd().dj, 0, 0);
  }
  Lk.prototype = new q();
  Lk.prototype.constructor = Lk;
  e = Lk.prototype;
  e.cc = function () {};
  function Ph(a, b, c, d, f, g) {
    if (b instanceof Ce) {
      var h = ve(P(), f, g),
        k = we(P(), h);
      if (0 !== (b.S & k)) {
        a = ze(P(), b.S, h, k);
        h = b.ic(a);
        var l = b.Gd(a);
        l === d && L(M(), h, c)
          ? ((d = Ij(b, k)), (b.Db.a[d] = h))
          : ((a = Bd(Dd(), l)),
            (d = Hj(b, h, l, a, c, d, f, (5 + g) | 0)),
            (f = Ij(b, k)),
            (c = (((-1 + b.Db.a.length) | 0) - Jj(b, k)) | 0),
            b.Db.I((1 + f) | 0, b.Db, f, (c - f) | 0),
            (b.Db.a[c] = d),
            (b.S ^= k),
            (b.Qa |= k),
            (b.$b = re(b.$b, f)),
            (b.bb = (((-1 + b.bb) | 0) + d.Xa()) | 0),
            (b.Fc = (((b.Fc - a) | 0) + d.Cd()) | 0));
      } else if (0 !== (b.Qa & k))
        (k = ze(P(), b.Qa, h, k)),
          (k = b.Yd(k)),
          (h = k.Xa()),
          (l = k.Cd()),
          Ph(a, k, c, d, f, (5 + g) | 0),
          (b.bb = (b.bb + ((k.Xa() - h) | 0)) | 0),
          (b.Fc = (b.Fc + ((k.Cd() - l) | 0)) | 0);
      else {
        g = Ij(b, k);
        h = b.Db;
        a = new r((1 + h.a.length) | 0);
        h.I(0, a, 0, g);
        a.a[g] = c;
        h.I(g, a, (1 + g) | 0, (h.a.length - g) | 0);
        c = b.$b;
        if (0 > g) throw Vo();
        if (g > c.a.length) throw Vo();
        h = new t((1 + c.a.length) | 0);
        c.I(0, h, 0, g);
        h.a[g] = d;
        c.I(g, h, (1 + g) | 0, (c.a.length - g) | 0);
        b.S |= k;
        b.Db = a;
        b.$b = h;
        b.bb = (1 + b.bb) | 0;
        b.Fc = (b.Fc + f) | 0;
      }
    } else if (b instanceof zk)
      (d = Ql(b.Qb, c)), (b.Qb = 0 > d ? b.Qb.hc(c) : b.Qb.Gf(d, c));
    else throw new T(b);
  }
  function Mk(a) {
    if (0 === a.re.bb) return Ok().bg;
    null === a.uf && (a.uf = new Kk(a.re));
    return a.uf;
  }
  function Wo(a, b) {
    null !== a.uf && (a.re = Fk(a.re));
    a.uf = null;
    var c = mg(X(), b),
      d = Bd(Dd(), c);
    Ph(a, a.re, b, c, d, 0);
    return a;
  }
  function Nk(a, b) {
    null !== a.uf && (a.re = Fk(a.re));
    a.uf = null;
    if (b instanceof Kk) new Oh(a, b);
    else for (b = b.i(); b.m(); ) Wo(a, b.k());
    return a;
  }
  e.qb = function (a) {
    return Nk(this, a);
  };
  e.Oa = function (a) {
    return Wo(this, a);
  };
  e.Ua = function () {
    return Mk(this);
  };
  e.$classData = v({ Bp: 0 }, !1, "scala.collection.immutable.HashSetBuilder", {
    Bp: 1,
    b: 1,
    Ef: 1,
    Xc: 1,
    qc: 1,
    pc: 1,
  });
  function Xo() {
    this.hd = null;
    this.hd = Cf();
  }
  Xo.prototype = new Pl();
  Xo.prototype.constructor = Xo;
  Xo.prototype.ga = function (a) {
    return Yo(a) ? a : Ol.prototype.Ce.call(this, a);
  };
  Xo.prototype.Ce = function (a) {
    return Yo(a) ? a : Ol.prototype.Ce.call(this, a);
  };
  Xo.prototype.$classData = v(
    { Dp: 0 },
    !1,
    "scala.collection.immutable.IndexedSeq$",
    { Dp: 1, pj: 1, b: 1, Tc: 1, Hb: 1, c: 1 }
  );
  var Zo;
  function xf() {
    Zo || (Zo = new Xo());
    return Zo;
  }
  function gm() {
    this.ol = this.cg = null;
    $o(this);
  }
  gm.prototype = new q();
  gm.prototype.constructor = gm;
  e = gm.prototype;
  e.cc = function () {};
  function $o(a) {
    var b = new ie();
    Bf();
    a.ol = new am(new H(((c, d) => () => je(d))(a, b)));
    a.cg = b;
  }
  function ap(a) {
    le(a.cg, new H((() => () => Sk())(a)));
    return a.ol;
  }
  function bp(a, b) {
    var c = new ie();
    le(
      a.cg,
      new H(
        ((d, f, g) => () => {
          Bf();
          Bf();
          return new Pk(f, new am(new H(((h, k) => () => je(k))(d, g))));
        })(a, b, c)
      )
    );
    a.cg = c;
    return a;
  }
  function cp(a, b) {
    if (0 !== b.v()) {
      var c = new ie();
      le(
        a.cg,
        new H(
          ((d, f, g) => () =>
            dm(Bf(), f.i(), new H(((h, k) => () => je(k))(d, g))))(a, b, c)
        )
      );
      a.cg = c;
    }
    return a;
  }
  e.qb = function (a) {
    return cp(this, a);
  };
  e.Oa = function (a) {
    return bp(this, a);
  };
  e.Ua = function () {
    return ap(this);
  };
  e.$classData = v(
    { Ip: 0 },
    !1,
    "scala.collection.immutable.LazyList$LazyBuilder",
    { Ip: 1, b: 1, Ef: 1, Xc: 1, qc: 1, pc: 1 }
  );
  function dp(a) {
    this.Sg = a;
  }
  dp.prototype = new Kl();
  dp.prototype.constructor = dp;
  dp.prototype.m = function () {
    return !this.Sg.f();
  };
  dp.prototype.k = function () {
    if (this.Sg.f()) return W().Y.k();
    var a = Y(this.Sg).u();
    this.Sg = Y(this.Sg).gb();
    return a;
  };
  dp.prototype.$classData = v(
    { Kp: 0 },
    !1,
    "scala.collection.immutable.LazyList$LazyIterator",
    { Kp: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function ep() {
    fp = this;
    kj(new lj(), I(), I());
  }
  ep.prototype = new q();
  ep.prototype.constructor = ep;
  e = ep.prototype;
  e.od = function (a) {
    return Ac(I(), a);
  };
  e.X = function () {
    return new gp();
  };
  e.Fb = function () {
    return I();
  };
  e.ga = function (a) {
    return Ac(I(), a);
  };
  e.$classData = v({ Sp: 0 }, !1, "scala.collection.immutable.List$", {
    Sp: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var fp;
  function zc() {
    fp || (fp = new ep());
    return fp;
  }
  function hp(a) {
    a.Vc <= a.Jb && W().Y.k();
    a.zf = (1 + a.zf) | 0;
    for (var b = a.rl.Ud(a.zf); 0 === b.a.length; )
      (a.zf = (1 + a.zf) | 0), (b = a.rl.Ud(a.zf));
    a.Rh = a.eg;
    var c = (a.Vp / 2) | 0,
      d = (a.zf - c) | 0;
    a.yf = (((1 + c) | 0) - (0 > d ? -d | 0 : d)) | 0;
    c = a.yf;
    switch (c) {
      case 1:
        a.Ld = b;
        break;
      case 2:
        a.vf = b;
        break;
      case 3:
        a.wf = b;
        break;
      case 4:
        a.xf = b;
        break;
      case 5:
        a.dg = b;
        break;
      case 6:
        a.Cj = b;
        break;
      default:
        throw new T(c);
    }
    a.eg = (a.Rh + ba(b.a.length, 1 << ba(5, (-1 + a.yf) | 0))) | 0;
    a.eg > a.Ne && (a.eg = a.Ne);
    1 < a.yf && (a.Tg = (-1 + (1 << ba(5, a.yf))) | 0);
  }
  function ip(a) {
    var b = (((a.Jb - a.Vc) | 0) + a.Ne) | 0;
    b === a.eg && hp(a);
    if (1 < a.yf) {
      b = (b - a.Rh) | 0;
      var c = a.Tg ^ b;
      1024 > c
        ? (a.Ld = a.vf.a[31 & ((b >>> 5) | 0)])
        : (32768 > c
            ? (a.vf = a.wf.a[31 & ((b >>> 10) | 0)])
            : (1048576 > c
                ? (a.wf = a.xf.a[31 & ((b >>> 15) | 0)])
                : (33554432 > c
                    ? (a.xf = a.dg.a[31 & ((b >>> 20) | 0)])
                    : ((a.dg = a.Cj.a[(b >>> 25) | 0]), (a.xf = a.dg.a[0])),
                  (a.wf = a.xf.a[0])),
              (a.vf = a.wf.a[0])),
          (a.Ld = a.vf.a[0]));
      a.Tg = b;
    }
    a.Vc = (a.Vc - a.Jb) | 0;
    b = a.Ld.a.length;
    c = a.Vc;
    a.Me = b < c ? b : c;
    a.Jb = 0;
  }
  function jp(a, b, c) {
    this.Cj = this.dg = this.xf = this.wf = this.vf = null;
    this.rl = a;
    this.Ne = b;
    this.Vp = c;
    this.Ld = a.d;
    this.Me = this.Ld.a.length;
    this.Tg = this.Jb = 0;
    this.Vc = this.Ne;
    this.zf = 0;
    this.yf = 1;
    this.Rh = 0;
    this.eg = this.Me;
  }
  jp.prototype = new q();
  jp.prototype.constructor = jp;
  e = jp.prototype;
  e.i = function () {
    return this;
  };
  e.f = function () {
    return this.Vc <= this.Jb;
  };
  e.Dd = function (a) {
    return new Ll(this).Dd(a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.Fe = function (a) {
    return Kd(this, a);
  };
  e.le = function (a, b, c, d) {
    return Vd(this, a, b, c, d);
  };
  e.v = function () {
    return (this.Vc - this.Jb) | 0;
  };
  e.m = function () {
    return this.Vc > this.Jb;
  };
  e.k = function () {
    this.Jb === this.Me && ip(this);
    var a = this.Ld.a[this.Jb];
    this.Jb = (1 + this.Jb) | 0;
    return a;
  };
  e.Ed = function (a) {
    if (0 < a) {
      a = (((((this.Jb - this.Vc) | 0) + this.Ne) | 0) + a) | 0;
      var b = this.Ne;
      a = a < b ? a : b;
      if (a === this.Ne) this.Me = this.Vc = this.Jb = 0;
      else {
        for (; a >= this.eg; ) hp(this);
        b = (a - this.Rh) | 0;
        if (1 < this.yf) {
          var c = this.Tg ^ b;
          1024 > c ||
            (32768 > c ||
              (1048576 > c ||
                (33554432 > c || (this.dg = this.Cj.a[(b >>> 25) | 0]),
                (this.xf = this.dg.a[31 & ((b >>> 20) | 0)])),
              (this.wf = this.xf.a[31 & ((b >>> 15) | 0)])),
            (this.vf = this.wf.a[31 & ((b >>> 10) | 0)]));
          this.Ld = this.vf.a[31 & ((b >>> 5) | 0)];
          this.Tg = b;
        }
        this.Me = this.Ld.a.length;
        this.Jb = 31 & b;
        this.Vc = (this.Jb + ((this.Ne - a) | 0)) | 0;
        this.Me > this.Vc && (this.Me = this.Vc);
      }
    }
    return this;
  };
  e.Ob = function (a, b, c) {
    var d = Nd(Od(), a),
      f = (this.Vc - this.Jb) | 0;
    c = c < f ? c : f;
    d = (d - b) | 0;
    d = c < d ? c : d;
    d = 0 < d ? d : 0;
    c = 0;
    for (f = a instanceof r; c < d; ) {
      this.Jb === this.Me && ip(this);
      var g = (d - c) | 0,
        h = (this.Ld.a.length - this.Jb) | 0;
      g = g < h ? g : h;
      f
        ? this.Ld.I(this.Jb, a, (b + c) | 0, g)
        : zh(Bh(), this.Ld, this.Jb, a, (b + c) | 0, g);
      this.Jb = (this.Jb + g) | 0;
      c = (c + g) | 0;
    }
    return d;
  };
  e.$classData = v(
    { Up: 0 },
    !1,
    "scala.collection.immutable.NewVectorIterator",
    { Up: 1, b: 1, ca: 1, r: 1, s: 1, Xb: 1 }
  );
  function wf() {
    this.hd = null;
    this.hd = zc();
  }
  wf.prototype = new Pl();
  wf.prototype.constructor = wf;
  wf.prototype.ga = function (a) {
    return a && a.$classData && a.$classData.Nb.nc
      ? a
      : Ol.prototype.Ce.call(this, a);
  };
  wf.prototype.Ce = function (a) {
    return a && a.$classData && a.$classData.Nb.nc
      ? a
      : Ol.prototype.Ce.call(this, a);
  };
  wf.prototype.$classData = v(
    { cq: 0 },
    !1,
    "scala.collection.immutable.Seq$",
    { cq: 1, pj: 1, b: 1, Tc: 1, Hb: 1, c: 1 }
  );
  var vf;
  function Yk() {
    this.Cf = null;
    this.Vg = !1;
    this.Df = null;
    this.Cf = Zk();
    this.Vg = !1;
  }
  Yk.prototype = new q();
  Yk.prototype.constructor = Yk;
  e = Yk.prototype;
  e.cc = function () {};
  function Wk(a) {
    return a.Vg ? Mk(a.Df) : a.Cf;
  }
  function Xk(a, b) {
    return a.Vg ? (Nk(a.Df, b), a) : Yh(a, b);
  }
  e.qb = function (a) {
    return Xk(this, a);
  };
  e.Oa = function (a) {
    if (this.Vg) Wo(this.Df, a);
    else if (4 > this.Cf.Xa()) this.Cf = this.Cf.Sf(a);
    else if (!this.Cf.F(a)) {
      this.Vg = !0;
      null === this.Df && (this.Df = new Lk());
      var b = this.Cf;
      this.Df.Oa(b.ue).Oa(b.ce).Oa(b.Od).Oa(b.Pd);
      Wo(this.Df, a);
    }
    return this;
  };
  e.Ua = function () {
    return Wk(this);
  };
  e.$classData = v({ mq: 0 }, !1, "scala.collection.immutable.SetBuilderImpl", {
    mq: 1,
    b: 1,
    Ef: 1,
    Xc: 1,
    qc: 1,
    pc: 1,
  });
  function kp(a) {
    this.tf = this.lc = 0;
    this.qe = null;
    this.Gc = 0;
    this.ag = this.ae = null;
    this.Fj = 0;
    be(this, a);
    this.Fj = 0;
  }
  kp.prototype = new de();
  kp.prototype.constructor = kp;
  e = kp.prototype;
  e.i = function () {
    return this;
  };
  e.f = function () {
    return !this.m();
  };
  e.Dd = function (a) {
    return new Ll(this).Dd(a);
  };
  e.Ed = function (a) {
    return qj(this, a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.Fe = function (a) {
    return Kd(this, a);
  };
  e.Ob = function (a, b, c) {
    return Md(this, a, b, c);
  };
  e.le = function (a, b, c, d) {
    return Vd(this, a, b, c, d);
  };
  e.v = function () {
    return -1;
  };
  e.H = function () {
    return this.Fj;
  };
  e.k = function () {
    if (!this.m()) throw vo();
    this.Fj = this.qe.Gd(this.lc);
    this.lc = (1 + this.lc) | 0;
    return this;
  };
  e.$classData = v(
    { nq: 0 },
    !1,
    "scala.collection.immutable.SetHashIterator",
    { nq: 1, ml: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function lp(a) {
    this.tf = this.lc = 0;
    this.qe = null;
    this.Gc = 0;
    this.ag = this.ae = null;
    be(this, a);
  }
  lp.prototype = new de();
  lp.prototype.constructor = lp;
  e = lp.prototype;
  e.i = function () {
    return this;
  };
  e.f = function () {
    return !this.m();
  };
  e.Dd = function (a) {
    return new Ll(this).Dd(a);
  };
  e.Ed = function (a) {
    return qj(this, a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.Fe = function (a) {
    return Kd(this, a);
  };
  e.Ob = function (a, b, c) {
    return Md(this, a, b, c);
  };
  e.le = function (a, b, c, d) {
    return Vd(this, a, b, c, d);
  };
  e.v = function () {
    return -1;
  };
  e.k = function () {
    if (!this.m()) throw vo();
    var a = this.qe.ic(this.lc);
    this.lc = (1 + this.lc) | 0;
    return a;
  };
  e.$classData = v({ oq: 0 }, !1, "scala.collection.immutable.SetIterator", {
    oq: 1,
    ml: 1,
    b: 1,
    ca: 1,
    r: 1,
    s: 1,
  });
  function mp() {
    this.zl = 0;
    this.Al = null;
    np = this;
    try {
      var a = Wc(
        ad(),
        "scala.collection.immutable.Vector.defaultApplyPreferredMaxLength",
        "250"
      );
      var b = ge(he(), a);
    } catch (c) {
      throw c;
    }
    this.zl = b;
    this.Al = new jp(Oe(), 0, 0);
  }
  mp.prototype = new q();
  mp.prototype.constructor = mp;
  e = mp.prototype;
  e.od = function (a) {
    return Ak(0, a);
  };
  function Ak(a, b) {
    if (b instanceof op) return b;
    a = b.v();
    return 0 === a
      ? Oe()
      : 0 < a && 32 >= a
      ? (ff(b)
          ? ((a = new r(a)), b.Ob(a, 0, 2147483647), (b = a))
          : ((a = new r(a)), b.i().Ob(a, 0, 2147483647), (b = a)),
        new Pe(b))
      : pp(new qp(), b).Id();
  }
  e.X = function () {
    return new qp();
  };
  e.ga = function (a) {
    return Ak(0, a);
  };
  e.Fb = function () {
    return Oe();
  };
  e.$classData = v({ yq: 0 }, !1, "scala.collection.immutable.Vector$", {
    yq: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var np;
  function Cf() {
    np || (np = new mp());
    return np;
  }
  function rp(a, b) {
    var c = b.a.length;
    if (0 < c) {
      32 === a.ea && sp(a);
      var d = (32 - a.ea) | 0;
      d = d < c ? d : c;
      c = (c - d) | 0;
      b.I(0, a.Da, a.ea, d);
      a.ea = (a.ea + d) | 0;
      0 < c && (sp(a), b.I(d, a.Da, 0, c), (a.ea = (a.ea + c) | 0));
    }
  }
  function tp(a, b) {
    for (var c = b.xd(), d = 0; d < c; ) {
      var f = b.Ud(d),
        g = (c / 2) | 0,
        h = (d - g) | 0;
      g = (((1 + g) | 0) - (0 > h ? -h | 0 : h)) | 0;
      1 === g
        ? rp(a, f)
        : bf(
            R(),
            (-2 + g) | 0,
            f,
            new E(
              ((k) => (l) => {
                rp(k, l);
              })(a)
            )
          );
      d = (1 + d) | 0;
    }
    return a;
  }
  function sp(a) {
    var b = (32 + a.Ub) | 0,
      c = b ^ a.Ub;
    a.Ub = b;
    a.ea = 0;
    if (1024 > c)
      1 === a.nb &&
        ((a.U = new (x(x(w)).G)(32)),
        (a.U.a[0] = a.Da),
        (a.nb = (1 + a.nb) | 0)),
        (a.Da = new r(32)),
        (a.U.a[31 & ((b >>> 5) | 0)] = a.Da);
    else if (32768 > c)
      2 === a.nb &&
        ((a.na = new (x(x(x(w))).G)(32)),
        (a.na.a[0] = a.U),
        (a.nb = (1 + a.nb) | 0)),
        (a.Da = new r(32)),
        (a.U = new (x(x(w)).G)(32)),
        (a.U.a[31 & ((b >>> 5) | 0)] = a.Da),
        (a.na.a[31 & ((b >>> 10) | 0)] = a.U);
    else if (1048576 > c)
      3 === a.nb &&
        ((a.Sa = new (x(x(x(x(w)))).G)(32)),
        (a.Sa.a[0] = a.na),
        (a.nb = (1 + a.nb) | 0)),
        (a.Da = new r(32)),
        (a.U = new (x(x(w)).G)(32)),
        (a.na = new (x(x(x(w))).G)(32)),
        (a.U.a[31 & ((b >>> 5) | 0)] = a.Da),
        (a.na.a[31 & ((b >>> 10) | 0)] = a.U),
        (a.Sa.a[31 & ((b >>> 15) | 0)] = a.na);
    else if (33554432 > c)
      4 === a.nb &&
        ((a.vb = new (x(x(x(x(x(w))))).G)(32)),
        (a.vb.a[0] = a.Sa),
        (a.nb = (1 + a.nb) | 0)),
        (a.Da = new r(32)),
        (a.U = new (x(x(w)).G)(32)),
        (a.na = new (x(x(x(w))).G)(32)),
        (a.Sa = new (x(x(x(x(w)))).G)(32)),
        (a.U.a[31 & ((b >>> 5) | 0)] = a.Da),
        (a.na.a[31 & ((b >>> 10) | 0)] = a.U),
        (a.Sa.a[31 & ((b >>> 15) | 0)] = a.na),
        (a.vb.a[31 & ((b >>> 20) | 0)] = a.Sa);
    else if (1073741824 > c)
      5 === a.nb &&
        ((a.bc = new (x(x(x(x(x(x(w)))))).G)(64)),
        (a.bc.a[0] = a.vb),
        (a.nb = (1 + a.nb) | 0)),
        (a.Da = new r(32)),
        (a.U = new (x(x(w)).G)(32)),
        (a.na = new (x(x(x(w))).G)(32)),
        (a.Sa = new (x(x(x(x(w)))).G)(32)),
        (a.vb = new (x(x(x(x(x(w))))).G)(32)),
        (a.U.a[31 & ((b >>> 5) | 0)] = a.Da),
        (a.na.a[31 & ((b >>> 10) | 0)] = a.U),
        (a.Sa.a[31 & ((b >>> 15) | 0)] = a.na),
        (a.vb.a[31 & ((b >>> 20) | 0)] = a.Sa),
        (a.bc.a[31 & ((b >>> 25) | 0)] = a.vb);
    else
      throw rd(
        "advance1(" +
          b +
          ", " +
          c +
          "): a1\x3d" +
          a.Da +
          ", a2\x3d" +
          a.U +
          ", a3\x3d" +
          a.na +
          ", a4\x3d" +
          a.Sa +
          ", a5\x3d" +
          a.vb +
          ", a6\x3d" +
          a.bc +
          ", depth\x3d" +
          a.nb
      );
  }
  function qp() {
    this.Da = this.U = this.na = this.Sa = this.vb = this.bc = null;
    this.nb = this.Wc = this.Ub = this.ea = 0;
    this.Da = new r(32);
    this.Wc = this.Ub = this.ea = 0;
    this.nb = 1;
  }
  qp.prototype = new q();
  qp.prototype.constructor = qp;
  e = qp.prototype;
  e.cc = function () {};
  function up(a, b) {
    a.nb = 1;
    var c = b.a.length;
    a.ea = 31 & c;
    a.Ub = (c - a.ea) | 0;
    a.Da = 32 === b.a.length ? b : N(O(), b, 0, 32);
    0 === a.ea && 0 < a.Ub && ((a.ea = 32), (a.Ub = (-32 + a.Ub) | 0));
  }
  function vp(a, b) {
    var c = b.xd();
    switch (c) {
      case 0:
        break;
      case 1:
        a.nb = 1;
        c = b.d.a.length;
        a.ea = 31 & c;
        a.Ub = (c - a.ea) | 0;
        b = b.d;
        a.Da = 32 === b.a.length ? b : N(O(), b, 0, 32);
        break;
      case 3:
        c = b.Kb;
        var d = b.e;
        a.Da = 32 === d.a.length ? d : N(O(), d, 0, 32);
        a.nb = 2;
        a.Wc = (32 - b.ac) | 0;
        d = (b.j + a.Wc) | 0;
        a.ea = 31 & d;
        a.Ub = (d - a.ea) | 0;
        a.U = new (x(x(w)).G)(32);
        a.U.a[0] = b.d;
        c.I(0, a.U, 1, c.a.length);
        a.U.a[(1 + c.a.length) | 0] = a.Da;
        break;
      case 5:
        c = b.db;
        d = b.kb;
        var f = b.e;
        a.Da = 32 === f.a.length ? f : N(O(), f, 0, 32);
        a.nb = 3;
        a.Wc = (1024 - b.Lb) | 0;
        f = (b.j + a.Wc) | 0;
        a.ea = 31 & f;
        a.Ub = (f - a.ea) | 0;
        a.na = new (x(x(x(w))).G)(32);
        a.na.a[0] = V(R(), b.d, b.Sb);
        c.I(0, a.na, 1, c.a.length);
        a.U = nd(O(), d, 32);
        a.na.a[(1 + c.a.length) | 0] = a.U;
        a.U.a[d.a.length] = a.Da;
        break;
      case 7:
        c = b.Aa;
        d = b.Ha;
        f = b.Ga;
        var g = b.e;
        a.Da = 32 === g.a.length ? g : N(O(), g, 0, 32);
        a.nb = 4;
        a.Wc = (32768 - b.eb) | 0;
        g = (b.j + a.Wc) | 0;
        a.ea = 31 & g;
        a.Ub = (g - a.ea) | 0;
        a.Sa = new (x(x(x(x(w)))).G)(32);
        a.Sa.a[0] = V(R(), V(R(), b.d, b.lb), b.mb);
        c.I(0, a.Sa, 1, c.a.length);
        a.na = nd(O(), d, 32);
        a.U = nd(O(), f, 32);
        a.Sa.a[(1 + c.a.length) | 0] = a.na;
        a.na.a[d.a.length] = a.U;
        a.U.a[f.a.length] = a.Da;
        break;
      case 9:
        c = b.da;
        d = b.ka;
        f = b.ja;
        g = b.ia;
        var h = b.e;
        a.Da = 32 === h.a.length ? h : N(O(), h, 0, 32);
        a.nb = 5;
        a.Wc = (1048576 - b.Ba) | 0;
        h = (b.j + a.Wc) | 0;
        a.ea = 31 & h;
        a.Ub = (h - a.ea) | 0;
        a.vb = new (x(x(x(x(x(w))))).G)(32);
        a.vb.a[0] = V(R(), V(R(), V(R(), b.d, b.Ia), b.Ja), b.Ka);
        c.I(0, a.vb, 1, c.a.length);
        a.Sa = nd(O(), d, 32);
        a.na = nd(O(), f, 32);
        a.U = nd(O(), g, 32);
        a.vb.a[(1 + c.a.length) | 0] = a.Sa;
        a.Sa.a[d.a.length] = a.na;
        a.na.a[f.a.length] = a.U;
        a.U.a[g.a.length] = a.Da;
        break;
      case 11:
        c = b.T;
        d = b.ba;
        f = b.aa;
        g = b.$;
        h = b.Z;
        var k = b.e;
        a.Da = 32 === k.a.length ? k : N(O(), k, 0, 32);
        a.nb = 6;
        a.Wc = (33554432 - b.ra) | 0;
        k = (b.j + a.Wc) | 0;
        a.ea = 31 & k;
        a.Ub = (k - a.ea) | 0;
        a.bc = new (x(x(x(x(x(x(w)))))).G)(32);
        a.bc.a[0] = V(R(), V(R(), V(R(), V(R(), b.d, b.sa), b.ta), b.ua), b.va);
        c.I(0, a.bc, 1, c.a.length);
        a.vb = nd(O(), d, 32);
        a.Sa = nd(O(), f, 32);
        a.na = nd(O(), g, 32);
        a.U = nd(O(), h, 32);
        a.bc.a[(1 + c.a.length) | 0] = a.vb;
        a.vb.a[d.a.length] = a.Sa;
        a.Sa.a[f.a.length] = a.na;
        a.na.a[g.a.length] = a.U;
        a.U.a[h.a.length] = a.Da;
        break;
      default:
        throw new T(c);
    }
    0 === a.ea && 0 < a.Ub && ((a.ea = 32), (a.Ub = (-32 + a.Ub) | 0));
    return a;
  }
  function wp(a, b) {
    32 === a.ea && sp(a);
    a.Da.a[a.ea] = b;
    a.ea = (1 + a.ea) | 0;
    return a;
  }
  function pp(a, b) {
    return b instanceof op
      ? 0 === a.ea && 0 === a.Ub
        ? vp(a, b)
        : tp(a, b)
      : Yh(a, b);
  }
  e.Id = function () {
    var a = (this.ea + this.Ub) | 0,
      b = (a - this.Wc) | 0;
    if (0 === b) return Cf(), Oe();
    if (32 >= a) {
      if (32 === b) return new Pe(this.Da);
      var c = this.Da;
      return new Pe(nd(O(), c, b));
    }
    if (1024 >= a) {
      var d = 31 & ((-1 + a) | 0),
        f = (((-1 + a) | 0) >>> 5) | 0,
        g = this.U,
        h = N(O(), g, 1, f),
        k = this.U.a[0],
        l = this.U.a[f],
        p = (1 + d) | 0,
        u = l.a.length === p ? l : nd(O(), l, p);
      return new Ue(k, (32 - this.Wc) | 0, h, u, b);
    }
    if (32768 >= a) {
      var y = 31 & ((-1 + a) | 0),
        D = 31 & ((((-1 + a) | 0) >>> 5) | 0),
        K = (((-1 + a) | 0) >>> 10) | 0,
        J = this.na,
        Z = N(O(), J, 1, K),
        wa = this.na.a[0],
        Ha = wa.a.length,
        ka = N(O(), wa, 1, Ha),
        Ka = this.na.a[0].a[0],
        qa = this.na.a[K],
        Gd = nd(O(), qa, D),
        Ug = this.na.a[K].a[D],
        Vg = (1 + y) | 0,
        Nj = Ug.a.length === Vg ? Ug : nd(O(), Ug, Vg),
        Oj = Ka.a.length;
      return new Ve(Ka, Oj, ka, (Oj + (ka.a.length << 5)) | 0, Z, Gd, Nj, b);
    }
    if (1048576 >= a) {
      var Pj = 31 & ((-1 + a) | 0),
        Wg = 31 & ((((-1 + a) | 0) >>> 5) | 0),
        Qe = 31 & ((((-1 + a) | 0) >>> 10) | 0),
        Re = (((-1 + a) | 0) >>> 15) | 0,
        rm = this.Sa,
        Qj = N(O(), rm, 1, Re),
        Rj = this.Sa.a[0],
        Sj = Rj.a.length,
        Xg = N(O(), Rj, 1, Sj),
        Tj = this.Sa.a[0].a[0],
        Uj = Tj.a.length,
        Yg = N(O(), Tj, 1, Uj),
        Vj = this.Sa.a[0].a[0].a[0],
        Wj = this.Sa.a[Re],
        Xj = nd(O(), Wj, Qe),
        Yj = this.Sa.a[Re].a[Qe],
        sm = nd(O(), Yj, Wg),
        Zg = this.Sa.a[Re].a[Qe].a[Wg],
        $g = (1 + Pj) | 0,
        tm = Zg.a.length === $g ? Zg : nd(O(), Zg, $g),
        Zj = Vj.a.length,
        ah = (Zj + (Yg.a.length << 5)) | 0;
      return new We(
        Vj,
        Zj,
        Yg,
        ah,
        Xg,
        (ah + (Xg.a.length << 10)) | 0,
        Qj,
        Xj,
        sm,
        tm,
        b
      );
    }
    if (33554432 >= a) {
      var ak = 31 & ((-1 + a) | 0),
        bk = 31 & ((((-1 + a) | 0) >>> 5) | 0),
        Se = 31 & ((((-1 + a) | 0) >>> 10) | 0),
        Hd = 31 & ((((-1 + a) | 0) >>> 15) | 0),
        Id = (((-1 + a) | 0) >>> 20) | 0,
        ck = this.vb,
        dk = N(O(), ck, 1, Id),
        ek = this.vb.a[0],
        fk = ek.a.length,
        bh = N(O(), ek, 1, fk),
        gk = this.vb.a[0].a[0],
        hk = gk.a.length,
        ch = N(O(), gk, 1, hk),
        dh = this.vb.a[0].a[0].a[0],
        um = dh.a.length,
        ik = N(O(), dh, 1, um),
        eh = this.vb.a[0].a[0].a[0].a[0],
        vm = this.vb.a[Id],
        wm = nd(O(), vm, Hd),
        jk = this.vb.a[Id].a[Hd],
        xm = nd(O(), jk, Se),
        ym = this.vb.a[Id].a[Hd].a[Se],
        kk = nd(O(), ym, bk),
        Te = this.vb.a[Id].a[Hd].a[Se].a[bk],
        fh = (1 + ak) | 0,
        zm = Te.a.length === fh ? Te : nd(O(), Te, fh),
        gh = eh.a.length,
        hh = (gh + (ik.a.length << 5)) | 0,
        lk = (hh + (ch.a.length << 10)) | 0;
      return new Xe(
        eh,
        gh,
        ik,
        hh,
        ch,
        lk,
        bh,
        (lk + (bh.a.length << 15)) | 0,
        dk,
        wm,
        xm,
        kk,
        zm,
        b
      );
    }
    var mk = 31 & ((-1 + a) | 0),
      ih = 31 & ((((-1 + a) | 0) >>> 5) | 0),
      jh = 31 & ((((-1 + a) | 0) >>> 10) | 0),
      Jd = 31 & ((((-1 + a) | 0) >>> 15) | 0),
      Fc = 31 & ((((-1 + a) | 0) >>> 20) | 0),
      Gc = (((-1 + a) | 0) >>> 25) | 0,
      nk = this.bc,
      ok = N(O(), nk, 1, Gc),
      pk = this.bc.a[0],
      qk = pk.a.length,
      kh = N(O(), pk, 1, qk),
      lh = this.bc.a[0].a[0],
      Am = lh.a.length,
      rk = N(O(), lh, 1, Am),
      mh = this.bc.a[0].a[0].a[0],
      Bm = mh.a.length,
      sk = N(O(), mh, 1, Bm),
      nh = this.bc.a[0].a[0].a[0].a[0],
      Cm = nh.a.length,
      tk = N(O(), nh, 1, Cm),
      oh = this.bc.a[0].a[0].a[0].a[0].a[0],
      Dm = this.bc.a[Gc],
      Em = nd(O(), Dm, Fc),
      uk = this.bc.a[Gc].a[Fc],
      vk = nd(O(), uk, Jd),
      wk = this.bc.a[Gc].a[Fc].a[Jd],
      xk = nd(O(), wk, jh),
      Mt = this.bc.a[Gc].a[Fc].a[Jd].a[jh],
      Nt = nd(O(), Mt, ih),
      bo = this.bc.a[Gc].a[Fc].a[Jd].a[jh].a[ih],
      Kr = (1 + mk) | 0,
      Ot = bo.a.length === Kr ? bo : nd(O(), bo, Kr),
      Lr = oh.a.length,
      Mr = (Lr + (tk.a.length << 5)) | 0,
      Nr = (Mr + (sk.a.length << 10)) | 0,
      Or = (Nr + (rk.a.length << 15)) | 0;
    return new S(
      oh,
      Lr,
      tk,
      Mr,
      sk,
      Nr,
      rk,
      Or,
      kh,
      (Or + (kh.a.length << 20)) | 0,
      ok,
      Em,
      vk,
      xk,
      Nt,
      Ot,
      b
    );
  };
  e.z = function () {
    return (
      "VectorBuilder(len1\x3d" +
      this.ea +
      ", lenRest\x3d" +
      this.Ub +
      ", offset\x3d" +
      this.Wc +
      ", depth\x3d" +
      this.nb +
      ")"
    );
  };
  e.Ua = function () {
    return this.Id();
  };
  e.qb = function (a) {
    return pp(this, a);
  };
  e.Oa = function (a) {
    return wp(this, a);
  };
  e.$classData = v({ Gq: 0 }, !1, "scala.collection.immutable.VectorBuilder", {
    Gq: 1,
    b: 1,
    Ef: 1,
    Xc: 1,
    qc: 1,
    pc: 1,
  });
  function xp() {}
  xp.prototype = new q();
  xp.prototype.constructor = xp;
  e = xp.prototype;
  e.od = function (a) {
    return yp(a);
  };
  function yp(a) {
    var b = a.v();
    if (0 <= b) {
      var c = new r(16 < b ? b : 16);
      fj(a) ? a.Ob(c, 0, 2147483647) : a.i().Ob(c, 0, 2147483647);
      a = new zp();
      a.de = c;
      a.ob = b;
      return a;
    }
    return Ap(Bp(), a);
  }
  e.X = function () {
    return new Bj();
  };
  e.Fb = function () {
    return Bp();
  };
  e.ga = function (a) {
    return yp(a);
  };
  e.$classData = v({ Mq: 0 }, !1, "scala.collection.mutable.ArrayBuffer$", {
    Mq: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var Cp;
  function Dp() {
    Cp || (Cp = new xp());
    return Cp;
  }
  function Bj() {
    this.ee = null;
    Im(this, Bp());
  }
  Bj.prototype = new Km();
  Bj.prototype.constructor = Bj;
  Bj.prototype.cc = function (a) {
    Ep(this.ee, a);
  };
  Bj.prototype.$classData = v(
    { Nq: 0 },
    !1,
    "scala.collection.mutable.ArrayBuffer$$anon$1",
    { Nq: 1, Vh: 1, b: 1, Xc: 1, qc: 1, pc: 1 }
  );
  function Fp() {}
  Fp.prototype = new q();
  Fp.prototype.constructor = Fp;
  e = Fp.prototype;
  e.od = function (a) {
    return Gp(a);
  };
  function Gp(a) {
    var b = a.v();
    if (0 <= b) {
      var c = Hp(0, b);
      fj(a) ? a.Ob(c, 0, 2147483647) : a.i().Ob(c, 0, 2147483647);
      return Ip(new Jp(), c, b);
    }
    return Kp(Lp(), a);
  }
  e.X = function () {
    return new Mp();
  };
  function Hp(a, b) {
    if (!(0 <= b))
      throw rd("requirement failed: Non-negative array size required");
    a = ((-2147483648 >>> ca(b)) | 0) << 1;
    if (!(0 <= a))
      throw rd(
        "requirement failed: ArrayDeque too big - cannot allocate ArrayDeque of length " +
          b
      );
    return new r(16 < a ? a : 16);
  }
  e.Fb = function () {
    return Lp();
  };
  e.ga = function (a) {
    return Gp(a);
  };
  e.$classData = v({ Rq: 0 }, !1, "scala.collection.mutable.ArrayDeque$", {
    Rq: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var Np;
  function Op() {
    Np || (Np = new Fp());
    return Np;
  }
  function Mp() {
    this.ee = null;
    Im(this, Lp());
  }
  Mp.prototype = new Km();
  Mp.prototype.constructor = Mp;
  Mp.prototype.cc = function (a) {
    var b = this.ee;
    a > (((b.wb - b.xb) | 0) & ((-1 + b.V.a.length) | 0)) &&
      a >= b.V.a.length &&
      Pp(b, a);
  };
  Mp.prototype.$classData = v(
    { Sq: 0 },
    !1,
    "scala.collection.mutable.ArrayDeque$$anon$1",
    { Sq: 1, Vh: 1, b: 1, Xc: 1, qc: 1, pc: 1 }
  );
  function $h() {
    this.hd = null;
    this.hd = Qp();
  }
  $h.prototype = new Pl();
  $h.prototype.constructor = $h;
  $h.prototype.$classData = v(
    { er: 0 },
    !1,
    "scala.collection.mutable.Buffer$",
    { er: 1, pj: 1, b: 1, Tc: 1, Hb: 1, c: 1 }
  );
  var Zh;
  function fl(a, b) {
    this.ee = null;
    Im(this, hl(new gl(), a, b));
  }
  fl.prototype = new Km();
  fl.prototype.constructor = fl;
  fl.prototype.cc = function (a) {
    this.ee.cc(a);
  };
  fl.prototype.$classData = v(
    { lr: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$4",
    { lr: 1, Vh: 1, b: 1, Xc: 1, qc: 1, pc: 1 }
  );
  function Rp(a, b) {
    if (null === b) throw nb(null);
    a.ah = b;
    a.$e = 0;
    a.we = null;
    a.bh = b.yb.a.length;
  }
  function Sp() {
    this.$e = 0;
    this.we = null;
    this.bh = 0;
    this.ah = null;
  }
  Sp.prototype = new Kl();
  Sp.prototype.constructor = Sp;
  function Tp() {}
  Tp.prototype = Sp.prototype;
  Sp.prototype.m = function () {
    if (null !== this.we) return !0;
    for (; this.$e < this.bh; ) {
      var a = this.ah.yb.a[this.$e];
      this.$e = (1 + this.$e) | 0;
      if (null !== a) return (this.we = a), !0;
    }
    return !1;
  };
  Sp.prototype.k = function () {
    if (this.m()) {
      var a = this.Qi(this.we);
      this.we = this.we.pb;
      return a;
    }
    return W().Y.k();
  };
  function Up() {
    this.ch = null;
  }
  Up.prototype = new q();
  Up.prototype.constructor = Up;
  function Vp() {}
  Vp.prototype = Up.prototype;
  Up.prototype.cc = function () {};
  Up.prototype.qb = function (a) {
    return Yh(this, a);
  };
  Up.prototype.Ua = function () {
    return this.ch;
  };
  function Wp() {
    this.hd = null;
    this.hd = Dp();
  }
  Wp.prototype = new Pl();
  Wp.prototype.constructor = Wp;
  Wp.prototype.$classData = v(
    { nr: 0 },
    !1,
    "scala.collection.mutable.IndexedSeq$",
    { nr: 1, pj: 1, b: 1, Tc: 1, Hb: 1, c: 1 }
  );
  var Xp;
  function Yp() {}
  Yp.prototype = new q();
  Yp.prototype.constructor = Yp;
  e = Yp.prototype;
  e.od = function (a) {
    return Zp(new gp(), a);
  };
  e.X = function () {
    return Im(new Jm(), new gp());
  };
  e.Fb = function () {
    return new gp();
  };
  e.ga = function (a) {
    return Zp(new gp(), a);
  };
  e.$classData = v({ pr: 0 }, !1, "scala.collection.mutable.ListBuffer$", {
    pr: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var $p;
  function aq() {
    $p || ($p = new Yp());
    return $p;
  }
  function bq(a, b) {
    this.Il = 0;
    this.Jl = a;
    this.sr = b;
    this.Il = Zd(b) | 0;
  }
  bq.prototype = new Kl();
  bq.prototype.constructor = bq;
  bq.prototype.m = function () {
    kf || (kf = new jf());
    var a = this.Il;
    if ((Zd(this.sr) | 0) !== a) throw new uo();
    return this.Jl.m();
  };
  bq.prototype.k = function () {
    return this.Jl.k();
  };
  bq.prototype.$classData = v(
    { rr: 0 },
    !1,
    "scala.collection.mutable.MutationTracker$CheckedIterator",
    { rr: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function cq() {}
  cq.prototype = new q();
  cq.prototype.constructor = cq;
  e = cq.prototype;
  e.od = function (a) {
    return Kp(new Ck(16), a);
  };
  e.X = function () {
    return Im(new Jm(), new Ck(16));
  };
  e.Fb = function () {
    return new Ck(16);
  };
  e.ga = function (a) {
    return Kp(new Ck(16), a);
  };
  e.$classData = v({ ur: 0 }, !1, "scala.collection.mutable.Queue$", {
    ur: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var dq;
  function eq() {
    dq || (dq = new cq());
    return dq;
  }
  var gq = function fq(a, b) {
    return b.Cc.isArrayClass ? "Array[" + fq(a, Kc(b)) + "]" : b.Cc.name;
  };
  function hg(a) {
    this.Kl = 0;
    this.Tr = a;
    this.Yh = 0;
    this.Kl = a.rb();
  }
  hg.prototype = new Kl();
  hg.prototype.constructor = hg;
  hg.prototype.m = function () {
    return this.Yh < this.Kl;
  };
  hg.prototype.k = function () {
    var a = this.Tr.sb(this.Yh);
    this.Yh = (1 + this.Yh) | 0;
    return a;
  };
  hg.prototype.$classData = v(
    { Sr: 0 },
    !1,
    "scala.runtime.ScalaRunTime$$anon$1",
    { Sr: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function hq() {}
  hq.prototype = new q();
  hq.prototype.constructor = hq;
  e = hq.prototype;
  e.od = function (a) {
    return iq(a);
  };
  e.X = function () {
    return jq();
  };
  function iq(a) {
    var b = jq();
    return Yh(b, a).Ua();
  }
  e.ga = function (a) {
    return iq(a);
  };
  e.Fb = function () {
    return jq();
  };
  e.$classData = v({ Ar: 0 }, !1, "scala.scalajs.js.WrappedArray$", {
    Ar: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var kq;
  function Qp() {
    kq || (kq = new hq());
    return kq;
  }
  function lq() {}
  lq.prototype = new q();
  lq.prototype.constructor = lq;
  e = lq.prototype;
  e.od = function (a) {
    return mq(this, a);
  };
  function mq(a, b) {
    return a.X().qb(b).Ua();
  }
  e.X = function () {
    return new Yi(nq(new oq()), new E((() => (a) => B(new C(), a.xe))(this)));
  };
  e.ga = function (a) {
    return mq(this, a);
  };
  e.Fb = function () {
    var a = new C();
    B(a, []);
    return a;
  };
  e.$classData = v({ Jr: 0 }, !1, "scala.scalajs.runtime.WrappedVarArgs$", {
    Jr: 1,
    b: 1,
    sf: 1,
    Tc: 1,
    Hb: 1,
    c: 1,
  });
  var pq;
  function qq() {
    pq || (pq = new lq());
    return pq;
  }
  function Vo() {
    var a = new ne();
    oe(a, null);
    return a;
  }
  class ne extends pg {}
  ne.prototype.$classData = v(
    { Dm: 0 },
    !1,
    "java.lang.ArrayIndexOutOfBoundsException",
    { Dm: 1, Wi: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  class Fg extends so {
    constructor(a) {
      super();
      oe(this, a);
    }
  }
  Fg.prototype.$classData = v(
    { Wm: 0 },
    !1,
    "java.lang.NumberFormatException",
    { Wm: 1, Jk: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  class Fl extends pg {}
  Fl.prototype.$classData = v(
    { $m: 0 },
    !1,
    "java.lang.StringIndexOutOfBoundsException",
    { $m: 1, Wi: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1 }
  );
  function rq() {}
  rq.prototype = new xo();
  rq.prototype.constructor = rq;
  e = rq.prototype;
  e.ib = function () {
    return "None";
  };
  e.rb = function () {
    return 0;
  };
  e.sb = function (a) {
    return ng(X(), a);
  };
  e.H = function () {
    return 2433880;
  };
  e.z = function () {
    return "None";
  };
  e.Fg = function () {
    throw Th(new Uh(), "None.get");
  };
  e.$classData = v({ xn: 0 }, !1, "scala.None$", {
    xn: 1,
    yn: 1,
    b: 1,
    r: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  var sq;
  function Ob() {
    sq || (sq = new rq());
    return sq;
  }
  function Tm(a) {
    this.vh = a;
  }
  Tm.prototype = new xo();
  Tm.prototype.constructor = Tm;
  e = Tm.prototype;
  e.Fg = function () {
    return this.vh;
  };
  e.ib = function () {
    return "Some";
  };
  e.rb = function () {
    return 1;
  };
  e.sb = function (a) {
    return 0 === a ? this.vh : ng(X(), a);
  };
  e.H = function () {
    return yg(this);
  };
  e.z = function () {
    return gg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof Tm ? L(M(), this.vh, a.vh) : !1;
  };
  e.$classData = v({ Bn: 0 }, !1, "scala.Some", {
    Bn: 1,
    yn: 1,
    b: 1,
    r: 1,
    Bb: 1,
    x: 1,
    c: 1,
  });
  function tq() {}
  tq.prototype = new q();
  tq.prototype.constructor = tq;
  function uq() {}
  e = uq.prototype = tq.prototype;
  e.Qc = function () {
    return this.Mb();
  };
  e.oh = function (a) {
    return this.ha().ga(a);
  };
  e.aj = function () {
    return this.ha().X();
  };
  e.u = function () {
    return this.i().k();
  };
  e.Pj = function (a) {
    return bj(this, a);
  };
  e.Pb = function (a) {
    return this.Be(new nj(this, a, !1));
  };
  e.Vd = function (a) {
    return new mj(this, a);
  };
  e.Eb = function (a) {
    return this.Be(vq(new wq(), this, a));
  };
  e.w = function () {
    return cj(this);
  };
  e.Wb = function (a) {
    return this.ha().ga(new xq(this, a));
  };
  e.Rf = function (a) {
    return this.Wb(a);
  };
  e.Pf = function (a) {
    return ej(this, a);
  };
  e.ai = function (a) {
    var b = this.ha();
    if (fj(a)) a = new yq(this, a);
    else {
      var c = this.i();
      a = new Io(c, a);
    }
    return b.ga(a);
  };
  e.Ff = function (a) {
    return hj(this, a);
  };
  e.O = function (a) {
    Ed(this, a);
  };
  e.Dg = function (a) {
    for (var b = !0, c = this.i(); b && c.m(); ) b = !!a.l(c.k());
    return b;
  };
  e.Qf = function (a) {
    return Fd(this, a);
  };
  e.Fe = function (a) {
    return Kd(this, a);
  };
  e.f = function () {
    return !this.i().m();
  };
  e.Ob = function (a, b, c) {
    return Md(this, a, b, c);
  };
  e.le = function (a, b, c, d) {
    return Vd(this, a, b, c, d);
  };
  e.v = function () {
    return -1;
  };
  e.Be = function (a) {
    return this.oh(a);
  };
  function zq(a, b) {
    a.fd = b;
    a.M = 0;
    a.td = Nd(Od(), a.fd);
    return a;
  }
  function Aq() {
    this.fd = null;
    this.td = this.M = 0;
  }
  Aq.prototype = new Kl();
  Aq.prototype.constructor = Aq;
  function Bq() {}
  e = Bq.prototype = Aq.prototype;
  e.v = function () {
    return (this.td - this.M) | 0;
  };
  e.m = function () {
    return this.M < this.td;
  };
  e.k = function () {
    try {
      var a = eg(Od(), this.fd, this.M);
      this.M = (1 + this.M) | 0;
      return a;
    } catch (b) {
      if (b instanceof ne) return W().Y.k();
      throw b;
    }
  };
  e.Ed = function (a) {
    if (0 < a) {
      var b = Nd(Od(), this.fd);
      a = (this.M + a) | 0;
      this.M = b < a ? b : a;
    }
    return this;
  };
  e.$classData = v({ Zd: 0 }, !1, "scala.collection.ArrayOps$ArrayIterator", {
    Zd: 1,
    pa: 1,
    b: 1,
    ca: 1,
    r: 1,
    s: 1,
    c: 1,
  });
  function yk(a) {
    this.mf = 0;
    this.Go = a;
    this.Kg = 0;
    this.mf = a.n();
  }
  yk.prototype = new Kl();
  yk.prototype.constructor = yk;
  e = yk.prototype;
  e.v = function () {
    return this.mf;
  };
  e.m = function () {
    return 0 < this.mf;
  };
  e.k = function () {
    if (this.m()) {
      var a = this.Go.t(this.Kg);
      this.Kg = (1 + this.Kg) | 0;
      this.mf = (-1 + this.mf) | 0;
      return a;
    }
    return W().Y.k();
  };
  e.Ed = function (a) {
    0 < a &&
      ((this.Kg = (this.Kg + a) | 0),
      (a = (this.mf - a) | 0),
      (this.mf = 0 > a ? 0 : a));
    return this;
  };
  e.$classData = v(
    { Fo: 0 },
    !1,
    "scala.collection.IndexedSeqView$IndexedSeqViewIterator",
    { Fo: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function uj() {
    this.ch = null;
    this.ch = W().Y;
  }
  uj.prototype = new Vp();
  uj.prototype.constructor = uj;
  function Cq(a, b) {
    a.ch = a.ch.Dd(
      new H(
        ((c, d) => () => {
          W();
          return new yo(d);
        })(a, b)
      )
    );
    return a;
  }
  uj.prototype.Oa = function (a) {
    return Cq(this, a);
  };
  uj.prototype.$classData = v(
    { Qo: 0 },
    !1,
    "scala.collection.Iterator$$anon$21",
    { Qo: 1, Os: 1, b: 1, Ef: 1, Xc: 1, qc: 1, pc: 1 }
  );
  function Dq(a, b) {
    var c = a.rd().X();
    0 <= a.v() && c.cc((1 + a.n()) | 0);
    c.qb(a);
    c.Oa(b);
    return c.Ua();
  }
  function Eq(a, b) {
    var c = a.rd().X();
    c.qb(a);
    c.qb(b);
    return c.Ua();
  }
  function ff(a) {
    return !!(a && a.$classData && a.$classData.Nb.Ib);
  }
  function Rn(a, b, c, d) {
    this.Ug = b;
    this.gg = c;
    this.Md = !d;
    this.fg = a;
  }
  Rn.prototype = new Kl();
  Rn.prototype.constructor = Rn;
  e = Rn.prototype;
  e.v = function () {
    return this.Md ? (1 + Fa((this.gg - this.fg) | 0, this.Ug)) | 0 : 0;
  };
  e.m = function () {
    return this.Md;
  };
  function Sn(a) {
    a.Md || W().Y.k();
    var b = a.fg;
    a.Md = b !== a.gg;
    a.fg = (b + a.Ug) | 0;
    return b;
  }
  e.Ed = function (a) {
    if (0 < a) {
      var b = this.fg,
        c = b >> 31;
      a = ba(this.Ug, a);
      var d = a >> 31;
      a = (b + a) | 0;
      b =
        (-2147483648 ^ a) < (-2147483648 ^ b)
          ? (1 + ((c + d) | 0)) | 0
          : (c + d) | 0;
      0 < this.Ug
        ? ((c = this.gg),
          (d = c >> 31),
          (this.fg = (d === b ? (-2147483648 ^ c) < (-2147483648 ^ a) : d < b)
            ? c
            : a),
          (c = this.gg),
          (d = c >> 31),
          (this.Md = b === d ? (-2147483648 ^ a) <= (-2147483648 ^ c) : b < d))
        : 0 > this.Ug &&
          ((c = this.gg),
          (d = c >> 31),
          (this.fg = (d === b ? (-2147483648 ^ c) > (-2147483648 ^ a) : d > b)
            ? c
            : a),
          (c = this.gg),
          (d = c >> 31),
          (this.Md = b === d ? (-2147483648 ^ a) >= (-2147483648 ^ c) : b > d));
    }
    return this;
  };
  e.k = function () {
    return Sn(this);
  };
  e.$classData = v({ bq: 0 }, !1, "scala.collection.immutable.RangeIterator", {
    bq: 1,
    pa: 1,
    b: 1,
    ca: 1,
    r: 1,
    s: 1,
    c: 1,
  });
  function Fq() {
    this.ud = this.Qd = 0;
  }
  Fq.prototype = new Kl();
  Fq.prototype.constructor = Fq;
  function Gq() {}
  Gq.prototype = Fq.prototype;
  Fq.prototype.v = function () {
    return this.ud;
  };
  Fq.prototype.m = function () {
    return 0 < this.ud;
  };
  Fq.prototype.k = function () {
    if (this.m()) {
      var a = this.t(this.Qd);
      this.Qd = (1 + this.Qd) | 0;
      this.ud = (-1 + this.ud) | 0;
      return a;
    }
    return W().Y.k();
  };
  Fq.prototype.Ed = function (a) {
    0 < a &&
      ((this.Qd = (this.Qd + a) | 0),
      (a = (this.ud - a) | 0),
      (this.ud = 0 > a ? 0 : a));
    return this;
  };
  function Hq() {}
  Hq.prototype = new q();
  Hq.prototype.constructor = Hq;
  function Iq() {}
  Iq.prototype = Hq.prototype;
  Hq.prototype.cc = function () {};
  function Jq() {
    this.Fl = this.Kj = null;
    Kq = this;
    this.Kj = new Ao(this);
    this.Fl = new Lq(new r(0));
  }
  Jq.prototype = new q();
  Jq.prototype.constructor = Jq;
  function Mq(a, b) {
    b = new Xi(b.kc());
    return new Yi(b, new E((() => (c) => Wi(Zi(), c))(a)));
  }
  function Wi(a, b) {
    if (null === b) return null;
    if (b instanceof r) return new Lq(b);
    if (b instanceof t) return new Hh(b);
    if (b instanceof Ya) return new Nq(b);
    if (b instanceof Wa) return new Oq(b);
    if (b instanceof Xa) return new Pq(b);
    if (b instanceof Ta) return new Qq(b);
    if (b instanceof Ua) return new Rq(b);
    if (b instanceof Va) return new Sq(b);
    if (b instanceof Sa) return new Tq(b);
    if (b && b.$classData && 1 === b.$classData.Of && b.$classData.Nf.Nb.Ok)
      return new Uq(b);
    throw new T(b);
  }
  Jq.prototype.$classData = v(
    { Uq: 0 },
    !1,
    "scala.collection.mutable.ArraySeq$",
    { Uq: 1, b: 1, Is: 1, Ds: 1, Bs: 1, Es: 1, c: 1 }
  );
  var Kq;
  function Zi() {
    Kq || (Kq = new Jq());
    return Kq;
  }
  function Vq(a) {
    this.$e = 0;
    this.we = null;
    this.bh = 0;
    this.ah = null;
    Rp(this, a);
  }
  Vq.prototype = new Tp();
  Vq.prototype.constructor = Vq;
  Vq.prototype.Qi = function (a) {
    return a.af;
  };
  Vq.prototype.$classData = v(
    { ir: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$1",
    { ir: 1, Hl: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Wq(a) {
    this.$e = 0;
    this.we = null;
    this.bh = 0;
    this.ah = null;
    Rp(this, a);
  }
  Wq.prototype = new Tp();
  Wq.prototype.constructor = Wq;
  Wq.prototype.Qi = function (a) {
    return a;
  };
  Wq.prototype.$classData = v(
    { jr: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$2",
    { jr: 1, Hl: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function Xq(a) {
    this.$e = 0;
    this.we = null;
    this.bh = 0;
    this.ah = null;
    this.Lj = 0;
    if (null === a) throw nb(null);
    Rp(this, a);
    this.Lj = 0;
  }
  Xq.prototype = new Tp();
  Xq.prototype.constructor = Xq;
  Xq.prototype.H = function () {
    return this.Lj;
  };
  Xq.prototype.Qi = function (a) {
    this.Lj = Yq(a.Td);
    return this;
  };
  Xq.prototype.$classData = v(
    { kr: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$3",
    { kr: 1, Hl: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1 }
  );
  function qi(a) {
    this.wh = a;
  }
  qi.prototype = new q();
  qi.prototype.constructor = qi;
  e = qi.prototype;
  e.y = function (a) {
    if (a && a.$classData && a.$classData.Nb.Rc) {
      var b = this.kc();
      a = a.kc();
      b = b === a;
    } else b = !1;
    return b;
  };
  e.H = function () {
    var a = this.wh;
    return mg(X(), a);
  };
  e.z = function () {
    return gq(this, this.wh);
  };
  e.kc = function () {
    return this.wh;
  };
  e.Dc = function (a) {
    var b = this.wh;
    dd();
    return Lc(b, [a]);
  };
  e.$classData = v({ Mn: 0 }, !1, "scala.reflect.ClassTag$GenericClassTag", {
    Mn: 1,
    b: 1,
    Rc: 1,
    ed: 1,
    Sc: 1,
    c: 1,
    x: 1,
  });
  function Zq() {}
  Zq.prototype = new ro();
  Zq.prototype.constructor = Zq;
  function $q() {}
  $q.prototype = Zq.prototype;
  function ao(a, b) {
    this.Oi = this.Ni = null;
    this.wk = a;
    this.xk = b;
    kj(this, null, null);
  }
  ao.prototype = new zo();
  ao.prototype.constructor = ao;
  e = ao.prototype;
  e.mh = function () {
    return this.wk;
  };
  e.nh = function () {
    return this.xk;
  };
  e.Bc = function () {
    return this.xk;
  };
  e.Ac = function () {
    return this.wk;
  };
  e.$classData = v({ ym: 0 }, !1, "scala.Tuple2$mcII$sp", {
    ym: 1,
    vk: 1,
    b: 1,
    An: 1,
    Bb: 1,
    x: 1,
    c: 1,
    ds: 1,
  });
  class F extends Al {
    constructor(a) {
      super();
      this.fj = a;
      oe(this, a);
    }
    ib() {
      return "UninitializedFieldError";
    }
    rb() {
      return 1;
    }
    sb(a) {
      return 0 === a ? this.fj : ng(X(), a);
    }
    H() {
      return yg(this);
    }
    y(a) {
      return this === a ? !0 : a instanceof F ? this.fj === a.fj : !1;
    }
  }
  F.prototype.$classData = v({ Cn: 0 }, !1, "scala.UninitializedFieldError", {
    Cn: 1,
    sc: 1,
    jc: 1,
    fc: 1,
    b: 1,
    c: 1,
    Bb: 1,
    x: 1,
  });
  function ar(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.ko = a;
    zq(this, a);
  }
  ar.prototype = new Bq();
  ar.prototype.constructor = ar;
  ar.prototype.k = function () {
    try {
      var a = this.ko.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ne) b = W().Y.k() | 0;
      else throw c;
    }
    return b;
  };
  ar.prototype.$classData = v(
    { jo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcB$sp",
    { jo: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function br(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.mo = a;
    zq(this, a);
  }
  br.prototype = new Bq();
  br.prototype.constructor = br;
  br.prototype.k = function () {
    try {
      var a = this.mo.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ne) b = za(W().Y.k());
      else throw c;
    }
    return Pa(b);
  };
  br.prototype.$classData = v(
    { lo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcC$sp",
    { lo: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function cr(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.oo = a;
    zq(this, a);
  }
  cr.prototype = new Bq();
  cr.prototype.constructor = cr;
  cr.prototype.k = function () {
    try {
      var a = this.oo.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ne) b = +W().Y.k();
      else throw c;
    }
    return b;
  };
  cr.prototype.$classData = v(
    { no: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcD$sp",
    { no: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function dr(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.qo = a;
    zq(this, a);
  }
  dr.prototype = new Bq();
  dr.prototype.constructor = dr;
  dr.prototype.k = function () {
    try {
      var a = this.qo.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ne) b = +W().Y.k();
      else throw c;
    }
    return b;
  };
  dr.prototype.$classData = v(
    { po: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcF$sp",
    { po: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function Kn(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.so = a;
    zq(this, a);
  }
  Kn.prototype = new Bq();
  Kn.prototype.constructor = Kn;
  function Ln(a) {
    try {
      var b = a.so.a[a.M];
      a.M = (1 + a.M) | 0;
      return b;
    } catch (c) {
      if (c instanceof ne) return W().Y.k() | 0;
      throw c;
    }
  }
  Kn.prototype.k = function () {
    return Ln(this);
  };
  Kn.prototype.$classData = v(
    { ro: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcI$sp",
    { ro: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function er(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.uo = a;
    zq(this, a);
  }
  er.prototype = new Bq();
  er.prototype.constructor = er;
  er.prototype.k = function () {
    try {
      var a = this.uo.a[this.M],
        b = a.Fa,
        c = a.Ea;
      this.M = (1 + this.M) | 0;
      var d = new n(b, c);
    } catch (f) {
      if (f instanceof ne) d = Qa(W().Y.k());
      else throw f;
    }
    return d;
  };
  er.prototype.$classData = v(
    { to: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcJ$sp",
    { to: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function fr(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.wo = a;
    zq(this, a);
  }
  fr.prototype = new Bq();
  fr.prototype.constructor = fr;
  fr.prototype.k = function () {
    try {
      var a = this.wo.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ne) b = W().Y.k() | 0;
      else throw c;
    }
    return b;
  };
  fr.prototype.$classData = v(
    { vo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcS$sp",
    { vo: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function gr(a) {
    this.fd = null;
    this.td = this.M = 0;
    zq(this, a);
  }
  gr.prototype = new Bq();
  gr.prototype.constructor = gr;
  gr.prototype.k = function () {
    try {
      this.M = (1 + this.M) | 0;
    } catch (a) {
      if (a instanceof ne) W().Y.k();
      else throw a;
    }
  };
  gr.prototype.$classData = v(
    { xo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcV$sp",
    { xo: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function hr(a) {
    this.fd = null;
    this.td = this.M = 0;
    this.zo = a;
    zq(this, a);
  }
  hr.prototype = new Bq();
  hr.prototype.constructor = hr;
  hr.prototype.k = function () {
    try {
      var a = this.zo.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ne) b = !!W().Y.k();
      else throw c;
    }
    return b;
  };
  hr.prototype.$classData = v(
    { yo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcZ$sp",
    { yo: 1, Zd: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function ir(a) {
    this.ud = this.Qd = 0;
    this.tl = null;
    if (null === a) throw nb(null);
    this.tl = a;
    this.Qd = 0;
    this.ud = 2;
  }
  ir.prototype = new Gq();
  ir.prototype.constructor = ir;
  ir.prototype.t = function (a) {
    a: {
      var b = this.tl;
      switch (a) {
        case 0:
          a = b.Oe;
          break a;
        case 1:
          a = b.Pe;
          break a;
        default:
          throw new T(a);
      }
    }
    return a;
  };
  ir.prototype.$classData = v(
    { hq: 0 },
    !1,
    "scala.collection.immutable.Set$Set2$$anon$1",
    { hq: 1, wl: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function jr(a) {
    this.ud = this.Qd = 0;
    this.ul = null;
    if (null === a) throw nb(null);
    this.ul = a;
    this.Qd = 0;
    this.ud = 3;
  }
  jr.prototype = new Gq();
  jr.prototype.constructor = jr;
  jr.prototype.t = function (a) {
    a: {
      var b = this.ul;
      switch (a) {
        case 0:
          a = b.Qe;
          break a;
        case 1:
          a = b.se;
          break a;
        case 2:
          a = b.te;
          break a;
        default:
          throw new T(a);
      }
    }
    return a;
  };
  jr.prototype.$classData = v(
    { jq: 0 },
    !1,
    "scala.collection.immutable.Set$Set3$$anon$2",
    { jq: 1, wl: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function kr(a) {
    this.ud = this.Qd = 0;
    this.vl = null;
    if (null === a) throw nb(null);
    this.vl = a;
    this.Qd = 0;
    this.ud = 4;
  }
  kr.prototype = new Gq();
  kr.prototype.constructor = kr;
  kr.prototype.t = function (a) {
    return lr(this.vl, a);
  };
  kr.prototype.$classData = v(
    { lq: 0 },
    !1,
    "scala.collection.immutable.Set$Set4$$anon$3",
    { lq: 1, wl: 1, pa: 1, b: 1, ca: 1, r: 1, s: 1, c: 1 }
  );
  function Xi(a) {
    this.Dl = !1;
    this.Jj = null;
    this.Zg = a;
    this.Dl = a === m(fb);
    this.Jj = [];
  }
  Xi.prototype = new Iq();
  Xi.prototype.constructor = Xi;
  function mr(a, b) {
    a.Jj.push(a.Dl ? za(b) : null === b ? a.Zg.Cc.$h : b);
    return a;
  }
  e = Xi.prototype;
  e.Ua = function () {
    return x(
      (this.Zg === m(db)
        ? m(ta)
        : this.Zg === m(cg) || this.Zg === m(li)
        ? m(w)
        : this.Zg
      ).Cc
    ).Zh(this.Jj);
  };
  e.z = function () {
    return "ArrayBuilder.generic";
  };
  e.qb = function (a) {
    for (a = a.i(); a.m(); ) {
      var b = a.k();
      mr(this, b);
    }
    return this;
  };
  e.Oa = function (a) {
    return mr(this, a);
  };
  e.$classData = v(
    { Qq: 0 },
    !1,
    "scala.collection.mutable.ArrayBuilder$generic",
    { Qq: 1, Ns: 1, b: 1, Ef: 1, Xc: 1, qc: 1, pc: 1, c: 1 }
  );
  function nr(a, b, c, d) {
    var f = (1 + Nd(Od(), b)) | 0;
    if (0 > c || c >= f)
      throw og(
        new pg(),
        c + " is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
      );
    f = (((a.wb - a.xb) | 0) & ((-1 + a.V.a.length) | 0)) | 0;
    var g = (Nd(Od(), b) - c) | 0;
    f = f < g ? f : g;
    d = d < f ? d : f;
    if (0 < d) {
      f = ((a.wb - a.xb) | 0) & ((-1 + a.V.a.length) | 0);
      if (0 >= f)
        throw og(
          new pg(),
          "0 is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
        );
      f = ((a.xb + 0) | 0) & ((-1 + a.V.a.length) | 0);
      g = (a.V.a.length - f) | 0;
      g = d < g ? d : g;
      zh(Bh(), a.V, f, b, c, g);
      d = (d - g) | 0;
      0 < d && zh(Bh(), a.V, 0, b, (c + g) | 0, d);
    }
    return b;
  }
  function or() {
    this.Yb = null;
    this.Pa = 0;
  }
  or.prototype = new q();
  or.prototype.constructor = or;
  function pr() {}
  pr.prototype = or.prototype;
  or.prototype.z = function () {
    return this.Yb;
  };
  or.prototype.y = function (a) {
    return this === a;
  };
  or.prototype.H = function () {
    return this.Pa;
  };
  function qr() {}
  qr.prototype = new q();
  qr.prototype.constructor = qr;
  function rr() {}
  rr.prototype = qr.prototype;
  class tg extends Al {
    constructor(a) {
      super();
      this.eh = a;
      oe(this, null);
    }
    ph() {
      return Ea(this.eh);
    }
    Ak() {}
    ib() {
      return "JavaScriptException";
    }
    rb() {
      return 1;
    }
    sb(a) {
      return 0 === a ? this.eh : ng(X(), a);
    }
    H() {
      return yg(this);
    }
    y(a) {
      if (this === a) return !0;
      if (a instanceof tg) {
        var b = this.eh;
        a = a.eh;
        return L(M(), b, a);
      }
      return !1;
    }
  }
  tg.prototype.$classData = v(
    { yr: 0 },
    !1,
    "scala.scalajs.js.JavaScriptException",
    { yr: 1, sc: 1, jc: 1, fc: 1, b: 1, c: 1, Bb: 1, x: 1 }
  );
  function Sc(a) {
    this.Sm = a;
    this.sh = "";
  }
  Sc.prototype = new $q();
  Sc.prototype.constructor = Sc;
  function fc(a) {
    var b;
    Dh || (Dh = new Ch());
    for (b = Dh.Sk.Uk; "" !== a; ) {
      var c = a.indexOf("\n") | 0;
      if (0 > c) (b.sh = "" + b.sh + a), (a = "");
      else {
        var d = "" + b.sh + a.substring(0, c);
        "undefined" !== typeof console &&
          (b.Sm && console.error ? console.error(d) : console.log(d));
        b.sh = "";
        a = a.substring((1 + c) | 0);
      }
    }
  }
  Sc.prototype.$classData = v(
    { Qm: 0 },
    !1,
    "java.lang.JSConsoleBasedPrintStream",
    { Qm: 1, Xr: 1, Wr: 1, sm: 1, b: 1, qm: 1, Fm: 1, rm: 1, Bm: 1 }
  );
  function sr() {
    this.Yb = null;
    this.Pa = 0;
  }
  sr.prototype = new pr();
  sr.prototype.constructor = sr;
  function tr() {}
  tr.prototype = sr.prototype;
  sr.prototype.kc = function () {
    return m(eb);
  };
  sr.prototype.Dc = function (a) {
    return new Sa(a);
  };
  function ur() {
    this.Yb = null;
    this.Pa = 0;
  }
  ur.prototype = new pr();
  ur.prototype.constructor = ur;
  function vr() {}
  vr.prototype = ur.prototype;
  ur.prototype.kc = function () {
    return m(gb);
  };
  ur.prototype.Dc = function (a) {
    return new Ua(a);
  };
  function wr() {
    this.Yb = null;
    this.Pa = 0;
  }
  wr.prototype = new pr();
  wr.prototype.constructor = wr;
  function xr() {}
  xr.prototype = wr.prototype;
  wr.prototype.kc = function () {
    return m(fb);
  };
  wr.prototype.Dc = function (a) {
    return new Ta(a);
  };
  function yr() {
    this.Yb = null;
    this.Pa = 0;
  }
  yr.prototype = new pr();
  yr.prototype.constructor = yr;
  function zr() {}
  zr.prototype = yr.prototype;
  yr.prototype.kc = function () {
    return m(lb);
  };
  yr.prototype.Dc = function (a) {
    return new Ya(a);
  };
  function Ar() {
    this.Yb = null;
    this.Pa = 0;
  }
  Ar.prototype = new pr();
  Ar.prototype.constructor = Ar;
  function Br() {}
  Br.prototype = Ar.prototype;
  Ar.prototype.kc = function () {
    return m(kb);
  };
  Ar.prototype.Dc = function (a) {
    return new Xa(a);
  };
  function Cr() {
    this.Yb = null;
    this.Pa = 0;
  }
  Cr.prototype = new pr();
  Cr.prototype.constructor = Cr;
  function Dr() {}
  Dr.prototype = Cr.prototype;
  Cr.prototype.kc = function () {
    return m(ib);
  };
  Cr.prototype.Dc = function (a) {
    return new t(a);
  };
  function Er() {
    this.Yb = null;
    this.Pa = 0;
  }
  Er.prototype = new pr();
  Er.prototype.constructor = Er;
  function Fr() {}
  Fr.prototype = Er.prototype;
  Er.prototype.kc = function () {
    return m(jb);
  };
  Er.prototype.Dc = function (a) {
    return new Wa(a);
  };
  function Gr() {
    this.Jg = null;
    this.oe = 0;
  }
  Gr.prototype = new rr();
  Gr.prototype.constructor = Gr;
  function Hr() {}
  Hr.prototype = Gr.prototype;
  Gr.prototype.z = function () {
    return this.Jg;
  };
  Gr.prototype.y = function (a) {
    return this === a;
  };
  Gr.prototype.H = function () {
    return this.oe;
  };
  function Ir() {
    this.Yb = null;
    this.Pa = 0;
  }
  Ir.prototype = new pr();
  Ir.prototype.constructor = Ir;
  function Jr() {}
  Jr.prototype = Ir.prototype;
  Ir.prototype.kc = function () {
    return m(hb);
  };
  Ir.prototype.Dc = function (a) {
    return new Va(a);
  };
  function Pr() {
    this.Yb = null;
    this.Pa = 0;
  }
  Pr.prototype = new pr();
  Pr.prototype.constructor = Pr;
  function Qr() {}
  Qr.prototype = Pr.prototype;
  Pr.prototype.kc = function () {
    return m(db);
  };
  Pr.prototype.Dc = function (a) {
    return new (x(ta).G)(a);
  };
  function Rr() {}
  Rr.prototype = new uq();
  Rr.prototype.constructor = Rr;
  function Sr() {}
  Sr.prototype = Rr.prototype;
  Rr.prototype.ha = function () {
    return Cj();
  };
  Rr.prototype.z = function () {
    return this.Qc() + "(\x3cnot computed\x3e)";
  };
  Rr.prototype.Mb = function () {
    return "View";
  };
  function Tr(a, b) {
    return a === b
      ? !0
      : b && b.$classData && b.$classData.Nb.rf
      ? a.Xa() === b.Xa() && a.Ll(b)
      : !1;
  }
  function Ur() {
    this.oe = 0;
    this.Jg = "Any";
    Ob();
    xb();
    m(w);
    this.oe = Oa(this);
  }
  Ur.prototype = new Hr();
  Ur.prototype.constructor = Ur;
  Ur.prototype.kc = function () {
    return m(w);
  };
  Ur.prototype.Dc = function (a) {
    return new r(a);
  };
  Ur.prototype.$classData = v(
    { On: 0 },
    !1,
    "scala.reflect.ManifestFactory$AnyManifest$",
    { On: 1, ij: 1, hj: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var Vr;
  function De() {
    Vr || (Vr = new Ur());
  }
  function Wr() {
    this.Pa = 0;
    this.Yb = "Boolean";
    this.Pa = Oa(this);
  }
  Wr.prototype = new tr();
  Wr.prototype.constructor = Wr;
  Wr.prototype.$classData = v(
    { Pn: 0 },
    !1,
    "scala.reflect.ManifestFactory$BooleanManifest$",
    { Pn: 1, qs: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var Xr;
  function hi() {
    Xr || (Xr = new Wr());
    return Xr;
  }
  function Yr() {
    this.Pa = 0;
    this.Yb = "Byte";
    this.Pa = Oa(this);
  }
  Yr.prototype = new vr();
  Yr.prototype.constructor = Yr;
  Yr.prototype.$classData = v(
    { Qn: 0 },
    !1,
    "scala.reflect.ManifestFactory$ByteManifest$",
    { Qn: 1, rs: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var Zr;
  function bi() {
    Zr || (Zr = new Yr());
    return Zr;
  }
  function $r() {
    this.Pa = 0;
    this.Yb = "Char";
    this.Pa = Oa(this);
  }
  $r.prototype = new xr();
  $r.prototype.constructor = $r;
  $r.prototype.$classData = v(
    { Rn: 0 },
    !1,
    "scala.reflect.ManifestFactory$CharManifest$",
    { Rn: 1, ss: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var as;
  function di() {
    as || (as = new $r());
    return as;
  }
  function bs() {
    this.Pa = 0;
    this.Yb = "Double";
    this.Pa = Oa(this);
  }
  bs.prototype = new zr();
  bs.prototype.constructor = bs;
  bs.prototype.$classData = v(
    { Sn: 0 },
    !1,
    "scala.reflect.ManifestFactory$DoubleManifest$",
    { Sn: 1, ts: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var cs;
  function gi() {
    cs || (cs = new bs());
    return cs;
  }
  function ds() {
    this.Pa = 0;
    this.Yb = "Float";
    this.Pa = Oa(this);
  }
  ds.prototype = new Br();
  ds.prototype.constructor = ds;
  ds.prototype.$classData = v(
    { Tn: 0 },
    !1,
    "scala.reflect.ManifestFactory$FloatManifest$",
    { Tn: 1, us: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var es;
  function fi() {
    es || (es = new ds());
    return es;
  }
  function fs() {
    this.Pa = 0;
    this.Yb = "Int";
    this.Pa = Oa(this);
  }
  fs.prototype = new Dr();
  fs.prototype.constructor = fs;
  fs.prototype.$classData = v(
    { Un: 0 },
    !1,
    "scala.reflect.ManifestFactory$IntManifest$",
    { Un: 1, vs: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var gs;
  function Ee() {
    gs || (gs = new fs());
    return gs;
  }
  function hs() {
    this.Pa = 0;
    this.Yb = "Long";
    this.Pa = Oa(this);
  }
  hs.prototype = new Fr();
  hs.prototype.constructor = hs;
  hs.prototype.$classData = v(
    { Vn: 0 },
    !1,
    "scala.reflect.ManifestFactory$LongManifest$",
    { Vn: 1, ws: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var is;
  function ei() {
    is || (is = new hs());
    return is;
  }
  function ni() {
    this.oe = 0;
    this.Jg = "Nothing";
    Ob();
    xb();
    m(li);
    this.oe = Oa(this);
  }
  ni.prototype = new Hr();
  ni.prototype.constructor = ni;
  ni.prototype.kc = function () {
    return m(li);
  };
  ni.prototype.Dc = function (a) {
    return new r(a);
  };
  ni.prototype.$classData = v(
    { Wn: 0 },
    !1,
    "scala.reflect.ManifestFactory$NothingManifest$",
    { Wn: 1, ij: 1, hj: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var mi;
  function pi() {
    this.oe = 0;
    this.Jg = "Null";
    Ob();
    xb();
    m(cg);
    this.oe = Oa(this);
  }
  pi.prototype = new Hr();
  pi.prototype.constructor = pi;
  pi.prototype.kc = function () {
    return m(cg);
  };
  pi.prototype.Dc = function (a) {
    return new r(a);
  };
  pi.prototype.$classData = v(
    { Xn: 0 },
    !1,
    "scala.reflect.ManifestFactory$NullManifest$",
    { Xn: 1, ij: 1, hj: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var oi;
  function ki() {
    this.oe = 0;
    this.Jg = "Object";
    Ob();
    xb();
    m(w);
    this.oe = Oa(this);
  }
  ki.prototype = new Hr();
  ki.prototype.constructor = ki;
  ki.prototype.kc = function () {
    return m(w);
  };
  ki.prototype.Dc = function (a) {
    return new r(a);
  };
  ki.prototype.$classData = v(
    { Yn: 0 },
    !1,
    "scala.reflect.ManifestFactory$ObjectManifest$",
    { Yn: 1, ij: 1, hj: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var ji;
  function js() {
    this.Pa = 0;
    this.Yb = "Short";
    this.Pa = Oa(this);
  }
  js.prototype = new Jr();
  js.prototype.constructor = js;
  js.prototype.$classData = v(
    { Zn: 0 },
    !1,
    "scala.reflect.ManifestFactory$ShortManifest$",
    { Zn: 1, xs: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var ks;
  function ci() {
    ks || (ks = new js());
    return ks;
  }
  function ls() {
    this.Pa = 0;
    this.Yb = "Unit";
    this.Pa = Oa(this);
  }
  ls.prototype = new Qr();
  ls.prototype.constructor = ls;
  ls.prototype.$classData = v(
    { $n: 0 },
    !1,
    "scala.reflect.ManifestFactory$UnitManifest$",
    { $n: 1, ys: 1, Ie: 1, b: 1, sd: 1, Rc: 1, ed: 1, Sc: 1, c: 1, x: 1 }
  );
  var ms;
  function ii() {
    ms || (ms = new ls());
    return ms;
  }
  function ns(a, b) {
    return a === b
      ? !0
      : b && b.$classData && b.$classData.Nb.la && b.Ag(a)
      ? a.Je(b)
      : !1;
  }
  function xj(a) {
    this.ep = a;
  }
  xj.prototype = new Sr();
  xj.prototype.constructor = xj;
  xj.prototype.i = function () {
    return Zd(this.ep);
  };
  xj.prototype.$classData = v({ dp: 0 }, !1, "scala.collection.View$$anon$1", {
    dp: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function os(a, b) {
    this.il = a;
    this.gp = b;
  }
  os.prototype = new Sr();
  os.prototype.constructor = os;
  os.prototype.i = function () {
    return new gj(this.il, new ps(this.gp)).i();
  };
  os.prototype.v = function () {
    var a = this.il.v();
    return 0 <= a ? (1 + a) | 0 : -1;
  };
  os.prototype.f = function () {
    return !1;
  };
  os.prototype.$classData = v({ fp: 0 }, !1, "scala.collection.View$Appended", {
    fp: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function gj(a, b) {
    this.sj = a;
    this.tj = b;
  }
  gj.prototype = new Sr();
  gj.prototype.constructor = gj;
  gj.prototype.i = function () {
    return this.sj.i().Dd(new H(((a) => () => a.tj.i())(this)));
  };
  gj.prototype.v = function () {
    var a = this.sj.v();
    if (0 <= a) {
      var b = this.tj.v();
      return 0 <= b ? (a + b) | 0 : -1;
    }
    return -1;
  };
  gj.prototype.f = function () {
    return this.sj.f() && this.tj.f();
  };
  gj.prototype.$classData = v({ hp: 0 }, !1, "scala.collection.View$Concat", {
    hp: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function vq(a, b, c) {
    a.Og = b;
    a.Lh = c;
    a.Zf = 0 < c ? c : 0;
    return a;
  }
  function wq() {
    this.Og = null;
    this.Zf = this.Lh = 0;
  }
  wq.prototype = new Sr();
  wq.prototype.constructor = wq;
  function qs() {}
  qs.prototype = wq.prototype;
  wq.prototype.i = function () {
    return this.Og.i().Ed(this.Lh);
  };
  wq.prototype.v = function () {
    var a = this.Og.v();
    return 0 <= a ? ((a = (a - this.Zf) | 0), 0 < a ? a : 0) : -1;
  };
  wq.prototype.f = function () {
    return !this.i().m();
  };
  wq.prototype.$classData = v({ uj: 0 }, !1, "scala.collection.View$Drop", {
    uj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function Lh(a, b) {
    this.vj = a;
    this.kp = b;
  }
  Lh.prototype = new Sr();
  Lh.prototype.constructor = Lh;
  Lh.prototype.i = function () {
    W();
    return new Jo(this.vj, this.kp);
  };
  Lh.prototype.v = function () {
    var a = this.vj;
    return 0 > a ? 0 : a;
  };
  Lh.prototype.f = function () {
    return 0 >= this.vj;
  };
  Lh.prototype.$classData = v({ jp: 0 }, !1, "scala.collection.View$Fill", {
    jp: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function nj(a, b, c) {
    this.jl = a;
    this.np = b;
    this.mp = c;
  }
  nj.prototype = new Sr();
  nj.prototype.constructor = nj;
  nj.prototype.i = function () {
    var a = this.jl.i();
    return new Ko(a, this.np, this.mp);
  };
  nj.prototype.v = function () {
    return 0 === this.jl.v() ? 0 : -1;
  };
  nj.prototype.f = function () {
    return !this.i().m();
  };
  nj.prototype.$classData = v({ lp: 0 }, !1, "scala.collection.View$Filter", {
    lp: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function xq(a, b) {
    this.kl = a;
    this.pp = b;
  }
  xq.prototype = new Sr();
  xq.prototype.constructor = xq;
  xq.prototype.i = function () {
    var a = this.kl.i();
    return new Ho(a, this.pp);
  };
  xq.prototype.v = function () {
    return 0 === this.kl.v() ? 0 : -1;
  };
  xq.prototype.f = function () {
    return !this.i().m();
  };
  xq.prototype.$classData = v({ op: 0 }, !1, "scala.collection.View$FlatMap", {
    op: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function ij(a, b, c) {
    a.$f = b;
    a.Mh = c;
    return a;
  }
  function jj() {
    this.Mh = this.$f = null;
  }
  jj.prototype = new Sr();
  jj.prototype.constructor = jj;
  function rs() {}
  rs.prototype = jj.prototype;
  jj.prototype.i = function () {
    var a = this.$f.i();
    return new Lo(a, this.Mh);
  };
  jj.prototype.v = function () {
    return this.$f.v();
  };
  jj.prototype.f = function () {
    return this.$f.f();
  };
  jj.prototype.$classData = v({ wj: 0 }, !1, "scala.collection.View$Map", {
    wj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function ps(a) {
    this.rp = a;
  }
  ps.prototype = new Sr();
  ps.prototype.constructor = ps;
  ps.prototype.i = function () {
    W();
    return new yo(this.rp);
  };
  ps.prototype.v = function () {
    return 1;
  };
  ps.prototype.f = function () {
    return !1;
  };
  ps.prototype.$classData = v({ qp: 0 }, !1, "scala.collection.View$Single", {
    qp: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function yq(a, b) {
    this.yj = a;
    this.xj = b;
  }
  yq.prototype = new Sr();
  yq.prototype.constructor = yq;
  yq.prototype.i = function () {
    var a = this.yj.i();
    return new Io(a, this.xj);
  };
  yq.prototype.v = function () {
    var a = this.yj.v();
    if (0 === a) return 0;
    var b = this.xj.v();
    return 0 === b ? 0 : a < b ? a : b;
  };
  yq.prototype.f = function () {
    return this.yj.f() || this.xj.f();
  };
  yq.prototype.$classData = v({ sp: 0 }, !1, "scala.collection.View$Zip", {
    sp: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
  });
  function Mn() {}
  Mn.prototype = new q();
  Mn.prototype.constructor = Mn;
  Mn.prototype.$classData = v(
    { Hn: 0 },
    !1,
    "scala.math.Numeric$IntIsIntegral$",
    {
      Hn: 1,
      b: 1,
      ms: 1,
      hs: 1,
      ls: 1,
      ns: 1,
      Zr: 1,
      ps: 1,
      gs: 1,
      c: 1,
      os: 1,
    }
  );
  var Rd;
  function ss() {}
  ss.prototype = new uq();
  ss.prototype.constructor = ss;
  function ts() {}
  e = ts.prototype = ss.prototype;
  e.y = function (a) {
    return Tr(this, a);
  };
  e.H = function () {
    var a = zg();
    return Ag(a, this, a.xh);
  };
  e.Mb = function () {
    return "Set";
  };
  e.z = function () {
    return Go(this);
  };
  e.Ll = function (a) {
    return this.Dg(a);
  };
  e.l = function (a) {
    return this.F(a);
  };
  function us() {}
  us.prototype = new uq();
  us.prototype.constructor = us;
  function vs() {}
  e = vs.prototype = us.prototype;
  e.Ag = function () {
    return !0;
  };
  e.y = function (a) {
    return ns(this, a);
  };
  e.H = function () {
    return Hi(this);
  };
  e.z = function () {
    return Go(this);
  };
  e.nd = function (a) {
    return this.ha().ga(new os(this, a));
  };
  e.Bd = function (a) {
    return ej(this, a);
  };
  e.Pf = function (a) {
    return this.Bd(a);
  };
  e.Xa = function () {
    return this.n();
  };
  e.De = function (a, b) {
    var c = this.i();
    return pj(c, a, b);
  };
  e.F = function (a) {
    return Gk(this, a);
  };
  e.Pj = function (a) {
    return this.hb(a);
  };
  e.hb = function (a) {
    return bj(this, a);
  };
  e.f = function () {
    return 0 === this.hb(0);
  };
  e.Je = function (a) {
    return Rl(this, a);
  };
  function ws() {}
  ws.prototype = new Sr();
  ws.prototype.constructor = ws;
  function xs() {}
  e = xs.prototype = ws.prototype;
  e.ne = function (a) {
    return ys(new zs(), this, a);
  };
  e.me = function (a) {
    return As(new Bs(), this, a);
  };
  e.Mb = function () {
    return "SeqView";
  };
  e.Pf = function (a) {
    return ej(this, a);
  };
  e.De = function (a, b) {
    var c = this.i();
    return pj(c, a, b);
  };
  e.F = function (a) {
    return Gk(this, a);
  };
  e.hb = function (a) {
    return bj(this, a);
  };
  e.f = function () {
    return 0 === this.hb(0);
  };
  e.Eb = function (a) {
    return this.me(a);
  };
  e.R = function (a) {
    return this.ne(a);
  };
  function Ej() {}
  Ej.prototype = new Sr();
  Ej.prototype.constructor = Ej;
  e = Ej.prototype;
  e.i = function () {
    return W().Y;
  };
  e.v = function () {
    return 0;
  };
  e.f = function () {
    return !0;
  };
  e.ib = function () {
    return "Empty";
  };
  e.rb = function () {
    return 0;
  };
  e.sb = function (a) {
    return ng(X(), a);
  };
  e.H = function () {
    return 67081517;
  };
  e.$classData = v({ ip: 0 }, !1, "scala.collection.View$Empty$", {
    ip: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    Bb: 1,
    x: 1,
  });
  var Dj;
  function As(a, b, c) {
    a.Ng = b;
    a.qj = c;
    vq(a, b, c);
    return a;
  }
  function Bs() {
    this.Og = null;
    this.Zf = this.Lh = 0;
    this.Ng = null;
    this.qj = 0;
  }
  Bs.prototype = new qs();
  Bs.prototype.constructor = Bs;
  function Cs() {}
  e = Cs.prototype = Bs.prototype;
  e.ne = function (a) {
    return ys(new zs(), this, a);
  };
  e.Mb = function () {
    return "SeqView";
  };
  e.Pf = function (a) {
    return ej(this, a);
  };
  e.De = function (a, b) {
    var c = this.i();
    return pj(c, a, b);
  };
  e.F = function (a) {
    return Gk(this, a);
  };
  e.hb = function (a) {
    return bj(this, a);
  };
  e.f = function () {
    return 0 === this.hb(0);
  };
  e.n = function () {
    var a = (this.Ng.n() - this.Zf) | 0;
    return 0 < a ? a : 0;
  };
  e.t = function (a) {
    return this.Ng.t((a + this.Zf) | 0);
  };
  e.me = function (a) {
    return As(new Bs(), this.Ng, (this.qj + a) | 0);
  };
  e.R = function (a) {
    return this.ne(a);
  };
  e.Eb = function (a) {
    return this.me(a);
  };
  e.$classData = v({ fl: 0 }, !1, "scala.collection.SeqView$Drop", {
    fl: 1,
    uj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    pf: 1,
    P: 1,
  });
  function zj(a, b) {
    a.qf = b;
    return a;
  }
  function Aj() {
    this.qf = null;
  }
  Aj.prototype = new xs();
  Aj.prototype.constructor = Aj;
  function Ds() {}
  e = Ds.prototype = Aj.prototype;
  e.t = function (a) {
    return this.qf.t(a);
  };
  e.n = function () {
    return this.qf.n();
  };
  e.i = function () {
    return this.qf.i();
  };
  e.v = function () {
    return this.qf.v();
  };
  e.f = function () {
    return this.qf.f();
  };
  e.$classData = v({ gl: 0 }, !1, "scala.collection.SeqView$Id", {
    gl: 1,
    jj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    pf: 1,
    P: 1,
  });
  function ys(a, b, c) {
    a.Jh = b;
    a.rj = c;
    ij(a, b, c);
    return a;
  }
  function zs() {
    this.rj = this.Jh = this.Mh = this.$f = null;
  }
  zs.prototype = new rs();
  zs.prototype.constructor = zs;
  function Es() {}
  e = Es.prototype = zs.prototype;
  e.ne = function (a) {
    return ys(new zs(), this, a);
  };
  e.me = function (a) {
    return As(new Bs(), this, a);
  };
  e.Mb = function () {
    return "SeqView";
  };
  e.Pf = function (a) {
    return ej(this, a);
  };
  e.De = function (a, b) {
    var c = this.i();
    return pj(c, a, b);
  };
  e.F = function (a) {
    return Gk(this, a);
  };
  e.hb = function (a) {
    return bj(this, a);
  };
  e.f = function () {
    return 0 === this.hb(0);
  };
  e.t = function (a) {
    return this.rj.l(this.Jh.t(a));
  };
  e.n = function () {
    return this.Jh.n();
  };
  e.Eb = function (a) {
    return this.me(a);
  };
  e.R = function (a) {
    return this.ne(a);
  };
  e.$classData = v({ hl: 0 }, !1, "scala.collection.SeqView$Map", {
    hl: 1,
    wj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    pf: 1,
    P: 1,
  });
  function Fs() {}
  Fs.prototype = new xs();
  Fs.prototype.constructor = Fs;
  function Gs() {}
  e = Gs.prototype = Fs.prototype;
  e.i = function () {
    return new yk(this);
  };
  e.Mb = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.t(0);
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.ne = function (a) {
    return new Eo(this, a);
  };
  e.R = function (a) {
    return new Eo(this, a);
  };
  e.me = function (a) {
    return new Co(this, a);
  };
  e.Eb = function (a) {
    return new Co(this, a);
  };
  function Hs() {}
  Hs.prototype = new ts();
  Hs.prototype.constructor = Hs;
  function Is() {}
  Is.prototype = Hs.prototype;
  Hs.prototype.ha = function () {
    return Ri();
  };
  function Co(a, b) {
    this.Og = null;
    this.Zf = this.Lh = 0;
    this.Ng = null;
    this.qj = 0;
    As(this, a, b);
  }
  Co.prototype = new Cs();
  Co.prototype.constructor = Co;
  e = Co.prototype;
  e.i = function () {
    return new yk(this);
  };
  e.Mb = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.t(0);
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.ne = function (a) {
    return new Eo(this, a);
  };
  e.R = function (a) {
    return new Eo(this, a);
  };
  e.me = function (a) {
    return new Co(this, a);
  };
  e.Eb = function (a) {
    return new Co(this, a);
  };
  e.$classData = v({ Do: 0 }, !1, "scala.collection.IndexedSeqView$Drop", {
    Do: 1,
    fl: 1,
    uj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    pf: 1,
    P: 1,
    yh: 1,
    ya: 1,
  });
  function Mj(a) {
    this.qf = null;
    zj(this, a);
  }
  Mj.prototype = new Ds();
  Mj.prototype.constructor = Mj;
  e = Mj.prototype;
  e.i = function () {
    return new yk(this);
  };
  e.Mb = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.t(0);
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.ne = function (a) {
    return new Eo(this, a);
  };
  e.R = function (a) {
    return new Eo(this, a);
  };
  e.me = function (a) {
    return new Co(this, a);
  };
  e.Eb = function (a) {
    return new Co(this, a);
  };
  e.$classData = v({ Eo: 0 }, !1, "scala.collection.IndexedSeqView$Id", {
    Eo: 1,
    gl: 1,
    jj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    pf: 1,
    P: 1,
    yh: 1,
    ya: 1,
  });
  function Eo(a, b) {
    this.rj = this.Jh = this.Mh = this.$f = null;
    ys(this, a, b);
  }
  Eo.prototype = new Es();
  Eo.prototype.constructor = Eo;
  e = Eo.prototype;
  e.i = function () {
    return new yk(this);
  };
  e.Mb = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.t(0);
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.ne = function (a) {
    return new Eo(this, a);
  };
  e.R = function (a) {
    return new Eo(this, a);
  };
  e.me = function (a) {
    return new Co(this, a);
  };
  e.Eb = function (a) {
    return new Co(this, a);
  };
  e.$classData = v({ Ho: 0 }, !1, "scala.collection.IndexedSeqView$Map", {
    Ho: 1,
    hl: 1,
    wj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    pf: 1,
    P: 1,
    yh: 1,
    ya: 1,
  });
  function Js() {}
  Js.prototype = new vs();
  Js.prototype.constructor = Js;
  function Ks() {}
  Ks.prototype = Js.prototype;
  function Ls(a, b) {
    this.Pq = a;
    this.Ij = b;
  }
  Ls.prototype = new Gs();
  Ls.prototype.constructor = Ls;
  Ls.prototype.n = function () {
    return this.Ij;
  };
  Ls.prototype.t = function (a) {
    if (a < this.Ij) return this.Pq.a[a];
    throw og(
      new pg(),
      a + " is out of bounds (min 0, max " + ((-1 + this.Ij) | 0) + ")"
    );
  };
  Ls.prototype.Qc = function () {
    return "ArrayBufferView";
  };
  Ls.prototype.$classData = v(
    { Oq: 0 },
    !1,
    "scala.collection.mutable.ArrayBufferView",
    {
      Oq: 1,
      io: 1,
      jj: 1,
      gc: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      Zb: 1,
      c: 1,
      pf: 1,
      P: 1,
      yh: 1,
      ya: 1,
    }
  );
  function Ms(a, b) {
    return Yo(b) ? a.n() === b.n() : !0;
  }
  function Ns(a, b) {
    if (Yo(b)) {
      if (a === b) return !0;
      var c = a.n(),
        d = c === b.n();
      if (d) {
        var f = 0,
          g = a.yg(),
          h = b.yg();
        g = g < h ? g : h;
        h = c >> 31;
        var k = (g >>> 31) | 0 | ((g >> 31) << 1);
        for (
          g = (h === k ? (-2147483648 ^ c) > (-2147483648 ^ (g << 1)) : h > k)
            ? g
            : c;
          f < g && d;

        )
          (d = L(M(), a.t(f), b.t(f))), (f = (1 + f) | 0);
        if (f < c && d)
          for (a = a.i().Ed(f), b = b.i().Ed(f); d && a.m(); )
            d = L(M(), a.k(), b.k());
      }
      return d;
    }
    return Rl(a, b);
  }
  function Yo(a) {
    return !!(a && a.$classData && a.$classData.Nb.Kd);
  }
  function Os() {}
  Os.prototype = new Is();
  Os.prototype.constructor = Os;
  e = Os.prototype;
  e.Xa = function () {
    return 0;
  };
  e.f = function () {
    return !0;
  };
  e.v = function () {
    return 0;
  };
  e.Ll = function () {
    return !0;
  };
  e.F = function () {
    return !1;
  };
  e.i = function () {
    return W().Y;
  };
  e.O = function () {};
  e.Sf = function (a) {
    return new Ps(a);
  };
  e.Pb = function () {
    return this;
  };
  e.$classData = v({ eq: 0 }, !1, "scala.collection.immutable.Set$EmptySet$", {
    eq: 1,
    Pg: 1,
    Uf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    rf: 1,
    Xf: 1,
    N: 1,
    x: 1,
    hg: 1,
    Ib: 1,
    Wg: 1,
    c: 1,
  });
  var Qs;
  function Zk() {
    Qs || (Qs = new Os());
    return Qs;
  }
  function Rs(a) {
    this.Yf = a;
  }
  Rs.prototype = new Gs();
  Rs.prototype.constructor = Rs;
  e = Rs.prototype;
  e.n = function () {
    return this.Yf.length | 0;
  };
  e.z = function () {
    return "StringView(" + this.Yf + ")";
  };
  e.ib = function () {
    return "StringView";
  };
  e.rb = function () {
    return 1;
  };
  e.sb = function (a) {
    return 0 === a ? this.Yf : ng(X(), a);
  };
  e.H = function () {
    return yg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof Rs ? this.Yf === a.Yf : !1;
  };
  e.t = function (a) {
    return Pa(65535 & (this.Yf.charCodeAt(a) | 0));
  };
  e.$classData = v({ bp: 0 }, !1, "scala.collection.StringView", {
    bp: 1,
    io: 1,
    jj: 1,
    gc: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Zb: 1,
    c: 1,
    pf: 1,
    P: 1,
    yh: 1,
    ya: 1,
    Bb: 1,
    x: 1,
  });
  function Ps(a) {
    this.Bf = a;
  }
  Ps.prototype = new Is();
  Ps.prototype.constructor = Ps;
  e = Ps.prototype;
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return this.hf(a, !1);
  };
  e.Xa = function () {
    return 1;
  };
  e.f = function () {
    return !1;
  };
  e.v = function () {
    return 1;
  };
  e.F = function (a) {
    return L(M(), a, this.Bf);
  };
  e.jf = function (a) {
    return this.F(a) ? this : new Ss(this.Bf, a);
  };
  e.i = function () {
    W();
    return new yo(this.Bf);
  };
  e.O = function (a) {
    a.l(this.Bf);
  };
  e.Dg = function (a) {
    return !!a.l(this.Bf);
  };
  e.hf = function (a, b) {
    return !!a.l(this.Bf) !== b ? this : Zk();
  };
  e.u = function () {
    return this.Bf;
  };
  e.w = function () {
    return Zk();
  };
  e.Sf = function (a) {
    return this.jf(a);
  };
  e.$classData = v({ fq: 0 }, !1, "scala.collection.immutable.Set$Set1", {
    fq: 1,
    Pg: 1,
    Uf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    rf: 1,
    Xf: 1,
    N: 1,
    x: 1,
    hg: 1,
    Ib: 1,
    Wg: 1,
    ma: 1,
    c: 1,
  });
  function Ss(a, b) {
    this.Oe = a;
    this.Pe = b;
  }
  Ss.prototype = new Is();
  Ss.prototype.constructor = Ss;
  e = Ss.prototype;
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return this.hf(a, !1);
  };
  e.Xa = function () {
    return 2;
  };
  e.f = function () {
    return !1;
  };
  e.v = function () {
    return 2;
  };
  e.F = function (a) {
    return L(M(), a, this.Oe) || L(M(), a, this.Pe);
  };
  e.jf = function (a) {
    return this.F(a) ? this : new Ts(this.Oe, this.Pe, a);
  };
  e.i = function () {
    return new ir(this);
  };
  e.O = function (a) {
    a.l(this.Oe);
    a.l(this.Pe);
  };
  e.Dg = function (a) {
    return !!a.l(this.Oe) && !!a.l(this.Pe);
  };
  e.hf = function (a, b) {
    var c = null,
      d = 0;
    !!a.l(this.Oe) !== b && ((c = this.Oe), (d = (1 + d) | 0));
    !!a.l(this.Pe) !== b && (0 === d && (c = this.Pe), (d = (1 + d) | 0));
    a = d;
    switch (a) {
      case 0:
        return Zk();
      case 1:
        return new Ps(c);
      case 2:
        return this;
      default:
        throw new T(a);
    }
  };
  e.u = function () {
    return this.Oe;
  };
  e.fh = function () {
    return new Ps(this.Pe);
  };
  e.w = function () {
    return this.fh();
  };
  e.Sf = function (a) {
    return this.jf(a);
  };
  e.$classData = v({ gq: 0 }, !1, "scala.collection.immutable.Set$Set2", {
    gq: 1,
    Pg: 1,
    Uf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    rf: 1,
    Xf: 1,
    N: 1,
    x: 1,
    hg: 1,
    Ib: 1,
    Wg: 1,
    ma: 1,
    c: 1,
  });
  function Ts(a, b, c) {
    this.Qe = a;
    this.se = b;
    this.te = c;
  }
  Ts.prototype = new Is();
  Ts.prototype.constructor = Ts;
  e = Ts.prototype;
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return this.hf(a, !1);
  };
  e.Xa = function () {
    return 3;
  };
  e.f = function () {
    return !1;
  };
  e.v = function () {
    return 3;
  };
  e.F = function (a) {
    return L(M(), a, this.Qe) || L(M(), a, this.se) || L(M(), a, this.te);
  };
  e.jf = function (a) {
    return this.F(a) ? this : new Us(this.Qe, this.se, this.te, a);
  };
  e.i = function () {
    return new jr(this);
  };
  e.O = function (a) {
    a.l(this.Qe);
    a.l(this.se);
    a.l(this.te);
  };
  e.Dg = function (a) {
    return !!a.l(this.Qe) && !!a.l(this.se) && !!a.l(this.te);
  };
  e.hf = function (a, b) {
    var c = null,
      d = null,
      f = 0;
    !!a.l(this.Qe) !== b && ((c = this.Qe), (f = (1 + f) | 0));
    !!a.l(this.se) !== b &&
      (0 === f ? (c = this.se) : (d = this.se), (f = (1 + f) | 0));
    !!a.l(this.te) !== b &&
      (0 === f ? (c = this.te) : 1 === f && (d = this.te), (f = (1 + f) | 0));
    a = f;
    switch (a) {
      case 0:
        return Zk();
      case 1:
        return new Ps(c);
      case 2:
        return new Ss(c, d);
      case 3:
        return this;
      default:
        throw new T(a);
    }
  };
  e.u = function () {
    return this.Qe;
  };
  e.fh = function () {
    return new Ss(this.se, this.te);
  };
  e.w = function () {
    return this.fh();
  };
  e.Sf = function (a) {
    return this.jf(a);
  };
  e.$classData = v({ iq: 0 }, !1, "scala.collection.immutable.Set$Set3", {
    iq: 1,
    Pg: 1,
    Uf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    rf: 1,
    Xf: 1,
    N: 1,
    x: 1,
    hg: 1,
    Ib: 1,
    Wg: 1,
    ma: 1,
    c: 1,
  });
  function Us(a, b, c, d) {
    this.ue = a;
    this.ce = b;
    this.Od = c;
    this.Pd = d;
  }
  Us.prototype = new Is();
  Us.prototype.constructor = Us;
  e = Us.prototype;
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return this.hf(a, !1);
  };
  e.Xa = function () {
    return 4;
  };
  e.f = function () {
    return !1;
  };
  e.v = function () {
    return 4;
  };
  e.F = function (a) {
    return (
      L(M(), a, this.ue) ||
      L(M(), a, this.ce) ||
      L(M(), a, this.Od) ||
      L(M(), a, this.Pd)
    );
  };
  e.jf = function (a) {
    return this.F(a)
      ? this
      : Vs(Vs(Vs(Vs(Vs(Ok().bg, this.ue), this.ce), this.Od), this.Pd), a);
  };
  e.i = function () {
    return new kr(this);
  };
  function lr(a, b) {
    switch (b) {
      case 0:
        return a.ue;
      case 1:
        return a.ce;
      case 2:
        return a.Od;
      case 3:
        return a.Pd;
      default:
        throw new T(b);
    }
  }
  e.O = function (a) {
    a.l(this.ue);
    a.l(this.ce);
    a.l(this.Od);
    a.l(this.Pd);
  };
  e.Dg = function (a) {
    return !!a.l(this.ue) && !!a.l(this.ce) && !!a.l(this.Od) && !!a.l(this.Pd);
  };
  e.hf = function (a, b) {
    var c = null,
      d = null,
      f = null,
      g = 0;
    !!a.l(this.ue) !== b && ((c = this.ue), (g = (1 + g) | 0));
    !!a.l(this.ce) !== b &&
      (0 === g ? (c = this.ce) : (d = this.ce), (g = (1 + g) | 0));
    !!a.l(this.Od) !== b &&
      (0 === g ? (c = this.Od) : 1 === g ? (d = this.Od) : (f = this.Od),
      (g = (1 + g) | 0));
    !!a.l(this.Pd) !== b &&
      (0 === g
        ? (c = this.Pd)
        : 1 === g
        ? (d = this.Pd)
        : 2 === g && (f = this.Pd),
      (g = (1 + g) | 0));
    a = g;
    switch (a) {
      case 0:
        return Zk();
      case 1:
        return new Ps(c);
      case 2:
        return new Ss(c, d);
      case 3:
        return new Ts(c, d, f);
      case 4:
        return this;
      default:
        throw new T(a);
    }
  };
  e.u = function () {
    return this.ue;
  };
  e.fh = function () {
    return new Ts(this.ce, this.Od, this.Pd);
  };
  e.w = function () {
    return this.fh();
  };
  e.Sf = function (a) {
    return this.jf(a);
  };
  e.$classData = v({ kq: 0 }, !1, "scala.collection.immutable.Set$Set4", {
    kq: 1,
    Pg: 1,
    Uf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    rf: 1,
    Xf: 1,
    N: 1,
    x: 1,
    hg: 1,
    Ib: 1,
    Wg: 1,
    ma: 1,
    c: 1,
  });
  function Ws() {}
  Ws.prototype = new vs();
  Ws.prototype.constructor = Ws;
  function Xs() {}
  Xs.prototype = Ws.prototype;
  function Kk(a) {
    this.mc = a;
  }
  Kk.prototype = new Is();
  Kk.prototype.constructor = Kk;
  e = Kk.prototype;
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    a = Bk(this.mc, a, !1);
    return a === this.mc ? this : 0 === a.bb ? Ok().bg : new Kk(a);
  };
  e.ha = function () {
    return Ok();
  };
  e.v = function () {
    return this.mc.bb;
  };
  e.Xa = function () {
    return this.mc.bb;
  };
  e.f = function () {
    return 0 === this.mc.bb;
  };
  e.i = function () {
    return this.f() ? W().Y : new lp(this.mc);
  };
  e.F = function (a) {
    var b = mg(X(), a),
      c = Bd(Dd(), b);
    return this.mc.Cg(a, b, c, 0);
  };
  function Vs(a, b) {
    var c = mg(X(), b),
      d = Bd(Dd(), c);
    b = Gj(a.mc, b, c, d, 0);
    return a.mc === b ? a : new Kk(b);
  }
  e.u = function () {
    return this.i().k();
  };
  e.O = function (a) {
    this.mc.O(a);
  };
  e.y = function (a) {
    if (a instanceof Kk) {
      if (this === a) return !0;
      var b = this.mc;
      a = a.mc;
      return null === b ? null === a : b.y(a);
    }
    return Tr(this, a);
  };
  e.Qc = function () {
    return "HashSet";
  };
  e.H = function () {
    var a = new kp(this.mc);
    return Ag(zg(), a, zg().xh);
  };
  e.Eb = function (a) {
    return this.Be(vq(new wq(), this, a));
  };
  e.w = function () {
    var a = this.i().k(),
      b = mg(X(), a),
      c = Bd(Dd(), b);
    a = Lj(this.mc, a, b, c, 0);
    return this.mc === a ? this : new Kk(a);
  };
  e.Sf = function (a) {
    return Vs(this, a);
  };
  e.$classData = v({ zp: 0 }, !1, "scala.collection.immutable.HashSet", {
    zp: 1,
    Pg: 1,
    Uf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    rf: 1,
    Xf: 1,
    N: 1,
    x: 1,
    hg: 1,
    Ib: 1,
    Wg: 1,
    Ls: 1,
    Js: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function Ys() {}
  Ys.prototype = new ts();
  Ys.prototype.constructor = Ys;
  function Zs() {}
  Zs.prototype = Ys.prototype;
  Ys.prototype.Ua = function () {
    return this;
  };
  var at = function $s(a, b) {
    Bf();
    return new am(
      new H(
        ((d, f) => () => {
          if (d.f()) return Sk();
          Bf();
          var g = f.l(Y(d).u()),
            h = $s(Y(d).gb(), f);
          return new Pk(g, h);
        })(a, b)
      )
    );
  };
  function bt(a, b, c, d, f) {
    b.o = "" + b.o + c;
    if (!a.uc) b.o += "\x3cnot computed\x3e";
    else if (!a.f()) {
      c = Y(a).u();
      b.o = "" + b.o + c;
      c = a;
      var g = Y(a).gb();
      if (c !== g && (!g.uc || Y(c) !== Y(g)) && ((c = g), g.uc && !g.f()))
        for (g = Y(g).gb(); c !== g && g.uc && !g.f() && Y(c) !== Y(g); ) {
          b.o = "" + b.o + d;
          var h = Y(c).u();
          b.o = "" + b.o + h;
          c = Y(c).gb();
          g = Y(g).gb();
          g.uc && !g.f() && (g = Y(g).gb());
        }
      if (!g.uc || g.f()) {
        for (; c !== g; )
          (b.o = "" + b.o + d),
            (a = Y(c).u()),
            (b.o = "" + b.o + a),
            (c = Y(c).gb());
        c.uc || ((b.o = "" + b.o + d), (b.o += "\x3cnot computed\x3e"));
      } else {
        h = a;
        for (a = 0; ; ) {
          var k = h,
            l = g;
          if (k !== l && Y(k) !== Y(l))
            (h = Y(h).gb()), (g = Y(g).gb()), (a = (1 + a) | 0);
          else break;
        }
        h = c;
        k = g;
        (h === k || Y(h) === Y(k)) &&
          0 < a &&
          ((b.o = "" + b.o + d),
          (a = Y(c).u()),
          (b.o = "" + b.o + a),
          (c = Y(c).gb()));
        for (;;)
          if (((a = c), (h = g), a !== h && Y(a) !== Y(h)))
            (b.o = "" + b.o + d),
              (a = Y(c).u()),
              (b.o = "" + b.o + a),
              (c = Y(c).gb());
          else break;
        b.o = "" + b.o + d;
        b.o += "\x3ccycle\x3e";
      }
    }
    b.o = "" + b.o + f;
    return b;
  }
  function am(a) {
    this.ql = null;
    this.Aj = !1;
    this.pl = a;
    this.Bj = this.uc = !1;
  }
  am.prototype = new Ks();
  am.prototype.constructor = am;
  e = am.prototype;
  e.Mb = function () {
    return "LinearSeq";
  };
  e.n = function () {
    return No(this);
  };
  e.dd = function () {
    return Oo(this);
  };
  e.hb = function (a) {
    return 0 > a ? 1 : To(this, a);
  };
  e.t = function (a) {
    return en(this, a);
  };
  e.Qf = function (a) {
    return Po(this, a);
  };
  e.F = function (a) {
    return Qo(this, a);
  };
  e.Je = function (a) {
    return Ro(this, a);
  };
  e.De = function (a, b) {
    return So(this, a, b);
  };
  function Y(a) {
    if (!a.Aj && !a.Aj) {
      if (a.Bj)
        throw (
          ((a = new Al()),
          oe(
            a,
            "self-referential LazyList or a derivation thereof has no more elements"
          ),
          nb(a))
        );
      a.Bj = !0;
      try {
        var b = Zd(a.pl);
      } finally {
        a.Bj = !1;
      }
      a.uc = !0;
      a.pl = null;
      a.ql = b;
      a.Aj = !0;
    }
    return a.ql;
  }
  e.f = function () {
    return Y(this) === Sk();
  };
  e.v = function () {
    return this.uc && this.f() ? 0 : -1;
  };
  e.u = function () {
    return Y(this).u();
  };
  function $l(a) {
    var b = a,
      c = a;
    for (b.f() || (b = Y(b).gb()); c !== b && !b.f(); ) {
      b = Y(b).gb();
      if (b.f()) break;
      b = Y(b).gb();
      if (b === c) break;
      c = Y(c).gb();
    }
    return a;
  }
  e.i = function () {
    return this.uc && this.f() ? W().Y : new dp(this);
  };
  e.O = function (a) {
    for (var b = this; !b.f(); ) a.l(Y(b).u()), (b = Y(b).gb());
  };
  e.Qc = function () {
    return "LazyList";
  };
  function ct(a, b) {
    Bf();
    return new am(
      new H(
        ((c, d) => () => {
          if (c.f()) {
            var f = Zd(d);
            return f instanceof am
              ? Y(f)
              : 0 === f.v()
              ? Sk()
              : fm(Bf(), f.i());
          }
          Bf();
          f = Y(c).u();
          var g = ct(Y(c).gb(), d);
          return new Pk(f, g);
        })(a, b)
      )
    );
  }
  function dt(a, b) {
    return a.uc && a.f()
      ? yj(Bf(), b)
      : ct(a, new H(((c, d) => () => d)(a, b)));
  }
  function et(a, b) {
    return a.uc && a.f()
      ? (Bf(),
        new am(
          new H(
            ((c, d) => () => {
              Bf();
              var f = Bf().Le;
              return new Pk(d, f);
            })(a, b)
          )
        ))
      : ct(
          a,
          new H(
            ((c, d) => () => {
              W();
              return new yo(d);
            })(a, b)
          )
        );
  }
  e.Fe = function (a) {
    if (this.f()) throw Ld("empty.reduceLeft");
    for (var b = Y(this).u(), c = Y(this).gb(); !c.f(); )
      (b = a.ad(b, Y(c).u())), (c = Y(c).gb());
    return b;
  };
  function Uk(a, b) {
    return a.uc && a.f() ? Bf().Le : bm(Bf(), a, b, !1);
  }
  e.Vd = function (a) {
    return new Tk(this, a);
  };
  e.Tf = function (a) {
    return this.uc && this.f() ? Bf().Le : at(this, a);
  };
  function ft(a, b) {
    return a.uc && a.f() ? Bf().Le : cm(Bf(), a, b);
  }
  e.Ff = function (a) {
    return kj(
      new lj(),
      this.Tf(new E(((b, c) => (d) => c.l(d).Ac())(this, a))),
      this.Tf(new E(((b, c) => (d) => c.l(d).Bc())(this, a)))
    );
  };
  e.le = function (a, b, c, d) {
    $l(this);
    bt(this, a.Tb, b, c, d);
    return a;
  };
  e.z = function () {
    return bt(this, Cl("LazyList"), "(", ", ", ")").o;
  };
  e.l = function (a) {
    return en(this, a | 0);
  };
  e.Eb = function (a) {
    return 0 >= a ? this : this.uc && this.f() ? Bf().Le : em(Bf(), this, a);
  };
  e.Rf = function (a) {
    return ft(this, a);
  };
  e.Wb = function (a) {
    return ft(this, a);
  };
  e.R = function (a) {
    return this.Tf(a);
  };
  e.Pb = function (a) {
    return Uk(this, a);
  };
  e.nd = function (a) {
    return et(this, a);
  };
  e.Bd = function (a) {
    return dt(this, a);
  };
  e.w = function () {
    return Y(this).gb();
  };
  e.ha = function () {
    return Bf();
  };
  e.$classData = v({ Gp: 0 }, !1, "scala.collection.immutable.LazyList", {
    Gp: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Ph: 1,
    Mg: 1,
    Ih: 1,
    Qh: 1,
    c: 1,
  });
  function gt(a, b, c, d, f) {
    b.o = "" + b.o + c;
    if (!a.f()) {
      c = a.u();
      b.o = "" + b.o + c;
      c = a;
      if (a.ye()) {
        var g = a.w();
        if (c !== g && ((c = g), g.ye()))
          for (g = g.w(); c !== g && g.ye(); ) {
            b.o = "" + b.o + d;
            var h = c.u();
            b.o = "" + b.o + h;
            c = c.w();
            g = g.w();
            g.ye() && (g = g.w());
          }
        if (g.ye()) {
          for (h = 0; a !== g; ) (a = a.w()), (g = g.w()), (h = (1 + h) | 0);
          c === g &&
            0 < h &&
            ((b.o = "" + b.o + d),
            (a = c.u()),
            (b.o = "" + b.o + a),
            (c = c.w()));
          for (; c !== g; )
            (b.o = "" + b.o + d),
              (a = c.u()),
              (b.o = "" + b.o + a),
              (c = c.w());
        } else {
          for (; c !== g; )
            (b.o = "" + b.o + d),
              (a = c.u()),
              (b.o = "" + b.o + a),
              (c = c.w());
          c.f() || ((b.o = "" + b.o + d), (g = c.u()), (b.o = "" + b.o + g));
        }
      }
      c.f() ||
        (c.ye()
          ? ((b.o = "" + b.o + d), (b.o += "\x3ccycle\x3e"))
          : ((b.o = "" + b.o + d), (b.o += "\x3cnot computed\x3e")));
    }
    b.o = "" + b.o + f;
    return b;
  }
  function jm() {}
  jm.prototype = new Ks();
  jm.prototype.constructor = jm;
  function ht() {}
  e = ht.prototype = jm.prototype;
  e.Mb = function () {
    return "LinearSeq";
  };
  e.i = function () {
    return 0 === this.v() ? W().Y : new Mo(this);
  };
  e.n = function () {
    return No(this);
  };
  e.dd = function () {
    return Oo(this);
  };
  e.hb = function (a) {
    return 0 > a ? 1 : To(this, a);
  };
  e.t = function (a) {
    return en(this, a);
  };
  e.Qf = function (a) {
    return Po(this, a);
  };
  e.F = function (a) {
    return Qo(this, a);
  };
  e.Je = function (a) {
    return Ro(this, a);
  };
  e.De = function (a, b) {
    return So(this, a, b);
  };
  e.Qc = function () {
    return "Stream";
  };
  e.O = function (a) {
    for (var b = this; !b.f(); ) a.l(b.u()), (b = b.w());
  };
  function it(a, b) {
    if (a.f()) return (a = Af()), (b = Zd(b)), im(a, b);
    var c = a.u();
    return new lm(c, new H(((d, f) => () => it(d.w(), f))(a, b)));
  }
  e.Fe = function (a) {
    if (this.f()) throw Ld("empty.reduceLeft");
    for (var b = this.u(), c = this.w(); !c.f(); )
      (b = a.ad(b, c.u())), (c = c.w());
    return b;
  };
  function bl(a, b, c) {
    for (; !a.f() && !!b.l(a.u()) === c; ) a = a.w();
    return a.f() ? mm() : nm(Af(), a, b, c);
  }
  e.Vd = function (a) {
    return new cl(this, a);
  };
  function dl(a, b) {
    if (a.f()) return mm();
    var c = b.l(a.u());
    return new lm(c, new H(((d, f) => () => dl(d.w(), f))(a, b)));
  }
  function jt(a, b) {
    if (a.f()) return mm();
    var c = new Ci(a),
      d = Af(),
      f = b.l(c.fa.u());
    for (d = im(d, f); !c.fa.f() && d.f(); )
      (c.fa = c.fa.w()),
        c.fa.f() || ((d = Af()), (f = b.l(c.fa.u())), (d = im(d, f)));
    return c.fa.f()
      ? mm()
      : it(d, new H(((g, h, k) => () => jt(h.fa.w(), k))(a, c, b)));
  }
  e.le = function (a, b, c, d) {
    this.Ck();
    gt(this, a.Tb, b, c, d);
    return a;
  };
  e.z = function () {
    return gt(this, Cl("Stream"), "(", ", ", ")").o;
  };
  e.l = function (a) {
    return en(this, a | 0);
  };
  e.Wb = function (a) {
    return jt(this, a);
  };
  e.R = function (a) {
    return dl(this, a);
  };
  e.Pb = function (a) {
    return bl(this, a, !1);
  };
  e.ha = function () {
    return Af();
  };
  function Gm(a) {
    this.oc = a;
  }
  Gm.prototype = new Ks();
  Gm.prototype.constructor = Gm;
  e = Gm.prototype;
  e.Ag = function (a) {
    return Ms(this, a);
  };
  e.Mb = function () {
    return "IndexedSeq";
  };
  e.i = function () {
    return new yk(new Rs(this.oc));
  };
  e.Eb = function (a) {
    return Bo(this, a);
  };
  e.R = function (a) {
    return Do(this, a);
  };
  e.u = function () {
    return Pa(65535 & (this.oc.charCodeAt(0) | 0));
  };
  e.dd = function () {
    return this.t((-1 + this.n()) | 0);
  };
  e.hb = function (a) {
    var b = this.oc.length | 0;
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.oc.length | 0;
  };
  e.n = function () {
    return this.oc.length | 0;
  };
  e.z = function () {
    return this.oc;
  };
  e.Ob = function (a, b, c) {
    if (a instanceof Ta) {
      var d = this.oc.length | 0;
      c = c < d ? c : d;
      d = (a.a.length - b) | 0;
      c = c < d ? c : d;
      c = 0 < c ? c : 0;
      d = this.oc;
      if (c > (d.length | 0) || 0 > c || 0 > c)
        throw ((a = new Fl()), oe(a, "Index out of Bound"), a);
      b = (b - 0) | 0;
      for (var f = 0; f < c; )
        (a.a[(f + b) | 0] = 65535 & (d.charCodeAt(f) | 0)), (f = (1 + f) | 0);
      return c;
    }
    return Md(this, a, b, c);
  };
  e.Je = function (a) {
    return a instanceof Gm ? this.oc === a.oc : Ns(this, a);
  };
  e.Qc = function () {
    return "WrappedString";
  };
  e.yg = function () {
    return 2147483647;
  };
  e.y = function (a) {
    return a instanceof Gm ? this.oc === a.oc : ns(this, a);
  };
  e.ha = function () {
    return xf();
  };
  e.Bd = function (a) {
    return a instanceof Gm ? new Gm("" + this.oc + a.oc) : ej(this, a);
  };
  e.Be = function (a) {
    return Fm(Hm(), a);
  };
  e.oh = function (a) {
    return Fm(Hm(), a);
  };
  e.l = function (a) {
    return Pa(65535 & (this.oc.charCodeAt(a | 0) | 0));
  };
  e.t = function (a) {
    return Pa(65535 & (this.oc.charCodeAt(a) | 0));
  };
  e.$classData = v({ Jq: 0 }, !1, "scala.collection.immutable.WrappedString", {
    Jq: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    c: 1,
  });
  function B(a, b) {
    a.Qj = b;
    return a;
  }
  function C() {
    this.Qj = null;
  }
  C.prototype = new q();
  C.prototype.constructor = C;
  e = C.prototype;
  e.nd = function (a) {
    return Dq(this, a);
  };
  e.Ff = function (a) {
    return Sl(this, a);
  };
  e.R = function (a) {
    return Tl(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Rf = function (a) {
    return Vl(this, a);
  };
  e.ai = function (a) {
    return Wl(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.Ag = function (a) {
    return Ms(this, a);
  };
  e.Je = function (a) {
    return Ns(this, a);
  };
  e.yg = function () {
    fe || (fe = new ee());
    return fe.nl;
  };
  e.i = function () {
    var a = new Mj(this);
    return new yk(a);
  };
  e.Eb = function (a) {
    return Bo(this, a);
  };
  e.u = function () {
    return this.t(0);
  };
  e.dd = function () {
    return this.t((-1 + this.n()) | 0);
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.y = function (a) {
    return ns(this, a);
  };
  e.H = function () {
    return Hi(this);
  };
  e.z = function () {
    return Go(this);
  };
  e.Pf = function (a) {
    return Eq(this, a);
  };
  e.Xa = function () {
    return this.n();
  };
  e.De = function (a, b) {
    var c = new Mj(this);
    c = new yk(c);
    return pj(c, a, b);
  };
  e.F = function (a) {
    return Gk(this, a);
  };
  e.Pj = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.f = function () {
    return 0 === this.hb(0);
  };
  e.aj = function () {
    return qq().X();
  };
  e.Vd = function (a) {
    return new mj(this, a);
  };
  e.w = function () {
    return cj(this);
  };
  e.O = function (a) {
    Ed(this, a);
  };
  e.Qf = function (a) {
    return Fd(this, a);
  };
  e.Fe = function (a) {
    return Kd(this, a);
  };
  e.Ob = function (a, b, c) {
    return Md(this, a, b, c);
  };
  e.le = function (a, b, c, d) {
    return Vd(this, a, b, c, d);
  };
  e.rd = function () {
    return qq();
  };
  e.n = function () {
    return this.Qj.length | 0;
  };
  e.t = function (a) {
    return this.Qj[a];
  };
  e.Qc = function () {
    return "WrappedVarArgs";
  };
  e.Be = function (a) {
    return mq(qq(), a);
  };
  e.l = function (a) {
    return this.t(a | 0);
  };
  e.ha = function () {
    return qq();
  };
  e.$classData = v({ Ir: 0 }, !1, "scala.scalajs.runtime.WrappedVarArgs", {
    Ir: 1,
    b: 1,
    Kd: 1,
    nc: 1,
    Ib: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Ic: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function lm(a, b) {
    this.xl = null;
    this.uq = a;
    this.Gj = b;
  }
  lm.prototype = new ht();
  lm.prototype.constructor = lm;
  e = lm.prototype;
  e.u = function () {
    return this.uq;
  };
  e.f = function () {
    return !1;
  };
  e.ye = function () {
    return null === this.Gj;
  };
  e.Sj = function () {
    this.ye() || this.ye() || ((this.xl = Zd(this.Gj)), (this.Gj = null));
    return this.xl;
  };
  e.Ck = function () {
    var a = this,
      b = this;
    for (a.f() || (a = a.w()); b !== a && !a.f(); ) {
      a = a.w();
      if (a.f()) break;
      a = a.w();
      if (a === b) break;
      b = b.w();
    }
  };
  e.w = function () {
    return this.Sj();
  };
  e.$classData = v({ tq: 0 }, !1, "scala.collection.immutable.Stream$Cons", {
    tq: 1,
    rq: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Ph: 1,
    Mg: 1,
    Ih: 1,
    Qh: 1,
    c: 1,
  });
  function kt() {}
  kt.prototype = new ht();
  kt.prototype.constructor = kt;
  e = kt.prototype;
  e.f = function () {
    return !0;
  };
  e.Gg = function () {
    throw Th(new Uh(), "head of empty stream");
  };
  e.Sj = function () {
    throw Ld("tail of empty stream");
  };
  e.v = function () {
    return 0;
  };
  e.ye = function () {
    return !1;
  };
  e.Ck = function () {};
  e.w = function () {
    return this.Sj();
  };
  e.u = function () {
    this.Gg();
  };
  e.$classData = v({ vq: 0 }, !1, "scala.collection.immutable.Stream$Empty$", {
    vq: 1,
    rq: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Ph: 1,
    Mg: 1,
    Ih: 1,
    Qh: 1,
    c: 1,
  });
  var lt;
  function mm() {
    lt || (lt = new kt());
    return lt;
  }
  function mt() {}
  mt.prototype = new Xs();
  mt.prototype.constructor = mt;
  function nt() {}
  nt.prototype = mt.prototype;
  mt.prototype.qb = function (a) {
    return Yh(this, a);
  };
  function ot(a, b, c) {
    var d = c & ((-1 + a.yb.a.length) | 0),
      f = a.yb.a[d];
    if (null === f) a.yb.a[d] = new gf(b, c, null);
    else {
      for (var g = null, h = f; null !== h && h.Td <= c; ) {
        if (h.Td === c && L(M(), b, h.af)) return;
        g = h;
        h = h.pb;
      }
      null === g ? (a.yb.a[d] = new gf(b, c, f)) : (g.pb = new gf(b, c, g.pb));
    }
    a.kd = (1 + a.kd) | 0;
  }
  function pt(a, b) {
    var c = a.yb.a.length;
    a.Mj = Ja(b * a.Wh);
    if (0 === a.kd) a.yb = new (x(hf).G)(b);
    else {
      var d = a.yb;
      a.yb = nd(O(), d, b);
      d = new gf(null, 0, null);
      for (var f = new gf(null, 0, null); c < b; ) {
        for (var g = 0; g < c; ) {
          var h = a.yb.a[g];
          if (null !== h) {
            d.pb = null;
            f.pb = null;
            for (var k = d, l = f, p = h; null !== p; ) {
              var u = p.pb;
              0 === (p.Td & c) ? (k = k.pb = p) : (l = l.pb = p);
              p = u;
            }
            k.pb = null;
            h !== d.pb && (a.yb.a[g] = d.pb);
            null !== f.pb && ((a.yb.a[(g + c) | 0] = f.pb), (l.pb = null));
          }
          g = (1 + g) | 0;
        }
        c <<= 1;
      }
    }
  }
  function qt(a) {
    a = (-1 + a) | 0;
    a = 4 < a ? a : 4;
    a = ((-2147483648 >> ca(a)) & a) << 1;
    return 1073741824 > a ? a : 1073741824;
  }
  function hl(a, b, c) {
    a.Wh = c;
    a.yb = new (x(hf).G)(qt(b));
    a.Mj = Ja(a.yb.a.length * a.Wh);
    a.kd = 0;
    return a;
  }
  function gl() {
    this.Wh = 0;
    this.yb = null;
    this.kd = this.Mj = 0;
  }
  gl.prototype = new Zs();
  gl.prototype.constructor = gl;
  e = gl.prototype;
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.Xa = function () {
    return this.kd;
  };
  function Yq(a) {
    return a ^ ((a >>> 16) | 0);
  }
  e.F = function (a) {
    var b = Yq(mg(X(), a)),
      c = this.yb.a[b & ((-1 + this.yb.a.length) | 0)];
    if (null === c) a = null;
    else
      a: for (;;) {
        if (b === c.Td && L(M(), a, c.af)) {
          a = c;
          break a;
        }
        if (null === c.pb || c.Td > b) {
          a = null;
          break a;
        }
        c = c.pb;
      }
    return null !== a;
  };
  e.cc = function (a) {
    a = qt(Ja(((1 + a) | 0) / this.Wh));
    a > this.yb.a.length && pt(this, a);
  };
  function $b(a, b) {
    ((1 + a.kd) | 0) >= a.Mj && pt(a, a.yb.a.length << 1);
    ot(a, b, Yq(mg(X(), b)));
  }
  function il(a, b) {
    a.cc(b.v());
    if (b instanceof Kk)
      return (
        b.mc.Ri(
          new Sd(
            ((d) => (f, g) => {
              ot(d, f, Yq(g | 0));
            })(a)
          )
        ),
        a
      );
    if (b instanceof gl) {
      for (b = new Wq(b); b.m(); ) {
        var c = b.k();
        ot(a, c.af, c.Td);
      }
      return a;
    }
    return Yh(a, b);
  }
  function bc(a, b) {
    a: {
      var c = Yq(mg(X(), b)),
        d = c & ((-1 + a.yb.a.length) | 0),
        f = a.yb.a[d];
      if (null !== f)
        if (f.Td === c && L(M(), f.af, b))
          (a.yb.a[d] = f.pb), (a.kd = (-1 + a.kd) | 0);
        else
          for (d = f, f = f.pb; null !== f && f.Td <= c; ) {
            if (f.Td === c && L(M(), f.af, b)) {
              d.pb = f.pb;
              a.kd = (-1 + a.kd) | 0;
              break a;
            }
            d = f;
            f = f.pb;
          }
    }
  }
  e.i = function () {
    return new Vq(this);
  };
  e.ha = function () {
    return kl();
  };
  e.v = function () {
    return this.kd;
  };
  e.f = function () {
    return 0 === this.kd;
  };
  e.O = function (a) {
    for (var b = this.yb.a.length, c = 0; c < b; ) {
      var d = this.yb.a[c];
      null !== d && d.O(a);
      c = (1 + c) | 0;
    }
  };
  e.Qc = function () {
    return "HashSet";
  };
  e.H = function () {
    var a = new Vq(this);
    a = a.m() ? new Xq(this) : a;
    return Ag(zg(), a, zg().xh);
  };
  e.Oa = function (a) {
    $b(this, a);
    return this;
  };
  e.qb = function (a) {
    return il(this, a);
  };
  e.$classData = v({ gr: 0 }, !1, "scala.collection.mutable.HashSet", {
    gr: 1,
    Ms: 1,
    Uf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    rf: 1,
    Xf: 1,
    N: 1,
    x: 1,
    Ps: 1,
    yc: 1,
    Qs: 1,
    xc: 1,
    Xb: 1,
    Xc: 1,
    qc: 1,
    pc: 1,
    dh: 1,
    ma: 1,
    c: 1,
  });
  function rt(a) {
    var b = a.Hc,
      c = b >> 31,
      d = a.cb;
    a = d >> 31;
    d = (b - d) | 0;
    return new n(
      d,
      (-2147483648 ^ d) > (-2147483648 ^ b)
        ? (-1 + ((c - a) | 0)) | 0
        : (c - a) | 0
    );
  }
  function st(a) {
    var b = rt(a),
      c = a.za,
      d = c >> 31;
    a = ag();
    b = sh(a, b.Fa, b.Ea, c, d);
    a = a.Na;
    return 0 === b && 0 === a;
  }
  function tt(a, b, c, d) {
    a.cb = b;
    a.Hc = c;
    a.za = d;
    a.vc = (b > c && 0 < d) || (b < c && 0 > d) || (b === c && !a.qd());
    if (0 === d) throw rd("step cannot be 0.");
    if (a.vc) b = 0;
    else {
      b = rt(a);
      var f = a.za,
        g = f >> 31;
      var h = ag();
      b = rh(h, b.Fa, b.Ea, f, g);
      h = h.Na;
      g = a.qd() || !st(a) ? 1 : 0;
      f = g >> 31;
      g = (b + g) | 0;
      h = new n(
        g,
        (-2147483648 ^ g) < (-2147483648 ^ b)
          ? (1 + ((h + f) | 0)) | 0
          : (h + f) | 0
      );
      b = h.Fa;
      h = h.Ea;
      b = (0 === h ? -1 < (-2147483648 ^ b) : 0 < h) ? -1 : b;
    }
    a.Nd = b;
    switch (d) {
      case 1:
        c = a.qd() ? c : (-1 + c) | 0;
        break;
      case -1:
        c = a.qd() ? c : (1 + c) | 0;
        break;
      default:
        (b = rt(a)),
          (h = d >> 31),
          (b = sh(ag(), b.Fa, b.Ea, d, h)),
          (c = 0 !== b ? (c - b) | 0 : a.qd() ? c : (c - d) | 0);
    }
    a.Af = c;
  }
  function ut() {
    this.za = this.Hc = this.cb = 0;
    this.vc = !1;
    this.Af = this.Nd = 0;
  }
  ut.prototype = new Ks();
  ut.prototype.constructor = ut;
  function vt() {}
  e = vt.prototype = ut.prototype;
  e.nd = function (a) {
    return Dq(this, a);
  };
  e.Bd = function (a) {
    return Eq(this, a);
  };
  e.Ff = function (a) {
    return Sl(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Rf = function (a) {
    return Vl(this, a);
  };
  e.ai = function (a) {
    return Wl(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.Ag = function (a) {
    return Ms(this, a);
  };
  e.rd = function () {
    return xf();
  };
  e.Mb = function () {
    return "IndexedSeq";
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.i = function () {
    return new Rn(this.cb, this.za, this.Af, this.vc);
  };
  e.f = function () {
    return this.vc;
  };
  e.n = function () {
    return 0 > this.Nd
      ? Rh(Ff(), this.cb, this.Hc, this.za, this.qd())
      : this.Nd;
  };
  function wt(a) {
    if (a.vc) throw nb(Sh("last"));
    return a.Af;
  }
  function xt(a) {
    0 > a.Nd && Rh(Ff(), a.cb, a.Hc, a.za, a.qd());
  }
  e.O = function (a) {
    if (!this.vc)
      for (var b = this.cb; ; ) {
        a.l(b);
        if (b === this.Af) break;
        b = (b + this.za) | 0;
      }
  };
  e.Je = function (a) {
    if (a instanceof ut) {
      var b = this.n();
      switch (b) {
        case 0:
          return a.vc;
        case 1:
          return 1 === a.n() && this.cb === a.cb;
        default:
          return a.n() === b && this.cb === a.cb && this.za === a.za;
      }
    } else return Ns(this, a);
  };
  e.F = function (a) {
    ma(a)
      ? ((a |= 0),
        (a =
          !(a === this.Hc && !this.qd()) &&
          (0 < this.za
            ? !(a < this.cb || a > this.Hc) &&
              (1 === this.za || 0 === Ia((a - this.cb) | 0, this.za))
            : !(a < this.Hc || a > this.cb) &&
              (-1 === this.za || 0 === Ia((a - this.cb) | 0, this.za)))))
      : (a = Gk(this, a));
    return a;
  };
  e.yg = function () {
    return 2147483647;
  };
  e.y = function (a) {
    if (a instanceof ut) {
      if (this.vc) return a.vc;
      if (a.vc || this.cb !== a.cb) return !1;
      var b = wt(this);
      return b === wt(a) && (this.cb === b || this.za === a.za);
    }
    return ns(this, a);
  };
  e.H = function () {
    if (2 <= this.n()) {
      var a = zg(),
        b = this.za,
        c = this.Af;
      return xg(a.p(a.p(a.p(a.Ec, this.cb), b), c));
    }
    return Hi(this);
  };
  e.z = function () {
    var a = this.qd() ? "to" : "until",
      b = 1 === this.za ? "" : " by " + this.za;
    return (
      (this.vc ? "empty " : st(this) ? "" : "inexact ") +
      "Range " +
      this.cb +
      " " +
      a +
      " " +
      this.Hc +
      b
    );
  };
  e.Qc = function () {
    return "Range";
  };
  e.xg = function (a) {
    xt(this);
    if (0 > a || a >= this.Nd)
      throw og(
        new pg(),
        a + " is out of bounds (min 0, max " + ((-1 + this.Nd) | 0) + ")"
      );
    return (this.cb + ba(this.za, a)) | 0;
  };
  e.ha = function () {
    return xf();
  };
  e.Eb = function (a) {
    if (0 >= a || this.vc) a = this;
    else if (a >= this.Nd && 0 <= this.Nd)
      (a = this.Hc), (a = new $n(a, a, this.za));
    else {
      a = (this.cb + ba(this.za, a)) | 0;
      var b = this.Hc,
        c = this.za;
      a = this.qd() ? new yt(a, b, c) : new $n(a, b, c);
    }
    return a;
  };
  e.l = function (a) {
    return this.xg(a | 0);
  };
  e.t = function (a) {
    return this.xg(a);
  };
  e.R = function (a) {
    xt(this);
    return Tl(this, a);
  };
  e.w = function () {
    if (this.vc) throw nb(Sh("tail"));
    if (1 === this.Nd) {
      var a = this.Hc;
      a = new $n(a, a, this.za);
    } else
      a = this.qd()
        ? new yt((this.cb + this.za) | 0, this.Hc, this.za)
        : new $n((this.cb + this.za) | 0, this.Hc, this.za);
    return a;
  };
  e.u = function () {
    if (this.vc) throw nb(Sh("head"));
    return this.cb;
  };
  e.dd = function () {
    return wt(this);
  };
  function $n(a, b, c) {
    this.za = this.Hc = this.cb = 0;
    this.vc = !1;
    this.Af = this.Nd = 0;
    tt(this, a, b, c);
  }
  $n.prototype = new vt();
  $n.prototype.constructor = $n;
  $n.prototype.qd = function () {
    return !1;
  };
  $n.prototype.$classData = v(
    { $p: 0 },
    !1,
    "scala.collection.immutable.Range$Exclusive",
    {
      $p: 1,
      Yp: 1,
      Uc: 1,
      xa: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      la: 1,
      oa: 1,
      N: 1,
      P: 1,
      x: 1,
      nc: 1,
      Ib: 1,
      Ic: 1,
      Kd: 1,
      $a: 1,
      ya: 1,
      be: 1,
      Rd: 1,
      ab: 1,
      ma: 1,
      c: 1,
    }
  );
  function yt(a, b, c) {
    this.za = this.Hc = this.cb = 0;
    this.vc = !1;
    this.Af = this.Nd = 0;
    tt(this, a, b, c);
  }
  yt.prototype = new vt();
  yt.prototype.constructor = yt;
  yt.prototype.qd = function () {
    return !0;
  };
  yt.prototype.$classData = v(
    { aq: 0 },
    !1,
    "scala.collection.immutable.Range$Inclusive",
    {
      aq: 1,
      Yp: 1,
      Uc: 1,
      xa: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      la: 1,
      oa: 1,
      N: 1,
      P: 1,
      x: 1,
      nc: 1,
      Ib: 1,
      Ic: 1,
      Kd: 1,
      $a: 1,
      ya: 1,
      be: 1,
      Rd: 1,
      ab: 1,
      ma: 1,
      c: 1,
    }
  );
  function op() {
    this.d = null;
  }
  op.prototype = new Ks();
  op.prototype.constructor = op;
  function zt() {}
  e = zt.prototype = op.prototype;
  e.Ff = function (a) {
    return Sl(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Rf = function (a) {
    return Vl(this, a);
  };
  e.ai = function (a) {
    return Wl(this, a);
  };
  e.Pb = function (a) {
    return Hk(this, a, !1);
  };
  e.Ag = function (a) {
    return Ms(this, a);
  };
  e.Je = function (a) {
    return Ns(this, a);
  };
  e.Mb = function () {
    return "IndexedSeq";
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.rd = function () {
    return Cf();
  };
  e.n = function () {
    return this instanceof At ? this.j : this.d.a.length;
  };
  e.i = function () {
    return Oe() === this ? Cf().Al : new jp(this, this.n(), this.xd());
  };
  function Hk(a, b, c) {
    for (var d = 0, f = a.d.a.length; d !== f; ) {
      if (!!b.l(a.d.a[d]) === c) {
        for (var g = 0, h = (1 + d) | 0; h < f; )
          !!b.l(a.d.a[h]) !== c && (g |= 1 << h), (h = (1 + h) | 0);
        f = g;
        f = (d + ye(he(), f)) | 0;
        if (a instanceof At) {
          h = new qp();
          for (var k = 0; k < d; ) wp(h, a.d.a[k]), (k = (1 + k) | 0);
          for (k = (1 + d) | 0; d !== f; )
            0 !== ((1 << k) & g) && (wp(h, a.d.a[k]), (d = (1 + d) | 0)),
              (k = (1 + k) | 0);
          Bt(
            a,
            new E(
              ((l, p, u, y) => (D) => (!!p.l(D) !== u ? wp(y, D) : void 0))(
                a,
                b,
                c,
                h
              )
            )
          );
          return h.Id();
        }
        if (0 === f) return Oe();
        b = new r(f);
        a.d.I(0, b, 0, d);
        for (c = (1 + d) | 0; d !== f; )
          0 !== ((1 << c) & g) && ((b.a[d] = a.d.a[c]), (d = (1 + d) | 0)),
            (c = (1 + c) | 0);
        return new Pe(b);
      }
      d = (1 + d) | 0;
    }
    return a instanceof At
      ? ((d = new qp()),
        up(d, a.d),
        Bt(
          a,
          new E(
            ((l, p, u, y) => (D) => (!!p.l(D) !== u ? wp(y, D) : void 0))(
              a,
              b,
              c,
              d
            )
          )
        ),
        d.Id())
      : a;
  }
  e.Pc = function (a, b) {
    var c = (4 + this.xd()) | 0;
    if (0 < b && b < c) {
      b = new Ci(this);
      if (ff(a))
        a.O(
          new E(
            ((d, f) => (g) => {
              f.fa = f.fa.hc(g);
            })(this, b)
          )
        );
      else for (a = a.i(); a.m(); ) (c = a.k()), (b.fa = b.fa.hc(c));
      return b.fa;
    }
    if (this.n() < ((b >>> 5) | 0) && a instanceof op) {
      for (b = new Fo(this); b.m(); ) a = a.lf(b.k());
      return a;
    }
    return pp(vp(new qp(), this), a).Id();
  };
  e.Qc = function () {
    return "Vector";
  };
  e.Ob = function (a, b, c) {
    return this.i().Ob(a, b, c);
  };
  e.yg = function () {
    return Cf().zl;
  };
  e.Gb = function (a) {
    return og(
      new pg(),
      a + " is out of bounds (min 0, max " + ((-1 + this.n()) | 0) + ")"
    );
  };
  e.u = function () {
    if (0 === this.d.a.length) throw Th(new Uh(), "empty.head");
    return this.d.a[0];
  };
  e.dd = function () {
    if (this instanceof At) {
      var a = this.e;
      if (0 === a.a.length) throw Th(new Uh(), "empty.tail");
      return a.a[(-1 + a.a.length) | 0];
    }
    return this.d.a[(-1 + this.d.a.length) | 0];
  };
  e.O = function (a) {
    for (var b = this.xd(), c = 0; c < b; ) {
      var d = R(),
        f = (b / 2) | 0,
        g = (c - f) | 0;
      bf(
        d,
        (-1 + ((((1 + f) | 0) - (0 > g ? -g | 0 : g)) | 0)) | 0,
        this.Ud(c),
        a
      );
      c = (1 + c) | 0;
    }
  };
  e.Eb = function (a) {
    var b = this.n();
    a = 0 < a ? a : 0;
    var c = this.n();
    b = b < c ? b : c;
    return ((b - a) | 0) === this.n() ? this : b <= a ? Oe() : this.wd(a, b);
  };
  e.Bd = function (a) {
    var b = a.v();
    return 0 === b ? this : this.Pc(a, b);
  };
  e.ha = function () {
    return Cf();
  };
  function Ct() {}
  Ct.prototype = new Xs();
  Ct.prototype.constructor = Ct;
  function Dt() {}
  e = Dt.prototype = Ct.prototype;
  e.Bd = function (a) {
    return Eq(this, a);
  };
  e.R = function (a) {
    return Tl(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.Mb = function () {
    return "IndexedSeq";
  };
  e.Eb = function (a) {
    return Bo(this, a);
  };
  e.u = function () {
    return this.t(0);
  };
  e.hb = function (a) {
    var b = this.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.n();
  };
  e.rd = function () {
    return Zi().Kj;
  };
  function Et(a, b) {
    var c = a.Fd().kc(),
      d = c === m(fb);
    a = [];
    b.v();
    for (b = b.i(); b.m(); ) {
      var f = b.k();
      a.push(d ? za(f) : null === f ? c.Cc.$h : f);
    }
    Zi();
    c = c === m(db) ? m(ta) : c === m(cg) || c === m(li) ? m(w) : c;
    return Wi(0, x(c.Cc).Zh(a));
  }
  e.aj = function () {
    return Mq(Zi(), this.Fd());
  };
  e.Qc = function () {
    return "ArraySeq";
  };
  e.Ob = function (a, b, c) {
    var d = this.n(),
      f = Nd(Od(), a);
    c = c < d ? c : d;
    f = (f - b) | 0;
    f = c < f ? c : f;
    f = 0 < f ? f : 0;
    0 < f && zh(Bh(), this.pd(), 0, a, b, f);
    return f;
  };
  e.y = function (a) {
    return a instanceof Ct && Nd(Od(), this.pd()) !== Nd(Od(), a.pd())
      ? !1
      : ns(this, a);
  };
  e.Be = function (a) {
    return Et(this, a);
  };
  e.oh = function (a) {
    return Et(this, a);
  };
  e.ha = function () {
    return Zi().Kj;
  };
  function Ii() {}
  Ii.prototype = new Ks();
  Ii.prototype.constructor = Ii;
  function Ft() {}
  e = Ft.prototype = Ii.prototype;
  e.i = function () {
    return new Uo(this);
  };
  e.nd = function (a) {
    return Dq(this, a);
  };
  e.Ff = function (a) {
    return Sl(this, a);
  };
  e.Rf = function (a) {
    return Vl(this, a);
  };
  e.Mb = function () {
    return "LinearSeq";
  };
  e.t = function (a) {
    return en(this, a);
  };
  e.Je = function (a) {
    return Ro(this, a);
  };
  e.De = function (a, b) {
    return So(this, a, b);
  };
  e.rd = function () {
    return zc();
  };
  function Gt(a, b) {
    if (a.f()) return b;
    if (b.f()) return a;
    var c = new Wm(b.u(), a),
      d = c;
    for (b = b.w(); !b.f(); ) {
      var f = new Wm(b.u(), a);
      d = d.tc = f;
      b = b.w();
    }
    return c;
  }
  e.f = function () {
    return this === I();
  };
  function Ac(a, b) {
    if (b instanceof Ii) return Gt(a, b);
    if (0 === b.v()) return a;
    if (b instanceof gp && a.f()) return Ht(b);
    b = b.i();
    if (b.m()) {
      for (var c = new Wm(b.k(), a), d = c; b.m(); ) {
        var f = new Wm(b.k(), a);
        d = d.tc = f;
      }
      return c;
    }
    return a;
  }
  e.O = function (a) {
    for (var b = this; !b.f(); ) a.l(b.u()), (b = b.w());
  };
  e.n = function () {
    for (var a = this, b = 0; !a.f(); ) (b = (1 + b) | 0), (a = a.w());
    return b;
  };
  e.hb = function (a) {
    if (0 > a) a = 1;
    else
      a: for (var b = this, c = 0; ; ) {
        if (c === a) {
          a = b.f() ? 0 : 1;
          break a;
        }
        if (b.f()) {
          a = -1;
          break a;
        }
        c = (1 + c) | 0;
        b = b.w();
      }
    return a;
  };
  e.Qf = function (a) {
    for (var b = this; !b.f(); ) {
      if (a.l(b.u())) return !0;
      b = b.w();
    }
    return !1;
  };
  e.F = function (a) {
    for (var b = this; !b.f(); ) {
      if (L(M(), b.u(), a)) return !0;
      b = b.w();
    }
    return !1;
  };
  e.dd = function () {
    if (this.f()) throw Th(new Uh(), "List.last");
    for (var a = this, b = this.w(); !b.f(); ) (a = b), (b = b.w());
    return a.u();
  };
  e.Qc = function () {
    return "List";
  };
  e.y = function (a) {
    var b;
    if (a instanceof Ii)
      a: for (b = this; ; ) {
        if (b === a) {
          b = !0;
          break a;
        }
        var c = b.f(),
          d = a.f();
        if (c || d || !L(M(), b.u(), a.u())) {
          b = c && d;
          break a;
        }
        b = b.w();
        a = a.w();
      }
    else b = ns(this, a);
    return b;
  };
  e.l = function (a) {
    return en(this, a | 0);
  };
  e.Eb = function (a) {
    a: for (var b = this; ; ) {
      if (0 >= a || b.f()) break a;
      a = (-1 + a) | 0;
      b = b.w();
    }
    return b;
  };
  e.Pb = function (a) {
    a: for (var b = this; ; ) {
      if (b.f()) {
        a = I();
        break a;
      }
      var c = b.u(),
        d = b.w();
      if (!1 !== !!a.l(c)) {
        b: for (;;) {
          if (d.f()) {
            a = b;
            break b;
          }
          c = d.u();
          if (!1 !== !!a.l(c)) d = d.w();
          else {
            var f = b;
            c = d;
            b = new Wm(f.u(), I());
            f = f.w();
            for (d = b; f !== c; ) {
              var g = new Wm(f.u(), I());
              d = d.tc = g;
              f = f.w();
            }
            for (f = c = c.w(); !c.f(); ) {
              g = c.u();
              if (!1 === !!a.l(g)) {
                for (; f !== c; )
                  (g = new Wm(f.u(), I())), (d = d.tc = g), (f = f.w());
                f = c.w();
              }
              c = c.w();
            }
            f.f() || (d.tc = f);
            a = b;
            break b;
          }
        }
        break a;
      }
      b = d;
    }
    return a;
  };
  e.Wb = function (a) {
    for (var b = this, c = null, d = null; b !== I(); ) {
      for (var f = a.l(b.u()).i(); f.m(); ) {
        var g = new Wm(f.k(), I());
        null === d ? (c = g) : (d.tc = g);
        d = g;
      }
      b = b.w();
    }
    return null === c ? I() : c;
  };
  e.R = function (a) {
    if (this === I()) a = I();
    else {
      for (
        var b = new Wm(a.l(this.u()), I()), c = b, d = this.w();
        d !== I();

      ) {
        var f = new Wm(a.l(d.u()), I());
        c = c.tc = f;
        d = d.w();
      }
      a = b;
    }
    return a;
  };
  e.Bd = function (a) {
    return a instanceof Ii ? Gt(a, this) : Eq(this, a);
  };
  e.ha = function () {
    return zc();
  };
  function It() {
    this.d = null;
  }
  It.prototype = new zt();
  It.prototype.constructor = It;
  function Jt() {}
  Jt.prototype = It.prototype;
  function Tq(a) {
    this.Se = a;
  }
  Tq.prototype = new Dt();
  Tq.prototype.constructor = Tq;
  e = Tq.prototype;
  e.n = function () {
    return this.Se.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.Se,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          a = a.L(a.p(c, b.a[0] ? 1231 : 1237), 1);
          break a;
        default:
          var f = b.a[0] ? 1231 : 1237,
            g = (c = a.p(c, f)),
            h = b.a[1] ? 1231 : 1237;
          f = (h - f) | 0;
          for (var k = 2; k < d; ) {
            c = a.p(c, h);
            var l = b.a[k] ? 1231 : 1237;
            if (f !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (k = (1 + k) | 0; k < d; )
                (c = a.p(c, b.a[k] ? 1231 : 1237)), (k = (1 + k) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            k = (1 + k) | 0;
          }
          a = xg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Tq) {
      var b = this.Se;
      a = a.Se;
      return kd(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new hr(this.Se);
  };
  e.l = function (a) {
    return this.Se.a[a | 0];
  };
  e.t = function (a) {
    return this.Se.a[a];
  };
  e.Fd = function () {
    return hi();
  };
  e.pd = function () {
    return this.Se;
  };
  e.$classData = v(
    { Vq: 0 },
    !1,
    "scala.collection.mutable.ArraySeq$ofBoolean",
    {
      Vq: 1,
      ve: 1,
      Kc: 1,
      xa: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      la: 1,
      oa: 1,
      N: 1,
      P: 1,
      x: 1,
      Mc: 1,
      yc: 1,
      Nc: 1,
      xc: 1,
      Xb: 1,
      Yc: 1,
      $a: 1,
      ya: 1,
      Zc: 1,
      ab: 1,
      ma: 1,
      c: 1,
    }
  );
  function Rq(a) {
    this.Te = a;
  }
  Rq.prototype = new Dt();
  Rq.prototype.constructor = Rq;
  e = Rq.prototype;
  e.n = function () {
    return this.Te.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.Te,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          a = a.L(a.p(c, b.a[0]), 1);
          break a;
        default:
          var f = b.a[0],
            g = (c = a.p(c, f)),
            h = b.a[1];
          f = (h - f) | 0;
          for (var k = 2; k < d; ) {
            c = a.p(c, h);
            var l = b.a[k];
            if (f !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (k = (1 + k) | 0; k < d; )
                (c = a.p(c, b.a[k])), (k = (1 + k) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            k = (1 + k) | 0;
          }
          a = xg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Rq) {
      var b = this.Te;
      a = a.Te;
      return jd(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new ar(this.Te);
  };
  e.l = function (a) {
    return this.Te.a[a | 0];
  };
  e.t = function (a) {
    return this.Te.a[a];
  };
  e.Fd = function () {
    return bi();
  };
  e.pd = function () {
    return this.Te;
  };
  e.$classData = v({ Wq: 0 }, !1, "scala.collection.mutable.ArraySeq$ofByte", {
    Wq: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Qq(a) {
    this.jd = a;
  }
  Qq.prototype = new Dt();
  Qq.prototype.constructor = Qq;
  e = Qq.prototype;
  e.n = function () {
    return this.jd.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.jd,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          a = a.L(a.p(c, b.a[0]), 1);
          break a;
        default:
          var f = b.a[0],
            g = (c = a.p(c, f)),
            h = b.a[1];
          f = (h - f) | 0;
          for (var k = 2; k < d; ) {
            c = a.p(c, h);
            var l = b.a[k];
            if (f !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (k = (1 + k) | 0; k < d; )
                (c = a.p(c, b.a[k])), (k = (1 + k) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            k = (1 + k) | 0;
          }
          a = xg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Qq) {
      var b = this.jd;
      a = a.jd;
      return id(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new br(this.jd);
  };
  e.le = function (a, b, c, d) {
    var f = a.Tb;
    0 !== (b.length | 0) && (f.o = "" + f.o + b);
    b = this.jd.a.length;
    if (0 !== b)
      if ("" === c) El(f, this.jd);
      else {
        f.n();
        d.length | 0;
        c.length | 0;
        var g = String.fromCharCode(this.jd.a[0]);
        f.o = "" + f.o + g;
        for (g = 1; g < b; ) {
          f.o = "" + f.o + c;
          var h = String.fromCharCode(this.jd.a[g]);
          f.o = "" + f.o + h;
          g = (1 + g) | 0;
        }
      }
    0 !== (d.length | 0) && (f.o = "" + f.o + d);
    return a;
  };
  e.l = function (a) {
    return Pa(this.jd.a[a | 0]);
  };
  e.t = function (a) {
    return Pa(this.jd.a[a]);
  };
  e.Fd = function () {
    return di();
  };
  e.pd = function () {
    return this.jd;
  };
  e.$classData = v({ Xq: 0 }, !1, "scala.collection.mutable.ArraySeq$ofChar", {
    Xq: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Nq(a) {
    this.Ue = a;
  }
  Nq.prototype = new Dt();
  Nq.prototype.constructor = Nq;
  e = Nq.prototype;
  e.n = function () {
    return this.Ue.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.Ue,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          b = b.a[0];
          a = a.L(a.p(c, lg(X(), b)), 1);
          break a;
        default:
          var f = b.a[0],
            g = lg(X(), f);
          f = c = a.p(c, g);
          var h = b.a[1];
          h = lg(X(), h);
          var k = (h - g) | 0;
          for (g = 2; g < d; ) {
            c = a.p(c, h);
            var l = b.a[g];
            l = lg(X(), l);
            if (k !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (g = (1 + g) | 0; g < d; )
                (f = b.a[g]), (c = a.p(c, lg(X(), f))), (g = (1 + g) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            g = (1 + g) | 0;
          }
          a = xg(a.p(a.p(f, k), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Nq) {
      var b = this.Ue;
      a = a.Ue;
      return ld(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new cr(this.Ue);
  };
  e.l = function (a) {
    return this.Ue.a[a | 0];
  };
  e.t = function (a) {
    return this.Ue.a[a];
  };
  e.Fd = function () {
    return gi();
  };
  e.pd = function () {
    return this.Ue;
  };
  e.$classData = v(
    { Yq: 0 },
    !1,
    "scala.collection.mutable.ArraySeq$ofDouble",
    {
      Yq: 1,
      ve: 1,
      Kc: 1,
      xa: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      la: 1,
      oa: 1,
      N: 1,
      P: 1,
      x: 1,
      Mc: 1,
      yc: 1,
      Nc: 1,
      xc: 1,
      Xb: 1,
      Yc: 1,
      $a: 1,
      ya: 1,
      Zc: 1,
      ab: 1,
      ma: 1,
      c: 1,
    }
  );
  function Pq(a) {
    this.Ve = a;
  }
  Pq.prototype = new Dt();
  Pq.prototype.constructor = Pq;
  e = Pq.prototype;
  e.n = function () {
    return this.Ve.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.Ve,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          d = c;
          b = b.a[0];
          X();
          a = a.L(a.p(d, lg(0, b)), 1);
          break a;
        default:
          var f = b.a[0],
            g = lg(X(), f);
          f = c = a.p(c, g);
          var h = b.a[1];
          h = lg(X(), h);
          var k = (h - g) | 0;
          for (g = 2; g < d; ) {
            c = a.p(c, h);
            var l = b.a[g];
            l = lg(X(), l);
            if (k !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (g = (1 + g) | 0; g < d; )
                (f = b.a[g]), X(), (c = a.p(c, lg(0, f))), (g = (1 + g) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            g = (1 + g) | 0;
          }
          a = xg(a.p(a.p(f, k), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Pq) {
      var b = this.Ve;
      a = a.Ve;
      return md(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new dr(this.Ve);
  };
  e.l = function (a) {
    return this.Ve.a[a | 0];
  };
  e.t = function (a) {
    return this.Ve.a[a];
  };
  e.Fd = function () {
    return fi();
  };
  e.pd = function () {
    return this.Ve;
  };
  e.$classData = v({ Zq: 0 }, !1, "scala.collection.mutable.ArraySeq$ofFloat", {
    Zq: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Hh(a) {
    this.We = a;
  }
  Hh.prototype = new Dt();
  Hh.prototype.constructor = Hh;
  e = Hh.prototype;
  e.n = function () {
    return this.We.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.We,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          a = a.L(a.p(c, b.a[0]), 1);
          break a;
        default:
          var f = b.a[0],
            g = (c = a.p(c, f)),
            h = b.a[1];
          f = (h - f) | 0;
          for (var k = 2; k < d; ) {
            c = a.p(c, h);
            var l = b.a[k];
            if (f !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (k = (1 + k) | 0; k < d; )
                (c = a.p(c, b.a[k])), (k = (1 + k) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            k = (1 + k) | 0;
          }
          a = xg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Hh) {
      var b = this.We;
      a = a.We;
      return gd(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new Kn(this.We);
  };
  e.xg = function (a) {
    return this.We.a[a];
  };
  e.l = function (a) {
    return this.xg(a | 0);
  };
  e.t = function (a) {
    return this.xg(a);
  };
  e.Fd = function () {
    return Ee();
  };
  e.pd = function () {
    return this.We;
  };
  e.$classData = v({ $q: 0 }, !1, "scala.collection.mutable.ArraySeq$ofInt", {
    $q: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Oq(a) {
    this.Xe = a;
  }
  Oq.prototype = new Dt();
  Oq.prototype.constructor = Oq;
  e = Oq.prototype;
  e.n = function () {
    return this.Xe.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.Xe,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          d = b.a[0];
          b = d.Fa;
          d = d.Ea;
          a = a.L(a.p(c, kg(X(), new n(b, d))), 1);
          break a;
        default:
          var f = b.a[0],
            g = f.Fa;
          f = f.Ea;
          f = kg(X(), new n(g, f));
          g = c = a.p(c, f);
          var h = b.a[1],
            k = h.Fa;
          h = h.Ea;
          k = kg(X(), new n(k, h));
          h = (k - f) | 0;
          for (f = 2; f < d; ) {
            c = a.p(c, k);
            var l = b.a[f],
              p = l.Fa;
            l = l.Ea;
            p = kg(X(), new n(p, l));
            if (h !== ((p - k) | 0)) {
              c = a.p(c, p);
              for (f = (1 + f) | 0; f < d; )
                (k = b.a[f]),
                  (g = k.Fa),
                  (k = k.Ea),
                  (c = a.p(c, kg(X(), new n(g, k)))),
                  (f = (1 + f) | 0);
              a = a.L(c, d);
              break a;
            }
            k = p;
            f = (1 + f) | 0;
          }
          a = xg(a.p(a.p(g, h), k));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Oq) {
      var b = this.Xe;
      a = a.Xe;
      return fd(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new er(this.Xe);
  };
  e.l = function (a) {
    return this.Xe.a[a | 0];
  };
  e.t = function (a) {
    return this.Xe.a[a];
  };
  e.Fd = function () {
    return ei();
  };
  e.pd = function () {
    return this.Xe;
  };
  e.$classData = v({ ar: 0 }, !1, "scala.collection.mutable.ArraySeq$ofLong", {
    ar: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Lq(a) {
    this.Ye = a;
  }
  Lq.prototype = new Dt();
  Lq.prototype.constructor = Lq;
  e = Lq.prototype;
  e.Fd = function () {
    return od(pd(), Kc(ja(this.Ye)));
  };
  e.n = function () {
    return this.Ye.a.length;
  };
  e.t = function (a) {
    return this.Ye.a[a];
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.Ye,
        c = a.Ec,
        d = Nd(Od(), b);
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          d = c;
          b = eg(Od(), b, 0);
          a = a.L(a.p(d, mg(X(), b)), 1);
          break a;
        default:
          var f = eg(Od(), b, 0),
            g = mg(X(), f);
          f = c = a.p(c, g);
          var h = eg(Od(), b, 1);
          h = mg(X(), h);
          var k = (h - g) | 0;
          for (g = 2; g < d; ) {
            c = a.p(c, h);
            var l = eg(Od(), b, g);
            l = mg(X(), l);
            if (k !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (g = (1 + g) | 0; g < d; )
                (f = eg(Od(), b, g)),
                  (c = a.p(c, mg(X(), f))),
                  (g = (1 + g) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            g = (1 + g) | 0;
          }
          a = xg(a.p(a.p(f, k), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Lq)
      a: {
        Bh();
        var b = this.Ye;
        a = a.Ye;
        if (b === a) b = !0;
        else if (b.a.length !== a.a.length) b = !1;
        else {
          for (var c = b.a.length, d = 0; d < c; ) {
            if (!L(M(), b.a[d], a.a[d])) {
              b = !1;
              break a;
            }
            d = (1 + d) | 0;
          }
          b = !0;
        }
      }
    else b = Ct.prototype.y.call(this, a);
    return b;
  };
  e.i = function () {
    return zq(new Aq(), this.Ye);
  };
  e.l = function (a) {
    return this.t(a | 0);
  };
  e.pd = function () {
    return this.Ye;
  };
  e.$classData = v({ br: 0 }, !1, "scala.collection.mutable.ArraySeq$ofRef", {
    br: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Sq(a) {
    this.Ze = a;
  }
  Sq.prototype = new Dt();
  Sq.prototype.constructor = Sq;
  e = Sq.prototype;
  e.n = function () {
    return this.Ze.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = this.Ze,
        c = a.Ec,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          a = a.L(a.p(c, b.a[0]), 1);
          break a;
        default:
          var f = b.a[0],
            g = (c = a.p(c, f)),
            h = b.a[1];
          f = (h - f) | 0;
          for (var k = 2; k < d; ) {
            c = a.p(c, h);
            var l = b.a[k];
            if (f !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (k = (1 + k) | 0; k < d; )
                (c = a.p(c, b.a[k])), (k = (1 + k) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            k = (1 + k) | 0;
          }
          a = xg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Sq) {
      var b = this.Ze;
      a = a.Ze;
      return hd(O(), b, a);
    }
    return Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new fr(this.Ze);
  };
  e.l = function (a) {
    return this.Ze.a[a | 0];
  };
  e.t = function (a) {
    return this.Ze.a[a];
  };
  e.Fd = function () {
    return ci();
  };
  e.pd = function () {
    return this.Ze;
  };
  e.$classData = v({ cr: 0 }, !1, "scala.collection.mutable.ArraySeq$ofShort", {
    cr: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Uq(a) {
    this.mg = a;
  }
  Uq.prototype = new Dt();
  Uq.prototype.constructor = Uq;
  e = Uq.prototype;
  e.n = function () {
    return this.mg.a.length;
  };
  e.H = function () {
    var a = zg();
    a: {
      var b = a.Ec,
        c = this.mg.a.length;
      switch (c) {
        case 0:
          a = a.L(b, 0);
          break a;
        case 1:
          a = a.L(a.p(b, 0), 1);
          break a;
        default:
          for (var d = (b = a.p(b, 0)), f = 0, g = f, h = 2; h < c; ) {
            b = a.p(b, f);
            if (g !== (-f | 0)) {
              b = a.p(b, 0);
              for (h = (1 + h) | 0; h < c; ) (b = a.p(b, 0)), (h = (1 + h) | 0);
              a = a.L(b, c);
              break a;
            }
            f = 0;
            h = (1 + h) | 0;
          }
          a = xg(a.p(a.p(d, g), f));
      }
    }
    return a;
  };
  e.y = function (a) {
    return a instanceof Uq
      ? this.mg.a.length === a.mg.a.length
      : Ct.prototype.y.call(this, a);
  };
  e.i = function () {
    return new gr(this.mg);
  };
  e.l = function () {};
  e.t = function () {};
  e.Fd = function () {
    return ii();
  };
  e.pd = function () {
    return this.mg;
  };
  e.$classData = v({ dr: 0 }, !1, "scala.collection.mutable.ArraySeq$ofUnit", {
    dr: 1,
    ve: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    c: 1,
  });
  function Kt(a, b, c, d) {
    a.e = c;
    a.j = d;
    a.d = b;
  }
  function At() {
    this.e = this.d = null;
    this.j = 0;
  }
  At.prototype = new Jt();
  At.prototype.constructor = At;
  function Lt() {}
  Lt.prototype = At.prototype;
  function Bt(a, b) {
    for (var c = a.xd(), d = 1; d < c; ) {
      var f = R(),
        g = (c / 2) | 0,
        h = (d - g) | 0;
      bf(
        f,
        (-1 + ((((1 + g) | 0) - (0 > h ? -h | 0 : h)) | 0)) | 0,
        a.Ud(d),
        b
      );
      d = (1 + d) | 0;
    }
  }
  function Pe(a) {
    this.d = a;
  }
  Pe.prototype = new Jt();
  Pe.prototype.constructor = Pe;
  e = Pe.prototype;
  e.t = function (a) {
    if (0 <= a && a < this.d.a.length) return this.d.a[a];
    throw this.Gb(a);
  };
  e.Gf = function (a, b) {
    if (0 <= a && a < this.d.a.length) {
      var c = this.d.q();
      c.a[a] = b;
      return new Pe(c);
    }
    throw this.Gb(a);
  };
  e.hc = function (a) {
    if (32 > this.d.a.length) return new Pe($e(R(), this.d, a));
    var b = this.d,
      c = R().Q,
      d = new r(1);
    d.a[0] = a;
    return new Ue(b, 32, c, d, 33);
  };
  e.lf = function (a) {
    var b = this.d.a.length;
    if (32 > b) return new Pe(af(R(), a, this.d));
    var c = new r(1);
    c.a[0] = a;
    return new Ue(c, 1, R().Q, this.d, (1 + b) | 0);
  };
  e.Hd = function (a) {
    return new Pe(cf(R(), this.d, a));
  };
  e.wd = function (a, b) {
    var c = this.d;
    return new Pe(N(O(), c, a, b));
  };
  e.ld = function () {
    if (1 === this.d.a.length) return Oe();
    var a = this.d,
      b = a.a.length;
    return new Pe(N(O(), a, 1, b));
  };
  e.xd = function () {
    return 1;
  };
  e.Ud = function () {
    return this.d;
  };
  e.Pc = function (a, b) {
    var c = ef(R(), this.d, a);
    return null !== c ? new Pe(c) : op.prototype.Pc.call(this, a, b);
  };
  e.w = function () {
    return this.ld();
  };
  e.R = function (a) {
    return this.Hd(a);
  };
  e.nd = function (a) {
    return this.hc(a);
  };
  e.l = function (a) {
    a |= 0;
    if (0 <= a && a < this.d.a.length) return this.d.a[a];
    throw this.Gb(a);
  };
  e.$classData = v({ Aq: 0 }, !1, "scala.collection.immutable.Vector1", {
    Aq: 1,
    kg: 1,
    jg: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function Wm(a, b) {
    this.Nh = a;
    this.tc = b;
  }
  Wm.prototype = new Ft();
  Wm.prototype.constructor = Wm;
  e = Wm.prototype;
  e.u = function () {
    return this.Nh;
  };
  e.ib = function () {
    return "::";
  };
  e.rb = function () {
    return 2;
  };
  e.sb = function (a) {
    switch (a) {
      case 0:
        return this.Nh;
      case 1:
        return this.tc;
      default:
        return ng(X(), a);
    }
  };
  e.w = function () {
    return this.tc;
  };
  e.Dk = function () {
    return new Tm(this.Nh);
  };
  e.$classData = v({ vp: 0 }, !1, "scala.collection.immutable.$colon$colon", {
    vp: 1,
    Rp: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Ph: 1,
    Mg: 1,
    Ih: 1,
    Qh: 1,
    $o: 1,
    ab: 1,
    ma: 1,
    Rd: 1,
    id: 1,
    c: 1,
    Bb: 1,
  });
  function Pt() {
    this.sl = null;
    Qt = this;
    this.sl = kj(new lj(), I(), I());
  }
  Pt.prototype = new Ft();
  Pt.prototype.constructor = Pt;
  e = Pt.prototype;
  e.Gg = function () {
    throw Th(new Uh(), "head of empty list");
  };
  e.v = function () {
    return 0;
  };
  e.i = function () {
    return W().Y;
  };
  e.Ff = function () {
    return this.sl;
  };
  e.ib = function () {
    return "Nil";
  };
  e.rb = function () {
    return 0;
  };
  e.sb = function (a) {
    return ng(X(), a);
  };
  e.dd = function () {
    throw Th(new Uh(), "last of empty list");
  };
  e.w = function () {
    throw Ld("tail of empty list");
  };
  e.Dk = function () {
    return Ob();
  };
  e.u = function () {
    this.Gg();
  };
  e.$classData = v({ Wp: 0 }, !1, "scala.collection.immutable.Nil$", {
    Wp: 1,
    Rp: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Ph: 1,
    Mg: 1,
    Ih: 1,
    Qh: 1,
    $o: 1,
    ab: 1,
    ma: 1,
    Rd: 1,
    id: 1,
    c: 1,
    Bb: 1,
  });
  var Qt;
  function I() {
    Qt || (Qt = new Pt());
    return Qt;
  }
  function Rt() {
    this.e = this.d = null;
    this.j = 0;
    Kt(this, R().Hj, R().Hj, 0);
  }
  Rt.prototype = new Lt();
  Rt.prototype.constructor = Rt;
  e = Rt.prototype;
  e.Gf = function (a) {
    throw this.Gb(a);
  };
  e.hc = function (a) {
    var b = new r(1);
    b.a[0] = a;
    return new Pe(b);
  };
  e.lf = function (a) {
    var b = new r(1);
    b.a[0] = a;
    return new Pe(b);
  };
  e.ld = function () {
    throw Ld("empty.tail");
  };
  e.wd = function () {
    return this;
  };
  e.xd = function () {
    return 0;
  };
  e.Ud = function () {
    return null;
  };
  e.y = function (a) {
    return this === a || (!(a instanceof op) && ns(this, a));
  };
  e.Pc = function (a) {
    return Ak(Cf(), a);
  };
  e.Gb = function (a) {
    return og(new pg(), a + " is out of bounds (empty vector)");
  };
  e.w = function () {
    return this.ld();
  };
  e.R = function () {
    return this;
  };
  e.nd = function (a) {
    return this.hc(a);
  };
  e.l = function (a) {
    throw this.Gb(a | 0);
  };
  e.t = function (a) {
    throw this.Gb(a);
  };
  e.$classData = v({ zq: 0 }, !1, "scala.collection.immutable.Vector0$", {
    zq: 1,
    Qg: 1,
    kg: 1,
    jg: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  var St;
  function Oe() {
    St || (St = new Rt());
    return St;
  }
  function Ue(a, b, c, d, f) {
    this.e = this.d = null;
    this.j = 0;
    this.ac = b;
    this.Kb = c;
    Kt(this, a, d, f);
  }
  Ue.prototype = new Lt();
  Ue.prototype.constructor = Ue;
  e = Ue.prototype;
  e.t = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.ac) | 0;
      return 0 <= b
        ? ((a = (b >>> 5) | 0),
          a < this.Kb.a.length ? this.Kb.a[a].a[31 & b] : this.e.a[31 & b])
        : this.d.a[a];
    }
    throw this.Gb(a);
  };
  e.Gf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.ac) {
        var c = (a - this.ac) | 0;
        a = (c >>> 5) | 0;
        c &= 31;
        if (a < this.Kb.a.length) {
          var d = this.Kb.q(),
            f = d.a[a].q();
          f.a[c] = b;
          d.a[a] = f;
          return new Ue(this.d, this.ac, d, this.e, this.j);
        }
        a = this.e.q();
        a.a[c] = b;
        return new Ue(this.d, this.ac, this.Kb, a, this.j);
      }
      c = this.d.q();
      c.a[a] = b;
      return new Ue(c, this.ac, this.Kb, this.e, this.j);
    }
    throw this.Gb(a);
  };
  e.hc = function (a) {
    if (32 > this.e.a.length)
      return (
        (a = $e(R(), this.e, a)),
        new Ue(this.d, this.ac, this.Kb, a, (1 + this.j) | 0)
      );
    if (30 > this.Kb.a.length) {
      var b = U(R(), this.Kb, this.e),
        c = new r(1);
      c.a[0] = a;
      return new Ue(this.d, this.ac, b, c, (1 + this.j) | 0);
    }
    b = this.d;
    c = this.ac;
    var d = this.Kb,
      f = this.ac,
      g = R().fb,
      h = this.e,
      k = new (x(x(w)).G)(1);
    k.a[0] = h;
    h = new r(1);
    h.a[0] = a;
    return new Ve(b, c, d, (960 + f) | 0, g, k, h, (1 + this.j) | 0);
  };
  e.lf = function (a) {
    if (32 > this.ac) {
      var b = af(R(), a, this.d);
      return new Ue(b, (1 + this.ac) | 0, this.Kb, this.e, (1 + this.j) | 0);
    }
    if (30 > this.Kb.a.length)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.Kb)),
        new Ue(b, 1, a, this.e, (1 + this.j) | 0)
      );
    b = new r(1);
    b.a[0] = a;
    a = this.d;
    var c = new (x(x(w)).G)(1);
    c.a[0] = a;
    return new Ve(
      b,
      1,
      c,
      (1 + this.ac) | 0,
      R().fb,
      this.Kb,
      this.e,
      (1 + this.j) | 0
    );
  };
  e.Hd = function (a) {
    var b = cf(R(), this.d, a),
      c = df(R(), 2, this.Kb, a);
    a = cf(R(), this.e, a);
    return new Ue(b, this.ac, c, a, this.j);
  };
  e.wd = function (a, b) {
    a = new Ne(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.Kb);
    Q(a, 1, this.e);
    return a.Id();
  };
  e.ld = function () {
    if (1 < this.ac) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new Ue(a, (-1 + this.ac) | 0, this.Kb, this.e, (-1 + this.j) | 0);
    }
    return this.wd(1, this.j);
  };
  e.xd = function () {
    return 3;
  };
  e.Ud = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.Kb;
      case 2:
        return this.e;
      default:
        throw new T(a);
    }
  };
  e.Pc = function (a, b) {
    var c = ef(R(), this.e, a);
    return null !== c
      ? new Ue(
          this.d,
          this.ac,
          this.Kb,
          c,
          (((this.j - this.e.a.length) | 0) + c.a.length) | 0
        )
      : op.prototype.Pc.call(this, a, b);
  };
  e.w = function () {
    return this.ld();
  };
  e.R = function (a) {
    return this.Hd(a);
  };
  e.nd = function (a) {
    return this.hc(a);
  };
  e.l = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j)
      return (
        (a = (b - this.ac) | 0),
        0 <= a
          ? ((b = (a >>> 5) | 0),
            b < this.Kb.a.length ? this.Kb.a[b].a[31 & a] : this.e.a[31 & a])
          : this.d.a[b]
      );
    throw this.Gb(b);
  };
  e.$classData = v({ Bq: 0 }, !1, "scala.collection.immutable.Vector2", {
    Bq: 1,
    Qg: 1,
    kg: 1,
    jg: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function Ve(a, b, c, d, f, g, h, k) {
    this.e = this.d = null;
    this.j = 0;
    this.Rb = b;
    this.Sb = c;
    this.Lb = d;
    this.db = f;
    this.kb = g;
    Kt(this, a, h, k);
  }
  Ve.prototype = new Lt();
  Ve.prototype.constructor = Ve;
  e = Ve.prototype;
  e.t = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.Lb) | 0;
      if (0 <= b) {
        a = (b >>> 10) | 0;
        var c = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.db.a.length
          ? this.db.a[a].a[c].a[b]
          : c < this.kb.a.length
          ? this.kb.a[c].a[b]
          : this.e.a[b];
      }
      return a >= this.Rb
        ? ((b = (a - this.Rb) | 0), this.Sb.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Gb(a);
  };
  e.Gf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.Lb) {
        var c = (a - this.Lb) | 0,
          d = (c >>> 10) | 0;
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.db.a.length) {
          var f = this.db.q(),
            g = f.a[d].q(),
            h = g.a[a].q();
          h.a[c] = b;
          g.a[a] = h;
          f.a[d] = g;
          return new Ve(
            this.d,
            this.Rb,
            this.Sb,
            this.Lb,
            f,
            this.kb,
            this.e,
            this.j
          );
        }
        if (a < this.kb.a.length)
          return (
            (d = this.kb.q()),
            (f = d.a[a].q()),
            (f.a[c] = b),
            (d.a[a] = f),
            new Ve(
              this.d,
              this.Rb,
              this.Sb,
              this.Lb,
              this.db,
              d,
              this.e,
              this.j
            )
          );
        a = this.e.q();
        a.a[c] = b;
        return new Ve(
          this.d,
          this.Rb,
          this.Sb,
          this.Lb,
          this.db,
          this.kb,
          a,
          this.j
        );
      }
      if (a >= this.Rb)
        return (
          (c = (a - this.Rb) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (d = this.Sb.q()),
          (f = d.a[a].q()),
          (f.a[c] = b),
          (d.a[a] = f),
          new Ve(this.d, this.Rb, d, this.Lb, this.db, this.kb, this.e, this.j)
        );
      c = this.d.q();
      c.a[a] = b;
      return new Ve(
        c,
        this.Rb,
        this.Sb,
        this.Lb,
        this.db,
        this.kb,
        this.e,
        this.j
      );
    }
    throw this.Gb(a);
  };
  e.hc = function (a) {
    if (32 > this.e.a.length)
      return (
        (a = $e(R(), this.e, a)),
        new Ve(
          this.d,
          this.Rb,
          this.Sb,
          this.Lb,
          this.db,
          this.kb,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.kb.a.length) {
      var b = U(R(), this.kb, this.e),
        c = new r(1);
      c.a[0] = a;
      return new Ve(
        this.d,
        this.Rb,
        this.Sb,
        this.Lb,
        this.db,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (30 > this.db.a.length) {
      b = U(R(), this.db, U(R(), this.kb, this.e));
      c = R().Q;
      var d = new r(1);
      d.a[0] = a;
      return new Ve(
        this.d,
        this.Rb,
        this.Sb,
        this.Lb,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    b = this.d;
    c = this.Rb;
    d = this.Sb;
    var f = this.Lb,
      g = this.db,
      h = this.Lb,
      k = R().wc,
      l = U(R(), this.kb, this.e),
      p = new (x(x(x(w))).G)(1);
    p.a[0] = l;
    l = R().Q;
    var u = new r(1);
    u.a[0] = a;
    return new We(b, c, d, f, g, (30720 + h) | 0, k, p, l, u, (1 + this.j) | 0);
  };
  e.lf = function (a) {
    if (32 > this.Rb) {
      var b = af(R(), a, this.d);
      return new Ve(
        b,
        (1 + this.Rb) | 0,
        this.Sb,
        (1 + this.Lb) | 0,
        this.db,
        this.kb,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.Lb)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.Sb)),
        new Ve(
          b,
          1,
          a,
          (1 + this.Lb) | 0,
          this.db,
          this.kb,
          this.e,
          (1 + this.j) | 0
        )
      );
    if (30 > this.db.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      var c = V(R(), V(R(), this.d, this.Sb), this.db);
      return new Ve(b, 1, a, 1, c, this.kb, this.e, (1 + this.j) | 0);
    }
    b = new r(1);
    b.a[0] = a;
    a = R().Q;
    c = V(R(), this.d, this.Sb);
    var d = new (x(x(x(w))).G)(1);
    d.a[0] = c;
    return new We(
      b,
      1,
      a,
      1,
      d,
      (1 + this.Lb) | 0,
      R().wc,
      this.db,
      this.kb,
      this.e,
      (1 + this.j) | 0
    );
  };
  e.Hd = function (a) {
    var b = cf(R(), this.d, a),
      c = df(R(), 2, this.Sb, a),
      d = df(R(), 3, this.db, a),
      f = df(R(), 2, this.kb, a);
    a = cf(R(), this.e, a);
    return new Ve(b, this.Rb, c, this.Lb, d, f, a, this.j);
  };
  e.wd = function (a, b) {
    a = new Ne(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.Sb);
    Q(a, 3, this.db);
    Q(a, 2, this.kb);
    Q(a, 1, this.e);
    return a.Id();
  };
  e.ld = function () {
    if (1 < this.Rb) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new Ve(
        a,
        (-1 + this.Rb) | 0,
        this.Sb,
        (-1 + this.Lb) | 0,
        this.db,
        this.kb,
        this.e,
        (-1 + this.j) | 0
      );
    }
    return this.wd(1, this.j);
  };
  e.xd = function () {
    return 5;
  };
  e.Ud = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.Sb;
      case 2:
        return this.db;
      case 3:
        return this.kb;
      case 4:
        return this.e;
      default:
        throw new T(a);
    }
  };
  e.Pc = function (a, b) {
    var c = ef(R(), this.e, a);
    return null !== c
      ? new Ve(
          this.d,
          this.Rb,
          this.Sb,
          this.Lb,
          this.db,
          this.kb,
          c,
          (((this.j - this.e.a.length) | 0) + c.a.length) | 0
        )
      : op.prototype.Pc.call(this, a, b);
  };
  e.w = function () {
    return this.ld();
  };
  e.R = function (a) {
    return this.Hd(a);
  };
  e.nd = function (a) {
    return this.hc(a);
  };
  e.l = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.Lb) | 0;
      if (0 <= a) {
        b = (a >>> 10) | 0;
        var c = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.db.a.length
          ? this.db.a[b].a[c].a[a]
          : c < this.kb.a.length
          ? this.kb.a[c].a[a]
          : this.e.a[a];
      }
      return b >= this.Rb
        ? ((a = (b - this.Rb) | 0), this.Sb.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Gb(b);
  };
  e.$classData = v({ Cq: 0 }, !1, "scala.collection.immutable.Vector3", {
    Cq: 1,
    Qg: 1,
    kg: 1,
    jg: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function We(a, b, c, d, f, g, h, k, l, p, u) {
    this.e = this.d = null;
    this.j = 0;
    this.tb = b;
    this.lb = c;
    this.ub = d;
    this.mb = f;
    this.eb = g;
    this.Aa = h;
    this.Ha = k;
    this.Ga = l;
    Kt(this, a, p, u);
  }
  We.prototype = new Lt();
  We.prototype.constructor = We;
  e = We.prototype;
  e.t = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.eb) | 0;
      if (0 <= b) {
        a = (b >>> 15) | 0;
        var c = 31 & ((b >>> 10) | 0),
          d = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.Aa.a.length
          ? this.Aa.a[a].a[c].a[d].a[b]
          : c < this.Ha.a.length
          ? this.Ha.a[c].a[d].a[b]
          : d < this.Ga.a.length
          ? this.Ga.a[d].a[b]
          : this.e.a[b];
      }
      return a >= this.ub
        ? ((b = (a - this.ub) | 0),
          this.mb.a[(b >>> 10) | 0].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.tb
        ? ((b = (a - this.tb) | 0), this.lb.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Gb(a);
  };
  e.Gf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.eb) {
        var c = (a - this.eb) | 0,
          d = (c >>> 15) | 0,
          f = 31 & ((c >>> 10) | 0);
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.Aa.a.length) {
          var g = this.Aa.q(),
            h = g.a[d].q(),
            k = h.a[f].q(),
            l = k.a[a].q();
          l.a[c] = b;
          k.a[a] = l;
          h.a[f] = k;
          g.a[d] = h;
          return new We(
            this.d,
            this.tb,
            this.lb,
            this.ub,
            this.mb,
            this.eb,
            g,
            this.Ha,
            this.Ga,
            this.e,
            this.j
          );
        }
        if (f < this.Ha.a.length)
          return (
            (d = this.Ha.q()),
            (g = d.a[f].q()),
            (h = g.a[a].q()),
            (h.a[c] = b),
            (g.a[a] = h),
            (d.a[f] = g),
            new We(
              this.d,
              this.tb,
              this.lb,
              this.ub,
              this.mb,
              this.eb,
              this.Aa,
              d,
              this.Ga,
              this.e,
              this.j
            )
          );
        if (a < this.Ga.a.length)
          return (
            (f = this.Ga.q()),
            (d = f.a[a].q()),
            (d.a[c] = b),
            (f.a[a] = d),
            new We(
              this.d,
              this.tb,
              this.lb,
              this.ub,
              this.mb,
              this.eb,
              this.Aa,
              this.Ha,
              f,
              this.e,
              this.j
            )
          );
        a = this.e.q();
        a.a[c] = b;
        return new We(
          this.d,
          this.tb,
          this.lb,
          this.ub,
          this.mb,
          this.eb,
          this.Aa,
          this.Ha,
          this.Ga,
          a,
          this.j
        );
      }
      if (a >= this.ub)
        return (
          (f = (a - this.ub) | 0),
          (a = (f >>> 10) | 0),
          (c = 31 & ((f >>> 5) | 0)),
          (f &= 31),
          (d = this.mb.q()),
          (g = d.a[a].q()),
          (h = g.a[c].q()),
          (h.a[f] = b),
          (g.a[c] = h),
          (d.a[a] = g),
          new We(
            this.d,
            this.tb,
            this.lb,
            this.ub,
            d,
            this.eb,
            this.Aa,
            this.Ha,
            this.Ga,
            this.e,
            this.j
          )
        );
      if (a >= this.tb)
        return (
          (c = (a - this.tb) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (f = this.lb.q()),
          (d = f.a[a].q()),
          (d.a[c] = b),
          (f.a[a] = d),
          new We(
            this.d,
            this.tb,
            f,
            this.ub,
            this.mb,
            this.eb,
            this.Aa,
            this.Ha,
            this.Ga,
            this.e,
            this.j
          )
        );
      c = this.d.q();
      c.a[a] = b;
      return new We(
        c,
        this.tb,
        this.lb,
        this.ub,
        this.mb,
        this.eb,
        this.Aa,
        this.Ha,
        this.Ga,
        this.e,
        this.j
      );
    }
    throw this.Gb(a);
  };
  e.hc = function (a) {
    if (32 > this.e.a.length)
      return (
        (a = $e(R(), this.e, a)),
        new We(
          this.d,
          this.tb,
          this.lb,
          this.ub,
          this.mb,
          this.eb,
          this.Aa,
          this.Ha,
          this.Ga,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.Ga.a.length) {
      var b = U(R(), this.Ga, this.e),
        c = new r(1);
      c.a[0] = a;
      return new We(
        this.d,
        this.tb,
        this.lb,
        this.ub,
        this.mb,
        this.eb,
        this.Aa,
        this.Ha,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (31 > this.Ha.a.length) {
      b = U(R(), this.Ha, U(R(), this.Ga, this.e));
      c = R().Q;
      var d = new r(1);
      d.a[0] = a;
      return new We(
        this.d,
        this.tb,
        this.lb,
        this.ub,
        this.mb,
        this.eb,
        this.Aa,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    if (30 > this.Aa.a.length) {
      b = U(R(), this.Aa, U(R(), this.Ha, U(R(), this.Ga, this.e)));
      c = R().fb;
      d = R().Q;
      var f = new r(1);
      f.a[0] = a;
      return new We(
        this.d,
        this.tb,
        this.lb,
        this.ub,
        this.mb,
        this.eb,
        b,
        c,
        d,
        f,
        (1 + this.j) | 0
      );
    }
    b = this.d;
    c = this.tb;
    d = this.lb;
    f = this.ub;
    var g = this.mb,
      h = this.eb,
      k = this.Aa,
      l = this.eb,
      p = R().Re,
      u = U(R(), this.Ha, U(R(), this.Ga, this.e)),
      y = new (x(x(x(x(w)))).G)(1);
    y.a[0] = u;
    u = R().fb;
    var D = R().Q,
      K = new r(1);
    K.a[0] = a;
    return new Xe(
      b,
      c,
      d,
      f,
      g,
      h,
      k,
      (983040 + l) | 0,
      p,
      y,
      u,
      D,
      K,
      (1 + this.j) | 0
    );
  };
  e.lf = function (a) {
    if (32 > this.tb) {
      var b = af(R(), a, this.d);
      return new We(
        b,
        (1 + this.tb) | 0,
        this.lb,
        (1 + this.ub) | 0,
        this.mb,
        (1 + this.eb) | 0,
        this.Aa,
        this.Ha,
        this.Ga,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.ub)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.lb)),
        new We(
          b,
          1,
          a,
          (1 + this.ub) | 0,
          this.mb,
          (1 + this.eb) | 0,
          this.Aa,
          this.Ha,
          this.Ga,
          this.e,
          (1 + this.j) | 0
        )
      );
    if (32768 > this.eb) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      var c = V(R(), V(R(), this.d, this.lb), this.mb);
      return new We(
        b,
        1,
        a,
        1,
        c,
        (1 + this.eb) | 0,
        this.Aa,
        this.Ha,
        this.Ga,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (30 > this.Aa.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      c = R().fb;
      var d = V(R(), V(R(), V(R(), this.d, this.lb), this.mb), this.Aa);
      return new We(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        this.Ha,
        this.Ga,
        this.e,
        (1 + this.j) | 0
      );
    }
    b = new r(1);
    b.a[0] = a;
    a = R().Q;
    c = R().fb;
    d = V(R(), V(R(), this.d, this.lb), this.mb);
    var f = new (x(x(x(x(w)))).G)(1);
    f.a[0] = d;
    return new Xe(
      b,
      1,
      a,
      1,
      c,
      1,
      f,
      (1 + this.eb) | 0,
      R().Re,
      this.Aa,
      this.Ha,
      this.Ga,
      this.e,
      (1 + this.j) | 0
    );
  };
  e.Hd = function (a) {
    var b = cf(R(), this.d, a),
      c = df(R(), 2, this.lb, a),
      d = df(R(), 3, this.mb, a),
      f = df(R(), 4, this.Aa, a),
      g = df(R(), 3, this.Ha, a),
      h = df(R(), 2, this.Ga, a);
    a = cf(R(), this.e, a);
    return new We(b, this.tb, c, this.ub, d, this.eb, f, g, h, a, this.j);
  };
  e.wd = function (a, b) {
    a = new Ne(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.lb);
    Q(a, 3, this.mb);
    Q(a, 4, this.Aa);
    Q(a, 3, this.Ha);
    Q(a, 2, this.Ga);
    Q(a, 1, this.e);
    return a.Id();
  };
  e.ld = function () {
    if (1 < this.tb) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new We(
        a,
        (-1 + this.tb) | 0,
        this.lb,
        (-1 + this.ub) | 0,
        this.mb,
        (-1 + this.eb) | 0,
        this.Aa,
        this.Ha,
        this.Ga,
        this.e,
        (-1 + this.j) | 0
      );
    }
    return this.wd(1, this.j);
  };
  e.xd = function () {
    return 7;
  };
  e.Ud = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.lb;
      case 2:
        return this.mb;
      case 3:
        return this.Aa;
      case 4:
        return this.Ha;
      case 5:
        return this.Ga;
      case 6:
        return this.e;
      default:
        throw new T(a);
    }
  };
  e.Pc = function (a, b) {
    var c = ef(R(), this.e, a);
    return null !== c
      ? new We(
          this.d,
          this.tb,
          this.lb,
          this.ub,
          this.mb,
          this.eb,
          this.Aa,
          this.Ha,
          this.Ga,
          c,
          (((this.j - this.e.a.length) | 0) + c.a.length) | 0
        )
      : op.prototype.Pc.call(this, a, b);
  };
  e.w = function () {
    return this.ld();
  };
  e.R = function (a) {
    return this.Hd(a);
  };
  e.nd = function (a) {
    return this.hc(a);
  };
  e.l = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.eb) | 0;
      if (0 <= a) {
        b = (a >>> 15) | 0;
        var c = 31 & ((a >>> 10) | 0),
          d = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.Aa.a.length
          ? this.Aa.a[b].a[c].a[d].a[a]
          : c < this.Ha.a.length
          ? this.Ha.a[c].a[d].a[a]
          : d < this.Ga.a.length
          ? this.Ga.a[d].a[a]
          : this.e.a[a];
      }
      return b >= this.ub
        ? ((a = (b - this.ub) | 0),
          this.mb.a[(a >>> 10) | 0].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.tb
        ? ((a = (b - this.tb) | 0), this.lb.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Gb(b);
  };
  e.$classData = v({ Dq: 0 }, !1, "scala.collection.immutable.Vector4", {
    Dq: 1,
    Qg: 1,
    kg: 1,
    jg: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function Xe(a, b, c, d, f, g, h, k, l, p, u, y, D, K) {
    this.e = this.d = null;
    this.j = 0;
    this.Va = b;
    this.Ia = c;
    this.Wa = d;
    this.Ja = f;
    this.Ra = g;
    this.Ka = h;
    this.Ba = k;
    this.da = l;
    this.ka = p;
    this.ja = u;
    this.ia = y;
    Kt(this, a, D, K);
  }
  Xe.prototype = new Lt();
  Xe.prototype.constructor = Xe;
  e = Xe.prototype;
  e.t = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.Ba) | 0;
      if (0 <= b) {
        a = (b >>> 20) | 0;
        var c = 31 & ((b >>> 15) | 0),
          d = 31 & ((b >>> 10) | 0),
          f = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.da.a.length
          ? this.da.a[a].a[c].a[d].a[f].a[b]
          : c < this.ka.a.length
          ? this.ka.a[c].a[d].a[f].a[b]
          : d < this.ja.a.length
          ? this.ja.a[d].a[f].a[b]
          : f < this.ia.a.length
          ? this.ia.a[f].a[b]
          : this.e.a[b];
      }
      return a >= this.Ra
        ? ((b = (a - this.Ra) | 0),
          this.Ka.a[(b >>> 15) | 0].a[31 & ((b >>> 10) | 0)].a[
            31 & ((b >>> 5) | 0)
          ].a[31 & b])
        : a >= this.Wa
        ? ((b = (a - this.Wa) | 0),
          this.Ja.a[(b >>> 10) | 0].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.Va
        ? ((b = (a - this.Va) | 0), this.Ia.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Gb(a);
  };
  e.Gf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.Ba) {
        var c = (a - this.Ba) | 0,
          d = (c >>> 20) | 0,
          f = 31 & ((c >>> 15) | 0),
          g = 31 & ((c >>> 10) | 0);
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.da.a.length) {
          var h = this.da.q(),
            k = h.a[d].q(),
            l = k.a[f].q(),
            p = l.a[g].q(),
            u = p.a[a].q();
          u.a[c] = b;
          p.a[a] = u;
          l.a[g] = p;
          k.a[f] = l;
          h.a[d] = k;
          return new Xe(
            this.d,
            this.Va,
            this.Ia,
            this.Wa,
            this.Ja,
            this.Ra,
            this.Ka,
            this.Ba,
            h,
            this.ka,
            this.ja,
            this.ia,
            this.e,
            this.j
          );
        }
        if (f < this.ka.a.length)
          return (
            (d = this.ka.q()),
            (h = d.a[f].q()),
            (k = h.a[g].q()),
            (l = k.a[a].q()),
            (l.a[c] = b),
            (k.a[a] = l),
            (h.a[g] = k),
            (d.a[f] = h),
            new Xe(
              this.d,
              this.Va,
              this.Ia,
              this.Wa,
              this.Ja,
              this.Ra,
              this.Ka,
              this.Ba,
              this.da,
              d,
              this.ja,
              this.ia,
              this.e,
              this.j
            )
          );
        if (g < this.ja.a.length)
          return (
            (f = this.ja.q()),
            (d = f.a[g].q()),
            (h = d.a[a].q()),
            (h.a[c] = b),
            (d.a[a] = h),
            (f.a[g] = d),
            new Xe(
              this.d,
              this.Va,
              this.Ia,
              this.Wa,
              this.Ja,
              this.Ra,
              this.Ka,
              this.Ba,
              this.da,
              this.ka,
              f,
              this.ia,
              this.e,
              this.j
            )
          );
        if (a < this.ia.a.length)
          return (
            (g = this.ia.q()),
            (f = g.a[a].q()),
            (f.a[c] = b),
            (g.a[a] = f),
            new Xe(
              this.d,
              this.Va,
              this.Ia,
              this.Wa,
              this.Ja,
              this.Ra,
              this.Ka,
              this.Ba,
              this.da,
              this.ka,
              this.ja,
              g,
              this.e,
              this.j
            )
          );
        a = this.e.q();
        a.a[c] = b;
        return new Xe(
          this.d,
          this.Va,
          this.Ia,
          this.Wa,
          this.Ja,
          this.Ra,
          this.Ka,
          this.Ba,
          this.da,
          this.ka,
          this.ja,
          this.ia,
          a,
          this.j
        );
      }
      if (a >= this.Ra)
        return (
          (f = (a - this.Ra) | 0),
          (a = (f >>> 15) | 0),
          (c = 31 & ((f >>> 10) | 0)),
          (g = 31 & ((f >>> 5) | 0)),
          (f &= 31),
          (d = this.Ka.q()),
          (h = d.a[a].q()),
          (k = h.a[c].q()),
          (l = k.a[g].q()),
          (l.a[f] = b),
          (k.a[g] = l),
          (h.a[c] = k),
          (d.a[a] = h),
          new Xe(
            this.d,
            this.Va,
            this.Ia,
            this.Wa,
            this.Ja,
            this.Ra,
            d,
            this.Ba,
            this.da,
            this.ka,
            this.ja,
            this.ia,
            this.e,
            this.j
          )
        );
      if (a >= this.Wa)
        return (
          (g = (a - this.Wa) | 0),
          (a = (g >>> 10) | 0),
          (c = 31 & ((g >>> 5) | 0)),
          (g &= 31),
          (f = this.Ja.q()),
          (d = f.a[a].q()),
          (h = d.a[c].q()),
          (h.a[g] = b),
          (d.a[c] = h),
          (f.a[a] = d),
          new Xe(
            this.d,
            this.Va,
            this.Ia,
            this.Wa,
            f,
            this.Ra,
            this.Ka,
            this.Ba,
            this.da,
            this.ka,
            this.ja,
            this.ia,
            this.e,
            this.j
          )
        );
      if (a >= this.Va)
        return (
          (c = (a - this.Va) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (g = this.Ia.q()),
          (f = g.a[a].q()),
          (f.a[c] = b),
          (g.a[a] = f),
          new Xe(
            this.d,
            this.Va,
            g,
            this.Wa,
            this.Ja,
            this.Ra,
            this.Ka,
            this.Ba,
            this.da,
            this.ka,
            this.ja,
            this.ia,
            this.e,
            this.j
          )
        );
      c = this.d.q();
      c.a[a] = b;
      return new Xe(
        c,
        this.Va,
        this.Ia,
        this.Wa,
        this.Ja,
        this.Ra,
        this.Ka,
        this.Ba,
        this.da,
        this.ka,
        this.ja,
        this.ia,
        this.e,
        this.j
      );
    }
    throw this.Gb(a);
  };
  e.hc = function (a) {
    if (32 > this.e.a.length)
      return (
        (a = $e(R(), this.e, a)),
        new Xe(
          this.d,
          this.Va,
          this.Ia,
          this.Wa,
          this.Ja,
          this.Ra,
          this.Ka,
          this.Ba,
          this.da,
          this.ka,
          this.ja,
          this.ia,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.ia.a.length) {
      var b = U(R(), this.ia, this.e),
        c = new r(1);
      c.a[0] = a;
      return new Xe(
        this.d,
        this.Va,
        this.Ia,
        this.Wa,
        this.Ja,
        this.Ra,
        this.Ka,
        this.Ba,
        this.da,
        this.ka,
        this.ja,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (31 > this.ja.a.length) {
      b = U(R(), this.ja, U(R(), this.ia, this.e));
      c = R().Q;
      var d = new r(1);
      d.a[0] = a;
      return new Xe(
        this.d,
        this.Va,
        this.Ia,
        this.Wa,
        this.Ja,
        this.Ra,
        this.Ka,
        this.Ba,
        this.da,
        this.ka,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    if (31 > this.ka.a.length) {
      b = U(R(), this.ka, U(R(), this.ja, U(R(), this.ia, this.e)));
      c = R().fb;
      d = R().Q;
      var f = new r(1);
      f.a[0] = a;
      return new Xe(
        this.d,
        this.Va,
        this.Ia,
        this.Wa,
        this.Ja,
        this.Ra,
        this.Ka,
        this.Ba,
        this.da,
        b,
        c,
        d,
        f,
        (1 + this.j) | 0
      );
    }
    if (30 > this.da.a.length) {
      b = U(
        R(),
        this.da,
        U(R(), this.ka, U(R(), this.ja, U(R(), this.ia, this.e)))
      );
      c = R().wc;
      d = R().fb;
      f = R().Q;
      var g = new r(1);
      g.a[0] = a;
      return new Xe(
        this.d,
        this.Va,
        this.Ia,
        this.Wa,
        this.Ja,
        this.Ra,
        this.Ka,
        this.Ba,
        b,
        c,
        d,
        f,
        g,
        (1 + this.j) | 0
      );
    }
    b = this.d;
    c = this.Va;
    d = this.Ia;
    f = this.Wa;
    g = this.Ja;
    var h = this.Ra,
      k = this.Ka,
      l = this.Ba,
      p = this.da,
      u = this.Ba,
      y = R().Sh,
      D = U(R(), this.ka, U(R(), this.ja, U(R(), this.ia, this.e))),
      K = new (x(x(x(x(x(w))))).G)(1);
    K.a[0] = D;
    D = R().wc;
    var J = R().fb,
      Z = R().Q,
      wa = new r(1);
    wa.a[0] = a;
    return new S(
      b,
      c,
      d,
      f,
      g,
      h,
      k,
      l,
      p,
      (31457280 + u) | 0,
      y,
      K,
      D,
      J,
      Z,
      wa,
      (1 + this.j) | 0
    );
  };
  e.lf = function (a) {
    if (32 > this.Va) {
      var b = af(R(), a, this.d);
      return new Xe(
        b,
        (1 + this.Va) | 0,
        this.Ia,
        (1 + this.Wa) | 0,
        this.Ja,
        (1 + this.Ra) | 0,
        this.Ka,
        (1 + this.Ba) | 0,
        this.da,
        this.ka,
        this.ja,
        this.ia,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.Wa)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.Ia)),
        new Xe(
          b,
          1,
          a,
          (1 + this.Wa) | 0,
          this.Ja,
          (1 + this.Ra) | 0,
          this.Ka,
          (1 + this.Ba) | 0,
          this.da,
          this.ka,
          this.ja,
          this.ia,
          this.e,
          (1 + this.j) | 0
        )
      );
    if (32768 > this.Ra) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      var c = V(R(), V(R(), this.d, this.Ia), this.Ja);
      return new Xe(
        b,
        1,
        a,
        1,
        c,
        (1 + this.Ra) | 0,
        this.Ka,
        (1 + this.Ba) | 0,
        this.da,
        this.ka,
        this.ja,
        this.ia,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (1048576 > this.Ba) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      c = R().fb;
      var d = V(R(), V(R(), V(R(), this.d, this.Ia), this.Ja), this.Ka);
      return new Xe(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        (1 + this.Ba) | 0,
        this.da,
        this.ka,
        this.ja,
        this.ia,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (30 > this.da.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      c = R().fb;
      d = R().wc;
      var f = V(
        R(),
        V(R(), V(R(), V(R(), this.d, this.Ia), this.Ja), this.Ka),
        this.da
      );
      return new Xe(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        1,
        f,
        this.ka,
        this.ja,
        this.ia,
        this.e,
        (1 + this.j) | 0
      );
    }
    b = new r(1);
    b.a[0] = a;
    a = R().Q;
    c = R().fb;
    d = R().wc;
    f = V(R(), V(R(), V(R(), this.d, this.Ia), this.Ja), this.Ka);
    var g = new (x(x(x(x(x(w))))).G)(1);
    g.a[0] = f;
    return new S(
      b,
      1,
      a,
      1,
      c,
      1,
      d,
      1,
      g,
      (1 + this.Ba) | 0,
      R().Sh,
      this.da,
      this.ka,
      this.ja,
      this.ia,
      this.e,
      (1 + this.j) | 0
    );
  };
  e.Hd = function (a) {
    var b = cf(R(), this.d, a),
      c = df(R(), 2, this.Ia, a),
      d = df(R(), 3, this.Ja, a),
      f = df(R(), 4, this.Ka, a),
      g = df(R(), 5, this.da, a),
      h = df(R(), 4, this.ka, a),
      k = df(R(), 3, this.ja, a),
      l = df(R(), 2, this.ia, a);
    a = cf(R(), this.e, a);
    return new Xe(
      b,
      this.Va,
      c,
      this.Wa,
      d,
      this.Ra,
      f,
      this.Ba,
      g,
      h,
      k,
      l,
      a,
      this.j
    );
  };
  e.wd = function (a, b) {
    a = new Ne(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.Ia);
    Q(a, 3, this.Ja);
    Q(a, 4, this.Ka);
    Q(a, 5, this.da);
    Q(a, 4, this.ka);
    Q(a, 3, this.ja);
    Q(a, 2, this.ia);
    Q(a, 1, this.e);
    return a.Id();
  };
  e.ld = function () {
    if (1 < this.Va) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new Xe(
        a,
        (-1 + this.Va) | 0,
        this.Ia,
        (-1 + this.Wa) | 0,
        this.Ja,
        (-1 + this.Ra) | 0,
        this.Ka,
        (-1 + this.Ba) | 0,
        this.da,
        this.ka,
        this.ja,
        this.ia,
        this.e,
        (-1 + this.j) | 0
      );
    }
    return this.wd(1, this.j);
  };
  e.xd = function () {
    return 9;
  };
  e.Ud = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.Ia;
      case 2:
        return this.Ja;
      case 3:
        return this.Ka;
      case 4:
        return this.da;
      case 5:
        return this.ka;
      case 6:
        return this.ja;
      case 7:
        return this.ia;
      case 8:
        return this.e;
      default:
        throw new T(a);
    }
  };
  e.Pc = function (a, b) {
    var c = ef(R(), this.e, a);
    return null !== c
      ? new Xe(
          this.d,
          this.Va,
          this.Ia,
          this.Wa,
          this.Ja,
          this.Ra,
          this.Ka,
          this.Ba,
          this.da,
          this.ka,
          this.ja,
          this.ia,
          c,
          (((this.j - this.e.a.length) | 0) + c.a.length) | 0
        )
      : op.prototype.Pc.call(this, a, b);
  };
  e.w = function () {
    return this.ld();
  };
  e.R = function (a) {
    return this.Hd(a);
  };
  e.nd = function (a) {
    return this.hc(a);
  };
  e.l = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.Ba) | 0;
      if (0 <= a) {
        b = (a >>> 20) | 0;
        var c = 31 & ((a >>> 15) | 0),
          d = 31 & ((a >>> 10) | 0),
          f = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.da.a.length
          ? this.da.a[b].a[c].a[d].a[f].a[a]
          : c < this.ka.a.length
          ? this.ka.a[c].a[d].a[f].a[a]
          : d < this.ja.a.length
          ? this.ja.a[d].a[f].a[a]
          : f < this.ia.a.length
          ? this.ia.a[f].a[a]
          : this.e.a[a];
      }
      return b >= this.Ra
        ? ((a = (b - this.Ra) | 0),
          this.Ka.a[(a >>> 15) | 0].a[31 & ((a >>> 10) | 0)].a[
            31 & ((a >>> 5) | 0)
          ].a[31 & a])
        : b >= this.Wa
        ? ((a = (b - this.Wa) | 0),
          this.Ja.a[(a >>> 10) | 0].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.Va
        ? ((a = (b - this.Va) | 0), this.Ia.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Gb(b);
  };
  e.$classData = v({ Eq: 0 }, !1, "scala.collection.immutable.Vector5", {
    Eq: 1,
    Qg: 1,
    kg: 1,
    jg: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function S(a, b, c, d, f, g, h, k, l, p, u, y, D, K, J, Z, wa) {
    this.e = this.d = null;
    this.j = 0;
    this.La = b;
    this.sa = c;
    this.Ma = d;
    this.ta = f;
    this.Ca = g;
    this.ua = h;
    this.qa = k;
    this.va = l;
    this.ra = p;
    this.T = u;
    this.ba = y;
    this.aa = D;
    this.$ = K;
    this.Z = J;
    Kt(this, a, Z, wa);
  }
  S.prototype = new Lt();
  S.prototype.constructor = S;
  e = S.prototype;
  e.t = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.ra) | 0;
      if (0 <= b) {
        a = (b >>> 25) | 0;
        var c = 31 & ((b >>> 20) | 0),
          d = 31 & ((b >>> 15) | 0),
          f = 31 & ((b >>> 10) | 0),
          g = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.T.a.length
          ? this.T.a[a].a[c].a[d].a[f].a[g].a[b]
          : c < this.ba.a.length
          ? this.ba.a[c].a[d].a[f].a[g].a[b]
          : d < this.aa.a.length
          ? this.aa.a[d].a[f].a[g].a[b]
          : f < this.$.a.length
          ? this.$.a[f].a[g].a[b]
          : g < this.Z.a.length
          ? this.Z.a[g].a[b]
          : this.e.a[b];
      }
      return a >= this.qa
        ? ((b = (a - this.qa) | 0),
          this.va.a[(b >>> 20) | 0].a[31 & ((b >>> 15) | 0)].a[
            31 & ((b >>> 10) | 0)
          ].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.Ca
        ? ((b = (a - this.Ca) | 0),
          this.ua.a[(b >>> 15) | 0].a[31 & ((b >>> 10) | 0)].a[
            31 & ((b >>> 5) | 0)
          ].a[31 & b])
        : a >= this.Ma
        ? ((b = (a - this.Ma) | 0),
          this.ta.a[(b >>> 10) | 0].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.La
        ? ((b = (a - this.La) | 0), this.sa.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Gb(a);
  };
  e.Gf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.ra) {
        var c = (a - this.ra) | 0,
          d = (c >>> 25) | 0,
          f = 31 & ((c >>> 20) | 0),
          g = 31 & ((c >>> 15) | 0),
          h = 31 & ((c >>> 10) | 0);
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.T.a.length) {
          var k = this.T.q(),
            l = k.a[d].q(),
            p = l.a[f].q(),
            u = p.a[g].q(),
            y = u.a[h].q(),
            D = y.a[a].q();
          D.a[c] = b;
          y.a[a] = D;
          u.a[h] = y;
          p.a[g] = u;
          l.a[f] = p;
          k.a[d] = l;
          return new S(
            this.d,
            this.La,
            this.sa,
            this.Ma,
            this.ta,
            this.Ca,
            this.ua,
            this.qa,
            this.va,
            this.ra,
            k,
            this.ba,
            this.aa,
            this.$,
            this.Z,
            this.e,
            this.j
          );
        }
        if (f < this.ba.a.length)
          return (
            (d = this.ba.q()),
            (k = d.a[f].q()),
            (l = k.a[g].q()),
            (p = l.a[h].q()),
            (u = p.a[a].q()),
            (u.a[c] = b),
            (p.a[a] = u),
            (l.a[h] = p),
            (k.a[g] = l),
            (d.a[f] = k),
            new S(
              this.d,
              this.La,
              this.sa,
              this.Ma,
              this.ta,
              this.Ca,
              this.ua,
              this.qa,
              this.va,
              this.ra,
              this.T,
              d,
              this.aa,
              this.$,
              this.Z,
              this.e,
              this.j
            )
          );
        if (g < this.aa.a.length)
          return (
            (f = this.aa.q()),
            (d = f.a[g].q()),
            (k = d.a[h].q()),
            (l = k.a[a].q()),
            (l.a[c] = b),
            (k.a[a] = l),
            (d.a[h] = k),
            (f.a[g] = d),
            new S(
              this.d,
              this.La,
              this.sa,
              this.Ma,
              this.ta,
              this.Ca,
              this.ua,
              this.qa,
              this.va,
              this.ra,
              this.T,
              this.ba,
              f,
              this.$,
              this.Z,
              this.e,
              this.j
            )
          );
        if (h < this.$.a.length)
          return (
            (g = this.$.q()),
            (f = g.a[h].q()),
            (d = f.a[a].q()),
            (d.a[c] = b),
            (f.a[a] = d),
            (g.a[h] = f),
            new S(
              this.d,
              this.La,
              this.sa,
              this.Ma,
              this.ta,
              this.Ca,
              this.ua,
              this.qa,
              this.va,
              this.ra,
              this.T,
              this.ba,
              this.aa,
              g,
              this.Z,
              this.e,
              this.j
            )
          );
        if (a < this.Z.a.length)
          return (
            (h = this.Z.q()),
            (g = h.a[a].q()),
            (g.a[c] = b),
            (h.a[a] = g),
            new S(
              this.d,
              this.La,
              this.sa,
              this.Ma,
              this.ta,
              this.Ca,
              this.ua,
              this.qa,
              this.va,
              this.ra,
              this.T,
              this.ba,
              this.aa,
              this.$,
              h,
              this.e,
              this.j
            )
          );
        a = this.e.q();
        a.a[c] = b;
        return new S(
          this.d,
          this.La,
          this.sa,
          this.Ma,
          this.ta,
          this.Ca,
          this.ua,
          this.qa,
          this.va,
          this.ra,
          this.T,
          this.ba,
          this.aa,
          this.$,
          this.Z,
          a,
          this.j
        );
      }
      if (a >= this.qa)
        return (
          (f = (a - this.qa) | 0),
          (a = (f >>> 20) | 0),
          (c = 31 & ((f >>> 15) | 0)),
          (h = 31 & ((f >>> 10) | 0)),
          (g = 31 & ((f >>> 5) | 0)),
          (f &= 31),
          (d = this.va.q()),
          (k = d.a[a].q()),
          (l = k.a[c].q()),
          (p = l.a[h].q()),
          (u = p.a[g].q()),
          (u.a[f] = b),
          (p.a[g] = u),
          (l.a[h] = p),
          (k.a[c] = l),
          (d.a[a] = k),
          new S(
            this.d,
            this.La,
            this.sa,
            this.Ma,
            this.ta,
            this.Ca,
            this.ua,
            this.qa,
            d,
            this.ra,
            this.T,
            this.ba,
            this.aa,
            this.$,
            this.Z,
            this.e,
            this.j
          )
        );
      if (a >= this.Ca)
        return (
          (g = (a - this.Ca) | 0),
          (a = (g >>> 15) | 0),
          (c = 31 & ((g >>> 10) | 0)),
          (h = 31 & ((g >>> 5) | 0)),
          (g &= 31),
          (f = this.ua.q()),
          (d = f.a[a].q()),
          (k = d.a[c].q()),
          (l = k.a[h].q()),
          (l.a[g] = b),
          (k.a[h] = l),
          (d.a[c] = k),
          (f.a[a] = d),
          new S(
            this.d,
            this.La,
            this.sa,
            this.Ma,
            this.ta,
            this.Ca,
            f,
            this.qa,
            this.va,
            this.ra,
            this.T,
            this.ba,
            this.aa,
            this.$,
            this.Z,
            this.e,
            this.j
          )
        );
      if (a >= this.Ma)
        return (
          (h = (a - this.Ma) | 0),
          (a = (h >>> 10) | 0),
          (c = 31 & ((h >>> 5) | 0)),
          (h &= 31),
          (g = this.ta.q()),
          (f = g.a[a].q()),
          (d = f.a[c].q()),
          (d.a[h] = b),
          (f.a[c] = d),
          (g.a[a] = f),
          new S(
            this.d,
            this.La,
            this.sa,
            this.Ma,
            g,
            this.Ca,
            this.ua,
            this.qa,
            this.va,
            this.ra,
            this.T,
            this.ba,
            this.aa,
            this.$,
            this.Z,
            this.e,
            this.j
          )
        );
      if (a >= this.La)
        return (
          (c = (a - this.La) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (h = this.sa.q()),
          (g = h.a[a].q()),
          (g.a[c] = b),
          (h.a[a] = g),
          new S(
            this.d,
            this.La,
            h,
            this.Ma,
            this.ta,
            this.Ca,
            this.ua,
            this.qa,
            this.va,
            this.ra,
            this.T,
            this.ba,
            this.aa,
            this.$,
            this.Z,
            this.e,
            this.j
          )
        );
      c = this.d.q();
      c.a[a] = b;
      return new S(
        c,
        this.La,
        this.sa,
        this.Ma,
        this.ta,
        this.Ca,
        this.ua,
        this.qa,
        this.va,
        this.ra,
        this.T,
        this.ba,
        this.aa,
        this.$,
        this.Z,
        this.e,
        this.j
      );
    }
    throw this.Gb(a);
  };
  e.hc = function (a) {
    if (32 > this.e.a.length)
      return (
        (a = $e(R(), this.e, a)),
        new S(
          this.d,
          this.La,
          this.sa,
          this.Ma,
          this.ta,
          this.Ca,
          this.ua,
          this.qa,
          this.va,
          this.ra,
          this.T,
          this.ba,
          this.aa,
          this.$,
          this.Z,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.Z.a.length) {
      var b = U(R(), this.Z, this.e),
        c = new r(1);
      c.a[0] = a;
      return new S(
        this.d,
        this.La,
        this.sa,
        this.Ma,
        this.ta,
        this.Ca,
        this.ua,
        this.qa,
        this.va,
        this.ra,
        this.T,
        this.ba,
        this.aa,
        this.$,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (31 > this.$.a.length) {
      b = U(R(), this.$, U(R(), this.Z, this.e));
      c = R().Q;
      var d = new r(1);
      d.a[0] = a;
      return new S(
        this.d,
        this.La,
        this.sa,
        this.Ma,
        this.ta,
        this.Ca,
        this.ua,
        this.qa,
        this.va,
        this.ra,
        this.T,
        this.ba,
        this.aa,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    if (31 > this.aa.a.length) {
      b = U(R(), this.aa, U(R(), this.$, U(R(), this.Z, this.e)));
      c = R().fb;
      d = R().Q;
      var f = new r(1);
      f.a[0] = a;
      return new S(
        this.d,
        this.La,
        this.sa,
        this.Ma,
        this.ta,
        this.Ca,
        this.ua,
        this.qa,
        this.va,
        this.ra,
        this.T,
        this.ba,
        b,
        c,
        d,
        f,
        (1 + this.j) | 0
      );
    }
    if (31 > this.ba.a.length) {
      b = U(
        R(),
        this.ba,
        U(R(), this.aa, U(R(), this.$, U(R(), this.Z, this.e)))
      );
      c = R().wc;
      d = R().fb;
      f = R().Q;
      var g = new r(1);
      g.a[0] = a;
      return new S(
        this.d,
        this.La,
        this.sa,
        this.Ma,
        this.ta,
        this.Ca,
        this.ua,
        this.qa,
        this.va,
        this.ra,
        this.T,
        b,
        c,
        d,
        f,
        g,
        (1 + this.j) | 0
      );
    }
    if (62 > this.T.a.length) {
      b = U(
        R(),
        this.T,
        U(R(), this.ba, U(R(), this.aa, U(R(), this.$, U(R(), this.Z, this.e))))
      );
      c = R().Re;
      d = R().wc;
      f = R().fb;
      g = R().Q;
      var h = new r(1);
      h.a[0] = a;
      return new S(
        this.d,
        this.La,
        this.sa,
        this.Ma,
        this.ta,
        this.Ca,
        this.ua,
        this.qa,
        this.va,
        this.ra,
        b,
        c,
        d,
        f,
        g,
        h,
        (1 + this.j) | 0
      );
    }
    throw to();
  };
  e.lf = function (a) {
    if (32 > this.La) {
      var b = af(R(), a, this.d);
      return new S(
        b,
        (1 + this.La) | 0,
        this.sa,
        (1 + this.Ma) | 0,
        this.ta,
        (1 + this.Ca) | 0,
        this.ua,
        (1 + this.qa) | 0,
        this.va,
        (1 + this.ra) | 0,
        this.T,
        this.ba,
        this.aa,
        this.$,
        this.Z,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.Ma)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.sa)),
        new S(
          b,
          1,
          a,
          (1 + this.Ma) | 0,
          this.ta,
          (1 + this.Ca) | 0,
          this.ua,
          (1 + this.qa) | 0,
          this.va,
          (1 + this.ra) | 0,
          this.T,
          this.ba,
          this.aa,
          this.$,
          this.Z,
          this.e,
          (1 + this.j) | 0
        )
      );
    if (32768 > this.Ca) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      var c = V(R(), V(R(), this.d, this.sa), this.ta);
      return new S(
        b,
        1,
        a,
        1,
        c,
        (1 + this.Ca) | 0,
        this.ua,
        (1 + this.qa) | 0,
        this.va,
        (1 + this.ra) | 0,
        this.T,
        this.ba,
        this.aa,
        this.$,
        this.Z,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (1048576 > this.qa) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      c = R().fb;
      var d = V(R(), V(R(), V(R(), this.d, this.sa), this.ta), this.ua);
      return new S(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        (1 + this.qa) | 0,
        this.va,
        (1 + this.ra) | 0,
        this.T,
        this.ba,
        this.aa,
        this.$,
        this.Z,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (33554432 > this.ra) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      c = R().fb;
      d = R().wc;
      var f = V(
        R(),
        V(R(), V(R(), V(R(), this.d, this.sa), this.ta), this.ua),
        this.va
      );
      return new S(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        1,
        f,
        (1 + this.ra) | 0,
        this.T,
        this.ba,
        this.aa,
        this.$,
        this.Z,
        this.e,
        (1 + this.j) | 0
      );
    }
    if (62 > this.T.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().Q;
      c = R().fb;
      d = R().wc;
      f = R().Re;
      var g = V(
        R(),
        V(
          R(),
          V(R(), V(R(), V(R(), this.d, this.sa), this.ta), this.ua),
          this.va
        ),
        this.T
      );
      return new S(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        1,
        f,
        1,
        g,
        this.ba,
        this.aa,
        this.$,
        this.Z,
        this.e,
        (1 + this.j) | 0
      );
    }
    throw to();
  };
  e.Hd = function (a) {
    var b = cf(R(), this.d, a),
      c = df(R(), 2, this.sa, a),
      d = df(R(), 3, this.ta, a),
      f = df(R(), 4, this.ua, a),
      g = df(R(), 5, this.va, a),
      h = df(R(), 6, this.T, a),
      k = df(R(), 5, this.ba, a),
      l = df(R(), 4, this.aa, a),
      p = df(R(), 3, this.$, a),
      u = df(R(), 2, this.Z, a);
    a = cf(R(), this.e, a);
    return new S(
      b,
      this.La,
      c,
      this.Ma,
      d,
      this.Ca,
      f,
      this.qa,
      g,
      this.ra,
      h,
      k,
      l,
      p,
      u,
      a,
      this.j
    );
  };
  e.wd = function (a, b) {
    a = new Ne(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.sa);
    Q(a, 3, this.ta);
    Q(a, 4, this.ua);
    Q(a, 5, this.va);
    Q(a, 6, this.T);
    Q(a, 5, this.ba);
    Q(a, 4, this.aa);
    Q(a, 3, this.$);
    Q(a, 2, this.Z);
    Q(a, 1, this.e);
    return a.Id();
  };
  e.ld = function () {
    if (1 < this.La) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new S(
        a,
        (-1 + this.La) | 0,
        this.sa,
        (-1 + this.Ma) | 0,
        this.ta,
        (-1 + this.Ca) | 0,
        this.ua,
        (-1 + this.qa) | 0,
        this.va,
        (-1 + this.ra) | 0,
        this.T,
        this.ba,
        this.aa,
        this.$,
        this.Z,
        this.e,
        (-1 + this.j) | 0
      );
    }
    return this.wd(1, this.j);
  };
  e.xd = function () {
    return 11;
  };
  e.Ud = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.sa;
      case 2:
        return this.ta;
      case 3:
        return this.ua;
      case 4:
        return this.va;
      case 5:
        return this.T;
      case 6:
        return this.ba;
      case 7:
        return this.aa;
      case 8:
        return this.$;
      case 9:
        return this.Z;
      case 10:
        return this.e;
      default:
        throw new T(a);
    }
  };
  e.Pc = function (a, b) {
    var c = ef(R(), this.e, a);
    return null !== c
      ? new S(
          this.d,
          this.La,
          this.sa,
          this.Ma,
          this.ta,
          this.Ca,
          this.ua,
          this.qa,
          this.va,
          this.ra,
          this.T,
          this.ba,
          this.aa,
          this.$,
          this.Z,
          c,
          (((this.j - this.e.a.length) | 0) + c.a.length) | 0
        )
      : op.prototype.Pc.call(this, a, b);
  };
  e.w = function () {
    return this.ld();
  };
  e.R = function (a) {
    return this.Hd(a);
  };
  e.nd = function (a) {
    return this.hc(a);
  };
  e.l = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.ra) | 0;
      if (0 <= a) {
        b = (a >>> 25) | 0;
        var c = 31 & ((a >>> 20) | 0),
          d = 31 & ((a >>> 15) | 0),
          f = 31 & ((a >>> 10) | 0),
          g = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.T.a.length
          ? this.T.a[b].a[c].a[d].a[f].a[g].a[a]
          : c < this.ba.a.length
          ? this.ba.a[c].a[d].a[f].a[g].a[a]
          : d < this.aa.a.length
          ? this.aa.a[d].a[f].a[g].a[a]
          : f < this.$.a.length
          ? this.$.a[f].a[g].a[a]
          : g < this.Z.a.length
          ? this.Z.a[g].a[a]
          : this.e.a[a];
      }
      return b >= this.qa
        ? ((a = (b - this.qa) | 0),
          this.va.a[(a >>> 20) | 0].a[31 & ((a >>> 15) | 0)].a[
            31 & ((a >>> 10) | 0)
          ].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.Ca
        ? ((a = (b - this.Ca) | 0),
          this.ua.a[(a >>> 15) | 0].a[31 & ((a >>> 10) | 0)].a[
            31 & ((a >>> 5) | 0)
          ].a[31 & a])
        : b >= this.Ma
        ? ((a = (b - this.Ma) | 0),
          this.ta.a[(a >>> 10) | 0].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.La
        ? ((a = (b - this.La) | 0), this.sa.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Gb(b);
  };
  e.$classData = v({ Fq: 0 }, !1, "scala.collection.immutable.Vector6", {
    Fq: 1,
    Qg: 1,
    kg: 1,
    jg: 1,
    Uc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    nc: 1,
    Ib: 1,
    Ic: 1,
    Kd: 1,
    $a: 1,
    ya: 1,
    be: 1,
    Rd: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function Ud() {
    var a = new Tt();
    a.Tb = Bl(new Dl());
    return a;
  }
  function Tt() {
    this.Tb = null;
  }
  Tt.prototype = new Xs();
  Tt.prototype.constructor = Tt;
  e = Tt.prototype;
  e.Mb = function () {
    return "IndexedSeq";
  };
  e.i = function () {
    var a = new Mj(this);
    return new yk(a);
  };
  e.Eb = function (a) {
    return Bo(this, a);
  };
  e.R = function (a) {
    return Do(this, a);
  };
  e.u = function () {
    return Pa(Gl(this.Tb, 0));
  };
  e.hb = function (a) {
    var b = this.Tb.n();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.cc = function () {};
  e.qb = function (a) {
    return Yh(this, a);
  };
  e.n = function () {
    return this.Tb.n();
  };
  e.v = function () {
    return this.Tb.n();
  };
  e.z = function () {
    return this.Tb.o;
  };
  function Ut(a, b) {
    if (b instanceof Gm) {
      var c = a.Tb;
      Hm();
      c.o = "" + c.o + b.oc;
    } else if (b instanceof Qq) El(a.Tb, b.jd);
    else if (b instanceof Tt) (c = a.Tb), (c.o = "" + c.o + b.Tb);
    else {
      var d = b.v();
      if (0 !== d)
        for (c = a.Tb, 0 < d && c.n(), b = b.i(); b.m(); )
          (d = za(b.k())), (d = String.fromCharCode(d)), (c.o = "" + c.o + d);
    }
    return a;
  }
  e.f = function () {
    return 0 === this.Tb.n();
  };
  e.ha = function () {
    Xp || (Xp = new Wp());
    return Xp;
  };
  e.Ua = function () {
    return this.Tb.o;
  };
  e.Oa = function (a) {
    var b = this.Tb;
    a = String.fromCharCode(za(a));
    b.o = "" + b.o + a;
    return this;
  };
  e.Be = function (a) {
    return Ut(Ud(), a);
  };
  e.oh = function (a) {
    return Ut(Ud(), a);
  };
  e.l = function (a) {
    return Pa(Gl(this.Tb, a | 0));
  };
  e.t = function (a) {
    return Pa(Gl(this.Tb, a));
  };
  e.$classData = v({ wr: 0 }, !1, "scala.collection.mutable.StringBuilder", {
    wr: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Ef: 1,
    Xc: 1,
    qc: 1,
    pc: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    Ek: 1,
    c: 1,
  });
  function Vt(a) {
    a.Oj = (1 + a.Oj) | 0;
    if (a.Xh) {
      var b = Zp(new gp(), a);
      a.fe = b.fe;
      a.vd = b.vd;
      a.Xh = !1;
    }
  }
  function gp() {
    this.vd = this.fe = null;
    this.Xh = !1;
    this.Oj = this.Lc = 0;
    this.fe = I();
    this.vd = null;
    this.Xh = !1;
    this.Lc = 0;
  }
  gp.prototype = new nt();
  gp.prototype.constructor = gp;
  e = gp.prototype;
  e.cc = function () {};
  e.Bd = function (a) {
    return Eq(this, a);
  };
  e.R = function (a) {
    return Tl(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.i = function () {
    return new bq(this.fe.i(), new H(((a) => () => a.Oj)(this)));
  };
  e.rd = function () {
    return aq();
  };
  e.t = function (a) {
    return en(this.fe, a);
  };
  e.n = function () {
    return this.Lc;
  };
  e.v = function () {
    return this.Lc;
  };
  e.f = function () {
    return 0 === this.Lc;
  };
  function Ht(a) {
    a.Xh = !a.f();
    return a.fe;
  }
  function Zp(a, b) {
    if (b === a)
      0 < a.Lc &&
        (Vt(a),
        (b = Zp(new gp(), a)),
        (a.vd.tc = b.fe),
        (a.vd = b.vd),
        (a.Lc <<= 1));
    else if (((b = b.i()), b.m())) {
      Vt(a);
      var c = new Wm(b.k(), I());
      0 === a.Lc ? (a.fe = c) : (a.vd.tc = c);
      a.vd = c;
      for (a.Lc = (1 + a.Lc) | 0; b.m(); )
        (c = new Wm(b.k(), I())),
          (a.vd.tc = c),
          (a.vd = c),
          (a.Lc = (1 + a.Lc) | 0);
    }
    return a;
  }
  e.Mb = function () {
    return "ListBuffer";
  };
  e.qb = function (a) {
    return Zp(this, a);
  };
  e.Oa = function (a) {
    Vt(this);
    a = new Wm(a, I());
    0 === this.Lc ? (this.fe = a) : (this.vd.tc = a);
    this.vd = a;
    this.Lc = (1 + this.Lc) | 0;
    return this;
  };
  e.Ua = function () {
    return Ht(this);
  };
  e.l = function (a) {
    return en(this.fe, a | 0);
  };
  e.ha = function () {
    return aq();
  };
  e.$classData = v({ or: 0 }, !1, "scala.collection.mutable.ListBuffer", {
    or: 1,
    Th: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Uh: 1,
    qc: 1,
    pc: 1,
    dh: 1,
    ab: 1,
    ma: 1,
    Ef: 1,
    Xc: 1,
    id: 1,
    c: 1,
  });
  function Bp() {
    var a = new zp(),
      b = new r(16);
    a.de = b;
    a.ob = 0;
    return a;
  }
  function zp() {
    this.de = null;
    this.ob = 0;
  }
  zp.prototype = new nt();
  zp.prototype.constructor = zp;
  e = zp.prototype;
  e.Bd = function (a) {
    return Eq(this, a);
  };
  e.R = function (a) {
    return Tl(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.i = function () {
    return new yk(new Ls(this.de, this.ob));
  };
  e.Eb = function (a) {
    return Bo(this, a);
  };
  e.u = function () {
    return this.t(0);
  };
  e.hb = function (a) {
    var b = this.ob;
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return this.ob;
  };
  function Ep(a, b) {
    Dp();
    var c = a.de,
      d = c.a.length,
      f = d >> 31,
      g = b >> 31;
    if (!(g === f ? (-2147483648 ^ b) <= (-2147483648 ^ d) : g < f)) {
      g = new n(d, f);
      d = a.ob;
      var h = g.Fa;
      f = h << 1;
      g = (h >>> 31) | 0 | (g.Ea << 1);
      g = (0 === g ? -2147483632 < (-2147483648 ^ f) : 0 < g)
        ? new n(f, g)
        : new n(16, 0);
      f = g.Fa;
      for (g = g.Ea; ; ) {
        h = b >> 31;
        var k = f,
          l = g;
        if (h === l ? (-2147483648 ^ b) > (-2147483648 ^ k) : h > l)
          (g = (f >>> 31) | 0 | (g << 1)), (f <<= 1);
        else break;
      }
      b = g;
      if (0 === b ? -1 < (-2147483648 ^ f) : 0 < b) {
        if (2147483647 === d)
          throw (
            ((a = new Ki()),
            oe(a, "Collections can not have more than 2147483647 elements"),
            nb(a))
          );
        f = 2147483647;
      }
      b = new r(f);
      zh(Bh(), c, 0, b, 0, d);
      c = b;
    }
    a.de = c;
  }
  e.t = function (a) {
    var b = (1 + a) | 0;
    if (0 > a)
      throw og(
        new pg(),
        a + " is out of bounds (min 0, max " + ((-1 + this.ob) | 0) + ")"
      );
    if (b > this.ob)
      throw og(
        new pg(),
        ((-1 + b) | 0) +
          " is out of bounds (min 0, max " +
          ((-1 + this.ob) | 0) +
          ")"
      );
    return this.de.a[a];
  };
  e.n = function () {
    return this.ob;
  };
  e.rd = function () {
    return Dp();
  };
  function Ap(a, b) {
    b instanceof zp
      ? (Ep(a, (a.ob + b.ob) | 0),
        zh(Bh(), b.de, 0, a.de, a.ob, b.ob),
        (a.ob = (a.ob + b.ob) | 0))
      : Yh(a, b);
    return a;
  }
  e.Mb = function () {
    return "ArrayBuffer";
  };
  e.Ob = function (a, b, c) {
    var d = this.ob,
      f = Nd(Od(), a);
    c = c < d ? c : d;
    f = (f - b) | 0;
    f = c < f ? c : f;
    f = 0 < f ? f : 0;
    0 < f && zh(Bh(), this.de, 0, a, b, f);
    return f;
  };
  e.qb = function (a) {
    return Ap(this, a);
  };
  e.Oa = function (a) {
    var b = this.ob;
    Ep(this, (1 + this.ob) | 0);
    this.ob = (1 + this.ob) | 0;
    var c = (1 + b) | 0;
    if (0 > b)
      throw og(
        new pg(),
        b + " is out of bounds (min 0, max " + ((-1 + this.ob) | 0) + ")"
      );
    if (c > this.ob)
      throw og(
        new pg(),
        ((-1 + c) | 0) +
          " is out of bounds (min 0, max " +
          ((-1 + this.ob) | 0) +
          ")"
      );
    this.de.a[b] = a;
    return this;
  };
  e.ha = function () {
    return Dp();
  };
  e.l = function (a) {
    return this.t(a | 0);
  };
  e.$classData = v({ Lq: 0 }, !1, "scala.collection.mutable.ArrayBuffer", {
    Lq: 1,
    Th: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Uh: 1,
    qc: 1,
    pc: 1,
    dh: 1,
    Nj: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    id: 1,
    c: 1,
  });
  function nq(a) {
    a.xe = [];
    return a;
  }
  function jq() {
    var a = new oq();
    nq(a);
    return a;
  }
  function oq() {
    this.xe = null;
  }
  oq.prototype = new nt();
  oq.prototype.constructor = oq;
  e = oq.prototype;
  e.cc = function () {};
  e.Mb = function () {
    return "IndexedSeq";
  };
  e.i = function () {
    var a = new Mj(this);
    return new yk(a);
  };
  e.Eb = function (a) {
    return Bo(this, a);
  };
  e.R = function (a) {
    return Do(this, a);
  };
  e.u = function () {
    return this.xe[0];
  };
  e.hb = function (a) {
    var b = this.xe.length | 0;
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.Bd = function (a) {
    return Eq(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.rd = function () {
    return Qp();
  };
  e.t = function (a) {
    return this.xe[a];
  };
  e.n = function () {
    return this.xe.length | 0;
  };
  e.v = function () {
    return this.xe.length | 0;
  };
  e.Qc = function () {
    return "WrappedArray";
  };
  e.Ua = function () {
    return this;
  };
  e.Oa = function (a) {
    this.xe.push(a);
    return this;
  };
  e.l = function (a) {
    return this.xe[a | 0];
  };
  e.ha = function () {
    return Qp();
  };
  e.$classData = v({ zr: 0 }, !1, "scala.scalajs.js.WrappedArray", {
    zr: 1,
    Th: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Uh: 1,
    qc: 1,
    pc: 1,
    dh: 1,
    ab: 1,
    ma: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    Nj: 1,
    Xc: 1,
    c: 1,
  });
  function Wt(a, b, c, d) {
    if (0 !== (b.a.length & ((-1 + b.a.length) | 0))) throw new zl();
    var f = b.a.length;
    if (0 > c || c >= f)
      throw og(
        new pg(),
        c + " is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
      );
    f = b.a.length;
    if (0 > d || d >= f)
      throw og(
        new pg(),
        d + " is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
      );
    a.V = b;
    a.xb = c;
    a.wb = d;
  }
  function Ip(a, b, c) {
    a.V = b;
    a.xb = 0;
    a.wb = c;
    Wt(a, a.V, a.xb, a.wb);
    return a;
  }
  function Lp() {
    var a = new Jp();
    Ip(a, Hp(Op(), 16), 0);
    return a;
  }
  function Jp() {
    this.V = null;
    this.wb = this.xb = 0;
  }
  Jp.prototype = new nt();
  Jp.prototype.constructor = Jp;
  function Xt() {}
  e = Xt.prototype = Jp.prototype;
  e.Bd = function (a) {
    return Eq(this, a);
  };
  e.R = function (a) {
    return Tl(this, a);
  };
  e.Wb = function (a) {
    return Ul(this, a);
  };
  e.Pb = function (a) {
    return Xl(this, a);
  };
  e.i = function () {
    var a = new Mj(this);
    return new yk(a);
  };
  e.Eb = function (a) {
    return Bo(this, a);
  };
  e.u = function () {
    return this.t(0);
  };
  e.hb = function (a) {
    var b = ((this.wb - this.xb) | 0) & ((-1 + this.V.a.length) | 0);
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.v = function () {
    return ((this.wb - this.xb) | 0) & ((-1 + this.V.a.length) | 0);
  };
  e.t = function (a) {
    var b = ((this.wb - this.xb) | 0) & ((-1 + this.V.a.length) | 0);
    if (0 > a || a >= b)
      throw og(
        new pg(),
        a + " is out of bounds (min 0, max " + ((-1 + b) | 0) + ")"
      );
    return this.V.a[((this.xb + a) | 0) & ((-1 + this.V.a.length) | 0)];
  };
  function Dk(a, b) {
    var c = (1 + (((a.wb - a.xb) | 0) & ((-1 + a.V.a.length) | 0))) | 0;
    c > (((a.wb - a.xb) | 0) & ((-1 + a.V.a.length) | 0)) &&
      c >= a.V.a.length &&
      Pp(a, c);
    a.V.a[a.wb] = b;
    a.wb = ((1 + a.wb) | 0) & ((-1 + a.V.a.length) | 0);
    return a;
  }
  function Kp(a, b) {
    var c = b.v();
    if (0 < c)
      for (
        c = (c + (((a.wb - a.xb) | 0) & ((-1 + a.V.a.length) | 0))) | 0,
          c > (((a.wb - a.xb) | 0) & ((-1 + a.V.a.length) | 0)) &&
            c >= a.V.a.length &&
            Pp(a, c),
          b = b.i();
        b.m();

      )
        (c = b.k()),
          (a.V.a[a.wb] = c),
          (a.wb = ((1 + a.wb) | 0) & ((-1 + a.V.a.length) | 0));
    else for (b = b.i(); b.m(); ) (c = b.k()), Dk(a, c);
    return a;
  }
  function Ek(a) {
    if (a.f()) throw Th(new Uh(), "empty collection");
    var b = a.V.a[a.xb];
    a.V.a[a.xb] = null;
    a.xb = ((1 + a.xb) | 0) & ((-1 + a.V.a.length) | 0);
    return b;
  }
  e.n = function () {
    return ((this.wb - this.xb) | 0) & ((-1 + this.V.a.length) | 0);
  };
  e.f = function () {
    return this.xb === this.wb;
  };
  e.rd = function () {
    return Op();
  };
  e.Ob = function (a, b, c) {
    var d = ((this.wb - this.xb) | 0) & ((-1 + this.V.a.length) | 0),
      f = Nd(Od(), a);
    d = c < d ? c : d;
    f = (f - b) | 0;
    f = d < f ? d : f;
    f = 0 < f ? f : 0;
    0 < f && nr(this, a, b, c);
    return f;
  };
  function Pp(a, b) {
    if (
      b >= a.V.a.length ||
      (16 < a.V.a.length && ((a.V.a.length - b) | 0) > b)
    ) {
      var c = ((a.wb - a.xb) | 0) & ((-1 + a.V.a.length) | 0);
      b = Hp(Op(), b);
      b = nr(a, b, 0, c);
      Wt(a, b, 0, c);
    }
  }
  e.Mb = function () {
    return "ArrayDeque";
  };
  e.ha = function () {
    return this.rd();
  };
  e.qb = function (a) {
    return Kp(this, a);
  };
  e.Oa = function (a) {
    return Dk(this, a);
  };
  e.l = function (a) {
    return this.t(a | 0);
  };
  e.$classData = v({ El: 0 }, !1, "scala.collection.mutable.ArrayDeque", {
    El: 1,
    Th: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Uh: 1,
    qc: 1,
    pc: 1,
    dh: 1,
    Nj: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    Tq: 1,
    id: 1,
    c: 1,
  });
  function Ck(a) {
    this.V = null;
    this.wb = this.xb = 0;
    a = Hp(Op(), a);
    Ip(this, a, 0);
  }
  Ck.prototype = new Xt();
  Ck.prototype.constructor = Ck;
  Ck.prototype.rd = function () {
    return eq();
  };
  Ck.prototype.Mb = function () {
    return "Queue";
  };
  Ck.prototype.ha = function () {
    return eq();
  };
  Ck.prototype.$classData = v({ tr: 0 }, !1, "scala.collection.mutable.Queue", {
    tr: 1,
    El: 1,
    Th: 1,
    Kc: 1,
    xa: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    la: 1,
    oa: 1,
    N: 1,
    P: 1,
    x: 1,
    Mc: 1,
    yc: 1,
    Nc: 1,
    xc: 1,
    Xb: 1,
    Uh: 1,
    qc: 1,
    pc: 1,
    dh: 1,
    Nj: 1,
    Yc: 1,
    $a: 1,
    ya: 1,
    Zc: 1,
    ab: 1,
    ma: 1,
    Tq: 1,
    id: 1,
    c: 1,
  });
  da = new n(0, 0);
  jb.$h = da;
  ScalaJSExample = Dc();
  new (x(la).G)([]);
  ic(Dc());
}.call(this));
//# sourceMappingURL=scala-js-games-opt.js.map
