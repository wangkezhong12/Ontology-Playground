# Design: Lightweight UI i18n with Chinese (zh-CN) Localization

- **Date**: 2026-10-06
- **Branch**: `feature/i18n-zh-cn`
- **Status**: Approved by user (with amendment: quests + designer templates included)

## Context

Ontology-Playground is a fully-English React 19 + TypeScript + Vite SPA with zero
i18n infrastructure. The user (Chinese-speaking) forked it locally and wants the
UI localized to Chinese. The fork must stay mergeable with upstream, so strings
move into dictionaries rather than being overwritten in place.

## Goals

1. All user-facing UI strings render in Chinese by default (`zh-CN`).
2. One-click toggle to English in the Header; choice persisted to localStorage.
3. No new runtime dependencies (no react-i18next). Reuse the existing Zustand
   `appStore` and follow its established theme-persistence pattern.
4. Compile-time safety: dictionary keys are type-checked; missing zh keys fall
   back to English values, never to raw keys on screen.
5. Existing English-asserting tests keep passing with zero edits.

## Non-Goals

- Translating catalogue content (`catalogue/**/*.rdf` metadata, compiled
  `public/catalogue.json`): ontology names/descriptions stay English.
- Translating Ontology School content (`content/learn/**`, `public/learn.json`).
- Translating ontology *data* itself: entity type names, property names,
  relationship names (e.g. `Customer`, `orderId`, `places`) stay English. This
  is deliberate — they are domain identifiers mirrored in RDF exports.
- Browser language auto-detection (default is unconditionally `zh-CN`).
- Pluralization rules (Chinese has no plural morphology; simple `{var}`
  interpolation suffices).

## Architecture

### Dictionary module

```
src/i18n/
├── index.ts    # t(), useI18n(), LanguageId, helper types
├── en.ts       # English dictionary, `as const` — source of key types
└── zh-CN.ts    # Chinese dictionary; Record<keyof typeof en, string> for
                # static keys, plus extra data-driven quest/template keys
```

### `t()` API

```ts
type Vars = Record<string, string | number>;
function t(key: string, vars?: Vars, fallback?: string): string;
```

- Resolution order: `zh[key] → en[key] → fallback → key`.
  In `en` locale: `en[key] → fallback → key`.
- `{var}` placeholder replacement only: `t('stats.entities', { count: 3 })`.
- `fallback` exists for **data-driven keys** whose English text lives in data
  files (quests, templates), not in `en.ts` — see below.
- `useI18n()` hook subscribes to `appStore.language` so components re-render on
  toggle. (Direct `t()` module import is fine for non-React modules; it reads
  current language from the store singleton.)

### Language state (mirrors the theme pattern in `appStore.ts`)

- `language: 'zh-CN' | 'en'` on `AppState`; `setLanguage(lang)`.
- Persisted to `localStorage['language']`; invalid/missing value falls back to
  `'zh-CN'`.
- `getInitialLanguage()` runs once at module load (same shape as
  `getInitialTheme()`).
- Header gets a compact `中 / EN` toggle next to the theme menu.
- `document.title` is updated on language change (`index.html` stays English
  as the static fallback).

### Static UI strings (components)

~30 files: JSX text, `placeholder`, `title`, `aria-label`, toast copy, modal
copy, command palette labels, guided tour steps, welcome modal. Each string is
replaced with a `t('ns.key')` call. Namespaces follow component areas
(`header.*`, `inspector.*`, `designer.*`, `learn.*`, `modal.*`, `tour.*`,
`quest.*`…). Estimated 350–450 keys.

The embed entry (`src/embed.tsx` + `EmbedWidget.tsx`) uses the same `t()` and
follows the store default.

### Data-driven strings (quests, designer templates) — amendment

These live in `src/data/` as structured objects with English text. The English
text stays in the data files and serves as the `fallback`; Chinese translations
are keyed by stable ids in `zh-CN.ts`:

- `src/data/quests.ts` (5 static quests):
  `quest.<questId>.title`, `.description`, `.step.<stepId>.instruction`, `.hint`
- `src/data/questGenerator.ts` (dynamically generated quests for loaded
  ontologies): the generator's instruction/hint *templates* become `t()` calls
  with keys in both dictionaries (`questGen.*`). Interpolated entity names
  remain English per Non-Goals — mixed-language sentences ("点击 Customer 实体")
  are accepted and standard for this fork.
- `src/data/designerTemplates.ts`: `template.<id>.name` / `.description` via
  `t(key, undefined, template.name)`. Template *contents* (entity types,
  properties, relationships inside the template) stay English.

Render sites (`QuestPanel.tsx`, designer template picker) wrap fields through
`t()`; the `Quest` / template interfaces are unchanged.

## Testing

1. **Existing tests**: `src/test/setup.ts` sets `localStorage['language']='en'`
   before each suite so all current English-text assertions pass untouched.
2. **New unit tests** (`src/i18n/i18n.test.ts`): resolution order (zh → en →
   fallback → key), `{var}` interpolation, locale switching.
3. **New smoke tests**: 2–3 key components (Header, QuestPanel) render Chinese
   strings when language is `zh-CN`.
4. **Quality gates** (per AGENTS.md): `npx tsc --noEmit`, `npm test`,
   `npm run build`.

## Delivery plan (incremental conventional commits on `feature/i18n-zh-cn`)

1. `feat: add i18n module (t, dictionaries, appStore language state)` — infra.
2. `feat: localize app shell (Header, App, toggle, document.title)`.
3. `feat: localize main-view panels (Inspector, Stats, Quest panel)`.
4. `feat: localize modals (About, Help, ImportExport, Gallery, DataSources,
   Summary, NLBuilder, FabricExport, Welcome, CommandPalette, GuidedTour)`.
5. `feat: localize LearnPage and Designer (largest surface)`.
6. `feat: localize quests, quest generator, designer templates (data layer)`.
7. `feat: localize embed widget entry`.
8. `test: pin test language to en; add i18n unit + zh smoke tests`.
9. `docs: document language toggle in README`.

Each step keeps the build green; final step runs full gates.

## Risks / mitigations

- **Missed strings** → fallback shows English, never breaks; grep sweep for
  raw English literals in components as a final pass.
- **Upstream merges** → all changes are additive (new module + mechanical
  `t()` wrapping); conflict surface is per-line but predictable.
- **Test breakage from zh default** → setup pins `en` for tests.
