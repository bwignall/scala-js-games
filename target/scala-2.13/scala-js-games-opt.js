let ScalaJSExample;
(function () {
  "use strict";
  var e,
    ba = Object.freeze({
      assumingES6: !0,
      productionMode: !0,
      linkerVersion: "1.5.0",
      fileLevelThis: this,
    }),
    ca = Math.imul,
    da = Math.clz32,
    ea;
  function fa(a) {
    for (var b in a) return b;
  }
  function ha(a) {
    this.yk = a;
  }
  ha.prototype.toString = function () {
    return String.fromCharCode(this.yk);
  };
  var ja = function ia(a, b, c) {
    var f = new a.G(b[c]);
    if (c < b.length - 1) {
      a = a.tg;
      c += 1;
      for (var g = f.a, h = 0; h < g.length; h++) g[h] = ia(a, b, c);
    }
    return f;
  };
  function ka(a) {
    switch (typeof a) {
      case "string":
        return m(ma);
      case "number":
        return na(a)
          ? (a << 24) >> 24 === a
            ? m(oa)
            : (a << 16) >> 16 === a
            ? m(pa)
            : m(qa)
          : m(sa);
      case "boolean":
        return m(ta);
      case "undefined":
        return m(ua);
      default:
        return null === a
          ? a.Am()
          : a instanceof n
          ? m(va)
          : a instanceof ha
          ? m(xa)
          : a && a.$classData
          ? m(a.$classData)
          : null;
    }
  }
  function ya(a) {
    switch (typeof a) {
      case "string":
        return "java.lang.String";
      case "number":
        return na(a)
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
          : a instanceof ha
          ? "java.lang.Character"
          : a && a.$classData
          ? a.$classData.name
          : null.xc.name;
    }
  }
  function za(a, b) {
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
          : a instanceof ha
          ? b instanceof ha
            ? Aa(a) === Aa(b)
            : !1
          : Ba.prototype.y.call(a, b);
    }
  }
  function Ca(a) {
    switch (typeof a) {
      case "string":
        return Da(a);
      case "number":
        return Ea(a);
      case "boolean":
        return a ? 1231 : 1237;
      case "undefined":
        return 0;
      default:
        return (a && a.$classData) || null === a
          ? a.H()
          : a instanceof ha
          ? Aa(a)
          : Ba.prototype.H.call(a);
    }
  }
  function Fa(a) {
    return void 0 === a ? "undefined" : a.toString();
  }
  function Ga(a) {
    return 2147483647 < a ? 2147483647 : -2147483648 > a ? -2147483648 : a | 0;
  }
  function Ha(a, b, c, d, f) {
    if (a !== c || d < b || ((b + f) | 0) < d)
      for (var g = 0; g < f; g = (g + 1) | 0) c[(d + g) | 0] = a[(b + g) | 0];
    else
      for (g = (f - 1) | 0; 0 <= g; g = (g - 1) | 0)
        c[(d + g) | 0] = a[(b + g) | 0];
  }
  var Ja = 0,
    Ka = new WeakMap();
  function La(a) {
    switch (typeof a) {
      case "string":
        return Da(a);
      case "number":
        return Ea(a);
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
        return (a = a.description), void 0 === a ? 0 : Da(a);
      default:
        if (null === a) return 0;
        b = Ka.get(a);
        void 0 === b && ((Ja = b = (Ja + 1) | 0), Ka.set(a, b));
        return b;
    }
  }
  function na(a) {
    return "number" === typeof a && (a | 0) === a && 1 / a !== 1 / -0;
  }
  function Na(a) {
    return new ha(a);
  }
  function Aa(a) {
    return null === a ? 0 : a.yk;
  }
  function Oa(a) {
    return null === a ? ea : a;
  }
  function Ba() {}
  Ba.prototype.constructor = Ba;
  function q() {}
  q.prototype = Ba.prototype;
  Ba.prototype.H = function () {
    return La(this);
  };
  Ba.prototype.y = function (a) {
    return this === a;
  };
  Ba.prototype.z = function () {
    var a = this.H();
    return ya(this) + "@" + (+(a >>> 0)).toString(16);
  };
  Ba.prototype.toString = function () {
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
    Ha(this.a, a, b.a, c, d);
  };
  r.prototype.o = function () {
    return new r(this.a.slice());
  };
  function Pa() {}
  Pa.prototype = r.prototype;
  function Qa(a) {
    if ("number" === typeof a) {
      this.a = Array(a);
      for (var b = 0; b < a; b++) this.a[b] = !1;
    } else this.a = a;
  }
  Qa.prototype = new q();
  Qa.prototype.constructor = Qa;
  Qa.prototype.I = function (a, b, c, d) {
    Ha(this.a, a, b.a, c, d);
  };
  Qa.prototype.o = function () {
    return new Qa(this.a.slice());
  };
  function Ra(a) {
    this.a = "number" === typeof a ? new Uint16Array(a) : a;
  }
  Ra.prototype = new q();
  Ra.prototype.constructor = Ra;
  Ra.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Ra.prototype.o = function () {
    return new Ra(this.a.slice());
  };
  function Sa(a) {
    this.a = "number" === typeof a ? new Int8Array(a) : a;
  }
  Sa.prototype = new q();
  Sa.prototype.constructor = Sa;
  Sa.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Sa.prototype.o = function () {
    return new Sa(this.a.slice());
  };
  function Ta(a) {
    this.a = "number" === typeof a ? new Int16Array(a) : a;
  }
  Ta.prototype = new q();
  Ta.prototype.constructor = Ta;
  Ta.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Ta.prototype.o = function () {
    return new Ta(this.a.slice());
  };
  function t(a) {
    this.a = "number" === typeof a ? new Int32Array(a) : a;
  }
  t.prototype = new q();
  t.prototype.constructor = t;
  t.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  t.prototype.o = function () {
    return new t(this.a.slice());
  };
  function Ua(a) {
    if ("number" === typeof a) {
      this.a = Array(a);
      for (var b = 0; b < a; b++) this.a[b] = ea;
    } else this.a = a;
  }
  Ua.prototype = new q();
  Ua.prototype.constructor = Ua;
  Ua.prototype.I = function (a, b, c, d) {
    Ha(this.a, a, b.a, c, d);
  };
  Ua.prototype.o = function () {
    return new Ua(this.a.slice());
  };
  function Va(a) {
    this.a = "number" === typeof a ? new Float32Array(a) : a;
  }
  Va.prototype = new q();
  Va.prototype.constructor = Va;
  Va.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Va.prototype.o = function () {
    return new Va(this.a.slice());
  };
  function Wa(a) {
    this.a = "number" === typeof a ? new Float64Array(a) : a;
  }
  Wa.prototype = new q();
  Wa.prototype.constructor = Wa;
  Wa.prototype.I = function (a, b, c, d) {
    b.a.set(this.a.subarray(a, (a + d) | 0), c);
  };
  Wa.prototype.o = function () {
    return new Wa(this.a.slice());
  };
  function Xa() {
    this.G = void 0;
    this.Df = this.tg = this.Ib = null;
    this.Ef = 0;
    this.Wh = null;
    this.Ye = "";
    this.Vh = this.af = this.rg = this.Ki = void 0;
    this.name = "";
    this.isJSClass = this.isArrayClass = this.isInterface = this.isPrimitive = !1;
    this.isInstance = void 0;
  }
  function Ya(a, b, c, d, f) {
    var g = new Xa();
    g.Ib = {};
    g.Wh = a;
    g.Ye = b;
    g.af = (h) => h === g;
    g.name = c;
    g.isPrimitive = !0;
    g.isInstance = () => !1;
    void 0 !== d && (g.rg = Za(g, d, f));
    return g;
  }
  function v(a, b, c, d, f) {
    var g = new Xa(),
      h = fa(a);
    g.Ib = d;
    g.Ye = "L" + c + ";";
    g.af = (k) => !!k.Ib[h];
    g.name = c;
    g.isInterface = b;
    g.isInstance = f || ((k) => !!(k && k.$classData && k.$classData.Ib[h]));
    return g;
  }
  function Za(a, b, c, d) {
    var f = new Xa();
    b.prototype.$classData = f;
    var g = "[" + a.Ye;
    f.G = b;
    f.Ib = { b: 1, Vb: 1, c: 1 };
    f.tg = a;
    f.Df = a;
    f.Ef = 1;
    f.Ye = g;
    f.name = g;
    f.isArrayClass = !0;
    f.af = d || ((h) => f === h);
    f.Vh = c ? (h) => new b(new c(h)) : (h) => new b(h);
    f.isInstance = (h) => h instanceof b;
    return f;
  }
  function $a(a) {
    function b(k) {
      if ("number" === typeof k) {
        this.a = Array(k);
        for (var l = 0; l < k; l++) this.a[l] = null;
      } else this.a = k;
    }
    var c = new Xa();
    b.prototype = new Pa();
    b.prototype.constructor = b;
    b.prototype.I = function (k, l, p, u) {
      Ha(this.a, k, l.a, p, u);
    };
    b.prototype.o = function () {
      return new b(this.a.slice());
    };
    var d = a.Df || a,
      f = a.Ef + 1;
    b.prototype.$classData = c;
    var g = "[" + a.Ye;
    c.G = b;
    c.Ib = { b: 1, Vb: 1, c: 1 };
    c.tg = a;
    c.Df = d;
    c.Ef = f;
    c.Ye = g;
    c.name = g;
    c.isArrayClass = !0;
    var h = (k) => {
      var l = k.Ef;
      return l === f ? d.af(k.Df) : l > f && d === w;
    };
    c.af = h;
    c.Vh = (k) => new b(k);
    c.isInstance = (k) => {
      k = k && k.$classData;
      return !!k && (k === c || h(k));
    };
    return c;
  }
  function x(a) {
    a.rg || (a.rg = $a(a));
    return a.rg;
  }
  function m(a) {
    a.Ki || (a.Ki = new ab(a));
    return a.Ki;
  }
  Xa.prototype.isAssignableFrom = function (a) {
    return this === a || this.af(a);
  };
  Xa.prototype.checkCast = function () {};
  Xa.prototype.getSuperclass = function () {
    return this.qn ? m(this.qn) : null;
  };
  Xa.prototype.getComponentType = function () {
    return this.tg ? m(this.tg) : null;
  };
  Xa.prototype.newArrayOfThisClass = function (a) {
    for (var b = this, c = 0; c < a.length; c++) b = x(b);
    return ja(b, a, 0);
  };
  var w = new Xa();
  w.Ib = { b: 1 };
  w.Ye = "Ljava.lang.Object;";
  w.af = (a) => !a.isPrimitive;
  w.name = "java.lang.Object";
  w.isInstance = (a) => null !== a;
  w.rg = Za(w, r, void 0, (a) => {
    var b = a.Ef;
    return 1 === b ? !a.Df.isPrimitive : 1 < b;
  });
  Ba.prototype.$classData = w;
  var bb = Ya(void 0, "V", "void", void 0, void 0),
    cb = Ya(!1, "Z", "boolean", Qa, void 0),
    db = Ya(0, "C", "char", Ra, Uint16Array),
    eb = Ya(0, "B", "byte", Sa, Int8Array),
    fb = Ya(0, "S", "short", Ta, Int16Array),
    gb = Ya(0, "I", "int", t, Int32Array),
    hb = Ya(null, "J", "long", Ua, void 0),
    ib = Ya(0, "F", "float", Va, Float32Array),
    jb = Ya(0, "D", "double", Wa, Float64Array);
  function kb(a, b, c, d) {
    this.Xh = null;
    this.ig = b;
    this.rd = c;
    this.Tj = d;
    if (null === a) throw lb(null);
    this.Xh = a;
  }
  kb.prototype = new q();
  kb.prototype.constructor = kb;
  kb.prototype.Xc = function (a) {
    var b = ca(10, this.ig);
    a.fillRect(this.rd.i - ((b / 2) | 0), this.rd.g - ((b / 2) | 0), b, b);
  };
  kb.prototype.Vi = function () {
    this.rd = y(this.rd, this.Tj);
    this.rd = y(this.rd, this.Xh.td);
    this.rd = mb(this.rd, this.Xh.td);
  };
  function nb(a, b) {
    return ob(
      b,
      pb(a.rd, qb(new z(5, 5), a.ig)),
      y(a.rd, qb(new z(5, 5), a.ig)),
      new z(0, 0)
    );
  }
  kb.prototype.$classData = v({ Ql: 0 }, !1, "example.Asteroids$Asteroid", {
    Ql: 1,
    b: 1,
  });
  function rb(a, b, c) {
    this.Ve = b;
    this.Yh = c;
    if (null === a) throw lb(null);
  }
  rb.prototype = new q();
  rb.prototype.constructor = rb;
  rb.prototype.Xc = function (a) {
    a.beginPath();
    a.moveTo(this.Ve.i, this.Ve.g);
    var b = y(this.Ve, sb(qb(this.Yh, 5), tb(this.Yh)));
    a.lineTo(b.i, b.g);
    a.stroke();
  };
  rb.prototype.Vi = function () {
    this.Ve = y(this.Ve, this.Yh);
  };
  rb.prototype.$classData = v({ Rl: 0 }, !1, "example.Asteroids$Bullet", {
    Rl: 1,
    b: 1,
  });
  function ub(a, b, c, d) {
    this.Zh = null;
    this.sd = b;
    this.zf = c;
    this.Ld = d;
    if (null === a) throw lb(null);
    this.Zh = a;
  }
  ub.prototype = new q();
  ub.prototype.constructor = ub;
  ub.prototype.Xc = function (a) {
    a.beginPath();
    var b = vb().db,
      c = [
        y(wb(new z(15, 0), this.Ld), this.sd),
        y(wb(new z(7, 0), this.Ld + 2.2252947962927703), this.sd),
        y(wb(new z(7, 0), this.Ld - 2.2252947962927703), this.sd),
      ];
    b = xb(b, B(new C(), c));
    a.moveTo(b.id().i, b.id().g);
    b.N(
      new D(
        ((d, f) => (g) => {
          f.lineTo(g.i, g.g);
        })(this, a)
      )
    );
    a.fill();
  };
  function yb(a, b) {
    a.sd = y(a.sd, a.zf);
    a.sd = y(a.sd, a.Zh.td);
    a.sd = mb(a.sd, a.Zh.td);
    b.F(37) && (a.Ld -= 0.05);
    b.F(38) && (a.zf = y(a.zf, wb(new z(0.2, 0), a.Ld)));
    b.F(39) && (a.Ld += 0.05);
    b.F(40) && (a.zf = pb(a.zf, wb(new z(0.2, 0), a.Ld)));
  }
  ub.prototype.$classData = v({ Sl: 0 }, !1, "example.Asteroids$Craft", {
    Sl: 1,
    b: 1,
  });
  function zb() {
    this.jk = this.bk = this.ik = this.fk = this.dk = this.ck = this.ek = this.gk = this.hk = null;
    this.Pa = 0;
    Ab = this;
    this.hk = Bb(255, 255, 255);
    this.Pa |= 1;
    this.gk = Bb(255, 0, 0);
    this.Pa |= 2;
    this.ek = Bb(0, 255, 0);
    this.Pa |= 4;
    this.ck = Bb(0, 0, 255);
    this.Pa |= 8;
    this.dk = Bb(0, 255, 255);
    this.Pa |= 16;
    this.fk = Bb(255, 0, 255);
    this.Pa |= 32;
    this.ik = Bb(255, 255, 0);
    this.Pa |= 64;
    this.bk = Bb(0, 0, 0);
    this.Pa |= 128;
    var a = vb().db,
      b = [
        Cb(this),
        Db(this),
        Eb(this),
        Fb(this),
        Gb(this),
        Hb(this),
        Ib(this),
        Jb(this),
      ];
    this.jk = xb(a, B(new C(), b));
    this.Pa |= 256;
  }
  zb.prototype = new q();
  zb.prototype.constructor = zb;
  function Bb(a, b, c) {
    return "rgb(" + a + ", " + b + ", " + c + ")";
  }
  function Cb(a) {
    if (0 === (1 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 12"
      );
    return a.hk;
  }
  function Db(a) {
    if (0 === (2 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 13"
      );
    return a.gk;
  }
  function Eb(a) {
    if (0 === (4 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 14"
      );
    return a.ek;
  }
  function Fb(a) {
    if (0 === (8 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 15"
      );
    return a.ck;
  }
  function Gb(a) {
    if (0 === (16 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 16"
      );
    return a.dk;
  }
  function Hb(a) {
    if (0 === (32 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 17"
      );
    return a.fk;
  }
  function Ib(a) {
    if (0 === (64 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 18"
      );
    return a.ik;
  }
  function Jb(a) {
    if (0 === (128 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 19"
      );
    return a.bk;
  }
  function Kb() {
    var a = F();
    if (0 === (256 & a.Pa))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 20"
      );
    return a.jk;
  }
  zb.prototype.$classData = v({ Zl: 0 }, !1, "example.Color$", { Zl: 1, b: 1 });
  var Ab;
  function F() {
    Ab || (Ab = new zb());
    return Ab;
  }
  function Lb(a) {
    a.Yd = Mb();
    a.Xd = !0;
  }
  function Nb() {
    this.Yd = null;
    this.Xd = !1;
  }
  Nb.prototype = new q();
  Nb.prototype.constructor = Nb;
  function Ob() {}
  Ob.prototype = Nb.prototype;
  function Pb(a) {
    if (!a.Xd)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 115"
      );
    return a.Yd;
  }
  function Qb(a, b) {
    a.Yd = b;
    a.Xd = !0;
  }
  function Rb(a, b) {
    this.We = b;
    if (null === a) throw lb(null);
  }
  Rb.prototype = new q();
  Rb.prototype.constructor = Rb;
  function Sb(a, b, c) {
    a.We.beginPath();
    a.We.arc(b, c, 5, 0, 6.283185307179586);
    a.We.fill();
  }
  function Tb(a, b) {
    a.We.beginPath();
    a.We.moveTo(b.id().i, b.id().g);
    b.N(
      new D(
        ((c) => (d) => {
          c.We.lineTo(d.i, d.g);
        })(a)
      )
    );
    a.We.stroke();
  }
  Rb.prototype.$classData = v({ bm: 0 }, !1, "example.Game$pimpedContext", {
    bm: 1,
    b: 1,
  });
  function Ub(a, b) {
    this.Tc = this.ni = this.ch = this.Wd = this.te = this.kk = null;
    this.mi = this.bh = !1;
    this.oi = null;
    this.ta = 0;
    this.kk = b;
    this.te = Vb().getElementById(a);
    this.ta = ((1 | this.ta) << 24) >> 24;
    this.Wd = new z(this.te.width | 0, this.te.height | 0);
    this.ta = ((2 | this.ta) << 24) >> 24;
    this.ch = Wb().Bb();
    this.ta = ((4 | this.ta) << 24) >> 24;
    this.ni = b.Uc(
      this.Wd,
      new H(
        ((c) => () => {
          Xb(c);
        })(this)
      )
    );
    this.ta = ((8 | this.ta) << 24) >> 24;
    this.te.onkeydown = ((c) => (d) => {
      Yb(c.ch, d.keyCode | 0);
      xb(vb().db, B(new C(), [32, 37, 38, 39, 40])).F(d.keyCode | 0) &&
        d.preventDefault();
      Zb(c, Mb());
    })(this);
    this.te.onkeyup = ((c) => (d) => {
      $b(c.ch, d.keyCode | 0);
      xb(vb().db, B(new C(), [32, 37, 38, 39, 40])).F(d.keyCode | 0) &&
        d.preventDefault();
    })(this);
    this.te.onfocus = ((c) => () => {
      c.bh = !0;
      c.ta = ((32 | c.ta) << 24) >> 24;
    })(this);
    this.te.onblur = ((c) => () => {
      c.bh = !1;
      c.ta = ((32 | c.ta) << 24) >> 24;
    })(this);
    this.Tc = this.te.getContext("2d");
    this.ta = ((16 | this.ta) << 24) >> 24;
    this.bh = !1;
    this.ta = ((32 | this.ta) << 24) >> 24;
    this.mi = !1;
    this.ta = ((64 | this.ta) << 24) >> 24;
    this.oi = Mb();
    this.ta = ((128 | this.ta) << 24) >> 24;
    this.Tc.font = "12pt Arial";
    this.Tc.textAlign = "center";
  }
  Ub.prototype = new q();
  Ub.prototype.constructor = Ub;
  function ac(a) {
    if (0 === ((8 & a.ta) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 62"
      );
    return a.ni;
  }
  function bc(a, b) {
    a.ni = b;
    a.ta = ((8 | a.ta) << 24) >> 24;
  }
  function cc(a) {
    if (0 === ((128 & a.ta) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 105"
      );
    return a.oi;
  }
  function Zb(a, b) {
    a.oi = b;
    a.ta = ((128 | a.ta) << 24) >> 24;
  }
  function Xb(a) {
    Zb(a, Pb(ac(a)));
    var b = cc(a);
    b = "MESSAGE " + (b.e() ? "missing message?!" : b.zg());
    dc(b + "\n");
    bc(
      a,
      a.kk.Uc(
        a.Wd,
        new H(
          ((c) => () => {
            Xb(c);
          })(a)
        )
      )
    );
  }
  Ub.prototype.$classData = v({ cm: 0 }, !1, "example.GameHolder", {
    cm: 1,
    b: 1,
  });
  function ec(a, b, c, d) {
    this.Ub = a;
    this.pc = b;
    this.fd = c;
    this.Zd = d;
  }
  ec.prototype = new q();
  ec.prototype.constructor = ec;
  ec.prototype.$classData = v({ dm: 0 }, !1, "example.Paddle", { dm: 1, b: 1 });
  function fc() {}
  fc.prototype = new q();
  fc.prototype.constructor = fc;
  function gc(a) {
    hc || (hc = new ic());
    var b = new Ub("asteroids", hc);
    jc || (jc = new kc());
    var c = new Ub("astrolander", jc);
    lc || (lc = new mc());
    var d = new Ub("snake", lc);
    nc || (nc = new oc());
    var f = new Ub("pong", nc);
    pc || (pc = new qc());
    var g = new Ub("bricks", pc);
    rc || (rc = new sc());
    var h = new Ub("tetris", rc);
    b = xb(vb().db, B(new C(), [b, c, d, f, g, h]));
    c = tc;
    uc || (uc = new vc());
    c(
      uc,
      new H(
        ((k, l) => () => {
          l.N(
            new D(
              (() => (p) => {
                if (0 === ((64 & p.ta) << 24) >> 24)
                  throw new E(
                    "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 84"
                  );
                p.mi ||
                  (ac(p).Xc(p.Tc),
                  (p.mi = !0),
                  (p.ta = ((64 | p.ta) << 24) >> 24));
                if (0 === ((32 & p.ta) << 24) >> 24)
                  throw new E(
                    "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/ScalaJSExample.scala: 83"
                  );
                if (p.bh && cc(p).e()) {
                  ac(p).Xc(p.Tc);
                  var u = ac(p);
                  wc();
                  p = p.ch;
                  xc();
                  p = yc(I(), p);
                  u.gg(zc(p));
                } else if (!cc(p).e()) {
                  u = p.Tc;
                  var A = Jb(F());
                  u.fillStyle = A;
                  p.Tc.fillRect(0, 0, p.Wd.i, p.Wd.g);
                  u = p.Tc;
                  A = Cb(F());
                  u.fillStyle = A;
                  p.Tc.font = "20pt Arial";
                  p.Tc.textAlign = "center";
                  p.Tc.fillText(cc(p).zg(), p.Wd.i / 2, p.Wd.g / 2);
                  p.Tc.font = "14pt Arial";
                  p.Tc.fillText(
                    "Press any key to continue",
                    p.Wd.i / 2,
                    p.Wd.g / 2 + 30
                  );
                }
              })(k)
            )
          );
        })(a, b)
      )
    );
  }
  fc.prototype.main = function () {
    gc(this);
  };
  fc.prototype.$classData = v({ hm: 0 }, !1, "example.ScalaJSExample$", {
    hm: 1,
    b: 1,
  });
  var Ac;
  function Bc() {
    Ac || (Ac = new fc());
    return Ac;
  }
  var Cc = v({ eh: 0 }, !0, "example.Spot", { eh: 1, b: 1 });
  function Fc(a, b) {
    this.Xe = b;
    if (null === a) throw lb(null);
  }
  Fc.prototype = new q();
  Fc.prototype.constructor = Fc;
  var Gc = v({ nm: 0 }, !1, "example.Tetris$Position", { nm: 1, b: 1 });
  Fc.prototype.$classData = Gc;
  function Hc() {}
  Hc.prototype = new q();
  Hc.prototype.constructor = Hc;
  Hc.prototype.$classData = v({ om: 0 }, !1, "example.Tetris$Position$", {
    om: 1,
    b: 1,
  });
  function ab(a) {
    this.xc = a;
  }
  ab.prototype = new q();
  ab.prototype.constructor = ab;
  ab.prototype.z = function () {
    return (
      (this.xc.isInterface
        ? "interface "
        : this.xc.isPrimitive
        ? ""
        : "class ") + this.xc.name
    );
  };
  function Ic(a) {
    return a.xc.getComponentType();
  }
  function Jc(a, b) {
    return a.xc.newArrayOfThisClass(b);
  }
  ab.prototype.$classData = v({ Km: 0 }, !1, "java.lang.Class", {
    Km: 1,
    b: 1,
  });
  function Kc() {
    this.Gk = this.mh = this.Bg = null;
    this.Qi = !1;
    this.Ik = this.Hk = 0;
    Lc = this;
    this.Bg = new ArrayBuffer(8);
    this.mh = new Int32Array(this.Bg, 0, 2);
    new Float32Array(this.Bg, 0, 2);
    this.Gk = new Float64Array(this.Bg, 0, 1);
    this.mh[0] = 16909060;
    this.Hk = (this.Qi = 1 === (new Int8Array(this.Bg, 0, 8)[0] | 0)) ? 0 : 1;
    this.Ik = this.Qi ? 1 : 0;
  }
  Kc.prototype = new q();
  Kc.prototype.constructor = Kc;
  function Mc(a, b) {
    var c = b | 0;
    if (c === b && -Infinity !== 1 / b) return c;
    a.Gk[0] = b;
    a = new n(a.mh[a.Ik] | 0, a.mh[a.Hk] | 0);
    return a.bb ^ a.ab;
  }
  Kc.prototype.$classData = v({ Mm: 0 }, !1, "java.lang.FloatingPointBits$", {
    Mm: 1,
    b: 1,
  });
  var Lc;
  function Nc() {
    Lc || (Lc = new Kc());
    return Lc;
  }
  function Oc() {
    this.Kk = null;
    Pc = this;
    this.Kk = new Qc(!1);
    new Qc(!0);
  }
  Oc.prototype = new q();
  Oc.prototype.constructor = Oc;
  Oc.prototype.$classData = v({ an: 0 }, !1, "java.lang.System$Streams$", {
    an: 1,
    b: 1,
  });
  var Pc;
  function Rc() {
    Pc || (Pc = new Oc());
    return Pc;
  }
  function Sc() {
    this.Lk = this.Si = null;
    Tc = this;
    var a = {
      "java.version": "1.8",
      "java.vm.specification.version": "1.8",
      "java.vm.specification.vendor": "Oracle Corporation",
      "java.vm.specification.name": "Java Virtual Machine Specification",
      "java.vm.name": "Scala.js",
    };
    a["java.vm.version"] = ba.linkerVersion;
    a["java.specification.version"] = "1.8";
    a["java.specification.vendor"] = "Oracle Corporation";
    a["java.specification.name"] = "Java Platform API Specification";
    a["file.separator"] = "/";
    a["path.separator"] = ":";
    a["line.separator"] = "\n";
    this.Si = a;
    this.Lk = null;
  }
  Sc.prototype = new q();
  Sc.prototype.constructor = Sc;
  function Uc(a, b, c) {
    null !== a.Si
      ? (Vc || (Vc = new Wc()),
        (a = a.Si),
        Xc || (Xc = new Yc()),
        (b = Xc.Nk.call(a, b) ? a[b] : c))
      : (b = Uc(a.Lk, b, c));
    return b;
  }
  Sc.prototype.$classData = v(
    { bn: 0 },
    !1,
    "java.lang.System$SystemProperties$",
    { bn: 1, b: 1 }
  );
  var Tc;
  function Zc() {
    Tc || (Tc = new Sc());
    return Tc;
  }
  function Wc() {}
  Wc.prototype = new q();
  Wc.prototype.constructor = Wc;
  Wc.prototype.$classData = v({ gn: 0 }, !1, "java.lang.Utils$", {
    gn: 1,
    b: 1,
  });
  var Vc;
  function Yc() {
    this.Nk = null;
    Xc = this;
    this.Nk = Object.prototype.hasOwnProperty;
  }
  Yc.prototype = new q();
  Yc.prototype.constructor = Yc;
  Yc.prototype.$classData = v({ hn: 0 }, !1, "java.lang.Utils$Cache$", {
    hn: 1,
    b: 1,
  });
  var Xc,
    ua = v(
      { Ok: 0 },
      !1,
      "java.lang.Void",
      { Ok: 1, b: 1 },
      (a) => void 0 === a
    );
  function $c() {}
  $c.prototype = new q();
  $c.prototype.constructor = $c;
  $c.prototype.$classData = v({ jn: 0 }, !1, "java.lang.reflect.Array$", {
    jn: 1,
    b: 1,
  });
  var ad;
  function bd() {
    ad || (ad = new $c());
  }
  function cd() {}
  cd.prototype = new q();
  cd.prototype.constructor = cd;
  function dd(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = f.bb;
      f = f.ab;
      var h = c.a[d],
        k = h.bb;
      h = h.ab;
      if (!J(L(), new n(g, f), new n(k, h))) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function ed(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!J(L(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function fd(a, b, c) {
    if (b === c) return !0;
    if (null === b || null === c) return !1;
    a = b.a.length;
    if (c.a.length !== a) return !1;
    for (var d = 0; d !== a; ) {
      var f = b.a[d],
        g = c.a[d];
      if (!J(L(), f, g)) return !1;
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
      if (!J(L(), Na(f), Na(g))) return !1;
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
      if (!J(L(), f, g)) return !1;
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
      if (!J(L(), f, g)) return !1;
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
      if (!J(L(), f, g)) return !1;
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
      if (!J(L(), f, g)) return !1;
      d = (1 + d) | 0;
    }
    return !0;
  }
  function ld(a, b, c) {
    a = md(nd(), Ic(ka(b)));
    if (0 > c) throw new od();
    var d = b.a.length;
    d = c < d ? c : d;
    c = a.yc(c);
    b.I(0, c, 0, d);
    return c;
  }
  function N(a, b, c, d) {
    a = md(nd(), Ic(ka(b)));
    if (c > d) throw pd(c + " \x3e " + d);
    d = (d - c) | 0;
    var f = (b.a.length - c) | 0;
    f = d < f ? d : f;
    a = a.yc(d);
    b.I(c, a, 0, f);
    return a;
  }
  cd.prototype.$classData = v({ kn: 0 }, !1, "java.util.Arrays$", {
    kn: 1,
    b: 1,
  });
  var qd;
  function O() {
    qd || (qd = new cd());
    return qd;
  }
  function rd() {
    this.tk = this.uk = null;
    this.ue = 0;
  }
  rd.prototype = new q();
  rd.prototype.constructor = rd;
  function Vb() {
    sd || (sd = new rd());
    var a = sd;
    0 === (67108864 & a.ue) &&
      0 === (67108864 & a.ue) &&
      (0 === (33554432 & a.ue) &&
        0 === (33554432 & a.ue) &&
        ((a.uk = window), (a.ue |= 33554432)),
      (a.tk = a.uk.document),
      (a.ue |= 67108864));
    return a.tk;
  }
  rd.prototype.$classData = v({ tm: 0 }, !1, "org.scalajs.dom.package$", {
    tm: 1,
    b: 1,
  });
  var sd;
  function td() {
    this.Rk = this.$i = null;
    ud = this;
    new Qa(0);
    new Sa(0);
    new Ra(0);
    new Wa(0);
    new Va(0);
    this.$i = new t(0);
    new Ua(0);
    new Ta(0);
    this.Rk = new r(0);
  }
  td.prototype = new q();
  td.prototype.constructor = td;
  td.prototype.$classData = v({ un: 0 }, !1, "scala.Array$EmptyArrays$", {
    un: 1,
    b: 1,
  });
  var ud;
  function vd() {
    ud || (ud = new td());
    return ud;
  }
  function wd() {}
  wd.prototype = new q();
  wd.prototype.constructor = wd;
  function xd() {}
  xd.prototype = wd.prototype;
  function yd() {}
  yd.prototype = new q();
  yd.prototype.constructor = yd;
  function zd(a) {
    for (var b = new (x(Ad).G)(Bd(Gd(), a)), c = 0; c < Bd(Gd(), a); )
      (b.a[c] = Hd(new Id(), Jd(Gd(), a, c), c)), (c = (1 + c) | 0);
    return b;
  }
  yd.prototype.$classData = v({ jo: 0 }, !1, "scala.collection.ArrayOps$", {
    jo: 1,
    b: 1,
  });
  var Kd;
  function Ld(a, b) {
    this.gj = a;
    this.Eg = b;
  }
  Ld.prototype = new q();
  Ld.prototype.constructor = Ld;
  function Md(a, b) {
    return new Ld(
      new D(((c, d) => (f) => !!c.gj.m(f) && !!d.m(f))(a, b)),
      a.Eg
    );
  }
  Ld.prototype.$classData = v(
    { Bo: 0 },
    !1,
    "scala.collection.ArrayOps$WithFilter",
    { Bo: 1, b: 1 }
  );
  function Nd() {}
  Nd.prototype = new q();
  Nd.prototype.constructor = Nd;
  function Od(a, b) {
    a = (b + ~(b << 9)) | 0;
    a ^= (a >>> 14) | 0;
    a = (a + (a << 4)) | 0;
    return a ^ ((a >>> 10) | 0);
  }
  Nd.prototype.$classData = v({ Do: 0 }, !1, "scala.collection.Hashing$", {
    Do: 1,
    b: 1,
  });
  var Pd;
  function Qd() {
    Pd || (Pd = new Nd());
    return Pd;
  }
  function Rd() {}
  Rd.prototype = new q();
  Rd.prototype.constructor = Rd;
  function Sd(a) {
    return Td(a) ? a.e() : !a.h().l();
  }
  Rd.prototype.$classData = v(
    { Lo: 0 },
    !1,
    "scala.collection.IterableOnceExtensionMethods$",
    { Lo: 1, b: 1 }
  );
  var Ud;
  function Vd(a, b) {
    for (a = a.h(); a.l(); ) b.m(a.k());
  }
  function Wd(a, b) {
    var c = !1;
    for (a = a.h(); !c && a.l(); ) c = !!b.m(a.k());
    return c;
  }
  function Xd(a, b) {
    a = a.h();
    if (!a.l()) throw Yd("empty.reduceLeft");
    for (var c = !0, d = null; a.l(); ) {
      var f = a.k();
      c ? ((d = f), (c = !1)) : (d = b.Uc(d, f));
    }
    return d;
  }
  function Zd(a, b, c, d) {
    a = a.h();
    var f = c,
      g = (Bd(Gd(), b) - c) | 0;
    for (d = (c + (d < g ? d : g)) | 0; f < d && a.l(); )
      $d(Gd(), b, f, a.k()), (f = (1 + f) | 0);
    return (f - c) | 0;
  }
  function ae(a) {
    var b = be;
    return a.e()
      ? 0
      : a.ze(new ce((() => (c, d) => ((c | 0) + (d | 0)) | 0)(a, b)));
  }
  function de(a, b, c) {
    return a.e() ? "" + b + ")" : a.ae(ee(), b, c, ")").Nb.n;
  }
  function fe(a, b, c, d, f) {
    var g = b.Nb;
    0 !== (c.length | 0) && (g.n = "" + g.n + c);
    a = a.h();
    if (a.l())
      for (c = a.k(), g.n = "" + g.n + c; a.l(); )
        (g.n = "" + g.n + d), (c = a.k()), (g.n = "" + g.n + c);
    0 !== (f.length | 0) && (g.n = "" + g.n + f);
    return b;
  }
  function ge(a, b) {
    this.ap = a;
    this.Dh = b;
  }
  ge.prototype = new q();
  ge.prototype.constructor = ge;
  ge.prototype.$classData = v(
    { $o: 0 },
    !1,
    "scala.collection.Iterator$ConcatIteratorCell",
    { $o: 1, b: 1 }
  );
  function he(a, b) {
    this.dl = null;
    this.kj = !1;
    this.cl = b;
  }
  he.prototype = new q();
  he.prototype.constructor = he;
  function ie(a) {
    a.kj || (a.kj || ((a.dl = je(a.cl)), (a.kj = !0)), (a.cl = null));
    return a.dl;
  }
  he.prototype.$classData = v(
    { cp: 0 },
    !1,
    "scala.collection.LinearSeqIterator$LazyCell",
    { cp: 1, b: 1 }
  );
  function ke(a, b) {
    null === a.Rd &&
      ((a.Rd = new t(P().Bj << 1)), (a.Rf = new (x(le).G)(P().Bj)));
    a.Ac = (1 + a.Ac) | 0;
    var c = a.Ac << 1,
      d = (1 + (a.Ac << 1)) | 0;
    a.Rf.a[a.Ac] = b;
    a.Rd.a[c] = 0;
    a.Rd.a[d] = b.Pk();
  }
  function me(a, b) {
    a.jc = 0;
    a.lf = 0;
    a.Ac = -1;
    b.Oi() && ke(a, b);
    b.Pi() && ((a.fe = b), (a.jc = 0), (a.lf = b.Yi()));
  }
  function ne() {
    this.lf = this.jc = 0;
    this.fe = null;
    this.Ac = 0;
    this.Rf = this.Rd = null;
  }
  ne.prototype = new q();
  ne.prototype.constructor = ne;
  function oe() {}
  oe.prototype = ne.prototype;
  ne.prototype.l = function () {
    var a;
    if (!(a = this.jc < this.lf))
      a: {
        for (; 0 <= this.Ac; ) {
          a = this.Ac << 1;
          var b = this.Rd.a[a];
          if (b < this.Rd.a[(1 + (this.Ac << 1)) | 0]) {
            var c = this.Rd;
            c.a[a] = (1 + c.a[a]) | 0;
            a = this.Rf.a[this.Ac].Od(b);
            a.Oi() && ke(this, a);
            if (a.Pi()) {
              this.fe = a;
              this.jc = 0;
              this.lf = a.Yi();
              a = !0;
              break a;
            }
          } else this.Ac = (-1 + this.Ac) | 0;
        }
        a = !1;
      }
    return a;
  };
  function pe() {
    this.nl = 0;
    qe = this;
    try {
      var a = Uc(
        Zc(),
        "scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength",
        "64"
      );
      var b = re(se(), a);
    } catch (c) {
      throw c;
    }
    this.nl = b;
  }
  pe.prototype = new q();
  pe.prototype.constructor = pe;
  pe.prototype.$classData = v(
    { Jp: 0 },
    !1,
    "scala.collection.immutable.IndexedSeqDefaults$",
    { Jp: 1, b: 1 }
  );
  var qe;
  function te() {
    this.wj = null;
  }
  te.prototype = new q();
  te.prototype.constructor = te;
  function ue(a) {
    a = a.wj;
    if (null === a) throw new ve("uninitialized");
    return je(a);
  }
  function we(a, b) {
    if (null !== a.wj) throw new ve("already initialized");
    a.wj = b;
  }
  te.prototype.$classData = v(
    { Op: 0 },
    !1,
    "scala.collection.immutable.LazyList$LazyBuilder$DeferredState",
    { Op: 1, b: 1 }
  );
  function xe(a, b) {
    var c = new ye();
    a = b + " is out of bounds (min 0, max " + ((-1 + Bd(Gd(), a)) | 0);
    ze(c, a);
    return c;
  }
  function Ae() {}
  Ae.prototype = new q();
  Ae.prototype.constructor = Ae;
  function Be() {}
  Be.prototype = Ae.prototype;
  function Ce(a, b) {
    if (0 > b) throw xe(a, b);
    if (b > ((-1 + a.a.length) | 0)) throw xe(a, b);
    var c = new t((-1 + a.a.length) | 0);
    a.I(0, c, 0, b);
    a.I((1 + b) | 0, c, b, (-1 + ((a.a.length - b) | 0)) | 0);
    return c;
  }
  function De(a, b, c) {
    if (0 > b) throw xe(a, b);
    if (b > a.a.length) throw xe(a, b);
    var d = new t((1 + a.a.length) | 0);
    a.I(0, d, 0, b);
    d.a[b] = c;
    a.I(b, d, (1 + b) | 0, (a.a.length - b) | 0);
    return d;
  }
  var le = v({ Aj: 0 }, !1, "scala.collection.immutable.Node", { Aj: 1, b: 1 });
  Ae.prototype.$classData = le;
  function Ee() {
    this.Bj = 0;
    Fe = this;
    this.Bj = Ga(7);
  }
  Ee.prototype = new q();
  Ee.prototype.constructor = Ee;
  function Ge(a, b, c) {
    return 31 & ((b >>> c) | 0);
  }
  function He(a, b) {
    return 1 << b;
  }
  function Ie(a, b, c) {
    a = b & ((-1 + c) | 0);
    return Je(se(), a);
  }
  function Ke(a, b, c, d) {
    return -1 === b ? c : Ie(0, b, d);
  }
  Ee.prototype.$classData = v(
    { bq: 0 },
    !1,
    "scala.collection.immutable.Node$",
    { bq: 1, b: 1 }
  );
  var Fe;
  function P() {
    Fe || (Fe = new Ee());
    return Fe;
  }
  function Pe() {
    this.Zf = null;
    Qe = this;
    this.Zf = new Re(0, 0, (Se(), new r(0)), (Te(), new t(0)), 0, 0);
  }
  Pe.prototype = new q();
  Pe.prototype.constructor = Pe;
  Pe.prototype.$classData = v(
    { sq: 0 },
    !1,
    "scala.collection.immutable.SetNode$",
    { sq: 1, b: 1 }
  );
  var Qe;
  function Ue() {
    Qe || (Qe = new Pe());
    return Qe;
  }
  var Xe = function Ve(a, b, c, d, f) {
    for (;;) {
      if (1 === b) {
        b = c;
        var h = d,
          k = f;
        We(a, 1, 0 === h && k === b.a.length ? b : N(O(), b, h, k));
      } else {
        h = ca(5, (-1 + b) | 0);
        var l = 1 << h;
        k = (d >>> h) | 0;
        h = (f >>> h) | 0;
        d &= (-1 + l) | 0;
        f &= (-1 + l) | 0;
        if (0 === d)
          if (0 === f)
            (f = c),
              We(a, b, 0 === k && h === f.a.length ? f : N(O(), f, k, h));
          else {
            h > k &&
              ((d = c),
              We(a, b, 0 === k && h === d.a.length ? d : N(O(), d, k, h)));
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
        } else if ((Ve(a, (-1 + b) | 0, c.a[k], d, l), 0 === f))
          h > ((1 + k) | 0) &&
            ((f = c),
            (k = (1 + k) | 0),
            We(a, b, 0 === k && h === f.a.length ? f : N(O(), f, k, h)));
        else {
          h > ((1 + k) | 0) &&
            ((d = c),
            (k = (1 + k) | 0),
            We(a, b, 0 === k && h === d.a.length ? d : N(O(), d, k, h)));
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
  function We(a, b, c) {
    b <= a.Cc ? (b = (11 - b) | 0) : ((a.Cc = b), (b = (-1 + b) | 0));
    a.A.a[b] = c;
  }
  var Ze = function Ye(a, b) {
      if (null === a.A.a[(-1 + b) | 0])
        if (b === a.Cc)
          (a.A.a[(-1 + b) | 0] = a.A.a[(11 - b) | 0]),
            (a.A.a[(11 - b) | 0] = null);
        else {
          Ye(a, (1 + b) | 0);
          var d = a.A.a[(-1 + ((1 + b) | 0)) | 0];
          a.A.a[(-1 + b) | 0] = d.a[0];
          if (1 === d.a.length)
            (a.A.a[(-1 + ((1 + b) | 0)) | 0] = null),
              a.Cc === ((1 + b) | 0) &&
                null === a.A.a[(11 - ((1 + b) | 0)) | 0] &&
                (a.Cc = b);
          else {
            var f = d.a.length;
            a.A.a[(-1 + ((1 + b) | 0)) | 0] = N(O(), d, 1, f);
          }
        }
    },
    af = function $e(a, b) {
      if (null === a.A.a[(11 - b) | 0])
        if (b === a.Cc)
          (a.A.a[(11 - b) | 0] = a.A.a[(-1 + b) | 0]),
            (a.A.a[(-1 + b) | 0] = null);
        else {
          $e(a, (1 + b) | 0);
          var d = a.A.a[(11 - ((1 + b) | 0)) | 0];
          a.A.a[(11 - b) | 0] = d.a[(-1 + d.a.length) | 0];
          if (1 === d.a.length)
            (a.A.a[(11 - ((1 + b) | 0)) | 0] = null),
              a.Cc === ((1 + b) | 0) &&
                null === a.A.a[(-1 + ((1 + b) | 0)) | 0] &&
                (a.Cc = b);
          else {
            var f = (-1 + d.a.length) | 0;
            a.A.a[(11 - ((1 + b) | 0)) | 0] = N(O(), d, 0, f);
          }
        }
    };
  function bf(a, b) {
    this.A = null;
    this.Cc = this.bg = this.Id = 0;
    this.Dl = a;
    this.Cl = b;
    this.A = new (x(x(w)).G)(11);
    this.Cc = this.bg = this.Id = 0;
  }
  bf.prototype = new q();
  bf.prototype.constructor = bf;
  function Q(a, b, c) {
    var d = ca(c.a.length, 1 << ca(5, (-1 + b) | 0)),
      f = (a.Dl - a.bg) | 0;
    f = 0 < f ? f : 0;
    var g = (a.Cl - a.bg) | 0;
    g = g < d ? g : d;
    g > f && (Xe(a, b, c, f, g), (a.Id = (a.Id + ((g - f) | 0)) | 0));
    a.bg = (a.bg + d) | 0;
  }
  bf.prototype.Cd = function () {
    if (32 >= this.Id) {
      if (0 === this.Id) return cf();
      var a = this.A.a[0],
        b = this.A.a[10];
      if (null !== a)
        if (null !== b) {
          var c = (a.a.length + b.a.length) | 0,
            d = ld(O(), a, c);
          b.I(0, d, a.a.length, b.a.length);
          var f = d;
        } else f = a;
      else if (null !== b) f = b;
      else {
        var g = this.A.a[1];
        f = null !== g ? g.a[0] : this.A.a[9].a[0];
      }
      return new df(f);
    }
    Ze(this, 1);
    af(this, 1);
    var h = this.Cc;
    if (6 > h) {
      var k = this.A.a[(-1 + this.Cc) | 0],
        l = this.A.a[(11 - this.Cc) | 0];
      if (null !== k && null !== l)
        if (30 >= ((k.a.length + l.a.length) | 0)) {
          var p = this.A,
            u = this.Cc,
            A = (k.a.length + l.a.length) | 0,
            G = ld(O(), k, A);
          l.I(0, G, k.a.length, l.a.length);
          p.a[(-1 + u) | 0] = G;
          this.A.a[(11 - this.Cc) | 0] = null;
        } else h = (1 + h) | 0;
      else 30 < (null !== k ? k : l).a.length && (h = (1 + h) | 0);
    }
    var K = this.A.a[0],
      M = this.A.a[10],
      aa = K.a.length,
      wa = h;
    switch (wa) {
      case 2:
        var Ia = R().P,
          la = this.A.a[1];
        if (null !== la) var Ma = la;
        else {
          var ra = this.A.a[9];
          Ma = null !== ra ? ra : Ia;
        }
        var Cd = new ef(K, aa, Ma, M, this.Id);
        break;
      case 3:
        var Qg = R().P,
          Rg = this.A.a[1],
          Ij = null !== Rg ? Rg : Qg,
          Jj = R().$a,
          Kj = this.A.a[2];
        if (null !== Kj) var Sg = Kj;
        else {
          var Le = this.A.a[8];
          Sg = null !== Le ? Le : Jj;
        }
        var Me = Sg,
          km = R().P,
          Lj = this.A.a[9];
        Cd = new ff(
          K,
          aa,
          Ij,
          (aa + (Ij.a.length << 5)) | 0,
          Me,
          null !== Lj ? Lj : km,
          M,
          this.Id
        );
        break;
      case 4:
        var Mj = R().P,
          Nj = this.A.a[1],
          Tg = null !== Nj ? Nj : Mj,
          Oj = R().$a,
          Pj = this.A.a[2],
          Ug = null !== Pj ? Pj : Oj,
          Qj = R().tc,
          Rj = this.A.a[3];
        if (null !== Rj) var Sj = Rj;
        else {
          var Tj = this.A.a[7];
          Sj = null !== Tj ? Tj : Qj;
        }
        var lm = Sj,
          Vg = R().$a,
          Wg = this.A.a[8],
          mm = null !== Wg ? Wg : Vg,
          Uj = R().P,
          Xg = this.A.a[9],
          Vj = (aa + (Tg.a.length << 5)) | 0;
        Cd = new gf(
          K,
          aa,
          Tg,
          Vj,
          Ug,
          (Vj + (Ug.a.length << 10)) | 0,
          lm,
          mm,
          null !== Xg ? Xg : Uj,
          M,
          this.Id
        );
        break;
      case 5:
        var Wj = R().P,
          Ne = this.A.a[1],
          Dd = null !== Ne ? Ne : Wj,
          Ed = R().$a,
          Xj = this.A.a[2],
          Yj = null !== Xj ? Xj : Ed,
          Zj = R().tc,
          ak = this.A.a[3],
          Yg = null !== ak ? ak : Zj,
          bk = R().Ke,
          ck = this.A.a[4];
        if (null !== ck) var Zg = ck;
        else {
          var $g = this.A.a[6];
          Zg = null !== $g ? $g : bk;
        }
        var nm = Zg,
          dk = R().tc,
          ah = this.A.a[7],
          om = null !== ah ? ah : dk,
          pm = R().$a,
          ek = this.A.a[8],
          qm = null !== ek ? ek : pm,
          rm = R().P,
          fk = this.A.a[9],
          Oe = (aa + (Dd.a.length << 5)) | 0,
          bh = (Oe + (Yj.a.length << 10)) | 0;
        Cd = new hf(
          K,
          aa,
          Dd,
          Oe,
          Yj,
          bh,
          Yg,
          (bh + (Yg.a.length << 15)) | 0,
          nm,
          om,
          qm,
          null !== fk ? fk : rm,
          M,
          this.Id
        );
        break;
      case 6:
        var sm = R().P,
          ch = this.A.a[1],
          dh = null !== ch ? ch : sm,
          gk = R().$a,
          hk = this.A.a[2],
          eh = null !== hk ? hk : gk,
          fh = R().tc,
          Fd = this.A.a[3],
          Dc = null !== Fd ? Fd : fh,
          Ec = R().Ke,
          ik = this.A.a[4],
          jk = null !== ik ? ik : Ec,
          kk = R().Oh,
          lk = this.A.a[5];
        if (null !== lk) var gh = lk;
        else {
          var hh = this.A.a[5];
          gh = null !== hh ? hh : kk;
        }
        var tm = gh,
          mk = R().Ke,
          ih = this.A.a[6],
          um = null !== ih ? ih : mk,
          nk = R().tc,
          jh = this.A.a[7],
          vm = null !== jh ? jh : nk,
          ok = R().$a,
          kh = this.A.a[8],
          wm = null !== kh ? kh : ok,
          xm = R().P,
          pk = this.A.a[9],
          qk = (aa + (dh.a.length << 5)) | 0,
          rk = (qk + (eh.a.length << 10)) | 0,
          sk = (rk + (Dc.a.length << 15)) | 0;
        Cd = new S(
          K,
          aa,
          dh,
          qk,
          eh,
          rk,
          Dc,
          sk,
          jk,
          (sk + (jk.a.length << 20)) | 0,
          tm,
          um,
          vm,
          wm,
          null !== pk ? pk : xm,
          M,
          this.Id
        );
        break;
      default:
        throw new T(wa);
    }
    return Cd;
  };
  bf.prototype.z = function () {
    return (
      "VectorSliceBuilder(lo\x3d" +
      this.Dl +
      ", hi\x3d" +
      this.Cl +
      ", len\x3d" +
      this.Id +
      ", pos\x3d" +
      this.bg +
      ", maxDim\x3d" +
      this.Cc +
      ")"
    );
  };
  bf.prototype.$classData = v(
    { Jq: 0 },
    !1,
    "scala.collection.immutable.VectorSliceBuilder",
    { Jq: 1, b: 1 }
  );
  function jf() {
    this.Oh = this.Ke = this.tc = this.$a = this.P = this.Fj = null;
    kf = this;
    this.Fj = new r(0);
    this.P = new (x(x(w)).G)(0);
    this.$a = new (x(x(x(w))).G)(0);
    this.tc = new (x(x(x(x(w)))).G)(0);
    this.Ke = new (x(x(x(x(x(w))))).G)(0);
    this.Oh = new (x(x(x(x(x(x(w)))))).G)(0);
  }
  jf.prototype = new q();
  jf.prototype.constructor = jf;
  function lf(a, b, c) {
    a = b.a.length;
    var d = new r((1 + a) | 0);
    b.I(0, d, 0, a);
    d.a[a] = c;
    return d;
  }
  function U(a, b, c) {
    a = (1 + b.a.length) | 0;
    b = ld(O(), b, a);
    b.a[(-1 + b.a.length) | 0] = c;
    return b;
  }
  function mf(a, b, c) {
    a = new r((1 + c.a.length) | 0);
    c.I(0, a, 1, c.a.length);
    a.a[0] = b;
    return a;
  }
  function V(a, b, c) {
    a = Ic(ka(c));
    var d = (1 + c.a.length) | 0;
    bd();
    a = Jc(a, [d]);
    c.I(0, a, 1, c.a.length);
    a.a[0] = b;
    return a;
  }
  function nf(a, b, c, d) {
    var f = 0,
      g = c.a.length;
    if (0 === b) for (; f < g; ) d.m(c.a[f]), (f = (1 + f) | 0);
    else for (b = (-1 + b) | 0; f < g; ) nf(a, b, c.a[f], d), (f = (1 + f) | 0);
  }
  function of(a, b, c) {
    for (var d = 0; d < b.a.length; ) {
      var f = b.a[d];
      a = c.m(f);
      if (!Object.is(f, a)) {
        f = a;
        a = new r(b.a.length);
        0 < d && b.I(0, a, 0, d);
        a.a[d] = f;
        for (d = (1 + d) | 0; d < b.a.length; )
          (a.a[d] = c.m(b.a[d])), (d = (1 + d) | 0);
        return a;
      }
      d = (1 + d) | 0;
    }
    return b;
  }
  function pf(a, b, c, d) {
    if (1 === b) return of(0, c, d);
    for (var f = 0; f < c.a.length; ) {
      var g = c.a[f],
        h = pf(a, (-1 + b) | 0, g, d);
      if (g !== h) {
        g = Ic(ka(c));
        var k = c.a.length;
        bd();
        g = Jc(g, [k]);
        0 < f && c.I(0, g, 0, f);
        g.a[f] = h;
        for (h = (1 + f) | 0; h < c.a.length; )
          (g.a[h] = pf(a, (-1 + b) | 0, c.a[h], d)), (h = (1 + h) | 0);
        return g;
      }
      f = (1 + f) | 0;
    }
    return c;
  }
  function qf(a, b, c) {
    if (rf(c))
      if (0 >= c.Oj((32 - b.a.length) | 0))
        switch (((a = c.Sa()), a)) {
          case 0:
            return null;
          case 1:
            return U(0, b, c.u());
          default:
            return (
              (a = (b.a.length + a) | 0),
              (a = ld(O(), b, a)),
              c.Pb(a, b.a.length, 2147483647),
              a
            );
        }
      else return null;
    else
      return (
        (a = c.t()),
        0 < a && a <= ((32 - b.a.length) | 0)
          ? ((a = (b.a.length + a) | 0),
            (a = ld(O(), b, a)),
            c.h().Pb(a, b.a.length, 2147483647),
            a)
          : null
      );
  }
  jf.prototype.$classData = v(
    { Kq: 0 },
    !1,
    "scala.collection.immutable.VectorStatics$",
    { Kq: 1, b: 1 }
  );
  var kf;
  function R() {
    kf || (kf = new jf());
    return kf;
  }
  function sf(a, b, c) {
    this.Te = a;
    this.Jd = b;
    this.jb = c;
  }
  sf.prototype = new q();
  sf.prototype.constructor = sf;
  sf.prototype.N = function (a) {
    for (var b = this; ; )
      if ((a.m(b.Te), null !== b.jb)) b = b.jb;
      else break;
  };
  sf.prototype.z = function () {
    return "Node(" + this.Te + ", " + this.Jd + ") -\x3e " + this.jb;
  };
  var tf = v({ or: 0 }, !1, "scala.collection.mutable.HashSet$Node", {
    or: 1,
    b: 1,
  });
  sf.prototype.$classData = tf;
  function uf() {}
  uf.prototype = new q();
  uf.prototype.constructor = uf;
  uf.prototype.$classData = v(
    { sr: 0 },
    !1,
    "scala.collection.mutable.MutationTracker$",
    { sr: 1, b: 1 }
  );
  var vf;
  function wf() {}
  wf.prototype = new q();
  wf.prototype.constructor = wf;
  wf.prototype.$classData = v(
    { yp: 0 },
    !1,
    "scala.collection.package$$colon$plus$",
    { yp: 1, b: 1 }
  );
  var xf;
  function yf() {}
  yf.prototype = new q();
  yf.prototype.constructor = yf;
  yf.prototype.$classData = v(
    { zp: 0 },
    !1,
    "scala.collection.package$$plus$colon$",
    { zp: 1, b: 1 }
  );
  var zf;
  function Af() {}
  Af.prototype = new q();
  Af.prototype.constructor = Af;
  Af.prototype.$classData = v({ In: 0 }, !1, "scala.math.Ordered$", {
    In: 1,
    b: 1,
  });
  var Bf;
  function Cf() {
    this.cj = this.db = null;
    Df = this;
    Ef || (Ef = new Ff());
    Ef || (Ef = new Ff());
    Gf || (Gf = new Hf());
    this.db = Gf;
    If();
    W();
    xc();
    this.cj = I();
    Jf || (Jf = new Kf());
    zf || (zf = new yf());
    xf || (xf = new wf());
    Lf();
    X();
    Mf();
    Nf || (Nf = new Of());
    Pf();
    Qf || (Qf = new Rf());
    Sf || (Sf = new Tf());
    Uf || (Uf = new Vf());
    Wf || (Wf = new Xf());
    Bf || (Bf = new Af());
    Yf || (Yf = new Zf());
    $f || ($f = new ag());
    bg || (bg = new cg());
    dg || (dg = new eg());
  }
  Cf.prototype = new q();
  Cf.prototype.constructor = Cf;
  Cf.prototype.$classData = v({ Kn: 0 }, !1, "scala.package$", { Kn: 1, b: 1 });
  var Df;
  function vb() {
    Df || (Df = new Cf());
    return Df;
  }
  function fg() {}
  fg.prototype = new q();
  fg.prototype.constructor = fg;
  function J(a, b, c) {
    if (b === c) c = !0;
    else if (gg(b))
      a: if (gg(c)) c = hg(b, c);
      else {
        if (c instanceof ha) {
          if ("number" === typeof b) {
            c = +b === Aa(c);
            break a;
          }
          if (b instanceof n) {
            a = Oa(b);
            b = a.ab;
            c = Aa(c);
            c = a.bb === c && b === c >> 31;
            break a;
          }
        }
        c = null === b ? null === c : za(b, c);
      }
    else c = b instanceof ha ? ig(b, c) : null === b ? null === c : za(b, c);
    return c;
  }
  function hg(a, b) {
    if ("number" === typeof a) {
      a = +a;
      if ("number" === typeof b) return a === +b;
      if (b instanceof n) {
        var c = Oa(b);
        b = c.bb;
        c = c.ab;
        return a === jg(kg(), b, c);
      }
      return !1;
    }
    if (a instanceof n) {
      c = Oa(a);
      a = c.bb;
      c = c.ab;
      if (b instanceof n) {
        b = Oa(b);
        var d = b.ab;
        return a === b.bb && c === d;
      }
      return "number" === typeof b ? ((b = +b), jg(kg(), a, c) === b) : !1;
    }
    return null === a ? null === b : za(a, b);
  }
  function ig(a, b) {
    if (b instanceof ha) return Aa(a) === Aa(b);
    if (gg(b)) {
      if ("number" === typeof b) return +b === Aa(a);
      if (b instanceof n) {
        b = Oa(b);
        var c = b.ab;
        a = Aa(a);
        return b.bb === a && c === a >> 31;
      }
      return null === b ? null === a : za(b, a);
    }
    return null === a && null === b;
  }
  fg.prototype.$classData = v({ Or: 0 }, !1, "scala.runtime.BoxesRunTime$", {
    Or: 1,
    b: 1,
  });
  var lg;
  function L() {
    lg || (lg = new fg());
    return lg;
  }
  var mg = v({ Rr: 0 }, !1, "scala.runtime.Null$", { Rr: 1, b: 1 });
  function ng() {}
  ng.prototype = new q();
  ng.prototype.constructor = ng;
  function Jd(a, b, c) {
    if (
      b instanceof r ||
      b instanceof t ||
      b instanceof Wa ||
      b instanceof Ua ||
      b instanceof Va
    )
      return b.a[c];
    if (b instanceof Ra) return Na(b.a[c]);
    if (b instanceof Sa || b instanceof Ta || b instanceof Qa) return b.a[c];
    if (null === b) throw new og();
    throw new T(b);
  }
  function $d(a, b, c, d) {
    if (b instanceof r) b.a[c] = d;
    else if (b instanceof t) b.a[c] = d | 0;
    else if (b instanceof Wa) b.a[c] = +d;
    else if (b instanceof Ua) b.a[c] = Oa(d);
    else if (b instanceof Va) b.a[c] = +d;
    else if (b instanceof Ra) b.a[c] = Aa(d);
    else if (b instanceof Sa) b.a[c] = d | 0;
    else if (b instanceof Ta) b.a[c] = d | 0;
    else if (b instanceof Qa) b.a[c] = !!d;
    else {
      if (null === b) throw new og();
      throw new T(b);
    }
  }
  function Bd(a, b) {
    bd();
    if (
      b instanceof r ||
      b instanceof Qa ||
      b instanceof Ra ||
      b instanceof Sa ||
      b instanceof Ta ||
      b instanceof t ||
      b instanceof Ua ||
      b instanceof Va ||
      b instanceof Wa
    )
      a = b.a.length;
    else throw pd("argument type mismatch");
    return a;
  }
  function pg(a) {
    Gd();
    return de(new qg(a), a.cb() + "(", ",");
  }
  ng.prototype.$classData = v({ Tr: 0 }, !1, "scala.runtime.ScalaRunTime$", {
    Tr: 1,
    b: 1,
  });
  var rg;
  function Gd() {
    rg || (rg = new ng());
    return rg;
  }
  function sg() {}
  sg.prototype = new q();
  sg.prototype.constructor = sg;
  sg.prototype.p = function (a, b) {
    a = this.oh(a, b);
    return (-430675100 + ca(5, (a << 13) | (a >>> 19) | 0)) | 0;
  };
  sg.prototype.oh = function (a, b) {
    b = ca(-862048943, b);
    b = ca(461845907, (b << 15) | (b >>> 17) | 0);
    return a ^ b;
  };
  sg.prototype.L = function (a, b) {
    a ^= b;
    a = ca(-2048144789, a ^ ((a >>> 16) | 0));
    a = ca(-1028477387, a ^ ((a >>> 13) | 0));
    return a ^ ((a >>> 16) | 0);
  };
  function tg(a, b) {
    a = b.bb;
    b = b.ab;
    return b === a >> 31 ? a : a ^ b;
  }
  function ug(a, b) {
    a = Ga(b);
    if (a === b) return a;
    a = kg();
    if (-9223372036854775808 > b) {
      a.gh = -2147483648;
      var c = 0;
    } else if (0x7fffffffffffffff <= b) (a.gh = 2147483647), (c = -1);
    else {
      c = b | 0;
      var d = (b / 4294967296) | 0;
      a.gh = 0 > b && 0 !== c ? (-1 + d) | 0 : d;
    }
    a = a.gh;
    return jg(kg(), c, a) === b ? c ^ a : Mc(Nc(), b);
  }
  function vg(a, b) {
    return null === b
      ? 0
      : "number" === typeof b
      ? ug(0, +b)
      : b instanceof n
      ? ((a = Oa(b)), tg(0, new n(a.bb, a.ab)))
      : Ca(b);
  }
  function wg(a, b) {
    throw xg(new yg(), "" + b);
  }
  sg.prototype.$classData = v({ Wr: 0 }, !1, "scala.runtime.Statics$", {
    Wr: 1,
    b: 1,
  });
  var zg;
  function Y() {
    zg || (zg = new sg());
    return zg;
  }
  function vc() {}
  vc.prototype = new q();
  vc.prototype.constructor = vc;
  function tc(a, b) {
    setInterval(
      ((c) => () => {
        je(c);
      })(b),
      15
    );
  }
  vc.prototype.$classData = v(
    { Dr: 0 },
    !1,
    "scala.scalajs.js.timers.package$",
    { Dr: 1, b: 1 }
  );
  var uc;
  function Ag() {}
  Ag.prototype = new q();
  Ag.prototype.constructor = Ag;
  function lb(a) {
    Bg || (Bg = new Ag());
    return a instanceof Cg ? a.Zg : a;
  }
  Ag.prototype.$classData = v({ Mr: 0 }, !1, "scala.scalajs.runtime.package$", {
    Mr: 1,
    b: 1,
  });
  var Bg;
  function Dg(a) {
    this.Uk = a;
  }
  Dg.prototype = new q();
  Dg.prototype.constructor = Dg;
  Dg.prototype.z = function () {
    return "DynamicVariable(" + this.Uk + ")";
  };
  Dg.prototype.$classData = v({ bo: 0 }, !1, "scala.util.DynamicVariable", {
    bo: 1,
    b: 1,
  });
  function Eg() {}
  Eg.prototype = new q();
  Eg.prototype.constructor = Eg;
  function Fg() {}
  Fg.prototype = Eg.prototype;
  Eg.prototype.p = function (a, b) {
    a = this.oh(a, b);
    return (-430675100 + ca(5, (a << 13) | (a >>> 19) | 0)) | 0;
  };
  Eg.prototype.oh = function (a, b) {
    b = ca(-862048943, b);
    b = ca(461845907, (b << 15) | (b >>> 17) | 0);
    return a ^ b;
  };
  Eg.prototype.L = function (a, b) {
    return Gg(a ^ b);
  };
  function Gg(a) {
    a = ca(-2048144789, a ^ ((a >>> 16) | 0));
    a = ca(-1028477387, a ^ ((a >>> 13) | 0));
    return a ^ ((a >>> 16) | 0);
  }
  function Hg(a) {
    var b = Ig(),
      c = a.lb();
    if (0 === c) return Da(a.cb());
    var d = b.p(-889275714, Da(a.cb()));
    for (var f = 0; f < c; ) {
      var g = a.mb(f);
      d = b.p(d, vg(Y(), g));
      f = (1 + f) | 0;
    }
    return b.L(d, c);
  }
  function Jg(a, b, c) {
    var d = 0,
      f = 0,
      g = 0,
      h = 1;
    for (b = b.h(); b.l(); ) {
      var k = b.k();
      k = vg(Y(), k);
      d = (d + k) | 0;
      f ^= k;
      h = ca(h, 1 | k);
      g = (1 + g) | 0;
    }
    c = a.p(c, d);
    c = a.p(c, f);
    c = a.oh(c, h);
    return a.L(c, g);
  }
  function Kg(a) {
    0 === ((32 & a.lh) << 24) >> 24 &&
      0 === ((32 & a.lh) << 24) >> 24 &&
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
      (a.lh = ((32 | a.lh) << 24) >> 24));
    return a.Fk;
  }
  function Lg() {
    this.Fk = null;
    this.lh = 0;
  }
  Lg.prototype = new q();
  Lg.prototype.constructor = Lg;
  Lg.prototype.$classData = v({ Jm: 0 }, !1, "java.lang.Character$", {
    Jm: 1,
    b: 1,
    c: 1,
  });
  var Mg;
  function Ng(a) {
    throw new Og('For input string: "' + a + '"');
  }
  function Pg() {}
  Pg.prototype = new q();
  Pg.prototype.constructor = Pg;
  function re(a, b) {
    a = null === b ? 0 : b.length | 0;
    0 === a && Ng(b);
    var c = 65535 & (b.charCodeAt(0) | 0),
      d = 45 === c,
      f = d ? 2147483648 : 2147483647;
    c = d || 43 === c ? 1 : 0;
    c >= (b.length | 0) && Ng(b);
    for (var g = 0; c !== a; ) {
      Mg || (Mg = new Lg());
      var h = Mg;
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
        var l = Kg(h);
        a: {
          O();
          for (var p = k, u = 0, A = l.a.length; ; ) {
            if (u === A) {
              l = (-1 - u) | 0;
              break a;
            }
            var G = (((u + A) | 0) >>> 1) | 0,
              K = l.a[G];
            if (p < K) A = G;
            else {
              if (J(L(), p, K)) {
                l = G;
                break a;
              }
              u = (1 + G) | 0;
            }
          }
        }
        l = 0 > l ? (-2 - l) | 0 : l;
        0 > l ? (h = -1) : ((h = (k - Kg(h).a[l]) | 0), (h = 9 < h ? -1 : h));
      }
      h = 10 > h ? h : -1;
      g = 10 * g + h;
      (-1 === h || g > f) && Ng(b);
      c = (1 + c) | 0;
    }
    return d ? -g | 0 : g | 0;
  }
  function Je(a, b) {
    a = (b - (1431655765 & (b >> 1))) | 0;
    a = ((858993459 & a) + (858993459 & (a >> 2))) | 0;
    return ca(16843009, 252645135 & ((a + (a >> 4)) | 0)) >> 24;
  }
  Pg.prototype.$classData = v({ Pm: 0 }, !1, "java.lang.Integer$", {
    Pm: 1,
    b: 1,
    c: 1,
  });
  var lh;
  function se() {
    lh || (lh = new Pg());
    return lh;
  }
  function mh() {}
  mh.prototype = new q();
  mh.prototype.constructor = mh;
  function nh() {}
  nh.prototype = mh.prototype;
  function gg(a) {
    return a instanceof mh || "number" === typeof a;
  }
  function oh() {}
  oh.prototype = new q();
  oh.prototype.constructor = oh;
  oh.prototype.$classData = v({ Ym: 0 }, !1, "java.lang.String$", {
    Ym: 1,
    b: 1,
    c: 1,
  });
  var ph;
  function ze(a, b) {
    a.Mk = b;
    a.cn = null;
    a.dn = !0;
    a.en = !0;
    a.Ak();
  }
  class qh extends Error {
    constructor() {
      super();
      this.cn = this.Mk = null;
      this.en = this.dn = !1;
    }
    kh() {
      return this.Mk;
    }
    Ak() {
      "[object Error]" !== Object.prototype.toString.call(this) &&
        void 0 !== Error.captureStackTrace &&
        Error.captureStackTrace(this);
    }
    z() {
      var a = ya(this),
        b = this.kh();
      return null === b ? a : a + ": " + b;
    }
    H() {
      return Ba.prototype.H.call(this);
    }
    y(a) {
      return Ba.prototype.y.call(this, a);
    }
    get ["message"]() {
      var a = this.kh();
      return null === a ? "" : a;
    }
    get ["name"]() {
      return ya(this);
    }
    ["toString"]() {
      return this.z();
    }
  }
  function rh() {
    this.Ui = this.Ti = 0;
    this.pn = !1;
  }
  rh.prototype = new q();
  rh.prototype.constructor = rh;
  function sh(a, b) {
    var c = a.Ui,
      d = 15525485 * c + 11;
    c =
      16777215 &
      ((((d / 16777216) | 0) +
        (16777215 & ((1502 * c + 15525485 * a.Ti) | 0))) |
        0);
    d = 16777215 & (d | 0);
    a.Ti = c;
    a.Ui = d;
    return (((c << 8) | (d >> 16)) >>> ((32 - b) | 0)) | 0;
  }
  function th(a, b) {
    if (0 >= b) throw pd("n must be positive");
    if ((b & (-b | 0)) === b) a = sh(a, 31) >> da(b);
    else
      a: for (;;) {
        var c = sh(a, 31);
        var d = c;
        var f = b;
        if (0 === f) throw new uh();
        d = d % f | 0;
        if (!(0 > ((((c - d) | 0) + ((-1 + b) | 0)) | 0))) {
          a = d;
          break a;
        }
      }
    return a;
  }
  rh.prototype.$classData = v({ nn: 0 }, !1, "java.util.Random", {
    nn: 1,
    b: 1,
    c: 1,
  });
  function vh() {
    var a = 4294967296 * +Math.random();
    return Ga(+Math.floor(a) - 2147483648);
  }
  function wh() {}
  wh.prototype = new q();
  wh.prototype.constructor = wh;
  wh.prototype.$classData = v({ on: 0 }, !1, "java.util.Random$", {
    on: 1,
    b: 1,
    c: 1,
  });
  var xh;
  function yh(a, b) {
    if (0 === (-2097152 & b)) b = "" + (4294967296 * b + +(a >>> 0));
    else {
      var c = (((32 + da(1e9)) | 0) - (0 !== b ? da(b) : (32 + da(a)) | 0)) | 0,
        d = c,
        f = 0 === (32 & d) ? 1e9 << d : 0;
      d = 0 === (32 & d) ? (5e8 >>> ((31 - d) | 0)) | 0 | (0 << d) : 1e9 << d;
      var g = a,
        h = b;
      for (a = b = 0; 0 <= c && 0 !== (-2097152 & h); ) {
        var k = g,
          l = h,
          p = f,
          u = d;
        if (
          l === u
            ? (-2147483648 ^ k) >= (-2147483648 ^ p)
            : (-2147483648 ^ l) >= (-2147483648 ^ u)
        )
          (k = h),
            (l = d),
            (h = (g - f) | 0),
            (k =
              (-2147483648 ^ h) > (-2147483648 ^ g)
                ? (-1 + ((k - l) | 0)) | 0
                : (k - l) | 0),
            (g = h),
            (h = k),
            32 > c ? (b |= 1 << c) : (a |= 1 << c);
        c = (-1 + c) | 0;
        k = (d >>> 1) | 0;
        f = (f >>> 1) | 0 | (d << 31);
        d = k;
      }
      c = h;
      if (
        0 === c
          ? -1147483648 <= (-2147483648 ^ g)
          : -2147483648 <= (-2147483648 ^ c)
      )
        (c = 4294967296 * h + +(g >>> 0)),
          (g = c / 1e9),
          (f = (g / 4294967296) | 0),
          (d = b),
          (b = g = (d + (g | 0)) | 0),
          (a =
            (-2147483648 ^ g) < (-2147483648 ^ d)
              ? (1 + ((a + f) | 0)) | 0
              : (a + f) | 0),
          (g = c % 1e9 | 0);
      c = "" + g;
      b =
        "" +
        (4294967296 * a + +(b >>> 0)) +
        "000000000".substring(c.length | 0) +
        c;
    }
    return b;
  }
  function zh() {
    this.gh = 0;
  }
  zh.prototype = new q();
  zh.prototype.constructor = zh;
  function jg(a, b, c) {
    return 0 > c
      ? -(4294967296 * +((0 !== b ? ~c : -c | 0) >>> 0) + +((-b | 0) >>> 0))
      : 4294967296 * c + +(b >>> 0);
  }
  zh.prototype.$classData = v(
    { vm: 0 },
    !1,
    "org.scalajs.linker.runtime.RuntimeLong$",
    { vm: 1, b: 1, c: 1 }
  );
  var Ah;
  function kg() {
    Ah || (Ah = new zh());
    return Ah;
  }
  function Bh() {
    this.Zi = null;
    Ch = this;
    this.Zi = new Dh();
  }
  Bh.prototype = new q();
  Bh.prototype.constructor = Bh;
  Bh.prototype.$classData = v({ rn: 0 }, !1, "scala.$less$colon$less$", {
    rn: 1,
    b: 1,
    c: 1,
  });
  var Ch;
  function Eh() {
    Ch || (Ch = new Bh());
    return Ch;
  }
  function Fh() {}
  Fh.prototype = new q();
  Fh.prototype.constructor = Fh;
  function Gh(a, b, c, d, f, g) {
    a = ka(b);
    var h;
    if ((h = !!a.xc.isArrayClass)) h = !!ka(d).xc.isAssignableFrom(a.xc);
    if (h) b.I(c, d, f, g);
    else
      for (a = c, c = (c + g) | 0; a < c; )
        $d(Gd(), d, f, Jd(Gd(), b, a)), (a = (1 + a) | 0), (f = (1 + f) | 0);
  }
  Fh.prototype.$classData = v({ tn: 0 }, !1, "scala.Array$", {
    tn: 1,
    b: 1,
    c: 1,
  });
  var Hh;
  function Ih() {
    Hh || (Hh = new Fh());
    return Hh;
  }
  function Jh() {
    this.Sk = null;
    Kh = this;
    this.Sk = new Dg(Rc().Kk);
    Rc();
  }
  Jh.prototype = new q();
  Jh.prototype.constructor = Jh;
  Jh.prototype.$classData = v({ vn: 0 }, !1, "scala.Console$", {
    vn: 1,
    b: 1,
    hs: 1,
  });
  var Kh;
  function Lh() {}
  Lh.prototype = new xd();
  Lh.prototype.constructor = Lh;
  function Mh() {}
  Mh.prototype = Lh.prototype;
  function Nh(a) {
    return null === a
      ? null
      : 0 === a.a.length
      ? ((a = Oh()), Ph(), a.Ij)
      : new Qh(a);
  }
  function Rh(a, b) {
    return null !== b ? new Sh(b) : null;
  }
  function Th() {}
  Th.prototype = new q();
  Th.prototype.constructor = Th;
  Th.prototype.z = function () {
    return "Tuple2";
  };
  Th.prototype.$classData = v({ xm: 0 }, !1, "scala.Tuple2$", {
    xm: 1,
    b: 1,
    c: 1,
  });
  var Uh;
  function Vh(a, b, c) {
    return a.W(new Wh(b, c));
  }
  function Xh() {}
  Xh.prototype = new q();
  Xh.prototype.constructor = Xh;
  function Yh() {}
  Yh.prototype = Xh.prototype;
  function Kf() {}
  Kf.prototype = new q();
  Kf.prototype.constructor = Kf;
  Kf.prototype.z = function () {
    return "::";
  };
  Kf.prototype.$classData = v(
    { Bp: 0 },
    !1,
    "scala.collection.immutable.$colon$colon$",
    { Bp: 1, b: 1, c: 1 }
  );
  var Jf;
  function Zh(a, b) {
    this.lf = this.jc = 0;
    this.fe = null;
    this.Ac = 0;
    this.Rf = this.Rd = null;
    for (me(this, b.kc); this.l(); )
      (b = this.fe.zd(this.jc)),
        $h(a, a.ge, this.fe.gc(this.jc), b, Od(Qd(), b), 0),
        (this.jc = (1 + this.jc) | 0);
  }
  Zh.prototype = new oe();
  Zh.prototype.constructor = Zh;
  Zh.prototype.$classData = v(
    { Hp: 0 },
    !1,
    "scala.collection.immutable.HashSetBuilder$$anon$1",
    { Hp: 1, ml: 1, b: 1 }
  );
  function ai() {}
  ai.prototype = new q();
  ai.prototype.constructor = ai;
  function bi(a, b, c, d, f) {
    throw pd(
      b +
        (f ? " to " : " until ") +
        c +
        " by " +
        d +
        ": seqs cannot contain more than Int.MaxValue elements."
    );
  }
  ai.prototype.$classData = v(
    { cq: 0 },
    !1,
    "scala.collection.immutable.Range$",
    { cq: 1, b: 1, c: 1 }
  );
  var ci;
  function Pf() {
    ci || (ci = new ai());
    return ci;
  }
  function di() {}
  di.prototype = new Be();
  di.prototype.constructor = di;
  function ei() {}
  ei.prototype = di.prototype;
  function fi(a, b) {
    if (b === a) {
      var c = a.wb;
      gi || (gi = new hi());
      c.call(a, gi.we(b));
    } else for (b = b.h(); b.l(); ) a.Ia(b.k());
    return a;
  }
  function Of() {}
  Of.prototype = new q();
  Of.prototype.constructor = Of;
  Of.prototype.$classData = v(
    { zr: 0 },
    !1,
    "scala.collection.mutable.StringBuilder$",
    { zr: 1, b: 1, c: 1 }
  );
  var Nf;
  function Tf() {}
  Tf.prototype = new q();
  Tf.prototype.constructor = Tf;
  Tf.prototype.$classData = v({ En: 0 }, !1, "scala.math.Fractional$", {
    En: 1,
    b: 1,
    c: 1,
  });
  var Sf;
  function Vf() {}
  Vf.prototype = new q();
  Vf.prototype.constructor = Vf;
  Vf.prototype.$classData = v({ Fn: 0 }, !1, "scala.math.Integral$", {
    Fn: 1,
    b: 1,
    c: 1,
  });
  var Uf;
  function Xf() {}
  Xf.prototype = new q();
  Xf.prototype.constructor = Xf;
  Xf.prototype.$classData = v({ Gn: 0 }, !1, "scala.math.Numeric$", {
    Gn: 1,
    b: 1,
    c: 1,
  });
  var Wf;
  function ii() {}
  ii.prototype = new q();
  ii.prototype.constructor = ii;
  function md(a, b) {
    b === m(eb)
      ? (a = ji())
      : b === m(fb)
      ? (a = ki())
      : b === m(db)
      ? (a = li())
      : b === m(gb)
      ? (a = Te())
      : b === m(hb)
      ? (a = mi())
      : b === m(ib)
      ? (a = ni())
      : b === m(jb)
      ? (a = oi())
      : b === m(cb)
      ? (a = pi())
      : b === m(bb)
      ? (a = qi())
      : b === m(w)
      ? (a = Ph())
      : b === m(ri)
      ? (si || (si = new ti()), (a = si))
      : b === m(mg)
      ? (ui || (ui = new vi()), (a = ui))
      : (a = new wi(b));
    return a;
  }
  ii.prototype.$classData = v({ Ln: 0 }, !1, "scala.reflect.ClassTag$", {
    Ln: 1,
    b: 1,
    c: 1,
  });
  var xi;
  function nd() {
    xi || (xi = new ii());
    return xi;
  }
  function yi() {}
  yi.prototype = new q();
  yi.prototype.constructor = yi;
  yi.prototype.$classData = v({ Nn: 0 }, !1, "scala.reflect.Manifest$", {
    Nn: 1,
    b: 1,
    c: 1,
  });
  var zi;
  function Ai() {}
  Ai.prototype = new q();
  Ai.prototype.constructor = Ai;
  function Bi() {}
  Bi.prototype = Ai.prototype;
  Ai.prototype.z = function () {
    return "\x3cfunction0\x3e";
  };
  function Ci() {}
  Ci.prototype = new q();
  Ci.prototype.constructor = Ci;
  function Di() {}
  Di.prototype = Ci.prototype;
  Ci.prototype.z = function () {
    return "\x3cfunction1\x3e";
  };
  function Ei() {}
  Ei.prototype = new q();
  Ei.prototype.constructor = Ei;
  function Fi() {}
  Fi.prototype = Ei.prototype;
  Ei.prototype.z = function () {
    return "\x3cfunction2\x3e";
  };
  function Gi(a) {
    this.eg = a;
  }
  Gi.prototype = new q();
  Gi.prototype.constructor = Gi;
  Gi.prototype.z = function () {
    return "" + this.eg;
  };
  Gi.prototype.$classData = v({ Nr: 0 }, !1, "scala.runtime.BooleanRef", {
    Nr: 1,
    b: 1,
    c: 1,
  });
  function Hi(a) {
    this.Qj = a;
  }
  Hi.prototype = new q();
  Hi.prototype.constructor = Hi;
  Hi.prototype.z = function () {
    return "" + this.Qj;
  };
  Hi.prototype.$classData = v({ Pr: 0 }, !1, "scala.runtime.IntRef", {
    Pr: 1,
    b: 1,
    c: 1,
  });
  function Ii(a) {
    this.ha = a;
  }
  Ii.prototype = new q();
  Ii.prototype.constructor = Ii;
  Ii.prototype.z = function () {
    return "" + this.ha;
  };
  Ii.prototype.$classData = v({ Sr: 0 }, !1, "scala.runtime.ObjectRef", {
    Sr: 1,
    b: 1,
    c: 1,
  });
  function ag() {}
  ag.prototype = new q();
  ag.prototype.constructor = ag;
  ag.prototype.$classData = v({ co: 0 }, !1, "scala.util.Either$", {
    co: 1,
    b: 1,
    c: 1,
  });
  var $f;
  function cg() {}
  cg.prototype = new q();
  cg.prototype.constructor = cg;
  cg.prototype.z = function () {
    return "Left";
  };
  cg.prototype.$classData = v({ eo: 0 }, !1, "scala.util.Left$", {
    eo: 1,
    b: 1,
    c: 1,
  });
  var bg;
  function Ji() {
    this.zb = null;
  }
  Ji.prototype = new q();
  Ji.prototype.constructor = Ji;
  function Ki() {}
  Ki.prototype = Ji.prototype;
  function eg() {}
  eg.prototype = new q();
  eg.prototype.constructor = eg;
  eg.prototype.z = function () {
    return "Right";
  };
  eg.prototype.$classData = v({ go: 0 }, !1, "scala.util.Right$", {
    go: 1,
    b: 1,
    c: 1,
  });
  var dg;
  function Li() {
    this.sh = this.Vk = this.Mc = 0;
    Mi = this;
    this.Mc = Da("Seq");
    this.Vk = Da("Map");
    this.sh = Da("Set");
    Jg(this, vb().cj, this.Vk);
  }
  Li.prototype = new Fg();
  Li.prototype.constructor = Li;
  function Ni(a) {
    var b = Ig();
    if (a && a.$classData && a.$classData.Ib.nb)
      a: {
        var c = b.Mc,
          d = a.q();
        switch (d) {
          case 0:
            b = b.L(c, 0);
            break a;
          case 1:
            d = c;
            a = a.v(0);
            b = b.L(b.p(d, vg(Y(), a)), 1);
            break a;
          default:
            var f = a.v(0),
              g = vg(Y(), f);
            f = c = b.p(c, g);
            var h = a.v(1);
            h = vg(Y(), h);
            var k = (h - g) | 0;
            for (g = 2; g < d; ) {
              c = b.p(c, h);
              var l = a.v(g);
              l = vg(Y(), l);
              if (k !== ((l - h) | 0)) {
                c = b.p(c, l);
                for (g = (1 + g) | 0; g < d; )
                  (f = a.v(g)), (c = b.p(c, vg(Y(), f))), (g = (1 + g) | 0);
                b = b.L(c, d);
                break a;
              }
              h = l;
              g = (1 + g) | 0;
            }
            b = Gg(b.p(b.p(f, k), h));
        }
      }
    else if (a instanceof Oi) {
      d = b.Mc;
      g = 0;
      h = d;
      c = f = l = k = 0;
      for (var p = a; !p.e(); ) {
        a = p.u();
        p = p.w();
        a = vg(Y(), a);
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
        ? ((a = l), (b = Gg(b.p(b.p(b.p(d, c), a), f))))
        : (b = b.L(h, g));
    } else
      a: if (((d = b.Mc), (a = a.h()), a.l()))
        if (((c = a.k()), a.l())) {
          f = a.k();
          h = vg(Y(), c);
          c = d = b.p(d, h);
          g = vg(Y(), f);
          h = (g - h) | 0;
          for (f = 2; a.l(); ) {
            d = b.p(d, g);
            k = a.k();
            k = vg(Y(), k);
            if (h !== ((k - g) | 0)) {
              d = b.p(d, k);
              for (f = (1 + f) | 0; a.l(); )
                (c = a.k()), (d = b.p(d, vg(Y(), c))), (f = (1 + f) | 0);
              b = b.L(d, f);
              break a;
            }
            g = k;
            f = (1 + f) | 0;
          }
          b = Gg(b.p(b.p(c, h), g));
        } else b = b.L(b.p(d, vg(Y(), c)), 1);
      else b = b.L(d, 0);
    return b;
  }
  Li.prototype.$classData = v(
    { ho: 0 },
    !1,
    "scala.util.hashing.MurmurHash3$",
    { ho: 1, Cs: 1, b: 1 }
  );
  var Mi;
  function Ig() {
    Mi || (Mi = new Li());
    return Mi;
  }
  var ta = v(
      { Gm: 0 },
      !1,
      "java.lang.Boolean",
      { Gm: 1, b: 1, c: 1, ye: 1 },
      (a) => "boolean" === typeof a
    ),
    xa = v(
      { Im: 0 },
      !1,
      "java.lang.Character",
      { Im: 1, b: 1, c: 1, ye: 1 },
      (a) => a instanceof ha
    );
  class Pi extends qh {}
  class Qi extends qh {}
  Qi.prototype.$classData = v({ hc: 0 }, !1, "java.lang.Exception", {
    hc: 1,
    ec: 1,
    b: 1,
    c: 1,
  });
  function Ri() {}
  Ri.prototype = new q();
  Ri.prototype.constructor = Ri;
  function Si() {}
  Si.prototype = Ri.prototype;
  function Ti() {
    Ui = this;
    vb();
    xc();
    Vi || (Vi = new Wi());
    Xi();
    Uh || (Uh = new Th());
    zi || (zi = new yi());
    Yi || (Yi = new Zi());
  }
  Ti.prototype = new Mh();
  Ti.prototype.constructor = Ti;
  Ti.prototype.$classData = v({ zn: 0 }, !1, "scala.Predef$", {
    zn: 1,
    ds: 1,
    es: 1,
    b: 1,
  });
  var Ui;
  function wc() {
    Ui || (Ui = new Ti());
    return Ui;
  }
  function $i() {
    this.hj = null;
  }
  $i.prototype = new q();
  $i.prototype.constructor = $i;
  function aj() {}
  aj.prototype = $i.prototype;
  $i.prototype.Bb = function () {
    var a = this.hj;
    Se();
    return a.Ij;
  };
  $i.prototype.W = function (a) {
    Se();
    var b = a.t();
    if (-1 < b) {
      var c = new r(b);
      a = a.h();
      for (var d = 0; d < b; ) (c.a[d] = a.k()), (d = (1 + d) | 0);
      b = c;
    } else {
      b = [];
      for (c = a.h(); c.l(); ) (a = c.k()), b.push(null === a ? null : a);
      b = new r(b);
    }
    return bj(0, b);
  };
  $i.prototype.ea = function () {
    var a = this.hj;
    Se();
    var b = new cj(m(w));
    return new dj(b, new D((() => (c) => bj(Oh(), c))(a)));
  };
  $i.prototype.gd = function (a) {
    Se();
    var b = a.t();
    if (-1 < b) {
      var c = new r(b);
      a = a.h();
      for (var d = 0; d < b; ) (c.a[d] = a.k()), (d = (1 + d) | 0);
      b = c;
    } else {
      b = [];
      for (c = a.h(); c.l(); ) (a = c.k()), b.push(null === a ? null : a);
      b = new r(b);
    }
    return bj(0, b);
  };
  function ej() {
    this.ee = null;
  }
  ej.prototype = new q();
  ej.prototype.constructor = ej;
  function fj() {}
  fj.prototype = ej.prototype;
  ej.prototype.Bb = function () {
    return this.ee.Bb();
  };
  ej.prototype.W = function (a) {
    return this.ee.W(a);
  };
  ej.prototype.ea = function () {
    return this.ee.ea();
  };
  function gj(a, b) {
    if (0 > b) return 1;
    var c = a.t();
    if (0 <= c) return c === b ? 0 : c < b ? -1 : 1;
    c = 0;
    for (a = a.h(); a.l(); ) {
      if (c === b) return 1;
      a.k();
      c = (1 + c) | 0;
    }
    return (c - b) | 0;
  }
  function hj(a) {
    if (a.e()) throw ((a = new ij()), ze(a, null), a);
    return a.Jb(1);
  }
  function jj(a, b) {
    var c = a.X();
    a = Td(b) ? new kj(a, b) : a.h().wd(new H(((d, f) => () => f.h())(a, b)));
    return c.W(a);
  }
  function lj(a, b) {
    var c = mj(new nj(), a, new D(((d, f) => (g) => f.m(g).dc())(a, b)));
    b = mj(new nj(), a, new D(((d, f) => (g) => f.m(g).qc())(a, b)));
    return Hd(new Id(), a.X().W(c), a.X().W(b));
  }
  function oj(a, b) {
    this.Lf = a;
    this.uh = b;
  }
  oj.prototype = new Yh();
  oj.prototype.constructor = oj;
  e = oj.prototype;
  e.da = function (a) {
    return this.Lf.X().W(mj(new nj(), new pj(this.Lf, this.uh, !1), a));
  };
  e.Cb = function (a) {
    return this.Lf.X().W(new qj(new pj(this.Lf, this.uh, !1), a));
  };
  e.N = function (a) {
    new pj(this.Lf, this.uh, !1).N(a);
  };
  function rj(a, b) {
    return new oj(
      a.Lf,
      new D(((c, d) => (f) => !!c.uh.m(f) && !!d.m(f))(a, b))
    );
  }
  e.Hc = function (a) {
    return rj(this, a);
  };
  e.$classData = v({ Mo: 0 }, !1, "scala.collection.IterableOps$WithFilter", {
    Mo: 1,
    ll: 1,
    b: 1,
    c: 1,
  });
  function sj(a, b, c) {
    var d = 0 < c ? c : 0;
    for (a.xd(c); a.l(); ) {
      if (b.m(a.k())) return d;
      d = (1 + d) | 0;
    }
    return -1;
  }
  function tj(a, b) {
    for (var c = 0; c < b && a.l(); ) a.k(), (c = (1 + c) | 0);
    return a;
  }
  function uj() {
    this.Z = null;
    vj = this;
    this.Z = new wj();
  }
  uj.prototype = new q();
  uj.prototype.constructor = uj;
  uj.prototype.ea = function () {
    return new xj();
  };
  uj.prototype.Bb = function () {
    return this.Z;
  };
  uj.prototype.W = function (a) {
    return a.h();
  };
  uj.prototype.$classData = v({ No: 0 }, !1, "scala.collection.Iterator$", {
    No: 1,
    b: 1,
    Eb: 1,
    c: 1,
  });
  var vj;
  function W() {
    vj || (vj = new uj());
    return vj;
  }
  function yj() {}
  yj.prototype = new q();
  yj.prototype.constructor = yj;
  function zj(a, b) {
    if (b && b.$classData && b.$classData.Ib.Rb) return b;
    if (Td(b)) return new Aj(new H(((c, d) => () => d.h())(a, b)));
    a = Bj(X(), b);
    return Cj(new Dj(), a);
  }
  yj.prototype.ea = function () {
    var a = new Ej();
    return new dj(a, new D((() => (b) => zj(Fj(), b))(this)));
  };
  yj.prototype.Bb = function () {
    Gj || (Gj = new Hj());
    return Gj;
  };
  yj.prototype.W = function (a) {
    return zj(this, a);
  };
  yj.prototype.$classData = v({ gp: 0 }, !1, "scala.collection.View$", {
    gp: 1,
    b: 1,
    Eb: 1,
    c: 1,
  });
  var tk;
  function Fj() {
    tk || (tk = new yj());
    return tk;
  }
  function Re(a, b, c, d, f, g) {
    this.R = a;
    this.Ma = b;
    this.Ab = c;
    this.Yb = d;
    this.Xa = f;
    this.zc = g;
  }
  Re.prototype = new ei();
  Re.prototype.constructor = Re;
  e = Re.prototype;
  e.Sa = function () {
    return this.Xa;
  };
  e.vd = function () {
    return this.zc;
  };
  e.gc = function (a) {
    return this.Ab.a[a];
  };
  e.zd = function (a) {
    return this.Yb.a[a];
  };
  e.Od = function (a) {
    return this.Ab.a[(((-1 + this.Ab.a.length) | 0) - a) | 0];
  };
  e.ug = function (a, b, c, d) {
    var f = Ge(P(), c, d),
      g = He(P(), f);
    return 0 !== (this.R & g)
      ? ((c = Ke(P(), this.R, f, g)),
        this.Yb.a[c] === b && J(L(), a, this.gc(c)))
      : 0 !== (this.Ma & g)
      ? ((f = Ke(P(), this.Ma, f, g)), this.Od(f).ug(a, b, c, (5 + d) | 0))
      : !1;
  };
  function uk(a, b, c, d, f) {
    var g = Ge(P(), d, f),
      h = He(P(), g);
    if (0 !== (a.R & h)) {
      g = Ke(P(), a.R, g, h);
      var k = a.gc(g);
      if (Object.is(k, b)) return a;
      var l = a.zd(g);
      g = Od(Qd(), l);
      if (c === l && J(L(), k, b)) return a;
      d = vk(a, k, l, g, b, c, d, (5 + f) | 0);
      c = wk(a, h);
      f = (((-1 + a.Ab.a.length) | 0) - xk(a, h)) | 0;
      k = a.Ab;
      b = new r(k.a.length);
      k.I(0, b, 0, c);
      k.I((1 + c) | 0, b, c, (f - c) | 0);
      b.a[f] = d;
      k.I((1 + f) | 0, b, (1 + f) | 0, (-1 + ((k.a.length - f) | 0)) | 0);
      c = Ce(a.Yb, c);
      return new Re(
        a.R ^ h,
        a.Ma | h,
        b,
        c,
        (((-1 + a.Xa) | 0) + d.Sa()) | 0,
        (((a.zc - g) | 0) + d.vd()) | 0
      );
    }
    if (0 !== (a.Ma & h))
      return (
        (g = Ke(P(), a.Ma, g, h)),
        (g = a.Od(g)),
        (d = g.Ml(b, c, d, (5 + f) | 0)),
        g === d ? a : yk(a, h, g, d)
      );
    f = wk(a, h);
    k = a.Ab;
    g = new r((1 + k.a.length) | 0);
    k.I(0, g, 0, f);
    g.a[f] = b;
    k.I(f, g, (1 + f) | 0, (k.a.length - f) | 0);
    b = De(a.Yb, f, c);
    return new Re(a.R | h, a.Ma, g, b, (1 + a.Xa) | 0, (a.zc + d) | 0);
  }
  function zk(a, b, c, d, f) {
    var g = Ge(P(), d, f),
      h = He(P(), g);
    if (0 !== (a.R & h)) {
      g = Ke(P(), a.R, g, h);
      c = a.gc(g);
      if (J(L(), c, b)) {
        b = a.R;
        2 === Je(se(), b) ? ((b = a.Ma), (b = 0 === Je(se(), b))) : (b = !1);
        if (b) {
          h = 0 === f ? a.R ^ h : He(P(), Ge(P(), d, 0));
          if (0 === g) {
            d = [a.gc(1)];
            f = B(new C(), d);
            Se();
            d = f.q();
            d = new r(d);
            f = new Ak(f);
            f = new Bk(f);
            for (g = 0; f.l(); ) (d.a[g] = f.k()), (g = (1 + g) | 0);
            return new Re(
              h,
              0,
              d,
              new t(new Int32Array([a.Yb.a[1]])),
              (-1 + a.Xa) | 0,
              Od(Qd(), a.Yb.a[1])
            );
          }
          d = [a.gc(0)];
          f = B(new C(), d);
          Se();
          d = f.q();
          d = new r(d);
          f = new Ak(f);
          f = new Bk(f);
          for (g = 0; f.l(); ) (d.a[g] = f.k()), (g = (1 + g) | 0);
          return new Re(
            h,
            0,
            d,
            new t(new Int32Array([a.Yb.a[0]])),
            (-1 + a.Xa) | 0,
            Od(Qd(), a.Yb.a[0])
          );
        }
        g = wk(a, h);
        b = a.Ab;
        f = new r((-1 + b.a.length) | 0);
        b.I(0, f, 0, g);
        b.I((1 + g) | 0, f, g, (-1 + ((b.a.length - g) | 0)) | 0);
        g = Ce(a.Yb, g);
        return new Re(a.R ^ h, a.Ma, f, g, (-1 + a.Xa) | 0, (a.zc - d) | 0);
      }
      return a;
    }
    if (0 !== (a.Ma & h)) {
      g = Ke(P(), a.Ma, g, h);
      g = a.Od(g);
      d = g.Qk(b, c, d, (5 + f) | 0);
      if (d === g) return a;
      f = d.Sa();
      if (1 === f) {
        if (a.Xa === g.Sa()) a = d;
        else {
          b = (((-1 + a.Ab.a.length) | 0) - xk(a, h)) | 0;
          c = wk(a, h);
          var k = a.Ab;
          f = new r(k.a.length);
          k.I(0, f, 0, c);
          f.a[c] = d.gc(0);
          k.I(c, f, (1 + c) | 0, (b - c) | 0);
          k.I((1 + b) | 0, f, (1 + b) | 0, (-1 + ((k.a.length - b) | 0)) | 0);
          b = De(a.Yb, c, d.zd(0));
          a = new Re(
            a.R | h,
            a.Ma ^ h,
            f,
            b,
            (1 + ((a.Xa - g.Sa()) | 0)) | 0,
            (((a.zc - g.vd()) | 0) + d.vd()) | 0
          );
        }
        return a;
      }
      if (1 < f) return yk(a, h, g, d);
    }
    return a;
  }
  function vk(a, b, c, d, f, g, h, k) {
    if (32 <= k) return Mf(), new Ck(c, d, Dk(0, B(new C(), [b, f])));
    var l = Ge(P(), d, k),
      p = Ge(P(), h, k);
    if (l !== p) {
      var u = He(P(), l) | He(P(), p);
      d = (d + h) | 0;
      if (l < p) {
        f = B(new C(), [b, f]);
        Se();
        b = f.q();
        b = new r(b);
        f = new Ak(f);
        f = new Bk(f);
        for (h = 0; f.l(); ) (b.a[h] = f.k()), (h = (1 + h) | 0);
        return new Re(u, 0, b, new t(new Int32Array([c, g])), 2, d);
      }
      f = B(new C(), [f, b]);
      Se();
      b = f.q();
      b = new r(b);
      f = new Ak(f);
      f = new Bk(f);
      for (h = 0; f.l(); ) (b.a[h] = f.k()), (h = (1 + h) | 0);
      return new Re(u, 0, b, new t(new Int32Array([g, c])), 2, d);
    }
    u = He(P(), l);
    c = vk(a, b, c, d, f, g, h, (5 + k) | 0);
    d = B(new C(), [c]);
    Se();
    g = d.q();
    g = new r(g);
    d = new Ak(d);
    d = new Bk(d);
    for (b = 0; d.l(); ) (g.a[b] = d.k()), (b = (1 + b) | 0);
    return new Re(0, u, g, vd().$i, c.Sa(), c.vd());
  }
  e.Pi = function () {
    return 0 !== this.R;
  };
  e.Yi = function () {
    var a = this.R;
    return Je(se(), a);
  };
  e.Oi = function () {
    return 0 !== this.Ma;
  };
  e.Pk = function () {
    var a = this.Ma;
    return Je(se(), a);
  };
  function wk(a, b) {
    a = a.R & ((-1 + b) | 0);
    return Je(se(), a);
  }
  function xk(a, b) {
    a = a.Ma & ((-1 + b) | 0);
    return Je(se(), a);
  }
  function yk(a, b, c, d) {
    b = (((-1 + a.Ab.a.length) | 0) - xk(a, b)) | 0;
    var f = a.Ab,
      g = new r(f.a.length);
    f.I(0, g, 0, f.a.length);
    g.a[b] = d;
    return new Re(
      a.R,
      a.Ma,
      g,
      a.Yb,
      (((a.Xa - c.Sa()) | 0) + d.Sa()) | 0,
      (((a.zc - c.vd()) | 0) + d.vd()) | 0
    );
  }
  e.N = function (a) {
    var b = this.R;
    b = Je(se(), b);
    for (var c = 0; c < b; ) a.m(this.gc(c)), (c = (1 + c) | 0);
    b = this.Ma;
    b = Je(se(), b);
    for (c = 0; c < b; ) this.Od(c).N(a), (c = (1 + c) | 0);
  };
  function Ek(a, b, c) {
    if (0 === a.Xa) return a;
    if (1 === a.Xa) return !!b.m(a.gc(0)) !== c ? a : Ue().Zf;
    if (0 === a.Ma) {
      for (
        var d = a.R,
          f = 0 === d ? 32 : (31 - da(d & (-d | 0))) | 0,
          g = (32 - da(a.R)) | 0,
          h = (d = 0),
          k = 0;
        f < g;

      ) {
        var l = He(P(), f);
        if (0 !== (l & a.R)) {
          var p = a.gc(k);
          !!b.m(p) !== c && ((d |= l), (h = (h + Od(Qd(), a.zd(k))) | 0));
          k = (1 + k) | 0;
        }
        f = (1 + f) | 0;
      }
      if (0 === d) return Ue().Zf;
      if (d === a.R) return a;
      b = d;
      b = Je(se(), b);
      c = new r(b);
      g = new t(b);
      k = (32 - da(d)) | 0;
      f = d;
      f = 0 === f ? 32 : (31 - da(f & (-f | 0))) | 0;
      for (l = 0; f < k; )
        (p = He(P(), f)),
          0 !== (p & d) &&
            ((p = Ie(P(), a.R, p)),
            (c.a[l] = a.Ab.a[p]),
            (g.a[l] = a.Yb.a[p]),
            (l = (1 + l) | 0)),
          (f = (1 + f) | 0);
      return new Re(d, 0, c, g, b, h);
    }
    h = a.R | a.Ma;
    d = 0 === h ? 32 : (31 - da(h & (-h | 0))) | 0;
    var u = (32 - da(h)) | 0,
      A = (f = 0),
      G = null;
    l = p = 0;
    k = null;
    for (var K = 0, M = (g = 0), aa = (h = 0), wa = 0, Ia = d; Ia < u; ) {
      var la = He(P(), Ia);
      if (0 !== (la & a.R)) {
        var Ma = a.gc(aa);
        !!b.m(Ma) !== c &&
          ((K |= la),
          (f |= la),
          (M = (1 + M) | 0),
          (h = (h + Od(Qd(), a.zd(aa))) | 0));
        aa = (1 + aa) | 0;
      } else if (0 !== (la & a.Ma)) {
        Ma = a.Od(wa);
        var ra = Ma.Bk(b, c);
        M = (M + ra.Sa()) | 0;
        h = (h + ra.vd()) | 0;
        1 < ra.Sa()
          ? ((g |= la),
            Ma === ra
              ? (p |= la)
              : ((l |= la), null === k && (k = new Fk(16)), Gk(k, ra)))
          : 1 === ra.Sa() &&
            ((K |= la), (A |= la), null === G && (G = new Fk(16)), Gk(G, ra));
        wa = (1 + wa) | 0;
      }
      Ia = (1 + Ia) | 0;
    }
    b = M;
    c = K;
    if (0 === b) a = Ue().Zf;
    else if (b !== a.Xa) {
      M = Je(se(), c);
      K = (M + Je(se(), g)) | 0;
      u = new r(K);
      M = new t(M);
      aa = (32 - da(c | g)) | 0;
      for (Ma = la = Ia = wa = 0; d < aa; )
        (ra = He(P(), d)),
          0 !== (ra & f)
            ? ((u.a[la] = a.gc(wa)),
              (M.a[la] = a.zd(wa)),
              (la = (1 + la) | 0),
              (wa = (1 + wa) | 0))
            : 0 !== (ra & p)
            ? ((u.a[(-1 + ((K - Ma) | 0)) | 0] = a.Od(Ia)),
              (Ma = (1 + Ma) | 0),
              (Ia = (1 + Ia) | 0))
            : 0 !== (ra & A)
            ? ((ra = Hk(G)),
              (u.a[la] = ra.gc(0)),
              (M.a[la] = ra.zd(0)),
              (la = (1 + la) | 0),
              (Ia = (1 + Ia) | 0))
            : 0 !== (ra & l)
            ? ((u.a[(-1 + ((K - Ma) | 0)) | 0] = Hk(k)),
              (Ma = (1 + Ma) | 0),
              (Ia = (1 + Ia) | 0))
            : 0 !== (ra & a.R)
            ? (wa = (1 + wa) | 0)
            : 0 !== (ra & a.Ma) && (Ia = (1 + Ia) | 0),
          (d = (1 + d) | 0);
      a = new Re(c, g, u, M, b, h);
    }
    return a;
  }
  e.y = function (a) {
    if (a instanceof Re) {
      if (this === a) return !0;
      if (
        this.zc === a.zc &&
        this.Ma === a.Ma &&
        this.R === a.R &&
        this.Xa === a.Xa
      ) {
        var b = this.Yb;
        var c = a.Yb;
        b = ed(O(), b, c);
      } else b = !1;
      if (b) {
        b = this.Ab;
        a = a.Ab;
        c = this.Ab.a.length;
        if (b === a) return !0;
        for (var d = !0, f = 0; d && f < c; )
          (d = J(L(), b.a[f], a.a[f])), (f = (1 + f) | 0);
        return d;
      }
    }
    return !1;
  };
  e.H = function () {
    throw Yd("Trie nodes do not support hashing.");
  };
  function Ik(a) {
    var b = a.Ab.o(),
      c = b.a.length,
      d = a.R;
    for (d = Je(se(), d); d < c; ) (b.a[d] = b.a[d].zk()), (d = (1 + d) | 0);
    return new Re(a.R, a.Ma, b, a.Yb.o(), a.Xa, a.zc);
  }
  e.Mi = function (a) {
    var b = this.R;
    b = Je(se(), b);
    for (var c = 0; c < b; ) a.Uc(this.gc(c), this.zd(c)), (c = (1 + c) | 0);
    b = this.Ma;
    b = Je(se(), b);
    for (c = 0; c < b; ) this.Od(c).Mi(a), (c = (1 + c) | 0);
  };
  e.zk = function () {
    return Ik(this);
  };
  e.Bk = function (a, b) {
    return Ek(this, a, b);
  };
  e.Qk = function (a, b, c, d) {
    return zk(this, a, b, c, d);
  };
  e.Ml = function (a, b, c, d) {
    return uk(this, a, b, c, d);
  };
  e.$classData = v(
    { Cp: 0 },
    !1,
    "scala.collection.immutable.BitmapIndexedSetNode",
    { Cp: 1, rq: 1, Aj: 1, b: 1 }
  );
  function Ck(a, b, c) {
    this.Mg = a;
    this.De = b;
    this.Kb = c;
    wc();
    if (!(2 <= this.Kb.q())) throw pd("requirement failed");
  }
  Ck.prototype = new ei();
  Ck.prototype.constructor = Ck;
  e = Ck.prototype;
  e.ug = function (a, b, c) {
    return this.De === c ? Jk(this.Kb, a) : !1;
  };
  e.Ml = function (a, b, c, d) {
    return this.ug(a, b, c, d) ? this : new Ck(b, c, this.Kb.fc(a));
  };
  e.Qk = function (a, b, c, d) {
    if (this.ug(a, b, c, d)) {
      d = Kk(this.Kb, new D(((h, k) => (l) => J(L(), l, k))(this, a)), !0);
      if (1 === d.q()) {
        a = He(P(), Ge(P(), c, 0));
        d = [d.v(0)];
        var f = B(new C(), d);
        Se();
        d = f.q();
        d = new r(d);
        f = new Ak(f);
        f = new Bk(f);
        for (var g = 0; f.l(); ) (d.a[g] = f.k()), (g = (1 + g) | 0);
        return new Re(a, 0, d, new t(new Int32Array([b])), 1, c);
      }
      return new Ck(b, c, d);
    }
    return this;
  };
  e.Oi = function () {
    return !1;
  };
  e.Pk = function () {
    return 0;
  };
  e.Od = function () {
    throw xg(new yg(), "No sub-nodes present in hash-collision leaf node.");
  };
  e.Pi = function () {
    return !0;
  };
  e.Yi = function () {
    return this.Kb.q();
  };
  e.gc = function (a) {
    return this.Kb.v(a);
  };
  e.zd = function () {
    return this.Mg;
  };
  e.Sa = function () {
    return this.Kb.q();
  };
  e.N = function (a) {
    for (var b = this.Kb.h(); b.l(); ) a.m(b.k());
  };
  e.vd = function () {
    return ca(this.Kb.q(), this.De);
  };
  e.Bk = function (a, b) {
    b = Kk(this.Kb, a, b);
    a = b.q();
    if (0 === a) return Ue().Zf;
    if (1 === a) {
      a = He(P(), Ge(P(), this.De, 0));
      b = [b.u()];
      var c = B(new C(), b);
      Se();
      b = c.q();
      b = new r(b);
      c = new Ak(c);
      c = new Bk(c);
      for (var d = 0; c.l(); ) (b.a[d] = c.k()), (d = (1 + d) | 0);
      return new Re(a, 0, b, new t(new Int32Array([this.Mg])), 1, this.De);
    }
    return b.q() === this.Kb.q() ? this : new Ck(this.Mg, this.De, b);
  };
  e.y = function (a) {
    if (a instanceof Ck) {
      if (this === a) return !0;
      if (this.De === a.De && this.Kb.q() === a.Kb.q()) {
        a = a.Kb;
        for (var b = !0, c = this.Kb.h(); b && c.l(); )
          (b = c.k()), (b = Jk(a, b));
        return b;
      }
    }
    return !1;
  };
  e.H = function () {
    throw Yd("Trie nodes do not support hashing.");
  };
  e.Mi = function (a) {
    for (var b = this.Kb.h(); b.l(); ) {
      var c = b.k();
      a.Uc(c, this.Mg);
    }
  };
  e.zk = function () {
    return new Ck(this.Mg, this.De, this.Kb);
  };
  e.$classData = v(
    { Dp: 0 },
    !1,
    "scala.collection.immutable.HashCollisionSetNode",
    { Dp: 1, rq: 1, Aj: 1, b: 1 }
  );
  function Lk() {
    this.Sf = null;
    Mk = this;
    var a = Ue();
    this.Sf = new Nk(a.Zf);
  }
  Lk.prototype = new q();
  Lk.prototype.constructor = Lk;
  Lk.prototype.ea = function () {
    return new Ok();
  };
  Lk.prototype.W = function (a) {
    return a instanceof Nk ? a : 0 === a.t() ? this.Sf : Pk(Qk(new Ok(), a));
  };
  Lk.prototype.Bb = function () {
    return this.Sf;
  };
  Lk.prototype.$classData = v(
    { Fp: 0 },
    !1,
    "scala.collection.immutable.HashSet$",
    { Fp: 1, b: 1, Eb: 1, c: 1 }
  );
  var Mk;
  function Rk() {
    Mk || (Mk = new Lk());
    return Mk;
  }
  function Sk(a, b) {
    this.Sp = a;
    this.Tp = b;
  }
  Sk.prototype = new q();
  Sk.prototype.constructor = Sk;
  Sk.prototype.u = function () {
    return this.Sp;
  };
  Sk.prototype.Ta = function () {
    return this.Tp;
  };
  Sk.prototype.$classData = v(
    { Rp: 0 },
    !1,
    "scala.collection.immutable.LazyList$State$Cons",
    { Rp: 1, b: 1, Qp: 1, c: 1 }
  );
  function Tk() {}
  Tk.prototype = new q();
  Tk.prototype.constructor = Tk;
  Tk.prototype.Ag = function () {
    throw Uk("head of empty lazy list");
  };
  Tk.prototype.Ta = function () {
    throw Yd("tail of empty lazy list");
  };
  Tk.prototype.u = function () {
    this.Ag();
  };
  Tk.prototype.$classData = v(
    { Up: 0 },
    !1,
    "scala.collection.immutable.LazyList$State$Empty$",
    { Up: 1, b: 1, Qp: 1, c: 1 }
  );
  var Vk;
  function Wk() {
    Vk || (Vk = new Tk());
    return Vk;
  }
  function Xk(a, b) {
    this.Og = null;
    this.Og = Yk(a, b);
  }
  Xk.prototype = new Yh();
  Xk.prototype.constructor = Xk;
  e = Xk.prototype;
  e.If = function (a) {
    return this.Og.If(a);
  };
  e.vg = function (a) {
    return this.Og.vg(a);
  };
  e.N = function (a) {
    this.Og.N(a);
  };
  e.Hc = function (a) {
    return new Xk(this.Og, a);
  };
  e.Cb = function (a) {
    return this.vg(a);
  };
  e.da = function (a) {
    return this.If(a);
  };
  e.$classData = v(
    { Vp: 0 },
    !1,
    "scala.collection.immutable.LazyList$WithFilter",
    { Vp: 1, ll: 1, b: 1, c: 1 }
  );
  function Wi() {}
  Wi.prototype = new q();
  Wi.prototype.constructor = Wi;
  Wi.prototype.$classData = v(
    { Yp: 0 },
    !1,
    "scala.collection.immutable.Map$",
    { Yp: 1, b: 1, Is: 1, c: 1 }
  );
  var Vi;
  function Zk() {}
  Zk.prototype = new q();
  Zk.prototype.constructor = Zk;
  function zc(a) {
    return a && a.$classData && a.$classData.Ib.Ms
      ? $k(al(new bl(), a))
      : 0 === a.t()
      ? cl()
      : a && a.$classData && a.$classData.Ib.Yf
      ? a
      : $k(al(new bl(), a));
  }
  Zk.prototype.ea = function () {
    return new bl();
  };
  Zk.prototype.W = function (a) {
    return zc(a);
  };
  Zk.prototype.Bb = function () {
    return cl();
  };
  Zk.prototype.$classData = v(
    { fq: 0 },
    !1,
    "scala.collection.immutable.Set$",
    { fq: 1, b: 1, Eb: 1, c: 1 }
  );
  var dl;
  function Xi() {
    dl || (dl = new Zk());
    return dl;
  }
  function el(a) {
    if (!a.Ej && !a.Ej) {
      var b = fl(a.zl, a.zq, !1);
      a.zl = null;
      a.yl = b;
      a.Ej = !0;
    }
    return a.yl;
  }
  function gl(a, b) {
    this.yl = null;
    this.Ej = !1;
    this.zq = b;
    this.zl = a;
  }
  gl.prototype = new Yh();
  gl.prototype.constructor = gl;
  e = gl.prototype;
  e.N = function (a) {
    el(this).N(a);
  };
  e.Hc = function (a) {
    return new gl(el(this), a);
  };
  e.Cb = function (a) {
    return hl(el(this), a);
  };
  e.da = function (a) {
    return il(el(this), a);
  };
  e.$classData = v(
    { yq: 0 },
    !1,
    "scala.collection.immutable.Stream$WithFilter",
    { yq: 1, ll: 1, b: 1, c: 1 }
  );
  function jl() {}
  jl.prototype = new q();
  jl.prototype.constructor = jl;
  jl.prototype.ea = function () {
    return new kl(16, 0.75);
  };
  jl.prototype.Bb = function () {
    var a = new ll();
    ml(a, 16, 0.75);
    return a;
  };
  jl.prototype.W = function (a) {
    var b = a.t();
    return nl(ml(new ll(), 0 < b ? Ga(((1 + b) | 0) / 0.75) : 16, 0.75), a);
  };
  jl.prototype.$classData = v(
    { jr: 0 },
    !1,
    "scala.collection.mutable.HashSet$",
    { jr: 1, b: 1, Eb: 1, c: 1 }
  );
  var ol;
  function pl() {
    ol || (ol = new jl());
    return ol;
  }
  function Rf() {}
  Rf.prototype = new q();
  Rf.prototype.constructor = Rf;
  Rf.prototype.$classData = v({ Dn: 0 }, !1, "scala.math.Equiv$", {
    Dn: 1,
    b: 1,
    ls: 1,
    c: 1,
  });
  var Qf;
  function Zf() {}
  Zf.prototype = new q();
  Zf.prototype.constructor = Zf;
  Zf.prototype.$classData = v({ Jn: 0 }, !1, "scala.math.Ordering$", {
    Jn: 1,
    b: 1,
    ms: 1,
    c: 1,
  });
  var Yf;
  function Zi() {}
  Zi.prototype = new q();
  Zi.prototype.constructor = Zi;
  Zi.prototype.z = function () {
    return "\x3c?\x3e";
  };
  Zi.prototype.$classData = v({ ao: 0 }, !1, "scala.reflect.NoManifest$", {
    ao: 1,
    b: 1,
    Lc: 1,
    c: 1,
  });
  var Yi,
    ri = v({ Qr: 0 }, !1, "scala.runtime.Nothing$", {
      Qr: 1,
      ec: 1,
      b: 1,
      c: 1,
    });
  function H(a) {
    this.Fr = a;
  }
  H.prototype = new Bi();
  H.prototype.constructor = H;
  function je(a) {
    return (0, a.Fr)();
  }
  H.prototype.$classData = v(
    { Er: 0 },
    !1,
    "scala.scalajs.runtime.AnonFunction0",
    { Er: 1, Ts: 1, b: 1, Xr: 1 }
  );
  function D(a) {
    this.Hr = a;
  }
  D.prototype = new Di();
  D.prototype.constructor = D;
  D.prototype.m = function (a) {
    return (0, this.Hr)(a);
  };
  D.prototype.$classData = v(
    { Gr: 0 },
    !1,
    "scala.scalajs.runtime.AnonFunction1",
    { Gr: 1, Us: 1, b: 1, O: 1 }
  );
  function ce(a) {
    this.Jr = a;
  }
  ce.prototype = new Fi();
  ce.prototype.constructor = ce;
  ce.prototype.Uc = function (a, b) {
    return (0, this.Jr)(a, b);
  };
  ce.prototype.$classData = v(
    { Ir: 0 },
    !1,
    "scala.scalajs.runtime.AnonFunction2",
    { Ir: 1, dg: 1, b: 1, xf: 1 }
  );
  function ql() {
    this.zb = null;
    var a = new rh();
    xh || (xh = new wh());
    var b = vh();
    var c = vh();
    b = new n(c, b);
    c = -554899859 ^ b.bb;
    a.Ti = (c >>> 24) | 0 | ((65535 & (5 ^ b.ab)) << 8);
    a.Ui = 16777215 & c;
    a.pn = !1;
    this.zb = a;
  }
  ql.prototype = new Ki();
  ql.prototype.constructor = ql;
  ql.prototype.$classData = v({ fo: 0 }, !1, "scala.util.Random$", {
    fo: 1,
    Bs: 1,
    b: 1,
    c: 1,
  });
  var rl;
  function sl() {
    rl || (rl = new ql());
    return rl;
  }
  function ic() {}
  ic.prototype = new Fi();
  ic.prototype.constructor = ic;
  ic.prototype.z = function () {
    return "Asteroids";
  };
  ic.prototype.Uc = function (a, b) {
    return new tl(a, b);
  };
  ic.prototype.$classData = v({ Pl: 0 }, !1, "example.Asteroids$", {
    Pl: 1,
    dg: 1,
    b: 1,
    xf: 1,
    c: 1,
  });
  var hc;
  function kc() {}
  kc.prototype = new Fi();
  kc.prototype.constructor = kc;
  kc.prototype.z = function () {
    return "AstroLander";
  };
  kc.prototype.Uc = function (a, b) {
    return new ul(a, b);
  };
  kc.prototype.$classData = v({ Ul: 0 }, !1, "example.AstroLander$", {
    Ul: 1,
    dg: 1,
    b: 1,
    xf: 1,
    c: 1,
  });
  var jc;
  function vl(a, b) {
    this.wc = a;
    this.lg = b;
  }
  vl.prototype = new q();
  vl.prototype.constructor = vl;
  e = vl.prototype;
  e.cb = function () {
    return "Brick";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.wc;
      case 1:
        return this.lg;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof vl) {
      var b = this.wc,
        c = a.wc;
      return (null === b ? null === c : b.y(c)) ? this.lg === a.lg : !1;
    }
    return !1;
  };
  e.$classData = v({ Vl: 0 }, !1, "example.Brick", {
    Vl: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function qc() {}
  qc.prototype = new Fi();
  qc.prototype.constructor = qc;
  qc.prototype.z = function () {
    return "BrickBreaker";
  };
  qc.prototype.Uc = function (a, b) {
    return new wl(a, b);
  };
  qc.prototype.$classData = v({ Xl: 0 }, !1, "example.BrickBreaker$", {
    Xl: 1,
    dg: 1,
    b: 1,
    xf: 1,
    c: 1,
  });
  var pc;
  function z(a, b) {
    this.i = a;
    this.g = b;
  }
  z.prototype = new q();
  z.prototype.constructor = z;
  function y(a, b) {
    return new z(a.i + b.i, a.g + b.g);
  }
  function pb(a, b) {
    return new z(a.i - b.i, a.g - b.g);
  }
  function mb(a, b) {
    return new z(a.i % b.i, a.g % b.g);
  }
  function sb(a, b) {
    return new z(a.i / b, a.g / b);
  }
  function qb(a, b) {
    return new z(a.i * b, a.g * b);
  }
  function xl(a, b) {
    return a.i * b.i + a.g * b.g;
  }
  function tb(a) {
    return +Math.sqrt(yl(a));
  }
  function yl(a) {
    return a.i * a.i + a.g * a.g;
  }
  function ob(a, b, c, d) {
    return a.i >= +Math.min(b.i, c.i) - d.i &&
      a.i < +Math.max(b.i, c.i) + d.g &&
      a.g >= +Math.min(b.g, c.g) - d.i
      ? a.g < +Math.max(b.g, c.g) + d.g
      : !1;
  }
  function wb(a, b) {
    var c = +Math.cos(b);
    b = +Math.sin(b);
    return new z(c * a.i - b * a.g, b * a.i + c * a.g);
  }
  e = z.prototype;
  e.cb = function () {
    return "Point";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.i;
      case 1:
        return this.g;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    var a = Da("Point");
    a = Y().p(-889275714, a);
    var b = this.i;
    b = ug(Y(), b);
    a = Y().p(a, b);
    b = this.g;
    b = ug(Y(), b);
    a = Y().p(a, b);
    return Y().L(a, 2);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof z
      ? this.i === a.i && this.g === a.g
      : !1;
  };
  e.$classData = v({ em: 0 }, !1, "example.Point", {
    em: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function oc() {}
  oc.prototype = new Fi();
  oc.prototype.constructor = oc;
  oc.prototype.z = function () {
    return "Pong";
  };
  oc.prototype.Uc = function (a, b) {
    return new zl(a, b);
  };
  oc.prototype.$classData = v({ gm: 0 }, !1, "example.Pong$", {
    gm: 1,
    dg: 1,
    b: 1,
    xf: 1,
    c: 1,
  });
  var nc;
  function mc() {}
  mc.prototype = new Fi();
  mc.prototype.constructor = mc;
  mc.prototype.z = function () {
    return "Snake";
  };
  mc.prototype.Uc = function (a, b) {
    return new Al(a, b);
  };
  mc.prototype.$classData = v({ jm: 0 }, !1, "example.Snake$", {
    jm: 1,
    dg: 1,
    b: 1,
    xf: 1,
    c: 1,
  });
  var lc;
  function sc() {}
  sc.prototype = new Fi();
  sc.prototype.constructor = sc;
  sc.prototype.z = function () {
    return "Tetris";
  };
  sc.prototype.Uc = function (a, b) {
    return new Bl(a, b);
  };
  sc.prototype.$classData = v({ mm: 0 }, !1, "example.Tetris$", {
    mm: 1,
    dg: 1,
    b: 1,
    xf: 1,
    c: 1,
  });
  var rc;
  function Cl() {}
  Cl.prototype = new q();
  Cl.prototype.constructor = Cl;
  function Dl() {}
  Dl.prototype = Cl.prototype;
  class El extends Pi {
    constructor() {
      super();
      ze(this, "assertion failed: Array.length must be power of 2");
    }
  }
  El.prototype.$classData = v({ Em: 0 }, !1, "java.lang.AssertionError", {
    Em: 1,
    $r: 1,
    ec: 1,
    b: 1,
    c: 1,
  });
  var oa = v(
    { Hm: 0 },
    !1,
    "java.lang.Byte",
    { Hm: 1, Cg: 1, b: 1, c: 1, ye: 1 },
    (a) => "number" === typeof a && (a << 24) >> 24 === a && 1 / a !== 1 / -0
  );
  function Ea(a) {
    a = +a;
    return Mc(Nc(), a);
  }
  var sa = v(
      { Lm: 0 },
      !1,
      "java.lang.Float",
      { Lm: 1, Cg: 1, b: 1, c: 1, ye: 1 },
      (a) => "number" === typeof a
    ),
    qa = v(
      { Om: 0 },
      !1,
      "java.lang.Integer",
      { Om: 1, Cg: 1, b: 1, c: 1, ye: 1 },
      (a) => na(a)
    ),
    va = v(
      { Tm: 0 },
      !1,
      "java.lang.Long",
      { Tm: 1, Cg: 1, b: 1, c: 1, ye: 1 },
      (a) => a instanceof n
    );
  class Fl extends Qi {}
  Fl.prototype.$classData = v({ rc: 0 }, !1, "java.lang.RuntimeException", {
    rc: 1,
    hc: 1,
    ec: 1,
    b: 1,
    c: 1,
  });
  var pa = v(
    { Xm: 0 },
    !1,
    "java.lang.Short",
    { Xm: 1, Cg: 1, b: 1, c: 1, ye: 1 },
    (a) => "number" === typeof a && (a << 16) >> 16 === a && 1 / a !== 1 / -0
  );
  function Da(a) {
    for (var b = 0, c = 1, d = (-1 + (a.length | 0)) | 0; 0 <= d; )
      (b = (b + ca(65535 & (a.charCodeAt(d) | 0), c)) | 0),
        (c = ca(31, c)),
        (d = (-1 + d) | 0);
    return b;
  }
  var ma = v(
    { wm: 0 },
    !1,
    "java.lang.String",
    { wm: 1, b: 1, c: 1, ye: 1, Ek: 1 },
    (a) => "string" === typeof a
  );
  function Gl(a) {
    a.n = "";
    return a;
  }
  function Hl(a) {
    var b = new Il();
    Gl(b);
    if (null === a) throw new og();
    b.n = a;
    return b;
  }
  function Il() {
    this.n = null;
  }
  Il.prototype = new q();
  Il.prototype.constructor = Il;
  function Jl(a, b) {
    ph || (ph = new oh());
    var c = (0 + b.a.length) | 0;
    if (0 > c || c > b.a.length) throw ((a = new Kl()), ze(a, null), a);
    for (var d = "", f = 0; f !== c; )
      (d = "" + d + String.fromCharCode(b.a[f])), (f = (1 + f) | 0);
    a.n = "" + a.n + d;
  }
  Il.prototype.z = function () {
    return this.n;
  };
  Il.prototype.q = function () {
    return this.n.length | 0;
  };
  function Ll(a, b) {
    return 65535 & (a.n.charCodeAt(b) | 0);
  }
  Il.prototype.$classData = v({ Zm: 0 }, !1, "java.lang.StringBuilder", {
    Zm: 1,
    b: 1,
    Ek: 1,
    Bm: 1,
    c: 1,
  });
  function n(a, b) {
    this.bb = a;
    this.ab = b;
  }
  n.prototype = new nh();
  n.prototype.constructor = n;
  n.prototype.y = function (a) {
    return a instanceof n ? this.bb === a.bb && this.ab === a.ab : !1;
  };
  n.prototype.H = function () {
    return this.bb ^ this.ab;
  };
  n.prototype.z = function () {
    kg();
    var a = this.bb,
      b = this.ab;
    return b === a >> 31
      ? "" + a
      : 0 > b
      ? "-" + yh(-a | 0, 0 !== a ? ~b : -b | 0)
      : yh(a, b);
  };
  n.prototype.$classData = v(
    { um: 0 },
    !1,
    "org.scalajs.linker.runtime.RuntimeLong",
    { um: 1, Cg: 1, b: 1, c: 1, ye: 1 }
  );
  function Ml() {}
  Ml.prototype = new Si();
  Ml.prototype.constructor = Ml;
  function Nl() {}
  Nl.prototype = Ml.prototype;
  function Ol() {}
  Ol.prototype = new q();
  Ol.prototype.constructor = Ol;
  function Pl() {}
  e = Pl.prototype = Ol.prototype;
  e.h = function () {
    return this;
  };
  e.e = function () {
    return !this.l();
  };
  e.wd = function (a) {
    return new Ql(this).wd(a);
  };
  e.xd = function (a) {
    return tj(this, a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.ze = function (a) {
    return Xd(this, a);
  };
  e.Pb = function (a, b, c) {
    return Zd(this, a, b, c);
  };
  e.ae = function (a, b, c, d) {
    return fe(this, a, b, c, d);
  };
  e.t = function () {
    return -1;
  };
  function Ff() {
    this.ee = null;
    Rl || (Rl = new Sl());
    this.ee = Rl;
  }
  Ff.prototype = new fj();
  Ff.prototype.constructor = Ff;
  Ff.prototype.$classData = v({ Ko: 0 }, !1, "scala.collection.Iterable$", {
    Ko: 1,
    Xk: 1,
    b: 1,
    Eb: 1,
    c: 1,
  });
  var Ef;
  function Tl() {
    this.ad = null;
  }
  Tl.prototype = new q();
  Tl.prototype.constructor = Tl;
  function Ul() {}
  Ul.prototype = Tl.prototype;
  function xb(a, b) {
    return a.ad.gd(b);
  }
  e = Tl.prototype;
  e.we = function (a) {
    return this.ad.W(a);
  };
  e.ea = function () {
    return this.ad.ea();
  };
  e.W = function (a) {
    return this.we(a);
  };
  e.Bb = function () {
    return this.ad.Bb();
  };
  e.gd = function (a) {
    return xb(this, a);
  };
  function Vl(a, b) {
    return a.xe(new D(((c, d) => (f) => J(L(), d, f))(a, b)), 0);
  }
  function Jk(a, b) {
    return a.Gf(new D(((c, d) => (f) => J(L(), f, d))(a, b)));
  }
  function Wl(a, b) {
    var c = a.t();
    if (-1 !== c) {
      var d = b.t();
      c = -1 !== d && c !== d;
    } else c = !1;
    if (c) return !1;
    a: {
      a = a.h();
      for (b = b.h(); a.l() && b.l(); )
        if (!J(L(), a.k(), b.k())) {
          b = !1;
          break a;
        }
      b = a.l() === b.l();
    }
    return b;
  }
  function Xl(a, b) {
    var c = a.X().ea(),
      d = a.X().ea();
    a.N(
      new D(
        ((f, g, h, k) => (l) => {
          l = g.m(l);
          h.Ia(l.dc());
          return k.Ia(l.qc());
        })(a, b, c, d)
      )
    );
    return Hd(new Id(), c.Wa(), d.Wa());
  }
  function Yl(a, b) {
    var c = a.X().ea();
    for (a = a.h(); a.l(); ) {
      var d = b.m(a.k());
      c.Ia(d);
    }
    return c.Wa();
  }
  function Zl(a, b) {
    var c = a.X().ea();
    for (a = a.h(); a.l(); ) {
      var d = b.m(a.k());
      c.wb(d);
    }
    return c.Wa();
  }
  function $l(a, b) {
    var c = a.X().ea();
    for (a = a.h(); a.l(); ) {
      var d = b.m(a.k());
      c.wb(d);
    }
    return c.Wa();
  }
  function am(a, b) {
    var c = a.X().ea();
    a = a.h();
    for (b = b.h(); a.l() && b.l(); ) {
      var d = Hd(new Id(), a.k(), b.k());
      c.Ia(d);
    }
    return c.Wa();
  }
  function bm(a) {
    var b = a.X().ea(),
      c = 0;
    for (a = a.h(); a.l(); ) {
      var d = Hd(new Id(), a.k(), c);
      b.Ia(d);
      c = (1 + c) | 0;
    }
    return b.Wa();
  }
  function cm(a, b) {
    var c = a.Wi();
    for (a = a.h(); a.l(); ) {
      var d = a.k();
      !1 !== !!b.m(d) && c.Ia(d);
    }
    return c.Wa();
  }
  function Sl() {
    this.ee = null;
    this.ee = xc();
  }
  Sl.prototype = new fj();
  Sl.prototype.constructor = Sl;
  Sl.prototype.W = function (a) {
    return rf(a) ? a : ej.prototype.W.call(this, a);
  };
  Sl.prototype.$classData = v(
    { Kp: 0 },
    !1,
    "scala.collection.immutable.Iterable$",
    { Kp: 1, Xk: 1, b: 1, Eb: 1, c: 1 }
  );
  var Rl;
  function dm() {
    this.ie = null;
    em = this;
    this.ie = fm(new gm(new H((() => () => Wk())(this))));
  }
  dm.prototype = new q();
  dm.prototype.constructor = dm;
  e = dm.prototype;
  e.gd = function (a) {
    return Bj(this, a);
  };
  function hm(a, b, c, d) {
    return new gm(
      new H(
        ((f, g, h, k) => () => {
          for (var l = null, p = !1, u = g.ha; !p && !u.e(); )
            (l = Z(u).u()), (p = !!h.m(l) !== k), (u = Z(u).Ta()), (g.ha = u);
          return p ? (X(), (u = hm(X(), u, h, k)), new Sk(l, u)) : Wk();
        })(a, new Ii(b), c, d)
      )
    );
  }
  function im(a, b, c) {
    return new gm(
      new H(
        ((d, f, g) => () => {
          for (
            var h = new Ii(null), k = !1, l = new Ii(f.ha);
            !k && !l.ha.e();

          )
            (h.ha = g.m(Z(l.ha).u()).h()),
              (k = h.ha.l()),
              k || ((l.ha = Z(l.ha).Ta()), (f.ha = l.ha));
          return k
            ? ((k = h.ha.k()),
              (l.ha = Z(l.ha).Ta()),
              (f.ha = l.ha),
              X(),
              X(),
              new Sk(
                k,
                new gm(
                  new H(
                    ((p, u, A, G) => () =>
                      jm(
                        X(),
                        u.ha,
                        new H(
                          ((K, M, aa) => () => Z(im(X(), M.ha, aa)))(p, A, G)
                        )
                      ))(d, h, l, g)
                  )
                )
              ))
            : Wk();
        })(a, new Ii(b), c)
      )
    );
  }
  function ym(a, b, c) {
    return new gm(
      new H(
        ((d, f, g) => () => {
          for (var h = f.ha, k = g.Qj; 0 < k && !h.e(); )
            (h = Z(h).Ta()), (f.ha = h), (k = (-1 + k) | 0), (g.Qj = k);
          return Z(h);
        })(a, new Ii(b), new Hi(c))
      )
    );
  }
  function Bj(a, b) {
    return b instanceof gm
      ? b
      : 0 === b.t()
      ? a.ie
      : new gm(new H(((c, d) => () => zm(X(), d.h()))(a, b)));
  }
  function jm(a, b, c) {
    if (b.l()) {
      var d = b.k();
      return new Sk(
        d,
        new gm(new H(((f, g, h) => () => jm(X(), g, h))(a, b, c)))
      );
    }
    return je(c);
  }
  function zm(a, b) {
    if (b.l()) {
      var c = b.k();
      return new Sk(c, new gm(new H(((d, f) => () => zm(X(), f))(a, b))));
    }
    return Wk();
  }
  function Am(a, b, c) {
    return new gm(
      new H(
        ((d, f, g) => () => {
          X();
          var h = Am(X(), (f + g) | 0, g);
          return new Sk(f, h);
        })(a, b, c)
      )
    );
  }
  e.ea = function () {
    return new Bm();
  };
  e.Bb = function () {
    return this.ie;
  };
  e.W = function (a) {
    return Bj(this, a);
  };
  e.$classData = v({ Mp: 0 }, !1, "scala.collection.immutable.LazyList$", {
    Mp: 1,
    b: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var em;
  function X() {
    em || (em = new dm());
    return em;
  }
  function Cm() {}
  Cm.prototype = new q();
  Cm.prototype.constructor = Cm;
  e = Cm.prototype;
  e.gd = function (a) {
    return Dm(this, a);
  };
  function Dm(a, b) {
    return b instanceof Em ? b : Fm(a, b.h());
  }
  function Fm(a, b) {
    return b.l()
      ? new Gm(b.k(), new H(((c, d) => () => Fm(Lf(), d))(a, b)))
      : Hm();
  }
  e.ea = function () {
    var a = new Ej();
    return new dj(a, new D((() => (b) => Dm(Lf(), b))(this)));
  };
  function Im(a, b, c, d) {
    var f = b.u();
    return new Gm(
      f,
      new H(((g, h, k, l) => () => fl(h.w(), k, l))(a, b, c, d))
    );
  }
  e.Bb = function () {
    return Hm();
  };
  e.W = function (a) {
    return Dm(this, a);
  };
  e.$classData = v({ uq: 0 }, !1, "scala.collection.immutable.Stream$", {
    uq: 1,
    b: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var Jm;
  function Lf() {
    Jm || (Jm = new Cm());
    return Jm;
  }
  function Km() {
    Lm = this;
  }
  Km.prototype = new q();
  Km.prototype.constructor = Km;
  function Mm(a, b) {
    a = a.ea();
    var c = b.t();
    0 <= c && a.ac(c);
    a.wb(b);
    return a.Wa();
  }
  Km.prototype.ea = function () {
    var a = ee();
    return new dj(a, new D((() => (b) => new Nm(b))(this)));
  };
  Km.prototype.$classData = v(
    { Mq: 0 },
    !1,
    "scala.collection.immutable.WrappedString$",
    { Mq: 1, b: 1, Js: 1, Hs: 1, c: 1 }
  );
  var Lm;
  function Om() {
    Lm || (Lm = new Km());
    return Lm;
  }
  function dj(a, b) {
    this.Gl = this.Ug = null;
    if (null === a) throw lb(null);
    this.Ug = a;
    this.Gl = b;
  }
  dj.prototype = new q();
  dj.prototype.constructor = dj;
  e = dj.prototype;
  e.ac = function (a) {
    this.Ug.ac(a);
  };
  e.Wa = function () {
    return this.Gl.m(this.Ug.Wa());
  };
  e.wb = function (a) {
    this.Ug.wb(a);
    return this;
  };
  e.Ia = function (a) {
    this.Ug.Ia(a);
    return this;
  };
  e.$classData = v({ hr: 0 }, !1, "scala.collection.mutable.Builder$$anon$1", {
    hr: 1,
    b: 1,
    Qc: 1,
    oc: 1,
    nc: 1,
  });
  function Pm(a, b) {
    a.Ud = b;
    return a;
  }
  function Qm() {
    this.Ud = null;
  }
  Qm.prototype = new q();
  Qm.prototype.constructor = Qm;
  function Rm() {}
  e = Rm.prototype = Qm.prototype;
  e.ac = function () {};
  e.wb = function (a) {
    this.Ud.wb(a);
    return this;
  };
  e.Ia = function (a) {
    this.Ud.Ia(a);
    return this;
  };
  e.Wa = function () {
    return this.Ud;
  };
  e.$classData = v({ Rh: 0 }, !1, "scala.collection.mutable.GrowableBuilder", {
    Rh: 1,
    b: 1,
    Qc: 1,
    oc: 1,
    nc: 1,
  });
  function Sm() {
    this.ee = null;
    this.ee = pl();
  }
  Sm.prototype = new fj();
  Sm.prototype.constructor = Sm;
  Sm.prototype.$classData = v({ xr: 0 }, !1, "scala.collection.mutable.Set$", {
    xr: 1,
    Xk: 1,
    b: 1,
    Eb: 1,
    c: 1,
  });
  var Tm;
  function Wb() {
    Tm || (Tm = new Sm());
    return Tm;
  }
  function Um(a, b) {
    this.yf = a;
    this.Ue = b;
  }
  Um.prototype = new q();
  Um.prototype.constructor = Um;
  e = Um.prototype;
  e.cb = function () {
    return "Apple";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.yf;
      case 1:
        return this.Ue;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    var a = Da("Apple");
    a = Y().p(-889275714, a);
    var b = this.yf;
    a = Y().p(a, b);
    b = this.Ue;
    a = Y().p(a, b);
    return Y().L(a, 2);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof Um
      ? this.yf === a.yf && this.Ue === a.Ue
      : !1;
  };
  e.$classData = v({ Nl: 0 }, !1, "example.Apple", {
    Nl: 1,
    b: 1,
    eh: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function tl(a, b) {
    this.Yd = null;
    this.Xd = !1;
    this.Uj = this.ai = this.Af = this.td = null;
    this.bi = 0;
    this.$h = null;
    this.bc = 0;
    this.td = a;
    this.Af = b;
    Lb(this);
    this.ai = vb().db.ad.Bb();
    this.bc = ((1 | this.bc) << 24) >> 24;
    this.Uj = new ub(this, sb(a, 2), new z(0, 0), 0);
    this.bc = ((2 | this.bc) << 24) >> 24;
    this.bi = 0;
    this.bc = ((4 | this.bc) << 24) >> 24;
    a = vb().db;
    this.$h = Vh(
      a,
      10,
      new H(
        ((c) => () => {
          var d = sl().zb;
          0 !== sh(d, 1)
            ? ((d = sl()), (d = new z(0, th(d.zb, Ga(c.td.g)))))
            : ((d = sl()), (d = new z(th(d.zb, Ga(c.td.g)), 0)));
          var f = th(sl().zb, 5),
            g = sl();
          return new kb(c, 3, d, pb(new z(f, th(g.zb, 5)), new z(2.5, 2.5)));
        })(this)
      )
    );
    this.bc = ((8 | this.bc) << 24) >> 24;
  }
  tl.prototype = new Ob();
  tl.prototype.constructor = tl;
  function Vm(a) {
    if (0 === ((1 & a.bc) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 8"
      );
    return a.ai;
  }
  function Wm(a, b) {
    a.ai = b;
    a.bc = ((1 | a.bc) << 24) >> 24;
  }
  function Xm(a) {
    if (0 === ((2 & a.bc) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 9"
      );
    return a.Uj;
  }
  e = tl.prototype;
  e.yg = function () {
    if (0 === ((4 & this.bc) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 10"
      );
    return this.bi;
  };
  e.Ni = function (a) {
    this.bi = a;
    this.bc = ((4 | this.bc) << 24) >> 24;
  };
  function Ym(a) {
    if (0 === ((8 & a.bc) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Asteroids.scala: 11"
      );
    return a.$h;
  }
  function Zm(a, b) {
    a.$h = b;
    a.bc = ((8 | a.bc) << 24) >> 24;
  }
  e.gg = function (a) {
    this.Ni((1 + this.yg()) | 0);
    Ym(this).N(
      new D(
        (() => (f) => {
          f.Vi();
        })(this)
      )
    );
    Vm(this).N(
      new D(
        (() => (f) => {
          f.Vi();
        })(this)
      )
    );
    yb(Xm(this), a);
    if (a.F(32) && 10 > Vm(this).q() && 0 === (this.yg() % 2 | 0)) {
      a = Vm(this);
      var b = new rb(
        this,
        Xm(this).sd,
        y(Xm(this).zf, wb(new z(15, 0), Xm(this).Ld))
      );
      Wm(this, a.ud(b));
    }
    a = Vm(this).Cb(
      new D(
        ((f) => (g) =>
          Ym(f)
            .Hc(new D(((h, k) => (l) => nb(l, k.Ve))(f, g)))
            .da(
              new D(
                ((h, k) => (l) => {
                  var p =
                    1 === l.ig
                      ? vb().cj
                      : xb(vb().db, B(new C(), [30, -30])).da(
                          new D(
                            ((u, A) => (G) =>
                              new kb(
                                u,
                                (-1 + A.ig) | 0,
                                A.rd,
                                wb(A.Tj, (3.141592653589793 * (G | 0)) / 180)
                              ))(h, l)
                          )
                        );
                  return Hd(new Id(), Hd(new Id(), l, k), p);
                })(f, g)
              )
            ))(this)
      )
    );
    b = Eh();
    a = a.fg(b.Zi);
    if (null === a) throw new T(a);
    b = a.dc();
    a = a.qc();
    var c = b.da(new D((() => (f) => f.dc())(this)));
    b = b.da(new D((() => (f) => f.qc())(this)));
    c = Ym(this).Qb(new D(((f, g) => (h) => !g.F(h))(this, c)));
    var d = Eh();
    a = a.wg(d.Zi);
    Zm(this, c.Ff(a));
    Wm(
      this,
      Vm(this)
        .Qb(new D(((f, g) => (h) => !g.F(h))(this, b)))
        .Qb(
          new D(((f) => (g) => ob(g.Ve, new z(0, 0), f.td, new z(0, 0)))(this))
        )
    );
    Ym(this).Gf(new D(((f) => (g) => nb(g, Xm(f).sd))(this)))
      ? (Qb(this, new $m("Your ship hit an asteroid!")), je(this.Af))
      : Ym(this).e() &&
        (Qb(this, new $m("You successfully destroyed every asteroid!")),
        je(this.Af));
  };
  e.Xc = function (a) {
    var b = Jb(F());
    a.fillStyle = b;
    a.fillRect(0, 0, 800, 800);
    b = Cb(F());
    a.fillStyle = b;
    b = Cb(F());
    a.strokeStyle = b;
    Ym(this).N(
      new D(
        ((c, d) => (f) => {
          f.Xc(d);
        })(this, a)
      )
    );
    Vm(this).N(
      new D(
        ((c, d) => (f) => {
          f.Xc(d);
        })(this, a)
      )
    );
    Xm(this).Xc(a);
  };
  e.cb = function () {
    return "Asteroids";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.td;
      case 1:
        return this.Af;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof tl) {
      var b = this.td,
        c = a.td;
      return (null === b ? null === c : b.y(c)) ? this.Af === a.Af : !1;
    }
    return !1;
  };
  e.$classData = v({ Ol: 0 }, !1, "example.Asteroids", {
    Ol: 1,
    mg: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function an(a, b, c, d, f, g, h) {
    d = (3.141592653589793 * d) / 180;
    a = new Rb(a, f);
    b = [
      y(g, wb(new z(b, b), h - 3.9269908169872414)),
      y(g, wb(new z(15, 15), h - 3.9269908169872414 + d)),
      y(g, wb(new z(c, c), h - 3.9269908169872414)),
      y(g, wb(new z(15, 15), h - 3.9269908169872414 - d)),
      y(g, wb(new z(b, b), h - 3.9269908169872414)),
    ];
    Tb(a, B(new C(), b));
  }
  function bn(a, b, c, d) {
    an(a, 5, 25, 15, d, b, c);
    an(a, 10, 20, 10, d, b, c);
  }
  function ul(a, b) {
    this.Yd = null;
    this.Xd = !1;
    this.di = this.ci = this.Vj = null;
    this.ei = this.Wj = 0;
    this.fi = null;
    this.Ua = 0;
    this.Md = a;
    this.jg = b;
    Lb(this);
    var c = 450;
    vb();
    a = I();
    b = th(sl().zb, 21);
    for (var d; (d = th(sl().zb, 21)), d === b; );
    for (var f; (f = th(sl().zb, 21)), f === b || f === d; );
    for (var g = 0; ; ) {
      var h = g;
      if (h !== ((1 + b) | 0))
        if (h === ((1 + d) | 0)) {
          var k = sl();
          c = c - th(k.zb, 25) - 150;
        } else
          h === ((2 + f) | 0)
            ? ((k = sl()), (c = c - th(k.zb, 25) + 150))
            : ((k = sl()), (c = c - th(k.zb, 50) + 25));
      c > this.Md.g && (c = Ga(2 * this.Md.g - c));
      a = new cn(new z(40 * h, c), a);
      if (21 === g) break;
      g = (1 + g) | 0;
    }
    b = a;
    for (a = I(); !b.e(); ) (d = b.u()), (a = new cn(d, a)), (b = b.w());
    this.Vj = a;
    this.Ua = ((1 | this.Ua) << 24) >> 24;
    this.ci = new z(400, 25);
    this.Ua = ((2 | this.Ua) << 24) >> 24;
    this.di = new z(0, 0);
    this.Ua = ((4 | this.Ua) << 24) >> 24;
    this.Wj = -1.5707963267948966;
    this.Ua = ((8 | this.Ua) << 24) >> 24;
    this.ei = 500;
    this.Ua = ((16 | this.Ua) << 24) >> 24;
    wc();
    a = I();
    this.fi = zc(a);
    this.Ua = ((32 | this.Ua) << 24) >> 24;
  }
  ul.prototype = new Ob();
  ul.prototype.constructor = ul;
  function dn(a) {
    if (0 === ((1 & a.Ua) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 7"
      );
    return a.Vj;
  }
  function en(a) {
    if (0 === ((2 & a.Ua) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 36"
      );
    return a.ci;
  }
  function fn(a) {
    if (0 === ((4 & a.Ua) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 37"
      );
    return a.di;
  }
  function gn(a, b) {
    a.di = b;
    a.Ua = ((4 | a.Ua) << 24) >> 24;
  }
  function hn(a) {
    if (0 === ((8 & a.Ua) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 38"
      );
    return a.Wj;
  }
  function jn(a) {
    if (0 === ((16 & a.Ua) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 39"
      );
    return a.ei;
  }
  function kn(a) {
    var b = vb().db;
    a = [
      y(en(a), wb(new z(15, 0), hn(a))),
      y(en(a), wb(new z(7, 0), hn(a) + 2.2252947962927703)),
      y(en(a), wb(new z(7, 0), hn(a) - 2.2252947962927703)),
    ];
    return xb(b, B(new C(), a));
  }
  e = ul.prototype;
  e.Xc = function (a) {
    a.textAlign = "left";
    var b = Jb(F());
    a.fillStyle = b;
    a.fillRect(0, 0, this.Md.i, this.Md.g);
    b = 3 > tb(fn(this)) ? Eb(F()) : Cb(F());
    a.fillStyle = b;
    a.fillText("Speed: " + Ga(10 * tb(fn(this))) / 10, 20, 50);
    b = Eb(F());
    a.strokeStyle = b;
    b = jn(this);
    a.strokeRect(20, 60, (65 * (1 > b ? 1 : b)) / 500, 15);
    b = Cb(F());
    a.fillStyle = b;
    b = Cb(F());
    a.strokeStyle = b;
    a.strokeRect(20, 60, 65, 15);
    a.beginPath();
    a.moveTo(0, this.Md.g);
    for (b = dn(this); !b.e(); ) {
      var c = b.u();
      a.lineTo(c.i, c.g);
      b = b.w();
    }
    a.lineTo(this.Md.i, this.Md.g);
    a.fill();
    a.beginPath();
    a.moveTo(kn(this).id().i, kn(this).id().g);
    kn(this).N(
      new D(
        ((d, f) => (g) => {
          f.lineTo(g.i, g.g);
        })(this, a)
      )
    );
    a.fill();
    b = Db(F());
    a.strokeStyle = b;
    0 < jn(this) &&
      (ln(this).F(37) && bn(this, en(this), hn(this) + 0.7853981633974483, a),
      ln(this).F(39) && bn(this, en(this), hn(this) - 0.7853981633974483, a),
      ln(this).F(40) && bn(this, en(this), hn(this), a));
  };
  function ln(a) {
    if (0 === ((32 & a.Ua) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/AstroLander.scala: 97"
      );
    return a.fi;
  }
  e.gg = function (a) {
    this.fi = a;
    this.Ua = ((32 | this.Ua) << 24) >> 24;
    if (0 < jn(this)) {
      a.F(37) &&
        gn(this, y(fn(this), wb(new z(0.5, 0), hn(this) + 0.7853981633974483)));
      a.F(39) &&
        gn(this, y(fn(this), wb(new z(0.5, 0), hn(this) - 0.7853981633974483)));
      a.F(40) && gn(this, y(fn(this), wb(new z(0.5, 0), hn(this))));
      var b = jn(this),
        c = vb().db,
        d = [a.F(37), a.F(39), a.F(40)];
      a = 0;
      for (c = xb(c, B(new C(), d)).h(); c.l(); ) c.k() && (a = (1 + a) | 0);
      this.ei = (b - a) | 0;
      this.Ua = ((16 | this.Ua) << 24) >> 24;
    }
    gn(this, y(fn(this), new z(0, 0.2)));
    this.ci = y(en(this), fn(this));
    this.Ua = ((2 | this.Ua) << 24) >> 24;
    b = dn(this);
    for (a = c = null; b !== I(); ) {
      b.u();
      d = 0;
      for (var f = dn(this), g = -1; !f.e(); )
        f.u().i < en(this).i && (g = d), (f = f.w()), (d = (1 + d) | 0);
      d = g;
      -1 === d || 21 === d
        ? (d = Mb())
        : ((f = dn(this)),
          (f = mn(f, d)),
          (g = dn(this)),
          (d = mn(g, (1 + d) | 0)),
          ((en(this).i - f.i) / (d.i - f.i)) * (d.g - f.g) + f.g > en(this).g
            ? (d = Mb())
            : ((d = +Math.abs((d.g - f.g) / (d.i - f.i))),
              (f = fn(this).i / fn(this).g),
              (f = +Math.abs(f)),
              (d = new $m(
                0.1 < d
                  ? new nn("landing area too steep")
                  : 1 < f
                  ? new nn("too much horizontal velocity")
                  : 3 < tb(fn(this))
                  ? new nn("coming in too fast")
                  : on()
              ))));
      for (d = d.h(); d.l(); )
        (f = new cn(d.k(), I())), null === a ? (c = f) : (a.sc = f), (a = f);
      b = b.w();
    }
    b = (null === c ? I() : c).Dk();
    if (!b.e())
      if (((b = b.zg()), on() === b))
        Qb(this, new $m("You have landed successfully.")), je(this.jg);
      else if (b instanceof nn)
        Qb(this, new $m("You have crashed your lander: " + b.ah)), je(this.jg);
      else throw new T(b);
  };
  e.cb = function () {
    return "AstroLander";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.Md;
      case 1:
        return this.jg;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof ul) {
      var b = this.Md,
        c = a.Md;
      return (null === b ? null === c : b.y(c)) ? this.jg === a.jg : !1;
    }
    return !1;
  };
  e.$classData = v({ Tl: 0 }, !1, "example.AstroLander", {
    Tl: 1,
    mg: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function wl(a, b) {
    this.Yd = null;
    this.Xd = !1;
    this.Xj = 0;
    this.Yj = null;
    this.ii = this.$j = 0;
    this.ki = this.gi = this.hi = null;
    this.li = 0;
    this.Zj = this.ji = this.ak = null;
    this.K = 0;
    this.cc = a;
    this.kg = b;
    Lb(this);
    this.Xj = 175;
    this.K |= 1;
    this.Yj = new z(50, 15);
    this.K |= 2;
    this.$j = a.i - 2 * pn(this);
    this.K |= 4;
    this.ii = 3;
    this.K |= 8;
    this.hi = new z(0, 0);
    this.K |= 16;
    this.gi = new z(0, 0);
    this.K |= 32;
    this.ki = new z(0, 0);
    this.K |= 64;
    this.li = 0;
    this.K |= 128;
    qn(this);
    this.ak = new z(75, 5);
    this.K |= 256;
    this.ji = new z(0, 0);
    this.K |= 512;
    a = vb().db;
    b = [Cb(F()), Gb(F()), Ib(F()), Hb(F()), Db(F()), Eb(F()), Fb(F())];
    a = xb(a, B(new C(), b));
    b = Wb().Bb();
    if (0 === (4 & this.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 14"
      );
    var c = Ga(this.$j / rn(this).i),
      d = (-1 + c) | 0;
    if (!(0 >= c))
      for (c = 0; ; ) {
        for (var f = c, g = 3; ; ) {
          var h = g;
          h = new z(f * rn(this).i + pn(this), h * rn(this).g);
          var k = sl(),
            l = a.q();
          Yb(b, new vl(h, a.v(th(k.zb, l))));
          if (15 === g) break;
          g = (1 + g) | 0;
        }
        if (c === d) break;
        c = (1 + c) | 0;
      }
    this.Zj = b;
    this.K |= 1024;
  }
  wl.prototype = new Ob();
  wl.prototype.constructor = wl;
  function pn(a) {
    if (0 === (1 & a.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 11"
      );
    return a.Xj;
  }
  function rn(a) {
    if (0 === (2 & a.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 12"
      );
    return a.Yj;
  }
  function sn(a) {
    if (0 === (8 & a.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 15"
      );
    return a.ii;
  }
  function tn(a, b) {
    a.ii = b;
    a.K |= 8;
  }
  e = wl.prototype;
  e.Va = function () {
    if (0 === (16 & this.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 17"
      );
    return this.hi;
  };
  e.Vc = function (a) {
    this.hi = a;
    this.K |= 16;
  };
  e.xb = function () {
    if (0 === (32 & this.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 18"
      );
    return this.gi;
  };
  e.sg = function (a) {
    this.gi = a;
    this.K |= 32;
  };
  function un(a) {
    if (0 === (64 & a.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 19"
      );
    return a.ki;
  }
  function vn(a, b) {
    a.ki = b;
    a.K |= 64;
  }
  e.Be = function () {
    if (0 === (128 & this.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 21"
      );
    return this.li;
  };
  e.Ae = function (a) {
    this.li = a;
    this.K |= 128;
  };
  function qn(a) {
    a.Vc(new z(0, 0));
    vn(a, new z(a.cc.i / 2, a.cc.g - 40));
    a.sg(new z(a.cc.i / 2, un(a).g - 5));
    a.Ae(60);
  }
  function wn(a) {
    if (0 === (256 & a.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 32"
      );
    return a.ak;
  }
  function xn(a) {
    if (0 === (512 & a.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 33"
      );
    return a.ji;
  }
  function yn(a, b) {
    a.ji = b;
    a.K |= 512;
  }
  function zn(a) {
    if (0 === (1024 & a.K))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/BrickBreaker.scala: 35"
      );
    return a.Zj;
  }
  e.Xc = function (a) {
    var b = Jb(F());
    a.fillStyle = b;
    a.fillRect(0, 0, this.cc.i, this.cc.g);
    b = Cb(F());
    a.fillStyle = b;
    b = Cb(F());
    a.strokeStyle = b;
    a.strokeRect(0, 0, pn(this) - 1, this.cc.g);
    a.strokeRect(this.cc.i - pn(this) + 1, 0, pn(this) - 1, this.cc.g);
    Sb(new Rb(this, a), this.xb().i - 5, this.xb().g - 5);
    a.textAlign = "left";
    a.fillText(
      "Balls Left: " + sn(this),
      this.cc.i - pn(this) / 2 - 40,
      (4 * this.cc.g) / 5 - 10
    );
    b = sn(this);
    if (!(1 > b))
      for (var c = 1; ; ) {
        var d = c;
        Sb(
          new Rb(this, a),
          this.cc.i - pn(this) / 2 - 40 + ca(15, d),
          (4 * this.cc.g) / 5 + 10
        );
        if (c === b) break;
        c = (1 + c) | 0;
      }
    zn(this).N(
      new D(
        ((f, g) => (h) => {
          var k = h.lg.split("255").join("128");
          g.fillStyle = k;
          g.fillRect(h.wc.i, h.wc.g, rn(f).i, rn(f).g);
          g.fillStyle = h.lg;
          g.beginPath();
          g.moveTo(h.wc.i + 1, h.wc.g + rn(f).g - 1);
          g.lineTo(h.wc.i + 1, h.wc.g + 1);
          g.lineTo(h.wc.i + rn(f).i - 1, h.wc.g + 1);
          g.stroke();
        })(this, a)
      )
    );
    b = Cb(F()).split("255").join("128");
    a.fillStyle = b;
    b = pb(un(this), sb(wn(this), 2));
    a.fillRect(b.i, b.g, wn(this).i, wn(this).g);
    c = Cb(F());
    a.fillStyle = c;
    a.strokeRect(b.i, b.g, wn(this).i, wn(this).g);
  };
  e.gg = function (a) {
    if (0 < this.Be()) this.Ae((-1 + this.Be()) | 0);
    else if (0 === this.Be())
      (a = sl()),
        this.Vc(new z(7 * (th(a.zb, 2) - 0.5), -3.5)),
        this.Ae((-1 + this.Be()) | 0);
    else {
      yn(this, new z(0, 0));
      a.F(37) && yn(this, new z(-8, 0));
      a.F(39) && yn(this, new z(8, 0));
      vn(this, y(un(this), xn(this)));
      a = un(this);
      var b = un(this).i,
        c = wn(this).i / 2 + pn(this);
      b = +Math.max(b, c);
      c = this.cc.i - wn(this).i / 2 - pn(this);
      b = +Math.min(b, c);
      vn(this, new z(b, a.g));
      this.sg(y(this.xb(), this.Va()));
      this.xb().i + 5 > this.cc.i - pn(this)
        ? ((a = this.Va()),
          (b = this.Va().i),
          (b = -+Math.abs(b)),
          this.Vc(new z(b, a.g)))
        : this.xb().i - 5 < pn(this)
        ? ((a = this.Va()),
          (b = this.Va().i),
          (b = +Math.abs(b)),
          this.Vc(new z(b, a.g)))
        : 0 > this.xb().g - 5
        ? ((a = this.Va()),
          (b = this.Va().g),
          (b = +Math.abs(b)),
          this.Vc(new z(a.i, b)))
        : this.xb().g > this.cc.g
        ? (tn(this, (-1 + sn(this)) | 0),
          0 <= sn(this)
            ? qn(this)
            : (Qb(this, new $m("You've run out of balls!")), je(this.kg)))
        : (ob(
            this.xb(),
            pb(un(this), sb(wn(this), 2)),
            y(un(this), sb(wn(this), 2)),
            new z(5, 5)
          ) &&
            (this.Va(),
            (a = this.Va().i + xn(this).i / 8),
            (b = this.Va().g),
            (b = -+Math.abs(b)),
            this.Vc(new z(a, b))),
          zn(this).N(
            new D(
              ((d) => (f) => {
                var g = vb().db,
                  h = [
                    f.wc,
                    y(f.wc, new z(rn(d).i, 0)),
                    y(f.wc, rn(d)),
                    y(f.wc, new z(0, rn(d).g)),
                  ];
                g = xb(g, B(new C(), h));
                h = vb().db;
                var k = [
                  new An(
                    g.v(0),
                    g.v(1),
                    new D(
                      (() => (l) => {
                        var p = -+Math.abs(l.g);
                        return new z(l.i, p);
                      })(d)
                    )
                  ),
                  new An(
                    g.v(1),
                    g.v(2),
                    new D(
                      (() => (l) => {
                        var p = +Math.abs(l.i);
                        return new z(p, l.g);
                      })(d)
                    )
                  ),
                  new An(
                    g.v(2),
                    g.v(3),
                    new D(
                      (() => (l) => {
                        var p = +Math.abs(l.g);
                        return new z(l.i, p);
                      })(d)
                    )
                  ),
                  new An(
                    g.v(3),
                    g.v(0),
                    new D(
                      (() => (l) => {
                        var p = -+Math.abs(l.i);
                        return new z(p, l.g);
                      })(d)
                    )
                  ),
                ];
                h = xb(h, B(new C(), k));
                k = new Gi(!1);
                h.Hc(new D((() => (l) => null !== l)(d)))
                  .Hc(
                    new D(
                      ((l, p) => (u) => {
                        if (null !== u) return !p.eg;
                        throw new T(u);
                      })(d, k)
                    )
                  )
                  .N(
                    new D(
                      ((l, p, u) => (A) => {
                        if (null !== A) {
                          var G = A.ng,
                            K = A.og;
                          A = A.pg;
                          var M = xl(pb(l.xb(), G), pb(K, G)) / tb(pb(K, G)),
                            aa = yl(pb(l.xb(), G)) - M * M;
                          aa = +Math.sqrt(aa);
                          !p.eg &&
                            0 < M &&
                            M < tb(pb(K, G)) &&
                            5 > aa &&
                            (l.Vc(A.m(l.Va())), $b(zn(l), u), (p.eg = !0));
                        } else throw new T(A);
                      })(d, k, f)
                    )
                  );
                g.Hc(new D(((l, p) => () => !p.eg)(d, k))).N(
                  new D(
                    ((l, p, u) => () =>
                      new D(
                        ((A, G, K) => (M) => {
                          M = pb(A.xb(), M);
                          5 > tb(M) &&
                            ((M = sb(qb(M, xl(A.Va(), M)), yl(M))),
                            A.Vc(pb(A.Va(), qb(M, 2))),
                            $b(zn(A), G),
                            (K.eg = !0));
                        })(l, p, u)
                      ))(d, f, k)
                  )
                );
              })(this)
            )
          ),
          zn(this).e() &&
            (Qb(this, new $m("Success! You've destroyed all the bricks!")),
            je(this.kg)));
    }
  };
  e.cb = function () {
    return "BrickBreaker";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.cc;
      case 1:
        return this.kg;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof wl) {
      var b = this.cc,
        c = a.cc;
      return (null === b ? null === c : b.y(c)) ? this.kg === a.kg : !1;
    }
    return !1;
  };
  e.$classData = v({ Wl: 0 }, !1, "example.BrickBreaker", {
    Wl: 1,
    mg: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function Bn() {}
  Bn.prototype = new q();
  Bn.prototype.constructor = Bn;
  e = Bn.prototype;
  e.cb = function () {
    return "Empty";
  };
  e.lb = function () {
    return 0;
  };
  e.mb = function (a) {
    return wg(Y(), a);
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
    eh: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  var Cn;
  function Dn() {
    Cn || (Cn = new Bn());
    return Cn;
  }
  function nn(a) {
    this.ah = a;
  }
  nn.prototype = new q();
  nn.prototype.constructor = nn;
  e = nn.prototype;
  e.cb = function () {
    return "Failure";
  };
  e.lb = function () {
    return 1;
  };
  e.mb = function (a) {
    return 0 === a ? this.ah : wg(Y(), a);
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof nn ? this.ah === a.ah : !1;
  };
  e.$classData = v({ am: 0 }, !1, "example.Failure", {
    am: 1,
    b: 1,
    Yl: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function zl(a, b) {
    this.Yd = null;
    this.Xd = !1;
    this.mk = this.lk = this.qi = this.pi = this.vi = null;
    this.V = this.ti = this.ui = this.ri = 0;
    this.Ic = a;
    this.si = b;
    Lb(this);
    b = En();
    if (null !== b) b = Hd(new Id(), b.dc(), b.qc());
    else throw new T(b);
    this.vi = b;
    this.V |= 1;
    this.pi = this.vi.dc();
    this.V |= 2;
    this.qi = this.vi.qc();
    this.V |= 4;
    this.lk = new ec(new z(40, a.g / 2), new z(5, 75), new z(0, 0), 0.5);
    this.V |= 8;
    this.mk = new ec(new z(a.i - 40, a.g / 2), new z(5, 75), new z(0, 0), -0.5);
    this.V |= 16;
    this.ri = 0;
    this.V |= 32;
    this.ui = 0;
    this.V |= 64;
    this.ti = 60;
    this.V |= 128;
    this.V |= 256;
  }
  zl.prototype = new Ob();
  zl.prototype.constructor = zl;
  e = zl.prototype;
  e.xb = function () {
    if (0 === (2 & this.V))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 13"
      );
    return this.pi;
  };
  e.sg = function (a) {
    this.pi = a;
    this.V |= 2;
  };
  e.Va = function () {
    if (0 === (4 & this.V))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 13"
      );
    return this.qi;
  };
  e.Vc = function (a) {
    this.qi = a;
    this.V |= 4;
  };
  function Fn(a) {
    if (0 === (8 & a.V))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 14"
      );
    return a.lk;
  }
  function Gn(a) {
    if (0 === (16 & a.V))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 16"
      );
    return a.mk;
  }
  function Hn(a) {
    if (0 === (32 & a.V))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 23"
      );
    return a.ri;
  }
  function In(a, b) {
    a.ri = b;
    a.V |= 32;
  }
  function Jn(a) {
    if (0 === (64 & a.V))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 24"
      );
    return a.ui;
  }
  function Kn(a, b) {
    a.ui = b;
    a.V |= 64;
  }
  e.Be = function () {
    if (0 === (128 & this.V))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Pong.scala: 26"
      );
    return this.ti;
  };
  e.Ae = function (a) {
    this.ti = a;
    this.V |= 128;
  };
  function Ln(a) {
    var b = Gn(a).Ub.i - a.xb().i,
      c = a.Va().g / a.Va().i;
    b = b * c + a.xb().g;
    Gn(a).fd = new z(0, 0);
    c = Gn(a).Ub.i - a.xb().i;
    +Math.abs(c) < 45 * a.Va().i + 25 &&
      0 < a.Va().i &&
      (b > Gn(a).Ub.g + Gn(a).pc.g / 2
        ? ((b = b - Gn(a).Ub.g - Gn(a).pc.g / 2),
          +Math.abs(b) > Gn(a).pc.g / 2 - 10 &&
            (Gn(a).fd = y(Gn(a).fd, new z(0, 8))))
        : b < Gn(a).Ub.g + Gn(a).pc.g / 2 &&
          ((b = b - Gn(a).Ub.g - Gn(a).pc.g / 2),
          +Math.abs(b) > Gn(a).pc.g / 2 - 10 &&
            (Gn(a).fd = pb(Gn(a).fd, new z(0, 8)))));
  }
  function En() {
    var a = new z(400, 300),
      b = th(sl().zb, 2),
      c = sl();
    return Hd(new Id(), a, new z(8 * (b - 0.5), 8 * (th(c.zb, 2) - 0.5)));
  }
  e.Xc = function (a) {
    var b = Jb(F());
    a.fillStyle = b;
    a.fillRect(0, 0, this.Ic.i, this.Ic.g);
    b = Cb(F());
    a.fillStyle = b;
    b = Cb(F());
    a.strokeStyle = b;
    Sb(new Rb(this, a), this.xb().i, this.xb().g);
    a.fillText("Score", (5 * this.Ic.i) / 10, this.Ic.g / 8);
    b = Hn(this);
    a.fillText("" + b, (5 * this.Ic.i) / 10 - 20, this.Ic.g / 8 + 15);
    b = Jn(this);
    a.fillText("" + b, (5 * this.Ic.i) / 10 + 20, this.Ic.g / 8 + 15);
    b = vb().db;
    var c = [Fn(this), Gn(this)];
    xb(b, B(new C(), c)).N(
      new D(
        ((d, f) => (g) => {
          Tb(
            new Rb(d, f),
            B(new C(), [
              new z(g.Ub.i + g.pc.i * g.Zd, g.Ub.g - g.pc.g * g.Zd),
              new z(g.Ub.i + g.pc.i * g.Zd, g.Ub.g + g.pc.g * g.Zd),
              new z(g.Ub.i - g.pc.i * g.Zd, g.Ub.g + g.pc.g * g.Zd),
            ])
          );
        })(this, a)
      )
    );
  };
  e.gg = function (a) {
    Fn(this).fd = new z(0, 0);
    a.F(38) && (Fn(this).fd = pb(Fn(this).fd, new z(0, 8)));
    a.F(40) && (Fn(this).fd = y(Fn(this).fd, new z(0, 8)));
    Ln(this);
    this.sg(y(this.xb(), this.Va()));
    if (0 >= this.xb().g) {
      a = this.Va();
      var b = this.Va().g;
      b = +Math.abs(b);
      this.Vc(new z(a.i, b));
    }
    this.xb().g >= this.Ic.g &&
      ((a = this.Va()),
      (b = this.Va().g),
      (b = -+Math.abs(b)),
      this.Vc(new z(a.i, b)));
    0 > this.xb().i && (Kn(this, (1 + Jn(this)) | 0), this.Ae(100));
    this.xb().i > this.Ic.i && (In(this, (1 + Hn(this)) | 0), this.Ae(100));
    if (0 < this.Be()) {
      a = En();
      if (null === a) throw new T(a);
      b = a.qc();
      this.sg(a.dc());
      this.Vc(b);
      this.Ae((-1 + this.Be()) | 0);
    } else 0 === this.Be() && this.Ae(-1);
    a = vb().db;
    b = [Fn(this), Gn(this)];
    xb(a, B(new C(), b)).N(
      new D(
        ((c) => (d) => {
          var f = pb(d.Ub, qb(d.pc, d.Zd)),
            g = y(d.Ub, qb(d.pc, d.Zd));
          ob(c.xb(), g, f, new z(5, 5)) &&
            (c.Va(),
            (f = d.Zd),
            (g = c.Va().i),
            (f = 2 * f * +Math.abs(g)),
            (g = c.Va().g + d.fd.g / 8),
            c.Vc(new z(f, g)));
          d.Ub = y(d.Ub, d.fd);
          f = d.Ub;
          g = +Math.min(d.Ub.g, c.Ic.g - d.pc.g / 2);
          g = +Math.max(g, d.pc.g / 2);
          d.Ub = new z(f.i, g);
        })(this)
      )
    );
  };
  e.cb = function () {
    return "Pong";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.Ic;
      case 1:
        return this.si;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof zl) {
      var b = this.Ic,
        c = a.Ic;
      return (null === b ? null === c : b.y(c)) ? this.si === a.si : !1;
    }
    return !1;
  };
  e.$classData = v({ fm: 0 }, !1, "example.Pong", {
    fm: 1,
    mg: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function Al(a, b) {
    this.Yd = null;
    this.Xd = !1;
    this.zi = this.yi = 0;
    this.nk = this.Ai = this.xi = null;
    this.vb = 0;
    this.wi = a;
    this.dh = b;
    Lb(this);
    this.yi = 0;
    this.vb = ((1 | this.vb) << 24) >> 24;
    this.zi = 10;
    this.vb = ((2 | this.vb) << 24) >> 24;
    this.xi = new z(1, 0);
    this.vb = ((4 | this.vb) << 24) >> 24;
    this.Ai = new z(40, 30);
    this.vb = ((8 | this.vb) << 24) >> 24;
    a = new (x(x(Cc)).G)(80);
    for (b = 0; 80 > b; ) {
      for (var c = b, d = new (x(Cc).G)(60), f = 0; 60 > f; )
        (d.a[f] = Dn()), (f = (1 + f) | 0);
      a.a[c] = d;
      b = (1 + b) | 0;
    }
    for (b = 0; ; ) {
      c = b;
      a.a[c].a[0] = new Mn(2147483647);
      a.a[c].a[59] = new Mn(2147483647);
      if (79 === b) break;
      b = (1 + b) | 0;
    }
    for (b = 0; ; ) {
      c = b;
      a.a[0].a[c] = new Mn(2147483647);
      a.a[79].a[c] = new Mn(2147483647);
      if (59 === b) break;
      b = (1 + b) | 0;
    }
    this.nk = a;
    this.vb = ((16 | this.vb) << 24) >> 24;
  }
  Al.prototype = new Ob();
  Al.prototype.constructor = Al;
  e = Al.prototype;
  e.yg = function () {
    if (0 === ((1 & this.vb) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 12"
      );
    return this.yi;
  };
  e.Ni = function (a) {
    this.yi = a;
    this.vb = ((1 | this.vb) << 24) >> 24;
  };
  e.q = function () {
    if (0 === ((2 & this.vb) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 13"
      );
    return this.zi;
  };
  function Nn(a) {
    if (0 === ((4 & a.vb) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 14"
      );
    return a.xi;
  }
  function On(a) {
    if (0 === ((8 & a.vb) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 15"
      );
    return a.Ai;
  }
  function Pn(a) {
    if (0 === ((16 & a.vb) << 24) >> 24)
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Snake.scala: 16"
      );
    return a.nk;
  }
  function Qn(a) {
    var b = Pn(a);
    Te();
    var c = null;
    c = [];
    for (var d = 0; d < b.a.length; ) {
      var f = b.a[d],
        g = (() => (u) => (u instanceof Um ? 1 : 0))(a);
      Te();
      var h = f.a.length,
        k = new t(h);
      if (0 < h) {
        var l = 0;
        if (null !== f)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof t)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Wa)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Ua)
          for (; l < h; ) {
            var p = f.a[l];
            k.a[l] = g(new n(p.bb, p.ab)) | 0;
            l = (1 + l) | 0;
          }
        else if (f instanceof Va)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Ra)
          for (; l < h; ) (k.a[l] = g(Na(f.a[l])) | 0), (l = (1 + l) | 0);
        else if (f instanceof Sa)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Ta)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else if (f instanceof Qa)
          for (; l < h; ) (k.a[l] = g(f.a[l]) | 0), (l = (1 + l) | 0);
        else throw new T(f);
      }
      g = Rh(wc(), k);
      for (g = new Rn(g.pe); g.l(); ) (h = Sn(g)), c.push(h);
      d = (1 + d) | 0;
    }
    a = new t(new Int32Array(c));
    a = Rh(wc(), a);
    be || (be = new Tn());
    return ae(a) | 0;
  }
  e.Xc = function (a) {
    a.fillStyle = "rgb(0, 0, 0)";
    a.fillRect(0, 0, 800, 800);
    for (var b = 0; ; ) {
      for (var c = b, d = 0; ; ) {
        var f = d,
          g = Pn(this).a[c].a[f];
        if (g instanceof Mn)
          (a.fillStyle = "rgb(200, 200, 200)"),
            a.fillRect(10 * c, 10 * f, 10, 10);
        else if (g instanceof Um) {
          g = g.Ue;
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
          Sb(new Rb(this, a), 10 * c + 5, 10 * f + 5);
        } else if (Dn() !== g) throw new T(g);
        if (59 === d) break;
        d = (1 + d) | 0;
      }
      if (79 === b) break;
      b = (1 + b) | 0;
    }
  };
  e.gg = function (a) {
    this.Ni((1 + this.yg()) | 0);
    if (0 === (this.yg() % 2 | 0)) {
      if (+Math.random() > 0.9 + Qn(this) / 10) {
        var b = th(sl().zb, 80),
          c = th(sl().zb, 60),
          d = Pn(this).a[b].a[c];
        Dn() === d &&
          ((d = 0 === th(sl().zb, 20) ? 5 : 2),
          (Pn(this).a[b].a[c] = new Um(375, d)));
      }
      this.Ai = y(On(this), Nn(this));
      this.vb = ((8 | this.vb) << 24) >> 24;
      b = Pn(this).a[Ga(On(this).i)].a[Ga(On(this).g)];
      b instanceof Mn
        ? (Qb(this, new $m("You hit a wall!")), je(this.dh))
        : (b instanceof Um &&
            ((b = b.Ue),
            (this.zi = (this.q() + b) | 0),
            (this.vb = ((2 | this.vb) << 24) >> 24)),
          (Pn(this).a[Ga(On(this).i)].a[Ga(On(this).g)] = new Mn(this.q())));
      a = a.F(37)
        ? new z(-1, 0)
        : a.F(39)
        ? new z(1, 0)
        : a.F(38)
        ? new z(0, -1)
        : a.F(40)
        ? new z(0, 1)
        : Nn(this);
      b = y(a, Nn(this));
      c = new z(0, 0);
      (null !== b && b.y(c)) ||
        ((this.xi = a), (this.vb = ((4 | this.vb) << 24) >> 24));
      for (a = 0; ; ) {
        b = a;
        for (c = 0; ; ) {
          d = c;
          var f = Pn(this).a[b],
            g = Pn(this).a[b].a[d];
          var h =
            g instanceof Mn && 1 === g.Bf
              ? !0
              : g instanceof Um && 1 === g.yf
              ? !0
              : !1;
          if (h) g = Dn();
          else if (g instanceof Mn) g = new Mn((-1 + g.Bf) | 0);
          else if (g instanceof Um) g = new Um((-1 + g.yf) | 0, g.Ue);
          else if (Dn() === g) g = Dn();
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
  e.cb = function () {
    return "Snake";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.wi;
      case 1:
        return this.dh;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof Al) {
      var b = this.wi,
        c = a.wi;
      return (null === b ? null === c : b.y(c)) ? this.dh === a.dh : !1;
    }
    return !1;
  };
  e.$classData = v({ im: 0 }, !1, "example.Snake", {
    im: 1,
    mg: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function Un() {}
  Un.prototype = new q();
  Un.prototype.constructor = Un;
  e = Un.prototype;
  e.cb = function () {
    return "Success";
  };
  e.lb = function () {
    return 0;
  };
  e.mb = function (a) {
    return wg(Y(), a);
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
    yb: 1,
    x: 1,
    c: 1,
  });
  var Vn;
  function on() {
    Vn || (Vn = new Un());
    return Vn;
  }
  function Wn(a, b) {
    var c = Ga(Xn(a).i),
      d = 0 >= c;
    if (d) var f = 0;
    else {
      var g = c >> 31;
      f = (0 === g ? -1 < (-2147483648 ^ c) : 0 < g) ? -1 : c;
    }
    g = (-1 + c) | 0;
    0 > f && bi(Pf(), 0, c, 1, !1);
    c = If().ea();
    for (d = new Zn(0, 1, g, d); d.je; )
      (g = $n(d)), (g = ao(a).a[g].a[b]), c.Ia(g);
    return c.Wa();
  }
  function bo(a, b, c, d, f) {
    var g = d.split("255").join("128");
    f.fillStyle = g;
    f.fillRect(co(a) + b * eo(a), c * eo(a), eo(a), eo(a));
    f.strokeStyle = d;
    f.strokeRect(co(a) + b * eo(a), c * eo(a), eo(a), eo(a));
  }
  function fo(a, b, c, d, f) {
    go(a, ho(a).v(b), c)
      .Hc(new D((() => (g) => null !== g)(a)))
      .N(
        new D(
          ((g, h, k, l) => (p) => {
            if (null !== p) {
              var u = p.qg();
              p = p.Cf();
              var A = new z(u, p),
                G = new z(0, 0),
                K = Xn(g);
              (ob(A, G, K, new z(0, 0)) || h) && bo(g, u, p, Kb().v(k), l);
            } else throw new T(p);
          })(a, d, b, f)
        )
      );
  }
  function Bl(a, b) {
    this.Yd = null;
    this.Xd = !1;
    this.sk = this.Bi = null;
    this.ok = this.Ei = 0;
    this.qk = null;
    this.Ci = this.Fi = this.Di = this.rk = 0;
    this.Hi = this.pk = this.Gi = null;
    this.J = 0;
    this.$d = a;
    this.fh = b;
    Lb(this);
    b = vb().db;
    var c = vb().db,
      d = [
        new t(new Int32Array([0, 1, 0, 0])),
        new t(new Int32Array([0, 1, 0, 0])),
        new t(new Int32Array([0, 1, 0, 0])),
        new t(new Int32Array([0, 1, 0, 0])),
      ];
    c = xb(c, B(new C(), d));
    d = vb().db;
    var f = [new t(new Int32Array([1, 1])), new t(new Int32Array([1, 1]))];
    d = xb(d, B(new C(), f));
    f = vb().db;
    var g = [
      new t(new Int32Array([1, 1, 0])),
      new t(new Int32Array([0, 1, 1])),
      new t(new Int32Array([0, 0, 0])),
    ];
    f = xb(f, B(new C(), g));
    g = vb().db;
    var h = [
      new t(new Int32Array([0, 1, 1])),
      new t(new Int32Array([1, 1, 0])),
      new t(new Int32Array([0, 0, 0])),
    ];
    g = xb(g, B(new C(), h));
    h = vb().db;
    var k = [
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([1, 1, 1])),
      new t(new Int32Array([0, 0, 0])),
    ];
    h = xb(h, B(new C(), k));
    k = vb().db;
    var l = [
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([1, 1, 0])),
    ];
    k = xb(k, B(new C(), l));
    l = vb().db;
    var p = [
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([0, 1, 0])),
      new t(new Int32Array([0, 1, 1])),
    ];
    c = [c, d, f, g, h, k, xb(l, B(new C(), p))];
    this.sk = xb(b, B(new C(), c));
    this.J |= 2;
    this.Ei = 0;
    this.J |= 4;
    this.J |= 8;
    this.ok = 20;
    this.J |= 16;
    this.qk = new z(13, a.g / eo(this));
    this.J |= 32;
    this.rk = (a.i - eo(this) * Xn(this).i) / 2;
    this.J |= 64;
    this.Di = 0;
    this.J |= 128;
    a = sl();
    b = ho(this).q();
    this.Fi = th(a.zb, b);
    this.J |= 256;
    a = sl();
    b = ho(this).q();
    this.Ci = th(a.zb, b);
    this.J |= 512;
    this.Gi = new z(Xn(this).i / 2, 0);
    this.J |= 1024;
    a = Ga(Xn(this).i);
    b = Ga(Xn(this).g);
    if (0 >= a) a = new (x(x(Gc)).G)(0);
    else {
      c = new (x(x(Gc)).G)(a);
      for (d = 0; d < a; ) {
        f = d;
        if (0 >= b) g = new (x(Gc).G)(0);
        else
          for (g = new (x(Gc).G)(b), h = 0; h < b; )
            (k = g.a),
              (l = h),
              null === this.Bi && null === this.Bi && (this.Bi = new Hc(this)),
              (k[l] = new Fc(this, Jb(F()))),
              (h = (1 + h) | 0);
        c.a[f] = g;
        d = (1 + d) | 0;
      }
      a = c;
    }
    this.pk = a;
    this.J |= 2048;
    this.Hi = cl();
    this.J |= 4096;
  }
  Bl.prototype = new Ob();
  Bl.prototype.constructor = Bl;
  function ho(a) {
    if (0 === (2 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 7"
      );
    return a.sk;
  }
  function go(a, b, c) {
    return b
      .hg()
      .Hc(new D((() => (d) => null !== d)(a)))
      .Cb(
        new D(
          ((d, f) => (g) => {
            if (null !== g) {
              var h = g.dc();
              g = g.Cf();
              wc();
              Kd || (Kd = new yd());
              h = zd(h);
              h = Md(
                new Ld(new D((() => (u) => null !== u)(d)), h),
                new D(
                  (() => (u) => {
                    if (null !== u) return 0 !== u.qg();
                    throw new T(u);
                  })(d)
                )
              );
              var k = null;
              k = [];
              for (var l = 0; l < Bd(Gd(), h.Eg); ) {
                var p = Jd(Gd(), h.Eg, l);
                if (h.gj.m(p)) {
                  if (null === p) throw new T(p);
                  p = new io((g + Ga(f.i)) | 0, (p.Cf() + Ga(f.g)) | 0);
                  k.push(p);
                }
                l = (1 + l) | 0;
              }
              return Nh(new (x(Ad).G)(k));
            }
            throw new T(g);
          })(a, c)
        )
      );
  }
  function jo(a) {
    if (0 === (4 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 54"
      );
    return a.Ei;
  }
  function ko(a, b) {
    a.Ei = b;
    a.J |= 4;
  }
  function eo(a) {
    if (0 === (16 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 56"
      );
    return a.ok;
  }
  function Xn(a) {
    if (0 === (32 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 57"
      );
    return a.qk;
  }
  function co(a) {
    if (0 === (64 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 58"
      );
    return a.rk;
  }
  function lo(a) {
    if (0 === (128 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 59"
      );
    return a.Di;
  }
  function mo(a, b) {
    a.Di = b;
    a.J |= 128;
  }
  function no(a) {
    if (0 === (256 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 60"
      );
    return a.Fi;
  }
  function oo(a, b) {
    a.Fi = b;
    a.J |= 256;
  }
  function po(a) {
    if (0 === (512 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 61"
      );
    return a.Ci;
  }
  function qo(a, b) {
    a.Ci = b;
    a.J |= 512;
  }
  function ro(a) {
    if (0 === (1024 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 62"
      );
    return a.Gi;
  }
  function so(a, b) {
    a.Gi = b;
    a.J |= 1024;
  }
  function ao(a) {
    if (0 === (2048 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 65"
      );
    return a.pk;
  }
  function to(a) {
    if (0 === (4096 & a.J))
      throw new E(
        "Uninitialized field: /home/brian/code/scala/scala-js-games/src/main/scala/example/Tetris.scala: 67"
      );
    return a.Hi;
  }
  function uo(a, b) {
    var c = b.q(),
      d = b.v(0).a.length,
      f = sb(new z(c - 1, d - 1), 2),
      g = vb().db;
    a = Vh(
      g,
      c,
      new H(
        ((G, K) => () => {
          Te();
          if (0 >= K) return new t(0);
          for (var M = new t(K), aa = 0; aa < K; )
            (M.a[aa] = 0), (aa = (1 + aa) | 0);
          return M;
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
              A = pb(new z(k, u), f);
            A = y(new z(-A.g, A.i), f);
            a.v(Ga(A.i)).a[Ga(A.g)] = b.v(k).a[u];
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
            b.v(g).a[l] = a.v(g).a[l];
            if (k === h) break;
            k = (1 + k) | 0;
          }
        if (c === f) break;
        c = (1 + c) | 0;
      }
  }
  function vo(a, b) {
    return go(a, ho(a).v(po(a)), ro(a))
      .Hc(new D((() => (c) => null !== c)(a)))
      .da(
        new D(
          ((c, d) => (f) => {
            if (null !== f) return Hd(new Id(), f, y(new z(f.qg(), f.Cf()), d));
            throw new T(f);
          })(a, b)
        )
      )
      .Hc(
        new D(
          ((c) => (d) => {
            if (null !== d) {
              var f = d.qc();
              if (null !== d.dc())
                return (
                  !ob(f, new z(0, 0), Xn(c), new z(0, 0)) ||
                  ao(c).a[Ga(f.i)].a[Ga(f.g)].Xe !== Jb(F())
                );
            }
            throw new T(d);
          })(a)
        )
      )
      .da(
        new D(
          (() => (c) => {
            if (null === c || null === c.dc()) throw new T(c);
          })(a)
        )
      );
  }
  function wo(a) {
    var b = vo(a, new z(0, 1)),
      c = go(a, ho(a).v(po(a)), ro(a));
    if (0 <= c.t()) {
      var d = c.t();
      d = new (x(Ad).G)(d);
      c.Pb(d, 0, 2147483647);
      c = d;
    } else {
      d = null;
      d = [];
      for (c = c.h(); c.l(); ) {
        var f = c.k();
        d.push(null === f ? null : f);
      }
      c = new (x(Ad).G)(d);
    }
    if (b.e()) so(a, y(ro(a), new z(0, 1)));
    else {
      b = new Ld(new D((() => (h) => null !== h)(a)), c);
      c = Bd(Gd(), b.Eg);
      for (d = 0; d < c; ) {
        f = Jd(Gd(), b.Eg, d);
        if (b.gj.m(f)) {
          var g = f;
          if (null !== g)
            (f = g.qg()), (g = g.Cf()), (ao(a).a[f].a[g].Xe = Kb().v(po(a)));
          else throw new T(g);
        }
        d = (1 + d) | 0;
      }
      qo(a, no(a));
      b = sl();
      c = ho(a).q();
      oo(a, th(b.zb, c));
      so(a, new z(Xn(a).i / 2, 0));
      vo(a, new z(0, 0)).e() ||
        (Qb(a, new $m("The board has filled up!")), je(a.fh));
    }
  }
  e = Bl.prototype;
  e.gg = function (a) {
    a.F(37) &&
      !to(this).F(37) &&
      vo(this, new z(-1, 0)).e() &&
      so(this, y(ro(this), new z(-1, 0)));
    a.F(39) &&
      !to(this).F(39) &&
      vo(this, new z(1, 0)).e() &&
      so(this, y(ro(this), new z(1, 0)));
    if (
      a.F(32) &&
      !to(this).F(32) &&
      (uo(this, ho(this).v(po(this))), !vo(this, new z(0, 0)).e())
    )
      for (var b = 0; ; ) {
        uo(this, ho(this).v(po(this)));
        if (2 === b) break;
        b = (1 + b) | 0;
      }
    a.F(40) && wo(this);
    this.Hi = a;
    this.J |= 4096;
    0 < jo(this) ? ko(this, (-1 + jo(this)) | 0) : (ko(this, 15), wo(this));
    a = (-1 + Ga(Xn(this).g)) | 0;
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
    xc();
    d = I();
    0 > c && bi(Pf(), a, 0, -1, !0);
    if (0 === c) b = d;
    else if (((a = new Zn(a, -1, 0, b)), a.je))
      for (c = b = new cn($n(a), d); a.je; ) {
        var f = new cn($n(a), d);
        c = c.sc = f;
      }
    else b = d;
    a = null;
    a = new oj(
      b,
      new D(
        ((k) => (l) => {
          var p = !0;
          for (l = Wn(k, l | 0).h(); p && l.l(); ) p = l.k().Xe !== Jb(F());
          return !p;
        })(this)
      )
    ).da(new D((() => (k) => k | 0)(this)));
    b = (-1 + Ga(Xn(this).g)) | 0;
    if (!(0 > b))
      for (;;) {
        d = b;
        c = a;
        if (c instanceof cn)
          (a = c),
            (c = a.Kh | 0),
            (a = a.sc),
            Wn(this, d)
              .Sj(Wn(this, c))
              .Hc(new D((() => (k) => null !== k)(this)))
              .N(
                new D(
                  (() => (k) => {
                    if (null !== k) k.dc().Xe = k.qc().Xe;
                    else throw new T(k);
                  })(this)
                )
              );
        else {
          mo(this, (1 + lo(this)) | 0);
          var g = ao(this).a[d];
          d = (() => (k) => {
            k.Xe = Jb(F());
          })(this);
          c = g.a.length;
          f = 0;
          if (null !== g) for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof t) for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Wa)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Ua)
            for (; f < c; ) {
              var h = g.a[f];
              d(new n(h.bb, h.ab));
              f = (1 + f) | 0;
            }
          else if (g instanceof Va)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Ra)
            for (; f < c; ) d(Na(g.a[f])), (f = (1 + f) | 0);
          else if (g instanceof Sa)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Ta)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else if (g instanceof Qa)
            for (; f < c; ) d(g.a[f]), (f = (1 + f) | 0);
          else throw new T(g);
        }
        if (0 === b) break;
        b = (-1 + b) | 0;
      }
  };
  e.Xc = function (a) {
    var b = Jb(F());
    a.fillStyle = b;
    a.fillRect(0, 0, this.$d.i, this.$d.g);
    a.textAlign = "left";
    b = Cb(F());
    a.fillStyle = b;
    a.fillText(
      "Lines Cleared: " + lo(this),
      1.3 * co(this) + Xn(this).i * eo(this),
      100
    );
    a.fillText("Next Block", 1.35 * co(this) + Xn(this).i * eo(this), 150);
    var c = Ga(Xn(this).i);
    b = (-1 + c) | 0;
    if (!(0 >= c))
      for (c = 0; ; ) {
        var d = c,
          f = Ga(Xn(this).g),
          g = (-1 + f) | 0;
        if (!(0 >= f))
          for (f = 0; ; ) {
            var h = f;
            bo(this, d, h, ao(this).a[d].a[h].Xe, a);
            if (f === g) break;
            f = (1 + f) | 0;
          }
        if (c === b) break;
        c = (1 + c) | 0;
      }
    fo(this, po(this), ro(this), !1, a);
    fo(this, no(this), new z(18, 9), !0, a);
    b = Cb(F());
    a.strokeStyle = b;
    b = new Rb(this, a);
    c = [new z(co(this), 0), new z(co(this), this.$d.g)];
    Tb(b, B(new C(), c));
    a = new Rb(this, a);
    b = [
      new z(this.$d.i - co(this), 0),
      new z(this.$d.i - co(this), this.$d.g),
    ];
    Tb(a, B(new C(), b));
  };
  e.cb = function () {
    return "Tetris";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.$d;
      case 1:
        return this.fh;
      default:
        return wg(Y(), a);
    }
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    if (this === a) return !0;
    if (a instanceof Bl) {
      var b = this.$d,
        c = a.$d;
      return (null === b ? null === c : b.y(c)) ? this.fh === a.fh : !1;
    }
    return !1;
  };
  e.$classData = v({ lm: 0 }, !1, "example.Tetris", {
    lm: 1,
    mg: 1,
    b: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function Mn(a) {
    this.Bf = a;
  }
  Mn.prototype = new q();
  Mn.prototype.constructor = Mn;
  e = Mn.prototype;
  e.cb = function () {
    return "Wall";
  };
  e.lb = function () {
    return 1;
  };
  e.mb = function (a) {
    return 0 === a ? this.Bf : wg(Y(), a);
  };
  e.H = function () {
    var a = Da("Wall");
    a = Y().p(-889275714, a);
    var b = this.Bf;
    a = Y().p(a, b);
    return Y().L(a, 1);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof Mn ? this.Bf === a.Bf : !1;
  };
  e.$classData = v({ pm: 0 }, !1, "example.Wall", {
    pm: 1,
    b: 1,
    eh: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function xo() {}
  xo.prototype = new Dl();
  xo.prototype.constructor = xo;
  function yo() {}
  yo.prototype = xo.prototype;
  class uh extends Fl {
    constructor() {
      super();
      ze(this, "/ by zero");
    }
  }
  uh.prototype.$classData = v({ Cm: 0 }, !1, "java.lang.ArithmeticException", {
    Cm: 1,
    rc: 1,
    hc: 1,
    ec: 1,
    b: 1,
    c: 1,
  });
  function pd(a) {
    var b = new zo();
    ze(b, a);
    return b;
  }
  function Ao() {
    var a = new zo();
    ze(a, null);
    return a;
  }
  class zo extends Fl {}
  zo.prototype.$classData = v(
    { Jk: 0 },
    !1,
    "java.lang.IllegalArgumentException",
    { Jk: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  class ve extends Fl {
    constructor(a) {
      super();
      ze(this, a);
    }
  }
  ve.prototype.$classData = v(
    { Nm: 0 },
    !1,
    "java.lang.IllegalStateException",
    { Nm: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  function xg(a, b) {
    ze(a, b);
    return a;
  }
  class yg extends Fl {}
  yg.prototype.$classData = v(
    { Ri: 0 },
    !1,
    "java.lang.IndexOutOfBoundsException",
    { Ri: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  v({ Rm: 0 }, !1, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
    Rm: 1,
    sm: 1,
    b: 1,
    qm: 1,
    Fm: 1,
    rm: 1,
  });
  class od extends Fl {
    constructor() {
      super();
      ze(this, null);
    }
  }
  od.prototype.$classData = v(
    { Um: 0 },
    !1,
    "java.lang.NegativeArraySizeException",
    { Um: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  class og extends Fl {
    constructor() {
      super();
      ze(this, null);
    }
  }
  og.prototype.$classData = v({ Vm: 0 }, !1, "java.lang.NullPointerException", {
    Vm: 1,
    rc: 1,
    hc: 1,
    ec: 1,
    b: 1,
    c: 1,
  });
  function Yd(a) {
    var b = new ij();
    ze(b, a);
    return b;
  }
  class ij extends Fl {}
  ij.prototype.$classData = v(
    { fn: 0 },
    !1,
    "java.lang.UnsupportedOperationException",
    { fn: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  class Bo extends Fl {
    constructor() {
      super();
      ze(this, "mutation occurred during iteration");
    }
  }
  Bo.prototype.$classData = v(
    { ln: 0 },
    !1,
    "java.util.ConcurrentModificationException",
    { ln: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  function Uk(a) {
    var b = new Co();
    ze(b, a);
    return b;
  }
  function Do() {
    var a = new Co();
    ze(a, null);
    return a;
  }
  class Co extends Fl {}
  Co.prototype.$classData = v(
    { mn: 0 },
    !1,
    "java.util.NoSuchElementException",
    { mn: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  function Dh() {}
  Dh.prototype = new Nl();
  Dh.prototype.constructor = Dh;
  Dh.prototype.m = function (a) {
    return a;
  };
  Dh.prototype.z = function () {
    return "generalized constraint";
  };
  Dh.prototype.$classData = v({ sn: 0 }, !1, "scala.$less$colon$less$$anon$1", {
    sn: 1,
    bs: 1,
    cs: 1,
    b: 1,
    O: 1,
    c: 1,
  });
  class T extends Fl {
    constructor(a) {
      super();
      this.Tk = null;
      this.aj = !1;
      this.ph = a;
      ze(this, null);
    }
    kh() {
      if (!this.aj && !this.aj) {
        if (null === this.ph) var a = "null";
        else
          try {
            a = Fa(this.ph) + " (of class " + ya(this.ph) + ")";
          } catch (b) {
            if (
              (Bg || (Bg = new Ag()),
              null !== (b instanceof qh ? b : new Cg(b)))
            )
              a = "an instance of class " + ya(this.ph);
            else throw b;
          }
        this.Tk = a;
        this.aj = !0;
      }
      return this.Tk;
    }
  }
  T.prototype.$classData = v({ wn: 0 }, !1, "scala.MatchError", {
    wn: 1,
    rc: 1,
    hc: 1,
    ec: 1,
    b: 1,
    c: 1,
  });
  function Eo() {}
  Eo.prototype = new q();
  Eo.prototype.constructor = Eo;
  function Fo() {}
  Fo.prototype = Eo.prototype;
  Eo.prototype.e = function () {
    return this === Mb();
  };
  Eo.prototype.t = function () {
    return this.e() ? 0 : 1;
  };
  Eo.prototype.h = function () {
    if (this.e()) return W().Z;
    W();
    var a = this.zg();
    return new Go(a);
  };
  function Hd(a, b, c) {
    a.Ii = b;
    a.Ji = c;
    return a;
  }
  function Id() {
    this.Ji = this.Ii = null;
  }
  Id.prototype = new q();
  Id.prototype.constructor = Id;
  function Ho() {}
  e = Ho.prototype = Id.prototype;
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    a: switch (a) {
      case 0:
        a = this.dc();
        break a;
      case 1:
        a = this.qc();
        break a;
      default:
        throw xg(new yg(), a + " is out of bounds (min 0, max 1)");
    }
    return a;
  };
  e.dc = function () {
    return this.Ii;
  };
  e.qc = function () {
    return this.Ji;
  };
  e.z = function () {
    return "(" + this.dc() + "," + this.qc() + ")";
  };
  e.cb = function () {
    return "Tuple2";
  };
  e.H = function () {
    return Hg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof Id
      ? J(L(), this.dc(), a.dc()) && J(L(), this.qc(), a.qc())
      : !1;
  };
  e.qg = function () {
    return this.dc() | 0;
  };
  e.Cf = function () {
    return this.qc() | 0;
  };
  var Ad = v({ vk: 0 }, !1, "scala.Tuple2", {
    vk: 1,
    b: 1,
    An: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  Id.prototype.$classData = Ad;
  function An(a, b, c) {
    this.ng = a;
    this.og = b;
    this.pg = c;
  }
  An.prototype = new q();
  An.prototype.constructor = An;
  e = An.prototype;
  e.lb = function () {
    return 3;
  };
  e.mb = function (a) {
    a: switch (a) {
      case 0:
        a = this.ng;
        break a;
      case 1:
        a = this.og;
        break a;
      case 2:
        a = this.pg;
        break a;
      default:
        throw xg(new yg(), a + " is out of bounds (min 0, max 2)");
    }
    return a;
  };
  e.z = function () {
    return "(" + this.ng + "," + this.og + "," + this.pg + ")";
  };
  e.cb = function () {
    return "Tuple3";
  };
  e.H = function () {
    return Hg(this);
  };
  e.y = function (a) {
    return this === a
      ? !0
      : a instanceof An
      ? J(L(), this.ng, a.ng) && J(L(), this.og, a.og) && J(L(), this.pg, a.pg)
      : !1;
  };
  e.$classData = v({ zm: 0 }, !1, "scala.Tuple3", {
    zm: 1,
    b: 1,
    gs: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function Io(a) {
    this.hj = a;
  }
  Io.prototype = new aj();
  Io.prototype.constructor = Io;
  Io.prototype.$classData = v(
    { Co: 0 },
    !1,
    "scala.collection.ClassTagSeqFactory$AnySeqDelegate",
    { Co: 1, Es: 1, b: 1, Eb: 1, c: 1, Nc: 1 }
  );
  function Jo(a, b) {
    return a.ve(new Ko(a, b));
  }
  function Lo(a, b) {
    return a.X().W(new Mo(a, b));
  }
  function No(a) {
    this.Kf = 0;
    this.Wk = null;
    if (null === a) throw lb(null);
    this.Wk = a;
    this.Kf = a.q();
  }
  No.prototype = new Pl();
  No.prototype.constructor = No;
  No.prototype.l = function () {
    return 0 < this.Kf;
  };
  No.prototype.k = function () {
    return 0 < this.Kf
      ? ((this.Kf = (-1 + this.Kf) | 0), this.Wk.v(this.Kf))
      : W().Z.k();
  };
  No.prototype.$classData = v(
    { Eo: 0 },
    !1,
    "scala.collection.IndexedSeqOps$$anon$1",
    { Eo: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Oo(a) {
    return de(a, a.Wc() + "(", ", ");
  }
  function Td(a) {
    return !!(a && a.$classData && a.$classData.Ib.B);
  }
  function Po(a, b) {
    this.Mf = null;
    this.ef = 0;
    this.Yk = this.ij = null;
    if (null === a) throw lb(null);
    this.ij = a;
    this.Yk = b;
    this.Mf = W().Z;
    this.ef = -1;
  }
  Po.prototype = new Pl();
  Po.prototype.constructor = Po;
  Po.prototype.l = function () {
    if (-1 === this.ef) {
      for (; !this.Mf.l(); ) {
        if (!this.ij.l()) return (this.ef = 0), (this.Mf = W().Z), !1;
        this.Mf = null;
        this.Mf = this.Yk.m(this.ij.k()).h();
        this.ef = -1;
      }
      this.ef = 1;
      return !0;
    }
    return 1 === this.ef;
  };
  Po.prototype.k = function () {
    this.l() && (this.ef = -1);
    return this.Mf.k();
  };
  Po.prototype.$classData = v(
    { Oo: 0 },
    !1,
    "scala.collection.Iterator$$anon$10",
    { Oo: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Qo(a, b) {
    this.vh = this.wh = null;
    if (null === a) throw lb(null);
    this.vh = a;
    this.wh = b.h();
  }
  Qo.prototype = new Pl();
  Qo.prototype.constructor = Qo;
  e = Qo.prototype;
  e.t = function () {
    var a = this.vh.t(),
      b = this.wh.t();
    return a < b ? a : b;
  };
  e.l = function () {
    return this.vh.l() && this.wh.l();
  };
  e.Xi = function () {
    return Hd(new Id(), this.vh.k(), this.wh.k());
  };
  e.k = function () {
    return this.Xi();
  };
  e.$classData = v({ Po: 0 }, !1, "scala.collection.Iterator$$anon$14", {
    Po: 1,
    la: 1,
    b: 1,
    Y: 1,
    r: 1,
    s: 1,
  });
  function Ro(a) {
    this.yh = 0;
    this.xh = null;
    if (null === a) throw lb(null);
    this.xh = a;
    this.yh = 0;
  }
  Ro.prototype = new Pl();
  Ro.prototype.constructor = Ro;
  e = Ro.prototype;
  e.t = function () {
    return this.xh.t();
  };
  e.l = function () {
    return this.xh.l();
  };
  e.Xi = function () {
    var a = Hd(new Id(), this.xh.k(), this.yh);
    this.yh = (1 + this.yh) | 0;
    return a;
  };
  e.k = function () {
    return this.Xi();
  };
  e.$classData = v({ Qo: 0 }, !1, "scala.collection.Iterator$$anon$16", {
    Qo: 1,
    la: 1,
    b: 1,
    Y: 1,
    r: 1,
    s: 1,
  });
  function wj() {}
  wj.prototype = new Pl();
  wj.prototype.constructor = wj;
  wj.prototype.l = function () {
    return !1;
  };
  wj.prototype.t = function () {
    return 0;
  };
  wj.prototype.k = function () {
    throw Uk("next on empty iterator");
  };
  wj.prototype.$classData = v(
    { Ro: 0 },
    !1,
    "scala.collection.Iterator$$anon$19",
    { Ro: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Go(a) {
    this.To = a;
    this.jj = !1;
  }
  Go.prototype = new Pl();
  Go.prototype.constructor = Go;
  Go.prototype.l = function () {
    return !this.jj;
  };
  Go.prototype.k = function () {
    if (this.jj) return W().Z.k();
    this.jj = !0;
    return this.To;
  };
  Go.prototype.$classData = v(
    { So: 0 },
    !1,
    "scala.collection.Iterator$$anon$20",
    { So: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function So(a, b) {
    this.Zk = a;
    this.Wo = b;
    this.zh = 0;
  }
  So.prototype = new Pl();
  So.prototype.constructor = So;
  So.prototype.t = function () {
    var a = (this.Zk - this.zh) | 0;
    return 0 < a ? a : 0;
  };
  So.prototype.l = function () {
    return this.zh < this.Zk;
  };
  So.prototype.k = function () {
    return this.l() ? ((this.zh = (1 + this.zh) | 0), je(this.Wo)) : W().Z.k();
  };
  So.prototype.$classData = v(
    { Vo: 0 },
    !1,
    "scala.collection.Iterator$$anon$22",
    { Vo: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function To(a, b, c) {
    this.Ah = null;
    this.Bh = !1;
    this.al = this.Gg = null;
    this.$k = !1;
    if (null === a) throw lb(null);
    this.Gg = a;
    this.al = b;
    this.$k = c;
    this.Bh = !1;
  }
  To.prototype = new Pl();
  To.prototype.constructor = To;
  To.prototype.l = function () {
    if (!this.Bh) {
      if (!this.Gg.l()) return !1;
      for (this.Ah = this.Gg.k(); !!this.al.m(this.Ah) === this.$k; ) {
        if (!this.Gg.l()) return !1;
        this.Ah = this.Gg.k();
      }
      this.Bh = !0;
    }
    return !0;
  };
  To.prototype.k = function () {
    return this.l() ? ((this.Bh = !1), this.Ah) : W().Z.k();
  };
  To.prototype.$classData = v(
    { Xo: 0 },
    !1,
    "scala.collection.Iterator$$anon$6",
    { Xo: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Uo(a, b) {
    this.bl = this.Ch = null;
    if (null === a) throw lb(null);
    this.Ch = a;
    this.bl = b;
  }
  Uo.prototype = new Pl();
  Uo.prototype.constructor = Uo;
  Uo.prototype.t = function () {
    return this.Ch.t();
  };
  Uo.prototype.l = function () {
    return this.Ch.l();
  };
  Uo.prototype.k = function () {
    return this.bl.m(this.Ch.k());
  };
  Uo.prototype.$classData = v(
    { Yo: 0 },
    !1,
    "scala.collection.Iterator$$anon$9",
    { Yo: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Ql(a) {
    this.$c = a;
    this.Qd = this.Dd = null;
    this.ff = !1;
  }
  Ql.prototype = new Pl();
  Ql.prototype.constructor = Ql;
  Ql.prototype.l = function () {
    if (this.ff) return !0;
    if (null !== this.$c) {
      if (this.$c.l()) return (this.ff = !0);
      a: for (;;) {
        if (null === this.Dd) {
          this.Qd = this.$c = null;
          var a = !1;
          break a;
        }
        this.$c = je(this.Dd.ap).h();
        this.Qd === this.Dd && (this.Qd = this.Qd.Dh);
        for (this.Dd = this.Dd.Dh; this.$c instanceof Ql; )
          (a = this.$c),
            (this.$c = a.$c),
            (this.ff = a.ff),
            null !== a.Dd &&
              (null === this.Qd && (this.Qd = a.Qd),
              (a.Qd.Dh = this.Dd),
              (this.Dd = a.Dd));
        if (this.ff) {
          a = !0;
          break a;
        }
        if (null !== this.$c && this.$c.l()) {
          a = this.ff = !0;
          break a;
        }
      }
      return a;
    }
    return !1;
  };
  Ql.prototype.k = function () {
    return this.l() ? ((this.ff = !1), this.$c.k()) : W().Z.k();
  };
  Ql.prototype.wd = function (a) {
    a = new ge(a, null);
    null === this.Dd ? (this.Dd = a) : (this.Qd.Dh = a);
    this.Qd = a;
    null === this.$c && (this.$c = W().Z);
    return this;
  };
  Ql.prototype.$classData = v(
    { Zo: 0 },
    !1,
    "scala.collection.Iterator$ConcatIterator",
    { Zo: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Vo(a) {
    this.Eh = this.el = null;
    this.el = a;
    this.Eh = new he(this, new H(((b) => () => b.el)(this)));
  }
  Vo.prototype = new Pl();
  Vo.prototype.constructor = Vo;
  Vo.prototype.l = function () {
    return !ie(this.Eh).e();
  };
  Vo.prototype.k = function () {
    if (this.l()) {
      var a = ie(this.Eh),
        b = a.u();
      this.Eh = new he(this, new H(((c, d) => () => d.w())(this, a)));
      return b;
    }
    return W().Z.k();
  };
  Vo.prototype.$classData = v(
    { bp: 0 },
    !1,
    "scala.collection.LinearSeqIterator",
    { bp: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Wo(a) {
    for (var b = 0; !a.e(); ) (b = (1 + b) | 0), (a = a.w());
    return b;
  }
  function Xo(a) {
    if (a.e()) throw Uk("LinearSeq.last");
    var b = a;
    for (a = a.w(); !a.e(); ) (b = a), (a = a.w());
    return b.u();
  }
  function mn(a, b) {
    if (0 > b) throw xg(new yg(), "" + b);
    a = a.Jb(b);
    if (a.e()) throw xg(new yg(), "" + b);
    return a.u();
  }
  function Yo(a, b) {
    for (; !a.e(); ) {
      if (b.m(a.u())) return !0;
      a = a.w();
    }
    return !1;
  }
  function Zo(a, b) {
    for (; !a.e(); ) {
      if (J(L(), a.u(), b)) return !0;
      a = a.w();
    }
    return !1;
  }
  function $o(a, b) {
    if (b && b.$classData && b.$classData.Ib.Hg)
      a: for (;;) {
        if (a === b) {
          a = !0;
          break a;
        }
        if ((a.e() ? 0 : !b.e()) && J(L(), a.u(), b.u()))
          (a = a.w()), (b = b.w());
        else {
          a = a.e() && b.e();
          break a;
        }
      }
    else a = Wl(a, b);
    return a;
  }
  function ap(a, b, c) {
    var d = 0 < c ? c : 0;
    for (a = a.Jb(c); !a.e(); ) {
      if (b.m(a.u())) return d;
      d = (1 + d) | 0;
      a = a.w();
    }
    return -1;
  }
  function bp(a, b) {
    for (var c = 0; ; ) {
      if (c === b) return a.e() ? 0 : 1;
      if (a.e()) return -1;
      c = (1 + c) | 0;
      a = a.w();
    }
  }
  function cp(a) {
    this.Hh = a;
  }
  cp.prototype = new Pl();
  cp.prototype.constructor = cp;
  cp.prototype.l = function () {
    return !this.Hh.e();
  };
  cp.prototype.k = function () {
    var a = this.Hh.u();
    this.Hh = this.Hh.w();
    return a;
  };
  cp.prototype.$classData = v(
    { ep: 0 },
    !1,
    "scala.collection.StrictOptimizedLinearSeqOps$$anon$1",
    { ep: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function Ok() {
    this.ge = this.mf = null;
    this.ge = new Re(0, 0, vd().Rk, vd().$i, 0, 0);
  }
  Ok.prototype = new q();
  Ok.prototype.constructor = Ok;
  e = Ok.prototype;
  e.ac = function () {};
  function $h(a, b, c, d, f, g) {
    if (b instanceof Re) {
      var h = Ge(P(), f, g),
        k = He(P(), h);
      if (0 !== (b.R & k)) {
        a = Ke(P(), b.R, h, k);
        h = b.gc(a);
        var l = b.zd(a);
        l === d && J(L(), h, c)
          ? ((d = wk(b, k)), (b.Ab.a[d] = h))
          : ((a = Od(Qd(), l)),
            (d = vk(b, h, l, a, c, d, f, (5 + g) | 0)),
            (f = wk(b, k)),
            (c = (((-1 + b.Ab.a.length) | 0) - xk(b, k)) | 0),
            b.Ab.I((1 + f) | 0, b.Ab, f, (c - f) | 0),
            (b.Ab.a[c] = d),
            (b.R ^= k),
            (b.Ma |= k),
            (b.Yb = Ce(b.Yb, f)),
            (b.Xa = (((-1 + b.Xa) | 0) + d.Sa()) | 0),
            (b.zc = (((b.zc - a) | 0) + d.vd()) | 0));
      } else if (0 !== (b.Ma & k))
        (k = Ke(P(), b.Ma, h, k)),
          (k = b.Od(k)),
          (h = k.Sa()),
          (l = k.vd()),
          $h(a, k, c, d, f, (5 + g) | 0),
          (b.Xa = (b.Xa + ((k.Sa() - h) | 0)) | 0),
          (b.zc = (b.zc + ((k.vd() - l) | 0)) | 0);
      else {
        g = wk(b, k);
        h = b.Ab;
        a = new r((1 + h.a.length) | 0);
        h.I(0, a, 0, g);
        a.a[g] = c;
        h.I(g, a, (1 + g) | 0, (h.a.length - g) | 0);
        c = b.Yb;
        if (0 > g) throw dp();
        if (g > c.a.length) throw dp();
        h = new t((1 + c.a.length) | 0);
        c.I(0, h, 0, g);
        h.a[g] = d;
        c.I(g, h, (1 + g) | 0, (c.a.length - g) | 0);
        b.R |= k;
        b.Ab = a;
        b.Yb = h;
        b.Xa = (1 + b.Xa) | 0;
        b.zc = (b.zc + f) | 0;
      }
    } else if (b instanceof Ck)
      (d = Vl(b.Kb, c)), (b.Kb = 0 > d ? b.Kb.fc(c) : b.Kb.wf(d, c));
    else throw new T(b);
  }
  function Pk(a) {
    if (0 === a.ge.Xa) return Rk().Sf;
    null === a.mf && (a.mf = new Nk(a.ge));
    return a.mf;
  }
  function ep(a, b) {
    null !== a.mf && (a.ge = Ik(a.ge));
    a.mf = null;
    var c = vg(Y(), b),
      d = Od(Qd(), c);
    $h(a, a.ge, b, c, d, 0);
    return a;
  }
  function Qk(a, b) {
    null !== a.mf && (a.ge = Ik(a.ge));
    a.mf = null;
    if (b instanceof Nk) new Zh(a, b);
    else for (b = b.h(); b.l(); ) ep(a, b.k());
    return a;
  }
  e.wb = function (a) {
    return Qk(this, a);
  };
  e.Ia = function (a) {
    return ep(this, a);
  };
  e.Wa = function () {
    return Pk(this);
  };
  e.$classData = v({ Gp: 0 }, !1, "scala.collection.immutable.HashSetBuilder", {
    Gp: 1,
    b: 1,
    vf: 1,
    Qc: 1,
    oc: 1,
    nc: 1,
  });
  function fp() {
    this.ad = null;
    this.ad = Mf();
  }
  fp.prototype = new Ul();
  fp.prototype.constructor = fp;
  fp.prototype.W = function (a) {
    return gp(a) ? a : Tl.prototype.we.call(this, a);
  };
  fp.prototype.we = function (a) {
    return gp(a) ? a : Tl.prototype.we.call(this, a);
  };
  fp.prototype.$classData = v(
    { Ip: 0 },
    !1,
    "scala.collection.immutable.IndexedSeq$",
    { Ip: 1, lj: 1, b: 1, Nc: 1, Eb: 1, c: 1 }
  );
  var hp;
  function If() {
    hp || (hp = new fp());
    return hp;
  }
  function Bm() {
    this.ol = this.Tf = null;
    ip(this);
  }
  Bm.prototype = new q();
  Bm.prototype.constructor = Bm;
  e = Bm.prototype;
  e.ac = function () {};
  function ip(a) {
    var b = new te();
    X();
    a.ol = new gm(new H(((c, d) => () => ue(d))(a, b)));
    a.Tf = b;
  }
  function jp(a) {
    we(a.Tf, new H((() => () => Wk())(a)));
    return a.ol;
  }
  function kp(a, b) {
    var c = new te();
    we(
      a.Tf,
      new H(
        ((d, f, g) => () => {
          X();
          X();
          return new Sk(f, new gm(new H(((h, k) => () => ue(k))(d, g))));
        })(a, b, c)
      )
    );
    a.Tf = c;
    return a;
  }
  function lp(a, b) {
    if (0 !== b.t()) {
      var c = new te();
      we(
        a.Tf,
        new H(
          ((d, f, g) => () =>
            jm(X(), f.h(), new H(((h, k) => () => ue(k))(d, g))))(a, b, c)
        )
      );
      a.Tf = c;
    }
    return a;
  }
  e.wb = function (a) {
    return lp(this, a);
  };
  e.Ia = function (a) {
    return kp(this, a);
  };
  e.Wa = function () {
    return jp(this);
  };
  e.$classData = v(
    { Np: 0 },
    !1,
    "scala.collection.immutable.LazyList$LazyBuilder",
    { Np: 1, b: 1, vf: 1, Qc: 1, oc: 1, nc: 1 }
  );
  function mp(a) {
    this.Ng = a;
  }
  mp.prototype = new Pl();
  mp.prototype.constructor = mp;
  mp.prototype.l = function () {
    return !this.Ng.e();
  };
  mp.prototype.k = function () {
    if (this.Ng.e()) return W().Z.k();
    var a = Z(this.Ng).u();
    this.Ng = Z(this.Ng).Ta();
    return a;
  };
  mp.prototype.$classData = v(
    { Pp: 0 },
    !1,
    "scala.collection.immutable.LazyList$LazyIterator",
    { Pp: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function np() {
    op = this;
    Hd(new Id(), I(), I());
  }
  np.prototype = new q();
  np.prototype.constructor = np;
  e = np.prototype;
  e.gd = function (a) {
    return yc(I(), a);
  };
  e.ea = function () {
    return new pp();
  };
  e.Bb = function () {
    return I();
  };
  e.W = function (a) {
    return yc(I(), a);
  };
  e.$classData = v({ Xp: 0 }, !1, "scala.collection.immutable.List$", {
    Xp: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var op;
  function xc() {
    op || (op = new np());
    return op;
  }
  function qp(a) {
    a.Oc <= a.Fb && W().Z.k();
    a.rf = (1 + a.rf) | 0;
    for (var b = a.rl.Kd(a.rf); 0 === b.a.length; )
      (a.rf = (1 + a.rf) | 0), (b = a.rl.Kd(a.rf));
    a.Nh = a.Vf;
    var c = (a.$p / 2) | 0,
      d = (a.rf - c) | 0;
    a.qf = (((1 + c) | 0) - (0 > d ? -d | 0 : d)) | 0;
    c = a.qf;
    switch (c) {
      case 1:
        a.Ed = b;
        break;
      case 2:
        a.nf = b;
        break;
      case 3:
        a.of = b;
        break;
      case 4:
        a.pf = b;
        break;
      case 5:
        a.Uf = b;
        break;
      case 6:
        a.zj = b;
        break;
      default:
        throw new T(c);
    }
    a.Vf = (a.Nh + ca(b.a.length, 1 << ca(5, (-1 + a.qf) | 0))) | 0;
    a.Vf > a.Ge && (a.Vf = a.Ge);
    1 < a.qf && (a.Pg = (-1 + (1 << ca(5, a.qf))) | 0);
  }
  function rp(a) {
    var b = (((a.Fb - a.Oc) | 0) + a.Ge) | 0;
    b === a.Vf && qp(a);
    if (1 < a.qf) {
      b = (b - a.Nh) | 0;
      var c = a.Pg ^ b;
      1024 > c
        ? (a.Ed = a.nf.a[31 & ((b >>> 5) | 0)])
        : (32768 > c
            ? (a.nf = a.of.a[31 & ((b >>> 10) | 0)])
            : (1048576 > c
                ? (a.of = a.pf.a[31 & ((b >>> 15) | 0)])
                : (33554432 > c
                    ? (a.pf = a.Uf.a[31 & ((b >>> 20) | 0)])
                    : ((a.Uf = a.zj.a[(b >>> 25) | 0]), (a.pf = a.Uf.a[0])),
                  (a.of = a.pf.a[0])),
              (a.nf = a.of.a[0])),
          (a.Ed = a.nf.a[0]));
      a.Pg = b;
    }
    a.Oc = (a.Oc - a.Fb) | 0;
    b = a.Ed.a.length;
    c = a.Oc;
    a.Fe = b < c ? b : c;
    a.Fb = 0;
  }
  function sp(a, b, c) {
    this.zj = this.Uf = this.pf = this.of = this.nf = null;
    this.rl = a;
    this.Ge = b;
    this.$p = c;
    this.Ed = a.d;
    this.Fe = this.Ed.a.length;
    this.Pg = this.Fb = 0;
    this.Oc = this.Ge;
    this.rf = 0;
    this.qf = 1;
    this.Nh = 0;
    this.Vf = this.Fe;
  }
  sp.prototype = new q();
  sp.prototype.constructor = sp;
  e = sp.prototype;
  e.h = function () {
    return this;
  };
  e.e = function () {
    return this.Oc <= this.Fb;
  };
  e.wd = function (a) {
    return new Ql(this).wd(a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.ze = function (a) {
    return Xd(this, a);
  };
  e.ae = function (a, b, c, d) {
    return fe(this, a, b, c, d);
  };
  e.t = function () {
    return (this.Oc - this.Fb) | 0;
  };
  e.l = function () {
    return this.Oc > this.Fb;
  };
  e.k = function () {
    this.Fb === this.Fe && rp(this);
    var a = this.Ed.a[this.Fb];
    this.Fb = (1 + this.Fb) | 0;
    return a;
  };
  e.xd = function (a) {
    if (0 < a) {
      a = (((((this.Fb - this.Oc) | 0) + this.Ge) | 0) + a) | 0;
      var b = this.Ge;
      a = a < b ? a : b;
      if (a === this.Ge) this.Fe = this.Oc = this.Fb = 0;
      else {
        for (; a >= this.Vf; ) qp(this);
        b = (a - this.Nh) | 0;
        if (1 < this.qf) {
          var c = this.Pg ^ b;
          1024 > c ||
            (32768 > c ||
              (1048576 > c ||
                (33554432 > c || (this.Uf = this.zj.a[(b >>> 25) | 0]),
                (this.pf = this.Uf.a[31 & ((b >>> 20) | 0)])),
              (this.of = this.pf.a[31 & ((b >>> 15) | 0)])),
            (this.nf = this.of.a[31 & ((b >>> 10) | 0)]));
          this.Ed = this.nf.a[31 & ((b >>> 5) | 0)];
          this.Pg = b;
        }
        this.Fe = this.Ed.a.length;
        this.Fb = 31 & b;
        this.Oc = (this.Fb + ((this.Ge - a) | 0)) | 0;
        this.Fe > this.Oc && (this.Fe = this.Oc);
      }
    }
    return this;
  };
  e.Pb = function (a, b, c) {
    var d = Bd(Gd(), a),
      f = (this.Oc - this.Fb) | 0;
    c = c < f ? c : f;
    d = (d - b) | 0;
    d = c < d ? c : d;
    d = 0 < d ? d : 0;
    c = 0;
    for (f = a instanceof r; c < d; ) {
      this.Fb === this.Fe && rp(this);
      var g = (d - c) | 0,
        h = (this.Ed.a.length - this.Fb) | 0;
      g = g < h ? g : h;
      f
        ? this.Ed.I(this.Fb, a, (b + c) | 0, g)
        : Gh(Ih(), this.Ed, this.Fb, a, (b + c) | 0, g);
      this.Fb = (this.Fb + g) | 0;
      c = (c + g) | 0;
    }
    return d;
  };
  e.$classData = v(
    { Zp: 0 },
    !1,
    "scala.collection.immutable.NewVectorIterator",
    { Zp: 1, b: 1, Y: 1, r: 1, s: 1, Vb: 1 }
  );
  function Hf() {
    this.ad = null;
    this.ad = xc();
  }
  Hf.prototype = new Ul();
  Hf.prototype.constructor = Hf;
  Hf.prototype.W = function (a) {
    return a && a.$classData && a.$classData.Ib.Bc
      ? a
      : Tl.prototype.we.call(this, a);
  };
  Hf.prototype.we = function (a) {
    return a && a.$classData && a.$classData.Ib.Bc
      ? a
      : Tl.prototype.we.call(this, a);
  };
  Hf.prototype.$classData = v(
    { eq: 0 },
    !1,
    "scala.collection.immutable.Seq$",
    { eq: 1, lj: 1, b: 1, Nc: 1, Eb: 1, c: 1 }
  );
  var Gf;
  function bl() {
    this.tf = null;
    this.Rg = !1;
    this.uf = null;
    this.tf = cl();
    this.Rg = !1;
  }
  bl.prototype = new q();
  bl.prototype.constructor = bl;
  e = bl.prototype;
  e.ac = function () {};
  function $k(a) {
    return a.Rg ? Pk(a.uf) : a.tf;
  }
  function al(a, b) {
    return a.Rg ? (Qk(a.uf, b), a) : fi(a, b);
  }
  e.wb = function (a) {
    return al(this, a);
  };
  e.Ia = function (a) {
    if (this.Rg) ep(this.uf, a);
    else if (4 > this.tf.Sa()) this.tf = this.tf.Hf(a);
    else if (!this.tf.F(a)) {
      this.Rg = !0;
      null === this.uf && (this.uf = new Ok());
      var b = this.tf;
      this.uf.Ia(b.me).Ia(b.Sd).Ia(b.Fd).Ia(b.Gd);
      ep(this.uf, a);
    }
    return this;
  };
  e.Wa = function () {
    return $k(this);
  };
  e.$classData = v({ oq: 0 }, !1, "scala.collection.immutable.SetBuilderImpl", {
    oq: 1,
    b: 1,
    vf: 1,
    Qc: 1,
    oc: 1,
    nc: 1,
  });
  function tp(a) {
    this.lf = this.jc = 0;
    this.fe = null;
    this.Ac = 0;
    this.Rf = this.Rd = null;
    this.Cj = 0;
    me(this, a);
    this.Cj = 0;
  }
  tp.prototype = new oe();
  tp.prototype.constructor = tp;
  e = tp.prototype;
  e.h = function () {
    return this;
  };
  e.e = function () {
    return !this.l();
  };
  e.wd = function (a) {
    return new Ql(this).wd(a);
  };
  e.xd = function (a) {
    return tj(this, a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.ze = function (a) {
    return Xd(this, a);
  };
  e.Pb = function (a, b, c) {
    return Zd(this, a, b, c);
  };
  e.ae = function (a, b, c, d) {
    return fe(this, a, b, c, d);
  };
  e.t = function () {
    return -1;
  };
  e.H = function () {
    return this.Cj;
  };
  e.k = function () {
    if (!this.l()) throw Do();
    this.Cj = this.fe.zd(this.jc);
    this.jc = (1 + this.jc) | 0;
    return this;
  };
  e.$classData = v(
    { pq: 0 },
    !1,
    "scala.collection.immutable.SetHashIterator",
    { pq: 1, ml: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function up(a) {
    this.lf = this.jc = 0;
    this.fe = null;
    this.Ac = 0;
    this.Rf = this.Rd = null;
    me(this, a);
  }
  up.prototype = new oe();
  up.prototype.constructor = up;
  e = up.prototype;
  e.h = function () {
    return this;
  };
  e.e = function () {
    return !this.l();
  };
  e.wd = function (a) {
    return new Ql(this).wd(a);
  };
  e.xd = function (a) {
    return tj(this, a);
  };
  e.z = function () {
    return "\x3citerator\x3e";
  };
  e.ze = function (a) {
    return Xd(this, a);
  };
  e.Pb = function (a, b, c) {
    return Zd(this, a, b, c);
  };
  e.ae = function (a, b, c, d) {
    return fe(this, a, b, c, d);
  };
  e.t = function () {
    return -1;
  };
  e.k = function () {
    if (!this.l()) throw Do();
    var a = this.fe.gc(this.jc);
    this.jc = (1 + this.jc) | 0;
    return a;
  };
  e.$classData = v({ qq: 0 }, !1, "scala.collection.immutable.SetIterator", {
    qq: 1,
    ml: 1,
    b: 1,
    Y: 1,
    r: 1,
    s: 1,
  });
  function vp() {
    this.Al = 0;
    this.Bl = null;
    wp = this;
    try {
      var a = Uc(
        Zc(),
        "scala.collection.immutable.Vector.defaultApplyPreferredMaxLength",
        "250"
      );
      var b = re(se(), a);
    } catch (c) {
      throw c;
    }
    this.Al = b;
    this.Bl = new sp(cf(), 0, 0);
  }
  vp.prototype = new q();
  vp.prototype.constructor = vp;
  e = vp.prototype;
  e.gd = function (a) {
    return Dk(0, a);
  };
  function Dk(a, b) {
    if (b instanceof xp) return b;
    a = b.t();
    return 0 === a
      ? cf()
      : 0 < a && 32 >= a
      ? (rf(b)
          ? ((a = new r(a)), b.Pb(a, 0, 2147483647), (b = a))
          : ((a = new r(a)), b.h().Pb(a, 0, 2147483647), (b = a)),
        new df(b))
      : yp(new zp(), b).Cd();
  }
  e.ea = function () {
    return new zp();
  };
  e.W = function (a) {
    return Dk(0, a);
  };
  e.Bb = function () {
    return cf();
  };
  e.$classData = v({ Aq: 0 }, !1, "scala.collection.immutable.Vector$", {
    Aq: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var wp;
  function Mf() {
    wp || (wp = new vp());
    return wp;
  }
  function Ap(a, b) {
    var c = b.a.length;
    if (0 < c) {
      32 === a.ga && Bp(a);
      var d = (32 - a.ga) | 0;
      d = d < c ? d : c;
      c = (c - d) | 0;
      b.I(0, a.za, a.ga, d);
      a.ga = (a.ga + d) | 0;
      0 < c && (Bp(a), b.I(d, a.za, 0, c), (a.ga = (a.ga + c) | 0));
    }
  }
  function Cp(a, b) {
    for (var c = b.qd(), d = 0; d < c; ) {
      var f = b.Kd(d),
        g = (c / 2) | 0,
        h = (d - g) | 0;
      g = (((1 + g) | 0) - (0 > h ? -h | 0 : h)) | 0;
      1 === g
        ? Ap(a, f)
        : nf(
            R(),
            (-2 + g) | 0,
            f,
            new D(
              ((k) => (l) => {
                Ap(k, l);
              })(a)
            )
          );
      d = (1 + d) | 0;
    }
    return a;
  }
  function Bp(a) {
    var b = (32 + a.Tb) | 0,
      c = b ^ a.Tb;
    a.Tb = b;
    a.ga = 0;
    if (1024 > c)
      1 === a.hb &&
        ((a.T = new (x(x(w)).G)(32)),
        (a.T.a[0] = a.za),
        (a.hb = (1 + a.hb) | 0)),
        (a.za = new r(32)),
        (a.T.a[31 & ((b >>> 5) | 0)] = a.za);
    else if (32768 > c)
      2 === a.hb &&
        ((a.ma = new (x(x(x(w))).G)(32)),
        (a.ma.a[0] = a.T),
        (a.hb = (1 + a.hb) | 0)),
        (a.za = new r(32)),
        (a.T = new (x(x(w)).G)(32)),
        (a.T.a[31 & ((b >>> 5) | 0)] = a.za),
        (a.ma.a[31 & ((b >>> 10) | 0)] = a.T);
    else if (1048576 > c)
      3 === a.hb &&
        ((a.Oa = new (x(x(x(x(w)))).G)(32)),
        (a.Oa.a[0] = a.ma),
        (a.hb = (1 + a.hb) | 0)),
        (a.za = new r(32)),
        (a.T = new (x(x(w)).G)(32)),
        (a.ma = new (x(x(x(w))).G)(32)),
        (a.T.a[31 & ((b >>> 5) | 0)] = a.za),
        (a.ma.a[31 & ((b >>> 10) | 0)] = a.T),
        (a.Oa.a[31 & ((b >>> 15) | 0)] = a.ma);
    else if (33554432 > c)
      4 === a.hb &&
        ((a.rb = new (x(x(x(x(x(w))))).G)(32)),
        (a.rb.a[0] = a.Oa),
        (a.hb = (1 + a.hb) | 0)),
        (a.za = new r(32)),
        (a.T = new (x(x(w)).G)(32)),
        (a.ma = new (x(x(x(w))).G)(32)),
        (a.Oa = new (x(x(x(x(w)))).G)(32)),
        (a.T.a[31 & ((b >>> 5) | 0)] = a.za),
        (a.ma.a[31 & ((b >>> 10) | 0)] = a.T),
        (a.Oa.a[31 & ((b >>> 15) | 0)] = a.ma),
        (a.rb.a[31 & ((b >>> 20) | 0)] = a.Oa);
    else if (1073741824 > c)
      5 === a.hb &&
        ((a.$b = new (x(x(x(x(x(x(w)))))).G)(64)),
        (a.$b.a[0] = a.rb),
        (a.hb = (1 + a.hb) | 0)),
        (a.za = new r(32)),
        (a.T = new (x(x(w)).G)(32)),
        (a.ma = new (x(x(x(w))).G)(32)),
        (a.Oa = new (x(x(x(x(w)))).G)(32)),
        (a.rb = new (x(x(x(x(x(w))))).G)(32)),
        (a.T.a[31 & ((b >>> 5) | 0)] = a.za),
        (a.ma.a[31 & ((b >>> 10) | 0)] = a.T),
        (a.Oa.a[31 & ((b >>> 15) | 0)] = a.ma),
        (a.rb.a[31 & ((b >>> 20) | 0)] = a.Oa),
        (a.$b.a[31 & ((b >>> 25) | 0)] = a.rb);
    else
      throw pd(
        "advance1(" +
          b +
          ", " +
          c +
          "): a1\x3d" +
          a.za +
          ", a2\x3d" +
          a.T +
          ", a3\x3d" +
          a.ma +
          ", a4\x3d" +
          a.Oa +
          ", a5\x3d" +
          a.rb +
          ", a6\x3d" +
          a.$b +
          ", depth\x3d" +
          a.hb
      );
  }
  function zp() {
    this.za = this.T = this.ma = this.Oa = this.rb = this.$b = null;
    this.hb = this.Pc = this.Tb = this.ga = 0;
    this.za = new r(32);
    this.Pc = this.Tb = this.ga = 0;
    this.hb = 1;
  }
  zp.prototype = new q();
  zp.prototype.constructor = zp;
  e = zp.prototype;
  e.ac = function () {};
  function Dp(a, b) {
    a.hb = 1;
    var c = b.a.length;
    a.ga = 31 & c;
    a.Tb = (c - a.ga) | 0;
    a.za = 32 === b.a.length ? b : N(O(), b, 0, 32);
    0 === a.ga && 0 < a.Tb && ((a.ga = 32), (a.Tb = (-32 + a.Tb) | 0));
  }
  function Ep(a, b) {
    var c = b.qd();
    switch (c) {
      case 0:
        break;
      case 1:
        a.hb = 1;
        c = b.d.a.length;
        a.ga = 31 & c;
        a.Tb = (c - a.ga) | 0;
        b = b.d;
        a.za = 32 === b.a.length ? b : N(O(), b, 0, 32);
        break;
      case 3:
        c = b.Gb;
        var d = b.f;
        a.za = 32 === d.a.length ? d : N(O(), d, 0, 32);
        a.hb = 2;
        a.Pc = (32 - b.Zb) | 0;
        d = (b.j + a.Pc) | 0;
        a.ga = 31 & d;
        a.Tb = (d - a.ga) | 0;
        a.T = new (x(x(w)).G)(32);
        a.T.a[0] = b.d;
        c.I(0, a.T, 1, c.a.length);
        a.T.a[(1 + c.a.length) | 0] = a.za;
        break;
      case 5:
        c = b.Ya;
        d = b.eb;
        var f = b.f;
        a.za = 32 === f.a.length ? f : N(O(), f, 0, 32);
        a.hb = 3;
        a.Pc = (1024 - b.Hb) | 0;
        f = (b.j + a.Pc) | 0;
        a.ga = 31 & f;
        a.Tb = (f - a.ga) | 0;
        a.ma = new (x(x(x(w))).G)(32);
        a.ma.a[0] = V(R(), b.d, b.Mb);
        c.I(0, a.ma, 1, c.a.length);
        a.T = ld(O(), d, 32);
        a.ma.a[(1 + c.a.length) | 0] = a.T;
        a.T.a[d.a.length] = a.za;
        break;
      case 7:
        c = b.wa;
        d = b.Ca;
        f = b.Ba;
        var g = b.f;
        a.za = 32 === g.a.length ? g : N(O(), g, 0, 32);
        a.hb = 4;
        a.Pc = (32768 - b.Za) | 0;
        g = (b.j + a.Pc) | 0;
        a.ga = 31 & g;
        a.Tb = (g - a.ga) | 0;
        a.Oa = new (x(x(x(x(w)))).G)(32);
        a.Oa.a[0] = V(R(), V(R(), b.d, b.fb), b.gb);
        c.I(0, a.Oa, 1, c.a.length);
        a.ma = ld(O(), d, 32);
        a.T = ld(O(), f, 32);
        a.Oa.a[(1 + c.a.length) | 0] = a.ma;
        a.ma.a[d.a.length] = a.T;
        a.T.a[f.a.length] = a.za;
        break;
      case 9:
        c = b.fa;
        d = b.ka;
        f = b.ja;
        g = b.ia;
        var h = b.f;
        a.za = 32 === h.a.length ? h : N(O(), h, 0, 32);
        a.hb = 5;
        a.Pc = (1048576 - b.xa) | 0;
        h = (b.j + a.Pc) | 0;
        a.ga = 31 & h;
        a.Tb = (h - a.ga) | 0;
        a.rb = new (x(x(x(x(x(w))))).G)(32);
        a.rb.a[0] = V(R(), V(R(), V(R(), b.d, b.Da), b.Ea), b.Fa);
        c.I(0, a.rb, 1, c.a.length);
        a.Oa = ld(O(), d, 32);
        a.ma = ld(O(), f, 32);
        a.T = ld(O(), g, 32);
        a.rb.a[(1 + c.a.length) | 0] = a.Oa;
        a.Oa.a[d.a.length] = a.ma;
        a.ma.a[f.a.length] = a.T;
        a.T.a[g.a.length] = a.za;
        break;
      case 11:
        c = b.S;
        d = b.ca;
        f = b.ba;
        g = b.aa;
        h = b.$;
        var k = b.f;
        a.za = 32 === k.a.length ? k : N(O(), k, 0, 32);
        a.hb = 6;
        a.Pc = (33554432 - b.oa) | 0;
        k = (b.j + a.Pc) | 0;
        a.ga = 31 & k;
        a.Tb = (k - a.ga) | 0;
        a.$b = new (x(x(x(x(x(x(w)))))).G)(32);
        a.$b.a[0] = V(R(), V(R(), V(R(), V(R(), b.d, b.pa), b.qa), b.ra), b.sa);
        c.I(0, a.$b, 1, c.a.length);
        a.rb = ld(O(), d, 32);
        a.Oa = ld(O(), f, 32);
        a.ma = ld(O(), g, 32);
        a.T = ld(O(), h, 32);
        a.$b.a[(1 + c.a.length) | 0] = a.rb;
        a.rb.a[d.a.length] = a.Oa;
        a.Oa.a[f.a.length] = a.ma;
        a.ma.a[g.a.length] = a.T;
        a.T.a[h.a.length] = a.za;
        break;
      default:
        throw new T(c);
    }
    0 === a.ga && 0 < a.Tb && ((a.ga = 32), (a.Tb = (-32 + a.Tb) | 0));
    return a;
  }
  function Fp(a, b) {
    32 === a.ga && Bp(a);
    a.za.a[a.ga] = b;
    a.ga = (1 + a.ga) | 0;
    return a;
  }
  function yp(a, b) {
    return b instanceof xp
      ? 0 === a.ga && 0 === a.Tb
        ? Ep(a, b)
        : Cp(a, b)
      : fi(a, b);
  }
  e.Cd = function () {
    var a = (this.ga + this.Tb) | 0,
      b = (a - this.Pc) | 0;
    if (0 === b) return Mf(), cf();
    if (32 >= a) {
      if (32 === b) return new df(this.za);
      var c = this.za;
      return new df(ld(O(), c, b));
    }
    if (1024 >= a) {
      var d = 31 & ((-1 + a) | 0),
        f = (((-1 + a) | 0) >>> 5) | 0,
        g = this.T,
        h = N(O(), g, 1, f),
        k = this.T.a[0],
        l = this.T.a[f],
        p = (1 + d) | 0,
        u = l.a.length === p ? l : ld(O(), l, p);
      return new ef(k, (32 - this.Pc) | 0, h, u, b);
    }
    if (32768 >= a) {
      var A = 31 & ((-1 + a) | 0),
        G = 31 & ((((-1 + a) | 0) >>> 5) | 0),
        K = (((-1 + a) | 0) >>> 10) | 0,
        M = this.ma,
        aa = N(O(), M, 1, K),
        wa = this.ma.a[0],
        Ia = wa.a.length,
        la = N(O(), wa, 1, Ia),
        Ma = this.ma.a[0].a[0],
        ra = this.ma.a[K],
        Cd = ld(O(), ra, G),
        Qg = this.ma.a[K].a[G],
        Rg = (1 + A) | 0,
        Ij = Qg.a.length === Rg ? Qg : ld(O(), Qg, Rg),
        Jj = Ma.a.length;
      return new ff(Ma, Jj, la, (Jj + (la.a.length << 5)) | 0, aa, Cd, Ij, b);
    }
    if (1048576 >= a) {
      var Kj = 31 & ((-1 + a) | 0),
        Sg = 31 & ((((-1 + a) | 0) >>> 5) | 0),
        Le = 31 & ((((-1 + a) | 0) >>> 10) | 0),
        Me = (((-1 + a) | 0) >>> 15) | 0,
        km = this.Oa,
        Lj = N(O(), km, 1, Me),
        Mj = this.Oa.a[0],
        Nj = Mj.a.length,
        Tg = N(O(), Mj, 1, Nj),
        Oj = this.Oa.a[0].a[0],
        Pj = Oj.a.length,
        Ug = N(O(), Oj, 1, Pj),
        Qj = this.Oa.a[0].a[0].a[0],
        Rj = this.Oa.a[Me],
        Sj = ld(O(), Rj, Le),
        Tj = this.Oa.a[Me].a[Le],
        lm = ld(O(), Tj, Sg),
        Vg = this.Oa.a[Me].a[Le].a[Sg],
        Wg = (1 + Kj) | 0,
        mm = Vg.a.length === Wg ? Vg : ld(O(), Vg, Wg),
        Uj = Qj.a.length,
        Xg = (Uj + (Ug.a.length << 5)) | 0;
      return new gf(
        Qj,
        Uj,
        Ug,
        Xg,
        Tg,
        (Xg + (Tg.a.length << 10)) | 0,
        Lj,
        Sj,
        lm,
        mm,
        b
      );
    }
    if (33554432 >= a) {
      var Vj = 31 & ((-1 + a) | 0),
        Wj = 31 & ((((-1 + a) | 0) >>> 5) | 0),
        Ne = 31 & ((((-1 + a) | 0) >>> 10) | 0),
        Dd = 31 & ((((-1 + a) | 0) >>> 15) | 0),
        Ed = (((-1 + a) | 0) >>> 20) | 0,
        Xj = this.rb,
        Yj = N(O(), Xj, 1, Ed),
        Zj = this.rb.a[0],
        ak = Zj.a.length,
        Yg = N(O(), Zj, 1, ak),
        bk = this.rb.a[0].a[0],
        ck = bk.a.length,
        Zg = N(O(), bk, 1, ck),
        $g = this.rb.a[0].a[0].a[0],
        nm = $g.a.length,
        dk = N(O(), $g, 1, nm),
        ah = this.rb.a[0].a[0].a[0].a[0],
        om = this.rb.a[Ed],
        pm = ld(O(), om, Dd),
        ek = this.rb.a[Ed].a[Dd],
        qm = ld(O(), ek, Ne),
        rm = this.rb.a[Ed].a[Dd].a[Ne],
        fk = ld(O(), rm, Wj),
        Oe = this.rb.a[Ed].a[Dd].a[Ne].a[Wj],
        bh = (1 + Vj) | 0,
        sm = Oe.a.length === bh ? Oe : ld(O(), Oe, bh),
        ch = ah.a.length,
        dh = (ch + (dk.a.length << 5)) | 0,
        gk = (dh + (Zg.a.length << 10)) | 0;
      return new hf(
        ah,
        ch,
        dk,
        dh,
        Zg,
        gk,
        Yg,
        (gk + (Yg.a.length << 15)) | 0,
        Yj,
        pm,
        qm,
        fk,
        sm,
        b
      );
    }
    var hk = 31 & ((-1 + a) | 0),
      eh = 31 & ((((-1 + a) | 0) >>> 5) | 0),
      fh = 31 & ((((-1 + a) | 0) >>> 10) | 0),
      Fd = 31 & ((((-1 + a) | 0) >>> 15) | 0),
      Dc = 31 & ((((-1 + a) | 0) >>> 20) | 0),
      Ec = (((-1 + a) | 0) >>> 25) | 0,
      ik = this.$b,
      jk = N(O(), ik, 1, Ec),
      kk = this.$b.a[0],
      lk = kk.a.length,
      gh = N(O(), kk, 1, lk),
      hh = this.$b.a[0].a[0],
      tm = hh.a.length,
      mk = N(O(), hh, 1, tm),
      ih = this.$b.a[0].a[0].a[0],
      um = ih.a.length,
      nk = N(O(), ih, 1, um),
      jh = this.$b.a[0].a[0].a[0].a[0],
      vm = jh.a.length,
      ok = N(O(), jh, 1, vm),
      kh = this.$b.a[0].a[0].a[0].a[0].a[0],
      wm = this.$b.a[Ec],
      xm = ld(O(), wm, Dc),
      pk = this.$b.a[Ec].a[Dc],
      qk = ld(O(), pk, Fd),
      rk = this.$b.a[Ec].a[Dc].a[Fd],
      sk = ld(O(), rk, fh),
      Nt = this.$b.a[Ec].a[Dc].a[Fd].a[fh],
      Ot = ld(O(), Nt, eh),
      Yn = this.$b.a[Ec].a[Dc].a[Fd].a[fh].a[eh],
      Jr = (1 + hk) | 0,
      Pt = Yn.a.length === Jr ? Yn : ld(O(), Yn, Jr),
      Kr = kh.a.length,
      Lr = (Kr + (ok.a.length << 5)) | 0,
      Mr = (Lr + (nk.a.length << 10)) | 0,
      Nr = (Mr + (mk.a.length << 15)) | 0;
    return new S(
      kh,
      Kr,
      ok,
      Lr,
      nk,
      Mr,
      mk,
      Nr,
      gh,
      (Nr + (gh.a.length << 20)) | 0,
      jk,
      xm,
      qk,
      sk,
      Ot,
      Pt,
      b
    );
  };
  e.z = function () {
    return (
      "VectorBuilder(len1\x3d" +
      this.ga +
      ", lenRest\x3d" +
      this.Tb +
      ", offset\x3d" +
      this.Pc +
      ", depth\x3d" +
      this.hb +
      ")"
    );
  };
  e.Wa = function () {
    return this.Cd();
  };
  e.wb = function (a) {
    return yp(this, a);
  };
  e.Ia = function (a) {
    return Fp(this, a);
  };
  e.$classData = v({ Iq: 0 }, !1, "scala.collection.immutable.VectorBuilder", {
    Iq: 1,
    b: 1,
    vf: 1,
    Qc: 1,
    oc: 1,
    nc: 1,
  });
  function Gp() {}
  Gp.prototype = new q();
  Gp.prototype.constructor = Gp;
  e = Gp.prototype;
  e.gd = function (a) {
    return Hp(a);
  };
  function Hp(a) {
    var b = a.t();
    if (0 <= b) {
      var c = new r(16 < b ? b : 16);
      Td(a) ? a.Pb(c, 0, 2147483647) : a.h().Pb(c, 0, 2147483647);
      a = new Ip();
      a.Td = c;
      a.ib = b;
      return a;
    }
    return Jp(Kp(), a);
  }
  e.ea = function () {
    return new Ej();
  };
  e.Bb = function () {
    return Kp();
  };
  e.W = function (a) {
    return Hp(a);
  };
  e.$classData = v({ Oq: 0 }, !1, "scala.collection.mutable.ArrayBuffer$", {
    Oq: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var Lp;
  function Mp() {
    Lp || (Lp = new Gp());
    return Lp;
  }
  function Ej() {
    this.Ud = null;
    Pm(this, Kp());
  }
  Ej.prototype = new Rm();
  Ej.prototype.constructor = Ej;
  Ej.prototype.ac = function (a) {
    Np(this.Ud, a);
  };
  Ej.prototype.$classData = v(
    { Pq: 0 },
    !1,
    "scala.collection.mutable.ArrayBuffer$$anon$1",
    { Pq: 1, Rh: 1, b: 1, Qc: 1, oc: 1, nc: 1 }
  );
  function Op() {}
  Op.prototype = new q();
  Op.prototype.constructor = Op;
  e = Op.prototype;
  e.gd = function (a) {
    return Pp(a);
  };
  function Pp(a) {
    var b = a.t();
    if (0 <= b) {
      var c = Qp(0, b);
      Td(a) ? a.Pb(c, 0, 2147483647) : a.h().Pb(c, 0, 2147483647);
      return Rp(new Sp(), c, b);
    }
    return Tp(Up(), a);
  }
  e.ea = function () {
    return new Vp();
  };
  function Qp(a, b) {
    if (!(0 <= b))
      throw pd("requirement failed: Non-negative array size required");
    a = ((-2147483648 >>> da(b)) | 0) << 1;
    if (!(0 <= a))
      throw pd(
        "requirement failed: ArrayDeque too big - cannot allocate ArrayDeque of length " +
          b
      );
    return new r(16 < a ? a : 16);
  }
  e.Bb = function () {
    return Up();
  };
  e.W = function (a) {
    return Pp(a);
  };
  e.$classData = v({ Tq: 0 }, !1, "scala.collection.mutable.ArrayDeque$", {
    Tq: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var Wp;
  function Xp() {
    Wp || (Wp = new Op());
    return Wp;
  }
  function Vp() {
    this.Ud = null;
    Pm(this, Up());
  }
  Vp.prototype = new Rm();
  Vp.prototype.constructor = Vp;
  Vp.prototype.ac = function (a) {
    var b = this.Ud;
    a > (((b.sb - b.tb) | 0) & ((-1 + b.U.a.length) | 0)) &&
      a >= b.U.a.length &&
      Yp(b, a);
  };
  Vp.prototype.$classData = v(
    { Uq: 0 },
    !1,
    "scala.collection.mutable.ArrayDeque$$anon$1",
    { Uq: 1, Rh: 1, b: 1, Qc: 1, oc: 1, nc: 1 }
  );
  function hi() {
    this.ad = null;
    this.ad = Zp();
  }
  hi.prototype = new Ul();
  hi.prototype.constructor = hi;
  hi.prototype.$classData = v(
    { gr: 0 },
    !1,
    "scala.collection.mutable.Buffer$",
    { gr: 1, lj: 1, b: 1, Nc: 1, Eb: 1, c: 1 }
  );
  var gi;
  function kl(a, b) {
    this.Ud = null;
    Pm(this, ml(new ll(), a, b));
  }
  kl.prototype = new Rm();
  kl.prototype.constructor = kl;
  kl.prototype.ac = function (a) {
    this.Ud.ac(a);
  };
  kl.prototype.$classData = v(
    { nr: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$4",
    { nr: 1, Rh: 1, b: 1, Qc: 1, oc: 1, nc: 1 }
  );
  function $p(a, b) {
    if (null === b) throw lb(null);
    a.Vg = b;
    a.Se = 0;
    a.qe = null;
    a.Wg = b.ub.a.length;
  }
  function aq() {
    this.Se = 0;
    this.qe = null;
    this.Wg = 0;
    this.Vg = null;
  }
  aq.prototype = new Pl();
  aq.prototype.constructor = aq;
  function bq() {}
  bq.prototype = aq.prototype;
  aq.prototype.l = function () {
    if (null !== this.qe) return !0;
    for (; this.Se < this.Wg; ) {
      var a = this.Vg.ub.a[this.Se];
      this.Se = (1 + this.Se) | 0;
      if (null !== a) return (this.qe = a), !0;
    }
    return !1;
  };
  aq.prototype.k = function () {
    if (this.l()) {
      var a = this.Li(this.qe);
      this.qe = this.qe.jb;
      return a;
    }
    return W().Z.k();
  };
  function cq() {
    this.Xg = null;
  }
  cq.prototype = new q();
  cq.prototype.constructor = cq;
  function dq() {}
  dq.prototype = cq.prototype;
  cq.prototype.ac = function () {};
  cq.prototype.wb = function (a) {
    return fi(this, a);
  };
  cq.prototype.Wa = function () {
    return this.Xg;
  };
  function eq() {
    this.ad = null;
    this.ad = Mp();
  }
  eq.prototype = new Ul();
  eq.prototype.constructor = eq;
  eq.prototype.$classData = v(
    { pr: 0 },
    !1,
    "scala.collection.mutable.IndexedSeq$",
    { pr: 1, lj: 1, b: 1, Nc: 1, Eb: 1, c: 1 }
  );
  var fq;
  function gq() {}
  gq.prototype = new q();
  gq.prototype.constructor = gq;
  e = gq.prototype;
  e.gd = function (a) {
    return hq(new pp(), a);
  };
  e.ea = function () {
    return Pm(new Qm(), new pp());
  };
  e.Bb = function () {
    return new pp();
  };
  e.W = function (a) {
    return hq(new pp(), a);
  };
  e.$classData = v({ rr: 0 }, !1, "scala.collection.mutable.ListBuffer$", {
    rr: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var iq;
  function jq() {
    iq || (iq = new gq());
    return iq;
  }
  function kq(a, b) {
    this.Il = 0;
    this.Jl = a;
    this.ur = b;
    this.Il = je(b) | 0;
  }
  kq.prototype = new Pl();
  kq.prototype.constructor = kq;
  kq.prototype.l = function () {
    vf || (vf = new uf());
    var a = this.Il;
    if ((je(this.ur) | 0) !== a) throw new Bo();
    return this.Jl.l();
  };
  kq.prototype.k = function () {
    return this.Jl.k();
  };
  kq.prototype.$classData = v(
    { tr: 0 },
    !1,
    "scala.collection.mutable.MutationTracker$CheckedIterator",
    { tr: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function lq() {}
  lq.prototype = new q();
  lq.prototype.constructor = lq;
  e = lq.prototype;
  e.gd = function (a) {
    return Tp(new Fk(16), a);
  };
  e.ea = function () {
    return Pm(new Qm(), new Fk(16));
  };
  e.Bb = function () {
    return new Fk(16);
  };
  e.W = function (a) {
    return Tp(new Fk(16), a);
  };
  e.$classData = v({ wr: 0 }, !1, "scala.collection.mutable.Queue$", {
    wr: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var mq;
  function nq() {
    mq || (mq = new lq());
    return mq;
  }
  var pq = function oq(a, b) {
    return b.xc.isArrayClass ? "Array[" + oq(a, Ic(b)) + "]" : b.xc.name;
  };
  function qg(a) {
    this.Kl = 0;
    this.Vr = a;
    this.Uh = 0;
    this.Kl = a.lb();
  }
  qg.prototype = new Pl();
  qg.prototype.constructor = qg;
  qg.prototype.l = function () {
    return this.Uh < this.Kl;
  };
  qg.prototype.k = function () {
    var a = this.Vr.mb(this.Uh);
    this.Uh = (1 + this.Uh) | 0;
    return a;
  };
  qg.prototype.$classData = v(
    { Ur: 0 },
    !1,
    "scala.runtime.ScalaRunTime$$anon$1",
    { Ur: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function qq() {}
  qq.prototype = new q();
  qq.prototype.constructor = qq;
  e = qq.prototype;
  e.gd = function (a) {
    return rq(a);
  };
  e.ea = function () {
    return sq();
  };
  function rq(a) {
    var b = sq();
    return fi(b, a).Wa();
  }
  e.W = function (a) {
    return rq(a);
  };
  e.Bb = function () {
    return sq();
  };
  e.$classData = v({ Cr: 0 }, !1, "scala.scalajs.js.WrappedArray$", {
    Cr: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var tq;
  function Zp() {
    tq || (tq = new qq());
    return tq;
  }
  function uq() {}
  uq.prototype = new q();
  uq.prototype.constructor = uq;
  e = uq.prototype;
  e.gd = function (a) {
    return vq(this, a);
  };
  function vq(a, b) {
    return a.ea().wb(b).Wa();
  }
  e.ea = function () {
    return new dj(wq(new xq()), new D((() => (a) => B(new C(), a.re))(this)));
  };
  e.W = function (a) {
    return vq(this, a);
  };
  e.Bb = function () {
    var a = new C();
    B(a, []);
    return a;
  };
  e.$classData = v({ Lr: 0 }, !1, "scala.scalajs.runtime.WrappedVarArgs$", {
    Lr: 1,
    b: 1,
    kf: 1,
    Nc: 1,
    Eb: 1,
    c: 1,
  });
  var yq;
  function zq() {
    yq || (yq = new uq());
    return yq;
  }
  function dp() {
    var a = new ye();
    ze(a, null);
    return a;
  }
  class ye extends yg {}
  ye.prototype.$classData = v(
    { Dm: 0 },
    !1,
    "java.lang.ArrayIndexOutOfBoundsException",
    { Dm: 1, Ri: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  class Og extends zo {
    constructor(a) {
      super();
      ze(this, a);
    }
  }
  Og.prototype.$classData = v(
    { Wm: 0 },
    !1,
    "java.lang.NumberFormatException",
    { Wm: 1, Jk: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  class Kl extends yg {}
  Kl.prototype.$classData = v(
    { $m: 0 },
    !1,
    "java.lang.StringIndexOutOfBoundsException",
    { $m: 1, Ri: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1 }
  );
  function Aq() {}
  Aq.prototype = new Fo();
  Aq.prototype.constructor = Aq;
  e = Aq.prototype;
  e.cb = function () {
    return "None";
  };
  e.lb = function () {
    return 0;
  };
  e.mb = function (a) {
    return wg(Y(), a);
  };
  e.H = function () {
    return 2433880;
  };
  e.z = function () {
    return "None";
  };
  e.zg = function () {
    throw Uk("None.get");
  };
  e.$classData = v({ xn: 0 }, !1, "scala.None$", {
    xn: 1,
    yn: 1,
    b: 1,
    r: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  var Bq;
  function Mb() {
    Bq || (Bq = new Aq());
    return Bq;
  }
  function $m(a) {
    this.qh = a;
  }
  $m.prototype = new Fo();
  $m.prototype.constructor = $m;
  e = $m.prototype;
  e.zg = function () {
    return this.qh;
  };
  e.cb = function () {
    return "Some";
  };
  e.lb = function () {
    return 1;
  };
  e.mb = function (a) {
    return 0 === a ? this.qh : wg(Y(), a);
  };
  e.H = function () {
    return Hg(this);
  };
  e.z = function () {
    return pg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof $m ? J(L(), this.qh, a.qh) : !1;
  };
  e.$classData = v({ Bn: 0 }, !1, "scala.Some", {
    Bn: 1,
    yn: 1,
    b: 1,
    r: 1,
    yb: 1,
    x: 1,
    c: 1,
  });
  function Cq() {}
  Cq.prototype = new q();
  Cq.prototype.constructor = Cq;
  function Dq() {}
  e = Dq.prototype = Cq.prototype;
  e.Wc = function () {
    return this.Ob();
  };
  e.jh = function (a) {
    return this.X().W(a);
  };
  e.Wi = function () {
    return this.X().ea();
  };
  e.u = function () {
    return this.h().k();
  };
  e.Oj = function (a) {
    return gj(this, a);
  };
  e.Qb = function (a) {
    return this.ve(new pj(this, a, !1));
  };
  e.Hc = function (a) {
    return new oj(this, a);
  };
  e.Jb = function (a) {
    return this.ve(Eq(new Fq(), this, a));
  };
  e.w = function () {
    return hj(this);
  };
  e.Cb = function (a) {
    return this.X().W(new qj(this, a));
  };
  e.wg = function (a) {
    return this.Cb(a);
  };
  e.Ff = function (a) {
    return jj(this, a);
  };
  e.Sj = function (a) {
    var b = this.X();
    if (Td(a)) a = new Gq(this, a);
    else {
      var c = this.h();
      a = new Qo(c, a);
    }
    return b.W(a);
  };
  e.hg = function () {
    return this.X().W(new Hq(this));
  };
  e.fg = function (a) {
    return lj(this, a);
  };
  e.N = function (a) {
    Vd(this, a);
  };
  e.xg = function (a) {
    for (var b = !0, c = this.h(); b && c.l(); ) b = !!a.m(c.k());
    return b;
  };
  e.Gf = function (a) {
    return Wd(this, a);
  };
  e.ze = function (a) {
    return Xd(this, a);
  };
  e.e = function () {
    return !this.h().l();
  };
  e.Pb = function (a, b, c) {
    return Zd(this, a, b, c);
  };
  e.ae = function (a, b, c, d) {
    return fe(this, a, b, c, d);
  };
  e.t = function () {
    return -1;
  };
  e.ve = function (a) {
    return this.jh(a);
  };
  function Iq(a, b) {
    a.Zc = b;
    a.M = 0;
    a.kd = Bd(Gd(), a.Zc);
    return a;
  }
  function Jq() {
    this.Zc = null;
    this.kd = this.M = 0;
  }
  Jq.prototype = new Pl();
  Jq.prototype.constructor = Jq;
  function Kq() {}
  e = Kq.prototype = Jq.prototype;
  e.t = function () {
    return (this.kd - this.M) | 0;
  };
  e.l = function () {
    return this.M < this.kd;
  };
  e.k = function () {
    try {
      var a = Jd(Gd(), this.Zc, this.M);
      this.M = (1 + this.M) | 0;
      return a;
    } catch (b) {
      if (b instanceof ye) return W().Z.k();
      throw b;
    }
  };
  e.xd = function (a) {
    if (0 < a) {
      var b = Bd(Gd(), this.Zc);
      a = (this.M + a) | 0;
      this.M = b < a ? b : a;
    }
    return this;
  };
  e.$classData = v({ Pd: 0 }, !1, "scala.collection.ArrayOps$ArrayIterator", {
    Pd: 1,
    la: 1,
    b: 1,
    Y: 1,
    r: 1,
    s: 1,
    c: 1,
  });
  function Bk(a) {
    this.df = 0;
    this.Io = a;
    this.Fg = 0;
    this.df = a.q();
  }
  Bk.prototype = new Pl();
  Bk.prototype.constructor = Bk;
  e = Bk.prototype;
  e.t = function () {
    return this.df;
  };
  e.l = function () {
    return 0 < this.df;
  };
  e.k = function () {
    if (this.l()) {
      var a = this.Io.v(this.Fg);
      this.Fg = (1 + this.Fg) | 0;
      this.df = (-1 + this.df) | 0;
      return a;
    }
    return W().Z.k();
  };
  e.xd = function (a) {
    0 < a &&
      ((this.Fg = (this.Fg + a) | 0),
      (a = (this.df - a) | 0),
      (this.df = 0 > a ? 0 : a));
    return this;
  };
  e.$classData = v(
    { Ho: 0 },
    !1,
    "scala.collection.IndexedSeqView$IndexedSeqViewIterator",
    { Ho: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function xj() {
    this.Xg = null;
    this.Xg = W().Z;
  }
  xj.prototype = new dq();
  xj.prototype.constructor = xj;
  function Lq(a, b) {
    a.Xg = a.Xg.wd(
      new H(
        ((c, d) => () => {
          W();
          return new Go(d);
        })(a, b)
      )
    );
    return a;
  }
  xj.prototype.Ia = function (a) {
    return Lq(this, a);
  };
  xj.prototype.$classData = v(
    { Uo: 0 },
    !1,
    "scala.collection.Iterator$$anon$21",
    { Uo: 1, Qs: 1, b: 1, vf: 1, Qc: 1, oc: 1, nc: 1 }
  );
  function Mq(a, b) {
    var c = a.Ad().ea();
    0 <= a.t() && c.ac((1 + a.q()) | 0);
    c.wb(a);
    c.Ia(b);
    return c.Wa();
  }
  function Nq(a, b) {
    var c = a.Ad().ea();
    c.wb(a);
    c.wb(b);
    return c.Wa();
  }
  function rf(a) {
    return !!(a && a.$classData && a.$classData.Ib.Sb);
  }
  function Zn(a, b, c, d) {
    this.Qg = b;
    this.Xf = c;
    this.je = !d;
    this.Wf = a;
  }
  Zn.prototype = new Pl();
  Zn.prototype.constructor = Zn;
  e = Zn.prototype;
  e.t = function () {
    if (this.je) {
      var a = (this.Xf - this.Wf) | 0;
      var b = this.Qg;
      if (0 === b) throw new uh();
      a = (1 + ((a / b) | 0)) | 0;
    } else a = 0;
    return a;
  };
  e.l = function () {
    return this.je;
  };
  function $n(a) {
    a.je || W().Z.k();
    var b = a.Wf;
    a.je = b !== a.Xf;
    a.Wf = (b + a.Qg) | 0;
    return b;
  }
  e.xd = function (a) {
    if (0 < a) {
      var b = this.Wf,
        c = b >> 31;
      a = ca(this.Qg, a);
      var d = a >> 31;
      a = (b + a) | 0;
      b =
        (-2147483648 ^ a) < (-2147483648 ^ b)
          ? (1 + ((c + d) | 0)) | 0
          : (c + d) | 0;
      0 < this.Qg
        ? ((c = this.Xf),
          (d = c >> 31),
          (this.Wf = (d === b ? (-2147483648 ^ c) < (-2147483648 ^ a) : d < b)
            ? c
            : a),
          (c = this.Xf),
          (d = c >> 31),
          (this.je = b === d ? (-2147483648 ^ a) <= (-2147483648 ^ c) : b < d))
        : 0 > this.Qg &&
          ((c = this.Xf),
          (d = c >> 31),
          (this.Wf = (d === b ? (-2147483648 ^ c) > (-2147483648 ^ a) : d > b)
            ? c
            : a),
          (c = this.Xf),
          (d = c >> 31),
          (this.je = b === d ? (-2147483648 ^ a) >= (-2147483648 ^ c) : b > d));
    }
    return this;
  };
  e.k = function () {
    return $n(this);
  };
  e.$classData = v({ dq: 0 }, !1, "scala.collection.immutable.RangeIterator", {
    dq: 1,
    la: 1,
    b: 1,
    Y: 1,
    r: 1,
    s: 1,
    c: 1,
  });
  function Oq() {
    this.md = this.Hd = 0;
  }
  Oq.prototype = new Pl();
  Oq.prototype.constructor = Oq;
  function Pq() {}
  Pq.prototype = Oq.prototype;
  Oq.prototype.t = function () {
    return this.md;
  };
  Oq.prototype.l = function () {
    return 0 < this.md;
  };
  Oq.prototype.k = function () {
    if (this.l()) {
      var a = this.v(this.Hd);
      this.Hd = (1 + this.Hd) | 0;
      this.md = (-1 + this.md) | 0;
      return a;
    }
    return W().Z.k();
  };
  Oq.prototype.xd = function (a) {
    0 < a &&
      ((this.Hd = (this.Hd + a) | 0),
      (a = (this.md - a) | 0),
      (this.md = 0 > a ? 0 : a));
    return this;
  };
  function Qq() {}
  Qq.prototype = new q();
  Qq.prototype.constructor = Qq;
  function Rq() {}
  Rq.prototype = Qq.prototype;
  Qq.prototype.ac = function () {};
  function Sq() {
    this.Ij = this.Jj = null;
    Tq = this;
    this.Jj = new Io(this);
    this.Ij = new Qh(new r(0));
  }
  Sq.prototype = new q();
  Sq.prototype.constructor = Sq;
  function Uq(a, b) {
    b = new cj(b.ic());
    return new dj(b, new D((() => (c) => bj(Oh(), c))(a)));
  }
  function bj(a, b) {
    if (null === b) return null;
    if (b instanceof r) return new Qh(b);
    if (b instanceof t) return new Sh(b);
    if (b instanceof Wa) return new Vq(b);
    if (b instanceof Ua) return new Wq(b);
    if (b instanceof Va) return new Xq(b);
    if (b instanceof Ra) return new Yq(b);
    if (b instanceof Sa) return new Zq(b);
    if (b instanceof Ta) return new $q(b);
    if (b instanceof Qa) return new ar(b);
    if (b && b.$classData && 1 === b.$classData.Ef && b.$classData.Df.Ib.Ok)
      return new br(b);
    throw new T(b);
  }
  Sq.prototype.$classData = v(
    { Wq: 0 },
    !1,
    "scala.collection.mutable.ArraySeq$",
    { Wq: 1, b: 1, Ks: 1, Fs: 1, Ds: 1, Gs: 1, c: 1 }
  );
  var Tq;
  function Oh() {
    Tq || (Tq = new Sq());
    return Tq;
  }
  function cr(a) {
    this.Se = 0;
    this.qe = null;
    this.Wg = 0;
    this.Vg = null;
    $p(this, a);
  }
  cr.prototype = new bq();
  cr.prototype.constructor = cr;
  cr.prototype.Li = function (a) {
    return a.Te;
  };
  cr.prototype.$classData = v(
    { kr: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$1",
    { kr: 1, Hl: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function dr(a) {
    this.Se = 0;
    this.qe = null;
    this.Wg = 0;
    this.Vg = null;
    $p(this, a);
  }
  dr.prototype = new bq();
  dr.prototype.constructor = dr;
  dr.prototype.Li = function (a) {
    return a;
  };
  dr.prototype.$classData = v(
    { lr: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$2",
    { lr: 1, Hl: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function er(a) {
    this.Se = 0;
    this.qe = null;
    this.Wg = 0;
    this.Vg = null;
    this.Kj = 0;
    if (null === a) throw lb(null);
    $p(this, a);
    this.Kj = 0;
  }
  er.prototype = new bq();
  er.prototype.constructor = er;
  er.prototype.H = function () {
    return this.Kj;
  };
  er.prototype.Li = function (a) {
    this.Kj = fr(a.Jd);
    return this;
  };
  er.prototype.$classData = v(
    { mr: 0 },
    !1,
    "scala.collection.mutable.HashSet$$anon$3",
    { mr: 1, Hl: 1, la: 1, b: 1, Y: 1, r: 1, s: 1 }
  );
  function wi(a) {
    this.rh = a;
  }
  wi.prototype = new q();
  wi.prototype.constructor = wi;
  e = wi.prototype;
  e.y = function (a) {
    if (a && a.$classData && a.$classData.Ib.Kc) {
      var b = this.ic();
      a = a.ic();
      b = b === a;
    } else b = !1;
    return b;
  };
  e.H = function () {
    var a = this.rh;
    return vg(Y(), a);
  };
  e.z = function () {
    return pq(this, this.rh);
  };
  e.ic = function () {
    return this.rh;
  };
  e.yc = function (a) {
    var b = this.rh;
    bd();
    return Jc(b, [a]);
  };
  e.$classData = v({ Mn: 0 }, !1, "scala.reflect.ClassTag$GenericClassTag", {
    Mn: 1,
    b: 1,
    Kc: 1,
    Yc: 1,
    Lc: 1,
    c: 1,
    x: 1,
  });
  function gr() {}
  gr.prototype = new yo();
  gr.prototype.constructor = gr;
  function hr() {}
  hr.prototype = gr.prototype;
  function io(a, b) {
    this.Ji = this.Ii = null;
    this.wk = a;
    this.xk = b;
    Hd(this, null, null);
  }
  io.prototype = new Ho();
  io.prototype.constructor = io;
  e = io.prototype;
  e.qg = function () {
    return this.wk;
  };
  e.Cf = function () {
    return this.xk;
  };
  e.qc = function () {
    return this.xk;
  };
  e.dc = function () {
    return this.wk;
  };
  e.$classData = v({ ym: 0 }, !1, "scala.Tuple2$mcII$sp", {
    ym: 1,
    vk: 1,
    b: 1,
    An: 1,
    yb: 1,
    x: 1,
    c: 1,
    fs: 1,
  });
  class E extends Fl {
    constructor(a) {
      super();
      this.bj = a;
      ze(this, a);
    }
    cb() {
      return "UninitializedFieldError";
    }
    lb() {
      return 1;
    }
    mb(a) {
      return 0 === a ? this.bj : wg(Y(), a);
    }
    H() {
      return Hg(this);
    }
    y(a) {
      return this === a ? !0 : a instanceof E ? this.bj === a.bj : !1;
    }
  }
  E.prototype.$classData = v({ Cn: 0 }, !1, "scala.UninitializedFieldError", {
    Cn: 1,
    rc: 1,
    hc: 1,
    ec: 1,
    b: 1,
    c: 1,
    yb: 1,
    x: 1,
  });
  function ir(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.lo = a;
    Iq(this, a);
  }
  ir.prototype = new Kq();
  ir.prototype.constructor = ir;
  ir.prototype.k = function () {
    try {
      var a = this.lo.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ye) b = W().Z.k() | 0;
      else throw c;
    }
    return b;
  };
  ir.prototype.$classData = v(
    { ko: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcB$sp",
    { ko: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function jr(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.no = a;
    Iq(this, a);
  }
  jr.prototype = new Kq();
  jr.prototype.constructor = jr;
  jr.prototype.k = function () {
    try {
      var a = this.no.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ye) b = Aa(W().Z.k());
      else throw c;
    }
    return Na(b);
  };
  jr.prototype.$classData = v(
    { mo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcC$sp",
    { mo: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function kr(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.po = a;
    Iq(this, a);
  }
  kr.prototype = new Kq();
  kr.prototype.constructor = kr;
  kr.prototype.k = function () {
    try {
      var a = this.po.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ye) b = +W().Z.k();
      else throw c;
    }
    return b;
  };
  kr.prototype.$classData = v(
    { oo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcD$sp",
    { oo: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function lr(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.ro = a;
    Iq(this, a);
  }
  lr.prototype = new Kq();
  lr.prototype.constructor = lr;
  lr.prototype.k = function () {
    try {
      var a = this.ro.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ye) b = +W().Z.k();
      else throw c;
    }
    return b;
  };
  lr.prototype.$classData = v(
    { qo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcF$sp",
    { qo: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function Rn(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.to = a;
    Iq(this, a);
  }
  Rn.prototype = new Kq();
  Rn.prototype.constructor = Rn;
  function Sn(a) {
    try {
      var b = a.to.a[a.M];
      a.M = (1 + a.M) | 0;
      return b;
    } catch (c) {
      if (c instanceof ye) return W().Z.k() | 0;
      throw c;
    }
  }
  Rn.prototype.k = function () {
    return Sn(this);
  };
  Rn.prototype.$classData = v(
    { so: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcI$sp",
    { so: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function mr(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.vo = a;
    Iq(this, a);
  }
  mr.prototype = new Kq();
  mr.prototype.constructor = mr;
  mr.prototype.k = function () {
    try {
      var a = this.vo.a[this.M],
        b = a.bb,
        c = a.ab;
      this.M = (1 + this.M) | 0;
      var d = new n(b, c);
    } catch (f) {
      if (f instanceof ye) d = Oa(W().Z.k());
      else throw f;
    }
    return d;
  };
  mr.prototype.$classData = v(
    { uo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcJ$sp",
    { uo: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function nr(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.xo = a;
    Iq(this, a);
  }
  nr.prototype = new Kq();
  nr.prototype.constructor = nr;
  nr.prototype.k = function () {
    try {
      var a = this.xo.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ye) b = W().Z.k() | 0;
      else throw c;
    }
    return b;
  };
  nr.prototype.$classData = v(
    { wo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcS$sp",
    { wo: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function or(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    Iq(this, a);
  }
  or.prototype = new Kq();
  or.prototype.constructor = or;
  or.prototype.k = function () {
    try {
      this.M = (1 + this.M) | 0;
    } catch (a) {
      if (a instanceof ye) W().Z.k();
      else throw a;
    }
  };
  or.prototype.$classData = v(
    { yo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcV$sp",
    { yo: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function pr(a) {
    this.Zc = null;
    this.kd = this.M = 0;
    this.Ao = a;
    Iq(this, a);
  }
  pr.prototype = new Kq();
  pr.prototype.constructor = pr;
  pr.prototype.k = function () {
    try {
      var a = this.Ao.a[this.M];
      this.M = (1 + this.M) | 0;
      var b = a;
    } catch (c) {
      if (c instanceof ye) b = !!W().Z.k();
      else throw c;
    }
    return b;
  };
  pr.prototype.$classData = v(
    { zo: 0 },
    !1,
    "scala.collection.ArrayOps$ArrayIterator$mcZ$sp",
    { zo: 1, Pd: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function qr(a) {
    this.md = this.Hd = 0;
    this.tl = null;
    if (null === a) throw lb(null);
    this.tl = a;
    this.Hd = 0;
    this.md = 2;
  }
  qr.prototype = new Pq();
  qr.prototype.constructor = qr;
  qr.prototype.v = function (a) {
    a: {
      var b = this.tl;
      switch (a) {
        case 0:
          a = b.He;
          break a;
        case 1:
          a = b.Ie;
          break a;
        default:
          throw new T(a);
      }
    }
    return a;
  };
  qr.prototype.$classData = v(
    { jq: 0 },
    !1,
    "scala.collection.immutable.Set$Set2$$anon$1",
    { jq: 1, wl: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function rr(a) {
    this.md = this.Hd = 0;
    this.ul = null;
    if (null === a) throw lb(null);
    this.ul = a;
    this.Hd = 0;
    this.md = 3;
  }
  rr.prototype = new Pq();
  rr.prototype.constructor = rr;
  rr.prototype.v = function (a) {
    a: {
      var b = this.ul;
      switch (a) {
        case 0:
          a = b.Je;
          break a;
        case 1:
          a = b.ke;
          break a;
        case 2:
          a = b.le;
          break a;
        default:
          throw new T(a);
      }
    }
    return a;
  };
  rr.prototype.$classData = v(
    { lq: 0 },
    !1,
    "scala.collection.immutable.Set$Set3$$anon$2",
    { lq: 1, wl: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function sr(a) {
    this.md = this.Hd = 0;
    this.vl = null;
    if (null === a) throw lb(null);
    this.vl = a;
    this.Hd = 0;
    this.md = 4;
  }
  sr.prototype = new Pq();
  sr.prototype.constructor = sr;
  sr.prototype.v = function (a) {
    return tr(this.vl, a);
  };
  sr.prototype.$classData = v(
    { nq: 0 },
    !1,
    "scala.collection.immutable.Set$Set4$$anon$3",
    { nq: 1, wl: 1, la: 1, b: 1, Y: 1, r: 1, s: 1, c: 1 }
  );
  function cj(a) {
    this.El = !1;
    this.Hj = null;
    this.Tg = a;
    this.El = a === m(db);
    this.Hj = [];
  }
  cj.prototype = new Rq();
  cj.prototype.constructor = cj;
  function ur(a, b) {
    a.Hj.push(a.El ? Aa(b) : null === b ? a.Tg.xc.Wh : b);
    return a;
  }
  e = cj.prototype;
  e.Wa = function () {
    return x(
      (this.Tg === m(bb)
        ? m(ua)
        : this.Tg === m(mg) || this.Tg === m(ri)
        ? m(w)
        : this.Tg
      ).xc
    ).Vh(this.Hj);
  };
  e.z = function () {
    return "ArrayBuilder.generic";
  };
  e.wb = function (a) {
    for (a = a.h(); a.l(); ) {
      var b = a.k();
      ur(this, b);
    }
    return this;
  };
  e.Ia = function (a) {
    return ur(this, a);
  };
  e.$classData = v(
    { Sq: 0 },
    !1,
    "scala.collection.mutable.ArrayBuilder$generic",
    { Sq: 1, Ps: 1, b: 1, vf: 1, Qc: 1, oc: 1, nc: 1, c: 1 }
  );
  function vr(a, b, c, d) {
    var f = (1 + Bd(Gd(), b)) | 0;
    if (0 > c || c >= f)
      throw xg(
        new yg(),
        c + " is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
      );
    f = (((a.sb - a.tb) | 0) & ((-1 + a.U.a.length) | 0)) | 0;
    var g = (Bd(Gd(), b) - c) | 0;
    f = f < g ? f : g;
    d = d < f ? d : f;
    if (0 < d) {
      f = ((a.sb - a.tb) | 0) & ((-1 + a.U.a.length) | 0);
      if (0 >= f)
        throw xg(
          new yg(),
          "0 is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
        );
      f = ((a.tb + 0) | 0) & ((-1 + a.U.a.length) | 0);
      g = (a.U.a.length - f) | 0;
      g = d < g ? d : g;
      Gh(Ih(), a.U, f, b, c, g);
      d = (d - g) | 0;
      0 < d && Gh(Ih(), a.U, 0, b, (c + g) | 0, d);
    }
    return b;
  }
  function wr() {
    this.Wb = null;
    this.Ja = 0;
  }
  wr.prototype = new q();
  wr.prototype.constructor = wr;
  function xr() {}
  xr.prototype = wr.prototype;
  wr.prototype.z = function () {
    return this.Wb;
  };
  wr.prototype.y = function (a) {
    return this === a;
  };
  wr.prototype.H = function () {
    return this.Ja;
  };
  function yr() {}
  yr.prototype = new q();
  yr.prototype.constructor = yr;
  function zr() {}
  zr.prototype = yr.prototype;
  class Cg extends Fl {
    constructor(a) {
      super();
      this.Zg = a;
      ze(this, null);
    }
    kh() {
      return Fa(this.Zg);
    }
    Ak() {}
    cb() {
      return "JavaScriptException";
    }
    lb() {
      return 1;
    }
    mb(a) {
      return 0 === a ? this.Zg : wg(Y(), a);
    }
    H() {
      return Hg(this);
    }
    y(a) {
      if (this === a) return !0;
      if (a instanceof Cg) {
        var b = this.Zg;
        a = a.Zg;
        return J(L(), b, a);
      }
      return !1;
    }
  }
  Cg.prototype.$classData = v(
    { Ar: 0 },
    !1,
    "scala.scalajs.js.JavaScriptException",
    { Ar: 1, rc: 1, hc: 1, ec: 1, b: 1, c: 1, yb: 1, x: 1 }
  );
  function Qc(a) {
    this.Sm = a;
    this.nh = "";
  }
  Qc.prototype = new hr();
  Qc.prototype.constructor = Qc;
  function dc(a) {
    var b;
    Kh || (Kh = new Jh());
    for (b = Kh.Sk.Uk; "" !== a; ) {
      var c = a.indexOf("\n") | 0;
      if (0 > c) (b.nh = "" + b.nh + a), (a = "");
      else {
        var d = "" + b.nh + a.substring(0, c);
        "undefined" !== typeof console &&
          (b.Sm && console.error ? console.error(d) : console.log(d));
        b.nh = "";
        a = a.substring((1 + c) | 0);
      }
    }
  }
  Qc.prototype.$classData = v(
    { Qm: 0 },
    !1,
    "java.lang.JSConsoleBasedPrintStream",
    { Qm: 1, Zr: 1, Yr: 1, sm: 1, b: 1, qm: 1, Fm: 1, rm: 1, Bm: 1 }
  );
  function Ar() {
    this.Wb = null;
    this.Ja = 0;
  }
  Ar.prototype = new xr();
  Ar.prototype.constructor = Ar;
  function Br() {}
  Br.prototype = Ar.prototype;
  Ar.prototype.ic = function () {
    return m(cb);
  };
  Ar.prototype.yc = function (a) {
    return new Qa(a);
  };
  function Cr() {
    this.Wb = null;
    this.Ja = 0;
  }
  Cr.prototype = new xr();
  Cr.prototype.constructor = Cr;
  function Dr() {}
  Dr.prototype = Cr.prototype;
  Cr.prototype.ic = function () {
    return m(eb);
  };
  Cr.prototype.yc = function (a) {
    return new Sa(a);
  };
  function Er() {
    this.Wb = null;
    this.Ja = 0;
  }
  Er.prototype = new xr();
  Er.prototype.constructor = Er;
  function Fr() {}
  Fr.prototype = Er.prototype;
  Er.prototype.ic = function () {
    return m(db);
  };
  Er.prototype.yc = function (a) {
    return new Ra(a);
  };
  function Gr() {
    this.Wb = null;
    this.Ja = 0;
  }
  Gr.prototype = new xr();
  Gr.prototype.constructor = Gr;
  function Hr() {}
  Hr.prototype = Gr.prototype;
  Gr.prototype.ic = function () {
    return m(jb);
  };
  Gr.prototype.yc = function (a) {
    return new Wa(a);
  };
  function Ir() {
    this.Wb = null;
    this.Ja = 0;
  }
  Ir.prototype = new xr();
  Ir.prototype.constructor = Ir;
  function Or() {}
  Or.prototype = Ir.prototype;
  Ir.prototype.ic = function () {
    return m(ib);
  };
  Ir.prototype.yc = function (a) {
    return new Va(a);
  };
  function Pr() {
    this.Wb = null;
    this.Ja = 0;
  }
  Pr.prototype = new xr();
  Pr.prototype.constructor = Pr;
  function Qr() {}
  Qr.prototype = Pr.prototype;
  Pr.prototype.ic = function () {
    return m(gb);
  };
  Pr.prototype.yc = function (a) {
    return new t(a);
  };
  function Rr() {
    this.Wb = null;
    this.Ja = 0;
  }
  Rr.prototype = new xr();
  Rr.prototype.constructor = Rr;
  function Sr() {}
  Sr.prototype = Rr.prototype;
  Rr.prototype.ic = function () {
    return m(hb);
  };
  Rr.prototype.yc = function (a) {
    return new Ua(a);
  };
  function Tr() {
    this.Dg = null;
    this.de = 0;
  }
  Tr.prototype = new zr();
  Tr.prototype.constructor = Tr;
  function Ur() {}
  Ur.prototype = Tr.prototype;
  Tr.prototype.z = function () {
    return this.Dg;
  };
  Tr.prototype.y = function (a) {
    return this === a;
  };
  Tr.prototype.H = function () {
    return this.de;
  };
  function Vr() {
    this.Wb = null;
    this.Ja = 0;
  }
  Vr.prototype = new xr();
  Vr.prototype.constructor = Vr;
  function Wr() {}
  Wr.prototype = Vr.prototype;
  Vr.prototype.ic = function () {
    return m(fb);
  };
  Vr.prototype.yc = function (a) {
    return new Ta(a);
  };
  function Xr() {
    this.Wb = null;
    this.Ja = 0;
  }
  Xr.prototype = new xr();
  Xr.prototype.constructor = Xr;
  function Yr() {}
  Yr.prototype = Xr.prototype;
  Xr.prototype.ic = function () {
    return m(bb);
  };
  Xr.prototype.yc = function (a) {
    return new (x(ua).G)(a);
  };
  function Zr() {}
  Zr.prototype = new Dq();
  Zr.prototype.constructor = Zr;
  function $r() {}
  $r.prototype = Zr.prototype;
  Zr.prototype.X = function () {
    return Fj();
  };
  Zr.prototype.z = function () {
    return this.Wc() + "(\x3cnot computed\x3e)";
  };
  Zr.prototype.Ob = function () {
    return "View";
  };
  function as(a, b) {
    return a === b
      ? !0
      : b && b.$classData && b.$classData.Ib.jf
      ? a.Sa() === b.Sa() && a.Ll(b)
      : !1;
  }
  function bs() {
    this.de = 0;
    this.Dg = "Any";
    Mb();
    vb();
    m(w);
    this.de = La(this);
  }
  bs.prototype = new Ur();
  bs.prototype.constructor = bs;
  bs.prototype.ic = function () {
    return m(w);
  };
  bs.prototype.yc = function (a) {
    return new r(a);
  };
  bs.prototype.$classData = v(
    { On: 0 },
    !1,
    "scala.reflect.ManifestFactory$AnyManifest$",
    { On: 1, ej: 1, dj: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var cs;
  function Se() {
    cs || (cs = new bs());
  }
  function ds() {
    this.Ja = 0;
    this.Wb = "Boolean";
    this.Ja = La(this);
  }
  ds.prototype = new Br();
  ds.prototype.constructor = ds;
  ds.prototype.$classData = v(
    { Pn: 0 },
    !1,
    "scala.reflect.ManifestFactory$BooleanManifest$",
    { Pn: 1, ss: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var es;
  function pi() {
    es || (es = new ds());
    return es;
  }
  function fs() {
    this.Ja = 0;
    this.Wb = "Byte";
    this.Ja = La(this);
  }
  fs.prototype = new Dr();
  fs.prototype.constructor = fs;
  fs.prototype.$classData = v(
    { Qn: 0 },
    !1,
    "scala.reflect.ManifestFactory$ByteManifest$",
    { Qn: 1, ts: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var gs;
  function ji() {
    gs || (gs = new fs());
    return gs;
  }
  function hs() {
    this.Ja = 0;
    this.Wb = "Char";
    this.Ja = La(this);
  }
  hs.prototype = new Fr();
  hs.prototype.constructor = hs;
  hs.prototype.$classData = v(
    { Rn: 0 },
    !1,
    "scala.reflect.ManifestFactory$CharManifest$",
    { Rn: 1, us: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var is;
  function li() {
    is || (is = new hs());
    return is;
  }
  function js() {
    this.Ja = 0;
    this.Wb = "Double";
    this.Ja = La(this);
  }
  js.prototype = new Hr();
  js.prototype.constructor = js;
  js.prototype.$classData = v(
    { Sn: 0 },
    !1,
    "scala.reflect.ManifestFactory$DoubleManifest$",
    { Sn: 1, vs: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var ks;
  function oi() {
    ks || (ks = new js());
    return ks;
  }
  function ls() {
    this.Ja = 0;
    this.Wb = "Float";
    this.Ja = La(this);
  }
  ls.prototype = new Or();
  ls.prototype.constructor = ls;
  ls.prototype.$classData = v(
    { Tn: 0 },
    !1,
    "scala.reflect.ManifestFactory$FloatManifest$",
    { Tn: 1, ws: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var ms;
  function ni() {
    ms || (ms = new ls());
    return ms;
  }
  function ns() {
    this.Ja = 0;
    this.Wb = "Int";
    this.Ja = La(this);
  }
  ns.prototype = new Qr();
  ns.prototype.constructor = ns;
  ns.prototype.$classData = v(
    { Un: 0 },
    !1,
    "scala.reflect.ManifestFactory$IntManifest$",
    { Un: 1, xs: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var os;
  function Te() {
    os || (os = new ns());
    return os;
  }
  function ps() {
    this.Ja = 0;
    this.Wb = "Long";
    this.Ja = La(this);
  }
  ps.prototype = new Sr();
  ps.prototype.constructor = ps;
  ps.prototype.$classData = v(
    { Vn: 0 },
    !1,
    "scala.reflect.ManifestFactory$LongManifest$",
    { Vn: 1, ys: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var qs;
  function mi() {
    qs || (qs = new ps());
    return qs;
  }
  function ti() {
    this.de = 0;
    this.Dg = "Nothing";
    Mb();
    vb();
    m(ri);
    this.de = La(this);
  }
  ti.prototype = new Ur();
  ti.prototype.constructor = ti;
  ti.prototype.ic = function () {
    return m(ri);
  };
  ti.prototype.yc = function (a) {
    return new r(a);
  };
  ti.prototype.$classData = v(
    { Wn: 0 },
    !1,
    "scala.reflect.ManifestFactory$NothingManifest$",
    { Wn: 1, ej: 1, dj: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var si;
  function vi() {
    this.de = 0;
    this.Dg = "Null";
    Mb();
    vb();
    m(mg);
    this.de = La(this);
  }
  vi.prototype = new Ur();
  vi.prototype.constructor = vi;
  vi.prototype.ic = function () {
    return m(mg);
  };
  vi.prototype.yc = function (a) {
    return new r(a);
  };
  vi.prototype.$classData = v(
    { Xn: 0 },
    !1,
    "scala.reflect.ManifestFactory$NullManifest$",
    { Xn: 1, ej: 1, dj: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var ui;
  function rs() {
    this.de = 0;
    this.Dg = "Object";
    Mb();
    vb();
    m(w);
    this.de = La(this);
  }
  rs.prototype = new Ur();
  rs.prototype.constructor = rs;
  rs.prototype.ic = function () {
    return m(w);
  };
  rs.prototype.yc = function (a) {
    return new r(a);
  };
  rs.prototype.$classData = v(
    { Yn: 0 },
    !1,
    "scala.reflect.ManifestFactory$ObjectManifest$",
    { Yn: 1, ej: 1, dj: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var ss;
  function Ph() {
    ss || (ss = new rs());
    return ss;
  }
  function ts() {
    this.Ja = 0;
    this.Wb = "Short";
    this.Ja = La(this);
  }
  ts.prototype = new Wr();
  ts.prototype.constructor = ts;
  ts.prototype.$classData = v(
    { Zn: 0 },
    !1,
    "scala.reflect.ManifestFactory$ShortManifest$",
    { Zn: 1, zs: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var us;
  function ki() {
    us || (us = new ts());
    return us;
  }
  function vs() {
    this.Ja = 0;
    this.Wb = "Unit";
    this.Ja = La(this);
  }
  vs.prototype = new Yr();
  vs.prototype.constructor = vs;
  vs.prototype.$classData = v(
    { $n: 0 },
    !1,
    "scala.reflect.ManifestFactory$UnitManifest$",
    { $n: 1, As: 1, Ce: 1, b: 1, jd: 1, Kc: 1, Yc: 1, Lc: 1, c: 1, x: 1 }
  );
  var ws;
  function qi() {
    ws || (ws = new vs());
    return ws;
  }
  function xs(a, b) {
    return a === b
      ? !0
      : b && b.$classData && b.$classData.Ib.ua && b.ih(a)
      ? a.cf(b)
      : !1;
  }
  function Aj(a) {
    this.ip = a;
  }
  Aj.prototype = new $r();
  Aj.prototype.constructor = Aj;
  Aj.prototype.h = function () {
    return je(this.ip);
  };
  Aj.prototype.$classData = v({ hp: 0 }, !1, "scala.collection.View$$anon$1", {
    hp: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function ys(a, b) {
    this.il = a;
    this.kp = b;
  }
  ys.prototype = new $r();
  ys.prototype.constructor = ys;
  ys.prototype.h = function () {
    return new kj(this.il, new zs(this.kp)).h();
  };
  ys.prototype.t = function () {
    var a = this.il.t();
    return 0 <= a ? (1 + a) | 0 : -1;
  };
  ys.prototype.e = function () {
    return !1;
  };
  ys.prototype.$classData = v({ jp: 0 }, !1, "scala.collection.View$Appended", {
    jp: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function kj(a, b) {
    this.oj = a;
    this.pj = b;
  }
  kj.prototype = new $r();
  kj.prototype.constructor = kj;
  kj.prototype.h = function () {
    return this.oj.h().wd(new H(((a) => () => a.pj.h())(this)));
  };
  kj.prototype.t = function () {
    var a = this.oj.t();
    if (0 <= a) {
      var b = this.pj.t();
      return 0 <= b ? (a + b) | 0 : -1;
    }
    return -1;
  };
  kj.prototype.e = function () {
    return this.oj.e() && this.pj.e();
  };
  kj.prototype.$classData = v({ lp: 0 }, !1, "scala.collection.View$Concat", {
    lp: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function Eq(a, b, c) {
    a.Jg = b;
    a.Ih = c;
    a.Pf = 0 < c ? c : 0;
    return a;
  }
  function Fq() {
    this.Jg = null;
    this.Pf = this.Ih = 0;
  }
  Fq.prototype = new $r();
  Fq.prototype.constructor = Fq;
  function As() {}
  As.prototype = Fq.prototype;
  Fq.prototype.h = function () {
    return this.Jg.h().xd(this.Ih);
  };
  Fq.prototype.t = function () {
    var a = this.Jg.t();
    return 0 <= a ? ((a = (a - this.Pf) | 0), 0 < a ? a : 0) : -1;
  };
  Fq.prototype.e = function () {
    return !this.h().l();
  };
  Fq.prototype.$classData = v({ qj: 0 }, !1, "scala.collection.View$Drop", {
    qj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function Wh(a, b) {
    this.rj = a;
    this.op = b;
  }
  Wh.prototype = new $r();
  Wh.prototype.constructor = Wh;
  Wh.prototype.h = function () {
    W();
    return new So(this.rj, this.op);
  };
  Wh.prototype.t = function () {
    var a = this.rj;
    return 0 > a ? 0 : a;
  };
  Wh.prototype.e = function () {
    return 0 >= this.rj;
  };
  Wh.prototype.$classData = v({ np: 0 }, !1, "scala.collection.View$Fill", {
    np: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function pj(a, b, c) {
    this.jl = a;
    this.rp = b;
    this.qp = c;
  }
  pj.prototype = new $r();
  pj.prototype.constructor = pj;
  pj.prototype.h = function () {
    var a = this.jl.h();
    return new To(a, this.rp, this.qp);
  };
  pj.prototype.t = function () {
    return 0 === this.jl.t() ? 0 : -1;
  };
  pj.prototype.e = function () {
    return !this.h().l();
  };
  pj.prototype.$classData = v({ pp: 0 }, !1, "scala.collection.View$Filter", {
    pp: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function qj(a, b) {
    this.kl = a;
    this.tp = b;
  }
  qj.prototype = new $r();
  qj.prototype.constructor = qj;
  qj.prototype.h = function () {
    var a = this.kl.h();
    return new Po(a, this.tp);
  };
  qj.prototype.t = function () {
    return 0 === this.kl.t() ? 0 : -1;
  };
  qj.prototype.e = function () {
    return !this.h().l();
  };
  qj.prototype.$classData = v({ sp: 0 }, !1, "scala.collection.View$FlatMap", {
    sp: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function mj(a, b, c) {
    a.Qf = b;
    a.Jh = c;
    return a;
  }
  function nj() {
    this.Jh = this.Qf = null;
  }
  nj.prototype = new $r();
  nj.prototype.constructor = nj;
  function Bs() {}
  Bs.prototype = nj.prototype;
  nj.prototype.h = function () {
    var a = this.Qf.h();
    return new Uo(a, this.Jh);
  };
  nj.prototype.t = function () {
    return this.Qf.t();
  };
  nj.prototype.e = function () {
    return this.Qf.e();
  };
  nj.prototype.$classData = v({ sj: 0 }, !1, "scala.collection.View$Map", {
    sj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function zs(a) {
    this.vp = a;
  }
  zs.prototype = new $r();
  zs.prototype.constructor = zs;
  zs.prototype.h = function () {
    W();
    return new Go(this.vp);
  };
  zs.prototype.t = function () {
    return 1;
  };
  zs.prototype.e = function () {
    return !1;
  };
  zs.prototype.$classData = v({ up: 0 }, !1, "scala.collection.View$Single", {
    up: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function Gq(a, b) {
    this.vj = a;
    this.uj = b;
  }
  Gq.prototype = new $r();
  Gq.prototype.constructor = Gq;
  Gq.prototype.h = function () {
    var a = this.vj.h();
    return new Qo(a, this.uj);
  };
  Gq.prototype.t = function () {
    var a = this.vj.t();
    if (0 === a) return 0;
    var b = this.uj.t();
    return 0 === b ? 0 : a < b ? a : b;
  };
  Gq.prototype.e = function () {
    return this.vj.e() || this.uj.e();
  };
  Gq.prototype.$classData = v({ wp: 0 }, !1, "scala.collection.View$Zip", {
    wp: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
  });
  function Hq(a) {
    this.tj = a;
  }
  Hq.prototype = new $r();
  Hq.prototype.constructor = Hq;
  Hq.prototype.h = function () {
    var a = this.tj.h();
    return new Ro(a);
  };
  Hq.prototype.t = function () {
    return this.tj.t();
  };
  Hq.prototype.e = function () {
    return this.tj.e();
  };
  Hq.prototype.$classData = v(
    { xp: 0 },
    !1,
    "scala.collection.View$ZipWithIndex",
    { xp: 1, Xb: 1, E: 1, b: 1, B: 1, r: 1, D: 1, s: 1, C: 1, Rb: 1, c: 1 }
  );
  function Tn() {}
  Tn.prototype = new q();
  Tn.prototype.constructor = Tn;
  Tn.prototype.$classData = v(
    { Hn: 0 },
    !1,
    "scala.math.Numeric$IntIsIntegral$",
    {
      Hn: 1,
      b: 1,
      os: 1,
      ks: 1,
      ns: 1,
      ps: 1,
      as: 1,
      rs: 1,
      js: 1,
      c: 1,
      qs: 1,
    }
  );
  var be;
  function Cs() {}
  Cs.prototype = new Dq();
  Cs.prototype.constructor = Cs;
  function Ds() {}
  e = Ds.prototype = Cs.prototype;
  e.y = function (a) {
    return as(this, a);
  };
  e.H = function () {
    var a = Ig();
    return Jg(a, this, a.sh);
  };
  e.Ob = function () {
    return "Set";
  };
  e.z = function () {
    return Oo(this);
  };
  e.Ll = function (a) {
    return this.xg(a);
  };
  e.m = function (a) {
    return this.F(a);
  };
  function Es() {}
  Es.prototype = new Dq();
  Es.prototype.constructor = Es;
  function Fs() {}
  e = Fs.prototype = Es.prototype;
  e.ih = function () {
    return !0;
  };
  e.y = function (a) {
    return xs(this, a);
  };
  e.H = function () {
    return Ni(this);
  };
  e.z = function () {
    return Oo(this);
  };
  e.ud = function (a) {
    return this.X().W(new ys(this, a));
  };
  e.Nd = function (a) {
    return jj(this, a);
  };
  e.Ff = function (a) {
    return this.Nd(a);
  };
  e.Sa = function () {
    return this.q();
  };
  e.xe = function (a, b) {
    var c = this.h();
    return sj(c, a, b);
  };
  e.F = function (a) {
    return Jk(this, a);
  };
  e.Oj = function (a) {
    return this.kb(a);
  };
  e.kb = function (a) {
    return gj(this, a);
  };
  e.e = function () {
    return 0 === this.kb(0);
  };
  e.cf = function (a) {
    return Wl(this, a);
  };
  function Gs() {}
  Gs.prototype = new $r();
  Gs.prototype.constructor = Gs;
  function Hs() {}
  e = Hs.prototype = Gs.prototype;
  e.ce = function (a) {
    return Is(new Js(), this, a);
  };
  e.be = function (a) {
    return Ks(new Ls(), this, a);
  };
  e.Ob = function () {
    return "SeqView";
  };
  e.Ff = function (a) {
    return jj(this, a);
  };
  e.xe = function (a, b) {
    var c = this.h();
    return sj(c, a, b);
  };
  e.F = function (a) {
    return Jk(this, a);
  };
  e.kb = function (a) {
    return gj(this, a);
  };
  e.e = function () {
    return 0 === this.kb(0);
  };
  e.Jb = function (a) {
    return this.be(a);
  };
  e.da = function (a) {
    return this.ce(a);
  };
  function Hj() {}
  Hj.prototype = new $r();
  Hj.prototype.constructor = Hj;
  e = Hj.prototype;
  e.h = function () {
    return W().Z;
  };
  e.t = function () {
    return 0;
  };
  e.e = function () {
    return !0;
  };
  e.cb = function () {
    return "Empty";
  };
  e.lb = function () {
    return 0;
  };
  e.mb = function (a) {
    return wg(Y(), a);
  };
  e.H = function () {
    return 67081517;
  };
  e.$classData = v({ mp: 0 }, !1, "scala.collection.View$Empty$", {
    mp: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    yb: 1,
    x: 1,
  });
  var Gj;
  function Ks(a, b, c) {
    a.Ig = b;
    a.mj = c;
    Eq(a, b, c);
    return a;
  }
  function Ls() {
    this.Jg = null;
    this.Pf = this.Ih = 0;
    this.Ig = null;
    this.mj = 0;
  }
  Ls.prototype = new As();
  Ls.prototype.constructor = Ls;
  function Ms() {}
  e = Ms.prototype = Ls.prototype;
  e.ce = function (a) {
    return Is(new Js(), this, a);
  };
  e.Ob = function () {
    return "SeqView";
  };
  e.Ff = function (a) {
    return jj(this, a);
  };
  e.xe = function (a, b) {
    var c = this.h();
    return sj(c, a, b);
  };
  e.F = function (a) {
    return Jk(this, a);
  };
  e.kb = function (a) {
    return gj(this, a);
  };
  e.e = function () {
    return 0 === this.kb(0);
  };
  e.q = function () {
    var a = (this.Ig.q() - this.Pf) | 0;
    return 0 < a ? a : 0;
  };
  e.v = function (a) {
    return this.Ig.v((a + this.Pf) | 0);
  };
  e.be = function (a) {
    return Ks(new Ls(), this.Ig, (this.mj + a) | 0);
  };
  e.da = function (a) {
    return this.ce(a);
  };
  e.Jb = function (a) {
    return this.be(a);
  };
  e.$classData = v({ fl: 0 }, !1, "scala.collection.SeqView$Drop", {
    fl: 1,
    qj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    gf: 1,
    Q: 1,
  });
  function Cj(a, b) {
    a.hf = b;
    return a;
  }
  function Dj() {
    this.hf = null;
  }
  Dj.prototype = new Hs();
  Dj.prototype.constructor = Dj;
  function Ns() {}
  e = Ns.prototype = Dj.prototype;
  e.v = function (a) {
    return this.hf.v(a);
  };
  e.q = function () {
    return this.hf.q();
  };
  e.h = function () {
    return this.hf.h();
  };
  e.t = function () {
    return this.hf.t();
  };
  e.e = function () {
    return this.hf.e();
  };
  e.$classData = v({ gl: 0 }, !1, "scala.collection.SeqView$Id", {
    gl: 1,
    fj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    gf: 1,
    Q: 1,
  });
  function Is(a, b, c) {
    a.Gh = b;
    a.nj = c;
    mj(a, b, c);
    return a;
  }
  function Js() {
    this.nj = this.Gh = this.Jh = this.Qf = null;
  }
  Js.prototype = new Bs();
  Js.prototype.constructor = Js;
  function Os() {}
  e = Os.prototype = Js.prototype;
  e.ce = function (a) {
    return Is(new Js(), this, a);
  };
  e.be = function (a) {
    return Ks(new Ls(), this, a);
  };
  e.Ob = function () {
    return "SeqView";
  };
  e.Ff = function (a) {
    return jj(this, a);
  };
  e.xe = function (a, b) {
    var c = this.h();
    return sj(c, a, b);
  };
  e.F = function (a) {
    return Jk(this, a);
  };
  e.kb = function (a) {
    return gj(this, a);
  };
  e.e = function () {
    return 0 === this.kb(0);
  };
  e.v = function (a) {
    return this.nj.m(this.Gh.v(a));
  };
  e.q = function () {
    return this.Gh.q();
  };
  e.Jb = function (a) {
    return this.be(a);
  };
  e.da = function (a) {
    return this.ce(a);
  };
  e.$classData = v({ hl: 0 }, !1, "scala.collection.SeqView$Map", {
    hl: 1,
    sj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    gf: 1,
    Q: 1,
  });
  function Ps() {}
  Ps.prototype = new Hs();
  Ps.prototype.constructor = Ps;
  function Qs() {}
  e = Qs.prototype = Ps.prototype;
  e.h = function () {
    return new Bk(this);
  };
  e.Ob = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.v(0);
  };
  e.kb = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.q();
  };
  e.ce = function (a) {
    return new Mo(this, a);
  };
  e.da = function (a) {
    return new Mo(this, a);
  };
  e.be = function (a) {
    return new Ko(this, a);
  };
  e.Jb = function (a) {
    return new Ko(this, a);
  };
  function Rs() {}
  Rs.prototype = new Ds();
  Rs.prototype.constructor = Rs;
  function Ss() {}
  Ss.prototype = Rs.prototype;
  Rs.prototype.X = function () {
    return Xi();
  };
  function Ko(a, b) {
    this.Jg = null;
    this.Pf = this.Ih = 0;
    this.Ig = null;
    this.mj = 0;
    Ks(this, a, b);
  }
  Ko.prototype = new Ms();
  Ko.prototype.constructor = Ko;
  e = Ko.prototype;
  e.h = function () {
    return new Bk(this);
  };
  e.Ob = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.v(0);
  };
  e.kb = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.q();
  };
  e.ce = function (a) {
    return new Mo(this, a);
  };
  e.da = function (a) {
    return new Mo(this, a);
  };
  e.be = function (a) {
    return new Ko(this, a);
  };
  e.Jb = function (a) {
    return new Ko(this, a);
  };
  e.$classData = v({ Fo: 0 }, !1, "scala.collection.IndexedSeqView$Drop", {
    Fo: 1,
    fl: 1,
    qj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    gf: 1,
    Q: 1,
    th: 1,
    La: 1,
  });
  function Ak(a) {
    this.hf = null;
    Cj(this, a);
  }
  Ak.prototype = new Ns();
  Ak.prototype.constructor = Ak;
  e = Ak.prototype;
  e.h = function () {
    return new Bk(this);
  };
  e.Ob = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.v(0);
  };
  e.kb = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.q();
  };
  e.ce = function (a) {
    return new Mo(this, a);
  };
  e.da = function (a) {
    return new Mo(this, a);
  };
  e.be = function (a) {
    return new Ko(this, a);
  };
  e.Jb = function (a) {
    return new Ko(this, a);
  };
  e.$classData = v({ Go: 0 }, !1, "scala.collection.IndexedSeqView$Id", {
    Go: 1,
    gl: 1,
    fj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    gf: 1,
    Q: 1,
    th: 1,
    La: 1,
  });
  function Mo(a, b) {
    this.nj = this.Gh = this.Jh = this.Qf = null;
    Is(this, a, b);
  }
  Mo.prototype = new Os();
  Mo.prototype.constructor = Mo;
  e = Mo.prototype;
  e.h = function () {
    return new Bk(this);
  };
  e.Ob = function () {
    return "IndexedSeqView";
  };
  e.u = function () {
    return this.v(0);
  };
  e.kb = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.q();
  };
  e.ce = function (a) {
    return new Mo(this, a);
  };
  e.da = function (a) {
    return new Mo(this, a);
  };
  e.be = function (a) {
    return new Ko(this, a);
  };
  e.Jb = function (a) {
    return new Ko(this, a);
  };
  e.$classData = v({ Jo: 0 }, !1, "scala.collection.IndexedSeqView$Map", {
    Jo: 1,
    hl: 1,
    sj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    gf: 1,
    Q: 1,
    th: 1,
    La: 1,
  });
  function Ts() {}
  Ts.prototype = new Fs();
  Ts.prototype.constructor = Ts;
  function Us() {}
  Us.prototype = Ts.prototype;
  function Vs(a, b) {
    this.Rq = a;
    this.Gj = b;
  }
  Vs.prototype = new Qs();
  Vs.prototype.constructor = Vs;
  Vs.prototype.q = function () {
    return this.Gj;
  };
  Vs.prototype.v = function (a) {
    if (a < this.Gj) return this.Rq.a[a];
    throw xg(
      new yg(),
      a + " is out of bounds (min 0, max " + ((-1 + this.Gj) | 0) + ")"
    );
  };
  Vs.prototype.Wc = function () {
    return "ArrayBufferView";
  };
  Vs.prototype.$classData = v(
    { Qq: 0 },
    !1,
    "scala.collection.mutable.ArrayBufferView",
    {
      Qq: 1,
      io: 1,
      fj: 1,
      Xb: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      Rb: 1,
      c: 1,
      gf: 1,
      Q: 1,
      th: 1,
      La: 1,
    }
  );
  function Ws(a, b) {
    return gp(b) ? a.q() === b.q() : !0;
  }
  function Xs(a, b) {
    if (gp(b)) {
      if (a === b) return !0;
      var c = a.q(),
        d = c === b.q();
      if (d) {
        var f = 0,
          g = a.hh(),
          h = b.hh();
        g = g < h ? g : h;
        h = c >> 31;
        var k = (g >>> 31) | 0 | ((g >> 31) << 1);
        for (
          g = (h === k ? (-2147483648 ^ c) > (-2147483648 ^ (g << 1)) : h > k)
            ? g
            : c;
          f < g && d;

        )
          (d = J(L(), a.v(f), b.v(f))), (f = (1 + f) | 0);
        if (f < c && d)
          for (a = a.h().xd(f), b = b.h().xd(f); d && a.l(); )
            d = J(L(), a.k(), b.k());
      }
      return d;
    }
    return Wl(a, b);
  }
  function gp(a) {
    return !!(a && a.$classData && a.$classData.Ib.he);
  }
  function Ys() {}
  Ys.prototype = new Ss();
  Ys.prototype.constructor = Ys;
  e = Ys.prototype;
  e.Sa = function () {
    return 0;
  };
  e.e = function () {
    return !0;
  };
  e.t = function () {
    return 0;
  };
  e.Ll = function () {
    return !0;
  };
  e.F = function () {
    return !1;
  };
  e.h = function () {
    return W().Z;
  };
  e.N = function () {};
  e.Hf = function (a) {
    return new Zs(a);
  };
  e.Qb = function () {
    return this;
  };
  e.$classData = v({ gq: 0 }, !1, "scala.collection.immutable.Set$EmptySet$", {
    gq: 1,
    Kg: 1,
    Jf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    jf: 1,
    Nf: 1,
    O: 1,
    x: 1,
    Yf: 1,
    Sb: 1,
    Sg: 1,
    c: 1,
  });
  var $s;
  function cl() {
    $s || ($s = new Ys());
    return $s;
  }
  function at(a) {
    this.Of = a;
  }
  at.prototype = new Qs();
  at.prototype.constructor = at;
  e = at.prototype;
  e.q = function () {
    return this.Of.length | 0;
  };
  e.z = function () {
    return "StringView(" + this.Of + ")";
  };
  e.cb = function () {
    return "StringView";
  };
  e.lb = function () {
    return 1;
  };
  e.mb = function (a) {
    return 0 === a ? this.Of : wg(Y(), a);
  };
  e.H = function () {
    return Hg(this);
  };
  e.y = function (a) {
    return this === a ? !0 : a instanceof at ? this.Of === a.Of : !1;
  };
  e.v = function (a) {
    return Na(65535 & (this.Of.charCodeAt(a) | 0));
  };
  e.$classData = v({ fp: 0 }, !1, "scala.collection.StringView", {
    fp: 1,
    io: 1,
    fj: 1,
    Xb: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    Rb: 1,
    c: 1,
    gf: 1,
    Q: 1,
    th: 1,
    La: 1,
    yb: 1,
    x: 1,
  });
  function Zs(a) {
    this.sf = a;
  }
  Zs.prototype = new Ss();
  Zs.prototype.constructor = Zs;
  e = Zs.prototype;
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return this.Ze(a, !1);
  };
  e.Sa = function () {
    return 1;
  };
  e.e = function () {
    return !1;
  };
  e.t = function () {
    return 1;
  };
  e.F = function (a) {
    return J(L(), a, this.sf);
  };
  e.$e = function (a) {
    return this.F(a) ? this : new bt(this.sf, a);
  };
  e.h = function () {
    W();
    return new Go(this.sf);
  };
  e.N = function (a) {
    a.m(this.sf);
  };
  e.xg = function (a) {
    return !!a.m(this.sf);
  };
  e.Ze = function (a, b) {
    return !!a.m(this.sf) !== b ? this : cl();
  };
  e.u = function () {
    return this.sf;
  };
  e.w = function () {
    return cl();
  };
  e.Hf = function (a) {
    return this.$e(a);
  };
  e.$classData = v({ hq: 0 }, !1, "scala.collection.immutable.Set$Set1", {
    hq: 1,
    Kg: 1,
    Jf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    jf: 1,
    Nf: 1,
    O: 1,
    x: 1,
    Yf: 1,
    Sb: 1,
    Sg: 1,
    va: 1,
    c: 1,
  });
  function bt(a, b) {
    this.He = a;
    this.Ie = b;
  }
  bt.prototype = new Ss();
  bt.prototype.constructor = bt;
  e = bt.prototype;
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return this.Ze(a, !1);
  };
  e.Sa = function () {
    return 2;
  };
  e.e = function () {
    return !1;
  };
  e.t = function () {
    return 2;
  };
  e.F = function (a) {
    return J(L(), a, this.He) || J(L(), a, this.Ie);
  };
  e.$e = function (a) {
    return this.F(a) ? this : new ct(this.He, this.Ie, a);
  };
  e.h = function () {
    return new qr(this);
  };
  e.N = function (a) {
    a.m(this.He);
    a.m(this.Ie);
  };
  e.xg = function (a) {
    return !!a.m(this.He) && !!a.m(this.Ie);
  };
  e.Ze = function (a, b) {
    var c = null,
      d = 0;
    !!a.m(this.He) !== b && ((c = this.He), (d = (1 + d) | 0));
    !!a.m(this.Ie) !== b && (0 === d && (c = this.Ie), (d = (1 + d) | 0));
    a = d;
    switch (a) {
      case 0:
        return cl();
      case 1:
        return new Zs(c);
      case 2:
        return this;
      default:
        throw new T(a);
    }
  };
  e.u = function () {
    return this.He;
  };
  e.$g = function () {
    return new Zs(this.Ie);
  };
  e.w = function () {
    return this.$g();
  };
  e.Hf = function (a) {
    return this.$e(a);
  };
  e.$classData = v({ iq: 0 }, !1, "scala.collection.immutable.Set$Set2", {
    iq: 1,
    Kg: 1,
    Jf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    jf: 1,
    Nf: 1,
    O: 1,
    x: 1,
    Yf: 1,
    Sb: 1,
    Sg: 1,
    va: 1,
    c: 1,
  });
  function ct(a, b, c) {
    this.Je = a;
    this.ke = b;
    this.le = c;
  }
  ct.prototype = new Ss();
  ct.prototype.constructor = ct;
  e = ct.prototype;
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return this.Ze(a, !1);
  };
  e.Sa = function () {
    return 3;
  };
  e.e = function () {
    return !1;
  };
  e.t = function () {
    return 3;
  };
  e.F = function (a) {
    return J(L(), a, this.Je) || J(L(), a, this.ke) || J(L(), a, this.le);
  };
  e.$e = function (a) {
    return this.F(a) ? this : new dt(this.Je, this.ke, this.le, a);
  };
  e.h = function () {
    return new rr(this);
  };
  e.N = function (a) {
    a.m(this.Je);
    a.m(this.ke);
    a.m(this.le);
  };
  e.xg = function (a) {
    return !!a.m(this.Je) && !!a.m(this.ke) && !!a.m(this.le);
  };
  e.Ze = function (a, b) {
    var c = null,
      d = null,
      f = 0;
    !!a.m(this.Je) !== b && ((c = this.Je), (f = (1 + f) | 0));
    !!a.m(this.ke) !== b &&
      (0 === f ? (c = this.ke) : (d = this.ke), (f = (1 + f) | 0));
    !!a.m(this.le) !== b &&
      (0 === f ? (c = this.le) : 1 === f && (d = this.le), (f = (1 + f) | 0));
    a = f;
    switch (a) {
      case 0:
        return cl();
      case 1:
        return new Zs(c);
      case 2:
        return new bt(c, d);
      case 3:
        return this;
      default:
        throw new T(a);
    }
  };
  e.u = function () {
    return this.Je;
  };
  e.$g = function () {
    return new bt(this.ke, this.le);
  };
  e.w = function () {
    return this.$g();
  };
  e.Hf = function (a) {
    return this.$e(a);
  };
  e.$classData = v({ kq: 0 }, !1, "scala.collection.immutable.Set$Set3", {
    kq: 1,
    Kg: 1,
    Jf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    jf: 1,
    Nf: 1,
    O: 1,
    x: 1,
    Yf: 1,
    Sb: 1,
    Sg: 1,
    va: 1,
    c: 1,
  });
  function dt(a, b, c, d) {
    this.me = a;
    this.Sd = b;
    this.Fd = c;
    this.Gd = d;
  }
  dt.prototype = new Ss();
  dt.prototype.constructor = dt;
  e = dt.prototype;
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return this.Ze(a, !1);
  };
  e.Sa = function () {
    return 4;
  };
  e.e = function () {
    return !1;
  };
  e.t = function () {
    return 4;
  };
  e.F = function (a) {
    return (
      J(L(), a, this.me) ||
      J(L(), a, this.Sd) ||
      J(L(), a, this.Fd) ||
      J(L(), a, this.Gd)
    );
  };
  e.$e = function (a) {
    return this.F(a)
      ? this
      : et(et(et(et(et(Rk().Sf, this.me), this.Sd), this.Fd), this.Gd), a);
  };
  e.h = function () {
    return new sr(this);
  };
  function tr(a, b) {
    switch (b) {
      case 0:
        return a.me;
      case 1:
        return a.Sd;
      case 2:
        return a.Fd;
      case 3:
        return a.Gd;
      default:
        throw new T(b);
    }
  }
  e.N = function (a) {
    a.m(this.me);
    a.m(this.Sd);
    a.m(this.Fd);
    a.m(this.Gd);
  };
  e.xg = function (a) {
    return !!a.m(this.me) && !!a.m(this.Sd) && !!a.m(this.Fd) && !!a.m(this.Gd);
  };
  e.Ze = function (a, b) {
    var c = null,
      d = null,
      f = null,
      g = 0;
    !!a.m(this.me) !== b && ((c = this.me), (g = (1 + g) | 0));
    !!a.m(this.Sd) !== b &&
      (0 === g ? (c = this.Sd) : (d = this.Sd), (g = (1 + g) | 0));
    !!a.m(this.Fd) !== b &&
      (0 === g ? (c = this.Fd) : 1 === g ? (d = this.Fd) : (f = this.Fd),
      (g = (1 + g) | 0));
    !!a.m(this.Gd) !== b &&
      (0 === g
        ? (c = this.Gd)
        : 1 === g
        ? (d = this.Gd)
        : 2 === g && (f = this.Gd),
      (g = (1 + g) | 0));
    a = g;
    switch (a) {
      case 0:
        return cl();
      case 1:
        return new Zs(c);
      case 2:
        return new bt(c, d);
      case 3:
        return new ct(c, d, f);
      case 4:
        return this;
      default:
        throw new T(a);
    }
  };
  e.u = function () {
    return this.me;
  };
  e.$g = function () {
    return new ct(this.Sd, this.Fd, this.Gd);
  };
  e.w = function () {
    return this.$g();
  };
  e.Hf = function (a) {
    return this.$e(a);
  };
  e.$classData = v({ mq: 0 }, !1, "scala.collection.immutable.Set$Set4", {
    mq: 1,
    Kg: 1,
    Jf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    jf: 1,
    Nf: 1,
    O: 1,
    x: 1,
    Yf: 1,
    Sb: 1,
    Sg: 1,
    va: 1,
    c: 1,
  });
  function ft() {}
  ft.prototype = new Fs();
  ft.prototype.constructor = ft;
  function gt() {}
  gt.prototype = ft.prototype;
  function Nk(a) {
    this.kc = a;
  }
  Nk.prototype = new Ss();
  Nk.prototype.constructor = Nk;
  e = Nk.prototype;
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    a = Ek(this.kc, a, !1);
    return a === this.kc ? this : 0 === a.Xa ? Rk().Sf : new Nk(a);
  };
  e.X = function () {
    return Rk();
  };
  e.t = function () {
    return this.kc.Xa;
  };
  e.Sa = function () {
    return this.kc.Xa;
  };
  e.e = function () {
    return 0 === this.kc.Xa;
  };
  e.h = function () {
    return this.e() ? W().Z : new up(this.kc);
  };
  e.F = function (a) {
    var b = vg(Y(), a),
      c = Od(Qd(), b);
    return this.kc.ug(a, b, c, 0);
  };
  function et(a, b) {
    var c = vg(Y(), b),
      d = Od(Qd(), c);
    b = uk(a.kc, b, c, d, 0);
    return a.kc === b ? a : new Nk(b);
  }
  e.u = function () {
    return this.h().k();
  };
  e.N = function (a) {
    this.kc.N(a);
  };
  e.y = function (a) {
    if (a instanceof Nk) {
      if (this === a) return !0;
      var b = this.kc;
      a = a.kc;
      return null === b ? null === a : b.y(a);
    }
    return as(this, a);
  };
  e.Wc = function () {
    return "HashSet";
  };
  e.H = function () {
    var a = new tp(this.kc);
    return Jg(Ig(), a, Ig().sh);
  };
  e.Jb = function (a) {
    return this.ve(Eq(new Fq(), this, a));
  };
  e.w = function () {
    var a = this.h().k(),
      b = vg(Y(), a),
      c = Od(Qd(), b);
    a = zk(this.kc, a, b, c, 0);
    return this.kc === a ? this : new Nk(a);
  };
  e.Hf = function (a) {
    return et(this, a);
  };
  e.$classData = v({ Ep: 0 }, !1, "scala.collection.immutable.HashSet", {
    Ep: 1,
    Kg: 1,
    Jf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    jf: 1,
    Nf: 1,
    O: 1,
    x: 1,
    Yf: 1,
    Sb: 1,
    Sg: 1,
    Ns: 1,
    Ls: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function ht() {}
  ht.prototype = new Ds();
  ht.prototype.constructor = ht;
  function it() {}
  it.prototype = ht.prototype;
  ht.prototype.Wa = function () {
    return this;
  };
  var kt = function jt(a, b) {
      X();
      return new gm(
        new H(
          ((d, f) => () => {
            if (d.e()) return Wk();
            X();
            var g = f.m(Z(d).u()),
              h = jt(Z(d).Ta(), f);
            return new Sk(g, h);
          })(a, b)
        )
      );
    },
    mt = function lt(a, b) {
      if (a.e() || !b.l()) return Wk();
      X();
      var d = Hd(new Id(), Z(a).u(), b.k());
      X();
      return new Sk(d, new gm(new H(((f, g) => () => lt(Z(f).Ta(), g))(a, b))));
    };
  function nt(a, b, c, d, f) {
    b.n = "" + b.n + c;
    if (!a.lc) b.n += "\x3cnot computed\x3e";
    else if (!a.e()) {
      c = Z(a).u();
      b.n = "" + b.n + c;
      c = a;
      var g = Z(a).Ta();
      if (c !== g && (!g.lc || Z(c) !== Z(g)) && ((c = g), g.lc && !g.e()))
        for (g = Z(g).Ta(); c !== g && g.lc && !g.e() && Z(c) !== Z(g); ) {
          b.n = "" + b.n + d;
          var h = Z(c).u();
          b.n = "" + b.n + h;
          c = Z(c).Ta();
          g = Z(g).Ta();
          g.lc && !g.e() && (g = Z(g).Ta());
        }
      if (!g.lc || g.e()) {
        for (; c !== g; )
          (b.n = "" + b.n + d),
            (a = Z(c).u()),
            (b.n = "" + b.n + a),
            (c = Z(c).Ta());
        c.lc || ((b.n = "" + b.n + d), (b.n += "\x3cnot computed\x3e"));
      } else {
        h = a;
        for (a = 0; ; ) {
          var k = h,
            l = g;
          if (k !== l && Z(k) !== Z(l))
            (h = Z(h).Ta()), (g = Z(g).Ta()), (a = (1 + a) | 0);
          else break;
        }
        h = c;
        k = g;
        (h === k || Z(h) === Z(k)) &&
          0 < a &&
          ((b.n = "" + b.n + d),
          (a = Z(c).u()),
          (b.n = "" + b.n + a),
          (c = Z(c).Ta()));
        for (;;)
          if (((a = c), (h = g), a !== h && Z(a) !== Z(h)))
            (b.n = "" + b.n + d),
              (a = Z(c).u()),
              (b.n = "" + b.n + a),
              (c = Z(c).Ta());
          else break;
        b.n = "" + b.n + d;
        b.n += "\x3ccycle\x3e";
      }
    }
    b.n = "" + b.n + f;
    return b;
  }
  function gm(a) {
    this.ql = null;
    this.xj = !1;
    this.pl = a;
    this.yj = this.lc = !1;
  }
  gm.prototype = new Us();
  gm.prototype.constructor = gm;
  e = gm.prototype;
  e.Ob = function () {
    return "LinearSeq";
  };
  e.q = function () {
    return Wo(this);
  };
  e.id = function () {
    return Xo(this);
  };
  e.kb = function (a) {
    return 0 > a ? 1 : bp(this, a);
  };
  e.v = function (a) {
    return mn(this, a);
  };
  e.Gf = function (a) {
    return Yo(this, a);
  };
  e.F = function (a) {
    return Zo(this, a);
  };
  e.cf = function (a) {
    return $o(this, a);
  };
  e.xe = function (a, b) {
    return ap(this, a, b);
  };
  function Z(a) {
    if (!a.xj && !a.xj) {
      if (a.yj)
        throw (
          ((a = new Fl()),
          ze(
            a,
            "self-referential LazyList or a derivation thereof has no more elements"
          ),
          lb(a))
        );
      a.yj = !0;
      try {
        var b = je(a.pl);
      } finally {
        a.yj = !1;
      }
      a.lc = !0;
      a.pl = null;
      a.ql = b;
      a.xj = !0;
    }
    return a.ql;
  }
  e.e = function () {
    return Z(this) === Wk();
  };
  e.t = function () {
    return this.lc && this.e() ? 0 : -1;
  };
  e.u = function () {
    return Z(this).u();
  };
  function fm(a) {
    var b = a,
      c = a;
    for (b.e() || (b = Z(b).Ta()); c !== b && !b.e(); ) {
      b = Z(b).Ta();
      if (b.e()) break;
      b = Z(b).Ta();
      if (b === c) break;
      c = Z(c).Ta();
    }
    return a;
  }
  e.h = function () {
    return this.lc && this.e() ? W().Z : new mp(this);
  };
  e.N = function (a) {
    for (var b = this; !b.e(); ) a.m(Z(b).u()), (b = Z(b).Ta());
  };
  e.Wc = function () {
    return "LazyList";
  };
  function ot(a, b) {
    X();
    return new gm(
      new H(
        ((c, d) => () => {
          if (c.e()) {
            var f = je(d);
            return f instanceof gm ? Z(f) : 0 === f.t() ? Wk() : zm(X(), f.h());
          }
          X();
          f = Z(c).u();
          var g = ot(Z(c).Ta(), d);
          return new Sk(f, g);
        })(a, b)
      )
    );
  }
  function pt(a, b) {
    return a.lc && a.e() ? Bj(X(), b) : ot(a, new H(((c, d) => () => d)(a, b)));
  }
  function qt(a, b) {
    return a.lc && a.e()
      ? (X(),
        new gm(
          new H(
            ((c, d) => () => {
              X();
              var f = X().ie;
              return new Sk(d, f);
            })(a, b)
          )
        ))
      : ot(
          a,
          new H(
            ((c, d) => () => {
              W();
              return new Go(d);
            })(a, b)
          )
        );
  }
  e.ze = function (a) {
    if (this.e()) throw Yd("empty.reduceLeft");
    for (var b = Z(this).u(), c = Z(this).Ta(); !c.e(); )
      (b = a.Uc(b, Z(c).u())), (c = Z(c).Ta());
    return b;
  };
  function Yk(a, b) {
    return a.lc && a.e() ? X().ie : hm(X(), a, b, !1);
  }
  e.Hc = function (a) {
    return new Xk(this, a);
  };
  e.If = function (a) {
    return this.lc && this.e() ? X().ie : kt(this, a);
  };
  e.vg = function (a) {
    return this.lc && this.e() ? X().ie : im(X(), this, a);
  };
  function rt(a, b) {
    if ((a.lc && a.e()) || 0 === b.t()) return X().ie;
    X();
    return new gm(new H(((c, d) => () => mt(c, d.h()))(a, b)));
  }
  e.fg = function (a) {
    return Hd(
      new Id(),
      this.If(new D(((b, c) => (d) => c.m(d).dc())(this, a))),
      this.If(new D(((b, c) => (d) => c.m(d).qc())(this, a)))
    );
  };
  e.ae = function (a, b, c, d) {
    fm(this);
    nt(this, a.Nb, b, c, d);
    return a;
  };
  e.z = function () {
    return nt(this, Hl("LazyList"), "(", ", ", ")").n;
  };
  e.m = function (a) {
    return mn(this, a | 0);
  };
  e.Jb = function (a) {
    return 0 >= a ? this : this.lc && this.e() ? X().ie : ym(X(), this, a);
  };
  e.hg = function () {
    var a = X();
    return rt(this, Am(a, 0, 1));
  };
  e.wg = function (a) {
    return this.vg(a);
  };
  e.Cb = function (a) {
    return this.vg(a);
  };
  e.da = function (a) {
    return this.If(a);
  };
  e.Qb = function (a) {
    return Yk(this, a);
  };
  e.ud = function (a) {
    return qt(this, a);
  };
  e.Nd = function (a) {
    return pt(this, a);
  };
  e.w = function () {
    return Z(this).Ta();
  };
  e.X = function () {
    return X();
  };
  e.$classData = v({ Lp: 0 }, !1, "scala.collection.immutable.LazyList", {
    Lp: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    Lh: 1,
    Hg: 1,
    Fh: 1,
    Mh: 1,
    c: 1,
  });
  function st(a, b, c, d, f) {
    b.n = "" + b.n + c;
    if (!a.e()) {
      c = a.u();
      b.n = "" + b.n + c;
      c = a;
      if (a.se()) {
        var g = a.w();
        if (c !== g && ((c = g), g.se()))
          for (g = g.w(); c !== g && g.se(); ) {
            b.n = "" + b.n + d;
            var h = c.u();
            b.n = "" + b.n + h;
            c = c.w();
            g = g.w();
            g.se() && (g = g.w());
          }
        if (g.se()) {
          for (h = 0; a !== g; ) (a = a.w()), (g = g.w()), (h = (1 + h) | 0);
          c === g &&
            0 < h &&
            ((b.n = "" + b.n + d),
            (a = c.u()),
            (b.n = "" + b.n + a),
            (c = c.w()));
          for (; c !== g; )
            (b.n = "" + b.n + d),
              (a = c.u()),
              (b.n = "" + b.n + a),
              (c = c.w());
        } else {
          for (; c !== g; )
            (b.n = "" + b.n + d),
              (a = c.u()),
              (b.n = "" + b.n + a),
              (c = c.w());
          c.e() || ((b.n = "" + b.n + d), (g = c.u()), (b.n = "" + b.n + g));
        }
      }
      c.e() ||
        (c.se()
          ? ((b.n = "" + b.n + d), (b.n += "\x3ccycle\x3e"))
          : ((b.n = "" + b.n + d), (b.n += "\x3cnot computed\x3e")));
    }
    b.n = "" + b.n + f;
    return b;
  }
  function Em() {}
  Em.prototype = new Us();
  Em.prototype.constructor = Em;
  function tt() {}
  e = tt.prototype = Em.prototype;
  e.Ob = function () {
    return "LinearSeq";
  };
  e.h = function () {
    return 0 === this.t() ? W().Z : new Vo(this);
  };
  e.q = function () {
    return Wo(this);
  };
  e.id = function () {
    return Xo(this);
  };
  e.kb = function (a) {
    return 0 > a ? 1 : bp(this, a);
  };
  e.v = function (a) {
    return mn(this, a);
  };
  e.Gf = function (a) {
    return Yo(this, a);
  };
  e.F = function (a) {
    return Zo(this, a);
  };
  e.cf = function (a) {
    return $o(this, a);
  };
  e.xe = function (a, b) {
    return ap(this, a, b);
  };
  e.Wc = function () {
    return "Stream";
  };
  e.N = function (a) {
    for (var b = this; !b.e(); ) a.m(b.u()), (b = b.w());
  };
  function ut(a, b) {
    if (a.e()) return (a = Lf()), (b = je(b)), Dm(a, b);
    var c = a.u();
    return new Gm(c, new H(((d, f) => () => ut(d.w(), f))(a, b)));
  }
  e.ze = function (a) {
    if (this.e()) throw Yd("empty.reduceLeft");
    for (var b = this.u(), c = this.w(); !c.e(); )
      (b = a.Uc(b, c.u())), (c = c.w());
    return b;
  };
  function fl(a, b, c) {
    for (; !a.e() && !!b.m(a.u()) === c; ) a = a.w();
    return a.e() ? Hm() : Im(Lf(), a, b, c);
  }
  e.Hc = function (a) {
    return new gl(this, a);
  };
  function il(a, b) {
    if (a.e()) return Hm();
    var c = b.m(a.u());
    return new Gm(c, new H(((d, f) => () => il(d.w(), f))(a, b)));
  }
  function hl(a, b) {
    if (a.e()) return Hm();
    var c = new Ii(a),
      d = Lf(),
      f = b.m(c.ha.u());
    for (d = Dm(d, f); !c.ha.e() && d.e(); )
      (c.ha = c.ha.w()),
        c.ha.e() || ((d = Lf()), (f = b.m(c.ha.u())), (d = Dm(d, f)));
    return c.ha.e()
      ? Hm()
      : ut(d, new H(((g, h, k) => () => hl(h.ha.w(), k))(a, c, b)));
  }
  function vt(a, b) {
    var c;
    (c = a.e()) || (Ud || (Ud = new Rd()), (c = Sd(b)));
    if (c) return Hm();
    b = Td(b) ? b : Bj(X(), b);
    c = Hd(new Id(), a.u(), b.u());
    return new Gm(c, new H(((d, f) => () => vt(d.w(), f.w()))(a, b)));
  }
  e.ae = function (a, b, c, d) {
    this.Ck();
    st(this, a.Nb, b, c, d);
    return a;
  };
  e.z = function () {
    return st(this, Hl("Stream"), "(", ", ", ")").n;
  };
  e.m = function (a) {
    return mn(this, a | 0);
  };
  e.hg = function () {
    var a = X();
    return vt(this, Am(a, 0, 1));
  };
  e.Cb = function (a) {
    return hl(this, a);
  };
  e.da = function (a) {
    return il(this, a);
  };
  e.Qb = function (a) {
    return fl(this, a, !1);
  };
  e.X = function () {
    return Lf();
  };
  function Nm(a) {
    this.mc = a;
  }
  Nm.prototype = new Us();
  Nm.prototype.constructor = Nm;
  e = Nm.prototype;
  e.ih = function (a) {
    return Ws(this, a);
  };
  e.Ob = function () {
    return "IndexedSeq";
  };
  e.h = function () {
    return new Bk(new at(this.mc));
  };
  e.Jb = function (a) {
    return Jo(this, a);
  };
  e.da = function (a) {
    return Lo(this, a);
  };
  e.u = function () {
    return Na(65535 & (this.mc.charCodeAt(0) | 0));
  };
  e.id = function () {
    return this.v((-1 + this.q()) | 0);
  };
  e.kb = function (a) {
    var b = this.mc.length | 0;
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.mc.length | 0;
  };
  e.q = function () {
    return this.mc.length | 0;
  };
  e.z = function () {
    return this.mc;
  };
  e.Pb = function (a, b, c) {
    if (a instanceof Ra) {
      var d = this.mc.length | 0;
      c = c < d ? c : d;
      d = (a.a.length - b) | 0;
      c = c < d ? c : d;
      c = 0 < c ? c : 0;
      d = this.mc;
      if (c > (d.length | 0) || 0 > c || 0 > c)
        throw ((a = new Kl()), ze(a, "Index out of Bound"), a);
      b = (b - 0) | 0;
      for (var f = 0; f < c; )
        (a.a[(f + b) | 0] = 65535 & (d.charCodeAt(f) | 0)), (f = (1 + f) | 0);
      return c;
    }
    return Zd(this, a, b, c);
  };
  e.cf = function (a) {
    return a instanceof Nm ? this.mc === a.mc : Xs(this, a);
  };
  e.Wc = function () {
    return "WrappedString";
  };
  e.hh = function () {
    return 2147483647;
  };
  e.y = function (a) {
    return a instanceof Nm ? this.mc === a.mc : xs(this, a);
  };
  e.X = function () {
    return If();
  };
  e.Nd = function (a) {
    return a instanceof Nm ? new Nm("" + this.mc + a.mc) : jj(this, a);
  };
  e.ve = function (a) {
    return Mm(Om(), a);
  };
  e.jh = function (a) {
    return Mm(Om(), a);
  };
  e.m = function (a) {
    return Na(65535 & (this.mc.charCodeAt(a | 0) | 0));
  };
  e.v = function (a) {
    return Na(65535 & (this.mc.charCodeAt(a) | 0));
  };
  e.$classData = v({ Lq: 0 }, !1, "scala.collection.immutable.WrappedString", {
    Lq: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    c: 1,
  });
  function B(a, b) {
    a.Pj = b;
    return a;
  }
  function C() {
    this.Pj = null;
  }
  C.prototype = new q();
  C.prototype.constructor = C;
  e = C.prototype;
  e.ud = function (a) {
    return Mq(this, a);
  };
  e.fg = function (a) {
    return Xl(this, a);
  };
  e.da = function (a) {
    return Yl(this, a);
  };
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.wg = function (a) {
    return $l(this, a);
  };
  e.Sj = function (a) {
    return am(this, a);
  };
  e.hg = function () {
    return bm(this);
  };
  e.Qb = function (a) {
    return cm(this, a);
  };
  e.ih = function (a) {
    return Ws(this, a);
  };
  e.cf = function (a) {
    return Xs(this, a);
  };
  e.hh = function () {
    qe || (qe = new pe());
    return qe.nl;
  };
  e.h = function () {
    var a = new Ak(this);
    return new Bk(a);
  };
  e.Jb = function (a) {
    return Jo(this, a);
  };
  e.u = function () {
    return this.v(0);
  };
  e.id = function () {
    return this.v((-1 + this.q()) | 0);
  };
  e.kb = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.q();
  };
  e.y = function (a) {
    return xs(this, a);
  };
  e.H = function () {
    return Ni(this);
  };
  e.z = function () {
    return Oo(this);
  };
  e.Ff = function (a) {
    return Nq(this, a);
  };
  e.Sa = function () {
    return this.q();
  };
  e.xe = function (a, b) {
    var c = new Ak(this);
    c = new Bk(c);
    return sj(c, a, b);
  };
  e.F = function (a) {
    return Jk(this, a);
  };
  e.Oj = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.e = function () {
    return 0 === this.kb(0);
  };
  e.Wi = function () {
    return zq().ea();
  };
  e.Hc = function (a) {
    return new oj(this, a);
  };
  e.w = function () {
    return hj(this);
  };
  e.N = function (a) {
    Vd(this, a);
  };
  e.Gf = function (a) {
    return Wd(this, a);
  };
  e.ze = function (a) {
    return Xd(this, a);
  };
  e.Pb = function (a, b, c) {
    return Zd(this, a, b, c);
  };
  e.ae = function (a, b, c, d) {
    return fe(this, a, b, c, d);
  };
  e.Ad = function () {
    return zq();
  };
  e.q = function () {
    return this.Pj.length | 0;
  };
  e.v = function (a) {
    return this.Pj[a];
  };
  e.Wc = function () {
    return "WrappedVarArgs";
  };
  e.ve = function (a) {
    return vq(zq(), a);
  };
  e.m = function (a) {
    return this.v(a | 0);
  };
  e.X = function () {
    return zq();
  };
  e.$classData = v({ Kr: 0 }, !1, "scala.scalajs.runtime.WrappedVarArgs", {
    Kr: 1,
    b: 1,
    he: 1,
    Bc: 1,
    Sb: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    cd: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function Gm(a, b) {
    this.xl = null;
    this.wq = a;
    this.Dj = b;
  }
  Gm.prototype = new tt();
  Gm.prototype.constructor = Gm;
  e = Gm.prototype;
  e.u = function () {
    return this.wq;
  };
  e.e = function () {
    return !1;
  };
  e.se = function () {
    return null === this.Dj;
  };
  e.Rj = function () {
    this.se() || this.se() || ((this.xl = je(this.Dj)), (this.Dj = null));
    return this.xl;
  };
  e.Ck = function () {
    var a = this,
      b = this;
    for (a.e() || (a = a.w()); b !== a && !a.e(); ) {
      a = a.w();
      if (a.e()) break;
      a = a.w();
      if (a === b) break;
      b = b.w();
    }
  };
  e.w = function () {
    return this.Rj();
  };
  e.$classData = v({ vq: 0 }, !1, "scala.collection.immutable.Stream$Cons", {
    vq: 1,
    tq: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    Lh: 1,
    Hg: 1,
    Fh: 1,
    Mh: 1,
    c: 1,
  });
  function wt() {}
  wt.prototype = new tt();
  wt.prototype.constructor = wt;
  e = wt.prototype;
  e.e = function () {
    return !0;
  };
  e.Ag = function () {
    throw Uk("head of empty stream");
  };
  e.Rj = function () {
    throw Yd("tail of empty stream");
  };
  e.t = function () {
    return 0;
  };
  e.se = function () {
    return !1;
  };
  e.Ck = function () {};
  e.w = function () {
    return this.Rj();
  };
  e.u = function () {
    this.Ag();
  };
  e.$classData = v({ xq: 0 }, !1, "scala.collection.immutable.Stream$Empty$", {
    xq: 1,
    tq: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    Lh: 1,
    Hg: 1,
    Fh: 1,
    Mh: 1,
    c: 1,
  });
  var xt;
  function Hm() {
    xt || (xt = new wt());
    return xt;
  }
  function yt() {}
  yt.prototype = new gt();
  yt.prototype.constructor = yt;
  function zt() {}
  zt.prototype = yt.prototype;
  yt.prototype.wb = function (a) {
    return fi(this, a);
  };
  function At(a, b, c) {
    var d = c & ((-1 + a.ub.a.length) | 0),
      f = a.ub.a[d];
    if (null === f) a.ub.a[d] = new sf(b, c, null);
    else {
      for (var g = null, h = f; null !== h && h.Jd <= c; ) {
        if (h.Jd === c && J(L(), b, h.Te)) return;
        g = h;
        h = h.jb;
      }
      null === g ? (a.ub.a[d] = new sf(b, c, f)) : (g.jb = new sf(b, c, g.jb));
    }
    a.nd = (1 + a.nd) | 0;
  }
  function Bt(a, b) {
    var c = a.ub.a.length;
    a.Lj = Ga(b * a.Sh);
    if (0 === a.nd) a.ub = new (x(tf).G)(b);
    else {
      var d = a.ub;
      a.ub = ld(O(), d, b);
      d = new sf(null, 0, null);
      for (var f = new sf(null, 0, null); c < b; ) {
        for (var g = 0; g < c; ) {
          var h = a.ub.a[g];
          if (null !== h) {
            d.jb = null;
            f.jb = null;
            for (var k = d, l = f, p = h; null !== p; ) {
              var u = p.jb;
              0 === (p.Jd & c) ? (k = k.jb = p) : (l = l.jb = p);
              p = u;
            }
            k.jb = null;
            h !== d.jb && (a.ub.a[g] = d.jb);
            null !== f.jb && ((a.ub.a[(g + c) | 0] = f.jb), (l.jb = null));
          }
          g = (1 + g) | 0;
        }
        c <<= 1;
      }
    }
  }
  function Ct(a) {
    a = (-1 + a) | 0;
    a = 4 < a ? a : 4;
    a = ((-2147483648 >> da(a)) & a) << 1;
    return 1073741824 > a ? a : 1073741824;
  }
  function ml(a, b, c) {
    a.Sh = c;
    a.ub = new (x(tf).G)(Ct(b));
    a.Lj = Ga(a.ub.a.length * a.Sh);
    a.nd = 0;
    return a;
  }
  function ll() {
    this.Sh = 0;
    this.ub = null;
    this.nd = this.Lj = 0;
  }
  ll.prototype = new it();
  ll.prototype.constructor = ll;
  e = ll.prototype;
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return cm(this, a);
  };
  e.Sa = function () {
    return this.nd;
  };
  function fr(a) {
    return a ^ ((a >>> 16) | 0);
  }
  e.F = function (a) {
    var b = fr(vg(Y(), a)),
      c = this.ub.a[b & ((-1 + this.ub.a.length) | 0)];
    if (null === c) a = null;
    else
      a: for (;;) {
        if (b === c.Jd && J(L(), a, c.Te)) {
          a = c;
          break a;
        }
        if (null === c.jb || c.Jd > b) {
          a = null;
          break a;
        }
        c = c.jb;
      }
    return null !== a;
  };
  e.ac = function (a) {
    a = Ct(Ga(((1 + a) | 0) / this.Sh));
    a > this.ub.a.length && Bt(this, a);
  };
  function Yb(a, b) {
    ((1 + a.nd) | 0) >= a.Lj && Bt(a, a.ub.a.length << 1);
    At(a, b, fr(vg(Y(), b)));
  }
  function nl(a, b) {
    a.ac(b.t());
    if (b instanceof Nk)
      return (
        b.kc.Mi(
          new ce(
            ((d) => (f, g) => {
              At(d, f, fr(g | 0));
            })(a)
          )
        ),
        a
      );
    if (b instanceof ll) {
      for (b = new dr(b); b.l(); ) {
        var c = b.k();
        At(a, c.Te, c.Jd);
      }
      return a;
    }
    return fi(a, b);
  }
  function $b(a, b) {
    a: {
      var c = fr(vg(Y(), b)),
        d = c & ((-1 + a.ub.a.length) | 0),
        f = a.ub.a[d];
      if (null !== f)
        if (f.Jd === c && J(L(), f.Te, b))
          (a.ub.a[d] = f.jb), (a.nd = (-1 + a.nd) | 0);
        else
          for (d = f, f = f.jb; null !== f && f.Jd <= c; ) {
            if (f.Jd === c && J(L(), f.Te, b)) {
              d.jb = f.jb;
              a.nd = (-1 + a.nd) | 0;
              break a;
            }
            d = f;
            f = f.jb;
          }
    }
  }
  e.h = function () {
    return new cr(this);
  };
  e.X = function () {
    return pl();
  };
  e.t = function () {
    return this.nd;
  };
  e.e = function () {
    return 0 === this.nd;
  };
  e.N = function (a) {
    for (var b = this.ub.a.length, c = 0; c < b; ) {
      var d = this.ub.a[c];
      null !== d && d.N(a);
      c = (1 + c) | 0;
    }
  };
  e.Wc = function () {
    return "HashSet";
  };
  e.H = function () {
    var a = new cr(this);
    a = a.l() ? new er(this) : a;
    return Jg(Ig(), a, Ig().sh);
  };
  e.Ia = function (a) {
    Yb(this, a);
    return this;
  };
  e.wb = function (a) {
    return nl(this, a);
  };
  e.$classData = v({ ir: 0 }, !1, "scala.collection.mutable.HashSet", {
    ir: 1,
    Os: 1,
    Jf: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    jf: 1,
    Nf: 1,
    O: 1,
    x: 1,
    Rs: 1,
    vc: 1,
    Ss: 1,
    uc: 1,
    Vb: 1,
    Qc: 1,
    oc: 1,
    nc: 1,
    Yg: 1,
    va: 1,
    c: 1,
  });
  function xp() {
    this.d = null;
  }
  xp.prototype = new Us();
  xp.prototype.constructor = xp;
  function Dt() {}
  e = Dt.prototype = xp.prototype;
  e.fg = function (a) {
    return Xl(this, a);
  };
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.wg = function (a) {
    return $l(this, a);
  };
  e.Sj = function (a) {
    return am(this, a);
  };
  e.hg = function () {
    return bm(this);
  };
  e.Qb = function (a) {
    return Kk(this, a, !1);
  };
  e.ih = function (a) {
    return Ws(this, a);
  };
  e.cf = function (a) {
    return Xs(this, a);
  };
  e.Ob = function () {
    return "IndexedSeq";
  };
  e.kb = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.q();
  };
  e.Ad = function () {
    return Mf();
  };
  e.q = function () {
    return this instanceof Et ? this.j : this.d.a.length;
  };
  e.h = function () {
    return cf() === this ? Mf().Bl : new sp(this, this.q(), this.qd());
  };
  function Kk(a, b, c) {
    for (var d = 0, f = a.d.a.length; d !== f; ) {
      if (!!b.m(a.d.a[d]) === c) {
        for (var g = 0, h = (1 + d) | 0; h < f; )
          !!b.m(a.d.a[h]) !== c && (g |= 1 << h), (h = (1 + h) | 0);
        f = g;
        f = (d + Je(se(), f)) | 0;
        if (a instanceof Et) {
          h = new zp();
          for (var k = 0; k < d; ) Fp(h, a.d.a[k]), (k = (1 + k) | 0);
          for (k = (1 + d) | 0; d !== f; )
            0 !== ((1 << k) & g) && (Fp(h, a.d.a[k]), (d = (1 + d) | 0)),
              (k = (1 + k) | 0);
          Ft(
            a,
            new D(
              ((l, p, u, A) => (G) => (!!p.m(G) !== u ? Fp(A, G) : void 0))(
                a,
                b,
                c,
                h
              )
            )
          );
          return h.Cd();
        }
        if (0 === f) return cf();
        b = new r(f);
        a.d.I(0, b, 0, d);
        for (c = (1 + d) | 0; d !== f; )
          0 !== ((1 << c) & g) && ((b.a[d] = a.d.a[c]), (d = (1 + d) | 0)),
            (c = (1 + c) | 0);
        return new df(b);
      }
      d = (1 + d) | 0;
    }
    return a instanceof Et
      ? ((d = new zp()),
        Dp(d, a.d),
        Ft(
          a,
          new D(
            ((l, p, u, A) => (G) => (!!p.m(G) !== u ? Fp(A, G) : void 0))(
              a,
              b,
              c,
              d
            )
          )
        ),
        d.Cd())
      : a;
  }
  e.Jc = function (a, b) {
    var c = (4 + this.qd()) | 0;
    if (0 < b && b < c) {
      b = new Ii(this);
      if (rf(a))
        a.N(
          new D(
            ((d, f) => (g) => {
              f.ha = f.ha.fc(g);
            })(this, b)
          )
        );
      else for (a = a.h(); a.l(); ) (c = a.k()), (b.ha = b.ha.fc(c));
      return b.ha;
    }
    if (this.q() < ((b >>> 5) | 0) && a instanceof xp) {
      for (b = new No(this); b.l(); ) a = a.bf(b.k());
      return a;
    }
    return yp(Ep(new zp(), this), a).Cd();
  };
  e.Wc = function () {
    return "Vector";
  };
  e.Pb = function (a, b, c) {
    return this.h().Pb(a, b, c);
  };
  e.hh = function () {
    return Mf().Al;
  };
  e.Db = function (a) {
    return xg(
      new yg(),
      a + " is out of bounds (min 0, max " + ((-1 + this.q()) | 0) + ")"
    );
  };
  e.u = function () {
    if (0 === this.d.a.length) throw Uk("empty.head");
    return this.d.a[0];
  };
  e.id = function () {
    if (this instanceof Et) {
      var a = this.f;
      if (0 === a.a.length) throw Uk("empty.tail");
      return a.a[(-1 + a.a.length) | 0];
    }
    return this.d.a[(-1 + this.d.a.length) | 0];
  };
  e.N = function (a) {
    for (var b = this.qd(), c = 0; c < b; ) {
      var d = R(),
        f = (b / 2) | 0,
        g = (c - f) | 0;
      nf(
        d,
        (-1 + ((((1 + f) | 0) - (0 > g ? -g | 0 : g)) | 0)) | 0,
        this.Kd(c),
        a
      );
      c = (1 + c) | 0;
    }
  };
  e.Jb = function (a) {
    var b = this.q();
    a = 0 < a ? a : 0;
    var c = this.q();
    b = b < c ? b : c;
    return ((b - a) | 0) === this.q() ? this : b <= a ? cf() : this.pd(a, b);
  };
  e.Nd = function (a) {
    var b = a.t();
    return 0 === b ? this : this.Jc(a, b);
  };
  e.X = function () {
    return Mf();
  };
  function Gt() {}
  Gt.prototype = new gt();
  Gt.prototype.constructor = Gt;
  function Ht() {}
  e = Ht.prototype = Gt.prototype;
  e.Nd = function (a) {
    return Nq(this, a);
  };
  e.da = function (a) {
    return Yl(this, a);
  };
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return cm(this, a);
  };
  e.Ob = function () {
    return "IndexedSeq";
  };
  e.Jb = function (a) {
    return Jo(this, a);
  };
  e.u = function () {
    return this.v(0);
  };
  e.kb = function (a) {
    var b = this.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.q();
  };
  e.Ad = function () {
    return Oh().Jj;
  };
  function It(a, b) {
    var c = a.yd().ic(),
      d = c === m(db);
    a = [];
    b.t();
    for (b = b.h(); b.l(); ) {
      var f = b.k();
      a.push(d ? Aa(f) : null === f ? c.xc.Wh : f);
    }
    Oh();
    c = c === m(bb) ? m(ua) : c === m(mg) || c === m(ri) ? m(w) : c;
    return bj(0, x(c.xc).Vh(a));
  }
  e.Wi = function () {
    return Uq(Oh(), this.yd());
  };
  e.Wc = function () {
    return "ArraySeq";
  };
  e.Pb = function (a, b, c) {
    var d = this.q(),
      f = Bd(Gd(), a);
    c = c < d ? c : d;
    f = (f - b) | 0;
    f = c < f ? c : f;
    f = 0 < f ? f : 0;
    0 < f && Gh(Ih(), this.hd(), 0, a, b, f);
    return f;
  };
  e.y = function (a) {
    return a instanceof Gt && Bd(Gd(), this.hd()) !== Bd(Gd(), a.hd())
      ? !1
      : xs(this, a);
  };
  e.ve = function (a) {
    return It(this, a);
  };
  e.jh = function (a) {
    return It(this, a);
  };
  e.X = function () {
    return Oh().Jj;
  };
  function Oi() {}
  Oi.prototype = new Us();
  Oi.prototype.constructor = Oi;
  function Jt() {}
  e = Jt.prototype = Oi.prototype;
  e.h = function () {
    return new cp(this);
  };
  e.ud = function (a) {
    return Mq(this, a);
  };
  e.fg = function (a) {
    return Xl(this, a);
  };
  e.wg = function (a) {
    return $l(this, a);
  };
  e.hg = function () {
    return bm(this);
  };
  e.Ob = function () {
    return "LinearSeq";
  };
  e.v = function (a) {
    return mn(this, a);
  };
  e.cf = function (a) {
    return $o(this, a);
  };
  e.xe = function (a, b) {
    return ap(this, a, b);
  };
  e.Ad = function () {
    return xc();
  };
  function Kt(a, b) {
    if (a.e()) return b;
    if (b.e()) return a;
    var c = new cn(b.u(), a),
      d = c;
    for (b = b.w(); !b.e(); ) {
      var f = new cn(b.u(), a);
      d = d.sc = f;
      b = b.w();
    }
    return c;
  }
  e.e = function () {
    return this === I();
  };
  function yc(a, b) {
    if (b instanceof Oi) return Kt(a, b);
    if (0 === b.t()) return a;
    if (b instanceof pp && a.e()) return Lt(b);
    b = b.h();
    if (b.l()) {
      for (var c = new cn(b.k(), a), d = c; b.l(); ) {
        var f = new cn(b.k(), a);
        d = d.sc = f;
      }
      return c;
    }
    return a;
  }
  e.N = function (a) {
    for (var b = this; !b.e(); ) a.m(b.u()), (b = b.w());
  };
  e.q = function () {
    for (var a = this, b = 0; !a.e(); ) (b = (1 + b) | 0), (a = a.w());
    return b;
  };
  e.kb = function (a) {
    if (0 > a) a = 1;
    else
      a: for (var b = this, c = 0; ; ) {
        if (c === a) {
          a = b.e() ? 0 : 1;
          break a;
        }
        if (b.e()) {
          a = -1;
          break a;
        }
        c = (1 + c) | 0;
        b = b.w();
      }
    return a;
  };
  e.Gf = function (a) {
    for (var b = this; !b.e(); ) {
      if (a.m(b.u())) return !0;
      b = b.w();
    }
    return !1;
  };
  e.F = function (a) {
    for (var b = this; !b.e(); ) {
      if (J(L(), b.u(), a)) return !0;
      b = b.w();
    }
    return !1;
  };
  e.id = function () {
    if (this.e()) throw Uk("List.last");
    for (var a = this, b = this.w(); !b.e(); ) (a = b), (b = b.w());
    return a.u();
  };
  e.Wc = function () {
    return "List";
  };
  e.y = function (a) {
    var b;
    if (a instanceof Oi)
      a: for (b = this; ; ) {
        if (b === a) {
          b = !0;
          break a;
        }
        var c = b.e(),
          d = a.e();
        if (c || d || !J(L(), b.u(), a.u())) {
          b = c && d;
          break a;
        }
        b = b.w();
        a = a.w();
      }
    else b = xs(this, a);
    return b;
  };
  e.m = function (a) {
    return mn(this, a | 0);
  };
  e.Jb = function (a) {
    a: for (var b = this; ; ) {
      if (0 >= a || b.e()) break a;
      a = (-1 + a) | 0;
      b = b.w();
    }
    return b;
  };
  e.Qb = function (a) {
    a: for (var b = this; ; ) {
      if (b.e()) {
        a = I();
        break a;
      }
      var c = b.u(),
        d = b.w();
      if (!1 !== !!a.m(c)) {
        b: for (;;) {
          if (d.e()) {
            a = b;
            break b;
          }
          c = d.u();
          if (!1 !== !!a.m(c)) d = d.w();
          else {
            var f = b;
            c = d;
            b = new cn(f.u(), I());
            f = f.w();
            for (d = b; f !== c; ) {
              var g = new cn(f.u(), I());
              d = d.sc = g;
              f = f.w();
            }
            for (f = c = c.w(); !c.e(); ) {
              g = c.u();
              if (!1 === !!a.m(g)) {
                for (; f !== c; )
                  (g = new cn(f.u(), I())), (d = d.sc = g), (f = f.w());
                f = c.w();
              }
              c = c.w();
            }
            f.e() || (d.sc = f);
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
  e.Cb = function (a) {
    for (var b = this, c = null, d = null; b !== I(); ) {
      for (var f = a.m(b.u()).h(); f.l(); ) {
        var g = new cn(f.k(), I());
        null === d ? (c = g) : (d.sc = g);
        d = g;
      }
      b = b.w();
    }
    return null === c ? I() : c;
  };
  e.da = function (a) {
    if (this === I()) a = I();
    else {
      for (
        var b = new cn(a.m(this.u()), I()), c = b, d = this.w();
        d !== I();

      ) {
        var f = new cn(a.m(d.u()), I());
        c = c.sc = f;
        d = d.w();
      }
      a = b;
    }
    return a;
  };
  e.Nd = function (a) {
    return a instanceof Oi ? Kt(a, this) : Nq(this, a);
  };
  e.X = function () {
    return xc();
  };
  function Mt() {
    this.d = null;
  }
  Mt.prototype = new Dt();
  Mt.prototype.constructor = Mt;
  function Qt() {}
  Qt.prototype = Mt.prototype;
  function ar(a) {
    this.Le = a;
  }
  ar.prototype = new Ht();
  ar.prototype.constructor = ar;
  e = ar.prototype;
  e.q = function () {
    return this.Le.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.Le,
        c = a.Mc,
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
          a = Gg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof ar) {
      var b = this.Le;
      a = a.Le;
      return id(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new pr(this.Le);
  };
  e.m = function (a) {
    return this.Le.a[a | 0];
  };
  e.v = function (a) {
    return this.Le.a[a];
  };
  e.yd = function () {
    return pi();
  };
  e.hd = function () {
    return this.Le;
  };
  e.$classData = v(
    { Xq: 0 },
    !1,
    "scala.collection.mutable.ArraySeq$ofBoolean",
    {
      Xq: 1,
      oe: 1,
      Dc: 1,
      Ka: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      ua: 1,
      Aa: 1,
      O: 1,
      Q: 1,
      x: 1,
      Fc: 1,
      vc: 1,
      Gc: 1,
      uc: 1,
      Vb: 1,
      Rc: 1,
      nb: 1,
      La: 1,
      Sc: 1,
      ob: 1,
      va: 1,
      c: 1,
    }
  );
  function Zq(a) {
    this.Me = a;
  }
  Zq.prototype = new Ht();
  Zq.prototype.constructor = Zq;
  e = Zq.prototype;
  e.q = function () {
    return this.Me.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.Me,
        c = a.Mc,
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
          a = Gg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Zq) {
      var b = this.Me;
      a = a.Me;
      return hd(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new ir(this.Me);
  };
  e.m = function (a) {
    return this.Me.a[a | 0];
  };
  e.v = function (a) {
    return this.Me.a[a];
  };
  e.yd = function () {
    return ji();
  };
  e.hd = function () {
    return this.Me;
  };
  e.$classData = v({ Yq: 0 }, !1, "scala.collection.mutable.ArraySeq$ofByte", {
    Yq: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function Yq(a) {
    this.dd = a;
  }
  Yq.prototype = new Ht();
  Yq.prototype.constructor = Yq;
  e = Yq.prototype;
  e.q = function () {
    return this.dd.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.dd,
        c = a.Mc,
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
          a = Gg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Yq) {
      var b = this.dd;
      a = a.dd;
      return gd(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new jr(this.dd);
  };
  e.ae = function (a, b, c, d) {
    var f = a.Nb;
    0 !== (b.length | 0) && (f.n = "" + f.n + b);
    b = this.dd.a.length;
    if (0 !== b)
      if ("" === c) Jl(f, this.dd);
      else {
        f.q();
        d.length | 0;
        c.length | 0;
        var g = String.fromCharCode(this.dd.a[0]);
        f.n = "" + f.n + g;
        for (g = 1; g < b; ) {
          f.n = "" + f.n + c;
          var h = String.fromCharCode(this.dd.a[g]);
          f.n = "" + f.n + h;
          g = (1 + g) | 0;
        }
      }
    0 !== (d.length | 0) && (f.n = "" + f.n + d);
    return a;
  };
  e.m = function (a) {
    return Na(this.dd.a[a | 0]);
  };
  e.v = function (a) {
    return Na(this.dd.a[a]);
  };
  e.yd = function () {
    return li();
  };
  e.hd = function () {
    return this.dd;
  };
  e.$classData = v({ Zq: 0 }, !1, "scala.collection.mutable.ArraySeq$ofChar", {
    Zq: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function Vq(a) {
    this.Ne = a;
  }
  Vq.prototype = new Ht();
  Vq.prototype.constructor = Vq;
  e = Vq.prototype;
  e.q = function () {
    return this.Ne.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.Ne,
        c = a.Mc,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          b = b.a[0];
          a = a.L(a.p(c, ug(Y(), b)), 1);
          break a;
        default:
          var f = b.a[0],
            g = ug(Y(), f);
          f = c = a.p(c, g);
          var h = b.a[1];
          h = ug(Y(), h);
          var k = (h - g) | 0;
          for (g = 2; g < d; ) {
            c = a.p(c, h);
            var l = b.a[g];
            l = ug(Y(), l);
            if (k !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (g = (1 + g) | 0; g < d; )
                (f = b.a[g]), (c = a.p(c, ug(Y(), f))), (g = (1 + g) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            g = (1 + g) | 0;
          }
          a = Gg(a.p(a.p(f, k), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Vq) {
      var b = this.Ne;
      a = a.Ne;
      return jd(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new kr(this.Ne);
  };
  e.m = function (a) {
    return this.Ne.a[a | 0];
  };
  e.v = function (a) {
    return this.Ne.a[a];
  };
  e.yd = function () {
    return oi();
  };
  e.hd = function () {
    return this.Ne;
  };
  e.$classData = v(
    { $q: 0 },
    !1,
    "scala.collection.mutable.ArraySeq$ofDouble",
    {
      $q: 1,
      oe: 1,
      Dc: 1,
      Ka: 1,
      E: 1,
      b: 1,
      B: 1,
      r: 1,
      D: 1,
      s: 1,
      C: 1,
      ua: 1,
      Aa: 1,
      O: 1,
      Q: 1,
      x: 1,
      Fc: 1,
      vc: 1,
      Gc: 1,
      uc: 1,
      Vb: 1,
      Rc: 1,
      nb: 1,
      La: 1,
      Sc: 1,
      ob: 1,
      va: 1,
      c: 1,
    }
  );
  function Xq(a) {
    this.Oe = a;
  }
  Xq.prototype = new Ht();
  Xq.prototype.constructor = Xq;
  e = Xq.prototype;
  e.q = function () {
    return this.Oe.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.Oe,
        c = a.Mc,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          d = c;
          b = b.a[0];
          Y();
          a = a.L(a.p(d, ug(0, b)), 1);
          break a;
        default:
          var f = b.a[0],
            g = ug(Y(), f);
          f = c = a.p(c, g);
          var h = b.a[1];
          h = ug(Y(), h);
          var k = (h - g) | 0;
          for (g = 2; g < d; ) {
            c = a.p(c, h);
            var l = b.a[g];
            l = ug(Y(), l);
            if (k !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (g = (1 + g) | 0; g < d; )
                (f = b.a[g]), Y(), (c = a.p(c, ug(0, f))), (g = (1 + g) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            g = (1 + g) | 0;
          }
          a = Gg(a.p(a.p(f, k), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Xq) {
      var b = this.Oe;
      a = a.Oe;
      return kd(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new lr(this.Oe);
  };
  e.m = function (a) {
    return this.Oe.a[a | 0];
  };
  e.v = function (a) {
    return this.Oe.a[a];
  };
  e.yd = function () {
    return ni();
  };
  e.hd = function () {
    return this.Oe;
  };
  e.$classData = v({ ar: 0 }, !1, "scala.collection.mutable.ArraySeq$ofFloat", {
    ar: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function Sh(a) {
    this.pe = a;
  }
  Sh.prototype = new Ht();
  Sh.prototype.constructor = Sh;
  e = Sh.prototype;
  e.q = function () {
    return this.pe.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.pe,
        c = a.Mc,
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
          a = Gg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Sh) {
      var b = this.pe;
      a = a.pe;
      return ed(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new Rn(this.pe);
  };
  e.m = function (a) {
    return this.pe.a[a | 0];
  };
  e.v = function (a) {
    return this.pe.a[a];
  };
  e.yd = function () {
    return Te();
  };
  e.hd = function () {
    return this.pe;
  };
  e.$classData = v({ br: 0 }, !1, "scala.collection.mutable.ArraySeq$ofInt", {
    br: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function Wq(a) {
    this.Pe = a;
  }
  Wq.prototype = new Ht();
  Wq.prototype.constructor = Wq;
  e = Wq.prototype;
  e.q = function () {
    return this.Pe.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.Pe,
        c = a.Mc,
        d = b.a.length;
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          d = b.a[0];
          b = d.bb;
          d = d.ab;
          a = a.L(a.p(c, tg(Y(), new n(b, d))), 1);
          break a;
        default:
          var f = b.a[0],
            g = f.bb;
          f = f.ab;
          f = tg(Y(), new n(g, f));
          g = c = a.p(c, f);
          var h = b.a[1],
            k = h.bb;
          h = h.ab;
          k = tg(Y(), new n(k, h));
          h = (k - f) | 0;
          for (f = 2; f < d; ) {
            c = a.p(c, k);
            var l = b.a[f],
              p = l.bb;
            l = l.ab;
            p = tg(Y(), new n(p, l));
            if (h !== ((p - k) | 0)) {
              c = a.p(c, p);
              for (f = (1 + f) | 0; f < d; )
                (k = b.a[f]),
                  (g = k.bb),
                  (k = k.ab),
                  (c = a.p(c, tg(Y(), new n(g, k)))),
                  (f = (1 + f) | 0);
              a = a.L(c, d);
              break a;
            }
            k = p;
            f = (1 + f) | 0;
          }
          a = Gg(a.p(a.p(g, h), k));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Wq) {
      var b = this.Pe;
      a = a.Pe;
      return dd(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new mr(this.Pe);
  };
  e.m = function (a) {
    return this.Pe.a[a | 0];
  };
  e.v = function (a) {
    return this.Pe.a[a];
  };
  e.yd = function () {
    return mi();
  };
  e.hd = function () {
    return this.Pe;
  };
  e.$classData = v({ cr: 0 }, !1, "scala.collection.mutable.ArraySeq$ofLong", {
    cr: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function Qh(a) {
    this.Qe = a;
  }
  Qh.prototype = new Ht();
  Qh.prototype.constructor = Qh;
  e = Qh.prototype;
  e.yd = function () {
    return md(nd(), Ic(ka(this.Qe)));
  };
  e.q = function () {
    return this.Qe.a.length;
  };
  e.v = function (a) {
    return this.Qe.a[a];
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.Qe,
        c = a.Mc,
        d = Bd(Gd(), b);
      switch (d) {
        case 0:
          a = a.L(c, 0);
          break a;
        case 1:
          d = c;
          b = Jd(Gd(), b, 0);
          a = a.L(a.p(d, vg(Y(), b)), 1);
          break a;
        default:
          var f = Jd(Gd(), b, 0),
            g = vg(Y(), f);
          f = c = a.p(c, g);
          var h = Jd(Gd(), b, 1);
          h = vg(Y(), h);
          var k = (h - g) | 0;
          for (g = 2; g < d; ) {
            c = a.p(c, h);
            var l = Jd(Gd(), b, g);
            l = vg(Y(), l);
            if (k !== ((l - h) | 0)) {
              c = a.p(c, l);
              for (g = (1 + g) | 0; g < d; )
                (f = Jd(Gd(), b, g)),
                  (c = a.p(c, vg(Y(), f))),
                  (g = (1 + g) | 0);
              a = a.L(c, d);
              break a;
            }
            h = l;
            g = (1 + g) | 0;
          }
          a = Gg(a.p(a.p(f, k), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof Qh)
      a: {
        Ih();
        var b = this.Qe;
        a = a.Qe;
        if (b === a) b = !0;
        else if (b.a.length !== a.a.length) b = !1;
        else {
          for (var c = b.a.length, d = 0; d < c; ) {
            if (!J(L(), b.a[d], a.a[d])) {
              b = !1;
              break a;
            }
            d = (1 + d) | 0;
          }
          b = !0;
        }
      }
    else b = Gt.prototype.y.call(this, a);
    return b;
  };
  e.h = function () {
    return Iq(new Jq(), this.Qe);
  };
  e.m = function (a) {
    return this.v(a | 0);
  };
  e.hd = function () {
    return this.Qe;
  };
  e.$classData = v({ dr: 0 }, !1, "scala.collection.mutable.ArraySeq$ofRef", {
    dr: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function $q(a) {
    this.Re = a;
  }
  $q.prototype = new Ht();
  $q.prototype.constructor = $q;
  e = $q.prototype;
  e.q = function () {
    return this.Re.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = this.Re,
        c = a.Mc,
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
          a = Gg(a.p(a.p(g, f), h));
      }
    }
    return a;
  };
  e.y = function (a) {
    if (a instanceof $q) {
      var b = this.Re;
      a = a.Re;
      return fd(O(), b, a);
    }
    return Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new nr(this.Re);
  };
  e.m = function (a) {
    return this.Re.a[a | 0];
  };
  e.v = function (a) {
    return this.Re.a[a];
  };
  e.yd = function () {
    return ki();
  };
  e.hd = function () {
    return this.Re;
  };
  e.$classData = v({ er: 0 }, !1, "scala.collection.mutable.ArraySeq$ofShort", {
    er: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function br(a) {
    this.cg = a;
  }
  br.prototype = new Ht();
  br.prototype.constructor = br;
  e = br.prototype;
  e.q = function () {
    return this.cg.a.length;
  };
  e.H = function () {
    var a = Ig();
    a: {
      var b = a.Mc,
        c = this.cg.a.length;
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
          a = Gg(a.p(a.p(d, g), f));
      }
    }
    return a;
  };
  e.y = function (a) {
    return a instanceof br
      ? this.cg.a.length === a.cg.a.length
      : Gt.prototype.y.call(this, a);
  };
  e.h = function () {
    return new or(this.cg);
  };
  e.m = function () {};
  e.v = function () {};
  e.yd = function () {
    return qi();
  };
  e.hd = function () {
    return this.cg;
  };
  e.$classData = v({ fr: 0 }, !1, "scala.collection.mutable.ArraySeq$ofUnit", {
    fr: 1,
    oe: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    c: 1,
  });
  function Rt(a, b, c, d) {
    a.f = c;
    a.j = d;
    a.d = b;
  }
  function Et() {
    this.f = this.d = null;
    this.j = 0;
  }
  Et.prototype = new Qt();
  Et.prototype.constructor = Et;
  function St() {}
  St.prototype = Et.prototype;
  function Ft(a, b) {
    for (var c = a.qd(), d = 1; d < c; ) {
      var f = R(),
        g = (c / 2) | 0,
        h = (d - g) | 0;
      nf(
        f,
        (-1 + ((((1 + g) | 0) - (0 > h ? -h | 0 : h)) | 0)) | 0,
        a.Kd(d),
        b
      );
      d = (1 + d) | 0;
    }
  }
  function df(a) {
    this.d = a;
  }
  df.prototype = new Qt();
  df.prototype.constructor = df;
  e = df.prototype;
  e.v = function (a) {
    if (0 <= a && a < this.d.a.length) return this.d.a[a];
    throw this.Db(a);
  };
  e.wf = function (a, b) {
    if (0 <= a && a < this.d.a.length) {
      var c = this.d.o();
      c.a[a] = b;
      return new df(c);
    }
    throw this.Db(a);
  };
  e.fc = function (a) {
    if (32 > this.d.a.length) return new df(lf(R(), this.d, a));
    var b = this.d,
      c = R().P,
      d = new r(1);
    d.a[0] = a;
    return new ef(b, 32, c, d, 33);
  };
  e.bf = function (a) {
    var b = this.d.a.length;
    if (32 > b) return new df(mf(R(), a, this.d));
    var c = new r(1);
    c.a[0] = a;
    return new ef(c, 1, R().P, this.d, (1 + b) | 0);
  };
  e.Bd = function (a) {
    return new df(of(R(), this.d, a));
  };
  e.pd = function (a, b) {
    var c = this.d;
    return new df(N(O(), c, a, b));
  };
  e.ed = function () {
    if (1 === this.d.a.length) return cf();
    var a = this.d,
      b = a.a.length;
    return new df(N(O(), a, 1, b));
  };
  e.qd = function () {
    return 1;
  };
  e.Kd = function () {
    return this.d;
  };
  e.Jc = function (a, b) {
    var c = qf(R(), this.d, a);
    return null !== c ? new df(c) : xp.prototype.Jc.call(this, a, b);
  };
  e.w = function () {
    return this.ed();
  };
  e.da = function (a) {
    return this.Bd(a);
  };
  e.ud = function (a) {
    return this.fc(a);
  };
  e.m = function (a) {
    a |= 0;
    if (0 <= a && a < this.d.a.length) return this.d.a[a];
    throw this.Db(a);
  };
  e.$classData = v({ Cq: 0 }, !1, "scala.collection.immutable.Vector1", {
    Cq: 1,
    ag: 1,
    $f: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function cn(a, b) {
    this.Kh = a;
    this.sc = b;
  }
  cn.prototype = new Jt();
  cn.prototype.constructor = cn;
  e = cn.prototype;
  e.u = function () {
    return this.Kh;
  };
  e.cb = function () {
    return "::";
  };
  e.lb = function () {
    return 2;
  };
  e.mb = function (a) {
    switch (a) {
      case 0:
        return this.Kh;
      case 1:
        return this.sc;
      default:
        return wg(Y(), a);
    }
  };
  e.w = function () {
    return this.sc;
  };
  e.Dk = function () {
    return new $m(this.Kh);
  };
  e.$classData = v({ Ap: 0 }, !1, "scala.collection.immutable.$colon$colon", {
    Ap: 1,
    Wp: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    Lh: 1,
    Hg: 1,
    Fh: 1,
    Mh: 1,
    dp: 1,
    ob: 1,
    va: 1,
    ne: 1,
    bd: 1,
    c: 1,
    yb: 1,
  });
  function Tt() {
    this.sl = null;
    Ut = this;
    this.sl = Hd(new Id(), I(), I());
  }
  Tt.prototype = new Jt();
  Tt.prototype.constructor = Tt;
  e = Tt.prototype;
  e.Ag = function () {
    throw Uk("head of empty list");
  };
  e.t = function () {
    return 0;
  };
  e.h = function () {
    return W().Z;
  };
  e.fg = function () {
    return this.sl;
  };
  e.cb = function () {
    return "Nil";
  };
  e.lb = function () {
    return 0;
  };
  e.mb = function (a) {
    return wg(Y(), a);
  };
  e.id = function () {
    throw Uk("last of empty list");
  };
  e.w = function () {
    throw Yd("tail of empty list");
  };
  e.Dk = function () {
    return Mb();
  };
  e.u = function () {
    this.Ag();
  };
  e.$classData = v({ aq: 0 }, !1, "scala.collection.immutable.Nil$", {
    aq: 1,
    Wp: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    Lh: 1,
    Hg: 1,
    Fh: 1,
    Mh: 1,
    dp: 1,
    ob: 1,
    va: 1,
    ne: 1,
    bd: 1,
    c: 1,
    yb: 1,
  });
  var Ut;
  function I() {
    Ut || (Ut = new Tt());
    return Ut;
  }
  function Vt() {
    this.f = this.d = null;
    this.j = 0;
    Rt(this, R().Fj, R().Fj, 0);
  }
  Vt.prototype = new St();
  Vt.prototype.constructor = Vt;
  e = Vt.prototype;
  e.wf = function (a) {
    throw this.Db(a);
  };
  e.fc = function (a) {
    var b = new r(1);
    b.a[0] = a;
    return new df(b);
  };
  e.bf = function (a) {
    var b = new r(1);
    b.a[0] = a;
    return new df(b);
  };
  e.ed = function () {
    throw Yd("empty.tail");
  };
  e.pd = function () {
    return this;
  };
  e.qd = function () {
    return 0;
  };
  e.Kd = function () {
    return null;
  };
  e.y = function (a) {
    return this === a || (!(a instanceof xp) && xs(this, a));
  };
  e.Jc = function (a) {
    return Dk(Mf(), a);
  };
  e.Db = function (a) {
    return xg(new yg(), a + " is out of bounds (empty vector)");
  };
  e.w = function () {
    return this.ed();
  };
  e.da = function () {
    return this;
  };
  e.ud = function (a) {
    return this.fc(a);
  };
  e.m = function (a) {
    throw this.Db(a | 0);
  };
  e.v = function (a) {
    throw this.Db(a);
  };
  e.$classData = v({ Bq: 0 }, !1, "scala.collection.immutable.Vector0$", {
    Bq: 1,
    Lg: 1,
    ag: 1,
    $f: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  var Wt;
  function cf() {
    Wt || (Wt = new Vt());
    return Wt;
  }
  function ef(a, b, c, d, f) {
    this.f = this.d = null;
    this.j = 0;
    this.Zb = b;
    this.Gb = c;
    Rt(this, a, d, f);
  }
  ef.prototype = new St();
  ef.prototype.constructor = ef;
  e = ef.prototype;
  e.v = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.Zb) | 0;
      return 0 <= b
        ? ((a = (b >>> 5) | 0),
          a < this.Gb.a.length ? this.Gb.a[a].a[31 & b] : this.f.a[31 & b])
        : this.d.a[a];
    }
    throw this.Db(a);
  };
  e.wf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.Zb) {
        var c = (a - this.Zb) | 0;
        a = (c >>> 5) | 0;
        c &= 31;
        if (a < this.Gb.a.length) {
          var d = this.Gb.o(),
            f = d.a[a].o();
          f.a[c] = b;
          d.a[a] = f;
          return new ef(this.d, this.Zb, d, this.f, this.j);
        }
        a = this.f.o();
        a.a[c] = b;
        return new ef(this.d, this.Zb, this.Gb, a, this.j);
      }
      c = this.d.o();
      c.a[a] = b;
      return new ef(c, this.Zb, this.Gb, this.f, this.j);
    }
    throw this.Db(a);
  };
  e.fc = function (a) {
    if (32 > this.f.a.length)
      return (
        (a = lf(R(), this.f, a)),
        new ef(this.d, this.Zb, this.Gb, a, (1 + this.j) | 0)
      );
    if (30 > this.Gb.a.length) {
      var b = U(R(), this.Gb, this.f),
        c = new r(1);
      c.a[0] = a;
      return new ef(this.d, this.Zb, b, c, (1 + this.j) | 0);
    }
    b = this.d;
    c = this.Zb;
    var d = this.Gb,
      f = this.Zb,
      g = R().$a,
      h = this.f,
      k = new (x(x(w)).G)(1);
    k.a[0] = h;
    h = new r(1);
    h.a[0] = a;
    return new ff(b, c, d, (960 + f) | 0, g, k, h, (1 + this.j) | 0);
  };
  e.bf = function (a) {
    if (32 > this.Zb) {
      var b = mf(R(), a, this.d);
      return new ef(b, (1 + this.Zb) | 0, this.Gb, this.f, (1 + this.j) | 0);
    }
    if (30 > this.Gb.a.length)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.Gb)),
        new ef(b, 1, a, this.f, (1 + this.j) | 0)
      );
    b = new r(1);
    b.a[0] = a;
    a = this.d;
    var c = new (x(x(w)).G)(1);
    c.a[0] = a;
    return new ff(
      b,
      1,
      c,
      (1 + this.Zb) | 0,
      R().$a,
      this.Gb,
      this.f,
      (1 + this.j) | 0
    );
  };
  e.Bd = function (a) {
    var b = of(R(), this.d, a),
      c = pf(R(), 2, this.Gb, a);
    a = of(R(), this.f, a);
    return new ef(b, this.Zb, c, a, this.j);
  };
  e.pd = function (a, b) {
    a = new bf(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.Gb);
    Q(a, 1, this.f);
    return a.Cd();
  };
  e.ed = function () {
    if (1 < this.Zb) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new ef(a, (-1 + this.Zb) | 0, this.Gb, this.f, (-1 + this.j) | 0);
    }
    return this.pd(1, this.j);
  };
  e.qd = function () {
    return 3;
  };
  e.Kd = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.Gb;
      case 2:
        return this.f;
      default:
        throw new T(a);
    }
  };
  e.Jc = function (a, b) {
    var c = qf(R(), this.f, a);
    return null !== c
      ? new ef(
          this.d,
          this.Zb,
          this.Gb,
          c,
          (((this.j - this.f.a.length) | 0) + c.a.length) | 0
        )
      : xp.prototype.Jc.call(this, a, b);
  };
  e.w = function () {
    return this.ed();
  };
  e.da = function (a) {
    return this.Bd(a);
  };
  e.ud = function (a) {
    return this.fc(a);
  };
  e.m = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j)
      return (
        (a = (b - this.Zb) | 0),
        0 <= a
          ? ((b = (a >>> 5) | 0),
            b < this.Gb.a.length ? this.Gb.a[b].a[31 & a] : this.f.a[31 & a])
          : this.d.a[b]
      );
    throw this.Db(b);
  };
  e.$classData = v({ Dq: 0 }, !1, "scala.collection.immutable.Vector2", {
    Dq: 1,
    Lg: 1,
    ag: 1,
    $f: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function ff(a, b, c, d, f, g, h, k) {
    this.f = this.d = null;
    this.j = 0;
    this.Lb = b;
    this.Mb = c;
    this.Hb = d;
    this.Ya = f;
    this.eb = g;
    Rt(this, a, h, k);
  }
  ff.prototype = new St();
  ff.prototype.constructor = ff;
  e = ff.prototype;
  e.v = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.Hb) | 0;
      if (0 <= b) {
        a = (b >>> 10) | 0;
        var c = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.Ya.a.length
          ? this.Ya.a[a].a[c].a[b]
          : c < this.eb.a.length
          ? this.eb.a[c].a[b]
          : this.f.a[b];
      }
      return a >= this.Lb
        ? ((b = (a - this.Lb) | 0), this.Mb.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Db(a);
  };
  e.wf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.Hb) {
        var c = (a - this.Hb) | 0,
          d = (c >>> 10) | 0;
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.Ya.a.length) {
          var f = this.Ya.o(),
            g = f.a[d].o(),
            h = g.a[a].o();
          h.a[c] = b;
          g.a[a] = h;
          f.a[d] = g;
          return new ff(
            this.d,
            this.Lb,
            this.Mb,
            this.Hb,
            f,
            this.eb,
            this.f,
            this.j
          );
        }
        if (a < this.eb.a.length)
          return (
            (d = this.eb.o()),
            (f = d.a[a].o()),
            (f.a[c] = b),
            (d.a[a] = f),
            new ff(
              this.d,
              this.Lb,
              this.Mb,
              this.Hb,
              this.Ya,
              d,
              this.f,
              this.j
            )
          );
        a = this.f.o();
        a.a[c] = b;
        return new ff(
          this.d,
          this.Lb,
          this.Mb,
          this.Hb,
          this.Ya,
          this.eb,
          a,
          this.j
        );
      }
      if (a >= this.Lb)
        return (
          (c = (a - this.Lb) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (d = this.Mb.o()),
          (f = d.a[a].o()),
          (f.a[c] = b),
          (d.a[a] = f),
          new ff(this.d, this.Lb, d, this.Hb, this.Ya, this.eb, this.f, this.j)
        );
      c = this.d.o();
      c.a[a] = b;
      return new ff(
        c,
        this.Lb,
        this.Mb,
        this.Hb,
        this.Ya,
        this.eb,
        this.f,
        this.j
      );
    }
    throw this.Db(a);
  };
  e.fc = function (a) {
    if (32 > this.f.a.length)
      return (
        (a = lf(R(), this.f, a)),
        new ff(
          this.d,
          this.Lb,
          this.Mb,
          this.Hb,
          this.Ya,
          this.eb,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.eb.a.length) {
      var b = U(R(), this.eb, this.f),
        c = new r(1);
      c.a[0] = a;
      return new ff(
        this.d,
        this.Lb,
        this.Mb,
        this.Hb,
        this.Ya,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (30 > this.Ya.a.length) {
      b = U(R(), this.Ya, U(R(), this.eb, this.f));
      c = R().P;
      var d = new r(1);
      d.a[0] = a;
      return new ff(
        this.d,
        this.Lb,
        this.Mb,
        this.Hb,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    b = this.d;
    c = this.Lb;
    d = this.Mb;
    var f = this.Hb,
      g = this.Ya,
      h = this.Hb,
      k = R().tc,
      l = U(R(), this.eb, this.f),
      p = new (x(x(x(w))).G)(1);
    p.a[0] = l;
    l = R().P;
    var u = new r(1);
    u.a[0] = a;
    return new gf(b, c, d, f, g, (30720 + h) | 0, k, p, l, u, (1 + this.j) | 0);
  };
  e.bf = function (a) {
    if (32 > this.Lb) {
      var b = mf(R(), a, this.d);
      return new ff(
        b,
        (1 + this.Lb) | 0,
        this.Mb,
        (1 + this.Hb) | 0,
        this.Ya,
        this.eb,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.Hb)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.Mb)),
        new ff(
          b,
          1,
          a,
          (1 + this.Hb) | 0,
          this.Ya,
          this.eb,
          this.f,
          (1 + this.j) | 0
        )
      );
    if (30 > this.Ya.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      var c = V(R(), V(R(), this.d, this.Mb), this.Ya);
      return new ff(b, 1, a, 1, c, this.eb, this.f, (1 + this.j) | 0);
    }
    b = new r(1);
    b.a[0] = a;
    a = R().P;
    c = V(R(), this.d, this.Mb);
    var d = new (x(x(x(w))).G)(1);
    d.a[0] = c;
    return new gf(
      b,
      1,
      a,
      1,
      d,
      (1 + this.Hb) | 0,
      R().tc,
      this.Ya,
      this.eb,
      this.f,
      (1 + this.j) | 0
    );
  };
  e.Bd = function (a) {
    var b = of(R(), this.d, a),
      c = pf(R(), 2, this.Mb, a),
      d = pf(R(), 3, this.Ya, a),
      f = pf(R(), 2, this.eb, a);
    a = of(R(), this.f, a);
    return new ff(b, this.Lb, c, this.Hb, d, f, a, this.j);
  };
  e.pd = function (a, b) {
    a = new bf(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.Mb);
    Q(a, 3, this.Ya);
    Q(a, 2, this.eb);
    Q(a, 1, this.f);
    return a.Cd();
  };
  e.ed = function () {
    if (1 < this.Lb) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new ff(
        a,
        (-1 + this.Lb) | 0,
        this.Mb,
        (-1 + this.Hb) | 0,
        this.Ya,
        this.eb,
        this.f,
        (-1 + this.j) | 0
      );
    }
    return this.pd(1, this.j);
  };
  e.qd = function () {
    return 5;
  };
  e.Kd = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.Mb;
      case 2:
        return this.Ya;
      case 3:
        return this.eb;
      case 4:
        return this.f;
      default:
        throw new T(a);
    }
  };
  e.Jc = function (a, b) {
    var c = qf(R(), this.f, a);
    return null !== c
      ? new ff(
          this.d,
          this.Lb,
          this.Mb,
          this.Hb,
          this.Ya,
          this.eb,
          c,
          (((this.j - this.f.a.length) | 0) + c.a.length) | 0
        )
      : xp.prototype.Jc.call(this, a, b);
  };
  e.w = function () {
    return this.ed();
  };
  e.da = function (a) {
    return this.Bd(a);
  };
  e.ud = function (a) {
    return this.fc(a);
  };
  e.m = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.Hb) | 0;
      if (0 <= a) {
        b = (a >>> 10) | 0;
        var c = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.Ya.a.length
          ? this.Ya.a[b].a[c].a[a]
          : c < this.eb.a.length
          ? this.eb.a[c].a[a]
          : this.f.a[a];
      }
      return b >= this.Lb
        ? ((a = (b - this.Lb) | 0), this.Mb.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Db(b);
  };
  e.$classData = v({ Eq: 0 }, !1, "scala.collection.immutable.Vector3", {
    Eq: 1,
    Lg: 1,
    ag: 1,
    $f: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function gf(a, b, c, d, f, g, h, k, l, p, u) {
    this.f = this.d = null;
    this.j = 0;
    this.pb = b;
    this.fb = c;
    this.qb = d;
    this.gb = f;
    this.Za = g;
    this.wa = h;
    this.Ca = k;
    this.Ba = l;
    Rt(this, a, p, u);
  }
  gf.prototype = new St();
  gf.prototype.constructor = gf;
  e = gf.prototype;
  e.v = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.Za) | 0;
      if (0 <= b) {
        a = (b >>> 15) | 0;
        var c = 31 & ((b >>> 10) | 0),
          d = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.wa.a.length
          ? this.wa.a[a].a[c].a[d].a[b]
          : c < this.Ca.a.length
          ? this.Ca.a[c].a[d].a[b]
          : d < this.Ba.a.length
          ? this.Ba.a[d].a[b]
          : this.f.a[b];
      }
      return a >= this.qb
        ? ((b = (a - this.qb) | 0),
          this.gb.a[(b >>> 10) | 0].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.pb
        ? ((b = (a - this.pb) | 0), this.fb.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Db(a);
  };
  e.wf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.Za) {
        var c = (a - this.Za) | 0,
          d = (c >>> 15) | 0,
          f = 31 & ((c >>> 10) | 0);
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.wa.a.length) {
          var g = this.wa.o(),
            h = g.a[d].o(),
            k = h.a[f].o(),
            l = k.a[a].o();
          l.a[c] = b;
          k.a[a] = l;
          h.a[f] = k;
          g.a[d] = h;
          return new gf(
            this.d,
            this.pb,
            this.fb,
            this.qb,
            this.gb,
            this.Za,
            g,
            this.Ca,
            this.Ba,
            this.f,
            this.j
          );
        }
        if (f < this.Ca.a.length)
          return (
            (d = this.Ca.o()),
            (g = d.a[f].o()),
            (h = g.a[a].o()),
            (h.a[c] = b),
            (g.a[a] = h),
            (d.a[f] = g),
            new gf(
              this.d,
              this.pb,
              this.fb,
              this.qb,
              this.gb,
              this.Za,
              this.wa,
              d,
              this.Ba,
              this.f,
              this.j
            )
          );
        if (a < this.Ba.a.length)
          return (
            (f = this.Ba.o()),
            (d = f.a[a].o()),
            (d.a[c] = b),
            (f.a[a] = d),
            new gf(
              this.d,
              this.pb,
              this.fb,
              this.qb,
              this.gb,
              this.Za,
              this.wa,
              this.Ca,
              f,
              this.f,
              this.j
            )
          );
        a = this.f.o();
        a.a[c] = b;
        return new gf(
          this.d,
          this.pb,
          this.fb,
          this.qb,
          this.gb,
          this.Za,
          this.wa,
          this.Ca,
          this.Ba,
          a,
          this.j
        );
      }
      if (a >= this.qb)
        return (
          (f = (a - this.qb) | 0),
          (a = (f >>> 10) | 0),
          (c = 31 & ((f >>> 5) | 0)),
          (f &= 31),
          (d = this.gb.o()),
          (g = d.a[a].o()),
          (h = g.a[c].o()),
          (h.a[f] = b),
          (g.a[c] = h),
          (d.a[a] = g),
          new gf(
            this.d,
            this.pb,
            this.fb,
            this.qb,
            d,
            this.Za,
            this.wa,
            this.Ca,
            this.Ba,
            this.f,
            this.j
          )
        );
      if (a >= this.pb)
        return (
          (c = (a - this.pb) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (f = this.fb.o()),
          (d = f.a[a].o()),
          (d.a[c] = b),
          (f.a[a] = d),
          new gf(
            this.d,
            this.pb,
            f,
            this.qb,
            this.gb,
            this.Za,
            this.wa,
            this.Ca,
            this.Ba,
            this.f,
            this.j
          )
        );
      c = this.d.o();
      c.a[a] = b;
      return new gf(
        c,
        this.pb,
        this.fb,
        this.qb,
        this.gb,
        this.Za,
        this.wa,
        this.Ca,
        this.Ba,
        this.f,
        this.j
      );
    }
    throw this.Db(a);
  };
  e.fc = function (a) {
    if (32 > this.f.a.length)
      return (
        (a = lf(R(), this.f, a)),
        new gf(
          this.d,
          this.pb,
          this.fb,
          this.qb,
          this.gb,
          this.Za,
          this.wa,
          this.Ca,
          this.Ba,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.Ba.a.length) {
      var b = U(R(), this.Ba, this.f),
        c = new r(1);
      c.a[0] = a;
      return new gf(
        this.d,
        this.pb,
        this.fb,
        this.qb,
        this.gb,
        this.Za,
        this.wa,
        this.Ca,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (31 > this.Ca.a.length) {
      b = U(R(), this.Ca, U(R(), this.Ba, this.f));
      c = R().P;
      var d = new r(1);
      d.a[0] = a;
      return new gf(
        this.d,
        this.pb,
        this.fb,
        this.qb,
        this.gb,
        this.Za,
        this.wa,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    if (30 > this.wa.a.length) {
      b = U(R(), this.wa, U(R(), this.Ca, U(R(), this.Ba, this.f)));
      c = R().$a;
      d = R().P;
      var f = new r(1);
      f.a[0] = a;
      return new gf(
        this.d,
        this.pb,
        this.fb,
        this.qb,
        this.gb,
        this.Za,
        b,
        c,
        d,
        f,
        (1 + this.j) | 0
      );
    }
    b = this.d;
    c = this.pb;
    d = this.fb;
    f = this.qb;
    var g = this.gb,
      h = this.Za,
      k = this.wa,
      l = this.Za,
      p = R().Ke,
      u = U(R(), this.Ca, U(R(), this.Ba, this.f)),
      A = new (x(x(x(x(w)))).G)(1);
    A.a[0] = u;
    u = R().$a;
    var G = R().P,
      K = new r(1);
    K.a[0] = a;
    return new hf(
      b,
      c,
      d,
      f,
      g,
      h,
      k,
      (983040 + l) | 0,
      p,
      A,
      u,
      G,
      K,
      (1 + this.j) | 0
    );
  };
  e.bf = function (a) {
    if (32 > this.pb) {
      var b = mf(R(), a, this.d);
      return new gf(
        b,
        (1 + this.pb) | 0,
        this.fb,
        (1 + this.qb) | 0,
        this.gb,
        (1 + this.Za) | 0,
        this.wa,
        this.Ca,
        this.Ba,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.qb)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.fb)),
        new gf(
          b,
          1,
          a,
          (1 + this.qb) | 0,
          this.gb,
          (1 + this.Za) | 0,
          this.wa,
          this.Ca,
          this.Ba,
          this.f,
          (1 + this.j) | 0
        )
      );
    if (32768 > this.Za) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      var c = V(R(), V(R(), this.d, this.fb), this.gb);
      return new gf(
        b,
        1,
        a,
        1,
        c,
        (1 + this.Za) | 0,
        this.wa,
        this.Ca,
        this.Ba,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (30 > this.wa.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      c = R().$a;
      var d = V(R(), V(R(), V(R(), this.d, this.fb), this.gb), this.wa);
      return new gf(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        this.Ca,
        this.Ba,
        this.f,
        (1 + this.j) | 0
      );
    }
    b = new r(1);
    b.a[0] = a;
    a = R().P;
    c = R().$a;
    d = V(R(), V(R(), this.d, this.fb), this.gb);
    var f = new (x(x(x(x(w)))).G)(1);
    f.a[0] = d;
    return new hf(
      b,
      1,
      a,
      1,
      c,
      1,
      f,
      (1 + this.Za) | 0,
      R().Ke,
      this.wa,
      this.Ca,
      this.Ba,
      this.f,
      (1 + this.j) | 0
    );
  };
  e.Bd = function (a) {
    var b = of(R(), this.d, a),
      c = pf(R(), 2, this.fb, a),
      d = pf(R(), 3, this.gb, a),
      f = pf(R(), 4, this.wa, a),
      g = pf(R(), 3, this.Ca, a),
      h = pf(R(), 2, this.Ba, a);
    a = of(R(), this.f, a);
    return new gf(b, this.pb, c, this.qb, d, this.Za, f, g, h, a, this.j);
  };
  e.pd = function (a, b) {
    a = new bf(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.fb);
    Q(a, 3, this.gb);
    Q(a, 4, this.wa);
    Q(a, 3, this.Ca);
    Q(a, 2, this.Ba);
    Q(a, 1, this.f);
    return a.Cd();
  };
  e.ed = function () {
    if (1 < this.pb) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new gf(
        a,
        (-1 + this.pb) | 0,
        this.fb,
        (-1 + this.qb) | 0,
        this.gb,
        (-1 + this.Za) | 0,
        this.wa,
        this.Ca,
        this.Ba,
        this.f,
        (-1 + this.j) | 0
      );
    }
    return this.pd(1, this.j);
  };
  e.qd = function () {
    return 7;
  };
  e.Kd = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.fb;
      case 2:
        return this.gb;
      case 3:
        return this.wa;
      case 4:
        return this.Ca;
      case 5:
        return this.Ba;
      case 6:
        return this.f;
      default:
        throw new T(a);
    }
  };
  e.Jc = function (a, b) {
    var c = qf(R(), this.f, a);
    return null !== c
      ? new gf(
          this.d,
          this.pb,
          this.fb,
          this.qb,
          this.gb,
          this.Za,
          this.wa,
          this.Ca,
          this.Ba,
          c,
          (((this.j - this.f.a.length) | 0) + c.a.length) | 0
        )
      : xp.prototype.Jc.call(this, a, b);
  };
  e.w = function () {
    return this.ed();
  };
  e.da = function (a) {
    return this.Bd(a);
  };
  e.ud = function (a) {
    return this.fc(a);
  };
  e.m = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.Za) | 0;
      if (0 <= a) {
        b = (a >>> 15) | 0;
        var c = 31 & ((a >>> 10) | 0),
          d = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.wa.a.length
          ? this.wa.a[b].a[c].a[d].a[a]
          : c < this.Ca.a.length
          ? this.Ca.a[c].a[d].a[a]
          : d < this.Ba.a.length
          ? this.Ba.a[d].a[a]
          : this.f.a[a];
      }
      return b >= this.qb
        ? ((a = (b - this.qb) | 0),
          this.gb.a[(a >>> 10) | 0].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.pb
        ? ((a = (b - this.pb) | 0), this.fb.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Db(b);
  };
  e.$classData = v({ Fq: 0 }, !1, "scala.collection.immutable.Vector4", {
    Fq: 1,
    Lg: 1,
    ag: 1,
    $f: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function hf(a, b, c, d, f, g, h, k, l, p, u, A, G, K) {
    this.f = this.d = null;
    this.j = 0;
    this.Qa = b;
    this.Da = c;
    this.Ra = d;
    this.Ea = f;
    this.Na = g;
    this.Fa = h;
    this.xa = k;
    this.fa = l;
    this.ka = p;
    this.ja = u;
    this.ia = A;
    Rt(this, a, G, K);
  }
  hf.prototype = new St();
  hf.prototype.constructor = hf;
  e = hf.prototype;
  e.v = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.xa) | 0;
      if (0 <= b) {
        a = (b >>> 20) | 0;
        var c = 31 & ((b >>> 15) | 0),
          d = 31 & ((b >>> 10) | 0),
          f = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.fa.a.length
          ? this.fa.a[a].a[c].a[d].a[f].a[b]
          : c < this.ka.a.length
          ? this.ka.a[c].a[d].a[f].a[b]
          : d < this.ja.a.length
          ? this.ja.a[d].a[f].a[b]
          : f < this.ia.a.length
          ? this.ia.a[f].a[b]
          : this.f.a[b];
      }
      return a >= this.Na
        ? ((b = (a - this.Na) | 0),
          this.Fa.a[(b >>> 15) | 0].a[31 & ((b >>> 10) | 0)].a[
            31 & ((b >>> 5) | 0)
          ].a[31 & b])
        : a >= this.Ra
        ? ((b = (a - this.Ra) | 0),
          this.Ea.a[(b >>> 10) | 0].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.Qa
        ? ((b = (a - this.Qa) | 0), this.Da.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Db(a);
  };
  e.wf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.xa) {
        var c = (a - this.xa) | 0,
          d = (c >>> 20) | 0,
          f = 31 & ((c >>> 15) | 0),
          g = 31 & ((c >>> 10) | 0);
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.fa.a.length) {
          var h = this.fa.o(),
            k = h.a[d].o(),
            l = k.a[f].o(),
            p = l.a[g].o(),
            u = p.a[a].o();
          u.a[c] = b;
          p.a[a] = u;
          l.a[g] = p;
          k.a[f] = l;
          h.a[d] = k;
          return new hf(
            this.d,
            this.Qa,
            this.Da,
            this.Ra,
            this.Ea,
            this.Na,
            this.Fa,
            this.xa,
            h,
            this.ka,
            this.ja,
            this.ia,
            this.f,
            this.j
          );
        }
        if (f < this.ka.a.length)
          return (
            (d = this.ka.o()),
            (h = d.a[f].o()),
            (k = h.a[g].o()),
            (l = k.a[a].o()),
            (l.a[c] = b),
            (k.a[a] = l),
            (h.a[g] = k),
            (d.a[f] = h),
            new hf(
              this.d,
              this.Qa,
              this.Da,
              this.Ra,
              this.Ea,
              this.Na,
              this.Fa,
              this.xa,
              this.fa,
              d,
              this.ja,
              this.ia,
              this.f,
              this.j
            )
          );
        if (g < this.ja.a.length)
          return (
            (f = this.ja.o()),
            (d = f.a[g].o()),
            (h = d.a[a].o()),
            (h.a[c] = b),
            (d.a[a] = h),
            (f.a[g] = d),
            new hf(
              this.d,
              this.Qa,
              this.Da,
              this.Ra,
              this.Ea,
              this.Na,
              this.Fa,
              this.xa,
              this.fa,
              this.ka,
              f,
              this.ia,
              this.f,
              this.j
            )
          );
        if (a < this.ia.a.length)
          return (
            (g = this.ia.o()),
            (f = g.a[a].o()),
            (f.a[c] = b),
            (g.a[a] = f),
            new hf(
              this.d,
              this.Qa,
              this.Da,
              this.Ra,
              this.Ea,
              this.Na,
              this.Fa,
              this.xa,
              this.fa,
              this.ka,
              this.ja,
              g,
              this.f,
              this.j
            )
          );
        a = this.f.o();
        a.a[c] = b;
        return new hf(
          this.d,
          this.Qa,
          this.Da,
          this.Ra,
          this.Ea,
          this.Na,
          this.Fa,
          this.xa,
          this.fa,
          this.ka,
          this.ja,
          this.ia,
          a,
          this.j
        );
      }
      if (a >= this.Na)
        return (
          (f = (a - this.Na) | 0),
          (a = (f >>> 15) | 0),
          (c = 31 & ((f >>> 10) | 0)),
          (g = 31 & ((f >>> 5) | 0)),
          (f &= 31),
          (d = this.Fa.o()),
          (h = d.a[a].o()),
          (k = h.a[c].o()),
          (l = k.a[g].o()),
          (l.a[f] = b),
          (k.a[g] = l),
          (h.a[c] = k),
          (d.a[a] = h),
          new hf(
            this.d,
            this.Qa,
            this.Da,
            this.Ra,
            this.Ea,
            this.Na,
            d,
            this.xa,
            this.fa,
            this.ka,
            this.ja,
            this.ia,
            this.f,
            this.j
          )
        );
      if (a >= this.Ra)
        return (
          (g = (a - this.Ra) | 0),
          (a = (g >>> 10) | 0),
          (c = 31 & ((g >>> 5) | 0)),
          (g &= 31),
          (f = this.Ea.o()),
          (d = f.a[a].o()),
          (h = d.a[c].o()),
          (h.a[g] = b),
          (d.a[c] = h),
          (f.a[a] = d),
          new hf(
            this.d,
            this.Qa,
            this.Da,
            this.Ra,
            f,
            this.Na,
            this.Fa,
            this.xa,
            this.fa,
            this.ka,
            this.ja,
            this.ia,
            this.f,
            this.j
          )
        );
      if (a >= this.Qa)
        return (
          (c = (a - this.Qa) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (g = this.Da.o()),
          (f = g.a[a].o()),
          (f.a[c] = b),
          (g.a[a] = f),
          new hf(
            this.d,
            this.Qa,
            g,
            this.Ra,
            this.Ea,
            this.Na,
            this.Fa,
            this.xa,
            this.fa,
            this.ka,
            this.ja,
            this.ia,
            this.f,
            this.j
          )
        );
      c = this.d.o();
      c.a[a] = b;
      return new hf(
        c,
        this.Qa,
        this.Da,
        this.Ra,
        this.Ea,
        this.Na,
        this.Fa,
        this.xa,
        this.fa,
        this.ka,
        this.ja,
        this.ia,
        this.f,
        this.j
      );
    }
    throw this.Db(a);
  };
  e.fc = function (a) {
    if (32 > this.f.a.length)
      return (
        (a = lf(R(), this.f, a)),
        new hf(
          this.d,
          this.Qa,
          this.Da,
          this.Ra,
          this.Ea,
          this.Na,
          this.Fa,
          this.xa,
          this.fa,
          this.ka,
          this.ja,
          this.ia,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.ia.a.length) {
      var b = U(R(), this.ia, this.f),
        c = new r(1);
      c.a[0] = a;
      return new hf(
        this.d,
        this.Qa,
        this.Da,
        this.Ra,
        this.Ea,
        this.Na,
        this.Fa,
        this.xa,
        this.fa,
        this.ka,
        this.ja,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (31 > this.ja.a.length) {
      b = U(R(), this.ja, U(R(), this.ia, this.f));
      c = R().P;
      var d = new r(1);
      d.a[0] = a;
      return new hf(
        this.d,
        this.Qa,
        this.Da,
        this.Ra,
        this.Ea,
        this.Na,
        this.Fa,
        this.xa,
        this.fa,
        this.ka,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    if (31 > this.ka.a.length) {
      b = U(R(), this.ka, U(R(), this.ja, U(R(), this.ia, this.f)));
      c = R().$a;
      d = R().P;
      var f = new r(1);
      f.a[0] = a;
      return new hf(
        this.d,
        this.Qa,
        this.Da,
        this.Ra,
        this.Ea,
        this.Na,
        this.Fa,
        this.xa,
        this.fa,
        b,
        c,
        d,
        f,
        (1 + this.j) | 0
      );
    }
    if (30 > this.fa.a.length) {
      b = U(
        R(),
        this.fa,
        U(R(), this.ka, U(R(), this.ja, U(R(), this.ia, this.f)))
      );
      c = R().tc;
      d = R().$a;
      f = R().P;
      var g = new r(1);
      g.a[0] = a;
      return new hf(
        this.d,
        this.Qa,
        this.Da,
        this.Ra,
        this.Ea,
        this.Na,
        this.Fa,
        this.xa,
        b,
        c,
        d,
        f,
        g,
        (1 + this.j) | 0
      );
    }
    b = this.d;
    c = this.Qa;
    d = this.Da;
    f = this.Ra;
    g = this.Ea;
    var h = this.Na,
      k = this.Fa,
      l = this.xa,
      p = this.fa,
      u = this.xa,
      A = R().Oh,
      G = U(R(), this.ka, U(R(), this.ja, U(R(), this.ia, this.f))),
      K = new (x(x(x(x(x(w))))).G)(1);
    K.a[0] = G;
    G = R().tc;
    var M = R().$a,
      aa = R().P,
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
      A,
      K,
      G,
      M,
      aa,
      wa,
      (1 + this.j) | 0
    );
  };
  e.bf = function (a) {
    if (32 > this.Qa) {
      var b = mf(R(), a, this.d);
      return new hf(
        b,
        (1 + this.Qa) | 0,
        this.Da,
        (1 + this.Ra) | 0,
        this.Ea,
        (1 + this.Na) | 0,
        this.Fa,
        (1 + this.xa) | 0,
        this.fa,
        this.ka,
        this.ja,
        this.ia,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.Ra)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.Da)),
        new hf(
          b,
          1,
          a,
          (1 + this.Ra) | 0,
          this.Ea,
          (1 + this.Na) | 0,
          this.Fa,
          (1 + this.xa) | 0,
          this.fa,
          this.ka,
          this.ja,
          this.ia,
          this.f,
          (1 + this.j) | 0
        )
      );
    if (32768 > this.Na) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      var c = V(R(), V(R(), this.d, this.Da), this.Ea);
      return new hf(
        b,
        1,
        a,
        1,
        c,
        (1 + this.Na) | 0,
        this.Fa,
        (1 + this.xa) | 0,
        this.fa,
        this.ka,
        this.ja,
        this.ia,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (1048576 > this.xa) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      c = R().$a;
      var d = V(R(), V(R(), V(R(), this.d, this.Da), this.Ea), this.Fa);
      return new hf(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        (1 + this.xa) | 0,
        this.fa,
        this.ka,
        this.ja,
        this.ia,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (30 > this.fa.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      c = R().$a;
      d = R().tc;
      var f = V(
        R(),
        V(R(), V(R(), V(R(), this.d, this.Da), this.Ea), this.Fa),
        this.fa
      );
      return new hf(
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
        this.f,
        (1 + this.j) | 0
      );
    }
    b = new r(1);
    b.a[0] = a;
    a = R().P;
    c = R().$a;
    d = R().tc;
    f = V(R(), V(R(), V(R(), this.d, this.Da), this.Ea), this.Fa);
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
      (1 + this.xa) | 0,
      R().Oh,
      this.fa,
      this.ka,
      this.ja,
      this.ia,
      this.f,
      (1 + this.j) | 0
    );
  };
  e.Bd = function (a) {
    var b = of(R(), this.d, a),
      c = pf(R(), 2, this.Da, a),
      d = pf(R(), 3, this.Ea, a),
      f = pf(R(), 4, this.Fa, a),
      g = pf(R(), 5, this.fa, a),
      h = pf(R(), 4, this.ka, a),
      k = pf(R(), 3, this.ja, a),
      l = pf(R(), 2, this.ia, a);
    a = of(R(), this.f, a);
    return new hf(
      b,
      this.Qa,
      c,
      this.Ra,
      d,
      this.Na,
      f,
      this.xa,
      g,
      h,
      k,
      l,
      a,
      this.j
    );
  };
  e.pd = function (a, b) {
    a = new bf(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.Da);
    Q(a, 3, this.Ea);
    Q(a, 4, this.Fa);
    Q(a, 5, this.fa);
    Q(a, 4, this.ka);
    Q(a, 3, this.ja);
    Q(a, 2, this.ia);
    Q(a, 1, this.f);
    return a.Cd();
  };
  e.ed = function () {
    if (1 < this.Qa) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new hf(
        a,
        (-1 + this.Qa) | 0,
        this.Da,
        (-1 + this.Ra) | 0,
        this.Ea,
        (-1 + this.Na) | 0,
        this.Fa,
        (-1 + this.xa) | 0,
        this.fa,
        this.ka,
        this.ja,
        this.ia,
        this.f,
        (-1 + this.j) | 0
      );
    }
    return this.pd(1, this.j);
  };
  e.qd = function () {
    return 9;
  };
  e.Kd = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.Da;
      case 2:
        return this.Ea;
      case 3:
        return this.Fa;
      case 4:
        return this.fa;
      case 5:
        return this.ka;
      case 6:
        return this.ja;
      case 7:
        return this.ia;
      case 8:
        return this.f;
      default:
        throw new T(a);
    }
  };
  e.Jc = function (a, b) {
    var c = qf(R(), this.f, a);
    return null !== c
      ? new hf(
          this.d,
          this.Qa,
          this.Da,
          this.Ra,
          this.Ea,
          this.Na,
          this.Fa,
          this.xa,
          this.fa,
          this.ka,
          this.ja,
          this.ia,
          c,
          (((this.j - this.f.a.length) | 0) + c.a.length) | 0
        )
      : xp.prototype.Jc.call(this, a, b);
  };
  e.w = function () {
    return this.ed();
  };
  e.da = function (a) {
    return this.Bd(a);
  };
  e.ud = function (a) {
    return this.fc(a);
  };
  e.m = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.xa) | 0;
      if (0 <= a) {
        b = (a >>> 20) | 0;
        var c = 31 & ((a >>> 15) | 0),
          d = 31 & ((a >>> 10) | 0),
          f = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.fa.a.length
          ? this.fa.a[b].a[c].a[d].a[f].a[a]
          : c < this.ka.a.length
          ? this.ka.a[c].a[d].a[f].a[a]
          : d < this.ja.a.length
          ? this.ja.a[d].a[f].a[a]
          : f < this.ia.a.length
          ? this.ia.a[f].a[a]
          : this.f.a[a];
      }
      return b >= this.Na
        ? ((a = (b - this.Na) | 0),
          this.Fa.a[(a >>> 15) | 0].a[31 & ((a >>> 10) | 0)].a[
            31 & ((a >>> 5) | 0)
          ].a[31 & a])
        : b >= this.Ra
        ? ((a = (b - this.Ra) | 0),
          this.Ea.a[(a >>> 10) | 0].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.Qa
        ? ((a = (b - this.Qa) | 0), this.Da.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Db(b);
  };
  e.$classData = v({ Gq: 0 }, !1, "scala.collection.immutable.Vector5", {
    Gq: 1,
    Lg: 1,
    ag: 1,
    $f: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function S(a, b, c, d, f, g, h, k, l, p, u, A, G, K, M, aa, wa) {
    this.f = this.d = null;
    this.j = 0;
    this.Ga = b;
    this.pa = c;
    this.Ha = d;
    this.qa = f;
    this.ya = g;
    this.ra = h;
    this.na = k;
    this.sa = l;
    this.oa = p;
    this.S = u;
    this.ca = A;
    this.ba = G;
    this.aa = K;
    this.$ = M;
    Rt(this, a, aa, wa);
  }
  S.prototype = new St();
  S.prototype.constructor = S;
  e = S.prototype;
  e.v = function (a) {
    if (0 <= a && a < this.j) {
      var b = (a - this.oa) | 0;
      if (0 <= b) {
        a = (b >>> 25) | 0;
        var c = 31 & ((b >>> 20) | 0),
          d = 31 & ((b >>> 15) | 0),
          f = 31 & ((b >>> 10) | 0),
          g = 31 & ((b >>> 5) | 0);
        b &= 31;
        return a < this.S.a.length
          ? this.S.a[a].a[c].a[d].a[f].a[g].a[b]
          : c < this.ca.a.length
          ? this.ca.a[c].a[d].a[f].a[g].a[b]
          : d < this.ba.a.length
          ? this.ba.a[d].a[f].a[g].a[b]
          : f < this.aa.a.length
          ? this.aa.a[f].a[g].a[b]
          : g < this.$.a.length
          ? this.$.a[g].a[b]
          : this.f.a[b];
      }
      return a >= this.na
        ? ((b = (a - this.na) | 0),
          this.sa.a[(b >>> 20) | 0].a[31 & ((b >>> 15) | 0)].a[
            31 & ((b >>> 10) | 0)
          ].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.ya
        ? ((b = (a - this.ya) | 0),
          this.ra.a[(b >>> 15) | 0].a[31 & ((b >>> 10) | 0)].a[
            31 & ((b >>> 5) | 0)
          ].a[31 & b])
        : a >= this.Ha
        ? ((b = (a - this.Ha) | 0),
          this.qa.a[(b >>> 10) | 0].a[31 & ((b >>> 5) | 0)].a[31 & b])
        : a >= this.Ga
        ? ((b = (a - this.Ga) | 0), this.pa.a[(b >>> 5) | 0].a[31 & b])
        : this.d.a[a];
    }
    throw this.Db(a);
  };
  e.wf = function (a, b) {
    if (0 <= a && a < this.j) {
      if (a >= this.oa) {
        var c = (a - this.oa) | 0,
          d = (c >>> 25) | 0,
          f = 31 & ((c >>> 20) | 0),
          g = 31 & ((c >>> 15) | 0),
          h = 31 & ((c >>> 10) | 0);
        a = 31 & ((c >>> 5) | 0);
        c &= 31;
        if (d < this.S.a.length) {
          var k = this.S.o(),
            l = k.a[d].o(),
            p = l.a[f].o(),
            u = p.a[g].o(),
            A = u.a[h].o(),
            G = A.a[a].o();
          G.a[c] = b;
          A.a[a] = G;
          u.a[h] = A;
          p.a[g] = u;
          l.a[f] = p;
          k.a[d] = l;
          return new S(
            this.d,
            this.Ga,
            this.pa,
            this.Ha,
            this.qa,
            this.ya,
            this.ra,
            this.na,
            this.sa,
            this.oa,
            k,
            this.ca,
            this.ba,
            this.aa,
            this.$,
            this.f,
            this.j
          );
        }
        if (f < this.ca.a.length)
          return (
            (d = this.ca.o()),
            (k = d.a[f].o()),
            (l = k.a[g].o()),
            (p = l.a[h].o()),
            (u = p.a[a].o()),
            (u.a[c] = b),
            (p.a[a] = u),
            (l.a[h] = p),
            (k.a[g] = l),
            (d.a[f] = k),
            new S(
              this.d,
              this.Ga,
              this.pa,
              this.Ha,
              this.qa,
              this.ya,
              this.ra,
              this.na,
              this.sa,
              this.oa,
              this.S,
              d,
              this.ba,
              this.aa,
              this.$,
              this.f,
              this.j
            )
          );
        if (g < this.ba.a.length)
          return (
            (f = this.ba.o()),
            (d = f.a[g].o()),
            (k = d.a[h].o()),
            (l = k.a[a].o()),
            (l.a[c] = b),
            (k.a[a] = l),
            (d.a[h] = k),
            (f.a[g] = d),
            new S(
              this.d,
              this.Ga,
              this.pa,
              this.Ha,
              this.qa,
              this.ya,
              this.ra,
              this.na,
              this.sa,
              this.oa,
              this.S,
              this.ca,
              f,
              this.aa,
              this.$,
              this.f,
              this.j
            )
          );
        if (h < this.aa.a.length)
          return (
            (g = this.aa.o()),
            (f = g.a[h].o()),
            (d = f.a[a].o()),
            (d.a[c] = b),
            (f.a[a] = d),
            (g.a[h] = f),
            new S(
              this.d,
              this.Ga,
              this.pa,
              this.Ha,
              this.qa,
              this.ya,
              this.ra,
              this.na,
              this.sa,
              this.oa,
              this.S,
              this.ca,
              this.ba,
              g,
              this.$,
              this.f,
              this.j
            )
          );
        if (a < this.$.a.length)
          return (
            (h = this.$.o()),
            (g = h.a[a].o()),
            (g.a[c] = b),
            (h.a[a] = g),
            new S(
              this.d,
              this.Ga,
              this.pa,
              this.Ha,
              this.qa,
              this.ya,
              this.ra,
              this.na,
              this.sa,
              this.oa,
              this.S,
              this.ca,
              this.ba,
              this.aa,
              h,
              this.f,
              this.j
            )
          );
        a = this.f.o();
        a.a[c] = b;
        return new S(
          this.d,
          this.Ga,
          this.pa,
          this.Ha,
          this.qa,
          this.ya,
          this.ra,
          this.na,
          this.sa,
          this.oa,
          this.S,
          this.ca,
          this.ba,
          this.aa,
          this.$,
          a,
          this.j
        );
      }
      if (a >= this.na)
        return (
          (f = (a - this.na) | 0),
          (a = (f >>> 20) | 0),
          (c = 31 & ((f >>> 15) | 0)),
          (h = 31 & ((f >>> 10) | 0)),
          (g = 31 & ((f >>> 5) | 0)),
          (f &= 31),
          (d = this.sa.o()),
          (k = d.a[a].o()),
          (l = k.a[c].o()),
          (p = l.a[h].o()),
          (u = p.a[g].o()),
          (u.a[f] = b),
          (p.a[g] = u),
          (l.a[h] = p),
          (k.a[c] = l),
          (d.a[a] = k),
          new S(
            this.d,
            this.Ga,
            this.pa,
            this.Ha,
            this.qa,
            this.ya,
            this.ra,
            this.na,
            d,
            this.oa,
            this.S,
            this.ca,
            this.ba,
            this.aa,
            this.$,
            this.f,
            this.j
          )
        );
      if (a >= this.ya)
        return (
          (g = (a - this.ya) | 0),
          (a = (g >>> 15) | 0),
          (c = 31 & ((g >>> 10) | 0)),
          (h = 31 & ((g >>> 5) | 0)),
          (g &= 31),
          (f = this.ra.o()),
          (d = f.a[a].o()),
          (k = d.a[c].o()),
          (l = k.a[h].o()),
          (l.a[g] = b),
          (k.a[h] = l),
          (d.a[c] = k),
          (f.a[a] = d),
          new S(
            this.d,
            this.Ga,
            this.pa,
            this.Ha,
            this.qa,
            this.ya,
            f,
            this.na,
            this.sa,
            this.oa,
            this.S,
            this.ca,
            this.ba,
            this.aa,
            this.$,
            this.f,
            this.j
          )
        );
      if (a >= this.Ha)
        return (
          (h = (a - this.Ha) | 0),
          (a = (h >>> 10) | 0),
          (c = 31 & ((h >>> 5) | 0)),
          (h &= 31),
          (g = this.qa.o()),
          (f = g.a[a].o()),
          (d = f.a[c].o()),
          (d.a[h] = b),
          (f.a[c] = d),
          (g.a[a] = f),
          new S(
            this.d,
            this.Ga,
            this.pa,
            this.Ha,
            g,
            this.ya,
            this.ra,
            this.na,
            this.sa,
            this.oa,
            this.S,
            this.ca,
            this.ba,
            this.aa,
            this.$,
            this.f,
            this.j
          )
        );
      if (a >= this.Ga)
        return (
          (c = (a - this.Ga) | 0),
          (a = (c >>> 5) | 0),
          (c &= 31),
          (h = this.pa.o()),
          (g = h.a[a].o()),
          (g.a[c] = b),
          (h.a[a] = g),
          new S(
            this.d,
            this.Ga,
            h,
            this.Ha,
            this.qa,
            this.ya,
            this.ra,
            this.na,
            this.sa,
            this.oa,
            this.S,
            this.ca,
            this.ba,
            this.aa,
            this.$,
            this.f,
            this.j
          )
        );
      c = this.d.o();
      c.a[a] = b;
      return new S(
        c,
        this.Ga,
        this.pa,
        this.Ha,
        this.qa,
        this.ya,
        this.ra,
        this.na,
        this.sa,
        this.oa,
        this.S,
        this.ca,
        this.ba,
        this.aa,
        this.$,
        this.f,
        this.j
      );
    }
    throw this.Db(a);
  };
  e.fc = function (a) {
    if (32 > this.f.a.length)
      return (
        (a = lf(R(), this.f, a)),
        new S(
          this.d,
          this.Ga,
          this.pa,
          this.Ha,
          this.qa,
          this.ya,
          this.ra,
          this.na,
          this.sa,
          this.oa,
          this.S,
          this.ca,
          this.ba,
          this.aa,
          this.$,
          a,
          (1 + this.j) | 0
        )
      );
    if (31 > this.$.a.length) {
      var b = U(R(), this.$, this.f),
        c = new r(1);
      c.a[0] = a;
      return new S(
        this.d,
        this.Ga,
        this.pa,
        this.Ha,
        this.qa,
        this.ya,
        this.ra,
        this.na,
        this.sa,
        this.oa,
        this.S,
        this.ca,
        this.ba,
        this.aa,
        b,
        c,
        (1 + this.j) | 0
      );
    }
    if (31 > this.aa.a.length) {
      b = U(R(), this.aa, U(R(), this.$, this.f));
      c = R().P;
      var d = new r(1);
      d.a[0] = a;
      return new S(
        this.d,
        this.Ga,
        this.pa,
        this.Ha,
        this.qa,
        this.ya,
        this.ra,
        this.na,
        this.sa,
        this.oa,
        this.S,
        this.ca,
        this.ba,
        b,
        c,
        d,
        (1 + this.j) | 0
      );
    }
    if (31 > this.ba.a.length) {
      b = U(R(), this.ba, U(R(), this.aa, U(R(), this.$, this.f)));
      c = R().$a;
      d = R().P;
      var f = new r(1);
      f.a[0] = a;
      return new S(
        this.d,
        this.Ga,
        this.pa,
        this.Ha,
        this.qa,
        this.ya,
        this.ra,
        this.na,
        this.sa,
        this.oa,
        this.S,
        this.ca,
        b,
        c,
        d,
        f,
        (1 + this.j) | 0
      );
    }
    if (31 > this.ca.a.length) {
      b = U(
        R(),
        this.ca,
        U(R(), this.ba, U(R(), this.aa, U(R(), this.$, this.f)))
      );
      c = R().tc;
      d = R().$a;
      f = R().P;
      var g = new r(1);
      g.a[0] = a;
      return new S(
        this.d,
        this.Ga,
        this.pa,
        this.Ha,
        this.qa,
        this.ya,
        this.ra,
        this.na,
        this.sa,
        this.oa,
        this.S,
        b,
        c,
        d,
        f,
        g,
        (1 + this.j) | 0
      );
    }
    if (62 > this.S.a.length) {
      b = U(
        R(),
        this.S,
        U(
          R(),
          this.ca,
          U(R(), this.ba, U(R(), this.aa, U(R(), this.$, this.f)))
        )
      );
      c = R().Ke;
      d = R().tc;
      f = R().$a;
      g = R().P;
      var h = new r(1);
      h.a[0] = a;
      return new S(
        this.d,
        this.Ga,
        this.pa,
        this.Ha,
        this.qa,
        this.ya,
        this.ra,
        this.na,
        this.sa,
        this.oa,
        b,
        c,
        d,
        f,
        g,
        h,
        (1 + this.j) | 0
      );
    }
    throw Ao();
  };
  e.bf = function (a) {
    if (32 > this.Ga) {
      var b = mf(R(), a, this.d);
      return new S(
        b,
        (1 + this.Ga) | 0,
        this.pa,
        (1 + this.Ha) | 0,
        this.qa,
        (1 + this.ya) | 0,
        this.ra,
        (1 + this.na) | 0,
        this.sa,
        (1 + this.oa) | 0,
        this.S,
        this.ca,
        this.ba,
        this.aa,
        this.$,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (1024 > this.Ha)
      return (
        (b = new r(1)),
        (b.a[0] = a),
        (a = V(R(), this.d, this.pa)),
        new S(
          b,
          1,
          a,
          (1 + this.Ha) | 0,
          this.qa,
          (1 + this.ya) | 0,
          this.ra,
          (1 + this.na) | 0,
          this.sa,
          (1 + this.oa) | 0,
          this.S,
          this.ca,
          this.ba,
          this.aa,
          this.$,
          this.f,
          (1 + this.j) | 0
        )
      );
    if (32768 > this.ya) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      var c = V(R(), V(R(), this.d, this.pa), this.qa);
      return new S(
        b,
        1,
        a,
        1,
        c,
        (1 + this.ya) | 0,
        this.ra,
        (1 + this.na) | 0,
        this.sa,
        (1 + this.oa) | 0,
        this.S,
        this.ca,
        this.ba,
        this.aa,
        this.$,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (1048576 > this.na) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      c = R().$a;
      var d = V(R(), V(R(), V(R(), this.d, this.pa), this.qa), this.ra);
      return new S(
        b,
        1,
        a,
        1,
        c,
        1,
        d,
        (1 + this.na) | 0,
        this.sa,
        (1 + this.oa) | 0,
        this.S,
        this.ca,
        this.ba,
        this.aa,
        this.$,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (33554432 > this.oa) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      c = R().$a;
      d = R().tc;
      var f = V(
        R(),
        V(R(), V(R(), V(R(), this.d, this.pa), this.qa), this.ra),
        this.sa
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
        (1 + this.oa) | 0,
        this.S,
        this.ca,
        this.ba,
        this.aa,
        this.$,
        this.f,
        (1 + this.j) | 0
      );
    }
    if (62 > this.S.a.length) {
      b = new r(1);
      b.a[0] = a;
      a = R().P;
      c = R().$a;
      d = R().tc;
      f = R().Ke;
      var g = V(
        R(),
        V(
          R(),
          V(R(), V(R(), V(R(), this.d, this.pa), this.qa), this.ra),
          this.sa
        ),
        this.S
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
        this.ca,
        this.ba,
        this.aa,
        this.$,
        this.f,
        (1 + this.j) | 0
      );
    }
    throw Ao();
  };
  e.Bd = function (a) {
    var b = of(R(), this.d, a),
      c = pf(R(), 2, this.pa, a),
      d = pf(R(), 3, this.qa, a),
      f = pf(R(), 4, this.ra, a),
      g = pf(R(), 5, this.sa, a),
      h = pf(R(), 6, this.S, a),
      k = pf(R(), 5, this.ca, a),
      l = pf(R(), 4, this.ba, a),
      p = pf(R(), 3, this.aa, a),
      u = pf(R(), 2, this.$, a);
    a = of(R(), this.f, a);
    return new S(
      b,
      this.Ga,
      c,
      this.Ha,
      d,
      this.ya,
      f,
      this.na,
      g,
      this.oa,
      h,
      k,
      l,
      p,
      u,
      a,
      this.j
    );
  };
  e.pd = function (a, b) {
    a = new bf(a, b);
    Q(a, 1, this.d);
    Q(a, 2, this.pa);
    Q(a, 3, this.qa);
    Q(a, 4, this.ra);
    Q(a, 5, this.sa);
    Q(a, 6, this.S);
    Q(a, 5, this.ca);
    Q(a, 4, this.ba);
    Q(a, 3, this.aa);
    Q(a, 2, this.$);
    Q(a, 1, this.f);
    return a.Cd();
  };
  e.ed = function () {
    if (1 < this.Ga) {
      var a = this.d,
        b = a.a.length;
      a = N(O(), a, 1, b);
      return new S(
        a,
        (-1 + this.Ga) | 0,
        this.pa,
        (-1 + this.Ha) | 0,
        this.qa,
        (-1 + this.ya) | 0,
        this.ra,
        (-1 + this.na) | 0,
        this.sa,
        (-1 + this.oa) | 0,
        this.S,
        this.ca,
        this.ba,
        this.aa,
        this.$,
        this.f,
        (-1 + this.j) | 0
      );
    }
    return this.pd(1, this.j);
  };
  e.qd = function () {
    return 11;
  };
  e.Kd = function (a) {
    switch (a) {
      case 0:
        return this.d;
      case 1:
        return this.pa;
      case 2:
        return this.qa;
      case 3:
        return this.ra;
      case 4:
        return this.sa;
      case 5:
        return this.S;
      case 6:
        return this.ca;
      case 7:
        return this.ba;
      case 8:
        return this.aa;
      case 9:
        return this.$;
      case 10:
        return this.f;
      default:
        throw new T(a);
    }
  };
  e.Jc = function (a, b) {
    var c = qf(R(), this.f, a);
    return null !== c
      ? new S(
          this.d,
          this.Ga,
          this.pa,
          this.Ha,
          this.qa,
          this.ya,
          this.ra,
          this.na,
          this.sa,
          this.oa,
          this.S,
          this.ca,
          this.ba,
          this.aa,
          this.$,
          c,
          (((this.j - this.f.a.length) | 0) + c.a.length) | 0
        )
      : xp.prototype.Jc.call(this, a, b);
  };
  e.w = function () {
    return this.ed();
  };
  e.da = function (a) {
    return this.Bd(a);
  };
  e.ud = function (a) {
    return this.fc(a);
  };
  e.m = function (a) {
    var b = a | 0;
    if (0 <= b && b < this.j) {
      a = (b - this.oa) | 0;
      if (0 <= a) {
        b = (a >>> 25) | 0;
        var c = 31 & ((a >>> 20) | 0),
          d = 31 & ((a >>> 15) | 0),
          f = 31 & ((a >>> 10) | 0),
          g = 31 & ((a >>> 5) | 0);
        a &= 31;
        return b < this.S.a.length
          ? this.S.a[b].a[c].a[d].a[f].a[g].a[a]
          : c < this.ca.a.length
          ? this.ca.a[c].a[d].a[f].a[g].a[a]
          : d < this.ba.a.length
          ? this.ba.a[d].a[f].a[g].a[a]
          : f < this.aa.a.length
          ? this.aa.a[f].a[g].a[a]
          : g < this.$.a.length
          ? this.$.a[g].a[a]
          : this.f.a[a];
      }
      return b >= this.na
        ? ((a = (b - this.na) | 0),
          this.sa.a[(a >>> 20) | 0].a[31 & ((a >>> 15) | 0)].a[
            31 & ((a >>> 10) | 0)
          ].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.ya
        ? ((a = (b - this.ya) | 0),
          this.ra.a[(a >>> 15) | 0].a[31 & ((a >>> 10) | 0)].a[
            31 & ((a >>> 5) | 0)
          ].a[31 & a])
        : b >= this.Ha
        ? ((a = (b - this.Ha) | 0),
          this.qa.a[(a >>> 10) | 0].a[31 & ((a >>> 5) | 0)].a[31 & a])
        : b >= this.Ga
        ? ((a = (b - this.Ga) | 0), this.pa.a[(a >>> 5) | 0].a[31 & a])
        : this.d.a[b];
    }
    throw this.Db(b);
  };
  e.$classData = v({ Hq: 0 }, !1, "scala.collection.immutable.Vector6", {
    Hq: 1,
    Lg: 1,
    ag: 1,
    $f: 1,
    ld: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Bc: 1,
    Sb: 1,
    cd: 1,
    he: 1,
    nb: 1,
    La: 1,
    Ee: 1,
    ne: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function ee() {
    var a = new Xt();
    a.Nb = Gl(new Il());
    return a;
  }
  function Xt() {
    this.Nb = null;
  }
  Xt.prototype = new gt();
  Xt.prototype.constructor = Xt;
  e = Xt.prototype;
  e.Ob = function () {
    return "IndexedSeq";
  };
  e.h = function () {
    var a = new Ak(this);
    return new Bk(a);
  };
  e.Jb = function (a) {
    return Jo(this, a);
  };
  e.da = function (a) {
    return Lo(this, a);
  };
  e.u = function () {
    return Na(Ll(this.Nb, 0));
  };
  e.kb = function (a) {
    var b = this.Nb.q();
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.ac = function () {};
  e.wb = function (a) {
    return fi(this, a);
  };
  e.q = function () {
    return this.Nb.q();
  };
  e.t = function () {
    return this.Nb.q();
  };
  e.z = function () {
    return this.Nb.n;
  };
  function Yt(a, b) {
    if (b instanceof Nm) {
      var c = a.Nb;
      Om();
      c.n = "" + c.n + b.mc;
    } else if (b instanceof Yq) Jl(a.Nb, b.dd);
    else if (b instanceof Xt) (c = a.Nb), (c.n = "" + c.n + b.Nb);
    else {
      var d = b.t();
      if (0 !== d)
        for (c = a.Nb, 0 < d && c.q(), b = b.h(); b.l(); )
          (d = Aa(b.k())), (d = String.fromCharCode(d)), (c.n = "" + c.n + d);
    }
    return a;
  }
  e.e = function () {
    return 0 === this.Nb.q();
  };
  e.X = function () {
    fq || (fq = new eq());
    return fq;
  };
  e.Wa = function () {
    return this.Nb.n;
  };
  e.Ia = function (a) {
    var b = this.Nb;
    a = String.fromCharCode(Aa(a));
    b.n = "" + b.n + a;
    return this;
  };
  e.ve = function (a) {
    return Yt(ee(), a);
  };
  e.jh = function (a) {
    return Yt(ee(), a);
  };
  e.m = function (a) {
    return Na(Ll(this.Nb, a | 0));
  };
  e.v = function (a) {
    return Na(Ll(this.Nb, a));
  };
  e.$classData = v({ yr: 0 }, !1, "scala.collection.mutable.StringBuilder", {
    yr: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    vf: 1,
    Qc: 1,
    oc: 1,
    nc: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    Ek: 1,
    c: 1,
  });
  function Zt(a) {
    a.Nj = (1 + a.Nj) | 0;
    if (a.Th) {
      var b = hq(new pp(), a);
      a.Vd = b.Vd;
      a.od = b.od;
      a.Th = !1;
    }
  }
  function pp() {
    this.od = this.Vd = null;
    this.Th = !1;
    this.Nj = this.Ec = 0;
    this.Vd = I();
    this.od = null;
    this.Th = !1;
    this.Ec = 0;
  }
  pp.prototype = new zt();
  pp.prototype.constructor = pp;
  e = pp.prototype;
  e.ac = function () {};
  e.Nd = function (a) {
    return Nq(this, a);
  };
  e.da = function (a) {
    return Yl(this, a);
  };
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return cm(this, a);
  };
  e.h = function () {
    return new kq(this.Vd.h(), new H(((a) => () => a.Nj)(this)));
  };
  e.Ad = function () {
    return jq();
  };
  e.v = function (a) {
    return mn(this.Vd, a);
  };
  e.q = function () {
    return this.Ec;
  };
  e.t = function () {
    return this.Ec;
  };
  e.e = function () {
    return 0 === this.Ec;
  };
  function Lt(a) {
    a.Th = !a.e();
    return a.Vd;
  }
  function hq(a, b) {
    if (b === a)
      0 < a.Ec &&
        (Zt(a),
        (b = hq(new pp(), a)),
        (a.od.sc = b.Vd),
        (a.od = b.od),
        (a.Ec <<= 1));
    else if (((b = b.h()), b.l())) {
      Zt(a);
      var c = new cn(b.k(), I());
      0 === a.Ec ? (a.Vd = c) : (a.od.sc = c);
      a.od = c;
      for (a.Ec = (1 + a.Ec) | 0; b.l(); )
        (c = new cn(b.k(), I())),
          (a.od.sc = c),
          (a.od = c),
          (a.Ec = (1 + a.Ec) | 0);
    }
    return a;
  }
  e.Ob = function () {
    return "ListBuffer";
  };
  e.wb = function (a) {
    return hq(this, a);
  };
  e.Ia = function (a) {
    Zt(this);
    a = new cn(a, I());
    0 === this.Ec ? (this.Vd = a) : (this.od.sc = a);
    this.od = a;
    this.Ec = (1 + this.Ec) | 0;
    return this;
  };
  e.Wa = function () {
    return Lt(this);
  };
  e.m = function (a) {
    return mn(this.Vd, a | 0);
  };
  e.X = function () {
    return jq();
  };
  e.$classData = v({ qr: 0 }, !1, "scala.collection.mutable.ListBuffer", {
    qr: 1,
    Ph: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Qh: 1,
    oc: 1,
    nc: 1,
    Yg: 1,
    ob: 1,
    va: 1,
    vf: 1,
    Qc: 1,
    bd: 1,
    c: 1,
  });
  function Kp() {
    var a = new Ip(),
      b = new r(16);
    a.Td = b;
    a.ib = 0;
    return a;
  }
  function Ip() {
    this.Td = null;
    this.ib = 0;
  }
  Ip.prototype = new zt();
  Ip.prototype.constructor = Ip;
  e = Ip.prototype;
  e.Nd = function (a) {
    return Nq(this, a);
  };
  e.da = function (a) {
    return Yl(this, a);
  };
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return cm(this, a);
  };
  e.h = function () {
    return new Bk(new Vs(this.Td, this.ib));
  };
  e.Jb = function (a) {
    return Jo(this, a);
  };
  e.u = function () {
    return this.v(0);
  };
  e.kb = function (a) {
    var b = this.ib;
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return this.ib;
  };
  function Np(a, b) {
    Mp();
    var c = a.Td,
      d = c.a.length,
      f = d >> 31,
      g = b >> 31;
    if (!(g === f ? (-2147483648 ^ b) <= (-2147483648 ^ d) : g < f)) {
      g = new n(d, f);
      d = a.ib;
      var h = g.bb;
      f = h << 1;
      g = (h >>> 31) | 0 | (g.ab << 1);
      g = (0 === g ? -2147483632 < (-2147483648 ^ f) : 0 < g)
        ? new n(f, g)
        : new n(16, 0);
      f = g.bb;
      for (g = g.ab; ; ) {
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
            ((a = new Qi()),
            ze(a, "Collections can not have more than 2147483647 elements"),
            lb(a))
          );
        f = 2147483647;
      }
      b = new r(f);
      Gh(Ih(), c, 0, b, 0, d);
      c = b;
    }
    a.Td = c;
  }
  e.v = function (a) {
    var b = (1 + a) | 0;
    if (0 > a)
      throw xg(
        new yg(),
        a + " is out of bounds (min 0, max " + ((-1 + this.ib) | 0) + ")"
      );
    if (b > this.ib)
      throw xg(
        new yg(),
        ((-1 + b) | 0) +
          " is out of bounds (min 0, max " +
          ((-1 + this.ib) | 0) +
          ")"
      );
    return this.Td.a[a];
  };
  e.q = function () {
    return this.ib;
  };
  e.Ad = function () {
    return Mp();
  };
  function Jp(a, b) {
    b instanceof Ip
      ? (Np(a, (a.ib + b.ib) | 0),
        Gh(Ih(), b.Td, 0, a.Td, a.ib, b.ib),
        (a.ib = (a.ib + b.ib) | 0))
      : fi(a, b);
    return a;
  }
  e.Ob = function () {
    return "ArrayBuffer";
  };
  e.Pb = function (a, b, c) {
    var d = this.ib,
      f = Bd(Gd(), a);
    c = c < d ? c : d;
    f = (f - b) | 0;
    f = c < f ? c : f;
    f = 0 < f ? f : 0;
    0 < f && Gh(Ih(), this.Td, 0, a, b, f);
    return f;
  };
  e.wb = function (a) {
    return Jp(this, a);
  };
  e.Ia = function (a) {
    var b = this.ib;
    Np(this, (1 + this.ib) | 0);
    this.ib = (1 + this.ib) | 0;
    var c = (1 + b) | 0;
    if (0 > b)
      throw xg(
        new yg(),
        b + " is out of bounds (min 0, max " + ((-1 + this.ib) | 0) + ")"
      );
    if (c > this.ib)
      throw xg(
        new yg(),
        ((-1 + c) | 0) +
          " is out of bounds (min 0, max " +
          ((-1 + this.ib) | 0) +
          ")"
      );
    this.Td.a[b] = a;
    return this;
  };
  e.X = function () {
    return Mp();
  };
  e.m = function (a) {
    return this.v(a | 0);
  };
  e.$classData = v({ Nq: 0 }, !1, "scala.collection.mutable.ArrayBuffer", {
    Nq: 1,
    Ph: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Qh: 1,
    oc: 1,
    nc: 1,
    Yg: 1,
    Mj: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    bd: 1,
    c: 1,
  });
  function wq(a) {
    a.re = [];
    return a;
  }
  function sq() {
    var a = new xq();
    wq(a);
    return a;
  }
  function xq() {
    this.re = null;
  }
  xq.prototype = new zt();
  xq.prototype.constructor = xq;
  e = xq.prototype;
  e.ac = function () {};
  e.Ob = function () {
    return "IndexedSeq";
  };
  e.h = function () {
    var a = new Ak(this);
    return new Bk(a);
  };
  e.Jb = function (a) {
    return Jo(this, a);
  };
  e.da = function (a) {
    return Lo(this, a);
  };
  e.u = function () {
    return this.re[0];
  };
  e.kb = function (a) {
    var b = this.re.length | 0;
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.Nd = function (a) {
    return Nq(this, a);
  };
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return cm(this, a);
  };
  e.Ad = function () {
    return Zp();
  };
  e.v = function (a) {
    return this.re[a];
  };
  e.q = function () {
    return this.re.length | 0;
  };
  e.t = function () {
    return this.re.length | 0;
  };
  e.Wc = function () {
    return "WrappedArray";
  };
  e.Wa = function () {
    return this;
  };
  e.Ia = function (a) {
    this.re.push(a);
    return this;
  };
  e.m = function (a) {
    return this.re[a | 0];
  };
  e.X = function () {
    return Zp();
  };
  e.$classData = v({ Br: 0 }, !1, "scala.scalajs.js.WrappedArray", {
    Br: 1,
    Ph: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Qh: 1,
    oc: 1,
    nc: 1,
    Yg: 1,
    ob: 1,
    va: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    Mj: 1,
    Qc: 1,
    c: 1,
  });
  function $t(a, b, c, d) {
    if (0 !== (b.a.length & ((-1 + b.a.length) | 0))) throw new El();
    var f = b.a.length;
    if (0 > c || c >= f)
      throw xg(
        new yg(),
        c + " is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
      );
    f = b.a.length;
    if (0 > d || d >= f)
      throw xg(
        new yg(),
        d + " is out of bounds (min 0, max " + ((-1 + f) | 0) + ")"
      );
    a.U = b;
    a.tb = c;
    a.sb = d;
  }
  function Rp(a, b, c) {
    a.U = b;
    a.tb = 0;
    a.sb = c;
    $t(a, a.U, a.tb, a.sb);
    return a;
  }
  function Up() {
    var a = new Sp();
    Rp(a, Qp(Xp(), 16), 0);
    return a;
  }
  function Sp() {
    this.U = null;
    this.sb = this.tb = 0;
  }
  Sp.prototype = new zt();
  Sp.prototype.constructor = Sp;
  function au() {}
  e = au.prototype = Sp.prototype;
  e.Nd = function (a) {
    return Nq(this, a);
  };
  e.da = function (a) {
    return Yl(this, a);
  };
  e.Cb = function (a) {
    return Zl(this, a);
  };
  e.Qb = function (a) {
    return cm(this, a);
  };
  e.h = function () {
    var a = new Ak(this);
    return new Bk(a);
  };
  e.Jb = function (a) {
    return Jo(this, a);
  };
  e.u = function () {
    return this.v(0);
  };
  e.kb = function (a) {
    var b = ((this.sb - this.tb) | 0) & ((-1 + this.U.a.length) | 0);
    return b === a ? 0 : b < a ? -1 : 1;
  };
  e.t = function () {
    return ((this.sb - this.tb) | 0) & ((-1 + this.U.a.length) | 0);
  };
  e.v = function (a) {
    var b = ((this.sb - this.tb) | 0) & ((-1 + this.U.a.length) | 0);
    if (0 > a || a >= b)
      throw xg(
        new yg(),
        a + " is out of bounds (min 0, max " + ((-1 + b) | 0) + ")"
      );
    return this.U.a[((this.tb + a) | 0) & ((-1 + this.U.a.length) | 0)];
  };
  function Gk(a, b) {
    var c = (1 + (((a.sb - a.tb) | 0) & ((-1 + a.U.a.length) | 0))) | 0;
    c > (((a.sb - a.tb) | 0) & ((-1 + a.U.a.length) | 0)) &&
      c >= a.U.a.length &&
      Yp(a, c);
    a.U.a[a.sb] = b;
    a.sb = ((1 + a.sb) | 0) & ((-1 + a.U.a.length) | 0);
    return a;
  }
  function Tp(a, b) {
    var c = b.t();
    if (0 < c)
      for (
        c = (c + (((a.sb - a.tb) | 0) & ((-1 + a.U.a.length) | 0))) | 0,
          c > (((a.sb - a.tb) | 0) & ((-1 + a.U.a.length) | 0)) &&
            c >= a.U.a.length &&
            Yp(a, c),
          b = b.h();
        b.l();

      )
        (c = b.k()),
          (a.U.a[a.sb] = c),
          (a.sb = ((1 + a.sb) | 0) & ((-1 + a.U.a.length) | 0));
    else for (b = b.h(); b.l(); ) (c = b.k()), Gk(a, c);
    return a;
  }
  function Hk(a) {
    if (a.e()) throw Uk("empty collection");
    var b = a.U.a[a.tb];
    a.U.a[a.tb] = null;
    a.tb = ((1 + a.tb) | 0) & ((-1 + a.U.a.length) | 0);
    return b;
  }
  e.q = function () {
    return ((this.sb - this.tb) | 0) & ((-1 + this.U.a.length) | 0);
  };
  e.e = function () {
    return this.tb === this.sb;
  };
  e.Ad = function () {
    return Xp();
  };
  e.Pb = function (a, b, c) {
    var d = ((this.sb - this.tb) | 0) & ((-1 + this.U.a.length) | 0),
      f = Bd(Gd(), a);
    d = c < d ? c : d;
    f = (f - b) | 0;
    f = d < f ? d : f;
    f = 0 < f ? f : 0;
    0 < f && vr(this, a, b, c);
    return f;
  };
  function Yp(a, b) {
    if (
      b >= a.U.a.length ||
      (16 < a.U.a.length && ((a.U.a.length - b) | 0) > b)
    ) {
      var c = ((a.sb - a.tb) | 0) & ((-1 + a.U.a.length) | 0);
      b = Qp(Xp(), b);
      b = vr(a, b, 0, c);
      $t(a, b, 0, c);
    }
  }
  e.Ob = function () {
    return "ArrayDeque";
  };
  e.X = function () {
    return this.Ad();
  };
  e.wb = function (a) {
    return Tp(this, a);
  };
  e.Ia = function (a) {
    return Gk(this, a);
  };
  e.m = function (a) {
    return this.v(a | 0);
  };
  e.$classData = v({ Fl: 0 }, !1, "scala.collection.mutable.ArrayDeque", {
    Fl: 1,
    Ph: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Qh: 1,
    oc: 1,
    nc: 1,
    Yg: 1,
    Mj: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    Vq: 1,
    bd: 1,
    c: 1,
  });
  function Fk(a) {
    this.U = null;
    this.sb = this.tb = 0;
    a = Qp(Xp(), a);
    Rp(this, a, 0);
  }
  Fk.prototype = new au();
  Fk.prototype.constructor = Fk;
  Fk.prototype.Ad = function () {
    return nq();
  };
  Fk.prototype.Ob = function () {
    return "Queue";
  };
  Fk.prototype.X = function () {
    return nq();
  };
  Fk.prototype.$classData = v({ vr: 0 }, !1, "scala.collection.mutable.Queue", {
    vr: 1,
    Fl: 1,
    Ph: 1,
    Dc: 1,
    Ka: 1,
    E: 1,
    b: 1,
    B: 1,
    r: 1,
    D: 1,
    s: 1,
    C: 1,
    ua: 1,
    Aa: 1,
    O: 1,
    Q: 1,
    x: 1,
    Fc: 1,
    vc: 1,
    Gc: 1,
    uc: 1,
    Vb: 1,
    Qh: 1,
    oc: 1,
    nc: 1,
    Yg: 1,
    Mj: 1,
    Rc: 1,
    nb: 1,
    La: 1,
    Sc: 1,
    ob: 1,
    va: 1,
    Vq: 1,
    bd: 1,
    c: 1,
  });
  ea = new n(0, 0);
  hb.Wh = ea;
  ScalaJSExample = Bc();
  new (x(ma).G)([]);
  gc(Bc());
}.call(this));
//# sourceMappingURL=scala-js-games-opt.js.map
