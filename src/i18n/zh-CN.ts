import type { en } from './en';

/**
 * Chinese dictionary. Static keys are Partial — a missing key falls back to
 * the en value at runtime (that is the fallback story; do not add keys you
 * cannot translate yet). Data-driven keys (quest.*, template.*) carry no en
 * counterpart here: their English text lives in the src/data files and is
 * passed as the mandatory `fallback` argument of t().
 */
const staticZh: Partial<Record<keyof typeof en, string>> = {
  'common.close': '关闭',
  'common.save': '保存',
  'common.cancel': '取消',
  'common.delete': '删除',
  'common.add': '添加',
  'common.edit': '编辑',
  'common.search': '搜索',
  'common.loading': '加载中…',
  'common.copy': '复制',
  'common.copied': '已复制！',
  'common.download': '下载',
  'common.import': '导入',
  'common.export': '导出',
  'common.back': '返回',
  'common.next': '下一步',
  'common.done': '完成',
  'common.none': '无',
  'common.entities': '实体',
  'common.entityTypes': '实体类型',
  'common.relationships': '关系',
  'common.properties': '属性',

  'quest.panelTitle': '任务',
  'quest.abandon': '放弃',
  'quest.earnedBadges': '已获得徽章（{count}）',
  'quest.points': '+{count} 分',
  'quest.totalPoints': '总计：{count} 分',
  'quest.difficulty.beginner': '初级',
  'quest.difficulty.intermediate': '中级',
  'quest.difficulty.advanced': '高级',

  // NOTE: 'test.enOnlyFixture' intentionally absent — fallback test relies on it.

  // header
  'header.preview': '（预览）',
  'header.untitled': '未命名本体',
  'header.points': '分',
  'header.badges': '徽章',
  'header.share': '分享',
  'header.copied': '已复制！',
  'header.downloadedRdf': '已下载 RDF',
  'header.encoding': '编码中…',
  'header.shareTitleLink': '复制此本体的分享链接',
  'header.shareTitleDownload': '通过链接分享此本体',
  'header.summary': '摘要',
  'header.summaryTitle': '查看本体摘要',
  'header.aiBuilder': 'AI 构建器',
  'header.catalogue': '目录',
  'header.designer': '设计器',
  'header.school': '本体学院',
  'header.importExport': '导入 / 导出',
  'header.help': '帮助',
  'header.about': '关于',
  'header.dataSources': '数据源',
  'header.theme': '主题',
  'header.menu': '菜单',
  'header.theme.dark': '深色',
  'header.theme.light': '浅色',
  'header.theme.aurora': '极光',
  'header.theme.crimson': '绯红',

  // app shell
  'app.graph': '图',
  'app.quests': '任务',
  'app.inspector': '检查器',
  'app.query': '查询',
  'app.close': '✕ 关闭',
  'app.title': 'Ontology Playground (Preview) | Interactive Ontology Explorer',
  'app.titleZh': 'Ontology Playground（预览）| 交互式本体浏览器',
  'toast.questComplete': '任务完成！获得：{badge}',
  // command palette
  'palette.catalogue': '打开目录',
  'palette.designer': '打开设计器',
  'palette.school': '打开本体学院',
  'palette.importExport': '导入 / 导出',
  'palette.summary': '查看摘要',
  'palette.about': '关于与商标声明',
  'palette.help': '帮助',
  'palette.dataSources': '数据源',
  'palette.theme': '切换主题',

  // inspector panel
  'inspector.title': '检查器',
  'inspector.emptyTitle': '选择一个元素',
  'inspector.emptyText':
    '点击图中的实体类型或关系，查看其属性、数据绑定和连接。',
  'inspector.relationshipTitle': '关系',
  'inspector.cardinality': '基数',
  'inspector.relationshipAttributes': '关系属性',
  'inspector.entityTitle': '实体类型',
  'inspector.propertiesCount': '属性（{count}）',
  'inspector.relationshipsCount': '关系（{count}）',
  'inspector.dataBindings': '数据绑定',

  // stats panel
  'stats.title': '本体洞察',

  // path finder panel
  'pathfinder.title': '路径查找',
  'pathfinder.from': '起点',
  'pathfinder.to': '终点',
  'pathfinder.selectEntity': '选择实体…',
  'pathfinder.find': '查找路径',
  'pathfinder.clear': '清空',
  'pathfinder.sameEntity': '请选择两个不同的实体。',
  'pathfinder.noPath': '未找到这些实体之间的有向路径。',
  'pathfinder.shortestPathLabel': '最短路径 —',
  'pathfinder.hop': '{count} 跳',
  'pathfinder.hops': '{count} 跳',

  // search & filter
  'search.title': '搜索与筛选',
  'search.placeholder': '搜索实体、属性…',
  'search.entitiesCount': '实体（{count}）',
  'search.relationshipsCount': '关系（{count}）',
  'search.resultsLabel': '搜索结果',
  'search.noResults': '未找到“{query}”的相关结果',
  'search.propertyCount': '{count} 个属性',

  // query playground
  'query.title': '自然语言查询（NL2Ontology）',
  'query.placeholder': '询问 {name}…',
  'query.clear': '清空',
  'query.clearQuery': '清空查询',
  'query.run': '运行查询',
  'query.tryAsking': '试试提问：',

  // about modal
  'modal.about.title': '关于 Ontology Playground',
  'modal.about.closeLabel': '关闭关于对话框',
  'modal.about.description':
    'Ontology Playground 是一个社区学习与设计体验，用于构建 RDF/OWL 本体、探索图形关系，以及准备与 Microsoft Fabric IQ 工作流兼容的模型。',
  'modal.about.learnMore': '详细了解 Microsoft Fabric IQ：',
  'modal.about.trademarkNotice': '商标声明',
  'modal.about.trademarkText':
    '商标 本项目可能包含各种项目、产品或服务的商标或徽标。经授权使用 Microsoft 商标或徽标必须遵循 Microsoft 的《商标与品牌指南》。在修改后的项目版本中使用 Microsoft 商标或徽标，不得造成混淆或暗示获得 Microsoft 赞助。任何第三方商标或徽标的使用均受相应第三方政策的约束。',

  // help modal（值中可含 **强调** 标记，由 parseInlineEmphasis 解析）
  'modal.help.title': '如何使用 Ontology Playground（预览）',
  'modal.help.exploreGraph.title': '探索图形',
  'modal.help.exploreGraph.text':
    '点击任意**实体类型**（彩色节点），查看其属性、关系和数据绑定。点击**关系连线**，了解实体之间的连接方式。使用左下角的控件进行缩放和重置布局。',
  'modal.help.completeQuests.title': '完成任务',
  'modal.help.completeQuests.text':
    '从左侧面板选择一个任务，开始引导式旅程。按照说明点击特定的实体或关系。完成所有步骤即可赢取**徽章**和**积分**！',
  'modal.help.askQuestions.title': '提出自然语言问题',
  'modal.help.askQuestions.text':
    '使用右下角的查询演练场提出问题，例如“Show me Gold tier customers”或“Which products come from Ethiopia?”。图形将高亮显示相关的实体和关系。',
  'modal.help.viewDataBindings.title': '查看数据绑定',
  'modal.help.viewDataBindings.text':
    '选择实体类型时，检查器会显示本体属性如何映射到 lakehouse 中的真实数据源，包括 lakehouse 表和语义模型。',
  'modal.help.aboutOntology.title': '关于 Microsoft Fabric IQ 本体',
  'modal.help.aboutOntology.text':
    '本体是对业务的一种共享的、机器可理解的词汇表。它定义实体类型（如 Customer、Product）及其属性和关系。此演示使用虚构的“Fourth Coffee”来说明这些概念。',
  'modal.help.keyboardShortcuts': '键盘快捷键',
  'modal.help.shortcut.openPalette': '打开命令面板',
  'modal.help.shortcut.openHelp': '打开此帮助对话框',
  'modal.help.shortcut.closeDialog': '关闭任意对话框',
  'modal.help.shortcut.navigatePalette': '在面板结果间导航',
  'modal.help.shortcut.selectCommand': '选择面板命令',
  'modal.help.gotIt': '知道了！',

  // data sources modal
  'modal.dataSources.subtitle': 'Fourth Coffee 本体如何绑定到 Data Lakehouse',
  'modal.dataSources.lakehouseTitle': 'Data Lakehouse',
  'modal.dataSources.lakehouseDescription':
    '统一的分析存储层。本体将实体类型绑定到 lakehouse 表和语义模型。',
  'modal.dataSources.propertiesMapped': '已映射 {count} 个属性',
  'modal.dataSources.semanticModel': '语义模型',
  'modal.dataSources.lakehouse': 'Lakehouse',
  'modal.dataSources.sourceTable': '源表：',
  'modal.dataSources.columnMappings': '列映射',
  'modal.dataSources.property': '属性',
  'modal.dataSources.column': '列',
  'modal.dataSources.otherEntityTypes': '其他实体类型：',
  'modal.dataSources.demoNote':
    '在此演示中，展示了 Customer、Order 和 Product 的绑定。在真实部署中，所有实体都将绑定到数据平台数据源。',

  // welcome modal
  'modal.welcome.title': '欢迎使用 Ontology Playground（预览）',
  'modal.welcome.subtitle': '透过 Fourth Coffee 的视角探索 Microsoft Fabric IQ 本体',
  'modal.welcome.entityTypesText': '探索可复用的逻辑模型，如 Customer、Product 和 Order',
  'modal.welcome.relationshipsText': '了解实体如何通过有类型的定向链接进行连接',
  'modal.welcome.dataBindingsText': '将本体概念连接到真实的数据平台数据源',
  'modal.welcome.nlQueries': '自然语言查询',
  'modal.welcome.nlQueriesText': '用自然语言提问并遍历图形',
  'modal.welcome.startExploring': '开始探索',
  'modal.welcome.footerText': '完成任务以赢取徽章，并了解 Microsoft Fabric IQ 本体',

  // footer
  'footer.builtWith': '使用 GitHub Copilot 构建',
  'footer.supervisedBy': '由 videlalvaro 指导',
  'footer.deployedCommit': '部署提交 {sha}',

  // graph chrome
  'graph.focusMode': '聚焦模式',
  'graph.focusExitHint': '点击背景或 ✕ 退出',
  'graph.zoomIn': '放大',
  'graph.zoomOut': '缩小',
  'graph.fit': '适应视图',
  'graph.resetLayout': '重置布局',
  'graph.downloadPng': '将图形下载为 PNG',
};

// Data-driven keys (quests, designer templates).
const dataZh: Record<string, string> = {
  // seeded now for the guard test; remaining static-quest keys land in Chunk 4
  'quest.quest-1.title': '认识实体',
  'quest.quest-1.step.step-1-1.instruction': '点击 Customer 实体，了解顾客的相关信息',
};

// dataZh wins over staticZh on key collision — load-bearing in Chunk 4,
// where quest.<id>.* data keys must resolve from dataZh (static quests)
// while generated quests bypass the dictionary entirely.
export const zhCN: Record<string, string> = { ...staticZh, ...dataZh };
