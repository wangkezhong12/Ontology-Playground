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
  'common.entityTypes': 'Entity Types',
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

  // stats panel
  'stats.title': 'Ontology Insights',

  // path finder panel
  'pathfinder.title': 'Path Finder',
  'pathfinder.from': 'From',
  'pathfinder.to': 'To',
  'pathfinder.selectEntity': 'Select entity…',
  'pathfinder.find': 'Find Path',
  'pathfinder.clear': 'Clear',
  'pathfinder.sameEntity': 'Select two different entities.',
  'pathfinder.noPath': 'No directed path found between these entities.',
  'pathfinder.shortestPathLabel': 'Shortest path —',
  'pathfinder.hop': '{count} hop',
  'pathfinder.hops': '{count} hops',

  // search & filter
  'search.title': 'Search & Filter',
  'search.placeholder': 'Search entities, properties...',
  'search.entitiesCount': 'Entities ({count})',
  'search.relationshipsCount': 'Relationships ({count})',
  'search.resultsLabel': 'Search results',
  'search.noResults': 'No results for "{query}"',
  'search.propertyCount': '{count} properties',

  // query playground
  'query.title': 'Natural Language Query (NL2Ontology)',
  'query.placeholder': 'Ask about {name}...',
  'query.clear': 'Clear',
  'query.clearQuery': 'Clear query',
  'query.run': 'Run query',
  'query.tryAsking': 'Try asking:',

  // about modal
  'modal.about.title': 'About Ontology Playground',
  'modal.about.closeLabel': 'Close about dialog',
  'modal.about.description':
    'Ontology Playground is a community learning and design experience for building RDF/OWL ontologies, exploring graph relationships, and preparing models compatible with Microsoft Fabric IQ workflows.',
  'modal.about.learnMore': 'Learn more about Microsoft Fabric IQ:',
  'modal.about.trademarkNotice': 'Trademark Notice',
  'modal.about.trademarkText':
    'Trademarks This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow Microsoft’s Trademark & Brand Guidelines. Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party’s policies.',

  // help modal (values may carry **strong** markers, parsed by parseInlineEmphasis)
  'modal.help.title': 'How to Use Ontology Playground (Preview)',
  'modal.help.exploreGraph.title': 'Explore the Graph',
  'modal.help.exploreGraph.text':
    'Click on any **entity type** (colored node) to see its properties, relationships, and data bindings. Click on **relationship lines** to see how entities connect. Use the controls in the bottom-left to zoom and reset the layout.',
  'modal.help.completeQuests.title': 'Complete Quests',
  'modal.help.completeQuests.text':
    'Select a quest from the left panel to start a guided journey. Follow the instructions to click on specific entities or relationships. Complete all steps to earn **badges** and **points**!',
  'modal.help.askQuestions.title': 'Ask Natural Language Questions',
  'modal.help.askQuestions.text':
    'Use the query playground in the bottom-right to ask questions like "Show me Gold tier customers" or "Which products come from Ethiopia?". The graph will highlight relevant entities and relationships.',
  'modal.help.viewDataBindings.title': 'View Data Bindings',
  'modal.help.viewDataBindings.text':
    'When you select an entity type, the inspector shows how ontology properties map to real data sources in a data lakehouse, including lakehouse tables and semantic models.',
  'modal.help.aboutOntology.title': 'About Microsoft Fabric IQ Ontology',
  'modal.help.aboutOntology.text':
    'An ontology is a shared, machine-understandable vocabulary of your business. It defines entity types (like Customer, Product), their properties, and relationships. This demo uses a fictional "Fourth Coffee" to illustrate these concepts.',
  'modal.help.keyboardShortcuts': 'Keyboard Shortcuts',
  'modal.help.shortcut.openPalette': 'Open command palette',
  'modal.help.shortcut.openHelp': 'Open this help dialog',
  'modal.help.shortcut.closeDialog': 'Close any dialog',
  'modal.help.shortcut.navigatePalette': 'Navigate palette results',
  'modal.help.shortcut.selectCommand': 'Select palette command',
  'modal.help.gotIt': 'Got it!',

  // data sources modal
  'modal.dataSources.subtitle': 'How the Fourth Coffee ontology binds to a Data Lakehouse',
  'modal.dataSources.lakehouseTitle': 'Data Lakehouse',
  'modal.dataSources.lakehouseDescription':
    'Unified storage layer for analytics. The ontology binds entity types to lakehouse tables and semantic models.',
  'modal.dataSources.propertiesMapped': '{count} properties mapped',
  'modal.dataSources.semanticModel': 'Semantic model',
  'modal.dataSources.lakehouse': 'Lakehouse',
  'modal.dataSources.sourceTable': 'Source Table:',
  'modal.dataSources.columnMappings': 'Column Mappings',
  'modal.dataSources.property': 'Property',
  'modal.dataSources.column': 'Column',
  'modal.dataSources.otherEntityTypes': 'Other Entity Types:',
  'modal.dataSources.demoNote':
    'In this demo, bindings are shown for Customer, Order, and Product. In a real deployment, all entities would be bound to data platform sources.',

  // welcome modal
  'modal.welcome.title': 'Welcome to Ontology Playground (Preview)',
  'modal.welcome.subtitle': 'Explore Microsoft Fabric IQ Ontology through the lens of Fourth Coffee',
  'modal.welcome.entityTypesText': 'Discover reusable logical models like Customer, Product, and Order',
  'modal.welcome.relationshipsText': 'See how entities connect with typed, directional links',
  'modal.welcome.dataBindingsText': 'Connect ontology concepts to real data platform sources',
  'modal.welcome.nlQueries': 'NL Queries',
  'modal.welcome.nlQueriesText': 'Ask questions in natural language and traverse the graph',
  'modal.welcome.startExploring': 'Start Exploring',
  'modal.welcome.footerText': 'Complete quests to earn badges and learn about Microsoft Fabric IQ Ontology',

  // footer
  'footer.builtWith': 'Built with GitHub Copilot',
  'footer.supervisedBy': 'Supervised by videlalvaro',
  'footer.deployedCommit': 'Deployed commit {sha}',

  // graph chrome
  'graph.focusMode': 'Focus mode',
  'graph.focusExitHint': 'Click background or ✕ to exit',
  'graph.zoomIn': 'Zoom In',
  'graph.zoomOut': 'Zoom Out',
  'graph.fit': 'Fit to View',
  'graph.resetLayout': 'Reset Layout',
  'graph.downloadPng': 'Download Graph as PNG',
} as const;
