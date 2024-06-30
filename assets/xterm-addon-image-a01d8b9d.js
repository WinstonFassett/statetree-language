import { l as getDefaultExportFromCjs } from "./index-3bddf13b.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var xtermAddonImage$2 = { exports: {} };
/*! For license information please see xterm-addon-image.js.LICENSE.txt */
var hasRequiredXtermAddonImage;
function requireXtermAddonImage() {
  if (hasRequiredXtermAddonImage)
    return xtermAddonImage$2.exports;
  hasRequiredXtermAddonImage = 1;
  (function(module, exports) {
    !function(A, e) {
      module.exports = e();
    }(self, function() {
      return (() => {
        var A = { 615: (A2, e2) => {
          function t2(A3) {
            if ("undefined" != typeof Buffer)
              return Buffer.from(A3, "base64");
            const e3 = atob(A3), t3 = new Uint8Array(e3.length);
            for (let A4 = 0; A4 < t3.length; ++A4)
              t3[A4] = e3.charCodeAt(A4);
            return t3;
          }
          Object.defineProperty(e2, "__esModule", { value: true }), e2.InWasm = void 0, e2.InWasm = function(A3) {
            if (A3.d) {
              const { t: e3, s: i2, d: s } = A3;
              let r, g;
              const a = WebAssembly;
              return 2 === e3 ? i2 ? () => r || (r = t2(s)) : () => Promise.resolve(r || (r = t2(s))) : 1 === e3 ? i2 ? () => g || (g = new a.Module(r || (r = t2(s)))) : () => g ? Promise.resolve(g) : a.compile(r || (r = t2(s))).then((A4) => g = A4) : i2 ? (A4) => new a.Instance(g || (g = new a.Module(r || (r = t2(s)))), A4) : (A4) => g ? a.instantiate(g, A4) : a.instantiate(r || (r = t2(s)), A4).then((A5) => (g = A5.module) && A5.instance);
            }
            if ("undefined" == typeof _wasmCtx)
              throw new Error('must run "inwasm"');
            _wasmCtx.add(A3);
          };
        }, 477: (A2, e2) => {
          function t2(A3) {
            return 255 & A3;
          }
          function i2(A3) {
            return A3 >>> 8 & 255;
          }
          function s(A3) {
            return A3 >>> 16 & 255;
          }
          function r(A3, e3, t3, i3 = 255) {
            return ((255 & i3) << 24 | (255 & t3) << 16 | (255 & e3) << 8 | 255 & A3) >>> 0;
          }
          function g(A3, e3, t3) {
            return Math.max(A3, Math.min(t3, e3));
          }
          function a(A3, e3, t3) {
            return t3 < 0 && (t3 += 1), t3 > 1 && (t3 -= 1), 6 * t3 < 1 ? e3 + 6 * (A3 - e3) * t3 : 2 * t3 < 1 ? A3 : 3 * t3 < 2 ? e3 + (A3 - e3) * (4 - 6 * t3) : e3;
          }
          function o(A3, e3, t3) {
            return (4278190080 | Math.round(t3 / 100 * 255) << 16 | Math.round(e3 / 100 * 255) << 8 | Math.round(A3 / 100 * 255)) >>> 0;
          }
          Object.defineProperty(e2, "__esModule", { value: true }), e2.DEFAULT_FOREGROUND = e2.DEFAULT_BACKGROUND = e2.PALETTE_ANSI_256 = e2.PALETTE_VT340_GREY = e2.PALETTE_VT340_COLOR = e2.normalizeHLS = e2.normalizeRGB = e2.nearestColorIndex = e2.fromRGBA8888 = e2.toRGBA8888 = e2.alpha = e2.blue = e2.green = e2.red = e2.BIG_ENDIAN = void 0, e2.BIG_ENDIAN = 255 === new Uint8Array(new Uint32Array([4278190080]).buffer)[0], e2.BIG_ENDIAN && console.warn("BE platform detected. This version of node-sixel works only on LE properly."), e2.red = t2, e2.green = i2, e2.blue = s, e2.alpha = function(A3) {
            return A3 >>> 24 & 255;
          }, e2.toRGBA8888 = r, e2.fromRGBA8888 = function(A3) {
            return [255 & A3, A3 >> 8 & 255, A3 >> 16 & 255, A3 >>> 24];
          }, e2.nearestColorIndex = function(A3, e3) {
            const r2 = t2(A3), g2 = i2(A3), a2 = s(A3);
            let o2 = Number.MAX_SAFE_INTEGER, h = -1;
            for (let A4 = 0; A4 < e3.length; ++A4) {
              const t3 = r2 - e3[A4][0], i3 = g2 - e3[A4][1], s2 = a2 - e3[A4][2], n = t3 * t3 + i3 * i3 + s2 * s2;
              if (!n)
                return A4;
              n < o2 && (o2 = n, h = A4);
            }
            return h;
          }, e2.normalizeRGB = o, e2.normalizeHLS = function(A3, e3, t3) {
            return function(A4, e4, t4) {
              if (!t4) {
                const A5 = Math.round(255 * e4);
                return r(A5, A5, A5);
              }
              const i3 = e4 < 0.5 ? e4 * (1 + t4) : e4 + t4 - e4 * t4, s2 = 2 * e4 - i3;
              return r(g(0, 255, Math.round(255 * a(i3, s2, A4 + 1 / 3))), g(0, 255, Math.round(255 * a(i3, s2, A4))), g(0, 255, Math.round(255 * a(i3, s2, A4 - 1 / 3))));
            }((A3 + 240) / 360, e3 / 100, t3 / 100);
          }, e2.PALETTE_VT340_COLOR = new Uint32Array([o(0, 0, 0), o(20, 20, 80), o(80, 13, 13), o(20, 80, 20), o(80, 20, 80), o(20, 80, 80), o(80, 80, 20), o(53, 53, 53), o(26, 26, 26), o(33, 33, 60), o(60, 26, 26), o(33, 60, 33), o(60, 33, 60), o(33, 60, 60), o(60, 60, 33), o(80, 80, 80)]), e2.PALETTE_VT340_GREY = new Uint32Array([o(0, 0, 0), o(13, 13, 13), o(26, 26, 26), o(40, 40, 40), o(6, 6, 6), o(20, 20, 20), o(33, 33, 33), o(46, 46, 46), o(0, 0, 0), o(13, 13, 13), o(26, 26, 26), o(40, 40, 40), o(6, 6, 6), o(20, 20, 20), o(33, 33, 33), o(46, 46, 46)]), e2.PALETTE_ANSI_256 = (() => {
            const A3 = [r(0, 0, 0), r(205, 0, 0), r(0, 205, 0), r(205, 205, 0), r(0, 0, 238), r(205, 0, 205), r(0, 250, 205), r(229, 229, 229), r(127, 127, 127), r(255, 0, 0), r(0, 255, 0), r(255, 255, 0), r(92, 92, 255), r(255, 0, 255), r(0, 255, 255), r(255, 255, 255)], e3 = [0, 95, 135, 175, 215, 255];
            for (let t3 = 0; t3 < 6; ++t3)
              for (let i3 = 0; i3 < 6; ++i3)
                for (let s2 = 0; s2 < 6; ++s2)
                  A3.push(r(e3[t3], e3[i3], e3[s2]));
            for (let e4 = 8; e4 <= 238; e4 += 10)
              A3.push(r(e4, e4, e4));
            return new Uint32Array(A3);
          })(), e2.DEFAULT_BACKGROUND = r(0, 0, 0, 255), e2.DEFAULT_FOREGROUND = r(255, 255, 255, 255);
        }, 710: (A2, e2, t2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.decodeAsync = e2.decode = e2.Decoder = e2.DecoderAsync = void 0;
          const i2 = t2(477), s = t2(343), r = function(A3) {
            if ("undefined" != typeof Buffer)
              return Buffer.from(A3, "base64");
            const e3 = atob(A3), t3 = new Uint8Array(e3.length);
            for (let A4 = 0; A4 < t3.length; ++A4)
              t3[A4] = e3.charCodeAt(A4);
            return t3;
          }(s.LIMITS.BYTES);
          let g;
          const a = new Uint32Array();
          class o {
            constructor() {
              this.bandHandler = (A3) => 1, this.modeHandler = (A3) => 1;
            }
            handle_band(A3) {
              return this.bandHandler(A3);
            }
            mode_parsed(A3) {
              return this.modeHandler(A3);
            }
          }
          const h = { memoryLimit: 134217728, sixelColor: i2.DEFAULT_FOREGROUND, fillColor: i2.DEFAULT_BACKGROUND, palette: i2.PALETTE_VT340_COLOR, paletteLimit: s.LIMITS.PALETTE_SIZE, truncate: true };
          function n(A3) {
            const e3 = new o(), t3 = { env: { handle_band: e3.handle_band.bind(e3), mode_parsed: e3.mode_parsed.bind(e3) } };
            return WebAssembly.instantiate(g || r, t3).then((t4) => (g = g || t4.module, new I(A3, t4.instance || t4, e3)));
          }
          e2.DecoderAsync = n;
          class I {
            constructor(A3, e3, t3) {
              if (this._PIXEL_OFFSET = s.LIMITS.MAX_WIDTH + 4, this._canvas = a, this._bandWidths = [], this._maxWidth = 0, this._minWidth = s.LIMITS.MAX_WIDTH, this._lastOffset = 0, this._currentHeight = 0, this._opts = Object.assign({}, h, A3), this._opts.paletteLimit > s.LIMITS.PALETTE_SIZE)
                throw new Error(`DecoderOptions.paletteLimit must not exceed ${s.LIMITS.PALETTE_SIZE}`);
              if (e3)
                t3.bandHandler = this._handle_band.bind(this), t3.modeHandler = this._initCanvas.bind(this);
              else {
                const A4 = g || (g = new WebAssembly.Module(r));
                e3 = new WebAssembly.Instance(A4, { env: { handle_band: this._handle_band.bind(this), mode_parsed: this._initCanvas.bind(this) } });
              }
              this._instance = e3, this._wasm = this._instance.exports, this._chunk = new Uint8Array(this._wasm.memory.buffer, this._wasm.get_chunk_address(), s.LIMITS.CHUNK_SIZE), this._states = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_state_address(), 12), this._palette = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_palette_address(), s.LIMITS.PALETTE_SIZE), this._palette.set(this._opts.palette), this._pSrc = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_p0_address()), this._wasm.init(i2.DEFAULT_FOREGROUND, 0, this._opts.paletteLimit, 0);
            }
            get _fillColor() {
              return this._states[0];
            }
            get _truncate() {
              return this._states[8];
            }
            get _rasterWidth() {
              return this._states[6];
            }
            get _rasterHeight() {
              return this._states[7];
            }
            get _width() {
              return this._states[2] ? this._states[2] - 4 : 0;
            }
            get _height() {
              return this._states[3];
            }
            get _level() {
              return this._states[9];
            }
            get _mode() {
              return this._states[10];
            }
            get _paletteLimit() {
              return this._states[11];
            }
            _initCanvas(A3) {
              if (2 === A3) {
                const A4 = this.width * this.height;
                if (A4 > this._canvas.length) {
                  if (this._opts.memoryLimit && 4 * A4 > this._opts.memoryLimit)
                    throw this.release(), new Error("image exceeds memory limit");
                  this._canvas = new Uint32Array(A4);
                }
                this._maxWidth = this._width;
              } else if (1 === A3)
                if (2 === this._level) {
                  const A4 = Math.min(this._rasterWidth, s.LIMITS.MAX_WIDTH) * this._rasterHeight;
                  if (A4 > this._canvas.length) {
                    if (this._opts.memoryLimit && 4 * A4 > this._opts.memoryLimit)
                      throw this.release(), new Error("image exceeds memory limit");
                    this._canvas = new Uint32Array(A4);
                  }
                } else
                  this._canvas.length < 65536 && (this._canvas = new Uint32Array(65536));
              return 0;
            }
            _realloc(A3, e3) {
              const t3 = A3 + e3;
              if (t3 > this._canvas.length) {
                if (this._opts.memoryLimit && 4 * t3 > this._opts.memoryLimit)
                  throw this.release(), new Error("image exceeds memory limit");
                const A4 = new Uint32Array(65536 * Math.ceil(t3 / 65536));
                A4.set(this._canvas), this._canvas = A4;
              }
            }
            _handle_band(A3) {
              const e3 = this._PIXEL_OFFSET;
              let t3 = this._lastOffset;
              if (2 === this._mode) {
                let i3 = this.height - this._currentHeight, s2 = 0;
                for (; s2 < 6 && i3 > 0; )
                  this._canvas.set(this._pSrc.subarray(e3 * s2, e3 * s2 + A3), t3 + A3 * s2), s2++, i3--;
                this._lastOffset += A3 * s2, this._currentHeight += s2;
              } else if (1 === this._mode) {
                this._realloc(t3, 6 * A3), this._maxWidth = Math.max(this._maxWidth, A3), this._minWidth = Math.min(this._minWidth, A3);
                for (let i3 = 0; i3 < 6; ++i3)
                  this._canvas.set(this._pSrc.subarray(e3 * i3, e3 * i3 + A3), t3 + A3 * i3);
                this._bandWidths.push(A3), this._lastOffset += 6 * A3, this._currentHeight += 6;
              }
              return 0;
            }
            get width() {
              return 1 !== this._mode ? this._width : Math.max(this._maxWidth, this._wasm.current_width());
            }
            get height() {
              return 1 !== this._mode ? this._height : this._wasm.current_width() ? 6 * this._bandWidths.length + this._wasm.current_height() : 6 * this._bandWidths.length;
            }
            get palette() {
              return this._palette.subarray(0, this._paletteLimit);
            }
            get memoryUsage() {
              return this._canvas.byteLength + this._wasm.memory.buffer.byteLength + 8 * this._bandWidths.length;
            }
            get properties() {
              return { width: this.width, height: this.height, mode: this._mode, level: this._level, truncate: !!this._truncate, paletteLimit: this._paletteLimit, fillColor: this._fillColor, memUsage: this.memoryUsage, rasterAttributes: { numerator: this._states[4], denominator: this._states[5], width: this._rasterWidth, height: this._rasterHeight } };
            }
            init(A3 = this._opts.fillColor, e3 = this._opts.palette, t3 = this._opts.paletteLimit, i3 = this._opts.truncate) {
              this._wasm.init(this._opts.sixelColor, A3, t3, i3 ? 1 : 0), e3 && this._palette.set(e3.subarray(0, s.LIMITS.PALETTE_SIZE)), this._bandWidths.length = 0, this._maxWidth = 0, this._minWidth = s.LIMITS.MAX_WIDTH, this._lastOffset = 0, this._currentHeight = 0;
            }
            decode(A3, e3 = 0, t3 = A3.length) {
              let i3 = e3;
              for (; i3 < t3; ) {
                const e4 = Math.min(t3 - i3, s.LIMITS.CHUNK_SIZE);
                this._chunk.set(A3.subarray(i3, i3 += e4)), this._wasm.decode(0, e4);
              }
            }
            decodeString(A3, e3 = 0, t3 = A3.length) {
              let i3 = e3;
              for (; i3 < t3; ) {
                const e4 = Math.min(t3 - i3, s.LIMITS.CHUNK_SIZE);
                for (let t4 = 0, s2 = i3; t4 < e4; ++t4, ++s2)
                  this._chunk[t4] = A3.charCodeAt(s2);
                i3 += e4, this._wasm.decode(0, e4);
              }
            }
            get data32() {
              if (0 === this._mode || !this.width || !this.height)
                return a;
              const A3 = this._wasm.current_width();
              if (2 === this._mode) {
                let e3 = this.height - this._currentHeight;
                if (e3 > 0) {
                  const t3 = this._PIXEL_OFFSET;
                  let i3 = this._lastOffset, s2 = 0;
                  for (; s2 < 6 && e3 > 0; )
                    this._canvas.set(this._pSrc.subarray(t3 * s2, t3 * s2 + A3), i3 + A3 * s2), s2++, e3--;
                  e3 && this._canvas.fill(this._fillColor, i3 + A3 * s2);
                }
                return this._canvas.subarray(0, this.width * this.height);
              }
              if (1 === this._mode) {
                if (this._minWidth === this._maxWidth) {
                  let e4 = false;
                  if (A3)
                    if (A3 !== this._minWidth)
                      e4 = true;
                    else {
                      const e5 = this._PIXEL_OFFSET;
                      let t4 = this._lastOffset;
                      this._realloc(t4, 6 * A3);
                      for (let i4 = 0; i4 < 6; ++i4)
                        this._canvas.set(this._pSrc.subarray(e5 * i4, e5 * i4 + A3), t4 + A3 * i4);
                    }
                  if (!e4)
                    return this._canvas.subarray(0, this.width * this.height);
                }
                const e3 = new Uint32Array(this.width * this.height);
                e3.fill(this._fillColor);
                let t3 = 0, i3 = 0;
                for (let A4 = 0; A4 < this._bandWidths.length; ++A4) {
                  const s2 = this._bandWidths[A4];
                  for (let A5 = 0; A5 < 6; ++A5)
                    e3.set(this._canvas.subarray(i3, i3 += s2), t3), t3 += this.width;
                }
                if (A3) {
                  const i4 = this._PIXEL_OFFSET, s2 = this._wasm.current_height();
                  for (let r2 = 0; r2 < s2; ++r2)
                    e3.set(this._pSrc.subarray(i4 * r2, i4 * r2 + A3), t3 + this.width * r2);
                }
                return e3;
              }
              return a;
            }
            get data8() {
              return new Uint8ClampedArray(this.data32.buffer, 0, this.width * this.height * 4);
            }
            release() {
              this._canvas = a, this._bandWidths.length = 0, this._maxWidth = 0, this._minWidth = s.LIMITS.MAX_WIDTH, this._wasm.init(i2.DEFAULT_FOREGROUND, 0, this._opts.paletteLimit, 0);
            }
          }
          e2.Decoder = I, e2.decode = function(A3, e3) {
            const t3 = new I(e3);
            return t3.init(), "string" == typeof A3 ? t3.decodeString(A3) : t3.decode(A3), { width: t3.width, height: t3.height, data32: t3.data32, data8: t3.data8 };
          }, e2.decodeAsync = async function(A3, e3) {
            const t3 = await n(e3);
            return t3.init(), "string" == typeof A3 ? t3.decodeString(A3) : t3.decode(A3), { width: t3.width, height: t3.height, data32: t3.data32, data8: t3.data8 };
          };
        }, 343: (A2, e2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.LIMITS = void 0, e2.LIMITS = { CHUNK_SIZE: 16384, PALETTE_SIZE: 4096, MAX_WIDTH: 16384, BYTES: "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AEHAiwIgADcDAEG4iwIgADcDAEGwiwIgADcDAEGoiwIgADcDAEGgiwIgADcDAEGYiwIgADcDAEGQiwIgADcDAEGIiwIgADcDAEGAiwIgADcDAEH4igIgADcDAEHwigIgADcDAEHoigIgADcDAEHgigIgADcDAEHYigIgADcDAEHQigIgADcDAEHIigIgADcDAEHAigIgADcDAEG4igIgADcDAEGwigIgADcDAEGoigIgADcDAEGgigIgADcDAEGYigIgADcDAEGQigIgADcDAEGIigIgADcDAEGAigIgADcDAEH4iQIgADcDAEHwiQIgADcDAEHoiQIgADcDAEHgiQIgADcDAEHYiQIgADcDAEHQiQIgADcDAEHIiQIgADcDAEHAiQIgADcDAEG4iQIgADcDAEGwiQIgADcDAEGoCCgCACIEQf8AakGAAW0hCAJAIARBgQFIDQBBASEBIAhBAiAIQQJKG0EBayICQQFxIQMgBEGBAk4EQCACQX5xIQIDQCABQQl0IgdBEHJBoIkCakGwiQJBgAT8CgAAIAdBsI0CakGwiQJBgAT8CgAAIAFBAmohASACQQJrIgINAAsLIANFDQAgAUEJdEEQckGgiQJqQbCJAkGABPwKAAALAkAgBEEBSA0AIAhBASAIQQFKGyIDQQFxIQUCQCADQQFrIgdFBEBBACEBDAELIANB/v///wdxIQJBACEBA0AgAUEJdCIGQRByQbCJBmpBsIkCQYAE/AoAACAGQZAEckGwiQZqQbCJAkGABPwKAAAgAUECaiEBIAJBAmsiAg0ACwsgBQRAIAFBCXRBEHJBsIkGakGwiQJBgAT8CgAACyAEQQFIDQAgA0EBcSEFIAcEfyADQf7///8HcSECQQAhAQNAIAFBCXQiBkEQckHAiQpqQbCJAkGABPwKAAAgBkGQBHJBwIkKakGwiQJBgAT8CgAAIAFBAmohASACQQJrIgINAAsgAUEHdEEEcgVBBAshASAFBEAgAUECdEHAiQpqQbCJAkGABPwKAAALIARBAUgNACADQQFxIQUgBwR/IANB/v///wdxIQJBACEBA0AgAUEJdCIGQRByQdCJDmpBsIkCQYAE/AoAACAGQZAEckHQiQ5qQbCJAkGABPwKAAAgAUECaiEBIAJBAmsiAg0ACyABQQd0QQRyBUEECyEBIAUEQCABQQJ0QdCJ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" };
        }, 125: (A2, e2, t2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.IIPHandler = void 0;
          const i2 = t2(782), s = t2(216), r = t2(997), g = t2(769), a = t2(326), o = { name: "Unnamed file", size: 0, width: "auto", height: "auto", preserveAspectRatio: 1, inline: 0 };
          e2.IIPHandler = class {
            constructor(A3, e3, t3, i3) {
              this._opts = A3, this._renderer = e3, this._storage = t3, this._coreTerminal = i3, this._aborted = false, this._hp = new g.HeaderParser(), this._header = o, this._dec = new r.Base64Decoder(4194304), this._metrics = a.UNSUPPORTED_TYPE;
            }
            reset() {
            }
            start() {
              this._aborted = false, this._header = o, this._metrics = a.UNSUPPORTED_TYPE, this._hp.reset();
            }
            put(A3, e3, t3) {
              if (!this._aborted)
                if (4 === this._hp.state)
                  this._dec.put(A3, e3, t3) && (this._dec.release(), this._aborted = true);
                else {
                  const i3 = this._hp.parse(A3, e3, t3);
                  if (-1 === i3)
                    return void (this._aborted = true);
                  if (i3 > 0) {
                    if (this._header = Object.assign({}, o, this._hp.fields), !this._header.inline || !this._header.size || this._header.size > this._opts.iipSizeLimit)
                      return void (this._aborted = true);
                    this._dec.init(this._header.size), this._dec.put(A3, i3, t3) && (this._dec.release(), this._aborted = true);
                  }
                }
            }
            end(A3) {
              if (this._aborted)
                return true;
              let e3 = 0, t3 = 0, s2 = true;
              if ((s2 = A3) && (s2 = !this._dec.end()) && (this._metrics = (0, a.imageType)(this._dec.data8), (s2 = "unsupported" !== this._metrics.mime) && (e3 = this._metrics.width, t3 = this._metrics.height, (s2 = e3 && t3 && e3 * t3 < this._opts.pixelLimit) && ([e3, t3] = this._resize(e3, t3).map(Math.floor), s2 = e3 && t3 && e3 * t3 < this._opts.pixelLimit))), !s2)
                return this._dec.release(), true;
              const r2 = new Blob([this._dec.data8], { type: this._metrics.mime });
              this._dec.release();
              const g2 = this._coreTerminal._core._coreBrowserService.window;
              if (!g2.createImageBitmap) {
                const A4 = URL.createObjectURL(r2), s3 = new Image();
                return new Promise((r3) => {
                  s3.addEventListener("load", () => {
                    var a2;
                    URL.revokeObjectURL(A4);
                    const o2 = i2.ImageRenderer.createCanvas(g2, e3, t3);
                    null === (a2 = o2.getContext("2d")) || void 0 === a2 || a2.drawImage(s3, 0, 0, e3, t3), this._storage.addImage(o2), r3(true);
                  }), s3.src = A4, setTimeout(() => r3(true), 1e3);
                });
              }
              return g2.createImageBitmap(r2, { resizeWidth: e3, resizeHeight: t3 }).then((A4) => (this._storage.addImage(A4), true));
            }
            _resize(A3, e3) {
              var t3, i3, r2, g2;
              const a2 = (null === (t3 = this._renderer.dimensions) || void 0 === t3 ? void 0 : t3.css.cell.width) || s.CELL_SIZE_DEFAULT.width, o2 = (null === (i3 = this._renderer.dimensions) || void 0 === i3 ? void 0 : i3.css.cell.height) || s.CELL_SIZE_DEFAULT.height, h = (null === (r2 = this._renderer.dimensions) || void 0 === r2 ? void 0 : r2.css.canvas.width) || a2 * this._coreTerminal.cols, n = (null === (g2 = this._renderer.dimensions) || void 0 === g2 ? void 0 : g2.css.canvas.height) || o2 * this._coreTerminal.rows, I = this._dim(this._header.width, h, a2), C = this._dim(this._header.height, n, o2);
              if (!I && !C) {
                const t4 = h / A3, i4 = (n - o2) / e3, s2 = Math.min(t4, i4);
                return s2 < 1 ? [A3 * s2, e3 * s2] : [A3, e3];
              }
              return I ? !this._header.preserveAspectRatio && I && C ? [I, C] : [I, e3 * I / A3] : [A3 * C / e3, C];
            }
            _dim(A3, e3, t3) {
              return "auto" === A3 ? 0 : A3.endsWith("%") ? parseInt(A3.slice(0, -1)) * e3 / 100 : A3.endsWith("px") ? parseInt(A3.slice(0, -2)) : parseInt(A3) * t3;
            }
          };
        }, 769: (A2, e2) => {
          function t2(A3) {
            let e3 = "";
            for (let t3 = 0; t3 < A3.length; ++t3)
              e3 += String.fromCharCode(A3[t3]);
            return e3;
          }
          function i2(A3) {
            let e3 = 0;
            for (let t3 = 0; t3 < A3.length; ++t3) {
              if (A3[t3] < 48 || A3[t3] > 57)
                throw new Error("illegal char");
              e3 = 10 * e3 + A3[t3] - 48;
            }
            return e3;
          }
          function s(A3) {
            const e3 = t2(A3);
            if (!e3.match(/^((auto)|(\d+?((px)|(%)){0,1}))$/))
              throw new Error("illegal size");
            return e3;
          }
          Object.defineProperty(e2, "__esModule", { value: true }), e2.HeaderParser = void 0;
          const r = { inline: i2, size: i2, name: function(A3) {
            if ("undefined" != typeof Buffer)
              return Buffer.from(t2(A3), "base64").toString();
            const e3 = atob(t2(A3)), i3 = new Uint8Array(e3.length);
            for (let A4 = 0; A4 < i3.length; ++A4)
              i3[A4] = e3.charCodeAt(A4);
            return new TextDecoder().decode(i3);
          }, width: s, height: s, preserveAspectRatio: i2 }, g = [70, 105, 108, 101], a = 1024;
          e2.HeaderParser = class {
            constructor() {
              this.state = 0, this._buffer = new Uint32Array(a), this._position = 0, this._key = "", this.fields = {};
            }
            reset() {
              this._buffer.fill(0), this.state = 0, this._position = 0, this.fields = {}, this._key = "";
            }
            parse(A3, e3, t3) {
              let i3 = this.state, s2 = this._position;
              const r2 = this._buffer;
              if (1 === i3 || 4 === i3)
                return -1;
              if (0 === i3 && s2 > 6)
                return -1;
              for (let o = e3; o < t3; ++o) {
                const e4 = A3[o];
                switch (e4) {
                  case 59:
                    if (!this._storeValue(s2))
                      return this._a();
                    i3 = 2, s2 = 0;
                    break;
                  case 61:
                    if (0 === i3) {
                      for (let A4 = 0; A4 < g.length; ++A4)
                        if (r2[A4] !== g[A4])
                          return this._a();
                      i3 = 2, s2 = 0;
                    } else if (2 === i3) {
                      if (!this._storeKey(s2))
                        return this._a();
                      i3 = 3, s2 = 0;
                    } else if (3 === i3) {
                      if (s2 >= a)
                        return this._a();
                      r2[s2++] = e4;
                    }
                    break;
                  case 58:
                    return 3 !== i3 || this._storeValue(s2) ? (this.state = 4, o + 1) : this._a();
                  default:
                    if (s2 >= a)
                      return this._a();
                    r2[s2++] = e4;
                }
              }
              return this.state = i3, this._position = s2, -2;
            }
            _a() {
              return this.state = 1, -1;
            }
            _storeKey(A3) {
              const e3 = t2(this._buffer.subarray(0, A3));
              return !!e3 && (this._key = e3, this.fields[e3] = null, true);
            }
            _storeValue(A3) {
              if (this._key) {
                try {
                  const e3 = this._buffer.slice(0, A3);
                  this.fields[this._key] = r[this._key] ? r[this._key](e3) : e3;
                } catch (A4) {
                  return false;
                }
                return true;
              }
              return false;
            }
          };
        }, 326: (A2, e2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.imageType = e2.UNSUPPORTED_TYPE = void 0, e2.UNSUPPORTED_TYPE = { mime: "unsupported", width: 0, height: 0 }, e2.imageType = function(A3) {
            if (A3.length < 24)
              return e2.UNSUPPORTED_TYPE;
            const t2 = new Uint32Array(A3.buffer, A3.byteOffset, 6);
            if (1196314761 === t2[0] && 169478669 === t2[1] && 1380206665 === t2[3])
              return { mime: "image/png", width: A3[16] << 24 | A3[17] << 16 | A3[18] << 8 | A3[19], height: A3[20] << 24 | A3[21] << 16 | A3[22] << 8 | A3[23] };
            if ((3774863615 === t2[0] || 3791640831 === t2[0]) && (74 === A3[6] && 70 === A3[7] && 73 === A3[8] && 70 === A3[9] || 69 === A3[6] && 120 === A3[7] && 105 === A3[8] && 102 === A3[9])) {
              const [e3, t3] = function(A4) {
                const e4 = A4.length;
                let t4 = 4, i2 = A4[t4] << 8 | A4[t4 + 1];
                for (; ; ) {
                  if (t4 += i2, t4 >= e4)
                    return [0, 0];
                  if (255 !== A4[t4])
                    return [0, 0];
                  if (192 === A4[t4 + 1] || 194 === A4[t4 + 1])
                    return t4 + 8 < e4 ? [A4[t4 + 7] << 8 | A4[t4 + 8], A4[t4 + 5] << 8 | A4[t4 + 6]] : [0, 0];
                  t4 += 2, i2 = A4[t4] << 8 | A4[t4 + 1];
                }
              }(A3);
              return { mime: "image/jpeg", width: e3, height: t3 };
            }
            return 944130375 !== t2[0] || 55 !== A3[4] && 57 !== A3[4] || 97 !== A3[5] ? e2.UNSUPPORTED_TYPE : { mime: "image/gif", width: A3[7] << 8 | A3[6], height: A3[9] << 8 | A3[8] };
          };
        }, 782: (A2, e2, t2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.ImageRenderer = void 0;
          const i2 = t2(477);
          class s {
            constructor(A3, e3) {
              this._terminal = A3, this._showPlaceholder = e3, this._oldOpen = this._terminal._core.open, this._terminal._core.open = (A4) => {
                var e4;
                null === (e4 = this._oldOpen) || void 0 === e4 || e4.call(this._terminal._core, A4), this._open();
              }, this._terminal._core.screenElement && this._open(), this._optionsRefresh = this._terminal._core.optionsService.onOptionChange((A4) => {
                var e4;
                "fontSize" === A4 && (this.rescaleCanvas(), null === (e4 = this._renderService) || void 0 === e4 || e4.refreshRows(0, this._terminal.rows));
              });
            }
            static createCanvas(A3, e3, t3) {
              const i3 = A3.document.createElement("canvas");
              return i3.width = 0 | e3, i3.height = 0 | t3, i3;
            }
            static createImageData(A3, e3, t3, i3) {
              if ("function" != typeof ImageData) {
                const s2 = A3.createImageData(e3, t3);
                return i3 && s2.data.set(new Uint8ClampedArray(i3, 0, e3 * t3 * 4)), s2;
              }
              return i3 ? new ImageData(new Uint8ClampedArray(i3, 0, e3 * t3 * 4), e3, t3) : new ImageData(e3, t3);
            }
            static createImageBitmap(A3) {
              return "function" != typeof createImageBitmap ? Promise.resolve(void 0) : createImageBitmap(A3);
            }
            dispose() {
              var A3, e3;
              null === (A3 = this._optionsRefresh) || void 0 === A3 || A3.dispose(), this._removeLayerFromDom(), this._terminal._core && this._oldOpen && (this._terminal._core.open = this._oldOpen, this._oldOpen = void 0), this._renderService && this._oldSetRenderer && (this._renderService.setRenderer = this._oldSetRenderer, this._oldSetRenderer = void 0), this._renderService = void 0, this.canvas = void 0, this._ctx = void 0, null === (e3 = this._placeholderBitmap) || void 0 === e3 || e3.close(), this._placeholderBitmap = void 0, this._placeholder = void 0;
            }
            showPlaceholder(A3) {
              var e3, t3;
              A3 ? this._placeholder || -1 === this.cellSize.height || this._createPlaceHolder(Math.max(this.cellSize.height + 1, 24)) : (null === (e3 = this._placeholderBitmap) || void 0 === e3 || e3.close(), this._placeholderBitmap = void 0, this._placeholder = void 0), null === (t3 = this._renderService) || void 0 === t3 || t3.refreshRows(0, this._terminal.rows);
            }
            get dimensions() {
              var A3;
              return null === (A3 = this._renderService) || void 0 === A3 ? void 0 : A3.dimensions;
            }
            get cellSize() {
              var A3, e3;
              return { width: (null === (A3 = this.dimensions) || void 0 === A3 ? void 0 : A3.css.cell.width) || -1, height: (null === (e3 = this.dimensions) || void 0 === e3 ? void 0 : e3.css.cell.height) || -1 };
            }
            clearLines(A3, e3) {
              var t3, i3, s2, r;
              null === (t3 = this._ctx) || void 0 === t3 || t3.clearRect(0, A3 * ((null === (i3 = this.dimensions) || void 0 === i3 ? void 0 : i3.css.cell.height) || 0), (null === (s2 = this.dimensions) || void 0 === s2 ? void 0 : s2.css.canvas.width) || 0, (++e3 - A3) * ((null === (r = this.dimensions) || void 0 === r ? void 0 : r.css.cell.height) || 0));
            }
            clearAll() {
              var A3, e3, t3;
              null === (A3 = this._ctx) || void 0 === A3 || A3.clearRect(0, 0, (null === (e3 = this.canvas) || void 0 === e3 ? void 0 : e3.width) || 0, (null === (t3 = this.canvas) || void 0 === t3 ? void 0 : t3.height) || 0);
            }
            draw(A3, e3, t3, i3, s2 = 1) {
              if (!this._ctx)
                return;
              const { width: r, height: g } = this.cellSize;
              if (-1 === r || -1 === g)
                return;
              this._rescaleImage(A3, r, g);
              const a = A3.actual, o = Math.ceil(a.width / r), h = e3 % o * r, n = Math.floor(e3 / o) * g, I = t3 * r, C = i3 * g, B = s2 * r + h > a.width ? a.width - h : s2 * r, l = n + g > a.height ? a.height - n : g;
              this._ctx.drawImage(a, Math.floor(h), Math.floor(n), Math.ceil(B), Math.ceil(l), Math.floor(I), Math.floor(C), Math.ceil(B), Math.ceil(l));
            }
            extractTile(A3, e3) {
              const { width: t3, height: i3 } = this.cellSize;
              if (-1 === t3 || -1 === i3)
                return;
              this._rescaleImage(A3, t3, i3);
              const r = A3.actual, g = Math.ceil(r.width / t3), a = e3 % g * t3, o = Math.floor(e3 / g) * i3, h = t3 + a > r.width ? r.width - a : t3, n = o + i3 > r.height ? r.height - o : i3, I = s.createCanvas(this._terminal._core._coreBrowserService.window, h, n), C = I.getContext("2d");
              return C ? (C.drawImage(r, Math.floor(a), Math.floor(o), Math.floor(h), Math.floor(n), 0, 0, Math.floor(h), Math.floor(n)), I) : void 0;
            }
            drawPlaceholder(A3, e3, t3 = 1) {
              if ((this._placeholderBitmap || this._placeholder) && this._ctx) {
                const { width: i3, height: s2 } = this.cellSize;
                if (-1 === i3 || -1 === s2)
                  return;
                s2 >= this._placeholder.height && this._createPlaceHolder(s2 + 1), this._ctx.drawImage(this._placeholderBitmap || this._placeholder, A3 * i3, e3 * s2 % 2 ? 0 : 1, i3 * t3, s2, A3 * i3, e3 * s2, i3 * t3, s2);
              }
            }
            rescaleCanvas() {
              this.canvas && (this.canvas.width === this.dimensions.css.canvas.width && this.canvas.height === this.dimensions.css.canvas.height || (this.canvas.width = this.dimensions.css.canvas.width || 0, this.canvas.height = this.dimensions.css.canvas.height || 0));
            }
            _rescaleImage(A3, e3, t3) {
              if (e3 === A3.actualCellSize.width && t3 === A3.actualCellSize.height)
                return;
              const { width: i3, height: r } = A3.origCellSize;
              if (e3 === i3 && t3 === r)
                return A3.actual = A3.orig, A3.actualCellSize.width = i3, void (A3.actualCellSize.height = r);
              const g = s.createCanvas(this._terminal._core._coreBrowserService.window, Math.ceil(A3.orig.width * e3 / i3), Math.ceil(A3.orig.height * t3 / r)), a = g.getContext("2d");
              a && (a.drawImage(A3.orig, 0, 0, g.width, g.height), A3.actual = g, A3.actualCellSize.width = e3, A3.actualCellSize.height = t3);
            }
            _open() {
              this._renderService = this._terminal._core._renderService, this._oldSetRenderer = this._renderService.setRenderer.bind(this._renderService), this._renderService.setRenderer = (A3) => {
                var e3;
                this._removeLayerFromDom(), null === (e3 = this._oldSetRenderer) || void 0 === e3 || e3.call(this._renderService, A3), this._insertLayerToDom();
              }, this._insertLayerToDom(), this._showPlaceholder && this._createPlaceHolder();
            }
            _insertLayerToDom() {
              var A3, e3, t3;
              this.canvas = s.createCanvas(this._terminal._core._coreBrowserService.window, (null === (A3 = this.dimensions) || void 0 === A3 ? void 0 : A3.css.canvas.width) || 0, (null === (e3 = this.dimensions) || void 0 === e3 ? void 0 : e3.css.canvas.height) || 0), this.canvas.classList.add("xterm-image-layer"), null === (t3 = this._terminal._core.screenElement) || void 0 === t3 || t3.appendChild(this.canvas), this._ctx = this.canvas.getContext("2d", { alpha: true, desynchronized: true });
            }
            _removeLayerFromDom() {
              var A3, e3;
              null === (e3 = null === (A3 = this.canvas) || void 0 === A3 ? void 0 : A3.parentNode) || void 0 === e3 || e3.removeChild(this.canvas);
            }
            _createPlaceHolder(A3 = 24) {
              var e3;
              null === (e3 = this._placeholderBitmap) || void 0 === e3 || e3.close(), this._placeholderBitmap = void 0;
              const t3 = 32, r = s.createCanvas(this._terminal._core._coreBrowserService.window, t3, A3), g = r.getContext("2d", { alpha: false });
              if (!g)
                return;
              const a = s.createImageData(g, t3, A3), o = new Uint32Array(a.data.buffer), h = (0, i2.toRGBA8888)(0, 0, 0), n = (0, i2.toRGBA8888)(255, 255, 255);
              o.fill(h);
              for (let e4 = 0; e4 < A3; ++e4) {
                const A4 = e4 % 2, i3 = e4 * t3;
                for (let e5 = 0; e5 < t3; e5 += 2)
                  o[i3 + e5 + A4] = n;
              }
              g.putImageData(a, 0, 0);
              const I = screen.width + t3 - 1 & -32 || 4096;
              this._placeholder = s.createCanvas(this._terminal._core._coreBrowserService.window, I, A3);
              const C = this._placeholder.getContext("2d", { alpha: false });
              if (C) {
                for (let A4 = 0; A4 < I; A4 += t3)
                  C.drawImage(r, A4, 0);
                s.createImageBitmap(this._placeholder).then((A4) => this._placeholderBitmap = A4);
              } else
                this._placeholder = void 0;
            }
          }
          e2.ImageRenderer = s;
        }, 216: (A2, e2, t2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.ImageStorage = e2.CELL_SIZE_DEFAULT = void 0;
          const i2 = t2(782);
          e2.CELL_SIZE_DEFAULT = { width: 7, height: 14 };
          class s {
            constructor(A3 = 0, e3 = 0, t3 = -1, i3 = -1) {
              this.imageId = t3, this.tileId = i3, this._ext = 0, this._urlId = 0, this._ext = A3, this._urlId = e3;
            }
            get ext() {
              return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
            }
            set ext(A3) {
              this._ext = A3;
            }
            get underlineStyle() {
              return this._urlId ? 5 : (469762048 & this._ext) >> 26;
            }
            set underlineStyle(A3) {
              this._ext &= -469762049, this._ext |= A3 << 26 & 469762048;
            }
            get underlineColor() {
              return 67108863 & this._ext;
            }
            set underlineColor(A3) {
              this._ext &= -67108864, this._ext |= 67108863 & A3;
            }
            get urlId() {
              return this._urlId;
            }
            set urlId(A3) {
              this._urlId = A3;
            }
            clone() {
              return new s(this._ext, this._urlId, this.imageId, this.tileId);
            }
            isEmpty() {
              return 0 === this.underlineStyle && 0 === this._urlId && -1 === this.imageId;
            }
          }
          const r = new s();
          e2.ImageStorage = class {
            constructor(A3, e3, t3) {
              this._terminal = A3, this._renderer = e3, this._opts = t3, this._images = /* @__PURE__ */ new Map(), this._lastId = 0, this._lowestId = 0, this._fullyCleared = false, this._needsFullClear = false, this._pixelLimit = 25e5;
              try {
                this.setLimit(this._opts.storageLimit);
              } catch (A4) {
                console.error(A4.message), console.warn(`storageLimit is set to ${this.getLimit()} MB`);
              }
              this._viewportMetrics = { cols: this._terminal.cols, rows: this._terminal.rows };
            }
            dispose() {
              this.reset();
            }
            reset() {
              var A3;
              for (const e3 of this._images.values())
                null === (A3 = e3.marker) || void 0 === A3 || A3.dispose();
              this._images.clear(), this._renderer.clearAll();
            }
            getLimit() {
              return 4 * this._pixelLimit / 1e6;
            }
            setLimit(A3) {
              if (A3 < 1 || A3 > 1e3)
                throw RangeError("invalid storageLimit, should be at least 1 MB and not exceed 1G");
              this._pixelLimit = A3 / 4 * 1e6 >>> 0, this._evictOldest(0);
            }
            getUsage() {
              return 4 * this._getStoredPixels() / 1e6;
            }
            _getStoredPixels() {
              let A3 = 0;
              for (const e3 of this._images.values())
                e3.orig && (A3 += e3.orig.width * e3.orig.height, e3.actual && e3.actual !== e3.orig && (A3 += e3.actual.width * e3.actual.height));
              return A3;
            }
            _delImg(A3) {
              const e3 = this._images.get(A3);
              this._images.delete(A3);
              const t3 = this._terminal._core._coreBrowserService.window;
              e3 && t3.ImageBitmap && e3.orig instanceof ImageBitmap && e3.orig.close();
            }
            wipeAlternate() {
              var A3;
              const e3 = [];
              for (const [t3, i3] of this._images.entries())
                "alternate" === i3.bufferType && (null === (A3 = i3.marker) || void 0 === A3 || A3.dispose(), e3.push(t3));
              for (const A4 of e3)
                this._delImg(A4);
              this._needsFullClear = true, this._fullyCleared = false;
            }
            advanceCursor(A3) {
              if (this._opts.sixelScrolling) {
                let t3 = this._renderer.cellSize;
                -1 !== t3.width && -1 !== t3.height || (t3 = e2.CELL_SIZE_DEFAULT);
                const i3 = Math.ceil(A3 / t3.height);
                for (let A4 = 1; A4 < i3; ++A4)
                  this._terminal._core._inputHandler.lineFeed();
              }
            }
            addImage(A3) {
              var t3;
              this._evictOldest(A3.width * A3.height);
              let i3 = this._renderer.cellSize;
              -1 !== i3.width && -1 !== i3.height || (i3 = e2.CELL_SIZE_DEFAULT);
              const s2 = Math.ceil(A3.width / i3.width), r2 = Math.ceil(A3.height / i3.height), g = ++this._lastId, a = this._terminal._core.buffer, o = this._terminal.cols, h = this._terminal.rows, n = a.x, I = a.y;
              let C = n, B = 0;
              this._opts.sixelScrolling || (a.x = 0, a.y = 0, C = 0), this._terminal._core._inputHandler._dirtyRowTracker.markDirty(a.y);
              for (let A4 = 0; A4 < r2; ++A4) {
                const e3 = a.lines.get(a.y + a.ybase);
                for (let t4 = 0; t4 < s2 && !(C + t4 >= o); ++t4)
                  this._writeToCell(e3, C + t4, g, A4 * s2 + t4), B++;
                if (this._opts.sixelScrolling)
                  A4 < r2 - 1 && this._terminal._core._inputHandler.lineFeed();
                else if (++a.y >= h)
                  break;
                a.x = C;
              }
              this._terminal._core._inputHandler._dirtyRowTracker.markDirty(a.y), this._opts.sixelScrolling ? a.x = C : (a.x = n, a.y = I);
              const l = [];
              for (const [A4, e3] of this._images.entries())
                e3.tileCount < 1 && (null === (t3 = e3.marker) || void 0 === t3 || t3.dispose(), l.push(A4));
              for (const A4 of l)
                this._delImg(A4);
              const Q = this._terminal.registerMarker(0);
              null == Q || Q.onDispose(() => {
                this._images.get(g) && this._delImg(g);
              }), "alternate" === this._terminal.buffer.active.type && this._evictOnAlternate();
              const c = { orig: A3, origCellSize: i3, actual: A3, actualCellSize: Object.assign({}, i3), marker: Q || void 0, tileCount: B, bufferType: this._terminal.buffer.active.type };
              this._images.set(g, c);
            }
            render(A3) {
              if (!this._renderer.canvas)
                return;
              if (!this._images.size)
                return void (this._fullyCleared || (this._renderer.clearAll(), this._fullyCleared = true, this._needsFullClear = false));
              this._needsFullClear && (this._renderer.clearAll(), this._fullyCleared = true, this._needsFullClear = false);
              const { start: e3, end: t3 } = A3, i3 = this._terminal._core.buffer, s2 = this._terminal._core.cols;
              this._renderer.clearLines(e3, t3), this._renderer.rescaleCanvas();
              for (let A4 = e3; A4 <= t3; ++A4) {
                const e4 = i3.lines.get(A4 + i3.ydisp);
                if (!e4)
                  return;
                for (let t4 = 0; t4 < s2; ++t4)
                  if (268435456 & e4.getBg(t4)) {
                    let i4 = e4._extendedAttrs[t4] || r;
                    const g = i4.imageId;
                    if (void 0 === g || -1 === g)
                      continue;
                    const a = this._images.get(g);
                    if (-1 !== i4.tileId) {
                      const o = i4.tileId, h = t4;
                      let n = 1;
                      for (; ++t4 < s2 && 268435456 & e4.getBg(t4) && (i4 = e4._extendedAttrs[t4] || r) && i4.imageId === g && i4.tileId === o + n; )
                        n++;
                      t4--, a ? a.actual && this._renderer.draw(a, o, h, A4, n) : this._opts.showPlaceholder && this._renderer.drawPlaceholder(h, A4, n), this._fullyCleared = false;
                    }
                  }
              }
            }
            viewportResize(A3) {
              var e3;
              if (!this._images.size)
                return void (this._viewportMetrics = A3);
              if (this._viewportMetrics.cols >= A3.cols)
                return void (this._viewportMetrics = A3);
              const t3 = this._terminal._core.buffer, i3 = t3.lines.length, s2 = this._viewportMetrics.cols - 1;
              for (let g = 0; g < i3; ++g) {
                const i4 = t3.lines.get(g);
                if (268435456 & i4.getBg(s2)) {
                  const t4 = i4._extendedAttrs[s2] || r, g2 = t4.imageId;
                  if (void 0 === g2 || -1 === g2)
                    continue;
                  const a = this._images.get(g2);
                  if (!a)
                    continue;
                  const o = Math.ceil(((null === (e3 = a.actual) || void 0 === e3 ? void 0 : e3.width) || 0) / a.actualCellSize.width);
                  if (t4.tileId % o + 1 >= o)
                    continue;
                  let h = false;
                  for (let e4 = s2 + 1; e4 > A3.cols; ++e4)
                    if (4194303 & i4._data[3 * e4 + 0]) {
                      h = true;
                      break;
                    }
                  if (h)
                    continue;
                  const n = Math.min(A3.cols, o - t4.tileId % o + s2);
                  let I = t4.tileId;
                  for (let A4 = s2 + 1; A4 < n; ++A4)
                    this._writeToCell(i4, A4, g2, ++I), a.tileCount++;
                }
              }
              this._viewportMetrics = A3;
            }
            getImageAtBufferCell(A3, e3) {
              var t3, s2;
              const g = this._terminal._core.buffer.lines.get(e3);
              if (g && 268435456 & g.getBg(A3)) {
                const e4 = g._extendedAttrs[A3] || r;
                if (e4.imageId && -1 !== e4.imageId) {
                  const A4 = null === (t3 = this._images.get(e4.imageId)) || void 0 === t3 ? void 0 : t3.orig, r2 = this._terminal._core._coreBrowserService.window;
                  if (r2.ImageBitmap && A4 instanceof ImageBitmap) {
                    const e5 = i2.ImageRenderer.createCanvas(r2, A4.width, A4.height);
                    return null === (s2 = e5.getContext("2d")) || void 0 === s2 || s2.drawImage(A4, 0, 0, A4.width, A4.height), e5;
                  }
                  return A4;
                }
              }
            }
            extractTileAtBufferCell(A3, e3) {
              const t3 = this._terminal._core.buffer.lines.get(e3);
              if (t3 && 268435456 & t3.getBg(A3)) {
                const e4 = t3._extendedAttrs[A3] || r;
                if (e4.imageId && -1 !== e4.imageId && -1 !== e4.tileId) {
                  const A4 = this._images.get(e4.imageId);
                  if (A4)
                    return this._renderer.extractTile(A4, e4.tileId);
                }
              }
            }
            _evictOldest(A3) {
              var e3;
              const t3 = this._getStoredPixels();
              let i3 = t3;
              for (; this._pixelLimit < i3 + A3 && this._images.size; ) {
                const A4 = this._images.get(++this._lowestId);
                A4 && A4.orig && (i3 -= A4.orig.width * A4.orig.height, A4.actual && A4.orig !== A4.actual && (i3 -= A4.actual.width * A4.actual.height), null === (e3 = A4.marker) || void 0 === e3 || e3.dispose(), this._delImg(this._lowestId));
              }
              return t3 - i3;
            }
            _writeToCell(A3, e3, t3, i3) {
              if (268435456 & A3._data[3 * e3 + 2]) {
                const r2 = A3._extendedAttrs[e3];
                if (r2) {
                  if (void 0 !== r2.imageId) {
                    const A4 = this._images.get(r2.imageId);
                    return A4 && A4.tileCount--, r2.imageId = t3, void (r2.tileId = i3);
                  }
                  return void (A3._extendedAttrs[e3] = new s(r2.ext, r2.urlId, t3, i3));
                }
              }
              A3._data[3 * e3 + 2] |= 268435456, A3._extendedAttrs[e3] = new s(0, 0, t3, i3);
            }
            _evictOnAlternate() {
              var A3, e3;
              for (const A4 of this._images.values())
                "alternate" === A4.bufferType && (A4.tileCount = 0);
              const t3 = this._terminal._core.buffer;
              for (let e4 = 0; e4 < this._terminal.rows; ++e4) {
                const i4 = t3.lines.get(e4);
                if (i4) {
                  for (let e5 = 0; e5 < this._terminal.cols; ++e5)
                    if (268435456 & i4._data[3 * e5 + 2]) {
                      const t4 = null === (A3 = i4._extendedAttrs[e5]) || void 0 === A3 ? void 0 : A3.imageId;
                      if (t4) {
                        const A4 = this._images.get(t4);
                        A4 && A4.tileCount++;
                      }
                    }
                }
              }
              const i3 = [];
              for (const [A4, t4] of this._images.entries())
                "alternate" !== t4.bufferType || t4.tileCount || (null === (e3 = t4.marker) || void 0 === e3 || e3.dispose(), i3.push(A4));
              for (const A4 of i3)
                this._delImg(A4);
            }
          };
        }, 973: (A2, e2, t2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.SixelHandler = void 0;
          const i2 = t2(477), s = t2(782), r = t2(710), g = i2.PALETTE_ANSI_256;
          function a(A3) {
            return i2.BIG_ENDIAN ? A3 : (255 & A3) << 24 | (A3 >>> 8 & 255) << 16 | (A3 >>> 16 & 255) << 8 | A3 >>> 24 & 255;
          }
          g.set(i2.PALETTE_VT340_COLOR), e2.SixelHandler = class {
            constructor(A3, e3, t3) {
              this._opts = A3, this._storage = e3, this._coreTerminal = t3, this._size = 0, this._aborted = false, (0, r.DecoderAsync)({ memoryLimit: 4 * this._opts.pixelLimit, palette: g, paletteLimit: this._opts.sixelPaletteLimit }).then((A4) => this._dec = A4);
            }
            reset() {
              this._dec && (this._dec.release(), this._dec._palette.fill(0), this._dec.init(0, g, this._opts.sixelPaletteLimit));
            }
            hook(A3) {
              if (this._size = 0, this._aborted = false, this._dec) {
                const e3 = 1 === A3.params[1] ? 0 : function(A4, e4) {
                  let t3 = 0;
                  if (A4.isInverse())
                    if (A4.isFgDefault())
                      t3 = a(e4.foreground.rgba);
                    else if (A4.isFgRGB()) {
                      const e5 = A4.constructor.toColorRGB(A4.getFgColor());
                      t3 = (0, i2.toRGBA8888)(...e5);
                    } else
                      t3 = a(e4.ansi[A4.getFgColor()].rgba);
                  else if (A4.isBgDefault())
                    t3 = a(e4.background.rgba);
                  else if (A4.isBgRGB()) {
                    const e5 = A4.constructor.toColorRGB(A4.getBgColor());
                    t3 = (0, i2.toRGBA8888)(...e5);
                  } else
                    t3 = a(e4.ansi[A4.getBgColor()].rgba);
                  return t3;
                }(this._coreTerminal._core._inputHandler._curAttrData, this._coreTerminal._core._themeService.colors);
                this._dec.init(e3, null, this._opts.sixelPaletteLimit);
              }
            }
            put(A3, e3, t3) {
              if (!this._aborted && this._dec) {
                if (this._size += t3 - e3, this._size > this._opts.sixelSizeLimit)
                  return console.warn("SIXEL: too much data, aborting"), this._aborted = true, void this._dec.release();
                try {
                  this._dec.decode(A3, e3, t3);
                } catch (A4) {
                  console.warn(`SIXEL: error while decoding image - ${A4}`), this._aborted = true, this._dec.release();
                }
              }
            }
            unhook(A3) {
              var e3;
              if (this._aborted || !A3 || !this._dec)
                return true;
              const t3 = this._dec.width, i3 = this._dec.height;
              if (!t3 || !i3)
                return i3 && this._storage.advanceCursor(i3), true;
              const r2 = s.ImageRenderer.createCanvas(this._coreTerminal._core._coreBrowserService.window, t3, i3);
              return null === (e3 = r2.getContext("2d")) || void 0 === e3 || e3.putImageData(new ImageData(this._dec.data8, t3, i3), 0, 0), this._dec.memoryUsage > 4194304 && this._dec.release(), this._storage.addImage(r2), true;
            }
          };
        }, 997: (A2, e2, t2) => {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.Base64Decoder = void 0;
          const i2 = (0, t2(615).InWasm)({ s: 1, t: 0, d: "AGFzbQEAAAABBQFgAAF/Ag8BA2VudgZtZW1vcnkCAAEDAwIAAAcNAgNkZWMAAANlbmQAAQqxAwKuAQEFf0GIKCgCAEGgKGohAUGEKCgCACIAQYAoKAIAQQFrQXxxIgJIBEAgAkGgKGohAyAAQaAoaiEAA0AgAC0AA0ECdCgCgCAgAC0AAkECdCgCgBggAC0AAUECdCgCgBAgAC0AAEECdCgCgAhycnIiBEH///8HSwRAQQEPCyABIAQ2AgAgAUEDaiEBIABBBGoiACADSQ0ACwtBhCggAjYCAEGIKCABQaAoazYCAEEAC/4BAQZ/AkBBgCgoAgAiAUGEKCgCACIAa0EFTgRAQQEhAxAADQFBgCgoAgAhAUGEKCgCACEAC0EBIQMgASAAayIEQQJIDQAgAEGhKGotAABBAnQoAoAQIABBoChqLQAAQQJ0KAKACHIhAQJAIARBAkYEQEEBIQIMAQtBASECIAAtAKIoIgVBPUcEQEECIQIgBUECdCgCgBggAXIhAQsgBEEERw0AIAAtAKMoIgBBPUYNACACQQFqIQIgAEECdCgCgCAgAXIhAQsgAUH///8HSw0AQYgoKAIAQaAoaiABNgIAQYgoQYgoKAIAIAJqIgA2AgAgAEGQKCgCAEchAwsgAwsAdglwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQEFY2xhbmdWMTcuMC4wIChodHRwczovL2dpdGh1Yi5jb20vbGx2bS9sbHZtLXByb2plY3QgODg0MjFlYTk3MzkxNmU2MGMzNGJlYjI2NTk3YTVmYzMzZjgzZGQ4ZikALA90YXJnZXRfZmVhdHVyZXMCKw9tdXRhYmxlLWdsb2JhbHMrCHNpZ24tZXh0" }), s = new Uint8Array("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").map((A3) => A3.charCodeAt(0))), r = new Uint32Array(1024);
          r.fill(4278190080);
          for (let A3 = 0; A3 < s.length; ++A3)
            r[s[A3]] = A3 << 2;
          for (let A3 = 0; A3 < s.length; ++A3)
            r[256 + s[A3]] = A3 >> 4 | (A3 << 4 & 255) << 8;
          for (let A3 = 0; A3 < s.length; ++A3)
            r[512 + s[A3]] = A3 >> 2 << 8 | (A3 << 6 & 255) << 16;
          for (let A3 = 0; A3 < s.length; ++A3)
            r[768 + s[A3]] = A3 << 16;
          const g = new Uint8Array(0);
          e2.Base64Decoder = class {
            constructor(A3) {
              this.keepSize = A3;
            }
            get data8() {
              return this._inst ? this._d.subarray(0, this._m32[1282]) : g;
            }
            release() {
              this._inst && (this._mem.buffer.byteLength > this.keepSize ? this._inst = this._m32 = this._d = this._mem = null : (this._m32[1280] = 0, this._m32[1281] = 0, this._m32[1282] = 0));
            }
            init(A3) {
              let e3 = this._m32;
              const t3 = 4 * (Math.ceil(A3 / 3) + 1288);
              this._inst ? this._mem.buffer.byteLength < t3 && (this._mem.grow(Math.ceil((t3 - this._mem.buffer.byteLength) / 65536)), e3 = new Uint32Array(this._mem.buffer, 0), this._d = new Uint8Array(this._mem.buffer, 5152)) : (this._mem = new WebAssembly.Memory({ initial: Math.ceil(t3 / 65536) }), this._inst = i2({ env: { memory: this._mem } }), e3 = new Uint32Array(this._mem.buffer, 0), e3.set(r, 256), this._d = new Uint8Array(this._mem.buffer, 5152)), e3[1284] = A3, e3[1283] = 4 * Math.ceil(A3 / 3), e3[1280] = 0, e3[1281] = 0, e3[1282] = 0, this._m32 = e3;
            }
            put(A3, e3, t3) {
              if (!this._inst)
                return 1;
              const i3 = this._m32;
              return t3 - e3 + i3[1280] > i3[1283] ? 1 : (this._d.set(A3.subarray(e3, t3), i3[1280]), i3[1280] += t3 - e3, i3[1280] - i3[1281] >= 131072 ? this._inst.exports.dec() : 0);
            }
            end() {
              return this._inst ? this._inst.exports.end() : 1;
            }
          };
        } }, e = {};
        function t(i2) {
          var s = e[i2];
          if (void 0 !== s)
            return s.exports;
          var r = e[i2] = { exports: {} };
          return A[i2](r, r.exports, t), r.exports;
        }
        var i = {};
        return (() => {
          var A2 = i;
          Object.defineProperty(A2, "__esModule", { value: true }), A2.ImageAddon = void 0;
          const e2 = t(125), s = t(782), r = t(216), g = t(973), a = { enableSizeReports: true, pixelLimit: 16777216, sixelSupport: true, sixelScrolling: true, sixelPaletteLimit: 256, sixelSizeLimit: 25e6, storageLimit: 128, showPlaceholder: true, iipSupport: true, iipSizeLimit: 2e7 };
          A2.ImageAddon = class {
            constructor(A3) {
              this._disposables = [], this._handlers = /* @__PURE__ */ new Map(), this._opts = Object.assign({}, a, A3), this._defaultOpts = Object.assign({}, a, A3);
            }
            dispose() {
              for (const A3 of this._disposables)
                A3.dispose();
              this._disposables.length = 0, this._handlers.clear();
            }
            _disposeLater(...A3) {
              for (const e3 of A3)
                this._disposables.push(e3);
            }
            activate(A3) {
              if (this._terminal = A3, this._renderer = new s.ImageRenderer(A3, this._opts.showPlaceholder), this._storage = new r.ImageStorage(A3, this._renderer, this._opts), this._opts.enableSizeReports) {
                const e3 = A3.options.windowOptions || {};
                e3.getWinSizePixels = true, e3.getCellSizePixels = true, e3.getWinSizeChars = true, A3.options.windowOptions = e3;
              }
              if (this._disposeLater(this._renderer, this._storage, A3.parser.registerCsiHandler({ prefix: "?", final: "h" }, (A4) => this._decset(A4)), A3.parser.registerCsiHandler({ prefix: "?", final: "l" }, (A4) => this._decrst(A4)), A3.parser.registerCsiHandler({ final: "c" }, (A4) => this._da1(A4)), A3.parser.registerCsiHandler({ prefix: "?", final: "S" }, (A4) => this._xtermGraphicsAttributes(A4)), A3.onRender((A4) => {
                var e3;
                return null === (e3 = this._storage) || void 0 === e3 ? void 0 : e3.render(A4);
              }), A3.parser.registerCsiHandler({ intermediates: "!", final: "p" }, () => this.reset()), A3.parser.registerEscHandler({ final: "c" }, () => this.reset()), A3._core._inputHandler.onRequestReset(() => this.reset()), A3.buffer.onBufferChange(() => {
                var A4;
                return null === (A4 = this._storage) || void 0 === A4 ? void 0 : A4.wipeAlternate();
              }), A3.onResize((A4) => {
                var e3;
                return null === (e3 = this._storage) || void 0 === e3 ? void 0 : e3.viewportResize(A4);
              })), this._opts.sixelSupport) {
                const e3 = new g.SixelHandler(this._opts, this._storage, A3);
                this._handlers.set("sixel", e3), this._disposeLater(A3._core._inputHandler._parser.registerDcsHandler({ final: "q" }, e3));
              }
              if (this._opts.iipSupport) {
                const t2 = new e2.IIPHandler(this._opts, this._renderer, this._storage, A3);
                this._handlers.set("iip", t2), this._disposeLater(A3._core._inputHandler._parser.registerOscHandler(1337, t2));
              }
            }
            reset() {
              var A3;
              this._opts.sixelScrolling = this._defaultOpts.sixelScrolling, this._opts.sixelPaletteLimit = this._defaultOpts.sixelPaletteLimit, null === (A3 = this._storage) || void 0 === A3 || A3.reset();
              for (const A4 of this._handlers.values())
                A4.reset();
              return false;
            }
            get storageLimit() {
              var A3;
              return (null === (A3 = this._storage) || void 0 === A3 ? void 0 : A3.getLimit()) || -1;
            }
            set storageLimit(A3) {
              var e3;
              null === (e3 = this._storage) || void 0 === e3 || e3.setLimit(A3), this._opts.storageLimit = A3;
            }
            get storageUsage() {
              return this._storage ? this._storage.getUsage() : -1;
            }
            get showPlaceholder() {
              return this._opts.showPlaceholder;
            }
            set showPlaceholder(A3) {
              var e3;
              this._opts.showPlaceholder = A3, null === (e3 = this._renderer) || void 0 === e3 || e3.showPlaceholder(A3);
            }
            getImageAtBufferCell(A3, e3) {
              var t2;
              return null === (t2 = this._storage) || void 0 === t2 ? void 0 : t2.getImageAtBufferCell(A3, e3);
            }
            extractTileAtBufferCell(A3, e3) {
              var t2;
              return null === (t2 = this._storage) || void 0 === t2 ? void 0 : t2.extractTileAtBufferCell(A3, e3);
            }
            _report(A3) {
              var e3;
              null === (e3 = this._terminal) || void 0 === e3 || e3._core.coreService.triggerDataEvent(A3);
            }
            _decset(A3) {
              for (let e3 = 0; e3 < A3.length; ++e3)
                80 === A3[e3] && (this._opts.sixelScrolling = false);
              return false;
            }
            _decrst(A3) {
              for (let e3 = 0; e3 < A3.length; ++e3)
                80 === A3[e3] && (this._opts.sixelScrolling = true);
              return false;
            }
            _da1(A3) {
              return !!A3[0] || !!this._opts.sixelSupport && (this._report("\x1B[?62;4;9;22c"), true);
            }
            _xtermGraphicsAttributes(A3) {
              var e3, t2, i2, s2, g2, a2;
              if (A3.length < 2)
                return true;
              if (1 === A3[0])
                switch (A3[1]) {
                  case 1:
                    return this._report(`\x1B[?${A3[0]};0;${this._opts.sixelPaletteLimit}S`), true;
                  case 2:
                    this._opts.sixelPaletteLimit = this._defaultOpts.sixelPaletteLimit, this._report(`\x1B[?${A3[0]};0;${this._opts.sixelPaletteLimit}S`);
                    for (const A4 of this._handlers.values())
                      A4.reset();
                    return true;
                  case 3:
                    return A3.length > 2 && !(A3[2] instanceof Array) && A3[2] <= 4096 ? (this._opts.sixelPaletteLimit = A3[2], this._report(`\x1B[?${A3[0]};0;${this._opts.sixelPaletteLimit}S`)) : this._report(`\x1B[?${A3[0]};2S`), true;
                  case 4:
                    return this._report(`\x1B[?${A3[0]};0;4096S`), true;
                  default:
                    return this._report(`\x1B[?${A3[0]};2S`), true;
                }
              if (2 === A3[0])
                switch (A3[1]) {
                  case 1:
                    let o = null === (t2 = null === (e3 = this._renderer) || void 0 === e3 ? void 0 : e3.dimensions) || void 0 === t2 ? void 0 : t2.css.canvas.width, h = null === (s2 = null === (i2 = this._renderer) || void 0 === i2 ? void 0 : i2.dimensions) || void 0 === s2 ? void 0 : s2.css.canvas.height;
                    if (!o || !h) {
                      const A4 = r.CELL_SIZE_DEFAULT;
                      o = ((null === (g2 = this._terminal) || void 0 === g2 ? void 0 : g2.cols) || 80) * A4.width, h = ((null === (a2 = this._terminal) || void 0 === a2 ? void 0 : a2.rows) || 24) * A4.height;
                    }
                    if (o * h < this._opts.pixelLimit)
                      this._report(`\x1B[?${A3[0]};0;${o.toFixed(0)};${h.toFixed(0)}S`);
                    else {
                      const e4 = Math.floor(Math.sqrt(this._opts.pixelLimit));
                      this._report(`\x1B[?${A3[0]};0;${e4};${e4}S`);
                    }
                    return true;
                  case 4:
                    const n = Math.floor(Math.sqrt(this._opts.pixelLimit));
                    return this._report(`\x1B[?${A3[0]};0;${n};${n}S`), true;
                  default:
                    return this._report(`\x1B[?${A3[0]};2S`), true;
                }
              return this._report(`\x1B[?${A3[0]};1S`), true;
            }
          };
        })(), i;
      })();
    });
  })(xtermAddonImage$2);
  return xtermAddonImage$2.exports;
}
var xtermAddonImageExports = requireXtermAddonImage();
const xtermAddonImage = /* @__PURE__ */ getDefaultExportFromCjs(xtermAddonImageExports);
const xtermAddonImage$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xtermAddonImage
}, [xtermAddonImageExports]);
export {
  xtermAddonImage$1 as x
};
