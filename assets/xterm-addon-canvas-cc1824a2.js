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
var xtermAddonCanvas$2 = { exports: {} };
var hasRequiredXtermAddonCanvas;
function requireXtermAddonCanvas() {
  if (hasRequiredXtermAddonCanvas)
    return xtermAddonCanvas$2.exports;
  hasRequiredXtermAddonCanvas = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(self, () => (() => {
      var e = { 903: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BaseRenderLayer = void 0;
        const s2 = i2(627), r = i2(237), o = i2(860), n = i2(374), a = i2(296), h = i2(855), l = i2(274), c = i2(859), d = i2(399), _ = i2(345);
        class u extends c.Disposable {
          constructor(e3, t3, i3, s3, r2, o2, n2, h2, d2, u2) {
            super(), this._terminal = e3, this._container = t3, this._alpha = r2, this._themeService = o2, this._bufferService = n2, this._optionsService = h2, this._decorationService = d2, this._coreBrowserService = u2, this._deviceCharWidth = 0, this._deviceCharHeight = 0, this._deviceCellWidth = 0, this._deviceCellHeight = 0, this._deviceCharLeft = 0, this._deviceCharTop = 0, this._selectionModel = (0, a.createSelectionRenderModel)(), this._bitmapGenerator = [], this._onAddTextureAtlasCanvas = this.register(new _.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._cellColorResolver = new l.CellColorResolver(this._terminal, this._selectionModel, this._decorationService, this._coreBrowserService, this._themeService), this._canvas = document.createElement("canvas"), this._canvas.classList.add(`xterm-${i3}-layer`), this._canvas.style.zIndex = s3.toString(), this._initCanvas(), this._container.appendChild(this._canvas), this._refreshCharAtlas(this._themeService.colors), this.register(this._themeService.onChangeColors((e4) => {
              this._refreshCharAtlas(e4), this.reset(), this.handleSelectionChanged(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode);
            })), this.register((0, c.toDisposable)(() => {
              var e4;
              this._canvas.remove(), null === (e4 = this._charAtlas) || void 0 === e4 || e4.dispose();
            }));
          }
          get canvas() {
            return this._canvas;
          }
          get cacheCanvas() {
            var e3;
            return null === (e3 = this._charAtlas) || void 0 === e3 ? void 0 : e3.pages[0].canvas;
          }
          _initCanvas() {
            this._ctx = (0, n.throwIfFalsy)(this._canvas.getContext("2d", { alpha: this._alpha })), this._alpha || this._clearAll();
          }
          handleBlur() {
          }
          handleFocus() {
          }
          handleCursorMove() {
          }
          handleGridChanged(e3, t3) {
          }
          handleSelectionChanged(e3, t3, i3 = false) {
            this._selectionModel.update(this._terminal, e3, t3, i3);
          }
          _setTransparency(e3) {
            if (e3 === this._alpha)
              return;
            const t3 = this._canvas;
            this._alpha = e3, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t3), this._refreshCharAtlas(this._themeService.colors), this.handleGridChanged(0, this._bufferService.rows - 1);
          }
          _refreshCharAtlas(e3) {
            var t3;
            if (!(this._deviceCharWidth <= 0 && this._deviceCharHeight <= 0)) {
              null === (t3 = this._charAtlasDisposable) || void 0 === t3 || t3.dispose(), this._charAtlas = (0, s2.acquireTextureAtlas)(this._terminal, this._optionsService.rawOptions, e3, this._deviceCellWidth, this._deviceCellHeight, this._deviceCharWidth, this._deviceCharHeight, this._coreBrowserService.dpr), this._charAtlasDisposable = (0, _.forwardEvent)(this._charAtlas.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas), this._charAtlas.warmUp();
              for (let e4 = 0; e4 < this._charAtlas.pages.length; e4++)
                this._bitmapGenerator[e4] = new g(this._charAtlas.pages[e4].canvas);
            }
          }
          resize(e3) {
            this._deviceCellWidth = e3.device.cell.width, this._deviceCellHeight = e3.device.cell.height, this._deviceCharWidth = e3.device.char.width, this._deviceCharHeight = e3.device.char.height, this._deviceCharLeft = e3.device.char.left, this._deviceCharTop = e3.device.char.top, this._canvas.width = e3.device.canvas.width, this._canvas.height = e3.device.canvas.height, this._canvas.style.width = `${e3.css.canvas.width}px`, this._canvas.style.height = `${e3.css.canvas.height}px`, this._alpha || this._clearAll(), this._refreshCharAtlas(this._themeService.colors);
          }
          clearTextureAtlas() {
            var e3;
            null === (e3 = this._charAtlas) || void 0 === e3 || e3.clearTexture();
          }
          _fillCells(e3, t3, i3, s3) {
            this._ctx.fillRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, i3 * this._deviceCellWidth, s3 * this._deviceCellHeight);
          }
          _fillMiddleLineAtCells(e3, t3, i3 = 1) {
            const s3 = Math.ceil(0.5 * this._deviceCellHeight);
            this._ctx.fillRect(e3 * this._deviceCellWidth, (t3 + 1) * this._deviceCellHeight - s3 - this._coreBrowserService.dpr, i3 * this._deviceCellWidth, this._coreBrowserService.dpr);
          }
          _fillBottomLineAtCells(e3, t3, i3 = 1, s3 = 0) {
            this._ctx.fillRect(e3 * this._deviceCellWidth, (t3 + 1) * this._deviceCellHeight + s3 - this._coreBrowserService.dpr - 1, i3 * this._deviceCellWidth, this._coreBrowserService.dpr);
          }
          _curlyUnderlineAtCell(e3, t3, i3 = 1) {
            this._ctx.save(), this._ctx.beginPath(), this._ctx.strokeStyle = this._ctx.fillStyle;
            const s3 = this._coreBrowserService.dpr;
            this._ctx.lineWidth = s3;
            for (let r2 = 0; r2 < i3; r2++) {
              const i4 = (e3 + r2) * this._deviceCellWidth, o2 = (e3 + r2 + 0.5) * this._deviceCellWidth, n2 = (e3 + r2 + 1) * this._deviceCellWidth, a2 = (t3 + 1) * this._deviceCellHeight - s3 - 1, h2 = a2 - s3, l2 = a2 + s3;
              this._ctx.moveTo(i4, a2), this._ctx.bezierCurveTo(i4, h2, o2, h2, o2, a2), this._ctx.bezierCurveTo(o2, l2, n2, l2, n2, a2);
            }
            this._ctx.stroke(), this._ctx.restore();
          }
          _dottedUnderlineAtCell(e3, t3, i3 = 1) {
            this._ctx.save(), this._ctx.beginPath(), this._ctx.strokeStyle = this._ctx.fillStyle;
            const s3 = this._coreBrowserService.dpr;
            this._ctx.lineWidth = s3, this._ctx.setLineDash([2 * s3, s3]);
            const r2 = e3 * this._deviceCellWidth, o2 = (t3 + 1) * this._deviceCellHeight - s3 - 1;
            this._ctx.moveTo(r2, o2);
            for (let t4 = 0; t4 < i3; t4++) {
              const s4 = (e3 + i3 + t4) * this._deviceCellWidth;
              this._ctx.lineTo(s4, o2);
            }
            this._ctx.stroke(), this._ctx.closePath(), this._ctx.restore();
          }
          _dashedUnderlineAtCell(e3, t3, i3 = 1) {
            this._ctx.save(), this._ctx.beginPath(), this._ctx.strokeStyle = this._ctx.fillStyle;
            const s3 = this._coreBrowserService.dpr;
            this._ctx.lineWidth = s3, this._ctx.setLineDash([4 * s3, 3 * s3]);
            const r2 = e3 * this._deviceCellWidth, o2 = (e3 + i3) * this._deviceCellWidth, n2 = (t3 + 1) * this._deviceCellHeight - s3 - 1;
            this._ctx.moveTo(r2, n2), this._ctx.lineTo(o2, n2), this._ctx.stroke(), this._ctx.closePath(), this._ctx.restore();
          }
          _fillLeftLineAtCell(e3, t3, i3) {
            this._ctx.fillRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, this._coreBrowserService.dpr * i3, this._deviceCellHeight);
          }
          _strokeRectAtCell(e3, t3, i3, s3) {
            const r2 = this._coreBrowserService.dpr;
            this._ctx.lineWidth = r2, this._ctx.strokeRect(e3 * this._deviceCellWidth + r2 / 2, t3 * this._deviceCellHeight + r2 / 2, i3 * this._deviceCellWidth - r2, s3 * this._deviceCellHeight - r2);
          }
          _clearAll() {
            this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
          }
          _clearCells(e3, t3, i3, s3) {
            this._alpha ? this._ctx.clearRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, i3 * this._deviceCellWidth, s3 * this._deviceCellHeight) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, i3 * this._deviceCellWidth, s3 * this._deviceCellHeight));
          }
          _fillCharTrueColor(e3, t3, i3) {
            this._ctx.font = this._getFont(false, false), this._ctx.textBaseline = r.TEXT_BASELINE, this._clipRow(i3);
            let s3 = false;
            false !== this._optionsService.rawOptions.customGlyphs && (s3 = (0, o.tryDrawCustomChar)(this._ctx, e3.getChars(), t3 * this._deviceCellWidth, i3 * this._deviceCellHeight, this._deviceCellWidth, this._deviceCellHeight, this._optionsService.rawOptions.fontSize, this._coreBrowserService.dpr)), s3 || this._ctx.fillText(e3.getChars(), t3 * this._deviceCellWidth + this._deviceCharLeft, i3 * this._deviceCellHeight + this._deviceCharTop + this._deviceCharHeight);
          }
          _drawChars(e3, t3, i3) {
            var s3, r2, o2, n2;
            const a2 = e3.getChars();
            let l2;
            this._cellColorResolver.resolve(e3, t3, this._bufferService.buffer.ydisp + i3), l2 = a2 && a2.length > 1 ? this._charAtlas.getRasterizedGlyphCombinedChar(a2, this._cellColorResolver.result.bg, this._cellColorResolver.result.fg, this._cellColorResolver.result.ext) : this._charAtlas.getRasterizedGlyph(e3.getCode() || h.WHITESPACE_CELL_CODE, this._cellColorResolver.result.bg, this._cellColorResolver.result.fg, this._cellColorResolver.result.ext), l2.size.x && l2.size.y && (this._ctx.save(), this._clipRow(i3), this._bitmapGenerator[l2.texturePage] && this._charAtlas.pages[l2.texturePage].canvas !== this._bitmapGenerator[l2.texturePage].canvas && (null === (r2 = null === (s3 = this._bitmapGenerator[l2.texturePage]) || void 0 === s3 ? void 0 : s3.bitmap) || void 0 === r2 || r2.close(), delete this._bitmapGenerator[l2.texturePage]), this._charAtlas.pages[l2.texturePage].version !== (null === (o2 = this._bitmapGenerator[l2.texturePage]) || void 0 === o2 ? void 0 : o2.version) && (this._bitmapGenerator[l2.texturePage] || (this._bitmapGenerator[l2.texturePage] = new g(this._charAtlas.pages[l2.texturePage].canvas)), this._bitmapGenerator[l2.texturePage].refresh(), this._bitmapGenerator[l2.texturePage].version = this._charAtlas.pages[l2.texturePage].version), this._ctx.drawImage((null === (n2 = this._bitmapGenerator[l2.texturePage]) || void 0 === n2 ? void 0 : n2.bitmap) || this._charAtlas.pages[l2.texturePage].canvas, l2.texturePosition.x, l2.texturePosition.y, l2.size.x, l2.size.y, t3 * this._deviceCellWidth + this._deviceCharLeft - l2.offset.x, i3 * this._deviceCellHeight + this._deviceCharTop - l2.offset.y, l2.size.x, l2.size.y), this._ctx.restore());
          }
          _clipRow(e3) {
            this._ctx.beginPath(), this._ctx.rect(0, e3 * this._deviceCellHeight, this._bufferService.cols * this._deviceCellWidth, this._deviceCellHeight), this._ctx.clip();
          }
          _getFont(e3, t3) {
            return `${t3 ? "italic" : ""} ${e3 ? this._optionsService.rawOptions.fontWeightBold : this._optionsService.rawOptions.fontWeight} ${this._optionsService.rawOptions.fontSize * this._coreBrowserService.dpr}px ${this._optionsService.rawOptions.fontFamily}`;
          }
        }
        t2.BaseRenderLayer = u;
        class g {
          constructor(e3) {
            this.canvas = e3, this._state = 0, this._commitTimeout = void 0, this._bitmap = void 0, this.version = -1;
          }
          get bitmap() {
            return this._bitmap;
          }
          refresh() {
            var e3;
            null === (e3 = this._bitmap) || void 0 === e3 || e3.close(), this._bitmap = void 0, d.isSafari || (void 0 === this._commitTimeout && (this._commitTimeout = window.setTimeout(() => this._generate(), 100)), 1 === this._state && (this._state = 2));
          }
          _generate() {
            var e3;
            0 === this._state && (null === (e3 = this._bitmap) || void 0 === e3 || e3.close(), this._bitmap = void 0, this._state = 1, window.createImageBitmap(this.canvas).then((e4) => {
              2 === this._state ? this.refresh() : this._bitmap = e4, this._state = 0;
            }), this._commitTimeout && (this._commitTimeout = void 0));
          }
        }
      }, 949: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CanvasRenderer = void 0;
        const s2 = i2(627), r = i2(56), o = i2(374), n = i2(345), a = i2(859), h = i2(873), l = i2(43), c = i2(630), d = i2(744);
        class _ extends a.Disposable {
          constructor(e3, t3, i3, _2, u, g, f, v, C, p, x) {
            super(), this._terminal = e3, this._screenElement = t3, this._bufferService = _2, this._charSizeService = u, this._optionsService = g, this._coreBrowserService = C, this._themeService = x, this._onRequestRedraw = this.register(new n.EventEmitter()), this.onRequestRedraw = this._onRequestRedraw.event, this._onChangeTextureAtlas = this.register(new n.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new n.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event;
            const m = this._optionsService.rawOptions.allowTransparency;
            this._renderLayers = [new d.TextRenderLayer(this._terminal, this._screenElement, 0, m, this._bufferService, this._optionsService, f, p, this._coreBrowserService, x), new c.SelectionRenderLayer(this._terminal, this._screenElement, 1, this._bufferService, this._coreBrowserService, p, this._optionsService, x), new l.LinkRenderLayer(this._terminal, this._screenElement, 2, i3, this._bufferService, this._optionsService, p, this._coreBrowserService, x), new h.CursorRenderLayer(this._terminal, this._screenElement, 3, this._onRequestRedraw, this._bufferService, this._optionsService, v, this._coreBrowserService, p, x)];
            for (const e4 of this._renderLayers)
              (0, n.forwardEvent)(e4.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas);
            this.dimensions = (0, o.createRenderDimensions)(), this._devicePixelRatio = this._coreBrowserService.dpr, this._updateDimensions(), this.register((0, r.observeDevicePixelDimensions)(this._renderLayers[0].canvas, this._coreBrowserService.window, (e4, t4) => this._setCanvasDevicePixelDimensions(e4, t4))), this.register((0, a.toDisposable)(() => {
              for (const e4 of this._renderLayers)
                e4.dispose();
              (0, s2.removeTerminalFromCache)(this._terminal);
            }));
          }
          get textureAtlas() {
            return this._renderLayers[0].cacheCanvas;
          }
          handleDevicePixelRatioChange() {
            this._devicePixelRatio !== this._coreBrowserService.dpr && (this._devicePixelRatio = this._coreBrowserService.dpr, this.handleResize(this._bufferService.cols, this._bufferService.rows));
          }
          handleResize(e3, t3) {
            this._updateDimensions();
            for (const e4 of this._renderLayers)
              e4.resize(this.dimensions);
            this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
          }
          handleCharSizeChanged() {
            this.handleResize(this._bufferService.cols, this._bufferService.rows);
          }
          handleBlur() {
            this._runOperation((e3) => e3.handleBlur());
          }
          handleFocus() {
            this._runOperation((e3) => e3.handleFocus());
          }
          handleSelectionChanged(e3, t3, i3 = false) {
            this._runOperation((s3) => s3.handleSelectionChanged(e3, t3, i3)), this._themeService.colors.selectionForeground && this._onRequestRedraw.fire({ start: 0, end: this._bufferService.rows - 1 });
          }
          handleCursorMove() {
            this._runOperation((e3) => e3.handleCursorMove());
          }
          clear() {
            this._runOperation((e3) => e3.reset());
          }
          _runOperation(e3) {
            for (const t3 of this._renderLayers)
              e3(t3);
          }
          renderRows(e3, t3) {
            for (const i3 of this._renderLayers)
              i3.handleGridChanged(e3, t3);
          }
          clearTextureAtlas() {
            for (const e3 of this._renderLayers)
              e3.clearTextureAtlas();
          }
          _updateDimensions() {
            if (!this._charSizeService.hasValidSize)
              return;
            const e3 = this._coreBrowserService.dpr;
            this.dimensions.device.char.width = Math.floor(this._charSizeService.width * e3), this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e3), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.top = 1 === this._optionsService.rawOptions.lineHeight ? 0 : Math.round((this.dimensions.device.cell.height - this.dimensions.device.char.height) / 2), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.char.left = Math.floor(this._optionsService.rawOptions.letterSpacing / 2), this.dimensions.device.canvas.height = this._bufferService.rows * this.dimensions.device.cell.height, this.dimensions.device.canvas.width = this._bufferService.cols * this.dimensions.device.cell.width, this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e3), this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e3), this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows, this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols;
          }
          _setCanvasDevicePixelDimensions(e3, t3) {
            this.dimensions.device.canvas.height = t3, this.dimensions.device.canvas.width = e3;
            for (const e4 of this._renderLayers)
              e4.resize(this.dimensions);
            this._requestRedrawViewport();
          }
          _requestRedrawViewport() {
            this._onRequestRedraw.fire({ start: 0, end: this._bufferService.rows - 1 });
          }
        }
        t2.CanvasRenderer = _;
      }, 873: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CursorRenderLayer = void 0;
        const s2 = i2(903), r = i2(782), o = i2(859), n = i2(399);
        class a extends s2.BaseRenderLayer {
          constructor(e3, t3, i3, s3, n2, a2, h2, l, c, d) {
            super(e3, t3, "cursor", i3, true, d, n2, a2, c, l), this._onRequestRedraw = s3, this._coreService = h2, this._cell = new r.CellData(), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 }, this._cursorRenderers = { bar: this._renderBarCursor.bind(this), block: this._renderBlockCursor.bind(this), underline: this._renderUnderlineCursor.bind(this) }, this.register(a2.onOptionChange(() => this._handleOptionsChanged())), this.register((0, o.toDisposable)(() => {
              var e4;
              null === (e4 = this._cursorBlinkStateManager) || void 0 === e4 || e4.dispose(), this._cursorBlinkStateManager = void 0;
            }));
          }
          resize(e3) {
            super.resize(e3), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 };
          }
          reset() {
            var e3;
            this._clearCursor(), null === (e3 = this._cursorBlinkStateManager) || void 0 === e3 || e3.restartBlinkAnimation(), this._handleOptionsChanged();
          }
          handleBlur() {
            var e3;
            null === (e3 = this._cursorBlinkStateManager) || void 0 === e3 || e3.pause(), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
          }
          handleFocus() {
            var e3;
            null === (e3 = this._cursorBlinkStateManager) || void 0 === e3 || e3.resume(), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
          }
          _handleOptionsChanged() {
            var e3;
            this._optionsService.rawOptions.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new h(this._coreBrowserService.isFocused, () => {
              this._render(true);
            }, this._coreBrowserService)) : (null === (e3 = this._cursorBlinkStateManager) || void 0 === e3 || e3.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRedraw.fire({ start: this._bufferService.buffer.y, end: this._bufferService.buffer.y });
          }
          handleCursorMove() {
            var e3;
            null === (e3 = this._cursorBlinkStateManager) || void 0 === e3 || e3.restartBlinkAnimation();
          }
          handleGridChanged(e3, t3) {
            !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(false) : this._cursorBlinkStateManager.restartBlinkAnimation();
          }
          _render(e3) {
            if (!this._coreService.isCursorInitialized || this._coreService.isCursorHidden)
              return void this._clearCursor();
            const t3 = this._bufferService.buffer.ybase + this._bufferService.buffer.y, i3 = t3 - this._bufferService.buffer.ydisp;
            if (i3 < 0 || i3 >= this._bufferService.rows)
              return void this._clearCursor();
            const s3 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
            if (this._bufferService.buffer.lines.get(t3).loadCell(s3, this._cell), void 0 !== this._cell.content) {
              if (!this._coreBrowserService.isFocused) {
                this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css;
                const e4 = this._optionsService.rawOptions.cursorStyle;
                return this._renderBlurCursor(s3, i3, this._cell), this._ctx.restore(), this._state.x = s3, this._state.y = i3, this._state.isFocused = false, this._state.style = e4, void (this._state.width = this._cell.getWidth());
              }
              if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                if (this._state) {
                  if (this._state.x === s3 && this._state.y === i3 && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.rawOptions.cursorStyle && this._state.width === this._cell.getWidth())
                    return;
                  this._clearCursor();
                }
                this._ctx.save(), this._cursorRenderers[this._optionsService.rawOptions.cursorStyle || "block"](s3, i3, this._cell), this._ctx.restore(), this._state.x = s3, this._state.y = i3, this._state.isFocused = false, this._state.style = this._optionsService.rawOptions.cursorStyle, this._state.width = this._cell.getWidth();
              } else
                this._clearCursor();
            }
          }
          _clearCursor() {
            this._state && (n.isFirefox || this._coreBrowserService.dpr < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 });
          }
          _renderBarCursor(e3, t3, i3) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillLeftLineAtCell(e3, t3, this._optionsService.rawOptions.cursorWidth), this._ctx.restore();
          }
          _renderBlockCursor(e3, t3, i3) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillCells(e3, t3, i3.getWidth(), 1), this._ctx.fillStyle = this._themeService.colors.cursorAccent.css, this._fillCharTrueColor(i3, e3, t3), this._ctx.restore();
          }
          _renderUnderlineCursor(e3, t3, i3) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillBottomLineAtCells(e3, t3), this._ctx.restore();
          }
          _renderBlurCursor(e3, t3, i3) {
            this._ctx.save(), this._ctx.strokeStyle = this._themeService.colors.cursor.css, this._strokeRectAtCell(e3, t3, i3.getWidth(), 1), this._ctx.restore();
          }
        }
        t2.CursorRenderLayer = a;
        class h {
          constructor(e3, t3, i3) {
            this._renderCallback = t3, this._coreBrowserService = i3, this.isCursorVisible = true, e3 && this._restartInterval();
          }
          get isPaused() {
            return !(this._blinkStartTimeout || this._blinkInterval);
          }
          dispose() {
            this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
          }
          restartBlinkAnimation() {
            this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = true, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
              this._renderCallback(), this._animationFrame = void 0;
            })));
          }
          _restartInterval(e3 = 600) {
            this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = this._coreBrowserService.window.setTimeout(() => {
              if (this._animationTimeRestarted) {
                const e4 = 600 - (Date.now() - this._animationTimeRestarted);
                if (this._animationTimeRestarted = void 0, e4 > 0)
                  return void this._restartInterval(e4);
              }
              this.isCursorVisible = false, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                this._renderCallback(), this._animationFrame = void 0;
              }), this._blinkInterval = this._coreBrowserService.window.setInterval(() => {
                if (this._animationTimeRestarted) {
                  const e4 = 600 - (Date.now() - this._animationTimeRestarted);
                  return this._animationTimeRestarted = void 0, void this._restartInterval(e4);
                }
                this.isCursorVisible = !this.isCursorVisible, this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                  this._renderCallback(), this._animationFrame = void 0;
                });
              }, 600);
            }, e3);
          }
          pause() {
            this.isCursorVisible = true, this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
          }
          resume() {
            this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation();
          }
        }
      }, 574: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.GridCache = void 0, t2.GridCache = class {
          constructor() {
            this.cache = [];
          }
          resize(e3, t3) {
            for (let i2 = 0; i2 < e3; i2++) {
              this.cache.length <= i2 && this.cache.push([]);
              for (let e4 = this.cache[i2].length; e4 < t3; e4++)
                this.cache[i2].push(void 0);
              this.cache[i2].length = t3;
            }
            this.cache.length = e3;
          }
          clear() {
            for (let e3 = 0; e3 < this.cache.length; e3++)
              for (let t3 = 0; t3 < this.cache[e3].length; t3++)
                this.cache[e3][t3] = void 0;
          }
        };
      }, 43: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LinkRenderLayer = void 0;
        const s2 = i2(903), r = i2(237), o = i2(197);
        class n extends s2.BaseRenderLayer {
          constructor(e3, t3, i3, s3, r2, o2, n2, a, h) {
            super(e3, t3, "link", i3, true, h, r2, o2, n2, a), this.register(s3.onShowLinkUnderline((e4) => this._handleShowLinkUnderline(e4))), this.register(s3.onHideLinkUnderline((e4) => this._handleHideLinkUnderline(e4)));
          }
          resize(e3) {
            super.resize(e3), this._state = void 0;
          }
          reset() {
            this._clearCurrentLink();
          }
          _clearCurrentLink() {
            if (this._state) {
              this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
              const e3 = this._state.y2 - this._state.y1 - 1;
              e3 > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e3), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
            }
          }
          _handleShowLinkUnderline(e3) {
            if (e3.fg === r.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._themeService.colors.background.css : e3.fg && (0, o.is256Color)(e3.fg) ? this._ctx.fillStyle = this._themeService.colors.ansi[e3.fg].css : this._ctx.fillStyle = this._themeService.colors.foreground.css, e3.y1 === e3.y2)
              this._fillBottomLineAtCells(e3.x1, e3.y1, e3.x2 - e3.x1);
            else {
              this._fillBottomLineAtCells(e3.x1, e3.y1, e3.cols - e3.x1);
              for (let t3 = e3.y1 + 1; t3 < e3.y2; t3++)
                this._fillBottomLineAtCells(0, t3, e3.cols);
              this._fillBottomLineAtCells(0, e3.y2, e3.x2);
            }
            this._state = e3;
          }
          _handleHideLinkUnderline(e3) {
            this._clearCurrentLink();
          }
        }
        t2.LinkRenderLayer = n;
      }, 630: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionRenderLayer = void 0;
        const s2 = i2(903);
        class r extends s2.BaseRenderLayer {
          constructor(e3, t3, i3, s3, r2, o, n, a) {
            super(e3, t3, "selection", i3, true, a, s3, n, o, r2), this._clearState();
          }
          _clearState() {
            this._state = { start: void 0, end: void 0, columnSelectMode: void 0, ydisp: void 0 };
          }
          resize(e3) {
            super.resize(e3), this._selectionModel.selectionStart && this._selectionModel.selectionEnd && (this._clearState(), this._redrawSelection(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode));
          }
          reset() {
            this._state.start && this._state.end && (this._clearState(), this._clearAll());
          }
          handleBlur() {
            this.reset(), this._redrawSelection(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode);
          }
          handleFocus() {
            this.reset(), this._redrawSelection(this._selectionModel.selectionStart, this._selectionModel.selectionEnd, this._selectionModel.columnSelectMode);
          }
          handleSelectionChanged(e3, t3, i3) {
            super.handleSelectionChanged(e3, t3, i3), this._redrawSelection(e3, t3, i3);
          }
          _redrawSelection(e3, t3, i3) {
            if (!this._didStateChange(e3, t3, i3, this._bufferService.buffer.ydisp))
              return;
            if (this._clearAll(), !e3 || !t3)
              return void this._clearState();
            const s3 = e3[1] - this._bufferService.buffer.ydisp, r2 = t3[1] - this._bufferService.buffer.ydisp, o = Math.max(s3, 0), n = Math.min(r2, this._bufferService.rows - 1);
            if (o >= this._bufferService.rows || n < 0)
              this._state.ydisp = this._bufferService.buffer.ydisp;
            else {
              if (this._ctx.fillStyle = (this._coreBrowserService.isFocused ? this._themeService.colors.selectionBackgroundTransparent : this._themeService.colors.selectionInactiveBackgroundTransparent).css, i3) {
                const i4 = e3[0], s4 = t3[0] - i4, r3 = n - o + 1;
                this._fillCells(i4, o, s4, r3);
              } else {
                const i4 = s3 === o ? e3[0] : 0, a = o === r2 ? t3[0] : this._bufferService.cols;
                this._fillCells(i4, o, a - i4, 1);
                const h = Math.max(n - o - 1, 0);
                if (this._fillCells(0, o + 1, this._bufferService.cols, h), o !== n) {
                  const e4 = r2 === n ? t3[0] : this._bufferService.cols;
                  this._fillCells(0, n, e4, 1);
                }
              }
              this._state.start = [e3[0], e3[1]], this._state.end = [t3[0], t3[1]], this._state.columnSelectMode = i3, this._state.ydisp = this._bufferService.buffer.ydisp;
            }
          }
          _didStateChange(e3, t3, i3, s3) {
            return !this._areCoordinatesEqual(e3, this._state.start) || !this._areCoordinatesEqual(t3, this._state.end) || i3 !== this._state.columnSelectMode || s3 !== this._state.ydisp;
          }
          _areCoordinatesEqual(e3, t3) {
            return !(!e3 || !t3) && e3[0] === t3[0] && e3[1] === t3[1];
          }
        }
        t2.SelectionRenderLayer = r;
      }, 744: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TextRenderLayer = void 0;
        const s2 = i2(574), r = i2(903), o = i2(147), n = i2(855), a = i2(782), h = i2(577);
        class l extends r.BaseRenderLayer {
          constructor(e3, t3, i3, r2, o2, n2, h2, l2, c, d) {
            super(e3, t3, "text", i3, r2, d, o2, n2, l2, c), this._characterJoinerService = h2, this._characterWidth = 0, this._characterFont = "", this._characterOverlapCache = {}, this._workCell = new a.CellData(), this._state = new s2.GridCache(), this.register(n2.onSpecificOptionChange("allowTransparency", (e4) => this._setTransparency(e4)));
          }
          resize(e3) {
            super.resize(e3);
            const t3 = this._getFont(false, false);
            this._characterWidth === e3.device.char.width && this._characterFont === t3 || (this._characterWidth = e3.device.char.width, this._characterFont = t3, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows);
          }
          reset() {
            this._state.clear(), this._clearAll();
          }
          _forEachCell(e3, t3, i3) {
            for (let s3 = e3; s3 <= t3; s3++) {
              const e4 = s3 + this._bufferService.buffer.ydisp, t4 = this._bufferService.buffer.lines.get(e4), r2 = this._characterJoinerService.getJoinedCharacters(e4);
              for (let e5 = 0; e5 < this._bufferService.cols; e5++) {
                t4.loadCell(e5, this._workCell);
                let o2 = this._workCell, a2 = false, l2 = e5;
                if (0 !== o2.getWidth()) {
                  if (r2.length > 0 && e5 === r2[0][0]) {
                    a2 = true;
                    const e6 = r2.shift();
                    o2 = new h.JoinedCellData(this._workCell, t4.translateToString(true, e6[0], e6[1]), e6[1] - e6[0]), l2 = e6[1] - 1;
                  }
                  !a2 && this._isOverlapping(o2) && l2 < t4.length - 1 && t4.getCodePoint(l2 + 1) === n.NULL_CELL_CODE && (o2.content &= -12582913, o2.content |= 2 << 22), i3(o2, e5, s3), e5 = l2;
                }
              }
            }
          }
          _drawBackground(e3, t3) {
            const i3 = this._ctx, s3 = this._bufferService.cols;
            let r2 = 0, n2 = 0, a2 = null;
            i3.save(), this._forEachCell(e3, t3, (e4, t4, h2) => {
              let l2 = null;
              e4.isInverse() ? l2 = e4.isFgDefault() ? this._themeService.colors.foreground.css : e4.isFgRGB() ? `rgb(${o.AttributeData.toColorRGB(e4.getFgColor()).join(",")})` : this._themeService.colors.ansi[e4.getFgColor()].css : e4.isBgRGB() ? l2 = `rgb(${o.AttributeData.toColorRGB(e4.getBgColor()).join(",")})` : e4.isBgPalette() && (l2 = this._themeService.colors.ansi[e4.getBgColor()].css);
              let c = false;
              this._decorationService.forEachDecorationAtCell(t4, this._bufferService.buffer.ydisp + h2, void 0, (e5) => {
                "top" !== e5.options.layer && c || (e5.backgroundColorRGB && (l2 = e5.backgroundColorRGB.css), c = "top" === e5.options.layer);
              }), null === a2 && (r2 = t4, n2 = h2), h2 !== n2 ? (i3.fillStyle = a2 || "", this._fillCells(r2, n2, s3 - r2, 1), r2 = t4, n2 = h2) : a2 !== l2 && (i3.fillStyle = a2 || "", this._fillCells(r2, n2, t4 - r2, 1), r2 = t4, n2 = h2), a2 = l2;
            }), null !== a2 && (i3.fillStyle = a2, this._fillCells(r2, n2, s3 - r2, 1)), i3.restore();
          }
          _drawForeground(e3, t3) {
            this._forEachCell(e3, t3, (e4, t4, i3) => this._drawChars(e4, t4, i3));
          }
          handleGridChanged(e3, t3) {
            0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e3, this._bufferService.cols, t3 - e3 + 1), this._drawBackground(e3, t3), this._drawForeground(e3, t3));
          }
          _isOverlapping(e3) {
            if (1 !== e3.getWidth())
              return false;
            if (e3.getCode() < 256)
              return false;
            const t3 = e3.getChars();
            if (this._characterOverlapCache.hasOwnProperty(t3))
              return this._characterOverlapCache[t3];
            this._ctx.save(), this._ctx.font = this._characterFont;
            const i3 = Math.floor(this._ctx.measureText(t3).width) > this._characterWidth;
            return this._ctx.restore(), this._characterOverlapCache[t3] = i3, i3;
          }
        }
        t2.TextRenderLayer = l;
      }, 274: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CellColorResolver = void 0;
        let i2, s2 = 0, r = 0, o = false, n = false, a = false;
        t2.CellColorResolver = class {
          constructor(e3, t3, i3, s3, r2) {
            this._terminal = e3, this._selectionRenderModel = t3, this._decorationService = i3, this._coreBrowserService = s3, this._themeService = r2, this.result = { fg: 0, bg: 0, ext: 0 };
          }
          resolve(e3, t3, h) {
            this.result.bg = e3.bg, this.result.fg = e3.fg, this.result.ext = 268435456 & e3.bg ? e3.extended.ext : 0, r = 0, s2 = 0, n = false, o = false, a = false, i2 = this._themeService.colors, this._decorationService.forEachDecorationAtCell(t3, h, "bottom", (e4) => {
              e4.backgroundColorRGB && (r = e4.backgroundColorRGB.rgba >> 8 & 16777215, n = true), e4.foregroundColorRGB && (s2 = e4.foregroundColorRGB.rgba >> 8 & 16777215, o = true);
            }), a = this._selectionRenderModel.isCellSelected(this._terminal, t3, h), a && (r = (this._coreBrowserService.isFocused ? i2.selectionBackgroundOpaque : i2.selectionInactiveBackgroundOpaque).rgba >> 8 & 16777215, n = true, i2.selectionForeground && (s2 = i2.selectionForeground.rgba >> 8 & 16777215, o = true)), this._decorationService.forEachDecorationAtCell(t3, h, "top", (e4) => {
              e4.backgroundColorRGB && (r = e4.backgroundColorRGB.rgba >> 8 & 16777215, n = true), e4.foregroundColorRGB && (s2 = e4.foregroundColorRGB.rgba >> 8 & 16777215, o = true);
            }), n && (r = a ? -16777216 & e3.bg & -134217729 | r | 50331648 : -16777216 & e3.bg | r | 50331648), o && (s2 = -16777216 & e3.fg & -67108865 | s2 | 50331648), 67108864 & this.result.fg && (n && !o && (s2 = 0 == (50331648 & this.result.bg) ? -134217728 & this.result.fg | 16777215 & i2.background.rgba >> 8 | 50331648 : -134217728 & this.result.fg | 67108863 & this.result.bg, o = true), !n && o && (r = 0 == (50331648 & this.result.fg) ? -67108864 & this.result.bg | 16777215 & i2.foreground.rgba >> 8 | 50331648 : -67108864 & this.result.bg | 67108863 & this.result.fg, n = true)), i2 = void 0, this.result.bg = n ? r : this.result.bg, this.result.fg = o ? s2 : this.result.fg;
          }
        };
      }, 627: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.removeTerminalFromCache = t2.acquireTextureAtlas = void 0;
        const s2 = i2(509), r = i2(197), o = [];
        t2.acquireTextureAtlas = function(e3, t3, i3, n, a, h, l, c) {
          const d = (0, r.generateConfig)(n, a, h, l, t3, i3, c);
          for (let t4 = 0; t4 < o.length; t4++) {
            const i4 = o[t4], s3 = i4.ownedBy.indexOf(e3);
            if (s3 >= 0) {
              if ((0, r.configEquals)(i4.config, d))
                return i4.atlas;
              1 === i4.ownedBy.length ? (i4.atlas.dispose(), o.splice(t4, 1)) : i4.ownedBy.splice(s3, 1);
              break;
            }
          }
          for (let t4 = 0; t4 < o.length; t4++) {
            const i4 = o[t4];
            if ((0, r.configEquals)(i4.config, d))
              return i4.ownedBy.push(e3), i4.atlas;
          }
          const _ = e3._core, u = { atlas: new s2.TextureAtlas(document, d, _.unicodeService), config: d, ownedBy: [e3] };
          return o.push(u), u.atlas;
        }, t2.removeTerminalFromCache = function(e3) {
          for (let t3 = 0; t3 < o.length; t3++) {
            const i3 = o[t3].ownedBy.indexOf(e3);
            if (-1 !== i3) {
              1 === o[t3].ownedBy.length ? (o[t3].atlas.dispose(), o.splice(t3, 1)) : o[t3].ownedBy.splice(i3, 1);
              break;
            }
          }
        };
      }, 197: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.is256Color = t2.configEquals = t2.generateConfig = void 0;
        const s2 = i2(160);
        t2.generateConfig = function(e3, t3, i3, r, o, n, a) {
          const h = { foreground: n.foreground, background: n.background, cursor: s2.NULL_COLOR, cursorAccent: s2.NULL_COLOR, selectionForeground: s2.NULL_COLOR, selectionBackgroundTransparent: s2.NULL_COLOR, selectionBackgroundOpaque: s2.NULL_COLOR, selectionInactiveBackgroundTransparent: s2.NULL_COLOR, selectionInactiveBackgroundOpaque: s2.NULL_COLOR, ansi: n.ansi.slice(), contrastCache: n.contrastCache };
          return { customGlyphs: o.customGlyphs, devicePixelRatio: a, letterSpacing: o.letterSpacing, lineHeight: o.lineHeight, deviceCellWidth: e3, deviceCellHeight: t3, deviceCharWidth: i3, deviceCharHeight: r, fontFamily: o.fontFamily, fontSize: o.fontSize, fontWeight: o.fontWeight, fontWeightBold: o.fontWeightBold, allowTransparency: o.allowTransparency, drawBoldTextInBrightColors: o.drawBoldTextInBrightColors, minimumContrastRatio: o.minimumContrastRatio, colors: h };
        }, t2.configEquals = function(e3, t3) {
          for (let i3 = 0; i3 < e3.colors.ansi.length; i3++)
            if (e3.colors.ansi[i3].rgba !== t3.colors.ansi[i3].rgba)
              return false;
          return e3.devicePixelRatio === t3.devicePixelRatio && e3.customGlyphs === t3.customGlyphs && e3.lineHeight === t3.lineHeight && e3.letterSpacing === t3.letterSpacing && e3.fontFamily === t3.fontFamily && e3.fontSize === t3.fontSize && e3.fontWeight === t3.fontWeight && e3.fontWeightBold === t3.fontWeightBold && e3.allowTransparency === t3.allowTransparency && e3.deviceCharWidth === t3.deviceCharWidth && e3.deviceCharHeight === t3.deviceCharHeight && e3.drawBoldTextInBrightColors === t3.drawBoldTextInBrightColors && e3.minimumContrastRatio === t3.minimumContrastRatio && e3.colors.foreground.rgba === t3.colors.foreground.rgba && e3.colors.background.rgba === t3.colors.background.rgba;
        }, t2.is256Color = function(e3) {
          return 16777216 == (50331648 & e3) || 33554432 == (50331648 & e3);
        };
      }, 237: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TEXT_BASELINE = t2.DIM_OPACITY = t2.INVERTED_DEFAULT_COLOR = void 0;
        const s2 = i2(399);
        t2.INVERTED_DEFAULT_COLOR = 257, t2.DIM_OPACITY = 0.5, t2.TEXT_BASELINE = s2.isFirefox || s2.isLegacyEdge ? "bottom" : "ideographic";
      }, 860: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.tryDrawCustomChar = t2.powerlineDefinitions = t2.boxDrawingDefinitions = t2.blockElementDefinitions = void 0;
        const s2 = i2(374);
        t2.blockElementDefinitions = { "▀": [{ x: 0, y: 0, w: 8, h: 4 }], "▁": [{ x: 0, y: 7, w: 8, h: 1 }], "▂": [{ x: 0, y: 6, w: 8, h: 2 }], "▃": [{ x: 0, y: 5, w: 8, h: 3 }], "▄": [{ x: 0, y: 4, w: 8, h: 4 }], "▅": [{ x: 0, y: 3, w: 8, h: 5 }], "▆": [{ x: 0, y: 2, w: 8, h: 6 }], "▇": [{ x: 0, y: 1, w: 8, h: 7 }], "█": [{ x: 0, y: 0, w: 8, h: 8 }], "▉": [{ x: 0, y: 0, w: 7, h: 8 }], "▊": [{ x: 0, y: 0, w: 6, h: 8 }], "▋": [{ x: 0, y: 0, w: 5, h: 8 }], "▌": [{ x: 0, y: 0, w: 4, h: 8 }], "▍": [{ x: 0, y: 0, w: 3, h: 8 }], "▎": [{ x: 0, y: 0, w: 2, h: 8 }], "▏": [{ x: 0, y: 0, w: 1, h: 8 }], "▐": [{ x: 4, y: 0, w: 4, h: 8 }], "▔": [{ x: 0, y: 0, w: 8, h: 1 }], "▕": [{ x: 7, y: 0, w: 1, h: 8 }], "▖": [{ x: 0, y: 4, w: 4, h: 4 }], "▗": [{ x: 4, y: 4, w: 4, h: 4 }], "▘": [{ x: 0, y: 0, w: 4, h: 4 }], "▙": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "▚": [{ x: 0, y: 0, w: 4, h: 4 }, { x: 4, y: 4, w: 4, h: 4 }], "▛": [{ x: 0, y: 0, w: 4, h: 8 }, { x: 4, y: 0, w: 4, h: 4 }], "▜": [{ x: 0, y: 0, w: 8, h: 4 }, { x: 4, y: 0, w: 4, h: 8 }], "▝": [{ x: 4, y: 0, w: 4, h: 4 }], "▞": [{ x: 4, y: 0, w: 4, h: 4 }, { x: 0, y: 4, w: 4, h: 4 }], "▟": [{ x: 4, y: 0, w: 4, h: 8 }, { x: 0, y: 4, w: 8, h: 4 }], "🭰": [{ x: 1, y: 0, w: 1, h: 8 }], "🭱": [{ x: 2, y: 0, w: 1, h: 8 }], "🭲": [{ x: 3, y: 0, w: 1, h: 8 }], "🭳": [{ x: 4, y: 0, w: 1, h: 8 }], "🭴": [{ x: 5, y: 0, w: 1, h: 8 }], "🭵": [{ x: 6, y: 0, w: 1, h: 8 }], "🭶": [{ x: 0, y: 1, w: 8, h: 1 }], "🭷": [{ x: 0, y: 2, w: 8, h: 1 }], "🭸": [{ x: 0, y: 3, w: 8, h: 1 }], "🭹": [{ x: 0, y: 4, w: 8, h: 1 }], "🭺": [{ x: 0, y: 5, w: 8, h: 1 }], "🭻": [{ x: 0, y: 6, w: 8, h: 1 }], "🭼": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "🭽": [{ x: 0, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "🭾": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 0, w: 8, h: 1 }], "🭿": [{ x: 7, y: 0, w: 1, h: 8 }, { x: 0, y: 7, w: 8, h: 1 }], "🮀": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "🮁": [{ x: 0, y: 0, w: 8, h: 1 }, { x: 0, y: 2, w: 8, h: 1 }, { x: 0, y: 4, w: 8, h: 1 }, { x: 0, y: 7, w: 8, h: 1 }], "🮂": [{ x: 0, y: 0, w: 8, h: 2 }], "🮃": [{ x: 0, y: 0, w: 8, h: 3 }], "🮄": [{ x: 0, y: 0, w: 8, h: 5 }], "🮅": [{ x: 0, y: 0, w: 8, h: 6 }], "🮆": [{ x: 0, y: 0, w: 8, h: 7 }], "🮇": [{ x: 6, y: 0, w: 2, h: 8 }], "🮈": [{ x: 5, y: 0, w: 3, h: 8 }], "🮉": [{ x: 3, y: 0, w: 5, h: 8 }], "🮊": [{ x: 2, y: 0, w: 6, h: 8 }], "🮋": [{ x: 1, y: 0, w: 7, h: 8 }], "🮕": [{ x: 0, y: 0, w: 2, h: 2 }, { x: 4, y: 0, w: 2, h: 2 }, { x: 2, y: 2, w: 2, h: 2 }, { x: 6, y: 2, w: 2, h: 2 }, { x: 0, y: 4, w: 2, h: 2 }, { x: 4, y: 4, w: 2, h: 2 }, { x: 2, y: 6, w: 2, h: 2 }, { x: 6, y: 6, w: 2, h: 2 }], "🮖": [{ x: 2, y: 0, w: 2, h: 2 }, { x: 6, y: 0, w: 2, h: 2 }, { x: 0, y: 2, w: 2, h: 2 }, { x: 4, y: 2, w: 2, h: 2 }, { x: 2, y: 4, w: 2, h: 2 }, { x: 6, y: 4, w: 2, h: 2 }, { x: 0, y: 6, w: 2, h: 2 }, { x: 4, y: 6, w: 2, h: 2 }], "🮗": [{ x: 0, y: 2, w: 8, h: 2 }, { x: 0, y: 6, w: 8, h: 2 }] };
        const r = { "░": [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]], "▒": [[1, 0], [0, 0], [0, 1], [0, 0]], "▓": [[0, 1], [1, 1], [1, 0], [1, 1]] };
        t2.boxDrawingDefinitions = { "─": { 1: "M0,.5 L1,.5" }, "━": { 3: "M0,.5 L1,.5" }, "│": { 1: "M.5,0 L.5,1" }, "┃": { 3: "M.5,0 L.5,1" }, "┌": { 1: "M0.5,1 L.5,.5 L1,.5" }, "┏": { 3: "M0.5,1 L.5,.5 L1,.5" }, "┐": { 1: "M0,.5 L.5,.5 L.5,1" }, "┓": { 3: "M0,.5 L.5,.5 L.5,1" }, "└": { 1: "M.5,0 L.5,.5 L1,.5" }, "┗": { 3: "M.5,0 L.5,.5 L1,.5" }, "┘": { 1: "M.5,0 L.5,.5 L0,.5" }, "┛": { 3: "M.5,0 L.5,.5 L0,.5" }, "├": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "┣": { 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "┤": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "┫": { 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "┬": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "┳": { 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "┴": { 1: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "┻": { 3: "M0,.5 L1,.5 M.5,.5 L.5,0" }, "┼": { 1: "M0,.5 L1,.5 M.5,0 L.5,1" }, "╋": { 3: "M0,.5 L1,.5 M.5,0 L.5,1" }, "╴": { 1: "M.5,.5 L0,.5" }, "╸": { 3: "M.5,.5 L0,.5" }, "╵": { 1: "M.5,.5 L.5,0" }, "╹": { 3: "M.5,.5 L.5,0" }, "╶": { 1: "M.5,.5 L1,.5" }, "╺": { 3: "M.5,.5 L1,.5" }, "╷": { 1: "M.5,.5 L.5,1" }, "╻": { 3: "M.5,.5 L.5,1" }, "═": { 1: (e3, t3) => `M0,${0.5 - t3} L1,${0.5 - t3} M0,${0.5 + t3} L1,${0.5 + t3}` }, "║": { 1: (e3, t3) => `M${0.5 - e3},0 L${0.5 - e3},1 M${0.5 + e3},0 L${0.5 + e3},1` }, "╒": { 1: (e3, t3) => `M.5,1 L.5,${0.5 - t3} L1,${0.5 - t3} M.5,${0.5 + t3} L1,${0.5 + t3}` }, "╓": { 1: (e3, t3) => `M${0.5 - e3},1 L${0.5 - e3},.5 L1,.5 M${0.5 + e3},.5 L${0.5 + e3},1` }, "╔": { 1: (e3, t3) => `M1,${0.5 - t3} L${0.5 - e3},${0.5 - t3} L${0.5 - e3},1 M1,${0.5 + t3} L${0.5 + e3},${0.5 + t3} L${0.5 + e3},1` }, "╕": { 1: (e3, t3) => `M0,${0.5 - t3} L.5,${0.5 - t3} L.5,1 M0,${0.5 + t3} L.5,${0.5 + t3}` }, "╖": { 1: (e3, t3) => `M${0.5 + e3},1 L${0.5 + e3},.5 L0,.5 M${0.5 - e3},.5 L${0.5 - e3},1` }, "╗": { 1: (e3, t3) => `M0,${0.5 + t3} L${0.5 - e3},${0.5 + t3} L${0.5 - e3},1 M0,${0.5 - t3} L${0.5 + e3},${0.5 - t3} L${0.5 + e3},1` }, "╘": { 1: (e3, t3) => `M.5,0 L.5,${0.5 + t3} L1,${0.5 + t3} M.5,${0.5 - t3} L1,${0.5 - t3}` }, "╙": { 1: (e3, t3) => `M1,.5 L${0.5 - e3},.5 L${0.5 - e3},0 M${0.5 + e3},.5 L${0.5 + e3},0` }, "╚": { 1: (e3, t3) => `M1,${0.5 - t3} L${0.5 + e3},${0.5 - t3} L${0.5 + e3},0 M1,${0.5 + t3} L${0.5 - e3},${0.5 + t3} L${0.5 - e3},0` }, "╛": { 1: (e3, t3) => `M0,${0.5 + t3} L.5,${0.5 + t3} L.5,0 M0,${0.5 - t3} L.5,${0.5 - t3}` }, "╜": { 1: (e3, t3) => `M0,.5 L${0.5 + e3},.5 L${0.5 + e3},0 M${0.5 - e3},.5 L${0.5 - e3},0` }, "╝": { 1: (e3, t3) => `M0,${0.5 - t3} L${0.5 - e3},${0.5 - t3} L${0.5 - e3},0 M0,${0.5 + t3} L${0.5 + e3},${0.5 + t3} L${0.5 + e3},0` }, "╞": { 1: (e3, t3) => `M.5,0 L.5,1 M.5,${0.5 - t3} L1,${0.5 - t3} M.5,${0.5 + t3} L1,${0.5 + t3}` }, "╟": { 1: (e3, t3) => `M${0.5 - e3},0 L${0.5 - e3},1 M${0.5 + e3},0 L${0.5 + e3},1 M${0.5 + e3},.5 L1,.5` }, "╠": { 1: (e3, t3) => `M${0.5 - e3},0 L${0.5 - e3},1 M1,${0.5 + t3} L${0.5 + e3},${0.5 + t3} L${0.5 + e3},1 M1,${0.5 - t3} L${0.5 + e3},${0.5 - t3} L${0.5 + e3},0` }, "╡": { 1: (e3, t3) => `M.5,0 L.5,1 M0,${0.5 - t3} L.5,${0.5 - t3} M0,${0.5 + t3} L.5,${0.5 + t3}` }, "╢": { 1: (e3, t3) => `M0,.5 L${0.5 - e3},.5 M${0.5 - e3},0 L${0.5 - e3},1 M${0.5 + e3},0 L${0.5 + e3},1` }, "╣": { 1: (e3, t3) => `M${0.5 + e3},0 L${0.5 + e3},1 M0,${0.5 + t3} L${0.5 - e3},${0.5 + t3} L${0.5 - e3},1 M0,${0.5 - t3} L${0.5 - e3},${0.5 - t3} L${0.5 - e3},0` }, "╤": { 1: (e3, t3) => `M0,${0.5 - t3} L1,${0.5 - t3} M0,${0.5 + t3} L1,${0.5 + t3} M.5,${0.5 + t3} L.5,1` }, "╥": { 1: (e3, t3) => `M0,.5 L1,.5 M${0.5 - e3},.5 L${0.5 - e3},1 M${0.5 + e3},.5 L${0.5 + e3},1` }, "╦": { 1: (e3, t3) => `M0,${0.5 - t3} L1,${0.5 - t3} M0,${0.5 + t3} L${0.5 - e3},${0.5 + t3} L${0.5 - e3},1 M1,${0.5 + t3} L${0.5 + e3},${0.5 + t3} L${0.5 + e3},1` }, "╧": { 1: (e3, t3) => `M.5,0 L.5,${0.5 - t3} M0,${0.5 - t3} L1,${0.5 - t3} M0,${0.5 + t3} L1,${0.5 + t3}` }, "╨": { 1: (e3, t3) => `M0,.5 L1,.5 M${0.5 - e3},.5 L${0.5 - e3},0 M${0.5 + e3},.5 L${0.5 + e3},0` }, "╩": { 1: (e3, t3) => `M0,${0.5 + t3} L1,${0.5 + t3} M0,${0.5 - t3} L${0.5 - e3},${0.5 - t3} L${0.5 - e3},0 M1,${0.5 - t3} L${0.5 + e3},${0.5 - t3} L${0.5 + e3},0` }, "╪": { 1: (e3, t3) => `M.5,0 L.5,1 M0,${0.5 - t3} L1,${0.5 - t3} M0,${0.5 + t3} L1,${0.5 + t3}` }, "╫": { 1: (e3, t3) => `M0,.5 L1,.5 M${0.5 - e3},0 L${0.5 - e3},1 M${0.5 + e3},0 L${0.5 + e3},1` }, "╬": { 1: (e3, t3) => `M0,${0.5 + t3} L${0.5 - e3},${0.5 + t3} L${0.5 - e3},1 M1,${0.5 + t3} L${0.5 + e3},${0.5 + t3} L${0.5 + e3},1 M0,${0.5 - t3} L${0.5 - e3},${0.5 - t3} L${0.5 - e3},0 M1,${0.5 - t3} L${0.5 + e3},${0.5 - t3} L${0.5 + e3},0` }, "╱": { 1: "M1,0 L0,1" }, "╲": { 1: "M0,0 L1,1" }, "╳": { 1: "M1,0 L0,1 M0,0 L1,1" }, "╼": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "╽": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L.5,1" }, "╾": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "╿": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "┍": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "┎": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┑": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L0,.5" }, "┒": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "┕": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L1,.5" }, "┖": { 1: "M.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┙": { 1: "M.5,.5 L.5,0", 3: "M.5,.5 L0,.5" }, "┚": { 1: "M.5,.5 L0,.5", 3: "M.5,.5 L.5,0" }, "┝": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L1,.5" }, "┞": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┟": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┠": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1" }, "┡": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "┢": { 1: "M.5,.5 L.5,0", 3: "M0.5,1 L.5,.5 L1,.5" }, "┥": { 1: "M.5,0 L.5,1", 3: "M.5,.5 L0,.5" }, "┦": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "┧": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L.5,1" }, "┨": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1" }, "┩": { 1: "M.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L0,.5" }, "┪": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L.5,.5 L.5,1" }, "┭": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┮": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,.5 L1,.5" }, "┯": { 1: "M.5,.5 L.5,1", 3: "M0,.5 L1,.5" }, "┰": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "┱": { 1: "M.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "┲": { 1: "M.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "┵": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┶": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "┷": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5" }, "┸": { 1: "M0,.5 L1,.5", 3: "M.5,.5 L.5,0" }, "┹": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "┺": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,.5 L1,.5" }, "┽": { 1: "M.5,0 L.5,1 M.5,.5 L1,.5", 3: "M.5,.5 L0,.5" }, "┾": { 1: "M.5,0 L.5,1 M.5,.5 L0,.5", 3: "M.5,.5 L1,.5" }, "┿": { 1: "M.5,0 L.5,1", 3: "M0,.5 L1,.5" }, "╀": { 1: "M0,.5 L1,.5 M.5,.5 L.5,1", 3: "M.5,.5 L.5,0" }, "╁": { 1: "M.5,.5 L.5,0 M0,.5 L1,.5", 3: "M.5,.5 L.5,1" }, "╂": { 1: "M0,.5 L1,.5", 3: "M.5,0 L.5,1" }, "╃": { 1: "M0.5,1 L.5,.5 L1,.5", 3: "M.5,0 L.5,.5 L0,.5" }, "╄": { 1: "M0,.5 L.5,.5 L.5,1", 3: "M.5,0 L.5,.5 L1,.5" }, "╅": { 1: "M.5,0 L.5,.5 L1,.5", 3: "M0,.5 L.5,.5 L.5,1" }, "╆": { 1: "M.5,0 L.5,.5 L0,.5", 3: "M0.5,1 L.5,.5 L1,.5" }, "╇": { 1: "M.5,.5 L.5,1", 3: "M.5,.5 L.5,0 M0,.5 L1,.5" }, "╈": { 1: "M.5,.5 L.5,0", 3: "M0,.5 L1,.5 M.5,.5 L.5,1" }, "╉": { 1: "M.5,.5 L1,.5", 3: "M.5,0 L.5,1 M.5,.5 L0,.5" }, "╊": { 1: "M.5,.5 L0,.5", 3: "M.5,0 L.5,1 M.5,.5 L1,.5" }, "╌": { 1: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "╍": { 3: "M.1,.5 L.4,.5 M.6,.5 L.9,.5" }, "┄": { 1: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "┅": { 3: "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5" }, "┈": { 1: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "┉": { 3: "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5" }, "╎": { 1: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "╏": { 3: "M.5,.1 L.5,.4 M.5,.6 L.5,.9" }, "┆": { 1: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "┇": { 3: "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333" }, "┊": { 1: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "┋": { 3: "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95" }, "╭": { 1: (e3, t3) => `M.5,1 L.5,${0.5 + t3 / 0.15 * 0.5} C.5,${0.5 + t3 / 0.15 * 0.5},.5,.5,1,.5` }, "╮": { 1: (e3, t3) => `M.5,1 L.5,${0.5 + t3 / 0.15 * 0.5} C.5,${0.5 + t3 / 0.15 * 0.5},.5,.5,0,.5` }, "╯": { 1: (e3, t3) => `M.5,0 L.5,${0.5 - t3 / 0.15 * 0.5} C.5,${0.5 - t3 / 0.15 * 0.5},.5,.5,0,.5` }, "╰": { 1: (e3, t3) => `M.5,0 L.5,${0.5 - t3 / 0.15 * 0.5} C.5,${0.5 - t3 / 0.15 * 0.5},.5,.5,1,.5` } }, t2.powerlineDefinitions = { "": { d: "M0,0 L1,.5 L0,1", type: 0, rightPadding: 2 }, "": { d: "M-1,-.5 L1,.5 L-1,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M1,0 L0,.5 L1,1", type: 0, leftPadding: 2 }, "": { d: "M2,-.5 L0,.5 L2,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M0,0 L0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 0, rightPadding: 1 }, "": { d: "M0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0", type: 1, rightPadding: 1 }, "": { d: "M1,0 L1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 0, leftPadding: 1 }, "": { d: "M1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0", type: 1, leftPadding: 1 }, "": { d: "M-.5,-.5 L1.5,1.5 L-.5,1.5", type: 0 }, "": { d: "M-.5,-.5 L1.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M1.5,-.5 L-.5,1.5 L1.5,1.5", type: 0 }, "": { d: "M1.5,-.5 L-.5,1.5 L-.5,-.5", type: 0 }, "": { d: "M1.5,-.5 L-.5,1.5", type: 1, leftPadding: 1, rightPadding: 1 }, "": { d: "M-.5,-.5 L1.5,1.5 L1.5,-.5", type: 0 } }, t2.powerlineDefinitions[""] = t2.powerlineDefinitions[""], t2.powerlineDefinitions[""] = t2.powerlineDefinitions[""], t2.tryDrawCustomChar = function(e3, i3, n2, l, c, d, _, u) {
          const g = t2.blockElementDefinitions[i3];
          if (g)
            return function(e4, t3, i4, s3, r2, o2) {
              for (let n3 = 0; n3 < t3.length; n3++) {
                const a2 = t3[n3], h2 = r2 / 8, l2 = o2 / 8;
                e4.fillRect(i4 + a2.x * h2, s3 + a2.y * l2, a2.w * h2, a2.h * l2);
              }
            }(e3, g, n2, l, c, d), true;
          const f = r[i3];
          if (f)
            return function(e4, t3, i4, r2, n3, a2) {
              let h2 = o.get(t3);
              h2 || (h2 = /* @__PURE__ */ new Map(), o.set(t3, h2));
              const l2 = e4.fillStyle;
              if ("string" != typeof l2)
                throw new Error(`Unexpected fillStyle type "${l2}"`);
              let c2 = h2.get(l2);
              if (!c2) {
                const i5 = t3[0].length, r3 = t3.length, o2 = document.createElement("canvas");
                o2.width = i5, o2.height = r3;
                const n4 = (0, s2.throwIfFalsy)(o2.getContext("2d")), a3 = new ImageData(i5, r3);
                let d2, _2, u2, g2;
                if (l2.startsWith("#"))
                  d2 = parseInt(l2.slice(1, 3), 16), _2 = parseInt(l2.slice(3, 5), 16), u2 = parseInt(l2.slice(5, 7), 16), g2 = l2.length > 7 && parseInt(l2.slice(7, 9), 16) || 1;
                else {
                  if (!l2.startsWith("rgba"))
                    throw new Error(`Unexpected fillStyle color format "${l2}" when drawing pattern glyph`);
                  [d2, _2, u2, g2] = l2.substring(5, l2.length - 1).split(",").map((e5) => parseFloat(e5));
                }
                for (let e5 = 0; e5 < r3; e5++)
                  for (let s3 = 0; s3 < i5; s3++)
                    a3.data[4 * (e5 * i5 + s3)] = d2, a3.data[4 * (e5 * i5 + s3) + 1] = _2, a3.data[4 * (e5 * i5 + s3) + 2] = u2, a3.data[4 * (e5 * i5 + s3) + 3] = t3[e5][s3] * (255 * g2);
                n4.putImageData(a3, 0, 0), c2 = (0, s2.throwIfFalsy)(e4.createPattern(o2, null)), h2.set(l2, c2);
              }
              e4.fillStyle = c2, e4.fillRect(i4, r2, n3, a2);
            }(e3, f, n2, l, c, d), true;
          const v = t2.boxDrawingDefinitions[i3];
          if (v)
            return function(e4, t3, i4, s3, r2, o2, n3) {
              e4.strokeStyle = e4.fillStyle;
              for (const [l2, c2] of Object.entries(t3)) {
                let t4;
                e4.beginPath(), e4.lineWidth = n3 * Number.parseInt(l2), t4 = "function" == typeof c2 ? c2(0.15, 0.15 / o2 * r2) : c2;
                for (const l3 of t4.split(" ")) {
                  const t5 = l3[0], c3 = a[t5];
                  if (!c3) {
                    console.error(`Could not find drawing instructions for "${t5}"`);
                    continue;
                  }
                  const d2 = l3.substring(1).split(",");
                  d2[0] && d2[1] && c3(e4, h(d2, r2, o2, i4, s3, true, n3));
                }
                e4.stroke(), e4.closePath();
              }
            }(e3, v, n2, l, c, d, u), true;
          const C = t2.powerlineDefinitions[i3];
          return !!C && (function(e4, t3, i4, s3, r2, o2, n3, l2) {
            var c2, d2;
            const _2 = new Path2D();
            _2.rect(i4, s3, r2, o2), e4.clip(_2), e4.beginPath();
            const u2 = n3 / 12;
            e4.lineWidth = l2 * u2;
            for (const n4 of t3.d.split(" ")) {
              const _3 = n4[0], g2 = a[_3];
              if (!g2) {
                console.error(`Could not find drawing instructions for "${_3}"`);
                continue;
              }
              const f2 = n4.substring(1).split(",");
              f2[0] && f2[1] && g2(e4, h(f2, r2, o2, i4, s3, false, l2, (null !== (c2 = t3.leftPadding) && void 0 !== c2 ? c2 : 0) * (u2 / 2), (null !== (d2 = t3.rightPadding) && void 0 !== d2 ? d2 : 0) * (u2 / 2)));
            }
            1 === t3.type ? (e4.strokeStyle = e4.fillStyle, e4.stroke()) : e4.fill(), e4.closePath();
          }(e3, C, n2, l, c, d, _, u), true);
        };
        const o = /* @__PURE__ */ new Map();
        function n(e3, t3, i3 = 0) {
          return Math.max(Math.min(e3, t3), i3);
        }
        const a = { C: (e3, t3) => e3.bezierCurveTo(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]), L: (e3, t3) => e3.lineTo(t3[0], t3[1]), M: (e3, t3) => e3.moveTo(t3[0], t3[1]) };
        function h(e3, t3, i3, s3, r2, o2, a2, h2 = 0, l = 0) {
          const c = e3.map((e4) => parseFloat(e4) || parseInt(e4));
          if (c.length < 2)
            throw new Error("Too few arguments for instruction");
          for (let e4 = 0; e4 < c.length; e4 += 2)
            c[e4] *= t3 - h2 * a2 - l * a2, o2 && 0 !== c[e4] && (c[e4] = n(Math.round(c[e4] + 0.5) - 0.5, t3, 0)), c[e4] += s3 + h2 * a2;
          for (let e4 = 1; e4 < c.length; e4 += 2)
            c[e4] *= i3, o2 && 0 !== c[e4] && (c[e4] = n(Math.round(c[e4] + 0.5) - 0.5, i3, 0)), c[e4] += r2;
          return c;
        }
      }, 56: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.observeDevicePixelDimensions = void 0;
        const s2 = i2(859);
        t2.observeDevicePixelDimensions = function(e3, t3, i3) {
          let r = new t3.ResizeObserver((t4) => {
            const s3 = t4.find((t5) => t5.target === e3);
            if (!s3)
              return;
            if (!("devicePixelContentBoxSize" in s3))
              return null == r || r.disconnect(), void (r = void 0);
            const o = s3.devicePixelContentBoxSize[0].inlineSize, n = s3.devicePixelContentBoxSize[0].blockSize;
            o > 0 && n > 0 && i3(o, n);
          });
          try {
            r.observe(e3, { box: ["device-pixel-content-box"] });
          } catch (e4) {
            r.disconnect(), r = void 0;
          }
          return (0, s2.toDisposable)(() => null == r ? void 0 : r.disconnect());
        };
      }, 374: (e2, t2) => {
        function i2(e3) {
          return 57508 <= e3 && e3 <= 57558;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.createRenderDimensions = t2.excludeFromContrastRatioDemands = t2.isRestrictedPowerlineGlyph = t2.isPowerlineGlyph = t2.throwIfFalsy = void 0, t2.throwIfFalsy = function(e3) {
          if (!e3)
            throw new Error("value must not be falsy");
          return e3;
        }, t2.isPowerlineGlyph = i2, t2.isRestrictedPowerlineGlyph = function(e3) {
          return 57520 <= e3 && e3 <= 57527;
        }, t2.excludeFromContrastRatioDemands = function(e3) {
          return i2(e3) || function(e4) {
            return 9472 <= e4 && e4 <= 9631;
          }(e3);
        }, t2.createRenderDimensions = function() {
          return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
        };
      }, 296: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.createSelectionRenderModel = void 0;
        class i2 {
          constructor() {
            this.clear();
          }
          clear() {
            this.hasSelection = false, this.columnSelectMode = false, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
          }
          update(e3, t3, i3, s2 = false) {
            if (this.selectionStart = t3, this.selectionEnd = i3, !t3 || !i3 || t3[0] === i3[0] && t3[1] === i3[1])
              return void this.clear();
            const r = t3[1] - e3.buffer.active.viewportY, o = i3[1] - e3.buffer.active.viewportY, n = Math.max(r, 0), a = Math.min(o, e3.rows - 1);
            n >= e3.rows || a < 0 ? this.clear() : (this.hasSelection = true, this.columnSelectMode = s2, this.viewportStartRow = r, this.viewportEndRow = o, this.viewportCappedStartRow = n, this.viewportCappedEndRow = a, this.startCol = t3[0], this.endCol = i3[0]);
          }
          isCellSelected(e3, t3, i3) {
            return !!this.hasSelection && (i3 -= e3.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? t3 >= this.startCol && i3 >= this.viewportCappedStartRow && t3 < this.endCol && i3 <= this.viewportCappedEndRow : t3 < this.startCol && i3 >= this.viewportCappedStartRow && t3 >= this.endCol && i3 <= this.viewportCappedEndRow : i3 > this.viewportStartRow && i3 < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && i3 === this.viewportStartRow && t3 >= this.startCol && t3 < this.endCol || this.viewportStartRow < this.viewportEndRow && i3 === this.viewportEndRow && t3 < this.endCol || this.viewportStartRow < this.viewportEndRow && i3 === this.viewportStartRow && t3 >= this.startCol);
          }
        }
        t2.createSelectionRenderModel = function() {
          return new i2();
        };
      }, 509: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TextureAtlas = void 0;
        const s2 = i2(237), r = i2(855), o = i2(147), n = i2(160), a = i2(860), h = i2(374), l = i2(485), c = i2(385), d = i2(345), _ = { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, offset: { x: 0, y: 0 }, size: { x: 0, y: 0 }, sizeClipSpace: { x: 0, y: 0 } };
        let u;
        class g {
          constructor(e3, t3, i3) {
            this._document = e3, this._config = t3, this._unicodeService = i3, this._didWarmUp = false, this._cacheMap = new l.FourKeyMap(), this._cacheMapCombined = new l.FourKeyMap(), this._pages = [], this._activePages = [], this._workBoundingBox = { top: 0, left: 0, bottom: 0, right: 0 }, this._workAttributeData = new o.AttributeData(), this._textureSize = 512, this._onAddTextureAtlasCanvas = new d.EventEmitter(), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._onRemoveTextureAtlasCanvas = new d.EventEmitter(), this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event, this._requestClearModel = false, this._createNewPage(), this._tmpCanvas = C(e3, 4 * this._config.deviceCellWidth + 4, this._config.deviceCellHeight + 4), this._tmpCtx = (0, h.throwIfFalsy)(this._tmpCanvas.getContext("2d", { alpha: this._config.allowTransparency, willReadFrequently: true }));
          }
          get pages() {
            return this._pages;
          }
          dispose() {
            for (const e3 of this.pages)
              e3.canvas.remove();
            this._onAddTextureAtlasCanvas.dispose();
          }
          warmUp() {
            this._didWarmUp || (this._doWarmUp(), this._didWarmUp = true);
          }
          _doWarmUp() {
            const e3 = new c.IdleTaskQueue();
            for (let t3 = 33; t3 < 126; t3++)
              e3.enqueue(() => {
                if (!this._cacheMap.get(t3, r.DEFAULT_COLOR, r.DEFAULT_COLOR, r.DEFAULT_EXT)) {
                  const e4 = this._drawToCache(t3, r.DEFAULT_COLOR, r.DEFAULT_COLOR, r.DEFAULT_EXT);
                  this._cacheMap.set(t3, r.DEFAULT_COLOR, r.DEFAULT_COLOR, r.DEFAULT_EXT, e4);
                }
              });
          }
          beginFrame() {
            return this._requestClearModel;
          }
          clearTexture() {
            if (0 !== this._pages[0].currentRow.x || 0 !== this._pages[0].currentRow.y) {
              for (const e3 of this._pages)
                e3.clear();
              this._cacheMap.clear(), this._cacheMapCombined.clear(), this._didWarmUp = false;
            }
          }
          _createNewPage() {
            g.maxAtlasPages && this._pages.length >= Math.max(4, g.maxAtlasPages / 2) && queueMicrotask(() => {
              const e4 = this._pages.filter((e5) => 2 * e5.canvas.width <= (g.maxTextureSize || 4096)).sort((e5, t4) => t4.canvas.width !== e5.canvas.width ? t4.canvas.width - e5.canvas.width : t4.percentageUsed - e5.percentageUsed);
              let t3 = -1, i3 = 0;
              for (let s4 = 0; s4 < e4.length; s4++)
                if (e4[s4].canvas.width !== i3)
                  t3 = s4, i3 = e4[s4].canvas.width;
                else if (s4 - t3 == 3)
                  break;
              const s3 = e4.slice(t3, t3 + 4), r2 = s3.map((e5) => e5.glyphs[0].texturePage).sort((e5, t4) => e5 > t4 ? 1 : -1), o2 = r2[0], n2 = this._mergePages(s3, o2);
              n2.version++, this._pages[o2] = n2;
              for (let e5 = r2.length - 1; e5 >= 1; e5--)
                this._deletePage(r2[e5]);
              this._requestClearModel = true, this._onAddTextureAtlasCanvas.fire(n2.canvas);
            });
            const e3 = new f(this._document, this._textureSize);
            return this._pages.push(e3), this._activePages.push(e3), this._onAddTextureAtlasCanvas.fire(e3.canvas), e3;
          }
          _mergePages(e3, t3) {
            const i3 = 2 * e3[0].canvas.width, s3 = new f(this._document, i3, e3);
            for (const [r2, o2] of e3.entries()) {
              const e4 = r2 * o2.canvas.width % i3, n2 = Math.floor(r2 / 2) * o2.canvas.height;
              s3.ctx.drawImage(o2.canvas, e4, n2);
              for (const s4 of o2.glyphs)
                s4.texturePage = t3, s4.sizeClipSpace.x = s4.size.x / i3, s4.sizeClipSpace.y = s4.size.y / i3, s4.texturePosition.x += e4, s4.texturePosition.y += n2, s4.texturePositionClipSpace.x = s4.texturePosition.x / i3, s4.texturePositionClipSpace.y = s4.texturePosition.y / i3;
              this._onRemoveTextureAtlasCanvas.fire(o2.canvas);
              const a2 = this._activePages.indexOf(o2);
              -1 !== a2 && this._activePages.splice(a2, 1);
            }
            return s3;
          }
          _deletePage(e3) {
            this._pages.splice(e3, 1);
            for (let t3 = e3; t3 < this._pages.length; t3++) {
              const e4 = this._pages[t3];
              for (const t4 of e4.glyphs)
                t4.texturePage--;
              e4.version++;
            }
          }
          getRasterizedGlyphCombinedChar(e3, t3, i3, s3) {
            return this._getFromCacheMap(this._cacheMapCombined, e3, t3, i3, s3);
          }
          getRasterizedGlyph(e3, t3, i3, s3) {
            return this._getFromCacheMap(this._cacheMap, e3, t3, i3, s3);
          }
          _getFromCacheMap(e3, t3, i3, s3, r2) {
            return u = e3.get(t3, i3, s3, r2), u || (u = this._drawToCache(t3, i3, s3, r2), e3.set(t3, i3, s3, r2, u)), u;
          }
          _getColorFromAnsiIndex(e3) {
            if (e3 >= this._config.colors.ansi.length)
              throw new Error("No color found for idx " + e3);
            return this._config.colors.ansi[e3];
          }
          _getBackgroundColor(e3, t3, i3, s3) {
            if (this._config.allowTransparency)
              return n.NULL_COLOR;
            let r2;
            switch (e3) {
              case 16777216:
              case 33554432:
                r2 = this._getColorFromAnsiIndex(t3);
                break;
              case 50331648:
                const e4 = o.AttributeData.toColorRGB(t3);
                r2 = n.rgba.toColor(e4[0], e4[1], e4[2]);
                break;
              default:
                r2 = i3 ? this._config.colors.foreground : this._config.colors.background;
            }
            return r2;
          }
          _getForegroundColor(e3, t3, i3, r2, a2, h2, l2, c2, d2, _2) {
            const u2 = this._getMinimumContrastColor(e3, t3, i3, r2, a2, h2, false, d2, _2);
            if (u2)
              return u2;
            let g2;
            switch (a2) {
              case 16777216:
              case 33554432:
                this._config.drawBoldTextInBrightColors && d2 && h2 < 8 && (h2 += 8), g2 = this._getColorFromAnsiIndex(h2);
                break;
              case 50331648:
                const e4 = o.AttributeData.toColorRGB(h2);
                g2 = n.rgba.toColor(e4[0], e4[1], e4[2]);
                break;
              default:
                g2 = l2 ? this._config.colors.background : this._config.colors.foreground;
            }
            return this._config.allowTransparency && (g2 = n.color.opaque(g2)), c2 && (g2 = n.color.multiplyOpacity(g2, s2.DIM_OPACITY)), g2;
          }
          _resolveBackgroundRgba(e3, t3, i3) {
            switch (e3) {
              case 16777216:
              case 33554432:
                return this._getColorFromAnsiIndex(t3).rgba;
              case 50331648:
                return t3 << 8;
              default:
                return i3 ? this._config.colors.foreground.rgba : this._config.colors.background.rgba;
            }
          }
          _resolveForegroundRgba(e3, t3, i3, s3) {
            switch (e3) {
              case 16777216:
              case 33554432:
                return this._config.drawBoldTextInBrightColors && s3 && t3 < 8 && (t3 += 8), this._getColorFromAnsiIndex(t3).rgba;
              case 50331648:
                return t3 << 8;
              default:
                return i3 ? this._config.colors.background.rgba : this._config.colors.foreground.rgba;
            }
          }
          _getMinimumContrastColor(e3, t3, i3, s3, r2, o2, a2, h2, l2) {
            if (1 === this._config.minimumContrastRatio || l2)
              return;
            const c2 = this._config.colors.contrastCache.getColor(e3, s3);
            if (void 0 !== c2)
              return c2 || void 0;
            const d2 = this._resolveBackgroundRgba(t3, i3, a2), _2 = this._resolveForegroundRgba(r2, o2, a2, h2), u2 = n.rgba.ensureContrastRatio(d2, _2, this._config.minimumContrastRatio);
            if (!u2)
              return void this._config.colors.contrastCache.setColor(e3, s3, null);
            const g2 = n.rgba.toColor(u2 >> 24 & 255, u2 >> 16 & 255, u2 >> 8 & 255);
            return this._config.colors.contrastCache.setColor(e3, s3, g2), g2;
          }
          _drawToCache(e3, t3, i3, r2) {
            const n2 = "number" == typeof e3 ? String.fromCharCode(e3) : e3, l2 = Math.min(this._config.deviceCellWidth * Math.max(n2.length, 2) + 4, this._textureSize);
            this._tmpCanvas.width < l2 && (this._tmpCanvas.width = l2);
            const c2 = Math.min(this._config.deviceCellHeight + 8, this._textureSize);
            if (this._tmpCanvas.height < c2 && (this._tmpCanvas.height = c2), this._tmpCtx.save(), this._workAttributeData.fg = i3, this._workAttributeData.bg = t3, this._workAttributeData.extended.ext = r2, this._workAttributeData.isInvisible())
              return _;
            const d2 = !!this._workAttributeData.isBold(), u2 = !!this._workAttributeData.isInverse(), g2 = !!this._workAttributeData.isDim(), f2 = !!this._workAttributeData.isItalic(), C2 = !!this._workAttributeData.isUnderline(), p = !!this._workAttributeData.isStrikethrough(), x = !!this._workAttributeData.isOverline();
            let m = this._workAttributeData.getFgColor(), w = this._workAttributeData.getFgColorMode(), L = this._workAttributeData.getBgColor(), b = this._workAttributeData.getBgColorMode();
            if (u2) {
              const e4 = m;
              m = L, L = e4;
              const t4 = w;
              w = b, b = t4;
            }
            const M = this._getBackgroundColor(b, L, u2, g2);
            this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = M.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.globalCompositeOperation = "source-over";
            const y = d2 ? this._config.fontWeightBold : this._config.fontWeight, S = f2 ? "italic" : "";
            this._tmpCtx.font = `${S} ${y} ${this._config.fontSize * this._config.devicePixelRatio}px ${this._config.fontFamily}`, this._tmpCtx.textBaseline = s2.TEXT_BASELINE;
            const R = 1 === n2.length && (0, h.isPowerlineGlyph)(n2.charCodeAt(0)), A = 1 === n2.length && (0, h.isRestrictedPowerlineGlyph)(n2.charCodeAt(0)), T = this._getForegroundColor(t3, b, L, i3, w, m, u2, g2, d2, (0, h.excludeFromContrastRatioDemands)(n2.charCodeAt(0)));
            this._tmpCtx.fillStyle = T.css;
            const D = A ? 0 : 4;
            let k = false;
            false !== this._config.customGlyphs && (k = (0, a.tryDrawCustomChar)(this._tmpCtx, n2, D, D, this._config.deviceCellWidth, this._config.deviceCellHeight, this._config.fontSize, this._config.devicePixelRatio));
            let $, B = !R;
            if ($ = "number" == typeof e3 ? this._unicodeService.wcwidth(e3) : this._unicodeService.getStringCellWidth(e3), C2) {
              this._tmpCtx.save();
              const e4 = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), t4 = e4 % 2 == 1 ? 0.5 : 0;
              if (this._tmpCtx.lineWidth = e4, this._workAttributeData.isUnderlineColorDefault())
                this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle;
              else if (this._workAttributeData.isUnderlineColorRGB())
                B = false, this._tmpCtx.strokeStyle = `rgb(${o.AttributeData.toColorRGB(this._workAttributeData.getUnderlineColor()).join(",")})`;
              else {
                B = false;
                let e5 = this._workAttributeData.getUnderlineColor();
                this._config.drawBoldTextInBrightColors && this._workAttributeData.isBold() && e5 < 8 && (e5 += 8), this._tmpCtx.strokeStyle = this._getColorFromAnsiIndex(e5).css;
              }
              this._tmpCtx.beginPath();
              const i4 = D, s3 = Math.ceil(D + this._config.deviceCharHeight) - t4, r3 = D + this._config.deviceCharHeight + e4 - t4, a2 = Math.ceil(D + this._config.deviceCharHeight + 2 * e4) - t4;
              for (let o2 = 0; o2 < $; o2++) {
                this._tmpCtx.save();
                const n3 = i4 + o2 * this._config.deviceCellWidth, h2 = i4 + (o2 + 1) * this._config.deviceCellWidth, l3 = n3 + this._config.deviceCellWidth / 2;
                switch (this._workAttributeData.extended.underlineStyle) {
                  case 2:
                    this._tmpCtx.moveTo(n3, s3), this._tmpCtx.lineTo(h2, s3), this._tmpCtx.moveTo(n3, a2), this._tmpCtx.lineTo(h2, a2);
                    break;
                  case 3:
                    const i5 = e4 <= 1 ? a2 : Math.ceil(D + this._config.deviceCharHeight - e4 / 2) - t4, o3 = e4 <= 1 ? s3 : Math.ceil(D + this._config.deviceCharHeight + e4 / 2) - t4, c3 = new Path2D();
                    c3.rect(n3, s3, this._config.deviceCellWidth, a2 - s3), this._tmpCtx.clip(c3), this._tmpCtx.moveTo(n3 - this._config.deviceCellWidth / 2, r3), this._tmpCtx.bezierCurveTo(n3 - this._config.deviceCellWidth / 2, o3, n3, o3, n3, r3), this._tmpCtx.bezierCurveTo(n3, i5, l3, i5, l3, r3), this._tmpCtx.bezierCurveTo(l3, o3, h2, o3, h2, r3), this._tmpCtx.bezierCurveTo(h2, i5, h2 + this._config.deviceCellWidth / 2, i5, h2 + this._config.deviceCellWidth / 2, r3);
                    break;
                  case 4:
                    this._tmpCtx.setLineDash([Math.round(e4), Math.round(e4)]), this._tmpCtx.moveTo(n3, s3), this._tmpCtx.lineTo(h2, s3);
                    break;
                  case 5:
                    this._tmpCtx.setLineDash([4 * this._config.devicePixelRatio, 3 * this._config.devicePixelRatio]), this._tmpCtx.moveTo(n3, s3), this._tmpCtx.lineTo(h2, s3);
                    break;
                  default:
                    this._tmpCtx.moveTo(n3, s3), this._tmpCtx.lineTo(h2, s3);
                }
                this._tmpCtx.stroke(), this._tmpCtx.restore();
              }
              if (this._tmpCtx.restore(), !k && this._config.fontSize >= 12 && !this._config.allowTransparency && " " !== n2) {
                this._tmpCtx.save(), this._tmpCtx.textBaseline = "alphabetic";
                const t5 = this._tmpCtx.measureText(n2);
                if (this._tmpCtx.restore(), "actualBoundingBoxDescent" in t5 && t5.actualBoundingBoxDescent > 0) {
                  this._tmpCtx.save();
                  const t6 = new Path2D();
                  t6.rect(i4, s3 - Math.ceil(e4 / 2), this._config.deviceCellWidth * $, a2 - s3 + Math.ceil(e4 / 2)), this._tmpCtx.clip(t6), this._tmpCtx.lineWidth = 3 * this._config.devicePixelRatio, this._tmpCtx.strokeStyle = M.css, this._tmpCtx.strokeText(n2, D, D + this._config.deviceCharHeight), this._tmpCtx.restore();
                }
              }
            }
            if (x) {
              const e4 = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), t4 = e4 % 2 == 1 ? 0.5 : 0;
              this._tmpCtx.lineWidth = e4, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(D, D + t4), this._tmpCtx.lineTo(D + this._config.deviceCharWidth * $, D + t4), this._tmpCtx.stroke();
            }
            if (k || this._tmpCtx.fillText(n2, D, D + this._config.deviceCharHeight), "_" === n2 && !this._config.allowTransparency) {
              let e4 = v(this._tmpCtx.getImageData(D, D, this._config.deviceCellWidth, this._config.deviceCellHeight), M, T, B);
              if (e4)
                for (let t4 = 1; t4 <= 5 && (this._tmpCtx.save(), this._tmpCtx.fillStyle = M.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.restore(), this._tmpCtx.fillText(n2, D, D + this._config.deviceCharHeight - t4), e4 = v(this._tmpCtx.getImageData(D, D, this._config.deviceCellWidth, this._config.deviceCellHeight), M, T, B), e4); t4++)
                  ;
            }
            if (p) {
              const e4 = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 10)), t4 = this._tmpCtx.lineWidth % 2 == 1 ? 0.5 : 0;
              this._tmpCtx.lineWidth = e4, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(D, D + Math.floor(this._config.deviceCharHeight / 2) - t4), this._tmpCtx.lineTo(D + this._config.deviceCharWidth * $, D + Math.floor(this._config.deviceCharHeight / 2) - t4), this._tmpCtx.stroke();
            }
            this._tmpCtx.restore();
            const E = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height);
            let P;
            if (P = this._config.allowTransparency ? function(e4) {
              for (let t4 = 0; t4 < e4.data.length; t4 += 4)
                if (e4.data[t4 + 3] > 0)
                  return false;
              return true;
            }(E) : v(E, M, T, B), P)
              return _;
            const I = this._findGlyphBoundingBox(E, this._workBoundingBox, l2, A, k, D);
            let O, F;
            for (; ; ) {
              if (0 === this._activePages.length) {
                const e4 = this._createNewPage();
                O = e4, F = e4.currentRow, F.height = I.size.y;
                break;
              }
              O = this._activePages[this._activePages.length - 1], F = O.currentRow;
              for (const e4 of this._activePages)
                I.size.y <= e4.currentRow.height && (O = e4, F = e4.currentRow);
              for (let e4 = this._activePages.length - 1; e4 >= 0; e4--)
                for (const t4 of this._activePages[e4].fixedRows)
                  t4.height <= F.height && I.size.y <= t4.height && (O = this._activePages[e4], F = t4);
              if (F.y + I.size.y >= O.canvas.height || F.height > I.size.y + 2) {
                let e4 = false;
                if (O.currentRow.y + O.currentRow.height + I.size.y >= O.canvas.height) {
                  let t4;
                  for (const e5 of this._activePages)
                    if (e5.currentRow.y + e5.currentRow.height + I.size.y < e5.canvas.height) {
                      t4 = e5;
                      break;
                    }
                  if (t4)
                    O = t4;
                  else {
                    const t5 = this._createNewPage();
                    O = t5, F = t5.currentRow, F.height = I.size.y, e4 = true;
                  }
                }
                e4 || (O.currentRow.height > 0 && O.fixedRows.push(O.currentRow), F = { x: 0, y: O.currentRow.y + O.currentRow.height, height: I.size.y }, O.fixedRows.push(F), O.currentRow = { x: 0, y: F.y + F.height, height: 0 });
              }
              if (F.x + I.size.x <= O.canvas.width)
                break;
              F === O.currentRow ? (F.x = 0, F.y += F.height, F.height = 0) : O.fixedRows.splice(O.fixedRows.indexOf(F), 1);
            }
            return I.texturePage = this._pages.indexOf(O), I.texturePosition.x = F.x, I.texturePosition.y = F.y, I.texturePositionClipSpace.x = F.x / O.canvas.width, I.texturePositionClipSpace.y = F.y / O.canvas.height, I.sizeClipSpace.x /= O.canvas.width, I.sizeClipSpace.y /= O.canvas.height, F.height = Math.max(F.height, I.size.y), F.x += I.size.x, O.ctx.putImageData(E, I.texturePosition.x - this._workBoundingBox.left, I.texturePosition.y - this._workBoundingBox.top, this._workBoundingBox.left, this._workBoundingBox.top, I.size.x, I.size.y), O.addGlyph(I), O.version++, I;
          }
          _findGlyphBoundingBox(e3, t3, i3, s3, r2, o2) {
            t3.top = 0;
            const n2 = s3 ? this._config.deviceCellHeight : this._tmpCanvas.height, a2 = s3 ? this._config.deviceCellWidth : i3;
            let h2 = false;
            for (let i4 = 0; i4 < n2; i4++) {
              for (let s4 = 0; s4 < a2; s4++) {
                const r3 = i4 * this._tmpCanvas.width * 4 + 4 * s4 + 3;
                if (0 !== e3.data[r3]) {
                  t3.top = i4, h2 = true;
                  break;
                }
              }
              if (h2)
                break;
            }
            t3.left = 0, h2 = false;
            for (let i4 = 0; i4 < o2 + a2; i4++) {
              for (let s4 = 0; s4 < n2; s4++) {
                const r3 = s4 * this._tmpCanvas.width * 4 + 4 * i4 + 3;
                if (0 !== e3.data[r3]) {
                  t3.left = i4, h2 = true;
                  break;
                }
              }
              if (h2)
                break;
            }
            t3.right = a2, h2 = false;
            for (let i4 = o2 + a2 - 1; i4 >= o2; i4--) {
              for (let s4 = 0; s4 < n2; s4++) {
                const r3 = s4 * this._tmpCanvas.width * 4 + 4 * i4 + 3;
                if (0 !== e3.data[r3]) {
                  t3.right = i4, h2 = true;
                  break;
                }
              }
              if (h2)
                break;
            }
            t3.bottom = n2, h2 = false;
            for (let i4 = n2 - 1; i4 >= 0; i4--) {
              for (let s4 = 0; s4 < a2; s4++) {
                const r3 = i4 * this._tmpCanvas.width * 4 + 4 * s4 + 3;
                if (0 !== e3.data[r3]) {
                  t3.bottom = i4, h2 = true;
                  break;
                }
              }
              if (h2)
                break;
            }
            return { texturePage: 0, texturePosition: { x: 0, y: 0 }, texturePositionClipSpace: { x: 0, y: 0 }, size: { x: t3.right - t3.left + 1, y: t3.bottom - t3.top + 1 }, sizeClipSpace: { x: t3.right - t3.left + 1, y: t3.bottom - t3.top + 1 }, offset: { x: -t3.left + o2 + (s3 || r2 ? Math.floor((this._config.deviceCellWidth - this._config.deviceCharWidth) / 2) : 0), y: -t3.top + o2 + (s3 || r2 ? 1 === this._config.lineHeight ? 0 : Math.round((this._config.deviceCellHeight - this._config.deviceCharHeight) / 2) : 0) } };
          }
        }
        t2.TextureAtlas = g;
        class f {
          constructor(e3, t3, i3) {
            if (this._usedPixels = 0, this._glyphs = [], this.version = 0, this.currentRow = { x: 0, y: 0, height: 0 }, this.fixedRows = [], i3)
              for (const e4 of i3)
                this._glyphs.push(...e4.glyphs), this._usedPixels += e4._usedPixels;
            this.canvas = C(e3, t3, t3), this.ctx = (0, h.throwIfFalsy)(this.canvas.getContext("2d", { alpha: true }));
          }
          get percentageUsed() {
            return this._usedPixels / (this.canvas.width * this.canvas.height);
          }
          get glyphs() {
            return this._glyphs;
          }
          addGlyph(e3) {
            this._glyphs.push(e3), this._usedPixels += e3.size.x * e3.size.y;
          }
          clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.currentRow.x = 0, this.currentRow.y = 0, this.currentRow.height = 0, this.fixedRows.length = 0, this.version++;
          }
        }
        function v(e3, t3, i3, s3) {
          const r2 = t3.rgba >>> 24, o2 = t3.rgba >>> 16 & 255, n2 = t3.rgba >>> 8 & 255, a2 = i3.rgba >>> 24, h2 = i3.rgba >>> 16 & 255, l2 = i3.rgba >>> 8 & 255, c2 = Math.floor((Math.abs(r2 - a2) + Math.abs(o2 - h2) + Math.abs(n2 - l2)) / 12);
          let d2 = true;
          for (let t4 = 0; t4 < e3.data.length; t4 += 4)
            e3.data[t4] === r2 && e3.data[t4 + 1] === o2 && e3.data[t4 + 2] === n2 || s3 && Math.abs(e3.data[t4] - r2) + Math.abs(e3.data[t4 + 1] - o2) + Math.abs(e3.data[t4 + 2] - n2) < c2 ? e3.data[t4 + 3] = 0 : d2 = false;
          return d2;
        }
        function C(e3, t3, i3) {
          const s3 = e3.createElement("canvas");
          return s3.width = t3, s3.height = i3, s3;
        }
      }, 577: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, o2 = arguments.length, n2 = o2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            n2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (n2 = (o2 < 3 ? r2(n2) : o2 > 3 ? r2(t3, i3, n2) : r2(t3, i3)) || n2);
          return o2 > 3 && n2 && Object.defineProperty(t3, i3, n2), n2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CharacterJoinerService = t2.JoinedCellData = void 0;
        const o = i2(147), n = i2(855), a = i2(782), h = i2(97);
        class l extends o.AttributeData {
          constructor(e3, t3, i3) {
            super(), this.content = 0, this.combinedData = "", this.fg = e3.fg, this.bg = e3.bg, this.combinedData = t3, this._width = i3;
          }
          isCombined() {
            return 2097152;
          }
          getWidth() {
            return this._width;
          }
          getChars() {
            return this.combinedData;
          }
          getCode() {
            return 2097151;
          }
          setFromCharData(e3) {
            throw new Error("not implemented");
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        t2.JoinedCellData = l;
        let c = class e3 {
          constructor(e4) {
            this._bufferService = e4, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData();
          }
          register(e4) {
            const t3 = { id: this._nextCharacterJoinerId++, handler: e4 };
            return this._characterJoiners.push(t3), t3.id;
          }
          deregister(e4) {
            for (let t3 = 0; t3 < this._characterJoiners.length; t3++)
              if (this._characterJoiners[t3].id === e4)
                return this._characterJoiners.splice(t3, 1), true;
            return false;
          }
          getJoinedCharacters(e4) {
            if (0 === this._characterJoiners.length)
              return [];
            const t3 = this._bufferService.buffer.lines.get(e4);
            if (!t3 || 0 === t3.length)
              return [];
            const i3 = [], s3 = t3.translateToString(true);
            let r2 = 0, o2 = 0, a2 = 0, h2 = t3.getFg(0), l2 = t3.getBg(0);
            for (let e5 = 0; e5 < t3.getTrimmedLength(); e5++)
              if (t3.loadCell(e5, this._workCell), 0 !== this._workCell.getWidth()) {
                if (this._workCell.fg !== h2 || this._workCell.bg !== l2) {
                  if (e5 - r2 > 1) {
                    const e6 = this._getJoinedRanges(s3, a2, o2, t3, r2);
                    for (let t4 = 0; t4 < e6.length; t4++)
                      i3.push(e6[t4]);
                  }
                  r2 = e5, a2 = o2, h2 = this._workCell.fg, l2 = this._workCell.bg;
                }
                o2 += this._workCell.getChars().length || n.WHITESPACE_CELL_CHAR.length;
              }
            if (this._bufferService.cols - r2 > 1) {
              const e5 = this._getJoinedRanges(s3, a2, o2, t3, r2);
              for (let t4 = 0; t4 < e5.length; t4++)
                i3.push(e5[t4]);
            }
            return i3;
          }
          _getJoinedRanges(t3, i3, s3, r2, o2) {
            const n2 = t3.substring(i3, s3);
            let a2 = [];
            try {
              a2 = this._characterJoiners[0].handler(n2);
            } catch (e4) {
              console.error(e4);
            }
            for (let t4 = 1; t4 < this._characterJoiners.length; t4++)
              try {
                const i4 = this._characterJoiners[t4].handler(n2);
                for (let t5 = 0; t5 < i4.length; t5++)
                  e3._mergeRanges(a2, i4[t5]);
              } catch (e4) {
                console.error(e4);
              }
            return this._stringRangesToCellRanges(a2, r2, o2), a2;
          }
          _stringRangesToCellRanges(e4, t3, i3) {
            let s3 = 0, r2 = false, o2 = 0, a2 = e4[s3];
            if (a2) {
              for (let h2 = i3; h2 < this._bufferService.cols; h2++) {
                const i4 = t3.getWidth(h2), l2 = t3.getString(h2).length || n.WHITESPACE_CELL_CHAR.length;
                if (0 !== i4) {
                  if (!r2 && a2[0] <= o2 && (a2[0] = h2, r2 = true), a2[1] <= o2) {
                    if (a2[1] = h2, a2 = e4[++s3], !a2)
                      break;
                    a2[0] <= o2 ? (a2[0] = h2, r2 = true) : r2 = false;
                  }
                  o2 += l2;
                }
              }
              a2 && (a2[1] = this._bufferService.cols);
            }
          }
          static _mergeRanges(e4, t3) {
            let i3 = false;
            for (let s3 = 0; s3 < e4.length; s3++) {
              const r2 = e4[s3];
              if (i3) {
                if (t3[1] <= r2[0])
                  return e4[s3 - 1][1] = t3[1], e4;
                if (t3[1] <= r2[1])
                  return e4[s3 - 1][1] = Math.max(t3[1], r2[1]), e4.splice(s3, 1), e4;
                e4.splice(s3, 1), s3--;
              } else {
                if (t3[1] <= r2[0])
                  return e4.splice(s3, 0, t3), e4;
                if (t3[1] <= r2[1])
                  return r2[0] = Math.min(t3[0], r2[0]), e4;
                t3[0] < r2[1] && (r2[0] = Math.min(t3[0], r2[0]), i3 = true);
              }
            }
            return i3 ? e4[e4.length - 1][1] = t3[1] : e4.push(t3), e4;
          }
        };
        c = s2([r(0, h.IBufferService)], c), t2.CharacterJoinerService = c;
      }, 160: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.contrastRatio = t2.toPaddedHex = t2.rgba = t2.rgb = t2.css = t2.color = t2.channels = t2.NULL_COLOR = void 0;
        const s2 = i2(399);
        let r = 0, o = 0, n = 0, a = 0;
        var h, l, c;
        function d(e3) {
          const t3 = e3.toString(16);
          return t3.length < 2 ? "0" + t3 : t3;
        }
        function _(e3, t3) {
          return e3 < t3 ? (t3 + 0.05) / (e3 + 0.05) : (e3 + 0.05) / (t3 + 0.05);
        }
        t2.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(e3) {
          e3.toCss = function(e4, t3, i3, s3) {
            return void 0 !== s3 ? `#${d(e4)}${d(t3)}${d(i3)}${d(s3)}` : `#${d(e4)}${d(t3)}${d(i3)}`;
          }, e3.toRgba = function(e4, t3, i3, s3 = 255) {
            return (e4 << 24 | t3 << 16 | i3 << 8 | s3) >>> 0;
          };
        }(h = t2.channels || (t2.channels = {})), function(e3) {
          function t3(e4, t4) {
            return a = Math.round(255 * t4), [r, o, n] = c.toChannels(e4.rgba), { css: h.toCss(r, o, n, a), rgba: h.toRgba(r, o, n, a) };
          }
          e3.blend = function(e4, t4) {
            if (a = (255 & t4.rgba) / 255, 1 === a)
              return { css: t4.css, rgba: t4.rgba };
            const i3 = t4.rgba >> 24 & 255, s3 = t4.rgba >> 16 & 255, l2 = t4.rgba >> 8 & 255, c2 = e4.rgba >> 24 & 255, d2 = e4.rgba >> 16 & 255, _2 = e4.rgba >> 8 & 255;
            return r = c2 + Math.round((i3 - c2) * a), o = d2 + Math.round((s3 - d2) * a), n = _2 + Math.round((l2 - _2) * a), { css: h.toCss(r, o, n), rgba: h.toRgba(r, o, n) };
          }, e3.isOpaque = function(e4) {
            return 255 == (255 & e4.rgba);
          }, e3.ensureContrastRatio = function(e4, t4, i3) {
            const s3 = c.ensureContrastRatio(e4.rgba, t4.rgba, i3);
            if (s3)
              return c.toColor(s3 >> 24 & 255, s3 >> 16 & 255, s3 >> 8 & 255);
          }, e3.opaque = function(e4) {
            const t4 = (255 | e4.rgba) >>> 0;
            return [r, o, n] = c.toChannels(t4), { css: h.toCss(r, o, n), rgba: t4 };
          }, e3.opacity = t3, e3.multiplyOpacity = function(e4, i3) {
            return a = 255 & e4.rgba, t3(e4, a * i3 / 255);
          }, e3.toColorRGB = function(e4) {
            return [e4.rgba >> 24 & 255, e4.rgba >> 16 & 255, e4.rgba >> 8 & 255];
          };
        }(t2.color || (t2.color = {})), function(e3) {
          let t3, i3;
          if (!s2.isNode) {
            const e4 = document.createElement("canvas");
            e4.width = 1, e4.height = 1;
            const s3 = e4.getContext("2d", { willReadFrequently: true });
            s3 && (t3 = s3, t3.globalCompositeOperation = "copy", i3 = t3.createLinearGradient(0, 0, 1, 1));
          }
          e3.toColor = function(e4) {
            if (e4.match(/#[\da-f]{3,8}/i))
              switch (e4.length) {
                case 4:
                  return r = parseInt(e4.slice(1, 2).repeat(2), 16), o = parseInt(e4.slice(2, 3).repeat(2), 16), n = parseInt(e4.slice(3, 4).repeat(2), 16), c.toColor(r, o, n);
                case 5:
                  return r = parseInt(e4.slice(1, 2).repeat(2), 16), o = parseInt(e4.slice(2, 3).repeat(2), 16), n = parseInt(e4.slice(3, 4).repeat(2), 16), a = parseInt(e4.slice(4, 5).repeat(2), 16), c.toColor(r, o, n, a);
                case 7:
                  return { css: e4, rgba: (parseInt(e4.slice(1), 16) << 8 | 255) >>> 0 };
                case 9:
                  return { css: e4, rgba: parseInt(e4.slice(1), 16) >>> 0 };
              }
            const s3 = e4.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
            if (s3)
              return r = parseInt(s3[1]), o = parseInt(s3[2]), n = parseInt(s3[3]), a = Math.round(255 * (void 0 === s3[5] ? 1 : parseFloat(s3[5]))), c.toColor(r, o, n, a);
            if (!t3 || !i3)
              throw new Error("css.toColor: Unsupported css format");
            if (t3.fillStyle = i3, t3.fillStyle = e4, "string" != typeof t3.fillStyle)
              throw new Error("css.toColor: Unsupported css format");
            if (t3.fillRect(0, 0, 1, 1), [r, o, n, a] = t3.getImageData(0, 0, 1, 1).data, 255 !== a)
              throw new Error("css.toColor: Unsupported css format");
            return { rgba: h.toRgba(r, o, n, a), css: e4 };
          };
        }(t2.css || (t2.css = {})), function(e3) {
          function t3(e4, t4, i3) {
            const s3 = e4 / 255, r2 = t4 / 255, o2 = i3 / 255;
            return 0.2126 * (s3 <= 0.03928 ? s3 / 12.92 : Math.pow((s3 + 0.055) / 1.055, 2.4)) + 0.7152 * (r2 <= 0.03928 ? r2 / 12.92 : Math.pow((r2 + 0.055) / 1.055, 2.4)) + 0.0722 * (o2 <= 0.03928 ? o2 / 12.92 : Math.pow((o2 + 0.055) / 1.055, 2.4));
          }
          e3.relativeLuminance = function(e4) {
            return t3(e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4);
          }, e3.relativeLuminance2 = t3;
        }(l = t2.rgb || (t2.rgb = {})), function(e3) {
          function t3(e4, t4, i4) {
            const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, o2 = e4 >> 8 & 255;
            let n2 = t4 >> 24 & 255, a2 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, c2 = _(l.relativeLuminance2(n2, a2, h2), l.relativeLuminance2(s3, r2, o2));
            for (; c2 < i4 && (n2 > 0 || a2 > 0 || h2 > 0); )
              n2 -= Math.max(0, Math.ceil(0.1 * n2)), a2 -= Math.max(0, Math.ceil(0.1 * a2)), h2 -= Math.max(0, Math.ceil(0.1 * h2)), c2 = _(l.relativeLuminance2(n2, a2, h2), l.relativeLuminance2(s3, r2, o2));
            return (n2 << 24 | a2 << 16 | h2 << 8 | 255) >>> 0;
          }
          function i3(e4, t4, i4) {
            const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, o2 = e4 >> 8 & 255;
            let n2 = t4 >> 24 & 255, a2 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, c2 = _(l.relativeLuminance2(n2, a2, h2), l.relativeLuminance2(s3, r2, o2));
            for (; c2 < i4 && (n2 < 255 || a2 < 255 || h2 < 255); )
              n2 = Math.min(255, n2 + Math.ceil(0.1 * (255 - n2))), a2 = Math.min(255, a2 + Math.ceil(0.1 * (255 - a2))), h2 = Math.min(255, h2 + Math.ceil(0.1 * (255 - h2))), c2 = _(l.relativeLuminance2(n2, a2, h2), l.relativeLuminance2(s3, r2, o2));
            return (n2 << 24 | a2 << 16 | h2 << 8 | 255) >>> 0;
          }
          e3.ensureContrastRatio = function(e4, s3, r2) {
            const o2 = l.relativeLuminance(e4 >> 8), n2 = l.relativeLuminance(s3 >> 8);
            if (_(o2, n2) < r2) {
              if (n2 < o2) {
                const n3 = t3(e4, s3, r2), a3 = _(o2, l.relativeLuminance(n3 >> 8));
                if (a3 < r2) {
                  const t4 = i3(e4, s3, r2);
                  return a3 > _(o2, l.relativeLuminance(t4 >> 8)) ? n3 : t4;
                }
                return n3;
              }
              const a2 = i3(e4, s3, r2), h2 = _(o2, l.relativeLuminance(a2 >> 8));
              if (h2 < r2) {
                const i4 = t3(e4, s3, r2);
                return h2 > _(o2, l.relativeLuminance(i4 >> 8)) ? a2 : i4;
              }
              return a2;
            }
          }, e3.reduceLuminance = t3, e3.increaseLuminance = i3, e3.toChannels = function(e4) {
            return [e4 >> 24 & 255, e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4];
          }, e3.toColor = function(e4, t4, i4, s3) {
            return { css: h.toCss(e4, t4, i4, s3), rgba: h.toRgba(e4, t4, i4, s3) };
          };
        }(c = t2.rgba || (t2.rgba = {})), t2.toPaddedHex = d, t2.contrastRatio = _;
      }, 345: (e2, t2) => {
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
      }, 485: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.FourKeyMap = t2.TwoKeyMap = void 0;
        class i2 {
          constructor() {
            this._data = {};
          }
          set(e3, t3, i3) {
            this._data[e3] || (this._data[e3] = {}), this._data[e3][t3] = i3;
          }
          get(e3, t3) {
            return this._data[e3] ? this._data[e3][t3] : void 0;
          }
          clear() {
            this._data = {};
          }
        }
        t2.TwoKeyMap = i2, t2.FourKeyMap = class {
          constructor() {
            this._data = new i2();
          }
          set(e3, t3, s2, r, o) {
            this._data.get(e3, t3) || this._data.set(e3, t3, new i2()), this._data.get(e3, t3).set(s2, r, o);
          }
          get(e3, t3, i3, s2) {
            var r;
            return null === (r = this._data.get(e3, t3)) || void 0 === r ? void 0 : r.get(i3, s2);
          }
          clear() {
            this._data.clear();
          }
        };
      }, 399: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isChromeOS = t2.isLinux = t2.isWindows = t2.isIphone = t2.isIpad = t2.isMac = t2.getSafariVersion = t2.isSafari = t2.isLegacyEdge = t2.isFirefox = t2.isNode = void 0, t2.isNode = "undefined" == typeof navigator;
        const i2 = t2.isNode ? "node" : navigator.userAgent, s2 = t2.isNode ? "node" : navigator.platform;
        t2.isFirefox = i2.includes("Firefox"), t2.isLegacyEdge = i2.includes("Edge"), t2.isSafari = /^((?!chrome|android).)*safari/i.test(i2), t2.getSafariVersion = function() {
          if (!t2.isSafari)
            return 0;
          const e3 = i2.match(/Version\/(\d+)/);
          return null === e3 || e3.length < 2 ? 0 : parseInt(e3[1]);
        }, t2.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(s2), t2.isIpad = "iPad" === s2, t2.isIphone = "iPhone" === s2, t2.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(s2), t2.isLinux = s2.indexOf("Linux") >= 0, t2.isChromeOS = /\bCrOS\b/.test(i2);
      }, 385: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DebouncedIdleTask = t2.IdleTaskQueue = t2.PriorityTaskQueue = void 0;
        const s2 = i2(399);
        class r {
          constructor() {
            this._tasks = [], this._i = 0;
          }
          enqueue(e3) {
            this._tasks.push(e3), this._start();
          }
          flush() {
            for (; this._i < this._tasks.length; )
              this._tasks[this._i]() || this._i++;
            this.clear();
          }
          clear() {
            this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
          }
          _start() {
            this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
          }
          _process(e3) {
            this._idleCallback = void 0;
            let t3 = 0, i3 = 0, s3 = e3.timeRemaining(), r2 = 0;
            for (; this._i < this._tasks.length; ) {
              if (t3 = Date.now(), this._tasks[this._i]() || this._i++, t3 = Math.max(1, Date.now() - t3), i3 = Math.max(t3, i3), r2 = e3.timeRemaining(), 1.5 * i3 > r2)
                return s3 - t3 < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s3 - t3))}ms`), void this._start();
              s3 = r2;
            }
            this.clear();
          }
        }
        class o extends r {
          _requestCallback(e3) {
            return setTimeout(() => e3(this._createDeadline(16)));
          }
          _cancelCallback(e3) {
            clearTimeout(e3);
          }
          _createDeadline(e3) {
            const t3 = Date.now() + e3;
            return { timeRemaining: () => Math.max(0, t3 - Date.now()) };
          }
        }
        t2.PriorityTaskQueue = o, t2.IdleTaskQueue = !s2.isNode && "requestIdleCallback" in window ? class extends r {
          _requestCallback(e3) {
            return requestIdleCallback(e3);
          }
          _cancelCallback(e3) {
            cancelIdleCallback(e3);
          }
        } : o, t2.DebouncedIdleTask = class {
          constructor() {
            this._queue = new t2.IdleTaskQueue();
          }
          set(e3) {
            this._queue.clear(), this._queue.enqueue(e3);
          }
          flush() {
            this._queue.flush();
          }
        };
      }, 147: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ExtendedAttrs = t2.AttributeData = void 0;
        class i2 {
          constructor() {
            this.fg = 0, this.bg = 0, this.extended = new s2();
          }
          static toColorRGB(e3) {
            return [e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3];
          }
          static fromColorRGB(e3) {
            return (255 & e3[0]) << 16 | (255 & e3[1]) << 8 | 255 & e3[2];
          }
          clone() {
            const e3 = new i2();
            return e3.fg = this.fg, e3.bg = this.bg, e3.extended = this.extended.clone(), e3;
          }
          isInverse() {
            return 67108864 & this.fg;
          }
          isBold() {
            return 134217728 & this.fg;
          }
          isUnderline() {
            return this.hasExtendedAttrs() && 0 !== this.extended.underlineStyle ? 1 : 268435456 & this.fg;
          }
          isBlink() {
            return 536870912 & this.fg;
          }
          isInvisible() {
            return 1073741824 & this.fg;
          }
          isItalic() {
            return 67108864 & this.bg;
          }
          isDim() {
            return 134217728 & this.bg;
          }
          isStrikethrough() {
            return 2147483648 & this.fg;
          }
          isProtected() {
            return 536870912 & this.bg;
          }
          isOverline() {
            return 1073741824 & this.bg;
          }
          getFgColorMode() {
            return 50331648 & this.fg;
          }
          getBgColorMode() {
            return 50331648 & this.bg;
          }
          isFgRGB() {
            return 50331648 == (50331648 & this.fg);
          }
          isBgRGB() {
            return 50331648 == (50331648 & this.bg);
          }
          isFgPalette() {
            return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
          }
          isBgPalette() {
            return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
          }
          isFgDefault() {
            return 0 == (50331648 & this.fg);
          }
          isBgDefault() {
            return 0 == (50331648 & this.bg);
          }
          isAttributeDefault() {
            return 0 === this.fg && 0 === this.bg;
          }
          getFgColor() {
            switch (50331648 & this.fg) {
              case 16777216:
              case 33554432:
                return 255 & this.fg;
              case 50331648:
                return 16777215 & this.fg;
              default:
                return -1;
            }
          }
          getBgColor() {
            switch (50331648 & this.bg) {
              case 16777216:
              case 33554432:
                return 255 & this.bg;
              case 50331648:
                return 16777215 & this.bg;
              default:
                return -1;
            }
          }
          hasExtendedAttrs() {
            return 268435456 & this.bg;
          }
          updateExtended() {
            this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
          }
          getUnderlineColor() {
            if (268435456 & this.bg && ~this.extended.underlineColor)
              switch (50331648 & this.extended.underlineColor) {
                case 16777216:
                case 33554432:
                  return 255 & this.extended.underlineColor;
                case 50331648:
                  return 16777215 & this.extended.underlineColor;
                default:
                  return this.getFgColor();
              }
            return this.getFgColor();
          }
          getUnderlineColorMode() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
          }
          isUnderlineColorRGB() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
          }
          isUnderlineColorPalette() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
          }
          isUnderlineColorDefault() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
          }
          getUnderlineStyle() {
            return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
          }
        }
        t2.AttributeData = i2;
        class s2 {
          constructor(e3 = 0, t3 = 0) {
            this._ext = 0, this._urlId = 0, this._ext = e3, this._urlId = t3;
          }
          get ext() {
            return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
          }
          set ext(e3) {
            this._ext = e3;
          }
          get underlineStyle() {
            return this._urlId ? 5 : (469762048 & this._ext) >> 26;
          }
          set underlineStyle(e3) {
            this._ext &= -469762049, this._ext |= e3 << 26 & 469762048;
          }
          get underlineColor() {
            return 67108863 & this._ext;
          }
          set underlineColor(e3) {
            this._ext &= -67108864, this._ext |= 67108863 & e3;
          }
          get urlId() {
            return this._urlId;
          }
          set urlId(e3) {
            this._urlId = e3;
          }
          clone() {
            return new s2(this._ext, this._urlId);
          }
          isEmpty() {
            return 0 === this.underlineStyle && 0 === this._urlId;
          }
        }
        t2.ExtendedAttrs = s2;
      }, 782: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CellData = void 0;
        const s2 = i2(133), r = i2(855), o = i2(147);
        class n extends o.AttributeData {
          constructor() {
            super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new o.ExtendedAttrs(), this.combinedData = "";
          }
          static fromCharData(e3) {
            const t3 = new n();
            return t3.setFromCharData(e3), t3;
          }
          isCombined() {
            return 2097152 & this.content;
          }
          getWidth() {
            return this.content >> 22;
          }
          getChars() {
            return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, s2.stringFromCodePoint)(2097151 & this.content) : "";
          }
          getCode() {
            return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
          }
          setFromCharData(e3) {
            this.fg = e3[r.CHAR_DATA_ATTR_INDEX], this.bg = 0;
            let t3 = false;
            if (e3[r.CHAR_DATA_CHAR_INDEX].length > 2)
              t3 = true;
            else if (2 === e3[r.CHAR_DATA_CHAR_INDEX].length) {
              const i3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
              if (55296 <= i3 && i3 <= 56319) {
                const s3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                56320 <= s3 && s3 <= 57343 ? this.content = 1024 * (i3 - 55296) + s3 - 56320 + 65536 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22 : t3 = true;
              } else
                t3 = true;
            } else
              this.content = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e3[r.CHAR_DATA_WIDTH_INDEX] << 22;
            t3 && (this.combinedData = e3[r.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22);
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        t2.CellData = n;
      }, 855: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.WHITESPACE_CELL_CODE = t2.WHITESPACE_CELL_WIDTH = t2.WHITESPACE_CELL_CHAR = t2.NULL_CELL_CODE = t2.NULL_CELL_WIDTH = t2.NULL_CELL_CHAR = t2.CHAR_DATA_CODE_INDEX = t2.CHAR_DATA_WIDTH_INDEX = t2.CHAR_DATA_CHAR_INDEX = t2.CHAR_DATA_ATTR_INDEX = t2.DEFAULT_EXT = t2.DEFAULT_ATTR = t2.DEFAULT_COLOR = void 0, t2.DEFAULT_COLOR = 0, t2.DEFAULT_ATTR = 256 | t2.DEFAULT_COLOR << 9, t2.DEFAULT_EXT = 0, t2.CHAR_DATA_ATTR_INDEX = 0, t2.CHAR_DATA_CHAR_INDEX = 1, t2.CHAR_DATA_WIDTH_INDEX = 2, t2.CHAR_DATA_CODE_INDEX = 3, t2.NULL_CELL_CHAR = "", t2.NULL_CELL_WIDTH = 1, t2.NULL_CELL_CODE = 0, t2.WHITESPACE_CELL_CHAR = " ", t2.WHITESPACE_CELL_WIDTH = 1, t2.WHITESPACE_CELL_CODE = 32;
      }, 133: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Utf8ToUtf32 = t2.StringToUtf32 = t2.utf32ToString = t2.stringFromCodePoint = void 0, t2.stringFromCodePoint = function(e3) {
          return e3 > 65535 ? (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10)) + String.fromCharCode(e3 % 1024 + 56320)) : String.fromCharCode(e3);
        }, t2.utf32ToString = function(e3, t3 = 0, i2 = e3.length) {
          let s2 = "";
          for (let r = t3; r < i2; ++r) {
            let t4 = e3[r];
            t4 > 65535 ? (t4 -= 65536, s2 += String.fromCharCode(55296 + (t4 >> 10)) + String.fromCharCode(t4 % 1024 + 56320)) : s2 += String.fromCharCode(t4);
          }
          return s2;
        }, t2.StringToUtf32 = class {
          constructor() {
            this._interim = 0;
          }
          clear() {
            this._interim = 0;
          }
          decode(e3, t3) {
            const i2 = e3.length;
            if (!i2)
              return 0;
            let s2 = 0, r = 0;
            if (this._interim) {
              const i3 = e3.charCodeAt(r++);
              56320 <= i3 && i3 <= 57343 ? t3[s2++] = 1024 * (this._interim - 55296) + i3 - 56320 + 65536 : (t3[s2++] = this._interim, t3[s2++] = i3), this._interim = 0;
            }
            for (let o = r; o < i2; ++o) {
              const r2 = e3.charCodeAt(o);
              if (55296 <= r2 && r2 <= 56319) {
                if (++o >= i2)
                  return this._interim = r2, s2;
                const n = e3.charCodeAt(o);
                56320 <= n && n <= 57343 ? t3[s2++] = 1024 * (r2 - 55296) + n - 56320 + 65536 : (t3[s2++] = r2, t3[s2++] = n);
              } else
                65279 !== r2 && (t3[s2++] = r2);
            }
            return s2;
          }
        }, t2.Utf8ToUtf32 = class {
          constructor() {
            this.interim = new Uint8Array(3);
          }
          clear() {
            this.interim.fill(0);
          }
          decode(e3, t3) {
            const i2 = e3.length;
            if (!i2)
              return 0;
            let s2, r, o, n, a = 0, h = 0, l = 0;
            if (this.interim[0]) {
              let s3 = false, r2 = this.interim[0];
              r2 &= 192 == (224 & r2) ? 31 : 224 == (240 & r2) ? 15 : 7;
              let o2, n2 = 0;
              for (; (o2 = 63 & this.interim[++n2]) && n2 < 4; )
                r2 <<= 6, r2 |= o2;
              const h2 = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, c2 = h2 - n2;
              for (; l < c2; ) {
                if (l >= i2)
                  return 0;
                if (o2 = e3[l++], 128 != (192 & o2)) {
                  l--, s3 = true;
                  break;
                }
                this.interim[n2++] = o2, r2 <<= 6, r2 |= 63 & o2;
              }
              s3 || (2 === h2 ? r2 < 128 ? l-- : t3[a++] = r2 : 3 === h2 ? r2 < 2048 || r2 >= 55296 && r2 <= 57343 || 65279 === r2 || (t3[a++] = r2) : r2 < 65536 || r2 > 1114111 || (t3[a++] = r2)), this.interim.fill(0);
            }
            const c = i2 - 4;
            let d = l;
            for (; d < i2; ) {
              for (; !(!(d < c) || 128 & (s2 = e3[d]) || 128 & (r = e3[d + 1]) || 128 & (o = e3[d + 2]) || 128 & (n = e3[d + 3])); )
                t3[a++] = s2, t3[a++] = r, t3[a++] = o, t3[a++] = n, d += 4;
              if (s2 = e3[d++], s2 < 128)
                t3[a++] = s2;
              else if (192 == (224 & s2)) {
                if (d >= i2)
                  return this.interim[0] = s2, a;
                if (r = e3[d++], 128 != (192 & r)) {
                  d--;
                  continue;
                }
                if (h = (31 & s2) << 6 | 63 & r, h < 128) {
                  d--;
                  continue;
                }
                t3[a++] = h;
              } else if (224 == (240 & s2)) {
                if (d >= i2)
                  return this.interim[0] = s2, a;
                if (r = e3[d++], 128 != (192 & r)) {
                  d--;
                  continue;
                }
                if (d >= i2)
                  return this.interim[0] = s2, this.interim[1] = r, a;
                if (o = e3[d++], 128 != (192 & o)) {
                  d--;
                  continue;
                }
                if (h = (15 & s2) << 12 | (63 & r) << 6 | 63 & o, h < 2048 || h >= 55296 && h <= 57343 || 65279 === h)
                  continue;
                t3[a++] = h;
              } else if (240 == (248 & s2)) {
                if (d >= i2)
                  return this.interim[0] = s2, a;
                if (r = e3[d++], 128 != (192 & r)) {
                  d--;
                  continue;
                }
                if (d >= i2)
                  return this.interim[0] = s2, this.interim[1] = r, a;
                if (o = e3[d++], 128 != (192 & o)) {
                  d--;
                  continue;
                }
                if (d >= i2)
                  return this.interim[0] = s2, this.interim[1] = r, this.interim[2] = o, a;
                if (n = e3[d++], 128 != (192 & n)) {
                  d--;
                  continue;
                }
                if (h = (7 & s2) << 18 | (63 & r) << 12 | (63 & o) << 6 | 63 & n, h < 65536 || h > 1114111)
                  continue;
                t3[a++] = h;
              }
            }
            return a;
          }
        };
      }, 726: (e2, t2) => {
        function i2(e3, t3, i3) {
          t3.di$target === t3 ? t3.di$dependencies.push({ id: e3, index: i3 }) : (t3.di$dependencies = [{ id: e3, index: i3 }], t3.di$target = t3);
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.createDecorator = t2.getServiceDependencies = t2.serviceRegistry = void 0, t2.serviceRegistry = /* @__PURE__ */ new Map(), t2.getServiceDependencies = function(e3) {
          return e3.di$dependencies || [];
        }, t2.createDecorator = function(e3) {
          if (t2.serviceRegistry.has(e3))
            return t2.serviceRegistry.get(e3);
          const s2 = function(e4, t3, r) {
            if (3 !== arguments.length)
              throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
            i2(s2, e4, r);
          };
          return s2.toString = () => e3, t2.serviceRegistry.set(e3, s2), s2;
        };
      }, 97: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.IDecorationService = t2.IUnicodeService = t2.IOscLinkService = t2.IOptionsService = t2.ILogService = t2.LogLevelEnum = t2.IInstantiationService = t2.ICharsetService = t2.ICoreService = t2.ICoreMouseService = t2.IBufferService = void 0;
        const s2 = i2(726);
        var r;
        t2.IBufferService = (0, s2.createDecorator)("BufferService"), t2.ICoreMouseService = (0, s2.createDecorator)("CoreMouseService"), t2.ICoreService = (0, s2.createDecorator)("CoreService"), t2.ICharsetService = (0, s2.createDecorator)("CharsetService"), t2.IInstantiationService = (0, s2.createDecorator)("InstantiationService"), (r = t2.LogLevelEnum || (t2.LogLevelEnum = {}))[r.DEBUG = 0] = "DEBUG", r[r.INFO = 1] = "INFO", r[r.WARN = 2] = "WARN", r[r.ERROR = 3] = "ERROR", r[r.OFF = 4] = "OFF", t2.ILogService = (0, s2.createDecorator)("LogService"), t2.IOptionsService = (0, s2.createDecorator)("OptionsService"), t2.IOscLinkService = (0, s2.createDecorator)("OscLinkService"), t2.IUnicodeService = (0, s2.createDecorator)("UnicodeService"), t2.IDecorationService = (0, s2.createDecorator)("DecorationService");
      } }, t = {};
      function i(s2) {
        var r = t[s2];
        if (void 0 !== r)
          return r.exports;
        var o = t[s2] = { exports: {} };
        return e[s2].call(o.exports, o, o.exports, i), o.exports;
      }
      var s = {};
      return (() => {
        var e2 = s;
        Object.defineProperty(e2, "__esModule", { value: true }), e2.CanvasAddon = void 0;
        const t2 = i(949), r = i(345), o = i(859);
        class n extends o.Disposable {
          constructor() {
            super(...arguments), this._onChangeTextureAtlas = this.register(new r.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new r.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event;
          }
          get textureAtlas() {
            var e3;
            return null === (e3 = this._renderer) || void 0 === e3 ? void 0 : e3.textureAtlas;
          }
          activate(e3) {
            const i2 = e3._core;
            if (!e3.element)
              return void this.register(i2.onWillOpen(() => this.activate(e3)));
            this._terminal = e3;
            const s2 = i2.coreService, n2 = i2.optionsService, a = i2.screenElement, h = i2.linkifier2, l = i2, c = l._bufferService, d = l._renderService, _ = l._characterJoinerService, u = l._charSizeService, g = l._coreBrowserService, f = l._decorationService, v = l._themeService;
            this._renderer = new t2.CanvasRenderer(e3, a, h, c, u, n2, _, s2, g, f, v), this.register((0, r.forwardEvent)(this._renderer.onChangeTextureAtlas, this._onChangeTextureAtlas)), this.register((0, r.forwardEvent)(this._renderer.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas)), d.setRenderer(this._renderer), d.handleResize(c.cols, c.rows), this.register((0, o.toDisposable)(() => {
              var t3;
              d.setRenderer(this._terminal._core._createRenderer()), d.handleResize(e3.cols, e3.rows), null === (t3 = this._renderer) || void 0 === t3 || t3.dispose(), this._renderer = void 0;
            }));
          }
        }
        e2.CanvasAddon = n;
      })(), s;
    })());
  })(xtermAddonCanvas$2);
  return xtermAddonCanvas$2.exports;
}
var xtermAddonCanvasExports = requireXtermAddonCanvas();
const xtermAddonCanvas = /* @__PURE__ */ getDefaultExportFromCjs(xtermAddonCanvasExports);
const xtermAddonCanvas$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xtermAddonCanvas
}, [xtermAddonCanvasExports]);
export {
  xtermAddonCanvas$1 as x
};
