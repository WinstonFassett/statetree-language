var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { q as __vitePreload, r as reactExports, o as jsxRuntimeExports, u as useSandpack } from "./index-3bddf13b.js";
import { r as registerExtension, m as monaco_editor_core_star, l as languages } from "./theme-defaults-1df7f429.js";
var manifest$3 = { name: "javascript", displayName: "JavaScript Language Basics", description: "Provides snippets, syntax highlighting, bracket matching and folding in JavaScript files.", version: "1.0.0", publisher: "vscode", license: "MIT", engines: { vscode: "0.10.x" }, contributes: { configurationDefaults: { "[javascript]": { "editor.maxTokenizationLineLength": 2500 } }, languages: [{ id: "javascriptreact", aliases: ["JavaScript JSX", "JavaScript React", "jsx"], extensions: [".jsx"], configuration: "./javascript-language-configuration.json" }, { id: "javascript", aliases: ["JavaScript", "javascript", "js"], extensions: [".js", ".es6", ".mjs", ".cjs", ".pac"], filenames: ["jakefile"], firstLine: "^#!.*\\bnode", mimetypes: ["text/javascript"], configuration: "./javascript-language-configuration.json" }, { id: "jsx-tags", aliases: [], configuration: "./tags-language-configuration.json" }], grammars: [{ language: "javascriptreact", scopeName: "source.js.jsx", path: "./syntaxes/JavaScriptReact.tmLanguage.json", embeddedLanguages: { "meta.tag.js": "jsx-tags", "meta.tag.without-attributes.js": "jsx-tags", "meta.tag.attributes.js.jsx": "javascriptreact", "meta.embedded.expression.js": "javascriptreact" }, tokenTypes: { "meta.template.expression": "other", "meta.template.expression string": "string", "meta.template.expression comment": "comment", "entity.name.type.instance.jsdoc": "other", "entity.name.function.tagged-template": "other", "meta.import string.quoted": "other", "variable.other.jsdoc": "other" } }, { language: "javascript", scopeName: "source.js", path: "./syntaxes/JavaScript.tmLanguage.json", embeddedLanguages: { "meta.tag.js": "jsx-tags", "meta.tag.without-attributes.js": "jsx-tags", "meta.tag.attributes.js": "javascript", "meta.embedded.expression.js": "javascript" }, tokenTypes: { "meta.template.expression": "other", "meta.template.expression string": "string", "meta.template.expression comment": "comment", "entity.name.type.instance.jsdoc": "other", "entity.name.function.tagged-template": "other", "meta.import string.quoted": "other", "variable.other.jsdoc": "other" } }, { scopeName: "source.js.regexp", path: "./syntaxes/Regular Expressions (JavaScript).tmLanguage" }], semanticTokenScopes: [{ language: "javascript", scopes: { property: ["variable.other.property.js"], "property.readonly": ["variable.other.constant.property.js"], variable: ["variable.other.readwrite.js"], "variable.readonly": ["variable.other.constant.object.js"], "function": ["entity.name.function.js"], namespace: ["entity.name.type.module.js"], "variable.defaultLibrary": ["support.variable.js"], "function.defaultLibrary": ["support.function.js"] } }, { language: "javascriptreact", scopes: { property: ["variable.other.property.jsx"], "property.readonly": ["variable.other.constant.property.jsx"], variable: ["variable.other.readwrite.jsx"], "variable.readonly": ["variable.other.constant.object.jsx"], "function": ["entity.name.function.jsx"], namespace: ["entity.name.type.module.jsx"], "variable.defaultLibrary": ["support.variable.js"], "function.defaultLibrary": ["support.function.js"] } }], snippets: [{ language: "javascript", path: "./snippets/javascript.code-snippets" }, { language: "javascriptreact", path: "./snippets/javascript.code-snippets" }] }, repository: { type: "git", url: "https://github.com/microsoft/vscode.git" } };
const { registerFileUrl: registerFileUrl$3 } = registerExtension(manifest$3);
registerFileUrl$3("./syntaxes/JavaScriptReact.tmLanguage.json", new URL("/statetree-language/assets/JavaScriptReact.tmLanguage-eab18431.json", self.location).toString(), "application/json");
registerFileUrl$3("./syntaxes/JavaScript.tmLanguage.json", new URL("/statetree-language/assets/JavaScript.tmLanguage-7d8b1469.json", self.location).toString(), "application/json");
registerFileUrl$3("./syntaxes/Regular Expressions (JavaScript).tmLanguage", new URL("/statetree-language/assets/Regular Expressions (JavaScript)-00108c41.tmLanguage", self.location).toString());
registerFileUrl$3("./javascript-language-configuration.json", new URL("data:application/json;base64,ewoJLy8gTm90ZSB0aGF0IHRoaXMgZmlsZSBzaG91bGQgc3RheSBpbiBzeW5jIHdpdGggJ3R5cGVzY3JpcHQtbGFuZ3VhZ2UtYmFzaWNzL2xhbmd1YWdlLWNvbmZpZ3VyYXRpb24uanNvbicKCSJjb21tZW50cyI6IHsKCQkibGluZUNvbW1lbnQiOiAiLy8iLAoJCSJibG9ja0NvbW1lbnQiOiBbCgkJCSIvKiIsCgkJCSIqLyIKCQldCgl9LAoJImJyYWNrZXRzIjogWwoJCVsKCQkJIiR7IiwKCQkJIn0iCgkJXSwKCQlbCgkJCSJ7IiwKCQkJIn0iCgkJXSwKCQlbCgkJCSJbIiwKCQkJIl0iCgkJXSwKCQlbCgkJCSIoIiwKCQkJIikiCgkJXQoJXSwKCSJhdXRvQ2xvc2luZ1BhaXJzIjogWwoJCXsKCQkJIm9wZW4iOiAieyIsCgkJCSJjbG9zZSI6ICJ9IgoJCX0sCgkJewoJCQkib3BlbiI6ICJbIiwKCQkJImNsb3NlIjogIl0iCgkJfSwKCQl7CgkJCSJvcGVuIjogIigiLAoJCQkiY2xvc2UiOiAiKSIKCQl9LAoJCXsKCQkJIm9wZW4iOiAiJyIsCgkJCSJjbG9zZSI6ICInIiwKCQkJIm5vdEluIjogWwoJCQkJInN0cmluZyIsCgkJCQkiY29tbWVudCIKCQkJXQoJCX0sCgkJewoJCQkib3BlbiI6ICJcIiIsCgkJCSJjbG9zZSI6ICJcIiIsCgkJCSJub3RJbiI6IFsKCQkJCSJzdHJpbmciCgkJCV0KCQl9LAoJCXsKCQkJIm9wZW4iOiAiYCIsCgkJCSJjbG9zZSI6ICJgIiwKCQkJIm5vdEluIjogWwoJCQkJInN0cmluZyIsCgkJCQkiY29tbWVudCIKCQkJXQoJCX0sCgkJewoJCQkib3BlbiI6ICIvKioiLAoJCQkiY2xvc2UiOiAiICovIiwKCQkJIm5vdEluIjogWwoJCQkJInN0cmluZyIKCQkJXQoJCX0KCV0sCgkic3Vycm91bmRpbmdQYWlycyI6IFsKCQlbCgkJCSJ7IiwKCQkJIn0iCgkJXSwKCQlbCgkJCSJbIiwKCQkJIl0iCgkJXSwKCQlbCgkJCSIoIiwKCQkJIikiCgkJXSwKCQlbCgkJCSInIiwKCQkJIiciCgkJXSwKCQlbCgkJCSJcIiIsCgkJCSJcIiIKCQldLAoJCVsKCQkJImAiLAoJCQkiYCIKCQldLAoJCVsKCQkJIjwiLAoJCQkiPiIKCQldCgldLAoJImF1dG9DbG9zZUJlZm9yZSI6ICI7Oi4sPX1dKT5gIFxuXHQiLAoJImZvbGRpbmciOiB7CgkJIm1hcmtlcnMiOiB7CgkJCSJzdGFydCI6ICJeXFxzKi8vXFxzKiM/cmVnaW9uXFxiIiwKCQkJImVuZCI6ICJeXFxzKi8vXFxzKiM/ZW5kcmVnaW9uXFxiIgoJCX0KCX0sCgkid29yZFBhdHRlcm4iOiB7CgkJInBhdHRlcm4iOiAiKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcQFxcIVxcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+L1xcP1xcc10rKSIsCgl9LAoJImluZGVudGF0aW9uUnVsZXMiOiB7CgkJImRlY3JlYXNlSW5kZW50UGF0dGVybiI6IHsKCQkJInBhdHRlcm4iOiAiXigoPyEuKj8vXFwqKS4qXFwqXC8pP1xccypbXFx9XFxdXS4qJCIKCQl9LAoJCSJpbmNyZWFzZUluZGVudFBhdHRlcm4iOiB7CgkJCSJwYXR0ZXJuIjogIl4oKD8hLy8pLikqKFxceyhbXn1cIidgL10qfChcXHR8WyBdKSovLy4qKXxcXChbXilcIidgL10qfFxcW1teXFxdXCInYC9dKikkIgoJCX0sCgkJLy8gZS5nLiAgKiAuLi58IG9yICovfCBvciAqLS0tLS0qL3wKCQkidW5JbmRlbnRlZExpbmVQYXR0ZXJuIjogewoJCQkicGF0dGVybiI6ICJeKFxcdHxbIF0pKlsgXVxcKlteL10qXFwqL1xccyokfF4oXFx0fFsgXSkqWyBdXFwqL1xccyokfF4oXFx0fFsgXSkqWyBdXFwqKFsgXShbXlxcKl18XFwqKD8hLykpKik/JCIKCQl9Cgl9LAoJIm9uRW50ZXJSdWxlcyI6IFsKCQl7CgkJCS8vIGUuZy4gLyoqIHwgKi8KCQkJImJlZm9yZVRleHQiOiB7CgkJCQkicGF0dGVybiI6ICJeXFxzKi9cXCpcXCooPyEvKShbXlxcKl18XFwqKD8hLykpKiQiCgkJCX0sCgkJCSJhZnRlclRleHQiOiB7CgkJCQkicGF0dGVybiI6ICJeXFxzKlxcKi8kIgoJCQl9LAoJCQkiYWN0aW9uIjogewoJCQkJImluZGVudCI6ICJpbmRlbnRPdXRkZW50IiwKCQkJCSJhcHBlbmRUZXh0IjogIiAqICIKCQkJfQoJCX0sCgkJewoJCQkvLyBlLmcuIC8qKiAuLi58CgkJCSJiZWZvcmVUZXh0IjogewoJCQkJInBhdHRlcm4iOiAiXlxccyovXFwqXFwqKD8hLykoW15cXCpdfFxcKig/IS8pKSokIgoJCQl9LAoJCQkiYWN0aW9uIjogewoJCQkJImluZGVudCI6ICJub25lIiwKCQkJCSJhcHBlbmRUZXh0IjogIiAqICIKCQkJfQoJCX0sCgkJewoJCQkvLyBlLmcuICAqIC4uLnwKCQkJImJlZm9yZVRleHQiOiB7CgkJCQkicGF0dGVybiI6ICJeKFxcdHxbIF0pKlsgXVxcKihbIF0oW15cXCpdfFxcKig/IS8pKSopPyQiCgkJCX0sCgkJCSJwcmV2aW91c0xpbmVUZXh0IjogewoJCQkJInBhdHRlcm4iOiAiKD89XihcXHMqKC9cXCpcXCp8XFwqKSkuKikoPz0oPyEoXFxzKlxcKi8pKSkiCgkJCX0sCgkJCSJhY3Rpb24iOiB7CgkJCQkiaW5kZW50IjogIm5vbmUiLAoJCQkJImFwcGVuZFRleHQiOiAiKiAiCgkJCX0KCQl9LAoJCXsKCQkJLy8gZS5nLiAgKi98CgkJCSJiZWZvcmVUZXh0IjogewoJCQkJInBhdHRlcm4iOiAiXihcXHR8WyBdKSpbIF1cXCovXFxzKiQiCgkJCX0sCgkJCSJhY3Rpb24iOiB7CgkJCQkiaW5kZW50IjogIm5vbmUiLAoJCQkJInJlbW92ZVRleHQiOiAxCgkJCX0sCgkJfSwKCQl7CgkJCS8vIGUuZy4gICotLS0tLSovfAoJCQkiYmVmb3JlVGV4dCI6IHsKCQkJCSJwYXR0ZXJuIjogIl4oXFx0fFsgXSkqWyBdXFwqW14vXSpcXCovXFxzKiQiCgkJCX0sCgkJCSJhY3Rpb24iOiB7CgkJCQkiaW5kZW50IjogIm5vbmUiLAoJCQkJInJlbW92ZVRleHQiOiAxCgkJCX0sCgkJfSwKCQl7CgkJCSJiZWZvcmVUZXh0IjogewoJCQkJInBhdHRlcm4iOiAiXlxccyooXFxiY2FzZVxccy4rOnxcXGJkZWZhdWx0OikkIgoJCQl9LAoJCQkiYWZ0ZXJUZXh0IjogewoJCQkJInBhdHRlcm4iOiAiXig/IVxccyooXFxiY2FzZVxcYnxcXGJkZWZhdWx0XFxiKSkiCgkJCX0sCgkJCSJhY3Rpb24iOiB7CgkJCQkiaW5kZW50IjogImluZGVudCIKCQkJfQoJCX0sCgkJewoJCQkvLyBEZWNyZWFzZSBpbmRlbnRhdGlvbiBhZnRlciBzaW5nbGUgbGluZSBpZi9lbHNlIGlmL2Vsc2UsIGZvciwgb3Igd2hpbGUKCQkJInByZXZpb3VzTGluZVRleHQiOiAiXlxccyooKChlbHNlID8pP2lmfGZvcnx3aGlsZSlcXHMqXFwoLipcXClcXHMqfGVsc2VcXHMqKSQiLAoJCQkvLyBCdXQgbWFrZSBzdXJlIGxpbmUgZG9lc24ndCBoYXZlIGJyYWNlcyBvciBpcyBub3QgYW5vdGhlciBpZiBzdGF0ZW1lbnQKCQkJImJlZm9yZVRleHQiOiAiXlxccysoW157aVxcc118aSg/IWZcXGIpKSIsCgkJCSJhY3Rpb24iOiB7CgkJCQkiaW5kZW50IjogIm91dGRlbnQiCgkJCX0KCQl9CgldCn0K", self.location).toString(), "application/json");
registerFileUrl$3("./tags-language-configuration.json", new URL("data:application/json;base64,ewoJImNvbW1lbnRzIjogewoJCSJibG9ja0NvbW1lbnQiOiBbCgkJCSJ7LyoiLAoJCQkiKi99IgoJCV0KCX0sCgkiYnJhY2tldHMiOiBbCgkJWwoJCQkieyIsCgkJCSJ9IgoJCV0sCgkJWwoJCQkiWyIsCgkJCSJdIgoJCV0sCgkJWwoJCQkiKCIsCgkJCSIpIgoJCV0sCgkJWwoJCQkiPCIsCgkJCSI+IgoJCV0KCV0sCgkiY29sb3JpemVkQnJhY2tldFBhaXJzIjogWwoJCVsKCQkJInsiLAoJCQkifSIKCQldLAoJCVsKCQkJIlsiLAoJCQkiXSIKCQldLAoJCVsKCQkJIigiLAoJCQkiKSIKCQldCgldLAoJImF1dG9DbG9zaW5nUGFpcnMiOiBbCgkJewoJCQkib3BlbiI6ICJ7IiwKCQkJImNsb3NlIjogIn0iCgkJfSwKCQl7CgkJCSJvcGVuIjogIlsiLAoJCQkiY2xvc2UiOiAiXSIKCQl9LAoJCXsKCQkJIm9wZW4iOiAiKCIsCgkJCSJjbG9zZSI6ICIpIgoJCX0sCgkJewoJCQkib3BlbiI6ICInIiwKCQkJImNsb3NlIjogIiciLAoJCQkibm90SW4iOiBbCgkJCQkic3RyaW5nIiwKCQkJCSJjb21tZW50IgoJCQldCgkJfSwKCQl7CgkJCSJvcGVuIjogIlwiIiwKCQkJImNsb3NlIjogIlwiIiwKCQkJIm5vdEluIjogWwoJCQkJInN0cmluZyIKCQkJXQoJCX0sCgkJewoJCQkib3BlbiI6ICIvKioiLAoJCQkiY2xvc2UiOiAiICovIiwKCQkJIm5vdEluIjogWwoJCQkJInN0cmluZyIKCQkJXQoJCX0KCV0sCgkic3Vycm91bmRpbmdQYWlycyI6IFsKCQlbCgkJCSJ7IiwKCQkJIn0iCgkJXSwKCQlbCgkJCSJbIiwKCQkJIl0iCgkJXSwKCQlbCgkJCSIoIiwKCQkJIikiCgkJXSwKCQlbCgkJCSI8IiwKCQkJIj4iCgkJXSwKCQlbCgkJCSInIiwKCQkJIiciCgkJXSwKCQlbCgkJCSJcIiIsCgkJCSJcIiIKCQldCgldLAoJIndvcmRQYXR0ZXJuIjogewoJCSJwYXR0ZXJuIjogIigtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCRcXF5cXCZcXCpcXChcXClcXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6J1wiXFwsXFwuXFw8XFw+XFwvXFxzXSspIgoJfSwKCSJvbkVudGVyUnVsZXMiOiBbCgkJewoJCQkiYmVmb3JlVGV4dCI6IHsKCQkJCSJwYXR0ZXJuIjogIjwoPyEoPzphcmVhfGJhc2V8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxrZXlnZW58bGlua3xtZW51aXRlbXxtZXRhfHBhcmFtfHNvdXJjZXx0cmFja3x3YnIpKShbXzpcXHddW186XFx3XFwtLlxcZF0qKShbXi8+XSooPyEvKT4pW148XSokIiwKCQkJCSJmbGFncyI6ICJpIgoJCQl9LAoJCQkiYWZ0ZXJUZXh0IjogewoJCQkJInBhdHRlcm4iOiAiXjxcXC8oW186XFx3XVtfOlxcdy0uXFxkXSopXFxzKj4kIiwKCQkJCSJmbGFncyI6ICJpIgoJCQl9LAoJCQkiYWN0aW9uIjogewoJCQkJImluZGVudCI6ICJpbmRlbnRPdXRkZW50IgoJCQl9CgkJfSwKCQl7CgkJCSJiZWZvcmVUZXh0IjogewoJCQkJInBhdHRlcm4iOiAiPCg/ISg/OmFyZWF8YmFzZXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGtleWdlbnxsaW5rfG1lbnVpdGVtfG1ldGF8cGFyYW18c291cmNlfHRyYWNrfHdicikpKFtfOlxcd11bXzpcXHdcXC0uXFxkXSopKFteLz5dKig/IS8pPilbXjxdKiQiLAoJCQkJImZsYWdzIjogImkiCgkJCX0sCgkJCSJhY3Rpb24iOiB7CgkJCQkiaW5kZW50IjogImluZGVudCIKCQkJfQoJCX0sCgkJewoJCQkvLyBgYmVmb3JlVGV4dGAgb25seSBhcHBsaWVzIHRvIHRva2VucyBvZiBhIGdpdmVuIGxhbmd1YWdlLiBTaW5jZSB3ZSBhcmUgZGVhbGluZyB3aXRoIGpzeC10YWdzLAoJCQkvLyBtYWtlIHN1cmUgd2UgYXBwbHkgdG8gdGhlIGNsb3NpbmcgYD5gIG9mIGEgdGFnIHNvIHRoYXQgbWl4ZWQgbGFuZ3VhZ2Ugc3BhbnMKCQkJLy8gc3VjaCBhcyBgPGRpdiBvbmNsaWNrPXsxfT5gIGFyZSBoYW5kbGVkIHByb3Blcmx5LgoJCQkiYmVmb3JlVGV4dCI6IHsKCQkJCSJwYXR0ZXJuIjogIl4+JCIKCQkJfSwKCQkJImFmdGVyVGV4dCI6IHsKCQkJCSJwYXR0ZXJuIjogIl48XFwvKFtfOlxcd11bXzpcXHctLlxcZF0qKVxccyo+JCIsCgkJCQkiZmxhZ3MiOiAiaSIKCQkJfSwKCQkJImFjdGlvbiI6IHsKCQkJCSJpbmRlbnQiOiAiaW5kZW50T3V0ZGVudCIKCQkJfQoJCX0sCgkJewoJCQkiYmVmb3JlVGV4dCI6IHsKCQkJCSJwYXR0ZXJuIjogIl4+JCIKCQkJfSwKCQkJImFjdGlvbiI6IHsKCQkJCSJpbmRlbnQiOiAiaW5kZW50IgoJCQl9CgkJfQoJXSwKfQo=", self.location).toString(), "application/json");
registerFileUrl$3("./snippets/javascript.code-snippets", new URL("data:application/octet-stream;base64,ewoJImRlZmluZSBtb2R1bGUiOiB7CgkJInByZWZpeCI6ICJkZWZpbmUiLAoJCSJib2R5IjogWwoJCQkiZGVmaW5lKFsiLAoJCQkiXHQncmVxdWlyZScsIiwKCQkJIlx0JyR7MTpkZXBlbmRlbmN5fSciLAoJCQkiXSwgZnVuY3Rpb24ocmVxdWlyZSwgJHsyOmZhY3Rvcnl9KSB7IiwKCQkJIlx0J3VzZSBzdHJpY3QnOyIsCgkJCSJcdCQwIiwKCQkJIn0pOyIKCQldLAoJCSJkZXNjcmlwdGlvbiI6ICJkZWZpbmUgbW9kdWxlIgoJfSwKCSJGb3IgTG9vcCI6IHsKCQkicHJlZml4IjogImZvciIsCgkJImJvZHkiOiBbCgkJCSJmb3IgKGxldCAkezE6aW5kZXh9ID0gMDsgJHsxOmluZGV4fSA8ICR7MjphcnJheX0ubGVuZ3RoOyAkezE6aW5kZXh9KyspIHsiLAoJCQkiXHRjb25zdCAkezM6ZWxlbWVudH0gPSAkezI6YXJyYXl9WyR7MTppbmRleH1dOyIsCgkJCSJcdCRUTV9TRUxFQ1RFRF9URVhUJDAiLAoJCQkifSIKCQldLAoJCSJkZXNjcmlwdGlvbiI6ICJGb3IgTG9vcCIKCX0sCgkiRm9yLUVhY2ggTG9vcCI6IHsKCQkicHJlZml4IjogImZvcmVhY2giLAoJCSJib2R5IjogWwoJCQkiJHsxOmFycmF5fS5mb3JFYWNoKCR7MjplbGVtZW50fSA9PiB7IiwKCQkJIlx0JFRNX1NFTEVDVEVEX1RFWFQkMCIsCgkJCSJ9KTsiCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiRm9yLUVhY2ggTG9vcCIKCX0sCgkiRm9yLUluIExvb3AiOiB7CgkJInByZWZpeCI6ICJmb3JpbiIsCgkJImJvZHkiOiBbCgkJCSJmb3IgKGNvbnN0ICR7MTprZXl9IGluICR7MjpvYmplY3R9KSB7IiwKCQkJIlx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKCR7MjpvYmplY3R9LCAkezE6a2V5fSkpIHsiLAoJCQkiXHRcdGNvbnN0ICR7MzplbGVtZW50fSA9ICR7MjpvYmplY3R9WyR7MTprZXl9XTsiLAoJCQkiXHRcdCRUTV9TRUxFQ1RFRF9URVhUJDAiLAoJCQkiXHR9IiwKCQkJIn0iCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiRm9yLUluIExvb3AiCgl9LAoJIkZvci1PZiBMb29wIjogewoJCSJwcmVmaXgiOiAiZm9yb2YiLAoJCSJib2R5IjogWwoJCQkiZm9yIChjb25zdCAkezE6aXRlcmF0b3J9IG9mICR7MjpvYmplY3R9KSB7IiwKCQkJIlx0JFRNX1NFTEVDVEVEX1RFWFQkMCIsCgkJCSJ9IgoJCV0sCgkJImRlc2NyaXB0aW9uIjogIkZvci1PZiBMb29wIgoJfSwKCSJGdW5jdGlvbiBTdGF0ZW1lbnQiOiB7CgkJInByZWZpeCI6ICJmdW5jdGlvbiIsCgkJImJvZHkiOiBbCgkJCSJmdW5jdGlvbiAkezE6bmFtZX0oJHsyOnBhcmFtc30pIHsiLAoJCQkiXHQkVE1fU0VMRUNURURfVEVYVCQwIiwKCQkJIn0iCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiRnVuY3Rpb24gU3RhdGVtZW50IgoJfSwKCSJJZiBTdGF0ZW1lbnQiOiB7CgkJInByZWZpeCI6ICJpZiIsCgkJImJvZHkiOiBbCgkJCSJpZiAoJHsxOmNvbmRpdGlvbn0pIHsiLAoJCQkiXHQkVE1fU0VMRUNURURfVEVYVCQwIiwKCQkJIn0iCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiSWYgU3RhdGVtZW50IgoJfSwKCSJJZi1FbHNlIFN0YXRlbWVudCI6IHsKCQkicHJlZml4IjogImlmZWxzZSIsCgkJImJvZHkiOiBbCgkJCSJpZiAoJHsxOmNvbmRpdGlvbn0pIHsiLAoJCQkiXHQkVE1fU0VMRUNURURfVEVYVCQwIiwKCQkJIn0gZWxzZSB7IiwKCQkJIlx0IiwKCQkJIn0iCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiSWYtRWxzZSBTdGF0ZW1lbnQiCgl9LAoJIk5ldyBTdGF0ZW1lbnQiOiB7CgkJInByZWZpeCI6ICJuZXciLAoJCSJib2R5IjogWwoJCQkiY29uc3QgJHsxOm5hbWV9ID0gbmV3ICR7Mjp0eXBlfSgkezM6YXJndW1lbnRzfSk7JDAiCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiTmV3IFN0YXRlbWVudCIKCX0sCgkiU3dpdGNoIFN0YXRlbWVudCI6IHsKCQkicHJlZml4IjogInN3aXRjaCIsCgkJImJvZHkiOiBbCgkJCSJzd2l0Y2ggKCR7MTprZXl9KSB7IiwKCQkJIlx0Y2FzZSAkezI6dmFsdWV9OiIsCgkJCSJcdFx0JDAiLAoJCQkiXHRcdGJyZWFrOyIsCgkJCSIiLAoJCQkiXHRkZWZhdWx0OiIsCgkJCSJcdFx0YnJlYWs7IiwKCQkJIn0iCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiU3dpdGNoIFN0YXRlbWVudCIKCX0sCgkiV2hpbGUgU3RhdGVtZW50IjogewoJCSJwcmVmaXgiOiAid2hpbGUiLAoJCSJib2R5IjogWwoJCQkid2hpbGUgKCR7MTpjb25kaXRpb259KSB7IiwKCQkJIlx0JFRNX1NFTEVDVEVEX1RFWFQkMCIsCgkJCSJ9IgoJCV0sCgkJImRlc2NyaXB0aW9uIjogIldoaWxlIFN0YXRlbWVudCIKCX0sCgkiRG8tV2hpbGUgU3RhdGVtZW50IjogewoJCSJwcmVmaXgiOiAiZG93aGlsZSIsCgkJImJvZHkiOiBbCgkJCSJkbyB7IiwKCQkJIlx0JFRNX1NFTEVDVEVEX1RFWFQkMCIsCgkJCSJ9IHdoaWxlICgkezE6Y29uZGl0aW9ufSk7IgoJCV0sCgkJImRlc2NyaXB0aW9uIjogIkRvLVdoaWxlIFN0YXRlbWVudCIKCX0sCgkiVHJ5LUNhdGNoIFN0YXRlbWVudCI6IHsKCQkicHJlZml4IjogInRyeWNhdGNoIiwKCQkiYm9keSI6IFsKCQkJInRyeSB7IiwKCQkJIlx0JFRNX1NFTEVDVEVEX1RFWFQkMCIsCgkJCSJ9IGNhdGNoICgkezE6ZXJyb3J9KSB7IiwKCQkJIlx0IiwKCQkJIn0iCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiVHJ5LUNhdGNoIFN0YXRlbWVudCIKCX0sCgkiU2V0IFRpbWVvdXQgRnVuY3Rpb24iOiB7CgkJInByZWZpeCI6ICJzZXR0aW1lb3V0IiwKCQkiYm9keSI6IFsKCQkJInNldFRpbWVvdXQoKCkgPT4geyIsCgkJCSJcdCRUTV9TRUxFQ1RFRF9URVhUJDAiLAoJCQkifSwgJHsxOnRpbWVvdXR9KTsiCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiU2V0IFRpbWVvdXQgRnVuY3Rpb24iCgl9LAoJIlNldCBJbnRlcnZhbCBGdW5jdGlvbiI6IHsKCQkicHJlZml4IjogInNldGludGVydmFsIiwKCQkiYm9keSI6IFsKCQkJInNldEludGVydmFsKCgpID0+IHsiLAoJCQkiXHQkVE1fU0VMRUNURURfVEVYVCQwIiwKCQkJIn0sICR7MTppbnRlcnZhbH0pOyIKCQldLAoJCSJkZXNjcmlwdGlvbiI6ICJTZXQgSW50ZXJ2YWwgRnVuY3Rpb24iCgl9LAoJIkltcG9ydCBTdGF0ZW1lbnQiOiB7CgkJInByZWZpeCI6ICJpbXBvcnQiLAoJCSJib2R5IjogWwoJCQkiaW1wb3J0IHsgJDAgfSBmcm9tIFwiJHsxOm1vZHVsZX1cIjsiCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiSW1wb3J0IGV4dGVybmFsIG1vZHVsZSIKCX0sCgkiUmVnaW9uIFN0YXJ0IjogewoJCSJwcmVmaXgiOiAiI3JlZ2lvbiIsCgkJImJvZHkiOiBbCgkJCSIvLyNyZWdpb24gJDAiCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiRm9sZGluZyBSZWdpb24gU3RhcnQiCgl9LAoJIlJlZ2lvbiBFbmQiOiB7CgkJInByZWZpeCI6ICIjZW5kcmVnaW9uIiwKCQkiYm9keSI6IFsKCQkJIi8vI2VuZHJlZ2lvbiIKCQldLAoJCSJkZXNjcmlwdGlvbiI6ICJGb2xkaW5nIFJlZ2lvbiBFbmQiCgl9LAoJIkxvZyB0byB0aGUgY29uc29sZSI6IHsKCQkicHJlZml4IjogImxvZyIsCgkJImJvZHkiOiBbCgkJCSJjb25zb2xlLmxvZygkMSk7IgoJCV0sCgkJImRlc2NyaXB0aW9uIjogIkxvZyB0byB0aGUgY29uc29sZSIKCX0sCgkiTG9nIHdhcm5pbmcgdG8gY29uc29sZSI6IHsKCQkicHJlZml4IjogIndhcm4iLAoJCSJib2R5IjogWwoJCQkiY29uc29sZS53YXJuKCQxKTsiCgkJXSwKCQkiZGVzY3JpcHRpb24iOiAiTG9nIHdhcm5pbmcgdG8gdGhlIGNvbnNvbGUiCgl9LAoJIkxvZyBlcnJvciB0byBjb25zb2xlIjogewoJCSJwcmVmaXgiOiAiZXJyb3IiLAoJCSJib2R5IjogWwoJCQkiY29uc29sZS5lcnJvcigkMSk7IgoJCV0sCgkJImRlc2NyaXB0aW9uIjogIkxvZyBlcnJvciB0byB0aGUgY29uc29sZSIKCX0sCgkibmV3IFByb21pc2UiOiB7CgkJInByZWZpeCI6ICJuZXdwcm9taXNlIiwKCQkiYm9keSI6IFsKCQkJIm5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsiLAoJCQkiXHQkVE1fU0VMRUNURURfVEVYVCQwIiwKCQkJIn0pIgoJCV0sCgkJImRlc2NyaXB0aW9uIjogIkNyZWF0ZSBhIG5ldyBQcm9taXNlIgoJfQp9Cg==", self.location).toString(), "application/json");
var manifest$2 = { name: "json", displayName: "JSON Language Basics", description: "Provides syntax highlighting & bracket matching in JSON files.", version: "1.0.0", publisher: "vscode", license: "MIT", engines: { vscode: "0.10.x" }, scripts: { "update-grammar": "node ./build/update-grammars.js" }, contributes: { languages: [{ id: "json", aliases: ["JSON", "json"], extensions: [".json", ".bowerrc", ".jscsrc", ".webmanifest", ".js.map", ".css.map", ".ts.map", ".har", ".jslintrc", ".jsonld", ".geojson", ".ipynb", ".vuerc"], filenames: ["composer.lock", ".watchmanconfig"], mimetypes: ["application/json", "application/manifest+json"], configuration: "./language-configuration.json" }, { id: "jsonc", aliases: ["JSON with Comments"], extensions: [".jsonc", ".eslintrc", ".eslintrc.json", ".jsfmtrc", ".jshintrc", ".swcrc", ".hintrc", ".babelrc"], filenames: ["babel.config.json", ".babelrc.json", ".ember-cli", "typedoc.json"], configuration: "./language-configuration.json" }, { id: "jsonl", aliases: ["JSON Lines"], extensions: [".jsonl"], filenames: [], configuration: "./language-configuration.json" }], grammars: [{ language: "json", scopeName: "source.json", path: "./syntaxes/JSON.tmLanguage.json" }, { language: "jsonc", scopeName: "source.json.comments", path: "./syntaxes/JSONC.tmLanguage.json" }, { language: "jsonl", scopeName: "source.json.lines", path: "./syntaxes/JSONL.tmLanguage.json" }] }, repository: { type: "git", url: "https://github.com/microsoft/vscode.git" } };
const { registerFileUrl: registerFileUrl$2 } = registerExtension(manifest$2);
registerFileUrl$2("./syntaxes/JSON.tmLanguage.json", new URL("/statetree-language/assets/JSON.tmLanguage-d7238f1c.json", self.location).toString(), "application/json");
registerFileUrl$2("./syntaxes/JSONC.tmLanguage.json", new URL("/statetree-language/assets/JSONC.tmLanguage-9f927bb3.json", self.location).toString(), "application/json");
registerFileUrl$2("./syntaxes/JSONL.tmLanguage.json", new URL("/statetree-language/assets/JSONL.tmLanguage-43993c39.json", self.location).toString(), "application/json");
registerFileUrl$2("./language-configuration.json", new URL("data:application/json;base64,ewoJImNvbW1lbnRzIjogewoJCSJsaW5lQ29tbWVudCI6ICIvLyIsCgkJImJsb2NrQ29tbWVudCI6IFsgIi8qIiwgIiovIiBdCgl9LAoJImJyYWNrZXRzIjogWwoJCVsieyIsICJ9Il0sCgkJWyJbIiwgIl0iXQoJXSwKCSJhdXRvQ2xvc2luZ1BhaXJzIjogWwoJCXsgIm9wZW4iOiAieyIsICJjbG9zZSI6ICJ9IiwgIm5vdEluIjogWyJzdHJpbmciXSB9LAoJCXsgIm9wZW4iOiAiWyIsICJjbG9zZSI6ICJdIiwgIm5vdEluIjogWyJzdHJpbmciXSB9LAoJCXsgIm9wZW4iOiAiKCIsICJjbG9zZSI6ICIpIiwgIm5vdEluIjogWyJzdHJpbmciXSB9LAoJCXsgIm9wZW4iOiAiJyIsICJjbG9zZSI6ICInIiwgIm5vdEluIjogWyJzdHJpbmciXSB9LAoJCXsgIm9wZW4iOiAiXCIiLCAiY2xvc2UiOiAiXCIiLCAibm90SW4iOiBbInN0cmluZyIsICJjb21tZW50Il0gfSwKCQl7ICJvcGVuIjogImAiLCAiY2xvc2UiOiAiYCIsICJub3RJbiI6IFsic3RyaW5nIiwgImNvbW1lbnQiXSB9CgldLAoJImluZGVudGF0aW9uUnVsZXMiOiB7CgkJImluY3JlYXNlSW5kZW50UGF0dGVybiI6ICIoeysoPz0oKFxcXFwufFteXCJcXFxcXSkqXCIoXFxcXC58W15cIlxcXFxdKSpcIikqW15cIn1dKikkKXwoXFxbKyg/PSgoXFxcXC58W15cIlxcXFxdKSpcIihcXFxcLnxbXlwiXFxcXF0pKlwiKSpbXlwiXFxdXSopJCkiLAoJCSJkZWNyZWFzZUluZGVudFBhdHRlcm4iOiAiXlxccypbfVxcXV0sP1xccyokIgoJfQp9Cg==", self.location).toString(), "application/json");
var manifest$1 = { name: "vscode-theme-seti", "private": true, version: "1.0.0", displayName: "Seti File Icon Theme", description: "A file icon theme made out of the Seti UI file icons", publisher: "vscode", license: "MIT", icon: "icons/seti-circular-128x128.png", scripts: { update: "node ./build/update-icon-theme.js" }, engines: { vscode: "*" }, contributes: { iconThemes: [{ id: "vs-seti", label: "Seti (Visual Studio Code)", path: "./icons/vs-seti-icon-theme.json" }] }, repository: { type: "git", url: "https://github.com/microsoft/vscode.git" } };
const { registerFileUrl: registerFileUrl$1 } = registerExtension(manifest$1);
registerFileUrl$1("./icons/vs-seti-icon-theme.json", new URL("/statetree-language/assets/vs-seti-icon-theme-c620a0be.json", self.location).toString(), "application/json");
registerFileUrl$1("icons/seti.woff", new URL("/statetree-language/assets/seti-99204524.woff", self.location).toString(), "font/woff");
var manifest = { name: "references-view", displayName: "Reference Search View", description: "Reference Search results as separate, stable view in the sidebar", icon: "media/icon.png", version: "1.0.0", publisher: "vscode", license: "MIT", engines: { vscode: "^1.67.0" }, capabilities: { virtualWorkspaces: true, untrustedWorkspaces: { supported: true } }, repository: { type: "git", url: "https://github.com/Microsoft/vscode-references-view" }, bugs: { url: "https://github.com/Microsoft/vscode-references-view/issues" }, categories: ["Programming Languages"], activationEvents: ["onCommand:references-view.find", "onCommand:editor.action.showReferences"], main: "./out/extension", browser: "./dist/extension.js", contributes: { configuration: { properties: { "references.preferredLocation": { description: "Controls whether 'Peek References' or 'Find References' is invoked when selecting CodeLens references.", type: "string", "default": "peek", "enum": ["peek", "view"], enumDescriptions: ["Show references in peek editor.", "Show references in separate view."] } } }, viewsContainers: { activitybar: [{ id: "references-view", icon: "$(references)", title: "References" }] }, views: { "references-view": [{ id: "references-view.tree", name: "Reference Search Results", when: "reference-list.isActive" }] }, commands: [{ command: "references-view.findReferences", title: "Find All References", category: "References" }, { command: "references-view.findImplementations", title: "Find All Implementations", category: "References" }, { command: "references-view.clearHistory", title: "Clear History", category: "References", icon: "$(clear-all)" }, { command: "references-view.clear", title: "Clear", category: "References", icon: "$(clear-all)" }, { command: "references-view.refresh", title: "Refresh", category: "References", icon: "$(refresh)" }, { command: "references-view.pickFromHistory", title: "Show History", category: "References" }, { command: "references-view.removeReferenceItem", title: "Dismiss", icon: "$(close)" }, { command: "references-view.copy", title: "Copy" }, { command: "references-view.copyAll", title: "Copy All" }, { command: "references-view.copyPath", title: "Copy Path" }, { command: "references-view.refind", title: "Rerun", icon: "$(refresh)" }, { command: "references-view.showCallHierarchy", title: "Show Call Hierarchy", category: "Calls" }, { command: "references-view.showOutgoingCalls", title: "Show Outgoing Calls", category: "Calls", icon: "$(call-outgoing)" }, { command: "references-view.showIncomingCalls", title: "Show Incoming Calls", category: "Calls", icon: "$(call-incoming)" }, { command: "references-view.removeCallItem", title: "Dismiss", icon: "$(close)" }, { command: "references-view.next", title: "Go to Next Reference", enablement: "references-view.canNavigate" }, { command: "references-view.prev", title: "Go to Previous Reference", enablement: "references-view.canNavigate" }, { command: "references-view.showTypeHierarchy", title: "Show Type Hierarchy", category: "Types" }, { command: "references-view.showSupertypes", title: "Show Supertypes", category: "Types", icon: "$(type-hierarchy-super)" }, { command: "references-view.showSubtypes", title: "Show Subtypes", category: "Types", icon: "$(type-hierarchy-sub)" }, { command: "references-view.removeTypeItem", title: "Dismiss", icon: "$(close)" }], menus: { "editor/context": [{ command: "references-view.findReferences", when: "editorHasReferenceProvider", group: "0_navigation@1" }, { command: "references-view.findImplementations", when: "editorHasImplementationProvider", group: "0_navigation@2" }, { command: "references-view.showCallHierarchy", when: "editorHasCallHierarchyProvider", group: "0_navigation@3" }, { command: "references-view.showTypeHierarchy", when: "editorHasTypeHierarchyProvider", group: "0_navigation@4" }], "view/title": [{ command: "references-view.clear", group: "navigation@3", when: "view == references-view.tree && reference-list.hasResult" }, { command: "references-view.clearHistory", group: "navigation@3", when: "view == references-view.tree && reference-list.hasHistory && !reference-list.hasResult" }, { command: "references-view.refresh", group: "navigation@2", when: "view == references-view.tree && reference-list.hasResult" }, { command: "references-view.showOutgoingCalls", group: "navigation@1", when: "view == references-view.tree && reference-list.hasResult && reference-list.source == callHierarchy &&  references-view.callHierarchyMode == showIncoming" }, { command: "references-view.showIncomingCalls", group: "navigation@1", when: "view == references-view.tree && reference-list.hasResult && reference-list.source == callHierarchy &&  references-view.callHierarchyMode == showOutgoing" }, { command: "references-view.showSupertypes", group: "navigation@1", when: "view == references-view.tree && reference-list.hasResult && reference-list.source == typeHierarchy &&  references-view.typeHierarchyMode != supertypes" }, { command: "references-view.showSubtypes", group: "navigation@1", when: "view == references-view.tree && reference-list.hasResult && reference-list.source == typeHierarchy &&  references-view.typeHierarchyMode != subtypes" }], "view/item/context": [{ command: "references-view.removeReferenceItem", group: "inline", when: "view == references-view.tree && viewItem == file-item || view == references-view.tree && viewItem == reference-item" }, { command: "references-view.removeCallItem", group: "inline", when: "view == references-view.tree && viewItem == call-item" }, { command: "references-view.removeTypeItem", group: "inline", when: "view == references-view.tree && viewItem == type-item" }, { command: "references-view.refind", group: "inline", when: "view == references-view.tree && viewItem == history-item" }, { command: "references-view.removeReferenceItem", group: "1", when: "view == references-view.tree && viewItem == file-item || view == references-view.tree && viewItem == reference-item" }, { command: "references-view.removeCallItem", group: "1", when: "view == references-view.tree && viewItem == call-item" }, { command: "references-view.removeTypeItem", group: "1", when: "view == references-view.tree && viewItem == type-item" }, { command: "references-view.refind", group: "1", when: "view == references-view.tree && viewItem == history-item" }, { command: "references-view.copy", group: "2@1", when: "view == references-view.tree && viewItem == file-item || view == references-view.tree && viewItem == reference-item" }, { command: "references-view.copyPath", group: "2@2", when: "view == references-view.tree && viewItem == file-item" }, { command: "references-view.copyAll", group: "2@3", when: "view == references-view.tree && viewItem == file-item || view == references-view.tree && viewItem == reference-item" }, { command: "references-view.showOutgoingCalls", group: "1", when: "view == references-view.tree && viewItem == call-item" }, { command: "references-view.showIncomingCalls", group: "1", when: "view == references-view.tree && viewItem == call-item" }, { command: "references-view.showSupertypes", group: "1", when: "view == references-view.tree && viewItem == type-item" }, { command: "references-view.showSubtypes", group: "1", when: "view == references-view.tree && viewItem == type-item" }], commandPalette: [{ command: "references-view.removeReferenceItem", when: "never" }, { command: "references-view.removeCallItem", when: "never" }, { command: "references-view.removeTypeItem", when: "never" }, { command: "references-view.copy", when: "never" }, { command: "references-view.copyAll", when: "never" }, { command: "references-view.copyPath", when: "never" }, { command: "references-view.refind", when: "never" }, { command: "references-view.findReferences", when: "editorHasReferenceProvider" }, { command: "references-view.clear", when: "reference-list.hasResult" }, { command: "references-view.clearHistory", when: "reference-list.isActive && !reference-list.hasResult" }, { command: "references-view.refresh", when: "reference-list.hasResult" }, { command: "references-view.pickFromHistory", when: "reference-list.isActive" }, { command: "references-view.next", when: "never" }, { command: "references-view.prev", when: "never" }] }, keybindings: [{ command: "references-view.findReferences", when: "editorHasReferenceProvider", key: "shift+alt+f12" }, { command: "references-view.next", when: "reference-list.hasResult", key: "f4" }, { command: "references-view.prev", when: "reference-list.hasResult", key: "shift+f4" }, { command: "references-view.showCallHierarchy", when: "editorHasCallHierarchyProvider", key: "shift+alt+h" }] }, scripts: { compile: "npx gulp compile-extension:references-view", watch: "npx gulp watch-extension:references-view" }, devDependencies: { "@types/node": "16.x" } };
const { registerFileUrl } = registerExtension(manifest);
registerFileUrl("./dist/extension.js", new URL("/statetree-language/assets/extension-91851a4e.js", self.location).toString(), "text/javascript");
registerFileUrl("dist/extension.js.map", new URL("/statetree-language/assets/extension.js-16b047aa.map", self.location).toString(), "application/json");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var typescriptVersion = "5.0.2";
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, monaco_editor_core_star);
var ModuleKind = /* @__PURE__ */ ((ModuleKind2) => {
  ModuleKind2[ModuleKind2["None"] = 0] = "None";
  ModuleKind2[ModuleKind2["CommonJS"] = 1] = "CommonJS";
  ModuleKind2[ModuleKind2["AMD"] = 2] = "AMD";
  ModuleKind2[ModuleKind2["UMD"] = 3] = "UMD";
  ModuleKind2[ModuleKind2["System"] = 4] = "System";
  ModuleKind2[ModuleKind2["ES2015"] = 5] = "ES2015";
  ModuleKind2[ModuleKind2["ESNext"] = 99] = "ESNext";
  return ModuleKind2;
})(ModuleKind || {});
var JsxEmit = /* @__PURE__ */ ((JsxEmit2) => {
  JsxEmit2[JsxEmit2["None"] = 0] = "None";
  JsxEmit2[JsxEmit2["Preserve"] = 1] = "Preserve";
  JsxEmit2[JsxEmit2["React"] = 2] = "React";
  JsxEmit2[JsxEmit2["ReactNative"] = 3] = "ReactNative";
  JsxEmit2[JsxEmit2["ReactJSX"] = 4] = "ReactJSX";
  JsxEmit2[JsxEmit2["ReactJSXDev"] = 5] = "ReactJSXDev";
  return JsxEmit2;
})(JsxEmit || {});
var NewLineKind = /* @__PURE__ */ ((NewLineKind2) => {
  NewLineKind2[NewLineKind2["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
  NewLineKind2[NewLineKind2["LineFeed"] = 1] = "LineFeed";
  return NewLineKind2;
})(NewLineKind || {});
var ScriptTarget = /* @__PURE__ */ ((ScriptTarget2) => {
  ScriptTarget2[ScriptTarget2["ES3"] = 0] = "ES3";
  ScriptTarget2[ScriptTarget2["ES5"] = 1] = "ES5";
  ScriptTarget2[ScriptTarget2["ES2015"] = 2] = "ES2015";
  ScriptTarget2[ScriptTarget2["ES2016"] = 3] = "ES2016";
  ScriptTarget2[ScriptTarget2["ES2017"] = 4] = "ES2017";
  ScriptTarget2[ScriptTarget2["ES2018"] = 5] = "ES2018";
  ScriptTarget2[ScriptTarget2["ES2019"] = 6] = "ES2019";
  ScriptTarget2[ScriptTarget2["ES2020"] = 7] = "ES2020";
  ScriptTarget2[ScriptTarget2["ESNext"] = 99] = "ESNext";
  ScriptTarget2[ScriptTarget2["JSON"] = 100] = "JSON";
  ScriptTarget2[
    ScriptTarget2["Latest"] = 99
    /* ESNext */
  ] = "Latest";
  return ScriptTarget2;
})(ScriptTarget || {});
var ModuleResolutionKind = /* @__PURE__ */ ((ModuleResolutionKind2) => {
  ModuleResolutionKind2[ModuleResolutionKind2["Classic"] = 1] = "Classic";
  ModuleResolutionKind2[ModuleResolutionKind2["NodeJs"] = 2] = "NodeJs";
  return ModuleResolutionKind2;
})(ModuleResolutionKind || {});
var LanguageServiceDefaultsImpl = class {
  constructor(compilerOptions, diagnosticsOptions, workerOptions, inlayHintsOptions, modeConfiguration) {
    __publicField(this, "_onDidChange", new monaco_editor_core_exports.Emitter());
    __publicField(this, "_onDidExtraLibsChange", new monaco_editor_core_exports.Emitter());
    __publicField(this, "_extraLibs");
    __publicField(this, "_removedExtraLibs");
    __publicField(this, "_eagerModelSync");
    __publicField(this, "_compilerOptions");
    __publicField(this, "_diagnosticsOptions");
    __publicField(this, "_workerOptions");
    __publicField(this, "_onDidExtraLibsChangeTimeout");
    __publicField(this, "_inlayHintsOptions");
    __publicField(this, "_modeConfiguration");
    this._extraLibs = /* @__PURE__ */ Object.create(null);
    this._removedExtraLibs = /* @__PURE__ */ Object.create(null);
    this._eagerModelSync = false;
    this.setCompilerOptions(compilerOptions);
    this.setDiagnosticsOptions(diagnosticsOptions);
    this.setWorkerOptions(workerOptions);
    this.setInlayHintsOptions(inlayHintsOptions);
    this.setModeConfiguration(modeConfiguration);
    this._onDidExtraLibsChangeTimeout = -1;
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get onDidExtraLibsChange() {
    return this._onDidExtraLibsChange.event;
  }
  get modeConfiguration() {
    return this._modeConfiguration;
  }
  get workerOptions() {
    return this._workerOptions;
  }
  get inlayHintsOptions() {
    return this._inlayHintsOptions;
  }
  getExtraLibs() {
    return this._extraLibs;
  }
  addExtraLib(content, _filePath) {
    let filePath;
    if (typeof _filePath === "undefined") {
      filePath = `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
    } else {
      filePath = _filePath;
    }
    if (this._extraLibs[filePath] && this._extraLibs[filePath].content === content) {
      return {
        dispose: () => {
        }
      };
    }
    let myVersion = 1;
    if (this._removedExtraLibs[filePath]) {
      myVersion = this._removedExtraLibs[filePath] + 1;
    }
    if (this._extraLibs[filePath]) {
      myVersion = this._extraLibs[filePath].version + 1;
    }
    this._extraLibs[filePath] = {
      content,
      version: myVersion
    };
    this._fireOnDidExtraLibsChangeSoon();
    return {
      dispose: () => {
        let extraLib = this._extraLibs[filePath];
        if (!extraLib) {
          return;
        }
        if (extraLib.version !== myVersion) {
          return;
        }
        delete this._extraLibs[filePath];
        this._removedExtraLibs[filePath] = myVersion;
        this._fireOnDidExtraLibsChangeSoon();
      }
    };
  }
  setExtraLibs(libs) {
    for (const filePath in this._extraLibs) {
      this._removedExtraLibs[filePath] = this._extraLibs[filePath].version;
    }
    this._extraLibs = /* @__PURE__ */ Object.create(null);
    if (libs && libs.length > 0) {
      for (const lib of libs) {
        const filePath = lib.filePath || `ts:extralib-${Math.random().toString(36).substring(2, 15)}`;
        const content = lib.content;
        let myVersion = 1;
        if (this._removedExtraLibs[filePath]) {
          myVersion = this._removedExtraLibs[filePath] + 1;
        }
        this._extraLibs[filePath] = {
          content,
          version: myVersion
        };
      }
    }
    this._fireOnDidExtraLibsChangeSoon();
  }
  _fireOnDidExtraLibsChangeSoon() {
    if (this._onDidExtraLibsChangeTimeout !== -1) {
      return;
    }
    this._onDidExtraLibsChangeTimeout = window.setTimeout(() => {
      this._onDidExtraLibsChangeTimeout = -1;
      this._onDidExtraLibsChange.fire(void 0);
    }, 0);
  }
  getCompilerOptions() {
    return this._compilerOptions;
  }
  setCompilerOptions(options) {
    this._compilerOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  getDiagnosticsOptions() {
    return this._diagnosticsOptions;
  }
  setDiagnosticsOptions(options) {
    this._diagnosticsOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  setWorkerOptions(options) {
    this._workerOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  setInlayHintsOptions(options) {
    this._inlayHintsOptions = options || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
  setMaximumWorkerIdleTime(value) {
  }
  setEagerModelSync(value) {
    this._eagerModelSync = value;
  }
  getEagerModelSync() {
    return this._eagerModelSync;
  }
  setModeConfiguration(modeConfiguration) {
    this._modeConfiguration = modeConfiguration || /* @__PURE__ */ Object.create(null);
    this._onDidChange.fire(void 0);
  }
};
var typescriptVersion2 = typescriptVersion;
var modeConfigurationDefault = {
  completionItems: true,
  hovers: true,
  documentSymbols: true,
  definitions: true,
  references: true,
  documentHighlights: true,
  rename: true,
  diagnostics: true,
  documentRangeFormattingEdits: true,
  signatureHelp: true,
  onTypeFormattingEdits: true,
  codeActions: true,
  inlayHints: true
};
var typescriptDefaults = new LanguageServiceDefaultsImpl({
  allowNonTsExtensions: true,
  target: 99
  /* Latest */
}, { noSemanticValidation: false, noSyntaxValidation: false, onlyVisible: false }, {}, {}, modeConfigurationDefault);
var javascriptDefaults = new LanguageServiceDefaultsImpl({
  allowNonTsExtensions: true,
  allowJs: true,
  target: 99
  /* Latest */
}, { noSemanticValidation: true, noSyntaxValidation: false, onlyVisible: false }, {}, {}, modeConfigurationDefault);
var getTypeScriptWorker = () => {
  return getMode().then((mode) => mode.getTypeScriptWorker());
};
var getJavaScriptWorker = () => {
  return getMode().then((mode) => mode.getJavaScriptWorker());
};
monaco_editor_core_exports.languages.typescript = {
  ModuleKind,
  JsxEmit,
  NewLineKind,
  ScriptTarget,
  ModuleResolutionKind,
  typescriptVersion: typescriptVersion2,
  typescriptDefaults,
  javascriptDefaults,
  getTypeScriptWorker,
  getJavaScriptWorker
};
function getMode() {
  {
    return __vitePreload(() => import("./tsMode-436014e9.js"), true ? ["assets/tsMode-436014e9.js","assets/theme-defaults-1df7f429.js","assets/index-3bddf13b.js","assets/index-734057e1.css","assets/theme-defaults-61c0c9ec.css"] : void 0);
  }
}
monaco_editor_core_exports.languages.onLanguage("typescript", () => {
  return getMode().then((mode) => mode.setupTypeScript(typescriptDefaults));
});
monaco_editor_core_exports.languages.onLanguage("javascript", () => {
  return getMode().then((mode) => mode.setupJavaScript(javascriptDefaults));
});
const MonacoEditorReactComp = reactExports.lazy(() => __vitePreload(() => import("./index-ca8d23e0.js").then((n) => n.a1), true ? ["assets/index-ca8d23e0.js","assets/index-3bddf13b.js","assets/index-734057e1.css","assets/theme-defaults-1df7f429.js","assets/theme-defaults-61c0c9ec.css","assets/index-0b30e76e.css"] : void 0));
languages.typescript.typescriptDefaults.setCompilerOptions({
  jsx: languages.typescript.JsxEmit.Preserve,
  target: languages.typescript.ScriptTarget.ES2020,
  esModuleInterop: true
});
function ReactTs({
  code,
  filename,
  language = "javascript",
  onChange
}) {
  const ref = reactExports.useRef(null);
  const latestCode = reactExports.useRef(code);
  const userConfig = reactExports.useMemo(() => ({
    htmlElement: void 0,
    wrapperConfig: {
      serviceConfig: {
        // userServices: {
        //   ...getExtensionServiceOverride(toWorkerConfig(ExtensionHostWorker)),
        // },
        enableThemeService: true,
        enableTextmateService: true,
        enableModelService: true,
        configureEditorOrViewsService: {},
        configureConfigurationService: {
          defaultWorkspaceUri: "/tmp/"
        },
        enableLanguagesService: true,
        enableKeybindingsService: true,
        debugLogging: true
      },
      editorAppConfig: {
        $type: "vscodeApi",
        languageId: language,
        useDiffEditor: false,
        // theme: 'vs-dark',
        code,
        codeUri: filename,
        userConfiguration: {
          json: `{
"workbench.colorTheme": "Default Dark Modern",
"editor.guides.bracketPairsHorizontal": "active",
"editor.lightbulb.enabled": true,
"editor.minimap.enabled": false
}`
        }
      }
    }
  }), [code, filename]);
  reactExports.useEffect(() => {
    var _a;
    if (latestCode.current !== code) {
      (_a = ref.current) == null ? void 0 : _a.getEditorWrapper().updateModel({
        code
      });
    }
  }, [code, filename]);
  const onTextChanged = (text, isDirty) => {
    latestCode.current = text;
    if (onChange) {
      onChange(text, isDirty);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MonacoEditorReactComp,
    {
      className: "editor",
      ref,
      userConfig,
      style: {
        paddingTop: "5px",
        height: "100%"
      },
      onLoad: () => {
        const reactEditor = ref.current;
        const wrapper = reactEditor.getEditorWrapper();
        const editor = wrapper.getEditor();
        editor.getModel();
      },
      onTextChanged
    }
  );
}
function getLanguageOfFile(filePath) {
  const extensionDotIndex = filePath.lastIndexOf(".");
  const extension = filePath.slice(extensionDotIndex + 1);
  switch (extension) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return "javascript";
    case "vue":
    case "html":
      return "html";
    case "css":
    case "scss":
    case "less":
      return "css";
    case "json":
      return "json";
    default:
      return extension ?? "javascript";
  }
}
function SandpackMonacoEditor({ filename, afterEdit, ...rest }) {
  reactExports.useRef(null);
  const { sandpack } = useSandpack();
  const code = sandpack.files[filename].code;
  const latestCode = reactExports.useRef(code);
  const language = reactExports.useMemo(() => getLanguageOfFile(filename), [filename]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ReactTs, { ...rest, language, code, filename, onChange: (code2) => {
    latestCode.current = code2;
    sandpack.updateFile(filename, code2);
    if (afterEdit) {
      afterEdit(code2);
    }
  } });
}
const SandpackMonacoEditor$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SandpackMonacoEditor
}, Symbol.toStringTag, { value: "Module" }));
export {
  SandpackMonacoEditor$1 as S,
  typescriptDefaults as t
};
