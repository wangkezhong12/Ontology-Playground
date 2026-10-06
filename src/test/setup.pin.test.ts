import { describe, it, expect } from 'vitest';
import { useAppStore } from '../store/appStore';

// Fails if the top-level pin in src/test/setup.ts is moved/renamed/broken:
// the store must have initialized from localStorage 'language'='en' set by
// the setup file BEFORE this module imported appStore.
describe('test setup language pin', () => {
  it('initializes the store to en via the setup-file pin', () => {
    expect(useAppStore.getState().language).toBe('en');
  });
});
