import { av as Color, cc as editorBackground, gA as editorForeground, e2 as editorSelectionBackground, uE as editorInactiveSelection, fD as editorSelectionHighlight, dG as editorFindMatchHighlight, dH as editorFindMatch, uF as editorHoverHighlight, dI as editorFindRangeHighlight, uG as editorLineHighlight, uH as editorRangeHighlight, uI as editorCursorForeground, uJ as editorWhitespaces, uK as editorIndentGuide1, uL as editorActiveIndentGuide1, Z as Registry, uM as Extensions, e6 as isUndefined, uN as TokenStyle, uO as parseClassifierString, e7 as isObject, gP as SemanticTokenRule, oO as ColorScheme, uP as getThemeTypeSelector, gL as basename, ml as extname, ht as parse$1, c as localize, uQ as getParseErrorMessage, uR as getNodeType, fz as joinPath, b5 as dirname, e9 as isString, gN as isBoolean, uS as getTokenClassificationRegistry, uT as iconsSchemaId, hP as Extensions$1, kd as asCSSUrl, uU as workbenchColorsSchemaId, uV as tokenStylingSchemaId, gr as ExtensionsRegistry, aD as Emitter, gs as isEqualOrParent, _ as Extensions$2, w as isWeb, uW as IconFontDefinition, aK as ThemeIcon, uX as getIconRegistry, uY as Extensions$3, gu as __decorate, gv as __param, uZ as Sequencer, ap as onUnexpectedError, gU as createStyleSheet, u_ as getIconsStyleSheet, j as RunOnceScheduler, qH as getColorRegistry, u$ as asCssVariableName, v0 as getRemoteAuthority, h5 as IExtensionService, aa as IStorageService, ay as IConfigurationService, cu as ITelemetryService, v1 as IBrowserWorkbenchEnvironmentService, he as IFileService, v2 as IExtensionResourceLoaderService, jk as IWorkbenchLayoutService, fM as ILogService, v3 as IHostColorSchemeService, v4 as IUserDataInitializationService, bb as ILanguageService, bB as isEqual, aX as dispose, iQ as getServiceOverride$1, aQ as IThemeService, hh as SyncDescriptor } from "./theme-defaults-1df7f429.js";
import { j as THEME_SCOPE_OPEN_PAREN, k as THEME_SCOPE_CLOSE_PAREN, l as THEME_SCOPE_WILDCARD, m as themeScopeRegex, E as ExtensionData, V as VS_HC_LIGHT_THEME, n as VS_HC_THEME, o as VS_LIGHT_THEME, p as VS_DARK_THEME, q as ThemeSettingDefaults, r as ThemeSettings, s as COLOR_THEME_LIGHT_INITIAL_COLORS, u as COLOR_THEME_DARK_INITIAL_COLORS } from "./index-ca8d23e0.js";
import "./index-3bddf13b.js";
const settingToColorIdMapping = {};
function addSettingMapping(settingId, colorId) {
  let colorIds = settingToColorIdMapping[settingId];
  if (!colorIds) {
    settingToColorIdMapping[settingId] = colorIds = [];
  }
  colorIds.push(colorId);
}
function convertSettings(oldSettings, result) {
  for (const rule of oldSettings) {
    result.textMateRules.push(rule);
    if (!rule.scope) {
      const settings = rule.settings;
      if (!settings) {
        rule.settings = {};
      } else {
        for (const settingKey in settings) {
          const key = settingKey;
          const mappings = settingToColorIdMapping[key];
          if (mappings) {
            const colorHex = settings[key];
            if (typeof colorHex === "string") {
              const color = Color.fromHex(colorHex);
              for (const colorId of mappings) {
                result.colors[colorId] = color;
              }
            }
          }
          if (key !== "foreground" && key !== "background" && key !== "fontStyle") {
            delete settings[key];
          }
        }
      }
    }
  }
}
addSettingMapping("background", editorBackground);
addSettingMapping("foreground", editorForeground);
addSettingMapping("selection", editorSelectionBackground);
addSettingMapping("inactiveSelection", editorInactiveSelection);
addSettingMapping("selectionHighlightColor", editorSelectionHighlight);
addSettingMapping("findMatchHighlight", editorFindMatchHighlight);
addSettingMapping("currentFindMatchHighlight", editorFindMatch);
addSettingMapping("hoverHighlight", editorHoverHighlight);
addSettingMapping("wordHighlight", "editor.wordHighlightBackground");
addSettingMapping("wordHighlightStrong", "editor.wordHighlightStrongBackground");
addSettingMapping("findRangeHighlight", editorFindRangeHighlight);
addSettingMapping("findMatchHighlight", "peekViewResult.matchHighlightBackground");
addSettingMapping("referenceHighlight", "peekViewEditor.matchHighlightBackground");
addSettingMapping("lineHighlight", editorLineHighlight);
addSettingMapping("rangeHighlight", editorRangeHighlight);
addSettingMapping("caret", editorCursorForeground);
addSettingMapping("invisibles", editorWhitespaces);
addSettingMapping("guide", editorIndentGuide1);
addSettingMapping("activeGuide", editorActiveIndentGuide1);
const ansiColorMap = [
  "ansiBlack",
  "ansiRed",
  "ansiGreen",
  "ansiYellow",
  "ansiBlue",
  "ansiMagenta",
  "ansiCyan",
  "ansiWhite",
  "ansiBrightBlack",
  "ansiBrightRed",
  "ansiBrightGreen",
  "ansiBrightYellow",
  "ansiBrightBlue",
  "ansiBrightMagenta",
  "ansiBrightCyan",
  "ansiBrightWhite"
];
for (const color of ansiColorMap) {
  addSettingMapping(color, "terminal." + color);
}
function parse(content) {
  return _parse(content, null, null);
}
function _parse(content, filename, locationKeyName) {
  const len = content.length;
  let pos = 0;
  let line = 1;
  let char = 0;
  if (len > 0 && content.charCodeAt(0) === 65279) {
    pos = 1;
  }
  function advancePosBy(by) {
    if (locationKeyName === null) {
      pos = pos + by;
    } else {
      while (by > 0) {
        const chCode = content.charCodeAt(pos);
        if (chCode === 10) {
          pos++;
          line++;
          char = 0;
        } else {
          pos++;
          char++;
        }
        by--;
      }
    }
  }
  function advancePosTo(to) {
    if (locationKeyName === null) {
      pos = to;
    } else {
      advancePosBy(to - pos);
    }
  }
  function skipWhitespace() {
    while (pos < len) {
      const chCode = content.charCodeAt(pos);
      if (chCode !== 32 && chCode !== 9 && chCode !== 13 && chCode !== 10) {
        break;
      }
      advancePosBy(1);
    }
  }
  function advanceIfStartsWith(str) {
    if (content.substr(pos, str.length) === str) {
      advancePosBy(str.length);
      return true;
    }
    return false;
  }
  function advanceUntil(str) {
    const nextOccurence = content.indexOf(str, pos);
    if (nextOccurence !== -1) {
      advancePosTo(nextOccurence + str.length);
    } else {
      advancePosTo(len);
    }
  }
  function captureUntil(str) {
    const nextOccurence = content.indexOf(str, pos);
    if (nextOccurence !== -1) {
      const r = content.substring(pos, nextOccurence);
      advancePosTo(nextOccurence + str.length);
      return r;
    } else {
      const r = content.substr(pos);
      advancePosTo(len);
      return r;
    }
  }
  let state = 0;
  let cur = null;
  const stateStack = [];
  const objStack = [];
  let curKey = null;
  function pushState(newState, newCur) {
    stateStack.push(state);
    objStack.push(cur);
    state = newState;
    cur = newCur;
  }
  function popState() {
    if (stateStack.length === 0) {
      return fail("illegal state stack");
    }
    state = stateStack.pop();
    cur = objStack.pop();
  }
  function fail(msg) {
    throw new Error("Near offset " + pos + ": " + msg + " ~~~" + content.substr(pos, 50) + "~~~");
  }
  const dictState = {
    enterDict: function() {
      if (curKey === null) {
        return fail("missing <key>");
      }
      const newDict = {};
      if (locationKeyName !== null) {
        newDict[locationKeyName] = {
          filename,
          line,
          char
        };
      }
      cur[curKey] = newDict;
      curKey = null;
      pushState(1, newDict);
    },
    enterArray: function() {
      if (curKey === null) {
        return fail("missing <key>");
      }
      const newArr = [];
      cur[curKey] = newArr;
      curKey = null;
      pushState(2, newArr);
    }
  };
  const arrState = {
    enterDict: function() {
      const newDict = {};
      if (locationKeyName !== null) {
        newDict[locationKeyName] = {
          filename,
          line,
          char
        };
      }
      cur.push(newDict);
      pushState(1, newDict);
    },
    enterArray: function() {
      const newArr = [];
      cur.push(newArr);
      pushState(2, newArr);
    }
  };
  function enterDict() {
    if (state === 1) {
      dictState.enterDict();
    } else if (state === 2) {
      arrState.enterDict();
    } else {
      cur = {};
      if (locationKeyName !== null) {
        cur[locationKeyName] = {
          filename,
          line,
          char
        };
      }
      pushState(1, cur);
    }
  }
  function leaveDict() {
    if (state === 1) {
      popState();
    } else if (state === 2) {
      return fail("unexpected </dict>");
    } else {
      return fail("unexpected </dict>");
    }
  }
  function enterArray() {
    if (state === 1) {
      dictState.enterArray();
    } else if (state === 2) {
      arrState.enterArray();
    } else {
      cur = [];
      pushState(2, cur);
    }
  }
  function leaveArray() {
    if (state === 1) {
      return fail("unexpected </array>");
    } else if (state === 2) {
      popState();
    } else {
      return fail("unexpected </array>");
    }
  }
  function acceptKey(val) {
    if (state === 1) {
      if (curKey !== null) {
        return fail("too many <key>");
      }
      curKey = val;
    } else if (state === 2) {
      return fail("unexpected <key>");
    } else {
      return fail("unexpected <key>");
    }
  }
  function acceptString(val) {
    if (state === 1) {
      if (curKey === null) {
        return fail("missing <key>");
      }
      cur[curKey] = val;
      curKey = null;
    } else if (state === 2) {
      cur.push(val);
    } else {
      cur = val;
    }
  }
  function acceptReal(val) {
    if (isNaN(val)) {
      return fail("cannot parse float");
    }
    if (state === 1) {
      if (curKey === null) {
        return fail("missing <key>");
      }
      cur[curKey] = val;
      curKey = null;
    } else if (state === 2) {
      cur.push(val);
    } else {
      cur = val;
    }
  }
  function acceptInteger(val) {
    if (isNaN(val)) {
      return fail("cannot parse integer");
    }
    if (state === 1) {
      if (curKey === null) {
        return fail("missing <key>");
      }
      cur[curKey] = val;
      curKey = null;
    } else if (state === 2) {
      cur.push(val);
    } else {
      cur = val;
    }
  }
  function acceptDate(val) {
    if (state === 1) {
      if (curKey === null) {
        return fail("missing <key>");
      }
      cur[curKey] = val;
      curKey = null;
    } else if (state === 2) {
      cur.push(val);
    } else {
      cur = val;
    }
  }
  function acceptData(val) {
    if (state === 1) {
      if (curKey === null) {
        return fail("missing <key>");
      }
      cur[curKey] = val;
      curKey = null;
    } else if (state === 2) {
      cur.push(val);
    } else {
      cur = val;
    }
  }
  function acceptBool(val) {
    if (state === 1) {
      if (curKey === null) {
        return fail("missing <key>");
      }
      cur[curKey] = val;
      curKey = null;
    } else if (state === 2) {
      cur.push(val);
    } else {
      cur = val;
    }
  }
  function escapeVal(str) {
    return str.replace(/&#([0-9]+);/g, function(_, m0) {
      return String.fromCodePoint(parseInt(m0, 10));
    }).replace(/&#x([0-9a-f]+);/g, function(_, m0) {
      return String.fromCodePoint(parseInt(m0, 16));
    }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function(_) {
      switch (_) {
        case "&amp;":
          return "&";
        case "&lt;":
          return "<";
        case "&gt;":
          return ">";
        case "&quot;":
          return '"';
        case "&apos;":
          return "'";
      }
      return _;
    });
  }
  function parseOpenTag() {
    let r = captureUntil(">");
    let isClosed = false;
    if (r.charCodeAt(r.length - 1) === 47) {
      isClosed = true;
      r = r.substring(0, r.length - 1);
    }
    return {
      name: r.trim(),
      isClosed
    };
  }
  function parseTagValue(tag) {
    if (tag.isClosed) {
      return "";
    }
    const val = captureUntil("</");
    advanceUntil(">");
    return escapeVal(val);
  }
  while (pos < len) {
    skipWhitespace();
    if (pos >= len) {
      break;
    }
    const chCode = content.charCodeAt(pos);
    advancePosBy(1);
    if (chCode !== 60) {
      return fail("expected <");
    }
    if (pos >= len) {
      return fail("unexpected end of input");
    }
    const peekChCode = content.charCodeAt(pos);
    if (peekChCode === 63) {
      advancePosBy(1);
      advanceUntil("?>");
      continue;
    }
    if (peekChCode === 33) {
      advancePosBy(1);
      if (advanceIfStartsWith("--")) {
        advanceUntil("-->");
        continue;
      }
      advanceUntil(">");
      continue;
    }
    if (peekChCode === 47) {
      advancePosBy(1);
      skipWhitespace();
      if (advanceIfStartsWith("plist")) {
        advanceUntil(">");
        continue;
      }
      if (advanceIfStartsWith("dict")) {
        advanceUntil(">");
        leaveDict();
        continue;
      }
      if (advanceIfStartsWith("array")) {
        advanceUntil(">");
        leaveArray();
        continue;
      }
      return fail("unexpected closed tag");
    }
    const tag = parseOpenTag();
    switch (tag.name) {
      case "dict":
        enterDict();
        if (tag.isClosed) {
          leaveDict();
        }
        continue;
      case "array":
        enterArray();
        if (tag.isClosed) {
          leaveArray();
        }
        continue;
      case "key":
        acceptKey(parseTagValue(tag));
        continue;
      case "string":
        acceptString(parseTagValue(tag));
        continue;
      case "real":
        acceptReal(parseFloat(parseTagValue(tag)));
        continue;
      case "integer":
        acceptInteger(parseInt(parseTagValue(tag), 10));
        continue;
      case "date":
        acceptDate(new Date(parseTagValue(tag)));
        continue;
      case "data":
        acceptData(parseTagValue(tag));
        continue;
      case "true":
        parseTagValue(tag);
        acceptBool(true);
        continue;
      case "false":
        parseTagValue(tag);
        acceptBool(false);
        continue;
    }
    if (/^plist/.test(tag.name)) {
      continue;
    }
    return fail("unexpected opened tag " + tag.name);
  }
  return cur;
}
function createMatchers(selector, matchesName, results) {
  const tokenizer = newTokenizer(selector);
  let token = tokenizer.next();
  while (token !== null) {
    let priority = 0;
    if (token.length === 2 && token.charAt(1) === ":") {
      switch (token.charAt(0)) {
        case "R":
          priority = 1;
          break;
        case "L":
          priority = -1;
          break;
        default:
          console.log(`Unknown priority ${token} in scope selector`);
      }
      token = tokenizer.next();
    }
    const matcher = parseConjunction();
    if (matcher) {
      results.push({ matcher, priority });
    }
    if (token !== ",") {
      break;
    }
    token = tokenizer.next();
  }
  function parseOperand() {
    if (token === "-") {
      token = tokenizer.next();
      const expressionToNegate = parseOperand();
      if (!expressionToNegate) {
        return null;
      }
      return (matcherInput) => {
        const score = expressionToNegate(matcherInput);
        return score < 0 ? 0 : -1;
      };
    }
    if (token === "(") {
      token = tokenizer.next();
      const expressionInParents = parseInnerExpression();
      if (token === ")") {
        token = tokenizer.next();
      }
      return expressionInParents;
    }
    if (isIdentifier(token)) {
      const identifiers = [];
      do {
        identifiers.push(token);
        token = tokenizer.next();
      } while (isIdentifier(token));
      return (matcherInput) => matchesName(identifiers, matcherInput);
    }
    return null;
  }
  function parseConjunction() {
    let matcher = parseOperand();
    if (!matcher) {
      return null;
    }
    const matchers = [];
    while (matcher) {
      matchers.push(matcher);
      matcher = parseOperand();
    }
    return (matcherInput) => {
      let min = matchers[0](matcherInput);
      for (let i = 1; min >= 0 && i < matchers.length; i++) {
        min = Math.min(min, matchers[i](matcherInput));
      }
      return min;
    };
  }
  function parseInnerExpression() {
    let matcher = parseConjunction();
    if (!matcher) {
      return null;
    }
    const matchers = [];
    while (matcher) {
      matchers.push(matcher);
      if (token === "|" || token === ",") {
        do {
          token = tokenizer.next();
        } while (token === "|" || token === ",");
      } else {
        break;
      }
      matcher = parseConjunction();
    }
    return (matcherInput) => {
      let max = matchers[0](matcherInput);
      for (let i = 1; i < matchers.length; i++) {
        max = Math.max(max, matchers[i](matcherInput));
      }
      return max;
    };
  }
}
function isIdentifier(token) {
  return !!token && !!token.match(/[\w\.:]+/);
}
function newTokenizer(input) {
  const regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
  let match = regex.exec(input);
  return {
    next: () => {
      if (!match) {
        return null;
      }
      const res = match[0];
      match = regex.exec(input);
      return res;
    }
  };
}
const colorRegistry = Registry.as(Extensions.ColorContribution);
const tokenClassificationRegistry = getTokenClassificationRegistry();
const tokenGroupToScopesMap = {
  comments: ["comment", "punctuation.definition.comment"],
  strings: ["string", "meta.embedded.assembly"],
  keywords: ["keyword - keyword.operator", "keyword.control", "storage", "storage.type"],
  numbers: ["constant.numeric"],
  types: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
  functions: ["entity.name.function", "support.function"],
  variables: ["variable", "entity.name.variable"]
};
const _ColorThemeData = class _ColorThemeData {
  constructor(id, label, settingsId) {
    this.themeTokenColors = [];
    this.customTokenColors = [];
    this.colorMap = {};
    this.customColorMap = {};
    this.semanticTokenRules = [];
    this.customSemanticTokenRules = [];
    this.textMateThemingRules = void 0;
    this.tokenColorIndex = void 0;
    this.id = id;
    this.label = label;
    this.settingsId = settingsId;
    this.isLoaded = false;
  }
  get semanticHighlighting() {
    if (this.customSemanticHighlighting !== void 0) {
      return this.customSemanticHighlighting;
    }
    if (this.customSemanticHighlightingDeprecated !== void 0) {
      return this.customSemanticHighlightingDeprecated;
    }
    return !!this.themeSemanticHighlighting;
  }
  get tokenColors() {
    if (!this.textMateThemingRules) {
      let addRule = function(rule) {
        if (rule.scope && rule.settings) {
          if (rule.scope === "token.info-token") {
            hasDefaultTokens = true;
          }
          result.push({ scope: rule.scope, settings: { foreground: normalizeColor(rule.settings.foreground), background: normalizeColor(rule.settings.background), fontStyle: rule.settings.fontStyle } });
        }
      };
      const result = [];
      const foreground = this.getColor(editorForeground) || this.getDefault(editorForeground);
      const background = this.getColor(editorBackground) || this.getDefault(editorBackground);
      result.push({
        settings: {
          foreground: normalizeColor(foreground),
          background: normalizeColor(background)
        }
      });
      let hasDefaultTokens = false;
      this.themeTokenColors.forEach(addRule);
      this.customTokenColors.forEach(addRule);
      if (!hasDefaultTokens) {
        defaultThemeColors[this.type].forEach(addRule);
      }
      this.textMateThemingRules = result;
    }
    return this.textMateThemingRules;
  }
  getColor(colorId, useDefault) {
    let color = this.customColorMap[colorId];
    if (color) {
      return color;
    }
    color = this.colorMap[colorId];
    if (useDefault !== false && isUndefined(color)) {
      color = this.getDefault(colorId);
    }
    return color;
  }
  getTokenStyle(type, modifiers, language, useDefault = true, definitions = {}) {
    const result = {
      foreground: void 0,
      bold: void 0,
      underline: void 0,
      strikethrough: void 0,
      italic: void 0
    };
    const score = {
      foreground: -1,
      bold: -1,
      underline: -1,
      strikethrough: -1,
      italic: -1
    };
    function _processStyle(matchScore, style, definition) {
      if (style.foreground && score.foreground <= matchScore) {
        score.foreground = matchScore;
        result.foreground = style.foreground;
        definitions.foreground = definition;
      }
      for (const p of ["bold", "underline", "strikethrough", "italic"]) {
        const property = p;
        const info = style[property];
        if (info !== void 0) {
          if (score[property] <= matchScore) {
            score[property] = matchScore;
            result[property] = info;
            definitions[property] = definition;
          }
        }
      }
    }
    function _processSemanticTokenRule(rule) {
      const matchScore = rule.selector.match(type, modifiers, language);
      if (matchScore >= 0) {
        _processStyle(matchScore, rule.style, rule);
      }
    }
    this.semanticTokenRules.forEach(_processSemanticTokenRule);
    this.customSemanticTokenRules.forEach(_processSemanticTokenRule);
    let hasUndefinedStyleProperty = false;
    for (const k in score) {
      const key = k;
      if (score[key] === -1) {
        hasUndefinedStyleProperty = true;
      } else {
        score[key] = Number.MAX_VALUE;
      }
    }
    if (hasUndefinedStyleProperty) {
      for (const rule of tokenClassificationRegistry.getTokenStylingDefaultRules()) {
        const matchScore = rule.selector.match(type, modifiers, language);
        if (matchScore >= 0) {
          let style;
          if (rule.defaults.scopesToProbe) {
            style = this.resolveScopes(rule.defaults.scopesToProbe);
            if (style) {
              _processStyle(matchScore, style, rule.defaults.scopesToProbe);
            }
          }
          if (!style && useDefault !== false) {
            const tokenStyleValue = rule.defaults[this.type];
            style = this.resolveTokenStyleValue(tokenStyleValue);
            if (style) {
              _processStyle(matchScore, style, tokenStyleValue);
            }
          }
        }
      }
    }
    return TokenStyle.fromData(result);
  }
  resolveTokenStyleValue(tokenStyleValue) {
    if (tokenStyleValue === void 0) {
      return void 0;
    } else if (typeof tokenStyleValue === "string") {
      const { type, modifiers, language } = parseClassifierString(tokenStyleValue, "");
      return this.getTokenStyle(type, modifiers, language);
    } else if (typeof tokenStyleValue === "object") {
      return tokenStyleValue;
    }
    return void 0;
  }
  getTokenColorIndex() {
    if (!this.tokenColorIndex) {
      const index = new TokenColorIndex();
      this.tokenColors.forEach((rule) => {
        index.add(rule.settings.foreground);
        index.add(rule.settings.background);
      });
      this.semanticTokenRules.forEach((r) => index.add(r.style.foreground));
      tokenClassificationRegistry.getTokenStylingDefaultRules().forEach((r) => {
        const defaultColor = r.defaults[this.type];
        if (defaultColor && typeof defaultColor === "object") {
          index.add(defaultColor.foreground);
        }
      });
      this.customSemanticTokenRules.forEach((r) => index.add(r.style.foreground));
      this.tokenColorIndex = index;
    }
    return this.tokenColorIndex;
  }
  get tokenColorMap() {
    return this.getTokenColorIndex().asArray();
  }
  getTokenStyleMetadata(typeWithLanguage, modifiers, defaultLanguage, useDefault = true, definitions = {}) {
    const { type, language } = parseClassifierString(typeWithLanguage, defaultLanguage);
    const style = this.getTokenStyle(type, modifiers, language, useDefault, definitions);
    if (!style) {
      return void 0;
    }
    return {
      foreground: this.getTokenColorIndex().get(style.foreground),
      bold: style.bold,
      underline: style.underline,
      strikethrough: style.strikethrough,
      italic: style.italic
    };
  }
  getTokenStylingRuleScope(rule) {
    if (this.customSemanticTokenRules.indexOf(rule) !== -1) {
      return "setting";
    }
    if (this.semanticTokenRules.indexOf(rule) !== -1) {
      return "theme";
    }
    return void 0;
  }
  getDefault(colorId) {
    return colorRegistry.resolveDefaultColor(colorId, this);
  }
  resolveScopes(scopes, definitions) {
    if (!this.themeTokenScopeMatchers) {
      this.themeTokenScopeMatchers = this.themeTokenColors.map(getScopeMatcher);
    }
    if (!this.customTokenScopeMatchers) {
      this.customTokenScopeMatchers = this.customTokenColors.map(getScopeMatcher);
    }
    for (const scope of scopes) {
      let findTokenStyleForScopeInScopes = function(scopeMatchers, themingRules) {
        for (let i = 0; i < scopeMatchers.length; i++) {
          const score = scopeMatchers[i](scope);
          if (score >= 0) {
            const themingRule = themingRules[i];
            const settings = themingRules[i].settings;
            if (score >= foregroundScore && settings.foreground) {
              foreground = settings.foreground;
              foregroundScore = score;
              foregroundThemingRule = themingRule;
            }
            if (score >= fontStyleScore && isString(settings.fontStyle)) {
              fontStyle = settings.fontStyle;
              fontStyleScore = score;
              fontStyleThemingRule = themingRule;
            }
          }
        }
      };
      let foreground = void 0;
      let fontStyle = void 0;
      let foregroundScore = -1;
      let fontStyleScore = -1;
      let fontStyleThemingRule = void 0;
      let foregroundThemingRule = void 0;
      findTokenStyleForScopeInScopes(this.themeTokenScopeMatchers, this.themeTokenColors);
      findTokenStyleForScopeInScopes(this.customTokenScopeMatchers, this.customTokenColors);
      if (foreground !== void 0 || fontStyle !== void 0) {
        if (definitions) {
          definitions.foreground = foregroundThemingRule;
          definitions.bold = definitions.italic = definitions.underline = definitions.strikethrough = fontStyleThemingRule;
          definitions.scope = scope;
        }
        return TokenStyle.fromSettings(foreground, fontStyle);
      }
    }
    return void 0;
  }
  defines(colorId) {
    return this.customColorMap.hasOwnProperty(colorId) || this.colorMap.hasOwnProperty(colorId);
  }
  setCustomizations(settings) {
    this.setCustomColors(settings.colorCustomizations);
    this.setCustomTokenColors(settings.tokenColorCustomizations);
    this.setCustomSemanticTokenColors(settings.semanticTokenColorCustomizations);
  }
  setCustomColors(colors) {
    this.customColorMap = {};
    this.overwriteCustomColors(colors);
    const themeSpecificColors = this.getThemeSpecificColors(colors);
    if (isObject(themeSpecificColors)) {
      this.overwriteCustomColors(themeSpecificColors);
    }
    this.tokenColorIndex = void 0;
    this.textMateThemingRules = void 0;
    this.customTokenScopeMatchers = void 0;
  }
  overwriteCustomColors(colors) {
    for (const id in colors) {
      const colorVal = colors[id];
      if (typeof colorVal === "string") {
        this.customColorMap[id] = Color.fromHex(colorVal);
      }
    }
  }
  setCustomTokenColors(customTokenColors) {
    this.customTokenColors = [];
    this.customSemanticHighlightingDeprecated = void 0;
    this.addCustomTokenColors(customTokenColors);
    const themeSpecificTokenColors = this.getThemeSpecificColors(customTokenColors);
    if (isObject(themeSpecificTokenColors)) {
      this.addCustomTokenColors(themeSpecificTokenColors);
    }
    this.tokenColorIndex = void 0;
    this.textMateThemingRules = void 0;
    this.customTokenScopeMatchers = void 0;
  }
  setCustomSemanticTokenColors(semanticTokenColors) {
    this.customSemanticTokenRules = [];
    this.customSemanticHighlighting = void 0;
    if (semanticTokenColors) {
      this.customSemanticHighlighting = semanticTokenColors.enabled;
      if (semanticTokenColors.rules) {
        this.readSemanticTokenRules(semanticTokenColors.rules);
      }
      const themeSpecificColors = this.getThemeSpecificColors(semanticTokenColors);
      if (isObject(themeSpecificColors)) {
        if (themeSpecificColors.enabled !== void 0) {
          this.customSemanticHighlighting = themeSpecificColors.enabled;
        }
        if (themeSpecificColors.rules) {
          this.readSemanticTokenRules(themeSpecificColors.rules);
        }
      }
    }
    this.tokenColorIndex = void 0;
    this.textMateThemingRules = void 0;
  }
  isThemeScope(key) {
    return key.charAt(0) === THEME_SCOPE_OPEN_PAREN && key.charAt(key.length - 1) === THEME_SCOPE_CLOSE_PAREN;
  }
  isThemeScopeMatch(themeId) {
    const themeIdFirstChar = themeId.charAt(0);
    const themeIdLastChar = themeId.charAt(themeId.length - 1);
    const themeIdPrefix = themeId.slice(0, -1);
    const themeIdInfix = themeId.slice(1, -1);
    const themeIdSuffix = themeId.slice(1);
    return themeId === this.settingsId || this.settingsId.includes(themeIdInfix) && themeIdFirstChar === THEME_SCOPE_WILDCARD && themeIdLastChar === THEME_SCOPE_WILDCARD || this.settingsId.startsWith(themeIdPrefix) && themeIdLastChar === THEME_SCOPE_WILDCARD || this.settingsId.endsWith(themeIdSuffix) && themeIdFirstChar === THEME_SCOPE_WILDCARD;
  }
  getThemeSpecificColors(colors) {
    let themeSpecificColors;
    for (const key in colors) {
      const scopedColors = colors[key];
      if (this.isThemeScope(key) && scopedColors instanceof Object && !Array.isArray(scopedColors)) {
        const themeScopeList = key.match(themeScopeRegex) || [];
        for (const themeScope of themeScopeList) {
          const themeId = themeScope.substring(1, themeScope.length - 1);
          if (this.isThemeScopeMatch(themeId)) {
            if (!themeSpecificColors) {
              themeSpecificColors = {};
            }
            const scopedThemeSpecificColors = scopedColors;
            for (const subkey in scopedThemeSpecificColors) {
              const originalColors = themeSpecificColors[subkey];
              const overrideColors = scopedThemeSpecificColors[subkey];
              if (Array.isArray(originalColors) && Array.isArray(overrideColors)) {
                themeSpecificColors[subkey] = originalColors.concat(overrideColors);
              } else if (overrideColors) {
                themeSpecificColors[subkey] = overrideColors;
              }
            }
          }
        }
      }
    }
    return themeSpecificColors;
  }
  readSemanticTokenRules(tokenStylingRuleSection) {
    for (const key in tokenStylingRuleSection) {
      if (!this.isThemeScope(key)) {
        try {
          const rule = readSemanticTokenRule(key, tokenStylingRuleSection[key]);
          if (rule) {
            this.customSemanticTokenRules.push(rule);
          }
        } catch (e) {
        }
      }
    }
  }
  addCustomTokenColors(customTokenColors) {
    for (const tokenGroup in tokenGroupToScopesMap) {
      const group = tokenGroup;
      const value = customTokenColors[group];
      if (value) {
        const settings = typeof value === "string" ? { foreground: value } : value;
        const scopes = tokenGroupToScopesMap[group];
        for (const scope of scopes) {
          this.customTokenColors.push({ scope, settings });
        }
      }
    }
    if (Array.isArray(customTokenColors.textMateRules)) {
      for (const rule of customTokenColors.textMateRules) {
        if (rule.scope && rule.settings) {
          this.customTokenColors.push(rule);
        }
      }
    }
    if (customTokenColors.semanticHighlighting !== void 0) {
      this.customSemanticHighlightingDeprecated = customTokenColors.semanticHighlighting;
    }
  }
  ensureLoaded(extensionResourceLoaderService) {
    return !this.isLoaded ? this.load(extensionResourceLoaderService) : Promise.resolve(void 0);
  }
  reload(extensionResourceLoaderService) {
    return this.load(extensionResourceLoaderService);
  }
  load(extensionResourceLoaderService) {
    if (!this.location) {
      return Promise.resolve(void 0);
    }
    this.themeTokenColors = [];
    this.clearCaches();
    const result = {
      colors: {},
      textMateRules: [],
      semanticTokenRules: [],
      semanticHighlighting: false
    };
    return _loadColorTheme(extensionResourceLoaderService, this.location, result).then((_) => {
      this.isLoaded = true;
      this.semanticTokenRules = result.semanticTokenRules;
      this.colorMap = result.colors;
      this.themeTokenColors = result.textMateRules;
      this.themeSemanticHighlighting = result.semanticHighlighting;
    });
  }
  clearCaches() {
    this.tokenColorIndex = void 0;
    this.textMateThemingRules = void 0;
    this.themeTokenScopeMatchers = void 0;
    this.customTokenScopeMatchers = void 0;
  }
  toStorage(storageService) {
    const colorMapData = {};
    for (const key in this.colorMap) {
      colorMapData[key] = Color.Format.CSS.formatHexA(this.colorMap[key], true);
    }
    const value = JSON.stringify({
      id: this.id,
      label: this.label,
      settingsId: this.settingsId,
      themeTokenColors: this.themeTokenColors.map((tc) => ({ settings: tc.settings, scope: tc.scope })),
      semanticTokenRules: this.semanticTokenRules.map(SemanticTokenRule.toJSONObject),
      extensionData: ExtensionData.toJSONObject(this.extensionData),
      themeSemanticHighlighting: this.themeSemanticHighlighting,
      colorMap: colorMapData,
      watch: this.watch
    });
    storageService.store(_ColorThemeData.STORAGE_KEY, value, 0, 0);
  }
  get baseTheme() {
    return this.classNames[0];
  }
  get classNames() {
    return this.id.split(" ");
  }
  get type() {
    switch (this.baseTheme) {
      case VS_LIGHT_THEME:
        return ColorScheme.LIGHT;
      case VS_HC_THEME:
        return ColorScheme.HIGH_CONTRAST_DARK;
      case VS_HC_LIGHT_THEME:
        return ColorScheme.HIGH_CONTRAST_LIGHT;
      default:
        return ColorScheme.DARK;
    }
  }
  static createUnloadedThemeForThemeType(themeType, colorMap) {
    return _ColorThemeData.createUnloadedTheme(getThemeTypeSelector(themeType), colorMap);
  }
  static createUnloadedTheme(id, colorMap) {
    const themeData = new _ColorThemeData(id, "", "__" + id);
    themeData.isLoaded = false;
    themeData.themeTokenColors = [];
    themeData.watch = false;
    if (colorMap) {
      for (const id2 in colorMap) {
        themeData.colorMap[id2] = Color.fromHex(colorMap[id2]);
      }
    }
    return themeData;
  }
  static createLoadedEmptyTheme(id, settingsId) {
    const themeData = new _ColorThemeData(id, "", settingsId);
    themeData.isLoaded = true;
    themeData.themeTokenColors = [];
    themeData.watch = false;
    return themeData;
  }
  static fromStorageData(storageService) {
    const input = storageService.get(_ColorThemeData.STORAGE_KEY, 0);
    if (!input) {
      return void 0;
    }
    try {
      const data = JSON.parse(input);
      const theme = new _ColorThemeData("", "", "");
      for (const key in data) {
        switch (key) {
          case "colorMap": {
            const colorMapData = data[key];
            for (const id in colorMapData) {
              theme.colorMap[id] = Color.fromHex(colorMapData[id]);
            }
            break;
          }
          case "themeTokenColors":
          case "id":
          case "label":
          case "settingsId":
          case "watch":
          case "themeSemanticHighlighting":
            theme[key] = data[key];
            break;
          case "semanticTokenRules": {
            const rulesData = data[key];
            if (Array.isArray(rulesData)) {
              for (const d of rulesData) {
                const rule = SemanticTokenRule.fromJSONObject(tokenClassificationRegistry, d);
                if (rule) {
                  theme.semanticTokenRules.push(rule);
                }
              }
            }
            break;
          }
          case "location":
            break;
          case "extensionData":
            theme.extensionData = ExtensionData.fromJSONObject(data.extensionData);
            break;
        }
      }
      if (!theme.id || !theme.settingsId) {
        return void 0;
      }
      return theme;
    } catch (e) {
      return void 0;
    }
  }
  static fromExtensionTheme(theme, colorThemeLocation, extensionData) {
    const baseTheme = theme["uiTheme"] || "vs-dark";
    const themeSelector = toCSSSelector(extensionData.extensionId, theme.path);
    const id = `${baseTheme} ${themeSelector}`;
    const label = theme.label || basename(theme.path);
    const settingsId = theme.id || label;
    const themeData = new _ColorThemeData(id, label, settingsId);
    themeData.description = theme.description;
    themeData.watch = theme._watch === true;
    themeData.location = colorThemeLocation;
    themeData.extensionData = extensionData;
    themeData.isLoaded = false;
    return themeData;
  }
};
_ColorThemeData.STORAGE_KEY = "colorThemeData";
let ColorThemeData = _ColorThemeData;
function toCSSSelector(extensionId, path) {
  if (path.startsWith("./")) {
    path = path.substr(2);
  }
  let str = `${extensionId}-${path}`;
  str = str.replace(/[^_a-zA-Z0-9-]/g, "-");
  if (str.charAt(0).match(/[0-9-]/)) {
    str = "_" + str;
  }
  return str;
}
async function _loadColorTheme(extensionResourceLoaderService, themeLocation, result) {
  if (extname(themeLocation) === ".json") {
    const content = await extensionResourceLoaderService.readExtensionResource(themeLocation);
    const errors = [];
    const contentValue = parse$1(content, errors);
    if (errors.length > 0) {
      return Promise.reject(new Error(localize(
        "error.cannotparsejson",
        "Problems parsing JSON theme file: {0}",
        errors.map((e) => getParseErrorMessage(e.error)).join(", ")
      )));
    } else if (getNodeType(contentValue) !== "object") {
      return Promise.reject(new Error(localize(
        "error.invalidformat",
        "Invalid format for JSON theme file: Object expected."
      )));
    }
    if (contentValue.include) {
      await _loadColorTheme(extensionResourceLoaderService, joinPath(dirname(themeLocation), contentValue.include), result);
    }
    if (Array.isArray(contentValue.settings)) {
      convertSettings(contentValue.settings, result);
      return null;
    }
    result.semanticHighlighting = result.semanticHighlighting || contentValue.semanticHighlighting;
    const colors = contentValue.colors;
    if (colors) {
      if (typeof colors !== "object") {
        return Promise.reject(new Error(localize(
          { key: "error.invalidformat.colors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
          "Problem parsing color theme file: {0}. Property 'colors' is not of type 'object'.",
          themeLocation.toString()
        )));
      }
      for (const colorId in colors) {
        const colorHex = colors[colorId];
        if (typeof colorHex === "string") {
          result.colors[colorId] = Color.fromHex(colors[colorId]);
        }
      }
    }
    const tokenColors = contentValue.tokenColors;
    if (tokenColors) {
      if (Array.isArray(tokenColors)) {
        result.textMateRules.push(...tokenColors);
      } else if (typeof tokenColors === "string") {
        await _loadSyntaxTokens(extensionResourceLoaderService, joinPath(dirname(themeLocation), tokenColors), result);
      } else {
        return Promise.reject(new Error(localize(
          { key: "error.invalidformat.tokenColors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
          "Problem parsing color theme file: {0}. Property 'tokenColors' should be either an array specifying colors or a path to a TextMate theme file",
          themeLocation.toString()
        )));
      }
    }
    const semanticTokenColors = contentValue.semanticTokenColors;
    if (semanticTokenColors && typeof semanticTokenColors === "object") {
      for (const key in semanticTokenColors) {
        try {
          const rule = readSemanticTokenRule(key, semanticTokenColors[key]);
          if (rule) {
            result.semanticTokenRules.push(rule);
          }
        } catch (e) {
          return Promise.reject(new Error(localize(
            { key: "error.invalidformat.semanticTokenColors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
            "Problem parsing color theme file: {0}. Property 'semanticTokenColors' contains a invalid selector",
            themeLocation.toString()
          )));
        }
      }
    }
  } else {
    return _loadSyntaxTokens(extensionResourceLoaderService, themeLocation, result);
  }
}
function _loadSyntaxTokens(extensionResourceLoaderService, themeLocation, result) {
  return extensionResourceLoaderService.readExtensionResource(themeLocation).then((content) => {
    try {
      const contentValue = parse(content);
      const settings = contentValue.settings;
      if (!Array.isArray(settings)) {
        return Promise.reject(new Error(localize(
          "error.plist.invalidformat",
          "Problem parsing tmTheme file: {0}. 'settings' is not array."
        )));
      }
      convertSettings(settings, result);
      return Promise.resolve(null);
    } catch (e) {
      return Promise.reject(new Error(localize("error.cannotparse", "Problems parsing tmTheme file: {0}", e.message)));
    }
  }, (error) => {
    return Promise.reject(new Error(localize(
      "error.cannotload",
      "Problems loading tmTheme file {0}: {1}",
      themeLocation.toString(),
      error.message
    )));
  });
}
const defaultThemeColors = {
  "light": [
    { scope: "token.info-token", settings: { foreground: "#316bcd" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#cd3131" } },
    { scope: "token.debug-token", settings: { foreground: "#800080" } }
  ],
  "dark": [
    { scope: "token.info-token", settings: { foreground: "#6796e6" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#f44747" } },
    { scope: "token.debug-token", settings: { foreground: "#b267e6" } }
  ],
  "hcLight": [
    { scope: "token.info-token", settings: { foreground: "#316bcd" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#cd3131" } },
    { scope: "token.debug-token", settings: { foreground: "#800080" } }
  ],
  "hcDark": [
    { scope: "token.info-token", settings: { foreground: "#6796e6" } },
    { scope: "token.warn-token", settings: { foreground: "#008000" } },
    { scope: "token.error-token", settings: { foreground: "#FF0000" } },
    { scope: "token.debug-token", settings: { foreground: "#b267e6" } }
  ]
};
const noMatch = (_scope) => -1;
function nameMatcher(identifers, scope) {
  function findInIdents(s, lastIndent) {
    for (let i = lastIndent - 1; i >= 0; i--) {
      if (scopesAreMatching(s, identifers[i])) {
        return i;
      }
    }
    return -1;
  }
  if (scope.length < identifers.length) {
    return -1;
  }
  let lastScopeIndex = scope.length - 1;
  let lastIdentifierIndex = findInIdents(scope[lastScopeIndex--], identifers.length);
  if (lastIdentifierIndex >= 0) {
    const score = (lastIdentifierIndex + 1) * 65536 + identifers[lastIdentifierIndex].length;
    while (lastScopeIndex >= 0) {
      lastIdentifierIndex = findInIdents(scope[lastScopeIndex--], lastIdentifierIndex);
      if (lastIdentifierIndex === -1) {
        return -1;
      }
    }
    return score;
  }
  return -1;
}
function scopesAreMatching(thisScopeName, scopeName) {
  if (!thisScopeName) {
    return false;
  }
  if (thisScopeName === scopeName) {
    return true;
  }
  const len = scopeName.length;
  return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === ".";
}
function getScopeMatcher(rule) {
  const ruleScope = rule.scope;
  if (!ruleScope || !rule.settings) {
    return noMatch;
  }
  const matchers = [];
  if (Array.isArray(ruleScope)) {
    for (const rs of ruleScope) {
      createMatchers(rs, nameMatcher, matchers);
    }
  } else {
    createMatchers(ruleScope, nameMatcher, matchers);
  }
  if (matchers.length === 0) {
    return noMatch;
  }
  return (scope) => {
    let max = matchers[0].matcher(scope);
    for (let i = 1; i < matchers.length; i++) {
      max = Math.max(max, matchers[i].matcher(scope));
    }
    return max;
  };
}
function readSemanticTokenRule(selectorString, settings) {
  const selector = tokenClassificationRegistry.parseTokenSelector(selectorString);
  let style;
  if (typeof settings === "string") {
    style = TokenStyle.fromSettings(settings, void 0);
  } else if (isSemanticTokenColorizationSetting(settings)) {
    style = TokenStyle.fromSettings(settings.foreground, settings.fontStyle, settings.bold, settings.underline, settings.strikethrough, settings.italic);
  }
  if (style) {
    return { selector, style };
  }
  return void 0;
}
function isSemanticTokenColorizationSetting(style) {
  return style && (isString(style.foreground) || isString(style.fontStyle) || isBoolean(style.italic) || isBoolean(style.underline) || isBoolean(style.strikethrough) || isBoolean(style.bold));
}
class TokenColorIndex {
  constructor() {
    this._lastColorId = 0;
    this._id2color = [];
    this._color2id = /* @__PURE__ */ Object.create(null);
  }
  add(color) {
    color = normalizeColor(color);
    if (color === void 0) {
      return 0;
    }
    let value = this._color2id[color];
    if (value) {
      return value;
    }
    value = ++this._lastColorId;
    this._color2id[color] = value;
    this._id2color[value] = color;
    return value;
  }
  get(color) {
    color = normalizeColor(color);
    if (color === void 0) {
      return 0;
    }
    const value = this._color2id[color];
    if (value) {
      return value;
    }
    console.log(`Color ${color} not in index.`);
    return 0;
  }
  asArray() {
    return this._id2color.slice(0);
  }
}
function normalizeColor(color) {
  if (!color) {
    return void 0;
  }
  if (typeof color !== "string") {
    color = Color.Format.CSS.formatHexA(color, true);
  }
  const len = color.length;
  if (color.charCodeAt(0) !== 35 || len !== 4 && len !== 5 && len !== 7 && len !== 9) {
    return void 0;
  }
  const result = [35];
  for (let i = 1; i < len; i++) {
    const upper = hexUpper(color.charCodeAt(i));
    if (!upper) {
      return void 0;
    }
    result.push(upper);
    if (len === 4 || len === 5) {
      result.push(upper);
    }
  }
  if (result.length === 9 && result[7] === 70 && result[8] === 70) {
    result.length = 7;
  }
  return String.fromCharCode(...result);
}
function hexUpper(charCode) {
  if (charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 70) {
    return charCode;
  } else if (charCode >= 97 && charCode <= 102) {
    return charCode - 97 + 65;
  }
  return 0;
}
const fontIdRegex = "^([\\w_-]+)$";
const fontStyleRegex = "^(normal|italic|(oblique[ \\w\\s-]+))$";
const fontWeightRegex = "^(normal|bold|lighter|bolder|(\\d{0-1000}))$";
const fontSizeRegex = "^([\\w .%_-]+)$";
const fontFormatRegex = "^woff|woff2|truetype|opentype|embedded-opentype|svg$";
const schemaId$1 = "vscode://schemas/product-icon-theme";
const schema$1 = {
  type: "object",
  allowComments: true,
  allowTrailingCommas: true,
  properties: {
    fonts: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: localize("schema.id", "The ID of the font."),
            pattern: fontIdRegex,
            patternErrorMessage: localize(
              "schema.id.formatError",
              "The ID must only contain letters, numbers, underscore and minus."
            )
          },
          src: {
            type: "array",
            description: localize("schema.src", "The location of the font."),
            items: {
              type: "object",
              properties: {
                path: {
                  type: "string",
                  description: localize(
                    "schema.font-path",
                    "The font path, relative to the current product icon theme file."
                  )
                },
                format: {
                  type: "string",
                  description: localize("schema.font-format", "The format of the font."),
                  enum: ["woff", "woff2", "truetype", "opentype", "embedded-opentype", "svg"]
                }
              },
              required: [
                "path",
                "format"
              ]
            }
          },
          weight: {
            type: "string",
            description: localize(
              "schema.font-weight",
              "The weight of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight for valid values."
            ),
            anyOf: [
              { enum: ["normal", "bold", "lighter", "bolder"] },
              { type: "string", pattern: fontWeightRegex }
            ]
          },
          style: {
            type: "string",
            description: localize(
              "schema.font-style",
              "The style of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-style for valid values."
            ),
            anyOf: [
              { enum: ["normal", "italic", "oblique"] },
              { type: "string", pattern: fontStyleRegex }
            ]
          }
        },
        required: [
          "id",
          "src"
        ]
      }
    },
    iconDefinitions: {
      description: localize("schema.iconDefinitions", "Association of icon name to a font character."),
      $ref: iconsSchemaId
    }
  }
};
function registerProductIconThemeSchemas() {
  const schemaRegistry = Registry.as(Extensions$1.JSONContribution);
  schemaRegistry.registerSchema(schemaId$1, schema$1);
}
const schemaId = "vscode://schemas/icon-theme";
const schema = {
  type: "object",
  allowComments: true,
  allowTrailingCommas: true,
  definitions: {
    folderExpanded: {
      type: "string",
      description: localize(
        "schema.folderExpanded",
        "The folder icon for expanded folders. The expanded folder icon is optional. If not set, the icon defined for folder will be shown."
      )
    },
    folder: {
      type: "string",
      description: localize(
        "schema.folder",
        "The folder icon for collapsed folders, and if folderExpanded is not set, also for expanded folders."
      )
    },
    file: {
      type: "string",
      description: localize(
        "schema.file",
        "The default file icon, shown for all files that don't match any extension, filename or language id."
      )
    },
    folderNames: {
      type: "object",
      description: localize(
        "schema.folderNames",
        "Associates folder names to icons. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: localize("schema.folderName", "The ID of the icon definition for the association.")
      }
    },
    folderNamesExpanded: {
      type: "object",
      description: localize(
        "schema.folderNamesExpanded",
        "Associates folder names to icons for expanded folders. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: localize(
          "schema.folderNameExpanded",
          "The ID of the icon definition for the association."
        )
      }
    },
    fileExtensions: {
      type: "object",
      description: localize(
        "schema.fileExtensions",
        "Associates file extensions to icons. The object key is the file extension name. The extension name is the last segment of a file name after the last dot (not including the dot). Extensions are compared case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: localize(
          "schema.fileExtension",
          "The ID of the icon definition for the association."
        )
      }
    },
    fileNames: {
      type: "object",
      description: localize(
        "schema.fileNames",
        "Associates file names to icons. The object key is the full file name, but not including any path segments. File name can include dots and a possible file extension. No patterns or wildcards are allowed. File name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: localize("schema.fileName", "The ID of the icon definition for the association.")
      }
    },
    languageIds: {
      type: "object",
      description: localize(
        "schema.languageIds",
        "Associates languages to icons. The object key is the language id as defined in the language contribution point."
      ),
      additionalProperties: {
        type: "string",
        description: localize("schema.languageId", "The ID of the icon definition for the association.")
      }
    },
    associations: {
      type: "object",
      properties: {
        folderExpanded: {
          $ref: "#/definitions/folderExpanded"
        },
        folder: {
          $ref: "#/definitions/folder"
        },
        file: {
          $ref: "#/definitions/file"
        },
        folderNames: {
          $ref: "#/definitions/folderNames"
        },
        folderNamesExpanded: {
          $ref: "#/definitions/folderNamesExpanded"
        },
        fileExtensions: {
          $ref: "#/definitions/fileExtensions"
        },
        fileNames: {
          $ref: "#/definitions/fileNames"
        },
        languageIds: {
          $ref: "#/definitions/languageIds"
        }
      }
    }
  },
  properties: {
    fonts: {
      type: "array",
      description: localize("schema.fonts", "Fonts that are used in the icon definitions."),
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: localize("schema.id", "The ID of the font."),
            pattern: fontIdRegex,
            patternErrorMessage: localize(
              "schema.id.formatError",
              "The ID must only contain letter, numbers, underscore and minus."
            )
          },
          src: {
            type: "array",
            description: localize("schema.src", "The location of the font."),
            items: {
              type: "object",
              properties: {
                path: {
                  type: "string",
                  description: localize(
                    "schema.font-path",
                    "The font path, relative to the current file icon theme file."
                  )
                },
                format: {
                  type: "string",
                  description: localize("schema.font-format", "The format of the font."),
                  enum: ["woff", "woff2", "truetype", "opentype", "embedded-opentype", "svg"]
                }
              },
              required: [
                "path",
                "format"
              ]
            }
          },
          weight: {
            type: "string",
            description: localize(
              "schema.font-weight",
              "The weight of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight for valid values."
            ),
            pattern: fontWeightRegex
          },
          style: {
            type: "string",
            description: localize(
              "schema.font-style",
              "The style of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-style for valid values."
            ),
            pattern: fontStyleRegex
          },
          size: {
            type: "string",
            description: localize(
              "schema.font-size",
              "The default size of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-size for valid values."
            ),
            pattern: fontSizeRegex
          }
        },
        required: [
          "id",
          "src"
        ]
      }
    },
    iconDefinitions: {
      type: "object",
      description: localize(
        "schema.iconDefinitions",
        "Description of all icons that can be used when associating files to icons."
      ),
      additionalProperties: {
        type: "object",
        description: localize(
          "schema.iconDefinition",
          "An icon definition. The object key is the ID of the definition."
        ),
        properties: {
          iconPath: {
            type: "string",
            description: localize(
              "schema.iconPath",
              "When using a SVG or PNG: The path to the image. The path is relative to the icon set file."
            )
          },
          fontCharacter: {
            type: "string",
            description: localize(
              "schema.fontCharacter",
              "When using a glyph font: The character in the font to use."
            )
          },
          fontColor: {
            type: "string",
            format: "color-hex",
            description: localize("schema.fontColor", "When using a glyph font: The color to use.")
          },
          fontSize: {
            type: "string",
            description: localize(
              "schema.fontSize",
              "When using a font: The font size in percentage to the text font. If not set, defaults to the size in the font definition."
            ),
            pattern: fontSizeRegex
          },
          fontId: {
            type: "string",
            description: localize(
              "schema.fontId",
              "When using a font: The id of the font. If not set, defaults to the first font definition."
            )
          }
        }
      }
    },
    folderExpanded: {
      $ref: "#/definitions/folderExpanded"
    },
    folder: {
      $ref: "#/definitions/folder"
    },
    file: {
      $ref: "#/definitions/file"
    },
    folderNames: {
      $ref: "#/definitions/folderNames"
    },
    folderNamesExpanded: {
      $ref: "#/definitions/folderNamesExpanded"
    },
    fileExtensions: {
      $ref: "#/definitions/fileExtensions"
    },
    fileNames: {
      $ref: "#/definitions/fileNames"
    },
    languageIds: {
      $ref: "#/definitions/languageIds"
    },
    light: {
      $ref: "#/definitions/associations",
      description: localize(
        "schema.light",
        "Optional associations for file icons in light color themes."
      )
    },
    highContrast: {
      $ref: "#/definitions/associations",
      description: localize(
        "schema.highContrast",
        "Optional associations for file icons in high contrast color themes."
      )
    },
    hidesExplorerArrows: {
      type: "boolean",
      description: localize(
        "schema.hidesExplorerArrows",
        "Configures whether the file explorer's arrows should be hidden when this theme is active."
      )
    },
    showLanguageModeIcons: {
      type: "boolean",
      description: localize(
        "schema.showLanguageModeIcons",
        "Configures whether the default language icons should be used if the theme does not define an icon for a language."
      )
    }
  }
};
function registerFileIconThemeSchemas() {
  const schemaRegistry = Registry.as(Extensions$1.JSONContribution);
  schemaRegistry.registerSchema(schemaId, schema);
}
const _FileIconThemeData = class _FileIconThemeData {
  constructor(id, label, settingsId) {
    this.id = id;
    this.label = label;
    this.settingsId = settingsId;
    this.isLoaded = false;
    this.hasFileIcons = false;
    this.hasFolderIcons = false;
    this.hidesExplorerArrows = false;
  }
  ensureLoaded(themeLoader) {
    return !this.isLoaded ? this.load(themeLoader) : Promise.resolve(this.styleSheetContent);
  }
  reload(themeLoader) {
    return this.load(themeLoader);
  }
  load(themeLoader) {
    return themeLoader.load(this);
  }
  static fromExtensionTheme(iconTheme, iconThemeLocation, extensionData) {
    const id = extensionData.extensionId + "-" + iconTheme.id;
    const label = iconTheme.label || basename(iconTheme.path);
    const settingsId = iconTheme.id;
    const themeData = new _FileIconThemeData(id, label, settingsId);
    themeData.description = iconTheme.description;
    themeData.location = iconThemeLocation;
    themeData.extensionData = extensionData;
    themeData.watch = iconTheme._watch;
    themeData.isLoaded = false;
    return themeData;
  }
  static get noIconTheme() {
    let themeData = _FileIconThemeData._noIconTheme;
    if (!themeData) {
      themeData = _FileIconThemeData._noIconTheme = new _FileIconThemeData("", "", null);
      themeData.hasFileIcons = false;
      themeData.hasFolderIcons = false;
      themeData.hidesExplorerArrows = false;
      themeData.isLoaded = true;
      themeData.extensionData = void 0;
      themeData.watch = false;
    }
    return themeData;
  }
  static createUnloadedTheme(id) {
    const themeData = new _FileIconThemeData(id, "", "__" + id);
    themeData.isLoaded = false;
    themeData.hasFileIcons = false;
    themeData.hasFolderIcons = false;
    themeData.hidesExplorerArrows = false;
    themeData.extensionData = void 0;
    themeData.watch = false;
    return themeData;
  }
  static fromStorageData(storageService) {
    const input = storageService.get(_FileIconThemeData.STORAGE_KEY, 0);
    if (!input) {
      return void 0;
    }
    try {
      const data = JSON.parse(input);
      const theme = new _FileIconThemeData("", "", null);
      for (const key in data) {
        switch (key) {
          case "id":
          case "label":
          case "description":
          case "settingsId":
          case "styleSheetContent":
          case "hasFileIcons":
          case "hidesExplorerArrows":
          case "hasFolderIcons":
          case "watch":
            theme[key] = data[key];
            break;
          case "location":
            break;
          case "extensionData":
            theme.extensionData = ExtensionData.fromJSONObject(data.extensionData);
            break;
        }
      }
      return theme;
    } catch (e) {
      return void 0;
    }
  }
  toStorage(storageService) {
    const data = JSON.stringify({
      id: this.id,
      label: this.label,
      description: this.description,
      settingsId: this.settingsId,
      styleSheetContent: this.styleSheetContent,
      hasFileIcons: this.hasFileIcons,
      hasFolderIcons: this.hasFolderIcons,
      hidesExplorerArrows: this.hidesExplorerArrows,
      extensionData: ExtensionData.toJSONObject(this.extensionData),
      watch: this.watch
    });
    storageService.store(_FileIconThemeData.STORAGE_KEY, data, 0, 1);
  }
};
_FileIconThemeData.STORAGE_KEY = "iconThemeData";
_FileIconThemeData._noIconTheme = null;
let FileIconThemeData = _FileIconThemeData;
class FileIconThemeLoader {
  constructor(fileService, languageService) {
    this.fileService = fileService;
    this.languageService = languageService;
  }
  load(data) {
    if (!data.location) {
      return Promise.resolve(data.styleSheetContent);
    }
    return this.loadIconThemeDocument(data.location).then((iconThemeDocument) => {
      const result = this.processIconThemeDocument(data.id, data.location, iconThemeDocument);
      data.styleSheetContent = result.content;
      data.hasFileIcons = result.hasFileIcons;
      data.hasFolderIcons = result.hasFolderIcons;
      data.hidesExplorerArrows = result.hidesExplorerArrows;
      data.isLoaded = true;
      return data.styleSheetContent;
    });
  }
  loadIconThemeDocument(location) {
    return this.fileService.readExtensionResource(location).then((content) => {
      const errors = [];
      const contentValue = parse$1(content, errors);
      if (errors.length > 0) {
        return Promise.reject(new Error(localize(
          "error.cannotparseicontheme",
          "Problems parsing file icons file: {0}",
          errors.map((e) => getParseErrorMessage(e.error)).join(", ")
        )));
      } else if (getNodeType(contentValue) !== "object") {
        return Promise.reject(new Error(localize(
          "error.invalidformat",
          "Invalid format for file icons theme file: Object expected."
        )));
      }
      return Promise.resolve(contentValue);
    });
  }
  processIconThemeDocument(id, iconThemeDocumentLocation, iconThemeDocument) {
    const result = { content: "", hasFileIcons: false, hasFolderIcons: false, hidesExplorerArrows: !!iconThemeDocument.hidesExplorerArrows };
    let hasSpecificFileIcons = false;
    if (!iconThemeDocument.iconDefinitions) {
      return result;
    }
    const selectorByDefinitionId = {};
    const coveredLanguages = {};
    const iconThemeDocumentLocationDirname = dirname(iconThemeDocumentLocation);
    function resolvePath(path) {
      return joinPath(iconThemeDocumentLocationDirname, path);
    }
    function collectSelectors(associations, baseThemeClassName) {
      function addSelector(selector, defId) {
        if (defId) {
          let list = selectorByDefinitionId[defId];
          if (!list) {
            list = selectorByDefinitionId[defId] = [];
          }
          list.push(selector);
        }
      }
      if (associations) {
        let qualifier = ".show-file-icons";
        if (baseThemeClassName) {
          qualifier = baseThemeClassName + " " + qualifier;
        }
        const expanded = ".monaco-tl-twistie.collapsible:not(.collapsed) + .monaco-tl-contents";
        if (associations.folder) {
          addSelector(`${qualifier} .folder-icon::before`, associations.folder);
          result.hasFolderIcons = true;
        }
        if (associations.folderExpanded) {
          addSelector(`${qualifier} ${expanded} .folder-icon::before`, associations.folderExpanded);
          result.hasFolderIcons = true;
        }
        const rootFolder = associations.rootFolder || associations.folder;
        const rootFolderExpanded = associations.rootFolderExpanded || associations.folderExpanded;
        if (rootFolder) {
          addSelector(`${qualifier} .rootfolder-icon::before`, rootFolder);
          result.hasFolderIcons = true;
        }
        if (rootFolderExpanded) {
          addSelector(`${qualifier} ${expanded} .rootfolder-icon::before`, rootFolderExpanded);
          result.hasFolderIcons = true;
        }
        if (associations.file) {
          addSelector(`${qualifier} .file-icon::before`, associations.file);
          result.hasFileIcons = true;
        }
        const folderNames = associations.folderNames;
        if (folderNames) {
          for (const key in folderNames) {
            const selectors = [];
            const name = handleParentFolder(key.toLowerCase(), selectors);
            selectors.push(`.${escapeCSS(name)}-name-folder-icon`);
            addSelector(`${qualifier} ${selectors.join("")}.folder-icon::before`, folderNames[key]);
            result.hasFolderIcons = true;
          }
        }
        const folderNamesExpanded = associations.folderNamesExpanded;
        if (folderNamesExpanded) {
          for (const key in folderNamesExpanded) {
            const selectors = [];
            const name = handleParentFolder(key.toLowerCase(), selectors);
            selectors.push(`.${escapeCSS(name)}-name-folder-icon`);
            addSelector(`${qualifier} ${expanded} ${selectors.join("")}.folder-icon::before`, folderNamesExpanded[key]);
            result.hasFolderIcons = true;
          }
        }
        const languageIds = associations.languageIds;
        if (languageIds) {
          if (!languageIds.jsonc && languageIds.json) {
            languageIds.jsonc = languageIds.json;
          }
          for (const languageId in languageIds) {
            addSelector(`${qualifier} .${escapeCSS(languageId)}-lang-file-icon.file-icon::before`, languageIds[languageId]);
            result.hasFileIcons = true;
            hasSpecificFileIcons = true;
            coveredLanguages[languageId] = true;
          }
        }
        const fileExtensions = associations.fileExtensions;
        if (fileExtensions) {
          for (const key in fileExtensions) {
            const selectors = [];
            const name = handleParentFolder(key.toLowerCase(), selectors);
            const segments = name.split(".");
            if (segments.length) {
              for (let i = 0; i < segments.length; i++) {
                selectors.push(`.${escapeCSS(segments.slice(i).join("."))}-ext-file-icon`);
              }
              selectors.push(".ext-file-icon");
            }
            addSelector(`${qualifier} ${selectors.join("")}.file-icon::before`, fileExtensions[key]);
            result.hasFileIcons = true;
            hasSpecificFileIcons = true;
          }
        }
        const fileNames = associations.fileNames;
        if (fileNames) {
          for (const key in fileNames) {
            const selectors = [];
            const fileName = handleParentFolder(key.toLowerCase(), selectors);
            selectors.push(`.${escapeCSS(fileName)}-name-file-icon`);
            selectors.push(".name-file-icon");
            const segments = fileName.split(".");
            if (segments.length) {
              for (let i = 1; i < segments.length; i++) {
                selectors.push(`.${escapeCSS(segments.slice(i).join("."))}-ext-file-icon`);
              }
              selectors.push(".ext-file-icon");
            }
            addSelector(`${qualifier} ${selectors.join("")}.file-icon::before`, fileNames[key]);
            result.hasFileIcons = true;
            hasSpecificFileIcons = true;
          }
        }
      }
    }
    collectSelectors(iconThemeDocument);
    collectSelectors(iconThemeDocument.light, ".vs");
    collectSelectors(iconThemeDocument.highContrast, ".hc-black");
    collectSelectors(iconThemeDocument.highContrast, ".hc-light");
    if (!result.hasFileIcons && !result.hasFolderIcons) {
      return result;
    }
    const showLanguageModeIcons = iconThemeDocument.showLanguageModeIcons === true || hasSpecificFileIcons && iconThemeDocument.showLanguageModeIcons !== false;
    const cssRules = [];
    const fonts = iconThemeDocument.fonts;
    const fontSizes = /* @__PURE__ */ new Map();
    if (Array.isArray(fonts)) {
      const defaultFontSize = fonts[0].size || "150%";
      fonts.forEach((font) => {
        const src = font.src.map((l) => `${asCSSUrl(resolvePath(l.path))} format('${l.format}')`).join(", ");
        cssRules.push(`@font-face { src: ${src}; font-family: '${font.id}'; font-weight: ${font.weight}; font-style: ${font.style}; font-display: block; }`);
        if (font.size !== void 0 && font.size !== defaultFontSize) {
          fontSizes.set(font.id, font.size);
        }
      });
      cssRules.push(`.show-file-icons .file-icon::before, .show-file-icons .folder-icon::before, .show-file-icons .rootfolder-icon::before { font-family: '${fonts[0].id}'; font-size: ${defaultFontSize}; }`);
    }
    for (const defId in selectorByDefinitionId) {
      const selectors = selectorByDefinitionId[defId];
      const definition = iconThemeDocument.iconDefinitions[defId];
      if (definition) {
        if (definition.iconPath) {
          cssRules.push(`${selectors.join(", ")} { content: ' '; background-image: ${asCSSUrl(resolvePath(definition.iconPath))}; }`);
        } else if (definition.fontCharacter || definition.fontColor) {
          const body = [];
          if (definition.fontColor) {
            body.push(`color: ${definition.fontColor};`);
          }
          if (definition.fontCharacter) {
            body.push(`content: '${definition.fontCharacter}';`);
          }
          const fontSize = definition.fontSize ?? (definition.fontId ? fontSizes.get(definition.fontId) : void 0);
          if (fontSize) {
            body.push(`font-size: ${fontSize};`);
          }
          if (definition.fontId) {
            body.push(`font-family: ${definition.fontId};`);
          }
          if (showLanguageModeIcons) {
            body.push(`background-image: unset;`);
          }
          cssRules.push(`${selectors.join(", ")} { ${body.join(" ")} }`);
        }
      }
    }
    if (showLanguageModeIcons) {
      for (const languageId of this.languageService.getRegisteredLanguageIds()) {
        if (!coveredLanguages[languageId]) {
          const icon = this.languageService.getIcon(languageId);
          if (icon) {
            const selector = `.show-file-icons .${escapeCSS(languageId)}-lang-file-icon.file-icon::before`;
            cssRules.push(`${selector} { content: ' '; background-image: ${asCSSUrl(icon.dark)}; }`);
            cssRules.push(`.vs ${selector} { content: ' '; background-image: ${asCSSUrl(icon.light)}; }`);
          }
        }
      }
    }
    result.content = cssRules.join("\n");
    return result;
  }
}
function handleParentFolder(key, selectors) {
  const lastIndexOfSlash = key.lastIndexOf("/");
  if (lastIndexOfSlash >= 0) {
    const parentFolder = key.substring(0, lastIndexOfSlash);
    selectors.push(`.${escapeCSS(parentFolder)}-name-dir-icon`);
    return key.substring(lastIndexOfSlash + 1);
  }
  return key;
}
function escapeCSS(str) {
  str = str.replace(/[\11\12\14\15\40]/g, "/");
  return window.CSS.escape(str);
}
const textMateScopes = [
  "comment",
  "comment.block",
  "comment.block.documentation",
  "comment.line",
  "constant",
  "constant.character",
  "constant.character.escape",
  "constant.numeric",
  "constant.numeric.integer",
  "constant.numeric.float",
  "constant.numeric.hex",
  "constant.numeric.octal",
  "constant.other",
  "constant.regexp",
  "constant.rgb-value",
  "emphasis",
  "entity",
  "entity.name",
  "entity.name.class",
  "entity.name.function",
  "entity.name.method",
  "entity.name.section",
  "entity.name.selector",
  "entity.name.tag",
  "entity.name.type",
  "entity.other",
  "entity.other.attribute-name",
  "entity.other.inherited-class",
  "invalid",
  "invalid.deprecated",
  "invalid.illegal",
  "keyword",
  "keyword.control",
  "keyword.operator",
  "keyword.operator.new",
  "keyword.operator.assignment",
  "keyword.operator.arithmetic",
  "keyword.operator.logical",
  "keyword.other",
  "markup",
  "markup.bold",
  "markup.changed",
  "markup.deleted",
  "markup.heading",
  "markup.inline.raw",
  "markup.inserted",
  "markup.italic",
  "markup.list",
  "markup.list.numbered",
  "markup.list.unnumbered",
  "markup.other",
  "markup.quote",
  "markup.raw",
  "markup.underline",
  "markup.underline.link",
  "meta",
  "meta.block",
  "meta.cast",
  "meta.class",
  "meta.function",
  "meta.function-call",
  "meta.preprocessor",
  "meta.return-type",
  "meta.selector",
  "meta.tag",
  "meta.type.annotation",
  "meta.type",
  "punctuation.definition.string.begin",
  "punctuation.definition.string.end",
  "punctuation.separator",
  "punctuation.separator.continuation",
  "punctuation.terminator",
  "storage",
  "storage.modifier",
  "storage.type",
  "string",
  "string.interpolated",
  "string.other",
  "string.quoted",
  "string.quoted.double",
  "string.quoted.other",
  "string.quoted.single",
  "string.quoted.triple",
  "string.regexp",
  "string.unquoted",
  "strong",
  "support",
  "support.class",
  "support.constant",
  "support.function",
  "support.other",
  "support.type",
  "support.type.property-name",
  "support.variable",
  "variable",
  "variable.language",
  "variable.name",
  "variable.other",
  "variable.other.readwrite",
  "variable.parameter"
];
const textmateColorsSchemaId = "vscode://schemas/textmate-colors";
const textmateColorGroupSchemaId = `${textmateColorsSchemaId}#/definitions/colorGroup`;
const textmateColorSchema = {
  type: "array",
  definitions: {
    colorGroup: {
      default: "#FF0000",
      anyOf: [
        {
          type: "string",
          format: "color-hex"
        },
        {
          $ref: "#/definitions/settings"
        }
      ]
    },
    settings: {
      type: "object",
      description: localize("schema.token.settings", "Colors and styles for the token."),
      properties: {
        foreground: {
          type: "string",
          description: localize("schema.token.foreground", "Foreground color for the token."),
          format: "color-hex",
          default: "#ff0000"
        },
        background: {
          type: "string",
          deprecationMessage: localize(
            "schema.token.background.warning",
            "Token background colors are currently not supported."
          )
        },
        fontStyle: {
          type: "string",
          description: localize(
            "schema.token.fontStyle",
            "Font style of the rule: 'italic', 'bold', 'underline', 'strikethrough' or a combination. The empty string unsets inherited settings."
          ),
          pattern: "^(\\s*\\b(italic|bold|underline|strikethrough))*\\s*$",
          patternErrorMessage: localize(
            "schema.fontStyle.error",
            "Font style must be 'italic', 'bold', 'underline', 'strikethrough' or a combination or the empty string."
          ),
          defaultSnippets: [
            { label: localize("schema.token.fontStyle.none", "None (clear inherited style)"), bodyText: '""' },
            { body: "italic" },
            { body: "bold" },
            { body: "underline" },
            { body: "strikethrough" },
            { body: "italic bold" },
            { body: "italic underline" },
            { body: "italic strikethrough" },
            { body: "bold underline" },
            { body: "bold strikethrough" },
            { body: "underline strikethrough" },
            { body: "italic bold underline" },
            { body: "italic bold strikethrough" },
            { body: "italic underline strikethrough" },
            { body: "bold underline strikethrough" },
            { body: "italic bold underline strikethrough" }
          ]
        }
      },
      additionalProperties: false,
      defaultSnippets: [{ body: { foreground: "${1:#FF0000}", fontStyle: "${2:bold}" } }]
    }
  },
  items: {
    type: "object",
    defaultSnippets: [{ body: { scope: "${1:keyword.operator}", settings: { foreground: "${2:#FF0000}" } } }],
    properties: {
      name: {
        type: "string",
        description: localize("schema.properties.name", "Description of the rule.")
      },
      scope: {
        description: localize(
          "schema.properties.scope",
          "Scope selector against which this rule matches."
        ),
        anyOf: [
          {
            enum: textMateScopes
          },
          {
            type: "string"
          },
          {
            type: "array",
            items: {
              enum: textMateScopes
            }
          },
          {
            type: "array",
            items: {
              type: "string"
            }
          }
        ]
      },
      settings: {
        $ref: "#/definitions/settings"
      }
    },
    required: [
      "settings"
    ],
    additionalProperties: false
  }
};
const colorThemeSchemaId = "vscode://schemas/color-theme";
const colorThemeSchema = {
  type: "object",
  allowComments: true,
  allowTrailingCommas: true,
  properties: {
    colors: {
      description: localize("schema.workbenchColors", "Colors in the workbench"),
      $ref: workbenchColorsSchemaId,
      additionalProperties: false
    },
    tokenColors: {
      anyOf: [
        {
          type: "string",
          description: localize(
            "schema.tokenColors.path",
            "Path to a tmTheme file (relative to the current file)."
          )
        },
        {
          description: localize("schema.colors", "Colors for syntax highlighting"),
          $ref: textmateColorsSchemaId
        }
      ]
    },
    semanticHighlighting: {
      type: "boolean",
      description: localize(
        "schema.supportsSemanticHighlighting",
        "Whether semantic highlighting should be enabled for this theme."
      )
    },
    semanticTokenColors: {
      type: "object",
      description: localize("schema.semanticTokenColors", "Colors for semantic tokens"),
      $ref: tokenStylingSchemaId
    }
  }
};
function registerColorThemeSchemas() {
  const schemaRegistry = Registry.as(Extensions$1.JSONContribution);
  schemaRegistry.registerSchema(colorThemeSchemaId, colorThemeSchema);
  schemaRegistry.registerSchema(textmateColorsSchemaId, textmateColorSchema);
}
function registerColorThemeExtensionPoint() {
  return ExtensionsRegistry.registerExtensionPoint({
    extensionPoint: "themes",
    jsonSchema: {
      description: localize(
        "vscode.extension.contributes.themes",
        "Contributes textmate color themes."
      ),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { label: "${1:label}", id: "${2:id}", uiTheme: VS_DARK_THEME, path: "./themes/${3:id}.tmTheme." } }],
        properties: {
          id: {
            description: localize(
              "vscode.extension.contributes.themes.id",
              "Id of the color theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: localize(
              "vscode.extension.contributes.themes.label",
              "Label of the color theme as shown in the UI."
            ),
            type: "string"
          },
          uiTheme: {
            description: localize(
              "vscode.extension.contributes.themes.uiTheme",
              "Base theme defining the colors around the editor: 'vs' is the light color theme, 'vs-dark' is the dark color theme. 'hc-black' is the dark high contrast theme, 'hc-light' is the light high contrast theme."
            ),
            enum: [VS_LIGHT_THEME, VS_DARK_THEME, VS_HC_THEME, VS_HC_LIGHT_THEME]
          },
          path: {
            description: localize(
              "vscode.extension.contributes.themes.path",
              "Path of the tmTheme file. The path is relative to the extension folder and is typically './colorthemes/awesome-color-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "uiTheme"]
      }
    }
  });
}
function registerFileIconThemeExtensionPoint() {
  return ExtensionsRegistry.registerExtensionPoint({
    extensionPoint: "iconThemes",
    jsonSchema: {
      description: localize("vscode.extension.contributes.iconThemes", "Contributes file icon themes."),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { id: "${1:id}", label: "${2:label}", path: "./fileicons/${3:id}-icon-theme.json" } }],
        properties: {
          id: {
            description: localize(
              "vscode.extension.contributes.iconThemes.id",
              "Id of the file icon theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: localize(
              "vscode.extension.contributes.iconThemes.label",
              "Label of the file icon theme as shown in the UI."
            ),
            type: "string"
          },
          path: {
            description: localize(
              "vscode.extension.contributes.iconThemes.path",
              "Path of the file icon theme definition file. The path is relative to the extension folder and is typically './fileicons/awesome-icon-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "id"]
      }
    }
  });
}
function registerProductIconThemeExtensionPoint() {
  return ExtensionsRegistry.registerExtensionPoint({
    extensionPoint: "productIconThemes",
    jsonSchema: {
      description: localize(
        "vscode.extension.contributes.productIconThemes",
        "Contributes product icon themes."
      ),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { id: "${1:id}", label: "${2:label}", path: "./producticons/${3:id}-product-icon-theme.json" } }],
        properties: {
          id: {
            description: localize(
              "vscode.extension.contributes.productIconThemes.id",
              "Id of the product icon theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: localize(
              "vscode.extension.contributes.productIconThemes.label",
              "Label of the product icon theme as shown in the UI."
            ),
            type: "string"
          },
          path: {
            description: localize(
              "vscode.extension.contributes.productIconThemes.path",
              "Path of the product icon theme definition file. The path is relative to the extension folder and is typically './producticons/awesome-product-icon-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "id"]
      }
    }
  });
}
class ThemeRegistry {
  constructor(themesExtPoint, create, idRequired = false, builtInTheme = void 0) {
    this.themesExtPoint = themesExtPoint;
    this.create = create;
    this.idRequired = idRequired;
    this.builtInTheme = builtInTheme;
    this.onDidChangeEmitter = new Emitter();
    this.onDidChange = this.onDidChangeEmitter.event;
    this.extensionThemes = [];
    this.initialize();
  }
  initialize() {
    this.themesExtPoint.setHandler((extensions, delta) => {
      const previousIds = {};
      const added = [];
      for (const theme of this.extensionThemes) {
        previousIds[theme.id] = theme;
      }
      this.extensionThemes.length = 0;
      for (const ext of extensions) {
        const extensionData = ExtensionData.fromName(ext.description.publisher, ext.description.name, ext.description.isBuiltin);
        this.onThemes(extensionData, ext.description.extensionLocation, ext.value, this.extensionThemes, ext.collector);
      }
      for (const theme of this.extensionThemes) {
        if (!previousIds[theme.id]) {
          added.push(theme);
        } else {
          delete previousIds[theme.id];
        }
      }
      const removed = Object.values(previousIds);
      this.onDidChangeEmitter.fire({ themes: this.extensionThemes, added, removed });
    });
  }
  onThemes(extensionData, extensionLocation, themeContributions, resultingThemes = [], log) {
    if (!Array.isArray(themeContributions)) {
      log == null ? void 0 : log.error(localize(
        "reqarray",
        "Extension point `{0}` must be an array.",
        this.themesExtPoint.name
      ));
      return resultingThemes;
    }
    themeContributions.forEach((theme) => {
      if (!theme.path || !isString(theme.path)) {
        log == null ? void 0 : log.error(localize(
          "reqpath",
          "Expected string in `contributes.{0}.path`. Provided value: {1}",
          this.themesExtPoint.name,
          String(theme.path)
        ));
        return;
      }
      if (this.idRequired && (!theme.id || !isString(theme.id))) {
        log == null ? void 0 : log.error(localize(
          "reqid",
          "Expected string in `contributes.{0}.id`. Provided value: {1}",
          this.themesExtPoint.name,
          String(theme.id)
        ));
        return;
      }
      const themeLocation = joinPath(extensionLocation, theme.path);
      if (!isEqualOrParent(themeLocation, extensionLocation)) {
        log == null ? void 0 : log.warn(localize(
          "invalid.path.1",
          "Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
          this.themesExtPoint.name,
          themeLocation.path,
          extensionLocation.path
        ));
      }
      const themeData = this.create(theme, themeLocation, extensionData);
      resultingThemes.push(themeData);
    });
    return resultingThemes;
  }
  findThemeById(themeId) {
    if (this.builtInTheme && this.builtInTheme.id === themeId) {
      return this.builtInTheme;
    }
    const allThemes = this.getThemes();
    for (const t of allThemes) {
      if (t.id === themeId) {
        return t;
      }
    }
    return void 0;
  }
  findThemeBySettingsId(settingsId, defaultSettingsId) {
    if (this.builtInTheme && this.builtInTheme.settingsId === settingsId) {
      return this.builtInTheme;
    }
    const allThemes = this.getThemes();
    let defaultTheme = void 0;
    for (const t of allThemes) {
      if (t.settingsId === settingsId) {
        return t;
      }
      if (t.settingsId === defaultSettingsId) {
        defaultTheme = t;
      }
    }
    return defaultTheme;
  }
  findThemeByExtensionLocation(extLocation) {
    if (extLocation) {
      return this.getThemes().filter((t) => t.location && isEqualOrParent(t.location, extLocation));
    }
    return [];
  }
  getThemes() {
    return this.extensionThemes;
  }
  getMarketplaceThemes(manifest, extensionLocation, extensionData) {
    var _a;
    const themes = (_a = manifest == null ? void 0 : manifest.contributes) == null ? void 0 : _a[this.themesExtPoint.name];
    if (Array.isArray(themes)) {
      return this.onThemes(extensionData, extensionLocation, themes);
    }
    return [];
  }
}
const configurationRegistry = Registry.as(Extensions$2.Configuration);
const colorThemeSettingEnum = [];
const colorThemeSettingEnumItemLabels = [];
const colorThemeSettingEnumDescriptions = [];
function formatSettingAsLink(str) {
  return `\`#${str}#\``;
}
const colorThemeSettingSchema = {
  type: "string",
  description: localize("colorTheme", "Specifies the color theme used in the workbench."),
  default: isWeb ? ThemeSettingDefaults.COLOR_THEME_LIGHT : ThemeSettingDefaults.COLOR_THEME_DARK,
  enum: colorThemeSettingEnum,
  enumDescriptions: colorThemeSettingEnumDescriptions,
  enumItemLabels: colorThemeSettingEnumItemLabels,
  errorMessage: localize("colorThemeError", "Theme is unknown or not installed.")
};
const preferredDarkThemeSettingSchema = {
  type: "string",
  markdownDescription: localize(
    { key: "preferredDarkColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme for dark OS appearance when {0} is enabled.",
    formatSettingAsLink(ThemeSettings.DETECT_COLOR_SCHEME)
  ),
  default: ThemeSettingDefaults.COLOR_THEME_DARK,
  enum: colorThemeSettingEnum,
  enumDescriptions: colorThemeSettingEnumDescriptions,
  enumItemLabels: colorThemeSettingEnumItemLabels,
  errorMessage: localize("colorThemeError", "Theme is unknown or not installed.")
};
const preferredLightThemeSettingSchema = {
  type: "string",
  markdownDescription: localize(
    { key: "preferredLightColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme for light OS appearance when {0} is enabled.",
    formatSettingAsLink(ThemeSettings.DETECT_COLOR_SCHEME)
  ),
  default: ThemeSettingDefaults.COLOR_THEME_LIGHT,
  enum: colorThemeSettingEnum,
  enumDescriptions: colorThemeSettingEnumDescriptions,
  enumItemLabels: colorThemeSettingEnumItemLabels,
  errorMessage: localize("colorThemeError", "Theme is unknown or not installed.")
};
const preferredHCDarkThemeSettingSchema = {
  type: "string",
  markdownDescription: localize(
    { key: "preferredHCDarkColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme used in high contrast dark mode when {0} is enabled.",
    formatSettingAsLink(ThemeSettings.DETECT_HC)
  ),
  default: ThemeSettingDefaults.COLOR_THEME_HC_DARK,
  enum: colorThemeSettingEnum,
  enumDescriptions: colorThemeSettingEnumDescriptions,
  enumItemLabels: colorThemeSettingEnumItemLabels,
  errorMessage: localize("colorThemeError", "Theme is unknown or not installed.")
};
const preferredHCLightThemeSettingSchema = {
  type: "string",
  markdownDescription: localize(
    { key: "preferredHCLightColorTheme", comment: ["{0} will become a link to another setting."] },
    "Specifies the preferred color theme used in high contrast light mode when {0} is enabled.",
    formatSettingAsLink(ThemeSettings.DETECT_HC)
  ),
  default: ThemeSettingDefaults.COLOR_THEME_HC_LIGHT,
  enum: colorThemeSettingEnum,
  enumDescriptions: colorThemeSettingEnumDescriptions,
  enumItemLabels: colorThemeSettingEnumItemLabels,
  errorMessage: localize("colorThemeError", "Theme is unknown or not installed.")
};
const detectColorSchemeSettingSchema = {
  type: "boolean",
  markdownDescription: localize(
    { key: "detectColorScheme", comment: ["{0} and {1} will become links to other settings."] },
    "If set, automatically switch to the preferred color theme based on the OS appearance. If the OS appearance is dark, the theme specified at {0} is used, for light {1}.",
    formatSettingAsLink(ThemeSettings.PREFERRED_DARK_THEME),
    formatSettingAsLink(ThemeSettings.PREFERRED_LIGHT_THEME)
  ),
  default: false
};
const colorCustomizationsSchema = {
  type: "object",
  description: localize(
    "workbenchColors",
    "Overrides colors from the currently selected color theme."
  ),
  allOf: [{ $ref: workbenchColorsSchemaId }],
  default: {},
  defaultSnippets: [{
    body: {}
  }]
};
const fileIconThemeSettingSchema = {
  type: ["string", "null"],
  default: ThemeSettingDefaults.FILE_ICON_THEME,
  description: localize(
    "iconTheme",
    "Specifies the file icon theme used in the workbench or 'null' to not show any file icons."
  ),
  enum: [null],
  enumItemLabels: [localize("noIconThemeLabel", "None")],
  enumDescriptions: [localize("noIconThemeDesc", "No file icons")],
  errorMessage: localize("iconThemeError", "File icon theme is unknown or not installed.")
};
const productIconThemeSettingSchema = {
  type: ["string", "null"],
  default: ThemeSettingDefaults.PRODUCT_ICON_THEME,
  description: localize("productIconTheme", "Specifies the product icon theme used."),
  enum: [ThemeSettingDefaults.PRODUCT_ICON_THEME],
  enumItemLabels: [localize("defaultProductIconThemeLabel", "Default")],
  enumDescriptions: [localize("defaultProductIconThemeDesc", "Default")],
  errorMessage: localize("productIconThemeError", "Product icon theme is unknown or not installed.")
};
const detectHCSchemeSettingSchema = {
  type: "boolean",
  default: true,
  markdownDescription: localize(
    { key: "autoDetectHighContrast", comment: ["{0} and {1} will become links to other settings."] },
    "If enabled, will automatically change to high contrast theme if the OS is using a high contrast theme. The high contrast theme to use is specified by {0} and {1}",
    formatSettingAsLink(ThemeSettings.PREFERRED_HC_DARK_THEME),
    formatSettingAsLink(ThemeSettings.PREFERRED_HC_LIGHT_THEME)
  ),
  scope: 1
};
const themeSettingsConfiguration = {
  id: "workbench",
  order: 7.1,
  type: "object",
  properties: {
    [ThemeSettings.COLOR_THEME]: colorThemeSettingSchema,
    [ThemeSettings.PREFERRED_DARK_THEME]: preferredDarkThemeSettingSchema,
    [ThemeSettings.PREFERRED_LIGHT_THEME]: preferredLightThemeSettingSchema,
    [ThemeSettings.PREFERRED_HC_DARK_THEME]: preferredHCDarkThemeSettingSchema,
    [ThemeSettings.PREFERRED_HC_LIGHT_THEME]: preferredHCLightThemeSettingSchema,
    [ThemeSettings.FILE_ICON_THEME]: fileIconThemeSettingSchema,
    [ThemeSettings.COLOR_CUSTOMIZATIONS]: colorCustomizationsSchema,
    [ThemeSettings.PRODUCT_ICON_THEME]: productIconThemeSettingSchema
  }
};
configurationRegistry.registerConfiguration(themeSettingsConfiguration);
const themeSettingsWindowConfiguration = {
  id: "window",
  order: 8.1,
  type: "object",
  properties: {
    [ThemeSettings.DETECT_HC]: detectHCSchemeSettingSchema,
    [ThemeSettings.DETECT_COLOR_SCHEME]: detectColorSchemeSettingSchema
  }
};
configurationRegistry.registerConfiguration(themeSettingsWindowConfiguration);
function tokenGroupSettings(description) {
  return {
    description,
    $ref: textmateColorGroupSchemaId
  };
}
const themeSpecificSettingKey = "^\\[[^\\]]*(\\]\\s*\\[[^\\]]*)*\\]$";
const tokenColorSchema = {
  type: "object",
  properties: {
    comments: tokenGroupSettings(localize("editorColors.comments", "Sets the colors and styles for comments")),
    strings: tokenGroupSettings(localize("editorColors.strings", "Sets the colors and styles for strings literals.")),
    keywords: tokenGroupSettings(localize("editorColors.keywords", "Sets the colors and styles for keywords.")),
    numbers: tokenGroupSettings(localize("editorColors.numbers", "Sets the colors and styles for number literals.")),
    types: tokenGroupSettings(localize(
      "editorColors.types",
      "Sets the colors and styles for type declarations and references."
    )),
    functions: tokenGroupSettings(localize(
      "editorColors.functions",
      "Sets the colors and styles for functions declarations and references."
    )),
    variables: tokenGroupSettings(localize(
      "editorColors.variables",
      "Sets the colors and styles for variables declarations and references."
    )),
    textMateRules: {
      description: localize(
        "editorColors.textMateRules",
        "Sets colors and styles using textmate theming rules (advanced)."
      ),
      $ref: textmateColorsSchemaId
    },
    semanticHighlighting: {
      description: localize(
        "editorColors.semanticHighlighting",
        "Whether semantic highlighting should be enabled for this theme."
      ),
      deprecationMessage: localize(
        "editorColors.semanticHighlighting.deprecationMessage",
        "Use `enabled` in `editor.semanticTokenColorCustomizations` setting instead."
      ),
      markdownDeprecationMessage: localize(
        { key: "editorColors.semanticHighlighting.deprecationMessageMarkdown", comment: ["{0} will become a link to another setting."] },
        "Use `enabled` in {0} setting instead.",
        formatSettingAsLink("editor.semanticTokenColorCustomizations")
      ),
      type: "boolean"
    }
  },
  additionalProperties: false
};
const tokenColorCustomizationSchema = {
  description: localize(
    "editorColors",
    "Overrides editor syntax colors and font style from the currently selected color theme."
  ),
  default: {},
  allOf: [{ ...tokenColorSchema, patternProperties: { "^\\[": {} } }]
};
const semanticTokenColorSchema = {
  type: "object",
  properties: {
    enabled: {
      type: "boolean",
      description: localize(
        "editorColors.semanticHighlighting.enabled",
        "Whether semantic highlighting is enabled or disabled for this theme"
      ),
      suggestSortText: "0_enabled"
    },
    rules: {
      $ref: tokenStylingSchemaId,
      description: localize(
        "editorColors.semanticHighlighting.rules",
        "Semantic token styling rules for this theme."
      ),
      suggestSortText: "0_rules"
    }
  },
  additionalProperties: false
};
const semanticTokenColorCustomizationSchema = {
  description: localize(
    "semanticTokenColors",
    "Overrides editor semantic token color and styles from the currently selected color theme."
  ),
  default: {},
  allOf: [{ ...semanticTokenColorSchema, patternProperties: { "^\\[": {} } }]
};
const tokenColorCustomizationConfiguration = {
  id: "editor",
  order: 7.2,
  type: "object",
  properties: {
    [ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS]: tokenColorCustomizationSchema,
    [ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS]: semanticTokenColorCustomizationSchema
  }
};
configurationRegistry.registerConfiguration(tokenColorCustomizationConfiguration);
function updateColorThemeConfigurationSchemas(themes) {
  themes.sort((a, b) => a.label.localeCompare(b.label));
  colorThemeSettingEnum.splice(0, colorThemeSettingEnum.length, ...themes.map((t) => t.settingsId));
  colorThemeSettingEnumDescriptions.splice(0, colorThemeSettingEnumDescriptions.length, ...themes.map((t) => t.description || ""));
  colorThemeSettingEnumItemLabels.splice(0, colorThemeSettingEnumItemLabels.length, ...themes.map((t) => t.label || ""));
  const themeSpecificWorkbenchColors = { properties: {} };
  const themeSpecificTokenColors = { properties: {} };
  const themeSpecificSemanticTokenColors = { properties: {} };
  const workbenchColors = { $ref: workbenchColorsSchemaId, additionalProperties: false };
  const tokenColors = { properties: tokenColorSchema.properties, additionalProperties: false };
  for (const t of themes) {
    const themeId = `[${t.settingsId}]`;
    themeSpecificWorkbenchColors.properties[themeId] = workbenchColors;
    themeSpecificTokenColors.properties[themeId] = tokenColors;
    themeSpecificSemanticTokenColors.properties[themeId] = semanticTokenColorSchema;
  }
  themeSpecificWorkbenchColors.patternProperties = { [themeSpecificSettingKey]: workbenchColors };
  themeSpecificTokenColors.patternProperties = { [themeSpecificSettingKey]: tokenColors };
  themeSpecificSemanticTokenColors.patternProperties = { [themeSpecificSettingKey]: semanticTokenColorSchema };
  colorCustomizationsSchema.allOf[1] = themeSpecificWorkbenchColors;
  tokenColorCustomizationSchema.allOf[1] = themeSpecificTokenColors;
  semanticTokenColorCustomizationSchema.allOf[1] = themeSpecificSemanticTokenColors;
  configurationRegistry.notifyConfigurationSchemaUpdated(themeSettingsConfiguration, tokenColorCustomizationConfiguration);
}
function updateFileIconThemeConfigurationSchemas(themes) {
  fileIconThemeSettingSchema.enum.splice(1, Number.MAX_VALUE, ...themes.map((t) => t.settingsId));
  fileIconThemeSettingSchema.enumItemLabels.splice(1, Number.MAX_VALUE, ...themes.map((t) => t.label));
  fileIconThemeSettingSchema.enumDescriptions.splice(1, Number.MAX_VALUE, ...themes.map((t) => t.description || ""));
  configurationRegistry.notifyConfigurationSchemaUpdated(themeSettingsConfiguration);
}
function updateProductIconThemeConfigurationSchemas(themes) {
  productIconThemeSettingSchema.enum.splice(1, Number.MAX_VALUE, ...themes.map((t) => t.settingsId));
  productIconThemeSettingSchema.enumItemLabels.splice(1, Number.MAX_VALUE, ...themes.map((t) => t.label));
  productIconThemeSettingSchema.enumDescriptions.splice(1, Number.MAX_VALUE, ...themes.map((t) => t.description || ""));
  configurationRegistry.notifyConfigurationSchemaUpdated(themeSettingsConfiguration);
}
class ThemeConfiguration {
  constructor(configurationService) {
    this.configurationService = configurationService;
  }
  get colorTheme() {
    return this.configurationService.getValue(ThemeSettings.COLOR_THEME);
  }
  get fileIconTheme() {
    return this.configurationService.getValue(ThemeSettings.FILE_ICON_THEME);
  }
  get productIconTheme() {
    return this.configurationService.getValue(ThemeSettings.PRODUCT_ICON_THEME);
  }
  get colorCustomizations() {
    return this.configurationService.getValue(ThemeSettings.COLOR_CUSTOMIZATIONS) || {};
  }
  get tokenColorCustomizations() {
    return this.configurationService.getValue(ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS) || {};
  }
  get semanticTokenColorCustomizations() {
    return this.configurationService.getValue(ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS);
  }
  async setColorTheme(theme, settingsTarget) {
    await this.writeConfiguration(ThemeSettings.COLOR_THEME, theme.settingsId, settingsTarget);
    return theme;
  }
  async setFileIconTheme(theme, settingsTarget) {
    await this.writeConfiguration(ThemeSettings.FILE_ICON_THEME, theme.settingsId, settingsTarget);
    return theme;
  }
  async setProductIconTheme(theme, settingsTarget) {
    await this.writeConfiguration(ThemeSettings.PRODUCT_ICON_THEME, theme.settingsId, settingsTarget);
    return theme;
  }
  isDefaultColorTheme() {
    var _a;
    const settings = this.configurationService.inspect(ThemeSettings.COLOR_THEME);
    return settings && ((_a = settings.default) == null ? void 0 : _a.value) === settings.value;
  }
  findAutoConfigurationTarget(key) {
    const settings = this.configurationService.inspect(key);
    if (!isUndefined(settings.workspaceFolderValue)) {
      return 6;
    } else if (!isUndefined(settings.workspaceValue)) {
      return 5;
    } else if (!isUndefined(settings.userRemote)) {
      return 4;
    }
    return 2;
  }
  async writeConfiguration(key, value, settingsTarget) {
    if (settingsTarget === void 0 || settingsTarget === "preview") {
      return;
    }
    const settings = this.configurationService.inspect(key);
    if (settingsTarget === "auto") {
      return this.configurationService.updateValue(key, value);
    }
    if (settingsTarget === 2) {
      if (value === settings.userValue) {
        return Promise.resolve(void 0);
      } else if (value === settings.defaultValue) {
        if (isUndefined(settings.userValue)) {
          return Promise.resolve(void 0);
        }
        value = void 0;
      }
    } else if (settingsTarget === 5 || settingsTarget === 6 || settingsTarget === 4) {
      if (value === settings.value) {
        return Promise.resolve(void 0);
      }
    }
    return this.configurationService.updateValue(key, value, settingsTarget);
  }
}
const DEFAULT_PRODUCT_ICON_THEME_ID = "";
const _ProductIconThemeData = class _ProductIconThemeData {
  constructor(id, label, settingsId) {
    this.iconThemeDocument = { iconDefinitions: /* @__PURE__ */ new Map() };
    this.id = id;
    this.label = label;
    this.settingsId = settingsId;
    this.isLoaded = false;
  }
  getIcon(iconContribution) {
    return _resolveIconDefinition(iconContribution, this.iconThemeDocument);
  }
  ensureLoaded(fileService, logService) {
    return !this.isLoaded ? this.load(fileService, logService) : Promise.resolve(this.styleSheetContent);
  }
  reload(fileService, logService) {
    return this.load(fileService, logService);
  }
  async load(fileService, logService) {
    const location = this.location;
    if (!location) {
      return Promise.resolve(this.styleSheetContent);
    }
    const warnings = [];
    this.iconThemeDocument = await _loadProductIconThemeDocument(fileService, location, warnings);
    this.isLoaded = true;
    if (warnings.length) {
      logService.error(localize(
        "error.parseicondefs",
        "Problems processing product icons definitions in {0}:\n{1}",
        location.toString(),
        warnings.join("\n")
      ));
    }
    return this.styleSheetContent;
  }
  static fromExtensionTheme(iconTheme, iconThemeLocation, extensionData) {
    const id = extensionData.extensionId + "-" + iconTheme.id;
    const label = iconTheme.label || basename(iconTheme.path);
    const settingsId = iconTheme.id;
    const themeData = new _ProductIconThemeData(id, label, settingsId);
    themeData.description = iconTheme.description;
    themeData.location = iconThemeLocation;
    themeData.extensionData = extensionData;
    themeData.watch = iconTheme._watch;
    themeData.isLoaded = false;
    return themeData;
  }
  static createUnloadedTheme(id) {
    const themeData = new _ProductIconThemeData(id, "", "__" + id);
    themeData.isLoaded = false;
    themeData.extensionData = void 0;
    themeData.watch = false;
    return themeData;
  }
  static get defaultTheme() {
    let themeData = _ProductIconThemeData._defaultProductIconTheme;
    if (!themeData) {
      themeData = _ProductIconThemeData._defaultProductIconTheme = new _ProductIconThemeData(DEFAULT_PRODUCT_ICON_THEME_ID, localize("defaultTheme", "Default"), ThemeSettingDefaults.PRODUCT_ICON_THEME);
      themeData.isLoaded = true;
      themeData.extensionData = void 0;
      themeData.watch = false;
    }
    return themeData;
  }
  static fromStorageData(storageService) {
    const input = storageService.get(_ProductIconThemeData.STORAGE_KEY, 0);
    if (!input) {
      return void 0;
    }
    try {
      const data = JSON.parse(input);
      const theme = new _ProductIconThemeData("", "", "");
      for (const key in data) {
        switch (key) {
          case "id":
          case "label":
          case "description":
          case "settingsId":
          case "styleSheetContent":
          case "watch":
            theme[key] = data[key];
            break;
          case "location":
            break;
          case "extensionData":
            theme.extensionData = ExtensionData.fromJSONObject(data.extensionData);
            break;
        }
      }
      const { iconDefinitions, iconFontDefinitions } = data;
      if (Array.isArray(iconDefinitions) && isObject(iconFontDefinitions)) {
        const restoredIconDefinitions = /* @__PURE__ */ new Map();
        for (const entry of iconDefinitions) {
          const { id, fontCharacter, fontId } = entry;
          if (isString(id) && isString(fontCharacter)) {
            if (isString(fontId)) {
              const iconFontDefinition = IconFontDefinition.fromJSONObject(iconFontDefinitions[fontId]);
              if (iconFontDefinition) {
                restoredIconDefinitions.set(id, { fontCharacter, font: { id: fontId, definition: iconFontDefinition } });
              }
            } else {
              restoredIconDefinitions.set(id, { fontCharacter });
            }
          }
        }
        theme.iconThemeDocument = { iconDefinitions: restoredIconDefinitions };
      }
      return theme;
    } catch (e) {
      return void 0;
    }
  }
  toStorage(storageService) {
    const iconDefinitions = [];
    const iconFontDefinitions = {};
    for (const entry of this.iconThemeDocument.iconDefinitions.entries()) {
      const font = entry[1].font;
      iconDefinitions.push({ id: entry[0], fontCharacter: entry[1].fontCharacter, fontId: font == null ? void 0 : font.id });
      if (font && iconFontDefinitions[font.id] === void 0) {
        iconFontDefinitions[font.id] = IconFontDefinition.toJSONObject(font.definition);
      }
    }
    const data = JSON.stringify({
      id: this.id,
      label: this.label,
      description: this.description,
      settingsId: this.settingsId,
      styleSheetContent: this.styleSheetContent,
      watch: this.watch,
      extensionData: ExtensionData.toJSONObject(this.extensionData),
      iconDefinitions,
      iconFontDefinitions
    });
    storageService.store(_ProductIconThemeData.STORAGE_KEY, data, 0, 1);
  }
};
_ProductIconThemeData.STORAGE_KEY = "productIconThemeData";
_ProductIconThemeData._defaultProductIconTheme = null;
let ProductIconThemeData = _ProductIconThemeData;
function _loadProductIconThemeDocument(fileService, location, warnings) {
  return fileService.readExtensionResource(location).then((content) => {
    const parseErrors = [];
    const contentValue = parse$1(content, parseErrors);
    if (parseErrors.length > 0) {
      return Promise.reject(new Error(localize(
        "error.cannotparseicontheme",
        "Problems parsing product icons file: {0}",
        parseErrors.map((e) => getParseErrorMessage(e.error)).join(", ")
      )));
    } else if (getNodeType(contentValue) !== "object") {
      return Promise.reject(new Error(localize(
        "error.invalidformat",
        "Invalid format for product icons theme file: Object expected."
      )));
    } else if (!contentValue.iconDefinitions || !Array.isArray(contentValue.fonts) || !contentValue.fonts.length) {
      return Promise.reject(new Error(localize(
        "error.missingProperties",
        "Invalid format for product icons theme file: Must contain iconDefinitions and fonts."
      )));
    }
    const iconThemeDocumentLocationDirname = dirname(location);
    const sanitizedFonts = /* @__PURE__ */ new Map();
    for (const font of contentValue.fonts) {
      if (isString(font.id) && font.id.match(fontIdRegex)) {
        const fontId = font.id;
        let fontWeight = void 0;
        if (isString(font.weight) && font.weight.match(fontWeightRegex)) {
          fontWeight = font.weight;
        } else {
          warnings.push(localize(
            "error.fontWeight",
            "Invalid font weight in font '{0}'. Ignoring setting.",
            font.id
          ));
        }
        let fontStyle = void 0;
        if (isString(font.style) && font.style.match(fontStyleRegex)) {
          fontStyle = font.style;
        } else {
          warnings.push(localize(
            "error.fontStyle",
            "Invalid font style in font '{0}'. Ignoring setting.",
            font.id
          ));
        }
        const sanitizedSrc = [];
        if (Array.isArray(font.src)) {
          for (const s of font.src) {
            if (isString(s.path) && isString(s.format) && s.format.match(fontFormatRegex)) {
              const iconFontLocation = joinPath(iconThemeDocumentLocationDirname, s.path);
              sanitizedSrc.push({ location: iconFontLocation, format: s.format });
            } else {
              warnings.push(localize(
                "error.fontSrc",
                "Invalid font source in font '{0}'. Ignoring source.",
                font.id
              ));
            }
          }
        }
        if (sanitizedSrc.length) {
          sanitizedFonts.set(fontId, { weight: fontWeight, style: fontStyle, src: sanitizedSrc });
        } else {
          warnings.push(localize(
            "error.noFontSrc",
            "No valid font source in font '{0}'. Ignoring font definition.",
            font.id
          ));
        }
      } else {
        warnings.push(localize(
          "error.fontId",
          "Missing or invalid font id '{0}'. Skipping font definition.",
          font.id
        ));
      }
    }
    const iconDefinitions = /* @__PURE__ */ new Map();
    const primaryFontId = contentValue.fonts[0].id;
    for (const iconId in contentValue.iconDefinitions) {
      const definition = contentValue.iconDefinitions[iconId];
      if (isString(definition.fontCharacter)) {
        const fontId = definition.fontId ?? primaryFontId;
        const fontDefinition = sanitizedFonts.get(fontId);
        if (fontDefinition) {
          const font = { id: `pi-${fontId}`, definition: fontDefinition };
          iconDefinitions.set(iconId, { fontCharacter: definition.fontCharacter, font });
        } else {
          warnings.push(localize(
            "error.icon.font",
            "Skipping icon definition '{0}'. Unknown font.",
            iconId
          ));
        }
      } else {
        warnings.push(localize(
          "error.icon.fontCharacter",
          "Skipping icon definition '{0}'. Unknown fontCharacter.",
          iconId
        ));
      }
    }
    return { iconDefinitions };
  });
}
const iconRegistry = getIconRegistry();
function _resolveIconDefinition(iconContribution, iconThemeDocument) {
  const iconDefinitions = iconThemeDocument.iconDefinitions;
  let definition = iconDefinitions.get(iconContribution.id);
  let defaults = iconContribution.defaults;
  while (!definition && ThemeIcon.isThemeIcon(defaults)) {
    const ic = iconRegistry.getIcon(defaults.id);
    if (ic) {
      definition = iconDefinitions.get(ic.id);
      defaults = ic.defaults;
    } else {
      return void 0;
    }
  }
  if (definition) {
    return definition;
  }
  if (!ThemeIcon.isThemeIcon(defaults)) {
    return defaults;
  }
  return void 0;
}
const PERSISTED_OS_COLOR_SCHEME = "osColorScheme";
const PERSISTED_OS_COLOR_SCHEME_SCOPE = -1;
const defaultThemeExtensionId = "vscode-theme-defaults";
const DEFAULT_FILE_ICON_THEME_ID = "vscode.vscode-theme-seti-vs-seti";
const fileIconsEnabledClass = "file-icons-enabled";
const colorThemeRulesClassName = "contributedColorTheme";
const fileIconThemeRulesClassName = "contributedFileIconTheme";
const productIconThemeRulesClassName = "contributedProductIconTheme";
const themingRegistry = Registry.as(Extensions$3.ThemingContribution);
function validateThemeId(theme) {
  switch (theme) {
    case VS_LIGHT_THEME:
      return `vs ${defaultThemeExtensionId}-themes-light_vs-json`;
    case VS_DARK_THEME:
      return `vs-dark ${defaultThemeExtensionId}-themes-dark_vs-json`;
    case VS_HC_THEME:
      return `hc-black ${defaultThemeExtensionId}-themes-hc_black-json`;
    case VS_HC_LIGHT_THEME:
      return `hc-light ${defaultThemeExtensionId}-themes-hc_light-json`;
  }
  return theme;
}
const colorThemesExtPoint = registerColorThemeExtensionPoint();
const fileIconThemesExtPoint = registerFileIconThemeExtensionPoint();
const productIconThemesExtPoint = registerProductIconThemeExtensionPoint();
let WorkbenchThemeService = class WorkbenchThemeService2 {
  constructor(extensionService, storageService, configurationService, telemetryService, environmentService, fileService, extensionResourceLoaderService, layoutService, logService, hostColorService, userDataInitializationService, languageService) {
    var _a;
    this.storageService = storageService;
    this.configurationService = configurationService;
    this.telemetryService = telemetryService;
    this.environmentService = environmentService;
    this.extensionResourceLoaderService = extensionResourceLoaderService;
    this.logService = logService;
    this.hostColorService = hostColorService;
    this.hasDefaultUpdated = false;
    this.themeExtensionsActivated = /* @__PURE__ */ new Map();
    this.container = layoutService.container;
    this.settings = new ThemeConfiguration(configurationService);
    this.colorThemeRegistry = new ThemeRegistry(colorThemesExtPoint, ColorThemeData.fromExtensionTheme);
    this.colorThemeWatcher = new ThemeFileWatcher(fileService, environmentService, this.reloadCurrentColorTheme.bind(this));
    this.onColorThemeChange = new Emitter({ leakWarningThreshold: 400 });
    this.currentColorTheme = ColorThemeData.createUnloadedTheme("");
    this.colorThemeSequencer = new Sequencer();
    this.fileIconThemeWatcher = new ThemeFileWatcher(
      fileService,
      environmentService,
      this.reloadCurrentFileIconTheme.bind(this)
    );
    this.fileIconThemeRegistry = new ThemeRegistry(
      fileIconThemesExtPoint,
      FileIconThemeData.fromExtensionTheme,
      true,
      FileIconThemeData.noIconTheme
    );
    this.fileIconThemeLoader = new FileIconThemeLoader(extensionResourceLoaderService, languageService);
    this.onFileIconThemeChange = new Emitter({ leakWarningThreshold: 400 });
    this.currentFileIconTheme = FileIconThemeData.createUnloadedTheme("");
    this.fileIconThemeSequencer = new Sequencer();
    this.productIconThemeWatcher = new ThemeFileWatcher(
      fileService,
      environmentService,
      this.reloadCurrentProductIconTheme.bind(this)
    );
    this.productIconThemeRegistry = new ThemeRegistry(
      productIconThemesExtPoint,
      ProductIconThemeData.fromExtensionTheme,
      true,
      ProductIconThemeData.defaultTheme
    );
    this.onProductIconThemeChange = new Emitter();
    this.currentProductIconTheme = ProductIconThemeData.createUnloadedTheme("");
    this.productIconThemeSequencer = new Sequencer();
    let themeData = ColorThemeData.fromStorageData(this.storageService);
    const colorThemeSetting = this.settings.colorTheme;
    if (themeData && colorThemeSetting !== themeData.settingsId && this.settings.isDefaultColorTheme()) {
      this.hasDefaultUpdated = themeData.settingsId === ThemeSettingDefaults.COLOR_THEME_DARK_OLD || themeData.settingsId === ThemeSettingDefaults.COLOR_THEME_LIGHT_OLD;
      themeData = void 0;
    }
    const preferredColorScheme = this.getPreferredColorScheme();
    const defaultColorMap = colorThemeSetting === ThemeSettingDefaults.COLOR_THEME_LIGHT ? COLOR_THEME_LIGHT_INITIAL_COLORS : colorThemeSetting === ThemeSettingDefaults.COLOR_THEME_DARK ? COLOR_THEME_DARK_INITIAL_COLORS : void 0;
    if (preferredColorScheme && (themeData == null ? void 0 : themeData.type) !== preferredColorScheme && this.storageService.get(PERSISTED_OS_COLOR_SCHEME, PERSISTED_OS_COLOR_SCHEME_SCOPE) !== preferredColorScheme) {
      themeData = ColorThemeData.createUnloadedThemeForThemeType(preferredColorScheme, void 0);
    }
    if (!themeData) {
      const initialColorTheme = (_a = environmentService.options) == null ? void 0 : _a.initialColorTheme;
      if (initialColorTheme) {
        themeData = ColorThemeData.createUnloadedThemeForThemeType(initialColorTheme.themeType, initialColorTheme.colors ?? defaultColorMap);
      }
    }
    if (!themeData) {
      themeData = ColorThemeData.createUnloadedThemeForThemeType(isWeb ? ColorScheme.LIGHT : ColorScheme.DARK, defaultColorMap);
    }
    themeData.setCustomizations(this.settings);
    this.applyTheme(themeData, void 0, true);
    const fileIconData = FileIconThemeData.fromStorageData(this.storageService);
    if (fileIconData) {
      this.applyAndSetFileIconTheme(fileIconData, true);
    }
    const productIconData = ProductIconThemeData.fromStorageData(this.storageService);
    if (productIconData) {
      this.applyAndSetProductIconTheme(productIconData, true);
    }
    Promise.all([extensionService.whenInstalledExtensionsRegistered(), userDataInitializationService.whenInitializationFinished()]).then((_) => {
      this.installConfigurationListener();
      this.installPreferredSchemeListener();
      this.installRegistryListeners();
      this.initialize().catch(onUnexpectedError);
    });
    const codiconStyleSheet = createStyleSheet();
    codiconStyleSheet.id = "codiconStyles";
    const iconsStyleSheet = getIconsStyleSheet(this);
    function updateAll() {
      codiconStyleSheet.textContent = iconsStyleSheet.getCSS();
    }
    const delayer = new RunOnceScheduler(updateAll, 0);
    iconsStyleSheet.onDidChange(() => delayer.schedule());
    delayer.schedule();
  }
  initialize() {
    const extDevLocs = this.environmentService.extensionDevelopmentLocationURI;
    const extDevLoc = extDevLocs && extDevLocs.length === 1 ? extDevLocs[0] : void 0;
    const initializeColorTheme = async () => {
      const devThemes = this.colorThemeRegistry.findThemeByExtensionLocation(extDevLoc);
      if (devThemes.length) {
        return this.setColorTheme(devThemes[0].id, 8);
      }
      const fallbackTheme = this.currentColorTheme.type === ColorScheme.LIGHT ? ThemeSettingDefaults.COLOR_THEME_LIGHT : ThemeSettingDefaults.COLOR_THEME_DARK;
      const theme = this.colorThemeRegistry.findThemeBySettingsId(this.settings.colorTheme, fallbackTheme);
      const preferredColorScheme = this.getPreferredColorScheme();
      const prevScheme = this.storageService.get(PERSISTED_OS_COLOR_SCHEME, PERSISTED_OS_COLOR_SCHEME_SCOPE);
      if (preferredColorScheme !== prevScheme) {
        this.storageService.store(PERSISTED_OS_COLOR_SCHEME, preferredColorScheme, PERSISTED_OS_COLOR_SCHEME_SCOPE, 0);
        if (preferredColorScheme && (theme == null ? void 0 : theme.type) !== preferredColorScheme) {
          return this.applyPreferredColorTheme(preferredColorScheme);
        }
      }
      return this.setColorTheme(theme && theme.id, void 0);
    };
    const initializeFileIconTheme = async () => {
      const devThemes = this.fileIconThemeRegistry.findThemeByExtensionLocation(extDevLoc);
      if (devThemes.length) {
        return this.setFileIconTheme(devThemes[0].id, 8);
      }
      const theme = this.fileIconThemeRegistry.findThemeBySettingsId(this.settings.fileIconTheme);
      return this.setFileIconTheme(theme ? theme.id : DEFAULT_FILE_ICON_THEME_ID, void 0);
    };
    const initializeProductIconTheme = async () => {
      const devThemes = this.productIconThemeRegistry.findThemeByExtensionLocation(extDevLoc);
      if (devThemes.length) {
        return this.setProductIconTheme(devThemes[0].id, 8);
      }
      const theme = this.productIconThemeRegistry.findThemeBySettingsId(this.settings.productIconTheme);
      return this.setProductIconTheme(theme ? theme.id : DEFAULT_PRODUCT_ICON_THEME_ID, void 0);
    };
    return Promise.all([initializeColorTheme(), initializeFileIconTheme(), initializeProductIconTheme()]);
  }
  installConfigurationListener() {
    this.configurationService.onDidChangeConfiguration((e) => {
      let lazyPreferredColorScheme = null;
      const getPreferredColorScheme = () => {
        if (lazyPreferredColorScheme === null) {
          lazyPreferredColorScheme = this.getPreferredColorScheme();
        }
        return lazyPreferredColorScheme;
      };
      if (e.affectsConfiguration(ThemeSettings.COLOR_THEME)) {
        this.restoreColorTheme();
      }
      if (e.affectsConfiguration(ThemeSettings.DETECT_COLOR_SCHEME) || e.affectsConfiguration(ThemeSettings.DETECT_HC)) {
        this.handlePreferredSchemeUpdated();
      }
      if (e.affectsConfiguration(ThemeSettings.PREFERRED_DARK_THEME) && getPreferredColorScheme() === ColorScheme.DARK) {
        this.applyPreferredColorTheme(ColorScheme.DARK);
      }
      if (e.affectsConfiguration(ThemeSettings.PREFERRED_LIGHT_THEME) && getPreferredColorScheme() === ColorScheme.LIGHT) {
        this.applyPreferredColorTheme(ColorScheme.LIGHT);
      }
      if (e.affectsConfiguration(ThemeSettings.PREFERRED_HC_DARK_THEME) && getPreferredColorScheme() === ColorScheme.HIGH_CONTRAST_DARK) {
        this.applyPreferredColorTheme(ColorScheme.HIGH_CONTRAST_DARK);
      }
      if (e.affectsConfiguration(ThemeSettings.PREFERRED_HC_LIGHT_THEME) && getPreferredColorScheme() === ColorScheme.HIGH_CONTRAST_LIGHT) {
        this.applyPreferredColorTheme(ColorScheme.HIGH_CONTRAST_LIGHT);
      }
      if (e.affectsConfiguration(ThemeSettings.FILE_ICON_THEME)) {
        this.restoreFileIconTheme();
      }
      if (e.affectsConfiguration(ThemeSettings.PRODUCT_ICON_THEME)) {
        this.restoreProductIconTheme();
      }
      if (this.currentColorTheme) {
        let hasColorChanges = false;
        if (e.affectsConfiguration(ThemeSettings.COLOR_CUSTOMIZATIONS)) {
          this.currentColorTheme.setCustomColors(this.settings.colorCustomizations);
          hasColorChanges = true;
        }
        if (e.affectsConfiguration(ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS)) {
          this.currentColorTheme.setCustomTokenColors(this.settings.tokenColorCustomizations);
          hasColorChanges = true;
        }
        if (e.affectsConfiguration(ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS)) {
          this.currentColorTheme.setCustomSemanticTokenColors(this.settings.semanticTokenColorCustomizations);
          hasColorChanges = true;
        }
        if (hasColorChanges) {
          this.updateDynamicCSSRules(this.currentColorTheme);
          this.onColorThemeChange.fire(this.currentColorTheme);
        }
      }
    });
  }
  installRegistryListeners() {
    let prevColorId = void 0;
    this.colorThemeRegistry.onDidChange(async (event) => {
      updateColorThemeConfigurationSchemas(event.themes);
      if (await this.restoreColorTheme()) {
        if (this.currentColorTheme.settingsId === ThemeSettingDefaults.COLOR_THEME_DARK && !isUndefined(prevColorId) && await this.colorThemeRegistry.findThemeById(prevColorId)) {
          await this.setColorTheme(prevColorId, "auto");
          prevColorId = void 0;
        } else if (event.added.some((t) => t.settingsId === this.currentColorTheme.settingsId)) {
          await this.reloadCurrentColorTheme();
        }
      } else if (event.removed.some((t) => t.settingsId === this.currentColorTheme.settingsId)) {
        prevColorId = this.currentColorTheme.id;
        const defaultTheme = this.colorThemeRegistry.findThemeBySettingsId(ThemeSettingDefaults.COLOR_THEME_DARK);
        await this.setColorTheme(defaultTheme, "auto");
      }
    });
    let prevFileIconId = void 0;
    this.fileIconThemeRegistry.onDidChange(async (event) => {
      updateFileIconThemeConfigurationSchemas(event.themes);
      if (await this.restoreFileIconTheme()) {
        if (this.currentFileIconTheme.id === DEFAULT_FILE_ICON_THEME_ID && !isUndefined(prevFileIconId) && this.fileIconThemeRegistry.findThemeById(prevFileIconId)) {
          await this.setFileIconTheme(prevFileIconId, "auto");
          prevFileIconId = void 0;
        } else if (event.added.some((t) => t.settingsId === this.currentFileIconTheme.settingsId)) {
          await this.reloadCurrentFileIconTheme();
        }
      } else if (event.removed.some((t) => t.settingsId === this.currentFileIconTheme.settingsId)) {
        prevFileIconId = this.currentFileIconTheme.id;
        await this.setFileIconTheme(DEFAULT_FILE_ICON_THEME_ID, "auto");
      }
    });
    let prevProductIconId = void 0;
    this.productIconThemeRegistry.onDidChange(async (event) => {
      updateProductIconThemeConfigurationSchemas(event.themes);
      if (await this.restoreProductIconTheme()) {
        if (this.currentProductIconTheme.id === DEFAULT_PRODUCT_ICON_THEME_ID && !isUndefined(prevProductIconId) && this.productIconThemeRegistry.findThemeById(prevProductIconId)) {
          await this.setProductIconTheme(prevProductIconId, "auto");
          prevProductIconId = void 0;
        } else if (event.added.some((t) => t.settingsId === this.currentProductIconTheme.settingsId)) {
          await this.reloadCurrentProductIconTheme();
        }
      } else if (event.removed.some((t) => t.settingsId === this.currentProductIconTheme.settingsId)) {
        prevProductIconId = this.currentProductIconTheme.id;
        await this.setProductIconTheme(DEFAULT_PRODUCT_ICON_THEME_ID, "auto");
      }
    });
    return Promise.all([this.getColorThemes(), this.getFileIconThemes(), this.getProductIconThemes()]).then(([ct, fit, pit]) => {
      updateColorThemeConfigurationSchemas(ct);
      updateFileIconThemeConfigurationSchemas(fit);
      updateProductIconThemeConfigurationSchemas(pit);
    });
  }
  installPreferredSchemeListener() {
    this.hostColorService.onDidChangeColorScheme(() => this.handlePreferredSchemeUpdated());
  }
  async handlePreferredSchemeUpdated() {
    const scheme = this.getPreferredColorScheme();
    const prevScheme = this.storageService.get(PERSISTED_OS_COLOR_SCHEME, PERSISTED_OS_COLOR_SCHEME_SCOPE);
    if (scheme !== prevScheme) {
      this.storageService.store(PERSISTED_OS_COLOR_SCHEME, scheme, PERSISTED_OS_COLOR_SCHEME_SCOPE, 1);
      if (scheme) {
        if (!prevScheme) {
          this.themeSettingIdBeforeSchemeSwitch = this.settings.colorTheme;
        }
        return this.applyPreferredColorTheme(scheme);
      } else if (prevScheme && this.themeSettingIdBeforeSchemeSwitch) {
        const theme = this.colorThemeRegistry.findThemeBySettingsId(this.themeSettingIdBeforeSchemeSwitch, void 0);
        if (theme) {
          this.setColorTheme(theme.id, "auto");
        }
      }
    }
    return void 0;
  }
  getPreferredColorScheme() {
    if (this.configurationService.getValue(ThemeSettings.DETECT_HC) && this.hostColorService.highContrast) {
      return this.hostColorService.dark ? ColorScheme.HIGH_CONTRAST_DARK : ColorScheme.HIGH_CONTRAST_LIGHT;
    }
    if (this.configurationService.getValue(ThemeSettings.DETECT_COLOR_SCHEME)) {
      return this.hostColorService.dark ? ColorScheme.DARK : ColorScheme.LIGHT;
    }
    return void 0;
  }
  async applyPreferredColorTheme(type) {
    let settingId;
    switch (type) {
      case ColorScheme.LIGHT:
        settingId = ThemeSettings.PREFERRED_LIGHT_THEME;
        break;
      case ColorScheme.HIGH_CONTRAST_DARK:
        settingId = ThemeSettings.PREFERRED_HC_DARK_THEME;
        break;
      case ColorScheme.HIGH_CONTRAST_LIGHT:
        settingId = ThemeSettings.PREFERRED_HC_LIGHT_THEME;
        break;
      default:
        settingId = ThemeSettings.PREFERRED_DARK_THEME;
    }
    const themeSettingId = this.configurationService.getValue(settingId);
    if (themeSettingId && typeof themeSettingId === "string") {
      const theme = this.colorThemeRegistry.findThemeBySettingsId(themeSettingId, void 0);
      if (theme) {
        const configurationTarget = this.settings.findAutoConfigurationTarget(settingId);
        return this.setColorTheme(theme.id, configurationTarget);
      }
    }
    return null;
  }
  hasUpdatedDefaultThemes() {
    return this.hasDefaultUpdated;
  }
  getColorTheme() {
    return this.currentColorTheme;
  }
  async getColorThemes() {
    return this.colorThemeRegistry.getThemes();
  }
  async getMarketplaceColorThemes(publisher, name, version) {
    const extensionLocation = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher, name, version }, "extension");
    if (extensionLocation) {
      try {
        const manifestContent = await this.extensionResourceLoaderService.readExtensionResource(joinPath(extensionLocation, "package.json"));
        return this.colorThemeRegistry.getMarketplaceThemes(JSON.parse(manifestContent), extensionLocation, ExtensionData.fromName(publisher, name));
      } catch (e) {
        this.logService.error("Problem loading themes from marketplace", e);
      }
    }
    return [];
  }
  get onDidColorThemeChange() {
    return this.onColorThemeChange.event;
  }
  setColorTheme(themeIdOrTheme, settingsTarget) {
    return this.colorThemeSequencer.queue(async () => {
      return this.internalSetColorTheme(themeIdOrTheme, settingsTarget);
    });
  }
  async internalSetColorTheme(themeIdOrTheme, settingsTarget) {
    var _a;
    if (!themeIdOrTheme) {
      return null;
    }
    const themeId = isString(themeIdOrTheme) ? validateThemeId(themeIdOrTheme) : themeIdOrTheme.id;
    if (this.currentColorTheme.isLoaded && themeId === this.currentColorTheme.id) {
      if (settingsTarget !== "preview") {
        this.currentColorTheme.toStorage(this.storageService);
      }
      return this.settings.setColorTheme(this.currentColorTheme, settingsTarget);
    }
    let themeData = this.colorThemeRegistry.findThemeById(themeId);
    if (!themeData) {
      if (themeIdOrTheme instanceof ColorThemeData) {
        themeData = themeIdOrTheme;
      } else {
        return null;
      }
    }
    try {
      await themeData.ensureLoaded(this.extensionResourceLoaderService);
      themeData.setCustomizations(this.settings);
      return this.applyTheme(themeData, settingsTarget);
    } catch (error) {
      throw new Error(localize("error.cannotloadtheme", "Unable to load {0}: {1}", (_a = themeData.location) == null ? void 0 : _a.toString(), error.message));
    }
  }
  reloadCurrentColorTheme() {
    return this.colorThemeSequencer.queue(async () => {
      var _a;
      try {
        const theme = this.colorThemeRegistry.findThemeBySettingsId(this.currentColorTheme.settingsId) || this.currentColorTheme;
        await theme.reload(this.extensionResourceLoaderService);
        theme.setCustomizations(this.settings);
        await this.applyTheme(theme, void 0, false);
      } catch (error) {
        this.logService.info("Unable to reload {0}: {1}", (_a = this.currentColorTheme.location) == null ? void 0 : _a.toString());
      }
    });
  }
  async restoreColorTheme() {
    return this.colorThemeSequencer.queue(async () => {
      const settingId = this.settings.colorTheme;
      const theme = this.colorThemeRegistry.findThemeBySettingsId(settingId);
      if (theme) {
        if (settingId !== this.currentColorTheme.settingsId) {
          await this.internalSetColorTheme(theme.id, void 0);
        } else if (theme !== this.currentColorTheme) {
          await theme.ensureLoaded(this.extensionResourceLoaderService);
          theme.setCustomizations(this.settings);
          await this.applyTheme(theme, void 0, true);
        }
        return true;
      }
      return false;
    });
  }
  updateDynamicCSSRules(themeData) {
    const cssRules = /* @__PURE__ */ new Set();
    const ruleCollector = {
      addRule: (rule) => {
        if (!cssRules.has(rule)) {
          cssRules.add(rule);
        }
      }
    };
    ruleCollector.addRule(`.monaco-workbench { forced-color-adjust: none; }`);
    themingRegistry.getThemingParticipants().forEach((p) => p(themeData, ruleCollector, this.environmentService));
    const colorVariables = [];
    for (const item of getColorRegistry().getColors()) {
      const color = themeData.getColor(item.id, true);
      if (color) {
        colorVariables.push(`${asCssVariableName(item.id)}: ${color.toString()};`);
      }
    }
    ruleCollector.addRule(`.monaco-workbench { ${colorVariables.join("\n")} }`);
    _applyRules([...cssRules].join("\n"), colorThemeRulesClassName);
  }
  applyTheme(newTheme, settingsTarget, silent = false) {
    this.updateDynamicCSSRules(newTheme);
    if (this.currentColorTheme.id) {
      this.container.classList.remove(...this.currentColorTheme.classNames);
    } else {
      this.container.classList.remove(VS_DARK_THEME, VS_LIGHT_THEME, VS_HC_THEME, VS_HC_LIGHT_THEME);
    }
    this.container.classList.add(...newTheme.classNames);
    this.currentColorTheme.clearCaches();
    this.currentColorTheme = newTheme;
    if (!this.colorThemingParticipantChangeListener) {
      this.colorThemingParticipantChangeListener = themingRegistry.onThemingParticipantAdded((_) => this.updateDynamicCSSRules(this.currentColorTheme));
    }
    this.colorThemeWatcher.update(newTheme);
    this.sendTelemetry(newTheme.id, newTheme.extensionData, "color");
    if (silent) {
      return Promise.resolve(null);
    }
    this.onColorThemeChange.fire(this.currentColorTheme);
    if (newTheme.isLoaded && settingsTarget !== "preview") {
      newTheme.toStorage(this.storageService);
    }
    return this.settings.setColorTheme(this.currentColorTheme, settingsTarget);
  }
  sendTelemetry(themeId, themeData, themeType) {
    if (themeData) {
      const key = themeType + themeData.extensionId;
      if (!this.themeExtensionsActivated.get(key)) {
        this.telemetryService.publicLog2("activatePlugin", {
          id: themeData.extensionId,
          name: themeData.extensionName,
          isBuiltin: themeData.extensionIsBuiltin,
          publisherDisplayName: themeData.extensionPublisher,
          themeId
        });
        this.themeExtensionsActivated.set(key, true);
      }
    }
  }
  async getFileIconThemes() {
    return this.fileIconThemeRegistry.getThemes();
  }
  getFileIconTheme() {
    return this.currentFileIconTheme;
  }
  get onDidFileIconThemeChange() {
    return this.onFileIconThemeChange.event;
  }
  async setFileIconTheme(iconThemeOrId, settingsTarget) {
    return this.fileIconThemeSequencer.queue(async () => {
      return this.internalSetFileIconTheme(iconThemeOrId, settingsTarget);
    });
  }
  async internalSetFileIconTheme(iconThemeOrId, settingsTarget) {
    if (iconThemeOrId === void 0) {
      iconThemeOrId = "";
    }
    const themeId = isString(iconThemeOrId) ? iconThemeOrId : iconThemeOrId.id;
    if (themeId !== this.currentFileIconTheme.id || !this.currentFileIconTheme.isLoaded) {
      let newThemeData = this.fileIconThemeRegistry.findThemeById(themeId);
      if (!newThemeData && iconThemeOrId instanceof FileIconThemeData) {
        newThemeData = iconThemeOrId;
      }
      if (!newThemeData) {
        newThemeData = FileIconThemeData.noIconTheme;
      }
      await newThemeData.ensureLoaded(this.fileIconThemeLoader);
      this.applyAndSetFileIconTheme(newThemeData);
    }
    const themeData = this.currentFileIconTheme;
    if (themeData.isLoaded && settingsTarget !== "preview" && (!themeData.location || !getRemoteAuthority(themeData.location))) {
      themeData.toStorage(this.storageService);
    }
    await this.settings.setFileIconTheme(this.currentFileIconTheme, settingsTarget);
    return themeData;
  }
  async getMarketplaceFileIconThemes(publisher, name, version) {
    const extensionLocation = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher, name, version }, "extension");
    if (extensionLocation) {
      try {
        const manifestContent = await this.extensionResourceLoaderService.readExtensionResource(joinPath(extensionLocation, "package.json"));
        return this.fileIconThemeRegistry.getMarketplaceThemes(JSON.parse(manifestContent), extensionLocation, ExtensionData.fromName(publisher, name));
      } catch (e) {
        this.logService.error("Problem loading themes from marketplace", e);
      }
    }
    return [];
  }
  async reloadCurrentFileIconTheme() {
    return this.fileIconThemeSequencer.queue(async () => {
      await this.currentFileIconTheme.reload(this.fileIconThemeLoader);
      this.applyAndSetFileIconTheme(this.currentFileIconTheme);
    });
  }
  async restoreFileIconTheme() {
    return this.fileIconThemeSequencer.queue(async () => {
      const settingId = this.settings.fileIconTheme;
      const theme = this.fileIconThemeRegistry.findThemeBySettingsId(settingId);
      if (theme) {
        if (settingId !== this.currentFileIconTheme.settingsId) {
          await this.internalSetFileIconTheme(theme.id, void 0);
        } else if (theme !== this.currentFileIconTheme) {
          await theme.ensureLoaded(this.fileIconThemeLoader);
          this.applyAndSetFileIconTheme(theme, true);
        }
        return true;
      }
      return false;
    });
  }
  applyAndSetFileIconTheme(iconThemeData, silent = false) {
    this.currentFileIconTheme = iconThemeData;
    _applyRules(iconThemeData.styleSheetContent, fileIconThemeRulesClassName);
    if (iconThemeData.id) {
      this.container.classList.add(fileIconsEnabledClass);
    } else {
      this.container.classList.remove(fileIconsEnabledClass);
    }
    this.fileIconThemeWatcher.update(iconThemeData);
    if (iconThemeData.id) {
      this.sendTelemetry(iconThemeData.id, iconThemeData.extensionData, "fileIcon");
    }
    if (!silent) {
      this.onFileIconThemeChange.fire(this.currentFileIconTheme);
    }
  }
  async getProductIconThemes() {
    return this.productIconThemeRegistry.getThemes();
  }
  getProductIconTheme() {
    return this.currentProductIconTheme;
  }
  get onDidProductIconThemeChange() {
    return this.onProductIconThemeChange.event;
  }
  async setProductIconTheme(iconThemeOrId, settingsTarget) {
    return this.productIconThemeSequencer.queue(async () => {
      return this.internalSetProductIconTheme(iconThemeOrId, settingsTarget);
    });
  }
  async internalSetProductIconTheme(iconThemeOrId, settingsTarget) {
    if (iconThemeOrId === void 0) {
      iconThemeOrId = "";
    }
    const themeId = isString(iconThemeOrId) ? iconThemeOrId : iconThemeOrId.id;
    if (themeId !== this.currentProductIconTheme.id || !this.currentProductIconTheme.isLoaded) {
      let newThemeData = this.productIconThemeRegistry.findThemeById(themeId);
      if (!newThemeData && iconThemeOrId instanceof ProductIconThemeData) {
        newThemeData = iconThemeOrId;
      }
      if (!newThemeData) {
        newThemeData = ProductIconThemeData.defaultTheme;
      }
      await newThemeData.ensureLoaded(this.extensionResourceLoaderService, this.logService);
      this.applyAndSetProductIconTheme(newThemeData);
    }
    const themeData = this.currentProductIconTheme;
    if (themeData.isLoaded && settingsTarget !== "preview" && (!themeData.location || !getRemoteAuthority(themeData.location))) {
      themeData.toStorage(this.storageService);
    }
    await this.settings.setProductIconTheme(this.currentProductIconTheme, settingsTarget);
    return themeData;
  }
  async getMarketplaceProductIconThemes(publisher, name, version) {
    const extensionLocation = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher, name, version }, "extension");
    if (extensionLocation) {
      try {
        const manifestContent = await this.extensionResourceLoaderService.readExtensionResource(joinPath(extensionLocation, "package.json"));
        return this.productIconThemeRegistry.getMarketplaceThemes(JSON.parse(manifestContent), extensionLocation, ExtensionData.fromName(publisher, name));
      } catch (e) {
        this.logService.error("Problem loading themes from marketplace", e);
      }
    }
    return [];
  }
  async reloadCurrentProductIconTheme() {
    return this.productIconThemeSequencer.queue(async () => {
      await this.currentProductIconTheme.reload(this.extensionResourceLoaderService, this.logService);
      this.applyAndSetProductIconTheme(this.currentProductIconTheme);
    });
  }
  async restoreProductIconTheme() {
    return this.productIconThemeSequencer.queue(async () => {
      const settingId = this.settings.productIconTheme;
      const theme = this.productIconThemeRegistry.findThemeBySettingsId(settingId);
      if (theme) {
        if (settingId !== this.currentProductIconTheme.settingsId) {
          await this.internalSetProductIconTheme(theme.id, void 0);
        } else if (theme !== this.currentProductIconTheme) {
          await theme.ensureLoaded(this.extensionResourceLoaderService, this.logService);
          this.applyAndSetProductIconTheme(theme, true);
        }
        return true;
      }
      return false;
    });
  }
  applyAndSetProductIconTheme(iconThemeData, silent = false) {
    this.currentProductIconTheme = iconThemeData;
    _applyRules(iconThemeData.styleSheetContent, productIconThemeRulesClassName);
    this.productIconThemeWatcher.update(iconThemeData);
    if (iconThemeData.id) {
      this.sendTelemetry(iconThemeData.id, iconThemeData.extensionData, "productIcon");
    }
    if (!silent) {
      this.onProductIconThemeChange.fire(this.currentProductIconTheme);
    }
  }
};
WorkbenchThemeService = __decorate([
  __param(0, IExtensionService),
  __param(1, IStorageService),
  __param(2, IConfigurationService),
  __param(3, ITelemetryService),
  __param(4, IBrowserWorkbenchEnvironmentService),
  __param(5, IFileService),
  __param(6, IExtensionResourceLoaderService),
  __param(7, IWorkbenchLayoutService),
  __param(8, ILogService),
  __param(9, IHostColorSchemeService),
  __param(10, IUserDataInitializationService),
  __param(11, ILanguageService)
], WorkbenchThemeService);
class ThemeFileWatcher {
  constructor(fileService, environmentService, onUpdate) {
    this.fileService = fileService;
    this.environmentService = environmentService;
    this.onUpdate = onUpdate;
  }
  update(theme) {
    if (!isEqual(theme.location, this.watchedLocation)) {
      this.dispose();
      if (theme.location && (theme.watch || this.environmentService.isExtensionDevelopment)) {
        this.watchedLocation = theme.location;
        this.watcherDisposable = this.fileService.watch(theme.location);
        this.fileService.onDidFilesChange((e) => {
          if (this.watchedLocation && e.contains(this.watchedLocation, 0)) {
            this.onUpdate();
          }
        });
      }
    }
  }
  dispose() {
    this.watcherDisposable = dispose(this.watcherDisposable);
    this.fileChangeListener = dispose(this.fileChangeListener);
    this.watchedLocation = void 0;
  }
}
function _applyRules(styleSheetContent, rulesClassName) {
  const themeStyles = document.head.getElementsByClassName(rulesClassName);
  if (themeStyles.length === 0) {
    const elStyle = document.createElement("style");
    elStyle.type = "text/css";
    elStyle.className = rulesClassName;
    elStyle.textContent = styleSheetContent;
    document.head.appendChild(elStyle);
  } else {
    themeStyles[0].textContent = styleSheetContent;
  }
}
registerColorThemeSchemas();
registerFileIconThemeSchemas();
registerProductIconThemeSchemas();
class StandaloneWorkbenchThemeService extends WorkbenchThemeService {
  registerEditorContainer() {
    return {
      dispose() {
      }
    };
  }
  setTheme(themeName) {
    void this.getColorThemes().then((themes) => {
      setTimeout(() => {
        void this.setColorTheme(themes.find((theme) => theme.settingsId === themeName) ?? themeName, 8);
      });
    });
  }
}
function getServiceOverride() {
  return {
    ...getServiceOverride$1(),
    [IThemeService.toString()]: new SyncDescriptor(StandaloneWorkbenchThemeService, [], false)
  };
}
export {
  getServiceOverride as default
};
