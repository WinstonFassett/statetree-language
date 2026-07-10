# Statetree

A little DSL for sketching state machines, plus the toolchain to turn those sketches
into runnable machines, diagrams, and code.

This is an experiment. It's coming together, but it isn't a packaged, reusable library
yet — expect rough edges (see [Known limits](#known-limits)). Built on
[Langium](https://langium.org/).

> Live playground: https://winstonfassett.github.io/statetree-language/

## What's in here

| Path | What it is |
| --- | --- |
| [`src/language/statetree.langium`](src/language/statetree.langium) | The grammar — the whole language in ~30 lines |
| [`src/language/codegen/`](src/language/codegen/) | Generators: Matchina, XState, JavaScript, Statetree |
| [`src/cli/`](src/cli/) | `statetree-cli` — generate JS, import XState JSON |
| [`src/extension/`](src/extension/) | VSCode extension (highlighting + language services) |
| [`example/`](example/) | Sample `.statetree` files (all parse + generate) |
| [`playground/`](playground/) | Vite + React web editor with live diagrams |

## The language

A machine is states and the events that move between them. Write a state, give it
transitions with `=>`:

```statetree
states {
  Red    { tick => Green }
  Green  { tick => Yellow }
  Yellow { tick => Red }
}
```

That's a traffic light. `tick` in `Red` goes to `Green`, and so on. `=>` is the common
form; `to`, `:`, and `go` all mean the same thing.

Name a starting state with `initialState`:

```statetree
initialState Initializing

states {
  Initializing  { gotEmail => CheckingEmail }
  CheckingEmail { sentOtp  => AwaitingOtp }
  AwaitingOtp   { valid => Authenticated
                  invalid => Retry }
  Authenticated {}
  Retry {}
}
```

See [`example/checkout.statetree`](example/checkout.statetree) for the full version.

### Loops and sequences

Instead of wiring every transition by hand, `loop` cycles a group of states on one event:

```statetree
loop on tick { Red Green Yellow }
```

`Red → Green → Yellow → Red`, all on `tick`. `sequence` is the same but stops at the end
instead of wrapping. Nest them for hierarchy:

```statetree
loop on switch {
  On  { loop on tick  { Red Green Yellow } }
  Off { loop on flash { RedOn RedOff } }
}
```

The outer machine flips `On`/`Off` on `switch`; each child runs its own loop. See
[`example/trafficlight.statetree`](example/trafficlight.statetree).

### Reference

| Construct | Meaning |
| --- | --- |
| `Name { event => Target }` | A state with transitions. `state` keyword optional; `=>` / `to` / `:` / `go` interchangeable. |
| `initialState Name` | Starting state of a machine or compound state. |
| `states { … }` | A group of child states. |
| `loop on event { … }` | Children cycle on `event`, wrapping last → first. |
| `sequence` | Like `loop` but no wrap. |
| `statemachine Name` | Optional name for the machine. |
| `# …`  `// …`  `/* … */` | Comments. |

Files use `.statetree`.

## CLI

```bash
# Generate JavaScript from a .statetree file
node ./bin/cli generate example/trafficlight.statetree [-d <dir>]

# Import an XState JSON definition, emit .statetree source
node ./bin/cli import machine.json out.statetree [-d <dir>]
```

## Code generation

The AST is shape-only (states and events, no state data), which makes it cheap to project
into several targets:

- **Matchina** ([`generateMatchina.ts`](src/language/codegen/generateMatchina.ts)) — emits
  [Matchina](https://github.com/WinstonFassett/matchina) machines. Mode is inferred from the
  AST: `flat`, `flattened` (`createHSM`), or `nested` (`submachine()`).
- **XState** ([`generateXState.ts`](src/language/codegen/generateXState.ts)) — XState machine
  config; round-trips with the importer.
- **JavaScript** ([`generateJavaScript.ts`](src/language/codegen/generateJavaScript.ts)) — the
  CLI's default `generate` target.
- **Statetree** ([`generateStatetree.ts`](src/language/codegen/generateStatetree.ts)) — emits
  `.statetree` source, used by the XState import.

## VSCode extension

Contributes the `statetree` language: TextMate highlighting ([`syntaxes/`](syntaxes/)),
bracket matching, comments, and Langium language services (validation, scoping, formatting)
over `.statetree` files. Activates on `onLanguage:statetree`.

## Playground

[`playground/`](playground/) runs the language server in a web worker behind a Monaco editor
and renders the machine live: Matchina viz (SVG), Mermaid, PlantUML, and a force-graph view,
plus a clickable Matchina runner. Deployed at the link up top.

## Development

```bash
npm install
npm run build:deps      # langium generate + build extension + worker + monarch syntax

npm run watch           # tsc -b --watch
npm run langium:watch   # regenerate on grammar changes
npm run lint

cd playground
npm install
npm run dev             # dev server
npm run deploy:ghpages  # build with /statetree-language/ base, publish to gh-pages
```

The playground dev server needs the built worker at
`out/language/statetree-server-worker.js`. Run `npm run build:deps` at the repo root before
`playground` `npm run dev` so `copy:worker` has something to copy.

## Known limits

- **No state data.** The AST models states and events only — no context or guards. The
  Matchina generator emits data-less states as a result.
- **Scoping is local.** A transition resolves to its own siblings and to states in ancestor
  groups, but not into a *different* branch's nested children. Keep cross-cutting targets in
  a shared `states { … }` block.
- **No published package.** Nothing on npm or the VSCode Marketplace yet — run it from source.

## License

MIT
