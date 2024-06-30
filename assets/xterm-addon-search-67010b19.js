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
var xtermAddonSearch$2 = { exports: {} };
var hasRequiredXtermAddonSearch;
function requireXtermAddonSearch() {
  if (hasRequiredXtermAddonSearch)
    return xtermAddonSearch$2.exports;
  hasRequiredXtermAddonSearch = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(self, () => (() => {
      var e = { 345: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.forwardEvent = t2.EventEmitter = void 0, t2.EventEmitter = class {
          constructor() {
            this._listeners = [], this._disposed = false;
          }
          get event() {
            return this._event || (this._event = (e3) => (this._listeners.push(e3), { dispose: () => {
              if (!this._disposed) {
                for (let t3 = 0; t3 < this._listeners.length; t3++)
                  if (this._listeners[t3] === e3)
                    return void this._listeners.splice(t3, 1);
              }
            } })), this._event;
          }
          fire(e3, t3) {
            const i2 = [];
            for (let e4 = 0; e4 < this._listeners.length; e4++)
              i2.push(this._listeners[e4]);
            for (let s2 = 0; s2 < i2.length; s2++)
              i2[s2].call(void 0, e3, t3);
          }
          dispose() {
            this._listeners && (this._listeners.length = 0), this._disposed = true;
          }
        }, t2.forwardEvent = function(e3, t3) {
          return e3((e4) => t3.fire(e4));
        };
      }, 859: (e2, t2) => {
        function i2(e3) {
          for (const t3 of e3)
            t3.dispose();
          e3.length = 0;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getDisposeArrayDisposable = t2.disposeArray = t2.toDisposable = t2.Disposable = void 0, t2.Disposable = class {
          constructor() {
            this._disposables = [], this._isDisposed = false;
          }
          dispose() {
            this._isDisposed = true;
            for (const e3 of this._disposables)
              e3.dispose();
            this._disposables.length = 0;
          }
          register(e3) {
            return this._disposables.push(e3), e3;
          }
          unregister(e3) {
            const t3 = this._disposables.indexOf(e3);
            -1 !== t3 && this._disposables.splice(t3, 1);
          }
        }, t2.toDisposable = function(e3) {
          return { dispose: e3 };
        }, t2.disposeArray = i2, t2.getDisposeArrayDisposable = function(e3) {
          return { dispose: () => i2(e3) };
        };
      } }, t = {};
      function i(s2) {
        var r = t[s2];
        if (void 0 !== r)
          return r.exports;
        var o = t[s2] = { exports: {} };
        return e[s2](o, o.exports, i), o.exports;
      }
      var s = {};
      return (() => {
        var e2 = s;
        Object.defineProperty(e2, "__esModule", { value: true }), e2.SearchAddon = void 0;
        const t2 = i(345), r = i(859), o = " ~!@#$%^&*()+`-=[]{}|\\;:\"',./<>?";
        class n extends r.Disposable {
          constructor(e3) {
            var i2;
            super(), this._highlightedLines = /* @__PURE__ */ new Set(), this._highlightDecorations = [], this._linesCacheTimeoutId = 0, this._onDidChangeResults = this.register(new t2.EventEmitter()), this.onDidChangeResults = this._onDidChangeResults.event, this._highlightLimit = null !== (i2 = null == e3 ? void 0 : e3.highlightLimit) && void 0 !== i2 ? i2 : 1e3;
          }
          activate(e3) {
            this._terminal = e3, this._onDataDisposable = this.register(this._terminal.onWriteParsed(() => this._updateMatches())), this._onResizeDisposable = this.register(this._terminal.onResize(() => this._updateMatches())), this.register((0, r.toDisposable)(() => {
              var e4, t3;
              this.clearDecorations(), null === (e4 = this._onDataDisposable) || void 0 === e4 || e4.dispose(), null === (t3 = this._onResizeDisposable) || void 0 === t3 || t3.dispose();
            }));
          }
          _updateMatches() {
            var e3;
            this._highlightTimeout && window.clearTimeout(this._highlightTimeout), this._cachedSearchTerm && (null === (e3 = this._lastSearchOptions) || void 0 === e3 ? void 0 : e3.decorations) && (this._highlightTimeout = setTimeout(() => {
              const e4 = this._cachedSearchTerm;
              this._cachedSearchTerm = void 0, this.findPrevious(e4, Object.assign(Object.assign({}, this._lastSearchOptions), { incremental: true, noScroll: true }));
            }, 200));
          }
          clearDecorations(e3) {
            this.clearActiveDecoration(), (0, r.disposeArray)(this._highlightDecorations), this._highlightDecorations = [], this._highlightedLines.clear(), e3 || (this._cachedSearchTerm = void 0);
          }
          clearActiveDecoration() {
            var e3;
            null === (e3 = this._selectedDecoration) || void 0 === e3 || e3.dispose(), this._selectedDecoration = void 0;
          }
          findNext(e3, t3) {
            if (!this._terminal)
              throw new Error("Cannot use addon until it has been loaded");
            this._lastSearchOptions = t3, (null == t3 ? void 0 : t3.decorations) && (void 0 !== this._cachedSearchTerm && e3 === this._cachedSearchTerm || this._highlightAllMatches(e3, t3));
            const i2 = this._findNextAndSelect(e3, t3);
            return this._fireResults(t3), this._cachedSearchTerm = e3, i2;
          }
          _highlightAllMatches(e3, t3) {
            if (!this._terminal)
              throw new Error("Cannot use addon until it has been loaded");
            if (!e3 || 0 === e3.length)
              return void this.clearDecorations();
            t3 = t3 || {}, this.clearDecorations(true);
            const i2 = [];
            let s2, r2 = this._find(e3, 0, 0, t3);
            for (; r2 && ((null == s2 ? void 0 : s2.row) !== r2.row || (null == s2 ? void 0 : s2.col) !== r2.col) && !(i2.length >= this._highlightLimit); )
              s2 = r2, i2.push(s2), r2 = this._find(e3, s2.col + s2.term.length >= this._terminal.cols ? s2.row + 1 : s2.row, s2.col + s2.term.length >= this._terminal.cols ? 0 : s2.col + 1, t3);
            for (const e4 of i2) {
              const i3 = this._createResultDecoration(e4, t3.decorations);
              i3 && (this._highlightedLines.add(i3.marker.line), this._highlightDecorations.push({ decoration: i3, match: e4, dispose() {
                i3.dispose();
              } }));
            }
          }
          _find(e3, t3, i2, s2) {
            var r2;
            if (!this._terminal || !e3 || 0 === e3.length)
              return null === (r2 = this._terminal) || void 0 === r2 || r2.clearSelection(), void this.clearDecorations();
            if (i2 > this._terminal.cols)
              throw new Error(`Invalid col: ${i2} to search in terminal of ${this._terminal.cols} cols`);
            let o2;
            this._initLinesCache();
            const n2 = { startRow: t3, startCol: i2 };
            if (o2 = this._findInLine(e3, n2, s2), !o2)
              for (let i3 = t3 + 1; i3 < this._terminal.buffer.active.baseY + this._terminal.rows && (n2.startRow = i3, n2.startCol = 0, o2 = this._findInLine(e3, n2, s2), !o2); i3++)
                ;
            return o2;
          }
          _findNextAndSelect(e3, t3) {
            var i2;
            if (!this._terminal || !e3 || 0 === e3.length)
              return null === (i2 = this._terminal) || void 0 === i2 || i2.clearSelection(), this.clearDecorations(), false;
            const s2 = this._terminal.getSelectionPosition();
            this._terminal.clearSelection();
            let r2 = 0, o2 = 0;
            s2 && (this._cachedSearchTerm === e3 ? (r2 = s2.end.x, o2 = s2.end.y) : (r2 = s2.start.x, o2 = s2.start.y)), this._initLinesCache();
            const n2 = { startRow: o2, startCol: r2 };
            let l = this._findInLine(e3, n2, t3);
            if (!l)
              for (let i3 = o2 + 1; i3 < this._terminal.buffer.active.baseY + this._terminal.rows && (n2.startRow = i3, n2.startCol = 0, l = this._findInLine(e3, n2, t3), !l); i3++)
                ;
            if (!l && 0 !== o2)
              for (let i3 = 0; i3 < o2 && (n2.startRow = i3, n2.startCol = 0, l = this._findInLine(e3, n2, t3), !l); i3++)
                ;
            return !l && s2 && (n2.startRow = s2.start.y, n2.startCol = 0, l = this._findInLine(e3, n2, t3)), this._selectResult(l, null == t3 ? void 0 : t3.decorations, null == t3 ? void 0 : t3.noScroll);
          }
          findPrevious(e3, t3) {
            if (!this._terminal)
              throw new Error("Cannot use addon until it has been loaded");
            this._lastSearchOptions = t3, (null == t3 ? void 0 : t3.decorations) && (void 0 !== this._cachedSearchTerm && e3 === this._cachedSearchTerm || this._highlightAllMatches(e3, t3));
            const i2 = this._findPreviousAndSelect(e3, t3);
            return this._fireResults(t3), this._cachedSearchTerm = e3, i2;
          }
          _fireResults(e3) {
            if (null == e3 ? void 0 : e3.decorations) {
              let e4 = -1;
              if (this._selectedDecoration) {
                const t3 = this._selectedDecoration.match;
                for (let i2 = 0; i2 < this._highlightDecorations.length; i2++) {
                  const s2 = this._highlightDecorations[i2].match;
                  if (s2.row === t3.row && s2.col === t3.col && s2.size === t3.size) {
                    e4 = i2;
                    break;
                  }
                }
              }
              this._onDidChangeResults.fire({ resultIndex: e4, resultCount: this._highlightDecorations.length });
            }
          }
          _findPreviousAndSelect(e3, t3) {
            var i2;
            if (!this._terminal)
              throw new Error("Cannot use addon until it has been loaded");
            if (!this._terminal || !e3 || 0 === e3.length)
              return null === (i2 = this._terminal) || void 0 === i2 || i2.clearSelection(), this.clearDecorations(), false;
            const s2 = this._terminal.getSelectionPosition();
            this._terminal.clearSelection();
            let r2 = this._terminal.buffer.active.baseY + this._terminal.rows - 1, o2 = this._terminal.cols;
            const n2 = true;
            this._initLinesCache();
            const l = { startRow: r2, startCol: o2 };
            let h;
            if (s2 && (l.startRow = r2 = s2.start.y, l.startCol = o2 = s2.start.x, this._cachedSearchTerm !== e3 && (h = this._findInLine(e3, l, t3, false), h || (l.startRow = r2 = s2.end.y, l.startCol = o2 = s2.end.x))), h || (h = this._findInLine(e3, l, t3, n2)), !h) {
              l.startCol = Math.max(l.startCol, this._terminal.cols);
              for (let i3 = r2 - 1; i3 >= 0 && (l.startRow = i3, h = this._findInLine(e3, l, t3, n2), !h); i3--)
                ;
            }
            if (!h && r2 !== this._terminal.buffer.active.baseY + this._terminal.rows - 1)
              for (let i3 = this._terminal.buffer.active.baseY + this._terminal.rows - 1; i3 >= r2 && (l.startRow = i3, h = this._findInLine(e3, l, t3, n2), !h); i3--)
                ;
            return this._selectResult(h, null == t3 ? void 0 : t3.decorations, null == t3 ? void 0 : t3.noScroll);
          }
          _initLinesCache() {
            const e3 = this._terminal;
            this._linesCache || (this._linesCache = new Array(e3.buffer.active.length), this._cursorMoveListener = e3.onCursorMove(() => this._destroyLinesCache()), this._resizeListener = e3.onResize(() => this._destroyLinesCache())), window.clearTimeout(this._linesCacheTimeoutId), this._linesCacheTimeoutId = window.setTimeout(() => this._destroyLinesCache(), 15e3);
          }
          _destroyLinesCache() {
            this._linesCache = void 0, this._cursorMoveListener && (this._cursorMoveListener.dispose(), this._cursorMoveListener = void 0), this._resizeListener && (this._resizeListener.dispose(), this._resizeListener = void 0), this._linesCacheTimeoutId && (window.clearTimeout(this._linesCacheTimeoutId), this._linesCacheTimeoutId = 0);
          }
          _isWholeWord(e3, t3, i2) {
            return (0 === e3 || o.includes(t3[e3 - 1])) && (e3 + i2.length === t3.length || o.includes(t3[e3 + i2.length]));
          }
          _findInLine(e3, t3, i2 = {}, s2 = false) {
            var r2;
            const o2 = this._terminal, n2 = t3.startRow, l = t3.startCol, h = o2.buffer.active.getLine(n2);
            if (null == h ? void 0 : h.isWrapped)
              return s2 ? void (t3.startCol += o2.cols) : (t3.startRow--, t3.startCol += o2.cols, this._findInLine(e3, t3, i2));
            let a = null === (r2 = this._linesCache) || void 0 === r2 ? void 0 : r2[n2];
            a || (a = this._translateBufferLineToStringWithWrap(n2, true), this._linesCache && (this._linesCache[n2] = a));
            const [c, d] = a, _ = this._bufferColsToStringOffset(n2, l), u = i2.caseSensitive ? e3 : e3.toLowerCase(), f = i2.caseSensitive ? c : c.toLowerCase();
            let g = -1;
            if (i2.regex) {
              const t4 = RegExp(u, "g");
              let i3;
              if (s2)
                for (; i3 = t4.exec(f.slice(0, _)); )
                  g = t4.lastIndex - i3[0].length, e3 = i3[0], t4.lastIndex -= e3.length - 1;
              else
                i3 = t4.exec(f.slice(_)), i3 && i3[0].length > 0 && (g = _ + (t4.lastIndex - i3[0].length), e3 = i3[0]);
            } else
              s2 ? _ - u.length >= 0 && (g = f.lastIndexOf(u, _ - u.length)) : g = f.indexOf(u, _);
            if (g >= 0) {
              if (i2.wholeWord && !this._isWholeWord(g, f, e3))
                return;
              let t4 = 0;
              for (; t4 < d.length - 1 && g >= d[t4 + 1]; )
                t4++;
              let s3 = t4;
              for (; s3 < d.length - 1 && g + e3.length >= d[s3 + 1]; )
                s3++;
              const r3 = g - d[t4], l2 = g + e3.length - d[s3], h2 = this._stringLengthToBufferSize(n2 + t4, r3);
              return { term: e3, col: h2, row: n2 + t4, size: this._stringLengthToBufferSize(n2 + s3, l2) - h2 + o2.cols * (s3 - t4) };
            }
          }
          _stringLengthToBufferSize(e3, t3) {
            const i2 = this._terminal.buffer.active.getLine(e3);
            if (!i2)
              return 0;
            for (let e4 = 0; e4 < t3; e4++) {
              const s2 = i2.getCell(e4);
              if (!s2)
                break;
              const r2 = s2.getChars();
              r2.length > 1 && (t3 -= r2.length - 1);
              const o2 = i2.getCell(e4 + 1);
              o2 && 0 === o2.getWidth() && t3++;
            }
            return t3;
          }
          _bufferColsToStringOffset(e3, t3) {
            const i2 = this._terminal;
            let s2 = e3, r2 = 0, o2 = i2.buffer.active.getLine(s2);
            for (; t3 > 0 && o2; ) {
              for (let e4 = 0; e4 < t3 && e4 < i2.cols; e4++) {
                const t4 = o2.getCell(e4);
                if (!t4)
                  break;
                t4.getWidth() && (r2 += 0 === t4.getCode() ? 1 : t4.getChars().length);
              }
              if (s2++, o2 = i2.buffer.active.getLine(s2), o2 && !o2.isWrapped)
                break;
              t3 -= i2.cols;
            }
            return r2;
          }
          _translateBufferLineToStringWithWrap(e3, t3) {
            var i2;
            const s2 = this._terminal, r2 = [], o2 = [0];
            let n2 = s2.buffer.active.getLine(e3);
            for (; n2; ) {
              const l = s2.buffer.active.getLine(e3 + 1), h = !!l && l.isWrapped;
              let a = n2.translateToString(!h && t3);
              if (h && l) {
                const e4 = n2.getCell(n2.length - 1);
                e4 && 0 === e4.getCode() && 1 === e4.getWidth() && 2 === (null === (i2 = l.getCell(0)) || void 0 === i2 ? void 0 : i2.getWidth()) && (a = a.slice(0, -1));
              }
              if (r2.push(a), !h)
                break;
              o2.push(o2[o2.length - 1] + a.length), e3++, n2 = l;
            }
            return [r2.join(""), o2];
          }
          _selectResult(e3, t3, i2) {
            const s2 = this._terminal;
            if (this.clearActiveDecoration(), !e3)
              return s2.clearSelection(), false;
            if (s2.select(e3.col, e3.row, e3.size), t3) {
              const i3 = s2.registerMarker(-s2.buffer.active.baseY - s2.buffer.active.cursorY + e3.row);
              if (i3) {
                const o2 = s2.registerDecoration({ marker: i3, x: e3.col, width: e3.size, backgroundColor: t3.activeMatchBackground, layer: "top", overviewRulerOptions: { color: t3.activeMatchColorOverviewRuler } });
                if (o2) {
                  const s3 = [];
                  s3.push(i3), s3.push(o2.onRender((e4) => this._applyStyles(e4, t3.activeMatchBorder, true))), s3.push(o2.onDispose(() => (0, r.disposeArray)(s3))), this._selectedDecoration = { decoration: o2, match: e3, dispose() {
                    o2.dispose();
                  } };
                }
              }
            }
            if (!i2 && (e3.row >= s2.buffer.active.viewportY + s2.rows || e3.row < s2.buffer.active.viewportY)) {
              let t4 = e3.row - s2.buffer.active.viewportY;
              t4 -= Math.floor(s2.rows / 2), s2.scrollLines(t4);
            }
            return true;
          }
          _applyStyles(e3, t3, i2) {
            e3.classList.contains("xterm-find-result-decoration") || (e3.classList.add("xterm-find-result-decoration"), t3 && (e3.style.outline = `1px solid ${t3}`)), i2 && e3.classList.add("xterm-find-active-result-decoration");
          }
          _createResultDecoration(e3, t3) {
            const i2 = this._terminal, s2 = i2.registerMarker(-i2.buffer.active.baseY - i2.buffer.active.cursorY + e3.row);
            if (!s2)
              return;
            const o2 = i2.registerDecoration({ marker: s2, x: e3.col, width: e3.size, backgroundColor: t3.matchBackground, overviewRulerOptions: this._highlightedLines.has(s2.line) ? void 0 : { color: t3.matchOverviewRuler, position: "center" } });
            if (o2) {
              const e4 = [];
              e4.push(s2), e4.push(o2.onRender((e5) => this._applyStyles(e5, t3.matchBorder, false))), e4.push(o2.onDispose(() => (0, r.disposeArray)(e4)));
            }
            return o2;
          }
        }
        e2.SearchAddon = n;
      })(), s;
    })());
  })(xtermAddonSearch$2);
  return xtermAddonSearch$2.exports;
}
var xtermAddonSearchExports = requireXtermAddonSearch();
const xtermAddonSearch = /* @__PURE__ */ getDefaultExportFromCjs(xtermAddonSearchExports);
const xtermAddonSearch$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xtermAddonSearch
}, [xtermAddonSearchExports]);
export {
  xtermAddonSearch$1 as x
};
