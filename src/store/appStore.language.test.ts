import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useAppStore } from './appStore';

describe('appStore language state', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('defaults to zh-CN when localStorage is empty', async () => {
    vi.resetModules();
    const { useAppStore: freshStore } = await import('./appStore');
    expect(freshStore.getState().language).toBe('zh-CN');
  });

  it('setLanguage updates state and persists to localStorage', () => {
    useAppStore.getState().setLanguage('en');
    expect(useAppStore.getState().language).toBe('en');
    expect(localStorage.getItem('language')).toBe('en');

    useAppStore.getState().setLanguage('zh-CN');
    expect(useAppStore.getState().language).toBe('zh-CN');
    expect(localStorage.getItem('language')).toBe('zh-CN');
  });

  it('invalid stored value falls back to zh-CN', async () => {
    localStorage.setItem('language', 'klingon');
    vi.resetModules();
    const { useAppStore: freshStore } = await import('./appStore');
    expect(freshStore.getState().language).toBe('zh-CN');
  });

  it('initializes from a stored en value', async () => {
    localStorage.setItem('language', 'en');
    vi.resetModules();
    const { useAppStore: freshStore } = await import('./appStore');
    expect(freshStore.getState().language).toBe('en');
  });
});
