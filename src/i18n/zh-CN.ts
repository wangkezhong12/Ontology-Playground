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
  'common.ontologyCounts': '{entityTypes} 个实体类型，{relationships} 个关系',

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
  // palette chrome（命令标签由 App.tsx 传入，已完成本地化）
  'palette.placeholder': '输入命令…',
  'palette.empty': '没有匹配的命令',
  'palette.footerToOpen': '打开',
  'palette.footerNavigate': '↑↓ 导航',
  'palette.footerSelect': '↵ 选择',

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
  // 供 GalleryModal 卡片使用（命名空间沿用既有键名）
  'stats.entitiesCount': '{count} 个实体',
  'stats.relationshipsCount': '{count} 个关系',

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

  // 导入 / 导出模态框
  'modal.importExport.title': '导入 / 导出本体',
  'modal.importExport.subtitle': '加载您自己的本体或导出当前本体',
  'modal.importExport.currentlyLoaded': '当前已加载',
  'modal.importExport.resetToDefault': '重置为默认',
  'modal.importExport.loadSuccess': '本体加载成功！',
  'modal.importExport.importOntology': '导入本体',
  'modal.importExport.dropLegacy': '拖放 JSON 或 RDF/OWL 文件到此处',
  'modal.importExport.dropRdf': '拖放 RDF/OWL（.rdf、.owl、.iq）文件到此处',
  'modal.importExport.exportCurrent': '导出当前',
  'modal.importExport.rdfFormatTitle': '用于 MS Fabric 的 RDF/XML 格式',
  'modal.importExport.downloadFormat': '下载 .{format}',
  'modal.importExport.downloadRdf': '下载 RDF/OWL',
  'modal.importExport.jsonSchemaReference': 'JSON 架构参考',
  'modal.importExport.rdfParseError': 'RDF 解析错误：{message}',
  'modal.importExport.unsupportedFormatLegacy':
    '不支持的文件格式：“{name}”。请导入 RDF/OWL（.rdf、.owl、.iq）或 JSON（.json）文件。',
  'modal.importExport.unsupportedFormatRdf':
    '不支持的文件格式：“{name}”。请导入 RDF/OWL（.rdf、.owl、.iq）文件。',
  'modal.importExport.invalidStructure': '本体结构无效。必须包含 ontology.entityTypes 和 ontology.relationships。',
  'modal.importExport.parseFailed': '解析文件失败',

  // Fabric 推送模态框（含共享的推送按钮文案）
  'modal.fabric.push': '推送到 Microsoft Fabric',
  'modal.fabric.subtitle': '在您的 Fabric 工作区中创建或更新本体',
  'modal.fabric.workspaceId': '工作区 ID',
  'modal.fabric.workspaceIdHint': '可在 Fabric 门户 → 工作区设置 → 概览中找到',
  'modal.fabric.accessToken': '访问令牌',
  'modal.fabric.tokenPlaceholder': '在此粘贴您的 bearer 令牌',
  'modal.fabric.tokenHintPrefix': '具有 ',
  'modal.fabric.tokenHintSuffix': ' 权限范围的 bearer 令牌。可从 Fabric REST API 的“Try It”页面或通过 MSAL 获取。',
  'modal.fabric.connecting': '连接中…',
  'modal.fabric.connect': '连接到工作区',
  'modal.fabric.action': '操作',
  'modal.fabric.createMode': '新建',
  'modal.fabric.updateMode': '更新现有（{count}）',
  'modal.fabric.selectOntology': '选择本体',
  'modal.fabric.selectPlaceholder': '— 请选择 —',
  'modal.fabric.createAndPush': '创建并推送',
  'modal.fabric.updateDefinition': '更新定义',
  'modal.fabric.creating': '正在 Fabric 中创建本体…',
  'modal.fabric.updating': '正在更新本体定义…',
  'modal.fabric.provisioningHint': 'Fabric 正在预配资源，可能需要一些时间。',
  'modal.fabric.created': '本体已创建！',
  'modal.fabric.updated': '定义已更新！',
  'modal.fabric.resultName': '名称：',
  'modal.fabric.resultId': 'ID：',
  'modal.fabric.resultWorkspace': '工作区：',
  'modal.fabric.pushFailedHint': '推送失败。请检查上方的错误并重试。',
  'modal.fabric.startOver': '重新开始',
  'modal.fabric.errorRequired': '令牌和工作区 ID 均为必填项。',
  'modal.fabric.errorUuid': '工作区 ID 必须为有效的 UUID（例如 cfafbeb1-8037-4d0c-896e-a46fb27ff229）。',
  'modal.fabric.apiError': 'API 错误（{status}）：{message}',
  'modal.fabric.connectFailed': '无法连接到工作区',
  'modal.fabric.pushFailed': '推送失败',

  // 本体目录模态框（目录名称、标签、作者为数据内容，保持原样）
  'modal.gallery.title': '本体目录',
  'modal.gallery.subtitle': '浏览并加载目录中的本体',
  'modal.gallery.searchPlaceholder': '搜索本体…',
  'modal.gallery.allSources': '所有来源',
  'modal.gallery.sourceOfficial': '官方',
  'modal.gallery.sourceExternal': '外部',
  'modal.gallery.sourceCommunity': '社区',
  'modal.gallery.allCategories': '所有分类',
  'modal.gallery.loading': '正在加载目录…',
  'modal.gallery.loadError': '加载目录失败（{status}）',
  'modal.gallery.empty': '没有符合筛选条件的本体。',
  'modal.gallery.showingOne': '正在显示 {total} 个本体中的 {visible} 个',
  'modal.gallery.showingMany': '正在显示 {total} 个本体中的 {visible} 个',
  'modal.gallery.active': '使用中',
  'modal.gallery.viewRdf': '查看 RDF 源码',
  'modal.gallery.copyEmbed': '复制嵌入代码',
  'modal.gallery.editInDesigner': '在设计器中编辑',
  'modal.gallery.load': '加载',
  'modal.gallery.showMore': '显示更多（还剩 {count} 个）',
  'modal.gallery.contributePrefix': '想要贡献？请参阅 ',
  'modal.gallery.contributeMiddle': '——以 RDF 文件的形式添加您的本体，并',
  'modal.gallery.contributePr': '提交 PR',
  'modal.gallery.contributeSuffix': '。',

  // 本体摘要模态框
  'modal.summary.title': '本体摘要',
  'modal.summary.copyToClipboard': '复制到剪贴板',

  // 新手引导（聚光灯覆盖层）
  'tour.step1.title': '导航与操作',
  'tour.step1.body': '使用工具栏访问目录、设计器、学习文章、导入/导出等。随时按 ⌘K 打开命令面板。',
  'tour.step2.title': '本体图',
  'tour.step2.body': '这是以交互图形式呈现的本体。点击实体节点或关系连线即可查看其详情。',
  'tour.step3.body': '完成引导式任务，逐步学习本体概念。沿途赢取徽章和积分！',
  'tour.step4.title': '检查器与查询',
  'tour.step4.body': '选择一个实体，查看其属性和数据绑定。使用底部的查询栏提出自然语言问题。',
  'tour.step5.title': '本体设计器',
  'tour.step5.body': '从零开始构建您自己的本体，或从模板入手。导出为 RDF，或提交到社区目录。',
  'tour.stepOf': '第 {n} 步，共 {total} 步',
  'tour.closeLabel': '关闭引导',
  'tour.back': '上一步',
  'tour.finish': '完成',
  'tour.skip': '跳过引导 · 不再显示',

  // NL 构建器模态框（由 VITE_ENABLE_AI_BUILDER 门控）
  'modal.nlBuilder.title': '描述您的本体',
  'modal.nlBuilder.subtitle': '用自然语言描述您的业务场景，或使用语音输入。AI 将提取实体、关系和属性来创建本体。',
  'modal.nlBuilder.placeholder': '描述您的业务场景…',
  'modal.nlBuilder.stopRecording': '停止录音',
  'modal.nlBuilder.startVoice': '开始语音输入',
  'modal.nlBuilder.listening': '正在聆听…请说出您的本体描述',
  'modal.nlBuilder.tryExample': '试试示例：',
  'modal.nlBuilder.example1': '我经营一家医院，有医生、患者和科室。患者前来就诊。',
  'modal.nlBuilder.example2': '一个电商平台，包含商品、客户、订单和评价。客户可以退货。',
  'modal.nlBuilder.example3': '一所大学，包含学生、教授、课程和院系。学生选修课程。',
  'modal.nlBuilder.example4': '一家连锁餐厅，包含门店、员工、菜单项以及带预订的客户订单。',
  'modal.nlBuilder.generate': '生成本体',
  'modal.nlBuilder.analyzing': '正在分析您的描述…',
  'modal.nlBuilder.extracting': '正在提取实体、关系和属性',
  'modal.nlBuilder.preview': '预览',
  'modal.nlBuilder.editJson': '编辑 JSON',
  'modal.nlBuilder.propsCount': '{count} 个属性',
  'modal.nlBuilder.back': '← 返回',
  'modal.nlBuilder.apply': '应用本体',
  'modal.nlBuilder.generationFailed': '生成失败',
  'modal.nlBuilder.unknownError': '发生未知错误',
  'modal.nlBuilder.errorUnknown': '发生未知错误',
  'modal.nlBuilder.tryAgain': '重试',
  'modal.nlBuilder.invalidJson': '编辑器中的 JSON 无效',
  'modal.nlBuilder.generateFailed': '生成本体失败',
  'modal.nlBuilder.voiceNetwork': '网络错误 - 请尝试使用 Chrome 或 Safari',
  'modal.nlBuilder.voiceDenied': '麦克风访问被拒绝',
  'modal.nlBuilder.voiceStartFailed': '启动失败 - 请尝试使用 Chrome 或 Safari',

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
