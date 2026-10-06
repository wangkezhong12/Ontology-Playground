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
