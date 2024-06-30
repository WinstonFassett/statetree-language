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
var xtermAddonWebgl$2 = { exports: {} };
var hasRequiredXtermAddonWebgl;
function requireXtermAddonWebgl() {
  if (hasRequiredXtermAddonWebgl)
    return xtermAddonWebgl$2.exports;
  hasRequiredXtermAddonWebgl = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(self, () => (() => {
      var e = { 965: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.GlyphRenderer = void 0;
        const s2 = i2(381), r = i2(855), o = i2(859), n = i2(374), a = i2(509), h = 11, l = h * Float32Array.BYTES_PER_ELEMENT;
        let c, d = 0, _ = 0, u = 0;
        class g extends o.Disposable {
          constructor(e3, t3, i3) {
            super(), this._terminal = e3, this._gl = t3, this._dimensions = i3, this._activeBuffer = 0, this._vertices = { count: 0, attributes: new Float32Array(0), attributesBuffers: [new Float32Array(0), new Float32Array(0)] };
            const r2 = this._gl;
            void 0 === a.TextureAtlas.maxAtlasPages && (a.TextureAtlas.maxAtlasPages = Math.min(32, (0, n.throwIfFalsy)(r2.getParameter(r2.MAX_TEXTURE_IMAGE_UNITS))), a.TextureAtlas.maxTextureSize = (0, n.throwIfFalsy)(r2.getParameter(r2.MAX_TEXTURE_SIZE))), this._program = (0, n.throwIfFalsy)((0, s2.createProgram)(r2, "#version 300 es\nlayout (location = 0) in vec2 a_unitquad;\nlayout (location = 1) in vec2 a_cellpos;\nlayout (location = 2) in vec2 a_offset;\nlayout (location = 3) in vec2 a_size;\nlayout (location = 4) in float a_texpage;\nlayout (location = 5) in vec2 a_texcoord;\nlayout (location = 6) in vec2 a_texsize;\n\nuniform mat4 u_projection;\nuniform vec2 u_resolution;\n\nout vec2 v_texcoord;\nflat out int v_texpage;\n\nvoid main() {\n  vec2 zeroToOne = (a_offset / u_resolution) + a_cellpos + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_texpage = int(a_texpage);\n  v_texcoord = a_texcoord + a_unitquad * a_texsize;\n}", function(e4) {
              let t4 = "";
              for (let i4 = 1; i4 < e4; i4++)
                t4 += ` else if (v_texpage == ${i4}) { outColor = texture(u_texture[${i4}], v_texcoord); }`;
              return `#version 300 es
precision lowp float;

in vec2 v_texcoord;
flat in int v_texpage;

uniform sampler2D u_texture[${e4}];

out vec4 outColor;

void main() {
  if (v_texpage == 0) {
    outColor = texture(u_texture[0], v_texcoord);
  } ${t4}
}`;
            }(a.TextureAtlas.maxAtlasPages))), this.register((0, o.toDisposable)(() => r2.deleteProgram(this._program))), this._projectionLocation = (0, n.throwIfFalsy)(r2.getUniformLocation(this._program, "u_projection")), this._resolutionLocation = (0, n.throwIfFalsy)(r2.getUniformLocation(this._program, "u_resolution")), this._textureLocation = (0, n.throwIfFalsy)(r2.getUniformLocation(this._program, "u_texture")), this._vertexArrayObject = r2.createVertexArray(), r2.bindVertexArray(this._vertexArrayObject);
            const h2 = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), c2 = r2.createBuffer();
            this.register((0, o.toDisposable)(() => r2.deleteBuffer(c2))), r2.bindBuffer(r2.ARRAY_BUFFER, c2), r2.bufferData(r2.ARRAY_BUFFER, h2, r2.STATIC_DRAW), r2.enableVertexAttribArray(0), r2.vertexAttribPointer(0, 2, this._gl.FLOAT, false, 0, 0);
            const d2 = new Uint8Array([0, 1, 2, 3]), _2 = r2.createBuffer();
            this.register((0, o.toDisposable)(() => r2.deleteBuffer(_2))), r2.bindBuffer(r2.ELEMENT_ARRAY_BUFFER, _2), r2.bufferData(r2.ELEMENT_ARRAY_BUFFER, d2, r2.STATIC_DRAW), this._attributesBuffer = (0, n.throwIfFalsy)(r2.createBuffer()), this.register((0, o.toDisposable)(() => r2.deleteBuffer(this._attributesBuffer))), r2.bindBuffer(r2.ARRAY_BUFFER, this._attributesBuffer), r2.enableVertexAttribArray(2), r2.vertexAttribPointer(2, 2, r2.FLOAT, false, l, 0), r2.vertexAttribDivisor(2, 1), r2.enableVertexAttribArray(3), r2.vertexAttribPointer(3, 2, r2.FLOAT, false, l, 2 * Float32Array.BYTES_PER_ELEMENT), r2.vertexAttribDivisor(3, 1), r2.enableVertexAttribArray(4), r2.vertexAttribPointer(4, 1, r2.FLOAT, false, l, 4 * Float32Array.BYTES_PER_ELEMENT), r2.vertexAttribDivisor(4, 1), r2.enableVertexAttribArray(5), r2.vertexAttribPointer(5, 2, r2.FLOAT, false, l, 5 * Float32Array.BYTES_PER_ELEMENT), r2.vertexAttribDivisor(5, 1), r2.enableVertexAttribArray(6), r2.vertexAttribPointer(6, 2, r2.FLOAT, false, l, 7 * Float32Array.BYTES_PER_ELEMENT), r2.vertexAttribDivisor(6, 1), r2.enableVertexAttribArray(1), r2.vertexAttribPointer(1, 2, r2.FLOAT, false, l, 9 * Float32Array.BYTES_PER_ELEMENT), r2.vertexAttribDivisor(1, 1), r2.useProgram(this._program);
            const u2 = new Int32Array(a.TextureAtlas.maxAtlasPages);
            for (let e4 = 0; e4 < a.TextureAtlas.maxAtlasPages; e4++)
              u2[e4] = e4;
            r2.uniform1iv(this._textureLocation, u2), r2.uniformMatrix4fv(this._projectionLocation, false, s2.PROJECTION_MATRIX), this._atlasTextures = [];
            for (let e4 = 0; e4 < a.TextureAtlas.maxAtlasPages; e4++) {
              const t4 = new s2.GLTexture((0, n.throwIfFalsy)(r2.createTexture()));
              this.register((0, o.toDisposable)(() => r2.deleteTexture(t4.texture))), r2.activeTexture(r2.TEXTURE0 + e4), r2.bindTexture(r2.TEXTURE_2D, t4.texture), r2.texParameteri(r2.TEXTURE_2D, r2.TEXTURE_WRAP_S, r2.CLAMP_TO_EDGE), r2.texParameteri(r2.TEXTURE_2D, r2.TEXTURE_WRAP_T, r2.CLAMP_TO_EDGE), r2.texImage2D(r2.TEXTURE_2D, 0, r2.RGBA, 1, 1, 0, r2.RGBA, r2.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255])), this._atlasTextures[e4] = t4;
            }
            r2.enable(r2.BLEND), r2.blendFunc(r2.SRC_ALPHA, r2.ONE_MINUS_SRC_ALPHA), this.handleResize();
          }
          beginFrame() {
            return !this._atlas || this._atlas.beginFrame();
          }
          updateCell(e3, t3, i3, s3, r2, o2, n2, a2) {
            this._updateCell(this._vertices.attributes, e3, t3, i3, s3, r2, o2, n2, a2);
          }
          _updateCell(e3, t3, i3, s3, o2, n2, a2, l2, g2) {
            d = (i3 * this._terminal.cols + t3) * h, s3 !== r.NULL_CELL_CODE && void 0 !== s3 ? this._atlas && (c = l2 && l2.length > 1 ? this._atlas.getRasterizedGlyphCombinedChar(l2, o2, n2, a2) : this._atlas.getRasterizedGlyph(s3, o2, n2, a2), _ = Math.floor((this._dimensions.device.cell.width - this._dimensions.device.char.width) / 2), o2 !== g2 && c.offset.x > _ ? (u = c.offset.x - _, e3[d] = -(c.offset.x - u) + this._dimensions.device.char.left, e3[d + 1] = -c.offset.y + this._dimensions.device.char.top, e3[d + 2] = (c.size.x - u) / this._dimensions.device.canvas.width, e3[d + 3] = c.size.y / this._dimensions.device.canvas.height, e3[d + 4] = c.texturePage, e3[d + 5] = c.texturePositionClipSpace.x + u / this._atlas.pages[c.texturePage].canvas.width, e3[d + 6] = c.texturePositionClipSpace.y, e3[d + 7] = c.sizeClipSpace.x - u / this._atlas.pages[c.texturePage].canvas.width, e3[d + 8] = c.sizeClipSpace.y) : (e3[d] = -c.offset.x + this._dimensions.device.char.left, e3[d + 1] = -c.offset.y + this._dimensions.device.char.top, e3[d + 2] = c.size.x / this._dimensions.device.canvas.width, e3[d + 3] = c.size.y / this._dimensions.device.canvas.height, e3[d + 4] = c.texturePage, e3[d + 5] = c.texturePositionClipSpace.x, e3[d + 6] = c.texturePositionClipSpace.y, e3[d + 7] = c.sizeClipSpace.x, e3[d + 8] = c.sizeClipSpace.y)) : e3.fill(0, d, d + h - 1 - 2);
          }
          clear() {
            const e3 = this._terminal, t3 = e3.cols * e3.rows * h;
            this._vertices.count !== t3 ? this._vertices.attributes = new Float32Array(t3) : this._vertices.attributes.fill(0);
            let i3 = 0;
            for (; i3 < this._vertices.attributesBuffers.length; i3++)
              this._vertices.count !== t3 ? this._vertices.attributesBuffers[i3] = new Float32Array(t3) : this._vertices.attributesBuffers[i3].fill(0);
            this._vertices.count = t3, i3 = 0;
            for (let t4 = 0; t4 < e3.rows; t4++)
              for (let s3 = 0; s3 < e3.cols; s3++)
                this._vertices.attributes[i3 + 9] = s3 / e3.cols, this._vertices.attributes[i3 + 10] = t4 / e3.rows, i3 += h;
          }
          handleResize() {
            const e3 = this._gl;
            e3.viewport(0, 0, e3.canvas.width, e3.canvas.height), e3.uniform2f(this._resolutionLocation, e3.canvas.width, e3.canvas.height), this.clear();
          }
          render(e3) {
            if (!this._atlas)
              return;
            const t3 = this._gl;
            t3.useProgram(this._program), t3.bindVertexArray(this._vertexArrayObject), this._activeBuffer = (this._activeBuffer + 1) % 2;
            const i3 = this._vertices.attributesBuffers[this._activeBuffer];
            let s3 = 0;
            for (let t4 = 0; t4 < e3.lineLengths.length; t4++) {
              const r2 = t4 * this._terminal.cols * h, o2 = this._vertices.attributes.subarray(r2, r2 + e3.lineLengths[t4] * h);
              i3.set(o2, s3), s3 += o2.length;
            }
            t3.bindBuffer(t3.ARRAY_BUFFER, this._attributesBuffer), t3.bufferData(t3.ARRAY_BUFFER, i3.subarray(0, s3), t3.STREAM_DRAW);
            for (let e4 = 0; e4 < this._atlas.pages.length; e4++)
              this._atlas.pages[e4].version !== this._atlasTextures[e4].version && this._bindAtlasPageTexture(t3, this._atlas, e4);
            t3.drawElementsInstanced(t3.TRIANGLE_STRIP, 4, t3.UNSIGNED_BYTE, 0, s3 / h);
          }
          setAtlas(e3) {
            this._atlas = e3;
            for (const e4 of this._atlasTextures)
              e4.version = -1;
          }
          _bindAtlasPageTexture(e3, t3, i3) {
            e3.activeTexture(e3.TEXTURE0 + i3), e3.bindTexture(e3.TEXTURE_2D, this._atlasTextures[i3].texture), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_WRAP_S, e3.CLAMP_TO_EDGE), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_WRAP_T, e3.CLAMP_TO_EDGE), e3.texImage2D(e3.TEXTURE_2D, 0, e3.RGBA, e3.RGBA, e3.UNSIGNED_BYTE, t3.pages[i3].canvas), e3.generateMipmap(e3.TEXTURE_2D), this._atlasTextures[i3].version = t3.pages[i3].version;
          }
          setDimensions(e3) {
            this._dimensions = e3;
          }
        }
        t2.GlyphRenderer = g;
      }, 742: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.RectangleRenderer = void 0;
        const s2 = i2(381), r = i2(310), o = i2(859), n = i2(374), a = 8 * Float32Array.BYTES_PER_ELEMENT;
        let h = 0, c = 0, d = 0, _ = 0, u = 0, g = 0, v = 0;
        class f extends o.Disposable {
          constructor(e3, t3, i3, r2) {
            super(), this._terminal = e3, this._gl = t3, this._dimensions = i3, this._themeService = r2, this._vertices = { count: 0, attributes: new Float32Array(160) };
            const h2 = this._gl;
            this._program = (0, n.throwIfFalsy)((0, s2.createProgram)(h2, "#version 300 es\nlayout (location = 0) in vec2 a_position;\nlayout (location = 1) in vec2 a_size;\nlayout (location = 2) in vec4 a_color;\nlayout (location = 3) in vec2 a_unitquad;\n\nuniform mat4 u_projection;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 zeroToOne = a_position + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_color = a_color;\n}", "#version 300 es\nprecision lowp float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = v_color;\n}")), this.register((0, o.toDisposable)(() => h2.deleteProgram(this._program))), this._projectionLocation = (0, n.throwIfFalsy)(h2.getUniformLocation(this._program, "u_projection")), this._vertexArrayObject = h2.createVertexArray(), h2.bindVertexArray(this._vertexArrayObject);
            const l = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), c2 = h2.createBuffer();
            this.register((0, o.toDisposable)(() => h2.deleteBuffer(c2))), h2.bindBuffer(h2.ARRAY_BUFFER, c2), h2.bufferData(h2.ARRAY_BUFFER, l, h2.STATIC_DRAW), h2.enableVertexAttribArray(3), h2.vertexAttribPointer(3, 2, this._gl.FLOAT, false, 0, 0);
            const d2 = new Uint8Array([0, 1, 2, 3]), _2 = h2.createBuffer();
            this.register((0, o.toDisposable)(() => h2.deleteBuffer(_2))), h2.bindBuffer(h2.ELEMENT_ARRAY_BUFFER, _2), h2.bufferData(h2.ELEMENT_ARRAY_BUFFER, d2, h2.STATIC_DRAW), this._attributesBuffer = (0, n.throwIfFalsy)(h2.createBuffer()), this.register((0, o.toDisposable)(() => h2.deleteBuffer(this._attributesBuffer))), h2.bindBuffer(h2.ARRAY_BUFFER, this._attributesBuffer), h2.enableVertexAttribArray(0), h2.vertexAttribPointer(0, 2, h2.FLOAT, false, a, 0), h2.vertexAttribDivisor(0, 1), h2.enableVertexAttribArray(1), h2.vertexAttribPointer(1, 2, h2.FLOAT, false, a, 2 * Float32Array.BYTES_PER_ELEMENT), h2.vertexAttribDivisor(1, 1), h2.enableVertexAttribArray(2), h2.vertexAttribPointer(2, 4, h2.FLOAT, false, a, 4 * Float32Array.BYTES_PER_ELEMENT), h2.vertexAttribDivisor(2, 1), this._updateCachedColors(r2.colors), this.register(this._themeService.onChangeColors((e4) => {
              this._updateCachedColors(e4), this._updateViewportRectangle();
            }));
          }
          render() {
            const e3 = this._gl;
            e3.useProgram(this._program), e3.bindVertexArray(this._vertexArrayObject), e3.uniformMatrix4fv(this._projectionLocation, false, s2.PROJECTION_MATRIX), e3.bindBuffer(e3.ARRAY_BUFFER, this._attributesBuffer), e3.bufferData(e3.ARRAY_BUFFER, this._vertices.attributes, e3.DYNAMIC_DRAW), e3.drawElementsInstanced(this._gl.TRIANGLE_STRIP, 4, e3.UNSIGNED_BYTE, 0, this._vertices.count);
          }
          handleResize() {
            this._updateViewportRectangle();
          }
          setDimensions(e3) {
            this._dimensions = e3;
          }
          _updateCachedColors(e3) {
            this._bgFloat = this._colorToFloat32Array(e3.background);
          }
          _updateViewportRectangle() {
            this._addRectangleFloat(this._vertices.attributes, 0, 0, 0, this._terminal.cols * this._dimensions.device.cell.width, this._terminal.rows * this._dimensions.device.cell.height, this._bgFloat);
          }
          updateBackgrounds(e3) {
            const t3 = this._terminal, i3 = this._vertices;
            let s3, o2, n2, a2, h2, l, c2, d2, _2, u2, g2, v2 = 1;
            for (s3 = 0; s3 < t3.rows; s3++) {
              for (n2 = -1, a2 = 0, h2 = 0, l = false, o2 = 0; o2 < t3.cols; o2++)
                c2 = (s3 * t3.cols + o2) * r.RENDER_MODEL_INDICIES_PER_CELL, d2 = e3.cells[c2 + r.RENDER_MODEL_BG_OFFSET], _2 = e3.cells[c2 + r.RENDER_MODEL_FG_OFFSET], u2 = !!(67108864 & _2), (d2 !== a2 || _2 !== h2 && (l || u2)) && ((0 !== a2 || l && 0 !== h2) && (g2 = 8 * v2++, this._updateRectangle(i3, g2, h2, a2, n2, o2, s3)), n2 = o2, a2 = d2, h2 = _2, l = u2);
              (0 !== a2 || l && 0 !== h2) && (g2 = 8 * v2++, this._updateRectangle(i3, g2, h2, a2, n2, t3.cols, s3));
            }
            i3.count = v2;
          }
          _updateRectangle(e3, t3, i3, r2, o2, n2, a2) {
            if (67108864 & i3)
              switch (50331648 & i3) {
                case 16777216:
                case 33554432:
                  h = this._themeService.colors.ansi[255 & i3].rgba;
                  break;
                case 50331648:
                  h = (16777215 & i3) << 8;
                  break;
                default:
                  h = this._themeService.colors.foreground.rgba;
              }
            else
              switch (50331648 & r2) {
                case 16777216:
                case 33554432:
                  h = this._themeService.colors.ansi[255 & r2].rgba;
                  break;
                case 50331648:
                  h = (16777215 & r2) << 8;
                  break;
                default:
                  h = this._themeService.colors.background.rgba;
              }
            e3.attributes.length < t3 + 4 && (e3.attributes = (0, s2.expandFloat32Array)(e3.attributes, this._terminal.rows * this._terminal.cols * 8)), c = o2 * this._dimensions.device.cell.width, d = a2 * this._dimensions.device.cell.height, _ = (h >> 24 & 255) / 255, u = (h >> 16 & 255) / 255, g = (h >> 8 & 255) / 255, v = 1, this._addRectangle(e3.attributes, t3, c, d, (n2 - o2) * this._dimensions.device.cell.width, this._dimensions.device.cell.height, _, u, g, v);
          }
          _addRectangle(e3, t3, i3, s3, r2, o2, n2, a2, h2, l) {
            e3[t3] = i3 / this._dimensions.device.canvas.width, e3[t3 + 1] = s3 / this._dimensions.device.canvas.height, e3[t3 + 2] = r2 / this._dimensions.device.canvas.width, e3[t3 + 3] = o2 / this._dimensions.device.canvas.height, e3[t3 + 4] = n2, e3[t3 + 5] = a2, e3[t3 + 6] = h2, e3[t3 + 7] = l;
          }
          _addRectangleFloat(e3, t3, i3, s3, r2, o2, n2) {
            e3[t3] = i3 / this._dimensions.device.canvas.width, e3[t3 + 1] = s3 / this._dimensions.device.canvas.height, e3[t3 + 2] = r2 / this._dimensions.device.canvas.width, e3[t3 + 3] = o2 / this._dimensions.device.canvas.height, e3[t3 + 4] = n2[0], e3[t3 + 5] = n2[1], e3[t3 + 6] = n2[2], e3[t3 + 7] = n2[3];
          }
          _colorToFloat32Array(e3) {
            return new Float32Array([(e3.rgba >> 24 & 255) / 255, (e3.rgba >> 16 & 255) / 255, (e3.rgba >> 8 & 255) / 255, (255 & e3.rgba) / 255]);
          }
        }
        t2.RectangleRenderer = f;
      }, 310: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderModel = t2.COMBINED_CHAR_BIT_MASK = t2.RENDER_MODEL_EXT_OFFSET = t2.RENDER_MODEL_FG_OFFSET = t2.RENDER_MODEL_BG_OFFSET = t2.RENDER_MODEL_INDICIES_PER_CELL = void 0;
        const s2 = i2(296);
        t2.RENDER_MODEL_INDICIES_PER_CELL = 4, t2.RENDER_MODEL_BG_OFFSET = 1, t2.RENDER_MODEL_FG_OFFSET = 2, t2.RENDER_MODEL_EXT_OFFSET = 3, t2.COMBINED_CHAR_BIT_MASK = 2147483648, t2.RenderModel = class {
          constructor() {
            this.cells = new Uint32Array(0), this.lineLengths = new Uint32Array(0), this.selection = (0, s2.createSelectionRenderModel)();
          }
          resize(e3, i3) {
            const s3 = e3 * i3 * t2.RENDER_MODEL_INDICIES_PER_CELL;
            s3 !== this.cells.length && (this.cells = new Uint32Array(s3), this.lineLengths = new Uint32Array(i3));
          }
          clear() {
            this.cells.fill(0, 0), this.lineLengths.fill(0, 0);
          }
        };
      }, 666: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.JoinedCellData = t2.WebglRenderer = void 0;
        const s2 = i2(820), r = i2(274), o = i2(627), n = i2(56), a = i2(374), h = i2(147), l = i2(782), c = i2(855), d = i2(345), _ = i2(859), u = i2(965), g = i2(742), v = i2(461), f = i2(733), C = i2(310);
        class p extends _.Disposable {
          constructor(e3, t3, i3, h2, c2, u2, g2, p2, m2) {
            super(), this._terminal = e3, this._characterJoinerService = t3, this._charSizeService = i3, this._coreBrowserService = h2, this._decorationService = u2, this._optionsService = g2, this._themeService = p2, this._model = new C.RenderModel(), this._workCell = new l.CellData(), this._onChangeTextureAtlas = this.register(new d.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new d.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._onRemoveTextureAtlasCanvas = this.register(new d.EventEmitter()), this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event, this._onRequestRedraw = this.register(new d.EventEmitter()), this.onRequestRedraw = this._onRequestRedraw.event, this._onContextLoss = this.register(new d.EventEmitter()), this.onContextLoss = this._onContextLoss.event, this.register(this._themeService.onChangeColors(() => this._handleColorChange())), this._cellColorResolver = new r.CellColorResolver(this._terminal, this._model.selection, this._decorationService, this._coreBrowserService, this._themeService), this._core = this._terminal._core, this._renderLayers = [new f.LinkRenderLayer(this._core.screenElement, 2, this._terminal, this._core.linkifier2, this._coreBrowserService, g2, this._themeService), new v.CursorRenderLayer(e3, this._core.screenElement, 3, this._onRequestRedraw, this._coreBrowserService, c2, g2, this._themeService)], this.dimensions = (0, a.createRenderDimensions)(), this._devicePixelRatio = this._coreBrowserService.dpr, this._updateDimensions(), this.register(g2.onOptionChange(() => this._handleOptionsChanged())), this._canvas = document.createElement("canvas");
            const x2 = { antialias: false, depth: false, preserveDrawingBuffer: m2 };
            if (this._gl = this._canvas.getContext("webgl2", x2), !this._gl)
              throw new Error("WebGL2 not supported " + this._gl);
            this.register((0, s2.addDisposableDomListener)(this._canvas, "webglcontextlost", (e4) => {
              console.log("webglcontextlost event received"), e4.preventDefault(), this._contextRestorationTimeout = setTimeout(() => {
                this._contextRestorationTimeout = void 0, console.warn("webgl context not restored; firing onContextLoss"), this._onContextLoss.fire(e4);
              }, 3e3);
            })), this.register((0, s2.addDisposableDomListener)(this._canvas, "webglcontextrestored", (e4) => {
              console.warn("webglcontextrestored event received"), clearTimeout(this._contextRestorationTimeout), this._contextRestorationTimeout = void 0, (0, o.removeTerminalFromCache)(this._terminal), this._initializeWebGLState(), this._requestRedrawViewport();
            })), this.register((0, n.observeDevicePixelDimensions)(this._canvas, this._coreBrowserService.window, (e4, t4) => this._setCanvasDevicePixelDimensions(e4, t4))), this._core.screenElement.appendChild(this._canvas), [this._rectangleRenderer, this._glyphRenderer] = this._initializeWebGLState(), this._isAttached = this._coreBrowserService.window.document.body.contains(this._core.screenElement), this.register((0, _.toDisposable)(() => {
              var e4;
              for (const e5 of this._renderLayers)
                e5.dispose();
              null === (e4 = this._canvas.parentElement) || void 0 === e4 || e4.removeChild(this._canvas), (0, o.removeTerminalFromCache)(this._terminal);
            }));
          }
          get textureAtlas() {
            var e3;
            return null === (e3 = this._charAtlas) || void 0 === e3 ? void 0 : e3.pages[0].canvas;
          }
          _handleColorChange() {
            this._refreshCharAtlas(), this._clearModel(true);
          }
          handleDevicePixelRatioChange() {
            this._devicePixelRatio !== this._coreBrowserService.dpr && (this._devicePixelRatio = this._coreBrowserService.dpr, this.handleResize(this._terminal.cols, this._terminal.rows));
          }
          handleResize(e3, t3) {
            var i3, s3, r2, o2;
            this._updateDimensions(), this._model.resize(this._terminal.cols, this._terminal.rows);
            for (const e4 of this._renderLayers)
              e4.resize(this._terminal, this.dimensions);
            this._canvas.width = this.dimensions.device.canvas.width, this._canvas.height = this.dimensions.device.canvas.height, this._canvas.style.width = `${this.dimensions.css.canvas.width}px`, this._canvas.style.height = `${this.dimensions.css.canvas.height}px`, this._core.screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._core.screenElement.style.height = `${this.dimensions.css.canvas.height}px`, null === (i3 = this._rectangleRenderer) || void 0 === i3 || i3.setDimensions(this.dimensions), null === (s3 = this._rectangleRenderer) || void 0 === s3 || s3.handleResize(), null === (r2 = this._glyphRenderer) || void 0 === r2 || r2.setDimensions(this.dimensions), null === (o2 = this._glyphRenderer) || void 0 === o2 || o2.handleResize(), this._refreshCharAtlas(), this._clearModel(false);
          }
          handleCharSizeChanged() {
            this.handleResize(this._terminal.cols, this._terminal.rows);
          }
          handleBlur() {
            for (const e3 of this._renderLayers)
              e3.handleBlur(this._terminal);
            this._requestRedrawViewport();
          }
          handleFocus() {
            for (const e3 of this._renderLayers)
              e3.handleFocus(this._terminal);
            this._requestRedrawViewport();
          }
          handleSelectionChanged(e3, t3, i3) {
            for (const s3 of this._renderLayers)
              s3.handleSelectionChanged(this._terminal, e3, t3, i3);
            this._model.selection.update(this._terminal, e3, t3, i3), this._requestRedrawViewport();
          }
          handleCursorMove() {
            for (const e3 of this._renderLayers)
              e3.handleCursorMove(this._terminal);
          }
          _handleOptionsChanged() {
            this._updateDimensions(), this._refreshCharAtlas();
          }
          _initializeWebGLState() {
            var e3, t3;
            return null === (e3 = this._rectangleRenderer) || void 0 === e3 || e3.dispose(), null === (t3 = this._glyphRenderer) || void 0 === t3 || t3.dispose(), this._rectangleRenderer = this.register(new g.RectangleRenderer(this._terminal, this._gl, this.dimensions, this._themeService)), this._glyphRenderer = this.register(new u.GlyphRenderer(this._terminal, this._gl, this.dimensions)), this.handleCharSizeChanged(), [this._rectangleRenderer, this._glyphRenderer];
          }
          _refreshCharAtlas() {
            var e3, t3;
            if (this.dimensions.device.char.width <= 0 && this.dimensions.device.char.height <= 0)
              return void (this._isAttached = false);
            const i3 = (0, o.acquireTextureAtlas)(this._terminal, this._optionsService.rawOptions, this._themeService.colors, this.dimensions.device.cell.width, this.dimensions.device.cell.height, this.dimensions.device.char.width, this.dimensions.device.char.height, this._coreBrowserService.dpr);
            this._charAtlas !== i3 && (null === (e3 = this._charAtlasDisposable) || void 0 === e3 || e3.dispose(), this._onChangeTextureAtlas.fire(i3.pages[0].canvas), this._charAtlasDisposable = (0, _.getDisposeArrayDisposable)([(0, d.forwardEvent)(i3.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas), (0, d.forwardEvent)(i3.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas)])), this._charAtlas = i3, this._charAtlas.warmUp(), null === (t3 = this._glyphRenderer) || void 0 === t3 || t3.setAtlas(this._charAtlas);
          }
          _clearModel(e3) {
            var t3;
            this._model.clear(), e3 && (null === (t3 = this._glyphRenderer) || void 0 === t3 || t3.clear());
          }
          clearTextureAtlas() {
            var e3;
            null === (e3 = this._charAtlas) || void 0 === e3 || e3.clearTexture(), this._clearModel(true), this._requestRedrawViewport();
          }
          clear() {
            this._clearModel(true);
            for (const e3 of this._renderLayers)
              e3.reset(this._terminal);
          }
          registerCharacterJoiner(e3) {
            return -1;
          }
          deregisterCharacterJoiner(e3) {
            return false;
          }
          renderRows(e3, t3) {
            var i3, s3;
            if (!this._isAttached) {
              if (!(this._coreBrowserService.window.document.body.contains(this._core.screenElement) && this._charSizeService.width && this._charSizeService.height))
                return;
              this._updateDimensions(), this._refreshCharAtlas(), this._isAttached = true;
            }
            for (const i4 of this._renderLayers)
              i4.handleGridChanged(this._terminal, e3, t3);
            this._glyphRenderer && this._rectangleRenderer && (this._glyphRenderer.beginFrame() ? (this._clearModel(true), this._updateModel(0, this._terminal.rows - 1)) : this._updateModel(e3, t3), null === (i3 = this._rectangleRenderer) || void 0 === i3 || i3.render(), null === (s3 = this._glyphRenderer) || void 0 === s3 || s3.render(this._model));
          }
          _updateModel(e3, t3) {
            const i3 = this._core;
            let s3, r2, o2, n2, a2, h2, l2, d2, _2, u2, g2, v2, f2, p2 = this._workCell;
            for (e3 = x(e3, i3.rows - 1, 0), t3 = x(t3, i3.rows - 1, 0), r2 = e3; r2 <= t3; r2++)
              for (o2 = r2 + i3.buffer.ydisp, n2 = i3.buffer.lines.get(o2), this._model.lineLengths[r2] = 0, a2 = this._characterJoinerService.getJoinedCharacters(o2), v2 = 0; v2 < i3.cols; v2++)
                if (s3 = this._cellColorResolver.result.bg, n2.loadCell(v2, p2), 0 === v2 && (s3 = this._cellColorResolver.result.bg), h2 = false, l2 = v2, a2.length > 0 && v2 === a2[0][0] && (h2 = true, d2 = a2.shift(), p2 = new m(p2, n2.translateToString(true, d2[0], d2[1]), d2[1] - d2[0]), l2 = d2[1] - 1), _2 = p2.getChars(), u2 = p2.getCode(), g2 = (r2 * i3.cols + v2) * C.RENDER_MODEL_INDICIES_PER_CELL, this._cellColorResolver.resolve(p2, v2, o2), u2 !== c.NULL_CELL_CODE && (this._model.lineLengths[r2] = v2 + 1), (this._model.cells[g2] !== u2 || this._model.cells[g2 + C.RENDER_MODEL_BG_OFFSET] !== this._cellColorResolver.result.bg || this._model.cells[g2 + C.RENDER_MODEL_FG_OFFSET] !== this._cellColorResolver.result.fg || this._model.cells[g2 + C.RENDER_MODEL_EXT_OFFSET] !== this._cellColorResolver.result.ext) && (_2.length > 1 && (u2 |= C.COMBINED_CHAR_BIT_MASK), this._model.cells[g2] = u2, this._model.cells[g2 + C.RENDER_MODEL_BG_OFFSET] = this._cellColorResolver.result.bg, this._model.cells[g2 + C.RENDER_MODEL_FG_OFFSET] = this._cellColorResolver.result.fg, this._model.cells[g2 + C.RENDER_MODEL_EXT_OFFSET] = this._cellColorResolver.result.ext, this._glyphRenderer.updateCell(v2, r2, u2, this._cellColorResolver.result.bg, this._cellColorResolver.result.fg, this._cellColorResolver.result.ext, _2, s3), h2))
                  for (p2 = this._workCell, v2++; v2 < l2; v2++)
                    f2 = (r2 * i3.cols + v2) * C.RENDER_MODEL_INDICIES_PER_CELL, this._glyphRenderer.updateCell(v2, r2, c.NULL_CELL_CODE, 0, 0, 0, c.NULL_CELL_CHAR, 0), this._model.cells[f2] = c.NULL_CELL_CODE, this._model.cells[f2 + C.RENDER_MODEL_BG_OFFSET] = this._cellColorResolver.result.bg, this._model.cells[f2 + C.RENDER_MODEL_FG_OFFSET] = this._cellColorResolver.result.fg, this._model.cells[f2 + C.RENDER_MODEL_EXT_OFFSET] = this._cellColorResolver.result.ext;
            this._rectangleRenderer.updateBackgrounds(this._model);
          }
          _updateDimensions() {
            this._charSizeService.width && this._charSizeService.height && (this.dimensions.device.char.width = Math.floor(this._charSizeService.width * this._devicePixelRatio), this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * this._devicePixelRatio), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.top = 1 === this._optionsService.rawOptions.lineHeight ? 0 : Math.round((this.dimensions.device.cell.height - this.dimensions.device.char.height) / 2), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.char.left = Math.floor(this._optionsService.rawOptions.letterSpacing / 2), this.dimensions.device.canvas.height = this._terminal.rows * this.dimensions.device.cell.height, this.dimensions.device.canvas.width = this._terminal.cols * this.dimensions.device.cell.width, this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / this._devicePixelRatio), this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / this._devicePixelRatio), this.dimensions.css.cell.height = this.dimensions.device.cell.height / this._devicePixelRatio, this.dimensions.css.cell.width = this.dimensions.device.cell.width / this._devicePixelRatio);
          }
          _setCanvasDevicePixelDimensions(e3, t3) {
            this._canvas.width === e3 && this._canvas.height === t3 || (this._canvas.width = e3, this._canvas.height = t3, this._requestRedrawViewport());
          }
          _requestRedrawViewport() {
            this._onRequestRedraw.fire({ start: 0, end: this._terminal.rows - 1 });
          }
        }
        t2.WebglRenderer = p;
        class m extends h.AttributeData {
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
        function x(e3, t3, i3 = 0) {
          return Math.max(Math.min(e3, t3), i3);
        }
        t2.JoinedCellData = m;
      }, 381: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.GLTexture = t2.expandFloat32Array = t2.createShader = t2.createProgram = t2.PROJECTION_MATRIX = void 0;
        const s2 = i2(374);
        function r(e3, t3, i3) {
          const r2 = (0, s2.throwIfFalsy)(e3.createShader(t3));
          if (e3.shaderSource(r2, i3), e3.compileShader(r2), e3.getShaderParameter(r2, e3.COMPILE_STATUS))
            return r2;
          console.error(e3.getShaderInfoLog(r2)), e3.deleteShader(r2);
        }
        t2.PROJECTION_MATRIX = new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]), t2.createProgram = function(e3, t3, i3) {
          const o = (0, s2.throwIfFalsy)(e3.createProgram());
          if (e3.attachShader(o, (0, s2.throwIfFalsy)(r(e3, e3.VERTEX_SHADER, t3))), e3.attachShader(o, (0, s2.throwIfFalsy)(r(e3, e3.FRAGMENT_SHADER, i3))), e3.linkProgram(o), e3.getProgramParameter(o, e3.LINK_STATUS))
            return o;
          console.error(e3.getProgramInfoLog(o)), e3.deleteProgram(o);
        }, t2.createShader = r, t2.expandFloat32Array = function(e3, t3) {
          const i3 = Math.min(2 * e3.length, t3), s3 = new Float32Array(i3);
          for (let t4 = 0; t4 < e3.length; t4++)
            s3[t4] = e3[t4];
          return s3;
        }, t2.GLTexture = class {
          constructor(e3) {
            this.texture = e3, this.version = -1;
          }
        };
      }, 592: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BaseRenderLayer = void 0;
        const s2 = i2(627), r = i2(237), o = i2(374), n = i2(859);
        class a extends n.Disposable {
          constructor(e3, t3, i3, s3, r2, o2, a2, h) {
            super(), this._container = t3, this._alpha = r2, this._coreBrowserService = o2, this._optionsService = a2, this._themeService = h, this._deviceCharWidth = 0, this._deviceCharHeight = 0, this._deviceCellWidth = 0, this._deviceCellHeight = 0, this._deviceCharLeft = 0, this._deviceCharTop = 0, this._canvas = document.createElement("canvas"), this._canvas.classList.add(`xterm-${i3}-layer`), this._canvas.style.zIndex = s3.toString(), this._initCanvas(), this._container.appendChild(this._canvas), this.register(this._themeService.onChangeColors((t4) => {
              this._refreshCharAtlas(e3, t4), this.reset(e3);
            })), this.register((0, n.toDisposable)(() => {
              var e4;
              this._canvas.remove(), null === (e4 = this._charAtlas) || void 0 === e4 || e4.dispose();
            }));
          }
          _initCanvas() {
            this._ctx = (0, o.throwIfFalsy)(this._canvas.getContext("2d", { alpha: this._alpha })), this._alpha || this._clearAll();
          }
          handleBlur(e3) {
          }
          handleFocus(e3) {
          }
          handleCursorMove(e3) {
          }
          handleGridChanged(e3, t3, i3) {
          }
          handleSelectionChanged(e3, t3, i3, s3 = false) {
          }
          _setTransparency(e3, t3) {
            if (t3 === this._alpha)
              return;
            const i3 = this._canvas;
            this._alpha = t3, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, i3), this._refreshCharAtlas(e3, this._themeService.colors), this.handleGridChanged(e3, 0, e3.rows - 1);
          }
          _refreshCharAtlas(e3, t3) {
            this._deviceCharWidth <= 0 && this._deviceCharHeight <= 0 || (this._charAtlas = (0, s2.acquireTextureAtlas)(e3, this._optionsService.rawOptions, t3, this._deviceCellWidth, this._deviceCellHeight, this._deviceCharWidth, this._deviceCharHeight, this._coreBrowserService.dpr), this._charAtlas.warmUp());
          }
          resize(e3, t3) {
            this._deviceCellWidth = t3.device.cell.width, this._deviceCellHeight = t3.device.cell.height, this._deviceCharWidth = t3.device.char.width, this._deviceCharHeight = t3.device.char.height, this._deviceCharLeft = t3.device.char.left, this._deviceCharTop = t3.device.char.top, this._canvas.width = t3.device.canvas.width, this._canvas.height = t3.device.canvas.height, this._canvas.style.width = `${t3.css.canvas.width}px`, this._canvas.style.height = `${t3.css.canvas.height}px`, this._alpha || this._clearAll(), this._refreshCharAtlas(e3, this._themeService.colors);
          }
          _fillCells(e3, t3, i3, s3) {
            this._ctx.fillRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, i3 * this._deviceCellWidth, s3 * this._deviceCellHeight);
          }
          _fillBottomLineAtCells(e3, t3, i3 = 1) {
            this._ctx.fillRect(e3 * this._deviceCellWidth, (t3 + 1) * this._deviceCellHeight - this._coreBrowserService.dpr - 1, i3 * this._deviceCellWidth, this._coreBrowserService.dpr);
          }
          _fillLeftLineAtCell(e3, t3, i3) {
            this._ctx.fillRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, this._coreBrowserService.dpr * i3, this._deviceCellHeight);
          }
          _strokeRectAtCell(e3, t3, i3, s3) {
            this._ctx.lineWidth = this._coreBrowserService.dpr, this._ctx.strokeRect(e3 * this._deviceCellWidth + this._coreBrowserService.dpr / 2, t3 * this._deviceCellHeight + this._coreBrowserService.dpr / 2, i3 * this._deviceCellWidth - this._coreBrowserService.dpr, s3 * this._deviceCellHeight - this._coreBrowserService.dpr);
          }
          _clearAll() {
            this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
          }
          _clearCells(e3, t3, i3, s3) {
            this._alpha ? this._ctx.clearRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, i3 * this._deviceCellWidth, s3 * this._deviceCellHeight) : (this._ctx.fillStyle = this._themeService.colors.background.css, this._ctx.fillRect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, i3 * this._deviceCellWidth, s3 * this._deviceCellHeight));
          }
          _fillCharTrueColor(e3, t3, i3, s3) {
            this._ctx.font = this._getFont(e3, false, false), this._ctx.textBaseline = r.TEXT_BASELINE, this._clipCell(i3, s3, t3.getWidth()), this._ctx.fillText(t3.getChars(), i3 * this._deviceCellWidth + this._deviceCharLeft, s3 * this._deviceCellHeight + this._deviceCharTop + this._deviceCharHeight);
          }
          _clipCell(e3, t3, i3) {
            this._ctx.beginPath(), this._ctx.rect(e3 * this._deviceCellWidth, t3 * this._deviceCellHeight, i3 * this._deviceCellWidth, this._deviceCellHeight), this._ctx.clip();
          }
          _getFont(e3, t3, i3) {
            return `${i3 ? "italic" : ""} ${t3 ? e3.options.fontWeightBold : e3.options.fontWeight} ${e3.options.fontSize * this._coreBrowserService.dpr}px ${e3.options.fontFamily}`;
          }
        }
        t2.BaseRenderLayer = a;
      }, 461: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CursorRenderLayer = void 0;
        const s2 = i2(592), r = i2(782), o = i2(859), n = i2(399);
        class a extends s2.BaseRenderLayer {
          constructor(e3, t3, i3, s3, n2, a2, h2, l) {
            super(e3, t3, "cursor", i3, true, n2, h2, l), this._onRequestRefreshRowsEvent = s3, this._coreService = a2, this._cell = new r.CellData(), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 }, this._cursorRenderers = { bar: this._renderBarCursor.bind(this), block: this._renderBlockCursor.bind(this), underline: this._renderUnderlineCursor.bind(this) }, this._handleOptionsChanged(e3), this.register(h2.onOptionChange(() => this._handleOptionsChanged(e3))), this.register((0, o.toDisposable)(() => {
              var e4;
              null === (e4 = this._cursorBlinkStateManager) || void 0 === e4 || e4.dispose(), this._cursorBlinkStateManager = void 0;
            }));
          }
          resize(e3, t3) {
            super.resize(e3, t3), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 };
          }
          reset(e3) {
            var t3;
            this._clearCursor(), null === (t3 = this._cursorBlinkStateManager) || void 0 === t3 || t3.restartBlinkAnimation(e3), this._handleOptionsChanged(e3);
          }
          handleBlur(e3) {
            var t3;
            null === (t3 = this._cursorBlinkStateManager) || void 0 === t3 || t3.pause(), this._onRequestRefreshRowsEvent.fire({ start: e3.buffer.active.cursorY, end: e3.buffer.active.cursorY });
          }
          handleFocus(e3) {
            var t3;
            null === (t3 = this._cursorBlinkStateManager) || void 0 === t3 || t3.resume(e3), this._onRequestRefreshRowsEvent.fire({ start: e3.buffer.active.cursorY, end: e3.buffer.active.cursorY });
          }
          _handleOptionsChanged(e3) {
            var t3;
            e3.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new h(() => {
              this._render(e3, true);
            }, this._coreBrowserService)) : (null === (t3 = this._cursorBlinkStateManager) || void 0 === t3 || t3.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRefreshRowsEvent.fire({ start: e3.buffer.active.cursorY, end: e3.buffer.active.cursorY });
          }
          handleCursorMove(e3) {
            var t3;
            null === (t3 = this._cursorBlinkStateManager) || void 0 === t3 || t3.restartBlinkAnimation(e3);
          }
          handleGridChanged(e3, t3, i3) {
            !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(e3, false) : this._cursorBlinkStateManager.restartBlinkAnimation(e3);
          }
          _render(e3, t3) {
            if (!this._coreService.isCursorInitialized || this._coreService.isCursorHidden)
              return void this._clearCursor();
            const i3 = e3.buffer.active.baseY + e3.buffer.active.cursorY, s3 = i3 - e3.buffer.active.viewportY, r2 = Math.min(e3.buffer.active.cursorX, e3.cols - 1);
            if (s3 < 0 || s3 >= e3.rows)
              this._clearCursor();
            else if (e3._core.buffer.lines.get(i3).loadCell(r2, this._cell), void 0 !== this._cell.content) {
              if (!this._coreBrowserService.isFocused) {
                this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css;
                const t4 = e3.options.cursorStyle;
                return this._renderBlurCursor(e3, r2, s3, this._cell), this._ctx.restore(), this._state.x = r2, this._state.y = s3, this._state.isFocused = false, this._state.style = t4, void (this._state.width = this._cell.getWidth());
              }
              if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                if (this._state) {
                  if (this._state.x === r2 && this._state.y === s3 && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === e3.options.cursorStyle && this._state.width === this._cell.getWidth())
                    return;
                  this._clearCursor();
                }
                this._ctx.save(), this._cursorRenderers[e3.options.cursorStyle || "block"](e3, r2, s3, this._cell), this._ctx.restore(), this._state.x = r2, this._state.y = s3, this._state.isFocused = false, this._state.style = e3.options.cursorStyle, this._state.width = this._cell.getWidth();
              } else
                this._clearCursor();
            }
          }
          _clearCursor() {
            this._state && (n.isFirefox || this._coreBrowserService.dpr < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = { x: 0, y: 0, isFocused: false, style: "", width: 0 });
          }
          _renderBarCursor(e3, t3, i3, s3) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillLeftLineAtCell(t3, i3, this._optionsService.rawOptions.cursorWidth), this._ctx.restore();
          }
          _renderBlockCursor(e3, t3, i3, s3) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillCells(t3, i3, s3.getWidth(), 1), this._ctx.fillStyle = this._themeService.colors.cursorAccent.css, this._fillCharTrueColor(e3, s3, t3, i3), this._ctx.restore();
          }
          _renderUnderlineCursor(e3, t3, i3, s3) {
            this._ctx.save(), this._ctx.fillStyle = this._themeService.colors.cursor.css, this._fillBottomLineAtCells(t3, i3), this._ctx.restore();
          }
          _renderBlurCursor(e3, t3, i3, s3) {
            this._ctx.save(), this._ctx.strokeStyle = this._themeService.colors.cursor.css, this._strokeRectAtCell(t3, i3, s3.getWidth(), 1), this._ctx.restore();
          }
        }
        t2.CursorRenderLayer = a;
        class h {
          constructor(e3, t3) {
            this._renderCallback = e3, this._coreBrowserService = t3, this.isCursorVisible = true, this._coreBrowserService.isFocused && this._restartInterval();
          }
          get isPaused() {
            return !(this._blinkStartTimeout || this._blinkInterval);
          }
          dispose() {
            this._blinkInterval && (this._coreBrowserService.window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
          }
          restartBlinkAnimation(e3) {
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
          resume(e3) {
            this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation(e3);
          }
        }
      }, 733: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LinkRenderLayer = void 0;
        const s2 = i2(197), r = i2(237), o = i2(592);
        class n extends o.BaseRenderLayer {
          constructor(e3, t3, i3, s3, r2, o2, n2) {
            super(i3, e3, "link", t3, true, r2, o2, n2), this.register(s3.onShowLinkUnderline((e4) => this._handleShowLinkUnderline(e4))), this.register(s3.onHideLinkUnderline((e4) => this._handleHideLinkUnderline(e4)));
          }
          resize(e3, t3) {
            super.resize(e3, t3), this._state = void 0;
          }
          reset(e3) {
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
            if (e3.fg === r.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._themeService.colors.background.css : void 0 !== e3.fg && (0, s2.is256Color)(e3.fg) ? this._ctx.fillStyle = this._themeService.colors.ansi[e3.fg].css : this._ctx.fillStyle = this._themeService.colors.foreground.css, e3.y1 === e3.y2)
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
      }, 820: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.addDisposableDomListener = void 0, t2.addDisposableDomListener = function(e3, t3, i2, s2) {
          e3.addEventListener(t3, i2, s2);
          let r = false;
          return { dispose: () => {
            r || (r = true, e3.removeEventListener(t3, i2, s2));
          } };
        };
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
          const v = r[i3];
          if (v)
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
            }(e3, v, n2, l, c, d), true;
          const f = t2.boxDrawingDefinitions[i3];
          if (f)
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
            }(e3, f, n2, l, c, d, u), true;
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
              const v2 = n4.substring(1).split(",");
              v2[0] && v2[1] && g2(e4, h(v2, r2, o2, i4, s3, false, l2, (null !== (c2 = t3.leftPadding) && void 0 !== c2 ? c2 : 0) * (u2 / 2), (null !== (d2 = t3.rightPadding) && void 0 !== d2 ? d2 : 0) * (u2 / 2)));
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
            const e3 = new v(this._document, this._textureSize);
            return this._pages.push(e3), this._activePages.push(e3), this._onAddTextureAtlasCanvas.fire(e3.canvas), e3;
          }
          _mergePages(e3, t3) {
            const i3 = 2 * e3[0].canvas.width, s3 = new v(this._document, i3, e3);
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
            const d2 = !!this._workAttributeData.isBold(), u2 = !!this._workAttributeData.isInverse(), g2 = !!this._workAttributeData.isDim(), v2 = !!this._workAttributeData.isItalic(), C2 = !!this._workAttributeData.isUnderline(), p = !!this._workAttributeData.isStrikethrough(), m = !!this._workAttributeData.isOverline();
            let x = this._workAttributeData.getFgColor(), L = this._workAttributeData.getFgColorMode(), w = this._workAttributeData.getBgColor(), b = this._workAttributeData.getBgColorMode();
            if (u2) {
              const e4 = x;
              x = w, w = e4;
              const t4 = L;
              L = b, b = t4;
            }
            const M = this._getBackgroundColor(b, w, u2, g2);
            this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = M.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.globalCompositeOperation = "source-over";
            const R = d2 ? this._config.fontWeightBold : this._config.fontWeight, y = v2 ? "italic" : "";
            this._tmpCtx.font = `${y} ${R} ${this._config.fontSize * this._config.devicePixelRatio}px ${this._config.fontFamily}`, this._tmpCtx.textBaseline = s2.TEXT_BASELINE;
            const A = 1 === n2.length && (0, h.isPowerlineGlyph)(n2.charCodeAt(0)), E = 1 === n2.length && (0, h.isRestrictedPowerlineGlyph)(n2.charCodeAt(0)), T = this._getForegroundColor(t3, b, w, i3, L, x, u2, g2, d2, (0, h.excludeFromContrastRatioDemands)(n2.charCodeAt(0)));
            this._tmpCtx.fillStyle = T.css;
            const S = E ? 0 : 4;
            let D = false;
            false !== this._config.customGlyphs && (D = (0, a.tryDrawCustomChar)(this._tmpCtx, n2, S, S, this._config.deviceCellWidth, this._config.deviceCellHeight, this._config.fontSize, this._config.devicePixelRatio));
            let B, P = !A;
            if (B = "number" == typeof e3 ? this._unicodeService.wcwidth(e3) : this._unicodeService.getStringCellWidth(e3), C2) {
              this._tmpCtx.save();
              const e4 = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), t4 = e4 % 2 == 1 ? 0.5 : 0;
              if (this._tmpCtx.lineWidth = e4, this._workAttributeData.isUnderlineColorDefault())
                this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle;
              else if (this._workAttributeData.isUnderlineColorRGB())
                P = false, this._tmpCtx.strokeStyle = `rgb(${o.AttributeData.toColorRGB(this._workAttributeData.getUnderlineColor()).join(",")})`;
              else {
                P = false;
                let e5 = this._workAttributeData.getUnderlineColor();
                this._config.drawBoldTextInBrightColors && this._workAttributeData.isBold() && e5 < 8 && (e5 += 8), this._tmpCtx.strokeStyle = this._getColorFromAnsiIndex(e5).css;
              }
              this._tmpCtx.beginPath();
              const i4 = S, s3 = Math.ceil(S + this._config.deviceCharHeight) - t4, r3 = S + this._config.deviceCharHeight + e4 - t4, a2 = Math.ceil(S + this._config.deviceCharHeight + 2 * e4) - t4;
              for (let o2 = 0; o2 < B; o2++) {
                this._tmpCtx.save();
                const n3 = i4 + o2 * this._config.deviceCellWidth, h2 = i4 + (o2 + 1) * this._config.deviceCellWidth, l3 = n3 + this._config.deviceCellWidth / 2;
                switch (this._workAttributeData.extended.underlineStyle) {
                  case 2:
                    this._tmpCtx.moveTo(n3, s3), this._tmpCtx.lineTo(h2, s3), this._tmpCtx.moveTo(n3, a2), this._tmpCtx.lineTo(h2, a2);
                    break;
                  case 3:
                    const i5 = e4 <= 1 ? a2 : Math.ceil(S + this._config.deviceCharHeight - e4 / 2) - t4, o3 = e4 <= 1 ? s3 : Math.ceil(S + this._config.deviceCharHeight + e4 / 2) - t4, c3 = new Path2D();
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
              if (this._tmpCtx.restore(), !D && this._config.fontSize >= 12 && !this._config.allowTransparency && " " !== n2) {
                this._tmpCtx.save(), this._tmpCtx.textBaseline = "alphabetic";
                const t5 = this._tmpCtx.measureText(n2);
                if (this._tmpCtx.restore(), "actualBoundingBoxDescent" in t5 && t5.actualBoundingBoxDescent > 0) {
                  this._tmpCtx.save();
                  const t6 = new Path2D();
                  t6.rect(i4, s3 - Math.ceil(e4 / 2), this._config.deviceCellWidth * B, a2 - s3 + Math.ceil(e4 / 2)), this._tmpCtx.clip(t6), this._tmpCtx.lineWidth = 3 * this._config.devicePixelRatio, this._tmpCtx.strokeStyle = M.css, this._tmpCtx.strokeText(n2, S, S + this._config.deviceCharHeight), this._tmpCtx.restore();
                }
              }
            }
            if (m) {
              const e4 = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 15)), t4 = e4 % 2 == 1 ? 0.5 : 0;
              this._tmpCtx.lineWidth = e4, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(S, S + t4), this._tmpCtx.lineTo(S + this._config.deviceCharWidth * B, S + t4), this._tmpCtx.stroke();
            }
            if (D || this._tmpCtx.fillText(n2, S, S + this._config.deviceCharHeight), "_" === n2 && !this._config.allowTransparency) {
              let e4 = f(this._tmpCtx.getImageData(S, S, this._config.deviceCellWidth, this._config.deviceCellHeight), M, T, P);
              if (e4)
                for (let t4 = 1; t4 <= 5 && (this._tmpCtx.save(), this._tmpCtx.fillStyle = M.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.restore(), this._tmpCtx.fillText(n2, S, S + this._config.deviceCharHeight - t4), e4 = f(this._tmpCtx.getImageData(S, S, this._config.deviceCellWidth, this._config.deviceCellHeight), M, T, P), e4); t4++)
                  ;
            }
            if (p) {
              const e4 = Math.max(1, Math.floor(this._config.fontSize * this._config.devicePixelRatio / 10)), t4 = this._tmpCtx.lineWidth % 2 == 1 ? 0.5 : 0;
              this._tmpCtx.lineWidth = e4, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), this._tmpCtx.moveTo(S, S + Math.floor(this._config.deviceCharHeight / 2) - t4), this._tmpCtx.lineTo(S + this._config.deviceCharWidth * B, S + Math.floor(this._config.deviceCharHeight / 2) - t4), this._tmpCtx.stroke();
            }
            this._tmpCtx.restore();
            const F = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height);
            let I;
            if (I = this._config.allowTransparency ? function(e4) {
              for (let t4 = 0; t4 < e4.data.length; t4 += 4)
                if (e4.data[t4 + 3] > 0)
                  return false;
              return true;
            }(F) : f(F, M, T, P), I)
              return _;
            const $ = this._findGlyphBoundingBox(F, this._workBoundingBox, l2, E, D, S);
            let k, O;
            for (; ; ) {
              if (0 === this._activePages.length) {
                const e4 = this._createNewPage();
                k = e4, O = e4.currentRow, O.height = $.size.y;
                break;
              }
              k = this._activePages[this._activePages.length - 1], O = k.currentRow;
              for (const e4 of this._activePages)
                $.size.y <= e4.currentRow.height && (k = e4, O = e4.currentRow);
              for (let e4 = this._activePages.length - 1; e4 >= 0; e4--)
                for (const t4 of this._activePages[e4].fixedRows)
                  t4.height <= O.height && $.size.y <= t4.height && (k = this._activePages[e4], O = t4);
              if (O.y + $.size.y >= k.canvas.height || O.height > $.size.y + 2) {
                let e4 = false;
                if (k.currentRow.y + k.currentRow.height + $.size.y >= k.canvas.height) {
                  let t4;
                  for (const e5 of this._activePages)
                    if (e5.currentRow.y + e5.currentRow.height + $.size.y < e5.canvas.height) {
                      t4 = e5;
                      break;
                    }
                  if (t4)
                    k = t4;
                  else {
                    const t5 = this._createNewPage();
                    k = t5, O = t5.currentRow, O.height = $.size.y, e4 = true;
                  }
                }
                e4 || (k.currentRow.height > 0 && k.fixedRows.push(k.currentRow), O = { x: 0, y: k.currentRow.y + k.currentRow.height, height: $.size.y }, k.fixedRows.push(O), k.currentRow = { x: 0, y: O.y + O.height, height: 0 });
              }
              if (O.x + $.size.x <= k.canvas.width)
                break;
              O === k.currentRow ? (O.x = 0, O.y += O.height, O.height = 0) : k.fixedRows.splice(k.fixedRows.indexOf(O), 1);
            }
            return $.texturePage = this._pages.indexOf(k), $.texturePosition.x = O.x, $.texturePosition.y = O.y, $.texturePositionClipSpace.x = O.x / k.canvas.width, $.texturePositionClipSpace.y = O.y / k.canvas.height, $.sizeClipSpace.x /= k.canvas.width, $.sizeClipSpace.y /= k.canvas.height, O.height = Math.max(O.height, $.size.y), O.x += $.size.x, k.ctx.putImageData(F, $.texturePosition.x - this._workBoundingBox.left, $.texturePosition.y - this._workBoundingBox.top, this._workBoundingBox.left, this._workBoundingBox.top, $.size.x, $.size.y), k.addGlyph($), k.version++, $;
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
        class v {
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
        function f(e3, t3, i3, s3) {
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
        Object.defineProperty(e2, "__esModule", { value: true }), e2.WebglAddon = void 0;
        const t2 = i(345), r = i(859), o = i(399), n = i(666);
        class a extends r.Disposable {
          constructor(e3) {
            if (o.isSafari && (0, o.getSafariVersion)() < 16)
              throw new Error("Webgl2 is only supported on Safari 16 and above");
            super(), this._preserveDrawingBuffer = e3, this._onChangeTextureAtlas = this.register(new t2.EventEmitter()), this.onChangeTextureAtlas = this._onChangeTextureAtlas.event, this._onAddTextureAtlasCanvas = this.register(new t2.EventEmitter()), this.onAddTextureAtlasCanvas = this._onAddTextureAtlasCanvas.event, this._onRemoveTextureAtlasCanvas = this.register(new t2.EventEmitter()), this.onRemoveTextureAtlasCanvas = this._onRemoveTextureAtlasCanvas.event, this._onContextLoss = this.register(new t2.EventEmitter()), this.onContextLoss = this._onContextLoss.event;
          }
          activate(e3) {
            const i2 = e3._core;
            if (!e3.element)
              return void this.register(i2.onWillOpen(() => this.activate(e3)));
            this._terminal = e3;
            const s2 = i2.coreService, o2 = i2.optionsService, a2 = i2, h = a2._renderService, l = a2._characterJoinerService, c = a2._charSizeService, d = a2._coreBrowserService, _ = a2._decorationService, u = a2._themeService;
            this._renderer = this.register(new n.WebglRenderer(e3, l, c, d, s2, _, o2, u, this._preserveDrawingBuffer)), this.register((0, t2.forwardEvent)(this._renderer.onContextLoss, this._onContextLoss)), this.register((0, t2.forwardEvent)(this._renderer.onChangeTextureAtlas, this._onChangeTextureAtlas)), this.register((0, t2.forwardEvent)(this._renderer.onAddTextureAtlasCanvas, this._onAddTextureAtlasCanvas)), this.register((0, t2.forwardEvent)(this._renderer.onRemoveTextureAtlasCanvas, this._onRemoveTextureAtlasCanvas)), h.setRenderer(this._renderer), this.register((0, r.toDisposable)(() => {
              const t3 = this._terminal._core._renderService;
              t3.setRenderer(this._terminal._core._createRenderer()), t3.handleResize(e3.cols, e3.rows);
            }));
          }
          get textureAtlas() {
            var e3;
            return null === (e3 = this._renderer) || void 0 === e3 ? void 0 : e3.textureAtlas;
          }
          clearTextureAtlas() {
            var e3;
            null === (e3 = this._renderer) || void 0 === e3 || e3.clearTextureAtlas();
          }
        }
        e2.WebglAddon = a;
      })(), s;
    })());
  })(xtermAddonWebgl$2);
  return xtermAddonWebgl$2.exports;
}
var xtermAddonWebglExports = requireXtermAddonWebgl();
const xtermAddonWebgl = /* @__PURE__ */ getDefaultExportFromCjs(xtermAddonWebglExports);
const xtermAddonWebgl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xtermAddonWebgl
}, [xtermAddonWebglExports]);
export {
  xtermAddonWebgl$1 as x
};
