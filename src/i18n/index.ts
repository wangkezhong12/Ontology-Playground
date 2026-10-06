import { useAppStore } from '../store/appStore';
import type { LanguageId } from '../store/appStore';
import { en } from './en';
import { zhCN } from './zh-CN';

export type { LanguageId };
export type StaticKey = keyof typeof en;
export type Vars = Record<string, string | number>;

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in vars ? String(vars[name]) : match
  );
}

/**
 * Resolve a key. Language is read from the store singleton AT CALL TIME —
 * never at module evaluation. This will matter once questGenerator imports
 * t() (Chunk 4), forming the cycle appStore → questGenerator → i18n →
 * appStore — benign while all reads stay deferred to call time.
 */
function lookup(key: string, fallback?: string): string {
  const lang = useAppStore.getState().language;
  if (lang === 'zh-CN') {
    const zh = zhCN[key];
    if (typeof zh === 'string') return zh;
  }
  const english = en[key as StaticKey];
  if (typeof english === 'string') return english;
  return fallback ?? key;
}

// Overload 1 — static keys, compile-time checked.
export function t(key: StaticKey, vars?: Vars): string;
// Overload 2 — data-driven keys; fallback is REQUIRED and holds the English
// text from the data file (quests, templates).
// Convention: NEVER pass a fallback for static keys — a typo'd static key
// would then compile silently instead of failing type-check.
export function t(key: string, vars: Vars | undefined, fallback: string): string;
export function t(key: string, vars?: Vars, fallback?: string): string {
  return interpolate(lookup(key, fallback), vars);
}

export function useI18n() {
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  return { t, language, setLanguage };
}
