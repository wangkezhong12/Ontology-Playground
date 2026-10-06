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

  // header
  'header.preview': '(Preview)',
  'header.untitled': 'Untitled Ontology',
  'header.points': 'points',
  'header.badges': 'badges',
  'header.share': 'Share',
  'header.copied': 'Copied!',
  'header.downloadedRdf': 'Downloaded RDF',
  'header.encoding': 'Encoding…',
  'header.shareTitleLink': 'Copy shareable link to this ontology',
  'header.shareTitleDownload': 'Share this ontology via link',
  'header.summary': 'Summary',
  'header.summaryTitle': 'View Ontology Summary',
  'header.aiBuilder': 'AI Builder',
  'header.catalogue': 'Catalogue',
  'header.designer': 'Designer',
  'header.school': 'Ontology School',
  'header.importExport': 'Import / Export',
  'header.help': 'Help',
  'header.about': 'About',
  'header.dataSources': 'Data Sources',
  'header.theme': 'Theme',
  'header.menu': 'Menu',
  'header.theme.dark': 'Dark',
  'header.theme.light': 'Light',
  'header.theme.aurora': 'Aurora',
  'header.theme.crimson': 'Crimson',

  // app shell
  'app.graph': 'Graph',
  'app.quests': 'Quests',
  'app.inspector': 'Inspector',
  'app.query': 'Query',
  'app.close': '✕ Close',
  'app.title': 'Ontology Playground (Preview) | Interactive Ontology Explorer',
  'app.titleZh': 'Ontology Playground（预览）| 交互式本体浏览器',
  'toast.questComplete': 'Quest Complete! Earned: {badge}',
  // command palette
  'palette.catalogue': 'Open Catalogue',
  'palette.designer': 'Open Designer',
  'palette.school': 'Open Ontology School',
  'palette.importExport': 'Import / Export',
  'palette.summary': 'View Summary',
  'palette.about': 'About & Trademark Notice',
  'palette.help': 'Help',
  'palette.dataSources': 'Data Sources',
  'palette.theme': 'Switch Theme',

  // inspector panel
  'inspector.title': 'Inspector',
  'inspector.emptyTitle': 'Select an Element',
  'inspector.emptyText':
    'Click on an entity type or relationship in the graph to inspect its properties, data bindings, and connections.',
  'inspector.relationshipTitle': 'Relationship',
  'inspector.cardinality': 'Cardinality',
  'inspector.relationshipAttributes': 'Relationship Attributes',
  'inspector.entityTitle': 'Entity Type',
  'inspector.propertiesCount': 'Properties ({count})',
  'inspector.relationshipsCount': 'Relationships ({count})',
  'inspector.dataBindings': 'Data Bindings',
} as const;
