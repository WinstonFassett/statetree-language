# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Root
npm install
npm run langium:generate      # regenerate AST types from statetree.langium (must run after grammar changes)
npm run build                 # tsc compile
npm run build:deps            # langium:generate + build + build:worker + build:monarch (full rebuild)
npm run build:worker          # bundle language server as IIFE for the playground web worker
npm run build:monarch         # compile Monarch syntax highlighter
npm run watch                 # tsc watch
npm run langium:watch         # regenerate on grammar changes
npm run lint

# Playground (cd playground first)
npm install
npm run dev                   # Vite dev server at :5173 (use portless alias)
npm run deploy:ghpages        # build with /statetree-language/ base and publish to gh-pages
```

**Important:** The playground dev server requires `out/language/statetree-server-worker.js` to exist. Run `npm run build:deps` at the repo root before `npm run dev` in the playground.

## Architecture

### Layer stack (bottom → top)

1. **Grammar** — `src/language/statetree.langium` (~30 lines). The entire language. Langium generates `src/language/generated/` (AST types, parser, module) from this — never edit generated files.

2. **Language services** — `src/language/`: module wiring (`statetree-module.ts`), validator, scoping, formatter, and `convertFromXState.ts`. `statetree-module.ts` is the DI root — it wires Langium's service container.

3. **Codegen** — `src/language/codegen/`. The hub is `expandAst.ts`: it mutates the AST in place to materialize `loop`/`sequence` sugar into explicit transitions (idempotent via a Symbol guard). Everything else in codegen calls `expandAst` first. Generators: Matchina, XState, JavaScript, Statetree (round-trip source emit).

4. **CLI** — `src/cli/`. Thin commander wrapper over codegen and `convertFromXState`.

5. **Extension** — `src/extension/main.ts`. Starts the LSP client; delegates everything to the language server. `syntaxes/statetree.tmLanguage.json` is generated from `statetree.monarch.ts`.

6. **Playground** — `playground/`. Vite + React. Runs the language server in a web worker (`playground/src/editor/vscode/tools/workers.ts` → `userWorker.ts`). The worker bundle is the compiled output of `src/language/statetree-worker-main.ts`. The playground imports directly from `../../../src/language/` (relative path coupling — a known issue to resolve when extracting packages).

### Key design facts

- `expandAst` mutates the Langium AST in place and must be called before any generator. Calling it twice is safe (idempotent).
- The AST has no state data — only states and events. All generators emit data-less machines. This is intentional and a known gap vs. Matchina's typed design.
- Scoping is local: transitions resolve to siblings and ancestors, not into a different branch's children.
- Langium version is pinned to ~1.2.0 intentionally — do not upgrade without a dedicated effort.
- The `playground/src/sandpack/` subtree is older/experimental UI; `playground/src/viz/` and `playground/src/statetree-machine/` are the active panels.

### Planned evolution

The goal is to extract publishable units from the current monolith. Tentative split:
- `packages/grammar` or `packages/core` — grammar, generated types, module/validator/scoping
- `packages/codegen` — generators (depends on core)
- `packages/cli` — CLI (depends on core + codegen)
- `packages/vscode` — extension + syntaxes (depends on core)
- `playground/` — stays separate

A single-package / multiple-exports approach is also on the table over a full monorepo split.
