import '@testing-library/jest-dom/vitest';

// Pin the UI language to English for tests: existing suites assert English
// strings. MUST be top-level — vitest setupFiles execute before test modules
// import, so this precedes getInitialLanguage()'s module-load evaluation.
// (A beforeEach hook would run too late.) Tests that need zh call
// useAppStore.getState().setLanguage('zh-CN') explicitly.
localStorage.setItem('language', 'en');
