/**
 * English dictionary — the single source of static key types.
 * Keys are added here FIRST, then zh-CN.ts. `as const` is required for
 * compile-time key checking (StaticKey = keyof typeof en).
 */
export const en = {
  // common (see plan glossary for the full initial set)
  'common.close': 'Close',
  'common.save': 'Save',
  'common.cancel': 'Cancel',
  'common.delete': 'Delete',
  'common.add': 'Add',
  'common.edit': 'Edit',
  'common.search': 'Search',
  'common.loading': 'Loading…',
  'common.copy': 'Copy',
  'common.copied': 'Copied!',
  'common.download': 'Download',
  'common.import': 'Import',
  'common.export': 'Export',
  'common.back': 'Back',
  'common.next': 'Next',
  'common.done': 'Done',
  'common.none': 'None',
  'common.entities': 'Entities',
  'common.relationships': 'Relationships',
  'common.properties': 'Properties',

  // quest panel chrome (data-driven quest text lives in src/data files)
  'quest.panelTitle': 'Quests',
  'quest.abandon': 'Abandon',
  'quest.earnedBadges': 'Earned Badges ({count})',
  'quest.points': '+{count} pts',
  'quest.totalPoints': 'Total: {count} points',
  'quest.difficulty.beginner': 'beginner',
  'quest.difficulty.intermediate': 'intermediate',
  'quest.difficulty.advanced': 'advanced',

  // test fixtures
  'test.enOnlyFixture': 'English only fixture',
} as const;
