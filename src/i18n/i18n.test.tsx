import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { useAppStore } from '../store/appStore';
import { t, useI18n } from './index';

// File-level setup: the store is a singleton shared across describes, so
// pinning zh here (not inside describe('t()')) keeps the useI18n test
// independent of ordering — the t() 'en locale' test must not leak into it.
beforeEach(() => {
  useAppStore.getState().setLanguage('zh-CN');
});

describe('t()', () => {
  it('returns zh for a static key', () => {
    expect(t('common.close')).toBe('关闭');
  });

  it('falls back to en when the zh key is missing', () => {
    // test.enOnlyFixture exists in en.ts but deliberately not in zh-CN.ts
    expect(t('test.enOnlyFixture')).toBe('English only fixture');
  });

  it('uses en values directly in en locale', () => {
    useAppStore.getState().setLanguage('en');
    expect(t('common.close')).toBe('Close');
  });

  it('uses the mandatory fallback for data-driven keys', () => {
    expect(t('quest.gen-xyz.title', undefined, 'Generated Quest')).toBe('Generated Quest');
  });

  it('interpolates {var} placeholders', () => {
    expect(t('quest.earnedBadges', { count: 3 })).toBe('已获得徽章（3）');
  });

  it('leaves placeholders without matching vars untouched', () => {
    useAppStore.getState().setLanguage('en');
    // {foo} is not referenced by '+{count} pts', so {count} stays literal
    expect(t('quest.points', { foo: 2 })).toBe('+{count} pts');
  });
});

describe('useI18n()', () => {
  it('exposes t, language, setLanguage', () => {
    let hook: ReturnType<typeof useI18n> | undefined;
    const Probe = () => {
      hook = useI18n();
      return null;
    };
    render(<Probe />);
    expect(hook).toBeDefined();
    expect(hook!.language).toBe('zh-CN');
    expect(typeof hook!.t).toBe('function');
    expect(typeof hook!.setLanguage).toBe('function');
  });

  it('re-renders with the new language when the store toggles', () => {
    const Probe = () => {
      const { t } = useI18n();
      return <span>{t('common.close')}</span>;
    };
    render(<Probe />);
    expect(screen.getByText('关闭')).toBeInTheDocument();
    act(() => {
      useAppStore.getState().setLanguage('en');
    });
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
});
