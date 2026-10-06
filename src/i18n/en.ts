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
  'common.ontologyCounts': '{entityTypes} entity types, {relationships} relationships',

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
  // palette chrome (command labels come from App.tsx and arrive pre-localized)
  'palette.placeholder': 'Type a command…',
  'palette.empty': 'No matching commands',
  'palette.footerToOpen': 'to open',
  'palette.footerNavigate': '↑↓ navigate',
  'palette.footerSelect': '↵ select',

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
  // used by GalleryModal cards (established key name despite the namespace)
  'stats.entitiesCount': '{count} entities',
  'stats.relationshipsCount': '{count} relationships',

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

  // import / export modal (error keys keep en byte-faithful to the original
  // thrown messages — pinned by ImportExportModal.test.tsx)
  'modal.importExport.title': 'Import / Export Ontology',
  'modal.importExport.subtitle': 'Load your own ontology or export the current one',
  'modal.importExport.currentlyLoaded': 'Currently Loaded',
  'modal.importExport.resetToDefault': 'Reset to Default',
  'modal.importExport.loadSuccess': 'Ontology loaded successfully!',
  'modal.importExport.importOntology': 'Import Ontology',
  'modal.importExport.dropLegacy': 'Drop JSON or RDF/OWL file here',
  'modal.importExport.dropRdf': 'Drop RDF/OWL (.rdf, .owl, .iq) file here',
  'modal.importExport.exportCurrent': 'Export Current',
  'modal.importExport.rdfFormatTitle': 'RDF/XML format for MS Fabric',
  'modal.importExport.downloadFormat': 'Download .{format}',
  'modal.importExport.downloadRdf': 'Download RDF/OWL',
  'modal.importExport.jsonSchemaReference': 'JSON Schema Reference',
  'modal.importExport.rdfParseError': 'RDF parse error: {message}',
  'modal.importExport.unsupportedFormatLegacy':
    'Unsupported file format: "{name}". Please import an RDF/OWL (.rdf, .owl, .iq) or JSON (.json) file.',
  'modal.importExport.unsupportedFormatRdf':
    'Unsupported file format: "{name}". Please import an RDF/OWL (.rdf, .owl, .iq) file.',
  'modal.importExport.invalidStructure':
    'Invalid ontology structure. Must have ontology.entityTypes and ontology.relationships.',
  'modal.importExport.parseFailed': 'Failed to parse file',

  // fabric export modal (also owns the shared Push button label)
  'modal.fabric.push': 'Push to Microsoft Fabric',
  'modal.fabric.subtitle': 'Create or update an ontology in your Fabric workspace',
  'modal.fabric.workspaceId': 'Workspace ID',
  'modal.fabric.workspaceIdHint': 'Find this in Fabric portal → Workspace settings → Overview',
  'modal.fabric.accessToken': 'Access Token',
  'modal.fabric.tokenPlaceholder': 'Paste your bearer token here',
  'modal.fabric.tokenHintPrefix': 'Bearer token with ',
  'modal.fabric.tokenHintSuffix': ' scope. Get one from the Fabric REST API "Try It" page or via MSAL.',
  'modal.fabric.connecting': 'Connecting...',
  'modal.fabric.connect': 'Connect to Workspace',
  'modal.fabric.action': 'Action',
  'modal.fabric.createMode': 'Create New',
  'modal.fabric.updateMode': 'Update Existing ({count})',
  'modal.fabric.selectOntology': 'Select Ontology',
  'modal.fabric.selectPlaceholder': '— Select —',
  'modal.fabric.createAndPush': 'Create & Push',
  'modal.fabric.updateDefinition': 'Update Definition',
  'modal.fabric.creating': 'Creating ontology in Fabric...',
  'modal.fabric.updating': 'Updating ontology definition...',
  'modal.fabric.provisioningHint': 'This may take a moment while Fabric provisions the resource.',
  'modal.fabric.created': 'Ontology Created!',
  'modal.fabric.updated': 'Definition Updated!',
  'modal.fabric.resultName': 'Name:',
  'modal.fabric.resultId': 'ID:',
  'modal.fabric.resultWorkspace': 'Workspace:',
  'modal.fabric.pushFailedHint': 'Push failed. Check the error above and try again.',
  'modal.fabric.startOver': 'Start Over',
  'modal.fabric.errorRequired': 'Both token and workspace ID are required.',
  'modal.fabric.errorUuid':
    'Workspace ID must be a valid UUID (e.g., cfafbeb1-8037-4d0c-896e-a46fb27ff229).',
  'modal.fabric.apiError': 'API error ({status}): {message}',
  'modal.fabric.connectFailed': 'Failed to connect to workspace',
  'modal.fabric.pushFailed': 'Push failed',

  // gallery modal (catalogue names/tags/authors are data-driven content and stay as-is)
  'modal.gallery.title': 'Ontology Gallery',
  'modal.gallery.subtitle': 'Browse and load ontologies from the catalogue',
  'modal.gallery.searchPlaceholder': 'Search by name, tag, author…',
  'modal.gallery.allSources': 'All sources',
  'modal.gallery.sourceOfficial': 'Official',
  'modal.gallery.sourceExternal': 'External',
  'modal.gallery.sourceCommunity': 'Community',
  'modal.gallery.allCategories': 'All categories',
  'modal.gallery.loading': 'Loading catalogue…',
  'modal.gallery.loadError': 'Failed to load catalogue ({status})',
  'modal.gallery.empty': 'No ontologies match your filters.',
  'modal.gallery.showingOne': 'Showing {visible} of {total} ontology',
  'modal.gallery.showingMany': 'Showing {visible} of {total} ontologies',
  'modal.gallery.active': 'Active',
  'modal.gallery.viewRdf': 'View RDF source',
  'modal.gallery.copyEmbed': 'Copy embed code',
  'modal.gallery.editInDesigner': 'Edit in Designer',
  'modal.gallery.load': 'Load',
  'modal.gallery.showMore': 'Show more ({count} remaining)',
  'modal.gallery.contributePrefix': 'Want to contribute? See ',
  'modal.gallery.contributeMiddle': ' — add your ontology as an RDF file and ',
  'modal.gallery.contributePr': 'open a PR',
  'modal.gallery.contributeSuffix': '.',

  // ontology summary modal (markdown export body is generated content, stays English)
  'modal.summary.title': 'Ontology Summary',
  'modal.summary.copyToClipboard': 'Copy to clipboard',

  // guided tour (spotlight overlay)
  'tour.step1.title': 'Navigation & Actions',
  'tour.step1.body':
    'Use the toolbar to access the Catalogue, Designer, Learn articles, Import/Export, and more. Press ⌘K anytime to open the command palette.',
  'tour.step2.title': 'Ontology Graph',
  'tour.step2.body':
    'This is your ontology visualized as an interactive graph. Click on entity nodes or relationship edges to inspect them.',
  'tour.step3.body':
    'Complete guided quests to learn ontology concepts step by step. Earn badges and points along the way!',
  'tour.step4.title': 'Inspector & Query',
  'tour.step4.body':
    'Select an entity to see its properties and data bindings. Use the query bar at the bottom to ask natural language questions.',
  'tour.step5.title': 'Ontology Designer',
  'tour.step5.body':
    'Build your own ontologies from scratch or start from a template. Export as RDF or submit to the community catalogue.',
  'tour.stepOf': 'Step {n} of {total}',
  'tour.closeLabel': 'Close tour',
  'tour.back': 'Back',
  'tour.finish': 'Get started!',
  'tour.skip': "Skip tour · don't show again",

  // NL builder modal (gated behind VITE_ENABLE_AI_BUILDER)
  'modal.nlBuilder.title': 'Describe Your Ontology',
  'modal.nlBuilder.subtitle':
    'Describe your business scenario in natural language or use voice input. AI will extract entities, relationships, and properties to create an ontology.',
  'modal.nlBuilder.placeholder': 'Describe your business scenario...',
  'modal.nlBuilder.stopRecording': 'Stop recording',
  'modal.nlBuilder.startVoice': 'Start voice input',
  'modal.nlBuilder.listening': 'Listening... Speak your ontology description',
  'modal.nlBuilder.tryExample': 'Try an example:',
  'modal.nlBuilder.example1':
    'I run a hospital with doctors, patients, and departments. Patients visit doctors for appointments.',
  'modal.nlBuilder.example2':
    'An e-commerce platform with products, customers, orders, and reviews. Customers can return items.',
  'modal.nlBuilder.example3':
    'A university with students, professors, courses, and departments. Students enroll in courses.',
  'modal.nlBuilder.example4':
    'A restaurant chain with locations, employees, menu items, and customer orders with reservations.',
  'modal.nlBuilder.generate': 'Generate Ontology',
  'modal.nlBuilder.analyzing': 'Analyzing your description...',
  'modal.nlBuilder.extracting': 'Extracting entities, relationships, and properties',
  'modal.nlBuilder.preview': 'Preview',
  'modal.nlBuilder.editJson': 'Edit JSON',
  'modal.nlBuilder.propsCount': '{count} props',
  'modal.nlBuilder.back': '← Back',
  'modal.nlBuilder.apply': 'Apply Ontology',
  'modal.nlBuilder.generationFailed': 'Generation Failed',
  'modal.nlBuilder.unknownError': 'An unknown error occurred',
  'modal.nlBuilder.errorUnknown': 'Unknown error occurred',
  'modal.nlBuilder.tryAgain': 'Try Again',
  'modal.nlBuilder.invalidJson': 'Invalid JSON in editor',
  'modal.nlBuilder.generateFailed': 'Failed to generate ontology',
  'modal.nlBuilder.voiceNetwork': 'Network error - try Chrome or Safari',
  'modal.nlBuilder.voiceDenied': 'Microphone access denied',
  'modal.nlBuilder.voiceStartFailed': 'Failed to start - try Chrome or Safari',

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
