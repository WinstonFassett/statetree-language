import { m as commonjsGlobal, l as getDefaultExportFromCjs } from "./index-3bddf13b.js";
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
var xtermAddonSerialize$2 = { exports: {} };
var hasRequiredXtermAddonSerialize;
function requireXtermAddonSerialize() {
  if (hasRequiredXtermAddonSerialize)
    return xtermAddonSerialize$2.exports;
  hasRequiredXtermAddonSerialize = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, () => (() => {
      var t = {};
      return (() => {
        var e = t;
        function s(t2, e2, s2) {
          return Math.max(e2, Math.min(t2, s2));
        }
        Object.defineProperty(e, "__esModule", { value: true }), e.HTMLSerializeHandler = e.SerializeAddon = void 0;
        class i {
          constructor(t2) {
            this._buffer = t2;
          }
          serialize(t2) {
            const e2 = this._buffer.getNullCell(), s2 = this._buffer.getNullCell();
            let i2 = e2;
            const r2 = t2.start.x, l2 = t2.end.x, o2 = t2.start.y, n2 = t2.end.y;
            this._beforeSerialize(l2 - r2, r2, l2);
            for (let h2 = r2; h2 <= l2; h2++) {
              const r3 = this._buffer.getLine(h2);
              if (r3) {
                const l3 = h2 !== t2.start.x ? 0 : o2, u = h2 !== t2.end.x ? r3.length : n2;
                for (let t3 = l3; t3 < u; t3++) {
                  const l4 = r3.getCell(t3, i2 === e2 ? s2 : e2);
                  l4 ? (this._nextCell(l4, i2, h2, t3), i2 = l4) : console.warn(`Can't get cell at row=${h2}, col=${t3}`);
                }
              }
              this._rowEnd(h2, h2 === l2);
            }
            return this._afterSerialize(), this._serializeString();
          }
          _nextCell(t2, e2, s2, i2) {
          }
          _rowEnd(t2, e2) {
          }
          _beforeSerialize(t2, e2, s2) {
          }
          _afterSerialize() {
          }
          _serializeString() {
            return "";
          }
        }
        function r(t2, e2) {
          return t2.getFgColorMode() === e2.getFgColorMode() && t2.getFgColor() === e2.getFgColor();
        }
        function l(t2, e2) {
          return t2.getBgColorMode() === e2.getBgColorMode() && t2.getBgColor() === e2.getBgColor();
        }
        function o(t2, e2) {
          return t2.isInverse() === e2.isInverse() && t2.isBold() === e2.isBold() && t2.isUnderline() === e2.isUnderline() && t2.isOverline() === e2.isOverline() && t2.isBlink() === e2.isBlink() && t2.isInvisible() === e2.isInvisible() && t2.isItalic() === e2.isItalic() && t2.isDim() === e2.isDim() && t2.isStrikethrough() === e2.isStrikethrough();
        }
        class n extends i {
          constructor(t2, e2) {
            super(t2), this._terminal = e2, this._rowIndex = 0, this._allRows = new Array(), this._allRowSeparators = new Array(), this._currentRow = "", this._nullCellCount = 0, this._cursorStyle = this._buffer.getNullCell(), this._cursorStyleRow = 0, this._cursorStyleCol = 0, this._backgroundCell = this._buffer.getNullCell(), this._firstRow = 0, this._lastCursorRow = 0, this._lastCursorCol = 0, this._lastContentCursorRow = 0, this._lastContentCursorCol = 0, this._thisRowLastChar = this._buffer.getNullCell(), this._thisRowLastSecondChar = this._buffer.getNullCell(), this._nextRowFirstChar = this._buffer.getNullCell();
          }
          _beforeSerialize(t2, e2, s2) {
            this._allRows = new Array(t2), this._lastContentCursorRow = e2, this._lastCursorRow = e2, this._firstRow = e2;
          }
          _rowEnd(t2, e2) {
            var s2;
            this._nullCellCount > 0 && !l(this._cursorStyle, this._backgroundCell) && (this._currentRow += `\x1B[${this._nullCellCount}X`);
            let i2 = "";
            if (!e2) {
              t2 - this._firstRow >= this._terminal.rows && (null === (s2 = this._buffer.getLine(this._cursorStyleRow)) || void 0 === s2 || s2.getCell(this._cursorStyleCol, this._backgroundCell));
              const e3 = this._buffer.getLine(t2), r2 = this._buffer.getLine(t2 + 1);
              if (r2.isWrapped) {
                i2 = "";
                const s3 = e3.getCell(e3.length - 1, this._thisRowLastChar), o2 = e3.getCell(e3.length - 2, this._thisRowLastSecondChar), n2 = r2.getCell(0, this._nextRowFirstChar), h2 = n2.getWidth() > 1;
                let u = false;
                (n2.getChars() && h2 ? this._nullCellCount <= 1 : this._nullCellCount <= 0) && ((s3.getChars() || 0 === s3.getWidth()) && l(s3, n2) && (u = true), h2 && (o2.getChars() || 0 === o2.getWidth()) && l(s3, n2) && l(o2, n2) && (u = true)), u || (i2 = "-".repeat(this._nullCellCount + 1), i2 += "\x1B[1D\x1B[1X", this._nullCellCount > 0 && (i2 += "\x1B[A", i2 += `\x1B[${e3.length - this._nullCellCount}C`, i2 += `\x1B[${this._nullCellCount}X`, i2 += `\x1B[${e3.length - this._nullCellCount}D`, i2 += "\x1B[B"), this._lastContentCursorRow = t2 + 1, this._lastContentCursorCol = 0, this._lastCursorRow = t2 + 1, this._lastCursorCol = 0);
              } else
                i2 = "\r\n", this._lastCursorRow = t2 + 1, this._lastCursorCol = 0;
            }
            this._allRows[this._rowIndex] = this._currentRow, this._allRowSeparators[this._rowIndex++] = i2, this._currentRow = "", this._nullCellCount = 0;
          }
          _diffStyle(t2, e2) {
            const s2 = [], i2 = !r(t2, e2), n2 = !l(t2, e2), h2 = !o(t2, e2);
            if (i2 || n2 || h2)
              if (t2.isAttributeDefault())
                e2.isAttributeDefault() || s2.push(0);
              else {
                if (i2) {
                  const e3 = t2.getFgColor();
                  t2.isFgRGB() ? s2.push(38, 2, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3) : t2.isFgPalette() ? e3 >= 16 ? s2.push(38, 5, e3) : s2.push(8 & e3 ? 90 + (7 & e3) : 30 + (7 & e3)) : s2.push(39);
                }
                if (n2) {
                  const e3 = t2.getBgColor();
                  t2.isBgRGB() ? s2.push(48, 2, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3) : t2.isBgPalette() ? e3 >= 16 ? s2.push(48, 5, e3) : s2.push(8 & e3 ? 100 + (7 & e3) : 40 + (7 & e3)) : s2.push(49);
                }
                h2 && (t2.isInverse() !== e2.isInverse() && s2.push(t2.isInverse() ? 7 : 27), t2.isBold() !== e2.isBold() && s2.push(t2.isBold() ? 1 : 22), t2.isUnderline() !== e2.isUnderline() && s2.push(t2.isUnderline() ? 4 : 24), t2.isOverline() !== e2.isOverline() && s2.push(t2.isOverline() ? 53 : 55), t2.isBlink() !== e2.isBlink() && s2.push(t2.isBlink() ? 5 : 25), t2.isInvisible() !== e2.isInvisible() && s2.push(t2.isInvisible() ? 8 : 28), t2.isItalic() !== e2.isItalic() && s2.push(t2.isItalic() ? 3 : 23), t2.isDim() !== e2.isDim() && s2.push(t2.isDim() ? 2 : 22), t2.isStrikethrough() !== e2.isStrikethrough() && s2.push(t2.isStrikethrough() ? 9 : 29));
              }
            return s2;
          }
          _nextCell(t2, e2, s2, i2) {
            if (0 === t2.getWidth())
              return;
            const r2 = "" === t2.getChars(), o2 = this._diffStyle(t2, this._cursorStyle);
            if (r2 ? !l(this._cursorStyle, t2) : o2.length > 0) {
              this._nullCellCount > 0 && (l(this._cursorStyle, this._backgroundCell) || (this._currentRow += `\x1B[${this._nullCellCount}X`), this._currentRow += `\x1B[${this._nullCellCount}C`, this._nullCellCount = 0), this._lastContentCursorRow = this._lastCursorRow = s2, this._lastContentCursorCol = this._lastCursorCol = i2, this._currentRow += `\x1B[${o2.join(";")}m`;
              const t3 = this._buffer.getLine(s2);
              void 0 !== t3 && (t3.getCell(i2, this._cursorStyle), this._cursorStyleRow = s2, this._cursorStyleCol = i2);
            }
            r2 ? this._nullCellCount += t2.getWidth() : (this._nullCellCount > 0 && (l(this._cursorStyle, this._backgroundCell) || (this._currentRow += `\x1B[${this._nullCellCount}X`), this._currentRow += `\x1B[${this._nullCellCount}C`, this._nullCellCount = 0), this._currentRow += t2.getChars(), this._lastContentCursorRow = this._lastCursorRow = s2, this._lastContentCursorCol = this._lastCursorCol = i2 + t2.getWidth());
          }
          _serializeString() {
            let t2 = this._allRows.length;
            this._buffer.length - this._firstRow <= this._terminal.rows && (t2 = this._lastContentCursorRow + 1 - this._firstRow, this._lastCursorCol = this._lastContentCursorCol, this._lastCursorRow = this._lastContentCursorRow);
            let e2 = "";
            for (let s3 = 0; s3 < t2; s3++)
              e2 += this._allRows[s3], s3 + 1 < t2 && (e2 += this._allRowSeparators[s3]);
            const s2 = this._buffer.baseY + this._buffer.cursorY, i2 = this._buffer.cursorX;
            var r2;
            (s2 !== this._lastCursorRow || i2 !== this._lastCursorCol) && ((r2 = s2 - this._lastCursorRow) > 0 ? e2 += `\x1B[${r2}B` : r2 < 0 && (e2 += `\x1B[${-r2}A`), ((t3) => {
              t3 > 0 ? e2 += `\x1B[${t3}C` : t3 < 0 && (e2 += `\x1B[${-t3}D`);
            })(i2 - this._lastCursorCol));
            const l2 = this._terminal._core._inputHandler._curAttrData, o2 = this._diffStyle(l2, this._cursorStyle);
            return o2.length > 0 && (e2 += `\x1B[${o2.join(";")}m`), e2;
          }
        }
        e.SerializeAddon = class {
          constructor() {
          }
          activate(t2) {
            this._terminal = t2;
          }
          _serializeBuffer(t2, e2, i2) {
            const r2 = e2.length, l2 = new n(e2, t2), o2 = void 0 === i2 ? r2 : s(i2 + t2.rows, 0, r2);
            return l2.serialize({ start: { x: r2 - o2, y: 0 }, end: { x: r2 - 1, y: t2.cols } });
          }
          _serializeBufferAsHTML(t2, e2) {
            var i2, r2;
            const l2 = t2.buffer.active, o2 = new h(l2, t2, e2);
            if (null === (i2 = e2.onlySelection) || void 0 === i2 || !i2) {
              const i3 = l2.length, r3 = e2.scrollback, n3 = void 0 === r3 ? i3 : s(r3 + t2.rows, 0, i3);
              return o2.serialize({ start: { x: i3 - n3, y: 0 }, end: { x: i3 - 1, y: t2.cols } });
            }
            const n2 = null === (r2 = this._terminal) || void 0 === r2 ? void 0 : r2.getSelectionPosition();
            return void 0 !== n2 ? o2.serialize({ start: { x: n2.start.y, y: n2.start.x }, end: { x: n2.end.y, y: n2.end.x } }) : "";
          }
          _serializeModes(t2) {
            let e2 = "";
            const s2 = t2.modes;
            if (s2.applicationCursorKeysMode && (e2 += "\x1B[?1h"), s2.applicationKeypadMode && (e2 += "\x1B[?66h"), s2.bracketedPasteMode && (e2 += "\x1B[?2004h"), s2.insertMode && (e2 += "\x1B[4h"), s2.originMode && (e2 += "\x1B[?6h"), s2.reverseWraparoundMode && (e2 += "\x1B[?45h"), s2.sendFocusMode && (e2 += "\x1B[?1004h"), false === s2.wraparoundMode && (e2 += "\x1B[?7l"), "none" !== s2.mouseTrackingMode)
              switch (s2.mouseTrackingMode) {
                case "x10":
                  e2 += "\x1B[?9h";
                  break;
                case "vt200":
                  e2 += "\x1B[?1000h";
                  break;
                case "drag":
                  e2 += "\x1B[?1002h";
                  break;
                case "any":
                  e2 += "\x1B[?1003h";
              }
            return e2;
          }
          serialize(t2) {
            if (!this._terminal)
              throw new Error("Cannot use addon until it has been loaded");
            let e2 = this._serializeBuffer(this._terminal, this._terminal.buffer.normal, null == t2 ? void 0 : t2.scrollback);
            return (null == t2 ? void 0 : t2.excludeAltBuffer) || "alternate" !== this._terminal.buffer.active.type || (e2 += `\x1B[?1049h\x1B[H${this._serializeBuffer(this._terminal, this._terminal.buffer.alternate, void 0)}`), (null == t2 ? void 0 : t2.excludeModes) || (e2 += this._serializeModes(this._terminal)), e2;
          }
          serializeAsHTML(t2) {
            if (!this._terminal)
              throw new Error("Cannot use addon until it has been loaded");
            return this._serializeBufferAsHTML(this._terminal, t2 || {});
          }
          dispose() {
          }
        };
        class h extends i {
          constructor(t2, e2, s2) {
            super(t2), this._terminal = e2, this._options = s2, this._currentRow = "", this._htmlContent = "", this._colors = e2._core._themeService.colors;
          }
          _padStart(t2, e2, s2) {
            return e2 >>= 0, s2 = null != s2 ? s2 : " ", t2.length > e2 ? t2 : ((e2 -= t2.length) > s2.length && (s2 += s2.repeat(e2 / s2.length)), s2.slice(0, e2) + t2);
          }
          _beforeSerialize(t2, e2, s2) {
            var i2, r2, l2, o2, n2;
            this._htmlContent += "<html><body><!--StartFragment--><pre>";
            let h2 = "#000000", u = "#ffffff";
            null !== (i2 = this._options.includeGlobalBackground) && void 0 !== i2 && i2 && (h2 = null !== (l2 = null === (r2 = this._terminal.options.theme) || void 0 === r2 ? void 0 : r2.foreground) && void 0 !== l2 ? l2 : "#ffffff", u = null !== (n2 = null === (o2 = this._terminal.options.theme) || void 0 === o2 ? void 0 : o2.background) && void 0 !== n2 ? n2 : "#000000");
            const a = [];
            a.push("color: " + h2 + ";"), a.push("background-color: " + u + ";"), a.push("font-family: " + this._terminal.options.fontFamily + ";"), a.push("font-size: " + this._terminal.options.fontSize + "px;"), this._htmlContent += "<div style='" + a.join(" ") + "'>";
          }
          _afterSerialize() {
            this._htmlContent += "</div>", this._htmlContent += "</pre><!--EndFragment--></body></html>";
          }
          _rowEnd(t2, e2) {
            this._htmlContent += "<div><span>" + this._currentRow + "</span></div>", this._currentRow = "";
          }
          _getHexColor(t2, e2) {
            const s2 = e2 ? t2.getFgColor() : t2.getBgColor();
            return (e2 ? t2.isFgRGB() : t2.isBgRGB()) ? [s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2].map((t3) => this._padStart(t3.toString(16), 2, "0")).join("") : (e2 ? t2.isFgPalette() : t2.isBgPalette()) ? this._colors.ansi[s2].css : void 0;
          }
          _diffStyle(t2, e2) {
            const s2 = [], i2 = !r(t2, e2), n2 = !l(t2, e2), h2 = !o(t2, e2);
            if (i2 || n2 || h2) {
              const e3 = this._getHexColor(t2, true);
              e3 && s2.push("color: " + e3 + ";");
              const i3 = this._getHexColor(t2, false);
              return i3 && s2.push("background-color: " + i3 + ";"), t2.isInverse() && s2.push("color: #000000; background-color: #BFBFBF;"), t2.isBold() && s2.push("font-weight: bold;"), t2.isUnderline() && t2.isOverline() ? s2.push("text-decoration: overline underline;") : t2.isUnderline() ? s2.push("text-decoration: underline;") : t2.isOverline() && s2.push("text-decoration: overline;"), t2.isBlink() && s2.push("text-decoration: blink;"), t2.isInvisible() && s2.push("visibility: hidden;"), t2.isItalic() && s2.push("font-style: italic;"), t2.isDim() && s2.push("opacity: 0.5;"), t2.isStrikethrough() && s2.push("text-decoration: line-through;"), s2;
            }
          }
          _nextCell(t2, e2, s2, i2) {
            if (0 === t2.getWidth())
              return;
            const r2 = "" === t2.getChars(), l2 = this._diffStyle(t2, e2);
            l2 && (this._currentRow += 0 === l2.length ? "</span><span>" : "</span><span style='" + l2.join(" ") + "'>"), this._currentRow += r2 ? " " : t2.getChars();
          }
          _serializeString() {
            return this._htmlContent;
          }
        }
        e.HTMLSerializeHandler = h;
      })(), t;
    })());
  })(xtermAddonSerialize$2);
  return xtermAddonSerialize$2.exports;
}
var xtermAddonSerializeExports = requireXtermAddonSerialize();
const xtermAddonSerialize = /* @__PURE__ */ getDefaultExportFromCjs(xtermAddonSerializeExports);
const xtermAddonSerialize$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xtermAddonSerialize
}, [xtermAddonSerializeExports]);
export {
  xtermAddonSerialize$1 as x
};
